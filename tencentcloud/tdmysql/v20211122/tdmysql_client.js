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
const ArchiveLogInterval = models.ArchiveLogInterval;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const ModifyBinlogStatusResponse = models.ModifyBinlogStatusResponse;
const DescribeFlowRequest = models.DescribeFlowRequest;
const ModifyDBSBackupSetCommentResponse = models.ModifyDBSBackupSetCommentResponse;
const ModifyInstanceNameResponse = models.ModifyInstanceNameResponse;
const DescribeDatabaseTableRequest = models.DescribeDatabaseTableRequest;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const DescribeDatabaseTableResponse = models.DescribeDatabaseTableResponse;
const DescribeDatabaseObjectsResponse = models.DescribeDatabaseObjectsResponse;
const SecurityGroupBound = models.SecurityGroupBound;
const CreateDBSBackupResponse = models.CreateDBSBackupResponse;
const CreateDBSBackupRequest = models.CreateDBSBackupRequest;
const DescribeBillingEnableResponse = models.DescribeBillingEnableResponse;
const DestroyInstancesRequest = models.DestroyInstancesRequest;
const DescribeBillingEnableRequest = models.DescribeBillingEnableRequest;
const DescribeDBSecurityGroupsRequest = models.DescribeDBSecurityGroupsRequest;
const TableColumn = models.TableColumn;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const ModifyInstanceNameRequest = models.ModifyInstanceNameRequest;
const ParamDesc = models.ParamDesc;
const ModifyAutoRenewFlagRequest = models.ModifyAutoRenewFlagRequest;
const ModifyDBSBackupPolicyResponse = models.ModifyDBSBackupPolicyResponse;
const DescribeDBSCloneInstancesResponse = models.DescribeDBSCloneInstancesResponse;
const DescribeDBSecurityGroupsResponse = models.DescribeDBSecurityGroupsResponse;
const BackupPolicyModelInput = models.BackupPolicyModelInput;
const DatabaseFunction = models.DatabaseFunction;
const ModifyDBSBackupPolicyRequest = models.ModifyDBSBackupPolicyRequest;
const DescribeDBSCloneInstancesRequest = models.DescribeDBSCloneInstancesRequest;
const DescribeDatabaseObjectsRequest = models.DescribeDatabaseObjectsRequest;
const DescribeDBSAvailableRecoveryTimeResponse = models.DescribeDBSAvailableRecoveryTimeResponse;
const ModifyAutoRenewFlagResponse = models.ModifyAutoRenewFlagResponse;
const DestroyInstancesResponse = models.DestroyInstancesResponse;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const SecurityGroup = models.SecurityGroup;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const DescribeDBSAvailableRecoveryTimeRequest = models.DescribeDBSAvailableRecoveryTimeRequest;
const DatabaseTable = models.DatabaseTable;
const DeleteDBSBackupSetsResponse = models.DeleteDBSBackupSetsResponse;
const DescribeFlowResponse = models.DescribeFlowResponse;
const ConstraintRange = models.ConstraintRange;
const CancelIsolateDBInstancesResponse = models.CancelIsolateDBInstancesResponse;
const DatabaseView = models.DatabaseView;
const CancelIsolateDBInstancesRequest = models.CancelIsolateDBInstancesRequest;
const ModifyDBSBackupSetCommentRequest = models.ModifyDBSBackupSetCommentRequest;
const DatabaseProcedure = models.DatabaseProcedure;
const DBParamValue = models.DBParamValue;
const ParamConstraint = models.ParamConstraint;
const ModifyBinlogStatusRequest = models.ModifyBinlogStatusRequest;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;
const DeleteDBSBackupSetsRequest = models.DeleteDBSBackupSetsRequest;
const CloneInstanceModel = models.CloneInstanceModel;


/**
 * tdmysql client
 * @class
 */
class TdmysqlClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdmysql.intl.tencentcloudapi.com", "2021-11-22", credential, region, profile);
    }
    
    /**
     * This API is used to query the object list in the database of a cloud database instance, including table, stored procedure, view and function.
     * @param {DescribeDatabaseObjectsRequest} req
     * @param {function(string, DescribeDatabaseObjectsResponse):void} cb
     * @public
     */
    DescribeDatabaseObjects(req, cb) {
        let resp = new DescribeDatabaseObjectsResponse();
        this.request("DescribeDatabaseObjects", req, resp, cb);
    }

    /**
     * Redundant API, no API calls.

This API is used to query table information of a cloud database instance.
     * @param {DescribeDatabaseTableRequest} req
     * @param {function(string, DescribeDatabaseTableResponse):void} cb
     * @public
     */
    DescribeDatabaseTable(req, cb) {
        let resp = new DescribeDatabaseTableResponse();
        this.request("DescribeDatabaseTable", req, resp, cb);
    }

    /**
     * This API is used to obtain the current parameter settings of the instance.
     * @param {DescribeDBParametersRequest} req
     * @param {function(string, DescribeDBParametersResponse):void} cb
     * @public
     */
    DescribeDBParameters(req, cb) {
        let resp = new DescribeDBParametersResponse();
        this.request("DescribeDBParameters", req, resp, cb);
    }

    /**
     * This API is used to query instance security group information.
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        let resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to lift isolation for instances in batch.
     * @param {CancelIsolateDBInstancesRequest} req
     * @param {function(string, CancelIsolateDBInstancesResponse):void} cb
     * @public
     */
    CancelIsolateDBInstances(req, cb) {
        let resp = new CancelIsolateDBInstancesResponse();
        this.request("CancelIsolateDBInstances", req, resp, cb);
    }

    /**
     * This API is used to entirely overwrite the API feature of ModifyInstanceCdc.

Modify the binlog status.
     * @param {ModifyBinlogStatusRequest} req
     * @param {function(string, ModifyBinlogStatusResponse):void} cb
     * @public
     */
    ModifyBinlogStatus(req, cb) {
        let resp = new ModifyBinlogStatusResponse();
        this.request("ModifyBinlogStatus", req, resp, cb);
    }

    /**
     * Query recoverable time.
     * @param {DescribeDBSAvailableRecoveryTimeRequest} req
     * @param {function(string, DescribeDBSAvailableRecoveryTimeResponse):void} cb
     * @public
     */
    DescribeDBSAvailableRecoveryTime(req, cb) {
        let resp = new DescribeDBSAvailableRecoveryTimeResponse();
        this.request("DescribeDBSAvailableRecoveryTime", req, resp, cb);
    }

    /**
     * No place to call.

This API is used to query whether billing is enabled.
     * @param {DescribeBillingEnableRequest} req
     * @param {function(string, DescribeBillingEnableResponse):void} cb
     * @public
     */
    DescribeBillingEnable(req, cb) {
        let resp = new DescribeBillingEnableResponse();
        this.request("DescribeBillingEnable", req, resp, cb);
    }

    /**
     * Modify the backup set remark.
     * @param {ModifyDBSBackupSetCommentRequest} req
     * @param {function(string, ModifyDBSBackupSetCommentResponse):void} cb
     * @public
     */
    ModifyDBSBackupSetComment(req, cb) {
        let resp = new ModifyDBSBackupSetCommentResponse();
        this.request("ModifyDBSBackupSetComment", req, resp, cb);
    }

    /**
     * Delete instance backup sets.
     * @param {DeleteDBSBackupSetsRequest} req
     * @param {function(string, DeleteDBSBackupSetsResponse):void} cb
     * @public
     */
    DeleteDBSBackupSets(req, cb) {
        let resp = new DeleteDBSBackupSetsResponse();
        this.request("DeleteDBSBackupSets", req, resp, cb);
    }

    /**
     * Modify the instance backup strategy.
     * @param {ModifyDBSBackupPolicyRequest} req
     * @param {function(string, ModifyDBSBackupPolicyResponse):void} cb
     * @public
     */
    ModifyDBSBackupPolicy(req, cb) {
        let resp = new ModifyDBSBackupPolicyResponse();
        this.request("ModifyDBSBackupPolicy", req, resp, cb);
    }

    /**
     * This API is used to destroy instances in batch.
     * @param {DestroyInstancesRequest} req
     * @param {function(string, DestroyInstancesResponse):void} cb
     * @public
     */
    DestroyInstances(req, cb) {
        let resp = new DestroyInstancesResponse();
        this.request("DestroyInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the auto-renewal flag.
     * @param {ModifyAutoRenewFlagRequest} req
     * @param {function(string, ModifyAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyAutoRenewFlag(req, cb) {
        let resp = new ModifyAutoRenewFlagResponse();
        this.request("ModifyAutoRenewFlag", req, resp, cb);
    }

    /**
     * Create an instance backup set.
     * @param {CreateDBSBackupRequest} req
     * @param {function(string, CreateDBSBackupResponse):void} cb
     * @public
     */
    CreateDBSBackup(req, cb) {
        let resp = new CreateDBSBackupResponse();
        this.request("CreateDBSBackup", req, resp, cb);
    }

    /**
     * This API is used to modify instance name.
     * @param {ModifyInstanceNameRequest} req
     * @param {function(string, ModifyInstanceNameResponse):void} cb
     * @public
     */
    ModifyInstanceName(req, cb) {
        let resp = new ModifyInstanceNameResponse();
        this.request("ModifyInstanceName", req, resp, cb);
    }

    /**
     * This API is used to modify instance parameters.
     * @param {ModifyDBParametersRequest} req
     * @param {function(string, ModifyDBParametersResponse):void} cb
     * @public
     */
    ModifyDBParameters(req, cb) {
        let resp = new ModifyDBParametersResponse();
        this.request("ModifyDBParameters", req, resp, cb);
    }

    /**
     * Query clone list of instances.
     * @param {DescribeDBSCloneInstancesRequest} req
     * @param {function(string, DescribeDBSCloneInstancesResponse):void} cb
     * @public
     */
    DescribeDBSCloneInstances(req, cb) {
        let resp = new DescribeDBSCloneInstancesResponse();
        this.request("DescribeDBSCloneInstances", req, resp, cb);
    }

    /**
     * This API is used to batch isolate instances.
     * @param {IsolateDBInstanceRequest} req
     * @param {function(string, IsolateDBInstanceResponse):void} cb
     * @public
     */
    IsolateDBInstance(req, cb) {
        let resp = new IsolateDBInstanceResponse();
        this.request("IsolateDBInstance", req, resp, cb);
    }

    /**
     * This API is used to modify cloud database security groups.
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to query the process status of an asynchronous task.
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        let resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }


}
module.exports = TdmysqlClient;
