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
const CreateRecordRequest = models.CreateRecordRequest;
const DeleteDomainRequest = models.DeleteDomainRequest;
const RecordListItem = models.RecordListItem;
const DescribeRecordListResponse = models.DescribeRecordListResponse;
const CreateDomainRequest = models.CreateDomainRequest;
const DomainCreateInfo = models.DomainCreateInfo;
const ModifyDomainStatusRequest = models.ModifyDomainStatusRequest;
const ModifyDomainStatusResponse = models.ModifyDomainStatusResponse;
const ModifyDomainRemarkRequest = models.ModifyDomainRemarkRequest;
const DescribeRecordRequest = models.DescribeRecordRequest;
const DescribeDomainResponse = models.DescribeDomainResponse;
const DomainInfo = models.DomainInfo;
const DeleteRecordRequest = models.DeleteRecordRequest;
const DescribeRecordListRequest = models.DescribeRecordListRequest;
const DescribeDomainRequest = models.DescribeDomainRequest;
const CreateRecordResponse = models.CreateRecordResponse;
const DescribeRecordResponse = models.DescribeRecordResponse;
const RecordInfo = models.RecordInfo;
const ModifyRecordResponse = models.ModifyRecordResponse;
const ModifyDomainRemarkResponse = models.ModifyDomainRemarkResponse;
const DeleteRecordResponse = models.DeleteRecordResponse;
const DeleteDomainResponse = models.DeleteDomainResponse;
const CreateDomainResponse = models.CreateDomainResponse;
const RecordCountInfo = models.RecordCountInfo;
const ModifyRecordRequest = models.ModifyRecordRequest;


/**
 * dnspod client
 * @class
 */
class DnspodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dnspod.tencentcloudapi.com", "2021-03-23", credential, region, profile);
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
     * This API is used to modify a record.
     * @param {ModifyRecordRequest} req
     * @param {function(string, ModifyRecordResponse):void} cb
     * @public
     */
    ModifyRecord(req, cb) {
        let resp = new ModifyRecordResponse();
        this.request("ModifyRecord", req, resp, cb);
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
     * This API is used to add a domain.

     * @param {CreateDomainRequest} req
     * @param {function(string, CreateDomainResponse):void} cb
     * @public
     */
    CreateDomain(req, cb) {
        let resp = new CreateDomainResponse();
        this.request("CreateDomain", req, resp, cb);
    }


}
module.exports = DnspodClient;
