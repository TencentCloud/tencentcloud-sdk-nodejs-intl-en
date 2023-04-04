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
 * UpdateProhibitionIntlBatch response structure.
 * @class
 */
class UpdateProhibitionIntlBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The log ID.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntlBatchOperationLogs response structure.
 * @class
 */
class DescribeIntlBatchOperationLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total count.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The log list.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BatchDomainBuyLog> || null}
         */
        this.DomainBatchLogSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.DomainBatchLogSet) {
            this.DomainBatchLogSet = new Array();
            for (let z in params.DomainBatchLogSet) {
                let obj = new BatchDomainBuyLog();
                obj.deserialize(params.DomainBatchLogSet[z]);
                this.DomainBatchLogSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetIntlDomainAutoRenew response structure.
 * @class
 */
class SetIntlDomainAutoRenewResponse extends  AbstractModel {
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
 * DescribeIntlDomainPriceNewList request structure.
 * @class
 */
class DescribeIntlDomainPriceNewListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of domain suffixes for which you want to query prices. This parameter defaults to all suffixes.
         * @type {Array.<string> || null}
         */
        this.TldList = null;

        /**
         * The purchase year of the domains for which you want to query prices. This parameter defaults to all years.
         * @type {Array.<number> || null}
         */
        this.Year = null;

        /**
         * The domain purchase type. Valid values: `new`, `renew`, `redem` (redeem), `tran` (transfer in).
         * @type {Array.<string> || null}
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
        this.TldList = 'TldList' in params ? params.TldList : null;
        this.Year = 'Year' in params ? params.Year : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * CreateIntlDomainBatch request structure.
 * @class
 */
class CreateIntlDomainBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The profile ID.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * The purchase period (years) of the domain. Value range: [1-10]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * The domains (maximum 4,000) to purchase.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The payment method. Valid values: `0` (online payment), `1` (account balance), `2` (package), `3` (offline settlement).
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Whether to enable auto-renewal.
         * @type {boolean || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Whether to enable the transfer prohibition lock.
         * @type {boolean || null}
         */
        this.TransferProhibition = null;

        /**
         * Whether to enable the update prohibition lock.
         * @type {boolean || null}
         */
        this.UpdateProhibition = null;

        /**
         * The custom DNS servers
         * @type {Array.<string> || null}
         */
        this.CustomDns = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.TransferProhibition = 'TransferProhibition' in params ? params.TransferProhibition : null;
        this.UpdateProhibition = 'UpdateProhibition' in params ? params.UpdateProhibition : null;
        this.CustomDns = 'CustomDns' in params ? params.CustomDns : null;

    }
}

/**
 * SendIntlPhoneEmailCode request structure.
 * @class
 */
class SendIntlPhoneEmailCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type. Valid values: `1` (mobile number), `2` (email address).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * The mobile number or email address.
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * CreateIntlPhoneEmail response structure.
 * @class
 */
class CreateIntlPhoneEmailResponse extends  AbstractModel {
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
 * DescribeIntlPhoneEmailList request structure.
 * @class
 */
class DescribeIntlPhoneEmailListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type. Valid values: `1` (mobile number), `2` (email address).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * The number of records on each page in pagination cases.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page number in pagination cases.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * RenewIntlDomainBatch request structure.
 * @class
 */
class RenewIntlDomainBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domains to check.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The period (1 to 10 years). If this parameter is left empty, premium domains cannot be checked.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Payment method. Valid value: `1` (account balance).
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Whether to enable auto-renewal.
         * @type {boolean || null}
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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * BatchModifyIntlDomainInfo request structure.
 * @class
 */
class BatchModifyIntlDomainInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domains whose information is to be modified.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The profile ID.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Whether to enable the 60-day inter-registrar transfer lock.
         * @type {boolean || null}
         */
        this.LockTransfer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.LockTransfer = 'LockTransfer' in params ? params.LockTransfer : null;

    }
}

/**
 * SetIntlDomainAutoRenew request structure.
 * @class
 */
class SetIntlDomainAutoRenewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain ID.
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * Whether to enable auto-renewal. Valid values: `1` (enable), `2` (disable).
         * @type {number || null}
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * DescribeIntlDomainPriceNewList response structure.
 * @class
 */
class DescribeIntlDomainPriceNewListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The price list of domains.
         * @type {Array.<PriceInfoNew> || null}
         */
        this.PriceList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PriceList) {
            this.PriceList = new Array();
            for (let z in params.PriceList) {
                let obj = new PriceInfoNew();
                obj.deserialize(params.PriceList[z]);
                this.PriceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The log of bulk domain purchase
 * @class
 */
class BatchDomainBuyLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * The log ID.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The bulk operation type. Valid values: `new` (register domains), `batch_transfer_prohibition_on` (enable transfer prohibition), `batch_transfer_prohibition_off` (disable transfer prohibition), `batch_update_prohibition_on` (enable update prohibition), `batch_update_prohibition_off` (disable update prohibition).
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The quantity.
         * @type {number || null}
         */
        this.Number = null;

        /**
         * The execution status. Valid values: `doing`, `done`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The submission time.
         * @type {string || null}
         */
        this.CreatedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;

    }
}

/**
 * CreateIntlTemplate response structure.
 * @class
 */
class CreateIntlTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The profile ID.
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
 * The technical contact.
 * @class
 */
class TechnicalContact extends  AbstractModel {
    constructor(){
        super();

        /**
         * The first name.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * The last name.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * The country or region name, such as `CN`.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The province or state name.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * The city name.
         * @type {string || null}
         */
        this.City = null;

        /**
         * The address line 1.
         * @type {string || null}
         */
        this.AddressLine = null;

        /**
         * The zip code.
         * @type {string || null}
         */
        this.ZipCode = null;

        /**
         * The email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The mobile number, such as `+86.13600000000`.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * The company or organization name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * The job title.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobTitle = null;

        /**
         * The address line 2.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressLineTwo = null;

        /**
         * The fax number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Fax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.AddressLine = 'AddressLine' in params ? params.AddressLine : null;
        this.ZipCode = 'ZipCode' in params ? params.ZipCode : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.JobTitle = 'JobTitle' in params ? params.JobTitle : null;
        this.AddressLineTwo = 'AddressLineTwo' in params ? params.AddressLineTwo : null;
        this.Fax = 'Fax' in params ? params.Fax : null;

    }
}

/**
 * DescribeIntlDomainList response structure.
 * @class
 */
class DescribeIntlDomainListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain information set.
         * @type {Array.<IntlDomainInfo> || null}
         */
        this.DomainSet = null;

        /**
         * The total number of domains.
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

        if (params.DomainSet) {
            this.DomainSet = new Array();
            for (let z in params.DomainSet) {
                let obj = new IntlDomainInfo();
                obj.deserialize(params.DomainSet[z]);
                this.DomainSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The details of the bulk task
 * @class
 */
class IntlBatchDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the bulk task.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The task status.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The reason.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * The reason, expressed in Chinese.
         * @type {string || null}
         */
        this.ReasonZh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.ReasonZh = 'ReasonZh' in params ? params.ReasonZh : null;

    }
}

/**
 * The contact information.
 * @class
 */
class IntlContactInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The city name.
         * @type {string || null}
         */
        this.City = null;

        /**
         * The country or region name.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The domain registrant.
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * The province or state name.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * The name of the registrant.
         * @type {string || null}
         */
        this.RegistrantName = null;

        /**
         * The registrant type. Valid values: `I` (individual), `E` (organization).
         * @type {string || null}
         */
        this.RegistrantType = null;

        /**
         * The detailed address.
         * @type {string || null}
         */
        this.Street = null;

        /**
         * The mobile number.
         * @type {string || null}
         */
        this.Telephone = null;

        /**
         * The zip code.
         * @type {string || null}
         */
        this.ZipCode = null;

        /**
         * The first name.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * The last name.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * The company name.
         * @type {string || null}
         */
        this.CompanyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.RegistrantName = 'RegistrantName' in params ? params.RegistrantName : null;
        this.RegistrantType = 'RegistrantType' in params ? params.RegistrantType : null;
        this.Street = 'Street' in params ? params.Street : null;
        this.Telephone = 'Telephone' in params ? params.Telephone : null;
        this.ZipCode = 'ZipCode' in params ? params.ZipCode : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;

    }
}

/**
 * CreateIntlPhoneEmail request structure.
 * @class
 */
class CreateIntlPhoneEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type. Valid values: `1` (mobile number), `2` (email address).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * The mobile number or email address.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * The verification code.
         * @type {string || null}
         */
        this.VerifyCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.VerifyCode = 'VerifyCode' in params ? params.VerifyCode : null;

    }
}

/**
 * The domain information set.
 * @class
 */
class IntlDomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The auto-renewal flag. Valid values: `0` (disabled by default), `1` (enabled), `2` (disabled).
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * The registration time.
         * @type {string || null}
         */
        this.CreationDate = null;

        /**
         * The domain ID.
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * The DNS status. Valid values: `1` (DNSPod), `2` (others), `3` (unknown).
         * @type {number || null}
         */
        this.DnsStatus = null;

        /**
         * The domains.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * The domain status.
         * @type {Array.<string> || null}
         */
        this.DomainStatus = null;

        /**
         * The purchase status of the domain. Valid values:
`ok`: Normal.
`RegisterPending`: Pending registration.
`RegisterDoing`: Registration in progress.
`RegisterFailed`: Registration failed.
`RenewPending`: Renewal grace period.
`RenewDoing`: Renewing.
`RedemptionPending`: Redemption period.
`AboutToExpire`: About to expire.
`TransferPending`: Pending transfer.
`TransferTransing`: Transfer in progress.
`TransferFailed`: Transfer failed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The expiration date.
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * The auto-renewal flag. Valid values: `1` (enabled), `2` (disabled), `3` (disabled by default).
         * @type {number || null}
         */
        this.ExpireMessage = null;

        /**
         * Whether the domain is a premium one.
         * @type {boolean || null}
         */
        this.IsPremium = null;

        /**
         * The DNS server of the domain.
         * @type {Array.<string> || null}
         */
        this.Dns = null;

        /**
         * The contact information.
         * @type {IntlContactInfo || null}
         */
        this.ContactInfo = null;

        /**
         * The number of years available for renewal. The value `0` indicates that the domain has reached its maximum validity period (10 years) and cannot be renewed.
         * @type {number || null}
         */
        this.CanRenewYears = null;

        /**
         * The registrar type. If the value is `epp`, the registration time on the page is followed by (UTC). Otherwise, it is followed by (UTC+8).
         * @type {string || null}
         */
        this.RegistrarType = null;

        /**
         * The account to which the domain belongs.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * The profile ID.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Whether DNSSEC is supported.
         * @type {boolean || null}
         */
        this.SupportDnssec = null;

        /**
         * WHOIS privacy service status. Valid values: `1` (enabled), `2` (disabled), `3` (enabling), `4` (disabling).
         * @type {number || null}
         */
        this.WhoisPrivacy = null;

        /**
         * Valid values: `NotModify` (not modified), `Modifying`, `Failed` (failed to modify)
         * @type {string || null}
         */
        this.ModifyStatus = null;

        /**
         * Valid values: `NotModify` (not modified), `Modifying`, `Failed` (failed to modify)
         * @type {string || null}
         */
        this.DnsModifyStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.CreationDate = 'CreationDate' in params ? params.CreationDate : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.DnsStatus = 'DnsStatus' in params ? params.DnsStatus : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.ExpireMessage = 'ExpireMessage' in params ? params.ExpireMessage : null;
        this.IsPremium = 'IsPremium' in params ? params.IsPremium : null;
        this.Dns = 'Dns' in params ? params.Dns : null;

        if (params.ContactInfo) {
            let obj = new IntlContactInfo();
            obj.deserialize(params.ContactInfo)
            this.ContactInfo = obj;
        }
        this.CanRenewYears = 'CanRenewYears' in params ? params.CanRenewYears : null;
        this.RegistrarType = 'RegistrarType' in params ? params.RegistrarType : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.SupportDnssec = 'SupportDnssec' in params ? params.SupportDnssec : null;
        this.WhoisPrivacy = 'WhoisPrivacy' in params ? params.WhoisPrivacy : null;
        this.ModifyStatus = 'ModifyStatus' in params ? params.ModifyStatus : null;
        this.DnsModifyStatus = 'DnsModifyStatus' in params ? params.DnsModifyStatus : null;

    }
}

/**
 * SendIntlPhoneEmailCode response structure.
 * @class
 */
class SendIntlPhoneEmailCodeResponse extends  AbstractModel {
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
 * DeleteIntlPhoneEmail response structure.
 * @class
 */
class DeleteIntlPhoneEmailResponse extends  AbstractModel {
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
 * DeleteIntlTemplate request structure.
 * @class
 */
class DeleteIntlTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the target registrant profile.
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
 * CheckIntlDomainNew request structure.
 * @class
 */
class CheckIntlDomainNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the domain to be checked.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Period, in years. If this parameter is left empty, premium domains cannot be queried.
         * @type {string || null}
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * BatchModifyIntlDomainInfo response structure.
 * @class
 */
class BatchModifyIntlDomainInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The log ID.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewIntlDomainBatch response structure.
 * @class
 */
class RenewIntlDomainBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the bulk task.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The admin contact.
 * @class
 */
class AdminContact extends  AbstractModel {
    constructor(){
        super();

        /**
         * The first name.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * The last name.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * The country or region name, such as `CN`.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The province or state name.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * The city name.
         * @type {string || null}
         */
        this.City = null;

        /**
         * The address line 1.
         * @type {string || null}
         */
        this.AddressLine = null;

        /**
         * The zip code.
         * @type {string || null}
         */
        this.ZipCode = null;

        /**
         * The email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The mobile number, such as `+86.13600000000`.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * The company or organization name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * The job title.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobTitle = null;

        /**
         * The address line 2.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressLineTwo = null;

        /**
         * The fax number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Fax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.AddressLine = 'AddressLine' in params ? params.AddressLine : null;
        this.ZipCode = 'ZipCode' in params ? params.ZipCode : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.JobTitle = 'JobTitle' in params ? params.JobTitle : null;
        this.AddressLineTwo = 'AddressLineTwo' in params ? params.AddressLineTwo : null;
        this.Fax = 'Fax' in params ? params.Fax : null;

    }
}

/**
 * DescribeIntlDomainList request structure.
 * @class
 */
class DescribeIntlDomainListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The page number in pagination cases.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of records on each page in pagination cases.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The domain keyword for fuzzy search.
         * @type {string || null}
         */
        this.KeyWord = null;

        /**
         * The registration time sort order. Valid values: `1` (descending), `2` (ascending).
         * @type {number || null}
         */
        this.OrderByRegTime = null;

        /**
         * The expiration time sort order. Valid values: `1` (descending), `2` (ascending).
         * @type {number || null}
         */
        this.OrderByExpireTime = null;

        /**
         * The domain status.
`all`: All domains.
`UrgentNeedRenew`: The domains that are in urgent need of renewal.
`RedemptionPending`: The domains that are in urgent need of redemption.
`nosubmit`: The domains with unverified identities.
`tran`: The domains that are being transferred in.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The DNS type. Valid values: `1` (DNSPod), `2` (others).
         * @type {number || null}
         */
        this.DnsStatus = null;

        /**
         * The domain sort order. Valid values: `1` (descending), `2` (ascending).
         * @type {number || null}
         */
        this.OrderByDomainName = null;

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
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;
        this.OrderByRegTime = 'OrderByRegTime' in params ? params.OrderByRegTime : null;
        this.OrderByExpireTime = 'OrderByExpireTime' in params ? params.OrderByExpireTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DnsStatus = 'DnsStatus' in params ? params.DnsStatus : null;
        this.OrderByDomainName = 'OrderByDomainName' in params ? params.OrderByDomainName : null;

    }
}

/**
 * The contact person for bills.
 * @class
 */
class BillingContact extends  AbstractModel {
    constructor(){
        super();

        /**
         * The first name.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * The last name.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * The country or region name, such as `CN`.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The province or state name.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * The city name.
         * @type {string || null}
         */
        this.City = null;

        /**
         * The address line 1.
         * @type {string || null}
         */
        this.AddressLine = null;

        /**
         * The zip code.
         * @type {string || null}
         */
        this.ZipCode = null;

        /**
         * The email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The mobile number, such as `+86.13600000000`.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * The company or organization name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * The job title.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobTitle = null;

        /**
         * The address line 2.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressLineTwo = null;

        /**
         * The fax number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Fax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.AddressLine = 'AddressLine' in params ? params.AddressLine : null;
        this.ZipCode = 'ZipCode' in params ? params.ZipCode : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.JobTitle = 'JobTitle' in params ? params.JobTitle : null;
        this.AddressLineTwo = 'AddressLineTwo' in params ? params.AddressLineTwo : null;
        this.Fax = 'Fax' in params ? params.Fax : null;

    }
}

/**
 * UpdateProhibitionIntlBatch request structure.
 * @class
 */
class UpdateProhibitionIntlBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain array.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Whether to enable update prohibition. Valid values: `true` (enable), `false` (disable).
         * @type {boolean || null}
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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeIntlDomainBatchDetails request structure.
 * @class
 */
class DescribeIntlDomainBatchDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The log ID.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The sort key. Valid values: `Domain`, `UpdateOn`, `Status`
         * @type {string || null}
         */
        this.OrderByKey = null;

        /**
         * Valid values: `0` (ascending), `1` (descending).
         * @type {number || null}
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
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByKey = 'OrderByKey' in params ? params.OrderByKey : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

    }
}

/**
 * ModifyOwnerIntlBatch response structure.
 * @class
 */
class ModifyOwnerIntlBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the bulk task.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntlDomain request structure.
 * @class
 */
class DescribeIntlDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain ID.
         * @type {string || null}
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
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyOwnerIntlBatch request structure.
 * @class
 */
class ModifyOwnerIntlBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domains.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The user ID.
         * @type {string || null}
         */
        this.ToUin = null;

        /**
         * Whether to transfer the DNS service.
         * @type {boolean || null}
         */
        this.DnsTransfer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.ToUin = 'ToUin' in params ? params.ToUin : null;
        this.DnsTransfer = 'DnsTransfer' in params ? params.DnsTransfer : null;

    }
}

/**
 * TransferProhibitionIntlBatch request structure.
 * @class
 */
class TransferProhibitionIntlBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain array.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Whether to enable transfer prohibition. Valid values: `true` (enable), `false` (disable).
         * @type {boolean || null}
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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * The details of the registrant profile.
 * @class
 */
class IntlTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The registrant contact.
         * @type {RegistrantContact || null}
         */
        this.RegistrantContact = null;

        /**
         * The admin contact.
         * @type {AdminContact || null}
         */
        this.AdminContact = null;

        /**
         * The technical contact.
         * @type {TechnicalContact || null}
         */
        this.TechnicalContact = null;

        /**
         * The contact person for bills.
         * @type {BillingContact || null}
         */
        this.BillingContact = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * The profile ID.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Whether the profile is the default one.
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * The last update time.
         * @type {string || null}
         */
        this.UpdatedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegistrantContact) {
            let obj = new RegistrantContact();
            obj.deserialize(params.RegistrantContact)
            this.RegistrantContact = obj;
        }

        if (params.AdminContact) {
            let obj = new AdminContact();
            obj.deserialize(params.AdminContact)
            this.AdminContact = obj;
        }

        if (params.TechnicalContact) {
            let obj = new TechnicalContact();
            obj.deserialize(params.TechnicalContact)
            this.TechnicalContact = obj;
        }

        if (params.BillingContact) {
            let obj = new BillingContact();
            obj.deserialize(params.BillingContact)
            this.BillingContact = obj;
        }
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;

    }
}

/**
 * DeleteIntlTemplate response structure.
 * @class
 */
class DeleteIntlTemplateResponse extends  AbstractModel {
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
 * DescribeIntlBatchDetailStatus request structure.
 * @class
 */
class DescribeIntlBatchDetailStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of the logs to be queried.
         * @type {Array.<number> || null}
         */
        this.LogIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogIds = 'LogIds' in params ? params.LogIds : null;

    }
}

/**
 * DescribeIntlTemplate response structure.
 * @class
 */
class DescribeIntlTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The details of the registrant profile.
         * @type {IntlTemplateInfo || null}
         */
        this.Template = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
            let obj = new IntlTemplateInfo();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransferProhibitionIntlBatch response structure.
 * @class
 */
class TransferProhibitionIntlBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The log ID.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntlTemplateList request structure.
 * @class
 */
class DescribeIntlTemplateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The maximum number of entries.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The domain registrant keyword for exact match.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * The type. Valid values: `all` (all types), `I` (individual), `E` (organization).
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
 * DescribeIntlDomainBatchDetails response structure.
 * @class
 */
class DescribeIntlDomainBatchDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total count.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of log details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BatchDomainBuyDetails> || null}
         */
        this.DomainBatchDetailSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.DomainBatchDetailSet) {
            this.DomainBatchDetailSet = new Array();
            for (let z in params.DomainBatchDetailSet) {
                let obj = new BatchDomainBuyDetails();
                obj.deserialize(params.DomainBatchDetailSet[z]);
                this.DomainBatchDetailSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransferInIntlDomainBatch request structure.
 * @class
 */
class TransferInIntlDomainBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The profile ID.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * The transfer passwords for the domains.
         * @type {Array.<string> || null}
         */
        this.PassWords = null;

        /**
         * The domains to be bulk transferred in.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The payment method. Valid value: `1` (account balance).
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Whether to enable auto-renewal.
         * @type {boolean || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Whether to enable the transfer prohibition lock.
         * @type {boolean || null}
         */
        this.TransferProhibition = null;

        /**
         * Whether to enable the update prohibition lock.
         * @type {boolean || null}
         */
        this.UpdateProhibition = null;

        /**
         * Whether to enable the 60-day inter-registrar transfer lock.
         * @type {boolean || null}
         */
        this.LockTransfer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.PassWords = 'PassWords' in params ? params.PassWords : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.TransferProhibition = 'TransferProhibition' in params ? params.TransferProhibition : null;
        this.UpdateProhibition = 'UpdateProhibition' in params ? params.UpdateProhibition : null;
        this.LockTransfer = 'LockTransfer' in params ? params.LockTransfer : null;

    }
}

/**
 * DescribeIntlDomain response structure.
 * @class
 */
class DescribeIntlDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain information.
         * @type {IntlDomainInfo || null}
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
            let obj = new IntlDomainInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateIntlTemplate request structure.
 * @class
 */
class CreateIntlTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The registrant contact.
         * @type {RegistrantContact || null}
         */
        this.RegistrantContact = null;

        /**
         * The admin contact.
         * @type {AdminContact || null}
         */
        this.AdminContact = null;

        /**
         * The technical contact.
         * @type {TechnicalContact || null}
         */
        this.TechnicalContact = null;

        /**
         * The contact person for bills.
         * @type {BillingContact || null}
         */
        this.BillingContact = null;

        /**
         * The profile type. Valid values: `I` (individual, default), `E` (organization).
         * @type {string || null}
         */
        this.TemplateType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegistrantContact) {
            let obj = new RegistrantContact();
            obj.deserialize(params.RegistrantContact)
            this.RegistrantContact = obj;
        }

        if (params.AdminContact) {
            let obj = new AdminContact();
            obj.deserialize(params.AdminContact)
            this.AdminContact = obj;
        }

        if (params.TechnicalContact) {
            let obj = new TechnicalContact();
            obj.deserialize(params.TechnicalContact)
            this.TechnicalContact = obj;
        }

        if (params.BillingContact) {
            let obj = new BillingContact();
            obj.deserialize(params.BillingContact)
            this.BillingContact = obj;
        }
        this.TemplateType = 'TemplateType' in params ? params.TemplateType : null;

    }
}

/**
 * DeleteIntlPhoneEmail request structure.
 * @class
 */
class DeleteIntlPhoneEmailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type. Valid values: `1` (mobile number), `2` (email address).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * The mobile number or email address.
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * DescribeIntlBatchOperationLogs request structure.
 * @class
 */
class DescribeIntlBatchOperationLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of returned results. Default value: 20. Maximum value: 100.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * The registrant contact.
 * @class
 */
class RegistrantContact extends  AbstractModel {
    constructor(){
        super();

        /**
         * The first name.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * The last name.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * The country or region name, such as `CN`.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The province or state name.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * The city name.
         * @type {string || null}
         */
        this.City = null;

        /**
         * The address line 1.
         * @type {string || null}
         */
        this.AddressLine = null;

        /**
         * The zip code.
         * @type {string || null}
         */
        this.ZipCode = null;

        /**
         * The email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The mobile number, such as `+86.1360000000`.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * The company or organization name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * The job title.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobTitle = null;

        /**
         * The address line 2.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AddressLineTwo = null;

        /**
         * The fax number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Fax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.AddressLine = 'AddressLine' in params ? params.AddressLine : null;
        this.ZipCode = 'ZipCode' in params ? params.ZipCode : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.JobTitle = 'JobTitle' in params ? params.JobTitle : null;
        this.AddressLineTwo = 'AddressLineTwo' in params ? params.AddressLineTwo : null;
        this.Fax = 'Fax' in params ? params.Fax : null;

    }
}

/**
 * DescribeIntlBatchDetailStatus response structure.
 * @class
 */
class DescribeIntlBatchDetailStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The details.
         * @type {Array.<IntlBatchDetails> || null}
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

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new IntlBatchDetails();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The registrant profile details.
 * @class
 */
class IntlTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The registrant contact.
         * @type {RegistrantContact || null}
         */
        this.RegistrantContact = null;

        /**
         * The admin contact.
         * @type {AdminContact || null}
         */
        this.AdminContact = null;

        /**
         * The technical contact.
         * @type {TechnicalContact || null}
         */
        this.TechnicalContact = null;

        /**
         * The contact person for bills.
         * @type {BillingContact || null}
         */
        this.BillingContact = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * The profile ID.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * The registrant type. Valid values: `I` (individual), `E` (organization).
         * @type {string || null}
         */
        this.TemplateType = null;

        /**
         * The last updated time.
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * The account ID.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Whether the profile is the default one.
         * @type {number || null}
         */
        this.IsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegistrantContact) {
            let obj = new RegistrantContact();
            obj.deserialize(params.RegistrantContact)
            this.RegistrantContact = obj;
        }

        if (params.AdminContact) {
            let obj = new AdminContact();
            obj.deserialize(params.AdminContact)
            this.AdminContact = obj;
        }

        if (params.TechnicalContact) {
            let obj = new TechnicalContact();
            obj.deserialize(params.TechnicalContact)
            this.TechnicalContact = obj;
        }

        if (params.BillingContact) {
            let obj = new BillingContact();
            obj.deserialize(params.BillingContact)
            this.BillingContact = obj;
        }
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateType = 'TemplateType' in params ? params.TemplateType : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * DescribeIntlTemplateList response structure.
 * @class
 */
class DescribeIntlTemplateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The registrant profile list information.
         * @type {Array.<IntlTemplate> || null}
         */
        this.TemplateSet = null;

        /**
         * The total count.
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

        if (params.TemplateSet) {
            this.TemplateSet = new Array();
            for (let z in params.TemplateSet) {
                let obj = new IntlTemplate();
                obj.deserialize(params.TemplateSet[z]);
                this.TemplateSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateIntlDomainBatch response structure.
 * @class
 */
class CreateIntlDomainBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The bulk purchase log ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchModifyIntlDomainDNS request structure.
 * @class
 */
class BatchModifyIntlDomainDNSRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The target domains.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * The domain DNS array.
         * @type {Array.<string> || null}
         */
        this.Dns = null;

        /**
         * Valid values: `batch_modify_domain_dns1`, `batch_modify_domain_dns2`, `batch_modify_domain_dns3`
         * @type {string || null}
         */
        this.BatchAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Dns = 'Dns' in params ? params.Dns : null;
        this.BatchAction = 'BatchAction' in params ? params.BatchAction : null;

    }
}

/**
 * BatchModifyIntlDomainDNS response structure.
 * @class
 */
class BatchModifyIntlDomainDNSResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The log ID.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The log details of bulk domain purchase  
 * @class
 */
class BatchDomainBuyDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * The details ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The bulk operation type. Valid values: `new` (register domains), `batch_transfer_prohibition_on` (enable transfer prohibition), `batch_transfer_prohibition_off` (disable transfer prohibition), `batch_update_prohibition_on` (enable update prohibition), `batch_update_prohibition_off` (disable update prohibition).
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The domains.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The status. Valid values: `SUCCESS`, `FAILURE`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The reason for failure.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * The update time.
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * Null: The DNS service is not transferred. `false`: The DNS service failed to be transferred. `true`: The DNS service is transferred successfully.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.TransferDnsResult = null;

        /**
         * The reason for failure, expressed in Chinese.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReasonZh = null;

        /**
         * The payment status.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PayStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.TransferDnsResult = 'TransferDnsResult' in params ? params.TransferDnsResult : null;
        this.ReasonZh = 'ReasonZh' in params ? params.ReasonZh : null;
        this.PayStatus = 'PayStatus' in params ? params.PayStatus : null;

    }
}

/**
 * DescribeIntlTemplate request structure.
 * @class
 */
class DescribeIntlTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of a registrant profile.
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
 * TransferInIntlDomainBatch response structure.
 * @class
 */
class TransferInIntlDomainBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The bulk purchase log ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckIntlDomainNew response structure.
 * @class
 */
class CheckIntlDomainNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the domain checked.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Whether the domain is available for registration.
         * @type {boolean || null}
         */
        this.Available = null;

        /**
         * The reason why the domain cannot be registered.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Whether the domain is a premium one.
         * @type {boolean || null}
         */
        this.Premium = null;

        /**
         * The domain price.
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Whether the domain name involves restricted words.
         * @type {boolean || null}
         */
        this.BlackWord = null;

        /**
         * The premium domain description.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * The price for renewing the premium domain.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FeeRenew = null;

        /**
         * The real price of the domain. For a premium domain, its price varies depending on the period. For a non-premium domain, the price is the 1-year price.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RealPrice = null;

        /**
         * The price for transferring a premium domain in.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FeeTransfer = null;

        /**
         * The price for redeeming a premium domain.
         * @type {number || null}
         */
        this.FeeRestore = null;

        /**
         * The period (in years) of the domain.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * The reason why the domain cannot be registered, expressed in Chinese.
         * @type {string || null}
         */
        this.ReasonZh = null;

        /**
         * The internal error code.
         * @type {string || null}
         */
        this.ResCode = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Premium = 'Premium' in params ? params.Premium : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.BlackWord = 'BlackWord' in params ? params.BlackWord : null;
        this.Describe = 'Describe' in params ? params.Describe : null;
        this.FeeRenew = 'FeeRenew' in params ? params.FeeRenew : null;
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.FeeTransfer = 'FeeTransfer' in params ? params.FeeTransfer : null;
        this.FeeRestore = 'FeeRestore' in params ? params.FeeRestore : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ReasonZh = 'ReasonZh' in params ? params.ReasonZh : null;
        this.ResCode = 'ResCode' in params ? params.ResCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The price information of the domains.
 * @class
 */
class PriceInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain suffix, such as `.com`.
         * @type {string || null}
         */
        this.Tld = null;

        /**
         * The purchase years. Value range: [1-10]
         * @type {number || null}
         */
        this.Year = null;

        /**
         * The original price of the domain.
         * @type {number || null}
         */
        this.Price = null;

        /**
         * The current price of the domain.
         * @type {number || null}
         */
        this.RealPrice = null;

        /**
         * The domain purchase type. Valid values: `new`, `renew`, `redem` (redeem), `tran` (transfer in).
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * The title.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Title = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tld = 'Tld' in params ? params.Tld : null;
        this.Year = 'Year' in params ? params.Year : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Title = 'Title' in params ? params.Title : null;

    }
}

/**
 * DescribeIntlPhoneEmailList response structure.
 * @class
 */
class DescribeIntlPhoneEmailListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of verified mobile numbers and email addresses.
         * @type {Array.<IntlPhoneEmailLists> || null}
         */
        this.PhoneEmailList = null;

        /**
         * The total count.
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

        if (params.PhoneEmailList) {
            this.PhoneEmailList = new Array();
            for (let z in params.PhoneEmailList) {
                let obj = new IntlPhoneEmailLists();
                obj.deserialize(params.PhoneEmailList[z]);
                this.PhoneEmailList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The list of verified mobile numbers and email addresses.
 * @class
 */
class IntlPhoneEmailLists extends  AbstractModel {
    constructor(){
        super();

        /**
         * The mobile number or email address.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * The type. Valid values: `1` (mobile number), `2` (email address).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * The verification time.
         * @type {string || null}
         */
        this.CreatedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;

    }
}

module.exports = {
    UpdateProhibitionIntlBatchResponse: UpdateProhibitionIntlBatchResponse,
    DescribeIntlBatchOperationLogsResponse: DescribeIntlBatchOperationLogsResponse,
    SetIntlDomainAutoRenewResponse: SetIntlDomainAutoRenewResponse,
    DescribeIntlDomainPriceNewListRequest: DescribeIntlDomainPriceNewListRequest,
    CreateIntlDomainBatchRequest: CreateIntlDomainBatchRequest,
    SendIntlPhoneEmailCodeRequest: SendIntlPhoneEmailCodeRequest,
    CreateIntlPhoneEmailResponse: CreateIntlPhoneEmailResponse,
    DescribeIntlPhoneEmailListRequest: DescribeIntlPhoneEmailListRequest,
    RenewIntlDomainBatchRequest: RenewIntlDomainBatchRequest,
    BatchModifyIntlDomainInfoRequest: BatchModifyIntlDomainInfoRequest,
    SetIntlDomainAutoRenewRequest: SetIntlDomainAutoRenewRequest,
    DescribeIntlDomainPriceNewListResponse: DescribeIntlDomainPriceNewListResponse,
    BatchDomainBuyLog: BatchDomainBuyLog,
    CreateIntlTemplateResponse: CreateIntlTemplateResponse,
    TechnicalContact: TechnicalContact,
    DescribeIntlDomainListResponse: DescribeIntlDomainListResponse,
    IntlBatchDetails: IntlBatchDetails,
    IntlContactInfo: IntlContactInfo,
    CreateIntlPhoneEmailRequest: CreateIntlPhoneEmailRequest,
    IntlDomainInfo: IntlDomainInfo,
    SendIntlPhoneEmailCodeResponse: SendIntlPhoneEmailCodeResponse,
    DeleteIntlPhoneEmailResponse: DeleteIntlPhoneEmailResponse,
    DeleteIntlTemplateRequest: DeleteIntlTemplateRequest,
    CheckIntlDomainNewRequest: CheckIntlDomainNewRequest,
    BatchModifyIntlDomainInfoResponse: BatchModifyIntlDomainInfoResponse,
    RenewIntlDomainBatchResponse: RenewIntlDomainBatchResponse,
    AdminContact: AdminContact,
    DescribeIntlDomainListRequest: DescribeIntlDomainListRequest,
    BillingContact: BillingContact,
    UpdateProhibitionIntlBatchRequest: UpdateProhibitionIntlBatchRequest,
    DescribeIntlDomainBatchDetailsRequest: DescribeIntlDomainBatchDetailsRequest,
    ModifyOwnerIntlBatchResponse: ModifyOwnerIntlBatchResponse,
    DescribeIntlDomainRequest: DescribeIntlDomainRequest,
    ModifyOwnerIntlBatchRequest: ModifyOwnerIntlBatchRequest,
    TransferProhibitionIntlBatchRequest: TransferProhibitionIntlBatchRequest,
    IntlTemplate: IntlTemplate,
    DeleteIntlTemplateResponse: DeleteIntlTemplateResponse,
    DescribeIntlBatchDetailStatusRequest: DescribeIntlBatchDetailStatusRequest,
    DescribeIntlTemplateResponse: DescribeIntlTemplateResponse,
    TransferProhibitionIntlBatchResponse: TransferProhibitionIntlBatchResponse,
    DescribeIntlTemplateListRequest: DescribeIntlTemplateListRequest,
    DescribeIntlDomainBatchDetailsResponse: DescribeIntlDomainBatchDetailsResponse,
    TransferInIntlDomainBatchRequest: TransferInIntlDomainBatchRequest,
    DescribeIntlDomainResponse: DescribeIntlDomainResponse,
    CreateIntlTemplateRequest: CreateIntlTemplateRequest,
    DeleteIntlPhoneEmailRequest: DeleteIntlPhoneEmailRequest,
    DescribeIntlBatchOperationLogsRequest: DescribeIntlBatchOperationLogsRequest,
    RegistrantContact: RegistrantContact,
    DescribeIntlBatchDetailStatusResponse: DescribeIntlBatchDetailStatusResponse,
    IntlTemplateInfo: IntlTemplateInfo,
    DescribeIntlTemplateListResponse: DescribeIntlTemplateListResponse,
    CreateIntlDomainBatchResponse: CreateIntlDomainBatchResponse,
    BatchModifyIntlDomainDNSRequest: BatchModifyIntlDomainDNSRequest,
    BatchModifyIntlDomainDNSResponse: BatchModifyIntlDomainDNSResponse,
    BatchDomainBuyDetails: BatchDomainBuyDetails,
    DescribeIntlTemplateRequest: DescribeIntlTemplateRequest,
    TransferInIntlDomainBatchResponse: TransferInIntlDomainBatchResponse,
    CheckIntlDomainNewResponse: CheckIntlDomainNewResponse,
    PriceInfoNew: PriceInfoNew,
    DescribeIntlPhoneEmailListResponse: DescribeIntlPhoneEmailListResponse,
    IntlPhoneEmailLists: IntlPhoneEmailLists,

}
