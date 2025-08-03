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
 * DescribeTask request structure.
 * @class
 */
class DescribeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * DescribeActionFieldConfigList request structure.
 * @class
 */
class DescribeActionFieldConfigListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action ID list
         * @type {Array.<number> || null}
         */
        this.ActionIds = null;

        /**
         * Object type ID
         * @type {number || null}
         */
        this.ObjectTypeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionIds = 'ActionIds' in params ? params.ActionIds : null;
        this.ObjectTypeId = 'ObjectTypeId' in params ? params.ObjectTypeId : null;

    }
}

/**
 * Task group action
 * @class
 */
class TaskGroupAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task group action ID
         * @type {number || null}
         */
        this.TaskGroupActionId = null;

        /**
         * Action instance list of the task group
         * @type {Array.<TaskGroupInstance> || null}
         */
        this.TaskGroupInstances = null;

        /**
         * Action ID
         * @type {number || null}
         */
        this.ActionId = null;

        /**
         * Order of actions in the group
         * @type {number || null}
         */
        this.TaskGroupActionOrder = null;

        /**
         * General configurations of actions in the group
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskGroupActionGeneralConfiguration = null;

        /**
         * Custom configurations of actions in the group
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskGroupActionCustomConfiguration = null;

        /**
         * Status of actions in the group
         * @type {number || null}
         */
        this.TaskGroupActionStatus = null;

        /**
         * Action group creation time
         * @type {string || null}
         */
        this.TaskGroupActionCreateTime = null;

        /**
         * Action group update time
         * @type {string || null}
         */
        this.TaskGroupActionUpdateTime = null;

        /**
         * Action name
         * @type {string || null}
         */
        this.ActionTitle = null;

        /**
         * Status. 0: no status; 1: successful; 2; failed; 3: terminated; 4: skipped.
         * @type {number || null}
         */
        this.TaskGroupActionStatusType = null;

        /**
         * RandomId
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskGroupActionRandomId = null;

        /**
         * RecoverId
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskGroupActionRecoverId = null;

        /**
         * ExecuteId
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskGroupActionExecuteId = null;

        /**
         * Called API type. 0: tat; 1: cloud API.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ActionApiType = null;

        /**
         * 1: fault; 2: recovery.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ActionAttribute = null;

        /**
         * Action type: platform and custom
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Whether retry is allowed
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsExecuteRedo = null;

        /**
         * Action risk level
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionRisk = null;

        /**
         * Action running time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskGroupActionExecuteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupActionId = 'TaskGroupActionId' in params ? params.TaskGroupActionId : null;

        if (params.TaskGroupInstances) {
            this.TaskGroupInstances = new Array();
            for (let z in params.TaskGroupInstances) {
                let obj = new TaskGroupInstance();
                obj.deserialize(params.TaskGroupInstances[z]);
                this.TaskGroupInstances.push(obj);
            }
        }
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.TaskGroupActionOrder = 'TaskGroupActionOrder' in params ? params.TaskGroupActionOrder : null;
        this.TaskGroupActionGeneralConfiguration = 'TaskGroupActionGeneralConfiguration' in params ? params.TaskGroupActionGeneralConfiguration : null;
        this.TaskGroupActionCustomConfiguration = 'TaskGroupActionCustomConfiguration' in params ? params.TaskGroupActionCustomConfiguration : null;
        this.TaskGroupActionStatus = 'TaskGroupActionStatus' in params ? params.TaskGroupActionStatus : null;
        this.TaskGroupActionCreateTime = 'TaskGroupActionCreateTime' in params ? params.TaskGroupActionCreateTime : null;
        this.TaskGroupActionUpdateTime = 'TaskGroupActionUpdateTime' in params ? params.TaskGroupActionUpdateTime : null;
        this.ActionTitle = 'ActionTitle' in params ? params.ActionTitle : null;
        this.TaskGroupActionStatusType = 'TaskGroupActionStatusType' in params ? params.TaskGroupActionStatusType : null;
        this.TaskGroupActionRandomId = 'TaskGroupActionRandomId' in params ? params.TaskGroupActionRandomId : null;
        this.TaskGroupActionRecoverId = 'TaskGroupActionRecoverId' in params ? params.TaskGroupActionRecoverId : null;
        this.TaskGroupActionExecuteId = 'TaskGroupActionExecuteId' in params ? params.TaskGroupActionExecuteId : null;
        this.ActionApiType = 'ActionApiType' in params ? params.ActionApiType : null;
        this.ActionAttribute = 'ActionAttribute' in params ? params.ActionAttribute : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.IsExecuteRedo = 'IsExecuteRedo' in params ? params.IsExecuteRedo : null;
        this.ActionRisk = 'ActionRisk' in params ? params.ActionRisk : null;
        this.TaskGroupActionExecuteTime = 'TaskGroupActionExecuteTime' in params ? params.TaskGroupActionExecuteTime : null;

    }
}

/**
 * Application information on Application Performance Monitoring
 * @class
 */
class ApmServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Business ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Application name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ServiceNameList = null;

        /**
         * Region ID

Note: This field may return null, indicating that no valid values can be obtained.
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ServiceNameList = 'ServiceNameList' in params ? params.ServiceNameList : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * Machine selection rule
 * @class
 */
class TaskGroupInstancesExecuteRules extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance selection mode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskGroupInstancesExecuteMode = null;

        /**
         * Proportion of selected machines in selection by proportion mode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskGroupInstancesExecutePercent = null;

        /**
         * Number of selected machines in selection by quantity mode
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskGroupInstancesExecuteNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupInstancesExecuteMode = 'TaskGroupInstancesExecuteMode' in params ? params.TaskGroupInstancesExecuteMode : null;
        this.TaskGroupInstancesExecutePercent = 'TaskGroupInstancesExecutePercent' in params ? params.TaskGroupInstancesExecutePercent : null;
        this.TaskGroupInstancesExecuteNum = 'TaskGroupInstancesExecuteNum' in params ? params.TaskGroupInstancesExecuteNum : null;

    }
}

/**
 * CreateTaskFromAction request structure.
 * @class
 */
class CreateTaskFromActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action ID, which can be obtained by using the action list API DescribeActionLibraryList.
         * @type {number || null}
         */
        this.TaskActionId = null;

        /**
         * ID of the instance participating in the experiment.
         * @type {Array.<string> || null}
         */
        this.TaskInstances = null;

        /**
         * Experiment name. If this parameter is left blank, the action name is used by default.
         * @type {string || null}
         */
        this.TaskTitle = null;

        /**
         * Experiment description. If this parameter is left blank, the action description is used by default.
         * @type {string || null}
         */
        this.TaskDescription = null;

        /**
         * General action parameters, which need to be passed in after JSON serialization. The parameters can be obtained by using the action details API DescribeActionFieldConfigList. If this field is left blank, the default action parameters are used by default.
         * @type {string || null}
         */
        this.TaskActionGeneralConfiguration = null;

        /**
         * Action custom parameters need to be passed in as json serialization. They can be obtained from the action details interface DescribeActionFieldConfigList. If not filled in, the default action parameters will be used. Note: Required parameters have no default values. Be sure to pass in valid values.
         * @type {string || null}
         */
        this.TaskActionCustomConfiguration = null;

        /**
         * Automatic experiment pause time, in minutes. If this parameter is left blank, the default value 60 is used.
         * @type {number || null}
         */
        this.TaskPauseDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskActionId = 'TaskActionId' in params ? params.TaskActionId : null;
        this.TaskInstances = 'TaskInstances' in params ? params.TaskInstances : null;
        this.TaskTitle = 'TaskTitle' in params ? params.TaskTitle : null;
        this.TaskDescription = 'TaskDescription' in params ? params.TaskDescription : null;
        this.TaskActionGeneralConfiguration = 'TaskActionGeneralConfiguration' in params ? params.TaskActionGeneralConfiguration : null;
        this.TaskActionCustomConfiguration = 'TaskActionCustomConfiguration' in params ? params.TaskActionCustomConfiguration : null;
        this.TaskPauseDuration = 'TaskPauseDuration' in params ? params.TaskPauseDuration : null;

    }
}

/**
 * DeleteTask request structure.
 * @class
 */
class DeleteTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * DescribeActionLibraryList request structure.
 * @class
 */
class DescribeActionLibraryListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0-100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Object type ID
         * @type {number || null}
         */
        this.ObjectType = null;

        /**
         * Keyword value {"action name": "a_title", "description": "a_desc", "action type": "a_type", "creation time": "a_create_time", "level-2 type": "a_resource_type"}
         * @type {Array.<ActionFilter> || null}
         */
        this.Filters = null;

        /**
         * Action type. 1: fault action; 2: recovery action.
         * @type {Array.<number> || null}
         */
        this.Attribute = null;

        /**
         * Filter item - action ID
         * @type {Array.<number> || null}
         */
        this.ActionIds = null;

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
        this.ObjectType = 'ObjectType' in params ? params.ObjectType : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ActionFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Attribute = 'Attribute' in params ? params.Attribute : null;
        this.ActionIds = 'ActionIds' in params ? params.ActionIds : null;

    }
}

/**
 * Task group
 * @class
 */
class TaskGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task action ID
         * @type {number || null}
         */
        this.TaskGroupId = null;

        /**
         * Group name
         * @type {string || null}
         */
        this.TaskGroupTitle = null;

        /**
         * Group description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskGroupDescription = null;

        /**
         * Task group order
         * @type {number || null}
         */
        this.TaskGroupOrder = null;

        /**
         * Object type ID
         * @type {number || null}
         */
        this.ObjectTypeId = null;

        /**
         * Task group creation time
         * @type {string || null}
         */
        this.TaskGroupCreateTime = null;

        /**
         * Task group update time
         * @type {string || null}
         */
        this.TaskGroupUpdateTime = null;

        /**
         * List of actions in the group
         * @type {Array.<TaskGroupAction> || null}
         */
        this.TaskGroupActions = null;

        /**
         * Instance list
         * @type {Array.<string> || null}
         */
        this.TaskGroupInstanceList = null;

        /**
         * Execution mode. 1: sequential execution; 2: execution by stage.
         * @type {number || null}
         */
        this.TaskGroupMode = null;

        /**
         * List of instances not involved in the experiment
         * @type {Array.<string> || null}
         */
        this.TaskGroupDiscardInstanceList = null;

        /**
         * List of instances involved in the experiment
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TaskGroupSelectedInstanceList = null;

        /**
         * Machine selection rule
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskGroupInstancesExecuteRules> || null}
         */
        this.TaskGroupInstancesExecuteRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupId = 'TaskGroupId' in params ? params.TaskGroupId : null;
        this.TaskGroupTitle = 'TaskGroupTitle' in params ? params.TaskGroupTitle : null;
        this.TaskGroupDescription = 'TaskGroupDescription' in params ? params.TaskGroupDescription : null;
        this.TaskGroupOrder = 'TaskGroupOrder' in params ? params.TaskGroupOrder : null;
        this.ObjectTypeId = 'ObjectTypeId' in params ? params.ObjectTypeId : null;
        this.TaskGroupCreateTime = 'TaskGroupCreateTime' in params ? params.TaskGroupCreateTime : null;
        this.TaskGroupUpdateTime = 'TaskGroupUpdateTime' in params ? params.TaskGroupUpdateTime : null;

        if (params.TaskGroupActions) {
            this.TaskGroupActions = new Array();
            for (let z in params.TaskGroupActions) {
                let obj = new TaskGroupAction();
                obj.deserialize(params.TaskGroupActions[z]);
                this.TaskGroupActions.push(obj);
            }
        }
        this.TaskGroupInstanceList = 'TaskGroupInstanceList' in params ? params.TaskGroupInstanceList : null;
        this.TaskGroupMode = 'TaskGroupMode' in params ? params.TaskGroupMode : null;
        this.TaskGroupDiscardInstanceList = 'TaskGroupDiscardInstanceList' in params ? params.TaskGroupDiscardInstanceList : null;
        this.TaskGroupSelectedInstanceList = 'TaskGroupSelectedInstanceList' in params ? params.TaskGroupSelectedInstanceList : null;

        if (params.TaskGroupInstancesExecuteRule) {
            this.TaskGroupInstancesExecuteRule = new Array();
            for (let z in params.TaskGroupInstancesExecuteRule) {
                let obj = new TaskGroupInstancesExecuteRules();
                obj.deserialize(params.TaskGroupInstancesExecuteRule[z]);
                this.TaskGroupInstancesExecuteRule.push(obj);
            }
        }

    }
}

/**
 * ExecuteTask response structure.
 * @class
 */
class ExecuteTaskResponse extends  AbstractModel {
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
 * DescribeActionFieldConfigList response structure.
 * @class
 */
class DescribeActionFieldConfigListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of general filed configuration parameters
         * @type {Array.<ActionFieldConfigResult> || null}
         */
        this.Common = null;

        /**
         * List of action filed configuration parameters
         * @type {Array.<ActionFieldConfigResult> || null}
         */
        this.Results = null;

        /**
         * Information on the decommissioned resource
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ResourceOffline> || null}
         */
        this.ResourceOffline = null;

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

        if (params.Common) {
            this.Common = new Array();
            for (let z in params.Common) {
                let obj = new ActionFieldConfigResult();
                obj.deserialize(params.Common[z]);
                this.Common.push(obj);
            }
        }

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new ActionFieldConfigResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }

        if (params.ResourceOffline) {
            this.ResourceOffline = new Array();
            for (let z in params.ResourceOffline) {
                let obj = new ResourceOffline();
                obj.deserialize(params.ResourceOffline[z]);
                this.ResourceOffline.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Response format of dynamic action parameters
 * @class
 */
class ActionFieldConfigDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component type
The options are as follows:
input: text box
textarea: multi-line text box
number: number input box
select: selector
cascader: cascade selector
radio: single choice
time: time selection
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Component label
         * @type {string || null}
         */
        this.Lable = null;

        /**
         * Unique identifier of the component, key when it is sent back to the backend
         * @type {string || null}
         */
        this.Field = null;

        /**
         * Default value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * The supported configuration items are as follows. You can select the configuration items as needed. If no configuration is required, set the value to {}.

{  placeholder: string (placeholder)

  tooltip: string (prompt message)

  reg: RegExp (regular expression for the input content format)

  max: number (maximum number of input characters for text boxes and upper limit of the input number for number input boxes)

  min: number (lower limit of the input number for number input boxes)

  step: number (step size for number input boxes; default value: 1)

  format: string (format for time selection, for example YYYY-MM-DD and YYYY-MM-DD HH:mm:ss)

  separator: string[] (separator for multi-line input boxes. If it is left blank, no separator is used, and the text string entered by the user is returned directly.)

  multiple: boolean (multiple-choice or not, valid for selectors and cascade selectors)

  options: selector options (support the following two forms)

Directly provide the option array: { value: string; label: string }[]
Obtain options by calling the API: { api: string (API URL), params: string[] (interface parameters, corresponding to field of the parameter configuration. The frontend uses the input values of all components corresponding to field as parameters to query data. If no value is input, the frontend directly requests data when components are loaded.) 
}
}
         * @type {string || null}
         */
        this.Config = null;

        /**
         * Whether it is required (0: no; 1: yes)
         * @type {number || null}
         */
        this.Required = null;

        /**
         * The compute configuration passes the verification when other fields that it depends on meet the conditions. (For example, at least one of the three form items must be filled in.)

[fieldName,

{ config: This item is retained and will be refined based on subsequent scenes. }

]
         * @type {string || null}
         */
        this.Validate = null;

        /**
         * Whether it is visible
         * @type {string || null}
         */
        this.Visible = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Lable = 'Lable' in params ? params.Lable : null;
        this.Field = 'Field' in params ? params.Field : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.Required = 'Required' in params ? params.Required : null;
        this.Validate = 'Validate' in params ? params.Validate : null;
        this.Visible = 'Visible' in params ? params.Visible : null;

    }
}

/**
 * Task group action
 * @class
 */
class TemplateGroupAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template library group action ID
         * @type {number || null}
         */
        this.TemplateGroupActionId = null;

        /**
         * Action ID
         * @type {number || null}
         */
        this.ActionId = null;

        /**
         * Order of actions in the group
         * @type {number || null}
         */
        this.Order = null;

        /**
         * General configurations of actions in the group
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GeneralConfiguration = null;

        /**
         * Custom configurations of actions in the group
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomConfiguration = null;

        /**
         * Action group creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Action group update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Action name
         * @type {string || null}
         */
        this.ActionTitle = null;

        /**
         * Random ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RandomId = null;

        /**
         * Recovery action ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RecoverId = null;

        /**
         * Executed action ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ExecuteId = null;

        /**
         * Called API type. 0: tat; 1: cloud API.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ActionApiType = null;

        /**
         * 1: fault; 2: recovery.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ActionAttribute = null;

        /**
         * Action type: platform and custom
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Action risk level. 1: low-risk; 2: medium-risk; 3: high-risk.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionRisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateGroupActionId = 'TemplateGroupActionId' in params ? params.TemplateGroupActionId : null;
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.GeneralConfiguration = 'GeneralConfiguration' in params ? params.GeneralConfiguration : null;
        this.CustomConfiguration = 'CustomConfiguration' in params ? params.CustomConfiguration : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ActionTitle = 'ActionTitle' in params ? params.ActionTitle : null;
        this.RandomId = 'RandomId' in params ? params.RandomId : null;
        this.RecoverId = 'RecoverId' in params ? params.RecoverId : null;
        this.ExecuteId = 'ExecuteId' in params ? params.ExecuteId : null;
        this.ActionApiType = 'ActionApiType' in params ? params.ActionApiType : null;
        this.ActionAttribute = 'ActionAttribute' in params ? params.ActionAttribute : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ActionRisk = 'ActionRisk' in params ? params.ActionRisk : null;

    }
}

/**
 * Template library
 * @class
 */
class Template extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template library ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template library name
         * @type {string || null}
         */
        this.TemplateTitle = null;

        /**
         * Template library description
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * Custom tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TemplateTag = null;

        /**
         * Usage status. 1: in use; 2: not in use.
         * @type {number || null}
         */
        this.TemplateIsUsed = null;

        /**
         * Template library creation time
         * @type {string || null}
         */
        this.TemplateCreateTime = null;

        /**
         * Template library update time
         * @type {string || null}
         */
        this.TemplateUpdateTime = null;

        /**
         * Template library mode. 1: manual execution; 2: automatic execution.
         * @type {number || null}
         */
        this.TemplateMode = null;

        /**
         * Automatic pause duration. Unit: minutes.
         * @type {number || null}
         */
        this.TemplatePauseDuration = null;

        /**
         * Main account that creates the experiment
         * @type {string || null}
         */
        this.TemplateOwnerUin = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.TemplateRegionId = null;

        /**
         * Action group
         * @type {Array.<TemplateGroup> || null}
         */
        this.TemplateGroups = null;

        /**
         * Monitoring metrics
         * @type {Array.<TemplateMonitor> || null}
         */
        this.TemplateMonitors = null;

        /**
         * Guardrail monitoring
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TemplatePolicy || null}
         */
        this.TemplatePolicy = null;

        /**
         * Tag list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagWithDescribe> || null}
         */
        this.Tags = null;

        /**
         * Template library source. 0: self-built; 1: recommended by experts.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TemplateSource = null;

        /**
         * Application information on Application Performance Monitoring
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApmServiceInfo> || null}
         */
        this.ApmServiceList = null;

        /**
         * Alarm metrics
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AlarmPolicy = null;

        /**
         * Guardrail processing method. 1: roll back sequentially; 2: pause experiment.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PolicyDealType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateTitle = 'TemplateTitle' in params ? params.TemplateTitle : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;
        this.TemplateTag = 'TemplateTag' in params ? params.TemplateTag : null;
        this.TemplateIsUsed = 'TemplateIsUsed' in params ? params.TemplateIsUsed : null;
        this.TemplateCreateTime = 'TemplateCreateTime' in params ? params.TemplateCreateTime : null;
        this.TemplateUpdateTime = 'TemplateUpdateTime' in params ? params.TemplateUpdateTime : null;
        this.TemplateMode = 'TemplateMode' in params ? params.TemplateMode : null;
        this.TemplatePauseDuration = 'TemplatePauseDuration' in params ? params.TemplatePauseDuration : null;
        this.TemplateOwnerUin = 'TemplateOwnerUin' in params ? params.TemplateOwnerUin : null;
        this.TemplateRegionId = 'TemplateRegionId' in params ? params.TemplateRegionId : null;

        if (params.TemplateGroups) {
            this.TemplateGroups = new Array();
            for (let z in params.TemplateGroups) {
                let obj = new TemplateGroup();
                obj.deserialize(params.TemplateGroups[z]);
                this.TemplateGroups.push(obj);
            }
        }

        if (params.TemplateMonitors) {
            this.TemplateMonitors = new Array();
            for (let z in params.TemplateMonitors) {
                let obj = new TemplateMonitor();
                obj.deserialize(params.TemplateMonitors[z]);
                this.TemplateMonitors.push(obj);
            }
        }

        if (params.TemplatePolicy) {
            let obj = new TemplatePolicy();
            obj.deserialize(params.TemplatePolicy)
            this.TemplatePolicy = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDescribe();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TemplateSource = 'TemplateSource' in params ? params.TemplateSource : null;

        if (params.ApmServiceList) {
            this.ApmServiceList = new Array();
            for (let z in params.ApmServiceList) {
                let obj = new ApmServiceInfo();
                obj.deserialize(params.ApmServiceList[z]);
                this.ApmServiceList.push(obj);
            }
        }
        this.AlarmPolicy = 'AlarmPolicy' in params ? params.AlarmPolicy : null;
        this.PolicyDealType = 'PolicyDealType' in params ? params.PolicyDealType : null;

    }
}

/**
 * DescribeTaskExecuteLogs request structure.
 * @class
 */
class DescribeTaskExecuteLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Number of returned content lines
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Log start line
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeObjectTypeList response structure.
 * @class
 */
class DescribeObjectTypeListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Object type list
         * @type {Array.<ObjectType> || null}
         */
        this.ObjectTypeList = null;

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

        if (params.ObjectTypeList) {
            this.ObjectTypeList = new Array();
            for (let z in params.ObjectTypeList) {
                let obj = new ObjectType();
                obj.deserialize(params.ObjectTypeList[z]);
                this.ObjectTypeList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskRunStatus request structure.
 * @class
 */
class ModifyTaskRunStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Task status. 1001: not started; 1002: in progress (executing); 1003: in progress (paused); 1004: execution ended.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Whether the execution result meets expectations (This field is required when the task status is Execution Ended.)
         * @type {boolean || null}
         */
        this.IsExpect = null;

        /**
         * Experiment result (This field is required when the experiment status changes to Execution Ended.)
         * @type {string || null}
         */
        this.Summary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsExpect = 'IsExpect' in params ? params.IsExpect : null;
        this.Summary = 'Summary' in params ? params.Summary : null;

    }
}

/**
 * DescribeTemplate response structure.
 * @class
 */
class DescribeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template library details
         * @type {Template || null}
         */
        this.Template = null;

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

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Protection policy
 * @class
 */
class DescribePolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protection policy ID list
         * @type {Array.<string> || null}
         */
        this.TaskPolicyIdList = null;

        /**
         * Protection policy status
         * @type {string || null}
         */
        this.TaskPolicyStatus = null;

        /**
         * Policy rule
         * @type {string || null}
         */
        this.TaskPolicyRule = null;

        /**
         * Process method when the guardrail policy takes effect. 1: sequential execution, 2: pausing.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskPolicyDealType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskPolicyIdList = 'TaskPolicyIdList' in params ? params.TaskPolicyIdList : null;
        this.TaskPolicyStatus = 'TaskPolicyStatus' in params ? params.TaskPolicyStatus : null;
        this.TaskPolicyRule = 'TaskPolicyRule' in params ? params.TaskPolicyRule : null;
        this.TaskPolicyDealType = 'TaskPolicyDealType' in params ? params.TaskPolicyDealType : null;

    }
}

/**
 * Action library filtering field
 * @class
 */
class ActionFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Content for search
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
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Guardrail policy triggering log
 * @class
 */
class PolicyTriggerLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Experiment ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Name

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Type. 0: trigger; 1: recovery.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TriggerType = null;

        /**
         * Content
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Triggering time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreatTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.CreatTime = 'CreatTime' in params ? params.CreatTime : null;

    }
}

/**
 * DescribeTemplate request structure.
 * @class
 */
class DescribeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template library ID
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * ExecuteTaskInstance request structure.
 * @class
 */
class ExecuteTaskInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Task action ID
         * @type {number || null}
         */
        this.TaskActionId = null;

        /**
         * Task action instance ID
         * @type {Array.<number> || null}
         */
        this.TaskInstanceIds = null;

        /**
         * Whether to operate on the entire task
         * @type {boolean || null}
         */
        this.IsOperateAll = null;

        /**
         * Operation type (1: start; 2: execute; 3: skip; 5: retry)
         * @type {number || null}
         */
        this.ActionType = null;

        /**
         * Action group ID
         * @type {number || null}
         */
        this.TaskGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskActionId = 'TaskActionId' in params ? params.TaskActionId : null;
        this.TaskInstanceIds = 'TaskInstanceIds' in params ? params.TaskInstanceIds : null;
        this.IsOperateAll = 'IsOperateAll' in params ? params.IsOperateAll : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.TaskGroupId = 'TaskGroupId' in params ? params.TaskGroupId : null;

    }
}

/**
 * Task group action instance
 * @class
 */
class TaskGroupInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {number || null}
         */
        this.TaskGroupInstanceId = null;

        /**
         * Instance ID

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskGroupInstanceObjectId = null;

        /**
         * Instance action execution status

         * @type {number || null}
         */
        this.TaskGroupInstanceStatus = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.TaskGroupInstanceCreateTime = null;

        /**
         * Instance update time
         * @type {string || null}
         */
        this.TaskGroupInstanceUpdateTime = null;

        /**
         * Status. 0: no status; 1: successful; 2: failed; 3: terminated; 4: skipped.
         * @type {number || null}
         */
        this.TaskGroupInstanceStatusType = null;

        /**
         * Execution start time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskGroupInstanceStartTime = null;

        /**
         * Execution end time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskGroupInstanceEndTime = null;

        /**
         * Instance action execution log
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskGroupInstanceExecuteLog = null;

        /**
         * Whether the instance can be retried
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.TaskGroupInstanceIsRedo = null;

        /**
         * Action instance execution time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskGroupInstanceExecuteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupInstanceId = 'TaskGroupInstanceId' in params ? params.TaskGroupInstanceId : null;
        this.TaskGroupInstanceObjectId = 'TaskGroupInstanceObjectId' in params ? params.TaskGroupInstanceObjectId : null;
        this.TaskGroupInstanceStatus = 'TaskGroupInstanceStatus' in params ? params.TaskGroupInstanceStatus : null;
        this.TaskGroupInstanceCreateTime = 'TaskGroupInstanceCreateTime' in params ? params.TaskGroupInstanceCreateTime : null;
        this.TaskGroupInstanceUpdateTime = 'TaskGroupInstanceUpdateTime' in params ? params.TaskGroupInstanceUpdateTime : null;
        this.TaskGroupInstanceStatusType = 'TaskGroupInstanceStatusType' in params ? params.TaskGroupInstanceStatusType : null;
        this.TaskGroupInstanceStartTime = 'TaskGroupInstanceStartTime' in params ? params.TaskGroupInstanceStartTime : null;
        this.TaskGroupInstanceEndTime = 'TaskGroupInstanceEndTime' in params ? params.TaskGroupInstanceEndTime : null;
        this.TaskGroupInstanceExecuteLog = 'TaskGroupInstanceExecuteLog' in params ? params.TaskGroupInstanceExecuteLog : null;
        this.TaskGroupInstanceIsRedo = 'TaskGroupInstanceIsRedo' in params ? params.TaskGroupInstanceIsRedo : null;
        this.TaskGroupInstanceExecuteTime = 'TaskGroupInstanceExecuteTime' in params ? params.TaskGroupInstanceExecuteTime : null;

    }
}

/**
 * ExecuteTask request structure.
 * @class
 */
class ExecuteTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the task to be executed
         * @type {number || null}
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
 * DescribeTaskList response structure.
 * @class
 */
class DescribeTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * None
         * @type {Array.<TaskListItem> || null}
         */
        this.TaskList = null;

        /**
         * Number of tables in the list
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.TaskList) {
            this.TaskList = new Array();
            for (let z in params.TaskList) {
                let obj = new TaskListItem();
                obj.deserialize(params.TaskList[z]);
                this.TaskList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Decommissioned resource
 * @class
 */
class ResourceOffline extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ResourceId = null;

        /**
         * Resource decommissioning time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceDeleteTime = null;

        /**
         * Resource decommissioning reminder
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceDeleteMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceDeleteTime = 'ResourceDeleteTime' in params ? params.ResourceDeleteTime : null;
        this.ResourceDeleteMessage = 'ResourceDeleteMessage' in params ? params.ResourceDeleteMessage : null;

    }
}

/**
 * DescribeTemplateList response structure.
 * @class
 */
class DescribeTemplateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template library list
         * @type {Array.<TemplateListItem> || null}
         */
        this.TemplateList = null;

        /**
         * Number of template libraries in the list
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.TemplateList) {
            this.TemplateList = new Array();
            for (let z in params.TemplateList) {
                let obj = new TemplateListItem();
                obj.deserialize(params.TemplateList[z]);
                this.TemplateList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Monitoring metrics
 * @class
 */
class TaskMonitor extends  AbstractModel {
    constructor(){
        super();

        /**
         * Experiment monitoring metric ID
         * @type {number || null}
         */
        this.TaskMonitorId = null;

        /**
         * Monitoring metric ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * Object type ID of the monitoring metric
         * @type {number || null}
         */
        this.TaskMonitorObjectTypeId = null;

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Instance ID list
         * @type {Array.<string> || null}
         */
        this.InstancesIds = null;

        /**
         * Metric in Chinese
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MetricChineseName = null;

        /**
         * Unit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Unit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskMonitorId = 'TaskMonitorId' in params ? params.TaskMonitorId : null;
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.TaskMonitorObjectTypeId = 'TaskMonitorObjectTypeId' in params ? params.TaskMonitorObjectTypeId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.InstancesIds = 'InstancesIds' in params ? params.InstancesIds : null;
        this.MetricChineseName = 'MetricChineseName' in params ? params.MetricChineseName : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * DescribeTemplateList request structure.
 * @class
 */
class DescribeTemplateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination limit.Maximum value:100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Experiment name
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Tag key
         * @type {Array.<string> || null}
         */
        this.Tag = null;

        /**
         * Status. 1: in use; 2: not in use.
         * @type {number || null}
         */
        this.IsUsed = null;

        /**
         * Tag pair
         * @type {Array.<TagWithDescribe> || null}
         */
        this.Tags = null;

        /**
         * Template library source. 0: self-built; 1: recommended by experts.
         * @type {number || null}
         */
        this.TemplateSource = null;

        /**
         * Template ID
         * @type {Array.<number> || null}
         */
        this.TemplateIdList = null;

        /**
         * Filter parameters
         * @type {Array.<ActionFilter> || null}
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
        this.Title = 'Title' in params ? params.Title : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.IsUsed = 'IsUsed' in params ? params.IsUsed : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDescribe();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TemplateSource = 'TemplateSource' in params ? params.TemplateSource : null;
        this.TemplateIdList = 'TemplateIdList' in params ? params.TemplateIdList : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ActionFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * List of displayed tags
 * @class
 */
class TagWithDescribe extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
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
 * DescribeObjectTypeList request structure.
 * @class
 */
class DescribeObjectTypeListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported object
0: all platform products
1: objects connected to the platform
2: some objects supported by the application
         * @type {number || null}
         */
        this.SupportType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SupportType = 'SupportType' in params ? params.SupportType : null;

    }
}

/**
 * DescribeTaskPolicyTriggerLog response structure.
 * @class
 */
class DescribeTaskPolicyTriggerLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Triggering log
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PolicyTriggerLog> || null}
         */
        this.TriggerLogs = null;

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

        if (params.TriggerLogs) {
            this.TriggerLogs = new Array();
            for (let z in params.TriggerLogs) {
                let obj = new PolicyTriggerLog();
                obj.deserialize(params.TriggerLogs[z]);
                this.TriggerLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTaskFromTemplate response structure.
 * @class
 */
class CreateTaskFromTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the successfully created experiment
         * @type {number || null}
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
 * DeleteTask response structure.
 * @class
 */
class DeleteTaskResponse extends  AbstractModel {
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
 * Object type
 * @class
 */
class ObjectType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Object type ID
         * @type {number || null}
         */
        this.ObjectTypeId = null;

        /**
         * Object type name
         * @type {string || null}
         */
        this.ObjectTypeTitle = null;

        /**
         * Level-1 object type
         * @type {string || null}
         */
        this.ObjectTypeLevelOne = null;

        /**
         * Object type parameters
         * @type {ObjectTypeConfig || null}
         */
        this.ObjectTypeParams = null;

        /**
         * JSON parsing rule for TKE APIs. If the value is null, no parsing is needed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ObjectTypeJsonParse || null}
         */
        this.ObjectTypeJsonParse = null;

        /**
         * Whether new action is included
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.ObjectHasNewAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ObjectTypeId = 'ObjectTypeId' in params ? params.ObjectTypeId : null;
        this.ObjectTypeTitle = 'ObjectTypeTitle' in params ? params.ObjectTypeTitle : null;
        this.ObjectTypeLevelOne = 'ObjectTypeLevelOne' in params ? params.ObjectTypeLevelOne : null;

        if (params.ObjectTypeParams) {
            let obj = new ObjectTypeConfig();
            obj.deserialize(params.ObjectTypeParams)
            this.ObjectTypeParams = obj;
        }

        if (params.ObjectTypeJsonParse) {
            let obj = new ObjectTypeJsonParse();
            obj.deserialize(params.ObjectTypeJsonParse)
            this.ObjectTypeJsonParse = obj;
        }
        this.ObjectHasNewAction = 'ObjectHasNewAction' in params ? params.ObjectHasNewAction : null;

    }
}

/**
 * DescribeTaskPolicyTriggerLog request structure.
 * @class
 */
class DescribeTaskPolicyTriggerLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Experiment ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.Page = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * Task
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskTitle = null;

        /**
         * Task description
         * @type {string || null}
         */
        this.TaskDescription = null;

        /**
         * Custom tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskTag = null;

        /**
         * Task status. 1001: not started; 1002: in progress (executing); 1003: in progress (paused); 1004: execution ended.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Task end status, indicating the status of the task when it ends. 0: not ended; 1: successful; 2: failed; 3: terminated.
         * @type {number || null}
         */
        this.TaskStatusType = null;

        /**
         * Protection policy
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskProtectStrategy = null;

        /**
         * Task creation time
         * @type {string || null}
         */
        this.TaskCreateTime = null;

        /**
         * Task update time
         * @type {string || null}
         */
        this.TaskUpdateTime = null;

        /**
         * Task action group
         * @type {Array.<TaskGroup> || null}
         */
        this.TaskGroups = null;

        /**
         * Start time

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskStartTime = null;

        /**
         * End time

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskEndTime = null;

        /**
         * Whether expectations are met. 1: expectations met; 2: expectations not met.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskExpect = null;

        /**
         * Experiment record
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskSummary = null;

        /**
         * Task mode. 1: manual execution; 2: automatic execution.
         * @type {number || null}
         */
        this.TaskMode = null;

        /**
         * Automatic pause duration. Unit: minutes.
         * @type {number || null}
         */
        this.TaskPauseDuration = null;

        /**
         * Main account that creates the experiment
         * @type {string || null}
         */
        this.TaskOwnerUin = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.TaskRegionId = null;

        /**
         * Monitoring metric list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TaskMonitor> || null}
         */
        this.TaskMonitors = null;

        /**
         * Protection policy
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DescribePolicy || null}
         */
        this.TaskPolicy = null;

        /**
         * Tag list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagWithDescribe> || null}
         */
        this.Tags = null;

        /**
         * ID of the associated experiment plan
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskPlanId = null;

        /**
         * Name of the associated experiment plan
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskPlanTitle = null;

        /**
         * ID of the associated application
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Name of the associated application
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Associated alarm metrics
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AlarmPolicy = null;

        /**
         * Associated APM services
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApmServiceInfo> || null}
         */
        this.ApmServiceList = null;

        /**
         * ID of the associated threat verification item
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VerifyId = null;

        /**
         * Guardrail processing method. 1: roll back sequentially; 2: pause experiment.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PolicyDealType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskTitle = 'TaskTitle' in params ? params.TaskTitle : null;
        this.TaskDescription = 'TaskDescription' in params ? params.TaskDescription : null;
        this.TaskTag = 'TaskTag' in params ? params.TaskTag : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskStatusType = 'TaskStatusType' in params ? params.TaskStatusType : null;
        this.TaskProtectStrategy = 'TaskProtectStrategy' in params ? params.TaskProtectStrategy : null;
        this.TaskCreateTime = 'TaskCreateTime' in params ? params.TaskCreateTime : null;
        this.TaskUpdateTime = 'TaskUpdateTime' in params ? params.TaskUpdateTime : null;

        if (params.TaskGroups) {
            this.TaskGroups = new Array();
            for (let z in params.TaskGroups) {
                let obj = new TaskGroup();
                obj.deserialize(params.TaskGroups[z]);
                this.TaskGroups.push(obj);
            }
        }
        this.TaskStartTime = 'TaskStartTime' in params ? params.TaskStartTime : null;
        this.TaskEndTime = 'TaskEndTime' in params ? params.TaskEndTime : null;
        this.TaskExpect = 'TaskExpect' in params ? params.TaskExpect : null;
        this.TaskSummary = 'TaskSummary' in params ? params.TaskSummary : null;
        this.TaskMode = 'TaskMode' in params ? params.TaskMode : null;
        this.TaskPauseDuration = 'TaskPauseDuration' in params ? params.TaskPauseDuration : null;
        this.TaskOwnerUin = 'TaskOwnerUin' in params ? params.TaskOwnerUin : null;
        this.TaskRegionId = 'TaskRegionId' in params ? params.TaskRegionId : null;

        if (params.TaskMonitors) {
            this.TaskMonitors = new Array();
            for (let z in params.TaskMonitors) {
                let obj = new TaskMonitor();
                obj.deserialize(params.TaskMonitors[z]);
                this.TaskMonitors.push(obj);
            }
        }

        if (params.TaskPolicy) {
            let obj = new DescribePolicy();
            obj.deserialize(params.TaskPolicy)
            this.TaskPolicy = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDescribe();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TaskPlanId = 'TaskPlanId' in params ? params.TaskPlanId : null;
        this.TaskPlanTitle = 'TaskPlanTitle' in params ? params.TaskPlanTitle : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.AlarmPolicy = 'AlarmPolicy' in params ? params.AlarmPolicy : null;

        if (params.ApmServiceList) {
            this.ApmServiceList = new Array();
            for (let z in params.ApmServiceList) {
                let obj = new ApmServiceInfo();
                obj.deserialize(params.ApmServiceList[z]);
                this.ApmServiceList.push(obj);
            }
        }
        this.VerifyId = 'VerifyId' in params ? params.VerifyId : null;
        this.PolicyDealType = 'PolicyDealType' in params ? params.PolicyDealType : null;

    }
}

/**
 * Experiment report status information
 * @class
 */
class TaskReportInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: not started; 1: exporting; 2: export successful; 3: export failed.
         * @type {number || null}
         */
        this.Stage = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * End time of the validity period
         * @type {string || null}
         */
        this.ExpirationTime = null;

        /**
         * Whether it is effective
         * @type {boolean || null}
         */
        this.Expired = null;

        /**
         * Address of the COS experiment report file
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CosUrl = null;

        /**
         * Experiment report export log
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Log = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Stage = 'Stage' in params ? params.Stage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpirationTime = 'ExpirationTime' in params ? params.ExpirationTime : null;
        this.Expired = 'Expired' in params ? params.Expired : null;
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;
        this.Log = 'Log' in params ? params.Log : null;

    }
}

/**
 * CreateTaskFromTemplate request structure.
 * @class
 */
class CreateTaskFromTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template ID retrieved from the template library
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Experiment configuration parameters
         * @type {TaskConfig || null}
         */
        this.TaskConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.TaskConfig) {
            let obj = new TaskConfig();
            obj.deserialize(params.TaskConfig)
            this.TaskConfig = obj;
        }

    }
}

/**
 * TriggerPolicy request structure.
 * @class
 */
class TriggerPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Chaos engineering experiment ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Triggering content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Triggering type. 0: trigger; 1: recovery.
         * @type {number || null}
         */
        this.TriggerType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;

    }
}

/**
 * Task parameters that need to be configured when an experiment is created by using a template
 * @class
 */
class TaskConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action group configurations. The number of configured action groups needs to be consistent with that in the template.
         * @type {Array.<TaskGroupConfig> || null}
         */
        this.TaskGroupsConfig = null;

        /**
         * Experiment name after change. If this parameter is left blank, the template name is used by default.
         * @type {string || null}
         */
        this.TaskTitle = null;

        /**
         * Experiment description after change. If this parameter is left blank, the template description is used by default.
         * @type {string || null}
         */
        this.TaskDescription = null;

        /**
         * Experiment execution mode. 1: manual execution; 2: automatic execution. If this parameter is left blank, the template execution mode is used by default.
         * @type {number || null}
         */
        this.TaskMode = null;

        /**
         * Automatic pause time of the experiment, in minutes. If this parameter is left blank, the automatic pause time of the template is used by default.
         * @type {number || null}
         */
        this.TaskPauseDuration = null;

        /**
         * Experiment tag. If this parameter is left blank, the template tag is used by default.
         * @type {Array.<TagWithCreate> || null}
         */
        this.Tags = null;

        /**
         * Guardrail processing method. 1: roll back sequentially; 2: pause experiment.
         * @type {number || null}
         */
        this.PolicyDealType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskGroupsConfig) {
            this.TaskGroupsConfig = new Array();
            for (let z in params.TaskGroupsConfig) {
                let obj = new TaskGroupConfig();
                obj.deserialize(params.TaskGroupsConfig[z]);
                this.TaskGroupsConfig.push(obj);
            }
        }
        this.TaskTitle = 'TaskTitle' in params ? params.TaskTitle : null;
        this.TaskDescription = 'TaskDescription' in params ? params.TaskDescription : null;
        this.TaskMode = 'TaskMode' in params ? params.TaskMode : null;
        this.TaskPauseDuration = 'TaskPauseDuration' in params ? params.TaskPauseDuration : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithCreate();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.PolicyDealType = 'PolicyDealType' in params ? params.PolicyDealType : null;

    }
}

/**
 * TriggerPolicy response structure.
 * @class
 */
class TriggerPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Experiment ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Whether triggering is successful
         * @type {boolean || null}
         */
        this.Success = null;

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
        this.Success = 'Success' in params ? params.Success : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskList request structure.
 * @class
 */
class DescribeTaskListRequest extends  AbstractModel {
    constructor(){
        super();

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
         * Experiment name
         * @type {string || null}
         */
        this.TaskTitle = null;

        /**
         * Tag key
         * @type {Array.<string> || null}
         */
        this.TaskTag = null;

        /**
         * Task status (1001: not started; 1002: in progress; 1003: paused; 1004: ended)
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Start time, in fixed format: %Y-%m-%d %H:%M:%S
         * @type {string || null}
         */
        this.TaskStartTime = null;

        /**
         * End time, in fixed format: %Y-%m-%d %H:%M:%S
         * @type {string || null}
         */
        this.TaskEndTime = null;

        /**
         * Update time, in fixed format: %Y-%m-%d %H:%M:%S
         * @type {string || null}
         */
        this.TaskUpdateTime = null;

        /**
         * Tag pair
         * @type {Array.<TagWithDescribe> || null}
         */
        this.Tags = null;

        /**
         * Filtering criteria
         * @type {Array.<ActionFilter> || null}
         */
        this.Filters = null;

        /**
         * Experiment ID
         * @type {Array.<number> || null}
         */
        this.TaskId = null;

        /**
         * ID of the associated application for filtering
         * @type {Array.<string> || null}
         */
        this.ApplicationId = null;

        /**
         * Associated application for filtering
         * @type {Array.<string> || null}
         */
        this.ApplicationName = null;

        /**
         * Task status for filtering, supporting multiple states (1001: not started; 1002: in progress; 1003: paused; 1004: ended)
         * @type {Array.<number> || null}
         */
        this.TaskStatusList = null;

        /**
         * 
         * @type {string || null}
         */
        this.ArchId = null;

        /**
         * 
         * @type {string || null}
         */
        this.ArchName = null;

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
        this.TaskTitle = 'TaskTitle' in params ? params.TaskTitle : null;
        this.TaskTag = 'TaskTag' in params ? params.TaskTag : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskStartTime = 'TaskStartTime' in params ? params.TaskStartTime : null;
        this.TaskEndTime = 'TaskEndTime' in params ? params.TaskEndTime : null;
        this.TaskUpdateTime = 'TaskUpdateTime' in params ? params.TaskUpdateTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDescribe();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ActionFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.TaskStatusList = 'TaskStatusList' in params ? params.TaskStatusList : null;
        this.ArchId = 'ArchId' in params ? params.ArchId : null;
        this.ArchName = 'ArchName' in params ? params.ArchName : null;

    }
}

/**
 * DescribeActionLibraryList response structure.
 * @class
 */
class DescribeActionLibraryListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query result list
         * @type {Array.<ActionLibraryListResult> || null}
         */
        this.Results = null;

        /**
         * Number of matching records
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new ActionLibraryListResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Value returned for container Pod resources
 * @class
 */
class ObjectTypeJsonParse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Namespace

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NameSpace = null;

        /**
         * Workload name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WorkloadName = null;

        /**
         * Node IP address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LanIP = null;

        /**
         * Node ID
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.NameSpace = 'NameSpace' in params ? params.NameSpace : null;
        this.WorkloadName = 'WorkloadName' in params ? params.WorkloadName : null;
        this.LanIP = 'LanIP' in params ? params.LanIP : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Task list information
 * @class
 */
class TaskListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskTitle = null;

        /**
         * Task description
         * @type {string || null}
         */
        this.TaskDescription = null;

        /**
         * Task tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskTag = null;

        /**
         * Task status (1001: not started; 1002: in progress; 1003: paused; 1004: ended)
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * Task creation time
         * @type {string || null}
         */
        this.TaskCreateTime = null;

        /**
         * Task update time
         * @type {string || null}
         */
        this.TaskUpdateTime = null;

        /**
         * 0: not started; 1: in progress; 2: completed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskPreCheckStatus = null;

        /**
         * Whether the environmental check is passed
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.TaskPreCheckSuccess = null;

        /**
         * Whether the experiment result meets expectations. 1: expectations met; 2: expectations not met.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskExpect = null;

        /**
         * ID of the associated application
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * Name of the associated application
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * Verification item ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VerifyId = null;

        /**
         * Status. 0: no status; 1: successful; 2: failed; 3: terminated.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskStatusType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskTitle = 'TaskTitle' in params ? params.TaskTitle : null;
        this.TaskDescription = 'TaskDescription' in params ? params.TaskDescription : null;
        this.TaskTag = 'TaskTag' in params ? params.TaskTag : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskCreateTime = 'TaskCreateTime' in params ? params.TaskCreateTime : null;
        this.TaskUpdateTime = 'TaskUpdateTime' in params ? params.TaskUpdateTime : null;
        this.TaskPreCheckStatus = 'TaskPreCheckStatus' in params ? params.TaskPreCheckStatus : null;
        this.TaskPreCheckSuccess = 'TaskPreCheckSuccess' in params ? params.TaskPreCheckSuccess : null;
        this.TaskExpect = 'TaskExpect' in params ? params.TaskExpect : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.VerifyId = 'VerifyId' in params ? params.VerifyId : null;
        this.TaskStatusType = 'TaskStatusType' in params ? params.TaskStatusType : null;

    }
}

/**
 * ExecuteTaskInstance response structure.
 * @class
 */
class ExecuteTaskInstanceResponse extends  AbstractModel {
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
 * DescribeTaskExecuteLogs response structure.
 * @class
 */
class DescribeTaskExecuteLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log data
         * @type {Array.<string> || null}
         */
        this.LogMessage = null;

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
        this.LogMessage = 'LogMessage' in params ? params.LogMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Action group configuration item
 * @class
 */
class TaskGroupConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance object associated with the action group
         * @type {Array.<string> || null}
         */
        this.TaskGroupInstances = null;

        /**
         * Action group name. If this parameter is left blank, the action group name in the template is used by default.
         * @type {string || null}
         */
        this.TaskGroupTitle = null;

        /**
         * Action group description. If this parameter is left blank, the action group description in the template is used by default.
         * @type {string || null}
         */
        this.TaskGroupDescription = null;

        /**
         * Action group execution mode. 1: sequential execution; 2: execution by stage. If this parameter is left blank, the action execution mode in the template is used by default.
         * @type {number || null}
         */
        this.TaskGroupMode = null;

        /**
         * Action parameters in the action group. If this field is left blank, the action parameters in the template is used by default. You only need to specify the action whose parameters are to be modified during configuration.
         * @type {Array.<TaskGroupActionConfig> || null}
         */
        this.TaskGroupActionsConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupInstances = 'TaskGroupInstances' in params ? params.TaskGroupInstances : null;
        this.TaskGroupTitle = 'TaskGroupTitle' in params ? params.TaskGroupTitle : null;
        this.TaskGroupDescription = 'TaskGroupDescription' in params ? params.TaskGroupDescription : null;
        this.TaskGroupMode = 'TaskGroupMode' in params ? params.TaskGroupMode : null;

        if (params.TaskGroupActionsConfig) {
            this.TaskGroupActionsConfig = new Array();
            for (let z in params.TaskGroupActionsConfig) {
                let obj = new TaskGroupActionConfig();
                obj.deserialize(params.TaskGroupActionsConfig[z]);
                this.TaskGroupActionsConfig.push(obj);
            }
        }

    }
}

/**
 * Monitoring metrics
 * @class
 */
class TemplateMonitor extends  AbstractModel {
    constructor(){
        super();

        /**
         * pk
         * @type {number || null}
         */
        this.MonitorId = null;

        /**
         * Monitoring metric ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * Object type ID of the monitoring metric
         * @type {number || null}
         */
        this.ObjectTypeId = null;

        /**
         * Metric name
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Metric in Chinese
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MetricChineseName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.ObjectTypeId = 'ObjectTypeId' in params ? params.ObjectTypeId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.MetricChineseName = 'MetricChineseName' in params ? params.MetricChineseName : null;

    }
}

/**
 * Task group
 * @class
 */
class TemplateGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template library action ID
         * @type {number || null}
         */
        this.TemplateGroupId = null;

        /**
         * List of actions in the template library action group
         * @type {Array.<TemplateGroupAction> || null}
         */
        this.TemplateGroupActions = null;

        /**
         * Group name
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Group description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Group order
         * @type {number || null}
         */
        this.Order = null;

        /**
         * Execution mode. 1: sequential execution; 2: execution by stage.
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * Object type ID
         * @type {number || null}
         */
        this.ObjectTypeId = null;

        /**
         * Group creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Group update time
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
        this.TemplateGroupId = 'TemplateGroupId' in params ? params.TemplateGroupId : null;

        if (params.TemplateGroupActions) {
            this.TemplateGroupActions = new Array();
            for (let z in params.TemplateGroupActions) {
                let obj = new TemplateGroupAction();
                obj.deserialize(params.TemplateGroupActions[z]);
                this.TemplateGroupActions.push(obj);
            }
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.ObjectTypeId = 'ObjectTypeId' in params ? params.ObjectTypeId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Protection policy
 * @class
 */
class TemplatePolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protection policy ID list
         * @type {Array.<string> || null}
         */
        this.TemplatePolicyIdList = null;

        /**
         * Policy rules
         * @type {string || null}
         */
        this.TemplatePolicyRule = null;

        /**
         * Process method when the guardrail policy takes effect. 1: sequential execution, 2: pausing.
         * @type {number || null}
         */
        this.TemplatePolicyDealType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplatePolicyIdList = 'TemplatePolicyIdList' in params ? params.TemplatePolicyIdList : null;
        this.TemplatePolicyRule = 'TemplatePolicyRule' in params ? params.TemplatePolicyRule : null;
        this.TemplatePolicyDealType = 'TemplatePolicyDealType' in params ? params.TemplatePolicyDealType : null;

    }
}

/**
 * Action field configuration result
 * @class
 */
class ActionFieldConfigResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action ID
         * @type {number || null}
         */
        this.ActionId = null;

        /**
         * Action name
         * @type {string || null}
         */
        this.ActionName = null;

        /**
         * Filed configuration details corresponding to the action
         * @type {Array.<ActionFieldConfigDetail> || null}
         */
        this.ConfigDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.ActionName = 'ActionName' in params ? params.ActionName : null;

        if (params.ConfigDetail) {
            this.ConfigDetail = new Array();
            for (let z in params.ConfigDetail) {
                let obj = new ActionFieldConfigDetail();
                obj.deserialize(params.ConfigDetail[z]);
                this.ConfigDetail.push(obj);
            }
        }

    }
}

/**
 * Action parameters in the action group
 * @class
 */
class TaskGroupActionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order of this action in the action group. The entire order starts from 1. If this parameter is left blank or set to an invalid value, the action whose parameters need to be modified in the template cannot be matched.
         * @type {number || null}
         */
        this.TaskGroupActionOrder = null;

        /**
         * General action parameters, which need to be passed in after JSON serialization. The parameters can be obtained by using the template details query API. If this field is left blank, action parameters in the template are used by default.
         * @type {string || null}
         */
        this.TaskGroupActionGeneralConfiguration = null;

        /**
         * Custom action parameters, which need to be passed in after JSON serialization. The parameters can be obtained by using the template details query API. If this field is left blank, action parameters in the template are used by default.
         * @type {string || null}
         */
        this.TaskGroupActionCustomConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupActionOrder = 'TaskGroupActionOrder' in params ? params.TaskGroupActionOrder : null;
        this.TaskGroupActionGeneralConfiguration = 'TaskGroupActionGeneralConfiguration' in params ? params.TaskGroupActionGeneralConfiguration : null;
        this.TaskGroupActionCustomConfiguration = 'TaskGroupActionCustomConfiguration' in params ? params.TaskGroupActionCustomConfiguration : null;

    }
}

/**
 * Action library data list
 * @class
 */
class ActionLibraryListResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action name
         * @type {string || null}
         */
        this.ActionName = null;

        /**
         * Action description
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Action type: ["platform" and "custom"]
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Creator
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Action risk description
         * @type {string || null}
         */
        this.RiskDesc = null;

        /**
         * Action ID
         * @type {number || null}
         */
        this.ActionId = null;

        /**
         * Action attribute (1: fault; 2: recovery)
         * @type {number || null}
         */
        this.AttributeId = null;

        /**
         * ID of the associated action
         * @type {number || null}
         */
        this.RelationActionId = null;

        /**
         * Operation command
         * @type {string || null}
         */
        this.ActionCommand = null;

        /**
         * Action type (0: tat; 1: cloud API)
         * @type {number || null}
         */
        this.ActionCommandType = null;

        /**
         * Parameters of the custom action, in JSON string format
         * @type {string || null}
         */
        this.ActionContent = null;

        /**
         * Level-2 type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Action description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionDetail = null;

        /**
         * Whether to allow usage by the current account
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsAllowed = null;

        /**
         * Link to best practices
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionBestCase = null;

        /**
         * Object type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ObjectType = null;

        /**
         * Monitoring metric ID list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.MetricIdList = null;

        /**
         * Whether the action is new
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsNewAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionName = 'ActionName' in params ? params.ActionName : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RiskDesc = 'RiskDesc' in params ? params.RiskDesc : null;
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.AttributeId = 'AttributeId' in params ? params.AttributeId : null;
        this.RelationActionId = 'RelationActionId' in params ? params.RelationActionId : null;
        this.ActionCommand = 'ActionCommand' in params ? params.ActionCommand : null;
        this.ActionCommandType = 'ActionCommandType' in params ? params.ActionCommandType : null;
        this.ActionContent = 'ActionContent' in params ? params.ActionContent : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ActionDetail = 'ActionDetail' in params ? params.ActionDetail : null;
        this.IsAllowed = 'IsAllowed' in params ? params.IsAllowed : null;
        this.ActionBestCase = 'ActionBestCase' in params ? params.ActionBestCase : null;
        this.ObjectType = 'ObjectType' in params ? params.ObjectType : null;
        this.MetricIdList = 'MetricIdList' in params ? params.MetricIdList : null;
        this.IsNewAction = 'IsNewAction' in params ? params.IsNewAction : null;

    }
}

/**
 * ModifyTaskRunStatus response structure.
 * @class
 */
class ModifyTaskRunStatusResponse extends  AbstractModel {
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
 * DescribeTask response structure.
 * @class
 */
class DescribeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task information
         * @type {Task || null}
         */
        this.Task = null;

        /**
         * Experiment report information corresponding to the task. The value null indicates that no report is exported.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskReportInfo || null}
         */
        this.ReportInfo = null;

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

        if (params.Task) {
            let obj = new Task();
            obj.deserialize(params.Task)
            this.Task = obj;
        }

        if (params.ReportInfo) {
            let obj = new TaskReportInfo();
            obj.deserialize(params.ReportInfo)
            this.ReportInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTaskFromAction response structure.
 * @class
 */
class CreateTaskFromActionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the successfully created experiment
         * @type {number || null}
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
 * Template library list information
 * @class
 */
class TemplateListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template library ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * Template library name
         * @type {string || null}
         */
        this.TemplateTitle = null;

        /**
         * Template library description
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * Template library tag
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TemplateTag = null;

        /**
         * Template library status. 1: in use; 2: not in use.
         * @type {number || null}
         */
        this.TemplateIsUsed = null;

        /**
         * Template library creation time
         * @type {string || null}
         */
        this.TemplateCreateTime = null;

        /**
         * Template library update time
         * @type {string || null}
         */
        this.TemplateUpdateTime = null;

        /**
         * Number of tasks associated with the template library
         * @type {number || null}
         */
        this.TemplateUsedNum = null;

        /**
         * Template library source. 0: self-built; 1: recommended by experts.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TemplateSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateTitle = 'TemplateTitle' in params ? params.TemplateTitle : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;
        this.TemplateTag = 'TemplateTag' in params ? params.TemplateTag : null;
        this.TemplateIsUsed = 'TemplateIsUsed' in params ? params.TemplateIsUsed : null;
        this.TemplateCreateTime = 'TemplateCreateTime' in params ? params.TemplateCreateTime : null;
        this.TemplateUpdateTime = 'TemplateUpdateTime' in params ? params.TemplateUpdateTime : null;
        this.TemplateUsedNum = 'TemplateUsedNum' in params ? params.TemplateUsedNum : null;
        this.TemplateSource = 'TemplateSource' in params ? params.TemplateSource : null;

    }
}

/**
 * Tag information, which is used during experiment resource creation and editing.
 * @class
 */
class TagWithCreate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
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
 * Field information on the experiment resource object
 * @class
 */
class ObjectTypeConfigFields extends  AbstractModel {
    constructor(){
        super();

        /**
         * instanceId
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.Header = null;

        /**
         * Whether the field value needs to be translated. If not, this field returns null.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Transfer = null;

        /**
         * Value returned for container Pod resources
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JsonParse = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Header = 'Header' in params ? params.Header : null;
        this.Transfer = 'Transfer' in params ? params.Transfer : null;
        this.JsonParse = 'JsonParse' in params ? params.JsonParse : null;

    }
}

/**
 * Object type configuration
 * @class
 */
class ObjectTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * List of object type configuration fields
         * @type {Array.<ObjectTypeConfigFields> || null}
         */
        this.Fields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;

        if (params.Fields) {
            this.Fields = new Array();
            for (let z in params.Fields) {
                let obj = new ObjectTypeConfigFields();
                obj.deserialize(params.Fields[z]);
                this.Fields.push(obj);
            }
        }

    }
}

module.exports = {
    DescribeTaskRequest: DescribeTaskRequest,
    DescribeActionFieldConfigListRequest: DescribeActionFieldConfigListRequest,
    TaskGroupAction: TaskGroupAction,
    ApmServiceInfo: ApmServiceInfo,
    TaskGroupInstancesExecuteRules: TaskGroupInstancesExecuteRules,
    CreateTaskFromActionRequest: CreateTaskFromActionRequest,
    DeleteTaskRequest: DeleteTaskRequest,
    DescribeActionLibraryListRequest: DescribeActionLibraryListRequest,
    TaskGroup: TaskGroup,
    ExecuteTaskResponse: ExecuteTaskResponse,
    DescribeActionFieldConfigListResponse: DescribeActionFieldConfigListResponse,
    ActionFieldConfigDetail: ActionFieldConfigDetail,
    TemplateGroupAction: TemplateGroupAction,
    Template: Template,
    DescribeTaskExecuteLogsRequest: DescribeTaskExecuteLogsRequest,
    DescribeObjectTypeListResponse: DescribeObjectTypeListResponse,
    ModifyTaskRunStatusRequest: ModifyTaskRunStatusRequest,
    DescribeTemplateResponse: DescribeTemplateResponse,
    DescribePolicy: DescribePolicy,
    ActionFilter: ActionFilter,
    PolicyTriggerLog: PolicyTriggerLog,
    DescribeTemplateRequest: DescribeTemplateRequest,
    ExecuteTaskInstanceRequest: ExecuteTaskInstanceRequest,
    TaskGroupInstance: TaskGroupInstance,
    ExecuteTaskRequest: ExecuteTaskRequest,
    DescribeTaskListResponse: DescribeTaskListResponse,
    ResourceOffline: ResourceOffline,
    DescribeTemplateListResponse: DescribeTemplateListResponse,
    TaskMonitor: TaskMonitor,
    DescribeTemplateListRequest: DescribeTemplateListRequest,
    TagWithDescribe: TagWithDescribe,
    DescribeObjectTypeListRequest: DescribeObjectTypeListRequest,
    DescribeTaskPolicyTriggerLogResponse: DescribeTaskPolicyTriggerLogResponse,
    CreateTaskFromTemplateResponse: CreateTaskFromTemplateResponse,
    DeleteTaskResponse: DeleteTaskResponse,
    ObjectType: ObjectType,
    DescribeTaskPolicyTriggerLogRequest: DescribeTaskPolicyTriggerLogRequest,
    Task: Task,
    TaskReportInfo: TaskReportInfo,
    CreateTaskFromTemplateRequest: CreateTaskFromTemplateRequest,
    TriggerPolicyRequest: TriggerPolicyRequest,
    TaskConfig: TaskConfig,
    TriggerPolicyResponse: TriggerPolicyResponse,
    DescribeTaskListRequest: DescribeTaskListRequest,
    DescribeActionLibraryListResponse: DescribeActionLibraryListResponse,
    ObjectTypeJsonParse: ObjectTypeJsonParse,
    TaskListItem: TaskListItem,
    ExecuteTaskInstanceResponse: ExecuteTaskInstanceResponse,
    DescribeTaskExecuteLogsResponse: DescribeTaskExecuteLogsResponse,
    TaskGroupConfig: TaskGroupConfig,
    TemplateMonitor: TemplateMonitor,
    TemplateGroup: TemplateGroup,
    TemplatePolicy: TemplatePolicy,
    ActionFieldConfigResult: ActionFieldConfigResult,
    TaskGroupActionConfig: TaskGroupActionConfig,
    ActionLibraryListResult: ActionLibraryListResult,
    ModifyTaskRunStatusResponse: ModifyTaskRunStatusResponse,
    DescribeTaskResponse: DescribeTaskResponse,
    CreateTaskFromActionResponse: CreateTaskFromActionResponse,
    TemplateListItem: TemplateListItem,
    TagWithCreate: TagWithCreate,
    ObjectTypeConfigFields: ObjectTypeConfigFields,
    ObjectTypeConfig: ObjectTypeConfig,

}
