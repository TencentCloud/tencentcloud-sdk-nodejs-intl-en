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
const Storage = models.Storage;
const DescribeAuditTracksResponse = models.DescribeAuditTracksResponse;
const StartLoggingRequest = models.StartLoggingRequest;
const DeleteAuditResponse = models.DeleteAuditResponse;
const ModifyAuditTrackResponse = models.ModifyAuditTrackResponse;
const InquireAuditCreditRequest = models.InquireAuditCreditRequest;
const DescribeEventsResponse = models.DescribeEventsResponse;
const ListCosEnableRegionResponse = models.ListCosEnableRegionResponse;
const LookUpEventsRequest = models.LookUpEventsRequest;
const DescribeAuditTrackRequest = models.DescribeAuditTrackRequest;
const UpdateAuditRequest = models.UpdateAuditRequest;
const DescribeAuditTracksRequest = models.DescribeAuditTracksRequest;
const Tracks = models.Tracks;
const CreateAuditResponse = models.CreateAuditResponse;
const DeleteAuditTrackRequest = models.DeleteAuditTrackRequest;
const StartLoggingResponse = models.StartLoggingResponse;
const AttributeKeyDetail = models.AttributeKeyDetail;
const ListCosEnableRegionRequest = models.ListCosEnableRegionRequest;
const CreateAuditTrackResponse = models.CreateAuditTrackResponse;
const Resource = models.Resource;
const ListAuditsRequest = models.ListAuditsRequest;
const ModifyAuditTrackRequest = models.ModifyAuditTrackRequest;
const StopLoggingResponse = models.StopLoggingResponse;
const CreateAuditTrackRequest = models.CreateAuditTrackRequest;
const LookupAttribute = models.LookupAttribute;
const ListAuditsResponse = models.ListAuditsResponse;
const DescribeEventsRequest = models.DescribeEventsRequest;
const UpdateAuditResponse = models.UpdateAuditResponse;
const DescribeAuditRequest = models.DescribeAuditRequest;
const CreateAuditRequest = models.CreateAuditRequest;
const DeleteAuditRequest = models.DeleteAuditRequest;
const ListCmqEnableRegionRequest = models.ListCmqEnableRegionRequest;
const GetAttributeKeyResponse = models.GetAttributeKeyResponse;
const ListCmqEnableRegionResponse = models.ListCmqEnableRegionResponse;
const LookUpEventsResponse = models.LookUpEventsResponse;
const DeleteAuditTrackResponse = models.DeleteAuditTrackResponse;
const CosRegionInfo = models.CosRegionInfo;
const DescribeAuditTrackResponse = models.DescribeAuditTrackResponse;
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
     * This API is used to modify a CloudAudit tracking set.
     * @param {ModifyAuditTrackRequest} req
     * @param {function(string, ModifyAuditTrackResponse):void} cb
     * @public
     */
    ModifyAuditTrack(req, cb) {
        let resp = new ModifyAuditTrackResponse();
        this.request("ModifyAuditTrack", req, resp, cb);
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
     * This API is used to query the CloudAudit tracking set details.
     * @param {DescribeAuditTrackRequest} req
     * @param {function(string, DescribeAuditTrackResponse):void} cb
     * @public
     */
    DescribeAuditTrack(req, cb) {
        let resp = new DescribeAuditTrackResponse();
        this.request("DescribeAuditTrack", req, resp, cb);
    }

    /**
     * This API is used to query the valid values of `AttributeKey`.
     * @param {GetAttributeKeyRequest} req
     * @param {function(string, GetAttributeKeyResponse):void} cb
     * @public
     */
    GetAttributeKey(req, cb) {
        let resp = new GetAttributeKeyResponse();
        this.request("GetAttributeKey", req, resp, cb);
    }

    /**
     * This API is used to create a tracking set.
     * @param {CreateAuditTrackRequest} req
     * @param {function(string, CreateAuditTrackResponse):void} cb
     * @public
     */
    CreateAuditTrack(req, cb) {
        let resp = new CreateAuditTrackResponse();
        this.request("CreateAuditTrack", req, resp, cb);
    }

    /**
     * This API is used to query CloudAudit-enabled CMQ AZs.
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
     * This API is used to query CloudAudit logs.
     * @param {DescribeEventsRequest} req
     * @param {function(string, DescribeEventsResponse):void} cb
     * @public
     */
    DescribeEvents(req, cb) {
        let resp = new DescribeEventsResponse();
        this.request("DescribeEvents", req, resp, cb);
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
     * This API is used to query CloudAudit-enabled COS AZs.
     * @param {ListCosEnableRegionRequest} req
     * @param {function(string, ListCosEnableRegionResponse):void} cb
     * @public
     */
    ListCosEnableRegion(req, cb) {
        let resp = new ListCosEnableRegionResponse();
        this.request("ListCosEnableRegion", req, resp, cb);
    }

    /**
     * This API is used to query the CloudAudit tracking set list.
     * @param {DescribeAuditTracksRequest} req
     * @param {function(string, DescribeAuditTracksResponse):void} cb
     * @public
     */
    DescribeAuditTracks(req, cb) {
        let resp = new DescribeAuditTracksResponse();
        this.request("DescribeAuditTracks", req, resp, cb);
    }

    /**
     * This API is used to query the number of tracking sets that can be created.
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
1. If the value of `IsCreateNewBucket` exists, `cosRegion` and `osBucketName` are required.
2. If the value of `IsEnableCmqNotify` is 1, `IsCreateNewQueue`, `CmqRegion`, and `CmqQueueName` are required.
3. If the value of `IsEnableCmqNotify` is 0, `IsCreateNewQueue`, `CmqRegion`, and `CmqQueueName` cannot be passed in.
4. If the value of `IsEnableKmsEncry` is 1, `KmsRegion` and `KeyId` are required.
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
     * Parameter requirements:
1. If the value of `IsCreateNewBucket` exists, `cosRegion` and `osBucketName` are required.
2. If the value of `IsEnableCmqNotify` is 1, `IsCreateNewQueue`, `CmqRegion`, and `CmqQueueName` are required.
3. If the value of `IsEnableCmqNotify` is 0, `IsCreateNewQueue`, `CmqRegion`, and `CmqQueueName` cannot be passed in.
4. If the value of `IsEnableKmsEncry` is 1, `KmsRegion` and `KeyId` are required.
     * @param {CreateAuditRequest} req
     * @param {function(string, CreateAuditResponse):void} cb
     * @public
     */
    CreateAudit(req, cb) {
        let resp = new CreateAuditResponse();
        this.request("CreateAudit", req, resp, cb);
    }

    /**
     * This API is used to delete a CloudAudit tracking set.
     * @param {DeleteAuditTrackRequest} req
     * @param {function(string, DeleteAuditTrackResponse):void} cb
     * @public
     */
    DeleteAuditTrack(req, cb) {
        let resp = new DeleteAuditTrackResponse();
        this.request("DeleteAuditTrack", req, resp, cb);
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
