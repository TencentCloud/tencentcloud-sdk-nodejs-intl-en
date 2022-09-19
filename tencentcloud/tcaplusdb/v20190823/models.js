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
 * ImportSnapshots response structure.
 * @class
 */
class ImportSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `TaskId` is in the format of `AppInstanceId-taskId`, used to identify tasks of different clusters.
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
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
 * Compare the meta information of two tables
 * @class
 */
class CompareTablesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID of the source table
         * @type {string || null}
         */
        this.SrcTableClusterId = null;

        /**
         * Table group ID of the source table
         * @type {string || null}
         */
        this.SrcTableGroupId = null;

        /**
         * Source table name
         * @type {string || null}
         */
        this.SrcTableName = null;

        /**
         * Cluster ID of the target table
         * @type {string || null}
         */
        this.DstTableClusterId = null;

        /**
         * Table group ID of the target table
         * @type {string || null}
         */
        this.DstTableGroupId = null;

        /**
         * Target table name
         * @type {string || null}
         */
        this.DstTableName = null;

        /**
         * Source table ID
         * @type {string || null}
         */
        this.SrcTableInstanceId = null;

        /**
         * Target table ID
         * @type {string || null}
         */
        this.DstTableInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcTableClusterId = 'SrcTableClusterId' in params ? params.SrcTableClusterId : null;
        this.SrcTableGroupId = 'SrcTableGroupId' in params ? params.SrcTableGroupId : null;
        this.SrcTableName = 'SrcTableName' in params ? params.SrcTableName : null;
        this.DstTableClusterId = 'DstTableClusterId' in params ? params.DstTableClusterId : null;
        this.DstTableGroupId = 'DstTableGroupId' in params ? params.DstTableGroupId : null;
        this.DstTableName = 'DstTableName' in params ? params.DstTableName : null;
        this.SrcTableInstanceId = 'SrcTableInstanceId' in params ? params.SrcTableInstanceId : null;
        this.DstTableInstanceId = 'DstTableInstanceId' in params ? params.DstTableInstanceId : null;

    }
}

/**
 * ModifyClusterName request structure.
 * @class
 */
class ModifyClusterNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster to be renamed
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name to be changed to, which can contain up to 32 letters and digits
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * ModifyTableGroupName response structure.
 * @class
 */
class ModifyTableGroupNameResponse extends  AbstractModel {
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
 * DescribeTableTags request structure.
 * @class
 */
class DescribeTableTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where a table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Table list
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * ModifyClusterPassword response structure.
 * @class
 */
class ModifyClusterPasswordResponse extends  AbstractModel {
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
 * DeleteCluster response structure.
 * @class
 */
class DeleteClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID generated by cluster deletion
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
 * DeleteTableIndex response structure.
 * @class
 */
class DeleteTableIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of tables whose global indexes are deleted
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of global index deletion results
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Table rollback result information
 * @class
 */
class TableRollbackResultNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table instance ID in the format of `tcaplus-3be64cbb`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * Task ID, which is valid for the API that creates one task
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Table name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Table data structure type, such as `GENERIC` or `LIST`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * Table data interface description language (IDL) type, such as `PROTO` or `TDR`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * ID of the table group where a table resides
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Error message
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * Task ID list, which is valid for the API that creates multiple tasks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * ID of uploaded key file
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * Number of keys successfully verified
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SuccKeyNum = null;

        /**
         * Total number of keys contained in key file
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalKeyNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.SuccKeyNum = 'SuccKeyNum' in params ? params.SuccKeyNum : null;
        this.TotalKeyNum = 'TotalKeyNum' in params ? params.TotalKeyNum : null;

    }
}

/**
 * Application ID and status
 * @class
 */
class ApplyStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Value format: cluster ID-application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Status. Valid values: `-1` (canceled), `0` (pending approval), `1` (application approved and task submitted), `2` (rejected). Only applications in the pending approval status can be updated.
         * @type {number || null}
         */
        this.ApplicationStatus = null;

        /**
         * Application type
         * @type {number || null}
         */
        this.ApplicationType = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationStatus = 'ApplicationStatus' in params ? params.ApplicationStatus : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * `ServerList`, the list of machines at the storage layer (tcapsvr)
 * @class
 */
class ServerMachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the machine
         * @type {string || null}
         */
        this.ServerUid = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.MachineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerUid = 'ServerUid' in params ? params.ServerUid : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

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
         * Number of tables
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Table details result list
         * @type {Array.<TableInfoNew> || null}
         */
        this.TableInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new TableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySnapshots response structure.
 * @class
 */
class ModifySnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of snapshots modified in batches
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The result list of snapshots modified in batches
         * @type {Array.<SnapshotResult> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new SnapshotResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateApply response structure.
 * @class
 */
class UpdateApplyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of updated applications
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<ApplyResult> || null}
         */
        this.ApplyResults = null;

        /**
         * Total number of updated applications
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

        if (params.ApplyResults) {
            this.ApplyResults = new Array();
            for (let z in params.ApplyResults) {
                let obj = new ApplyResult();
                obj.deserialize(params.ApplyResults[z]);
                this.ApplyResults.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCluster request structure.
 * @class
 */
class DeleteClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of cluster to be deleted
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * The list of tables to which the specified fields belong
 * @class
 */
class SelectedTableWithField extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the table group where the table resides
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Table ID
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * Table description language. Valid values: `PROTO`, `TDR`
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * Table data structure. Valid values: `GENERIC`, `LIST`
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * The list of fields on which indexes will be created, table caching enabled, or data subscription enabled
         * @type {Array.<FieldInfo> || null}
         */
        this.SelectedFields = null;

        /**
         * The number of index shards
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * CKafka instance information
         * @type {KafkaInfo || null}
         */
        this.KafkaInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableType = 'TableType' in params ? params.TableType : null;

        if (params.SelectedFields) {
            this.SelectedFields = new Array();
            for (let z in params.SelectedFields) {
                let obj = new FieldInfo();
                obj.deserialize(params.SelectedFields[z]);
                this.SelectedFields.push(obj);
            }
        }
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;

        if (params.KafkaInfo) {
            let obj = new KafkaInfo();
            obj.deserialize(params.KafkaInfo)
            this.KafkaInfo = obj;
        }

    }
}

/**
 * DeleteTableIndex request structure.
 * @class
 */
class DeleteTableIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where the table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The list of tables whose global indexes need to be deleted
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * Information of the machine at the access layer (tcaproxy)
 * @class
 */
class ProxyMachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID
         * @type {string || null}
         */
        this.ProxyUid = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * The number of proxy resources to be assigned
         * @type {number || null}
         */
        this.AvailableCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyUid = 'ProxyUid' in params ? params.ProxyUid : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.AvailableCount = 'AvailableCount' in params ? params.AvailableCount : null;

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
         * Number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of details of queried tasks
         * @type {Array.<TaskInfoNew> || null}
         */
        this.TaskInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new TaskInfoNew();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTables request structure.
 * @class
 */
class DeleteTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where the table to be dropped resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of information of tables to be dropped
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DescribeRegions response structure.
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of queried AZs
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of AZ query results
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RegionInfos) {
            this.RegionInfos = new Array();
            for (let z in params.RegionInfos) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionInfos[z]);
                this.RegionInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTableDataFlow response structure.
 * @class
 */
class SetTableDataFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of tables for which data subscription has been enabled
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The result list of tables for which data subscription has been enabled
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of selected table
 * @class
 */
class SelectedTableInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the table group where a table resides
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Table instance ID
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * Table description language type. Valid values: PROTO, TDR
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * Table data structure type. Valid values: GENERIC, LIST
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * Number of LIST-type table elements
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * Reserved table capacity in GB
         * @type {number || null}
         */
        this.ReservedVolume = null;

        /**
         * Reserved table read QPS
         * @type {number || null}
         */
        this.ReservedReadQps = null;

        /**
         * Reserved table write QPS
         * @type {number || null}
         */
        this.ReservedWriteQps = null;

        /**
         * Table remarks
         * @type {string || null}
         */
        this.Memo = null;

        /**
         * Key rollback filename, which is only used for rollback
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Key rollback file extension, which is only used for rollback
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * Key rollback file size, which is only used for rollback
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Key rollback file content, which is only used for rollback
         * @type {string || null}
         */
        this.FileContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.ListElementNum = 'ListElementNum' in params ? params.ListElementNum : null;
        this.ReservedVolume = 'ReservedVolume' in params ? params.ReservedVolume : null;
        this.ReservedReadQps = 'ReservedReadQps' in params ? params.ReservedReadQps : null;
        this.ReservedWriteQps = 'ReservedWriteQps' in params ? params.ReservedWriteQps : null;
        this.Memo = 'Memo' in params ? params.Memo : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;

    }
}

/**
 * ModifyClusterPassword request structure.
 * @class
 */
class ModifyClusterPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster for which to modify the password
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Old cluster password
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * Expected expiration time of old cluster password
         * @type {string || null}
         */
        this.OldPasswordExpireTime = null;

        /**
         * New cluster password, which must contain lowercase letters (a-z), uppercase letters (A-Z), and digits (0-9).
         * @type {string || null}
         */
        this.NewPassword = null;

        /**
         * Update mode. 1: updates password, 2: updates old password expiration time. Default value: 1
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.OldPasswordExpireTime = 'OldPasswordExpireTime' in params ? params.OldPasswordExpireTime : null;
        this.NewPassword = 'NewPassword' in params ? params.NewPassword : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * DescribeMachine response structure.
 * @class
 */
class DescribeMachineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of dedicated machine resources
         * @type {Array.<PoolInfo> || null}
         */
        this.PoolList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PoolList) {
            this.PoolList = new Array();
            for (let z in params.PoolList) {
                let obj = new PoolInfo();
                obj.deserialize(params.PoolList[z]);
                this.PoolList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTableDataFlow request structure.
 * @class
 */
class DeleteTableDataFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where the tables reside
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The list of tables for which data subscription will be disabled
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DeleteTableGroup request structure.
 * @class
 */
class DeleteTableGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where a table group resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Table group ID
         * @type {string || null}
         */
        this.TableGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

    }
}

/**
 * DescribeSnapshots request structure.
 * @class
 */
class DescribeSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where the table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The ID of the table group where the table resides
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Snapshot name
         * @type {string || null}
         */
        this.SnapshotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

    }
}

/**
 * Table group tag information
 * @class
 */
class TagsInfoOfTableGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Table group ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Tag information
         * @type {Array.<TagInfoUnit> || null}
         */
        this.Tags = null;

        /**
         * Error message
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * CreateTableGroup request structure.
 * @class
 */
class CreateTableGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where a table group resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Table group name, which can contain up to 32 letters and digits
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * Table group ID, which can be customized but must be unique in one cluster. If it is not specified, the auto-increment mode will be used.
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Table group tag list
         * @type {Array.<TagInfoUnit> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * ModifyClusterMachine response structure.
 * @class
 */
class ModifyClusterMachineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Table tag information
 * @class
 */
class TagsInfoOfTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table instance ID
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Table group ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Tag information
         * @type {Array.<TagInfoUnit> || null}
         */
        this.Tags = null;

        /**
         * Error message
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * DeleteIdlFiles response structure.
 * @class
 */
class DeleteIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Deletion result
         * @type {Array.<IdlFileInfoWithoutContent> || null}
         */
        this.IdlFileInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.IdlFileInfos) {
            this.IdlFileInfos = new Array();
            for (let z in params.IdlFileInfos) {
                let obj = new IdlFileInfoWithoutContent();
                obj.deserialize(params.IdlFileInfos[z]);
                this.IdlFileInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The list of table field information
 * @class
 */
class FieldInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table field name
         * @type {string || null}
         */
        this.FieldName = null;

        /**
         * Whether it is a primary key field
         * @type {string || null}
         */
        this.IsPrimaryKey = null;

        /**
         * Field type
         * @type {string || null}
         */
        this.FieldType = null;

        /**
         * Field length
         * @type {number || null}
         */
        this.FieldSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FieldName = 'FieldName' in params ? params.FieldName : null;
        this.IsPrimaryKey = 'IsPrimaryKey' in params ? params.IsPrimaryKey : null;
        this.FieldType = 'FieldType' in params ? params.FieldType : null;
        this.FieldSize = 'FieldSize' in params ? params.FieldSize : null;

    }
}

/**
 * ModifyTableTags request structure.
 * @class
 */
class ModifyTableTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where table tags need to be modified
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The list of tables whose tags need to be modified
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * The list of tags to add or modify
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ReplaceTags = null;

        /**
         * The list of tags to delete
         * @type {Array.<TagInfoUnit> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

    }
}

/**
 * Table merging results
 * @class
 */
class MergeTableResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * If table merging is successful, `null` will be returned
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * Comparison results of tables
         * @type {CompareTablesInfo || null}
         */
        this.Table = null;

        /**
         * Application ID
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

        if (params.Table) {
            let obj = new CompareTablesInfo();
            obj.deserialize(params.Table)
            this.Table = obj;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * Application update results
 * @class
 */
class ApplyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Application type
         * @type {number || null}
         */
        this.ApplicationType = null;

        /**
         * Status. Valid values: `0` (pending approval), `1` (application approved and task submitted), `2` (rejected)
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ApplicationStatus = null;

        /**
         * ID of the submitted task
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Error information
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ApplicationStatus = 'ApplicationStatus' in params ? params.ApplicationStatus : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

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
         * List of IDs of clusters where the tasks to be queried reside
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * List of IDs of tasks to be queried
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * Filter. Valid values: Content, TaskType, Operator, Time
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Query list offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results in query list
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
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * New expiration time of a snapshot
 * @class
 */
class SnapshotInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the table group where the table resides
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Snapshot name
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * Snapshot expiration time
         * @type {string || null}
         */
        this.SnapshotDeadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotDeadTime = 'SnapshotDeadTime' in params ? params.SnapshotDeadTime : null;

    }
}

/**
 * RecoverRecycleTables response structure.
 * @class
 */
class RecoverRecycleTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of recovered tables
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of information of recovered tables
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearTables response structure.
 * @class
 */
class ClearTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of cleared tables
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of table clearing results
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIdlFileInfos request structure.
 * @class
 */
class DescribeIdlFileInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where a file resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ID of the table group where a file resides
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * File ID list
         * @type {Array.<string> || null}
         */
        this.IdlFileIds = null;

        /**
         * Query list offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results in query list
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;
        this.IdlFileIds = 'IdlFileIds' in params ? params.IdlFileIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyTableTags response structure.
 * @class
 */
class ModifyTableTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of returned results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Returned results
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The result of snapshot creation
 * @class
 */
class SnapshotResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the table group where the table resides
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Table name
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Task ID, which is valid for the API that creates one task at a time
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Error information
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * Snapshot name
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * The time of the data from which the snapshot was created
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SnapshotTime = null;

        /**
         * When the snapshot expires
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SnapshotDeadTime = null;

        /**
         * When the snapshot was created
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SnapshotCreateTime = null;

        /**
         * Snapshot size
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SnapshotSize = null;

        /**
         * Snapshot status. Valid values: `0` (creating), `1` (normal), `2` (deleting), `3` (expired), `4` (rolling back).
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SnapshotStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotTime = 'SnapshotTime' in params ? params.SnapshotTime : null;
        this.SnapshotDeadTime = 'SnapshotDeadTime' in params ? params.SnapshotDeadTime : null;
        this.SnapshotCreateTime = 'SnapshotCreateTime' in params ? params.SnapshotCreateTime : null;
        this.SnapshotSize = 'SnapshotSize' in params ? params.SnapshotSize : null;
        this.SnapshotStatus = 'SnapshotStatus' in params ? params.SnapshotStatus : null;

    }
}

/**
 * ModifyCensorship request structure.
 * @class
 */
class ModifyCensorshipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Whether to enable the operation approval feature for this cluster. Valid values: `0` (disable), `1` (enable)
         * @type {number || null}
         */
        this.Censorship = null;

        /**
         * Approver UIN list
         * @type {Array.<string> || null}
         */
        this.Uins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Censorship = 'Censorship' in params ? params.Censorship : null;
        this.Uins = 'Uins' in params ? params.Uins : null;

    }
}

/**
 * Cluster details
 * @class
 */
class ClusterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Cluster data description language type, such as `PROTO`, `TDR`, or `MIX`
         * @type {string || null}
         */
        this.IdlType = null;

        /**
         * Network type
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * ID of the VPC instance with which a cluster is associated
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the subnet instance with which a cluster is associated
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Cluster password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Password status
         * @type {string || null}
         */
        this.PasswordStatus = null;

        /**
         * TcaplusDB SDK connection parameter: access ID
         * @type {string || null}
         */
        this.ApiAccessId = null;

        /**
         * TcaplusDB SDK connection parameter: access address
         * @type {string || null}
         */
        this.ApiAccessIp = null;

        /**
         * TcaplusDB SDK connection parameter: access port
         * @type {number || null}
         */
        this.ApiAccessPort = null;

        /**
         * If `PasswordStatus` is `unmodifiable`, the old password has not expired, and this field will display its expiration time; otherwise, this field will be empty
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OldPasswordExpireTime = null;

        /**
         * TcaplusDB SDK connection parameter for accessing IPv6 addresses
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiAccessIpv6 = null;

        /**
         * Cluster type
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * Cluster status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ClusterStatus = null;

        /**
         * Read CU
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReadCapacityUnit = null;

        /**
         * Write CU
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WriteCapacityUnit = null;

        /**
         * Disk capacity
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskVolume = null;

        /**
         * Information of the machine at the storage layer (tcapsvr) in a dedicated cluster
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServerDetailInfo> || null}
         */
        this.ServerList = null;

        /**
         * Information of the machine at the access layer (tcaproxy) in a dedicated cluster
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ProxyDetailInfo> || null}
         */
        this.ProxyList = null;

        /**
         * Whether the cluster operation approval feature is enabled. Valid values: `0` (disabled), `1` (enabled)
         * @type {number || null}
         */
        this.Censorship = null;

        /**
         * Approver UIN list
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DbaUins = null;

        /**
         * Whether data subscription is enabled
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DataFlowStatus = null;

        /**
         * CKafka information when data subscription is enabled
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {KafkaInfo || null}
         */
        this.KafkaInfo = null;

        /**
         * The number of days after which the cluster Txh backup file will expire and be deleted.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TxhBackupExpireDay = null;

        /**
         * The number of days after which the cluster Ulog backup file will expire and be deleted.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UlogBackupExpireDay = null;

        /**
         * Whether the expiration policy of cluster Ulog backup file is read-only. `0`: Yes; `1`: No.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsReadOnlyUlogBackupExpireDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.IdlType = 'IdlType' in params ? params.IdlType : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.PasswordStatus = 'PasswordStatus' in params ? params.PasswordStatus : null;
        this.ApiAccessId = 'ApiAccessId' in params ? params.ApiAccessId : null;
        this.ApiAccessIp = 'ApiAccessIp' in params ? params.ApiAccessIp : null;
        this.ApiAccessPort = 'ApiAccessPort' in params ? params.ApiAccessPort : null;
        this.OldPasswordExpireTime = 'OldPasswordExpireTime' in params ? params.OldPasswordExpireTime : null;
        this.ApiAccessIpv6 = 'ApiAccessIpv6' in params ? params.ApiAccessIpv6 : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.ReadCapacityUnit = 'ReadCapacityUnit' in params ? params.ReadCapacityUnit : null;
        this.WriteCapacityUnit = 'WriteCapacityUnit' in params ? params.WriteCapacityUnit : null;
        this.DiskVolume = 'DiskVolume' in params ? params.DiskVolume : null;

        if (params.ServerList) {
            this.ServerList = new Array();
            for (let z in params.ServerList) {
                let obj = new ServerDetailInfo();
                obj.deserialize(params.ServerList[z]);
                this.ServerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new ProxyDetailInfo();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }
        this.Censorship = 'Censorship' in params ? params.Censorship : null;
        this.DbaUins = 'DbaUins' in params ? params.DbaUins : null;
        this.DataFlowStatus = 'DataFlowStatus' in params ? params.DataFlowStatus : null;

        if (params.KafkaInfo) {
            let obj = new KafkaInfo();
            obj.deserialize(params.KafkaInfo)
            this.KafkaInfo = obj;
        }
        this.TxhBackupExpireDay = 'TxhBackupExpireDay' in params ? params.TxhBackupExpireDay : null;
        this.UlogBackupExpireDay = 'UlogBackupExpireDay' in params ? params.UlogBackupExpireDay : null;
        this.IsReadOnlyUlogBackupExpireDay = 'IsReadOnlyUlogBackupExpireDay' in params ? params.IsReadOnlyUlogBackupExpireDay : null;

    }
}

/**
 * DisableRestProxy request structure.
 * @class
 */
class DisableRestProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is the same as `appid`.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeTablesInRecycle response structure.
 * @class
 */
class DescribeTablesInRecycleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of tables
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Table details result list
         * @type {Array.<TableInfoNew> || null}
         */
        this.TableInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new TableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTables response structure.
 * @class
 */
class ModifyTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of modified tables
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of table modification results
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSnapshots request structure.
 * @class
 */
class DeleteSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where the table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The list of snapshots to delete
         * @type {Array.<SnapshotInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SnapshotInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * ModifyTableGroupTags response structure.
 * @class
 */
class ModifyTableGroupTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * ModifyClusterTags request structure.
 * @class
 */
class ModifyClusterTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster whose tags need to be modified
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The list of tags to add or modify
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ReplaceTags = null;

        /**
         * Tags to delete
         * @type {Array.<TagInfoUnit> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

    }
}

/**
 * CreateSnapshots request structure.
 * @class
 */
class CreateSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where the table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Snapshot list
         * @type {Array.<SnapshotInfo> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SnapshotInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DescribeTableGroupTags response structure.
 * @class
 */
class DescribeTableGroupTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information list of table group tags
         * @type {Array.<TagsInfoOfTableGroup> || null}
         */
        this.Rows = null;

        /**
         * The number of returned results
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

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagsInfoOfTableGroup();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTableIndex request structure.
 * @class
 */
class SetTableIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where the table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The list of tables that need to create global indexes
         * @type {Array.<SelectedTableWithField> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableWithField();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * ModifyTableQuotas response structure.
 * @class
 */
class ModifyTableQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of scaled tables
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of table scaling results
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecoverRecycleTables request structure.
 * @class
 */
class RecoverRecycleTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where a table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Information of tables to be recovered
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DeleteSnapshots response structure.
 * @class
 */
class DeleteSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of snapshots deleted in batches
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The result list of snapshots deleted in batches
         * @type {Array.<SnapshotResult> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new SnapshotResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTables response structure.
 * @class
 */
class DeleteTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of dropped tables
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of details of dropped tables
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTableGroupName request structure.
 * @class
 */
class ModifyTableGroupNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where a table group resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ID of the table group to be renamed
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * New table group name, which can contain letters and symbols
         * @type {string || null}
         */
        this.TableGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;

    }
}

/**
 * DescribeTableGroups request structure.
 * @class
 */
class DescribeTableGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where a table group resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Table group ID list
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * Filter. Valid values: TableGroupName, TableGroupId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Query list offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results in query list
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeUinInWhitelist request structure.
 * @class
 */
class DescribeUinInWhitelistRequest extends  AbstractModel {
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
 * MergeTablesData request structure.
 * @class
 */
class MergeTablesDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tables to be merged
         * @type {Array.<MergeTablesInfo> || null}
         */
        this.SelectedTables = null;

        /**
         * Valid values: `true` (only compare), `false` (compare and merge)
         * @type {boolean || null}
         */
        this.IsOnlyCompare = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new MergeTablesInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }
        this.IsOnlyCompare = 'IsOnlyCompare' in params ? params.IsOnlyCompare : null;

    }
}

/**
 * CreateCluster request structure.
 * @class
 */
class CreateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster data description language type, such as `PROTO`, `TDR`, or `MIX`
         * @type {string || null}
         */
        this.IdlType = null;

        /**
         * Cluster name, which can contain up to 32 letters and digits
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * ID of the VPC instance bound to a cluster in the format of `vpc-f49l6u0z`
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the subnet instance bound to a cluster in the format of `subnet-pxir56ns`
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Cluster access password, which must contain lowercase letters (a-z), uppercase letters (A-Z), and digits (0-9).
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Cluster tag list
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ResourceTags = null;

        /**
         * Whether to enable IPv6 address access for clusters
         * @type {number || null}
         */
        this.Ipv6Enable = null;

        /**
         * Information of the machine at the storage layer (tcapsvr) in a dedicated cluster
         * @type {Array.<MachineInfo> || null}
         */
        this.ServerList = null;

        /**
         * Information of the machine at the access layer (tcaproxy) in a dedicated cluster
         * @type {Array.<MachineInfo> || null}
         */
        this.ProxyList = null;

        /**
         * Cluster type. Valid values: `1` (standard), `2` (dedicated)
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * Authentication type. Valid values: `0` (static password), `1` (signature)
         * @type {number || null}
         */
        this.AuthType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdlType = 'IdlType' in params ? params.IdlType : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;

        if (params.ServerList) {
            this.ServerList = new Array();
            for (let z in params.ServerList) {
                let obj = new MachineInfo();
                obj.deserialize(params.ServerList[z]);
                this.ServerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new MachineInfo();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;

    }
}

/**
 * ModifyTableGroupTags request structure.
 * @class
 */
class ModifyTableGroupTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where table group tags need to be modified
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The ID of the table group whose tags need to be modified
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * The list of tags to add or modify
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ReplaceTags = null;

        /**
         * Tags to delete
         * @type {Array.<TagInfoUnit> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

    }
}

/**
 * EnableRestProxy request structure.
 * @class
 */
class EnableRestProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value is the same as `appid`.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyTableQuotas request structure.
 * @class
 */
class ModifyTableQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where the table to be scaled resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of quotas of tables selected for modification
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.TableQuotas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.TableQuotas) {
            this.TableQuotas = new Array();
            for (let z in params.TableQuotas) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.TableQuotas[z]);
                this.TableQuotas.push(obj);
            }
        }

    }
}

/**
 * CompareIdlFiles response structure.
 * @class
 */
class CompareIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information list of all IDL files uploaded and verified in this request
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * Number of tables verified to be valid in this request
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Verification result parsed from the selected table after the IDL description file is read
         * @type {Array.<ParsedTableInfoNew> || null}
         */
        this.TableInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new ParsedTableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTables response structure.
 * @class
 */
class CreateTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of tables created in batches
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of tables created in batches
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions request structure.
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * DescribeClusters response structure.
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of cluster instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cluster instance list
         * @type {Array.<ClusterInfo> || null}
         */
        this.Clusters = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new ClusterInfo();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Request parameters used to merge tables
 * @class
 */
class MergeTablesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of tables to be merged
         * @type {CompareTablesInfo || null}
         */
        this.MergeTables = null;

        /**
         * Whether to check indexes
         * @type {boolean || null}
         */
        this.CheckIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MergeTables) {
            let obj = new CompareTablesInfo();
            obj.deserialize(params.MergeTables)
            this.MergeTables = obj;
        }
        this.CheckIndex = 'CheckIndex' in params ? params.CheckIndex : null;

    }
}

/**
 * ModifyClusterTags response structure.
 * @class
 */
class ModifyClusterTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * DescribeClusterTags response structure.
 * @class
 */
class DescribeClusterTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information list of cluster tags
         * @type {Array.<TagsInfoOfCluster> || null}
         */
        this.Rows = null;

        /**
         * The number of returned results
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

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagsInfoOfCluster();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster tag information
 * @class
 */
class TagsInfoOfCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Tag information
         * @type {Array.<TagInfoUnit> || null}
         */
        this.Tags = null;

        /**
         * Error message
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * SetTableIndex response structure.
 * @class
 */
class SetTableIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of tables whose global indexes are created
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of global index creation results
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearTables request structure.
 * @class
 */
class ClearTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster instance where a table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of information of tables to be cleared
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DescribeIdlFileInfos response structure.
 * @class
 */
class DescribeIdlFileInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of files
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of file details
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFileInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.IdlFileInfos) {
            this.IdlFileInfos = new Array();
            for (let z in params.IdlFileInfos) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFileInfos[z]);
                this.IdlFileInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSnapshots response structure.
 * @class
 */
class CreateSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of snapshots created in batches
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The result list of snapshots created in batches
         * @type {Array.<SnapshotResult> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new SnapshotResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Table definition file details, including file content
 * @class
 */
class IdlFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filename excluding extension
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Data interface description language (IDL) type
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * File extension
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * File size in bytes
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * File ID, which is meaningful for files already uploaded
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileId = null;

        /**
         * File content, which is meaningful for files to be uploaded in this request
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;

    }
}

/**
 * DisableRestProxy response structure.
 * @class
 */
class DisableRestProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RestProxy status. Valid values: 0 (disabled), 1 (enabling), 2 (enabled), 3 (disabling).
         * @type {number || null}
         */
        this.RestProxyStatus = null;

        /**
         * `TaskId` is in the format of `AppInstanceId-taskId`, used to identify tasks of different clusters.
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
        this.RestProxyStatus = 'RestProxyStatus' in params ? params.RestProxyStatus : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateCluster response structure.
 * @class
 */
class CreateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusters request structure.
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of clusters to be queried
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * Query filter
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Query list offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results in query list. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Whether to enable IPv6 address access
         * @type {number || null}
         */
        this.Ipv6Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;

    }
}

/**
 * Information of the machine at the storage layer (tcapsvr) in a dedicated cluster
 * @class
 */
class ServerDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the storage layer (tcapsvr)
         * @type {string || null}
         */
        this.ServerUid = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * Memory utilization
         * @type {number || null}
         */
        this.MemoryRate = null;

        /**
         * Disk utilization
         * @type {number || null}
         */
        this.DiskRate = null;

        /**
         * The number of reads
         * @type {number || null}
         */
        this.ReadNum = null;

        /**
         * The number of writes
         * @type {number || null}
         */
        this.WriteNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerUid = 'ServerUid' in params ? params.ServerUid : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MemoryRate = 'MemoryRate' in params ? params.MemoryRate : null;
        this.DiskRate = 'DiskRate' in params ? params.DiskRate : null;
        this.ReadNum = 'ReadNum' in params ? params.ReadNum : null;
        this.WriteNum = 'WriteNum' in params ? params.WriteNum : null;

    }
}

/**
 * Table details
 * @class
 */
class TableInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Table instance ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * Table data structure type, such as `GENERIC` or `LIST`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * Table data interface description language (IDL) type, such as `PROTO` or `TDR`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * ID of the cluster where a table resides
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Name of the cluster where a table resides
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * ID of the table group where a table resides
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Name of the table group where a table resides
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * JSON string of table's primary key field structure
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyStruct = null;

        /**
         * JSON string of table non-primary key field structure
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ValueStruct = null;

        /**
         * Table shardkey set, which is valid for PROTO-type tables
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ShardingKeySet = null;

        /**
         * Table index key field set, which is valid for PROTO-type tables
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IndexStruct = null;

        /**
         * Number of LIST-type table elements
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * Information list of IDL files associated with table
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * Reserved table capacity in GB
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReservedVolume = null;

        /**
         * Reserved table read QPS
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReservedReadQps = null;

        /**
         * Reserved table write QPS
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReservedWriteQps = null;

        /**
         * Actual table data size in MB
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TableSize = null;

        /**
         * Table status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Table creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Table's last modified time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * Table remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Memo = null;

        /**
         * Error message
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * TcaplusDB SDK data access ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiAccessId = null;

        /**
         * Number of SORTLIST-type table sort fields
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SortFieldNum = null;

        /**
         * Sort order of SORTLIST-type tables
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SortRule = null;

        /**
         * Information about global indexes, table caching, or data subscription
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbClusterInfoStruct = null;

        /**
         * The number of days after which the table Txh backup files will be expire and deleted.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TxhBackupExpireDay = null;

        /**
         * Cached information of the table
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SyncTableInfo || null}
         */
        this.SyncTableInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
        this.KeyStruct = 'KeyStruct' in params ? params.KeyStruct : null;
        this.ValueStruct = 'ValueStruct' in params ? params.ValueStruct : null;
        this.ShardingKeySet = 'ShardingKeySet' in params ? params.ShardingKeySet : null;
        this.IndexStruct = 'IndexStruct' in params ? params.IndexStruct : null;
        this.ListElementNum = 'ListElementNum' in params ? params.ListElementNum : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }
        this.ReservedVolume = 'ReservedVolume' in params ? params.ReservedVolume : null;
        this.ReservedReadQps = 'ReservedReadQps' in params ? params.ReservedReadQps : null;
        this.ReservedWriteQps = 'ReservedWriteQps' in params ? params.ReservedWriteQps : null;
        this.TableSize = 'TableSize' in params ? params.TableSize : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Memo = 'Memo' in params ? params.Memo : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.ApiAccessId = 'ApiAccessId' in params ? params.ApiAccessId : null;
        this.SortFieldNum = 'SortFieldNum' in params ? params.SortFieldNum : null;
        this.SortRule = 'SortRule' in params ? params.SortRule : null;
        this.DbClusterInfoStruct = 'DbClusterInfoStruct' in params ? params.DbClusterInfoStruct : null;
        this.TxhBackupExpireDay = 'TxhBackupExpireDay' in params ? params.TxhBackupExpireDay : null;

        if (params.SyncTableInfo) {
            let obj = new SyncTableInfo();
            obj.deserialize(params.SyncTableInfo)
            this.SyncTableInfo = obj;
        }

    }
}

/**
 * Task details
 * @class
 */
class TaskInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task type
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * ID of TcaplusDB internal transaction associated with task
         * @type {string || null}
         */
        this.TransId = null;

        /**
         * ID of the cluster where a task resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Name of the cluster where a task resides
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Task progress
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Task creation time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task last modified time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Operator
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Task details
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TransId = 'TransId' in params ? params.TransId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * TcaplusDB cache table information
 * @class
 */
class SyncTableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sharded table quantity of the target cache table
         * @type {number || null}
         */
        this.TargetTableSplitNum = null;

        /**
         * Prefix of the target cache table name
         * @type {Array.<string> || null}
         */
        this.TargetTableNamePrefix = null;

        /**
         * Instance ID of the cache database
         * @type {string || null}
         */
        this.TargetSyncDBInstanceId = null;

        /**
         * Name of the database where the cache table resides
         * @type {string || null}
         */
        this.TargetDatabaseName = null;

        /**
         * Caching status. Valid values: `0` (creating), `1` (caching), `2` (disabled), `-1` (deleted).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * ID of cluster where the table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The ID of the table group where the table resides
         * @type {number || null}
         */
        this.TableGroupId = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Table ID
         * @type {string || null}
         */
        this.TableId = null;

        /**
         * Mapping from the primary key field of the TcaplusDB table to the field of the target cache table
         * @type {Array.<SyncTableField> || null}
         */
        this.KeyFieldMapping = null;

        /**
         * Mapping of TcaplusDB table field to target cache table field
         * @type {Array.<SyncTableField> || null}
         */
        this.ValueFieldMapping = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetTableSplitNum = 'TargetTableSplitNum' in params ? params.TargetTableSplitNum : null;
        this.TargetTableNamePrefix = 'TargetTableNamePrefix' in params ? params.TargetTableNamePrefix : null;
        this.TargetSyncDBInstanceId = 'TargetSyncDBInstanceId' in params ? params.TargetSyncDBInstanceId : null;
        this.TargetDatabaseName = 'TargetDatabaseName' in params ? params.TargetDatabaseName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableId = 'TableId' in params ? params.TableId : null;

        if (params.KeyFieldMapping) {
            this.KeyFieldMapping = new Array();
            for (let z in params.KeyFieldMapping) {
                let obj = new SyncTableField();
                obj.deserialize(params.KeyFieldMapping[z]);
                this.KeyFieldMapping.push(obj);
            }
        }

        if (params.ValueFieldMapping) {
            this.ValueFieldMapping = new Array();
            for (let z in params.ValueFieldMapping) {
                let obj = new SyncTableField();
                obj.deserialize(params.ValueFieldMapping[z]);
                this.ValueFieldMapping.push(obj);
            }
        }

    }
}

/**
 * DeleteIdlFiles request structure.
 * @class
 */
class DeleteIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where IDL resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of information of IDL files to be deleted
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }

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
         * List of backup creation task IDs
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * List of backup creation application IDs
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ApplicationIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.ApplicationIds = 'ApplicationIds' in params ? params.ApplicationIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The file of keys used to import partial snapshot data
 * @class
 */
class KeyFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key file name
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Key file extension
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * Key file content
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * Key file size
         * @type {number || null}
         */
        this.FileSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;

    }
}

/**
 * VerifyIdlFiles response structure.
 * @class
 */
class VerifyIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information list of all IDL files uploaded and verified in this request
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * Number of valid tables parsed by reading IDL description file, excluding tables already created
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of valid tables parsed by reading IDL description file, excluding tables already created
         * @type {Array.<ParsedTableInfoNew> || null}
         */
        this.TableInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new ParsedTableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTableTags response structure.
 * @class
 */
class DescribeTableTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of returned results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The information list of table tags
         * @type {Array.<TagsInfoOfTable> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagsInfoOfTable();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTableGroup response structure.
 * @class
 */
class CreateTableGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of table group successfully created
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSnapshots response structure.
 * @class
 */
class DescribeSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of snapshots
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The result list of snapshots
         * @type {Array.<SnapshotResult> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new SnapshotResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyIdlFiles request structure.
 * @class
 */
class VerifyIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where to create a table
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ID of the table group where to create a table
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * List of information of uploaded IDL files. Either this parameter or `NewIdlFiles` must be present
         * @type {Array.<IdlFileInfo> || null}
         */
        this.ExistingIdlFiles = null;

        /**
         * List of information of IDL files to be uploaded. Either this parameter or `ExistingIdlFiles` must be present
         * @type {Array.<IdlFileInfo> || null}
         */
        this.NewIdlFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.ExistingIdlFiles) {
            this.ExistingIdlFiles = new Array();
            for (let z in params.ExistingIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.ExistingIdlFiles[z]);
                this.ExistingIdlFiles.push(obj);
            }
        }

        if (params.NewIdlFiles) {
            this.NewIdlFiles = new Array();
            for (let z in params.NewIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.NewIdlFiles[z]);
                this.NewIdlFiles.push(obj);
            }
        }

    }
}

/**
 * EnableRestProxy response structure.
 * @class
 */
class EnableRestProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RestProxy status. Valid values: 0 (disabled), 1 (enabling), 2 (enabled), 3 (disabling).
         * @type {number || null}
         */
        this.RestProxyStatus = null;

        /**
         * `TaskId` is in the format of `AppInstanceId-taskId`, used to identify tasks of different clusters.
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
        this.RestProxyStatus = 'RestProxyStatus' in params ? params.RestProxyStatus : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterName response structure.
 * @class
 */
class ModifyClusterNameResponse extends  AbstractModel {
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
 * ModifyTables request structure.
 * @class
 */
class ModifyTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where the table to be modified resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Selected table modification IDL files
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * List of tables to be modified
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * SetTableDataFlow request structure.
 * @class
 */
class SetTableDataFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where the tables reside
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The list of tables for which data subscription will be enabled
         * @type {Array.<SelectedTableWithField> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableWithField();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DescribeTableGroupTags request structure.
 * @class
 */
class DescribeTableGroupTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where table group tags need to be queried
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The list of IDs of the table groups whose tags need to be queried
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

    }
}

/**
 * DescribeTablesInRecycle request structure.
 * @class
 */
class DescribeTablesInRecycleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where the table to be queried resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of IDs of the table groups where the table to be queried resides
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * Filter. Valid values: TableName, TableInstanceId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Query result offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned query results
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * ID of the cluster where the table to be queried resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of IDs of the table groups where the table to be queried resides
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * Information list of tables to be queried
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * Filter. Valid values: TableName, TableInstanceId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Query result offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned query results
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CKafka address
 * @class
 */
class KafkaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * CKafka address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * CKafka topic
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * CKafka username
         * @type {string || null}
         */
        this.User = null;

        /**
         * CKafka password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * CKafka instance
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * Whether VPC access is enabled
         * @type {number || null}
         */
        this.IsVpc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.IsVpc = 'IsVpc' in params ? params.IsVpc : null;

    }
}

/**
 * DeleteTableDataFlow response structure.
 * @class
 */
class DeleteTableDataFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of tables for which data subscription has been disabled
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The result list of tables for which data subscription has been disabled
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateApply request structure.
 * @class
 */
class UpdateApplyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application status
         * @type {Array.<ApplyStatus> || null}
         */
        this.ApplyStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ApplyStatus) {
            this.ApplyStatus = new Array();
            for (let z in params.ApplyStatus) {
                let obj = new ApplyStatus();
                obj.deserialize(params.ApplyStatus[z]);
                this.ApplyStatus.push(obj);
            }
        }

    }
}

/**
 * ModifyTableMemos request structure.
 * @class
 */
class ModifyTableMemosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster instance where a table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of details of selected tables
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.TableMemos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.TableMemos) {
            this.TableMemos = new Array();
            for (let z in params.TableMemos) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.TableMemos[z]);
                this.TableMemos.push(obj);
            }
        }

    }
}

/**
 * DescribeUinInWhitelist response structure.
 * @class
 */
class DescribeUinInWhitelistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query result. FALSE: yes, TRUE: no
         * @type {string || null}
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Snapshot list
 * @class
 */
class SnapshotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the table group where the table resides
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Snapshot name
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * The time of the data from which the snapshot was created
         * @type {string || null}
         */
        this.SnapshotTime = null;

        /**
         * Snapshot expiration time
         * @type {string || null}
         */
        this.SnapshotDeadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotTime = 'SnapshotTime' in params ? params.SnapshotTime : null;
        this.SnapshotDeadTime = 'SnapshotDeadTime' in params ? params.SnapshotDeadTime : null;

    }
}

/**
 * Table information parsed from IDL table description file
 * @class
 */
class ParsedTableInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table description language type. Valid values: PROTO, TDR
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * Table instance ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * Table name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Table data structure type. Valid values: GENERIC, LIST
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * Primary key field information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyFields = null;

        /**
         * Old primary key field information, which is valid during verification of table modification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OldKeyFields = null;

        /**
         * Non-primary key field information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ValueFields = null;

        /**
         * Old non-primary key field information, which is valid during verification of table modification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OldValueFields = null;

        /**
         * Table group ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Total size of primary key field
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SumKeyFieldSize = null;

        /**
         * Total size of non-primary key fields
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SumValueFieldSize = null;

        /**
         * Index key set
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IndexKeySet = null;

        /**
         * Shardkey set
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ShardingKeySet = null;

        /**
         * TDR version number
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TdrVersion = null;

        /**
         * Error message
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * Number of LIST-type table elements
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * Number of SORTLIST-type table sort fields
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SortFieldNum = null;

        /**
         * Sort order of SORTLIST-type tables
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SortRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.KeyFields = 'KeyFields' in params ? params.KeyFields : null;
        this.OldKeyFields = 'OldKeyFields' in params ? params.OldKeyFields : null;
        this.ValueFields = 'ValueFields' in params ? params.ValueFields : null;
        this.OldValueFields = 'OldValueFields' in params ? params.OldValueFields : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.SumKeyFieldSize = 'SumKeyFieldSize' in params ? params.SumKeyFieldSize : null;
        this.SumValueFieldSize = 'SumValueFieldSize' in params ? params.SumValueFieldSize : null;
        this.IndexKeySet = 'IndexKeySet' in params ? params.IndexKeySet : null;
        this.ShardingKeySet = 'ShardingKeySet' in params ? params.ShardingKeySet : null;
        this.TdrVersion = 'TdrVersion' in params ? params.TdrVersion : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.ListElementNum = 'ListElementNum' in params ? params.ListElementNum : null;
        this.SortFieldNum = 'SortFieldNum' in params ? params.SortFieldNum : null;
        this.SortRule = 'SortRule' in params ? params.SortRule : null;

    }
}

/**
 * RollbackTables response structure.
 * @class
 */
class RollbackTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of table rollback task results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Table rollback task result list
         * @type {Array.<TableRollbackResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableRollbackResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Machine type and quantity
 * @class
 */
class MachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Machine type
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * Machine quantity
         * @type {number || null}
         */
        this.MachineNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;

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
         * ID of the cluster where the table to be backed up resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Information list of tables to be backed up
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * Remarks
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Table processing result information
 * @class
 */
class TableResultNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table instance ID in the format of `tcaplus-3be64cbb`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * Task ID, which is valid for the API that creates one task
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Table name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * Table data structure type, such as `GENERIC` or `LIST`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * Table data interface description language (IDL) type, such as `PROTO` or `TDR`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * ID of the table group where a table resides
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Error message
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * Task ID list, which is valid for the API that creates multiple tasks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * Cluster operation application ID
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * CreateTables request structure.
 * @class
 */
class CreateTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where to create a table
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Table creation IDL file list selected by user
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * Information list of tables to be created
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * Table tag list
         * @type {Array.<TagInfoUnit> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterTags request structure.
 * @class
 */
class DescribeClusterTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of cluster IDs
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

    }
}

/**
 * MergeTablesData response structure.
 * @class
 */
class MergeTablesDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table merging results
         * @type {Array.<MergeTableResult> || null}
         */
        this.Results = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new MergeTableResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TcaplusDB service region details
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region `Ap-code`
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region abbreviation
         * @type {string || null}
         */
        this.RegionAbbr = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Whether to support IPv6 address access. Valid values: 0 (support), 1 (not support)
         * @type {number || null}
         */
        this.Ipv6Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionAbbr = 'RegionAbbr' in params ? params.RegionAbbr : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;

    }
}

/**
 * DescribeTableGroups response structure.
 * @class
 */
class DescribeTableGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of table groups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Table group information list
         * @type {Array.<TableGroupInfo> || null}
         */
        this.TableGroups = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableGroups) {
            this.TableGroups = new Array();
            for (let z in params.TableGroups) {
                let obj = new TableGroupInfo();
                obj.deserialize(params.TableGroups[z]);
                this.TableGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTableGroup response structure.
 * @class
 */
class DeleteTableGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID generated by table group deletion
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
 * Information of the machines in the resource pool
 * @class
 */
class PoolInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID
         * @type {number || null}
         */
        this.PoolUid = null;

        /**
         * Whether IPv6 is supported
         * @type {number || null}
         */
        this.Ipv6Enable = null;

        /**
         * Remaining available cluster resources
         * @type {number || null}
         */
        this.AvailableAppCount = null;

        /**
         * The list of machines at the storage layer (tcapsvr)
         * @type {Array.<ServerMachineInfo> || null}
         */
        this.ServerList = null;

        /**
         * The list of machines at the access layer (tcaproxy)
         * @type {Array.<ProxyMachineInfo> || null}
         */
        this.ProxyList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PoolUid = 'PoolUid' in params ? params.PoolUid : null;
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;
        this.AvailableAppCount = 'AvailableAppCount' in params ? params.AvailableAppCount : null;

        if (params.ServerList) {
            this.ServerList = new Array();
            for (let z in params.ServerList) {
                let obj = new ServerMachineInfo();
                obj.deserialize(params.ServerList[z]);
                this.ServerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new ProxyMachineInfo();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }

    }
}

/**
 * DescribeMachine request structure.
 * @class
 */
class DescribeMachineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * If this parameter is not `0`, machines supporting IPv6 will be queried.
         * @type {number || null}
         */
        this.Ipv6Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;

    }
}

/**
 * RollbackTables request structure.
 * @class
 */
class RollbackTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where the table to be rolled back resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of tables to be rolled back
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * Time to roll back to
         * @type {string || null}
         */
        this.RollbackTime = null;

        /**
         * Rollback mode. `KEYS` is supported
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * ModifyCensorship response structure.
 * @class
 */
class ModifyCensorshipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Approver UIN list
Note: `null` may be returned for this field, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Uins = null;

        /**
         * Whether the operation approval feature is enabled for this cluster. Valid values: `0` (disabled), `1` (enabled)
         * @type {number || null}
         */
        this.Censorship = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Uins = 'Uins' in params ? params.Uins : null;
        this.Censorship = 'Censorship' in params ? params.Censorship : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CompareIdlFiles request structure.
 * @class
 */
class CompareIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the cluster where the table to be modified resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of tables to be modified
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * Selected list of uploaded IDL files. Either this parameter or `NewIdlFiles` must be selected
         * @type {Array.<IdlFileInfo> || null}
         */
        this.ExistingIdlFiles = null;

        /**
         * List of IDL files to be uploaded. Either this parameter or `ExistingIdlFiles` must be selected
         * @type {Array.<IdlFileInfo> || null}
         */
        this.NewIdlFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

        if (params.ExistingIdlFiles) {
            this.ExistingIdlFiles = new Array();
            for (let z in params.ExistingIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.ExistingIdlFiles[z]);
                this.ExistingIdlFiles.push(obj);
            }
        }

        if (params.NewIdlFiles) {
            this.NewIdlFiles = new Array();
            for (let z in params.NewIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.NewIdlFiles[z]);
                this.NewIdlFiles.push(obj);
            }
        }

    }
}

/**
 * Information of the machine at the access layer (tcaproxy) in a dedicated cluster
 * @class
 */
class ProxyDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the access layer (tcaproxy)
         * @type {string || null}
         */
        this.ProxyUid = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * The speed of processing request packets
         * @type {number || null}
         */
        this.ProcessSpeed = null;

        /**
         * Request packet delay
         * @type {number || null}
         */
        this.AverageProcessDelay = null;

        /**
         * The speed of processing delayed request packets
         * @type {number || null}
         */
        this.SlowProcessSpeed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyUid = 'ProxyUid' in params ? params.ProxyUid : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.ProcessSpeed = 'ProcessSpeed' in params ? params.ProcessSpeed : null;
        this.AverageProcessDelay = 'AverageProcessDelay' in params ? params.AverageProcessDelay : null;
        this.SlowProcessSpeed = 'SlowProcessSpeed' in params ? params.SlowProcessSpeed : null;

    }
}

/**
 * Table definition file details, excluding file content
 * @class
 */
class IdlFileInfoWithoutContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filename excluding extension
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Data interface description language (IDL) type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * File extension
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * File size in bytes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * File ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileId = null;

        /**
         * Error message
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * ModifyTableMemos response structure.
 * @class
 */
class ModifyTableMemosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of tables modified for remarks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of table remarks modification results
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterMachine request structure.
 * @class
 */
class ModifyClusterMachineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Information of the machines at the storage layer (tcapsvr)
         * @type {Array.<MachineInfo> || null}
         */
        this.ServerList = null;

        /**
         * Information of the machines at the access layer (tcaproxy)
         * @type {Array.<MachineInfo> || null}
         */
        this.ProxyList = null;

        /**
         * Cluster type. Valid values: `1` (standard), `2` (dedicated)
         * @type {number || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServerList) {
            this.ServerList = new Array();
            for (let z in params.ServerList) {
                let obj = new MachineInfo();
                obj.deserialize(params.ServerList[z]);
                this.ServerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new MachineInfo();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * Filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter field name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter field value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Filter field value
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
        this.Value = 'Value' in params ? params.Value : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * ModifySnapshots request structure.
 * @class
 */
class ModifySnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where the table resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Snapshot list
         * @type {Array.<SnapshotInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SnapshotInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * ImportSnapshots request structure.
 * @class
 */
class ImportSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the cluster where the original table (from which the snapshot was created) resides
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The information of the snapshot to import
         * @type {SnapshotInfo || null}
         */
        this.Snapshots = null;

        /**
         * Whether to import partial data of the snapshot. Valid values: `TRUE` (import partial data), `FALSE` (import all data).
         * @type {string || null}
         */
        this.ImportSpecialKey = null;

        /**
         * Whether to import to the original table. Valid values: `TRUE` (import to the original table), `FALSE` (import to a new table).
         * @type {string || null}
         */
        this.ImportOriginTable = null;

        /**
         * The file of the keys of the partial data
         * @type {KeyFile || null}
         */
        this.KeyFile = null;

        /**
         * The ID of the table group where the new table resides, which is valid only when `ImportOriginTable` is set to `FALSE`
         * @type {string || null}
         */
        this.NewTableGroupId = null;

        /**
         * The name of the new table, which is valid only when `ImportOriginTable` is set to `FALSE`. TcaplusDB will automatically create a table named `NewTableName` of the same structure as that of the original table.
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Snapshots) {
            let obj = new SnapshotInfo();
            obj.deserialize(params.Snapshots)
            this.Snapshots = obj;
        }
        this.ImportSpecialKey = 'ImportSpecialKey' in params ? params.ImportSpecialKey : null;
        this.ImportOriginTable = 'ImportOriginTable' in params ? params.ImportOriginTable : null;

        if (params.KeyFile) {
            let obj = new KeyFile();
            obj.deserialize(params.KeyFile)
            this.KeyFile = obj;
        }
        this.NewTableGroupId = 'NewTableGroupId' in params ? params.NewTableGroupId : null;
        this.NewTableName = 'NewTableName' in params ? params.NewTableName : null;

    }
}

/**
 * Mapping of cache table field name
 * @class
 */
class SyncTableField extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field name of TcaplusDB table
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * Field name of the target cache table
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
        this.SourceName = 'SourceName' in params ? params.SourceName : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;

    }
}

/**
 * Describes the details of errors that may occur during the processing of each instance (application, region, or table).
 * @class
 */
class ErrorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Error message
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Table group details
 * @class
 */
class TableGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Table group ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * Table group name
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * Table group creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Number of tables in table group
         * @type {number || null}
         */
        this.TableCount = null;

        /**
         * Total table storage capacity in MB in table group
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
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.TableCount = 'TableCount' in params ? params.TableCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

module.exports = {
    ImportSnapshotsResponse: ImportSnapshotsResponse,
    CompareTablesInfo: CompareTablesInfo,
    ModifyClusterNameRequest: ModifyClusterNameRequest,
    ModifyTableGroupNameResponse: ModifyTableGroupNameResponse,
    DescribeTableTagsRequest: DescribeTableTagsRequest,
    ModifyClusterPasswordResponse: ModifyClusterPasswordResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    DeleteTableIndexResponse: DeleteTableIndexResponse,
    TableRollbackResultNew: TableRollbackResultNew,
    ApplyStatus: ApplyStatus,
    ServerMachineInfo: ServerMachineInfo,
    DescribeTablesResponse: DescribeTablesResponse,
    ModifySnapshotsResponse: ModifySnapshotsResponse,
    UpdateApplyResponse: UpdateApplyResponse,
    DeleteClusterRequest: DeleteClusterRequest,
    SelectedTableWithField: SelectedTableWithField,
    DeleteTableIndexRequest: DeleteTableIndexRequest,
    ProxyMachineInfo: ProxyMachineInfo,
    DescribeTasksResponse: DescribeTasksResponse,
    DeleteTablesRequest: DeleteTablesRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    SetTableDataFlowResponse: SetTableDataFlowResponse,
    SelectedTableInfoNew: SelectedTableInfoNew,
    ModifyClusterPasswordRequest: ModifyClusterPasswordRequest,
    DescribeMachineResponse: DescribeMachineResponse,
    DeleteTableDataFlowRequest: DeleteTableDataFlowRequest,
    DeleteTableGroupRequest: DeleteTableGroupRequest,
    DescribeSnapshotsRequest: DescribeSnapshotsRequest,
    TagsInfoOfTableGroup: TagsInfoOfTableGroup,
    CreateTableGroupRequest: CreateTableGroupRequest,
    ModifyClusterMachineResponse: ModifyClusterMachineResponse,
    TagsInfoOfTable: TagsInfoOfTable,
    DeleteIdlFilesResponse: DeleteIdlFilesResponse,
    FieldInfo: FieldInfo,
    ModifyTableTagsRequest: ModifyTableTagsRequest,
    MergeTableResult: MergeTableResult,
    ApplyResult: ApplyResult,
    DescribeTasksRequest: DescribeTasksRequest,
    SnapshotInfoNew: SnapshotInfoNew,
    RecoverRecycleTablesResponse: RecoverRecycleTablesResponse,
    ClearTablesResponse: ClearTablesResponse,
    DescribeIdlFileInfosRequest: DescribeIdlFileInfosRequest,
    ModifyTableTagsResponse: ModifyTableTagsResponse,
    SnapshotResult: SnapshotResult,
    ModifyCensorshipRequest: ModifyCensorshipRequest,
    ClusterInfo: ClusterInfo,
    DisableRestProxyRequest: DisableRestProxyRequest,
    DescribeTablesInRecycleResponse: DescribeTablesInRecycleResponse,
    ModifyTablesResponse: ModifyTablesResponse,
    DeleteSnapshotsRequest: DeleteSnapshotsRequest,
    ModifyTableGroupTagsResponse: ModifyTableGroupTagsResponse,
    ModifyClusterTagsRequest: ModifyClusterTagsRequest,
    CreateSnapshotsRequest: CreateSnapshotsRequest,
    DescribeTableGroupTagsResponse: DescribeTableGroupTagsResponse,
    SetTableIndexRequest: SetTableIndexRequest,
    ModifyTableQuotasResponse: ModifyTableQuotasResponse,
    RecoverRecycleTablesRequest: RecoverRecycleTablesRequest,
    DeleteSnapshotsResponse: DeleteSnapshotsResponse,
    DeleteTablesResponse: DeleteTablesResponse,
    ModifyTableGroupNameRequest: ModifyTableGroupNameRequest,
    DescribeTableGroupsRequest: DescribeTableGroupsRequest,
    DescribeUinInWhitelistRequest: DescribeUinInWhitelistRequest,
    MergeTablesDataRequest: MergeTablesDataRequest,
    CreateClusterRequest: CreateClusterRequest,
    ModifyTableGroupTagsRequest: ModifyTableGroupTagsRequest,
    EnableRestProxyRequest: EnableRestProxyRequest,
    ModifyTableQuotasRequest: ModifyTableQuotasRequest,
    CompareIdlFilesResponse: CompareIdlFilesResponse,
    CreateTablesResponse: CreateTablesResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    MergeTablesInfo: MergeTablesInfo,
    ModifyClusterTagsResponse: ModifyClusterTagsResponse,
    DescribeClusterTagsResponse: DescribeClusterTagsResponse,
    TagsInfoOfCluster: TagsInfoOfCluster,
    SetTableIndexResponse: SetTableIndexResponse,
    ClearTablesRequest: ClearTablesRequest,
    DescribeIdlFileInfosResponse: DescribeIdlFileInfosResponse,
    CreateSnapshotsResponse: CreateSnapshotsResponse,
    IdlFileInfo: IdlFileInfo,
    DisableRestProxyResponse: DisableRestProxyResponse,
    TagInfoUnit: TagInfoUnit,
    CreateClusterResponse: CreateClusterResponse,
    DescribeClustersRequest: DescribeClustersRequest,
    ServerDetailInfo: ServerDetailInfo,
    TableInfoNew: TableInfoNew,
    TaskInfoNew: TaskInfoNew,
    SyncTableInfo: SyncTableInfo,
    DeleteIdlFilesRequest: DeleteIdlFilesRequest,
    CreateBackupResponse: CreateBackupResponse,
    KeyFile: KeyFile,
    VerifyIdlFilesResponse: VerifyIdlFilesResponse,
    DescribeTableTagsResponse: DescribeTableTagsResponse,
    CreateTableGroupResponse: CreateTableGroupResponse,
    DescribeSnapshotsResponse: DescribeSnapshotsResponse,
    VerifyIdlFilesRequest: VerifyIdlFilesRequest,
    EnableRestProxyResponse: EnableRestProxyResponse,
    ModifyClusterNameResponse: ModifyClusterNameResponse,
    ModifyTablesRequest: ModifyTablesRequest,
    SetTableDataFlowRequest: SetTableDataFlowRequest,
    DescribeTableGroupTagsRequest: DescribeTableGroupTagsRequest,
    DescribeTablesInRecycleRequest: DescribeTablesInRecycleRequest,
    DescribeTablesRequest: DescribeTablesRequest,
    KafkaInfo: KafkaInfo,
    DeleteTableDataFlowResponse: DeleteTableDataFlowResponse,
    UpdateApplyRequest: UpdateApplyRequest,
    ModifyTableMemosRequest: ModifyTableMemosRequest,
    DescribeUinInWhitelistResponse: DescribeUinInWhitelistResponse,
    SnapshotInfo: SnapshotInfo,
    ParsedTableInfoNew: ParsedTableInfoNew,
    RollbackTablesResponse: RollbackTablesResponse,
    MachineInfo: MachineInfo,
    CreateBackupRequest: CreateBackupRequest,
    TableResultNew: TableResultNew,
    CreateTablesRequest: CreateTablesRequest,
    DescribeClusterTagsRequest: DescribeClusterTagsRequest,
    MergeTablesDataResponse: MergeTablesDataResponse,
    RegionInfo: RegionInfo,
    DescribeTableGroupsResponse: DescribeTableGroupsResponse,
    DeleteTableGroupResponse: DeleteTableGroupResponse,
    PoolInfo: PoolInfo,
    DescribeMachineRequest: DescribeMachineRequest,
    RollbackTablesRequest: RollbackTablesRequest,
    ModifyCensorshipResponse: ModifyCensorshipResponse,
    CompareIdlFilesRequest: CompareIdlFilesRequest,
    ProxyDetailInfo: ProxyDetailInfo,
    IdlFileInfoWithoutContent: IdlFileInfoWithoutContent,
    ModifyTableMemosResponse: ModifyTableMemosResponse,
    ModifyClusterMachineRequest: ModifyClusterMachineRequest,
    Filter: Filter,
    ModifySnapshotsRequest: ModifySnapshotsRequest,
    ImportSnapshotsRequest: ImportSnapshotsRequest,
    SyncTableField: SyncTableField,
    ErrorInfo: ErrorInfo,
    TableGroupInfo: TableGroupInfo,

}
