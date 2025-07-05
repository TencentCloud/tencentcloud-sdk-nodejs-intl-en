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
const CreateResourceRequest = models.CreateResourceRequest;
const DescribeConfigDataResponse = models.DescribeConfigDataResponse;
const NamespacePage = models.NamespacePage;
const DescribeApplicationPodsResponse = models.DescribeApplicationPodsResponse;
const ModifyIngressResponse = models.ModifyIngressResponse;
const DeleteApplicationServiceRequest = models.DeleteApplicationServiceRequest;
const RestartApplicationPodRequest = models.RestartApplicationPodRequest;
const DestroyLogConfigResponse = models.DestroyLogConfigResponse;
const QueryFilter = models.QueryFilter;
const StorageConf = models.StorageConf;
const DescribeApplicationPodsRequest = models.DescribeApplicationPodsRequest;
const IngressTls = models.IngressTls;
const LogOutputConf = models.LogOutputConf;
const DeleteIngressResponse = models.DeleteIngressResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const ModifyApplicationAutoscalerResponse = models.ModifyApplicationAutoscalerResponse;
const RollingUpdateApplicationByVersionRequest = models.RollingUpdateApplicationByVersionRequest;
const CreateCosTokenResponse = models.CreateCosTokenResponse;
const ModifyLogConfigResponse = models.ModifyLogConfigResponse;
const RollingUpdateApplicationByVersionResponse = models.RollingUpdateApplicationByVersionResponse;
const StopApplicationRequest = models.StopApplicationRequest;
const ModifyApplicationInfoRequest = models.ModifyApplicationInfoRequest;
const DestroyEnvironmentRequest = models.DestroyEnvironmentRequest;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const DescribeEnvironmentStatusRequest = models.DescribeEnvironmentStatusRequest;
const DeployStrategyConf = models.DeployStrategyConf;
const DescribeApplicationsResponse = models.DescribeApplicationsResponse;
const IngressInfo = models.IngressInfo;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const ModifyEnvironmentRequest = models.ModifyEnvironmentRequest;
const ServiceVersionBrief = models.ServiceVersionBrief;
const LogConfigExtractRule = models.LogConfigExtractRule;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;
const NodeInfo = models.NodeInfo;
const DescribeApplicationServiceListResponse = models.DescribeApplicationServiceListResponse;
const DescribeLogConfigRequest = models.DescribeLogConfigRequest;
const DescribeEnvironmentStatusResponse = models.DescribeEnvironmentStatusResponse;
const EsInfo = models.EsInfo;
const DescribeApplicationInfoResponse = models.DescribeApplicationInfoResponse;
const DescribeConfigDataListRequest = models.DescribeConfigDataListRequest;
const EnableApplicationAutoscalerResponse = models.EnableApplicationAutoscalerResponse;
const ServicePage = models.ServicePage;
const TemServiceVersionInfo = models.TemServiceVersionInfo;
const ServicePortMapping = models.ServicePortMapping;
const CreateCosTokenRequest = models.CreateCosTokenRequest;
const ModifyApplicationAutoscalerRequest = models.ModifyApplicationAutoscalerRequest;
const ModifyConfigDataResponse = models.ModifyConfigDataResponse;
const ModifyIngressRequest = models.ModifyIngressRequest;
const Tag = models.Tag;
const EnablePrometheusConf = models.EnablePrometheusConf;
const DescribeIngressesRequest = models.DescribeIngressesRequest;
const StorageMountConf = models.StorageMountConf;
const CreateLogConfigRequest = models.CreateLogConfigRequest;
const RestartApplicationResponse = models.RestartApplicationResponse;
const DescribeIngressesResponse = models.DescribeIngressesResponse;
const ModifyConfigDataRequest = models.ModifyConfigDataRequest;
const CreateConfigDataResponse = models.CreateConfigDataResponse;
const DescribeApplicationsStatusRequest = models.DescribeApplicationsStatusRequest;
const DescribeIngressResponse = models.DescribeIngressResponse;
const RunVersionPod = models.RunVersionPod;
const CreateResourceResponse = models.CreateResourceResponse;
const ModifyApplicationInfoResponse = models.ModifyApplicationInfoResponse;
const RestartApplicationRequest = models.RestartApplicationRequest;
const DestroyEnvironmentResponse = models.DestroyEnvironmentResponse;
const DisableApplicationAutoscalerResponse = models.DisableApplicationAutoscalerResponse;
const DescribeIngressRequest = models.DescribeIngressRequest;
const StopApplicationResponse = models.StopApplicationResponse;
const DeployApplicationResponse = models.DeployApplicationResponse;
const RestartApplicationPodResponse = models.RestartApplicationPodResponse;
const TemEnvironmentStoppingStatus = models.TemEnvironmentStoppingStatus;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const CreateApplicationAutoscalerResponse = models.CreateApplicationAutoscalerResponse;
const DeleteApplicationAutoscalerRequest = models.DeleteApplicationAutoscalerRequest;
const DescribeApplicationAutoscalerListRequest = models.DescribeApplicationAutoscalerListRequest;
const DescribeApplicationsStatusResponse = models.DescribeApplicationsStatusResponse;
const LogConfigListPage = models.LogConfigListPage;
const DeleteIngressRequest = models.DeleteIngressRequest;
const DisableApplicationAutoscalerRequest = models.DisableApplicationAutoscalerRequest;
const DescribeRelatedIngressesRequest = models.DescribeRelatedIngressesRequest;
const CosToken = models.CosToken;
const GenerateApplicationPackageDownloadUrlRequest = models.GenerateApplicationPackageDownloadUrlRequest;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const DeleteApplicationAutoscalerResponse = models.DeleteApplicationAutoscalerResponse;
const DescribeRelatedIngressesResponse = models.DescribeRelatedIngressesResponse;
const DescribeEnvironmentRequest = models.DescribeEnvironmentRequest;
const DescribePagedLogConfigListRequest = models.DescribePagedLogConfigListRequest;
const TemEnvironmentStartingStatus = models.TemEnvironmentStartingStatus;
const TemService = models.TemService;
const IngressRule = models.IngressRule;
const CronHorizontalAutoscaler = models.CronHorizontalAutoscaler;
const DescribeApplicationServiceListRequest = models.DescribeApplicationServiceListRequest;
const IngressRuleValue = models.IngressRuleValue;
const DescribeEnvironmentResponse = models.DescribeEnvironmentResponse;
const TemNamespaceInfo = models.TemNamespaceInfo;
const CreateApplicationAutoscalerRequest = models.CreateApplicationAutoscalerRequest;
const DeleteApplicationServiceResponse = models.DeleteApplicationServiceResponse;
const ConfigData = models.ConfigData;
const DescribeConfigDataRequest = models.DescribeConfigDataRequest;
const MountedSettingConf = models.MountedSettingConf;
const CreateLogConfigResponse = models.CreateLogConfigResponse;
const DescribeConfigDataListResponse = models.DescribeConfigDataListResponse;
const ModifyApplicationServiceRequest = models.ModifyApplicationServiceRequest;
const DescribePagedLogConfigListResponse = models.DescribePagedLogConfigListResponse;
const HealthCheckConfig = models.HealthCheckConfig;
const Autoscaler = models.Autoscaler;
const CreateConfigDataRequest = models.CreateConfigDataRequest;
const DescribeConfigDataListPage = models.DescribeConfigDataListPage;
const DeployApplicationRequest = models.DeployApplicationRequest;
const DescribeApplicationAutoscalerListResponse = models.DescribeApplicationAutoscalerListResponse;
const DestroyConfigDataRequest = models.DestroyConfigDataRequest;
const DestroyConfigDataResponse = models.DestroyConfigDataResponse;
const DescribeApplicationsRequest = models.DescribeApplicationsRequest;
const DescribeApplicationInfoRequest = models.DescribeApplicationInfoRequest;
const CreateApplicationRequest = models.CreateApplicationRequest;
const NamespaceStatusInfo = models.NamespaceStatusInfo;
const DescribeRunPodPage = models.DescribeRunPodPage;
const CreateApplicationServiceRequest = models.CreateApplicationServiceRequest;
const UseDefaultRepoParameters = models.UseDefaultRepoParameters;
const CronHorizontalAutoscalerSchedule = models.CronHorizontalAutoscalerSchedule;
const GenerateApplicationPackageDownloadUrlResponse = models.GenerateApplicationPackageDownloadUrlResponse;
const IngressRuleBackend = models.IngressRuleBackend;
const CreateApplicationServiceResponse = models.CreateApplicationServiceResponse;
const WorkloadInfo = models.WorkloadInfo;
const IngressRulePath = models.IngressRulePath;
const NamespaceInfo = models.NamespaceInfo;
const DescribeLogConfigResponse = models.DescribeLogConfigResponse;
const ServicePortMappingItem = models.ServicePortMappingItem;
const SortType = models.SortType;
const CreateApplicationResponse = models.CreateApplicationResponse;
const HorizontalAutoscaler = models.HorizontalAutoscaler;
const ModifyApplicationServiceResponse = models.ModifyApplicationServiceResponse;
const PortMapping = models.PortMapping;
const LogConfig = models.LogConfig;
const ModifyEnvironmentResponse = models.ModifyEnvironmentResponse;
const ModifyLogConfigRequest = models.ModifyLogConfigRequest;
const DestroyLogConfigRequest = models.DestroyLogConfigRequest;
const EnableApplicationAutoscalerRequest = models.EnableApplicationAutoscalerRequest;
const EksService = models.EksService;
const Pair = models.Pair;


/**
 * tem client
 * @class
 */
class TemClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tem.intl.tencentcloudapi.com", "2021-07-01", credential, region, profile);
    }
    
    /**
     * This API is used to modify a configuration.
     * @param {ModifyConfigDataRequest} req
     * @param {function(string, ModifyConfigDataResponse):void} cb
     * @public
     */
    ModifyConfigData(req, cb) {
        let resp = new ModifyConfigDataResponse();
        this.request("ModifyConfigData", req, resp, cb);
    }

    /**
     * This API is used to query the status of all applications in an envrionment.
     * @param {DescribeApplicationsStatusRequest} req
     * @param {function(string, DescribeApplicationsStatusResponse):void} cb
     * @public
     */
    DescribeApplicationsStatus(req, cb) {
        let resp = new DescribeApplicationsStatusResponse();
        this.request("DescribeApplicationsStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of access policies.
     * @param {DescribeApplicationServiceListRequest} req
     * @param {function(string, DescribeApplicationServiceListResponse):void} cb
     * @public
     */
    DescribeApplicationServiceList(req, cb) {
        let resp = new DescribeApplicationServiceListResponse();
        this.request("DescribeApplicationServiceList", req, resp, cb);
    }

    /**
     * This API is used to create or update an ingress rule.
     * @param {ModifyIngressRequest} req
     * @param {function(string, ModifyIngressResponse):void} cb
     * @public
     */
    ModifyIngress(req, cb) {
        let resp = new ModifyIngressResponse();
        this.request("ModifyIngress", req, resp, cb);
    }

    /**
     * This API is used to enable a scaling rule.
     * @param {EnableApplicationAutoscalerRequest} req
     * @param {function(string, EnableApplicationAutoscalerResponse):void} cb
     * @public
     */
    EnableApplicationAutoscaler(req, cb) {
        let resp = new EnableApplicationAutoscalerResponse();
        this.request("EnableApplicationAutoscaler", req, resp, cb);
    }

    /**
     * This API is used to create a scaling rule.
     * @param {CreateApplicationAutoscalerRequest} req
     * @param {function(string, CreateApplicationAutoscalerResponse):void} cb
     * @public
     */
    CreateApplicationAutoscaler(req, cb) {
        let resp = new CreateApplicationAutoscalerResponse();
        this.request("CreateApplicationAutoscaler", req, resp, cb);
    }

    /**
     * This API is used to restart an application pod.
     * @param {RestartApplicationPodRequest} req
     * @param {function(string, RestartApplicationPodResponse):void} cb
     * @public
     */
    RestartApplicationPod(req, cb) {
        let resp = new RestartApplicationPodResponse();
        this.request("RestartApplicationPod", req, resp, cb);
    }

    /**
     * This API is used to modify a log collecting configuration.
     * @param {ModifyLogConfigRequest} req
     * @param {function(string, ModifyLogConfigResponse):void} cb
     * @public
     */
    ModifyLogConfig(req, cb) {
        let resp = new ModifyLogConfigResponse();
        this.request("ModifyLogConfig", req, resp, cb);
    }

    /**
     * This API is used to delete an application.
  - Stop running the current application
  - Delete resources related to the application
  - Delete the application
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        let resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
    }

    /**
     * This API is used to obtain the environment status.
     * @param {DescribeEnvironmentStatusRequest} req
     * @param {function(string, DescribeEnvironmentStatusResponse):void} cb
     * @public
     */
    DescribeEnvironmentStatus(req, cb) {
        let resp = new DescribeEnvironmentStatusResponse();
        this.request("DescribeEnvironmentStatus", req, resp, cb);
    }

    /**
     * This API is used to delete an ingress rule.
     * @param {DeleteIngressRequest} req
     * @param {function(string, DeleteIngressResponse):void} cb
     * @public
     */
    DeleteIngress(req, cb) {
        let resp = new DeleteIngressResponse();
        this.request("DeleteIngress", req, resp, cb);
    }

    /**
     * This API is used to deploy an application.
     * @param {DeployApplicationRequest} req
     * @param {function(string, DeployApplicationResponse):void} cb
     * @public
     */
    DeployApplication(req, cb) {
        let resp = new DeployApplicationResponse();
        this.request("DeployApplication", req, resp, cb);
    }

    /**
     * This API is used to modify a scaling rule.
     * @param {ModifyApplicationAutoscalerRequest} req
     * @param {function(string, ModifyApplicationAutoscalerResponse):void} cb
     * @public
     */
    ModifyApplicationAutoscaler(req, cb) {
        let resp = new ModifyApplicationAutoscalerResponse();
        this.request("ModifyApplicationAutoscaler", req, resp, cb);
    }

    /**
     * This API is used to querying the list of log collecting configurations.
     * @param {DescribePagedLogConfigListRequest} req
     * @param {function(string, DescribePagedLogConfigListResponse):void} cb
     * @public
     */
    DescribePagedLogConfigList(req, cb) {
        let resp = new DescribePagedLogConfigListResponse();
        this.request("DescribePagedLogConfigList", req, resp, cb);
    }

    /**
     * This API is used to modify an access policy.
     * @param {ModifyApplicationServiceRequest} req
     * @param {function(string, ModifyApplicationServiceResponse):void} cb
     * @public
     */
    ModifyApplicationService(req, cb) {
        let resp = new ModifyApplicationServiceResponse();
        this.request("ModifyApplicationService", req, resp, cb);
    }

    /**
     * This API is used to edit an environment.
     * @param {ModifyEnvironmentRequest} req
     * @param {function(string, ModifyEnvironmentResponse):void} cb
     * @public
     */
    ModifyEnvironment(req, cb) {
        let resp = new ModifyEnvironmentResponse();
        this.request("ModifyEnvironment", req, resp, cb);
    }

    /**
     * This API is used to obtain the basic information of an environment.
     * @param {DescribeEnvironmentRequest} req
     * @param {function(string, DescribeEnvironmentResponse):void} cb
     * @public
     */
    DescribeEnvironment(req, cb) {
        let resp = new DescribeEnvironmentResponse();
        this.request("DescribeEnvironment", req, resp, cb);
    }

    /**
     * This API is used to query details of a log collecting configuration.
     * @param {DescribeLogConfigRequest} req
     * @param {function(string, DescribeLogConfigResponse):void} cb
     * @public
     */
    DescribeLogConfig(req, cb) {
        let resp = new DescribeLogConfigResponse();
        this.request("DescribeLogConfig", req, resp, cb);
    }

    /**
     * This API is used to stop an application.
     * @param {StopApplicationRequest} req
     * @param {function(string, StopApplicationResponse):void} cb
     * @public
     */
    StopApplication(req, cb) {
        let resp = new StopApplicationResponse();
        this.request("StopApplication", req, resp, cb);
    }

    /**
     * This API is used to create a log collecting configuration.
     * @param {CreateLogConfigRequest} req
     * @param {function(string, CreateLogConfigResponse):void} cb
     * @public
     */
    CreateLogConfig(req, cb) {
        let resp = new CreateLogConfigResponse();
        this.request("CreateLogConfig", req, resp, cb);
    }

    /**
     * This API is used to create an access policy. 
     * @param {CreateApplicationServiceRequest} req
     * @param {function(string, CreateApplicationServiceResponse):void} cb
     * @public
     */
    CreateApplicationService(req, cb) {
        let resp = new CreateApplicationServiceResponse();
        this.request("CreateApplicationService", req, resp, cb);
    }

    /**
     * This API is used to check the basic information of an application.
     * @param {DescribeApplicationInfoRequest} req
     * @param {function(string, DescribeApplicationInfoResponse):void} cb
     * @public
     */
    DescribeApplicationInfo(req, cb) {
        let resp = new DescribeApplicationInfoResponse();
        this.request("DescribeApplicationInfo", req, resp, cb);
    }

    /**
     * This API is used to create a configuration.
     * @param {CreateConfigDataRequest} req
     * @param {function(string, CreateConfigDataResponse):void} cb
     * @public
     */
    CreateConfigData(req, cb) {
        let resp = new CreateConfigDataResponse();
        this.request("CreateConfigData", req, resp, cb);
    }

    /**
     * This API is used to get the list of application pods.
     * @param {DescribeApplicationPodsRequest} req
     * @param {function(string, DescribeApplicationPodsResponse):void} cb
     * @public
     */
    DescribeApplicationPods(req, cb) {
        let resp = new DescribeApplicationPodsResponse();
        this.request("DescribeApplicationPods", req, resp, cb);
    }

    /**
     * This API is used to delete a scaling rule.
     * @param {DeleteApplicationAutoscalerRequest} req
     * @param {function(string, DeleteApplicationAutoscalerResponse):void} cb
     * @public
     */
    DeleteApplicationAutoscaler(req, cb) {
        let resp = new DeleteApplicationAutoscalerResponse();
        this.request("DeleteApplicationAutoscaler", req, resp, cb);
    }

    /**
     * This API is used to modify the basic information of an application.
     * @param {ModifyApplicationInfoRequest} req
     * @param {function(string, ModifyApplicationInfoResponse):void} cb
     * @public
     */
    ModifyApplicationInfo(req, cb) {
        let resp = new ModifyApplicationInfoResponse();
        this.request("ModifyApplicationInfo", req, resp, cb);
    }

    /**
     * This API is used to terminate a configuration.
     * @param {DestroyConfigDataRequest} req
     * @param {function(string, DestroyConfigDataResponse):void} cb
     * @public
     */
    DestroyConfigData(req, cb) {
        let resp = new DestroyConfigDataResponse();
        this.request("DestroyConfigData", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of environments. 
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
    }

    /**
     * This API is used to generate a COS temporary key.
     * @param {CreateCosTokenRequest} req
     * @param {function(string, CreateCosTokenResponse):void} cb
     * @public
     */
    CreateCosToken(req, cb) {
        let resp = new CreateCosTokenResponse();
        this.request("CreateCosToken", req, resp, cb);
    }

    /**
     * This API is used to query an ingress rule.
     * @param {DescribeIngressRequest} req
     * @param {function(string, DescribeIngressResponse):void} cb
     * @public
     */
    DescribeIngress(req, cb) {
        let resp = new DescribeIngressResponse();
        this.request("DescribeIngress", req, resp, cb);
    }

    /**
     * This API is used to delete an access policy.
     * @param {DeleteApplicationServiceRequest} req
     * @param {function(string, DeleteApplicationServiceResponse):void} cb
     * @public
     */
    DeleteApplicationService(req, cb) {
        let resp = new DeleteApplicationServiceResponse();
        this.request("DeleteApplicationService", req, resp, cb);
    }

    /**
     * This API is used to generate the pre-signed download URL for the specified application package.
     * @param {GenerateApplicationPackageDownloadUrlRequest} req
     * @param {function(string, GenerateApplicationPackageDownloadUrlResponse):void} cb
     * @public
     */
    GenerateApplicationPackageDownloadUrl(req, cb) {
        let resp = new GenerateApplicationPackageDownloadUrlResponse();
        this.request("GenerateApplicationPackageDownloadUrl", req, resp, cb);
    }

    /**
     * This API is used to create an environment.
     * @param {CreateEnvironmentRequest} req
     * @param {function(string, CreateEnvironmentResponse):void} cb
     * @public
     */
    CreateEnvironment(req, cb) {
        let resp = new CreateEnvironmentResponse();
        this.request("CreateEnvironment", req, resp, cb);
    }

    /**
     * This API is used to disable a scaling rule.
     * @param {DisableApplicationAutoscalerRequest} req
     * @param {function(string, DisableApplicationAutoscalerResponse):void} cb
     * @public
     */
    DisableApplicationAutoscaler(req, cb) {
        let resp = new DisableApplicationAutoscalerResponse();
        this.request("DisableApplicationAutoscaler", req, resp, cb);
    }

    /**
     * This API is used to query the list of ingress rules.
     * @param {DescribeIngressesRequest} req
     * @param {function(string, DescribeIngressesResponse):void} cb
     * @public
     */
    DescribeIngresses(req, cb) {
        let resp = new DescribeIngressesResponse();
        this.request("DescribeIngresses", req, resp, cb);
    }

    /**
     * This API is used to create an application.
     * @param {CreateApplicationRequest} req
     * @param {function(string, CreateApplicationResponse):void} cb
     * @public
     */
    CreateApplication(req, cb) {
        let resp = new CreateApplicationResponse();
        this.request("CreateApplication", req, resp, cb);
    }

    /**
     * This API is used to restart an application.
     * @param {RestartApplicationRequest} req
     * @param {function(string, RestartApplicationResponse):void} cb
     * @public
     */
    RestartApplication(req, cb) {
        let resp = new RestartApplicationResponse();
        this.request("RestartApplication", req, resp, cb);
    }

    /**
     * This API is used to configure the rolling update policy for an application.
     * @param {RollingUpdateApplicationByVersionRequest} req
     * @param {function(string, RollingUpdateApplicationByVersionResponse):void} cb
     * @public
     */
    RollingUpdateApplicationByVersion(req, cb) {
        let resp = new RollingUpdateApplicationByVersionResponse();
        this.request("RollingUpdateApplicationByVersion", req, resp, cb);
    }

    /**
     * This API is to query the list of running applications.
     * @param {DescribeApplicationsRequest} req
     * @param {function(string, DescribeApplicationsResponse):void} cb
     * @public
     */
    DescribeApplications(req, cb) {
        let resp = new DescribeApplicationsResponse();
        this.request("DescribeApplications", req, resp, cb);
    }

    /**
     * This API is used to terminate a log collecting configuration.
     * @param {DestroyLogConfigRequest} req
     * @param {function(string, DestroyLogConfigResponse):void} cb
     * @public
     */
    DestroyLogConfig(req, cb) {
        let resp = new DestroyLogConfigResponse();
        this.request("DestroyLogConfig", req, resp, cb);
    }

    /**
     * This API is used to query the list of ingress rules associated with the application.
     * @param {DescribeRelatedIngressesRequest} req
     * @param {function(string, DescribeRelatedIngressesResponse):void} cb
     * @public
     */
    DescribeRelatedIngresses(req, cb) {
        let resp = new DescribeRelatedIngressesResponse();
        this.request("DescribeRelatedIngresses", req, resp, cb);
    }

    /**
     * This API is used to query details of a configuration.
     * @param {DescribeConfigDataRequest} req
     * @param {function(string, DescribeConfigDataResponse):void} cb
     * @public
     */
    DescribeConfigData(req, cb) {
        let resp = new DescribeConfigDataResponse();
        this.request("DescribeConfigData", req, resp, cb);
    }

    /**
     * This API is used to bind a cloud resource.
     * @param {CreateResourceRequest} req
     * @param {function(string, CreateResourceResponse):void} cb
     * @public
     */
    CreateResource(req, cb) {
        let resp = new CreateResourceResponse();
        this.request("CreateResource", req, resp, cb);
    }

    /**
     * This API is used to query the scaling rules of an application.
     * @param {DescribeApplicationAutoscalerListRequest} req
     * @param {function(string, DescribeApplicationAutoscalerListResponse):void} cb
     * @public
     */
    DescribeApplicationAutoscalerList(req, cb) {
        let resp = new DescribeApplicationAutoscalerListResponse();
        this.request("DescribeApplicationAutoscalerList", req, resp, cb);
    }

    /**
     * This API is used to terminate an environment.
     * @param {DestroyEnvironmentRequest} req
     * @param {function(string, DestroyEnvironmentResponse):void} cb
     * @public
     */
    DestroyEnvironment(req, cb) {
        let resp = new DestroyEnvironmentResponse();
        this.request("DestroyEnvironment", req, resp, cb);
    }

    /**
     * This API is used to query the list of configurations.
     * @param {DescribeConfigDataListRequest} req
     * @param {function(string, DescribeConfigDataListResponse):void} cb
     * @public
     */
    DescribeConfigDataList(req, cb) {
        let resp = new DescribeConfigDataListResponse();
        this.request("DescribeConfigDataList", req, resp, cb);
    }


}
module.exports = TemClient;
