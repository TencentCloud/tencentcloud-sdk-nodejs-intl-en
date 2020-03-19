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
const RegionDetail = models.RegionDetail;
const DescribeUDPListenersRequest = models.DescribeUDPListenersRequest;
const DeleteProxyGroupRequest = models.DeleteProxyGroupRequest;
const DescribeResourcesByTagRequest = models.DescribeResourcesByTagRequest;
const DescribeListenerStatisticsRequest = models.DescribeListenerStatisticsRequest;
const DescribeProxyAndStatisticsListenersResponse = models.DescribeProxyAndStatisticsListenersResponse;
const DeleteRuleRequest = models.DeleteRuleRequest;
const BindRuleRealServersRequest = models.BindRuleRealServersRequest;
const DescribeHTTPSListenersResponse = models.DescribeHTTPSListenersResponse;
const ModifyProxiesProjectRequest = models.ModifyProxiesProjectRequest;
const DomainErrorPageInfo = models.DomainErrorPageInfo;
const DescribeCertificateDetailRequest = models.DescribeCertificateDetailRequest;
const TagResourceInfo = models.TagResourceInfo;
const SetAuthenticationResponse = models.SetAuthenticationResponse;
const DescribeProxyGroupStatisticsResponse = models.DescribeProxyGroupStatisticsResponse;
const DescribeResourcesByTagResponse = models.DescribeResourcesByTagResponse;
const ModifyGroupDomainConfigRequest = models.ModifyGroupDomainConfigRequest;
const BandwidthPriceGradient = models.BandwidthPriceGradient;
const DescribeHTTPListenersRequest = models.DescribeHTTPListenersRequest;
const ModifyRealServerNameResponse = models.ModifyRealServerNameResponse;
const DescribeGroupDomainConfigResponse = models.DescribeGroupDomainConfigResponse;
const ModifyCertificateResponse = models.ModifyCertificateResponse;
const OpenSecurityPolicyRequest = models.OpenSecurityPolicyRequest;
const DeleteDomainErrorPageInfoRequest = models.DeleteDomainErrorPageInfoRequest;
const DescribeListenerRealServersRequest = models.DescribeListenerRealServersRequest;
const DescribeProxyGroupStatisticsRequest = models.DescribeProxyGroupStatisticsRequest;
const DescribeHTTPSListenersRequest = models.DescribeHTTPSListenersRequest;
const DescribeAccessRegionsByDestRegionResponse = models.DescribeAccessRegionsByDestRegionResponse;
const DescribeCountryAreaMappingRequest = models.DescribeCountryAreaMappingRequest;
const CheckProxyCreateResponse = models.CheckProxyCreateResponse;
const ModifyCertificateRequest = models.ModifyCertificateRequest;
const DestroyProxiesRequest = models.DestroyProxiesRequest;
const DescribeRulesResponse = models.DescribeRulesResponse;
const DescribeProxiesResponse = models.DescribeProxiesResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const ModifyRealServerNameRequest = models.ModifyRealServerNameRequest;
const DeleteProxyGroupResponse = models.DeleteProxyGroupResponse;
const CreateDomainErrorPageInfoResponse = models.CreateDomainErrorPageInfoResponse;
const BindListenerRealServersRequest = models.BindListenerRealServersRequest;
const ModifyProxyConfigurationRequest = models.ModifyProxyConfigurationRequest;
const DescribeRuleRealServersRequest = models.DescribeRuleRealServersRequest;
const DescribeGroupDomainConfigRequest = models.DescribeGroupDomainConfigRequest;
const CreateProxyGroupDomainRequest = models.CreateProxyGroupDomainRequest;
const CreateTCPListenersRequest = models.CreateTCPListenersRequest;
const CertificateDetail = models.CertificateDetail;
const DescribeListenerStatisticsResponse = models.DescribeListenerStatisticsResponse;
const DescribeProxyGroupDetailsRequest = models.DescribeProxyGroupDetailsRequest;
const CloseProxiesRequest = models.CloseProxiesRequest;
const DescribeListenerRealServersResponse = models.DescribeListenerRealServersResponse;
const DescribeProxyDetailRequest = models.DescribeProxyDetailRequest;
const ModifyTCPListenerAttributeRequest = models.ModifyTCPListenerAttributeRequest;
const DeleteDomainRequest = models.DeleteDomainRequest;
const OpenSecurityPolicyResponse = models.OpenSecurityPolicyResponse;
const ModifyCertificateAttributesResponse = models.ModifyCertificateAttributesResponse;
const DescribeSecurityPolicyDetailResponse = models.DescribeSecurityPolicyDetailResponse;
const CreateHTTPListenerResponse = models.CreateHTTPListenerResponse;
const ModifyUDPListenerAttributeResponse = models.ModifyUDPListenerAttributeResponse;
const CreateProxyGroupRequest = models.CreateProxyGroupRequest;
const RuleInfo = models.RuleInfo;
const RealServerStatus = models.RealServerStatus;
const DescribeTCPListenersResponse = models.DescribeTCPListenersResponse;
const DescribeRulesRequest = models.DescribeRulesRequest;
const DescribeCountryAreaMappingResponse = models.DescribeCountryAreaMappingResponse;
const DescribeRealServersResponse = models.DescribeRealServersResponse;
const ModifyHTTPListenerAttributeResponse = models.ModifyHTTPListenerAttributeResponse;
const DescribeRealServerStatisticsRequest = models.DescribeRealServerStatisticsRequest;
const BindRealServerInfo = models.BindRealServerInfo;
const DescribeProxyAndStatisticsListenersRequest = models.DescribeProxyAndStatisticsListenersRequest;
const DescribeAccessRegionsResponse = models.DescribeAccessRegionsResponse;
const DeleteListenersRequest = models.DeleteListenersRequest;
const DescribeSecurityRulesRequest = models.DescribeSecurityRulesRequest;
const DescribeDestRegionsResponse = models.DescribeDestRegionsResponse;
const DescribeProxiesRequest = models.DescribeProxiesRequest;
const BindListenerRealServersResponse = models.BindListenerRealServersResponse;
const ModifyProxyGroupAttributeResponse = models.ModifyProxyGroupAttributeResponse;
const ListenerInfo = models.ListenerInfo;
const DescribeUDPListenersResponse = models.DescribeUDPListenersResponse;
const CreateUDPListenersRequest = models.CreateUDPListenersRequest;
const ModifyRuleAttributeRequest = models.ModifyRuleAttributeRequest;
const CreateSecurityPolicyResponse = models.CreateSecurityPolicyResponse;
const TCPListener = models.TCPListener;
const CreateSecurityRulesResponse = models.CreateSecurityRulesResponse;
const DescribeAccessRegionsRequest = models.DescribeAccessRegionsRequest;
const CreateCertificateRequest = models.CreateCertificateRequest;
const DescribeCertificatesResponse = models.DescribeCertificatesResponse;
const DescribeProxyGroupListResponse = models.DescribeProxyGroupListResponse;
const DescribeDomainErrorPageInfoRequest = models.DescribeDomainErrorPageInfoRequest;
const HTTPSListener = models.HTTPSListener;
const DomainAccessRegionDict = models.DomainAccessRegionDict;
const CloseSecurityPolicyRequest = models.CloseSecurityPolicyRequest;
const ModifyCertificateAttributesRequest = models.ModifyCertificateAttributesRequest;
const TagPair = models.TagPair;
const CreateSecurityRulesRequest = models.CreateSecurityRulesRequest;
const DescribeCertificatesRequest = models.DescribeCertificatesRequest;
const DescribeProxiesStatusRequest = models.DescribeProxiesStatusRequest;
const ProxyStatus = models.ProxyStatus;
const DeleteSecurityPolicyResponse = models.DeleteSecurityPolicyResponse;
const CreateDomainResponse = models.CreateDomainResponse;
const ModifyProxiesProjectResponse = models.ModifyProxiesProjectResponse;
const ModifyDomainRequest = models.ModifyDomainRequest;
const ModifySecurityRuleRequest = models.ModifySecurityRuleRequest;
const NationCountryInnerInfo = models.NationCountryInnerInfo;
const DescribeAccessRegionsByDestRegionRequest = models.DescribeAccessRegionsByDestRegionRequest;
const RealServer = models.RealServer;
const DescribeRealServersRequest = models.DescribeRealServersRequest;
const StatisticsDataInfo = models.StatisticsDataInfo;
const ProxyGroupInfo = models.ProxyGroupInfo;
const CreateProxyGroupDomainResponse = models.CreateProxyGroupDomainResponse;
const Certificate = models.Certificate;
const DescribeDomainErrorPageInfoResponse = models.DescribeDomainErrorPageInfoResponse;
const DestroyProxiesResponse = models.DestroyProxiesResponse;
const DescribeRuleRealServersResponse = models.DescribeRuleRealServersResponse;
const DescribeRealServersStatusRequest = models.DescribeRealServersStatusRequest;
const ModifyHTTPListenerAttributeRequest = models.ModifyHTTPListenerAttributeRequest;
const CreateProxyRequest = models.CreateProxyRequest;
const DeleteCertificateRequest = models.DeleteCertificateRequest;
const ModifySecurityRuleResponse = models.ModifySecurityRuleResponse;
const DescribeProxiesStatusResponse = models.DescribeProxiesStatusResponse;
const RemoveRealServersRequest = models.RemoveRealServersRequest;
const CreateDomainRequest = models.CreateDomainRequest;
const CreateRuleRequest = models.CreateRuleRequest;
const DeleteSecurityPolicyRequest = models.DeleteSecurityPolicyRequest;
const HTTPListener = models.HTTPListener;
const ProxyGroupDetail = models.ProxyGroupDetail;
const CreateHTTPListenerRequest = models.CreateHTTPListenerRequest;
const CloseSecurityPolicyResponse = models.CloseSecurityPolicyResponse;
const DescribeRegionAndPriceResponse = models.DescribeRegionAndPriceResponse;
const AddRealServersResponse = models.AddRealServersResponse;
const CloseProxiesResponse = models.CloseProxiesResponse;
const DeleteCertificateResponse = models.DeleteCertificateResponse;
const SecurityPolicyRuleIn = models.SecurityPolicyRuleIn;
const ProxySimpleInfo = models.ProxySimpleInfo;
const DescribeDestRegionsRequest = models.DescribeDestRegionsRequest;
const ModifyRuleAttributeResponse = models.ModifyRuleAttributeResponse;
const CreateTCPListenersResponse = models.CreateTCPListenersResponse;
const DescribeSecurityPolicyDetailRequest = models.DescribeSecurityPolicyDetailRequest;
const ModifyDomainResponse = models.ModifyDomainResponse;
const DescribeRulesByRuleIdsResponse = models.DescribeRulesByRuleIdsResponse;
const SetAuthenticationRequest = models.SetAuthenticationRequest;
const InquiryPriceCreateProxyResponse = models.InquiryPriceCreateProxyResponse;
const NewRealServer = models.NewRealServer;
const DescribeHTTPListenersResponse = models.DescribeHTTPListenersResponse;
const HttpHeaderParam = models.HttpHeaderParam;
const DescribeRealServerStatisticsResponse = models.DescribeRealServerStatisticsResponse;
const AccessRegionDomainConf = models.AccessRegionDomainConf;
const DeleteDomainResponse = models.DeleteDomainResponse;
const DeleteListenersResponse = models.DeleteListenersResponse;
const RuleCheckParams = models.RuleCheckParams;
const CreateSecurityPolicyRequest = models.CreateSecurityPolicyRequest;
const ModifyHTTPSListenerAttributeResponse = models.ModifyHTTPSListenerAttributeResponse;
const AccessRegionDetial = models.AccessRegionDetial;
const DescribeProxyGroupListRequest = models.DescribeProxyGroupListRequest;
const SecurityPolicyRuleOut = models.SecurityPolicyRuleOut;
const BindRealServer = models.BindRealServer;
const GroupStatisticsInfo = models.GroupStatisticsInfo;
const CreateProxyGroupResponse = models.CreateProxyGroupResponse;
const CreateHTTPSListenerResponse = models.CreateHTTPSListenerResponse;
const DeleteRuleResponse = models.DeleteRuleResponse;
const BindRuleRealServersResponse = models.BindRuleRealServersResponse;
const DescribeGroupAndStatisticsProxyRequest = models.DescribeGroupAndStatisticsProxyRequest;
const ModifyUDPListenerAttributeRequest = models.ModifyUDPListenerAttributeRequest;
const DeleteSecurityRulesResponse = models.DeleteSecurityRulesResponse;
const ModifyTCPListenerAttributeResponse = models.ModifyTCPListenerAttributeResponse;
const CountryAreaMap = models.CountryAreaMap;
const MetricStatisticsInfo = models.MetricStatisticsInfo;
const DescribeProxyDetailResponse = models.DescribeProxyDetailResponse;
const DescribeGroupAndStatisticsProxyResponse = models.DescribeGroupAndStatisticsProxyResponse;
const CreateUDPListenersResponse = models.CreateUDPListenersResponse;
const ModifyHTTPSListenerAttributeRequest = models.ModifyHTTPSListenerAttributeRequest;
const DescribeProxyStatisticsRequest = models.DescribeProxyStatisticsRequest;
const DomainRuleSet = models.DomainRuleSet;
const DescribeTCPListenersRequest = models.DescribeTCPListenersRequest;
const CreateCertificateResponse = models.CreateCertificateResponse;
const ModifyGroupDomainConfigResponse = models.ModifyGroupDomainConfigResponse;
const DescribeProxyStatisticsResponse = models.DescribeProxyStatisticsResponse;
const DescribeRealServersStatusResponse = models.DescribeRealServersStatusResponse;
const ModifyProxyGroupAttributeRequest = models.ModifyProxyGroupAttributeRequest;
const DescribeCertificateDetailResponse = models.DescribeCertificateDetailResponse;
const DeleteDomainErrorPageInfoResponse = models.DeleteDomainErrorPageInfoResponse;
const ModifyProxiesAttributeResponse = models.ModifyProxiesAttributeResponse;
const CheckProxyCreateRequest = models.CheckProxyCreateRequest;
const DescribeRegionAndPriceRequest = models.DescribeRegionAndPriceRequest;
const AddRealServersRequest = models.AddRealServersRequest;
const ModifyProxiesAttributeRequest = models.ModifyProxiesAttributeRequest;
const DescribeSecurityRulesResponse = models.DescribeSecurityRulesResponse;
const CertificateAliasInfo = models.CertificateAliasInfo;
const CreateHTTPSListenerRequest = models.CreateHTTPSListenerRequest;
const DeleteSecurityRulesRequest = models.DeleteSecurityRulesRequest;
const ProxyIdDict = models.ProxyIdDict;
const Filter = models.Filter;
const CreateProxyResponse = models.CreateProxyResponse;
const OpenProxiesRequest = models.OpenProxiesRequest;
const InquiryPriceCreateProxyRequest = models.InquiryPriceCreateProxyRequest;
const DescribeProxyGroupDetailsResponse = models.DescribeProxyGroupDetailsResponse;
const UDPListener = models.UDPListener;
const ProxyInfo = models.ProxyInfo;
const RemoveRealServersResponse = models.RemoveRealServersResponse;
const DescribeRulesByRuleIdsRequest = models.DescribeRulesByRuleIdsRequest;
const RealServerBindSetReq = models.RealServerBindSetReq;
const OpenProxiesResponse = models.OpenProxiesResponse;
const ModifyProxyConfigurationResponse = models.ModifyProxyConfigurationResponse;
const CreateDomainErrorPageInfoRequest = models.CreateDomainErrorPageInfoRequest;


/**
 * gaap client
 * @class
 */
class GaapClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gaap.tencentcloudapi.com", "2018-05-29", credential, region, profile);
    }
    
    /**
     * This API (DescribeProxyGroupList) is used to pull the list of connection groups and the basic information of each connection group.
     * @param {DescribeProxyGroupListRequest} req
     * @param {function(string, DescribeProxyGroupListResponse):void} cb
     * @public
     */
    DescribeProxyGroupList(req, cb) {
        let resp = new DescribeProxyGroupListResponse();
        this.request("DescribeProxyGroupList", req, resp, cb);
    }

    /**
     * This API is used to enable security policies.
     * @param {OpenSecurityPolicyRequest} req
     * @param {function(string, OpenSecurityPolicyResponse):void} cb
     * @public
     */
    OpenSecurityPolicy(req, cb) {
        let resp = new OpenSecurityPolicyResponse();
        this.request("OpenSecurityPolicy", req, resp, cb);
    }

    /**
     * This API (DescribeCertificates) is used to query the list of available certificates.
     * @param {DescribeCertificatesRequest} req
     * @param {function(string, DescribeCertificatesResponse):void} cb
     * @public
     */
    DescribeCertificates(req, cb) {
        let resp = new DescribeCertificatesResponse();
        this.request("DescribeCertificates", req, resp, cb);
    }

    /**
     * This API is used to add security policy rules.
     * @param {CreateSecurityRulesRequest} req
     * @param {function(string, CreateSecurityRulesResponse):void} cb
     * @public
     */
    CreateSecurityRules(req, cb) {
        let resp = new CreateSecurityRulesResponse();
        this.request("CreateSecurityRules", req, resp, cb);
    }

    /**
     * This API is used to modify security policy rule names.
     * @param {ModifySecurityRuleRequest} req
     * @param {function(string, ModifySecurityRuleResponse):void} cb
     * @public
     */
    ModifySecurityRule(req, cb) {
        let resp = new ModifySecurityRuleResponse();
        this.request("ModifySecurityRule", req, resp, cb);
    }

    /**
     * This API (DescribeHTTPSListeners) is used to query HTTPS listener information.
     * @param {DescribeHTTPSListenersRequest} req
     * @param {function(string, DescribeHTTPSListenersResponse):void} cb
     * @public
     */
    DescribeHTTPSListeners(req, cb) {
        let resp = new DescribeHTTPSListenersResponse();
        this.request("DescribeHTTPSListeners", req, resp, cb);
    }

    /**
     * This API (CreateHTTPListener) is used to create an HTTPS listener in the connection instance.
     * @param {CreateHTTPSListenerRequest} req
     * @param {function(string, CreateHTTPSListenerResponse):void} cb
     * @public
     */
    CreateHTTPSListener(req, cb) {
        let resp = new CreateHTTPSListenerResponse();
        this.request("CreateHTTPSListener", req, resp, cb);
    }

    /**
     * This API is used to delete security policies.
     * @param {DeleteSecurityPolicyRequest} req
     * @param {function(string, DeleteSecurityPolicyResponse):void} cb
     * @public
     */
    DeleteSecurityPolicy(req, cb) {
        let resp = new DeleteSecurityPolicyResponse();
        this.request("DeleteSecurityPolicy", req, resp, cb);
    }

    /**
     * This API (DescribeRealServerStatistics) is used to query the statistics of an origin server’s health check results. Origin server status displayed as 1: normal, or 0: exceptional. The queried origin server must be bound to a listener or rule. The bound listener or rule ID must be specified when querying. This API supports displaying origin server status statistics for the past 1, 3, 6, 12, and 24 hours, with a granularity of 1 minute.
     * @param {DescribeRealServerStatisticsRequest} req
     * @param {function(string, DescribeRealServerStatisticsResponse):void} cb
     * @public
     */
    DescribeRealServerStatistics(req, cb) {
        let resp = new DescribeRealServerStatisticsResponse();
        this.request("DescribeRealServerStatistics", req, resp, cb);
    }

    /**
     * This API (DescribeProxyGroupDetails) is used to query connection group details.
     * @param {DescribeProxyGroupDetailsRequest} req
     * @param {function(string, DescribeProxyGroupDetailsResponse):void} cb
     * @public
     */
    DescribeProxyGroupDetails(req, cb) {
        let resp = new DescribeProxyGroupDetailsResponse();
        this.request("DescribeProxyGroupDetails", req, resp, cb);
    }

    /**
     * This API is used to delete a custom error code for a domain name.
     * @param {DeleteDomainErrorPageInfoRequest} req
     * @param {function(string, DeleteDomainErrorPageInfoResponse):void} cb
     * @public
     */
    DeleteDomainErrorPageInfo(req, cb) {
        let resp = new DeleteDomainErrorPageInfoResponse();
        this.request("DeleteDomainErrorPageInfo", req, resp, cb);
    }

    /**
     * This API (ModifyCertificate) is used to modify a domain name certificate of a listener. domain name certificate. This API is only applicable to connections of version 3.0.
     * @param {ModifyCertificateRequest} req
     * @param {function(string, ModifyCertificateResponse):void} cb
     * @public
     */
    ModifyCertificate(req, cb) {
        let resp = new ModifyCertificateResponse();
        this.request("ModifyCertificate", req, resp, cb);
    }

    /**
     * This API (DescribeTCPListeners) is used to query the TCP listener information of a single connection or connection group.
     * @param {DescribeTCPListenersRequest} req
     * @param {function(string, DescribeTCPListenersResponse):void} cb
     * @public
     */
    DescribeTCPListeners(req, cb) {
        let resp = new DescribeTCPListenersResponse();
        this.request("DescribeTCPListeners", req, resp, cb);
    }

    /**
     * This API (CreateRule) is used to create the forwarding rules of HTTP/HTTPS listeners.
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * This API is used to customize the error code of an error response to the specified domain name.
     * @param {CreateDomainErrorPageInfoRequest} req
     * @param {function(string, CreateDomainErrorPageInfoResponse):void} cb
     * @public
     */
    CreateDomainErrorPageInfo(req, cb) {
        let resp = new CreateDomainErrorPageInfoResponse();
        this.request("CreateDomainErrorPageInfo", req, resp, cb);
    }

    /**
     * This API is used to query listener statistics, including inbound/outbound bandwidth, inbound/outbound packets, and concurrence data. It supports granularities of 300, 3,600, and 86,400. Default value is the highest within the granularity range.
     * @param {DescribeProxyGroupStatisticsRequest} req
     * @param {function(string, DescribeProxyGroupStatisticsResponse):void} cb
     * @public
     */
    DescribeProxyGroupStatistics(req, cb) {
        let resp = new DescribeProxyGroupStatisticsResponse();
        this.request("DescribeProxyGroupStatistics", req, resp, cb);
    }

    /**
     * This API is used to obtain security policy details.
     * @param {DescribeSecurityPolicyDetailRequest} req
     * @param {function(string, DescribeSecurityPolicyDetailResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyDetail(req, cb) {
        let resp = new DescribeSecurityPolicyDetailResponse();
        this.request("DescribeSecurityPolicyDetail", req, resp, cb);
    }

    /**
     * This API (ModifyDomain) is used to modify domain names of listeners. For connections of version 3.0, it supports modifying certificates of the domain names.
     * @param {ModifyDomainRequest} req
     * @param {function(string, ModifyDomainResponse):void} cb
     * @public
     */
    ModifyDomain(req, cb) {
        let resp = new ModifyDomainResponse();
        this.request("ModifyDomain", req, resp, cb);
    }

    /**
     * This API (ModifyCertificateAttributes) is used to modify certificates, including identification name and certificate content.
     * @param {ModifyCertificateAttributesRequest} req
     * @param {function(string, ModifyCertificateAttributesResponse):void} cb
     * @public
     */
    ModifyCertificateAttributes(req, cb) {
        let resp = new ModifyCertificateAttributesResponse();
        this.request("ModifyCertificateAttributes", req, resp, cb);
    }

    /**
     * This API (OpenProxies) is used to enable one or more connections.
     * @param {OpenProxiesRequest} req
     * @param {function(string, OpenProxiesResponse):void} cb
     * @public
     */
    OpenProxies(req, cb) {
        let resp = new OpenProxiesResponse();
        this.request("OpenProxies", req, resp, cb);
    }

    /**
     * This API (DescribeRuleRealServers) is used to query forwarding rules-related origin server information, including information of origin servers that can be bound and have been bound.
     * @param {DescribeRuleRealServersRequest} req
     * @param {function(string, DescribeRuleRealServersResponse):void} cb
     * @public
     */
    DescribeRuleRealServers(req, cb) {
        let resp = new DescribeRuleRealServersResponse();
        this.request("DescribeRuleRealServers", req, resp, cb);
    }

    /**
     * This API (ModifyRealServerName) is used to modify origin server names.
     * @param {ModifyRealServerNameRequest} req
     * @param {function(string, ModifyRealServerNameResponse):void} cb
     * @public
     */
    ModifyRealServerName(req, cb) {
        let resp = new ModifyRealServerNameResponse();
        this.request("ModifyRealServerName", req, resp, cb);
    }

    /**
     * This API (CheckProxyCreate) is used to query whether an acceleration connection with the specified configuration can be created.
     * @param {CheckProxyCreateRequest} req
     * @param {function(string, CheckProxyCreateResponse):void} cb
     * @public
     */
    CheckProxyCreate(req, cb) {
        let resp = new CheckProxyCreateResponse();
        this.request("CheckProxyCreate", req, resp, cb);
    }

    /**
     * This API (DescribeCountryAreaMapping) is used to obtain the country/region code mapping table.
     * @param {DescribeCountryAreaMappingRequest} req
     * @param {function(string, DescribeCountryAreaMappingResponse):void} cb
     * @public
     */
    DescribeCountryAreaMapping(req, cb) {
        let resp = new DescribeCountryAreaMappingResponse();
        this.request("DescribeCountryAreaMapping", req, resp, cb);
    }

    /**
     * This API (DescribeAccessRegions) is used to query acceleration region (client access region).
     * @param {DescribeAccessRegionsRequest} req
     * @param {function(string, DescribeAccessRegionsResponse):void} cb
     * @public
     */
    DescribeAccessRegions(req, cb) {
        let resp = new DescribeAccessRegionsResponse();
        this.request("DescribeAccessRegions", req, resp, cb);
    }

    /**
     * This API is used to delete security policy rules.
     * @param {DeleteSecurityRulesRequest} req
     * @param {function(string, DeleteSecurityRulesResponse):void} cb
     * @public
     */
    DeleteSecurityRules(req, cb) {
        let resp = new DeleteSecurityRulesResponse();
        this.request("DeleteSecurityRules", req, resp, cb);
    }

    /**
     * This API (ModifyHTTPListenerAttribute) is used to modify the HTTP listener configuration information of a connection. Currently only supports modifying listener name.
Note: Grouped connections currently do not support HTTP/HTTPS listeners.
     * @param {ModifyHTTPListenerAttributeRequest} req
     * @param {function(string, ModifyHTTPListenerAttributeResponse):void} cb
     * @public
     */
    ModifyHTTPListenerAttribute(req, cb) {
        let resp = new ModifyHTTPListenerAttributeResponse();
        this.request("ModifyHTTPListenerAttribute", req, resp, cb);
    }

    /**
     * This API (DeleteRule) is used to delete the forwarding rules of HTTP/HTTPS listeners.
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * This API (DescribeProxyDetail) is used to query connection details.
     * @param {DescribeProxyDetailRequest} req
     * @param {function(string, DescribeProxyDetailResponse):void} cb
     * @public
     */
    DescribeProxyDetail(req, cb) {
        let resp = new DescribeProxyDetailResponse();
        this.request("DescribeProxyDetail", req, resp, cb);
    }

    /**
     * This API (DeleteCertificate) is used to delete certificates.
     * @param {DeleteCertificateRequest} req
     * @param {function(string, DeleteCertificateResponse):void} cb
     * @public
     */
    DeleteCertificate(req, cb) {
        let resp = new DeleteCertificateResponse();
        this.request("DeleteCertificate", req, resp, cb);
    }

    /**
     * This API is used to create security policies.
     * @param {CreateSecurityPolicyRequest} req
     * @param {function(string, CreateSecurityPolicyResponse):void} cb
     * @public
     */
    CreateSecurityPolicy(req, cb) {
        let resp = new CreateSecurityPolicyResponse();
        this.request("CreateSecurityPolicy", req, resp, cb);
    }

    /**
     * This API (DescribeProxies) is used to query the connection instance list.
     * @param {DescribeProxiesRequest} req
     * @param {function(string, DescribeProxiesResponse):void} cb
     * @public
     */
    DescribeProxies(req, cb) {
        let resp = new DescribeProxiesResponse();
        this.request("DescribeProxies", req, resp, cb);
    }

    /**
     * This API (DeleteProxyGroup) is used to delete a connection group.
     * @param {DeleteProxyGroupRequest} req
     * @param {function(string, DeleteProxyGroupResponse):void} cb
     * @public
     */
    DeleteProxyGroup(req, cb) {
        let resp = new DeleteProxyGroupResponse();
        this.request("DeleteProxyGroup", req, resp, cb);
    }

    /**
     * This API (ModifyProxiesProject) is used to modify the project to which a connection belongs.
     * @param {ModifyProxiesProjectRequest} req
     * @param {function(string, ModifyProxiesProjectResponse):void} cb
     * @public
     */
    ModifyProxiesProject(req, cb) {
        let resp = new ModifyProxiesProjectResponse();
        this.request("ModifyProxiesProject", req, resp, cb);
    }

    /**
     * This API (DescribeGroupDomainConfig) is used to obtain the domain name resolution configuration details of a connection group.
     * @param {DescribeGroupDomainConfigRequest} req
     * @param {function(string, DescribeGroupDomainConfigResponse):void} cb
     * @public
     */
    DescribeGroupDomainConfig(req, cb) {
        let resp = new DescribeGroupDomainConfigResponse();
        this.request("DescribeGroupDomainConfig", req, resp, cb);
    }

    /**
     * This API (DescribeUDPListeners) is used to query the UDP listener information of a single connection or connection group.
     * @param {DescribeUDPListenersRequest} req
     * @param {function(string, DescribeUDPListenersResponse):void} cb
     * @public
     */
    DescribeUDPListeners(req, cb) {
        let resp = new DescribeUDPListenersResponse();
        this.request("DescribeUDPListeners", req, resp, cb);
    }

    /**
     * This API is used to add the information of the origin server (server), which supports IP or the domain name.
     * @param {AddRealServersRequest} req
     * @param {function(string, AddRealServersResponse):void} cb
     * @public
     */
    AddRealServers(req, cb) {
        let resp = new AddRealServersResponse();
        this.request("AddRealServers", req, resp, cb);
    }

    /**
     * This API (DescribeAccessRegionsByDestRegion) is used to query the list of the available acceleration regions based on the origin server region.
     * @param {DescribeAccessRegionsByDestRegionRequest} req
     * @param {function(string, DescribeAccessRegionsByDestRegionResponse):void} cb
     * @public
     */
    DescribeAccessRegionsByDestRegion(req, cb) {
        let resp = new DescribeAccessRegionsByDestRegionResponse();
        this.request("DescribeAccessRegionsByDestRegion", req, resp, cb);
    }

    /**
     * This API (ModifyHTTPSListenerAttribute) is used to modify HTTPS listener configurations. It currently do not support connection groups and connections of version 1.0.
     * @param {ModifyHTTPSListenerAttributeRequest} req
     * @param {function(string, ModifyHTTPSListenerAttributeResponse):void} cb
     * @public
     */
    ModifyHTTPSListenerAttribute(req, cb) {
        let resp = new ModifyHTTPSListenerAttributeResponse();
        this.request("ModifyHTTPSListenerAttribute", req, resp, cb);
    }

    /**
     * This API (CreateDomain) is used to create the access domain name for the HTTP/HTTPS listener. Clients request the backend data by accessing this domain.
This API only supports connections of version 3.0.
     * @param {CreateDomainRequest} req
     * @param {function(string, CreateDomainResponse):void} cb
     * @public
     */
    CreateDomain(req, cb) {
        let resp = new CreateDomainResponse();
        this.request("CreateDomain", req, resp, cb);
    }

    /**
     * This API (ModifyRuleAttribute) is used to modify forwarding rule information, including health check configuration and forwarding policies.
     * @param {ModifyRuleAttributeRequest} req
     * @param {function(string, ModifyRuleAttributeResponse):void} cb
     * @public
     */
    ModifyRuleAttribute(req, cb) {
        let resp = new ModifyRuleAttributeResponse();
        this.request("ModifyRuleAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeCertificateDetail) is used to query certificate details, including the certificate ID, name, type, content, key, and other information.
     * @param {DescribeCertificateDetailRequest} req
     * @param {function(string, DescribeCertificateDetailResponse):void} cb
     * @public
     */
    DescribeCertificateDetail(req, cb) {
        let resp = new DescribeCertificateDetailResponse();
        this.request("DescribeCertificateDetail", req, resp, cb);
    }

    /**
     * This API is used to disable security policies.
     * @param {CloseSecurityPolicyRequest} req
     * @param {function(string, CloseSecurityPolicyResponse):void} cb
     * @public
     */
    CloseSecurityPolicy(req, cb) {
        let resp = new CloseSecurityPolicyResponse();
        this.request("CloseSecurityPolicy", req, resp, cb);
    }

    /**
     * This API (ModifyGroupDomainConfig) is used to configure the nearest access domain name of a connection group.
     * @param {ModifyGroupDomainConfigRequest} req
     * @param {function(string, ModifyGroupDomainConfigResponse):void} cb
     * @public
     */
    ModifyGroupDomainConfig(req, cb) {
        let resp = new ModifyGroupDomainConfigResponse();
        this.request("ModifyGroupDomainConfig", req, resp, cb);
    }

    /**
     * This API is used to query listener statistics, including inbound/outbound bandwidth, inbound/outbound packets, concurrence, packet loss, and latency data. It supports granularities of 300, 3,600, and 86,400. Default value is the highest within the granularity range.
     * @param {DescribeProxyStatisticsRequest} req
     * @param {function(string, DescribeProxyStatisticsResponse):void} cb
     * @public
     */
    DescribeProxyStatistics(req, cb) {
        let resp = new DescribeProxyStatisticsResponse();
        this.request("DescribeProxyStatistics", req, resp, cb);
    }

    /**
     * This API is used to delete the added origin server (server) IP or domain name.
     * @param {RemoveRealServersRequest} req
     * @param {function(string, RemoveRealServersResponse):void} cb
     * @public
     */
    RemoveRealServers(req, cb) {
        let resp = new RemoveRealServersResponse();
        this.request("RemoveRealServers", req, resp, cb);
    }

    /**
     * This API is used to query the custom error response to a domain name.
     * @param {DescribeDomainErrorPageInfoRequest} req
     * @param {function(string, DescribeDomainErrorPageInfoResponse):void} cb
     * @public
     */
    DescribeDomainErrorPageInfo(req, cb) {
        let resp = new DescribeDomainErrorPageInfoResponse();
        this.request("DescribeDomainErrorPageInfo", req, resp, cb);
    }

    /**
     * This API (DescribeRealServers) is used to query origin server information. It can query all origin server information by project names, and supports fuzzy query by specified IPs or domain names.
     * @param {DescribeRealServersRequest} req
     * @param {function(string, DescribeRealServersResponse):void} cb
     * @public
     */
    DescribeRealServers(req, cb) {
        let resp = new DescribeRealServersResponse();
        this.request("DescribeRealServers", req, resp, cb);
    }

    /**
     * This API (SetAuthentication) is used for the advanced authentication configuration of connections, including authentication methods and their certificates. If only supports connections of version 3.0.
     * @param {SetAuthenticationRequest} req
     * @param {function(string, SetAuthenticationResponse):void} cb
     * @public
     */
    SetAuthentication(req, cb) {
        let resp = new SetAuthenticationResponse();
        this.request("SetAuthentication", req, resp, cb);
    }

    /**
     * This API (ModifyUDPListenerAttribute) is used to modify the UDP listener configuration of a connection instance, including modification of listener names and scheduling policies.
     * @param {ModifyUDPListenerAttributeRequest} req
     * @param {function(string, ModifyUDPListenerAttributeResponse):void} cb
     * @public
     */
    ModifyUDPListenerAttribute(req, cb) {
        let resp = new ModifyUDPListenerAttributeResponse();
        this.request("ModifyUDPListenerAttribute", req, resp, cb);
    }

    /**
     * This is an internal API. It is used to query the information of connections and listeners from which the statistics can be derived.
     * @param {DescribeProxyAndStatisticsListenersRequest} req
     * @param {function(string, DescribeProxyAndStatisticsListenersResponse):void} cb
     * @public
     */
    DescribeProxyAndStatisticsListeners(req, cb) {
        let resp = new DescribeProxyAndStatisticsListenersResponse();
        this.request("DescribeProxyAndStatisticsListeners", req, resp, cb);
    }

    /**
     * This API (CreateHTTPListener) is used to create an HTTP listener in the connection instance.
     * @param {CreateHTTPListenerRequest} req
     * @param {function(string, CreateHTTPListenerResponse):void} cb
     * @public
     */
    CreateHTTPListener(req, cb) {
        let resp = new CreateHTTPListenerResponse();
        this.request("CreateHTTPListener", req, resp, cb);
    }

    /**
     * This API (CreateProxyGroupDomain) is used to create the connection group domain name, and enable the domain name resolution.
     * @param {CreateProxyGroupDomainRequest} req
     * @param {function(string, CreateProxyGroupDomainResponse):void} cb
     * @public
     */
    CreateProxyGroupDomain(req, cb) {
        let resp = new CreateProxyGroupDomainResponse();
        this.request("CreateProxyGroupDomain", req, resp, cb);
    }

    /**
     * This API (ModifyProxyConfiguration) is used to modify connection configurations. You can expand or reduce the capacity based on current business requirements. It only supports connections with a Scalarable of 1. Scalarable can be obtained via DescribeProxies API.
     * @param {ModifyProxyConfigurationRequest} req
     * @param {function(string, ModifyProxyConfigurationResponse):void} cb
     * @public
     */
    ModifyProxyConfiguration(req, cb) {
        let resp = new ModifyProxyConfigurationResponse();
        this.request("ModifyProxyConfiguration", req, resp, cb);
    }

    /**
     * This API (DescribeResourcesByTag) is used to query corresponding resource information by tags, including connection, connection group, and origin server.
     * @param {DescribeResourcesByTagRequest} req
     * @param {function(string, DescribeResourcesByTagResponse):void} cb
     * @public
     */
    DescribeResourcesByTag(req, cb) {
        let resp = new DescribeResourcesByTagResponse();
        this.request("DescribeResourcesByTag", req, resp, cb);
    }

    /**
     * This API (ModifyTCPListenerAttribute) is used to modify the TCP listener configuration of a connection instance, including health check configuration and scheduling policies.
     * @param {ModifyTCPListenerAttributeRequest} req
     * @param {function(string, ModifyTCPListenerAttributeResponse):void} cb
     * @public
     */
    ModifyTCPListenerAttribute(req, cb) {
        let resp = new ModifyTCPListenerAttributeResponse();
        this.request("ModifyTCPListenerAttribute", req, resp, cb);
    }

    /**
     * This API (ModifyProxyGroupAttribute) is used to modify connection group attributes. It currently only supports modifying connection group name.
     * @param {ModifyProxyGroupAttributeRequest} req
     * @param {function(string, ModifyProxyGroupAttributeResponse):void} cb
     * @public
     */
    ModifyProxyGroupAttribute(req, cb) {
        let resp = new ModifyProxyGroupAttributeResponse();
        this.request("ModifyProxyGroupAttribute", req, resp, cb);
    }

    /**
     * This is an internal API. It is used to query the information of connections and connection groups from which the statistics can be derived.
     * @param {DescribeGroupAndStatisticsProxyRequest} req
     * @param {function(string, DescribeGroupAndStatisticsProxyResponse):void} cb
     * @public
     */
    DescribeGroupAndStatisticsProxy(req, cb) {
        let resp = new DescribeGroupAndStatisticsProxyResponse();
        this.request("DescribeGroupAndStatisticsProxy", req, resp, cb);
    }

    /**
     * This API (DescribeDestRegions) is used to query an origin server region (i.e., the region in which the origin server locates).
     * @param {DescribeDestRegionsRequest} req
     * @param {function(string, DescribeDestRegionsResponse):void} cb
     * @public
     */
    DescribeDestRegions(req, cb) {
        let resp = new DescribeDestRegionsResponse();
        this.request("DescribeDestRegions", req, resp, cb);
    }

    /**
     * This API (BindListenerRealServers) is used for the TCP/UDP listener to bind/unbind the origin server.
Note: This API unbinds the previously bound origin servers, and binds the origin servers selected for this call. For example, the previously bound origin servers are A, B and C, and the origin servers selected for this call are C, D and E, then the origin servers bound after this call will be C, D and E.
     * @param {BindListenerRealServersRequest} req
     * @param {function(string, BindListenerRealServersResponse):void} cb
     * @public
     */
    BindListenerRealServers(req, cb) {
        let resp = new BindListenerRealServersResponse();
        this.request("BindListenerRealServers", req, resp, cb);
    }

    /**
     * This API (DescribeHTTPListeners) is used to query HTTP listener information.
     * @param {DescribeHTTPListenersRequest} req
     * @param {function(string, DescribeHTTPListenersResponse):void} cb
     * @public
     */
    DescribeHTTPListeners(req, cb) {
        let resp = new DescribeHTTPListenersResponse();
        this.request("DescribeHTTPListeners", req, resp, cb);
    }

    /**
     * This API (CreateProxyGroup) is used to create a connection group.
     * @param {CreateProxyGroupRequest} req
     * @param {function(string, CreateProxyGroupResponse):void} cb
     * @public
     */
    CreateProxyGroup(req, cb) {
        let resp = new CreateProxyGroupResponse();
        this.request("CreateProxyGroup", req, resp, cb);
    }

    /**
     * This API (CreateTCPListeners) is used to batch create UDP listeners of single connections or connection groups.
     * @param {CreateUDPListenersRequest} req
     * @param {function(string, CreateUDPListenersResponse):void} cb
     * @public
     */
    CreateUDPListeners(req, cb) {
        let resp = new CreateUDPListenersResponse();
        this.request("CreateUDPListeners", req, resp, cb);
    }

    /**
     * This API (DescribeRegionAndPrice) is used to obtain the origin server regions and the bandwidth price gradient.
     * @param {DescribeRegionAndPriceRequest} req
     * @param {function(string, DescribeRegionAndPriceResponse):void} cb
     * @public
     */
    DescribeRegionAndPrice(req, cb) {
        let resp = new DescribeRegionAndPriceResponse();
        this.request("DescribeRegionAndPrice", req, resp, cb);
    }

    /**
     * This API (CreateCertificate) is used to create the GAAP certificates and configuration files, including basic authentication configuration files, client CA certificates, server SSL certificates, GAAP SSL certificates, and origin server CA certificates.
     * @param {CreateCertificateRequest} req
     * @param {function(string, CreateCertificateResponse):void} cb
     * @public
     */
    CreateCertificate(req, cb) {
        let resp = new CreateCertificateResponse();
        this.request("CreateCertificate", req, resp, cb);
    }

    /**
     * This API is used to query listener statistics, including inbound/outbound bandwidth, inbound/outbound packets, and concurrence data. It supports granularities of 300, 3,600, and 86,400. Default value is the highest within the granularity range.
     * @param {DescribeListenerStatisticsRequest} req
     * @param {function(string, DescribeListenerStatisticsResponse):void} cb
     * @public
     */
    DescribeListenerStatistics(req, cb) {
        let resp = new DescribeListenerStatisticsResponse();
        this.request("DescribeListenerStatistics", req, resp, cb);
    }

    /**
     * This API (DescribeRealServersStatus) is used to query whether an origin server has been bound to a rule or listener.
     * @param {DescribeRealServersStatusRequest} req
     * @param {function(string, DescribeRealServersStatusResponse):void} cb
     * @public
     */
    DescribeRealServersStatus(req, cb) {
        let resp = new DescribeRealServersStatusResponse();
        this.request("DescribeRealServersStatus", req, resp, cb);
    }

    /**
     * This API (CloseProxies) is used to disable connections. If disabled, no traffic will be generated, but the basic configuration fee will still be incurred.
     * @param {CloseProxiesRequest} req
     * @param {function(string, CloseProxiesResponse):void} cb
     * @public
     */
    CloseProxies(req, cb) {
        let resp = new CloseProxiesResponse();
        this.request("CloseProxies", req, resp, cb);
    }

    /**
     * This API (DescribeProxiesStatus) is used to query the connection status list.
     * @param {DescribeProxiesStatusRequest} req
     * @param {function(string, DescribeProxiesStatusResponse):void} cb
     * @public
     */
    DescribeProxiesStatus(req, cb) {
        let resp = new DescribeProxiesStatusResponse();
        this.request("DescribeProxiesStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of security rules based on security rule ID. It supports querying 1 to 20 security rules at a time.
     * @param {DescribeSecurityRulesRequest} req
     * @param {function(string, DescribeSecurityRulesResponse):void} cb
     * @public
     */
    DescribeSecurityRules(req, cb) {
        let resp = new DescribeSecurityRulesResponse();
        this.request("DescribeSecurityRules", req, resp, cb);
    }

    /**
     * This API (DescribeRules) is used to query all rule information of a listener, including the domain names, paths, and list of bound origin servers. For version 3.0 connections, this API returns the advanced authentication configuration information of the domain name.
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * This API (CreateTCPListeners) is used to batch create TCP listeners of single connections or connection groups.
     * @param {CreateTCPListenersRequest} req
     * @param {function(string, CreateTCPListenersResponse):void} cb
     * @public
     */
    CreateTCPListeners(req, cb) {
        let resp = new CreateTCPListenersResponse();
        this.request("CreateTCPListeners", req, resp, cb);
    }

    /**
     * This API (DestroyProxies) is used to terminate a connection. If terminated, no fees will be incurred.
     * @param {DestroyProxiesRequest} req
     * @param {function(string, DestroyProxiesResponse):void} cb
     * @public
     */
    DestroyProxies(req, cb) {
        let resp = new DestroyProxiesResponse();
        this.request("DestroyProxies", req, resp, cb);
    }

    /**
     * This API (ModifyProxiesAttribute) is used to modify instance attributes (currently only supports modifying connection name).
     * @param {ModifyProxiesAttributeRequest} req
     * @param {function(string, ModifyProxiesAttributeResponse):void} cb
     * @public
     */
    ModifyProxiesAttribute(req, cb) {
        let resp = new ModifyProxiesAttributeResponse();
        this.request("ModifyProxiesAttribute", req, resp, cb);
    }

    /**
     * This API is used to bind an origin server to the forwarding rules of layer-7 listeners. Note: This API unbinds all previously bound origin servers before binding those selected.
     * @param {BindRuleRealServersRequest} req
     * @param {function(string, BindRuleRealServersResponse):void} cb
     * @public
     */
    BindRuleRealServers(req, cb) {
        let resp = new BindRuleRealServersResponse();
        this.request("BindRuleRealServers", req, resp, cb);
    }

    /**
     * This API (CreateProxy) is used to create an acceleration connection with specified configuration.
     * @param {CreateProxyRequest} req
     * @param {function(string, CreateProxyResponse):void} cb
     * @public
     */
    CreateProxy(req, cb) {
        let resp = new CreateProxyResponse();
        this.request("CreateProxy", req, resp, cb);
    }

    /**
     * This API (DeleteDomain) is only applicable to layer-7 listeners. It is used to delete the domain names of this listener, and all the rules under the domain name. All rules bound to the origin server are unbound automatically.
     * @param {DeleteDomainRequest} req
     * @param {function(string, DeleteDomainResponse):void} cb
     * @public
     */
    DeleteDomain(req, cb) {
        let resp = new DeleteDomainResponse();
        this.request("DeleteDomain", req, resp, cb);
    }

    /**
     * This API (DescribeListenerRealServers) is used to query the origin server list of TCP/UDP listeners, including the list of bound origin servers and origin servers that can be bound.
     * @param {DescribeListenerRealServersRequest} req
     * @param {function(string, DescribeListenerRealServersResponse):void} cb
     * @public
     */
    DescribeListenerRealServers(req, cb) {
        let resp = new DescribeListenerRealServersResponse();
        this.request("DescribeListenerRealServers", req, resp, cb);
    }

    /**
     * This API (DeleteListeners) is used to batch delete the listeners of a connection or connection group, including layer-4/7 listeners.
     * @param {DeleteListenersRequest} req
     * @param {function(string, DeleteListenersResponse):void} cb
     * @public
     */
    DeleteListeners(req, cb) {
        let resp = new DeleteListenersResponse();
        this.request("DeleteListeners", req, resp, cb);
    }

    /**
     * This API is used to pull the list of rules based on rule ID. It supports pulling 1 to 10 rules at a time.
     * @param {DescribeRulesByRuleIdsRequest} req
     * @param {function(string, DescribeRulesByRuleIdsResponse):void} cb
     * @public
     */
    DescribeRulesByRuleIds(req, cb) {
        let resp = new DescribeRulesByRuleIdsResponse();
        this.request("DescribeRulesByRuleIds", req, resp, cb);
    }

    /**
     * This API (InquiryPriceCreateProxy) is used to create the price inquiries of acceleration connections.
     * @param {InquiryPriceCreateProxyRequest} req
     * @param {function(string, InquiryPriceCreateProxyResponse):void} cb
     * @public
     */
    InquiryPriceCreateProxy(req, cb) {
        let resp = new InquiryPriceCreateProxyResponse();
        this.request("InquiryPriceCreateProxy", req, resp, cb);
    }


}
module.exports = GaapClient;
