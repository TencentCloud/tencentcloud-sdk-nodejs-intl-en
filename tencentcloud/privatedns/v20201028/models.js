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
 * DescribeQuotaUsage response structure.
 * @class
 */
class DescribeQuotaUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TLD quota usage
         * @type {TldQuota || null}
         */
        this.TldQuota = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TldQuota) {
            let obj = new TldQuota();
            obj.deserialize(params.TldQuota)
            this.TldQuota = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrivateZoneVpc request structure.
 * @class
 */
class ModifyPrivateZoneVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private domain ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of all VPCs associated with private domain
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcSet = null;

        /**
         * List of authorized accounts' VPCs to associate with the private domain
         * @type {Array.<AccountVpcInfo> || null}
         */
        this.AccountVpcSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }

        if (params.AccountVpcSet) {
            this.AccountVpcSet = new Array();
            for (let z in params.AccountVpcSet) {
                let obj = new AccountVpcInfo();
                obj.deserialize(params.AccountVpcSet[z]);
                this.AccountVpcSet.push(obj);
            }
        }

    }
}

/**
 * DescribeAuditLog response structure.
 * @class
 */
class DescribeAuditLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of operation logs
         * @type {Array.<AuditLog> || null}
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
                let obj = new AuditLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrivateDNSAccountList response structure.
 * @class
 */
class DescribePrivateDNSAccountListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of Private DNS accounts
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of Private DNS accounts
         * @type {Array.<PrivateDNSAccount> || null}
         */
        this.AccountSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.AccountSet) {
            this.AccountSet = new Array();
            for (let z in params.AccountSet) {
                let obj = new PrivateDNSAccount();
                obj.deserialize(params.AccountSet[z]);
                this.AccountSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Private DNS account
 * @class
 */
class PrivateDNSAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Root account UIN
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Root account name
         * @type {string || null}
         */
        this.Account = null;

        /**
         * Account name
         * @type {string || null}
         */
        this.Nickname = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;

    }
}

/**
 * Output parameters of the associated VPC
 * @class
 */
class AccountVpcInfoOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of the VPC account
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * Time statistics
 * @class
 */
class DatePoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Value
         * @type {number || null}
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
        this.Date = 'Date' in params ? params.Date : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeAccountVpcList response structure.
 * @class
 */
class DescribeAccountVpcListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of VPCs
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * VPC list
         * @type {Array.<AccountVpcInfoOut> || null}
         */
        this.VpcSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new AccountVpcInfoOut();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Log details
 * @class
 */
class AuditLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Operator UIN
         * @type {string || null}
         */
        this.OperatorUin = null;

        /**
         * Log content
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
        this.Date = 'Date' in params ? params.Date : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * ModifyPrivateZoneRecord response structure.
 * @class
 */
class ModifyPrivateZoneRecordResponse extends  AbstractModel {
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
 * DescribeAccountVpcList request structure.
 * @class
 */
class DescribeAccountVpcListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * UIN of account
         * @type {string || null}
         */
        this.AccountUin = null;

        /**
         * Pagination offset, starting from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Maximum value: `100`. Default value: `20`
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter parameters
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
        this.AccountUin = 'AccountUin' in params ? params.AccountUin : null;
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
 * DescribeRequestData response structure.
 * @class
 */
class DescribeRequestDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Request volume statistics table
         * @type {Array.<MetricData> || null}
         */
        this.Data = null;

        /**
         * Request volume unit time. Valid values: Day, Hour
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
                let obj = new MetricData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tag
 * @class
 */
class TagInfo extends  AbstractModel {
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
 * TLD quota
 * @class
 */
class TldQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quota
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Used quota
         * @type {number || null}
         */
        this.Used = null;

        /**
         * Available quota
         * @type {number || null}
         */
        this.Stock = null;

        /**
         * User’s quota
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
        this.Total = 'Total' in params ? params.Total : null;
        this.Used = 'Used' in params ? params.Used : null;
        this.Stock = 'Stock' in params ? params.Stock : null;
        this.Quota = 'Quota' in params ? params.Quota : null;

    }
}

/**
 * CreatePrivateZone request structure.
 * @class
 */
class CreatePrivateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name, which must be in the format of standard TLD
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Tags the private domain when it is created
         * @type {Array.<TagInfo> || null}
         */
        this.TagSet = null;

        /**
         * Associates the private domain to a VPC when it is created
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcSet = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether to enable subdomain recursive DNS. Valid values: ENABLED, DISABLED. Default value: DISABLED
         * @type {string || null}
         */
        this.DnsForwardStatus = null;

        /**
         * Associates the private domain to a VPC when it is created
         * @type {Array.<VpcInfo> || null}
         */
        this.Vpcs = null;

        /**
         * List of authorized accounts' VPCs to associate with the private domain
         * @type {Array.<AccountVpcInfo> || null}
         */
        this.AccountVpcSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagInfo();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DnsForwardStatus = 'DnsForwardStatus' in params ? params.DnsForwardStatus : null;

        if (params.Vpcs) {
            this.Vpcs = new Array();
            for (let z in params.Vpcs) {
                let obj = new VpcInfo();
                obj.deserialize(params.Vpcs[z]);
                this.Vpcs.push(obj);
            }
        }

        if (params.AccountVpcSet) {
            this.AccountVpcSet = new Array();
            for (let z in params.AccountVpcSet) {
                let obj = new AccountVpcInfo();
                obj.deserialize(params.AccountVpcSet[z]);
                this.AccountVpcSet.push(obj);
            }
        }

    }
}

/**
 * VPC information
 * @class
 */
class VpcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * VpcId: vpc-xadsafsdasd
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * VPC region: ap-guangzhou, ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * VPC information of a Private DNS account
 * @class
 */
class AccountVpcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * VpcId: vpc-xadsafsdasd
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * VPC region: ap-guangzhou, ap-shanghai
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * VPC account: 123456789
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * VPC name: testname
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;

    }
}

/**
 * ModifyPrivateZone response structure.
 * @class
 */
class ModifyPrivateZoneResponse extends  AbstractModel {
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
 * DescribeRequestData request structure.
 * @class
 */
class DescribeRequestDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Request volume statistics start time in the format of 2020-11-22 00:00:00
         * @type {string || null}
         */
        this.TimeRangeBegin = null;

        /**
         * Filter parameter:
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Request volume statistics end time in the format of 2020-11-22 23:59:59
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeRangeBegin = 'TimeRangeBegin' in params ? params.TimeRangeBegin : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;

    }
}

/**
 * SubscribePrivateZoneService request structure.
 * @class
 */
class SubscribePrivateZoneServiceRequest extends  AbstractModel {
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
 * ModifyPrivateZone request structure.
 * @class
 */
class ModifyPrivateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private domain ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether to enable subdomain recursive DNS. Valid values: ENABLED, DISABLED
         * @type {string || null}
         */
        this.DnsForwardStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DnsForwardStatus = 'DnsForwardStatus' in params ? params.DnsForwardStatus : null;

    }
}

/**
 * CreatePrivateZone response structure.
 * @class
 */
class CreatePrivateZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private domain ID, such as zone-xxxxxx
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Private domain
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDashboard response structure.
 * @class
 */
class DescribeDashboardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of private domain DNS records
         * @type {number || null}
         */
        this.ZoneTotal = null;

        /**
         * Number of VPCs associated with private domain
         * @type {number || null}
         */
        this.ZoneVpcCount = null;

        /**
         * Total number of historical requests
         * @type {number || null}
         */
        this.RequestTotalCount = null;

        /**
         * Traffic package usage
         * @type {Array.<FlowUsage> || null}
         */
        this.FlowUsage = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneTotal = 'ZoneTotal' in params ? params.ZoneTotal : null;
        this.ZoneVpcCount = 'ZoneVpcCount' in params ? params.ZoneVpcCount : null;
        this.RequestTotalCount = 'RequestTotalCount' in params ? params.RequestTotalCount : null;

        if (params.FlowUsage) {
            this.FlowUsage = new Array();
            for (let z in params.FlowUsage) {
                let obj = new FlowUsage();
                obj.deserialize(params.FlowUsage[z]);
                this.FlowUsage.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrivateZoneRecord response structure.
 * @class
 */
class CreatePrivateZoneRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {string || null}
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
 * DescribePrivateZoneService response structure.
 * @class
 */
class DescribePrivateZoneServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private DNS service activation status. Valid values: ENABLED, DISABLED
         * @type {string || null}
         */
        this.ServiceStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceStatus = 'ServiceStatus' in params ? params.ServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrivateDNSAccount response structure.
 * @class
 */
class CreatePrivateDNSAccountResponse extends  AbstractModel {
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
 * DescribeAuditLog request structure.
 * @class
 */
class DescribeAuditLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Request volume statistics start time
         * @type {string || null}
         */
        this.TimeRangeBegin = null;

        /**
         * Filter parameter. Valid values: ZoneId (private domain ID), Domain (private domain), OperatorUin (operator account ID)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Request volume statistics end time
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * Pagination offset, starting from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Maximum value: 100. Default value: 20
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
        this.TimeRangeBegin = 'TimeRangeBegin' in params ? params.TimeRangeBegin : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDashboard request structure.
 * @class
 */
class DescribeDashboardRequest extends  AbstractModel {
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
 * Operation log
 * @class
 */
class AuditLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log type
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Log table name
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Total number of logs
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of logs
         * @type {Array.<AuditLogInfo> || null}
         */
        this.DataSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DataSet) {
            this.DataSet = new Array();
            for (let z in params.DataSet) {
                let obj = new AuditLogInfo();
                obj.deserialize(params.DataSet[z]);
                this.DataSet.push(obj);
            }
        }

    }
}

/**
 * SubscribePrivateZoneService response structure.
 * @class
 */
class SubscribePrivateZoneServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private DNS service activation status
         * @type {string || null}
         */
        this.ServiceStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceStatus = 'ServiceStatus' in params ? params.ServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Output parameters of the associated VPC
 * @class
 */
class AccountVpcInfoOut extends  AbstractModel {
    constructor(){
        super();

        /**
         * VpcId: vpc-xadsafsdasd
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Region: ap-guangzhou, ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

        /**
         * VPC ID: 123456789
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * VPC name: testname
         * @type {string || null}
         */
        this.VpcName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;

    }
}

/**
 * Filter parameter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Array of parameter values
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
 * CreatePrivateDNSAccount request structure.
 * @class
 */
class CreatePrivateDNSAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private DNS account
         * @type {PrivateDNSAccount || null}
         */
        this.Account = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Account) {
            let obj = new PrivateDNSAccount();
            obj.deserialize(params.Account)
            this.Account = obj;
        }

    }
}

/**
 * Statistics table
 * @class
 */
class MetricData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource description
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Table name
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Table data
         * @type {Array.<DatePoint> || null}
         */
        this.DataSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Metric = 'Metric' in params ? params.Metric : null;

        if (params.DataSet) {
            this.DataSet = new Array();
            for (let z in params.DataSet) {
                let obj = new DatePoint();
                obj.deserialize(params.DataSet[z]);
                this.DataSet.push(obj);
            }
        }

    }
}

/**
 * DescribePrivateZoneService request structure.
 * @class
 */
class DescribePrivateZoneServiceRequest extends  AbstractModel {
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
 * CreatePrivateZoneRecord request structure.
 * @class
 */
class CreatePrivateZoneRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private domain ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Record type. Valid values: "A", "AAAA", "CNAME", "MX", "TXT", "PTR"
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Subdomain, such as "www", "m", and "@"
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Record value, such as IP: 192.168.10.2, CNAME: cname.qcloud.com., and MX: mail.qcloud.com.
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * Record weight. Value range: 1–100
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * MX priority, which is required when the record type is MX. Valid values: 5, 10, 15, 20, 30, 40, 50
         * @type {number || null}
         */
        this.MX = null;

        /**
         * Record cache time. The smaller the value, the faster the record will take effect. Value range: 1–86400s. Default value: 600
         * @type {number || null}
         */
        this.TTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * DescribeQuotaUsage request structure.
 * @class
 */
class DescribeQuotaUsageRequest extends  AbstractModel {
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
 * ModifyPrivateZoneRecord request structure.
 * @class
 */
class ModifyPrivateZoneRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private domain ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Record ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * Record type. Valid values: "A", "AAAA", "CNAME", "MX", "TXT", "PTR"
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Subdomain, such as "www", "m", and "@"
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * Record value, such as IP: 192.168.10.2, CNAME: cname.qcloud.com., and MX: mail.qcloud.com.
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * Record weight. Value range: 1–100
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * MX priority, which is required when the record type is MX. Valid values: 5, 10, 15, 20, 30, 40, 50
         * @type {number || null}
         */
        this.MX = null;

        /**
         * Record cache time. The smaller the value, the faster the record will take effect. Value range: 1–86400s. Default value: 600
         * @type {number || null}
         */
        this.TTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * Traffic package usage
 * @class
 */
class FlowUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Traffic package type, Valid values: ZONE (private domain); TRAFFIC (DNS traffic package)
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * Traffic package quota
         * @type {number || null}
         */
        this.TotalQuantity = null;

        /**
         * Available quota of traffic package
         * @type {number || null}
         */
        this.AvailableQuantity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.TotalQuantity = 'TotalQuantity' in params ? params.TotalQuantity : null;
        this.AvailableQuantity = 'AvailableQuantity' in params ? params.AvailableQuantity : null;

    }
}

/**
 * DescribePrivateDNSAccountList request structure.
 * @class
 */
class DescribePrivateDNSAccountListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset, starting from `0`
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Maximum value: `100`. Default value: `20`
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter parameters
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
 * ModifyPrivateZoneVpc response structure.
 * @class
 */
class ModifyPrivateZoneVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private domain ID, such as zone-xxxxxx
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of VPCs associated with domain
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcSet = null;

        /**
         * List of authorized accounts' VPCs associated with the private domain
         * @type {Array.<AccountVpcInfoOutput> || null}
         */
        this.AccountVpcSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }

        if (params.AccountVpcSet) {
            this.AccountVpcSet = new Array();
            for (let z in params.AccountVpcSet) {
                let obj = new AccountVpcInfoOutput();
                obj.deserialize(params.AccountVpcSet[z]);
                this.AccountVpcSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeQuotaUsageResponse: DescribeQuotaUsageResponse,
    ModifyPrivateZoneVpcRequest: ModifyPrivateZoneVpcRequest,
    DescribeAuditLogResponse: DescribeAuditLogResponse,
    DescribePrivateDNSAccountListResponse: DescribePrivateDNSAccountListResponse,
    PrivateDNSAccount: PrivateDNSAccount,
    AccountVpcInfoOutput: AccountVpcInfoOutput,
    DatePoint: DatePoint,
    DescribeAccountVpcListResponse: DescribeAccountVpcListResponse,
    AuditLogInfo: AuditLogInfo,
    ModifyPrivateZoneRecordResponse: ModifyPrivateZoneRecordResponse,
    DescribeAccountVpcListRequest: DescribeAccountVpcListRequest,
    DescribeRequestDataResponse: DescribeRequestDataResponse,
    TagInfo: TagInfo,
    TldQuota: TldQuota,
    CreatePrivateZoneRequest: CreatePrivateZoneRequest,
    VpcInfo: VpcInfo,
    AccountVpcInfo: AccountVpcInfo,
    ModifyPrivateZoneResponse: ModifyPrivateZoneResponse,
    DescribeRequestDataRequest: DescribeRequestDataRequest,
    SubscribePrivateZoneServiceRequest: SubscribePrivateZoneServiceRequest,
    ModifyPrivateZoneRequest: ModifyPrivateZoneRequest,
    CreatePrivateZoneResponse: CreatePrivateZoneResponse,
    DescribeDashboardResponse: DescribeDashboardResponse,
    CreatePrivateZoneRecordResponse: CreatePrivateZoneRecordResponse,
    DescribePrivateZoneServiceResponse: DescribePrivateZoneServiceResponse,
    CreatePrivateDNSAccountResponse: CreatePrivateDNSAccountResponse,
    DescribeAuditLogRequest: DescribeAuditLogRequest,
    DescribeDashboardRequest: DescribeDashboardRequest,
    AuditLog: AuditLog,
    SubscribePrivateZoneServiceResponse: SubscribePrivateZoneServiceResponse,
    AccountVpcInfoOut: AccountVpcInfoOut,
    Filter: Filter,
    CreatePrivateDNSAccountRequest: CreatePrivateDNSAccountRequest,
    MetricData: MetricData,
    DescribePrivateZoneServiceRequest: DescribePrivateZoneServiceRequest,
    CreatePrivateZoneRecordRequest: CreatePrivateZoneRecordRequest,
    DescribeQuotaUsageRequest: DescribeQuotaUsageRequest,
    ModifyPrivateZoneRecordRequest: ModifyPrivateZoneRecordRequest,
    FlowUsage: FlowUsage,
    DescribePrivateDNSAccountListRequest: DescribePrivateDNSAccountListRequest,
    ModifyPrivateZoneVpcResponse: ModifyPrivateZoneVpcResponse,

}
