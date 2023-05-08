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
 * CreateDBInstances request structure.
 * @class
 */
class CreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchasable specification ID, which can be obtained through the `SpecCode` field in the returned value of the `DescribeProductConfig` API.
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
         * PostgreSQL version. If it is specified, an instance running the latest kernel of PostgreSQL `DBVersion` will be created. You must pass in at least one of the following parameters: DBVersion, DBMajorVersion, DBKernelVersion.
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
         * PostgreSQL major version. If it is specified, an instance running the latest kernel of PostgreSQL `DBMajorVersion` will be created. You must pass in at least one of the following parameters: DBMajorVersion, DBVersion, DBKernelVersion.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * PostgreSQL kernel version. If it is specified, an instance running the latest kernel of PostgreSQL `DBKernelVersion` will be created. You must pass in one of the following parameters: DBKernelVersion, DBVersion, DBMajorVersion.
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
 * DescribeDatabases request structure.
 * @class
 */
class DescribeDatabasesRequest extends  AbstractModel {
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
         * RO group ID in the format of pgro-4t9c6g7k.
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
         * Instance ID in the format of postgres-6fego161
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Number of entries returned per page. Default value: 10. Value range: 1–100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Data offset, which starts from 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether to sort by creation time or username. Valid values: `createTime` (sort by creation time), `name` (sort by username)
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Whether returns are sorted in ascending or descending order. Valid values: `desc` (descending), `asc` (ascending)
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
         * Instance ID in the format of postgres-hez4fh0v
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Whether to enable public network access over IPv6 address. Valid values: 1 (yes), 0 (no)
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
         * Purchasable specification ID, which can be obtained through the `SpecCode` field in the returned value of the `DescribeProductConfig` API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * The number of instances purchased at a time. Value range: 1-10.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Valid period in months of purchased instances. Valid values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`. This parameter is set to `1` when the pay-as-you-go billing mode is used.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Availability zone ID, which can be obtained through the `Zone` field in the returned value of the `DescribeZones` API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance character set. Valid values: `UTF8`, `LATIN1`.
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * Instance root account name
         * @type {string || null}
         */
        this.AdminName = null;

        /**
         * Instance root account password
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * PostgreSQL version. If it is specified, an instance running the latest kernel of PostgreSQL `DBVersion` will be created. You must pass in at least one of the following parameters: DBVersion, DBMajorVersion, DBKernelVersion.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Instance billing mode. Valid values: `PREPAID` (monthly subscription), `POSTPAID_BY_HOUR` (pay-as-you-go).
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Whether to automatically use vouchers. Valid values: `1` (yes), `0` (no). Default value: `0`.
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list. Currently, you can specify only one voucher.
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of a subnet in the VPC specified by `VpcId`
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Renewal flag. Valid values: `0` (manual renewal), `1` (auto-renewal). Default value: `0`.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Campaign ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether to support IPv6 address access. Valid values: `1` (yes), `0` (no). Default value: `0`
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * The information of tags to be associated with instances. This parameter is left empty by default.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * Security group IDs
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * PostgreSQL major version. Valid values: `10`, `11`, `12`, `13`. If it is specified, an instance running the latest kernel of PostgreSQL `DBMajorVersion` will be created. You must pass in at least one of the following parameters: DBMajorVersion, DBVersion, DBKernelVersion.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * PostgreSQL kernel version. If it is specified, an instance running the latest kernel of PostgreSQL `DBKernelVersion` will be created. You must pass in one of the following parameters: DBKernelVersion, DBVersion, DBMajorVersion.
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * Instance node information, which is required if you purchase a multi-AZ deployed instance.
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * Whether to support transparent data encryption. Valid values: 1 (yes), 0 (no). Default value: 0.
         * @type {number || null}
         */
        this.NeedSupportTDE = null;

        /**
         * KeyId of custom key, which is required if you select custom key encryption. It is also the unique CMK identifier.
         * @type {string || null}
         */
        this.KMSKeyId = null;

        /**
         * The region where the KMS service is enabled. When `KMSRegion` is left empty, the KMS of the current region will be enabled by default. If the current region is not supported, you need to select another region supported by KMS.
         * @type {string || null}
         */
        this.KMSRegion = null;

        /**
         * Database engine. Valid values:
1. `postgresql` (TencentDB for PostgreSQL)
2. `mssql_compatible`（MSSQL compatible-TencentDB for PostgreSQL)
Default value: `postgresql`
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * Configuration information of database engine in the following format:
{"$key1":"$value1", "$key2":"$value2"}

Valid values:
1. mssql_compatible engine：
`migrationMode`: Database mode. Valid values: `single-db` (single-database mode), `multi-db` (multi-database mode). Default value: `single-db`.
`defaultLocale`: Default locale, which can’t be modified after the initialization. Default value: `en_US`. Valid values:
"af_ZA", "sq_AL", "ar_DZ", "ar_BH", "ar_EG", "ar_IQ", "ar_JO", "ar_KW", "ar_LB", "ar_LY", "ar_MA", "ar_OM", "ar_QA", "ar_SA", "ar_SY", "ar_TN", "ar_AE", "ar_YE", "hy_AM", "az_Cyrl_AZ", "az_Latn_AZ", "eu_ES", "be_BY", "bg_BG", "ca_ES", "zh_HK", "zh_MO", "zh_CN", "zh_SG", "zh_TW", "hr_HR", "cs_CZ", "da_DK", "nl_BE", "nl_NL", "en_AU", "en_BZ", "en_CA", "en_IE", "en_JM", "en_NZ", "en_PH", "en_ZA", "en_TT", "en_GB", "en_US", "en_ZW", "et_EE", "fo_FO", "fa_IR", "fi_FI", "fr_BE", "fr_CA", "fr_FR", "fr_LU", "fr_MC", "fr_CH", "mk_MK", "ka_GE", "de_AT", "de_DE", "de_LI", "de_LU", "de_CH", "el_GR", "gu_IN", "he_IL", "hi_IN", "hu_HU", "is_IS", "id_ID", "it_IT", "it_CH", "ja_JP", "kn_IN", "kok_IN", "ko_KR", "ky_KG", "lv_LV", "lt_LT", "ms_BN", "ms_MY", "mr_IN", "mn_MN", "nb_NO", "nn_NO", "pl_PL", "pt_BR", "pt_PT", "pa_IN", "ro_RO", "ru_RU", "sa_IN", "sr_Cyrl_RS", "sr_Latn_RS", "sk_SK", "sl_SI", "es_AR", "es_BO", "es_CL", "es_CO", "es_CR", "es_DO", "es_EC", "es_SV", "es_GT", "es_HN", "es_MX", "es_NI", "es_PA", "es_PY","es_PE", "es_PR", "es_ES", "es_TRADITIONAL", "es_UY", "es_VE", "sw_KE", "sv_FI", "sv_SE", "tt_RU", "te_IN", "th_TH", "tr_TR", "uk_UA", "ur_IN", "ur_PK", "uz_Cyrl_UZ", "uz_Latn_UZ", "vi_VN".
`serverCollationName`: Name of collation rule, which can’t be modified after the initialization. Default value: `sql_latin1_general_cp1_ci_as`. Valid values:
"bbf_unicode_general_ci_as", "bbf_unicode_cp1_ci_as", "bbf_unicode_CP1250_ci_as", "bbf_unicode_CP1251_ci_as", "bbf_unicode_cp1253_ci_as", "bbf_unicode_cp1254_ci_as", "bbf_unicode_cp1255_ci_as", "bbf_unicode_cp1256_ci_as", "bbf_unicode_cp1257_ci_as", "bbf_unicode_cp1258_ci_as", "bbf_unicode_cp874_ci_as", "sql_latin1_general_cp1250_ci_as", "sql_latin1_general_cp1251_ci_as", "sql_latin1_general_cp1_ci_as", "sql_latin1_general_cp1253_ci_as", "sql_latin1_general_cp1254_ci_as", "sql_latin1_general_cp1255_ci_as","sql_latin1_general_cp1256_ci_as", "sql_latin1_general_cp1257_ci_as", "sql_latin1_general_cp1258_ci_as", "chinese_prc_ci_as", "cyrillic_general_ci_as", "finnish_swedish_ci_as", "french_ci_as", "japanese_ci_as", "korean_wansung_ci_as", "latin1_general_ci_as", "modern_spanish_ci_as", "polish_ci_as", "thai_ci_as", "traditional_spanish_ci_as", "turkish_ci_as", "ukrainian_ci_as", "vietnamese_ci_as".
         * @type {string || null}
         */
        this.DBEngineConfig = null;

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
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.AdminName = 'AdminName' in params ? params.AdminName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
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

        if (params.DBNodeSet) {
            this.DBNodeSet = new Array();
            for (let z in params.DBNodeSet) {
                let obj = new DBNode();
                obj.deserialize(params.DBNodeSet[z]);
                this.DBNodeSet.push(obj);
            }
        }
        this.NeedSupportTDE = 'NeedSupportTDE' in params ? params.NeedSupportTDE : null;
        this.KMSKeyId = 'KMSKeyId' in params ? params.KMSKeyId : null;
        this.KMSRegion = 'KMSRegion' in params ? params.KMSRegion : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;
        this.DBEngineConfig = 'DBEngineConfig' in params ? params.DBEngineConfig : null;

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
         * Task ID.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
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
 * DescribeCloneDBInstanceSpec request structure.
 * @class
 */
class DescribeCloneDBInstanceSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Basic backup set ID. Either this parameter or `RecoveryTargetTime` must be passed in. If both are passed in, only this parameter takes effect.
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
         * Retention period of basic backups
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
 * DeleteLogBackup response structure.
 * @class
 */
class DeleteLogBackupResponse extends  AbstractModel {
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
         * Number of manually created full backups of an instance
         * @type {number || null}
         */
        this.ManualBaseBackupCount = null;

        /**
         * Size of manually created full backups of an instance
         * @type {number || null}
         */
        this.ManualBaseBackupSize = null;

        /**
         * Number of automatically created full backups of an instance
         * @type {number || null}
         */
        this.AutoBaseBackupCount = null;

        /**
         * Size of automatically created full backups of an instance
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
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
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
 * ModifyBaseBackupExpireTime response structure.
 * @class
 */
class ModifyBaseBackupExpireTimeResponse extends  AbstractModel {
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
         * Database connection protocol type. Valid values: `postgresql`, `mssql` (MSSQL-compatible)
Note: This field may return null, indicating that no valid values can be obtained.
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
         * Type of the network restrictions for downloading backup files. Valid values: `NONE` (backups can be downloaded over both private and public networks), `INTRANET` (backups can only be downloaded over the private network), `CUSTOMIZE` (backups can be downloaded over specified VPCs or at specified IPs).
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
         * Instance node information.
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * Switch time. Valid values: `0` (switch now), `1` (switch at a specified time), `2` (switch during maintenance time). Default value: `0`.
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
 * DescribeDBInstanceAttribute request structure.
 * @class
 */
class DescribeDBInstanceAttributeRequest extends  AbstractModel {
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
 * CloneDBInstance response structure.
 * @class
 */
class CloneDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * Bill ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * ID of the cloned instance, which will be returned only when the instance is pay-as-you-go.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBInstanceId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Full backup information of a database
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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
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
 * DescribeDBInstanceParameters request structure.
 * @class
 */
class DescribeDBInstanceParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
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
 * ModifyParameterTemplate request structure.
 * @class
 */
class ModifyParameterTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID, which uniquely identifies a parameter template and cannot be modified.
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
 * InquiryPriceCreateDBInstances response structure.
 * @class
 */
class InquiryPriceCreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Published price in US Cent
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discounted total amount in US Cent
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Currency, such as USD.
         * @type {string || null}
         */
        this.Currency = null;

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
         * List of versions to which this database version (`DBKernelVersion`) can be upgraded.
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
         * Instance ID in the format of postgres-6bwgamo3.
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
 * InquiryPriceCreateDBInstances request structure.
 * @class
 */
class InquiryPriceCreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID, which can be obtained through the `Zone` field in the returned value of the `DescribeZones` API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Specification ID, which can be obtained through the `SpecCode` field in the returned value of the `DescribeProductConfig` API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Storage capacity size in GB.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Number of instances. Maximum value: 100. If you need to create more instances at a time, please contact customer service.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Length of purchase in months. Currently, only 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, and 36 are supported.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * [Disused] Billing ID, which can be obtained through the `Pid` field in the returned value of the `DescribeProductConfig` API.
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Instance billing type. Valid value: POSTPAID_BY_HOUR (pay-as-you-go)
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Instance type. Default value: `primary`. Valid values:
`primary` (dual-server high-availability, one-primary-one-standby)
`readonly` (read-only instance)
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 
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
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DBEngine = 'DBEngine' in params ? params.DBEngine : null;

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
         * Filter instances using one or more criteria. Valid filter names:
db-instance-id: filter by instance ID (in string format)
db-instance-name: filter by instance name (in string format)
db-project-id: filter by project ID (in integer format)
db-pay-mode: filter by billing mode (in string format)
db-tag-key: filter by tag key (in string format)
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
         * Sorting metric, such as instance name or creation time. Valid values: DBInstanceId, CreateTime, Name, EndTime
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
         * Whether to automatically use vouchers. Valid values: `1` (yes), `0` (no). Default value: `0`.
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
         * Switch time after instance configurations are modified. Valid values: `0` (switch now), `1` (switch at a specified time), `2` (switch during maintenance time). Default value: `0`.
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
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchStartTime = 'SwitchStartTime' in params ? params.SwitchStartTime : null;
        this.SwitchEndTime = 'SwitchEndTime' in params ? params.SwitchEndTime : null;

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
 * Parameter information of each version
 * @class
 */
class ParamVersionRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The kernel version that corresponds to the parameter information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * Default parameter value under the kernel version and specification of the instance
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Unit of the parameter value. If the parameter has no unit, this field will return null.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * The maximum value of the `integer` or `real` parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * The minimum value of the `integer` or `real` parameter
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Network resource ID, instance ID, or RO group ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource type. Valid values: `1` (instance), `2` (RO group)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * VPC ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * IPv4 address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * IPv6 address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * Access port
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Subnet ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Network status. Valid values: `1` (applying), `2` (in use), `3` (deleting), `4` (deleted)
Note: this field may return `null`, indicating that no valid values can be obtained.
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
 * ResetAccountPassword response structure.
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Parameter information of each specification
 * @class
 */
class ParamSpecRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The specification that corresponds to the parameter information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Memory = null;

        /**
         * The default parameter value under this specification
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Unit of the parameter value. If the parameter has no unit, this field will return null.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * The maximum value of the `integer` or `real` parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Max = null;

        /**
         * The minimum value of the `integer` or `real` parameter
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Instance ID in the format of postgres-5bq3wfjd
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Query start time in the format of 2018-01-01 00:00:00, which cannot be more than 7 days ago
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of 2018-01-01 00:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Database name
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Search keyword
         * @type {Array.<string> || null}
         */
        this.SearchKeys = null;

        /**
         * Number of entries returned per page. Value range: 1-100
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
 * CloneDBInstance request structure.
 * @class
 */
class CloneDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the original instance to be cloned.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Purchasable specification ID, which can be obtained through the `SpecCode` field in the returned value of the `DescribeProductConfig` API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Instance storage capacity in GB.
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Valid period in months of the purchased instance. Valid values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`. This parameter is set to `1` when the pay-as-you-go billing mode is used.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Renewal flag. Valid values: `0` (manual renewal), `1` (auto-renewal). Default value: `0`.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * VPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ID of a subnet in the VPC specified by `VpcId`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Name of the purchased instance.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Instance billing mode. Valid values: `PREPAID` (monthly subscription), `POSTPAID_BY_HOUR` (pay-as-you-go).
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Security group ID.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * The information of tags to be bound with the purchased instance. This parameter is left empty by default.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * This parameter is required if you purchase a multi-AZ deployed instance.
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * Whether to automatically use vouchers. Valid values: `1` (yes), `0` (no). Default value: `0`.
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
         * Basic backup set ID.
         * @type {string || null}
         */
        this.BackupSetId = null;

        /**
         * Restoration point in time.
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
 * Parameter modification event information
 * @class
 */
class EventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Original parameter value
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * New parameter value in this modification event
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewValue = null;

        /**
         * Start time of parameter modification
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Start time when the modified parameter takes effect
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * Modification status
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Operator (generally, the value is the UIN of a sub-user)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Event log
Note: this field may return `null`, indicating that no valid values can be obtained.
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
         * Query conditions
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
         * The total number of slow query statements during the specified period of time.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Analysis of the execution time of slow query statements by classifying them to different time ranges. These slow query statements fall within the query range you specified in the request parameters.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<DurationAnalysis> || null}
         */
        this.DurationAnalysis = null;

        /**
         * The list of slow query details during the specified period of time.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RawSlowQuery> || null}
         */
        this.RawSlowQueryList = null;

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
         * The list of security groups to be associated with the instance or RO groups
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
 * CloseServerlessDBExtranetAccess response structure.
 * @class
 */
class CloseServerlessDBExtranetAccessResponse extends  AbstractModel {
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
 * Modification details of one parameter
 * @class
 */
class EventItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * The number of modification events
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * Modification event details
Note: this field may return `null`, indicating that no valid values can be obtained.
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
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ID = null;

        /**
         * Parameter name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value type of the parameter. Valid values: `integer`, `real` (floating-point), `bool`, `enum`, `mutil_enum` (this type of parameter can be set to multiple enumerated values).
For an `integer` or `real` parameter, the `Min` field represents the minimum value and the `Max` field the maximum value. 
For a `bool` parameter, the valid values include `true` and `false`; 
For an `enum` or `mutil_enum` parameter, the `EnumValue` field represents the valid values.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ParamValueType = null;

        /**
         * Unit of the parameter value. If the parameter has no unit, this field will return null.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Default value of the parameter, which is returned as a string
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Current value of the parameter, which is returned as a string
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * The maximum value of the `integer` or `real` parameter
Note: this field may return `null`, indicating that no valid values can be obtained.
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
         * The minimum value of the `integer` or `real` parameter
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Min = null;

        /**
         * Parameter description in Chinese
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ParamDescriptionCH = null;

        /**
         * Parameter description in English
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ParamDescriptionEN = null;

        /**
         * Whether to restart the instance for the modified parameter to take effect. Valid values: `true` (yes), `false` (no)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.NeedReboot = null;

        /**
         * Parameter category in Chinese
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClassificationCN = null;

        /**
         * Parameter category in English
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ClassificationEN = null;

        /**
         * Whether the parameter is related to specifications. Valid values: `true` (yes), `false` (no)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.SpecRelated = null;

        /**
         * Whether it is a key parameter. Valid values: `true` (yes, and modifying it may affect instance performance), `false` (no)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Advanced = null;

        /**
         * The last modified time of the parameter
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastModifyTime = null;

        /**
         * Primary-standby constraint. Valid values: `0` (no constraint), `1` (The parameter value of the standby server must be greater than that of the primary server), `2` (The parameter value of the primary server must be greater than that of the standby server.)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StandbyRelated = null;

        /**
         * Associated parameter version information, which refers to the detailed parameter information of the kernel version.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ParamVersionRelation> || null}
         */
        this.VersionRelationSet = null;

        /**
         * Associated parameter specification information, which refers to the detailed parameter information of the specifications.
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
 * OpenDBExtranetAccess response structure.
 * @class
 */
class OpenDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
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
         * New name of database instance
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
 * KMS key information
 * @class
 */
class EncryptionKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Encrypted KeyId of KMS instance
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Encryption key alias of KMS instance 
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.KeyAlias = null;

        /**
         * Instance DEK ciphertext
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DEKCipherTextBlob = null;

        /**
         * Whether the key is enabled. Valid values: `1` (yes), `0` (no)
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.IsEnabled = null;

        /**
         * Region where KMS key resides
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.KeyRegion = null;

        /**
         * DEK key creation time
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyAlias = 'KeyAlias' in params ? params.KeyAlias : null;
        this.DEKCipherTextBlob = 'DEKCipherTextBlob' in params ? params.DEKCipherTextBlob : null;
        this.IsEnabled = 'IsEnabled' in params ? params.IsEnabled : null;
        this.KeyRegion = 'KeyRegion' in params ? params.KeyRegion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
         * Start timestamp of the query range in the format of "YYYY-MM-DD HH:mm:ss". The log is retained for seven days by default, so the start timestamp must fall within the retention period.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End timestamp of the query range in the format of "YYYY-MM-DD HH:mm:ss".
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter by database name. This parameter is optional.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Sort by field. Valid values: `CallNum`, `CostTime`, `AvgCostTime`. Default value: `CallNum`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order. Valid values: `asc` (ascending), `desc` (descending). Default value: `desc`.
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Number of entries per page. Value range: [1,100]. Default value: `50`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset. Value range: [0,INF). Default value: `0`.
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
 * Instance details
 * @class
 */
class DBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance region such as ap-guangzhou, which corresponds to the `Region` field of `RegionSet`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance AZ such as ap-guangzhou-3, which corresponds to the `Zone` field of `ZoneSet`
         * @type {string || null}
         */
        this.Zone = null;

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
         * SubnetId
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * Instance status. Valid values: `applying`, `init` (to be initialized), `initing` (initializing), `running`, `limited run`, `isolated`, `recycling`, `recycled`, `job running`, `offline`, `migrating`, `expanding`, `waitSwitch` (waiting for switch), `switching`, `readonly`, `restarting`, `network changing`, upgrading (upgrading kernel version).
         * @type {string || null}
         */
        this.DBInstanceStatus = null;

        /**
         * Assigned instance memory size in GB
         * @type {number || null}
         */
        this.DBInstanceMemory = null;

        /**
         * Assigned instance storage capacity in GB
         * @type {number || null}
         */
        this.DBInstanceStorage = null;

        /**
         * Number of assigned CPUs
         * @type {number || null}
         */
        this.DBInstanceCpu = null;

        /**
         * Purchasable specification ID
         * @type {string || null}
         */
        this.DBInstanceClass = null;

        /**
         * Instance type. 1: primary (master instance), 2: readonly (read-only instance), 3: guard (disaster recovery instance), 4: temp (temp instance)
         * @type {string || null}
         */
        this.DBInstanceType = null;

        /**
         * Instance edition. Currently, only `standard` edition (dual-server high-availability one-master-one-slave edition) is supported
         * @type {string || null}
         */
        this.DBInstanceVersion = null;

        /**
         * Instance database character set
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * PostgreSQL version number
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Instance last modified time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Instance expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Instance isolation time
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * Billing mode. postpaid: pay-as-you-go
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * Whether to renew automatically. 1: yes, 0: no
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Instance network connection information
         * @type {Array.<DBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * Machine type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * User `AppId`
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Instance `Uid`
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * Whether the instance supports IPv6 address access. Valid values: 1 (yes), 0 (no)
         * @type {number || null}
         */
        this.SupportIpv6 = null;

        /**
         * The information of tags associated with instances.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * Primary instance information, which is returned only when the instance is read-only
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * Number of read-only instances
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReadOnlyInstanceNum = null;

        /**
         * The status of a instance in a read-only group
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusInReadonlyGroup = null;

        /**
         * Elimination time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * Database kernel version
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * Network access list of the instance (this field has been deprecated)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<NetworkAccess> || null}
         */
        this.NetworkAccessList = null;

        /**
         * PostgreSQL major version number
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * Instance node information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * Whether the instance supports TDE data encryption. Valid values: 0 (no), 1 (yes)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IsSupportTDE = null;

        /**
         * 
         * @type {string || null}
         */
        this.DBEngine = null;

        /**
         * Configuration information of database engine
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DBEngineConfig = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.DBInstanceMemory = 'DBInstanceMemory' in params ? params.DBInstanceMemory : null;
        this.DBInstanceStorage = 'DBInstanceStorage' in params ? params.DBInstanceStorage : null;
        this.DBInstanceCpu = 'DBInstanceCpu' in params ? params.DBInstanceCpu : null;
        this.DBInstanceClass = 'DBInstanceClass' in params ? params.DBInstanceClass : null;
        this.DBInstanceType = 'DBInstanceType' in params ? params.DBInstanceType : null;
        this.DBInstanceVersion = 'DBInstanceVersion' in params ? params.DBInstanceVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
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
        this.SupportIpv6 = 'SupportIpv6' in params ? params.SupportIpv6 : null;

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
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;

        if (params.NetworkAccessList) {
            this.NetworkAccessList = new Array();
            for (let z in params.NetworkAccessList) {
                let obj = new NetworkAccess();
                obj.deserialize(params.NetworkAccessList[z]);
                this.NetworkAccessList.push(obj);
            }
        }
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;

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
         * Filter condition. The primary ID must be specified in the format of `db-master-instance-id` to filter results, or else `null` will be returned.
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
 * DescribeBackupDownloadURL request structure.
 * @class
 */
class DescribeBackupDownloadURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
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
         * Validity period of a URL, which is 12 hours by default.
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
 * ModifyDBInstanceParameters response structure.
 * @class
 */
class ModifyDBInstanceParametersResponse extends  AbstractModel {
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
 * ModifyDBInstanceSecurityGroups response structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
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
 * Instance node information including node type and AZ.
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
 * CloseDBExtranetAccess response structure.
 * @class
 */
class CloseDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task flow ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
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
         * Purchasable specification ID, which can be obtained through the `SpecCode` field in the returned value of the `DescribeProductConfig` API.
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * Instance storage capacity in GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Number of instances purchased at a time. Value range: 1–100.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Valid period in months of purchased instances. Valid values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`. This parameter is set to `1` when the pay-as-you-go billing mode is used.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * ID of the primary instance to which the read-only replica belongs
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * Availability zone ID, which can be obtained through the `Zone` field in the returned value of the `DescribeZones` API.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * (Disused) You don’t need to specify a version, as the kernel version is as the same as that of the instance.
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * Instance billing mode. Valid value: `POSTPAID_BY_HOUR` (pay-as-you-go). If the source instance is pay-as-you-go, so is the read-only instance.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Whether to automatically use vouchers. Valid values: `1` (yes), `0` (no). Default value: `0`.
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Voucher ID list. Currently, you can specify only one voucher.
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * Renewal flag. Valid values: `0` (manual renewal), `1` (auto-renewal). Default value: `0`.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Special offer ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * Instance name (which will be supported in the future)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether to support IPv6 address access. Valid values: `1` (yes), `0` (no).
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * RO group ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * The information of tags to be bound with the purchased instance, which is left empty by default (type: tag array).
         * @type {Tag || null}
         */
        this.TagList = null;

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
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

        if (params.TagList) {
            let obj = new Tag();
            obj.deserialize(params.TagList)
            this.TagList = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

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
        this.Items = 'Items' in params ? params.Items : null;
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
         * Instance ID in the format of postgres-6r233v55
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Whether to disable public network access over IPv6 address. Valid values: 1 (yes), 0 (no)
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
 * DescribeEncryptionKeys request structure.
 * @class
 */
class DescribeEncryptionKeysRequest extends  AbstractModel {
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Account remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Account status. 1: creating, 2: normal, 3: modifying, 4: resetting password, -1: deleting
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Account creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Account last modified time
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
         * Number of date entries returned for this call
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Error log list
         * @type {Array.<ErrLogDetail> || null}
         */
        this.Details = null;

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
         * Backup retention period in days. Value range: 3-7
         * @type {number || null}
         */
        this.BaseBackupRetentionPeriod = null;

        /**
         * Backup cycle, which means on which days each week the instance will be backed up. The parameter value should be the lowercase names of the days of the week.
         * @type {Array.<string> || null}
         */
        this.BackupPeriod = null;

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
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Base backup ID
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
         * Start timestamp of the query range in the format of "YYYY-MM-DD HH:mm:ss". The log is retained for seven days by default, so the start timestamp must fall within the retention period.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End timestamp of the query range in the format of "YYYY-MM-DD HH:mm:ss".
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter by database name. This parameter is optional.
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * Sorting order. Valid values: `asc` (ascending), `desc` (descending). Default value: `desc`.
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * Sort by field. Valid values: `SessionStartTime` (default), `Duration`.
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Number of entries per page. Value range: [1,100]. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset. Value range: [0,INF). Default value: `0`.
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
 * DisIsolateDBInstances request structure.
 * @class
 */
class DisIsolateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of resource IDs. Note that currently you cannot remove multiple instances from isolation at the same time. Only one instance ID can be passed in here.
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * The valid period (in months) of the monthly-subscribed instance when removing it from isolation
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Whether to use vouchers. Valid values: `true` (yes), `false` (no). Default value: `false`.
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Base backup ID
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
         * Instance ID. Either this parameter or `ReadOnlyGroupId` must be passed in. If both parameters are passed in, `ReadOnlyGroupId` will be ignored.
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * RO group ID. Either this parameter or `DBInstanceId` must be passed in. To query the security groups associated with the RO groups, only pass in `ReadOnlyGroupId`.
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
 * RebalanceReadOnlyGroup response structure.
 * @class
 */
class RebalanceReadOnlyGroupResponse extends  AbstractModel {
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
         * The total number of query results.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Detailed analysis.
         * @type {Detail || null}
         */
        this.Detail = null;

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
         * Instance ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * Parameters to be modified and their new values
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
 * CreateReadOnlyGroupNetworkAccess response structure.
 * @class
 */
class CreateReadOnlyGroupNetworkAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
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
         * Number of date entries returned for this API call.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Account list details.
         * @type {Array.<AccountInfo> || null}
         */
        this.Details = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Number of queried full backups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of full backup details
         * @type {Array.<BaseBackup> || null}
         */
        this.BaseBackupSet = null;

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
         * Filter instances using one or more criteria. Valid filter names:
db-instance-id: Filter by instance ID (in string format).
db-instance-name: Filter by instance name (in string format).
db-instance-ip: Filter by instance VPC IP (in string format).
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
 * DescribeEncryptionKeys response structure.
 * @class
 */
class DescribeEncryptionKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance key list
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<EncryptionKey> || null}
         */
        this.EncryptionKeys = null;

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

        if (params.Detail) {
            let obj = new SlowlogDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Target kernel version, which can be obtained in the `AvailableUpgradeTarget` field returned by the `DescribeDBVersions` API.
         * @type {string || null}
         */
        this.TargetDBKernelVersion = null;

        /**
         * Switch time after the kernel version upgrade. Valid values:
`0` (default value): Switch now.
`1`: Switch at the specified time.
`2`: Switch in the maintenance time.
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
         * Whether to perform a precheck on the current operation of upgrading the instance kernel version. Valid values:
`true`: Performs a precheck without upgrading the kernel version. Check items include request parameters, kernel version compatibility, and instance parameters.
`false` (default value): Sends a normal request and upgrades the kernel version directly after the check is passed.
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

module.exports = {
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    SetAutoRenewFlagRequest: SetAutoRenewFlagRequest,
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
    DescribeCloneDBInstanceSpecRequest: DescribeCloneDBInstanceSpecRequest,
    BackupPlan: BackupPlan,
    OpenServerlessDBExtranetAccessRequest: OpenServerlessDBExtranetAccessRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    DeleteServerlessDBInstanceResponse: DeleteServerlessDBInstanceResponse,
    DeleteLogBackupResponse: DeleteLogBackupResponse,
    ModifyReadOnlyGroupConfigRequest: ModifyReadOnlyGroupConfigRequest,
    BackupSummary: BackupSummary,
    AddDBInstanceToReadOnlyGroupRequest: AddDBInstanceToReadOnlyGroupRequest,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    RemoveDBInstanceFromReadOnlyGroupRequest: RemoveDBInstanceFromReadOnlyGroupRequest,
    InitDBInstancesResponse: InitDBInstancesResponse,
    DescribeDefaultParametersRequest: DescribeDefaultParametersRequest,
    RenewInstanceRequest: RenewInstanceRequest,
    DescribeBackupOverviewRequest: DescribeBackupOverviewRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    ModifyBaseBackupExpireTimeResponse: ModifyBaseBackupExpireTimeResponse,
    DBInstanceNetInfo: DBInstanceNetInfo,
    BackupDownloadRestriction: BackupDownloadRestriction,
    ModifyDBInstanceDeploymentRequest: ModifyDBInstanceDeploymentRequest,
    DeleteReadOnlyGroupNetworkAccessRequest: DeleteReadOnlyGroupNetworkAccessRequest,
    ZoneInfo: ZoneInfo,
    DescribeReadOnlyGroupsResponse: DescribeReadOnlyGroupsResponse,
    NormalQueryItem: NormalQueryItem,
    Tag: Tag,
    DescribeBackupSummariesRequest: DescribeBackupSummariesRequest,
    DescribeDBInstanceAttributeRequest: DescribeDBInstanceAttributeRequest,
    CloseServerlessDBExtranetAccessRequest: CloseServerlessDBExtranetAccessRequest,
    CreateBaseBackupResponse: CreateBaseBackupResponse,
    CloneDBInstanceResponse: CloneDBInstanceResponse,
    ModifyDBInstanceReadOnlyGroupRequest: ModifyDBInstanceReadOnlyGroupRequest,
    AddDBInstanceToReadOnlyGroupResponse: AddDBInstanceToReadOnlyGroupResponse,
    BaseBackup: BaseBackup,
    CreateReadOnlyDBInstanceResponse: CreateReadOnlyDBInstanceResponse,
    DescribeAvailableRecoveryTimeRequest: DescribeAvailableRecoveryTimeRequest,
    DurationAnalysis: DurationAnalysis,
    DescribeDBInstanceParametersRequest: DescribeDBInstanceParametersRequest,
    DescribeOrdersResponse: DescribeOrdersResponse,
    DescribeBackupDownloadURLResponse: DescribeBackupDownloadURLResponse,
    OpenServerlessDBExtranetAccessResponse: OpenServerlessDBExtranetAccessResponse,
    ModifyParameterTemplateRequest: ModifyParameterTemplateRequest,
    InquiryPriceCreateDBInstancesResponse: InquiryPriceCreateDBInstancesResponse,
    Version: Version,
    CreateDBInstanceNetworkAccessRequest: CreateDBInstanceNetworkAccessRequest,
    ModifySwitchTimePeriodResponse: ModifySwitchTimePeriodResponse,
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
    ParamVersionRelation: ParamVersionRelation,
    DescribeLogBackupsRequest: DescribeLogBackupsRequest,
    SetAutoRenewFlagResponse: SetAutoRenewFlagResponse,
    NetworkAccess: NetworkAccess,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    RemoveDBInstanceFromReadOnlyGroupResponse: RemoveDBInstanceFromReadOnlyGroupResponse,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    DescribeParameterTemplatesResponse: DescribeParameterTemplatesResponse,
    ParamSpecRelation: ParamSpecRelation,
    PgDeal: PgDeal,
    DeleteReadOnlyGroupNetworkAccessResponse: DeleteReadOnlyGroupNetworkAccessResponse,
    DescribeBackupSummariesResponse: DescribeBackupSummariesResponse,
    DescribeDBErrlogsRequest: DescribeDBErrlogsRequest,
    DBBackup: DBBackup,
    ServerlessDBAccount: ServerlessDBAccount,
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
    DescribeParamsEventResponse: DescribeParamsEventResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    CloseServerlessDBExtranetAccessResponse: CloseServerlessDBExtranetAccessResponse,
    EventItem: EventItem,
    RestartDBInstanceRequest: RestartDBInstanceRequest,
    DescribeDBInstanceSecurityGroupsResponse: DescribeDBInstanceSecurityGroupsResponse,
    CreateParameterTemplateResponse: CreateParameterTemplateResponse,
    ParamInfo: ParamInfo,
    DescribeLogBackupsResponse: DescribeLogBackupsResponse,
    Detail: Detail,
    SecurityGroup: SecurityGroup,
    IsolateDBInstancesResponse: IsolateDBInstancesResponse,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    InquiryPriceUpgradeDBInstanceRequest: InquiryPriceUpgradeDBInstanceRequest,
    IsolateDBInstancesRequest: IsolateDBInstancesRequest,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    EncryptionKey: EncryptionKey,
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
    DBInstance: DBInstance,
    DeleteParameterTemplateResponse: DeleteParameterTemplateResponse,
    DeleteReadOnlyGroupRequest: DeleteReadOnlyGroupRequest,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    Filter: Filter,
    DescribeReadOnlyGroupsRequest: DescribeReadOnlyGroupsRequest,
    DescribeBackupDownloadURLRequest: DescribeBackupDownloadURLRequest,
    ModifyDBInstanceParametersResponse: ModifyDBInstanceParametersResponse,
    DescribeDBVersionsResponse: DescribeDBVersionsResponse,
    SlowlogDetail: SlowlogDetail,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DBNode: DBNode,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
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
    ModifySwitchTimePeriodRequest: ModifySwitchTimePeriodRequest,
    DescribeSlowQueryListRequest: DescribeSlowQueryListRequest,
    DescribeDBInstanceParametersResponse: DescribeDBInstanceParametersResponse,
    RegionInfo: RegionInfo,
    DisIsolateDBInstancesRequest: DisIsolateDBInstancesRequest,
    RestartDBInstanceResponse: RestartDBInstanceResponse,
    ModifyBaseBackupExpireTimeRequest: ModifyBaseBackupExpireTimeRequest,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    DescribeDBInstanceSecurityGroupsRequest: DescribeDBInstanceSecurityGroupsRequest,
    DescribeBackupPlansRequest: DescribeBackupPlansRequest,
    RebalanceReadOnlyGroupResponse: RebalanceReadOnlyGroupResponse,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeSlowQueryAnalysisResponse: DescribeSlowQueryAnalysisResponse,
    ModifyDBInstanceParametersRequest: ModifyDBInstanceParametersRequest,
    RawSlowQuery: RawSlowQuery,
    CreateReadOnlyGroupNetworkAccessResponse: CreateReadOnlyGroupNetworkAccessResponse,
    DescribeAccountsResponse: DescribeAccountsResponse,
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
    DescribeBaseBackupsResponse: DescribeBaseBackupsResponse,
    DescribeDBXlogsResponse: DescribeDBXlogsResponse,
    DescribeBaseBackupsRequest: DescribeBaseBackupsRequest,
    DescribeEncryptionKeysResponse: DescribeEncryptionKeysResponse,
    DescribeDBSlowlogsResponse: DescribeDBSlowlogsResponse,
    CreateDBInstancesResponse: CreateDBInstancesResponse,
    UpgradeDBInstanceKernelVersionRequest: UpgradeDBInstanceKernelVersionRequest,

}
