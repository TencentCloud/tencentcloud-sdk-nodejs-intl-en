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
const AbstractModel = require("../../common/abstract_model");

/**
 * List filter criteria of a project. The Values of the same condition are connected with each other by OR.
 * @class
 */
class ProjectFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Filter field. ProjectId, Name, Status, Provider</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Filter value</p>
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Last deployment of the project
 * @class
 */
class ProjectDeployment extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Deployment ID</p>
         * @type {string || null}
         */
        this.DeploymentId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Deployment state</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Build duration, in milliseconds.</p>
         * @type {string || null}
         */
        this.BuildCost = null;

        /**
         * <p>Trigger source.</p>
         * @type {string || null}
         */
        this.ViaMeta = null;

        /**
         * <p>Environment slug</p>
         * @type {string || null}
         */
        this.Env = null;

        /**
         * <p>Branch</p>
         * @type {string || null}
         */
        this.RepoBranch = null;

        /**
         * <p>Submit hash</p>
         * @type {string || null}
         */
        this.RepoCommitHash = null;

        /**
         * <p>Commit description</p>
         * @type {string || null}
         */
        this.RepoCommitMsg = null;

        /**
         * <p>Preview address</p>
         * @type {string || null}
         */
        this.PreviewUrl = null;

        /**
         * <p>Address of a cover</p>
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * <p>Repository address used for this deployment</p>
         * @type {string || null}
         */
        this.DplRepoUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeploymentId = 'DeploymentId' in params ? params.DeploymentId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BuildCost = 'BuildCost' in params ? params.BuildCost : null;
        this.ViaMeta = 'ViaMeta' in params ? params.ViaMeta : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.RepoBranch = 'RepoBranch' in params ? params.RepoBranch : null;
        this.RepoCommitHash = 'RepoCommitHash' in params ? params.RepoCommitHash : null;
        this.RepoCommitMsg = 'RepoCommitMsg' in params ? params.RepoCommitMsg : null;
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.DplRepoUrl = 'DplRepoUrl' in params ? params.DplRepoUrl : null;

    }
}

/**
 * DeleteProjectCustomDomains request structure.
 * @class
 */
class DeleteProjectCustomDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Domain to unbind</p>
         * @type {Array.<string> || null}
         */
        this.CustomDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CustomDomains = 'CustomDomains' in params ? params.CustomDomains : null;

    }
}

/**
 * DeleteProject request structure.
 * @class
 */
class DeleteProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateDeployment request structure.
 * @class
 */
class CreateDeploymentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Trigger source. Github, ReDeploy, Api, Webhook, Upload, Coding, Gitee, Gitlab</p>
         * @type {string || null}
         */
        this.ViaMeta = null;

        /**
         * <p>Environment slug. Production, Preview, or custom environment</p>
         * @type {string || null}
         */
        this.Env = null;

        /**
         * <p>Code source. For upload artifact, pass Upload.</p>
         * @type {string || null}
         */
        this.Provider = null;

        /**
         * <p>Artifact type. Zip or Folder</p>
         * @type {string || null}
         */
        this.DistType = null;

        /**
         * <p>Object path of the uploaded artifact in the temporary bucket</p>
         * @type {string || null}
         */
        this.TempBucketPath = null;

        /**
         * <p>Build branch</p>
         * @type {string || null}
         */
        this.RepoBranch = null;

        /**
         * <p>Submit hash</p>
         * @type {string || null}
         */
        this.RepoCommitHash = null;

        /**
         * <p>Commit description</p>
         * @type {string || null}
         */
        this.RepoCommitMsg = null;

        /**
         * <p>Build source</p>
         * @type {string || null}
         */
        this.BuildFrom = null;

        /**
         * <p>Template ID</p>
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * <p>Build specification. The current server still reads from edgeone.json. This field is reserved for now.</p>
         * @type {string || null}
         */
        this.CiSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ViaMeta = 'ViaMeta' in params ? params.ViaMeta : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.Provider = 'Provider' in params ? params.Provider : null;
        this.DistType = 'DistType' in params ? params.DistType : null;
        this.TempBucketPath = 'TempBucketPath' in params ? params.TempBucketPath : null;
        this.RepoBranch = 'RepoBranch' in params ? params.RepoBranch : null;
        this.RepoCommitHash = 'RepoCommitHash' in params ? params.RepoCommitHash : null;
        this.RepoCommitMsg = 'RepoCommitMsg' in params ? params.RepoCommitMsg : null;
        this.BuildFrom = 'BuildFrom' in params ? params.BuildFrom : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.CiSpec = 'CiSpec' in params ? params.CiSpec : null;

    }
}

/**
 * DescribeDeployments request structure.
 * @class
 */
class DescribeDeploymentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Query by deployment ID</p>
         * @type {Array.<string> || null}
         */
        this.DeploymentIds = null;

        /**
         * <p>Filter conditions.</p>
         * @type {Array.<DeploymentFilter> || null}
         */
        this.Filters = null;

        /**
         * <p>Offset</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Number of items per page. Maximum value: 100.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>CreatedOn or ModifiedOn</p>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * <p>Asc or Desc</p>
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * <p>Start time.</p>
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * <p>End time.</p>
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DeploymentIds = 'DeploymentIds' in params ? params.DeploymentIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DeploymentFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Environment.
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Environment identifier. It cannot be changed after creation.</p>
         * @type {string || null}
         */
        this.Slug = null;

        /**
         * <p>Environment name.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Production,Preview,Custom</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Associate a branch. Wildcards are supported.</p>
         * @type {Array.<string> || null}
         */
        this.Branches = null;

        /**
         * <p>Whether to deploy automatically. Production is always true</p>
         * @type {boolean || null}
         */
        this.AutoDeploy = null;

        /**
         * <p>Bound custom domain name</p>
         * @type {Array.<string> || null}
         */
        this.CustomDomains = null;

        /**
         * <p>Environment variable.</p>
         * @type {Array.<EnvironmentEnvVar> || null}
         */
        this.EnvVars = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.ModifiedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Slug = 'Slug' in params ? params.Slug : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Branches = 'Branches' in params ? params.Branches : null;
        this.AutoDeploy = 'AutoDeploy' in params ? params.AutoDeploy : null;
        this.CustomDomains = 'CustomDomains' in params ? params.CustomDomains : null;

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new EnvironmentEnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

    }
}

/**
 * DescribeProjects request structure.
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Page number offset, starting from 0. The backend skips Offset * Limit entries</p>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * <p>Number of items per page. Maximum value: 100.</p>
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <p>Filter criteria. Name parameter values: ProjectId, Name, Status, Provider</p>
         * @type {Array.<ProjectFilter> || null}
         */
        this.Filters = null;

        /**
         * <p>Query by project ID</p>
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * <p>Sorting field. CreatedOn, ModifiedOn. Default: CreatedOn</p>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * <p>Sorting order. Asc, Desc, ASC, DESC. Default: DESC</p>
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * <p>Source. Only return the Upload project on drop</p>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * <p>Fuzzy search by project name</p>
         * @type {string || null}
         */
        this.Query = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ProjectFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Query = 'Query' in params ? params.Query : null;

    }
}

/**
 * COS Temporary Key
 * @class
 */
class CosCredentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Temporary SecretId</p>
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * <p>Temporary SecretKey</p>
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * <p>Temporary Token</p>
         * @type {string || null}
         */
        this.Token = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;

    }
}

/**
 * Custom domain name
 * @class
 */
class CustomDomainItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Domain name.</p>
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribeEnvironments response structure.
 * @class
 */
class DescribeEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * <p>Environment list</p>
         * @type {Array.<Environment> || null}
         */
        this.Environments = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Environments) {
            this.Environments = new Array();
            for (let z in params.Environments) {
                let obj = new Environment();
                obj.deserialize(params.Environments[z]);
                this.Environments.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZoneCustomDomainEnv request structure.
 * @class
 */
class ModifyZoneCustomDomainEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Domain name.</p>
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * <p>Target environment slug</p>
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeProjects response structure.
 * @class
 */
class DescribeProjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * <p>Project list</p>
         * @type {Array.<Project> || null}
         */
        this.Projects = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Projects) {
            this.Projects = new Array();
            for (let z in params.Projects) {
                let obj = new Project();
                obj.deserialize(params.Projects[z]);
                this.Projects.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Domain name ownership verification info
 * @class
 */
class OwnershipVerification extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>DNS verification</p>
         * @type {DnsVerification || null}
         */
        this.DnsVerification = null;

        /**
         * <p>File verification</p>
         * @type {FileVerification || null}
         */
        this.FileVerification = null;

        /**
         * <p>NS verification</p>
         * @type {NsVerification || null}
         */
        this.NsVerification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DnsVerification) {
            let obj = new DnsVerification();
            obj.deserialize(params.DnsVerification)
            this.DnsVerification = obj;
        }

        if (params.FileVerification) {
            let obj = new FileVerification();
            obj.deserialize(params.FileVerification)
            this.FileVerification = obj;
        }

        if (params.NsVerification) {
            let obj = new NsVerification();
            obj.deserialize(params.NsVerification)
            this.NsVerification = obj;
        }

    }
}

/**
 * ModifyProjectEnvs request structure.
 * @class
 */
class ModifyProjectEnvsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Environment variable to write to</p>
         * @type {Array.<EnvVar> || null}
         */
        this.EnvVars = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new EnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }

    }
}

/**
 * Domain item for binding a custom domain
 * @class
 */
class CustomDomainInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Domain name.</p>
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * <p>Certificate ID</p>
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * <p>Verification status. Verify, Pass, Fail</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Whether not to apply for a certificate.</p>
         * @type {boolean || null}
         */
        this.NoCertificate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NoCertificate = 'NoCertificate' in params ? params.NoCertificate : null;

    }
}

/**
 * DeleteProjectEnvs request structure.
 * @class
 */
class DeleteProjectEnvsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Environment variables to delete. Pass Key (or Id). Value is required but not used for matching.</p>
         * @type {Array.<EnvVar> || null}
         */
        this.EnvVars = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new EnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }

    }
}

/**
 * DeleteProjectEnvs response structure.
 * @class
 */
class DeleteProjectEnvsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProject response structure.
 * @class
 */
class ModifyProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * NS ownership verification info. Makers is currently always null.
 * @class
 */
class NsVerification extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>NS server</p>
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NameServers = 'NameServers' in params ? params.NameServers : null;

    }
}

/**
 * File ownership verification info
 * @class
 */
class FileVerification extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Verification file path</p>
         * @type {string || null}
         */
        this.Path = null;

        /**
         * <p>Verify file content</p>
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * Deployment record
 * @class
 */
class Deployment extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Deployment ID</p>
         * @type {string || null}
         */
        this.DeploymentId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Success,Failed,Process,Invalid,Pending,Timeout,Cancelled</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Original status before deployment removal</p>
         * @type {string || null}
         */
        this.OriginalStatus = null;

        /**
         * <p>Build exit code. 0 indicates success</p>
         * @type {number || null}
         */
        this.Code = null;

        /**
         * <p>Build duration, in milliseconds.</p>
         * @type {string || null}
         */
        this.BuildCost = null;

        /**
         * <p>Trigger source. Github, ReDeploy, Api, Coding, Gitee, Upload, Gitlab</p>
         * @type {string || null}
         */
        this.ViaMeta = null;

        /**
         * <p>Environment slug</p>
         * @type {string || null}
         */
        this.Env = null;

        /**
         * <p>Branch</p>
         * @type {string || null}
         */
        this.RepoBranch = null;

        /**
         * <p>Submit hash</p>
         * @type {string || null}
         */
        this.RepoCommitHash = null;

        /**
         * <p>Commit description</p>
         * @type {string || null}
         */
        this.RepoCommitMsg = null;

        /**
         * <p>Access address of this deployment</p>
         * @type {string || null}
         */
        this.PreviewUrl = null;

        /**
         * <p>Default domain address of the project</p>
         * @type {string || null}
         */
        this.ProjectUrl = null;

        /**
         * <p>Whether it is the current production version</p>
         * @type {boolean || null}
         */
        this.UsedInProd = null;

        /**
         * <p>Address of a cover</p>
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * <p>Routing configuration, JSON string</p>
         * @type {string || null}
         */
        this.MetaData = null;

        /**
         * <p>Repository address used for this deployment</p>
         * @type {string || null}
         */
        this.DplRepoUrl = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.ModifiedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeploymentId = 'DeploymentId' in params ? params.DeploymentId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OriginalStatus = 'OriginalStatus' in params ? params.OriginalStatus : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.BuildCost = 'BuildCost' in params ? params.BuildCost : null;
        this.ViaMeta = 'ViaMeta' in params ? params.ViaMeta : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.RepoBranch = 'RepoBranch' in params ? params.RepoBranch : null;
        this.RepoCommitHash = 'RepoCommitHash' in params ? params.RepoCommitHash : null;
        this.RepoCommitMsg = 'RepoCommitMsg' in params ? params.RepoCommitMsg : null;
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;
        this.ProjectUrl = 'ProjectUrl' in params ? params.ProjectUrl : null;
        this.UsedInProd = 'UsedInProd' in params ? params.UsedInProd : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.MetaData = 'MetaData' in params ? params.MetaData : null;
        this.DplRepoUrl = 'DplRepoUrl' in params ? params.DplRepoUrl : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

    }
}

/**
 * DeleteProjectCustomDomains response structure.
 * @class
 */
class DeleteProjectCustomDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectEnvs response structure.
 * @class
 */
class DescribeProjectEnvsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Environment variable.</p>
         * @type {Array.<EnvVar> || null}
         */
        this.EnvVars = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new EnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeploymentLog request structure.
 * @class
 */
class DescribeDeploymentLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Deployment ID</p>
         * @type {string || null}
         */
        this.DeploymentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DeploymentId = 'DeploymentId' in params ? params.DeploymentId : null;

    }
}

/**
 * DescribeDeploymentLog response structure.
 * @class
 */
class DescribeDeploymentLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Build log address</p>
         * @type {string || null}
         */
        this.LogUrl = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogUrl = 'LogUrl' in params ? params.LogUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Switch configuration
 * @class
 */
class SwitchConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>on or off</p>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeZoneCustomDomains response structure.
 * @class
 */
class DescribeZoneCustomDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * <p>Domain name list.</p>
         * @type {Array.<ZoneDomain> || null}
         */
        this.PagesDomains = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.PagesDomains) {
            this.PagesDomains = new Array();
            for (let z in params.PagesDomains) {
                let obj = new ZoneDomain();
                obj.deserialize(params.PagesDomains[z]);
                this.PagesDomains.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProject request structure.
 * @class
 */
class ModifyProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Project name.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Project root directory</p>
         * @type {string || null}
         */
        this.RootDir = null;

        /**
         * <p>Build artifact directory</p>
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * <p>Build command</p>
         * @type {string || null}
         */
        this.BuildCmd = null;

        /**
         * <p>Installation command</p>
         * @type {string || null}
         */
        this.InstallCmd = null;

        /**
         * <p>Framework</p>
         * @type {string || null}
         */
        this.Framework = null;

        /**
         * <p>Address of a cover</p>
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * <p>Node.js version</p>
         * @type {string || null}
         */
        this.NodeJsVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RootDir = 'RootDir' in params ? params.RootDir : null;
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;
        this.BuildCmd = 'BuildCmd' in params ? params.BuildCmd : null;
        this.InstallCmd = 'InstallCmd' in params ? params.InstallCmd : null;
        this.Framework = 'Framework' in params ? params.Framework : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.NodeJsVersion = 'NodeJsVersion' in params ? params.NodeJsVersion : null;

    }
}

/**
 * ModifyZoneCustomDomainEnv response structure.
 * @class
 */
class ModifyZoneCustomDomainEnvResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Domain name.</p>
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * <p>Environment slug after toggling</p>
         * @type {string || null}
         */
        this.Env = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Variable in the environment.
 * @class
 */
class EnvironmentEnvVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Variable ID</p>
         * @type {number || null}
         */
        this.Id = null;

        /**
         * <p>Variable name</p>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * <p>Variable value</p>
         * @type {string || null}
         */
        this.Value = null;

        /**
         * <p>Remarks.</p>
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * <p>Effective environment slug</p>
         * @type {Array.<string> || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeCosTempToken response structure.
 * @class
 */
class DescribeCosTempTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>COS bucket</p>
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * <p>COS region</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>Upload path, format: appId/projectName/timestamp</p>
         * @type {string || null}
         */
        this.TargetPath = null;

        /**
         * <p>Temporary key expiration time in Unix seconds</p>
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * <p>Time when the temporary key expires in ISO 8601</p>
         * @type {string || null}
         */
        this.Expiration = null;

        /**
         * <p>Temporary key</p>
         * @type {CosCredentials || null}
         */
        this.Credentials = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.TargetPath = 'TargetPath' in params ? params.TargetPath : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;

        if (params.Credentials) {
            let obj = new CosCredentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Project. The fields are consistent with the actual return of DescribeProjects.
 * @class
 */
class Project extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Project name.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Project status. Normal, Ban, Unlink, Process, Pending, Offline</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Acceleration region. mainland, overseas, global</p>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * <p>Code source. Github, Gitee, Coding, Upload, Gitlab, Bitbucket, Cnb</p>
         * @type {string || null}
         */
        this.Provider = null;

        /**
         * <p>Create Source. Template, Custom, CLI, Guest</p>
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * <p>Preset domain name.</p>
         * @type {string || null}
         */
        this.PresetDomain = null;

        /**
         * <p>Preset domain name status</p>
         * @type {string || null}
         */
        this.PresetDomainStatus = null;

        /**
         * <p>Project root directory</p>
         * @type {string || null}
         */
        this.RootDir = null;

        /**
         * <p>Build artifact directory</p>
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * <p>Build command</p>
         * @type {string || null}
         */
        this.BuildCmd = null;

        /**
         * <p>Installation command</p>
         * @type {string || null}
         */
        this.InstallCmd = null;

        /**
         * <p>Framework</p>
         * @type {string || null}
         */
        this.Framework = null;

        /**
         * <p>Node.js version</p>
         * @type {string || null}
         */
        this.NodejsVersion = null;

        /**
         * <p>Repository address</p>
         * @type {string || null}
         */
        this.RepoUrl = null;

        /**
         * <p>Repository owner</p>
         * @type {string || null}
         */
        this.RepoOwner = null;

        /**
         * <p>Repository name</p>
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * <p>Production branch</p>
         * @type {string || null}
         */
        this.RepoBranch = null;

        /**
         * <p>Preview Branch</p>
         * @type {Array.<string> || null}
         */
        this.RepoPreBranches = null;

        /**
         * <p>Deployment region</p>
         * @type {Regions || null}
         */
        this.Regions = null;

        /**
         * <p>Environment variable.</p>
         * @type {Array.<ProjectEnvVar> || null}
         */
        this.EnvVars = null;

        /**
         * <p>Custom domain name</p>
         * @type {Array.<CustomDomainItem> || null}
         */
        this.CustomDomains = null;

        /**
         * <p>Last deployment</p>
         * @type {ProjectDeployment || null}
         */
        this.Deployment = null;

        /**
         * <p>Whether it is an Agent project. 1: yes, 0: no</p>
         * @type {number || null}
         */
        this.IsAgent = null;

        /**
         * <p>Agent framework. Non-Agent project is empty</p>
         * @type {string || null}
         */
        this.AgentFramework = null;

        /**
         * <p>Whether it hits a user-level wildcard domain name. 1: yes, 0: no</p>
         * @type {number || null}
         */
        this.IsTld = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.ModifiedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Provider = 'Provider' in params ? params.Provider : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.PresetDomain = 'PresetDomain' in params ? params.PresetDomain : null;
        this.PresetDomainStatus = 'PresetDomainStatus' in params ? params.PresetDomainStatus : null;
        this.RootDir = 'RootDir' in params ? params.RootDir : null;
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;
        this.BuildCmd = 'BuildCmd' in params ? params.BuildCmd : null;
        this.InstallCmd = 'InstallCmd' in params ? params.InstallCmd : null;
        this.Framework = 'Framework' in params ? params.Framework : null;
        this.NodejsVersion = 'NodejsVersion' in params ? params.NodejsVersion : null;
        this.RepoUrl = 'RepoUrl' in params ? params.RepoUrl : null;
        this.RepoOwner = 'RepoOwner' in params ? params.RepoOwner : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.RepoBranch = 'RepoBranch' in params ? params.RepoBranch : null;
        this.RepoPreBranches = 'RepoPreBranches' in params ? params.RepoPreBranches : null;

        if (params.Regions) {
            let obj = new Regions();
            obj.deserialize(params.Regions)
            this.Regions = obj;
        }

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new ProjectEnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }

        if (params.CustomDomains) {
            this.CustomDomains = new Array();
            for (let z in params.CustomDomains) {
                let obj = new CustomDomainItem();
                obj.deserialize(params.CustomDomains[z]);
                this.CustomDomains.push(obj);
            }
        }

        if (params.Deployment) {
            let obj = new ProjectDeployment();
            obj.deserialize(params.Deployment)
            this.Deployment = obj;
        }
        this.IsAgent = 'IsAgent' in params ? params.IsAgent : null;
        this.AgentFramework = 'AgentFramework' in params ? params.AgentFramework : null;
        this.IsTld = 'IsTld' in params ? params.IsTld : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

    }
}

/**
 * CreateProject response structure.
 * @class
 */
class CreateProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateZoneCustomDomain response structure.
 * @class
 */
class CreateZoneCustomDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Domain name.</p>
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * <p>Domain configuration ID</p>
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DNS ownership verification record
 * @class
 */
class DnsVerification extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Record type, TXT</p>
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * <p>Host record</p>
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * <p>Record value</p>
         * @type {string || null}
         */
        this.RecordValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;

    }
}

/**
 * DeleteProject response structure.
 * @class
 */
class DeleteProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeployments response structure.
 * @class
 */
class DescribeDeploymentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Total.</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * <p>Deployment list</p>
         * @type {Array.<Deployment> || null}
         */
        this.Deployments = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Deployments) {
            this.Deployments = new Array();
            for (let z in params.Deployments) {
                let obj = new Deployment();
                obj.deserialize(params.Deployments[z]);
                this.Deployments.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneCustomDomains request structure.
 * @class
 */
class DescribeZoneCustomDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Only query these domain names. If not passed, return the domain name under the project.</p>
         * @type {Array.<CustomDomainInput> || null}
         */
        this.CustomDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.CustomDomains) {
            this.CustomDomains = new Array();
            for (let z in params.CustomDomains) {
                let obj = new CustomDomainInput();
                obj.deserialize(params.CustomDomains[z]);
                this.CustomDomains.push(obj);
            }
        }

    }
}

/**
 * DescribeProjectEnvs request structure.
 * @class
 */
class DescribeProjectEnvsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Only return the variables of the environment slug</p>
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * CreateDeployment response structure.
 * @class
 */
class CreateDeploymentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Deployment ID</p>
         * @type {string || null}
         */
        this.DeploymentId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeploymentId = 'DeploymentId' in params ? params.DeploymentId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Project deployment region
 * @class
 */
class Regions extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Chinese mainland</p>
         * @type {Array.<string> || null}
         */
        this.Mainland = null;

        /**
         * <p>Overseas region</p>
         * @type {Array.<string> || null}
         */
        this.Overseas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mainland = 'Mainland' in params ? params.Mainland : null;
        this.Overseas = 'Overseas' in params ? params.Overseas : null;

    }
}

/**
 * Deployment list filter criteria
 * @class
 */
class DeploymentFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Filter field. ProjectId, DeploymentId, Name, Status, StartTime, EndTime, RepoBranch</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Filter value</p>
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * Custom domain name under the site
 * @class
 */
class ZoneDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Custom or Preset</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>Domain name.</p>
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * <p>Domain name status</p>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Bound environment slug. Default value: Production</p>
         * @type {string || null}
         */
        this.Env = null;

        /**
         * <p>Site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Acceleration region</p>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * <p>CNAME</p>
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * <p>Primary domain name.</p>
         * @type {string || null}
         */
        this.MainDomain = null;

        /**
         * <p>IPv6</p>
         * @type {SwitchConfig || null}
         */
        this.Ipv6 = null;

        /**
         * <p>HTTP/2</p>
         * @type {SwitchConfig || null}
         */
        this.Http2 = null;

        /**
         * <p>OCSP</p>
         * @type {SwitchConfig || null}
         */
        this.OcspStapling = null;

        /**
         * <p>Force HTTPS</p>
         * @type {ForceRedirectConfig || null}
         */
        this.ForceRedirect = null;

        /**
         * <p>HSTS</p>
         * @type {HstsConfig || null}
         */
        this.Hsts = null;

        /**
         * <p>Ownership verification</p>
         * @type {OwnershipVerification || null}
         */
        this.OwnershipVerification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.MainDomain = 'MainDomain' in params ? params.MainDomain : null;

        if (params.Ipv6) {
            let obj = new SwitchConfig();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.Http2) {
            let obj = new SwitchConfig();
            obj.deserialize(params.Http2)
            this.Http2 = obj;
        }

        if (params.OcspStapling) {
            let obj = new SwitchConfig();
            obj.deserialize(params.OcspStapling)
            this.OcspStapling = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirectConfig();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Hsts) {
            let obj = new HstsConfig();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }

        if (params.OwnershipVerification) {
            let obj = new OwnershipVerification();
            obj.deserialize(params.OwnershipVerification)
            this.OwnershipVerification = obj;
        }

    }
}

/**
 * HSTS configuration
 * @class
 */
class HstsConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>on or off</p>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * <p>Valid period in seconds.</p>
         * @type {number || null}
         */
        this.MaxAge = null;

        /**
         * <p>on or off</p>
         * @type {string || null}
         */
        this.IncludeSubDomains = null;

        /**
         * <p>on or off</p>
         * @type {string || null}
         */
        this.Preload = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxAge = 'MaxAge' in params ? params.MaxAge : null;
        this.IncludeSubDomains = 'IncludeSubDomains' in params ? params.IncludeSubDomains : null;
        this.Preload = 'Preload' in params ? params.Preload : null;

    }
}

/**
 * Environment variables returned in the project list, only keys and values
 * @class
 */
class ProjectEnvVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Variable name</p>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * <p>Variable value</p>
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * CreateZoneCustomDomain request structure.
 * @class
 */
class CreateZoneCustomDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <p>Custom domain name</p>
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * <p>Environment slug. If not passed, it is determined by the backend.</p>
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeEnvironments request structure.
 * @class
 */
class DescribeEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project ID</p>
         * @type {string || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * Forced HTTPS redirection
 * @class
 */
class ForceRedirectConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>on or off</p>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * <p>301,302,307,308</p>
         * @type {number || null}
         */
        this.RedirectStatusCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;

    }
}

/**
 * ModifyProjectEnvs response structure.
 * @class
 */
class ModifyProjectEnvsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Environment variable. An empty or default Env array means global. When writing, it unfolds to all current environments of the project.
 * @class
 */
class EnvVar extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Variable name, up to 255 characters</p>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * <p>Variable value, up to 1000</p>
         * @type {string || null}
         */
        this.Value = null;

        /**
         * <p>Variable ID. It is not passed in upon creation.</p>
         * @type {number || null}
         */
        this.Id = null;

        /**
         * <p>Remark. Up to 255 characters</p>
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * <p>Effective environment slug, for example, Production, Preview. Multi-line environments with the same Key must not overlap</p>
         * @type {Array.<string> || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeCosTempToken request structure.
 * @class
 */
class DescribeCosTempTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project name. The temporary path is concatenated based on it.</p>
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * <p>Project ID. Used to reverse-check the project name when ProjectName is not passed in.</p>
         * @type {string || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateProject request structure.
 * @class
 */
class CreateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Makers site ID</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Project name.</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Create Source. Template, Custom, CLI, Guest</p>
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * <p>Code source. Upload, Github, Gitee, Gitlab, Coding</p>
         * @type {string || null}
         */
        this.Provider = null;

        /**
         * <p>Accessing party identifier.</p>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * <p>Acceleration region. mainland, overseas, global</p>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * <p>Node.js version. 14.21.3, 16.20.2, 18.20.4, 20.18.0, 22.11.0, 22.17.1, 22.21.1, 24.5.0, 24.11.0, 24.18.0</p>
         * @type {string || null}
         */
        this.NodeJsVersion = null;

        /**
         * <p>Project root directory</p>
         * @type {string || null}
         */
        this.RootDir = null;

        /**
         * <p>Build artifact directory</p>
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * <p>Build command</p>
         * @type {string || null}
         */
        this.BuildCmd = null;

        /**
         * <p>Installation command</p>
         * @type {string || null}
         */
        this.InstallCmd = null;

        /**
         * <p>Framework</p>
         * @type {string || null}
         */
        this.Framework = null;

        /**
         * <p>Template ID</p>
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * <p>Repository address</p>
         * @type {string || null}
         */
        this.RepoUrl = null;

        /**
         * <p>Repository owner</p>
         * @type {string || null}
         */
        this.RepoOwner = null;

        /**
         * <p>Repository name</p>
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * <p>Production branch</p>
         * @type {string || null}
         */
        this.RepoBranch = null;

        /**
         * <p>Initial environment variable.</p>
         * @type {Array.<EnvVar> || null}
         */
        this.EnvVars = null;

        /**
         * <p>Coding namespace. Used when the Provider is Coding.</p>
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * <p>Coding project ID. Used when the Provider is Coding</p>
         * @type {number || null}
         */
        this.CodingProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Provider = 'Provider' in params ? params.Provider : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.NodeJsVersion = 'NodeJsVersion' in params ? params.NodeJsVersion : null;
        this.RootDir = 'RootDir' in params ? params.RootDir : null;
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;
        this.BuildCmd = 'BuildCmd' in params ? params.BuildCmd : null;
        this.InstallCmd = 'InstallCmd' in params ? params.InstallCmd : null;
        this.Framework = 'Framework' in params ? params.Framework : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RepoUrl = 'RepoUrl' in params ? params.RepoUrl : null;
        this.RepoOwner = 'RepoOwner' in params ? params.RepoOwner : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.RepoBranch = 'RepoBranch' in params ? params.RepoBranch : null;

        if (params.EnvVars) {
            this.EnvVars = new Array();
            for (let z in params.EnvVars) {
                let obj = new EnvVar();
                obj.deserialize(params.EnvVars[z]);
                this.EnvVars.push(obj);
            }
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CodingProjectId = 'CodingProjectId' in params ? params.CodingProjectId : null;

    }
}

module.exports = {
    ProjectFilter: ProjectFilter,
    ProjectDeployment: ProjectDeployment,
    DeleteProjectCustomDomainsRequest: DeleteProjectCustomDomainsRequest,
    DeleteProjectRequest: DeleteProjectRequest,
    CreateDeploymentRequest: CreateDeploymentRequest,
    DescribeDeploymentsRequest: DescribeDeploymentsRequest,
    Environment: Environment,
    DescribeProjectsRequest: DescribeProjectsRequest,
    CosCredentials: CosCredentials,
    CustomDomainItem: CustomDomainItem,
    DescribeEnvironmentsResponse: DescribeEnvironmentsResponse,
    ModifyZoneCustomDomainEnvRequest: ModifyZoneCustomDomainEnvRequest,
    DescribeProjectsResponse: DescribeProjectsResponse,
    OwnershipVerification: OwnershipVerification,
    ModifyProjectEnvsRequest: ModifyProjectEnvsRequest,
    CustomDomainInput: CustomDomainInput,
    DeleteProjectEnvsRequest: DeleteProjectEnvsRequest,
    DeleteProjectEnvsResponse: DeleteProjectEnvsResponse,
    ModifyProjectResponse: ModifyProjectResponse,
    NsVerification: NsVerification,
    FileVerification: FileVerification,
    Deployment: Deployment,
    DeleteProjectCustomDomainsResponse: DeleteProjectCustomDomainsResponse,
    DescribeProjectEnvsResponse: DescribeProjectEnvsResponse,
    DescribeDeploymentLogRequest: DescribeDeploymentLogRequest,
    DescribeDeploymentLogResponse: DescribeDeploymentLogResponse,
    SwitchConfig: SwitchConfig,
    DescribeZoneCustomDomainsResponse: DescribeZoneCustomDomainsResponse,
    ModifyProjectRequest: ModifyProjectRequest,
    ModifyZoneCustomDomainEnvResponse: ModifyZoneCustomDomainEnvResponse,
    EnvironmentEnvVar: EnvironmentEnvVar,
    DescribeCosTempTokenResponse: DescribeCosTempTokenResponse,
    Project: Project,
    CreateProjectResponse: CreateProjectResponse,
    CreateZoneCustomDomainResponse: CreateZoneCustomDomainResponse,
    DnsVerification: DnsVerification,
    DeleteProjectResponse: DeleteProjectResponse,
    DescribeDeploymentsResponse: DescribeDeploymentsResponse,
    DescribeZoneCustomDomainsRequest: DescribeZoneCustomDomainsRequest,
    DescribeProjectEnvsRequest: DescribeProjectEnvsRequest,
    CreateDeploymentResponse: CreateDeploymentResponse,
    Regions: Regions,
    DeploymentFilter: DeploymentFilter,
    ZoneDomain: ZoneDomain,
    HstsConfig: HstsConfig,
    ProjectEnvVar: ProjectEnvVar,
    CreateZoneCustomDomainRequest: CreateZoneCustomDomainRequest,
    DescribeEnvironmentsRequest: DescribeEnvironmentsRequest,
    ForceRedirectConfig: ForceRedirectConfig,
    ModifyProjectEnvsResponse: ModifyProjectEnvsResponse,
    EnvVar: EnvVar,
    DescribeCosTempTokenRequest: DescribeCosTempTokenRequest,
    CreateProjectRequest: CreateProjectRequest,

}
