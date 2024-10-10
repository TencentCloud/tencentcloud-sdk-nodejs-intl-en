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
const IPStrategyApiStatus = models.IPStrategyApiStatus;
const UnBindSubDomainResponse = models.UnBindSubDomainResponse;
const UpdateApiKeyRequest = models.UpdateApiKeyRequest;
const Service = models.Service;
const DeleteAPIDocRequest = models.DeleteAPIDocRequest;
const AttachedPluginInfo = models.AttachedPluginInfo;
const ApiUsagePlanSet = models.ApiUsagePlanSet;
const DescribeAPIDocDetailRequest = models.DescribeAPIDocDetailRequest;
const CreateApiResultInfo = models.CreateApiResultInfo;
const ModifyAPIDocResponse = models.ModifyAPIDocResponse;
const AttachedApiSummary = models.AttachedApiSummary;
const DescribeUsagePlanRequest = models.DescribeUsagePlanRequest;
const DeleteUsagePlanResponse = models.DeleteUsagePlanResponse;
const ImportOpenApiResponse = models.ImportOpenApiResponse;
const DisableApiKeyResponse = models.DisableApiKeyResponse;
const DescribeApiResponse = models.DescribeApiResponse;
const DescribeServiceForApiAppRequest = models.DescribeServiceForApiAppRequest;
const UnReleaseServiceRequest = models.UnReleaseServiceRequest;
const DetachPluginRequest = models.DetachPluginRequest;
const ModifySubDomainRequest = models.ModifySubDomainRequest;
const DescribeApiAppsStatusRequest = models.DescribeApiAppsStatusRequest;
const DescribeServiceUsagePlanRequest = models.DescribeServiceUsagePlanRequest;
const DescribeServiceEnvironmentListResponse = models.DescribeServiceEnvironmentListResponse;
const DescribeApiAppBindApisStatusRequest = models.DescribeApiAppBindApisStatusRequest;
const ModifyApiResponse = models.ModifyApiResponse;
const DescribeApiResultServiceParametersInfo = models.DescribeApiResultServiceParametersInfo;
const CreateApiRspSet = models.CreateApiRspSet;
const ApiInfo = models.ApiInfo;
const TargetServicesReq = models.TargetServicesReq;
const DescribeUsagePlansStatusRequest = models.DescribeUsagePlansStatusRequest;
const TsfLoadBalanceConfResp = models.TsfLoadBalanceConfResp;
const CreateIPStrategyRequest = models.CreateIPStrategyRequest;
const IPStrategy = models.IPStrategy;
const DescribeUsagePlansStatusResponse = models.DescribeUsagePlansStatusResponse;
const HealthCheckConf = models.HealthCheckConf;
const DeleteUpstreamRequest = models.DeleteUpstreamRequest;
const Plugin = models.Plugin;
const UnbindApiAppResponse = models.UnbindApiAppResponse;
const ModifyUpstreamRequest = models.ModifyUpstreamRequest;
const DescribeApiUsagePlanResponse = models.DescribeApiUsagePlanResponse;
const DeleteIPStrategyRequest = models.DeleteIPStrategyRequest;
const DescribeApiAppRequest = models.DescribeApiAppRequest;
const DescribePluginResponse = models.DescribePluginResponse;
const DescribeUpstreamBindApisRequest = models.DescribeUpstreamBindApisRequest;
const DescribePluginsByApiResponse = models.DescribePluginsByApiResponse;
const DomainSets = models.DomainSets;
const K8sService = models.K8sService;
const DeleteUsagePlanRequest = models.DeleteUsagePlanRequest;
const DeleteServiceRequest = models.DeleteServiceRequest;
const DescribeApiEnvironmentStrategyRequest = models.DescribeApiEnvironmentStrategyRequest;
const UpstreamHealthCheckerReqHeaders = models.UpstreamHealthCheckerReqHeaders;
const ServiceEnvironmentStrategy = models.ServiceEnvironmentStrategy;
const DescribeServiceForApiAppResponse = models.DescribeServiceForApiAppResponse;
const ServiceConfig = models.ServiceConfig;
const DeleteApiAppResponse = models.DeleteApiAppResponse;
const DescribeServiceResponse = models.DescribeServiceResponse;
const UsagePlanEnvironmentStatus = models.UsagePlanEnvironmentStatus;
const ModifyIPStrategyResponse = models.ModifyIPStrategyResponse;
const BindSubDomainResponse = models.BindSubDomainResponse;
const BindEnvironmentResponse = models.BindEnvironmentResponse;
const Tag = models.Tag;
const DescribeApiBindApiAppsStatusResponse = models.DescribeApiBindApiAppsStatusResponse;
const ConstantParameter = models.ConstantParameter;
const DescribeApiForApiAppRequest = models.DescribeApiForApiAppRequest;
const APIDocs = models.APIDocs;
const LogQuery = models.LogQuery;
const ServiceParameter = models.ServiceParameter;
const ModifyServiceResponse = models.ModifyServiceResponse;
const DisableApiKeyRequest = models.DisableApiKeyRequest;
const PathMapping = models.PathMapping;
const UnBindIPStrategyResponse = models.UnBindIPStrategyResponse;
const ModifyPluginRequest = models.ModifyPluginRequest;
const BindIPStrategyResponse = models.BindIPStrategyResponse;
const AvailableApiInfo = models.AvailableApiInfo;
const DescribeApisStatusRequest = models.DescribeApisStatusRequest;
const DeleteServiceSubDomainMappingRequest = models.DeleteServiceSubDomainMappingRequest;
const BindApiAppRequest = models.BindApiAppRequest;
const DescribeIPStrategyResponse = models.DescribeIPStrategyResponse;
const DescribePluginRequest = models.DescribePluginRequest;
const AttachedApiInfo = models.AttachedApiInfo;
const CreateApiResponse = models.CreateApiResponse;
const DescribeIPStrategyApisStatusRequest = models.DescribeIPStrategyApisStatusRequest;
const UnBindEnvironmentRequest = models.UnBindEnvironmentRequest;
const DescribeUpstreamInfo = models.DescribeUpstreamInfo;
const ModifyApiEnvironmentStrategyRequest = models.ModifyApiEnvironmentStrategyRequest;
const ServiceReleaseHistory = models.ServiceReleaseHistory;
const ModifyUsagePlanResponse = models.ModifyUsagePlanResponse;
const IPStrategiesStatus = models.IPStrategiesStatus;
const CreateUsagePlanResponse = models.CreateUsagePlanResponse;
const ReqParameter = models.ReqParameter;
const DeletePluginRequest = models.DeletePluginRequest;
const Base64EncodedTriggerRule = models.Base64EncodedTriggerRule;
const RequestConfig = models.RequestConfig;
const DeleteApiKeyResponse = models.DeleteApiKeyResponse;
const UpstreamInfo = models.UpstreamInfo;
const UsagePlan = models.UsagePlan;
const DescribeServiceReleaseVersionRequest = models.DescribeServiceReleaseVersionRequest;
const DescribeUsagePlanSecretIdsRequest = models.DescribeUsagePlanSecretIdsRequest;
const DescribeLogSearchResponse = models.DescribeLogSearchResponse;
const ModifyAPIDocRequest = models.ModifyAPIDocRequest;
const UnBindIPStrategyRequest = models.UnBindIPStrategyRequest;
const DescribeUpstreamsResponse = models.DescribeUpstreamsResponse;
const DescribePluginApisRequest = models.DescribePluginApisRequest;
const ResponseErrorCodeReq = models.ResponseErrorCodeReq;
const CreateServiceRequest = models.CreateServiceRequest;
const DescribeIPStrategysStatusRequest = models.DescribeIPStrategysStatusRequest;
const DemoteServiceUsagePlanResponse = models.DemoteServiceUsagePlanResponse;
const DescribePluginApisResponse = models.DescribePluginApisResponse;
const EnableApiKeyResponse = models.EnableApiKeyResponse;
const DeleteApiAppRequest = models.DeleteApiAppRequest;
const UnReleaseServiceResponse = models.UnReleaseServiceResponse;
const CreateAPIDocResponse = models.CreateAPIDocResponse;
const DescribeServiceRequest = models.DescribeServiceRequest;
const UsagePlansStatus = models.UsagePlansStatus;
const CreateUsagePlanRequest = models.CreateUsagePlanRequest;
const DescribeUsagePlanSecretIdsResponse = models.DescribeUsagePlanSecretIdsResponse;
const CreatePluginRequest = models.CreatePluginRequest;
const MicroServiceReq = models.MicroServiceReq;
const ModifySubDomainResponse = models.ModifySubDomainResponse;
const DescribeServiceSubDomainMappingsResponse = models.DescribeServiceSubDomainMappingsResponse;
const BindSecretIdsRequest = models.BindSecretIdsRequest;
const UnBindEnvironmentResponse = models.UnBindEnvironmentResponse;
const ModifyUpstreamResultInfo = models.ModifyUpstreamResultInfo;
const DeleteApiKeyRequest = models.DeleteApiKeyRequest;
const DescribeApisStatusResultInfo = models.DescribeApisStatusResultInfo;
const DescribeIPStrategyApisStatusResponse = models.DescribeIPStrategyApisStatusResponse;
const ModifyApiAppResponse = models.ModifyApiAppResponse;
const UpdateApiAppKeyRequest = models.UpdateApiAppKeyRequest;
const ApigatewayTags = models.ApigatewayTags;
const DomainSetList = models.DomainSetList;
const ServicesStatus = models.ServicesStatus;
const DescribeApiKeyResponse = models.DescribeApiKeyResponse;
const ModifyApiIncrementResponse = models.ModifyApiIncrementResponse;
const ModifyApiRequest = models.ModifyApiRequest;
const DescribeAllPluginApisResponse = models.DescribeAllPluginApisResponse;
const ModifyUsagePlanRequest = models.ModifyUsagePlanRequest;
const ApiRequestConfig = models.ApiRequestConfig;
const ModifyServiceRequest = models.ModifyServiceRequest;
const DescribeAllPluginApisRequest = models.DescribeAllPluginApisRequest;
const ApiIdStatus = models.ApiIdStatus;
const CreateApiRequest = models.CreateApiRequest;
const DescribeServiceEnvironmentStrategyRequest = models.DescribeServiceEnvironmentStrategyRequest;
const DescribeUpstreamBindApisResponse = models.DescribeUpstreamBindApisResponse;
const ReleaseServiceRequest = models.ReleaseServiceRequest;
const DeleteServiceResponse = models.DeleteServiceResponse;
const DescribeServiceEnvironmentReleaseHistoryResponse = models.DescribeServiceEnvironmentReleaseHistoryResponse;
const Environment = models.Environment;
const DescribeAPIDocsRequest = models.DescribeAPIDocsRequest;
const DescribePluginsByApiRequest = models.DescribePluginsByApiRequest;
const ServiceReleaseHistoryInfo = models.ServiceReleaseHistoryInfo;
const CreatePluginResponse = models.CreatePluginResponse;
const UsagePlanBindSecret = models.UsagePlanBindSecret;
const K8sLabel = models.K8sLabel;
const ReleaseServiceResponse = models.ReleaseServiceResponse;
const APIDocInfo = models.APIDocInfo;
const CosConfig = models.CosConfig;
const ModifyApiIncrementRequest = models.ModifyApiIncrementRequest;
const ServiceUsagePlanSet = models.ServiceUsagePlanSet;
const CreateUpstreamRequest = models.CreateUpstreamRequest;
const ModifyServiceEnvironmentStrategyResponse = models.ModifyServiceEnvironmentStrategyResponse;
const UpdateApiKeyResponse = models.UpdateApiKeyResponse;
const DescribeApiBindApiAppsStatusRequest = models.DescribeApiBindApiAppsStatusRequest;
const DescribeApisStatusResponse = models.DescribeApisStatusResponse;
const DescribeApiKeysStatusRequest = models.DescribeApiKeysStatusRequest;
const DemoteServiceUsagePlanRequest = models.DemoteServiceUsagePlanRequest;
const BindSecretIdsResponse = models.BindSecretIdsResponse;
const CreateApiRsp = models.CreateApiRsp;
const UsagePlanBindEnvironment = models.UsagePlanBindEnvironment;
const DeleteApiRequest = models.DeleteApiRequest;
const DescribeServiceSubDomainMappingsRequest = models.DescribeServiceSubDomainMappingsRequest;
const DescribeApiAppResponse = models.DescribeApiAppResponse;
const OauthConfig = models.OauthConfig;
const DescribeApiAppsStatusResponse = models.DescribeApiAppsStatusResponse;
const ServiceSubDomainMappings = models.ServiceSubDomainMappings;
const DescribeApiKeyRequest = models.DescribeApiKeyRequest;
const DescribeAPIDocDetailResponse = models.DescribeAPIDocDetailResponse;
const Filter = models.Filter;
const BindApiAppResponse = models.BindApiAppResponse;
const UsagePlanBindSecretStatus = models.UsagePlanBindSecretStatus;
const DeleteServiceSubDomainMappingResponse = models.DeleteServiceSubDomainMappingResponse;
const CreateApiKeyResponse = models.CreateApiKeyResponse;
const DescribeUpstreamsRequest = models.DescribeUpstreamsRequest;
const UsagePlanEnvironment = models.UsagePlanEnvironment;
const ModifyIPStrategyRequest = models.ModifyIPStrategyRequest;
const ModifyPluginResponse = models.ModifyPluginResponse;
const UnBindSecretIdsRequest = models.UnBindSecretIdsRequest;
const ApiEnvironmentStrategy = models.ApiEnvironmentStrategy;
const CreateUpstreamResponse = models.CreateUpstreamResponse;
const ResetAPIDocPasswordRequest = models.ResetAPIDocPasswordRequest;
const ApiUsagePlan = models.ApiUsagePlan;
const IPStrategyApi = models.IPStrategyApi;
const DescribeAPIDocsResponse = models.DescribeAPIDocsResponse;
const DetachPluginResponse = models.DetachPluginResponse;
const DeletePluginResponse = models.DeletePluginResponse;
const DescribeUpstreamBindApis = models.DescribeUpstreamBindApis;
const ModifyServiceEnvironmentStrategyRequest = models.ModifyServiceEnvironmentStrategyRequest;
const CreateAPIDocRequest = models.CreateAPIDocRequest;
const DescribeApiAppBindApisStatusResponse = models.DescribeApiAppBindApisStatusResponse;
const DescribeServiceSubDomainsRequest = models.DescribeServiceSubDomainsRequest;
const ModifyApiAppRequest = models.ModifyApiAppRequest;
const ReleaseService = models.ReleaseService;
const DescribeUsagePlanEnvironmentsResponse = models.DescribeUsagePlanEnvironmentsResponse;
const DescribeServiceSubDomainsResponse = models.DescribeServiceSubDomainsResponse;
const AttachPluginRequest = models.AttachPluginRequest;
const DescribeApisStatusResultApiIdStatusSetInfo = models.DescribeApisStatusResultApiIdStatusSetInfo;
const ModifyApiEnvironmentStrategyResponse = models.ModifyApiEnvironmentStrategyResponse;
const BindSubDomainRequest = models.BindSubDomainRequest;
const ApiAppInfos = models.ApiAppInfos;
const DescribeServiceReleaseVersionResultVersionListInfo = models.DescribeServiceReleaseVersionResultVersionListInfo;
const CreateIPStrategyResponse = models.CreateIPStrategyResponse;
const DeleteApiResponse = models.DeleteApiResponse;
const BindIPStrategyRequest = models.BindIPStrategyRequest;
const UpdateServiceRequest = models.UpdateServiceRequest;
const BuildAPIDocResponse = models.BuildAPIDocResponse;
const ErrorCodes = models.ErrorCodes;
const DescribeServiceEnvironmentListRequest = models.DescribeServiceEnvironmentListRequest;
const ServiceEnvironmentStrategyStatus = models.ServiceEnvironmentStrategyStatus;
const MicroService = models.MicroService;
const DescribeApiEnvironmentStrategyResponse = models.DescribeApiEnvironmentStrategyResponse;
const DescribeApiRequest = models.DescribeApiRequest;
const ApiAppInfo = models.ApiAppInfo;
const DeleteIPStrategyResponse = models.DeleteIPStrategyResponse;
const ApiInfoSummary = models.ApiInfoSummary;
const ApiKey = models.ApiKey;
const BindApiInfo = models.BindApiInfo;
const ApiAppApiInfo = models.ApiAppApiInfo;
const DescribeUsagePlanResponse = models.DescribeUsagePlanResponse;
const ApiEnvironmentStrategyStatus = models.ApiEnvironmentStrategyStatus;
const AttachPluginResponse = models.AttachPluginResponse;
const BindEnvironmentRequest = models.BindEnvironmentRequest;
const ModifyUpstreamResponse = models.ModifyUpstreamResponse;
const DescribeIPStrategyRequest = models.DescribeIPStrategyRequest;
const DescribeApiForApiAppResponse = models.DescribeApiForApiAppResponse;
const EnvironmentStrategy = models.EnvironmentStrategy;
const DescribeUsagePlanEnvironmentsRequest = models.DescribeUsagePlanEnvironmentsRequest;
const ImportOpenApiRequest = models.ImportOpenApiRequest;
const DescribeServiceReleaseVersionResponse = models.DescribeServiceReleaseVersionResponse;
const UpstreamNode = models.UpstreamNode;
const ApiAppApiInfos = models.ApiAppApiInfos;
const DeleteUpstreamResponse = models.DeleteUpstreamResponse;
const UpdateServiceResponse = models.UpdateServiceResponse;
const UsagePlanInfo = models.UsagePlanInfo;
const DescribeServiceEnvironmentReleaseHistoryRequest = models.DescribeServiceEnvironmentReleaseHistoryRequest;
const UnbindApiAppRequest = models.UnbindApiAppRequest;
const CreateServiceResponse = models.CreateServiceResponse;
const DeleteAPIDocResponse = models.DeleteAPIDocResponse;
const DescribeServiceEnvironmentStrategyResponse = models.DescribeServiceEnvironmentStrategyResponse;
const DesApisStatus = models.DesApisStatus;
const DescribeApiKeysStatusResponse = models.DescribeApiKeysStatusResponse;
const UsagePlanStatusInfo = models.UsagePlanStatusInfo;
const DescribeLogSearchRequest = models.DescribeLogSearchRequest;
const BuildAPIDocRequest = models.BuildAPIDocRequest;
const ApiKeysStatus = models.ApiKeysStatus;
const APIDoc = models.APIDoc;
const DescribeServiceUsagePlanResponse = models.DescribeServiceUsagePlanResponse;
const CreateApiAppResponse = models.CreateApiAppResponse;
const DescribeApiUsagePlanRequest = models.DescribeApiUsagePlanRequest;
const UnBindSubDomainRequest = models.UnBindSubDomainRequest;
const AttachedPluginSummary = models.AttachedPluginSummary;
const DescribeIPStrategysStatusResponse = models.DescribeIPStrategysStatusResponse;
const UpdateApiAppKeyResponse = models.UpdateApiAppKeyResponse;
const UnBindSecretIdsResponse = models.UnBindSecretIdsResponse;
const CreateApiAppRequest = models.CreateApiAppRequest;
const EnableApiKeyRequest = models.EnableApiKeyRequest;
const ResetAPIDocPasswordResponse = models.ResetAPIDocPasswordResponse;
const DescribeServicesStatusRequest = models.DescribeServicesStatusRequest;
const RequestParameter = models.RequestParameter;
const UpstreamHealthChecker = models.UpstreamHealthChecker;
const ServiceEnvironmentSet = models.ServiceEnvironmentSet;
const ServiceReleaseVersion = models.ServiceReleaseVersion;
const DescribeServicesStatusResponse = models.DescribeServicesStatusResponse;
const CreateApiKeyRequest = models.CreateApiKeyRequest;


/**
 * apigateway client
 * @class
 */
class ApigatewayClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("apigateway.tencentcloudapi.com", "2018-08-08", credential, region, profile);
    }
    
    /**
     * This API is used to create a service.
A service is the biggest usage unit in API Gateway. Each service can contain multiple APIs and one default domain name for invocation. You can also bind your own custom domain name to a service. 
     * @param {CreateServiceRequest} req
     * @param {function(string, CreateServiceResponse):void} cb
     * @public
     */
    CreateService(req, cb) {
        let resp = new CreateServiceResponse();
        this.request("CreateService", req, resp, cb);
    }

    /**
     * This API is used to query the list of usage plans.
     * @param {DescribeUsagePlansStatusRequest} req
     * @param {function(string, DescribeUsagePlansStatusResponse):void} cb
     * @public
     */
    DescribeUsagePlansStatus(req, cb) {
        let resp = new DescribeUsagePlansStatusResponse();
        this.request("DescribeUsagePlansStatus", req, resp, cb);
    }

    /**
     * This API is used to query the details of an API document.
     * @param {DescribeAPIDocDetailRequest} req
     * @param {function(string, DescribeAPIDocDetailResponse):void} cb
     * @public
     */
    DescribeAPIDocDetail(req, cb) {
        let resp = new DescribeAPIDocDetailResponse();
        this.request("DescribeAPIDocDetail", req, resp, cb);
    }

    /**
     * This API is used to query the list of APIs bound to an application.
     * @param {DescribeApiAppBindApisStatusRequest} req
     * @param {function(string, DescribeApiAppBindApisStatusResponse):void} cb
     * @public
     */
    DescribeApiAppBindApisStatus(req, cb) {
        let resp = new DescribeApiAppBindApisStatusResponse();
        this.request("DescribeApiAppBindApisStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of keys bound to a usage plan.
In API Gateway, a usage plan can be bound to multiple key pairs. You can use this API to query the list of keys bound to it.
     * @param {DescribeUsagePlanSecretIdsRequest} req
     * @param {function(string, DescribeUsagePlanSecretIdsResponse):void} cb
     * @public
     */
    DescribeUsagePlanSecretIds(req, cb) {
        let resp = new DescribeUsagePlanSecretIdsResponse();
        this.request("DescribeUsagePlanSecretIds", req, resp, cb);
    }

    /**
     * This API is used to query the details of a service, such as its description, domain name, and protocol.
     * @param {DescribeServiceForApiAppRequest} req
     * @param {function(string, DescribeServiceForApiAppResponse):void} cb
     * @public
     */
    DescribeServiceForApiApp(req, cb) {
        let resp = new DescribeServiceForApiAppResponse();
        this.request("DescribeServiceForApiApp", req, resp, cb);
    }

    /**
     * This API is used to modify a service IP policy.
     * @param {ModifyIPStrategyRequest} req
     * @param {function(string, ModifyIPStrategyResponse):void} cb
     * @public
     */
    ModifyIPStrategy(req, cb) {
        let resp = new ModifyIPStrategyResponse();
        this.request("ModifyIPStrategy", req, resp, cb);
    }

    /**
     * This API is used to switch the running version of a service published in an environment to a specified version. After you create a service by using API Gateway and publish it to an environment, multiple versions will be generated during development. In this case, you can call this API to switch versions.
     * @param {UpdateServiceRequest} req
     * @param {function(string, UpdateServiceResponse):void} cb
     * @public
     */
    UpdateService(req, cb) {
        let resp = new UpdateServiceResponse();
        this.request("UpdateService", req, resp, cb);
    }

    /**
     * This API is used to modify a plugin.
     * @param {ModifyPluginRequest} req
     * @param {function(string, ModifyPluginResponse):void} cb
     * @public
     */
    ModifyPlugin(req, cb) {
        let resp = new ModifyPluginResponse();
        this.request("ModifyPlugin", req, resp, cb);
    }

    /**
     * This API is used to delete a created application.
     * @param {DeleteApiAppRequest} req
     * @param {function(string, DeleteApiAppResponse):void} cb
     * @public
     */
    DeleteApiApp(req, cb) {
        let resp = new DeleteApiAppResponse();
        this.request("DeleteApiApp", req, resp, cb);
    }

    /**
     * This API is used to query all plug-ins bound with the API.
     * @param {DescribePluginsByApiRequest} req
     * @param {function(string, DescribePluginsByApiResponse):void} cb
     * @public
     */
    DescribePluginsByApi(req, cb) {
        let resp = new DescribePluginsByApiResponse();
        this.request("DescribePluginsByApi", req, resp, cb);
    }

    /**
     * This API is used to query the list of one or more services and return relevant domain name, time, and other information.
     * @param {DescribeServicesStatusRequest} req
     * @param {function(string, DescribeServicesStatusResponse):void} cb
     * @public
     */
    DescribeServicesStatus(req, cb) {
        let resp = new DescribeServicesStatusResponse();
        this.request("DescribeServicesStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of API documents.
     * @param {DescribeAPIDocsRequest} req
     * @param {function(string, DescribeAPIDocsResponse):void} cb
     * @public
     */
    DescribeAPIDocs(req, cb) {
        let resp = new DescribeAPIDocsResponse();
        this.request("DescribeAPIDocs", req, resp, cb);
    }

    /**
     * This API is used to query the path mappings of a custom domain name.
In API Gateway, you can bind a custom domain name to a service and map its paths. You can customize different path mappings to up to 3 environments under the service. This API is used to query the list of path mappings of a custom domain name bound to a service.
     * @param {DescribeServiceSubDomainMappingsRequest} req
     * @param {function(string, DescribeServiceSubDomainMappingsResponse):void} cb
     * @public
     */
    DescribeServiceSubDomainMappings(req, cb) {
        let resp = new DescribeServiceSubDomainMappingsResponse();
        this.request("DescribeServiceSubDomainMappings", req, resp, cb);
    }

    /**
     * This API is used to list all APIs that can use this plugin, no matter whether the API is bound with the plugin.
     * @param {DescribeAllPluginApisRequest} req
     * @param {function(string, DescribeAllPluginApisResponse):void} cb
     * @public
     */
    DescribeAllPluginApis(req, cb) {
        let resp = new DescribeAllPluginApisResponse();
        this.request("DescribeAllPluginApis", req, resp, cb);
    }

    /**
     * This API is used to unbind an IP policy from a service.
     * @param {UnBindIPStrategyRequest} req
     * @param {function(string, UnBindIPStrategyResponse):void} cb
     * @public
     */
    UnBindIPStrategy(req, cb) {
        let resp = new UnBindIPStrategyResponse();
        this.request("UnBindIPStrategy", req, resp, cb);
    }

    /**
     * This API is used to reset the password of an API document.
     * @param {ResetAPIDocPasswordRequest} req
     * @param {function(string, ResetAPIDocPasswordResponse):void} cb
     * @public
     */
    ResetAPIDocPassword(req, cb) {
        let resp = new ResetAPIDocPasswordResponse();
        this.request("ResetAPIDocPassword", req, resp, cb);
    }

    /**
     * This API is used to query APIs bound with a specified plugin.
     * @param {DescribePluginApisRequest} req
     * @param {function(string, DescribePluginApisResponse):void} cb
     * @public
     */
    DescribePluginApis(req, cb) {
        let resp = new DescribePluginApisResponse();
        this.request("DescribePluginApis", req, resp, cb);
    }

    /**
     * This API is used to disable an API key.
     * @param {DisableApiKeyRequest} req
     * @param {function(string, DisableApiKeyResponse):void} cb
     * @public
     */
    DisableApiKey(req, cb) {
        let resp = new DisableApiKeyResponse();
        this.request("DisableApiKey", req, resp, cb);
    }

    /**
     * This API is used to display the throttling policies bound to an API.
     * @param {DescribeApiEnvironmentStrategyRequest} req
     * @param {function(string, DescribeApiEnvironmentStrategyResponse):void} cb
     * @public
     */
    DescribeApiEnvironmentStrategy(req, cb) {
        let resp = new DescribeApiEnvironmentStrategyResponse();
        this.request("DescribeApiEnvironmentStrategy", req, resp, cb);
    }

    /**
     * This API is used to query the application list.
     * @param {DescribeApiAppsStatusRequest} req
     * @param {function(string, DescribeApiAppsStatusResponse):void} cb
     * @public
     */
    DescribeApiAppsStatus(req, cb) {
        let resp = new DescribeApiAppsStatusResponse();
        this.request("DescribeApiAppsStatus", req, resp, cb);
    }

    /**
     * This API is used to search for an application by application ID.
     * @param {DescribeApiAppRequest} req
     * @param {function(string, DescribeApiAppResponse):void} cb
     * @public
     */
    DescribeApiApp(req, cb) {
        let resp = new DescribeApiAppResponse();
        this.request("DescribeApiApp", req, resp, cb);
    }

    /**
     * This API is used to query details of upstreams under the current account.
     * @param {DescribeUpstreamsRequest} req
     * @param {function(string, DescribeUpstreamsResponse):void} cb
     * @public
     */
    DescribeUpstreams(req, cb) {
        let resp = new DescribeUpstreamsResponse();
        this.request("DescribeUpstreams", req, resp, cb);
    }

    /**
     * This API (`DescribeApi`) is used to query the details of the APIs users manage via Tencent Cloud API Gateway.
     * @param {DescribeApiRequest} req
     * @param {function(string, DescribeApiResponse):void} cb
     * @public
     */
    DescribeApi(req, cb) {
        let resp = new DescribeApiResponse();
        this.request("DescribeApi", req, resp, cb);
    }

    /**
     * This API is used to unbind an application from an API.
     * @param {UnbindApiAppRequest} req
     * @param {function(string, UnbindApiAppResponse):void} cb
     * @public
     */
    UnbindApiApp(req, cb) {
        let resp = new UnbindApiAppResponse();
        this.request("UnbindApiApp", req, resp, cb);
    }

    /**
     * This API is used to delete a usage plan.
     * @param {DeleteUsagePlanRequest} req
     * @param {function(string, DeleteUsagePlanResponse):void} cb
     * @public
     */
    DeleteUsagePlan(req, cb) {
        let resp = new DeleteUsagePlanResponse();
        this.request("DeleteUsagePlan", req, resp, cb);
    }

    /**
     * This API is used to create an application.
     * @param {CreateApiAppRequest} req
     * @param {function(string, CreateApiAppResponse):void} cb
     * @public
     */
    CreateApiApp(req, cb) {
        let resp = new CreateApiAppResponse();
        this.request("CreateApiApp", req, resp, cb);
    }

    /**
     * This API is used to query the information of one or more API keys.
 
     * @param {DescribeApiKeysStatusRequest} req
     * @param {function(string, DescribeApiKeysStatusResponse):void} cb
     * @public
     */
    DescribeApiKeysStatus(req, cb) {
        let resp = new DescribeApiKeysStatusResponse();
        this.request("DescribeApiKeysStatus", req, resp, cb);
    }

    /**
     * This API is used to create an API document.
     * @param {CreateAPIDocRequest} req
     * @param {function(string, CreateAPIDocResponse):void} cb
     * @public
     */
    CreateAPIDoc(req, cb) {
        let resp = new CreateAPIDocResponse();
        this.request("CreateAPIDoc", req, resp, cb);
    }

    /**
     * This API is used to query the list of APIs to which an IP policy can be bound, i.e., the difference set between all APIs under the service and the APIs already bound to the policy.
     * @param {DescribeIPStrategyApisStatusRequest} req
     * @param {function(string, DescribeIPStrategyApisStatusResponse):void} cb
     * @public
     */
    DescribeIPStrategyApisStatus(req, cb) {
        let resp = new DescribeIPStrategyApisStatusResponse();
        this.request("DescribeIPStrategyApisStatus", req, resp, cb);
    }

    /**
     * This API is used to deactivate a service.
Only after a service is published to an environment can its APIs be called. You can call this API to deactivate a service in the release environment. Once deactivated, the service cannot be called.
     * @param {UnReleaseServiceRequest} req
     * @param {function(string, UnReleaseServiceResponse):void} cb
     * @public
     */
    UnReleaseService(req, cb) {
        let resp = new UnReleaseServiceResponse();
        this.request("UnReleaseService", req, resp, cb);
    }

    /**
     * This API is used to query the release history in a service environment.
A service can only be used when it is published to an environment after creation. This API is used to query the release history in an environment under a service.
     * @param {DescribeServiceEnvironmentReleaseHistoryRequest} req
     * @param {function(string, DescribeServiceEnvironmentReleaseHistoryResponse):void} cb
     * @public
     */
    DescribeServiceEnvironmentReleaseHistory(req, cb) {
        let resp = new DescribeServiceEnvironmentReleaseHistoryResponse();
        this.request("DescribeServiceEnvironmentReleaseHistory", req, resp, cb);
    }

    /**
     * This API is used to delete a created API.
     * @param {DeleteApiRequest} req
     * @param {function(string, DeleteApiResponse):void} cb
     * @public
     */
    DeleteApi(req, cb) {
        let resp = new DeleteApiResponse();
        this.request("DeleteApi", req, resp, cb);
    }

    /**
     * This API is used to update an application key.
     * @param {UpdateApiAppKeyRequest} req
     * @param {function(string, UpdateApiAppKeyResponse):void} cb
     * @public
     */
    UpdateApiAppKey(req, cb) {
        let resp = new UpdateApiAppKeyResponse();
        this.request("UpdateApiAppKey", req, resp, cb);
    }

    /**
     * This API is used to modify the name, description, and QPS of a usage plan.
     * @param {ModifyUsagePlanRequest} req
     * @param {function(string, ModifyUsagePlanResponse):void} cb
     * @public
     */
    ModifyUsagePlan(req, cb) {
        let resp = new ModifyUsagePlanResponse();
        this.request("ModifyUsagePlan", req, resp, cb);
    }

    /**
     * This API is used to bind a usage plan to a service or API.
After you publish a service to an environment, if the API requires authentication and can be called only when it is bound to a usage plan, you can use this API to bind a usage plan to the specified environment.
Currently, a usage plan can be bound to an API; however, under the same service, usage plans bound to a service and usage plans bound to an API cannot coexist. Therefore, in an environment to which a service-level usage plan has already been bound, please use the `DemoteServiceUsagePlan` API to degrade it.
     * @param {BindEnvironmentRequest} req
     * @param {function(string, BindEnvironmentResponse):void} cb
     * @public
     */
    BindEnvironment(req, cb) {
        let resp = new BindEnvironmentResponse();
        this.request("BindEnvironment", req, resp, cb);
    }

    /**
     * This API is used to modify an API document.
     * @param {ModifyAPIDocRequest} req
     * @param {function(string, ModifyAPIDocResponse):void} cb
     * @public
     */
    ModifyAPIDoc(req, cb) {
        let resp = new ModifyAPIDocResponse();
        this.request("ModifyAPIDoc", req, resp, cb);
    }

    /**
     * This API is used to unbind a key from a usage plan.
     * @param {UnBindSecretIdsRequest} req
     * @param {function(string, UnBindSecretIdsResponse):void} cb
     * @public
     */
    UnBindSecretIds(req, cb) {
        let resp = new UnBindSecretIdsResponse();
        this.request("UnBindSecretIds", req, resp, cb);
    }

    /**
     * This API is used to query IP policy details.
     * @param {DescribeIPStrategyRequest} req
     * @param {function(string, DescribeIPStrategyResponse):void} cb
     * @public
     */
    DescribeIPStrategy(req, cb) {
        let resp = new DescribeIPStrategyResponse();
        this.request("DescribeIPStrategy", req, resp, cb);
    }

    /**
     * This API is used to modify an upstream.
     * @param {ModifyUpstreamRequest} req
     * @param {function(string, ModifyUpstreamResponse):void} cb
     * @public
     */
    ModifyUpstream(req, cb) {
        let resp = new ModifyUpstreamResponse();
        this.request("ModifyUpstream", req, resp, cb);
    }

    /**
     * This API is used to query the list of all published versions under a service.
A service is generally published on several versions. This API can be used to query the published versions.
     * @param {DescribeServiceReleaseVersionRequest} req
     * @param {function(string, DescribeServiceReleaseVersionResponse):void} cb
     * @public
     */
    DescribeServiceReleaseVersion(req, cb) {
        let resp = new DescribeServiceReleaseVersionResponse();
        this.request("DescribeServiceReleaseVersion", req, resp, cb);
    }

    /**
     * This API is used to view a certain API or the list of all APIs under a service and relevant information.
     * @param {DescribeApisStatusRequest} req
     * @param {function(string, DescribeApisStatusResponse):void} cb
     * @public
     */
    DescribeApisStatus(req, cb) {
        let resp = new DescribeApisStatusResponse();
        this.request("DescribeApisStatus", req, resp, cb);
    }

    /**
     * This API is used to create an API key pair.
     * @param {CreateApiKeyRequest} req
     * @param {function(string, CreateApiKeyResponse):void} cb
     * @public
     */
    CreateApiKey(req, cb) {
        let resp = new CreateApiKeyResponse();
        this.request("CreateApiKey", req, resp, cb);
    }

    /**
     * This API is used to modify the path mapping in the custom domain name settings of a service. The path mapping rule can be modified before it is bound to the custom domain name.
     * @param {ModifySubDomainRequest} req
     * @param {function(string, ModifySubDomainResponse):void} cb
     * @public
     */
    ModifySubDomain(req, cb) {
        let resp = new ModifySubDomainResponse();
        this.request("ModifySubDomain", req, resp, cb);
    }

    /**
     * This API is used to delete a service IP policy.
     * @param {DeleteIPStrategyRequest} req
     * @param {function(string, DeleteIPStrategyResponse):void} cb
     * @public
     */
    DeleteIPStrategy(req, cb) {
        let resp = new DeleteIPStrategyResponse();
        this.request("DeleteIPStrategy", req, resp, cb);
    }

    /**
     * This API is used to modify the relevant information of a service. After a service is created, its name, description, and service type can be modified.
     * @param {ModifyServiceRequest} req
     * @param {function(string, ModifyServiceResponse):void} cb
     * @public
     */
    ModifyService(req, cb) {
        let resp = new ModifyServiceResponse();
        this.request("ModifyService", req, resp, cb);
    }

    /**
     * This API is used to query the details of a service, such as its description, domain name, protocol, creation time, and releases.
     * @param {DescribeServiceRequest} req
     * @param {function(string, DescribeServiceResponse):void} cb
     * @public
     */
    DescribeService(req, cb) {
        let resp = new DescribeServiceResponse();
        this.request("DescribeService", req, resp, cb);
    }

    /**
     * This API is used to create an API Gateway plugin.
     * @param {CreatePluginRequest} req
     * @param {function(string, CreatePluginResponse):void} cb
     * @public
     */
    CreatePlugin(req, cb) {
        let resp = new CreatePluginResponse();
        this.request("CreatePlugin", req, resp, cb);
    }

    /**
     * This API is used to delete an API key pair.
     * @param {DeleteApiKeyRequest} req
     * @param {function(string, DeleteApiKeyResponse):void} cb
     * @public
     */
    DeleteApiKey(req, cb) {
        let resp = new DeleteApiKeyResponse();
        this.request("DeleteApiKey", req, resp, cb);
    }

    /**
     * This API is used to create an API. Before creating an API, you need to create a service, as each API belongs to a certain service.
     * @param {CreateApiRequest} req
     * @param {function(string, CreateApiResponse):void} cb
     * @public
     */
    CreateApi(req, cb) {
        let resp = new CreateApiResponse();
        this.request("CreateApi", req, resp, cb);
    }

    /**
     * This API is used to bind a plugin to an API.
     * @param {AttachPluginRequest} req
     * @param {function(string, AttachPluginResponse):void} cb
     * @public
     */
    AttachPlugin(req, cb) {
        let resp = new AttachPluginResponse();
        this.request("AttachPlugin", req, resp, cb);
    }

    /**
     * This API is used to bind an application to an API.
     * @param {BindApiAppRequest} req
     * @param {function(string, BindApiAppResponse):void} cb
     * @public
     */
    BindApiApp(req, cb) {
        let resp = new BindApiAppResponse();
        this.request("BindApiApp", req, resp, cb);
    }

    /**
     * This API is used to query the list of applications bound to an API.
     * @param {DescribeApiBindApiAppsStatusRequest} req
     * @param {function(string, DescribeApiBindApiAppsStatusResponse):void} cb
     * @public
     */
    DescribeApiBindApiAppsStatus(req, cb) {
        let resp = new DescribeApiBindApiAppsStatusResponse();
        this.request("DescribeApiBindApiAppsStatus", req, resp, cb);
    }

    /**
     * This API is used to search for logs.
     * @param {DescribeLogSearchRequest} req
     * @param {function(string, DescribeLogSearchResponse):void} cb
     * @public
     */
    DescribeLogSearch(req, cb) {
        let resp = new DescribeLogSearchResponse();
        this.request("DescribeLogSearch", req, resp, cb);
    }

    /**
     * This API is used to delete a service in API Gateway.
     * @param {DeleteServiceRequest} req
     * @param {function(string, DeleteServiceResponse):void} cb
     * @public
     */
    DeleteService(req, cb) {
        let resp = new DeleteServiceResponse();
        this.request("DeleteService", req, resp, cb);
    }

    /**
     * This API is used to incrementally update an API and mainly called by programs (different from `ModifyApi`, which requires that full API parameters be passed in and is suitable for use in the console).
     * @param {ModifyApiIncrementRequest} req
     * @param {function(string, ModifyApiIncrementResponse):void} cb
     * @public
     */
    ModifyApiIncrement(req, cb) {
        let resp = new ModifyApiIncrementResponse();
        this.request("ModifyApiIncrement", req, resp, cb);
    }

    /**
     * This API is used to query the details of API usage plans in a service.
To make authentication and throttling for a service take effect, you need to bind a usage plan to it. This API is used to query all usage plans bound to a service and APIs under it.
     * @param {DescribeApiUsagePlanRequest} req
     * @param {function(string, DescribeApiUsagePlanResponse):void} cb
     * @public
     */
    DescribeApiUsagePlan(req, cb) {
        let resp = new DescribeApiUsagePlanResponse();
        this.request("DescribeApiUsagePlan", req, resp, cb);
    }

    /**
     * This API is used to query the list of service IP policies.
     * @param {DescribeIPStrategysStatusRequest} req
     * @param {function(string, DescribeIPStrategysStatusResponse):void} cb
     * @public
     */
    DescribeIPStrategysStatus(req, cb) {
        let resp = new DescribeIPStrategysStatusResponse();
        this.request("DescribeIPStrategysStatus", req, resp, cb);
    }

    /**
     * This API is used to modify a service throttling policy.
     * @param {ModifyServiceEnvironmentStrategyRequest} req
     * @param {function(string, ModifyServiceEnvironmentStrategyResponse):void} cb
     * @public
     */
    ModifyServiceEnvironmentStrategy(req, cb) {
        let resp = new ModifyServiceEnvironmentStrategyResponse();
        this.request("ModifyServiceEnvironmentStrategy", req, resp, cb);
    }

    /**
     * This API is used to create an upstream.
     * @param {CreateUpstreamRequest} req
     * @param {function(string, CreateUpstreamResponse):void} cb
     * @public
     */
    CreateUpstream(req, cb) {
        let resp = new CreateUpstreamResponse();
        this.request("CreateUpstream", req, resp, cb);
    }

    /**
     * This API is used to query the list of environments bound to a usage plan.
After binding a usage plan to environments, you can use this API to query all service environments bound to the usage plan.
     * @param {DescribeUsagePlanEnvironmentsRequest} req
     * @param {function(string, DescribeUsagePlanEnvironmentsResponse):void} cb
     * @public
     */
    DescribeUsagePlanEnvironments(req, cb) {
        let resp = new DescribeUsagePlanEnvironmentsResponse();
        this.request("DescribeUsagePlanEnvironments", req, resp, cb);
    }

    /**
     * This API is used to query the plugin details by plugin ID.
     * @param {DescribePluginRequest} req
     * @param {function(string, DescribePluginResponse):void} cb
     * @public
     */
    DescribePlugin(req, cb) {
        let resp = new DescribePluginResponse();
        this.request("DescribePlugin", req, resp, cb);
    }

    /**
     * This API is used to unbind an API from the plugin.
     * @param {DetachPluginRequest} req
     * @param {function(string, DetachPluginResponse):void} cb
     * @public
     */
    DetachPlugin(req, cb) {
        let resp = new DetachPluginResponse();
        this.request("DetachPlugin", req, resp, cb);
    }

    /**
     * This API is used to query the list of environments under a service. All environments and their statuses under the queried service will be returned.
     * @param {DescribeServiceEnvironmentListRequest} req
     * @param {function(string, DescribeServiceEnvironmentListResponse):void} cb
     * @public
     */
    DescribeServiceEnvironmentList(req, cb) {
        let resp = new DescribeServiceEnvironmentListResponse();
        this.request("DescribeServiceEnvironmentList", req, resp, cb);
    }

    /**
     * This API is used to delete an upstream. Note that you can only delete an upstream when it’s not bound with any APIs.
     * @param {DeleteUpstreamRequest} req
     * @param {function(string, DeleteUpstreamResponse):void} cb
     * @public
     */
    DeleteUpstream(req, cb) {
        let resp = new DeleteUpstreamResponse();
        this.request("DeleteUpstream", req, resp, cb);
    }

    /**
     * This API is used to unbind a custom domain name.
After binding a custom domain name to a service by using API Gateway, you can use this API to unbind it.
     * @param {UnBindSubDomainRequest} req
     * @param {function(string, UnBindSubDomainResponse):void} cb
     * @public
     */
    UnBindSubDomain(req, cb) {
        let resp = new UnBindSubDomainResponse();
        this.request("UnBindSubDomain", req, resp, cb);
    }

    /**
     * This API is used to display a service throttling policy.
     * @param {DescribeServiceEnvironmentStrategyRequest} req
     * @param {function(string, DescribeServiceEnvironmentStrategyResponse):void} cb
     * @public
     */
    DescribeServiceEnvironmentStrategy(req, cb) {
        let resp = new DescribeServiceEnvironmentStrategyResponse();
        this.request("DescribeServiceEnvironmentStrategy", req, resp, cb);
    }

    /**
     * This API is used to delete a custom domain name mapping in a service environment.
You can use this API if you use a custom domain name and custom mapping. Please note that if you delete all mappings in all environments, a failure will be returned when this API is called.
     * @param {DeleteServiceSubDomainMappingRequest} req
     * @param {function(string, DeleteServiceSubDomainMappingResponse):void} cb
     * @public
     */
    DeleteServiceSubDomainMapping(req, cb) {
        let resp = new DeleteServiceSubDomainMappingResponse();
        this.request("DeleteServiceSubDomainMapping", req, resp, cb);
    }

    /**
     * This API is used to query the details of a key.
After creating an API key, you can query its details by using this API.
     * @param {DescribeApiKeyRequest} req
     * @param {function(string, DescribeApiKeyResponse):void} cb
     * @public
     */
    DescribeApiKey(req, cb) {
        let resp = new DescribeApiKeyResponse();
        this.request("DescribeApiKey", req, resp, cb);
    }

    /**
     * This API is used to query APIs bound with an upstream.
     * @param {DescribeUpstreamBindApisRequest} req
     * @param {function(string, DescribeUpstreamBindApisResponse):void} cb
     * @public
     */
    DescribeUpstreamBindApis(req, cb) {
        let resp = new DescribeUpstreamBindApisResponse();
        this.request("DescribeUpstreamBindApis", req, resp, cb);
    }

    /**
     * This API is used to import an OpenAPI to API gateway. 
     * @param {ImportOpenApiRequest} req
     * @param {function(string, ImportOpenApiResponse):void} cb
     * @public
     */
    ImportOpenApi(req, cb) {
        let resp = new ImportOpenApiResponse();
        this.request("ImportOpenApi", req, resp, cb);
    }

    /**
     * This API is used to publish a service.
An API Gateway service can only be called when it is published to an environment and takes effect after creation. This API is used to publish a service to an environment such as the `release` environment.
     * @param {ReleaseServiceRequest} req
     * @param {function(string, ReleaseServiceResponse):void} cb
     * @public
     */
    ReleaseService(req, cb) {
        let resp = new ReleaseServiceResponse();
        this.request("ReleaseService", req, resp, cb);
    }

    /**
     * This API is used to bind a key to a usage plan.
You can bind a key to a usage plan and bind the usage plan to an environment where a service is published, so that callers can use the key to call APIs in the service. You can use this API to bind a key to a usage plan.
     * @param {BindSecretIdsRequest} req
     * @param {function(string, BindSecretIdsResponse):void} cb
     * @public
     */
    BindSecretIds(req, cb) {
        let resp = new BindSecretIdsResponse();
        this.request("BindSecretIds", req, resp, cb);
    }

    /**
     * This API is used to query the details of an API deployed at API Gateway.
     * @param {DescribeApiForApiAppRequest} req
     * @param {function(string, DescribeApiForApiAppResponse):void} cb
     * @public
     */
    DescribeApiForApiApp(req, cb) {
        let resp = new DescribeApiForApiAppResponse();
        this.request("DescribeApiForApiApp", req, resp, cb);
    }

    /**
     * This API is used to build an API document.
     * @param {BuildAPIDocRequest} req
     * @param {function(string, BuildAPIDocResponse):void} cb
     * @public
     */
    BuildAPIDoc(req, cb) {
        let resp = new BuildAPIDocResponse();
        this.request("BuildAPIDoc", req, resp, cb);
    }

    /**
     * This API is used to modify an API throttling policy.
     * @param {ModifyApiEnvironmentStrategyRequest} req
     * @param {function(string, ModifyApiEnvironmentStrategyResponse):void} cb
     * @public
     */
    ModifyApiEnvironmentStrategy(req, cb) {
        let resp = new ModifyApiEnvironmentStrategyResponse();
        this.request("ModifyApiEnvironmentStrategy", req, resp, cb);
    }

    /**
     * This API is used to modify an API. You can call this API to edit/modify a configured API. The modified API takes effect only after its service is published to the corresponding environment again.
     * @param {ModifyApiRequest} req
     * @param {function(string, ModifyApiResponse):void} cb
     * @public
     */
    ModifyApi(req, cb) {
        let resp = new ModifyApiResponse();
        this.request("ModifyApi", req, resp, cb);
    }

    /**
     * This API is used to degrade a usage plan of a service in an environment to the API level.
This operation will be denied if there are no APIs under the service.
This operation will also be denied if the current environment has not been published.
     * @param {DemoteServiceUsagePlanRequest} req
     * @param {function(string, DemoteServiceUsagePlanResponse):void} cb
     * @public
     */
    DemoteServiceUsagePlan(req, cb) {
        let resp = new DemoteServiceUsagePlanResponse();
        this.request("DemoteServiceUsagePlan", req, resp, cb);
    }

    /**
     * This API is used to query the list of custom domain names.
In API Gateway, you can bind custom domain names to a service for service call. This API is used to query the list of custom domain names bound to a service.
     * @param {DescribeServiceSubDomainsRequest} req
     * @param {function(string, DescribeServiceSubDomainsResponse):void} cb
     * @public
     */
    DescribeServiceSubDomains(req, cb) {
        let resp = new DescribeServiceSubDomainsResponse();
        this.request("DescribeServiceSubDomains", req, resp, cb);
    }

    /**
     * This API is used to query the details of usage plans in a service.
To make authentication and throttling for a service take effect, you need to bind a usage plan to it. This API is used to query all usage plans bound to a service.
     * @param {DescribeServiceUsagePlanRequest} req
     * @param {function(string, DescribeServiceUsagePlanResponse):void} cb
     * @public
     */
    DescribeServiceUsagePlan(req, cb) {
        let resp = new DescribeServiceUsagePlanResponse();
        this.request("DescribeServiceUsagePlan", req, resp, cb);
    }

    /**
     * This API is used to create a usage plan.
To use API Gateway, you need to create a usage plan and bind it to a service environment.
     * @param {CreateUsagePlanRequest} req
     * @param {function(string, CreateUsagePlanResponse):void} cb
     * @public
     */
    CreateUsagePlan(req, cb) {
        let resp = new CreateUsagePlanResponse();
        this.request("CreateUsagePlan", req, resp, cb);
    }

    /**
     * This API is used to update a created API key pair.
     * @param {UpdateApiKeyRequest} req
     * @param {function(string, UpdateApiKeyResponse):void} cb
     * @public
     */
    UpdateApiKey(req, cb) {
        let resp = new UpdateApiKeyResponse();
        this.request("UpdateApiKey", req, resp, cb);
    }

    /**
     * This API is used to delete an API Gateway plugin.
     * @param {DeletePluginRequest} req
     * @param {function(string, DeletePluginResponse):void} cb
     * @public
     */
    DeletePlugin(req, cb) {
        let resp = new DeletePluginResponse();
        this.request("DeletePlugin", req, resp, cb);
    }

    /**
     * This API is used to bind an IP policy to an API.
     * @param {BindIPStrategyRequest} req
     * @param {function(string, BindIPStrategyResponse):void} cb
     * @public
     */
    BindIPStrategy(req, cb) {
        let resp = new BindIPStrategyResponse();
        this.request("BindIPStrategy", req, resp, cb);
    }

    /**
     * This API is used to enable a disabled API key.
     * @param {EnableApiKeyRequest} req
     * @param {function(string, EnableApiKeyResponse):void} cb
     * @public
     */
    EnableApiKey(req, cb) {
        let resp = new EnableApiKeyResponse();
        this.request("EnableApiKey", req, resp, cb);
    }

    /**
     * This API is used to create a service IP policy.
     * @param {CreateIPStrategyRequest} req
     * @param {function(string, CreateIPStrategyResponse):void} cb
     * @public
     */
    CreateIPStrategy(req, cb) {
        let resp = new CreateIPStrategyResponse();
        this.request("CreateIPStrategy", req, resp, cb);
    }

    /**
     * This API is used to delete an API document.
     * @param {DeleteAPIDocRequest} req
     * @param {function(string, DeleteAPIDocResponse):void} cb
     * @public
     */
    DeleteAPIDoc(req, cb) {
        let resp = new DeleteAPIDocResponse();
        this.request("DeleteAPIDoc", req, resp, cb);
    }

    /**
     * This API is used to unbind a usage plan from a specified environment.
     * @param {UnBindEnvironmentRequest} req
     * @param {function(string, UnBindEnvironmentResponse):void} cb
     * @public
     */
    UnBindEnvironment(req, cb) {
        let resp = new UnBindEnvironmentResponse();
        this.request("UnBindEnvironment", req, resp, cb);
    }

    /**
     * This API is used to modify a created API.
     * @param {ModifyApiAppRequest} req
     * @param {function(string, ModifyApiAppResponse):void} cb
     * @public
     */
    ModifyApiApp(req, cb) {
        let resp = new ModifyApiAppResponse();
        this.request("ModifyApiApp", req, resp, cb);
    }

    /**
     * This API is used to query the details of a usage plan, such as its name, QPS, creation time, and bound environment.
     * @param {DescribeUsagePlanRequest} req
     * @param {function(string, DescribeUsagePlanResponse):void} cb
     * @public
     */
    DescribeUsagePlan(req, cb) {
        let resp = new DescribeUsagePlanResponse();
        this.request("DescribeUsagePlan", req, resp, cb);
    }

    /**
     * This API is used to bind a custom domain name to a service.
Each service in API Gateway provides a default domain name for users to call. If you want to use your own domain name, you can bind a custom domain name to the target service. After getting the ICP filing and configuring the CNAME record between the custom and default domain names, you can directly call the custom domain name.
     * @param {BindSubDomainRequest} req
     * @param {function(string, BindSubDomainResponse):void} cb
     * @public
     */
    BindSubDomain(req, cb) {
        let resp = new BindSubDomainResponse();
        this.request("BindSubDomain", req, resp, cb);
    }


}
module.exports = ApigatewayClient;
