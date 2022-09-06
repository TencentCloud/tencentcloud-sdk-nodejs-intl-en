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
 * CreateSession response structure.
 * @class
 */
class CreateSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The server-side session data, which is returned to the SDK.
         * @type {string || null}
         */
        this.ServerSession = null;

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
        this.ServerSession = 'ServerSession' in params ? params.ServerSession : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroySession response structure.
 * @class
 */
class DestroySessionResponse extends  AbstractModel {
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
 * ApplyConcurrent response structure.
 * @class
 */
class ApplyConcurrentResponse extends  AbstractModel {
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
 * ApplyConcurrent request structure.
 * @class
 */
class ApplyConcurrentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user’s unique ID. Tencent Cloud does not parse the ID. You need to manage your own user IDs. Based on your needs, you can either define unique IDs for users or use timestamps to generate random IDs. Make sure the same ID is used when a user reconnects to your application.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The user’s IP address.
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * The project ID.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * The application version ID.
         * @type {string || null}
         */
        this.ApplicationVersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ApplicationVersionId = 'ApplicationVersionId' in params ? params.ApplicationVersionId : null;

    }
}

/**
 * DestroySession request structure.
 * @class
 */
class DestroySessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user’s unique ID. Tencent Cloud does not parse the ID. You need to manage your own user IDs. Based on your needs, you can either define unique IDs for users or use timestamps to generate random IDs. Make sure the same ID is used when a user reconnects to your application.
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CreateSession request structure.
 * @class
 */
class CreateSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The user’s unique ID. Tencent Cloud does not parse the ID. You need to manage your own user IDs. Based on your needs, you can either define unique IDs for users or use timestamps to generate random IDs. Make sure the same ID is used when a user reconnects to your application.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * The user’s IP address.
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * The client-side session data, which is obtained from the SDK.
         * @type {string || null}
         */
        this.ClientSession = null;

        /**
         * The on-cloud running mode.
`RunWithoutClient`: Keep the application running on the cloud even when there are no client connections.
Empty string (default): Keep the application running on the cloud only when there are client connections.
         * @type {string || null}
         */
        this.RunMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.ClientSession = 'ClientSession' in params ? params.ClientSession : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;

    }
}

module.exports = {
    CreateSessionResponse: CreateSessionResponse,
    DestroySessionResponse: DestroySessionResponse,
    ApplyConcurrentResponse: ApplyConcurrentResponse,
    ApplyConcurrentRequest: ApplyConcurrentRequest,
    DestroySessionRequest: DestroySessionRequest,
    CreateSessionRequest: CreateSessionRequest,

}
