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
 * Mounting configuration information 
 * @class
 */
class MountedSettingConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration Name
         * @type {string || null}
         */
        this.ConfigDataName = null;

        /**
         * Mount point path
         * @type {string || null}
         */
        this.MountedPath = null;

        /**
         * Configuration Content
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

    }
}

/**
 * ModifyServiceInfo response structure.
 * @class
 */
class ModifyServiceInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Results.
Note: this field may return `null`, indicating that no valid value can be obtained.
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
 * CreateResource request structure.
 * @class
 */
class CreateResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Resource type. Valid values: CFS (file system), CLS (log service), TSE_SRE (registry)
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateServiceV2 response structure.
 * @class
 */
class CreateServiceV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service code
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
 * CreateCosTokenV2 request structure.
 * @class
 */
class CreateCosTokenV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Package name
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * optType. 1: upload; 2: query
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.OptType = 'OptType' in params ? params.OptType : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.TimeVersion = 'TimeVersion' in params ? params.TimeVersion : null;

    }
}

/**
 * DeployServiceV2 response structure.
 * @class
 */
class DeployServiceV2Response extends  AbstractModel {
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
 * DescribeNamespaces response structure.
 * @class
 */
class DescribeNamespacesResponse extends  AbstractModel {
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
         * Mapped port.
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * TCP/UDP protocol stack.
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
 * RestartServiceRunPod request structure.
 * @class
 */
class RestartServiceRunPodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID.
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Pod name.
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * Number of items per page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pod status.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Source channel.
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
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

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
         * Created successfully
Note: this field may return null, indicating that no valid values can be obtained.
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
 * DeleteIngress request structure.
 * @class
 */
class DeleteIngressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * tem NamespaceId
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * EKS namespace name
         * @type {string || null}
         */
        this.EksNamespace = null;

        /**
         * Ingress rule name
         * @type {string || null}
         */
        this.Name = null;

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
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.EksNamespace = 'EksNamespace' in params ? params.EksNamespace : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * ModifyServiceInfo request structure.
 * @class
 */
class ModifyServiceInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Source channel.
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateNamespace response structure.
 * @class
 */
class CreateNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace ID in case of success and `null` in case of failure
Note: this field may return null, indicating that no valid values can be obtained.
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
 * DescribeRelatedIngresses request structure.
 * @class
 */
class DescribeRelatedIngressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID.
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * EKS namespace.
         * @type {string || null}
         */
        this.EksNamespace = null;

        /**
         * Source channel.
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.EksNamespace = 'EksNamespace' in params ? params.EksNamespace : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

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
         * `SecretId` of temporary key
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * `SecretKey` of temporary key
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * `sessionToken` of temporary key
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * `StartTime` of temporary key acquisition
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
 * DescribeNamespaces request structure.
 * @class
 */
class DescribeNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of items per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Source
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * GenerateDownloadUrl response structure.
 * @class
 */
class GenerateDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temp download URL for the package
Note: this field may return `null`, indicating that no valid value can be obtained.
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
 * DeployServiceV2 request structure.
 * @class
 */
class DeployServiceV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Container port
         * @type {number || null}
         */
        this.ContainerPort = null;

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
        this.NamespaceId = null;

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
         * Auto scaling configuration. If this parameter is left empty, auto scaling will not be enabled
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
         * Deployment type.
- JAR: deployment through JAR package
- WAR: deployment through WAR package
- IMAGE: deployment through image
         * @type {string || null}
         */
        this.DeployMode = null;

        /**
         * When the deployment type is `IMAGE`, this parameter indicates the image tag.
When the deployment type is `JAR` or `WAR`, this parameter indicates the package version number.
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * Package name, which is required when using JAR or WAR packages for deployment.
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * JDK version.
- KONA: use KONA JDK.
- OPEN: use open JDK.
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
         * Service port mapping.
         * @type {Array.<PortMapping> || null}
         */
        this.PortMappings = null;

        /**
         * Whether to add the registry’s default configurations.
         * @type {boolean || null}
         */
        this.UseRegistryDefaultConfig = null;

        /**
         * Mounting configurations
         * @type {Array.<MountedSettingConf> || null}
         */
        this.SettingConfs = null;

        /**
         * EKS access configuration
         * @type {EksService || null}
         */
        this.EksService = null;

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
         * Configuration of 
         * @type {DeployStrategyConf || null}
         */
        this.DeployStrategyConf = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ContainerPort = 'ContainerPort' in params ? params.ContainerPort : null;
        this.InitPodNum = 'InitPodNum' in params ? params.InitPodNum : null;
        this.CpuSpec = 'CpuSpec' in params ? params.CpuSpec : null;
        this.MemorySpec = 'MemorySpec' in params ? params.MemorySpec : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
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

        if (params.PortMappings) {
            this.PortMappings = new Array();
            for (let z in params.PortMappings) {
                let obj = new PortMapping();
                obj.deserialize(params.PortMappings[z]);
                this.PortMappings.push(obj);
            }
        }
        this.UseRegistryDefaultConfig = 'UseRegistryDefaultConfig' in params ? params.UseRegistryDefaultConfig : null;

        if (params.SettingConfs) {
            this.SettingConfs = new Array();
            for (let z in params.SettingConfs) {
                let obj = new MountedSettingConf();
                obj.deserialize(params.SettingConfs[z]);
                this.SettingConfs.push(obj);
            }
        }

        if (params.EksService) {
            let obj = new EksService();
            obj.deserialize(params.EksService)
            this.EksService = obj;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.PostStart = 'PostStart' in params ? params.PostStart : null;
        this.PreStop = 'PreStop' in params ? params.PreStop : null;

        if (params.DeployStrategyConf) {
            let obj = new DeployStrategyConf();
            obj.deserialize(params.DeployStrategyConf)
            this.DeployStrategyConf = obj;
        }

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
 * DescribeRelatedIngresses response structure.
 * @class
 */
class DescribeRelatedIngressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress array.
Note: this field may return `null`, indicating that no valid value can be obtained.
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
 * CreateNamespace request structure.
 * @class
 */
class CreateNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * Subnet list
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Namespace description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * K8s version
         * @type {string || null}
         */
        this.K8sVersion = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Whether to enable the TSW service.
         * @type {boolean || null}
         */
        this.EnableTswTraceService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.K8sVersion = 'K8sVersion' in params ? params.K8sVersion : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.EnableTswTraceService = 'EnableTswTraceService' in params ? params.EnableTswTraceService : null;

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
         * namespace id
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * namespace
         * @type {string || null}
         */
        this.EksNamespace = null;

        /**
         * Source channel
         * @type {number || null}
         */
        this.SourceChannel = null;

        /**
         * Ingress rule name list.
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.EksNamespace = 'EksNamespace' in params ? params.EksNamespace : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;
        this.Names = 'Names' in params ? params.Names : null;

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
         * Page number
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Request ID
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * Number of items
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
 * DescribeServiceRunPodListV2 request structure.
 * @class
 */
class DescribeServiceRunPodListV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Service name ID
         * @type {string || null}
         */
        this.ServiceId = null;

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
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

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
 * DescribeIngresses response structure.
 * @class
 */
class DescribeIngressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ingress array
Note: this field may return null, indicating that no valid values can be obtained.
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
 * Ingress configuration
 * @class
 */
class IngressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * tem namespaceId
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * eks namespace
         * @type {string || null}
         */
        this.EksNamespace = null;

        /**
         * ip version
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * ingress name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Rules configuration
         * @type {Array.<IngressRule> || null}
         */
        this.Rules = null;

        /**
         * clb ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClbId = null;

        /**
         * TLS configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IngressTls> || null}
         */
        this.Tls = null;

        /**
         * eks clusterId
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * clb ip
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Creation time.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whether to listen on both the HTTP Port 80 and HTTPS Port 443. The default value is `false`. The optional value `true` means listening on both the HTTP Port 80 and HTTPS Port 443.
         * @type {boolean || null}
         */
        this.Mixed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.EksNamespace = 'EksNamespace' in params ? params.EksNamespace : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.Name = 'Name' in params ? params.Name : null;

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
         * Whether deletion succeeded
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
 * RestartServiceRunPod response structure.
 * @class
 */
class RestartServiceRunPodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returned results.
Note: this field may return `null`, indicating that no valid value can be obtained.
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
 * ModifyNamespace request structure.
 * @class
 */
class ModifyNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Namespace description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * Subnet
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

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
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

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
Note: this field may return null, indicating that no valid values can be obtained.
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
Note: this field may return null, indicating that no valid values can be obtained.
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
 * ModifyNamespace response structure.
 * @class
 */
class ModifyNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace ID in case of success and `null` in case of failure
Note: this field may return null, indicating that no valid values can be obtained.
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
 * Pod
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
         * Pod IP.
         * @type {string || null}
         */
        this.PodIp = null;

        /**
         * Availability zone.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Deployed version.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DeployVersion = null;

        /**
         * Number of Restarts
Note: This is field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.RestartCount = null;

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
 * CreateResource response structure.
 * @class
 */
class CreateResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success or failure
Note: this field may return null, indicating that no valid values can be obtained.
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
 * DescribeServiceRunPodListV2 response structure.
 * @class
 */
class DescribeServiceRunPodListV2Response extends  AbstractModel {
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
 * Namespace object
 * @class
 */
class TemNamespaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Channel
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Namespace description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Status. 1: terminated; 0: normal
         * @type {number || null}
         */
        this.Status = null;

        /**
         * VPC
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
         * Number of services
         * @type {number || null}
         */
        this.ServiceNum = null;

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
         * TCB environment status
         * @type {string || null}
         */
        this.TcbEnvStatus = null;

        /**
         * eks cluster status
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * Whether to enable TSW
         * @type {boolean || null}
         */
        this.EnableTswTraceService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.ModifyDate = 'ModifyDate' in params ? params.ModifyDate : null;
        this.Modifier = 'Modifier' in params ? params.Modifier : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.ServiceNum = 'ServiceNum' in params ? params.ServiceNum : null;
        this.RunInstancesNum = 'RunInstancesNum' in params ? params.RunInstancesNum : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.TcbEnvStatus = 'TcbEnvStatus' in params ? params.TcbEnvStatus : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.EnableTswTraceService = 'EnableTswTraceService' in params ? params.EnableTswTraceService : null;

    }
}

/**
 * Namespace pagination
 * @class
 */
class NamespacePage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Records
         * @type {Array.<TemNamespaceInfo> || null}
         */
        this.Records = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Number of items
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Number of pages
         * @type {number || null}
         */
        this.Pages = null;

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

    }
}

/**
 * Health Check Configuration
 * @class
 */
class HealthCheckConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check type. Valid values: `HttpGet`，`TcpSocket`，`Exec`
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
 * CreateCosTokenV2 response structure.
 * @class
 */
class CreateCosTokenV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * `CosToken` object in case of success and `null` in case of failure
Note: this field may return null, indicating that no valid values can be obtained.
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
 * GenerateDownloadUrl request structure.
 * @class
 */
class GenerateDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Package Name
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.DeployVersion = 'DeployVersion' in params ? params.DeployVersion : null;
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
         * Number of instances for the beta batch
         * @type {number || null}
         */
        this.BetaBatchNum = null;

        /**
         * Batch deploy policy. `0`: automatically; `1`: manually. If you use beta batch, the policy for beta batch must be `0`. The policy specified here only applies to the rest batches.
         * @type {number || null}
         */
        this.DeployStrategyType = null;

        /**
         * Interval between batches
         * @type {number || null}
         */
        this.BatchInterval = null;

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
         * tem namespaceId
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * EKS namespace name
         * @type {string || null}
         */
        this.EksNamespace = null;

        /**
         * Ingress rule name
         * @type {string || null}
         */
        this.Name = null;

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
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.EksNamespace = 'EksNamespace' in params ? params.EksNamespace : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceChannel = 'SourceChannel' in params ? params.SourceChannel : null;

    }
}

/**
 * CreateServiceV2 request structure.
 * @class
 */
class CreateServiceV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service name
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether to use the default image service. 1: yes; 0: no
         * @type {number || null}
         */
        this.UseDefaultImageService = null;

        /**
         * Type of the bound repository. 0: Personal Edition; 1: Enterprise Edition
         * @type {number || null}
         */
        this.RepoType = null;

        /**
         * Instance ID of Enterprise Edition image service
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
         * Service subnet
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
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
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Version name
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Private IP
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.ClusterIp = null;

        /**
         * Public IP
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ExternalIp = null;

        /**
         * The access type. Valid values:
- EXTERNAL (internet access)
- VPC（Intra-VPC access)
- CLUSTER (Intra-cluster access)
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Subnet ID. It is filled when the access type is `VPC`.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Load balancer ID. It is filled when the access type is `EXTERNAL` or `CLUSTER`. It’s created automatically by default.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.LoadBalanceId = null;

        /**
         * Port Mapping
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<PortMapping> || null}
         */
        this.PortMappings = null;

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
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
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

    }
}

/**
 * Key-Value pair
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

module.exports = {
    MountedSettingConf: MountedSettingConf,
    ModifyServiceInfoResponse: ModifyServiceInfoResponse,
    StorageMountConf: StorageMountConf,
    CreateResourceRequest: CreateResourceRequest,
    CreateServiceV2Response: CreateServiceV2Response,
    CreateCosTokenV2Request: CreateCosTokenV2Request,
    DeployServiceV2Response: DeployServiceV2Response,
    EsInfo: EsInfo,
    DescribeNamespacesResponse: DescribeNamespacesResponse,
    PortMapping: PortMapping,
    RestartServiceRunPodRequest: RestartServiceRunPodRequest,
    ModifyIngressResponse: ModifyIngressResponse,
    DeleteIngressRequest: DeleteIngressRequest,
    ModifyServiceInfoRequest: ModifyServiceInfoRequest,
    CreateNamespaceResponse: CreateNamespaceResponse,
    DescribeRelatedIngressesRequest: DescribeRelatedIngressesRequest,
    CosToken: CosToken,
    DescribeNamespacesRequest: DescribeNamespacesRequest,
    GenerateDownloadUrlResponse: GenerateDownloadUrlResponse,
    DeployServiceV2Request: DeployServiceV2Request,
    ModifyIngressRequest: ModifyIngressRequest,
    DescribeRelatedIngressesResponse: DescribeRelatedIngressesResponse,
    CreateNamespaceRequest: CreateNamespaceRequest,
    DescribeIngressesRequest: DescribeIngressesRequest,
    DescribeRunPodPage: DescribeRunPodPage,
    DescribeServiceRunPodListV2Request: DescribeServiceRunPodListV2Request,
    LogOutputConf: LogOutputConf,
    DescribeIngressesResponse: DescribeIngressesResponse,
    IngressInfo: IngressInfo,
    DeleteIngressResponse: DeleteIngressResponse,
    RestartServiceRunPodResponse: RestartServiceRunPodResponse,
    ModifyNamespaceRequest: ModifyNamespaceRequest,
    IngressRuleBackend: IngressRuleBackend,
    DescribeIngressResponse: DescribeIngressResponse,
    IngressRule: IngressRule,
    IngressRulePath: IngressRulePath,
    StorageConf: StorageConf,
    ModifyNamespaceResponse: ModifyNamespaceResponse,
    RunVersionPod: RunVersionPod,
    IngressRuleValue: IngressRuleValue,
    CreateResourceResponse: CreateResourceResponse,
    DescribeServiceRunPodListV2Response: DescribeServiceRunPodListV2Response,
    TemNamespaceInfo: TemNamespaceInfo,
    NamespacePage: NamespacePage,
    HealthCheckConfig: HealthCheckConfig,
    CreateCosTokenV2Response: CreateCosTokenV2Response,
    IngressTls: IngressTls,
    GenerateDownloadUrlRequest: GenerateDownloadUrlRequest,
    DeployStrategyConf: DeployStrategyConf,
    DescribeIngressRequest: DescribeIngressRequest,
    CreateServiceV2Request: CreateServiceV2Request,
    EksService: EksService,
    Pair: Pair,

}
