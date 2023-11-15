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
 * DescribeDbAssetInfo response structure.
 * @class
 */
class DescribeDbAssetInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of a database asset. 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {DbAssetInfo || null}
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

        if (params.Data) {
            let obj = new DbAssetInfo();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRiskScanTask request structure.
 * @class
 */
class DeleteRiskScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of task IDs
         * @type {Array.<TaskIdListKey> || null}
         */
        this.TaskIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskIdList) {
            this.TaskIdList = new Array();
            for (let z in params.TaskIdList) {
                let obj = new TaskIdListKey();
                obj.deserialize(params.TaskIdList[z]);
                this.TaskIdList.push(obj);
            }
        }

    }
}

/**
 * DescribeRiskCenterAssetViewWeakPasswordRiskList response structure.
 * @class
 */
class DescribeRiskCenterAssetViewWeakPasswordRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of risks
         * @type {Array.<AssetViewWeakPassRisk> || null}
         */
        this.Data = null;

        /**
         * List of status
         * @type {Array.<FilterDataObject> || null}
         */
        this.StatusLists = null;

        /**
         * List of risk levels
         * @type {Array.<FilterDataObject> || null}
         */
        this.LevelLists = null;

        /**
         * List of check source
         * @type {Array.<FilterDataObject> || null}
         */
        this.FromLists = null;

        /**
         * List of asset types
         * @type {Array.<FilterDataObject> || null}
         */
        this.InstanceTypeLists = null;

        /**
         * List of weak password types
         * @type {Array.<FilterDataObject> || null}
         */
        this.PasswordTypeLists = null;

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
                let obj = new AssetViewWeakPassRisk();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.StatusLists) {
            this.StatusLists = new Array();
            for (let z in params.StatusLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.StatusLists[z]);
                this.StatusLists.push(obj);
            }
        }

        if (params.LevelLists) {
            this.LevelLists = new Array();
            for (let z in params.LevelLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.LevelLists[z]);
                this.LevelLists.push(obj);
            }
        }

        if (params.FromLists) {
            this.FromLists = new Array();
            for (let z in params.FromLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.FromLists[z]);
                this.FromLists.push(obj);
            }
        }

        if (params.InstanceTypeLists) {
            this.InstanceTypeLists = new Array();
            for (let z in params.InstanceTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.InstanceTypeLists[z]);
                this.InstanceTypeLists.push(obj);
            }
        }

        if (params.PasswordTypeLists) {
            this.PasswordTypeLists = new Array();
            for (let z in params.PasswordTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.PasswordTypeLists[z]);
                this.PasswordTypeLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVULRiskAdvanceCFGList response structure.
 * @class
 */
class DescribeVULRiskAdvanceCFGListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of configuration items
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<VULRiskAdvanceCFGList> || null}
         */
        this.Data = null;

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of risk levels
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.RiskLevelLists = null;

        /**
         * List of vulnerabilities types
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.VULTypeLists = null;

        /**
         * List of check source
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.CheckFromLists = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new VULRiskAdvanceCFGList();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RiskLevelLists) {
            this.RiskLevelLists = new Array();
            for (let z in params.RiskLevelLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.RiskLevelLists[z]);
                this.RiskLevelLists.push(obj);
            }
        }

        if (params.VULTypeLists) {
            this.VULTypeLists = new Array();
            for (let z in params.VULTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.VULTypeLists[z]);
                this.VULTypeLists.push(obj);
            }
        }

        if (params.CheckFromLists) {
            this.CheckFromLists = new Array();
            for (let z in params.CheckFromLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.CheckFromLists[z]);
                this.CheckFromLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Advanced weak password check configuration
 * @class
 */
class TaskCenterWeakPwdRiskInputParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Check item ID
         * @type {number || null}
         */
        this.CheckItemId = null;

        /**
         * Whether to enable. `0`: no, `1`: yes.
         * @type {number || null}
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
        this.CheckItemId = 'CheckItemId' in params ? params.CheckItemId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * ModifyRiskCenterRiskStatus request structure.
 * @class
 */
class ModifyRiskCenterRiskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data of risk assets
         * @type {Array.<RiskCenterStatusKey> || null}
         */
        this.RiskStatusKeys = null;

        /**
         * Specify how you want to change the risk status. `1`: Change to Handled, `2`: Change to Ignored; `3`: Remove from Handled; `4`: Remove from Ignored
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Risk type. `0`: Port risk; `1`: Vulnerability; `2`: Weak password; `3`: Website content risk; `4`: Configuration risk; `5`: Risk services
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

        if (params.RiskStatusKeys) {
            this.RiskStatusKeys = new Array();
            for (let z in params.RiskStatusKeys) {
                let obj = new RiskCenterStatusKey();
                obj.deserialize(params.RiskStatusKeys[z]);
                this.RiskStatusKeys.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Report item
 * @class
 */
class ReportItemKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of report IDs.
         * @type {Array.<string> || null}
         */
        this.TaskLogList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskLogList = 'TaskLogList' in params ? params.TaskLogList : null;

    }
}

/**
 * Details of a server asset
 * @class
 */
class CVMAssetVO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asset ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * Asset name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * Asset type
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * Region
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Protection status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CWPStatus = null;

        /**
         * Asset creation time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetCreateTime = null;

        /**
         * Public IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Private IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * 
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * App ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * User `uin`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * User name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * Availability zone
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AvailableArea = null;

        /**
         * Whether it's a critical asset
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCore = null;

        /**
         * Subnet ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Subnet name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * UUID of the instance
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceUuid = null;

        /**
         * QUuid of the instance
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceQUuid = null;

        /**
         * OS name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * Number of partitions
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * CPU information
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CPUInfo = null;

        /**
         * CPU size
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CPUSize = null;

        /**
         * CPU load
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CPULoad = null;

        /**
         * Memory size
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MemorySize = null;

        /**
         * Memory load
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MemoryLoad = null;

        /**
         * Disk size.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskSize = null;

        /**
         * Disk load
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DiskLoad = null;

        /**
         * Number of accounts
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountCount = null;

        /**
         * Number of processes
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProcessCount = null;

        /**
         * Number of applications
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppCount = null;

        /**
         * Number of listened ports.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PortCount = null;

        /**
         * Network attacks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Attack = null;

        /**
         * Network access
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Access = null;

        /**
         * Network interception
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Intercept = null;

        /**
         * Inbound peak bandwidth
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InBandwidth = null;

        /**
         * OutInbound peak bandwidth
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutBandwidth = null;

        /**
         * Total inbound traffic
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InFlow = null;

        /**
         * Total outbound traffic
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutFlow = null;

        /**
         * Last scan time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * Proactive malicious outgoing requests
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NetWorkOut = null;

        /**
         * Port risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PortRisk = null;

        /**
         * Vulnerabilities
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VulnerabilityRisk = null;

        /**
         * Configuraiton risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ConfigurationRisk = null;

        /**
         * Number of scan tasks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScanTask = null;

        /**
         * Tags
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * Member ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * Full name of the operating system
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Risk exposure
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RiskExposure = null;

        /**
         * BAS toolkit status. `0`: Not installed; `1`: Installed; `2`: Offline.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BASAgentStatus = null;

        /**
         * `1`: New asset; `0`: Not a new asset
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsNewAsset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.CWPStatus = 'CWPStatus' in params ? params.CWPStatus : null;
        this.AssetCreateTime = 'AssetCreateTime' in params ? params.AssetCreateTime : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.AvailableArea = 'AvailableArea' in params ? params.AvailableArea : null;
        this.IsCore = 'IsCore' in params ? params.IsCore : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.InstanceUuid = 'InstanceUuid' in params ? params.InstanceUuid : null;
        this.InstanceQUuid = 'InstanceQUuid' in params ? params.InstanceQUuid : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;
        this.CPUInfo = 'CPUInfo' in params ? params.CPUInfo : null;
        this.CPUSize = 'CPUSize' in params ? params.CPUSize : null;
        this.CPULoad = 'CPULoad' in params ? params.CPULoad : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.MemoryLoad = 'MemoryLoad' in params ? params.MemoryLoad : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskLoad = 'DiskLoad' in params ? params.DiskLoad : null;
        this.AccountCount = 'AccountCount' in params ? params.AccountCount : null;
        this.ProcessCount = 'ProcessCount' in params ? params.ProcessCount : null;
        this.AppCount = 'AppCount' in params ? params.AppCount : null;
        this.PortCount = 'PortCount' in params ? params.PortCount : null;
        this.Attack = 'Attack' in params ? params.Attack : null;
        this.Access = 'Access' in params ? params.Access : null;
        this.Intercept = 'Intercept' in params ? params.Intercept : null;
        this.InBandwidth = 'InBandwidth' in params ? params.InBandwidth : null;
        this.OutBandwidth = 'OutBandwidth' in params ? params.OutBandwidth : null;
        this.InFlow = 'InFlow' in params ? params.InFlow : null;
        this.OutFlow = 'OutFlow' in params ? params.OutFlow : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.NetWorkOut = 'NetWorkOut' in params ? params.NetWorkOut : null;
        this.PortRisk = 'PortRisk' in params ? params.PortRisk : null;
        this.VulnerabilityRisk = 'VulnerabilityRisk' in params ? params.VulnerabilityRisk : null;
        this.ConfigurationRisk = 'ConfigurationRisk' in params ? params.ConfigurationRisk : null;
        this.ScanTask = 'ScanTask' in params ? params.ScanTask : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.RiskExposure = 'RiskExposure' in params ? params.RiskExposure : null;
        this.BASAgentStatus = 'BASAgentStatus' in params ? params.BASAgentStatus : null;
        this.IsNewAsset = 'IsNewAsset' in params ? params.IsNewAsset : null;

    }
}

/**
 * Details of a configuration risk
 * @class
 */
class AssetViewCFGRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.CFGName = null;

        /**
         * Check type
         * @type {string || null}
         */
        this.CheckType = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Affected assets
         * @type {string || null}
         */
        this.AffectAsset = null;

        /**
         * Risk level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * First detected
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Last detected 
         * @type {string || null}
         */
        this.RecentTime = null;

        /**
         * Source of the task
         * @type {string || null}
         */
        this.From = null;

        /**
         * Status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * u200c-
         * @type {string || null}
         */
        this.CFGSTD = null;

        /**
         * Configuration details.
         * @type {string || null}
         */
        this.CFGDescribe = null;

        /**
         * Fix suggestion
         * @type {string || null}
         */
        this.CFGFix = null;

        /**
         * URL of the help documentation
         * @type {string || null}
         */
        this.CFGHelpURL = null;

        /**
         * Data entry key
         * @type {string || null}
         */
        this.Index = null;

        /**
         * User AppId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * User UIN
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.CFGName = 'CFGName' in params ? params.CFGName : null;
        this.CheckType = 'CheckType' in params ? params.CheckType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.AffectAsset = 'AffectAsset' in params ? params.AffectAsset : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.RecentTime = 'RecentTime' in params ? params.RecentTime : null;
        this.From = 'From' in params ? params.From : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CFGSTD = 'CFGSTD' in params ? params.CFGSTD : null;
        this.CFGDescribe = 'CFGDescribe' in params ? params.CFGDescribe : null;
        this.CFGFix = 'CFGFix' in params ? params.CFGFix : null;
        this.CFGHelpURL = 'CFGHelpURL' in params ? params.CFGHelpURL : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

    }
}

/**
 * Details of a vulnerability
 * @class
 */
class AssetViewVULRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Affected assets
         * @type {string || null}
         */
        this.AffectAsset = null;

        /**
         * Risk level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Asset type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Components
         * @type {string || null}
         */
        this.Component = null;

        /**
         * Service
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Last detected 
         * @type {string || null}
         */
        this.RecentTime = null;

        /**
         * First detected
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Status of the risk. `0`: Not handled, `1`: Handled; `2`: Ignored
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Unique ID of the asset
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Frontend index
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * User `appid`
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * User `uin`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Vulnerability type
         * @type {string || null}
         */
        this.VULType = null;

        /**
         * Port
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * Components affected by the vulnerability 
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Reference information about the vulnerability
         * @type {string || null}
         */
        this.References = null;

        /**
         * Version
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * Vulnerability URL
         * @type {string || null}
         */
        this.VULURL = null;

        /**
         * Vulnerability name
         * @type {string || null}
         */
        this.VULName = null;

        /**
         * CVE number
         * @type {string || null}
         */
        this.CVE = null;

        /**
         * Fix suggestion
         * @type {string || null}
         */
        this.Fix = null;

        /**
         * POC ID
         * @type {string || null}
         */
        this.POCId = null;

        /**
         * Source of the task
         * @type {string || null}
         */
        this.From = null;

        /**
         * CWPP edition
         * @type {number || null}
         */
        this.CWPVersion = null;

        /**
         * Whether it can be fixed 
         * @type {boolean || null}
         */
        this.IsSupportRepair = null;

        /**
         * Whether it can be detected
         * @type {boolean || null}
         */
        this.IsSupportDetect = null;

        /**
         * Instance UUID
         * @type {string || null}
         */
        this.InstanceUUID = null;

        /**
         * Pay load
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * Whether it's an emergency vulnerability. Values: `1` (emergency vulnerability); `0` (non-emergency vulnerability
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EMGCVulType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AffectAsset = 'AffectAsset' in params ? params.AffectAsset : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.RecentTime = 'RecentTime' in params ? params.RecentTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.VULType = 'VULType' in params ? params.VULType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Describe = 'Describe' in params ? params.Describe : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.References = 'References' in params ? params.References : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.VULURL = 'VULURL' in params ? params.VULURL : null;
        this.VULName = 'VULName' in params ? params.VULName : null;
        this.CVE = 'CVE' in params ? params.CVE : null;
        this.Fix = 'Fix' in params ? params.Fix : null;
        this.POCId = 'POCId' in params ? params.POCId : null;
        this.From = 'From' in params ? params.From : null;
        this.CWPVersion = 'CWPVersion' in params ? params.CWPVersion : null;
        this.IsSupportRepair = 'IsSupportRepair' in params ? params.IsSupportRepair : null;
        this.IsSupportDetect = 'IsSupportDetect' in params ? params.IsSupportDetect : null;
        this.InstanceUUID = 'InstanceUUID' in params ? params.InstanceUUID : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.EMGCVulType = 'EMGCVulType' in params ? params.EMGCVulType : null;

    }
}

/**
 * DescribeScanReportList request structure.
 * @class
 */
class DescribeScanReportListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DescribeVpcAssets response structure.
 * @class
 */
class DescribeVpcAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data list
         * @type {Array.<Vpc> || null}
         */
        this.Data = null;

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of VPCs
         * @type {Array.<FilterDataObject> || null}
         */
        this.VpcList = null;

        /**
         * List of regions
         * @type {Array.<FilterDataObject> || null}
         */
        this.RegionList = null;

        /**
         * List of AppIds
         * @type {Array.<FilterDataObject> || null}
         */
        this.AppIdList = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new Vpc();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VpcList) {
            this.VpcList = new Array();
            for (let z in params.VpcList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.VpcList[z]);
                this.VpcList.push(obj);
            }
        }

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }

        if (params.AppIdList) {
            this.AppIdList = new Array();
            for (let z in params.AppIdList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AppIdList[z]);
                this.AppIdList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of VPCs
 * @class
 */
class Vpc extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet (32-bit mask)
         * @type {number || null}
         */
        this.Subnet = null;

        /**
         * Connected VPC (32-bit mask)
         * @type {number || null}
         */
        this.ConnectedVpc = null;

        /**
         * Asset ID
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * CVM (only 32-bit)
         * @type {number || null}
         */
        this.CVM = null;

        /**
         * Tags
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * DNS domain
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DNS = null;

        /**
         * Asset name
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * CIDR block
         * @type {string || null}
         */
        this.CIDR = null;

        /**
         * Asset creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * appid
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * UIN
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * User name
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * Whether it's a newly-added asset. Values: `1` (Yes), `0` (No)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsNewAsset = null;

        /**
         * Whether it's a critical asset. `1`: Yes; `2`: No
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Subnet = 'Subnet' in params ? params.Subnet : null;
        this.ConnectedVpc = 'ConnectedVpc' in params ? params.ConnectedVpc : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.CVM = 'CVM' in params ? params.CVM : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.DNS = 'DNS' in params ? params.DNS : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.CIDR = 'CIDR' in params ? params.CIDR : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.IsNewAsset = 'IsNewAsset' in params ? params.IsNewAsset : null;
        this.IsCore = 'IsCore' in params ? params.IsCore : null;

    }
}

/**
 * List of advanced vulnerability scan configurations
 * @class
 */
class VULRiskAdvanceCFGList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Risk ID
         * @type {string || null}
         */
        this.RiskId = null;

        /**
         * Vulnerability name
         * @type {string || null}
         */
        this.VULName = null;

        /**
         * Risk level
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * Source of the check task
         * @type {string || null}
         */
        this.CheckFrom = null;

        /**
         * Whether it's enabled. `1`: Enable; `0`: Disabled
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Risk type.
         * @type {string || null}
         */
        this.VULType = null;

        /**
         * Affected versions
         * @type {string || null}
         */
        this.ImpactVersion = null;

        /**
         * CVE number
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CVE = null;

        /**
         * Vulnerability tag
         * @type {Array.<string> || null}
         */
        this.VULTag = null;

        /**
         * Fix solution
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FixMethod = null;

        /**
         * Disclosure time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReleaseTime = null;

        /**
         * Whether it's an emergency vulnerability. Values: `1` (emergency vulnerability); `0` (non-emergency vulnerability
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EMGCVulType = null;

        /**
         * Vulnerability description
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VULDescribe = null;

        /**
         * Affected components
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImpactComponent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskId = 'RiskId' in params ? params.RiskId : null;
        this.VULName = 'VULName' in params ? params.VULName : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.CheckFrom = 'CheckFrom' in params ? params.CheckFrom : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.VULType = 'VULType' in params ? params.VULType : null;
        this.ImpactVersion = 'ImpactVersion' in params ? params.ImpactVersion : null;
        this.CVE = 'CVE' in params ? params.CVE : null;
        this.VULTag = 'VULTag' in params ? params.VULTag : null;
        this.FixMethod = 'FixMethod' in params ? params.FixMethod : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;
        this.EMGCVulType = 'EMGCVulType' in params ? params.EMGCVulType : null;
        this.VULDescribe = 'VULDescribe' in params ? params.VULDescribe : null;
        this.ImpactComponent = 'ImpactComponent' in params ? params.ImpactComponent : null;

    }
}

/**
 * StopRiskCenterTask request structure.
 * @class
 */
class StopRiskCenterTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of task IDs
         * @type {Array.<TaskIdListKey> || null}
         */
        this.TaskIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskIdList) {
            this.TaskIdList = new Array();
            for (let z in params.TaskIdList) {
                let obj = new TaskIdListKey();
                obj.deserialize(params.TaskIdList[z]);
                this.TaskIdList.push(obj);
            }
        }

    }
}

/**
 * Vulnerability and asset information
 * @class
 */
class DataSearchBug extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query status code
         * @type {string || null}
         */
        this.StateCode = null;

        /**
         *  
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<BugInfoDetail> || null}
         */
        this.DataBug = null;

        /**
         * None
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<AssetInfoDetail> || null}
         */
        this.DataAsset = null;

        /**
         * `true`: Support vulnerability scan; `false`: Do not support vulnerability scan
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.VSSScan = null;

        /**
         * `0`: Do not support; `1`: Support
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CWPScan = null;

        /**
         * `1`: Support virtual patches; `0` or null: Do not support
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CFWPatch = null;

        /**
         * `0`: Do not support; `1`: Support
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WafPatch = null;

        /**
         * `0`: Do not support; `1`: Support
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CWPFix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StateCode = 'StateCode' in params ? params.StateCode : null;

        if (params.DataBug) {
            this.DataBug = new Array();
            for (let z in params.DataBug) {
                let obj = new BugInfoDetail();
                obj.deserialize(params.DataBug[z]);
                this.DataBug.push(obj);
            }
        }

        if (params.DataAsset) {
            this.DataAsset = new Array();
            for (let z in params.DataAsset) {
                let obj = new AssetInfoDetail();
                obj.deserialize(params.DataAsset[z]);
                this.DataAsset.push(obj);
            }
        }
        this.VSSScan = 'VSSScan' in params ? params.VSSScan : null;
        this.CWPScan = 'CWPScan' in params ? params.CWPScan : null;
        this.CFWPatch = 'CFWPatch' in params ? params.CFWPatch : null;
        this.WafPatch = 'WafPatch' in params ? params.WafPatch : null;
        this.CWPFix = 'CWPFix' in params ? params.CWPFix : null;

    }
}

/**
 * Asset tags
 * @class
 */
class AssetTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key. It supports alphanumeric characters and underscores (_).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value. It supports alphanumeric characters and underscores (_).
Note: This field may return·null, indicating that no valid values can be obtained.
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
 * Risk data
 * @class
 */
class RiskCenterStatusKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Risk ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * User AppId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * Public IP/domain name
         * @type {string || null}
         */
        this.PublicIPDomain = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.PublicIPDomain = 'PublicIPDomain' in params ? params.PublicIPDomain : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeVULRiskAdvanceCFGList request structure.
 * @class
 */
class DescribeVULRiskAdvanceCFGListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Filter conditions.
         * @type {Filter || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DescribeRiskCenterAssetViewCFGRiskList request structure.
 * @class
 */
class DescribeRiskCenterAssetViewCFGRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeDomainAssets request structure.
 * @class
 */
class DescribeDomainAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200c-
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * CSC tags of the asset
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Tags
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag name.
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeleteDomainAndIp request structure.
 * @class
 */
class DeleteDomainAndIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200c-
         * @type {Array.<PublicIpDomainListKey> || null}
         */
        this.Content = null;

        /**
         * Whether to retain the path configuration. `1`: Retain; Others: Do not retain. It defaults to do not retain if not specified.
         * @type {number || null}
         */
        this.RetainPath = null;

        /**
         * Whether to ignore this asset in the future. `1`: Ignore; Others: Do not ignore. It defaults to ignore if not specified.
         * @type {number || null}
         */
        this.IgnoreAsset = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
         */
        this.Tags = null;

        /**
         * Deletion mode. Values: `ALL` (delete all). If it's not specified, `Content` is required.
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

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new PublicIpDomainListKey();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RetainPath = 'RetainPath' in params ? params.RetainPath : null;
        this.IgnoreAsset = 'IgnoreAsset' in params ? params.IgnoreAsset : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeScanTaskList request structure.
 * @class
 */
class DescribeScanTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Tags
         * @type {Array.<Tags> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * List of task IDs
 * @class
 */
class TaskIdListKey extends  AbstractModel {
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
 * DescribeRiskCenterWebsiteRiskList response structure.
 * @class
 */
class DescribeRiskCenterWebsiteRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of content risks
         * @type {Array.<WebsiteRisk> || null}
         */
        this.Data = null;

        /**
         * List of status
         * @type {Array.<FilterDataObject> || null}
         */
        this.StatusLists = null;

        /**
         * List of risk levels
         * @type {Array.<FilterDataObject> || null}
         */
        this.LevelLists = null;

        /**
         * List of asset types
         * @type {Array.<FilterDataObject> || null}
         */
        this.InstanceTypeLists = null;

        /**
         * List of risk types
         * @type {Array.<FilterDataObject> || null}
         */
        this.DetectEngineLists = null;

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
                let obj = new WebsiteRisk();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.StatusLists) {
            this.StatusLists = new Array();
            for (let z in params.StatusLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.StatusLists[z]);
                this.StatusLists.push(obj);
            }
        }

        if (params.LevelLists) {
            this.LevelLists = new Array();
            for (let z in params.LevelLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.LevelLists[z]);
                this.LevelLists.push(obj);
            }
        }

        if (params.InstanceTypeLists) {
            this.InstanceTypeLists = new Array();
            for (let z in params.InstanceTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.InstanceTypeLists[z]);
                this.InstanceTypeLists.push(obj);
            }
        }

        if (params.DetectEngineLists) {
            this.DetectEngineLists = new Array();
            for (let z in params.DetectEngineLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.DetectEngineLists[z]);
                this.DetectEngineLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScanReportList response structure.
 * @class
 */
class DescribeScanReportListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of scan reports
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<ScanTaskInfo> || null}
         */
        this.Data = null;

        /**
         * List of account UINs
         * @type {Array.<string> || null}
         */
        this.UINList = null;

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
                let obj = new ScanTaskInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.UINList = 'UINList' in params ? params.UINList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSearchBugInfo request structure.
 * @class
 */
class DescribeSearchBugInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the query action. `1`: Query emergency vulnerabilities; `2`: Query all vulnerabilities; `3`: Query a specific vulnerability. When `Id=3`, `CVEId` is required. 
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CVE number of the vulnerability. It's required when `Id=3`.
         * @type {string || null}
         */
        this.CVEId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.CVEId = 'CVEId' in params ? params.CVEId : null;

    }
}

/**
 * Temp download URL for the report PDF
 * @class
 */
class TaskLogURL extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temp download URL for the report
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.URL = null;

        /**
         * Task report ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogId = null;

        /**
         * Task report name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskLogName = null;

        /**
         * APP ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.URL = 'URL' in params ? params.URL : null;
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.TaskLogName = 'TaskLogName' in params ? params.TaskLogName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * AddNewBindRoleUser request structure.
 * @class
 */
class AddNewBindRoleUserRequest extends  AbstractModel {
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
 * DescribeListenerList response structure.
 * @class
 */
class DescribeListenerListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of listeners
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<ClbListenerListInfo> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ClbListenerListInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of a database asset
 * @class
 */
class DBAssetVO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asset ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * Asset name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * Asset type
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * 
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC tags
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Region
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Domain name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Asset creation time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetCreateTime = null;

        /**
         * Last scan time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * Configuration risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ConfigurationRisk = null;

        /**
         * Network attacks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Attack = null;

        /**
         * 
         * @type {number || null}
         */
        this.Access = null;

        /**
         * Scan tasks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScanTask = null;

        /**
         * User `appid`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * User UIN
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * User name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * Port
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Tags
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * Private IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * Public IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Whether it's a critical asset
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCore = null;

        /**
         * Whether it's a newly-added asset. Values: `1` (Yes), `0` (No)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsNewAsset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.AssetCreateTime = 'AssetCreateTime' in params ? params.AssetCreateTime : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.ConfigurationRisk = 'ConfigurationRisk' in params ? params.ConfigurationRisk : null;
        this.Attack = 'Attack' in params ? params.Attack : null;
        this.Access = 'Access' in params ? params.Access : null;
        this.ScanTask = 'ScanTask' in params ? params.ScanTask : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsCore = 'IsCore' in params ? params.IsCore : null;
        this.IsNewAsset = 'IsNewAsset' in params ? params.IsNewAsset : null;

    }
}

/**
 * Details of asset scan result
 * @class
 */
class AssetInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * AppID of the user
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppID = null;

        /**
         * CVE number
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CVEId = null;

        /**
         * Whether the asset is scanned. Values: `0`: (default) Not scanned; `1`: Scanning; `2`: Scan completed; `3`: Error while scanning
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsScan = null;

        /**
         * Number of affected assets
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InfluenceAsset = null;

        /**
         * Number of not fixed assets
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NotRepairAsset = null;

        /**
         * Number of not protected assets
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NotProtectAsset = null;

        /**
         * Task ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task progress in terms of percentage
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskPercent = null;

        /**
         * Task creation time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskTime = null;

        /**
         * Scan start time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScanTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppID = 'AppID' in params ? params.AppID : null;
        this.CVEId = 'CVEId' in params ? params.CVEId : null;
        this.IsScan = 'IsScan' in params ? params.IsScan : null;
        this.InfluenceAsset = 'InfluenceAsset' in params ? params.InfluenceAsset : null;
        this.NotRepairAsset = 'NotRepairAsset' in params ? params.NotRepairAsset : null;
        this.NotProtectAsset = 'NotProtectAsset' in params ? params.NotProtectAsset : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskPercent = 'TaskPercent' in params ? params.TaskPercent : null;
        this.TaskTime = 'TaskTime' in params ? params.TaskTime : null;
        this.ScanTime = 'ScanTime' in params ? params.ScanTime : null;

    }
}

/**
 * Subnet assets
 * @class
 */
class SubnetAsset extends  AbstractModel {
    constructor(){
        super();

        /**
         * appid
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * UIN
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Asset ID
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * Asset name
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC name
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Tags
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * User name
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * CIDR block
         * @type {string || null}
         */
        this.CIDR = null;

        /**
         * Availability zone
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Number of CVMs
         * @type {number || null}
         */
        this.CVM = null;

        /**
         * Number of available IPs
         * @type {number || null}
         */
        this.AvailableIp = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Configuration risks
         * @type {number || null}
         */
        this.ConfigureRisk = null;

        /**
         * Number of tasks.
         * @type {number || null}
         */
        this.ScanTask = null;

        /**
         * Last scan time
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * Whether it's a critical asset
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCore = null;

        /**
         * Whether it's a newly-added asset. Values: `1` (Yes), `0` (No)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsNewAsset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.CIDR = 'CIDR' in params ? params.CIDR : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CVM = 'CVM' in params ? params.CVM : null;
        this.AvailableIp = 'AvailableIp' in params ? params.AvailableIp : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ConfigureRisk = 'ConfigureRisk' in params ? params.ConfigureRisk : null;
        this.ScanTask = 'ScanTask' in params ? params.ScanTask : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.IsCore = 'IsCore' in params ? params.IsCore : null;
        this.IsNewAsset = 'IsNewAsset' in params ? params.IsNewAsset : null;

    }
}

/**
 * CreateRiskCenterScanTask response structure.
 * @class
 */
class CreateRiskCenterScanTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * `0`: Task created successfully. `-1`: There are unauthorized assets. 
         * @type {number || null}
         */
        this.Status = null;

        /**
         * List of unauthorized assets
         * @type {Array.<string> || null}
         */
        this.UnAuthAsset = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UnAuthAsset = 'UnAuthAsset' in params ? params.UnAuthAsset : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubnetAssets response structure.
 * @class
 */
class DescribeSubnetAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data list
         * @type {Array.<SubnetAsset> || null}
         */
        this.Data = null;

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of regions
         * @type {Array.<FilterDataObject> || null}
         */
        this.RegionList = null;

        /**
         * List of VPCs
         * @type {Array.<FilterDataObject> || null}
         */
        this.VpcList = null;

        /**
         * List of AppIds
         * @type {Array.<FilterDataObject> || null}
         */
        this.AppIdList = null;

        /**
         * List of availability zones
         * @type {Array.<FilterDataObject> || null}
         */
        this.ZoneList = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SubnetAsset();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }

        if (params.VpcList) {
            this.VpcList = new Array();
            for (let z in params.VpcList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.VpcList[z]);
                this.VpcList.push(obj);
            }
        }

        if (params.AppIdList) {
            this.AppIdList = new Array();
            for (let z in params.AppIdList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AppIdList[z]);
                this.AppIdList.push(obj);
            }
        }

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRiskCenterAssetViewPortRiskList request structure.
 * @class
 */
class DescribeRiskCenterAssetViewPortRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * StopRiskCenterTask response structure.
 * @class
 */
class StopRiskCenterTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `0`: Operation succeeded; Others: failed
         * @type {number || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Service risk
 * @class
 */
class ServerRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service tag
         * @type {string || null}
         */
        this.ServiceTag = null;

        /**
         * Port
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Affected assets
         * @type {string || null}
         */
        this.AffectAsset = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Asset type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Risk level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Network protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Components
         * @type {string || null}
         */
        this.Component = null;

        /**
         * Service
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Last detected 
         * @type {string || null}
         */
        this.RecentTime = null;

        /**
         * First detected
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Risk Details
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RiskDetails = null;

        /**
         * Handling suggestion
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Status of the risk. `0`: Not handled, `1`: Handled; `2`: Ignored
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Unique ID of the asset
         * @type {string || null}
         */
        this.Id = null;

        /**
         * User `appid`
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * User `uin`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Service snapshot
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceSnapshot = null;

        /**
         * Service access URL.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Data entry key
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Index = null;

        /**
         * List of risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<ServerRiskSuggestion> || null}
         */
        this.RiskList = null;

        /**
         * List of fix suggestions 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<ServerRiskSuggestion> || null}
         */
        this.SuggestionList = null;

        /**
         * HTTP response code
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTag = 'ServiceTag' in params ? params.ServiceTag : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.AffectAsset = 'AffectAsset' in params ? params.AffectAsset : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.RecentTime = 'RecentTime' in params ? params.RecentTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.RiskDetails = 'RiskDetails' in params ? params.RiskDetails : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ServiceSnapshot = 'ServiceSnapshot' in params ? params.ServiceSnapshot : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Index = 'Index' in params ? params.Index : null;

        if (params.RiskList) {
            this.RiskList = new Array();
            for (let z in params.RiskList) {
                let obj = new ServerRiskSuggestion();
                obj.deserialize(params.RiskList[z]);
                this.RiskList.push(obj);
            }
        }

        if (params.SuggestionList) {
            this.SuggestionList = new Array();
            for (let z in params.SuggestionList) {
                let obj = new ServerRiskSuggestion();
                obj.deserialize(params.SuggestionList[z]);
                this.SuggestionList.push(obj);
            }
        }
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;

    }
}

/**
 * Task asset information
 * @class
 */
class TaskAssetObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asset name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * 	Asset category
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Asset sub-category
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * IP, domain name, asset ID, database ID, and more
         * @type {string || null}
         */
        this.Asset = null;

        /**
         * Region
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Unique ID of Multi-cloud asset
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Arn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Asset = 'Asset' in params ? params.Asset : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Arn = 'Arn' in params ? params.Arn : null;

    }
}

/**
 * List of IPs
 * @class
 */
class IpAssetListVO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asset ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * Asset name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * Asset type
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * Region
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * CFW status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CFWStatus = null;

        /**
         * Asset creation time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetCreateTime = null;

        /**
         * Public IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Public IP type
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PublicIpType = null;

        /**
         * 
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * appid
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * User `uin`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * Whether it's a critical asset
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCore = null;

        /**
         * Whether it's a cloud asset
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCloud = null;

        /**
         * Network attacks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Attack = null;

        /**
         * Network access
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Access = null;

        /**
         * Network Interception
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Intercept = null;

        /**
         * Inbound bandwidth
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InBandwidth = null;

        /**
         * Outbound bandwidthtraffic peak bandwidth (bps)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutBandwidth = null;

        /**
         * Inbound traffic
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InFlow = null;

        /**
         * Outbound traffic
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutFlow = null;

        /**
         * Last scan time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * Port risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PortRisk = null;

        /**
         * Vulnerabilities
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VulnerabilityRisk = null;

        /**
         * Configuration risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ConfigurationRisk = null;

        /**
         * Scan tasks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScanTask = null;

        /**
         * Weak passwords
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WeakPassword = null;

        /**
         * Content risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WebContentRisk = null;

        /**
         * Tags
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * EIP ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * Member ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * Risk exposure
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RiskExposure = null;

        /**
         * Whether it's a newly-added asset. Values: `1` (Yes), `0` (No)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsNewAsset = null;

        /**
         * Asset ownership verification status. `0`: Pending verification; `1`: Verified; `2`: Verifying; `3` and above: Verification failed
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VerifyStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.CFWStatus = 'CFWStatus' in params ? params.CFWStatus : null;
        this.AssetCreateTime = 'AssetCreateTime' in params ? params.AssetCreateTime : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PublicIpType = 'PublicIpType' in params ? params.PublicIpType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.IsCore = 'IsCore' in params ? params.IsCore : null;
        this.IsCloud = 'IsCloud' in params ? params.IsCloud : null;
        this.Attack = 'Attack' in params ? params.Attack : null;
        this.Access = 'Access' in params ? params.Access : null;
        this.Intercept = 'Intercept' in params ? params.Intercept : null;
        this.InBandwidth = 'InBandwidth' in params ? params.InBandwidth : null;
        this.OutBandwidth = 'OutBandwidth' in params ? params.OutBandwidth : null;
        this.InFlow = 'InFlow' in params ? params.InFlow : null;
        this.OutFlow = 'OutFlow' in params ? params.OutFlow : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.PortRisk = 'PortRisk' in params ? params.PortRisk : null;
        this.VulnerabilityRisk = 'VulnerabilityRisk' in params ? params.VulnerabilityRisk : null;
        this.ConfigurationRisk = 'ConfigurationRisk' in params ? params.ConfigurationRisk : null;
        this.ScanTask = 'ScanTask' in params ? params.ScanTask : null;
        this.WeakPassword = 'WeakPassword' in params ? params.WeakPassword : null;
        this.WebContentRisk = 'WebContentRisk' in params ? params.WebContentRisk : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.RiskExposure = 'RiskExposure' in params ? params.RiskExposure : null;
        this.IsNewAsset = 'IsNewAsset' in params ? params.IsNewAsset : null;
        this.VerifyStatus = 'VerifyStatus' in params ? params.VerifyStatus : null;

    }
}

/**
 * Filter condition
 * @class
 */
class FilterDataObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Filter name
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Value = 'Value' in params ? params.Value : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * DescribeVpcAssets request structure.
 * @class
 */
class DescribeVpcAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter parameters
         * @type {Filter || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DescribeRiskCenterAssetViewWeakPasswordRiskList request structure.
 * @class
 */
class DescribeRiskCenterAssetViewWeakPasswordRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * List of public IPs/domain name assets
 * @class
 */
class PublicIpDomainListKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP/Domain
         * @type {string || null}
         */
        this.Asset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Asset = 'Asset' in params ? params.Asset : null;

    }
}

/**
 * DescribeCVMAssets response structure.
 * @class
 */
class DescribeCVMAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200c-
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * u200c-
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<CVMAssetVO> || null}
         */
        this.Data = null;

        /**
         * List of regions
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.RegionList = null;

        /**
         * Protection status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.DefenseStatusList = null;

        /**
         * List of VPCs
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.VpcList = null;

        /**
         * List of asset types
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.AssetTypeList = null;

        /**
         * List of operating systems
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.SystemTypeList = null;

        /**
         * List of IP types
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.IpTypeList = null;

        /**
         * List of AppIds
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.AppIdList = null;

        /**
         * List of availability zones
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.ZoneList = null;

        /**
         * List of operating systems
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.OsList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CVMAssetVO();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }

        if (params.DefenseStatusList) {
            this.DefenseStatusList = new Array();
            for (let z in params.DefenseStatusList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.DefenseStatusList[z]);
                this.DefenseStatusList.push(obj);
            }
        }

        if (params.VpcList) {
            this.VpcList = new Array();
            for (let z in params.VpcList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.VpcList[z]);
                this.VpcList.push(obj);
            }
        }

        if (params.AssetTypeList) {
            this.AssetTypeList = new Array();
            for (let z in params.AssetTypeList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AssetTypeList[z]);
                this.AssetTypeList.push(obj);
            }
        }

        if (params.SystemTypeList) {
            this.SystemTypeList = new Array();
            for (let z in params.SystemTypeList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.SystemTypeList[z]);
                this.SystemTypeList.push(obj);
            }
        }

        if (params.IpTypeList) {
            this.IpTypeList = new Array();
            for (let z in params.IpTypeList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.IpTypeList[z]);
                this.IpTypeList.push(obj);
            }
        }

        if (params.AppIdList) {
            this.AppIdList = new Array();
            for (let z in params.AppIdList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AppIdList[z]);
                this.AppIdList.push(obj);
            }
        }

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }

        if (params.OsList) {
            this.OsList = new Array();
            for (let z in params.OsList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.OsList[z]);
                this.OsList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of a database asset. 
 * @class
 */
class DbAssetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * CFW status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CFWStatus = null;

        /**
         * Asset ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * VPC information
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Asset type
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * Public IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Private IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * Region
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Asset name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * CFW edition
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CFWProtectLevel = null;

        /**
         * Tag information
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CFWStatus = 'CFWStatus' in params ? params.CFWStatus : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.CFWProtectLevel = 'CFWProtectLevel' in params ? params.CFWProtectLevel : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }

    }
}

/**
 * DescribePublicIpAssets request structure.
 * @class
 */
class DescribePublicIpAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * CSC tags of the asset
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * This example shows you how to list the list of cluster pods. 
 * @class
 */
class AssetClusterPod extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tenant ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Tenant UIN
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Tenant name
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * Region
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Pod ID
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * Pod name
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * Creation time of the pod
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceCreateTime = null;

        /**
         * Namespace
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Cluster ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Cluster name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Server ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MachineId = null;

        /**
         * Server name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Pod IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PodIp = null;

        /**
         * Number of associated services
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ServiceCount = null;

        /**
         * Number of associated containers
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ContainerCount = null;

        /**
         * Public IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Private IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * Whether it's a critical asset. Values: `1` (critical asset), `0` (non-critical asset)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCore = null;

        /**
         * Whether it's a newly-added asset. Values: `1` (Yes), `0` (No)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsNewAsset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.InstanceCreateTime = 'InstanceCreateTime' in params ? params.InstanceCreateTime : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.MachineId = 'MachineId' in params ? params.MachineId : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.PodIp = 'PodIp' in params ? params.PodIp : null;
        this.ServiceCount = 'ServiceCount' in params ? params.ServiceCount : null;
        this.ContainerCount = 'ContainerCount' in params ? params.ContainerCount : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.IsCore = 'IsCore' in params ? params.IsCore : null;
        this.IsNewAsset = 'IsNewAsset' in params ? params.IsNewAsset : null;

    }
}

/**
 * DescribeCVMAssetInfo request structure.
 * @class
 */
class DescribeCVMAssetInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200c-
         * @type {string || null}
         */
        this.AssetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;

    }
}

/**
 * Details of a weak password risk
 * @class
 */
class AssetViewWeakPassRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Affected assets
         * @type {string || null}
         */
        this.AffectAsset = null;

        /**
         * Risk level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Asset type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Components
         * @type {string || null}
         */
        this.Component = null;

        /**
         * Service
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Last detected 
         * @type {string || null}
         */
        this.RecentTime = null;

        /**
         * First detected
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Status of the risk. `0`: Not handled, `1`: Handled; `2`: Ignored
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Unique ID of the asset
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Frontend index
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * User AppId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * User `uin`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Weak password type
         * @type {string || null}
         */
        this.PasswordType = null;

        /**
         * Source of the task
         * @type {string || null}
         */
        this.From = null;

        /**
         * Vulnerability type
         * @type {string || null}
         */
        this.VULType = null;

        /**
         * Vulnerability URL
         * @type {string || null}
         */
        this.VULURL = null;

        /**
         * Fix suggestion
         * @type {string || null}
         */
        this.Fix = null;

        /**
         * Pay load
         * @type {string || null}
         */
        this.Payload = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AffectAsset = 'AffectAsset' in params ? params.AffectAsset : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.RecentTime = 'RecentTime' in params ? params.RecentTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.PasswordType = 'PasswordType' in params ? params.PasswordType : null;
        this.From = 'From' in params ? params.From : null;
        this.VULType = 'VULType' in params ? params.VULType : null;
        this.VULURL = 'VULURL' in params ? params.VULURL : null;
        this.Fix = 'Fix' in params ? params.Fix : null;
        this.Payload = 'Payload' in params ? params.Payload : null;

    }
}

/**
 * Details of a content risk
 * @class
 */
class WebsiteRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Affected assets
         * @type {string || null}
         */
        this.AffectAsset = null;

        /**
         * Risk level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Last detected
         * @type {string || null}
         */
        this.RecentTime = null;

        /**
         * First detected
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Status of the risk. `0`: Not handled, `1`: Handled; `2`: Ignored
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Unique ID of the asset
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Frontend index
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * User `appid`
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * User `uin`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * URL of the risk
         * @type {string || null}
         */
        this.URL = null;

        /**
         * URL of the risk file
         * @type {string || null}
         */
        this.URLPath = null;

        /**
         * Instance type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Check type.
         * @type {string || null}
         */
        this.DetectEngine = null;

        /**
         * Result description.
         * @type {string || null}
         */
        this.ResultDescribe = null;

        /**
         * Source URL
         * @type {string || null}
         */
        this.SourceURL = null;

        /**
         * Source file URL
         * @type {string || null}
         */
        this.SourceURLPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AffectAsset = 'AffectAsset' in params ? params.AffectAsset : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.RecentTime = 'RecentTime' in params ? params.RecentTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.URL = 'URL' in params ? params.URL : null;
        this.URLPath = 'URLPath' in params ? params.URLPath : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DetectEngine = 'DetectEngine' in params ? params.DetectEngine : null;
        this.ResultDescribe = 'ResultDescribe' in params ? params.ResultDescribe : null;
        this.SourceURL = 'SourceURL' in params ? params.SourceURL : null;
        this.SourceURLPath = 'SourceURLPath' in params ? params.SourceURLPath : null;

    }
}

/**
 * CreateRiskCenterScanTask request structure.
 * @class
 */
class CreateRiskCenterScanTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task name
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Values: `0` (Scan all); `1` (Scan specific assets); `2` (Scan all expect the specified assets); `3` (Custom assets). When `ScanAssetType=1/2`, `Assets` is required. When `ScanAssetType=3`, `SelfDefiningAssets` is required. 
         * @type {number || null}
         */
        this.ScanAssetType = null;

        /**
         * Project to scan: port/poc/weakpass/webcontent/configrisk/exposedserver
         * @type {Array.<string> || null}
         */
        this.ScanItem = null;

        /**
         * Task type. `0`: Scheduled task, `1`: Scan immediately; `2`: Scanned at the specified time; `3`: Custom. When ScanPlanType=0,2,3, `ScanPlanContent` is required.
         * @type {number || null}
         */
        this.ScanPlanType = null;

        /**
         * List of assets to scan
         * @type {Array.<TaskAssetObject> || null}
         */
        this.Assets = null;

        /**
         * Details of a scheduled scan task
         * @type {string || null}
         */
        this.ScanPlanContent = null;

        /**
         * IP/Domain name/URL
         * @type {Array.<string> || null}
         */
        this.SelfDefiningAssets = null;

        /**
         * Request source. Values: `vss` (Vulnerability Scan Service), `csip` (Cloud Security Center). It defaults to `vss`.
         * @type {string || null}
         */
        this.ScanFrom = null;

        /**
         * Advanced settings
         * @type {TaskAdvanceCFG || null}
         */
        this.TaskAdvanceCFG = null;

        /**
         * Scan task mode: `0` (Standard), `1` (Quick), `2` (Advanced). Default: `0`
         * @type {number || null}
         */
        this.TaskMode = null;

        /**
         * Asset tags
         * @type {AssetTag || null}
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
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ScanAssetType = 'ScanAssetType' in params ? params.ScanAssetType : null;
        this.ScanItem = 'ScanItem' in params ? params.ScanItem : null;
        this.ScanPlanType = 'ScanPlanType' in params ? params.ScanPlanType : null;

        if (params.Assets) {
            this.Assets = new Array();
            for (let z in params.Assets) {
                let obj = new TaskAssetObject();
                obj.deserialize(params.Assets[z]);
                this.Assets.push(obj);
            }
        }
        this.ScanPlanContent = 'ScanPlanContent' in params ? params.ScanPlanContent : null;
        this.SelfDefiningAssets = 'SelfDefiningAssets' in params ? params.SelfDefiningAssets : null;
        this.ScanFrom = 'ScanFrom' in params ? params.ScanFrom : null;

        if (params.TaskAdvanceCFG) {
            let obj = new TaskAdvanceCFG();
            obj.deserialize(params.TaskAdvanceCFG)
            this.TaskAdvanceCFG = obj;
        }
        this.TaskMode = 'TaskMode' in params ? params.TaskMode : null;

        if (params.Tags) {
            let obj = new AssetTag();
            obj.deserialize(params.Tags)
            this.Tags = obj;
        }

    }
}

/**
 * DescribeRiskCenterAssetViewCFGRiskList response structure.
 * @class
 */
class DescribeRiskCenterAssetViewCFGRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of configuration risks
         * @type {Array.<AssetViewCFGRisk> || null}
         */
        this.Data = null;

        /**
         * List of status
         * @type {Array.<FilterDataObject> || null}
         */
        this.StatusLists = null;

        /**
         * List of risk levels
         * @type {Array.<FilterDataObject> || null}
         */
        this.LevelLists = null;

        /**
         * List of configuration names
         * @type {Array.<FilterDataObject> || null}
         */
        this.CFGNameLists = null;

        /**
         * List of check types
         * @type {Array.<FilterDataObject> || null}
         */
        this.CheckTypeLists = null;

        /**
         * List of asset types
         * @type {Array.<FilterDataObject> || null}
         */
        this.InstanceTypeLists = null;

        /**
         * List of check source
         * @type {Array.<FilterDataObject> || null}
         */
        this.FromLists = null;

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
                let obj = new AssetViewCFGRisk();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.StatusLists) {
            this.StatusLists = new Array();
            for (let z in params.StatusLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.StatusLists[z]);
                this.StatusLists.push(obj);
            }
        }

        if (params.LevelLists) {
            this.LevelLists = new Array();
            for (let z in params.LevelLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.LevelLists[z]);
                this.LevelLists.push(obj);
            }
        }

        if (params.CFGNameLists) {
            this.CFGNameLists = new Array();
            for (let z in params.CFGNameLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.CFGNameLists[z]);
                this.CFGNameLists.push(obj);
            }
        }

        if (params.CheckTypeLists) {
            this.CheckTypeLists = new Array();
            for (let z in params.CheckTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.CheckTypeLists[z]);
                this.CheckTypeLists.push(obj);
            }
        }

        if (params.InstanceTypeLists) {
            this.InstanceTypeLists = new Array();
            for (let z in params.InstanceTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.InstanceTypeLists[z]);
                this.InstanceTypeLists.push(obj);
            }
        }

        if (params.FromLists) {
            this.FromLists = new Array();
            for (let z in params.FromLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.FromLists[z]);
                this.FromLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRiskCenterVULViewVULRiskList response structure.
 * @class
 */
class DescribeRiskCenterVULViewVULRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of vulnerabilities
         * @type {Array.<VULViewVULRisk> || null}
         */
        this.Data = null;

        /**
         * List of risk levels
         * @type {Array.<FilterDataObject> || null}
         */
        this.LevelLists = null;

        /**
         * List of check source
         * @type {Array.<FilterDataObject> || null}
         */
        this.FromLists = null;

        /**
         * List of vulnerability types
         * @type {Array.<FilterDataObject> || null}
         */
        this.VULTypeLists = null;

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
                let obj = new VULViewVULRisk();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.LevelLists) {
            this.LevelLists = new Array();
            for (let z in params.LevelLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.LevelLists[z]);
                this.LevelLists.push(obj);
            }
        }

        if (params.FromLists) {
            this.FromLists = new Array();
            for (let z in params.FromLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.FromLists[z]);
                this.FromLists.push(obj);
            }
        }

        if (params.VULTypeLists) {
            this.VULTypeLists = new Array();
            for (let z in params.VULTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.VULTypeLists[z]);
                this.VULTypeLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRiskCenterVULViewVULRiskList request structure.
 * @class
 */
class DescribeRiskCenterVULViewVULRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Advanced vulnerability scan configuration
 * @class
 */
class TaskCenterVulRiskInputParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Risk ID
         * @type {string || null}
         */
        this.RiskId = null;

        /**
         * Whether to enable. `0`: no, `1`: yes.
         * @type {number || null}
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
        this.RiskId = 'RiskId' in params ? params.RiskId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * Advanced task configuration
 * @class
 */
class TaskAdvanceCFG extends  AbstractModel {
    constructor(){
        super();

        /**
         * Advanced vulnerability scan configuration
         * @type {Array.<TaskCenterVulRiskInputParam> || null}
         */
        this.VulRisk = null;

        /**
         * Advanced weak password check configuration
         * @type {Array.<TaskCenterWeakPwdRiskInputParam> || null}
         */
        this.WeakPwdRisk = null;

        /**
         * Advanced configuration risk scan configuration
         * @type {Array.<TaskCenterCFGRiskInputParam> || null}
         */
        this.CFGRisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VulRisk) {
            this.VulRisk = new Array();
            for (let z in params.VulRisk) {
                let obj = new TaskCenterVulRiskInputParam();
                obj.deserialize(params.VulRisk[z]);
                this.VulRisk.push(obj);
            }
        }

        if (params.WeakPwdRisk) {
            this.WeakPwdRisk = new Array();
            for (let z in params.WeakPwdRisk) {
                let obj = new TaskCenterWeakPwdRiskInputParam();
                obj.deserialize(params.WeakPwdRisk[z]);
                this.WeakPwdRisk.push(obj);
            }
        }

        if (params.CFGRisk) {
            this.CFGRisk = new Array();
            for (let z in params.CFGRisk) {
                let obj = new TaskCenterCFGRiskInputParam();
                obj.deserialize(params.CFGRisk[z]);
                this.CFGRisk.push(obj);
            }
        }

    }
}

/**
 * DescribeScanTaskList response structure.
 * @class
 */
class DescribeScanTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of scan tasks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<ScanTaskInfoList> || null}
         */
        this.Data = null;

        /**
         * List of account UINs
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.UINList = null;

        /**
         * List of task modes
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.TaskModeList = null;

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
                let obj = new ScanTaskInfoList();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.UINList = 'UINList' in params ? params.UINList : null;

        if (params.TaskModeList) {
            this.TaskModeList = new Array();
            for (let z in params.TaskModeList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.TaskModeList[z]);
                this.TaskModeList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of a scan task
 * @class
 */
class ScanTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID Id
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Task status. `1`: Pending start; `2`: Scanning; `3`: Failed; `4`: Completed
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task progress
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Displayed time point
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskTime = null;

        /**
         * Report ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReportId = null;

        /**
         * Report name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReportName = null;

        /**
         * Task type. `0`: Scheduled task, `1`: Scan immediately; `2`: Scanned at the specified time; `3`: Custom. 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScanPlan = null;

        /**
         * Number of associated assets
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AssetCount = null;

        /**
         * User AppId
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User UIN
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UIN = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.TaskTime = 'TaskTime' in params ? params.TaskTime : null;
        this.ReportId = 'ReportId' in params ? params.ReportId : null;
        this.ReportName = 'ReportName' in params ? params.ReportName : null;
        this.ScanPlan = 'ScanPlan' in params ? params.ScanPlan : null;
        this.AssetCount = 'AssetCount' in params ? params.AssetCount : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.UIN = 'UIN' in params ? params.UIN : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * Server tag information
 * @class
 */
class Tags extends  AbstractModel {
    constructor(){
        super();

        /**
         * None
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * None
Note: This field may return·null, indicating that no valid values can be obtained.
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
 * Details of a vulnerability
 * @class
 */
class VULViewVULRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Affected assets
         * @type {number || null}
         */
        this.NoHandleCount = null;

        /**
         * Risk level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Components
         * @type {string || null}
         */
        this.Component = null;

        /**
         * Last detected 
         * @type {string || null}
         */
        this.RecentTime = null;

        /**
         * First detected
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Status of the risk. `0`: Not handled, `1`: Handled; `2`: Ignored
         * @type {number || null}
         */
        this.AffectAssetCount = null;

        /**
         * Unique ID of the asset
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Asset sub-category
         * @type {string || null}
         */
        this.From = null;

        /**
         * Frontend index
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Vulnerability type
         * @type {string || null}
         */
        this.VULType = null;

        /**
         * Vulnerability name
         * @type {string || null}
         */
        this.VULName = null;

        /**
         * CVE number
         * @type {string || null}
         */
        this.CVE = null;

        /**
         * Description
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * Pay load
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * Affected components
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * Reference information of the vulnerability
         * @type {string || null}
         */
        this.References = null;

        /**
         * Affected version
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * Vulnerability URL
         * @type {string || null}
         */
        this.VULURL = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * User `appid`
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User `uin`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Fix suggestion
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Fix = null;

        /**
         * Whether it's an emergency vulnerability. Values: `1` (emergency vulnerability); `0` (non-emergency vulnerability
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EMGCVulType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.NoHandleCount = 'NoHandleCount' in params ? params.NoHandleCount : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.RecentTime = 'RecentTime' in params ? params.RecentTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.AffectAssetCount = 'AffectAssetCount' in params ? params.AffectAssetCount : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.From = 'From' in params ? params.From : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.VULType = 'VULType' in params ? params.VULType : null;
        this.VULName = 'VULName' in params ? params.VULName : null;
        this.CVE = 'CVE' in params ? params.CVE : null;
        this.Describe = 'Describe' in params ? params.Describe : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.References = 'References' in params ? params.References : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.VULURL = 'VULURL' in params ? params.VULURL : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Fix = 'Fix' in params ? params.Fix : null;
        this.EMGCVulType = 'EMGCVulType' in params ? params.EMGCVulType : null;

    }
}

/**
 * Port risk details
 * @class
 */
class PortViewPortRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Affected assets
         * @type {number || null}
         */
        this.NoHandleCount = null;

        /**
         * Risk level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Network protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Components
         * @type {string || null}
         */
        this.Component = null;

        /**
         * Port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Last detected 
         * @type {string || null}
         */
        this.RecentTime = null;

        /**
         * First detected
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Suggested action. `0`: Keep as it is; `1`: Block access requests; `2`: Block the port
         * @type {number || null}
         */
        this.Suggestion = null;

        /**
         * Status of the risk. `0`: Not handled, `1`: Handled; `2`: Ignored
         * @type {string || null}
         */
        this.AffectAssetCount = null;

        /**
         * Unique ID of the asset
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Asset sub-category
         * @type {string || null}
         */
        this.From = null;

        /**
         * Data entry key
         * @type {string || null}
         */
        this.Index = null;

        /**
         * User AppId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * User `uin`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Service
         * @type {string || null}
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
        this.NoHandleCount = 'NoHandleCount' in params ? params.NoHandleCount : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RecentTime = 'RecentTime' in params ? params.RecentTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.AffectAssetCount = 'AffectAssetCount' in params ? params.AffectAssetCount : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.From = 'From' in params ? params.From : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Service = 'Service' in params ? params.Service : null;

    }
}

/**
 * DescribeClusterPodAssets request structure.
 * @class
 */
class DescribeClusterPodAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DescribeCVMAssetInfo response structure.
 * @class
 */
class DescribeCVMAssetInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200c-
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {AssetBaseInfoResponse || null}
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

        if (params.Data) {
            let obj = new AssetBaseInfoResponse();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePublicIpAssets response structure.
 * @class
 */
class DescribePublicIpAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data list
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<IpAssetListVO> || null}
         */
        this.Data = null;

        /**
         * Total number of results
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of asset locations
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.AssetLocationList = null;

        /**
         * List of IPs
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.IpTypeList = null;

        /**
         * List of regions
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.RegionList = null;

        /**
         * List of protection status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.DefenseStatusList = null;

        /**
         * List of asset types
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.AssetTypeList = null;

        /**
         * List of AppIds 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.AppIdList = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new IpAssetListVO();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.AssetLocationList) {
            this.AssetLocationList = new Array();
            for (let z in params.AssetLocationList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AssetLocationList[z]);
                this.AssetLocationList.push(obj);
            }
        }

        if (params.IpTypeList) {
            this.IpTypeList = new Array();
            for (let z in params.IpTypeList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.IpTypeList[z]);
                this.IpTypeList.push(obj);
            }
        }

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }

        if (params.DefenseStatusList) {
            this.DefenseStatusList = new Array();
            for (let z in params.DefenseStatusList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.DefenseStatusList[z]);
                this.DefenseStatusList.push(obj);
            }
        }

        if (params.AssetTypeList) {
            this.AssetTypeList = new Array();
            for (let z in params.AssetTypeList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AssetTypeList[z]);
                this.AssetTypeList.push(obj);
            }
        }

        if (params.AppIdList) {
            this.AppIdList = new Array();
            for (let z in params.AppIdList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AppIdList[z]);
                this.AppIdList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskLogURL response structure.
 * @class
 */
class DescribeTaskLogURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Temp download URL of the report
         * @type {Array.<TaskLogURL> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TaskLogURL();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDbAssetInfo request structure.
 * @class
 */
class DescribeDbAssetInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asset ID
         * @type {string || null}
         */
        this.AssetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;

    }
}

/**
 * Query filters
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Max number of returned results
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting order. Values: `asc` (ascending), `desc` (descending).
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Specify the field used for sorting
         * @type {string || null}
         */
        this.By = null;

        /**
         * Filtered columns and content
         * @type {Array.<WhereFilter> || null}
         */
        this.Filters = null;

        /**
         * Start time of the query period. 
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query period.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.By = 'By' in params ? params.By : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new WhereFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeRiskCenterWebsiteRiskList request structure.
 * @class
 */
class DescribeRiskCenterWebsiteRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Risk details
 * @class
 */
class ServerRiskSuggestion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Risk title
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Risk details
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Body = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Body = 'Body' in params ? params.Body : null;

    }
}

/**
 * DescribeSubnetAssets request structure.
 * @class
 */
class DescribeSubnetAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter parameters
         * @type {Filter || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DescribeClusterPodAssets response structure.
 * @class
 */
class DescribeClusterPodAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data list
         * @type {Array.<AssetClusterPod> || null}
         */
        this.Data = null;

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of cluster pod status
         * @type {Array.<FilterDataObject> || null}
         */
        this.PodStatusList = null;

        /**
         * List of namespaces
         * @type {Array.<FilterDataObject> || null}
         */
        this.NamespaceList = null;

        /**
         * List of regions
         * @type {Array.<FilterDataObject> || null}
         */
        this.RegionList = null;

        /**
         * List of users (AppId)
         * @type {Array.<FilterDataObject> || null}
         */
        this.AppIdList = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AssetClusterPod();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.PodStatusList) {
            this.PodStatusList = new Array();
            for (let z in params.PodStatusList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.PodStatusList[z]);
                this.PodStatusList.push(obj);
            }
        }

        if (params.NamespaceList) {
            this.NamespaceList = new Array();
            for (let z in params.NamespaceList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.NamespaceList[z]);
                this.NamespaceList.push(obj);
            }
        }

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }

        if (params.AppIdList) {
            this.AppIdList = new Array();
            for (let z in params.AppIdList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AppIdList[z]);
                this.AppIdList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of server assets
 * @class
 */
class AssetBaseInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * vpc-name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Asset name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetName = null;

        /**
         * Operating system
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Os = null;

        /**
         * Public IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * Private IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * Region
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Asset type
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * Asset ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetId = null;

        /**
         * Total number of accounts
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AccountNum = null;

        /**
         * Number of ports
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PortNum = null;

        /**
         * Number of processes
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProcessNum = null;

        /**
         * Numbernumb of software applications
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SoftApplicationNum = null;

        /**
         * Number of databases
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DatabaseNum = null;

        /**
         * Number of web applications
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WebApplicationNum = null;

        /**
         * Number of services
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ServiceNum = null;

        /**
         * Number of web frameworks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WebFrameworkNum = null;

        /**
         * Number of websites
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WebSiteNum = null;

        /**
         * Number of JAR packages
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.JarPackageNum = null;

        /**
         * Number of enabled services
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartServiceNum = null;

        /**
         * Number of scheduled tasks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScheduledTaskNum = null;

        /**
         * Number of environment variables
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EnvironmentVariableNum = null;

        /**
         * Number of kernel modules
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.KernelModuleNum = null;

        /**
         * Number of system installation packages
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SystemInstallationPackageNum = null;

        /**
         * Remaining service validity in days
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SurplusProtectDay = null;

        /**
         * Whether the CWPP agent is installed. Values: `1` (installed) and `0` (not installed)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CWPStatus = null;

        /**
         * Tags
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * Protection level
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProtectLevel = null;

        /**
         * Usage of CWPP service in days
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProtectedDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AccountNum = 'AccountNum' in params ? params.AccountNum : null;
        this.PortNum = 'PortNum' in params ? params.PortNum : null;
        this.ProcessNum = 'ProcessNum' in params ? params.ProcessNum : null;
        this.SoftApplicationNum = 'SoftApplicationNum' in params ? params.SoftApplicationNum : null;
        this.DatabaseNum = 'DatabaseNum' in params ? params.DatabaseNum : null;
        this.WebApplicationNum = 'WebApplicationNum' in params ? params.WebApplicationNum : null;
        this.ServiceNum = 'ServiceNum' in params ? params.ServiceNum : null;
        this.WebFrameworkNum = 'WebFrameworkNum' in params ? params.WebFrameworkNum : null;
        this.WebSiteNum = 'WebSiteNum' in params ? params.WebSiteNum : null;
        this.JarPackageNum = 'JarPackageNum' in params ? params.JarPackageNum : null;
        this.StartServiceNum = 'StartServiceNum' in params ? params.StartServiceNum : null;
        this.ScheduledTaskNum = 'ScheduledTaskNum' in params ? params.ScheduledTaskNum : null;
        this.EnvironmentVariableNum = 'EnvironmentVariableNum' in params ? params.EnvironmentVariableNum : null;
        this.KernelModuleNum = 'KernelModuleNum' in params ? params.KernelModuleNum : null;
        this.SystemInstallationPackageNum = 'SystemInstallationPackageNum' in params ? params.SystemInstallationPackageNum : null;
        this.SurplusProtectDay = 'SurplusProtectDay' in params ? params.SurplusProtectDay : null;
        this.CWPStatus = 'CWPStatus' in params ? params.CWPStatus : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.ProtectLevel = 'ProtectLevel' in params ? params.ProtectLevel : null;
        this.ProtectedDay = 'ProtectedDay' in params ? params.ProtectedDay : null;

    }
}

/**
 * Port risk details
 * @class
 */
class AssetViewPortRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Affected assets
         * @type {string || null}
         */
        this.AffectAsset = null;

        /**
         * Risk level
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Asset type
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Network protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Components
         * @type {string || null}
         */
        this.Component = null;

        /**
         * Service
         * @type {string || null}
         */
        this.Service = null;

        /**
         * Last detected 
         * @type {string || null}
         */
        this.RecentTime = null;

        /**
         * First detected
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Suggested action. `0`: Keep as it is; `1`: Block access requests; `2`: Block the port
         * @type {number || null}
         */
        this.Suggestion = null;

        /**
         * Status of the risk. `0`: Not handled, `1`: Handled; `2`: Ignored
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Unique ID of the asset
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Frontend index
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * User `appid`
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * User `uin`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Source of the task
         * @type {string || null}
         */
        this.From = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.AffectAsset = 'AffectAsset' in params ? params.AffectAsset : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Component = 'Component' in params ? params.Component : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.RecentTime = 'RecentTime' in params ? params.RecentTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.From = 'From' in params ? params.From : null;

    }
}

/**
 * DescribeRiskCenterPortViewPortRiskList request structure.
 * @class
 */
class DescribeRiskCenterPortViewPortRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeRiskCenterPortViewPortRiskList response structure.
 * @class
 */
class DescribeRiskCenterPortViewPortRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of port risks by assets
         * @type {Array.<PortViewPortRisk> || null}
         */
        this.Data = null;

        /**
         * List of risk levels
         * @type {Array.<FilterDataObject> || null}
         */
        this.LevelLists = null;

        /**
         * List of suggestions
         * @type {Array.<FilterDataObject> || null}
         */
        this.SuggestionLists = null;

        /**
         * List of check source
         * @type {Array.<FilterDataObject> || null}
         */
        this.FromLists = null;

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
                let obj = new PortViewPortRisk();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.LevelLists) {
            this.LevelLists = new Array();
            for (let z in params.LevelLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.LevelLists[z]);
                this.LevelLists.push(obj);
            }
        }

        if (params.SuggestionLists) {
            this.SuggestionLists = new Array();
            for (let z in params.SuggestionLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.SuggestionLists[z]);
                this.SuggestionLists.push(obj);
            }
        }

        if (params.FromLists) {
            this.FromLists = new Array();
            for (let z in params.FromLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.FromLists[z]);
                this.FromLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDomainAndIp response structure.
 * @class
 */
class DeleteDomainAndIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of deleted assets
         * @type {number || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of task IDs in the report
 * @class
 */
class ReportTaskIdList extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of task IDs
         * @type {Array.<string> || null}
         */
        this.TaskIdList = null;

        /**
         * User AppId
         * @type {string || null}
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIdList = 'TaskIdList' in params ? params.TaskIdList : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * AddNewBindRoleUser response structure.
 * @class
 */
class AddNewBindRoleUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `0`: successful. Other values: failed.
         * @type {number || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Filter conditions.
 * @class
 */
class WhereFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter item
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         *  
`1`: =; `2`: >; `3`: <; `4`: ≥; `5`: ≤; `6`: ≠;
`7`: Exact match; `9`: Fuzzy match; `13`: Non-fuzzy match; `14`: AND

         * @type {number || null}
         */
        this.OperatorType = null;

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
        this.OperatorType = 'OperatorType' in params ? params.OperatorType : null;

    }
}

/**
 * Data returned in the list of scan tasks list to display information
 * @class
 */
class ScanTaskInfoList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Start time of the task
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * CRON format
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScanPlanContent = null;

        /**
         * Task type. `0`: Scheduled task, `1`: Scan immediately; `2`: Scanned at the specified time; `3`: Custom.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * Creation time
Note: u200dThis field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * Task ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Custom list of assets to scan
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SelfDefiningAssets = null;

        /**
         * Estimated period to complete the task
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PredictTime = null;

        /**
         * Estimated completion time of the task
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PredictEndTime = null;

        /**
         * Number of reports
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReportNumber = null;

        /**
         * Number of assets
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AssetNumber = null;

        /**
         * Scanning status. `0`: (default) Not scanned; `1`: Scanning; `2`: Scan completed; `3`: Error while scanning; `4`: Scanning stopped
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScanStatus = null;

        /**
         * Task progress
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * port/poc/weakpass/webcontent/configrisk
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScanItem = null;

        /**
         * Values: `0` (Scan all); `1` (Scan specific assets); `2` (Scan all expect the specified assets); `3` (Custom assets).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScanAssetType = null;

        /**
         * VSS subtask ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VSSTaskId = null;

        /**
         * CSPM subtask ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CSPMTaskId = null;

        /**
         * CWPP vulnerability scan task IDHost missed scan subtask id
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CWPPOCId = null;

        /**
         * CWPP baseline check task ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CWPBlId = null;

        /**
         * VSS task progess
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VSSTaskProcess = null;

        /**
         * CSPM task progress
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CSPMTaskProcess = null;

        /**
         * CWPP vulnerability scan task progress
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CWPPOCProcess = null;

        /**
         * CWPP baseline check task progress
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CWPBlProcess = null;

        /**
         * 
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * Exception information
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrorInfo = null;

        /**
         * Day of the month to start the scheduled task
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartDay = null;

        /**
         * Scan frequency in days. `1`: Every day; `7`: Every seven days; `30`: Every 30 days; `0`: Scan once only
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Frequency = null;

        /**
         * Number of completed tasks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CompleteNumber = null;

        /**
         * Number of scanned assets
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CompleteAssetNumber = null;

        /**
         * Number of risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RiskCount = null;

        /**
         * Assets
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<TaskAssetObject> || null}
         */
        this.Assets = null;

        /**
         * User `Appid`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User UIN
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UIN = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Scan task mode: `0` (Standard), `1` (Quick), `2` (Advanced). 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskMode = null;

        /**
         * Source of scanning request
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScanFrom = null;

        /**
         * Whether it's a limited-time free health check. `0`: No; `1`: Yes
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsFree = null;

        /**
         * Whether the user is authorized to delete this task. `1` :Yes; `0`: No. It's available for multi-account management.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsDelete = null;

        /**
         * Source of the task. `0`: Default, `1`: Assistant; `2`: Health check
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ScanPlanContent = 'ScanPlanContent' in params ? params.ScanPlanContent : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SelfDefiningAssets = 'SelfDefiningAssets' in params ? params.SelfDefiningAssets : null;
        this.PredictTime = 'PredictTime' in params ? params.PredictTime : null;
        this.PredictEndTime = 'PredictEndTime' in params ? params.PredictEndTime : null;
        this.ReportNumber = 'ReportNumber' in params ? params.ReportNumber : null;
        this.AssetNumber = 'AssetNumber' in params ? params.AssetNumber : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.ScanItem = 'ScanItem' in params ? params.ScanItem : null;
        this.ScanAssetType = 'ScanAssetType' in params ? params.ScanAssetType : null;
        this.VSSTaskId = 'VSSTaskId' in params ? params.VSSTaskId : null;
        this.CSPMTaskId = 'CSPMTaskId' in params ? params.CSPMTaskId : null;
        this.CWPPOCId = 'CWPPOCId' in params ? params.CWPPOCId : null;
        this.CWPBlId = 'CWPBlId' in params ? params.CWPBlId : null;
        this.VSSTaskProcess = 'VSSTaskProcess' in params ? params.VSSTaskProcess : null;
        this.CSPMTaskProcess = 'CSPMTaskProcess' in params ? params.CSPMTaskProcess : null;
        this.CWPPOCProcess = 'CWPPOCProcess' in params ? params.CWPPOCProcess : null;
        this.CWPBlProcess = 'CWPBlProcess' in params ? params.CWPBlProcess : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorInfo = 'ErrorInfo' in params ? params.ErrorInfo : null;
        this.StartDay = 'StartDay' in params ? params.StartDay : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.CompleteNumber = 'CompleteNumber' in params ? params.CompleteNumber : null;
        this.CompleteAssetNumber = 'CompleteAssetNumber' in params ? params.CompleteAssetNumber : null;
        this.RiskCount = 'RiskCount' in params ? params.RiskCount : null;

        if (params.Assets) {
            this.Assets = new Array();
            for (let z in params.Assets) {
                let obj = new TaskAssetObject();
                obj.deserialize(params.Assets[z]);
                this.Assets.push(obj);
            }
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.UIN = 'UIN' in params ? params.UIN : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.TaskMode = 'TaskMode' in params ? params.TaskMode : null;
        this.ScanFrom = 'ScanFrom' in params ? params.ScanFrom : null;
        this.IsFree = 'IsFree' in params ? params.IsFree : null;
        this.IsDelete = 'IsDelete' in params ? params.IsDelete : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

    }
}

/**
 * DescribeDbAssets request structure.
 * @class
 */
class DescribeDbAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200c-
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Asset types. Values: MYSQL/MARIADB/REDIS/MONGODB/POSTGRES/CTS/ES/KAFKA/COS/CBS/CFS
         * @type {Array.<string> || null}
         */
        this.AssetTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.AssetTypes = 'AssetTypes' in params ? params.AssetTypes : null;

    }
}

/**
 * Task report information
 * @class
 */
class TaskLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Report name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskLogName = null;

        /**
         * Report ID.
         * @type {string || null}
         */
        this.TaskLogId = null;

        /**
         * Number of associated assets
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AssetsNumber = null;

        /**
         * Number of risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RiskNumber = null;

        /**
         * Report generation time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Task status. `0`: Initial value; `1`: Scanning; `2`: Completed; `3`: Failed; `4`: Stopped; `5`: Paused; `6`: Retried
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Name of the associated task
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * Scan start time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Scan task ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskCenterTaskId = null;

        /**
         * User AppId
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User UIN
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UIN = null;

        /**
         * User name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Report type: `1`: Health check report; `2`: Daily report; `3`: Weekly report; `4`: Monthly report
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReportType = null;

        /**
         * Report template ID
Note: This field may return·null, indicating that no valid values can be obtained.
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
        this.TaskLogName = 'TaskLogName' in params ? params.TaskLogName : null;
        this.TaskLogId = 'TaskLogId' in params ? params.TaskLogId : null;
        this.AssetsNumber = 'AssetsNumber' in params ? params.AssetsNumber : null;
        this.RiskNumber = 'RiskNumber' in params ? params.RiskNumber : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskCenterTaskId = 'TaskCenterTaskId' in params ? params.TaskCenterTaskId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.UIN = 'UIN' in params ? params.UIN : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * CreateDomainAndIp response structure.
 * @class
 */
class CreateDomainAndIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of created assets
         * @type {number || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRiskCenterAssetViewVULRiskList request structure.
 * @class
 */
class DescribeRiskCenterAssetViewVULRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Advanced configuration risk scan configuration
 * @class
 */
class TaskCenterCFGRiskInputParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Check item ID
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * Whether to enable. `0`: no, `1`: yes.
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * Resource type
         * @type {string || null}
         */
        this.ResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * CreateDomainAndIp request structure.
 * @class
 */
class CreateDomainAndIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public IP/domain name
         * @type {Array.<string> || null}
         */
        this.Content = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
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
        this.Content = 'Content' in params ? params.Content : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Domain assets 
 * @class
 */
class DomainAssetVO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asset ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AssetId = null;

        /**
         * Asset name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AssetName = null;

        /**
         * Asset type
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.AssetType = null;

        /**
         * Region
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Region = null;

        /**
         * WAF status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WAFStatus = null;

        /**
         * Asset creation time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AssetCreateTime = null;

        /**
         * Appid
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Account ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Account name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * Whether it's a critical asset
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCore = null;

        /**
         * Whether it's a cloud asset
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsCloud = null;

        /**
         * Network attacks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Attack = null;

        /**
         * Network access
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Access = null;

        /**
         * Network interception
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Intercept = null;

        /**
         * Inbound peak bandwidth
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InBandwidth = null;

        /**
         * Outbound peak bandwidth
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutBandwidth = null;

        /**
         * Total inbound traffic
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InFlow = null;

        /**
         * Total outbound traffic
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutFlow = null;

        /**
         * Last scan time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * Port risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PortRisk = null;

        /**
         * Vulnerabilities
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VulnerabilityRisk = null;

        /**
         * Configuration risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ConfigurationRisk = null;

        /**
         * Scan tasks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ScanTask = null;

        /**
         * Domain name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Resolved IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SeverIp = null;

        /**
         * Bot access requests
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BotCount = null;

        /**
         * Weak password risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WeakPassword = null;

        /**
         * Content risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WebContentRisk = null;

        /**
         * Tags
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * The type of associated instances.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * Member ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * CC attacks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CCAttack = null;

        /**
         * Web attack
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.WebAttack = null;

        /**
         * Services exposed to risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ServiceRisk = null;

        /**
         * Whether it's a newly-added asset. Values: `1` (Yes), `0` (No)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsNewAsset = null;

        /**
         * Random third-level domain name of the asset pending ownership verification
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyDomain = null;

        /**
         * TXT record of the asset pending ownership verification
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyTXTRecord = null;

        /**
         * Ownership verification status of the asset. `0`: Pending verification; `1`: Verified; `2`: Verifying; `3`: TXT record verification failed; `4`: Human verification failed.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VerifyStatus = null;

        /**
         * Bot access data
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BotAccessCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssetId = 'AssetId' in params ? params.AssetId : null;
        this.AssetName = 'AssetName' in params ? params.AssetName : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.WAFStatus = 'WAFStatus' in params ? params.WAFStatus : null;
        this.AssetCreateTime = 'AssetCreateTime' in params ? params.AssetCreateTime : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.IsCore = 'IsCore' in params ? params.IsCore : null;
        this.IsCloud = 'IsCloud' in params ? params.IsCloud : null;
        this.Attack = 'Attack' in params ? params.Attack : null;
        this.Access = 'Access' in params ? params.Access : null;
        this.Intercept = 'Intercept' in params ? params.Intercept : null;
        this.InBandwidth = 'InBandwidth' in params ? params.InBandwidth : null;
        this.OutBandwidth = 'OutBandwidth' in params ? params.OutBandwidth : null;
        this.InFlow = 'InFlow' in params ? params.InFlow : null;
        this.OutFlow = 'OutFlow' in params ? params.OutFlow : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.PortRisk = 'PortRisk' in params ? params.PortRisk : null;
        this.VulnerabilityRisk = 'VulnerabilityRisk' in params ? params.VulnerabilityRisk : null;
        this.ConfigurationRisk = 'ConfigurationRisk' in params ? params.ConfigurationRisk : null;
        this.ScanTask = 'ScanTask' in params ? params.ScanTask : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.SeverIp = 'SeverIp' in params ? params.SeverIp : null;
        this.BotCount = 'BotCount' in params ? params.BotCount : null;
        this.WeakPassword = 'WeakPassword' in params ? params.WeakPassword : null;
        this.WebContentRisk = 'WebContentRisk' in params ? params.WebContentRisk : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.CCAttack = 'CCAttack' in params ? params.CCAttack : null;
        this.WebAttack = 'WebAttack' in params ? params.WebAttack : null;
        this.ServiceRisk = 'ServiceRisk' in params ? params.ServiceRisk : null;
        this.IsNewAsset = 'IsNewAsset' in params ? params.IsNewAsset : null;
        this.VerifyDomain = 'VerifyDomain' in params ? params.VerifyDomain : null;
        this.VerifyTXTRecord = 'VerifyTXTRecord' in params ? params.VerifyTXTRecord : null;
        this.VerifyStatus = 'VerifyStatus' in params ? params.VerifyStatus : null;
        this.BotAccessCount = 'BotAccessCount' in params ? params.BotAccessCount : null;

    }
}

/**
 * DescribeSearchBugInfo response structure.
 * @class
 */
class DescribeSearchBugInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability and asset information
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {DataSearchBug || null}
         */
        this.Data = null;

        /**
         * Status code. Valid values: 0: successful; others: failed.
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * Status message. Valid values: success: successful query; fail: failed query.
         * @type {string || null}
         */
        this.ReturnMsg = null;

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

        if (params.Data) {
            let obj = new DataSearchBug();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskLogList response structure.
 * @class
 */
class DescribeTaskLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of reports
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<TaskLogInfo> || null}
         */
        this.Data = null;

        /**
         * Number of reports pending viewed
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NotViewNumber = null;

        /**
         * Number of report templates
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReportTemplateNumber = null;

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
                let obj = new TaskLogInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.NotViewNumber = 'NotViewNumber' in params ? params.NotViewNumber : null;
        this.ReportTemplateNumber = 'ReportTemplateNumber' in params ? params.ReportTemplateNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Vulnerability details
 * @class
 */
class BugInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the query action. `1`: Query emergency vulnerabilities; `2`: Query all vulnerabilities; `3`: Query a specific vulnerability. When `Id=3`, `CVEId` is required. 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * POC ID of the vulnerability
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PatchId = null;

        /**
         * Vulnerability name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VULName = null;

        /**
         * Vulnerability severity: `high`, `middle`, `low`, `info`
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Level = null;

        /**
         * CVSS score
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CVSSScore = null;

        /**
         * CVE number
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CVEId = null;

        /**
         * Vulnerability tag
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * Vulnerability category: `1`: Web application vulnerabilities, `2`: System component vulnerabilities, `3`: Configuration risks
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VULCategory = null;

        /**
         * Operating systems affected by the vulnerability 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImpactOs = null;

        /**
         * Components affected by the vulnerability 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImpactCOMPENT = null;

        /**
         * Versions affected by the vulnerability
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ImpactVersion = null;

        /**
         * Reference information of the vulnerability
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * Vulnerability description
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VULDescribe = null;

        /**
         * Fix suggestion
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Fix = null;

        /**
         * Product support status. The real-time status is returned.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProSupport = null;

        /**
         * Published or not, `0`: Not published; `1`: Published.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsPublish = null;

        /**
         * Release time
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReleaseTime = null;

        /**
         * Creation time
Note: u200dThis field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Sub-category of the vulnerability
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubCategory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.PatchId = 'PatchId' in params ? params.PatchId : null;
        this.VULName = 'VULName' in params ? params.VULName : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.CVSSScore = 'CVSSScore' in params ? params.CVSSScore : null;
        this.CVEId = 'CVEId' in params ? params.CVEId : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.VULCategory = 'VULCategory' in params ? params.VULCategory : null;
        this.ImpactOs = 'ImpactOs' in params ? params.ImpactOs : null;
        this.ImpactCOMPENT = 'ImpactCOMPENT' in params ? params.ImpactCOMPENT : null;
        this.ImpactVersion = 'ImpactVersion' in params ? params.ImpactVersion : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.VULDescribe = 'VULDescribe' in params ? params.VULDescribe : null;
        this.Fix = 'Fix' in params ? params.Fix : null;
        this.ProSupport = 'ProSupport' in params ? params.ProSupport : null;
        this.IsPublish = 'IsPublish' in params ? params.IsPublish : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.SubCategory = 'SubCategory' in params ? params.SubCategory : null;

    }
}

/**
 * DescribeDomainAssets response structure.
 * @class
 */
class DescribeDomainAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200c-
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * u200c-
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<DomainAssetVO> || null}
         */
        this.Data = null;

        /**
         * List of protection status
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.DefenseStatusList = null;

        /**
         * List of asset locations
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.AssetLocationList = null;

        /**
         * List of asset types
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.SourceTypeList = null;

        /**
         * List of regions
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.RegionList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DomainAssetVO();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.DefenseStatusList) {
            this.DefenseStatusList = new Array();
            for (let z in params.DefenseStatusList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.DefenseStatusList[z]);
                this.DefenseStatusList.push(obj);
            }
        }

        if (params.AssetLocationList) {
            this.AssetLocationList = new Array();
            for (let z in params.AssetLocationList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AssetLocationList[z]);
                this.AssetLocationList.push(obj);
            }
        }

        if (params.SourceTypeList) {
            this.SourceTypeList = new Array();
            for (let z in params.SourceTypeList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.SourceTypeList[z]);
                this.SourceTypeList.push(obj);
            }
        }

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDbAssets response structure.
 * @class
 */
class DescribeDbAssetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of results
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Total of assets
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<DBAssetVO> || null}
         */
        this.Data = null;

        /**
         * List of regions
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.RegionList = null;

        /**
         * List of asset types
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.AssetTypeList = null;

        /**
         * List of VPCs
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.VpcList = null;

        /**
         * List of users (AppId)
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<FilterDataObject> || null}
         */
        this.AppIdList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DBAssetVO();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }

        if (params.AssetTypeList) {
            this.AssetTypeList = new Array();
            for (let z in params.AssetTypeList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AssetTypeList[z]);
                this.AssetTypeList.push(obj);
            }
        }

        if (params.VpcList) {
            this.VpcList = new Array();
            for (let z in params.VpcList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.VpcList[z]);
                this.VpcList.push(obj);
            }
        }

        if (params.AppIdList) {
            this.AppIdList = new Array();
            for (let z in params.AppIdList) {
                let obj = new FilterDataObject();
                obj.deserialize(params.AppIdList[z]);
                this.AppIdList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRiskCenterAssetViewVULRiskList response structure.
 * @class
 */
class DescribeRiskCenterAssetViewVULRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of vulnerabilities
         * @type {Array.<AssetViewVULRisk> || null}
         */
        this.Data = null;

        /**
         * List of status
         * @type {Array.<FilterDataObject> || null}
         */
        this.StatusLists = null;

        /**
         * List of risk levels
         * @type {Array.<FilterDataObject> || null}
         */
        this.LevelLists = null;

        /**
         * List of check source
         * @type {Array.<FilterDataObject> || null}
         */
        this.FromLists = null;

        /**
         * List of vulnerability types
         * @type {Array.<FilterDataObject> || null}
         */
        this.VULTypeLists = null;

        /**
         * List of asset types
         * @type {Array.<FilterDataObject> || null}
         */
        this.InstanceTypeLists = null;

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
                let obj = new AssetViewVULRisk();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.StatusLists) {
            this.StatusLists = new Array();
            for (let z in params.StatusLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.StatusLists[z]);
                this.StatusLists.push(obj);
            }
        }

        if (params.LevelLists) {
            this.LevelLists = new Array();
            for (let z in params.LevelLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.LevelLists[z]);
                this.LevelLists.push(obj);
            }
        }

        if (params.FromLists) {
            this.FromLists = new Array();
            for (let z in params.FromLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.FromLists[z]);
                this.FromLists.push(obj);
            }
        }

        if (params.VULTypeLists) {
            this.VULTypeLists = new Array();
            for (let z in params.VULTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.VULTypeLists[z]);
                this.VULTypeLists.push(obj);
            }
        }

        if (params.InstanceTypeLists) {
            this.InstanceTypeLists = new Array();
            for (let z in params.InstanceTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.InstanceTypeLists[z]);
                this.InstanceTypeLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCVMAssets request structure.
 * @class
 */
class DescribeCVMAssetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200c-
         * @type {Filter || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DescribeRiskCenterServerRiskList request structure.
 * @class
 */
class DescribeRiskCenterServerRiskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

        /**
         * Asset tags
         * @type {Array.<AssetTag> || null}
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

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new AssetTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * CLB instance and listener information
 * @class
 */
class ClbListenerListInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * The listener name.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Load balancer ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CLB instance name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Network protocol
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Region
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * CLB instance IP
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Port
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * Availability zone
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * VPC ID
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NumericalVpcId = null;

        /**
         * CLB instance type
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * Listener domain name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Load balancer domain name
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LoadBalancerDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NumericalVpcId = 'NumericalVpcId' in params ? params.NumericalVpcId : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LoadBalancerDomain = 'LoadBalancerDomain' in params ? params.LoadBalancerDomain : null;

    }
}

/**
 * DescribeRiskCenterServerRiskList response structure.
 * @class
 */
class DescribeRiskCenterServerRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of services in risk
         * @type {Array.<ServerRisk> || null}
         */
        this.Data = null;

        /**
         * List of asset types
         * @type {Array.<FilterDataObject> || null}
         */
        this.InstanceTypeLists = null;

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
                let obj = new ServerRisk();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.InstanceTypeLists) {
            this.InstanceTypeLists = new Array();
            for (let z in params.InstanceTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.InstanceTypeLists[z]);
                this.InstanceTypeLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListenerList request structure.
 * @class
 */
class DescribeListenerListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * u200c-
         * @type {Filter || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DeleteRiskScanTask response structure.
 * @class
 */
class DeleteRiskScanTaskResponse extends  AbstractModel {
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
 * ModifyRiskCenterRiskStatus response structure.
 * @class
 */
class ModifyRiskCenterRiskStatusResponse extends  AbstractModel {
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
 * DescribeTaskLogList request structure.
 * @class
 */
class DescribeTaskLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions
         * @type {Filter || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            let obj = new Filter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DescribeRiskCenterAssetViewPortRiskList response structure.
 * @class
 */
class DescribeRiskCenterAssetViewPortRiskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of configuration risks
         * @type {Array.<AssetViewPortRisk> || null}
         */
        this.Data = null;

        /**
         * List of status
         * @type {Array.<FilterDataObject> || null}
         */
        this.StatusLists = null;

        /**
         * List of risk levels
         * @type {Array.<FilterDataObject> || null}
         */
        this.LevelLists = null;

        /**
         * List of fix suggestions 
         * @type {Array.<FilterDataObject> || null}
         */
        this.SuggestionLists = null;

        /**
         * List of asset types
         * @type {Array.<FilterDataObject> || null}
         */
        this.InstanceTypeLists = null;

        /**
         * List of check source
         * @type {Array.<FilterDataObject> || null}
         */
        this.FromLists = null;

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
                let obj = new AssetViewPortRisk();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.StatusLists) {
            this.StatusLists = new Array();
            for (let z in params.StatusLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.StatusLists[z]);
                this.StatusLists.push(obj);
            }
        }

        if (params.LevelLists) {
            this.LevelLists = new Array();
            for (let z in params.LevelLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.LevelLists[z]);
                this.LevelLists.push(obj);
            }
        }

        if (params.SuggestionLists) {
            this.SuggestionLists = new Array();
            for (let z in params.SuggestionLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.SuggestionLists[z]);
                this.SuggestionLists.push(obj);
            }
        }

        if (params.InstanceTypeLists) {
            this.InstanceTypeLists = new Array();
            for (let z in params.InstanceTypeLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.InstanceTypeLists[z]);
                this.InstanceTypeLists.push(obj);
            }
        }

        if (params.FromLists) {
            this.FromLists = new Array();
            for (let z in params.FromLists) {
                let obj = new FilterDataObject();
                obj.deserialize(params.FromLists[z]);
                this.FromLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskLogURL request structure.
 * @class
 */
class DescribeTaskLogURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the task. `0`: Preview; `1`: Download
         * @type {number || null}
         */
        this.Type = null;

        /**
         * List of task report IDs
         * @type {Array.<ReportItemKey> || null}
         */
        this.ReportItemKeyList = null;

        /**
         * List of task IDs in the report
         * @type {Array.<ReportTaskIdList> || null}
         */
        this.ReportTaskIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.ReportItemKeyList) {
            this.ReportItemKeyList = new Array();
            for (let z in params.ReportItemKeyList) {
                let obj = new ReportItemKey();
                obj.deserialize(params.ReportItemKeyList[z]);
                this.ReportItemKeyList.push(obj);
            }
        }

        if (params.ReportTaskIdList) {
            this.ReportTaskIdList = new Array();
            for (let z in params.ReportTaskIdList) {
                let obj = new ReportTaskIdList();
                obj.deserialize(params.ReportTaskIdList[z]);
                this.ReportTaskIdList.push(obj);
            }
        }

    }
}

module.exports = {
    DescribeDbAssetInfoResponse: DescribeDbAssetInfoResponse,
    DeleteRiskScanTaskRequest: DeleteRiskScanTaskRequest,
    DescribeRiskCenterAssetViewWeakPasswordRiskListResponse: DescribeRiskCenterAssetViewWeakPasswordRiskListResponse,
    DescribeVULRiskAdvanceCFGListResponse: DescribeVULRiskAdvanceCFGListResponse,
    TaskCenterWeakPwdRiskInputParam: TaskCenterWeakPwdRiskInputParam,
    ModifyRiskCenterRiskStatusRequest: ModifyRiskCenterRiskStatusRequest,
    ReportItemKey: ReportItemKey,
    CVMAssetVO: CVMAssetVO,
    AssetViewCFGRisk: AssetViewCFGRisk,
    AssetViewVULRisk: AssetViewVULRisk,
    DescribeScanReportListRequest: DescribeScanReportListRequest,
    DescribeVpcAssetsResponse: DescribeVpcAssetsResponse,
    Vpc: Vpc,
    VULRiskAdvanceCFGList: VULRiskAdvanceCFGList,
    StopRiskCenterTaskRequest: StopRiskCenterTaskRequest,
    DataSearchBug: DataSearchBug,
    AssetTag: AssetTag,
    RiskCenterStatusKey: RiskCenterStatusKey,
    DescribeVULRiskAdvanceCFGListRequest: DescribeVULRiskAdvanceCFGListRequest,
    DescribeRiskCenterAssetViewCFGRiskListRequest: DescribeRiskCenterAssetViewCFGRiskListRequest,
    DescribeDomainAssetsRequest: DescribeDomainAssetsRequest,
    Tag: Tag,
    DeleteDomainAndIpRequest: DeleteDomainAndIpRequest,
    DescribeScanTaskListRequest: DescribeScanTaskListRequest,
    TaskIdListKey: TaskIdListKey,
    DescribeRiskCenterWebsiteRiskListResponse: DescribeRiskCenterWebsiteRiskListResponse,
    DescribeScanReportListResponse: DescribeScanReportListResponse,
    DescribeSearchBugInfoRequest: DescribeSearchBugInfoRequest,
    TaskLogURL: TaskLogURL,
    AddNewBindRoleUserRequest: AddNewBindRoleUserRequest,
    DescribeListenerListResponse: DescribeListenerListResponse,
    DBAssetVO: DBAssetVO,
    AssetInfoDetail: AssetInfoDetail,
    SubnetAsset: SubnetAsset,
    CreateRiskCenterScanTaskResponse: CreateRiskCenterScanTaskResponse,
    DescribeSubnetAssetsResponse: DescribeSubnetAssetsResponse,
    DescribeRiskCenterAssetViewPortRiskListRequest: DescribeRiskCenterAssetViewPortRiskListRequest,
    StopRiskCenterTaskResponse: StopRiskCenterTaskResponse,
    ServerRisk: ServerRisk,
    TaskAssetObject: TaskAssetObject,
    IpAssetListVO: IpAssetListVO,
    FilterDataObject: FilterDataObject,
    DescribeVpcAssetsRequest: DescribeVpcAssetsRequest,
    DescribeRiskCenterAssetViewWeakPasswordRiskListRequest: DescribeRiskCenterAssetViewWeakPasswordRiskListRequest,
    PublicIpDomainListKey: PublicIpDomainListKey,
    DescribeCVMAssetsResponse: DescribeCVMAssetsResponse,
    DbAssetInfo: DbAssetInfo,
    DescribePublicIpAssetsRequest: DescribePublicIpAssetsRequest,
    AssetClusterPod: AssetClusterPod,
    DescribeCVMAssetInfoRequest: DescribeCVMAssetInfoRequest,
    AssetViewWeakPassRisk: AssetViewWeakPassRisk,
    WebsiteRisk: WebsiteRisk,
    CreateRiskCenterScanTaskRequest: CreateRiskCenterScanTaskRequest,
    DescribeRiskCenterAssetViewCFGRiskListResponse: DescribeRiskCenterAssetViewCFGRiskListResponse,
    DescribeRiskCenterVULViewVULRiskListResponse: DescribeRiskCenterVULViewVULRiskListResponse,
    DescribeRiskCenterVULViewVULRiskListRequest: DescribeRiskCenterVULViewVULRiskListRequest,
    TaskCenterVulRiskInputParam: TaskCenterVulRiskInputParam,
    TaskAdvanceCFG: TaskAdvanceCFG,
    DescribeScanTaskListResponse: DescribeScanTaskListResponse,
    ScanTaskInfo: ScanTaskInfo,
    Tags: Tags,
    VULViewVULRisk: VULViewVULRisk,
    PortViewPortRisk: PortViewPortRisk,
    DescribeClusterPodAssetsRequest: DescribeClusterPodAssetsRequest,
    DescribeCVMAssetInfoResponse: DescribeCVMAssetInfoResponse,
    DescribePublicIpAssetsResponse: DescribePublicIpAssetsResponse,
    DescribeTaskLogURLResponse: DescribeTaskLogURLResponse,
    DescribeDbAssetInfoRequest: DescribeDbAssetInfoRequest,
    Filter: Filter,
    DescribeRiskCenterWebsiteRiskListRequest: DescribeRiskCenterWebsiteRiskListRequest,
    ServerRiskSuggestion: ServerRiskSuggestion,
    DescribeSubnetAssetsRequest: DescribeSubnetAssetsRequest,
    DescribeClusterPodAssetsResponse: DescribeClusterPodAssetsResponse,
    AssetBaseInfoResponse: AssetBaseInfoResponse,
    AssetViewPortRisk: AssetViewPortRisk,
    DescribeRiskCenterPortViewPortRiskListRequest: DescribeRiskCenterPortViewPortRiskListRequest,
    DescribeRiskCenterPortViewPortRiskListResponse: DescribeRiskCenterPortViewPortRiskListResponse,
    DeleteDomainAndIpResponse: DeleteDomainAndIpResponse,
    ReportTaskIdList: ReportTaskIdList,
    AddNewBindRoleUserResponse: AddNewBindRoleUserResponse,
    WhereFilter: WhereFilter,
    ScanTaskInfoList: ScanTaskInfoList,
    DescribeDbAssetsRequest: DescribeDbAssetsRequest,
    TaskLogInfo: TaskLogInfo,
    CreateDomainAndIpResponse: CreateDomainAndIpResponse,
    DescribeRiskCenterAssetViewVULRiskListRequest: DescribeRiskCenterAssetViewVULRiskListRequest,
    TaskCenterCFGRiskInputParam: TaskCenterCFGRiskInputParam,
    CreateDomainAndIpRequest: CreateDomainAndIpRequest,
    DomainAssetVO: DomainAssetVO,
    DescribeSearchBugInfoResponse: DescribeSearchBugInfoResponse,
    DescribeTaskLogListResponse: DescribeTaskLogListResponse,
    BugInfoDetail: BugInfoDetail,
    DescribeDomainAssetsResponse: DescribeDomainAssetsResponse,
    DescribeDbAssetsResponse: DescribeDbAssetsResponse,
    DescribeRiskCenterAssetViewVULRiskListResponse: DescribeRiskCenterAssetViewVULRiskListResponse,
    DescribeCVMAssetsRequest: DescribeCVMAssetsRequest,
    DescribeRiskCenterServerRiskListRequest: DescribeRiskCenterServerRiskListRequest,
    ClbListenerListInfo: ClbListenerListInfo,
    DescribeRiskCenterServerRiskListResponse: DescribeRiskCenterServerRiskListResponse,
    DescribeListenerListRequest: DescribeListenerListRequest,
    DeleteRiskScanTaskResponse: DeleteRiskScanTaskResponse,
    ModifyRiskCenterRiskStatusResponse: ModifyRiskCenterRiskStatusResponse,
    DescribeTaskLogListRequest: DescribeTaskLogListRequest,
    DescribeRiskCenterAssetViewPortRiskListResponse: DescribeRiskCenterAssetViewPortRiskListResponse,
    DescribeTaskLogURLRequest: DescribeTaskLogURLRequest,

}
