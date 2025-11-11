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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeExtensionRequest = models.DescribeExtensionRequest;
const CreateCCCSkillGroupResponse = models.CreateCCCSkillGroupResponse;
const StopAutoCalloutTaskRequest = models.StopAutoCalloutTaskRequest;
const CreateIVRSessionRequest = models.CreateIVRSessionRequest;
const EventStaffElement = models.EventStaffElement;
const CreateSDKLoginTokenResponse = models.CreateSDKLoginTokenResponse;
const ModifyStaffRequest = models.ModifyStaffRequest;
const DescribeAIAgentInfoListResponse = models.DescribeAIAgentInfoListResponse;
const DescribeIvrAudioListResponse = models.DescribeIvrAudioListResponse;
const DescribePredictiveDialingCampaignsElement = models.DescribePredictiveDialingCampaignsElement;
const SetStaffStatusResponse = models.SetStaffStatusResponse;
const ServerPushText = models.ServerPushText;
const ResetExtensionPasswordRequest = models.ResetExtensionPasswordRequest;
const DisableCCCPhoneNumberResponse = models.DisableCCCPhoneNumberResponse;
const DescribeProtectedTelCdrResponse = models.DescribeProtectedTelCdrResponse;
const DescribeAutoCalloutTaskRequest = models.DescribeAutoCalloutTaskRequest;
const CalleeAttribute = models.CalleeAttribute;
const CreateUserSigResponse = models.CreateUserSigResponse;
const CreateAICallRequest = models.CreateAICallRequest;
const CreateAdminURLResponse = models.CreateAdminURLResponse;
const PausePredictiveDialingCampaignRequest = models.PausePredictiveDialingCampaignRequest;
const CreateCallOutSessionResponse = models.CreateCallOutSessionResponse;
const AIAgentInfo = models.AIAgentInfo;
const DisableCCCPhoneNumberRequest = models.DisableCCCPhoneNumberRequest;
const ModifyStaffPasswordResponse = models.ModifyStaffPasswordResponse;
const ControlAIConversationResponse = models.ControlAIConversationResponse;
const TransferToManualRequest = models.TransferToManualRequest;
const CreatePredictiveDialingCampaignRequest = models.CreatePredictiveDialingCampaignRequest;
const RestoreMemberOnlineResponse = models.RestoreMemberOnlineResponse;
const AbortAgentCruiseDialingCampaignResponse = models.AbortAgentCruiseDialingCampaignResponse;
const DescribeSessionDetailResponse = models.DescribeSessionDetailResponse;
const ServeParticipant = models.ServeParticipant;
const AICallExtractResultElement = models.AICallExtractResultElement;
const DescribeTelCallInfoResponse = models.DescribeTelCallInfoResponse;
const DescribeExtensionsResponse = models.DescribeExtensionsResponse;
const StaffStatusMetrics = models.StaffStatusMetrics;
const DeleteExtensionRequest = models.DeleteExtensionRequest;
const DescribePredictiveDialingCampaignRequest = models.DescribePredictiveDialingCampaignRequest;
const DescribePredictiveDialingCampaignResponse = models.DescribePredictiveDialingCampaignResponse;
const CreateAIAgentCallResponse = models.CreateAIAgentCallResponse;
const DescribeAILatencyResponse = models.DescribeAILatencyResponse;
const DescribeAutoCalloutTasksResponse = models.DescribeAutoCalloutTasksResponse;
const PackageBuyInfo = models.PackageBuyInfo;
const AICallExtractConfigElement = models.AICallExtractConfigElement;
const AICallExtractResultInfo = models.AICallExtractResultInfo;
const CreateAgentCruiseDialingCampaignRequest = models.CreateAgentCruiseDialingCampaignRequest;
const DescribeAICallExtractResultRequest = models.DescribeAICallExtractResultRequest;
const CreateStaffResponse = models.CreateStaffResponse;
const DescribePredictiveDialingCampaignsRequest = models.DescribePredictiveDialingCampaignsRequest;
const DescribeSkillGroupInfoListResponse = models.DescribeSkillGroupInfoListResponse;
const DescribeNumbersResponse = models.DescribeNumbersResponse;
const ZHToneWordsInfo = models.ZHToneWordsInfo;
const DeletePredictiveDialingCampaignRequest = models.DeletePredictiveDialingCampaignRequest;
const UploadIvrAudioRequest = models.UploadIvrAudioRequest;
const DescribeStaffInfoListResponse = models.DescribeStaffInfoListResponse;
const AILatencyStatisticsInfo = models.AILatencyStatisticsInfo;
const UnbindNumberCallOutSkillGroupRequest = models.UnbindNumberCallOutSkillGroupRequest;
const CreateAutoCalloutTaskRequest = models.CreateAutoCalloutTaskRequest;
const ResumePredictiveDialingCampaignResponse = models.ResumePredictiveDialingCampaignResponse;
const CallInSkillGroupMetrics = models.CallInSkillGroupMetrics;
const CreateExtensionResponse = models.CreateExtensionResponse;
const CreateUserSigRequest = models.CreateUserSigRequest;
const CreateCCCSkillGroupRequest = models.CreateCCCSkillGroupRequest;
const DescribePredictiveDialingSessionsResponse = models.DescribePredictiveDialingSessionsResponse;
const DeleteCCCSkillGroupRequest = models.DeleteCCCSkillGroupRequest;
const BindNumberCallInInterfaceRequest = models.BindNumberCallInInterfaceRequest;
const DescribeTelSessionRequest = models.DescribeTelSessionRequest;
const ModifyOwnNumberApplyRequest = models.ModifyOwnNumberApplyRequest;
const SessionEvent = models.SessionEvent;
const DescribeSkillGroupInfoListRequest = models.DescribeSkillGroupInfoListRequest;
const DescribeAILatencyRequest = models.DescribeAILatencyRequest;
const Interface = models.Interface;
const AutoCalloutTaskCalleeInfo = models.AutoCalloutTaskCalleeInfo;
const SeatUserInfo = models.SeatUserInfo;
const UpdateCCCSkillGroupResponse = models.UpdateCCCSkillGroupResponse;
const AsrData = models.AsrData;
const UploadIvrAudioResponse = models.UploadIvrAudioResponse;
const ErrStaffItem = models.ErrStaffItem;
const PausePredictiveDialingCampaignResponse = models.PausePredictiveDialingCampaignResponse;
const ResumePredictiveDialingCampaignRequest = models.ResumePredictiveDialingCampaignRequest;
const PSTNSession = models.PSTNSession;
const UpdatePredictiveDialingCampaignRequest = models.UpdatePredictiveDialingCampaignRequest;
const DescribeStaffInfoListRequest = models.DescribeStaffInfoListRequest;
const AutoCalloutTaskInfo = models.AutoCalloutTaskInfo;
const DescribeIvrAudioListRequest = models.DescribeIvrAudioListRequest;
const BindNumberCallInInterfaceResponse = models.BindNumberCallInInterfaceResponse;
const ForceMemberOfflineRequest = models.ForceMemberOfflineRequest;
const SkillGroupInfoItem = models.SkillGroupInfoItem;
const CreateAIAgentCallRequest = models.CreateAIAgentCallRequest;
const UpdateCCCSkillGroupRequest = models.UpdateCCCSkillGroupRequest;
const RestoreMemberOnlineRequest = models.RestoreMemberOnlineRequest;
const TimeRange = models.TimeRange;
const ModifyStaffPasswordRequest = models.ModifyStaffPasswordRequest;
const DescribeTelCdrRequest = models.DescribeTelCdrRequest;
const ModifyStaffResponse = models.ModifyStaffResponse;
const ModifyExtensionRequest = models.ModifyExtensionRequest;
const CreatePredictiveDialingCampaignResponse = models.CreatePredictiveDialingCampaignResponse;
const DescribeAIAnalysisResultResponse = models.DescribeAIAnalysisResultResponse;
const UpdatePredictiveDialingCampaignResponse = models.UpdatePredictiveDialingCampaignResponse;
const PSTNSessionInfo = models.PSTNSessionInfo;
const AbortPredictiveDialingCampaignResponse = models.AbortPredictiveDialingCampaignResponse;
const DescribeNumbersRequest = models.DescribeNumbersRequest;
const ExtensionInfo = models.ExtensionInfo;
const BindNumberCallOutSkillGroupRequest = models.BindNumberCallOutSkillGroupRequest;
const DeletePredictiveDialingCampaignResponse = models.DeletePredictiveDialingCampaignResponse;
const IVRKeyPressedElement = models.IVRKeyPressedElement;
const UnbindNumberCallOutSkillGroupResponse = models.UnbindNumberCallOutSkillGroupResponse;
const DescribeAgentCruiseDialingCampaignRequest = models.DescribeAgentCruiseDialingCampaignRequest;
const DescribePSTNActiveSessionListRequest = models.DescribePSTNActiveSessionListRequest;
const CreateAutoCalloutTaskResponse = models.CreateAutoCalloutTaskResponse;
const DescribeAICallExtractResultResponse = models.DescribeAICallExtractResultResponse;
const DeleteCCCSkillGroupResponse = models.DeleteCCCSkillGroupResponse;
const UploadIvrAudioFailedInfo = models.UploadIvrAudioFailedInfo;
const DescribeSessionDetailRequest = models.DescribeSessionDetailRequest;
const ModifyExtensionResponse = models.ModifyExtensionResponse;
const NumberInfo = models.NumberInfo;
const DeleteStaffRequest = models.DeleteStaffRequest;
const CallInMetrics = models.CallInMetrics;
const DescribeCCCBuyInfoListRequest = models.DescribeCCCBuyInfoListRequest;
const OwnNumberApplyDetailItem = models.OwnNumberApplyDetailItem;
const DescribePredictiveDialingCampaignsResponse = models.DescribePredictiveDialingCampaignsResponse;
const DescribeTelCallInfoRequest = models.DescribeTelCallInfoRequest;
const Variable = models.Variable;
const CallInNumberMetrics = models.CallInNumberMetrics;
const CreateExtensionRequest = models.CreateExtensionRequest;
const StaffSkillGroupList = models.StaffSkillGroupList;
const SetStaffStatusRequest = models.SetStaffStatusRequest;
const ResetExtensionPasswordResponse = models.ResetExtensionPasswordResponse;
const ForwardingTarget = models.ForwardingTarget;
const ForwardingConfig = models.ForwardingConfig;
const AILatencyDetail = models.AILatencyDetail;
const AITransferItem = models.AITransferItem;
const StaffInfo = models.StaffInfo;
const AbortAgentCruiseDialingCampaignRequest = models.AbortAgentCruiseDialingCampaignRequest;
const ForceMemberOfflineResponse = models.ForceMemberOfflineResponse;
const CreateOwnNumberApplyResponse = models.CreateOwnNumberApplyResponse;
const BindNumberCallOutSkillGroupResponse = models.BindNumberCallOutSkillGroupResponse;
const HangUpCallResponse = models.HangUpCallResponse;
const TransferToManualResponse = models.TransferToManualResponse;
const StopAutoCalloutTaskResponse = models.StopAutoCalloutTaskResponse;
const AbortPredictiveDialingCampaignRequest = models.AbortPredictiveDialingCampaignRequest;
const ToneWordInfo = models.ToneWordInfo;
const TelCdrInfo = models.TelCdrInfo;
const SkillGroupItem = models.SkillGroupItem;
const PhoneNumBuyInfo = models.PhoneNumBuyInfo;
const DescribeAIAnalysisResultRequest = models.DescribeAIAnalysisResultRequest;
const DescribeCCCBuyInfoListResponse = models.DescribeCCCBuyInfoListResponse;
const UnbindStaffSkillGroupListResponse = models.UnbindStaffSkillGroupListResponse;
const ControlAIConversationRequest = models.ControlAIConversationRequest;
const UploadAudioInfo = models.UploadAudioInfo;
const DescribeStaffStatusHistoryResponse = models.DescribeStaffStatusHistoryResponse;
const DeleteExtensionResponse = models.DeleteExtensionResponse;
const BindStaffSkillGroupListRequest = models.BindStaffSkillGroupListRequest;
const CreateAgentCruiseDialingCampaignResponse = models.CreateAgentCruiseDialingCampaignResponse;
const ModifyOwnNumberApplyResponse = models.ModifyOwnNumberApplyResponse;
const UnbindStaffSkillGroupListRequest = models.UnbindStaffSkillGroupListRequest;
const SetStaffStatusItem = models.SetStaffStatusItem;
const DescribeCallInMetricsResponse = models.DescribeCallInMetricsResponse;
const DescribeAgentCruiseDialingCampaignResponse = models.DescribeAgentCruiseDialingCampaignResponse;
const CreateAICallResponse = models.CreateAICallResponse;
const CreateIVRSessionResponse = models.CreateIVRSessionResponse;
const InvokeLLM = models.InvokeLLM;
const HangUpCallRequest = models.HangUpCallRequest;
const ClientInfo = models.ClientInfo;
const DescribeTelCdrResponse = models.DescribeTelCdrResponse;
const DescribeStaffStatusMetricsRequest = models.DescribeStaffStatusMetricsRequest;
const DeleteStaffResponse = models.DeleteStaffResponse;
const DescribeAIAgentInfoListRequest = models.DescribeAIAgentInfoListRequest;
const StaffStatusExtra = models.StaffStatusExtra;
const DescribeStaffStatusHistoryRequest = models.DescribeStaffStatusHistoryRequest;
const CreateStaffRequest = models.CreateStaffRequest;
const SdkAppIdBuyInfo = models.SdkAppIdBuyInfo;
const DescribePSTNActiveSessionListResponse = models.DescribePSTNActiveSessionListResponse;
const EventStaffDetail = models.EventStaffDetail;
const AILatencyStatistics = models.AILatencyStatistics;
const StaffStatus = models.StaffStatus;
const AIAnalysisResult = models.AIAnalysisResult;
const DescribeAutoCalloutTasksRequest = models.DescribeAutoCalloutTasksRequest;
const DescribeTelSessionResponse = models.DescribeTelSessionResponse;
const SetStaffStatusRspItem = models.SetStaffStatusRspItem;
const CreateAdminURLRequest = models.CreateAdminURLRequest;
const DescribeAutoCalloutTaskResponse = models.DescribeAutoCalloutTaskResponse;
const DescribeStaffStatusMetricsResponse = models.DescribeStaffStatusMetricsResponse;
const AudioFileInfo = models.AudioFileInfo;
const CreateCallOutSessionRequest = models.CreateCallOutSessionRequest;
const BindStaffSkillGroupListResponse = models.BindStaffSkillGroupListResponse;
const DescribeTelRecordAsrResponse = models.DescribeTelRecordAsrResponse;
const DescribeExtensionsRequest = models.DescribeExtensionsRequest;
const DescribeProtectedTelCdrRequest = models.DescribeProtectedTelCdrRequest;
const DescribePredictiveDialingSessionsRequest = models.DescribePredictiveDialingSessionsRequest;
const CreateSDKLoginTokenRequest = models.CreateSDKLoginTokenRequest;
const StaffBuyInfo = models.StaffBuyInfo;
const CreateOwnNumberApplyRequest = models.CreateOwnNumberApplyRequest;
const DescribeCallInMetricsRequest = models.DescribeCallInMetricsRequest;
const DescribeExtensionResponse = models.DescribeExtensionResponse;
const DescribeTelRecordAsrRequest = models.DescribeTelRecordAsrRequest;


/**
 * ccc client
 * @class
 */
class CccClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ccc.intl.tencentcloudapi.com", "2020-02-10", credential, region, profile);
    }
    
    /**
     * This API is used to transfer a session to an agent in specific scenarios.
     * @param {TransferToManualRequest} req
     * @param {function(string, TransferToManualResponse):void} cb
     * @public
     */
    TransferToManual(req, cb) {
        let resp = new TransferToManualResponse();
        this.request("TransferToManual", req, resp, cb);
    }

    /**
     * This API is used to obtain AI Conversation Analytics results.
     * @param {DescribeAIAnalysisResultRequest} req
     * @param {function(string, DescribeAIAnalysisResultResponse):void} cb
     * @public
     */
    DescribeAIAnalysisResult(req, cb) {
        let resp = new DescribeAIAnalysisResultResponse();
        this.request("DescribeAIAnalysisResult", req, resp, cb);
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
     * This API is used to obtain AI latency information.
     * @param {DescribeAILatencyRequest} req
     * @param {function(string, DescribeAILatencyResponse):void} cb
     * @public
     */
    DescribeAILatency(req, cb) {
        let resp = new DescribeAILatencyResponse();
        this.request("DescribeAILatency", req, resp, cb);
    }

    /**
     * Batch Query Automatic Outbound Call Tasks
     * @param {DescribeAutoCalloutTasksRequest} req
     * @param {function(string, DescribeAutoCalloutTasksResponse):void} cb
     * @public
     */
    DescribeAutoCalloutTasks(req, cb) {
        let resp = new DescribeAutoCalloutTasksResponse();
        this.request("DescribeAutoCalloutTasks", req, resp, cb);
    }

    /**
     * Stop Agent Cruise-style Outbound Call Task
     * @param {AbortAgentCruiseDialingCampaignRequest} req
     * @param {function(string, AbortAgentCruiseDialingCampaignResponse):void} cb
     * @public
     */
    AbortAgentCruiseDialingCampaign(req, cb) {
        let resp = new AbortAgentCruiseDialingCampaignResponse();
        this.request("AbortAgentCruiseDialingCampaign", req, resp, cb);
    }

    /**
     * Used to make outbound calls by invoking AI models, limited to the use of proprietary phone numbers. Currently, the Advanced version seats are available for a **limited time** free trial.

Before initiating a call, please ensure your AI model is compatible with OpenAI, Azure, or Minimax protocols, and visit the model provider's website to obtain relevant authentication information. For detailed feature descriptions, please refer to the documentation [Tencent Cloud Contact Center AI Call Platform](https://www.tencentcloud.com/document/product/1229/66889).
     * @param {CreateAICallRequest} req
     * @param {function(string, CreateAICallResponse):void} cb
     * @public
     */
    CreateAICall(req, cb) {
        let resp = new CreateAICallResponse();
        this.request("CreateAICall", req, resp, cb);
    }

    /**
     * Query Agent Cruise-style Outbound Call Task
     * @param {DescribeAgentCruiseDialingCampaignRequest} req
     * @param {function(string, DescribeAgentCruiseDialingCampaignResponse):void} cb
     * @public
     */
    DescribeAgentCruiseDialingCampaign(req, cb) {
        let resp = new DescribeAgentCruiseDialingCampaignResponse();
        this.request("DescribeAgentCruiseDialingCampaign", req, resp, cb);
    }

    /**
     * This API is used to delete a skill group.
     * @param {DeleteCCCSkillGroupRequest} req
     * @param {function(string, DeleteCCCSkillGroupResponse):void} cb
     * @public
     */
    DeleteCCCSkillGroup(req, cb) {
        let resp = new DeleteCCCSkillGroupResponse();
        this.request("DeleteCCCSkillGroup", req, resp, cb);
    }

    /**
     * Modify customer's own number approval form
     * @param {ModifyOwnNumberApplyRequest} req
     * @param {function(string, ModifyOwnNumberApplyResponse):void} cb
     * @public
     */
    ModifyOwnNumberApply(req, cb) {
        let resp = new ModifyOwnNumberApplyResponse();
        this.request("ModifyOwnNumberApply", req, resp, cb);
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
     * This API is used to query agent status history.
     * @param {DescribeStaffStatusHistoryRequest} req
     * @param {function(string, DescribeStaffStatusHistoryResponse):void} cb
     * @public
     */
    DescribeStaffStatusHistory(req, cb) {
        let resp = new DescribeStaffStatusHistoryResponse();
        this.request("DescribeStaffStatusHistory", req, resp, cb);
    }

    /**
     * Query IVR Audio File List Information
     * @param {DescribeIvrAudioListRequest} req
     * @param {function(string, DescribeIvrAudioListResponse):void} cb
     * @public
     */
    DescribeIvrAudioList(req, cb) {
        let resp = new DescribeIvrAudioListResponse();
        this.request("DescribeIvrAudioList", req, resp, cb);
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
     * This API is used to set staff status.
     * @param {SetStaffStatusRequest} req
     * @param {function(string, SetStaffStatusResponse):void} cb
     * @public
     */
    SetStaffStatus(req, cb) {
        let resp = new SetStaffStatusResponse();
        this.request("SetStaffStatus", req, resp, cb);
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
     * Upload audio files used in IVR, with a daily upload limit of 50 files. (It is recommended to use temporary links stored in Tencent Cloud Cos for the audio file URL in the parameters)
     * @param {UploadIvrAudioRequest} req
     * @param {function(string, UploadIvrAudioResponse):void} cb
     * @public
     */
    UploadIvrAudio(req, cb) {
        let resp = new UploadIvrAudioResponse();
        this.request("UploadIvrAudio", req, resp, cb);
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
     * This API is used to create an outbound call session. Currently, only dual calls are supported. That is, first use the platform number to call the agent mobile phone. After the agent answers, then make an outbound call to the user. Moreover, due to ISP frequency restrictions, the agent phone number must be added to the allowlist first to avoid frequency control leading to the failure of the outbound call. Therefore, before calling this API, the following operations have been completed.
1. The agent specified by UserId has already bound the mobile number. https://intl.cloud.tencent.com/document/product/679/76067?from_cn_redirect=1#.E6.AD.A5.E9.AA.A42.EF.BC.9A.E5.AE.8C.E5.96.84.E8.B4.A6.E5.8F.B7.E4.BF.A1.E6.81.AF.
2. The agent's bound mobile number has applied for and passed the outbound call allowlist.
This API is used to make calls. Currently, the agent side can only call the user's mobile phone, so the IsForceMobile field must be true.
4. Do not fill in the mobile number bound to the current UserId for the callee, otherwise it can lead to call failure due to a busy line.
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
     * This API is used to provide server-side robot control feature.
     * @param {ControlAIConversationRequest} req
     * @param {function(string, ControlAIConversationResponse):void} cb
     * @public
     */
    ControlAIConversation(req, cb) {
        let resp = new ControlAIConversationResponse();
        this.request("ControlAIConversation", req, resp, cb);
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
     * This API is used to query call detail.
     * @param {DescribeSessionDetailRequest} req
     * @param {function(string, DescribeSessionDetailResponse):void} cb
     * @public
     */
    DescribeSessionDetail(req, cb) {
        let resp = new DescribeSessionDetailResponse();
        this.request("DescribeSessionDetail", req, resp, cb);
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
     * Obtain AI call content extraction result
     * @param {DescribeAICallExtractResultRequest} req
     * @param {function(string, DescribeAICallExtractResultResponse):void} cb
     * @public
     */
    DescribeAICallExtractResult(req, cb) {
        let resp = new DescribeAICallExtractResultResponse();
        this.request("DescribeAICallExtractResult", req, resp, cb);
    }

    /**
     * Agent Cruise-style Outbound Call.
     * @param {CreateAgentCruiseDialingCampaignRequest} req
     * @param {function(string, CreateAgentCruiseDialingCampaignResponse):void} cb
     * @public
     */
    CreateAgentCruiseDialingCampaign(req, cb) {
        let resp = new CreateAgentCruiseDialingCampaignResponse();
        this.request("CreateAgentCruiseDialingCampaign", req, resp, cb);
    }

    /**
     * This API is used to get the list of Intelligent Agents.
     * @param {DescribeAIAgentInfoListRequest} req
     * @param {function(string, DescribeAIAgentInfoListResponse):void} cb
     * @public
     */
    DescribeAIAgentInfoList(req, cb) {
        let resp = new DescribeAIAgentInfoListResponse();
        this.request("DescribeAIAgentInfoList", req, resp, cb);
    }

    /**
     * Create customer's own number access review
     * @param {CreateOwnNumberApplyRequest} req
     * @param {function(string, CreateOwnNumberApplyResponse):void} cb
     * @public
     */
    CreateOwnNumberApply(req, cb) {
        let resp = new CreateOwnNumberApplyResponse();
        this.request("CreateOwnNumberApply", req, resp, cb);
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
     * Modify Agent's Password
     * @param {ModifyStaffPasswordRequest} req
     * @param {function(string, ModifyStaffPasswordResponse):void} cb
     * @public
     */
    ModifyStaffPassword(req, cb) {
        let resp = new ModifyStaffPasswordResponse();
        this.request("ModifyStaffPassword", req, resp, cb);
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
     * This API is used to bind a number to a callback API for incoming calls.
     * @param {BindNumberCallInInterfaceRequest} req
     * @param {function(string, BindNumberCallInInterfaceResponse):void} cb
     * @public
     */
    BindNumberCallInInterface(req, cb) {
        let resp = new BindNumberCallInInterfaceResponse();
        this.request("BindNumberCallInInterface", req, resp, cb);
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
     * Create a session associated with IVR. This feature is supported only in the Advanced Version. Currently, it supports inbound and automatic outbound IVR types. Upon receiving the request, TCCC will first attempt to call the callee, then enter the IVR flow.
     * @param {CreateIVRSessionRequest} req
     * @param {function(string, CreateIVRSessionResponse):void} cb
     * @public
     */
    CreateIVRSession(req, cb) {
        let resp = new CreateIVRSessionResponse();
        this.request("CreateIVRSession", req, resp, cb);
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
     * This API is used to create a user data signature.
     * @param {CreateUserSigRequest} req
     * @param {function(string, CreateUserSigResponse):void} cb
     * @public
     */
    CreateUserSig(req, cb) {
        let resp = new CreateUserSigResponse();
        this.request("CreateUserSig", req, resp, cb);
    }

    /**
     * Pull conversation recording for text information
     * @param {DescribeTelRecordAsrRequest} req
     * @param {function(string, DescribeTelRecordAsrResponse):void} cb
     * @public
     */
    DescribeTelRecordAsr(req, cb) {
        let resp = new DescribeTelRecordAsrResponse();
        this.request("DescribeTelRecordAsr", req, resp, cb);
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
     * This API is used to force customer service to go offline.
     * @param {ForceMemberOfflineRequest} req
     * @param {function(string, ForceMemberOfflineResponse):void} cb
     * @public
     */
    ForceMemberOffline(req, cb) {
        let resp = new ForceMemberOfflineResponse();
        this.request("ForceMemberOffline", req, resp, cb);
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
     * This API is used to initiate outbound calls using an AI model, limited to owned phone numbers only. Currently, a limited-time free trial of Advanced Agents is available.

Before initiating a call, please ensure your AI model is compatible with OpenAI, Azure, or Minimax protocols, and visit the model provider's website to obtain relevant authentication information. For detailed feature descriptions, please refer to the documentation [Tencent Cloud Contact Center AI Call Platform](https://www.tencentcloud.com/document/product/1229/70681).
     * @param {CreateAIAgentCallRequest} req
     * @param {function(string, CreateAIAgentCallResponse):void} cb
     * @public
     */
    CreateAIAgentCall(req, cb) {
        let resp = new CreateAIAgentCallResponse();
        this.request("CreateAIAgentCall", req, resp, cb);
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
     * This API is used to restore customer service to go live.
     * @param {RestoreMemberOnlineRequest} req
     * @param {function(string, RestoreMemberOnlineResponse):void} cb
     * @public
     */
    RestoreMemberOnline(req, cb) {
        let resp = new RestoreMemberOnlineResponse();
        this.request("RestoreMemberOnline", req, resp, cb);
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
