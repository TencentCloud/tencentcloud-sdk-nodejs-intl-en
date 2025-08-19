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
const DataId = models.DataId;
const DescribeUserRoleListResponse = models.DescribeUserRoleListResponse;
const ExportScreenPageResponse = models.ExportScreenPageResponse;
const ModifyProjectResponse = models.ModifyProjectResponse;
const DeleteProjectRequest = models.DeleteProjectRequest;
const DescribeUserProjectListResponse = models.DescribeUserProjectListResponse;
const CreateDatasourceRequest = models.CreateDatasourceRequest;
const DeleteDatasourceRequest = models.DeleteDatasourceRequest;
const ModifyDatasourceResponse = models.ModifyDatasourceResponse;
const UserRoleListDataRoleInfo = models.UserRoleListDataRoleInfo;
const ApplyEmbedIntervalRequest = models.ApplyEmbedIntervalRequest;
const ProjectConfigResult = models.ProjectConfigResult;
const EmbedTokenInfo = models.EmbedTokenInfo;
const DescribePageWidgetListResponse = models.DescribePageWidgetListResponse;
const DeleteUserRoleResponse = models.DeleteUserRoleResponse;
const ErrorInfo = models.ErrorInfo;
const DescribeUserProjectListRequest = models.DescribeUserProjectListRequest;
const DescribePageWidgetListRequest = models.DescribePageWidgetListRequest;
const CreateDatasourceCloudResponse = models.CreateDatasourceCloudResponse;
const ProjectConfigList = models.ProjectConfigList;
const DeleteUserRoleRequest = models.DeleteUserRoleRequest;
const CreateUserRoleRequest = models.CreateUserRoleRequest;
const UserGroupDTO = models.UserGroupDTO;
const ModifyUserRoleRequest = models.ModifyUserRoleRequest;
const DatasourceInfoData = models.DatasourceInfoData;
const DescribeProjectListResponse = models.DescribeProjectListResponse;
const CorpUserListData = models.CorpUserListData;
const IdDTO = models.IdDTO;
const ModifyUserRoleResponse = models.ModifyUserRoleResponse;
const CreateEmbedTokenRequest = models.CreateEmbedTokenRequest;
const CreateUserRoleProjectResponse = models.CreateUserRoleProjectResponse;
const PageScreenListVO = models.PageScreenListVO;
const DescribeProjectInfoRequest = models.DescribeProjectInfoRequest;
const BaseStateAction = models.BaseStateAction;
const Data = models.Data;
const ModifyUserRoleProjectResponse = models.ModifyUserRoleProjectResponse;
const DescribeUserRoleProjectListResponse = models.DescribeUserRoleProjectListResponse;
const ModifyDatasourceCloudResponse = models.ModifyDatasourceCloudResponse;
const ModifyDatasourceCloudRequest = models.ModifyDatasourceCloudRequest;
const ModifyDatasourceRequest = models.ModifyDatasourceRequest;
const ModifyProjectRequest = models.ModifyProjectRequest;
const ModifyUserRoleProjectRequest = models.ModifyUserRoleProjectRequest;
const CreateUserRoleResponse = models.CreateUserRoleResponse;
const ApplyEmbedTokenInfo = models.ApplyEmbedTokenInfo;
const DescribeProjectListRequest = models.DescribeProjectListRequest;
const UserRoleListDataUserRoleInfo = models.UserRoleListDataUserRoleInfo;
const UserRoleListData = models.UserRoleListData;
const Project = models.Project;
const DatasourceInfo = models.DatasourceInfo;
const DeleteUserRoleProjectRequest = models.DeleteUserRoleProjectRequest;
const CreateProjectResponse = models.CreateProjectResponse;
const DescribeProjectInfoResponse = models.DescribeProjectInfoResponse;
const ExportScreenPageRequest = models.ExportScreenPageRequest;
const DescribeUserRoleListRequest = models.DescribeUserRoleListRequest;
const DeleteProjectResponse = models.DeleteProjectResponse;
const ProjectListData = models.ProjectListData;
const DescribeUserRoleProjectListRequest = models.DescribeUserRoleProjectListRequest;
const PermissionGroup = models.PermissionGroup;
const CreateEmbedTokenResponse = models.CreateEmbedTokenResponse;
const CreateUserRoleProjectRequest = models.CreateUserRoleProjectRequest;
const WidgetListVO = models.WidgetListVO;
const WidgetVO = models.WidgetVO;
const DescribeDatasourceListRequest = models.DescribeDatasourceListRequest;
const ApplyEmbedIntervalResponse = models.ApplyEmbedIntervalResponse;
const CreateDatasourceResponse = models.CreateDatasourceResponse;
const DeleteUserRoleProjectResponse = models.DeleteUserRoleProjectResponse;
const CreateDatasourceCloudRequest = models.CreateDatasourceCloudRequest;
const UserInfo = models.UserInfo;
const DescribeDatasourceListResponse = models.DescribeDatasourceListResponse;
const UserIdAndUserName = models.UserIdAndUserName;
const DeleteDatasourceResponse = models.DeleteDatasourceResponse;
const CreateProjectRequest = models.CreateProjectRequest;
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
