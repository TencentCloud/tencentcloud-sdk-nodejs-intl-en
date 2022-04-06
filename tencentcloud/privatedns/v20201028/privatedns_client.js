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
const DescribeQuotaUsageResponse = models.DescribeQuotaUsageResponse;
const ModifyPrivateZoneVpcRequest = models.ModifyPrivateZoneVpcRequest;
const DescribeAuditLogResponse = models.DescribeAuditLogResponse;
const DescribePrivateDNSAccountListResponse = models.DescribePrivateDNSAccountListResponse;
const PrivateDNSAccount = models.PrivateDNSAccount;
const AccountVpcInfoOutput = models.AccountVpcInfoOutput;
const DatePoint = models.DatePoint;
const DescribeAccountVpcListResponse = models.DescribeAccountVpcListResponse;
const AuditLogInfo = models.AuditLogInfo;
const ModifyPrivateZoneRecordResponse = models.ModifyPrivateZoneRecordResponse;
const DescribeAccountVpcListRequest = models.DescribeAccountVpcListRequest;
const DescribeRequestDataResponse = models.DescribeRequestDataResponse;
const TagInfo = models.TagInfo;
const TldQuota = models.TldQuota;
const CreatePrivateZoneRequest = models.CreatePrivateZoneRequest;
const VpcInfo = models.VpcInfo;
const AccountVpcInfo = models.AccountVpcInfo;
const ModifyPrivateZoneResponse = models.ModifyPrivateZoneResponse;
const DescribeRequestDataRequest = models.DescribeRequestDataRequest;
const SubscribePrivateZoneServiceRequest = models.SubscribePrivateZoneServiceRequest;
const ModifyPrivateZoneRequest = models.ModifyPrivateZoneRequest;
const CreatePrivateZoneResponse = models.CreatePrivateZoneResponse;
const DescribeDashboardResponse = models.DescribeDashboardResponse;
const CreatePrivateZoneRecordResponse = models.CreatePrivateZoneRecordResponse;
const DescribePrivateZoneServiceResponse = models.DescribePrivateZoneServiceResponse;
const CreatePrivateDNSAccountResponse = models.CreatePrivateDNSAccountResponse;
const DescribeAuditLogRequest = models.DescribeAuditLogRequest;
const DescribeDashboardRequest = models.DescribeDashboardRequest;
const AuditLog = models.AuditLog;
const SubscribePrivateZoneServiceResponse = models.SubscribePrivateZoneServiceResponse;
const AccountVpcInfoOut = models.AccountVpcInfoOut;
const Filter = models.Filter;
const CreatePrivateDNSAccountRequest = models.CreatePrivateDNSAccountRequest;
const MetricData = models.MetricData;
const DescribePrivateZoneServiceRequest = models.DescribePrivateZoneServiceRequest;
const CreatePrivateZoneRecordRequest = models.CreatePrivateZoneRecordRequest;
const DescribeQuotaUsageRequest = models.DescribeQuotaUsageRequest;
const ModifyPrivateZoneRecordRequest = models.ModifyPrivateZoneRecordRequest;
const FlowUsage = models.FlowUsage;
const DescribePrivateDNSAccountListRequest = models.DescribePrivateDNSAccountListRequest;
const ModifyPrivateZoneVpcResponse = models.ModifyPrivateZoneVpcResponse;


/**
 * privatedns client
 * @class
 */
class PrivatednsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("privatedns.tencentcloudapi.com", "2020-10-28", credential, region, profile);
    }
    
    /**
     * This API is used to create a Private DNS account.
     * @param {CreatePrivateDNSAccountRequest} req
     * @param {function(string, CreatePrivateDNSAccountResponse):void} cb
     * @public
     */
    CreatePrivateDNSAccount(req, cb) {
        let resp = new CreatePrivateDNSAccountResponse();
        this.request("CreatePrivateDNSAccount", req, resp, cb);
    }

    /**
     * This API is used to get the VPC list of a Private DNS account.
     * @param {DescribeAccountVpcListRequest} req
     * @param {function(string, DescribeAccountVpcListResponse):void} cb
     * @public
     */
    DescribeAccountVpcList(req, cb) {
        let resp = new DescribeAccountVpcListResponse();
        this.request("DescribeAccountVpcList", req, resp, cb);
    }

    /**
     * This API is used to modify a private domain.
     * @param {ModifyPrivateZoneRequest} req
     * @param {function(string, ModifyPrivateZoneResponse):void} cb
     * @public
     */
    ModifyPrivateZone(req, cb) {
        let resp = new ModifyPrivateZoneResponse();
        this.request("ModifyPrivateZone", req, resp, cb);
    }

    /**
     * This API is used to query the Private DNS activation status.
     * @param {DescribePrivateZoneServiceRequest} req
     * @param {function(string, DescribePrivateZoneServiceResponse):void} cb
     * @public
     */
    DescribePrivateZoneService(req, cb) {
        let resp = new DescribePrivateZoneServiceResponse();
        this.request("DescribePrivateZoneService", req, resp, cb);
    }

    /**
     * This API is used to query quota usage.
     * @param {DescribeQuotaUsageRequest} req
     * @param {function(string, DescribeQuotaUsageResponse):void} cb
     * @public
     */
    DescribeQuotaUsage(req, cb) {
        let resp = new DescribeQuotaUsageResponse();
        this.request("DescribeQuotaUsage", req, resp, cb);
    }

    /**
     * This API is used to get the list of operation logs.
     * @param {DescribeAuditLogRequest} req
     * @param {function(string, DescribeAuditLogResponse):void} cb
     * @public
     */
    DescribeAuditLog(req, cb) {
        let resp = new DescribeAuditLogResponse();
        this.request("DescribeAuditLog", req, resp, cb);
    }

    /**
     * This API is used to add a DNS record for a private domain.
     * @param {CreatePrivateZoneRecordRequest} req
     * @param {function(string, CreatePrivateZoneRecordResponse):void} cb
     * @public
     */
    CreatePrivateZoneRecord(req, cb) {
        let resp = new CreatePrivateZoneRecordResponse();
        this.request("CreatePrivateZoneRecord", req, resp, cb);
    }

    /**
     * This API is used to create a private domain.
     * @param {CreatePrivateZoneRequest} req
     * @param {function(string, CreatePrivateZoneResponse):void} cb
     * @public
     */
    CreatePrivateZone(req, cb) {
        let resp = new CreatePrivateZoneResponse();
        this.request("CreatePrivateZone", req, resp, cb);
    }

    /**
     * This API is used to modify a DNS record for a private domain.
     * @param {ModifyPrivateZoneRecordRequest} req
     * @param {function(string, ModifyPrivateZoneRecordResponse):void} cb
     * @public
     */
    ModifyPrivateZoneRecord(req, cb) {
        let resp = new ModifyPrivateZoneRecordResponse();
        this.request("ModifyPrivateZoneRecord", req, resp, cb);
    }

    /**
     * This API is used to activate the Private DNS service.
     * @param {SubscribePrivateZoneServiceRequest} req
     * @param {function(string, SubscribePrivateZoneServiceResponse):void} cb
     * @public
     */
    SubscribePrivateZoneService(req, cb) {
        let resp = new SubscribePrivateZoneServiceResponse();
        this.request("SubscribePrivateZoneService", req, resp, cb);
    }

    /**
     * This API is used to get the overview of private DNS records.
     * @param {DescribeDashboardRequest} req
     * @param {function(string, DescribeDashboardResponse):void} cb
     * @public
     */
    DescribeDashboard(req, cb) {
        let resp = new DescribeDashboardResponse();
        this.request("DescribeDashboard", req, resp, cb);
    }

    /**
     * This API is used to modify the VPC associated with a private domain.
     * @param {ModifyPrivateZoneVpcRequest} req
     * @param {function(string, ModifyPrivateZoneVpcResponse):void} cb
     * @public
     */
    ModifyPrivateZoneVpc(req, cb) {
        let resp = new ModifyPrivateZoneVpcResponse();
        this.request("ModifyPrivateZoneVpc", req, resp, cb);
    }

    /**
     * This API is used to get the DNS request volume of a private domain.
     * @param {DescribeRequestDataRequest} req
     * @param {function(string, DescribeRequestDataResponse):void} cb
     * @public
     */
    DescribeRequestData(req, cb) {
        let resp = new DescribeRequestDataResponse();
        this.request("DescribeRequestData", req, resp, cb);
    }

    /**
     * This API is used to get the list of Private DNS accounts.
     * @param {DescribePrivateDNSAccountListRequest} req
     * @param {function(string, DescribePrivateDNSAccountListResponse):void} cb
     * @public
     */
    DescribePrivateDNSAccountList(req, cb) {
        let resp = new DescribePrivateDNSAccountListResponse();
        this.request("DescribePrivateDNSAccountList", req, resp, cb);
    }


}
module.exports = PrivatednsClient;
