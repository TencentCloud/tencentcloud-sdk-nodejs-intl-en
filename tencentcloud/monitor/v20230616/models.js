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
 * Pagination request parameters
 * @class
 */
class PageByNoParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of items per page.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * Page number, starting from 1.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PageNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;

    }
}

/**
 * DescribeAlarmNotifyHistories request structure.
 * @class
 */
class DescribeAlarmNotifyHistoriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Monitoring type
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * Start time, used as a Unix timestamp in seconds.
         * @type {number || null}
         */
        this.QueryBaseTime = null;

        /**
         * Period to query before QueryBaseTime, in seconds.
         * @type {number || null}
         */
        this.QueryBeforeSeconds = null;

        /**
         * Pagination parameter.
         * @type {PageByNoParams || null}
         */
        this.PageParams = null;

        /**
         * Fill in when the monitoring type is MT_QCE. Namespace of the affiliation.
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Fill in when the monitoring type is MT_QCE. Alarm policy type
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * Query the notification history of a policy
         * @type {string || null}
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
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.QueryBaseTime = 'QueryBaseTime' in params ? params.QueryBaseTime : null;
        this.QueryBeforeSeconds = 'QueryBeforeSeconds' in params ? params.QueryBeforeSeconds : null;

        if (params.PageParams) {
            let obj = new PageByNoParams();
            obj.deserialize(params.PageParams)
            this.PageParams = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * Pagination result parameters
 * @class
 */
class PageByNoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total data.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Total number of pages.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * Current page number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CurrentPageNo = null;

        /**
         * [Deprecated] Whether it has reached the end.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.IsEnd = null;

        /**
         * Whether it has traversed to the end.
         * @type {boolean || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.CurrentPageNo = 'CurrentPageNo' in params ? params.CurrentPageNo : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * DescribeAlarmNotifyHistories response structure.
 * @class
 */
class DescribeAlarmNotifyHistoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm history
         * @type {Array.<AlarmNotifyHistory> || null}
         */
        this.AlarmNotifyHistoryList = null;

        /**
         * Pagination condition
         * @type {PageByNoResult || null}
         */
        this.PageResult = null;

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

        if (params.AlarmNotifyHistoryList) {
            this.AlarmNotifyHistoryList = new Array();
            for (let z in params.AlarmNotifyHistoryList) {
                let obj = new AlarmNotifyHistory();
                obj.deserialize(params.AlarmNotifyHistoryList[z]);
                this.AlarmNotifyHistoryList.push(obj);
            }
        }

        if (params.PageResult) {
            let obj = new PageByNoResult();
            obj.deserialize(params.PageResult)
            this.PageResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Alarming Label
 * @class
 */
class AlarmLable extends  AbstractModel {
    constructor(){
        super();

        /**
         * label name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * label value
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Receiver details
 * @class
 */
class ChannelsReceivers extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification channel name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Recipient.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * Sending result. Valid values: 0, (invalid), 1 (successful), 2 (failed), and 3 (no sending required).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SendStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.SendStatus = 'SendStatus' in params ? params.SendStatus : null;

    }
}

/**
 * Notification template information associated with notification history
 * @class
 */
class NotifyRelatedNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Notification template ID
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * Name of the notification template
         * @type {string || null}
         */
        this.NoticeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.NoticeName = 'NoticeName' in params ? params.NoticeName : null;

    }
}

/**
 * Notification history for each alert
 * @class
 */
class AlarmNotifyHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique notification ID.
         * @type {string || null}
         */
        this.NotifyId = null;

        /**
         * Alert policy ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * Alarm cycle iD
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Notification time in Unix timestamp (in seconds).
         * @type {number || null}
         */
        this.NotifyTime = null;

        /**
         * Trigger time in Unix timestamp (in seconds).
         * @type {number || null}
         */
        this.TriggerTime = null;

        /**
         * Alarm severity level. Valid values: None, Note, Warn, and Serious.
         * @type {string || null}
         */
        this.TriggerLevel = null;

        /**
         * alert content
         * @type {string || null}
         */
        this.AlarmContent = null;

        /**
         * Alarm object
         * @type {string || null}
         */
        this.AlarmObject = null;

        /**
         * Alarm notification channel collection involved this time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ChannelSet = null;

        /**
         * Recipient information of the channel
         * @type {Array.<ChannelsReceivers> || null}
         */
        this.ChannelsReceivers = null;

        /**
         * Alarm policy name
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * Prometheus Instance ID, valid only when MT_PROME
         * @type {string || null}
         */
        this.PromeInstanceID = null;

        /**
         * Region of the Prometheus Instance. Valid at that time only for MT_PROME.
         * @type {string || null}
         */
        this.PromeInstanceRegion = null;

        /**
         * Notification template related configuration information
         * @type {Array.<NotifyRelatedNotice> || null}
         */
        this.Notices = null;

        /**
         * Alarm trigger status. Valid values: Trigger and Recovery.
         * @type {string || null}
         */
        this.TriggerStatus = null;

        /**
         * Console page address related to the present Prometheus notification history, valid only when MR_PROME
         * @type {string || null}
         */
        this.PromeConsoleURL = null;

        /**
         * Alarm label
         * @type {Array.<AlarmLable> || null}
         */
        this.Labels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotifyId = 'NotifyId' in params ? params.NotifyId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.NotifyTime = 'NotifyTime' in params ? params.NotifyTime : null;
        this.TriggerTime = 'TriggerTime' in params ? params.TriggerTime : null;
        this.TriggerLevel = 'TriggerLevel' in params ? params.TriggerLevel : null;
        this.AlarmContent = 'AlarmContent' in params ? params.AlarmContent : null;
        this.AlarmObject = 'AlarmObject' in params ? params.AlarmObject : null;
        this.ChannelSet = 'ChannelSet' in params ? params.ChannelSet : null;

        if (params.ChannelsReceivers) {
            this.ChannelsReceivers = new Array();
            for (let z in params.ChannelsReceivers) {
                let obj = new ChannelsReceivers();
                obj.deserialize(params.ChannelsReceivers[z]);
                this.ChannelsReceivers.push(obj);
            }
        }
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PromeInstanceID = 'PromeInstanceID' in params ? params.PromeInstanceID : null;
        this.PromeInstanceRegion = 'PromeInstanceRegion' in params ? params.PromeInstanceRegion : null;

        if (params.Notices) {
            this.Notices = new Array();
            for (let z in params.Notices) {
                let obj = new NotifyRelatedNotice();
                obj.deserialize(params.Notices[z]);
                this.Notices.push(obj);
            }
        }
        this.TriggerStatus = 'TriggerStatus' in params ? params.TriggerStatus : null;
        this.PromeConsoleURL = 'PromeConsoleURL' in params ? params.PromeConsoleURL : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new AlarmLable();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

    }
}

module.exports = {
    PageByNoParams: PageByNoParams,
    DescribeAlarmNotifyHistoriesRequest: DescribeAlarmNotifyHistoriesRequest,
    PageByNoResult: PageByNoResult,
    DescribeAlarmNotifyHistoriesResponse: DescribeAlarmNotifyHistoriesResponse,
    AlarmLable: AlarmLable,
    ChannelsReceivers: ChannelsReceivers,
    NotifyRelatedNotice: NotifyRelatedNotice,
    AlarmNotifyHistory: AlarmNotifyHistory,

}
