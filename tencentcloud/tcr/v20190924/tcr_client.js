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
const DeleteInstanceCustomizedDomainResponse = models.DeleteInstanceCustomizedDomainResponse;
const ManageExternalEndpointRequest = models.ManageExternalEndpointRequest;
const TaskDetail = models.TaskDetail;
const DescribeReplicationInstancesResponse = models.DescribeReplicationInstancesResponse;
const DescribeReplicationInstanceCreateTasksResponse = models.DescribeReplicationInstanceCreateTasksResponse;
const WebhookTriggerLog = models.WebhookTriggerLog;
const AccessVpc = models.AccessVpc;
const DeleteRepositoryTagsResponse = models.DeleteRepositoryTagsResponse;
const ModifyTagRetentionRuleRequest = models.ModifyTagRetentionRuleRequest;
const ModifyRepositoryResponse = models.ModifyRepositoryResponse;
const DescribeNamespacesResponse = models.DescribeNamespacesResponse;
const DownloadHelmChartRequest = models.DownloadHelmChartRequest;
const RetentionRule = models.RetentionRule;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DeleteInstanceTokenRequest = models.DeleteInstanceTokenRequest;
const ModifyRepositoryRequest = models.ModifyRepositoryRequest;
const ReplicationRule = models.ReplicationRule;
const DescribeWebhookTriggerLogResponse = models.DescribeWebhookTriggerLogResponse;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const RenewInstanceResponse = models.RenewInstanceResponse;
const CreateImmutableTagRulesRequest = models.CreateImmutableTagRulesRequest;
const DescribeRepositoriesResponse = models.DescribeRepositoriesResponse;
const DeleteInstanceTokenResponse = models.DeleteInstanceTokenResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const CreateReplicationInstanceRequest = models.CreateReplicationInstanceRequest;
const ModifyInstanceTokenResponse = models.ModifyInstanceTokenResponse;
const DescribeTagRetentionRulesRequest = models.DescribeTagRetentionRulesRequest;
const RegistryCondition = models.RegistryCondition;
const ModifyImmutableTagRulesResponse = models.ModifyImmutableTagRulesResponse;
const Region = models.Region;
const ModifyServiceAccountRequest = models.ModifyServiceAccountRequest;
const CreateImageAccelerationServiceResponse = models.CreateImageAccelerationServiceResponse;
const CreateMultipleSecurityPolicyResponse = models.CreateMultipleSecurityPolicyResponse;
const CreateTagRetentionRuleResponse = models.CreateTagRetentionRuleResponse;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeChartDownloadInfoResponse = models.DescribeChartDownloadInfoResponse;
const DescribeServiceAccountsRequest = models.DescribeServiceAccountsRequest;
const DescribeExternalEndpointStatusRequest = models.DescribeExternalEndpointStatusRequest;
const DeleteRepositoryResponse = models.DeleteRepositoryResponse;
const DescribeInstanceAllNamespacesRequest = models.DescribeInstanceAllNamespacesRequest;
const DownloadHelmChartResponse = models.DownloadHelmChartResponse;
const ManageReplicationRequest = models.ManageReplicationRequest;
const DeleteWebhookTriggerResponse = models.DeleteWebhookTriggerResponse;
const DescribeTagRetentionExecutionTaskResponse = models.DescribeTagRetentionExecutionTaskResponse;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const DescribeReplicationInstanceSyncStatusResponse = models.DescribeReplicationInstanceSyncStatusResponse;
const DeleteInstanceCustomizedDomainRequest = models.DeleteInstanceCustomizedDomainRequest;
const Tag = models.Tag;
const DescribeImagesResponse = models.DescribeImagesResponse;
const DescribeInternalEndpointsResponse = models.DescribeInternalEndpointsResponse;
const DeleteImmutableTagRulesResponse = models.DeleteImmutableTagRulesResponse;
const ModifyTagRetentionRuleResponse = models.ModifyTagRetentionRuleResponse;
const CreateTagRetentionRuleRequest = models.CreateTagRetentionRuleRequest;
const WebhookTarget = models.WebhookTarget;
const DescribeInstanceStatusResponse = models.DescribeInstanceStatusResponse;
const DescribeGCJobsResponse = models.DescribeGCJobsResponse;
const DescribeWebhookTriggerResponse = models.DescribeWebhookTriggerResponse;
const ModifyInstanceTokenRequest = models.ModifyInstanceTokenRequest;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const ModifyImmutableTagRulesRequest = models.ModifyImmutableTagRulesRequest;
const Permission = models.Permission;
const DescribeSecurityPoliciesResponse = models.DescribeSecurityPoliciesResponse;
const CreateSignatureResponse = models.CreateSignatureResponse;
const DeleteRepositoryTagsRequest = models.DeleteRepositoryTagsRequest;
const TcrImageInfo = models.TcrImageInfo;
const DescribeReplicationInstanceSyncStatusRequest = models.DescribeReplicationInstanceSyncStatusRequest;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeInstanceStatusRequest = models.DescribeInstanceStatusRequest;
const ModifyWebhookTriggerRequest = models.ModifyWebhookTriggerRequest;
const DeleteReplicationInstanceRequest = models.DeleteReplicationInstanceRequest;
const DeleteNamespaceResponse = models.DeleteNamespaceResponse;
const CreateSignatureRequest = models.CreateSignatureRequest;
const CreateSecurityPolicyResponse = models.CreateSecurityPolicyResponse;
const DescribeRepositoriesRequest = models.DescribeRepositoriesRequest;
const DescribeTagRetentionExecutionTaskRequest = models.DescribeTagRetentionExecutionTaskRequest;
const DeleteServiceAccountResponse = models.DeleteServiceAccountResponse;
const ModifyNamespaceResponse = models.ModifyNamespaceResponse;
const TcrNamespaceInfo = models.TcrNamespaceInfo;
const DescribeWebhookTriggerLogRequest = models.DescribeWebhookTriggerLogRequest;
const RenewInstanceRequest = models.RenewInstanceRequest;
const Schedule = models.Schedule;
const DeleteTagRetentionRuleResponse = models.DeleteTagRetentionRuleResponse;
const DeleteMultipleSecurityPolicyRequest = models.DeleteMultipleSecurityPolicyRequest;
const DescribeImmutableTagRulesResponse = models.DescribeImmutableTagRulesResponse;
const CreateSignaturePolicyResponse = models.CreateSignaturePolicyResponse;
const WebhookTrigger = models.WebhookTrigger;
const RegistryStatus = models.RegistryStatus;
const SecurityPolicy = models.SecurityPolicy;
const ReplicationFilter = models.ReplicationFilter;
const CreateInstanceTokenResponse = models.CreateInstanceTokenResponse;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const RetentionTask = models.RetentionTask;
const DescribeImageAccelerateServiceResponse = models.DescribeImageAccelerateServiceResponse;
const ModifyServiceAccountPasswordRequest = models.ModifyServiceAccountPasswordRequest;
const DescribeReplicationInstancesRequest = models.DescribeReplicationInstancesRequest;
const DeleteWebhookTriggerRequest = models.DeleteWebhookTriggerRequest;
const DeleteSignaturePolicyResponse = models.DeleteSignaturePolicyResponse;
const CreateServiceAccountRequest = models.CreateServiceAccountRequest;
const CustomizedDomainInfo = models.CustomizedDomainInfo;
const DeleteServiceAccountRequest = models.DeleteServiceAccountRequest;
const DescribeImageManifestsRequest = models.DescribeImageManifestsRequest;
const RegistryChargePrepaid = models.RegistryChargePrepaid;
const TagSpecification = models.TagSpecification;
const CreateMultipleSecurityPolicyRequest = models.CreateMultipleSecurityPolicyRequest;
const KeyValueString = models.KeyValueString;
const DeleteSecurityPolicyRequest = models.DeleteSecurityPolicyRequest;
const CreateInstanceRequest = models.CreateInstanceRequest;
const DescribeInstanceTokenRequest = models.DescribeInstanceTokenRequest;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const CreateServiceAccountResponse = models.CreateServiceAccountResponse;
const DeleteReplicationInstanceResponse = models.DeleteReplicationInstanceResponse;
const GCJobInfo = models.GCJobInfo;
const Registry = models.Registry;
const DescribeChartDownloadInfoRequest = models.DescribeChartDownloadInfoRequest;
const DescribeExternalEndpointStatusResponse = models.DescribeExternalEndpointStatusResponse;
const CheckInstanceResponse = models.CheckInstanceResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const ServiceAccount = models.ServiceAccount;
const DescribeImmutableTagRulesRequest = models.DescribeImmutableTagRulesRequest;
const Filter = models.Filter;
const RetentionExecution = models.RetentionExecution;
const DuplicateImageResponse = models.DuplicateImageResponse;
const DescribeReplicationInstanceCreateTasksRequest = models.DescribeReplicationInstanceCreateTasksRequest;
const DeleteSignaturePolicyRequest = models.DeleteSignaturePolicyRequest;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const DescribeImageManifestsResponse = models.DescribeImageManifestsResponse;
const DescribeWebhookTriggerRequest = models.DescribeWebhookTriggerRequest;
const ImmutableTagRule = models.ImmutableTagRule;
const Header = models.Header;
const RetentionPolicy = models.RetentionPolicy;
const CreateSecurityPolicyRequest = models.CreateSecurityPolicyRequest;
const CreateWebhookTriggerRequest = models.CreateWebhookTriggerRequest;
const DeleteImageAccelerateServiceResponse = models.DeleteImageAccelerateServiceResponse;
const DescribeInstanceCustomizedDomainResponse = models.DescribeInstanceCustomizedDomainResponse;
const CreateImageAccelerationServiceRequest = models.CreateImageAccelerationServiceRequest;
const DescribeNamespacesRequest = models.DescribeNamespacesRequest;
const DeleteMultipleSecurityPolicyResponse = models.DeleteMultipleSecurityPolicyResponse;
const ManageInternalEndpointResponse = models.ManageInternalEndpointResponse;
const CreateInstanceCustomizedDomainRequest = models.CreateInstanceCustomizedDomainRequest;
const CreateTagRetentionExecutionResponse = models.CreateTagRetentionExecutionResponse;
const CheckInstanceNameResponse = models.CheckInstanceNameResponse;
const DeleteImageAccelerateServiceRequest = models.DeleteImageAccelerateServiceRequest;
const DescribeTagRetentionRulesResponse = models.DescribeTagRetentionRulesResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const ManageExternalEndpointResponse = models.ManageExternalEndpointResponse;
const DeleteSecurityPolicyResponse = models.DeleteSecurityPolicyResponse;
const CreateReplicationInstanceResponse = models.CreateReplicationInstanceResponse;
const CreateInstanceTokenRequest = models.CreateInstanceTokenRequest;
const DescribeServiceAccountsResponse = models.DescribeServiceAccountsResponse;
const CreateInstanceCustomizedDomainResponse = models.CreateInstanceCustomizedDomainResponse;
const PeerReplicationOption = models.PeerReplicationOption;
const DescribeSecurityPoliciesRequest = models.DescribeSecurityPoliciesRequest;
const ReplicationRegistry = models.ReplicationRegistry;
const DescribeInternalEndpointsRequest = models.DescribeInternalEndpointsRequest;
const CheckInstanceRequest = models.CheckInstanceRequest;
const ModifyNamespaceRequest = models.ModifyNamespaceRequest;
const CreateRepositoryRequest = models.CreateRepositoryRequest;
const DeleteImageResponse = models.DeleteImageResponse;
const DescribeImageAccelerateServiceRequest = models.DescribeImageAccelerateServiceRequest;
const DeleteNamespaceRequest = models.DeleteNamespaceRequest;
const DescribeImagesRequest = models.DescribeImagesRequest;
const DescribeGCJobsRequest = models.DescribeGCJobsRequest;
const DescribeTagRetentionExecutionRequest = models.DescribeTagRetentionExecutionRequest;
const CreateRepositoryResponse = models.CreateRepositoryResponse;
const CheckInstanceNameRequest = models.CheckInstanceNameRequest;
const DescribeInstanceTokenResponse = models.DescribeInstanceTokenResponse;
const DescribeInstanceCustomizedDomainRequest = models.DescribeInstanceCustomizedDomainRequest;
const DescribeTagRetentionExecutionResponse = models.DescribeTagRetentionExecutionResponse;
const DeleteImmutableTagRulesRequest = models.DeleteImmutableTagRulesRequest;
const CreateWebhookTriggerResponse = models.CreateWebhookTriggerResponse;
const ModifyServiceAccountResponse = models.ModifyServiceAccountResponse;
const CreateSignaturePolicyRequest = models.CreateSignaturePolicyRequest;
const DeleteTagRetentionRuleRequest = models.DeleteTagRetentionRuleRequest;
const TcrRepositoryInfo = models.TcrRepositoryInfo;
const TcrInstanceToken = models.TcrInstanceToken;
const DeleteRepositoryRequest = models.DeleteRepositoryRequest;
const DeleteImageRequest = models.DeleteImageRequest;
const DuplicateImageRequest = models.DuplicateImageRequest;
const CreateTagRetentionExecutionRequest = models.CreateTagRetentionExecutionRequest;
const ReplicationLog = models.ReplicationLog;
const DescribeInstanceAllNamespacesResponse = models.DescribeInstanceAllNamespacesResponse;
const ModifyServiceAccountPasswordResponse = models.ModifyServiceAccountPasswordResponse;
const ManageInternalEndpointRequest = models.ManageInternalEndpointRequest;
const ModifyWebhookTriggerResponse = models.ModifyWebhookTriggerResponse;
const CreateImmutableTagRulesResponse = models.CreateImmutableTagRulesResponse;
const ManageReplicationResponse = models.ManageReplicationResponse;


/**
 * tcr client
 * @class
 */
class TcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcr.intl.tencentcloudapi.com", "2019-09-24", credential, region, profile);
    }
    
    /**
     * This API is used to update the information of a namespace. Currently, only the namespace access level can be modified.
     * @param {ModifyNamespaceRequest} req
     * @param {function(string, ModifyNamespaceResponse):void} cb
     * @public
     */
    ModifyNamespace(req, cb) {
        let resp = new ModifyNamespaceResponse();
        this.request("ModifyNamespace", req, resp, cb);
    }

    /**
     * This API is used to update the password for a service level account.
     * @param {ModifyServiceAccountPasswordRequest} req
     * @param {function(string, ModifyServiceAccountPasswordResponse):void} cb
     * @public
     */
    ModifyServiceAccountPassword(req, cb) {
        let resp = new ModifyServiceAccountPasswordResponse();
        this.request("ModifyServiceAccountPassword", req, resp, cb);
    }

    /**
     * This API is used to create a namespace in an Enterprise Edition instance.
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        let resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }

    /**
     * This API is used to create a public network access allowlist policy for an instance.
     * @param {CreateSecurityPolicyRequest} req
     * @param {function(string, CreateSecurityPolicyResponse):void} cb
     * @public
     */
    CreateSecurityPolicy(req, cb) {
        let resp = new CreateSecurityPolicyResponse();
        this.request("CreateSecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to delete a public network access allow policy.

Note: When both `PolicyIndex` and `CidrBlock` are specified, `CidrBlock` takes the higher priority
     * @param {DeleteSecurityPolicyRequest} req
     * @param {function(string, DeleteSecurityPolicyResponse):void} cb
     * @public
     */
    DeleteSecurityPolicy(req, cb) {
        let resp = new DeleteSecurityPolicyResponse();
        this.request("DeleteSecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to delete an image acceleration service.
     * @param {DeleteImageAccelerateServiceRequest} req
     * @param {function(string, DeleteImageAccelerateServiceResponse):void} cb
     * @public
     */
    DeleteImageAccelerateService(req, cb) {
        let resp = new DeleteImageAccelerateServiceResponse();
        this.request("DeleteImageAccelerateService", req, resp, cb);
    }

    /**
     * This API is used to query the list of image tags or the information of the specified container image.
     * @param {DescribeImagesRequest} req
     * @param {function(string, DescribeImagesResponse):void} cb
     * @public
     */
    DescribeImages(req, cb) {
        let resp = new DescribeImagesResponse();
        this.request("DescribeImages", req, resp, cb);
    }

    /**
     * This API is used to list the tag immutability rule.
     * @param {DescribeImmutableTagRulesRequest} req
     * @param {function(string, DescribeImmutableTagRulesResponse):void} cb
     * @public
     */
    DescribeImmutableTagRules(req, cb) {
        let resp = new DescribeImmutableTagRulesResponse();
        this.request("DescribeImmutableTagRules", req, resp, cb);
    }

    /**
     * This API is used to create an image signature policy.
     * @param {CreateSignaturePolicyRequest} req
     * @param {function(string, CreateSignaturePolicyResponse):void} cb
     * @public
     */
    CreateSignaturePolicy(req, cb) {
        let resp = new CreateSignaturePolicyResponse();
        this.request("CreateSignaturePolicy", req, resp, cb);
    }

    /**
     * This API is used to delete a TCR Enterprise Edition instance.
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * This API is used to delete a tag retention rule.
     * @param {DeleteTagRetentionRuleRequest} req
     * @param {function(string, DeleteTagRetentionRuleResponse):void} cb
     * @public
     */
    DeleteTagRetentionRule(req, cb) {
        let resp = new DeleteTagRetentionRuleResponse();
        this.request("DeleteTagRetentionRule", req, resp, cb);
    }

    /**
     * This API is used to query tag retention execution records.
     * @param {DescribeTagRetentionExecutionRequest} req
     * @param {function(string, DescribeTagRetentionExecutionResponse):void} cb
     * @public
     */
    DescribeTagRetentionExecution(req, cb) {
        let resp = new DescribeTagRetentionExecutionResponse();
        this.request("DescribeTagRetentionExecution", req, resp, cb);
    }

    /**
     * This API is used to update the information of an image repository. The repository description can be modified.
     * @param {ModifyRepositoryRequest} req
     * @param {function(string, ModifyRepositoryResponse):void} cb
     * @public
     */
    ModifyRepository(req, cb) {
        let resp = new ModifyRepositoryResponse();
        this.request("ModifyRepository", req, resp, cb);
    }

    /**
     * This API is used to return the chart download information in an Enterprise Edition instance.
     * @param {DescribeChartDownloadInfoRequest} req
     * @param {function(string, DescribeChartDownloadInfoResponse):void} cb
     * @public
     */
    DescribeChartDownloadInfo(req, cb) {
        let resp = new DescribeChartDownloadInfoResponse();
        this.request("DescribeChartDownloadInfo", req, resp, cb);
    }

    /**
     * This API is used to delete a custom domain name.
     * @param {DeleteInstanceCustomizedDomainRequest} req
     * @param {function(string, DeleteInstanceCustomizedDomainResponse):void} cb
     * @public
     */
    DeleteInstanceCustomizedDomain(req, cb) {
        let resp = new DeleteInstanceCustomizedDomainResponse();
        this.request("DeleteInstanceCustomizedDomain", req, resp, cb);
    }

    /**
     * This API is used to delete a namespace signing policy.
     * @param {DeleteSignaturePolicyRequest} req
     * @param {function(string, DeleteSignaturePolicyResponse):void} cb
     * @public
     */
    DeleteSignaturePolicy(req, cb) {
        let resp = new DeleteSignaturePolicyResponse();
        this.request("DeleteSignaturePolicy", req, resp, cb);
    }

    /**
     * This API is used to delete an image repository.
     * @param {DeleteRepositoryRequest} req
     * @param {function(string, DeleteRepositoryResponse):void} cb
     * @public
     */
    DeleteRepository(req, cb) {
        let resp = new DeleteRepositoryResponse();
        this.request("DeleteRepository", req, resp, cb);
    }

    /**
     * This API is used to query the status of an image acceleration service.
     * @param {DescribeImageAccelerateServiceRequest} req
     * @param {function(string, DescribeImageAccelerateServiceResponse):void} cb
     * @public
     */
    DescribeImageAccelerateService(req, cb) {
        let resp = new DescribeImageAccelerateServiceResponse();
        this.request("DescribeImageAccelerateService", req, resp, cb);
    }

    /**
     * This API is used to create a service level account.
     * @param {CreateServiceAccountRequest} req
     * @param {function(string, CreateServiceAccountResponse):void} cb
     * @public
     */
    CreateServiceAccount(req, cb) {
        let resp = new CreateServiceAccountResponse();
        this.request("CreateServiceAccount", req, resp, cb);
    }

    /**
     * This API is used to query the image repository list or the information of the specified image repository.
     * @param {DescribeRepositoriesRequest} req
     * @param {function(string, DescribeRepositoriesResponse):void} cb
     * @public
     */
    DescribeRepositories(req, cb) {
        let resp = new DescribeRepositoriesResponse();
        this.request("DescribeRepositories", req, resp, cb);
    }

    /**
     * This API is used to query the instance information.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to update the status of the specified long-term access credential in an instance.
     * @param {ModifyInstanceTokenRequest} req
     * @param {function(string, ModifyInstanceTokenResponse):void} cb
     * @public
     */
    ModifyInstanceToken(req, cb) {
        let resp = new ModifyInstanceTokenResponse();
        this.request("ModifyInstanceToken", req, resp, cb);
    }

    /**
     * This API is used to execute tag retention manually.
     * @param {CreateTagRetentionExecutionRequest} req
     * @param {function(string, CreateTagRetentionExecutionResponse):void} cb
     * @public
     */
    CreateTagRetentionExecution(req, cb) {
        let resp = new CreateTagRetentionExecutionResponse();
        this.request("CreateTagRetentionExecution", req, resp, cb);
    }

    /**
     * This API is used to check whether the name of the instance to be created meets the specifications.
     * @param {CheckInstanceNameRequest} req
     * @param {function(string, CheckInstanceNameResponse):void} cb
     * @public
     */
    CheckInstanceName(req, cb) {
        let resp = new CheckInstanceNameResponse();
        this.request("CheckInstanceName", req, resp, cb);
    }

    /**
     * This API is used to verify the information of the Enterprise Edition instance.
     * @param {CheckInstanceRequest} req
     * @param {function(string, CheckInstanceResponse):void} cb
     * @public
     */
    CheckInstance(req, cb) {
        let resp = new CheckInstanceResponse();
        this.request("CheckInstance", req, resp, cb);
    }

    /**
     * This API is used to batch delete repository tags in an Enterprise Edition instance.
     * @param {DeleteRepositoryTagsRequest} req
     * @param {function(string, DeleteRepositoryTagsResponse):void} cb
     * @public
     */
    DeleteRepositoryTags(req, cb) {
        let resp = new DeleteRepositoryTagsResponse();
        this.request("DeleteRepositoryTags", req, resp, cb);
    }

    /**
     * This API is used to query the list of all namespaces in an instance.
     * @param {DescribeInstanceAllNamespacesRequest} req
     * @param {function(string, DescribeInstanceAllNamespacesResponse):void} cb
     * @public
     */
    DescribeInstanceAllNamespaces(req, cb) {
        let resp = new DescribeInstanceAllNamespacesResponse();
        this.request("DescribeInstanceAllNamespaces", req, resp, cb);
    }

    /**
     * This API is used to delete a namespace.
     * @param {DeleteNamespaceRequest} req
     * @param {function(string, DeleteNamespaceResponse):void} cb
     * @public
     */
    DeleteNamespace(req, cb) {
        let resp = new DeleteNamespaceResponse();
        this.request("DeleteNamespace", req, resp, cb);
    }

    /**
     * This API is used to get trigger logs.
     * @param {DescribeWebhookTriggerLogRequest} req
     * @param {function(string, DescribeWebhookTriggerLogResponse):void} cb
     * @public
     */
    DescribeWebhookTriggerLog(req, cb) {
        let resp = new DescribeWebhookTriggerLogResponse();
        this.request("DescribeWebhookTriggerLog", req, resp, cb);
    }

    /**
     * This API is used to create the tag immutability rule.
     * @param {CreateImmutableTagRulesRequest} req
     * @param {function(string, CreateImmutableTagRulesResponse):void} cb
     * @public
     */
    CreateImmutableTagRules(req, cb) {
        let resp = new CreateImmutableTagRulesResponse();
        this.request("CreateImmutableTagRules", req, resp, cb);
    }

    /**
     * This API is used to query service accounts.
     * @param {DescribeServiceAccountsRequest} req
     * @param {function(string, DescribeServiceAccountsResponse):void} cb
     * @public
     */
    DescribeServiceAccounts(req, cb) {
        let resp = new DescribeServiceAccountsResponse();
        this.request("DescribeServiceAccounts", req, resp, cb);
    }

    /**
     * This API is used to query the information of long-term access credentials.
     * @param {DescribeInstanceTokenRequest} req
     * @param {function(string, DescribeInstanceTokenResponse):void} cb
     * @public
     */
    DescribeInstanceToken(req, cb) {
        let resp = new DescribeInstanceTokenResponse();
        this.request("DescribeInstanceToken", req, resp, cb);
    }

    /**
     * This API is used to download a Helm chart in TCR.
     * @param {DownloadHelmChartRequest} req
     * @param {function(string, DownloadHelmChartResponse):void} cb
     * @public
     */
    DownloadHelmChart(req, cb) {
        let resp = new DownloadHelmChartResponse();
        this.request("DownloadHelmChart", req, resp, cb);
    }

    /**
     * This API is used to manage VPC URLs for private network access to an instance.
     * @param {ManageInternalEndpointRequest} req
     * @param {function(string, ManageInternalEndpointResponse):void} cb
     * @public
     */
    ManageInternalEndpoint(req, cb) {
        let resp = new ManageInternalEndpointResponse();
        this.request("ManageInternalEndpoint", req, resp, cb);
    }

    /**
     * This API is used to create a custom domain name.
     * @param {CreateInstanceCustomizedDomainRequest} req
     * @param {function(string, CreateInstanceCustomizedDomainResponse):void} cb
     * @public
     */
    CreateInstanceCustomizedDomain(req, cb) {
        let resp = new CreateInstanceCustomizedDomainResponse();
        this.request("CreateInstanceCustomizedDomain", req, resp, cb);
    }

    /**
     *  This API is used to delete the tag immutability rule.
     * @param {DeleteImmutableTagRulesRequest} req
     * @param {function(string, DeleteImmutableTagRulesResponse):void} cb
     * @public
     */
    DeleteImmutableTagRules(req, cb) {
        let resp = new DeleteImmutableTagRulesResponse();
        this.request("DeleteImmutableTagRules", req, resp, cb);
    }

    /**
     * This API is used to query the last ten garbage collection (GC) records.
     * @param {DescribeGCJobsRequest} req
     * @param {function(string, DescribeGCJobsResponse):void} cb
     * @public
     */
    DescribeGCJobs(req, cb) {
        let resp = new DescribeGCJobsResponse();
        this.request("DescribeGCJobs", req, resp, cb);
    }

    /**
     * This API is used to delete a long-term access credential.
     * @param {DeleteInstanceTokenRequest} req
     * @param {function(string, DeleteInstanceTokenResponse):void} cb
     * @public
     */
    DeleteInstanceToken(req, cb) {
        let resp = new DeleteInstanceTokenResponse();
        this.request("DeleteInstanceToken", req, resp, cb);
    }

    /**
     * This API is used to update instance information.
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }

    /**
     * This API is used to query triggers.
     * @param {DescribeWebhookTriggerRequest} req
     * @param {function(string, DescribeWebhookTriggerResponse):void} cb
     * @public
     */
    DescribeWebhookTrigger(req, cb) {
        let resp = new DescribeWebhookTriggerResponse();
        this.request("DescribeWebhookTrigger", req, resp, cb);
    }

    /**
     * This API is used to update a service account.
     * @param {ModifyServiceAccountRequest} req
     * @param {function(string, ModifyServiceAccountResponse):void} cb
     * @public
     */
    ModifyServiceAccount(req, cb) {
        let resp = new ModifyServiceAccountResponse();
        this.request("ModifyServiceAccount", req, resp, cb);
    }

    /**
     * This API is used to create an image acceleration service.
     * @param {CreateImageAccelerationServiceRequest} req
     * @param {function(string, CreateImageAccelerationServiceResponse):void} cb
     * @public
     */
    CreateImageAccelerationService(req, cb) {
        let resp = new CreateImageAccelerationServiceResponse();
        this.request("CreateImageAccelerationService", req, resp, cb);
    }

    /**
     * This API is used to update a trigger.
     * @param {ModifyWebhookTriggerRequest} req
     * @param {function(string, ModifyWebhookTriggerResponse):void} cb
     * @public
     */
    ModifyWebhookTrigger(req, cb) {
        let resp = new ModifyWebhookTriggerResponse();
        this.request("ModifyWebhookTrigger", req, resp, cb);
    }

    /**
     * This API is used to duplicate the Enterprise Edition repository image version.
     * @param {DuplicateImageRequest} req
     * @param {function(string, DuplicateImageResponse):void} cb
     * @public
     */
    DuplicateImage(req, cb) {
        let resp = new DuplicateImageResponse();
        this.request("DuplicateImage", req, resp, cb);
    }

    /**
     * This API is used to renew a prepaid instance or change the billing mode from pay-as-you-go billing to monthly subscription billing.
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        let resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }

    /**
     * This API is used to create an instance.
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * This API is used to query the task status of creating a replication instance.
     * @param {DescribeReplicationInstanceCreateTasksRequest} req
     * @param {function(string, DescribeReplicationInstanceCreateTasksResponse):void} cb
     * @public
     */
    DescribeReplicationInstanceCreateTasks(req, cb) {
        let resp = new DescribeReplicationInstanceCreateTasksResponse();
        this.request("DescribeReplicationInstanceCreateTasks", req, resp, cb);
    }

    /**
     * This API is used to create a trigger.
     * @param {CreateWebhookTriggerRequest} req
     * @param {function(string, CreateWebhookTriggerResponse):void} cb
     * @public
     */
    CreateWebhookTrigger(req, cb) {
        let resp = new CreateWebhookTriggerResponse();
        this.request("CreateWebhookTrigger", req, resp, cb);
    }

    /**
     * This API is used to query the list of replication instances.
     * @param {DescribeReplicationInstancesRequest} req
     * @param {function(string, DescribeReplicationInstancesResponse):void} cb
     * @public
     */
    DescribeReplicationInstances(req, cb) {
        let resp = new DescribeReplicationInstancesResponse();
        this.request("DescribeReplicationInstances", req, resp, cb);
    }

    /**
     * This API is used to get the available regions in TCR.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to update the tag immutability rule.
     * @param {ModifyImmutableTagRulesRequest} req
     * @param {function(string, ModifyImmutableTagRulesResponse):void} cb
     * @public
     */
    ModifyImmutableTagRules(req, cb) {
        let resp = new ModifyImmutableTagRulesResponse();
        this.request("ModifyImmutableTagRules", req, resp, cb);
    }

    /**
     * This API is used to query tag retention rules.
     * @param {DescribeTagRetentionRulesRequest} req
     * @param {function(string, DescribeTagRetentionRulesResponse):void} cb
     * @public
     */
    DescribeTagRetentionRules(req, cb) {
        let resp = new DescribeTagRetentionRulesResponse();
        this.request("DescribeTagRetentionRules", req, resp, cb);
    }

    /**
     * This API is used to delete a trigger.
     * @param {DeleteWebhookTriggerRequest} req
     * @param {function(string, DeleteWebhookTriggerResponse):void} cb
     * @public
     */
    DeleteWebhookTrigger(req, cb) {
        let resp = new DeleteWebhookTriggerResponse();
        this.request("DeleteWebhookTrigger", req, resp, cb);
    }

    /**
     * This API is used to create a replication instance.
     * @param {CreateReplicationInstanceRequest} req
     * @param {function(string, CreateReplicationInstanceResponse):void} cb
     * @public
     */
    CreateReplicationInstance(req, cb) {
        let resp = new CreateReplicationInstanceResponse();
        this.request("CreateReplicationInstance", req, resp, cb);
    }

    /**
     * This API is used to create an image repository in an Enterprise Edition instance.
     * @param {CreateRepositoryRequest} req
     * @param {function(string, CreateRepositoryResponse):void} cb
     * @public
     */
    CreateRepository(req, cb) {
        let resp = new CreateRepositoryResponse();
        this.request("CreateRepository", req, resp, cb);
    }

    /**
     * This API is used to manage the public network access of an instance.
     * @param {ManageExternalEndpointRequest} req
     * @param {function(string, ManageExternalEndpointResponse):void} cb
     * @public
     */
    ManageExternalEndpoint(req, cb) {
        let resp = new ManageExternalEndpointResponse();
        this.request("ManageExternalEndpoint", req, resp, cb);
    }

    /**
     * This API is used to update the public network access allowlist of an instance.
     * @param {ModifySecurityPolicyRequest} req
     * @param {function(string, ModifySecurityPolicyResponse):void} cb
     * @public
     */
    ModifySecurityPolicy(req, cb) {
        let resp = new ModifySecurityPolicyResponse();
        this.request("ModifySecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the public network access allowlist policies of an instance.
     * @param {DescribeSecurityPoliciesRequest} req
     * @param {function(string, DescribeSecurityPoliciesResponse):void} cb
     * @public
     */
    DescribeSecurityPolicies(req, cb) {
        let resp = new DescribeSecurityPoliciesResponse();
        this.request("DescribeSecurityPolicies", req, resp, cb);
    }

    /**
     * This API is used to create multiple public network access allowlist policies of the TCR instance.
     * @param {CreateMultipleSecurityPolicyRequest} req
     * @param {function(string, CreateMultipleSecurityPolicyResponse):void} cb
     * @public
     */
    CreateMultipleSecurityPolicy(req, cb) {
        let resp = new CreateMultipleSecurityPolicyResponse();
        this.request("CreateMultipleSecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the namespace list or the information of the specified namespace.
     * @param {DescribeNamespacesRequest} req
     * @param {function(string, DescribeNamespacesResponse):void} cb
     * @public
     */
    DescribeNamespaces(req, cb) {
        let resp = new DescribeNamespacesResponse();
        this.request("DescribeNamespaces", req, resp, cb);
    }

    /**
     * This API is used to query the current status and process information of an instance.
     * @param {DescribeInstanceStatusRequest} req
     * @param {function(string, DescribeInstanceStatusResponse):void} cb
     * @public
     */
    DescribeInstanceStatus(req, cb) {
        let resp = new DescribeInstanceStatusResponse();
        this.request("DescribeInstanceStatus", req, resp, cb);
    }

    /**
     * This API is used to delete a service account.
     * @param {DeleteServiceAccountRequest} req
     * @param {function(string, DeleteServiceAccountResponse):void} cb
     * @public
     */
    DeleteServiceAccount(req, cb) {
        let resp = new DeleteServiceAccountResponse();
        this.request("DeleteServiceAccount", req, resp, cb);
    }

    /**
     * This API is used to query tag retention execution tasks.
     * @param {DescribeTagRetentionExecutionTaskRequest} req
     * @param {function(string, DescribeTagRetentionExecutionTaskResponse):void} cb
     * @public
     */
    DescribeTagRetentionExecutionTask(req, cb) {
        let resp = new DescribeTagRetentionExecutionTaskResponse();
        this.request("DescribeTagRetentionExecutionTask", req, resp, cb);
    }

    /**
     * This API is used to delete multiple public network access allowlist policies of the instance.
     * @param {DeleteMultipleSecurityPolicyRequest} req
     * @param {function(string, DeleteMultipleSecurityPolicyResponse):void} cb
     * @public
     */
    DeleteMultipleSecurityPolicy(req, cb) {
        let resp = new DeleteMultipleSecurityPolicyResponse();
        this.request("DeleteMultipleSecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to delete a replica instance.
     * @param {DeleteReplicationInstanceRequest} req
     * @param {function(string, DeleteReplicationInstanceResponse):void} cb
     * @public
     */
    DeleteReplicationInstance(req, cb) {
        let resp = new DeleteReplicationInstanceResponse();
        this.request("DeleteReplicationInstance", req, resp, cb);
    }

    /**
     * This API is used to create a tag retention rule.
     * @param {CreateTagRetentionRuleRequest} req
     * @param {function(string, CreateTagRetentionRuleResponse):void} cb
     * @public
     */
    CreateTagRetentionRule(req, cb) {
        let resp = new CreateTagRetentionRuleResponse();
        this.request("CreateTagRetentionRule", req, resp, cb);
    }

    /**
     * This API is used to manage the instance synchronization rule.
     * @param {ManageReplicationRequest} req
     * @param {function(string, ManageReplicationResponse):void} cb
     * @public
     */
    ManageReplication(req, cb) {
        let resp = new ManageReplicationResponse();
        this.request("ManageReplication", req, resp, cb);
    }

    /**
     * This API is used to query the public network access entry status of an instance.
     * @param {DescribeExternalEndpointStatusRequest} req
     * @param {function(string, DescribeExternalEndpointStatusResponse):void} cb
     * @public
     */
    DescribeExternalEndpointStatus(req, cb) {
        let resp = new DescribeExternalEndpointStatusResponse();
        this.request("DescribeExternalEndpointStatus", req, resp, cb);
    }

    /**
     * This API is used to query the manifest information of a container image.
     * @param {DescribeImageManifestsRequest} req
     * @param {function(string, DescribeImageManifestsResponse):void} cb
     * @public
     */
    DescribeImageManifests(req, cb) {
        let resp = new DescribeImageManifestsResponse();
        this.request("DescribeImageManifests", req, resp, cb);
    }

    /**
     * This API is used to query the synchronization status of a replication instance.
     * @param {DescribeReplicationInstanceSyncStatusRequest} req
     * @param {function(string, DescribeReplicationInstanceSyncStatusResponse):void} cb
     * @public
     */
    DescribeReplicationInstanceSyncStatus(req, cb) {
        let resp = new DescribeReplicationInstanceSyncStatusResponse();
        this.request("DescribeReplicationInstanceSyncStatus", req, resp, cb);
    }

    /**
     * This API is used to create a signature for an image tag.
     * @param {CreateSignatureRequest} req
     * @param {function(string, CreateSignatureResponse):void} cb
     * @public
     */
    CreateSignature(req, cb) {
        let resp = new CreateSignatureResponse();
        this.request("CreateSignature", req, resp, cb);
    }

    /**
     * This API is used to query the VPC URLs for private network access to an instance.
     * @param {DescribeInternalEndpointsRequest} req
     * @param {function(string, DescribeInternalEndpointsResponse):void} cb
     * @public
     */
    DescribeInternalEndpoints(req, cb) {
        let resp = new DescribeInternalEndpointsResponse();
        this.request("DescribeInternalEndpoints", req, resp, cb);
    }

    /**
     * This API is used to update a tag retention rule.
     * @param {ModifyTagRetentionRuleRequest} req
     * @param {function(string, ModifyTagRetentionRuleResponse):void} cb
     * @public
     */
    ModifyTagRetentionRule(req, cb) {
        let resp = new ModifyTagRetentionRuleResponse();
        this.request("ModifyTagRetentionRule", req, resp, cb);
    }

    /**
     * This API is used to delete the specified image.
     * @param {DeleteImageRequest} req
     * @param {function(string, DeleteImageResponse):void} cb
     * @public
     */
    DeleteImage(req, cb) {
        let resp = new DeleteImageResponse();
        this.request("DeleteImage", req, resp, cb);
    }

    /**
     * This API is used to query the list of custom domain names of an instance.
     * @param {DescribeInstanceCustomizedDomainRequest} req
     * @param {function(string, DescribeInstanceCustomizedDomainResponse):void} cb
     * @public
     */
    DescribeInstanceCustomizedDomain(req, cb) {
        let resp = new DescribeInstanceCustomizedDomainResponse();
        this.request("DescribeInstanceCustomizedDomain", req, resp, cb);
    }

    /**
     * This API is used to create a temporary or long-term instance access credential.
     * @param {CreateInstanceTokenRequest} req
     * @param {function(string, CreateInstanceTokenResponse):void} cb
     * @public
     */
    CreateInstanceToken(req, cb) {
        let resp = new CreateInstanceTokenResponse();
        this.request("CreateInstanceToken", req, resp, cb);
    }


}
module.exports = TcrClient;
