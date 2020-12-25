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
 * Game attribute details
 * @class
 */
class GameProperty extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute name. Up to 32 ASCII characters are allowed.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Attribute value. Up to 96 ASCII characters are allowed.
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
 * UpdateGameServerSession response structure.
 * @class
 */
class UpdateGameServerSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Updated game session
         * @type {GameServerSession || null}
         */
        this.GameServerSession = null;

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

        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession)
            this.GameServerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGameServerSessions response structure.
 * @class
 */
class DescribeGameServerSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GameServerSession> || null}
         */
        this.GameServerSessions = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NextToken = null;

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

        if (params.GameServerSessions) {
            this.GameServerSessions = new Array();
            for (let z in params.GameServerSessions) {
                let obj = new GameServerSession();
                obj.deserialize(params.GameServerSessions[z]);
                this.GameServerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetInstanceAccess response structure.
 * @class
 */
class GetInstanceAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Credentials required for instance login
         * @type {InstanceAccess || null}
         */
        this.InstanceAccess = null;

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

        if (params.InstanceAccess) {
            let obj = new InstanceAccess();
            obj.deserialize(params.InstanceAccess)
            this.InstanceAccess = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * JoinGameServerSession request structure.
 * @class
 */
class JoinGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 256 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Player ID. Up to 1024 ASCII characters are allowed.
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Player custom data. Up to 2048 ASCII characters are allowed.
         * @type {string || null}
         */
        this.PlayerData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;

    }
}

/**
 * DescribePlayerSessions response structure.
 * @class
 */
class DescribePlayerSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player session list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PlayerSession> || null}
         */
        this.PlayerSessions = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NextToken = null;

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

        if (params.PlayerSessions) {
            this.PlayerSessions = new Array();
            for (let z in params.PlayerSessions) {
                let obj = new PlayerSession();
                obj.deserialize(params.PlayerSessions[z]);
                this.PlayerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Player latency information
 * @class
 */
class PlayerLatency extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Name of region corresponding to latency
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionIdentifier = null;

        /**
         * Latency in milliseconds
         * @type {number || null}
         */
        this.LatencyInMilliseconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.RegionIdentifier = 'RegionIdentifier' in params ? params.RegionIdentifier : null;
        this.LatencyInMilliseconds = 'LatencyInMilliseconds' in params ? params.LatencyInMilliseconds : null;

    }
}

/**
 * StopGameServerSessionPlacement request structure.
 * @class
 */
class StopGameServerSessionPlacementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of game server session placement
         * @type {string || null}
         */
        this.PlacementId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;

    }
}

/**
 * GetInstanceAccess request structure.
 * @class
 */
class GetInstanceAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeGameServerSessions request structure.
 * @class
 */
class DescribeGameServerSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alias ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Maximum number of entries in a single query
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Game server session status. Valid values: ACTIVE, ACTIVATING, TERMINATED, TERMINATING, ERROR
         * @type {string || null}
         */
        this.StatusFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;

    }
}

/**
 * UpdateGameServerSession request structure.
 * @class
 */
class UpdateGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 256 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * The maximum number of players, which cannot be less than 0.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * Name of the game server session. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Player session creation policy, which includes `ACCEPT_ALL` (allow all players) and `DENY_ALL` (reject all players).
         * @type {string || null}
         */
        this.PlayerSessionCreationPolicy = null;

        /**
         * Protection policy, which includes `NoProtection`·(no protection), `TimeLimitProtection` (time-limited protection) and `FullProtection` (full protection)
         * @type {string || null}
         */
        this.ProtectionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PlayerSessionCreationPolicy = 'PlayerSessionCreationPolicy' in params ? params.PlayerSessionCreationPolicy : null;
        this.ProtectionPolicy = 'ProtectionPolicy' in params ? params.ProtectionPolicy : null;

    }
}

/**
 * DescribePlayerSessions request structure.
 * @class
 */
class DescribePlayerSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Maximum number of entries in a single query
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Player ID. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Player session ID. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.PlayerSessionId = null;

        /**
         * Player session status. Valid values: RESERVED, ACTIVE, COMPLETED, TIMEDOUT
         * @type {string || null}
         */
        this.PlayerSessionStatusFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;
        this.PlayerSessionStatusFilter = 'PlayerSessionStatusFilter' in params ? params.PlayerSessionStatusFilter : null;

    }
}

/**
 * StartGameServerSessionPlacement response structure.
 * @class
 */
class StartGameServerSessionPlacementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session placement
         * @type {GameServerSessionPlacement || null}
         */
        this.GameServerSessionPlacement = null;

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

        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement)
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Credentials required for instance access
 * @class
 */
class Credentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSH private key
         * @type {string || null}
         */
        this.Secret = null;

        /**
         * Username
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Secret = 'Secret' in params ? params.Secret : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * GetGameServerSessionLogUrl request structure.
 * @class
 */
class GetGameServerSessionLogUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;

    }
}

/**
 * CreateGameServerSession response structure.
 * @class
 */
class CreateGameServerSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {GameServerSession || null}
         */
        this.GameServerSession = null;

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

        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession)
            this.GameServerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGameServerSessionDetails response structure.
 * @class
 */
class DescribeGameServerSessionDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of game server session details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GameServerSessionDetail> || null}
         */
        this.GameServerSessionDetails = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NextToken = null;

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

        if (params.GameServerSessionDetails) {
            this.GameServerSessionDetails = new Array();
            for (let z in params.GameServerSessionDetails) {
                let obj = new GameServerSessionDetail();
                obj.deserialize(params.GameServerSessionDetails[z]);
                this.GameServerSessionDetails.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * JoinGameServerSession response structure.
 * @class
 */
class JoinGameServerSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player session
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {PlayerSession || null}
         */
        this.PlayerSession = null;

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

        if (params.PlayerSession) {
            let obj = new PlayerSession();
            obj.deserialize(params.PlayerSession)
            this.PlayerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Player game session information
 * @class
 */
class DesiredPlayerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique player ID associated with player session
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Developer-defined player data
         * @type {string || null}
         */
        this.PlayerData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;

    }
}

/**
 * SearchGameServerSessions response structure.
 * @class
 */
class SearchGameServerSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GameServerSession> || null}
         */
        this.GameServerSessions = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.NextToken = null;

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

        if (params.GameServerSessions) {
            this.GameServerSessions = new Array();
            for (let z in params.GameServerSessions) {
                let obj = new GameServerSession();
                obj.deserialize(params.GameServerSessions[z]);
                this.GameServerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGameServerSessionPlacement request structure.
 * @class
 */
class DescribeGameServerSessionPlacementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of game server session placement
         * @type {string || null}
         */
        this.PlacementId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;

    }
}

/**
 * Deployed player game session
 * @class
 */
class PlacedPlayerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player ID
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Player session ID
         * @type {string || null}
         */
        this.PlayerSessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;

    }
}

/**
 * Game session deployment object
 * @class
 */
class GameServerSessionPlacement extends  AbstractModel {
    constructor(){
        super();

        /**
         * Deployment ID
         * @type {string || null}
         */
        this.PlacementId = null;

        /**
         * Service deployment group name
         * @type {string || null}
         */
        this.GameServerSessionQueueName = null;

        /**
         * Player latency
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PlayerLatency> || null}
         */
        this.PlayerLatencies = null;

        /**
         * Service deployment status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * DNS ID assigned to the instance where the game session is running
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * Game session ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Game session name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GameServerSessionName = null;

        /**
         * Service deployment region
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GameServerSessionRegion = null;

        /**
         * Game attributes
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * The maximum number of players that can be connected simultaneously to the game session. It should a value between 1 to the maximum number of player sessions.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * Game session data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * IP address of the instance where the game session is running
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * Port number of the instance where the game session is running
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Game match data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MatchmakerData = null;

        /**
         * Deployed player game data
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PlacedPlayerSession> || null}
         */
        this.PlacedPlayerSessions = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
        this.GameServerSessionQueueName = 'GameServerSessionQueueName' in params ? params.GameServerSessionQueueName : null;

        if (params.PlayerLatencies) {
            this.PlayerLatencies = new Array();
            for (let z in params.PlayerLatencies) {
                let obj = new PlayerLatency();
                obj.deserialize(params.PlayerLatencies[z]);
                this.PlayerLatencies.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.GameServerSessionName = 'GameServerSessionName' in params ? params.GameServerSessionName : null;
        this.GameServerSessionRegion = 'GameServerSessionRegion' in params ? params.GameServerSessionRegion : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.MatchmakerData = 'MatchmakerData' in params ? params.MatchmakerData : null;

        if (params.PlacedPlayerSessions) {
            this.PlacedPlayerSessions = new Array();
            for (let z in params.PlacedPlayerSessions) {
                let obj = new PlacedPlayerSession();
                obj.deserialize(params.PlacedPlayerSessions[z]);
                this.PlacedPlayerSessions.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * JoinGameServerSessionBatch request structure.
 * @class
 */
class JoinGameServerSessionBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session ID. It should contain 1 to 256 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Player ID list. At least 1 ID and up to 25 IDs.
         * @type {Array.<string> || null}
         */
        this.PlayerIds = null;

        /**
         * Player custom data
         * @type {PlayerDataMap || null}
         */
        this.PlayerDataMap = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.PlayerIds = 'PlayerIds' in params ? params.PlayerIds : null;

        if (params.PlayerDataMap) {
            let obj = new PlayerDataMap();
            obj.deserialize(params.PlayerDataMap)
            this.PlayerDataMap = obj;
        }

    }
}

/**
 * Player session details
 * @class
 */
class PlayerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player session creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * ID of the DNS where the game server session is running
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game server session ID. It should contain 1 to 256 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Address of the CVM instance where the game server session is running
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * Player custom data. Up to 2048 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.PlayerData = null;

        /**
         * Player ID. Up to 1024 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * Player session ID
         * @type {string || null}
         */
        this.PlayerSessionId = null;

        /**
         * Port number. It should be a value between 1 to 60000.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Player session status. Valid values: RESERVED = 1, ACTIVE = 2, COMPLETED =3, TIMEDOUT = 4
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Player session termination time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TerminationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;

    }
}

/**
 * CreateGameServerSession request structure.
 * @class
 */
class CreateGameServerSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The maximum number of players, which cannot be less than 0.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * Alias ID. You need to specify an alias ID or fleet ID for each request. If both of them are specified, the fleet ID shall prevail.
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * Creator ID. Up to 1024 ASCII characters are allowed.
         * @type {string || null}
         */
        this.CreatorId = null;

        /**
         * Fleet ID. You need to specify an alias ID or fleet ID for each request. If both of them are specified, the fleet ID shall prevail.
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game attributes. Up to 16 groups of attributes are allowed.
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * The attribute details of game server session. Up to 4096 ASCII characters are allowed.
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * The custom ID of game server session. Up to 4096 ASCII characters are allowed.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Idempotency token. Up to 48 ASCII characters are allowed.
         * @type {string || null}
         */
        this.IdempotencyToken = null;

        /**
         * The name of game server session. Up to 1024 ASCII characters are allowed.
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
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IdempotencyToken = 'IdempotencyToken' in params ? params.IdempotencyToken : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * GetGameServerSessionLogUrl response structure.
 * @class
 */
class GetGameServerSessionLogUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log download URL. It should contain 1 to 1024 ASCII characters.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.PreSignedUrl = null;

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
        this.PreSignedUrl = 'PreSignedUrl' in params ? params.PreSignedUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Game server session details (GameServerSessionDetail)
 * @class
 */
class GameServerSessionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session
         * @type {GameServerSession || null}
         */
        this.GameServerSession = null;

        /**
         * Protection policy. Valid values: NoProtection, FullProtection
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProtectionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession)
            this.GameServerSession = obj;
        }
        this.ProtectionPolicy = 'ProtectionPolicy' in params ? params.ProtectionPolicy : null;

    }
}

/**
 * DescribeGameServerSessionDetails request structure.
 * @class
 */
class DescribeGameServerSessionDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alias ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * Maximum number of entries in a single query
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Game server session status. Valid values: ACTIVE, ACTIVATING, TERMINATED, TERMINATING, ERROR
         * @type {string || null}
         */
        this.StatusFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;

    }
}

/**
 * StartGameServerSessionPlacement request structure.
 * @class
 */
class StartGameServerSessionPlacementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the game server session placement. It should contain up to 48 ASCII characters, supporting [a-zA-Z0-9-]+.
         * @type {string || null}
         */
        this.PlacementId = null;

        /**
         * Game server session queue name
         * @type {string || null}
         */
        this.GameServerSessionQueueName = null;

        /**
         * The maximum number of players that can be connected simultaneously to the game session. It should a value between 1 to the maximum number of player sessions.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * Player game session information
         * @type {Array.<DesiredPlayerSession> || null}
         */
        this.DesiredPlayerSessions = null;

        /**
         * Player game session attributes
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * Data of game server sessions. Up to 4096 ASCII characters are allowed.
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * Name of game server sessions. Up to 4096 ASCII characters are allowed.
         * @type {string || null}
         */
        this.GameServerSessionName = null;

        /**
         * Player latency
         * @type {Array.<PlayerLatency> || null}
         */
        this.PlayerLatencies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
        this.GameServerSessionQueueName = 'GameServerSessionQueueName' in params ? params.GameServerSessionQueueName : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;

        if (params.DesiredPlayerSessions) {
            this.DesiredPlayerSessions = new Array();
            for (let z in params.DesiredPlayerSessions) {
                let obj = new DesiredPlayerSession();
                obj.deserialize(params.DesiredPlayerSessions[z]);
                this.DesiredPlayerSessions.push(obj);
            }
        }

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionName = 'GameServerSessionName' in params ? params.GameServerSessionName : null;

        if (params.PlayerLatencies) {
            this.PlayerLatencies = new Array();
            for (let z in params.PlayerLatencies) {
                let obj = new PlayerLatency();
                obj.deserialize(params.PlayerLatencies[z]);
                this.PlayerLatencies.push(obj);
            }
        }

    }
}

/**
 * Game session details
 * @class
 */
class GameServerSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session creation time
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * Creator ID. Up to 1024 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.CreatorId = null;

        /**
         * The current number of players, which cannot be less than 0.
         * @type {number || null}
         */
        this.CurrentPlayerSessionCount = null;

        /**
         * CVM DNS ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DnsName = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Game attributes. Up to 16 groups of attributes are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<GameProperty> || null}
         */
        this.GameProperties = null;

        /**
         * The attribute details of game server session. Up to 4096 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.GameServerSessionData = null;

        /**
         * Game server session ID. It should contain 1 to 48 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * CVM IP address
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * Battle progress details. Up to 400,000 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.MatchmakerData = null;

        /**
         * The maximum number of players, which cannot be less than 0.
         * @type {number || null}
         */
        this.MaximumPlayerSessionCount = null;

        /**
         * The name of game server session. Up to 1024 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Player session creation policy. Valid values: ACCEPT_ALL, DENY_ALL
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.PlayerSessionCreationPolicy = null;

        /**
         * Port number. It should be a value between 1 to 60000.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Game server session status. Valid values: ACTIVE, ACTIVATING, TERMINATED, TERMINATING, ERROR
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Additional information of game server session status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusReason = null;

        /**
         * Termination time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TerminationTime = null;

        /**
         * Instance type. Up to 128 ASCII characters are allowed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Current custom count
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CurrentCustomCount = null;

        /**
         * Maximum custom count
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxCustomCount = null;

        /**
         * Weight
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Session availability status, i.e., whether it is blocked. Valid value: Enable, Disable
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.AvailabilityStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
        this.CurrentPlayerSessionCount = 'CurrentPlayerSessionCount' in params ? params.CurrentPlayerSessionCount : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.MatchmakerData = 'MatchmakerData' in params ? params.MatchmakerData : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PlayerSessionCreationPolicy = 'PlayerSessionCreationPolicy' in params ? params.PlayerSessionCreationPolicy : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusReason = 'StatusReason' in params ? params.StatusReason : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.CurrentCustomCount = 'CurrentCustomCount' in params ? params.CurrentCustomCount : null;
        this.MaxCustomCount = 'MaxCustomCount' in params ? params.MaxCustomCount : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.AvailabilityStatus = 'AvailabilityStatus' in params ? params.AvailabilityStatus : null;

    }
}

/**
 * DescribeGameServerSessionPlacement response structure.
 * @class
 */
class DescribeGameServerSessionPlacementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session placement
         * @type {GameServerSessionPlacement || null}
         */
        this.GameServerSessionPlacement = null;

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

        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement)
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * JoinGameServerSessionBatch response structure.
 * @class
 */
class JoinGameServerSessionBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player session list. Up to 25 sessions.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<PlayerSession> || null}
         */
        this.PlayerSessions = null;

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

        if (params.PlayerSessions) {
            this.PlayerSessions = new Array();
            for (let z in params.PlayerSessions) {
                let obj = new PlayerSession();
                obj.deserialize(params.PlayerSessions[z]);
                this.PlayerSessions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Player custom data
 * @class
 */
class PlayerDataMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key of player custom data. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The value of player custom data. It should contain 1 to 2048 ASCII characters.
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
 * SearchGameServerSessions request structure.
 * @class
 */
class SearchGameServerSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alias ID
         * @type {string || null}
         */
        this.AliasId = null;

        /**
         * Fleet ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Maximum number of entries in a single query
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is used for querying the next page. It should contain 1 to 1024 ASCII characters.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Search filter expression. Valid values:
gameServerSessionName: game session name in `String` type
gameServerSessionId: game session ID in `String` type
maximumSessions: maximum number of player sessions in `Number` type
creationTimeMillis: creation time in milliseconds in `Number` type
playerSessionCount: current number of player sessions in `Number` type
hasAvailablePlayerSessions: whether there is available player session in `String` type. Valid values: true, false
gameServerSessionProperties: game session attributes in `String` type

Expressions in `String` type support = and <> for judgment
Expressions in `Number` type support =, <>, >, >=, <, and <= for judgment

Example:
If FilterExpression takes the value:
playerSessionCount>=2 AND hasAvailablePlayerSessions=true"
It means searching for game sessions that have at least two players and have player sessions available.
If FilterExpression takes the value:
gameServerSessionProperties.K1 = 'V1' AND gameServerSessionProperties.K2 = 'V2' OR gameServerSessionProperties.K3 = 'V3'

it means
searching for game sessions that meets the following game server session attributes
{
    "GameProperties":[
        {
            "Key":"K1",
            "Value":"V1"
        },
        {
            "Key":"K2",
            "Value":"V2"
        },
        {
            "Key":"K3",
            "Value":"V3"
        }
    ]
}
         * @type {string || null}
         */
        this.FilterExpression = null;

        /**
         * Sorting keyword
Valid values:
gameServerSessionName: game session name in `String` type
gameServerSessionId: game session ID in `String` type
maximumSessions: maximum number of player sessions in `Number` type
creationTimeMillis: creation time in milliseconds in `Number` type
playerSessionCount: current number of player sessions in `Number` type
         * @type {string || null}
         */
        this.SortExpression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.FilterExpression = 'FilterExpression' in params ? params.FilterExpression : null;
        this.SortExpression = 'SortExpression' in params ? params.SortExpression : null;

    }
}

/**
 * StopGameServerSessionPlacement response structure.
 * @class
 */
class StopGameServerSessionPlacementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Game server session placement
         * @type {GameServerSessionPlacement || null}
         */
        this.GameServerSessionPlacement = null;

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

        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement)
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Identity credentials for instance access
 * @class
 */
class InstanceAccess extends  AbstractModel {
    constructor(){
        super();

        /**
         * Credentials required for instance access
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * Service deployment ID
         * @type {string || null}
         */
        this.FleetId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Public IP of instance
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * OS
         * @type {string || null}
         */
        this.OperatingSystem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.OperatingSystem = 'OperatingSystem' in params ? params.OperatingSystem : null;

    }
}

module.exports = {
    GameProperty: GameProperty,
    UpdateGameServerSessionResponse: UpdateGameServerSessionResponse,
    DescribeGameServerSessionsResponse: DescribeGameServerSessionsResponse,
    GetInstanceAccessResponse: GetInstanceAccessResponse,
    JoinGameServerSessionRequest: JoinGameServerSessionRequest,
    DescribePlayerSessionsResponse: DescribePlayerSessionsResponse,
    PlayerLatency: PlayerLatency,
    StopGameServerSessionPlacementRequest: StopGameServerSessionPlacementRequest,
    GetInstanceAccessRequest: GetInstanceAccessRequest,
    DescribeGameServerSessionsRequest: DescribeGameServerSessionsRequest,
    UpdateGameServerSessionRequest: UpdateGameServerSessionRequest,
    DescribePlayerSessionsRequest: DescribePlayerSessionsRequest,
    StartGameServerSessionPlacementResponse: StartGameServerSessionPlacementResponse,
    Credentials: Credentials,
    GetGameServerSessionLogUrlRequest: GetGameServerSessionLogUrlRequest,
    CreateGameServerSessionResponse: CreateGameServerSessionResponse,
    DescribeGameServerSessionDetailsResponse: DescribeGameServerSessionDetailsResponse,
    JoinGameServerSessionResponse: JoinGameServerSessionResponse,
    DesiredPlayerSession: DesiredPlayerSession,
    SearchGameServerSessionsResponse: SearchGameServerSessionsResponse,
    DescribeGameServerSessionPlacementRequest: DescribeGameServerSessionPlacementRequest,
    PlacedPlayerSession: PlacedPlayerSession,
    GameServerSessionPlacement: GameServerSessionPlacement,
    JoinGameServerSessionBatchRequest: JoinGameServerSessionBatchRequest,
    PlayerSession: PlayerSession,
    CreateGameServerSessionRequest: CreateGameServerSessionRequest,
    GetGameServerSessionLogUrlResponse: GetGameServerSessionLogUrlResponse,
    GameServerSessionDetail: GameServerSessionDetail,
    DescribeGameServerSessionDetailsRequest: DescribeGameServerSessionDetailsRequest,
    StartGameServerSessionPlacementRequest: StartGameServerSessionPlacementRequest,
    GameServerSession: GameServerSession,
    DescribeGameServerSessionPlacementResponse: DescribeGameServerSessionPlacementResponse,
    JoinGameServerSessionBatchResponse: JoinGameServerSessionBatchResponse,
    PlayerDataMap: PlayerDataMap,
    SearchGameServerSessionsRequest: SearchGameServerSessionsRequest,
    StopGameServerSessionPlacementResponse: StopGameServerSessionPlacementResponse,
    InstanceAccess: InstanceAccess,

}
