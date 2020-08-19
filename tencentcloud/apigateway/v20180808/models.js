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
 * UnBindSubDomain response structure.
 * @class
 */
class UnBindSubDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the custom domain name is successfully unbound.
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
 * UpdateApiKey request structure.
 * @class
 */
class UpdateApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the key to be changed.
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * Key to be updated, which is required when a custom key is updated. It can contain 10–50 letters, digits, and underscores.
         * @type {string || null}
         */
        this.AccessKeySecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.AccessKeySecret = 'AccessKeySecret' in params ? params.AccessKeySecret : null;

    }
}

/**
 * Service list display
 * @class
 */
class Service extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port for HTTPS access over private network.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InnerHttpsPort = null;

        /**
         * Custom service description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * Service frontend request type, such as `http`, `https`, and `http&https`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Last modified time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * Network types supported by service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

        /**
         * Dedicated cluster name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExclusiveSetName = null;

        /**
         * Unique service ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * IP version.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IpVersion = null;

        /**
         * List of published environments, such as test, prepub, and release.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AvailableEnvironments = null;

        /**
         * Custom service name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Public domain name assigned by the system for this service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OuterSubDomain = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Port for HTTP access over private network.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InnerHttpPort = null;

        /**
         * Private domain name automatically assigned by the system for this service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InnerSubDomain = null;

        /**
         * Billing status of service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TradeIsolateStatus = null;

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
        this.InnerHttpsPort = 'InnerHttpsPort' in params ? params.InnerHttpsPort : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;
        this.ExclusiveSetName = 'ExclusiveSetName' in params ? params.ExclusiveSetName : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.IpVersion = 'IpVersion' in params ? params.IpVersion : null;
        this.AvailableEnvironments = 'AvailableEnvironments' in params ? params.AvailableEnvironments : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.OuterSubDomain = 'OuterSubDomain' in params ? params.OuterSubDomain : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.InnerHttpPort = 'InnerHttpPort' in params ? params.InnerHttpPort : null;
        this.InnerSubDomain = 'InnerSubDomain' in params ? params.InnerSubDomain : null;
        this.TradeIsolateStatus = 'TradeIsolateStatus' in params ? params.TradeIsolateStatus : null;

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
 * Service release version
 * @class
 */
class ServiceReleaseVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of published versions.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Release version list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ServiceReleaseHistoryInfo> || null}
         */
        this.VersionList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VersionList) {
            this.VersionList = new Array();
            for (let z in params.VersionList) {
                let obj = new ServiceReleaseHistoryInfo();
                obj.deserialize(params.VersionList[z]);
                this.VersionList.push(obj);
            }
        }

    }
}

/**
 * List of usage plans bound to API
 * @class
 */
class ApiUsagePlanSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of usage plans bound to API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of usage plans bound to API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApiUsagePlan> || null}
         */
        this.ApiUsagePlanList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiUsagePlanList) {
            this.ApiUsagePlanList = new Array();
            for (let z in params.ApiUsagePlanList) {
                let obj = new ApiUsagePlan();
                obj.deserialize(params.ApiUsagePlanList[z]);
                this.ApiUsagePlanList.push(obj);
            }
        }

    }
}

/**
 * DescribeUsagePlan request structure.
 * @class
 */
class DescribeUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the usage plan to be queried.
         * @type {string || null}
         */
        this.UsagePlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;

    }
}

/**
 * DeleteUsagePlan response structure.
 * @class
 */
class DeleteUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether deletion succeeded.
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
 * DisableApiKey response structure.
 * @class
 */
class DisableApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the key is successfully disabled.
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
 * UnReleaseService request structure.
 * @class
 */
class UnReleaseServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be deactivated.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Name of the environment to be deactivated. Valid values: test (test environment), prepub (pre-release environment), release (release environment).
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * List of APIs to be deactivated, which is a reserved field.
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * ModifySubDomain request structure.
 * @class
 */
class ModifySubDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Custom domain name whose path mapping is to be modified.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Whether to change to the default path mapping. true: use the default path mapping; false: use the custom path mapping.
         * @type {boolean || null}
         */
        this.IsDefaultMapping = null;

        /**
         * Certificate ID, which is required if the HTTPS protocol is included.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Custom domain name protocol type after modification. Valid values: http, https, http&https.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Path mapping list after modification.
         * @type {Array.<PathMapping> || null}
         */
        this.PathMappingSet = null;

        /**
         * Network type. Valid values: INNER, OUTER.
         * @type {string || null}
         */
        this.NetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.IsDefaultMapping = 'IsDefaultMapping' in params ? params.IsDefaultMapping : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.PathMappingSet) {
            this.PathMappingSet = new Array();
            for (let z in params.PathMappingSet) {
                let obj = new PathMapping();
                obj.deserialize(params.PathMappingSet[z]);
                this.PathMappingSet.push(obj);
            }
        }
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * DescribeServiceEnvironmentList response structure.
 * @class
 */
class DescribeServiceEnvironmentListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of environments bound to service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ServiceEnvironmentSet || null}
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
            let obj = new ServiceEnvironmentSet();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApi response structure.
 * @class
 */
class ModifyApiResponse extends  AbstractModel {
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
 * Service environment policy
 * @class
 */
class ServiceEnvironmentStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment name.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Access service environment URL.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Release status.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Published version number.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Throttling value.
         * @type {number || null}
         */
        this.Strategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;

    }
}

/**
 * DemoteServiceUsagePlan request structure.
 * @class
 */
class DemoteServiceUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage plan ID.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Unique ID of the service to be demoted.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Environment name.
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * TSF Serverless input parameters
 * @class
 */
class TargetServicesReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * VM IP
         * @type {string || null}
         */
        this.VmIp = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VM Port
         * @type {number || null}
         */
        this.VmPort = null;

        /**
         * IP of the host where the CVM instance resides
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * Docker IP
         * @type {string || null}
         */
        this.DockerIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VmIp = 'VmIp' in params ? params.VmIp : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VmPort = 'VmPort' in params ? params.VmPort : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.DockerIp = 'DockerIp' in params ? params.DockerIp : null;

    }
}

/**
 * `TsfLoadBalanceConf` output parameter usage
 * @class
 */
class TsfLoadBalanceConfResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether load balancing is enabled.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsLoadBalance = null;

        /**
         * Load balancing method.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Whether session persistence is enabled.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.SessionStickRequired = null;

        /**
         * Session persistence timeout period.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SessionStickTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsLoadBalance = 'IsLoadBalance' in params ? params.IsLoadBalance : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.SessionStickRequired = 'SessionStickRequired' in params ? params.SessionStickRequired : null;
        this.SessionStickTimeout = 'SessionStickTimeout' in params ? params.SessionStickTimeout : null;

    }
}

/**
 * CreateIPStrategy request structure.
 * @class
 */
class CreateIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Custom policy name.
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * Policy type. Valid values: WHITE (allowlist), BLACK (blocklist).
         * @type {string || null}
         */
        this.StrategyType = null;

        /**
         * Policy details.
         * @type {string || null}
         */
        this.StrategyData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.StrategyData = 'StrategyData' in params ? params.StrategyData : null;

    }
}

/**
 * IP policy
 * @class
 */
class IPStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique policy ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * Custom policy name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * Policy type. Valid values: WHITE (allowlist), BLACK (blocklist).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StrategyType = null;

        /**
         * IP list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StrategyData = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Modification time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * Last modified time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Number of APIs bound to policy.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BindApiTotalCount = null;

        /**
         * Bound API details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DesApisStatus> || null}
         */
        this.BindApis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.StrategyData = 'StrategyData' in params ? params.StrategyData : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.BindApiTotalCount = 'BindApiTotalCount' in params ? params.BindApiTotalCount : null;

        if (params.BindApis) {
            this.BindApis = new Array();
            for (let z in params.BindApis) {
                let obj = new DesApisStatus();
                obj.deserialize(params.BindApis[z]);
                this.BindApis.push(obj);
            }
        }

    }
}

/**
 * DescribeUsagePlansStatus response structure.
 * @class
 */
class DescribeUsagePlansStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage plan list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UsagePlansStatus || null}
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
            let obj = new UsagePlansStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Health check configuration, including `TsfHealthCheckConf` and `TargetServicesHealthCheckConf`
 * @class
 */
class HealthCheckConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether health check is enabled.
         * @type {boolean || null}
         */
        this.IsHealthCheck = null;

        /**
         * Health check threshold.
         * @type {number || null}
         */
        this.RequestVolumeThreshold = null;

        /**
         * Window size.
         * @type {number || null}
         */
        this.SleepWindowInMilliseconds = null;

        /**
         * Threshold percentage.
         * @type {number || null}
         */
        this.ErrorThresholdPercentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsHealthCheck = 'IsHealthCheck' in params ? params.IsHealthCheck : null;
        this.RequestVolumeThreshold = 'RequestVolumeThreshold' in params ? params.RequestVolumeThreshold : null;
        this.SleepWindowInMilliseconds = 'SleepWindowInMilliseconds' in params ? params.SleepWindowInMilliseconds : null;
        this.ErrorThresholdPercentage = 'ErrorThresholdPercentage' in params ? params.ErrorThresholdPercentage : null;

    }
}

/**
 * DescribeApiUsagePlan response structure.
 * @class
 */
class DescribeApiUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of usage plans bound to API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ApiUsagePlanSet || null}
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
            let obj = new ApiUsagePlanSet();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIPStrategy request structure.
 * @class
 */
class DeleteIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of the IP policy to be deleted.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique ID of the IP policy to be deleted.
         * @type {string || null}
         */
        this.StrategyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;

    }
}

/**
 * Custom service domain name information
 * @class
 */
class DomainSets extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of custom domain names under service
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Custom service domain name list.
         * @type {Array.<DomainSetList> || null}
         */
        this.DomainSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DomainSet) {
            this.DomainSet = new Array();
            for (let z in params.DomainSet) {
                let obj = new DomainSetList();
                obj.deserialize(params.DomainSet[z]);
                this.DomainSet.push(obj);
            }
        }

    }
}

/**
 * DeleteUsagePlan request structure.
 * @class
 */
class DeleteUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the usage plan to be deleted.
         * @type {string || null}
         */
        this.UsagePlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;

    }
}

/**
 * DeleteService request structure.
 * @class
 */
class DeleteServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be deleted.
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * DescribeApiEnvironmentStrategy request structure.
 * @class
 */
class DescribeApiEnvironmentStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of API.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Environment list.
         * @type {Array.<string> || null}
         */
        this.EnvironmentNames = null;

        /**
         * Unique API ID.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentNames = 'EnvironmentNames' in params ? params.EnvironmentNames : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateService response structure.
 * @class
 */
class UpdateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the version is successfully switched.
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
 * ServiceConfig
 * @class
 */
class ServiceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backend type, which takes effect when VPC is enabled. Currently, only `clb` is supported.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Unique VPC ID.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * API backend service URL, which is required if `ServiceType` is `HTTP`.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * API backend service path, such as `/path`, which is required if `ServiceType` is `HTTP`. The frontend and backend paths can be different.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API backend service request method, such as `GET`, which is required if `ServiceType` is `HTTP`. The frontend and backend methods can be different
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * Details of environments bound to service
 * @class
 */
class ServiceEnvironmentSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of environments bound to service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of environments bound to service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Environment> || null}
         */
        this.EnvironmentList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.EnvironmentList) {
            this.EnvironmentList = new Array();
            for (let z in params.EnvironmentList) {
                let obj = new Environment();
                obj.deserialize(params.EnvironmentList[z]);
                this.EnvironmentList.push(obj);
            }
        }

    }
}

/**
 * DescribeService response structure.
 * @class
 */
class DescribeServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Service environment list.
         * @type {Array.<string> || null}
         */
        this.AvailableEnvironments = null;

        /**
         * Service name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Service description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * Protocol supported by service. Valid values: http, https, http&https.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Service creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Service modification time.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * Dedicated cluster name.
         * @type {string || null}
         */
        this.ExclusiveSetName = null;

        /**
         * Network type list. INNER: private network access; OUTER: public network access.
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

        /**
         * Subdomain name for private network access.
         * @type {string || null}
         */
        this.InternalSubDomain = null;

        /**
         * Subdomain name for public network access.
         * @type {string || null}
         */
        this.OuterSubDomain = null;

        /**
         * Service port number for HTTP access over private network.
         * @type {number || null}
         */
        this.InnerHttpPort = null;

        /**
         * Port number for HTTPS access over private network.
         * @type {number || null}
         */
        this.InnerHttpsPort = null;

        /**
         * Total number of APIs.
         * @type {number || null}
         */
        this.ApiTotalCount = null;

        /**
         * API list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApiIdStatus> || null}
         */
        this.ApiIdStatusSet = null;

        /**
         * Total number of usage plans.
         * @type {number || null}
         */
        this.UsagePlanTotalCount = null;

        /**
         * Usage plan array.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UsagePlan> || null}
         */
        this.UsagePlanList = null;

        /**
         * IP version.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IpVersion = null;

        /**
         * Service user type.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * Reserved field.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SetId = null;

        /**
         * 
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.AvailableEnvironments = 'AvailableEnvironments' in params ? params.AvailableEnvironments : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ExclusiveSetName = 'ExclusiveSetName' in params ? params.ExclusiveSetName : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;
        this.InternalSubDomain = 'InternalSubDomain' in params ? params.InternalSubDomain : null;
        this.OuterSubDomain = 'OuterSubDomain' in params ? params.OuterSubDomain : null;
        this.InnerHttpPort = 'InnerHttpPort' in params ? params.InnerHttpPort : null;
        this.InnerHttpsPort = 'InnerHttpsPort' in params ? params.InnerHttpsPort : null;
        this.ApiTotalCount = 'ApiTotalCount' in params ? params.ApiTotalCount : null;

        if (params.ApiIdStatusSet) {
            this.ApiIdStatusSet = new Array();
            for (let z in params.ApiIdStatusSet) {
                let obj = new ApiIdStatus();
                obj.deserialize(params.ApiIdStatusSet[z]);
                this.ApiIdStatusSet.push(obj);
            }
        }
        this.UsagePlanTotalCount = 'UsagePlanTotalCount' in params ? params.UsagePlanTotalCount : null;

        if (params.UsagePlanList) {
            this.UsagePlanList = new Array();
            for (let z in params.UsagePlanList) {
                let obj = new UsagePlan();
                obj.deserialize(params.UsagePlanList[z]);
                this.UsagePlanList.push(obj);
            }
        }
        this.IpVersion = 'IpVersion' in params ? params.IpVersion : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.SetId = 'SetId' in params ? params.SetId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of environments bound to usage plan.
 * @class
 */
class UsagePlanEnvironmentStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of environments of the service bound to usage plan.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Environment status of services bound to usage plan.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UsagePlanEnvironment> || null}
         */
        this.EnvironmentList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.EnvironmentList) {
            this.EnvironmentList = new Array();
            for (let z in params.EnvironmentList) {
                let obj = new UsagePlanEnvironment();
                obj.deserialize(params.EnvironmentList[z]);
                this.EnvironmentList.push(obj);
            }
        }

    }
}

/**
 * ModifyIPStrategy response structure.
 * @class
 */
class ModifyIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether modification succeeded.
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
 * BindSubDomain response structure.
 * @class
 */
class BindSubDomainResponse extends  AbstractModel {
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
 * BindEnvironment response structure.
 * @class
 */
class BindEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether binding succeeded.
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
 * Information of tag bound to API.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value.
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
 * DescribeServiceEnvironmentStrategy response structure.
 * @class
 */
class DescribeServiceEnvironmentStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Throttling policy list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ServiceEnvironmentStrategyStatus || null}
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
            let obj = new ServiceEnvironmentStrategyStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Constant parameter
 * @class
 */
class ConstantParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Constant parameter name, which is used only if `ServiceType` is `HTTP`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Constant parameter description, which is used only if `ServiceType` is `HTTP`.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Constant parameter position, which is used only if `ServiceType` is `HTTP`.
         * @type {string || null}
         */
        this.Position = null;

        /**
         * Default value of constant parameter, which is used only if `ServiceType` is `HTTP`.
         * @type {string || null}
         */
        this.DefaultValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;

    }
}

/**
 * Usage plan list
 * @class
 */
class UsagePlansStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible usage plans.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Usage plan list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UsagePlanStatusInfo> || null}
         */
        this.UsagePlanStatusSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.UsagePlanStatusSet) {
            this.UsagePlanStatusSet = new Array();
            for (let z in params.UsagePlanStatusSet) {
                let obj = new UsagePlanStatusInfo();
                obj.deserialize(params.UsagePlanStatusSet[z]);
                this.UsagePlanStatusSet.push(obj);
            }
        }

    }
}

/**
 * ModifySubDomain response structure.
 * @class
 */
class ModifySubDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the custom domain name is successfully modified.
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
 * Search criterion input parameter
 * @class
 */
class LogQuery extends  AbstractModel {
    constructor(){
        super();

        /**
         * Search field
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Operator
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Search value
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ServiceParameter
 * @class
 */
class ServiceParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * API backend service parameter name, which is used only if `ServiceType` is `HTTP`. The frontend and backend parameter names can be different.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Position of API backend service parameter, such as `head`, which is used only if `ServiceType` is `HTTP`. The positions of frontend and backend parameters can be different.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Position = null;

        /**
         * Position of the API frontend parameter corresponding to the backend service parameter, such as `head`, which is used only if `ServiceType` is `HTTP`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RelevantRequestParameterPosition = null;

        /**
         * Name of the API frontend parameter corresponding to the backend service parameter, which is used only if `ServiceType` is `HTTP`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RelevantRequestParameterName = null;

        /**
         * Default value of API backend service parameter, which is used only if `ServiceType` is `HTTP`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * API backend service parameter remarks, which is used only if `ServiceType` is `HTTP`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RelevantRequestParameterDesc = null;

        /**
         * API backend service parameter type, which is used only if `ServiceType` is `HTTP`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RelevantRequestParameterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.RelevantRequestParameterPosition = 'RelevantRequestParameterPosition' in params ? params.RelevantRequestParameterPosition : null;
        this.RelevantRequestParameterName = 'RelevantRequestParameterName' in params ? params.RelevantRequestParameterName : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.RelevantRequestParameterDesc = 'RelevantRequestParameterDesc' in params ? params.RelevantRequestParameterDesc : null;
        this.RelevantRequestParameterType = 'RelevantRequestParameterType' in params ? params.RelevantRequestParameterType : null;

    }
}

/**
 * ModifyService response structure.
 * @class
 */
class ModifyServiceResponse extends  AbstractModel {
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
 * DisableApiKey request structure.
 * @class
 */
class DisableApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the key to be disabled.
         * @type {string || null}
         */
        this.AccessKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;

    }
}

/**
 * Custom domain name path mapping.
 * @class
 */
class PathMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * Path.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Release environment. Valid values: test, prepub, release.
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * UnBindIPStrategy response structure.
 * @class
 */
class UnBindIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether unbinding succeeded.
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
 * BindIPStrategy response structure.
 * @class
 */
class BindIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether binding succeeded.
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
 * DescribeApisStatus request structure.
 * @class
 */
class DescribeApisStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of API.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * API filter. Valid values: ApiId, ApiName, ApiPath, ApiType, AuthRelationApiId, AuthType, ApiBuniessType, NotUsagePlanId, Environment, Tags (whose values are the list of `$tag_key:tag_value`), TagKeys (whose values are the list of tag keys).
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
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
 * DeleteServiceSubDomainMapping request structure.
 * @class
 */
class DeleteServiceSubDomainMappingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Custom domain name bound to service.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Name of the environment whose mapping is to be deleted. Valid values: test (test environment), prepub (pre-release environment), release (release environment).
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * DescribeIPStrategy response structure.
 * @class
 */
class DescribeIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP policy details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IPStrategy || null}
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
            let obj = new IPStrategy();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApi response structure.
 * @class
 */
class DeleteApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether deletion succeeded.
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
 * CreateApi response structure.
 * @class
 */
class CreateApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CreateApiRsp || null}
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
            let obj = new CreateApiRsp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIPStrategyApisStatus request structure.
 * @class
 */
class DescribeIPStrategyApisStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique policy ID.
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * Policy environment.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter. Valid values: ApiPath, ApiName, KeyWord (fuzzy search by `Path` and `Name`).
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * UnBindEnvironment request structure.
 * @class
 */
class UnBindEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Binding type. Valid values: API, SERVICE. Default value: SERVICE.
         * @type {string || null}
         */
        this.BindType = null;

        /**
         * List of unique IDs of the usage plans to be bound.
         * @type {Array.<string> || null}
         */
        this.UsagePlanIds = null;

        /**
         * Service environment to be unbound.
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * Unique ID of the service to be unbound.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique API ID array, which is required if `BindType` is `API`.
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.UsagePlanIds = 'UsagePlanIds' in params ? params.UsagePlanIds : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * OAuth authorization configuration information
 * @class
 */
class OauthConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public key for user token verification.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Token delivery location.
         * @type {string || null}
         */
        this.TokenLocation = null;

        /**
         * Redirect address, which is used to guide user logins.
         * @type {string || null}
         */
        this.LoginRedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.TokenLocation = 'TokenLocation' in params ? params.TokenLocation : null;
        this.LoginRedirectUrl = 'LoginRedirectUrl' in params ? params.LoginRedirectUrl : null;

    }
}

/**
 * ModifyApiEnvironmentStrategy request structure.
 * @class
 */
class ModifyApiEnvironmentStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Throttling value.
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Environment name.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * API list.
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * ModifyUsagePlan response structure.
 * @class
 */
class ModifyUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage plan details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UsagePlanInfo || null}
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
            let obj = new UsagePlanInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUsagePlan response structure.
 * @class
 */
class CreateUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage plan details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UsagePlanInfo || null}
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
            let obj = new UsagePlanInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Request parameter
 * @class
 */
class ReqParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * API frontend parameter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * API frontend parameter position, such as `head`. Valid values: head, query, path.
         * @type {string || null}
         */
        this.Position = null;

        /**
         * API frontend parameter type, such as `String` and `int`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Default value of API frontend parameter.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Whether the API frontend parameter is required. True: yes; False: no.
         * @type {boolean || null}
         */
        this.Required = null;

        /**
         * API frontend parameter remarks.
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.Required = 'Required' in params ? params.Required : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeServicesStatus request structure.
 * @class
 */
class DescribeServicesStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter. Valid values: ServiceId, ServiceName, NotUsagePlanId, Environment, IpVersion.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * Frontend path configuration
 * @class
 */
class RequestConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * API path, such as `/path`.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API request method, such as `GET`.
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * DeleteApiKey response structure.
 * @class
 */
class DeleteApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether deletion succeeded.
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
 * `usagePlan` details
 * @class
 */
class UsagePlan extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment name.
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * Unique usage plan ID.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Usage plan name.
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * Usage plan description.
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * Usage plan QPS. `-1` indicates no limit.
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * Usage plan time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Usage plan modification time.
         * @type {string || null}
         */
        this.ModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;

    }
}

/**
 * DescribeServiceReleaseVersion request structure.
 * @class
 */
class DescribeServiceReleaseVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be queried.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeUsagePlanSecretIds request structure.
 * @class
 */
class DescribeUsagePlanSecretIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of bound usage plan.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeLogSearch response structure.
 * @class
 */
class DescribeLogSearchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cursor for getting more search results. If the value is `""`, there will be no subsequent results
         * @type {string || null}
         */
        this.ConText = null;

        /**
         * The returned result contains any number of logs, which are in the following format:
'[$app_id][$env_name][$service_id][$http_host][$api_id][$uri][$scheme][rsp_st:$status][ups_st:$upstream_status]'
'[cip:$remote_addr][uip:$upstream_addr][vip:$server_addr][rsp_len:$bytes_sent][req_len:$request_length]'
'[req_t:$request_time][ups_rsp_t:$upstream_response_time][ups_conn_t:$upstream_connect_time][ups_head_t:$upstream_header_time]’
'[err_msg:$err_msg][tcp_rtt:$tcpinfo_rtt][$pid][$time_local][req_id:$request_id]';

Note:
app_id: user ID.
env_name: environment name.
service_id: service ID.
http_host: domain name.
api_id: API ID.
uri: request path.
scheme: HTTP/HTTPS protocol.
rsp_st: request response status code.
ups_st: backend business server response status code (if the request is passed through to the backend, this variable will not be empty. If the request is blocked in API Gateway, this variable will be displayed as `-`).
cip: client IP.
uip: backend business service (upstream) IP.
vip: VIP requested to be accessed.
rsp_len: response length.
req_len: request length.
req_t: total request response time.
ups_rsp_t: total backend response time (time between connection establishment by API Gateway and backend response receipt).
ups_conn_t: time when the backend business server is successfully connected to.
ups_head_t: time when the backend response header arrives.
err_msg: error message.
tcp_rtt: client TCP connection information. RTT (Round Trip Time) consists of three parts: link propagation delay, end system processing delay, and queuing delay in router cache.
req_id: request ID.
         * @type {Array.<string> || null}
         */
        this.LogSet = null;

        /**
         * Number of logs returned for one search (`TotalCount <= Limit`)
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
        this.ConText = 'ConText' in params ? params.ConText : null;
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Error code input parameter
 * @class
 */
class ResponseErrorCodeReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom response configuration error code.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Custom response configuration error message.
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Custom response configuration error code remarks.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Custom error code conversion.
         * @type {number || null}
         */
        this.ConvertedCode = null;

        /**
         * Whether to enable error code conversion.
         * @type {boolean || null}
         */
        this.NeedConvert = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ConvertedCode = 'ConvertedCode' in params ? params.ConvertedCode : null;
        this.NeedConvert = 'NeedConvert' in params ? params.NeedConvert : null;

    }
}

/**
 * CreateService request structure.
 * @class
 */
class CreateServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom service name. If this parameter is left empty, the system will automatically generate a unique name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Service frontend request type, such as `http`, `https`, and `http&https`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Custom service description.
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * Dedicated cluster name, which is used to specify the dedicated cluster where the service is to be created.
         * @type {string || null}
         */
        this.ExclusiveSetName = null;

        /**
         * Network type list, which is used to specify the supported network types. INNER: private network access; OUTER: public network access. Default value: OUTER.
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

        /**
         * IP version number. Valid values: IPv4, IPv6. Default value: IPv4.
         * @type {string || null}
         */
        this.IpVersion = null;

        /**
         * Cluster name, which is reserved and used by the `tsf serverless` type.
         * @type {string || null}
         */
        this.SetServerName = null;

        /**
         * User type, which is reserved and can be used by `serverless` users.
         * @type {string || null}
         */
        this.AppIdType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.ExclusiveSetName = 'ExclusiveSetName' in params ? params.ExclusiveSetName : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;
        this.IpVersion = 'IpVersion' in params ? params.IpVersion : null;
        this.SetServerName = 'SetServerName' in params ? params.SetServerName : null;
        this.AppIdType = 'AppIdType' in params ? params.AppIdType : null;

    }
}

/**
 * DescribeIPStrategysStatus request structure.
 * @class
 */
class DescribeIPStrategysStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Filter. Valid values: StrategyName.
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

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
 * DemoteServiceUsagePlan response structure.
 * @class
 */
class DemoteServiceUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether demotion succeeded.
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
 * EnableApiKey response structure.
 * @class
 */
class EnableApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the key is successfully enabled.
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
 * Service release history
 * @class
 */
class ServiceReleaseHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of published versions.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Historical version list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ServiceReleaseHistoryInfo> || null}
         */
        this.VersionList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VersionList) {
            this.VersionList = new Array();
            for (let z in params.VersionList) {
                let obj = new ServiceReleaseHistoryInfo();
                obj.deserialize(params.VersionList[z]);
                this.VersionList.push(obj);
            }
        }

    }
}

/**
 * UnReleaseService response structure.
 * @class
 */
class UnReleaseServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether deactivation succeeded.
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
 * DescribeService request structure.
 * @class
 */
class DescribeServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be queried.
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * CreateUsagePlan request structure.
 * @class
 */
class CreateUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom usage plan name.
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * Custom usage plan description.
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * Total number of requests allowed. Valid values: -1, [1,99999999]. The default value is `-1`, which indicates no limit.
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * Limit of requests per second. Valid values: -1, [1,2000]. The default value is `-1`, which indicates no limit.
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;

    }
}

/**
 * DescribeUsagePlanSecretIds response structure.
 * @class
 */
class DescribeUsagePlanSecretIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of keys bound to usage plan.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UsagePlanBindSecretStatus || null}
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
            let obj = new UsagePlanBindSecretStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateService request structure.
 * @class
 */
class UpdateServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be switch.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Name of the environment to be switched to. Valid values: test (test environment), prepub (pre-release environment), release (release environment).
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Number of the version to be switched to.
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Switch description.
         * @type {string || null}
         */
        this.UpdateDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.UpdateDesc = 'UpdateDesc' in params ? params.UpdateDesc : null;

    }
}

/**
 * Returned result of service publishing
 * @class
 */
class ReleaseService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Release remarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReleaseDesc = null;

        /**
         * Published version ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReleaseVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReleaseDesc = 'ReleaseDesc' in params ? params.ReleaseDesc : null;
        this.ReleaseVersion = 'ReleaseVersion' in params ? params.ReleaseVersion : null;

    }
}

/**
 * DescribeServiceSubDomainMappings response structure.
 * @class
 */
class DescribeServiceSubDomainMappingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom path mapping list.
         * @type {ServiceSubDomainMappings || null}
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
            let obj = new ServiceSubDomainMappings();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindSecretIds request structure.
 * @class
 */
class BindSecretIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the usage plan to be bound.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Array of IDs of the keys to be bound.
         * @type {Array.<string> || null}
         */
        this.AccessKeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.AccessKeyIds = 'AccessKeyIds' in params ? params.AccessKeyIds : null;

    }
}

/**
 * UnBindEnvironment response structure.
 * @class
 */
class UnBindEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether unbinding succeeded.
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
 * Key bound to usage plan
 * @class
 */
class UsagePlanBindSecret extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * Key name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Key status. 0: disabled. 1: enabled.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteApiKey request structure.
 * @class
 */
class DeleteApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the key to be deleted.
         * @type {string || null}
         */
        this.AccessKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;

    }
}

/**
 * ModifyApiEnvironmentStrategy response structure.
 * @class
 */
class ModifyApiEnvironmentStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether modification succeeded.
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
 * Custom service domain name list
 * @class
 */
class DomainSetList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Domain name resolution status. True: success; False: failure.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Certificate ID.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Whether the default path mapping is used.
         * @type {boolean || null}
         */
        this.IsDefaultMapping = null;

        /**
         * Custom domain name protocol type.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Network type. Valid values: INNER, OUTER.
         * @type {string || null}
         */
        this.NetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.IsDefaultMapping = 'IsDefaultMapping' in params ? params.IsDefaultMapping : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * Policy list
 * @class
 */
class IPStrategysStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of policies.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Policy list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IPStrategy> || null}
         */
        this.StrategySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.StrategySet) {
            this.StrategySet = new Array();
            for (let z in params.StrategySet) {
                let obj = new IPStrategy();
                obj.deserialize(params.StrategySet[z]);
                this.StrategySet.push(obj);
            }
        }

    }
}

/**
 * DescribeApiKey response structure.
 * @class
 */
class DescribeApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ApiKey || null}
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
            let obj = new ApiKey();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApiIncrement response structure.
 * @class
 */
class ModifyApiIncrementResponse extends  AbstractModel {
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
 * ModifyApi request structure.
 * @class
 */
class ModifyApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of API.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API backend service type. Valid values: HTTP, MOCK, TSF, CLB, SCF, WEBSOCKET, TARGET (in beta test).
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Request frontend configuration.
         * @type {RequestConfig || null}
         */
        this.RequestConfig = null;

        /**
         * Unique API ID.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * Custom API name.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * Custom API description.
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * API type. Valid values: NORMAL, TSF. Default value: NORMAL.
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API authentication type. Valid values: SECRET, NONE, OAUTH. Default value: NONE.
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * Whether signature authentication is required. True: yes; False: no. This parameter is to be disused.
         * @type {boolean || null}
         */
        this.AuthRequired = null;

        /**
         * API backend service timeout period in seconds.
         * @type {number || null}
         */
        this.ServiceTimeout = null;

        /**
         * API frontend request type, such as HTTP, HTTPS, or HTTP and HTTPS.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Whether to enable CORS. True: yes; False: no.
         * @type {boolean || null}
         */
        this.EnableCORS = null;

        /**
         * Constant parameter.
         * @type {Array.<ConstantParameter> || null}
         */
        this.ConstantParameters = null;

        /**
         * Frontend request parameter.
         * @type {Array.<ReqParameter> || null}
         */
        this.RequestParameters = null;

        /**
         * This field is valid if `AuthType` is `OAUTH`. NORMAL: business API; OAUTH: authorization API.
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * Returned message of API backend Mock, which is required if `ServiceType` is `Mock`.
         * @type {string || null}
         */
        this.ServiceMockReturnMessage = null;

        /**
         * List of microservices bound to API.
         * @type {Array.<MicroServiceReq> || null}
         */
        this.MicroServices = null;

        /**
         * Load balancing configuration of microservice.
         * @type {TsfLoadBalanceConfResp || null}
         */
        this.ServiceTsfLoadBalanceConf = null;

        /**
         * Health check configuration of microservice.
         * @type {HealthCheckConf || null}
         */
        this.ServiceTsfHealthCheckConf = null;

        /**
         * `target` type load balancing configuration (in beta test).
         * @type {number || null}
         */
        this.TargetServicesLoadBalanceConf = null;

        /**
         * `target` health check configuration (in beta test).
         * @type {HealthCheckConf || null}
         */
        this.TargetServicesHealthCheckConf = null;

        /**
         * SCF function name, which takes effect if the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceScfFunctionName = null;

        /**
         * SCF WebSocket registration function, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionName = null;

        /**
         * SCF WebSocket cleanup function, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionName = null;

        /**
         * SCF WebSocket transfer function, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionName = null;

        /**
         * SCF function namespace, which takes effect if the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceScfFunctionNamespace = null;

        /**
         * SCF function version, which takes effect if the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceScfFunctionQualifier = null;

        /**
         * SCF WebSocket registration function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionNamespace = null;

        /**
         * SCF WebSocket transfer function version, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionQualifier = null;

        /**
         * SCF WebSocket transfer function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionNamespace = null;

        /**
         * SCF WebSocket transfer function version, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionQualifier = null;

        /**
         * SCF WebSocket cleanup function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionNamespace = null;

        /**
         * SCF WebSocket cleanup function version, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionQualifier = null;

        /**
         * Whether to enable response integration, which takes effect if the backend type is `SCF`.
         * @type {boolean || null}
         */
        this.ServiceScfIsIntegratedResponse = null;

        /**
         * Billing after debugging starts (reserved field for marketplace).
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * Tag.
         * @type {Tag || null}
         */
        this.TagSpecifications = null;

        /**
         * Whether to delete the error codes for custom response configuration. If the value is left empty or `False`, the error codes will not be deleted. If the value is `True`, all custom response configuration error codes of the API will be deleted.
         * @type {boolean || null}
         */
        this.IsDeleteResponseErrorCodes = null;

        /**
         * Return type.
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * Sample response for successful custom response configuration.
         * @type {string || null}
         */
        this.ResponseSuccessExample = null;

        /**
         * Sample response for failed custom response configuration.
         * @type {string || null}
         */
        this.ResponseFailExample = null;

        /**
         * API backend service configuration.
         * @type {ServiceConfig || null}
         */
        this.ServiceConfig = null;

        /**
         * Unique ID of associated authorization API, which takes effect only if `AuthType` is `OAUTH` and `ApiBusinessType` is `NORMAL`. It is the unique ID of the OAuth 2.0 authorization API bound to the business API.
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * API backend service parameter.
         * @type {Array.<ServiceParameter> || null}
         */
        this.ServiceParameters = null;

        /**
         * OAuth configuration, which takes effect if `AuthType` is `OAUTH`.
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * Custom error code configuration.
         * @type {Array.<ResponseErrorCodeReq> || null}
         */
        this.ResponseErrorCodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.RequestConfig) {
            let obj = new RequestConfig();
            obj.deserialize(params.RequestConfig)
            this.RequestConfig = obj;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.AuthRequired = 'AuthRequired' in params ? params.AuthRequired : null;
        this.ServiceTimeout = 'ServiceTimeout' in params ? params.ServiceTimeout : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.EnableCORS = 'EnableCORS' in params ? params.EnableCORS : null;

        if (params.ConstantParameters) {
            this.ConstantParameters = new Array();
            for (let z in params.ConstantParameters) {
                let obj = new ConstantParameter();
                obj.deserialize(params.ConstantParameters[z]);
                this.ConstantParameters.push(obj);
            }
        }

        if (params.RequestParameters) {
            this.RequestParameters = new Array();
            for (let z in params.RequestParameters) {
                let obj = new ReqParameter();
                obj.deserialize(params.RequestParameters[z]);
                this.RequestParameters.push(obj);
            }
        }
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.ServiceMockReturnMessage = 'ServiceMockReturnMessage' in params ? params.ServiceMockReturnMessage : null;

        if (params.MicroServices) {
            this.MicroServices = new Array();
            for (let z in params.MicroServices) {
                let obj = new MicroServiceReq();
                obj.deserialize(params.MicroServices[z]);
                this.MicroServices.push(obj);
            }
        }

        if (params.ServiceTsfLoadBalanceConf) {
            let obj = new TsfLoadBalanceConfResp();
            obj.deserialize(params.ServiceTsfLoadBalanceConf)
            this.ServiceTsfLoadBalanceConf = obj;
        }

        if (params.ServiceTsfHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.ServiceTsfHealthCheckConf)
            this.ServiceTsfHealthCheckConf = obj;
        }
        this.TargetServicesLoadBalanceConf = 'TargetServicesLoadBalanceConf' in params ? params.TargetServicesLoadBalanceConf : null;

        if (params.TargetServicesHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.TargetServicesHealthCheckConf)
            this.TargetServicesHealthCheckConf = obj;
        }
        this.ServiceScfFunctionName = 'ServiceScfFunctionName' in params ? params.ServiceScfFunctionName : null;
        this.ServiceWebsocketRegisterFunctionName = 'ServiceWebsocketRegisterFunctionName' in params ? params.ServiceWebsocketRegisterFunctionName : null;
        this.ServiceWebsocketCleanupFunctionName = 'ServiceWebsocketCleanupFunctionName' in params ? params.ServiceWebsocketCleanupFunctionName : null;
        this.ServiceWebsocketTransportFunctionName = 'ServiceWebsocketTransportFunctionName' in params ? params.ServiceWebsocketTransportFunctionName : null;
        this.ServiceScfFunctionNamespace = 'ServiceScfFunctionNamespace' in params ? params.ServiceScfFunctionNamespace : null;
        this.ServiceScfFunctionQualifier = 'ServiceScfFunctionQualifier' in params ? params.ServiceScfFunctionQualifier : null;
        this.ServiceWebsocketRegisterFunctionNamespace = 'ServiceWebsocketRegisterFunctionNamespace' in params ? params.ServiceWebsocketRegisterFunctionNamespace : null;
        this.ServiceWebsocketRegisterFunctionQualifier = 'ServiceWebsocketRegisterFunctionQualifier' in params ? params.ServiceWebsocketRegisterFunctionQualifier : null;
        this.ServiceWebsocketTransportFunctionNamespace = 'ServiceWebsocketTransportFunctionNamespace' in params ? params.ServiceWebsocketTransportFunctionNamespace : null;
        this.ServiceWebsocketTransportFunctionQualifier = 'ServiceWebsocketTransportFunctionQualifier' in params ? params.ServiceWebsocketTransportFunctionQualifier : null;
        this.ServiceWebsocketCleanupFunctionNamespace = 'ServiceWebsocketCleanupFunctionNamespace' in params ? params.ServiceWebsocketCleanupFunctionNamespace : null;
        this.ServiceWebsocketCleanupFunctionQualifier = 'ServiceWebsocketCleanupFunctionQualifier' in params ? params.ServiceWebsocketCleanupFunctionQualifier : null;
        this.ServiceScfIsIntegratedResponse = 'ServiceScfIsIntegratedResponse' in params ? params.ServiceScfIsIntegratedResponse : null;
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;

        if (params.TagSpecifications) {
            let obj = new Tag();
            obj.deserialize(params.TagSpecifications)
            this.TagSpecifications = obj;
        }
        this.IsDeleteResponseErrorCodes = 'IsDeleteResponseErrorCodes' in params ? params.IsDeleteResponseErrorCodes : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseSuccessExample = 'ResponseSuccessExample' in params ? params.ResponseSuccessExample : null;
        this.ResponseFailExample = 'ResponseFailExample' in params ? params.ResponseFailExample : null;

        if (params.ServiceConfig) {
            let obj = new ServiceConfig();
            obj.deserialize(params.ServiceConfig)
            this.ServiceConfig = obj;
        }
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;

        if (params.ServiceParameters) {
            this.ServiceParameters = new Array();
            for (let z in params.ServiceParameters) {
                let obj = new ServiceParameter();
                obj.deserialize(params.ServiceParameters[z]);
                this.ServiceParameters.push(obj);
            }
        }

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }

        if (params.ResponseErrorCodes) {
            this.ResponseErrorCodes = new Array();
            for (let z in params.ResponseErrorCodes) {
                let obj = new ResponseErrorCodeReq();
                obj.deserialize(params.ResponseErrorCodes[z]);
                this.ResponseErrorCodes.push(obj);
            }
        }

    }
}

/**
 * ModifyUsagePlan request structure.
 * @class
 */
class ModifyUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique usage plan ID.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Custom usage plan name after modification.
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * Custom usage plan description after modification.
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * Total number of requests allowed. Valid values: -1, [1,99999999]. The default value is `-1`, which indicates no limit.
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * Limit of requests per second. Valid values: -1, [1,2000]. The default value is `-1`, which indicates no limit.
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;

    }
}

/**
 * API request configuration
 * @class
 */
class ApiRequestConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * path
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Method
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * ModifyService request structure.
 * @class
 */
class ModifyServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be modified.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Service name after modification.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Service description after modification.
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * Service frontend request type after modification, such as `http`, `https`, and `http&https`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Network type list, which is used to specify the supported network types. INNER: private network access; OUTER: public network access. Default value: OUTER.
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;

    }
}

/**
 * API status
 * @class
 */
class ApiIdStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique API ID.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API description
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * API path.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API method.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Service creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Service modification time.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * API name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * Unique VPC ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * API type.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API protocol.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Whether to enable debugging after purchase.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * Authorization type.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * API business type.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * Unique ID of associated authorization API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * List of business APIs associated with authorization API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RelationBuniessApiIds = null;

        /**
         * OAuth configuration information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * Token storage position, which is an OAuth 2.0 API request.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TokenLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;
        this.RelationBuniessApiIds = 'RelationBuniessApiIds' in params ? params.RelationBuniessApiIds : null;

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }
        this.TokenLocation = 'TokenLocation' in params ? params.TokenLocation : null;

    }
}

/**
 * CreateApi request structure.
 * @class
 */
class CreateApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of API.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API backend service type. Valid values: HTTP, MOCK, TSF, CLB, SCF, WEBSOCKET, TARGET (in beta test).
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * API backend service timeout period in seconds.
         * @type {number || null}
         */
        this.ServiceTimeout = null;

        /**
         * API frontend request type, such as HTTP, HTTPS, or HTTP and HTTPS.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Request frontend configuration.
         * @type {ApiRequestConfig || null}
         */
        this.RequestConfig = null;

        /**
         * Custom API name.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * Custom API description.
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * API type. Valid values: NORMAL (general API), TSF (microservice API). Default value: NORMAL.
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API authentication type. Valid values: SECRET (key pair authentication), NONE (no authentication), OAUTH. Default value: NONE.
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * Whether to enable CORS.
         * @type {boolean || null}
         */
        this.EnableCORS = null;

        /**
         * Constant parameter.
         * @type {Array.<ConstantParameter> || null}
         */
        this.ConstantParameters = null;

        /**
         * Frontend request parameter.
         * @type {Array.<RequestParameter> || null}
         */
        this.RequestParameters = null;

        /**
         * This field is valid if `AuthType` is `OAUTH`. NORMAL: business API; OAUTH: authorization API.
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * Returned message of API backend Mock, which is required if `ServiceType` is `Mock`.
         * @type {string || null}
         */
        this.ServiceMockReturnMessage = null;

        /**
         * List of microservices bound to API.
         * @type {Array.<MicroServiceReq> || null}
         */
        this.MicroServices = null;

        /**
         * Load balancing configuration of microservice.
         * @type {TsfLoadBalanceConfResp || null}
         */
        this.ServiceTsfLoadBalanceConf = null;

        /**
         * Health check configuration of microservice.
         * @type {HealthCheckConf || null}
         */
        this.ServiceTsfHealthCheckConf = null;

        /**
         * `target` type backend resource information (in beta test).
         * @type {Array.<TargetServicesReq> || null}
         */
        this.TargetServices = null;

        /**
         * `target` type load balancing configuration (in beta test).
         * @type {number || null}
         */
        this.TargetServicesLoadBalanceConf = null;

        /**
         * `target` health check configuration (in beta test).
         * @type {HealthCheckConf || null}
         */
        this.TargetServicesHealthCheckConf = null;

        /**
         * SCF function name, which takes effect if the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceScfFunctionName = null;

        /**
         * SCF WebSocket registration function, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionName = null;

        /**
         * SCF WebSocket cleanup function, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionName = null;

        /**
         * SCF WebSocket transfer function, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionName = null;

        /**
         * SCF function namespace, which takes effect if the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceScfFunctionNamespace = null;

        /**
         * SCF function version, which takes effect if the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceScfFunctionQualifier = null;

        /**
         * SCF WebSocket registration function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionNamespace = null;

        /**
         * SCF WebSocket transfer function version, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionQualifier = null;

        /**
         * SCF WebSocket transfer function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionNamespace = null;

        /**
         * SCF WebSocket transfer function version, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionQualifier = null;

        /**
         * SCF WebSocket cleanup function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionNamespace = null;

        /**
         * SCF WebSocket cleanup function version, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionQualifier = null;

        /**
         * Whether to enable response integration, which takes effect if the backend type is `SCF`.
         * @type {boolean || null}
         */
        this.ServiceScfIsIntegratedResponse = null;

        /**
         * Billing after debugging starts (reserved field for marketplace).
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * Whether to delete the error codes for custom response configuration. If the value is left empty or `False`, the error codes will not be deleted. If the value is `True`, all custom response configuration error codes of the API will be deleted.
         * @type {boolean || null}
         */
        this.IsDeleteResponseErrorCodes = null;

        /**
         * Return type.
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * Sample response for successful custom response configuration.
         * @type {string || null}
         */
        this.ResponseSuccessExample = null;

        /**
         * Sample response for failed custom response configuration.
         * @type {string || null}
         */
        this.ResponseFailExample = null;

        /**
         * API backend service configuration.
         * @type {ServiceConfig || null}
         */
        this.ServiceConfig = null;

        /**
         * Unique ID of associated authorization API, which takes effect only if `AuthType` is `OAUTH` and `ApiBusinessType` is `NORMAL`. It is the unique ID of the OAuth 2.0 authorization API bound to the business API.
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * API backend service parameter.
         * @type {Array.<ServiceParameter> || null}
         */
        this.ServiceParameters = null;

        /**
         * OAuth configuration, which takes effect if `AuthType` is `OAUTH`.
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * Custom error code configuration.
         * @type {Array.<ResponseErrorCodeReq> || null}
         */
        this.ResponseErrorCodes = null;

        /**
         * TSF Serverless namespace ID (in beta test).
         * @type {string || null}
         */
        this.TargetNamespaceId = null;

        /**
         * User type.
         * @type {string || null}
         */
        this.UserType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ServiceTimeout = 'ServiceTimeout' in params ? params.ServiceTimeout : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.RequestConfig) {
            let obj = new ApiRequestConfig();
            obj.deserialize(params.RequestConfig)
            this.RequestConfig = obj;
        }
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.EnableCORS = 'EnableCORS' in params ? params.EnableCORS : null;

        if (params.ConstantParameters) {
            this.ConstantParameters = new Array();
            for (let z in params.ConstantParameters) {
                let obj = new ConstantParameter();
                obj.deserialize(params.ConstantParameters[z]);
                this.ConstantParameters.push(obj);
            }
        }

        if (params.RequestParameters) {
            this.RequestParameters = new Array();
            for (let z in params.RequestParameters) {
                let obj = new RequestParameter();
                obj.deserialize(params.RequestParameters[z]);
                this.RequestParameters.push(obj);
            }
        }
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.ServiceMockReturnMessage = 'ServiceMockReturnMessage' in params ? params.ServiceMockReturnMessage : null;

        if (params.MicroServices) {
            this.MicroServices = new Array();
            for (let z in params.MicroServices) {
                let obj = new MicroServiceReq();
                obj.deserialize(params.MicroServices[z]);
                this.MicroServices.push(obj);
            }
        }

        if (params.ServiceTsfLoadBalanceConf) {
            let obj = new TsfLoadBalanceConfResp();
            obj.deserialize(params.ServiceTsfLoadBalanceConf)
            this.ServiceTsfLoadBalanceConf = obj;
        }

        if (params.ServiceTsfHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.ServiceTsfHealthCheckConf)
            this.ServiceTsfHealthCheckConf = obj;
        }

        if (params.TargetServices) {
            this.TargetServices = new Array();
            for (let z in params.TargetServices) {
                let obj = new TargetServicesReq();
                obj.deserialize(params.TargetServices[z]);
                this.TargetServices.push(obj);
            }
        }
        this.TargetServicesLoadBalanceConf = 'TargetServicesLoadBalanceConf' in params ? params.TargetServicesLoadBalanceConf : null;

        if (params.TargetServicesHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.TargetServicesHealthCheckConf)
            this.TargetServicesHealthCheckConf = obj;
        }
        this.ServiceScfFunctionName = 'ServiceScfFunctionName' in params ? params.ServiceScfFunctionName : null;
        this.ServiceWebsocketRegisterFunctionName = 'ServiceWebsocketRegisterFunctionName' in params ? params.ServiceWebsocketRegisterFunctionName : null;
        this.ServiceWebsocketCleanupFunctionName = 'ServiceWebsocketCleanupFunctionName' in params ? params.ServiceWebsocketCleanupFunctionName : null;
        this.ServiceWebsocketTransportFunctionName = 'ServiceWebsocketTransportFunctionName' in params ? params.ServiceWebsocketTransportFunctionName : null;
        this.ServiceScfFunctionNamespace = 'ServiceScfFunctionNamespace' in params ? params.ServiceScfFunctionNamespace : null;
        this.ServiceScfFunctionQualifier = 'ServiceScfFunctionQualifier' in params ? params.ServiceScfFunctionQualifier : null;
        this.ServiceWebsocketRegisterFunctionNamespace = 'ServiceWebsocketRegisterFunctionNamespace' in params ? params.ServiceWebsocketRegisterFunctionNamespace : null;
        this.ServiceWebsocketRegisterFunctionQualifier = 'ServiceWebsocketRegisterFunctionQualifier' in params ? params.ServiceWebsocketRegisterFunctionQualifier : null;
        this.ServiceWebsocketTransportFunctionNamespace = 'ServiceWebsocketTransportFunctionNamespace' in params ? params.ServiceWebsocketTransportFunctionNamespace : null;
        this.ServiceWebsocketTransportFunctionQualifier = 'ServiceWebsocketTransportFunctionQualifier' in params ? params.ServiceWebsocketTransportFunctionQualifier : null;
        this.ServiceWebsocketCleanupFunctionNamespace = 'ServiceWebsocketCleanupFunctionNamespace' in params ? params.ServiceWebsocketCleanupFunctionNamespace : null;
        this.ServiceWebsocketCleanupFunctionQualifier = 'ServiceWebsocketCleanupFunctionQualifier' in params ? params.ServiceWebsocketCleanupFunctionQualifier : null;
        this.ServiceScfIsIntegratedResponse = 'ServiceScfIsIntegratedResponse' in params ? params.ServiceScfIsIntegratedResponse : null;
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;
        this.IsDeleteResponseErrorCodes = 'IsDeleteResponseErrorCodes' in params ? params.IsDeleteResponseErrorCodes : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseSuccessExample = 'ResponseSuccessExample' in params ? params.ResponseSuccessExample : null;
        this.ResponseFailExample = 'ResponseFailExample' in params ? params.ResponseFailExample : null;

        if (params.ServiceConfig) {
            let obj = new ServiceConfig();
            obj.deserialize(params.ServiceConfig)
            this.ServiceConfig = obj;
        }
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;

        if (params.ServiceParameters) {
            this.ServiceParameters = new Array();
            for (let z in params.ServiceParameters) {
                let obj = new ServiceParameter();
                obj.deserialize(params.ServiceParameters[z]);
                this.ServiceParameters.push(obj);
            }
        }

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }

        if (params.ResponseErrorCodes) {
            this.ResponseErrorCodes = new Array();
            for (let z in params.ResponseErrorCodes) {
                let obj = new ResponseErrorCodeReq();
                obj.deserialize(params.ResponseErrorCodes[z]);
                this.ResponseErrorCodes.push(obj);
            }
        }
        this.TargetNamespaceId = 'TargetNamespaceId' in params ? params.TargetNamespaceId : null;
        this.UserType = 'UserType' in params ? params.UserType : null;

    }
}

/**
 * DescribeServiceEnvironmentStrategy request structure.
 * @class
 */
class DescribeServiceEnvironmentStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ReleaseService request structure.
 * @class
 */
class ReleaseServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be published.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Name of the environment to be published. Valid values: test (test environment), prepub (pre-release environment), release (release environment).
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Release description.
         * @type {string || null}
         */
        this.ReleaseDesc = null;

        /**
         * `apiId` list, which is reserved. Full API release is used by default.
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ReleaseDesc = 'ReleaseDesc' in params ? params.ReleaseDesc : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * DeleteService response structure.
 * @class
 */
class DeleteServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether deletion succeeded.
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
 * DescribeServiceEnvironmentReleaseHistory response structure.
 * @class
 */
class DescribeServiceEnvironmentReleaseHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service release history.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ServiceReleaseHistory || null}
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
            let obj = new ServiceReleaseHistory();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of service release environment.
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment name.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Access path.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Release status. 1: published. 0: not published.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Running version.
         * @type {string || null}
         */
        this.VersionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;

    }
}

/**
 * Service release list details
 * @class
 */
class ServiceReleaseHistoryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Version description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VersionDesc = null;

        /**
         * Version release time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReleaseTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.VersionDesc = 'VersionDesc' in params ? params.VersionDesc : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;

    }
}

/**
 * ReleaseService response structure.
 * @class
 */
class ReleaseServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Release information.
         * @type {ReleaseService || null}
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
            let obj = new ReleaseService();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnBindIPStrategy request structure.
 * @class
 */
class UnBindIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be unbound.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique ID of the IP policy to be unbound.
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * Environment to be unbound.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * List of APIs to be unbound.
         * @type {Array.<string> || null}
         */
        this.UnBindApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.UnBindApiIds = 'UnBindApiIds' in params ? params.UnBindApiIds : null;

    }
}

/**
 * ModifyApiIncrement request structure.
 * @class
 */
class ModifyApiIncrementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API ID
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * Authorization type of the API to be modified (you can select `OAUTH`, i.e., authorization API)
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * Public key value to be modified by OAuth API
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * OAuth API redirect address
         * @type {string || null}
         */
        this.LoginRedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.LoginRedirectUrl = 'LoginRedirectUrl' in params ? params.LoginRedirectUrl : null;

    }
}

/**
 * GenerateApiDocument request structure.
 * @class
 */
class GenerateApiDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of the document to be created.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Environment of the service for which to create an SDK.
         * @type {string || null}
         */
        this.GenEnvironment = null;

        /**
         * Programming language of the SDK to be created. Currently, only Python and JavaScript are supported.
         * @type {string || null}
         */
        this.GenLanguage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.GenEnvironment = 'GenEnvironment' in params ? params.GenEnvironment : null;
        this.GenLanguage = 'GenLanguage' in params ? params.GenLanguage : null;

    }
}

/**
 * List of usage plans bound to service
 * @class
 */
class ServiceUsagePlanSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of usage plans bound to service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of usage plans bound to service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApiUsagePlan> || null}
         */
        this.ServiceUsagePlanList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ServiceUsagePlanList) {
            this.ServiceUsagePlanList = new Array();
            for (let z in params.ServiceUsagePlanList) {
                let obj = new ApiUsagePlan();
                obj.deserialize(params.ServiceUsagePlanList[z]);
                this.ServiceUsagePlanList.push(obj);
            }
        }

    }
}

/**
 * DescribeIPStrategyApisStatus response structure.
 * @class
 */
class DescribeIPStrategyApisStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of APIs bound to environment.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IPStrategyApiStatus || null}
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
            let obj = new IPStrategyApiStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyServiceEnvironmentStrategy response structure.
 * @class
 */
class ModifyServiceEnvironmentStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether modification succeeded.
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
 * UpdateApiKey response structure.
 * @class
 */
class UpdateApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key details after change.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ApiKey || null}
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
            let obj = new ApiKey();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApisStatus response structure.
 * @class
 */
class DescribeApisStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of API details.
         * @type {ApisStatus || null}
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
            let obj = new ApisStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApiKeysStatus request structure.
 * @class
 */
class DescribeApiKeysStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter. Valid values: AccessKeyId, AccessKeySecret, SecretName, NotUsagePlanId, Status, KeyWord (match with `name` or `path`).
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeApi response structure.
 * @class
 */
class DescribeApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API details.
         * @type {ApiInfo || null}
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
            let obj = new ApiInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindSecretIds response structure.
 * @class
 */
class BindSecretIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether binding succeeded.
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
 * Return of API creation
 * @class
 */
class CreateApiRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * API ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * path
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * method
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * Information of environment bound to usage plan
 * @class
 */
class UsagePlanBindEnvironment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Unique service ID.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * DeleteApi request structure.
 * @class
 */
class DeleteApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of API.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique API ID.
         * @type {string || null}
         */
        this.ApiId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;

    }
}

/**
 * DescribeServiceSubDomainMappings request structure.
 * @class
 */
class DescribeServiceSubDomainMappingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Custom domain name bound to service.
         * @type {string || null}
         */
        this.SubDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;

    }
}

/**
 * DescribeServiceEnvironmentList request structure.
 * @class
 */
class DescribeServiceEnvironmentListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be queried.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Custom service domain name path mapping
 * @class
 */
class ServiceSubDomainMappings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the default path mapping is used. true: use the default path mapping; false: use the custom path mapping (`PathMappingSet` is required in this case).
         * @type {boolean || null}
         */
        this.IsDefaultMapping = null;

        /**
         * Custom path mapping list.
         * @type {Array.<PathMapping> || null}
         */
        this.PathMappingSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDefaultMapping = 'IsDefaultMapping' in params ? params.IsDefaultMapping : null;

        if (params.PathMappingSet) {
            this.PathMappingSet = new Array();
            for (let z in params.PathMappingSet) {
                let obj = new PathMapping();
                obj.deserialize(params.PathMappingSet[z]);
                this.PathMappingSet.push(obj);
            }
        }

    }
}

/**
 * DescribeApiKey request structure.
 * @class
 */
class DescribeApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API key ID.
         * @type {string || null}
         */
        this.AccessKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;

    }
}

/**
 * DescribeUsagePlan response structure.
 * @class
 */
class DescribeUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage plan details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UsagePlanInfo || null}
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
            let obj = new UsagePlanInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * >Key-value pair filter for conditional filtering queries, such as filtering ID, name, status, etc.
> * If there are multiple `Filter`, the relationship among them is logical `AND`.
> * If there are multiple `Values` in the same `Filter`, the relationship among them is logical `OR`.
>

 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field to be filtered.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value of field.
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
 * List of keys bound to usage plan.
 * @class
 */
class UsagePlanBindSecretStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of keys bound to usage plan.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of key details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UsagePlanBindSecret> || null}
         */
        this.AccessKeyList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AccessKeyList) {
            this.AccessKeyList = new Array();
            for (let z in params.AccessKeyList) {
                let obj = new UsagePlanBindSecret();
                obj.deserialize(params.AccessKeyList[z]);
                this.AccessKeyList.push(obj);
            }
        }

    }
}

/**
 * DeleteServiceSubDomainMapping response structure.
 * @class
 */
class DeleteServiceSubDomainMappingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the path mapping of the custom domain name is successfully deleted.
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
 * DescribeServiceUsagePlan request structure.
 * @class
 */
class DescribeServiceUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be queried.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeUsagePlansStatus request structure.
 * @class
 */
class DescribeUsagePlansStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Usage plan filter. Valid values: UsagePlanId, UsagePlanName, NotServiceId, NotApiId, Environment.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * Details of environments bound to usage plan.
 * @class
 */
class UsagePlanEnvironment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of bound service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique API ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API path.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API method.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Name of bound environment.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * Used quota.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InUseRequestNum = null;

        /**
         * Maximum number of requests.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * Maximum number of requests per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Last modified time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * Service name.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.InUseRequestNum = 'InUseRequestNum' in params ? params.InUseRequestNum : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * ModifyIPStrategy request structure.
 * @class
 */
class ModifyIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of the policy to be modified.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique ID of the policy to be modified.
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * Details of the policy to be modified.
         * @type {string || null}
         */
        this.StrategyData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.StrategyData = 'StrategyData' in params ? params.StrategyData : null;

    }
}

/**
 * UnBindSecretIds request structure.
 * @class
 */
class UnBindSecretIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the usage plan to be unbound.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Array of IDs of the keys to be unbound.
         * @type {Array.<string> || null}
         */
        this.AccessKeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.AccessKeyIds = 'AccessKeyIds' in params ? params.AccessKeyIds : null;

    }
}

/**
 * API environment binding policy
 * @class
 */
class ApiEnvironmentStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique API ID.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * Custom API name.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API path, such as `/path`.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API method, such as `GET`.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Environment throttling information.
         * @type {Array.<EnvironmentStrategy> || null}
         */
        this.EnvironmentStrategySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

        if (params.EnvironmentStrategySet) {
            this.EnvironmentStrategySet = new Array();
            for (let z in params.EnvironmentStrategySet) {
                let obj = new EnvironmentStrategy();
                obj.deserialize(params.EnvironmentStrategySet[z]);
                this.EnvironmentStrategySet.push(obj);
            }
        }

    }
}

/**
 * UnBindSecretIds response structure.
 * @class
 */
class UnBindSecretIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether unbinding succeeded.
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
 * Details of usage plans bound to API or service
 * @class
 */
class ApiUsagePlan extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique API ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API path.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API method.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Unique usage plan ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Usage plan name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * Usage plan description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * Service environment bound to usage plan.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * Used quota.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InUseRequestNum = null;

        /**
         * Total number of requests allowed. `-1` indicates no limit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * Request QPS upper limit. `-1` indicates no limit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * Usage plan creation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Last modified time of usage plan.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * Service name.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.InUseRequestNum = 'InUseRequestNum' in params ? params.InUseRequestNum : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * List of APIs bound to policy
 * @class
 */
class IPStrategyApi extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique API ID.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * Custom API name.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API type. Valid values: NORMAL (general API), TSF (microservice API).
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API path, such as `/path`.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API request method, such as `GET`.
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Unique ID of another policy bound to API.
         * @type {string || null}
         */
        this.OtherIPStrategyId = null;

        /**
         * Environment bound to API.
         * @type {string || null}
         */
        this.OtherEnvironmentName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.OtherIPStrategyId = 'OtherIPStrategyId' in params ? params.OtherIPStrategyId : null;
        this.OtherEnvironmentName = 'OtherEnvironmentName' in params ? params.OtherEnvironmentName : null;

    }
}

/**
 * API document download
 * @class
 */
class DocumentSDK extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download link of generated file. Generated documents will be stored in COS.
         * @type {string || null}
         */
        this.DocumentURL = null;

        /**
         * Download link of generated SDK file. Generated SDK files will be stored in COS.
         * @type {string || null}
         */
        this.SdkURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DocumentURL = 'DocumentURL' in params ? params.DocumentURL : null;
        this.SdkURL = 'SdkURL' in params ? params.SdkURL : null;

    }
}

/**
 * ModifyServiceEnvironmentStrategy request structure.
 * @class
 */
class ModifyServiceEnvironmentStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Throttling value.
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Environment list.
         * @type {Array.<string> || null}
         */
        this.EnvironmentNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.EnvironmentNames = 'EnvironmentNames' in params ? params.EnvironmentNames : null;

    }
}

/**
 * DescribeServiceSubDomains request structure.
 * @class
 */
class DescribeServiceSubDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * GenerateApiDocument response structure.
 * @class
 */
class GenerateApiDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API document and SDK link.
         * @type {DocumentSDK || null}
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
            let obj = new DocumentSDK();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUsagePlanEnvironments response structure.
 * @class
 */
class DescribeUsagePlanEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usage plan binding details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UsagePlanEnvironmentStatus || null}
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
            let obj = new UsagePlanEnvironmentStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServiceSubDomains response structure.
 * @class
 */
class DescribeServiceSubDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom service domain name query.
         * @type {DomainSets || null}
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
            let obj = new DomainSets();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindSubDomain request structure.
 * @class
 */
class BindSubDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Custom domain name to be bound.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Protocol supported by service. Valid values: http, https, http&https.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Network type. Valid values: OUTER, INNER.
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Whether the default path mapping is used. The default value is `true`. If the value is `false`, the custom path mapping will be used and `PathMappingSet` will be required in this case.
         * @type {boolean || null}
         */
        this.IsDefaultMapping = null;

        /**
         * Default domain name.
         * @type {string || null}
         */
        this.NetSubDomain = null;

        /**
         * Unique certificate ID of the custom domain name to be bound. The certificate can be uploaded if `Protocol` is `https` or `http&https`.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Custom domain name path mapping. It can contain up to 3 `Environment` values which can be set to only `test`, `prepub`, and `release`, respectively.
         * @type {Array.<PathMapping> || null}
         */
        this.PathMappingSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.IsDefaultMapping = 'IsDefaultMapping' in params ? params.IsDefaultMapping : null;
        this.NetSubDomain = 'NetSubDomain' in params ? params.NetSubDomain : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

        if (params.PathMappingSet) {
            this.PathMappingSet = new Array();
            for (let z in params.PathMappingSet) {
                let obj = new PathMapping();
                obj.deserialize(params.PathMappingSet[z]);
                this.PathMappingSet.push(obj);
            }
        }

    }
}

/**
 * Details of API bound to IP policy
 * @class
 */
class IPStrategyApiStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of APIs bound to environment.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of APIs bound to environment.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IPStrategyApi> || null}
         */
        this.ApiIdStatusSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiIdStatusSet) {
            this.ApiIdStatusSet = new Array();
            for (let z in params.ApiIdStatusSet) {
                let obj = new IPStrategyApi();
                obj.deserialize(params.ApiIdStatusSet[z]);
                this.ApiIdStatusSet.push(obj);
            }
        }

    }
}

/**
 * CreateIPStrategy response structure.
 * @class
 */
class CreateIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * New IP policy details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IPStrategy || null}
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
            let obj = new IPStrategy();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindIPStrategy request structure.
 * @class
 */
class BindIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of the IP policy to be bound.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique ID of the IP policy to be bound.
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * Environment to be bound to IP policy.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * List of APIs to be bound to IP policy.
         * @type {Array.<string> || null}
         */
        this.BindApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.BindApiIds = 'BindApiIds' in params ? params.BindApiIds : null;

    }
}

/**
 * TSF type input parameters
 * @class
 */
class MicroServiceReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * Microservice cluster.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Microservice namespace.
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Microservice name.
         * @type {string || null}
         */
        this.MicroServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.MicroServiceName = 'MicroServiceName' in params ? params.MicroServiceName : null;

    }
}

/**
 * Custom error code
 * @class
 */
class ErrorCodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom response configuration error code.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Custom response configuration error message.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Custom response configuration error code remarks.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Custom error code conversion.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ConvertedCode = null;

        /**
         * Whether to enable error code conversion.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.NeedConvert = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ConvertedCode = 'ConvertedCode' in params ? params.ConvertedCode : null;
        this.NeedConvert = 'NeedConvert' in params ? params.NeedConvert : null;

    }
}

/**
 * List of policies bound to environment
 * @class
 */
class ServiceEnvironmentStrategyStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of throttling policies.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Throttling policy list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ServiceEnvironmentStrategy> || null}
         */
        this.EnvironmentList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.EnvironmentList) {
            this.EnvironmentList = new Array();
            for (let z in params.EnvironmentList) {
                let obj = new ServiceEnvironmentStrategy();
                obj.deserialize(params.EnvironmentList[z]);
                this.EnvironmentList.push(obj);
            }
        }

    }
}

/**
 * DescribeApiEnvironmentStrategy response structure.
 * @class
 */
class DescribeApiEnvironmentStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of policies bound to API
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ApiEnvironmentStrategyStataus || null}
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
            let obj = new ApiEnvironmentStrategyStataus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of microservice bound to API.
 * @class
 */
class MicroService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Microservice cluster ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Microservice namespace ID.
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * Microservice name.
         * @type {string || null}
         */
        this.MicroServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.MicroServiceName = 'MicroServiceName' in params ? params.MicroServiceName : null;

    }
}

/**
 * List of policies bound to API
 * @class
 */
class ApiEnvironmentStrategyStataus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of throttling policies bound to API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of throttling policies bound to API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApiEnvironmentStrategy> || null}
         */
        this.ApiEnvironmentStrategySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiEnvironmentStrategySet) {
            this.ApiEnvironmentStrategySet = new Array();
            for (let z in params.ApiEnvironmentStrategySet) {
                let obj = new ApiEnvironmentStrategy();
                obj.deserialize(params.ApiEnvironmentStrategySet[z]);
                this.ApiEnvironmentStrategySet.push(obj);
            }
        }

    }
}

/**
 * DeleteIPStrategy response structure.
 * @class
 */
class DeleteIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether deletion succeeded.
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
 * Key details
 * @class
 */
class ApiKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Created API key ID.
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * Created API key.
         * @type {string || null}
         */
        this.AccessKeySecret = null;

        /**
         * Key type. Valid values: auto, manual.
         * @type {string || null}
         */
        this.AccessKeyType = null;

        /**
         * Custom key name.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Last modified time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * Key status. 0: disabled. 1: enabled.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
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
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.AccessKeySecret = 'AccessKeySecret' in params ? params.AccessKeySecret : null;
        this.AccessKeyType = 'AccessKeyType' in params ? params.AccessKeyType : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * BindEnvironment request structure.
 * @class
 */
class BindEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of unique IDs of the usage plans to be bound.
         * @type {Array.<string> || null}
         */
        this.UsagePlanIds = null;

        /**
         * Binding type. Valid values: API, SERVICE. Default value: SERVICE.
         * @type {string || null}
         */
        this.BindType = null;

        /**
         * Environment to be bound.
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * Unique ID of the service to be bound.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique API ID array, which is required if `bindType` is `API`.
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanIds = 'UsagePlanIds' in params ? params.UsagePlanIds : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * DescribeIPStrategy request structure.
 * @class
 */
class DescribeIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique IP policy ID.
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * Environment associated with policy.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter, which is a reserved field. Filtering is not supported currently.
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeUsagePlanEnvironments request structure.
 * @class
 */
class DescribeUsagePlanEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the usage plan to be queried.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Binding type. Valid values: API, SERVICE. Default value: SERVICE.
         * @type {string || null}
         */
        this.BindType = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateApiKey response structure.
 * @class
 */
class CreateApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * New key details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ApiKey || null}
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
            let obj = new ApiKey();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServiceReleaseVersion response structure.
 * @class
 */
class DescribeServiceReleaseVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service release version list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ServiceReleaseVersion || null}
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
            let obj = new ServiceReleaseVersion();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Request parameter
 * @class
 */
class RequestParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Request parameter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Parameter position
         * @type {string || null}
         */
        this.Position = null;

        /**
         * Parameter type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Default value
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Whether it is required
         * @type {boolean || null}
         */
        this.Required = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.Required = 'Required' in params ? params.Required : null;

    }
}

/**
 * Usage plan details.
 * @class
 */
class UsagePlanInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique usage plan ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Usage plan name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * Usage plan description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * Number of initialization calls.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InitQuota = null;

        /**
         * Limit of requests per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * Maximum number of calls.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * Whether to hide.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsHide = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Last modified time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * Number of bound keys.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BindSecretIdTotalCount = null;

        /**
         * Details of bound keys.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BindSecretIds = null;

        /**
         * Number of bound environments.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BindEnvironmentTotalCount = null;

        /**
         * Details of bound environments.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UsagePlanBindEnvironment> || null}
         */
        this.BindEnvironments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.InitQuota = 'InitQuota' in params ? params.InitQuota : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.IsHide = 'IsHide' in params ? params.IsHide : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.BindSecretIdTotalCount = 'BindSecretIdTotalCount' in params ? params.BindSecretIdTotalCount : null;
        this.BindSecretIds = 'BindSecretIds' in params ? params.BindSecretIds : null;
        this.BindEnvironmentTotalCount = 'BindEnvironmentTotalCount' in params ? params.BindEnvironmentTotalCount : null;

        if (params.BindEnvironments) {
            this.BindEnvironments = new Array();
            for (let z in params.BindEnvironments) {
                let obj = new UsagePlanBindEnvironment();
                obj.deserialize(params.BindEnvironments[z]);
                this.BindEnvironments.push(obj);
            }
        }

    }
}

/**
 * DescribeServiceEnvironmentReleaseHistory request structure.
 * @class
 */
class DescribeServiceEnvironmentReleaseHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be queried.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Environment name.
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Usage plan list display.
 * @class
 */
class UsagePlanStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique usage plan ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * Custom usage plan name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * Custom usage plan description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * Maximum number of requests per second.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * Total number of requests allowed. `-1` indicates no limit.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Last modified time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;

    }
}

/**
 * CreateService response structure.
 * @class
 */
class CreateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Custom service name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Custom service description.
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * Default public network domain name.
         * @type {string || null}
         */
        this.OuterSubDomain = null;

        /**
         * Default private network domain name of VPC
         * @type {string || null}
         */
        this.InnerSubDomain = null;

        /**
         * Service creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Network type list. INNER: private network access; OUTER: public network access.
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

        /**
         * IP version number.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IpVersion = null;

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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.OuterSubDomain = 'OuterSubDomain' in params ? params.OuterSubDomain : null;
        this.InnerSubDomain = 'InnerSubDomain' in params ? params.InnerSubDomain : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;
        this.IpVersion = 'IpVersion' in params ? params.IpVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * API status details
 * @class
 */
class DesApisStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique API ID.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * Custom API description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Last modified time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * API name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * VPC ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Unique VPC ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * API type. Valid values: NORMAL (general API), TSF (microservice API).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API protocol.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Whether to enable debugging after purchase (reserved field for the marketplace)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * API authentication type. Valid values: SECRET (key pair authentication), NONE (no authentication), OAUTH.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * OAuth API type, which is valid if `AuthType` is `OAUTH`. Valid values: NORMAL (business API), OAUTH (authorization API).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * Unique ID of associated authorization API, which takes effect only if `AuthType` is `OAUTH` and `ApiBusinessType` is `NORMAL`. It is the unique ID of the OAuth 2.0 authorization API bound to the business API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * OAuth configuration information, which takes effect if `AuthType` is `OAUTH`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * List of business APIs associated with authorization API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RelationBuniessApiIds = null;

        /**
         * Information of tags associated with API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * API path, such as `/path`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API request method, such as `GET`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }
        this.RelationBuniessApiIds = 'RelationBuniessApiIds' in params ? params.RelationBuniessApiIds : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * DescribeApiKeysStatus response structure.
 * @class
 */
class DescribeApiKeysStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ApiKeysStatus || null}
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
            let obj = new ApiKeysStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Service list display
 * @class
 */
class ServicesStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of services in list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Service list details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Service> || null}
         */
        this.ServiceSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ServiceSet) {
            this.ServiceSet = new Array();
            for (let z in params.ServiceSet) {
                let obj = new Service();
                obj.deserialize(params.ServiceSet[z]);
                this.ServiceSet.push(obj);
            }
        }

    }
}

/**
 * DescribeLogSearch request structure.
 * @class
 */
class DescribeLogSearchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Log end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Service ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Reserved field
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of logs to be returned at a time. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Subsequent content can be obtained based on the `ConText` returned last time. Up to 10,000 data entries can be obtained
         * @type {string || null}
         */
        this.ConText = null;

        /**
         * Sorting by time. Valid values: asc (ascending), desc (descending). Default value: desc
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * Reserved field
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Search criterion. Valid values:
req_id: "="
api_id: "="
cip: "="
uip: ":"
err_msg: ":"
rsp_st: "=", "!=", ":", ">", "<"
req_t: ">=", "<="

Note:
":" indicates included, and "!=" indicates not equal to. For the meanings of fields, please see the `LogSet` description of the output parameter
         * @type {Array.<LogQuery> || null}
         */
        this.LogQuerys = null;

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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ConText = 'ConText' in params ? params.ConText : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Query = 'Query' in params ? params.Query : null;

        if (params.LogQuerys) {
            this.LogQuerys = new Array();
            for (let z in params.LogQuerys) {
                let obj = new LogQuery();
                obj.deserialize(params.LogQuerys[z]);
                this.LogQuerys.push(obj);
            }
        }

    }
}

/**
 * API list status description
 * @class
 */
class ApisStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible APIs.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * API list.
         * @type {Array.<DesApisStatus> || null}
         */
        this.ApiIdStatusSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiIdStatusSet) {
            this.ApiIdStatusSet = new Array();
            for (let z in params.ApiIdStatusSet) {
                let obj = new DesApisStatus();
                obj.deserialize(params.ApiIdStatusSet[z]);
                this.ApiIdStatusSet.push(obj);
            }
        }

    }
}

/**
 * Key list
 * @class
 */
class ApiKeysStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible API keys.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * API key list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApiKey> || null}
         */
        this.ApiKeySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiKeySet) {
            this.ApiKeySet = new Array();
            for (let z in params.ApiKeySet) {
                let obj = new ApiKey();
                obj.deserialize(params.ApiKeySet[z]);
                this.ApiKeySet.push(obj);
            }
        }

    }
}

/**
 * DescribeServiceUsagePlan response structure.
 * @class
 */
class DescribeServiceUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of usage plans bound to service.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ServiceUsagePlanSet || null}
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
            let obj = new ServiceUsagePlanSet();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApiUsagePlan request structure.
 * @class
 */
class DescribeApiUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of the service to be queried.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UnBindSubDomain request structure.
 * @class
 */
class UnBindSubDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Custom domain name to be unbound.
         * @type {string || null}
         */
        this.SubDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;

    }
}

/**
 * DescribeApi request structure.
 * @class
 */
class DescribeApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of API.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Unique API ID.
         * @type {string || null}
         */
        this.ApiId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;

    }
}

/**
 * DescribeIPStrategysStatus response structure.
 * @class
 */
class DescribeIPStrategysStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of eligible policies.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IPStrategysStatus || null}
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
            let obj = new IPStrategysStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * API information
 * @class
 */
class ApiInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique service ID of API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Service name of API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Service description of API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * Unique API ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * Creation time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Last modified time in the format of YYYY-MM-DDThh:mm:ssZ according to ISO 8601 standard. UTC time is used.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * API name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API type. Valid values: NORMAL (general API), TSF (microservice API).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API frontend request type, such as HTTP, HTTPS, or HTTP and HTTPS.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * API authentication type. Valid values: SECRET (key pair authentication), NONE (no authentication), OAUTH.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * OAuth API type. Valid values: NORMAL (business API), OAUTH (authorization API).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * Unique ID of the authorization API associated with OAuth business API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * OAuth configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * Whether to enable debugging after purchase (reserved field for the marketplace).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * Request frontend configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RequestConfig || null}
         */
        this.RequestConfig = null;

        /**
         * Return type.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * Sample response for successful custom response configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResponseSuccessExample = null;

        /**
         * Sample response for failed custom response configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResponseFailExample = null;

        /**
         * Custom error code configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ErrorCodes> || null}
         */
        this.ResponseErrorCodes = null;

        /**
         * Frontend request parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ReqParameter> || null}
         */
        this.RequestParameters = null;

        /**
         * API backend service timeout period in seconds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ServiceTimeout = null;

        /**
         * API backend service type. Valid values: HTTP, MOCK, TSF, CLB, SCF, WEBSOCKET, TARGET (in beta test).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * API backend service configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ServiceConfig || null}
         */
        this.ServiceConfig = null;

        /**
         * API backend service parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ServiceParameter> || null}
         */
        this.ServiceParameters = null;

        /**
         * Constant parameter.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConstantParameter> || null}
         */
        this.ConstantParameters = null;

        /**
         * Returned message of API backend Mock, which is required if `ServiceType` is `Mock`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceMockReturnMessage = null;

        /**
         * SCF function name, which takes effect if the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceScfFunctionName = null;

        /**
         * SCF function namespace, which takes effect if the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceScfFunctionNamespace = null;

        /**
         * SCF function version, which takes effect if the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceScfFunctionQualifier = null;

        /**
         * Whether integrated response is enabled.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ServiceScfIsIntegratedResponse = null;

        /**
         * SCF WebSocket registration function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionName = null;

        /**
         * SCF WebSocket registration function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionNamespace = null;

        /**
         * SCF WebSocket transfer function version, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionQualifier = null;

        /**
         * SCF WebSocket cleanup function, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionName = null;

        /**
         * SCF WebSocket cleanup function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionNamespace = null;

        /**
         * SCF WebSocket cleanup function version, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionQualifier = null;

        /**
         * WebSocket callback address.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InternalDomain = null;

        /**
         * SCF WebSocket transfer function, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionName = null;

        /**
         * SCF WebSocket transfer function namespace, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionNamespace = null;

        /**
         * SCF WebSocket transfer function version, which takes effect if the frontend type is `WEBSOCKET` and the backend type is `SCF`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionQualifier = null;

        /**
         * List of microservices bound to API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MicroService> || null}
         */
        this.MicroServices = null;

        /**
         * Microservice details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.MicroServicesInfo = null;

        /**
         * Load balancing configuration of microservice.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TsfLoadBalanceConfResp || null}
         */
        this.ServiceTsfLoadBalanceConf = null;

        /**
         * Health check configuration of microservice.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {HealthCheckConf || null}
         */
        this.ServiceTsfHealthCheckConf = null;

        /**
         * Whether to enable CORS.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EnableCORS = null;

        /**
         * Information of tags bound to API.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;

        if (params.RequestConfig) {
            let obj = new RequestConfig();
            obj.deserialize(params.RequestConfig)
            this.RequestConfig = obj;
        }
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseSuccessExample = 'ResponseSuccessExample' in params ? params.ResponseSuccessExample : null;
        this.ResponseFailExample = 'ResponseFailExample' in params ? params.ResponseFailExample : null;

        if (params.ResponseErrorCodes) {
            this.ResponseErrorCodes = new Array();
            for (let z in params.ResponseErrorCodes) {
                let obj = new ErrorCodes();
                obj.deserialize(params.ResponseErrorCodes[z]);
                this.ResponseErrorCodes.push(obj);
            }
        }

        if (params.RequestParameters) {
            this.RequestParameters = new Array();
            for (let z in params.RequestParameters) {
                let obj = new ReqParameter();
                obj.deserialize(params.RequestParameters[z]);
                this.RequestParameters.push(obj);
            }
        }
        this.ServiceTimeout = 'ServiceTimeout' in params ? params.ServiceTimeout : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.ServiceConfig) {
            let obj = new ServiceConfig();
            obj.deserialize(params.ServiceConfig)
            this.ServiceConfig = obj;
        }

        if (params.ServiceParameters) {
            this.ServiceParameters = new Array();
            for (let z in params.ServiceParameters) {
                let obj = new ServiceParameter();
                obj.deserialize(params.ServiceParameters[z]);
                this.ServiceParameters.push(obj);
            }
        }

        if (params.ConstantParameters) {
            this.ConstantParameters = new Array();
            for (let z in params.ConstantParameters) {
                let obj = new ConstantParameter();
                obj.deserialize(params.ConstantParameters[z]);
                this.ConstantParameters.push(obj);
            }
        }
        this.ServiceMockReturnMessage = 'ServiceMockReturnMessage' in params ? params.ServiceMockReturnMessage : null;
        this.ServiceScfFunctionName = 'ServiceScfFunctionName' in params ? params.ServiceScfFunctionName : null;
        this.ServiceScfFunctionNamespace = 'ServiceScfFunctionNamespace' in params ? params.ServiceScfFunctionNamespace : null;
        this.ServiceScfFunctionQualifier = 'ServiceScfFunctionQualifier' in params ? params.ServiceScfFunctionQualifier : null;
        this.ServiceScfIsIntegratedResponse = 'ServiceScfIsIntegratedResponse' in params ? params.ServiceScfIsIntegratedResponse : null;
        this.ServiceWebsocketRegisterFunctionName = 'ServiceWebsocketRegisterFunctionName' in params ? params.ServiceWebsocketRegisterFunctionName : null;
        this.ServiceWebsocketRegisterFunctionNamespace = 'ServiceWebsocketRegisterFunctionNamespace' in params ? params.ServiceWebsocketRegisterFunctionNamespace : null;
        this.ServiceWebsocketRegisterFunctionQualifier = 'ServiceWebsocketRegisterFunctionQualifier' in params ? params.ServiceWebsocketRegisterFunctionQualifier : null;
        this.ServiceWebsocketCleanupFunctionName = 'ServiceWebsocketCleanupFunctionName' in params ? params.ServiceWebsocketCleanupFunctionName : null;
        this.ServiceWebsocketCleanupFunctionNamespace = 'ServiceWebsocketCleanupFunctionNamespace' in params ? params.ServiceWebsocketCleanupFunctionNamespace : null;
        this.ServiceWebsocketCleanupFunctionQualifier = 'ServiceWebsocketCleanupFunctionQualifier' in params ? params.ServiceWebsocketCleanupFunctionQualifier : null;
        this.InternalDomain = 'InternalDomain' in params ? params.InternalDomain : null;
        this.ServiceWebsocketTransportFunctionName = 'ServiceWebsocketTransportFunctionName' in params ? params.ServiceWebsocketTransportFunctionName : null;
        this.ServiceWebsocketTransportFunctionNamespace = 'ServiceWebsocketTransportFunctionNamespace' in params ? params.ServiceWebsocketTransportFunctionNamespace : null;
        this.ServiceWebsocketTransportFunctionQualifier = 'ServiceWebsocketTransportFunctionQualifier' in params ? params.ServiceWebsocketTransportFunctionQualifier : null;

        if (params.MicroServices) {
            this.MicroServices = new Array();
            for (let z in params.MicroServices) {
                let obj = new MicroService();
                obj.deserialize(params.MicroServices[z]);
                this.MicroServices.push(obj);
            }
        }
        this.MicroServicesInfo = 'MicroServicesInfo' in params ? params.MicroServicesInfo : null;

        if (params.ServiceTsfLoadBalanceConf) {
            let obj = new TsfLoadBalanceConfResp();
            obj.deserialize(params.ServiceTsfLoadBalanceConf)
            this.ServiceTsfLoadBalanceConf = obj;
        }

        if (params.ServiceTsfHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.ServiceTsfHealthCheckConf)
            this.ServiceTsfHealthCheckConf = obj;
        }
        this.EnableCORS = 'EnableCORS' in params ? params.EnableCORS : null;

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
 * Environment throttling
 * @class
 */
class EnvironmentStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment name
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * Throttling value
         * @type {number || null}
         */
        this.Quota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Quota = 'Quota' in params ? params.Quota : null;

    }
}

/**
 * EnableApiKey request structure.
 * @class
 */
class EnableApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the key to be enabled.
         * @type {string || null}
         */
        this.AccessKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;

    }
}

/**
 * DescribeServicesStatus response structure.
 * @class
 */
class DescribeServicesStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service list query result.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ServicesStatus || null}
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
            let obj = new ServicesStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApiKey request structure.
 * @class
 */
class CreateApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom key name.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Key type. Valid values: auto, manual (custom key). Default value: auto.
         * @type {string || null}
         */
        this.AccessKeyType = null;

        /**
         * Custom key ID, which is required if `AccessKeyType` is `manual`. It can contain 5–50 letters, digits, and underscores.
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * Custom key, which is required if `AccessKeyType` is `manual`. It can contain 10–50 letters, digits, and underscores.
         * @type {string || null}
         */
        this.AccessKeySecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.AccessKeyType = 'AccessKeyType' in params ? params.AccessKeyType : null;
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.AccessKeySecret = 'AccessKeySecret' in params ? params.AccessKeySecret : null;

    }
}

module.exports = {
    UnBindSubDomainResponse: UnBindSubDomainResponse,
    UpdateApiKeyRequest: UpdateApiKeyRequest,
    Service: Service,
    ServiceReleaseVersion: ServiceReleaseVersion,
    ApiUsagePlanSet: ApiUsagePlanSet,
    DescribeUsagePlanRequest: DescribeUsagePlanRequest,
    DeleteUsagePlanResponse: DeleteUsagePlanResponse,
    DisableApiKeyResponse: DisableApiKeyResponse,
    UnReleaseServiceRequest: UnReleaseServiceRequest,
    ModifySubDomainRequest: ModifySubDomainRequest,
    DescribeServiceEnvironmentListResponse: DescribeServiceEnvironmentListResponse,
    ModifyApiResponse: ModifyApiResponse,
    ServiceEnvironmentStrategy: ServiceEnvironmentStrategy,
    DemoteServiceUsagePlanRequest: DemoteServiceUsagePlanRequest,
    TargetServicesReq: TargetServicesReq,
    TsfLoadBalanceConfResp: TsfLoadBalanceConfResp,
    CreateIPStrategyRequest: CreateIPStrategyRequest,
    IPStrategy: IPStrategy,
    DescribeUsagePlansStatusResponse: DescribeUsagePlansStatusResponse,
    HealthCheckConf: HealthCheckConf,
    DescribeApiUsagePlanResponse: DescribeApiUsagePlanResponse,
    DeleteIPStrategyRequest: DeleteIPStrategyRequest,
    DomainSets: DomainSets,
    DeleteUsagePlanRequest: DeleteUsagePlanRequest,
    DeleteServiceRequest: DeleteServiceRequest,
    DescribeApiEnvironmentStrategyRequest: DescribeApiEnvironmentStrategyRequest,
    UpdateServiceResponse: UpdateServiceResponse,
    ServiceConfig: ServiceConfig,
    ServiceEnvironmentSet: ServiceEnvironmentSet,
    DescribeServiceResponse: DescribeServiceResponse,
    UsagePlanEnvironmentStatus: UsagePlanEnvironmentStatus,
    ModifyIPStrategyResponse: ModifyIPStrategyResponse,
    BindSubDomainResponse: BindSubDomainResponse,
    BindEnvironmentResponse: BindEnvironmentResponse,
    Tag: Tag,
    DescribeServiceEnvironmentStrategyResponse: DescribeServiceEnvironmentStrategyResponse,
    ConstantParameter: ConstantParameter,
    UsagePlansStatus: UsagePlansStatus,
    ModifySubDomainResponse: ModifySubDomainResponse,
    LogQuery: LogQuery,
    ServiceParameter: ServiceParameter,
    ModifyServiceResponse: ModifyServiceResponse,
    DisableApiKeyRequest: DisableApiKeyRequest,
    PathMapping: PathMapping,
    UnBindIPStrategyResponse: UnBindIPStrategyResponse,
    BindIPStrategyResponse: BindIPStrategyResponse,
    DescribeApisStatusRequest: DescribeApisStatusRequest,
    DeleteServiceSubDomainMappingRequest: DeleteServiceSubDomainMappingRequest,
    DescribeIPStrategyResponse: DescribeIPStrategyResponse,
    DeleteApiResponse: DeleteApiResponse,
    CreateApiResponse: CreateApiResponse,
    DescribeIPStrategyApisStatusRequest: DescribeIPStrategyApisStatusRequest,
    UnBindEnvironmentRequest: UnBindEnvironmentRequest,
    OauthConfig: OauthConfig,
    ModifyApiEnvironmentStrategyRequest: ModifyApiEnvironmentStrategyRequest,
    ModifyUsagePlanResponse: ModifyUsagePlanResponse,
    CreateUsagePlanResponse: CreateUsagePlanResponse,
    ReqParameter: ReqParameter,
    DescribeServicesStatusRequest: DescribeServicesStatusRequest,
    RequestConfig: RequestConfig,
    DeleteApiKeyResponse: DeleteApiKeyResponse,
    UsagePlan: UsagePlan,
    DescribeServiceReleaseVersionRequest: DescribeServiceReleaseVersionRequest,
    DescribeUsagePlanSecretIdsRequest: DescribeUsagePlanSecretIdsRequest,
    DescribeLogSearchResponse: DescribeLogSearchResponse,
    ResponseErrorCodeReq: ResponseErrorCodeReq,
    CreateServiceRequest: CreateServiceRequest,
    DescribeIPStrategysStatusRequest: DescribeIPStrategysStatusRequest,
    DemoteServiceUsagePlanResponse: DemoteServiceUsagePlanResponse,
    EnableApiKeyResponse: EnableApiKeyResponse,
    ServiceReleaseHistory: ServiceReleaseHistory,
    UnReleaseServiceResponse: UnReleaseServiceResponse,
    DescribeServiceRequest: DescribeServiceRequest,
    CreateUsagePlanRequest: CreateUsagePlanRequest,
    DescribeUsagePlanSecretIdsResponse: DescribeUsagePlanSecretIdsResponse,
    UpdateServiceRequest: UpdateServiceRequest,
    ReleaseService: ReleaseService,
    DescribeServiceSubDomainMappingsResponse: DescribeServiceSubDomainMappingsResponse,
    BindSecretIdsRequest: BindSecretIdsRequest,
    UnBindEnvironmentResponse: UnBindEnvironmentResponse,
    UsagePlanBindSecret: UsagePlanBindSecret,
    DeleteApiKeyRequest: DeleteApiKeyRequest,
    ModifyApiEnvironmentStrategyResponse: ModifyApiEnvironmentStrategyResponse,
    DomainSetList: DomainSetList,
    IPStrategysStatus: IPStrategysStatus,
    DescribeApiKeyResponse: DescribeApiKeyResponse,
    ModifyApiIncrementResponse: ModifyApiIncrementResponse,
    ModifyApiRequest: ModifyApiRequest,
    ModifyUsagePlanRequest: ModifyUsagePlanRequest,
    ApiRequestConfig: ApiRequestConfig,
    ModifyServiceRequest: ModifyServiceRequest,
    ApiIdStatus: ApiIdStatus,
    CreateApiRequest: CreateApiRequest,
    DescribeServiceEnvironmentStrategyRequest: DescribeServiceEnvironmentStrategyRequest,
    ReleaseServiceRequest: ReleaseServiceRequest,
    DeleteServiceResponse: DeleteServiceResponse,
    DescribeServiceEnvironmentReleaseHistoryResponse: DescribeServiceEnvironmentReleaseHistoryResponse,
    Environment: Environment,
    ServiceReleaseHistoryInfo: ServiceReleaseHistoryInfo,
    ReleaseServiceResponse: ReleaseServiceResponse,
    UnBindIPStrategyRequest: UnBindIPStrategyRequest,
    ModifyApiIncrementRequest: ModifyApiIncrementRequest,
    GenerateApiDocumentRequest: GenerateApiDocumentRequest,
    ServiceUsagePlanSet: ServiceUsagePlanSet,
    DescribeIPStrategyApisStatusResponse: DescribeIPStrategyApisStatusResponse,
    ModifyServiceEnvironmentStrategyResponse: ModifyServiceEnvironmentStrategyResponse,
    UpdateApiKeyResponse: UpdateApiKeyResponse,
    DescribeApisStatusResponse: DescribeApisStatusResponse,
    DescribeApiKeysStatusRequest: DescribeApiKeysStatusRequest,
    DescribeApiResponse: DescribeApiResponse,
    BindSecretIdsResponse: BindSecretIdsResponse,
    CreateApiRsp: CreateApiRsp,
    UsagePlanBindEnvironment: UsagePlanBindEnvironment,
    DeleteApiRequest: DeleteApiRequest,
    DescribeServiceSubDomainMappingsRequest: DescribeServiceSubDomainMappingsRequest,
    DescribeServiceEnvironmentListRequest: DescribeServiceEnvironmentListRequest,
    ServiceSubDomainMappings: ServiceSubDomainMappings,
    DescribeApiKeyRequest: DescribeApiKeyRequest,
    DescribeUsagePlanResponse: DescribeUsagePlanResponse,
    Filter: Filter,
    UsagePlanBindSecretStatus: UsagePlanBindSecretStatus,
    DeleteServiceSubDomainMappingResponse: DeleteServiceSubDomainMappingResponse,
    DescribeServiceUsagePlanRequest: DescribeServiceUsagePlanRequest,
    DescribeUsagePlansStatusRequest: DescribeUsagePlansStatusRequest,
    UsagePlanEnvironment: UsagePlanEnvironment,
    ModifyIPStrategyRequest: ModifyIPStrategyRequest,
    UnBindSecretIdsRequest: UnBindSecretIdsRequest,
    ApiEnvironmentStrategy: ApiEnvironmentStrategy,
    UnBindSecretIdsResponse: UnBindSecretIdsResponse,
    ApiUsagePlan: ApiUsagePlan,
    IPStrategyApi: IPStrategyApi,
    DocumentSDK: DocumentSDK,
    ModifyServiceEnvironmentStrategyRequest: ModifyServiceEnvironmentStrategyRequest,
    DescribeServiceSubDomainsRequest: DescribeServiceSubDomainsRequest,
    GenerateApiDocumentResponse: GenerateApiDocumentResponse,
    DescribeUsagePlanEnvironmentsResponse: DescribeUsagePlanEnvironmentsResponse,
    DescribeServiceSubDomainsResponse: DescribeServiceSubDomainsResponse,
    BindSubDomainRequest: BindSubDomainRequest,
    IPStrategyApiStatus: IPStrategyApiStatus,
    CreateIPStrategyResponse: CreateIPStrategyResponse,
    BindIPStrategyRequest: BindIPStrategyRequest,
    MicroServiceReq: MicroServiceReq,
    ErrorCodes: ErrorCodes,
    ServiceEnvironmentStrategyStatus: ServiceEnvironmentStrategyStatus,
    DescribeApiEnvironmentStrategyResponse: DescribeApiEnvironmentStrategyResponse,
    MicroService: MicroService,
    ApiEnvironmentStrategyStataus: ApiEnvironmentStrategyStataus,
    DeleteIPStrategyResponse: DeleteIPStrategyResponse,
    ApiKey: ApiKey,
    BindEnvironmentRequest: BindEnvironmentRequest,
    DescribeIPStrategyRequest: DescribeIPStrategyRequest,
    DescribeUsagePlanEnvironmentsRequest: DescribeUsagePlanEnvironmentsRequest,
    CreateApiKeyResponse: CreateApiKeyResponse,
    DescribeServiceReleaseVersionResponse: DescribeServiceReleaseVersionResponse,
    RequestParameter: RequestParameter,
    UsagePlanInfo: UsagePlanInfo,
    DescribeServiceEnvironmentReleaseHistoryRequest: DescribeServiceEnvironmentReleaseHistoryRequest,
    UsagePlanStatusInfo: UsagePlanStatusInfo,
    CreateServiceResponse: CreateServiceResponse,
    DesApisStatus: DesApisStatus,
    DescribeApiKeysStatusResponse: DescribeApiKeysStatusResponse,
    ServicesStatus: ServicesStatus,
    DescribeLogSearchRequest: DescribeLogSearchRequest,
    ApisStatus: ApisStatus,
    ApiKeysStatus: ApiKeysStatus,
    DescribeServiceUsagePlanResponse: DescribeServiceUsagePlanResponse,
    DescribeApiUsagePlanRequest: DescribeApiUsagePlanRequest,
    UnBindSubDomainRequest: UnBindSubDomainRequest,
    DescribeApiRequest: DescribeApiRequest,
    DescribeIPStrategysStatusResponse: DescribeIPStrategysStatusResponse,
    ApiInfo: ApiInfo,
    EnvironmentStrategy: EnvironmentStrategy,
    EnableApiKeyRequest: EnableApiKeyRequest,
    DescribeServicesStatusResponse: DescribeServicesStatusResponse,
    CreateApiKeyRequest: CreateApiKeyRequest,

}
