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
         * Task id, which can be used to query the result of binding cloud resources according to the task id obtained from createcertificatebindresourcesynctask.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The number of cloud resources displayed on each page. The default value is 10, and the maximum value is 100.
         * @type {string || null}
         */
        this.Limit = null;

        /**
         * Current offset, default is 0.
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * Result detail of queried resource type. if not provided, all will be queried. valid values include:.
- clb.
- cdn.
- ddos.
- live.
- vod.
- waf.
- apigateway.
- teo.
- tke.
- cos.
- tse.
- tcb.
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

        /**
         * Data of querying region list. clb, tke, waf, api gateway, tcb, cos, and tse support region query, while other resource types do not support.
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
 * Cloud-native gateway certificate information
 * @class
 */
class GatewayCertificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Gateway certificate ID
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Gateway certificate information
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Bound domain name
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.BindDomains = null;

        /**
         * Certificate source
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CertSource = null;

        /**
         * SSL certificate ID that is currently bound
Note: This field may return null, indicating that no valid value can be obtained.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BindDomains = 'BindDomains' in params ? params.BindDomains : null;
        this.CertSource = 'CertSource' in params ? params.CertSource : null;
        this.CertId = 'CertId' in params ? params.CertId : null;

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
         * User uin.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Project id.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Certificate source:.
trustasia.
upload.
wosign.
sheca.
         * @type {string || null}
         */
        this.From = null;

        /**
         * Certificate package type:.
Null: user uploads a certificate (without package type),.
2: trustasia tls rsa ca,. 
3: securesite enhanced enterprise edition (ev pro),. 
4: securesite enhanced (ev). 
5: securesite enterprise professional edition (ov pro).
6: securesite enterprise (ov). 
7: securesite enterprise (ov) wildcard. 
8: geotrust enhanced (ev). 
9: geotrust enterprise (ov) cert. 
10: geotrust enterprise (ov) wildcard cert. 
11: trustasia domain name-based multiple domain names ssl certificate. 
12: trustasia domain name-based (dv) wildcard cert. 
13: trustasia enterprise wildcard (ov) ssl certificate (d3). 
14: trustasia enterprise (ov) ssl certificate (d3). 
15: trustasia enterprise multiple domain names (ov) ssl certificate (d3). 
16: trustasia enhanced (ev) ssl certificate (d3). 
17: trustasia enhanced multiple domain names (ev) ssl certificate (d3). 
18: globalsign enterprise (ov) ssl certificate. 
19: globalsign enterprise wildcard (ov) ssl certificate. 
20: globalsign enhanced (ev) ssl certificate. 
21: trustasia enterprise wildcard multiple domain names (ov) ssl certificate (d3). 
22: globalsign enterprise multiple domain names (ov) ssl certificate. 
23: globalsign enterprise wildcard multiple domain names (ov) ssl certificate.
24: globalsign enhanced multiple domain name (ev) ssl certificate.
25: wotrus domain name cert.
26: wotrus domain name multiple domain name cert.
27: wotrus domain name wildcard cert.
28: wotrus enterprise cert.
29: wotrus enterprise multi - domain name certificate.
30: wotrus enterprise wildcard certificate.
31: wotrus enhanced certificate.
32: wotrus enhanced multi - domain name certificate.
33: wotrus - national cryptography domain - type certificate.
34: wotrus-national cryptography domain certificate (multiple domain names).
35: wotrus-national cryptography domain certificate (wildcard).
37: wotrus-national cryptography enterprise certificate.
38: wotrus-national cryptography enterprise certificate (multiple domain names).
39: wotrus-national cryptography enterprise certificate (wildcard).
40: wotrus - enhanced national cryptography certificate.
41: wotrus - enhanced national cryptography certificate (multiple domain names).
42: trustasia - domain name type certificate (wildcard multiple domain names).
43: DNSPod - enterprise (ov) ssl certificate.
44: DNSPod - enterprise (ov) wildcard ssl certificate.
45: DNSPod - enterprise (ov) multiple domain names ssl certificate.
46: DNSPod - enhanced (ev) ssl certificate.
47: DNSPod - enhanced (ev) multiple domain names ssl certificate.
48: DNSPod - domain name-based (dv) ssl certificate.
49: DNSPod - domain name-based (dv) wildcard ssl certificate.
50: DNSPod - domain name-based (dv) multiple domain names ssl certificate.
51: DNSPod (national cryptography) - enterprise (ov) ssl certificate.
52: DNSPod (national cryptography) - enterprise (ov) wildcard ssl certificate.
53: DNSPod (national cryptography) - enterprise (ov) multiple domain names ssl certificate.
54: DNSPod (national cryptography) - domain name-based (dv) ssl certificate.
55: DNSPod (national cryptography) - domain name-based (dv) wildcard ssl certificate.
56: DNSPod (national cryptography) - domain name-based (dv) multiple domain names ssl certificate.
57: securesite enterprise professional edition multiple domain names (ov pro).
58: securesite enterprise multiple domain names (ov).
59: securesite enhanced professional edition multiple domain names (ev pro).
60: securesite enhanced multiple domain names (ev).
61: geotrust enhanced multiple domain names (ev).
75: securesite enterprise (ov).
76: securesite enterprise (ov) wildcard.
77: securesite enhanced (ev).
78: geotrust enterprise (ov).
79: geotrust enterprise wildcard (ov).
80: geotrust enhanced (ev).
81: globalsign enterprise (ov) ssl certificate.
82: globalsign enterprise wildcard (ov) ssl certificate.
83: trustasia c1 dv free.
85: globalsign enhanced (ev) ssl certificate.
88: globalsign enterprise wildcard multiple domain names (ov) ssl certificate.
89: globalsign enterprise multiple domain names (ov) ssl certificate.
90: globalsign enhanced multiple domain names (ev) ssl certificate.
91: geotrust enhanced multiple domain names (ev).
92: securesite enterprise pro multiple domain names (ov pro).
93: securesite enterprise multiple domain names (ov).
94: securesite enhanced pro multiple domain names (ev pro).
95: securesite enhanced multiple domain names (ev).
96: securesite ev pro.
97: securesite enterprise professional edition (ov pro).
98: cfca enterprise (ov) ssl certificate.
99: cfca enterprise ov ssl certificate for multiple domain names.
100: cfca ov wildcard ssl certificate.
101: cfca enhanced (ev) ssl certificate.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Certificate type. ca = client certificate; svr = server certificate.
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * Certificate product name.
         * @type {string || null}
         */
        this.ProductZhName = null;

        /**
         * Primary domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Remark name.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Certificate status: 0 = under review, 1 = approved, 2 = review failed, 3 = expired, 4 = dns record added automatically, 5 = enterprise certificate, pending documentation submission, 6 = order cancellation in progress, 7 = canceled, 8 = documents submitted, pending upload of confirmation letter, 9 = certificate revocation in progress, 10 = revoked, 11 = reissue in progress, 12 = pending upload of revocation confirmation letter, 13 = free certificate pending documentation submission, 14 = certificate refunded, 15 = certificate migration in progress.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Certificate extended information.
         * @type {CertificateExtra || null}
         */
        this.CertificateExtra = null;

        /**
         * Vulnerability scanning status: INACTIVE = not enabled, ACTIVE = enabled.
         * @type {string || null}
         */
        this.VulnerabilityStatus = null;

        /**
         * Status information.
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * Validation type: DNS_AUTO = automatic dns validation, DNS = manual dns validation, FILE = file verification, DNS_PROXY = dns proxy validation, FILE_PROXY = file proxy verification.
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * Certificate validation time.
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * Certificate expiration time.
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * Certificate validity period (month).
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * Certificate id.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Multiple domain names contained in the certificate (including the primary domain name).
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * Certificate type name.
         * @type {string || null}
         */
        this.PackageTypeName = null;

        /**
         * Status name.
         * @type {string || null}
         */
        this.StatusName = null;

        /**
         * Specifies whether the customer is a vip customer. true indicates yes and false indicates no.
         * @type {boolean || null}
         */
        this.IsVip = null;

        /**
         * Specifies whether it is a dv version certificate. true indicates yes and false indicates no.
         * @type {boolean || null}
         */
        this.IsDv = null;

        /**
         * Specifies whether it is a wildcard domain name certificate. true indicates yes and false indicates no.
         * @type {boolean || null}
         */
        this.IsWildcard = null;

        /**
         * Whether the vulnerability scanning feature is enabled.
         * @type {boolean || null}
         */
        this.IsVulnerability = null;

        /**
         * Whether it is renewable.
         * @type {boolean || null}
         */
        this.RenewAble = null;

        /**
         * Project information.
         * @type {ProjectInfo || null}
         */
        this.ProjectInfo = null;

        /**
         * Associated cloud resources are temporarily unavailable.
         * @type {Array.<string> || null}
         */
        this.BoundResource = null;

        /**
         * Whether it can be deployed.
         * @type {boolean || null}
         */
        this.Deployable = null;

        /**
         * Tag list.
         * @type {Array.<Tags> || null}
         */
        this.Tags = null;

        /**
         * Whether expiration notice has been ignored.
         * @type {boolean || null}
         */
        this.IsIgnore = null;

        /**
         * Whether it is a China SM certificate.
         * @type {boolean || null}
         */
        this.IsSM = null;

        /**
         * Certificate algorithm.
         * @type {string || null}
         */
        this.EncryptAlgorithm = null;

        /**
         * Encryption algorithm for upload ca certificate.
         * @type {Array.<string> || null}
         */
        this.CAEncryptAlgorithms = null;

        /**
         * Expiration time for upload ca certificate.
         * @type {Array.<string> || null}
         */
        this.CAEndTimes = null;

        /**
         * Common name of the upload ca certificate.
         * @type {Array.<string> || null}
         */
        this.CACommonNames = null;

        /**
         * Certificate prereview information.
         * @type {PreAuditInfo || null}
         */
        this.PreAuditInfo = null;

        /**
         * Whether to auto-renew.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Hosting status: 0, hosting; 5, resource replacement; 10, hosting completed; -1, not hosted. 
         * @type {number || null}
         */
        this.HostingStatus = null;

        /**
         * Hosting completion time.
         * @type {string || null}
         */
        this.HostingCompleteTime = null;

        /**
         * Manage the new certificate id.
         * @type {string || null}
         */
        this.HostingRenewCertId = null;

        /**
         * Existing renewal certificate id.
         * @type {string || null}
         */
        this.HasRenewOrder = null;

        /**
         * Indicates whether the original certificate is deleted during reissue.
         * @type {boolean || null}
         */
        this.ReplaceOriCertIsDelete = null;

        /**
         * Indicates whether it is about to expire. a certificate is about to expire if it will expire within 30 days.
         * @type {boolean || null}
         */
        this.IsExpiring = null;

        /**
         * Add validation expiration date for DV certificate
         * @type {string || null}
         */
        this.DVAuthDeadline = null;

        /**
         * Domain verification passed time.
         * @type {string || null}
         */
        this.ValidationPassedTime = null;

        /**
         * Multiple domain names associated with the certificate.
         * @type {Array.<string> || null}
         */
        this.CertSANs = null;

        /**
         * Domain verification rejection information.
         * @type {string || null}
         */
        this.AwaitingValidationMsg = null;

        /**
         * Whether to allow downloading.
         * @type {boolean || null}
         */
        this.AllowDownload = null;

        /**
         * Whether all certificate domain names are managed and resolved by dnspod.
         * @type {boolean || null}
         */
        this.IsDNSPODResolve = null;

        /**
         * Whether the certificate is purchased with benefit points.
         * @type {boolean || null}
         */
        this.IsPackage = null;

        /**
         * Whether there is a private key password.
         * @type {boolean || null}
         */
        this.KeyPasswordCustomFlag = null;

        /**
         * Types of web servers supported for download: nginx, apache, iis, tomcat, jks, root, other.
         * @type {SupportDownloadType || null}
         */
        this.SupportDownloadType = null;

        /**
         * Certificate revocation completion time.
         * @type {string || null}
         */
        this.CertRevokedTime = null;

        /**
         * Hosted resource type list.
         * @type {Array.<string> || null}
         */
        this.HostingResourceTypes = null;

        /**
         * Managed configuration information.
         * @type {HostingConfig || null}
         */
        this.HostingConfig = null;

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
        this.HostingStatus = 'HostingStatus' in params ? params.HostingStatus : null;
        this.HostingCompleteTime = 'HostingCompleteTime' in params ? params.HostingCompleteTime : null;
        this.HostingRenewCertId = 'HostingRenewCertId' in params ? params.HostingRenewCertId : null;
        this.HasRenewOrder = 'HasRenewOrder' in params ? params.HasRenewOrder : null;
        this.ReplaceOriCertIsDelete = 'ReplaceOriCertIsDelete' in params ? params.ReplaceOriCertIsDelete : null;
        this.IsExpiring = 'IsExpiring' in params ? params.IsExpiring : null;
        this.DVAuthDeadline = 'DVAuthDeadline' in params ? params.DVAuthDeadline : null;
        this.ValidationPassedTime = 'ValidationPassedTime' in params ? params.ValidationPassedTime : null;
        this.CertSANs = 'CertSANs' in params ? params.CertSANs : null;
        this.AwaitingValidationMsg = 'AwaitingValidationMsg' in params ? params.AwaitingValidationMsg : null;
        this.AllowDownload = 'AllowDownload' in params ? params.AllowDownload : null;
        this.IsDNSPODResolve = 'IsDNSPODResolve' in params ? params.IsDNSPODResolve : null;
        this.IsPackage = 'IsPackage' in params ? params.IsPackage : null;
        this.KeyPasswordCustomFlag = 'KeyPasswordCustomFlag' in params ? params.KeyPasswordCustomFlag : null;

        if (params.SupportDownloadType) {
            let obj = new SupportDownloadType();
            obj.deserialize(params.SupportDownloadType)
            this.SupportDownloadType = obj;
        }
        this.CertRevokedTime = 'CertRevokedTime' in params ? params.CertRevokedTime : null;
        this.HostingResourceTypes = 'HostingResourceTypes' in params ? params.HostingResourceTypes : null;

        if (params.HostingConfig) {
            let obj = new HostingConfig();
            obj.deserialize(params.HostingConfig)
            this.HostingConfig = obj;
        }

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
         * Quantity of configurable domain names for the certificate.
         * @type {string || null}
         */
        this.DomainNumber = null;

        /**
         * Renew the original certificate id.
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
         * Reissue certificate id.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReplacedFor = null;

        /**
         * Renewal certificate id.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RenewOrder = null;

        /**
         * Whether it is a China SM certificate.
         * @type {number || null}
         */
        this.SMCert = null;

        /**
         * Company type, valid values: 1 (individual); 2 (company).
         * @type {number || null}
         */
        this.CompanyType = null;

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
        this.CompanyType = 'CompanyType' in params ? params.CompanyType : null;

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

        /**
         * Whether to query exceptions.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

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
         * Domain name status: rejected - the domain name failed the review or its registration has expired/been canceled; processing - deploying; online - started; offline - closed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Domain billing status, where on indicates enable and off indicates disable.
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
         * Data of certificate bound to the listener.
         * @type {Certificate || null}
         */
        this.Certificate = null;

        /**
         * List of listener rules.
         * @type {Array.<ClbListenerRule> || null}
         */
        this.Rules = null;

        /**
         * Domain list not matched.
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
 * COS instance details - asynchronous association of cloud resource data structure.
 * @class
 */
class COSInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance details.
         * @type {Array.<CosInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * Total number under the region.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Error = null;

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
                let obj = new CosInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Error = 'Error' in params ? params.Error : null;

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
         * Certificate domain name verification record key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthKey = null;

        /**
         * Certificate domain name verification record value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthValue = null;

        /**
         * Certificate domain name verification domain value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthDomain = null;

        /**
         * Certificate domain name verification file path, used only for file and file_proxy.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthPath = null;

        /**
         * Certificate domain name verification subdomain.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthSubDomain = null;

        /**
         * Certificate domain verification type, valid values:.
TXT: add txt record for dns domain verification.
FILE: domain file verification.
CNAME: add cname record for dns domain verification.
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
         * Number of requested logs, 20 by default, with a maximum value of 1000. if it exceeds 1000, it will be treated as 1000.
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
         * DDOS instance details.	
         * @type {Array.<DdosInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * Whether to query exceptions.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

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
 * Details of update records.
 * @class
 */
class UpdateRecordDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of cloud resource for updating old and new certs.
- clb.
- cdn.
- ddos.
- live.
- vod.
- waf.
- apigateway.
- teo.
- tke.
- cos.
- tse.
- tcb.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * The update details of the cloud resource.
         * @type {Array.<UpdateRecordDetail> || null}
         */
        this.List = null;

        /**
         * The update of the total number of cloud resources.
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new UpdateRecordDetail();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

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
 * ModifyCertificateResubmit request structure.
 * @class
 */
class ModifyCertificateResubmitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The certificate ID.
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
 * Supported types for download.
 * @class
 */
class SupportDownloadType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the available format of nginx can be downloaded.
         * @type {boolean || null}
         */
        this.NGINX = null;

        /**
         * Whether the available format of apache can be downloaded.
         * @type {boolean || null}
         */
        this.APACHE = null;

        /**
         * Whether the available format of tomcat can be downloaded.
         * @type {boolean || null}
         */
        this.TOMCAT = null;

        /**
         * Whether the available format of iis can be downloaded.
         * @type {boolean || null}
         */
        this.IIS = null;

        /**
         * Indicates whether the jks format can be downloaded.
         * @type {boolean || null}
         */
        this.JKS = null;

        /**
         * Indicates whether other formats can be downloaded.
         * @type {boolean || null}
         */
        this.OTHER = null;

        /**
         * Indicates whether the root certificate can be downloaded.
         * @type {boolean || null}
         */
        this.ROOT = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NGINX = 'NGINX' in params ? params.NGINX : null;
        this.APACHE = 'APACHE' in params ? params.APACHE : null;
        this.TOMCAT = 'TOMCAT' in params ? params.TOMCAT : null;
        this.IIS = 'IIS' in params ? params.IIS : null;
        this.JKS = 'JKS' in params ? params.JKS : null;
        this.OTHER = 'OTHER' in params ? params.OTHER : null;
        this.ROOT = 'ROOT' in params ? params.ROOT : null;

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
 * Update record details
 * @class
 */
class UpdateRecordDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Update detail record id.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * New and old certificate update - new certificate id.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Old and new certificate update - old certificate id.
         * @type {string || null}
         */
        this.OldCertId = null;

        /**
         * Deployment domain name list
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Type of cloud resource for updating old and new certs.
- clb.
- cdn.
- ddos.
- live.
- vod.
- waf.
- apigateway.
- teo.
- tke.
- cos.
- tse.
- tcb.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Deployment region
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Deployment status. valid values:.
0: To be deployed.
1: Deployment successful.
2: Deployment failed.
3: Deploying.
4: Rollback succeeded.
5: Rollback failure.
6: No resource, no need for deployment.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Deployment error message
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * Deployment time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Deployment instance ID
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Deployment instance name
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Deployment listener ID (only for CLB)
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Deployment listener name (only for CLB)
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Protocol
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Whether SNI is enabled (only for CLB)
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * Bucket name (only for COS)
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Port
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Namespace (only for TKE)
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Secret name (only for TKE)
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Environment ID
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * TCB deployment type
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.TCBType = null;

        /**
         * Listener url (only for CLB).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.OldCertId = 'OldCertId' in params ? params.OldCertId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.TCBType = 'TCBType' in params ? params.TCBType : null;
        this.Url = 'Url' in params ? params.Url : null;

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
         * The newly applied certificate id.
         * @type {string || null}
         */
        this.CertificateId = null;

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
 * COS instance description.
 * @class
 */
class CosInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Bound certificate id.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * ENABLED: domain name online status.
DISABLED: domain name offline status.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * bucket name.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * bucket region.
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHostUpdateRecordDetail request structure.
 * @class
 */
class DescribeHostUpdateRecordDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deployment record id, which is the record id returned by calling the UpdateCertificateInstance api, or the record id returned by calling the UpdateCertificateRecordRollback rollback api.
         * @type {string || null}
         */
        this.DeployRecordId = null;

        /**
         * Number of items per page. the default is 10. the maximum value is 200.
         * @type {string || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, starting from 0. default is 0.
         * @type {string || null}
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
        this.DeployRecordId = 'DeployRecordId' in params ? params.DeployRecordId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * CLB listener list.
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
 * Update the progress of asynchronous task.
 * @class
 */
class UpdateSyncProgress extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Region result list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UpdateSyncProgressRegion> || null}
         */
        this.UpdateSyncProgressRegions = null;

        /**
         * Asynchronous update progress status: 0, pending, 1 processed, 3 processing.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.UpdateSyncProgressRegions) {
            this.UpdateSyncProgressRegions = new Array();
            for (let z in params.UpdateSyncProgressRegions) {
                let obj = new UpdateSyncProgressRegion();
                obj.deserialize(params.UpdateSyncProgressRegions[z]);
                this.UpdateSyncProgressRegions.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

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

        /**
         * Root account.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Sub-Account.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubAccountUin = null;

        /**
         * Certificate id.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Each operation type corresponds to a specific operation description. the following is a textual explanation of each operation type and its description:.
1. apply: indicates applying for a free cert.
2. delete: indicates a deletion.
3. download - represents the download operation.
4. upload: indicates an upload operation.
5. revoke: indicates revoking a cert.
6. cancelRevoke - indicates canceling the revocation operation.
7. updateAlias - indicates updating the remark information.
8. changeProject - indicates assigning the certificate to a certain project.
9. uploadConfirmLetter - indicates uploading the confirmation letter.
10. cancel - indicates canceling the order operation.
11. replace - specifies reissuing a certificate.
12. downloadConfirmLetter - specifies downloading a certificate revocation confirmation letter.
13. editRevokeLetter - specifies uploading a certificate revocation confirmation letter.
14. renewVIP - specifies renewing a paid certificate.
15. applyVIP - specifies applying for a paid certificate.
16. submitInfo - specifies submitting documentation.
17. downloadConfirmLetter - specifies downloading the confirmation letter template.
18. uploadFromYunAPI - indicates uploading via the cloud api.
19. transferIn - indicates the certificate transfer to operation.
20. transferOut - indicates the certificate transfer operation.
21. refund - indicates applying for a refund.
22. multiYearsRenew - indicates multi-year auto-renewal.
23. modifyDownloadLimit - indicates modifying the download limit switch.
24. issued - indicates certificate issuance.
25. domainValidationPassed - indicates domain verification completed.
26. Resubmit - indicates reapplying for a certificate.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Action = 'Action' in params ? params.Action : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SubAccountUin = 'SubAccountUin' in params ? params.SubAccountUin : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Type = 'Type' in params ? params.Type : null;

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
 * Cloud resource region list
 * @class
 */
class ResourceTypeRegions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud resource types, which support clb, waf, api gateway, cos, tke, tse, and tcb.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Region list
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Regions = 'Regions' in params ? params.Regions : null;

    }
}

/**
 * UpdateCertificateRecordRollback request structure.
 * @class
 */
class UpdateCertificateRecordRollbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * To-be-redeployed record ID
         * @type {number || null}
         */
        this.DeployRecordId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeployRecordId = 'DeployRecordId' in params ? params.DeployRecordId : null;

    }
}

/**
 * DescribeHostUpdateRecord response structure.
 * @class
 */
class DescribeHostUpdateRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total count
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Certificate deployment record list
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<UpdateRecordInfo> || null}
         */
        this.DeployRecordList = null;

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

        if (params.DeployRecordList) {
            this.DeployRecordList = new Array();
            for (let z in params.DeployRecordList) {
                let obj = new UpdateRecordInfo();
                obj.deserialize(params.DeployRecordList[z]);
                this.DeployRecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCertificateRecordRollback response structure.
 * @class
 */
class UpdateCertificateRecordRollbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rollback deployment record ID
         * @type {number || null}
         */
        this.DeployRecordId = null;

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
        this.DeployRecordId = 'DeployRecordId' in params ? params.DeployRecordId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * The status of the async task. Valid values: `0` for querying, `1` for successful, and `2` for abnormal. If the status is `1`, check the result of `BindResourceResult` ; if the status is `2`, check the `error` .
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The cache time of the current result.
         * @type {string || null}
         */
        this.CacheTime = null;

        /**
         * Associated TSE resource details
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<TSEInstanceList> || null}
         */
        this.TSE = null;

        /**
         * Information of associated cos resource.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<COSInstanceList> || null}
         */
        this.COS = null;

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

        if (params.TSE) {
            this.TSE = new Array();
            for (let z in params.TSE) {
                let obj = new TSEInstanceList();
                obj.deserialize(params.TSE[z]);
                this.TSE.push(obj);
            }
        }

        if (params.COS) {
            this.COS = new Array();
            for (let z in params.COS) {
                let obj = new COSInstanceList();
                obj.deserialize(params.COS[z]);
                this.COS.push(obj);
            }
        }
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
         * Certificate domain name verification record key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthKey = null;

        /**
         * Certificate domain name verification record value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthValue = null;

        /**
         * Certificate domain name verification domain value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthDomain = null;

        /**
         * Certificate domain name verification file path, used only for file and file_proxy.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthPath = null;

        /**
         * Certificate domain name verification subdomain.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DvAuthKeySubDomain = null;

        /**
         * Certificate domain verification information; multiple domain verifications use this field.
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
         * CDN domain name details.	
         * @type {Array.<CdnInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * Whether to query exceptions.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

    }
}

/**
 * UpdateCertificateRecordRetry request structure.
 * @class
 */
class UpdateCertificateRecordRetryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID for pending retry deployment, which can be obtained through UpdateCertificateInstance. if this parameter is not provided, DeployRecordDetailId must be provided.
         * @type {number || null}
         */
        this.DeployRecordId = null;

        /**
         * Detail ID for pending retry deployment record, which can be obtained through the DescribeHostUpdateRecordDetail api. if this parameter is not provided, DeployRecordId must be provided.
         * @type {number || null}
         */
        this.DeployRecordDetailId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeployRecordId = 'DeployRecordId' in params ? params.DeployRecordId : null;
        this.DeployRecordDetailId = 'DeployRecordDetailId' in params ? params.DeployRecordDetailId : null;

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
         * Certificate id.
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
 * Basic information of the certificate
 * @class
 */
class CertBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Issuer.
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * Issued to.
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * Certificate fingerprint.
         * @type {string || null}
         */
        this.Fingerprint = null;

        /**
         * Certificate valid period start time.
         * @type {string || null}
         */
        this.ValidFrom = null;

        /**
         * Certificate valid period end time.
         * @type {string || null}
         */
        this.ValidTo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.Fingerprint = 'Fingerprint' in params ? params.Fingerprint : null;
        this.ValidFrom = 'ValidFrom' in params ? params.ValidFrom : null;
        this.ValidTo = 'ValidTo' in params ? params.ValidTo : null;

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
         * Certificate product id. `3`: securesite ev pro; `4`: securesite ev; `5`: securesite ov pro; `6`: securesite ov; `7`: securesite ov wildcard; `8`: geotrust ev; `9`: geotrust ov; `10`: geotrust ov wildcard; `11`: trustasia dv multi-domain; `12`: trustasia dv wildcard; `13`: trustasia ov wildcard d3; `14`: trustasia ov d3; `15`: trustasia ov multi-domain d3; `16`: trustasia ev d3; `17`: trustasia ev multi-domain d3; `18`: globalsign ov; `19`: globalsign ov wildcard; `20`: globalsign ev; `21`: trustasia ov wildcard multi-domain d3; `22`: globalsign ov multi-domain; `23`: globalsign ov wildcard multi-domain; `24`: globalsign ev multi-domain; `25`: wotrus dv; `26`: wotrus dv multi-domain; `27`: wotrus dv wildcard; `28`: wotrus ov; `29`: wotrus ov multi-domain; `30`: wotrus ov wildcard; `31`: wotrus ev; `32`: wotrus ev multi-domain; `33`: DNSPod sm2 dv; `34`: DNSPod sm2 dv multi-domain; `35`: DNSPod sm2 dv wildcard; `37`: DNSPod sm2 ov; `38`: DNSPod sm2 ov multi-domain; `39`: DNSPod sm2 ov wildcard; `40`: DNSPod sm2 ev; `41`: DNSPod sm2 ev multi-domain; `42`: trustasia dv wildcard multi-domain; `43`: dnspod-ov ssl certificate; `44`: dnspod-ov wildcard ssl certificate; `45`: dnspod-ov multi-domain ssl certificate; `46`: dnspod-ev ssl certificate; `47`: dnspod-ev multi-domain ssl certificate; `48`: dnspod-dv ssl certificate; `49`: dnspod-dv wildcard ssl certificate; `50`: dnspod-dv multi-domain ssl certificate; `51`: DNSPod (sm2)-ov ssl certificate; `52`: DNSPod (sm2)-ov wildcard ssl certificate; `53`: DNSPod (sm2)-ov multi-domain ssl certificate; `54`: DNSPod (sm2)-dv ssl certificate; `55`: DNSPod (sm2)-dv wildcard ssl certificate; `56`: DNSPod (sm2)-dv multi-domain ssl certificate; `57`: securesite ov pro multi-domain; `58`: securesite ov multi-domain; `59`: securesite ev pro multi-domain; `60`: securesite ev multi-domain; `61`: geotrust ev multi-domain.
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * Number of domains associated with the certificate
         * @type {number || null}
         */
        this.DomainNum = null;

        /**
         * Certificate validity period.
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Whether to automatically use vouchers: 1 for yes, 0 for no; the default is 1.
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * Tag, generate tags for certificates.
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DomainNum = 'DomainNum' in params ? params.DomainNum : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;

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
         * Paid certificate id of materials to be submitted.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * This field is required. Generation method of CSR, valid values are:
online: tencent cloud generates the CSR and private key based on the submitted parameter information and stores them encryptedly.
parse: generate the CSR and private key by itself, and apply for a certificate by uploading the CSR.
         * @type {string || null}
         */
        this.CsrType = null;

        /**
         * The content of the uploaded csr.
If CsrType is parse, this field is required.
         * @type {string || null}
         */
        this.CsrContent = null;

        /**
         * The common name bound to the certificate. if a CSR is uploaded, the domain name must be consistent with the common name resolved from the CSR.
         * @type {string || null}
         */
        this.CertificateDomain = null;

        /**
         * Other domain names bound to the certificate. not required for single domain and wildcard domain certificates. required for multiple domain names and multiple wildcard domain names.
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

        /**
         * Private key password, which is currently only used for the password when generating jks and pfx format certificates; other formats of private key certificates are not encrypted.	
         * @type {string || null}
         */
        this.KeyPassword = null;

        /**
         * This field is required. Company name.
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * This field is required.  Department name.
         * @type {string || null}
         */
        this.OrganizationDivision = null;

        /**
         * This field is required. Company's detailed address.
         * @type {string || null}
         */
        this.OrganizationAddress = null;

        /**
         * This field is required.Country name such as CN.
         * @type {string || null}
         */
        this.OrganizationCountry = null;

        /**
         * This field is required, which specifies the city where the company is located.
         * @type {string || null}
         */
        this.OrganizationCity = null;

        /**
         * This field is required, specifying the province where the company is located.
         * @type {string || null}
         */
        this.OrganizationRegion = null;

        /**
         * Postal code of the organization
         * @type {string || null}
         */
        this.PostalCode = null;

        /**
         * This field is required, the company's fixed-line phone area code.
         * @type {string || null}
         */
        this.PhoneAreaCode = null;

        /**
         * This field is required, the company's landline number.
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Certificate validation method. Validation types: DNS_AUTO = Automatic DNS validation (only supported for domains resolved by Tencent Cloud DNS with a normal resolution status), DNS = Manual DNS validation, FILE = File validation.
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * This field is required, manager name.
         * @type {string || null}
         */
        this.AdminFirstName = null;

        /**
         * This field is required, the manager's surname.
         * @type {string || null}
         */
        this.AdminLastName = null;

        /**
         * This field is required, the manager's mobile phone number.
         * @type {string || null}
         */
        this.AdminPhoneNum = null;

        /**
         * This field is required, the manager's email address.
         * @type {string || null}
         */
        this.AdminEmail = null;

        /**
         * This field is required, the manager position.
         * @type {string || null}
         */
        this.AdminPosition = null;

        /**
         * This field is required, the contact person name.
         * @type {string || null}
         */
        this.ContactFirstName = null;

        /**
         * This field is required, the contact person's surname.
         * @type {string || null}
         */
        this.ContactLastName = null;

        /**
         * This field is required, the contact person's email address.
         * @type {string || null}
         */
        this.ContactEmail = null;

        /**
         * This field is required, the contact person's mobile phone number.
         * @type {string || null}
         */
        this.ContactNumber = null;

        /**
         * This field is required, the contact person position.
         * @type {string || null}
         */
        this.ContactPosition = null;

        /**
         * Indicates whether it is a dv certificate. default value is false.
         * @type {boolean || null}
         */
        this.IsDV = null;

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
        this.IsDV = 'IsDV' in params ? params.IsDV : null;

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
         * Pagination offset, starting from 0. default is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. default is 10. maximum value is 1000; values exceeding 1000 will be treated as 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search keywords, supporting fuzzy match by certificate id, remark name, and certificate domain name.
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
         * Default sorting is by certificate application time in descending order. Sort by expiration date if the following values are passed: DESC for descending order of certificate expiration time, ASC for ascending order.
         * @type {string || null}
         */
        this.ExpirationSort = null;

        /**
         * Certificate status: 0=under review, 1=approved, 2=review failed, 3=expired, 4=dns record added, 5=enterprise certificate, pending submission, 6=order cancellation in progress, 7=canceled, 8=documents submitted, pending upload of confirmation letter, 9=certificate revocation in progress, 10=revoked, 11=reissue in progress, 12=pending upload of revocation confirmation letter, 13=free certificate pending document submission, 14=refunded, 15=certificate migration in progress.
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

        /**
         * Filter certificates with specified tags.
         * @type {Array.<Tags> || null}
         */
        this.Tags = null;

        /**
         * Whether to filter certificates pending issue: 1 for filtering, 0 and null for no filtering.
         * @type {number || null}
         */
        this.IsPendingIssue = null;

        /**
         * Filter certificates by the specified certificate id, only supports certificate ids with permission.
         * @type {Array.<string> || null}
         */
        this.CertIds = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.IsPendingIssue = 'IsPendingIssue' in params ? params.IsPendingIssue : null;
        this.CertIds = 'CertIds' in params ? params.CertIds : null;

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
         * API gateway instance details.	
         * @type {Array.<ApiGatewayInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * The total number of APIGATEWAY instances in this region.	
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Whether to query exceptions.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

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
         * Domain status.
`Deployed`: deployed;.
`Processing`: deploying;.
`Applying`: applying;.
`Failed`: application failed;.
`Issued`: binding failed.
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
         * Root certificate id.
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * Certificate authentication mode: unidirectional one-way authentication, mutual mutual authentication.
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
         * Paid certificate id of materials to be submitted.	
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Certificate domain name verification method:.
DNS_AUTO: automatically adds domain dns verification, requiring user domain name resolution to be hosted on [cloud dns](https://console.cloud.tencent.com/cns) and under the same tencent cloud account as the certificate application.
DNS: manually add domain dns verification, which requires users to manually add verification values to the domain resolution service provider.
FILE: manual addition of domain name file verification. requires the user to manually add a specified path file in the root directory of the domain site for file verification, and either http or https passing is acceptable; the domain site needs to be accessible by overseas ca institutions, with the specific access allowlist being: 64.78.193.238, 216.168.247.9, 216.168.249.9, 54.189.196.217.
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
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * UpdateCertificateInstance request structure.
 * @class
 */
class UpdateCertificateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The old certificate id for one-click update. by querying the cloud resources bound to this certificate id, and then updating these cloud resources with the new certificate.
         * @type {string || null}
         */
        this.OldCertificateId = null;

        /**
         * Resource types that need to be deployed, with optional parameter values (lowercase): clb, cdn, waf, live, ddos, teo, apigateway, vod, tke, tcb, tse, cos.
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

        /**
         * New certificate id for one-click update. if this parameter is not provided, the public key certificate and private key certificate must be provided.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * List of regions that need to be deployed (deprecated)
         * @type {Array.<string> || null}
         */
        this.Regions = null;

        /**
         * List of regions where cloud resources need to be deployed. the cloud resource type of the supported region must be passed. valid values: clb, tke, apigateway, waf, tcb, tse, cos.
         * @type {Array.<ResourceTypeRegions> || null}
         */
        this.ResourceTypesRegions = null;

        /**
         * If a public key certificate is uploaded, the private key certificate must also be uploaded, and the CertificateId does not need to be transmitted.
         * @type {string || null}
         */
        this.CertificatePublicKey = null;

        /**
         * If a private key certificate is uploaded, then a public key certificate must be uploaded; CertificateId is not required.
         * @type {string || null}
         */
        this.CertificatePrivateKey = null;

        /**
         * Whether to ignore expiration reminder for old certificate  0: do not ignore the notification. 1: ignore the notification, ignore the expiration reminder of OldCertificateId.
         * @type {number || null}
         */
        this.ExpiringNotificationSwitch = null;

        /**
         * It specifies whether the same certificate is allowed to be uploaded repeatedly. If the public key and private key certificates are selected for upload, this parameter can be configured. If there are duplicate certificates, the update task will fail.
         * @type {boolean || null}
         */
        this.Repeatable = null;

        /**
         * Whether to allow downloading. If you choose to upload a public/private key certificate, this parameter can be configured.
         * @type {boolean || null}
         */
        this.AllowDownload = null;

        /**
         * Tag list. If you choose to upload a public/private key certificate, you can configure this parameter.
         * @type {Array.<Tags> || null}
         */
        this.Tags = null;

        /**
         * Project id. If you choose to upload a public/private key certificate, you can configure this parameter.
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
        this.OldCertificateId = 'OldCertificateId' in params ? params.OldCertificateId : null;
        this.ResourceTypes = 'ResourceTypes' in params ? params.ResourceTypes : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.Regions = 'Regions' in params ? params.Regions : null;

        if (params.ResourceTypesRegions) {
            this.ResourceTypesRegions = new Array();
            for (let z in params.ResourceTypesRegions) {
                let obj = new ResourceTypeRegions();
                obj.deserialize(params.ResourceTypesRegions[z]);
                this.ResourceTypesRegions.push(obj);
            }
        }
        this.CertificatePublicKey = 'CertificatePublicKey' in params ? params.CertificatePublicKey : null;
        this.CertificatePrivateKey = 'CertificatePrivateKey' in params ? params.CertificatePrivateKey : null;
        this.ExpiringNotificationSwitch = 'ExpiringNotificationSwitch' in params ? params.ExpiringNotificationSwitch : null;
        this.Repeatable = 'Repeatable' in params ? params.Repeatable : null;
        this.AllowDownload = 'AllowDownload' in params ? params.AllowDownload : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tags();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

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
         * Type. `Original`: original certificate CSR; `Upload`: uploaded manually; `Online`: generated online. The default value is original.
         * @type {string || null}
         */
        this.CsrType = null;

        /**
         * CSR content, required when uploading manually.
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
         * Certificate source:
trustAsia.
upload.
wosign.
sheca.
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
         * Certificate package type:.
Null: user uploads a certificate (without package type),.
2: trustasia tls rsa ca,. 
3: securesite enhanced enterprise edition (ev pro),. 
4: securesite enhanced (ev),. 
5: securesite enterprise professional edition (ov pro).
6: securesite enterprise edition (ov). 
7: securesite enterprise edition (ov) wildcard. 
8: geotrust enhanced (ev). 
9: geotrust enterprise edition (ov). 
10: geotrust enterprise (ov) wildcard cert. 
11: trustasia domain name-based multiple domain names ssl certificate. 
12: trustasia domain name-based (dv) wildcard cert. 
13: trustasia enterprise wildcard (ov) ssl certificate (d3). 
14: trustasia enterprise (ov) ssl certificate (d3). 
15: trustasia enterprise multiple domain names (ov) ssl certificate (d3). 
16: trustasia enhanced (ev) ssl certificate (d3). 
17: trustasia enhanced multiple domain names (ev) ssl certificate (d3). 
18: globalsign enterprise (ov) ssl certificate. 
19: globalsign enterprise wildcard (ov) ssl certificate. 
20: globalsign enhanced (ev) ssl certificate. 
21: trustasia enterprise wildcard multiple domain names (ov) ssl certificate (d3). 
22: globalsign enterprise multiple domain names (ov) ssl certificate. 
23: globalsign enterprise wildcard multiple domain names (ov) ssl certificate.
24: globalsign enhanced multiple domain names (ev) ssl certificate.
25: wotrus domain cert.
26: wotrus multi - domain name cert.
27: wotrus wildcard cert.
28: wotrus enterprise cert.
29: wotrus enterprise multi - domain name cert.
30: wotrus enterprise wildcard certificate.
31: wotrus enhanced certificate.
32: wotrus enhanced multi - domain name certificate.
33: wotrus - national cryptography domain - name certificate.
34: wotrus - national cryptography domain - name certificate (multiple domain names).
35: wotrus-national cryptography wildcard domain certificate.
37: wotrus-national cryptography enterprise certificate.
38: wotrus-national cryptography enterprise certificate (multiple domain names).
39: wotrus-national cryptography enterprise certificate (wildcard).
40: wotrus-national cryptography enhanced certificate.
41: wotrus - national cryptography enhanced certificate (multiple domain names).
42: trustasia - domain name certificate (wildcard multiple domain names).
43: DNSPod - enterprise (ov) ssl certificate.
44: DNSPod - enterprise (ov) wildcard ssl certificate.
45: DNSPod - enterprise (ov) multiple domain names ssl certificate.
46: dnspod-enhanced (ev) ssl certificate.
47: dnspod-enhanced (ev) multiple domain names ssl certificate.
48: dnspod-domain name-based (dv) ssl certificate.
49: dnspod-domain name-based (dv) wildcard ssl certificate.
50: dnspod-domain name-based (dv) multiple domain names ssl certificate.
51: DNSPod (national cryptography) - enterprise (ov) ssl certificate.
52: DNSPod (national cryptography) - enterprise (ov) wildcard ssl certificate.
53: DNSPod (national cryptography) - enterprise (ov) multiple domain names ssl certificate.
54: DNSPod (national cryptography) - domain name-based (dv) ssl certificate.
55: DNSPod (national cryptography) - domain name-based (dv) wildcard ssl certificate.
56: DNSPod (national cryptography) - domain name-based (dv) multiple domain names ssl certificate.
57: securesite enterprise professional version multiple domain names (ov pro).
58: securesite enterprise multiple domain names (ov).
59: securesite enhanced professional version multiple domain names (ev pro).
60: securesite enhanced multiple domain names (ev).
61: geotrust enhanced multiple domain names (ev).
75: securesite enterprise (ov).
76: securesite enterprise (ov) wildcard.
77: securesite enhanced (ev).
78: geotrust enterprise (ov).
79: geotrust enterprise (ov) wildcard.
80: geotrust enhanced (ev).
81: globalsign enterprise (ov) ssl certificate.
82: globalsign enterprise wildcard (ov) ssl certificate.
83: trustasia c1 dv free.
85: globalsign enhanced (ev) ssl certificate.
88: globalsign enterprise wildcard multiple domain names (ov) ssl certificate.
89: globalsign enterprise multiple domain names (ov) ssl certificate.
90: globalsign enhanced multiple domain names (ev) ssl certificate.
91: geotrust enhanced multiple domain names (ev).
92: securesite enterprise ov pro for multiple domain names.
93: securesite enterprise for multiple domain names (ov).
94: securesite ev pro for multiple domain names.
95: securesite ev for multiple domain names.
96: securesite ev pro.
97: securesite enterprise professional version (ov pro).
98: cfca enterprise (ov) ssl certificate.
99: cfca enterprise multiple domain names (ov) ssl certificate.
100: cfca enterprise wildcard (ov) ssl certificate.
101: cfca enhanced (ev) ssl certificate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Certificate product name.
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
         * Certificate status: 0 = under review, 1 = approved, 2 = review failed, 3 = expired, 4 = dns records added automatically, 5 = enterprise certificate, pending documentation submission, 6 = order cancellation in progress, 7 = canceled, 8 = documents submitted, pending upload of confirmation letter, 9 = certificate revocation in progress, 10 = revoked, 11 = reissue in progress, 12 = pending upload of revocation confirmation letter, 13 = free certificate pending document submission, 14 = certificate has been refunded, 15 = certificate migration in progress.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Status information. valid values:.
//Common status information.
1. pre-reviewing: prereviewing.
2. legal-reviewing: under legal review.
3. ca-reviewing: under ca review.
4. pending-dcv: under domain verification.
5. wait-issue: waiting for issuance (domain verification passed).
//Certificate review failure status information.
Order review failed.
CA review failed; the domain name did not pass the security review.
Domain verification timed out, and the order was automatically closed. please reapply for the certificate.
The certificate information did not pass the review by the certificate authority. the reviewer will call the contact information reserved for the certificate. please pay attention to the incoming call. subsequently, you can resubmit the information through "modify information".
To be continuously improved.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * Validation type: DNS_AUTO = automatic dns validation, DNS = manual dns validation, FILE = file verification, DNS_PROXY = dns proxy validation, FILE_PROXY = file proxy validation.
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
         * All encryption methods of the ca certificate. only valid when the certificate type CertificateType is ca.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CAEncryptAlgorithms = null;

        /**
         * All common names of the ca certificate. only valid when the certificate type CertificateType is ca.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CACommonNames = null;

        /**
         * All expiration times of the ca certificate. only valid when the certificate type CertificateType is ca.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * Asynchronous deletion task id.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
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
        this.DeleteResult = 'DeleteResult' in params ? params.DeleteResult : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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

        /**
         * 
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

        /**
         * Whether to query exceptions.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

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
 * TSE instance details
 * @class
 */
class TSEInstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Gateway ID
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * Gateway name
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.GatewayName = null;

        /**
         * Gateway certificate list
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<GatewayCertificate> || null}
         */
        this.CertificateList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.GatewayName = 'GatewayName' in params ? params.GatewayName : null;

        if (params.CertificateList) {
            this.CertificateList = new Array();
            for (let z in params.CertificateList) {
                let obj = new GatewayCertificate();
                obj.deserialize(params.CertificateList[z]);
                this.CertificateList.push(obj);
            }
        }

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

        /**
         * Whether to query exceptions.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

    }
}

/**
 * List of filter parameters
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key of the filter parameter.
         * @type {string || null}
         */
        this.FilterKey = null;

        /**
         * The value of the filter parameter.
         * @type {string || null}
         */
        this.FilterValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterKey = 'FilterKey' in params ? params.FilterKey : null;
        this.FilterValue = 'FilterValue' in params ? params.FilterValue : null;

    }
}

/**
 * DescribeHostUpdateRecordDetail response structure.
 * @class
 */
class DescribeHostUpdateRecordDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * If the total number cannot be obtained, return 0.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Certificate deployment record list; returns an empty array if no value is obtained.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UpdateRecordDetails> || null}
         */
        this.RecordDetailList = null;

        /**
         * Total number of successes; returns 0 if unavailable.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SuccessTotalCount = null;

        /**
         * Total number of failures. if it cannot be obtained, return 0.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FailedTotalCount = null;

        /**
         * Total number of deployments in progress; returns 0 if unavailable.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RunningTotalCount = null;

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

        if (params.RecordDetailList) {
            this.RecordDetailList = new Array();
            for (let z in params.RecordDetailList) {
                let obj = new UpdateRecordDetails();
                obj.deserialize(params.RecordDetailList[z]);
                this.RecordDetailList.push(obj);
            }
        }
        this.SuccessTotalCount = 'SuccessTotalCount' in params ? params.SuccessTotalCount : null;
        this.FailedTotalCount = 'FailedTotalCount' in params ? params.FailedTotalCount : null;
        this.RunningTotalCount = 'RunningTotalCount' in params ? params.RunningTotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHostUpdateRecord request structure.
 * @class
 */
class DescribeHostUpdateRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Paging offset, starting from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number per page, 10 by default.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * New certificate ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Old certificate ID
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.OldCertificateId = 'OldCertificateId' in params ? params.OldCertificateId : null;

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
         * The domain for CSR filtering
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * The encryption algorithm for CSR filtering
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
 * Update the progress of asynchronous task.
 * @class
 */
class UpdateSyncProgressRegion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource type.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Total number
.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Quantity of executions completed.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OffsetCount = null;

        /**
         * Asynchronous update progress status: 0, pending, 1 processed, 3 processing.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Region = 'Region' in params ? params.Region : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.OffsetCount = 'OffsetCount' in params ? params.OffsetCount : null;
        this.Status = 'Status' in params ? params.Status : null;

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

        /**
         * Whether to query exceptions.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

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
         * Certificate id.
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

        /**
         * Whether to query exceptions.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

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

        /**
         * When deleting, check whether the certificate is associated with cloud resources. By default, no check is performed. if you choose to check (the authorization service role SSL_QCSLinkedRoleInReplaceLoadCertificate is required), the deletion will become asynchronous, and the API will return an asynchronous task id. you need to use the DescribeDeleteCertificatesTaskResult API to check whether the deletion is successful.
         * @type {boolean || null}
         */
        this.IsCheckResource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.IsCheckResource = 'IsCheckResource' in params ? params.IsCheckResource : null;

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
 * DescribeHostTeoInstanceList response structure.
 * @class
 */
class DescribeHostTeoInstanceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Teo instance list. if no value is obtained, an empty array is returned.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TeoInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * The total count.
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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new TeoInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelAuditCertificate request structure.
 * @class
 */
class CancelAuditCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The certificate ID.
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
 * ModifyCertificateResubmit response structure.
 * @class
 */
class ModifyCertificateResubmitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The certificate ID.
         * @type {string || null}
         */
        this.CertificateId = null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCertificateInstance response structure.
 * @class
 */
class UpdateCertificateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task id, DeployRecordId of 0 indicates that the task is in progress. repeatedly requesting this api, when DeployRecordId returned is greater than 0, it indicates that the task is created successfully. if not created successfully, an exception will be thrown.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DeployRecordId = null;

        /**
         * Status of the task; 1 indicates successful creation; 0 indicates that there is a task being updated currently, and no new update task has been created; the returned value DeployRecordId is the task id being updated.
         * @type {number || null}
         */
        this.DeployStatus = null;

        /**
         * Task Progress Details.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UpdateSyncProgress> || null}
         */
        this.UpdateSyncProgress = null;

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
        this.DeployRecordId = 'DeployRecordId' in params ? params.DeployRecordId : null;
        this.DeployStatus = 'DeployStatus' in params ? params.DeployStatus : null;

        if (params.UpdateSyncProgress) {
            this.UpdateSyncProgress = new Array();
            for (let z in params.UpdateSyncProgress) {
                let obj = new UpdateSyncProgress();
                obj.deserialize(params.UpdateSyncProgress[z]);
                this.UpdateSyncProgress.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Certificate Usage/Source, such as CLB, CDN, WAF, LIVE, DDOS.
         * @type {string || null}
         */
        this.CertificateUse = null;

        /**
         * The list of tags.
         * @type {Array.<Tags> || null}
         */
        this.Tags = null;

        /**
         * Whether to allow duplicate upload of the same certificate, true: allow uploading certificates with the same fingerprint; false: do not allow uploading certificates with the same fingerprint. default value: true.
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
         * Certificate domain validation methods:

DNS_AUTO: Automatically add domain DNS validation. Requires the user's domain to be hosted on 'Cloud DNS' and associated with the same Tencent Cloud account as the certificate application.

DNS: Manually add domain DNS validation. Requires the user to manually add the validation value at their domain's DNS service provider.

FILE: Manually add domain file validation. Requires the user to manually add a specified path file in the root directory of the domain site for file validation. Either HTTP or HTTPS validation will suffice; the domain site must be accessible by overseas CA institutions. The specific access whitelist is: 64.78.193.238, 216.168.247.9, 216.168.249.9, 54.189.196.217.
         * @type {string || null}
         */
        this.DvAuthMethod = null;

        /**
         * The domain bound to the certificate.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * The project ID associated with the certificate. Default is 0 (default project)
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Certificate type, optional, currently only type 83 is supported. 83 = trustasia c1 dv free.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * The email associated with the certificate order, By default, it uses the Tencent Cloud account email. If it does not exist, a fixed email address will be used.
         * @type {string || null}
         */
        this.ContactEmail = null;

        /**
         * The mobile phone number associated with the certificate. If it does not exist, a fixed mobile phone number will be used.
         * @type {string || null}
         */
        this.ContactPhone = null;

        /**
         * Certificate valid period, 3 months by default, currently only 3 months is supported.
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * Encryption algorithm, values can be ECC or RSA, default is RSA.
         * @type {string || null}
         */
        this.CsrEncryptAlgo = null;

        /**
         * Key pair parameters. RSA supports only 2048. ECC supports only prime256v1. When the encryption algorithm is set to ECC, this parameter is mandatory.
         * @type {string || null}
         */
        this.CsrKeyParameter = null;

        /**
         * Private key password, currently only used when generating jks, pfx format certificates; private key certificates of other formats are not encrypted.
         * @type {string || null}
         */
        this.CsrKeyPassword = null;

        /**
         * Certificate alias.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Old certificate id, used for certificate renewal (the certificate valid period is within 30 days and not expired), a renewal relationship will be established, which can be hosted; not providing it means applying for a new certificate.
         * @type {string || null}
         */
        this.OldCertificateId = null;

        /**
         * Benefit package ID, used for free certificate expansion package, the free certificate expansion package has been discontinued.
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * Whether to delete the automatic domain name verification record after issuance, which is fasle by default. This parameter can be passed in only for domain names of the DNS_AUTO verification type.
         * @type {boolean || null}
         */
        this.DeleteDnsAutoRecord = null;

        /**
         * Other domains bound to the certificate, to be opened. This parameter is not currently supported.
         * @type {Array.<string> || null}
         */
        this.DnsNames = null;

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
        this.DnsNames = 'DnsNames' in params ? params.DnsNames : null;

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
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.DealIds = 'DealIds' in params ? params.DealIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Deployment record information
 * @class
 */
class UpdateRecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * New certificate ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Old certificate ID
         * @type {string || null}
         */
        this.OldCertId = null;

        /**
         * Deployment resource type list
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

        /**
         * Deployment region list
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.Regions = null;

        /**
         * Deployment status
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Deployment time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last update time
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
        this.Id = 'Id' in params ? params.Id : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.OldCertId = 'OldCertId' in params ? params.OldCertId : null;
        this.ResourceTypes = 'ResourceTypes' in params ? params.ResourceTypes : null;
        this.Regions = 'Regions' in params ? params.Regions : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Managed configuration.
 * @class
 */
class HostingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hosted resource replacement time, defaults to 30 days before the certificate expiration if there is a renewal certificate, then replace.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReplaceTime = null;

        /**
         * Hosted send message type: 0, reminder message before hosted starts (you will receive this reminder message even if there is no renewal certificate); 1, reminder message when hosted starts (you will receive the message reminder only if there is a renewal certificate); 2, reminder message when hosted resource replacement fails; 3 reminder message when hosted resource replacement succeeds.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.MessageTypes = null;

        /**
         * Resource replacement start time.
         * @type {string || null}
         */
        this.ReplaceStartTime = null;

        /**
         * Resource replacement end time.
         * @type {string || null}
         */
        this.ReplaceEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplaceTime = 'ReplaceTime' in params ? params.ReplaceTime : null;
        this.MessageTypes = 'MessageTypes' in params ? params.MessageTypes : null;
        this.ReplaceStartTime = 'ReplaceStartTime' in params ? params.ReplaceStartTime : null;
        this.ReplaceEndTime = 'ReplaceEndTime' in params ? params.ReplaceEndTime : null;

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
         * Certificate belonging to user main account uin.
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
         * Certificate source:.
trustAsia.
upload.
wosign.
sheca.
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
         * Certificate package type:.
null: user uploads a certificate (no package type),.
2: trustasia tls rsa ca,. 
3: securesite enhanced enterprise version (ev pro),. 
4: securesite enhanced (ev),. 
5: securesite enterprise pro (ov pro).
6: securesite enterprise (ov). 
7: securesite enterprise (ov) wildcard. 
8: geotrust enhanced (ev). 
9: geotrust enterprise (ov). 
10: geotrust enterprise (ov) wildcard cert. 
11: trustasia domain name-based multiple domain names ssl certificate. 
12: trustasia domain name-based (dv) wildcard cert. 
13: trustasia enterprise wildcard (ov) ssl certificate (d3). 
14: trustasia enterprise (ov) ssl certificate (d3). 
15: trustasia enterprise multiple domain names (ov) ssl certificate (d3). 
16: trustasia enhanced (ev) ssl certificate (d3). 
17: trustasia enhanced multiple domain names (ev) ssl certificate (d3). 
18: globalsign enterprise (ov) ssl certificate. 
19: globalsign enterprise wildcard (ov) ssl certificate. 
20: globalsign enhanced (ev) ssl certificate. 
21: trustasia enterprise wildcard multiple domain names (ov) ssl certificate (d3). 
22: globalsign enterprise multiple domain names (ov) ssl certificate. 
23: globalsign enterprise wildcard multiple domain names (ov) ssl certificate.
24: globalsign enhanced multiple domain names (ev) ssl certificate.
25: wotrus domain cert.
26: wotrus multi-domain cert.
27: wotrus wildcard cert.
28: wotrus enterprise cert.
29: wotrus enterprise multi-domain cert.
30: wotrus enterprise wildcard certificate.
31: wotrus enhanced certificate.
32: wotrus enhanced multi-domain name certificate.
33: wotrus-national cryptography domain name certificate.
34: wotrus-national cryptography domain name certificate (multiple domain names).
35: wotrus-national cryptography wildcard certificate.
37: wotrus-national cryptography enterprise certificate.
38: wotrus-national cryptography enterprise certificate (multiple domain names).
39: wotrus-national cryptography enterprise certificate (wildcard).
40: wotrus-national cryptography enhanced certificate.
41: wotrus - national cryptography enhanced certificate (multiple domain names).
42: trustasia - domain name certificate (wildcard multiple domain names).
43: DNSPod - enterprise (ov) ssl certificate.
44: DNSPod - enterprise (ov) wildcard ssl certificate.
45: DNSPod - enterprise (ov) multiple domain names ssl certificate.
46: dnspod-enhanced (ev) ssl certificate.
47: dnspod-enhanced (ev) multiple domain names ssl certificate.
48: dnspod-domain name-based (dv) ssl certificate.
49: dnspod-domain name-based (dv) wildcard ssl certificate.
50: dnspod-domain name-based (dv) multiple domain names ssl certificate.
51: DNSPod (national cryptography) - enterprise (ov) ssl certificate.
52: DNSPod (national cryptography) - enterprise (ov) wildcard ssl certificate.
53: DNSPod (national cryptography) - enterprise (ov) multiple domain names ssl certificate.
54: DNSPod (national cryptography) - domain name-based (dv) ssl certificate.
55: DNSPod (national cryptography) - domain name-based (dv) wildcard ssl certificate.
56: DNSPod (national cryptography) - domain name-based (dv) multiple domain names ssl certificate.
57: securesite enterprise professional version multiple domain names (ov pro).
58: securesite enterprise multiple domain names (ov).
59: securesite enhanced professional version multiple domain names (ev pro).
60: securesite enhanced multiple domain names (ev).
61: geotrust enhanced multiple domain names (ev).
75: securesite enterprise (ov).
76: securesite enterprise (ov) wildcard.
77: securesite enhanced (ev).
78: geotrust enterprise (ov).
79: geotrust enterprise (ov) wildcard.
80: geotrust enhanced (ev).
81: globalsign enterprise (ov) ssl certificate.
82: globalsign enterprise wildcard (ov) ssl certificate.
83: trustasia c1 dv free.
85: globalsign enhanced (ev) ssl certificate.
88: globalsign enterprise wildcard multiple domain names (ov) ssl certificate.
89: globalsign enterprise multiple domain names (ov) ssl certificate.
90: globalsign enhanced multiple domain names (ev) ssl certificate.
91: geotrust enhanced multiple domain names (ev).
92: securesite enterprise ov pro for multiple domain names.
93: securesite enterprise for multiple domain names (ov).
94: securesite ev pro for multiple domain names.
95: securesite ev for multiple domain names.
96: securesite ev pro.
97: securesite enterprise professional edition (ov pro).
98: cfca enterprise (ov) ssl certificate.
99: cfca enterprise multiple domain names (ov) ssl certificate.
100: cfca enterprise wildcard (ov) ssl certificate.
101: cfca enhanced (ev) ssl certificate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * Certificate product name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductZhName = null;

        /**
         * Certificate binds to a common name domain.
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
         * Certificate status: 0 = under review, 1 = approved, 2 = review failed, 3 = expired, 4 = automatically added dns records, 5 = enterprise certificate, pending document submission, 6 = order cancellation in progress, 7 = canceled, 8 = documents submitted, pending upload of confirmation letter, 9 = certificate revocation in progress, 10 = revoked, 11 = reissue in progress, 12 = pending upload of revocation confirmation letter, 13 = free certificate pending document submission, 14 = certificate has been refunded, 15 = certificate migration in progress.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Status information. valid values:.
//Common status information.
PRE-REVIEWING: in prereview.
LEGAL-REVIEWING: in legal review.
CA-REVIEWING: in ca review.
PENDING-DCV: in domain verification.
WAIT-ISSUE: waiting for issue (domain verification passed).
Certificate review failure status information.
1. order review failed.
2. ca review failed, and the domain name did not pass the security review.
3. domain name verification timed out, and the order was automatically closed. please reapply for the certificate.
4. the certificate information did not pass the review of the certificate ca agency. the reviewer will call the contact information reserved for the certificate. please pay attention to the incoming call. subsequently, you can resubmit the information through "modify information".
To be continuously improved.
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
         * Certificate application time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * CA order id.
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
         * Private key certificate; for Chinese SM certificates, it refers to the private key certificate in the signature certificate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificatePrivateKey = null;

        /**
         * Public key certificate; for Chinese SM certificate, it refers to the public key certificate in the signature certificate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertificatePublicKey = null;

        /**
         * Certificate domain name verification information.
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
         * Profile information submitted for paid certificates.
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
         * Chinese SM certificate public key, only has value for national cryptography certificates.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EncryptCert = null;

        /**
         * Chinese SM certificate private key certificate, only has value for national cryptography certificates.
Note: this field may return null, indicating that no valid values can be obtained.
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
         * Certificate encryption algorithm (or Chinese SM certificates only).
Note: this field may return null, indicating that no valid values can be obtained.
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
         * Certificate chain information.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CertBasicInfo> || null}
         */
        this.CertChainInfo = null;

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

        if (params.CertChainInfo) {
            this.CertChainInfo = new Array();
            for (let z in params.CertChainInfo) {
                let obj = new CertBasicInfo();
                obj.deserialize(params.CertChainInfo[z]);
                this.CertChainInfo.push(obj);
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
        this.Content = 'Content' in params ? params.Content : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
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
         * Certificate data bound to the rule.
         * @type {Certificate || null}
         */
        this.Certificate = null;

        /**
         * Domain list not matched.
         * @type {Array.<string> || null}
         */
        this.NoMatchDomains = null;

        /**
         * Rule binding path.
         * @type {string || null}
         */
        this.Url = null;

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
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeHostTeoInstanceList request structure.
 * @class
 */
class DescribeHostTeoInstanceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the certificate to be deployed.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * The type of resource for certificate deployment.
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * Whether to query the cached results. Valid values: `1` (yes) and `0` (no). By default, the cached results within 30 minutes are queried.
         * @type {number || null}
         */
        this.IsCache = null;

        /**
         * The list of filter parameters. FilterKey: domainMatch (query the list of instances with matching or non-matching domains). FilterValue: `1` (default; query the list of instances with matching domains) or `0` (query the list of instances with non-matching domains).
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The ID of the deployed certificate.
         * @type {string || null}
         */
        this.OldCertificateId = null;

        /**
         * Paging offset. default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. default: 10. maximum value: 200.	
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Asynchronous or not. 1 means yes, 0 means no. default: 0.
         * @type {number || null}
         */
        this.AsyncCache = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.IsCache = 'IsCache' in params ? params.IsCache : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.OldCertificateId = 'OldCertificateId' in params ? params.OldCertificateId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AsyncCache = 'AsyncCache' in params ? params.AsyncCache : null;

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
         * CLB instance details.
         * @type {Array.<ClbInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * The total number of CLB instances in this region.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Whether to query exceptions.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

    }
}

/**
 * UpdateCertificateRecordRetry response structure.
 * @class
 */
class UpdateCertificateRecordRetryResponse extends  AbstractModel {
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
 * CancelAuditCertificate response structure.
 * @class
 */
class CancelAuditCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the operation succeeded.
         * @type {boolean || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TSE instance details - asynchronously associated cloud resource data structure
 * @class
 */
class TSEInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * TSE instance details
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<TSEInstanceDetail> || null}
         */
        this.InstanceList = null;

        /**
         * Total TSE instances in this region	
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Region	
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Whether to query exceptions.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Error = null;

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
                let obj = new TSEInstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Error = 'Error' in params ? params.Error : null;

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

        /**
         * Whether to query exceptions.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Error = null;

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
        this.Error = 'Error' in params ? params.Error : null;

    }
}

module.exports = {
    DescribeCertificateBindResourceTaskDetailRequest: DescribeCertificateBindResourceTaskDetailRequest,
    GatewayCertificate: GatewayCertificate,
    Error: Error,
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
    COSInstanceList: COSInstanceList,
    DvAuths: DvAuths,
    ModifyCertificateAliasRequest: ModifyCertificateAliasRequest,
    BatchDeleteCSRRequest: BatchDeleteCSRRequest,
    ProjectInfo: ProjectInfo,
    TCBEnvironments: TCBEnvironments,
    DescribeCertificateOperateLogsRequest: DescribeCertificateOperateLogsRequest,
    CancelCertificateOrderResponse: CancelCertificateOrderResponse,
    DdosInstanceList: DdosInstanceList,
    DescribeCSRSetResponse: DescribeCSRSetResponse,
    UpdateRecordDetails: UpdateRecordDetails,
    DescribeCSRRequest: DescribeCSRRequest,
    ModifyCertificateResubmitRequest: ModifyCertificateResubmitRequest,
    SupportDownloadType: SupportDownloadType,
    DescribeCertificateBindResourceTaskResultRequest: DescribeCertificateBindResourceTaskResultRequest,
    UpdateRecordDetail: UpdateRecordDetail,
    BindResourceResult: BindResourceResult,
    ApplyCertificateResponse: ApplyCertificateResponse,
    CreateCertificateBindResourceSyncTaskRequest: CreateCertificateBindResourceSyncTaskRequest,
    CosInstanceDetail: CosInstanceDetail,
    UploadConfirmLetterResponse: UploadConfirmLetterResponse,
    DescribeHostUpdateRecordDetailRequest: DescribeHostUpdateRecordDetailRequest,
    ReplaceCertificateResponse: ReplaceCertificateResponse,
    SyncTaskBindResourceResult: SyncTaskBindResourceResult,
    ClbInstanceDetail: ClbInstanceDetail,
    UpdateSyncProgress: UpdateSyncProgress,
    OperationLog: OperationLog,
    VodInstanceDetail: VodInstanceDetail,
    ResourceTypeRegions: ResourceTypeRegions,
    UpdateCertificateRecordRollbackRequest: UpdateCertificateRecordRollbackRequest,
    DescribeHostUpdateRecordResponse: DescribeHostUpdateRecordResponse,
    UpdateCertificateRecordRollbackResponse: UpdateCertificateRecordRollbackResponse,
    DescribeCertificateBindResourceTaskDetailResponse: DescribeCertificateBindResourceTaskDetailResponse,
    DvAuthDetail: DvAuthDetail,
    ModifyCSRResponse: ModifyCSRResponse,
    CdnInstanceList: CdnInstanceList,
    UpdateCertificateRecordRetryRequest: UpdateCertificateRecordRetryRequest,
    DdosInstanceDetail: DdosInstanceDetail,
    CertBasicInfo: CertBasicInfo,
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
    UpdateCertificateInstanceRequest: UpdateCertificateInstanceRequest,
    ReplaceCertificateRequest: ReplaceCertificateRequest,
    DescribeCertificateResponse: DescribeCertificateResponse,
    TkeSecretDetail: TkeSecretDetail,
    Tags: Tags,
    DeleteCertificateResponse: DeleteCertificateResponse,
    CreateCSRRequest: CreateCSRRequest,
    TCBInstanceList: TCBInstanceList,
    DescribeCertificateRequest: DescribeCertificateRequest,
    TSEInstanceDetail: TSEInstanceDetail,
    WafInstanceList: WafInstanceList,
    Filter: Filter,
    DescribeHostUpdateRecordDetailResponse: DescribeHostUpdateRecordDetailResponse,
    DescribeHostUpdateRecordRequest: DescribeHostUpdateRecordRequest,
    CertTaskId: CertTaskId,
    TCBAccessService: TCBAccessService,
    DescribeCSRSetRequest: DescribeCSRSetRequest,
    SubmittedData: SubmittedData,
    UpdateSyncProgressRegion: UpdateSyncProgressRegion,
    TkeInstanceList: TkeInstanceList,
    ApiGatewayInstanceDetail: ApiGatewayInstanceDetail,
    LiveInstanceList: LiveInstanceList,
    DeleteCertificateRequest: DeleteCertificateRequest,
    DescribeCertificateOperateLogsResponse: DescribeCertificateOperateLogsResponse,
    ModifyCertificateProjectRequest: ModifyCertificateProjectRequest,
    DescribeHostTeoInstanceListResponse: DescribeHostTeoInstanceListResponse,
    CancelAuditCertificateRequest: CancelAuditCertificateRequest,
    ModifyCertificateResubmitResponse: ModifyCertificateResubmitResponse,
    UpdateCertificateInstanceResponse: UpdateCertificateInstanceResponse,
    UploadCertificateRequest: UploadCertificateRequest,
    ModifyCertificateAliasResponse: ModifyCertificateAliasResponse,
    ApplyCertificateRequest: ApplyCertificateRequest,
    CreateCertificateResponse: CreateCertificateResponse,
    UpdateRecordInfo: UpdateRecordInfo,
    HostingConfig: HostingConfig,
    DescribeCertificateDetailResponse: DescribeCertificateDetailResponse,
    DescribeCertificateBindResourceTaskResultResponse: DescribeCertificateBindResourceTaskResultResponse,
    DownloadCertificateResponse: DownloadCertificateResponse,
    ClbListenerRule: ClbListenerRule,
    DescribeHostTeoInstanceListRequest: DescribeHostTeoInstanceListRequest,
    BindResourceRegionResult: BindResourceRegionResult,
    TkeInstanceDetail: TkeInstanceDetail,
    UploadConfirmLetterRequest: UploadConfirmLetterRequest,
    SubmitCertificateInformationResponse: SubmitCertificateInformationResponse,
    DescribeCSRResponse: DescribeCSRResponse,
    ClbInstanceList: ClbInstanceList,
    UpdateCertificateRecordRetryResponse: UpdateCertificateRecordRetryResponse,
    TCBHostService: TCBHostService,
    TkeIngressDetail: TkeIngressDetail,
    CancelAuditCertificateResponse: CancelAuditCertificateResponse,
    TSEInstanceList: TSEInstanceList,
    VODInstanceList: VODInstanceList,

}
