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
const InquireAuditCreditResponse = models.InquireAuditCreditResponse;
const StopLoggingRequest = models.StopLoggingRequest;
const CmqRegionInfo = models.CmqRegionInfo;
const GetAttributeKeyRequest = models.GetAttributeKeyRequest;
const DeleteAuditResponse = models.DeleteAuditResponse;
const UpdateAuditRequest = models.UpdateAuditRequest;
const InquireAuditCreditRequest = models.InquireAuditCreditRequest;
const ListAuditsRequest = models.ListAuditsRequest;
const LookUpEventsRequest = models.LookUpEventsRequest;
const StartLoggingRequest = models.StartLoggingRequest;
const CreateAuditResponse = models.CreateAuditResponse;
const StartLoggingResponse = models.StartLoggingResponse;
const AttributeKeyDetail = models.AttributeKeyDetail;
const ListCosEnableRegionRequest = models.ListCosEnableRegionRequest;
const Resource = models.Resource;
const ListCosEnableRegionResponse = models.ListCosEnableRegionResponse;
const StopLoggingResponse = models.StopLoggingResponse;
const LookupAttribute = models.LookupAttribute;
const ListAuditsResponse = models.ListAuditsResponse;
const UpdateAuditResponse = models.UpdateAuditResponse;
const DescribeAuditRequest = models.DescribeAuditRequest;
const CreateAuditRequest = models.CreateAuditRequest;
const DeleteAuditRequest = models.DeleteAuditRequest;
const ListCmqEnableRegionRequest = models.ListCmqEnableRegionRequest;
const GetAttributeKeyResponse = models.GetAttributeKeyResponse;
const ListCmqEnableRegionResponse = models.ListCmqEnableRegionResponse;
const LookUpEventsResponse = models.LookUpEventsResponse;
const CosRegionInfo = models.CosRegionInfo;
const DescribeAuditResponse = models.DescribeAuditResponse;
const Event = models.Event;
const AuditSummary = models.AuditSummary;


/**
 * cloudaudit client
 * @class
 */
class CloudauditClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cloudaudit.tencentcloudapi.com", "2019-03-19", credential, region, profile);
    }
    
    /**
     * This API is used to enable a tracking set.
     * @param {StartLoggingRequest} req
     * @param {function(string, StartLoggingResponse):void} cb
     * @public
     */
    StartLogging(req, cb) {
        let resp = new StartLoggingResponse();
        this.request("StartLogging", req, resp, cb);
    }

    /**
     * This API is used to query the value range of AttributeKey.
     * @param {GetAttributeKeyRequest} req
     * @param {function(string, GetAttributeKeyResponse):void} cb
     * @public
     */
    GetAttributeKey(req, cb) {
        let resp = new GetAttributeKeyResponse();
        this.request("GetAttributeKey", req, resp, cb);
    }

    /**
     * This API is used to query the CloudAudit-enabled CMQ AZs.
     * @param {ListCmqEnableRegionRequest} req
     * @param {function(string, ListCmqEnableRegionResponse):void} cb
     * @public
     */
    ListCmqEnableRegion(req, cb) {
        let resp = new ListCmqEnableRegionResponse();
        this.request("ListCmqEnableRegion", req, resp, cb);
    }

    /**
     * This API is used to delete a tracking set.
     * @param {DeleteAuditRequest} req
     * @param {function(string, DeleteAuditResponse):void} cb
     * @public
     */
    DeleteAudit(req, cb) {
        let resp = new DeleteAuditResponse();
        this.request("DeleteAudit", req, resp, cb);
    }

    /**
     * This API is used to disable a tracking set.
     * @param {StopLoggingRequest} req
     * @param {function(string, StopLoggingResponse):void} cb
     * @public
     */
    StopLogging(req, cb) {
        let resp = new StopLoggingResponse();
        this.request("StopLogging", req, resp, cb);
    }

    /**
     * This API is used to query the maximum number of tracking sets that can be created.
     * @param {InquireAuditCreditRequest} req
     * @param {function(string, InquireAuditCreditResponse):void} cb
     * @public
     */
    InquireAuditCredit(req, cb) {
        let resp = new InquireAuditCreditResponse();
        this.request("InquireAuditCredit", req, resp, cb);
    }

    /**
     * Parameter requirements:
1. If the value of IsCreateNewBucket exists, cosRegion and cosBucketName are required.
2. If the value of IsEnableCmqNotify is 1, IsCreateNewQueue, CmqRegion, and CmqQueueName are required.
3. If the value of IsEnableCmqNotify is 0, IsCreateNewQueue, CmqRegion, and CmqQueueName cannot be passed in.
     * @param {UpdateAuditRequest} req
     * @param {function(string, UpdateAuditResponse):void} cb
     * @public
     */
    UpdateAudit(req, cb) {
        let resp = new UpdateAuditResponse();
        this.request("UpdateAudit", req, resp, cb);
    }

    /**
     * This API is used to query the details of a tracking set.
     * @param {DescribeAuditRequest} req
     * @param {function(string, DescribeAuditResponse):void} cb
     * @public
     */
    DescribeAudit(req, cb) {
        let resp = new DescribeAuditResponse();
        this.request("DescribeAudit", req, resp, cb);
    }

    /**
     * This API is used to create a tracking set.
     * @param {CreateAuditRequest} req
     * @param {function(string, CreateAuditResponse):void} cb
     * @public
     */
    CreateAudit(req, cb) {
        let resp = new CreateAuditResponse();
        this.request("CreateAudit", req, resp, cb);
    }

    /**
     * This API is used to query the CloudAudit-enabled COS AZs.
     * @param {ListCosEnableRegionRequest} req
     * @param {function(string, ListCosEnableRegionResponse):void} cb
     * @public
     */
    ListCosEnableRegion(req, cb) {
        let resp = new ListCosEnableRegionResponse();
        this.request("ListCosEnableRegion", req, resp, cb);
    }

    /**
     * This API is used to search for operation logs to help query relevant operation information.
     * @param {LookUpEventsRequest} req
     * @param {function(string, LookUpEventsResponse):void} cb
     * @public
     */
    LookUpEvents(req, cb) {
        let resp = new LookUpEventsResponse();
        this.request("LookUpEvents", req, resp, cb);
    }

    /**
     * This API is used to query the summary of tracking sets.
     * @param {ListAuditsRequest} req
     * @param {function(string, ListAuditsResponse):void} cb
     * @public
     */
    ListAudits(req, cb) {
        let resp = new ListAuditsResponse();
        this.request("ListAudits", req, resp, cb);
    }


}
module.exports = CloudauditClient;
