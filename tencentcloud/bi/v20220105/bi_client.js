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
const PageScreenVO = models.PageScreenVO;
const DeleteProjectRequest = models.DeleteProjectRequest;
const ExportScreenPageResponse = models.ExportScreenPageResponse;
const ProjectConfigResult = models.ProjectConfigResult;
const DeleteUserRoleResponse = models.DeleteUserRoleResponse;
const DescribeUserProjectListRequest = models.DescribeUserProjectListRequest;
const ModifyResourceUserRequest = models.ModifyResourceUserRequest;
const CorpUserListData = models.CorpUserListData;
const RowColumnConfig = models.RowColumnConfig;
const JoinRelation = models.JoinRelation;
const PageScreenListVO = models.PageScreenListVO;
const DescribeSourceFieldListResponse = models.DescribeSourceFieldListResponse;
const UserResourceDTO = models.UserResourceDTO;
const ModifyDatasourceCloudResponse = models.ModifyDatasourceCloudResponse;
const CreateUserRoleResponse = models.CreateUserRoleResponse;
const ApplyEmbedTokenInfo = models.ApplyEmbedTokenInfo;
const Project = models.Project;
const ExportScreenPageRequest = models.ExportScreenPageRequest;
const JoinSourceTable = models.JoinSourceTable;
const CreateUserRoleProjectRequest = models.CreateUserRoleProjectRequest;
const WidgetVO = models.WidgetVO;
const CreateDatasourceResponse = models.CreateDatasourceResponse;
const TableColumnListData = models.TableColumnListData;
const DeleteDatasourceResponse = models.DeleteDatasourceResponse;
const CreateProjectRequest = models.CreateProjectRequest;
const ApplyEmbedIntervalRequest = models.ApplyEmbedIntervalRequest;
const ModifyResourceUserResponse = models.ModifyResourceUserResponse;
const CreateDataTableRequest = models.CreateDataTableRequest;
const CreatePermissionRanksRequest = models.CreatePermissionRanksRequest;
const ModifyResourceUserGroupResourceRequest = models.ModifyResourceUserGroupResourceRequest;
const DescribeProjectInfoRequest = models.DescribeProjectInfoRequest;
const ModifyUserRoleRequest = models.ModifyUserRoleRequest;
const CreateUserRoleRequest = models.CreateUserRoleRequest;
const CreateEmbedTokenRequest = models.CreateEmbedTokenRequest;
const ModifyDatasourceRequest = models.ModifyDatasourceRequest;
const CreatePermissionRanksResponse = models.CreatePermissionRanksResponse;
const CreateDataTableResponse = models.CreateDataTableResponse;
const CreateProjectResponse = models.CreateProjectResponse;
const DescribeProjectInfoResponse = models.DescribeProjectInfoResponse;
const DeleteProjectResponse = models.DeleteProjectResponse;
const ApplyEmbedIntervalResponse = models.ApplyEmbedIntervalResponse;
const ResourceItem = models.ResourceItem;
const UserInfo = models.UserInfo;
const UserIdAndUserName = models.UserIdAndUserName;
const EmptyValue = models.EmptyValue;
const DescribeUserRoleListResponse = models.DescribeUserRoleListResponse;
const RowColumnTagValue = models.RowColumnTagValue;
const UserRoleListDataRoleInfo = models.UserRoleListDataRoleInfo;
const EmbedTokenInfo = models.EmbedTokenInfo;
const JoinRelationField = models.JoinRelationField;
const DescribeProjectListResponse = models.DescribeProjectListResponse;
const TableColumn = models.TableColumn;
const DatasourceInfoData = models.DatasourceInfoData;
const DescribePageWidgetListRequest = models.DescribePageWidgetListRequest;
const DescribeUserRoleProjectListRequest = models.DescribeUserRoleProjectListRequest;
const BaseStateAction = models.BaseStateAction;
const Data = models.Data;
const DescribeUserRoleProjectListResponse = models.DescribeUserRoleProjectListResponse;
const DeleteUserRoleRequest = models.DeleteUserRoleRequest;
const UserRoleListData = models.UserRoleListData;
const CreateUserRoleProjectResponse = models.CreateUserRoleProjectResponse;
const DeleteUserRoleProjectRequest = models.DeleteUserRoleProjectRequest;
const DescribeUserRoleListRequest = models.DescribeUserRoleListRequest;
const ClearEmbedTokenResponse = models.ClearEmbedTokenResponse;
const ParamCreateDTO = models.ParamCreateDTO;
const DescribeSourceFieldListRequest = models.DescribeSourceFieldListRequest;
const EmptyValueConfig = models.EmptyValueConfig;
const DeleteUserRoleProjectResponse = models.DeleteUserRoleProjectResponse;
const FieldRemarkDTO = models.FieldRemarkDTO;
const IdDTO = models.IdDTO;
const ModifyDatasourceCloudRequest = models.ModifyDatasourceCloudRequest;
const CreateDatasourceCloudRequest = models.CreateDatasourceCloudRequest;
const DataId = models.DataId;
const ClearEmbedTokenRequest = models.ClearEmbedTokenRequest;
const DescribeUserProjectListResponse = models.DescribeUserProjectListResponse;
const CreateDatasourceRequest = models.CreateDatasourceRequest;
const DeleteDatasourceRequest = models.DeleteDatasourceRequest;
const WidgetListVO = models.WidgetListVO;
const ModifyDatasourceResponse = models.ModifyDatasourceResponse;
const DescribePageWidgetListResponse = models.DescribePageWidgetListResponse;
const CreateDatasourceCloudResponse = models.CreateDatasourceCloudResponse;
const ProjectConfigList = models.ProjectConfigList;
const PermissionGroup = models.PermissionGroup;
const ApiDatasourceConfig = models.ApiDatasourceConfig;
const UserGroupDTO = models.UserGroupDTO;
const ModifyProjectResponse = models.ModifyProjectResponse;
const ModifyUserRoleResponse = models.ModifyUserRoleResponse;
const ModifyUserRoleProjectResponse = models.ModifyUserRoleProjectResponse;
const TableField = models.TableField;
const ModifyProjectRequest = models.ModifyProjectRequest;
const ModifyUserRoleProjectRequest = models.ModifyUserRoleProjectRequest;
const ModifyResourceUserGroupResourceResponse = models.ModifyResourceUserGroupResourceResponse;
const DescribeProjectListRequest = models.DescribeProjectListRequest;
const UserRoleListDataUserRoleInfo = models.UserRoleListDataUserRoleInfo;
const DatasourceInfo = models.DatasourceInfo;
const ProjectListData = models.ProjectListData;
const CreateEmbedTokenResponse = models.CreateEmbedTokenResponse;
const DescribeDatasourceListRequest = models.DescribeDatasourceListRequest;
const FrequencyConfig = models.FrequencyConfig;
const DescribeDatasourceListResponse = models.DescribeDatasourceListResponse;
const ErrorInfo = models.ErrorInfo;
const PermissionComponent = models.PermissionComponent;


/**
 * bi client
 * @class
 */
class BiClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bi.intl.tencentcloudapi.com", "2022-01-05", credential, region, profile);
    }
    
    /**
     * This API is used to update a data source.
     * @param {ModifyDatasourceRequest} req
     * @param {function(string, ModifyDatasourceResponse):void} cb
     * @public
     */
    ModifyDatasource(req, cb) {
        let resp = new ModifyDatasourceResponse();
        this.request("ModifyDatasource", req, resp, cb);
    }

    /**
     * This API is used to query a data source list.
     * @param {DescribeDatasourceListRequest} req
     * @param {function(string, DescribeDatasourceListResponse):void} cb
     * @public
     */
    DescribeDatasourceList(req, cb) {
        let resp = new DescribeDatasourceListResponse();
        this.request("DescribeDatasourceList", req, resp, cb);
    }

    /**
     * This API is used to create a data source.
     * @param {CreateDatasourceRequest} req
     * @param {function(string, CreateDatasourceResponse):void} cb
     * @public
     */
    CreateDatasource(req, cb) {
        let resp = new CreateDatasourceResponse();
        this.request("CreateDatasource", req, resp, cb);
    }

    /**
     * Create row/column permissions
     * @param {CreatePermissionRanksRequest} req
     * @param {function(string, CreatePermissionRanksResponse):void} cb
     * @public
     */
    CreatePermissionRanks(req, cb) {
        let resp = new CreatePermissionRanksResponse();
        this.request("CreatePermissionRanks", req, resp, cb);
    }

    /**
     * This API is used to obtain project details.
     * @param {DescribeProjectInfoRequest} req
     * @param {function(string, DescribeProjectInfoResponse):void} cb
     * @public
     */
    DescribeProjectInfo(req, cb) {
        let resp = new DescribeProjectInfoResponse();
        this.request("DescribeProjectInfo", req, resp, cb);
    }

    /**
     * This API is used to create a project.
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * This API is used to create a cloud database.
     * @param {CreateDatasourceCloudRequest} req
     * @param {function(string, CreateDatasourceCloudResponse):void} cb
     * @public
     */
    CreateDatasourceCloud(req, cb) {
        let resp = new CreateDatasourceCloudResponse();
        this.request("CreateDatasourceCloud", req, resp, cb);
    }

    /**
     * This API is used to modify user role info.
     * @param {ModifyUserRoleRequest} req
     * @param {function(string, ModifyUserRoleResponse):void} cb
     * @public
     */
    ModifyUserRole(req, cb) {
        let resp = new ModifyUserRoleResponse();
        this.request("ModifyUserRole", req, resp, cb);
    }

    /**
     * This API is used to export a screenshot.
     * @param {ExportScreenPageRequest} req
     * @param {function(string, ExportScreenPageResponse):void} cb
     * @public
     */
    ExportScreenPage(req, cb) {
        let resp = new ExportScreenPageResponse();
        this.request("ExportScreenPage", req, resp, cb);
    }

    /**
     * This API is used to create an embedded report with strong authentication.
     * @param {CreateEmbedTokenRequest} req
     * @param {function(string, CreateEmbedTokenResponse):void} cb
     * @public
     */
    CreateEmbedToken(req, cb) {
        let resp = new CreateEmbedTokenResponse();
        this.request("CreateEmbedToken", req, resp, cb);
    }

    /**
     * This API is used to create a user role.
     * @param {CreateUserRoleRequest} req
     * @param {function(string, CreateUserRoleResponse):void} cb
     * @public
     */
    CreateUserRole(req, cb) {
        let resp = new CreateUserRoleResponse();
        this.request("CreateUserRole", req, resp, cb);
    }

    /**
     * This API is used to delete a data source.
     * @param {DeleteDatasourceRequest} req
     * @param {function(string, DeleteDatasourceResponse):void} cb
     * @public
     */
    DeleteDatasource(req, cb) {
        let resp = new DeleteDatasourceResponse();
        this.request("DeleteDatasource", req, resp, cb);
    }

    /**
     * This API is used to remove a user role, which will result in user deletion.
     * @param {DeleteUserRoleRequest} req
     * @param {function(string, DeleteUserRoleResponse):void} cb
     * @public
     */
    DeleteUserRole(req, cb) {
        let resp = new DeleteUserRoleResponse();
        this.request("DeleteUserRole", req, resp, cb);
    }

    /**
     * This API is used to modify project information.
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        let resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }

    /**
     * This API is used to obtain the user role list.
     * @param {DescribeUserRoleListRequest} req
     * @param {function(string, DescribeUserRoleListResponse):void} cb
     * @public
     */
    DescribeUserRoleList(req, cb) {
        let resp = new DescribeUserRoleListResponse();
        this.request("DescribeUserRoleList", req, resp, cb);
    }

    /**
     * This API is used to query component information on the page.
     * @param {DescribePageWidgetListRequest} req
     * @param {function(string, DescribePageWidgetListResponse):void} cb
     * @public
     */
    DescribePageWidgetList(req, cb) {
        let resp = new DescribePageWidgetListResponse();
        this.request("DescribePageWidgetList", req, resp, cb);
    }

    /**
     * This API is used to obtain the user role list in the project.
     * @param {DescribeUserRoleProjectListRequest} req
     * @param {function(string, DescribeUserRoleProjectListResponse):void} cb
     * @public
     */
    DescribeUserRoleProjectList(req, cb) {
        let resp = new DescribeUserRoleProjectListResponse();
        this.request("DescribeUserRoleProjectList", req, resp, cb);
    }

    /**
     * This API is used to update a cloud database.
     * @param {ModifyDatasourceCloudRequest} req
     * @param {function(string, ModifyDatasourceCloudResponse):void} cb
     * @public
     */
    ModifyDatasourceCloud(req, cb) {
        let resp = new ModifyDatasourceCloudResponse();
        this.request("ModifyDatasourceCloud", req, resp, cb);
    }

    /**
     * Clean strong authentication tokens. Only enterprise admins can call this API.
     * @param {ClearEmbedTokenRequest} req
     * @param {function(string, ClearEmbedTokenResponse):void} cb
     * @public
     */
    ClearEmbedToken(req, cb) {
        let resp = new ClearEmbedTokenResponse();
        this.request("ClearEmbedToken", req, resp, cb);
    }

    /**
     * Add a data table
     * @param {CreateDataTableRequest} req
     * @param {function(string, CreateDataTableResponse):void} cb
     * @public
     */
    CreateDataTable(req, cb) {
        let resp = new CreateDataTableResponse();
        this.request("CreateDataTable", req, resp, cb);
    }

    /**
     * This API is used to modify by user resource.
     * @param {ModifyResourceUserRequest} req
     * @param {function(string, ModifyResourceUserResponse):void} cb
     * @public
     */
    ModifyResourceUser(req, cb) {
        let resp = new ModifyResourceUserResponse();
        this.request("ModifyResourceUser", req, resp, cb);
    }

    /**
     * This API is used to create a user role in the project.
     * @param {CreateUserRoleProjectRequest} req
     * @param {function(string, CreateUserRoleProjectResponse):void} cb
     * @public
     */
    CreateUserRoleProject(req, cb) {
        let resp = new CreateUserRoleProjectResponse();
        this.request("CreateUserRoleProject", req, resp, cb);
    }

    /**
     * API information for raw data table fields
     * @param {DescribeSourceFieldListRequest} req
     * @param {function(string, DescribeSourceFieldListResponse):void} cb
     * @public
     */
    DescribeSourceFieldList(req, cb) {
        let resp = new DescribeSourceFieldListResponse();
        this.request("DescribeSourceFieldList", req, resp, cb);
    }

    /**
     * This API is used to delete a user role in the project.
     * @param {DeleteUserRoleProjectRequest} req
     * @param {function(string, DeleteUserRoleProjectResponse):void} cb
     * @public
     */
    DeleteUserRoleProject(req, cb) {
        let resp = new DeleteUserRoleProjectResponse();
        this.request("DeleteUserRoleProject", req, resp, cb);
    }

    /**
     * This API is used to extend the available time of a token with strong authentication.
     * @param {ApplyEmbedIntervalRequest} req
     * @param {function(string, ApplyEmbedIntervalResponse):void} cb
     * @public
     */
    ApplyEmbedInterval(req, cb) {
        let resp = new ApplyEmbedIntervalResponse();
        this.request("ApplyEmbedInterval", req, resp, cb);
    }

    /**
     * This API is used to obtain the user interface in the project.
     * @param {DescribeUserProjectListRequest} req
     * @param {function(string, DescribeUserProjectListResponse):void} cb
     * @public
     */
    DescribeUserProjectList(req, cb) {
        let resp = new DescribeUserProjectListResponse();
        this.request("DescribeUserProjectList", req, resp, cb);
    }

    /**
     * Update user group permission based on resources
     * @param {ModifyResourceUserGroupResourceRequest} req
     * @param {function(string, ModifyResourceUserGroupResourceResponse):void} cb
     * @public
     */
    ModifyResourceUserGroupResource(req, cb) {
        let resp = new ModifyResourceUserGroupResourceResponse();
        this.request("ModifyResourceUserGroupResource", req, resp, cb);
    }

    /**
     * This API is used to delete a project.
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * This API is used to modify the user role info in the project.
     * @param {ModifyUserRoleProjectRequest} req
     * @param {function(string, ModifyUserRoleProjectResponse):void} cb
     * @public
     */
    ModifyUserRoleProject(req, cb) {
        let resp = new ModifyUserRoleProjectResponse();
        this.request("ModifyUserRoleProject", req, resp, cb);
    }

    /**
     * This API is used to obtain project information.
     * @param {DescribeProjectListRequest} req
     * @param {function(string, DescribeProjectListResponse):void} cb
     * @public
     */
    DescribeProjectList(req, cb) {
        let resp = new DescribeProjectListResponse();
        this.request("DescribeProjectList", req, resp, cb);
    }


}
module.exports = BiClient;
