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
const AccessInfo = models.AccessInfo;
const Trigger = models.Trigger;
const ListAliasesResponse = models.ListAliasesResponse;
const DeleteLayerVersionResponse = models.DeleteLayerVersionResponse;
const GetAliasResponse = models.GetAliasResponse;
const VersionWeight = models.VersionWeight;
const LayerVersionInfo = models.LayerVersionInfo;
const UpdateFunctionConfigurationResponse = models.UpdateFunctionConfigurationResponse;
const PublishLayerVersionResponse = models.PublishLayerVersionResponse;
const PublicNetConfigIn = models.PublicNetConfigIn;
const UpdateAliasRequest = models.UpdateAliasRequest;
const RoutingConfig = models.RoutingConfig;
const UpdateAliasResponse = models.UpdateAliasResponse;
const GetFunctionLogsRequest = models.GetFunctionLogsRequest;
const Tag = models.Tag;
const LogFilter = models.LogFilter;
const EipConfigIn = models.EipConfigIn;
const ListLayerVersionsResponse = models.ListLayerVersionsResponse;
const DeleteFunctionRequest = models.DeleteFunctionRequest;
const CopyFunctionResponse = models.CopyFunctionResponse;
const Namespace = models.Namespace;
const GetFunctionRequest = models.GetFunctionRequest;
const ListNamespacesRequest = models.ListNamespacesRequest;
const PublishVersionRequest = models.PublishVersionRequest;
const DeleteAliasRequest = models.DeleteAliasRequest;
const ListVersionByFunctionResponse = models.ListVersionByFunctionResponse;
const GetAliasRequest = models.GetAliasRequest;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const PublicNetConfigOut = models.PublicNetConfigOut;
const UpdateFunctionCodeRequest = models.UpdateFunctionCodeRequest;
const UpdateFunctionConfigurationRequest = models.UpdateFunctionConfigurationRequest;
const ListTriggersResponse = models.ListTriggersResponse;
const UpdateNamespaceResponse = models.UpdateNamespaceResponse;
const ListLayersRequest = models.ListLayersRequest;
const CopyFunctionRequest = models.CopyFunctionRequest;
const DeleteNamespaceResponse = models.DeleteNamespaceResponse;
const LayerVersionSimple = models.LayerVersionSimple;
const CfsConfig = models.CfsConfig;
const DeleteNamespaceRequest = models.DeleteNamespaceRequest;
const ListFunctionsRequest = models.ListFunctionsRequest;
const CreateTriggerRequest = models.CreateTriggerRequest;
const ListLayersResponse = models.ListLayersResponse;
const DeleteFunctionResponse = models.DeleteFunctionResponse;
const Result = models.Result;
const CreateAliasResponse = models.CreateAliasResponse;
const LogSearchContext = models.LogSearchContext;
const TriggerInfo = models.TriggerInfo;
const CreateFunctionRequest = models.CreateFunctionRequest;
const DeleteAliasResponse = models.DeleteAliasResponse;
const PublishVersionResponse = models.PublishVersionResponse;
const Environment = models.Environment;
const GetFunctionAddressRequest = models.GetFunctionAddressRequest;
const InvokeResponse = models.InvokeResponse;
const InvokeRequest = models.InvokeRequest;
const CreateAliasRequest = models.CreateAliasRequest;
const VersionMatch = models.VersionMatch;
const ListLayerVersionsRequest = models.ListLayerVersionsRequest;
const CreateTriggerResponse = models.CreateTriggerResponse;
const PublishLayerVersionRequest = models.PublishLayerVersionRequest;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const DeleteLayerVersionRequest = models.DeleteLayerVersionRequest;
const Filter = models.Filter;
const Variable = models.Variable;
const GetFunctionResponse = models.GetFunctionResponse;
const Code = models.Code;
const UpdateNamespaceRequest = models.UpdateNamespaceRequest;
const GetLayerVersionResponse = models.GetLayerVersionResponse;
const FunctionLog = models.FunctionLog;
const CfsInsInfo = models.CfsInsInfo;
const FunctionVersion = models.FunctionVersion;
const Function = models.Function;
const DeadLetterConfig = models.DeadLetterConfig;
const ListVersionByFunctionRequest = models.ListVersionByFunctionRequest;
const ListFunctionsResponse = models.ListFunctionsResponse;
const ListTriggersRequest = models.ListTriggersRequest;
const CreateFunctionResponse = models.CreateFunctionResponse;
const ListAliasesRequest = models.ListAliasesRequest;
const EipOutConfig = models.EipOutConfig;
const Alias = models.Alias;
const GetLayerVersionRequest = models.GetLayerVersionRequest;
const GetFunctionLogsResponse = models.GetFunctionLogsResponse;
const DeleteTriggerResponse = models.DeleteTriggerResponse;
const DeleteTriggerRequest = models.DeleteTriggerRequest;
const VpcConfig = models.VpcConfig;
const GetFunctionAddressResponse = models.GetFunctionAddressResponse;
const ListNamespacesResponse = models.ListNamespacesResponse;
const EipConfigOut = models.EipConfigOut;
const UpdateFunctionCodeResponse = models.UpdateFunctionCodeResponse;


/**
 * scf client
 * @class
 */
class ScfClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("scf.tencentcloudapi.com", "2018-04-16", credential, region, profile);
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
     * This API is used to update the configuration of an alias.
     * @param {UpdateAliasRequest} req
     * @param {function(string, UpdateAliasResponse):void} cb
     * @public
     */
    UpdateAlias(req, cb) {
        let resp = new UpdateAliasResponse();
        this.request("UpdateAlias", req, resp, cb);
    }

    /**
     * This API is used to get the function trigger list.
     * @param {ListTriggersRequest} req
     * @param {function(string, ListTriggersResponse):void} cb
     * @public
     */
    ListTriggers(req, cb) {
        let resp = new ListTriggersResponse();
        this.request("ListTriggers", req, resp, cb);
    }

    /**
     * This API is used to get the layer version details, including links used to download files in the layer.
     * @param {GetLayerVersionRequest} req
     * @param {function(string, GetLayerVersionResponse):void} cb
     * @public
     */
    GetLayerVersion(req, cb) {
        let resp = new GetLayerVersionResponse();
        this.request("GetLayerVersion", req, resp, cb);
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
     * This API is used to return the list of all aliases under a function. You can filter them by the specific function version.
     * @param {ListAliasesRequest} req
     * @param {function(string, ListAliasesResponse):void} cb
     * @public
     */
    ListAliases(req, cb) {
        let resp = new ListAliasesResponse();
        this.request("ListAliases", req, resp, cb);
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
     * This API is used to delete a specified version of a specified layer. The deleted version cannot be associated with a function, but the deletion does not affect functions that are referencing this layer.
     * @param {DeleteLayerVersionRequest} req
     * @param {function(string, DeleteLayerVersionResponse):void} cb
     * @public
     */
    DeleteLayerVersion(req, cb) {
        let resp = new DeleteLayerVersionResponse();
        this.request("DeleteLayerVersion", req, resp, cb);
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
     * This API is used to delete an alias of a function version.
     * @param {DeleteAliasRequest} req
     * @param {function(string, DeleteAliasResponse):void} cb
     * @public
     */
    DeleteAlias(req, cb) {
        let resp = new DeleteAliasResponse();
        this.request("DeleteAlias", req, resp, cb);
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
     * This API is used to create an alias for a function version. You can use the alias to mark a specific function version such as DEV/RELEASE. You can also modify the version pointed to by the alias at any time.
An alias must point to a master version and can point to an additional version at the same time. If you specify an alias when invoking a function, the request will be sent to the versions pointed to by the alias. You can configure the ratio between the master version and additional version during request sending.
     * @param {CreateAliasRequest} req
     * @param {function(string, CreateAliasResponse):void} cb
     * @public
     */
    CreateAlias(req, cb) {
        let resp = new CreateAliasResponse();
        this.request("CreateAlias", req, resp, cb);
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
     * This API is used to return the list of all layers, including the information of the latest version of each layer. You can filter them by the compatible runtime.
     * @param {ListLayersRequest} req
     * @param {function(string, ListLayersResponse):void} cb
     * @public
     */
    ListLayers(req, cb) {
        let resp = new ListLayersResponse();
        this.request("ListLayers", req, resp, cb);
    }

    /**
     * This API is used to get the information of all versions of a specified layer.
     * @param {ListLayerVersionsRequest} req
     * @param {function(string, ListLayerVersionsResponse):void} cb
     * @public
     */
    ListLayerVersions(req, cb) {
        let resp = new ListLayerVersionsResponse();
        this.request("ListLayerVersions", req, resp, cb);
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
     * This API is used to create a version for a layer by using the given .zip file or COS object. Each time this API is called with the same layer name, a new version will be generated.
     * @param {PublishLayerVersionRequest} req
     * @param {function(string, PublishLayerVersionResponse):void} cb
     * @public
     */
    PublishLayerVersion(req, cb) {
        let resp = new PublishLayerVersionResponse();
        this.request("PublishLayerVersion", req, resp, cb);
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
     * This API is used to get the alias details such as the name, description, version, and routing information.
     * @param {GetAliasRequest} req
     * @param {function(string, GetAliasResponse):void} cb
     * @public
     */
    GetAlias(req, cb) {
        let resp = new GetAliasResponse();
        this.request("GetAlias", req, resp, cb);
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
