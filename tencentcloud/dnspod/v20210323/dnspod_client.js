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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const CreateRecordRequest = models.CreateRecordRequest;
const DeleteDomainAliasResponse = models.DeleteDomainAliasResponse;
const DeleteDomainBatchResponse = models.DeleteDomainBatchResponse;
const RecordGroupInfo = models.RecordGroupInfo;
const CreateRecordBatchResponse = models.CreateRecordBatchResponse;
const CreateDomainBatchRecord = models.CreateDomainBatchRecord;
const ModifyRecordGroupRequest = models.ModifyRecordGroupRequest;
const DomainAnalyticsDetail = models.DomainAnalyticsDetail;
const DeleteRecordGroupRequest = models.DeleteRecordGroupRequest;
const DescribeDomainResponse = models.DescribeDomainResponse;
const DescribeRecordLineListResponse = models.DescribeRecordLineListResponse;
const DomainInfo = models.DomainInfo;
const CreateDomainBatchRequest = models.CreateDomainBatchRequest;
const ModifyRecordGroupResponse = models.ModifyRecordGroupResponse;
const DescribeDomainGroupListRequest = models.DescribeDomainGroupListRequest;
const DomainListItem = models.DomainListItem;
const DeleteDomainBatchRequest = models.DeleteDomainBatchRequest;
const DescribeRecordTypeResponse = models.DescribeRecordTypeResponse;
const ModifyDomainRemarkResponse = models.ModifyDomainRemarkResponse;
const DescribeDomainAliasListResponse = models.DescribeDomainAliasListResponse;
const ModifyRecordToGroupRequest = models.ModifyRecordToGroupRequest;
const RecordCountInfo = models.RecordCountInfo;
const DeleteShareDomainResponse = models.DeleteShareDomainResponse;
const ModifyRecordRequest = models.ModifyRecordRequest;
const BatchRecordInfo = models.BatchRecordInfo;
const LineGroupInfo = models.LineGroupInfo;
const DeleteDomainRequest = models.DeleteDomainRequest;
const ModifyDomainOwnerRequest = models.ModifyDomainOwnerRequest;
const DomainShareInfo = models.DomainShareInfo;
const DescribeRecordLineListRequest = models.DescribeRecordLineListRequest;
const DescribeRecordListResponse = models.DescribeRecordListResponse;
const CreateRecordBatchRequest = models.CreateRecordBatchRequest;
const DeleteDomainAliasRequest = models.DeleteDomainAliasRequest;
const DomainAliasInfo = models.DomainAliasInfo;
const ModifyDomainLockRequest = models.ModifyDomainLockRequest;
const ModifyDomainStatusRequest = models.ModifyDomainStatusRequest;
const SubdomainAliasAnalyticsItem = models.SubdomainAliasAnalyticsItem;
const ModifyDomainStatusResponse = models.ModifyDomainStatusResponse;
const AddRecordBatch = models.AddRecordBatch;
const DescribeRecordRequest = models.DescribeRecordRequest;
const CreateDomainGroupResponse = models.CreateDomainGroupResponse;
const DescribeSubdomainAnalyticsRequest = models.DescribeSubdomainAnalyticsRequest;
const DeleteRecordRequest = models.DeleteRecordRequest;
const DescribeDomainRequest = models.DescribeDomainRequest;
const GroupInfo = models.GroupInfo;
const ModifyRecordStatusRequest = models.ModifyRecordStatusRequest;
const CreateRecordResponse = models.CreateRecordResponse;
const DeleteRecordGroupResponse = models.DeleteRecordGroupResponse;
const RecordInfo = models.RecordInfo;
const CreateRecordBatchDetail = models.CreateRecordBatchDetail;
const DescribeSubdomainAnalyticsResponse = models.DescribeSubdomainAnalyticsResponse;
const ModifyRecordResponse = models.ModifyRecordResponse;
const ModifyRecordToGroupResponse = models.ModifyRecordToGroupResponse;
const ModifyDomainUnlockResponse = models.ModifyDomainUnlockResponse;
const DescribeDomainLogListRequest = models.DescribeDomainLogListRequest;
const DescribeDomainListResponse = models.DescribeDomainListResponse;
const ModifyRecordBatchRequest = models.ModifyRecordBatchRequest;
const DeleteRecordResponse = models.DeleteRecordResponse;
const CreateRecordBatchRecord = models.CreateRecordBatchRecord;
const CreateDomainResponse = models.CreateDomainResponse;
const DomainCountInfo = models.DomainCountInfo;
const ModifyRecordBatchResponse = models.ModifyRecordBatchResponse;
const DescribeDomainLogListResponse = models.DescribeDomainLogListResponse;
const DescribeRecordTypeRequest = models.DescribeRecordTypeRequest;
const RecordListItem = models.RecordListItem;
const CreateDomainBatchResponse = models.CreateDomainBatchResponse;
const DescribeDomainGroupListResponse = models.DescribeDomainGroupListResponse;
const ModifyDomainOwnerResponse = models.ModifyDomainOwnerResponse;
const SubdomainAnalyticsInfo = models.SubdomainAnalyticsInfo;
const ModifyRecordBatchDetail = models.ModifyRecordBatchDetail;
const DeleteDomainBatchDetail = models.DeleteDomainBatchDetail;
const CreateDomainRequest = models.CreateDomainRequest;
const DescribeDomainShareInfoResponse = models.DescribeDomainShareInfoResponse;
const ModifyDomainRemarkRequest = models.ModifyDomainRemarkRequest;
const CreateDomainAliasResponse = models.CreateDomainAliasResponse;
const DescribeRecordListRequest = models.DescribeRecordListRequest;
const DescribeRecordResponse = models.DescribeRecordResponse;
const DescribeDomainPurviewResponse = models.DescribeDomainPurviewResponse;
const ModifyRecordStatusResponse = models.ModifyRecordStatusResponse;
const CreateRecordGroupRequest = models.CreateRecordGroupRequest;
const DescribeRecordGroupListResponse = models.DescribeRecordGroupListResponse;
const CreateDomainGroupRequest = models.CreateDomainGroupRequest;
const LineInfo = models.LineInfo;
const DeleteDomainResponse = models.DeleteDomainResponse;
const DescribeDomainAliasListRequest = models.DescribeDomainAliasListRequest;
const CreateDomainAliasRequest = models.CreateDomainAliasRequest;
const DeleteShareDomainRequest = models.DeleteShareDomainRequest;
const DescribeRecordGroupListRequest = models.DescribeRecordGroupListRequest;
const PurviewInfo = models.PurviewInfo;
const ModifyRecordRemarkRequest = models.ModifyRecordRemarkRequest;
const ModifyRecordRemarkResponse = models.ModifyRecordRemarkResponse;
const DescribeDomainListRequest = models.DescribeDomainListRequest;
const DomainCreateInfo = models.DomainCreateInfo;
const DescribeDomainPurviewRequest = models.DescribeDomainPurviewRequest;
const CreateDomainBatchDetail = models.CreateDomainBatchDetail;
const ModifyDomainUnlockRequest = models.ModifyDomainUnlockRequest;
const ModifyDomainLockResponse = models.ModifyDomainLockResponse;
const LockInfo = models.LockInfo;
const CreateRecordGroupResponse = models.CreateRecordGroupResponse;
const DescribeDomainShareInfoRequest = models.DescribeDomainShareInfoRequest;


/**
 * dnspod client
 * @class
 */
class DnspodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dnspod.intl.tencentcloudapi.com", "2021-03-23", credential, region, profile);
    }
    
    /**
     * This API is used to get the DNS records of a domain.
     * @param {DescribeRecordListRequest} req
     * @param {function(string, DescribeRecordListResponse):void} cb
     * @public
     */
    DescribeRecordList(req, cb) {
        let resp = new DescribeRecordListResponse();
        this.request("DescribeRecordList", req, resp, cb);
    }

    /**
     * This API is used to get the list of domain groups.
     * @param {DescribeDomainGroupListRequest} req
     * @param {function(string, DescribeDomainGroupListResponse):void} cb
     * @public
     */
    DescribeDomainGroupList(req, cb) {
        let resp = new DescribeDomainGroupListResponse();
        this.request("DescribeDomainGroupList", req, resp, cb);
    }

    /**
     * This API is used to get the permissions of a domain.
     * @param {DescribeDomainPurviewRequest} req
     * @param {function(string, DescribeDomainPurviewResponse):void} cb
     * @public
     */
    DescribeDomainPurview(req, cb) {
        let resp = new DescribeDomainPurviewResponse();
        this.request("DescribeDomainPurview", req, resp, cb);
    }

    /**
     * This API is used to get the record type allowed by the domain level.
     * @param {DescribeRecordTypeRequest} req
     * @param {function(string, DescribeRecordTypeResponse):void} cb
     * @public
     */
    DescribeRecordType(req, cb) {
        let resp = new DescribeRecordTypeResponse();
        this.request("DescribeRecordType", req, resp, cb);
    }

    /**
     * This API is used to delete a record group.
     * @param {DeleteRecordGroupRequest} req
     * @param {function(string, DeleteRecordGroupResponse):void} cb
     * @public
     */
    DeleteRecordGroup(req, cb) {
        let resp = new DeleteRecordGroupResponse();
        this.request("DeleteRecordGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the status of a domain.
     * @param {ModifyDomainStatusRequest} req
     * @param {function(string, ModifyDomainStatusResponse):void} cb
     * @public
     */
    ModifyDomainStatus(req, cb) {
        let resp = new ModifyDomainStatusResponse();
        this.request("ModifyDomainStatus", req, resp, cb);
    }

    /**
     * This API is used to get the list of domain aliases.
     * @param {DescribeDomainAliasListRequest} req
     * @param {function(string, DescribeDomainAliasListResponse):void} cb
     * @public
     */
    DescribeDomainAliasList(req, cb) {
        let resp = new DescribeDomainAliasListResponse();
        this.request("DescribeDomainAliasList", req, resp, cb);
    }

    /**
     * This API is used to collect statistics on the DNS query volume of a subdomain. It helps you understand the traffic and time period distribution and allows you to view statistics in the last three months. It is available only for domains under a paid plan.
     * @param {DescribeSubdomainAnalyticsRequest} req
     * @param {function(string, DescribeSubdomainAnalyticsResponse):void} cb
     * @public
     */
    DescribeSubdomainAnalytics(req, cb) {
        let resp = new DescribeSubdomainAnalyticsResponse();
        this.request("DescribeSubdomainAnalytics", req, resp, cb);
    }

    /**
     * This API is used to batch delete domains.
     * @param {DeleteDomainBatchRequest} req
     * @param {function(string, DeleteDomainBatchResponse):void} cb
     * @public
     */
    DeleteDomainBatch(req, cb) {
        let resp = new DeleteDomainBatchResponse();
        this.request("DeleteDomainBatch", req, resp, cb);
    }

    /**
     * This API is used to modify the DNS record status.
     * @param {ModifyRecordStatusRequest} req
     * @param {function(string, ModifyRecordStatusResponse):void} cb
     * @public
     */
    ModifyRecordStatus(req, cb) {
        let resp = new ModifyRecordStatusResponse();
        this.request("ModifyRecordStatus", req, resp, cb);
    }

    /**
     * This API is used to get the information of a record.
     * @param {DescribeRecordRequest} req
     * @param {function(string, DescribeRecordResponse):void} cb
     * @public
     */
    DescribeRecord(req, cb) {
        let resp = new DescribeRecordResponse();
        this.request("DescribeRecord", req, resp, cb);
    }

    /**
     * This API is used to unlock a domain.
     * @param {ModifyDomainUnlockRequest} req
     * @param {function(string, ModifyDomainUnlockResponse):void} cb
     * @public
     */
    ModifyDomainUnlock(req, cb) {
        let resp = new ModifyDomainUnlockResponse();
        this.request("ModifyDomainUnlock", req, resp, cb);
    }

    /**
     * This API is used to bulk add domains.
     * @param {CreateDomainBatchRequest} req
     * @param {function(string, CreateDomainBatchResponse):void} cb
     * @public
     */
    CreateDomainBatch(req, cb) {
        let resp = new CreateDomainBatchResponse();
        this.request("CreateDomainBatch", req, resp, cb);
    }

    /**
     * This API is used to get the domain sharing information.
     * @param {DescribeDomainShareInfoRequest} req
     * @param {function(string, DescribeDomainShareInfoResponse):void} cb
     * @public
     */
    DescribeDomainShareInfo(req, cb) {
        let resp = new DescribeDomainShareInfoResponse();
        this.request("DescribeDomainShareInfo", req, resp, cb);
    }

    /**
     * This API is used to unshare a domain.
     * @param {DeleteShareDomainRequest} req
     * @param {function(string, DeleteShareDomainResponse):void} cb
     * @public
     */
    DeleteShareDomain(req, cb) {
        let resp = new DeleteShareDomainResponse();
        this.request("DeleteShareDomain", req, resp, cb);
    }

    /**
     * This API is used to modify a record group.
     * @param {ModifyRecordGroupRequest} req
     * @param {function(string, ModifyRecordGroupResponse):void} cb
     * @public
     */
    ModifyRecordGroup(req, cb) {
        let resp = new ModifyRecordGroupResponse();
        this.request("ModifyRecordGroup", req, resp, cb);
    }

    /**
     * This API is used to get the information of a domain.
     * @param {DescribeDomainRequest} req
     * @param {function(string, DescribeDomainResponse):void} cb
     * @public
     */
    DescribeDomain(req, cb) {
        let resp = new DescribeDomainResponse();
        this.request("DescribeDomain", req, resp, cb);
    }

    /**
     * This API is used to add a domain.
     * @param {CreateDomainRequest} req
     * @param {function(string, CreateDomainResponse):void} cb
     * @public
     */
    CreateDomain(req, cb) {
        let resp = new CreateDomainResponse();
        this.request("CreateDomain", req, resp, cb);
    }

    /**
     * This API is used to lock a domain.
     * @param {ModifyDomainLockRequest} req
     * @param {function(string, ModifyDomainLockResponse):void} cb
     * @public
     */
    ModifyDomainLock(req, cb) {
        let resp = new ModifyDomainLockResponse();
        this.request("ModifyDomainLock", req, resp, cb);
    }

    /**
     * This API is used to delete a record.
     * @param {DeleteRecordRequest} req
     * @param {function(string, DeleteRecordResponse):void} cb
     * @public
     */
    DeleteRecord(req, cb) {
        let resp = new DeleteRecordResponse();
        this.request("DeleteRecord", req, resp, cb);
    }

    /**
     * This API is used to query the list of DNS record groups.
     * @param {DescribeRecordGroupListRequest} req
     * @param {function(string, DescribeRecordGroupListResponse):void} cb
     * @public
     */
    DescribeRecordGroupList(req, cb) {
        let resp = new DescribeRecordGroupListResponse();
        this.request("DescribeRecordGroupList", req, resp, cb);
    }

    /**
     * This API is used to get the split zones allowed by the domain level.
     * @param {DescribeRecordLineListRequest} req
     * @param {function(string, DescribeRecordLineListResponse):void} cb
     * @public
     */
    DescribeRecordLineList(req, cb) {
        let resp = new DescribeRecordLineListResponse();
        this.request("DescribeRecordLineList", req, resp, cb);
    }

    /**
     * This API is used to set the remarks of a record.
     * @param {ModifyRecordRemarkRequest} req
     * @param {function(string, ModifyRecordRemarkResponse):void} cb
     * @public
     */
    ModifyRecordRemark(req, cb) {
        let resp = new ModifyRecordRemarkResponse();
        this.request("ModifyRecordRemark", req, resp, cb);
    }

    /**
     * This API is used to create a domain alias.
     * @param {CreateDomainAliasRequest} req
     * @param {function(string, CreateDomainAliasResponse):void} cb
     * @public
     */
    CreateDomainAlias(req, cb) {
        let resp = new CreateDomainAliasResponse();
        this.request("CreateDomainAlias", req, resp, cb);
    }

    /**
     * This API is used to add a record.
     * @param {CreateRecordRequest} req
     * @param {function(string, CreateRecordResponse):void} cb
     * @public
     */
    CreateRecord(req, cb) {
        let resp = new CreateRecordResponse();
        this.request("CreateRecord", req, resp, cb);
    }

    /**
     * This API is used to set the remarks of a domain.
     * @param {ModifyDomainRemarkRequest} req
     * @param {function(string, ModifyDomainRemarkResponse):void} cb
     * @public
     */
    ModifyDomainRemark(req, cb) {
        let resp = new ModifyDomainRemarkResponse();
        this.request("ModifyDomainRemark", req, resp, cb);
    }

    /**
     * This API is used to transfer ownership of a domain.
     * @param {ModifyDomainOwnerRequest} req
     * @param {function(string, ModifyDomainOwnerResponse):void} cb
     * @public
     */
    ModifyDomainOwner(req, cb) {
        let resp = new ModifyDomainOwnerResponse();
        this.request("ModifyDomainOwner", req, resp, cb);
    }

    /**
     * This API is used to create a domain group.
     * @param {CreateDomainGroupRequest} req
     * @param {function(string, CreateDomainGroupResponse):void} cb
     * @public
     */
    CreateDomainGroup(req, cb) {
        let resp = new CreateDomainGroupResponse();
        this.request("CreateDomainGroup", req, resp, cb);
    }

    /**
     * This API is used to add a record group.
     * @param {CreateRecordGroupRequest} req
     * @param {function(string, CreateRecordGroupResponse):void} cb
     * @public
     */
    CreateRecordGroup(req, cb) {
        let resp = new CreateRecordGroupResponse();
        this.request("CreateRecordGroup", req, resp, cb);
    }

    /**
     * This API is used to delete a domain alias.
     * @param {DeleteDomainAliasRequest} req
     * @param {function(string, DeleteDomainAliasResponse):void} cb
     * @public
     */
    DeleteDomainAlias(req, cb) {
        let resp = new DeleteDomainAliasResponse();
        this.request("DeleteDomainAlias", req, resp, cb);
    }

    /**
     * This API is used to bulk add records.
     * @param {CreateRecordBatchRequest} req
     * @param {function(string, CreateRecordBatchResponse):void} cb
     * @public
     */
    CreateRecordBatch(req, cb) {
        let resp = new CreateRecordBatchResponse();
        this.request("CreateRecordBatch", req, resp, cb);
    }

    /**
     * This API is used to add a record to a group.
     * @param {ModifyRecordToGroupRequest} req
     * @param {function(string, ModifyRecordToGroupResponse):void} cb
     * @public
     */
    ModifyRecordToGroup(req, cb) {
        let resp = new ModifyRecordToGroupResponse();
        this.request("ModifyRecordToGroup", req, resp, cb);
    }

    /**
     * This API is used to get the list of domains.
     * @param {DescribeDomainListRequest} req
     * @param {function(string, DescribeDomainListResponse):void} cb
     * @public
     */
    DescribeDomainList(req, cb) {
        let resp = new DescribeDomainListResponse();
        this.request("DescribeDomainList", req, resp, cb);
    }

    /**
     * This API is used to delete a domain.
     * @param {DeleteDomainRequest} req
     * @param {function(string, DeleteDomainResponse):void} cb
     * @public
     */
    DeleteDomain(req, cb) {
        let resp = new DeleteDomainResponse();
        this.request("DeleteDomain", req, resp, cb);
    }

    /**
     * This API is used to get the log of a domain.
     * @param {DescribeDomainLogListRequest} req
     * @param {function(string, DescribeDomainLogListResponse):void} cb
     * @public
     */
    DescribeDomainLogList(req, cb) {
        let resp = new DescribeDomainLogListResponse();
        this.request("DescribeDomainLogList", req, resp, cb);
    }

    /**
     * This API is used to bulk modify records.
     * @param {ModifyRecordBatchRequest} req
     * @param {function(string, ModifyRecordBatchResponse):void} cb
     * @public
     */
    ModifyRecordBatch(req, cb) {
        let resp = new ModifyRecordBatchResponse();
        this.request("ModifyRecordBatch", req, resp, cb);
    }

    /**
     * This API is used to modify a record.
     * @param {ModifyRecordRequest} req
     * @param {function(string, ModifyRecordResponse):void} cb
     * @public
     */
    ModifyRecord(req, cb) {
        let resp = new ModifyRecordResponse();
        this.request("ModifyRecord", req, resp, cb);
    }


}
module.exports = DnspodClient;
