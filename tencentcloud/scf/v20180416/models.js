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
         * Master version pointed to by the alias
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

        /**
         * Minimum resource ID of trigger
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Trigger-Function binding status
         * @type {string || null}
         */
        this.BindStatus = null;

        /**
         * Trigger type. Two-way means that the trigger can be manipulated in both consoles, while one-way means that the trigger can be created only in the SCF Console
         * @type {string || null}
         */
        this.TriggerAttribute = null;

        /**
         * The alias or version bound with the trigger
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Trigger description
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
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CustomArgument = 'CustomArgument' in params ? params.CustomArgument : null;
        this.AvailableStatus = 'AvailableStatus' in params ? params.AvailableStatus : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.TriggerAttribute = 'TriggerAttribute' in params ? params.TriggerAttribute : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * GetProvisionedConcurrencyConfig request structure.
 * @class
 */
class GetProvisionedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the function for which to get the provisioned concurrency details.
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function namespace. Default value: default.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Function version number. If this parameter is left empty, the provisioned concurrency information of all function versions will be returned.
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

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
 * GetReservedConcurrencyConfig response structure.
 * @class
 */
class GetReservedConcurrencyConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The reserved quota of the function
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReservedMem = null;

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
        this.ReservedMem = 'ReservedMem' in params ? params.ReservedMem : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteProvisionedConcurrencyConfig response structure.
 * @class
 */
class DeleteProvisionedConcurrencyConfigResponse extends  AbstractModel {
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
 * Left-closed-right-open time range between the start time and end time in the format of "%Y-%m-%d %H:%M:%S"
 * @class
 */
class TimeInterval extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time (inclusive) in the format of "%Y-%m-%d %H:%M:%S"
         * @type {string || null}
         */
        this.Start = null;

        /**
         * End time (exclusive) in the format of "%Y-%m-%d %H:%M:%S"
         * @type {string || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;

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
         * Current status of specific layer version. For valid values, please see [here](https://intl.cloud.tencent.com/document/product/583/47175?from_cn_redirect=1#.E5.B1.82.EF.BC.88layer.EF.BC.89.E7.8A.B6.E6.80.81)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Stamp
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Stamp = null;

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
        this.Stamp = 'Stamp' in params ? params.Stamp : null;

    }
}

/**
 * PutProvisionedConcurrencyConfig response structure.
 * @class
 */
class PutProvisionedConcurrencyConfigResponse extends  AbstractModel {
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
 * Usage information
 * @class
 */
class UsageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of namespaces
         * @type {number || null}
         */
        this.NamespacesCount = null;

        /**
         * Namespace details
         * @type {Array.<NamespaceUsage> || null}
         */
        this.Namespace = null;

        /**
         * Upper limit of user concurrency memory in the current region
         * @type {number || null}
         */
        this.TotalConcurrencyMem = null;

        /**
         * Quota of configured user concurrency memory in the current region
         * @type {number || null}
         */
        this.TotalAllocatedConcurrencyMem = null;

        /**
         * Quota of account concurrency actually configured by user
         * @type {number || null}
         */
        this.UserConcurrencyMemLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespacesCount = 'NamespacesCount' in params ? params.NamespacesCount : null;

        if (params.Namespace) {
            this.Namespace = new Array();
            for (let z in params.Namespace) {
                let obj = new NamespaceUsage();
                obj.deserialize(params.Namespace[z]);
                this.Namespace.push(obj);
            }
        }
        this.TotalConcurrencyMem = 'TotalConcurrencyMem' in params ? params.TotalConcurrencyMem : null;
        this.TotalAllocatedConcurrencyMem = 'TotalAllocatedConcurrencyMem' in params ? params.TotalAllocatedConcurrencyMem : null;
        this.UserConcurrencyMemLimit = 'UserConcurrencyMemLimit' in params ? params.UserConcurrencyMemLimit : null;

    }
}

/**
 * Async event
 * @class
 */
class AsyncEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invocation request ID
         * @type {string || null}
         */
        this.InvokeRequestId = null;

        /**
         * Invocation type
         * @type {string || null}
         */
        this.InvokeType = null;

        /**
         * Function version
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Event status. Values: `RUNNING`; `FINISHED` (invoked successfully); `ABORTED` (invocation ended); `FAILED` (invocation failed)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Invocation start time in the format of "%Y-%m-%d %H:%M:%S.%f"
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Invocation end time in the format of "%Y-%m-%d %H:%M:%S.%f"
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
        this.InvokeRequestId = 'InvokeRequestId' in params ? params.InvokeRequestId : null;
        this.InvokeType = 'InvokeType' in params ? params.InvokeType : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DeleteReservedConcurrencyConfig response structure.
 * @class
 */
class DeleteReservedConcurrencyConfigResponse extends  AbstractModel {
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
         * Master version pointed to by the alias
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
 * Provisioned concurrency information of function version, including the set provisioned concurrency amount, available provisioned concurrency amount, and provisioned concurrency setting task status.
 * @class
 */
class VersionProvisionedConcurrencyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Set provisioned concurrency amount.
         * @type {number || null}
         */
        this.AllocatedProvisionedConcurrencyNum = null;

        /**
         * Currently available provisioned concurrency amount.
         * @type {number || null}
         */
        this.AvailableProvisionedConcurrencyNum = null;

        /**
         * Provisioned concurrency setting task status. `Done`: completed; `InProgress`: in progress; `Failed`: partially or completely failed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Status description of provisioned concurrency setting task.
         * @type {string || null}
         */
        this.StatusReason = null;

        /**
         * Function version number
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * List of scheduled provisioned concurrency scaling actions
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<TriggerAction> || null}
         */
        this.TriggerActions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllocatedProvisionedConcurrencyNum = 'AllocatedProvisionedConcurrencyNum' in params ? params.AllocatedProvisionedConcurrencyNum : null;
        this.AvailableProvisionedConcurrencyNum = 'AvailableProvisionedConcurrencyNum' in params ? params.AvailableProvisionedConcurrencyNum : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusReason = 'StatusReason' in params ? params.StatusReason : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

        if (params.TriggerActions) {
            this.TriggerActions = new Array();
            for (let z in params.TriggerActions) {
                let obj = new TriggerAction();
                obj.deserialize(params.TriggerActions[z]);
                this.TriggerActions.push(obj);
            }
        }

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
         * Function name.
- To ensure the compatibility of the [`GetFunctionLogs`](https://intl.cloud.tencent.com/document/product/583/18583?from_cn_redirect=1) API, the input parameter `FunctionName` is optional, but we recommend you enter it; otherwise, log acquisition may fail.
- After the function is connected to CLS, we recommend you use the [related CLS API](https://intl.cloud.tencent.com/document/product/614/16875?from_cn_redirect=1) to get the best log retrieval experience.
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
         * This field is disused.
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
 * State reason description
 * @class
 */
class StatusReason extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * Error message
         * @type {string || null}
         */
        this.ErrorMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

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
 * GetRequestStatus request structure.
 * @class
 */
class GetRequestStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * ID of the request to be queried
         * @type {string || null}
         */
        this.FunctionRequestId = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Start time of the query, for example `2017-05-16 20:00:00`. If it’s left empty, it defaults to 15 minutes before the current time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query. such as `2017-05-16 20:59:59`. If `StartTime` is not specified, `EndTime` defaults to the current time. If `StartTime` is specified, `EndTime` is required, and it need to be later than the `StartTime`.
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
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionRequestId = 'FunctionRequestId' in params ? params.FunctionRequestId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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

        /**
         * ID of the version to delete. All versions are deleted if it’s left empty.
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

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
 * InvokeFunction response structure.
 * @class
 */
class InvokeFunctionResponse extends  AbstractModel {
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

        /**
         * Specifies the range and keyword for search. The value of `Key` can be `Namespace` or `Description`. Multiple AND conditions can be specified.
         * @type {Array.<SearchKey> || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Orderby = 'Orderby' in params ? params.Orderby : null;
        this.Order = 'Order' in params ? params.Order : null;

        if (params.SearchKey) {
            this.SearchKey = new Array();
            for (let z in params.SearchKey) {
                let obj = new SearchKey();
                obj.deserialize(params.SearchKey[z]);
                this.SearchKey.push(obj);
            }
        }

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
 * UpdateFunctionCode request structure.
 * @class
 */
class UpdateFunctionCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the function to be modified
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function handler name, which is in the `file name.function name` form. Use a period (.) to separate a file name and function name. The file name and function name must start and end with letters and contain 2-60 characters, including letters, digits, underscores (_), and hyphens (-).
         * @type {string || null}
         */
        this.Handler = null;

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
         * Whether to install dependencies automatically
         * @type {string || null}
         */
        this.InstallDependency = null;

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
         * Code source. Valid values: ZipFile, Cos, Inline
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
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosObjectName = 'CosObjectName' in params ? params.CosObjectName : null;
        this.ZipFile = 'ZipFile' in params ? params.ZipFile : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CosBucketRegion = 'CosBucketRegion' in params ? params.CosBucketRegion : null;
        this.InstallDependency = 'InstallDependency' in params ? params.InstallDependency : null;
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
 * DeleteReservedConcurrencyConfig request structure.
 * @class
 */
class DeleteReservedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the function of which you want to delete the reserved quota
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function namespace. Default value: `default`
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
 * GetFunctionEventInvokeConfig response structure.
 * @class
 */
class GetFunctionEventInvokeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async retry configuration information
         * @type {AsyncTriggerConfig || null}
         */
        this.AsyncTriggerConfig = null;

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

        if (params.AsyncTriggerConfig) {
            let obj = new AsyncTriggerConfig();
            obj.deserialize(params.AsyncTriggerConfig)
            this.AsyncTriggerConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * TerminateAsyncEvent request structure.
 * @class
 */
class TerminateAsyncEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Terminated invocation request ID
         * @type {string || null}
         */
        this.InvokeRequestId = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Whether to enable grace shutdown. If it’s `true`, a `SIGTERM` signal is sent to the specified request. See [Sending termination signal](https://intl.cloud.tencent.com/document/product/583/63969?from_cn_redirect=1#.E5.8F.91.E9.80.81.E7.BB.88.E6.AD.A2.E4.BF.A1.E5.8F.B7]. It’s set to `false` by default.
         * @type {boolean || null}
         */
        this.GraceShutdown = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.InvokeRequestId = 'InvokeRequestId' in params ? params.InvokeRequestId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.GraceShutdown = 'GraceShutdown' in params ? params.GraceShutdown : null;

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
 * `TriggerCount` describes the numbers of triggers in different types
 * @class
 */
class TriggerCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of COS triggers
         * @type {number || null}
         */
        this.Cos = null;

        /**
         * Number of timer triggers
         * @type {number || null}
         */
        this.Timer = null;

        /**
         * Number of CMQ triggers
         * @type {number || null}
         */
        this.Cmq = null;

        /**
         * Total number of triggers
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Number of CKafka triggers
         * @type {number || null}
         */
        this.Ckafka = null;

        /**
         * Number of API Gateway triggers
         * @type {number || null}
         */
        this.Apigw = null;

        /**
         * Number of CLS triggers
         * @type {number || null}
         */
        this.Cls = null;

        /**
         * Number of CLB triggers
         * @type {number || null}
         */
        this.Clb = null;

        /**
         * Number of MPS triggers
         * @type {number || null}
         */
        this.Mps = null;

        /**
         * Number of CM triggers
         * @type {number || null}
         */
        this.Cm = null;

        /**
         * Number of VOD triggers
         * @type {number || null}
         */
        this.Vod = null;

        /**
         * Number of EventBridge triggers
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Eb = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cos = 'Cos' in params ? params.Cos : null;
        this.Timer = 'Timer' in params ? params.Timer : null;
        this.Cmq = 'Cmq' in params ? params.Cmq : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Ckafka = 'Ckafka' in params ? params.Ckafka : null;
        this.Apigw = 'Apigw' in params ? params.Apigw : null;
        this.Cls = 'Cls' in params ? params.Cls : null;
        this.Clb = 'Clb' in params ? params.Clb : null;
        this.Mps = 'Mps' in params ? params.Mps : null;
        this.Cm = 'Cm' in params ? params.Cm : null;
        this.Vod = 'Vod' in params ? params.Vod : null;
        this.Eb = 'Eb' in params ? params.Eb : null;

    }
}

/**
 * Namespace limit
 * @class
 */
class NamespaceLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of functions
         * @type {number || null}
         */
        this.FunctionsCount = null;

        /**
         * Trigger information
         * @type {TriggerCount || null}
         */
        this.Trigger = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Concurrency
         * @type {number || null}
         */
        this.ConcurrentExecutions = null;

        /**
         * Timeout limit
         * @type {number || null}
         */
        this.TimeoutLimit = null;

        /**
         * Test event limit
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TestModelLimit = null;

        /**
         * Initialization timeout limit
         * @type {number || null}
         */
        this.InitTimeoutLimit = null;

        /**
         * Limit of async retry attempt quantity
         * @type {number || null}
         */
        this.RetryNumLimit = null;

        /**
         * Lower limit of message retention time for async retry
         * @type {number || null}
         */
        this.MinMsgTTL = null;

        /**
         * Upper limit of message retention time for async retry
         * @type {number || null}
         */
        this.MaxMsgTTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionsCount = 'FunctionsCount' in params ? params.FunctionsCount : null;

        if (params.Trigger) {
            let obj = new TriggerCount();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ConcurrentExecutions = 'ConcurrentExecutions' in params ? params.ConcurrentExecutions : null;
        this.TimeoutLimit = 'TimeoutLimit' in params ? params.TimeoutLimit : null;
        this.TestModelLimit = 'TestModelLimit' in params ? params.TestModelLimit : null;
        this.InitTimeoutLimit = 'InitTimeoutLimit' in params ? params.InitTimeoutLimit : null;
        this.RetryNumLimit = 'RetryNumLimit' in params ? params.RetryNumLimit : null;
        this.MinMsgTTL = 'MinMsgTTL' in params ? params.MinMsgTTL : null;
        this.MaxMsgTTL = 'MaxMsgTTL' in params ? params.MaxMsgTTL : null;

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
         * Type of trigger. Values: `cos`, `cmq`, `timer`, `ckafka` and `apigw`. To create a CLS trigger, please refer to [Creating Shipping Task (SCF)](https://intl.cloud.tencent.com/document/product/614/61096?from_cn_redirect=1).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * For parameters of triggers, see [Trigger Description](https://intl.cloud.tencent.com/document/product/583/39901?from_cn_redirect=1)
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Function version. It defaults to `$LATEST`. It’s recommended to use `[$DEFAULT](https://intl.cloud.tencent.com/document/product/583/36149?from_cn_redirect=1#.E9.BB.98.E8.AE.A4.E5.88.AB.E5.90.8D)` for canary release.
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Initial enabling status of the trigger. `OPEN` indicates enabled, and `CLOSE` indicates disabled.
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * Custom argument, supporting only the timer trigger.
         * @type {string || null}
         */
        this.CustomArgument = null;

        /**
         * Trigger description
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
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CustomArgument = 'CustomArgument' in params ? params.CustomArgument : null;
        this.Description = 'Description' in params ? params.Description : null;

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
 * ListAsyncEvents request structure.
 * @class
 */
class ListAsyncEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Filter (function version)
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Filter (invocation type list)
         * @type {Array.<string> || null}
         */
        this.InvokeType = null;

        /**
         * Filter (event status list)
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * Filter (left-closed-right-open range of execution start time)
         * @type {TimeInterval || null}
         */
        this.StartTimeInterval = null;

        /**
         * Filter (left-closed-right-open range of execution end time)
         * @type {TimeInterval || null}
         */
        this.EndTimeInterval = null;

        /**
         * Valid values: ASC, DESC. Default value: DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Valid values: StartTime, EndTime. Default value: StartTime
         * @type {string || null}
         */
        this.Orderby = null;

        /**
         * Data offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter (event invocation request ID)
         * @type {string || null}
         */
        this.InvokeRequestId = null;

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
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.InvokeType = 'InvokeType' in params ? params.InvokeType : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.StartTimeInterval) {
            let obj = new TimeInterval();
            obj.deserialize(params.StartTimeInterval)
            this.StartTimeInterval = obj;
        }

        if (params.EndTimeInterval) {
            let obj = new TimeInterval();
            obj.deserialize(params.EndTimeInterval)
            this.EndTimeInterval = obj;
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Orderby = 'Orderby' in params ? params.Orderby : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InvokeRequestId = 'InvokeRequestId' in params ? params.InvokeRequestId : null;

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
         * The [status code](https://intl.cloud.tencent.com/document/product/583/42611?from_cn_redirect=1) of the request. It’s not available for `Invoke` API. 
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
         * Whether to enable
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

        /**
         * Minimum resource ID of trigger
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Trigger-Function binding status
         * @type {string || null}
         */
        this.BindStatus = null;

        /**
         * Trigger type. Two-way means that the trigger can be manipulated in both consoles, while one-way means that the trigger can be created only in the SCF Console
         * @type {string || null}
         */
        this.TriggerAttribute = null;

        /**
         * Description of a custom trigger 
Note: This parameter may return null, indicating that no valid values can be obtained.
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
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.AvailableStatus = 'AvailableStatus' in params ? params.AvailableStatus : null;
        this.CustomArgument = 'CustomArgument' in params ? params.CustomArgument : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.TriggerAttribute = 'TriggerAttribute' in params ? params.TriggerAttribute : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Running status of the function
 * @class
 */
class RequestStatus extends  AbstractModel {
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
         * Request ID
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * Request start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Result of the request. `0`: succeeded, `1`: running, `-1`: exception
         * @type {number || null}
         */
        this.RetCode = null;

        /**
         * Time consumed for the request in ms
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Time consumed by the request in MB
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * Retry Attempts
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
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.RetryNum = 'RetryNum' in params ? params.RetryNum : null;

    }
}

/**
 * GetAccount request structure.
 * @class
 */
class GetAccountRequest extends  AbstractModel {
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
 * PutTotalConcurrencyConfig response structure.
 * @class
 */
class PutTotalConcurrencyConfigResponse extends  AbstractModel {
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
 * GetAsyncEventStatus request structure.
 * @class
 */
class GetAsyncEventStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the async execution request
         * @type {string || null}
         */
        this.InvokeRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokeRequestId = 'InvokeRequestId' in params ? params.InvokeRequestId : null;

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
Note: This parameter may return null, indicating that no valid values can be obtained.
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
 * DeleteProvisionedConcurrencyConfig request structure.
 * @class
 */
class DeleteProvisionedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the function for which to delete the provisioned concurrency
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function version number
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Function namespace. Default value: `default`
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
 * TerminateAsyncEvent response structure.
 * @class
 */
class TerminateAsyncEventResponse extends  AbstractModel {
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
         * Fill in `RequestResponse` for synchronized invocations (default and recommended) and `Event` for asychronized invocations. Note that for synchronized invocations, the max timeout period is 300s. Choose asychronized invocations if the required timeout period is longer than 300 seconds. You can also use [InvokeFunction](https://intl.cloud.tencent.com/document/product/583/58400?from_cn_redirect=1) for synchronized invocations. 
         * @type {string || null}
         */
        this.InvocationType = null;

        /**
         * The version or alias of the triggered function. It defaults to $LATEST
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Function running parameter, which is in the JSON format. The maximum parameter size is 6 MB for synchronized invocations and 128KB for asynchronized invocations. This field corresponds to [event input parameter](https://intl.cloud.tencent.com/document/product/583/9210?from_cn_redirect=1#.E5.87.BD.E6.95.B0.E5.85.A5.E5.8F.82.3Ca-id.3D.22input.22.3E.3C.2Fa.3E).
         * @type {string || null}
         */
        this.ClientContext = null;

        /**
         * Null for async invocations
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
         * Alias name, which must be unique in the function, can contain 1 to 64 letters, digits, `_`, and `-`, and must begin with a letter
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Master version pointed to by the alias
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
 * UpdateFunctionEventInvokeConfig response structure.
 * @class
 */
class UpdateFunctionEventInvokeConfigResponse extends  AbstractModel {
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
 * PutReservedConcurrencyConfig request structure.
 * @class
 */
class PutReservedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the function of which you want to configure the reserved quota
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Reserved memory quota of the function. Note: the upper limit for the total reserved quota of the function is the user's total concurrency memory minus 12800
         * @type {number || null}
         */
        this.ReservedConcurrencyMem = null;

        /**
         * Function namespace. Default value: `default`
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
        this.ReservedConcurrencyMem = 'ReservedConcurrencyMem' in params ? params.ReservedConcurrencyMem : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

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
         * Layer name, which can contain 1-64 English letters, digits, hyphens, and underscores, must begin with a letter, and cannot end with a hyphen or underscore
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
 * UpdateTriggerStatus response structure.
 * @class
 */
class UpdateTriggerStatusResponse extends  AbstractModel {
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
 * UpdateFunctionEventInvokeConfig request structure.
 * @class
 */
class UpdateFunctionEventInvokeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async retry configuration information
         * @type {AsyncTriggerConfig || null}
         */
        this.AsyncTriggerConfig = null;

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function namespace. Default value: default
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

        if (params.AsyncTriggerConfig) {
            let obj = new AsyncTriggerConfig();
            obj.deserialize(params.AsyncTriggerConfig)
            this.AsyncTriggerConfig = obj;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

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
         * Fields to be filtered. Up to 10 conditions allowed.
Values of `Name`: `VpcId`, `SubnetId`, `ClsTopicId`, `ClsLogsetId`, `Role`, `CfsId`, `CfsMountInsId`, `Eip`. Values limit: 1.
Name options: Status, Runtime, FunctionType, PublicNetStatus, AsyncRunEnable, TraceEnable. Values limit: 20.
When `Name` is `Runtime`, `CustomImage` refers to the image type function 
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
 * GetFunctionEventInvokeConfig request structure.
 * @class
 */
class GetFunctionEventInvokeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function namespace. Default value: default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Function version. Default value: $LATEST
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

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
         * Object bucket name (enter the custom part of the bucket name without `-appid`)
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * File path of code package stored in COS, which should start with “/”
         * @type {string || null}
         */
        this.CosObjectName = null;

        /**
         * This parameter contains a .zip file (up to 50 MB) of the function code file and its dependencies. When this API is used, the content of the .zip file needs to be Base64-encoded
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
         * (Disused) Git address
         * @type {string || null}
         */
        this.GitUrl = null;

        /**
         * (Disused) Git username
         * @type {string || null}
         */
        this.GitUserName = null;

        /**
         * (Disused) Git password
         * @type {string || null}
         */
        this.GitPassword = null;

        /**
         * (Disused) Git password after encryption. It’s usually not required.
         * @type {string || null}
         */
        this.GitPasswordSecret = null;

        /**
         * (Disused) Git branch
         * @type {string || null}
         */
        this.GitBranch = null;

        /**
         * (Disused) Directory to the codes in the Git repository. 
         * @type {string || null}
         */
        this.GitDirectory = null;

        /**
         * (Disused) 
         * @type {string || null}
         */
        this.GitCommitId = null;

        /**
         * (Disused) Git username after encryption. It’s usually not required.
         * @type {string || null}
         */
        this.GitUserNameSecret = null;

        /**
         * TCR image configurations
         * @type {ImageConfig || null}
         */
        this.ImageConfig = null;

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

        if (params.ImageConfig) {
            let obj = new ImageConfig();
            obj.deserialize(params.ImageConfig)
            this.ImageConfig = obj;
        }

    }
}

/**
 * PutTotalConcurrencyConfig request structure.
 * @class
 */
class PutTotalConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account concurrency memory quota. Note: the lower limit for the account concurrency memory quota is the user's total concurrency memory used + 12800
         * @type {number || null}
         */
        this.TotalConcurrencyMem = null;

        /**
         * Namespace. Default value: `default`
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
        this.TotalConcurrencyMem = 'TotalConcurrencyMem' in params ? params.TotalConcurrencyMem : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

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
         * SHA256 encoding of version file on the layer
         * @type {string || null}
         */
        this.CodeSha256 = null;

        /**
         * Download address of version file on the layer
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
         * Current status of specific layer version. For the status values, [see here](https://intl.cloud.tencent.com/document/product/583/47175?from_cn_redirect=1#.E5.B1.82.EF.BC.88layer.EF.BC.89.E7.8A.B6.E6.80.81)
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
 * GetRequestStatus response structure.
 * @class
 */
class GetRequestStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total running functions
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of the function running status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RequestStatus> || null}
         */
        this.Data = null;

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
                let obj = new RequestStatus();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Async event status
 * @class
 */
class AsyncEventStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async event status. Values: `RUNNING` (running); `FINISHED` (invoked successfully); `ABORTED` (invocation ended); `FAILED` (invocation failed).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Request status code
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * Async execution request ID
         * @type {string || null}
         */
        this.InvokeRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.InvokeRequestId = 'InvokeRequestId' in params ? params.InvokeRequestId : null;

    }
}

/**
 * PutReservedConcurrencyConfig response structure.
 * @class
 */
class PutReservedConcurrencyConfigResponse extends  AbstractModel {
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
 * InvokeFunction request structure.
 * @class
 */
class InvokeFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function name
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Version or alias of the function. It defaults to `$DEFAULT`.
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Function running parameter, which is in the JSON format. Maximum parameter size is 6 MB. This field corresponds to [event input parameter](https://intl.cloud.tencent.com/document/product/583/9210?from_cn_redirect=1#.E5.87.BD.E6.95.B0.E5.85.A5.E5.8F.82.3Ca-id.3D.22input.22.3E.3C.2Fa.3E).
         * @type {string || null}
         */
        this.Event = null;

        /**
         * Valid value: `None` (default) or `Tail`. If the value is `Tail`, `log` in the response will contain the corresponding function execution log (up to 4KB).
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * Namespace. `default` is used if it’s left empty.
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
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Event = 'Event' in params ? params.Event : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.RoutingKey = 'RoutingKey' in params ? params.RoutingKey : null;

    }
}

/**
 * Async retry configuration
 * @class
 */
class RetryConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of retry attempts
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
        this.RetryNum = 'RetryNum' in params ? params.RetryNum : null;

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
 * UpdateTriggerStatus request structure.
 * @class
 */
class UpdateTriggerStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Initial status of the trigger. Values: `OPEN` (enabled); `CLOSE` disabled)
         * @type {string || null}
         */
        this.Enable = null;

        /**
         * Function name.
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Trigger name
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * Trigger Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Function version. It defaults to `$LATEST`. It’s recommended to use `[$DEFAULT](https://intl.cloud.tencent.com/document/product/583/36149?from_cn_redirect=1#.E9.BB.98.E8.AE.A4.E5.88.AB.E5.90.8D)` for canary release.
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Function namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * To update a COS trigger, this field is required. It stores the data {"event":"cos:ObjectCreated:*"} in the JSON format. The data content of this field is in the same format as that of SetTrigger. This field is optional if a scheduled trigger or CMQ trigger is to be deleted.
         * @type {string || null}
         */
        this.TriggerDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;

    }
}

/**
 * Details of a scheduled provisioned concurrency scaling action
 * @class
 */
class TriggerAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scheduled action name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * Target provisioned concurrency of the scheduled scaling action 
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TriggerProvisionedConcurrencyNum = null;

        /**
         * Trigger time of the scheduled action in Cron expression. Seven fields are required and should be separated with a space.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TriggerCronConfig = null;

        /**
         * The provision type. Value: `Default`
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.ProvisionedType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.TriggerProvisionedConcurrencyNum = 'TriggerProvisionedConcurrencyNum' in params ? params.TriggerProvisionedConcurrencyNum : null;
        this.TriggerCronConfig = 'TriggerCronConfig' in params ? params.TriggerCronConfig : null;
        this.ProvisionedType = 'ProvisionedType' in params ? params.ProvisionedType : null;

    }
}

/**
 * Limit information
 * @class
 */
class LimitsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Limit of namespace quantity
         * @type {number || null}
         */
        this.NamespacesCount = null;

        /**
         * Namespace limit information
         * @type {Array.<NamespaceLimit> || null}
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
        this.NamespacesCount = 'NamespacesCount' in params ? params.NamespacesCount : null;

        if (params.Namespace) {
            this.Namespace = new Array();
            for (let z in params.Namespace) {
                let obj = new NamespaceLimit();
                obj.deserialize(params.Namespace[z]);
                this.Namespace.push(obj);
            }
        }

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

        /**
         * Version status
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.Version = 'Version' in params ? params.Version : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Async retry configuration details of function
 * @class
 */
class AsyncTriggerConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async retry configuration of function upon user error
         * @type {Array.<RetryConfig> || null}
         */
        this.RetryConfig = null;

        /**
         * Message retention period
         * @type {number || null}
         */
        this.MsgTTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RetryConfig) {
            this.RetryConfig = new Array();
            for (let z in params.RetryConfig) {
                let obj = new RetryConfig();
                obj.deserialize(params.RetryConfig[z]);
                this.RetryConfig.push(obj);
            }
        }
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;

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
 * GetAsyncEventStatus response structure.
 * @class
 */
class GetAsyncEventStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async event status
         * @type {AsyncEventStatus || null}
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
            let obj = new AsyncEventStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
         * Indicates by which field to sort the returned results. Valid values: add_time, mod_time. Default value: mod_time
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Indicates whether the returned results are sorted in ascending or descending order. Valid values: ASC, DESC. Default value: DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * * Qualifier: Version/Alias of trigger function 
*TriggerName: Name of the trigger 
*Description: Function trigger description
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
 * GetReservedConcurrencyConfig request structure.
 * @class
 */
class GetReservedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the function of which you want to obtain the reserved quota
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function namespace. Default value: default.
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
 * PutProvisionedConcurrencyConfig request structure.
 * @class
 */
class PutProvisionedConcurrencyConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the function for which to set the provisioned concurrency
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * Function version number. Note: the `$LATEST` version does not support provisioned concurrency
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * Provisioned concurrency amount. Note: there is an upper limit for the sum of provisioned concurrency amounts of all versions, which currently is the function's maximum concurrency quota minus 100
         * @type {number || null}
         */
        this.VersionProvisionedConcurrencyNum = null;

        /**
         * Function namespace. Default value: `default`
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Scheduled provisioned concurrency scaling action
         * @type {Array.<TriggerAction> || null}
         */
        this.TriggerActions = null;

        /**
         * Specifies the provisioned concurrency type.
`Default`: Static provisioned concurrency. 
`ConcurrencyUtilizationTracking`: Scales the concurrency automatically according to the concurrency utilization.
If `ConcurrencyUtilizationTracking` is passed in, 

`TrackingTarget`, `MinCapacity` and `MaxCapacity` are required, and `VersionProvisionedConcurrencyNum` must be `0`. 
         * @type {string || null}
         */
        this.ProvisionedType = null;

        /**
         * The target concurrency utilization. Range: (0,1) (two decimal places)
         * @type {number || null}
         */
        this.TrackingTarget = null;

        /**
         * The minimum number of instances. It can not be smaller than `1`.
         * @type {number || null}
         */
        this.MinCapacity = null;

        /**
         * The maximum number of instances
         * @type {number || null}
         */
        this.MaxCapacity = null;

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
        this.VersionProvisionedConcurrencyNum = 'VersionProvisionedConcurrencyNum' in params ? params.VersionProvisionedConcurrencyNum : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.TriggerActions) {
            this.TriggerActions = new Array();
            for (let z in params.TriggerActions) {
                let obj = new TriggerAction();
                obj.deserialize(params.TriggerActions[z]);
                this.TriggerActions.push(obj);
            }
        }
        this.ProvisionedType = 'ProvisionedType' in params ? params.ProvisionedType : null;
        this.TrackingTarget = 'TrackingTarget' in params ? params.TrackingTarget : null;
        this.MinCapacity = 'MinCapacity' in params ? params.MinCapacity : null;
        this.MaxCapacity = 'MaxCapacity' in params ? params.MaxCapacity : null;

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
         * Runtime 
Note: This parameter may return null, indicating that no valid values can be obtained.
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
         * Function status. For valid values and status change process, please see [here](https://intl.cloud.tencent.com/document/product/583/47175?from_cn_redirect=1)
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

        /**
         * Cause of function failure
         * @type {Array.<StatusReason> || null}
         */
        this.StatusReasons = null;

        /**
         * Sum of provisioned concurrence memory for all function versions
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalProvisionedConcurrencyMem = null;

        /**
         * Reserved memory for function concurrence
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReservedConcurrencyMem = null;

        /**
         * Asynchronization attribute of the function. Values: `TRUE` and `FALSE`.
         * @type {string || null}
         */
        this.AsyncRunEnable = null;

        /**
         * Whether to enable call tracing for ansynchronized functions. Values: `TRUE` and `FALSE`.
         * @type {string || null}
         */
        this.TraceEnable = null;

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

        if (params.StatusReasons) {
            this.StatusReasons = new Array();
            for (let z in params.StatusReasons) {
                let obj = new StatusReason();
                obj.deserialize(params.StatusReasons[z]);
                this.StatusReasons.push(obj);
            }
        }
        this.TotalProvisionedConcurrencyMem = 'TotalProvisionedConcurrencyMem' in params ? params.TotalProvisionedConcurrencyMem : null;
        this.ReservedConcurrencyMem = 'ReservedConcurrencyMem' in params ? params.ReservedConcurrencyMem : null;
        this.AsyncRunEnable = 'AsyncRunEnable' in params ? params.AsyncRunEnable : null;
        this.TraceEnable = 'TraceEnable' in params ? params.TraceEnable : null;

    }
}

/**
 * Namespace usage information
 * @class
 */
class NamespaceUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Function array
         * @type {Array.<string> || null}
         */
        this.Functions = null;

        /**
         * Namespace name
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Number of functions in namespace
         * @type {number || null}
         */
        this.FunctionsCount = null;

        /**
         * Total memory quota of the namespace
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalConcurrencyMem = null;

        /**
         * Concurrency usage of the namespace
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TotalAllocatedConcurrencyMem = null;

        /**
         * Provisioned concurrency usage of the namespace
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TotalAllocatedProvisionedMem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Functions = 'Functions' in params ? params.Functions : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.FunctionsCount = 'FunctionsCount' in params ? params.FunctionsCount : null;
        this.TotalConcurrencyMem = 'TotalConcurrencyMem' in params ? params.TotalConcurrencyMem : null;
        this.TotalAllocatedConcurrencyMem = 'TotalAllocatedConcurrencyMem' in params ? params.TotalAllocatedConcurrencyMem : null;
        this.TotalAllocatedProvisionedMem = 'TotalAllocatedProvisionedMem' in params ? params.TotalAllocatedProvisionedMem : null;

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
         * If this parameter is provided, only aliases associated with this function version will be returned.
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
 * Version alias of function
 * @class
 */
class Alias extends  AbstractModel {
    constructor(){
        super();

        /**
         * Master version pointed to by the alias
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
 * GetAccount response structure.
 * @class
 */
class GetAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace usage information
         * @type {UsageInfo || null}
         */
        this.AccountUsage = null;

        /**
         * Namespace limit information
         * @type {LimitsInfo || null}
         */
        this.AccountLimit = null;

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

        if (params.AccountUsage) {
            let obj = new UsageInfo();
            obj.deserialize(params.AccountUsage)
            this.AccountUsage = obj;
        }

        if (params.AccountLimit) {
            let obj = new LimitsInfo();
            obj.deserialize(params.AccountLimit)
            this.AccountLimit = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * This field is disused.
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
 * TCR image information
 * @class
 */
class ImageConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image repository type, which can be `personal` or `enterprise`
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * {domain}/{namespace}/{imageName}:{tag}@{digest}
         * @type {string || null}
         */
        this.ImageUri = null;

        /**
         * The temp token that a TCR Enterprise instance uses to obtain an image. It’s required when `ImageType` is `enterprise`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Disused
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EntryPoint = null;

        /**
         * The command to start up the container, such as `python`. If it’s not specified, Entrypoint in Dockerfile is used.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Command = null;

        /**
         * The parameters to start up the container. Separate parameters with spaces, such as `u app.py`. If it’s not specified, `CMD in Dockerfile is used.
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Args = null;

        /**
         * Whether to enable image acceleration. It defaults to `False`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ContainerImageAccelerate = null;

        /**
         * Image function port settings
`-1`: No port-specific image functions
`0`: Default port (Port 9000)
Others: Special ports
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ImagePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.ImageUri = 'ImageUri' in params ? params.ImageUri : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.EntryPoint = 'EntryPoint' in params ? params.EntryPoint : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.ContainerImageAccelerate = 'ContainerImageAccelerate' in params ? params.ContainerImageAccelerate : null;
        this.ImagePort = 'ImagePort' in params ? params.ImagePort : null;

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
 * Key-value condition for keyword search
 * @class
 */
class SearchKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Search range
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Keyword for search
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
         * Function version. It defaults to `$LATEST`. It’s recommended to use `[$DEFAULT](https://intl.cloud.tencent.com/document/product/583/36149?from_cn_redirect=1#.E9.BB.98.E8.AE.A4.E5.88.AB.E5.90.8D)` for canary release.
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
 * GetProvisionedConcurrencyConfig response structure.
 * @class
 */
class GetProvisionedConcurrencyConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unallocated provisioned concurrency amount of function.
         * @type {number || null}
         */
        this.UnallocatedConcurrencyNum = null;

        /**
         * Allocated provisioned concurrency amount of function.
         * @type {Array.<VersionProvisionedConcurrencyInfo> || null}
         */
        this.Allocated = null;

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
        this.UnallocatedConcurrencyNum = 'UnallocatedConcurrencyNum' in params ? params.UnallocatedConcurrencyNum : null;

        if (params.Allocated) {
            this.Allocated = new Array();
            for (let z in params.Allocated) {
                let obj = new VersionProvisionedConcurrencyInfo();
                obj.deserialize(params.Allocated[z]);
                this.Allocated.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListAsyncEvents response structure.
 * @class
 */
class ListAsyncEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of events that meet the filter
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Async event list
         * @type {Array.<AsyncEvent> || null}
         */
        this.EventList = null;

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

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new AsyncEvent();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
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
    UpdateAliasRequest: UpdateAliasRequest,
    Trigger: Trigger,
    GetProvisionedConcurrencyConfigRequest: GetProvisionedConcurrencyConfigRequest,
    ListAliasesResponse: ListAliasesResponse,
    DeleteLayerVersionResponse: DeleteLayerVersionResponse,
    GetReservedConcurrencyConfigResponse: GetReservedConcurrencyConfigResponse,
    RoutingConfig: RoutingConfig,
    DeleteProvisionedConcurrencyConfigResponse: DeleteProvisionedConcurrencyConfigResponse,
    VersionWeight: VersionWeight,
    TimeInterval: TimeInterval,
    LayerVersionInfo: LayerVersionInfo,
    PutProvisionedConcurrencyConfigResponse: PutProvisionedConcurrencyConfigResponse,
    UpdateNamespaceResponse: UpdateNamespaceResponse,
    PublishLayerVersionResponse: PublishLayerVersionResponse,
    UsageInfo: UsageInfo,
    AsyncEvent: AsyncEvent,
    DeleteReservedConcurrencyConfigResponse: DeleteReservedConcurrencyConfigResponse,
    GetAliasResponse: GetAliasResponse,
    UpdateAliasResponse: UpdateAliasResponse,
    VersionProvisionedConcurrencyInfo: VersionProvisionedConcurrencyInfo,
    GetFunctionLogsRequest: GetFunctionLogsRequest,
    StatusReason: StatusReason,
    Tag: Tag,
    GetRequestStatusRequest: GetRequestStatusRequest,
    LogFilter: LogFilter,
    ListLayerVersionsResponse: ListLayerVersionsResponse,
    DeleteFunctionRequest: DeleteFunctionRequest,
    CopyFunctionResponse: CopyFunctionResponse,
    InvokeFunctionResponse: InvokeFunctionResponse,
    Namespace: Namespace,
    ListNamespacesRequest: ListNamespacesRequest,
    PublishVersionRequest: PublishVersionRequest,
    DeleteAliasRequest: DeleteAliasRequest,
    ListVersionByFunctionResponse: ListVersionByFunctionResponse,
    GetAliasRequest: GetAliasRequest,
    DeleteNamespaceRequest: DeleteNamespaceRequest,
    UpdateFunctionCodeRequest: UpdateFunctionCodeRequest,
    DeleteReservedConcurrencyConfigRequest: DeleteReservedConcurrencyConfigRequest,
    GetFunctionEventInvokeConfigResponse: GetFunctionEventInvokeConfigResponse,
    ListTriggersResponse: ListTriggersResponse,
    TerminateAsyncEventRequest: TerminateAsyncEventRequest,
    ListLayersRequest: ListLayersRequest,
    CopyFunctionRequest: CopyFunctionRequest,
    DeleteNamespaceResponse: DeleteNamespaceResponse,
    TriggerCount: TriggerCount,
    NamespaceLimit: NamespaceLimit,
    ListFunctionsRequest: ListFunctionsRequest,
    CreateTriggerRequest: CreateTriggerRequest,
    GetLayerVersionRequest: GetLayerVersionRequest,
    DeleteFunctionResponse: DeleteFunctionResponse,
    ListAsyncEventsRequest: ListAsyncEventsRequest,
    Result: Result,
    CreateAliasResponse: CreateAliasResponse,
    LogSearchContext: LogSearchContext,
    TriggerInfo: TriggerInfo,
    RequestStatus: RequestStatus,
    GetAccountRequest: GetAccountRequest,
    PutTotalConcurrencyConfigResponse: PutTotalConcurrencyConfigResponse,
    GetAsyncEventStatusRequest: GetAsyncEventStatusRequest,
    DeleteAliasResponse: DeleteAliasResponse,
    PublishVersionResponse: PublishVersionResponse,
    DeleteProvisionedConcurrencyConfigRequest: DeleteProvisionedConcurrencyConfigRequest,
    TerminateAsyncEventResponse: TerminateAsyncEventResponse,
    GetFunctionAddressRequest: GetFunctionAddressRequest,
    InvokeResponse: InvokeResponse,
    InvokeRequest: InvokeRequest,
    CreateAliasRequest: CreateAliasRequest,
    VersionMatch: VersionMatch,
    UpdateFunctionEventInvokeConfigResponse: UpdateFunctionEventInvokeConfigResponse,
    PutReservedConcurrencyConfigRequest: PutReservedConcurrencyConfigRequest,
    ListLayerVersionsRequest: ListLayerVersionsRequest,
    CreateTriggerResponse: CreateTriggerResponse,
    PublishLayerVersionRequest: PublishLayerVersionRequest,
    CreateNamespaceRequest: CreateNamespaceRequest,
    UpdateTriggerStatusResponse: UpdateTriggerStatusResponse,
    UpdateFunctionEventInvokeConfigRequest: UpdateFunctionEventInvokeConfigRequest,
    DeleteLayerVersionRequest: DeleteLayerVersionRequest,
    Filter: Filter,
    GetFunctionEventInvokeConfigRequest: GetFunctionEventInvokeConfigRequest,
    Code: Code,
    PutTotalConcurrencyConfigRequest: PutTotalConcurrencyConfigRequest,
    UpdateNamespaceRequest: UpdateNamespaceRequest,
    GetLayerVersionResponse: GetLayerVersionResponse,
    GetRequestStatusResponse: GetRequestStatusResponse,
    AsyncEventStatus: AsyncEventStatus,
    PutReservedConcurrencyConfigResponse: PutReservedConcurrencyConfigResponse,
    FunctionLog: FunctionLog,
    InvokeFunctionRequest: InvokeFunctionRequest,
    RetryConfig: RetryConfig,
    GetFunctionAddressResponse: GetFunctionAddressResponse,
    UpdateTriggerStatusRequest: UpdateTriggerStatusRequest,
    TriggerAction: TriggerAction,
    LimitsInfo: LimitsInfo,
    ListLayersResponse: ListLayersResponse,
    FunctionVersion: FunctionVersion,
    AsyncTriggerConfig: AsyncTriggerConfig,
    ListVersionByFunctionRequest: ListVersionByFunctionRequest,
    ListFunctionsResponse: ListFunctionsResponse,
    GetAsyncEventStatusResponse: GetAsyncEventStatusResponse,
    ListTriggersRequest: ListTriggersRequest,
    CreateNamespaceResponse: CreateNamespaceResponse,
    GetReservedConcurrencyConfigRequest: GetReservedConcurrencyConfigRequest,
    PutProvisionedConcurrencyConfigRequest: PutProvisionedConcurrencyConfigRequest,
    Function: Function,
    NamespaceUsage: NamespaceUsage,
    ListAliasesRequest: ListAliasesRequest,
    Alias: Alias,
    GetAccountResponse: GetAccountResponse,
    GetFunctionLogsResponse: GetFunctionLogsResponse,
    ImageConfig: ImageConfig,
    DeleteTriggerResponse: DeleteTriggerResponse,
    SearchKey: SearchKey,
    DeleteTriggerRequest: DeleteTriggerRequest,
    GetProvisionedConcurrencyConfigResponse: GetProvisionedConcurrencyConfigResponse,
    ListAsyncEventsResponse: ListAsyncEventsResponse,
    ListNamespacesResponse: ListNamespacesResponse,
    UpdateFunctionCodeResponse: UpdateFunctionCodeResponse,

}
