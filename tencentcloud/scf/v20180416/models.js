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
 * HTTP domain name–related information
 * @class
 */
class AccessInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.Host = null;

        /**
         * VIP
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * Trigger type
 * @class
 */
class Trigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * Latest modification time of the trigger
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * Trigger type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Detailed trigger configuration
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * Trigger name
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * Creation time of the trigger
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Enabling switch
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Custom parameter
         * @type {string || null}
         */
        this.CustomArgument = null;

        /**
         * Trigger status
         * @type {string || null}
         */
        this.AvailableStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CustomArgument = 'CustomArgument' in params ? params.CustomArgument : null;
        this.AvailableStatus = 'AvailableStatus' in params ? params.AvailableStatus : null;

    }
}

/**
 * ListAliases response structure.
 * @class
 */
class ListAliasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alias list
         * @type {Array.<Alias> || null}
         */
        this.Aliases = null;

        /**
         * Total number of aliases
Note: this field may return null, indicating that no valid values can be obtained.
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

        if (params.Aliases) {
            this.Aliases = new Array();
            for (let z in params.Aliases) {
                let obj = new Alias();
                obj.deserialize(params.Aliases[z]);
                this.Aliases.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLayerVersion response structure.
 * @class
 */
class DeleteLayerVersionResponse extends  AbstractModel {
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
 * GetAlias response structure.
 * @class
 */
class GetAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Master version of alias
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * Alias name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Routing information of alias
         * @type {RoutingConfig || null}
         */
        this.RoutingConfig = null;

        /**
         * Alias description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Update time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModTime = null;

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
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.RoutingConfig) {
            let obj = new RoutingConfig();
            obj.deserialize(params.RoutingConfig)
            this.RoutingConfig = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Function version with weight
 * @class
 */
class VersionWeight extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function version name
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Version weight
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * Layer version information
 * @class
 */
class LayerVersionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Runtime applicable to a version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CompatibleRuntimes = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Version description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * License information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseInfo = null;

        /**
         * Version number
         * @type {number || null}
         */
        this.LayerVersion = null;

        /**
         * Layer name
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * The status of the layer version. Values can be: 
`Active`: normal
`Publishing`: publishing
`PublishFailed`: failed to publish
`Deleted`: deleted
         * @type {string || null}
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
        this.CompatibleRuntimes = 'CompatibleRuntimes' in params ? params.CompatibleRuntimes : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.LicenseInfo = 'LicenseInfo' in params ? params.LicenseInfo : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * UpdateFunctionConfiguration response structure.
 * @class
 */
class UpdateFunctionConfigurationResponse extends  AbstractModel {
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
 * PublishLayerVersion response structure.
 * @class
 */
class PublishLayerVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Version number of the layer created in this request
         * @type {number || null}
         */
        this.LayerVersion = null;

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
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFunction response structure.
 * @class
 */
class CreateFunctionResponse extends  AbstractModel {
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
 * Public network access configuration
 * @class
 */
class PublicNetConfigIn extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable public network access. Valid values: ['DISABLE', 'ENABLE']
         * @type {string || null}
         */
        this.PublicNetStatus = null;

        /**
         * EIP configuration
         * @type {EipConfigIn || null}
         */
        this.EipConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicNetStatus = 'PublicNetStatus' in params ? params.PublicNetStatus : null;

        if (params.EipConfig) {
            let obj = new EipConfigIn();
            obj.deserialize(params.EipConfig)
            this.EipConfig = obj;
        }

    }
}

/**
 * UpdateAlias request structure.
 * @class
 */
class UpdateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Alias name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Master version of alias
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Routing information of alias, which is required if you need to specify an additional version for the alias.
         * @type {RoutingConfig || null}
         */
        this.RoutingConfig = null;

        /**
         * Alias description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.RoutingConfig) {
            let obj = new RoutingConfig();
            obj.deserialize(params.RoutingConfig)
            this.RoutingConfig = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Version routing configuration of alias
 * @class
 */
class RoutingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Additional version with random weight-based routing
         * @type {Array.<VersionWeight> || null}
         */
        this.AdditionalVersionWeights = null;

        /**
         * Additional version with rule-based routing
         * @type {Array.<VersionMatch> || null}
         */
        this.AddtionVersionMatchs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AdditionalVersionWeights) {
            this.AdditionalVersionWeights = new Array();
            for (let z in params.AdditionalVersionWeights) {
                let obj = new VersionWeight();
                obj.deserialize(params.AdditionalVersionWeights[z]);
                this.AdditionalVersionWeights.push(obj);
            }
        }

        if (params.AddtionVersionMatchs) {
            this.AddtionVersionMatchs = new Array();
            for (let z in params.AddtionVersionMatchs) {
                let obj = new VersionMatch();
                obj.deserialize(params.AddtionVersionMatchs[z]);
                this.AddtionVersionMatchs.push(obj);
            }
        }

    }
}

/**
 * UpdateAlias response structure.
 * @class
 */
class UpdateAliasResponse extends  AbstractModel {
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
 * GetFunctionLogs request structure.
 * @class
 */
class GetFunctionLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Data offset. The addition of `Offset` and `Limit` cannot exceed 10,000.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Length of the return data. The addition of `Offset` and `Limit` cannot exceed 10,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * It specifies whether to sort the logs in an ascending or descending order. The value is `desc` or `asc`.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * It specifies the sorting order of the logs based on a specified field, such as `function_name`, `duration`, `mem_usage`, and `start_time`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Log filter used to identify whether to return logs of successful or failed requests. `filter.RetCode=not0` indicates that only the logs of failed requests will be returned. `filter.RetCode=is0` indicates that only the logs of successful requests will be returned. If this parameter is left blank, all logs will be returned. 
         * @type {LogFilter || null}
         */
        this.Filter = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Function version
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * RequestId corresponding to the executed function
         * @type {string || null}
         */
        this.FunctionRequestId = null;

        /**
         * Query date, for example, 2017-05-16 20:00:00. The date must be within one day of the end time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query date, for example, 2017-05-16 20:59:59. The date must be within one day of the start time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Service log related parameter. `Offset` on the first page is a null string. Enter other pages based on SearchContext in the response field.
         * @type {LogSearchContext || null}
         */
        this.SearchContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

        if (params.Filter) {
            let obj = new LogFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.FunctionRequestId = 'FunctionRequestId' in params ? params.FunctionRequestId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.SearchContext) {
            let obj = new LogSearchContext();
            obj.deserialize(params.SearchContext)
            this.SearchContext = obj;
        }

    }
}

/**
 * Function tag
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
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
 * Log filtering criteria, which is for distinguishing between logs of successful and failed execution
 * @class
 */
class LogFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Values of `filter.RetCode` include:
not0, indicating that only logs of failed execution will be returned.
is0, indicating that only logs of successful execution will be returned.
TimeLimitExceeded, indicating that logs of function invocations which timed out will be returned.
ResourceLimitExceeded, indicating that logs of function invocations during which resources exceeded the upper limit will be returned.
UserCodeException, indicating that logs of function invocations during which a user code error occurred will be returned.
Blank, indicating that all logs will be returned.
         * @type {string || null}
         */
        this.RetCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;

    }
}

/**
 * Fixed IP configuration for public network access
 * @class
 */
class EipConfigIn extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status of the EIP. Values: ['ENABLE','DISABLE']
         * @type {string || null}
         */
        this.EipStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipStatus = 'EipStatus' in params ? params.EipStatus : null;

    }
}

/**
 * ListLayerVersions response structure.
 * @class
 */
class ListLayerVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer version list
         * @type {Array.<LayerVersionInfo> || null}
         */
        this.LayerVersions = null;

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

        if (params.LayerVersions) {
            this.LayerVersions = new Array();
            for (let z in params.LayerVersions) {
                let obj = new LayerVersionInfo();
                obj.deserialize(params.LayerVersions[z]);
                this.LayerVersions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFunction request structure.
 * @class
 */
class DeleteFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the function to be deleted
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * CopyFunction response structure.
 * @class
 */
class CopyFunctionResponse extends  AbstractModel {
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
 * Namespace
 * @class
 */
class Namespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation time of the namespace
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * Modification time of the namespace
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Namespace description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The default value is default. TCB indicates that the namespace is developed and created through the mini-program cloud.
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
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetFunction request structure.
 * @class
 */
class GetFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the function to obtain details
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function version number
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * It indicates whether to display the code. `TRUE` means displaying the code, and `FALSE` means hiding the code. The code will not be displayed for entry files exceeding 1 MB.
         * @type {string || null}
         */
        this.ShowCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ShowCode = 'ShowCode' in params ? params.ShowCode : null;

    }
}

/**
 * ListNamespaces request structure.
 * @class
 */
class ListNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Return data length. The default value is `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset. The default value is `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * It specifies the sorting order of the results according to a specified field, such as `Name` and `Updatetime`.
         * @type {string || null}
         */
        this.Orderby = null;

        /**
         * It specifies whether to return the results in ascending or descending order. The value is `ASC` or `DESC`.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Orderby = 'Orderby' in params ? params.Orderby : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * PublishVersion request structure.
 * @class
 */
class PublishVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the released function
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DeleteAlias request structure.
 * @class
 */
class DeleteAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Alias name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * ListVersionByFunction response structure.
 * @class
 */
class ListVersionByFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function version
         * @type {Array.<string> || null}
         */
        this.FunctionVersion = null;

        /**
         * Function version list
Note: This field may return null, indicating that no valid values is found.
         * @type {Array.<FunctionVersion> || null}
         */
        this.Versions = null;

        /**
         * Total number of function versions
Note: This field may return null, indicating that no valid value was found.
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
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;

        if (params.Versions) {
            this.Versions = new Array();
            for (let z in params.Versions) {
                let obj = new FunctionVersion();
                obj.deserialize(params.Versions[z]);
                this.Versions.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAlias request structure.
 * @class
 */
class GetAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Alias name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

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
 * Public network access configuration
 * @class
 */
class PublicNetConfigOut extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable public network access. Valid values: ['DISABLE', 'ENABLE']
         * @type {string || null}
         */
        this.PublicNetStatus = null;

        /**
         * EIP configuration
         * @type {EipConfigOut || null}
         */
        this.EipConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicNetStatus = 'PublicNetStatus' in params ? params.PublicNetStatus : null;

        if (params.EipConfig) {
            let obj = new EipConfigOut();
            obj.deserialize(params.EipConfig)
            this.EipConfig = obj;
        }

    }
}

/**
 * UpdateFunctionCode request structure.
 * @class
 */
class UpdateFunctionCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function handler name, which is in the `file name.function name` form. Use a period (.) to separate a file name and function name. The file name and function name must start and end with letters and contain 2-60 characters, including letters, digits, underscores (_), and hyphens (-).
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * Name of the function to be modified
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * COS bucket name
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * COS object path
         * @type {string || null}
         */
        this.CosObjectName = null;

        /**
         * It contains a function code file and its dependencies in the ZIP format. When you use this API, the ZIP file needs to be encoded with Base64. Up to 20 MB is supported.
         * @type {string || null}
         */
        this.ZipFile = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * COS region. Note: Beijing includes ap-beijing and ap-beijing-1.
         * @type {string || null}
         */
        this.CosBucketRegion = null;

        /**
         * Function environment
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * It specifies whether to synchronously release a new version during the update. The default value is `FALSE`, indicating not to release a new version.
         * @type {string || null}
         */
        this.Publish = null;

        /**
         * Function code
         * @type {Code || null}
         */
        this.Code = null;

        /**
         * Source mode of code. Valid values: `ZipFile`, `Cos`, `Inline`, `TempCos` and `Git`. This field must be specified if the source is Git
         * @type {string || null}
         */
        this.CodeSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosObjectName = 'CosObjectName' in params ? params.CosObjectName : null;
        this.ZipFile = 'ZipFile' in params ? params.ZipFile : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CosBucketRegion = 'CosBucketRegion' in params ? params.CosBucketRegion : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Publish = 'Publish' in params ? params.Publish : null;

        if (params.Code) {
            let obj = new Code();
            obj.deserialize(params.Code)
            this.Code = obj;
        }
        this.CodeSource = 'CodeSource' in params ? params.CodeSource : null;

    }
}

/**
 * UpdateFunctionConfiguration request structure.
 * @class
 */
class UpdateFunctionConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the function to be modified
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function description. It can contain up to 1,000 characters, including letters, digits, spaces, commas (,), periods (.), and Chinese characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Memory size available for function during execution. Default value: 128 MB. Value range: 64 or 128–3,072 MB in increments of 128 MB.
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * Maximum execution duration of function in seconds. Value range: 1–900 seconds. Default value: 3 seconds
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Function runtime environment. Valid values: Python2.7, Python3.6, Nodejs6.10, Nodejs8.9, Nodejs10.15, Nodejs12.16, PHP5, PHP7, Golang1 and Java8
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * Function environment variable
         * @type {Environment || null}
         */
        this.Environment = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Function VPC configuration
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * Role bound to the function
         * @type {string || null}
         */
        this.Role = null;

        /**
         * CLS logset ID to which logs are shipped
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * CLS Topic ID to which logs are shipped
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * It specifies whether to synchronously release a new version during the update. The default value is `FALSE`, indicating not to release a new version.
         * @type {string || null}
         */
        this.Publish = null;

        /**
         * Whether to enable L5 access. TRUE: enable; FALSE: not enable
         * @type {string || null}
         */
        this.L5Enable = null;

        /**
         * List of layer versions that bound with the function. Files with the same name will be overridden by the bound layer versions according to the ascending order in the list. 
         * @type {Array.<LayerVersionSimple> || null}
         */
        this.Layers = null;

        /**
         * Information of a dead letter queue associated with a function
         * @type {DeadLetterConfig || null}
         */
        this.DeadLetterConfig = null;

        /**
         * Public network access configuration
         * @type {PublicNetConfigIn || null}
         */
        this.PublicNetConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.Publish = 'Publish' in params ? params.Publish : null;
        this.L5Enable = 'L5Enable' in params ? params.L5Enable : null;

        if (params.Layers) {
            this.Layers = new Array();
            for (let z in params.Layers) {
                let obj = new LayerVersionSimple();
                obj.deserialize(params.Layers[z]);
                this.Layers.push(obj);
            }
        }

        if (params.DeadLetterConfig) {
            let obj = new DeadLetterConfig();
            obj.deserialize(params.DeadLetterConfig)
            this.DeadLetterConfig = obj;
        }

        if (params.PublicNetConfig) {
            let obj = new PublicNetConfigIn();
            obj.deserialize(params.PublicNetConfig)
            this.PublicNetConfig = obj;
        }

    }
}

/**
 * ListTriggers response structure.
 * @class
 */
class ListTriggersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of triggers
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Trigger list
         * @type {Array.<TriggerInfo> || null}
         */
        this.Triggers = null;

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

        if (params.Triggers) {
            this.Triggers = new Array();
            for (let z in params.Triggers) {
                let obj = new TriggerInfo();
                obj.deserialize(params.Triggers[z]);
                this.Triggers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateNamespace response structure.
 * @class
 */
class UpdateNamespaceResponse extends  AbstractModel {
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
 * ListLayers request structure.
 * @class
 */
class ListLayersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compatible runtimes
         * @type {string || null}
         */
        this.CompatibleRuntime = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query key, which fuzzily matches the name
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompatibleRuntime = 'CompatibleRuntime' in params ? params.CompatibleRuntime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * CopyFunction request structure.
 * @class
 */
class CopyFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the function to be replicated
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Name of the new function
         * @type {string || null}
         */
        this.NewFunctionName = null;

        /**
         * Namespace of the function to be replicated. The default value is `default`.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Namespace of the replicated function. The default value is default.
         * @type {string || null}
         */
        this.TargetNamespace = null;

        /**
         * Description of the new function
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Region of the target of the function replication. If the value is not set, the current region is used by default.
         * @type {string || null}
         */
        this.TargetRegion = null;

        /**
         * It specifies whether to replace the function with the same name in the target namespace. The default option is `FALSE`.
(Note: The `TRUE` option results in deletion of the function in the target namespace. Please operate with caution.)
TRUE: Replaces the function.
FALSE: Does not replace the function.
         * @type {boolean || null}
         */
        this.Override = null;

        /**
         * It specifies whether to replicate the function attributes, including environment variables, memory, timeout, function description, labels, and VPC. The default value is `TRUE`.
TRUE: Replicates the function configuration.
FALSE: Does not replicate the function configuration.
         * @type {boolean || null}
         */
        this.CopyConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.NewFunctionName = 'NewFunctionName' in params ? params.NewFunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.TargetNamespace = 'TargetNamespace' in params ? params.TargetNamespace : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.TargetRegion = 'TargetRegion' in params ? params.TargetRegion : null;
        this.Override = 'Override' in params ? params.Override : null;
        this.CopyConfiguration = 'CopyConfiguration' in params ? params.CopyConfiguration : null;

    }
}

/**
 * DeleteNamespace response structure.
 * @class
 */
class DeleteNamespaceResponse extends  AbstractModel {
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
 * Specifies a layer version
 * @class
 */
class LayerVersionSimple extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer name
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * Version number
         * @type {number || null}
         */
        this.LayerVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;

    }
}

/**
 * ListFunctions request structure.
 * @class
 */
class ListFunctionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * It specifies whether to return the results in ascending or descending order. The value is `ASC` or `DESC`.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * It specifies the sorting order of the results according to a specified field, such as `AddTime`, `ModTime`, and `FunctionName`.
         * @type {string || null}
         */
        this.Orderby = null;

        /**
         * Data offset. The default value is `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Return data length. The default value is `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * It specifies whether to support fuzzy matching for the function name.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Function description. Fuzzy search is supported.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Filters
- tag:tag-key - String - Required: No - Filtering criteria based on tag-key - value pairs. Replace `tag-key` with a specific tag-key.

The maximum number of `Filters` for each request is 10, and that of `Filter.Values` is 5.
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
        this.Order = 'Order' in params ? params.Order : null;
        this.Orderby = 'Orderby' in params ? params.Orderby : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;

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
 * CreateTrigger request structure.
 * @class
 */
class CreateTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the function bound to the new trigger
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Name of a new trigger. For a timer trigger, the name can contain up to 100 letters, digits, dashes, and underscores; for a COS trigger, it should be an access domain name of the corresponding COS bucket applicable to the XML API (e.g., 5401-5ff414-12345.cos.ap-shanghai.myqcloud.com); for other triggers, please see the descriptions of parameters bound to the specific trigger.
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * Trigger type. Currently, COS, CMQ, timer, and ckafka triggers are supported.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * For parameters of triggers, see [Trigger Description](https://cloud.tencent.com/document/product/583/39901)
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Function version
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Initial enabling status of the trigger. `OPEN` indicates enabled, and `CLOSE` indicates disabled.
         * @type {string || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * ListLayers response structure.
 * @class
 */
class ListLayersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer list
         * @type {Array.<LayerVersionInfo> || null}
         */
        this.Layers = null;

        /**
         * Total number of layers
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

        if (params.Layers) {
            this.Layers = new Array();
            for (let z in params.Layers) {
                let obj = new LayerVersionInfo();
                obj.deserialize(params.Layers[z]);
                this.Layers.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFunction response structure.
 * @class
 */
class DeleteFunctionResponse extends  AbstractModel {
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
 * Response of the executed function
 * @class
 */
class Result extends  AbstractModel {
    constructor(){
        super();

        /**
         * It indicates the log output during the function execution. Null is returned for asynchronous invocations.
         * @type {string || null}
         */
        this.Log = null;

        /**
         * It indicates the response from the executed function. Null is returned for asynchronous invocations.
         * @type {string || null}
         */
        this.RetMsg = null;

        /**
         * It indicates the error message of the executed function. Null is returned for asynchronous invocations.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * It indicates the memory size (in bytes) when the function is running. Null is returned for asynchronous invocations.
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * It indicates the duration (in milliseconds) required for running the function. Null is returned for asynchronous invocations.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * It indicates the billing duration (in milliseconds) for the function. Null is returned for asynchronous invocations.
         * @type {number || null}
         */
        this.BillDuration = null;

        /**
         * ID of the executed function
         * @type {string || null}
         */
        this.FunctionRequestId = null;

        /**
         * `0` indicates successful execution. Null is returned for asynchronous invocations.
         * @type {number || null}
         */
        this.InvokeResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Log = 'Log' in params ? params.Log : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.BillDuration = 'BillDuration' in params ? params.BillDuration : null;
        this.FunctionRequestId = 'FunctionRequestId' in params ? params.FunctionRequestId : null;
        this.InvokeResult = 'InvokeResult' in params ? params.InvokeResult : null;

    }
}

/**
 * CreateAlias response structure.
 * @class
 */
class CreateAliasResponse extends  AbstractModel {
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
 * Log search context
 * @class
 */
class LogSearchContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset.
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * Log record number
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Log keyword
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Log type. The value is `Application` (default) or `Platform`.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Trigger information
 * @class
 */
class TriggerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enablement switch
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Function version or alias
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Trigger name
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * Trigger type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Detailed configuration of trigger
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * Whether the trigger is available
         * @type {string || null}
         */
        this.AvailableStatus = null;

        /**
         * Custom parameter
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomArgument = null;

        /**
         * Trigger creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Trigger last modified time
         * @type {string || null}
         */
        this.ModTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.AvailableStatus = 'AvailableStatus' in params ? params.AvailableStatus : null;
        this.CustomArgument = 'CustomArgument' in params ? params.CustomArgument : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;

    }
}

/**
 * CreateFunction request structure.
 * @class
 */
class CreateFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the new function. The name can contain 2 to 60 characters, including English letters, digits, hyphens (-), and underscores (_). The name must start with a letter and cannot end with a hyphen or underscore.
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function code. Note: You cannot specify `Cos` and `ZipFile` at the same time.
         * @type {Code || null}
         */
        this.Code = null;

        /**
         * Name of the handler, which is in the “file name.handler name” form. Use periods (.) to separate a file name and function name. The file name and function name must start and end with a letter and can contain 2 to 60 characters, including letters, digits, hyphens (-), and underscores (_).
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * Function description. It can contain up to 1,000 characters including letters, digits, spaces, commas (,), periods (.), and Chinese characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Memory size available for function during execution. Default value: 128 MB. Value range: 64 or 128–3,072 MB in increments of 128 MB
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * Maximum execution duration of function in seconds. Value range: 1–900 seconds. Default value: 3 seconds
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Function environment variable
         * @type {Environment || null}
         */
        this.Environment = null;

        /**
         * Function runtime environment. Valid values: Python2.7, Python3.6, Nodejs6.10, Nodejs8.9, Nodejs10.15, Nodejs12.16, PHP5, PHP7, Golang1 and Java8. Default value: Python2.7
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * Function VPC configuration
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Role bound to the function
         * @type {string || null}
         */
        this.Role = null;

        /**
         * CLS Logset ID to which the function logs are shipped
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * CLS Topic ID to which the function logs are shipped
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * Function type. The default value is `Event`. Enter `Event` if you need to create a trigger function. Enter `HTTP` if you need to create an HTTP function service.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Code source, including ZipFile, Cos, Demo, TempCos, and Git. This field is required if the source is Git.
         * @type {string || null}
         */
        this.CodeSource = null;

        /**
         * List of layer versions to be associate with the function. Layers will be overwritten sequentially in the order in the list.
         * @type {Array.<LayerVersionSimple> || null}
         */
        this.Layers = null;

        /**
         * Dead letter queue parameter
         * @type {DeadLetterConfig || null}
         */
        this.DeadLetterConfig = null;

        /**
         * Public network access configuration
         * @type {PublicNetConfigIn || null}
         */
        this.PublicNetConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;

        if (params.Code) {
            let obj = new Code();
            obj.deserialize(params.Code)
            this.Code = obj;
        }
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }
        this.Runtime = 'Runtime' in params ? params.Runtime : null;

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CodeSource = 'CodeSource' in params ? params.CodeSource : null;

        if (params.Layers) {
            this.Layers = new Array();
            for (let z in params.Layers) {
                let obj = new LayerVersionSimple();
                obj.deserialize(params.Layers[z]);
                this.Layers.push(obj);
            }
        }

        if (params.DeadLetterConfig) {
            let obj = new DeadLetterConfig();
            obj.deserialize(params.DeadLetterConfig)
            this.DeadLetterConfig = obj;
        }

        if (params.PublicNetConfig) {
            let obj = new PublicNetConfigIn();
            obj.deserialize(params.PublicNetConfig)
            this.PublicNetConfig = obj;
        }

    }
}

/**
 * DeleteAlias response structure.
 * @class
 */
class DeleteAliasResponse extends  AbstractModel {
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
 * PublishVersion response structure.
 * @class
 */
class PublishVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function version
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * Code size
         * @type {number || null}
         */
        this.CodeSize = null;

        /**
         * Maximum available memory
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * Function description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Function entry
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * Function timeout
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Function running environment
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

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
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.CodeSize = 'CodeSize' in params ? params.CodeSize : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Environment variable parameter of the function
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Environment variable array
         * @type {Array.<Variable> || null}
         */
        this.Variables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Variables) {
            this.Variables = new Array();
            for (let z in params.Variables) {
                let obj = new Variable();
                obj.deserialize(params.Variables[z]);
                this.Variables.push(obj);
            }
        }

    }
}

/**
 * GetFunctionAddress request structure.
 * @class
 */
class GetFunctionAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function version
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * Invoke response structure.
 * @class
 */
class InvokeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function execution result
         * @type {Result || null}
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
            let obj = new Result();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Invoke request structure.
 * @class
 */
class InvokeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * The value is `RequestResponse` (synchronous) or `Event` (asynchronous). The default value is synchronous.
         * @type {string || null}
         */
        this.InvocationType = null;

        /**
         * Version number of the triggered function
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Function running parameter, which is in the JSON format. Maximum parameter size is 1 MB.
         * @type {string || null}
         */
        this.ClientContext = null;

        /**
         * If this field is specified for a synchronous invocation, the return value will contain a 4-KB log. The value is `None` (default) or `Tail`. If the value is `Tail`, `logMsg` in the return parameter will contain the corresponding function execution log.
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Traffic routing config in json format, e.g., {"k":"v"}. Please note that both "k" and "v" must be strings. Up to 1024 bytes allowed.
         * @type {string || null}
         */
        this.RoutingKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.InvocationType = 'InvocationType' in params ? params.InvocationType : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.ClientContext = 'ClientContext' in params ? params.ClientContext : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.RoutingKey = 'RoutingKey' in params ? params.RoutingKey : null;

    }
}

/**
 * CreateAlias request structure.
 * @class
 */
class CreateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alias name, which must be unique in the function, can contain 1–64 letters, digits, `_`, and `-`, and must begin with a letter
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Master version of alias
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Request routing configuration of alias
         * @type {RoutingConfig || null}
         */
        this.RoutingConfig = null;

        /**
         * Alias description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.RoutingConfig) {
            let obj = new RoutingConfig();
            obj.deserialize(params.RoutingConfig)
            this.RoutingConfig = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Function version with match rule
 * @class
 */
class VersionMatch extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function version name
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Matching rule key. When the API is called, pass in the `key` to route the request to the specified version based on the matching rule
Header method:
Enter "invoke.headers.User" for `key` and pass in `RoutingKey:{"User":"value"}` when invoking a function through `invoke` for invocation based on rule matching
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Match method. Valid values:
range: range match
exact: exact string match
         * @type {string || null}
         */
        this.Method = null;

        /**
         * Rule requirements for range match:
It should be described in an open or closed range, i.e., `(a,b)` or `[a,b]`, where both a and b are integers
Rule requirements for exact match:
Exact string match
         * @type {string || null}
         */
        this.Expression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Expression = 'Expression' in params ? params.Expression : null;

    }
}

/**
 * ListLayerVersions request structure.
 * @class
 */
class ListLayerVersionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer name
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * Compatible runtimes
         * @type {Array.<string> || null}
         */
        this.CompatibleRuntime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.CompatibleRuntime = 'CompatibleRuntime' in params ? params.CompatibleRuntime : null;

    }
}

/**
 * CreateTrigger response structure.
 * @class
 */
class CreateTriggerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trigger information
         * @type {Trigger || null}
         */
        this.TriggerInfo = null;

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

        if (params.TriggerInfo) {
            let obj = new Trigger();
            obj.deserialize(params.TriggerInfo)
            this.TriggerInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishLayerVersion request structure.
 * @class
 */
class PublishLayerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer name, which can contain 1–64 English letters, digits, hyphens, and underscores, must begin with a letter, and cannot end with a hyphen or underscore
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * Runtimes compatible with layer. Multiple choices are allowed. The valid values of this parameter correspond to the valid values of the `Runtime` of the function.
         * @type {Array.<string> || null}
         */
        this.CompatibleRuntimes = null;

        /**
         * Layer file source or content
         * @type {Code || null}
         */
        this.Content = null;

        /**
         * Layer version description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Software license of layer
         * @type {string || null}
         */
        this.LicenseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.CompatibleRuntimes = 'CompatibleRuntimes' in params ? params.CompatibleRuntimes : null;

        if (params.Content) {
            let obj = new Code();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.LicenseInfo = 'LicenseInfo' in params ? params.LicenseInfo : null;

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
        this.Namespace = null;

        /**
         * Namespace description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteLayerVersion request structure.
 * @class
 */
class DeleteLayerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer name
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * Version number
         * @type {number || null}
         */
        this.LayerVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;

    }
}

/**
 * Key-value pair filters for conditional filtering queries, such as filtering ID, name, and status.
If more than one filter exists, the logical relationship between these filters is `AND`.
If multiple values exist in one filter, the logical relationship between these values under the same filter is `OR`.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fields to be filtered
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter values of the field
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
 * Variable parameter
 * @class
 */
class Variable extends  AbstractModel {
    constructor(){
        super();

        /**
         * Variable name
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Variable value
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
 * GetFunction response structure.
 * @class
 */
class GetFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Latest modification time of the function
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * Function code
         * @type {string || null}
         */
        this.CodeInfo = null;

        /**
         * Function description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Function trigger list
         * @type {Array.<Trigger> || null}
         */
        this.Triggers = null;

        /**
         * Function entry
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * Function code size
         * @type {number || null}
         */
        this.CodeSize = null;

        /**
         * Function timeout
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Function version
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * Maximum available memory of the function
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * Function running environment
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function VPC
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * Whether to use GPU
         * @type {string || null}
         */
        this.UseGpu = null;

        /**
         * Function environment variable
         * @type {Environment || null}
         */
        this.Environment = null;

        /**
         * Whether the code is correct
         * @type {string || null}
         */
        this.CodeResult = null;

        /**
         * Code error information
         * @type {string || null}
         */
        this.CodeError = null;

        /**
         * Error code
         * @type {number || null}
         */
        this.ErrNo = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Role bound to the function
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Whether to install dependencies automatically
         * @type {string || null}
         */
        this.InstallDependency = null;

        /**
         * Function status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Status description
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * CLS logset to which logs are shipped
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * CLS Topic to which logs are shipped
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * Function ID
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * Function tag list
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * EipConfig configuration
         * @type {EipOutConfig || null}
         */
        this.EipConfig = null;

        /**
         * Domain name information
         * @type {AccessInfo || null}
         */
        this.AccessInfo = null;

        /**
         * Function type. The value is `HTTP` or `Event`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Whether to enable L5
         * @type {string || null}
         */
        this.L5Enable = null;

        /**
         * Version information of a layer associated with a function
         * @type {Array.<LayerVersionInfo> || null}
         */
        this.Layers = null;

        /**
         * Information of a dead letter queue associated with a function
         * @type {DeadLetterConfig || null}
         */
        this.DeadLetterConfig = null;

        /**
         * Function creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Public network access configuration
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PublicNetConfigOut || null}
         */
        this.PublicNetConfig = null;

        /**
         * Whether Ons is enabled
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.OnsEnable = null;

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
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.CodeInfo = 'CodeInfo' in params ? params.CodeInfo : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Triggers) {
            this.Triggers = new Array();
            for (let z in params.Triggers) {
                let obj = new Trigger();
                obj.deserialize(params.Triggers[z]);
                this.Triggers.push(obj);
            }
        }
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.CodeSize = 'CodeSize' in params ? params.CodeSize : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.UseGpu = 'UseGpu' in params ? params.UseGpu : null;

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }
        this.CodeResult = 'CodeResult' in params ? params.CodeResult : null;
        this.CodeError = 'CodeError' in params ? params.CodeError : null;
        this.ErrNo = 'ErrNo' in params ? params.ErrNo : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.InstallDependency = 'InstallDependency' in params ? params.InstallDependency : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.EipConfig) {
            let obj = new EipOutConfig();
            obj.deserialize(params.EipConfig)
            this.EipConfig = obj;
        }

        if (params.AccessInfo) {
            let obj = new AccessInfo();
            obj.deserialize(params.AccessInfo)
            this.AccessInfo = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.L5Enable = 'L5Enable' in params ? params.L5Enable : null;

        if (params.Layers) {
            this.Layers = new Array();
            for (let z in params.Layers) {
                let obj = new LayerVersionInfo();
                obj.deserialize(params.Layers[z]);
                this.Layers.push(obj);
            }
        }

        if (params.DeadLetterConfig) {
            let obj = new DeadLetterConfig();
            obj.deserialize(params.DeadLetterConfig)
            this.DeadLetterConfig = obj;
        }
        this.AddTime = 'AddTime' in params ? params.AddTime : null;

        if (params.PublicNetConfig) {
            let obj = new PublicNetConfigOut();
            obj.deserialize(params.PublicNetConfig)
            this.PublicNetConfig = obj;
        }
        this.OnsEnable = 'OnsEnable' in params ? params.OnsEnable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Function code
 * @class
 */
class Code extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS bucket name
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * COS object path
         * @type {string || null}
         */
        this.CosObjectName = null;

        /**
         * It contains a function code file and its dependencies in the ZIP format. When you use this API, the ZIP file needs to be encoded with Base64. Up to 20 MB is supported.
         * @type {string || null}
         */
        this.ZipFile = null;

        /**
         * COS region. For Beijing regions, you need to import `ap-beijing`. For Beijing Region 1, you need to input `ap-beijing-1`. For other regions, no import is required.
         * @type {string || null}
         */
        this.CosBucketRegion = null;

        /**
         * `DemoId` is required if Demo is used for the creation.
         * @type {string || null}
         */
        this.DemoId = null;

        /**
         * `TempCosObjectName` is required if TempCos is used for the creation.
         * @type {string || null}
         */
        this.TempCosObjectName = null;

        /**
         * Git address
         * @type {string || null}
         */
        this.GitUrl = null;

        /**
         * Git user name
         * @type {string || null}
         */
        this.GitUserName = null;

        /**
         * Git password
         * @type {string || null}
         */
        this.GitPassword = null;

        /**
         * Git password after encryption. In general, this value is not required.
         * @type {string || null}
         */
        this.GitPasswordSecret = null;

        /**
         * Git branch
         * @type {string || null}
         */
        this.GitBranch = null;

        /**
         * Code path in Git repository
         * @type {string || null}
         */
        this.GitDirectory = null;

        /**
         * Version to be pulled
         * @type {string || null}
         */
        this.GitCommitId = null;

        /**
         * Git user name after encryption. In general, this value is not required.
         * @type {string || null}
         */
        this.GitUserNameSecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosObjectName = 'CosObjectName' in params ? params.CosObjectName : null;
        this.ZipFile = 'ZipFile' in params ? params.ZipFile : null;
        this.CosBucketRegion = 'CosBucketRegion' in params ? params.CosBucketRegion : null;
        this.DemoId = 'DemoId' in params ? params.DemoId : null;
        this.TempCosObjectName = 'TempCosObjectName' in params ? params.TempCosObjectName : null;
        this.GitUrl = 'GitUrl' in params ? params.GitUrl : null;
        this.GitUserName = 'GitUserName' in params ? params.GitUserName : null;
        this.GitPassword = 'GitPassword' in params ? params.GitPassword : null;
        this.GitPasswordSecret = 'GitPasswordSecret' in params ? params.GitPasswordSecret : null;
        this.GitBranch = 'GitBranch' in params ? params.GitBranch : null;
        this.GitDirectory = 'GitDirectory' in params ? params.GitDirectory : null;
        this.GitCommitId = 'GitCommitId' in params ? params.GitCommitId : null;
        this.GitUserNameSecret = 'GitUserNameSecret' in params ? params.GitUserNameSecret : null;

    }
}

/**
 * UpdateNamespace request structure.
 * @class
 */
class UpdateNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace name
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Namespace description
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * GetLayerVersion response structure.
 * @class
 */
class GetLayerVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compatible runtimes
         * @type {Array.<string> || null}
         */
        this.CompatibleRuntimes = null;

        /**
         * SHA256 encoding of file on layer version
         * @type {string || null}
         */
        this.CodeSha256 = null;

        /**
         * Download address of file on layer version
         * @type {string || null}
         */
        this.Location = null;

        /**
         * Version creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Version description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * License information
         * @type {string || null}
         */
        this.LicenseInfo = null;

        /**
         * Version number
         * @type {number || null}
         */
        this.LayerVersion = null;

        /**
         * Layer name
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * Current status of specific layer version. Valid values:
Active: normal
Publishing: publishing
PublishFailed: publishing failed
Deleted: deleted
         * @type {string || null}
         */
        this.Status = null;

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
        this.CompatibleRuntimes = 'CompatibleRuntimes' in params ? params.CompatibleRuntimes : null;
        this.CodeSha256 = 'CodeSha256' in params ? params.CodeSha256 : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.LicenseInfo = 'LicenseInfo' in params ? params.LicenseInfo : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Log information
 * @class
 */
class FunctionLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Return value after the function is executed
         * @type {string || null}
         */
        this.RetMsg = null;

        /**
         * RequestId corresponding to the executed function
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * Start time of the function execution
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Function execution result. `0` indicates successful execution and other values indicate failure.
         * @type {number || null}
         */
        this.RetCode = null;

        /**
         * It specifies whether the function invocation is finished. `1` indicates execution completion and other values indicate that exceptions occurred during the invocation.
         * @type {number || null}
         */
        this.InvokeFinished = null;

        /**
         * Duration of the function execution. The unit is millisecond (ms).
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Function billing duration. The unit is millisecond (ms). The value is rounded up to a multiple of 100 ms.
         * @type {number || null}
         */
        this.BillDuration = null;

        /**
         * Actual memory size used during the function execution. The unit is byte.
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * Function execution logs
         * @type {string || null}
         */
        this.Log = null;

        /**
         * Log level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Log source
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Number of retries
         * @type {number || null}
         */
        this.RetryNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.InvokeFinished = 'InvokeFinished' in params ? params.InvokeFinished : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.BillDuration = 'BillDuration' in params ? params.BillDuration : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.Log = 'Log' in params ? params.Log : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.RetryNum = 'RetryNum' in params ? params.RetryNum : null;

    }
}

/**
 * Function version information
 * @class
 */
class FunctionVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function version name
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Version description
Note: This field may return null, indicating that no valid values is found.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The creation time
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Update time
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ModTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;

    }
}

/**
 * Function list
 * @class
 */
class Function extends  AbstractModel {
    constructor(){
        super();

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Running
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function ID
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Function status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Function status details
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Function description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Function tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Function type. The value is `HTTP` or `Event`.
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
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Dead letter queue parameter
 * @class
 */
class DeadLetterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dead letter queue mode
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Dead letter queue name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tag form of a dead letter queue topic mode
         * @type {string || null}
         */
        this.FilterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;

    }
}

/**
 * ListVersionByFunction request structure.
 * @class
 */
class ListVersionByFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function Name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * The namespace where the function locates
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Data offset. The default value is `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Return data length. The default value is `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * It specifies whether to return the results in ascending or descending order. The value is `ASC` or `DESC`.
         * @type {string || null}
         */
        this.Order = null;

        /**
         * It specifies the sorting order of the results according to a specified field, such as `AddTime`, `ModTime`.
         * @type {string || null}
         */
        this.OrderBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

    }
}

/**
 * ListFunctions response structure.
 * @class
 */
class ListFunctionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function list
         * @type {Array.<Function> || null}
         */
        this.Functions = null;

        /**
         * Total number
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

        if (params.Functions) {
            this.Functions = new Array();
            for (let z in params.Functions) {
                let obj = new Function();
                obj.deserialize(params.Functions[z]);
                this.Functions.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListTriggers request structure.
 * @class
 */
class ListTriggersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Namespace. Default value: default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Data offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Indicates by which field to sort the returned results. Valid values: AddTime, ModTime. Default value: ModTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Indicates whether the returned results are sorted in ascending or descending order. Valid values: ASC, DESC. Default value: DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * * Qualifier:
Function version, i.e., alias
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
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Order = 'Order' in params ? params.Order : null;

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
 * DeleteNamespace request structure.
 * @class
 */
class DeleteNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace name
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * ListAliases request structure.
 * @class
 */
class ListAliasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * If this parameter is provided, only aliases associated with this function version will be returned
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * Data offset. Default value: 0
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default value: 20
         * @type {string || null}
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
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * EipOutConfig
 * @class
 */
class EipOutConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * It specifies whether the IP is fixed. The value is `TRUE` or `FALSE`.
         * @type {string || null}
         */
        this.EipFixed = null;

        /**
         * IP list
         * @type {Array.<string> || null}
         */
        this.Eips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipFixed = 'EipFixed' in params ? params.EipFixed : null;
        this.Eips = 'Eips' in params ? params.Eips : null;

    }
}

/**
 * Version alias of function
 * @class
 */
class Alias extends  AbstractModel {
    constructor(){
        super();

        /**
         * Master version of alias
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * Alias name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Routing information of alias
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RoutingConfig || null}
         */
        this.RoutingConfig = null;

        /**
         * Description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * Update time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.RoutingConfig) {
            let obj = new RoutingConfig();
            obj.deserialize(params.RoutingConfig)
            this.RoutingConfig = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;

    }
}

/**
 * GetLayerVersion request structure.
 * @class
 */
class GetLayerVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer name
         * @type {string || null}
         */
        this.LayerName = null;

        /**
         * Version number
         * @type {number || null}
         */
        this.LayerVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LayerName = 'LayerName' in params ? params.LayerName : null;
        this.LayerVersion = 'LayerVersion' in params ? params.LayerVersion : null;

    }
}

/**
 * GetFunctionLogs response structure.
 * @class
 */
class GetFunctionLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of function logs
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Function log information
         * @type {Array.<FunctionLog> || null}
         */
        this.Data = null;

        /**
         * Parameter on the log service page
         * @type {LogSearchContext || null}
         */
        this.SearchContext = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new FunctionLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.SearchContext) {
            let obj = new LogSearchContext();
            obj.deserialize(params.SearchContext)
            this.SearchContext = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTrigger response structure.
 * @class
 */
class DeleteTriggerResponse extends  AbstractModel {
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
 * DeleteTrigger request structure.
 * @class
 */
class DeleteTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Name of the trigger to be deleted
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * Type of the trigger to be deleted. Currently, COS, CMQ, timer, and ckafka triggers are supported.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * This field is required if a COS trigger is to be deleted. It stores the data {"event":"cos:ObjectCreated:*"} in the JSON format. The data content of this field is in the same format as that of SetTrigger. This field is optional if a scheduled trigger or CMQ trigger is to be deleted.
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * Function version information
         * @type {string || null}
         */
        this.Qualifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

    }
}

/**
 * VPC parameter configuration
 * @class
 */
class VpcConfig extends  AbstractModel {
    constructor(){
        super();

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

    }
}

/**
 * GetFunctionAddress response structure.
 * @class
 */
class GetFunctionAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cos address of the function
         * @type {string || null}
         */
        this.Url = null;

        /**
         * SHA256 code of the function
         * @type {string || null}
         */
        this.CodeSha256 = null;

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
        this.Url = 'Url' in params ? params.Url : null;
        this.CodeSha256 = 'CodeSha256' in params ? params.CodeSha256 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListNamespaces response structure.
 * @class
 */
class ListNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace details
         * @type {Array.<Namespace> || null}
         */
        this.Namespaces = null;

        /**
         * Number of return namespaces
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

        if (params.Namespaces) {
            this.Namespaces = new Array();
            for (let z in params.Namespaces) {
                let obj = new Namespace();
                obj.deserialize(params.Namespaces[z]);
                this.Namespaces.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Fixed IP configuration for public network access
 * @class
 */
class EipConfigOut extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is a fixed IP. Valid values: ["ENABLE","DISABLE"]
         * @type {string || null}
         */
        this.EipStatus = null;

        /**
         * IP list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.EipAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipStatus = 'EipStatus' in params ? params.EipStatus : null;
        this.EipAddress = 'EipAddress' in params ? params.EipAddress : null;

    }
}

/**
 * UpdateFunctionCode response structure.
 * @class
 */
class UpdateFunctionCodeResponse extends  AbstractModel {
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

module.exports = {
    AccessInfo: AccessInfo,
    Trigger: Trigger,
    ListAliasesResponse: ListAliasesResponse,
    DeleteLayerVersionResponse: DeleteLayerVersionResponse,
    GetAliasResponse: GetAliasResponse,
    VersionWeight: VersionWeight,
    LayerVersionInfo: LayerVersionInfo,
    UpdateFunctionConfigurationResponse: UpdateFunctionConfigurationResponse,
    PublishLayerVersionResponse: PublishLayerVersionResponse,
    CreateFunctionResponse: CreateFunctionResponse,
    PublicNetConfigIn: PublicNetConfigIn,
    UpdateAliasRequest: UpdateAliasRequest,
    RoutingConfig: RoutingConfig,
    UpdateAliasResponse: UpdateAliasResponse,
    GetFunctionLogsRequest: GetFunctionLogsRequest,
    Tag: Tag,
    LogFilter: LogFilter,
    EipConfigIn: EipConfigIn,
    ListLayerVersionsResponse: ListLayerVersionsResponse,
    DeleteFunctionRequest: DeleteFunctionRequest,
    CopyFunctionResponse: CopyFunctionResponse,
    Namespace: Namespace,
    GetFunctionRequest: GetFunctionRequest,
    ListNamespacesRequest: ListNamespacesRequest,
    PublishVersionRequest: PublishVersionRequest,
    DeleteAliasRequest: DeleteAliasRequest,
    ListVersionByFunctionResponse: ListVersionByFunctionResponse,
    GetAliasRequest: GetAliasRequest,
    CreateNamespaceResponse: CreateNamespaceResponse,
    PublicNetConfigOut: PublicNetConfigOut,
    UpdateFunctionCodeRequest: UpdateFunctionCodeRequest,
    UpdateFunctionConfigurationRequest: UpdateFunctionConfigurationRequest,
    ListTriggersResponse: ListTriggersResponse,
    UpdateNamespaceResponse: UpdateNamespaceResponse,
    ListLayersRequest: ListLayersRequest,
    CopyFunctionRequest: CopyFunctionRequest,
    DeleteNamespaceResponse: DeleteNamespaceResponse,
    LayerVersionSimple: LayerVersionSimple,
    ListFunctionsRequest: ListFunctionsRequest,
    CreateTriggerRequest: CreateTriggerRequest,
    ListLayersResponse: ListLayersResponse,
    DeleteFunctionResponse: DeleteFunctionResponse,
    Result: Result,
    CreateAliasResponse: CreateAliasResponse,
    LogSearchContext: LogSearchContext,
    TriggerInfo: TriggerInfo,
    CreateFunctionRequest: CreateFunctionRequest,
    DeleteAliasResponse: DeleteAliasResponse,
    PublishVersionResponse: PublishVersionResponse,
    Environment: Environment,
    GetFunctionAddressRequest: GetFunctionAddressRequest,
    InvokeResponse: InvokeResponse,
    InvokeRequest: InvokeRequest,
    CreateAliasRequest: CreateAliasRequest,
    VersionMatch: VersionMatch,
    ListLayerVersionsRequest: ListLayerVersionsRequest,
    CreateTriggerResponse: CreateTriggerResponse,
    PublishLayerVersionRequest: PublishLayerVersionRequest,
    CreateNamespaceRequest: CreateNamespaceRequest,
    DeleteLayerVersionRequest: DeleteLayerVersionRequest,
    Filter: Filter,
    Variable: Variable,
    GetFunctionResponse: GetFunctionResponse,
    Code: Code,
    UpdateNamespaceRequest: UpdateNamespaceRequest,
    GetLayerVersionResponse: GetLayerVersionResponse,
    FunctionLog: FunctionLog,
    FunctionVersion: FunctionVersion,
    Function: Function,
    DeadLetterConfig: DeadLetterConfig,
    ListVersionByFunctionRequest: ListVersionByFunctionRequest,
    ListFunctionsResponse: ListFunctionsResponse,
    ListTriggersRequest: ListTriggersRequest,
    DeleteNamespaceRequest: DeleteNamespaceRequest,
    ListAliasesRequest: ListAliasesRequest,
    EipOutConfig: EipOutConfig,
    Alias: Alias,
    GetLayerVersionRequest: GetLayerVersionRequest,
    GetFunctionLogsResponse: GetFunctionLogsResponse,
    DeleteTriggerResponse: DeleteTriggerResponse,
    DeleteTriggerRequest: DeleteTriggerRequest,
    VpcConfig: VpcConfig,
    GetFunctionAddressResponse: GetFunctionAddressResponse,
    ListNamespacesResponse: ListNamespacesResponse,
    EipConfigOut: EipConfigOut,
    UpdateFunctionCodeResponse: UpdateFunctionCodeResponse,

}
