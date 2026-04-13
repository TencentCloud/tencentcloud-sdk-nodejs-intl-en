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
 * CreateDBInstances request structure.
 * @class
 */
class CreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchasable specification ID, which can be obtained through the `SpecCode` field in the returned value of the `DescribeClasses` API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Instance capacity size in GB.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Number of instances purchased at a time. Value range: 1-100.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Length of purchase in months. Currently, only 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36 are supported.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * AZ ID, which can be obtained through the `Zone` field in the returned value of the `DescribeZones` API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * PostgreSQL community major version + minor version number.
It's generally not recommended to pass in this parameter. If needed, only the latest minor version number under the current major version can be passed.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Instance billing type.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Whether to automatically use vouchers. 1: yes, 0: no. Default value: no.
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list (only one voucher can be specified currently).
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * VPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Renewal flag. 0: normal renewal (default), 1: auto-renewal.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Activity ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * Instance name (which will be supported in the future)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether to support IPv6 address access. Valid values: 1 (yes), 0 (no)
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * The information of tags to be associated with instances. This parameter is left empty by default.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * Security group ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * The major version number of PostgreSQL (this parameter is currently required), and the version information can be obtained from [DescribeDBVersions](https://intl.cloud.tencent.com/document/api/409/89018?from_cn_redirect=1). Currently major versions `10`, `11`, `12`, `13`, `14`, and `15` are supported. For details, see [Kernel Version Overview](https://intl.cloud.tencent.com/document/product/409/67018).
When this parameter is entered, an instance running the latest kernel version of the latest minor version will be created based on this major version number.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * PostgreSQL kernel version number.
It's generally not recommended to pass in this parameter. If needed, only the latest kernel version number under the current major version can be passed.
         * @type {string || null}
         */
        this.DBKernelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;

    }
}

/**
 * Task details.
 * @class
 */
class TaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current task step name.
         * @type {string || null}
         */
        this.CurrentStep = null;

        /**
         * Describes the step description of the current task you own.
         * @type {string || null}
         */
        this.AllSteps = null;

        /**
         * Input of the task.
         * @type {string || null}
         */
        this.Input = null;

        /**
         * Output parameter of the task.
         * @type {string || null}
         */
        this.Output = null;

        /**
         * Specifies the switch time after instance configurations are modified. default value: 0.
This task does not require switching.
Switch immediately.
2: switch at specified time.
3: switch during maintenance time window.
         * @type {number || null}
         */
        this.SwitchTag = null;

        /**
         * Specifies the switch time.
         * @type {string || null}
         */
        this.SwitchTime = null;

        /**
         * Note of the task.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentStep = 'CurrentStep' in params ? params.CurrentStep : null;
        this.AllSteps = 'AllSteps' in params ? params.AllSteps : null;
        this.Input = 'Input' in params ? params.Input : null;
        this.Output = 'Output' in params ? params.Output : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchTime = 'SwitchTime' in params ? params.SwitchTime : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * SetAutoRenewFlag request structure.
 * @class
 */
class SetAutoRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs. Note that currently you cannot manipulate multiple instances at the same time. Only one instance ID can be passed in here.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * Renewal flag. 0: normal renewal, 1: auto-renewal, 2: no renewal upon expiration
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * DeleteBackupPlan response structure.
 * @class
 */
class DeleteBackupPlanResponse extends  AbstractModel {
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
 * DescribeAccountPrivileges response structure.
 * @class
 */
class DescribeAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies that the user has CREATE, CONNECT, and TEMPORARY permissions on the database user_database.
         * @type {Array.<DatabasePrivilege> || null}
         */
        this.PrivilegeSet = null;

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

        if (params.PrivilegeSet) {
            this.PrivilegeSet = new Array();
            for (let z in params.PrivilegeSet) {
                let obj = new DatabasePrivilege();
                obj.deserialize(params.PrivilegeSet[z]);
                this.PrivilegeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabases request structure.
 * @class
 */
class DescribeDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the API [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query using one or more filter criteria. Filter criteria currently supported include: database-name: filter by database name (in string format). Fuzzy matching is used to search for databases that meet the criteria.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Data offset, which starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items displayed at a time. the maximum value is recommended to be 100.
Default value: 20.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDBXlogs request structure.
 * @class
 */
class DescribeDBXlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time in the format of 2018-06-10 17:06:38, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries returned per page in paged query. Value range: 1-100.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateReadOnlyGroupNetworkAccess request structure.
 * @class
 */
class CreateReadOnlyGroupNetworkAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ROGroupId specifies the read-only group ID in the format of pgrogrp-4t9c6g7k. it can be obtained through the DescribeReadOnlyGroups api (https://www.tencentcloud.com/document/product/409/39725?lang=en).
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * Unified VPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether to manually assign the VIP. Valid values: `true` (manually assign), `false` (automatically assign).
         * @type {boolean || null}
         */
        this.IsAssignVip = null;

        /**
         * Target VIP address. when this parameter is not specified and IsAssignVip is true, the system automatically assigns a VIP by default.
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
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.IsAssignVip = 'IsAssignVip' in params ? params.IsAssignVip : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

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
         * Instance ID, such as postgres-6fego161. can be obtained through the DescribeDBInstances api (https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Pagination return. maximum return per page. default 20. value range 1-100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, which starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Return data is sorted by creation time or username. valid values: createTime, name, updateTime. createTime - sort by creation time; name - sort by username; updateTime - sort by update time.
Default value: createTime.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Specifies whether the returned results are in ascending or descending order. valid values: desc or asc. desc - descending order; asc - ascending order.
Default value: desc.
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DeleteReadOnlyGroup response structure.
 * @class
 */
class DeleteReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenDBExtranetAccess request structure.
 * @class
 */
class OpenDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID, such as postgres-hez4fh0v. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Specifies whether to enable public network Ipv6. valid values: 1 (yes), 0 (no).
Default value: 0
         * @type {number || null}
         */
        this.IsIpv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.IsIpv6 = 'IsIpv6' in params ? params.IsIpv6 : null;

    }
}

/**
 * CreateInstances request structure.
 * @class
 */
class CreateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The primary availability zone of the instance, for example: ap-guangzhou-3. If needed to support multiple AZs, add primary and secondary AZ information in the DBNodeSet.N field.<br>AZ information can be obtained by calling the <a href="https://www.tencentcloud.com/document/api/409/16769?from_cn_redirect=1">DescribeZones</a> api and checking the Zone field in the returned value.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Purchasable specification code. Obtain this parameter by calling the `SpecCode` field in the return value of <a href="https://www.tencentcloud.com/document/api/409/89019?from_cn_redirect=1">DescribeClasses</a>.</p>
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * <p>Instance disk capacity size, unit: GB. The step length for parameter settings is 10.</p>
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * <p>Number of instances to purchase, value ranges from 1 to 10. Single transaction supports a maximum quantity of 10. If exceeding this quantity, multiple calls can be performed to purchase.</p>
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * <p>Purchase duration, unit: month.</p><li>Prepaid: Supports `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, and `36`.</li><li>Postpaid: Supports only `1`.</li>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * <p>Instance character set, which currently supports only:</p><li>UTF8</li><li>LATIN1</li>
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * <p>Username of the instance root account. Specific specifications are as follows:</p><li>The username must consist of 1-16 characters, which can only be letters, digits, or underscores.</li><li>Cannot be postgres.</li><li>Cannot begin with digits or pg_.</li><li>All rules are case-insensitive.</li>
         * @type {string || null}
         */
        this.AdminName = null;

        /**
         * <p>Password for the instance root account username, with a length of 8-32 characters. It is recommended to use a password of more than 12 characters and it cannot start with "/".<br>Must contain the following four character types:</p><li>Lowercase letter: [a-z]</li><li>Uppercase letter: [a-z]</li><li>Number: 0-9</li><li>Special character: ()`~!@#$%^&*-+=_|{}[]:;'<>,.?/</li>
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * <p>PostgreSQL major version number (this parameter is currently required). Version information can be obtained from <a href="https://www.tencentcloud.com/document/api/409/89018?from_cn_redirect=1">DescribeDBVersions</a>. Currently supports major versions 10, 11, 12, 13, 14, and 15. For details, see <a href="https://www.tencentcloud.com/document/product/409/67018?from_cn_redirect=1">kernel version overview</a>.<br>When this parameter is entered, an instance running the latest kernel version of the latest minor version will be created based on this major version number.</p>
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * <p>PostgreSQL community major version + minor version number.<br>It's generally not recommended to pass in this parameter. If needed, only the latest minor version number under the current major version can be passed.</p>
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * <p>PostgreSQL kernel version number.<br>It's generally not recommended to pass in this parameter. If needed, only the latest kernel version number under the current major version can be passed.</p>
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * <p>Instance billing type. Currently supports:</p><li>PREPAID: Prepayment, i.e., yearly/monthly subscription</li><li>POSTPAID_BY_HOUR: Postpaid, i.e., pay-as-you-go</li>Default value: PREPAID
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * <p>VPC ID, such as vpc-xxxxxxxx (this parameter is currently required). A valid VPC ID can be obtained by logging in to the console to query or by calling the API <a href="https://www.tencentcloud.com/document/api/215/1372?from_cn_redirect=1">DescribeVpcEx</a> and acquiring the unVpcId field in the API return.</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>VPC subnet ID, such as subnet-xxxxxxxx (this parameter is currently required). Effective VPC subnet IDs can be queried by logging in to the console or by calling the API <a href="https://www.tencentcloud.com/document/api/215/15784?from_cn_redirect=1">DescribeSubnets</a> and acquiring the unSubnetId field in the API return.</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Instance node deployment information. When multi-availability zone deployment is supported, it requires specifying the AZ information for each node.<br>AZ information can be obtained from the Zone field in the returned value by calling the <a href="https://www.tencentcloud.com/document/api/409/16769?from_cn_redirect=1">DescribeZones</a> API.</p>
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * <p>Auto-renewal flag:</p><li>0: Manual renewal</li><li>1: Auto renewal</li>Default value: 0
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * <p>Whether to automatically use a voucher:</p><li>0: No</li><li>1: Yes</li>Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * <p>Voucher ID list. Currently only support specifying one voucher.</p>
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * <p>Project ID. The default value is 0, which means it belongs to the default project.</p>
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * <p>Activity ID.</p>
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * <p>Instance name only supports Chinese/English/number/"_"/"-" with length less than 60. If no instance name is specified, "unnamed" is displayed by default.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Tag information that should be bound to the instance is empty by default. You can get it by calling <a href="https://www.tencentcloud.com/document/api/651/35316?from_cn_redirect=1">DescribeTags</a> and checking the Tags field in the return value.</p>
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * <p>Security group to which an instance belongs. Obtain this parameter by calling the sgId field in the returned value of <a href="https://www.tencentcloud.com/document/api/215/15808?from_cn_redirect=1">DescribeSecurityGroups</a>. If not specified, the default security group is bound.</p>
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * <p>Whether data transparent encryption is required:</p><li>0: No</li><li>1: Yes</li>Default value: 0. See [Overview of Data Transparent Encryption](https://www.tencentcloud.com/document/product/409/71748?from_cn_redirect=1).
         * @type {number || null}
         */
        this.NeedSupportTDE = null;

        /**
         * <p>The KeyId of the custom key. If you select custom key encryption, you need to input the KeyId of the custom key. KeyId is the unique identifier of CMK.<br>For related reference on KeyId creation and retrieval, see <a href="https://www.tencentcloud.com/document/product/409/71749?from_cn_redirect=1">Enable Transparent Data Encryption</a></p>
         * @type {string || null}
         */
        this.KMSKeyId = null;

        /**
         * <p>For regions using the KMS service, KMSRegion is empty by default and the local region KMS is used. If the local region is not supported, select another KMS supported region.<br>For details about KMSRegion, see <a href="https://www.tencentcloud.com/document/product/409/71749?from_cn_redirect=1">enable transparent data encryption</a></p>
         * @type {string || null}
         */
        this.KMSRegion = null;

        /**
         * <p>Designate the service cluster for KMS. If KMSClusterId is empty, use the KMS of the Default Cluster. To select the specified KMS cluster, require the input of KMSClusterId. For details about KMSClusterId, see enable transparent data encryption.</p>
         * @type {string || null}
         */
        this.KMSClusterId = null;

        /**
         * <p>Database engine, support:</p><li>`postgresql`: TencentDB for PostgreSQL</li><li>`mssql_compatible`: MSSQL compatible - TencentDB for PostgreSQL</li>Default value: postgresql
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * <p>Configuration information for the database engine. The configuration format is as follows:<br>{&quot;$key1&quot;:&quot;$value1&quot;, &quot;$key2&quot;:&quot;$value2&quot;}<br>Supported engines:<br>mssql_compatible engine:</p><li>migrationMode: Database schema, optional parameter. Valid values: single-db (single-database mode), multi-db (multi-database mode). Default is single-db.</li><li>defaultLocale: Sorting area rule, optional parameter, cannot be modified after initialization. Default is en_US. Valid values include: "af_ZA", "sq_AL", "ar_DZ", "ar_BH", "ar_EG", "ar_IQ", "ar_JO", "ar_KW", "ar_LB", "ar_LY", "ar_MA", "ar_OM", "ar_QA", "ar_SA", "ar_SY", "ar_TN", "ar_AE", "ar_YE", "hy_AM", "az_Cyrl_AZ", "az_Latn_AZ", "eu_ES", "be_BY", "bg_BG", "ca_ES", "zh_HK", "zh_MO", "zh_CN", "zh_SG", "zh_TW", "hr_HR", "cs_CZ", "da_DK", "nl_BE", "nl_NL", "en_AU", "en_BZ", "en_CA", "en_IE", "en_JM", "en_NZ", "en_PH", "en_ZA", "en_TT", "en_GB", "en_US", "en_ZW", "et_EE", "fo_FO", "fa_IR", "fi_FI", "fr_BE", "fr_CA", "fr_FR", "fr_LU", "fr_MC", "fr_CH", "mk_MK", "ka_GE", "de_AT", "de_DE", "de_LI", "de_LU", "de_CH", "el_GR", "gu_IN", "he_IL", "hi_IN", "hu_HU", "is_IS", "id_ID", "it_IT", "it_CH", "ja_JP", "kn_IN", "kok_IN", "ko_KR", "ky_KG", "lv_LV", "lt_LT", "ms_BN", "ms_MY", "mr_IN", "mn_MN", "nb_NO", "nn_NO", "pl_PL", "pt_BR", "pt_PT", "pa_IN", "ro_RO", "ru_RU", "sa_IN", "sr_Cyrl_RS", "sr_Latn_RS", "sk_SK", "sl_SI", "es_AR", "es_BO", "es_CL", "es_CO", "es_CR", "es_DO", "es_EC", "es_SV", "es_GT", "es_HN", "es_MX", "es_NI", "es_PA", "es_PY","es_PE", "es_PR", "es_ES", "es_TRADITIONAL", "es_UY", "es_VE", "sw_KE", "sv_FI", "sv_SE", "tt_RU", "te_IN", "th_TH", "tr_TR", "uk_UA", "ur_IN", "ur_PK", "uz_Cyrl_UZ", "uz_Latn_UZ", "vi_VN".</li><li>serverCollationName: Collation name, optional parameter, cannot be modified after initialization. Default is sql_latin1_general_cp1_ci_as. Valid values include: "bbf_unicode_general_ci_as", "bbf_unicode_cp1_ci_as", "bbf_unicode_CP1250_ci_as", "bbf_unicode_CP1251_ci_as", "bbf_unicode_cp1253_ci_as", "bbf_unicode_cp1254_ci_as", "bbf_unicode_cp1255_ci_as", "bbf_unicode_cp1256_ci_as", "bbf_unicode_cp1257_ci_as", "bbf_unicode_cp1258_ci_as", "bbf_unicode_cp874_ci_as", "sql_latin1_general_cp1250_ci_as", "sql_latin1_general_cp1251_ci_as", "sql_latin1_general_cp1_ci_as", "sql_latin1_general_cp1253_ci_as", "sql_latin1_general_cp1254_ci_as", "sql_latin1_general_cp1255_ci_as","sql_latin1_general_cp1256_ci_as", "sql_latin1_general_cp1257_ci_as", "sql_latin1_general_cp1258_ci_as", "chinese_prc_ci_as", "cyrillic_general_ci_as", "finnish_swedish_ci_as", "french_ci_as", "japanese_ci_as", "korean_wansung_ci_as", "latin1_general_ci_as", "modern_spanish_ci_as", "polish_ci_as", "thai_ci_as", "traditional_spanish_ci_as", "turkish_ci_as", "ukrainian_ci_as", "vietnamese_ci_as".</li>
         * @type {string || null}
         */
        this.DBEngineConfig = null;

        /**
         * <p>Primary-standby sync mode, supports: </p><li>Semi-sync: semi-synchronous</li><li>Async: asynchronous</li>Default value for the primary instance: Semi-syncDefault value for the read-only instance: Async
         * @type {string || null}
         */
        this.SyncMode = null;

        /**
         * <p>Whether required to support Ipv6:</p><li>0: No</li><li>1: Yes</li>Default value: 0
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * <p>Whether to enable deletion protection for the instance: true-enable deletion protection; false-disable deletion protection.</p>
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * <p>Instance storage type. Available values: PHYSICAL_LOCAL_SSD: LOCAL SSD hard disk of PHYSICAL machine; CLOUD_PREMIUM: high-performance CLOUD block storage; CLOUD_SSD: SSD CLOUD disk; CLOUD_HSSD: enhanced SSD CLOUD disk.</p>
         * @type {string || null}
         */
        this.StorageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.AdminName = 'AdminName' in params ? params.AdminName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.DBNodeSet) {
            this.DBNodeSet = new Array();
            for (let z in params.DBNodeSet) {
                let obj = new DBNode();
                obj.deserialize(params.DBNodeSet[z]);
                this.DBNodeSet.push(obj);
            }
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.NeedSupportTDE = 'NeedSupportTDE' in params ? params.NeedSupportTDE : null;
        this.KMSKeyId = 'KMSKeyId' in params ? params.KMSKeyId : null;
        this.KMSRegion = 'KMSRegion' in params ? params.KMSRegion : null;
        this.KMSClusterId = 'KMSClusterId' in params ? params.KMSClusterId : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;
        this.DBEngineConfig = 'DBEngineConfig' in params ? params.DBEngineConfig : null;
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

    }
}

/**
 * Specification description
 * @class
 */
class SpecItemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification ID
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * PostgerSQL version number
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Full version name corresponding to kernel number
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Maximum storage capacity in GB supported by this specification
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * Minimum storage capacity in GB supported by this specification
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * Estimated QPS for this specification
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * (Disused)
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * PostgreSQL major version number
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MajorVersion = null;

        /**
         * PostgreSQL kernel version number
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KernelVersion = null;

        /**
         * Whether TDE data encryption is supported. Valid values: 0 (no), 1 (yes)
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.IsSupportTDE = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.MajorVersion = 'MajorVersion' in params ? params.MajorVersion : null;
        this.KernelVersion = 'KernelVersion' in params ? params.KernelVersion : null;
        this.IsSupportTDE = 'IsSupportTDE' in params ? params.IsSupportTDE : null;

    }
}

/**
 * Basic information of a parameter template
 * @class
 */
class ParameterTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Parameter template name
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Database version applicable to a parameter template
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * Database engine applicable to a parameter template
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * Parameter template description
         * @type {string || null}
         */
        this.TemplateDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;

    }
}

/**
 * CreateDBInstanceNetworkAccess response structure.
 * @class
 */
class CreateDBInstanceNetworkAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Process ID. FlowId is equivalent to TaskId.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Task ID.
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableRecoveryTime response structure.
 * @class
 */
class DescribeAvailableRecoveryTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The earliest restoration time (UTC+8).
         * @type {string || null}
         */
        this.RecoveryBeginTime = null;

        /**
         * The latest restoration time (UTC+8).
         * @type {string || null}
         */
        this.RecoveryEndTime = null;

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
        this.RecoveryBeginTime = 'RecoveryBeginTime' in params ? params.RecoveryBeginTime : null;
        this.RecoveryEndTime = 'RecoveryEndTime' in params ? params.RecoveryEndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBaseBackup request structure.
 * @class
 */
class CreateBaseBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ModifyDBInstanceReadOnlyGroup response structure.
 * @class
 */
class ModifyDBInstanceReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database instance specification
 * @class
 */
class ClassInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification ID
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Number of CPU cores
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Memory size in MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Maximum storage capacity in GB supported by this specification
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * Minimum storage capacity in GB supported by this specification
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * Estimated QPS for this specification
         * @type {number || null}
         */
        this.QPS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.QPS = 'QPS' in params ? params.QPS : null;

    }
}

/**
 * DescribeDBInstanceParameters response structure.
 * @class
 */
class DescribeDBInstanceParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of the parameters in the returned list
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of the returned parameter list
         * @type {Array.<ParamInfo> || null}
         */
        this.Detail = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new ParamInfo();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceSecurityGroups response structure.
 * @class
 */
class DescribeDBInstanceSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of security groups in array
         * @type {Array.<SecurityGroup> || null}
         */
        this.SecurityGroupSet = null;

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

        if (params.SecurityGroupSet) {
            this.SecurityGroupSet = new Array();
            for (let z in params.SecurityGroupSet) {
                let obj = new SecurityGroup();
                obj.deserialize(params.SecurityGroupSet[z]);
                this.SecurityGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Backup plan
 * @class
 */
class BackupPlan extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup cycle
         * @type {string || null}
         */
        this.BackupPeriod = null;

        /**
         * Data backup retention duration
         * @type {number || null}
         */
        this.BaseBackupRetentionPeriod = null;

        /**
         * The earliest time to start a backup
         * @type {string || null}
         */
        this.MinBackupStartTime = null;

        /**
         * The latest time to start a backup
         * @type {string || null}
         */
        this.MaxBackupStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupPeriod = 'BackupPeriod' in params ? params.BackupPeriod : null;
        this.BaseBackupRetentionPeriod = 'BaseBackupRetentionPeriod' in params ? params.BaseBackupRetentionPeriod : null;
        this.MinBackupStartTime = 'MinBackupStartTime' in params ? params.MinBackupStartTime : null;
        this.MaxBackupStartTime = 'MaxBackupStartTime' in params ? params.MaxBackupStartTime : null;

    }
}

/**
 * RestoreDBInstanceObjects response structure.
 * @class
 */
class RestoreDBInstanceObjectsResponse extends  AbstractModel {
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
 * Slow query details
 * @class
 */
class SlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total time consumed
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * Total number of calls
         * @type {number || null}
         */
        this.TotalCalls = null;

        /**
         * List of slow SQL statements after desensitization
         * @type {Array.<NormalQueryItem> || null}
         */
        this.NormalQueries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.TotalCalls = 'TotalCalls' in params ? params.TotalCalls : null;

        if (params.NormalQueries) {
            this.NormalQueries = new Array();
            for (let z in params.NormalQueries) {
                let obj = new NormalQueryItem();
                obj.deserialize(params.NormalQueries[z]);
                this.NormalQueries.push(obj);
            }
        }

    }
}

/**
 * SwitchDBInstancePrimary request structure.
 * @class
 */
class SwitchDBInstancePrimaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Whether to perform forced switch. As long as the standby node can be accessed, the switch will be performed regardless of the primary-standby sync delay. You can switch immediately only when `SwitchTag` is `0.
<li>Default: `false`.
         * @type {boolean || null}
         */
        this.Force = null;

        /**
         * Switch time for the specified instance after configuration modification.
<li>`0`: Switch now. 
<li>`1`: Switch at the specified time.
<li>`2`: Switch in the maintenance time.
<li>Default value: `0`. 
         * @type {number || null}
         */
        this.SwitchTag = null;

        /**
         * The earliest time to start a switch in the format of "HH:MM:SS", such as "01:00:00". This parameter is invalid when `SwitchTag` is `0` or `2`.
         * @type {string || null}
         */
        this.SwitchStartTime = null;

        /**
         * The latest time to start a switch in the format of "HH:MM:SS", such as "01:30:00". This parameter is invalid when `SwitchTag` is `0` or `2`. The difference between `SwitchStartTime` and `SwitchEndTime` cannot be less than 30 minutes.
         * @type {string || null}
         */
        this.SwitchEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Force = 'Force' in params ? params.Force : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchStartTime = 'SwitchStartTime' in params ? params.SwitchStartTime : null;
        this.SwitchEndTime = 'SwitchEndTime' in params ? params.SwitchEndTime : null;

    }
}

/**
 * OpenServerlessDBExtranetAccess request structure.
 * @class
 */
class OpenServerlessDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an instance
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.DBInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;

    }
}

/**
 * RenewInstance response structure.
 * @class
 */
class RenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteServerlessDBInstance response structure.
 * @class
 */
class DeleteServerlessDBInstanceResponse extends  AbstractModel {
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
 * DeleteLogBackup response structure.
 * @class
 */
class DeleteLogBackupResponse extends  AbstractModel {
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
 * ModifyReadOnlyGroupConfig request structure.
 * @class
 */
class ModifyReadOnlyGroupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * RO group name
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * Whether to remove a read-only replica from an RO group if the delay between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLagEliminate = null;

        /**
         * Whether to remove a read-only replica from an RO group if the sync log size difference between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLatencyEliminate = null;

        /**
         * Delayed log size threshold in MB
         * @type {number || null}
         */
        this.MaxReplayLatency = null;

        /**
         * Delay threshold in ms
         * @type {number || null}
         */
        this.MaxReplayLag = null;

        /**
         * Whether to enable automatic load balancing. Valid values: `0` (disable), `1` (enable).
         * @type {number || null}
         */
        this.Rebalance = null;

        /**
         * The minimum number of read-only replicas that must be retained in an RO group
         * @type {number || null}
         */
        this.MinDelayEliminateReserve = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.ReplayLagEliminate = 'ReplayLagEliminate' in params ? params.ReplayLagEliminate : null;
        this.ReplayLatencyEliminate = 'ReplayLatencyEliminate' in params ? params.ReplayLatencyEliminate : null;
        this.MaxReplayLatency = 'MaxReplayLatency' in params ? params.MaxReplayLatency : null;
        this.MaxReplayLag = 'MaxReplayLag' in params ? params.MaxReplayLag : null;
        this.Rebalance = 'Rebalance' in params ? params.Rebalance : null;
        this.MinDelayEliminateReserve = 'MinDelayEliminateReserve' in params ? params.MinDelayEliminateReserve : null;

    }
}

/**
 * Instance backup statistics
 * @class
 */
class BackupSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Number of log backups of an instance
         * @type {number || null}
         */
        this.LogBackupCount = null;

        /**
         * Size of log backups of an instance
         * @type {number || null}
         */
        this.LogBackupSize = null;

        /**
         * Number of manually created instance data backups.
         * @type {number || null}
         */
        this.ManualBaseBackupCount = null;

        /**
         * Size of manually created instance data backups.
         * @type {number || null}
         */
        this.ManualBaseBackupSize = null;

        /**
         * Number of automatically created instance data backups.
         * @type {number || null}
         */
        this.AutoBaseBackupCount = null;

        /**
         * Size of automatically created instance data backups.
         * @type {number || null}
         */
        this.AutoBaseBackupSize = null;

        /**
         * Total number of backups
         * @type {number || null}
         */
        this.TotalBackupCount = null;

        /**
         * Total backup size
         * @type {number || null}
         */
        this.TotalBackupSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.LogBackupCount = 'LogBackupCount' in params ? params.LogBackupCount : null;
        this.LogBackupSize = 'LogBackupSize' in params ? params.LogBackupSize : null;
        this.ManualBaseBackupCount = 'ManualBaseBackupCount' in params ? params.ManualBaseBackupCount : null;
        this.ManualBaseBackupSize = 'ManualBaseBackupSize' in params ? params.ManualBaseBackupSize : null;
        this.AutoBaseBackupCount = 'AutoBaseBackupCount' in params ? params.AutoBaseBackupCount : null;
        this.AutoBaseBackupSize = 'AutoBaseBackupSize' in params ? params.AutoBaseBackupSize : null;
        this.TotalBackupCount = 'TotalBackupCount' in params ? params.TotalBackupCount : null;
        this.TotalBackupSize = 'TotalBackupSize' in params ? params.TotalBackupSize : null;

    }
}

/**
 * AddDBInstanceToReadOnlyGroup request structure.
 * @class
 */
class AddDBInstanceToReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeProductConfig request structure.
 * @class
 */
class DescribeProductConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ name
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Database engines. Valid values:
1. `postgresql` (TencentDB for PostgreSQL)
2. `mssql_compatible` (MSSQL compatible-TencentDB for PostgreSQL)
Default value: `postgresql`
         * @type {string || null}
         */
        this.DBEngine = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;

    }
}

/**
 * RemoveDBInstanceFromReadOnlyGroup request structure.
 * @class
 */
class RemoveDBInstanceFromReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * CreateAccount request structure.
 * @class
 */
class CreateAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. can be obtained through the DescribeDBInstances api (https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * The name of the account created. Consists of letters (a-z, A-Z), numbers (0-9), underscores (_), starts with a letter or (_), up to 63 characters. Cannot use system reserved keywords, cannot be postgres, and cannot begin with pg_or tencentdb_
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Account type. currently supported: normal, tencentDBSuper. normal references a general user, tencentDBSuper is an account that possesses the pg_tencentdb_superuser role.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Specifies the corresponding password for the account. the password rules are as follows:.
<Li>Specifies a length of 8 to 32 characters. a password of more than 12 characters is recommended.</li>.
<Li>Cannot start with "/".</li>.
<Li>Specifies the following four items must be included.</li>.

Valid values: a to z (lowercase letters).           
Uppercase letters: A - Z.
Valid values: 0 - 9.
Special symbols: ()`~!@#$%^&*-+=_|{}[]:<>,.?/.

         * @type {string || null}
         */
        this.Password = null;

        /**
         * Account remark. only allow english letters, digits, underscore, hyphen, and chinese characters, limited to 60 characters.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Specifies whether CAM verification is enabled for the account.
         * @type {boolean || null}
         */
        this.OpenCam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OpenCam = 'OpenCam' in params ? params.OpenCam : null;

    }
}

/**
 * InitDBInstances response structure.
 * @class
 */
class InitDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID set.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

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
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTasks response structure.
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of queried tasks.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Task Information List
         * @type {Array.<TaskSet> || null}
         */
        this.TaskSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskSet();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMaintainTimeWindow response structure.
 * @class
 */
class DescribeMaintainTimeWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Maintenance start time. time zone is UTC+8.
         * @type {string || null}
         */
        this.MaintainStartTime = null;

        /**
         * Maintenance duration. unit: hr.
         * @type {number || null}
         */
        this.MaintainDuration = null;

        /**
         * Specifies the maintenance period.
         * @type {Array.<string> || null}
         */
        this.MaintainWeekDays = null;

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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.MaintainStartTime = 'MaintainStartTime' in params ? params.MaintainStartTime : null;
        this.MaintainDuration = 'MaintainDuration' in params ? params.MaintainDuration : null;
        this.MaintainWeekDays = 'MaintainWeekDays' in params ? params.MaintainWeekDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDefaultParameters request structure.
 * @class
 */
class DescribeDefaultParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The major database version number, such as 11, 12, 13.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * Database engine, such as postgresql, mssql_compatible.
         * @type {string || null}
         */
        this.DBEngine = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;

    }
}

/**
 * DescribeDedicatedClusters response structure.
 * @class
 */
class DescribeDedicatedClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Exclusive cluster information.
         * @type {Array.<DedicatedCluster> || null}
         */
        this.DedicatedClusterSet = null;

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

        if (params.DedicatedClusterSet) {
            this.DedicatedClusterSet = new Array();
            for (let z in params.DedicatedClusterSet) {
                let obj = new DedicatedCluster();
                obj.deserialize(params.DedicatedClusterSet[z]);
                this.DedicatedClusterSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewInstance request structure.
 * @class
 */
class RenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of `postgres-6fego161`
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Renewal duration in months
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to automatically use vouchers. 1: yes, 0: no. Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list (only one voucher can be specified currently)
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * DescribeBackupOverview request structure.
 * @class
 */
class DescribeBackupOverviewRequest extends  AbstractModel {
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
 * DescribeRegions response structure.
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Region information set.
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

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
 * ModifyBaseBackupExpireTime response structure.
 * @class
 */
class ModifyBaseBackupExpireTimeResponse extends  AbstractModel {
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
 * UpgradeDBInstanceMajorVersion response structure.
 * @class
 */
class UpgradeDBInstanceMajorVersionResponse extends  AbstractModel {
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
 * ModifyBackupDownloadRestriction request structure.
 * @class
 */
class ModifyBackupDownloadRestrictionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the network restrictions for downloading a backup file. Valid values: `NONE` (backups can be downloaded over both private and public networks), `INTRANET` (backups can only be downloaded over the private network), `CUSTOMIZE` (backups can be downloaded over specified VPCs or at specified IPs).
         * @type {string || null}
         */
        this.RestrictionType = null;

        /**
         * Whether VPC is allowed. Valid values: `ALLOW` (allow), `DENY` (deny).
         * @type {string || null}
         */
        this.VpcRestrictionEffect = null;

        /**
         * Whether it is allowed to download the VPC ID list of the backup files.
         * @type {Array.<string> || null}
         */
        this.VpcIdSet = null;

        /**
         * Whether IP is allowed. Valid values: `ALLOW` (allow), `DENY` (deny).
         * @type {string || null}
         */
        this.IpRestrictionEffect = null;

        /**
         * Whether it is allowed to download the IP list of the backup files.
         * @type {Array.<string> || null}
         */
        this.IpSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RestrictionType = 'RestrictionType' in params ? params.RestrictionType : null;
        this.VpcRestrictionEffect = 'VpcRestrictionEffect' in params ? params.VpcRestrictionEffect : null;
        this.VpcIdSet = 'VpcIdSet' in params ? params.VpcIdSet : null;
        this.IpRestrictionEffect = 'IpRestrictionEffect' in params ? params.IpRestrictionEffect : null;
        this.IpSet = 'IpSet' in params ? params.IpSet : null;

    }
}

/**
 * Instance network connection information
 * @class
 */
class DBInstanceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS domain name
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Connection port address
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Network type. 1: inner (private network address), 2: public (public network address)
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * Network connection status. Valid values: `initing` (never enabled before), `opened` (enabled), `closed` (disabled), `opening` (enabling), `closing` (disabling)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * VPC ID. specifies the ID of the virtual private cloud.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Specifies the protocol type to connect to the database. currently supported: postgresql, mssql (mssql compatible syntax).
         * @type {string || null}
         */
        this.ProtocolType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;

    }
}

/**
 * Restriction information for downloading a backup
 * @class
 */
class BackupDownloadRestriction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup file download limit type. valid values: NONE (unlimited, allows download from both private and public networks), INTRANET (only allows private network download), CUSTOMIZE (custom limits for download by vpc or ip). when the parameter value is CUSTOMIZE, at least one item must be filled in for vpc or ip information.
         * @type {string || null}
         */
        this.RestrictionType = null;

        /**
         * Whether VPC is allowed. Valid values: `ALLOW` (allow), `DENY` (deny).
         * @type {string || null}
         */
        this.VpcRestrictionEffect = null;

        /**
         * Whether it is allowed to download the VPC ID list of the backup files.
         * @type {Array.<string> || null}
         */
        this.VpcIdSet = null;

        /**
         * Whether IP is allowed. Valid values: `ALLOW` (allow), `DENY` (deny).
         * @type {string || null}
         */
        this.IpRestrictionEffect = null;

        /**
         * Whether it is allowed to download IP list of the backup files.
         * @type {Array.<string> || null}
         */
        this.IpSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RestrictionType = 'RestrictionType' in params ? params.RestrictionType : null;
        this.VpcRestrictionEffect = 'VpcRestrictionEffect' in params ? params.VpcRestrictionEffect : null;
        this.VpcIdSet = 'VpcIdSet' in params ? params.VpcIdSet : null;
        this.IpRestrictionEffect = 'IpRestrictionEffect' in params ? params.IpRestrictionEffect : null;
        this.IpSet = 'IpSet' in params ? params.IpSet : null;

    }
}

/**
 * ModifyDBInstanceDeployment request structure.
 * @class
 */
class ModifyDBInstanceDeploymentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Deployment information of the instance node, which will display the information of each AZ when the instance node is deployed across multiple AZs.
The information of AZ can be obtained from the `Zone` field in the returned value of the [DescribeZones](https://intl.cloud.tencent.com/document/api/409/16769?from_cn_redirect=1) API.
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * Switch time after instance configurations are modified.
<li>0: Switch immediately</li>
<li>1: Switch at specified time</li>
<li>2: Switch during maintenance time window</li>
Default value: 0
         * @type {number || null}
         */
        this.SwitchTag = null;

        /**
         * Switch start time in the format of `HH:MM:SS`, such as 01:00:00. When `SwitchTag` is 0 or 2, this parameter becomes invalid.
         * @type {string || null}
         */
        this.SwitchStartTime = null;

        /**
         * Switch end time in the format of `HH:MM:SS`, such as 01:30:00. When `SwitchTag` is 0 or 2, this parameter becomes invalid.
         * @type {string || null}
         */
        this.SwitchEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

        if (params.DBNodeSet) {
            this.DBNodeSet = new Array();
            for (let z in params.DBNodeSet) {
                let obj = new DBNode();
                obj.deserialize(params.DBNodeSet[z]);
                this.DBNodeSet.push(obj);
            }
        }
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchStartTime = 'SwitchStartTime' in params ? params.SwitchStartTime : null;
        this.SwitchEndTime = 'SwitchEndTime' in params ? params.SwitchEndTime : null;

    }
}

/**
 * DeleteReadOnlyGroupNetworkAccess request structure.
 * @class
 */
class DeleteReadOnlyGroupNetworkAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group ID in the format of pgro-4t9c6g7k.
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * Unified VPC ID. If you want to delete the classic network, set the parameter to `0`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID. If you want to delete the classic network, set the parameter to `0`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Target VIP.
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
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * DescribeBackupDownloadRestriction request structure.
 * @class
 */
class DescribeBackupDownloadRestrictionRequest extends  AbstractModel {
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
 * AZ information such as number and status
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ abbreviation
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * AZ number
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Availability status. Valid values:
`UNAVAILABLE`.
`AVAILABLE`.
`SELLOUT`.
`SUPPORTMODIFYONLY` (supports configuration adjustment).
         * @type {string || null}
         */
        this.ZoneState = null;

        /**
         * Whether the AZ supports IPv6 address access
         * @type {number || null}
         */
        this.ZoneSupportIpv6 = null;

        /**
         * AZs that can be used as standby when this AZ is primary
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.StandbyZoneSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;
        this.ZoneSupportIpv6 = 'ZoneSupportIpv6' in params ? params.ZoneSupportIpv6 : null;
        this.StandbyZoneSet = 'StandbyZoneSet' in params ? params.StandbyZoneSet : null;

    }
}

/**
 * CreateDatabase request structure.
 * @class
 */
class CreateDatabaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID, such as postgres-6fego161. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/api/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Specifies the user-created database name.
Name specification: consists of letters (a-z, a-z), digits (0-9), and underscores (_), starting with a letter or underscore (_), up to 63 characters. system reserved keywords cannot be used, and 'postgres' is not allowed.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Owner of the database. obtain through the api [DescribeAccounts](https://www.tencentcloud.com/document/api/409/18109?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DatabaseOwner = null;

        /**
         * Specifies the character encoding of the database.
Supported character sets include UTF8, LATIN1, LATIN2, WIN1250, WIN1251, WIN1252, KOI8R, EUC_JP, and EUC_KR.
Default value: UTF8.
         * @type {string || null}
         */
        this.Encoding = null;

        /**
         * Specifies the database sorting rule.
         * @type {string || null}
         */
        this.Collate = null;

        /**
         * Specifies the character category of the database.
         * @type {string || null}
         */
        this.Ctype = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.DatabaseOwner = 'DatabaseOwner' in params ? params.DatabaseOwner : null;
        this.Encoding = 'Encoding' in params ? params.Encoding : null;
        this.Collate = 'Collate' in params ? params.Collate : null;
        this.Ctype = 'Ctype' in params ? params.Ctype : null;

    }
}

/**
 * Information of one SlowQuery
 * @class
 */
class NormalQueryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Number of calls
         * @type {number || null}
         */
        this.Calls = null;

        /**
         * Granularity
         * @type {Array.<number> || null}
         */
        this.CallsGrids = null;

        /**
         * Total time consumed
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * Number of affected rows
         * @type {number || null}
         */
        this.Rows = null;

        /**
         * Minimum time consumed
         * @type {number || null}
         */
        this.MinCostTime = null;

        /**
         * Maximum time consumed
         * @type {number || null}
         */
        this.MaxCostTime = null;

        /**
         * Time of the earliest slow SQL statement
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * Time of the latest slow SQL statement
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * Shared memory blocks for reads
         * @type {number || null}
         */
        this.SharedReadBlks = null;

        /**
         * Shared memory blocks for writes
         * @type {number || null}
         */
        this.SharedWriteBlks = null;

        /**
         * Total IO read time
         * @type {number || null}
         */
        this.ReadCostTime = null;

        /**
         * Total IO write time
         * @type {number || null}
         */
        this.WriteCostTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Slow SQL statement after desensitization
         * @type {string || null}
         */
        this.NormalQuery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Calls = 'Calls' in params ? params.Calls : null;
        this.CallsGrids = 'CallsGrids' in params ? params.CallsGrids : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.Rows = 'Rows' in params ? params.Rows : null;
        this.MinCostTime = 'MinCostTime' in params ? params.MinCostTime : null;
        this.MaxCostTime = 'MaxCostTime' in params ? params.MaxCostTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.SharedReadBlks = 'SharedReadBlks' in params ? params.SharedReadBlks : null;
        this.SharedWriteBlks = 'SharedWriteBlks' in params ? params.SharedWriteBlks : null;
        this.ReadCostTime = 'ReadCostTime' in params ? params.ReadCostTime : null;
        this.WriteCostTime = 'WriteCostTime' in params ? params.WriteCostTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.NormalQuery = 'NormalQuery' in params ? params.NormalQuery : null;

    }
}

/**
 * The information of tags associated with instances, including `TagKey` and `TagValue`
 * @class
 */
class Tag extends  AbstractModel {
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
 * DescribeBackupSummaries request structure.
 * @class
 */
class DescribeBackupSummariesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The maximum number of results returned per page. Value range: 1-100. Default: `10`
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, which starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Filter instances using one or more criteria. Valid filter names:
db-instance-id: Filter by instance ID (in string format).
db-instance-name: Filter by instance name (in string format).
db-instance-ip: Filter by instance VPC IP (in string format).
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Sorting field. Valid values: `TotalBackupSize`, `LogBackupSize`, `ManualBaseBackupSize`, `AutoBaseBackupSize`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `asc` (ascending), `desc` (descending).
         * @type {string || null}
         */
        this.OrderByType = null;

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
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * CreateBackupPlan request structure.
 * @class
 */
class CreateBackupPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Specifies the name of the backup plan.
         * @type {string || null}
         */
        this.PlanName = null;

        /**
         * Specifies the schedule type of the backup created. currently only support month.
         * @type {string || null}
         */
        this.BackupPeriodType = null;

        /**
         * Backup date. example: enable backup on the 2nd of every month.
         * @type {Array.<string> || null}
         */
        this.BackupPeriod = null;

        /**
         * Specifies the backup start time. if not passed, it follows the default backup plan.
         * @type {string || null}
         */
        this.MinBackupStartTime = null;

        /**
         * Backup end time. follows the default plan if not specified.
         * @type {string || null}
         */
        this.MaxBackupStartTime = null;

        /**
         * Specifies the data backup retention duration in days. value range: [0,30000).
BackupPeriodType defaults to 7 when set to week and 31 when set to month.
         * @type {number || null}
         */
        this.BaseBackupRetentionPeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.PlanName = 'PlanName' in params ? params.PlanName : null;
        this.BackupPeriodType = 'BackupPeriodType' in params ? params.BackupPeriodType : null;
        this.BackupPeriod = 'BackupPeriod' in params ? params.BackupPeriod : null;
        this.MinBackupStartTime = 'MinBackupStartTime' in params ? params.MinBackupStartTime : null;
        this.MaxBackupStartTime = 'MaxBackupStartTime' in params ? params.MaxBackupStartTime : null;
        this.BaseBackupRetentionPeriod = 'BaseBackupRetentionPeriod' in params ? params.BaseBackupRetentionPeriod : null;

    }
}

/**
 * CloseServerlessDBExtranetAccess request structure.
 * @class
 */
class CloseServerlessDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an instance
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.DBInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;

    }
}

/**
 * CreateBaseBackup response structure.
 * @class
 */
class CreateBaseBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data backup set ID
         * @type {string || null}
         */
        this.BaseBackupId = null;

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
        this.BaseBackupId = 'BaseBackupId' in params ? params.BaseBackupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LockAccount response structure.
 * @class
 */
class LockAccountResponse extends  AbstractModel {
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
 * CloneDBInstance response structure.
 * @class
 */
class CloneDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order number.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * Order transaction number.
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * Specifies the instance ID of the cloned instance. only support postpaid return this value.
         * @type {string || null}
         */
        this.DBInstanceId = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceReadOnlyGroup request structure.
 * @class
 */
class ModifyDBInstanceReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * ID of the RO group to which the read-only replica belongs
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * ID of the new RO group into which the read-only replica will move
         * @type {string || null}
         */
        this.NewReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.NewReadOnlyGroupId = 'NewReadOnlyGroupId' in params ? params.NewReadOnlyGroupId : null;

    }
}

/**
 * AddDBInstanceToReadOnlyGroup response structure.
 * @class
 */
class AddDBInstanceToReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KMS key information
 * @class
 */
class EncryptionKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the KeyId for KMS instance encryption.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Alias name of the KMS instance encryption Key.
         * @type {string || null}
         */
        this.KeyAlias = null;

        /**
         * Specifies the ciphertext of the instance encryption key DEK.
         * @type {string || null}
         */
        this.DEKCipherTextBlob = null;

        /**
         * Whether the key is enabled. valid values: 1 (enabled), 0 (disabled).
         * @type {number || null}
         */
        this.IsEnabled = null;

        /**
         * Specifies the region of the KMS key.
         * @type {string || null}
         */
        this.KeyRegion = null;

        /**
         * Creation time of the DEK key.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Specifies the Id of the KMS service cluster where the key resides. being empty indicates the key is in the default KMS cluster. a non-empty value indicates the key is in the specified KMS service cluster.
         * @type {string || null}
         */
        this.KMSClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyAlias = 'KeyAlias' in params ? params.KeyAlias : null;
        this.DEKCipherTextBlob = 'DEKCipherTextBlob' in params ? params.DEKCipherTextBlob : null;
        this.IsEnabled = 'IsEnabled' in params ? params.IsEnabled : null;
        this.KeyRegion = 'KeyRegion' in params ? params.KeyRegion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.KMSClusterId = 'KMSClusterId' in params ? params.KMSClusterId : null;

    }
}

/**
 * Database data backup information
 * @class
 */
class BaseBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Unique ID of a backup file
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Backup file name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Specifies the backup method: physical - physical backup, logical - logical backup.
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * Backup mode: automatic - automatic backup, manual - manual backup.
         * @type {string || null}
         */
        this.BackupMode = null;

        /**
         * Backup task status. valid values: init, running, finished, failed, canceled.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Backup set size in bytes
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Backup start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Backup end time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Backup expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupMode = 'BackupMode' in params ? params.BackupMode : null;
        this.State = 'State' in params ? params.State : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * CreateReadOnlyDBInstance response structure.
 * @class
 */
class CreateReadOnlyDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order number list. Each instance corresponds to an order number.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * Bill ID of frozen fees
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * ID set of instances which have been created successfully. The parameter value will be returned only when the pay-as-you-go billing mode is used.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * BillingParameters specifies the parameters for product order placement. the output has a value only when billingparameters is provided.
         * @type {string || null}
         */
        this.BillingParameters = null;

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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.BillingParameters = 'BillingParameters' in params ? params.BillingParameters : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableRecoveryTime request structure.
 * @class
 */
class DescribeAvailableRecoveryTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * DescribeTasks request structure.
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query by task ID. the FlowId and TaskId returned in other cloud apis are equivalent.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Query by database instance ID.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Earliest start time of the task, such as 2024-08-23 00:00:00. default shows data within the last 180 days.
         * @type {string || null}
         */
        this.MinStartTime = null;

        /**
         * Latest start time of the task, such as 2024-08-23 00:00:00, defaults to the current time.
         * @type {string || null}
         */
        this.MaxStartTime = null;

        /**
         * Number of results displayed per page. value range 1-100. default 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, starting from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting field, supports StartTime and EndTime. defaults to StartTime.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Specifies the sorting method, including ascending: `asc` and descending: `desc`. defaults to `desc`.
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.MinStartTime = 'MinStartTime' in params ? params.MinStartTime : null;
        this.MaxStartTime = 'MaxStartTime' in params ? params.MaxStartTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeDBInstanceParameters request structure.
 * @class
 */
class DescribeDBInstanceParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Name of the parameter to be queried. If `ParamName` is left empty or not passed in, the list of all parameters will be returned.
         * @type {string || null}
         */
        this.ParamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;

    }
}

/**
 * DescribeOrders response structure.
 * @class
 */
class DescribeOrdersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of orders
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Order array
         * @type {Array.<PgDeal> || null}
         */
        this.Deals = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new PgDeal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupDownloadURL response structure.
 * @class
 */
class DescribeBackupDownloadURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup download URL
         * @type {string || null}
         */
        this.BackupDownloadURL = null;

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
        this.BackupDownloadURL = 'BackupDownloadURL' in params ? params.BackupDownloadURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenServerlessDBExtranetAccess response structure.
 * @class
 */
class OpenServerlessDBExtranetAccessResponse extends  AbstractModel {
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
 * ModifyMaintainTimeWindow response structure.
 * @class
 */
class ModifyMaintainTimeWindowResponse extends  AbstractModel {
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
 * InquiryPriceCreateDBInstances response structure.
 * @class
 */
class InquiryPriceCreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>List price, in cents.</p>
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * <p>Actual payment amount after discount, in cents.</p>
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Currency, such as USD.
         * @type {string || null}
         */
        this.Currency = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Database version information
 * @class
 */
class Version extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engines. Valid values:
1. `postgresql` (TencentDB for PostgreSQL)
2. `mssql_compatible` (MSSQL compatible-TencentDB for PostgreSQL)
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * Database version, such as 12.4.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Database major version, such as 12.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * Database kernel version, such as v12.4_r1.3.
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * List of features supported by the database kernel, such as:
TDE: Supports data encryption.
         * @type {Array.<string> || null}
         */
        this.SupportedFeatureNames = null;

        /**
         * Database version status. Valid values:
`AVAILABLE`.
`DEPRECATED`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * List of versions to which this database version (`DBKernelVersion`) can be upgraded, including minor and major version numbers available for upgrade (complete kernel version format example: v15.1_v1.6).
         * @type {Array.<string> || null}
         */
        this.AvailableUpgradeTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;
        this.SupportedFeatureNames = 'SupportedFeatureNames' in params ? params.SupportedFeatureNames : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AvailableUpgradeTarget = 'AvailableUpgradeTarget' in params ? params.AvailableUpgradeTarget : null;

    }
}

/**
 * CreateDBInstanceNetworkAccess request structure.
 * @class
 */
class CreateDBInstanceNetworkAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID, such as postgres-6bwgamo3. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Unified VPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether to manually assign the VIP. Valid values: `true` (manually assign), `false` (automatically assign).
         * @type {boolean || null}
         */
        this.IsAssignVip = null;

        /**
         * Target VIP address. when this parameter is not specified and IsAssignVip is true, the system automatically assigns a VIP by default.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.IsAssignVip = 'IsAssignVip' in params ? params.IsAssignVip : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * ModifySwitchTimePeriod response structure.
 * @class
 */
class ModifySwitchTimePeriodResponse extends  AbstractModel {
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
 * Task list information
 * @class
 */
class TaskSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Specifies the task type.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Specifies the instance ID of the task instance.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Start time of the task.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the task Running status, including Running, Success, WaitSwitch, Fail, Pause.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Indicates the progress of task execution, with a value range of 0-100.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * Specifies the task details.
         * @type {TaskDetail || null}
         */
        this.TaskDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;

        if (params.TaskDetail) {
            let obj = new TaskDetail();
            obj.deserialize(params.TaskDetail)
            this.TaskDetail = obj;
        }

    }
}

/**
 * InquiryPriceCreateDBInstances request structure.
 * @class
 */
class InquiryPriceCreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Availability zone name. The value of this parameter can be obtained from the returned Zone field of the <a href="https://www.tencentcloud.com/document/product/409/16769?from_cn_redirect=1">DescribeZones</a> API.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>Specification ID. The value of this parameter can be obtained from the returned SpecCode field of the <a href="https://www.tencentcloud.com/document/product/409/89019?from_cn_redirect=1">DescribeClasses</a> API.</p>
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * <p>Storage capacity, in GB. The value for this parameter must be set in increments of 10.</p>
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * <p>Instance quantity. The maximum allowed quantity is no more than 100. If you need to create more instances at a time, please contact customer service.</p>
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * <p>Purchased duration, in months. Only 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36 are supported.</p>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * <p>[Deprecated and no longer effective] Billing ID. The value of this parameter can be obtained from the returned Pid field of the DescribeProductConfig API.</p>
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * <p>Instance billing type. Valid values: PREPAID (prepaid, also known as yearly/monthly subscription) and POSTPAID (pay-as-you-go).<br>Default value: PREPAID.</p>
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * <p>Instance type. The default value is primary. Valid values:<br>primary (dual-server high availability (one primary and one standby)).<br>readonly (read-only instance).</p>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * <p>Database engine. The default value is postgresql. Valid values:<br>postgresql (TencentDB for PostgreSQL).<br>mssql_compatible (MSSQL compatible - TencentDB for PostgreSQL).</p>
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * <p>Instance storage type. Valid values: PHYSICAL_LOCAL_SSD: local SSD of physical machine. CLOUD_PREMIUM: Premium Disk. CLOUD_SSD: Cloud SSD. CLOUD_HSSD: Enhanced SSD.</p>
         * @type {string || null}
         */
        this.StorageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

    }
}

/**
 * DescribeDefaultParameters response structure.
 * @class
 */
class DescribeDefaultParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of parameters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ParamInfo> || null}
         */
        this.ParamInfoSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ParamInfoSet) {
            this.ParamInfoSet = new Array();
            for (let z in params.ParamInfoSet) {
                let obj = new ParamInfo();
                obj.deserialize(params.ParamInfoSet[z]);
                this.ParamInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PostgreSQL for Serverless instance network description
 * @class
 */
class ServerlessDBInstanceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * IP address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Port number
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Network type
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.Address = 'Address' in params ? params.Address : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * DescribeBackupPlans response structure.
 * @class
 */
class DescribeBackupPlansResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The set of instance backup plans
         * @type {Array.<BackupPlan> || null}
         */
        this.Plans = null;

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

        if (params.Plans) {
            this.Plans = new Array();
            for (let z in params.Plans) {
                let obj = new BackupPlan();
                obj.deserialize(params.Plans[z]);
                this.Plans.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstances request structure.
 * @class
 */
class DescribeDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query using one or more filter criteria. Filter criteria currently supported include:
db-instance-id: filter by instance ID (in string format)
db-instance-name: filter by instance name (in string format)
db-project-id: filter by project ID (in string format)
db-pay-mode: filter by instance billing mode (in string format)
db-tag-key: filter by tag key (in string format)
db-private-ip: filter by instance VPC IP (in string format)
db-public-address: filter by instance public network address (in string format)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The maximum number of results returned per page. Value range: 1-100. Default: `10`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, which starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting metric, such as instance name or creation time. Valid values: DBInstanceId, CreateTime, Name, EndTime.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `asc` (ascending), `desc` (descending)
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

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
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * RO group information
 * @class
 */
class ReadOnlyGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group identifier
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * RO group name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * Project ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Primary instance ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * The minimum number of read-only replicas that must be retained in an RO group
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinDelayEliminateReserve = null;

        /**
         * Delayed log size threshold
         * @type {number || null}
         */
        this.MaxReplayLatency = null;

        /**
         * Whether to remove a read-only replica from an RO group if the sync log size difference between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLatencyEliminate = null;

        /**
         * Delay threshold
         * @type {number || null}
         */
        this.MaxReplayLag = null;

        /**
         * Whether to remove a read-only replica from an RO group if the delay between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLagEliminate = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Region ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Availability zone ID
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Instance details
         * @type {Array.<DBInstance> || null}
         */
        this.ReadOnlyDBInstanceList = null;

        /**
         * Whether to enable automatic load balancing
         * @type {number || null}
         */
        this.Rebalance = null;

        /**
         * Network information
         * @type {Array.<DBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * Network access list of the RO group (this field has been deprecated)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<NetworkAccess> || null}
         */
        this.NetworkAccessList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.MinDelayEliminateReserve = 'MinDelayEliminateReserve' in params ? params.MinDelayEliminateReserve : null;
        this.MaxReplayLatency = 'MaxReplayLatency' in params ? params.MaxReplayLatency : null;
        this.ReplayLatencyEliminate = 'ReplayLatencyEliminate' in params ? params.ReplayLatencyEliminate : null;
        this.MaxReplayLag = 'MaxReplayLag' in params ? params.MaxReplayLag : null;
        this.ReplayLagEliminate = 'ReplayLagEliminate' in params ? params.ReplayLagEliminate : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.ReadOnlyDBInstanceList) {
            this.ReadOnlyDBInstanceList = new Array();
            for (let z in params.ReadOnlyDBInstanceList) {
                let obj = new DBInstance();
                obj.deserialize(params.ReadOnlyDBInstanceList[z]);
                this.ReadOnlyDBInstanceList.push(obj);
            }
        }
        this.Rebalance = 'Rebalance' in params ? params.Rebalance : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new DBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }

        if (params.NetworkAccessList) {
            this.NetworkAccessList = new Array();
            for (let z in params.NetworkAccessList) {
                let obj = new NetworkAccess();
                obj.deserialize(params.NetworkAccessList[z]);
                this.NetworkAccessList.push(obj);
            }
        }

    }
}

/**
 * ModifyDBInstanceSpec request structure.
 * @class
 */
class ModifyDBInstanceSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-6bwgamo3.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance memory size in GiB after modification.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GiB after modification.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Whether to automatically use coupons:
<li>`0`: no</li>
<li>`1`: yes</li>
Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list. Currently, you can specify only one voucher.
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * Campaign ID.
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * Switch time after instance configurations are modified.
<li>0: Switch immediately</li>
<li>1: Switch at specified time</li>
<li>2: Switch during maintenance time window</li>
Default value: 0
         * @type {number || null}
         */
        this.SwitchTag = null;

        /**
         * Switch start time in the format of `HH:MM:SS`, such as 01:00:00. When `SwitchTag` is 0 or 2, this parameter becomes invalid.
         * @type {string || null}
         */
        this.SwitchStartTime = null;

        /**
         * Switch end time in the format of `HH:MM:SS`, such as 01:30:00. When `SwitchTag` is 0 or 2, this parameter becomes invalid.
         * @type {string || null}
         */
        this.SwitchEndTime = null;

        /**
         * Instance CPU size in Cores after modification.
         * @type {number || null}
         */
        this.Cpu = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchStartTime = 'SwitchStartTime' in params ? params.SwitchStartTime : null;
        this.SwitchEndTime = 'SwitchEndTime' in params ? params.SwitchEndTime : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * ModifyAccountRemark response structure.
 * @class
 */
class ModifyAccountRemarkResponse extends  AbstractModel {
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
 * UpgradeDBInstance request structure.
 * @class
 */
class UpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance memory size in GB after upgrade
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance disk size in GB after upgrade
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Instance ID in the format of postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Whether to automatically use vouchers. 1: yes, 0: no. Default value: no
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list (only one voucher can be specified currently)
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * Activity ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * Switch time after instance configurations are modified. Valid values: `0` (switch immediately), `1` (switch at specified time). Default value: `0`
         * @type {number || null}
         */
        this.SwitchTag = null;

        /**
         * The earliest time to start a switch
         * @type {string || null}
         */
        this.SwitchStartTime = null;

        /**
         * The latest time to start a switch
         * @type {string || null}
         */
        this.SwitchEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchStartTime = 'SwitchStartTime' in params ? params.SwitchStartTime : null;
        this.SwitchEndTime = 'SwitchEndTime' in params ? params.SwitchEndTime : null;

    }
}

/**
 * DescribeZones request structure.
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
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
 * Purchasable specification details in an AZ in a region.
 * @class
 */
class SpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region abbreviation, which corresponds to the `Region` field of `RegionSet`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * AZ abbreviate, which corresponds to the `Zone` field of `ZoneSet`
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Specification details list
         * @type {Array.<SpecItemInfo> || null}
         */
        this.SpecItemInfoList = null;

        /**
         * Regions where KMS is supported
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.SupportKMSRegions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SpecItemInfoList) {
            this.SpecItemInfoList = new Array();
            for (let z in params.SpecItemInfoList) {
                let obj = new SpecItemInfo();
                obj.deserialize(params.SpecItemInfoList[z]);
                this.SpecItemInfoList.push(obj);
            }
        }
        this.SupportKMSRegions = 'SupportKMSRegions' in params ? params.SupportKMSRegions : null;

    }
}

/**
 * ModifyMaintainTimeWindow request structure.
 * @class
 */
class ModifyMaintainTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Maintenance start time. time zone is UTC+8.
         * @type {string || null}
         */
        this.MaintainStartTime = null;

        /**
         * Maintenance duration. unit: hr. value range: [1,4].
         * @type {number || null}
         */
        this.MaintainDuration = null;

        /**
         * Specifies the maintenance period.
         * @type {Array.<string> || null}
         */
        this.MaintainWeekDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.MaintainStartTime = 'MaintainStartTime' in params ? params.MaintainStartTime : null;
        this.MaintainDuration = 'MaintainDuration' in params ? params.MaintainDuration : null;
        this.MaintainWeekDays = 'MaintainWeekDays' in params ? params.MaintainWeekDays : null;

    }
}

/**
 * ModifyBackupDownloadRestriction response structure.
 * @class
 */
class ModifyBackupDownloadRestrictionResponse extends  AbstractModel {
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
 * Parameter information for each version
 * @class
 */
class ParamVersionRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter information belonging to kernel version.
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * Default value of the parameter for this version and specification.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Parameter value unit. returns null if the parameter has no units.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Numerical type (integer, real) parameter specifies the upper bound.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * Specifies the numerical type (integer, real) parameter and its lower bound.
         * @type {number || null}
         */
        this.Min = null;

        /**
         * Value range of the enum parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;

    }
}

/**
 * DescribeLogBackups request structure.
 * @class
 */
class DescribeLogBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum end time of a backup in the format of `2018-01-01 00:00:00`. It is 7 days ago by default.
         * @type {string || null}
         */
        this.MinFinishTime = null;

        /**
         * Maximum end time of a backup in the format of `2018-01-01 00:00:00`. It is the current time by default.
         * @type {string || null}
         */
        this.MaxFinishTime = null;

        /**
         * Filter instances using one or more criteria. Valid filter names:
db-instance-id: Filter by instance ID (in string format).
db-instance-name: Filter by instance name (in string format).
db-instance-ip: Filter by instance VPC IP (in string format).
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The maximum number of results returned per page. Value range: 1-100. Default: `10`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, which starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting field. Valid values: `StartTime`, `FinishTime`, `Size`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `asc` (ascending), `desc` (descending).
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinFinishTime = 'MinFinishTime' in params ? params.MinFinishTime : null;
        this.MaxFinishTime = 'MaxFinishTime' in params ? params.MaxFinishTime : null;

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
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * SetAutoRenewFlag response structure.
 * @class
 */
class SetAutoRenewFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of successfully set instances
         * @type {number || null}
         */
        this.Count = null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Specifies the permissions for modifying a database object, including the data structure of the database object description, the list of permissions required for modification, and the modification type.
 * @class
 */
class ModifyPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the database object and permission list to be modified.
         * @type {DatabasePrivilege || null}
         */
        this.DatabasePrivilege = null;

        /**
         * Modifies via grantObject, revokeObject, or alterRole. grantObject represents authorization, revokeObject represents withdraw, alterRole represents modify account type.
         * @type {string || null}
         */
        this.ModifyType = null;

        /**
         * This parameter is required only when ModifyType is revokeObject. when set to true, the permission will be revoked with cascading effect. default false.
         * @type {boolean || null}
         */
        this.IsCascade = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DatabasePrivilege) {
            let obj = new DatabasePrivilege();
            obj.deserialize(params.DatabasePrivilege)
            this.DatabasePrivilege = obj;
        }
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;
        this.IsCascade = 'IsCascade' in params ? params.IsCascade : null;

    }
}

/**
 * Network information. (This parameter structure has been deprecated. Please use `DBInstanceNetInfo` to query network information.)
 * @class
 */
class NetworkAccess extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network resource id, instance id, or RO group id.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type. valid values: 1 (instance), 2 (RO group).
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * VPC ID. specifies the ID of the virtual private cloud.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * IPv4 Address
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * IPv6 Address
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * Specifies the access port.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Network status. valid values: 1-applying, 2-active, 3-deleting, 4-deleted.
         * @type {number || null}
         */
        this.VpcStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcStatus = 'VpcStatus' in params ? params.VpcStatus : null;

    }
}

/**
 * DescribeDBInstanceAttribute request structure.
 * @class
 */
class DescribeDBInstanceAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. can be obtained through the DescribeDBInstances api (https://www.tencentcloud.comom/document/api/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ResetAccountPassword response structure.
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
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
 * RemoveDBInstanceFromReadOnlyGroup response structure.
 * @class
 */
class RemoveDBInstanceFromReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The list of slow query details returned by the `DescribeSlowQueryList` API
 * @class
 */
class RawSlowQuery extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow query statement
         * @type {string || null}
         */
        this.RawQuery = null;

        /**
         * The database queried by the slow query statement
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * The execution time of the slow query statement
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * The client that executes the slow query statement
         * @type {string || null}
         */
        this.ClientAddr = null;

        /**
         * The name of the user who executes the slow query statement
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * The time when the slow query statement starts to execute
         * @type {string || null}
         */
        this.SessionStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RawQuery = 'RawQuery' in params ? params.RawQuery : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ClientAddr = 'ClientAddr' in params ? params.ClientAddr : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.SessionStartTime = 'SessionStartTime' in params ? params.SessionStartTime : null;

    }
}

/**
 * DescribeDatabaseObjects request structure.
 * @class
 */
class DescribeDatabaseObjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/api/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Specifies the object type for querying. supported objects: database, schema, sequence, procedure, type, function, table, view, matview, column.
         * @type {string || null}
         */
        this.ObjectType = null;

        /**
         * Number of items displayed at a time. default 20. value range 0-100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, starting from 0.		
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Describes the database the query object belongs to. this parameter is required when the query object type is not database.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Specifies the mode belonging to the query object. this parameter is required when the query object type is not database or schema.
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * Specifies the table belonging to the query object. this parameter is required when the query object type is column.
         * @type {string || null}
         */
        this.TableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ObjectType = 'ObjectType' in params ? params.ObjectType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;

    }
}

/**
 * DescribeParameterTemplates response structure.
 * @class
 */
class DescribeParameterTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of eligible parameter templates
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter template list
         * @type {Array.<ParameterTemplate> || null}
         */
        this.ParameterTemplateSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ParameterTemplateSet) {
            this.ParameterTemplateSet = new Array();
            for (let z in params.ParameterTemplateSet) {
                let obj = new ParameterTemplate();
                obj.deserialize(params.ParameterTemplateSet[z]);
                this.ParameterTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Parameter information for each specification
 * @class
 */
class ParamSpecRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter information belonging to specification.
         * @type {string || null}
         */
        this.Memory = null;

        /**
         * Default value of the parameter for this specification.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Parameter value unit. returns null if the parameter has no units.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Numerical type (integer, real) parameter specifies the upper bound.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * Specifies the numerical type (integer, real) parameter and its lower bound.
         * @type {number || null}
         */
        this.Min = null;

        /**
         * Value range of the enum parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;

    }
}

/**
 * Describes the type of a certain object in the database, and the database, mode, and table of the object.
 * @class
 */
class DatabaseObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the supported object types in the database: account, database, schema, sequence, procedure, type, function, table, view, matview, column.
         * @type {string || null}
         */
        this.ObjectType = null;

        /**
         * Specifies the database object name.
         * @type {string || null}
         */
        this.ObjectName = null;

        /**
         * Describes the database object and the database name it belongs to. this parameter is required when the description object type is not database.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Specifies the schema name of the database object to describe. this parameter is required when the description object is not database or schema.
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * Specifies the database object to describe and the table name it belongs to. this parameter is required when the object type is column.
         * @type {string || null}
         */
        this.TableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ObjectType = 'ObjectType' in params ? params.ObjectType : null;
        this.ObjectName = 'ObjectName' in params ? params.ObjectName : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;

    }
}

/**
 * UpgradeDBInstanceKernelVersion request structure.
 * @class
 */
class UpgradeDBInstanceKernelVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Target kernel version, which can be obtained in the `AvailableUpgradeTarget` field in the returned value of the [DescribeDBVersions](https://intl.cloud.tencent.com/document/api/409/89018?from_cn_redirect=1) API.

         * @type {string || null}
         */
        this.TargetDBKernelVersion = null;

        /**
         * Switch time after the kernel version upgrade for the specified instance. Valid values:
<li>`0`: Switch now.
<li>`1`: Switch at the specified time.
<li>`2`: Switch in the maintenance time.
Default value: `0`. 
         * @type {number || null}
         */
        this.SwitchTag = null;

        /**
         * Switch start time in the format of `HH:MM:SS`, such as 01:00:00. When `SwitchTag` is `0` or `2`, this parameter is invalid.
         * @type {string || null}
         */
        this.SwitchStartTime = null;

        /**
         * Switch end time in the format of `HH:MM:SS`, such as 01:30:00. When `SwitchTag` is `0` or `2`, this parameter is invalid. The difference between `SwitchStartTime` and `SwitchEndTime` cannot be less than 30 minutes.
         * @type {string || null}
         */
        this.SwitchEndTime = null;

        /**
         * Whether to perform a pre-check on the current operation of upgrading the instance kernel version. Valid values:
u200c<li>u200c`true`: Performs a pre-check without upgrading the kernel version. Check items include request parameters, kernel version compatibility, and instance parameters.
u200cu200c<li>`false`: Sends a normal request and upgrades the kernel version directly after the check is passed.
Default value: `false`.
         * @type {boolean || null}
         */
        this.DryRun = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.TargetDBKernelVersion = 'TargetDBKernelVersion' in params ? params.TargetDBKernelVersion : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchStartTime = 'SwitchStartTime' in params ? params.SwitchStartTime : null;
        this.SwitchEndTime = 'SwitchEndTime' in params ? params.SwitchEndTime : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * SwitchDBInstancePrimary response structure.
 * @class
 */
class SwitchDBInstancePrimaryResponse extends  AbstractModel {
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
 * ModifyReadOnlyDBInstanceWeight response structure.
 * @class
 */
class ModifyReadOnlyDBInstanceWeightResponse extends  AbstractModel {
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
 * ModifyDBInstanceHAConfig request structure.
 * @class
 */
class ModifyDBInstanceHAConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Primary-standby sync mode. Valid values:
<li>`Semi-sync`
<li>`Async`

         * @type {string || null}
         */
        this.SyncMode = null;

        /**
         * Maximum data lag for high-availability standby server. The standby node can be promoted to the primary node when its data lag and the delay time are both less than the value of `MaxStandbyLatency` and `MaxStandbyLag` respectively.
<li>Unit: byte
<li>Value range: 1073741824-322122547200
         * @type {number || null}
         */
        this.MaxStandbyLatency = null;

        /**
         * The maximum delay for high-availability standby server The standby node can be promoted to the primary node when its data lag and the delay time are both less or equals to the value of `MaxStandbyLatency` and `MaxStandbyLag` respectively.
<li>Unit: s
<li>Value range: 5-10
         * @type {number || null}
         */
        this.MaxStandbyLag = null;

        /**
         * Maximum data sync lag for standby server. If data lag of the standby node and the delay ime are both less than or equals to the values of `MaxSyncStandbyLatency` and `MaxSyncStandbyLag`, the standby server adopts semi-sync replication; if not, it adopts async replication.
This value is only valid for the instance with `SyncMode` set to `Semi-sync`.
When the semi-sync replication mode of the instance is not allowed to downgrade to async replication, `MaxSyncStandbyLatency` and `MaxSyncStandbyLag` are not required.
When the semi-sync instance is allowed to downgrade to async replication, `MaxSyncStandbyLatency` is required and `MaxSyncStandbyLag` must be left empty for PostgreSQL 9; `MaxSyncStandbyLatency` and MaxSyncStandbyLag` are required for PostgreSQL 10 and later.
         * @type {number || null}
         */
        this.MaxSyncStandbyLatency = null;

        /**
         * Maximum delay for sync standby server. If the delay time for standby server and the data lag are both less than or equals to the value of `MaxSyncStandbyLag` and `MaxSyncStandbyLatency` respectively, the standby server adopts sync replication mode; if not, it adopts async replication.
This value is only valid for the instance with `SyncMode` set to `Semi-sync`.
When the semi-sync replication mode of the instance is not allowed to downgrade to async replication, `MaxSyncStandbyLatency` and `MaxSyncStandbyLag` are not required.
When the semi-sync instance is allowed to downgrade to async replication, `MaxSyncStandbyLatency` is required and `MaxSyncStandbyLag` must be left empty for PostgreSQL 9; `MaxSyncStandbyLatency` and MaxSyncStandbyLag` are required for PostgreSQL 10 and later.
         * @type {number || null}
         */
        this.MaxSyncStandbyLag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;
        this.MaxStandbyLatency = 'MaxStandbyLatency' in params ? params.MaxStandbyLatency : null;
        this.MaxStandbyLag = 'MaxStandbyLag' in params ? params.MaxStandbyLag : null;
        this.MaxSyncStandbyLatency = 'MaxSyncStandbyLatency' in params ? params.MaxSyncStandbyLatency : null;
        this.MaxSyncStandbyLag = 'MaxSyncStandbyLag' in params ? params.MaxSyncStandbyLag : null;

    }
}

/**
 * Order details
 * @class
 */
class PgDeal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * User
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Number of instances involved in order
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Billing mode. 0: pay-as-you-go
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Instance ID array
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;

    }
}

/**
 * DeleteReadOnlyGroupNetworkAccess response structure.
 * @class
 */
class DeleteReadOnlyGroupNetworkAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMaintainTimeWindow request structure.
 * @class
 */
class DescribeMaintainTimeWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * DescribeBackupSummaries response structure.
 * @class
 */
class DescribeBackupSummariesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup statistics list.
         * @type {Array.<BackupSummary> || null}
         */
        this.BackupSummarySet = null;

        /**
         * Number of all queried backups.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.BackupSummarySet) {
            this.BackupSummarySet = new Array();
            for (let z in params.BackupSummarySet) {
                let obj = new BackupSummary();
                obj.deserialize(params.BackupSummarySet[z]);
                this.BackupSummarySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBErrlogs request structure.
 * @class
 */
class DescribeDBErrlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * u200cu200cu200cQuery start time in the format of 2018-01-01 00:00:00. The log is retained for seven days by default, so the start time must fall within the retention period.	
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * u200cu200cu200cu200cQuery end time in the format of 2018-01-01 00:00:00	
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Keywords used for search
         * @type {Array.<string> || null}
         */
        this.SearchKeys = null;

        /**
         * Number of results returned per page. Value range: 1-100. Default value: `50`.	
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, which starts from 0. Default value: `0`.	
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Database backup information
 * @class
 */
class DBBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique backup file ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * File generation start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * File generation end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * File size in KB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Policy (0: instance backup, 1: multi-database backup)
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * Type (0: scheduled)
         * @type {number || null}
         */
        this.Way = null;

        /**
         * Backup mode (1: full)
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Status (1: creating, 2: success, 3: failure)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * DB list
         * @type {Array.<string> || null}
         */
        this.DbList = null;

        /**
         * Download address on private network
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * Download address on public network
         * @type {string || null}
         */
        this.ExternalAddr = null;

        /**
         * Backup set ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Way = 'Way' in params ? params.Way : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DbList = 'DbList' in params ? params.DbList : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.SetId = 'SetId' in params ? params.SetId : null;

    }
}

/**
 * ModifyDBInstancesProject response structure.
 * @class
 */
class ModifyDBInstancesProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of successfully transferred instances
         * @type {number || null}
         */
        this.Count = null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBackupPlan request structure.
 * @class
 */
class DeleteBackupPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Backup plan ID. obtain through the api [DescribeBackupPlans](https://www.tencentcloud.com/document/product/409/45151?lang=en).
         * @type {string || null}
         */
        this.PlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * CloneDBInstance request structure.
 * @class
 */
class CloneDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The source instance ID to be cloned. can be obtained through the DescribeDBInstances api (https://www.tencentcloud.comom/document/api/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Purchasable code, which can be obtained from the `SpecCode` field in the return value of the [DescribeClasses](https://intl.cloud.tencent.com/document/api/409/89019?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Instance disk capacity size. set step size to 10. unit: GB.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Purchase duration, in months.

- Prepaid: Supports `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, and `36`.
- Pay-as-you-go: Only supports `1`.

         * @type {number || null}
         */
        this.Period = null;

        /**
         * Specifies the auto-renewal flag. this parameter is valid only when the billing mode is prepaid.
Valid values:.

- `0`: specifies manual renewal.
-`1`: specifies auto-renewal.

Default value: 0
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * VPC ID in the format of `vpc-xxxxxxx`, which can be obtained in the console or from the `unVpcId` field in the return value of the [DescribeVpcEx](https://intl.cloud.tencent.com/document/api/215/1372?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID in the format of `subnet-xxxxxxxx`, which can be obtained in the console or from the `unSubnetId` field in the return value of the [DescribeSubnets](https://intl.cloud.tencent.com/document/api/215/15784?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Specifies the instance name for new purchase, only supports chinese/english/digits/"_"/"-" with length less than 60. displays "source instance name-Copy" by default if no instance name is specified.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Instance billing type, which currently supports:

- PREPAID: Prepaid, i.e., yearly/monthly subscription
- POSTPAID_BY_HOUR: Pay-as-you-go, i.e., pay by consumption

Default value: PREPAID
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Security group to which an instance belongs. obtain this parameter by calling the SecurityGroupId field in the return value of [DescribeSecurityGroups](https://www.tencentcloud.comom/document/api/215/15808?from_cn_redirect=1). if not specified, the default security group is bound.

         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Project ID. default value is 0, which means it belongs to the default project.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * The information of tags to be bound with the instance, which is left empty by default. This parameter can be obtained from the `Tags` field in the return value of the [DescribeTags](https://intl.cloud.tencent.com/document/api/651/35316?from_cn_redirect=1) API.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * Deployment information of instance nodes. the availability zone of primary and secondary nodes is required. when multi-availability zone deployment is supported, the availability zone information for each node must be specified.
AZ information can be obtained by calling the DescribeZones api (https://www.tencentcloud.comom/document/api/409/16769?from_cn_redirect=1) and checking the Zone field in the returned value.
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * Whether to automatically use coupons:

- 0: No
- 1: Yes

Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list.
         * @type {string || null}
         */
        this.VoucherIds = null;

        /**
         * Campaign ID.
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * Basic backup set ID. either `BackupSetId` or `RecoveryTargetTime` must be provided, and cannot include both.
         * @type {string || null}
         */
        this.BackupSetId = null;

        /**
         * Specifies the recovery time point. either `BackupSetId` or `RecoveryTargetTime` must be provided, and cannot include both.
         * @type {string || null}
         */
        this.RecoveryTargetTime = null;

        /**
         * Primary-standby sync mode, which supports:
<li>Semi-sync: Semi-sync</li>
<li>Async: Asynchronous</li>
Default value for the primary instance: Semi-sync
Default value for the read-only instance: Async
         * @type {string || null}
         */
        this.SyncMode = null;

        /**
         * Specifies whether to enable deletion protection for the instance. valid values: true (enable deletion protection), false (disable deletion protection).
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

        if (params.DBNodeSet) {
            this.DBNodeSet = new Array();
            for (let z in params.DBNodeSet) {
                let obj = new DBNode();
                obj.deserialize(params.DBNodeSet[z]);
                this.DBNodeSet.push(obj);
            }
        }
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.BackupSetId = 'BackupSetId' in params ? params.BackupSetId : null;
        this.RecoveryTargetTime = 'RecoveryTargetTime' in params ? params.RecoveryTargetTime : null;
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;

    }
}

/**
 * DeleteParameterTemplate request structure.
 * @class
 */
class DeleteParameterTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID, which uniquely identifies the parameter template to be operated.
         * @type {string || null}
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
 * DescribeClasses request structure.
 * @class
 */
class DescribeClassesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID, which can be obtained through the `DescribeZones` API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Database engines. Valid values:
1. `postgresql` (TencentDB for PostgreSQL)
2. `mssql_compatible` (MSSQL compatible-TencentDB for PostgreSQL)
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * Major version of a database, such as 12 or 13, which can be obtained through the `DescribeDBVersions` API.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;

    }
}

/**
 * DescribeParamsEvent request structure.
 * @class
 */
class DescribeParamsEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * Parameter modification event information
 * @class
 */
class EventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Original parameter value.
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * This modification specifies the expected parameter value.
         * @type {string || null}
         */
        this.NewValue = null;

        /**
         * Specifies the start time for backend parameter modification.
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Specifies the start of effective time for the backend parameter.
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * Modification status. valid values: in progress, success, paused.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Operator (normal: user sub UIN).
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Time log.
         * @type {string || null}
         */
        this.EventLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.OldValue = 'OldValue' in params ? params.OldValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.State = 'State' in params ? params.State : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.EventLog = 'EventLog' in params ? params.EventLog : null;

    }
}

/**
 * CreateInstances response structure.
 * @class
 */
class CreateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Order number list. Each instance corresponds to an order number.</p>
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * <p>Frozen transaction ID.</p>
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * <p>ID set of successfully created instances. Return value is available only in pay scenarios.</p>
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Detailed analysis of a slow query statement with abstract parameter values, which is returned by the `DescribeSlowQueryAnalysis` API
 * @class
 */
class AnalysisItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the database queried by the slow query statement
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * The name of the user who executes the slow query statement
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * The slow query statement whose parameter values are abstracted
         * @type {string || null}
         */
        this.NormalQuery = null;

        /**
         * The address of the client that executes the slow query statement
         * @type {string || null}
         */
        this.ClientAddr = null;

        /**
         * The number of executions of the slow query statement during the specified period of time
         * @type {number || null}
         */
        this.CallNum = null;

        /**
         * The ratio (in decimal form) of the number of executions of the slow query statement to that of all slow query statements during the specified period of time
         * @type {number || null}
         */
        this.CallPercent = null;

        /**
         * The total execution time of the slow query statement during the specified period of time
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * The ratio (in decimal form) of the total execution time of the slow query statement to that of all slow query statements during the specified period of time
         * @type {number || null}
         */
        this.CostPercent = null;

        /**
         * The shortest execution time (in ms) of the slow query statement during the specified period of time
         * @type {number || null}
         */
        this.MinCostTime = null;

        /**
         * The longest execution time (in ms) of the slow query statement during the specified period of time
         * @type {number || null}
         */
        this.MaxCostTime = null;

        /**
         * The average execution time (in ms) of the slow query statement during the specified period of time
         * @type {number || null}
         */
        this.AvgCostTime = null;

        /**
         * The timestamp when the slow query statement starts to execute for the first time during the specified period of time
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * The timestamp when the slow query statement starts to execute for the last time during the specified period of time
         * @type {string || null}
         */
        this.LastTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.NormalQuery = 'NormalQuery' in params ? params.NormalQuery : null;
        this.ClientAddr = 'ClientAddr' in params ? params.ClientAddr : null;
        this.CallNum = 'CallNum' in params ? params.CallNum : null;
        this.CallPercent = 'CallPercent' in params ? params.CallPercent : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.CostPercent = 'CostPercent' in params ? params.CostPercent : null;
        this.MinCostTime = 'MinCostTime' in params ? params.MinCostTime : null;
        this.MaxCostTime = 'MaxCostTime' in params ? params.MaxCostTime : null;
        this.AvgCostTime = 'AvgCostTime' in params ? params.AvgCostTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;

    }
}

/**
 * Database Xlog information
 * @class
 */
class Xlog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique backup file ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * File generation start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * File generation end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Download address on private network
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * Download address on public network
         * @type {string || null}
         */
        this.ExternalAddr = null;

        /**
         * Backup file size
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
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * DescribeServerlessDBInstances request structure.
 * @class
 */
class DescribeServerlessDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query criteria. Query using one or more filter criteria. Filter criteria type (specified by the name field) currently supported include: 

- db-instance-id: filter by instance ID (in string format)
- db-instance-name: filter by instance name (in string format)
- db-tag-key: filter by instance tag (in string format)

The value field specifies the specific instance ID/instance name/instance tag-key to filter under this type of filter criteria.
         * @type {Array.<Filter> || null}
         */
        this.Filter = null;

        /**
         * The number of queries
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The offset value
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting metric. Currently, only "CreateTime" (instance creation time) is supported.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Ascending and descending are supported.
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new Filter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeDBBackups response structure.
 * @class
 */
class DescribeDBBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of backup files in the returned backup list
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Backup list
         * @type {Array.<DBBackup> || null}
         */
        this.BackupList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new DBBackup();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeSlowQueryList response structure.
 * @class
 */
class DescribeSlowQueryListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of slow logs found, with a maximum of 10,000 entries.	
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Segmented analysis results of the time consumption of the slow logs found.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DurationAnalysis> || null}
         */
        this.DurationAnalysis = null;

        /**
         * Collection of detailed information on slow logs found.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RawSlowQuery> || null}
         */
        this.RawSlowQueryList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DurationAnalysis) {
            this.DurationAnalysis = new Array();
            for (let z in params.DurationAnalysis) {
                let obj = new DurationAnalysis();
                obj.deserialize(params.DurationAnalysis[z]);
                this.DurationAnalysis.push(obj);
            }
        }

        if (params.RawSlowQueryList) {
            this.RawSlowQueryList = new Array();
            for (let z in params.RawSlowQueryList) {
                let obj = new RawSlowQuery();
                obj.deserialize(params.RawSlowQueryList[z]);
                this.RawSlowQueryList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PostgreSQL for Serverless instance description
 * @class
 */
class ServerlessDBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, which is the unique identifier
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * Instance status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBInstanceStatus = null;

        /**
         * Region
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Availability zone
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Project ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Character set
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * Database version
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Creation time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance network information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServerlessDBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * Instance account information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServerlessDBAccount> || null}
         */
        this.DBAccountSet = null;

        /**
         * Information of the databases in an instance
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DBDatabaseList = null;

        /**
         * The array of tags bound to an instance
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * Database kernel version
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * Database major version number
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new ServerlessDBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }

        if (params.DBAccountSet) {
            this.DBAccountSet = new Array();
            for (let z in params.DBAccountSet) {
                let obj = new ServerlessDBAccount();
                obj.deserialize(params.DBAccountSet[z]);
                this.DBAccountSet.push(obj);
            }
        }
        this.DBDatabaseList = 'DBDatabaseList' in params ? params.DBDatabaseList : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;

    }
}

/**
 * CreateReadOnlyGroup request structure.
 * @class
 */
class CreateReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary instance ID
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * RO group name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

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

        /**
         * Whether to remove a read-only replica from an RO group if the delay between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLagEliminate = null;

        /**
         * Whether to remove a read-only replica from an RO group if the sync log size difference between the read-only replica and the primary instance exceeds the threshold. Valid values: `0` (no), `1` (yes).
         * @type {number || null}
         */
        this.ReplayLatencyEliminate = null;

        /**
         * Delay threshold in ms
         * @type {number || null}
         */
        this.MaxReplayLag = null;

        /**
         * Delayed log size threshold in MB
         * @type {number || null}
         */
        this.MaxReplayLatency = null;

        /**
         * The minimum number of read-only replicas that must be retained in an RO group
         * @type {number || null}
         */
        this.MinDelayEliminateReserve = null;

        /**
         * Security group ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ReplayLagEliminate = 'ReplayLagEliminate' in params ? params.ReplayLagEliminate : null;
        this.ReplayLatencyEliminate = 'ReplayLatencyEliminate' in params ? params.ReplayLatencyEliminate : null;
        this.MaxReplayLag = 'MaxReplayLag' in params ? params.MaxReplayLag : null;
        this.MaxReplayLatency = 'MaxReplayLatency' in params ? params.MaxReplayLatency : null;
        this.MinDelayEliminateReserve = 'MinDelayEliminateReserve' in params ? params.MinDelayEliminateReserve : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * ModifyDBInstanceSSLConfig response structure.
 * @class
 */
class ModifyDBInstanceSSLConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * DescribeParamsEvent response structure.
 * @class
 */
class DescribeParamsEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of modified parameters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of parameter modification events
         * @type {Array.<EventItem> || null}
         */
        this.EventItems = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.EventItems) {
            this.EventItems = new Array();
            for (let z in params.EventItems) {
                let obj = new EventItem();
                obj.deserialize(params.EventItems[z]);
                this.EventItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups request structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of security groups to be associated with the instance or RO groups.
Information of security groups can be obtained from the `sgld` field in the returned value of the [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808?from_cn_redirect=1) API.

         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdSet = null;

        /**
         * Instance ID. Either this parameter or `ReadOnlyGroupId` must be passed in. If both parameters are passed in, `ReadOnlyGroupId` will be ignored.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * RO group ID. Either this parameter or `DBInstanceId` must be passed in. To modify  the security groups associated with the RO groups, only pass in `ReadOnlyGroupId`.
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIdSet = 'SecurityGroupIdSet' in params ? params.SecurityGroupIdSet : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeDedicatedClusters request structure.
 * @class
 */
class DescribeDedicatedClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query using one or more filter criteria. filter criteria currently supported include:.
dedicated-cluster-id: filters by dedicated cluster id. string type.
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
 * CloseServerlessDBExtranetAccess response structure.
 * @class
 */
class CloseServerlessDBExtranetAccessResponse extends  AbstractModel {
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
 * Modification details of one parameter
 * @class
 */
class EventItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Number of modified events.
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * Last modification time.
         * @type {Array.<EventInfo> || null}
         */
        this.EventDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;

        if (params.EventDetail) {
            this.EventDetail = new Array();
            for (let z in params.EventDetail) {
                let obj = new EventInfo();
                obj.deserialize(params.EventDetail[z]);
                this.EventDetail.push(obj);
            }
        }

    }
}

/**
 * RestartDBInstance request structure.
 * @class
 */
class RestartDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-6r233v55
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * DescribeDBInstanceHAConfig request structure.
 * @class
 */
class DescribeDBInstanceHAConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * CreateParameterTemplate response structure.
 * @class
 */
class CreateParameterTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID, which uniquely identifies a parameter template.
         * @type {string || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Parameter details
 * @class
 */
class ParamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Parameter name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter value type: integer, real, bool, enum, mutil_enum.
When the parameter type is integer or real (floating-point), the value range is determined based on the Max and Min of the return value. 
When the parameter type is boolean, the valid values are true or false. 
When the parameter type is enum (enumeration type) or mutil_enum (multi-enum type), the valid values are determined by EnumValue in the return value.
         * @type {string || null}
         */
        this.ParamValueType = null;

        /**
         * Parameter value unit. returns null if the parameter has no units.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Default parameter value. returns in string form.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Specifies the current value in string form.
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Specifies the numerical type (integer, real) parameter and its lower bound.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * Value range of the enum parameter
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Numerical type (integer, real) parameter specifies the upper bound.
         * @type {number || null}
         */
        this.Min = null;

        /**
         * Chinese description.
         * @type {string || null}
         */
        this.ParamDescriptionCH = null;

        /**
         * Specifies the english description of the parameter.
         * @type {string || null}
         */
        this.ParamDescriptionEN = null;

        /**
         * Specifies whether a restart is required for parameter modification (true indicates required, false indicates not required).
         * @type {boolean || null}
         */
        this.NeedReboot = null;

        /**
         * Parameter chinese category.
         * @type {string || null}
         */
        this.ClassificationCN = null;

        /**
         * Parameter english category.
         * @type {string || null}
         */
        this.ClassificationEN = null;

        /**
         * Specifies whether it is related to the specification (true for related, false for unrelated).
         * @type {boolean || null}
         */
        this.SpecRelated = null;

        /**
         * Indicates whether it is a key parameter (true means it is a key parameter, modification requires special attention and may affect instance performance).
         * @type {boolean || null}
         */
        this.Advanced = null;

        /**
         * Specifies the last modified time.
         * @type {string || null}
         */
        this.LastModifyTime = null;

        /**
         * Parameter primary-secondary constraints. `0`: no constraint between primary and standby. `1`: standby parameter value > primary machine parameter value. `2`: primary parameter value must be greater than that of the standby machine.
         * @type {number || null}
         */
        this.StandbyRelated = null;

        /**
         * Parameter version association information, containing detailed parameter information for the respective kernel version
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ParamVersionRelation> || null}
         */
        this.VersionRelationSet = null;

        /**
         * Parameter specification association information, containing detailed parameter information for the respective specification
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ParamSpecRelation> || null}
         */
        this.SpecRelationSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParamValueType = 'ParamValueType' in params ? params.ParamValueType : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.ParamDescriptionCH = 'ParamDescriptionCH' in params ? params.ParamDescriptionCH : null;
        this.ParamDescriptionEN = 'ParamDescriptionEN' in params ? params.ParamDescriptionEN : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.ClassificationCN = 'ClassificationCN' in params ? params.ClassificationCN : null;
        this.ClassificationEN = 'ClassificationEN' in params ? params.ClassificationEN : null;
        this.SpecRelated = 'SpecRelated' in params ? params.SpecRelated : null;
        this.Advanced = 'Advanced' in params ? params.Advanced : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.StandbyRelated = 'StandbyRelated' in params ? params.StandbyRelated : null;

        if (params.VersionRelationSet) {
            this.VersionRelationSet = new Array();
            for (let z in params.VersionRelationSet) {
                let obj = new ParamVersionRelation();
                obj.deserialize(params.VersionRelationSet[z]);
                this.VersionRelationSet.push(obj);
            }
        }

        if (params.SpecRelationSet) {
            this.SpecRelationSet = new Array();
            for (let z in params.SpecRelationSet) {
                let obj = new ParamSpecRelation();
                obj.deserialize(params.SpecRelationSet[z]);
                this.SpecRelationSet.push(obj);
            }
        }

    }
}

/**
 * DescribeLogBackups response structure.
 * @class
 */
class DescribeLogBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of queried log backups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of log backup details
         * @type {Array.<LogBackup> || null}
         */
        this.LogBackupSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.LogBackupSet) {
            this.LogBackupSet = new Array();
            for (let z in params.LogBackupSet) {
                let obj = new LogBackup();
                obj.deserialize(params.LogBackupSet[z]);
                this.LogBackupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details returned by the `DescribeSlowQueryAnalysis` API
 * @class
 */
class Detail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total execution time (in ms) of all slow query statements during the specified period of time
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * The total number of all slow query statements during the specified period of time
         * @type {number || null}
         */
        this.TotalCallNum = null;

        /**
         * The statistical analysis list of slow queries
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AnalysisItems> || null}
         */
        this.AnalysisItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.TotalCallNum = 'TotalCallNum' in params ? params.TotalCallNum : null;

        if (params.AnalysisItems) {
            this.AnalysisItems = new Array();
            for (let z in params.AnalysisItems) {
                let obj = new AnalysisItems();
                obj.deserialize(params.AnalysisItems[z]);
                this.AnalysisItems.push(obj);
            }
        }

    }
}

/**
 * Security group information
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Inbound rule
         * @type {Array.<PolicyRule> || null}
         */
        this.Inbound = null;

        /**
         * Outbound rule
         * @type {Array.<PolicyRule> || null}
         */
        this.Outbound = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * Security group remarks
         * @type {string || null}
         */
        this.SecurityGroupDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new PolicyRule();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new PolicyRule();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupDescription = 'SecurityGroupDescription' in params ? params.SecurityGroupDescription : null;

    }
}

/**
 * IsolateDBInstances response structure.
 * @class
 */
class IsolateDBInstancesResponse extends  AbstractModel {
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
 * OpenDBExtranetAccess response structure.
 * @class
 */
class OpenDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Process ID. FlowId is equivalent to TaskId.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Task ID.
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance request structure.
 * @class
 */
class InquiryPriceUpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance disk size in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Instance memory size in GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance ID in the format of postgres-hez4fh0v
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance billing type. Valid value: `POSTPAID_BY_HOUR` (pay-as-you-go hourly)
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Instance CPU size, unit: Core
         * @type {number || null}
         */
        this.Cpu = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * DescribeDBInstanceHAConfig response structure.
 * @class
 */
class DescribeDBInstanceHAConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary-standby sync mode. Valid values:
<li>`Semi-sync`
<li>`Async`
         * @type {string || null}
         */
        this.SyncMode = null;

        /**
         * Maximum data lag for high-availability standby server. The standby node can be promoted to the primary node when its data lag and the delay time are both less than the value of `MaxStandbyLatency` and `MaxStandbyLag` respectively.
<li>Unit: byte
<li>Value range: 1073741824-322122547200
         * @type {number || null}
         */
        this.MaxStandbyLatency = null;

        /**
         * The maximum delay for high-availability standby server The standby node can be promoted to the primary node when its data lag and the delay time are both less than or equals to the value of `MaxStandbyLatency` and `MaxStandbyLag` respectively.
<li>Unit: s
<li>Value range: 5-10
         * @type {number || null}
         */
        this.MaxStandbyLag = null;

        /**
         * Maximum data sync lag for standby server. If data lag of the standby node and the delay time are both less than or equals to the values of `MaxSyncStandbyLatency` and `MaxSyncStandbyLag` respectively, the standby server adopts semi-sync replication; if not, it adopts async replication.
This value is only valid for the instance with `SyncMode` set to `Semi-sync`.
This field returns null for async instance
and semi-sync (non-downgradable to async) instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxSyncStandbyLatency = null;

        /**
         * Maximum sync delay time for standby server. If the delay time for standby server and the data lag are both less than or equals to the values of `MaxSyncStandbyLag` and `MaxSyncStandbyLatency` respectively, the standby server adopts sync replication mode; if not, it adopts async replication.
This value is only valid for the instance with `SyncMode` set to `Semi-sync`.
This field will not return for async instance
and semi-sync (non-downgradable to async) instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxSyncStandbyLag = null;

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
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;
        this.MaxStandbyLatency = 'MaxStandbyLatency' in params ? params.MaxStandbyLatency : null;
        this.MaxStandbyLag = 'MaxStandbyLag' in params ? params.MaxStandbyLag : null;
        this.MaxSyncStandbyLatency = 'MaxSyncStandbyLatency' in params ? params.MaxSyncStandbyLatency : null;
        this.MaxSyncStandbyLag = 'MaxSyncStandbyLag' in params ? params.MaxSyncStandbyLag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabaseObjects response structure.
 * @class
 */
class DescribeDatabaseObjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query object list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ObjectSet = null;

        /**
         * Specifies the total number of objects.
         * @type {number || null}
         */
        this.TotalCount = null;

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
        this.ObjectSet = 'ObjectSet' in params ? params.ObjectSet : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateDBInstances request structure.
 * @class
 */
class IsolateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs. Note that currently you cannot isolate multiple instances at the same time. Only one instance ID can be passed in here.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;

    }
}

/**
 * ModifyDBInstanceName request structure.
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database instance ID in the format of postgres-6fego161
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name, which can contain up to 60 letters, digits, hyphens, and symbols (_-). If this parameter is not specified, "Unnamed" will be displayed by default.

         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DescribeDBInstanceSSLConfig response structure.
 * @class
 */
class DescribeDBInstanceSSLConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true represents enabled. false represents not enabled.
         * @type {boolean || null}
         */
        this.SSLEnabled = null;

        /**
         * Certificate download url for the cloud root certificate.
         * @type {string || null}
         */
        this.CAUrl = null;

        /**
         * Specifies the intranet or public network connection address in the server certificate.
         * @type {string || null}
         */
        this.ConnectAddress = null;

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
        this.SSLEnabled = 'SSLEnabled' in params ? params.SSLEnabled : null;
        this.CAUrl = 'CAUrl' in params ? params.CAUrl : null;
        this.ConnectAddress = 'ConnectAddress' in params ? params.ConnectAddress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyParameterTemplate request structure.
 * @class
 */
class ModifyParameterTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the parameter template ID, which uniquely identifies the parameter template and cannot be modified. it can be obtained through the api [DescribeParameterTemplates](https://www.tencentcloud.com/document/product/409/52651?lang=en).
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Parameter template name, which can contain 1-60 letters, digits, and symbols (-_./()[]()+=:@). If this field is empty, the original parameter template name will be used.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Parameter template description, which can contain 1-60 letters, digits, and symbols (-_./()[]()+=:@). If this parameter is not passed in, the original parameter template description will be used.
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * The set of parameters to be modified or added. A parameter cannot be put to `ModifyParamEntrySet` and `DeleteParamSet` at the same time, that is, it cannot be modified/added and deleted at the same time.
         * @type {Array.<ParamEntry> || null}
         */
        this.ModifyParamEntrySet = null;

        /**
         * The set of parameters to be deleted in the template. A parameter cannot be put to `ModifyParamEntrySet` and `DeleteParamSet` at the same time, that is, it cannot be modified/added and deleted at the same time.
         * @type {Array.<string> || null}
         */
        this.DeleteParamSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;

        if (params.ModifyParamEntrySet) {
            this.ModifyParamEntrySet = new Array();
            for (let z in params.ModifyParamEntrySet) {
                let obj = new ParamEntry();
                obj.deserialize(params.ModifyParamEntrySet[z]);
                this.ModifyParamEntrySet.push(obj);
            }
        }
        this.DeleteParamSet = 'DeleteParamSet' in params ? params.DeleteParamSet : null;

    }
}

/**
 * DeleteAccount request structure.
 * @class
 */
class DeleteAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/api/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Account name to be deleted. obtain through the api [DescribeAccounts](https://www.tencentcloud.com/document/api/409/18109?from_cn_redirect=1).
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * UpgradeDBInstanceKernelVersion response structure.
 * @class
 */
class UpgradeDBInstanceKernelVersionResponse extends  AbstractModel {
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
 * InquiryPriceRenewDBInstance response structure.
 * @class
 */
class InquiryPriceRenewDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Published price in cents. For example, 24650 indicates 246.5 USD.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted total amount. For example, 24650 indicates 246.5 USD.
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Currency, such as USD.
         * @type {string || null}
         */
        this.Currency = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSlowQueryAnalysis request structure.
 * @class
 */
class DescribeSlowQueryAnalysisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time, in the format of 2018-01-01 00:00:00. The log is retained for seven days by default, so the start time must fall within the retention period.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, in the format of 2018-01-01 00:00:00.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Sorting field, with valid values `[CallNum, CostTime, AvgCostTime]`. The default value is `CallNum`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting method, including ascending: `asc` and descending: `desc`. The default value is `desc`.
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Number of results returned per page, with a value range of 1-100. The default value is `50`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, which starts from 0. The default value is `0`.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Error log details
 * @class
 */
class ErrLogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.Database = null;

        /**
         * Error occurrence time
         * @type {string || null}
         */
        this.ErrTime = null;

        /**
         * Error message
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.ErrTime = 'ErrTime' in params ? params.ErrTime : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * DescribeServerlessDBInstances response structure.
 * @class
 */
class DescribeServerlessDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of query results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Query results
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ServerlessDBInstance> || null}
         */
        this.DBInstanceSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DBInstanceSet) {
            this.DBInstanceSet = new Array();
            for (let z in params.DBInstanceSet) {
                let obj = new ServerlessDBInstance();
                obj.deserialize(params.DBInstanceSet[z]);
                this.DBInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupOverview response structure.
 * @class
 */
class DescribeBackupOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total free space size in bytes
         * @type {number || null}
         */
        this.TotalFreeSize = null;

        /**
         * Used free space size in bytes
         * @type {number || null}
         */
        this.UsedFreeSize = null;

        /**
         * Used paid space size in bytes
         * @type {number || null}
         */
        this.UsedBillingSize = null;

        /**
         * Number of log backups
         * @type {number || null}
         */
        this.LogBackupCount = null;

        /**
         * Log backup size in bytes
         * @type {number || null}
         */
        this.LogBackupSize = null;

        /**
         * Number of manually created full backups
         * @type {number || null}
         */
        this.ManualBaseBackupCount = null;

        /**
         * Size of manually created full backups in bytes
         * @type {number || null}
         */
        this.ManualBaseBackupSize = null;

        /**
         * Number of automatically created full backups
         * @type {number || null}
         */
        this.AutoBaseBackupCount = null;

        /**
         * Size of automatically created full backups in bytes
         * @type {number || null}
         */
        this.AutoBaseBackupSize = null;

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
        this.TotalFreeSize = 'TotalFreeSize' in params ? params.TotalFreeSize : null;
        this.UsedFreeSize = 'UsedFreeSize' in params ? params.UsedFreeSize : null;
        this.UsedBillingSize = 'UsedBillingSize' in params ? params.UsedBillingSize : null;
        this.LogBackupCount = 'LogBackupCount' in params ? params.LogBackupCount : null;
        this.LogBackupSize = 'LogBackupSize' in params ? params.LogBackupSize : null;
        this.ManualBaseBackupCount = 'ManualBaseBackupCount' in params ? params.ManualBaseBackupCount : null;
        this.ManualBaseBackupSize = 'ManualBaseBackupSize' in params ? params.ManualBaseBackupSize : null;
        this.AutoBaseBackupCount = 'AutoBaseBackupCount' in params ? params.AutoBaseBackupCount : null;
        this.AutoBaseBackupSize = 'AutoBaseBackupSize' in params ? params.AutoBaseBackupSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeParameterTemplates request structure.
 * @class
 */
class DescribeParameterTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions. Valid values: `TemplateName`, `TemplateId`, `DBMajorVersion`, `DBEngine`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The maximum number of results returned per page. Value range: 0-100. Default: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Sorting metric. Valid values: `CreateTime`, `TemplateName`, `DBMajorVersion`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `asc` (ascending order),`desc` (descending order).
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

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
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * InitDBInstances request structure.
 * @class
 */
class InitDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID set.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * Instance admin account username.
         * @type {string || null}
         */
        this.AdminName = null;

        /**
         * Password corresponding to instance root account username.
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * Instance character set. Valid values: UTF8, LATIN1.
         * @type {string || null}
         */
        this.Charset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.AdminName = 'AdminName' in params ? params.AdminName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
        this.Charset = 'Charset' in params ? params.Charset : null;

    }
}

/**
 * DescribeClasses response structure.
 * @class
 */
class DescribeClassesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of database specifications
         * @type {Array.<ClassInfo> || null}
         */
        this.ClassInfoSet = null;

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

        if (params.ClassInfoSet) {
            this.ClassInfoSet = new Array();
            for (let z in params.ClassInfoSet) {
                let obj = new ClassInfo();
                obj.deserialize(params.ClassInfoSet[z]);
                this.ClassInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDBInstanceNetworkAccess request structure.
 * @class
 */
class DeleteDBInstanceNetworkAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-6bwgamo3.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Unified VPC ID. If you want to delete the classic network, set the parameter to `0`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID. If you want to delete the classic network, set the parameter to `0`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Target VIP.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * ModifyDBInstanceDeployment response structure.
 * @class
 */
class ModifyDBInstanceDeploymentResponse extends  AbstractModel {
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
 * UnlockAccount request structure.
 * @class
 */
class UnlockAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.		
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Account name.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * Instance details
 * @class
 */
class DBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Region of the instance, for example: ap-guangzhou, corresponds to the region field in RegionSet.</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>Availability zone to which the instance belongs, for example: ap-guangzhou-3, corresponds to the Zone field in ZoneSet.</p>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * <p>VPC ID, such as vpc-e6w23k31. A valid VPC ID can be obtained by logging in to the console to query or by calling the API <a href="https://www.tencentcloud.com/document/api/215/15778?from_cn_redirect=1">DescribeVpcs</a> and acquiring the unVpcId field in API return.</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>VPC subnet ID, such as subnet-51lcif9y. An effective VPC subnet ID can be obtained by logging in to the console to query. You can also call API <a href="https://www.tencentcloud.com/document/api/215/15784?from_cn_redirect=1">DescribeSubnets</a> and get it from the unSubnetId field in API return.</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Instance ID.</p>
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * <p>Instance name.</p>
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * <p>Instance status, including: `applying` (applying), `init` (to be initialized), `initing` (initializing), `running` (running), `limited run` (restricted operation), `isolating` (isolating), `isolated` (isolated), `disisolating` (de-isolating), `recycling` (recycling), `recycled` (recycled), `job running` (task executing), `offline` (offline), `migrating` (migrating), `expanding` (scaling out), `waitSwitch` (waiting to switch), `switching` (switching), `readonly` (readonly), `restarting` (restarting), `network changing` (network modification in progress), `upgrading` (kernel version upgrading), `audit-switching` (audit status changing), `primary-switching` (primary-secondary switching), `offlining` (offline), `deployment changing` (modify AZ), `cloning` (recovering data), `parameter modifying` (parameter modification in progress), `log-switching` (log status change), `restoring` (recovering), and `expanding` (scaling out)</p>
         * @type {string || null}
         */
        this.DBInstanceStatus = null;

        /**
         * <p>Memory size allocated to the instance, measurement unit: GB</p>
         * @type {number || null}
         */
        this.DBInstanceMemory = null;

        /**
         * <p>Storage space size allocated to the instance, measurement unit: GB</p>
         * @type {number || null}
         */
        this.DBInstanceStorage = null;

        /**
         * <p>Number of CPUs allocated to the instance, unit: piece</p>
         * @type {number || null}
         */
        this.DBInstanceCpu = null;

        /**
         * <p>Purchasable specification ID.</p>
         * @type {string || null}
         */
        this.DBInstanceClass = null;

        /**
         * <p>PostgreSQL major version number. Version information can be obtained from <a href="https://www.tencentcloud.com/document/api/409/89018?from_cn_redirect=1">DescribeDBVersions</a>. Currently supports major versions 10, 11, 12, 13, 14, and 15.</p>
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * <p>PostgreSQL community major version + minor version number, such as 12.4. Version information can be obtained from <a href="https://www.tencentcloud.com/document/api/409/89018?from_cn_redirect=1">DescribeDBVersions</a>.</p>
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * <p>PostgreSQL Kernel Version, for example v12.7_r1.8. Version information can be obtained from <a href="https://www.tencentcloud.com/document/api/409/89018?from_cn_redirect=1">DescribeDBVersions</a>.</p>
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * <p>Instance types:</p><li>primary: Primary instance</li><li>readonly: Read-only instance</li><li>guard: Disaster recovery instance</li><li>temp: Temporary instance</li>
         * @type {string || null}
         */
        this.DBInstanceType = null;

        /**
         * <p>Instance version currently only supports standard (dual-server high-availability edition, one master and one slave).</p>
         * @type {string || null}
         */
        this.DBInstanceVersion = null;

        /**
         * <p>Instance character set, which currently supports only:</p><li>UTF8</li><li>LATIN1</li>
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * <p>Instance creation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>The time when the instance executed the last update.</p>
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * <p>Instance expiration time.</p>
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * <p>Instance isolation time.</p>
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * <p>Billing mode:</p><li>prepaid: Yearly/monthly subscription, prepayment</li><li>postpaid: Pay-as-you-go, postpaid</li>
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * <p>Auto-renewal or not:</p><li>0: Manual renewal</li><li>1: Auto renewal</li>Default value: 0
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * <p>Instance network connection information.</p>
         * @type {Array.<DBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * <p>Machine type.</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>User's app id.</p>
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * <p>Uid of the instance.</p>
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * <p>Project ID.</p>
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * <p>Tag information associated with the instance.</p>
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * <p>Primary instance information. Returned only when the instance is a read-only instance.</p>
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * <p>Number of read-only instances.</p>
         * @type {number || null}
         */
        this.ReadOnlyInstanceNum = null;

        /**
         * <p>State of the read-only instance in the read-only group.</p>
         * @type {string || null}
         */
        this.StatusInReadonlyGroup = null;

        /**
         * <p>Offline time.</p>
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * <p>Instance node information.</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * <p>Whether the instance supports TDE data encryption:</p><li>0: Not supported</li><li>1: Supported</li>Default value: 0. For TDE data encryption, see [Overview of Data Transparent Encryption](https://www.tencentcloud.com/document/product/409/71748?from_cn_redirect=1).
         * @type {number || null}
         */
        this.IsSupportTDE = null;

        /**
         * <p>Database engine, support:</p><li>`postgresql`: TencentDB for PostgreSQL</li><li>`mssql_compatible`: MSSQL compatible - TencentDB for PostgreSQL</li>Default value: postgresql
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * <p>Configuration information for the database engine. The configuration format is as follows:<br>{&quot;$key1&quot;:&quot;$value1&quot;, &quot;$key2&quot;:&quot;$value2&quot;}<br>Supported engines:<br>mssql_compatible engine:</p><li>migrationMode: Database schema, optional parameter. Valid values: single-db (single-database mode), multi-db (multi-database mode). Default is single-db.</li><li>defaultLocale: Sorting area rule, optional parameter, cannot be modified after initialization. Default is en_US. Valid values include: "af_ZA", "sq_AL", "ar_DZ", "ar_BH", "ar_EG", "ar_IQ", "ar_JO", "ar_KW", "ar_LB", "ar_LY", "ar_MA", "ar_OM", "ar_QA", "ar_SA", "ar_SY", "ar_TN", "ar_AE", "ar_YE", "hy_AM", "az_Cyrl_AZ", "az_Latn_AZ", "eu_ES", "be_BY", "bg_BG", "ca_ES", "zh_HK", "zh_MO", "zh_CN", "zh_SG", "zh_TW", "hr_HR", "cs_CZ", "da_DK", "nl_BE", "nl_NL", "en_AU", "en_BZ", "en_CA", "en_IE", "en_JM", "en_NZ", "en_PH", "en_ZA", "en_TT", "en_GB", "en_US", "en_ZW", "et_EE", "fo_FO", "fa_IR", "fi_FI", "fr_BE", "fr_CA", "fr_FR", "fr_LU", "fr_MC", "fr_CH", "mk_MK", "ka_GE", "de_AT", "de_DE", "de_LI", "de_LU", "de_CH", "el_GR", "gu_IN", "he_IL", "hi_IN", "hu_HU", "is_IS", "id_ID", "it_IT", "it_CH", "ja_JP", "kn_IN", "kok_IN", "ko_KR", "ky_KG", "lv_LV", "lt_LT", "ms_BN", "ms_MY", "mr_IN", "mn_MN", "nb_NO", "nn_NO", "pl_PL", "pt_BR", "pt_PT", "pa_IN", "ro_RO", "ru_RU", "sa_IN", "sr_Cyrl_RS", "sr_Latn_RS", "sk_SK", "sl_SI", "es_AR", "es_BO", "es_CL", "es_CO", "es_CR", "es_DO", "es_EC", "es_SV", "es_GT", "es_HN", "es_MX", "es_NI", "es_PA", "es_PY","es_PE", "es_PR", "es_ES", "es_TRADITIONAL", "es_UY", "es_VE", "sw_KE", "sv_FI", "sv_SE", "tt_RU", "te_IN", "th_TH", "tr_TR", "uk_UA", "ur_IN", "ur_PK", "uz_Cyrl_UZ", "uz_Latn_UZ", "vi_VN".</li><li>serverCollationName: Collation name, optional parameter, cannot be modified after initialization. Default is sql_latin1_general_cp1_ci_as. Valid values include: "bbf_unicode_general_ci_as", "bbf_unicode_cp1_ci_as", "bbf_unicode_CP1250_ci_as", "bbf_unicode_CP1251_ci_as", "bbf_unicode_cp1253_ci_as", "bbf_unicode_cp1254_ci_as", "bbf_unicode_cp1255_ci_as", "bbf_unicode_cp1256_ci_as", "bbf_unicode_cp1257_ci_as", "bbf_unicode_cp1258_ci_as", "bbf_unicode_cp874_ci_as", "sql_latin1_general_cp1250_ci_as", "sql_latin1_general_cp1251_ci_as", "sql_latin1_general_cp1_ci_as", "sql_latin1_general_cp1253_ci_as", "sql_latin1_general_cp1254_ci_as", "sql_latin1_general_cp1255_ci_as","sql_latin1_general_cp1256_ci_as", "sql_latin1_general_cp1257_ci_as", "sql_latin1_general_cp1258_ci_as", "chinese_prc_ci_as", "cyrillic_general_ci_as", "finnish_swedish_ci_as", "french_ci_as", "japanese_ci_as", "korean_wansung_ci_as", "latin1_general_ci_as", "modern_spanish_ci_as", "polish_ci_as", "thai_ci_as", "traditional_spanish_ci_as", "turkish_ci_as", "ukrainian_ci_as", "vietnamese_ci_as".</li>
         * @type {string || null}
         */
        this.DBEngineConfig = null;

        /**
         * <p>Instance network information list (deprecated)</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<NetworkAccess> || null}
         */
        this.NetworkAccessList = null;

        /**
         * <p>Whether the instance supports Ipv6:</p><li>0: No</li><li>1: Yes</li>Default value: 0
         * @type {number || null}
         */
        this.SupportIpv6 = null;

        /**
         * <p>Number of cpu cores that have been elastically scaled out for the instance</p>
         * @type {number || null}
         */
        this.ExpandedCpu = null;

        /**
         * <p>Whether to enable deletion protection for the instance, values as follows:</p><ul><li>true: enable deletion protection</li><li>false: disable deletion protection</li></ul>
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * <p>Instance storage type. Available values: PHYSICAL_LOCAL_SSD: LOCAL SSD hard disk of PHYSICAL machine; CLOUD_PREMIUM: high-performance CLOUD block storage; CLOUD_SSD: SSD CLOUD disk; CLOUD_HSSD: enhanced SSD CLOUD disk.</p>
         * @type {string || null}
         */
        this.DBInstanceStorageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.DBInstanceMemory = 'DBInstanceMemory' in params ? params.DBInstanceMemory : null;
        this.DBInstanceStorage = 'DBInstanceStorage' in params ? params.DBInstanceStorage : null;
        this.DBInstanceCpu = 'DBInstanceCpu' in params ? params.DBInstanceCpu : null;
        this.DBInstanceClass = 'DBInstanceClass' in params ? params.DBInstanceClass : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;
        this.DBInstanceType = 'DBInstanceType' in params ? params.DBInstanceType : null;
        this.DBInstanceVersion = 'DBInstanceVersion' in params ? params.DBInstanceVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new DBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.ReadOnlyInstanceNum = 'ReadOnlyInstanceNum' in params ? params.ReadOnlyInstanceNum : null;
        this.StatusInReadonlyGroup = 'StatusInReadonlyGroup' in params ? params.StatusInReadonlyGroup : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;

        if (params.DBNodeSet) {
            this.DBNodeSet = new Array();
            for (let z in params.DBNodeSet) {
                let obj = new DBNode();
                obj.deserialize(params.DBNodeSet[z]);
                this.DBNodeSet.push(obj);
            }
        }
        this.IsSupportTDE = 'IsSupportTDE' in params ? params.IsSupportTDE : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;
        this.DBEngineConfig = 'DBEngineConfig' in params ? params.DBEngineConfig : null;

        if (params.NetworkAccessList) {
            this.NetworkAccessList = new Array();
            for (let z in params.NetworkAccessList) {
                let obj = new NetworkAccess();
                obj.deserialize(params.NetworkAccessList[z]);
                this.NetworkAccessList.push(obj);
            }
        }
        this.SupportIpv6 = 'SupportIpv6' in params ? params.SupportIpv6 : null;
        this.ExpandedCpu = 'ExpandedCpu' in params ? params.ExpandedCpu : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.DBInstanceStorageType = 'DBInstanceStorageType' in params ? params.DBInstanceStorageType : null;

    }
}

/**
 * DeleteParameterTemplate response structure.
 * @class
 */
class DeleteParameterTemplateResponse extends  AbstractModel {
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
 * ModifyReadOnlyDBInstanceWeight request structure.
 * @class
 */
class ModifyReadOnlyDBInstanceWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * ReadOnlyGroupId. specifies the read-only group ID, which can be obtained through the api [DescribeReadOnlyGroups](https://www.tencentcloud.com/document/product/409/39725?lang=en).
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * Specifies the traffic weight of the read-only instance in the read-only group. valid values: 1-50.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * ModifyAccountPrivileges response structure.
 * @class
 */
class ModifyAccountPrivilegesResponse extends  AbstractModel {
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
 * Describes the database detailed information, including owner and character encoding.
 * @class
 */
class Database extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Specifies the database owner.
         * @type {string || null}
         */
        this.DatabaseOwner = null;

        /**
         * Specifies the database character encoding.
         * @type {string || null}
         */
        this.Encoding = null;

        /**
         * Specifies the database sorting rule.
         * @type {string || null}
         */
        this.Collate = null;

        /**
         * Specifies the character category of the database.
         * @type {string || null}
         */
        this.Ctype = null;

        /**
         * Specifies whether the database allows connections.
         * @type {boolean || null}
         */
        this.AllowConn = null;

        /**
         * Maximum number of connections for the database. -1 indicates unlimited.
         * @type {number || null}
         */
        this.ConnLimit = null;

        /**
         * Specifies the database permission list.
         * @type {string || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.DatabaseOwner = 'DatabaseOwner' in params ? params.DatabaseOwner : null;
        this.Encoding = 'Encoding' in params ? params.Encoding : null;
        this.Collate = 'Collate' in params ? params.Collate : null;
        this.Ctype = 'Ctype' in params ? params.Ctype : null;
        this.AllowConn = 'AllowConn' in params ? params.AllowConn : null;
        this.ConnLimit = 'ConnLimit' in params ? params.ConnLimit : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * DeleteReadOnlyGroup request structure.
 * @class
 */
class DeleteReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the RO group to be deleted
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeDBBackups request structure.
 * @class
 */
class DescribeDBBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Backup mode (1: full). Currently, only full backup is supported. The value is 1.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Query start time in the format of 2018-06-10 17:06:38, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of entries to be returned per page for backup list. Default value: 20. Minimum value: 1. Maximum value: 100. (If this parameter is left empty or 0, the default value will be used)
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0. Default value: 0.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * RestartDBInstance response structure.
 * @class
 */
class RestartDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async flow ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Key-value pair filter for conditional filtering queries, such as filter ID and name
* If more than one filter exists, the logical relationship between these filters is `AND`.
* If multiple values exist in one filter, the logical relationship between these values is `OR`.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter name.
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
 * DescribeReadOnlyGroups request structure.
 * @class
 */
class DescribeReadOnlyGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter instances by using one or more filters. Valid values:  `db-master-instance-id` (filter by the primary instance ID in string), `read-only-group-id` (filter by the read-only group ID in string),
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The number of results per page. Default value: 10.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Specify which page is displayed. Default value: 1 (the first page).
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Sorting criterion. Valid values: `ROGroupId`, `CreateTime`, `Name`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `desc`, `asc`.
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeBaseBackups response structure.
 * @class
 */
class DescribeBaseBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of queried data backups.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Detailed data backup information list.
         * @type {Array.<BaseBackup> || null}
         */
        this.BaseBackupSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.BaseBackupSet) {
            this.BaseBackupSet = new Array();
            for (let z in params.BaseBackupSet) {
                let obj = new BaseBackup();
                obj.deserialize(params.BaseBackupSet[z]);
                this.BaseBackupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceParameters response structure.
 * @class
 */
class ModifyDBInstanceParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
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
 * DescribeDBVersions response structure.
 * @class
 */
class DescribeDBVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of database versions
         * @type {Array.<Version> || null}
         */
        this.VersionSet = null;

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

        if (params.VersionSet) {
            this.VersionSet = new Array();
            for (let z in params.VersionSet) {
                let obj = new Version();
                obj.deserialize(params.VersionSet[z]);
                this.VersionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSSLConfig request structure.
 * @class
 */
class ModifyDBInstanceSSLConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Turn on or off SSL. true - turn on; false - turn off.
         * @type {boolean || null}
         */
        this.SSLEnabled = null;

        /**
         * The unique connection address protected by an SSL certificate. for a primary instance, it can be set to private and public IP addresses. for a read-only instance, it can be set to the instance IP or read-only group IP. this parameter is required when enabling SSL or modifying the SSL-protected connection address. it will be ignored when disabling SSL.
         * @type {string || null}
         */
        this.ConnectAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.SSLEnabled = 'SSLEnabled' in params ? params.SSLEnabled : null;
        this.ConnectAddress = 'ConnectAddress' in params ? params.ConnectAddress : null;

    }
}

/**
 * Specifies the permission list of the specified account for the database object.
 * @class
 */
class DatabasePrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * The database object. when ObjectType is database, DatabaseName/SchemaName/TableName can be empty. when ObjectType is schema, SchemaName/TableName can be empty. when ObjectType is column, TableName cannot be empty. other cases can be empty.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DatabaseObject || null}
         */
        this.Object = null;

        /**
         * Specifies the permission list of the specified account for the database object.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PrivilegeSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Object) {
            let obj = new DatabaseObject();
            obj.deserialize(params.Object)
            this.Object = obj;
        }
        this.PrivilegeSet = 'PrivilegeSet' in params ? params.PrivilegeSet : null;

    }
}

/**
 * UnlockAccount response structure.
 * @class
 */
class UnlockAccountResponse extends  AbstractModel {
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
 * ModifyDBInstanceSecurityGroups response structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
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
 * Describes the instance node information, including the node type, availability zone where the node is located, and dedicated cluster where the node resides.
 * @class
 */
class DBNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node type. Valid values:
`Primary`;
`Standby`.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * AZ where the node resides, such as ap-guangzhou-1.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * CDC ID.
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;

    }
}

/**
 * ModifyDBInstanceName response structure.
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
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
 * UpgradeDBInstanceMajorVersion request structure.
 * @class
 */
class UpgradeDBInstanceMajorVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Target kernel version number, where upgradeable target kernel version numbers can be acquired through API DescribeDBVersions.
         * @type {string || null}
         */
        this.TargetDBKernelVersion = null;

        /**
         * Whether it is verification mode: if UpgradeCheck is True, it means only kernel version compatibility check will be conducted, without actual upgrade operations, and there will be no affect on the original instance. The check results can be viewed through the upgrade logs.
         * @type {boolean || null}
         */
        this.UpgradeCheck = null;

        /**
         * Pre-upgrade backup option: True means a full backup is required before upgrade, and False means a full backup is not required before upgrade. If there is an existing backup set that can restore the instance to its pre-upgrade state, False can be selected; otherwise, True should be specified. This parameter is invalid when UpgradeCheck is True.
         * @type {boolean || null}
         */
        this.BackupBeforeUpgrade = null;

        /**
         * Statistics collection option, which is used to run ANALYZE on the primary instance to update system statistics after the upgrade. Valid values include:
0: No statistics collection required;
1: Collect statistics before instance recovery write;
3: Collect statistics after instance recovery write.
This parameter is invalid when UpgradeCheck is True.
         * @type {number || null}
         */
        this.StatisticsRefreshOption = null;

        /**
         * Plugin upgrade option. pg_upgrade does not upgrade any plugins, and "ALTER EXTENSION UPDATE" needs to be executed on the database where the plugins were created after the upgrade. When initiating a major version upgrade of an instance, you can specify whether the upgrade task automatically upgrades the plugin version before/after the instance recovery write. Valid values include:
0: No automatic plugin upgrade required;
1: Upgrade plugins before recovery write;
2: Upgrade plugins after recovery write.
This parameter is invalid when UpgradeCheck is True.
         * @type {number || null}
         */
        this.ExtensionUpgradeOption = null;

        /**
         * Upgrade time option. During the upgrade process, there will be a period when the instance is read-only, and there will be a second-level flash disconnection. When initiating an upgrade, you need to choose the time window for this impact. Valid values include:
0: Execute automatically, no specific time window required;
1: Specify the time window for this upgrade task, which is set via UpgradeTimeBegin and UpgradeTimeEnd parameters;
2: Execute during the instance operation and maintenance time window.
This parameter is invalid when UpgradeCheck is True.
         * @type {number || null}
         */
        this.UpgradeTimeOption = null;

        /**
         * Upgrade window start time, and the time format is HH:MM:SS, for example: 01:00:00. This parameter is valid when UpgradeTimeOption is set to `1`.
This parameter is invalid when UpgradeCheck is True.
         * @type {string || null}
         */
        this.UpgradeTimeBegin = null;

        /**
         * Upgrade window end time, and the time format is HH:MM:SS, for example: 2:00:00 AM. This parameter is valid when UpgradeTimeOption is set to `1`.
This parameter is invalid when UpgradeCheck is True.
         * @type {string || null}
         */
        this.UpgradeTimeEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.TargetDBKernelVersion = 'TargetDBKernelVersion' in params ? params.TargetDBKernelVersion : null;
        this.UpgradeCheck = 'UpgradeCheck' in params ? params.UpgradeCheck : null;
        this.BackupBeforeUpgrade = 'BackupBeforeUpgrade' in params ? params.BackupBeforeUpgrade : null;
        this.StatisticsRefreshOption = 'StatisticsRefreshOption' in params ? params.StatisticsRefreshOption : null;
        this.ExtensionUpgradeOption = 'ExtensionUpgradeOption' in params ? params.ExtensionUpgradeOption : null;
        this.UpgradeTimeOption = 'UpgradeTimeOption' in params ? params.UpgradeTimeOption : null;
        this.UpgradeTimeBegin = 'UpgradeTimeBegin' in params ? params.UpgradeTimeBegin : null;
        this.UpgradeTimeEnd = 'UpgradeTimeEnd' in params ? params.UpgradeTimeEnd : null;

    }
}

/**
 * CloseDBExtranetAccess response structure.
 * @class
 */
class CloseDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Process ID. FlowId is equivalent to TaskId.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Task ID.
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupDownloadRestriction response structure.
 * @class
 */
class DescribeBackupDownloadRestrictionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the network restrictions for downloading a backup file. Valid values: `NONE` (backups can be downloaded over both private and public networks), `INTRANET` (backups can only be downloaded over the private network), `CUSTOMIZE` (backups can be downloaded over specified VPCs or at specified IPs).
         * @type {string || null}
         */
        this.RestrictionType = null;

        /**
         * Whether VPC is allowed. Valid values: `ALLOW` (allow), `DENY` (deny). 
Note:  This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcRestrictionEffect = null;

        /**
         * Whether it is allowed to download the VPC ID list of the backup files. 
Note:  This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.VpcIdSet = null;

        /**
         * Whether IP is allowed. Valid values: `ALLOW` (allow), `DENY` (deny). 
Note: Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IpRestrictionEffect = null;

        /**
         * Whether it is allowed to download the IP list of the backup files. 
Note:  This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.IpSet = null;

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
        this.RestrictionType = 'RestrictionType' in params ? params.RestrictionType : null;
        this.VpcRestrictionEffect = 'VpcRestrictionEffect' in params ? params.VpcRestrictionEffect : null;
        this.VpcIdSet = 'VpcIdSet' in params ? params.VpcIdSet : null;
        this.IpRestrictionEffect = 'IpRestrictionEffect' in params ? params.IpRestrictionEffect : null;
        this.IpSet = 'IpSet' in params ? params.IpSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReadOnlyDBInstance request structure.
 * @class
 */
class CreateReadOnlyDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Primary AZ of an instance, such as "ap-guangzhou-3".
The information of AZ can be obtained from the `Zone` field in the return value of the [DescribeZones](https://intl.cloud.tencent.com/document/api/409/16769?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Primary instance ID of the read-only instance. obtain through the api [DescribeDBInstances](https://www.tencentcloud.comom/document/api/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * Purchasable code, which can be obtained from the `SpecCode` field in the return value of the [DescribeClasses](https://intl.cloud.tencent.com/document/api/409/89019?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Instance disk capacity size in GB. specifies the step length for parameter settings as 10.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Number of instances to purchase. value range: [1-6]. maximum allowed number is 6.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Purchase duration, in months.
<Li>Prepaid: supports `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, and `36`.</li>.
<li>Pay-as-you-go: Only supports `1`.</li>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * VPC ID, in the format of vpc-xxxxxxxx (this parameter is currently required). A valid VpcId can be obtained by logging into the console; it can also be obtained from the unVpcId field in the return value of calling of the [DescribeVpcEx](https://intl.cloud.tencent.com/document/api/215/1372?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID, in the format of subnet-xxxxxxxx (this parameter is currently required). A valid VPC subnet ID can be obtained by logging into the console; it can also be obtained from the unSubnetId field in the return value of calling of the [DescribeSubnets](https://intl.cloud.tencent.com/document/api/215/15784?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance billing type, which currently supports:.
<Li>PREPAID: prepaid, i.e., yearly/monthly subscription.</li>.
<Li>POSTPAID_BY_HOUR: pay-as-you-go, i.e., pay by consumption.</li>.
Default value: PREPAID. if the primary instance is postpaid, the read-only instance must also be postpaid.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Specifies whether to automatically use a voucher.
<Li>0: no.</li>.
<Li>`1`: yes.</li>.
Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list. Currently, you can specify only one voucher.
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * Specifies the auto-renewal flag.
<Li>`0`: manual renewal.</li>.
<Li>`1`: auto-renewal</li>.
Default value: 0
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Project ID. default value is 0, means it belongs to the default project.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Special offer ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * The information of tags to be bound with the instance, which is left empty by default. This parameter can be obtained from the `Tags` field in the return value of the [DescribeTags](https://intl.cloud.tencent.com/document/api/651/35316?from_cn_redirect=1) API.
         * @type {Tag || null}
         */
        this.TagList = null;

        /**
         * Security group of the instance, which can be obtained from the `sgld` field in the return value of the [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808?from_cn_redirect=1) API. If this parameter is not specified, the default security group will be bound.

         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Specifies whether to support Ipv6.
<Li>0: no.</li>.
<Li>`1`: yes.</li>.
Default value: 0
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * Instance name. only chinese characters, letters, digits, underscores (_), and delimiters (-) are supported. the length must be less than 60 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Specifies the kernel version number should be consistent with the primary instance and no longer needed to be specified.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * CDC ID.
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

        /**
         * Specifies whether to enable deletion protection for the instance. valid values: true (enable deletion protection), false (disable deletion protection).
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

        if (params.TagList) {
            let obj = new Tag();
            obj.deserialize(params.TagList)
            this.TagList = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;

    }
}

/**
 * DescribeCloneDBInstanceSpec response structure.
 * @class
 */
class DescribeCloneDBInstanceSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Code of the minimum specification available for purchase.
         * @type {string || null}
         */
        this.MinSpecCode = null;

        /**
         * The minimum disk capacity in GB available for purchase.
         * @type {number || null}
         */
        this.MinStorage = null;

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
        this.MinSpecCode = 'MinSpecCode' in params ? params.MinSpecCode : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZones response structure.
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of returned results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * AZ information set.
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateServerlessDBInstance response structure.
 * @class
 */
class CreateServerlessDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as "postgres-xxxxx". The value must be globally unique.
         * @type {string || null}
         */
        this.DBInstanceId = null;

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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabases response structure.
 * @class
 */
class DescribeDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database information
         * @type {Array.<string> || null}
         */
        this.Items = null;

        /**
         * Total number of databases
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Specifies the database details list.
         * @type {Array.<Database> || null}
         */
        this.Databases = null;

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
        this.Items = 'Items' in params ? params.Items : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new Database();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductConfig response structure.
 * @class
 */
class DescribeProductConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchasable specification list.
         * @type {Array.<SpecInfo> || null}
         */
        this.SpecInfoList = null;

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

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrders request structure.
 * @class
 */
class DescribeOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name set
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * CloseDBExtranetAccess request structure.
 * @class
 */
class CloseDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en). such as postgres-6r233v55.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Specifies whether to close public network Ipv6. 1: yes. 0: no. default value: 0.
         * @type {number || null}
         */
        this.IsIpv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.IsIpv6 = 'IsIpv6' in params ? params.IsIpv6 : null;

    }
}

/**
 * ModifyParameterTemplate response structure.
 * @class
 */
class ModifyParameterTemplateResponse extends  AbstractModel {
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
 * DescribeEncryptionKeys request structure.
 * @class
 */
class DescribeEncryptionKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * Log backup information of a database
 * @class
 */
class LogBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Unique ID of a backup file
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Backup file name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Backup method, including physical and logical.
         * @type {string || null}
         */
        this.BackupMethod = null;

        /**
         * Backup mode, including automatic and manual.
         * @type {string || null}
         */
        this.BackupMode = null;

        /**
         * Backup task status
         * @type {string || null}
         */
        this.State = null;

        /**
         * Backup set size in bytes
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Backup start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Backup end time
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Backup expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupMode = 'BackupMode' in params ? params.BackupMode : null;
        this.State = 'State' in params ? params.State : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * RebalanceReadOnlyGroup request structure.
 * @class
 */
class RebalanceReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * ModifyBackupPlan response structure.
 * @class
 */
class ModifyBackupPlanResponse extends  AbstractModel {
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
 * DestroyDBInstance request structure.
 * @class
 */
class DestroyDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the instance to be eliminated
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * CreateServerlessDBInstance request structure.
 * @class
 */
class CreateServerlessDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability zone ID. Only ap-shanghai-2, ap-beijing-1, and ap-guangzhou-2 are supported during the beta test.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance name. The value must be unique for the same account.
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * Kernel version of a PostgreSQL instance. Currently, only 10.4 is supported.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Database character set of a PostgreSQL instance. Currently, only UTF-8 is supported.
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * VPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Array of tags to be bound with the instance
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * InquiryPriceRenewDBInstance request structure.
 * @class
 */
class InquiryPriceRenewDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Renewal duration in months. Maximum value: 48
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * CreateReadOnlyGroup response structure.
 * @class
 */
class CreateReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * Task ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDBInstanceNetworkAccess response structure.
 * @class
 */
class DeleteDBInstanceNetworkAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountPrivileges request structure.
 * @class
 */
class ModifyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/api/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Modify the permission of this account for a database object. obtain through the [DescribeAccounts](https://www.tencentcloud.com/document/api/409/18109?from_cn_redirect=1) api.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Permission information to modify. supports batch modification. the maximum number of modifications per batch is 50.
         * @type {Array.<ModifyPrivilege> || null}
         */
        this.ModifyPrivilegeSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

        if (params.ModifyPrivilegeSet) {
            this.ModifyPrivilegeSet = new Array();
            for (let z in params.ModifyPrivilegeSet) {
                let obj = new ModifyPrivilege();
                obj.deserialize(params.ModifyPrivilegeSet[z]);
                this.ModifyPrivilegeSet.push(obj);
            }
        }

    }
}

/**
 * DeleteServerlessDBInstance request structure.
 * @class
 */
class DeleteServerlessDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name. Either instance name or instance ID (or both) must be passed in. If both are passed in, the instance ID will prevail.
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * Instance ID. Either instance name or instance ID (or both) must be passed in. If both are passed in, the instance ID will prevail.
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ModifyReadOnlyGroupConfig response structure.
 * @class
 */
class ModifyReadOnlyGroupConfigResponse extends  AbstractModel {
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
 * Account information
 * @class
 */
class AccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Account
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Specifies the account remark.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Account status. valid values: 1-creating, 2-normal, 3-modifying, 4-resetting password, 5-locked, -1-deleting.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last update time of the account.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Specifies the last modified time of the account.

This field will only take effect after 2025-10-31. No matter whether the password is modified before, the value will be the default value: 0000-00-00 00:00:00
Indicates that this field is updated only when the password is modified via the cloud API or the console.
         * @type {string || null}
         */
        this.PasswordUpdateTime = null;

        /**
         * Account type. valid values: normal, tencentDBSuper. normal references a general user, tencentDBSuper possesses the pg_tencentdb_superuser user role.
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * Specifies whether CAM verification is enabled for the user account.
         * @type {boolean || null}
         */
        this.OpenCam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PasswordUpdateTime = 'PasswordUpdateTime' in params ? params.PasswordUpdateTime : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.OpenCam = 'OpenCam' in params ? params.OpenCam : null;

    }
}

/**
 * ModifyAccountRemark request structure.
 * @class
 */
class ModifyAccountRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance username
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * New remarks corresponding to user `UserName`
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeParameterTemplateAttributes request structure.
 * @class
 */
class DescribeParameterTemplateAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
         * @type {string || null}
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
 * DescribeDBErrlogs response structure.
 * @class
 */
class DescribeDBErrlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of logs returned in a single query. Maximum value: `10000`.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Detailed sets of error logs
         * @type {Array.<ErrLogDetail> || null}
         */
        this.Details = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ErrLogDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupPlan request structure.
 * @class
 */
class ModifyBackupPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * The earliest time to start a backup
         * @type {string || null}
         */
        this.MinBackupStartTime = null;

        /**
         * The latest time to start a backup
         * @type {string || null}
         */
        this.MaxBackupStartTime = null;

        /**
         * Backup retention period in days. Value range: 7-1830
         * @type {number || null}
         */
        this.BaseBackupRetentionPeriod = null;

        /**
         * Backup cycle, which means on which days each week the instance will be backed up. The parameter value should be the lowercase names of the days of the week.
         * @type {Array.<string> || null}
         */
        this.BackupPeriod = null;

        /**
         * Instance log backup retention duration, with a value range of 7-1830 and a unit of day
         * @type {number || null}
         */
        this.LogBackupRetentionPeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.MinBackupStartTime = 'MinBackupStartTime' in params ? params.MinBackupStartTime : null;
        this.MaxBackupStartTime = 'MaxBackupStartTime' in params ? params.MaxBackupStartTime : null;
        this.BaseBackupRetentionPeriod = 'BaseBackupRetentionPeriod' in params ? params.BaseBackupRetentionPeriod : null;
        this.BackupPeriod = 'BackupPeriod' in params ? params.BackupPeriod : null;
        this.LogBackupRetentionPeriod = 'LogBackupRetentionPeriod' in params ? params.LogBackupRetentionPeriod : null;

    }
}

/**
 * DeleteBaseBackup request structure.
 * @class
 */
class DeleteBaseBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Data backup ID. obtain through the api [DescribeBaseBackups](https://www.tencentcloud.com/document/product/409/54343?lang=en). automatic backup sets cannot be deleted within 7 days.
         * @type {string || null}
         */
        this.BaseBackupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.BaseBackupId = 'BaseBackupId' in params ? params.BaseBackupId : null;

    }
}

/**
 * Parameters to be modified in batches
 * @class
 */
class ParamEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The new value to which the parameter will be modified. When this parameter is used as an input parameter, its value must be a string, such as `0.1` (decimal), `1000` (integer), and `replica` (enum).
         * @type {string || null}
         */
        this.ExpectedValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ExpectedValue = 'ExpectedValue' in params ? params.ExpectedValue : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance response structure.
 * @class
 */
class InquiryPriceUpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total cost before discount.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted total amount
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Currency, such as USD.
         * @type {string || null}
         */
        this.Currency = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisIsolateDBInstances response structure.
 * @class
 */
class DisIsolateDBInstancesResponse extends  AbstractModel {
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
 * CreateParameterTemplate request structure.
 * @class
 */
class CreateParameterTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name, which can contain 1-60 letters, digits, and symbols (-_./()[]()+=:@).
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * The major database version number, such as 11, 12, 13.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * Database engine, such as postgresql, mssql_compatible.
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * Parameter template description, which can contain 1-60 letters, digits, and symbols (-_./()[]()+=:@).
         * @type {string || null}
         */
        this.TemplateDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;

    }
}

/**
 * DescribeDBInstanceSSLConfig request structure.
 * @class
 */
class DescribeDBInstanceSSLConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID, such as postgres-6bwgamo3. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ModifyDatabaseOwner response structure.
 * @class
 */
class ModifyDatabaseOwnerResponse extends  AbstractModel {
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
 * ModifySwitchTimePeriod request structure.
 * @class
 */
class ModifySwitchTimePeriodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the instance waiting for a switch
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Valid value: `0` (switch immediately)
         * @type {number || null}
         */
        this.SwitchTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;

    }
}

/**
 * CreateAccount response structure.
 * @class
 */
class CreateAccountResponse extends  AbstractModel {
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
 * DescribeSlowQueryList request structure.
 * @class
 */
class DescribeSlowQueryListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time, in the format of 2018-01-01 00:00:00. The log is retained for seven days by default, so the start time must fall within the retention period.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, in the format of 2018-01-01 00:00:00.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Database name.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Sorting method, including ascending: `asc` and descending: `desc`. The default value is `desc`.	
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Sorting field, with a value range of `[SessionStartTime, Duration]`. The default value is `SessionStartTime`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Number of results returned per page, with a value range of 1-100. The default value is `50`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, which starts from 0. The default value is `0`.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeCloneDBInstanceSpec request structure.
 * @class
 */
class DescribeCloneDBInstanceSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Basic backup set ID. obtain through the api [DescribeBaseBackups](https://www.tencentcloud.com/document/product/409/54343?lang=en). this parameter and RecoveryTargetTime must be selected. if set simultaneously with RecoveryTargetTime, this parameter takes precedence.
         * @type {string || null}
         */
        this.BackupSetId = null;

        /**
         * Restoration time (UTC+8). Either this parameter or `BackupSetId` must be passed in.
         * @type {string || null}
         */
        this.RecoveryTargetTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.BackupSetId = 'BackupSetId' in params ? params.BackupSetId : null;
        this.RecoveryTargetTime = 'RecoveryTargetTime' in params ? params.RecoveryTargetTime : null;

    }
}

/**
 * Region information such as number and status
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region abbreviation
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region number
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Availability status. UNAVAILABLE: unavailable, AVAILABLE: available
         * @type {string || null}
         */
        this.RegionState = null;

        /**
         * Whether the resource can be purchased in this region. Valid values: `0` (no), `1` (yes).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SupportInternational = null;

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
        this.RegionState = 'RegionState' in params ? params.RegionState : null;
        this.SupportInternational = 'SupportInternational' in params ? params.SupportInternational : null;

    }
}

/**
 * ModifyDatabaseOwner request structure.
 * @class
 */
class ModifyDatabaseOwnerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/api/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Database name. obtain through the api [DescribeDatabases](https://www.tencentcloud.com/document/api/409/43353?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * New owner of the database. obtain through the api [DescribeAccounts](https://www.tencentcloud.com/document/api/409/18109?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DatabaseOwner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.DatabaseOwner = 'DatabaseOwner' in params ? params.DatabaseOwner : null;

    }
}

/**
 * DisIsolateDBInstances request structure.
 * @class
 */
class DisIsolateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID list. obtain through the api [DescribeDBInstances](https://www.tencentcloud.comom/document/api/409/16773?from_cn_redirect=1). supports de-isolating multiple instances simultaneously.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * Purchase duration, in months.
<Li>Prepaid: Yearly/monthly subscription, supports `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, and `36`.</li>.
<Li>Postpaid: Pay-as-you-go, this parameter does not take effect.</li>.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to use vouchers.
<li>true: use.</li>.
<li>false: non-use.</li>.
Default value: `false`.
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * CreateBackupPlan response structure.
 * @class
 */
class CreateBackupPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup policy ID.
         * @type {string || null}
         */
        this.PlanId = null;

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
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LockAccount request structure.
 * @class
 */
class LockAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.		
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Account name.
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * DescribeDBInstances response structure.
 * @class
 */
class DescribeDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances found.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance details set.
         * @type {Array.<DBInstance> || null}
         */
        this.DBInstanceSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DBInstanceSet) {
            this.DBInstanceSet = new Array();
            for (let z in params.DBInstanceSet) {
                let obj = new DBInstance();
                obj.deserialize(params.DBInstanceSet[z]);
                this.DBInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceSecurityGroups request structure.
 * @class
 */
class DescribeDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en). specify either DBInstanceId or ReadOnlyGroupId. if both are provided, ReadOnlyGroupId is ignored.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * ReadOnlyGroupId. specifies the read-only group ID, which can be obtained through the api [DescribeReadOnlyGroups](https://www.tencentcloud.com/document/product/409/39725?lang=en). valid values: DBInstanceId and ReadOnlyGroupId (at least one is required). if you need to query the associated security group of the read-only group, only ReadOnlyGroupId is required.
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeBackupPlans request structure.
 * @class
 */
class DescribeBackupPlansRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ModifyBaseBackupExpireTime request structure.
 * @class
 */
class ModifyBaseBackupExpireTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Data backup ID. obtain through the api [DescribeBaseBackups](https://www.tencentcloud.com/document/product/409/54343?lang=en).
         * @type {string || null}
         */
        this.BaseBackupId = null;

        /**
         * New expiration time
         * @type {string || null}
         */
        this.NewExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.BaseBackupId = 'BaseBackupId' in params ? params.BaseBackupId : null;
        this.NewExpireTime = 'NewExpireTime' in params ? params.NewExpireTime : null;

    }
}

/**
 * ModifyDBInstanceHAConfig response structure.
 * @class
 */
class ModifyDBInstanceHAConfigResponse extends  AbstractModel {
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
 * CreateDatabase response structure.
 * @class
 */
class CreateDatabaseResponse extends  AbstractModel {
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
 * RebalanceReadOnlyGroup response structure.
 * @class
 */
class RebalanceReadOnlyGroupResponse extends  AbstractModel {
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
 * ResetAccountPassword request structure.
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-4wdeb0zv
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance account name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * New password corresponding to `UserName` account
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeSlowQueryAnalysis response structure.
 * @class
 */
class DescribeSlowQueryAnalysisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number found, with a maximum of 10,000 entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Collection of detailed information on slow SQL statistical analysis found.
         * @type {Detail || null}
         */
        this.Detail = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Detail) {
            let obj = new Detail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceParameters request structure.
 * @class
 */
class ModifyDBInstanceParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Parameters to be modified and expected values.
         * @type {Array.<ParamEntry> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamEntry();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * Exclusive cluster-related information, used for querying the user's exclusive cluster list.
 * @class
 */
class DedicatedCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * CDC ID.
         * @type {string || null}
         */
        this.DedicatedClusterId = null;

        /**
         * Dedicated cluster name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Specifies the AZ of the exclusive cluster.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Disaster recovery cluster.
         * @type {Array.<string> || null}
         */
        this.StandbyDedicatedClusterSet = null;

        /**
         * Specifies the instance count.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Total number of cpus.
         * @type {number || null}
         */
        this.CpuTotal = null;

        /**
         * Specifies the available amount of Cpu.
         * @type {number || null}
         */
        this.CpuAvailable = null;

        /**
         * Total memory capacity in GB.
         * @type {number || null}
         */
        this.MemTotal = null;

        /**
         * Available memory in GB.
         * @type {number || null}
         */
        this.MemAvailable = null;

        /**
         * Total disk capacity (unit: GB).
         * @type {number || null}
         */
        this.DiskTotal = null;

        /**
         * Disk availability (unit: GB).
         * @type {number || null}
         */
        this.DiskAvailable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DedicatedClusterId = 'DedicatedClusterId' in params ? params.DedicatedClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.StandbyDedicatedClusterSet = 'StandbyDedicatedClusterSet' in params ? params.StandbyDedicatedClusterSet : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.CpuTotal = 'CpuTotal' in params ? params.CpuTotal : null;
        this.CpuAvailable = 'CpuAvailable' in params ? params.CpuAvailable : null;
        this.MemTotal = 'MemTotal' in params ? params.MemTotal : null;
        this.MemAvailable = 'MemAvailable' in params ? params.MemAvailable : null;
        this.DiskTotal = 'DiskTotal' in params ? params.DiskTotal : null;
        this.DiskAvailable = 'DiskAvailable' in params ? params.DiskAvailable : null;

    }
}

/**
 * PostgreSQL for Serverless instance account description
 * @class
 */
class ServerlessDBAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBUser = null;

        /**
         * Password
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBPassword = null;

        /**
         * The maximum number of connections
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DBConnLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBUser = 'DBUser' in params ? params.DBUser : null;
        this.DBPassword = 'DBPassword' in params ? params.DBPassword : null;
        this.DBConnLimit = 'DBConnLimit' in params ? params.DBConnLimit : null;

    }
}

/**
 * Analyze the execution time of slow query statements by classifying them to different time ranges
 * @class
 */
class DurationAnalysis extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time range
         * @type {string || null}
         */
        this.TimeSegment = null;

        /**
         * The number of slow query statements whose execution time falls within the time range
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
        this.TimeSegment = 'TimeSegment' in params ? params.TimeSegment : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeDBSlowlogs response structure.
 * @class
 */
class DescribeDBSlowlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned this time
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query log details
         * @type {SlowlogDetail || null}
         */
        this.Detail = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Detail) {
            let obj = new SlowlogDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountPrivileges request structure.
 * @class
 */
class DescribeAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Describes the permissions owned by this account for a database object. the account name can be obtained through the [DescribeAccounts](https://www.tencentcloud.com/document/product/409/18109?lang=en) api.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Specifies the database object information to query.
         * @type {Array.<DatabaseObject> || null}
         */
        this.DatabaseObjectSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

        if (params.DatabaseObjectSet) {
            this.DatabaseObjectSet = new Array();
            for (let z in params.DatabaseObjectSet) {
                let obj = new DatabaseObject();
                obj.deserialize(params.DatabaseObjectSet[z]);
                this.DatabaseObjectSet.push(obj);
            }
        }

    }
}

/**
 * DescribeReadOnlyGroups response structure.
 * @class
 */
class DescribeReadOnlyGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO group list
         * @type {Array.<ReadOnlyGroup> || null}
         */
        this.ReadOnlyGroupList = null;

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

        if (params.ReadOnlyGroupList) {
            this.ReadOnlyGroupList = new Array();
            for (let z in params.ReadOnlyGroupList) {
                let obj = new ReadOnlyGroup();
                obj.deserialize(params.ReadOnlyGroupList[z]);
                this.ReadOnlyGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreDBInstanceObjects request structure.
 * @class
 */
class RestoreDBInstanceObjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * List of objects to be restored. If the object to be restored is named test, the restored name will be `test_bak_${LinuxTime}`. `${LinuxTime}` cannot be specified and is set by the system based on the Linux time at task initiation.
         * @type {Array.<string> || null}
         */
        this.RestoreObjects = null;

        /**
         * Backup set used for recovery. Either `BackupSetId` or `RestoreTargetTime` must be provided, and only one can be passed.
         * @type {string || null}
         */
        this.BackupSetId = null;

        /**
         * Recovery target time, Beijing Time (UTC+8). Either `BackupSetId` or `RestoreTargetTime` must be provided, and only one can be passed.
         * @type {string || null}
         */
        this.RestoreTargetTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.RestoreObjects = 'RestoreObjects' in params ? params.RestoreObjects : null;
        this.BackupSetId = 'BackupSetId' in params ? params.BackupSetId : null;
        this.RestoreTargetTime = 'RestoreTargetTime' in params ? params.RestoreTargetTime : null;

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
         * Number of date entries returned for this API call.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Detailed account list information. when the CreateTime field is 0000-00-00 00:00:00, it means the corresponding account is created by direct connection database, not through the CreateAccount api.
         * @type {Array.<AccountInfo> || null}
         */
        this.Details = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new AccountInfo();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceChargeType request structure.
 * @class
 */
class ModifyDBInstanceChargeTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the instance ID, such as postgres-6fego161. obtain through the api [DescribeDBInstances](https://www.tencentcloud.comom/document/api/409/16773?from_cn_redirect=1).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance billing type, which currently supports:.
<Li>PREPAID: prepaid, i.e., yearly/monthly subscription</li>.
<Li>POSTPAID_BY_HOUR: pay-as-you-go, i.e., pay by consumption.</li>.
Default value: PREPAID
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Purchase duration, in months.
<Li>Prepaid: supports `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, and `36`.</li>.
<li>Pay-as-you-go: Only supports `1`.</li>
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Specifies the auto-renewal flag.
<Li>`0`: manual renewal.</li>.
<Li>`1`: auto-renewal</li>.
Default value: 0
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Specifies whether to automatically use a voucher.
<Li>0: no.</li>.
<Li>`1`: yes.</li>.
Default value: 0
         * @type {number || null}
         */
        this.AutoVoucher = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;

    }
}

/**
 * DescribeParameterTemplateAttributes response structure.
 * @class
 */
class DescribeParameterTemplateAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Number of parameters contained in the parameter template
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter information contained in the parameter template
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ParamInfo> || null}
         */
        this.ParamInfoSet = null;

        /**
         * Parameter template name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * Database version applicable to a parameter template
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * Database engine applicable to a parameter template
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * Parameter template description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TemplateDescription = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ParamInfoSet) {
            this.ParamInfoSet = new Array();
            for (let z in params.ParamInfoSet) {
                let obj = new ParamInfo();
                obj.deserialize(params.ParamInfoSet[z]);
                this.ParamInfoSet.push(obj);
            }
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance response structure.
 * @class
 */
class UpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transaction name.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * Bill ID of frozen fees
         * @type {string || null}
         */
        this.BillId = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBVersions request structure.
 * @class
 */
class DescribeDBVersionsRequest extends  AbstractModel {
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
 * ModifyDBInstancesProject request structure.
 * @class
 */
class ModifyDBInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs. Note that currently you cannot manipulate multiple instances at the same time. Only one instance ID can be passed in here.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * ID of the new project
         * @type {string || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeDBSlowlogs request structure.
 * @class
 */
class DescribeDBSlowlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time in the format of 2018-06-10 17:06:38, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Metric for sorting. Valid values: `sum_calls` (total number of calls), `sum_cost_time` (total time consumed)
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. desc: descending, asc: ascending
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Number of entries returned per page. Value range: 1-100. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page number for data return in paged query. Pagination starts from 0
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DestroyDBInstance response structure.
 * @class
 */
class DestroyDBInstanceResponse extends  AbstractModel {
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
 * DescribeDBInstanceAttribute response structure.
 * @class
 */
class DescribeDBInstanceAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance details.
         * @type {DBInstance || null}
         */
        this.DBInstance = null;

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

        if (params.DBInstance) {
            let obj = new DBInstance();
            obj.deserialize(params.DBInstance)
            this.DBInstance = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLogBackup request structure.
 * @class
 */
class DeleteLogBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Log backup ID
         * @type {string || null}
         */
        this.LogBackupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.LogBackupId = 'LogBackupId' in params ? params.LogBackupId : null;

    }
}

/**
 * DeleteBaseBackup response structure.
 * @class
 */
class DeleteBaseBackupResponse extends  AbstractModel {
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
 * Rule information for security group
 * @class
 */
class PolicyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy, Valid values: `ACCEPT`, `DROP`.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Source or destination IP or IP range, such as 172.16.0.0/12.
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Port
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * Network protocol. UDP and TCP are supported.
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * The rule description
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
        this.Action = 'Action' in params ? params.Action : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ModifyDBInstanceSpec response structure.
 * @class
 */
class ModifyDBInstanceSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * Bill ID of frozen fees.
         * @type {string || null}
         */
        this.BillId = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupDownloadURL request structure.
 * @class
 */
class DescribeBackupDownloadURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. obtain through the api [DescribeDBInstances](https://www.tencentcloud.com/document/product/409/16773?lang=en).
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Backup type. Valid values: `LogBackup`, `BaseBackup`.
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * Unique backup ID.
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Validity time of the connection. value range: [0,36]. default value: 12 hours.
         * @type {number || null}
         */
        this.URLExpireTime = null;

        /**
         * Backup download restriction
         * @type {BackupDownloadRestriction || null}
         */
        this.BackupDownloadRestriction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.URLExpireTime = 'URLExpireTime' in params ? params.URLExpireTime : null;

        if (params.BackupDownloadRestriction) {
            let obj = new BackupDownloadRestriction();
            obj.deserialize(params.BackupDownloadRestriction)
            this.BackupDownloadRestriction = obj;
        }

    }
}

/**
 * DescribeDBXlogs response structure.
 * @class
 */
class DescribeDBXlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of date entries returned this time.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Xlog list
         * @type {Array.<Xlog> || null}
         */
        this.XlogList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.XlogList) {
            this.XlogList = new Array();
            for (let z in params.XlogList) {
                let obj = new Xlog();
                obj.deserialize(params.XlogList[z]);
                this.XlogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceChargeType response structure.
 * @class
 */
class ModifyDBInstanceChargeTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order name
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaseBackups request structure.
 * @class
 */
class DescribeBaseBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum end time of a backup in the format of `2018-01-01 00:00:00`. It is 7 days ago by default.
         * @type {string || null}
         */
        this.MinFinishTime = null;

        /**
         * Maximum end time of a backup in the format of `2018-01-01 00:00:00`. It is the current time by default.
         * @type {string || null}
         */
        this.MaxFinishTime = null;

        /**
         * Query using one or more filter criteria. filter criteria currently supported include:.
db-instance-id: filter by instance id (string type).
db-instance-name: specifies the instance name to filter by, supports fuzzy matching (string type).
db-instance-ip: specifies the instance VPC ip for filtering (string type).
base-backup-id: filter by backup set id (in string format).
db-instance-status: filter by instance status (in string format). valid values refer to the DBInstanceStatus field in the DBInstance structure (https://www.tencentcloud.com/document/product/409/16778#dbinstance).
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The maximum number of results returned per page. Value range: 1-100. Default: `10`
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, which starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Specifies the sorting field, supports StartTime, FinishTime, and Size. default value: StartTime.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting method, including ascending: `asc` and descending: `desc`. the default value is `desc`.
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinFinishTime = 'MinFinishTime' in params ? params.MinFinishTime : null;
        this.MaxFinishTime = 'MaxFinishTime' in params ? params.MaxFinishTime : null;

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
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeEncryptionKeys response structure.
 * @class
 */
class DescribeEncryptionKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the key information list of the instance.
         * @type {Array.<EncryptionKey> || null}
         */
        this.EncryptionKeys = null;

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

        if (params.EncryptionKeys) {
            this.EncryptionKeys = new Array();
            for (let z in params.EncryptionKeys) {
                let obj = new EncryptionKey();
                obj.deserialize(params.EncryptionKeys[z]);
                this.EncryptionKeys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReadOnlyGroupNetworkAccess response structure.
 * @class
 */
class CreateReadOnlyGroupNetworkAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Process ID. FlowId is equivalent to TaskId.
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Task ID.
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstances response structure.
 * @class
 */
class CreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order number list. Each instance corresponds to an order number.
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * Bill ID of frozen fees
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * ID set of instances which have been created successfully. The parameter value will be returned only when the billing mode is postpaid.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccount response structure.
 * @class
 */
class DeleteAccountResponse extends  AbstractModel {
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

module.exports = {
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    TaskDetail: TaskDetail,
    SetAutoRenewFlagRequest: SetAutoRenewFlagRequest,
    DeleteBackupPlanResponse: DeleteBackupPlanResponse,
    DescribeAccountPrivilegesResponse: DescribeAccountPrivilegesResponse,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    DescribeDBXlogsRequest: DescribeDBXlogsRequest,
    CreateReadOnlyGroupNetworkAccessRequest: CreateReadOnlyGroupNetworkAccessRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    DeleteReadOnlyGroupResponse: DeleteReadOnlyGroupResponse,
    OpenDBExtranetAccessRequest: OpenDBExtranetAccessRequest,
    CreateInstancesRequest: CreateInstancesRequest,
    SpecItemInfo: SpecItemInfo,
    ParameterTemplate: ParameterTemplate,
    CreateDBInstanceNetworkAccessResponse: CreateDBInstanceNetworkAccessResponse,
    DescribeAvailableRecoveryTimeResponse: DescribeAvailableRecoveryTimeResponse,
    CreateBaseBackupRequest: CreateBaseBackupRequest,
    ModifyDBInstanceReadOnlyGroupResponse: ModifyDBInstanceReadOnlyGroupResponse,
    ClassInfo: ClassInfo,
    DescribeDBInstanceParametersResponse: DescribeDBInstanceParametersResponse,
    DescribeDBInstanceSecurityGroupsResponse: DescribeDBInstanceSecurityGroupsResponse,
    BackupPlan: BackupPlan,
    RestoreDBInstanceObjectsResponse: RestoreDBInstanceObjectsResponse,
    SlowlogDetail: SlowlogDetail,
    SwitchDBInstancePrimaryRequest: SwitchDBInstancePrimaryRequest,
    OpenServerlessDBExtranetAccessRequest: OpenServerlessDBExtranetAccessRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    DeleteServerlessDBInstanceResponse: DeleteServerlessDBInstanceResponse,
    DeleteLogBackupResponse: DeleteLogBackupResponse,
    ModifyReadOnlyGroupConfigRequest: ModifyReadOnlyGroupConfigRequest,
    BackupSummary: BackupSummary,
    AddDBInstanceToReadOnlyGroupRequest: AddDBInstanceToReadOnlyGroupRequest,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    RemoveDBInstanceFromReadOnlyGroupRequest: RemoveDBInstanceFromReadOnlyGroupRequest,
    CreateAccountRequest: CreateAccountRequest,
    InitDBInstancesResponse: InitDBInstancesResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    DescribeMaintainTimeWindowResponse: DescribeMaintainTimeWindowResponse,
    DescribeDefaultParametersRequest: DescribeDefaultParametersRequest,
    DescribeDedicatedClustersResponse: DescribeDedicatedClustersResponse,
    RenewInstanceRequest: RenewInstanceRequest,
    DescribeBackupOverviewRequest: DescribeBackupOverviewRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    ModifyBaseBackupExpireTimeResponse: ModifyBaseBackupExpireTimeResponse,
    UpgradeDBInstanceMajorVersionResponse: UpgradeDBInstanceMajorVersionResponse,
    ModifyBackupDownloadRestrictionRequest: ModifyBackupDownloadRestrictionRequest,
    DBInstanceNetInfo: DBInstanceNetInfo,
    BackupDownloadRestriction: BackupDownloadRestriction,
    ModifyDBInstanceDeploymentRequest: ModifyDBInstanceDeploymentRequest,
    DeleteReadOnlyGroupNetworkAccessRequest: DeleteReadOnlyGroupNetworkAccessRequest,
    DescribeBackupDownloadRestrictionRequest: DescribeBackupDownloadRestrictionRequest,
    ZoneInfo: ZoneInfo,
    CreateDatabaseRequest: CreateDatabaseRequest,
    NormalQueryItem: NormalQueryItem,
    Tag: Tag,
    DescribeBackupSummariesRequest: DescribeBackupSummariesRequest,
    CreateBackupPlanRequest: CreateBackupPlanRequest,
    CloseServerlessDBExtranetAccessRequest: CloseServerlessDBExtranetAccessRequest,
    CreateBaseBackupResponse: CreateBaseBackupResponse,
    LockAccountResponse: LockAccountResponse,
    CloneDBInstanceResponse: CloneDBInstanceResponse,
    ModifyDBInstanceReadOnlyGroupRequest: ModifyDBInstanceReadOnlyGroupRequest,
    AddDBInstanceToReadOnlyGroupResponse: AddDBInstanceToReadOnlyGroupResponse,
    EncryptionKey: EncryptionKey,
    BaseBackup: BaseBackup,
    CreateReadOnlyDBInstanceResponse: CreateReadOnlyDBInstanceResponse,
    DescribeAvailableRecoveryTimeRequest: DescribeAvailableRecoveryTimeRequest,
    DescribeTasksRequest: DescribeTasksRequest,
    DescribeDBInstanceParametersRequest: DescribeDBInstanceParametersRequest,
    DescribeOrdersResponse: DescribeOrdersResponse,
    DescribeBackupDownloadURLResponse: DescribeBackupDownloadURLResponse,
    OpenServerlessDBExtranetAccessResponse: OpenServerlessDBExtranetAccessResponse,
    ModifyMaintainTimeWindowResponse: ModifyMaintainTimeWindowResponse,
    InquiryPriceCreateDBInstancesResponse: InquiryPriceCreateDBInstancesResponse,
    Version: Version,
    CreateDBInstanceNetworkAccessRequest: CreateDBInstanceNetworkAccessRequest,
    ModifySwitchTimePeriodResponse: ModifySwitchTimePeriodResponse,
    TaskSet: TaskSet,
    InquiryPriceCreateDBInstancesRequest: InquiryPriceCreateDBInstancesRequest,
    DescribeDefaultParametersResponse: DescribeDefaultParametersResponse,
    ServerlessDBInstanceNetInfo: ServerlessDBInstanceNetInfo,
    DescribeBackupPlansResponse: DescribeBackupPlansResponse,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    ReadOnlyGroup: ReadOnlyGroup,
    ModifyDBInstanceSpecRequest: ModifyDBInstanceSpecRequest,
    ModifyAccountRemarkResponse: ModifyAccountRemarkResponse,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    SpecInfo: SpecInfo,
    ModifyMaintainTimeWindowRequest: ModifyMaintainTimeWindowRequest,
    ModifyBackupDownloadRestrictionResponse: ModifyBackupDownloadRestrictionResponse,
    ParamVersionRelation: ParamVersionRelation,
    DescribeLogBackupsRequest: DescribeLogBackupsRequest,
    SetAutoRenewFlagResponse: SetAutoRenewFlagResponse,
    ModifyPrivilege: ModifyPrivilege,
    NetworkAccess: NetworkAccess,
    DescribeDBInstanceAttributeRequest: DescribeDBInstanceAttributeRequest,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    RemoveDBInstanceFromReadOnlyGroupResponse: RemoveDBInstanceFromReadOnlyGroupResponse,
    RawSlowQuery: RawSlowQuery,
    DescribeDatabaseObjectsRequest: DescribeDatabaseObjectsRequest,
    DescribeParameterTemplatesResponse: DescribeParameterTemplatesResponse,
    ParamSpecRelation: ParamSpecRelation,
    DatabaseObject: DatabaseObject,
    UpgradeDBInstanceKernelVersionRequest: UpgradeDBInstanceKernelVersionRequest,
    SwitchDBInstancePrimaryResponse: SwitchDBInstancePrimaryResponse,
    ModifyReadOnlyDBInstanceWeightResponse: ModifyReadOnlyDBInstanceWeightResponse,
    ModifyDBInstanceHAConfigRequest: ModifyDBInstanceHAConfigRequest,
    PgDeal: PgDeal,
    DeleteReadOnlyGroupNetworkAccessResponse: DeleteReadOnlyGroupNetworkAccessResponse,
    DescribeMaintainTimeWindowRequest: DescribeMaintainTimeWindowRequest,
    DescribeBackupSummariesResponse: DescribeBackupSummariesResponse,
    DescribeDBErrlogsRequest: DescribeDBErrlogsRequest,
    DBBackup: DBBackup,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    DeleteBackupPlanRequest: DeleteBackupPlanRequest,
    CloneDBInstanceRequest: CloneDBInstanceRequest,
    DeleteParameterTemplateRequest: DeleteParameterTemplateRequest,
    DescribeClassesRequest: DescribeClassesRequest,
    DescribeParamsEventRequest: DescribeParamsEventRequest,
    EventInfo: EventInfo,
    CreateInstancesResponse: CreateInstancesResponse,
    AnalysisItems: AnalysisItems,
    Xlog: Xlog,
    DescribeServerlessDBInstancesRequest: DescribeServerlessDBInstancesRequest,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeSlowQueryListResponse: DescribeSlowQueryListResponse,
    ServerlessDBInstance: ServerlessDBInstance,
    CreateReadOnlyGroupRequest: CreateReadOnlyGroupRequest,
    ModifyDBInstanceSSLConfigResponse: ModifyDBInstanceSSLConfigResponse,
    DescribeParamsEventResponse: DescribeParamsEventResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeDedicatedClustersRequest: DescribeDedicatedClustersRequest,
    CloseServerlessDBExtranetAccessResponse: CloseServerlessDBExtranetAccessResponse,
    EventItem: EventItem,
    RestartDBInstanceRequest: RestartDBInstanceRequest,
    DescribeDBInstanceHAConfigRequest: DescribeDBInstanceHAConfigRequest,
    CreateParameterTemplateResponse: CreateParameterTemplateResponse,
    ParamInfo: ParamInfo,
    DescribeLogBackupsResponse: DescribeLogBackupsResponse,
    Detail: Detail,
    SecurityGroup: SecurityGroup,
    IsolateDBInstancesResponse: IsolateDBInstancesResponse,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    InquiryPriceUpgradeDBInstanceRequest: InquiryPriceUpgradeDBInstanceRequest,
    DescribeDBInstanceHAConfigResponse: DescribeDBInstanceHAConfigResponse,
    DescribeDatabaseObjectsResponse: DescribeDatabaseObjectsResponse,
    IsolateDBInstancesRequest: IsolateDBInstancesRequest,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    DescribeDBInstanceSSLConfigResponse: DescribeDBInstanceSSLConfigResponse,
    ModifyParameterTemplateRequest: ModifyParameterTemplateRequest,
    DeleteAccountRequest: DeleteAccountRequest,
    UpgradeDBInstanceKernelVersionResponse: UpgradeDBInstanceKernelVersionResponse,
    InquiryPriceRenewDBInstanceResponse: InquiryPriceRenewDBInstanceResponse,
    DescribeSlowQueryAnalysisRequest: DescribeSlowQueryAnalysisRequest,
    ErrLogDetail: ErrLogDetail,
    DescribeServerlessDBInstancesResponse: DescribeServerlessDBInstancesResponse,
    DescribeBackupOverviewResponse: DescribeBackupOverviewResponse,
    DescribeParameterTemplatesRequest: DescribeParameterTemplatesRequest,
    InitDBInstancesRequest: InitDBInstancesRequest,
    DescribeClassesResponse: DescribeClassesResponse,
    DeleteDBInstanceNetworkAccessRequest: DeleteDBInstanceNetworkAccessRequest,
    ModifyDBInstanceDeploymentResponse: ModifyDBInstanceDeploymentResponse,
    UnlockAccountRequest: UnlockAccountRequest,
    DBInstance: DBInstance,
    DeleteParameterTemplateResponse: DeleteParameterTemplateResponse,
    ModifyReadOnlyDBInstanceWeightRequest: ModifyReadOnlyDBInstanceWeightRequest,
    ModifyAccountPrivilegesResponse: ModifyAccountPrivilegesResponse,
    Database: Database,
    DeleteReadOnlyGroupRequest: DeleteReadOnlyGroupRequest,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    RestartDBInstanceResponse: RestartDBInstanceResponse,
    Filter: Filter,
    DescribeReadOnlyGroupsRequest: DescribeReadOnlyGroupsRequest,
    DescribeBaseBackupsResponse: DescribeBaseBackupsResponse,
    ModifyDBInstanceParametersResponse: ModifyDBInstanceParametersResponse,
    DescribeDBVersionsResponse: DescribeDBVersionsResponse,
    ModifyDBInstanceSSLConfigRequest: ModifyDBInstanceSSLConfigRequest,
    DatabasePrivilege: DatabasePrivilege,
    UnlockAccountResponse: UnlockAccountResponse,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DBNode: DBNode,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    UpgradeDBInstanceMajorVersionRequest: UpgradeDBInstanceMajorVersionRequest,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    DescribeBackupDownloadRestrictionResponse: DescribeBackupDownloadRestrictionResponse,
    CreateReadOnlyDBInstanceRequest: CreateReadOnlyDBInstanceRequest,
    DescribeCloneDBInstanceSpecResponse: DescribeCloneDBInstanceSpecResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    CreateServerlessDBInstanceResponse: CreateServerlessDBInstanceResponse,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    DescribeProductConfigResponse: DescribeProductConfigResponse,
    DescribeOrdersRequest: DescribeOrdersRequest,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    ModifyParameterTemplateResponse: ModifyParameterTemplateResponse,
    DescribeEncryptionKeysRequest: DescribeEncryptionKeysRequest,
    LogBackup: LogBackup,
    RebalanceReadOnlyGroupRequest: RebalanceReadOnlyGroupRequest,
    ModifyBackupPlanResponse: ModifyBackupPlanResponse,
    DestroyDBInstanceRequest: DestroyDBInstanceRequest,
    CreateServerlessDBInstanceRequest: CreateServerlessDBInstanceRequest,
    InquiryPriceRenewDBInstanceRequest: InquiryPriceRenewDBInstanceRequest,
    CreateReadOnlyGroupResponse: CreateReadOnlyGroupResponse,
    DeleteDBInstanceNetworkAccessResponse: DeleteDBInstanceNetworkAccessResponse,
    ModifyAccountPrivilegesRequest: ModifyAccountPrivilegesRequest,
    DeleteServerlessDBInstanceRequest: DeleteServerlessDBInstanceRequest,
    ModifyReadOnlyGroupConfigResponse: ModifyReadOnlyGroupConfigResponse,
    AccountInfo: AccountInfo,
    ModifyAccountRemarkRequest: ModifyAccountRemarkRequest,
    DescribeParameterTemplateAttributesRequest: DescribeParameterTemplateAttributesRequest,
    DescribeDBErrlogsResponse: DescribeDBErrlogsResponse,
    ModifyBackupPlanRequest: ModifyBackupPlanRequest,
    DeleteBaseBackupRequest: DeleteBaseBackupRequest,
    ParamEntry: ParamEntry,
    InquiryPriceUpgradeDBInstanceResponse: InquiryPriceUpgradeDBInstanceResponse,
    DisIsolateDBInstancesResponse: DisIsolateDBInstancesResponse,
    CreateParameterTemplateRequest: CreateParameterTemplateRequest,
    DescribeDBInstanceSSLConfigRequest: DescribeDBInstanceSSLConfigRequest,
    ModifyDatabaseOwnerResponse: ModifyDatabaseOwnerResponse,
    ModifySwitchTimePeriodRequest: ModifySwitchTimePeriodRequest,
    CreateAccountResponse: CreateAccountResponse,
    DescribeSlowQueryListRequest: DescribeSlowQueryListRequest,
    DescribeCloneDBInstanceSpecRequest: DescribeCloneDBInstanceSpecRequest,
    RegionInfo: RegionInfo,
    ModifyDatabaseOwnerRequest: ModifyDatabaseOwnerRequest,
    DisIsolateDBInstancesRequest: DisIsolateDBInstancesRequest,
    CreateBackupPlanResponse: CreateBackupPlanResponse,
    LockAccountRequest: LockAccountRequest,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    DescribeDBInstanceSecurityGroupsRequest: DescribeDBInstanceSecurityGroupsRequest,
    DescribeBackupPlansRequest: DescribeBackupPlansRequest,
    ModifyBaseBackupExpireTimeRequest: ModifyBaseBackupExpireTimeRequest,
    ModifyDBInstanceHAConfigResponse: ModifyDBInstanceHAConfigResponse,
    CreateDatabaseResponse: CreateDatabaseResponse,
    RebalanceReadOnlyGroupResponse: RebalanceReadOnlyGroupResponse,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeSlowQueryAnalysisResponse: DescribeSlowQueryAnalysisResponse,
    ModifyDBInstanceParametersRequest: ModifyDBInstanceParametersRequest,
    DedicatedCluster: DedicatedCluster,
    ServerlessDBAccount: ServerlessDBAccount,
    DurationAnalysis: DurationAnalysis,
    DescribeDBSlowlogsResponse: DescribeDBSlowlogsResponse,
    DescribeAccountPrivilegesRequest: DescribeAccountPrivilegesRequest,
    DescribeReadOnlyGroupsResponse: DescribeReadOnlyGroupsResponse,
    RestoreDBInstanceObjectsRequest: RestoreDBInstanceObjectsRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    ModifyDBInstanceChargeTypeRequest: ModifyDBInstanceChargeTypeRequest,
    DescribeParameterTemplateAttributesResponse: DescribeParameterTemplateAttributesResponse,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    DescribeDBVersionsRequest: DescribeDBVersionsRequest,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    DescribeDBSlowlogsRequest: DescribeDBSlowlogsRequest,
    DestroyDBInstanceResponse: DestroyDBInstanceResponse,
    DescribeDBInstanceAttributeResponse: DescribeDBInstanceAttributeResponse,
    DeleteLogBackupRequest: DeleteLogBackupRequest,
    DeleteBaseBackupResponse: DeleteBaseBackupResponse,
    PolicyRule: PolicyRule,
    ModifyDBInstanceSpecResponse: ModifyDBInstanceSpecResponse,
    DescribeBackupDownloadURLRequest: DescribeBackupDownloadURLRequest,
    DescribeDBXlogsResponse: DescribeDBXlogsResponse,
    ModifyDBInstanceChargeTypeResponse: ModifyDBInstanceChargeTypeResponse,
    DescribeBaseBackupsRequest: DescribeBaseBackupsRequest,
    DescribeEncryptionKeysResponse: DescribeEncryptionKeysResponse,
    CreateReadOnlyGroupNetworkAccessResponse: CreateReadOnlyGroupNetworkAccessResponse,
    CreateDBInstancesResponse: CreateDBInstancesResponse,
    DeleteAccountResponse: DeleteAccountResponse,

}
