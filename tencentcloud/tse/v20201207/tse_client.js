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
const ListCloudNativeAPIGatewayResult = models.ListCloudNativeAPIGatewayResult;
const DescribeCloudNativeAPIGatewayResponse = models.DescribeCloudNativeAPIGatewayResponse;
const CreateCloudNativeAPIGatewayServiceResponse = models.CreateCloudNativeAPIGatewayServiceResponse;
const DeleteCloudNativeAPIGatewayPublicNetworkResponse = models.DeleteCloudNativeAPIGatewayPublicNetworkResponse;
const DeleteCloudNativeAPIGatewayRouteRateLimitResponse = models.DeleteCloudNativeAPIGatewayRouteRateLimitResponse;
const DeleteWafDomainsRequest = models.DeleteWafDomainsRequest;
const CreateOrModifyCloudNativeAPIGatewayCORSResponse = models.CreateOrModifyCloudNativeAPIGatewayCORSResponse;
const ServiceWafStatus = models.ServiceWafStatus;
const DeleteNativeGatewayServiceSourceResponse = models.DeleteNativeGatewayServiceSourceResponse;
const DescribeCloudNativeAPIGatewayServiceRateLimitRequest = models.DescribeCloudNativeAPIGatewayServiceRateLimitRequest;
const CloudNativeAPIGatewayBalancedService = models.CloudNativeAPIGatewayBalancedService;
const ModifyGovernanceLaneGroupsResponse = models.ModifyGovernanceLaneGroupsResponse;
const CloudNativeAPIGatewayStrategyCronScalerConfig = models.CloudNativeAPIGatewayStrategyCronScalerConfig;
const CloudNativeAPIGatewayStrategyBindingGroupInfo = models.CloudNativeAPIGatewayStrategyBindingGroupInfo;
const ModifyCloudNativeAPIGatewayRouteRequest = models.ModifyCloudNativeAPIGatewayRouteRequest;
const DescribeCloudNativeAPIGatewayUpstreamRequest = models.DescribeCloudNativeAPIGatewayUpstreamRequest;
const DeleteNativeGatewayServerGroupResponse = models.DeleteNativeGatewayServerGroupResponse;
const RoutingDestinationRuleLabel = models.RoutingDestinationRuleLabel;
const ModifyCloudNativeAPIGatewayCertificateResponse = models.ModifyCloudNativeAPIGatewayCertificateResponse;
const CreateCloudNativeAPIGatewayRouteRateLimitResponse = models.CreateCloudNativeAPIGatewayRouteRateLimitResponse;
const DescribeCloudNativeAPIGatewayCORSRequest = models.DescribeCloudNativeAPIGatewayCORSRequest;
const CloudNativeAPIGatewayNodeConfig = models.CloudNativeAPIGatewayNodeConfig;
const CreateNativeGatewayServiceSourceRequest = models.CreateNativeGatewayServiceSourceRequest;
const KeyValue = models.KeyValue;
const CreateNativeGatewayServerGroupRequest = models.CreateNativeGatewayServerGroupRequest;
const DescribeCloudNativeAPIGatewayCertificatesRequest = models.DescribeCloudNativeAPIGatewayCertificatesRequest;
const ModifyCloudNativeAPIGatewayCanaryRuleResponse = models.ModifyCloudNativeAPIGatewayCanaryRuleResponse;
const ModifyCloudNativeAPIGatewayRouteRateLimitRequest = models.ModifyCloudNativeAPIGatewayRouteRateLimitRequest;
const CreateGovernanceLaneGroupsRequest = models.CreateGovernanceLaneGroupsRequest;
const DeleteCloudNativeAPIGatewayResult = models.DeleteCloudNativeAPIGatewayResult;
const ListCloudNativeAPIGatewayStrategyResult = models.ListCloudNativeAPIGatewayStrategyResult;
const DescribeWafDomainsRequest = models.DescribeWafDomainsRequest;
const CloseWafProtectionRequest = models.CloseWafProtectionRequest;
const ModifyCloudNativeAPIGatewayCanaryRuleRequest = models.ModifyCloudNativeAPIGatewayCanaryRuleRequest;
const DescribeWafProtectionRequest = models.DescribeWafProtectionRequest;
const ModifyCloudNativeAPIGatewayServiceResponse = models.ModifyCloudNativeAPIGatewayServiceResponse;
const DescribeCloudNativeAPIGatewayNodesResponse = models.DescribeCloudNativeAPIGatewayNodesResponse;
const NativeGatewayServiceSourceItem = models.NativeGatewayServiceSourceItem;
const CreateCloudNativeAPIGatewayResponse = models.CreateCloudNativeAPIGatewayResponse;
const DescribeUpstreamHealthCheckConfigResponse = models.DescribeUpstreamHealthCheckConfigResponse;
const NetworkAccessControl = models.NetworkAccessControl;
const ModifyNativeGatewayServiceSourceRequest = models.ModifyNativeGatewayServiceSourceRequest;
const KongActiveHealthCheck = models.KongActiveHealthCheck;
const DescribePublicNetworkResult = models.DescribePublicNetworkResult;
const DeleteCloudNativeAPIGatewayCertificateResponse = models.DeleteCloudNativeAPIGatewayCertificateResponse;
const DeleteCloudNativeAPIGatewayCanaryRuleRequest = models.DeleteCloudNativeAPIGatewayCanaryRuleRequest;
const GatewayInstanceSchemeAndPorts = models.GatewayInstanceSchemeAndPorts;
const CreatePublicNetworkResult = models.CreatePublicNetworkResult;
const DescribeGovernanceLaneGroupsResponse = models.DescribeGovernanceLaneGroupsResponse;
const UpstreamHealthCheckConfig = models.UpstreamHealthCheckConfig;
const DescribeAutoScalerResourceStrategyBindingGroupsResponse = models.DescribeAutoScalerResourceStrategyBindingGroupsResponse;
const CreateNativeGatewayServiceSourceResponse = models.CreateNativeGatewayServiceSourceResponse;
const CreateCloudNativeAPIGatewayServiceRequest = models.CreateCloudNativeAPIGatewayServiceRequest;
const CreateCloudNativeAPIGatewayRequest = models.CreateCloudNativeAPIGatewayRequest;
const DescribeNativeGatewayServiceSourcesRequest = models.DescribeNativeGatewayServiceSourcesRequest;
const ExternalRedis = models.ExternalRedis;
const PublicAddressConfig = models.PublicAddressConfig;
const ModifyCloudNativeAPIGatewayCertificateRequest = models.ModifyCloudNativeAPIGatewayCertificateRequest;
const InstanceTagInfo = models.InstanceTagInfo;
const CreateWafDomainsResponse = models.CreateWafDomainsResponse;
const DescribeCloudNativeAPIGatewayRouteRateLimitResponse = models.DescribeCloudNativeAPIGatewayRouteRateLimitResponse;
const DescribeCloudNativeAPIGatewayServicesRequest = models.DescribeCloudNativeAPIGatewayServicesRequest;
const ListFilter = models.ListFilter;
const DescribeCloudNativeAPIGatewayUpstreamResponse = models.DescribeCloudNativeAPIGatewayUpstreamResponse;
const GovernanceServiceDestination = models.GovernanceServiceDestination;
const DeleteAutoScalerResourceStrategyRequest = models.DeleteAutoScalerResourceStrategyRequest;
const ModifyCloudNativeAPIGatewayResponse = models.ModifyCloudNativeAPIGatewayResponse;
const QpsThreshold = models.QpsThreshold;
const KongUpstreamPreview = models.KongUpstreamPreview;
const DescribeCloudNativeAPIGatewayNodesRequest = models.DescribeCloudNativeAPIGatewayNodesRequest;
const CreateCloudNativeAPIGatewayCanaryRuleResponse = models.CreateCloudNativeAPIGatewayCanaryRuleResponse;
const CreateGatewayServiceResult = models.CreateGatewayServiceResult;
const DescribeInstanceInfoByIpResult = models.DescribeInstanceInfoByIpResult;
const CreateGovernanceLaneGroupsResponse = models.CreateGovernanceLaneGroupsResponse;
const Label = models.Label;
const DescribeCloudNativeAPIGatewayRoutesResponse = models.DescribeCloudNativeAPIGatewayRoutesResponse;
const DescribeWafProtectionResponse = models.DescribeWafProtectionResponse;
const ModifyConsoleNetworkRequest = models.ModifyConsoleNetworkRequest;
const DescribeKongCORSResult = models.DescribeKongCORSResult;
const UpdateUpstreamTargetsRequest = models.UpdateUpstreamTargetsRequest;
const DeleteCloudNativeAPIGatewayServiceResponse = models.DeleteCloudNativeAPIGatewayServiceResponse;
const DescribeWafDomainsResult = models.DescribeWafDomainsResult;
const BindAutoScalerResourceStrategyToGroupsResponse = models.BindAutoScalerResourceStrategyToGroupsResponse;
const DescribeAutoScalerResourceStrategiesResponse = models.DescribeAutoScalerResourceStrategiesResponse;
const DescribeCloudNativeAPIGatewayResult = models.DescribeCloudNativeAPIGatewayResult;
const ModifyNetworkAccessStrategyRequest = models.ModifyNetworkAccessStrategyRequest;
const DeleteCloudNativeAPIGatewayRouteResponse = models.DeleteCloudNativeAPIGatewayRouteResponse;
const DescribeCloudNativeAPIGatewayPortsResponse = models.DescribeCloudNativeAPIGatewayPortsResponse;
const CreateCloudNativeAPIGatewayRouteRateLimitRequest = models.CreateCloudNativeAPIGatewayRouteRateLimitRequest;
const DeleteNativeGatewayServerGroupRequest = models.DeleteNativeGatewayServerGroupRequest;
const ModifyCloudNativeAPIGatewayRouteResponse = models.ModifyCloudNativeAPIGatewayRouteResponse;
const DeleteNativeGatewayServerGroupResult = models.DeleteNativeGatewayServerGroupResult;
const KongCertificatesPreview = models.KongCertificatesPreview;
const TSEGatewaySelector = models.TSEGatewaySelector;
const DeleteCloudNativeAPIGatewayServiceRateLimitRequest = models.DeleteCloudNativeAPIGatewayServiceRateLimitRequest;
const OpenWafProtectionResponse = models.OpenWafProtectionResponse;
const KongPassiveHealthCheck = models.KongPassiveHealthCheck;
const CanaryPriorityRule = models.CanaryPriorityRule;
const DescribeCloudNativeAPIGatewayRequest = models.DescribeCloudNativeAPIGatewayRequest;
const ModifyNativeGatewayServiceSourceResponse = models.ModifyNativeGatewayServiceSourceResponse;
const CloudNativeAPIGatewayVpcConfig = models.CloudNativeAPIGatewayVpcConfig;
const CloudAPIGatewayCanaryRuleList = models.CloudAPIGatewayCanaryRuleList;
const ModifyUpstreamNodeStatusRequest = models.ModifyUpstreamNodeStatusRequest;
const DescribeCloudNativeAPIGatewayConfigResponse = models.DescribeCloudNativeAPIGatewayConfigResponse;
const KongRoutePreview = models.KongRoutePreview;
const DescribePublicAddressConfigRequest = models.DescribePublicAddressConfigRequest;
const CloudNativeAPIGatewayRateLimitDetail = models.CloudNativeAPIGatewayRateLimitDetail;
const LimitRule = models.LimitRule;
const CreateCloudNativeAPIGatewayRouteResponse = models.CreateCloudNativeAPIGatewayRouteResponse;
const DescribeCloudNativeAPIGatewayConfigRequest = models.DescribeCloudNativeAPIGatewayConfigRequest;
const KongTarget = models.KongTarget;
const TrafficGray = models.TrafficGray;
const DescribeCloudNativeAPIGatewaysRequest = models.DescribeCloudNativeAPIGatewaysRequest;
const AutoScalerPolicy = models.AutoScalerPolicy;
const DescribeCloudNativeAPIGatewayConfigResult = models.DescribeCloudNativeAPIGatewayConfigResult;
const KVMapping = models.KVMapping;
const BindAutoScalerResourceStrategyToGroupsRequest = models.BindAutoScalerResourceStrategyToGroupsRequest;
const ModifyNetworkAccessStrategyResponse = models.ModifyNetworkAccessStrategyResponse;
const DeleteCloudNativeAPIGatewayCertificateRequest = models.DeleteCloudNativeAPIGatewayCertificateRequest;
const DeleteCloudNativeAPIGatewayServiceRequest = models.DeleteCloudNativeAPIGatewayServiceRequest;
const ModifyAutoScalerResourceStrategyResponse = models.ModifyAutoScalerResourceStrategyResponse;
const CreateCloudNativeAPIGatewayCertificateResponse = models.CreateCloudNativeAPIGatewayCertificateResponse;
const Argument = models.Argument;
const CreateCloudNativeAPIGatewayCanaryRuleRequest = models.CreateCloudNativeAPIGatewayCanaryRuleRequest;
const ServiceGatewaySelector = models.ServiceGatewaySelector;
const DescribeCloudNativeAPIGatewayCORSResponse = models.DescribeCloudNativeAPIGatewayCORSResponse;
const ModifyNativeGatewayServerGroupRequest = models.ModifyNativeGatewayServerGroupRequest;
const DescribeCloudNativeAPIGatewayRouteRateLimitRequest = models.DescribeCloudNativeAPIGatewayRouteRateLimitRequest;
const DescribeOneCloudNativeAPIGatewayServiceRequest = models.DescribeOneCloudNativeAPIGatewayServiceRequest;
const UpdateUpstreamHealthCheckConfigRequest = models.UpdateUpstreamHealthCheckConfigRequest;
const ServiceSelector = models.ServiceSelector;
const CloudNativeAPIGatewayStrategy = models.CloudNativeAPIGatewayStrategy;
const DescribeCloudNativeAPIGatewaysResponse = models.DescribeCloudNativeAPIGatewaysResponse;
const AccurateQpsThreshold = models.AccurateQpsThreshold;
const KongServiceRouteList = models.KongServiceRouteList;
const UpdateCloudNativeAPIGatewaySpecRequest = models.UpdateCloudNativeAPIGatewaySpecRequest;
const DescribeCloudNativeAPIGatewayServicesResponse = models.DescribeCloudNativeAPIGatewayServicesResponse;
const DeleteCloudNativeAPIGatewayRouteRateLimitRequest = models.DeleteCloudNativeAPIGatewayRouteRateLimitRequest;
const AutoScalerBehavior = models.AutoScalerBehavior;
const DescribeCloudNativeAPIGatewayInfoByIpRequest = models.DescribeCloudNativeAPIGatewayInfoByIpRequest;
const CreateCloudNativeAPIGatewayPublicNetworkResponse = models.CreateCloudNativeAPIGatewayPublicNetworkResponse;
const DescribeWafDomainsResponse = models.DescribeWafDomainsResponse;
const ModifyNetworkBasicInfoRequest = models.ModifyNetworkBasicInfoRequest;
const DescribeUpstreamHealthCheckConfigRequest = models.DescribeUpstreamHealthCheckConfigRequest;
const SourceInstanceAuth = models.SourceInstanceAuth;
const DeleteAutoScalerResourceStrategyResponse = models.DeleteAutoScalerResourceStrategyResponse;
const DescribeCloudNativeAPIGatewayCanaryRulesResponse = models.DescribeCloudNativeAPIGatewayCanaryRulesResponse;
const UpdateUpstreamTargetsResponse = models.UpdateUpstreamTargetsResponse;
const DeleteCloudNativeAPIGatewayCORSResponse = models.DeleteCloudNativeAPIGatewayCORSResponse;
const NativeGatewayServerGroup = models.NativeGatewayServerGroup;
const DeleteCloudNativeAPIGatewayServiceRateLimitResponse = models.DeleteCloudNativeAPIGatewayServiceRateLimitResponse;
const CloseWafProtectionResponse = models.CloseWafProtectionResponse;
const GatewayServices = models.GatewayServices;
const CloudNativeAPIGatewayStrategyAutoScalerConfigMetric = models.CloudNativeAPIGatewayStrategyAutoScalerConfigMetric;
const CloudNativeAPIGatewayNode = models.CloudNativeAPIGatewayNode;
const UpdateCloudNativeAPIGatewaySpecResponse = models.UpdateCloudNativeAPIGatewaySpecResponse;
const CloudNativeAPIGatewayConfig = models.CloudNativeAPIGatewayConfig;
const DescribeAutoScalerResourceStrategyBindingGroupsRequest = models.DescribeAutoScalerResourceStrategyBindingGroupsRequest;
const KongServiceLightPreview = models.KongServiceLightPreview;
const ModifyAutoScalerResourceStrategyRequest = models.ModifyAutoScalerResourceStrategyRequest;
const DescribeNativeGatewayServerGroupsRequest = models.DescribeNativeGatewayServerGroupsRequest;
const CertificateInfo = models.CertificateInfo;
const DescribeGatewayInstancePortResult = models.DescribeGatewayInstancePortResult;
const UnbindAutoScalerResourceStrategyFromGroupsRequest = models.UnbindAutoScalerResourceStrategyFromGroupsRequest;
const ArgumentValue = models.ArgumentValue;
const KongCertificate = models.KongCertificate;
const DeleteCloudNativeAPIGatewayRequest = models.DeleteCloudNativeAPIGatewayRequest;
const DeleteCloudNativeAPIGatewayPublicNetworkRequest = models.DeleteCloudNativeAPIGatewayPublicNetworkRequest;
const UnbindAutoScalerResourceStrategyFromGroupsResponse = models.UnbindAutoScalerResourceStrategyFromGroupsResponse;
const UpdateCloudNativeAPIGatewayCertificateInfoRequest = models.UpdateCloudNativeAPIGatewayCertificateInfoRequest;
const KongUpstreamList = models.KongUpstreamList;
const ModifyCloudNativeAPIGatewayRouteRateLimitResponse = models.ModifyCloudNativeAPIGatewayRouteRateLimitResponse;
const SourceInfo = models.SourceInfo;
const Filter = models.Filter;
const CreateOrModifyCloudNativeAPIGatewayCORSRequest = models.CreateOrModifyCloudNativeAPIGatewayCORSRequest;
const DescribeOneCloudNativeAPIGatewayServiceResponse = models.DescribeOneCloudNativeAPIGatewayServiceResponse;
const ModifyCloudNativeAPIGatewayServiceRequest = models.ModifyCloudNativeAPIGatewayServiceRequest;
const DeleteCloudNativeAPIGatewayResponse = models.DeleteCloudNativeAPIGatewayResponse;
const RateLimitResponse = models.RateLimitResponse;
const DeleteNativeGatewayServiceSourceRequest = models.DeleteNativeGatewayServiceSourceRequest;
const CreateCloudNativeAPIGatewayCertificateRequest = models.CreateCloudNativeAPIGatewayCertificateRequest;
const DescribeCloudNativeAPIGatewayServiceRateLimitResponse = models.DescribeCloudNativeAPIGatewayServiceRateLimitResponse;
const DescribeCloudNativeAPIGatewayServicesLightResponse = models.DescribeCloudNativeAPIGatewayServicesLightResponse;
const DeleteGovernanceLaneGroup = models.DeleteGovernanceLaneGroup;
const ModifyUpstreamNodeStatusResponse = models.ModifyUpstreamNodeStatusResponse;
const DescribeAutoScalerResourceStrategiesRequest = models.DescribeAutoScalerResourceStrategiesRequest;
const CreateCloudNativeAPIGatewayPublicNetworkRequest = models.CreateCloudNativeAPIGatewayPublicNetworkRequest;
const DeleteGovernanceLaneGroupsResponse = models.DeleteGovernanceLaneGroupsResponse;
const UpdateCloudNativeAPIGatewayResult = models.UpdateCloudNativeAPIGatewayResult;
const RuleFilter = models.RuleFilter;
const DeleteGovernanceLaneGroupsRequest = models.DeleteGovernanceLaneGroupsRequest;
const DescribeCloudNativeAPIGatewayCertificateDetailsResponse = models.DescribeCloudNativeAPIGatewayCertificateDetailsResponse;
const DescribeNativeGatewayServerGroupsResponse = models.DescribeNativeGatewayServerGroupsResponse;
const DeleteCloudNativeAPIGatewayCORSRequest = models.DeleteCloudNativeAPIGatewayCORSRequest;
const InstancePort = models.InstancePort;
const CloudNativeAPIGatewayStrategyCronScalerConfigParam = models.CloudNativeAPIGatewayStrategyCronScalerConfigParam;
const OpenWafProtectionRequest = models.OpenWafProtectionRequest;
const DescribeCloudNativeAPIGatewayCertificatesResponse = models.DescribeCloudNativeAPIGatewayCertificatesResponse;
const SourceInstanceVpcInfo = models.SourceInstanceVpcInfo;
const DeleteCloudNativeAPIGatewayRouteRequest = models.DeleteCloudNativeAPIGatewayRouteRequest;
const DescribePublicNetworkRequest = models.DescribePublicNetworkRequest;
const CreateAutoScalerResourceStrategyRequest = models.CreateAutoScalerResourceStrategyRequest;
const InternetConfig = models.InternetConfig;
const DescribeCloudNativeAPIGatewayRoutesRequest = models.DescribeCloudNativeAPIGatewayRoutesRequest;
const KongServices = models.KongServices;
const DescribeCloudNativeAPIGatewayInfoByIpResponse = models.DescribeCloudNativeAPIGatewayInfoByIpResponse;
const CreateCloudNativeAPIGatewayServiceRateLimitResponse = models.CreateCloudNativeAPIGatewayServiceRateLimitResponse;
const DescribeCloudNativeAPIGatewayNodesResult = models.DescribeCloudNativeAPIGatewayNodesResult;
const CloudNativeAPIGatewayCanaryRule = models.CloudNativeAPIGatewayCanaryRule;
const ListCloudNativeAPIGatewayStrategyBindingGroupInfoResult = models.ListCloudNativeAPIGatewayStrategyBindingGroupInfoResult;
const ModifyCloudNativeAPIGatewayServiceRateLimitResponse = models.ModifyCloudNativeAPIGatewayServiceRateLimitResponse;
const CloudNativeAPIGatewayStrategyAutoScalerConfig = models.CloudNativeAPIGatewayStrategyAutoScalerConfig;
const DescribeCloudNativeAPIGatewayServicesLightRequest = models.DescribeCloudNativeAPIGatewayServicesLightRequest;
const CloudNativeAPIGatewayCanaryRuleCondition = models.CloudNativeAPIGatewayCanaryRuleCondition;
const UpdateUpstreamHealthCheckConfigResponse = models.UpdateUpstreamHealthCheckConfigResponse;
const KongServiceDetail = models.KongServiceDetail;
const DescribePublicNetworkResponse = models.DescribePublicNetworkResponse;
const CreateCloudNativeAPIGatewayServerGroupResult = models.CreateCloudNativeAPIGatewayServerGroupResult;
const ModifyCloudNativeAPIGatewayServiceRateLimitRequest = models.ModifyCloudNativeAPIGatewayServiceRateLimitRequest;
const DescribePublicAddressConfigResult = models.DescribePublicAddressConfigResult;
const DescribeCloudNativeAPIGatewayCertificateDetailsRequest = models.DescribeCloudNativeAPIGatewayCertificateDetailsRequest;
const RouteWafStatus = models.RouteWafStatus;
const AutoScalerRules = models.AutoScalerRules;
const CreateWafDomainsRequest = models.CreateWafDomainsRequest;
const KongUpstreamInfo = models.KongUpstreamInfo;
const CreateCloudNativeAPIGatewayRouteRequest = models.CreateCloudNativeAPIGatewayRouteRequest;
const CreateNativeGatewayServerGroupResponse = models.CreateNativeGatewayServerGroupResponse;
const LaneTrafficEntry = models.LaneTrafficEntry;
const CreateCloudNativeAPIGatewayServiceRateLimitRequest = models.CreateCloudNativeAPIGatewayServiceRateLimitRequest;
const NativeGatewayServerGroups = models.NativeGatewayServerGroups;
const GovernanceLaneRule = models.GovernanceLaneRule;
const DescribeGovernanceLaneGroupsRequest = models.DescribeGovernanceLaneGroupsRequest;
const DescribePublicAddressConfigResponse = models.DescribePublicAddressConfigResponse;
const CreateAutoScalerResourceStrategyResponse = models.CreateAutoScalerResourceStrategyResponse;
const ModifyConsoleNetworkResponse = models.ModifyConsoleNetworkResponse;
const DeleteWafDomainsResponse = models.DeleteWafDomainsResponse;
const CreateCloudNativeAPIGatewayResult = models.CreateCloudNativeAPIGatewayResult;
const ModifyCloudNativeAPIGatewayRequest = models.ModifyCloudNativeAPIGatewayRequest;
const KongServicePreview = models.KongServicePreview;
const ModifyGovernanceLaneGroupsRequest = models.ModifyGovernanceLaneGroupsRequest;
const GovernanceLaneGroup = models.GovernanceLaneGroup;
const KongCertificatesList = models.KongCertificatesList;
const DescribeCloudNativeAPIGatewayCanaryRulesRequest = models.DescribeCloudNativeAPIGatewayCanaryRulesRequest;
const DeleteCloudNativeAPIGatewayCanaryRuleResponse = models.DeleteCloudNativeAPIGatewayCanaryRuleResponse;
const DescribeCloudNativeAPIGatewayPortsRequest = models.DescribeCloudNativeAPIGatewayPortsRequest;
const ModifyNativeGatewayServerGroupResponse = models.ModifyNativeGatewayServerGroupResponse;
const UpdateCloudNativeAPIGatewayCertificateInfoResponse = models.UpdateCloudNativeAPIGatewayCertificateInfoResponse;
const ModifyNetworkBasicInfoResponse = models.ModifyNetworkBasicInfoResponse;
const DescribeWafProtectionResult = models.DescribeWafProtectionResult;
const DescribeNativeGatewayServiceSourcesResponse = models.DescribeNativeGatewayServiceSourcesResponse;


/**
 * tse client
 * @class
 */
class TseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tse.intl.tencentcloudapi.com", "2020-12-07", credential, region, profile);
    }
    
    /**
     * Delete a lane group
     * @param {DeleteGovernanceLaneGroupsRequest} req
     * @param {function(string, DeleteGovernanceLaneGroupsResponse):void} cb
     * @public
     */
    DeleteGovernanceLaneGroups(req, cb) {
        let resp = new DeleteGovernanceLaneGroupsResponse();
        this.request("DeleteGovernanceLaneGroups", req, resp, cb);
    }

    /**
     * This API is used to query the Upstream list in the service detail of a cloud-native gateway.
     * @param {DescribeCloudNativeAPIGatewayUpstreamRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayUpstreamResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayUpstream(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayUpstreamResponse();
        this.request("DescribeCloudNativeAPIGatewayUpstream", req, resp, cb);
    }

    /**
     * This API is used to obtain the health check configuration of the cloud-native gateway service.
     * @param {DescribeUpstreamHealthCheckConfigRequest} req
     * @param {function(string, DescribeUpstreamHealthCheckConfigResponse):void} cb
     * @public
     */
    DescribeUpstreamHealthCheckConfig(req, cb) {
        let resp = new DescribeUpstreamHealthCheckConfigResponse();
        this.request("DescribeUpstreamHealthCheckConfig", req, resp, cb);
    }

    /**
     * Query the instance list of the gateway service source
     * @param {DescribeNativeGatewayServiceSourcesRequest} req
     * @param {function(string, DescribeNativeGatewayServiceSourcesResponse):void} cb
     * @public
     */
    DescribeNativeGatewayServiceSources(req, cb) {
        let resp = new DescribeNativeGatewayServiceSourcesResponse();
        this.request("DescribeNativeGatewayServiceSources", req, resp, cb);
    }

    /**
     * Modify the network configuration of the Konga gateway instance
     * @param {ModifyConsoleNetworkRequest} req
     * @param {function(string, ModifyConsoleNetworkResponse):void} cb
     * @public
     */
    ModifyConsoleNetwork(req, cb) {
        let resp = new ModifyConsoleNetworkResponse();
        this.request("ModifyConsoleNetwork", req, resp, cb);
    }

    /**
     * Query cloud native gateway instance information based on public IP address
     * @param {DescribeCloudNativeAPIGatewayInfoByIpRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayInfoByIpResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayInfoByIp(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayInfoByIpResponse();
        this.request("DescribeCloudNativeAPIGatewayInfoByIp", req, resp, cb);
    }

    /**
     * Query lane group list
     * @param {DescribeGovernanceLaneGroupsRequest} req
     * @param {function(string, DescribeGovernanceLaneGroupsResponse):void} cb
     * @public
     */
    DescribeGovernanceLaneGroups(req, cb) {
        let resp = new DescribeGovernanceLaneGroupsResponse();
        this.request("DescribeGovernanceLaneGroups", req, resp, cb);
    }

    /**
     * Modify the node health status of the upstream instance for the cloud-native gateway
     * @param {ModifyUpstreamNodeStatusRequest} req
     * @param {function(string, ModifyUpstreamNodeStatusResponse):void} cb
     * @public
     */
    ModifyUpstreamNodeStatus(req, cb) {
        let resp = new ModifyUpstreamNodeStatusResponse();
        this.request("ModifyUpstreamNodeStatus", req, resp, cb);
    }

    /**
     * This API is used to delete the traffic throttling plugin of a cloud-native gateway (Service).
     * @param {DeleteCloudNativeAPIGatewayServiceRateLimitRequest} req
     * @param {function(string, DeleteCloudNativeAPIGatewayServiceRateLimitResponse):void} cb
     * @public
     */
    DeleteCloudNativeAPIGatewayServiceRateLimit(req, cb) {
        let resp = new DeleteCloudNativeAPIGatewayServiceRateLimitResponse();
        this.request("DeleteCloudNativeAPIGatewayServiceRateLimit", req, resp, cb);
    }

    /**
     * Create a WAF-protected domain name
     * @param {CreateWafDomainsRequest} req
     * @param {function(string, CreateWafDomainsResponse):void} cb
     * @public
     */
    CreateWafDomains(req, cb) {
        let resp = new CreateWafDomainsResponse();
        this.request("CreateWafDomains", req, resp, cb);
    }

    /**
     * This API is used to obtain the service detail of the cloud-native gateway.
     * @param {DescribeOneCloudNativeAPIGatewayServiceRequest} req
     * @param {function(string, DescribeOneCloudNativeAPIGatewayServiceResponse):void} cb
     * @public
     */
    DescribeOneCloudNativeAPIGatewayService(req, cb) {
        let resp = new DescribeOneCloudNativeAPIGatewayServiceResponse();
        this.request("DescribeOneCloudNativeAPIGatewayService", req, resp, cb);
    }

    /**
     * Query the certificate list of the cloud-native gateway
     * @param {DescribeCloudNativeAPIGatewayCertificatesRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayCertificatesResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayCertificates(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayCertificatesResponse();
        this.request("DescribeCloudNativeAPIGatewayCertificates", req, resp, cb);
    }

    /**
     * This API is used to modify the traffic throttling plugin of a cloud-native gateway (Service).
     * @param {ModifyCloudNativeAPIGatewayServiceRateLimitRequest} req
     * @param {function(string, ModifyCloudNativeAPIGatewayServiceRateLimitResponse):void} cb
     * @public
     */
    ModifyCloudNativeAPIGatewayServiceRateLimit(req, cb) {
        let resp = new ModifyCloudNativeAPIGatewayServiceRateLimitResponse();
        this.request("ModifyCloudNativeAPIGatewayServiceRateLimit", req, resp, cb);
    }

    /**
     * Modify the grayscale rule of the cloud-native gateway
     * @param {ModifyCloudNativeAPIGatewayCanaryRuleRequest} req
     * @param {function(string, ModifyCloudNativeAPIGatewayCanaryRuleResponse):void} cb
     * @public
     */
    ModifyCloudNativeAPIGatewayCanaryRule(req, cb) {
        let resp = new ModifyCloudNativeAPIGatewayCanaryRuleResponse();
        this.request("ModifyCloudNativeAPIGatewayCanaryRule", req, resp, cb);
    }

    /**
     * This API is used to modify the basic information of a cloud native API gateway instance.
     * @param {ModifyCloudNativeAPIGatewayRequest} req
     * @param {function(string, ModifyCloudNativeAPIGatewayResponse):void} cb
     * @public
     */
    ModifyCloudNativeAPIGateway(req, cb) {
        let resp = new ModifyCloudNativeAPIGatewayResponse();
        this.request("ModifyCloudNativeAPIGateway", req, resp, cb);
    }

    /**
     * Unbind gateway groupings in batch with auto scaling policy
     * @param {UnbindAutoScalerResourceStrategyFromGroupsRequest} req
     * @param {function(string, UnbindAutoScalerResourceStrategyFromGroupsResponse):void} cb
     * @public
     */
    UnbindAutoScalerResourceStrategyFromGroups(req, cb) {
        let resp = new UnbindAutoScalerResourceStrategyFromGroupsResponse();
        this.request("UnbindAutoScalerResourceStrategyFromGroups", req, resp, cb);
    }

    /**
     * Delete public network configuration
     * @param {DeleteCloudNativeAPIGatewayPublicNetworkRequest} req
     * @param {function(string, DeleteCloudNativeAPIGatewayPublicNetworkResponse):void} cb
     * @public
     */
    DeleteCloudNativeAPIGatewayPublicNetwork(req, cb) {
        let resp = new DeleteCloudNativeAPIGatewayPublicNetworkResponse();
        this.request("DeleteCloudNativeAPIGatewayPublicNetwork", req, resp, cb);
    }

    /**
     * Delete a WAF-protected domain name
     * @param {DeleteWafDomainsRequest} req
     * @param {function(string, DeleteWafDomainsResponse):void} cb
     * @public
     */
    DeleteWafDomains(req, cb) {
        let resp = new DeleteWafDomainsResponse();
        this.request("DeleteWafDomains", req, resp, cb);
    }

    /**
     * Bind auto scaling policies to gateway groupings in batch
     * @param {BindAutoScalerResourceStrategyToGroupsRequest} req
     * @param {function(string, BindAutoScalerResourceStrategyToGroupsResponse):void} cb
     * @public
     */
    BindAutoScalerResourceStrategyToGroups(req, cb) {
        let resp = new BindAutoScalerResourceStrategyToGroupsResponse();
        this.request("BindAutoScalerResourceStrategyToGroups", req, resp, cb);
    }

    /**
     * This API is used to delete a cloud-native gateway service.
     * @param {DeleteCloudNativeAPIGatewayServiceRequest} req
     * @param {function(string, DeleteCloudNativeAPIGatewayServiceResponse):void} cb
     * @public
     */
    DeleteCloudNativeAPIGatewayService(req, cb) {
        let resp = new DeleteCloudNativeAPIGatewayServiceResponse();
        this.request("DeleteCloudNativeAPIGatewayService", req, resp, cb);
    }

    /**
     * This API is used to update the health check configuration of the cloud-native gateway.
     * @param {UpdateUpstreamHealthCheckConfigRequest} req
     * @param {function(string, UpdateUpstreamHealthCheckConfigResponse):void} cb
     * @public
     */
    UpdateUpstreamHealthCheckConfig(req, cb) {
        let resp = new UpdateUpstreamHealthCheckConfigResponse();
        this.request("UpdateUpstreamHealthCheckConfig", req, resp, cb);
    }

    /**
     * Create a cloud-native gateway service
     * @param {CreateCloudNativeAPIGatewayServiceRequest} req
     * @param {function(string, CreateCloudNativeAPIGatewayServiceResponse):void} cb
     * @public
     */
    CreateCloudNativeAPIGatewayService(req, cb) {
        let resp = new CreateCloudNativeAPIGatewayServiceResponse();
        this.request("CreateCloudNativeAPIGatewayService", req, resp, cb);
    }

    /**
     * Create a lane group
     * @param {CreateGovernanceLaneGroupsRequest} req
     * @param {function(string, CreateGovernanceLaneGroupsResponse):void} cb
     * @public
     */
    CreateGovernanceLaneGroups(req, cb) {
        let resp = new CreateGovernanceLaneGroupsResponse();
        this.request("CreateGovernanceLaneGroups", req, resp, cb);
    }

    /**
     * Modify the node specification information of a cloud native API gateway instance, such as node scaling or specification adjustment
     * @param {UpdateCloudNativeAPIGatewaySpecRequest} req
     * @param {function(string, UpdateCloudNativeAPIGatewaySpecResponse):void} cb
     * @public
     */
    UpdateCloudNativeAPIGatewaySpec(req, cb) {
        let resp = new UpdateCloudNativeAPIGatewaySpecResponse();
        this.request("UpdateCloudNativeAPIGatewaySpec", req, resp, cb);
    }

    /**
     * This API is used to obtain cloud native API gateway instance information.
     * @param {DescribeCloudNativeAPIGatewayRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGateway(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayResponse();
        this.request("DescribeCloudNativeAPIGateway", req, resp, cb);
    }

    /**
     * Retrieve port information of a cloud native API gateway instance
     * @param {DescribeCloudNativeAPIGatewayPortsRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayPortsResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayPorts(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayPortsResponse();
        this.request("DescribeCloudNativeAPIGatewayPorts", req, resp, cb);
    }

    /**
     * Delete a cloud-native gateway route
     * @param {DeleteCloudNativeAPIGatewayRouteRequest} req
     * @param {function(string, DeleteCloudNativeAPIGatewayRouteResponse):void} cb
     * @public
     */
    DeleteCloudNativeAPIGatewayRoute(req, cb) {
        let resp = new DeleteCloudNativeAPIGatewayRouteResponse();
        this.request("DeleteCloudNativeAPIGatewayRoute", req, resp, cb);
    }

    /**
     * Create a public network configuration
     * @param {CreateCloudNativeAPIGatewayPublicNetworkRequest} req
     * @param {function(string, CreateCloudNativeAPIGatewayPublicNetworkResponse):void} cb
     * @public
     */
    CreateCloudNativeAPIGatewayPublicNetwork(req, cb) {
        let resp = new CreateCloudNativeAPIGatewayPublicNetworkResponse();
        this.request("CreateCloudNativeAPIGatewayPublicNetwork", req, resp, cb);
    }

    /**
     * Update AS policy
     * @param {ModifyAutoScalerResourceStrategyRequest} req
     * @param {function(string, ModifyAutoScalerResourceStrategyResponse):void} cb
     * @public
     */
    ModifyAutoScalerResourceStrategy(req, cb) {
        let resp = new ModifyAutoScalerResourceStrategyResponse();
        this.request("ModifyAutoScalerResourceStrategy", req, resp, cb);
    }

    /**
     * Update the cloud-native gateway certificate
     * @param {ModifyCloudNativeAPIGatewayCertificateRequest} req
     * @param {function(string, ModifyCloudNativeAPIGatewayCertificateResponse):void} cb
     * @public
     */
    ModifyCloudNativeAPIGatewayCertificate(req, cb) {
        let resp = new ModifyCloudNativeAPIGatewayCertificateResponse();
        this.request("ModifyCloudNativeAPIGatewayCertificate", req, resp, cb);
    }

    /**
     * Create a gateway service source
     * @param {CreateNativeGatewayServiceSourceRequest} req
     * @param {function(string, CreateNativeGatewayServiceSourceResponse):void} cb
     * @public
     */
    CreateNativeGatewayServiceSource(req, cb) {
        let resp = new CreateNativeGatewayServiceSourceResponse();
        this.request("CreateNativeGatewayServiceSource", req, resp, cb);
    }

    /**
     * This API is used to delete the grayscale rule of the cloud-native gateway.
     * @param {DeleteCloudNativeAPIGatewayCanaryRuleRequest} req
     * @param {function(string, DeleteCloudNativeAPIGatewayCanaryRuleResponse):void} cb
     * @public
     */
    DeleteCloudNativeAPIGatewayCanaryRule(req, cb) {
        let resp = new DeleteCloudNativeAPIGatewayCanaryRuleResponse();
        this.request("DeleteCloudNativeAPIGatewayCanaryRule", req, resp, cb);
    }

    /**
     * This API is used to obtain the cloud native API gateway instance list.
     * @param {DescribeCloudNativeAPIGatewaysRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewaysResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGateways(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewaysResponse();
        this.request("DescribeCloudNativeAPIGateways", req, resp, cb);
    }

    /**
     * This API is used to create a cloud-native gateway certificate
     * @param {CreateCloudNativeAPIGatewayCertificateRequest} req
     * @param {function(string, CreateCloudNativeAPIGatewayCertificateResponse):void} cb
     * @public
     */
    CreateCloudNativeAPIGatewayCertificate(req, cb) {
        let resp = new CreateCloudNativeAPIGatewayCertificateResponse();
        this.request("CreateCloudNativeAPIGatewayCertificate", req, resp, cb);
    }

    /**
     * Query the service list of the cloud-native gateway
     * @param {DescribeCloudNativeAPIGatewayServicesRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayServicesResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayServices(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayServicesResponse();
        this.request("DescribeCloudNativeAPIGatewayServices", req, resp, cb);
    }

    /**
     * Lightweight query the service list of the cloud-native gateway
     * @param {DescribeCloudNativeAPIGatewayServicesLightRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayServicesLightResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayServicesLight(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayServicesLightResponse();
        this.request("DescribeCloudNativeAPIGatewayServicesLight", req, resp, cb);
    }

    /**
     * Create a lane group
     * @param {ModifyGovernanceLaneGroupsRequest} req
     * @param {function(string, ModifyGovernanceLaneGroupsResponse):void} cb
     * @public
     */
    ModifyGovernanceLaneGroups(req, cb) {
        let resp = new ModifyGovernanceLaneGroupsResponse();
        this.request("ModifyGovernanceLaneGroups", req, resp, cb);
    }

    /**
     * Modify the basic information of a cloud native API gateway instance group
     * @param {ModifyNativeGatewayServerGroupRequest} req
     * @param {function(string, ModifyNativeGatewayServerGroupResponse):void} cb
     * @public
     */
    ModifyNativeGatewayServerGroup(req, cb) {
        let resp = new ModifyNativeGatewayServerGroupResponse();
        this.request("ModifyNativeGatewayServerGroup", req, resp, cb);
    }

    /**
     * Query the routing list of the cloud-native gateway
     * @param {DescribeCloudNativeAPIGatewayRoutesRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayRoutesResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayRoutes(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayRoutesResponse();
        this.request("DescribeCloudNativeAPIGatewayRoutes", req, resp, cb);
    }

    /**
     * View gateway groupings bound to an auto scaling policy
     * @param {DescribeAutoScalerResourceStrategyBindingGroupsRequest} req
     * @param {function(string, DescribeAutoScalerResourceStrategyBindingGroupsResponse):void} cb
     * @public
     */
    DescribeAutoScalerResourceStrategyBindingGroups(req, cb) {
        let resp = new DescribeAutoScalerResourceStrategyBindingGroupsResponse();
        this.request("DescribeAutoScalerResourceStrategyBindingGroups", req, resp, cb);
    }

    /**
     * This API is used to modify the traffic throttling plugin of a cloud-native gateway (Route).
     * @param {ModifyCloudNativeAPIGatewayRouteRateLimitRequest} req
     * @param {function(string, ModifyCloudNativeAPIGatewayRouteRateLimitResponse):void} cb
     * @public
     */
    ModifyCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        let resp = new ModifyCloudNativeAPIGatewayRouteRateLimitResponse();
        this.request("ModifyCloudNativeAPIGatewayRouteRateLimit", req, resp, cb);
    }

    /**
     * Disables WAF protection
     * @param {CloseWafProtectionRequest} req
     * @param {function(string, CloseWafProtectionResponse):void} cb
     * @public
     */
    CloseWafProtection(req, cb) {
        let resp = new CloseWafProtectionResponse();
        this.request("CloseWafProtection", req, resp, cb);
    }

    /**
     * Refresh the upstream instance list of the gateway, only supported for the IPList service type
     * @param {UpdateUpstreamTargetsRequest} req
     * @param {function(string, UpdateUpstreamTargetsResponse):void} cb
     * @public
     */
    UpdateUpstreamTargets(req, cb) {
        let resp = new UpdateUpstreamTargetsResponse();
        this.request("UpdateUpstreamTargets", req, resp, cb);
    }

    /**
     * Create a cloud native API gateway instance
     * @param {CreateCloudNativeAPIGatewayRequest} req
     * @param {function(string, CreateCloudNativeAPIGatewayResponse):void} cb
     * @public
     */
    CreateCloudNativeAPIGateway(req, cb) {
        let resp = new CreateCloudNativeAPIGatewayResponse();
        this.request("CreateCloudNativeAPIGateway", req, resp, cb);
    }

    /**
     * Query the traffic throttling plugin of a cloud-native gateway (Route).
     * @param {DescribeCloudNativeAPIGatewayRouteRateLimitRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayRouteRateLimitResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayRouteRateLimitResponse();
        this.request("DescribeCloudNativeAPIGatewayRouteRateLimit", req, resp, cb);
    }

    /**
     * Query WAF protection status
     * @param {DescribeWafProtectionRequest} req
     * @param {function(string, DescribeWafProtectionResponse):void} cb
     * @public
     */
    DescribeWafProtection(req, cb) {
        let resp = new DescribeWafProtectionResponse();
        this.request("DescribeWafProtection", req, resp, cb);
    }

    /**
     * This API is used to obtain cloud native API gateway instance network configuration information
     * @param {DescribeCloudNativeAPIGatewayConfigRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayConfigResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayConfig(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayConfigResponse();
        this.request("DescribeCloudNativeAPIGatewayConfig", req, resp, cb);
    }

    /**
     * Modify a cloud-native gateway service
     * @param {ModifyCloudNativeAPIGatewayServiceRequest} req
     * @param {function(string, ModifyCloudNativeAPIGatewayServiceResponse):void} cb
     * @public
     */
    ModifyCloudNativeAPIGatewayService(req, cb) {
        let resp = new ModifyCloudNativeAPIGatewayServiceResponse();
        this.request("ModifyCloudNativeAPIGatewayService", req, resp, cb);
    }

    /**
     * This API is used to get a cloud-native gateway node list
     * @param {DescribeCloudNativeAPIGatewayNodesRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayNodesResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayNodes(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayNodesResponse();
        this.request("DescribeCloudNativeAPIGatewayNodes", req, resp, cb);
    }

    /**
     * Create a grayscale rule for the cloud-native gateway
     * @param {CreateCloudNativeAPIGatewayCanaryRuleRequest} req
     * @param {function(string, CreateCloudNativeAPIGatewayCanaryRuleResponse):void} cb
     * @public
     */
    CreateCloudNativeAPIGatewayCanaryRule(req, cb) {
        let resp = new CreateCloudNativeAPIGatewayCanaryRuleResponse();
        this.request("CreateCloudNativeAPIGatewayCanaryRule", req, resp, cb);
    }

    /**
     * Delete a gateway service source instance
     * @param {DeleteNativeGatewayServiceSourceRequest} req
     * @param {function(string, DeleteNativeGatewayServiceSourceResponse):void} cb
     * @public
     */
    DeleteNativeGatewayServiceSource(req, cb) {
        let resp = new DeleteNativeGatewayServiceSourceResponse();
        this.request("DeleteNativeGatewayServiceSource", req, resp, cb);
    }

    /**
     * This API is used to delete a cloud-native gateway cross-domain plug-in.
     * @param {DeleteCloudNativeAPIGatewayCORSRequest} req
     * @param {function(string, DeleteCloudNativeAPIGatewayCORSResponse):void} cb
     * @public
     */
    DeleteCloudNativeAPIGatewayCORS(req, cb) {
        let resp = new DeleteCloudNativeAPIGatewayCORSResponse();
        this.request("DeleteCloudNativeAPIGatewayCORS", req, resp, cb);
    }

    /**
     * Enable WAF protection
     * @param {OpenWafProtectionRequest} req
     * @param {function(string, OpenWafProtectionResponse):void} cb
     * @public
     */
    OpenWafProtection(req, cb) {
        let resp = new OpenWafProtectionResponse();
        this.request("OpenWafProtection", req, resp, cb);
    }

    /**
     * Create or edit a cloud-native gateway cross-domain configuration
     * @param {CreateOrModifyCloudNativeAPIGatewayCORSRequest} req
     * @param {function(string, CreateOrModifyCloudNativeAPIGatewayCORSResponse):void} cb
     * @public
     */
    CreateOrModifyCloudNativeAPIGatewayCORS(req, cb) {
        let resp = new CreateOrModifyCloudNativeAPIGatewayCORSResponse();
        this.request("CreateOrModifyCloudNativeAPIGatewayCORS", req, resp, cb);
    }

    /**
     * View AS policy list
     * @param {DescribeAutoScalerResourceStrategiesRequest} req
     * @param {function(string, DescribeAutoScalerResourceStrategiesResponse):void} cb
     * @public
     */
    DescribeAutoScalerResourceStrategies(req, cb) {
        let resp = new DescribeAutoScalerResourceStrategiesResponse();
        this.request("DescribeAutoScalerResourceStrategies", req, resp, cb);
    }

    /**
     * This API is used to create a traffic throttling plugin for a cloud-native gateway
     * @param {CreateCloudNativeAPIGatewayServiceRateLimitRequest} req
     * @param {function(string, CreateCloudNativeAPIGatewayServiceRateLimitResponse):void} cb
     * @public
     */
    CreateCloudNativeAPIGatewayServiceRateLimit(req, cb) {
        let resp = new CreateCloudNativeAPIGatewayServiceRateLimitResponse();
        this.request("CreateCloudNativeAPIGatewayServiceRateLimit", req, resp, cb);
    }

    /**
     * Delete a cloud native API gateway instance
     * @param {DeleteCloudNativeAPIGatewayRequest} req
     * @param {function(string, DeleteCloudNativeAPIGatewayResponse):void} cb
     * @public
     */
    DeleteCloudNativeAPIGateway(req, cb) {
        let resp = new DeleteCloudNativeAPIGatewayResponse();
        this.request("DeleteCloudNativeAPIGateway", req, resp, cb);
    }

    /**
     * This API is used to modify the basic information of a cloud native API gateway instance network, such as bandwidth and description, as well as specification upgrade. Only modification of client public network or private network information is supported.
     * @param {ModifyNetworkBasicInfoRequest} req
     * @param {function(string, ModifyNetworkBasicInfoResponse):void} cb
     * @public
     */
    ModifyNetworkBasicInfo(req, cb) {
        let resp = new ModifyNetworkBasicInfoResponse();
        this.request("ModifyNetworkBasicInfo", req, resp, cb);
    }

    /**
     * Query a WAF-protected domain name
     * @param {DescribeWafDomainsRequest} req
     * @param {function(string, DescribeWafDomainsResponse):void} cb
     * @public
     */
    DescribeWafDomains(req, cb) {
        let resp = new DescribeWafDomainsResponse();
        this.request("DescribeWafDomains", req, resp, cb);
    }

    /**
     * Modify the access policy of the Kong cloud native API gateway instance to support allowlist or blocklist.
     * @param {ModifyNetworkAccessStrategyRequest} req
     * @param {function(string, ModifyNetworkAccessStrategyResponse):void} cb
     * @public
     */
    ModifyNetworkAccessStrategy(req, cb) {
        let resp = new ModifyNetworkAccessStrategyResponse();
        this.request("ModifyNetworkAccessStrategy", req, resp, cb);
    }

    /**
     * Query the public network details of a cloud native API gateway instance
     * @param {DescribePublicNetworkRequest} req
     * @param {function(string, DescribePublicNetworkResponse):void} cb
     * @public
     */
    DescribePublicNetwork(req, cb) {
        let resp = new DescribePublicNetworkResponse();
        this.request("DescribePublicNetwork", req, resp, cb);
    }

    /**
     * This API is used to delete a cloud-native gateway cert.
     * @param {DeleteCloudNativeAPIGatewayCertificateRequest} req
     * @param {function(string, DeleteCloudNativeAPIGatewayCertificateResponse):void} cb
     * @public
     */
    DeleteCloudNativeAPIGatewayCertificate(req, cb) {
        let resp = new DeleteCloudNativeAPIGatewayCertificateResponse();
        this.request("DeleteCloudNativeAPIGatewayCertificate", req, resp, cb);
    }

    /**
     * This API is used to create a cloud-native gateway route.
     * @param {CreateCloudNativeAPIGatewayRouteRequest} req
     * @param {function(string, CreateCloudNativeAPIGatewayRouteResponse):void} cb
     * @public
     */
    CreateCloudNativeAPIGatewayRoute(req, cb) {
        let resp = new CreateCloudNativeAPIGatewayRouteResponse();
        this.request("CreateCloudNativeAPIGatewayRoute", req, resp, cb);
    }

    /**
     * Modify the certificate information of a cloud-native gateway
     * @param {UpdateCloudNativeAPIGatewayCertificateInfoRequest} req
     * @param {function(string, UpdateCloudNativeAPIGatewayCertificateInfoResponse):void} cb
     * @public
     */
    UpdateCloudNativeAPIGatewayCertificateInfo(req, cb) {
        let resp = new UpdateCloudNativeAPIGatewayCertificateInfoResponse();
        this.request("UpdateCloudNativeAPIGatewayCertificateInfo", req, resp, cb);
    }

    /**
     * Create a Cloud Native Gateway Engine group
     * @param {CreateNativeGatewayServerGroupRequest} req
     * @param {function(string, CreateNativeGatewayServerGroupResponse):void} cb
     * @public
     */
    CreateNativeGatewayServerGroup(req, cb) {
        let resp = new CreateNativeGatewayServerGroupResponse();
        this.request("CreateNativeGatewayServerGroup", req, resp, cb);
    }

    /**
     * This API is used to delete a traffic throttling plugin of a cloud-native gateway (Route).
     * @param {DeleteCloudNativeAPIGatewayRouteRateLimitRequest} req
     * @param {function(string, DeleteCloudNativeAPIGatewayRouteRateLimitResponse):void} cb
     * @public
     */
    DeleteCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        let resp = new DeleteCloudNativeAPIGatewayRouteRateLimitResponse();
        this.request("DeleteCloudNativeAPIGatewayRouteRateLimit", req, resp, cb);
    }

    /**
     * Create AS policy
     * @param {CreateAutoScalerResourceStrategyRequest} req
     * @param {function(string, CreateAutoScalerResourceStrategyResponse):void} cb
     * @public
     */
    CreateAutoScalerResourceStrategy(req, cb) {
        let resp = new CreateAutoScalerResourceStrategyResponse();
        this.request("CreateAutoScalerResourceStrategy", req, resp, cb);
    }

    /**
     * This API is used to create a cloud-native gateway traffic throttling plugin.
     * @param {CreateCloudNativeAPIGatewayRouteRateLimitRequest} req
     * @param {function(string, CreateCloudNativeAPIGatewayRouteRateLimitResponse):void} cb
     * @public
     */
    CreateCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        let resp = new CreateCloudNativeAPIGatewayRouteRateLimitResponse();
        this.request("CreateCloudNativeAPIGatewayRouteRateLimit", req, resp, cb);
    }

    /**
     * Query cloud native gateway group information
     * @param {DescribeNativeGatewayServerGroupsRequest} req
     * @param {function(string, DescribeNativeGatewayServerGroupsResponse):void} cb
     * @public
     */
    DescribeNativeGatewayServerGroups(req, cb) {
        let resp = new DescribeNativeGatewayServerGroupsResponse();
        this.request("DescribeNativeGatewayServerGroups", req, resp, cb);
    }

    /**
     * Query the certificate detail of one cloud-native gateway
     * @param {DescribeCloudNativeAPIGatewayCertificateDetailsRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayCertificateDetailsResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayCertificateDetails(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayCertificateDetailsResponse();
        this.request("DescribeCloudNativeAPIGatewayCertificateDetails", req, resp, cb);
    }

    /**
     * Delete AS policy
     * @param {DeleteAutoScalerResourceStrategyRequest} req
     * @param {function(string, DeleteAutoScalerResourceStrategyResponse):void} cb
     * @public
     */
    DeleteAutoScalerResourceStrategy(req, cb) {
        let resp = new DeleteAutoScalerResourceStrategyResponse();
        this.request("DeleteAutoScalerResourceStrategy", req, resp, cb);
    }

    /**
     * This API is used to modify a cloud-native gateway route.
     * @param {ModifyCloudNativeAPIGatewayRouteRequest} req
     * @param {function(string, ModifyCloudNativeAPIGatewayRouteResponse):void} cb
     * @public
     */
    ModifyCloudNativeAPIGatewayRoute(req, cb) {
        let resp = new ModifyCloudNativeAPIGatewayRouteResponse();
        this.request("ModifyCloudNativeAPIGatewayRoute", req, resp, cb);
    }

    /**
     * Delete a Gateway Instance Group
     * @param {DeleteNativeGatewayServerGroupRequest} req
     * @param {function(string, DeleteNativeGatewayServerGroupResponse):void} cb
     * @public
     */
    DeleteNativeGatewayServerGroup(req, cb) {
        let resp = new DeleteNativeGatewayServerGroupResponse();
        this.request("DeleteNativeGatewayServerGroup", req, resp, cb);
    }

    /**
     * Modify the gateway service source
     * @param {ModifyNativeGatewayServiceSourceRequest} req
     * @param {function(string, ModifyNativeGatewayServiceSourceResponse):void} cb
     * @public
     */
    ModifyNativeGatewayServiceSource(req, cb) {
        let resp = new ModifyNativeGatewayServiceSourceResponse();
        this.request("ModifyNativeGatewayServiceSource", req, resp, cb);
    }

    /**
     * Query public IP address info
     * @param {DescribePublicAddressConfigRequest} req
     * @param {function(string, DescribePublicAddressConfigResponse):void} cb
     * @public
     */
    DescribePublicAddressConfig(req, cb) {
        let resp = new DescribePublicAddressConfigResponse();
        this.request("DescribePublicAddressConfig", req, resp, cb);
    }

    /**
     * Query the grayscale rule list of the cloud-native gateway
     * @param {DescribeCloudNativeAPIGatewayCanaryRulesRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayCanaryRulesResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayCanaryRules(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayCanaryRulesResponse();
        this.request("DescribeCloudNativeAPIGatewayCanaryRules", req, resp, cb);
    }

    /**
     * Query cloud-native gateway cross-domain configuration
     * @param {DescribeCloudNativeAPIGatewayCORSRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayCORSResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayCORS(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayCORSResponse();
        this.request("DescribeCloudNativeAPIGatewayCORS", req, resp, cb);
    }

    /**
     * This API is used to query the traffic throttling plugin of a cloud-native gateway (Service).
     * @param {DescribeCloudNativeAPIGatewayServiceRateLimitRequest} req
     * @param {function(string, DescribeCloudNativeAPIGatewayServiceRateLimitResponse):void} cb
     * @public
     */
    DescribeCloudNativeAPIGatewayServiceRateLimit(req, cb) {
        let resp = new DescribeCloudNativeAPIGatewayServiceRateLimitResponse();
        this.request("DescribeCloudNativeAPIGatewayServiceRateLimit", req, resp, cb);
    }


}
module.exports = TseClient;
