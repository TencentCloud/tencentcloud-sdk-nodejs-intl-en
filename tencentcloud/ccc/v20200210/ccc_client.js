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
const DescribeExtensionRequest = models.DescribeExtensionRequest;
const StopAutoCalloutTaskRequest = models.StopAutoCalloutTaskRequest;
const HangUpCallRequest = models.HangUpCallRequest;
const CreateSDKLoginTokenResponse = models.CreateSDKLoginTokenResponse;
const ModifyStaffRequest = models.ModifyStaffRequest;
const BindNumberCallOutSkillGroupResponse = models.BindNumberCallOutSkillGroupResponse;
const ResetExtensionPasswordRequest = models.ResetExtensionPasswordRequest;
const DisableCCCPhoneNumberResponse = models.DisableCCCPhoneNumberResponse;
const DescribeProtectedTelCdrResponse = models.DescribeProtectedTelCdrResponse;
const DescribeAutoCalloutTaskRequest = models.DescribeAutoCalloutTaskRequest;
const CreateAdminURLResponse = models.CreateAdminURLResponse;
const PausePredictiveDialingCampaignRequest = models.PausePredictiveDialingCampaignRequest;
const CreateCallOutSessionResponse = models.CreateCallOutSessionResponse;
const DisableCCCPhoneNumberRequest = models.DisableCCCPhoneNumberRequest;
const CreatePredictiveDialingCampaignRequest = models.CreatePredictiveDialingCampaignRequest;
const ServeParticipant = models.ServeParticipant;
const DescribeTelCallInfoResponse = models.DescribeTelCallInfoResponse;
const DescribeExtensionsResponse = models.DescribeExtensionsResponse;
const DeleteExtensionRequest = models.DeleteExtensionRequest;
const DescribePredictiveDialingCampaignRequest = models.DescribePredictiveDialingCampaignRequest;
const DescribePredictiveDialingCampaignResponse = models.DescribePredictiveDialingCampaignResponse;
const StaffStatusMetrics = models.StaffStatusMetrics;
const DescribeTelCdrRequest = models.DescribeTelCdrRequest;
const DescribeAutoCalloutTasksResponse = models.DescribeAutoCalloutTasksResponse;
const PackageBuyInfo = models.PackageBuyInfo;
const ModifyExtensionResponse = models.ModifyExtensionResponse;
const SeatUserInfo = models.SeatUserInfo;
const CreateStaffResponse = models.CreateStaffResponse;
const DescribePredictiveDialingCampaignsRequest = models.DescribePredictiveDialingCampaignsRequest;
const DescribeSkillGroupInfoListResponse = models.DescribeSkillGroupInfoListResponse;
const DescribeNumbersResponse = models.DescribeNumbersResponse;
const DeletePredictiveDialingCampaignRequest = models.DeletePredictiveDialingCampaignRequest;
const DescribeStaffInfoListResponse = models.DescribeStaffInfoListResponse;
const UnbindNumberCallOutSkillGroupRequest = models.UnbindNumberCallOutSkillGroupRequest;
const CreateAutoCalloutTaskRequest = models.CreateAutoCalloutTaskRequest;
const ResumePredictiveDialingCampaignResponse = models.ResumePredictiveDialingCampaignResponse;
const CallInSkillGroupMetrics = models.CallInSkillGroupMetrics;
const CreateExtensionResponse = models.CreateExtensionResponse;
const CreateCCCSkillGroupRequest = models.CreateCCCSkillGroupRequest;
const DescribeAutoCalloutTaskResponse = models.DescribeAutoCalloutTaskResponse;
const CreateCCCSkillGroupResponse = models.CreateCCCSkillGroupResponse;
const DescribeTelSessionRequest = models.DescribeTelSessionRequest;
const DescribeSkillGroupInfoListRequest = models.DescribeSkillGroupInfoListRequest;
const AutoCalloutTaskCalleeInfo = models.AutoCalloutTaskCalleeInfo;
const UpdateCCCSkillGroupResponse = models.UpdateCCCSkillGroupResponse;
const DescribePredictiveDialingSessionsResponse = models.DescribePredictiveDialingSessionsResponse;
const ErrStaffItem = models.ErrStaffItem;
const PausePredictiveDialingCampaignResponse = models.PausePredictiveDialingCampaignResponse;
const PSTNSession = models.PSTNSession;
const UpdatePredictiveDialingCampaignRequest = models.UpdatePredictiveDialingCampaignRequest;
const DescribeStaffInfoListRequest = models.DescribeStaffInfoListRequest;
const AutoCalloutTaskInfo = models.AutoCalloutTaskInfo;
const SkillGroupInfoItem = models.SkillGroupInfoItem;
const ResetExtensionPasswordResponse = models.ResetExtensionPasswordResponse;
const UpdateCCCSkillGroupRequest = models.UpdateCCCSkillGroupRequest;
const ModifyStaffResponse = models.ModifyStaffResponse;
const ModifyExtensionRequest = models.ModifyExtensionRequest;
const CreatePredictiveDialingCampaignResponse = models.CreatePredictiveDialingCampaignResponse;
const UpdatePredictiveDialingCampaignResponse = models.UpdatePredictiveDialingCampaignResponse;
const PSTNSessionInfo = models.PSTNSessionInfo;
const AbortPredictiveDialingCampaignResponse = models.AbortPredictiveDialingCampaignResponse;
const DescribeNumbersRequest = models.DescribeNumbersRequest;
const ExtensionInfo = models.ExtensionInfo;
const BindNumberCallOutSkillGroupRequest = models.BindNumberCallOutSkillGroupRequest;
const DeletePredictiveDialingCampaignResponse = models.DeletePredictiveDialingCampaignResponse;
const IVRKeyPressedElement = models.IVRKeyPressedElement;
const UnbindNumberCallOutSkillGroupResponse = models.UnbindNumberCallOutSkillGroupResponse;
const StaffInfo = models.StaffInfo;
const CreateAutoCalloutTaskResponse = models.CreateAutoCalloutTaskResponse;
const TelCdrInfo = models.TelCdrInfo;
const NumberInfo = models.NumberInfo;
const DeleteStaffRequest = models.DeleteStaffRequest;
const CallInMetrics = models.CallInMetrics;
const DescribeCCCBuyInfoListRequest = models.DescribeCCCBuyInfoListRequest;
const DescribePredictiveDialingCampaignsResponse = models.DescribePredictiveDialingCampaignsResponse;
const DescribeTelCallInfoRequest = models.DescribeTelCallInfoRequest;
const Variable = models.Variable;
const CallInNumberMetrics = models.CallInNumberMetrics;
const CreateExtensionRequest = models.CreateExtensionRequest;
const StaffSkillGroupList = models.StaffSkillGroupList;
const UnbindStaffSkillGroupListRequest = models.UnbindStaffSkillGroupListRequest;
const DescribePredictiveDialingCampaignsElement = models.DescribePredictiveDialingCampaignsElement;
const CreateCallOutSessionRequest = models.CreateCallOutSessionRequest;
const StopAutoCalloutTaskResponse = models.StopAutoCalloutTaskResponse;
const AbortPredictiveDialingCampaignRequest = models.AbortPredictiveDialingCampaignRequest;
const SkillGroupItem = models.SkillGroupItem;
const PhoneNumBuyInfo = models.PhoneNumBuyInfo;
const DescribeCCCBuyInfoListResponse = models.DescribeCCCBuyInfoListResponse;
const UnbindStaffSkillGroupListResponse = models.UnbindStaffSkillGroupListResponse;
const ResumePredictiveDialingCampaignRequest = models.ResumePredictiveDialingCampaignRequest;
const DeleteExtensionResponse = models.DeleteExtensionResponse;
const BindStaffSkillGroupListRequest = models.BindStaffSkillGroupListRequest;
const DescribePSTNActiveSessionListRequest = models.DescribePSTNActiveSessionListRequest;
const DescribeCallInMetricsResponse = models.DescribeCallInMetricsResponse;
const DescribeTelCdrResponse = models.DescribeTelCdrResponse;
const DescribeStaffStatusMetricsRequest = models.DescribeStaffStatusMetricsRequest;
const DeleteStaffResponse = models.DeleteStaffResponse;
const CalleeAttribute = models.CalleeAttribute;
const StaffStatusExtra = models.StaffStatusExtra;
const CreateStaffRequest = models.CreateStaffRequest;
const SdkAppIdBuyInfo = models.SdkAppIdBuyInfo;
const DescribePSTNActiveSessionListResponse = models.DescribePSTNActiveSessionListResponse;
const DescribeAutoCalloutTasksRequest = models.DescribeAutoCalloutTasksRequest;
const DescribeTelSessionResponse = models.DescribeTelSessionResponse;
const CreateAdminURLRequest = models.CreateAdminURLRequest;
const DescribeStaffStatusMetricsResponse = models.DescribeStaffStatusMetricsResponse;
const HangUpCallResponse = models.HangUpCallResponse;
const BindStaffSkillGroupListResponse = models.BindStaffSkillGroupListResponse;
const DescribeExtensionsRequest = models.DescribeExtensionsRequest;
const DescribeProtectedTelCdrRequest = models.DescribeProtectedTelCdrRequest;
const DescribePredictiveDialingSessionsRequest = models.DescribePredictiveDialingSessionsRequest;
const CreateSDKLoginTokenRequest = models.CreateSDKLoginTokenRequest;
const StaffBuyInfo = models.StaffBuyInfo;
const DescribeCallInMetricsRequest = models.DescribeCallInMetricsRequest;
const DescribeExtensionResponse = models.DescribeExtensionResponse;


/**
 * ccc client
 * @class
 */
class CccClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ccc.tencentcloudapi.com", "2020-02-10", credential, region, profile);
    }
    
    /**
     * This API is used to unbind the number from the outbound call skill group.
     * @param {UnbindNumberCallOutSkillGroupRequest} req
     * @param {function(string, UnbindNumberCallOutSkillGroupResponse):void} cb
     * @public
     */
    UnbindNumberCallOutSkillGroup(req, cb) {
        let resp = new UnbindNumberCallOutSkillGroupResponse();
        this.request("UnbindNumberCallOutSkillGroup", req, resp, cb);
    }

    /**
     * This API is used to query the telephone list information.
     * @param {DescribeExtensionsRequest} req
     * @param {function(string, DescribeExtensionsResponse):void} cb
     * @public
     */
    DescribeExtensions(req, cb) {
        let resp = new DescribeExtensionsResponse();
        this.request("DescribeExtensions", req, resp, cb);
    }

    /**
     * This API is used to create the telephone account.
     * @param {CreateExtensionRequest} req
     * @param {function(string, CreateExtensionResponse):void} cb
     * @public
     */
    CreateExtension(req, cb) {
        let resp = new CreateExtensionResponse();
        this.request("CreateExtension", req, resp, cb);
    }

    /**
     * This API is used to access the agent information list.
     * @param {DescribeStaffInfoListRequest} req
     * @param {function(string, DescribeStaffInfoListResponse):void} cb
     * @public
     */
    DescribeStaffInfoList(req, cb) {
        let resp = new DescribeStaffInfoListResponse();
        this.request("DescribeStaffInfoList", req, resp, cb);
    }

    /**
     * This API is used to disable numbers.
     * @param {DisableCCCPhoneNumberRequest} req
     * @param {function(string, DisableCCCPhoneNumberResponse):void} cb
     * @public
     */
    DisableCCCPhoneNumber(req, cb) {
        let resp = new DisableCCCPhoneNumberResponse();
        this.request("DisableCCCPhoneNumber", req, resp, cb);
    }

    /**
     * This API is used to access the current calling session list.
     * @param {DescribePSTNActiveSessionListRequest} req
     * @param {function(string, DescribePSTNActiveSessionListResponse):void} cb
     * @public
     */
    DescribePSTNActiveSessionList(req, cb) {
        let resp = new DescribePSTNActiveSessionListResponse();
        this.request("DescribePSTNActiveSessionList", req, resp, cb);
    }

    /**
     * This API is used to delete telephone accounts.
     * @param {DeleteExtensionRequest} req
     * @param {function(string, DeleteExtensionResponse):void} cb
     * @public
     */
    DeleteExtension(req, cb) {
        let resp = new DeleteExtensionResponse();
        this.request("DeleteExtension", req, resp, cb);
    }

    /**
     * This API is used to bind the agent's skill group.
     * @param {BindStaffSkillGroupListRequest} req
     * @param {function(string, BindStaffSkillGroupListResponse):void} cb
     * @public
     */
    BindStaffSkillGroupList(req, cb) {
        let resp = new BindStaffSkillGroupListResponse();
        this.request("BindStaffSkillGroupList", req, resp, cb);
    }

    /**
     * This API is used to bind outbound skill group of number.
     * @param {BindNumberCallOutSkillGroupRequest} req
     * @param {function(string, BindNumberCallOutSkillGroupResponse):void} cb
     * @public
     */
    BindNumberCallOutSkillGroup(req, cb) {
        let resp = new BindNumberCallOutSkillGroupResponse();
        this.request("BindNumberCallOutSkillGroup", req, resp, cb);
    }

    /**
     * This API is used to delete the agent information.
     * @param {DeleteStaffRequest} req
     * @param {function(string, DeleteStaffResponse):void} cb
     * @public
     */
    DeleteStaff(req, cb) {
        let resp = new DeleteStaffResponse();
        this.request("DeleteStaff", req, resp, cb);
    }

    /**
     * This API is used to modify the customer service account.
     * @param {ModifyStaffRequest} req
     * @param {function(string, ModifyStaffResponse):void} cb
     * @public
     */
    ModifyStaff(req, cb) {
        let resp = new ModifyStaffResponse();
        this.request("ModifyStaff", req, resp, cb);
    }

    /**
     * This API is used to query auto-task outbound calls in batch.
     * @param {DescribeAutoCalloutTasksRequest} req
     * @param {function(string, DescribeAutoCalloutTasksResponse):void} cb
     * @public
     */
    DescribeAutoCalloutTasks(req, cb) {
        let resp = new DescribeAutoCalloutTasksResponse();
        this.request("DescribeAutoCalloutTasks", req, resp, cb);
    }

    /**
     * This API is used to reset the telephone register password.
     * @param {ResetExtensionPasswordRequest} req
     * @param {function(string, ResetExtensionPasswordResponse):void} cb
     * @public
     */
    ResetExtensionPassword(req, cb) {
        let resp = new ResetExtensionPasswordResponse();
        this.request("ResetExtensionPassword", req, resp, cb);
    }

    /**
     * This API is used to access telephone consumption statistics by instance.
     * @param {DescribeTelCallInfoRequest} req
     * @param {function(string, DescribeTelCallInfoResponse):void} cb
     * @public
     */
    DescribeTelCallInfo(req, cb) {
        let resp = new DescribeTelCallInfoResponse();
        this.request("DescribeTelCallInfo", req, resp, cb);
    }

    /**
     * This API is used to access the telephone information.
     * @param {DescribeExtensionRequest} req
     * @param {function(string, DescribeExtensionResponse):void} cb
     * @public
     */
    DescribeExtension(req, cb) {
        let resp = new DescribeExtensionResponse();
        this.request("DescribeExtension", req, resp, cb);
    }

    /**
     * This API is used to access the PSTN session information.
     * @param {DescribeTelSessionRequest} req
     * @param {function(string, DescribeTelSessionResponse):void} cb
     * @public
     */
    DescribeTelSession(req, cb) {
        let resp = new DescribeTelSessionResponse();
        this.request("DescribeTelSession", req, resp, cb);
    }

    /**
     * This API is used to create outbound sessions. Currently, only dual call is supported. That is, firstly, please use the platform number to call the agent's cell phone. After the agent answers, then please make outbound calls to the user. Due to ISP frequency restrictions, the agent's phone number must first be added to the allowlist to avoid frequency control which may lead to the failure of the outbound call.
     * @param {CreateCallOutSessionRequest} req
     * @param {function(string, CreateCallOutSessionResponse):void} cb
     * @public
     */
    CreateCallOutSession(req, cb) {
        let resp = new CreateCallOutSessionResponse();
        this.request("CreateCallOutSession", req, resp, cb);
    }

    /**
     * This API is used to query the predictive outbound call task list.
     * @param {DescribePredictiveDialingCampaignsRequest} req
     * @param {function(string, DescribePredictiveDialingCampaignsResponse):void} cb
     * @public
     */
    DescribePredictiveDialingCampaigns(req, cb) {
        let resp = new DescribePredictiveDialingCampaignsResponse();
        this.request("DescribePredictiveDialingCampaigns", req, resp, cb);
    }

    /**
     * This API is used to query automatic outbound call task details.
     * @param {DescribeAutoCalloutTaskRequest} req
     * @param {function(string, DescribeAutoCalloutTaskResponse):void} cb
     * @public
     */
    DescribeAutoCalloutTask(req, cb) {
        let resp = new DescribeAutoCalloutTaskResponse();
        this.request("DescribeAutoCalloutTask", req, resp, cb);
    }

    /**
     * This API is used to query the predictive outbound call list.
     * @param {DescribePredictiveDialingSessionsRequest} req
     * @param {function(string, DescribePredictiveDialingSessionsResponse):void} cb
     * @public
     */
    DescribePredictiveDialingSessions(req, cb) {
        let resp = new DescribePredictiveDialingSessionsResponse();
        this.request("DescribePredictiveDialingSessions", req, resp, cb);
    }

    /**
     * This API is used to access phone service records and recordings.
     * @param {DescribeTelCdrRequest} req
     * @param {function(string, DescribeTelCdrResponse):void} cb
     * @public
     */
    DescribeTelCdr(req, cb) {
        let resp = new DescribeTelCdrResponse();
        this.request("DescribeTelCdr", req, resp, cb);
    }

    /**
     * This API is used to access the skill group information list.
     * @param {DescribeSkillGroupInfoListRequest} req
     * @param {function(string, DescribeSkillGroupInfoListResponse):void} cb
     * @public
     */
    DescribeSkillGroupInfoList(req, cb) {
        let resp = new DescribeSkillGroupInfoListResponse();
        this.request("DescribeSkillGroupInfoList", req, resp, cb);
    }

    /**
     * This API is used to stop the automatic outbound call task.
     * @param {StopAutoCalloutTaskRequest} req
     * @param {function(string, StopAutoCalloutTaskResponse):void} cb
     * @public
     */
    StopAutoCalloutTask(req, cb) {
        let resp = new StopAutoCalloutTaskResponse();
        this.request("StopAutoCalloutTask", req, resp, cb);
    }

    /**
     * This API is used to create the predictive outbound call task.
     * @param {CreatePredictiveDialingCampaignRequest} req
     * @param {function(string, CreatePredictiveDialingCampaignResponse):void} cb
     * @public
     */
    CreatePredictiveDialingCampaign(req, cb) {
        let resp = new CreatePredictiveDialingCampaignResponse();
        this.request("CreatePredictiveDialingCampaign", req, resp, cb);
    }

    /**
     * This API is used to access the user purchasing information list.
     * @param {DescribeCCCBuyInfoListRequest} req
     * @param {function(string, DescribeCCCBuyInfoListResponse):void} cb
     * @public
     */
    DescribeCCCBuyInfoList(req, cb) {
        let resp = new DescribeCCCBuyInfoListResponse();
        this.request("DescribeCCCBuyInfoList", req, resp, cb);
    }

    /**
     * This API is used to resume the predictive outbound call task.
     * @param {ResumePredictiveDialingCampaignRequest} req
     * @param {function(string, ResumePredictiveDialingCampaignResponse):void} cb
     * @public
     */
    ResumePredictiveDialingCampaign(req, cb) {
        let resp = new ResumePredictiveDialingCampaignResponse();
        this.request("ResumePredictiveDialingCampaign", req, resp, cb);
    }

    /**
     * This API is used to create a new skill group.
     * @param {CreateCCCSkillGroupRequest} req
     * @param {function(string, CreateCCCSkillGroupResponse):void} cb
     * @public
     */
    CreateCCCSkillGroup(req, cb) {
        let resp = new CreateCCCSkillGroupResponse();
        this.request("CreateCCCSkillGroup", req, resp, cb);
    }

    /**
     * This API is used to unbind the agent's skill group.
     * @param {UnbindStaffSkillGroupListRequest} req
     * @param {function(string, UnbindStaffSkillGroupListResponse):void} cb
     * @public
     */
    UnbindStaffSkillGroupList(req, cb) {
        let resp = new UnbindStaffSkillGroupListResponse();
        this.request("UnbindStaffSkillGroupList", req, resp, cb);
    }

    /**
     * This API is used to query the predictive outbound call task.
     * @param {DescribePredictiveDialingCampaignRequest} req
     * @param {function(string, DescribePredictiveDialingCampaignResponse):void} cb
     * @public
     */
    DescribePredictiveDialingCampaign(req, cb) {
        let resp = new DescribePredictiveDialingCampaignResponse();
        this.request("DescribePredictiveDialingCampaign", req, resp, cb);
    }

    /**
     * This API is used to access the real-time status statistics metrics of the agent.
     * @param {DescribeStaffStatusMetricsRequest} req
     * @param {function(string, DescribeStaffStatusMetricsResponse):void} cb
     * @public
     */
    DescribeStaffStatusMetrics(req, cb) {
        let resp = new DescribeStaffStatusMetricsResponse();
        this.request("DescribeStaffStatusMetrics", req, resp, cb);
    }

    /**
     * This API is used to create the customer service account.
     * @param {CreateStaffRequest} req
     * @param {function(string, CreateStaffResponse):void} cb
     * @public
     */
    CreateStaff(req, cb) {
        let resp = new CreateStaffResponse();
        this.request("CreateStaff", req, resp, cb);
    }

    /**
     * This API is used to create the automatic outbound call task.
     * @param {CreateAutoCalloutTaskRequest} req
     * @param {function(string, CreateAutoCalloutTaskResponse):void} cb
     * @public
     */
    CreateAutoCalloutTask(req, cb) {
        let resp = new CreateAutoCalloutTaskResponse();
        this.request("CreateAutoCalloutTask", req, resp, cb);
    }

    /**
     * This API is used to modify telephone accounts (binding skill group, binding agent account).
     * @param {ModifyExtensionRequest} req
     * @param {function(string, ModifyExtensionResponse):void} cb
     * @public
     */
    ModifyExtension(req, cb) {
        let resp = new ModifyExtensionResponse();
        this.request("ModifyExtension", req, resp, cb);
    }

    /**
     * This API is used to update the skill group.
     * @param {UpdateCCCSkillGroupRequest} req
     * @param {function(string, UpdateCCCSkillGroupResponse):void} cb
     * @public
     */
    UpdateCCCSkillGroup(req, cb) {
        let resp = new UpdateCCCSkillGroupResponse();
        this.request("UpdateCCCSkillGroup", req, resp, cb);
    }

    /**
     * This API is used to hang up the phone.
     * @param {HangUpCallRequest} req
     * @param {function(string, HangUpCallResponse):void} cb
     * @public
     */
    HangUpCall(req, cb) {
        let resp = new HangUpCallResponse();
        this.request("HangUpCall", req, resp, cb);
    }

    /**
     * This API is used to pause the predictive outbound call task.
     * @param {PausePredictiveDialingCampaignRequest} req
     * @param {function(string, PausePredictiveDialingCampaignResponse):void} cb
     * @public
     */
    PausePredictiveDialingCampaign(req, cb) {
        let resp = new PausePredictiveDialingCampaignResponse();
        this.request("PausePredictiveDialingCampaign", req, resp, cb);
    }

    /**
     * This API is used to create a management access link.
     * @param {CreateAdminURLRequest} req
     * @param {function(string, CreateAdminURLResponse):void} cb
     * @public
     */
    CreateAdminURL(req, cb) {
        let resp = new CreateAdminURLResponse();
        this.request("CreateAdminURL", req, resp, cb);
    }

    /**
     * This API is used to access protected phone service records and recordings for both inbound and outbound calls.
     * @param {DescribeProtectedTelCdrRequest} req
     * @param {function(string, DescribeProtectedTelCdrResponse):void} cb
     * @public
     */
    DescribeProtectedTelCdr(req, cb) {
        let resp = new DescribeProtectedTelCdrResponse();
        this.request("DescribeProtectedTelCdr", req, resp, cb);
    }

    /**
     * This API is used to access the inbound real-time data statistical metrics.
     * @param {DescribeCallInMetricsRequest} req
     * @param {function(string, DescribeCallInMetricsResponse):void} cb
     * @public
     */
    DescribeCallInMetrics(req, cb) {
        let resp = new DescribeCallInMetricsResponse();
        this.request("DescribeCallInMetrics", req, resp, cb);
    }

    /**
     * This API is used to create the SDK log-in token.
     * @param {CreateSDKLoginTokenRequest} req
     * @param {function(string, CreateSDKLoginTokenResponse):void} cb
     * @public
     */
    CreateSDKLoginToken(req, cb) {
        let resp = new CreateSDKLoginTokenResponse();
        this.request("CreateSDKLoginToken", req, resp, cb);
    }

    /**
     * This API is used to query the number list.
     * @param {DescribeNumbersRequest} req
     * @param {function(string, DescribeNumbersResponse):void} cb
     * @public
     */
    DescribeNumbers(req, cb) {
        let resp = new DescribeNumbersResponse();
        this.request("DescribeNumbers", req, resp, cb);
    }

    /**
     * This API is used to pause the predictive outbound call task.
     * @param {AbortPredictiveDialingCampaignRequest} req
     * @param {function(string, AbortPredictiveDialingCampaignResponse):void} cb
     * @public
     */
    AbortPredictiveDialingCampaign(req, cb) {
        let resp = new AbortPredictiveDialingCampaignResponse();
        this.request("AbortPredictiveDialingCampaign", req, resp, cb);
    }

    /**
     * This API is used to delete the predictive outbound call task.
     * @param {DeletePredictiveDialingCampaignRequest} req
     * @param {function(string, DeletePredictiveDialingCampaignResponse):void} cb
     * @public
     */
    DeletePredictiveDialingCampaign(req, cb) {
        let resp = new DeletePredictiveDialingCampaignResponse();
        this.request("DeletePredictiveDialingCampaign", req, resp, cb);
    }

    /**
     * This API is used to update the predictive outbound call task before it starts.
     * @param {UpdatePredictiveDialingCampaignRequest} req
     * @param {function(string, UpdatePredictiveDialingCampaignResponse):void} cb
     * @public
     */
    UpdatePredictiveDialingCampaign(req, cb) {
        let resp = new UpdatePredictiveDialingCampaignResponse();
        this.request("UpdatePredictiveDialingCampaign", req, resp, cb);
    }


}
module.exports = CccClient;
