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
         * Domain ID. The `DomainId` parameter has a higher priority than `Domain`. If `DomainId` is passed in, `Domain` will be ignored.
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
         * Domain group ID
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
         * Domain ID. The `DomainId` parameter has a higher priority than `Domain`. If `DomainId` is passed in, `Domain` will be ignored.
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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Domain ID. The `DomainId` parameter has a higher priority than `Domain`. If `DomainId` is passed in, `Domain` will be ignored.
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
         * Domain ID. The `DomainId` parameter has a higher priority than `Domain`. If `DomainId` is passed in, `Domain` will be ignored.
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
         * Record ID.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * Domain ID. The `DomainId` parameter has a higher priority than `Domain`. If `DomainId` is passed in, `Domain` will be ignored.
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
         * Record ID.
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * Domain ID. The `DomainId` parameter has a higher priority than `Domain`. If `DomainId` is passed in, `Domain` will be ignored.
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
         * Record ID.
         * @type {number || null}
         */
        this.RecordId = null;

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

module.exports = {
    ModifyDomainStatusResponse: ModifyDomainStatusResponse,
    CreateRecordRequest: CreateRecordRequest,
    DeleteDomainRequest: DeleteDomainRequest,
    ModifyDomainRemarkResponse: ModifyDomainRemarkResponse,
    DescribeRecordResponse: DescribeRecordResponse,
    CreateDomainRequest: CreateDomainRequest,
    ModifyRecordResponse: ModifyRecordResponse,
    CreateRecordResponse: CreateRecordResponse,
    DeleteRecordResponse: DeleteRecordResponse,
    DomainCreateInfo: DomainCreateInfo,
    RecordInfo: RecordInfo,
    ModifyDomainStatusRequest: ModifyDomainStatusRequest,
    DeleteDomainResponse: DeleteDomainResponse,
    CreateDomainResponse: CreateDomainResponse,
    DescribeDomainRequest: DescribeDomainRequest,
    ModifyDomainRemarkRequest: ModifyDomainRemarkRequest,
    DescribeRecordRequest: DescribeRecordRequest,
    DescribeDomainResponse: DescribeDomainResponse,
    DomainInfo: DomainInfo,
    DeleteRecordRequest: DeleteRecordRequest,
    ModifyRecordRequest: ModifyRecordRequest,

}
