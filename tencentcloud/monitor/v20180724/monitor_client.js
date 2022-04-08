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
const TagInstance = models.TagInstance;
const DescribePolicyConditionListConfigManual = models.DescribePolicyConditionListConfigManual;
const ModifyAlarmPolicyNoticeResponse = models.ModifyAlarmPolicyNoticeResponse;
const ModifyAlarmPolicyInfoRequest = models.ModifyAlarmPolicyInfoRequest;
const CreatePolicyGroupEventCondition = models.CreatePolicyGroupEventCondition;
const DescribeProductEventListRequest = models.DescribeProductEventListRequest;
const AlarmPolicyTriggerTask = models.AlarmPolicyTriggerTask;
const DescribePolicyConditionListMetric = models.DescribePolicyConditionListMetric;
const DescribePolicyGroupListResponse = models.DescribePolicyGroupListResponse;
const BindingPolicyObjectRequest = models.BindingPolicyObjectRequest;
const DescribeAlarmNoticeCallbacksRequest = models.DescribeAlarmNoticeCallbacksRequest;
const PutMonitorDataResponse = models.PutMonitorDataResponse;
const DescribePolicyGroupInfoRequest = models.DescribePolicyGroupInfoRequest;
const DescribePolicyGroupInfoCallback = models.DescribePolicyGroupInfoCallback;
const AlarmHistoryMetric = models.AlarmHistoryMetric;
const CreateAlarmPolicyRequest = models.CreateAlarmPolicyRequest;
const DescribeAlarmEventsResponse = models.DescribeAlarmEventsResponse;
const DescribeProductEventListDimensions = models.DescribeProductEventListDimensions;
const DescribePolicyGroupInfoResponse = models.DescribePolicyGroupInfoResponse;
const ModifyAlarmPolicyNoticeRequest = models.ModifyAlarmPolicyNoticeRequest;
const DeleteAlarmPolicyRequest = models.DeleteAlarmPolicyRequest;
const EventCondition = models.EventCondition;
const DescribeConditionsTemplateListRequest = models.DescribeConditionsTemplateListRequest;
const CreatePolicyGroupResponse = models.CreatePolicyGroupResponse;
const ModifyAlarmPolicyTasksResponse = models.ModifyAlarmPolicyTasksResponse;
const DescribeBaseMetricsResponse = models.DescribeBaseMetricsResponse;
const MetricDataPoint = models.MetricDataPoint;
const DescribePolicyConditionListConfigManualContinueTime = models.DescribePolicyConditionListConfigManualContinueTime;
const CommonNamespace = models.CommonNamespace;
const GetMonitorDataRequest = models.GetMonitorDataRequest;
const DataPoint = models.DataPoint;
const DescribeAlarmPoliciesResponse = models.DescribeAlarmPoliciesResponse;
const ModifyAlarmPolicyStatusRequest = models.ModifyAlarmPolicyStatusRequest;
const ConditionsTemp = models.ConditionsTemp;
const SendCustomAlarmMsgRequest = models.SendCustomAlarmMsgRequest;
const DescribePolicyConditionListConfigManualPeriod = models.DescribePolicyConditionListConfigManualPeriod;
const UnBindingPolicyObjectRequest = models.UnBindingPolicyObjectRequest;
const InstanceGroup = models.InstanceGroup;
const DescribePolicyConditionListRequest = models.DescribePolicyConditionListRequest;
const DeletePolicyGroupResponse = models.DeletePolicyGroupResponse;
const DescribeAccidentEventListResponse = models.DescribeAccidentEventListResponse;
const DescribeMonitorTypesRequest = models.DescribeMonitorTypesRequest;
const DescribeAlarmNoticesResponse = models.DescribeAlarmNoticesResponse;
const ModifyAlarmPolicyTasksRequest = models.ModifyAlarmPolicyTasksRequest;
const DimensionsDesc = models.DimensionsDesc;
const SetDefaultAlarmPolicyRequest = models.SetDefaultAlarmPolicyRequest;
const ModifyAlarmNoticeRequest = models.ModifyAlarmNoticeRequest;
const DescribePolicyConditionListCondition = models.DescribePolicyConditionListCondition;
const PeriodsSt = models.PeriodsSt;
const AlarmPolicy = models.AlarmPolicy;
const CreateAlarmPolicyResponse = models.CreateAlarmPolicyResponse;
const ModifyAlarmReceiversResponse = models.ModifyAlarmReceiversResponse;
const DescribePolicyConditionListResponse = models.DescribePolicyConditionListResponse;
const DescribeAllNamespacesResponse = models.DescribeAllNamespacesResponse;
const DeleteAlarmNoticesResponse = models.DeleteAlarmNoticesResponse;
const DescribeBasicAlarmListResponse = models.DescribeBasicAlarmListResponse;
const ModifyAlarmReceiversRequest = models.ModifyAlarmReceiversRequest;
const AlarmPolicyRule = models.AlarmPolicyRule;
const DescribeProductEventListEventsDimensions = models.DescribeProductEventListEventsDimensions;
const ModifyAlarmPolicyConditionResponse = models.ModifyAlarmPolicyConditionResponse;
const Dimension = models.Dimension;
const TemplateGroup = models.TemplateGroup;
const DescribeBindingPolicyObjectListInstance = models.DescribeBindingPolicyObjectListInstance;
const Point = models.Point;
const ModifyPolicyGroupEventCondition = models.ModifyPolicyGroupEventCondition;
const Metric = models.Metric;
const ModifyPolicyGroupRequest = models.ModifyPolicyGroupRequest;
const DescribeAlarmHistoriesResponse = models.DescribeAlarmHistoriesResponse;
const DescribeAlarmMetricsRequest = models.DescribeAlarmMetricsRequest;
const DescribeBaseMetricsRequest = models.DescribeBaseMetricsRequest;
const UserNotice = models.UserNotice;
const AlarmPolicyFilter = models.AlarmPolicyFilter;
const DescribeAlarmNoticeCallbacksResponse = models.DescribeAlarmNoticeCallbacksResponse;
const ModifyAlarmPolicyConditionRequest = models.ModifyAlarmPolicyConditionRequest;
const ModifyAlarmPolicyStatusResponse = models.ModifyAlarmPolicyStatusResponse;
const Instance = models.Instance;
const BindingPolicyObjectDimension = models.BindingPolicyObjectDimension;
const DescribeAlarmPolicyResponse = models.DescribeAlarmPolicyResponse;
const DescribeMonitorTypesResponse = models.DescribeMonitorTypesResponse;
const MetricSet = models.MetricSet;
const DescribeBasicAlarmListAlarms = models.DescribeBasicAlarmListAlarms;
const CreateAlarmNoticeResponse = models.CreateAlarmNoticeResponse;
const DescribeAlarmHistoriesRequest = models.DescribeAlarmHistoriesRequest;
const MetricObjectMeaning = models.MetricObjectMeaning;
const AlarmEvent = models.AlarmEvent;
const ModifyPolicyGroupResponse = models.ModifyPolicyGroupResponse;
const DescribePolicyConditionListConfigManualCalcType = models.DescribePolicyConditionListConfigManualCalcType;
const Condition = models.Condition;
const DeletePolicyGroupRequest = models.DeletePolicyGroupRequest;
const DescribePolicyGroupInfoCondition = models.DescribePolicyGroupInfoCondition;
const DescribeBindingPolicyObjectListResponse = models.DescribeBindingPolicyObjectListResponse;
const DescribePolicyGroupInfoConditionTpl = models.DescribePolicyGroupInfoConditionTpl;
const DescribeBindingPolicyObjectListRequest = models.DescribeBindingPolicyObjectListRequest;
const UnBindingPolicyObjectResponse = models.UnBindingPolicyObjectResponse;
const PutMonitorDataRequest = models.PutMonitorDataRequest;
const DescribeProductEventListEvents = models.DescribeProductEventListEvents;
const DeleteAlarmNoticesRequest = models.DeleteAlarmNoticesRequest;
const DescribePolicyConditionListConfigManualPeriodNum = models.DescribePolicyConditionListConfigManualPeriodNum;
const DescribeAllNamespacesRequest = models.DescribeAllNamespacesRequest;
const PolicyGroup = models.PolicyGroup;
const DescribeAlarmMetricsResponse = models.DescribeAlarmMetricsResponse;
const DescribePolicyGroupListGroupInstanceGroup = models.DescribePolicyGroupListGroupInstanceGroup;
const DescribeAlarmPoliciesRequest = models.DescribeAlarmPoliciesRequest;
const DescribeConditionsTemplateListResponse = models.DescribeConditionsTemplateListResponse;
const DescribePolicyConditionListConfigManualStatType = models.DescribePolicyConditionListConfigManualStatType;
const ModifyAlarmPolicyInfoResponse = models.ModifyAlarmPolicyInfoResponse;
const AlarmNotice = models.AlarmNotice;
const MetricConfig = models.MetricConfig;
const PolicyGroupReceiverInfo = models.PolicyGroupReceiverInfo;
const DescribeAlarmEventsRequest = models.DescribeAlarmEventsRequest;
const MidQueryCondition = models.MidQueryCondition;
const ModifyAlarmNoticeResponse = models.ModifyAlarmNoticeResponse;
const DescribeAccidentEventListAlarms = models.DescribeAccidentEventListAlarms;
const DescribeProductEventListResponse = models.DescribeProductEventListResponse;
const AlarmHistory = models.AlarmHistory;
const MonitorTypeNamespace = models.MonitorTypeNamespace;
const MetricData = models.MetricData;
const URLNotice = models.URLNotice;
const DescribeAlarmPolicyRequest = models.DescribeAlarmPolicyRequest;
const CreatePolicyGroupRequest = models.CreatePolicyGroupRequest;
const CreatePolicyGroupCondition = models.CreatePolicyGroupCondition;
const DescribePolicyGroupInfoReceiverInfo = models.DescribePolicyGroupInfoReceiverInfo;
const DescribeStatisticDataResponse = models.DescribeStatisticDataResponse;
const DescribePolicyConditionListEventMetric = models.DescribePolicyConditionListEventMetric;
const DescribePolicyGroupListRequest = models.DescribePolicyGroupListRequest;
const DescribeBasicAlarmListRequest = models.DescribeBasicAlarmListRequest;
const UnBindingAllPolicyObjectResponse = models.UnBindingAllPolicyObjectResponse;
const DescribeAlarmNoticesRequest = models.DescribeAlarmNoticesRequest;
const DescribePolicyGroupListGroup = models.DescribePolicyGroupListGroup;
const DescribeAccidentEventListRequest = models.DescribeAccidentEventListRequest;
const MetricDatum = models.MetricDatum;
const DescribeAlarmNoticeResponse = models.DescribeAlarmNoticeResponse;
const DescribeBindingPolicyObjectListInstanceGroup = models.DescribeBindingPolicyObjectListInstanceGroup;
const DescribeProductEventListEventsGroupInfo = models.DescribeProductEventListEventsGroupInfo;
const DescribeStatisticDataRequest = models.DescribeStatisticDataRequest;
const DescribeAlarmNoticeRequest = models.DescribeAlarmNoticeRequest;
const DescribeBindingPolicyObjectListDimension = models.DescribeBindingPolicyObjectListDimension;
const CreateAlarmNoticeRequest = models.CreateAlarmNoticeRequest;
const InstanceGroups = models.InstanceGroups;
const GetMonitorDataResponse = models.GetMonitorDataResponse;
const ReceiverInfo = models.ReceiverInfo;
const UnBindingAllPolicyObjectRequest = models.UnBindingAllPolicyObjectRequest;
const CLSNotice = models.CLSNotice;
const DescribePolicyGroupInfoEventCondition = models.DescribePolicyGroupInfoEventCondition;
const SendCustomAlarmMsgResponse = models.SendCustomAlarmMsgResponse;
const AlarmPolicyCondition = models.AlarmPolicyCondition;
const ModifyPolicyGroupCondition = models.ModifyPolicyGroupCondition;
const DeleteAlarmPolicyResponse = models.DeleteAlarmPolicyResponse;
const AlarmPolicyEventCondition = models.AlarmPolicyEventCondition;
const DescribeProductEventListOverView = models.DescribeProductEventListOverView;
const DescribePolicyConditionListConfigManualCalcValue = models.DescribePolicyConditionListConfigManualCalcValue;
const SetDefaultAlarmPolicyResponse = models.SetDefaultAlarmPolicyResponse;
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
     * This API is used to query the list of alarm policies.
     * @param {DescribeAlarmPoliciesRequest} req
     * @param {function(string, DescribeAlarmPoliciesResponse):void} cb
     * @public
     */
    DescribeAlarmPolicies(req, cb) {
        let resp = new DescribeAlarmPoliciesResponse();
        this.request("DescribeAlarmPolicies", req, resp, cb);
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
     * This API is used to get the trigger condition template.
     * @param {DescribeConditionsTemplateListRequest} req
     * @param {function(string, DescribeConditionsTemplateListResponse):void} cb
     * @public
     */
    DescribeConditionsTemplateList(req, cb) {
        let resp = new DescribeConditionsTemplateListResponse();
        this.request("DescribeConditionsTemplateList", req, resp, cb);
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
     * This API is used to modify the alarm notification template bound to an alarm policy.
     * @param {ModifyAlarmPolicyNoticeRequest} req
     * @param {function(string, ModifyAlarmPolicyNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyNotice(req, cb) {
        let resp = new ModifyAlarmPolicyNoticeResponse();
        this.request("ModifyAlarmPolicyNotice", req, resp, cb);
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
     * This API is used to delete an alarm policy.
     * @param {DeleteAlarmPolicyRequest} req
     * @param {function(string, DeleteAlarmPolicyResponse):void} cb
     * @public
     */
    DeleteAlarmPolicy(req, cb) {
        let resp = new DeleteAlarmPolicyResponse();
        this.request("DeleteAlarmPolicy", req, resp, cb);
    }

    /**
     * This API is used to get the monitoring data of Tencent Cloud services except TKE. To pull TKE’s monitoring data, please use the API [DescribeStatisticData](https://intl.cloud.tencent.com/document/product/248/51845?from_cn_redirect=1).
You can get the monitoring data of a Tencent Cloud service by passing in its namespace, object dimension description, and monitoring metrics.
API call rate limit: 20 calls/second (1,200 calls/minute). A single request can get the data of up to 10 instances for up to 1,440 data points.
If you need to call a large number of APIs to pull metrics or objects at a time, some APIs may fail to be called due to the rate limit. We suggest you evenly arrange API calls at a time granularity.
     * @param {GetMonitorDataRequest} req
     * @param {function(string, GetMonitorDataResponse):void} cb
     * @public
     */
    GetMonitorData(req, cb) {
        let resp = new GetMonitorDataResponse();
        this.request("GetMonitorData", req, resp, cb);
    }

    /**
     * This API is used to modify the task triggered by an alarm policy. The `TriggerTasks` field contains the list of triggered tasks. If an empty array is passed in for `TriggerTasks`, it indicates to unbind all the triggered tasks from this policy.
     * @param {ModifyAlarmPolicyTasksRequest} req
     * @param {function(string, ModifyAlarmPolicyTasksResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyTasks(req, cb) {
        let resp = new ModifyAlarmPolicyTasksResponse();
        this.request("ModifyAlarmPolicyTasks", req, resp, cb);
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

    /**
     * This API is used to modify the trigger condition of an alarm policy.
     * @param {ModifyAlarmPolicyConditionRequest} req
     * @param {function(string, ModifyAlarmPolicyConditionResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyCondition(req, cb) {
        let resp = new ModifyAlarmPolicyConditionResponse();
        this.request("ModifyAlarmPolicyCondition", req, resp, cb);
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
     * This API is used to create a notification template.
     * @param {CreateAlarmNoticeRequest} req
     * @param {function(string, CreateAlarmNoticeResponse):void} cb
     * @public
     */
    CreateAlarmNotice(req, cb) {
        let resp = new CreateAlarmNoticeResponse();
        this.request("CreateAlarmNotice", req, resp, cb);
    }

    /**
     * This API is used to create a Cloud Monitor alarm policy.
     * @param {CreateAlarmPolicyRequest} req
     * @param {function(string, CreateAlarmPolicyResponse):void} cb
     * @public
     */
    CreateAlarmPolicy(req, cb) {
        let resp = new CreateAlarmPolicyResponse();
        this.request("CreateAlarmPolicy", req, resp, cb);
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
     * This API is used to query all namespaces.
     * @param {DescribeAllNamespacesRequest} req
     * @param {function(string, DescribeAllNamespacesResponse):void} cb
     * @public
     */
    DescribeAllNamespaces(req, cb) {
        let resp = new DescribeAllNamespacesResponse();
        this.request("DescribeAllNamespaces", req, resp, cb);
    }

    /**
     * This API is used to query monitoring data by dimension conditions.
     * @param {DescribeStatisticDataRequest} req
     * @param {function(string, DescribeStatisticDataResponse):void} cb
     * @public
     */
    DescribeStatisticData(req, cb) {
        let resp = new DescribeStatisticDataResponse();
        this.request("DescribeStatisticData", req, resp, cb);
    }

    /**
     * This API is used to query the list of notification templates.
     * @param {DescribeAlarmNoticesRequest} req
     * @param {function(string, DescribeAlarmNoticesResponse):void} cb
     * @public
     */
    DescribeAlarmNotices(req, cb) {
        let resp = new DescribeAlarmNoticesResponse();
        this.request("DescribeAlarmNotices", req, resp, cb);
    }

    /**
     * This API is used to get all the callback URLs of an alarm notification template.
     * @param {DescribeAlarmNoticeCallbacksRequest} req
     * @param {function(string, DescribeAlarmNoticeCallbacksResponse):void} cb
     * @public
     */
    DescribeAlarmNoticeCallbacks(req, cb) {
        let resp = new DescribeAlarmNoticeCallbacksResponse();
        this.request("DescribeAlarmNoticeCallbacks", req, resp, cb);
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
     * This API is used to list all the monitor types supported by CM.
     * @param {DescribeMonitorTypesRequest} req
     * @param {function(string, DescribeMonitorTypesResponse):void} cb
     * @public
     */
    DescribeMonitorTypes(req, cb) {
        let resp = new DescribeMonitorTypesResponse();
        this.request("DescribeMonitorTypes", req, resp, cb);
    }

    /**
     * This API is used to set an alarm policy as the default policy in the current policy type under the current project.
Alarm policies in the same type under the project will be set as non-default.
     * @param {SetDefaultAlarmPolicyRequest} req
     * @param {function(string, SetDefaultAlarmPolicyResponse):void} cb
     * @public
     */
    SetDefaultAlarmPolicy(req, cb) {
        let resp = new SetDefaultAlarmPolicyResponse();
        this.request("SetDefaultAlarmPolicy", req, resp, cb);
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
     * This API is used to edit the basic information of a v2.0 alarm policy, including policy name and remarks.
     * @param {ModifyAlarmPolicyInfoRequest} req
     * @param {function(string, ModifyAlarmPolicyInfoResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyInfo(req, cb) {
        let resp = new ModifyAlarmPolicyInfoResponse();
        this.request("ModifyAlarmPolicyInfo", req, resp, cb);
    }

    /**
     * This API is used to query the alarm records.

Note: **If you query the alarm records as a sub-user, you can only query those of authorized projects** or those of products which are not categorized by projects. For information on how to grant a sub-account the project permission, see [Project & Tag](https://intl.cloud.tencent.com/document/product/598/32738?from_cn_redirect=1).
     * @param {DescribeAlarmHistoriesRequest} req
     * @param {function(string, DescribeAlarmHistoriesResponse):void} cb
     * @public
     */
    DescribeAlarmHistories(req, cb) {
        let resp = new DescribeAlarmHistoriesResponse();
        this.request("DescribeAlarmHistories", req, resp, cb);
    }

    /**
     * This API is used to query the list of alarm metrics.
     * @param {DescribeAlarmMetricsRequest} req
     * @param {function(string, DescribeAlarmMetricsResponse):void} cb
     * @public
     */
    DescribeAlarmMetrics(req, cb) {
        let resp = new DescribeAlarmMetricsResponse();
        this.request("DescribeAlarmMetrics", req, resp, cb);
    }

    /**
     * This API is used to enable/disable an alarm policy.
     * @param {ModifyAlarmPolicyStatusRequest} req
     * @param {function(string, ModifyAlarmPolicyStatusResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyStatus(req, cb) {
        let resp = new ModifyAlarmPolicyStatusResponse();
        this.request("ModifyAlarmPolicyStatus", req, resp, cb);
    }

    /**
     * This API is used to get the attributes of basic metrics.
     * @param {DescribeBaseMetricsRequest} req
     * @param {function(string, DescribeBaseMetricsResponse):void} cb
     * @public
     */
    DescribeBaseMetrics(req, cb) {
        let resp = new DescribeBaseMetricsResponse();
        this.request("DescribeBaseMetrics", req, resp, cb);
    }

    /**
     * This API is used to query the details of a single notification template.
     * @param {DescribeAlarmNoticeRequest} req
     * @param {function(string, DescribeAlarmNoticeResponse):void} cb
     * @public
     */
    DescribeAlarmNotice(req, cb) {
        let resp = new DescribeAlarmNoticeResponse();
        this.request("DescribeAlarmNotice", req, resp, cb);
    }

    /**
     * This API is used to query the list of alarm events.
     * @param {DescribeAlarmEventsRequest} req
     * @param {function(string, DescribeAlarmEventsResponse):void} cb
     * @public
     */
    DescribeAlarmEvents(req, cb) {
        let resp = new DescribeAlarmEventsResponse();
        this.request("DescribeAlarmEvents", req, resp, cb);
    }

    /**
     * This API is used to delete alarm notification templates.
     * @param {DeleteAlarmNoticesRequest} req
     * @param {function(string, DeleteAlarmNoticesResponse):void} cb
     * @public
     */
    DeleteAlarmNotices(req, cb) {
        let resp = new DeleteAlarmNoticesResponse();
        this.request("DeleteAlarmNotices", req, resp, cb);
    }

    /**
     * This API is used to edit an alarm notification template.
     * @param {ModifyAlarmNoticeRequest} req
     * @param {function(string, ModifyAlarmNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmNotice(req, cb) {
        let resp = new ModifyAlarmNoticeResponse();
        this.request("ModifyAlarmNotice", req, resp, cb);
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
     * This API is used to get the details of a single alarm policy.
     * @param {DescribeAlarmPolicyRequest} req
     * @param {function(string, DescribeAlarmPolicyResponse):void} cb
     * @public
     */
    DescribeAlarmPolicy(req, cb) {
        let resp = new DescribeAlarmPolicyResponse();
        this.request("DescribeAlarmPolicy", req, resp, cb);
    }


}
module.exports = MonitorClient;
