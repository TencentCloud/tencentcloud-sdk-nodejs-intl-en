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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ApplyCertificateResponse = models.ApplyCertificateResponse;
const DeleteCertificateRequest = models.DeleteCertificateRequest;
const DescribeCertificateOperateLogsResponse = models.DescribeCertificateOperateLogsResponse;
const CommitCertificateInformationRequest = models.CommitCertificateInformationRequest;
const CommitCertificateInformationResponse = models.CommitCertificateInformationResponse;
const ReplaceCertificateResponse = models.ReplaceCertificateResponse;
const DownloadCertificateRequest = models.DownloadCertificateRequest;
const CancelCertificateOrderRequest = models.CancelCertificateOrderRequest;
const ModifyCertificateProjectResponse = models.ModifyCertificateProjectResponse;
const Certificates = models.Certificates;
const CertificateExtra = models.CertificateExtra;
const DescribeCertificateResponse = models.DescribeCertificateResponse;
const OperationLog = models.OperationLog;
const RootCertificates = models.RootCertificates;
const UploadCertificateRequest = models.UploadCertificateRequest;
const DescribeCertificateDetailRequest = models.DescribeCertificateDetailRequest;
const Tags = models.Tags;
const ApplyCertificateRequest = models.ApplyCertificateRequest;
const ReplaceCertificateRequest = models.ReplaceCertificateRequest;
const DeleteCertificateResponse = models.DeleteCertificateResponse;
const DvAuthDetail = models.DvAuthDetail;
const ModifyCertificateProjectRequest = models.ModifyCertificateProjectRequest;
const DvAuths = models.DvAuths;
const ModifyCertificateAliasRequest = models.ModifyCertificateAliasRequest;
const DescribeCertificateRequest = models.DescribeCertificateRequest;
const ProjectInfo = models.ProjectInfo;
const DescribeCertificateOperateLogsRequest = models.DescribeCertificateOperateLogsRequest;
const CancelCertificateOrderResponse = models.CancelCertificateOrderResponse;
const SubmitCertificateInformationResponse = models.SubmitCertificateInformationResponse;
const DescribeCertificatesResponse = models.DescribeCertificatesResponse;
const DownloadCertificateResponse = models.DownloadCertificateResponse;
const UploadCertificateResponse = models.UploadCertificateResponse;
const DescribeCertificateDetailResponse = models.DescribeCertificateDetailResponse;
const ModifyCertificateAliasResponse = models.ModifyCertificateAliasResponse;
const SubmitCertificateInformationRequest = models.SubmitCertificateInformationRequest;
const SubmittedData = models.SubmittedData;
const DescribeCertificatesRequest = models.DescribeCertificatesRequest;
const PreAuditInfo = models.PreAuditInfo;


/**
 * ssl client
 * @class
 */
class SslClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ssl.tencentcloudapi.com", "2019-12-05", credential, region, profile);
    }
    
    /**
     * This API is used to get the certificate list.
     * @param {DescribeCertificatesRequest} req
     * @param {function(string, DescribeCertificatesResponse):void} cb
     * @public
     */
    DescribeCertificates(req, cb) {
        let resp = new DescribeCertificatesResponse();
        this.request("DescribeCertificates", req, resp, cb);
    }

    /**
     * This API is used to modify the projects of multiple certificates.
     * @param {ModifyCertificateProjectRequest} req
     * @param {function(string, ModifyCertificateProjectResponse):void} cb
     * @public
     */
    ModifyCertificateProject(req, cb) {
        let resp = new ModifyCertificateProjectResponse();
        this.request("ModifyCertificateProject", req, resp, cb);
    }

    /**
     * This API is used to upload a certificate.
     * @param {UploadCertificateRequest} req
     * @param {function(string, UploadCertificateResponse):void} cb
     * @public
     */
    UploadCertificate(req, cb) {
        let resp = new UploadCertificateResponse();
        this.request("UploadCertificate", req, resp, cb);
    }

    /**
     * This API is used to cancel a certificate order.
     * @param {CancelCertificateOrderRequest} req
     * @param {function(string, CancelCertificateOrderResponse):void} cb
     * @public
     */
    CancelCertificateOrder(req, cb) {
        let resp = new CancelCertificateOrderResponse();
        this.request("CancelCertificateOrder", req, resp, cb);
    }

    /**
     * This API is used to submit a certificate order.
     * @param {CommitCertificateInformationRequest} req
     * @param {function(string, CommitCertificateInformationResponse):void} cb
     * @public
     */
    CommitCertificateInformation(req, cb) {
        let resp = new CommitCertificateInformationResponse();
        this.request("CommitCertificateInformation", req, resp, cb);
    }

    /**
     * This API is used to delete a certificate.
     * @param {DeleteCertificateRequest} req
     * @param {function(string, DeleteCertificateResponse):void} cb
     * @public
     */
    DeleteCertificate(req, cb) {
        let resp = new DeleteCertificateResponse();
        this.request("DeleteCertificate", req, resp, cb);
    }

    /**
     * This API is used to modify a certificate alias by passing in the certificate ID and new alias.
     * @param {ModifyCertificateAliasRequest} req
     * @param {function(string, ModifyCertificateAliasResponse):void} cb
     * @public
     */
    ModifyCertificateAlias(req, cb) {
        let resp = new ModifyCertificateAliasResponse();
        this.request("ModifyCertificateAlias", req, resp, cb);
    }

    /**
     * This API is used to download a certificate.
     * @param {DownloadCertificateRequest} req
     * @param {function(string, DownloadCertificateResponse):void} cb
     * @public
     */
    DownloadCertificate(req, cb) {
        let resp = new DownloadCertificateResponse();
        this.request("DownloadCertificate", req, resp, cb);
    }

    /**
     * This API is used to reissue a certificate. Note that if you have applied for a free certificate, only an RSA-2048 certificate will be reissued, and the certificate can be reissued only once.
     * @param {ReplaceCertificateRequest} req
     * @param {function(string, ReplaceCertificateResponse):void} cb
     * @public
     */
    ReplaceCertificate(req, cb) {
        let resp = new ReplaceCertificateResponse();
        this.request("ReplaceCertificate", req, resp, cb);
    }

    /**
     * This API is used to apply for a free certificate.
     * @param {ApplyCertificateRequest} req
     * @param {function(string, ApplyCertificateResponse):void} cb
     * @public
     */
    ApplyCertificate(req, cb) {
        let resp = new ApplyCertificateResponse();
        this.request("ApplyCertificate", req, resp, cb);
    }

    /**
     * This API is used to get certificate operation logs in the current account.
     * @param {DescribeCertificateOperateLogsRequest} req
     * @param {function(string, DescribeCertificateOperateLogsResponse):void} cb
     * @public
     */
    DescribeCertificateOperateLogs(req, cb) {
        let resp = new DescribeCertificateOperateLogsResponse();
        this.request("DescribeCertificateOperateLogs", req, resp, cb);
    }

    /**
     * This API is used to submit certificate information.
     * @param {SubmitCertificateInformationRequest} req
     * @param {function(string, SubmitCertificateInformationResponse):void} cb
     * @public
     */
    SubmitCertificateInformation(req, cb) {
        let resp = new SubmitCertificateInformationResponse();
        this.request("SubmitCertificateInformation", req, resp, cb);
    }

    /**
     * This API is used to get certificate details.
     * @param {DescribeCertificateDetailRequest} req
     * @param {function(string, DescribeCertificateDetailResponse):void} cb
     * @public
     */
    DescribeCertificateDetail(req, cb) {
        let resp = new DescribeCertificateDetailResponse();
        this.request("DescribeCertificateDetail", req, resp, cb);
    }

    /**
     * This API is used to get certificate information.
     * @param {DescribeCertificateRequest} req
     * @param {function(string, DescribeCertificateResponse):void} cb
     * @public
     */
    DescribeCertificate(req, cb) {
        let resp = new DescribeCertificateResponse();
        this.request("DescribeCertificate", req, resp, cb);
    }


}
module.exports = SslClient;
