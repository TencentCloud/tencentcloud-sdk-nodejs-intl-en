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
const NativeNodeInfo = models.NativeNodeInfo;
const HealthCheckTemplateRule = models.HealthCheckTemplateRule;
const HealthCheckPolicyRule = models.HealthCheckPolicyRule;
const DeleteHealthCheckPolicyRequest = models.DeleteHealthCheckPolicyRequest;
const CreateNodePoolResponse = models.CreateNodePoolResponse;
const CreateNativeNodePoolParam = models.CreateNativeNodePoolParam;
const DescribeNodePoolsResponse = models.DescribeNodePoolsResponse;
const ExternalNodeInfo = models.ExternalNodeInfo;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const AutoUpgradeOptions = models.AutoUpgradeOptions;
const AutoscalingAdded = models.AutoscalingAdded;
const Instance = models.Instance;
const DescribeHealthCheckPolicyBindingsRequest = models.DescribeHealthCheckPolicyBindingsRequest;
const NodeCountSummary = models.NodeCountSummary;
const SuperNodePoolInfo = models.SuperNodePoolInfo;
const RuntimeConfig = models.RuntimeConfig;
const Label = models.Label;
const HealthCheckPolicyBinding = models.HealthCheckPolicyBinding;
const CreateHealthCheckPolicyRequest = models.CreateHealthCheckPolicyRequest;
const InstanceExtraArgs = models.InstanceExtraArgs;
const MachineUpgradeSettings = models.MachineUpgradeSettings;
const UpdateNativeNodePoolParam = models.UpdateNativeNodePoolParam;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const DeleteNodePoolResponse = models.DeleteNodePoolResponse;
const Tag = models.Tag;
const MachineSetScaling = models.MachineSetScaling;
const ModifyNodePoolRequest = models.ModifyNodePoolRequest;
const Annotation = models.Annotation;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const DeleteHealthCheckPolicyResponse = models.DeleteHealthCheckPolicyResponse;
const TagSpecification = models.TagSpecification;
const LifecycleConfig = models.LifecycleConfig;
const ModifyNodePoolResponse = models.ModifyNodePoolResponse;
const RegularNodePoolInfo = models.RegularNodePoolInfo;
const Taint = models.Taint;
const Filter = models.Filter;
const DescribeHealthCheckPoliciesRequest = models.DescribeHealthCheckPoliciesRequest;
const DescribeHealthCheckTemplateResponse = models.DescribeHealthCheckTemplateResponse;
const CreateNodePoolRequest = models.CreateNodePoolRequest;
const RegularNodeInfo = models.RegularNodeInfo;
const DescribeHealthCheckPolicyBindingsResponse = models.DescribeHealthCheckPolicyBindingsResponse;
const NativeNodePoolInfo = models.NativeNodePoolInfo;
const DescribeNodePoolsRequest = models.DescribeNodePoolsRequest;
const NodePool = models.NodePool;
const DeleteNodePoolRequest = models.DeleteNodePoolRequest;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const IntOrString = models.IntOrString;
const ExternalNodePoolInfo = models.ExternalNodePoolInfo;
const DescribeHealthCheckTemplateRequest = models.DescribeHealthCheckTemplateRequest;
const DescribeHealthCheckPoliciesResponse = models.DescribeHealthCheckPoliciesResponse;
const HealthCheckTemplate = models.HealthCheckTemplate;
const InternetAccessible = models.InternetAccessible;
const ModifyHealthCheckPolicyRequest = models.ModifyHealthCheckPolicyRequest;
const SuperNodeInfo = models.SuperNodeInfo;
const ManuallyAdded = models.ManuallyAdded;
const ManagementConfig = models.ManagementConfig;
const ModifyHealthCheckPolicyResponse = models.ModifyHealthCheckPolicyResponse;
const SortBy = models.SortBy;
const HealthCheckPolicy = models.HealthCheckPolicy;
const Disk = models.Disk;
const CreateHealthCheckPolicyResponse = models.CreateHealthCheckPolicyResponse;
const DataDisk = models.DataDisk;


/**
 * tke client
 * @class
 */
class TkeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tke.intl.tencentcloudapi.com", "2022-05-01", credential, region, profile);
    }
    
    /**
     * This API is used to query a TKE node pool list.
     * @param {DescribeNodePoolsRequest} req
     * @param {function(string, DescribeNodePoolsResponse):void} cb
     * @public
     */
    DescribeNodePools(req, cb) {
        let resp = new DescribeNodePoolsResponse();
        this.request("DescribeNodePools", req, resp, cb);
    }

    /**
     * This API is used to update a TKE node pool.
     * @param {ModifyNodePoolRequest} req
     * @param {function(string, ModifyNodePoolResponse):void} cb
     * @public
     */
    ModifyNodePool(req, cb) {
        let resp = new ModifyNodePoolResponse();
        this.request("ModifyNodePool", req, resp, cb);
    }

    /**
     * This API is used to delete a health check policy.
     * @param {DeleteHealthCheckPolicyRequest} req
     * @param {function(string, DeleteHealthCheckPolicyResponse):void} cb
     * @public
     */
    DeleteHealthCheckPolicy(req, cb) {
        let resp = new DeleteHealthCheckPolicyResponse();
        this.request("DeleteHealthCheckPolicy", req, resp, cb);
    }

    /**
     * This API is used to delete a TKE node pool.
     * @param {DeleteNodePoolRequest} req
     * @param {function(string, DeleteNodePoolResponse):void} cb
     * @public
     */
    DeleteNodePool(req, cb) {
        let resp = new DeleteNodePoolResponse();
        this.request("DeleteNodePool", req, resp, cb);
    }

    /**
     * This API is used to query a health check policy.
     * @param {DescribeHealthCheckPoliciesRequest} req
     * @param {function(string, DescribeHealthCheckPoliciesResponse):void} cb
     * @public
     */
    DescribeHealthCheckPolicies(req, cb) {
        let resp = new DescribeHealthCheckPoliciesResponse();
        this.request("DescribeHealthCheckPolicies", req, resp, cb);
    }

    /**
     * This API is used to modify a health check policy.
     * @param {ModifyHealthCheckPolicyRequest} req
     * @param {function(string, ModifyHealthCheckPolicyResponse):void} cb
     * @public
     */
    ModifyHealthCheckPolicy(req, cb) {
        let resp = new ModifyHealthCheckPolicyResponse();
        this.request("ModifyHealthCheckPolicy", req, resp, cb);
    }

    /**
     * This API is used to create a TKE node pool
     * @param {CreateNodePoolRequest} req
     * @param {function(string, CreateNodePoolResponse):void} cb
     * @public
     */
    CreateNodePool(req, cb) {
        let resp = new CreateNodePoolResponse();
        this.request("CreateNodePool", req, resp, cb);
    }

    /**
     * This API is used to query a health check policy template.
     * @param {DescribeHealthCheckTemplateRequest} req
     * @param {function(string, DescribeHealthCheckTemplateResponse):void} cb
     * @public
     */
    DescribeHealthCheckTemplate(req, cb) {
        let resp = new DescribeHealthCheckTemplateResponse();
        this.request("DescribeHealthCheckTemplate", req, resp, cb);
    }

    /**
     * This API is used to query a health check policy binding relationship.
     * @param {DescribeHealthCheckPolicyBindingsRequest} req
     * @param {function(string, DescribeHealthCheckPolicyBindingsResponse):void} cb
     * @public
     */
    DescribeHealthCheckPolicyBindings(req, cb) {
        let resp = new DescribeHealthCheckPolicyBindingsResponse();
        this.request("DescribeHealthCheckPolicyBindings", req, resp, cb);
    }

    /**
     * This API is used to create a health check policy.
     * @param {CreateHealthCheckPolicyRequest} req
     * @param {function(string, CreateHealthCheckPolicyResponse):void} cb
     * @public
     */
    CreateHealthCheckPolicy(req, cb) {
        let resp = new CreateHealthCheckPolicyResponse();
        this.request("CreateHealthCheckPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the information of node instances in a cluster.
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        let resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }


}
module.exports = TkeClient;
