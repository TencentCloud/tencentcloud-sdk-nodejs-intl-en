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
 * ApplyCertificate response structure.
 * @class
 */
class ApplyCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCertificate request structure.
 * @class
 */
class DeleteCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * DescribeCertificateOperateLogs response structure.
 * @class
 */
class DescribeCertificateOperateLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of logs that meet query conditions
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * Number of logs returned for this request
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Certificate operation log list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<OperationLog> || null}
         */
        this.OperateLogs = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.OperateLogs) {
            this.OperateLogs = new Array();
            for (let z in params.OperateLogs) {
                let obj = new OperationLog();
                obj.deserialize(params.OperateLogs[z]);
                this.OperateLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CommitCertificateInformation request structure.
 * @class
 */
class CommitCertificateInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * CommitCertificateInformation response structure.
 * @class
 */
class CommitCertificateInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TrustAsia order ID
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Certificate status. `0`: reviewing; `1`: approved; `2`: unapproved; `3`: expired; `4`: DNS record added; `5`: enterprise-grade certificate, pending submission; `6`: canceling order; `7`: canceled; `8`: information submitted, pending confirmation letter upload; `9`: revoking certificate; `10`: revoked; `11`: reissuing; `12`: pending revocation confirmation letter upload
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
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReplaceCertificate response structure.
 * @class
 */
class ReplaceCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadCertificate request structure.
 * @class
 */
class DownloadCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * CancelCertificateOrder request structure.
 * @class
 */
class CancelCertificateOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * ModifyCertificateProject response structure.
 * @class
 */
class ModifyCertificateProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of certificates whose projects were modified successfully
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SuccessCertificates = null;

        /**
         * List of certificates whose projects failed to be modified
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FailCertificates = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessCertificates = 'SuccessCertificates' in params ? params.SuccessCertificates : null;
        this.FailCertificates = 'FailCertificates' in params ? params.FailCertificates : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Content of the `Certificates` parameter returned by `DescribeCertificates`
 * @class
 */
class Certificates extends  AbstractModel {
    constructor(){
        super();

        /**
         * User UIN
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Project ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Certificate source
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Certificate plan type. `1`: GeoTrust DV SSL CA - G3; `2`: TrustAsia TLS RSA CA; `3`: SecureSite EV Pro; `4`: SecureSite EV; `5`: SecureSite OV Pro; `6`: SecureSite OV; `7`: SecureSite OV wildcard; `8`: GeoTrust EV; `9`: GeoTrust OV; `10`: GeoTrust OV wildcard; `11`: TrustAsia DV multi-domain; `12`: TrustAsia DV wildcard; `13`: TrustAsia OV wildcard D3; `14`: TrustAsia OV D3; `15`: TrustAsia OV multi-domain D3; `16`: TrustAsia EV D3; `17`: TrustAsia EV multi-domain D3; `18`: GlobalSign OV; `19`: GlobalSign OV wildcard; `20`: GlobalSign EV; `21`: TrustAsia OV wildcard multi-domain D3; `22`: GlobalSign OV multi-domain; `23`: GlobalSign OV wildcard multi-domain; `24`: GlobalSign EV multi-domain
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Certificate type. `CA`: client certificate; `SVR`: server certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * Issuer
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductZhName = null;

        /**
         * Primary domain name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Alias
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Status. `0`: Reviewing; `1`: Approved; `2`: Unapproved; `3`: Expired; `4`: DNS record added for domain names of the DNS_AUTO verification type; `5`: Enterprise-grade certificate, pending submission; `6`: Canceling order; `7`: Canceled; `8`: Information submitted, pending confirmation letter upload; `9`: Revoking certificate; `10`: Revoked; `11`: Reissuing; `12`: Pending revocation confirmation letter upload; `13`: Pending information submission for the free certificate; `14`: Refunded.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Extended information of the certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CertificateExtra || null}
         */
        this.CertificateExtra = null;

        /**
         * Vulnerability scanning status. `INACTIVE`: not activated; `ACTIVE`: activated
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VulnerabilityStatus = null;

        /**
         * Status information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * Validation type. `DNS_AUTO`: automatic DNS validation; `DNS`: manual DNS validation; `FILE`: file validation; `EMAIL`: email validation
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * Time when the certificate takes effect
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * Time when the certificate expires
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * Validity period of the certificate, in months
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * Certificate ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Domain names associated with the certificate (including the primary domain name)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * Certificate type name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageTypeName = null;

        /**
         * Status description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusName = null;

        /**
         * Whether the customer is a VIP customer
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsVip = null;

        /**
         * Whether the certificate is a DV certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsDv = null;

        /**
         * Whether the certificate is a wildcard certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsWildcard = null;

        /**
         * Whether the vulnerability scanning feature is enabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsVulnerability = null;

        /**
         * Whether the certificate can be reissued
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.RenewAble = null;

        /**
         * Project information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ProjectInfo || null}
         */
        this.ProjectInfo = null;

        /**
         * Associated Tencent Cloud services. Currently, this parameter is unavailable.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BoundResource = null;

        /**
         * Whether the certificate can be deployed
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Deployable = null;

        /**
         * List of tags
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tags> || null}
         */
        this.Tags = null;

        /**
         * Whether the expiration notification was ignored
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsIgnore = null;

        /**
         * Whether the certificate is a Chinese SM certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsSM = null;

        /**
         * Certificate algorithm
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EncryptAlgorithm = null;

        /**
         * Encryption algorithm of the uploaded CA certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CAEncryptAlgorithms = null;

        /**
         * Expiration time of the uploaded CA certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CAEndTimes = null;

        /**
         * Generic name of the uploaded CA certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CACommonNames = null;

        /**
         * Prereview information of the certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PreAuditInfo || null}
         */
        this.PreAuditInfo = null;

        /**
         * Whether auto-renewal is enabled.
Note: This field may return null, indicating that no valid value can be obtained.
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
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.From = 'From' in params ? params.From : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.ProductZhName = 'ProductZhName' in params ? params.ProductZhName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.CertificateExtra) {
            let obj = new CertificateExtra();
            obj.deserialize(params.CertificateExtra)
            this.CertificateExtra = obj;
        }
        this.VulnerabilityStatus = 'VulnerabilityStatus' in params ? params.VulnerabilityStatus : null;
        this.StatusMsg = 'StatusMsg' in params ? params.StatusMsg : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.PackageTypeName = 'PackageTypeName' in params ? params.PackageTypeName : null;
        this.StatusName = 'StatusName' in params ? params.StatusName : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.IsDv = 'IsDv' in params ? params.IsDv : null;
        this.IsWildcard = 'IsWildcard' in params ? params.IsWildcard : null;
        this.IsVulnerability = 'IsVulnerability' in params ? params.IsVulnerability : null;
        this.RenewAble = 'RenewAble' in params ? params.RenewAble : null;

        if (params.ProjectInfo) {
            let obj = new ProjectInfo();
            obj.deserialize(params.ProjectInfo)
            this.ProjectInfo = obj;
        }
        this.BoundResource = 'BoundResource' in params ? params.BoundResource : null;
        this.Deployable = 'Deployable' in params ? params.Deployable : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.IsIgnore = 'IsIgnore' in params ? params.IsIgnore : null;
        this.IsSM = 'IsSM' in params ? params.IsSM : null;
        this.EncryptAlgorithm = 'EncryptAlgorithm' in params ? params.EncryptAlgorithm : null;
        this.CAEncryptAlgorithms = 'CAEncryptAlgorithms' in params ? params.CAEncryptAlgorithms : null;
        this.CAEndTimes = 'CAEndTimes' in params ? params.CAEndTimes : null;
        this.CACommonNames = 'CACommonNames' in params ? params.CACommonNames : null;

        if (params.PreAuditInfo) {
            let obj = new PreAuditInfo();
            obj.deserialize(params.PreAuditInfo)
            this.PreAuditInfo = obj;
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * Content of the `CertificateExtra` parameter. `CertificateExtra` is an element of `Certificates` array which is returned by `DescribeCertificates`.
 * @class
 */
class CertificateExtra extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of domain names which can be associated with the certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DomainNumber = null;

        /**
         * Original certificate ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginCertificateId = null;

        /**
         * Original ID of the new certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReplacedBy = null;

        /**
         * New ID of the new certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReplacedFor = null;

        /**
         * Certificate ID of the new order
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RenewOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainNumber = 'DomainNumber' in params ? params.DomainNumber : null;
        this.OriginCertificateId = 'OriginCertificateId' in params ? params.OriginCertificateId : null;
        this.ReplacedBy = 'ReplacedBy' in params ? params.ReplacedBy : null;
        this.ReplacedFor = 'ReplacedFor' in params ? params.ReplacedFor : null;
        this.RenewOrder = 'RenewOrder' in params ? params.RenewOrder : null;

    }
}

/**
 * DescribeCertificate response structure.
 * @class
 */
class DescribeCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User UIN
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Project ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Certificate source. `trustasia`: TrustAsia; `upload`: certificate uploaded by users
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Certificate type. `CA`: client certificate; `SVR`: server certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * Certificate plan type. `1`: GeoTrust DV SSL CA - G3; `2`: TrustAsia TLS RSA CA; `3`: SecureSite EV Pro; `4`: SecureSite EV; `5`: SecureSite OV Pro; `6`: SecureSite OV; `7`: SecureSite OV wildcard; `8`: GeoTrust EV; `9`: GeoTrust OV; `10`: GeoTrust OV wildcard; `11`: TrustAsia DV multi-domain; `12`: TrustAsia DV wildcard; `13`: TrustAsia OV wildcard D3; `14`: TrustAsia OV D3; `15`: TrustAsia OV multi-domain D3; `16`: TrustAsia EV D3; `17`: TrustAsia EV multi-domain D3; `18`: GlobalSign OV; `19`: GlobalSign OV wildcard; `20`: GlobalSign EV; `21`: TrustAsia OV wildcard multi-domain D3; `22`: GlobalSign OV multi-domain; `23`: GlobalSign OV wildcard multi-domain; `24`: GlobalSign EV multi-domain
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Name of the certificate issuer
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductZhName = null;

        /**
         * Domain name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Alias
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Certificate status. `0`: reviewing; `1`: approved; `2`: unapproved; `3`: expired; `4`: DNS record added; `5`: enterprise-grade certificate, pending submission; `6`: canceling order; `7`: canceled; `8`: information submitted, pending confirmation letter upload; `9`: revoking certificate; `10`: revoked; `11`: reissuing; `12`: pending revocation confirmation letter upload
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Status information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * Validation type. `DNS_AUTO`: automatic DNS validation; `DNS`: manual DNS validation; `FILE`: file validation; `EMAIL`: email validation
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * Vulnerability scanning status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VulnerabilityStatus = null;

        /**
         * Time when the certificate takes effect
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * Time when the certificate expires
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * Validity period of the certificate, in months
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * Application time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * Order ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Extended information of the certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CertificateExtra || null}
         */
        this.CertificateExtra = null;

        /**
         * DV authentication information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DvAuthDetail || null}
         */
        this.DvAuthDetail = null;

        /**
         * Vulnerability scanning assessment report
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VulnerabilityReport = null;

        /**
         * Certificate ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Certificate type name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageTypeName = null;

        /**
         * Status description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusName = null;

        /**
         * Domain names associated with the certificate (including the primary domain name)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * Whether the customer is a VIP customer
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsVip = null;

        /**
         * Whether the certificate is a wildcard certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsWildcard = null;

        /**
         * Whether the certificate is a DV certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsDv = null;

        /**
         * Whether the vulnerability scanning feature is enabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsVulnerability = null;

        /**
         * Whether the certificate can be reissued
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.RenewAble = null;

        /**
         * Submitted data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SubmittedData || null}
         */
        this.SubmittedData = null;

        /**
         * Whether the certificate can be deployed
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Deployable = null;

        /**
         * List of tags
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tags> || null}
         */
        this.Tags = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.From = 'From' in params ? params.From : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.ProductZhName = 'ProductZhName' in params ? params.ProductZhName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusMsg = 'StatusMsg' in params ? params.StatusMsg : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.VulnerabilityStatus = 'VulnerabilityStatus' in params ? params.VulnerabilityStatus : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

        if (params.CertificateExtra) {
            let obj = new CertificateExtra();
            obj.deserialize(params.CertificateExtra)
            this.CertificateExtra = obj;
        }

        if (params.DvAuthDetail) {
            let obj = new DvAuthDetail();
            obj.deserialize(params.DvAuthDetail)
            this.DvAuthDetail = obj;
        }
        this.VulnerabilityReport = 'VulnerabilityReport' in params ? params.VulnerabilityReport : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.PackageTypeName = 'PackageTypeName' in params ? params.PackageTypeName : null;
        this.StatusName = 'StatusName' in params ? params.StatusName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.IsWildcard = 'IsWildcard' in params ? params.IsWildcard : null;
        this.IsDv = 'IsDv' in params ? params.IsDv : null;
        this.IsVulnerability = 'IsVulnerability' in params ? params.IsVulnerability : null;
        this.RenewAble = 'RenewAble' in params ? params.RenewAble : null;

        if (params.SubmittedData) {
            let obj = new SubmittedData();
            obj.deserialize(params.SubmittedData)
            this.SubmittedData = obj;
        }
        this.Deployable = 'Deployable' in params ? params.Deployable : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Certificate operation logs
 * @class
 */
class OperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action performed on logs
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Time when the action is performed
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
        this.Action = 'Action' in params ? params.Action : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;

    }
}

/**
 * Root certificate
 * @class
 */
class RootCertificates extends  AbstractModel {
    constructor(){
        super();

        /**
         * Chinese SM signature certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * Chinese SM encryption certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Encrypt = null;

        /**
         * Standard certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Standard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.Standard = 'Standard' in params ? params.Standard : null;

    }
}

/**
 * UploadCertificate request structure.
 * @class
 */
class UploadCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public key of the certificate
         * @type {string || null}
         */
        this.CertificatePublicKey = null;

        /**
         * Private key content. This parameter is required when the certificate type is SVR, and not required when the certificate type is CA.
         * @type {string || null}
         */
        this.CertificatePrivateKey = null;

        /**
         * Certificate type. `CA`: client certificate; `SVR`: server certificate. The default value is SVR.
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * Alias
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 
         * @type {string || null}
         */
        this.CertificateUse = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificatePublicKey = 'CertificatePublicKey' in params ? params.CertificatePublicKey : null;
        this.CertificatePrivateKey = 'CertificatePrivateKey' in params ? params.CertificatePrivateKey : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CertificateUse = 'CertificateUse' in params ? params.CertificateUse : null;

    }
}

/**
 * DescribeCertificateDetail request structure.
 * @class
 */
class DescribeCertificateDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * Tag
 * @class
 */
class Tags extends  AbstractModel {
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
 * ApplyCertificate request structure.
 * @class
 */
class ApplyCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Validation type. `DNS_AUTO`: automatic DNS validation; `DNS`: manual DNS validation; `FILE`: file validation
         * @type {string || null}
         */
        this.DvAuthMethod = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Certificate type. Currently, the only supported value is 2, which indicates TrustAsia TLS RSA CA.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Email address
         * @type {string || null}
         */
        this.ContactEmail = null;

        /**
         * Mobile number
         * @type {string || null}
         */
        this.ContactPhone = null;

        /**
         * Validity period. The default value is 12 months, which is the only supported value currently.
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * Encryption algorithm. Only RSA is supported.
         * @type {string || null}
         */
        this.CsrEncryptAlgo = null;

        /**
         * Key pair parameter. Only the 2048-bit key pair is supported.
         * @type {string || null}
         */
        this.CsrKeyParameter = null;

        /**
         * CSR encryption password
         * @type {string || null}
         */
        this.CsrKeyPassword = null;

        /**
         * Alias
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Original certificate ID, which is used to apply for a new certificate.
         * @type {string || null}
         */
        this.OldCertificateId = null;

        /**
         * Benefit package ID, which is used to expand the free certificate package
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * Whether to delete the automatic domain name verification record after issuance, which is no by default. This parameter can be passed in only for domain names of the DNS_AUTO verification type.
         * @type {boolean || null}
         */
        this.DeleteDnsAutoRecord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DvAuthMethod = 'DvAuthMethod' in params ? params.DvAuthMethod : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.ContactEmail = 'ContactEmail' in params ? params.ContactEmail : null;
        this.ContactPhone = 'ContactPhone' in params ? params.ContactPhone : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.CsrEncryptAlgo = 'CsrEncryptAlgo' in params ? params.CsrEncryptAlgo : null;
        this.CsrKeyParameter = 'CsrKeyParameter' in params ? params.CsrKeyParameter : null;
        this.CsrKeyPassword = 'CsrKeyPassword' in params ? params.CsrKeyPassword : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.OldCertificateId = 'OldCertificateId' in params ? params.OldCertificateId : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.DeleteDnsAutoRecord = 'DeleteDnsAutoRecord' in params ? params.DeleteDnsAutoRecord : null;

    }
}

/**
 * ReplaceCertificate request structure.
 * @class
 */
class ReplaceCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Validation type. `DNS_AUTO`: automatic DNS validation; `DNS`: manual DNS validation; `FILE`: file validation
         * @type {string || null}
         */
        this.ValidType = null;

        /**
         * Type. `original`: original certificate CSR; `upload`: uploaded manually; `online`: generated online. The default value is original.
         * @type {string || null}
         */
        this.CsrType = null;

        /**
         * CSR content
         * @type {string || null}
         */
        this.CsrContent = null;

        /**
         * Password of the key
         * @type {string || null}
         */
        this.CsrkeyPassword = null;

        /**
         * Reissue reason
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ValidType = 'ValidType' in params ? params.ValidType : null;
        this.CsrType = 'CsrType' in params ? params.CsrType : null;
        this.CsrContent = 'CsrContent' in params ? params.CsrContent : null;
        this.CsrkeyPassword = 'CsrkeyPassword' in params ? params.CsrkeyPassword : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * DeleteCertificate response structure.
 * @class
 */
class DeleteCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deletion result
         * @type {boolean || null}
         */
        this.DeleteResult = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeleteResult = 'DeleteResult' in params ? params.DeleteResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Content of the `DvAuthDetail` parameter returned by `DescribeCertificates`
 * @class
 */
class DvAuthDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * DV authentication key
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthKey = null;

        /**
         * DV authentication value
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthValue = null;

        /**
         * Domain name of the DV authentication value
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthDomain = null;

        /**
         * Path of the DV authentication value
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthPath = null;

        /**
         * DV authentication sub-domain name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthKeySubDomain = null;

        /**
         * DV authentication information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DvAuths> || null}
         */
        this.DvAuths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DvAuthKey = 'DvAuthKey' in params ? params.DvAuthKey : null;
        this.DvAuthValue = 'DvAuthValue' in params ? params.DvAuthValue : null;
        this.DvAuthDomain = 'DvAuthDomain' in params ? params.DvAuthDomain : null;
        this.DvAuthPath = 'DvAuthPath' in params ? params.DvAuthPath : null;
        this.DvAuthKeySubDomain = 'DvAuthKeySubDomain' in params ? params.DvAuthKeySubDomain : null;

        if (params.DvAuths) {
            this.DvAuths = new Array();
            for (let z in params.DvAuths) {
                let obj = new DvAuths();
                obj.deserialize(params.DvAuths[z]);
                this.DvAuths.push(obj);
            }
        }

    }
}

/**
 * ModifyCertificateProject request structure.
 * @class
 */
class ModifyCertificateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of certificates whose projects need to be modified. A maximum of 100 certificate IDs are supported.
         * @type {Array.<string> || null}
         */
        this.CertificateIdList = null;

        /**
         * Project ID
         * @type {number || null}
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
        this.CertificateIdList = 'CertificateIdList' in params ? params.CertificateIdList : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * Content of the `DvAuths` parameter
 * @class
 */
class DvAuths extends  AbstractModel {
    constructor(){
        super();

        /**
         * DV authentication key
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthKey = null;

        /**
         * DV authentication value
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthValue = null;

        /**
         * Domain name of the DV authentication value
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthDomain = null;

        /**
         * Path of the DV authentication value
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthPath = null;

        /**
         * DV authentication sub-domain name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthSubDomain = null;

        /**
         * DV authentication type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthVerifyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DvAuthKey = 'DvAuthKey' in params ? params.DvAuthKey : null;
        this.DvAuthValue = 'DvAuthValue' in params ? params.DvAuthValue : null;
        this.DvAuthDomain = 'DvAuthDomain' in params ? params.DvAuthDomain : null;
        this.DvAuthPath = 'DvAuthPath' in params ? params.DvAuthPath : null;
        this.DvAuthSubDomain = 'DvAuthSubDomain' in params ? params.DvAuthSubDomain : null;
        this.DvAuthVerifyType = 'DvAuthVerifyType' in params ? params.DvAuthVerifyType : null;

    }
}

/**
 * ModifyCertificateAlias request structure.
 * @class
 */
class ModifyCertificateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Alias
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * DescribeCertificate request structure.
 * @class
 */
class DescribeCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * Content of the `ProjectInfo` parameter. `ProjectInfo` is an element of `Certificates` array which is returned by `DescribeCertificates`.
 * @class
 */
class ProjectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * UIN of the project creator
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectCreatorUin = null;

        /**
         * Project creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectCreateTime = null;

        /**
         * Brief project information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectResume = null;

        /**
         * User UIN
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * Project ID
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectCreatorUin = 'ProjectCreatorUin' in params ? params.ProjectCreatorUin : null;
        this.ProjectCreateTime = 'ProjectCreateTime' in params ? params.ProjectCreateTime : null;
        this.ProjectResume = 'ProjectResume' in params ? params.ProjectResume : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeCertificateOperateLogs request structure.
 * @class
 */
class DescribeCertificateOperateLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of requested logs. The default value is 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Start time. The default value is 15 days ago.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time. The default value is the current time.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CancelCertificateOrder response structure.
 * @class
 */
class CancelCertificateOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the certificate whose order has been successfully cancelled
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitCertificateInformation response structure.
 * @class
 */
class SubmitCertificateInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCertificates response structure.
 * @class
 */
class DescribeCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Certificates> || null}
         */
        this.Certificates = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Certificates) {
            this.Certificates = new Array();
            for (let z in params.Certificates) {
                let obj = new Certificates();
                obj.deserialize(params.Certificates[z]);
                this.Certificates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadCertificate response structure.
 * @class
 */
class DownloadCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ZIP content encoded by using Base64. After the content is decoded by using Base64, it can be saved as a ZIP file.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * MIME type. `application/zip`: ZIP file
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadCertificate response structure.
 * @class
 */
class UploadCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCertificateDetail response structure.
 * @class
 */
class DescribeCertificateDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User UIN
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Project ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Certificate source. `trustasia`: TrustAsia; `upload`: certificate uploaded by users
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Certificate type. `CA`: client certificate; `SVR`: server certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * Certificate plan type. `1`: GeoTrust DV SSL CA - G3; `2`: TrustAsia TLS RSA CA; `3`: SecureSite EV Pro; `4`: SecureSite EV; `5`: SecureSite OV Pro; `6`: SecureSite OV; `7`: SecureSite OV wildcard; `8`: GeoTrust EV; `9`: GeoTrust OV; `10`: GeoTrust OV wildcard; `11`: TrustAsia DV multi-domain; `12`: TrustAsia DV wildcard; `13`: TrustAsia OV wildcard D3; `14`: TrustAsia OV D3; `15`: TrustAsia OV multi-domain D3; `16`: TrustAsia EV D3; `17`: TrustAsia EV multi-domain D3; `18`: GlobalSign OV; `19`: GlobalSign OV wildcard; `20`: GlobalSign EV; `21`: TrustAsia OV wildcard multi-domain D3; `22`: GlobalSign OV multi-domain; `23`: GlobalSign OV wildcard multi-domain; `24`: GlobalSign EV multi-domain
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Issuer
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductZhName = null;

        /**
         * Domain name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Alias
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Certificate status. `0`: reviewing; `1`: approved; `2`: unapproved; `3`: expired; `4`: DNS record added; `5`: enterprise-grade certificate, pending submission; `6`: canceling order; `7`: canceled; `8`: information submitted, pending confirmation letter upload; `9`: revoking certificate; `10`: revoked; `11`: reissuing; `12`: pending revocation confirmation letter upload
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Status information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * Validation type. `DNS_AUTO`: automatic DNS validation; `DNS`: manual DNS validation; `FILE`: file validation; `EMAIL`: email validation
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * Vulnerability scanning status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VulnerabilityStatus = null;

        /**
         * Time when the certificate takes effect
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * Time when the certificate expires
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * Validity period of the certificate, in months
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * Application time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * Order ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Extended information of the certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CertificateExtra || null}
         */
        this.CertificateExtra = null;

        /**
         * Private key of the certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificatePrivateKey = null;

        /**
         * Public key of the certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificatePublicKey = null;

        /**
         * DV authentication information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DvAuthDetail || null}
         */
        this.DvAuthDetail = null;

        /**
         * Vulnerability scanning assessment report
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VulnerabilityReport = null;

        /**
         * Certificate ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Certificate type name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * Status description
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusName = null;

        /**
         * Multiple domain names included in the certificate (excluding the primary domain name, which uses the `Domain` field)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * Whether the certificate is a paid one.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsVip = null;

        /**
         * Whether the certificate is a wildcard certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsWildcard = null;

        /**
         * Whether the certificate is a DV certificate
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsDv = null;

        /**
         * Whether the vulnerability scanning feature is enabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsVulnerability = null;

        /**
         * Submitted data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SubmittedData || null}
         */
        this.SubmittedData = null;

        /**
         * Whether the certificate can be renewed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.RenewAble = null;

        /**
         * Whether the certificate can be deployed
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Deployable = null;

        /**
         * List of associated tags
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Tags> || null}
         */
        this.Tags = null;

        /**
         * Root certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {RootCertificates || null}
         */
        this.RootCert = null;

        /**
         * Chinese SM encryption certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EncryptCert = null;

        /**
         * Private key of Chinese SM encryption
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EncryptPrivateKey = null;

        /**
         * SHA1 fingerprint of the signature certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertFingerprint = null;

        /**
         * SHA1 fingerprint of the encryption certificate (for Chinese SM certificates only)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EncryptCertFingerprint = null;

        /**
         * Certificate algorithm
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EncryptAlgorithm = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.From = 'From' in params ? params.From : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.ProductZhName = 'ProductZhName' in params ? params.ProductZhName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusMsg = 'StatusMsg' in params ? params.StatusMsg : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.VulnerabilityStatus = 'VulnerabilityStatus' in params ? params.VulnerabilityStatus : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

        if (params.CertificateExtra) {
            let obj = new CertificateExtra();
            obj.deserialize(params.CertificateExtra)
            this.CertificateExtra = obj;
        }
        this.CertificatePrivateKey = 'CertificatePrivateKey' in params ? params.CertificatePrivateKey : null;
        this.CertificatePublicKey = 'CertificatePublicKey' in params ? params.CertificatePublicKey : null;

        if (params.DvAuthDetail) {
            let obj = new DvAuthDetail();
            obj.deserialize(params.DvAuthDetail)
            this.DvAuthDetail = obj;
        }
        this.VulnerabilityReport = 'VulnerabilityReport' in params ? params.VulnerabilityReport : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.StatusName = 'StatusName' in params ? params.StatusName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.IsWildcard = 'IsWildcard' in params ? params.IsWildcard : null;
        this.IsDv = 'IsDv' in params ? params.IsDv : null;
        this.IsVulnerability = 'IsVulnerability' in params ? params.IsVulnerability : null;

        if (params.SubmittedData) {
            let obj = new SubmittedData();
            obj.deserialize(params.SubmittedData)
            this.SubmittedData = obj;
        }
        this.RenewAble = 'RenewAble' in params ? params.RenewAble : null;
        this.Deployable = 'Deployable' in params ? params.Deployable : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.RootCert) {
            let obj = new RootCertificates();
            obj.deserialize(params.RootCert)
            this.RootCert = obj;
        }
        this.EncryptCert = 'EncryptCert' in params ? params.EncryptCert : null;
        this.EncryptPrivateKey = 'EncryptPrivateKey' in params ? params.EncryptPrivateKey : null;
        this.CertFingerprint = 'CertFingerprint' in params ? params.CertFingerprint : null;
        this.EncryptCertFingerprint = 'EncryptCertFingerprint' in params ? params.EncryptCertFingerprint : null;
        this.EncryptAlgorithm = 'EncryptAlgorithm' in params ? params.EncryptAlgorithm : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCertificateAlias response structure.
 * @class
 */
class ModifyCertificateAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the successfully modified certificate
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitCertificateInformation request structure.
 * @class
 */
class SubmitCertificateInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * CSR generation mode. `online`: generated online; `parse`: uploaded manually
         * @type {string || null}
         */
        this.CsrType = null;

        /**
         * Uploaded CSR content
         * @type {string || null}
         */
        this.CsrContent = null;

        /**
         * Domain name bound with the certificate
         * @type {string || null}
         */
        this.CertificateDomain = null;

        /**
         * Uploaded domain name array (can be uploaded for a multi-domain certificate)
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

        /**
         * Password of the private key
         * @type {string || null}
         */
        this.KeyPassword = null;

        /**
         * Organization name
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * Division name
         * @type {string || null}
         */
        this.OrganizationDivision = null;

        /**
         * Detailed address of the organization
         * @type {string || null}
         */
        this.OrganizationAddress = null;

        /**
         * Country where the organization is located, for example, CN (China)
         * @type {string || null}
         */
        this.OrganizationCountry = null;

        /**
         * City where the organization is located
         * @type {string || null}
         */
        this.OrganizationCity = null;

        /**
         * Province where the organization is located
         * @type {string || null}
         */
        this.OrganizationRegion = null;

        /**
         * Postal code of the organization
         * @type {string || null}
         */
        this.PostalCode = null;

        /**
         * Area code of the fixed-line phone number of the organization
         * @type {string || null}
         */
        this.PhoneAreaCode = null;

        /**
         * Fixed-line phone number of the organization
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Certificate validation method
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * Last name of the administrator
         * @type {string || null}
         */
        this.AdminFirstName = null;

        /**
         * First name of the administrator
         * @type {string || null}
         */
        this.AdminLastName = null;

        /**
         * Mobile number of the administrator
         * @type {string || null}
         */
        this.AdminPhoneNum = null;

        /**
         * Email of the administrator
         * @type {string || null}
         */
        this.AdminEmail = null;

        /**
         * Position of the administrator
         * @type {string || null}
         */
        this.AdminPosition = null;

        /**
         * Last name of the contact
         * @type {string || null}
         */
        this.ContactFirstName = null;

        /**
         * First name of the contact
         * @type {string || null}
         */
        this.ContactLastName = null;

        /**
         * Email of the contact
         * @type {string || null}
         */
        this.ContactEmail = null;

        /**
         * Mobile number of the contact
         * @type {string || null}
         */
        this.ContactNumber = null;

        /**
         * Position of the contact
         * @type {string || null}
         */
        this.ContactPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CsrType = 'CsrType' in params ? params.CsrType : null;
        this.CsrContent = 'CsrContent' in params ? params.CsrContent : null;
        this.CertificateDomain = 'CertificateDomain' in params ? params.CertificateDomain : null;
        this.DomainList = 'DomainList' in params ? params.DomainList : null;
        this.KeyPassword = 'KeyPassword' in params ? params.KeyPassword : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.OrganizationDivision = 'OrganizationDivision' in params ? params.OrganizationDivision : null;
        this.OrganizationAddress = 'OrganizationAddress' in params ? params.OrganizationAddress : null;
        this.OrganizationCountry = 'OrganizationCountry' in params ? params.OrganizationCountry : null;
        this.OrganizationCity = 'OrganizationCity' in params ? params.OrganizationCity : null;
        this.OrganizationRegion = 'OrganizationRegion' in params ? params.OrganizationRegion : null;
        this.PostalCode = 'PostalCode' in params ? params.PostalCode : null;
        this.PhoneAreaCode = 'PhoneAreaCode' in params ? params.PhoneAreaCode : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.AdminFirstName = 'AdminFirstName' in params ? params.AdminFirstName : null;
        this.AdminLastName = 'AdminLastName' in params ? params.AdminLastName : null;
        this.AdminPhoneNum = 'AdminPhoneNum' in params ? params.AdminPhoneNum : null;
        this.AdminEmail = 'AdminEmail' in params ? params.AdminEmail : null;
        this.AdminPosition = 'AdminPosition' in params ? params.AdminPosition : null;
        this.ContactFirstName = 'ContactFirstName' in params ? params.ContactFirstName : null;
        this.ContactLastName = 'ContactLastName' in params ? params.ContactLastName : null;
        this.ContactEmail = 'ContactEmail' in params ? params.ContactEmail : null;
        this.ContactNumber = 'ContactNumber' in params ? params.ContactNumber : null;
        this.ContactPosition = 'ContactPosition' in params ? params.ContactPosition : null;

    }
}

/**
 * Content of the `SubmittedData` parameter returned by `DescribeCertificates`
 * @class
 */
class SubmittedData extends  AbstractModel {
    constructor(){
        super();

        /**
         * CSR type. `online`: CSR generated online; `parse`: CSR pasted
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CsrType = null;

        /**
         * CSR content
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CsrContent = null;

        /**
         * Domain name information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificateDomain = null;

        /**
         * DNS information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

        /**
         * Password of the private key
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyPassword = null;

        /**
         * Enterprise or unit name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * Division
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrganizationDivision = null;

        /**
         * Address
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrganizationAddress = null;

        /**
         * Country
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrganizationCountry = null;

        /**
         * City
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrganizationCity = null;

        /**
         * Province
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrganizationRegion = null;

        /**
         * Postal code
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PostalCode = null;

        /**
         * Area code of the fixed-line phone number
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PhoneAreaCode = null;

        /**
         * Fixed-line phone number
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * First name of the administrator
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AdminFirstName = null;

        /**
         * Last name of the administrator
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AdminLastName = null;

        /**
         * Phone number of the administrator
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AdminPhoneNum = null;

        /**
         * Email of the administrator
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AdminEmail = null;

        /**
         * Position of the administrator
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AdminPosition = null;

        /**
         * First name of the contact
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContactFirstName = null;

        /**
         * Last name of the contact
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContactLastName = null;

        /**
         * Phone number of the contact
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContactNumber = null;

        /**
         * Email of the contact
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContactEmail = null;

        /**
         * Position of the contact
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContactPosition = null;

        /**
         * Validation type
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CsrType = 'CsrType' in params ? params.CsrType : null;
        this.CsrContent = 'CsrContent' in params ? params.CsrContent : null;
        this.CertificateDomain = 'CertificateDomain' in params ? params.CertificateDomain : null;
        this.DomainList = 'DomainList' in params ? params.DomainList : null;
        this.KeyPassword = 'KeyPassword' in params ? params.KeyPassword : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.OrganizationDivision = 'OrganizationDivision' in params ? params.OrganizationDivision : null;
        this.OrganizationAddress = 'OrganizationAddress' in params ? params.OrganizationAddress : null;
        this.OrganizationCountry = 'OrganizationCountry' in params ? params.OrganizationCountry : null;
        this.OrganizationCity = 'OrganizationCity' in params ? params.OrganizationCity : null;
        this.OrganizationRegion = 'OrganizationRegion' in params ? params.OrganizationRegion : null;
        this.PostalCode = 'PostalCode' in params ? params.PostalCode : null;
        this.PhoneAreaCode = 'PhoneAreaCode' in params ? params.PhoneAreaCode : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.AdminFirstName = 'AdminFirstName' in params ? params.AdminFirstName : null;
        this.AdminLastName = 'AdminLastName' in params ? params.AdminLastName : null;
        this.AdminPhoneNum = 'AdminPhoneNum' in params ? params.AdminPhoneNum : null;
        this.AdminEmail = 'AdminEmail' in params ? params.AdminEmail : null;
        this.AdminPosition = 'AdminPosition' in params ? params.AdminPosition : null;
        this.ContactFirstName = 'ContactFirstName' in params ? params.ContactFirstName : null;
        this.ContactLastName = 'ContactLastName' in params ? params.ContactLastName : null;
        this.ContactNumber = 'ContactNumber' in params ? params.ContactNumber : null;
        this.ContactEmail = 'ContactEmail' in params ? params.ContactEmail : null;
        this.ContactPosition = 'ContactPosition' in params ? params.ContactPosition : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;

    }
}

/**
 * DescribeCertificates request structure.
 * @class
 */
class DescribeCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset, starting from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries per page. Default value: `20`. Maximum value: `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Keyword for search, which can be a certificate ID, alias, or domain name, for example, a8xHcaIs
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Certificate type. `CA`: client certificate; `SVR`: server certificate
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Sorting by expiration time. `DESC`: descending; `ASC`: ascending
         * @type {string || null}
         */
        this.ExpirationSort = null;

        /**
         * Certificate status. `0`: Reviewing; `1`: Approved; `2`: Unapproved; `3`: Expired; `4`: DNS record added; `5`: Enterprise-grade certificate, pending submission; `6`: Canceling order; `7`: Canceled; `8`: Information submitted, pending confirmation letter upload; `9`: Revoking certificate; `10`: Revoked; `11`: Reissuing; `12`: Pending revocation confirmation letter upload; `13`: Pending information submission for the free certificate.
         * @type {Array.<number> || null}
         */
        this.CertificateStatus = null;

        /**
         * Whether the certificate can be deployed. `1`: yes; `0`: no
         * @type {number || null}
         */
        this.Deployable = null;

        /**
         * Whether to filter uploaded hosted certificates. `1`: Yes; `0`: No.
         * @type {number || null}
         */
        this.Upload = null;

        /**
         * Whether to filter renewable certificates. `1`: Yes; `0`: No.
         * @type {number || null}
         */
        this.Renew = null;

        /**
         * Filter by source. `upload`: Uploaded certificate; `buy`: Tencent Cloud certificate. If this parameter is left empty, all certificates will be queried.
         * @type {string || null}
         */
        this.FilterSource = null;

        /**
         * Whether to filter Chinese SM certificates. `1`: Yes; `0`: No.
         * @type {number || null}
         */
        this.IsSM = null;

        /**
         * Whether to filter expiring certificates. `1`: Yes; `0`: No.
         * @type {number || null}
         */
        this.FilterExpiring = null;

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
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ExpirationSort = 'ExpirationSort' in params ? params.ExpirationSort : null;
        this.CertificateStatus = 'CertificateStatus' in params ? params.CertificateStatus : null;
        this.Deployable = 'Deployable' in params ? params.Deployable : null;
        this.Upload = 'Upload' in params ? params.Upload : null;
        this.Renew = 'Renew' in params ? params.Renew : null;
        this.FilterSource = 'FilterSource' in params ? params.FilterSource : null;
        this.IsSM = 'IsSM' in params ? params.IsSM : null;
        this.FilterExpiring = 'FilterExpiring' in params ? params.FilterExpiring : null;

    }
}

/**
 * List of prereview information
 * @class
 */
class PreAuditInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of years of the certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalPeriod = null;

        /**
         * Current year of the certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NowPeriod = null;

        /**
         * Certificate prereview manager ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ManagerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalPeriod = 'TotalPeriod' in params ? params.TotalPeriod : null;
        this.NowPeriod = 'NowPeriod' in params ? params.NowPeriod : null;
        this.ManagerId = 'ManagerId' in params ? params.ManagerId : null;

    }
}

module.exports = {
    ApplyCertificateResponse: ApplyCertificateResponse,
    DeleteCertificateRequest: DeleteCertificateRequest,
    DescribeCertificateOperateLogsResponse: DescribeCertificateOperateLogsResponse,
    CommitCertificateInformationRequest: CommitCertificateInformationRequest,
    CommitCertificateInformationResponse: CommitCertificateInformationResponse,
    ReplaceCertificateResponse: ReplaceCertificateResponse,
    DownloadCertificateRequest: DownloadCertificateRequest,
    CancelCertificateOrderRequest: CancelCertificateOrderRequest,
    ModifyCertificateProjectResponse: ModifyCertificateProjectResponse,
    Certificates: Certificates,
    CertificateExtra: CertificateExtra,
    DescribeCertificateResponse: DescribeCertificateResponse,
    OperationLog: OperationLog,
    RootCertificates: RootCertificates,
    UploadCertificateRequest: UploadCertificateRequest,
    DescribeCertificateDetailRequest: DescribeCertificateDetailRequest,
    Tags: Tags,
    ApplyCertificateRequest: ApplyCertificateRequest,
    ReplaceCertificateRequest: ReplaceCertificateRequest,
    DeleteCertificateResponse: DeleteCertificateResponse,
    DvAuthDetail: DvAuthDetail,
    ModifyCertificateProjectRequest: ModifyCertificateProjectRequest,
    DvAuths: DvAuths,
    ModifyCertificateAliasRequest: ModifyCertificateAliasRequest,
    DescribeCertificateRequest: DescribeCertificateRequest,
    ProjectInfo: ProjectInfo,
    DescribeCertificateOperateLogsRequest: DescribeCertificateOperateLogsRequest,
    CancelCertificateOrderResponse: CancelCertificateOrderResponse,
    SubmitCertificateInformationResponse: SubmitCertificateInformationResponse,
    DescribeCertificatesResponse: DescribeCertificatesResponse,
    DownloadCertificateResponse: DownloadCertificateResponse,
    UploadCertificateResponse: UploadCertificateResponse,
    DescribeCertificateDetailResponse: DescribeCertificateDetailResponse,
    ModifyCertificateAliasResponse: ModifyCertificateAliasResponse,
    SubmitCertificateInformationRequest: SubmitCertificateInformationRequest,
    SubmittedData: SubmittedData,
    DescribeCertificatesRequest: DescribeCertificatesRequest,
    PreAuditInfo: PreAuditInfo,

}
