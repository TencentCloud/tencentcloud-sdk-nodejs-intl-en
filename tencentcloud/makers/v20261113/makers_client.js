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
const ProjectFilter = models.ProjectFilter;
const ProjectDeployment = models.ProjectDeployment;
const DeleteProjectCustomDomainsRequest = models.DeleteProjectCustomDomainsRequest;
const DeleteProjectRequest = models.DeleteProjectRequest;
const CreateDeploymentRequest = models.CreateDeploymentRequest;
const DescribeDeploymentsRequest = models.DescribeDeploymentsRequest;
const Environment = models.Environment;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const CosCredentials = models.CosCredentials;
const CustomDomainItem = models.CustomDomainItem;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const ModifyZoneCustomDomainEnvRequest = models.ModifyZoneCustomDomainEnvRequest;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const OwnershipVerification = models.OwnershipVerification;
const ModifyProjectEnvsRequest = models.ModifyProjectEnvsRequest;
const CustomDomainInput = models.CustomDomainInput;
const DeleteProjectEnvsRequest = models.DeleteProjectEnvsRequest;
const DeleteProjectEnvsResponse = models.DeleteProjectEnvsResponse;
const ModifyProjectResponse = models.ModifyProjectResponse;
const NsVerification = models.NsVerification;
const FileVerification = models.FileVerification;
const Deployment = models.Deployment;
const DeleteProjectCustomDomainsResponse = models.DeleteProjectCustomDomainsResponse;
const DescribeProjectEnvsResponse = models.DescribeProjectEnvsResponse;
const DescribeDeploymentLogRequest = models.DescribeDeploymentLogRequest;
const DescribeDeploymentLogResponse = models.DescribeDeploymentLogResponse;
const SwitchConfig = models.SwitchConfig;
const DescribeZoneCustomDomainsResponse = models.DescribeZoneCustomDomainsResponse;
const ModifyProjectRequest = models.ModifyProjectRequest;
const ModifyZoneCustomDomainEnvResponse = models.ModifyZoneCustomDomainEnvResponse;
const EnvironmentEnvVar = models.EnvironmentEnvVar;
const DescribeCosTempTokenResponse = models.DescribeCosTempTokenResponse;
const Project = models.Project;
const CreateProjectResponse = models.CreateProjectResponse;
const CreateZoneCustomDomainResponse = models.CreateZoneCustomDomainResponse;
const DnsVerification = models.DnsVerification;
const DeleteProjectResponse = models.DeleteProjectResponse;
const DescribeDeploymentsResponse = models.DescribeDeploymentsResponse;
const DescribeZoneCustomDomainsRequest = models.DescribeZoneCustomDomainsRequest;
const DescribeProjectEnvsRequest = models.DescribeProjectEnvsRequest;
const CreateDeploymentResponse = models.CreateDeploymentResponse;
const Regions = models.Regions;
const DeploymentFilter = models.DeploymentFilter;
const ZoneDomain = models.ZoneDomain;
const HstsConfig = models.HstsConfig;
const ProjectEnvVar = models.ProjectEnvVar;
const CreateZoneCustomDomainRequest = models.CreateZoneCustomDomainRequest;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const ForceRedirectConfig = models.ForceRedirectConfig;
const ModifyProjectEnvsResponse = models.ModifyProjectEnvsResponse;
const EnvVar = models.EnvVar;
const DescribeCosTempTokenRequest = models.DescribeCosTempTokenRequest;
const CreateProjectRequest = models.CreateProjectRequest;


/**
 * makers client
 * @class
 */
class MakersClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("makers.intl.tencentcloudapi.com", "2026-11-13", credential, region, profile);
    }
    
    /**
     * Write environment variables based on the passed-in EnvVars.
     * @param {ModifyProjectEnvsRequest} req
     * @param {function(string, ModifyProjectEnvsResponse):void} cb
     * @public
     */
    ModifyProjectEnvs(req, cb) {
        let resp = new ModifyProjectEnvsResponse();
        this.request("ModifyProjectEnvs", req, resp, cb);
    }

    /**
     * Bind a custom domain name to a specified environment of a project.
     * @param {CreateZoneCustomDomainRequest} req
     * @param {function(string, CreateZoneCustomDomainResponse):void} cb
     * @public
     */
    CreateZoneCustomDomain(req, cb) {
        let resp = new CreateZoneCustomDomainResponse();
        this.request("CreateZoneCustomDomain", req, resp, cb);
    }

    /**
     * Query deployment records of a project.
     * @param {DescribeDeploymentsRequest} req
     * @param {function(string, DescribeDeploymentsResponse):void} cb
     * @public
     */
    DescribeDeployments(req, cb) {
        let resp = new DescribeDeploymentsResponse();
        this.request("DescribeDeployments", req, resp, cb);
    }

    /**
     * Delete environment variables by EnvVars. Match by Id or Key. Value is required but not used for matching. You can pass any value.
     * @param {DeleteProjectEnvsRequest} req
     * @param {function(string, DeleteProjectEnvsResponse):void} cb
     * @public
     */
    DeleteProjectEnvs(req, cb) {
        let resp = new DeleteProjectEnvsResponse();
        this.request("DeleteProjectEnvs", req, resp, cb);
    }

    /**
     * This API is used to query projects under a site by page. Offset is the page number offset, and the backend skips Offset * Limit items.
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * Query environments in a project, including built-in Production, Preview, and custom environments.
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
    }

    /**
     * This API is used to create a project. When uploading an artifact, pass Upload for Provider and Custom for Channel.
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * Switch a bound custom domain name to another environment.
     * @param {ModifyZoneCustomDomainEnvRequest} req
     * @param {function(string, ModifyZoneCustomDomainEnvResponse):void} cb
     * @public
     */
    ModifyZoneCustomDomainEnv(req, cb) {
        let resp = new ModifyZoneCustomDomainEnvResponse();
        this.request("ModifyZoneCustomDomainEnv", req, resp, cb);
    }

    /**
     * Query project environment variables. If Env is not specified, return all application scopes.
     * @param {DescribeProjectEnvsRequest} req
     * @param {function(string, DescribeProjectEnvsResponse):void} cb
     * @public
     */
    DescribeProjectEnvs(req, cb) {
        let resp = new DescribeProjectEnvsResponse();
        this.request("DescribeProjectEnvs", req, resp, cb);
    }

    /**
     * Delete a project. In-progress builds prevent deletion.
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * Queries the custom and preset domain names of a project under a site.
     * @param {DescribeZoneCustomDomainsRequest} req
     * @param {function(string, DescribeZoneCustomDomainsResponse):void} cb
     * @public
     */
    DescribeZoneCustomDomains(req, cb) {
        let resp = new DescribeZoneCustomDomainsResponse();
        this.request("DescribeZoneCustomDomains", req, resp, cb);
    }

    /**
     * Modify the project name and build configuration. Fields not passed retain their original values.
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        let resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }

    /**
     * This API is used to create a deployment. When uploading an artifact, pass Upload for ViaMeta and Provider, and pass the path of the uploaded object for TempBucketPath.
     * @param {CreateDeploymentRequest} req
     * @param {function(string, CreateDeploymentResponse):void} cb
     * @public
     */
    CreateDeployment(req, cb) {
        let resp = new CreateDeploymentResponse();
        this.request("CreateDeployment", req, resp, cb);
    }

    /**
     * Return the access address of the build log.
     * @param {DescribeDeploymentLogRequest} req
     * @param {function(string, DescribeDeploymentLogResponse):void} cb
     * @public
     */
    DescribeDeploymentLog(req, cb) {
        let resp = new DescribeDeploymentLogResponse();
        this.request("DescribeDeploymentLog", req, resp, cb);
    }

    /**
     * Unbind a custom domain name from a project by domain name.
     * @param {DeleteProjectCustomDomainsRequest} req
     * @param {function(string, DeleteProjectCustomDomainsResponse):void} cb
     * @public
     */
    DeleteProjectCustomDomains(req, cb) {
        let resp = new DeleteProjectCustomDomainsResponse();
        this.request("DeleteProjectCustomDomains", req, resp, cb);
    }

    /**
     * Get the COS bucket, region, target path, and temporary key for uploading artifacts.
     * @param {DescribeCosTempTokenRequest} req
     * @param {function(string, DescribeCosTempTokenResponse):void} cb
     * @public
     */
    DescribeCosTempToken(req, cb) {
        let resp = new DescribeCosTempTokenResponse();
        this.request("DescribeCosTempToken", req, resp, cb);
    }


}
module.exports = MakersClient;
