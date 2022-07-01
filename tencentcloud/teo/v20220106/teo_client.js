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
const Compression = models.Compression;
const HostCertSetting = models.HostCertSetting;
const ModifyDefaultCertificateRequest = models.ModifyDefaultCertificateRequest;
const DescribeZoneDetailsResponse = models.DescribeZoneDetailsResponse;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const Https = models.Https;
const ScanDnsRecordsResponse = models.ScanDnsRecordsResponse;
const ZoneFilter = models.ZoneFilter;
const ModifyLoadBalancingStatusResponse = models.ModifyLoadBalancingStatusResponse;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const ModifyDnsRecordRequest = models.ModifyDnsRecordRequest;
const CreateApplicationProxyRulesRequest = models.CreateApplicationProxyRulesRequest;
const LoadBalancing = models.LoadBalancing;
const ModifyDnssecRequest = models.ModifyDnssecRequest;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const DescribeApplicationProxyDetailRequest = models.DescribeApplicationProxyDetailRequest;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const ImportDnsRecordsRequest = models.ImportDnsRecordsRequest;
const CacheConfigNoCache = models.CacheConfigNoCache;
const Origin = models.Origin;
const Task = models.Task;
const CertSort = models.CertSort;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const ModifyZoneResponse = models.ModifyZoneResponse;
const ModifyZoneRequest = models.ModifyZoneRequest;
const DeleteZoneResponse = models.DeleteZoneResponse;
const ReclaimZoneResponse = models.ReclaimZoneResponse;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const DescribeIdentificationRequest = models.DescribeIdentificationRequest;
const CreateDnsRecordRequest = models.CreateDnsRecordRequest;
const L7OfflineLog = models.L7OfflineLog;
const ApplicationProxyRule = models.ApplicationProxyRule;
const SmartRouting = models.SmartRouting;
const DescribeDnsDataResponse = models.DescribeDnsDataResponse;
const Zone = models.Zone;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const CacheConfigCache = models.CacheConfigCache;
const CertFilter = models.CertFilter;
const ModifyLoadBalancingStatusRequest = models.ModifyLoadBalancingStatusRequest;
const Quic = models.Quic;
const DescribeCnameStatusResponse = models.DescribeCnameStatusResponse;
const DescribeLoadBalancingRequest = models.DescribeLoadBalancingRequest;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const CnameStatus = models.CnameStatus;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const CreateDnsRecordResponse = models.CreateDnsRecordResponse;
const ServerCertInfo = models.ServerCertInfo;
const DescribeZonesRequest = models.DescribeZonesRequest;
const OriginRecord = models.OriginRecord;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const CacheConfigFollowOrigin = models.CacheConfigFollowOrigin;
const VanityNameServers = models.VanityNameServers;
const DescribeApplicationProxyResponse = models.DescribeApplicationProxyResponse;
const CreateLoadBalancingResponse = models.CreateLoadBalancingResponse;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const WebSocket = models.WebSocket;
const DataItem = models.DataItem;
const ModifyLoadBalancingRequest = models.ModifyLoadBalancingRequest;
const CreateLoadBalancingRequest = models.CreateLoadBalancingRequest;
const DescribeDnssecRequest = models.DescribeDnssecRequest;
const DescribeLoadBalancingDetailResponse = models.DescribeLoadBalancingDetailResponse;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const DnsRecord = models.DnsRecord;
const DescribeApplicationProxyDetailResponse = models.DescribeApplicationProxyDetailResponse;
const DescribeDnsRecordsRequest = models.DescribeDnsRecordsRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const FailReason = models.FailReason;
const CreateZoneRequest = models.CreateZoneRequest;
const OriginRecordPrivateParameter = models.OriginRecordPrivateParameter;
const CheckCertificateResponse = models.CheckCertificateResponse;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const DeleteLoadBalancingResponse = models.DeleteLoadBalancingResponse;
const CheckCertificateRequest = models.CheckCertificateRequest;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const ForceRedirect = models.ForceRedirect;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const DetailHost = models.DetailHost;
const DescribeDnsRecordsResponse = models.DescribeDnsRecordsResponse;
const CachePrefresh = models.CachePrefresh;
const ModifyZoneCnameSpeedUpRequest = models.ModifyZoneCnameSpeedUpRequest;
const DescribeHostsCertificateRequest = models.DescribeHostsCertificateRequest;
const Hsts = models.Hsts;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const ModifyLoadBalancingResponse = models.ModifyLoadBalancingResponse;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const ModifyDnsRecordResponse = models.ModifyDnsRecordResponse;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const PostMaxSize = models.PostMaxSize;
const OriginCheckOriginStatus = models.OriginCheckOriginStatus;
const DescribeCnameStatusRequest = models.DescribeCnameStatusRequest;
const DescribeDnssecResponse = models.DescribeDnssecResponse;
const CreateZoneResponse = models.CreateZoneResponse;
const DnsDataFilter = models.DnsDataFilter;
const DeleteLoadBalancingRequest = models.DeleteLoadBalancingRequest;
const ApplicationProxy = models.ApplicationProxy;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const CacheKey = models.CacheKey;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const Header = models.Header;
const DescribeZoneDetailsRequest = models.DescribeZoneDetailsRequest;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const DescribeApplicationProxyRequest = models.DescribeApplicationProxyRequest;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const QueryString = models.QueryString;
const ReclaimZoneRequest = models.ReclaimZoneRequest;
const DeleteZoneRequest = models.DeleteZoneRequest;
const ModifyDefaultCertificateResponse = models.ModifyDefaultCertificateResponse;
const ClientIp = models.ClientIp;
const DescribeHostsCertificateResponse = models.DescribeHostsCertificateResponse;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const CacheConfig = models.CacheConfig;
const ModifyZoneCnameSpeedUpResponse = models.ModifyZoneCnameSpeedUpResponse;
const MaxAge = models.MaxAge;
const DeleteDnsRecordsRequest = models.DeleteDnsRecordsRequest;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const DescribeDnsDataRequest = models.DescribeDnsDataRequest;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const DeleteDnsRecordsResponse = models.DeleteDnsRecordsResponse;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const CreateApplicationProxyRulesResponse = models.CreateApplicationProxyRulesResponse;
const DescribeIdentificationResponse = models.DescribeIdentificationResponse;
const OriginGroup = models.OriginGroup;
const DescribeLoadBalancingResponse = models.DescribeLoadBalancingResponse;
const ModifyDnssecResponse = models.ModifyDnssecResponse;
const ScanDnsRecordsRequest = models.ScanDnsRecordsRequest;
const ImportDnsRecordsResponse = models.ImportDnsRecordsResponse;
const DescribeLoadBalancingDetailRequest = models.DescribeLoadBalancingDetailRequest;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const DnssecInfo = models.DnssecInfo;
const DnsRecordFilter = models.DnsRecordFilter;
const UpstreamHttp2 = models.UpstreamHttp2;
const OfflineCache = models.OfflineCache;
const VanityNameServersIps = models.VanityNameServersIps;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.tencentcloudapi.com", "2022-01-06", credential, region, profile);
    }
    
    /**
     * This API is used to create a DNS record.
     * @param {CreateDnsRecordRequest} req
     * @param {function(string, CreateDnsRecordResponse):void} cb
     * @public
     */
    CreateDnsRecord(req, cb) {
        let resp = new CreateDnsRecordResponse();
        this.request("CreateDnsRecord", req, resp, cb);
    }

    /**
     * This API is used to query verification results.
     * @param {DescribeIdentificationRequest} req
     * @param {function(string, DescribeIdentificationResponse):void} cb
     * @public
     */
    DescribeIdentification(req, cb) {
        let resp = new DescribeIdentificationResponse();
        this.request("DescribeIdentification", req, resp, cb);
    }

    /**
     * This API is used to modify an application proxy rule.
     * @param {ModifyApplicationProxyRuleRequest} req
     * @param {function(string, ModifyApplicationProxyRuleResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRule(req, cb) {
        let resp = new ModifyApplicationProxyRuleResponse();
        this.request("ModifyApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to delete an application proxy.
     * @param {DeleteApplicationProxyRequest} req
     * @param {function(string, DeleteApplicationProxyResponse):void} cb
     * @public
     */
    DeleteApplicationProxy(req, cb) {
        let resp = new DeleteApplicationProxyResponse();
        this.request("DeleteApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to batch create application proxy rules.
     * @param {CreateApplicationProxyRulesRequest} req
     * @param {function(string, CreateApplicationProxyRulesResponse):void} cb
     * @public
     */
    CreateApplicationProxyRules(req, cb) {
        let resp = new CreateApplicationProxyRulesResponse();
        this.request("CreateApplicationProxyRules", req, resp, cb);
    }

    /**
     * This API is used to create a cache purging task.
     * @param {CreatePurgeTaskRequest} req
     * @param {function(string, CreatePurgeTaskResponse):void} cb
     * @public
     */
    CreatePurgeTask(req, cb) {
        let resp = new CreatePurgeTaskResponse();
        this.request("CreatePurgeTask", req, resp, cb);
    }

    /**
     * This API is used to query the cache purging history.
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * This API is used to modify the certificate of a domain name.
     * @param {ModifyHostsCertificateRequest} req
     * @param {function(string, ModifyHostsCertificateResponse):void} cb
     * @public
     */
    ModifyHostsCertificate(req, cb) {
        let resp = new ModifyHostsCertificateResponse();
        this.request("ModifyHostsCertificate", req, resp, cb);
    }

    /**
     * This API is used to query the pre-warming task status.
     * @param {DescribePrefetchTasksRequest} req
     * @param {function(string, DescribePrefetchTasksResponse):void} cb
     * @public
     */
    DescribePrefetchTasks(req, cb) {
        let resp = new DescribePrefetchTasksResponse();
        this.request("DescribePrefetchTasks", req, resp, cb);
    }

    /**
     * This API is used to modify the CNAME acceleration status.
     * @param {ModifyZoneCnameSpeedUpRequest} req
     * @param {function(string, ModifyZoneCnameSpeedUpResponse):void} cb
     * @public
     */
    ModifyZoneCnameSpeedUp(req, cb) {
        let resp = new ModifyZoneCnameSpeedUpResponse();
        this.request("ModifyZoneCnameSpeedUp", req, resp, cb);
    }

    /**
     * This API is used to modify DNS records.
     * @param {ModifyDnsRecordRequest} req
     * @param {function(string, ModifyDnsRecordResponse):void} cb
     * @public
     */
    ModifyDnsRecord(req, cb) {
        let resp = new ModifyDnsRecordResponse();
        this.request("ModifyDnsRecord", req, resp, cb);
    }

    /**
     * This API is used to modify an application proxy.
     * @param {ModifyApplicationProxyRequest} req
     * @param {function(string, ModifyApplicationProxyResponse):void} cb
     * @public
     */
    ModifyApplicationProxy(req, cb) {
        let resp = new ModifyApplicationProxyResponse();
        this.request("ModifyApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to access a new site.
     * @param {CreateZoneRequest} req
     * @param {function(string, CreateZoneResponse):void} cb
     * @public
     */
    CreateZone(req, cb) {
        let resp = new CreateZoneResponse();
        this.request("CreateZone", req, resp, cb);
    }

    /**
     * This API is used to query detailed domain name configuration.
     * @param {DescribeHostsSettingRequest} req
     * @param {function(string, DescribeHostsSettingResponse):void} cb
     * @public
     */
    DescribeHostsSetting(req, cb) {
        let resp = new DescribeHostsSettingResponse();
        this.request("DescribeHostsSetting", req, resp, cb);
    }

    /**
     * This API is used to modify a CLB instance.
     * @param {ModifyLoadBalancingRequest} req
     * @param {function(string, ModifyLoadBalancingResponse):void} cb
     * @public
     */
    ModifyLoadBalancing(req, cb) {
        let resp = new ModifyLoadBalancingResponse();
        this.request("ModifyLoadBalancing", req, resp, cb);
    }

    /**
     * This API is used to create a CLB instance.
     * @param {CreateLoadBalancingRequest} req
     * @param {function(string, CreateLoadBalancingResponse):void} cb
     * @public
     */
    CreateLoadBalancing(req, cb) {
        let resp = new CreateLoadBalancingResponse();
        this.request("CreateLoadBalancing", req, resp, cb);
    }

    /**
     * This API is used to verify ownership of the site.
     * @param {IdentifyZoneRequest} req
     * @param {function(string, IdentifyZoneResponse):void} cb
     * @public
     */
    IdentifyZone(req, cb) {
        let resp = new IdentifyZoneResponse();
        this.request("IdentifyZone", req, resp, cb);
    }

    /**
     * This API is used to query a list of default certificates.
     * @param {DescribeDefaultCertificatesRequest} req
     * @param {function(string, DescribeDefaultCertificatesResponse):void} cb
     * @public
     */
    DescribeDefaultCertificates(req, cb) {
        let resp = new DescribeDefaultCertificatesResponse();
        this.request("DescribeDefaultCertificates", req, resp, cb);
    }

    /**
     * This API is used to obtain collected DNS requests.
     * @param {DescribeDnsDataRequest} req
     * @param {function(string, DescribeDnsDataResponse):void} cb
     * @public
     */
    DescribeDnsData(req, cb) {
        let resp = new DescribeDnsDataResponse();
        this.request("DescribeDnsData", req, resp, cb);
    }

    /**
     * This API is used to query the site configuration.
     * @param {DescribeZoneSettingRequest} req
     * @param {function(string, DescribeZoneSettingResponse):void} cb
     * @public
     */
    DescribeZoneSetting(req, cb) {
        let resp = new DescribeZoneSettingResponse();
        this.request("DescribeZoneSetting", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of CLB instances.
     * @param {DescribeLoadBalancingRequest} req
     * @param {function(string, DescribeLoadBalancingResponse):void} cb
     * @public
     */
    DescribeLoadBalancing(req, cb) {
        let resp = new DescribeLoadBalancingResponse();
        this.request("DescribeLoadBalancing", req, resp, cb);
    }

    /**
     * This API is used to query certificates of domain names. Paging, sorting and filtering are supported.
     * @param {DescribeHostsCertificateRequest} req
     * @param {function(string, DescribeHostsCertificateResponse):void} cb
     * @public
     */
    DescribeHostsCertificate(req, cb) {
        let resp = new DescribeHostsCertificateResponse();
        this.request("DescribeHostsCertificate", req, resp, cb);
    }

    /**
     * This API is used to create an application proxy rule.
     * @param {CreateApplicationProxyRuleRequest} req
     * @param {function(string, CreateApplicationProxyRuleResponse):void} cb
     * @public
     */
    CreateApplicationProxyRule(req, cb) {
        let resp = new CreateApplicationProxyRuleResponse();
        this.request("CreateApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to obtain the details of an application proxy.
     * @param {DescribeApplicationProxyDetailRequest} req
     * @param {function(string, DescribeApplicationProxyDetailResponse):void} cb
     * @public
     */
    DescribeApplicationProxyDetail(req, cb) {
        let resp = new DescribeApplicationProxyDetailResponse();
        this.request("DescribeApplicationProxyDetail", req, resp, cb);
    }

    /**
     * This API is used to delete a CLB instance.
     * @param {DeleteLoadBalancingRequest} req
     * @param {function(string, DeleteLoadBalancingResponse):void} cb
     * @public
     */
    DeleteLoadBalancing(req, cb) {
        let resp = new DeleteLoadBalancingResponse();
        this.request("DeleteLoadBalancing", req, resp, cb);
    }

    /**
     * This API is used to reclaim a site from other users after its ownership is verified.
     * @param {ReclaimZoneRequest} req
     * @param {function(string, ReclaimZoneResponse):void} cb
     * @public
     */
    ReclaimZone(req, cb) {
        let resp = new ReclaimZoneResponse();
        this.request("ReclaimZone", req, resp, cb);
    }

    /**
     * This API is used to delete a site.
     * @param {DeleteZoneRequest} req
     * @param {function(string, DeleteZoneResponse):void} cb
     * @public
     */
    DeleteZone(req, cb) {
        let resp = new DeleteZoneResponse();
        this.request("DeleteZone", req, resp, cb);
    }

    /**
     * This API is used to change the site status.
     * @param {ModifyZoneStatusRequest} req
     * @param {function(string, ModifyZoneStatusResponse):void} cb
     * @public
     */
    ModifyZoneStatus(req, cb) {
        let resp = new ModifyZoneStatusResponse();
        this.request("ModifyZoneStatus", req, resp, cb);
    }

    /**
     * This API is used to query layer-7 logs.
     * @param {DownloadL7LogsRequest} req
     * @param {function(string, DownloadL7LogsResponse):void} cb
     * @public
     */
    DownloadL7Logs(req, cb) {
        let resp = new DownloadL7LogsResponse();
        this.request("DownloadL7Logs", req, resp, cb);
    }

    /**
     * This API is used to modify the status of a CLB instance.
     * @param {ModifyLoadBalancingStatusRequest} req
     * @param {function(string, ModifyLoadBalancingStatusResponse):void} cb
     * @public
     */
    ModifyLoadBalancingStatus(req, cb) {
        let resp = new ModifyLoadBalancingStatusResponse();
        this.request("ModifyLoadBalancingStatus", req, resp, cb);
    }

    /**
     * This API is used to delete an application proxy rule.
     * @param {DeleteApplicationProxyRuleRequest} req
     * @param {function(string, DeleteApplicationProxyRuleResponse):void} cb
     * @public
     */
    DeleteApplicationProxyRule(req, cb) {
        let resp = new DeleteApplicationProxyRuleResponse();
        this.request("DeleteApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to query DNS records. Paging, sorting and filtering are supported.
     * @param {DescribeDnsRecordsRequest} req
     * @param {function(string, DescribeDnsRecordsResponse):void} cb
     * @public
     */
    DescribeDnsRecords(req, cb) {
        let resp = new DescribeDnsRecordsResponse();
        this.request("DescribeDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to scan resolution records.
     * @param {ScanDnsRecordsRequest} req
     * @param {function(string, ScanDnsRecordsResponse):void} cb
     * @public
     */
    ScanDnsRecords(req, cb) {
        let resp = new ScanDnsRecordsResponse();
        this.request("ScanDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of application proxies.
     * @param {DescribeApplicationProxyRequest} req
     * @param {function(string, DescribeApplicationProxyResponse):void} cb
     * @public
     */
    DescribeApplicationProxy(req, cb) {
        let resp = new DescribeApplicationProxyResponse();
        this.request("DescribeApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to batch delete DNS records.
     * @param {DeleteDnsRecordsRequest} req
     * @param {function(string, DeleteDnsRecordsResponse):void} cb
     * @public
     */
    DeleteDnsRecords(req, cb) {
        let resp = new DeleteDnsRecordsResponse();
        this.request("DeleteDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to modify the site information.
     * @param {ModifyZoneRequest} req
     * @param {function(string, ModifyZoneResponse):void} cb
     * @public
     */
    ModifyZone(req, cb) {
        let resp = new ModifyZoneResponse();
        this.request("ModifyZone", req, resp, cb);
    }

    /**
     * This API is used to create a pre-warming task.
     * @param {CreatePrefetchTaskRequest} req
     * @param {function(string, CreatePrefetchTaskResponse):void} cb
     * @public
     */
    CreatePrefetchTask(req, cb) {
        let resp = new CreatePrefetchTaskResponse();
        this.request("CreatePrefetchTask", req, resp, cb);
    }

    /**
     * This API is used to modify the status of a default certificate.
     * @param {ModifyDefaultCertificateRequest} req
     * @param {function(string, ModifyDefaultCertificateResponse):void} cb
     * @public
     */
    ModifyDefaultCertificate(req, cb) {
        let resp = new ModifyDefaultCertificateResponse();
        this.request("ModifyDefaultCertificate", req, resp, cb);
    }

    /**
     * This API is used to import DNS records.
     * @param {ImportDnsRecordsRequest} req
     * @param {function(string, ImportDnsRecordsResponse):void} cb
     * @public
     */
    ImportDnsRecords(req, cb) {
        let resp = new ImportDnsRecordsResponse();
        this.request("ImportDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to query the details of a CLB instance.
     * @param {DescribeLoadBalancingDetailRequest} req
     * @param {function(string, DescribeLoadBalancingDetailResponse):void} cb
     * @public
     */
    DescribeLoadBalancingDetail(req, cb) {
        let resp = new DescribeLoadBalancingDetailResponse();
        this.request("DescribeLoadBalancingDetail", req, resp, cb);
    }

    /**
     * This API is used to verify a certificate.
     * @param {CheckCertificateRequest} req
     * @param {function(string, CheckCertificateResponse):void} cb
     * @public
     */
    CheckCertificate(req, cb) {
        let resp = new CheckCertificateResponse();
        this.request("CheckCertificate", req, resp, cb);
    }

    /**
     * This API is used to query the CNAME status of a domain name.
     * @param {DescribeCnameStatusRequest} req
     * @param {function(string, DescribeCnameStatusResponse):void} cb
     * @public
     */
    DescribeCnameStatus(req, cb) {
        let resp = new DescribeCnameStatusResponse();
        this.request("DescribeCnameStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of user sites.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to query DNSSEC information.
     * @param {DescribeDnssecRequest} req
     * @param {function(string, DescribeDnssecResponse):void} cb
     * @public
     */
    DescribeDnssec(req, cb) {
        let resp = new DescribeDnssecResponse();
        this.request("DescribeDnssec", req, resp, cb);
    }

    /**
     * This API is used to query the details of a site by site ID.
     * @param {DescribeZoneDetailsRequest} req
     * @param {function(string, DescribeZoneDetailsResponse):void} cb
     * @public
     */
    DescribeZoneDetails(req, cb) {
        let resp = new DescribeZoneDetailsResponse();
        this.request("DescribeZoneDetails", req, resp, cb);
    }

    /**
     * This API is used to create an application proxy.
     * @param {CreateApplicationProxyRequest} req
     * @param {function(string, CreateApplicationProxyResponse):void} cb
     * @public
     */
    CreateApplicationProxy(req, cb) {
        let resp = new CreateApplicationProxyResponse();
        this.request("CreateApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to modify the site configuration.
     * @param {ModifyZoneSettingRequest} req
     * @param {function(string, ModifyZoneSettingResponse):void} cb
     * @public
     */
    ModifyZoneSetting(req, cb) {
        let resp = new ModifyZoneSettingResponse();
        this.request("ModifyZoneSetting", req, resp, cb);
    }

    /**
     * This API is used to modify the status of an application proxy.
     * @param {ModifyApplicationProxyStatusRequest} req
     * @param {function(string, ModifyApplicationProxyStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyStatus(req, cb) {
        let resp = new ModifyApplicationProxyStatusResponse();
        this.request("ModifyApplicationProxyStatus", req, resp, cb);
    }

    /**
     * This API is used to modify the status of an application proxy rule.
     * @param {ModifyApplicationProxyRuleStatusRequest} req
     * @param {function(string, ModifyApplicationProxyRuleStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRuleStatus(req, cb) {
        let resp = new ModifyApplicationProxyRuleStatusResponse();
        this.request("ModifyApplicationProxyRuleStatus", req, resp, cb);
    }

    /**
     * This API is used to modify the DNSSEC status.
     * @param {ModifyDnssecRequest} req
     * @param {function(string, ModifyDnssecResponse):void} cb
     * @public
     */
    ModifyDnssec(req, cb) {
        let resp = new ModifyDnssecResponse();
        this.request("ModifyDnssec", req, resp, cb);
    }


}
module.exports = TeoClient;
