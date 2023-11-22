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
 * CreateStreamPackageHarvestJob request structure.
 * @class
 */
class CreateStreamPackageHarvestJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob ID, a globally unique identifier.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * The associated channel name.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * The associated endpoint name.
         * @type {string || null}
         */
        this.EndpointName = null;

        /**
         * Time format, supports the following types: 1. Epoch seconds 2. ISO-8601
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Task start time supports two formats for TimeFormat input: 1. Epoch seconds: The input box is a numeric input box, and only positive integers can be entered. 2. ISO-8601: The supported format is ISO time, for example: 2023-08-01T10:00:00+08:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time supports two formats for TimeFormat input: 1. Epoch seconds: The input box is a numeric input box, and only positive integers can be entered. 2. ISO-8601: The supported format is ISO time, for example: 2023-08-01T10:00:00+08:00.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The path where the recording file is stored in Cos.
         * @type {string || null}
         */
        this.Destination = null;

        /**
         * The file name of the recording file stored in Cos.
         * @type {string || null}
         */
        this.Manifest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.EndpointName = 'EndpointName' in params ? params.EndpointName : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.Manifest = 'Manifest' in params ? params.Manifest : null;

    }
}

/**
 * DescribeStreamPackageHarvestJob request structure.
 * @class
 */
class DescribeStreamPackageHarvestJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob ID, a globally unique identifier.
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

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
 * BindNewLVBDomainWithChannel response structure.
 * @class
 */
class BindNewLVBDomainWithChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The LVB domain name bound successfully
         * @type {string || null}
         */
        this.LVBDomain = null;

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
        this.LVBDomain = 'LVBDomain' in params ? params.LVBDomain : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPackageHarvestJob response structure.
 * @class
 */
class DescribeStreamPackageHarvestJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob information.
         * @type {HarvestJobResp || null}
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
            let obj = new HarvestJobResp();
            obj.deserialize(params.Info)
            this.Info = obj;
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
 * DescribeStreamPackageHarvestJobs request structure.
 * @class
 */
class DescribeStreamPackageHarvestJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The bound channel name. If not passed, all channels will be queried by default.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * PageSize.
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
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DeleteStreamPackageHarvestJob response structure.
 * @class
 */
class DeleteStreamPackageHarvestJobResponse extends  AbstractModel {
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
 * DeleteStreamPackageHarvestJobs request structure.
 * @class
 */
class DeleteStreamPackageHarvestJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob IDs, id is a globally unique identifier.
         * @type {Array.<string> || null}
         */
        this.IDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IDs = 'IDs' in params ? params.IDs : null;

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
 * CreateStreamPackageHarvestJob response structure.
 * @class
 */
class CreateStreamPackageHarvestJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob information.
         * @type {HarvestJobResp || null}
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
            let obj = new HarvestJobResp();
            obj.deserialize(params.Info)
            this.Info = obj;
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
 * UnbindCdnDomainWithChannel request structure.
 * @class
 */
class UnbindCdnDomainWithChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * CDN playback domain name
         * @type {string || null}
         */
        this.CdnDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.CdnDomain = 'CdnDomain' in params ? params.CdnDomain : null;

    }
}

/**
 * HarvestJob response info.
 * @class
 */
class HarvestJobResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob ID, a globally unique identifier.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * The associated channel name.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * The associated endpoint name.
         * @type {string || null}
         */
        this.EndpointName = null;

        /**
         * Time format, supports the following types: 1. Epoch seconds 2. ISO-8601
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * HarvestJob start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * HarvestJob end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The path where the recording file is stored in COS.
         * @type {string || null}
         */
        this.Destination = null;

        /**
         * The file name of the recording file stored in COS.
         * @type {string || null}
         */
        this.Manifest = null;

        /**
         * The task status is divided into running: Running, execution completed: Completed, and execution failure: Failed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * HarvestJob error message.
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * HarvestJob creation time, timestamp in seconds.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * The associated ChannelID.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * The region corresponding to the harvest job.
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.EndpointName = 'EndpointName' in params ? params.EndpointName : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.Manifest = 'Manifest' in params ? params.Manifest : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Region = 'Region' in params ? params.Region : null;

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
 * DescribeStreamPackageHarvestJobs response structure.
 * @class
 */
class DescribeStreamPackageHarvestJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob information list.
         * @type {Array.<HarvestJobResp> || null}
         */
        this.Infos = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * PageSize
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * TotalNum
         * @type {number || null}
         */
        this.TotalNum = null;

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
                let obj = new HarvestJobResp();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Endpoint name, which must contain 1 to 32 characters and supports digits, letters, and underscores
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
 * UnbindCdnDomainWithChannel response structure.
 * @class
 */
class UnbindCdnDomainWithChannelResponse extends  AbstractModel {
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
 * DeleteStreamPackageHarvestJob request structure.
 * @class
 */
class DeleteStreamPackageHarvestJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob ID, a globally unique identifier.
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

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
 * BindNewLVBDomainWithChannel request structure.
 * @class
 */
class BindNewLVBDomainWithChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * The LVB domain name to bind
         * @type {string || null}
         */
        this.LVBDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.LVBDomain = 'LVBDomain' in params ? params.LVBDomain : null;

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
 * DeleteStreamPackageHarvestJobs response structure.
 * @class
 */
class DeleteStreamPackageHarvestJobsResponse extends  AbstractModel {
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

module.exports = {
    DeleteStreamPackageChannelsRequest: DeleteStreamPackageChannelsRequest,
    CreateStreamPackageHarvestJobRequest: CreateStreamPackageHarvestJobRequest,
    DescribeStreamPackageHarvestJobRequest: DescribeStreamPackageHarvestJobRequest,
    PointInfo: PointInfo,
    DeleteStreamPackageChannelsResponse: DeleteStreamPackageChannelsResponse,
    BindNewLVBDomainWithChannelResponse: BindNewLVBDomainWithChannelResponse,
    DescribeStreamPackageHarvestJobResponse: DescribeStreamPackageHarvestJobResponse,
    DescribeStreamPackageChannelsResponse: DescribeStreamPackageChannelsResponse,
    DescribeStreamPackageChannelsRequest: DescribeStreamPackageChannelsRequest,
    ModifyStreamPackageChannelEndpointResponse: ModifyStreamPackageChannelEndpointResponse,
    ModifyStreamPackageChannelInputAuthInfoResponse: ModifyStreamPackageChannelInputAuthInfoResponse,
    EndpointAuthInfo: EndpointAuthInfo,
    DescribeStreamPackageHarvestJobsRequest: DescribeStreamPackageHarvestJobsRequest,
    DeleteStreamPackageHarvestJobResponse: DeleteStreamPackageHarvestJobResponse,
    DeleteStreamPackageHarvestJobsRequest: DeleteStreamPackageHarvestJobsRequest,
    CreateStreamPackageChannelResponse: CreateStreamPackageChannelResponse,
    CreateStreamPackageChannelEndpointResponse: CreateStreamPackageChannelEndpointResponse,
    DeleteStreamPackageChannelEndpointsRequest: DeleteStreamPackageChannelEndpointsRequest,
    CreateStreamPackageHarvestJobResponse: CreateStreamPackageHarvestJobResponse,
    ChannelInfo: ChannelInfo,
    CacheInfo: CacheInfo,
    DeleteStreamPackageChannelEndpointsResponse: DeleteStreamPackageChannelEndpointsResponse,
    InputInfo: InputInfo,
    InputAuthInfo: InputAuthInfo,
    UnbindCdnDomainWithChannelRequest: UnbindCdnDomainWithChannelRequest,
    HarvestJobResp: HarvestJobResp,
    EndpointInfo: EndpointInfo,
    DescribeStreamPackageChannelRequest: DescribeStreamPackageChannelRequest,
    DescribeStreamPackageHarvestJobsResponse: DescribeStreamPackageHarvestJobsResponse,
    ModifyStreamPackageChannelRequest: ModifyStreamPackageChannelRequest,
    ModifyStreamPackageChannelEndpointRequest: ModifyStreamPackageChannelEndpointRequest,
    CacheInfoInfo: CacheInfoInfo,
    CreateStreamPackageChannelEndpointRequest: CreateStreamPackageChannelEndpointRequest,
    UnbindCdnDomainWithChannelResponse: UnbindCdnDomainWithChannelResponse,
    DeleteStreamPackageHarvestJobRequest: DeleteStreamPackageHarvestJobRequest,
    CreateStreamPackageChannelRequest: CreateStreamPackageChannelRequest,
    ModifyStreamPackageChannelInputAuthInfoRequest: ModifyStreamPackageChannelInputAuthInfoRequest,
    BindNewLVBDomainWithChannelRequest: BindNewLVBDomainWithChannelRequest,
    DescribeStreamPackageChannelResponse: DescribeStreamPackageChannelResponse,
    ModifyStreamPackageChannelResponse: ModifyStreamPackageChannelResponse,
    DeleteStreamPackageHarvestJobsResponse: DeleteStreamPackageHarvestJobsResponse,

}
