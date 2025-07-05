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
 * DescribeData response structure.
 * @class
 */
class DescribeDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Matchmaking statistics overview
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {ReportOverviewData || null}
         */
        this.OverviewData = null;

        /**
         * Trend data of the number of matchmaking requests
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {ReportTrendData || null}
         */
        this.TrendData = null;

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

        if (params.OverviewData) {
            let obj = new ReportOverviewData();
            obj.deserialize(params.OverviewData)
            this.OverviewData = obj;
        }

        if (params.TrendData) {
            let obj = new ReportTrendData();
            obj.deserialize(params.TrendData)
            this.TrendData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMatchCodes request structure.
 * @class
 */
class DescribeMatchCodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset, number of pages.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of MatchCodes per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query by the MatchCode value (a string).
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

    }
}

/**
 * DeleteRule response structure.
 * @class
 */
class DeleteRuleResponse extends  AbstractModel {
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
 * ModifyMatch request structure.
 * @class
 */
class ModifyMatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Match name. It can contain up to 128 bytes, supporting [a-zA-Z0-9-\.]*.
         * @type {string || null}
         */
        this.MatchName = null;

        /**
         * RuleCode
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * Timeout period in seconds. Value range: 1 600
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Whether to request server resources for the matchmaking results. 0: no, 1: request GSE resources
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * MatchCode
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * Matchmaking description. Up to 1024 bytes are allowed.
         * @type {string || null}
         */
        this.MatchDesc = null;

        /**
         * Only HTTP and HTTPS protocols are supported.
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * Region of the game server queue
         * @type {string || null}
         */
        this.ServerRegion = null;

        /**
         * Game server queue
         * @type {string || null}
         */
        this.ServerQueue = null;

        /**
         * Custom push data
         * @type {string || null}
         */
        this.CustomPushData = null;

        /**
         * Game server session data
         * @type {string || null}
         */
        this.ServerSessionData = null;

        /**
         * Game attribute. It is an array of key-value structure.
         * @type {Array.<StringKV> || null}
         */
        this.GameProperties = null;

        /**
         * Enable or disable the log. 0: disable, 1: enable
         * @type {number || null}
         */
        this.LogSwitch = null;

        /**
         * Tag. It is an array of key-value structure.
         * @type {Array.<StringKV> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchName = 'MatchName' in params ? params.MatchName : null;
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchDesc = 'MatchDesc' in params ? params.MatchDesc : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.ServerRegion = 'ServerRegion' in params ? params.ServerRegion : null;
        this.ServerQueue = 'ServerQueue' in params ? params.ServerQueue : null;
        this.CustomPushData = 'CustomPushData' in params ? params.CustomPushData : null;
        this.ServerSessionData = 'ServerSessionData' in params ? params.ServerSessionData : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new StringKV();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.LogSwitch = 'LogSwitch' in params ? params.LogSwitch : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
 * CreateMatch request structure.
 * @class
 */
class CreateMatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Match name. It can contain up to 128 bytes, supporting [a-zA-Z0-9-\.]*.
         * @type {string || null}
         */
        this.MatchName = null;

        /**
         * RuleCode
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * Timeout period in seconds. Value range: 1 600
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Whether to request server resources for the matchmaking results. 0: no, 1: request GSE resources
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * Matchmaking description. Up to 1024 bytes are allowed.
         * @type {string || null}
         */
        this.MatchDesc = null;

        /**
         * Only HTTP and HTTPS protocols are supported.
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * Region of the game server queue
         * @type {string || null}
         */
        this.ServerRegion = null;

        /**
         * Game server queue
         * @type {string || null}
         */
        this.ServerQueue = null;

        /**
         * Custom push data
         * @type {string || null}
         */
        this.CustomPushData = null;

        /**
         * Game server session data
         * @type {string || null}
         */
        this.ServerSessionData = null;

        /**
         * Game attribute. It is an array of key-value structure.
         * @type {Array.<StringKV> || null}
         */
        this.GameProperties = null;

        /**
         * Enable or disable the log. 0: disable, 1: enable
         * @type {number || null}
         */
        this.LogSwitch = null;

        /**
         * Tag. It is an array of key-value structure.
         * @type {Array.<StringKV> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchName = 'MatchName' in params ? params.MatchName : null;
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.MatchDesc = 'MatchDesc' in params ? params.MatchDesc : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.ServerRegion = 'ServerRegion' in params ? params.ServerRegion : null;
        this.ServerQueue = 'ServerQueue' in params ? params.ServerQueue : null;
        this.CustomPushData = 'CustomPushData' in params ? params.CustomPushData : null;
        this.ServerSessionData = 'ServerSessionData' in params ? params.ServerSessionData : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new StringKV();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.LogSwitch = 'LogSwitch' in params ? params.LogSwitch : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
 * ModifyMatch response structure.
 * @class
 */
class ModifyMatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Matchmaking information
         * @type {MatchInfo || null}
         */
        this.MatchInfo = null;

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

        if (params.MatchInfo) {
            let obj = new MatchInfo();
            obj.deserialize(params.MatchInfo)
            this.MatchInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Trend data
 * @class
 */
class ReportTrendData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total count
         * @type {Array.<string> || null}
         */
        this.TotalList = null;

        /**
         * Number of requests cancelled
         * @type {Array.<string> || null}
         */
        this.CancelList = null;

        /**
         * Number of successes
         * @type {Array.<string> || null}
         */
        this.SuccessList = null;

        /**
         * Number of failures
         * @type {Array.<string> || null}
         */
        this.FailList = null;

        /**
         * Number of request timeout
         * @type {Array.<string> || null}
         */
        this.TimeoutList = null;

        /**
         * Time array in seconds
         * @type {Array.<string> || null}
         */
        this.TimeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalList = 'TotalList' in params ? params.TotalList : null;
        this.CancelList = 'CancelList' in params ? params.CancelList : null;
        this.SuccessList = 'SuccessList' in params ? params.SuccessList : null;
        this.FailList = 'FailList' in params ? params.FailList : null;
        this.TimeoutList = 'TimeoutList' in params ? params.TimeoutList : null;
        this.TimeList = 'TimeList' in params ? params.TimeList : null;

    }
}

/**
 * CreateMatch response structure.
 * @class
 */
class CreateMatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Matchmaking information
         * @type {MatchInfo || null}
         */
        this.MatchInfo = null;

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

        if (params.MatchInfo) {
            let obj = new MatchInfo();
            obj.deserialize(params.MatchInfo)
            this.MatchInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Brief rule information
 * @class
 */
class RuleBriefInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name. It supports [a-zA-Z\d-\.]*.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * The associated match
         * @type {Array.<StringKV> || null}
         */
        this.MatchCodeList = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * RuleCode
         * @type {string || null}
         */
        this.RuleCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.MatchCodeList) {
            this.MatchCodeList = new Array();
            for (let z in params.MatchCodeList) {
                let obj = new StringKV();
                obj.deserialize(params.MatchCodeList[z]);
                this.MatchCodeList.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;

    }
}

/**
 * DescribeMatches request structure.
 * @class
 */
class DescribeMatchesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The current page number. If this parameter is left empty, all queried matches will be obtained.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Number of matchmaking lists per page. If this parameter is left empty, all queried matches will be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Query type (optional). Valid values: match (query by matchCode or matchName), rule (query by ruleCode or ruleName), and other types (not filtered)
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * Keyword. Enter a keyword about SearchType to query.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Tags. Enter a tag for querying.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DeleteRule request structure.
 * @class
 */
class DeleteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RuleCode
         * @type {string || null}
         */
        this.RuleCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;

    }
}

/**
 * Matchmaking information
 * @class
 */
class MatchInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchCode
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * Match name
         * @type {string || null}
         */
        this.MatchName = null;

        /**
         * Matchmaking description
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.MatchDesc = null;

        /**
         * RuleCode
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Timeout period
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Receiving notification address
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * Whether to request server resources for the match results. 0: no, 1: request GSE resources
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * Region of the server queue
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ServerRegion = null;

        /**
         * Server queue
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ServerQueue = null;

        /**
         * Custom push data
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.CustomPushData = null;

        /**
         * Game server session data
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ServerSessionData = null;

        /**
         * Game attributes
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<StringKV> || null}
         */
        this.GameProperties = null;

        /**
         * Enable or disable the log. 0: disable, 1: enable
         * @type {number || null}
         */
        this.LogSwitch = null;

        /**
         * Logset ID
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Logset name
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Log topic ID
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * Log topic name
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.LogTopicName = null;

        /**
         * Tag
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<StringKV> || null}
         */
        this.Tags = null;

        /**
         * Region
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * User AppId
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User root account UIN
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Create user account UIN
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.CreateUin = null;

        /**
         * Rule Name
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Log status. 0: normal, 1: the log set does not exist, 2: the log topic does not exist, 3: neither the log set nor the log topic exists.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.LogStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchName = 'MatchName' in params ? params.MatchName : null;
        this.MatchDesc = 'MatchDesc' in params ? params.MatchDesc : null;
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.ServerRegion = 'ServerRegion' in params ? params.ServerRegion : null;
        this.ServerQueue = 'ServerQueue' in params ? params.ServerQueue : null;
        this.CustomPushData = 'CustomPushData' in params ? params.CustomPushData : null;
        this.ServerSessionData = 'ServerSessionData' in params ? params.ServerSessionData : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new StringKV();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.LogSwitch = 'LogSwitch' in params ? params.LogSwitch : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;
        this.LogTopicName = 'LogTopicName' in params ? params.LogTopicName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.LogStatus = 'LogStatus' in params ? params.LogStatus : null;

    }
}

/**
 * DescribeRules request structure.
 * @class
 */
class DescribeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The current page number. The first page will be returned if this parameter is left empty.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * The number of rules per page. If this parameter is left empty, 30 rules are displayed per page by default. Maximum value: 30
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Query type (optional). Valid values: match (query by matchCode or matchName), rule (query by ruleCode or ruleName), and other types (not filtered)
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * Keyword. Enter a keyword about SearchType to query.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Tags. Enter a tag for querying.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
 * DescribeRule response structure.
 * @class
 */
class DescribeRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule information
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {RuleInfo || null}
         */
        this.RuleInfo = null;

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

        if (params.RuleInfo) {
            let obj = new RuleInfo();
            obj.deserialize(params.RuleInfo)
            this.RuleInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMatch request structure.
 * @class
 */
class DescribeMatchRequest extends  AbstractModel {
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
 * ModifyRule request structure.
 * @class
 */
class ModifyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RuleCode
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * Rule name. It can only contain numbers, letters, ".", and "-".
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule description. Up to 1024 bytes are allowed.
         * @type {string || null}
         */
        this.RuleDesc = null;

        /**
         * Tag. It is an array of key-value structure. Up to 50 tags can be associated.
         * @type {Array.<StringKV> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleDesc = 'RuleDesc' in params ? params.RuleDesc : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
 * DescribeData request structure.
 * @class
 */
class DescribeDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time in seconds
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * End time in seconds
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Time granularity. Valid values: 1: 1 day, 2: 1 hour, 3: 1 minute, 4: 10 minutes, 5: 30 minutes
         * @type {number || null}
         */
        this.TimeType = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TimeType = 'TimeType' in params ? params.TimeType : null;
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

    }
}

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
 * CreateRule request structure.
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name. It can contain up to 128 bytes, supporting [a-zA-Z0-9-\.]*.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Rule script. Up to 65535 bytes are allowed.
         * @type {string || null}
         */
        this.RuleScript = null;

        /**
         * Rule description. Up to 1024 bytes are allowed.
         * @type {string || null}
         */
        this.RuleDesc = null;

        /**
         * Tag. It is an array of key-value structure. Up to 50 tags can be associated.
         * @type {Array.<StringKV> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleScript = 'RuleScript' in params ? params.RuleScript : null;
        this.RuleDesc = 'RuleDesc' in params ? params.RuleDesc : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Matchmaking statistics overview
 * @class
 */
class ReportOverviewData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total count
         * @type {string || null}
         */
        this.TotalTimes = null;

        /**
         * Success rate
         * @type {number || null}
         */
        this.SuccessPercent = null;

        /**
         * Timeout rate
         * @type {number || null}
         */
        this.TimeoutPercent = null;

        /**
         * Failure rate
         * @type {number || null}
         */
        this.FailPercent = null;

        /**
         * Average matching time
         * @type {number || null}
         */
        this.AverageSec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTimes = 'TotalTimes' in params ? params.TotalTimes : null;
        this.SuccessPercent = 'SuccessPercent' in params ? params.SuccessPercent : null;
        this.TimeoutPercent = 'TimeoutPercent' in params ? params.TimeoutPercent : null;
        this.FailPercent = 'FailPercent' in params ? params.FailPercent : null;
        this.AverageSec = 'AverageSec' in params ? params.AverageSec : null;

    }
}

/**
 * DescribeRule request structure.
 * @class
 */
class DescribeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RuleCode
         * @type {string || null}
         */
        this.RuleCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;

    }
}

/**
 * DescribeMatch response structure.
 * @class
 */
class DescribeMatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Matchmaking information
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {MatchInfo || null}
         */
        this.MatchInfo = null;

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

        if (params.MatchInfo) {
            let obj = new MatchInfo();
            obj.deserialize(params.MatchInfo)
            this.MatchInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * MatchCode
 * @class
 */
class MatchCodeAttr extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchCode
Note: this field may return `null`, indicating that no valid value is obtained.
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
 * DeleteMatch response structure.
 * @class
 */
class DeleteMatchResponse extends  AbstractModel {
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
 * Key-value structure. Both key and value are string types.
 * @class
 */
class StringKV extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value
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
 * StartMatchingBackfill request structure.
 * @class
 */
class StartMatchingBackfillRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchCode
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * Player information
         * @type {Array.<Player> || null}
         */
        this.Players = null;

        /**
         * Game server session ID. It should contain 1 to 256 ASCII characters.
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * MatchTicket ID, which can contain 1 to 128 characters. This parameter is left empty by default, and in this case, MatchTicket ID will be automatically generated by GPM.
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
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;

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
 * DescribeMatchCodes response structure.
 * @class
 */
class DescribeMatchCodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchCode
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<MatchCodeAttr> || null}
         */
        this.MatchCodes = null;

        /**
         * The total number of queried MatchCodes
Note: this field may return `null`, indicating that no valid value is obtained.
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

        if (params.MatchCodes) {
            this.MatchCodes = new Array();
            for (let z in params.MatchCodes) {
                let obj = new MatchCodeAttr();
                obj.deserialize(params.MatchCodes[z]);
                this.MatchCodes.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRule response structure.
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule information
         * @type {RuleInfo || null}
         */
        this.RuleInfo = null;

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

        if (params.RuleInfo) {
            let obj = new RuleInfo();
            obj.deserialize(params.RuleInfo)
            this.RuleInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRules response structure.
 * @class
 */
class DescribeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule information list
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<RuleBriefInfo> || null}
         */
        this.RuleInfoList = null;

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The current page number
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Number of rules per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Query type (optional). Valid values: matchName (query by match name), matchCode (query by matchCode), ruleName (query by rule name), and tag (query by tag key/value)
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * Keyword for querying (optional)
         * @type {string || null}
         */
        this.Keyword = null;

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

        if (params.RuleInfoList) {
            this.RuleInfoList = new Array();
            for (let z in params.RuleInfoList) {
                let obj = new RuleBriefInfo();
                obj.deserialize(params.RuleInfoList[z]);
                this.RuleInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Rule information
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name. It supports [a-zA-Z0-9-\.]*.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Rule description
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.RuleDesc = null;

        /**
         * Rule script
         * @type {string || null}
         */
        this.RuleScript = null;

        /**
         * Tag
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<StringKV> || null}
         */
        this.Tags = null;

        /**
         * The associated match
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<StringKV> || null}
         */
        this.MatchCodeList = null;

        /**
         * RuleCode
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * Region
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * User AppId
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * User UIN
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * User OwnerUin
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.CreateUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RuleDesc = 'RuleDesc' in params ? params.RuleDesc : null;
        this.RuleScript = 'RuleScript' in params ? params.RuleScript : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.MatchCodeList) {
            this.MatchCodeList = new Array();
            for (let z in params.MatchCodeList) {
                let obj = new StringKV();
                obj.deserialize(params.MatchCodeList[z]);
                this.MatchCodeList.push(obj);
            }
        }
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

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
 * StartMatchingBackfill response structure.
 * @class
 */
class StartMatchingBackfillResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * MatchTicket
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {MatchTicket || null}
         */
        this.MatchTicket = null;

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

        if (params.MatchTicket) {
            let obj = new MatchTicket();
            obj.deserialize(params.MatchTicket)
            this.MatchTicket = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMatches response structure.
 * @class
 */
class DescribeMatchesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Matchmaking information list
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<MatchInfo> || null}
         */
        this.MatchInfoList = null;

        /**
         * Total number of results
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The current page number. The first page will be returned by default if this parameter is left empty.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * The number of matches per page. If this parameter is left empty, 30 matches are displayed per page by default. Maximum value: 30
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Query type (optional). Valid values: matchName (query by match name), matchCode (query by matchCode), ruleName (query by rule name), and tag (query by tag key/value)
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * Keyword for querying (optional)
         * @type {string || null}
         */
        this.Keyword = null;

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

        if (params.MatchInfoList) {
            this.MatchInfoList = new Array();
            for (let z in params.MatchInfoList) {
                let obj = new MatchInfo();
                obj.deserialize(params.MatchInfoList[z]);
                this.MatchInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
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
 * Tag key-value pair
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DeleteMatch request structure.
 * @class
 */
class DeleteMatchRequest extends  AbstractModel {
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

/**
 * ModifyRule response structure.
 * @class
 */
class ModifyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule information
         * @type {RuleInfo || null}
         */
        this.RuleInfo = null;

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

        if (params.RuleInfo) {
            let obj = new RuleInfo();
            obj.deserialize(params.RuleInfo)
            this.RuleInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeDataResponse: DescribeDataResponse,
    DescribeMatchCodesRequest: DescribeMatchCodesRequest,
    DeleteRuleResponse: DeleteRuleResponse,
    ModifyMatchRequest: ModifyMatchRequest,
    StartMatchingResponse: StartMatchingResponse,
    CreateMatchRequest: CreateMatchRequest,
    DescribeMatchingProgressRequest: DescribeMatchingProgressRequest,
    ModifyMatchResponse: ModifyMatchResponse,
    ReportTrendData: ReportTrendData,
    CreateMatchResponse: CreateMatchResponse,
    RuleBriefInfo: RuleBriefInfo,
    DescribeMatchesRequest: DescribeMatchesRequest,
    DeleteRuleRequest: DeleteRuleRequest,
    MatchInfo: MatchInfo,
    DescribeRulesRequest: DescribeRulesRequest,
    DescribeTokenResponse: DescribeTokenResponse,
    DescribeRuleResponse: DescribeRuleResponse,
    DescribeMatchRequest: DescribeMatchRequest,
    ModifyRuleRequest: ModifyRuleRequest,
    DescribeTokenRequest: DescribeTokenRequest,
    DescribeDataRequest: DescribeDataRequest,
    RegionLatency: RegionLatency,
    CreateRuleRequest: CreateRuleRequest,
    ReportOverviewData: ReportOverviewData,
    DescribeRuleRequest: DescribeRuleRequest,
    DescribeMatchResponse: DescribeMatchResponse,
    ModifyTokenResponse: ModifyTokenResponse,
    MatchCodeAttr: MatchCodeAttr,
    MatchAttribute: MatchAttribute,
    DeleteMatchResponse: DeleteMatchResponse,
    CancelMatchingRequest: CancelMatchingRequest,
    AttributeMap: AttributeMap,
    StringKV: StringKV,
    StartMatchingBackfillRequest: StartMatchingBackfillRequest,
    CancelMatchingResponse: CancelMatchingResponse,
    DescribeMatchCodesResponse: DescribeMatchCodesResponse,
    CreateRuleResponse: CreateRuleResponse,
    DescribeRulesResponse: DescribeRulesResponse,
    MTicket: MTicket,
    RuleInfo: RuleInfo,
    ModifyTokenRequest: ModifyTokenRequest,
    StartMatchingBackfillResponse: StartMatchingBackfillResponse,
    DescribeMatchesResponse: DescribeMatchesResponse,
    Player: Player,
    StartMatchingRequest: StartMatchingRequest,
    Tag: Tag,
    DeleteMatchRequest: DeleteMatchRequest,
    MatchTicket: MatchTicket,
    DescribeMatchingProgressResponse: DescribeMatchingProgressResponse,
    ModifyRuleResponse: ModifyRuleResponse,

}
