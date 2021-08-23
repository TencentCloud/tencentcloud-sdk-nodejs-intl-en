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
 * DeleteStreamPackageChannels request structure.
 * @class
 */
class DeleteStreamPackageChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the IDs of the channels to delete
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
 * DeleteStreamPackageChannels response structure.
 * @class
 */
class DeleteStreamPackageChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the information of successfully deleted channels
         * @type {Array.<ChannelInfo> || null}
         */
        this.SuccessInfos = null;

        /**
         * List of the information of the channels that failed to be deleted
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
 * DescribeStreamPackageChannels response structure.
 * @class
 */
class DescribeStreamPackageChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of channel information
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<ChannelInfo> || null}
         */
        this.Infos = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages
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
 * DescribeStreamPackageChannels request structure.
 * @class
 */
class DescribeStreamPackageChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number. Value range: [1, 1000]
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [1, 1000]
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
 * ModifyStreamPackageChannelEndpoint response structure.
 * @class
 */
class ModifyStreamPackageChannelEndpointResponse extends  AbstractModel {
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
 * ModifyStreamPackageChannelInputAuthInfo response structure.
 * @class
 */
class ModifyStreamPackageChannelInputAuthInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel input authentication information
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
 * CreateStreamPackageChannel response structure.
 * @class
 */
class CreateStreamPackageChannelResponse extends  AbstractModel {
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
 * CreateStreamPackageChannelEndpoint response structure.
 * @class
 */
class CreateStreamPackageChannelEndpointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the created channel endpoint
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

/**
 * DeleteStreamPackageChannelEndpoints request structure.
 * @class
 */
class DeleteStreamPackageChannelEndpointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * List of the URLs of the endpoints to delete
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

        /**
         * Cache configuration
Note: this field may return `null`, indicating that no valid value was found.
         * @type {CacheInfo || null}
         */
        this.CacheInfo = null;

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

        if (params.CacheInfo) {
            let obj = new CacheInfo();
            obj.deserialize(params.CacheInfo)
            this.CacheInfo = obj;
        }

    }
}

/**
 * Cache configuration
 * @class
 */
class CacheInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of timeout parameter configuration
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<CacheInfoInfo> || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new CacheInfoInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }

    }
}

/**
 * DeleteStreamPackageChannelEndpoints response structure.
 * @class
 */
class DeleteStreamPackageChannelEndpointsResponse extends  AbstractModel {
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
 * DescribeStreamPackageChannel request structure.
 * @class
 */
class DescribeStreamPackageChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
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
 * ModifyStreamPackageChannel request structure.
 * @class
 */
class ModifyStreamPackageChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * New channel name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * New channel protocol. Valid values: HLS, DASH
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Cache configuration
         * @type {CacheInfo || null}
         */
        this.CacheInfo = null;

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

        if (params.CacheInfo) {
            let obj = new CacheInfo();
            obj.deserialize(params.CacheInfo)
            this.CacheInfo = obj;
        }

    }
}

/**
 * ModifyStreamPackageChannelEndpoint request structure.
 * @class
 */
class ModifyStreamPackageChannelEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel endpoint URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * New endpoint name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * New channel authentication information
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
 * Timeout information for cache configuration
 * @class
 */
class CacheInfoInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timeout period (ms), which must be an integer multiple of 1000
.m3u8/.mpd: [1000, 60000]
.ts/.m4s/.mp4: [10000, 1800000]
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * File extension. Valid values: .m3u8, .ts, .mpd, .m4s, .mp4
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Ext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Ext = 'Ext' in params ? params.Ext : null;

    }
}

/**
 * CreateStreamPackageChannelEndpoint request structure.
 * @class
 */
class CreateStreamPackageChannelEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Authentication information
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
 * CreateStreamPackageChannel request structure.
 * @class
 */
class CreateStreamPackageChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Channel protocol. Valid values: HLS, DASH
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Cache configuration
         * @type {CacheInfo || null}
         */
        this.CacheInfo = null;

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

        if (params.CacheInfo) {
            let obj = new CacheInfo();
            obj.deserialize(params.CacheInfo)
            this.CacheInfo = obj;
        }

    }
}

/**
 * ModifyStreamPackageChannelInputAuthInfo request structure.
 * @class
 */
class ModifyStreamPackageChannelInputAuthInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel input URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Authentication configuration. Valid values: `CLOSE`, `UPDATE`
`CLOSE`: disable authentication
`UPDATE`: update authentication information
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
 * DescribeStreamPackageChannel response structure.
 * @class
 */
class DescribeStreamPackageChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel information
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
 * ModifyStreamPackageChannel response structure.
 * @class
 */
class ModifyStreamPackageChannelResponse extends  AbstractModel {
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

module.exports = {
    DeleteStreamPackageChannelsRequest: DeleteStreamPackageChannelsRequest,
    PointInfo: PointInfo,
    DeleteStreamPackageChannelsResponse: DeleteStreamPackageChannelsResponse,
    DescribeStreamPackageChannelsResponse: DescribeStreamPackageChannelsResponse,
    DescribeStreamPackageChannelsRequest: DescribeStreamPackageChannelsRequest,
    ModifyStreamPackageChannelEndpointResponse: ModifyStreamPackageChannelEndpointResponse,
    ModifyStreamPackageChannelInputAuthInfoResponse: ModifyStreamPackageChannelInputAuthInfoResponse,
    CreateStreamPackageChannelResponse: CreateStreamPackageChannelResponse,
    CreateStreamPackageChannelEndpointResponse: CreateStreamPackageChannelEndpointResponse,
    DeleteStreamPackageChannelEndpointsRequest: DeleteStreamPackageChannelEndpointsRequest,
    ChannelInfo: ChannelInfo,
    CacheInfo: CacheInfo,
    DeleteStreamPackageChannelEndpointsResponse: DeleteStreamPackageChannelEndpointsResponse,
    InputInfo: InputInfo,
    InputAuthInfo: InputAuthInfo,
    EndpointInfo: EndpointInfo,
    DescribeStreamPackageChannelRequest: DescribeStreamPackageChannelRequest,
    ModifyStreamPackageChannelRequest: ModifyStreamPackageChannelRequest,
    ModifyStreamPackageChannelEndpointRequest: ModifyStreamPackageChannelEndpointRequest,
    CacheInfoInfo: CacheInfoInfo,
    CreateStreamPackageChannelEndpointRequest: CreateStreamPackageChannelEndpointRequest,
    CreateStreamPackageChannelRequest: CreateStreamPackageChannelRequest,
    ModifyStreamPackageChannelInputAuthInfoRequest: ModifyStreamPackageChannelInputAuthInfoRequest,
    DescribeStreamPackageChannelResponse: DescribeStreamPackageChannelResponse,
    ModifyStreamPackageChannelResponse: ModifyStreamPackageChannelResponse,
    EndpointAuthInfo: EndpointAuthInfo,

}
