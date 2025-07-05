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
 * ModifyAutoOpenProVersionConfig request structure.
 * @class
 */
class ModifyAutoOpenProVersionConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto-Activation status.
<li>CLOSE: disabled</li>
<li>OPEN: enabled</li>
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeProcessTaskStatus response structure.
 * @class
 */
class DescribeProcessTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status.
<li>COMPLETE: completed (at this point, you can call the `DescribeProcesses` API to get the list of real-time processes)</li>
<li>AGENT_OFFLINE: CWP agent is offline</li>
<li>COLLECTING: getting process</li>
<li>FAILED: failed to get processes</li>
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmAttribute response structure.
 * @class
 */
class DescribeAlarmAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP deactivation alarm status:
<li>OPEN: alarm enabled</li>
<li>CLOSE: alarm disabled</li>
         * @type {string || null}
         */
        this.Offline = null;

        /**
         * Trojan discovery alarm status:
<li>OPEN: alarm enabled</li>
<li>CLOSE: alarm disabled</li>
         * @type {string || null}
         */
        this.Malware = null;

        /**
         * Unusual login location discovery alarm status:
<li>OPEN: alarm enabled</li>
<li>CLOSE: alarm disabled</li>
         * @type {string || null}
         */
        this.NonlocalLogin = null;

        /**
         * Brute force attack success alarm status:
<li>OPEN: alarm enabled</li>
<li>CLOSE: alarm disabled</li>
         * @type {string || null}
         */
        this.CrackSuccess = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offline = 'Offline' in params ? params.Offline : null;
        this.Malware = 'Malware' in params ? params.Malware : null;
        this.NonlocalLogin = 'NonlocalLogin' in params ? params.NonlocalLogin : null;
        this.CrackSuccess = 'CrackSuccess' in params ? params.CrackSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWeeklyReportBruteAttacks response structure.
 * @class
 */
class DescribeWeeklyReportBruteAttacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Brute force attack array in weekly CWP Pro report.
         * @type {Array.<WeeklyReportBruteAttack> || null}
         */
        this.WeeklyReportBruteAttacks = null;

        /**
         * Total number of records.
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

        if (params.WeeklyReportBruteAttacks) {
            this.WeeklyReportBruteAttacks = new Array();
            for (let z in params.WeeklyReportBruteAttacks) {
                let obj = new WeeklyReportBruteAttack();
                obj.deserialize(params.WeeklyReportBruteAttacks[z]);
                this.WeeklyReportBruteAttacks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentVuls request structure.
 * @class
 */
class DescribeAgentVulsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability type.
<li>WEB: web application vulnerability</li>
<li>SYSTEM: system component vulnerability</li>
<li>BASELINE: security baseline</li>
         * @type {string || null}
         */
        this.VulType = null;

        /**
         * Agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Status - String - Required: No - Filter by status (UN_OPERATED: to be processed, FIXED: fixed)
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
        this.VulType = 'VulType' in params ? params.VulType : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
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
 * AddMachineTag response structure.
 * @class
 */
class AddMachineTagResponse extends  AbstractModel {
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
 * Usual login location
 * @class
 */
class UsualPlace extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * CWP agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Country/Region ID.
         * @type {number || null}
         */
        this.CountryId = null;

        /**
         * Province/State ID.
         * @type {number || null}
         */
        this.ProvinceId = null;

        /**
         * City ID.
         * @type {number || null}
         */
        this.CityId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.CountryId = 'CountryId' in params ? params.CountryId : null;
        this.ProvinceId = 'ProvinceId' in params ? params.ProvinceId : null;
        this.CityId = 'CityId' in params ? params.CityId : null;

    }
}

/**
 * DescribeAccounts request structure.
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`. Either `Username` or `Uuid` must be specified. If `Uuid` is specified, it indicates to query the information list under the specified server.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * CWP agent `Uuid`. Either `Username` or `Uuid` must be specified. If `Username` is specified, it indicates to query the information list under the specified username.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Username - String - Required: No - Account name</li>
<li>Privilege - String - Required: No - Account name (ORDINARY: ordinary account, SUPPER: super admin account)</li>
<li>MachineIp - String - Required: No - Private IP of server</li>
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Username = 'Username' in params ? params.Username : null;
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
 * Vulnerability data in weekly CWP Pro report.
 * @class
 */
class WeeklyReportVul extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private IP of server.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Vulnerability name.
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * Vulnerability type.
<li> WEB: web vulnerability</li>
<li> SYSTEM: system component vulnerability</li>
<li> BASELINE: security baseline</li>
         * @type {string || null}
         */
        this.VulType = null;

        /**
         * Vulnerability description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Vulnerability status.
<li> UN_OPERATED: to be processed</li>
<li> SCANING: scanning</li>
<li> FIXED: fixed</li>
         * @type {string || null}
         */
        this.VulStatus = null;

        /**
         * Last scanned time.
         * @type {string || null}
         */
        this.LastScanTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.VulType = 'VulType' in params ? params.VulType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VulStatus = 'VulStatus' in params ? params.VulStatus : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;

    }
}

/**
 * DescribeWeeklyReportBruteAttacks request structure.
 * @class
 */
class DescribeWeeklyReportBruteAttacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Weekly CWP Pro report start time.
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
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
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateUsualLoginPlaces request structure.
 * @class
 */
class CreateUsualLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `UUID` array.
         * @type {Array.<string> || null}
         */
        this.Uuids = null;

        /**
         * Login region information array.
         * @type {Array.<Place> || null}
         */
        this.Places = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuids = 'Uuids' in params ? params.Uuids : null;

        if (params.Places) {
            this.Places = new Array();
            for (let z in params.Places) {
                let obj = new Place();
                obj.deserialize(params.Places[z]);
                this.Places.push(obj);
            }
        }

    }
}

/**
 * DescribeProcessTaskStatus request structure.
 * @class
 */
class DescribeProcessTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * Region information
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region, such as `ap-guangzhou`, `ap-shanghai` and `ap-beijing`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region name, such as `South China (Guangzhou)`, `East China (Shanghai)`, and `North China (Beijing)`
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region code, such as `gz`, `sh`, and `bj`
         * @type {string || null}
         */
        this.RegionCode = null;

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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionCode = 'RegionCode' in params ? params.RegionCode : null;

    }
}

/**
 * ModifyAlarmAttribute request structure.
 * @class
 */
class ModifyAlarmAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm item.
<li>Offline: CWP is offline</li>
<li>Malware: trojan event</li>
<li>NonlocalLogin: unusual login location discovered</li>
<li>CrackSuccess: brute force attack succeeded</li>
         * @type {string || null}
         */
        this.Attribute = null;

        /**
         * Alarm item attributes.
<li>CLOSE: disabled</li>
<li>OPEN: enabled</li>
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
        this.Attribute = 'Attribute' in params ? params.Attribute : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Component statistics.
 * @class
 */
class ComponentStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Number of servers.
         * @type {number || null}
         */
        this.MachineNum = null;

        /**
         * Component name.
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * Component type.
<li>WEB: web component</li>
<li>SYSTEM: system component</li>
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * Component description.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ExportMalwares request structure.
 * @class
 */
class ExportMalwaresRequest extends  AbstractModel {
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
 * DescribeProcesses response structure.
 * @class
 */
class DescribeProcessesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records in process list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Process list data array.
         * @type {Array.<Process> || null}
         */
        this.Processes = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Processes) {
            this.Processes = new Array();
            for (let z in params.Processes) {
                let obj = new Process();
                obj.deserialize(params.Processes[z]);
                this.Processes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Trojan data in weekly CWP Pro report.
 * @class
 */
class WeeklyReportMalware extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Trojan file path.
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * Trojan file MD5 value.
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * Trojan discovery time.
         * @type {string || null}
         */
        this.FindTime = null;

        /**
         * Current trojan status.
<li>UN_OPERATED: not processed</li>
<li>SEGREGATED: isolated</li>
<li>TRUSTED: trusted</li>
<li>SEPARATING: isolating</li>
<li>RECOVERING: recovering</li>
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
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.FindTime = 'FindTime' in params ? params.FindTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeBruteAttacks request structure.
 * @class
 */
class DescribeBruteAttacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Keywords - String - Required: No - Query keywords</li>
<li>Status - String - Required: No - Query status (FAILED: brute force attack failed, SUCCESS: brute force attack succeeded)</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSecurityTrends request structure.
 * @class
 */
class DescribeSecurityTrendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time.
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * End time.
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * Account list information.
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * CWP agent `Uuid`
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Private IP of server.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Account name.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Account group.
         * @type {string || null}
         */
        this.Groups = null;

        /**
         * Account type.
<li>ORDINARY: ordinary account</li>
<li>SUPPER: super admin account</li>
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * Account creation time.
         * @type {string || null}
         */
        this.AccountCreateTime = null;

        /**
         * Account last login time.
         * @type {string || null}
         */
        this.LastLoginTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Groups = 'Groups' in params ? params.Groups : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.AccountCreateTime = 'AccountCreateTime' in params ? params.AccountCreateTime : null;
        this.LastLoginTime = 'LastLoginTime' in params ? params.LastLoginTime : null;

    }
}

/**
 * RescanImpactedHost request structure.
 * @class
 */
class RescanImpactedHostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability ID.
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Brute force attack list
 * @class
 */
class BruteAttack extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Brute force attack event status
<li>BRUTEATTACK_FAIL_ACCOUNT: brute force attack event - failure (the account exists)</li>
<li>BRUTEATTACK_FAIL_NOACCOUNT: brute force attack event - failure (the account does not exist)</li>
<li>BRUTEATTACK_SUCCESS: brute force attack event - success </li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * City ID.
         * @type {number || null}
         */
        this.City = null;

        /**
         * Country/Region ID.
         * @type {number || null}
         */
        this.Country = null;

        /**
         * Province/State ID.
         * @type {number || null}
         */
        this.Province = null;

        /**
         * Source IP.
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * Number of attempts.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Occurrence time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * CWP agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Whether the server enables CWP Pro.
         * @type {boolean || null}
         */
        this.IsProVersion = null;

        /**
         * Whether the server is banned.
         * @type {string || null}
         */
        this.BanStatus = null;

        /**
         * Server `UUID`
         * @type {string || null}
         */
        this.Quuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.IsProVersion = 'IsProVersion' in params ? params.IsProVersion : null;
        this.BanStatus = 'BanStatus' in params ? params.BanStatus : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DescribeOpenPorts request structure.
 * @class
 */
class DescribeOpenPortsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`. Either `Port` or `Uuid` must be specified. If `Uuid` is specified, it indicates to query the information list under the specified server.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Open port number. Either `Port` or `Uuid` must be specified. If `Port` is specified, it indicates to query the information list under the specified port.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Port - Uint64 - Required: No - Port number</li>
<li>ProcessName - String - Required: No - Process name</li>
<li>MachineIp - String - Required: No - Private IP of server</li>
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Port = 'Port' in params ? params.Port : null;
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
 * DescribeImpactedHosts request structure.
 * @class
 */
class DescribeImpactedHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability category ID.
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Status - String - Required: No - Filter by status (UN_OPERATED: to be processed, FIXED: fixed)</li>
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
        this.VulId = 'VulId' in params ? params.VulId : null;
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
 * DescribeMaliciousRequests response structure.
 * @class
 */
class DescribeMaliciousRequestsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Malicious request record array.
         * @type {Array.<MaliciousRequest> || null}
         */
        this.MaliciousRequests = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.MaliciousRequests) {
            this.MaliciousRequests = new Array();
            for (let z in params.MaliciousRequests) {
                let obj = new MaliciousRequest();
                obj.deserialize(params.MaliciousRequests[z]);
                this.MaliciousRequests.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Unusual login location
 * @class
 */
class NonLocalLoginPlace extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Login status
<li>NON_LOCAL_LOGIN: unusual login location</li>
<li>NORMAL_LOGIN: intended login</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Username.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * City ID.
         * @type {number || null}
         */
        this.City = null;

        /**
         * Country/Region ID.
         * @type {number || null}
         */
        this.Country = null;

        /**
         * Province/State ID.
         * @type {number || null}
         */
        this.Province = null;

        /**
         * Login IP.
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Login time.
         * @type {string || null}
         */
        this.LoginTime = null;

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * CreateProcessTask response structure.
 * @class
 */
class CreateProcessTaskResponse extends  AbstractModel {
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
 * Security event message data.
 * @class
 */
class SecurityDynamic extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Security event occurrence time.
         * @type {string || null}
         */
        this.EventTime = null;

        /**
         * Security event type.
<li>MALWARE: trojan event</li>
<li>NON_LOCAL_LOGIN: unusual login location</li>
<li>BRUTEATTACK_SUCCESS: brute force attack succeeded</li>
<li>VUL: vulnerability</li>
<li>BASELINE: security baseline</li>
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * Security event message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Security event level.
<li>RISK: severe</li>
<li>HIGH: high</li>
<li>NORMAL: medium</li>
<li>LOW: low</li>
         * @type {string || null}
         */
        this.SecurityLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.SecurityLevel = 'SecurityLevel' in params ? params.SecurityLevel : null;

    }
}

/**
 * DescribeComponents request structure.
 * @class
 */
class DescribeComponentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`. Either `Uuid` or `ComponentId` must be specified. If `Uuid` is specified, it indicates to query the information list under the specified server.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Component ID. Either `Uuid` or `ComponentId` must be specified. If `ComponentId` is specified, it indicates to query the information list under the specified component.
         * @type {number || null}
         */
        this.ComponentId = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>ComponentVersion - String - Required: No - Component version number</li>
<li>MachineIp - String - Required: No - Private IP of server</li>
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;
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
 * DescribeNonlocalLoginPlaces request structure.
 * @class
 */
class DescribeNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Keywords - String - Required: No - Query keywords</li>
<li>Status - String - Required: No - Login status (NON_LOCAL_LOGIN: unusual login location, NORMAL_LOGIN: intended login)</li>
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
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
 * DeleteMachineTag request structure.
 * @class
 */
class DeleteMachineTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Associated tag ID
         * @type {number || null}
         */
        this.Rid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Rid = 'Rid' in params ? params.Rid : null;

    }
}

/**
 * Port statistics list
 * @class
 */
class OpenPortStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port number
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Number of servers
         * @type {number || null}
         */
        this.MachineNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;

    }
}

/**
 * DescribeHistoryAccounts response structure.
 * @class
 */
class DescribeHistoryAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records in account change history list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Account change history data array.
         * @type {Array.<HistoryAccount> || null}
         */
        this.HistoryAccounts = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.HistoryAccounts) {
            this.HistoryAccounts = new Array();
            for (let z in params.HistoryAccounts) {
                let obj = new HistoryAccount();
                obj.deserialize(params.HistoryAccounts[z]);
                this.HistoryAccounts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Server vulnerability information
 * @class
 */
class AgentVul extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Vulnerability name.
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * Vulnerability severity level.
<li>HIGH: high</li>
<li>MIDDLE: medium</li>
<li>LOW: low</li>
<li>NOTICE: notice</li>
         * @type {string || null}
         */
        this.VulLevel = null;

        /**
         * Last scanned time.
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * Vulnerability description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Vulnerability category ID.
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * Vulnerability status.
<li>UN_OPERATED: to be processed</li>
<li>FIXED: fixed</li>
         * @type {string || null}
         */
        this.VulStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.VulLevel = 'VulLevel' in params ? params.VulLevel : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.VulStatus = 'VulStatus' in params ? params.VulStatus : null;

    }
}

/**
 * UntrustMalwares request structure.
 * @class
 */
class UntrustMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trojan event ID array. Up to 200 IDs can be processed at a time.
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeWeeklyReportVuls request structure.
 * @class
 */
class DescribeWeeklyReportVulsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Weekly CWP Pro report start time.
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
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
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeLoginWhiteList request structure.
 * @class
 */
class DescribeLoginWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Keywords - String - Required: No - Query keywords</li>
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
 * UntrustMalwares response structure.
 * @class
 */
class UntrustMalwaresResponse extends  AbstractModel {
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
 * UntrustMaliciousRequest request structure.
 * @class
 */
class UntrustMaliciousRequestRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trusted record ID.
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeComponentInfo response structure.
 * @class
 */
class DescribeComponentInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Component name.
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * Component type.
<li>WEB: web component</li>
<li>SYSTEM: system component</li>
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * Component's official website.
         * @type {string || null}
         */
        this.Homepage = null;

        /**
         * Component description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.Homepage = 'Homepage' in params ? params.Homepage : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountStatistics response structure.
 * @class
 */
class DescribeAccountStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records in account statistics list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Account statistics list.
         * @type {Array.<AccountStatistics> || null}
         */
        this.AccountStatistics = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.AccountStatistics) {
            this.AccountStatistics = new Array();
            for (let z in params.AccountStatistics) {
                let obj = new AccountStatistics();
                obj.deserialize(params.AccountStatistics[z]);
                this.AccountStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLoginWhiteList response structure.
 * @class
 */
class ModifyLoginWhiteListResponse extends  AbstractModel {
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
 * DescribeTags response structure.
 * @class
 */
class DescribeTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List information
         * @type {Array.<Tag> || null}
         */
        this.List = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new Tag();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Port list
 * @class
 */
class OpenPort extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * CWP agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Open port number.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Process name corresponding to port.
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * Process `Pid` corresponding to port.
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Record creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Record update time.
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeProVersionInfo request structure.
 * @class
 */
class DescribeProVersionInfoRequest extends  AbstractModel {
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
 * CreateProcessTask request structure.
 * @class
 */
class CreateProcessTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DeleteMaliciousRequests response structure.
 * @class
 */
class DeleteMaliciousRequestsResponse extends  AbstractModel {
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
 * ExportBruteAttacks response structure.
 * @class
 */
class ExportBruteAttacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download address for exported file.
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMachine response structure.
 * @class
 */
class DeleteMachineResponse extends  AbstractModel {
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
 * DeleteLoginWhiteList request structure.
 * @class
 */
class DeleteLoginWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whitelist ID
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * Server tag information
 * @class
 */
class MachineTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Associated tag ID
         * @type {number || null}
         */
        this.Rid = null;

        /**
         * Tag name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tag ID
         * @type {number || null}
         */
        this.TagId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Rid = 'Rid' in params ? params.Rid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TagId = 'TagId' in params ? params.TagId : null;

    }
}

/**
 * Unusual login location data in weekly CWP Pro report
 * @class
 */
class WeeklyReportNonlocalLoginPlace extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Username.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Source IP.
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * Country/Region ID.
         * @type {number || null}
         */
        this.Country = null;

        /**
         * Province/State ID.
         * @type {number || null}
         */
        this.Province = null;

        /**
         * City ID.
         * @type {number || null}
         */
        this.City = null;

        /**
         * Login time.
         * @type {string || null}
         */
        this.LoginTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;

    }
}

/**
 * DescribeOverviewStatistics response structure.
 * @class
 */
class DescribeOverviewStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of online servers.
         * @type {number || null}
         */
        this.OnlineMachineNum = null;

        /**
         * Number of servers activated CWP Pro.
         * @type {number || null}
         */
        this.ProVersionMachineNum = null;

        /**
         * Number of trojan files.
         * @type {number || null}
         */
        this.MalwareNum = null;

        /**
         * Number of unusual login locations.
         * @type {number || null}
         */
        this.NonlocalLoginNum = null;

        /**
         * Number of successful brute force attacks.
         * @type {number || null}
         */
        this.BruteAttackSuccessNum = null;

        /**
         * Number of vulnerabilities.
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * Security baseline number
         * @type {number || null}
         */
        this.BaseLineNum = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OnlineMachineNum = 'OnlineMachineNum' in params ? params.OnlineMachineNum : null;
        this.ProVersionMachineNum = 'ProVersionMachineNum' in params ? params.ProVersionMachineNum : null;
        this.MalwareNum = 'MalwareNum' in params ? params.MalwareNum : null;
        this.NonlocalLoginNum = 'NonlocalLoginNum' in params ? params.NonlocalLoginNum : null;
        this.BruteAttackSuccessNum = 'BruteAttackSuccessNum' in params ? params.BruteAttackSuccessNum : null;
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.BaseLineNum = 'BaseLineNum' in params ? params.BaseLineNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecoverMalwares request structure.
 * @class
 */
class RecoverMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trojan ID array. Up to 200 IDs can be deleted at a time
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * Malicious request data.
 * @class
 */
class MaliciousRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * CWP agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Private IP of server.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Malicious request domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Number of malicious requests.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Process name.
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * Record status.
<li>UN_OPERATED: to be processed</li>
<li>TRUSTED: trusted</li>
<li>UN_TRUSTED: untrusted</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Malicious request domain name description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Reference address.
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * Discovery time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Record merge time.
         * @type {string || null}
         */
        this.MergeTime = null;

        /**
         * Process MD5
Value.
         * @type {string || null}
         */
        this.ProcessMd5 = null;

        /**
         * Executed command line.
         * @type {string || null}
         */
        this.CmdLine = null;

        /**
         * Process `PID`.
         * @type {number || null}
         */
        this.Pid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MergeTime = 'MergeTime' in params ? params.MergeTime : null;
        this.ProcessMd5 = 'ProcessMd5' in params ? params.ProcessMd5 : null;
        this.CmdLine = 'CmdLine' in params ? params.CmdLine : null;
        this.Pid = 'Pid' in params ? params.Pid : null;

    }
}

/**
 * TrustMalwares response structure.
 * @class
 */
class TrustMalwaresResponse extends  AbstractModel {
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
 * Tagged server information
 * @class
 */
class TagMachine extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Server ID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * Server name
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Private IP of server
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Public IP of server
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * Server region
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * Server region type
         * @type {string || null}
         */
        this.MachineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

/**
 * DescribeWeeklyReportInfo request structure.
 * @class
 */
class DescribeWeeklyReportInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Weekly CWP Pro report start time.
         * @type {string || null}
         */
        this.BeginDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;

    }
}

/**
 * EditTags request structure.
 * @class
 */
class EditTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Tag ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * CVM instance ID
         * @type {Array.<string> || null}
         */
        this.Quuids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Quuids = 'Quuids' in params ? params.Quuids : null;

    }
}

/**
 * AddLoginWhiteList request structure.
 * @class
 */
class AddLoginWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whitelist rule
         * @type {LoginWhiteListsRule || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rules) {
            let obj = new LoginWhiteListsRule();
            obj.deserialize(params.Rules)
            this.Rules = obj;
        }

    }
}

/**
 * Tag information
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Tag name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Number of servers
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeWeeklyReports request structure.
 * @class
 */
class DescribeWeeklyReportsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeVuls response structure.
 * @class
 */
class DescribeVulsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of vulnerabilities.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Vulnerability list array.
         * @type {Array.<Vul> || null}
         */
        this.Vuls = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Vuls) {
            this.Vuls = new Array();
            for (let z in params.Vuls) {
                let obj = new Vul();
                obj.deserialize(params.Vuls[z]);
                this.Vuls.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImpactedHosts response structure.
 * @class
 */
class DescribeImpactedHostsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Affected server list array
         * @type {Array.<ImpactedHost> || null}
         */
        this.ImpactedHosts = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ImpactedHosts) {
            this.ImpactedHosts = new Array();
            for (let z in params.ImpactedHosts) {
                let obj = new ImpactedHost();
                obj.deserialize(params.ImpactedHosts[z]);
                this.ImpactedHosts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulScanResult response structure.
 * @class
 */
class DescribeVulScanResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of vulnerabilities.
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * Number of servers activated CWP Pro
         * @type {number || null}
         */
        this.ProVersionNum = null;

        /**
         * Number of affected activated CWP Pro.
         * @type {number || null}
         */
        this.ImpactedHostNum = null;

        /**
         * Total number of servers.
         * @type {number || null}
         */
        this.HostNum = null;

        /**
         * Number of servers on CWP Basic.
         * @type {number || null}
         */
        this.BasicVersionNum = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.ProVersionNum = 'ProVersionNum' in params ? params.ProVersionNum : null;
        this.ImpactedHostNum = 'ImpactedHostNum' in params ? params.ImpactedHostNum : null;
        this.HostNum = 'HostNum' in params ? params.HostNum : null;
        this.BasicVersionNum = 'BasicVersionNum' in params ? params.BasicVersionNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLoginWhiteList request structure.
 * @class
 */
class ModifyLoginWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whitelist rule
         * @type {LoginWhiteListsRule || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rules) {
            let obj = new LoginWhiteListsRule();
            obj.deserialize(params.Rules)
            this.Rules = obj;
        }

    }
}

/**
 * DescribeOpenPortStatistics request structure.
 * @class
 */
class DescribeOpenPortStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Port - Uint64 - Required: No - Port number</li>
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
 * DeleteMachine request structure.
 * @class
 */
class DeleteMachineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeVulInfo request structure.
 * @class
 */
class DescribeVulInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability category ID.
         * @type {number || null}
         */
        this.VulId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = 'VulId' in params ? params.VulId : null;

    }
}

/**
 * DescribeComponentStatistics response structure.
 * @class
 */
class DescribeComponentStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records in component statistics list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Component statistics list data array.
         * @type {Array.<ComponentStatistics> || null}
         */
        this.ComponentStatistics = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ComponentStatistics) {
            this.ComponentStatistics = new Array();
            for (let z in params.ComponentStatistics) {
                let obj = new ComponentStatistics();
                obj.deserialize(params.ComponentStatistics[z]);
                this.ComponentStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Login location information
 * @class
 */
class Place extends  AbstractModel {
    constructor(){
        super();

        /**
         * City ID.
         * @type {number || null}
         */
        this.CityId = null;

        /**
         * Province/State ID.
         * @type {number || null}
         */
        this.ProvinceId = null;

        /**
         * Country/Region ID. Currently, only `1` (Mainland China) is supported.
         * @type {number || null}
         */
        this.CountryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.ProvinceId = 'ProvinceId' in params ? params.ProvinceId : null;
        this.CountryId = 'CountryId' in params ? params.CountryId : null;

    }
}

/**
 * Login allowlist
 * @class
 */
class LoginWhiteLists extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * CWP agent ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Whitelisted location
         * @type {Array.<Place> || null}
         */
        this.Places = null;

        /**
         * Whitelisted users (separated by commas)
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Whitelisted IPs (separated by commas)
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * Whether this rule is applied to all servers under the current account
         * @type {boolean || null}
         */
        this.IsGlobal = null;

        /**
         * Whitelist creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Whitelist modification time
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Server name
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Server IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

        if (params.Places) {
            this.Places = new Array();
            for (let z in params.Places) {
                let obj = new Place();
                obj.deserialize(params.Places[z]);
                this.Places.push(obj);
            }
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DeleteUsualLoginPlaces response structure.
 * @class
 */
class DeleteUsualLoginPlacesResponse extends  AbstractModel {
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
 * DeleteNonlocalLoginPlaces response structure.
 * @class
 */
class DeleteNonlocalLoginPlacesResponse extends  AbstractModel {
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
 * DescribeNonlocalLoginPlaces response structure.
 * @class
 */
class DescribeNonlocalLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Unusual login location information array.
         * @type {Array.<NonLocalLoginPlace> || null}
         */
        this.NonLocalLoginPlaces = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.NonLocalLoginPlaces) {
            this.NonLocalLoginPlaces = new Array();
            for (let z in params.NonLocalLoginPlaces) {
                let obj = new NonLocalLoginPlace();
                obj.deserialize(params.NonLocalLoginPlaces[z]);
                this.NonLocalLoginPlaces.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportMalwares response structure.
 * @class
 */
class ExportMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download address for exported file.
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWeeklyReportNonlocalLoginPlaces request structure.
 * @class
 */
class DescribeWeeklyReportNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Weekly CWP Pro report start time.
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
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
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateOpenPortTask response structure.
 * @class
 */
class CreateOpenPortTaskResponse extends  AbstractModel {
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
 * DescribeMachineInfo response structure.
 * @class
 */
class DescribeMachineInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Days under protection by CWP
         * @type {number || null}
         */
        this.ProtectDays = null;

        /**
         * OS.
         * @type {string || null}
         */
        this.MachineOs = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Status.
<li>ONLINE: online</li>
<li>OFFLINE: offline</li>
         * @type {string || null}
         */
        this.MachineStatus = null;

        /**
         * Unique ID of CVM or BM instance.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Public IP of server.
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * CVM or BM instance `Uuid`.
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Whether CWP Pro is activated.
<li>true: yes</li>
<li>false: no</li>
         * @type {boolean || null}
         */
        this.IsProVersion = null;

        /**
         * CWP Pro activation time.
         * @type {string || null}
         */
        this.ProVersionOpenDate = null;

        /**
         * Server type.
<li>CVM: CVM</li>
<li>BM: BM</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * Server region, such as ap-guangzhou or ap-shanghai
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * Server status.
<li>POSTPAY: post-paid, i.e., pay-as-you-go </li>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Number of trojans left for free scan.
         * @type {number || null}
         */
        this.FreeMalwaresLeft = null;

        /**
         * Number of vulnerability left for free scan.
         * @type {number || null}
         */
        this.FreeVulsLeft = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.ProtectDays = 'ProtectDays' in params ? params.ProtectDays : null;
        this.MachineOs = 'MachineOs' in params ? params.MachineOs : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.MachineStatus = 'MachineStatus' in params ? params.MachineStatus : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.IsProVersion = 'IsProVersion' in params ? params.IsProVersion : null;
        this.ProVersionOpenDate = 'ProVersionOpenDate' in params ? params.ProVersionOpenDate : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.FreeMalwaresLeft = 'FreeMalwaresLeft' in params ? params.FreeMalwaresLeft : null;
        this.FreeVulsLeft = 'FreeVulsLeft' in params ? params.FreeVulsLeft : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUsualLoginPlaces response structure.
 * @class
 */
class DescribeUsualLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Usual login location array
         * @type {Array.<UsualPlace> || null}
         */
        this.UsualLoginPlaces = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UsualLoginPlaces) {
            this.UsualLoginPlaces = new Array();
            for (let z in params.UsualLoginPlaces) {
                let obj = new UsualPlace();
                obj.deserialize(params.UsualLoginPlaces[z]);
                this.UsualLoginPlaces.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComponentInfo request structure.
 * @class
 */
class DescribeComponentInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component ID.
         * @type {number || null}
         */
        this.ComponentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;

    }
}

/**
 * MisAlarmNonlocalLoginPlaces request structure.
 * @class
 */
class MisAlarmNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unusual login location event ID array.
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * TrustMaliciousRequest request structure.
 * @class
 */
class TrustMaliciousRequestRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Malicious request record ID.
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ExportMaliciousRequests response structure.
 * @class
 */
class ExportMaliciousRequestsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download address for exported file.
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWeeklyReportMalwares request structure.
 * @class
 */
class DescribeWeeklyReportMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Weekly CWP Pro report start time.
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
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
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeBruteAttacks response structure.
 * @class
 */
class DescribeBruteAttacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of events
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Brute force attack event list
         * @type {Array.<BruteAttack> || null}
         */
        this.BruteAttacks = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.BruteAttacks) {
            this.BruteAttacks = new Array();
            for (let z in params.BruteAttacks) {
                let obj = new BruteAttack();
                obj.deserialize(params.BruteAttacks[z]);
                this.BruteAttacks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportNonlocalLoginPlaces response structure.
 * @class
 */
class ExportNonlocalLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download address for exported file.
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * Export task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeComponentStatistics request structure.
 * @class
 */
class DescribeComponentStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
ComponentName - String - Required: No - Component name
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
 * DescribeOverviewStatistics request structure.
 * @class
 */
class DescribeOverviewStatisticsRequest extends  AbstractModel {
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
 * DescribeOpenPortStatistics response structure.
 * @class
 */
class DescribeOpenPortStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records in port statistics list
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Port statistics list
         * @type {Array.<OpenPortStatistics> || null}
         */
        this.OpenPortStatistics = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.OpenPortStatistics) {
            this.OpenPortStatistics = new Array();
            for (let z in params.OpenPortStatistics) {
                let obj = new OpenPortStatistics();
                obj.deserialize(params.OpenPortStatistics[z]);
                this.OpenPortStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UntrustMaliciousRequest response structure.
 * @class
 */
class UntrustMaliciousRequestResponse extends  AbstractModel {
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
 * DescribeLoginWhiteList response structure.
 * @class
 */
class DescribeLoginWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Login allowlist array
         * @type {Array.<LoginWhiteLists> || null}
         */
        this.LoginWhiteLists = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.LoginWhiteLists) {
            this.LoginWhiteLists = new Array();
            for (let z in params.LoginWhiteLists) {
                let obj = new LoginWhiteLists();
                obj.deserialize(params.LoginWhiteLists[z]);
                this.LoginWhiteLists.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulInfo response structure.
 * @class
 */
class DescribeVulInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability category ID.
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * Vulnerability name.
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * Vulnerability level.
         * @type {string || null}
         */
        this.VulLevel = null;

        /**
         * Vulnerability type.
         * @type {string || null}
         */
        this.VulType = null;

        /**
         * Vulnerability description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Repair plan.
         * @type {string || null}
         */
        this.RepairPlan = null;

        /**
         * Vulnerability CVE.
         * @type {string || null}
         */
        this.CveId = null;

        /**
         * Reference link.
         * @type {string || null}
         */
        this.Reference = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.VulLevel = 'VulLevel' in params ? params.VulLevel : null;
        this.VulType = 'VulType' in params ? params.VulType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RepairPlan = 'RepairPlan' in params ? params.RepairPlan : null;
        this.CveId = 'CveId' in params ? params.CveId : null;
        this.Reference = 'Reference' in params ? params.Reference : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagMachines request structure.
 * @class
 */
class DescribeTagMachinesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeProVersionInfo response structure.
 * @class
 */
class DescribeProVersionInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fee on yesterday (pay-as-you-go)
         * @type {number || null}
         */
        this.PostPayCost = null;

        /**
         * Whether CWP Pro is activated for new servers
         * @type {boolean || null}
         */
        this.IsAutoOpenProVersion = null;

        /**
         * Number of servers on CWP Pro
         * @type {number || null}
         */
        this.ProVersionNum = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PostPayCost = 'PostPayCost' in params ? params.PostPayCost : null;
        this.IsAutoOpenProVersion = 'IsAutoOpenProVersion' in params ? params.IsAutoOpenProVersion : null;
        this.ProVersionNum = 'ProVersionNum' in params ? params.ProVersionNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportBruteAttacks request structure.
 * @class
 */
class ExportBruteAttacksRequest extends  AbstractModel {
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
 * DeleteBruteAttacks request structure.
 * @class
 */
class DeleteBruteAttacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Brute force attack event ID array.
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * ExportNonlocalLoginPlaces request structure.
 * @class
 */
class ExportNonlocalLoginPlacesRequest extends  AbstractModel {
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
 * AddLoginWhiteList response structure.
 * @class
 */
class AddLoginWhiteListResponse extends  AbstractModel {
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
 * CreateOpenPortTask request structure.
 * @class
 */
class CreateOpenPortTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeWeeklyReportNonlocalLoginPlaces response structure.
 * @class
 */
class DescribeWeeklyReportNonlocalLoginPlacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unusual login location data in weekly CWP Pro report
         * @type {Array.<WeeklyReportNonlocalLoginPlace> || null}
         */
        this.WeeklyReportNonlocalLoginPlaces = null;

        /**
         * Total number of records.
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

        if (params.WeeklyReportNonlocalLoginPlaces) {
            this.WeeklyReportNonlocalLoginPlaces = new Array();
            for (let z in params.WeeklyReportNonlocalLoginPlaces) {
                let obj = new WeeklyReportNonlocalLoginPlace();
                obj.deserialize(params.WeeklyReportNonlocalLoginPlaces[z]);
                this.WeeklyReportNonlocalLoginPlaces.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SeparateMalwares request structure.
 * @class
 */
class SeparateMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trojan event ID array.
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeTagMachines response structure.
 * @class
 */
class DescribeTagMachinesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List data
         * @type {Array.<TagMachine> || null}
         */
        this.List = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new TagMachine();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityTrends response structure.
 * @class
 */
class DescribeSecurityTrendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trojan event statistics array.
         * @type {Array.<SecurityTrend> || null}
         */
        this.Malwares = null;

        /**
         * Unusual login location event statistics array.
         * @type {Array.<SecurityTrend> || null}
         */
        this.NonLocalLoginPlaces = null;

        /**
         * Brute force attack event statistics array.
         * @type {Array.<SecurityTrend> || null}
         */
        this.BruteAttacks = null;

        /**
         * Vulnerability statistics array.
         * @type {Array.<SecurityTrend> || null}
         */
        this.Vuls = null;

        /**
         * Baseline statistics array.
         * @type {Array.<SecurityTrend> || null}
         */
        this.BaseLines = null;

        /**
         * Statistics array of malicious requests.
         * @type {Array.<SecurityTrend> || null}
         */
        this.MaliciousRequests = null;

        /**
         * Statistics array of high-risk commands.
         * @type {Array.<SecurityTrend> || null}
         */
        this.HighRiskBashs = null;

        /**
         * Statistics array of reverse shells.
         * @type {Array.<SecurityTrend> || null}
         */
        this.ReverseShells = null;

        /**
         * Statistics array of local privilege escalations.
         * @type {Array.<SecurityTrend> || null}
         */
        this.PrivilegeEscalations = null;

        /**
         * Statistics array of network attacks.
         * @type {Array.<SecurityTrend> || null}
         */
        this.CyberAttacks = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Malwares) {
            this.Malwares = new Array();
            for (let z in params.Malwares) {
                let obj = new SecurityTrend();
                obj.deserialize(params.Malwares[z]);
                this.Malwares.push(obj);
            }
        }

        if (params.NonLocalLoginPlaces) {
            this.NonLocalLoginPlaces = new Array();
            for (let z in params.NonLocalLoginPlaces) {
                let obj = new SecurityTrend();
                obj.deserialize(params.NonLocalLoginPlaces[z]);
                this.NonLocalLoginPlaces.push(obj);
            }
        }

        if (params.BruteAttacks) {
            this.BruteAttacks = new Array();
            for (let z in params.BruteAttacks) {
                let obj = new SecurityTrend();
                obj.deserialize(params.BruteAttacks[z]);
                this.BruteAttacks.push(obj);
            }
        }

        if (params.Vuls) {
            this.Vuls = new Array();
            for (let z in params.Vuls) {
                let obj = new SecurityTrend();
                obj.deserialize(params.Vuls[z]);
                this.Vuls.push(obj);
            }
        }

        if (params.BaseLines) {
            this.BaseLines = new Array();
            for (let z in params.BaseLines) {
                let obj = new SecurityTrend();
                obj.deserialize(params.BaseLines[z]);
                this.BaseLines.push(obj);
            }
        }

        if (params.MaliciousRequests) {
            this.MaliciousRequests = new Array();
            for (let z in params.MaliciousRequests) {
                let obj = new SecurityTrend();
                obj.deserialize(params.MaliciousRequests[z]);
                this.MaliciousRequests.push(obj);
            }
        }

        if (params.HighRiskBashs) {
            this.HighRiskBashs = new Array();
            for (let z in params.HighRiskBashs) {
                let obj = new SecurityTrend();
                obj.deserialize(params.HighRiskBashs[z]);
                this.HighRiskBashs.push(obj);
            }
        }

        if (params.ReverseShells) {
            this.ReverseShells = new Array();
            for (let z in params.ReverseShells) {
                let obj = new SecurityTrend();
                obj.deserialize(params.ReverseShells[z]);
                this.ReverseShells.push(obj);
            }
        }

        if (params.PrivilegeEscalations) {
            this.PrivilegeEscalations = new Array();
            for (let z in params.PrivilegeEscalations) {
                let obj = new SecurityTrend();
                obj.deserialize(params.PrivilegeEscalations[z]);
                this.PrivilegeEscalations.push(obj);
            }
        }

        if (params.CyberAttacks) {
            this.CyberAttacks = new Array();
            for (let z in params.CyberAttacks) {
                let obj = new SecurityTrend();
                obj.deserialize(params.CyberAttacks[z]);
                this.CyberAttacks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOpenPortTaskStatus response structure.
 * @class
 */
class DescribeOpenPortTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status.
<li>COMPLETE: completed (at this point, you can call the `DescribeOpenPorts` API to get the list of real-time processes) </li>
<li>AGENT_OFFLINE: CWP agent is offline</li>
<li>COLLECTING: getting port</li>
<li>FAILED: failed to get processes</li>
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWeeklyReportInfo response structure.
 * @class
 */
class DescribeWeeklyReportInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account owner name.
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * Total number of servers.
         * @type {number || null}
         */
        this.MachineNum = null;

        /**
         * Number of online CWP agents
         * @type {number || null}
         */
        this.OnlineMachineNum = null;

        /**
         * Number of offline CWP agents.
         * @type {number || null}
         */
        this.OfflineMachineNum = null;

        /**
         * Number of servers on CWP Pro.
         * @type {number || null}
         */
        this.ProVersionMachineNum = null;

        /**
         * Weekly report start time
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * Weekly report end time
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * Security level
<li>HIGH: high</li>
<li>MIDDLE: medium</li>
<li>LOW: low</li>
         * @type {string || null}
         */
        this.Level = null;

        /**
         * Number of trojan records.
         * @type {number || null}
         */
        this.MalwareNum = null;

        /**
         * Number of unusual login locations.
         * @type {number || null}
         */
        this.NonlocalLoginNum = null;

        /**
         * Number of successful brute force attacks.
         * @type {number || null}
         */
        this.BruteAttackSuccessNum = null;

        /**
         * Number of vulnerabilities.
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * Download address for exported file.
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;
        this.OnlineMachineNum = 'OnlineMachineNum' in params ? params.OnlineMachineNum : null;
        this.OfflineMachineNum = 'OfflineMachineNum' in params ? params.OfflineMachineNum : null;
        this.ProVersionMachineNum = 'ProVersionMachineNum' in params ? params.ProVersionMachineNum : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.MalwareNum = 'MalwareNum' in params ? params.MalwareNum : null;
        this.NonlocalLoginNum = 'NonlocalLoginNum' in params ? params.NonlocalLoginNum : null;
        this.BruteAttackSuccessNum = 'BruteAttackSuccessNum' in params ? params.BruteAttackSuccessNum : null;
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityDynamics response structure.
 * @class
 */
class DescribeSecurityDynamicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security event message array.
         * @type {Array.<SecurityDynamic> || null}
         */
        this.SecurityDynamics = null;

        /**
         * Total number of records.
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

        if (params.SecurityDynamics) {
            this.SecurityDynamics = new Array();
            for (let z in params.SecurityDynamics) {
                let obj = new SecurityDynamic();
                obj.deserialize(params.SecurityDynamics[z]);
                this.SecurityDynamics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TrustMaliciousRequest response structure.
 * @class
 */
class TrustMaliciousRequestResponse extends  AbstractModel {
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
 * Whitelist rule
 * @class
 */
class LoginWhiteListsRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whitelisted location
         * @type {Array.<Place> || null}
         */
        this.Places = null;

        /**
         * Whitelisted IPs (separated by commas). This parameter can be an IP range.
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * Whitelisted usernames (separated by commas)
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Whether this rule is applied to all servers under the current account
         * @type {boolean || null}
         */
        this.IsGlobal = null;

        /**
         * Server for which the allowlist takes effect
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * Rule ID, used for rule updating
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
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

        if (params.Places) {
            this.Places = new Array();
            for (let z in params.Places) {
                let obj = new Place();
                obj.deserialize(params.Places[z]);
                this.Places.push(obj);
            }
        }
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CloseProVersion response structure.
 * @class
 */
class CloseProVersionResponse extends  AbstractModel {
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
 * DescribeOpenPorts response structure.
 * @class
 */
class DescribeOpenPortsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records in port list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Port list.
         * @type {Array.<OpenPort> || null}
         */
        this.OpenPorts = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.OpenPorts) {
            this.OpenPorts = new Array();
            for (let z in params.OpenPorts) {
                let obj = new OpenPort();
                obj.deserialize(params.OpenPorts[z]);
                this.OpenPorts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenProVersion response structure.
 * @class
 */
class OpenProVersionResponse extends  AbstractModel {
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
 * DescribeMachineInfo request structure.
 * @class
 */
class DescribeMachineInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeMaliciousRequests request structure.
 * @class
 */
class DescribeMaliciousRequestsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Status - String - Required: No - Filter by status (UN_OPERATED: to be processed, TRUSTED: trusted, UN_TRUSTED: untrusted)</li>
<li>Domain - String - Required: No - Malicious request domain name</li>
<li>MachineIp - String - Required: No - Private IP of server</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * CWP agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * DescribeProcesses request structure.
 * @class
 */
class DescribeProcessesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`. Either `Uuid` or `ProcessName` must be specified. If `Uuid` is specified, it indicates to query the information list under the specified server.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Process name. Either `Uuid` or `ProcessName` must be specified. If `ProcessName` is specified, it indicates to query the information list under the specified process.
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>ProcessName - String - Required: No - Process name</li>
<li>MachineIp - String - Required: No - Private IP of server</li>
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
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
 * DeleteUsualLoginPlaces request structure.
 * @class
 */
class DeleteUsualLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Added usual login city ID array
         * @type {Array.<number> || null}
         */
        this.CityIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.CityIds = 'CityIds' in params ? params.CityIds : null;

    }
}

/**
 * Weekly report list.
 * @class
 */
class WeeklyReport extends  AbstractModel {
    constructor(){
        super();

        /**
         * Weekly report start time.
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * Weekly report end time.
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * DescribeOpenPortTaskStatus request structure.
 * @class
 */
class DescribeOpenPortTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * Key-value pair filters for conditional filtering queries, such as filtering ID, name, and status.

If more than one filter exists, the logical relationship between these filters is `AND`.
If multiple values exist in one filter, the logical relationship between these values is `OR`.

* There can be up to 5 filters
* There can be up to 5 `Values` in the same `Filter`.

 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter key name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * One or more filter values.
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
 * DeleteLoginWhiteList response structure.
 * @class
 */
class DeleteLoginWhiteListResponse extends  AbstractModel {
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
 * DescribeAccountStatistics request structure.
 * @class
 */
class DescribeAccountStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Username - String - Required: No - Account username</li>
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
 * MisAlarmNonlocalLoginPlaces response structure.
 * @class
 */
class MisAlarmNonlocalLoginPlacesResponse extends  AbstractModel {
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
 * DeleteMalwares response structure.
 * @class
 */
class DeleteMalwaresResponse extends  AbstractModel {
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
 * SeparateMalwares response structure.
 * @class
 */
class SeparateMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of IDs of successfully isolated trojans.
         * @type {Array.<number> || null}
         */
        this.SuccessIds = null;

        /**
         * Array of IDs of trojans failed to be isolated.
         * @type {Array.<number> || null}
         */
        this.FailedIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessIds = 'SuccessIds' in params ? params.SuccessIds : null;
        this.FailedIds = 'FailedIds' in params ? params.FailedIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Process statistics.
 * @class
 */
class ProcessStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Process name.
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * Number of servers.
         * @type {number || null}
         */
        this.MachineNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;

    }
}

/**
 * Process information.
 * @class
 */
class Process extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * CWP agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Private IP of server.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Process `Pid`.
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Process `Ppid`.
         * @type {number || null}
         */
        this.Ppid = null;

        /**
         * Process name.
         * @type {string || null}
         */
        this.ProcessName = null;

        /**
         * Process username.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * OS.
<li>WIN32: Windows 32-bit</li>
<li>WIN64: Windows 64-bit</li>
<li>LINUX32: Linux 32-bit</li>
<li>LINUX64: Linux 64-bit</li>
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Process path.
         * @type {string || null}
         */
        this.FullPath = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Ppid = 'Ppid' in params ? params.Ppid : null;
        this.ProcessName = 'ProcessName' in params ? params.ProcessName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.FullPath = 'FullPath' in params ? params.FullPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeTags request structure.
 * @class
 */
class DescribeTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM instance type.
<li>CVM: CVM</li>
<li>BM: CPM</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * Server region, such as `ap-guangzhou` and `ap-shanghai`
         * @type {string || null}
         */
        this.MachineRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;

    }
}

/**
 * DescribeVulScanResult request structure.
 * @class
 */
class DescribeVulScanResultRequest extends  AbstractModel {
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
 * DescribeWeeklyReportMalwares response structure.
 * @class
 */
class DescribeWeeklyReportMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trojan data in weekly CWP Pro report.
         * @type {Array.<WeeklyReportMalware> || null}
         */
        this.WeeklyReportMalwares = null;

        /**
         * Total number of records.
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

        if (params.WeeklyReportMalwares) {
            this.WeeklyReportMalwares = new Array();
            for (let z in params.WeeklyReportMalwares) {
                let obj = new WeeklyReportMalware();
                obj.deserialize(params.WeeklyReportMalwares[z]);
                this.WeeklyReportMalwares.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityDynamics request structure.
 * @class
 */
class DescribeSecurityDynamicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Affected server information
 * @class
 */
class ImpactedHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Last detection time.
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * Vulnerability status.
<li>UN_OPERATED: to be processed</li>
<li>SCANING: scanning</li>
<li>FIXED: fixed</li>
         * @type {string || null}
         */
        this.VulStatus = null;

        /**
         * CWP agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Vulnerability description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Vulnerability category ID.
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * Whether it is the CWP Pro.
         * @type {boolean || null}
         */
        this.IsProVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.VulStatus = 'VulStatus' in params ? params.VulStatus : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.IsProVersion = 'IsProVersion' in params ? params.IsProVersion : null;

    }
}

/**
 * DescribeProcessStatistics response structure.
 * @class
 */
class DescribeProcessStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records in process statistics list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Process statistics list array.
         * @type {Array.<ProcessStatistics> || null}
         */
        this.ProcessStatistics = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.ProcessStatistics) {
            this.ProcessStatistics = new Array();
            for (let z in params.ProcessStatistics) {
                let obj = new ProcessStatistics();
                obj.deserialize(params.ProcessStatistics[z]);
                this.ProcessStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNonlocalLoginPlaces request structure.
 * @class
 */
class DeleteNonlocalLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unusual login location event ID array.
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * Trojan information
 * @class
 */
class Malware extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Current trojan status.
<li>UN_OPERATED: not processed</li><li>SEGREGATED: isolated</li><li>TRUSTED: trusted</li>
<li>SEPARATING: isolating</li><li>RECOVERING: recovering</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Trojan path.
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * Trojan description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Trojan file creation time.
         * @type {string || null}
         */
        this.FileCreateTime = null;

        /**
         * Trojan file modification time.
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * CWP agent `UUID`.
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.FileCreateTime = 'FileCreateTime' in params ? params.FileCreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * ExportMaliciousRequests request structure.
 * @class
 */
class ExportMaliciousRequestsRequest extends  AbstractModel {
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
 * Account statistics.
 * @class
 */
class AccountStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Number of servers.
         * @type {number || null}
         */
        this.MachineNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Username = 'Username' in params ? params.Username : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;

    }
}

/**
 * DescribeMachines response structure.
 * @class
 */
class DescribeMachinesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server list
         * @type {Array.<Machine> || null}
         */
        this.Machines = null;

        /**
         * Number of servers
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

        if (params.Machines) {
            this.Machines = new Array();
            for (let z in params.Machines) {
                let obj = new Machine();
                obj.deserialize(params.Machines[z]);
                this.Machines.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUsualLoginPlaces response structure.
 * @class
 */
class CreateUsualLoginPlacesResponse extends  AbstractModel {
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
 * ModifyProVersionRenewFlag response structure.
 * @class
 */
class ModifyProVersionRenewFlagResponse extends  AbstractModel {
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
 * Server list
 * @class
 */
class Machine extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Server OS.
         * @type {string || null}
         */
        this.MachineOs = null;

        /**
         * Server status.
<li>OFFLINE: offline</li>
<li>ONLINE: online</li>
<li>MACHINE_STOPPED: shut down</li>
         * @type {string || null}
         */
        this.MachineStatus = null;

        /**
         * CWP agent `Uuid`. If the agent is offline for a long time, a null character will be returned.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * CVM or BM instance `Uuid`.
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * Number of vulnerabilities.
         * @type {number || null}
         */
        this.VulNum = null;

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Whether the server has enabled CWP Pro.
<li>true: yes</li>
<li>false: no</li>
         * @type {boolean || null}
         */
        this.IsProVersion = null;

        /**
         * Public IP of server.
         * @type {string || null}
         */
        this.MachineWanIp = null;

        /**
         * Server status.
<li>POSTPAY: post-paid, i.e., pay-as-you-go </li>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Number of trojans.
         * @type {number || null}
         */
        this.MalwareNum = null;

        /**
         * Tag information
         * @type {Array.<MachineTag> || null}
         */
        this.Tag = null;

        /**
         * Number of baseline risks.
         * @type {number || null}
         */
        this.BaselineNum = null;

        /**
         * Number of network risks.
         * @type {number || null}
         */
        this.CyberAttackNum = null;

        /**
         * Risk status.
<li>SAFE: safe</li>
<li>RISK: at risk</li>
<li>UNKNOWN: unknown</li>
         * @type {string || null}
         */
        this.SecurityStatus = null;

        /**
         * Number of intrusions
         * @type {number || null}
         */
        this.InvasionNum = null;

        /**
         * Region information
         * @type {RegionInfo || null}
         */
        this.RegionInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.MachineOs = 'MachineOs' in params ? params.MachineOs : null;
        this.MachineStatus = 'MachineStatus' in params ? params.MachineStatus : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.VulNum = 'VulNum' in params ? params.VulNum : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.IsProVersion = 'IsProVersion' in params ? params.IsProVersion : null;
        this.MachineWanIp = 'MachineWanIp' in params ? params.MachineWanIp : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.MalwareNum = 'MalwareNum' in params ? params.MalwareNum : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new MachineTag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.BaselineNum = 'BaselineNum' in params ? params.BaselineNum : null;
        this.CyberAttackNum = 'CyberAttackNum' in params ? params.CyberAttackNum : null;
        this.SecurityStatus = 'SecurityStatus' in params ? params.SecurityStatus : null;
        this.InvasionNum = 'InvasionNum' in params ? params.InvasionNum : null;

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }

    }
}

/**
 * DescribeWeeklyReportVuls response structure.
 * @class
 */
class DescribeWeeklyReportVulsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability data array in weekly CWP Pro report.
         * @type {Array.<WeeklyReportVul> || null}
         */
        this.WeeklyReportVuls = null;

        /**
         * Total number of records.
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

        if (params.WeeklyReportVuls) {
            this.WeeklyReportVuls = new Array();
            for (let z in params.WeeklyReportVuls) {
                let obj = new WeeklyReportVul();
                obj.deserialize(params.WeeklyReportVuls[z]);
                this.WeeklyReportVuls.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Brute force attack data in weekly CWP Pro report.
 * @class
 */
class WeeklyReportBruteAttack extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server IP.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Hacked username.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Source IP.
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * Number of attempts.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Attack time.
         * @type {string || null}
         */
        this.AttackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;

    }
}

/**
 * Account change history data.
 * @class
 */
class HistoryAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Private IP of server.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Account name.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Account change type.
<li>CREATE: creates account</li>
<li>MODIFY: modifies account</li>
<li>DELETE: deletes account</li>
         * @type {string || null}
         */
        this.ModifyType = null;

        /**
         * Change time.
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * ModifyProVersionRenewFlag request structure.
 * @class
 */
class ModifyProVersionRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Auto-renewal flag. Valid values:
<li>NOTIFY_AND_AUTO_RENEW: notifies of expiration and auto-renews</li>
<li>NOTIFY_AND_MANUAL_RENEW: notifies of expiration but does not auto-renew</li>
<li>DISABLE_NOTIFY_AND_MANUAL_RENEW: does not notify of expiration or auto-renew</li>
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Unique server ID, corresponding to `uuid` for CVM or `instanceId` for BM.
         * @type {string || null}
         */
        this.Quuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * DescribeUsualLoginPlaces request structure.
 * @class
 */
class DescribeUsualLoginPlacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `UUID`
         * @type {string || null}
         */
        this.Uuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uuid = 'Uuid' in params ? params.Uuid : null;

    }
}

/**
 * Component list data.
 * @class
 */
class Component extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Private IP of server.
         * @type {string || null}
         */
        this.MachineIp = null;

        /**
         * Server name.
         * @type {string || null}
         */
        this.MachineName = null;

        /**
         * Component version number.
         * @type {string || null}
         */
        this.ComponentVersion = null;

        /**
         * Component type.
<li>SYSTEM: system component</li>
<li>WEB: web component</li>
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * Component name.
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * Component detection update time.
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.MachineIp = 'MachineIp' in params ? params.MachineIp : null;
        this.MachineName = 'MachineName' in params ? params.MachineName : null;
        this.ComponentVersion = 'ComponentVersion' in params ? params.ComponentVersion : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeVuls request structure.
 * @class
 */
class DescribeVulsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability type.
<li>WEB: web application vulnerability</li>
<li>SYSTEM: system component vulnerability</li>
<li>BASELINE: security baseline</li>
         * @type {string || null}
         */
        this.VulType = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Status - String - Required: No - Filter by status (UN_OPERATED: to be processed, FIXED: fixed)

Only one value is allowed for the `Status` filter, and "OR" logic is not supported.
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
        this.VulType = 'VulType' in params ? params.VulType : null;
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
 * DescribeAgentVuls response structure.
 * @class
 */
class DescribeAgentVulsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Server vulnerability information
         * @type {Array.<AgentVul> || null}
         */
        this.AgentVuls = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.AgentVuls) {
            this.AgentVuls = new Array();
            for (let z in params.AgentVuls) {
                let obj = new AgentVul();
                obj.deserialize(params.AgentVuls[z]);
                this.AgentVuls.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProcessStatistics request structure.
 * @class
 */
class DescribeProcessStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>ProcessName - String - Required: No - Process name</li>
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
 * DeleteMachineTag response structure.
 * @class
 */
class DeleteMachineTagResponse extends  AbstractModel {
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
 * DescribeHistoryAccounts request structure.
 * @class
 */
class DescribeHistoryAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CWP agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Username - String - Required: No - Account name</li>
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
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
 * CloseProVersion request structure.
 * @class
 */
class CloseProVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server `Uuid`.
`InstanceId` for BM or `Uuid` for CVM
         * @type {string || null}
         */
        this.Quuid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Quuid = 'Quuid' in params ? params.Quuid : null;

    }
}

/**
 * OpenProVersion request structure.
 * @class
 */
class OpenProVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server type.
<li>CVM: CVM</li>
<li>BM: BM</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * Server region
Examples: ap-guangzhou, ap-shanghai
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * Server `Uuid` array.
`InstanceId` for BM or `Uuid` for CVM
         * @type {Array.<string> || null}
         */
        this.Quuids = null;

        /**
         * Event ID.
         * @type {number || null}
         */
        this.ActivityId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
        this.Quuids = 'Quuids' in params ? params.Quuids : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;

    }
}

/**
 * ModifyAlarmAttribute response structure.
 * @class
 */
class ModifyAlarmAttributeResponse extends  AbstractModel {
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
 * IgnoreImpactedHosts response structure.
 * @class
 */
class IgnoreImpactedHostsResponse extends  AbstractModel {
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
 * DescribeComponents response structure.
 * @class
 */
class DescribeComponentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records in component list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Component list data.
         * @type {Array.<Component> || null}
         */
        this.Components = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Components) {
            this.Components = new Array();
            for (let z in params.Components) {
                let obj = new Component();
                obj.deserialize(params.Components[z]);
                this.Components.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RescanImpactedHost response structure.
 * @class
 */
class RescanImpactedHostResponse extends  AbstractModel {
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
 * Security trend statistics.
 * @class
 */
class SecurityTrend extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event time.
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Number of events.
         * @type {number || null}
         */
        this.EventNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.EventNum = 'EventNum' in params ? params.EventNum : null;

    }
}

/**
 * Vulnerability list data
 * @class
 */
class Vul extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability category ID
         * @type {number || null}
         */
        this.VulId = null;

        /**
         * Vulnerability name
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * Vulnerability severity level:
HIGH: high
MIDDLE: medium
LOW: low
NOTICE: notice
         * @type {string || null}
         */
        this.VulLevel = null;

        /**
         * Last scanned time
         * @type {string || null}
         */
        this.LastScanTime = null;

        /**
         * Number of affected servers
         * @type {number || null}
         */
        this.ImpactedHostNum = null;

        /**
         * Vulnerability status
* UN_OPERATED: to be processed
* FIXED: fixed
         * @type {string || null}
         */
        this.VulStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.VulLevel = 'VulLevel' in params ? params.VulLevel : null;
        this.LastScanTime = 'LastScanTime' in params ? params.LastScanTime : null;
        this.ImpactedHostNum = 'ImpactedHostNum' in params ? params.ImpactedHostNum : null;
        this.VulStatus = 'VulStatus' in params ? params.VulStatus : null;

    }
}

/**
 * AddMachineTag request structure.
 * @class
 */
class AddMachineTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server ID
         * @type {string || null}
         */
        this.Quuid = null;

        /**
         * Tag ID
         * @type {number || null}
         */
        this.TagId = null;

        /**
         * Server region
         * @type {string || null}
         */
        this.MRegion = null;

        /**
         * Server type (`CVM` or `BM`)
         * @type {string || null}
         */
        this.MArea = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Quuid = 'Quuid' in params ? params.Quuid : null;
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.MRegion = 'MRegion' in params ? params.MRegion : null;
        this.MArea = 'MArea' in params ? params.MArea : null;

    }
}

/**
 * DescribeWeeklyReports response structure.
 * @class
 */
class DescribeWeeklyReportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Weekly CWP Pro report list array.
         * @type {Array.<WeeklyReport> || null}
         */
        this.WeeklyReports = null;

        /**
         * Total number of records.
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

        if (params.WeeklyReports) {
            this.WeeklyReports = new Array();
            for (let z in params.WeeklyReports) {
                let obj = new WeeklyReport();
                obj.deserialize(params.WeeklyReports[z]);
                this.WeeklyReports.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccounts response structure.
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records in account list.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Account data list.
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoOpenProVersionConfig response structure.
 * @class
 */
class ModifyAutoOpenProVersionConfigResponse extends  AbstractModel {
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
 * RecoverMalwares response structure.
 * @class
 */
class RecoverMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of IDs of successfully recovered trojans.
         * @type {Array.<number> || null}
         */
        this.SuccessIds = null;

        /**
         * Array of IDs of trojans failed to be recovered.
         * @type {Array.<number> || null}
         */
        this.FailedIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessIds = 'SuccessIds' in params ? params.SuccessIds : null;
        this.FailedIds = 'FailedIds' in params ? params.FailedIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EditTags response structure.
 * @class
 */
class EditTagsResponse extends  AbstractModel {
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
 * IgnoreImpactedHosts request structure.
 * @class
 */
class IgnoreImpactedHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vulnerability ID array.
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeAlarmAttribute request structure.
 * @class
 */
class DescribeAlarmAttributeRequest extends  AbstractModel {
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
 * DescribeMalwares request structure.
 * @class
 */
class DescribeMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent `Uuid`.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Keywords - String - Required: No - Query keywords</li>
<li>Status - String - Required: No - Trojan status (UN_OPERATED: not processed, SEGREGATED: isolated, TRUSTED: trusted)</li>
Each filter supports only one value. Query with multiple values in "OR" relationship is not supported for the time being.
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
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
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
 * DeleteMaliciousRequests request structure.
 * @class
 */
class DeleteMaliciousRequestsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Malicious request record ID array. Maximum value: 100 entries.
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeMachines request structure.
 * @class
 */
class DescribeMachinesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server type.
<li>CVM: CVM</li>
<li>BM: BM</li>
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * Server region, such as ap-guangzhou or ap-shanghai
         * @type {string || null}
         */
        this.MachineRegion = null;

        /**
         * Number of results to be returned. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter.
<li>Keywords - String - Required: no - Query keywords </li>
<li>Status - String - Required: no - CWP client status (valid values: OFFLINE, ONLINE, UNINSTALLED)</li>
<li>Version - String - Required: no - Current CWP version (valid values: PRO_VERSION, BASIC_VERSION)</li>
Each filter can have only one value but does not support "OR" queries with multiple values
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
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineRegion = 'MachineRegion' in params ? params.MachineRegion : null;
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
 * TrustMalwares request structure.
 * @class
 */
class TrustMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trojan ID array.
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DeleteMalwares request structure.
 * @class
 */
class DeleteMalwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trojan record ID array
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeMalwares response structure.
 * @class
 */
class DescribeMalwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of trojans.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Malware array.
         * @type {Array.<Malware> || null}
         */
        this.Malwares = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Malwares) {
            this.Malwares = new Array();
            for (let z in params.Malwares) {
                let obj = new Malware();
                obj.deserialize(params.Malwares[z]);
                this.Malwares.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBruteAttacks response structure.
 * @class
 */
class DeleteBruteAttacksResponse extends  AbstractModel {
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
    ModifyAutoOpenProVersionConfigRequest: ModifyAutoOpenProVersionConfigRequest,
    DescribeProcessTaskStatusResponse: DescribeProcessTaskStatusResponse,
    DescribeAlarmAttributeResponse: DescribeAlarmAttributeResponse,
    DescribeWeeklyReportBruteAttacksResponse: DescribeWeeklyReportBruteAttacksResponse,
    DescribeAgentVulsRequest: DescribeAgentVulsRequest,
    AddMachineTagResponse: AddMachineTagResponse,
    UsualPlace: UsualPlace,
    DescribeAccountsRequest: DescribeAccountsRequest,
    WeeklyReportVul: WeeklyReportVul,
    DescribeWeeklyReportBruteAttacksRequest: DescribeWeeklyReportBruteAttacksRequest,
    CreateUsualLoginPlacesRequest: CreateUsualLoginPlacesRequest,
    DescribeProcessTaskStatusRequest: DescribeProcessTaskStatusRequest,
    RegionInfo: RegionInfo,
    ModifyAlarmAttributeRequest: ModifyAlarmAttributeRequest,
    ComponentStatistics: ComponentStatistics,
    ExportMalwaresRequest: ExportMalwaresRequest,
    DescribeProcessesResponse: DescribeProcessesResponse,
    WeeklyReportMalware: WeeklyReportMalware,
    DescribeBruteAttacksRequest: DescribeBruteAttacksRequest,
    DescribeSecurityTrendsRequest: DescribeSecurityTrendsRequest,
    Account: Account,
    RescanImpactedHostRequest: RescanImpactedHostRequest,
    BruteAttack: BruteAttack,
    DescribeOpenPortsRequest: DescribeOpenPortsRequest,
    DescribeImpactedHostsRequest: DescribeImpactedHostsRequest,
    DescribeMaliciousRequestsResponse: DescribeMaliciousRequestsResponse,
    NonLocalLoginPlace: NonLocalLoginPlace,
    CreateProcessTaskResponse: CreateProcessTaskResponse,
    SecurityDynamic: SecurityDynamic,
    DescribeComponentsRequest: DescribeComponentsRequest,
    DescribeNonlocalLoginPlacesRequest: DescribeNonlocalLoginPlacesRequest,
    DeleteMachineTagRequest: DeleteMachineTagRequest,
    OpenPortStatistics: OpenPortStatistics,
    DescribeHistoryAccountsResponse: DescribeHistoryAccountsResponse,
    AgentVul: AgentVul,
    UntrustMalwaresRequest: UntrustMalwaresRequest,
    DescribeWeeklyReportVulsRequest: DescribeWeeklyReportVulsRequest,
    DescribeLoginWhiteListRequest: DescribeLoginWhiteListRequest,
    UntrustMalwaresResponse: UntrustMalwaresResponse,
    UntrustMaliciousRequestRequest: UntrustMaliciousRequestRequest,
    DescribeComponentInfoResponse: DescribeComponentInfoResponse,
    DescribeAccountStatisticsResponse: DescribeAccountStatisticsResponse,
    ModifyLoginWhiteListResponse: ModifyLoginWhiteListResponse,
    DescribeTagsResponse: DescribeTagsResponse,
    OpenPort: OpenPort,
    DescribeProVersionInfoRequest: DescribeProVersionInfoRequest,
    CreateProcessTaskRequest: CreateProcessTaskRequest,
    DeleteMaliciousRequestsResponse: DeleteMaliciousRequestsResponse,
    ExportBruteAttacksResponse: ExportBruteAttacksResponse,
    DeleteMachineResponse: DeleteMachineResponse,
    DeleteLoginWhiteListRequest: DeleteLoginWhiteListRequest,
    MachineTag: MachineTag,
    WeeklyReportNonlocalLoginPlace: WeeklyReportNonlocalLoginPlace,
    DescribeOverviewStatisticsResponse: DescribeOverviewStatisticsResponse,
    RecoverMalwaresRequest: RecoverMalwaresRequest,
    MaliciousRequest: MaliciousRequest,
    TrustMalwaresResponse: TrustMalwaresResponse,
    TagMachine: TagMachine,
    DescribeWeeklyReportInfoRequest: DescribeWeeklyReportInfoRequest,
    EditTagsRequest: EditTagsRequest,
    AddLoginWhiteListRequest: AddLoginWhiteListRequest,
    Tag: Tag,
    DescribeWeeklyReportsRequest: DescribeWeeklyReportsRequest,
    DescribeVulsResponse: DescribeVulsResponse,
    DescribeImpactedHostsResponse: DescribeImpactedHostsResponse,
    DescribeVulScanResultResponse: DescribeVulScanResultResponse,
    ModifyLoginWhiteListRequest: ModifyLoginWhiteListRequest,
    DescribeOpenPortStatisticsRequest: DescribeOpenPortStatisticsRequest,
    DeleteMachineRequest: DeleteMachineRequest,
    DescribeVulInfoRequest: DescribeVulInfoRequest,
    DescribeComponentStatisticsResponse: DescribeComponentStatisticsResponse,
    Place: Place,
    LoginWhiteLists: LoginWhiteLists,
    DeleteUsualLoginPlacesResponse: DeleteUsualLoginPlacesResponse,
    DeleteNonlocalLoginPlacesResponse: DeleteNonlocalLoginPlacesResponse,
    DescribeNonlocalLoginPlacesResponse: DescribeNonlocalLoginPlacesResponse,
    ExportMalwaresResponse: ExportMalwaresResponse,
    DescribeWeeklyReportNonlocalLoginPlacesRequest: DescribeWeeklyReportNonlocalLoginPlacesRequest,
    CreateOpenPortTaskResponse: CreateOpenPortTaskResponse,
    DescribeMachineInfoResponse: DescribeMachineInfoResponse,
    DescribeUsualLoginPlacesResponse: DescribeUsualLoginPlacesResponse,
    DescribeComponentInfoRequest: DescribeComponentInfoRequest,
    MisAlarmNonlocalLoginPlacesRequest: MisAlarmNonlocalLoginPlacesRequest,
    TrustMaliciousRequestRequest: TrustMaliciousRequestRequest,
    ExportMaliciousRequestsResponse: ExportMaliciousRequestsResponse,
    DescribeWeeklyReportMalwaresRequest: DescribeWeeklyReportMalwaresRequest,
    DescribeBruteAttacksResponse: DescribeBruteAttacksResponse,
    ExportNonlocalLoginPlacesResponse: ExportNonlocalLoginPlacesResponse,
    DescribeComponentStatisticsRequest: DescribeComponentStatisticsRequest,
    DescribeOverviewStatisticsRequest: DescribeOverviewStatisticsRequest,
    DescribeOpenPortStatisticsResponse: DescribeOpenPortStatisticsResponse,
    UntrustMaliciousRequestResponse: UntrustMaliciousRequestResponse,
    DescribeLoginWhiteListResponse: DescribeLoginWhiteListResponse,
    DescribeVulInfoResponse: DescribeVulInfoResponse,
    DescribeTagMachinesRequest: DescribeTagMachinesRequest,
    DescribeProVersionInfoResponse: DescribeProVersionInfoResponse,
    ExportBruteAttacksRequest: ExportBruteAttacksRequest,
    DeleteBruteAttacksRequest: DeleteBruteAttacksRequest,
    ExportNonlocalLoginPlacesRequest: ExportNonlocalLoginPlacesRequest,
    AddLoginWhiteListResponse: AddLoginWhiteListResponse,
    CreateOpenPortTaskRequest: CreateOpenPortTaskRequest,
    DescribeWeeklyReportNonlocalLoginPlacesResponse: DescribeWeeklyReportNonlocalLoginPlacesResponse,
    SeparateMalwaresRequest: SeparateMalwaresRequest,
    DescribeTagMachinesResponse: DescribeTagMachinesResponse,
    DescribeSecurityTrendsResponse: DescribeSecurityTrendsResponse,
    DescribeOpenPortTaskStatusResponse: DescribeOpenPortTaskStatusResponse,
    DescribeWeeklyReportInfoResponse: DescribeWeeklyReportInfoResponse,
    DescribeSecurityDynamicsResponse: DescribeSecurityDynamicsResponse,
    TrustMaliciousRequestResponse: TrustMaliciousRequestResponse,
    LoginWhiteListsRule: LoginWhiteListsRule,
    CloseProVersionResponse: CloseProVersionResponse,
    DescribeOpenPortsResponse: DescribeOpenPortsResponse,
    OpenProVersionResponse: OpenProVersionResponse,
    DescribeMachineInfoRequest: DescribeMachineInfoRequest,
    DescribeMaliciousRequestsRequest: DescribeMaliciousRequestsRequest,
    DescribeProcessesRequest: DescribeProcessesRequest,
    DeleteUsualLoginPlacesRequest: DeleteUsualLoginPlacesRequest,
    WeeklyReport: WeeklyReport,
    DescribeOpenPortTaskStatusRequest: DescribeOpenPortTaskStatusRequest,
    Filter: Filter,
    DeleteLoginWhiteListResponse: DeleteLoginWhiteListResponse,
    DescribeAccountStatisticsRequest: DescribeAccountStatisticsRequest,
    MisAlarmNonlocalLoginPlacesResponse: MisAlarmNonlocalLoginPlacesResponse,
    DeleteMalwaresResponse: DeleteMalwaresResponse,
    SeparateMalwaresResponse: SeparateMalwaresResponse,
    ProcessStatistics: ProcessStatistics,
    Process: Process,
    DescribeTagsRequest: DescribeTagsRequest,
    DescribeVulScanResultRequest: DescribeVulScanResultRequest,
    DescribeWeeklyReportMalwaresResponse: DescribeWeeklyReportMalwaresResponse,
    DescribeSecurityDynamicsRequest: DescribeSecurityDynamicsRequest,
    ImpactedHost: ImpactedHost,
    DescribeProcessStatisticsResponse: DescribeProcessStatisticsResponse,
    DeleteNonlocalLoginPlacesRequest: DeleteNonlocalLoginPlacesRequest,
    Malware: Malware,
    ExportMaliciousRequestsRequest: ExportMaliciousRequestsRequest,
    AccountStatistics: AccountStatistics,
    DescribeMachinesResponse: DescribeMachinesResponse,
    CreateUsualLoginPlacesResponse: CreateUsualLoginPlacesResponse,
    ModifyProVersionRenewFlagResponse: ModifyProVersionRenewFlagResponse,
    Machine: Machine,
    DescribeWeeklyReportVulsResponse: DescribeWeeklyReportVulsResponse,
    WeeklyReportBruteAttack: WeeklyReportBruteAttack,
    HistoryAccount: HistoryAccount,
    ModifyProVersionRenewFlagRequest: ModifyProVersionRenewFlagRequest,
    DescribeUsualLoginPlacesRequest: DescribeUsualLoginPlacesRequest,
    Component: Component,
    DescribeVulsRequest: DescribeVulsRequest,
    DescribeAgentVulsResponse: DescribeAgentVulsResponse,
    DescribeProcessStatisticsRequest: DescribeProcessStatisticsRequest,
    DeleteMachineTagResponse: DeleteMachineTagResponse,
    DescribeHistoryAccountsRequest: DescribeHistoryAccountsRequest,
    CloseProVersionRequest: CloseProVersionRequest,
    OpenProVersionRequest: OpenProVersionRequest,
    ModifyAlarmAttributeResponse: ModifyAlarmAttributeResponse,
    IgnoreImpactedHostsResponse: IgnoreImpactedHostsResponse,
    DescribeComponentsResponse: DescribeComponentsResponse,
    RescanImpactedHostResponse: RescanImpactedHostResponse,
    SecurityTrend: SecurityTrend,
    Vul: Vul,
    AddMachineTagRequest: AddMachineTagRequest,
    DescribeWeeklyReportsResponse: DescribeWeeklyReportsResponse,
    DescribeAccountsResponse: DescribeAccountsResponse,
    ModifyAutoOpenProVersionConfigResponse: ModifyAutoOpenProVersionConfigResponse,
    RecoverMalwaresResponse: RecoverMalwaresResponse,
    EditTagsResponse: EditTagsResponse,
    IgnoreImpactedHostsRequest: IgnoreImpactedHostsRequest,
    DescribeAlarmAttributeRequest: DescribeAlarmAttributeRequest,
    DescribeMalwaresRequest: DescribeMalwaresRequest,
    DeleteMaliciousRequestsRequest: DeleteMaliciousRequestsRequest,
    DescribeMachinesRequest: DescribeMachinesRequest,
    TrustMalwaresRequest: TrustMalwaresRequest,
    DeleteMalwaresRequest: DeleteMalwaresRequest,
    DescribeMalwaresResponse: DescribeMalwaresResponse,
    DeleteBruteAttacksResponse: DeleteBruteAttacksResponse,

}
