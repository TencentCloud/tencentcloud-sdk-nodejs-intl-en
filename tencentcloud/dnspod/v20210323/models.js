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
 * CreateRecord request structure.
 * @class
 */
class CreateRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Record type, which is obtained through the record type API. The value contains uppercase letters, such as `A`.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Record split zone, which is obtained through the record split zone API.
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * Record value, such as `IP : 200.200.200.200`, `CNAME : cname.dnspod.com`, and `MX : mail.dnspod.com`.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Domain ID. The `DomainId` parameter has a higher priority than `Domain`. If `DomainId` is passed in, `Domain` will be ignored.
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * Host record such as `www`. If it is not passed in, it will be `@` by default.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Split zone ID, which is obtained through the record split zone API. The value is a string such as `10=1`. The `RecordLineId` parameter has a higher priority than `RecordLine`. If both of them are passed in, `RecordLineId` will be used first.
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * MX priority, which is required for an MX record and will take effect if the record type is MX. Value range: 1–20.
         * @type {number || null}
         */
        this.MX = null;

        /**
         * TTL. Value range: 1–604800. The minimum value varies by domain level.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Weight information, which is an integer between 0 and 100. It is supported only for enterprise VIP domains. `0` indicates not to pass in this parameter, i.e., not to set the weight.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Initial status of the record. Valid values: ENABLE, DISABLE. Default value: ENABLE. If `DISABLE` is passed in, the DNS record won't take effect, and the limit on round-robin DNS won't be verified.
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteDomainAlias response structure.
 * @class
 */
class DeleteDomainAliasResponse extends  AbstractModel {
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
 * DeleteDomainBatch response structure.
 * @class
 */
class DeleteDomainBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * The array of task details.
         * @type {Array.<DeleteDomainBatchDetail> || null}
         */
        this.DetailList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new DeleteDomainBatchDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of a DNS record group
 * @class
 */
class RecordGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Group type. Valid values: `system`, `user`.
         * @type {string || null}
         */
        this.GroupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;

    }
}

/**
 * CreateRecordBatch response structure.
 * @class
 */
class CreateRecordBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the bulk added domains
         * @type {Array.<CreateRecordBatchDetail> || null}
         */
        this.DetailList = null;

        /**
         * Bulk task ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new CreateRecordBatchDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Record information in the task of bulk adding domains
 * @class
 */
class CreateDomainBatchRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subdomain (host record).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Record type. For more information, see the `DescribeRecordType` API.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Split zone of the DNS record. For more information, see the `DescribeRecordLineList` API.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * Record value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * TTL value of the record
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Record adding status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Operation type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * ID of the record in the list
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
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyRecordGroup request structure.
 * @class
 */
class ModifyRecordGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * ID of the group to be modified
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DNS query volume in the current statistical dimension
 * @class
 */
class DomainAnalyticsDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS query volume in the current statistical dimension
         * @type {number || null}
         */
        this.Num = null;

        /**
         * Collection date for daily collection
         * @type {string || null}
         */
        this.DateKey = null;

        /**
         * The last hour (0–23) for hourly collection. For example, if `HourKey` is `23`, the DNS query volume in the statistical period of 22:00–23:00 will be collected.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.HourKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Num = 'Num' in params ? params.Num : null;
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.HourKey = 'HourKey' in params ? params.HourKey : null;

    }
}

/**
 * DeleteRecordGroup request structure.
 * @class
 */
class DeleteRecordGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeDomain response structure.
 * @class
 */
class DescribeDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain information
         * @type {DomainInfo || null}
         */
        this.DomainInfo = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DomainInfo) {
            let obj = new DomainInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordLineList response structure.
 * @class
 */
class DescribeRecordLineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of split zones.
         * @type {Array.<LineInfo> || null}
         */
        this.LineList = null;

        /**
         * List of split zone groups.
         * @type {Array.<LineGroupInfo> || null}
         */
        this.LineGroupList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LineList) {
            this.LineList = new Array();
            for (let z in params.LineList) {
                let obj = new LineInfo();
                obj.deserialize(params.LineList[z]);
                this.LineList.push(obj);
            }
        }

        if (params.LineGroupList) {
            this.LineGroupList = new Array();
            for (let z in params.LineGroupList) {
                let obj = new LineGroupInfo();
                obj.deserialize(params.LineGroupList[z]);
                this.LineGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Domain details
 * @class
 */
class DomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain ID
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * Domain status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * DNS plan level
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * Domain group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Whether the domain is starred
         * @type {string || null}
         */
        this.IsMark = null;

        /**
         * TTL (DNS record cache time)
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Whether CNAME flattening is enabled
         * @type {string || null}
         */
        this.CnameSpeedup = null;

        /**
         * Domain remarks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Domain Punycode
         * @type {string || null}
         */
        this.Punycode = null;

        /**
         * DNS status of the domain
         * @type {string || null}
         */
        this.DnsStatus = null;

        /**
         * NS list of the domain
         * @type {Array.<string> || null}
         */
        this.DnspodNsList = null;

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain level ID
         * @type {number || null}
         */
        this.GradeLevel = null;

        /**
         * Domain user ID
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * Whether the domain is a VIP domain
         * @type {string || null}
         */
        this.IsVip = null;

        /**
         * Domain owner account
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * Domain level description
         * @type {string || null}
         */
        this.GradeTitle = null;

        /**
         * Domain creation time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Last update time
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * Tencent Cloud account `Uin`
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * NS list actually used by the domain
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ActualNsList = null;

        /**
         * Number of domain records
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * Alias of the domain account owner
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OwnerNick = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.IsMark = 'IsMark' in params ? params.IsMark : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.CnameSpeedup = 'CnameSpeedup' in params ? params.CnameSpeedup : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Punycode = 'Punycode' in params ? params.Punycode : null;
        this.DnsStatus = 'DnsStatus' in params ? params.DnsStatus : null;
        this.DnspodNsList = 'DnspodNsList' in params ? params.DnspodNsList : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GradeLevel = 'GradeLevel' in params ? params.GradeLevel : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.GradeTitle = 'GradeTitle' in params ? params.GradeTitle : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ActualNsList = 'ActualNsList' in params ? params.ActualNsList : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.OwnerNick = 'OwnerNick' in params ? params.OwnerNick : null;

    }
}

/**
 * CreateDomainBatch request structure.
 * @class
 */
class CreateDomainBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain array
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

        /**
         * Add A records of @ and www for each domain with the record value of the IP. If this parameter is not passed in or is set to an empty string or null, only the domain but not the records will be added.
         * @type {string || null}
         */
        this.RecordValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainList = 'DomainList' in params ? params.DomainList : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;

    }
}

/**
 * ModifyRecordGroup response structure.
 * @class
 */
class ModifyRecordGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the modified group
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainGroupList request structure.
 * @class
 */
class DescribeDomainGroupListRequest extends  AbstractModel {
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
 * Element in the domain list
 * @class
 */
class DomainListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID assigned to the domain by the system
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * Original format of the domain
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Domain status. Valid values: `ENABLE` (normal), `PAUSE` (suspended), `SPAM` (blocked).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Default TTL of the default DNS record of the domain
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Whether CNAME flattening is enabled. Valid values: `ENABLE` (enabled); `DISABLE` (disabled).
         * @type {string || null}
         */
        this.CNAMESpeedup = null;

        /**
         * DNS configuration status. Valid values: `DNSERROR` (error), an empty string (normal).
         * @type {string || null}
         */
        this.DNSStatus = null;

        /**
         * Plan level code of the domain
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * Group ID of the domain
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Whether search engine push optimization is enabled. Valid values: `YES` (yes), `NO` (no).
         * @type {string || null}
         */
        this.SearchEnginePush = null;

        /**
         * Domain remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Punycode-encoded domain format
         * @type {string || null}
         */
        this.Punycode = null;

        /**
         * Effective DNS assigned to the domain by the system
         * @type {Array.<string> || null}
         */
        this.EffectiveDNS = null;

        /**
         * Number corresponding to the plan level of the domain
         * @type {number || null}
         */
        this.GradeLevel = null;

        /**
         * Plan name
         * @type {string || null}
         */
        this.GradeTitle = null;

        /**
         * Whether it is a paid plan
         * @type {string || null}
         */
        this.IsVip = null;

        /**
         * Activation time of the paid plan
         * @type {string || null}
         */
        this.VipStartAt = null;

        /**
         * Expiry time of the paid plan
         * @type {string || null}
         */
        this.VipEndAt = null;

        /**
         * Whether VIP automatic renewal is enabled for the domain. Valid values: `YES` (yes); `NO` (no). Default value: `DEFAULT`.
         * @type {string || null}
         */
        this.VipAutoRenew = null;

        /**
         * Number of records under the domain
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * Domain adding time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Domain update time
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * Account of the domain
         * @type {string || null}
         */
        this.Owner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.CNAMESpeedup = 'CNAMESpeedup' in params ? params.CNAMESpeedup : null;
        this.DNSStatus = 'DNSStatus' in params ? params.DNSStatus : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchEnginePush = 'SearchEnginePush' in params ? params.SearchEnginePush : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Punycode = 'Punycode' in params ? params.Punycode : null;
        this.EffectiveDNS = 'EffectiveDNS' in params ? params.EffectiveDNS : null;
        this.GradeLevel = 'GradeLevel' in params ? params.GradeLevel : null;
        this.GradeTitle = 'GradeTitle' in params ? params.GradeTitle : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.VipStartAt = 'VipStartAt' in params ? params.VipStartAt : null;
        this.VipEndAt = 'VipEndAt' in params ? params.VipEndAt : null;
        this.VipAutoRenew = 'VipAutoRenew' in params ? params.VipAutoRenew : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.Owner = 'Owner' in params ? params.Owner : null;

    }
}

/**
 * DeleteDomainBatch request structure.
 * @class
 */
class DeleteDomainBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain array.
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainList = 'DomainList' in params ? params.DomainList : null;

    }
}

/**
 * DescribeRecordType response structure.
 * @class
 */
class DescribeRecordTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of record types
         * @type {Array.<string> || null}
         */
        this.TypeList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeList = 'TypeList' in params ? params.TypeList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDomainRemark response structure.
 * @class
 */
class ModifyDomainRemarkResponse extends  AbstractModel {
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
 * DescribeDomainAliasList response structure.
 * @class
 */
class DescribeDomainAliasListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain aliases
         * @type {Array.<DomainAliasInfo> || null}
         */
        this.DomainAliasList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DomainAliasList) {
            this.DomainAliasList = new Array();
            for (let z in params.DomainAliasList) {
                let obj = new DomainAliasInfo();
                obj.deserialize(params.DomainAliasList[z]);
                this.DomainAliasList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRecordToGroup request structure.
 * @class
 */
class ModifyRecordToGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Record ID. Separate multiple IDs by vertical bar ("|").
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * Count info of the queried record list
 * @class
 */
class RecordCountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The subdomain count.
         * @type {number || null}
         */
        this.SubdomainCount = null;

        /**
         * The count of records returned in the list.
         * @type {number || null}
         */
        this.ListCount = null;

        /**
         * The total record count.
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubdomainCount = 'SubdomainCount' in params ? params.SubdomainCount : null;
        this.ListCount = 'ListCount' in params ? params.ListCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DeleteShareDomain response structure.
 * @class
 */
class DeleteShareDomainResponse extends  AbstractModel {
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
 * ModifyRecord request structure.
 * @class
 */
class ModifyRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Record type, which is obtained through the record type API. The value contains uppercase letters, such as `A`.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Record split zone, which is obtained through the record split zone API.
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * Record value, such as `IP : 200.200.200.200`, `CNAME : cname.dnspod.com`, and `MX : mail.dnspod.com`.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * The record ID. You can view all DNS records and their IDs via the `DescribeRecordList` API.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * Host record such as `www`. If it is not passed in, it will be `@` by default.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Split zone ID, which is obtained through the record split zone API. The value is a string such as `10=1`. The `RecordLineId` parameter has a higher priority than `RecordLine`. If both of them are passed in, `RecordLineId` will be used first.
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * MX priority, which is required for an MX record and will take effect if the record type is MX. Value range: 1–20.
         * @type {number || null}
         */
        this.MX = null;

        /**
         * TTL. Value range: 1–604800. The minimum value varies by domain level.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Weight information, which is an integer between 0 and 100. It is supported only for enterprise VIP domains. `0` indicates not to pass in this parameter, i.e., not to set the weight.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Initial status of the record. Valid values: ENABLE, DISABLE. Default value: ENABLE. If `DISABLE` is passed in, the DNS record won't take effect, and the limit on round-robin DNS won't be verified.
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Record information in the bulk task
 * @class
 */
class BatchRecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * Subdomain (host record).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Record type. For more information, see the `DescribeRecordType` API.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Split zone of the DNS record. For more information, see the `DescribeRecordLineList` API.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * Record value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * TTL value of the record
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Record adding status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Operation type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * ID of the record in the list
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Record status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * MX weight of the record
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MX = null;

        /**
         * The record weight.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * Information of a split zone group
 * @class
 */
class LineGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Split zone group ID
         * @type {string || null}
         */
        this.LineId = null;

        /**
         * Split zone group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Group type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * List of split zones in the split zone group
         * @type {Array.<string> || null}
         */
        this.LineList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LineId = 'LineId' in params ? params.LineId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.LineList = 'LineList' in params ? params.LineList : null;

    }
}

/**
 * DeleteDomain request structure.
 * @class
 */
class DeleteDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyDomainOwner request structure.
 * @class
 */
class ModifyDomainOwnerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The account to which to transfer the domain, which can be an UIN or email address
         * @type {string || null}
         */
        this.Account = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * Domain sharing information
 * @class
 */
class DomainShareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account with which the domain is shared
         * @type {string || null}
         */
        this.ShareTo = null;

        /**
         * Sharing mode. Valid values: `rw` (read/write), `r` (read-only).
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Sharing status. Valid values: `enabled` (shared successfully); `pending` (the account shared to does not exist and is pending registration).
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
        this.ShareTo = 'ShareTo' in params ? params.ShareTo : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeRecordLineList request structure.
 * @class
 */
class DescribeRecordLineListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain level.
+ Original plan. Valid values: `D_FREE` (Free Plan); `D_PLUS` (Individual Plus Plan); `D_EXTRA` (Enterprise 1 Plan); `D_EXPERT` (Enterprise 2 Plan); `D_ULTRA` (Enterprise 3 Plan).
+ New plan. Valid values: `DP_FREE` (Free Version); `DP_PLUS` (Professional); `DP_EXTRA` (Enterprise Basic); `DP_EXPERT` (Enterprise); `DP_ULTRA` (Ultimate).
         * @type {string || null}
         */
        this.DomainGrade = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeRecordList response structure.
 * @class
 */
class DescribeRecordListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The record count info.
         * @type {RecordCountInfo || null}
         */
        this.RecordCountInfo = null;

        /**
         * The record list result.
         * @type {Array.<RecordListItem> || null}
         */
        this.RecordList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordCountInfo) {
            let obj = new RecordCountInfo();
            obj.deserialize(params.RecordCountInfo)
            this.RecordCountInfo = obj;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new RecordListItem();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRecordBatch request structure.
 * @class
 */
class CreateRecordBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain ID. Separate multiple ones by comma.
         * @type {Array.<string> || null}
         */
        this.DomainIdList = null;

        /**
         * Record array
         * @type {Array.<AddRecordBatch> || null}
         */
        this.RecordList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainIdList = 'DomainIdList' in params ? params.DomainIdList : null;

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new AddRecordBatch();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }

    }
}

/**
 * DeleteDomainAlias request structure.
 * @class
 */
class DeleteDomainAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain alias ID. You can view all domain aliases and their IDs via the `DescribeDomainAliasList` API.
         * @type {number || null}
         */
        this.DomainAliasId = null;

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainAliasId = 'DomainAliasId' in params ? params.DomainAliasId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * Information of a domain alias
 * @class
 */
class DomainAliasInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain alias ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Domain alias
         * @type {string || null}
         */
        this.DomainAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.DomainAlias = 'DomainAlias' in params ? params.DomainAlias : null;

    }
}

/**
 * ModifyDomainLock request structure.
 * @class
 */
class ModifyDomainLockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Number of days to lock the domain. The maximum number of locked days can be obtained by calling the API for getting the permissions of a domain.
         * @type {number || null}
         */
        this.LockDays = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LockDays = 'LockDays' in params ? params.LockDays : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyDomainStatus request structure.
 * @class
 */
class ModifyDomainStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain status. Valid values: enable; disable.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DNS query volume of the subdomain alias
 * @class
 */
class SubdomainAliasAnalyticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics on the DNS query volume of a subdomain
         * @type {SubdomainAnalyticsInfo || null}
         */
        this.Info = null;

        /**
         * DNS query volume in the current statistical dimension
         * @type {Array.<DomainAnalyticsDetail> || null}
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

        if (params.Info) {
            let obj = new SubdomainAnalyticsInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DomainAnalyticsDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * ModifyDomainStatus response structure.
 * @class
 */
class ModifyDomainStatusResponse extends  AbstractModel {
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
 * Records to be bulk added
 * @class
 */
class AddRecordBatch extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record type. For more information, see the `DescribeRecordType` API.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Record value.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Subdomain (host record), which is `@` by default.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Split zone of the DNS record. For more information, see the `DescribeRecordLineList` API. If neither `RecordLine` nor `RecordLineId` is specified, the default split zone will be used.
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * Split zone ID of the DNS record. If both `RecordLine` and `RecordLineId` are specified, `RecordLineId` will be used.
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * The record weight (not supported).
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * MX record value. It is `0` by default for non-MX records and required for MX records.
         * @type {number || null}
         */
        this.MX = null;

        /**
         * TTL value of the record, which is `600` by default.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Record status (not supported). Valid values: `0` (disabled); `1` (enabled). Default value: `1`.
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * Record remarks (not supported).
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeRecord request structure.
 * @class
 */
class DescribeRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The record ID. You can view all DNS records and their IDs via the `DescribeRecordList` API.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * CreateDomainGroup response structure.
 * @class
 */
class CreateDomainGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubdomainAnalytics request structure.
 * @class
 */
class DescribeSubdomainAnalyticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain of the DNS query volume to be queried
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Query start date in the format of `YYYY-MM-DD`
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * Query end date in the format of `YYYY-MM-DD`
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * The subdomain of the DNS query volume to be queried
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * `DATE`: Daily. `HOUR`: Hourly
         * @type {string || null}
         */
        this.DnsFormat = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.DnsFormat = 'DnsFormat' in params ? params.DnsFormat : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DeleteRecord request structure.
 * @class
 */
class DeleteRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The record ID. You can view all DNS records and their IDs via the `DescribeRecordList` API.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeDomain request structure.
 * @class
 */
class DescribeDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * List of domain groups
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Group type
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Number of domains in the group
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * ModifyRecordStatus request structure.
 * @class
 */
class ModifyRecordStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The record ID. You can view all DNS records and their IDs via the `DescribeRecordList` API.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * Record status. Valid values: `ENABLE`, `DISABLE`. If `DISABLE` is passed in, the DNS record won't take effect, and the limit on round-robin DNS won't be verified.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * CreateRecord response structure.
 * @class
 */
class CreateRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRecordGroup response structure.
 * @class
 */
class DeleteRecordGroupResponse extends  AbstractModel {
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
 * Record information
 * @class
 */
class RecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Subdomain (host record).
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Record type. For more information, see the `DescribeRecordType` API.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Split zone of the DNS record. For more information, see the `DescribeRecordLineList` API.
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * Split zone ID of the DNS record. For more information, see the `DescribeRecordLineList` API.
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * Record value.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Record weight.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * MX record value. It is 0 by default for non-MX records.
         * @type {number || null}
         */
        this.MX = null;

        /**
         * TTL value of the record.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Record status. Valid values: 0 (disabled); 1 (enabled).
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * D-Monitor status of the record.
"Ok" : The server is normal.
"Warn" : There is an alarm on this record, and the server returns 4XX.
"Down" : The server is down.
"" : D-Monitor is disabled for this record.
         * @type {string || null}
         */
        this.MonitorStatus = null;

        /**
         * Record remarks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Last update time of the record.
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * Domain ID.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * Response structure for bulk adding records
 * @class
 */
class CreateRecordBatchDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * See `RecordInfoBatch`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CreateRecordBatchRecord> || null}
         */
        this.RecordList = null;

        /**
         * Task ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Domain
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain level
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DomainGrade = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * Task running status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Operation type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Domain ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new CreateRecordBatchRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeSubdomainAnalytics response structure.
 * @class
 */
class DescribeSubdomainAnalyticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS query volume in the current statistical dimension
         * @type {Array.<DomainAnalyticsDetail> || null}
         */
        this.Data = null;

        /**
         * Statistics on the DNS query volume of a subdomain
         * @type {SubdomainAnalyticsInfo || null}
         */
        this.Info = null;

        /**
         * DNS query volume of the subdomain alias
         * @type {Array.<SubdomainAliasAnalyticsItem> || null}
         */
        this.AliasData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new DomainAnalyticsDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.Info) {
            let obj = new SubdomainAnalyticsInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.AliasData) {
            this.AliasData = new Array();
            for (let z in params.AliasData) {
                let obj = new SubdomainAliasAnalyticsItem();
                obj.deserialize(params.AliasData[z]);
                this.AliasData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRecord response structure.
 * @class
 */
class ModifyRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRecordToGroup response structure.
 * @class
 */
class ModifyRecordToGroupResponse extends  AbstractModel {
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
 * ModifyDomainUnlock response structure.
 * @class
 */
class ModifyDomainUnlockResponse extends  AbstractModel {
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
 * DescribeDomainLogList request structure.
 * @class
 */
class DescribeDomainLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * Record offset starting from `0`. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Total number of logs to be obtained. For example, `20` indicates to obtain 20 logs. Default value: `500`. Maximum value: `500`.
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDomainList response structure.
 * @class
 */
class DescribeDomainListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics on the list page
         * @type {DomainCountInfo || null}
         */
        this.DomainCountInfo = null;

        /**
         * Domain list
         * @type {Array.<DomainListItem> || null}
         */
        this.DomainList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DomainCountInfo) {
            let obj = new DomainCountInfo();
            obj.deserialize(params.DomainCountInfo)
            this.DomainCountInfo = obj;
        }

        if (params.DomainList) {
            this.DomainList = new Array();
            for (let z in params.DomainList) {
                let obj = new DomainListItem();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRecordBatch request structure.
 * @class
 */
class ModifyRecordBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of record IDs. You can view all DNS records and their IDs via the `DescribeRecordList` API.
         * @type {Array.<number> || null}
         */
        this.RecordIdList = null;

        /**
         * The field to be modified. Valid values: `sub_domain`, `record_type`, `area`, `value`, `mx`, `ttl`, `status`.
         * @type {string || null}
         */
        this.Change = null;

        /**
         * The value to be changed to, which is required and subject to the `change` field.
         * @type {string || null}
         */
        this.ChangeTo = null;

        /**
         * The record value to be changed to, which is required only if the `change` field is `record_type`.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * MX record priority, which is required only if the `Change` field is `mx`.
         * @type {string || null}
         */
        this.MX = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordIdList = 'RecordIdList' in params ? params.RecordIdList : null;
        this.Change = 'Change' in params ? params.Change : null;
        this.ChangeTo = 'ChangeTo' in params ? params.ChangeTo : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.MX = 'MX' in params ? params.MX : null;

    }
}

/**
 * DeleteRecord response structure.
 * @class
 */
class DeleteRecordResponse extends  AbstractModel {
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
 * Record information in the task of bulk adding records
 * @class
 */
class CreateRecordBatchRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subdomain (host record).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Record type. For more information, see the `DescribeRecordType` API.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Split zone of the DNS record. For more information, see the `DescribeRecordLineList` API.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * Record value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * TTL value of the record
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Record adding status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Operation type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * ID of the record in the list
         * @type {number || null}
         */
        this.Id = null;

        /**
         * MX weight of the record
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MX = null;

        /**
         * The record weight.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * CreateDomain response structure.
 * @class
 */
class CreateDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain information
         * @type {DomainCreateInfo || null}
         */
        this.DomainInfo = null;

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

        if (params.DomainInfo) {
            let obj = new DomainCreateInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List statistics by page
 * @class
 */
class DomainCountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible domains
         * @type {number || null}
         */
        this.DomainTotal = null;

        /**
         * Number of all domains that can be viewed by the user
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * Number of domains added under the user account
         * @type {number || null}
         */
        this.MineTotal = null;

        /**
         * Number of domains shared with the user
         * @type {number || null}
         */
        this.ShareTotal = null;

        /**
         * Number of paid domains
         * @type {number || null}
         */
        this.VipTotal = null;

        /**
         * Number of suspended domains
         * @type {number || null}
         */
        this.PauseTotal = null;

        /**
         * Number of domains with a DNS configuration error
         * @type {number || null}
         */
        this.ErrorTotal = null;

        /**
         * Number of locked domains
         * @type {number || null}
         */
        this.LockTotal = null;

        /**
         * Number of blocked domains
         * @type {number || null}
         */
        this.SpamTotal = null;

        /**
         * Number of domains that will expire within 30 days
         * @type {number || null}
         */
        this.VipExpire = null;

        /**
         * Number of domains shared with others
         * @type {number || null}
         */
        this.ShareOutTotal = null;

        /**
         * Number of domains in the specified group
         * @type {number || null}
         */
        this.GroupTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainTotal = 'DomainTotal' in params ? params.DomainTotal : null;
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.MineTotal = 'MineTotal' in params ? params.MineTotal : null;
        this.ShareTotal = 'ShareTotal' in params ? params.ShareTotal : null;
        this.VipTotal = 'VipTotal' in params ? params.VipTotal : null;
        this.PauseTotal = 'PauseTotal' in params ? params.PauseTotal : null;
        this.ErrorTotal = 'ErrorTotal' in params ? params.ErrorTotal : null;
        this.LockTotal = 'LockTotal' in params ? params.LockTotal : null;
        this.SpamTotal = 'SpamTotal' in params ? params.SpamTotal : null;
        this.VipExpire = 'VipExpire' in params ? params.VipExpire : null;
        this.ShareOutTotal = 'ShareOutTotal' in params ? params.ShareOutTotal : null;
        this.GroupTotal = 'GroupTotal' in params ? params.GroupTotal : null;

    }
}

/**
 * ModifyRecordBatch response structure.
 * @class
 */
class ModifyRecordBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bulk task ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * See `modifyRecordBatchDetail`.
         * @type {Array.<ModifyRecordBatchDetail> || null}
         */
        this.DetailList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new ModifyRecordBatchDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainLogList response structure.
 * @class
 */
class DescribeDomainLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.LogList = null;

        /**
         * Number of results per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of logs
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
        this.LogList = 'LogList' in params ? params.LogList : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordType request structure.
 * @class
 */
class DescribeRecordTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain level.
+ Original plan. Valid values: `D_FREE` (Free Plan); `D_PLUS` (Individual Plus Plan); `D_EXTRA` (Enterprise 1 Plan); `D_EXPERT` (Enterprise 2 Plan); `D_ULTRA` (Enterprise 3 Plan).
+ New plan. Valid values: `DP_FREE` (Free Version); `DP_PLUS` (Professional); `DP_EXTRA` (Enterprise Basic); `DP_EXPERT` (Enterprise); `DP_ULTRA` (Ultimate).
         * @type {string || null}
         */
        this.DomainGrade = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;

    }
}

/**
 * Record list elements
 * @class
 */
class RecordListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The record ID.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * The record value.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * The record status. Valid values: `ENABLE` (enabled), `DISABLE` (disabled).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The update time.
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * The host name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The record split zone.
         * @type {string || null}
         */
        this.Line = null;

        /**
         * The split zone ID.
         * @type {string || null}
         */
        this.LineId = null;

        /**
         * The record type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The record weight, which is required for round-robin DNS records.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * The monitoring status of the record. Valid values: `OK` (normal), `WARN` (warning), and `DOWN` (downtime). It is empty if no monitoring is set or the monitoring is suspended.
         * @type {string || null}
         */
        this.MonitorStatus = null;

        /**
         * The record remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * The record cache time.
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * The MX value, applicable to the MX record only.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MX = null;

        /**
         * Whether it is a default NS record.
         * @type {boolean || null}
         */
        this.DefaultNS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Line = 'Line' in params ? params.Line : null;
        this.LineId = 'LineId' in params ? params.LineId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.DefaultNS = 'DefaultNS' in params ? params.DefaultNS : null;

    }
}

/**
 * CreateDomainBatch response structure.
 * @class
 */
class CreateDomainBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the bulk added domains
         * @type {Array.<CreateDomainBatchDetail> || null}
         */
        this.DetailList = null;

        /**
         * Bulk task ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new CreateDomainBatchDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainGroupList response structure.
 * @class
 */
class DescribeDomainGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group list
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDomainOwner response structure.
 * @class
 */
class ModifyDomainOwnerResponse extends  AbstractModel {
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
 * Statistics on the DNS query volume of a subdomain
 * @class
 */
class SubdomainAnalyticsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * `DATE`: Daily; `HOUR`: Hourly
         * @type {string || null}
         */
        this.DnsFormat = null;

        /**
         * Total DNS query volume for the current statistical period
         * @type {number || null}
         */
        this.DnsTotal = null;

        /**
         * The queried domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Start date of the current statistical period
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * End date of the current statistical period
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * Subdomain
         * @type {string || null}
         */
        this.Subdomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DnsFormat = 'DnsFormat' in params ? params.DnsFormat : null;
        this.DnsTotal = 'DnsTotal' in params ? params.DnsTotal : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;

    }
}

/**
 * Response structure for bulk adding records
 * @class
 */
class ModifyRecordBatchDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * See `RecordInfoBatchModify`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BatchRecordInfo> || null}
         */
        this.RecordList = null;

        /**
         * Task ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Domain
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain level
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DomainGrade = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * Task running status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Operation type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Domain ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new BatchRecordInfo();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * Details of batch deleting domains
 * @class
 */
class DeleteDomainBatchDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain ID.
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * The domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The error message.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Error = null;

        /**
         * The domain deletion status.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The operation.
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Error = 'Error' in params ? params.Error : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * CreateDomain request structure.
 * @class
 */
class CreateDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The group ID of the domain. You can view the group information of this domain via the `DescribeDomainGroupList` API.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Whether the domain is starred. Valid values: yes, no.
         * @type {string || null}
         */
        this.IsMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.IsMark = 'IsMark' in params ? params.IsMark : null;

    }
}

/**
 * DescribeDomainShareInfo response structure.
 * @class
 */
class DescribeDomainShareInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain sharing information
         * @type {Array.<DomainShareInfo> || null}
         */
        this.ShareList = null;

        /**
         * Owner account of the domain
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ShareList) {
            this.ShareList = new Array();
            for (let z in params.ShareList) {
                let obj = new DomainShareInfo();
                obj.deserialize(params.ShareList[z]);
                this.ShareList.push(obj);
            }
        }
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDomainRemark request structure.
 * @class
 */
class ModifyDomainRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * Domain remarks. To delete the remarks, submit empty content.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * CreateDomainAlias response structure.
 * @class
 */
class CreateDomainAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain alias ID
         * @type {number || null}
         */
        this.DomainAliasId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainAliasId = 'DomainAliasId' in params ? params.DomainAliasId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordList request structure.
 * @class
 */
class DescribeRecordListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain for which DNS records are to be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The ID of the domain whose DNS records are requested. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * The host header of a DNS record. If this parameter is passed in, only the DNS record corresponding to this host header will be returned.
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * The type of DNS record, such as A, CNAME, NS, AAAA, explicit URL, implicit URL, CAA, or SPF record.
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * The name of the split zone for which DNS records are requested. You can view split zones allowed by this domain via the `DescribeRecordLineList` API.
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * The ID of the split zone for which DNS records are requested. If `RecordLineId` is passed in, `RecordLine` is ignored. You can view split zones allowed by this domain via the `DescribeRecordLineList` API.
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * The group ID passed in to get DNS records in the group.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The keyword for searching for DNS records. Host headers and record values are supported.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * The sorting field. Available values: `name`, `line`, `type`, `value`, `weight`, `mx`, and `ttl,updated_on`.
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * The sorting type. Valid values: `ASC` (ascending, default), `DESC` (descending).
         * @type {string || null}
         */
        this.SortType = null;

        /**
         * The offset. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The limit. It defaults to 100 and can be up to 3,000.
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.SortType = 'SortType' in params ? params.SortType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeRecord response structure.
 * @class
 */
class DescribeRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record information
         * @type {RecordInfo || null}
         */
        this.RecordInfo = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordInfo) {
            let obj = new RecordInfo();
            obj.deserialize(params.RecordInfo)
            this.RecordInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainPurview response structure.
 * @class
 */
class DescribeDomainPurviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission list of the domain
         * @type {Array.<PurviewInfo> || null}
         */
        this.PurviewList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PurviewList) {
            this.PurviewList = new Array();
            for (let z in params.PurviewList) {
                let obj = new PurviewInfo();
                obj.deserialize(params.PurviewList[z]);
                this.PurviewList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRecordStatus response structure.
 * @class
 */
class ModifyRecordStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRecordGroup request structure.
 * @class
 */
class CreateRecordGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Group name
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeRecordGroupList response structure.
 * @class
 */
class DescribeRecordGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group list
         * @type {Array.<RecordGroupInfo> || null}
         */
        this.GroupList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new RecordGroupInfo();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDomainGroup request structure.
 * @class
 */
class CreateDomainGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain group
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * Information of a split zone
 * @class
 */
class LineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Split zone name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Split zone ID
         * @type {string || null}
         */
        this.LineId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.LineId = 'LineId' in params ? params.LineId : null;

    }
}

/**
 * DeleteDomain response structure.
 * @class
 */
class DeleteDomainResponse extends  AbstractModel {
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
 * DescribeDomainAliasList request structure.
 * @class
 */
class DescribeDomainAliasListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * CreateDomainAlias request structure.
 * @class
 */
class CreateDomainAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain alias
         * @type {string || null}
         */
        this.DomainAlias = null;

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainAlias = 'DomainAlias' in params ? params.DomainAlias : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DeleteShareDomain request structure.
 * @class
 */
class DeleteShareDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Account of the domain to be shared
         * @type {string || null}
         */
        this.Account = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeRecordGroupList request structure.
 * @class
 */
class DescribeRecordGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored.
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page for pagination
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Domain permission
 * @class
 */
class PurviewInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Permission name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Permission value
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
 * ModifyRecordRemark request structure.
 * @class
 */
class ModifyRecordRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The record ID. You can view all DNS records and their IDs via the `DescribeRecordList` API.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * DNS record remarks. To delete the remarks, submit empty content.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifyRecordRemark response structure.
 * @class
 */
class ModifyRecordRemarkResponse extends  AbstractModel {
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
 * DescribeDomainList request structure.
 * @class
 */
class DescribeDomainListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain group type. Valid values: `ALL` (default), `MINE`, `SHARE`, `ISMARK`, `PAUSE`, `VIP`, `RECENT`, `SHARE_OUT`, and `FREE`.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record offset starting from `0`. Default value: `0`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of domains to be obtained. For example, `20` indicates to obtain 20 domains. Default value: `3000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Group ID, which can be passed in to get all domains in the specified group
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Keyword for searching for a domain
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * Domain information returned during domain creation
 * @class
 */
class DomainCreateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain Punycode
         * @type {string || null}
         */
        this.Punycode = null;

        /**
         * NS list of the domain
         * @type {Array.<string> || null}
         */
        this.GradeNsList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Punycode = 'Punycode' in params ? params.Punycode : null;
        this.GradeNsList = 'GradeNsList' in params ? params.GradeNsList : null;

    }
}

/**
 * DescribeDomainPurview request structure.
 * @class
 */
class DescribeDomainPurviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * Response structure for bulk adding domains
 * @class
 */
class CreateDomainBatchDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * See `RecordInfoBatch`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CreateDomainBatchRecord> || null}
         */
        this.RecordList = null;

        /**
         * Task ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Domain
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain level
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DomainGrade = null;

        /**
         * Error message
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * Task running status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Operation type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new CreateDomainBatchRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * ModifyDomainUnlock request structure.
 * @class
 */
class ModifyDomainUnlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Domain unlock code, which will be returned when the domain is locked.
         * @type {string || null}
         */
        this.LockCode = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LockCode = 'LockCode' in params ? params.LockCode : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyDomainLock response structure.
 * @class
 */
class ModifyDomainLockResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain lock information
         * @type {LockInfo || null}
         */
        this.LockInfo = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LockInfo) {
            let obj = new LockInfo();
            obj.deserialize(params.LockInfo)
            this.LockInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Domain lock information
 * @class
 */
class LockInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain ID
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * Domain unlock code
         * @type {string || null}
         */
        this.LockCode = null;

        /**
         * Automatic unlock date of the domain
         * @type {string || null}
         */
        this.LockEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LockCode = 'LockCode' in params ? params.LockCode : null;
        this.LockEnd = 'LockEnd' in params ? params.LockEnd : null;

    }
}

/**
 * CreateRecordGroup response structure.
 * @class
 */
class CreateRecordGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * New group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainShareInfo request structure.
 * @class
 */
class DescribeDomainShareInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The domain ID. `DomainId` takes priority over `Domain`. If `DomainId` is passed in, `Domain` is ignored. You can view all `Domain` and `DomainId` values via the `DescribeDomainList` API.
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

module.exports = {
    CreateRecordRequest: CreateRecordRequest,
    DeleteDomainAliasResponse: DeleteDomainAliasResponse,
    DeleteDomainBatchResponse: DeleteDomainBatchResponse,
    RecordGroupInfo: RecordGroupInfo,
    CreateRecordBatchResponse: CreateRecordBatchResponse,
    CreateDomainBatchRecord: CreateDomainBatchRecord,
    ModifyRecordGroupRequest: ModifyRecordGroupRequest,
    DomainAnalyticsDetail: DomainAnalyticsDetail,
    DeleteRecordGroupRequest: DeleteRecordGroupRequest,
    DescribeDomainResponse: DescribeDomainResponse,
    DescribeRecordLineListResponse: DescribeRecordLineListResponse,
    DomainInfo: DomainInfo,
    CreateDomainBatchRequest: CreateDomainBatchRequest,
    ModifyRecordGroupResponse: ModifyRecordGroupResponse,
    DescribeDomainGroupListRequest: DescribeDomainGroupListRequest,
    DomainListItem: DomainListItem,
    DeleteDomainBatchRequest: DeleteDomainBatchRequest,
    DescribeRecordTypeResponse: DescribeRecordTypeResponse,
    ModifyDomainRemarkResponse: ModifyDomainRemarkResponse,
    DescribeDomainAliasListResponse: DescribeDomainAliasListResponse,
    ModifyRecordToGroupRequest: ModifyRecordToGroupRequest,
    RecordCountInfo: RecordCountInfo,
    DeleteShareDomainResponse: DeleteShareDomainResponse,
    ModifyRecordRequest: ModifyRecordRequest,
    BatchRecordInfo: BatchRecordInfo,
    LineGroupInfo: LineGroupInfo,
    DeleteDomainRequest: DeleteDomainRequest,
    ModifyDomainOwnerRequest: ModifyDomainOwnerRequest,
    DomainShareInfo: DomainShareInfo,
    DescribeRecordLineListRequest: DescribeRecordLineListRequest,
    DescribeRecordListResponse: DescribeRecordListResponse,
    CreateRecordBatchRequest: CreateRecordBatchRequest,
    DeleteDomainAliasRequest: DeleteDomainAliasRequest,
    DomainAliasInfo: DomainAliasInfo,
    ModifyDomainLockRequest: ModifyDomainLockRequest,
    ModifyDomainStatusRequest: ModifyDomainStatusRequest,
    SubdomainAliasAnalyticsItem: SubdomainAliasAnalyticsItem,
    ModifyDomainStatusResponse: ModifyDomainStatusResponse,
    AddRecordBatch: AddRecordBatch,
    DescribeRecordRequest: DescribeRecordRequest,
    CreateDomainGroupResponse: CreateDomainGroupResponse,
    DescribeSubdomainAnalyticsRequest: DescribeSubdomainAnalyticsRequest,
    DeleteRecordRequest: DeleteRecordRequest,
    DescribeDomainRequest: DescribeDomainRequest,
    GroupInfo: GroupInfo,
    ModifyRecordStatusRequest: ModifyRecordStatusRequest,
    CreateRecordResponse: CreateRecordResponse,
    DeleteRecordGroupResponse: DeleteRecordGroupResponse,
    RecordInfo: RecordInfo,
    CreateRecordBatchDetail: CreateRecordBatchDetail,
    DescribeSubdomainAnalyticsResponse: DescribeSubdomainAnalyticsResponse,
    ModifyRecordResponse: ModifyRecordResponse,
    ModifyRecordToGroupResponse: ModifyRecordToGroupResponse,
    ModifyDomainUnlockResponse: ModifyDomainUnlockResponse,
    DescribeDomainLogListRequest: DescribeDomainLogListRequest,
    DescribeDomainListResponse: DescribeDomainListResponse,
    ModifyRecordBatchRequest: ModifyRecordBatchRequest,
    DeleteRecordResponse: DeleteRecordResponse,
    CreateRecordBatchRecord: CreateRecordBatchRecord,
    CreateDomainResponse: CreateDomainResponse,
    DomainCountInfo: DomainCountInfo,
    ModifyRecordBatchResponse: ModifyRecordBatchResponse,
    DescribeDomainLogListResponse: DescribeDomainLogListResponse,
    DescribeRecordTypeRequest: DescribeRecordTypeRequest,
    RecordListItem: RecordListItem,
    CreateDomainBatchResponse: CreateDomainBatchResponse,
    DescribeDomainGroupListResponse: DescribeDomainGroupListResponse,
    ModifyDomainOwnerResponse: ModifyDomainOwnerResponse,
    SubdomainAnalyticsInfo: SubdomainAnalyticsInfo,
    ModifyRecordBatchDetail: ModifyRecordBatchDetail,
    DeleteDomainBatchDetail: DeleteDomainBatchDetail,
    CreateDomainRequest: CreateDomainRequest,
    DescribeDomainShareInfoResponse: DescribeDomainShareInfoResponse,
    ModifyDomainRemarkRequest: ModifyDomainRemarkRequest,
    CreateDomainAliasResponse: CreateDomainAliasResponse,
    DescribeRecordListRequest: DescribeRecordListRequest,
    DescribeRecordResponse: DescribeRecordResponse,
    DescribeDomainPurviewResponse: DescribeDomainPurviewResponse,
    ModifyRecordStatusResponse: ModifyRecordStatusResponse,
    CreateRecordGroupRequest: CreateRecordGroupRequest,
    DescribeRecordGroupListResponse: DescribeRecordGroupListResponse,
    CreateDomainGroupRequest: CreateDomainGroupRequest,
    LineInfo: LineInfo,
    DeleteDomainResponse: DeleteDomainResponse,
    DescribeDomainAliasListRequest: DescribeDomainAliasListRequest,
    CreateDomainAliasRequest: CreateDomainAliasRequest,
    DeleteShareDomainRequest: DeleteShareDomainRequest,
    DescribeRecordGroupListRequest: DescribeRecordGroupListRequest,
    PurviewInfo: PurviewInfo,
    ModifyRecordRemarkRequest: ModifyRecordRemarkRequest,
    ModifyRecordRemarkResponse: ModifyRecordRemarkResponse,
    DescribeDomainListRequest: DescribeDomainListRequest,
    DomainCreateInfo: DomainCreateInfo,
    DescribeDomainPurviewRequest: DescribeDomainPurviewRequest,
    CreateDomainBatchDetail: CreateDomainBatchDetail,
    ModifyDomainUnlockRequest: ModifyDomainUnlockRequest,
    ModifyDomainLockResponse: ModifyDomainLockResponse,
    LockInfo: LockInfo,
    CreateRecordGroupResponse: CreateRecordGroupResponse,
    DescribeDomainShareInfoRequest: DescribeDomainShareInfoRequest,

}
