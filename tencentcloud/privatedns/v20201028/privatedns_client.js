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
const DescribeExtendEndpointListRequest = models.DescribeExtendEndpointListRequest;
const DescribeQuotaUsageResponse = models.DescribeQuotaUsageResponse;
const ModifyPrivateZoneVpcRequest = models.ModifyPrivateZoneVpcRequest;
const CreateEndPointAndEndPointServiceResponse = models.CreateEndPointAndEndPointServiceResponse;
const ForwardIp = models.ForwardIp;
const DescribePrivateDNSAccountListResponse = models.DescribePrivateDNSAccountListResponse;
const CreateForwardRuleRequest = models.CreateForwardRuleRequest;
const PrivateDNSAccount = models.PrivateDNSAccount;
const DescribeForwardRuleListRequest = models.DescribeForwardRuleListRequest;
const DescribeEndPointListRequest = models.DescribeEndPointListRequest;
const DescribePrivateZoneRecordListResponse = models.DescribePrivateZoneRecordListResponse;
const DescribePrivateZoneListResponse = models.DescribePrivateZoneListResponse;
const AccountVpcInfoOutput = models.AccountVpcInfoOutput;
const DescribeEndPointRegionRequest = models.DescribeEndPointRegionRequest;
const DescribeAuditLogResponse = models.DescribeAuditLogResponse;
const ModifyRecordsStatusResponse = models.ModifyRecordsStatusResponse;
const CreateExtendEndpointRequest = models.CreateExtendEndpointRequest;
const DatePoint = models.DatePoint;
const DescribeAccountVpcListResponse = models.DescribeAccountVpcListResponse;
const DescribeEndPointRegionResponse = models.DescribeEndPointRegionResponse;
const DeleteEndPointResponse = models.DeleteEndPointResponse;
const Filter = models.Filter;
const PrivateZoneRecord = models.PrivateZoneRecord;
const DescribePrivateDNSAccountListRequest = models.DescribePrivateDNSAccountListRequest;
const DeleteEndPointRequest = models.DeleteEndPointRequest;
const AuditLogInfo = models.AuditLogInfo;
const OutboundEndpoint = models.OutboundEndpoint;
const DescribeRequestDataRequest = models.DescribeRequestDataRequest;
const ModifyPrivateZoneRecordResponse = models.ModifyPrivateZoneRecordResponse;
const DescribeAccountVpcListRequest = models.DescribeAccountVpcListRequest;
const CreateExtendEndpointResponse = models.CreateExtendEndpointResponse;
const DescribeRequestDataResponse = models.DescribeRequestDataResponse;
const DescribeEndPointListResponse = models.DescribeEndPointListResponse;
const RegionInfo = models.RegionInfo;
const TagInfo = models.TagInfo;
const TldQuota = models.TldQuota;
const SubscribePrivateZoneServiceResponse = models.SubscribePrivateZoneServiceResponse;
const CreatePrivateZoneRequest = models.CreatePrivateZoneRequest;
const DeleteForwardRuleRequest = models.DeleteForwardRuleRequest;
const AccountVpcInfo = models.AccountVpcInfo;
const ModifyPrivateZoneResponse = models.ModifyPrivateZoneResponse;
const DescribeForwardRuleResponse = models.DescribeForwardRuleResponse;
const ModifyPrivateZoneVpcResponse = models.ModifyPrivateZoneVpcResponse;
const ForwardRule = models.ForwardRule;
const DescribePrivateZoneListRequest = models.DescribePrivateZoneListRequest;
const DescribeRecordRequest = models.DescribeRecordRequest;
const DescribeRecordResponse = models.DescribeRecordResponse;
const SubscribePrivateZoneServiceRequest = models.SubscribePrivateZoneServiceRequest;
const ModifyPrivateZoneRequest = models.ModifyPrivateZoneRequest;
const CreatePrivateZoneResponse = models.CreatePrivateZoneResponse;
const EndPointInfo = models.EndPointInfo;
const DescribeDashboardResponse = models.DescribeDashboardResponse;
const CreatePrivateZoneRecordResponse = models.CreatePrivateZoneRecordResponse;
const RecordInfo = models.RecordInfo;
const DescribePrivateZoneServiceResponse = models.DescribePrivateZoneServiceResponse;
const DescribeForwardRuleListResponse = models.DescribeForwardRuleListResponse;
const DescribeExtendEndpointListResponse = models.DescribeExtendEndpointListResponse;
const CreatePrivateDNSAccountResponse = models.CreatePrivateDNSAccountResponse;
const DescribeAuditLogRequest = models.DescribeAuditLogRequest;
const ModifyForwardRuleRequest = models.ModifyForwardRuleRequest;
const DescribeDashboardRequest = models.DescribeDashboardRequest;
const ModifyForwardRuleResponse = models.ModifyForwardRuleResponse;
const CreateEndPointResponse = models.CreateEndPointResponse;
const AuditLog = models.AuditLog;
const DescribePrivateZoneServiceRequest = models.DescribePrivateZoneServiceRequest;
const AccountVpcInfoOut = models.AccountVpcInfoOut;
const DeletePrivateZoneRecordRequest = models.DeletePrivateZoneRecordRequest;
const DescribeForwardRuleRequest = models.DescribeForwardRuleRequest;
const DeleteForwardRuleResponse = models.DeleteForwardRuleResponse;
const CreateEndPointRequest = models.CreateEndPointRequest;
const ModifyRecordsStatusRequest = models.ModifyRecordsStatusRequest;
const CreatePrivateDNSAccountRequest = models.CreatePrivateDNSAccountRequest;
const MetricData = models.MetricData;
const DeletePrivateZoneRecordResponse = models.DeletePrivateZoneRecordResponse;
const PrivateZone = models.PrivateZone;
const CreatePrivateZoneRecordRequest = models.CreatePrivateZoneRecordRequest;
const DescribeQuotaUsageRequest = models.DescribeQuotaUsageRequest;
const CreateEndPointAndEndPointServiceRequest = models.CreateEndPointAndEndPointServiceRequest;
const ModifyPrivateZoneRecordRequest = models.ModifyPrivateZoneRecordRequest;
const VpcInfo = models.VpcInfo;
const EndpointService = models.EndpointService;
const FlowUsage = models.FlowUsage;
const CreateForwardRuleResponse = models.CreateForwardRuleResponse;
const DescribePrivateZoneRecordListRequest = models.DescribePrivateZoneRecordListRequest;


/**
 * privatedns client
 * @class
 */
class PrivatednsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("privatedns.intl.tencentcloudapi.com", "2020-10-28", credential, region, profile);
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
     * This API is used to delete a forwarding rule and stop forwarding.
     * @param {DeleteForwardRuleRequest} req
     * @param {function(string, DeleteForwardRuleResponse):void} cb
     * @public
     */
    DeleteForwardRule(req, cb) {
        let resp = new DeleteForwardRuleResponse();
        this.request("DeleteForwardRule", req, resp, cb);
    }

    /**
     * This API is used to get the list of records for a private domain.
     * @param {DescribePrivateZoneRecordListRequest} req
     * @param {function(string, DescribePrivateZoneRecordListResponse):void} cb
     * @public
     */
    DescribePrivateZoneRecordList(req, cb) {
        let resp = new DescribePrivateZoneRecordListResponse();
        this.request("DescribePrivateZoneRecordList", req, resp, cb);
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
     * This API is used to obtain the endpoint list.
     * @param {DescribeEndPointListRequest} req
     * @param {function(string, DescribeEndPointListResponse):void} cb
     * @public
     */
    DescribeEndPointList(req, cb) {
        let resp = new DescribeEndPointListResponse();
        this.request("DescribeEndPointList", req, resp, cb);
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
     * This API is used to obtain the private domain list.
     * @param {DescribePrivateZoneListRequest} req
     * @param {function(string, DescribePrivateZoneListResponse):void} cb
     * @public
     */
    DescribePrivateZoneList(req, cb) {
        let resp = new DescribePrivateZoneListResponse();
        this.request("DescribePrivateZoneList", req, resp, cb);
    }

    /**
     * This API is used to create an endpoint.
     * @param {CreateEndPointRequest} req
     * @param {function(string, CreateEndPointResponse):void} cb
     * @public
     */
    CreateEndPoint(req, cb) {
        let resp = new CreateEndPointResponse();
        this.request("CreateEndPoint", req, resp, cb);
    }

    /**
     * Deletes an endpoint
     * @param {DeleteEndPointRequest} req
     * @param {function(string, DeleteEndPointResponse):void} cb
     * @public
     */
    DeleteEndPoint(req, cb) {
        let resp = new DeleteEndPointResponse();
        this.request("DeleteEndPoint", req, resp, cb);
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
     * This API is used to create an endpoint.
     * @param {CreateExtendEndpointRequest} req
     * @param {function(string, CreateExtendEndpointResponse):void} cb
     * @public
     */
    CreateExtendEndpoint(req, cb) {
        let resp = new CreateExtendEndpointResponse();
        this.request("CreateExtendEndpoint", req, resp, cb);
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
     * This API is used to modify a forwarding rule.
     * @param {ModifyForwardRuleRequest} req
     * @param {function(string, ModifyForwardRuleResponse):void} cb
     * @public
     */
    ModifyForwardRule(req, cb) {
        let resp = new ModifyForwardRuleResponse();
        this.request("ModifyForwardRule", req, resp, cb);
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
     * This API is used to obtain the private domain records.
     * @param {DescribeRecordRequest} req
     * @param {function(string, DescribeRecordResponse):void} cb
     * @public
     */
    DescribeRecord(req, cb) {
        let resp = new DescribeRecordResponse();
        this.request("DescribeRecord", req, resp, cb);
    }

    /**
     * This API is used to create an endpoint and an endpoint service simultaneously.
     * @param {CreateEndPointAndEndPointServiceRequest} req
     * @param {function(string, CreateEndPointAndEndPointServiceResponse):void} cb
     * @public
     */
    CreateEndPointAndEndPointService(req, cb) {
        let resp = new CreateEndPointAndEndPointServiceResponse();
        this.request("CreateEndPointAndEndPointService", req, resp, cb);
    }

    /**
     * This API is used to modify the DNS record status.
     * @param {ModifyRecordsStatusRequest} req
     * @param {function(string, ModifyRecordsStatusResponse):void} cb
     * @public
     */
    ModifyRecordsStatus(req, cb) {
        let resp = new ModifyRecordsStatusResponse();
        this.request("ModifyRecordsStatus", req, resp, cb);
    }

    /**
     * This API is used to query forwarding rules.
     * @param {DescribeForwardRuleRequest} req
     * @param {function(string, DescribeForwardRuleResponse):void} cb
     * @public
     */
    DescribeForwardRule(req, cb) {
        let resp = new DescribeForwardRuleResponse();
        this.request("DescribeForwardRule", req, resp, cb);
    }

    /**
     * This API is used to create a custom forwarding rule.
     * @param {CreateForwardRuleRequest} req
     * @param {function(string, CreateForwardRuleResponse):void} cb
     * @public
     */
    CreateForwardRule(req, cb) {
        let resp = new CreateForwardRuleResponse();
        this.request("CreateForwardRule", req, resp, cb);
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
     * This API is used to obtain the endpoint list.
     * @param {DescribeExtendEndpointListRequest} req
     * @param {function(string, DescribeExtendEndpointListResponse):void} cb
     * @public
     */
    DescribeExtendEndpointList(req, cb) {
        let resp = new DescribeExtendEndpointListResponse();
        this.request("DescribeExtendEndpointList", req, resp, cb);
    }

    /**
     * This API is used to query the regions where the endpoint is enabled.
     * @param {DescribeEndPointRegionRequest} req
     * @param {function(string, DescribeEndPointRegionResponse):void} cb
     * @public
     */
    DescribeEndPointRegion(req, cb) {
        let resp = new DescribeEndPointRegionResponse();
        this.request("DescribeEndPointRegion", req, resp, cb);
    }

    /**
     * This API is used to query the forwarding rule list.
     * @param {DescribeForwardRuleListRequest} req
     * @param {function(string, DescribeForwardRuleListResponse):void} cb
     * @public
     */
    DescribeForwardRuleList(req, cb) {
        let resp = new DescribeForwardRuleListResponse();
        this.request("DescribeForwardRuleList", req, resp, cb);
    }

    /**
     * This API is used to delete a DNS record for a private domain.
     * @param {DeletePrivateZoneRecordRequest} req
     * @param {function(string, DeletePrivateZoneRecordResponse):void} cb
     * @public
     */
    DeletePrivateZoneRecord(req, cb) {
        let resp = new DeletePrivateZoneRecordResponse();
        this.request("DeletePrivateZoneRecord", req, resp, cb);
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
