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
const AbstractModel = require("../../common/abstract_model");

/**
 * The on-chain status of the credential.
 * @class
 */
class CredentialStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * The credential ID.
         * @type {string || null}
         */
        this.CredentialId = null;

        /**
         * The credential status. `0`: Invalid; `1`: Valid.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The DID of the issuer.
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * A summary of the credential.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Digest = null;

        /**
         * The credential signature.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Signature = null;

        /**
         * The last updated timestamp.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.Digest = 'Digest' in params ? params.Digest : null;
        this.Signature = 'Signature' in params ? params.Signature : null;
        this.TimeStamp = 'TimeStamp' in params ? params.TimeStamp : null;

    }
}

/**
 * QueryPolicy request structure.
 * @class
 */
class QueryPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The policy index.
         * @type {number || null}
         */
        this.PolicyIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;

    }
}

/**
 * RegisterClaimPolicy request structure.
 * @class
 */
class RegisterClaimPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The claim protocol type (CPT) index.
         * @type {number || null}
         */
        this.CptIndex = null;

        /**
         * The disclosure policy.
         * @type {string || null}
         */
        this.Policy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptIndex = 'CptIndex' in params ? params.CptIndex : null;
        this.Policy = 'Policy' in params ? params.Policy : null;

    }
}

/**
 * GetDidServiceDetail response structure.
 * @class
 */
class GetDidServiceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID service information.
         * @type {DidServiceInfo || null}
         */
        this.DidService = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.DidService) {
            let obj = new DidServiceInfo();
            obj.deserialize(params.DidService)
            this.DidService = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCredential response structure.
 * @class
 */
class CreateCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the credential.
         * @type {string || null}
         */
        this.CredentialData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.CredentialData = 'CredentialData' in params ? params.CredentialData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetConsortiumList request structure.
 * @class
 */
class GetConsortiumListRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DownCpt response structure.
 * @class
 */
class DownCptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * GetCredentialIssueTrend response structure.
 * @class
 */
class GetCredentialIssueTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The trend information.
         * @type {Array.<Trend> || null}
         */
        this.Trend = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Trend) {
            this.Trend = new Array();
            for (let z in params.Trend) {
                let obj = new Trend();
                obj.deserialize(params.Trend[z]);
                this.Trend.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCredential request structure.
 * @class
 */
class CreateCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * A parameter set. For details, see the example.
         * @type {FunctionArg || null}
         */
        this.FunctionArg = null;

        /**
         * A parameter set. For details, see the example.
         * @type {TransactionArg || null}
         */
        this.TransactionArg = null;

        /**
         * The version.
         * @type {string || null}
         */
        this.VersionCredential = null;

        /**
         * Whether the credential is unsigned.
         * @type {boolean || null}
         */
        this.UnSigned = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FunctionArg) {
            let obj = new FunctionArg();
            obj.deserialize(params.FunctionArg)
            this.FunctionArg = obj;
        }

        if (params.TransactionArg) {
            let obj = new TransactionArg();
            obj.deserialize(params.TransactionArg)
            this.TransactionArg = obj;
        }
        this.VersionCredential = 'VersionCredential' in params ? params.VersionCredential : null;
        this.UnSigned = 'UnSigned' in params ? params.UnSigned : null;

    }
}

/**
 * CreateDidService response structure.
 * @class
 */
class CreateDidServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The service information.
         * @type {Task || null}
         */
        this.Task = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Task) {
            let obj = new Task();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetConsortiumList response structure.
 * @class
 */
class GetConsortiumListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of the consortiums.
         * @type {Array.<ConsortiumItem> || null}
         */
        this.ConsortiumList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.ConsortiumList) {
            this.ConsortiumList = new Array();
            for (let z in params.ConsortiumList) {
                let obj = new ConsortiumItem();
                obj.deserialize(params.ConsortiumList[z]);
                this.ConsortiumList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCredentialCptRank request structure.
 * @class
 */
class GetCredentialCptRankRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date (as early as 2021-4-23).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end date (as early as 2021-4-23).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetPolicyList request structure.
 * @class
 */
class GetPolicyListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start.
         * @type {number || null}
         */
        this.DisplayStart = null;

        /**
         * The maximum number of records to return.
         * @type {number || null}
         */
        this.DisplayLength = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayStart = 'DisplayStart' in params ? params.DisplayStart : null;
        this.DisplayLength = 'DisplayLength' in params ? params.DisplayLength : null;

    }
}

/**
 * GetConsortiumClusterList response structure.
 * @class
 */
class GetConsortiumClusterListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of networks.
         * @type {Array.<BcosClusterItem> || null}
         */
        this.ClusterList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new BcosClusterItem();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The output parameter of `CreateDidService` and `CheckDidDeploy`.
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The application ID.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The service ID.
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * `0`: Under deployment; `1`: Deployed successfully; other values: Deployment failed.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The error code.
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * The error message.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The last updated time.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * GetCptList request structure.
 * @class
 */
class GetCptListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start.
         * @type {number || null}
         */
        this.DisplayStart = null;

        /**
         * The maximum number of records to return.
         * @type {number || null}
         */
        this.DisplayLength = null;

        /**
         * The type. `0`: All CPTs; `1`: System CPTs; `2`: Authorization CPTs; `3`: General CPTs
         * @type {number || null}
         */
        this.CptType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayStart = 'DisplayStart' in params ? params.DisplayStart : null;
        this.DisplayLength = 'DisplayLength' in params ? params.DisplayLength : null;
        this.CptType = 'CptType' in params ? params.CptType : null;

    }
}

/**
 * GetAuthoritiesList request structure.
 * @class
 */
class GetAuthoritiesListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The page number, beginning from 1.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * The number of records per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * Whether to query certified or uncertified authorities. `1`: Certified; `2`: Uncertified.
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * GetAgencyTDid request structure.
 * @class
 */
class GetAgencyTDidRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * RemoveHash request structure.
 * @class
 */
class RemoveHashRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CNS address of the contract.
         * @type {string || null}
         */
        this.Hash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hash = 'Hash' in params ? params.Hash : null;

    }
}

/**
 * GetGroupList request structure.
 * @class
 */
class GetGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `0`: Groups with no DID services; `1`: Groups with DID services.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * The credential signature.
 * @class
 */
class Proof extends  AbstractModel {
    constructor(){
        super();

        /**
         * The creation time.
         * @type {number || null}
         */
        this.Created = null;

        /**
         * The DID of the creator.
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * The salt value.
         * @type {string || null}
         */
        this.SaltJson = null;

        /**
         * The signature.
         * @type {string || null}
         */
        this.SignatureValue = null;

        /**
         * The type.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Created = 'Created' in params ? params.Created : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.SaltJson = 'SaltJson' in params ? params.SaltJson : null;
        this.SignatureValue = 'SignatureValue' in params ? params.SignatureValue : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetDeployInfo request structure.
 * @class
 */
class GetDeployInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CNS address of the contract.
         * @type {string || null}
         */
        this.Hash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hash = 'Hash' in params ? params.Hash : null;

    }
}

/**
 * The information of an authority.
 * @class
 */
class Authority extends  AbstractModel {
    constructor(){
        super();

        /**
         * The authority ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The DID.
         * @type {number || null}
         */
        this.DidId = null;

        /**
         * The details of the DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * The authority name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether the authority is certified. `1`: Yes; `2`: No.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * The DID service ID.
         * @type {number || null}
         */
        this.DidServiceId = null;

        /**
         * The application ID.
         * @type {number || null}
         */
        this.ContractAppId = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * The registration time.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegisterTime = null;

        /**
         * The recognition time.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecognizeTime = null;

        /**
         * The creation time.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The last updated time.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The on-chain label.
         * @type {string || null}
         */
        this.LabelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.DidId = 'DidId' in params ? params.DidId : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DidServiceId = 'DidServiceId' in params ? params.DidServiceId : null;
        this.ContractAppId = 'ContractAppId' in params ? params.ContractAppId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RegisterTime = 'RegisterTime' in params ? params.RegisterTime : null;
        this.RecognizeTime = 'RecognizeTime' in params ? params.RecognizeTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;

    }
}

/**
 * CreateLabel response structure.
 * @class
 */
class CreateLabelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * GetPublicKey request structure.
 * @class
 */
class GetPublicKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * The label information.
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * The label ID.
         * @type {number || null}
         */
        this.LabelId = null;

        /**
         * The label name.
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * The number of DIDs.
         * @type {number || null}
         */
        this.DidCount = null;

        /**
         * The DID of the creator.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelId = 'LabelId' in params ? params.LabelId : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.DidCount = 'DidCount' in params ? params.DidCount : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * GetDidServiceList response structure.
 * @class
 */
class GetDidServiceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of DID services.
         * @type {Array.<DidServiceInfo> || null}
         */
        this.DidServiceList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.DidServiceList) {
            this.DidServiceList = new Array();
            for (let z in params.DidServiceList) {
                let obj = new DidServiceInfo();
                obj.deserialize(params.DidServiceList[z]);
                this.DidServiceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeployByName response structure.
 * @class
 */
class DeployByNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The hash value.
         * @type {string || null}
         */
        this.Hash = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Hash = 'Hash' in params ? params.Hash : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLabel request structure.
 * @class
 */
class CreateLabelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The label name.
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreateDidService request structure.
 * @class
 */
class CreateDidServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The consortium name.
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * The consortium ID.
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The organization name.
         * @type {string || null}
         */
        this.AgencyName = null;

        /**
         * The application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group name.
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AgencyName = 'AgencyName' in params ? params.AgencyName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * GetDidClusterDetail response structure.
 * @class
 */
class GetDidClusterDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The consortium name.
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * The name of the blockchain organization.
         * @type {string || null}
         */
        this.ChainAgency = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.ChainAgency = 'ChainAgency' in params ? params.ChainAgency : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeAuthorityIssuer response structure.
 * @class
 */
class RecognizeAuthorityIssuerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * EnableHash response structure.
 * @class
 */
class EnableHashResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * GetCredentialIssueTrend request structure.
 * @class
 */
class GetCredentialIssueTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date (as early as 2021-4-23).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end date (as early as 2021-4-23).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * EnableHash request structure.
 * @class
 */
class EnableHashRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CNS address of the contract.
         * @type {string || null}
         */
        this.Hash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hash = 'Hash' in params ? params.Hash : null;

    }
}

/**
 * GetDidClusterList request structure.
 * @class
 */
class GetDidClusterListRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * GetCptInfo request structure.
 * @class
 */
class GetCptInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The claim protocol type (CPT) index.
         * @type {number || null}
         */
        this.CptIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptIndex = 'CptIndex' in params ? params.CptIndex : null;

    }
}

/**
 * DownCpt request structure.
 * @class
 */
class DownCptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The claim protocol type (CPT) index.
         * @type {number || null}
         */
        this.CptIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptIndex = 'CptIndex' in params ? params.CptIndex : null;

    }
}

/**
 * GetCptList response structure.
 * @class
 */
class GetCptListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of claim protocol types (CPT).
         * @type {Array.<CptListData> || null}
         */
        this.CptDataList = null;

        /**
         * The total number of claim protocol types (CPT).
         * @type {number || null}
         */
        this.AllCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.CptDataList) {
            this.CptDataList = new Array();
            for (let z in params.CptDataList) {
                let obj = new CptListData();
                obj.deserialize(params.CptDataList[z]);
                this.CptDataList.push(obj);
            }
        }
        this.AllCount = 'AllCount' in params ? params.AllCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCptInfo response structure.
 * @class
 */
class GetCptInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The JSON data of the claim protocol type (CPT).
         * @type {string || null}
         */
        this.CptJsonData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.CptJsonData = 'CptJsonData' in params ? params.CptJsonData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidRegisterTrend request structure.
 * @class
 */
class GetDidRegisterTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date (as early as 2021-4-23).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end date (as early as 2021-4-23).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * AddLabel request structure.
 * @class
 */
class AddLabelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The label ID.
         * @type {number || null}
         */
        this.LabelId = null;

        /**
         * 
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelId = 'LabelId' in params ? params.LabelId : null;
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * GetAuthorityIssuer response structure.
 * @class
 */
class GetAuthorityIssuerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The authority name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The blockchain network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The blockchain group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The DID of the authority.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * The registration time.
         * @type {string || null}
         */
        this.RegisterTime = null;

        /**
         * The recognition time.
         * @type {string || null}
         */
        this.RecognizeTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RegisterTime = 'RegisterTime' in params ? params.RegisterTime : null;
        this.RecognizeTime = 'RecognizeTime' in params ? params.RecognizeTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSelectiveCredential response structure.
 * @class
 */
class CreateSelectiveCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The credential string.
         * @type {string || null}
         */
        this.CredentialData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.CredentialData = 'CredentialData' in params ? params.CredentialData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyCredential response structure.
 * @class
 */
class VerifyCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the verification is successful.
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * The verification code.
         * @type {number || null}
         */
        this.VerifyCode = null;

        /**
         * The verification message.
         * @type {string || null}
         */
        this.VerifyMessage = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.VerifyCode = 'VerifyCode' in params ? params.VerifyCode : null;
        this.VerifyMessage = 'VerifyMessage' in params ? params.VerifyMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The information of claim protocol types (CPT).
 * @class
 */
class CptListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CPT ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The name of the claim protocol type (CPT).
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The service ID.
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * The application ID of the contract.
         * @type {number || null}
         */
        this.ContractAppId = null;

        /**
         * The claim protocol type (CPT) ID.
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * The type. `1`: System CPTs; `2`: Authorization CPTs; `3`: General CPTs
         * @type {number || null}
         */
        this.CptType = null;

        /**
         * The description of the claim protocol type (CPT).
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The JSON file of the claim protocol type (CPT).
         * @type {string || null}
         */
        this.CptJson = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The last updated time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The DID of the creator.
         * @type {string || null}
         */
        this.CreatorDid = null;

        /**
         * The application name.
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ContractAppId = 'ContractAppId' in params ? params.ContractAppId : null;
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.CptType = 'CptType' in params ? params.CptType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CptJson = 'CptJson' in params ? params.CptJson : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreatorDid = 'CreatorDid' in params ? params.CreatorDid : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * The input parameters for creating a credential.
 * @class
 */
class FunctionArg extends  AbstractModel {
    constructor(){
        super();

        /**
         * The claim protocol type (CPT) ID.
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * The DID of the issuer.
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * The expiration time.
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * The claim.
         * @type {string || null}
         */
        this.ClaimJson = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.ClaimJson = 'ClaimJson' in params ? params.ClaimJson : null;

    }
}

/**
 * CreateTDidByPrivateKey request structure.
 * @class
 */
class CreateTDidByPrivateKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The private key.
         * @type {string || null}
         */
        this.PrivateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * RegisterCpt response structure.
 * @class
 */
class RegisterCptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The claim protocol type (CPT) index.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The claim protocol type (CPT) ID.
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetCredentialStatus request structure.
 * @class
 */
class SetCredentialStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The credential status.
         * @type {CredentialStatus || null}
         */
        this.CredentialStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CredentialStatus) {
            let obj = new CredentialStatus();
            obj.deserialize(params.CredentialStatus)
            this.CredentialStatus = obj;
        }

    }
}

/**
 * RemoveHash response structure.
 * @class
 */
class RemoveHashResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * CheckDidDeploy request structure.
 * @class
 */
class CheckDidDeployRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task ID.
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * GetDidDocument response structure.
 * @class
 */
class GetDidDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The DID document.
         * @type {string || null}
         */
        this.Document = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Document = 'Document' in params ? params.Document : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterIssuer response structure.
 * @class
 */
class RegisterIssuerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * CancelAuthorityIssuer request structure.
 * @class
 */
class CancelAuthorityIssuerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The details of the DID.
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * CancelAuthorityIssuer response structure.
 * @class
 */
class CancelAuthorityIssuerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * CreateTDid request structure.
 * @class
 */
class CreateTDidRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         *  
         * @type {number || null}
         */
        this.Relegation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Relegation = 'Relegation' in params ? params.Relegation : null;

    }
}

/**
 * GetAuthoritiesList response structure.
 * @class
 */
class GetAuthoritiesListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A data set.
         * @type {Array.<Authority> || null}
         */
        this.ResultList = null;

        /**
         * The total number of records.
         * @type {number || null}
         */
        this.AllCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.ResultList) {
            this.ResultList = new Array();
            for (let z in params.ResultList) {
                let obj = new Authority();
                obj.deserialize(params.ResultList[z]);
                this.ResultList.push(obj);
            }
        }
        this.AllCount = 'AllCount' in params ? params.AllCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSelectiveCredential request structure.
 * @class
 */
class CreateSelectiveCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * A parameter set.
         * @type {VerifyFunctionArg || null}
         */
        this.FunctionArg = null;

        /**
         * The disclosure policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FunctionArg) {
            let obj = new VerifyFunctionArg();
            obj.deserialize(params.FunctionArg)
            this.FunctionArg = obj;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * CreateTDidByPrivateKey response structure.
 * @class
 */
class CreateTDidByPrivateKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Did = 'Did' in params ? params.Did : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeployByName request structure.
 * @class
 */
class DeployByNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application name.
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * GetDidServiceList request structure.
 * @class
 */
class GetDidServiceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * `1`: Return results at the network level; `0`: Return results at the service level.
         * @type {number || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetAuthorityIssuer request structure.
 * @class
 */
class GetAuthorityIssuerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * GetDidClusterList response structure.
 * @class
 */
class GetDidClusterListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of the DID networks.
         * @type {Array.<DidCluster> || null}
         */
        this.DidClusterList = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.DidClusterList) {
            this.DidClusterList = new Array();
            for (let z in params.DidClusterList) {
                let obj = new DidCluster();
                obj.deserialize(params.DidClusterList[z]);
                this.DidClusterList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeAuthorityIssuer request structure.
 * @class
 */
class RecognizeAuthorityIssuerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * GetCredentialStatus request structure.
 * @class
 */
class GetCredentialStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The credential ID.
         * @type {string || null}
         */
        this.CredentialId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;

    }
}

/**
 * GetAgencyTDid response structure.
 * @class
 */
class GetAgencyTDidResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The prefix (fixed).
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * The details of the DID.
         * @type {Array.<Identity> || null}
         */
        this.Identity = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Prefix = 'Prefix' in params ? params.Prefix : null;

        if (params.Identity) {
            this.Identity = new Array();
            for (let z in params.Identity) {
                let obj = new Identity();
                obj.deserialize(params.Identity[z]);
                this.Identity.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The DID service information.
 * @class
 */
class DidServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID service ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The application ID.
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * The account ID.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * The consortium ID.
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * The consortium name.
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The chain ID.
         * @type {string || null}
         */
        this.ChainId = null;

        /**
         * Whether you are the owner of the consortium. `1`: Yes; `0`: No.
         * @type {number || null}
         */
        this.RoleType = null;

        /**
         * The organization DID.
         * @type {string || null}
         */
        this.AgencyDid = null;

        /**
         * The organization name.
         * @type {string || null}
         */
        this.CreateOrg = null;

        /**
         * The endpoint.
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The last updated time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The group name.
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.RoleType = 'RoleType' in params ? params.RoleType : null;
        this.AgencyDid = 'AgencyDid' in params ? params.AgencyDid : null;
        this.CreateOrg = 'CreateOrg' in params ? params.CreateOrg : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * SetCredentialStatus response structure.
 * @class
 */
class SetCredentialStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * Claim protocol type (CPT) rankings by the number of credentials issued.
 * @class
 */
class CptIssueRank extends  AbstractModel {
    constructor(){
        super();

        /**
         * The (claim protocol type) CPT name.
         * @type {string || null}
         */
        this.CptName = null;

        /**
         * The ranking.
         * @type {number || null}
         */
        this.Rank = null;

        /**
         * The number of credentials issued.
         * @type {number || null}
         */
        this.Count = null;

        /**
         * The application name.
         * @type {string || null}
         */
        this.ApplyName = null;

        /**
         * The application ID.
         * @type {number || null}
         */
        this.ApplyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptName = 'CptName' in params ? params.CptName : null;
        this.Rank = 'Rank' in params ? params.Rank : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ApplyName = 'ApplyName' in params ? params.ApplyName : null;
        this.ApplyId = 'ApplyId' in params ? params.ApplyId : null;

    }
}

/**
 * GetCredentialCptRank response structure.
 * @class
 */
class GetCredentialCptRankResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rankings.
         * @type {Array.<CptIssueRank> || null}
         */
        this.RankIssueResult = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.RankIssueResult) {
            this.RankIssueResult = new Array();
            for (let z in params.RankIssueResult) {
                let obj = new CptIssueRank();
                obj.deserialize(params.RankIssueResult[z]);
                this.RankIssueResult.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The transaction parameters.
 * @class
 */
class TransactionArg extends  AbstractModel {
    constructor(){
        super();

        /**
         * The credential ID.
         * @type {string || null}
         */
        this.InvokerTDid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokerTDid = 'InvokerTDid' in params ? params.InvokerTDid : null;

    }
}

/**
 * RegisterIssuer request structure.
 * @class
 */
class RegisterIssuerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * The issuing authority name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * GetDidList response structure.
 * @class
 */
class GetDidListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of DIDs.
         * @type {Array.<DidData> || null}
         */
        this.DataList = null;

        /**
         * The total number of records.
         * @type {number || null}
         */
        this.AllCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new DidData();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }
        this.AllCount = 'AllCount' in params ? params.AllCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDeployInfo response structure.
 * @class
 */
class GetDeployInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CNS address of the contract.
         * @type {string || null}
         */
        this.Hash = null;

        /**
         * The main group ID of the contract.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The DID of the organization that deployed the contract.
         * @type {string || null}
         */
        this.DeployDid = null;

        /**
         * The TDID SDK version.
         * @type {string || null}
         */
        this.SdkVersion = null;

        /**
         * The TDID contract version.
         * @type {string || null}
         */
        this.ContractVersion = null;

        /**
         * The blockchain node version.
         * @type {string || null}
         */
        this.BlockVersion = null;

        /**
         * The IP address of the blockchain node.
         * @type {string || null}
         */
        this.BlockIp = null;

        /**
         * The address of the DID contract.
         * @type {string || null}
         */
        this.DidAddress = null;

        /**
         * The address of the claim protocol type (CPT) contract.
         * @type {string || null}
         */
        this.CptAddress = null;

        /**
         * The address of the authority.
         * @type {string || null}
         */
        this.AuthorityAddress = null;

        /**
         * The evidence contract address.
         * @type {string || null}
         */
        this.EvidenceAddress = null;

        /**
         * The contract address of the specific issuer.
         * @type {string || null}
         */
        this.SpecificAddress = null;

        /**
         * The chain ID.
         * @type {string || null}
         */
        this.ChainId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Hash = 'Hash' in params ? params.Hash : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DeployDid = 'DeployDid' in params ? params.DeployDid : null;
        this.SdkVersion = 'SdkVersion' in params ? params.SdkVersion : null;
        this.ContractVersion = 'ContractVersion' in params ? params.ContractVersion : null;
        this.BlockVersion = 'BlockVersion' in params ? params.BlockVersion : null;
        this.BlockIp = 'BlockIp' in params ? params.BlockIp : null;
        this.DidAddress = 'DidAddress' in params ? params.DidAddress : null;
        this.CptAddress = 'CptAddress' in params ? params.CptAddress : null;
        this.AuthorityAddress = 'AuthorityAddress' in params ? params.AuthorityAddress : null;
        this.EvidenceAddress = 'EvidenceAddress' in params ? params.EvidenceAddress : null;
        this.SpecificAddress = 'SpecificAddress' in params ? params.SpecificAddress : null;
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The information of a deployed contract.
 * @class
 */
class Contract extends  AbstractModel {
    constructor(){
        super();

        /**
         * The application name.
         * @type {string || null}
         */
        this.ApplyName = null;

        /**
         * The contract status. `true`: Enabled; `false`: Not enabled.
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * The CNS address of the contract.
         * @type {string || null}
         */
        this.Hash = null;

        /**
         * The desensitized CNS address.
         * @type {string || null}
         */
        this.HashShow = null;

        /**
         * The DID of the organization that deployed the contract.
         * @type {string || null}
         */
        this.WeId = null;

        /**
         * The name of the organization that deployed the contract.
         * @type {string || null}
         */
        this.DeployName = null;

        /**
         * The group.
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * The deployment time.
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplyName = 'ApplyName' in params ? params.ApplyName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Hash = 'Hash' in params ? params.Hash : null;
        this.HashShow = 'HashShow' in params ? params.HashShow : null;
        this.WeId = 'WeId' in params ? params.WeId : null;
        this.DeployName = 'DeployName' in params ? params.DeployName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * CreateTDidByPublicKey response structure.
 * @class
 */
class CreateTDidByPublicKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Did = 'Did' in params ? params.Did : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckDidDeploy response structure.
 * @class
 */
class CheckDidDeployResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The service information.
         * @type {Task || null}
         */
        this.Task = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Task) {
            let obj = new Task();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidClusterDetail request structure.
 * @class
 */
class GetDidClusterDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetConsortiumClusterList request structure.
 * @class
 */
class GetConsortiumClusterListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The consortium ID.
         * @type {number || null}
         */
        this.ConsortiumId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;

    }
}

/**
 * GetDidDetail response structure.
 * @class
 */
class GetDidDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * The public key.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Whether the DID is a certified authority.
         * @type {number || null}
         */
        this.AuthorityState = null;

        /**
         * The consortium ID.
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * The consortium name.
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The BCOS resource ID.
         * @type {string || null}
         */
        this.ResChainId = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Did = 'Did' in params ? params.Did : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.AuthorityState = 'AuthorityState' in params ? params.AuthorityState : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ResChainId = 'ResChainId' in params ? params.ResChainId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The trends.
 * @class
 */
class Trend extends  AbstractModel {
    constructor(){
        super();

        /**
         * The time point.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * The count.
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * The information of a BCOS network.
 * @class
 */
class BcosClusterItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The network ID.
         * @type {number || null}
         */
        this.ChainId = null;

        /**
         * The network name.
         * @type {string || null}
         */
        this.ChainName = null;

        /**
         * The number of organizations.
         * @type {number || null}
         */
        this.AgencyCount = null;

        /**
         * The consortium ID.
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * The network status.
         * @type {number || null}
         */
        this.ChainStatus = null;

        /**
         * The resource ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * The cluster ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The consortium name.
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * The organization ID.
         * @type {number || null}
         */
        this.AgencyId = null;

        /**
         * The renewal status.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * The network mode.
         * @type {number || null}
         */
        this.TotalNetworkNode = null;

        /**
         * The number of nodes created.
         * @type {number || null}
         */
        this.TotalCreateNode = null;

        /**
         * The total number of groups.
         * @type {number || null}
         */
        this.TotalGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.ChainName = 'ChainName' in params ? params.ChainName : null;
        this.AgencyCount = 'AgencyCount' in params ? params.AgencyCount : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChainStatus = 'ChainStatus' in params ? params.ChainStatus : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.AgencyId = 'AgencyId' in params ? params.AgencyId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.TotalNetworkNode = 'TotalNetworkNode' in params ? params.TotalNetworkNode : null;
        this.TotalCreateNode = 'TotalCreateNode' in params ? params.TotalCreateNode : null;
        this.TotalGroups = 'TotalGroups' in params ? params.TotalGroups : null;

    }
}

/**
 * GetLabelList request structure.
 * @class
 */
class GetLabelListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The page number, beginning from 1.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * The information of DID blockchain networks.
 * @class
 */
class DidCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * The chain ID.
         * @type {number || null}
         */
        this.ChainId = null;

        /**
         * The chain name.
         * @type {string || null}
         */
        this.ChainName = null;

        /**
         * The number of organizations.
         * @type {number || null}
         */
        this.AgencyCount = null;

        /**
         * The consortium ID.
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The expiration time.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * The network status.
         * @type {number || null}
         */
        this.ChainStatus = null;

        /**
         * The resource ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The consortium name.
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * The organization ID.
         * @type {number || null}
         */
        this.AgencyId = null;

        /**
         * Whether auto-renewal is enabled.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * The total number of network nodes.
         * @type {number || null}
         */
        this.TotalNetworkNode = null;

        /**
         * The number of nodes of the current organization.
         * @type {number || null}
         */
        this.TotalCreateNode = null;

        /**
         * The total number of groups.
         * @type {number || null}
         */
        this.TotalGroups = null;

        /**
         * The total number of DIDs.
         * @type {number || null}
         */
        this.DidCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.ChainName = 'ChainName' in params ? params.ChainName : null;
        this.AgencyCount = 'AgencyCount' in params ? params.AgencyCount : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChainStatus = 'ChainStatus' in params ? params.ChainStatus : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.AgencyId = 'AgencyId' in params ? params.AgencyId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.TotalNetworkNode = 'TotalNetworkNode' in params ? params.TotalNetworkNode : null;
        this.TotalCreateNode = 'TotalCreateNode' in params ? params.TotalCreateNode : null;
        this.TotalGroups = 'TotalGroups' in params ? params.TotalGroups : null;
        this.DidCount = 'DidCount' in params ? params.DidCount : null;

    }
}

/**
 * GetDataPanel response structure.
 * @class
 */
class GetDataPanelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of blockchain networks.
         * @type {number || null}
         */
        this.BlockNetworkCount = null;

        /**
         * The blockchain network name.
         * @type {string || null}
         */
        this.BlockNetworkName = null;

        /**
         * The current block height.
         * @type {number || null}
         */
        this.BlockHeight = null;

        /**
         * The blockchain network type.
         * @type {number || null}
         */
        this.BlockNetworkType = null;

        /**
         * The number of DIDs.
         * @type {number || null}
         */
        this.DidCount = null;

        /**
         * The number of claim protocol types (CPT).
         * @type {number || null}
         */
        this.CptCount = null;

        /**
         * The number of certified authorities.
         * @type {number || null}
         */
        this.CertificatedAuthCount = null;

        /**
         * The number of credentials issued.
         * @type {number || null}
         */
        this.IssueCptCount = null;

        /**
         * The number of new DIDs in the current week.
         * @type {number || null}
         */
        this.NewDidCount = null;

        /**
         * The number of BCOS networks.
         * @type {number || null}
         */
        this.BcosCount = null;

        /**
         * The number of Fabric networks.
         * @type {number || null}
         */
        this.FabricCount = null;

        /**
         * The number of ChainMaker networks.
         * @type {number || null}
         */
        this.ChainMakerCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.BlockNetworkCount = 'BlockNetworkCount' in params ? params.BlockNetworkCount : null;
        this.BlockNetworkName = 'BlockNetworkName' in params ? params.BlockNetworkName : null;
        this.BlockHeight = 'BlockHeight' in params ? params.BlockHeight : null;
        this.BlockNetworkType = 'BlockNetworkType' in params ? params.BlockNetworkType : null;
        this.DidCount = 'DidCount' in params ? params.DidCount : null;
        this.CptCount = 'CptCount' in params ? params.CptCount : null;
        this.CertificatedAuthCount = 'CertificatedAuthCount' in params ? params.CertificatedAuthCount : null;
        this.IssueCptCount = 'IssueCptCount' in params ? params.IssueCptCount : null;
        this.NewDidCount = 'NewDidCount' in params ? params.NewDidCount : null;
        this.BcosCount = 'BcosCount' in params ? params.BcosCount : null;
        this.FabricCount = 'FabricCount' in params ? params.FabricCount : null;
        this.ChainMakerCount = 'ChainMakerCount' in params ? params.ChainMakerCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The details of the DID.
 * @class
 */
class Identity extends  AbstractModel {
    constructor(){
        super();

        /**
         * The account identifier.
         * @type {string || null}
         */
        this.AccountIdentifier = null;

        /**
         * The chain ID.
         * @type {string || null}
         */
        this.ChainID = null;

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The group name.
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountIdentifier = 'AccountIdentifier' in params ? params.AccountIdentifier : null;
        this.ChainID = 'ChainID' in params ? params.ChainID : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * QueryPolicy response structure.
 * @class
 */
class QueryPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The policy index.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The claim protocol type (CPT) ID.
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * The content of the policy.
         * @type {string || null}
         */
        this.PolicyData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.PolicyData = 'PolicyData' in params ? params.PolicyData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidList request structure.
 * @class
 */
class GetDidListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The page number, beginning from 1.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * The group information.
 * @class
 */
class Group extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The number of nodes.
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * The number of nodes of the organization.
         * @type {number || null}
         */
        this.NodeCountOfAgency = null;

        /**
         * The description of the group.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether you are the owner of the consortium or not.
         * @type {number || null}
         */
        this.RoleType = null;

        /**
         * The chain ID.
         * @type {string || null}
         */
        this.ChainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.NodeCountOfAgency = 'NodeCountOfAgency' in params ? params.NodeCountOfAgency : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RoleType = 'RoleType' in params ? params.RoleType : null;
        this.ChainId = 'ChainId' in params ? params.ChainId : null;

    }
}

/**
 * CheckChain response structure.
 * @class
 */
class CheckChainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether you are the owner of the consortium. `1`: Yes; `0`: No.
         * @type {number || null}
         */
        this.RoleType = null;

        /**
         * The chain ID.
         * @type {string || null}
         */
        this.ChainId = null;

        /**
         * The application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RoleType = 'RoleType' in params ? params.RoleType : null;
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTDidByPublicKey request structure.
 * @class
 */
class CreateTDidByPublicKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The public key.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * The encrypted public key.
         * @type {string || null}
         */
        this.EncryptPubKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.EncryptPubKey = 'EncryptPubKey' in params ? params.EncryptPubKey : null;

    }
}

/**
 * The policy information.
 * @class
 */
class Policy extends  AbstractModel {
    constructor(){
        super();

        /**
         * The policy index.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The policy name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The service ID.
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * The application ID of the contract.
         * @type {number || null}
         */
        this.ContractAppId = null;

        /**
         * The policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The claim protocol type (CPT) ID.
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * The JSON data.
         * @type {string || null}
         */
        this.PolicyJson = null;

        /**
         * The creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The last updated time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The DID of the creator.
         * @type {string || null}
         */
        this.CreatorDid = null;

        /**
         * The application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The claim protocol type (CPT) index.
         * @type {number || null}
         */
        this.CptIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ContractAppId = 'ContractAppId' in params ? params.ContractAppId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.PolicyJson = 'PolicyJson' in params ? params.PolicyJson : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreatorDid = 'CreatorDid' in params ? params.CreatorDid : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.CptIndex = 'CptIndex' in params ? params.CptIndex : null;

    }
}

/**
 * GetDataPanel request structure.
 * @class
 */
class GetDataPanelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetGroupList response structure.
 * @class
 */
class GetGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of groups.
         * @type {Array.<Group> || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new Group();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterClaimPolicy response structure.
 * @class
 */
class RegisterClaimPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The policy index.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The policy ID.
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidDetail request structure.
 * @class
 */
class GetDidDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * GetDidServiceDetail request structure.
 * @class
 */
class GetDidServiceDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID service ID.
         * @type {number || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * GetDidDocument request structure.
 * @class
 */
class GetDidDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * The information of a consortium.
 * @class
 */
class ConsortiumItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The consortium ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * The consortium name.
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * GetCredentialIssueRank response structure.
 * @class
 */
class GetCredentialIssueRankResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rankings.
         * @type {Array.<CptIssueRank> || null}
         */
        this.RankIssueResult = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.RankIssueResult) {
            this.RankIssueResult = new Array();
            for (let z in params.RankIssueResult) {
                let obj = new CptIssueRank();
                obj.deserialize(params.RankIssueResult[z]);
                this.RankIssueResult.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddLabel response structure.
 * @class
 */
class AddLabelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
 * GetDeployList response structure.
 * @class
 */
class GetDeployListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of contracts.
         * @type {number || null}
         */
        this.AllCount = null;

        /**
         * A list of deployed contracts.
         * @type {Array.<Contract> || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.AllCount = 'AllCount' in params ? params.AllCount : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new Contract();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckChain request structure.
 * @class
 */
class CheckChainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The name of the DID organization.
         * @type {string || null}
         */
        this.AgencyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AgencyName = 'AgencyName' in params ? params.AgencyName : null;

    }
}

/**
 * GetPublicKey response structure.
 * @class
 */
class GetPublicKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * The public key.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Did = 'Did' in params ? params.Did : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidRegisterTrend response structure.
 * @class
 */
class GetDidRegisterTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The trend information.
         * @type {Array.<Trend> || null}
         */
        this.Trend = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Trend) {
            this.Trend = new Array();
            for (let z in params.Trend) {
                let obj = new Trend();
                obj.deserialize(params.Trend[z]);
                this.Trend.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCredentialStatus response structure.
 * @class
 */
class GetCredentialStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The credential status.
         * @type {CredentialStatus || null}
         */
        this.CredentialStatus = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.CredentialStatus) {
            let obj = new CredentialStatus();
            obj.deserialize(params.CredentialStatus)
            this.CredentialStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTDid response structure.
 * @class
 */
class CreateTDidResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Did = 'Did' in params ? params.Did : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyCredential request structure.
 * @class
 */
class VerifyCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * A parameter set.
         * @type {VerifyFunctionArg || null}
         */
        this.FunctionArg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FunctionArg) {
            let obj = new VerifyFunctionArg();
            obj.deserialize(params.FunctionArg)
            this.FunctionArg = obj;
        }

    }
}

/**
 * RegisterCpt request structure.
 * @class
 */
class RegisterCptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The JSON data of the credential claim type (CPT).
         * @type {string || null}
         */
        this.CptJson = null;

        /**
         * If you do not specify this, the ID will auto increment.
         * @type {number || null}
         */
        this.CptId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CptJson = 'CptJson' in params ? params.CptJson : null;
        this.CptId = 'CptId' in params ? params.CptId : null;

    }
}

/**
 * GetLabelList response structure.
 * @class
 */
class GetLabelListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A data set.
         * @type {Array.<Label> || null}
         */
        this.Result = null;

        /**
         * The total number of records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new Label();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The credential verification parameters.
 * @class
 */
class VerifyFunctionArg extends  AbstractModel {
    constructor(){
        super();

        /**
         * The claim protocol type (CPT) ID.
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * The issuer DID.
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * The expiration time.
         * @type {number || null}
         */
        this.ExpirationDate = null;

        /**
         * The claim.
         * @type {string || null}
         */
        this.ClaimJson = null;

        /**
         * The time when the credential was issued.
         * @type {number || null}
         */
        this.IssuanceDate = null;

        /**
         * The context.
         * @type {string || null}
         */
        this.Context = null;

        /**
         * The ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The signature.
         * @type {Proof || null}
         */
        this.Proof = null;

        /**
         * The type.
         * @type {Array.<string> || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.ClaimJson = 'ClaimJson' in params ? params.ClaimJson : null;
        this.IssuanceDate = 'IssuanceDate' in params ? params.IssuanceDate : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Proof) {
            let obj = new Proof();
            obj.deserialize(params.Proof)
            this.Proof = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetPolicyList response structure.
 * @class
 */
class GetPolicyListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of disclosure policies.
         * @type {Array.<Policy> || null}
         */
        this.PolicyDataList = null;

        /**
         * The total number of records.
         * @type {number || null}
         */
        this.AllCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.PolicyDataList) {
            this.PolicyDataList = new Array();
            for (let z in params.PolicyDataList) {
                let obj = new Policy();
                obj.deserialize(params.PolicyDataList[z]);
                this.PolicyDataList.push(obj);
            }
        }
        this.AllCount = 'AllCount' in params ? params.AllCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The information of DIDs.
 * @class
 */
class DidData extends  AbstractModel {
    constructor(){
        super();

        /**
         * The service ID.
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The application name.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * The DID.
         * @type {string || null}
         */
        this.Did = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * The status of the authority. `1`: Not registered; `2`: Not certified; `3`: Certified.
         * @type {number || null}
         */
        this.AuthorityState = null;

        /**
         * The label of the DID.
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * The DID creation time.
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The consortium name.
         * @type {string || null}
         */
        this.AllianceName = null;

        /**
         * The label ID.
         * @type {number || null}
         */
        this.LabelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.AuthorityState = 'AuthorityState' in params ? params.AuthorityState : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AllianceName = 'AllianceName' in params ? params.AllianceName : null;
        this.LabelId = 'LabelId' in params ? params.LabelId : null;

    }
}

/**
 * GetCredentialIssueRank request structure.
 * @class
 */
class GetCredentialIssueRankRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date (as early as 2021-4-23).
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end date (as early as 2021-4-23).
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetDeployList request structure.
 * @class
 */
class GetDeployListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The network ID.
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * The group ID.
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * The start.
         * @type {number || null}
         */
        this.DisplayStart = null;

        /**
         * The maximum number of records to return.
         * @type {number || null}
         */
        this.DisplayLength = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DisplayStart = 'DisplayStart' in params ? params.DisplayStart : null;
        this.DisplayLength = 'DisplayLength' in params ? params.DisplayLength : null;

    }
}

module.exports = {
    CredentialStatus: CredentialStatus,
    QueryPolicyRequest: QueryPolicyRequest,
    RegisterClaimPolicyRequest: RegisterClaimPolicyRequest,
    GetDidServiceDetailResponse: GetDidServiceDetailResponse,
    CreateCredentialResponse: CreateCredentialResponse,
    GetConsortiumListRequest: GetConsortiumListRequest,
    DownCptResponse: DownCptResponse,
    GetCredentialIssueTrendResponse: GetCredentialIssueTrendResponse,
    CreateCredentialRequest: CreateCredentialRequest,
    CreateDidServiceResponse: CreateDidServiceResponse,
    GetConsortiumListResponse: GetConsortiumListResponse,
    GetCredentialCptRankRequest: GetCredentialCptRankRequest,
    GetPolicyListRequest: GetPolicyListRequest,
    GetConsortiumClusterListResponse: GetConsortiumClusterListResponse,
    Task: Task,
    GetCptListRequest: GetCptListRequest,
    GetAuthoritiesListRequest: GetAuthoritiesListRequest,
    GetAgencyTDidRequest: GetAgencyTDidRequest,
    RemoveHashRequest: RemoveHashRequest,
    GetGroupListRequest: GetGroupListRequest,
    Proof: Proof,
    GetDeployInfoRequest: GetDeployInfoRequest,
    Authority: Authority,
    CreateLabelResponse: CreateLabelResponse,
    GetPublicKeyRequest: GetPublicKeyRequest,
    Label: Label,
    GetDidServiceListResponse: GetDidServiceListResponse,
    DeployByNameResponse: DeployByNameResponse,
    CreateLabelRequest: CreateLabelRequest,
    CreateDidServiceRequest: CreateDidServiceRequest,
    GetDidClusterDetailResponse: GetDidClusterDetailResponse,
    RecognizeAuthorityIssuerResponse: RecognizeAuthorityIssuerResponse,
    EnableHashResponse: EnableHashResponse,
    GetCredentialIssueTrendRequest: GetCredentialIssueTrendRequest,
    EnableHashRequest: EnableHashRequest,
    GetDidClusterListRequest: GetDidClusterListRequest,
    GetCptInfoRequest: GetCptInfoRequest,
    DownCptRequest: DownCptRequest,
    GetCptListResponse: GetCptListResponse,
    GetCptInfoResponse: GetCptInfoResponse,
    GetDidRegisterTrendRequest: GetDidRegisterTrendRequest,
    AddLabelRequest: AddLabelRequest,
    GetAuthorityIssuerResponse: GetAuthorityIssuerResponse,
    CreateSelectiveCredentialResponse: CreateSelectiveCredentialResponse,
    VerifyCredentialResponse: VerifyCredentialResponse,
    CptListData: CptListData,
    FunctionArg: FunctionArg,
    CreateTDidByPrivateKeyRequest: CreateTDidByPrivateKeyRequest,
    RegisterCptResponse: RegisterCptResponse,
    SetCredentialStatusRequest: SetCredentialStatusRequest,
    RemoveHashResponse: RemoveHashResponse,
    CheckDidDeployRequest: CheckDidDeployRequest,
    GetDidDocumentResponse: GetDidDocumentResponse,
    RegisterIssuerResponse: RegisterIssuerResponse,
    CancelAuthorityIssuerRequest: CancelAuthorityIssuerRequest,
    CancelAuthorityIssuerResponse: CancelAuthorityIssuerResponse,
    CreateTDidRequest: CreateTDidRequest,
    GetAuthoritiesListResponse: GetAuthoritiesListResponse,
    CreateSelectiveCredentialRequest: CreateSelectiveCredentialRequest,
    CreateTDidByPrivateKeyResponse: CreateTDidByPrivateKeyResponse,
    DeployByNameRequest: DeployByNameRequest,
    GetDidServiceListRequest: GetDidServiceListRequest,
    GetAuthorityIssuerRequest: GetAuthorityIssuerRequest,
    GetDidClusterListResponse: GetDidClusterListResponse,
    RecognizeAuthorityIssuerRequest: RecognizeAuthorityIssuerRequest,
    GetCredentialStatusRequest: GetCredentialStatusRequest,
    GetAgencyTDidResponse: GetAgencyTDidResponse,
    DidServiceInfo: DidServiceInfo,
    SetCredentialStatusResponse: SetCredentialStatusResponse,
    CptIssueRank: CptIssueRank,
    GetCredentialCptRankResponse: GetCredentialCptRankResponse,
    TransactionArg: TransactionArg,
    RegisterIssuerRequest: RegisterIssuerRequest,
    GetDidListResponse: GetDidListResponse,
    GetDeployInfoResponse: GetDeployInfoResponse,
    Contract: Contract,
    CreateTDidByPublicKeyResponse: CreateTDidByPublicKeyResponse,
    CheckDidDeployResponse: CheckDidDeployResponse,
    GetDidClusterDetailRequest: GetDidClusterDetailRequest,
    GetConsortiumClusterListRequest: GetConsortiumClusterListRequest,
    GetDidDetailResponse: GetDidDetailResponse,
    Trend: Trend,
    BcosClusterItem: BcosClusterItem,
    GetLabelListRequest: GetLabelListRequest,
    DidCluster: DidCluster,
    GetDataPanelResponse: GetDataPanelResponse,
    Identity: Identity,
    QueryPolicyResponse: QueryPolicyResponse,
    GetDidListRequest: GetDidListRequest,
    Group: Group,
    CheckChainResponse: CheckChainResponse,
    CreateTDidByPublicKeyRequest: CreateTDidByPublicKeyRequest,
    Policy: Policy,
    GetDataPanelRequest: GetDataPanelRequest,
    GetGroupListResponse: GetGroupListResponse,
    RegisterClaimPolicyResponse: RegisterClaimPolicyResponse,
    GetDidDetailRequest: GetDidDetailRequest,
    GetDidServiceDetailRequest: GetDidServiceDetailRequest,
    GetDidDocumentRequest: GetDidDocumentRequest,
    ConsortiumItem: ConsortiumItem,
    GetCredentialIssueRankResponse: GetCredentialIssueRankResponse,
    AddLabelResponse: AddLabelResponse,
    GetDeployListResponse: GetDeployListResponse,
    CheckChainRequest: CheckChainRequest,
    GetPublicKeyResponse: GetPublicKeyResponse,
    GetDidRegisterTrendResponse: GetDidRegisterTrendResponse,
    GetCredentialStatusResponse: GetCredentialStatusResponse,
    CreateTDidResponse: CreateTDidResponse,
    VerifyCredentialRequest: VerifyCredentialRequest,
    RegisterCptRequest: RegisterCptRequest,
    GetLabelListResponse: GetLabelListResponse,
    VerifyFunctionArg: VerifyFunctionArg,
    GetPolicyListResponse: GetPolicyListResponse,
    DidData: DidData,
    GetCredentialIssueRankRequest: GetCredentialIssueRankRequest,
    GetDeployListRequest: GetDeployListRequest,

}
