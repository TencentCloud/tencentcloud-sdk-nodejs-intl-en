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
 * DescribeCertificateBindResourceTaskDetail request structure.
 * @class
 */
class DescribeCertificateBindResourceTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID, which is required to query the result of associated cloud resources.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The number of cloud resources displayed on each page. The default value is 10, and the maximum value is 100.
         * @type {string || null}
         */
        this.Limit = null;

        /**
         * The current offset.
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * The types of the resources to be queried. If no value is passed in, all types of resources will be queried.
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

        /**
         * The regions of the resources to be queried. Only CLB, TKE, WAF, APIGATEWAY, and TCB resources support the query by region.
         * @type {Array.<string> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ResourceTypes = 'ResourceTypes' in params ? params.ResourceTypes : null;
        this.Regions = 'Regions' in params ? params.Regions : null;

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
 * ModifyCSR request structure.
 * @class
 */
class ModifyCSRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CSR ID.	
         * @type {number || null}
         */
        this.CSRId = null;

        /**
         * Whether to generate the CSR content. Once the CSR content is generated, the CSR record cannot be modified.
         * @type {boolean || null}
         */
        this.Generate = null;

        /**
         * The domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The organization name.
         * @type {string || null}
         */
        this.Organization = null;

        /**
         * The department.
         * @type {string || null}
         */
        this.Department = null;

        /**
         * The email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The province.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * The city.
         * @type {string || null}
         */
        this.City = null;

        /**
         * The country or region.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The encryption algorithm. RSA and ECC are supported.	
         * @type {string || null}
         */
        this.EncryptAlgo = null;

        /**
         * The key pair parameter. For RSA, only the 2048-bit and 4096-bit key pairs are supported. For ECC, only prime256v1 is supported.
         * @type {string || null}
         */
        this.KeyParameter = null;

        /**
         * The remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * The password of the private key.
         * @type {string || null}
         */
        this.KeyPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CSRId = 'CSRId' in params ? params.CSRId : null;
        this.Generate = 'Generate' in params ? params.Generate : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Organization = 'Organization' in params ? params.Organization : null;
        this.Department = 'Department' in params ? params.Department : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.EncryptAlgo = 'EncryptAlgo' in params ? params.EncryptAlgo : null;
        this.KeyParameter = 'KeyParameter' in params ? params.KeyParameter : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.KeyPassword = 'KeyPassword' in params ? params.KeyPassword : null;

    }
}

/**
 * TCB access instances
 * @class
 */
class TCBAccessInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The status.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The unified domain status.

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UnionStatus = null;

        /**
         * Whether the domain is preempted. A preempted domain is one that is already associated with another environment. It must be disassociated or re-associated first.

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsPreempted = null;

        /**
         * Whether the domain is added to the ICP blocklist. Valid values: `0` for no and `1` for yes.

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ICPStatus = null;

        /**
         * The ID of the associated certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OldCertificateId = null;

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
        this.UnionStatus = 'UnionStatus' in params ? params.UnionStatus : null;
        this.IsPreempted = 'IsPreempted' in params ? params.IsPreempted : null;
        this.ICPStatus = 'ICPStatus' in params ? params.ICPStatus : null;
        this.OldCertificateId = 'OldCertificateId' in params ? params.OldCertificateId : null;

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
         * The certificate plan type. Valid values:
null: Certificates uploaded by users (no plan type)
`1`: GeoTrust DV SSL CA - G3; `2`: TrustAsia TLS RSA CA; `3`: SecureSite EV Pro; `4`: SecureSite EV; `5`: SecureSite OV Pro; `6`: SecureSite OV; `7`: SecureSite OV wildcard; `8`: GeoTrust EV; `9`: GeoTrust OV; `10`: GeoTrust OV wildcard; `11`: TrustAsia DV multi-domain; `12`: TrustAsia DV wildcard; `13`: TrustAsia OV wildcard D3; `14`: TrustAsia OV D3; `15`: TrustAsia OV multi-domain D3; `16`: TrustAsia EV D3; `17`: TrustAsia EV multi-domain D3; `18`: GlobalSign OV; `19`: GlobalSign OV wildcard; `20`: GlobalSign EV; `21`: TrustAsia OV wildcard multi-domain D3; `22`: GlobalSign OV multi-domain; `23`: GlobalSign OV wildcard multi-domain; `24`: GlobalSign EV multi-domain
Note: This field may return null, indicating that no valid values can be obtained.
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

        /**
         * Whether the certificate is a Chinese SM certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SMCert = null;

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
        this.SMCert = 'SMCert' in params ? params.SMCert : null;

    }
}

/**
 * Details of the EDGEONE instances - data structure of an async task for querying associated cloud resources
 * @class
 */
class TeoInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of EDGEONE instances.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TeoInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * The total number of EDGEONE instances.	
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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new TeoInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

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
 * Details of a CDN instance
 * @class
 */
class CdnInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The ID of the deployed certificate.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * The status of the domain.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The billing status of the domain.
         * @type {string || null}
         */
        this.HttpsBillingSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.HttpsBillingSwitch = 'HttpsBillingSwitch' in params ? params.HttpsBillingSwitch : null;

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
 * Details of a TKE namespace
 * @class
 */
class TkeNameSpaceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The namespace name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The secret list.
         * @type {Array.<TkeSecretDetail> || null}
         */
        this.SecretList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SecretList) {
            this.SecretList = new Array();
            for (let z in params.SecretList) {
                let obj = new TkeSecretDetail();
                obj.deserialize(params.SecretList[z]);
                this.SecretList.push(obj);
            }
        }

    }
}

/**
 * CreateCertificateBindResourceSyncTask response structure.
 * @class
 */
class CreateCertificateBindResourceSyncTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of async tasks for querying cloud resources associated with a certificate.
         * @type {Array.<CertTaskId> || null}
         */
        this.CertTaskIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CertTaskIds) {
            this.CertTaskIds = new Array();
            for (let z in params.CertTaskIds) {
                let obj = new CertTaskId();
                obj.deserialize(params.CertTaskIds[z]);
                this.CertTaskIds.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of TCB service instances subject to static hosting
 * @class
 */
class TCBHostInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The status.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The resolution status.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DNSStatus = null;

        /**
         * The ID of the associated certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OldCertificateId = null;

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
        this.DNSStatus = 'DNSStatus' in params ? params.DNSStatus : null;
        this.OldCertificateId = 'OldCertificateId' in params ? params.OldCertificateId : null;

    }
}

/**
 * Details of a CLB instance listener
 * @class
 */
class ClbListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * The listener ID.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * The listener name.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Whether to enable SNI. Valid values: `1` (enable) and `0` (disable).
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * The listener protocol type. Valid values: `HTTPS` and `TCP_SSL`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The information of the certificate bound to the listener.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Certificate || null}
         */
        this.Certificate = null;

        /**
         * The list of the listener rules.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClbListenerRule> || null}
         */
        this.Rules = null;

        /**
         * The list of non-matching domains.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NoMatchDomains = null;

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
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.Certificate) {
            let obj = new Certificate();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ClbListenerRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.NoMatchDomains = 'NoMatchDomains' in params ? params.NoMatchDomains : null;

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
 * BatchDeleteCSR request structure.
 * @class
 */
class BatchDeleteCSRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of the CSRs to be deleted, 100 IDs at most.
         * @type {Array.<number> || null}
         */
        this.CSRIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CSRIds = 'CSRIds' in params ? params.CSRIds : null;

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
 * Details of TCB instances by environment - data structure of an async task for querying associated cloud resources
 * @class
 */
class TCBEnvironments extends  AbstractModel {
    constructor(){
        super();

        /**
         * The TCB environment.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TCBEnvironment || null}
         */
        this.Environment = null;

        /**
         * The access service.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TCBAccessService || null}
         */
        this.AccessService = null;

        /**
         * Whether static hosting is used.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TCBHostService || null}
         */
        this.HostService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Environment) {
            let obj = new TCBEnvironment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }

        if (params.AccessService) {
            let obj = new TCBAccessService();
            obj.deserialize(params.AccessService)
            this.AccessService = obj;
        }

        if (params.HostService) {
            let obj = new TCBHostService();
            obj.deserialize(params.HostService)
            this.HostService = obj;
        }

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
 * Details of DDOS instances - data structure of an async task for querying associated cloud resources
 * @class
 */
class DdosInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of DDOS instances in this region.	
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of DDOS instances.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DdosInstanceDetail> || null}
         */
        this.InstanceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new DdosInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }

    }
}

/**
 * DescribeCSRSet response structure.
 * @class
 */
class DescribeCSRSetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of CSRs.	
         * @type {number || null}
         */
        this.Total = null;

        /**
         * The list of CSRs.
         * @type {Array.<CSRItem> || null}
         */
        this.Set = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.Set) {
            this.Set = new Array();
            for (let z in params.Set) {
                let obj = new CSRItem();
                obj.deserialize(params.Set[z]);
                this.Set.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCSR request structure.
 * @class
 */
class DescribeCSRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CSR ID.
         * @type {number || null}
         */
        this.CSRId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CSRId = 'CSRId' in params ? params.CSRId : null;

    }
}

/**
 * DescribeCertificateBindResourceTaskResult request structure.
 * @class
 */
class DescribeCertificateBindResourceTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task IDs, which are used to query the results of associated cloud resources, 100 IDs at most.
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

    }
}

/**
 * Associated cloud resources
 * @class
 */
class BindResourceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported types: CLB, CDN, WAF, LIVE, VOD, DDOS, TKE, APIGATEWAY, TCB, and TEO (EDGEONE).
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * The region of associated cloud resources.
         * @type {Array.<BindResourceRegionResult> || null}
         */
        this.BindResourceRegionResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.BindResourceRegionResult) {
            this.BindResourceRegionResult = new Array();
            for (let z in params.BindResourceRegionResult) {
                let obj = new BindResourceRegionResult();
                obj.deserialize(params.BindResourceRegionResult[z]);
                this.BindResourceRegionResult.push(obj);
            }
        }

    }
}

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
 * CreateCertificateBindResourceSyncTask request structure.
 * @class
 */
class CreateCertificateBindResourceSyncTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of certificate IDs, 100 IDs at most.
         * @type {Array.<string> || null}
         */
        this.CertificateIds = null;

        /**
         * Whether to use the cached results. Valid values: `1` (default) for yes and `0` for no. If any task completed within last 30 minutes exists under the current certificate ID, and the cache is used, the query result of the last task completed within 30 minutes will be read.
         * @type {number || null}
         */
        this.IsCache = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.IsCache = 'IsCache' in params ? params.IsCache : null;

    }
}

/**
 * UploadConfirmLetter response structure.
 * @class
 */
class UploadConfirmLetterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Whether the operation is successful
         * @type {boolean || null}
         */
        this.IsSuccess = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
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
 * Result of an async task for querying associated cloud resources
 * @class
 */
class SyncTaskBindResourceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The associated cloud resources.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BindResourceResult> || null}
         */
        this.BindResourceResult = null;

        /**
         * The status of the async task. Valid values: `0` for querying, `1` for successful, and `2` for abnormal. If the status is `1`, the result of `BindResourceResult` will be displayed; if the status is `2`, the error causes will be displayed.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The error occurred when querying the associated cloud resources.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Error || null}
         */
        this.Error = null;

        /**
         * The cache time of the current result.
         * @type {string || null}
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.BindResourceResult) {
            this.BindResourceResult = new Array();
            for (let z in params.BindResourceResult) {
                let obj = new BindResourceResult();
                obj.deserialize(params.BindResourceResult[z]);
                this.BindResourceResult.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Error) {
            let obj = new Error();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * Details of a CLB instance
 * @class
 */
class ClbInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CLB instance ID.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * The CLB instance name.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * The list of CLB listeners.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClbListener> || null}
         */
        this.Listeners = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ClbListener();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }

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
 * Details of a VOD instance
 * @class
 */
class VodInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The certificate ID.
         * @type {string || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * DescribeCertificateBindResourceTaskDetail response structure.
 * @class
 */
class DescribeCertificateBindResourceTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The details of associated CLB resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClbInstanceList> || null}
         */
        this.CLB = null;

        /**
         * The details of associated CDN resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CdnInstanceList> || null}
         */
        this.CDN = null;

        /**
         * The details of associated WAF resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WafInstanceList> || null}
         */
        this.WAF = null;

        /**
         * The details of associated Anti-DDS resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DdosInstanceList> || null}
         */
        this.DDOS = null;

        /**
         * The details of associated LIVE resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LiveInstanceList> || null}
         */
        this.LIVE = null;

        /**
         * The details of associated VOD resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<VODInstanceList> || null}
         */
        this.VOD = null;

        /**
         * The details of associated TKE resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TkeInstanceList> || null}
         */
        this.TKE = null;

        /**
         * The details of associated APIGATEWAY resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApiGatewayInstanceList> || null}
         */
        this.APIGATEWAY = null;

        /**
         * The details of associated TCB resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TCBInstanceList> || null}
         */
        this.TCB = null;

        /**
         * The details of associated TEO resources.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TeoInstanceList> || null}
         */
        this.TEO = null;

        /**
         * The status of the async task. Valid values: `0` for querying, `1` for successful, and `2` for abnormal. If the status is `1`, the result of `BindResourceResult` will be displayed; if the status is `2`, the error causes will be displayed.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The cache time of the current result.
         * @type {string || null}
         */
        this.CacheTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CLB) {
            this.CLB = new Array();
            for (let z in params.CLB) {
                let obj = new ClbInstanceList();
                obj.deserialize(params.CLB[z]);
                this.CLB.push(obj);
            }
        }

        if (params.CDN) {
            this.CDN = new Array();
            for (let z in params.CDN) {
                let obj = new CdnInstanceList();
                obj.deserialize(params.CDN[z]);
                this.CDN.push(obj);
            }
        }

        if (params.WAF) {
            this.WAF = new Array();
            for (let z in params.WAF) {
                let obj = new WafInstanceList();
                obj.deserialize(params.WAF[z]);
                this.WAF.push(obj);
            }
        }

        if (params.DDOS) {
            this.DDOS = new Array();
            for (let z in params.DDOS) {
                let obj = new DdosInstanceList();
                obj.deserialize(params.DDOS[z]);
                this.DDOS.push(obj);
            }
        }

        if (params.LIVE) {
            this.LIVE = new Array();
            for (let z in params.LIVE) {
                let obj = new LiveInstanceList();
                obj.deserialize(params.LIVE[z]);
                this.LIVE.push(obj);
            }
        }

        if (params.VOD) {
            this.VOD = new Array();
            for (let z in params.VOD) {
                let obj = new VODInstanceList();
                obj.deserialize(params.VOD[z]);
                this.VOD.push(obj);
            }
        }

        if (params.TKE) {
            this.TKE = new Array();
            for (let z in params.TKE) {
                let obj = new TkeInstanceList();
                obj.deserialize(params.TKE[z]);
                this.TKE.push(obj);
            }
        }

        if (params.APIGATEWAY) {
            this.APIGATEWAY = new Array();
            for (let z in params.APIGATEWAY) {
                let obj = new ApiGatewayInstanceList();
                obj.deserialize(params.APIGATEWAY[z]);
                this.APIGATEWAY.push(obj);
            }
        }

        if (params.TCB) {
            this.TCB = new Array();
            for (let z in params.TCB) {
                let obj = new TCBInstanceList();
                obj.deserialize(params.TCB[z]);
                this.TCB.push(obj);
            }
        }

        if (params.TEO) {
            this.TEO = new Array();
            for (let z in params.TEO) {
                let obj = new TeoInstanceList();
                obj.deserialize(params.TEO[z]);
                this.TEO.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;
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
 * ModifyCSR response structure.
 * @class
 */
class ModifyCSRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CSR ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of CDN instances - data structure of an async task for querying associated cloud resources
 * @class
 */
class CdnInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of CDN domains in this region.	
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of CDN domains.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CdnInstanceDetail> || null}
         */
        this.InstanceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new CdnInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }

    }
}

/**
 * Details of a DDOS instance
 * @class
 */
class DdosInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The protocol type.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * The certificate ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * The forwarding port.
         * @type {string || null}
         */
        this.VirtualPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;

    }
}

/**
 * CreateCertificate request structure.
 * @class
 */
class CreateCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate product ID. `3`: SecureSite EV Pro; `4`: SecureSite EV; `5`: SecureSite OV Pro; `6`: SecureSite OV; `7`: SecureSite OV wildcard; `8`: GeoTrust EV; `9`: GeoTrust OV; `10`: GeoTrust OV wildcard; `11`: TrustAsia DV multi-domain; `12`: TrustAsia DV wildcard; `13`: TrustAsia OV wildcard D3; `14`: TrustAsia OV D3; `15`: TrustAsia OV multi-domain D3; `16`: TrustAsia EV D3; `17`: TrustAsia EV multi-domain D3; `18`: GlobalSign OV; `19`: GlobalSign OV wildcard; `20`: GlobalSign EV; `21`: TrustAsia OV wildcard multi-domain D3; `22`: GlobalSign OV multi-domain; `23`: GlobalSign OV wildcard multi-domain; `24`: GlobalSign EV multi-domain; `25` WoTrus DV; `26`: WoTrus DV multi-domain; `27`: WoTrus DV wildcard; `28`: WoTrus OV; `29`: WoTrus OV multi-domain; `30`: WoTrus OV wildcard; `31`: WoTrus EV; `32`: WoTrus EV multi-domain; `33`: DNSPod SM2 DV; `34`: DNSPod SM2 DV multi-domain; `35`: DNSPod SM2 DV wildcard; `37`: DNSPod SM2 OV; `38`: DNSPod SM2 OV multi-domain; `39`: DNSPod SM2 OV wildcard: `40`: DNSPod SM2 EV; `41`: DNSPod SM2 EV multi-domain; `42`: TrustAsia DV wildcard multi-domain.
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * Number of domains associated with the certificate
         * @type {number || null}
         */
        this.DomainNum = null;

        /**
         * Certificate validity period. Currently, you can only purchase 1-year certificates.
         * @type {number || null}
         */
        this.TimeSpan = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DomainNum = 'DomainNum' in params ? params.DomainNum : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

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
         * The ID of the repeatedly uploaded certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RepeatCertId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RepeatCertId = 'RepeatCertId' in params ? params.RepeatCertId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of a LIVE instance
 * @class
 */
class LiveInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The ID of the associated certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * The status. Valid values: `-1`: No certificate is associated with the domain.
`1`: HTTPS is enabled for the domain.
`0`: HTTPS is disabled for the domain.
         * @type {number || null}
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * Details of TCB environment instance
 * @class
 */
class TCBEnvironment extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * The source.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Source = null;

        /**
         * The name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The status.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.ID = 'ID' in params ? params.ID : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Details of a WAF instance
 * @class
 */
class WafInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The certificate ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Whether to keep the persistent connection.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Keepalive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Keepalive = 'Keepalive' in params ? params.Keepalive : null;

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

        /**
         * Whether the certificate can be hosted. Valid values: `1` for yes and `0` for no.
         * @type {number || null}
         */
        this.Hostable = null;

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
        this.Hostable = 'Hostable' in params ? params.Hostable : null;

    }
}

/**
 * Details of APIGATEWAY instances - data structure of an async task for querying associated cloud resources
 * @class
 */
class ApiGatewayInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The list of APIGATEWAY instances.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ApiGatewayInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * The total number of APIGATEWAY instances in this region.	
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
        this.Region = 'Region' in params ? params.Region : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new ApiGatewayInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * Details of TEO instances
 * @class
 */
class TeoInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * The certificate ID.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * The AZ ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * The status of the domain.
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
        this.Host = 'Host' in params ? params.Host : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;

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

/**
 * CreateCSR response structure.
 * @class
 */
class CreateCSRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CSR ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of a CLB certificate
 * @class
 */
class Certificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The certificate ID.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * The list of domains bound to the certificate.
         * @type {Array.<string> || null}
         */
        this.DnsNames = null;

        /**
         * The root certificate ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * The authentication type. Valid values: `UNIDIRECTIONAL` (one-way authentication) and `MUTUAL` (two-way authentication).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SSLMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.DnsNames = 'DnsNames' in params ? params.DnsNames : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.SSLMode = 'SSLMode' in params ? params.SSLMode : null;

    }
}

/**
 * BatchDeleteCSR response structure.
 * @class
 */
class BatchDeleteCSRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of the CSRs successfully deleted.
         * @type {Array.<number> || null}
         */
        this.Success = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Success = 'Success' in params ? params.Success : null;
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

        /**
         * Domain validation method
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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;

    }
}

/**
 * Details of a CSR
 * @class
 */
class CSRItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CSR ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The account.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * The domain.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The organization name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Organization = null;

        /**
         * The department.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Department = null;

        /**
         * The email address.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The province.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * The city.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.City = null;

        /**
         * The country or region.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The remarks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remarks = null;

        /**
         * The status.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The creation time.
Note: u200dThis field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The encryption algorithm.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EncryptAlgo = null;

        /**
         * The algorithm parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Organization = 'Organization' in params ? params.Organization : null;
        this.Department = 'Department' in params ? params.Department : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Remarks = 'Remarks' in params ? params.Remarks : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EncryptAlgo = 'EncryptAlgo' in params ? params.EncryptAlgo : null;
        this.KeyParameter = 'KeyParameter' in params ? params.KeyParameter : null;

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

        /**
         * The CSR encryption algorithm. Valid values: `RSA` (default), `ECC1`, and `SM2`.
This parameter is available for selection only when the value of `CsrType` is `Online`.
         * @type {string || null}
         */
        this.CertCSREncryptAlgo = null;

        /**
         * The CSR encryption parameters. When `CsrEncryptAlgo` is set to `RSA`, `2048` (default) and `4096` are available for selection; and when`CsrEncryptAlgo` is set to `ECC`, `prime256v1` (default) and `secp384r1` are available for selection. 
         * @type {string || null}
         */
        this.CertCSRKeyParameter = null;

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
        this.CertCSREncryptAlgo = 'CertCSREncryptAlgo' in params ? params.CertCSREncryptAlgo : null;
        this.CertCSRKeyParameter = 'CertCSRKeyParameter' in params ? params.CertCSRKeyParameter : null;

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
         * All encryption algorithms of a CA certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CAEncryptAlgorithms = null;

        /**
         * All common names of a CA certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CACommonNames = null;

        /**
         * All expiration time of a CA certificate
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CAEndTimes = null;

        /**
         * The authentication value for DV certificate revocation.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DvAuths> || null}
         */
        this.DvRevokeAuthDetail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.CAEncryptAlgorithms = 'CAEncryptAlgorithms' in params ? params.CAEncryptAlgorithms : null;
        this.CACommonNames = 'CACommonNames' in params ? params.CACommonNames : null;
        this.CAEndTimes = 'CAEndTimes' in params ? params.CAEndTimes : null;

        if (params.DvRevokeAuthDetail) {
            this.DvRevokeAuthDetail = new Array();
            for (let z in params.DvRevokeAuthDetail) {
                let obj = new DvAuths();
                obj.deserialize(params.DvRevokeAuthDetail[z]);
                this.DvRevokeAuthDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of a TKE secret
 * @class
 */
class TkeSecretDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The secret name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The certificate ID.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * The Ingress list.
         * @type {Array.<TkeIngressDetail> || null}
         */
        this.IngressList = null;

        /**
         * The list of domains that do not match the new certificate.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NoMatchDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CertId = 'CertId' in params ? params.CertId : null;

        if (params.IngressList) {
            this.IngressList = new Array();
            for (let z in params.IngressList) {
                let obj = new TkeIngressDetail();
                obj.deserialize(params.IngressList[z]);
                this.IngressList.push(obj);
            }
        }
        this.NoMatchDomains = 'NoMatchDomains' in params ? params.NoMatchDomains : null;

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
 * CreateCSR request structure.
 * @class
 */
class CreateCSRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The organization name.
         * @type {string || null}
         */
        this.Organization = null;

        /**
         * The department.
         * @type {string || null}
         */
        this.Department = null;

        /**
         * The email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The province.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * The city.
         * @type {string || null}
         */
        this.City = null;

        /**
         * The country or region code that complies with ISO 3166, such as CN and US.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The encryption algorithm. RSA and ECC are supported.	
         * @type {string || null}
         */
        this.EncryptAlgo = null;

        /**
         * The key pair parameter. For RSA, only the 2048-bit and 4096-bit key pairs are supported. For ECC, only prime256v1 is supported.
         * @type {string || null}
         */
        this.KeyParameter = null;

        /**
         * Whether to generate the CSR content. Once the CSR content is generated, the CSR record cannot be modified.
         * @type {boolean || null}
         */
        this.Generate = null;

        /**
         * The password of the private key.
         * @type {string || null}
         */
        this.KeyPassword = null;

        /**
         * The remarks.
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
        this.Organization = 'Organization' in params ? params.Organization : null;
        this.Department = 'Department' in params ? params.Department : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.EncryptAlgo = 'EncryptAlgo' in params ? params.EncryptAlgo : null;
        this.KeyParameter = 'KeyParameter' in params ? params.KeyParameter : null;
        this.Generate = 'Generate' in params ? params.Generate : null;
        this.KeyPassword = 'KeyPassword' in params ? params.KeyPassword : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Details of TCB instances by region - data structure of an async task for querying associated cloud resources
 * @class
 */
class TCBInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The list of TCB environments.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TCBEnvironments> || null}
         */
        this.Environments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;

        if (params.Environments) {
            this.Environments = new Array();
            for (let z in params.Environments) {
                let obj = new TCBEnvironments();
                obj.deserialize(params.Environments[z]);
                this.Environments.push(obj);
            }
        }

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
 * Details of WAF instances - data structure of an async task for querying associated cloud resources
 * @class
 */
class WafInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The list of WAF instances.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WafInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * The total number of WAF instances in this region.	
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
        this.Region = 'Region' in params ? params.Region : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new WafInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * List of TCB services subject to static hosting
 * @class
 */
class TCBHostService extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of instances.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TCBHostInstance> || null}
         */
        this.InstanceList = null;

        /**
         * The instance count.
Note: This field may return null, indicating that no valid values can be obtained.
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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new TCBHostInstance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * Details of TKE instances - data structure of an async task for querying associated cloud resources
 * @class
 */
class TkeInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The list of TKE instances.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TkeInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * The total number of TKE instances in this region.	
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
        this.Region = 'Region' in params ? params.Region : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new TkeInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * Errors
 * @class
 */
class Error extends  AbstractModel {
    constructor(){
        super();

        /**
         * The error code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * The error message.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Certificate and async task IDs
 * @class
 */
class CertTaskId extends  AbstractModel {
    constructor(){
        super();

        /**
         * The certificate ID.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * The async task ID.
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Details of TCB access instances
 * @class
 */
class TCBAccessService extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of instances.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TCBAccessInstance> || null}
         */
        this.InstanceList = null;

        /**
         * The instance count.
Note: This field may return null, indicating that no valid values can be obtained.
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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new TCBAccessInstance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeCSRSet request structure.
 * @class
 */
class DescribeCSRSetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of CSRs on each page. The default value is 10, and the maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The pagination offset, starting from 0.	
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The domain for CSR filtering.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The encryption algorithm for CSR filtering.
         * @type {string || null}
         */
        this.EncryptAlgo = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.EncryptAlgo = 'EncryptAlgo' in params ? params.EncryptAlgo : null;

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
 * Details of an APIGATEWAY instance
 * @class
 */
class ApiGatewayInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The instance ID.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * The instance name.
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * The domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The certificate ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * The protocol.
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * Details of LIVE instances - data structure of an async task for querying associated cloud resources
 * @class
 */
class LiveInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of LIVE instances in this region.	
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of LIVE instances.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<LiveInstanceDetail> || null}
         */
        this.InstanceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new LiveInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }

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
         * Certificate type. Valid values: `CA` (CA certificate) and `SVR` (server certificate). Default value: `SVR`
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

        /**
         * The list of tags.
         * @type {Array.<Tags> || null}
         */
        this.Tags = null;

        /**
         * Whether a certificate can be repeatedly uploaded.
         * @type {boolean || null}
         */
        this.Repeatable = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Repeatable = 'Repeatable' in params ? params.Repeatable : null;

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
         * Encryption algorithm. RSA and ECC are supported.
         * @type {string || null}
         */
        this.CsrEncryptAlgo = null;

        /**
         * Key pair parameter. RSA supports only the 2048-bit key and ECC supports only prime256v1.
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
 * CreateCertificate response structure.
 * @class
 */
class CreateCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of certificate IDs
         * @type {Array.<string> || null}
         */
        this.CertificateIds = null;

        /**
         * List of order IDs
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.DealIds = 'DealIds' in params ? params.DealIds : null;
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
         * Certificate plan type. null: User-uploaded certificate (no plan type); `1`: GeoTrust DV SSL CA - G3; `2`: TrustAsia TLS RSA CA; `3`: SecureSite EV Pro; `4`: SecureSite EV; `5`: SecureSite OV Pro; `6`: SecureSite OV; `7`: SecureSite OV wildcard; `8`: GeoTrust EV; `9`: GeoTrust OV; `10`: GeoTrust OV wildcard; `11`: TrustAsia DV multi-domain; `12`: TrustAsia DV wildcard; `13`: TrustAsia OV wildcard D3; `14`: TrustAsia OV D3; `15`: TrustAsia OV multi-domain D3; `16`: TrustAsia EV D3; `17`: TrustAsia EV multi-domain D3; `18`: GlobalSign OV; `19`: GlobalSign OV wildcard; `20`: GlobalSign EV; `21`: TrustAsia OV wildcard multi-domain D3; `22`: GlobalSign OV multi-domain; `23`: GlobalSign OV wildcard multi-domain; `24`: GlobalSign EV multi-domain; `25` WoTrus DV; `26`: WoTrus DV multi-domain; `27`: WoTrus DV wildcard; `28`: WoTrus OV; `29`: WoTrus OV multi-domain; `30`: WoTrus OV wildcard; `31`: WoTrus EV; `32`: WoTrus EV multi-domain; `33`: DNSPod SM2 DV; `34`: DNSPod SM2 DV multi-domain; `35`: DNSPod SM2 DV wildcard; `37`: DNSPod SM2 OV; `38`: DNSPod SM2 OV multi-domain; `39`: DNSPod SM2 OV wildcard: `40`: DNSPod SM2 EV; `41`: DNSPod SM2 EV multi-domain; `42`: TrustAsia DV wildcard multi-domain.
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
         * The authentication value for DV certificate revocation.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DvAuths> || null}
         */
        this.DvRevokeAuthDetail = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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

        if (params.DvRevokeAuthDetail) {
            this.DvRevokeAuthDetail = new Array();
            for (let z in params.DvRevokeAuthDetail) {
                let obj = new DvAuths();
                obj.deserialize(params.DvRevokeAuthDetail[z]);
                this.DvRevokeAuthDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCertificateBindResourceTaskResult response structure.
 * @class
 */
class DescribeCertificateBindResourceTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The results of the async tasks for querying associated cloud resources.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SyncTaskBindResourceResult> || null}
         */
        this.SyncTaskBindResourceResult = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SyncTaskBindResourceResult) {
            this.SyncTaskBindResourceResult = new Array();
            for (let z in params.SyncTaskBindResourceResult) {
                let obj = new SyncTaskBindResourceResult();
                obj.deserialize(params.SyncTaskBindResourceResult[z]);
                this.SyncTaskBindResourceResult.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of a CLB listener rule
 * @class
 */
class ClbListenerRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rule ID.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * The domains bound.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Whether the rule matches the domains to be associated with a certificate.
         * @type {boolean || null}
         */
        this.IsMatch = null;

        /**
         * The certificates associated with the rule.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Certificate || null}
         */
        this.Certificate = null;

        /**
         * The list of non-matching domains.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.NoMatchDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.IsMatch = 'IsMatch' in params ? params.IsMatch : null;

        if (params.Certificate) {
            let obj = new Certificate();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.NoMatchDomains = 'NoMatchDomains' in params ? params.NoMatchDomains : null;

    }
}

/**
 * Region of associated cloud resources
 * @class
 */
class BindResourceRegionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The region.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The total number of associated cloud resources.
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
        this.Region = 'Region' in params ? params.Region : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * Details of a TKE instance
 * @class
 */
class TkeInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The cluster ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The cluster name.
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * The list of cluster namespaces.
         * @type {Array.<TkeNameSpaceDetail> || null}
         */
        this.NamespaceList = null;

        /**
         * The cluster type.
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * The cluster version.
         * @type {string || null}
         */
        this.ClusterVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

        if (params.NamespaceList) {
            this.NamespaceList = new Array();
            for (let z in params.NamespaceList) {
                let obj = new TkeNameSpaceDetail();
                obj.deserialize(params.NamespaceList[z]);
                this.NamespaceList.push(obj);
            }
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;

    }
}

/**
 * UploadConfirmLetter request structure.
 * @class
 */
class UploadConfirmLetterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Base64-encoded confirmation letter file, which must be a JPG, JPEG, PNG, or PDF file of 1 KB to 1.4 MB
         * @type {string || null}
         */
        this.ConfirmLetter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ConfirmLetter = 'ConfirmLetter' in params ? params.ConfirmLetter : null;

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
 * DescribeCSR response structure.
 * @class
 */
class DescribeCSRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CSR ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The account.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * The domain.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The organization name.
         * @type {string || null}
         */
        this.Organization = null;

        /**
         * The department.
         * @type {string || null}
         */
        this.Department = null;

        /**
         * The email address.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The province.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * The city.
         * @type {string || null}
         */
        this.City = null;

        /**
         * The country or region.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * The key algorithm.
         * @type {string || null}
         */
        this.EncryptAlgo = null;

        /**
         * The algorithm parameter.
         * @type {string || null}
         */
        this.KeyParameter = null;

        /**
         * The remarks.
         * @type {string || null}
         */
        this.Remarks = null;

        /**
         * The status.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The password of the private key.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KeyPassword = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The CSR content.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CSR = null;

        /**
         * The content of the private key.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Organization = 'Organization' in params ? params.Organization : null;
        this.Department = 'Department' in params ? params.Department : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.EncryptAlgo = 'EncryptAlgo' in params ? params.EncryptAlgo : null;
        this.KeyParameter = 'KeyParameter' in params ? params.KeyParameter : null;
        this.Remarks = 'Remarks' in params ? params.Remarks : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.KeyPassword = 'KeyPassword' in params ? params.KeyPassword : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.CSR = 'CSR' in params ? params.CSR : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of CLB instances - data structure of an async task for querying associated cloud resources
 * @class
 */
class ClbInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The list of CLB instances.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ClbInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * The total number of CLB instances in this region.
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
        this.Region = 'Region' in params ? params.Region : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new ClbInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * Details of a TKE Ingress instance
 * @class
 */
class TkeIngressDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Ingress name.
         * @type {string || null}
         */
        this.IngressName = null;

        /**
         * The list of TLS domains.
         * @type {Array.<string> || null}
         */
        this.TlsDomains = null;

        /**
         * The list of Ingress domains.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IngressName = 'IngressName' in params ? params.IngressName : null;
        this.TlsDomains = 'TlsDomains' in params ? params.TlsDomains : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

/**
 * Details of VOD instances - data structure of an async task for querying associated cloud resources
 * @class
 */
class VODInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of VOD instances.	
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<VodInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * The total number of VOD instances in this region.	
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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new VodInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

module.exports = {
    DescribeCertificateBindResourceTaskDetailRequest: DescribeCertificateBindResourceTaskDetailRequest,
    DownloadCertificateResponse: DownloadCertificateResponse,
    ModifyCSRRequest: ModifyCSRRequest,
    TCBAccessInstance: TCBAccessInstance,
    CancelCertificateOrderRequest: CancelCertificateOrderRequest,
    ModifyCertificateProjectResponse: ModifyCertificateProjectResponse,
    Certificates: Certificates,
    CertificateExtra: CertificateExtra,
    TeoInstanceList: TeoInstanceList,
    RootCertificates: RootCertificates,
    CdnInstanceDetail: CdnInstanceDetail,
    DescribeCertificateDetailRequest: DescribeCertificateDetailRequest,
    TkeNameSpaceDetail: TkeNameSpaceDetail,
    CreateCertificateBindResourceSyncTaskResponse: CreateCertificateBindResourceSyncTaskResponse,
    TCBHostInstance: TCBHostInstance,
    ClbListener: ClbListener,
    DvAuths: DvAuths,
    ModifyCertificateAliasRequest: ModifyCertificateAliasRequest,
    BatchDeleteCSRRequest: BatchDeleteCSRRequest,
    ProjectInfo: ProjectInfo,
    TCBEnvironments: TCBEnvironments,
    DescribeCertificateOperateLogsRequest: DescribeCertificateOperateLogsRequest,
    CancelCertificateOrderResponse: CancelCertificateOrderResponse,
    DdosInstanceList: DdosInstanceList,
    DescribeCSRSetResponse: DescribeCSRSetResponse,
    DescribeCSRRequest: DescribeCSRRequest,
    DescribeCertificateBindResourceTaskResultRequest: DescribeCertificateBindResourceTaskResultRequest,
    BindResourceResult: BindResourceResult,
    ApplyCertificateResponse: ApplyCertificateResponse,
    CreateCertificateBindResourceSyncTaskRequest: CreateCertificateBindResourceSyncTaskRequest,
    UploadConfirmLetterResponse: UploadConfirmLetterResponse,
    ReplaceCertificateResponse: ReplaceCertificateResponse,
    SyncTaskBindResourceResult: SyncTaskBindResourceResult,
    ClbInstanceDetail: ClbInstanceDetail,
    OperationLog: OperationLog,
    VodInstanceDetail: VodInstanceDetail,
    DescribeCertificateBindResourceTaskDetailResponse: DescribeCertificateBindResourceTaskDetailResponse,
    DvAuthDetail: DvAuthDetail,
    ModifyCSRResponse: ModifyCSRResponse,
    CdnInstanceList: CdnInstanceList,
    DdosInstanceDetail: DdosInstanceDetail,
    CreateCertificateRequest: CreateCertificateRequest,
    DescribeCertificatesResponse: DescribeCertificatesResponse,
    CommitCertificateInformationResponse: CommitCertificateInformationResponse,
    UploadCertificateResponse: UploadCertificateResponse,
    LiveInstanceDetail: LiveInstanceDetail,
    SubmitCertificateInformationRequest: SubmitCertificateInformationRequest,
    TCBEnvironment: TCBEnvironment,
    WafInstanceDetail: WafInstanceDetail,
    DescribeCertificatesRequest: DescribeCertificatesRequest,
    ApiGatewayInstanceList: ApiGatewayInstanceList,
    TeoInstanceDetail: TeoInstanceDetail,
    PreAuditInfo: PreAuditInfo,
    CreateCSRResponse: CreateCSRResponse,
    Certificate: Certificate,
    BatchDeleteCSRResponse: BatchDeleteCSRResponse,
    CommitCertificateInformationRequest: CommitCertificateInformationRequest,
    CSRItem: CSRItem,
    DownloadCertificateRequest: DownloadCertificateRequest,
    ReplaceCertificateRequest: ReplaceCertificateRequest,
    DescribeCertificateResponse: DescribeCertificateResponse,
    TkeSecretDetail: TkeSecretDetail,
    Tags: Tags,
    DeleteCertificateResponse: DeleteCertificateResponse,
    CreateCSRRequest: CreateCSRRequest,
    TCBInstanceList: TCBInstanceList,
    DescribeCertificateRequest: DescribeCertificateRequest,
    WafInstanceList: WafInstanceList,
    TCBHostService: TCBHostService,
    TkeInstanceList: TkeInstanceList,
    Error: Error,
    CertTaskId: CertTaskId,
    TCBAccessService: TCBAccessService,
    DescribeCSRSetRequest: DescribeCSRSetRequest,
    SubmittedData: SubmittedData,
    ApiGatewayInstanceDetail: ApiGatewayInstanceDetail,
    LiveInstanceList: LiveInstanceList,
    DeleteCertificateRequest: DeleteCertificateRequest,
    DescribeCertificateOperateLogsResponse: DescribeCertificateOperateLogsResponse,
    ModifyCertificateProjectRequest: ModifyCertificateProjectRequest,
    UploadCertificateRequest: UploadCertificateRequest,
    ModifyCertificateAliasResponse: ModifyCertificateAliasResponse,
    ApplyCertificateRequest: ApplyCertificateRequest,
    CreateCertificateResponse: CreateCertificateResponse,
    DescribeCertificateDetailResponse: DescribeCertificateDetailResponse,
    DescribeCertificateBindResourceTaskResultResponse: DescribeCertificateBindResourceTaskResultResponse,
    ClbListenerRule: ClbListenerRule,
    BindResourceRegionResult: BindResourceRegionResult,
    TkeInstanceDetail: TkeInstanceDetail,
    UploadConfirmLetterRequest: UploadConfirmLetterRequest,
    SubmitCertificateInformationResponse: SubmitCertificateInformationResponse,
    DescribeCSRResponse: DescribeCSRResponse,
    ClbInstanceList: ClbInstanceList,
    TkeIngressDetail: TkeIngressDetail,
    VODInstanceList: VODInstanceList,

}
