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
const DescribeCertificateBindResourceTaskDetailRequest = models.DescribeCertificateBindResourceTaskDetailRequest;
const GatewayCertificate = models.GatewayCertificate;
const Error = models.Error;
const ModifyCSRRequest = models.ModifyCSRRequest;
const TCBAccessInstance = models.TCBAccessInstance;
const CancelCertificateOrderRequest = models.CancelCertificateOrderRequest;
const ModifyCertificateProjectResponse = models.ModifyCertificateProjectResponse;
const Certificates = models.Certificates;
const CertificateExtra = models.CertificateExtra;
const TeoInstanceList = models.TeoInstanceList;
const RootCertificates = models.RootCertificates;
const CdnInstanceDetail = models.CdnInstanceDetail;
const DescribeCertificateDetailRequest = models.DescribeCertificateDetailRequest;
const TkeNameSpaceDetail = models.TkeNameSpaceDetail;
const CreateCertificateBindResourceSyncTaskResponse = models.CreateCertificateBindResourceSyncTaskResponse;
const TCBHostInstance = models.TCBHostInstance;
const ClbListener = models.ClbListener;
const COSInstanceList = models.COSInstanceList;
const DvAuths = models.DvAuths;
const ModifyCertificateAliasRequest = models.ModifyCertificateAliasRequest;
const BatchDeleteCSRRequest = models.BatchDeleteCSRRequest;
const ProjectInfo = models.ProjectInfo;
const TCBEnvironments = models.TCBEnvironments;
const DescribeCertificateOperateLogsRequest = models.DescribeCertificateOperateLogsRequest;
const CancelCertificateOrderResponse = models.CancelCertificateOrderResponse;
const DdosInstanceList = models.DdosInstanceList;
const DescribeCSRSetResponse = models.DescribeCSRSetResponse;
const UpdateRecordDetails = models.UpdateRecordDetails;
const DescribeCSRRequest = models.DescribeCSRRequest;
const ModifyCertificateResubmitRequest = models.ModifyCertificateResubmitRequest;
const SupportDownloadType = models.SupportDownloadType;
const DescribeCertificateBindResourceTaskResultRequest = models.DescribeCertificateBindResourceTaskResultRequest;
const UpdateRecordDetail = models.UpdateRecordDetail;
const BindResourceResult = models.BindResourceResult;
const ApplyCertificateResponse = models.ApplyCertificateResponse;
const CreateCertificateBindResourceSyncTaskRequest = models.CreateCertificateBindResourceSyncTaskRequest;
const CosInstanceDetail = models.CosInstanceDetail;
const UploadConfirmLetterResponse = models.UploadConfirmLetterResponse;
const DescribeHostUpdateRecordDetailRequest = models.DescribeHostUpdateRecordDetailRequest;
const ReplaceCertificateResponse = models.ReplaceCertificateResponse;
const SyncTaskBindResourceResult = models.SyncTaskBindResourceResult;
const ClbInstanceDetail = models.ClbInstanceDetail;
const UpdateSyncProgress = models.UpdateSyncProgress;
const OperationLog = models.OperationLog;
const VodInstanceDetail = models.VodInstanceDetail;
const ResourceTypeRegions = models.ResourceTypeRegions;
const UpdateCertificateRecordRollbackRequest = models.UpdateCertificateRecordRollbackRequest;
const DescribeHostUpdateRecordResponse = models.DescribeHostUpdateRecordResponse;
const UpdateCertificateRecordRollbackResponse = models.UpdateCertificateRecordRollbackResponse;
const DescribeCertificateBindResourceTaskDetailResponse = models.DescribeCertificateBindResourceTaskDetailResponse;
const DvAuthDetail = models.DvAuthDetail;
const ModifyCSRResponse = models.ModifyCSRResponse;
const CdnInstanceList = models.CdnInstanceList;
const UpdateCertificateRecordRetryRequest = models.UpdateCertificateRecordRetryRequest;
const DdosInstanceDetail = models.DdosInstanceDetail;
const CertBasicInfo = models.CertBasicInfo;
const CreateCertificateRequest = models.CreateCertificateRequest;
const DescribeCertificatesResponse = models.DescribeCertificatesResponse;
const CommitCertificateInformationResponse = models.CommitCertificateInformationResponse;
const UploadCertificateResponse = models.UploadCertificateResponse;
const LiveInstanceDetail = models.LiveInstanceDetail;
const SubmitCertificateInformationRequest = models.SubmitCertificateInformationRequest;
const TCBEnvironment = models.TCBEnvironment;
const WafInstanceDetail = models.WafInstanceDetail;
const DescribeCertificatesRequest = models.DescribeCertificatesRequest;
const ApiGatewayInstanceList = models.ApiGatewayInstanceList;
const TeoInstanceDetail = models.TeoInstanceDetail;
const PreAuditInfo = models.PreAuditInfo;
const CreateCSRResponse = models.CreateCSRResponse;
const Certificate = models.Certificate;
const BatchDeleteCSRResponse = models.BatchDeleteCSRResponse;
const CommitCertificateInformationRequest = models.CommitCertificateInformationRequest;
const CSRItem = models.CSRItem;
const DownloadCertificateRequest = models.DownloadCertificateRequest;
const UpdateCertificateInstanceRequest = models.UpdateCertificateInstanceRequest;
const ReplaceCertificateRequest = models.ReplaceCertificateRequest;
const DescribeCertificateResponse = models.DescribeCertificateResponse;
const TkeSecretDetail = models.TkeSecretDetail;
const Tags = models.Tags;
const DeleteCertificateResponse = models.DeleteCertificateResponse;
const CreateCSRRequest = models.CreateCSRRequest;
const TCBInstanceList = models.TCBInstanceList;
const DescribeCertificateRequest = models.DescribeCertificateRequest;
const TSEInstanceDetail = models.TSEInstanceDetail;
const WafInstanceList = models.WafInstanceList;
const Filter = models.Filter;
const DescribeHostUpdateRecordDetailResponse = models.DescribeHostUpdateRecordDetailResponse;
const DescribeHostUpdateRecordRequest = models.DescribeHostUpdateRecordRequest;
const CertTaskId = models.CertTaskId;
const TCBAccessService = models.TCBAccessService;
const DescribeCSRSetRequest = models.DescribeCSRSetRequest;
const SubmittedData = models.SubmittedData;
const UpdateSyncProgressRegion = models.UpdateSyncProgressRegion;
const TkeInstanceList = models.TkeInstanceList;
const ApiGatewayInstanceDetail = models.ApiGatewayInstanceDetail;
const LiveInstanceList = models.LiveInstanceList;
const DeleteCertificateRequest = models.DeleteCertificateRequest;
const DescribeCertificateOperateLogsResponse = models.DescribeCertificateOperateLogsResponse;
const ModifyCertificateProjectRequest = models.ModifyCertificateProjectRequest;
const DescribeHostTeoInstanceListResponse = models.DescribeHostTeoInstanceListResponse;
const CancelAuditCertificateRequest = models.CancelAuditCertificateRequest;
const ModifyCertificateResubmitResponse = models.ModifyCertificateResubmitResponse;
const UpdateCertificateInstanceResponse = models.UpdateCertificateInstanceResponse;
const UploadCertificateRequest = models.UploadCertificateRequest;
const ModifyCertificateAliasResponse = models.ModifyCertificateAliasResponse;
const ApplyCertificateRequest = models.ApplyCertificateRequest;
const CreateCertificateResponse = models.CreateCertificateResponse;
const UpdateRecordInfo = models.UpdateRecordInfo;
const HostingConfig = models.HostingConfig;
const DescribeCertificateDetailResponse = models.DescribeCertificateDetailResponse;
const DescribeCertificateBindResourceTaskResultResponse = models.DescribeCertificateBindResourceTaskResultResponse;
const DownloadCertificateResponse = models.DownloadCertificateResponse;
const ClbListenerRule = models.ClbListenerRule;
const DescribeHostTeoInstanceListRequest = models.DescribeHostTeoInstanceListRequest;
const BindResourceRegionResult = models.BindResourceRegionResult;
const TkeInstanceDetail = models.TkeInstanceDetail;
const UploadConfirmLetterRequest = models.UploadConfirmLetterRequest;
const SubmitCertificateInformationResponse = models.SubmitCertificateInformationResponse;
const DescribeCSRResponse = models.DescribeCSRResponse;
const ClbInstanceList = models.ClbInstanceList;
const UpdateCertificateRecordRetryResponse = models.UpdateCertificateRecordRetryResponse;
const TCBHostService = models.TCBHostService;
const TkeIngressDetail = models.TkeIngressDetail;
const CancelAuditCertificateResponse = models.CancelAuditCertificateResponse;
const TSEInstanceList = models.TSEInstanceList;
const VODInstanceList = models.VODInstanceList;


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
     * Cloud resource update one-click rollback
     * @param {UpdateCertificateRecordRollbackRequest} req
     * @param {function(string, UpdateCertificateRecordRollbackResponse):void} cb
     * @public
     */
    UpdateCertificateRecordRollback(req, cb) {
        let resp = new UpdateCertificateRecordRollbackResponse();
        this.request("UpdateCertificateRecordRollback", req, resp, cb);
    }

    /**
     * This API is used to batch delete CSRs.
     * @param {BatchDeleteCSRRequest} req
     * @param {function(string, BatchDeleteCSRResponse):void} cb
     * @public
     */
    BatchDeleteCSR(req, cb) {
        let resp = new BatchDeleteCSRResponse();
        this.request("BatchDeleteCSR", req, resp, cb);
    }

    /**
     * This API is used to query the CSR list.
     * @param {DescribeCSRSetRequest} req
     * @param {function(string, DescribeCSRSetResponse):void} cb
     * @public
     */
    DescribeCSRSet(req, cb) {
        let resp = new DescribeCSRSetResponse();
        this.request("DescribeCSRSet", req, resp, cb);
    }

    /**
     * Submit documentation for paid certificates; This API does not maintain new features, and you can use the new API to submit documentation. [CertificateInfoSubmit](https://intl.cloud.tencent.com/document/product/400/116033?from_cn_redirect=1).
     * @param {SubmitCertificateInformationRequest} req
     * @param {function(string, SubmitCertificateInformationResponse):void} cb
     * @public
     */
    SubmitCertificateInformation(req, cb) {
        let resp = new SubmitCertificateInformationResponse();
        this.request("SubmitCertificateInformation", req, resp, cb);
    }

    /**
     * This API is used to query the details of a CSR.
     * @param {DescribeCSRRequest} req
     * @param {function(string, DescribeCSRResponse):void} cb
     * @public
     */
    DescribeCSR(req, cb) {
        let resp = new DescribeCSRResponse();
        this.request("DescribeCSR", req, resp, cb);
    }

    /**
     * This API is used to query the list of EdgeOne instances to which a certificate can be deployed.
     * @param {DescribeHostTeoInstanceListRequest} req
     * @param {function(string, DescribeHostTeoInstanceListResponse):void} cb
     * @public
     */
    DescribeHostTeoInstanceList(req, cb) {
        let resp = new DescribeHostTeoInstanceListResponse();
        this.request("DescribeHostTeoInstanceList", req, resp, cb);
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
     * This API is used to one-click update old certificate resources. This API is asynchronous. After calling it, if DeployRecordId is 0, it means the task is in progress. Repeat the request to this API. When the returned DeployRecordId is greater than 0, it means the task creation is successful. If it is not created successfully, an exception will be thrown.
     * @param {UpdateCertificateInstanceRequest} req
     * @param {function(string, UpdateCertificateInstanceResponse):void} cb
     * @public
     */
    UpdateCertificateInstance(req, cb) {
        let resp = new UpdateCertificateInstanceResponse();
        this.request("UpdateCertificateInstance", req, resp, cb);
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
     * This API is used to modify the information of a CSR.
     * @param {ModifyCSRRequest} req
     * @param {function(string, ModifyCSRResponse):void} cb
     * @public
     */
    ModifyCSR(req, cb) {
        let resp = new ModifyCSRResponse();
        this.request("ModifyCSR", req, resp, cb);
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
     * This API is used to query the result of an async task created with `CreateCertificateBindResourceSyncTask` to query cloud resources associated with a certificate. The following types of cloud resources are supported: CLB, CDN, WAF, LIVE, VOD, DDOS, TKE, APIGATEWAY, TCB, and TEO (EDGEONE).
     * @param {DescribeCertificateBindResourceTaskResultRequest} req
     * @param {function(string, DescribeCertificateBindResourceTaskResultResponse):void} cb
     * @public
     */
    DescribeCertificateBindResourceTaskResult(req, cb) {
        let resp = new DescribeCertificateBindResourceTaskResultResponse();
        this.request("DescribeCertificateBindResourceTaskResult", req, resp, cb);
    }

    /**
     * This API is used to cancel certificate review.
     * @param {CancelAuditCertificateRequest} req
     * @param {function(string, CancelAuditCertificateResponse):void} cb
     * @public
     */
    CancelAuditCertificate(req, cb) {
        let resp = new CancelAuditCertificateResponse();
        this.request("CancelAuditCertificate", req, resp, cb);
    }

    /**
     * Cloud resource update deployment retry record
     * @param {UpdateCertificateRecordRetryRequest} req
     * @param {function(string, UpdateCertificateRecordRetryResponse):void} cb
     * @public
     */
    UpdateCertificateRecordRetry(req, cb) {
        let resp = new UpdateCertificateRecordRetryResponse();
        this.request("UpdateCertificateRecordRetry", req, resp, cb);
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
     * This API is used to get certificate information.
     * @param {DescribeCertificateRequest} req
     * @param {function(string, DescribeCertificateResponse):void} cb
     * @public
     */
    DescribeCertificate(req, cb) {
        let resp = new DescribeCertificateResponse();
        this.request("DescribeCertificate", req, resp, cb);
    }

    /**
     * Query certificate cloud resource update record list
     * @param {DescribeHostUpdateRecordRequest} req
     * @param {function(string, DescribeHostUpdateRecordResponse):void} cb
     * @public
     */
    DescribeHostUpdateRecord(req, cb) {
        let resp = new DescribeHostUpdateRecordResponse();
        this.request("DescribeHostUpdateRecord", req, resp, cb);
    }

    /**
     * This API is used to purchase a certificate.
     * @param {CreateCertificateRequest} req
     * @param {function(string, CreateCertificateResponse):void} cb
     * @public
     */
    CreateCertificate(req, cb) {
        let resp = new CreateCertificateResponse();
        this.request("CreateCertificate", req, resp, cb);
    }

    /**
     * This API is used to upload the confirmation letter for a certificate.
     * @param {UploadConfirmLetterRequest} req
     * @param {function(string, UploadConfirmLetterResponse):void} cb
     * @public
     */
    UploadConfirmLetter(req, cb) {
        let resp = new UploadConfirmLetterResponse();
        this.request("UploadConfirmLetter", req, resp, cb);
    }

    /**
     * This API is used to query the update record details of certificate cloud resources.
     * @param {DescribeHostUpdateRecordDetailRequest} req
     * @param {function(string, DescribeHostUpdateRecordDetailResponse):void} cb
     * @public
     */
    DescribeHostUpdateRecordDetail(req, cb) {
        let resp = new DescribeHostUpdateRecordDetailResponse();
        this.request("DescribeHostUpdateRecordDetail", req, resp, cb);
    }

    /**
     * Submit payment certificate orders; This API does not maintain new features, and you can use the new API to submit orders. [CertificateOrderSubmit](https://intl.cloud.tencent.com/document/product/400/116032?from_cn_redirect=1).
     * @param {CommitCertificateInformationRequest} req
     * @param {function(string, CommitCertificateInformationResponse):void} cb
     * @public
     */
    CommitCertificateInformation(req, cb) {
        let resp = new CommitCertificateInformationResponse();
        this.request("CommitCertificateInformation", req, resp, cb);
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
     * This API is used to create an async task for querying the cloud resources associated with a certificate. If such a task already exists under the certificate ID, the ID of this task is returned as the result. The following types of cloud resources are supported: CLB, CDN, WAF, LIVE, VOD, DDOS, TKE, APIGATEWAY, TCB, and TEO (EDGEONE). You can query the result of this task using the `DescribeCertificateBindResourceTaskResult` API.
     * @param {CreateCertificateBindResourceSyncTaskRequest} req
     * @param {function(string, CreateCertificateBindResourceSyncTaskResponse):void} cb
     * @public
     */
    CreateCertificateBindResourceSyncTask(req, cb) {
        let resp = new CreateCertificateBindResourceSyncTaskResponse();
        this.request("CreateCertificateBindResourceSyncTask", req, resp, cb);
    }

    /**
     * This API is used to create a CSR.
     * @param {CreateCSRRequest} req
     * @param {function(string, CreateCSRResponse):void} cb
     * @public
     */
    CreateCSR(req, cb) {
        let resp = new CreateCSRResponse();
        this.request("CreateCSR", req, resp, cb);
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
     * This API is used to query the task result of CreateCertificateBindResourceSyncTask, returning the asynchronous task result of the certificate associated with cloud resources, supporting the following cloud resources: clb, cdn, waf, live, vod, ddos, tke, apigateway, tcb, teo (edgeOne), cos.
     * @param {DescribeCertificateBindResourceTaskDetailRequest} req
     * @param {function(string, DescribeCertificateBindResourceTaskDetailResponse):void} cb
     * @public
     */
    DescribeCertificateBindResourceTaskDetail(req, cb) {
        let resp = new DescribeCertificateBindResourceTaskDetailResponse();
        this.request("DescribeCertificateBindResourceTaskDetail", req, resp, cb);
    }

    /**
     * This API is used to re-submit a review application for a paid certificate whose review failed or was canceled.
     * @param {ModifyCertificateResubmitRequest} req
     * @param {function(string, ModifyCertificateResubmitResponse):void} cb
     * @public
     */
    ModifyCertificateResubmit(req, cb) {
        let resp = new ModifyCertificateResubmitResponse();
        this.request("ModifyCertificateResubmit", req, resp, cb);
    }


}
module.exports = SslClient;
