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
 * The network delay time for players to reach different regions.
 * @class
 */
class RegionLatency extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region
ap-beijing          North China (Beijing)
ap-chengdu          Southwest China (Chengdu)
ap-guangzhou           South China (Guangzhou)
ap-hongkong           Hong Kong/Macao/Taiwan (Hong Kong, China)
ap-seoul          Asia Pacific (Seoul)
ap-shanghai          East China (Shanghai)
ap-singapore          Southeast Asia (Singapore)
eu-frankfurt          Europe (Frankfurt)
na-siliconvalley          Western US (Silicon Valley)
na-toronto           North America (Toronto)
ap-mumbai           Asia Pacific (Mumbai)
na-ashburn          Eastern US (Virginia)
ap-bangkok           Asia Pacific (Bangkok)
eu-moscow           Europe (Moscow)
ap-tokyo           Asia Pacific (Tokyo)
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Delay time in ms. Value range: 0 - 999999
         * @type {number || null}
         */
        this.Latency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Latency = 'Latency' in params ? params.Latency : null;

    }
}

/**
 * ModifyToken response structure.
 * @class
 */
class ModifyTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token that has been set successfully.
         * @type {string || null}
         */
        this.MatchToken = null;

        /**
         * The time period during which GPM will continuously push the original token in seconds to the user when the token is replaced.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.CompatibleSpan = null;

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
        this.MatchToken = 'MatchToken' in params ? params.MatchToken : null;
        this.CompatibleSpan = 'CompatibleSpan' in params ? params.CompatibleSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeToken request structure.
 * @class
 */
class DescribeTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchCode
         * @type {string || null}
         */
        this.MatchCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

    }
}

/**
 * Player attributes for matching
 * @class
 */
class MatchAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute name. It can contain up to 128 characters, supporting [a-zA-Z0-9-\.]*.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Attribute type. 0: number, 1: string. Default value: 0
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Numeric attribute value. Default value: 0.0
         * @type {number || null}
         */
        this.NumberValue = null;

        /**
         * String attribute value. Up to 128 characters are allowed. Default value: ""
         * @type {string || null}
         */
        this.StringValue = null;

        /**
         * List attribute value
         * @type {Array.<string> || null}
         */
        this.ListValue = null;

        /**
         * Map attribute value
         * @type {Array.<AttributeMap> || null}
         */
        this.MapValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.NumberValue = 'NumberValue' in params ? params.NumberValue : null;
        this.StringValue = 'StringValue' in params ? params.StringValue : null;
        this.ListValue = 'ListValue' in params ? params.ListValue : null;

        if (params.MapValue) {
            this.MapValue = new Array();
            for (let z in params.MapValue) {
                let obj = new AttributeMap();
                obj.deserialize(params.MapValue[z]);
                this.MapValue.push(obj);
            }
        }

    }
}

/**
 * StartMatching request structure.
 * @class
 */
class StartMatchingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchCode
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * Player information. Up to 200 entries can be entered.
         * @type {Array.<Player> || null}
         */
        this.Players = null;

        /**
         * MatchTicket ID, which can contain up to 128 characters and can only contain numbers, letters, “.”, and “-”. This parameter is left empty by default. When it is empty, the MatchTicket ID will be automatically generated by GPM.
         * @type {string || null}
         */
        this.MatchTicketId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

        if (params.Players) {
            this.Players = new Array();
            for (let z in params.Players) {
                let obj = new Player();
                obj.deserialize(params.Players[z]);
                this.Players.push(obj);
            }
        }
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;

    }
}

/**
 * The combination of MatchCode and MatchTicket ID.
 * @class
 */
class MTicket extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchCode
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * MatchTicket ID
         * @type {string || null}
         */
        this.MatchTicketId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;

    }
}

/**
 * CancelMatching request structure.
 * @class
 */
class CancelMatchingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchCode
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * The MatchTicket ID of the matchmaking to cancel
         * @type {string || null}
         */
        this.MatchTicketId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;

    }
}

/**
 * DescribeMatchingProgress request structure.
 * @class
 */
class DescribeMatchingProgressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of MatchTicket IDs. It can contain up to 12 IDs.
         * @type {Array.<MTicket> || null}
         */
        this.MatchTicketIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchTicketIds) {
            this.MatchTicketIds = new Array();
            for (let z in params.MatchTicketIds) {
                let obj = new MTicket();
                obj.deserialize(params.MatchTicketIds[z]);
                this.MatchTicketIds.push(obj);
            }
        }

    }
}

/**
 * The map key and map value of the player attribute
 * @class
 */
class AttributeMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * Map key, supporting [a-zA-Z0-9-\.]*
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Map value
         * @type {number || null}
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
 * StartMatching response structure.
 * @class
 */
class StartMatchingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * MatchTicket ID. Up to 128 characters are allowed.
         * @type {string || null}
         */
        this.MatchTicketId = null;

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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Player information
 * @class
 */
class Player extends  AbstractModel {
    constructor(){
        super();

        /**
         * Player ID. It can contain up to 128 characters, supporting [a-zA-Z\d-\._]*.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Player nickname. Up to 128 characters are allowed.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Player attribute for matching. Up to 10 attributes are supported.
         * @type {Array.<MatchAttribute> || null}
         */
        this.MatchAttributes = null;

        /**
         * Team name. A player can pass in a different team name, which can contain up to 128 characters, and support [a-zA-Z0-9-\.]*.
         * @type {string || null}
         */
        this.Team = null;

        /**
         * Custom player status. This parameter will be passed through. Value range: [0, 99999]
         * @type {number || null}
         */
        this.CustomPlayerStatus = null;

        /**
         * Custom player information. Up to 1024 characters are allowed. This parameter will be passed through.
         * @type {string || null}
         */
        this.CustomProfile = null;

        /**
         * Number of delays in each area. Up to 20 delays are supported.
         * @type {Array.<RegionLatency> || null}
         */
        this.RegionLatencies = null;

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

        if (params.MatchAttributes) {
            this.MatchAttributes = new Array();
            for (let z in params.MatchAttributes) {
                let obj = new MatchAttribute();
                obj.deserialize(params.MatchAttributes[z]);
                this.MatchAttributes.push(obj);
            }
        }
        this.Team = 'Team' in params ? params.Team : null;
        this.CustomPlayerStatus = 'CustomPlayerStatus' in params ? params.CustomPlayerStatus : null;
        this.CustomProfile = 'CustomProfile' in params ? params.CustomProfile : null;

        if (params.RegionLatencies) {
            this.RegionLatencies = new Array();
            for (let z in params.RegionLatencies) {
                let obj = new RegionLatency();
                obj.deserialize(params.RegionLatencies[z]);
                this.RegionLatencies.push(obj);
            }
        }

    }
}

/**
 * CancelMatching response structure.
 * @class
 */
class CancelMatchingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code
         * @type {number || null}
         */
        this.ErrCode = null;

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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeToken response structure.
 * @class
 */
class DescribeTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token corresponding to the current MatchCode. If the current MatchCode does not have a token, this parameter may not obtain a valid value.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.MatchToken = null;

        /**
         * The time period during which GPM will continuously push the original token in seconds when the token is replaced.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.CompatibleSpan = null;

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
        this.MatchToken = 'MatchToken' in params ? params.MatchToken : null;
        this.CompatibleSpan = 'CompatibleSpan' in params ? params.CompatibleSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MatchTicket information
 * @class
 */
class MatchTicket extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchTicket ID. It can contain up to 128 characters, supporting [a-zA-Z0-9-\.]*.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * MatchCode
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * Different structure serialized results will be returned according to the MatchType.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.MatchResult = null;

        /**
         * Matchmaking type. Valid values: NORMAL, GSE
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * Player information list
         * @type {Array.<Player> || null}
         */
        this.Players = null;

        /**
         * Matching status. Valid values: SEARCHING (matching), PLACING (pending match), COMPLETED (match completed), CANCELLED (match cancelled), TIMEDOUT (match timeouts), FAILED (match failed)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Matching status descriptions
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.StatusMessage = null;

        /**
         * Reason for the matching status
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.StatusReason = null;

        /**
         * The time when the GPM received the matchmaking request, for example "2020-08-17T08:14:38.077Z".
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The time when the matchmaking request stopped executing due to the completion, failure, timeout, or cancellation, for example "2020-08-17T08:14:38.077Z".
Note: this field may return `null`, indicating that no valid value is obtained.
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
        this.Id = 'Id' in params ? params.Id : null;
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchResult = 'MatchResult' in params ? params.MatchResult : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;

        if (params.Players) {
            this.Players = new Array();
            for (let z in params.Players) {
                let obj = new Player();
                obj.deserialize(params.Players[z]);
                this.Players.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusMessage = 'StatusMessage' in params ? params.StatusMessage : null;
        this.StatusReason = 'StatusReason' in params ? params.StatusReason : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyToken request structure.
 * @class
 */
class ModifyTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchCode
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * The time period during which GPM will continuously push the original token in seconds to the user when the token is replaced. Value range: 0 - 1800. Within the CompatibleSpan time period, user will receive the current and original token in the event notification.
         * @type {number || null}
         */
        this.CompatibleSpan = null;

        /**
         * Token. It can contain 0 - 64 characters, supporting [a-zA-Z0-9-_.]. If this parameter is left empty, the token will be randomly generated by GPM.
         * @type {string || null}
         */
        this.MatchToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.CompatibleSpan = 'CompatibleSpan' in params ? params.CompatibleSpan : null;
        this.MatchToken = 'MatchToken' in params ? params.MatchToken : null;

    }
}

/**
 * DescribeMatchingProgress response structure.
 * @class
 */
class DescribeMatchingProgressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchTicket list
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<MatchTicket> || null}
         */
        this.MatchTickets = null;

        /**
         * Error code
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

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

        if (params.MatchTickets) {
            this.MatchTickets = new Array();
            for (let z in params.MatchTickets) {
                let obj = new MatchTicket();
                obj.deserialize(params.MatchTickets[z]);
                this.MatchTickets.push(obj);
            }
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    RegionLatency: RegionLatency,
    ModifyTokenResponse: ModifyTokenResponse,
    DescribeTokenRequest: DescribeTokenRequest,
    MatchAttribute: MatchAttribute,
    StartMatchingRequest: StartMatchingRequest,
    MTicket: MTicket,
    CancelMatchingRequest: CancelMatchingRequest,
    DescribeMatchingProgressRequest: DescribeMatchingProgressRequest,
    AttributeMap: AttributeMap,
    StartMatchingResponse: StartMatchingResponse,
    Player: Player,
    CancelMatchingResponse: CancelMatchingResponse,
    DescribeTokenResponse: DescribeTokenResponse,
    MatchTicket: MatchTicket,
    ModifyTokenRequest: ModifyTokenRequest,
    DescribeMatchingProgressResponse: DescribeMatchingProgressResponse,

}
