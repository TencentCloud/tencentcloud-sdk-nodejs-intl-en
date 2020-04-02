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
 * DeleteCluster request structure.
 * @class
 */
class DeleteClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Policy used to delete an instance in the cluster: terminate (terminates the instance. Only available for instances on pay-as-you-go CVMs); retain (only removes it from the cluster. The instance will be retained.)
         * @type {string || null}
         */
        this.InstanceDeleteMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceDeleteMode = 'InstanceDeleteMode' in params ? params.InstanceDeleteMode : null;

    }
}

/**
 * CreateClusterEndpointVip response structure.
 * @class
 */
class CreateClusterEndpointVipResponse extends  AbstractModel {
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
 * DescribeExistedInstances response structure.
 * @class
 */
class DescribeExistedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of existing instance information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ExistedInstance> || null}
         */
        this.ExistedInstanceSet = null;

        /**
         * Number of instances that match the filter condition(s).
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

        if (params.ExistedInstanceSet) {
            this.ExistedInstanceSet = new Array();
            for (let z in params.ExistedInstanceSet) {
                let obj = new ExistedInstance();
                obj.deserialize(params.ExistedInstanceSet[z]);
                this.ExistedInstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterRoutes response structure.
 * @class
 */
class DescribeClusterRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances that match the filter condition(s).
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Object of cluster route.
         * @type {Array.<RouteInfo> || null}
         */
        this.RouteSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new RouteInfo();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterSecurity request structure.
 * @class
 */
class DescribeClusterSecurityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID. Enter the ClusterId field returned by the DescribeClusters API
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
 * DescribeClusterEndpointVipStatus request structure.
 * @class
 */
class DescribeClusterEndpointVipStatusRequest extends  AbstractModel {
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
 * CreateClusterEndpoint request structure.
 * @class
 */
class CreateClusterEndpointRequest extends  AbstractModel {
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
 * Describes the configuration of enhanced services, such as Cloud Security and Cloud Monitor.
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enables cloud security service. If this parameter is not specified, the cloud security service will be enabled by default.
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * Enables cloud monitor service. If this parameter is not specified, the cloud monitor service will be enabled by default.
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

    }
}

/**
 * k8s tags, generally exist as an array
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 
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
 * Describes login settings of an instance.
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Login password of the instance. The password requirements vary among different operating systems: <br><li>For Linux instances, the password must be 8-30 characters long and contain at least two of the following types: [a-z], [A-Z], [0-9] and [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]. <br><li>For Windows instances, the password must be 12-30 characters long and contain at least three of the following categories: [a-z], [A-Z], [0-9] and [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]. <br><br>If this parameter is not specified, a random password will be generated and sent to you via the Message Center.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * List of key IDs. After an instance is associated with a key, you can access the instance with the private key in the key pair. You can call [`DescribeKeyPairs`](https://cloud.tencent.com/document/api/213/15699) to obtain `KeyId`. A key and password cannot be specified at the same time. Windows instances do not support keys. Currently, you can only specify one key when purchasing an instance.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Whether to keep the original settings of an image. You cannot specify this parameter and `Password` or `KeyIds.N` at the same time. You can specify this parameter as `TRUE` only when you create an instance using a custom image, a shared image, or an imported image. Valid values: <br><li>TRUE: keep the login settings of the image <br><li>FALSE: do not keep the login settings of the image <br><br>Default value: FALSE.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.KeepImageLogin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null;

    }
}

/**
 * DeleteClusterRoute response structure.
 * @class
 */
class DeleteClusterRouteResponse extends  AbstractModel {
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
 * AddExistedInstances request structure.
 * @class
 */
class AddExistedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Instance list
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Additional parameter to be set for the instance
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Enhanced services. This parameter is used to specify whether to enable Cloud Security, Cloud Monitoring and other services. If this parameter is not specified, Cloud Monitor and Cloud Security are enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Node login information (currently only supports using Password or single KeyIds)
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Security group to which the instance belongs. This parameter can be obtained from the `sgId` field returned by DescribeSecurityGroups. If this parameter is not specified, the default security group is bound. (Currently, you can only set a single sgId)
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * DescribeClusterEndpointStatus request structure.
 * @class
 */
class DescribeClusterEndpointStatusRequest extends  AbstractModel {
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
 * DescribeClusterEndpointVipStatus response structure.
 * @class
 */
class DescribeClusterEndpointVipStatusResponse extends  AbstractModel {
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
 * DescribeClusterSecurity response structure.
 * @class
 */
class DescribeClusterSecurityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster’s account name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Cluster’s password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Cluster’s access CA certificate
         * @type {string || null}
         */
        this.CertificationAuthority = null;

        /**
         * Cluster’s access address
         * @type {string || null}
         */
        this.ClusterExternalEndpoint = null;

        /**
         * Domain name accessed by the cluster
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Cluster’s endpoint address
         * @type {string || null}
         */
        this.PgwEndpoint = null;

        /**
         * Cluster’s access policy group
         * @type {Array.<string> || null}
         */
        this.SecurityPolicy = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.CertificationAuthority = 'CertificationAuthority' in params ? params.CertificationAuthority : null;
        this.ClusterExternalEndpoint = 'ClusterExternalEndpoint' in params ? params.ClusterExternalEndpoint : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.PgwEndpoint = 'PgwEndpoint' in params ? params.PgwEndpoint : null;
        this.SecurityPolicy = 'SecurityPolicy' in params ? params.SecurityPolicy : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterInstances response structure.
 * @class
 */
class DescribeClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of instances in the cluster
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instances in the cluster
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateClusterAsGroup request structure.
 * @class
 */
class CreateClusterAsGroupRequest extends  AbstractModel {
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
 * DescribeClusterRouteTables request structure.
 * @class
 */
class DescribeClusterRouteTablesRequest extends  AbstractModel {
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
 * CreateClusterRouteTable response structure.
 * @class
 */
class CreateClusterRouteTableResponse extends  AbstractModel {
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
 * Configuration parameters of existing nodes in different roles
 * @class
 */
class ExistedInstancesForNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node role. Values: MASTER_ETCD, WORKER. You only need to specify MASTER_ETCD when creating a self-deployed cluster (INDEPENDENT_CLUSTER).
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * Reinstallation parameter of existing instances
         * @type {ExistedInstancesPara || null}
         */
        this.ExistedInstancesPara = null;

        /**
         * Advanced node setting, which overrides the InstanceAdvancedSettings item set at the cluster level (currently valid for the ExtraArgs node custom parameter only)
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettingsOverride = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;

        if (params.ExistedInstancesPara) {
            let obj = new ExistedInstancesPara();
            obj.deserialize(params.ExistedInstancesPara)
            this.ExistedInstancesPara = obj;
        }

        if (params.InstanceAdvancedSettingsOverride) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettingsOverride)
            this.InstanceAdvancedSettingsOverride = obj;
        }

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
 * DescribeClusterRoutes request structure.
 * @class
 */
class DescribeClusterRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * DeleteClusterRouteTable request structure.
 * @class
 */
class DeleteClusterRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name
         * @type {string || null}
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * DeleteClusterRoute request structure.
 * @class
 */
class DeleteClusterRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Next hop address.
         * @type {string || null}
         */
        this.GatewayIp = null;

        /**
         * Destination CIDR.
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.GatewayIp = 'GatewayIp' in params ? params.GatewayIp : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;

    }
}

/**
 * Describes the basic configuration information of a cluster
 * @class
 */
class ClusterBasicSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster operating system. CentOS 7.2x86_64 or Ubuntu 16.04.1 LTSx86_64. Default value: Ubuntu 16.04.1 LTSx86_64
         * @type {string || null}
         */
        this.ClusterOs = null;

        /**
         * Cluster version. The default value is 1.10.5.
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster description
         * @type {string || null}
         */
        this.ClusterDescription = null;

        /**
         * VPC ID, in the format of vpc-xxx, which is required when you create an empty managed cluster.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of the project to which the new resources in the cluster belong.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * 
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * 
         * @type {boolean || null}
         */
        this.NeedWorkSecurityGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterOs = 'ClusterOs' in params ? params.ClusterOs : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDescription = 'ClusterDescription' in params ? params.ClusterDescription : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;
        this.NeedWorkSecurityGroup = 'NeedWorkSecurityGroup' in params ? params.NeedWorkSecurityGroup : null;

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
         * Container networking configuration information for the cluster
         * @type {ClusterCIDRSettings || null}
         */
        this.ClusterCIDRSettings = null;

        /**
         * Cluster type. Managed cluster: MANAGED_CLUSTER; self-deployed cluster: INDEPENDENT_CLUSTER.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Pass-through parameter for CVM creation in the format of a JSON string. For more information, see the API for [creating a CVM instance](https://cloud.tencent.com/document/product/213/15730).
         * @type {Array.<RunInstancesForNode> || null}
         */
        this.RunInstancesForNode = null;

        /**
         * Basic configuration information of the cluster
         * @type {ClusterBasicSettings || null}
         */
        this.ClusterBasicSettings = null;

        /**
         * Advanced configuration information of the cluster
         * @type {ClusterAdvancedSettings || null}
         */
        this.ClusterAdvancedSettings = null;

        /**
         * Advanced configuration information of the node
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Configuration information of an existing instance
         * @type {Array.<ExistedInstancesForNode> || null}
         */
        this.ExistedInstancesForNode = null;

        /**
         * CVM type and the corresponding data disk mounting configuration information.
         * @type {Array.<InstanceDataDiskMountSetting> || null}
         */
        this.InstanceDataDiskMountSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterCIDRSettings) {
            let obj = new ClusterCIDRSettings();
            obj.deserialize(params.ClusterCIDRSettings)
            this.ClusterCIDRSettings = obj;
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

        if (params.RunInstancesForNode) {
            this.RunInstancesForNode = new Array();
            for (let z in params.RunInstancesForNode) {
                let obj = new RunInstancesForNode();
                obj.deserialize(params.RunInstancesForNode[z]);
                this.RunInstancesForNode.push(obj);
            }
        }

        if (params.ClusterBasicSettings) {
            let obj = new ClusterBasicSettings();
            obj.deserialize(params.ClusterBasicSettings)
            this.ClusterBasicSettings = obj;
        }

        if (params.ClusterAdvancedSettings) {
            let obj = new ClusterAdvancedSettings();
            obj.deserialize(params.ClusterAdvancedSettings)
            this.ClusterAdvancedSettings = obj;
        }

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.ExistedInstancesForNode) {
            this.ExistedInstancesForNode = new Array();
            for (let z in params.ExistedInstancesForNode) {
                let obj = new ExistedInstancesForNode();
                obj.deserialize(params.ExistedInstancesForNode[z]);
                this.ExistedInstancesForNode.push(obj);
            }
        }

        if (params.InstanceDataDiskMountSettings) {
            this.InstanceDataDiskMountSettings = new Array();
            for (let z in params.InstanceDataDiskMountSettings) {
                let obj = new InstanceDataDiskMountSetting();
                obj.deserialize(params.InstanceDataDiskMountSettings[z]);
                this.InstanceDataDiskMountSettings.push(obj);
            }
        }

    }
}

/**
 * DeleteClusterInstances request structure.
 * @class
 */
class DeleteClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * List of Instance IDs
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Policy used to delete an instance in the cluster: `terminate` (terminates the instance. Only available for pay-as-you-go CVMs); `retain` (only removes it from the cluster. The instance will be retained.)
         * @type {string || null}
         */
        this.InstanceDeleteMode = null;

        /**
         * 
         * @type {boolean || null}
         */
        this.ForceDelete = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceDeleteMode = 'InstanceDeleteMode' in params ? params.InstanceDeleteMode : null;
        this.ForceDelete = 'ForceDelete' in params ? params.ForceDelete : null;

    }
}

/**
 * CreateClusterInstances request structure.
 * @class
 */
class CreateClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID. Enter the ClusterId field returned by the DescribeClusters API
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Pass-through parameter for CVM creation in the format of a JSON string. For more information, see the [RunInstances](https://cloud.tencent.com/document/product/213/15730) API.
         * @type {string || null}
         */
        this.RunInstancePara = null;

        /**
         * Additional parameter to be set for the instance
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RunInstancePara = 'RunInstancePara' in params ? params.RunInstancePara : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

    }
}

/**
 * CreateClusterAsGroup response structure.
 * @class
 */
class CreateClusterAsGroupResponse extends  AbstractModel {
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
 * DeleteClusterInstances response structure.
 * @class
 */
class DeleteClusterInstancesResponse extends  AbstractModel {
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
 * CreateClusterRouteTable request structure.
 * @class
 */
class CreateClusterRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Route table CIDR
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * VPC bound to the route table
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Whether to ignore CIDR conflicts
         * @type {number || null}
         */
        this.IgnoreClusterCidrConflict = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.IgnoreClusterCidrConflict = 'IgnoreClusterCidrConflict' in params ? params.IgnoreClusterCidrConflict : null;

    }
}

/**
 * DeleteClusterEndpoint response structure.
 * @class
 */
class DeleteClusterEndpointResponse extends  AbstractModel {
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
 * Object of route table conflict
 * @class
 */
class RouteTableConflict extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table type.
         * @type {string || null}
         */
        this.RouteTableType = null;

        /**
         * Route table CIDR.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * Route table name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Route table ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableType = 'RouteTableType' in params ? params.RouteTableType : null;
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * DeleteClusterAsGroups response structure.
 * @class
 */
class DeleteClusterAsGroupsResponse extends  AbstractModel {
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
 * Object of cluster route table
 * @class
 */
class RouteTableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Route table CIDR.
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * VPC instance ID.
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
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * List of tag descriptions. By specifying this parameter, you can bind tags to corresponding resource instances at the same time. Currently, only tags are bound to cloud host instances.
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

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
 * DeleteClusterEndpointVip response structure.
 * @class
 */
class DeleteClusterEndpointVipResponse extends  AbstractModel {
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
 * DescribeClusterInstances request structure.
 * @class
 */
class DescribeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * List of instance IDs to be obtained. This parameter is empty by default, which indicates that all instances in the cluster will be pulled.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 
         * @type {string || null}
         */
        this.InstanceRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

    }
}

/**
 * Container networking parameters for the cluster
 * @class
 */
class ClusterCIDRSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * CIDR used to assign container and service IPs for the cluster. It cannot conflict with the VPC’s CIDR or the CIDRs of other clusters in the same VPC
         * @type {string || null}
         */
        this.ClusterCIDR = null;

        /**
         * Whether to ignore ClusterCIDR conflict errors, which are not ignored by default
         * @type {boolean || null}
         */
        this.IgnoreClusterCIDRConflict = null;

        /**
         * Maximum number of pods on each node in the cluster
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * Maximum number of cluster services
         * @type {number || null}
         */
        this.MaxClusterServiceNum = null;

        /**
         * The CIDR block used to assign cluster service IP addresses. It must conflict with neither the VPC CIDR block nor with CIDR blocks of other clusters in the same VPC instance. The IP range must be within the private network IP range, such as 10.1.0.0/14, 192.168.0.1/18, and 172.16.0.0/16.
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * Subnet ID of the ENI in VPC-CNI network mode
         * @type {Array.<string> || null}
         */
        this.EniSubnetIds = null;

        /**
         * Repossession time of ENI IP addresses in VPC-CNI network mode, whose range is [300,15768000)
         * @type {number || null}
         */
        this.ClaimExpiredSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterCIDR = 'ClusterCIDR' in params ? params.ClusterCIDR : null;
        this.IgnoreClusterCIDRConflict = 'IgnoreClusterCIDRConflict' in params ? params.IgnoreClusterCIDRConflict : null;
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;
        this.MaxClusterServiceNum = 'MaxClusterServiceNum' in params ? params.MaxClusterServiceNum : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.EniSubnetIds = 'EniSubnetIds' in params ? params.EniSubnetIds : null;
        this.ClaimExpiredSeconds = 'ClaimExpiredSeconds' in params ? params.ClaimExpiredSeconds : null;

    }
}

/**
 * Describes K8s cluster configuration and related information.
 * @class
 */
class InstanceAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data disk mount point. By default, no data disk is mounted. Data disks in ext3, ext4, or XFS file system formats will be mounted directly, while data disks in other file systems and unformatted data disks will automatically be formatted as ext4 and then mounted. Please back up your data in advance. This setting is only applicable to CVMs with a single data disk.
         * @type {string || null}
         */
        this.MountTarget = null;

        /**
         * Specified value of dockerd --graph. Default value: /var/lib/docker
         * @type {string || null}
         */
        this.DockerGraphPath = null;

        /**
         * Base64-encoded user script, which will be executed after the K8s component starts running. You need to ensure the reentrant and retry logic of the script. The script and its log files can be viewed at the node path: /data/ccs_userscript/. If you want to initialize nodes before adding them to the scheduling list, you can use this parameter together with the unschedulable parameter. After the final initialization of userScript is completed, add the kubectl uncordon nodename --kubeconfig=/root/.kube/config command to enable the node for scheduling.
         * @type {string || null}
         */
        this.UserScript = null;

        /**
         * Sets whether the added node is schedulable. 0 (default): schedulable; other values: unschedulable. After node initialization is completed, you can run kubectl uncordon nodename to enable this node for scheduling.
         * @type {number || null}
         */
        this.Unschedulable = null;

        /**
         * 
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Information about node custom parameters
         * @type {InstanceExtraArgs || null}
         */
        this.ExtraArgs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountTarget = 'MountTarget' in params ? params.MountTarget : null;
        this.DockerGraphPath = 'DockerGraphPath' in params ? params.DockerGraphPath : null;
        this.UserScript = 'UserScript' in params ? params.UserScript : null;
        this.Unschedulable = 'Unschedulable' in params ? params.Unschedulable : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.ExtraArgs) {
            let obj = new InstanceExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }

    }
}

/**
 * ModifyClusterEndpointSP response structure.
 * @class
 */
class ModifyClusterEndpointSPResponse extends  AbstractModel {
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
 * DescribeClusterRouteTables response structure.
 * @class
 */
class DescribeClusterRouteTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances that match the filter condition(s).
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Object of cluster route table.
         * @type {Array.<RouteTableInfo> || null}
         */
        this.RouteTableSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTableInfo();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRouteTableConflicts request structure.
 * @class
 */
class DescribeRouteTableConflictsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table CIDR
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * VPC bound to the route table
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
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * Node configuration parameters of different roles
 * @class
 */
class RunInstancesForNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node role. Values: MASTER_ETCD, WORKER. You only need to specify MASTER_ETCD when creating a self-deployed cluster (INDEPENDENT_CLUSTER).
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * Pass-through parameter for CVM creation in the format of a JSON string. For more information, see the API for [creating a CVM instance](https://cloud.tencent.com/document/product/213/15730). Pass any parameter other than common parameters. ImageId will be replaced with the image corresponding to the TKE cluster operating system.
         * @type {Array.<string> || null}
         */
        this.RunInstancesPara = null;

        /**
         * An advanced node setting. This parameter overrides the InstanceAdvancedSettings item set at the cluster level and corresponds to RunInstancesPara in a one-to-one sequential manner (currently valid for the ExtraArgs node custom parameter only).
         * @type {Array.<InstanceAdvancedSettings> || null}
         */
        this.InstanceAdvancedSettingsOverrides = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.RunInstancesPara = 'RunInstancesPara' in params ? params.RunInstancesPara : null;

        if (params.InstanceAdvancedSettingsOverrides) {
            this.InstanceAdvancedSettingsOverrides = new Array();
            for (let z in params.InstanceAdvancedSettingsOverrides) {
                let obj = new InstanceAdvancedSettings();
                obj.deserialize(params.InstanceAdvancedSettingsOverrides[z]);
                this.InstanceAdvancedSettingsOverrides.push(obj);
            }
        }

    }
}

/**
 * CreateClusterEndpointVip request structure.
 * @class
 */
class CreateClusterEndpointVipRequest extends  AbstractModel {
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
 * Reinstallation parameter of existing instances
 * @class
 */
class ExistedInstancesPara extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Additional parameter to be set for the instance
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Enhanced services. This parameter is used to specify whether to enable Cloud Security, Cloud Monitor and other services. If this parameter is not specified, Cloud Monitor and Cloud Security are enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Node login information (currently only supports using Password or single KeyIds)
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Security group to which the instance belongs. This parameter can be obtained from the sgId field in the returned values of DescribeSecurityGroups. If this parameter is not specified, the default security group is bound. (Currently, you can only set a single sgId)
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * DeleteClusterAsGroups request structure.
 * @class
 */
class DeleteClusterAsGroupsRequest extends  AbstractModel {
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
 * DescribeExistedInstances request structure.
 * @class
 */
class DescribeExistedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID. Enter the `ClusterId` field returned when you call the DescribeClusters API (Only VPC ID obtained through `ClusterId` need filtering conditions. When comparing statuses, the nodes on all clusters in this region will be used for comparison. You cannot specify `InstanceIds` and `ClusterId` at the same time.)
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Query by one or more instance ID(s). Instance ID format: ins-xxxxxxxx. (Refer to section ID.N of the API overview for this parameter’s specific format.) Up to 100 instances are allowed for each request. You cannot specify InstanceIds and Filters at the same time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Filter condition. For fields and other information, see [the DescribeInstances API](https://cloud.tencent.com/document/api/213/15728). If a ClusterId has been set, then the cluster’s VPC ID will be attached as a query field. In this situation, if a "vpc-id" is specified in Filter, then the specified VPC ID must be consistent with the cluster’s VPC ID.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Filter by instance IP (Supports both private and public IPs)
         * @type {string || null}
         */
        this.VagueIpAddress = null;

        /**
         * Filter by instance name
         * @type {string || null}
         */
        this.VagueInstanceName = null;

        /**
         * Offset. Default value: 0. For more information on Offset, see the relevant section in the API [Introduction](https://cloud.tencent.com/document/api/213/15688).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100. For more information on Limit, see the relevant section in the API [Introduction](https://cloud.tencent.com/document/api/213/15688).
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.VagueIpAddress = 'VagueIpAddress' in params ? params.VagueIpAddress : null;
        this.VagueInstanceName = 'VagueInstanceName' in params ? params.VagueInstanceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Information of existing instances
 * @class
 */
class ExistedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the instance supports being added to the cluster (TRUE: support; FALSE: not support).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Usable = null;

        /**
         * Reason that the instance does not support being added.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UnusableReason = null;

        /**
         * ID of the cluster in which the instance currently resides.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AlreadyInCluster = null;

        /**
         * Instance ID, in the format of ins-xxxxxxxx.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * List of private IPs of the instance’s primary ENI.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * List of public IPs of the instance’s primary ENI.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * Creation time, which follows the ISO8601 standard and uses UTC time. Format: YYYY-MM-DDThh:mm:ssZ.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Instance’s billing mode. Value range:
PREPAID: Prepaid (Monthly Subscription)
POSTPAID_BY_HOUR: Postpaid (Pay-as-you-go)
CDHPAID: CDH-paid. Only CDH is charged and instances on the CDH do not incur fees.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Instance’s number of CPU cores. Unit: cores.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Instance’s memory capacity. Unit: GB.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Operating system name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * Instance model.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.Usable = 'Usable' in params ? params.Usable : null;
        this.UnusableReason = 'UnusableReason' in params ? params.UnusableReason : null;
        this.AlreadyInCluster = 'AlreadyInCluster' in params ? params.AlreadyInCluster : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * Node custom parameter
 * @class
 */
class InstanceExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * Kubelet custom parameter
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.Kubelet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kubelet = 'Kubelet' in params ? params.Kubelet : null;

    }
}

/**
 * ModifyClusterEndpointSP request structure.
 * @class
 */
class ModifyClusterEndpointSPRequest extends  AbstractModel {
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
 * DescribeRouteTableConflicts response structure.
 * @class
 */
class DescribeRouteTableConflictsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether there is a conflict in the route table.
         * @type {boolean || null}
         */
        this.HasConflict = null;

        /**
         * Route table conflict list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RouteTableConflict> || null}
         */
        this.RouteTableConflictSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HasConflict = 'HasConflict' in params ? params.HasConflict : null;

        if (params.RouteTableConflictSet) {
            this.RouteTableConflictSet = new Array();
            for (let z in params.RouteTableConflictSet) {
                let obj = new RouteTableConflict();
                obj.deserialize(params.RouteTableConflictSet[z]);
                this.RouteTableConflictSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Object of cluster route
 * @class
 */
class RouteInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Destination CIDR.
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * Next hop address.
         * @type {string || null}
         */
        this.GatewayIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayIp = 'GatewayIp' in params ? params.GatewayIp : null;

    }
}

/**
 * Cluster master custom parameter
 * @class
 */
class ClusterExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kube-apiserver custom parameter
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.KubeAPIServer = null;

        /**
         * kube-controller-manager custom parameter
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.KubeControllerManager = null;

        /**
         * kube-scheduler custom parameter
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.KubeScheduler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KubeAPIServer = 'KubeAPIServer' in params ? params.KubeAPIServer : null;
        this.KubeControllerManager = 'KubeControllerManager' in params ? params.KubeControllerManager : null;
        this.KubeScheduler = 'KubeScheduler' in params ? params.KubeScheduler : null;

    }
}

/**
 * CreateClusterEndpoint response structure.
 * @class
 */
class CreateClusterEndpointResponse extends  AbstractModel {
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
 * Describes information related to the Cloud Monitor service.
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [Cloud Monitor](/document/product/248). Valid values: <br><li>TRUE: enable Cloud Monitor <br><li>FALSE: do not enable Cloud Monitor <br><br>Default value: TRUE.
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DeleteClusterEndpoint request structure.
 * @class
 */
class DeleteClusterEndpointRequest extends  AbstractModel {
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
 * Cluster advanced configurations
 * @class
 */
class ClusterAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether IPVS is enabled
         * @type {boolean || null}
         */
        this.IPVS = null;

        /**
         * Whether auto-scaling is enabled for nodes in the cluster (Enabling this function is not supported when you create a cluster)
         * @type {boolean || null}
         */
        this.AsEnabled = null;

        /**
         * Type of runtime component used by the cluster. The types include "docker" and "containerd". Default value: docker
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * 
         * @type {string || null}
         */
        this.NodeNameType = null;

        /**
         * Cluster custom parameter
         * @type {ClusterExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * Cluster network type, which can be GR (Global Router) or VPC-CNI. The default value is GR.
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * Whether a cluster in VPC-CNI mode uses dynamic IP addresses. The default value is FALSE, which indicates that static IP addresses are used.
         * @type {boolean || null}
         */
        this.IsNonStaticIpMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IPVS = 'IPVS' in params ? params.IPVS : null;
        this.AsEnabled = 'AsEnabled' in params ? params.AsEnabled : null;
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.NodeNameType = 'NodeNameType' in params ? params.NodeNameType : null;

        if (params.ExtraArgs) {
            let obj = new ClusterExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.IsNonStaticIpMode = 'IsNonStaticIpMode' in params ? params.IsNonStaticIpMode : null;

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
         * Attribute name. If more than one Filter exists, the logical relationship between these Filters is AND.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Attribute value. If there are multiple Values for one Filter, the logical relationship between the Values under the same Filter is OR.
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
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Cluster’s instance information
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Node role: MASTER, WORKER, ETCD, MASTER_ETCD, and ALL. Default value: WORKER
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * Reason for instance exception (or initialization)
         * @type {string || null}
         */
        this.FailedReason = null;

        /**
         * Instance status (running, initializing, or failed)
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * Whether the instance is drained
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.DrainStatus = null;

        /**
         * Node settings
Note: this field may return null, indicating that no valid value is obtained.
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.DrainStatus = 'DrainStatus' in params ? params.DrainStatus : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * Mounting configuration of the CVM instance data disk
 * @class
 */
class InstanceDataDiskMountSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Data disk mounting information
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Availability zone where the CVM instance is located
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
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DeleteClusterEndpointVip request structure.
 * @class
 */
class DeleteClusterEndpointVipRequest extends  AbstractModel {
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
 * DescribeClusters request structure.
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID list (When it is empty,
all clusters under the account will be obtained)
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of output entries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter condition. Currently, only filtering by a single ClusterName is supported
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
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
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
 * Cluster information struct
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Cluster description
         * @type {string || null}
         */
        this.ClusterDescription = null;

        /**
         * Cluster version. The default value is 1.10.5.
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * Cluster operating system. centOS 7.2x86_64 or ubuntu 16.04.1 LTSx86_64. Default value: ubuntu 16.04.1 LTSx86_64
         * @type {string || null}
         */
        this.ClusterOs = null;

        /**
         * Cluster type. Managed cluster: MANAGED_CLUSTER; Self-deployed cluster: INDEPENDENT_CLUSTER.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * Cluster network-related parameters
         * @type {ClusterNetworkSettings || null}
         */
        this.ClusterNetworkSettings = null;

        /**
         * Current number of nodes in the cluster
         * @type {number || null}
         */
        this.ClusterNodeNum = null;

        /**
         * ID of the project to which the cluster belongs
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * 
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 
         * @type {string || null}
         */
        this.Property = null;

        /**
         * Number of master nodes currently in the cluster
         * @type {number || null}
         */
        this.ClusterMaterNodeNum = null;

        /**
         * ID of the image used by the cluster
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * OsCustomizeType
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * Runtime environment of the cluster. Values can be `docker` or `containerd`.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

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
        this.ClusterDescription = 'ClusterDescription' in params ? params.ClusterDescription : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.ClusterOs = 'ClusterOs' in params ? params.ClusterOs : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

        if (params.ClusterNetworkSettings) {
            let obj = new ClusterNetworkSettings();
            obj.deserialize(params.ClusterNetworkSettings)
            this.ClusterNetworkSettings = obj;
        }
        this.ClusterNodeNum = 'ClusterNodeNum' in params ? params.ClusterNodeNum : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.Property = 'Property' in params ? params.Property : null;
        this.ClusterMaterNodeNum = 'ClusterMaterNodeNum' in params ? params.ClusterMaterNodeNum : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DescribeClusterEndpointStatus response structure.
 * @class
 */
class DescribeClusterEndpointStatusResponse extends  AbstractModel {
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
 * DescribeClusters response structure.
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of clusters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Cluster information list
         * @type {Array.<Cluster> || null}
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
                let obj = new Cluster();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes information related to the Cloud Security service.
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [Cloud Security](/document/product/296). Valid values: <br><li>TRUE: enable Cloud Security <br><li>FALSE: do not enable Cloud Security <br><br>Default value: TRUE.
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * Cluster network-related parameters
 * @class
 */
class ClusterNetworkSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * CIDR used to assign container and service IPs for the cluster. It cannot conflict with the VPC’s CIDR or the CIDRs of other clusters in the same VPC.
         * @type {string || null}
         */
        this.ClusterCIDR = null;

        /**
         * Whether to ignore ClusterCIDR conflict errors. It defaults to not ignore.
         * @type {boolean || null}
         */
        this.IgnoreClusterCIDRConflict = null;

        /**
         * Maximum number of pods on each node in the cluster. Default value: 256
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * Maximum number of cluster services. Default value: 256
         * @type {number || null}
         */
        this.MaxClusterServiceNum = null;

        /**
         * Whether IPVS is enabled. Default value: disabled
         * @type {boolean || null}
         */
        this.Ipvs = null;

        /**
         * Cluster VPC ID, which is required when you create an empty cluster; otherwise, it is automatically set to be consistent with that of the nodes in the cluster
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Whether CNI is enabled for network plugin(s). Default value: enabled
         * @type {boolean || null}
         */
        this.Cni = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterCIDR = 'ClusterCIDR' in params ? params.ClusterCIDR : null;
        this.IgnoreClusterCIDRConflict = 'IgnoreClusterCIDRConflict' in params ? params.IgnoreClusterCIDRConflict : null;
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;
        this.MaxClusterServiceNum = 'MaxClusterServiceNum' in params ? params.MaxClusterServiceNum : null;
        this.Ipvs = 'Ipvs' in params ? params.Ipvs : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Cni = 'Cni' in params ? params.Cni : null;

    }
}

/**
 * Described the configuration and information of k8s node data disk.
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * File system (ext3/ext4/xfs)
         * @type {string || null}
         */
        this.FileSystem = null;

        /**
         * 
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Whether to automatically format and mount the disk
         * @type {boolean || null}
         */
        this.AutoFormatAndMount = null;

        /**
         * 
         * @type {string || null}
         */
        this.MountTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.FileSystem = 'FileSystem' in params ? params.FileSystem : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.AutoFormatAndMount = 'AutoFormatAndMount' in params ? params.AutoFormatAndMount : null;
        this.MountTarget = 'MountTarget' in params ? params.MountTarget : null;

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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
 * AddExistedInstances response structure.
 * @class
 */
class AddExistedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDs of failed nodes
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * IDs of successful nodes
         * @type {Array.<string> || null}
         */
        this.SuccInstanceIds = null;

        /**
         * IDs of (successful or failed) nodes that timed out
         * @type {Array.<string> || null}
         */
        this.TimeoutInstanceIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.SuccInstanceIds = 'SuccInstanceIds' in params ? params.SuccInstanceIds : null;
        this.TimeoutInstanceIds = 'TimeoutInstanceIds' in params ? params.TimeoutInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteClusterRouteTable response structure.
 * @class
 */
class DeleteClusterRouteTableResponse extends  AbstractModel {
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
 * CreateClusterInstances response structure.
 * @class
 */
class CreateClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DeleteClusterRequest: DeleteClusterRequest,
    CreateClusterEndpointVipResponse: CreateClusterEndpointVipResponse,
    DescribeExistedInstancesResponse: DescribeExistedInstancesResponse,
    DescribeClusterRoutesResponse: DescribeClusterRoutesResponse,
    DescribeClusterSecurityRequest: DescribeClusterSecurityRequest,
    DescribeClusterEndpointVipStatusRequest: DescribeClusterEndpointVipStatusRequest,
    CreateClusterEndpointRequest: CreateClusterEndpointRequest,
    EnhancedService: EnhancedService,
    Label: Label,
    LoginSettings: LoginSettings,
    DeleteClusterRouteResponse: DeleteClusterRouteResponse,
    AddExistedInstancesRequest: AddExistedInstancesRequest,
    DescribeClusterEndpointStatusRequest: DescribeClusterEndpointStatusRequest,
    DescribeClusterEndpointVipStatusResponse: DescribeClusterEndpointVipStatusResponse,
    DescribeClusterSecurityResponse: DescribeClusterSecurityResponse,
    DescribeClusterInstancesResponse: DescribeClusterInstancesResponse,
    CreateClusterAsGroupRequest: CreateClusterAsGroupRequest,
    DescribeClusterRouteTablesRequest: DescribeClusterRouteTablesRequest,
    CreateClusterRouteTableResponse: CreateClusterRouteTableResponse,
    ExistedInstancesForNode: ExistedInstancesForNode,
    CreateClusterResponse: CreateClusterResponse,
    DescribeClusterRoutesRequest: DescribeClusterRoutesRequest,
    DeleteClusterRouteTableRequest: DeleteClusterRouteTableRequest,
    DeleteClusterRouteRequest: DeleteClusterRouteRequest,
    ClusterBasicSettings: ClusterBasicSettings,
    CreateClusterRequest: CreateClusterRequest,
    DeleteClusterInstancesRequest: DeleteClusterInstancesRequest,
    CreateClusterInstancesRequest: CreateClusterInstancesRequest,
    CreateClusterAsGroupResponse: CreateClusterAsGroupResponse,
    DeleteClusterInstancesResponse: DeleteClusterInstancesResponse,
    CreateClusterRouteTableRequest: CreateClusterRouteTableRequest,
    DeleteClusterEndpointResponse: DeleteClusterEndpointResponse,
    RouteTableConflict: RouteTableConflict,
    DeleteClusterAsGroupsResponse: DeleteClusterAsGroupsResponse,
    RouteTableInfo: RouteTableInfo,
    TagSpecification: TagSpecification,
    DeleteClusterEndpointVipResponse: DeleteClusterEndpointVipResponse,
    DescribeClusterInstancesRequest: DescribeClusterInstancesRequest,
    ClusterCIDRSettings: ClusterCIDRSettings,
    InstanceAdvancedSettings: InstanceAdvancedSettings,
    ModifyClusterEndpointSPResponse: ModifyClusterEndpointSPResponse,
    DescribeClusterRouteTablesResponse: DescribeClusterRouteTablesResponse,
    DescribeRouteTableConflictsRequest: DescribeRouteTableConflictsRequest,
    RunInstancesForNode: RunInstancesForNode,
    CreateClusterEndpointVipRequest: CreateClusterEndpointVipRequest,
    ExistedInstancesPara: ExistedInstancesPara,
    DeleteClusterAsGroupsRequest: DeleteClusterAsGroupsRequest,
    DescribeExistedInstancesRequest: DescribeExistedInstancesRequest,
    ExistedInstance: ExistedInstance,
    InstanceExtraArgs: InstanceExtraArgs,
    ModifyClusterEndpointSPRequest: ModifyClusterEndpointSPRequest,
    DescribeRouteTableConflictsResponse: DescribeRouteTableConflictsResponse,
    RouteInfo: RouteInfo,
    ClusterExtraArgs: ClusterExtraArgs,
    CreateClusterEndpointResponse: CreateClusterEndpointResponse,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    DeleteClusterEndpointRequest: DeleteClusterEndpointRequest,
    ClusterAdvancedSettings: ClusterAdvancedSettings,
    Filter: Filter,
    Instance: Instance,
    InstanceDataDiskMountSetting: InstanceDataDiskMountSetting,
    DeleteClusterEndpointVipRequest: DeleteClusterEndpointVipRequest,
    DescribeClustersRequest: DescribeClustersRequest,
    Cluster: Cluster,
    DescribeClusterEndpointStatusResponse: DescribeClusterEndpointStatusResponse,
    DescribeClustersResponse: DescribeClustersResponse,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    ClusterNetworkSettings: ClusterNetworkSettings,
    DataDisk: DataDisk,
    DeleteClusterResponse: DeleteClusterResponse,
    AddExistedInstancesResponse: AddExistedInstancesResponse,
    DeleteClusterRouteTableResponse: DeleteClusterRouteTableResponse,
    CreateClusterInstancesResponse: CreateClusterInstancesResponse,

}
