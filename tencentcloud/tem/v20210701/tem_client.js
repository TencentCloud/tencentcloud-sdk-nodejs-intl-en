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
const MountedSettingConf = models.MountedSettingConf;
const RestartApplicationPodResponse = models.RestartApplicationPodResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const CreateResourceRequest = models.CreateResourceRequest;
const RestartApplicationResponse = models.RestartApplicationResponse;
const StopApplicationRequest = models.StopApplicationRequest;
const HealthCheckConfig = models.HealthCheckConfig;
const ModifyEnvironmentRequest = models.ModifyEnvironmentRequest;
const EsInfo = models.EsInfo;
const DescribeApplicationPodsResponse = models.DescribeApplicationPodsResponse;
const DeleteIngressRequest = models.DeleteIngressRequest;
const RestartApplicationPodRequest = models.RestartApplicationPodRequest;
const DescribeRelatedIngressesRequest = models.DescribeRelatedIngressesRequest;
const ModifyEnvironmentResponse = models.ModifyEnvironmentResponse;
const CosToken = models.CosToken;
const GenerateApplicationPackageDownloadUrlRequest = models.GenerateApplicationPackageDownloadUrlRequest;
const DeployApplicationRequest = models.DeployApplicationRequest;
const IngressInfo = models.IngressInfo;
const ModifyIngressResponse = models.ModifyIngressResponse;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const ModifyIngressRequest = models.ModifyIngressRequest;
const DescribeApplicationPodsRequest = models.DescribeApplicationPodsRequest;
const CreateApplicationRequest = models.CreateApplicationRequest;
const DescribeRelatedIngressesResponse = models.DescribeRelatedIngressesResponse;
const DescribeIngressesRequest = models.DescribeIngressesRequest;
const DescribeRunPodPage = models.DescribeRunPodPage;
const IngressTls = models.IngressTls;
const LogOutputConf = models.LogOutputConf;
const DescribeIngressesResponse = models.DescribeIngressesResponse;
const DeleteIngressResponse = models.DeleteIngressResponse;
const TemNamespaceInfo = models.TemNamespaceInfo;
const GenerateApplicationPackageDownloadUrlResponse = models.GenerateApplicationPackageDownloadUrlResponse;
const IngressRuleBackend = models.IngressRuleBackend;
const DescribeIngressResponse = models.DescribeIngressResponse;
const CreateCosTokenResponse = models.CreateCosTokenResponse;
const IngressRule = models.IngressRule;
const CronHorizontalAutoscaler = models.CronHorizontalAutoscaler;
const RollingUpdateApplicationByVersionResponse = models.RollingUpdateApplicationByVersionResponse;
const RollingUpdateApplicationByVersionRequest = models.RollingUpdateApplicationByVersionRequest;
const RunVersionPod = models.RunVersionPod;
const IngressRuleValue = models.IngressRuleValue;
const CreateResourceResponse = models.CreateResourceResponse;
const ModifyApplicationInfoRequest = models.ModifyApplicationInfoRequest;
const ModifyApplicationInfoResponse = models.ModifyApplicationInfoResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const IngressRulePath = models.IngressRulePath;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const NamespacePage = models.NamespacePage;
const RestartApplicationRequest = models.RestartApplicationRequest;
const CreateApplicationResponse = models.CreateApplicationResponse;
const HorizontalAutoscaler = models.HorizontalAutoscaler;
const StorageMountConf = models.StorageMountConf;
const PortMapping = models.PortMapping;
const DeployStrategyConf = models.DeployStrategyConf;
const DescribeIngressRequest = models.DescribeIngressRequest;
const CreateCosTokenRequest = models.CreateCosTokenRequest;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const StopApplicationResponse = models.StopApplicationResponse;
const EksService = models.EksService;
const CronHorizontalAutoscalerSchedule = models.CronHorizontalAutoscalerSchedule;
const DeployApplicationResponse = models.DeployApplicationResponse;
const StorageConf = models.StorageConf;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;
const Pair = models.Pair;


/**
 * tem client
 * @class
 */
class TemClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tem.tencentcloudapi.com", "2021-07-01", credential, region, profile);
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
     * This API is used to get the list of tenant environments.
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
     * This API is used to delete an application.
  - Stop the application if it’s running
  - Delete resources associated with this application
  - Delele the application
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        let resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
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
     * This API is used to delete an ingress rule.
     * @param {DeleteIngressRequest} req
     * @param {function(string, DeleteIngressResponse):void} cb
     * @public
     */
    DeleteIngress(req, cb) {
        let resp = new DeleteIngressResponse();
        this.request("DeleteIngress", req, resp, cb);
    }


}
module.exports = TemClient;
