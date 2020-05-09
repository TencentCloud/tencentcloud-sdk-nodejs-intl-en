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
         * JSON string of table’s primary key field structure
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
         * Table’s last modified time
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
         * Distributed index information of table
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DbClusterInfoStruct = null;

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
 * CreateBackup response structure.
 * @class
 */
class CreateBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IDs of created backup tasks
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * New cluster password, which must contain lowercase letters (a–z), uppercase letters (A–Z), and digits (0–9).
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
         * Cluster access password, which must contain lowercase letters (a–z), uppercase letters (A–Z), and digits (0–9).
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
        this.IdlType = 'IdlType' in params ? params.IdlType : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;

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
    DescribeUinInWhitelistResponse: DescribeUinInWhitelistResponse,
    DescribeTasksRequest: DescribeTasksRequest,
    IdlFileInfo: IdlFileInfo,
    ClearTablesRequest: ClearTablesRequest,
    DescribeClustersRequest: DescribeClustersRequest,
    ModifyTableQuotasResponse: ModifyTableQuotasResponse,
    DescribeIdlFileInfosResponse: DescribeIdlFileInfosResponse,
    CreateBackupRequest: CreateBackupRequest,
    ModifyTableGroupNameResponse: ModifyTableGroupNameResponse,
    RecoverRecycleTablesResponse: RecoverRecycleTablesResponse,
    ModifyClusterPasswordResponse: ModifyClusterPasswordResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    VerifyIdlFilesRequest: VerifyIdlFilesRequest,
    ModifyClusterNameRequest: ModifyClusterNameRequest,
    ClearTablesResponse: ClearTablesResponse,
    DescribeIdlFileInfosRequest: DescribeIdlFileInfosRequest,
    TableResultNew: TableResultNew,
    CreateClusterResponse: CreateClusterResponse,
    ErrorInfo: ErrorInfo,
    CreateTablesRequest: CreateTablesRequest,
    ClusterInfo: ClusterInfo,
    ParsedTableInfoNew: ParsedTableInfoNew,
    RegionInfo: RegionInfo,
    TableInfoNew: TableInfoNew,
    TaskInfoNew: TaskInfoNew,
    RollbackTablesResponse: RollbackTablesResponse,
    DescribeTablesInRecycleResponse: DescribeTablesInRecycleResponse,
    DescribeTableGroupsResponse: DescribeTableGroupsResponse,
    ModifyTablesResponse: ModifyTablesResponse,
    ModifyTableMemosResponse: ModifyTableMemosResponse,
    RollbackTablesRequest: RollbackTablesRequest,
    DeleteIdlFilesRequest: DeleteIdlFilesRequest,
    DeleteTableGroupResponse: DeleteTableGroupResponse,
    CreateBackupResponse: CreateBackupResponse,
    TableRollbackResultNew: TableRollbackResultNew,
    VerifyIdlFilesResponse: VerifyIdlFilesResponse,
    DeleteClusterRequest: DeleteClusterRequest,
    DescribeTablesResponse: DescribeTablesResponse,
    ModifyClusterNameResponse: ModifyClusterNameResponse,
    RecoverRecycleTablesRequest: RecoverRecycleTablesRequest,
    DescribeTasksResponse: DescribeTasksResponse,
    DeleteTablesRequest: DeleteTablesRequest,
    DescribeUinInWhitelistRequest: DescribeUinInWhitelistRequest,
    CreateTableGroupResponse: CreateTableGroupResponse,
    ModifyTableGroupNameRequest: ModifyTableGroupNameRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DescribeTableGroupsRequest: DescribeTableGroupsRequest,
    CompareIdlFilesRequest: CompareIdlFilesRequest,
    SelectedTableInfoNew: SelectedTableInfoNew,
    IdlFileInfoWithoutContent: IdlFileInfoWithoutContent,
    ModifyClusterPasswordRequest: ModifyClusterPasswordRequest,
    CreateClusterRequest: CreateClusterRequest,
    Filter: Filter,
    DeleteTablesResponse: DeleteTablesResponse,
    ModifyTableQuotasRequest: ModifyTableQuotasRequest,
    CompareIdlFilesResponse: CompareIdlFilesResponse,
    ModifyTablesRequest: ModifyTablesRequest,
    DeleteTableGroupRequest: DeleteTableGroupRequest,
    CreateTablesResponse: CreateTablesResponse,
    DescribeTablesInRecycleRequest: DescribeTablesInRecycleRequest,
    DescribeTablesRequest: DescribeTablesRequest,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    DeleteIdlFilesResponse: DeleteIdlFilesResponse,
    CreateTableGroupRequest: CreateTableGroupRequest,
    ModifyTableMemosRequest: ModifyTableMemosRequest,
    TableGroupInfo: TableGroupInfo,

}
