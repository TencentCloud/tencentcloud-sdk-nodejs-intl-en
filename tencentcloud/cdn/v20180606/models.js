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
 * PurgePathCache request structure.
 * @class
 */
class PurgePathCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of directories. The protocol header such as "http://" or "https://" needs to be included.
         * @type {Array.<string> || null}
         */
        this.Paths = null;

        /**
         * Purge type:
`flush`: purges updated resources
`delete`: purges all resources
         * @type {string || null}
         */
        this.FlushType = null;

        /**
         * Whether to encode Chinese characters before purge.
         * @type {boolean || null}
         */
        this.UrlEncode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Paths = 'Paths' in params ? params.Paths : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;
        this.UrlEncode = 'UrlEncode' in params ? params.UrlEncode : null;

    }
}

/**
 * PurgePathCache response structure.
 * @class
 */
class PurgePathCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge task ID. Directories submitted in one request share a task ID.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PushUrlsCache response structure.
 * @class
 */
class PushUrlsCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the submitted task
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateScdnFailedLogTask request structure.
 * @class
 */
class CreateScdnFailedLogTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the failed task to retry
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Region. Valid values: `mainland` and `overseas`.
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * CreateScdnFailedLogTask response structure.
 * @class
 */
class CreateScdnFailedLogTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation result. 
0: Creation succeeded
         * @type {string || null}
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PushUrlsCache request structure.
 * @class
 */
class PushUrlsCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of URLs. The protocol header such as "http://" or "https://" needs to be included.
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * Specifies the User-Agent header of an HTTP prefetch request when it is forwarded to the origin server
Default value: `TencentCdn`
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Destination region for the prefetch
`mainland`: prefetches resources to nodes within Mainland China
`overseas`: prefetches resources to nodes outside Mainland China
`global`: prefetches resources to global nodes
Default value: `mainland`. You can prefetch a URL to nodes in a region provided that CDN service has been enabled for the domain name in the URL in the region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * If this parameter is `middle` or left empty, prefetch will be performed onto the intermediate node.
Note: resources prefetched outside the Chinese mainland will be cached to CDN nodes outside the Chinese mainland and the traffic generated will incur costs.
         * @type {string || null}
         */
        this.Layer = null;

        /**
         * Whether to recursively resolve the M3U8 index file and prefetch the TS shards in it.
Notes:
1. This feature requires that the M3U8 index file can be directly requested and obtained.
2. In the M3U8 index file, currently only the TS shards at the first to the third level can be recursively resolved.
3. Prefetching the TS shards obtained through recursive resolution consumes the daily prefetch quota. If the usage exceeds the quota, the feature will be disabled and TS shards will not be prefetched.
         * @type {boolean || null}
         */
        this.ParseM3U8 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Layer = 'Layer' in params ? params.Layer : null;
        this.ParseM3U8 = 'ParseM3U8' in params ? params.ParseM3U8 : null;

    }
}

module.exports = {
    PurgePathCacheRequest: PurgePathCacheRequest,
    PurgePathCacheResponse: PurgePathCacheResponse,
    PushUrlsCacheResponse: PushUrlsCacheResponse,
    CreateScdnFailedLogTaskRequest: CreateScdnFailedLogTaskRequest,
    CreateScdnFailedLogTaskResponse: CreateScdnFailedLogTaskResponse,
    PushUrlsCacheRequest: PushUrlsCacheRequest,

}
