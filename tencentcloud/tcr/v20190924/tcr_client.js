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
const DeleteImmutableTagRulesResponse = models.DeleteImmutableTagRulesResponse;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const TaskDetail = models.TaskDetail;
const ReplicationRegistry = models.ReplicationRegistry;
const DescribeReplicationInstanceCreateTasksResponse = models.DescribeReplicationInstanceCreateTasksResponse;
const DeleteMultipleSecurityPolicyResponse = models.DeleteMultipleSecurityPolicyResponse;
const DescribeReplicationInstancesRequest = models.DescribeReplicationInstancesRequest;
const ManageReplicationRequest = models.ManageReplicationRequest;
const ModifyImmutableTagRulesRequest = models.ModifyImmutableTagRulesRequest;
const CreateReplicationInstanceResponse = models.CreateReplicationInstanceResponse;
const CreateInstanceTokenRequest = models.CreateInstanceTokenRequest;
const ReplicationRule = models.ReplicationRule;
const CreateMultipleSecurityPolicyRequest = models.CreateMultipleSecurityPolicyRequest;
const DescribeReplicationInstancesResponse = models.DescribeReplicationInstancesResponse;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const CheckInstanceRequest = models.CheckInstanceRequest;
const DescribeReplicationInstanceSyncStatusRequest = models.DescribeReplicationInstanceSyncStatusRequest;
const ModifyImmutableTagRulesResponse = models.ModifyImmutableTagRulesResponse;
const CreateReplicationInstanceRequest = models.CreateReplicationInstanceRequest;
const CheckInstanceResponse = models.CheckInstanceResponse;
const CreateImmutableTagRulesResponse = models.CreateImmutableTagRulesResponse;
const DescribeImmutableTagRulesRequest = models.DescribeImmutableTagRulesRequest;
const CreateMultipleSecurityPolicyResponse = models.CreateMultipleSecurityPolicyResponse;
const DeleteImmutableTagRulesRequest = models.DeleteImmutableTagRulesRequest;
const ManageReplicationResponse = models.ManageReplicationResponse;
const DescribeReplicationInstanceCreateTasksRequest = models.DescribeReplicationInstanceCreateTasksRequest;
const CreateImmutableTagRulesRequest = models.CreateImmutableTagRulesRequest;
const DescribeReplicationInstanceSyncStatusResponse = models.DescribeReplicationInstanceSyncStatusResponse;
const ImmutableTagRule = models.ImmutableTagRule;
const DeleteMultipleSecurityPolicyRequest = models.DeleteMultipleSecurityPolicyRequest;
const DescribeImmutableTagRulesResponse = models.DescribeImmutableTagRulesResponse;
const PeerReplicationOption = models.PeerReplicationOption;
const ReplicationLog = models.ReplicationLog;
const SecurityPolicy = models.SecurityPolicy;
const ReplicationFilter = models.ReplicationFilter;
const CreateInstanceTokenResponse = models.CreateInstanceTokenResponse;


/**
 * tcr client
 * @class
 */
class TcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcr.tencentcloudapi.com", "2019-09-24", credential, region, profile);
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
