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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribePolicyConditionListConfigManual = models.DescribePolicyConditionListConfigManual;
const UnBindingPolicyObjectRequest = models.UnBindingPolicyObjectRequest;
const DescribePolicyConditionListRequest = models.DescribePolicyConditionListRequest;
const DeletePolicyGroupResponse = models.DeletePolicyGroupResponse;
const DescribeAccidentEventListAlarms = models.DescribeAccidentEventListAlarms;
const CreatePolicyGroupEventCondition = models.CreatePolicyGroupEventCondition;
const DescribeProductEventListRequest = models.DescribeProductEventListRequest;
const UnBindingAllPolicyObjectRequest = models.UnBindingAllPolicyObjectRequest;
const Instance = models.Instance;
const DescribeProductEventListEvents = models.DescribeProductEventListEvents;
const BindingPolicyObjectDimension = models.BindingPolicyObjectDimension;
const DescribePolicyConditionListMetric = models.DescribePolicyConditionListMetric;
const CreatePolicyGroupRequest = models.CreatePolicyGroupRequest;
const CreatePolicyGroupCondition = models.CreatePolicyGroupCondition;
const DescribePolicyGroupInfoReceiverInfo = models.DescribePolicyGroupInfoReceiverInfo;
const BindingPolicyObjectRequest = models.BindingPolicyObjectRequest;
const DescribeProductEventListEventsGroupInfo = models.DescribeProductEventListEventsGroupInfo;
const ModifyPolicyGroupRequest = models.ModifyPolicyGroupRequest;
const DescribePolicyConditionListConfigManualPeriod = models.DescribePolicyConditionListConfigManualPeriod;
const DescribePolicyConditionListEventMetric = models.DescribePolicyConditionListEventMetric;
const DescribePolicyConditionListCondition = models.DescribePolicyConditionListCondition;
const DescribeBasicAlarmListRequest = models.DescribeBasicAlarmListRequest;
const DescribePolicyGroupListResponse = models.DescribePolicyGroupListResponse;
const DescribePolicyGroupInfoRequest = models.DescribePolicyGroupInfoRequest;
const DimensionsDesc = models.DimensionsDesc;
const DescribePolicyGroupListGroup = models.DescribePolicyGroupListGroup;
const DescribeBasicAlarmListAlarms = models.DescribeBasicAlarmListAlarms;
const GetMonitorDataRequest = models.GetMonitorDataRequest;
const PeriodsSt = models.PeriodsSt;
const DescribeAccidentEventListRequest = models.DescribeAccidentEventListRequest;
const DescribeProductEventListOverView = models.DescribeProductEventListOverView;
const MetricObjectMeaning = models.MetricObjectMeaning;
const MetricDatum = models.MetricDatum;
const DeletePolicyGroupRequest = models.DeletePolicyGroupRequest;
const DescribePolicyGroupInfoCallback = models.DescribePolicyGroupInfoCallback;
const DescribeBindingPolicyObjectListInstanceGroup = models.DescribeBindingPolicyObjectListInstanceGroup;
const DescribePolicyConditionListResponse = models.DescribePolicyConditionListResponse;
const DescribePolicyConditionListConfigManualCalcType = models.DescribePolicyConditionListConfigManualCalcType;
const ModifyPolicyGroupResponse = models.ModifyPolicyGroupResponse;
const PutMonitorDataResponse = models.PutMonitorDataResponse;
const ReceiverInfo = models.ReceiverInfo;
const ModifyAlarmReceiversRequest = models.ModifyAlarmReceiversRequest;
const DescribeProductEventListDimensions = models.DescribeProductEventListDimensions;
const DescribePolicyGroupInfoResponse = models.DescribePolicyGroupInfoResponse;
const DescribeBasicAlarmListResponse = models.DescribeBasicAlarmListResponse;
const DescribeBindingPolicyObjectListDimension = models.DescribeBindingPolicyObjectListDimension;
const DescribePolicyGroupInfoCondition = models.DescribePolicyGroupInfoCondition;
const UnBindingPolicyObjectResponse = models.UnBindingPolicyObjectResponse;
const GetMonitorDataResponse = models.GetMonitorDataResponse;
const MetricSet = models.MetricSet;
const DescribeBindingPolicyObjectListResponse = models.DescribeBindingPolicyObjectListResponse;
const DescribePolicyGroupInfoConditionTpl = models.DescribePolicyGroupInfoConditionTpl;
const DescribeBindingPolicyObjectListRequest = models.DescribeBindingPolicyObjectListRequest;
const CreatePolicyGroupResponse = models.CreatePolicyGroupResponse;
const PutMonitorDataRequest = models.PutMonitorDataRequest;
const InstanceGroup = models.InstanceGroup;
const DescribePolicyGroupInfoEventCondition = models.DescribePolicyGroupInfoEventCondition;
const DescribeBaseMetricsResponse = models.DescribeBaseMetricsResponse;
const SendCustomAlarmMsgResponse = models.SendCustomAlarmMsgResponse;
const DescribePolicyConditionListConfigManualPeriodNum = models.DescribePolicyConditionListConfigManualPeriodNum;
const DescribeBindingPolicyObjectListInstance = models.DescribeBindingPolicyObjectListInstance;
const ModifyPolicyGroupCondition = models.ModifyPolicyGroupCondition;
const ModifyPolicyGroupEventCondition = models.ModifyPolicyGroupEventCondition;
const DescribePolicyConditionListConfigManualContinueTime = models.DescribePolicyConditionListConfigManualContinueTime;
const DescribePolicyGroupListRequest = models.DescribePolicyGroupListRequest;
const DescribeAccidentEventListResponse = models.DescribeAccidentEventListResponse;
const DescribeProductEventListResponse = models.DescribeProductEventListResponse;
const DescribeBaseMetricsRequest = models.DescribeBaseMetricsRequest;
const Dimension = models.Dimension;
const DataPoint = models.DataPoint;
const UnBindingAllPolicyObjectResponse = models.UnBindingAllPolicyObjectResponse;
const DescribePolicyConditionListConfigManualStatType = models.DescribePolicyConditionListConfigManualStatType;
const SendCustomAlarmMsgRequest = models.SendCustomAlarmMsgRequest;
const DescribeProductEventListEventsDimensions = models.DescribeProductEventListEventsDimensions;
const DescribePolicyConditionListConfigManualCalcValue = models.DescribePolicyConditionListConfigManualCalcValue;
const ModifyAlarmReceiversResponse = models.ModifyAlarmReceiversResponse;
const DescribePolicyGroupListGroupInstanceGroup = models.DescribePolicyGroupListGroupInstanceGroup;
const BindingPolicyObjectResponse = models.BindingPolicyObjectResponse;


/**
 * monitor client
 * @class
 */
class MonitorClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("monitor.tencentcloudapi.com", "2018-07-24", credential, region, profile);
    }
    
    /**
     * This API is used to get the list of product events by page.
     * @param {DescribeProductEventListRequest} req
     * @param {function(string, DescribeProductEventListResponse):void} cb
     * @public
     */
    DescribeProductEventList(req, cb) {
        let resp = new DescribeProductEventListResponse();
        this.request("DescribeProductEventList", req, resp, cb);
    }

    /**
     * This API is used to get the platform event list.
     * @param {DescribeAccidentEventListRequest} req
     * @param {function(string, DescribeAccidentEventListResponse):void} cb
     * @public
     */
    DescribeAccidentEventList(req, cb) {
        let resp = new DescribeAccidentEventListResponse();
        this.request("DescribeAccidentEventList", req, resp, cb);
    }

    /**
     * This API is used to delete an object that is bound to a policy.
     * @param {UnBindingPolicyObjectRequest} req
     * @param {function(string, UnBindingPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingPolicyObject(req, cb) {
        let resp = new UnBindingPolicyObjectResponse();
        this.request("UnBindingPolicyObject", req, resp, cb);
    }

    /**
     * This API is used to bind an alarm policy to a specific object.
     * @param {BindingPolicyObjectRequest} req
     * @param {function(string, BindingPolicyObjectResponse):void} cb
     * @public
     */
    BindingPolicyObject(req, cb) {
        let resp = new BindingPolicyObjectResponse();
        this.request("BindingPolicyObject", req, resp, cb);
    }

    /**
     * This API is used to modify alarm recipients.
     * @param {ModifyAlarmReceiversRequest} req
     * @param {function(string, ModifyAlarmReceiversResponse):void} cb
     * @public
     */
    ModifyAlarmReceivers(req, cb) {
        let resp = new ModifyAlarmReceiversResponse();
        this.request("ModifyAlarmReceivers", req, resp, cb);
    }

    /**
     * This API is used to get the bound object list.
     * @param {DescribeBindingPolicyObjectListRequest} req
     * @param {function(string, DescribeBindingPolicyObjectListResponse):void} cb
     * @public
     */
    DescribeBindingPolicyObjectList(req, cb) {
        let resp = new DescribeBindingPolicyObjectListResponse();
        this.request("DescribeBindingPolicyObjectList", req, resp, cb);
    }

    /**
     * This API is used to send a custom alarm notification.
     * @param {SendCustomAlarmMsgRequest} req
     * @param {function(string, SendCustomAlarmMsgResponse):void} cb
     * @public
     */
    SendCustomAlarmMsg(req, cb) {
        let resp = new SendCustomAlarmMsgResponse();
        this.request("SendCustomAlarmMsg", req, resp, cb);
    }

    /**
     * This API is used to delete an alarm policy group.
     * @param {DeletePolicyGroupRequest} req
     * @param {function(string, DeletePolicyGroupResponse):void} cb
     * @public
     */
    DeletePolicyGroup(req, cb) {
        let resp = new DeletePolicyGroupResponse();
        this.request("DeletePolicyGroup", req, resp, cb);
    }

    /**
     * This API is used to get the details of basic metrics.
     * @param {DescribeBaseMetricsRequest} req
     * @param {function(string, DescribeBaseMetricsResponse):void} cb
     * @public
     */
    DescribeBaseMetrics(req, cb) {
        let resp = new DescribeBaseMetricsResponse();
        this.request("DescribeBaseMetrics", req, resp, cb);
    }

    /**
     * This API is used to get details of a basic policy group.
     * @param {DescribePolicyGroupInfoRequest} req
     * @param {function(string, DescribePolicyGroupInfoResponse):void} cb
     * @public
     */
    DescribePolicyGroupInfo(req, cb) {
        let resp = new DescribePolicyGroupInfoResponse();
        this.request("DescribePolicyGroupInfo", req, resp, cb);
    }

    /**
     * This API is used to get the list of basic policy alarm groups.
     * @param {DescribePolicyGroupListRequest} req
     * @param {function(string, DescribePolicyGroupListResponse):void} cb
     * @public
     */
    DescribePolicyGroupList(req, cb) {
        let resp = new DescribePolicyGroupListResponse();
        this.request("DescribePolicyGroupList", req, resp, cb);
    }

    /**
     * This API is used to get the basic alarm list.
     * @param {DescribeBasicAlarmListRequest} req
     * @param {function(string, DescribeBasicAlarmListResponse):void} cb
     * @public
     */
    DescribeBasicAlarmList(req, cb) {
        let resp = new DescribeBasicAlarmListResponse();
        this.request("DescribeBasicAlarmList", req, resp, cb);
    }

    /**
     * This API is used to get the monitoring data of a Tencent Cloud service by passing in its namespace, object dimension description, and monitoring metrics.
API call rate limit: 20 calls/second (1,200 calls/minute). A single request can obtain the data of up to 10 instances and up to 1,440 data points.
This API may fail due to the rate limit if you need to call a lot of metrics and objects. We recommended that you spread the call requests over time.
     * @param {GetMonitorDataRequest} req
     * @param {function(string, GetMonitorDataResponse):void} cb
     * @public
     */
    GetMonitorData(req, cb) {
        let resp = new GetMonitorDataResponse();
        this.request("GetMonitorData", req, resp, cb);
    }

    /**
     * This API is used to update policy group.
     * @param {ModifyPolicyGroupRequest} req
     * @param {function(string, ModifyPolicyGroupResponse):void} cb
     * @public
     */
    ModifyPolicyGroup(req, cb) {
        let resp = new ModifyPolicyGroupResponse();
        this.request("ModifyPolicyGroup", req, resp, cb);
    }

    /**
     * This API is used to add a policy group.
     * @param {CreatePolicyGroupRequest} req
     * @param {function(string, CreatePolicyGroupResponse):void} cb
     * @public
     */
    CreatePolicyGroup(req, cb) {
        let resp = new CreatePolicyGroupResponse();
        this.request("CreatePolicyGroup", req, resp, cb);
    }

    /**
     * This API is used to delete all bound objects.
     * @param {UnBindingAllPolicyObjectRequest} req
     * @param {function(string, UnBindingAllPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingAllPolicyObject(req, cb) {
        let resp = new UnBindingAllPolicyObjectResponse();
        this.request("UnBindingAllPolicyObject", req, resp, cb);
    }

    /**
     * The default API request rate limit is 50 requests/sec.
The default upper limit on metrics of a single tenant is 100.
A maximum of 30 metric/value pairs can be reported at a time. When an error is returned for a request, no metrics/values in the request will be saved.

The reporting timestamp is the timestamp when you want to save the data. We recommend that you construct a timestamp at integer minutes.
The time range of a timestamp is from 300 seconds before the current time to the current time.
The data of the same IP metric/value pair must be reported by minute in chronological order.
     * @param {PutMonitorDataRequest} req
     * @param {function(string, PutMonitorDataResponse):void} cb
     * @public
     */
    PutMonitorData(req, cb) {
        let resp = new PutMonitorDataResponse();
        this.request("PutMonitorData", req, resp, cb);
    }

    /**
     * This API is used to get basic alarm policy conditions.
     * @param {DescribePolicyConditionListRequest} req
     * @param {function(string, DescribePolicyConditionListResponse):void} cb
     * @public
     */
    DescribePolicyConditionList(req, cb) {
        let resp = new DescribePolicyConditionListResponse();
        this.request("DescribePolicyConditionList", req, resp, cb);
    }


}
module.exports = MonitorClient;
