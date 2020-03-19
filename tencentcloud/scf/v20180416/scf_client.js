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
const CreateFunctionRequest = models.CreateFunctionRequest;
const AccessInfo = models.AccessInfo;
const LayerVersionInfo = models.LayerVersionInfo;
const DeleteFunctionRequest = models.DeleteFunctionRequest;
const CopyFunctionResponse = models.CopyFunctionResponse;
const PublicNetConfigOut = models.PublicNetConfigOut;
const Namespace = models.Namespace;
const GetFunctionRequest = models.GetFunctionRequest;
const Environment = models.Environment;
const ListNamespacesRequest = models.ListNamespacesRequest;
const FunctionVersion = models.FunctionVersion;
const GetFunctionAddressRequest = models.GetFunctionAddressRequest;
const ListVersionByFunctionResponse = models.ListVersionByFunctionResponse;
const InvokeResponse = models.InvokeResponse;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const Function = models.Function;
const DeadLetterConfig = models.DeadLetterConfig;
const InvokeRequest = models.InvokeRequest;
const UpdateFunctionConfigurationRequest = models.UpdateFunctionConfigurationRequest;
const VpcConfig = models.VpcConfig;
const ListVersionByFunctionRequest = models.ListVersionByFunctionRequest;
const ListFunctionsResponse = models.ListFunctionsResponse;
const UpdateNamespaceResponse = models.UpdateNamespaceResponse;
const CreateTriggerResponse = models.CreateTriggerResponse;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const DeleteNamespaceRequest = models.DeleteNamespaceRequest;
const Result = models.Result;
const CopyFunctionRequest = models.CopyFunctionRequest;
const Tag = models.Tag;
const DeleteNamespaceResponse = models.DeleteNamespaceResponse;
const UpdateFunctionConfigurationResponse = models.UpdateFunctionConfigurationResponse;
const PublishVersionResponse = models.PublishVersionResponse;
const CreateFunctionResponse = models.CreateFunctionResponse;
const LayerVersionSimple = models.LayerVersionSimple;
const Trigger = models.Trigger;
const Filter = models.Filter;
const Variable = models.Variable;
const GetFunctionResponse = models.GetFunctionResponse;
const GetFunctionLogsResponse = models.GetFunctionLogsResponse;
const ListFunctionsRequest = models.ListFunctionsRequest;
const DeleteTriggerResponse = models.DeleteTriggerResponse;
const EipOutConfig = models.EipOutConfig;
const DeleteTriggerRequest = models.DeleteTriggerRequest;
const Code = models.Code;
const UpdateFunctionCodeRequest = models.UpdateFunctionCodeRequest;
const GetFunctionLogsRequest = models.GetFunctionLogsRequest;
const CreateTriggerRequest = models.CreateTriggerRequest;
const UpdateNamespaceRequest = models.UpdateNamespaceRequest;
const GetFunctionAddressResponse = models.GetFunctionAddressResponse;
const DeleteFunctionResponse = models.DeleteFunctionResponse;
const ListNamespacesResponse = models.ListNamespacesResponse;
const EipConfigOut = models.EipConfigOut;
const PublishVersionRequest = models.PublishVersionRequest;
const FunctionLog = models.FunctionLog;
const LogSearchContext = models.LogSearchContext;
const UpdateFunctionCodeResponse = models.UpdateFunctionCodeResponse;
const LogFilter = models.LogFilter;


/**
 * scf client
 * @class
 */
class ScfClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("scf.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * This API is used to query the function version based on the input parameters.
     * @param {ListVersionByFunctionRequest} req
     * @param {function(string, ListVersionByFunctionResponse):void} cb
     * @public
     */
    ListVersionByFunction(req, cb) {
        let resp = new ListVersionByFunctionResponse();
        this.request("ListVersionByFunction", req, resp, cb);
    }

    /**
     * This API is used to update a namespace.
     * @param {UpdateNamespaceRequest} req
     * @param {function(string, UpdateNamespaceResponse):void} cb
     * @public
     */
    UpdateNamespace(req, cb) {
        let resp = new UpdateNamespaceResponse();
        this.request("UpdateNamespace", req, resp, cb);
    }

    /**
     * This API is used to run a function.
     * @param {InvokeRequest} req
     * @param {function(string, InvokeResponse):void} cb
     * @public
     */
    Invoke(req, cb) {
        let resp = new InvokeResponse();
        this.request("Invoke", req, resp, cb);
    }

    /**
     * This API is used to delete a function based on the input parameters.
     * @param {DeleteFunctionRequest} req
     * @param {function(string, DeleteFunctionResponse):void} cb
     * @public
     */
    DeleteFunction(req, cb) {
        let resp = new DeleteFunctionResponse();
        this.request("DeleteFunction", req, resp, cb);
    }

    /**
     * This API is used for users to release a new version of the function.
     * @param {PublishVersionRequest} req
     * @param {function(string, PublishVersionResponse):void} cb
     * @public
     */
    PublishVersion(req, cb) {
        let resp = new PublishVersionResponse();
        this.request("PublishVersion", req, resp, cb);
    }

    /**
     * This API is used to delete an existing trigger based on the input parameters.
     * @param {DeleteTriggerRequest} req
     * @param {function(string, DeleteTriggerResponse):void} cb
     * @public
     */
    DeleteTrigger(req, cb) {
        let resp = new DeleteTriggerResponse();
        this.request("DeleteTrigger", req, resp, cb);
    }

    /**
     * This API is used to obtain function details, such as name, code, handler, associated trigger, and timeout.
     * @param {GetFunctionRequest} req
     * @param {function(string, GetFunctionResponse):void} cb
     * @public
     */
    GetFunction(req, cb) {
        let resp = new GetFunctionResponse();
        this.request("GetFunction", req, resp, cb);
    }

    /**
     * This API is used to obtain the download address of the function code package.
     * @param {GetFunctionAddressRequest} req
     * @param {function(string, GetFunctionAddressResponse):void} cb
     * @public
     */
    GetFunctionAddress(req, cb) {
        let resp = new GetFunctionAddressResponse();
        this.request("GetFunctionAddress", req, resp, cb);
    }

    /**
     * This API is used to display a namespace list.
     * @param {ListNamespacesRequest} req
     * @param {function(string, ListNamespacesResponse):void} cb
     * @public
     */
    ListNamespaces(req, cb) {
        let resp = new ListNamespacesResponse();
        this.request("ListNamespaces", req, resp, cb);
    }

    /**
     * This API is used to update the function configuration based on the input parameters.
     * @param {UpdateFunctionConfigurationRequest} req
     * @param {function(string, UpdateFunctionConfigurationResponse):void} cb
     * @public
     */
    UpdateFunctionConfiguration(req, cb) {
        let resp = new UpdateFunctionConfigurationResponse();
        this.request("UpdateFunctionConfiguration", req, resp, cb);
    }

    /**
     * This API is used to create a trigger based on the input parameters.
     * @param {CreateTriggerRequest} req
     * @param {function(string, CreateTriggerResponse):void} cb
     * @public
     */
    CreateTrigger(req, cb) {
        let resp = new CreateTriggerResponse();
        this.request("CreateTrigger", req, resp, cb);
    }

    /**
     * This API is used to create a namespace based on the input parameters.
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        let resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }

    /**
     * This API is used to replicate a function. You can store the replicated function in a specified Region and Namespace.
Note: This API **does not** replicate the following objects or attributes of the function:
1. Function trigger
2. Versions other than $LATEST
3. CLS target of the logs configured in the function

You can manually configure the function after replication as required.
     * @param {CopyFunctionRequest} req
     * @param {function(string, CopyFunctionResponse):void} cb
     * @public
     */
    CopyFunction(req, cb) {
        let resp = new CopyFunctionResponse();
        this.request("CopyFunction", req, resp, cb);
    }

    /**
     * This API is used to return function running logs according to the specified log query criteria.
     * @param {GetFunctionLogsRequest} req
     * @param {function(string, GetFunctionLogsResponse):void} cb
     * @public
     */
    GetFunctionLogs(req, cb) {
        let resp = new GetFunctionLogsResponse();
        this.request("GetFunctionLogs", req, resp, cb);
    }

    /**
     * This API is used to return relevant function information based on the input query parameters.
     * @param {ListFunctionsRequest} req
     * @param {function(string, ListFunctionsResponse):void} cb
     * @public
     */
    ListFunctions(req, cb) {
        let resp = new ListFunctionsResponse();
        this.request("ListFunctions", req, resp, cb);
    }

    /**
     * This API is used to create a function based on the input parameters.
     * @param {CreateFunctionRequest} req
     * @param {function(string, CreateFunctionResponse):void} cb
     * @public
     */
    CreateFunction(req, cb) {
        let resp = new CreateFunctionResponse();
        this.request("CreateFunction", req, resp, cb);
    }

    /**
     * This API is used to create a namespace based on the input parameters.
     * @param {DeleteNamespaceRequest} req
     * @param {function(string, DeleteNamespaceResponse):void} cb
     * @public
     */
    DeleteNamespace(req, cb) {
        let resp = new DeleteNamespaceResponse();
        this.request("DeleteNamespace", req, resp, cb);
    }

    /**
     * This API is used to update the function code based on the input parameters.
     * @param {UpdateFunctionCodeRequest} req
     * @param {function(string, UpdateFunctionCodeResponse):void} cb
     * @public
     */
    UpdateFunctionCode(req, cb) {
        let resp = new UpdateFunctionCodeResponse();
        this.request("UpdateFunctionCode", req, resp, cb);
    }


}
module.exports = ScfClient;
