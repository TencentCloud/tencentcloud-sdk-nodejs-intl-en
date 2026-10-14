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
 * Process task information in the instance operation record
 * @class
 */
class TaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task progress
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Task completion time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Subtask
         * @type {Array.<SubTaskDetail> || null}
         */
        this.SubTasks = null;

        /**
         * Time taken by the task
         * @type {number || null}
         */
        this.ElapsedTime = null;

        /**
         * Task progress details
         * @type {ProcessDetail || null}
         */
        this.ProcessInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.SubTasks) {
            this.SubTasks = new Array();
            for (let z in params.SubTasks) {
                let obj = new SubTaskDetail();
                obj.deserialize(params.SubTasks[z]);
                this.SubTasks.push(obj);
            }
        }
        this.ElapsedTime = 'ElapsedTime' in params ? params.ElapsedTime : null;

        if (params.ProcessInfo) {
            let obj = new ProcessDetail();
            obj.deserialize(params.ProcessInfo)
            this.ProcessInfo = obj;
        }

    }
}

/**
 * Additional EsConfig and JvmHeapConfig used by updateInstance
 * @class
 */
class OtherConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Additional yml configuration for es
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * jvm heap configuration of es
         * @type {string || null}
         */
        this.JvmHeapConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;
        this.JvmHeapConfig = 'JvmHeapConfig' in params ? params.JvmHeapConfig : null;

    }
}

/**
 * DescribeInstanceOperations request structure.
 * @class
 */
class DescribeInstanceOperationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time, e.g., "2019-03-07 16:30:39"
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, e.g., "2019-03-30 20:18:03"
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Paging Starting Value
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination size.
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
 * Operation details.
 * @class
 */
class OperationDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original configuration message of the instance
         * @type {Array.<KeyValue> || null}
         */
        this.OldInfo = null;

        /**
         * Configuration message after the instance update
         * @type {Array.<KeyValue> || null}
         */
        this.NewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OldInfo) {
            this.OldInfo = new Array();
            for (let z in params.OldInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.OldInfo[z]);
                this.OldInfo.push(obj);
            }
        }

        if (params.NewInfo) {
            this.NewInfo = new Array();
            for (let z in params.NewInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.NewInfo[z]);
                this.NewInfo.push(obj);
            }
        }

    }
}

/**
 * ES public network access control information
 * @class
 */
class EsPublicAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access the blocklist
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * Access allowlist
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;

    }
}

/**
 * ik plug-in dictionary information
 * @class
 */
class DictInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dictionary key-value
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Dictionary name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Dictionary size. Unit: B.
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * CreateInstance response structure.
 * @class
 */
class CreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Order ID.</p>
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogs request structure.
 * @class
 */
class DescribeInstanceLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Log type. Default value: 1.
<li>1, master log</li>
<li>2. Search slow logs</li>
<li>3. Index slow log</li>
<li>4. GC log</li>
         * @type {number || null}
         */
        this.LogType = null;

        /**
         * Search term. LUCENE grammar is supported, for example, level:WARN, ip:1.1.1.1, message:test-index
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Log start time in the format of YYYY-MM-DD HH:MM:SS, for example, 2019-01-22 20:15:53
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log end time in the format of YYYY-MM-DD HH:MM:SS, for example, 2019-01-22 20:15:53
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Pagination starting value. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination size. Default value: 100. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Time sort method. Default value: 0.
<li>0: descending order</li>
<li>1, ascending</li>
         * @type {number || null}
         */
        this.OrderByType = null;

        /**
         * Log level
         * @type {Array.<string> || null}
         */
        this.LogLevels = null;

        /**
         * Node ID.
         * @type {Array.<string> || null}
         */
        this.NodeIds = null;

        /**
         * Slow log index name
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * Slow log index shards
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * Slow log query time
         * @type {number || null}
         */
        this.QueryCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.LogLevels = 'LogLevels' in params ? params.LogLevels : null;
        this.NodeIds = 'NodeIds' in params ? params.NodeIds : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.QueryCost = 'QueryCost' in params ? params.QueryCost : null;

    }
}

/**
 * ModifyAutoBackUpCommonInfo request structure.
 * @class
 */
class ModifyAutoBackUpCommonInfoRequest extends  AbstractModel {
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
 * OperationDetail uses an array of this structure to describe the old and new configuration
 * @class
 */
class KeyValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value.
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
 * DescribeInstances response structure.
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of returned instances</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * <p>Instance detail list</p>
         * @type {Array.<InstanceInfo> || null}
         */
        this.InstanceList = null;

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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceInfo();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceLogs response structure.
 * @class
 */
class DescribeInstanceLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned log entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of log details
         * @type {Array.<InstanceLog> || null}
         */
        this.InstanceLogList = null;

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

        if (params.InstanceLogList) {
            this.InstanceLogList = new Array();
            for (let z in params.InstanceLogList) {
                let obj = new InstanceLog();
                obj.deserialize(params.InstanceLogList[z]);
                this.InstanceLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateIndex response structure.
 * @class
 */
class UpdateIndexResponse extends  AbstractModel {
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
 * DescribeInstanceOperations response structure.
 * @class
 */
class DescribeInstanceOperationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of operation records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Operation record
         * @type {Array.<Operation> || null}
         */
        this.Operations = null;

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

        if (params.Operations) {
            this.Operations = new Array();
            for (let z in params.Operations) {
                let obj = new Operation();
                obj.deserialize(params.Operations[z]);
                this.Operations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Auto capacity expansion parameter for cvm
 * @class
 */
class AutoScaleDiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node type. Valid values: `hotData`, `warmData`.
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 0: Percentage-based scale-out; 1: Absolute value-based scale-out
         * @type {number || null}
         */
        this.ScaleType = null;

        /**
         * Trigger threshold. Unit: %. For example, 80%.
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * Trigger duration in minutes, for example, 60
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Expansion ratio per time, unit: %, for example, 20%
         * @type {number || null}
         */
        this.PercentSize = null;

        /**
         * Absolute value-based scale-out, in GB, for example, 100 GB
         * @type {number || null}
         */
        this.FixSize = null;

        /**
         * Capacity limit for scale-out, in GB, for example, 500 GB
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.ScaleType = 'ScaleType' in params ? params.ScaleType : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.PercentSize = 'PercentSize' in params ? params.PercentSize : null;
        this.FixSize = 'FixSize' in params ? params.FixSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * UpdateRequestTargetNodeTypes response structure.
 * @class
 */
class UpdateRequestTargetNodeTypesResponse extends  AbstractModel {
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
 * Index autonomous field
 * @class
 */
class IndexOptionsField extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Expiration time.</p>
         * @type {string || null}
         */
        this.ExpireMaxAge = null;

        /**
         * <p>Expiration size</p>
         * @type {string || null}
         */
        this.ExpireMaxSize = null;

        /**
         * <p>Rollover period</p>
         * @type {string || null}
         */
        this.RolloverMaxAge = null;

        /**
         * <p>Whether to enable dynamic scrolling</p>
         * @type {string || null}
         */
        this.RolloverDynamic = null;

        /**
         * <p>Whether to enable dynamic sharding</p>
         * @type {string || null}
         */
        this.ShardNumDynamic = null;

        /**
         * <p>Time partition field</p>
         * @type {string || null}
         */
        this.TimestampField = null;

        /**
         * <p>Write mode</p>
         * @type {string || null}
         */
        this.WriteMode = null;

        /**
         * <p>Whether to enable complete uninstallation</p><p>Enumeration values:</p><ul><li>true: enable complete uninstallation</li><li>false: disable complete uninstallation</li></ul>
         * @type {string || null}
         */
        this.FullOffloadedEnable = null;

        /**
         * <p>Full uninstall lifecycle</p>
         * @type {string || null}
         */
        this.FullOffloadedMaxAge = null;

        /**
         * <p>Completely uninstall the lifecycle after backup index retrieval</p>
         * @type {string || null}
         */
        this.FullOffloadedRetrieveMaxAge = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExpireMaxAge = 'ExpireMaxAge' in params ? params.ExpireMaxAge : null;
        this.ExpireMaxSize = 'ExpireMaxSize' in params ? params.ExpireMaxSize : null;
        this.RolloverMaxAge = 'RolloverMaxAge' in params ? params.RolloverMaxAge : null;
        this.RolloverDynamic = 'RolloverDynamic' in params ? params.RolloverDynamic : null;
        this.ShardNumDynamic = 'ShardNumDynamic' in params ? params.ShardNumDynamic : null;
        this.TimestampField = 'TimestampField' in params ? params.TimestampField : null;
        this.WriteMode = 'WriteMode' in params ? params.WriteMode : null;
        this.FullOffloadedEnable = 'FullOffloadedEnable' in params ? params.FullOffloadedEnable : null;
        this.FullOffloadedMaxAge = 'FullOffloadedMaxAge' in params ? params.FullOffloadedMaxAge : null;
        this.FullOffloadedRetrieveMaxAge = 'FullOffloadedRetrieveMaxAge' in params ? params.FullOffloadedRetrieveMaxAge : null;

    }
}

/**
 * Subtask information in the process task of the instance operation record (for example, each check item in the upgrade check task)
 * @class
 */
class SubTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subtask name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subtask result
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * Subtask error message
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * Subtask type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Subtask status. 0: processing, 1: success, -1: failure
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Index name that failed the upgrade check
         * @type {Array.<string> || null}
         */
        this.FailedIndices = null;

        /**
         * Subtask end time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Subtask level. 1: warning; 2: failure
         * @type {number || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailedIndices = 'FailedIndices' in params ? params.FailedIndices : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * Gpu information of the node
 * @class
 */
class GpuInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of Gpu blocks
         * @type {number || null}
         */
        this.GpuCount = null;

        /**
         * GPU type.
         * @type {string || null}
         */
        this.GpuType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GpuCount = 'GpuCount' in params ? params.GpuCount : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;

    }
}

/**
 * Configuration group information
 * @class
 */
class EsConfigSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration group type, for example, ldap and ad
         * @type {string || null}
         */
        this.Type = null;

        /**
         * "{\"order\":0,\"url\":\"ldap://10.0.1.72:389\",\"bind_dn\":\"cn=admin,dc=tencent,dc=com\",\"user_search.base_dn\":\"dc=tencent,dc=com\",\"user_search.filter\":\"(cn={0})\",\"group_search.base_dn\":\"dc=tencent,dc=com\"}"
         * @type {string || null}
         */
        this.EsConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;

    }
}

/**
 * GetRequestTargetNodeTypes response structure.
 * @class
 */
class GetRequestTargetNodeTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of target node types that receive requests
         * @type {Array.<string> || null}
         */
        this.TargetNodeTypes = null;

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
        this.TargetNodeTypes = 'TargetNodeTypes' in params ? params.TargetNodeTypes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Detailed ES cluster operation information
 * @class
 */
class Operation extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Unique id of the operation</p>
         * @type {number || null}
         */
        this.Id = null;

        /**
         * <p>Operation start time.</p>
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * <p>Operation type.</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Operation details.</p>
         * @type {OperationDetail || null}
         */
        this.Detail = null;

        /**
         * <p>Operation result.</p>
         * @type {string || null}
         */
        this.Result = null;

        /**
         * <p>Process task info</p>
         * @type {Array.<TaskDetail> || null}
         */
        this.Tasks = null;

        /**
         * <p>Operation progress.</p>
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * <p>Rollback tag. 0: not rolled back, 1: rolling back, 2: rolled back</p>
         * @type {number || null}
         */
        this.RollbackTag = null;

        /**
         * <p>Operator Uin</p>
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * <p>Auto scaling flag. Valid values: 0 (non-auto) and 1 (auto).</p>
         * @type {number || null}
         */
        this.AutoScaleTag = null;

        /**
         * <p>Process exception cause</p>
         * @type {string || null}
         */
        this.SuspendedReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Detail) {
            let obj = new OperationDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.Result = 'Result' in params ? params.Result : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RollbackTag = 'RollbackTag' in params ? params.RollbackTag : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.AutoScaleTag = 'AutoScaleTag' in params ? params.AutoScaleTag : null;
        this.SuspendedReason = 'SuspendedReason' in params ? params.SuspendedReason : null;

    }
}

/**
 * ES cluster log details
 * @class
 */
class InstanceLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log time
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Cluster node IP address.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Log content
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Cluster node ID.
         * @type {string || null}
         */
        this.NodeID = null;

        /**
         * Slow log index name
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * Slow log index shards
         * @type {string || null}
         */
        this.Shard = null;

        /**
         * Slow log index query time
         * @type {string || null}
         */
        this.QueryCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.NodeID = 'NodeID' in params ? params.NodeID : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.Shard = 'Shard' in params ? params.Shard : null;
        this.QueryCost = 'QueryCost' in params ? params.QueryCost : null;

    }
}

/**
 * Specification description information of a node type in the cluster (such as hot data node, cold data node, dedicated master node), including node type, number of nodes, node specification, disk type, and disk size. If Type is not specified, it defaults to hot data node. If the node is a master node, the DiskType and DiskSize parameters will be ignored (the primary node has no data disk).
 * @class
 */
class NodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of nodes.</p>
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * <p>Node specification<li>ES.S1.SMALL2: 1-core 2G</li><li>ES.S1.MEDIUM4: 2-core 4G</li><li>ES.S1.MEDIUM8: 2-core 8G</li><li>ES.S1.LARGE16: 4-core 16G</li><li>ES.S1.2XLARGE32: 8-core 32G</li><li>ES.S1.4XLARGE32: 16-core 32G</li><li>ES.S1.4XLARGE64: 16-core 64G</li></p>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * <p>Node type</p><p>Enumeration values:</p><ul><li>hotData: hot data node</li><li>warmData: cold data node</li><li>dedicatedMaster: dedicated master node</li><li>dedicatedCoordinating: dedicated coordinator node</li><li>dedicatedMl: dedicated Machine Learning node</li></ul>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Node disk type<li>CLOUD_SSD: ssd cloud disk</li><li>CLOUD_PREMIUM: high-performance cloud disk</li>Default value: CLOUD_SSD</p>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * <p>Node disk capacity (GB)</p>
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * <p>Node local disk information.</p>
         * @type {LocalDiskInfo || null}
         */
        this.LocalDiskInfo = null;

        /**
         * <p>Number of node disk blocks</p>
         * @type {number || null}
         */
        this.DiskCount = null;

        /**
         * <p>Whether the node disk is encrypted. 0: no encryption; 1: encryption; not encrypted by default</p>
         * @type {number || null}
         */
        this.DiskEncrypt = null;

        /**
         * <p>Custom encryption key id</p>
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * <p>Custom encryption key name</p>
         * @type {string || null}
         */
        this.KmsKeyName = null;

        /**
         * <p>Number of CPUs</p>
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * <p>Memory size, in GB.</p>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * <p>Additional hard disk performance</p>
         * @type {number || null}
         */
        this.DiskEnhance = null;

        /**
         * <p>Gpu information of the node</p>
         * @type {GpuInfo || null}
         */
        this.GpuInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

        if (params.LocalDiskInfo) {
            let obj = new LocalDiskInfo();
            obj.deserialize(params.LocalDiskInfo)
            this.LocalDiskInfo = obj;
        }
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;
        this.DiskEncrypt = 'DiskEncrypt' in params ? params.DiskEncrypt : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.KmsKeyName = 'KmsKeyName' in params ? params.KmsKeyName : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.DiskEnhance = 'DiskEnhance' in params ? params.DiskEnhance : null;

        if (params.GpuInfo) {
            let obj = new GpuInfo();
            obj.deserialize(params.GpuInfo)
            this.GpuInfo = obj;
        }

    }
}

/**
 * DescribeAutoBackUpStrategy request structure.
 * @class
 */
class DescribeAutoBackUpStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name.
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
 * DescribeIndexMeta response structure.
 * @class
 */
class DescribeIndexMetaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Index metadata field
         * @type {IndexMetaField || null}
         */
        this.IndexMetaField = null;

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

        if (params.IndexMetaField) {
            let obj = new IndexMetaField();
            obj.deserialize(params.IndexMetaField)
            this.IndexMetaField = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoBackUpStrategy request structure.
 * @class
 */
class ModifyAutoBackUpStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Current policy name.
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * Policy information.
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }

    }
}

/**
 * Kibana view data
 * @class
 */
class KibanaView extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Kibana node IP</p>
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * <p>Total node disk size</p>
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * <p>Disk utilization rate</p>
         * @type {number || null}
         */
        this.DiskUsage = null;

        /**
         * <p>Node memory size</p>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * <p>Memory usage rate</p>
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * <p>Number of CPUs on the node</p>
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * <p>cpu utilization</p>
         * @type {number || null}
         */
        this.CpuUsage = null;

        /**
         * <p>AZ.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>ts-0noqayxu-az6-hot-03222010-0</p>
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * <p>Client-side Ip info</p>
         * @type {string || null}
         */
        this.UserIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.CpuUsage = 'CpuUsage' in params ? params.CpuUsage : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;

    }
}

/**
 * Index configuration field
 * @class
 */
class IndexSettingsField extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of index primary shards
         * @type {string || null}
         */
        this.NumberOfShards = null;

        /**
         * Replica shard count of an index
         * @type {string || null}
         */
        this.NumberOfReplicas = null;

        /**
         * Index refresh frequency
         * @type {string || null}
         */
        this.RefreshInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NumberOfShards = 'NumberOfShards' in params ? params.NumberOfShards : null;
        this.NumberOfReplicas = 'NumberOfReplicas' in params ? params.NumberOfReplicas : null;
        this.RefreshInterval = 'RefreshInterval' in params ? params.RefreshInterval : null;

    }
}

/**
 * UpdateRequestTargetNodeTypes request structure.
 * @class
 */
class UpdateRequestTargetNodeTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of target node types that receive requests
         * @type {Array.<string> || null}
         */
        this.TargetNodeTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TargetNodeTypes = 'TargetNodeTypes' in params ? params.TargetNodeTypes : null;

    }
}

/**
 * CreateAutoBackUpStrategy request structure.
 * @class
 */
class CreateAutoBackUpStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Policy information.
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }

    }
}

/**
 * DeleteInstance response structure.
 * @class
 */
class DeleteInstanceResponse extends  AbstractModel {
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
 * CreateIndex request structure.
 * @class
 */
class CreateIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES cluster ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Index type of the created index. auto: autonomous index; normal: general index
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * Index name of the created index
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * [Required] JSON-formatted index metadata created, such as mappings and settings
         * @type {string || null}
         */
        this.IndexMetaJson = null;

        /**
         * Cluster access username.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Cluster access password
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
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.IndexMetaJson = 'IndexMetaJson' in params ? params.IndexMetaJson : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * UpdatePlugins request structure.
 * @class
 */
class UpdatePluginsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Name list of plug-ins that needs to be installed
         * @type {Array.<string> || null}
         */
        this.InstallPluginList = null;

        /**
         * List of plug-in names to uninstall
         * @type {Array.<string> || null}
         */
        this.RemovePluginList = null;

        /**
         * Whether to force restart. Default value: false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

        /**
         * Whether to reinstall. Default value: false
         * @type {boolean || null}
         */
        this.ForceUpdate = null;

        /**
         * 0: System plugin
         * @type {number || null}
         */
        this.PluginType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstallPluginList = 'InstallPluginList' in params ? params.InstallPluginList : null;
        this.RemovePluginList = 'RemovePluginList' in params ? params.RemovePluginList : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;
        this.ForceUpdate = 'ForceUpdate' in params ? params.ForceUpdate : null;
        this.PluginType = 'PluginType' in params ? params.PluginType : null;

    }
}

/**
 * UpgradeLicense request structure.
 * @class
 */
class UpgradeLicenseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * License type<li>oss: open source edition</li><li>basic: basic version</li><li>platinum: platinum version</li>Default value: platinum
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * Indicates whether to use vouchers automatically<li>0: Do not use automatically.</li><li>1: Use automatically.</li>Default value: 0.
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list. Only one voucher can be specified.
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * Whether xpack security authentication is enabled for basic version 6.8 (and above versions)<li>1: not enabled</li><li>2: enabled</li><li>If no parameter is passed, the original status is maintained by default. When passing a parameter, note that it can only change from not enabled to enabled, and cannot change from enabled to not enabled</li>
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * Whether to force restart <li>true: force restart</li><li>false: do not force restart</li> Default value: false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * UpdateInstance response structure.
 * @class
 */
class UpdateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIndex request structure.
 * @class
 */
class DeleteIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>ES cluster ID</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Deleted index type. auto: autonomous index; normal: general index</p>
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * <p>Name of the deleted index</p>
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * <p>Cluster access username.</p>
         * @type {string || null}
         */
        this.Username = null;

        /**
         * <p>Cluster access password</p>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * <p>Backing index name</p>
         * @type {string || null}
         */
        this.BackingIndexName = null;

        /**
         * <p>Index life cycle</p>
         * @type {string || null}
         */
        this.IndexPhrase = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.BackingIndexName = 'BackingIndexName' in params ? params.BackingIndexName : null;
        this.IndexPhrase = 'IndexPhrase' in params ? params.IndexPhrase : null;

    }
}

/**
 * DescribeViews request structure.
 * @class
 */
class DescribeViewsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID.
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
 * ModifyAutoBackUpStrategy response structure.
 * @class
 */
class ModifyAutoBackUpStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: true (success) and false (failure).
         * @type {boolean || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIndexList response structure.
 * @class
 */
class DescribeIndexListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Index metadata field
         * @type {Array.<IndexMetaField> || null}
         */
        this.IndexMetaFields = null;

        /**
         * Total query count
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

        if (params.IndexMetaFields) {
            this.IndexMetaFields = new Array();
            for (let z in params.IndexMetaFields) {
                let obj = new IndexMetaField();
                obj.deserialize(params.IndexMetaFields[z]);
                this.IndexMetaFields.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cluster dimension view data
 * @class
 */
class ClusterView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster health status
         * @type {number || null}
         */
        this.Health = null;

        /**
         * Whether the cluster is visible
         * @type {number || null}
         */
        this.Visible = null;

        /**
         * Whether to fuse the cluster
         * @type {number || null}
         */
        this.Break = null;

        /**
         * Average Disk Usage
         * @type {number || null}
         */
        this.AvgDiskUsage = null;

        /**
         * Average memory utilization
         * @type {number || null}
         */
        this.AvgMemUsage = null;

        /**
         * Average CPU Usage
         * @type {number || null}
         */
        this.AvgCpuUsage = null;

        /**
         * Total storage size of a cluster.
         * @type {number || null}
         */
        this.TotalDiskSize = null;

        /**
         * Client request node
         * @type {Array.<string> || null}
         */
        this.TargetNodeTypes = null;

        /**
         * Number of online nodes
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Total number of nodes
         * @type {number || null}
         */
        this.TotalNodeNum = null;

        /**
         * Number of Data Nodes
         * @type {number || null}
         */
        this.DataNodeNum = null;

        /**
         * Index count
         * @type {number || null}
         */
        this.IndexNum = null;

        /**
         * Number of documents
         * @type {number || null}
         */
        this.DocNum = null;

        /**
         * Used bytes of the disk
         * @type {number || null}
         */
        this.DiskUsedInBytes = null;

        /**
         * Number of shards
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * Number of primary shards
         * @type {number || null}
         */
        this.PrimaryShardNum = null;

        /**
         * Number of migrating shards
         * @type {number || null}
         */
        this.RelocatingShardNum = null;

        /**
         * Number of initializing shards.
         * @type {number || null}
         */
        this.InitializingShardNum = null;

        /**
         * Number of unassigned shards
         * @type {number || null}
         */
        this.UnassignedShardNum = null;

        /**
         * Enterprise Edition COS storage capacity size in GB
         * @type {number || null}
         */
        this.TotalCosStorage = null;

        /**
         * bucket name for storing cos searchable snapshots in the Enterprise Edition cluster
         * @type {string || null}
         */
        this.SearchableSnapshotCosBucket = null;

        /**
         * App ID of the cos bucket for searchable snapshots in the Enterprise Edition cluster
         * @type {string || null}
         */
        this.SearchableSnapshotCosAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Health = 'Health' in params ? params.Health : null;
        this.Visible = 'Visible' in params ? params.Visible : null;
        this.Break = 'Break' in params ? params.Break : null;
        this.AvgDiskUsage = 'AvgDiskUsage' in params ? params.AvgDiskUsage : null;
        this.AvgMemUsage = 'AvgMemUsage' in params ? params.AvgMemUsage : null;
        this.AvgCpuUsage = 'AvgCpuUsage' in params ? params.AvgCpuUsage : null;
        this.TotalDiskSize = 'TotalDiskSize' in params ? params.TotalDiskSize : null;
        this.TargetNodeTypes = 'TargetNodeTypes' in params ? params.TargetNodeTypes : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.TotalNodeNum = 'TotalNodeNum' in params ? params.TotalNodeNum : null;
        this.DataNodeNum = 'DataNodeNum' in params ? params.DataNodeNum : null;
        this.IndexNum = 'IndexNum' in params ? params.IndexNum : null;
        this.DocNum = 'DocNum' in params ? params.DocNum : null;
        this.DiskUsedInBytes = 'DiskUsedInBytes' in params ? params.DiskUsedInBytes : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.PrimaryShardNum = 'PrimaryShardNum' in params ? params.PrimaryShardNum : null;
        this.RelocatingShardNum = 'RelocatingShardNum' in params ? params.RelocatingShardNum : null;
        this.InitializingShardNum = 'InitializingShardNum' in params ? params.InitializingShardNum : null;
        this.UnassignedShardNum = 'UnassignedShardNum' in params ? params.UnassignedShardNum : null;
        this.TotalCosStorage = 'TotalCosStorage' in params ? params.TotalCosStorage : null;
        this.SearchableSnapshotCosBucket = 'SearchableSnapshotCosBucket' in params ? params.SearchableSnapshotCosBucket : null;
        this.SearchableSnapshotCosAppId = 'SearchableSnapshotCosAppId' in params ? params.SearchableSnapshotCosAppId : null;

    }
}

/**
 * CreateIndex response structure.
 * @class
 */
class CreateIndexResponse extends  AbstractModel {
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
 * DeleteAutoBackUpStrategy request structure.
 * @class
 */
class DeleteAutoBackUpStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Policy name.
         * @type {Array.<string> || null}
         */
        this.StrategyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;

    }
}

/**
 * UpgradeLicense response structure.
 * @class
 */
class UpgradeLicenseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartKibana request structure.
 * @class
 */
class RestartKibanaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES instance ID.
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
 * DescribeAutoBackUpStrategy response structure.
 * @class
 */
class DescribeAutoBackUpStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy information.
         * @type {Array.<CosBackup> || null}
         */
        this.CosBackupList = null;

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

        if (params.CosBackupList) {
            this.CosBackupList = new Array();
            for (let z in params.CosBackupList) {
                let obj = new CosBackup();
                obj.deserialize(params.CosBackupList[z]);
                this.CosBackupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDictionaries request structure.
 * @class
 */
class UpdateDictionariesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Address of the COS main dictionary for IK word segmentation entered during installation, and the dictionary name such as test.dic entered during deletion.
         * @type {Array.<string> || null}
         */
        this.IkMainDicts = null;

        /**
         * Address of the COS stopword dictionary for IK word segmentation during installation. When deleting, enter the dictionary name, for example, test.dic.
         * @type {Array.<string> || null}
         */
        this.IkStopwords = null;

        /**
         * Address of the synonym dictionary COS during installation, and the dictionary name such as test.dic when deleting.
         * @type {Array.<string> || null}
         */
        this.Synonym = null;

        /**
         * Address of the COS QQ tokenizer dictionary during installation, and the dictionary name such as test.dic during deletion.
         * @type {Array.<string> || null}
         */
        this.QQDict = null;

        /**
         * 0: installation; 1: deletion. Default value: 0
         * @type {number || null}
         */
        this.UpdateType = null;

        /**
         * Whether to force restart the cluster. Default value: false
         * @type {boolean || null}
         */
        this.ForceRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IkMainDicts = 'IkMainDicts' in params ? params.IkMainDicts : null;
        this.IkStopwords = 'IkStopwords' in params ? params.IkStopwords : null;
        this.Synonym = 'Synonym' in params ? params.Synonym : null;
        this.QQDict = 'QQDict' in params ? params.QQDict : null;
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

    }
}

/**
 * ES cos auto backup information
 * @class
 */
class CosBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether to enable cos automatic backup</p>
         * @type {boolean || null}
         */
        this.IsAutoBackup = null;

        /**
         * <p>Automatic backup execution time (accurate to the hour), e.g. "22:00"</p>
         * @type {string || null}
         */
        this.BackupTime = null;

        /**
         * <p>Backup snapshot prefix</p>
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * <p>0 (Tencent Cloud repository); 1 (customer repository)</p>
         * @type {number || null}
         */
        this.EsRepositoryType = null;

        /**
         * <p>Managed snapshot repository name.</p>
         * @type {string || null}
         */
        this.PaasEsRepository = null;

        /**
         * <p>Customer snapshot repository name</p>
         * @type {string || null}
         */
        this.UserEsRepository = null;

        /**
         * <p>cos storage folder directory</p>
         * @type {string || null}
         */
        this.CosBasePath = null;

        /**
         * <p>Snapshot storage cycle in days</p>
         * @type {number || null}
         */
        this.StorageDuration = null;

        /**
         * <p>Auto backup frequency in hours.</p>
         * @type {number || null}
         */
        this.AutoBackupInterval = null;

        /**
         * <p>Backup lock. Valid values: 0 (not locked) and 1 (locked).</p>
         * @type {number || null}
         */
        this.CosRetention = null;

        /**
         * <p>Lock expiration date, such as 2022-12-10T08:34:48.000Z.</p>
         * @type {string || null}
         */
        this.RetainUntilDate = null;

        /**
         * <p>Lock grace period</p>
         * @type {number || null}
         */
        this.RetentionGraceTime = null;

        /**
         * <p>Cross-region backup. Valid values: 0 (disabled) and 1 (enabled).</p>
         * @type {number || null}
         */
        this.RemoteCos = null;

        /**
         * <p>Region name for cross-regional backup, such as ap-guangzhou.</p>
         * @type {string || null}
         */
        this.RemoteCosRegion = null;

        /**
         * <p>Policy name.</p>
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * <p>Backup index list. If left empty, it means to back up all indexes.</p>
         * @type {string || null}
         */
        this.Indices = null;

        /**
         * <p>cos multi-AZ backup. 0: single AZ; 1: multi-AZ</p>
         * @type {number || null}
         */
        this.MultiAz = null;

        /**
         * <p>Maximum speed of write to the repository per node max_snapshot_bytes_per_sec, default 40m</p>
         * @type {string || null}
         */
        this.MaxSnapshotPerSec = null;

        /**
         * <p>Maximum speed of reading the repository per node max_restore_bytes_per_sec. Default is 40m before 710, and default unlimited from 710 onwards</p>
         * @type {string || null}
         */
        this.MaxRestorePerSec = null;

        /**
         * <p>Policy creation time</p>
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.IsAutoBackup = 'IsAutoBackup' in params ? params.IsAutoBackup : null;
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.EsRepositoryType = 'EsRepositoryType' in params ? params.EsRepositoryType : null;
        this.PaasEsRepository = 'PaasEsRepository' in params ? params.PaasEsRepository : null;
        this.UserEsRepository = 'UserEsRepository' in params ? params.UserEsRepository : null;
        this.CosBasePath = 'CosBasePath' in params ? params.CosBasePath : null;
        this.StorageDuration = 'StorageDuration' in params ? params.StorageDuration : null;
        this.AutoBackupInterval = 'AutoBackupInterval' in params ? params.AutoBackupInterval : null;
        this.CosRetention = 'CosRetention' in params ? params.CosRetention : null;
        this.RetainUntilDate = 'RetainUntilDate' in params ? params.RetainUntilDate : null;
        this.RetentionGraceTime = 'RetentionGraceTime' in params ? params.RetentionGraceTime : null;
        this.RemoteCos = 'RemoteCos' in params ? params.RemoteCos : null;
        this.RemoteCosRegion = 'RemoteCosRegion' in params ? params.RemoteCosRegion : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.Indices = 'Indices' in params ? params.Indices : null;
        this.MultiAz = 'MultiAz' in params ? params.MultiAz : null;
        this.MaxSnapshotPerSec = 'MaxSnapshotPerSec' in params ? params.MaxSnapshotPerSec : null;
        this.MaxRestorePerSec = 'MaxRestorePerSec' in params ? params.MaxRestorePerSec : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeIndexList request structure.
 * @class
 */
class DescribeIndexListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Index type. auto: autonomous index; normal: general index
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * ES cluster ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Index name. If this parameter is left empty, all indexes are obtained.
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * Cluster access username.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Cluster access password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Paging start position
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items displayed per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Sorting fields, which support the following index names: IndexName, IndexStorage, and IndexCreateTime.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Filter by index status
         * @type {Array.<string> || null}
         */
        this.IndexStatusList = null;

        /**
         * Sort order. Supports asc and desc. Defaults to desc. Data format: "asc", "desc"
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
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.IndexStatusList = 'IndexStatusList' in params ? params.IndexStatusList : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * Cluster maintainability time
 * @class
 */
class OperationDuration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maintenance period, which refers to Monday to Sunday. Valid values: [0, 6].
         * @type {Array.<number> || null}
         */
        this.Periods = null;

        /**
         * Maintenance start time
         * @type {string || null}
         */
        this.TimeStart = null;

        /**
         * Maintenance end time.
         * @type {string || null}
         */
        this.TimeEnd = null;

        /**
         * Time zone in UTC format
         * @type {string || null}
         */
        this.TimeZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Periods = 'Periods' in params ? params.Periods : null;
        this.TimeStart = 'TimeStart' in params ? params.TimeStart : null;
        this.TimeEnd = 'TimeEnd' in params ? params.TimeEnd : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;

    }
}

/**
 * Cluster maintainability time
 * @class
 */
class OperationDurationUpdated extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maintenance period, which refers to Monday to Sunday. Valid values: [0, 6].
         * @type {Array.<number> || null}
         */
        this.Periods = null;

        /**
         * Maintenance start time
         * @type {string || null}
         */
        this.TimeStart = null;

        /**
         * Maintenance end time.
         * @type {string || null}
         */
        this.TimeEnd = null;

        /**
         * Time zone in UTC format
         * @type {string || null}
         */
        this.TimeZone = null;

        /**
         * ES cluster ID array
         * @type {Array.<string> || null}
         */
        this.MoreInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Periods = 'Periods' in params ? params.Periods : null;
        this.TimeStart = 'TimeStart' in params ? params.TimeStart : null;
        this.TimeEnd = 'TimeEnd' in params ? params.TimeEnd : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;
        this.MoreInstances = 'MoreInstances' in params ? params.MoreInstances : null;

    }
}

/**
 * CreateInstance request structure.
 * @class
 */
class CreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>AZ.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Instance version (supported: "5.6.4", "6.4.3", "6.8.2", "7.5.1", "7.10.1")</p>
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * <p>VPC ID</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Subnet ID.</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Access password (8-16 characters, including at least two of the following: [a-z,A-Z], [0-9], and special characters in [-!@#$%&amp;^*+=_:;,.?])</p>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * <p>Instance name (1-50 English letters, Chinese characters, digits, hyphens -, or underscores _)</p>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>Abandoned. Please use NodeInfoList<br>Node quantity (2-50)</p>
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * <p>Billing type<li>PREPAID: prepaid, i.e., monthly subscription</li><li>POSTPAID_BY_HOUR: pay-as-you-go by hour</li>Default value: POSTPAID_BY_HOUR</p>
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * <p>Annual and monthly subscription duration (unit determined by the TimeUnit parameter)</p>
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * <p>Auto-renewal flag<li>RENEW_FLAG_AUTO: auto renewal</li><li>RENEW_FLAG_MANUAL: no auto-renewal, user renews manually</li>This needs to be set when ChargeType is PREPAID. If this parameter is not passed, no automatic renewal by default for general users, and auto renewal for SVIP users</p>
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * <p>Abandoned. Please use NodeInfoList<br>Node specification<li>ES.S1.SMALL2: 1-core 2G</li><li>ES.S1.MEDIUM4: 2-core 4G</li><li>ES.S1.MEDIUM8: 2-core 8G</li><li>ES.S1.LARGE16: 4-core 16G</li><li>ES.S1.2XLARGE32: 8-core 32G</li><li>ES.S1.4XLARGE32: 16-core 32G</li><li>ES.S1.4XLARGE64: 16-core 64G</li></p>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * <p>Abandoned. Please use NodeInfoList<br>Node disk type<li>CLOUD_SSD: ssd cloud disk</li><li>CLOUD_PREMIUM: high-performance cloud block storage</li><li>CLOUD_HSSD: enhanced SSD cloud disk</li><li>CLOUD_BSSD: universal type SSD cloud disk</li>Default value: CLOUD_SSD</p>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * <p>Abandoned. Please use NodeInfoList<br>Node disk capacity (unit: GB)</p>
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * <p>Billing duration unit (needs to be set when ChargeType is PREPAID. Default value: "m", which means month. Currently only support "m")</p>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * <p>Indicates whether to use vouchers automatically<li>0: Do not use automatically.</li><li>1: Use automatically.</li>Default value: 0.</p>
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * <p>Voucher ID list. Only one voucher can be specified.</p>
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * <p>Abandoned. Please use NodeInfoList<br>Whether to create a dedicated master node<li>true: enable a dedicated master node</li><li>false: disable a dedicated master node</li>Default value: false</p>
         * @type {boolean || null}
         */
        this.EnableDedicatedMaster = null;

        /**
         * <p>Abandoned. Please use NodeInfoList<br>Number of dedicated primary nodes (supports only 3 or 5. Required if EnableDedicatedMaster is true)</p>
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * <p>Abandoned. Please use NodeInfoList<br>Dedicated primary node type (required if EnableDedicatedMaster is true)<li>ES.S1.SMALL2: 1-core 2G</li><li>ES.S1.MEDIUM4: 2-core 4G</li><li>ES.S1.MEDIUM8: 2-core 8G</li><li>ES.S1.LARGE16: 4-core 16G</li><li>ES.S1.2XLARGE32: 8-core 32G</li><li>ES.S1.4XLARGE32: 16-core 32G</li><li>ES.S1.4XLARGE64: 16-core 64G</li></p>
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * <p>Abandoned. Please use NodeInfoList<br>Dedicated primary node disk size (in GB, optional; if transmitted, it must be 50. Customization is not supported temporarily)</p>
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * <p>ClusterName in the cluster configuration file (system default configuration is the instance ID, customization is not supported temporarily)</p>
         * @type {string || null}
         */
        this.ClusterNameInConf = null;

        /**
         * <p>Cluster deployment method<li>0: single-AZ deployment</li><li>1: multi-AZ deployment, Beijing, Shanghai, Shanghai Finance, Guangzhou, Nanjing, Hong Kong, Singapore, Frankfurt (allowlist control)</li>Default value: 0</p>
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * <p>Detailed information of availability zones in multi-AZ deployment (required when DeployMode is 1)</p>
         * @type {Array.<ZoneDetail> || null}
         */
        this.MultiZoneInfo = null;

        /**
         * <p>License type<li>oss: open source edition</li><li>basic: basic version</li><li>platinum: platinum version</li>Default value: platinum</p>
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * <p>Node information list, for description of the specification information of various types of nodes in the cluster, such as node type, number of nodes, node specification, disk type, and disk size</p>
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfoList = null;

        /**
         * <p>Node tag information list</p>
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * <p>Whether xpack security authentication is enabled for basic version 6.8 (and above versions)<li>1: not enabled</li><li>2: enabled</li></p>
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * <p>Scenario template type 0: disabled 1: common 2: log 3: search</p>
         * @type {number || null}
         */
        this.SceneType = null;

        /**
         * <p>Visualize node configuration</p>
         * @type {WebNodeTypeInfo || null}
         */
        this.WebNodeTypeInfo = null;

        /**
         * <p>Create an https cluster. http is selected by default.</p>
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * <p>Maintenance time slot</p>
         * @type {OperationDuration || null}
         */
        this.OperationDuration = null;

        /**
         * <p>Whether storage-compute separation is enabled</p>
         * @type {boolean || null}
         */
        this.EnableHybridStorage = null;

        /**
         * <p>Additional hard disk performance</p>
         * @type {number || null}
         */
        this.DiskEnhance = null;

        /**
         * <p>Whether intelligent check is enabled</p>
         * @type {boolean || null}
         */
        this.EnableDiagnose = null;

        /**
         * <p>Whether to enable automatic backup</p>
         * @type {boolean || null}
         */
        this.EnableCosBackup = null;

        /**
         * <p>cdcId, pass it when using a CDC subnet</p>
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * <p>Placement group affinity. Value range: [0,10]. 0 indicates disabled.</p>
         * @type {number || null}
         */
        this.DisasterRecoverGroupAffinity = null;

        /**
         * <p>Enumeration values of sub-product ID: open source edition: "sp_es_io2", basic version: "sp_es_basic", platinum version: "sp_es_platinum", enterprise edition: "sp_es_enterprise", CDC platinum version: "sp_es_CDC_platinum", Log Enhancement Edition: "sp_es_enlogging", tsearch: "sp_tsearch_io2", logstash: "sp_es_logstash". It can be empty. When it is empty, the backend maps this field based on LicenseType.</p>
         * @type {string || null}
         */
        this.SubProductCode = null;

        /**
         * <p>Read-write separation mode: 0: not enabled; 1: local read/write separation; 2: remote read/write separation.</p>
         * @type {number || null}
         */
        this.ReadWriteMode = null;

        /**
         * <p>Whether the placement group has asynchronous tasks enabled</p>
         * @type {boolean || null}
         */
        this.EnableScheduleRecoverGroup = null;

        /**
         * <p>Maintenance time slot for enabling async tasks in a placement group</p>
         * @type {EnableScheduleOperationDuration || null}
         */
        this.EnableScheduleOperationDuration = null;

        /**
         * <p>Auto capacity expansion parameter list</p>
         * @type {Array.<AutoScaleDiskInfo> || null}
         */
        this.AutoScaleDiskInfoList = null;

        /**
         * <p>Whether to enable public network access to kibana. Enabled by default if not passed</p>
         * @type {string || null}
         */
        this.EnableKibanaPublicAccess = null;

        /**
         * <p>Existing cloud monitoring and alarm policy ID</p>
         * @type {Array.<string> || null}
         */
        this.AlarmPolicyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ClusterNameInConf = 'ClusterNameInConf' in params ? params.ClusterNameInConf : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;

        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;

        if (params.WebNodeTypeInfo) {
            let obj = new WebNodeTypeInfo();
            obj.deserialize(params.WebNodeTypeInfo)
            this.WebNodeTypeInfo = obj;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.OperationDuration) {
            let obj = new OperationDuration();
            obj.deserialize(params.OperationDuration)
            this.OperationDuration = obj;
        }
        this.EnableHybridStorage = 'EnableHybridStorage' in params ? params.EnableHybridStorage : null;
        this.DiskEnhance = 'DiskEnhance' in params ? params.DiskEnhance : null;
        this.EnableDiagnose = 'EnableDiagnose' in params ? params.EnableDiagnose : null;
        this.EnableCosBackup = 'EnableCosBackup' in params ? params.EnableCosBackup : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.DisasterRecoverGroupAffinity = 'DisasterRecoverGroupAffinity' in params ? params.DisasterRecoverGroupAffinity : null;
        this.SubProductCode = 'SubProductCode' in params ? params.SubProductCode : null;
        this.ReadWriteMode = 'ReadWriteMode' in params ? params.ReadWriteMode : null;
        this.EnableScheduleRecoverGroup = 'EnableScheduleRecoverGroup' in params ? params.EnableScheduleRecoverGroup : null;

        if (params.EnableScheduleOperationDuration) {
            let obj = new EnableScheduleOperationDuration();
            obj.deserialize(params.EnableScheduleOperationDuration)
            this.EnableScheduleOperationDuration = obj;
        }

        if (params.AutoScaleDiskInfoList) {
            this.AutoScaleDiskInfoList = new Array();
            for (let z in params.AutoScaleDiskInfoList) {
                let obj = new AutoScaleDiskInfo();
                obj.deserialize(params.AutoScaleDiskInfoList[z]);
                this.AutoScaleDiskInfoList.push(obj);
            }
        }
        this.EnableKibanaPublicAccess = 'EnableKibanaPublicAccess' in params ? params.EnableKibanaPublicAccess : null;
        this.AlarmPolicyIds = 'AlarmPolicyIds' in params ? params.AlarmPolicyIds : null;

    }
}

/**
 * UpdateDictionaries response structure.
 * @class
 */
class UpdateDictionariesResponse extends  AbstractModel {
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
 * Task progress details
 * @class
 */
class ProcessDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Number of completed</p>
         * @type {number || null}
         */
        this.Completed = null;

        /**
         * <p>Remaining quantity</p>
         * @type {number || null}
         */
        this.Remain = null;

        /**
         * <p>Total quantity.</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * <p>Task type:<br>60: Restart task<br>70: Shard migration task<br>80: Node configuration modification task</p>
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * <p>Estimated remaining time</p><p>Unit: seconds</p>
         * @type {number || null}
         */
        this.EstimatedTimeRemaining = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Completed = 'Completed' in params ? params.Completed : null;
        this.Remain = 'Remain' in params ? params.Remain : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.EstimatedTimeRemaining = 'EstimatedTimeRemaining' in params ? params.EstimatedTimeRemaining : null;

    }
}

/**
 * DeleteIndex response structure.
 * @class
 */
class DeleteIndexResponse extends  AbstractModel {
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
 * UpdatePlugins response structure.
 * @class
 */
class UpdatePluginsResponse extends  AbstractModel {
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
 * DescribeInstances request structure.
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>AZ to which the cluster instance belongs. All AZs are selected by default if this parameter is not specified.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Cluster instance ID list</p>
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * <p>Cluster instance name list.</p>
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * <p>Pagination starting value. Default value: 0</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Page size. Default value: 20</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Sorting field<li>1: Instance ID</li><li>2: Instance name</li><li>3: Availability zone</li><li>4: Creation time</li>If orderByKey is not transmitted, sort by creation time in descending order</p>
         * @type {number || null}
         */
        this.OrderByKey = null;

        /**
         * <p>Sorting method<li>0: ascending</li><li>1: descending</li>If orderByKey is passed but orderByType is not, ascending by default</p>
         * @type {number || null}
         */
        this.OrderByType = null;

        /**
         * <p>Node tag information list</p>
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * <p>Private network vip list</p>
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * <p>IP list of cluster nodes</p>
         * @type {Array.<string> || null}
         */
        this.NodeIps = null;

        /**
         * <p>Availability zone list</p>
         * @type {Array.<string> || null}
         */
        this.ZoneList = null;

        /**
         * <p>Health status filter list: 0 represents green, 1 represents yellow, 2 represents red, -1 represents unknown</p>
         * @type {Array.<number> || null}
         */
        this.HealthStatus = null;

        /**
         * <p>Vpc list filter item</p>
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * <p>cdc cluster id</p>
         * @type {string || null}
         */
        this.CdcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByKey = 'OrderByKey' in params ? params.OrderByKey : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.NodeIps = 'NodeIps' in params ? params.NodeIps : null;
        this.ZoneList = 'ZoneList' in params ? params.ZoneList : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

    }
}

/**
 * ES library information
 * @class
 */
class EsDictionaryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of enabled word dictionaries
         * @type {Array.<DictInfo> || null}
         */
        this.MainDict = null;

        /**
         * List of stopword dictionaries
         * @type {Array.<DictInfo> || null}
         */
        this.Stopwords = null;

        /**
         * List of QQ word segmentation dictionaries
         * @type {Array.<DictInfo> || null}
         */
        this.QQDict = null;

        /**
         * List of synonym dictionaries
         * @type {Array.<DictInfo> || null}
         */
        this.Synonym = null;

        /**
         * Update the dictionary type
         * @type {string || null}
         */
        this.UpdateType = null;

        /**
         * List of ansj enabled word dictionaries
         * @type {Array.<DictInfo> || null}
         */
        this.AnsjMain = null;

        /**
         * List of ansj stopword dictionaries
         * @type {Array.<DictInfo> || null}
         */
        this.AnsjStop = null;

        /**
         * List of ansj ambiguity lexicons
         * @type {Array.<DictInfo> || null}
         */
        this.AnsjAmbiguity = null;

        /**
         * List of ansj synonym dictionaries
         * @type {Array.<DictInfo> || null}
         */
        this.AnsjSynonyms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MainDict) {
            this.MainDict = new Array();
            for (let z in params.MainDict) {
                let obj = new DictInfo();
                obj.deserialize(params.MainDict[z]);
                this.MainDict.push(obj);
            }
        }

        if (params.Stopwords) {
            this.Stopwords = new Array();
            for (let z in params.Stopwords) {
                let obj = new DictInfo();
                obj.deserialize(params.Stopwords[z]);
                this.Stopwords.push(obj);
            }
        }

        if (params.QQDict) {
            this.QQDict = new Array();
            for (let z in params.QQDict) {
                let obj = new DictInfo();
                obj.deserialize(params.QQDict[z]);
                this.QQDict.push(obj);
            }
        }

        if (params.Synonym) {
            this.Synonym = new Array();
            for (let z in params.Synonym) {
                let obj = new DictInfo();
                obj.deserialize(params.Synonym[z]);
                this.Synonym.push(obj);
            }
        }
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;

        if (params.AnsjMain) {
            this.AnsjMain = new Array();
            for (let z in params.AnsjMain) {
                let obj = new DictInfo();
                obj.deserialize(params.AnsjMain[z]);
                this.AnsjMain.push(obj);
            }
        }

        if (params.AnsjStop) {
            this.AnsjStop = new Array();
            for (let z in params.AnsjStop) {
                let obj = new DictInfo();
                obj.deserialize(params.AnsjStop[z]);
                this.AnsjStop.push(obj);
            }
        }

        if (params.AnsjAmbiguity) {
            this.AnsjAmbiguity = new Array();
            for (let z in params.AnsjAmbiguity) {
                let obj = new DictInfo();
                obj.deserialize(params.AnsjAmbiguity[z]);
                this.AnsjAmbiguity.push(obj);
            }
        }

        if (params.AnsjSynonyms) {
            this.AnsjSynonyms = new Array();
            for (let z in params.AnsjSynonyms) {
                let obj = new DictInfo();
                obj.deserialize(params.AnsjSynonyms[z]);
                this.AnsjSynonyms.push(obj);
            }
        }

    }
}

/**
 * Node outbound access information
 * @class
 */
class OutboundPublicAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node types with permission for node outbound access
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Allowlist for outbound access from nodes
         * @type {Array.<string> || null}
         */
        this.WhiteHostList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.WhiteHostList = 'WhiteHostList' in params ? params.WhiteHostList : null;

    }
}

/**
 * GetRequestTargetNodeTypes request structure.
 * @class
 */
class GetRequestTargetNodeTypesRequest extends  AbstractModel {
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
 * Instance details
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Instance name.</p>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * <p>Region.</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>AZ.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>uid</p>
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * <p>User UIN.</p>
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * <p>UID of the VPC to which the instance belongs</p>
         * @type {string || null}
         */
        this.VpcUid = null;

        /**
         * <p>UID of the subnet to which the instance belongs</p>
         * @type {string || null}
         */
        this.SubnetUid = null;

        /**
         * <p>Instance status. 0: processing, 1: normal, -1: stopped, -2: being destroyed, -3: terminated, -4: isolated, 2: initializing when creating a cluster</p>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * <p>Auto-renewal flag. Value range: <br>RENEW_FLAG_AUTO: auto renewal<br>RENEW_FLAG_MANUAL: no auto-renewal<br>Default value: <br>RENEW_FLAG_DEFAULT: no auto-renewal<br>If this parameter is set to RENEW_FLAG_AUTO, the instance will automatically renew on a monthly basis after expiration if the account balance is sufficient.</p>
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * <p>Instance billing mode. Value ranges: PREPAID: prepaid mode, i.e., monthly subscription. POSTPAID_BY_HOUR: postpaid, i.e., pay-as-you-go. CDHPAID: CDH-paid mode, i.e., only charges for CDH, without charging for instances on CDH.</p>
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * <p>Annual and monthly subscription duration, unit: month</p>
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * <p>Node specification<li>ES.S1.SMALL2: 1-core 2G</li><li>ES.S1.MEDIUM4: 2-core 4G</li><li>ES.S1.MEDIUM8: 2-core 8G</li><li>ES.S1.LARGE16: 4-core 16G</li><li>ES.S1.2XLARGE32: 8-core 32G</li><li>ES.S1.4XLARGE32: 16-core 32G</li><li>ES.S1.4XLARGE64: 16-core 64G</li></p>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * <p>Number of nodes</p>
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * <p>Number of node CPU cores.</p>
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * <p>Node memory size (GB).</p>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * <p>Node disk type</p>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * <p>Node disk size (GB).</p>
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * <p>ES domain name</p>
         * @type {string || null}
         */
        this.EsDomain = null;

        /**
         * <p>ES VIP</p>
         * @type {string || null}
         */
        this.EsVip = null;

        /**
         * <p>ES port</p>
         * @type {number || null}
         */
        this.EsPort = null;

        /**
         * <p>Kibana access url</p>
         * @type {string || null}
         */
        this.KibanaUrl = null;

        /**
         * <p>ES version number</p>
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * <p>ES configuration item</p>
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * <p>Kibana Access Control Configuration</p>
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * <p>Instance creation time</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Last modification time of the instance</p>
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * <p>Instance expiration time</p>
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * <p>Instance type (instance type flag, currently only 1 and 2)</p>
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * <p>Ik analyzer configuration</p>
         * @type {EsDictionaryInfo || null}
         */
        this.IkConfig = null;

        /**
         * <p>Dedicated master node configuration</p>
         * @type {MasterNodeInfo || null}
         */
        this.MasterNodeInfo = null;

        /**
         * <p>cos automatic backup configuration</p>
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

        /**
         * <p>Whether cos automatic backup is allowed</p>
         * @type {boolean || null}
         */
        this.AllowCosBackup = null;

        /**
         * <p>Tag list of the instance</p>
         * @type {Array.<TagInfo> || null}
         */
        this.TagList = null;

        /**
         * <p>License type<li>oss: open source edition</li><li>basic: basic version</li><li>platinum: platinum version</li>Default value: platinum</p>
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * <p>License type<li>oss: open source edition</li><li>basic: basic version</li><li>platinum: platinum version</li><li>enterprise: enterprise edition</li>Default value: platinum</p>
         * @type {string || null}
         */
        this.RealLicenseType = null;

        /**
         * <p>Whether it is a hot-cold cluster<li>true: Hot-cold cluster</li><li>false: Non-hot-cold cluster</li></p>
         * @type {boolean || null}
         */
        this.EnableHotWarmMode = null;

        /**
         * <p>Warm node specification<li>ES.S1.SMALL2: 1-core 2G</li><li>ES.S1.MEDIUM4: 2-core 4G</li><li>ES.S1.MEDIUM8: 2-core 8G</li><li>ES.S1.LARGE16: 4-core 16G</li><li>ES.S1.2XLARGE32: 8-core 32G</li><li>ES.S1.4XLARGE32: 16-core 32G</li><li>ES.S1.4XLARGE64: 16-core 64G</li></p>
         * @type {string || null}
         */
        this.WarmNodeType = null;

        /**
         * <p>Number of warm nodes</p>
         * @type {number || null}
         */
        this.WarmNodeNum = null;

        /**
         * <p>Warm node CPU cores</p>
         * @type {number || null}
         */
        this.WarmCpuNum = null;

        /**
         * <p>Warm node memory size (GB).</p>
         * @type {number || null}
         */
        this.WarmMemSize = null;

        /**
         * <p>Warm node disk type</p>
         * @type {string || null}
         */
        this.WarmDiskType = null;

        /**
         * <p>Warm node disk size (GB).</p>
         * @type {number || null}
         */
        this.WarmDiskSize = null;

        /**
         * <p>Cluster node information list</p>
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfoList = null;

        /**
         * <p>Es public network address</p>
         * @type {string || null}
         */
        this.EsPublicUrl = null;

        /**
         * <p>Multi-AZ network info</p>
         * @type {Array.<ZoneDetail> || null}
         */
        this.MultiZoneInfo = null;

        /**
         * <p>Deployment mode<li>0: single availability zone</li><li>1: multi-availability zone, Beijing, Shanghai, Shanghai Finance, Guangzhou, Nanjing, Hong Kong, Singapore, Frankfurt (allowlist control)</li></p>
         * @type {number || null}
         */
        this.DeployMode = null;

        /**
         * <p>ES public access status<li>OPEN: enable</li><li>CLOSE: disable</li></p>
         * @type {string || null}
         */
        this.PublicAccess = null;

        /**
         * <p>ES public network access control configuration</p>
         * @type {EsAcl || null}
         */
        this.EsPublicAcl = null;

        /**
         * <p>Kibana private network address</p>
         * @type {string || null}
         */
        this.KibanaPrivateUrl = null;

        /**
         * <p>Kibana public access status<li>OPEN: enabled</li><li>CLOSE: disabled</li></p>
         * @type {string || null}
         */
        this.KibanaPublicAccess = null;

        /**
         * <p>Kibana internal access status<li>OPEN: enable</li><li>CLOSE: disable</li></p>
         * @type {string || null}
         */
        this.KibanaPrivateAccess = null;

        /**
         * <p>Whether xpack security authentication is enabled for basic version 6.8 (and above versions)<li>1: not enabled</li><li>2: enabled</li></p>
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * <p>Scenario template type: 0, not enabled; 1, common scenarios; 2, log scenario; 3, search scenario</p>
         * @type {number || null}
         */
        this.SceneType = null;

        /**
         * <p>Kibana configuration item</p>
         * @type {string || null}
         */
        this.KibanaConfig = null;

        /**
         * <p>Kibana node information</p>
         * @type {KibanaNodeInfo || null}
         */
        this.KibanaNodeInfo = null;

        /**
         * <p>Visualize node configuration</p>
         * @type {WebNodeTypeInfo || null}
         */
        this.WebNodeTypeInfo = null;

        /**
         * <p>JDK type. Valid values: oracle, kona</p>
         * @type {string || null}
         */
        this.Jdk = null;

        /**
         * <p>Cluster network communication protocol</p>
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * <p>Security group id</p>
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

        /**
         * <p>Cold node specification<li>ES.S1.SMALL2: 1-core 2G</li><li>ES.S1.MEDIUM4: 2-core 4G</li><li>ES.S1.MEDIUM8: 2-core 8G</li><li>ES.S1.LARGE16: 4-core 16G</li><li>ES.S1.2XLARGE32: 8-core 32G</li><li>ES.S1.4XLARGE32: 16-core 32G</li><li>ES.S1.4XLARGE64: 16-core 64G</li></p>
         * @type {string || null}
         */
        this.ColdNodeType = null;

        /**
         * <p>Number of cold nodes</p>
         * @type {number || null}
         */
        this.ColdNodeNum = null;

        /**
         * <p>Cold node CPU cores</p>
         * @type {number || null}
         */
        this.ColdCpuNum = null;

        /**
         * <p>Cold node memory size (GB).</p>
         * @type {number || null}
         */
        this.ColdMemSize = null;

        /**
         * <p>Cold node disk type</p>
         * @type {string || null}
         */
        this.ColdDiskType = null;

        /**
         * <p>Cold node disk size (GB).</p>
         * @type {number || null}
         */
        this.ColdDiskSize = null;

        /**
         * <p>Frozen node specification<li>ES.S1.SMALL2: 1-core 2GB</li><li>ES.S1.MEDIUM4: 2-core 4GB</li><li>ES.S1.MEDIUM8: 2-core 8GB</li><li>ES.S1.LARGE16: 4-core 16GB</li><li>ES.S1.2XLARGE32: 8-core 32GB</li><li>ES.S1.4XLARGE32: 16-core 32GB</li><li>ES.S1.4XLARGE64: 16-core 64GB</li></p>
         * @type {string || null}
         */
        this.FrozenNodeType = null;

        /**
         * <p>Number of frozen nodes</p>
         * @type {number || null}
         */
        this.FrozenNodeNum = null;

        /**
         * <p>Frozen node CPU cores</p>
         * @type {number || null}
         */
        this.FrozenCpuNum = null;

        /**
         * <p>Frozen node memory size (GB).</p>
         * @type {number || null}
         */
        this.FrozenMemSize = null;

        /**
         * <p>Frozen node disk type</p>
         * @type {string || null}
         */
        this.FrozenDiskType = null;

        /**
         * <p>Frozen node disk size (GB).</p>
         * @type {number || null}
         */
        this.FrozenDiskSize = null;

        /**
         * <p>Cluster health status: -1 unknown; 0 Green; 1 Yellow; 2 Red</p>
         * @type {number || null}
         */
        this.HealthStatus = null;

        /**
         * <p>Intracluster network url for https.</p>
         * @type {string || null}
         */
        this.EsPrivateUrl = null;

        /**
         * <p>https cluster private network domain name</p>
         * @type {string || null}
         */
        this.EsPrivateDomain = null;

        /**
         * <p>Cluster configuration group information.</p>
         * @type {Array.<EsConfigSetInfo> || null}
         */
        this.EsConfigSets = null;

        /**
         * <p>Cluster maintenance time slot</p>
         * @type {OperationDuration || null}
         */
        this.OperationDuration = null;

        /**
         * <p>web node list</p>
         * @type {Array.<OptionalWebServiceInfo> || null}
         */
        this.OptionalWebServiceInfos = null;

        /**
         * <p>Autonomous index switch</p>
         * @type {boolean || null}
         */
        this.AutoIndexEnabled = null;

        /**
         * <p>Whether storage and computation separation is supported.</p>
         * @type {boolean || null}
         */
        this.EnableHybridStorage = null;

        /**
         * <p>Process progress.</p>
         * @type {number || null}
         */
        this.ProcessPercent = null;

        /**
         * <p>Kibana alerting public network alert policy<li>OPEN: enable</li><li>CLOSE: disable</li></p>
         * @type {string || null}
         */
        this.KibanaAlteringPublicAccess = null;

        /**
         * <p>Whether there is a kernel update this month: false (no) and true (yes).</p>
         * @type {boolean || null}
         */
        this.HasKernelUpgrade = null;

        /**
         * <p>cdcId, pass it when using a CDC subnet</p>
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * <p>kibana intranet vip</p>
         * @type {string || null}
         */
        this.KibanaPrivateVip = null;

        /**
         * <p>Customize the private network url of kibana</p>
         * @type {string || null}
         */
        this.CustomKibanaPrivateUrl = null;

        /**
         * <p>Node outbound access detailed information.</p>
         * @type {Array.<OutboundPublicAcl> || null}
         */
        this.OutboundPublicAcls = null;

        /**
         * <p>Network connection solution</p>
         * @type {string || null}
         */
        this.NetConnectScheme = null;

        /**
         * <p>Placement group related parameters</p>
         * @type {number || null}
         */
        this.DisasterRecoverGroupAffinity = null;

        /**
         * <p>Sub-product ID enumeration values: open source edition: "sp_es_io2", basic version: "sp_es_basic", platinum version: "sp_es_platinum", AI Search Enhancement Edition: "sp_es_aisearch", enterprise edition: "sp_es_enterprise", CDC platinum version: "sp_es_CDC_platinum", Log Enhancement Edition: "sp_es_enlogging", tsearch: "sp_tsearch_io2", logstash: "sp_es_logstash". It can be empty. When it is empty, the backend maps this field based on LicenseType.</p>
         * @type {string || null}
         */
        this.SubProductCode = null;

        /**
         * <p>Storage-compute separation cos usage, Unit: M</p>
         * @type {number || null}
         */
        this.CosBucketStorageSize = null;

        /**
         * <p>Read-write separation mode: 0: not enabled; 1: local read/write separation; 2: remote read/write separation.</p>
         * @type {number || null}
         */
        this.ReadWriteMode = null;

        /**
         * <p>Whether there is an asynchronous task scheduling for placement groups</p>
         * @type {boolean || null}
         */
        this.EnableScheduleRecoverGroup = null;

        /**
         * <p>The time when an asynchronous task is scheduled</p>
         * @type {EnableScheduleOperationDuration || null}
         */
        this.EnableScheduleOperationDuration = null;

        /**
         * <p>Cluster protection: OPEN: enable, CLOSE: disable</p>
         * @type {string || null}
         */
        this.EnableDestroyProtection = null;

        /**
         * <p>kibana intranet access address</p>
         * @type {string || null}
         */
        this.ShowKibanaIpPort = null;

        /**
         * <p>Whether it is a CDZLite availability zone</p>
         * @type {boolean || null}
         */
        this.IsCdzLite = null;

        /**
         * <p>Cluster private network tcp address</p>
         * @type {string || null}
         */
        this.EsPrivateTcpUrl = null;

        /**
         * <p>Whether it is in the recycle bin</p><p>Default value: false</p>
         * @type {boolean || null}
         */
        this.IsInRecycleBin = null;

        /**
         * <p>Is locked in the recycle bin</p><p>Default value: false</p>
         * @type {boolean || null}
         */
        this.RecycleLockEnabled = null;

        /**
         * <p>The time when termination is expected</p><p>Parameter format: YYYY-MM-DD hh:mm:ss</p>
         * @type {string || null}
         */
        this.MayDestroyPoint = null;

        /**
         * <p>The time when termination is delayed</p><p>Unit: day</p>
         * @type {number || null}
         */
        this.DelayDestroyInterval = null;

        /**
         * <p>Enable automatic replacement of unhealthy nodes. 0: disable, 1: enable</p>
         * @type {number || null}
         */
        this.EnableAutoReplace = null;

        /**
         * <p>Enable mtls. 0: disable, 1: enable</p>
         * @type {number || null}
         */
        this.OpenMTLS = null;

        /**
         * <p>Certificate type</p>
         * @type {string || null}
         */
        this.ServerCertSource = null;

        /**
         * <p>VIP pending migration for the cluster</p>
         * @type {string || null}
         */
        this.OldEsVip = null;

        /**
         * <p>Cluster TCP address to be migrated</p>
         * @type {string || null}
         */
        this.OldEsPrivateTcpUrl = null;

        /**
         * <p>Whether to take old nodes offline from the VIP</p>
         * @type {boolean || null}
         */
        this.NeedOfflineOldNodesNotify = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.VpcUid = 'VpcUid' in params ? params.VpcUid : null;
        this.SubnetUid = 'SubnetUid' in params ? params.SubnetUid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.EsDomain = 'EsDomain' in params ? params.EsDomain : null;
        this.EsVip = 'EsVip' in params ? params.EsVip : null;
        this.EsPort = 'EsPort' in params ? params.EsPort : null;
        this.KibanaUrl = 'KibanaUrl' in params ? params.KibanaUrl : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.IkConfig) {
            let obj = new EsDictionaryInfo();
            obj.deserialize(params.IkConfig)
            this.IkConfig = obj;
        }

        if (params.MasterNodeInfo) {
            let obj = new MasterNodeInfo();
            obj.deserialize(params.MasterNodeInfo)
            this.MasterNodeInfo = obj;
        }

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }
        this.AllowCosBackup = 'AllowCosBackup' in params ? params.AllowCosBackup : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.RealLicenseType = 'RealLicenseType' in params ? params.RealLicenseType : null;
        this.EnableHotWarmMode = 'EnableHotWarmMode' in params ? params.EnableHotWarmMode : null;
        this.WarmNodeType = 'WarmNodeType' in params ? params.WarmNodeType : null;
        this.WarmNodeNum = 'WarmNodeNum' in params ? params.WarmNodeNum : null;
        this.WarmCpuNum = 'WarmCpuNum' in params ? params.WarmCpuNum : null;
        this.WarmMemSize = 'WarmMemSize' in params ? params.WarmMemSize : null;
        this.WarmDiskType = 'WarmDiskType' in params ? params.WarmDiskType : null;
        this.WarmDiskSize = 'WarmDiskSize' in params ? params.WarmDiskSize : null;

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }
        this.EsPublicUrl = 'EsPublicUrl' in params ? params.EsPublicUrl : null;

        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;

        if (params.EsPublicAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsPublicAcl)
            this.EsPublicAcl = obj;
        }
        this.KibanaPrivateUrl = 'KibanaPrivateUrl' in params ? params.KibanaPrivateUrl : null;
        this.KibanaPublicAccess = 'KibanaPublicAccess' in params ? params.KibanaPublicAccess : null;
        this.KibanaPrivateAccess = 'KibanaPrivateAccess' in params ? params.KibanaPrivateAccess : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.KibanaConfig = 'KibanaConfig' in params ? params.KibanaConfig : null;

        if (params.KibanaNodeInfo) {
            let obj = new KibanaNodeInfo();
            obj.deserialize(params.KibanaNodeInfo)
            this.KibanaNodeInfo = obj;
        }

        if (params.WebNodeTypeInfo) {
            let obj = new WebNodeTypeInfo();
            obj.deserialize(params.WebNodeTypeInfo)
            this.WebNodeTypeInfo = obj;
        }
        this.Jdk = 'Jdk' in params ? params.Jdk : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;
        this.ColdNodeType = 'ColdNodeType' in params ? params.ColdNodeType : null;
        this.ColdNodeNum = 'ColdNodeNum' in params ? params.ColdNodeNum : null;
        this.ColdCpuNum = 'ColdCpuNum' in params ? params.ColdCpuNum : null;
        this.ColdMemSize = 'ColdMemSize' in params ? params.ColdMemSize : null;
        this.ColdDiskType = 'ColdDiskType' in params ? params.ColdDiskType : null;
        this.ColdDiskSize = 'ColdDiskSize' in params ? params.ColdDiskSize : null;
        this.FrozenNodeType = 'FrozenNodeType' in params ? params.FrozenNodeType : null;
        this.FrozenNodeNum = 'FrozenNodeNum' in params ? params.FrozenNodeNum : null;
        this.FrozenCpuNum = 'FrozenCpuNum' in params ? params.FrozenCpuNum : null;
        this.FrozenMemSize = 'FrozenMemSize' in params ? params.FrozenMemSize : null;
        this.FrozenDiskType = 'FrozenDiskType' in params ? params.FrozenDiskType : null;
        this.FrozenDiskSize = 'FrozenDiskSize' in params ? params.FrozenDiskSize : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.EsPrivateUrl = 'EsPrivateUrl' in params ? params.EsPrivateUrl : null;
        this.EsPrivateDomain = 'EsPrivateDomain' in params ? params.EsPrivateDomain : null;

        if (params.EsConfigSets) {
            this.EsConfigSets = new Array();
            for (let z in params.EsConfigSets) {
                let obj = new EsConfigSetInfo();
                obj.deserialize(params.EsConfigSets[z]);
                this.EsConfigSets.push(obj);
            }
        }

        if (params.OperationDuration) {
            let obj = new OperationDuration();
            obj.deserialize(params.OperationDuration)
            this.OperationDuration = obj;
        }

        if (params.OptionalWebServiceInfos) {
            this.OptionalWebServiceInfos = new Array();
            for (let z in params.OptionalWebServiceInfos) {
                let obj = new OptionalWebServiceInfo();
                obj.deserialize(params.OptionalWebServiceInfos[z]);
                this.OptionalWebServiceInfos.push(obj);
            }
        }
        this.AutoIndexEnabled = 'AutoIndexEnabled' in params ? params.AutoIndexEnabled : null;
        this.EnableHybridStorage = 'EnableHybridStorage' in params ? params.EnableHybridStorage : null;
        this.ProcessPercent = 'ProcessPercent' in params ? params.ProcessPercent : null;
        this.KibanaAlteringPublicAccess = 'KibanaAlteringPublicAccess' in params ? params.KibanaAlteringPublicAccess : null;
        this.HasKernelUpgrade = 'HasKernelUpgrade' in params ? params.HasKernelUpgrade : null;
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.KibanaPrivateVip = 'KibanaPrivateVip' in params ? params.KibanaPrivateVip : null;
        this.CustomKibanaPrivateUrl = 'CustomKibanaPrivateUrl' in params ? params.CustomKibanaPrivateUrl : null;

        if (params.OutboundPublicAcls) {
            this.OutboundPublicAcls = new Array();
            for (let z in params.OutboundPublicAcls) {
                let obj = new OutboundPublicAcl();
                obj.deserialize(params.OutboundPublicAcls[z]);
                this.OutboundPublicAcls.push(obj);
            }
        }
        this.NetConnectScheme = 'NetConnectScheme' in params ? params.NetConnectScheme : null;
        this.DisasterRecoverGroupAffinity = 'DisasterRecoverGroupAffinity' in params ? params.DisasterRecoverGroupAffinity : null;
        this.SubProductCode = 'SubProductCode' in params ? params.SubProductCode : null;
        this.CosBucketStorageSize = 'CosBucketStorageSize' in params ? params.CosBucketStorageSize : null;
        this.ReadWriteMode = 'ReadWriteMode' in params ? params.ReadWriteMode : null;
        this.EnableScheduleRecoverGroup = 'EnableScheduleRecoverGroup' in params ? params.EnableScheduleRecoverGroup : null;

        if (params.EnableScheduleOperationDuration) {
            let obj = new EnableScheduleOperationDuration();
            obj.deserialize(params.EnableScheduleOperationDuration)
            this.EnableScheduleOperationDuration = obj;
        }
        this.EnableDestroyProtection = 'EnableDestroyProtection' in params ? params.EnableDestroyProtection : null;
        this.ShowKibanaIpPort = 'ShowKibanaIpPort' in params ? params.ShowKibanaIpPort : null;
        this.IsCdzLite = 'IsCdzLite' in params ? params.IsCdzLite : null;
        this.EsPrivateTcpUrl = 'EsPrivateTcpUrl' in params ? params.EsPrivateTcpUrl : null;
        this.IsInRecycleBin = 'IsInRecycleBin' in params ? params.IsInRecycleBin : null;
        this.RecycleLockEnabled = 'RecycleLockEnabled' in params ? params.RecycleLockEnabled : null;
        this.MayDestroyPoint = 'MayDestroyPoint' in params ? params.MayDestroyPoint : null;
        this.DelayDestroyInterval = 'DelayDestroyInterval' in params ? params.DelayDestroyInterval : null;
        this.EnableAutoReplace = 'EnableAutoReplace' in params ? params.EnableAutoReplace : null;
        this.OpenMTLS = 'OpenMTLS' in params ? params.OpenMTLS : null;
        this.ServerCertSource = 'ServerCertSource' in params ? params.ServerCertSource : null;
        this.OldEsVip = 'OldEsVip' in params ? params.OldEsVip : null;
        this.OldEsPrivateTcpUrl = 'OldEsPrivateTcpUrl' in params ? params.OldEsPrivateTcpUrl : null;
        this.NeedOfflineOldNodesNotify = 'NeedOfflineOldNodesNotify' in params ? params.NeedOfflineOldNodesNotify : null;

    }
}

/**
 * Instance-dedicated primary node-related information
 * @class
 */
class MasterNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the dedicated master node is enabled or not
         * @type {boolean || null}
         */
        this.EnableDedicatedMaster = null;

        /**
         * Dedicated primary node specification<li>ES.S1.SMALL2: 1-core 2G</li><li>ES.S1.MEDIUM4: 2-core 4G</li><li>ES.S1.MEDIUM8: 2-core 8G</li><li>ES.S1.LARGE16: 4-core 16G</li><li>ES.S1.2XLARGE32: 8-core 32G</li><li>ES.S1.4XLARGE32: 16-core 32G</li><li>ES.S1.4XLARGE64: 16-core 64G</li>
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * Number of dedicated primary nodes
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * Number of CPU cores of the dedicated master node
         * @type {number || null}
         */
        this.MasterNodeCpuNum = null;

        /**
         * Dedicated primary node memory size, in GB.
         * @type {number || null}
         */
        this.MasterNodeMemSize = null;

        /**
         * Dedicated primary node disk size in GB
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * Dedicated primary node disk type
         * @type {string || null}
         */
        this.MasterNodeDiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeCpuNum = 'MasterNodeCpuNum' in params ? params.MasterNodeCpuNum : null;
        this.MasterNodeMemSize = 'MasterNodeMemSize' in params ? params.MasterNodeMemSize : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.MasterNodeDiskType = 'MasterNodeDiskType' in params ? params.MasterNodeDiskType : null;

    }
}

/**
 * DeleteInstance request structure.
 * @class
 */
class DeleteInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Recycle bin lock settings. If true, it cannot be manually terminated and will be automatically destroyed after the preset time.</p><p>Default value: false</p>
         * @type {boolean || null}
         */
        this.LockEnabled = null;

        /**
         * <p>Lock time after being put into the recycle bin</p><p>Value range: [1, 7]</p><p>Unit: day</p><p>Default value: 1</p>
         * @type {number || null}
         */
        this.LockDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LockEnabled = 'LockEnabled' in params ? params.LockEnabled : null;
        this.LockDuration = 'LockDuration' in params ? params.LockDuration : null;

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
 * DeleteAutoBackUpStrategy response structure.
 * @class
 */
class DeleteAutoBackUpStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: true (success) and false (failure).
         * @type {boolean || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIndexMeta request structure.
 * @class
 */
class DescribeIndexMetaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ES cluster ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Index type. auto: autonomous index; normal: general index
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * Index name. If this parameter is left empty, all indexes are obtained.
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * Cluster access username.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Cluster access password
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
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * RestartKibana response structure.
 * @class
 */
class RestartKibanaResponse extends  AbstractModel {
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
 * UpdateIndex request structure.
 * @class
 */
class UpdateIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>ES cluster ID</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Updated index type. auto: autonomous index; normal: general index</p>
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * <p>Updated index name</p>
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * <p>Updated JSON-formatted index metadata, such as mappings and settings</p>
         * @type {string || null}
         */
        this.UpdateMetaJson = null;

        /**
         * <p>Cluster access username.</p>
         * @type {string || null}
         */
        this.Username = null;

        /**
         * <p>Cluster access password</p>
         * @type {string || null}
         */
        this.Password = null;

        /**
         * <p>Whether to scroll the backup index</p>
         * @type {boolean || null}
         */
        this.RolloverBackingIndex = null;

        /**
         * <p>Whether to retrieve the full uninstall index</p>
         * @type {boolean || null}
         */
        this.MountIndex = null;

        /**
         * <p>Index Uuid</p>
         * @type {string || null}
         */
        this.IndexUuid = null;

        /**
         * <p>Backing index name</p>
         * @type {string || null}
         */
        this.BackingIndexName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.UpdateMetaJson = 'UpdateMetaJson' in params ? params.UpdateMetaJson : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.RolloverBackingIndex = 'RolloverBackingIndex' in params ? params.RolloverBackingIndex : null;
        this.MountIndex = 'MountIndex' in params ? params.MountIndex : null;
        this.IndexUuid = 'IndexUuid' in params ? params.IndexUuid : null;
        this.BackingIndexName = 'BackingIndexName' in params ? params.BackingIndexName : null;

    }
}

/**
 * Index metadata field
 * @class
 */
class IndexMetaField extends  AbstractModel {
    constructor(){
        super();

        /**
         * Index type
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * Index name
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * JSON-formatted index metadata
         * @type {string || null}
         */
        this.IndexMetaJson = null;

        /**
         * Index status
         * @type {string || null}
         */
        this.IndexStatus = null;

        /**
         * Index storage size in bytes
         * @type {number || null}
         */
        this.IndexStorage = null;

        /**
         * Index creation time
         * @type {string || null}
         */
        this.IndexCreateTime = null;

        /**
         * Backup index
         * @type {Array.<BackingIndexMetaField> || null}
         */
        this.BackingIndices = null;

        /**
         * Cluster ID of the index
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name of the index
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Version number of the cluster to which the index belongs
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * Index lifecycle field
         * @type {IndexPolicyField || null}
         */
        this.IndexPolicyField = null;

        /**
         * Index autonomous field
         * @type {IndexOptionsField || null}
         */
        this.IndexOptionsField = null;

        /**
         * Index configuration field
         * @type {IndexSettingsField || null}
         */
        this.IndexSettingsField = null;

        /**
         * Index alias field
         * @type {Array.<string> || null}
         */
        this.IndexAliasesField = null;

        /**
         * APP ID of the cluster to which the index belongs
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Number of indexed documents
         * @type {number || null}
         */
        this.IndexDocs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IndexType = 'IndexType' in params ? params.IndexType : null;
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.IndexMetaJson = 'IndexMetaJson' in params ? params.IndexMetaJson : null;
        this.IndexStatus = 'IndexStatus' in params ? params.IndexStatus : null;
        this.IndexStorage = 'IndexStorage' in params ? params.IndexStorage : null;
        this.IndexCreateTime = 'IndexCreateTime' in params ? params.IndexCreateTime : null;

        if (params.BackingIndices) {
            this.BackingIndices = new Array();
            for (let z in params.BackingIndices) {
                let obj = new BackingIndexMetaField();
                obj.deserialize(params.BackingIndices[z]);
                this.BackingIndices.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;

        if (params.IndexPolicyField) {
            let obj = new IndexPolicyField();
            obj.deserialize(params.IndexPolicyField)
            this.IndexPolicyField = obj;
        }

        if (params.IndexOptionsField) {
            let obj = new IndexOptionsField();
            obj.deserialize(params.IndexOptionsField)
            this.IndexOptionsField = obj;
        }

        if (params.IndexSettingsField) {
            let obj = new IndexSettingsField();
            obj.deserialize(params.IndexSettingsField)
            this.IndexSettingsField = obj;
        }
        this.IndexAliasesField = 'IndexAliasesField' in params ? params.IndexAliasesField : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.IndexDocs = 'IndexDocs' in params ? params.IndexDocs : null;

    }
}

/**
 * Visualize node configuration
 * @class
 */
class WebNodeTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of nodes to visualize, fixed as 1
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * Visualize node specifications
         * @type {string || null}
         */
        this.NodeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;

    }
}

/**
 * Local disk information of the node
 * @class
 */
class LocalDiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Local disk type<li>LOCAL_SATA: big data type</li><li>NVME_SSD: high IO type</li>
         * @type {string || null}
         */
        this.LocalDiskType = null;

        /**
         * Single local disk size
         * @type {number || null}
         */
        this.LocalDiskSize = null;

        /**
         * Number of local disk blocks
         * @type {number || null}
         */
        this.LocalDiskCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalDiskType = 'LocalDiskType' in params ? params.LocalDiskType : null;
        this.LocalDiskSize = 'LocalDiskSize' in params ? params.LocalDiskSize : null;
        this.LocalDiskCount = 'LocalDiskCount' in params ? params.LocalDiskCount : null;

    }
}

/**
 * Index lifecycle field
 * @class
 */
class IndexPolicyField extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the warm phase is enabled
         * @type {string || null}
         */
        this.WarmEnable = null;

        /**
         * Transfer time to the warm phase
         * @type {string || null}
         */
        this.WarmMinAge = null;

        /**
         * Whether the cold phase is enabled
         * @type {string || null}
         */
        this.ColdEnable = null;

        /**
         * Transfer time to the cold phase
         * @type {string || null}
         */
        this.ColdMinAge = null;

        /**
         * Whether the frozen phase is enabled
         * @type {string || null}
         */
        this.FrozenEnable = null;

        /**
         * Time of transfer to the frozen stage
         * @type {string || null}
         */
        this.FrozenMinAge = null;

        /**
         * /
         * @type {string || null}
         */
        this.ColdAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WarmEnable = 'WarmEnable' in params ? params.WarmEnable : null;
        this.WarmMinAge = 'WarmMinAge' in params ? params.WarmMinAge : null;
        this.ColdEnable = 'ColdEnable' in params ? params.ColdEnable : null;
        this.ColdMinAge = 'ColdMinAge' in params ? params.ColdMinAge : null;
        this.FrozenEnable = 'FrozenEnable' in params ? params.FrozenEnable : null;
        this.FrozenMinAge = 'FrozenMinAge' in params ? params.FrozenMinAge : null;
        this.ColdAction = 'ColdAction' in params ? params.ColdAction : null;

    }
}

/**
 * Placement group async task maintenance time period
 * @class
 */
class EnableScheduleOperationDuration extends  AbstractModel {
    constructor(){
        super();

        /**
         * Date when enabling an asynchronous task is supported
         * @type {Array.<string> || null}
         */
        this.Periods = null;

        /**
         * Enable async start time
         * @type {string || null}
         */
        this.TimeStart = null;

        /**
         * Supports enabling asynchronous termination time
         * @type {string || null}
         */
        this.TimeEnd = null;

        /**
         * Enable async time zone
         * @type {string || null}
         */
        this.TimeZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Periods = 'Periods' in params ? params.Periods : null;
        this.TimeStart = 'TimeStart' in params ? params.TimeStart : null;
        this.TimeEnd = 'TimeEnd' in params ? params.TimeEnd : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;

    }
}

/**
 * RestartInstance response structure.
 * @class
 */
class RestartInstanceResponse extends  AbstractModel {
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
 * Backup index metadata field
 * @class
 */
class BackingIndexMetaField extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Backing index name</p>
         * @type {string || null}
         */
        this.IndexName = null;

        /**
         * <p>Backup index status</p>
         * @type {string || null}
         */
        this.IndexStatus = null;

        /**
         * <p>Backup index storage size</p>
         * @type {number || null}
         */
        this.IndexStorage = null;

        /**
         * <p>Backup index current lifecycle</p>
         * @type {string || null}
         */
        this.IndexPhrase = null;

        /**
         * <p>Backup index creation time</p>
         * @type {string || null}
         */
        this.IndexCreateTime = null;

        /**
         * <p>Index Uuid</p>
         * @type {string || null}
         */
        this.IndexUuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IndexName = 'IndexName' in params ? params.IndexName : null;
        this.IndexStatus = 'IndexStatus' in params ? params.IndexStatus : null;
        this.IndexStorage = 'IndexStorage' in params ? params.IndexStorage : null;
        this.IndexPhrase = 'IndexPhrase' in params ? params.IndexPhrase : null;
        this.IndexCreateTime = 'IndexCreateTime' in params ? params.IndexCreateTime : null;
        this.IndexUuid = 'IndexUuid' in params ? params.IndexUuid : null;

    }
}

/**
 * Node dimension view data
 * @class
 */
class NodeView extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID.
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Node IP
         * @type {string || null}
         */
        this.NodeIp = null;

        /**
         * Whether the node is visible
         * @type {number || null}
         */
        this.Visible = null;

        /**
         * Whether to fuse
         * @type {number || null}
         */
        this.Break = null;

        /**
         * Total node disk size
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Disk utilization rate
         * @type {number || null}
         */
        this.DiskUsage = null;

        /**
         * Node memory size (unit: GB)
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Memory usage rate
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * Number of CPUs on the node
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * CPU utilization
         * @type {number || null}
         */
        this.CpuUsage = null;

        /**
         * AZ.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Node role
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * Node HTTP IP
         * @type {string || null}
         */
        this.NodeHttpIp = null;

        /**
         * JVM memory usage rate
         * @type {number || null}
         */
        this.JvmMemUsage = null;

        /**
         * Number of shards per node
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * Disk ID list on node
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * Whether it is a hidden AZ
         * @type {boolean || null}
         */
        this.Hidden = null;

        /**
         * Whether to act as the coordination node role
         * @type {boolean || null}
         */
        this.IsCoordinationNode = null;

        /**
         * CVM running state
         * @type {string || null}
         */
        this.CVMStatus = null;

        /**
         * id of the placement group bound to the cvm
         * @type {string || null}
         */
        this.CVMDisasterRecoverGroupId = null;

        /**
         * Status of the placement group bound to the cvm. 2: Bound; 1: Binding; 0: Not enabled
         * @type {number || null}
         */
        this.CVMDisasterRecoverGroupStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeIp = 'NodeIp' in params ? params.NodeIp : null;
        this.Visible = 'Visible' in params ? params.Visible : null;
        this.Break = 'Break' in params ? params.Break : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.CpuUsage = 'CpuUsage' in params ? params.CpuUsage : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.NodeHttpIp = 'NodeHttpIp' in params ? params.NodeHttpIp : null;
        this.JvmMemUsage = 'JvmMemUsage' in params ? params.JvmMemUsage : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.DiskIds = 'DiskIds' in params ? params.DiskIds : null;
        this.Hidden = 'Hidden' in params ? params.Hidden : null;
        this.IsCoordinationNode = 'IsCoordinationNode' in params ? params.IsCoordinationNode : null;
        this.CVMStatus = 'CVMStatus' in params ? params.CVMStatus : null;
        this.CVMDisasterRecoverGroupId = 'CVMDisasterRecoverGroupId' in params ? params.CVMDisasterRecoverGroupId : null;
        this.CVMDisasterRecoverGroupStatus = 'CVMDisasterRecoverGroupStatus' in params ? params.CVMDisasterRecoverGroupStatus : null;

    }
}

/**
 * Instance tag information.
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value.
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
 * UpdateInstance request structure.
 * @class
 */
class UpdateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name (1-50 English letters, Chinese characters, digits, hyphens -, or underscores _)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Abandoned. Please use NodeInfoList.
Number of nodes (2-50).
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * ES configuration item (JSON format string)
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * Password of the default user elastic (8–16 characters, including at least two of the following: [a-z,A-Z], [0-9], and special characters [-!@#$%&^*+=_:;,.?])
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Public access policy for visualization components (Kibana and Cerebro)
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * Abandoned. Please use NodeInfoList.
Disk size in GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Abandoned. Please use NodeInfoList.
Node specification<li>ES.S1.SMALL2: 1-core 2G</li><li>ES.S1.MEDIUM4: 2-core 4G</li><li>ES.S1.MEDIUM8: 2-core 8G</li><li>ES.S1.LARGE16: 4-core 16G</li><li>ES.S1.2XLARGE32: 8-core 32G</li><li>ES.S1.4XLARGE32: 16-core 32G</li><li>ES.S1.4XLARGE64: 16-core 64G</li>
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * Abandoned. Please use NodeInfoList.
Number of dedicated primary nodes (supports only 3 or 5)
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * Abandoned. Please use NodeInfoList.
Dedicated primary node specification<li>ES.S1.SMALL2: 1-core 2GB</li><li>ES.S1.MEDIUM4: 2-core 4GB</li><li>ES.S1.MEDIUM8: 2-core 8GB</li><li>ES.S1.LARGE16: 4-core 16GB</li><li>ES.S1.2XLARGE32: 8-core 32GB</li><li>ES.S1.4XLARGE32: 16-core 32GB</li><li>ES.S1.4XLARGE64: 16-core 64GB</li>
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * Abandoned. Please use NodeInfoList.
Dedicated primary node disk size (in GB. The system default configuration is 50 GB. Customization is temporarily not supported.)
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

        /**
         * Whether to force restart when updating the configuration <li>true: force restart</li><li>false: do not force restart</li>Currently, this needs to be set only when updating EsConfig. The default value is false.
         * @type {boolean || null}
         */
        this.ForceRestart = null;

        /**
         * COS auto backup information
         * @type {CosBackup || null}
         */
        this.CosBackup = null;

        /**
         * Node information list. You can transmit only the node to be updated and its corresponding specification information. Supported operations include <li>modifying the count of a node type</li><li>modifying the node specification and disk size of a node type</li><li>adding a node type (you need to simultaneously specify the node type, count, specification, disk, and other information)</li>. You can perform only one of the above operations at a time, and the disk type cannot be modified.
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfoList = null;

        /**
         * Public access status of the ES cluster
OPEN: enabled.
-CLOSE: disabled.
         * @type {string || null}
         */
        this.PublicAccess = null;

        /**
         * Public network access control list
         * @type {EsPublicAcl || null}
         */
        this.EsPublicAcl = null;

        /**
         * Kibana public access status
OPEN: enabled.
-CLOSE: disabled.
         * @type {string || null}
         */
        this.KibanaPublicAccess = null;

        /**
         * Kibana internal access status
OPEN: enabled.
-CLOSE: disabled.
         * @type {string || null}
         */
        this.KibanaPrivateAccess = null;

        /**
         * Turn on or off user authentication for the basic version of ES 6.8 and above
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * Kibana private network port
         * @type {number || null}
         */
        this.KibanaPrivatePort = null;

        /**
         * 0: Scale out via blue-green change without restarting the cluster (default) 1: Scale out by unmounting disks with a cluster rolling restart
         * @type {number || null}
         */
        this.ScaleType = null;

        /**
         * Multi-AZ deployment
         * @type {Array.<ZoneDetail> || null}
         */
        this.MultiZoneInfo = null;

        /**
         * Scenario template type. -1: not enabled. 1: common. 2: log. 3: search
         * @type {number || null}
         */
        this.SceneType = null;

        /**
         * Kibana configuration item (JSON format string)
         * @type {string || null}
         */
        this.KibanaConfig = null;

        /**
         * Visualize node configuration
         * @type {WebNodeTypeInfo || null}
         */
        this.WebNodeTypeInfo = null;

        /**
         * Switch to the new network architecture
         * @type {string || null}
         */
        this.SwitchPrivateLink = null;

        /**
         * Enable Cerebro
         * @type {boolean || null}
         */
        this.EnableCerebro = null;

        /**
         * Cerebro public access status
OPEN: enabled.
-CLOSE: disabled.
         * @type {string || null}
         */
        this.CerebroPublicAccess = null;

        /**
         * Cerebro private network access status
OPEN: enabled.
-CLOSE: disabled.
         * @type {string || null}
         */
        this.CerebroPrivateAccess = null;

        /**
         * Newly-added or modified configuration group information
         * @type {EsConfigSetInfo || null}
         */
        this.EsConfigSet = null;

        /**
         * Maintenance time slot.
         * @type {OperationDurationUpdated || null}
         */
        this.OperationDuration = null;

        /**
         * Whether Alerting public network alert output is enabled:
OPEN: enabled.
-CLOSE: disabled.
         * @type {string || null}
         */
        this.KibanaAlteringPublicAccess = null;

        /**
         * Custom domain name of kibana on the private network
         * @type {string || null}
         */
        this.KibanaPrivateDomain = null;

        /**
         * Custom domain name of cerebro on the private network
         * @type {string || null}
         */
        this.CerebroPrivateDomain = null;

        /**
         * Change to an https cluster. http is selected by default.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Outbound access details of the node

         * @type {Array.<OutboundPublicAcl> || null}
         */
        this.OutboundPublicAcls = null;

        /**
         * Outbound access operations of the node
OPEN
-CLOSE: disabled.
         * @type {string || null}
         */
        this.OutboundPublicAccess = null;

        /**
         * Parameter for delayed cvm launch
         * @type {number || null}
         */
        this.CvmDelayOnlineTime = null;

        /**
         * Number of concurrent shard migrations
         * @type {number || null}
         */
        this.ShardAllocationConcurrents = null;

        /**
         * Shard migration concurrency speed
         * @type {number || null}
         */
        this.ShardAllocationBytes = null;

        /**
         * Read-write separation mode: -1: not enabled; 1: local read/write separation; 2: remote read/write separation.
         * @type {number || null}
         */
        this.ReadWriteMode = null;

        /**
         * Whether to enable the placement group async task
         * @type {boolean || null}
         */
        this.EnableScheduleRecoverGroup = null;

        /**
         * Placement group async task maintenance time slot
         * @type {EnableScheduleOperationDuration || null}
         */
        this.EnableScheduleOperationDuration = null;

        /**
         * Cluster protection: OPEN: enable, CLOSE: disable
         * @type {string || null}
         */
        this.EnableDestroyProtection = null;

        /**
         * Auto capacity expansion parameter
         * @type {Array.<AutoScaleDiskInfo> || null}
         */
        this.AutoScaleDiskInfoList = null;

        /**
         * Auto-expansion delete parameter
         * @type {Array.<string> || null}
         */
        this.AutoScaleDiskDeleteNodeTypeList = null;

        /**
         * Other additional configuration, jvm or yml.
         * @type {OtherConfig || null}
         */
        this.OtherConfig = null;

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
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;

        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup)
            this.CosBackup = obj;
        }

        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;

        if (params.EsPublicAcl) {
            let obj = new EsPublicAcl();
            obj.deserialize(params.EsPublicAcl)
            this.EsPublicAcl = obj;
        }
        this.KibanaPublicAccess = 'KibanaPublicAccess' in params ? params.KibanaPublicAccess : null;
        this.KibanaPrivateAccess = 'KibanaPrivateAccess' in params ? params.KibanaPrivateAccess : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.KibanaPrivatePort = 'KibanaPrivatePort' in params ? params.KibanaPrivatePort : null;
        this.ScaleType = 'ScaleType' in params ? params.ScaleType : null;

        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.KibanaConfig = 'KibanaConfig' in params ? params.KibanaConfig : null;

        if (params.WebNodeTypeInfo) {
            let obj = new WebNodeTypeInfo();
            obj.deserialize(params.WebNodeTypeInfo)
            this.WebNodeTypeInfo = obj;
        }
        this.SwitchPrivateLink = 'SwitchPrivateLink' in params ? params.SwitchPrivateLink : null;
        this.EnableCerebro = 'EnableCerebro' in params ? params.EnableCerebro : null;
        this.CerebroPublicAccess = 'CerebroPublicAccess' in params ? params.CerebroPublicAccess : null;
        this.CerebroPrivateAccess = 'CerebroPrivateAccess' in params ? params.CerebroPrivateAccess : null;

        if (params.EsConfigSet) {
            let obj = new EsConfigSetInfo();
            obj.deserialize(params.EsConfigSet)
            this.EsConfigSet = obj;
        }

        if (params.OperationDuration) {
            let obj = new OperationDurationUpdated();
            obj.deserialize(params.OperationDuration)
            this.OperationDuration = obj;
        }
        this.KibanaAlteringPublicAccess = 'KibanaAlteringPublicAccess' in params ? params.KibanaAlteringPublicAccess : null;
        this.KibanaPrivateDomain = 'KibanaPrivateDomain' in params ? params.KibanaPrivateDomain : null;
        this.CerebroPrivateDomain = 'CerebroPrivateDomain' in params ? params.CerebroPrivateDomain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.OutboundPublicAcls) {
            this.OutboundPublicAcls = new Array();
            for (let z in params.OutboundPublicAcls) {
                let obj = new OutboundPublicAcl();
                obj.deserialize(params.OutboundPublicAcls[z]);
                this.OutboundPublicAcls.push(obj);
            }
        }
        this.OutboundPublicAccess = 'OutboundPublicAccess' in params ? params.OutboundPublicAccess : null;
        this.CvmDelayOnlineTime = 'CvmDelayOnlineTime' in params ? params.CvmDelayOnlineTime : null;
        this.ShardAllocationConcurrents = 'ShardAllocationConcurrents' in params ? params.ShardAllocationConcurrents : null;
        this.ShardAllocationBytes = 'ShardAllocationBytes' in params ? params.ShardAllocationBytes : null;
        this.ReadWriteMode = 'ReadWriteMode' in params ? params.ReadWriteMode : null;
        this.EnableScheduleRecoverGroup = 'EnableScheduleRecoverGroup' in params ? params.EnableScheduleRecoverGroup : null;

        if (params.EnableScheduleOperationDuration) {
            let obj = new EnableScheduleOperationDuration();
            obj.deserialize(params.EnableScheduleOperationDuration)
            this.EnableScheduleOperationDuration = obj;
        }
        this.EnableDestroyProtection = 'EnableDestroyProtection' in params ? params.EnableDestroyProtection : null;

        if (params.AutoScaleDiskInfoList) {
            this.AutoScaleDiskInfoList = new Array();
            for (let z in params.AutoScaleDiskInfoList) {
                let obj = new AutoScaleDiskInfo();
                obj.deserialize(params.AutoScaleDiskInfoList[z]);
                this.AutoScaleDiskInfoList.push(obj);
            }
        }
        this.AutoScaleDiskDeleteNodeTypeList = 'AutoScaleDiskDeleteNodeTypeList' in params ? params.AutoScaleDiskDeleteNodeTypeList : null;

        if (params.OtherConfig) {
            let obj = new OtherConfig();
            obj.deserialize(params.OtherConfig)
            this.OtherConfig = obj;
        }

    }
}

/**
 * CreateAutoBackUpStrategy response structure.
 * @class
 */
class CreateAutoBackUpStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: true (success) and false (failure).
         * @type {boolean || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartInstance request structure.
 * @class
 */
class RestartInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <p>Whether to force restart<li>true: force restart</li><li>false: do not force restart</li>Default value: false</p>
         * @type {boolean || null}
         */
        this.ForceRestart = null;

        /**
         * <p>Restart mode: 0 rolling restart; 1 full restart</p>
         * @type {number || null}
         */
        this.RestartMode = null;

        /**
         * <p>Select whether to upgrade the kernel patch version upon restart</p>
         * @type {boolean || null}
         */
        this.UpgradeKernel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;
        this.RestartMode = 'RestartMode' in params ? params.RestartMode : null;
        this.UpgradeKernel = 'UpgradeKernel' in params ? params.UpgradeKernel : null;

    }
}

/**
 * Detailed information of availability zones in multi-AZ deployment
 * @class
 */
class ZoneDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether it is a hidden AZ
         * @type {boolean || null}
         */
        this.Hidden = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Hidden = 'Hidden' in params ? params.Hidden : null;

    }
}

/**
 * Kibana node-related information of the instance
 * @class
 */
class KibanaNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kibana node specification
         * @type {string || null}
         */
        this.KibanaNodeType = null;

        /**
         * Number of Kibana nodes
         * @type {number || null}
         */
        this.KibanaNodeNum = null;

        /**
         * Number of CPUs of the Kibana node
         * @type {number || null}
         */
        this.KibanaNodeCpuNum = null;

        /**
         * Kibana node memory in GB
         * @type {number || null}
         */
        this.KibanaNodeMemSize = null;

        /**
         * Kibana node disk type
         * @type {string || null}
         */
        this.KibanaNodeDiskType = null;

        /**
         * Kibana node disk size
         * @type {number || null}
         */
        this.KibanaNodeDiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KibanaNodeType = 'KibanaNodeType' in params ? params.KibanaNodeType : null;
        this.KibanaNodeNum = 'KibanaNodeNum' in params ? params.KibanaNodeNum : null;
        this.KibanaNodeCpuNum = 'KibanaNodeCpuNum' in params ? params.KibanaNodeCpuNum : null;
        this.KibanaNodeMemSize = 'KibanaNodeMemSize' in params ? params.KibanaNodeMemSize : null;
        this.KibanaNodeDiskType = 'KibanaNodeDiskType' in params ? params.KibanaNodeDiskType : null;
        this.KibanaNodeDiskSize = 'KibanaNodeDiskSize' in params ? params.KibanaNodeDiskSize : null;

    }
}

/**
 * ES cluster configuration item
 * @class
 */
class EsAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * kibana access blocklist
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * kibana access allowlist
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;

    }
}

/**
 * RestartNodes request structure.
 * @class
 */
class RestartNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node name list
         * @type {Array.<string> || null}
         */
        this.NodeNames = null;

        /**
         * Whether to perform forced reboot.
         * @type {boolean || null}
         */
        this.ForceRestart = null;

        /**
         * Optional restart mode. `in-place`: restart; `blue-green`: blue-green restart. Default value: `in-place`.
         * @type {string || null}
         */
        this.RestartMode = null;

        /**
         * Node status, for use in blue-green mode; offline node blue/green at risk
         * @type {boolean || null}
         */
        this.IsOffline = null;

        /**
         * cvm delay listing time
         * @type {number || null}
         */
        this.CvmDelayOnlineTime = null;

        /**
         * Number of concurrent shard migrations
         * @type {number || null}
         */
        this.ShardAllocationConcurrents = null;

        /**
         * Shard migration concurrency speed
         * @type {number || null}
         */
        this.ShardAllocationBytes = null;

        /**
         * Whether to enable the placement group asynchronous task
         * @type {boolean || null}
         */
        this.EnableScheduleRecoverGroup = null;

        /**
         * Time period of the async task for the placement group
         * @type {EnableScheduleOperationDuration || null}
         */
        this.EnableScheduleOperationDuration = null;

        /**
         * Event ID list.
         * @type {Array.<string> || null}
         */
        this.EventTypeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeNames = 'NodeNames' in params ? params.NodeNames : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;
        this.RestartMode = 'RestartMode' in params ? params.RestartMode : null;
        this.IsOffline = 'IsOffline' in params ? params.IsOffline : null;
        this.CvmDelayOnlineTime = 'CvmDelayOnlineTime' in params ? params.CvmDelayOnlineTime : null;
        this.ShardAllocationConcurrents = 'ShardAllocationConcurrents' in params ? params.ShardAllocationConcurrents : null;
        this.ShardAllocationBytes = 'ShardAllocationBytes' in params ? params.ShardAllocationBytes : null;
        this.EnableScheduleRecoverGroup = 'EnableScheduleRecoverGroup' in params ? params.EnableScheduleRecoverGroup : null;

        if (params.EnableScheduleOperationDuration) {
            let obj = new EnableScheduleOperationDuration();
            obj.deserialize(params.EnableScheduleOperationDuration)
            this.EnableScheduleOperationDuration = obj;
        }
        this.EventTypeIds = 'EventTypeIds' in params ? params.EventTypeIds : null;

    }
}

/**
 * RestartNodes response structure.
 * @class
 */
class RestartNodesResponse extends  AbstractModel {
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
 * UpgradeInstance request structure.
 * @class
 */
class UpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Target ES version. Valid values: "6.4.3", "6.8.2", "7.5.1", "7.10.1", and "7.14.2".
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * Whether to perform an upgrade check only. Default value: false.
         * @type {boolean || null}
         */
        this.CheckOnly = null;

        /**
         * Target business feature version: <li>oss open source edition</li><li>basic edition</li>Currently used only when upgrading from 5.6.4 to 6.x. Default value: basic
         * @type {string || null}
         */
        this.LicenseType = null;

        /**
         * Whether xpack security authentication is enabled for basic version 6.8 (and above versions)<li>1: not enabled</li><li>2: enabled</li>
         * @type {number || null}
         */
        this.BasicSecurityType = null;

        /**
         * Upgrade method: <li>scale blue-green change</li><li>restart rolling restart</li>Default value: scale
         * @type {string || null}
         */
        this.UpgradeMode = null;

        /**
         * Whether to back up the cluster before upgrading the version. By default, no backup is performed.
         * @type {boolean || null}
         */
        this.CosBackup = null;

        /**
         * In rolling mode, whether to skip the check and perform a forced reboot. Default value: false
         * @type {boolean || null}
         */
        this.SkipCheckForceRestart = null;

        /**
         * Parameter for delayed cvm launch
         * @type {number || null}
         */
        this.CvmDelayOnlineTime = null;

        /**
         * Number of concurrent shard migrations
         * @type {number || null}
         */
        this.ShardAllocationConcurrents = null;

        /**
         * Shard migration concurrency speed
         * @type {number || null}
         */
        this.ShardAllocationBytes = null;

        /**
         * Whether to enable the placement group asynchronous task
         * @type {boolean || null}
         */
        this.EnableScheduleRecoverGroup = null;

        /**
         * Time period of the async task for the placement group
         * @type {EnableScheduleOperationDuration || null}
         */
        this.EnableScheduleOperationDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.CheckOnly = 'CheckOnly' in params ? params.CheckOnly : null;
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.UpgradeMode = 'UpgradeMode' in params ? params.UpgradeMode : null;
        this.CosBackup = 'CosBackup' in params ? params.CosBackup : null;
        this.SkipCheckForceRestart = 'SkipCheckForceRestart' in params ? params.SkipCheckForceRestart : null;
        this.CvmDelayOnlineTime = 'CvmDelayOnlineTime' in params ? params.CvmDelayOnlineTime : null;
        this.ShardAllocationConcurrents = 'ShardAllocationConcurrents' in params ? params.ShardAllocationConcurrents : null;
        this.ShardAllocationBytes = 'ShardAllocationBytes' in params ? params.ShardAllocationBytes : null;
        this.EnableScheduleRecoverGroup = 'EnableScheduleRecoverGroup' in params ? params.EnableScheduleRecoverGroup : null;

        if (params.EnableScheduleOperationDuration) {
            let obj = new EnableScheduleOperationDuration();
            obj.deserialize(params.EnableScheduleOperationDuration)
            this.EnableScheduleOperationDuration = obj;
        }

    }
}

/**
 * DescribeViews response structure.
 * @class
 */
class DescribeViewsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster dimension view
         * @type {ClusterView || null}
         */
        this.ClusterView = null;

        /**
         * Node dimension view
         * @type {Array.<NodeView> || null}
         */
        this.NodesView = null;

        /**
         * Kibana dimensional view
         * @type {Array.<KibanaView> || null}
         */
        this.KibanasView = null;

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

        if (params.ClusterView) {
            let obj = new ClusterView();
            obj.deserialize(params.ClusterView)
            this.ClusterView = obj;
        }

        if (params.NodesView) {
            this.NodesView = new Array();
            for (let z in params.NodesView) {
                let obj = new NodeView();
                obj.deserialize(params.NodesView[z]);
                this.NodesView.push(obj);
            }
        }

        if (params.KibanasView) {
            this.KibanasView = new Array();
            for (let z in params.KibanasView) {
                let obj = new KibanaView();
                obj.deserialize(params.KibanasView[z]);
                this.KibanasView.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoBackUpCommonInfo response structure.
 * @class
 */
class ModifyAutoBackUpCommonInfoResponse extends  AbstractModel {
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
 * Optional web component information
 * @class
 */
class OptionalWebServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Status.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Public url
         * @type {string || null}
         */
        this.PublicUrl = null;

        /**
         * Private network url
         * @type {string || null}
         */
        this.PrivateUrl = null;

        /**
         * Public access permissions
         * @type {string || null}
         */
        this.PublicAccess = null;

        /**
         * Private network access permission
         * @type {string || null}
         */
        this.PrivateAccess = null;

        /**
         * Version
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Intranet vip of the web service
         * @type {string || null}
         */
        this.PrivateVip = null;

        /**
         * Custom url of cerebro on the private network
         * @type {string || null}
         */
        this.CustomPrivateUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PublicUrl = 'PublicUrl' in params ? params.PublicUrl : null;
        this.PrivateUrl = 'PrivateUrl' in params ? params.PrivateUrl : null;
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;
        this.PrivateAccess = 'PrivateAccess' in params ? params.PrivateAccess : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.PrivateVip = 'PrivateVip' in params ? params.PrivateVip : null;
        this.CustomPrivateUrl = 'CustomPrivateUrl' in params ? params.CustomPrivateUrl : null;

    }
}

module.exports = {
    TaskDetail: TaskDetail,
    OtherConfig: OtherConfig,
    DescribeInstanceOperationsRequest: DescribeInstanceOperationsRequest,
    OperationDetail: OperationDetail,
    EsPublicAcl: EsPublicAcl,
    DictInfo: DictInfo,
    CreateInstanceResponse: CreateInstanceResponse,
    DescribeInstanceLogsRequest: DescribeInstanceLogsRequest,
    ModifyAutoBackUpCommonInfoRequest: ModifyAutoBackUpCommonInfoRequest,
    KeyValue: KeyValue,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeInstanceLogsResponse: DescribeInstanceLogsResponse,
    UpdateIndexResponse: UpdateIndexResponse,
    DescribeInstanceOperationsResponse: DescribeInstanceOperationsResponse,
    AutoScaleDiskInfo: AutoScaleDiskInfo,
    UpdateRequestTargetNodeTypesResponse: UpdateRequestTargetNodeTypesResponse,
    IndexOptionsField: IndexOptionsField,
    SubTaskDetail: SubTaskDetail,
    GpuInfo: GpuInfo,
    EsConfigSetInfo: EsConfigSetInfo,
    GetRequestTargetNodeTypesResponse: GetRequestTargetNodeTypesResponse,
    Operation: Operation,
    InstanceLog: InstanceLog,
    NodeInfo: NodeInfo,
    DescribeAutoBackUpStrategyRequest: DescribeAutoBackUpStrategyRequest,
    DescribeIndexMetaResponse: DescribeIndexMetaResponse,
    ModifyAutoBackUpStrategyRequest: ModifyAutoBackUpStrategyRequest,
    KibanaView: KibanaView,
    IndexSettingsField: IndexSettingsField,
    UpdateRequestTargetNodeTypesRequest: UpdateRequestTargetNodeTypesRequest,
    CreateAutoBackUpStrategyRequest: CreateAutoBackUpStrategyRequest,
    DeleteInstanceResponse: DeleteInstanceResponse,
    CreateIndexRequest: CreateIndexRequest,
    UpdatePluginsRequest: UpdatePluginsRequest,
    UpgradeLicenseRequest: UpgradeLicenseRequest,
    UpdateInstanceResponse: UpdateInstanceResponse,
    DeleteIndexRequest: DeleteIndexRequest,
    DescribeViewsRequest: DescribeViewsRequest,
    ModifyAutoBackUpStrategyResponse: ModifyAutoBackUpStrategyResponse,
    DescribeIndexListResponse: DescribeIndexListResponse,
    ClusterView: ClusterView,
    CreateIndexResponse: CreateIndexResponse,
    DeleteAutoBackUpStrategyRequest: DeleteAutoBackUpStrategyRequest,
    UpgradeLicenseResponse: UpgradeLicenseResponse,
    RestartKibanaRequest: RestartKibanaRequest,
    DescribeAutoBackUpStrategyResponse: DescribeAutoBackUpStrategyResponse,
    UpdateDictionariesRequest: UpdateDictionariesRequest,
    CosBackup: CosBackup,
    DescribeIndexListRequest: DescribeIndexListRequest,
    OperationDuration: OperationDuration,
    OperationDurationUpdated: OperationDurationUpdated,
    CreateInstanceRequest: CreateInstanceRequest,
    UpdateDictionariesResponse: UpdateDictionariesResponse,
    ProcessDetail: ProcessDetail,
    DeleteIndexResponse: DeleteIndexResponse,
    UpdatePluginsResponse: UpdatePluginsResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    EsDictionaryInfo: EsDictionaryInfo,
    OutboundPublicAcl: OutboundPublicAcl,
    GetRequestTargetNodeTypesRequest: GetRequestTargetNodeTypesRequest,
    InstanceInfo: InstanceInfo,
    MasterNodeInfo: MasterNodeInfo,
    DeleteInstanceRequest: DeleteInstanceRequest,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    DeleteAutoBackUpStrategyResponse: DeleteAutoBackUpStrategyResponse,
    DescribeIndexMetaRequest: DescribeIndexMetaRequest,
    RestartKibanaResponse: RestartKibanaResponse,
    UpdateIndexRequest: UpdateIndexRequest,
    IndexMetaField: IndexMetaField,
    WebNodeTypeInfo: WebNodeTypeInfo,
    LocalDiskInfo: LocalDiskInfo,
    IndexPolicyField: IndexPolicyField,
    EnableScheduleOperationDuration: EnableScheduleOperationDuration,
    RestartInstanceResponse: RestartInstanceResponse,
    BackingIndexMetaField: BackingIndexMetaField,
    NodeView: NodeView,
    TagInfo: TagInfo,
    UpdateInstanceRequest: UpdateInstanceRequest,
    CreateAutoBackUpStrategyResponse: CreateAutoBackUpStrategyResponse,
    RestartInstanceRequest: RestartInstanceRequest,
    ZoneDetail: ZoneDetail,
    KibanaNodeInfo: KibanaNodeInfo,
    EsAcl: EsAcl,
    RestartNodesRequest: RestartNodesRequest,
    RestartNodesResponse: RestartNodesResponse,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    DescribeViewsResponse: DescribeViewsResponse,
    ModifyAutoBackUpCommonInfoResponse: ModifyAutoBackUpCommonInfoResponse,
    OptionalWebServiceInfo: OptionalWebServiceInfo,

}
