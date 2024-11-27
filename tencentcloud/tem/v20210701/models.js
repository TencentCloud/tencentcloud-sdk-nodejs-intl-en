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
 * CreateResource request structure.
 * @class
 */
class CreateResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Resource type. Valid values: `CFS` (file system), `CLS` (log service), `TSE_SRE` (registry)
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Source of the resource. Values: `existing` (choose an existing resource), `creating` (create a new resource)
         * @type {string || null}
         */
        this.ResourceFrom = null;

        /**
         * Resource extra configuration
         * @type {string || null}
         */
        this.ResourceConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.ResourceFrom = 'ResourceFrom' in params ? params.ResourceFrom : null;
        this.ResourceConfig = 'ResourceConfig' in params ? params.ResourceConfig : null;

    }
}

/**
 * DescribeConfigData response structure.
 * @class
 */
class DescribeConfigDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration
         * @type {ConfigData || null}
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

        if (params.Result) {
            let obj = new ConfigData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Namespace query result pagination
 * @class
 */
class NamespacePage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of the returned records
         * @type {Array.<TemNamespaceInfo> || null}
         */
        this.Records = null;

        /**
         * Total number of returned records
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Number of records per page
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Total number of pages
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Current entry
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Current = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new TemNamespaceInfo();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.Current = 'Current' in params ? params.Current : null;

    }
}

/**
 * DescribeApplicationPods response structure.
 * @class
 */
class DescribeApplicationPodsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {DescribeRunPodPage || null}
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

        if (params.Result) {
            let obj = new DescribeRunPodPage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIngress response structure.
 * @class
 */
class ModifyIngressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Created successfully.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * DeleteApplicationService request structure.
 * @class
 */
class DeleteApplicationServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Service name
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * RestartApplicationPod request structure.
 * @class
 */
class RestartApplicationPodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Name
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * Number of items per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pod status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DestroyLogConfig response structure.
 * @class
 */
class DestroyLogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {boolean || null}
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
 * Filters for query 
 * @class
 */
class QueryFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the field to query
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value of the field to query
         * @type {Array.<string> || null}
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
 * Storage volume configuration
 * @class
 */
class StorageConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage volume name
         * @type {string || null}
         */
        this.StorageVolName = null;

        /**
         * Storage volume path
         * @type {string || null}
         */
        this.StorageVolPath = null;

        /**
         * Storage volume IP
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StorageVolIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StorageVolName = 'StorageVolName' in params ? params.StorageVolName : null;
        this.StorageVolPath = 'StorageVolPath' in params ? params.StorageVolPath : null;
        this.StorageVolIp = 'StorageVolIp' in params ? params.StorageVolIp : null;

    }
}

/**
 * DescribeApplicationPods request structure.
 * @class
 */
class DescribeApplicationPodsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Number of items per page. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pod status 
- Running 
- Pending 
- Error
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Pod name
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * Ingress TLS configuration
 * @class
 */
class IngressTls extends  AbstractModel {
    constructor(){
        super();

        /**
         * Host array. An empty array indicates the default certificate for all domain names.
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * Secret name. If a certificate is used, this field is left empty.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * SSL Certificate Id
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hosts = 'Hosts' in params ? params.Hosts : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * Log output configuration
 * @class
 */
class LogOutputConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log consumer type
         * @type {string || null}
         */
        this.OutputType = null;

        /**
         * CLS logset
         * @type {string || null}
         */
        this.ClsLogsetName = null;

        /**
         * CLS log topic
         * @type {string || null}
         */
        this.ClsLogTopicId = null;

        /**
         * CLS logset ID
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * CLS log topic name
         * @type {string || null}
         */
        this.ClsLogTopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputType = 'OutputType' in params ? params.OutputType : null;
        this.ClsLogsetName = 'ClsLogsetName' in params ? params.ClsLogsetName : null;
        this.ClsLogTopicId = 'ClsLogTopicId' in params ? params.ClsLogTopicId : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsLogTopicName = 'ClsLogTopicName' in params ? params.ClsLogTopicName : null;

    }
}

/**
 * DeleteIngress response structure.
 * @class
 */
class DeleteIngressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether deletion is successful
         * @type {boolean || null}
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
 * DeleteApplication response structure.
 * @class
 */
class DeleteApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {boolean || null}
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
 * ModifyApplicationAutoscaler response structure.
 * @class
 */
class ModifyApplicationAutoscalerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the action is successful
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * RollingUpdateApplicationByVersion request structure.
 * @class
 */
class RollingUpdateApplicationByVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Update version. For image-based deployment, it is the value. For deployment with JAR/WAR files, it is `Version`.
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * JAR/WAR package name. It’s only required for deployment with JAR/WAR files.
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * Request source. Options: `IntelliJ`, `Coding`
         * @type {string || null}
         */
        this.From = null;

        /**
         * The deployment policy. Values: `AUTO` (automatically deploy), `BETA` (deploy a small batch first to test the result, and deploy the rest automatically) and `MANUAL` (manually deploy)
         * @type {string || null}
         */
        this.DeployStrategyType = null;

        /**
         * Total number of batches
         * @type {number || null}
         */
        this.TotalBatchCount = null;

        /**
         * Interval between the batches
         * @type {number || null}
         */
        this.BatchInterval = null;

        /**
         * Number of instances in a beta batch
         * @type {number || null}
         */
        this.BetaBatchNum = null;

        /**
         * Minimum number of available instances during the deployment
         * @type {number || null}
         */
        this.MinAvailable = null;

        /**
         * Whether to enable force release
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.From = 'From' in params ? params.From : null;
        this.DeployStrategyType = 'DeployStrategyType' in params ? params.DeployStrategyType : null;
        this.TotalBatchCount = 'TotalBatchCount' in params ? params.TotalBatchCount : null;
        this.BatchInterval = 'BatchInterval' in params ? params.BatchInterval : null;
        this.BetaBatchNum = 'BetaBatchNum' in params ? params.BetaBatchNum : null;
        this.MinAvailable = 'MinAvailable' in params ? params.MinAvailable : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * CreateCosToken response structure.
 * @class
 */
class CreateCosTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `CosToken` object in case of success and `null` in case of failure
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {CosToken || null}
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

        if (params.Result) {
            let obj = new CosToken();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLogConfig response structure.
 * @class
 */
class ModifyLogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of the modification
         * @type {boolean || null}
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
 * RollingUpdateApplicationByVersion response structure.
 * @class
 */
class RollingUpdateApplicationByVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version ID
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
 * StopApplication request structure.
 * @class
 */
class StopApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Retain as default
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

    }
}

/**
 * ModifyApplicationInfo request structure.
 * @class
 */
class ModifyApplicationInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * (Disused) Whether to enable the call chain. 
         * @type {number || null}
         */
        this.EnableTracing = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnableTracing = 'EnableTracing' in params ? params.EnableTracing : null;

    }
}

/**
 * DestroyEnvironment request structure.
 * @class
 */
class DestroyEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace ID.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Namespace
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateEnvironment response structure.
 * @class
 */
class CreateEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID in case of success and `null` in case of failure
Note: this field may return `null`, indicating that no valid values can be obtained.
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
 * DescribeEnvironmentStatus request structure.
 * @class
 */
class DescribeEnvironmentStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the environment
         * @type {Array.<string> || null}
         */
        this.EnvironmentIds = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentIds = 'EnvironmentIds' in params ? params.EnvironmentIds : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * Configuration of batch release policies
 * @class
 */
class DeployStrategyConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total batches
         * @type {number || null}
         */
        this.TotalBatchCount = null;

        /**
         * Number of pods for the beta batch
         * @type {number || null}
         */
        this.BetaBatchNum = null;

        /**
         * Batch deployment policy. `0`: automatically; `1`: manually; `2`: beta batch (manual), `3`: initial release
         * @type {number || null}
         */
        this.DeployStrategyType = null;

        /**
         * Interval between batches
         * @type {number || null}
         */
        this.BatchInterval = null;

        /**
         * The minimum number of available pods
         * @type {number || null}
         */
        this.MinAvailable = null;

        /**
         * Whether to enable force release
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalBatchCount = 'TotalBatchCount' in params ? params.TotalBatchCount : null;
        this.BetaBatchNum = 'BetaBatchNum' in params ? params.BetaBatchNum : null;
        this.DeployStrategyType = 'DeployStrategyType' in params ? params.DeployStrategyType : null;
        this.BatchInterval = 'BatchInterval' in params ? params.BatchInterval : null;
        this.MinAvailable = 'MinAvailable' in params ? params.MinAvailable : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DescribeApplications response structure.
 * @class
 */
class DescribeApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {ServicePage || null}
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

        if (params.Result) {
            let obj = new ServicePage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ingress configuration
 * @class
 */
class IngressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Environment namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * ip version
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * ingress name
         * @type {string || null}
         */
        this.IngressName = null;

        /**
         * Rules configuration
         * @type {Array.<IngressRule> || null}
         */
        this.Rules = null;

        /**
         * clb ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClbId = null;

        /**
         * TLS configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<IngressTls> || null}
         */
        this.Tls = null;

        /**
         * Environment cluster ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * clb ip
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Creation time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether to listen on both the HTTP 80 port and HTTPS 443 port. The default value is `false`. The optional value `true` means listening on both the HTTP 80 port and HTTPS 443 port.
         * @type {boolean || null}
         */
        this.Mixed = null;

        /**
         * Redirection mode. Values:
- `AUTO` (automatically redirect HTTP to HTTPS)
- `NONE` (no redirection)
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RewriteType = null;

        /**
         * CLB domain name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.IngressName = 'IngressName' in params ? params.IngressName : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new IngressRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.ClbId = 'ClbId' in params ? params.ClbId : null;

        if (params.Tls) {
            this.Tls = new Array();
            for (let z in params.Tls) {
                let obj = new IngressTls();
                obj.deserialize(params.Tls[z]);
                this.Tls.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Mixed = 'Mixed' in params ? params.Mixed : null;
        this.RewriteType = 'RewriteType' in params ? params.RewriteType : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribeEnvironments request structure.
 * @class
 */
class DescribeEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Source
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Filters for query 
         * @type {Array.<QueryFilter> || null}
         */
        this.Filters = null;

        /**
         * Sorting field
         * @type {SortType || null}
         */
        this.SortInfo = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.SortInfo) {
            let obj = new SortType();
            obj.deserialize(params.SortInfo)
            this.SortInfo = obj;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

    }
}

/**
 * ModifyEnvironment request structure.
 * @class
 */
class ModifyEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Environment name
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Environment description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * Subnets
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Environment type. Values: `test`, `pre`, `prod`
         * @type {string || null}
         */
        this.EnvType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

    }
}

/**
 * List of application versions
 * @class
 */
class ServiceVersionBrief extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version name
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Status of version
         * @type {string || null}
         */
        this.Status = null;

        /**
         * (Disused) Whether to enable elastic scaling
         * @type {number || null}
         */
        this.EnableEs = null;

        /**
         * Number of current instances
         * @type {number || null}
         */
        this.CurrentInstances = null;

        /**
         * Version ID
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * (Disused) Log output configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LogOutputConf || null}
         */
        this.LogOutputConf = null;

        /**
         * Expected number of instances
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExpectedInstances = null;

        /**
         * Deployment mode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * Task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BuildTaskId = null;

        /**
         * Environment ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Environment name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Application ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Application name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Whether the application is being deployed
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.UnderDeploying = null;

        /**
         * Status of batch deployment
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.BatchDeployStatus = null;

        /**
         * Availability zones
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * Node information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfos = null;

        /**
         * Pod information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {DescribeRunPodPage || null}
         */
        this.PodList = null;

        /**
         * Workload information
Note: This field may return `null`, indicating that no valid value was found.
         * @type {WorkloadInfo || null}
         */
        this.WorkloadInfo = null;

        /**
         * Creation time
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * Region ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EnableEs = 'EnableEs' in params ? params.EnableEs : null;
        this.CurrentInstances = 'CurrentInstances' in params ? params.CurrentInstances : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

        if (params.LogOutputConf) {
            let obj = new LogOutputConf();
            obj.deserialize(params.LogOutputConf)
            this.LogOutputConf = obj;
        }
        this.ExpectedInstances = 'ExpectedInstances' in params ? params.ExpectedInstances : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.BuildTaskId = 'BuildTaskId' in params ? params.BuildTaskId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.UnderDeploying = 'UnderDeploying' in params ? params.UnderDeploying : null;
        this.BatchDeployStatus = 'BatchDeployStatus' in params ? params.BatchDeployStatus : null;
        this.Zones = 'Zones' in params ? params.Zones : null;

        if (params.NodeInfos) {
            this.NodeInfos = new Array();
            for (let z in params.NodeInfos) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfos[z]);
                this.NodeInfos.push(obj);
            }
        }

        if (params.PodList) {
            let obj = new DescribeRunPodPage();
            obj.deserialize(params.PodList)
            this.PodList = obj;
        }

        if (params.WorkloadInfo) {
            let obj = new WorkloadInfo();
            obj.deserialize(params.WorkloadInfo)
            this.WorkloadInfo = obj;
        }
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * Configuration of log exporting rule
 * @class
 */
class LogConfigExtractRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * First line regex
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.BeginningRegex = null;

        /**
         * Withdrawl result
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.Keys = null;

        /**
         * Filter keys
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.FilterKeys = null;

        /**
         * Filter values
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.FilterRegex = null;

        /**
         * Log regex
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.LogRegex = null;

        /**
         * Time field
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * Time Format
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * - Enable the upload of the log that failed to parse
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.UnMatchUpload = null;

        /**
         * Key of log failed to be parsed
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.UnMatchedKey = null;

        /**
         * tracking
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Backtracking = null;

        /**
         * Separator
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Delimiter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginningRegex = 'BeginningRegex' in params ? params.BeginningRegex : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.FilterKeys = 'FilterKeys' in params ? params.FilterKeys : null;
        this.FilterRegex = 'FilterRegex' in params ? params.FilterRegex : null;
        this.LogRegex = 'LogRegex' in params ? params.LogRegex : null;
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.UnMatchUpload = 'UnMatchUpload' in params ? params.UnMatchUpload : null;
        this.UnMatchedKey = 'UnMatchedKey' in params ? params.UnMatchedKey : null;
        this.Backtracking = 'Backtracking' in params ? params.Backtracking : null;
        this.Delimiter = 'Delimiter' in params ? params.Delimiter : null;

    }
}

/**
 * CreateEnvironment request structure.
 * @class
 */
class CreateEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment name
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Environment description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * List of subnets
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Kubernetes version
         * @type {string || null}
         */
        this.K8sVersion = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Whether to enable the TSW service
         * @type {boolean || null}
         */
        this.EnableTswTraceService = null;

        /**
         * Tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Environment type. Values: `test`, `pre`, `prod`
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * The region to create the environment
         * @type {string || null}
         */
        this.CreateRegion = null;

        /**
         * Whether to create a VPC
         * @type {boolean || null}
         */
        this.SetupVpc = null;

        /**
         * Whether to create a TMP instance
         * @type {boolean || null}
         */
        this.SetupPrometheus = null;

        /**
         * TMP instance ID
         * @type {string || null}
         */
        this.PrometheusId = null;

        /**
         * APM ID
         * @type {string || null}
         */
        this.ApmId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.K8sVersion = 'K8sVersion' in params ? params.K8sVersion : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnableTswTraceService = 'EnableTswTraceService' in params ? params.EnableTswTraceService : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.EnvType = 'EnvType' in params ? params.EnvType : null;
        this.CreateRegion = 'CreateRegion' in params ? params.CreateRegion : null;
        this.SetupVpc = 'SetupVpc' in params ? params.SetupVpc : null;
        this.SetupPrometheus = 'SetupPrometheus' in params ? params.SetupPrometheus : null;
        this.PrometheusId = 'PrometheusId' in params ? params.PrometheusId : null;
        this.ApmId = 'ApmId' in params ? params.ApmId : null;

    }
}

/**
 * Node information
 * @class
 */
class NodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Availability zone of the node
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Node subnet ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Number of available IPs
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AvailableIpCount = null;

        /**
         * CIDR block
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cidr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AvailableIpCount = 'AvailableIpCount' in params ? params.AvailableIpCount : null;
        this.Cidr = 'Cidr' in params ? params.Cidr : null;

    }
}

/**
 * DescribeApplicationServiceList response structure.
 * @class
 */
class DescribeApplicationServiceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application EKS service list
         * @type {EksService || null}
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

        if (params.Result) {
            let obj = new EksService();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogConfig request structure.
 * @class
 */
class DescribeLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Application ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DescribeEnvironmentStatus response structure.
 * @class
 */
class DescribeEnvironmentStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of environment status
         * @type {Array.<NamespaceStatusInfo> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new NamespaceStatusInfo();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Auto scaling configuration
 * @class
 */
class EsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum number of instances
         * @type {number || null}
         */
        this.MinAliveInstances = null;

        /**
         * Maximum number of instances
         * @type {number || null}
         */
        this.MaxAliveInstances = null;

        /**
         * Auto scaling policy. 1: CPU; 2: memory
         * @type {number || null}
         */
        this.EsStrategy = null;

        /**
         * Auto scaling condition value
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * Version ID
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinAliveInstances = 'MinAliveInstances' in params ? params.MinAliveInstances : null;
        this.MaxAliveInstances = 'MaxAliveInstances' in params ? params.MaxAliveInstances : null;
        this.EsStrategy = 'EsStrategy' in params ? params.EsStrategy : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * DescribeApplicationInfo response structure.
 * @class
 */
class DescribeApplicationInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {TemServiceVersionInfo || null}
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

        if (params.Result) {
            let obj = new TemServiceVersionInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigDataList request structure.
 * @class
 */
class DescribeConfigDataListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Paging cursor
         * @type {string || null}
         */
        this.ContinueToken = null;

        /**
         * Pagination limit
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.ContinueToken = 'ContinueToken' in params ? params.ContinueToken : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * EnableApplicationAutoscaler response structure.
 * @class
 */
class EnableApplicationAutoscalerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the action succeeded 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * List of returned applications
 * @class
 */
class ServicePage extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of applications
         * @type {Array.<TemService> || null}
         */
        this.Records = null;

        /**
         * Total number of applications
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Number of applications per page
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Total number of pages
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Number of current entries
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Current = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new TemService();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.Current = 'Current' in params ? params.Current : null;

    }
}

/**
 * Version information
 * @class
 */
class TemServiceVersionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version ID
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Deployment mode
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * JDK version
         * @type {string || null}
         */
        this.JdkVersion = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Deployed version
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * Publish mode
         * @type {string || null}
         */
        this.PublishMode = null;

        /**
         * Launch parameter
         * @type {string || null}
         */
        this.JvmOpts = null;

        /**
         * Number of initial pods
         * @type {number || null}
         */
        this.InitPodNum = null;

        /**
         * CPU specification
         * @type {number || null}
         */
        this.CpuSpec = null;

        /**
         * Memory specification
         * @type {number || null}
         */
        this.MemorySpec = null;

        /**
         * Image path
         * @type {string || null}
         */
        this.ImgRepo = null;

        /**
         * Image name
         * @type {string || null}
         */
        this.ImgName = null;

        /**
         * Image version
         * @type {string || null}
         */
        this.ImgVersion = null;

        /**
         * Scaling configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {EsInfo || null}
         */
        this.EsInfo = null;

        /**
         * Environment configuration
         * @type {Array.<Pair> || null}
         */
        this.EnvConf = null;

        /**
         * Storage configuration
         * @type {Array.<StorageConf> || null}
         */
        this.StorageConfs = null;

        /**
         * Running status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * VPC
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * Subnets
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifyDate = null;

        /**
         * Mounting configuration
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<StorageMountConf> || null}
         */
        this.StorageMountConfs = null;

        /**
         * Version name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Log output configuration
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {LogOutputConf || null}
         */
        this.LogOutputConf = null;

        /**
         * Application name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Application description
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationDescription = null;

        /**
         * Environment name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Environment ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Public network address
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicDomain = null;

        /**
         * Whether to enable public network access
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EnablePublicAccess = null;

        /**
         * Number of current instances
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CurrentInstances = null;

        /**
         * Number of expected instances
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExpectedInstances = null;

        /**
         * Programming Language
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CodingLanguage = null;

        /**
         * Program package name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * Whether to enable auto scaling
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EsEnable = null;

        /**
         * Auto scaling policy
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EsStrategy = null;

        /**
         * Image tag
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImageTag = null;

        /**
         * Whether to enable logging
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LogEnable = null;

        /**
         * Minimum number of instances
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MinAliveInstances = null;

        /**
         * Security group IDs
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Image command
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImageCommand = null;

        /**
         * Image command parameters
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ImageArgs = null;

        /**
         * Whether to use the default registry configurations
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.UseRegistryDefaultConfig = null;

        /**
         * EKS access configuration
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {EksService || null}
         */
        this.Service = null;

        /**
         * Mounting configurations
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<MountedSettingConf> || null}
         */
        this.SettingConfs = null;

        /**
         * Log path information
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.LogConfs = null;

        /**
         * The script to execute right after the startup
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PostStart = null;

        /**
         * The script to run before stop
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PreStop = null;

        /**
         * Configuration of aliveness probe
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {HealthCheckConfig || null}
         */
        this.Liveness = null;

        /**
         * Configuration of readiness probe
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {HealthCheckConfig || null}
         */
        this.Readiness = null;

        /**
         * Auto scaling policy
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<HorizontalAutoscaler> || null}
         */
        this.HorizontalAutoscaler = null;

        /**
         * Scheduled auto scaling policy
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<CronHorizontalAutoscaler> || null}
         */
        this.CronHorizontalAutoscaler = null;

        /**
         * Availability zone of the application
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * The latest deployment time
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastDeployDate = null;

        /**
         * The latest successful deployment time
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastDeploySuccessDate = null;

        /**
         * Information of the node whether the application is deployed
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<NodeInfo> || null}
         */
        this.NodeInfos = null;

        /**
         * Image type. Values: `0` (Demo image), `1` (Normal image)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ImageType = null;

        /**
         * Whether to 
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnableTracing = null;

        /**
         * (Disused) Whether to enable linkage tracing and report. It only takes effect when EnableTracing = `1`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnableTracingReport = null;

        /**
         * Image type. `0`: Individual image; `1`: Enterprise image; `2`: Public image
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RepoType = null;

        /**
         * Status of batch deployment: `batch_updating`, `batch_updating_waiting_confirm`
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BatchDeployStatus = null;

        /**
         * APM instance ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApmInstanceId = null;

        /**
         * Workload information 
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {WorkloadInfo || null}
         */
        this.WorkloadInfo = null;

        /**
         * Whether to enable application acceleration
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.SpeedUp = null;

        /**
         * Configuration of the startup probe
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {HealthCheckConfig || null}
         */
        this.StartupProbe = null;

        /**
         * OS version. Values:
- ALPINE
- CENTOS
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OsFlavour = null;

        /**
         * Image repository server
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RepoServer = null;

        /**
         * Whether the application is being deployed
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.UnderDeploying = null;

        /**
         * Whether to enable application metric monitoring 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {EnablePrometheusConf || null}
         */
        this.EnablePrometheusConf = null;

        /**
         * Whether it’s stopped manually
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.StoppedManually = null;

        /**
         * TCR instance ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TcrInstanceId = null;

        /**
         * `1`: Automatically enable metrics collection (open-telemetry)
`0`: Disable metrics collection
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnableMetrics = null;

        /**
         * User AppId
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * Sub Account UIN
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * User UIN
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Region
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Application group ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Whether to enable registry
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.EnableRegistry = null;

        /**
         * Array of scaling rules
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Autoscaler> || null}
         */
        this.AutoscalerList = null;

        /**
         * Modifier
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Modifier = null;

        /**
         * Creator
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * Deployment strategy
Note: This field may return `null`, indicating that no valid value was found.
         * @type {DeployStrategyConf || null}
         */
        this.DeployStrategyConf = null;

        /**
         * List of pods
Note: This field may return `null`, indicating that no valid value was found.
         * @type {DescribeRunPodPage || null}
         */
        this.PodList = null;

        /**
         * Whether the configuration has been changed during deployment
Note: This field may return `null`, indicating that no valid value was found.
         * @type {boolean || null}
         */
        this.ConfEdited = null;

        /**
         * Tag
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether to encode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PreStopEncoded = null;

        /**
         * Whether to encode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PostStartEncoded = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.JdkVersion = 'JdkVersion' in params ? params.JdkVersion : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.PublishMode = 'PublishMode' in params ? params.PublishMode : null;
        this.JvmOpts = 'JvmOpts' in params ? params.JvmOpts : null;
        this.InitPodNum = 'InitPodNum' in params ? params.InitPodNum : null;
        this.CpuSpec = 'CpuSpec' in params ? params.CpuSpec : null;
        this.MemorySpec = 'MemorySpec' in params ? params.MemorySpec : null;
        this.ImgRepo = 'ImgRepo' in params ? params.ImgRepo : null;
        this.ImgName = 'ImgName' in params ? params.ImgName : null;
        this.ImgVersion = 'ImgVersion' in params ? params.ImgVersion : null;

        if (params.EsInfo) {
            let obj = new EsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }

        if (params.EnvConf) {
            this.EnvConf = new Array();
            for (let z in params.EnvConf) {
                let obj = new Pair();
                obj.deserialize(params.EnvConf[z]);
                this.EnvConf.push(obj);
            }
        }

        if (params.StorageConfs) {
            this.StorageConfs = new Array();
            for (let z in params.StorageConfs) {
                let obj = new StorageConf();
                obj.deserialize(params.StorageConfs[z]);
                this.StorageConfs.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.ModifyDate = 'ModifyDate' in params ? params.ModifyDate : null;

        if (params.StorageMountConfs) {
            this.StorageMountConfs = new Array();
            for (let z in params.StorageMountConfs) {
                let obj = new StorageMountConf();
                obj.deserialize(params.StorageMountConfs[z]);
                this.StorageMountConfs.push(obj);
            }
        }
        this.VersionName = 'VersionName' in params ? params.VersionName : null;

        if (params.LogOutputConf) {
            let obj = new LogOutputConf();
            obj.deserialize(params.LogOutputConf)
            this.LogOutputConf = obj;
        }
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.ApplicationDescription = 'ApplicationDescription' in params ? params.ApplicationDescription : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.PublicDomain = 'PublicDomain' in params ? params.PublicDomain : null;
        this.EnablePublicAccess = 'EnablePublicAccess' in params ? params.EnablePublicAccess : null;
        this.CurrentInstances = 'CurrentInstances' in params ? params.CurrentInstances : null;
        this.ExpectedInstances = 'ExpectedInstances' in params ? params.ExpectedInstances : null;
        this.CodingLanguage = 'CodingLanguage' in params ? params.CodingLanguage : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.EsEnable = 'EsEnable' in params ? params.EsEnable : null;
        this.EsStrategy = 'EsStrategy' in params ? params.EsStrategy : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;
        this.MinAliveInstances = 'MinAliveInstances' in params ? params.MinAliveInstances : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.ImageCommand = 'ImageCommand' in params ? params.ImageCommand : null;
        this.ImageArgs = 'ImageArgs' in params ? params.ImageArgs : null;
        this.UseRegistryDefaultConfig = 'UseRegistryDefaultConfig' in params ? params.UseRegistryDefaultConfig : null;

        if (params.Service) {
            let obj = new EksService();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.SettingConfs) {
            this.SettingConfs = new Array();
            for (let z in params.SettingConfs) {
                let obj = new MountedSettingConf();
                obj.deserialize(params.SettingConfs[z]);
                this.SettingConfs.push(obj);
            }
        }
        this.LogConfs = 'LogConfs' in params ? params.LogConfs : null;
        this.PostStart = 'PostStart' in params ? params.PostStart : null;
        this.PreStop = 'PreStop' in params ? params.PreStop : null;

        if (params.Liveness) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.Liveness)
            this.Liveness = obj;
        }

        if (params.Readiness) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.Readiness)
            this.Readiness = obj;
        }

        if (params.HorizontalAutoscaler) {
            this.HorizontalAutoscaler = new Array();
            for (let z in params.HorizontalAutoscaler) {
                let obj = new HorizontalAutoscaler();
                obj.deserialize(params.HorizontalAutoscaler[z]);
                this.HorizontalAutoscaler.push(obj);
            }
        }

        if (params.CronHorizontalAutoscaler) {
            this.CronHorizontalAutoscaler = new Array();
            for (let z in params.CronHorizontalAutoscaler) {
                let obj = new CronHorizontalAutoscaler();
                obj.deserialize(params.CronHorizontalAutoscaler[z]);
                this.CronHorizontalAutoscaler.push(obj);
            }
        }
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.LastDeployDate = 'LastDeployDate' in params ? params.LastDeployDate : null;
        this.LastDeploySuccessDate = 'LastDeploySuccessDate' in params ? params.LastDeploySuccessDate : null;

        if (params.NodeInfos) {
            this.NodeInfos = new Array();
            for (let z in params.NodeInfos) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfos[z]);
                this.NodeInfos.push(obj);
            }
        }
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.EnableTracing = 'EnableTracing' in params ? params.EnableTracing : null;
        this.EnableTracingReport = 'EnableTracingReport' in params ? params.EnableTracingReport : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.BatchDeployStatus = 'BatchDeployStatus' in params ? params.BatchDeployStatus : null;
        this.ApmInstanceId = 'ApmInstanceId' in params ? params.ApmInstanceId : null;

        if (params.WorkloadInfo) {
            let obj = new WorkloadInfo();
            obj.deserialize(params.WorkloadInfo)
            this.WorkloadInfo = obj;
        }
        this.SpeedUp = 'SpeedUp' in params ? params.SpeedUp : null;

        if (params.StartupProbe) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.StartupProbe)
            this.StartupProbe = obj;
        }
        this.OsFlavour = 'OsFlavour' in params ? params.OsFlavour : null;
        this.RepoServer = 'RepoServer' in params ? params.RepoServer : null;
        this.UnderDeploying = 'UnderDeploying' in params ? params.UnderDeploying : null;

        if (params.EnablePrometheusConf) {
            let obj = new EnablePrometheusConf();
            obj.deserialize(params.EnablePrometheusConf)
            this.EnablePrometheusConf = obj;
        }
        this.StoppedManually = 'StoppedManually' in params ? params.StoppedManually : null;
        this.TcrInstanceId = 'TcrInstanceId' in params ? params.TcrInstanceId : null;
        this.EnableMetrics = 'EnableMetrics' in params ? params.EnableMetrics : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EnableRegistry = 'EnableRegistry' in params ? params.EnableRegistry : null;

        if (params.AutoscalerList) {
            this.AutoscalerList = new Array();
            for (let z in params.AutoscalerList) {
                let obj = new Autoscaler();
                obj.deserialize(params.AutoscalerList[z]);
                this.AutoscalerList.push(obj);
            }
        }
        this.Modifier = 'Modifier' in params ? params.Modifier : null;
        this.Creator = 'Creator' in params ? params.Creator : null;

        if (params.DeployStrategyConf) {
            let obj = new DeployStrategyConf();
            obj.deserialize(params.DeployStrategyConf)
            this.DeployStrategyConf = obj;
        }

        if (params.PodList) {
            let obj = new DescribeRunPodPage();
            obj.deserialize(params.PodList)
            this.PodList = obj;
        }
        this.ConfEdited = 'ConfEdited' in params ? params.ConfEdited : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.PreStopEncoded = 'PreStopEncoded' in params ? params.PreStopEncoded : null;
        this.PostStartEncoded = 'PostStartEncoded' in params ? params.PostStartEncoded : null;

    }
}

/**
 * Port mapping details
 * @class
 */
class ServicePortMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies how a layer-4 proxy is created.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Application name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * VIP for access within the environment
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterIp = null;

        /**
         * Cluster external IP
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExternalIp = null;

        /**
         * Subnet ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Load balancer ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalanceId = null;

        /**
         * YAML contents
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * List of exposed ports
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * Port mapping array 
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServicePortMappingItem> || null}
         */
        this.PortMappingItemList = null;

        /**
         * CLB domain name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExternalDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ClusterIp = 'ClusterIp' in params ? params.ClusterIp : null;
        this.ExternalIp = 'ExternalIp' in params ? params.ExternalIp : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.LoadBalanceId = 'LoadBalanceId' in params ? params.LoadBalanceId : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.Ports = 'Ports' in params ? params.Ports : null;

        if (params.PortMappingItemList) {
            this.PortMappingItemList = new Array();
            for (let z in params.PortMappingItemList) {
                let obj = new ServicePortMappingItem();
                obj.deserialize(params.PortMappingItemList[z]);
                this.PortMappingItemList.push(obj);
            }
        }
        this.ExternalDomain = 'ExternalDomain' in params ? params.ExternalDomain : null;

    }
}

/**
 * CreateCosToken request structure.
 * @class
 */
class CreateCosTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Package name
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * Operation type. 1: upload; 2: query
         * @type {number || null}
         */
        this.OptType = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Input parameter of `deployVersion`
         * @type {string || null}
         */
        this.TimeVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.OptType = 'OptType' in params ? params.OptType : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.TimeVersion = 'TimeVersion' in params ? params.TimeVersion : null;

    }
}

/**
 * ModifyApplicationAutoscaler request structure.
 * @class
 */
class ModifyApplicationAutoscalerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Scaling rule ID
         * @type {string || null}
         */
        this.AutoscalerId = null;

        /**
         * Auto scaling policy
         * @type {Autoscaler || null}
         */
        this.Autoscaler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.AutoscalerId = 'AutoscalerId' in params ? params.AutoscalerId : null;

        if (params.Autoscaler) {
            let obj = new Autoscaler();
            obj.deserialize(params.Autoscaler)
            this.Autoscaler = obj;
        }

    }
}

/**
 * ModifyConfigData response structure.
 * @class
 */
class ModifyConfigDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of the modification
         * @type {boolean || null}
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
 * ModifyIngress request structure.
 * @class
 */
class ModifyIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress rule configuration
         * @type {IngressInfo || null}
         */
        this.Ingress = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Ingress) {
            let obj = new IngressInfo();
            obj.deserialize(params.Ingress)
            this.Ingress = obj;
        }
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * Information of tags
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * The tag key.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * The tag value.
Note: This field may return null, indicating that no valid values can be obtained.
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
 * Enable Prometheus monitoring
 * @class
 */
class EnablePrometheusConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * The listening port of the applicaiton
         * @type {number || null}
         */
        this.Port = null;

        /**
         * URL path for monitoring
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * DescribeIngresses request structure.
 * @class
 */
class DescribeIngressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Environment namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Ingress rule name list
         * @type {Array.<string> || null}
         */
        this.IngressNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.IngressNames = 'IngressNames' in params ? params.IngressNames : null;

    }
}

/**
 * Data volume mount information
 * @class
 */
class StorageMountConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data volume name
         * @type {string || null}
         */
        this.VolumeName = null;

        /**
         * Data volume binding path
         * @type {string || null}
         */
        this.MountPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeName = 'VolumeName' in params ? params.VolumeName : null;
        this.MountPath = 'MountPath' in params ? params.MountPath : null;

    }
}

/**
 * CreateLogConfig request structure.
 * @class
 */
class CreateLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Collection type. Values: `container_stdout` (standard); `container_file` (file)
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log withdrawal mode. Values: `minimalist_log` (full text in a single line); `multiline_log` (full text in multiple lines); `json_log` (JSON); `fullregex_log` (regex in a single line); `multiline_fullregex_log` (regex in multiple lines)
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * The first line regex. It’s valid when `LogType` is `multiline_log`.
         * @type {string || null}
         */
        this.BeginningRegex = null;

        /**
         * Directory of files to collect. It’s valid when `InputType` is `container_file`.
         * @type {string || null}
         */
        this.LogPath = null;

        /**
         * Name pattern of files to collect. It’s valid when `InputType` is `container_file`.
         * @type {string || null}
         */
        this.FilePattern = null;

        /**
         * Export
         * @type {LogConfigExtractRule || null}
         */
        this.ExtractRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.BeginningRegex = 'BeginningRegex' in params ? params.BeginningRegex : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;
        this.FilePattern = 'FilePattern' in params ? params.FilePattern : null;

        if (params.ExtractRule) {
            let obj = new LogConfigExtractRule();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

    }
}

/**
 * RestartApplication response structure.
 * @class
 */
class RestartApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {boolean || null}
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
 * DescribeIngresses response structure.
 * @class
 */
class DescribeIngressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress array
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<IngressInfo> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new IngressInfo();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyConfigData request structure.
 * @class
 */
class ModifyConfigDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Configuration information
         * @type {Array.<Pair> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new Pair();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * CreateConfigData response structure.
 * @class
 */
class CreateConfigDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the creation is successful
         * @type {boolean || null}
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
 * DescribeApplicationsStatus request structure.
 * @class
 */
class DescribeApplicationsStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

    }
}

/**
 * DescribeIngress response structure.
 * @class
 */
class DescribeIngressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress rule configuration
         * @type {IngressInfo || null}
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

        if (params.Result) {
            let obj = new IngressInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Application pod
 * @class
 */
class RunVersionPod extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shell address
         * @type {string || null}
         */
        this.Webshell = null;

        /**
         * Pod ID
         * @type {string || null}
         */
        this.PodId = null;

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Pod IP
         * @type {string || null}
         */
        this.PodIp = null;

        /**
         * Availability zone
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Deployed version
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * Number of restarts
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * Whether the pod is ready
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Ready = null;

        /**
         * Container status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContainerState = null;

        /**
         * Information of the node whether the instance locates
Note: This field may return `null`, indicating that no valid value was found.
         * @type {NodeInfo || null}
         */
        this.NodeInfo = null;

        /**
         * Start time
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Whether the status is unhealthy or healthy
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.Unhealthy = null;

        /**
         * Warning message when the result is unhealthy
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.UnhealthyWarningMsg = null;

        /**
         * Version ID
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * Application name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Webshell = 'Webshell' in params ? params.Webshell : null;
        this.PodId = 'PodId' in params ? params.PodId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PodIp = 'PodIp' in params ? params.PodIp : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.Ready = 'Ready' in params ? params.Ready : null;
        this.ContainerState = 'ContainerState' in params ? params.ContainerState : null;

        if (params.NodeInfo) {
            let obj = new NodeInfo();
            obj.deserialize(params.NodeInfo)
            this.NodeInfo = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Unhealthy = 'Unhealthy' in params ? params.Unhealthy : null;
        this.UnhealthyWarningMsg = 'UnhealthyWarningMsg' in params ? params.UnhealthyWarningMsg : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;

    }
}

/**
 * CreateResource response structure.
 * @class
 */
class CreateResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * ModifyApplicationInfo response structure.
 * @class
 */
class ModifyApplicationInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success or not
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * RestartApplication request structure.
 * @class
 */
class RestartApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Retain as default
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

    }
}

/**
 * DestroyEnvironment response structure.
 * @class
 */
class DestroyEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {boolean || null}
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
 * DisableApplicationAutoscaler response structure.
 * @class
 */
class DisableApplicationAutoscalerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the action succeeded 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * DescribeIngress request structure.
 * @class
 */
class DescribeIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Environment namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * Ingress rule name
         * @type {string || null}
         */
        this.IngressName = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.IngressName = 'IngressName' in params ? params.IngressName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * StopApplication response structure.
 * @class
 */
class StopApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {boolean || null}
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
 * DeployApplication response structure.
 * @class
 */
class DeployApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version ID (which can be ignored for the frontend)
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
 * RestartApplicationPod response structure.
 * @class
 */
class RestartApplicationPodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * Processes stopped by the environment (Only applications stopped by the action of stopping the environment)
 * @class
 */
class TemEnvironmentStoppingStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of applications to stop
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ApplicationNumNeedToStop = null;

        /**
         * Number of stopped applications
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StoppedApplicationNum = null;

        /**
         * Number of applications failed to be stopped
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StopFailedApplicationNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationNumNeedToStop = 'ApplicationNumNeedToStop' in params ? params.ApplicationNumNeedToStop : null;
        this.StoppedApplicationNum = 'StoppedApplicationNum' in params ? params.StoppedApplicationNum : null;
        this.StopFailedApplicationNum = 'StopFailedApplicationNum' in params ? params.StopFailedApplicationNum : null;

    }
}

/**
 * DeleteApplication request structure.
 * @class
 */
class DeleteApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Whether to delete this application automatically when there is no running version.
         * @type {boolean || null}
         */
        this.DeleteApplicationIfNoRunningVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.DeleteApplicationIfNoRunningVersion = 'DeleteApplicationIfNoRunningVersion' in params ? params.DeleteApplicationIfNoRunningVersion : null;

    }
}

/**
 * CreateApplicationAutoscaler response structure.
 * @class
 */
class CreateApplicationAutoscalerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling rule ID
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * DeleteApplicationAutoscaler request structure.
 * @class
 */
class DeleteApplicationAutoscalerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Scaling rule ID
         * @type {string || null}
         */
        this.AutoscalerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.AutoscalerId = 'AutoscalerId' in params ? params.AutoscalerId : null;

    }
}

/**
 * DescribeApplicationAutoscalerList request structure.
 * @class
 */
class DescribeApplicationAutoscalerListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DescribeApplicationsStatus response structure.
 * @class
 */
class DescribeApplicationsStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {Array.<ServiceVersionBrief> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new ServiceVersionBrief();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of LogConfig
 * @class
 */
class LogConfigListPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<LogConfig> || null}
         */
        this.Records = null;

        /**
         * Paging cursor
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContinueToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new LogConfig();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.ContinueToken = 'ContinueToken' in params ? params.ContinueToken : null;

    }
}

/**
 * DeleteIngress request structure.
 * @class
 */
class DeleteIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Environment namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * Ingress rule name
         * @type {string || null}
         */
        this.IngressName = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.IngressName = 'IngressName' in params ? params.IngressName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DisableApplicationAutoscaler request structure.
 * @class
 */
class DisableApplicationAutoscalerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Scaling rule ID
         * @type {string || null}
         */
        this.AutoscalerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.AutoscalerId = 'AutoscalerId' in params ? params.AutoscalerId : null;

    }
}

/**
 * DescribeRelatedIngresses request structure.
 * @class
 */
class DescribeRelatedIngressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Environment namespace
         * @type {string || null}
         */
        this.ClusterNamespace = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Application ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterNamespace = 'ClusterNamespace' in params ? params.ClusterNamespace : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * Cos token
 * @class
 */
class CosToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique request ID
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * Bucket name
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Bucket region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Temporary key SecretId
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * Temporary key SecretKey
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * `sessionToken` of temporary key
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * Start time of temporary key acquisition
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * `ExpiredTime` of temporary key
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Full package path
         * @type {string || null}
         */
        this.FullPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.FullPath = 'FullPath' in params ? params.FullPath : null;

    }
}

/**
 * GenerateApplicationPackageDownloadUrl request structure.
 * @class
 */
class GenerateApplicationPackageDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Package name
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * Version of the package to download
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DescribeEnvironments response structure.
 * @class
 */
class DescribeEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result
         * @type {NamespacePage || null}
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

        if (params.Result) {
            let obj = new NamespacePage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplicationAutoscaler response structure.
 * @class
 */
class DeleteApplicationAutoscalerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the action is successful
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * DescribeRelatedIngresses response structure.
 * @class
 */
class DescribeRelatedIngressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress array
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<IngressInfo> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new IngressInfo();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnvironment request structure.
 * @class
 */
class DescribeEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DescribePagedLogConfigList request structure.
 * @class
 */
class DescribePagedLogConfigListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Application name
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Name of the rule
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Number of entries per page. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Paging cursor
         * @type {string || null}
         */
        this.ContinueToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ContinueToken = 'ContinueToken' in params ? params.ContinueToken : null;

    }
}

/**
 * Environment startup processes (Only applications started by the environment startup)
 * @class
 */
class TemEnvironmentStartingStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of applications to start
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ApplicationNumNeedToStart = null;

        /**
         * Number of started applictions
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartedApplicationNum = null;

        /**
         * Number of applications failed to be started
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartFailedApplicationNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationNumNeedToStart = 'ApplicationNumNeedToStart' in params ? params.ApplicationNumNeedToStart : null;
        this.StartedApplicationNum = 'StartedApplicationNum' in params ? params.StartedApplicationNum : null;
        this.StartFailedApplicationNum = 'StartFailedApplicationNum' in params ? params.StartFailedApplicationNum : null;

    }
}

/**
 * Application details
 * @class
 */
class TemService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Application name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Description
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * ID of the environment
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Creation time.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * Modification time
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifyDate = null;

        /**
         * Modifier
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Modifier = null;

        /**
         * Creator account
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * TCR Individual or TCR Enterprise
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RepoType = null;

        /**
         * ID of the TCR Enterprise instance
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Name of the TCR instance
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * Programming Language
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CodingLanguage = null;

        /**
         * Deployment mode
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * Environment name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * The instance information where the application is running
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServiceVersionBrief> || null}
         */
        this.ActiveVersions = null;

        /**
         * Whether to enable link tracing
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnableTracing = null;

        /**
         * Tag
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether it’s authorized to access the resource
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.HasAuthority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.ModifyDate = 'ModifyDate' in params ? params.ModifyDate : null;
        this.Modifier = 'Modifier' in params ? params.Modifier : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.CodingLanguage = 'CodingLanguage' in params ? params.CodingLanguage : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;

        if (params.ActiveVersions) {
            this.ActiveVersions = new Array();
            for (let z in params.ActiveVersions) {
                let obj = new ServiceVersionBrief();
                obj.deserialize(params.ActiveVersions[z]);
                this.ActiveVersions.push(obj);
            }
        }
        this.EnableTracing = 'EnableTracing' in params ? params.EnableTracing : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.HasAuthority = 'HasAuthority' in params ? params.HasAuthority : null;

    }
}

/**
 * Ingress rule configuration
 * @class
 */
class IngressRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * ingress rule value
         * @type {IngressRuleValue || null}
         */
        this.Http = null;

        /**
         * Host address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Protocol. Options include HTTP and HTTPS. The default option is HTTP.
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

        if (params.Http) {
            let obj = new IngressRuleValue();
            obj.deserialize(params.Http)
            this.Http = obj;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * Scheduled Scaling Policy
 * @class
 */
class CronHorizontalAutoscaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a scheduled scaling policy
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Policy period
"* * *" indicates three ranges. The first is day, the second month, and the third week. The three parts are separated by spaces.
Examples:
* * * (every day)
* * 0-3 (every Sunday through Wednesday)
1,11,21 * * (1st, 11th, and 21st of every month)
         * @type {string || null}
         */
        this.Period = null;

        /**
         * Details of a scheduled scaling policy
         * @type {Array.<CronHorizontalAutoscalerSchedule> || null}
         */
        this.Schedules = null;

        /**
         * Enabled or not
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Policy priority. The higher the value, the higher the priority. The minimum value is 0.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Period = 'Period' in params ? params.Period : null;

        if (params.Schedules) {
            this.Schedules = new Array();
            for (let z in params.Schedules) {
                let obj = new CronHorizontalAutoscalerSchedule();
                obj.deserialize(params.Schedules[z]);
                this.Schedules.push(obj);
            }
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * DescribeApplicationServiceList request structure.
 * @class
 */
class DescribeApplicationServiceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the environment
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * ID of the application
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * xx
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * Ingress rule value configuration
 * @class
 */
class IngressRuleValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Overall rule configuration
         * @type {Array.<IngressRulePath> || null}
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

        if (params.Paths) {
            this.Paths = new Array();
            for (let z in params.Paths) {
                let obj = new IngressRulePath();
                obj.deserialize(params.Paths[z]);
                this.Paths.push(obj);
            }
        }

    }
}

/**
 * DescribeEnvironment response structure.
 * @class
 */
class DescribeEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment information
         * @type {NamespaceInfo || null}
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

        if (params.Result) {
            let obj = new NamespaceInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Namespace object
 * @class
 */
class TemNamespaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Channel
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * Environment name
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Environment description
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Status. `1`: terminated; `0`: normal
         * @type {number || null}
         */
        this.Status = null;

        /**
         * VPC network
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifyDate = null;

        /**
         * Modifier
         * @type {string || null}
         */
        this.Modifier = null;

        /**
         * Creator
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * Number of applications
         * @type {number || null}
         */
        this.ApplicationNum = null;

        /**
         * Number of running instances
         * @type {number || null}
         */
        this.RunInstancesNum = null;

        /**
         * Subnet
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Environment cluster status
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * Whether to enable TSW
         * @type {boolean || null}
         */
        this.EnableTswTraceService = null;

        /**
         * Whether the environment is locked. `1`: locked; `0`: not locked
         * @type {number || null}
         */
        this.Locked = null;

        /**
         * User AppId
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User UIN
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * The UIN of sub-account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * Application ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Tag.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Whether it’s authorized to access the resource
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.HasAuthority = null;

        /**
         * Environment type. Values: `test`, `pre`, `prod`
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * Region code
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.ModifyDate = 'ModifyDate' in params ? params.ModifyDate : null;
        this.Modifier = 'Modifier' in params ? params.Modifier : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.ApplicationNum = 'ApplicationNum' in params ? params.ApplicationNum : null;
        this.RunInstancesNum = 'RunInstancesNum' in params ? params.RunInstancesNum : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.EnableTswTraceService = 'EnableTswTraceService' in params ? params.EnableTswTraceService : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.HasAuthority = 'HasAuthority' in params ? params.HasAuthority : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * CreateApplicationAutoscaler request structure.
 * @class
 */
class CreateApplicationAutoscalerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Auto scaling rule
         * @type {Autoscaler || null}
         */
        this.Autoscaler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

        if (params.Autoscaler) {
            let obj = new Autoscaler();
            obj.deserialize(params.Autoscaler)
            this.Autoscaler = obj;
        }

    }
}

/**
 * DeleteApplicationService response structure.
 * @class
 */
class DeleteApplicationServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the action succeeded 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * Configuration
 * @class
 */
class ConfigData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * List of associated applications
         * @type {Array.<TemService> || null}
         */
        this.RelatedApplications = null;

        /**
         * Configuration item
         * @type {Array.<Pair> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.RelatedApplications) {
            this.RelatedApplications = new Array();
            for (let z in params.RelatedApplications) {
                let obj = new TemService();
                obj.deserialize(params.RelatedApplications[z]);
                this.RelatedApplications.push(obj);
            }
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new Pair();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * DescribeConfigData request structure.
 * @class
 */
class DescribeConfigDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * Mounting configurations
 * @class
 */
class MountedSettingConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration name
         * @type {string || null}
         */
        this.ConfigDataName = null;

        /**
         * Mount point path
         * @type {string || null}
         */
        this.MountedPath = null;

        /**
         * Configuration content
         * @type {Array.<Pair> || null}
         */
        this.Data = null;

        /**
         * Encrypt configuration name
         * @type {string || null}
         */
        this.SecretDataName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigDataName = 'ConfigDataName' in params ? params.ConfigDataName : null;
        this.MountedPath = 'MountedPath' in params ? params.MountedPath : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new Pair();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.SecretDataName = 'SecretDataName' in params ? params.SecretDataName : null;

    }
}

/**
 * CreateLogConfig response structure.
 * @class
 */
class CreateLogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the creation is successful
         * @type {boolean || null}
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
 * DescribeConfigDataList response structure.
 * @class
 */
class DescribeConfigDataListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration list.
         * @type {DescribeConfigDataListPage || null}
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

        if (params.Result) {
            let obj = new DescribeConfigDataListPage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApplicationService request structure.
 * @class
 */
class ModifyApplicationServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Full access mode settings
         * @type {EksService || null}
         */
        this.Service = null;

        /**
         * Single entry access mode settings
         * @type {ServicePortMapping || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

        if (params.Service) {
            let obj = new EksService();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.Data) {
            let obj = new ServicePortMapping();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * DescribePagedLogConfigList response structure.
 * @class
 */
class DescribePagedLogConfigListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of log collecting configurations
         * @type {LogConfigListPage || null}
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

        if (params.Result) {
            let obj = new LogConfigListPage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Health check configuration
 * @class
 */
class HealthCheckConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check type. Valid values: `HttpGet`, `TcpSocket`, `Exec`
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The protocol type. It’s only valid when the health check type is `HttpGet`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The request path. It’s only valid when the health check type is `HttpGet`.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * The script to be executed. It’s only valid when the health check type is `Exec`.
         * @type {string || null}
         */
        this.Exec = null;

        /**
         * The request port. It’s only valid when the health check type is `HttpGet` or `TcpSocket `.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * The initial delay for health check in seconds. Default: `0`
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * Timeout period in seconds. Default: `1`
         * @type {number || null}
         */
        this.TimeoutSeconds = null;

        /**
         * Interval period in seconds. Default: `10`
         * @type {number || null}
         */
        this.PeriodSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Exec = 'Exec' in params ? params.Exec : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.TimeoutSeconds = 'TimeoutSeconds' in params ? params.TimeoutSeconds : null;
        this.PeriodSeconds = 'PeriodSeconds' in params ? params.PeriodSeconds : null;

    }
}

/**
 * Scaling rule
 * @class
 */
class Autoscaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum number of instances in a scaling group
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * Maximum number of instances in a scaling group
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * Policy of the scaling rule
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<HorizontalAutoscaler> || null}
         */
        this.HorizontalAutoscaler = null;

        /**
         * Scheduled auto-scaler policy
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<CronHorizontalAutoscaler> || null}
         */
        this.CronHorizontalAutoscaler = null;

        /**
         * Scaling rule ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AutoscalerId = null;

        /**
         * Scaling rule name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AutoscalerName = null;

        /**
         * Description of the scaling rule
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * Modification time
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifyDate = null;

        /**
         * Start Time
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnableDate = null;

        /**
         * Whether it is enabled
Note: This field may return `null`, indicating that no valid values can be obtained.
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
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;

        if (params.HorizontalAutoscaler) {
            this.HorizontalAutoscaler = new Array();
            for (let z in params.HorizontalAutoscaler) {
                let obj = new HorizontalAutoscaler();
                obj.deserialize(params.HorizontalAutoscaler[z]);
                this.HorizontalAutoscaler.push(obj);
            }
        }

        if (params.CronHorizontalAutoscaler) {
            this.CronHorizontalAutoscaler = new Array();
            for (let z in params.CronHorizontalAutoscaler) {
                let obj = new CronHorizontalAutoscaler();
                obj.deserialize(params.CronHorizontalAutoscaler[z]);
                this.CronHorizontalAutoscaler.push(obj);
            }
        }
        this.AutoscalerId = 'AutoscalerId' in params ? params.AutoscalerId : null;
        this.AutoscalerName = 'AutoscalerName' in params ? params.AutoscalerName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.ModifyDate = 'ModifyDate' in params ? params.ModifyDate : null;
        this.EnableDate = 'EnableDate' in params ? params.EnableDate : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * CreateConfigData request structure.
 * @class
 */
class CreateConfigDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Configuration information
         * @type {Array.<Pair> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new Pair();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * Query the list of configurations
 * @class
 */
class DescribeConfigDataListPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record
         * @type {Array.<ConfigData> || null}
         */
        this.Records = null;

        /**
         * Paging cursor
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContinueToken = null;

        /**
         * Remaining number
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RemainingCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new ConfigData();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.ContinueToken = 'ContinueToken' in params ? params.ContinueToken : null;
        this.RemainingCount = 'RemainingCount' in params ? params.RemainingCount : null;

    }
}

/**
 * DeployApplication request structure.
 * @class
 */
class DeployApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Number of initialized pods
         * @type {number || null}
         */
        this.InitPodNum = null;

        /**
         * CPU specification
         * @type {number || null}
         */
        this.CpuSpec = null;

        /**
         * Memory specification
         * @type {number || null}
         */
        this.MemorySpec = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Image repository
         * @type {string || null}
         */
        this.ImgRepo = null;

        /**
         * Version description
         * @type {string || null}
         */
        this.VersionDesc = null;

        /**
         * Launch parameters
         * @type {string || null}
         */
        this.JvmOpts = null;

        /**
         * Auto scaling configuration (This field is disused. Please use `HorizontalAutoscaler` to set the auto scaling policy.)
         * @type {EsInfo || null}
         */
        this.EsInfo = null;

        /**
         * Environment variable configuration
         * @type {Array.<Pair> || null}
         */
        this.EnvConf = null;

        /**
         * Log configuration
         * @type {Array.<string> || null}
         */
        this.LogConfs = null;

        /**
         * Data volume configuration
         * @type {Array.<StorageConf> || null}
         */
        this.StorageConfs = null;

        /**
         * Data volume mount configuration
         * @type {Array.<StorageMountConf> || null}
         */
        this.StorageMountConfs = null;

        /**
         * Deployment type
- JAR: deployment through JAR package
- WAR: deployment through WAR package
- IMAGE: deployment through image
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * When the deployment type is `IMAGE`, this parameter indicates the image tag
When the deployment type is `JAR` or `WAR`, this parameter indicates the package version number
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * Package name, which is required when using JAR or WAR packages for deployment
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * JDK version
- KONA: use KONA JDK
- OPEN: use open JDK
- KONA: use KONA JDK
- OPEN: use open JDK
         * @type {string || null}
         */
        this.JdkVersion = null;

        /**
         * Security group IDs
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Log output configuration
         * @type {LogOutputConf || null}
         */
        this.LogOutputConf = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Version description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Image command
         * @type {string || null}
         */
        this.ImageCommand = null;

        /**
         * Image command parameters
         * @type {Array.<string> || null}
         */
        this.ImageArgs = null;

        /**
         * Whether to add the registry's default configurations
         * @type {boolean || null}
         */
        this.UseRegistryDefaultConfig = null;

        /**
         * Mounting configurations
         * @type {Array.<MountedSettingConf> || null}
         */
        this.SettingConfs = null;

        /**
         * Application access configuration
         * @type {EksService || null}
         */
        this.Service = null;

        /**
         * ID of the version that you want to roll back to
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * The script to run after startup
         * @type {string || null}
         */
        this.PostStart = null;

        /**
         * The script to run before stop
         * @type {string || null}
         */
        this.PreStop = null;

        /**
         * Configuration of aliveness probe
         * @type {HealthCheckConfig || null}
         */
        this.Liveness = null;

        /**
         * Configuration of readiness probe
         * @type {HealthCheckConfig || null}
         */
        this.Readiness = null;

        /**
         * Configuration of batch release policies
         * @type {DeployStrategyConf || null}
         */
        this.DeployStrategyConf = null;

        /**
         * Auto scaling policy. (Disused. Please use APIs for auto scaling policy combinations)
         * @type {Array.<HorizontalAutoscaler> || null}
         */
        this.HorizontalAutoscaler = null;

        /**
         * Scheduled scaling policy (Disused. Please use APIs for auto scaling policy combinations)
         * @type {Array.<CronHorizontalAutoscaler> || null}
         */
        this.CronHorizontalAutoscaler = null;

        /**
         * Specifies whether to enable logging. `1`: enable; `0`: do not enable
         * @type {number || null}
         */
        this.LogEnable = null;

        /**
         * Whether the configuration is modified (except for the image configuration)
         * @type {boolean || null}
         */
        this.ConfEdited = null;

        /**
         * Whether the application acceleration is enabled 
         * @type {boolean || null}
         */
        this.SpeedUp = null;

        /**
         * Whether to enable probing
         * @type {HealthCheckConfig || null}
         */
        this.StartupProbe = null;

        /**
         * The version of the operating system
If `openjdk` is selected, the value can be: 
- ALPINE
- CENTOS
If `konajdk` is selected, the value can be: 
- ALPINE
- TENCENTOS
         * @type {string || null}
         */
        this.OsFlavour = null;

        /**
         * Configuration of metrics of this application
         * @type {EnablePrometheusConf || null}
         */
        this.EnablePrometheusConf = null;

        /**
         * `1`: Automatically enable APM tracing (Skywalking)
`0`: Disable APM tracing
         * @type {number || null}
         */
        this.EnableTracing = null;

        /**
         * `1`: Automatically enable metrics collection (open-telemetry)
`0`: Disable metrics collection
         * @type {number || null}
         */
        this.EnableMetrics = null;

        /**
         * ID of the TCR instance used for image deployment
         * @type {string || null}
         */
        this.TcrInstanceId = null;

        /**
         * Image server address for image deployment
         * @type {string || null}
         */
        this.RepoServer = null;

        /**
         * Type of the repository. `0`: TCR Personal; `1`: TCR Enterprise; `2`: Public repository; `3`: TEM hosted repository; `4`: Demo repository
         * @type {number || null}
         */
        this.RepoType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.InitPodNum = 'InitPodNum' in params ? params.InitPodNum : null;
        this.CpuSpec = 'CpuSpec' in params ? params.CpuSpec : null;
        this.MemorySpec = 'MemorySpec' in params ? params.MemorySpec : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ImgRepo = 'ImgRepo' in params ? params.ImgRepo : null;
        this.VersionDesc = 'VersionDesc' in params ? params.VersionDesc : null;
        this.JvmOpts = 'JvmOpts' in params ? params.JvmOpts : null;

        if (params.EsInfo) {
            let obj = new EsInfo();
            obj.deserialize(params.EsInfo)
            this.EsInfo = obj;
        }

        if (params.EnvConf) {
            this.EnvConf = new Array();
            for (let z in params.EnvConf) {
                let obj = new Pair();
                obj.deserialize(params.EnvConf[z]);
                this.EnvConf.push(obj);
            }
        }
        this.LogConfs = 'LogConfs' in params ? params.LogConfs : null;

        if (params.StorageConfs) {
            this.StorageConfs = new Array();
            for (let z in params.StorageConfs) {
                let obj = new StorageConf();
                obj.deserialize(params.StorageConfs[z]);
                this.StorageConfs.push(obj);
            }
        }

        if (params.StorageMountConfs) {
            this.StorageMountConfs = new Array();
            for (let z in params.StorageMountConfs) {
                let obj = new StorageMountConf();
                obj.deserialize(params.StorageMountConfs[z]);
                this.StorageMountConfs.push(obj);
            }
        }
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.JdkVersion = 'JdkVersion' in params ? params.JdkVersion : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.LogOutputConf) {
            let obj = new LogOutputConf();
            obj.deserialize(params.LogOutputConf)
            this.LogOutputConf = obj;
        }
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ImageCommand = 'ImageCommand' in params ? params.ImageCommand : null;
        this.ImageArgs = 'ImageArgs' in params ? params.ImageArgs : null;
        this.UseRegistryDefaultConfig = 'UseRegistryDefaultConfig' in params ? params.UseRegistryDefaultConfig : null;

        if (params.SettingConfs) {
            this.SettingConfs = new Array();
            for (let z in params.SettingConfs) {
                let obj = new MountedSettingConf();
                obj.deserialize(params.SettingConfs[z]);
                this.SettingConfs.push(obj);
            }
        }

        if (params.Service) {
            let obj = new EksService();
            obj.deserialize(params.Service)
            this.Service = obj;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.PostStart = 'PostStart' in params ? params.PostStart : null;
        this.PreStop = 'PreStop' in params ? params.PreStop : null;

        if (params.Liveness) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.Liveness)
            this.Liveness = obj;
        }

        if (params.Readiness) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.Readiness)
            this.Readiness = obj;
        }

        if (params.DeployStrategyConf) {
            let obj = new DeployStrategyConf();
            obj.deserialize(params.DeployStrategyConf)
            this.DeployStrategyConf = obj;
        }

        if (params.HorizontalAutoscaler) {
            this.HorizontalAutoscaler = new Array();
            for (let z in params.HorizontalAutoscaler) {
                let obj = new HorizontalAutoscaler();
                obj.deserialize(params.HorizontalAutoscaler[z]);
                this.HorizontalAutoscaler.push(obj);
            }
        }

        if (params.CronHorizontalAutoscaler) {
            this.CronHorizontalAutoscaler = new Array();
            for (let z in params.CronHorizontalAutoscaler) {
                let obj = new CronHorizontalAutoscaler();
                obj.deserialize(params.CronHorizontalAutoscaler[z]);
                this.CronHorizontalAutoscaler.push(obj);
            }
        }
        this.LogEnable = 'LogEnable' in params ? params.LogEnable : null;
        this.ConfEdited = 'ConfEdited' in params ? params.ConfEdited : null;
        this.SpeedUp = 'SpeedUp' in params ? params.SpeedUp : null;

        if (params.StartupProbe) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.StartupProbe)
            this.StartupProbe = obj;
        }
        this.OsFlavour = 'OsFlavour' in params ? params.OsFlavour : null;

        if (params.EnablePrometheusConf) {
            let obj = new EnablePrometheusConf();
            obj.deserialize(params.EnablePrometheusConf)
            this.EnablePrometheusConf = obj;
        }
        this.EnableTracing = 'EnableTracing' in params ? params.EnableTracing : null;
        this.EnableMetrics = 'EnableMetrics' in params ? params.EnableMetrics : null;
        this.TcrInstanceId = 'TcrInstanceId' in params ? params.TcrInstanceId : null;
        this.RepoServer = 'RepoServer' in params ? params.RepoServer : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;

    }
}

/**
 * DescribeApplicationAutoscalerList response structure.
 * @class
 */
class DescribeApplicationAutoscalerListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scaling rule
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Autoscaler> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new Autoscaler();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyConfigData request structure.
 * @class
 */
class DestroyConfigDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * DestroyConfigData response structure.
 * @class
 */
class DestroyConfigDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned result.
         * @type {boolean || null}
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
 * DescribeApplications request structure.
 * @class
 */
class DescribeApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the environment
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Pagination limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Keyword for searching.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Filters for query 
         * @type {Array.<QueryFilter> || null}
         */
        this.Filters = null;

        /**
         * Sorting field
         * @type {SortType || null}
         */
        this.SortInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.SortInfo) {
            let obj = new SortType();
            obj.deserialize(params.SortInfo)
            this.SortInfo = obj;
        }

    }
}

/**
 * DescribeApplicationInfo request structure.
 * @class
 */
class DescribeApplicationInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

    }
}

/**
 * CreateApplication request structure.
 * @class
 */
class CreateApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application name
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether to use the default image service. `1`: yes; `0`: no
         * @type {number || null}
         */
        this.UseDefaultImageService = null;

        /**
         * Type of the bound repository. `0`: TCR Personal; `1`: TCR Enterprise
         * @type {number || null}
         */
        this.RepoType = null;

        /**
         * TCR Enterprise instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Address of the bound image server
         * @type {string || null}
         */
        this.RepoServer = null;

        /**
         * Name of the bound image repository
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Application subnet
         * @type {Array.<string> || null}
         */
        this.SubnetList = null;

        /**
         * Programming language 
- JAVA
- OTHER
         * @type {string || null}
         */
        this.CodingLanguage = null;

        /**
         * Deployment mode 
- IMAGE
- JAR
- WAR
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * Whether to enable APM tracing for the Java application. `1`: Enable, `0`: Disable
         * @type {number || null}
         */
        this.EnableTracing = null;

        /**
         * Parameters of the default image service
         * @type {UseDefaultRepoParameters || null}
         */
        this.UseDefaultImageServiceParameters = null;

        /**
         * Tag
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
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UseDefaultImageService = 'UseDefaultImageService' in params ? params.UseDefaultImageService : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RepoServer = 'RepoServer' in params ? params.RepoServer : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.SubnetList = 'SubnetList' in params ? params.SubnetList : null;
        this.CodingLanguage = 'CodingLanguage' in params ? params.CodingLanguage : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.EnableTracing = 'EnableTracing' in params ? params.EnableTracing : null;

        if (params.UseDefaultImageServiceParameters) {
            let obj = new UseDefaultRepoParameters();
            obj.deserialize(params.UseDefaultImageServiceParameters)
            this.UseDefaultImageServiceParameters = obj;
        }

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
 * Environment status
 * @class
 */
class NamespaceStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the environment
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Environment name
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * TCB envId | EKS clusterId
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Environment status
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * Whether the environment is being started. `null` is returned if it’s not being started.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {TemEnvironmentStartingStatus || null}
         */
        this.EnvironmentStartingStatus = null;

        /**
         * Whether the environment is being stopped. `null` is returned if it’s not being stopped.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {TemEnvironmentStoppingStatus || null}
         */
        this.EnvironmentStoppingStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;

        if (params.EnvironmentStartingStatus) {
            let obj = new TemEnvironmentStartingStatus();
            obj.deserialize(params.EnvironmentStartingStatus)
            this.EnvironmentStartingStatus = obj;
        }

        if (params.EnvironmentStoppingStatus) {
            let obj = new TemEnvironmentStoppingStatus();
            obj.deserialize(params.EnvironmentStoppingStatus)
            this.EnvironmentStoppingStatus = obj;
        }

    }
}

/**
 * Version pod list
 * @class
 */
class DescribeRunPodPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of records per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Total number of returned records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Request ID
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * List of pods
         * @type {Array.<RunVersionPod> || null}
         */
        this.PodList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

        if (params.PodList) {
            this.PodList = new Array();
            for (let z in params.PodList) {
                let obj = new RunVersionPod();
                obj.deserialize(params.PodList[z]);
                this.PodList.push(obj);
            }
        }

    }
}

/**
 * CreateApplicationService request structure.
 * @class
 */
class CreateApplicationServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Details of the access policy
         * @type {ServicePortMapping || null}
         */
        this.Service = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

        if (params.Service) {
            let obj = new ServicePortMapping();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

    }
}

/**
 * Repository parameters 
 * @class
 */
class UseDefaultRepoParameters extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCR Enterprise instance name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnterpriseInstanceName = null;

        /**
         * TCR Enterprise billing mode. `0`: Pay-as-you-go 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnterpriseInstanceChargeType = null;

        /**
         * Edition of the TCR Enterprise. Values: `basic`, `standard`, `premium` (Advanced edition)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnterpriseInstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnterpriseInstanceName = 'EnterpriseInstanceName' in params ? params.EnterpriseInstanceName : null;
        this.EnterpriseInstanceChargeType = 'EnterpriseInstanceChargeType' in params ? params.EnterpriseInstanceChargeType : null;
        this.EnterpriseInstanceType = 'EnterpriseInstanceType' in params ? params.EnterpriseInstanceType : null;

    }
}

/**
 * Details of a scheduled scaling policy
 * @class
 */
class CronHorizontalAutoscalerSchedule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Triggering time, in the format of HH:MM
Example:
00:00 (Trigger at midnight)
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * Number of target pods (less than 50)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetReplicas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.TargetReplicas = 'TargetReplicas' in params ? params.TargetReplicas : null;

    }
}

/**
 * GenerateApplicationPackageDownloadUrl response structure.
 * @class
 */
class GenerateApplicationPackageDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temp download URL for the package
Note: this field may return `null`, indicating that no valid values can be obtained.
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
 * Ingress rule backend configuration
 * @class
 */
class IngressRuleBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * EKS service name
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * EKS service port
         * @type {number || null}
         */
        this.ServicePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServicePort = 'ServicePort' in params ? params.ServicePort : null;

    }
}

/**
 * CreateApplicationService response structure.
 * @class
 */
class CreateApplicationServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the action succeeded 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * Workload details
 * @class
 */
class WorkloadInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The resource ID.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Application name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Version name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Number of ready replicas
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReadyReplicas = null;

        /**
         * Number of replicas
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * Number of updated replicas
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.UpdatedReplicas = null;

        /**
         * Number of replicas ready for update
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.UpdatedReadyReplicas = null;

        /**
         * ## Version Updates
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.UpdateRevision = null;

        /**
         * Current Version
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.CurrentRevision = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.ReadyReplicas = 'ReadyReplicas' in params ? params.ReadyReplicas : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.UpdatedReplicas = 'UpdatedReplicas' in params ? params.UpdatedReplicas : null;
        this.UpdatedReadyReplicas = 'UpdatedReadyReplicas' in params ? params.UpdatedReadyReplicas : null;
        this.UpdateRevision = 'UpdateRevision' in params ? params.UpdateRevision : null;
        this.CurrentRevision = 'CurrentRevision' in params ? params.CurrentRevision : null;

    }
}

/**
 * Ingress rule path configuration
 * @class
 */
class IngressRulePath extends  AbstractModel {
    constructor(){
        super();

        /**
         * Path information
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Backend configuration
         * @type {IngressRuleBackend || null}
         */
        this.Backend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Backend) {
            let obj = new IngressRuleBackend();
            obj.deserialize(params.Backend)
            this.Backend = obj;
        }

    }
}

/**
 * Basic information of the namespace
 * @class
 */
class NamespaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * (Disused) Name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * vpc id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Array of subnet IDs
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedDate = null;

        /**
         * Environment name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * APM instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApmInstanceId = null;

        /**
         * Whether the environment is locked. `1`: Locked, `0`: Not locked
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Locked = null;

        /**
         * Tag
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Environment type. Values: `test`, `pre`, `prod`
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.EnvType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ApmInstanceId = 'ApmInstanceId' in params ? params.ApmInstanceId : null;
        this.Locked = 'Locked' in params ? params.Locked : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

    }
}

/**
 * DescribeLogConfig response structure.
 * @class
 */
class DescribeLogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration
         * @type {LogConfig || null}
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

        if (params.Result) {
            let obj = new LogConfig();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Application port mapping
 * @class
 */
class ServicePortMappingItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application access port
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Application listening port
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * Protocol type
Note: This field may return `null`, indicating that no valid values can be obtained.
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
        this.Port = 'Port' in params ? params.Port : null;
        this.TargetPort = 'TargetPort' in params ? params.TargetPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * Query filter
 * @class
 */
class SortType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the sorting field
         * @type {string || null}
         */
        this.Key = null;

        /**
         * `0`: Ascending; `1`: Descending 
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateApplication response structure.
 * @class
 */
class CreateApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the created application
         * @type {string || null}
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
 * Auto scaling policy
 * @class
 */
class HorizontalAutoscaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * (Optional) Minimum number of instances
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * (Optional) Maximum number of instances
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * Metric measurement
`CPU`: CPU utilization (%)
`MEMORY`: Memory utilization (%)
`CPU_CORE_USED`: CPU usage (core)
`MEMORY_SIZE_USED`: Memory usage (MiB)
`NETWORK_BANDWIDTH_RECEIVE`: Network bandwidth in (Mbps)
`NETWORK_BANDWIDTH_TRANSMIT`: Network bandwidth out (Mbps)
`NETWORK_TRAFFIC_RECEIVE`: Network traffic in (MiB/s)
`NETWORK_TRAFFIC_TRANSMIT`: Network traffic  out (MiB/s)
`NETWORK_PACKETS_RECEIVE`: Network packets in (packets/sec)
`NETWORK_PACKETS_TRANSMIT`: Network packets out (packets/sec)
`FS_IOPS_WRITE`: Disk writes (count/sec)
`FS_IOPS_READ`: Disk reads (count/sec)
`FS_SIZE_WRITE`: Disk write size (MiB/s)
`FS_SIZE_READ`: Disk read size (MiB/s)
         * @type {string || null}
         */
        this.Metrics = null;

        /**
         * The value of threshold (integer)
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * Whether it is enabled
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * The value of threshold (demical)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DoubleThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.DoubleThreshold = 'DoubleThreshold' in params ? params.DoubleThreshold : null;

    }
}

/**
 * ModifyApplicationService response structure.
 * @class
 */
class ModifyApplicationServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the action succeeded 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * Service port mapping
 * @class
 */
class PortMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Mapped port
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * TCP/UDP protocol stack.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * K8s service name
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.TargetPort = 'TargetPort' in params ? params.TargetPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * Log collection configuration
 * @class
 */
class LogConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Collection type. Values: `container_stdout` (standard); `container_file` (file)
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * Logset ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Log withdrawal mode. Values: `minimalist_log` (full text in a single line); `multiline_log` (full text in multiple lines); `fullregex_log` (regex in a single line); `multiline_fullregex_log` (regex in multiple lines), `json_log` (JSON); 
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * First line regex. It’s valid when `LogType` is `multiline_log` or `multiline_fullregex_log`.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.BeginningRegex = null;

        /**
         * Directory of files to collect. It’s valid when `InputType` is `container_file`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogPath = null;

        /**
         * Name pattern of files to collect. It’s valid when `InputType` is `container_file`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FilePattern = null;

        /**
         * Creation time.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * Update time
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifyDate = null;

        /**
         * Application ID
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Application name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Export rules
Note: This field may return `null`, indicating that no valid value was found.
         * @type {LogConfigExtractRule || null}
         */
        this.ExtractRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.BeginningRegex = 'BeginningRegex' in params ? params.BeginningRegex : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;
        this.FilePattern = 'FilePattern' in params ? params.FilePattern : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.ModifyDate = 'ModifyDate' in params ? params.ModifyDate : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;

        if (params.ExtractRule) {
            let obj = new LogConfigExtractRule();
            obj.deserialize(params.ExtractRule)
            this.ExtractRule = obj;
        }

    }
}

/**
 * ModifyEnvironment response structure.
 * @class
 */
class ModifyEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID in case of success and `null` in case of failure
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
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
 * ModifyLogConfig request structure.
 * @class
 */
class ModifyLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Log collector configuration
         * @type {LogConfig || null}
         */
        this.Data = null;

        /**
         * Application ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Data) {
            let obj = new LogConfig();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DestroyLogConfig request structure.
 * @class
 */
class DestroyLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Application ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * EnableApplicationAutoscaler request structure.
 * @class
 */
class EnableApplicationAutoscalerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Environment ID
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Source channel. Please keep the default value.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Scaling rule ID
         * @type {string || null}
         */
        this.AutoscalerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.AutoscalerId = 'AutoscalerId' in params ? params.AutoscalerId : null;

    }
}

/**
 * EKS service information
 * @class
 */
class EksService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Available ports
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * Yaml contents
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * Service name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Version name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Private IP
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ClusterIp = null;

        /**
         * Public IP
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExternalIp = null;

        /**
         * The access type. Valid values:
- EXTERNAL (internet access)
- VPC (Intra-VPC access)
- CLUSTER (Intra-cluster access)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Subnet ID. It is filled when the access type is `VPC`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Load balancer ID. It is filled when the access type is `EXTERNAL` or `CLUSTER`. It’s created automatically by default.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalanceId = null;

        /**
         * Port mapping
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<PortMapping> || null}
         */
        this.PortMappings = null;

        /**
         * Details of each type of access configuration
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServicePortMapping> || null}
         */
        this.ServicePortMappingList = null;

        /**
         * Flush all types
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.FlushAll = null;

        /**
         * `0`: Do not inject. `1`: Inject registry information automatically for the next deployment
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnableRegistryNextDeploy = null;

        /**
         * The application ID returned.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Whether all the application IPs are ready
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.AllIpDone = null;

        /**
         * CLB domain name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExternalDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.ClusterIp = 'ClusterIp' in params ? params.ClusterIp : null;
        this.ExternalIp = 'ExternalIp' in params ? params.ExternalIp : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.LoadBalanceId = 'LoadBalanceId' in params ? params.LoadBalanceId : null;

        if (params.PortMappings) {
            this.PortMappings = new Array();
            for (let z in params.PortMappings) {
                let obj = new PortMapping();
                obj.deserialize(params.PortMappings[z]);
                this.PortMappings.push(obj);
            }
        }

        if (params.ServicePortMappingList) {
            this.ServicePortMappingList = new Array();
            for (let z in params.ServicePortMappingList) {
                let obj = new ServicePortMapping();
                obj.deserialize(params.ServicePortMappingList[z]);
                this.ServicePortMappingList.push(obj);
            }
        }
        this.FlushAll = 'FlushAll' in params ? params.FlushAll : null;
        this.EnableRegistryNextDeploy = 'EnableRegistryNextDeploy' in params ? params.EnableRegistryNextDeploy : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.AllIpDone = 'AllIpDone' in params ? params.AllIpDone : null;
        this.ExternalDomain = 'ExternalDomain' in params ? params.ExternalDomain : null;

    }
}

/**
 * Key value pair
 * @class
 */
class Pair extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * `default``: Custom. `reserved`: System variable. `referenced`: Referenced configuration item.
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Configuration name
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Config = null;

        /**
         * Encrypt configuration name
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Secret = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.Secret = 'Secret' in params ? params.Secret : null;

    }
}

module.exports = {
    CreateResourceRequest: CreateResourceRequest,
    DescribeConfigDataResponse: DescribeConfigDataResponse,
    NamespacePage: NamespacePage,
    DescribeApplicationPodsResponse: DescribeApplicationPodsResponse,
    ModifyIngressResponse: ModifyIngressResponse,
    DeleteApplicationServiceRequest: DeleteApplicationServiceRequest,
    RestartApplicationPodRequest: RestartApplicationPodRequest,
    DestroyLogConfigResponse: DestroyLogConfigResponse,
    QueryFilter: QueryFilter,
    StorageConf: StorageConf,
    DescribeApplicationPodsRequest: DescribeApplicationPodsRequest,
    IngressTls: IngressTls,
    LogOutputConf: LogOutputConf,
    DeleteIngressResponse: DeleteIngressResponse,
    DeleteApplicationResponse: DeleteApplicationResponse,
    ModifyApplicationAutoscalerResponse: ModifyApplicationAutoscalerResponse,
    RollingUpdateApplicationByVersionRequest: RollingUpdateApplicationByVersionRequest,
    CreateCosTokenResponse: CreateCosTokenResponse,
    ModifyLogConfigResponse: ModifyLogConfigResponse,
    RollingUpdateApplicationByVersionResponse: RollingUpdateApplicationByVersionResponse,
    StopApplicationRequest: StopApplicationRequest,
    ModifyApplicationInfoRequest: ModifyApplicationInfoRequest,
    DestroyEnvironmentRequest: DestroyEnvironmentRequest,
    CreateEnvironmentResponse: CreateEnvironmentResponse,
    DescribeEnvironmentStatusRequest: DescribeEnvironmentStatusRequest,
    DeployStrategyConf: DeployStrategyConf,
    DescribeApplicationsResponse: DescribeApplicationsResponse,
    IngressInfo: IngressInfo,
    DescribeEnvironmentsRequest: DescribeEnvironmentsRequest,
    ModifyEnvironmentRequest: ModifyEnvironmentRequest,
    ServiceVersionBrief: ServiceVersionBrief,
    LogConfigExtractRule: LogConfigExtractRule,
    CreateEnvironmentRequest: CreateEnvironmentRequest,
    NodeInfo: NodeInfo,
    DescribeApplicationServiceListResponse: DescribeApplicationServiceListResponse,
    DescribeLogConfigRequest: DescribeLogConfigRequest,
    DescribeEnvironmentStatusResponse: DescribeEnvironmentStatusResponse,
    EsInfo: EsInfo,
    DescribeApplicationInfoResponse: DescribeApplicationInfoResponse,
    DescribeConfigDataListRequest: DescribeConfigDataListRequest,
    EnableApplicationAutoscalerResponse: EnableApplicationAutoscalerResponse,
    ServicePage: ServicePage,
    TemServiceVersionInfo: TemServiceVersionInfo,
    ServicePortMapping: ServicePortMapping,
    CreateCosTokenRequest: CreateCosTokenRequest,
    ModifyApplicationAutoscalerRequest: ModifyApplicationAutoscalerRequest,
    ModifyConfigDataResponse: ModifyConfigDataResponse,
    ModifyIngressRequest: ModifyIngressRequest,
    Tag: Tag,
    EnablePrometheusConf: EnablePrometheusConf,
    DescribeIngressesRequest: DescribeIngressesRequest,
    StorageMountConf: StorageMountConf,
    CreateLogConfigRequest: CreateLogConfigRequest,
    RestartApplicationResponse: RestartApplicationResponse,
    DescribeIngressesResponse: DescribeIngressesResponse,
    ModifyConfigDataRequest: ModifyConfigDataRequest,
    CreateConfigDataResponse: CreateConfigDataResponse,
    DescribeApplicationsStatusRequest: DescribeApplicationsStatusRequest,
    DescribeIngressResponse: DescribeIngressResponse,
    RunVersionPod: RunVersionPod,
    CreateResourceResponse: CreateResourceResponse,
    ModifyApplicationInfoResponse: ModifyApplicationInfoResponse,
    RestartApplicationRequest: RestartApplicationRequest,
    DestroyEnvironmentResponse: DestroyEnvironmentResponse,
    DisableApplicationAutoscalerResponse: DisableApplicationAutoscalerResponse,
    DescribeIngressRequest: DescribeIngressRequest,
    StopApplicationResponse: StopApplicationResponse,
    DeployApplicationResponse: DeployApplicationResponse,
    RestartApplicationPodResponse: RestartApplicationPodResponse,
    TemEnvironmentStoppingStatus: TemEnvironmentStoppingStatus,
    DeleteApplicationRequest: DeleteApplicationRequest,
    CreateApplicationAutoscalerResponse: CreateApplicationAutoscalerResponse,
    DeleteApplicationAutoscalerRequest: DeleteApplicationAutoscalerRequest,
    DescribeApplicationAutoscalerListRequest: DescribeApplicationAutoscalerListRequest,
    DescribeApplicationsStatusResponse: DescribeApplicationsStatusResponse,
    LogConfigListPage: LogConfigListPage,
    DeleteIngressRequest: DeleteIngressRequest,
    DisableApplicationAutoscalerRequest: DisableApplicationAutoscalerRequest,
    DescribeRelatedIngressesRequest: DescribeRelatedIngressesRequest,
    CosToken: CosToken,
    GenerateApplicationPackageDownloadUrlRequest: GenerateApplicationPackageDownloadUrlRequest,
    DescribeEnvironmentsResponse: DescribeEnvironmentsResponse,
    DeleteApplicationAutoscalerResponse: DeleteApplicationAutoscalerResponse,
    DescribeRelatedIngressesResponse: DescribeRelatedIngressesResponse,
    DescribeEnvironmentRequest: DescribeEnvironmentRequest,
    DescribePagedLogConfigListRequest: DescribePagedLogConfigListRequest,
    TemEnvironmentStartingStatus: TemEnvironmentStartingStatus,
    TemService: TemService,
    IngressRule: IngressRule,
    CronHorizontalAutoscaler: CronHorizontalAutoscaler,
    DescribeApplicationServiceListRequest: DescribeApplicationServiceListRequest,
    IngressRuleValue: IngressRuleValue,
    DescribeEnvironmentResponse: DescribeEnvironmentResponse,
    TemNamespaceInfo: TemNamespaceInfo,
    CreateApplicationAutoscalerRequest: CreateApplicationAutoscalerRequest,
    DeleteApplicationServiceResponse: DeleteApplicationServiceResponse,
    ConfigData: ConfigData,
    DescribeConfigDataRequest: DescribeConfigDataRequest,
    MountedSettingConf: MountedSettingConf,
    CreateLogConfigResponse: CreateLogConfigResponse,
    DescribeConfigDataListResponse: DescribeConfigDataListResponse,
    ModifyApplicationServiceRequest: ModifyApplicationServiceRequest,
    DescribePagedLogConfigListResponse: DescribePagedLogConfigListResponse,
    HealthCheckConfig: HealthCheckConfig,
    Autoscaler: Autoscaler,
    CreateConfigDataRequest: CreateConfigDataRequest,
    DescribeConfigDataListPage: DescribeConfigDataListPage,
    DeployApplicationRequest: DeployApplicationRequest,
    DescribeApplicationAutoscalerListResponse: DescribeApplicationAutoscalerListResponse,
    DestroyConfigDataRequest: DestroyConfigDataRequest,
    DestroyConfigDataResponse: DestroyConfigDataResponse,
    DescribeApplicationsRequest: DescribeApplicationsRequest,
    DescribeApplicationInfoRequest: DescribeApplicationInfoRequest,
    CreateApplicationRequest: CreateApplicationRequest,
    NamespaceStatusInfo: NamespaceStatusInfo,
    DescribeRunPodPage: DescribeRunPodPage,
    CreateApplicationServiceRequest: CreateApplicationServiceRequest,
    UseDefaultRepoParameters: UseDefaultRepoParameters,
    CronHorizontalAutoscalerSchedule: CronHorizontalAutoscalerSchedule,
    GenerateApplicationPackageDownloadUrlResponse: GenerateApplicationPackageDownloadUrlResponse,
    IngressRuleBackend: IngressRuleBackend,
    CreateApplicationServiceResponse: CreateApplicationServiceResponse,
    WorkloadInfo: WorkloadInfo,
    IngressRulePath: IngressRulePath,
    NamespaceInfo: NamespaceInfo,
    DescribeLogConfigResponse: DescribeLogConfigResponse,
    ServicePortMappingItem: ServicePortMappingItem,
    SortType: SortType,
    CreateApplicationResponse: CreateApplicationResponse,
    HorizontalAutoscaler: HorizontalAutoscaler,
    ModifyApplicationServiceResponse: ModifyApplicationServiceResponse,
    PortMapping: PortMapping,
    LogConfig: LogConfig,
    ModifyEnvironmentResponse: ModifyEnvironmentResponse,
    ModifyLogConfigRequest: ModifyLogConfigRequest,
    DestroyLogConfigRequest: DestroyLogConfigRequest,
    EnableApplicationAutoscalerRequest: EnableApplicationAutoscalerRequest,
    EksService: EksService,
    Pair: Pair,

}
