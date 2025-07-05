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
 * Migration destination information
 * @class
 */
class DstInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration destination region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Migration destination port
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Migration destination instance ID
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
        this.Region = 'Region' in params ? params.Region : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Migration source information
 * @class
 */
class SrcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration source region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Migration source port
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Migration source instance ID
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
        this.Region = 'Region' in params ? params.Region : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeMigrationTask request structure.
 * @class
 */
class DescribeMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, such as msp-jitoh33n
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
 * Time object
 * @class
 */
class TimeObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * The creation time
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyMigrationTaskBelongToProject request structure.
 * @class
 */
class ModifyMigrationTaskBelongToProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, such as msp-jitoh33n
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Project ID, such as 10005
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * Migration details list
 * @class
 */
class TaskStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Migration progress
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * Migration date
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyMigrationTaskStatus response structure.
 * @class
 */
class ModifyMigrationTaskStatusResponse extends  AbstractModel {
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
 * ListMigrationTask request structure.
 * @class
 */
class ListMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The initial number of records, default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of records, default value: 10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Project ID, the default value is empty.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DeregisterMigrationTask response structure.
 * @class
 */
class DeregisterMigrationTaskResponse extends  AbstractModel {
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
 * List type
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
         * Project name
         * @type {string || null}
         */
        this.ProjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * ModifyMigrationTaskBelongToProject response structure.
 * @class
 */
class ModifyMigrationTaskBelongToProjectResponse extends  AbstractModel {
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
 * ListMigrationProject response structure.
 * @class
 */
class ListMigrationProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project list
         * @type {Array.<Project> || null}
         */
        this.Projects = null;

        /**
         * Total number of projects
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

        if (params.Projects) {
            this.Projects = new Array();
            for (let z in params.Projects) {
                let obj = new Project();
                obj.deserialize(params.Projects[z]);
                this.Projects.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Migration task type
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Migration type
         * @type {string || null}
         */
        this.MigrationType = null;

        /**
         * Migration status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Project name
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Migration source information
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Migration time information
         * @type {TimeObj || null}
         */
        this.MigrationTimeLine = null;

        /**
         * Status update time
         * @type {string || null}
         */
        this.Updated = null;

        /**
         * Migration destination information
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.MigrationType = 'MigrationType' in params ? params.MigrationType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.MigrationTimeLine) {
            let obj = new TimeObj();
            obj.deserialize(params.MigrationTimeLine)
            this.MigrationTimeLine = obj;
        }
        this.Updated = 'Updated' in params ? params.Updated : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

    }
}

/**
 * RegisterMigrationTask response structure.
 * @class
 */
class RegisterMigrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * ModifyMigrationTaskStatus request structure.
 * @class
 */
class ModifyMigrationTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status, valid values include `unstart` (migration has not started), `migrating` (migration in progress), `finish` (migration completed) or `fail` (migration failed).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task ID, such as msp-jitoh33n
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
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ListMigrationProject request structure.
 * @class
 */
class ListMigrationProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The initial number of records, default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of records returned, default value: 500
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeregisterMigrationTask request structure.
 * @class
 */
class DeregisterMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * ListMigrationTask response structure.
 * @class
 */
class ListMigrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Migration task list
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrationTask response structure.
 * @class
 */
class DescribeMigrationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Migration details list
         * @type {Array.<TaskStatus> || null}
         */
        this.TaskStatus = null;

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

        if (params.TaskStatus) {
            this.TaskStatus = new Array();
            for (let z in params.TaskStatus) {
                let obj = new TaskStatus();
                obj.deserialize(params.TaskStatus[z]);
                this.TaskStatus.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterMigrationTask request structure.
 * @class
 */
class RegisterMigrationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type, valid values include `database` (database migration), `file` (file migration) or `host` (host migration).
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Service supplier name
         * @type {string || null}
         */
        this.ServiceSupplier = null;

        /**
         * Migration task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Migration task update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Migration type, for example `mysql:mysql` in database migration means migration from mysql to mysql and `oss:cos` in file migration means migration from Alibaba Cloud OSS to Tencent COS.
         * @type {string || null}
         */
        this.MigrateClass = null;

        /**
         * Migration task source information
         * @type {SrcInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Migration task destination information
         * @type {DstInfo || null}
         */
        this.DstInfo = null;

        /**
         * Source instance access type. Valid values for database migration include `extranet` (public network), `cvm` (CVM-created instance), `dcg` (Direct Connect-enabled instance), `vpncloud` (Tencent Cloud VPN-enabled instance), `vpnselfbuild` (self-built VPN-enabled instance), `cdb` (TencentDB instance)
         * @type {string || null}
         */
        this.SrcAccessType = null;

        /**
         * Database type of the source instance. Valid values for database migration: `mysql`, `redis`, `percona`, `mongodb`, `postgresql`, `sqlserver`, `mariadb`
         * @type {string || null}
         */
        this.SrcDatabaseType = null;

        /**
         * Target instance access type. Valid values for database migration include `extranet` (public network), `cvm` (CVM-created instance), `dcg` (Direct Connect-enabled instance), `vpncloud` (Tencent Cloud VPN-enabled instance), `vpnselfbuild` (self-built VPN-enabled instance), `cdb` (TencentDB instance)
         * @type {string || null}
         */
        this.DstAccessType = null;

        /**
         * Database type of the target instance. Valid values for database migration: `mysql`, `redis`, `percona`, `mongodb`, `postgresql`, `sqlserver`, `mariadb`
         * @type {string || null}
         */
        this.DstDatabaseType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ServiceSupplier = 'ServiceSupplier' in params ? params.ServiceSupplier : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MigrateClass = 'MigrateClass' in params ? params.MigrateClass : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;

    }
}

module.exports = {
    DstInfo: DstInfo,
    SrcInfo: SrcInfo,
    DescribeMigrationTaskRequest: DescribeMigrationTaskRequest,
    TimeObj: TimeObj,
    ModifyMigrationTaskBelongToProjectRequest: ModifyMigrationTaskBelongToProjectRequest,
    TaskStatus: TaskStatus,
    ModifyMigrationTaskStatusResponse: ModifyMigrationTaskStatusResponse,
    ListMigrationTaskRequest: ListMigrationTaskRequest,
    DeregisterMigrationTaskResponse: DeregisterMigrationTaskResponse,
    Project: Project,
    ModifyMigrationTaskBelongToProjectResponse: ModifyMigrationTaskBelongToProjectResponse,
    ListMigrationProjectResponse: ListMigrationProjectResponse,
    Task: Task,
    RegisterMigrationTaskResponse: RegisterMigrationTaskResponse,
    ModifyMigrationTaskStatusRequest: ModifyMigrationTaskStatusRequest,
    ListMigrationProjectRequest: ListMigrationProjectRequest,
    DeregisterMigrationTaskRequest: DeregisterMigrationTaskRequest,
    ListMigrationTaskResponse: ListMigrationTaskResponse,
    DescribeMigrationTaskResponse: DescribeMigrationTaskResponse,
    RegisterMigrationTaskRequest: RegisterMigrationTaskRequest,

}
