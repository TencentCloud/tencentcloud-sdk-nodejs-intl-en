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
 * ModifyMediaPackageChannelEndpoint request structure.
 * @class
 */
class ModifyMediaPackageChannelEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel endpoint URL.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The channel name after modification.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The channel authentication after modification.
         * @type {EndpointAuthInfo || null}
         */
        this.AuthInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AuthInfo) {
            let obj = new EndpointAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }

    }
}

/**
 * DescribeMediaPackageChannel request structure.
 * @class
 */
class DescribeMediaPackageChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteMediaPackageChannelEndpoints response structure.
 * @class
 */
class DeleteMediaPackageChannelEndpointsResponse extends  AbstractModel {
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
 * ModifyMediaPackageChannelInputAuthInfo request structure.
 * @class
 */
class ModifyMediaPackageChannelInputAuthInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel input URL.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Authentication configuration type. Valid values: CLOSE, UPDATE.
CLOSE: disable authentication.
UPDATE: update authentication.
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * CreateMediaPackageChannelEndpoint request structure.
 * @class
 */
class CreateMediaPackageChannelEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Authentication information.
         * @type {EndpointAuthInfo || null}
         */
        this.AuthInfo = null;

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

        if (params.AuthInfo) {
            let obj = new EndpointAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }

    }
}

/**
 * CreateMediaPackageChannel response structure.
 * @class
 */
class CreateMediaPackageChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel information.
         * @type {ChannelInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new ChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMediaPackageChannel request structure.
 * @class
 */
class ModifyMediaPackageChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The channel name after modification.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The channel protocol after modification. Valid values: HLS, DASH.
         * @type {string || null}
         */
        this.Protocol = null;

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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * ModifyMediaPackageChannelEndpoint response structure.
 * @class
 */
class ModifyMediaPackageChannelEndpointResponse extends  AbstractModel {
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
 * Channel information.
 * @class
 */
class ChannelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Channel protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Channel input and output.
         * @type {PointInfo || null}
         */
        this.Points = null;

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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.Points) {
            let obj = new PointInfo();
            obj.deserialize(params.Points)
            this.Points = obj;
        }

    }
}

/**
 * ModifyMediaPackageChannelInputAuthInfo response structure.
 * @class
 */
class ModifyMediaPackageChannelInputAuthInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel input authentication information.
         * @type {InputAuthInfo || null}
         */
        this.AuthInfo = null;

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

        if (params.AuthInfo) {
            let obj = new InputAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Channel input.
 * @class
 */
class InputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel input URL.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Channel input authentication information.
         * @type {InputAuthInfo || null}
         */
        this.AuthInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

        if (params.AuthInfo) {
            let obj = new InputAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }

    }
}

/**
 * Channel input authentication information.
 * @class
 */
class InputAuthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Password.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * CreateMediaPackageChannel request structure.
 * @class
 */
class CreateMediaPackageChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Channel protocol. Valid values: HLS, DASH.
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DeleteMediaPackageChannelEndpoints request structure.
 * @class
 */
class DeleteMediaPackageChannelEndpointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The list of endpoint URLs.
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * DeleteMediaPackageChannels request structure.
 * @class
 */
class DeleteMediaPackageChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID list of channels to be deleted.
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * Channel endpoint information.
 * @class
 */
class EndpointInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Endpoint name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Endpoint URL.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Endpoint authentication information.
         * @type {EndpointAuthInfo || null}
         */
        this.AuthInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.AuthInfo) {
            let obj = new EndpointAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }

    }
}

/**
 * DescribeMediaPackageChannels response structure.
 * @class
 */
class DescribeMediaPackageChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of channel outputs.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ChannelInfo> || null}
         */
        this.Infos = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * The size of each page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new ChannelInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMediaPackageChannel response structure.
 * @class
 */
class ModifyMediaPackageChannelResponse extends  AbstractModel {
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
 * DescribeMediaPackageChannel response structure.
 * @class
 */
class DescribeMediaPackageChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel information.
         * @type {ChannelInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new ChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Channel input and output.
 * @class
 */
class PointInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel input list.
         * @type {Array.<InputInfo> || null}
         */
        this.Inputs = null;

        /**
         * Channel output list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<EndpointInfo> || null}
         */
        this.Endpoints = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Inputs) {
            this.Inputs = new Array();
            for (let z in params.Inputs) {
                let obj = new InputInfo();
                obj.deserialize(params.Inputs[z]);
                this.Inputs.push(obj);
            }
        }

        if (params.Endpoints) {
            this.Endpoints = new Array();
            for (let z in params.Endpoints) {
                let obj = new EndpointInfo();
                obj.deserialize(params.Endpoints[z]);
                this.Endpoints.push(obj);
            }
        }

    }
}

/**
 * DeleteMediaPackageChannels response structure.
 * @class
 */
class DeleteMediaPackageChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information list of channels that have been deleted.
         * @type {Array.<ChannelInfo> || null}
         */
        this.SuccessInfos = null;

        /**
         * The information list of channels that failed to be deleted.
         * @type {Array.<ChannelInfo> || null}
         */
        this.FailInfos = null;

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

        if (params.SuccessInfos) {
            this.SuccessInfos = new Array();
            for (let z in params.SuccessInfos) {
                let obj = new ChannelInfo();
                obj.deserialize(params.SuccessInfos[z]);
                this.SuccessInfos.push(obj);
            }
        }

        if (params.FailInfos) {
            this.FailInfos = new Array();
            for (let z in params.FailInfos) {
                let obj = new ChannelInfo();
                obj.deserialize(params.FailInfos[z]);
                this.FailInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMediaPackageChannels request structure.
 * @class
 */
class DescribeMediaPackageChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number. Value range: [1, 1000].
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * The size of each page. Value range: [1, 1000].
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * The authentication information of channel endpoints.
 * @class
 */
class EndpointAuthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group allowlist in CIDR format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

        /**
         * The security group blocklist in CIDR format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * The authentication key. Its value is same as `X-TENCENT-PACKAGE` set in the HTTP request header.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;

    }
}

/**
 * CreateMediaPackageChannelEndpoint response structure.
 * @class
 */
class CreateMediaPackageChannelEndpointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the created channel endpoint.
         * @type {EndpointInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new EndpointInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ModifyMediaPackageChannelEndpointRequest: ModifyMediaPackageChannelEndpointRequest,
    DescribeMediaPackageChannelRequest: DescribeMediaPackageChannelRequest,
    DeleteMediaPackageChannelEndpointsResponse: DeleteMediaPackageChannelEndpointsResponse,
    ModifyMediaPackageChannelInputAuthInfoRequest: ModifyMediaPackageChannelInputAuthInfoRequest,
    CreateMediaPackageChannelEndpointRequest: CreateMediaPackageChannelEndpointRequest,
    CreateMediaPackageChannelResponse: CreateMediaPackageChannelResponse,
    ModifyMediaPackageChannelRequest: ModifyMediaPackageChannelRequest,
    ModifyMediaPackageChannelEndpointResponse: ModifyMediaPackageChannelEndpointResponse,
    ChannelInfo: ChannelInfo,
    ModifyMediaPackageChannelInputAuthInfoResponse: ModifyMediaPackageChannelInputAuthInfoResponse,
    InputInfo: InputInfo,
    InputAuthInfo: InputAuthInfo,
    CreateMediaPackageChannelRequest: CreateMediaPackageChannelRequest,
    DeleteMediaPackageChannelEndpointsRequest: DeleteMediaPackageChannelEndpointsRequest,
    DeleteMediaPackageChannelsRequest: DeleteMediaPackageChannelsRequest,
    EndpointInfo: EndpointInfo,
    DescribeMediaPackageChannelsResponse: DescribeMediaPackageChannelsResponse,
    ModifyMediaPackageChannelResponse: ModifyMediaPackageChannelResponse,
    DescribeMediaPackageChannelResponse: DescribeMediaPackageChannelResponse,
    PointInfo: PointInfo,
    DeleteMediaPackageChannelsResponse: DeleteMediaPackageChannelsResponse,
    DescribeMediaPackageChannelsRequest: DescribeMediaPackageChannelsRequest,
    EndpointAuthInfo: EndpointAuthInfo,
    CreateMediaPackageChannelEndpointResponse: CreateMediaPackageChannelEndpointResponse,

}
