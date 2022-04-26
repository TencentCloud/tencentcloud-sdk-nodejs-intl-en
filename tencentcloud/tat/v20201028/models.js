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
 * Settings of a scheduled invoker
 * @class
 */
class ScheduleSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution policy:
<br><li>`ONCE`: Execute once
<br><li>`RECURRENCE`: Execute repeatedly
         * @type {string || null}
         */
        this.Policy = null;

        /**
         * Trigger the crontab expression. This field is required if `Policy` is `RECURRENCE`. The crontab expression is parsed in UTC+8.
         * @type {string || null}
         */
        this.Recurrence = null;

        /**
         * The next execution time of the invoker. This field is required if `Policy` is `ONCE`.
         * @type {string || null}
         */
        this.InvokeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.Recurrence = 'Recurrence' in params ? params.Recurrence : null;
        this.InvokeTime = 'InvokeTime' in params ? params.InvokeTime : null;

    }
}

/**
 * Execution task description.
 * @class
 */
class InvocationTaskBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution task ID.
         * @type {string || null}
         */
        this.InvocationTaskId = null;

        /**
         * Execution task status. Valid values:
<li> PENDING: Pending 
<li> DELIVERING: Delivering
<li> DELIVER_DELAYED: Delivery delayed 
<li> DELIVER_FAILED: Delivery failed
<li> START_FAILED: Failed to start the command
<li> RUNNING: Running
<li> SUCCESS: Success
<li> FAILED: Failed to execute the command. The exit code is not 0 after execution.
<li> TIMEOUT: Command timed out
<li> TASK_TIMEOUT: Task timed out
<li> CANCELLING: Canceling
<li> CANCELLED: Canceled (canceled before execution)
<li> TERMINATED: Terminated (canceled during execution)
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * Instance ID.
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
        this.InvocationTaskId = 'InvocationTaskId' in params ? params.InvocationTaskId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * PreviewReplacedCommandContent response structure.
 * @class
 */
class PreviewReplacedCommandContentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded command with custom parameters.
         * @type {string || null}
         */
        this.ReplacedContent = null;

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
        this.ReplacedContent = 'ReplacedContent' in params ? params.ReplacedContent : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCommand response structure.
 * @class
 */
class CreateCommandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command ID.
         * @type {string || null}
         */
        this.CommandId = null;

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
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableInvoker request structure.
 * @class
 */
class DisableInvokerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the invoker to be disabled.
         * @type {string || null}
         */
        this.InvokerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokerId = 'InvokerId' in params ? params.InvokerId : null;

    }
}

/**
 * TAT agent information
 * @class
 */
class AutomationAgentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent version.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Last heartbeat time
         * @type {string || null}
         */
        this.LastHeartbeatTime = null;

        /**
         * Agent status. Valid values:
<li> `Online`
<li> `Offline`
         * @type {string || null}
         */
        this.AgentStatus = null;

        /**
         * Agent runtime environment. Valid values:
<li> `Linux`: Linux instance
<li> `Windows`: Windows instance
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LastHeartbeatTime = 'LastHeartbeatTime' in params ? params.LastHeartbeatTime : null;
        this.AgentStatus = 'AgentStatus' in params ? params.AgentStatus : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * RunCommand request structure.
 * @class
 */
class RunCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded command. The maximum length is 64 KB.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * IDs of instances about to execute commands. Up to 100 IDs are allowed. Supported instance types:
<li> `CVM`
<li> `LIGHTHOUSE`
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Command name. The name can be up to 60 bytes, and contain [a-z], [A-Z], [0-9] and [_-.].
         * @type {string || null}
         */
        this.CommandName = null;

        /**
         * Command description. The maximum length is 120 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Command type. `SHELL` and `POWERSHELL` are supported. The default value is `SHELL`.
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * Command execution path. The default value is /root for `SHELL` commands and C:\Program Files\qcloud\tat_agent\workdir for `POWERSHELL` commands.
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * Command timeout period. Default value: 60 seconds. Value range: [1, 86400].
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Whether to save the command. Valid values:
<li> `True`: Save
<li> `False`: Do not save
The default value is `False`.
         * @type {boolean || null}
         */
        this.SaveCommand = null;

        /**
         * Whether to enable the custom parameter feature.
This cannot be modified once created.
Default value: `false`.
         * @type {boolean || null}
         */
        this.EnableParameter = null;

        /**
         * The default value of the custom parameter value when it is enabled. The field type is JSON encoded string. For example, {\"varA\": \"222\"}.
`key` is the name of the custom parameter and `value` is the default value. Both `key` and `value` are strings.
If Parameters is not provided, the default values specified here are used.
Up to 20 custom parameters are supported.
The name of the custom parameter cannot exceed 64 characters and can contain [a-z], [A-Z], [0-9] and [-_].
         * @type {string || null}
         */
        this.DefaultParameters = null;

        /**
         * Custom parameters of `Command`. The field type is JSON encoded string. For example, {\"varA\": \"222\"}.
`key` is the name of the custom parameter and `value` is the default value. Both `key` and `value` are strings.
If no parameter value is provided, the `DefaultParameters` is used.
Up to 20 custom parameters are supported.
The name of the custom parameter cannot exceed 64 characters and can contain [a-z], [A-Z], [0-9] and [-_].
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * The tags of the command. It is available when `SaveCommand` is `True`. A maximum of 10 tags are allowed.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * The username used to execute the command on the CVM or Lighthouse instance.
The principle of least privilege is the best practice for permission management. We recommend you execute TAT commands as a general user. By default, the user `root` is used to execute commands on Linux and the user `System` is used on Windows.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * The COS bucket URL for uploading logs. The URL must start with `https`, such as `https://BucketName-123454321.cos.ap-beijing.myqcloud.com`.
         * @type {string || null}
         */
        this.OutputCOSBucketUrl = null;

        /**
         * The COS bucket directory where the logs are saved. Check below for the rules of the directory name. 
1. It must be a combination of number, letters, and visible characters. Up to 60 characters are allowed.
2. Use a slash (/) to create a subdirectory.
3. ".." can not be used as the folder name. It cannot start with a slash (/), and cannot contain consecutive slashes.
         * @type {string || null}
         */
        this.OutputCOSKeyPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.CommandName = 'CommandName' in params ? params.CommandName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.SaveCommand = 'SaveCommand' in params ? params.SaveCommand : null;
        this.EnableParameter = 'EnableParameter' in params ? params.EnableParameter : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Username = 'Username' in params ? params.Username : null;
        this.OutputCOSBucketUrl = 'OutputCOSBucketUrl' in params ? params.OutputCOSBucketUrl : null;
        this.OutputCOSKeyPrefix = 'OutputCOSKeyPrefix' in params ? params.OutputCOSKeyPrefix : null;

    }
}

/**
 * Invoker information.
 * @class
 */
class Invoker extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoker ID.
         * @type {string || null}
         */
        this.InvokerId = null;

        /**
         * Invoker name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Invoker type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Command ID.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * Username.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Custom parameters.
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * Instance ID list.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Whether to enable the invoker.
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * Execution schedule of the invoker. This field is returned for recurring invokers.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {ScheduleSettings || null}
         */
        this.ScheduleSettings = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Modification time.
         * @type {string || null}
         */
        this.UpdatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokerId = 'InvokerId' in params ? params.InvokerId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

        if (params.ScheduleSettings) {
            let obj = new ScheduleSettings();
            obj.deserialize(params.ScheduleSettings)
            this.ScheduleSettings = obj;
        }
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

    }
}

/**
 * DescribeInvocationTasks request structure.
 * @class
 */
class DescribeInvocationTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of execution task IDs. Up to 100 IDs are allowed for each request. `InvocationTaskIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.InvocationTaskIds = null;

        /**
         * Filter conditions.<br> <li> `invocation-id` - String - Required: No - (Filter condition) Filter by the execution activity ID.<br> <li> `invocation-task-id` - String - Required: No - (Filter condition) Filter by the execution task ID.<br> <li> `instance-id` - String - Required: No - (Filter condition) Filter by the instance ID. <br> <li> `command-id` - String - Required: No - (Filter condition) Filter by the command ID. <br>Up to 10 `Filters` are allowed for each request. Each filter can have up to five `Filter.Values`. `InvocationTaskIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. It defaults to `20`. The maximum is 100. For more information on `Limit`, see the relevant section in the API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. The default value is `0`. For more information on `Offset`, see the relevant section in API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether to hide the output. Valid values:<br><li>`True` (default): Hide the output <br><li>`False`: Show the output <br>
         * @type {boolean || null}
         */
        this.HideOutput = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvocationTaskIds = 'InvocationTaskIds' in params ? params.InvocationTaskIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.HideOutput = 'HideOutput' in params ? params.HideOutput : null;

    }
}

/**
 * Execution activity details.
 * @class
 */
class Invocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution activity ID.
         * @type {string || null}
         */
        this.InvocationId = null;

        /**
         * Command ID.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * Execution task status. Valid values:
<li> PENDING: Pending 
<li> RUNNING: Running
<li> SUCCESS: Success
<li> FAILED: Failed
<li> TIMEOUT: Command timed out
<li> PARTIAL_FAILED: Partial failure
         * @type {string || null}
         */
        this.InvocationStatus = null;

        /**
         * Execution task information list.
         * @type {Array.<InvocationTaskBasicInfo> || null}
         */
        this.InvocationTaskBasicInfoSet = null;

        /**
         * Execution activity description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Start time of the execution activity.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the execution activity.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Time when the execution activity is created.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Time when the execution activity is updated.
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * Values of custom parameters.
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * Default custom parameter value.
         * @type {string || null}
         */
        this.DefaultParameters = null;

        /**
         * Type of the instance executing the command. Valid values: `CVM`, `LIGHTHOUSE`.
         * @type {string || null}
         */
        this.InstanceKind = null;

        /**
         * The user who executes the command on the instance.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Invocation source.
         * @type {string || null}
         */
        this.InvocationSource = null;

        /**
         * Base64-encoded command
         * @type {string || null}
         */
        this.CommandContent = null;

        /**
         * Command type
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * Command timeout period, in seconds.
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Working directory for executing the command.
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * The COS bucket URL for uploading logs.
         * @type {string || null}
         */
        this.OutputCOSBucketUrl = null;

        /**
         * The COS bucket directory where the logs are saved.
         * @type {string || null}
         */
        this.OutputCOSKeyPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.InvocationStatus = 'InvocationStatus' in params ? params.InvocationStatus : null;

        if (params.InvocationTaskBasicInfoSet) {
            this.InvocationTaskBasicInfoSet = new Array();
            for (let z in params.InvocationTaskBasicInfoSet) {
                let obj = new InvocationTaskBasicInfo();
                obj.deserialize(params.InvocationTaskBasicInfoSet[z]);
                this.InvocationTaskBasicInfoSet.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;
        this.InstanceKind = 'InstanceKind' in params ? params.InstanceKind : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.InvocationSource = 'InvocationSource' in params ? params.InvocationSource : null;
        this.CommandContent = 'CommandContent' in params ? params.CommandContent : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.OutputCOSBucketUrl = 'OutputCOSBucketUrl' in params ? params.OutputCOSBucketUrl : null;
        this.OutputCOSKeyPrefix = 'OutputCOSKeyPrefix' in params ? params.OutputCOSKeyPrefix : null;

    }
}

/**
 * DescribeRegions request structure.
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * Command execution details.
 * @class
 */
class CommandDocument extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded command.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Command type.
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * Timeout period.
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Execution path.
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * The user who executes the command.
         * @type {string || null}
         */
        this.Username = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Username = 'Username' in params ? params.Username : null;

    }
}

/**
 * DescribeInvokerRecords response structure.
 * @class
 */
class DescribeInvokerRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of matching records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Execution history of an invoker.
         * @type {Array.<InvokerRecord> || null}
         */
        this.InvokerRecordSet = null;

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

        if (params.InvokerRecordSet) {
            this.InvokerRecordSet = new Array();
            for (let z in params.InvokerRecordSet) {
                let obj = new InvokerRecord();
                obj.deserialize(params.InvokerRecordSet[z]);
                this.InvokerRecordSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Task result.
 * @class
 */
class TaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * ExitCode of the execution.
         * @type {number || null}
         */
        this.ExitCode = null;

        /**
         * Base64-encoded command output. The maximum length is 24 KB.
         * @type {string || null}
         */
        this.Output = null;

        /**
         * Time when the execution is started.
         * @type {string || null}
         */
        this.ExecStartTime = null;

        /**
         * Time when the execution is ended.
         * @type {string || null}
         */
        this.ExecEndTime = null;

        /**
         * Dropped bytes of the command output.
         * @type {number || null}
         */
        this.Dropped = null;

        /**
         * COS URL of the logs.
         * @type {string || null}
         */
        this.OutputUrl = null;

        /**
         * Error message for uploading logs to COS.
         * @type {string || null}
         */
        this.OutputUploadCOSErrorInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExitCode = 'ExitCode' in params ? params.ExitCode : null;
        this.Output = 'Output' in params ? params.Output : null;
        this.ExecStartTime = 'ExecStartTime' in params ? params.ExecStartTime : null;
        this.ExecEndTime = 'ExecEndTime' in params ? params.ExecEndTime : null;
        this.Dropped = 'Dropped' in params ? params.Dropped : null;
        this.OutputUrl = 'OutputUrl' in params ? params.OutputUrl : null;
        this.OutputUploadCOSErrorInfo = 'OutputUploadCOSErrorInfo' in params ? params.OutputUploadCOSErrorInfo : null;

    }
}

/**
 * ModifyInvoker request structure.
 * @class
 */
class ModifyInvokerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the invoker to be modified.
         * @type {string || null}
         */
        this.InvokerId = null;

        /**
         * Name of the invoker to be modified.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Invoker type. It can only be `SCHEDULE` (recurring invokers).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of the command to be modified.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * The username to be modified.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Custom parameters to be modified.
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * List of instance IDs to be modified. Up to 100 IDs are allowed.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Scheduled invoker settings to be modified.
         * @type {ScheduleSettings || null}
         */
        this.ScheduleSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokerId = 'InvokerId' in params ? params.InvokerId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.ScheduleSettings) {
            let obj = new ScheduleSettings();
            obj.deserialize(params.ScheduleSettings)
            this.ScheduleSettings = obj;
        }

    }
}

/**
 * EnableInvoker response structure.
 * @class
 */
class EnableInvokerResponse extends  AbstractModel {
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
 * EnableInvoker request structure.
 * @class
 */
class EnableInvokerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the invoker to be enabled.
         * @type {string || null}
         */
        this.InvokerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokerId = 'InvokerId' in params ? params.InvokerId : null;

    }
}

/**
 * ModifyCommand response structure.
 * @class
 */
class ModifyCommandResponse extends  AbstractModel {
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
 * Information of a region.
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name, such as `ap-guangzhou`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region description, such as `Guangzhou`
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region status. `AVAILABLE` indicates the region is available.
         * @type {string || null}
         */
        this.RegionState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;

    }
}

/**
 * DescribeInvokers response structure.
 * @class
 */
class DescribeInvokersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of matching invokers.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Invoker information.
         * @type {Array.<Invoker> || null}
         */
        this.InvokerSet = null;

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

        if (params.InvokerSet) {
            this.InvokerSet = new Array();
            for (let z in params.InvokerSet) {
                let obj = new Invoker();
                obj.deserialize(params.InvokerSet[z]);
                this.InvokerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelInvocation response structure.
 * @class
 */
class CancelInvocationResponse extends  AbstractModel {
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
 * DeleteCommand response structure.
 * @class
 */
class DeleteCommandResponse extends  AbstractModel {
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
 * DisableInvoker response structure.
 * @class
 */
class DisableInvokerResponse extends  AbstractModel {
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
 * DescribeCommands response structure.
 * @class
 */
class DescribeCommandsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of matching commands.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of command details.
         * @type {Array.<Command> || null}
         */
        this.CommandSet = null;

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

        if (params.CommandSet) {
            this.CommandSet = new Array();
            for (let z in params.CommandSet) {
                let obj = new Command();
                obj.deserialize(params.CommandSet[z]);
                this.CommandSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInvoker request structure.
 * @class
 */
class CreateInvokerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoker name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Invoker type. It can only be `SCHEDULE` (recurring invokers).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Remote command ID.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * ID of the instance bound to the trigger. Up to 100 IDs are allowed.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * The user who executes the command.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Custom parameters of the command.
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * Settings required for a recurring invoker.
         * @type {ScheduleSettings || null}
         */
        this.ScheduleSettings = null;

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
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;

        if (params.ScheduleSettings) {
            let obj = new ScheduleSettings();
            obj.deserialize(params.ScheduleSettings)
            this.ScheduleSettings = obj;
        }

    }
}

/**
 * DescribeAutomationAgentStatus request structure.
 * @class
 */
class DescribeAutomationAgentStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs for the query.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Filter conditions.<br> <li>`agent-status` - String - Required: No - (Filter condition) Filter by agent status. Valid values: `Online`, `Offline`.<br> <li> `environment` - String - Required: No - (Filter condition) Filter by the agent environment. Valid value: `Linux`.<br> <li> `instance-id` - String - Required: No - (Filter condition) Filter by the instance ID. <br>Up to 10 `Filters` allowed in one request. For each filter, five `Filter.Values` can be specified. `InstanceIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. It defaults to `20`. The maximum is 100. For more information on `Limit`, see the relevant section in the API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. The default value is `0`. For more information on `Offset`, see the relevant section in API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * InvokeCommand response structure.
 * @class
 */
class InvokeCommandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution activity ID.
         * @type {string || null}
         */
        this.InvocationId = null;

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
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCommand request structure.
 * @class
 */
class ModifyCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command ID.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * Command name. The name can be up to 60 bytes, and contain [a-z], [A-Z], [0-9] and [_-.].
         * @type {string || null}
         */
        this.CommandName = null;

        /**
         * Command description. The maximum length is 120 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Base64-encoded command. The maximum length is 64 KB.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Command type. `SHELL` and `POWERSHELL` are supported.
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * Command execution path.
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * Command timeout period. Value range: [1, 86400].
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * The default value of the custom parameter value when it is enabled. The field type is JSON encoded string. For example, {\"varA\": \"222\"}.
All parameters are overwritten. All default values are required for modification.
Modification is only allowed when `EnableParameter` is `true`.
`key` is the name of the custom parameter and `value` is the default value. Both `key` and `value` are strings.
Up to 20 custom parameters are supported.
The name of the custom parameter cannot exceed 64 characters and can contain [a-z], [A-Z], [0-9] and [-_].
         * @type {string || null}
         */
        this.DefaultParameters = null;

        /**
         * The username used to execute the command on the CVM or Lighthouse instance.
The principle of least privilege is the best practice for permission management. We recommend you execute TAT commands as a general user.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * The COS bucket URL for uploading logs. The URL must start with `https`, such as `https://BucketName-123454321.cos.ap-beijing.myqcloud.com`.
         * @type {string || null}
         */
        this.OutputCOSBucketUrl = null;

        /**
         * The COS bucket directory where the logs are saved. Check below for the rules of the directory name. 
1. It must be a combination of number, letters, and visible characters. Up to 60 characters are allowed.
2. Use a slash (/) to create a subdirectory.
3. ".." can not be used as the folder name. It cannot start with a slash (/), and cannot contain consecutive slashes.
         * @type {string || null}
         */
        this.OutputCOSKeyPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.CommandName = 'CommandName' in params ? params.CommandName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.OutputCOSBucketUrl = 'OutputCOSBucketUrl' in params ? params.OutputCOSBucketUrl : null;
        this.OutputCOSKeyPrefix = 'OutputCOSKeyPrefix' in params ? params.OutputCOSKeyPrefix : null;

    }
}

/**
 * DescribeInvokers request structure.
 * @class
 */
class DescribeInvokersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of invoker IDs.
         * @type {Array.<string> || null}
         */
        this.InvokerIds = null;

        /**
         * Filter conditions:

<li> `invoker-id` - String - Required: No - (Filter condition) Filter by the invoker ID.
<li> `command-id` - String - Required: No - (Filter condition) Filter by the command ID.
<li> `type` - String - Required: No - (Filter condition) Filter by the invoker type.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.InvokerIds = 'InvokerIds' in params ? params.InvokerIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeCommands request structure.
 * @class
 */
class DescribeCommandsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of command IDs. Up to 100 IDs are allowed for each request. `CommandIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.CommandIds = null;

        /**
         * Filter conditions.
<li> `command-id` - String - Required: No - (Filter condition) Filter by the command ID.
<li> `command-name` - String - Required: No - (Filter condition) Filter by the command name.
<li> `command-type` - String - Required: No - (Filter condition) Filter by the command type. Valid values: `SHELL` or `POWERSHELL`.
<li> `created-by` - String - Required: No - (Filter condition) Filter by the creator. Valid values: `TAT` (public commands) or `USER` (custom commands).
<li> `tag-key` - String - Required: No - (Filter condition) Filter by the tag key.</li>
<li> `tag-value` - String - Required: No - (Filter condition) Filter by the tag value.</li>
<li> `tag:tag-key` - String - Required: No - (Filter) Filter by the tag key-value pair. The tag-key should be replaced with a specified tag key. For detailed usage, see sample 4.</li>

Up to 10 `Filters` are allowed in one request. Each filter can have up to 5 `Filter.Values`. `CommandIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. It defaults to `20`. The maximum is 100. For more information on `Limit`, see the relevant section in the API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. The default value is `0`. For more information on `Offset`, see the relevant section in API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.CommandIds = 'CommandIds' in params ? params.CommandIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteInvoker response structure.
 * @class
 */
class DeleteInvokerResponse extends  AbstractModel {
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
 * DescribeInvocations request structure.
 * @class
 */
class DescribeInvocationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of execution activity IDs. Up to 100 IDs are allowed for each request. `InvocationIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.InvocationIds = null;

        /**
         * Filter conditions.<br> <li> `invocation-id` - String - Required: No - (Filter condition) Filter by the execution activity ID.<br> 
<li> `command-id` - String - Required: No - (Filter condition) Filter by the command ID. 
<li> `command-created-by` - String - Required: No - (Filter condition) Filter by the command type. Valid values: `TAT` (public commands) or `USER` (custom commands).
<li> `instance-kind` - String - Required: No - (Filter condition) Filter by the instance type. Valid values: `CVM` or `LIGHTHOUSE`. 
<br>Up to 10 `Filters` are allowed for each request. Each filter can have up to five `Filter.Values`. `InvocationIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned results. It defaults to `20`. The maximum is 100. For more information on `Limit`, see the relevant section in the API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. The default value is `0`. For more information on `Offset`, see the relevant section in API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
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
        this.InvocationIds = 'InvocationIds' in params ? params.InvocationIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * > Key-value pair filters for conditional filtering queries, such as filtering ID, name, and status.
> * If there are multiple `Filter` parameters, the relationship among them is the logical `AND`.
> * If there are multiple `Values` for the same `Filter`, the relationship among the `Values` for the same `Filter` is the logical `OR`.
>
> Take the [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) API as an example. You can use the following filters to query the instances whose availability zone (`zone`) is Guangzhou 1 ***and*** billing method (`instance-charge-type`) is prepaid ***or*** pay-as-you-go:
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
```
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
         * Filter values of the field.
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
 * DescribeInvocations response structure.
 * @class
 */
class DescribeInvocationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of matching execution activities.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of execution activities.
         * @type {Array.<Invocation> || null}
         */
        this.InvocationSet = null;

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

        if (params.InvocationSet) {
            this.InvocationSet = new Array();
            for (let z in params.InvocationSet) {
                let obj = new Invocation();
                obj.deserialize(params.InvocationSet[z]);
                this.InvocationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInvocationTasks response structure.
 * @class
 */
class DescribeInvocationTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of matching execution tasks.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of execution tasks.
         * @type {Array.<InvocationTask> || null}
         */
        this.InvocationTaskSet = null;

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

        if (params.InvocationTaskSet) {
            this.InvocationTaskSet = new Array();
            for (let z in params.InvocationTaskSet) {
                let obj = new InvocationTask();
                obj.deserialize(params.InvocationTaskSet[z]);
                this.InvocationTaskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Command details.
 * @class
 */
class Command extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command ID.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * Command name.
         * @type {string || null}
         */
        this.CommandName = null;

        /**
         * Command description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Base64-encoded command.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Command type.
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * Command execution path.
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * Command timeout period.
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Command creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Command update time.
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * Whether to enable the custom parameter feature.
         * @type {boolean || null}
         */
        this.EnableParameter = null;

        /**
         * Default custom parameter value.
         * @type {string || null}
         */
        this.DefaultParameters = null;

        /**
         * Formatted description of the command. This parameter is an empty string for user commands and contains values for public commands.
         * @type {string || null}
         */
        this.FormattedDescription = null;

        /**
         * Command creator. `TAT` indicates a public command and `USER` indicates a personal command.
         * @type {string || null}
         */
        this.CreatedBy = null;

        /**
         * The list of tags bound to the command.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * The user who executes the command on the instance.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * The COS bucket URL for uploading logs.
         * @type {string || null}
         */
        this.OutputCOSBucketUrl = null;

        /**
         * The COS bucket directory where the logs are saved.
         * @type {string || null}
         */
        this.OutputCOSKeyPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.CommandName = 'CommandName' in params ? params.CommandName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.EnableParameter = 'EnableParameter' in params ? params.EnableParameter : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;
        this.FormattedDescription = 'FormattedDescription' in params ? params.FormattedDescription : null;
        this.CreatedBy = 'CreatedBy' in params ? params.CreatedBy : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Username = 'Username' in params ? params.Username : null;
        this.OutputCOSBucketUrl = 'OutputCOSBucketUrl' in params ? params.OutputCOSBucketUrl : null;
        this.OutputCOSKeyPrefix = 'OutputCOSKeyPrefix' in params ? params.OutputCOSKeyPrefix : null;

    }
}

/**
 * PreviewReplacedCommandContent request structure.
 * @class
 */
class PreviewReplacedCommandContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom parameters for the preview. The field type is JSON encoded string. For example, {\"varA\": \"222\"}.
`key` is the name of the custom parameter and "value" is its specified value. Both "key" and "value" are strings.
At most 20 custom parameters are supported.
The name of the custom parameter cannot exceed 64 characters and can only contain [a-z], [A-Z], [0-9], [-_].
This parameter can be left empty if DefaultParameters is set for the previewed CommandId.
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * The command to be previewed. If DefaultParameters is set, it is combined with Parameters and Parameters takes priority.
`CommandId` or `Content` must be specified.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * Base64-encoded command to be previewed. The maximum length is 64 KB.
CommandId or Content must be specified.
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * Execution task.
 * @class
 */
class InvocationTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution activity ID.
         * @type {string || null}
         */
        this.InvocationId = null;

        /**
         * Execution task ID.
         * @type {string || null}
         */
        this.InvocationTaskId = null;

        /**
         * Command ID.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * Execution task status. Valid values:
<li> PENDING: Pending 
<li> DELIVERING: Delivering
<li> DELIVER_DELAYED: Delivery delayed 
<li> DELIVER_FAILED: Delivery failed
<li> START_FAILED: Failed to start the command
<li> RUNNING: Running
<li> SUCCESS: Success
<li> FAILED: Failed to execute the command. The exit code is not 0 after execution.
<li> TIMEOUT: Command timed out
<li> TASK_TIMEOUT: Task timed out
<li> CANCELLING: Canceling
<li> CANCELLED: Canceled (canceled before execution)
<li> TERMINATED: Terminated (canceled during execution)
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Execution result.
         * @type {TaskResult || null}
         */
        this.TaskResult = null;

        /**
         * Start time of the execution task.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the execution task.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Update time.
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * Command details of the execution task.
         * @type {CommandDocument || null}
         */
        this.CommandDocument = null;

        /**
         * Error message displayed when the execution task fails.
         * @type {string || null}
         */
        this.ErrorInfo = null;

        /**
         * Invocation source.
         * @type {string || null}
         */
        this.InvocationSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.InvocationTaskId = 'InvocationTaskId' in params ? params.InvocationTaskId : null;
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.TaskResult) {
            let obj = new TaskResult();
            obj.deserialize(params.TaskResult)
            this.TaskResult = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

        if (params.CommandDocument) {
            let obj = new CommandDocument();
            obj.deserialize(params.CommandDocument)
            this.CommandDocument = obj;
        }
        this.ErrorInfo = 'ErrorInfo' in params ? params.ErrorInfo : null;
        this.InvocationSource = 'InvocationSource' in params ? params.InvocationSource : null;

    }
}

/**
 * ModifyInvoker response structure.
 * @class
 */
class ModifyInvokerResponse extends  AbstractModel {
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
 * Execution history of the invoker.
 * @class
 */
class InvokerRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoker ID.
         * @type {string || null}
         */
        this.InvokerId = null;

        /**
         * Execution time.
         * @type {string || null}
         */
        this.InvokeTime = null;

        /**
         * Execution reason.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Command execution ID.
         * @type {string || null}
         */
        this.InvocationId = null;

        /**
         * Trigger result.
         * @type {string || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokerId = 'InvokerId' in params ? params.InvokerId : null;
        this.InvokeTime = 'InvokeTime' in params ? params.InvokeTime : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.Result = 'Result' in params ? params.Result : null;

    }
}

/**
 * DescribeAutomationAgentStatus response structure.
 * @class
 */
class DescribeAutomationAgentStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent information list.
         * @type {Array.<AutomationAgentInfo> || null}
         */
        this.AutomationAgentSet = null;

        /**
         * Total number of matching agents.
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

        if (params.AutomationAgentSet) {
            this.AutomationAgentSet = new Array();
            for (let z in params.AutomationAgentSet) {
                let obj = new AutomationAgentInfo();
                obj.deserialize(params.AutomationAgentSet[z]);
                this.AutomationAgentSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInvoker response structure.
 * @class
 */
class CreateInvokerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoker ID.
         * @type {string || null}
         */
        this.InvokerId = null;

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
        this.InvokerId = 'InvokerId' in params ? params.InvokerId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelInvocation request structure.
 * @class
 */
class CancelInvocationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution activity ID
         * @type {string || null}
         */
        this.InvocationId = null;

        /**
         * Instance ID list. A maximum of 100 IDs are allowed. Supported instance types:
<li> `CVM`
<li> `LIGHTHOUSE`
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DeleteCommand request structure.
 * @class
 */
class DeleteCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the command to be deleted.
         * @type {string || null}
         */
        this.CommandId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandId = 'CommandId' in params ? params.CommandId : null;

    }
}

/**
 * DeleteInvoker request structure.
 * @class
 */
class DeleteInvokerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the invoker to be deleted.
         * @type {string || null}
         */
        this.InvokerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokerId = 'InvokerId' in params ? params.InvokerId : null;

    }
}

/**
 * InvokeCommand request structure.
 * @class
 */
class InvokeCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the command to be triggered.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * IDs of instances about to execute commands. At most 100 IDs are allowed.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Custom parameters of the command. The field type is JSON encoded string. For example, {\"varA\": \"222\"}.
`key` is the name of the custom parameter and `value` is the default value. Both `key` and `value` are strings.
If no parameter value is provided, the DefaultParameters of the command is used.
Up to 20 custom parameters are supported.
The name of the custom parameter cannot exceed 64 characters and can contain [a-z], [A-Z], [0-9] and [-_].
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * The username used to execute the command on the CVM or Lighthouse instance.
The principle of the least privilege is the best practice for permission management. We recommend you execute TAT commands as a general user. If this is not specified, the Username of the command is used by default.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Execution path of the command. The WorkingDirectory of the command is used by default.
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * Command timeout period. Value range: [1, 86400]. The Timeout of the command is used by default.
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * The COS bucket URL for uploading logs. The URL must start with `https`, such as `https://BucketName-123454321.cos.ap-beijing.myqcloud.com`.
         * @type {string || null}
         */
        this.OutputCOSBucketUrl = null;

        /**
         * The COS bucket directory where the logs are saved. Check below for the rules of the directory name. 
1. It must be a combination of number, letters, and visible characters. Up to 60 characters are allowed.
2. Use a slash (/) to create a subdirectory.
3. ".." can not be used as the folder name. It cannot start with a slash (/), and cannot contain consecutive slashes.
         * @type {string || null}
         */
        this.OutputCOSKeyPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.OutputCOSBucketUrl = 'OutputCOSBucketUrl' in params ? params.OutputCOSBucketUrl : null;
        this.OutputCOSKeyPrefix = 'OutputCOSKeyPrefix' in params ? params.OutputCOSKeyPrefix : null;

    }
}

/**
 * DescribeInvokerRecords request structure.
 * @class
 */
class DescribeInvokerRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of invoker IDs. Up to 100 IDs are allowed.
         * @type {Array.<string> || null}
         */
        this.InvokerIds = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.InvokerIds = 'InvokerIds' in params ? params.InvokerIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Information on tags
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
 * RunCommand response structure.
 * @class
 */
class RunCommandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command ID.
         * @type {string || null}
         */
        this.CommandId = null;

        /**
         * Execution activity ID.
         * @type {string || null}
         */
        this.InvocationId = null;

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
        this.CommandId = 'CommandId' in params ? params.CommandId : null;
        this.InvocationId = 'InvocationId' in params ? params.InvocationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions response structure.
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of regions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Region information list
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCommand request structure.
 * @class
 */
class CreateCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command name. The name can be up to 60 bytes, and contain [a-z], [A-Z], [0-9] and [_-.].
         * @type {string || null}
         */
        this.CommandName = null;

        /**
         * Base64-encoded command. The maximum length is 64 KB.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Command description. The maximum length is 120 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Command type. `SHELL` and `POWERSHELL` are supported. The default value is `SHELL`.
         * @type {string || null}
         */
        this.CommandType = null;

        /**
         * Command execution path. The default value is /root for `SHELL` commands and C:\Program Files\qcloud\tat_agent\workdir for `POWERSHELL` commands.
         * @type {string || null}
         */
        this.WorkingDirectory = null;

        /**
         * Command timeout period. Default value: 60 seconds. Value range: [1, 86400].
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Whether to enable the custom parameter feature.
This cannot be modified once created.
Default value: `false`.
         * @type {boolean || null}
         */
        this.EnableParameter = null;

        /**
         * The default value of the custom parameter value when it is enabled. The field type is JSON encoded string. For example, {\"varA\": \"222\"}.
`key` is the name of the custom parameter and `value` is the default value. Both `key` and `value` are strings.
If no parameter value is provided in the `InvokeCommand` API, the default value is used.
Up to 20 custom parameters are supported.
The name of the custom parameter cannot exceed 64 characters and can contain [a-z], [A-Z], [0-9] and [-_].
         * @type {string || null}
         */
        this.DefaultParameters = null;

        /**
         * Tags bound to the command. At most 10 tags are allowed.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * The username used to execute the command on the CVM or Lighthouse instance.
The principle of least privilege is the best practice for permission management. We recommend you execute TAT commands as a general user. By default, the root user is used to execute commands on Linux and the System user is used on Windows.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * The COS bucket URL for uploading logs. The URL must start with `https`, such as `https://BucketName-123454321.cos.ap-beijing.myqcloud.com`.
         * @type {string || null}
         */
        this.OutputCOSBucketUrl = null;

        /**
         * The COS bucket directory where the logs are saved. Check below for the rules of the directory name. 
1. It must be a combination of number, letters, and visible characters. Up to 60 characters are allowed.
2. Use a slash (/) to create a subdirectory.
3. Consecutive dots (.) and slashes (/) are not allowed. It can not start with a slash (/). 
         * @type {string || null}
         */
        this.OutputCOSKeyPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommandName = 'CommandName' in params ? params.CommandName : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CommandType = 'CommandType' in params ? params.CommandType : null;
        this.WorkingDirectory = 'WorkingDirectory' in params ? params.WorkingDirectory : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.EnableParameter = 'EnableParameter' in params ? params.EnableParameter : null;
        this.DefaultParameters = 'DefaultParameters' in params ? params.DefaultParameters : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Username = 'Username' in params ? params.Username : null;
        this.OutputCOSBucketUrl = 'OutputCOSBucketUrl' in params ? params.OutputCOSBucketUrl : null;
        this.OutputCOSKeyPrefix = 'OutputCOSKeyPrefix' in params ? params.OutputCOSKeyPrefix : null;

    }
}

module.exports = {
    ScheduleSettings: ScheduleSettings,
    InvocationTaskBasicInfo: InvocationTaskBasicInfo,
    PreviewReplacedCommandContentResponse: PreviewReplacedCommandContentResponse,
    CreateCommandResponse: CreateCommandResponse,
    DisableInvokerRequest: DisableInvokerRequest,
    AutomationAgentInfo: AutomationAgentInfo,
    RunCommandRequest: RunCommandRequest,
    Invoker: Invoker,
    DescribeInvocationTasksRequest: DescribeInvocationTasksRequest,
    Invocation: Invocation,
    DescribeRegionsRequest: DescribeRegionsRequest,
    CommandDocument: CommandDocument,
    DescribeInvokerRecordsResponse: DescribeInvokerRecordsResponse,
    TaskResult: TaskResult,
    ModifyInvokerRequest: ModifyInvokerRequest,
    EnableInvokerResponse: EnableInvokerResponse,
    EnableInvokerRequest: EnableInvokerRequest,
    ModifyCommandResponse: ModifyCommandResponse,
    RegionInfo: RegionInfo,
    DescribeInvokersResponse: DescribeInvokersResponse,
    CancelInvocationResponse: CancelInvocationResponse,
    DeleteCommandResponse: DeleteCommandResponse,
    DisableInvokerResponse: DisableInvokerResponse,
    DescribeCommandsResponse: DescribeCommandsResponse,
    CreateInvokerRequest: CreateInvokerRequest,
    DescribeAutomationAgentStatusRequest: DescribeAutomationAgentStatusRequest,
    InvokeCommandResponse: InvokeCommandResponse,
    ModifyCommandRequest: ModifyCommandRequest,
    DescribeInvokersRequest: DescribeInvokersRequest,
    DescribeCommandsRequest: DescribeCommandsRequest,
    DeleteInvokerResponse: DeleteInvokerResponse,
    DescribeInvocationsRequest: DescribeInvocationsRequest,
    Filter: Filter,
    DescribeInvocationsResponse: DescribeInvocationsResponse,
    DescribeInvocationTasksResponse: DescribeInvocationTasksResponse,
    Command: Command,
    PreviewReplacedCommandContentRequest: PreviewReplacedCommandContentRequest,
    InvocationTask: InvocationTask,
    ModifyInvokerResponse: ModifyInvokerResponse,
    InvokerRecord: InvokerRecord,
    DescribeAutomationAgentStatusResponse: DescribeAutomationAgentStatusResponse,
    CreateInvokerResponse: CreateInvokerResponse,
    CancelInvocationRequest: CancelInvocationRequest,
    DeleteCommandRequest: DeleteCommandRequest,
    DeleteInvokerRequest: DeleteInvokerRequest,
    InvokeCommandRequest: InvokeCommandRequest,
    DescribeInvokerRecordsRequest: DescribeInvokerRecordsRequest,
    Tag: Tag,
    RunCommandResponse: RunCommandResponse,
    DescribeRegionsResponse: DescribeRegionsResponse,
    CreateCommandRequest: CreateCommandRequest,

}
