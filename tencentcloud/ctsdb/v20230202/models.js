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
 * Tag.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * Instance network information (influxdb).
 * @class
 */
class Network extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc id
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * vpc subnet id
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC IP address.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VIP = null;

        /**
         * VPC port address.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VIP = 'VIP' in params ? params.VIP : null;
        this.Port = 'Port' in params ? params.Port : null;

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
         * Current page number.		
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Page size.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Query parameter: Filtering and querying by instance ID (cluster_id) and instance name (name) are supported.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Sorting parameter: Sorting by the creation time field (created_at) is supported. The value of Type can be set to DESC (descending order) or ASC (ascending order).
         * @type {Array.<Order> || null}
         */
        this.Orders = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Orders) {
            this.Orders = new Array();
            for (let z in params.Orders) {
                let obj = new Order();
                obj.deserialize(params.Orders[z]);
                this.Orders.push(obj);
            }
        }

    }
}

/**
 * Database-related information.
 * @class
 */
class Database extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * Database name.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Cold storage time (days).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CoolDownInDays = null;

        /**
         * Data retention time (days).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RetentionInDays = null;

        /**
         * Remarks.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Status. 0: initializing resources; 1: creating resources; 2: normal status; 3: deleting resources; 4: deleted resources; 5: disabling resources; 6: disabled resources; 7: abnormal resources, and manual operation is required.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Last modification time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CoolDownInDays = 'CoolDownInDays' in params ? params.CoolDownInDays : null;
        this.RetentionInDays = 'RetentionInDays' in params ? params.RetentionInDays : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

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
         * Database list.
         * @type {Array.<Database> || null}
         */
        this.Databases = null;

        /**
         * Quantity.
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
 * Validity period.
 * @class
 */
class Period extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time.

Note: This field may return null, indicating that no valid values can be obtained.
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * Database parameter.
         * @type {Database || null}
         */
        this.Database = null;

        /**
         * Pagination size.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Pagination page.
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Database) {
            let obj = new Database();
            obj.deserialize(params.Database)
            this.Database = obj;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * Instance specification information (influxdb).
 * @class
 */
class Spec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1: yearly/monthly subscription; 2: bill by hour.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Request unit. 0 indicates following the resource configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RequestUnit = null;

        /**
         * Maximum number of CPU cores.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CpuLimit = null;

        /**
         * Maximum memory size (Gi).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MemoryLimit = null;

        /**
         * Maximum number of disks (Gi).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskLimit = null;

        /**
         * Number of business shards.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Shards = null;

        /**
         * Number of business nodes.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Replicas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.RequestUnit = 'RequestUnit' in params ? params.RequestUnit : null;
        this.CpuLimit = 'CpuLimit' in params ? params.CpuLimit : null;
        this.MemoryLimit = 'MemoryLimit' in params ? params.MemoryLimit : null;
        this.DiskLimit = 'DiskLimit' in params ? params.DiskLimit : null;
        this.Shards = 'Shards' in params ? params.Shards : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

    }
}

/**
 * Query filter.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter parameter.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter expression.
         * @type {string || null}
         */
        this.Op = null;

        /**
         * Value involved in filtering.
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
        this.Op = 'Op' in params ? params.Op : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Instance-related information.
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * User APP ID.

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppID = null;

        /**
         * Instance ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * Account ID.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountID = null;

        /**
         * Customizes the instance name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Region.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Availability zone.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zones = null;

        /**
         * Network information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Network> || null}
         */
        this.Networks = null;

        /**
         * Instance specification.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Spec || null}
         */
        this.Spec = null;

        /**
         * Instance status. 0: running; 1: creating; 16: adjusting configuration; 17: isolating; 18: to be terminated; 19: recovering; 20: shutting down; 21: terminating; 22: terminated.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance validity period.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Period || null}
         */
        this.Period = null;

        /**
         * Creation time.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * Last modification time.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * Internal features of the product.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Tenant || null}
         */
        this.Tenant = null;

        /**
         * Tag.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Security group information.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Security = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppID = 'AppID' in params ? params.AppID : null;
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.AccountID = 'AccountID' in params ? params.AccountID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zones = 'Zones' in params ? params.Zones : null;

        if (params.Networks) {
            this.Networks = new Array();
            for (let z in params.Networks) {
                let obj = new Network();
                obj.deserialize(params.Networks[z]);
                this.Networks.push(obj);
            }
        }

        if (params.Spec) {
            let obj = new Spec();
            obj.deserialize(params.Spec)
            this.Spec = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Period) {
            let obj = new Period();
            obj.deserialize(params.Period)
            this.Period = obj;
        }
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

        if (params.Tenant) {
            let obj = new Tenant();
            obj.deserialize(params.Tenant)
            this.Tenant = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Security = 'Security' in params ? params.Security : null;

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
         * Total number of records under current conditions.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instances meeting the conditions.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Cluster> || null}
         */
        this.Clusters = null;

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

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new Cluster();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sorting parameter, which is used for sorting the query results.
 * @class
 */
class Order extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sorting field.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sorting method.
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Internal features of the product.
 * @class
 */
class Tenant extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the password is encrypted.
         * @type {boolean || null}
         */
        this.IsPasswordEncrypted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsPasswordEncrypted = 'IsPasswordEncrypted' in params ? params.IsPasswordEncrypted : null;

    }
}

module.exports = {
    Tag: Tag,
    Network: Network,
    DescribeClustersRequest: DescribeClustersRequest,
    Database: Database,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    Period: Period,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    Spec: Spec,
    Filter: Filter,
    Cluster: Cluster,
    DescribeClustersResponse: DescribeClustersResponse,
    Order: Order,
    Tenant: Tenant,

}
