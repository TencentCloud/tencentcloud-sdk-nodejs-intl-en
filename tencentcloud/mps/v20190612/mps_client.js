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
const MediaAiAnalysisFrameTagSegmentItem = models.MediaAiAnalysisFrameTagSegmentItem;
const ModifySnapshotByTimeOffsetTemplateResponse = models.ModifySnapshotByTimeOffsetTemplateResponse;
const ModifySampleSnapshotTemplateResponse = models.ModifySampleSnapshotTemplateResponse;
const LiveStreamAiReviewImagePornResult = models.LiveStreamAiReviewImagePornResult;
const ModifyWatermarkTemplateRequest = models.ModifyWatermarkTemplateRequest;
const CreateWordSamplesRequest = models.CreateWordSamplesRequest;
const AiAnalysisTaskFrameTagInput = models.AiAnalysisTaskFrameTagInput;
const ProhibitedAsrReviewTemplateInfo = models.ProhibitedAsrReviewTemplateInfo;
const DescribeImageSpriteTemplatesRequest = models.DescribeImageSpriteTemplatesRequest;
const AiRecognitionTaskAsrWordsResultItem = models.AiRecognitionTaskAsrWordsResultItem;
const AiRecognitionTaskAsrFullTextSegmentItem = models.AiRecognitionTaskAsrFullTextSegmentItem;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const ModifyAIRecognitionTemplateRequest = models.ModifyAIRecognitionTemplateRequest;
const MediaAiAnalysisTagItem = models.MediaAiAnalysisTagItem;
const AnimatedGraphicTaskInput = models.AnimatedGraphicTaskInput;
const PoliticalAsrReviewTemplateInfoForUpdate = models.PoliticalAsrReviewTemplateInfoForUpdate;
const TaskSimpleInfo = models.TaskSimpleInfo;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const LiveStreamAiRecognitionResultItem = models.LiveStreamAiRecognitionResultItem;
const AiSampleFaceOperation = models.AiSampleFaceOperation;
const AiAnalysisTaskClassificationInput = models.AiAnalysisTaskClassificationInput;
const AIAnalysisTemplateItem = models.AIAnalysisTemplateItem;
const WorkflowInfo = models.WorkflowInfo;
const CreateTranscodeTemplateRequest = models.CreateTranscodeTemplateRequest;
const ProcessLiveStreamResponse = models.ProcessLiveStreamResponse;
const AiSampleFailFaceInfo = models.AiSampleFailFaceInfo;
const DeleteWorkflowRequest = models.DeleteWorkflowRequest;
const AiRecognitionTaskOcrWordsResult = models.AiRecognitionTaskOcrWordsResult;
const PornAsrReviewTemplateInfo = models.PornAsrReviewTemplateInfo;
const RawImageWatermarkInput = models.RawImageWatermarkInput;
const DeleteAIAnalysisTemplateResponse = models.DeleteAIAnalysisTemplateResponse;
const AdaptiveDynamicStreamingTemplate = models.AdaptiveDynamicStreamingTemplate;
const OcrFullTextConfigureInfoForUpdate = models.OcrFullTextConfigureInfoForUpdate;
const DeleteAnimatedGraphicsTemplateResponse = models.DeleteAnimatedGraphicsTemplateResponse;
const ModifyContentReviewTemplateRequest = models.ModifyContentReviewTemplateRequest;
const AiSampleTagOperation = models.AiSampleTagOperation;
const AiRecognitionTaskAsrFullTextResultOutput = models.AiRecognitionTaskAsrFullTextResultOutput;
const DeleteImageSpriteTemplateResponse = models.DeleteImageSpriteTemplateResponse;
const DeleteAdaptiveDynamicStreamingTemplateRequest = models.DeleteAdaptiveDynamicStreamingTemplateRequest;
const AiRecognitionTaskOcrFullTextSegmentItem = models.AiRecognitionTaskOcrFullTextSegmentItem;
const ResetWorkflowResponse = models.ResetWorkflowResponse;
const PoliticalImgReviewTemplateInfo = models.PoliticalImgReviewTemplateInfo;
const CreateAIRecognitionTemplateResponse = models.CreateAIRecognitionTemplateResponse;
const ManageTaskResponse = models.ManageTaskResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const AiReviewTerrorismTaskOutput = models.AiReviewTerrorismTaskOutput;
const AiRecognitionTaskFaceResultInput = models.AiRecognitionTaskFaceResultInput;
const DescribeAIRecognitionTemplatesResponse = models.DescribeAIRecognitionTemplatesResponse;
const PornImgReviewTemplateInfo = models.PornImgReviewTemplateInfo;
const AiReviewPornAsrTaskOutput = models.AiReviewPornAsrTaskOutput;
const AiReviewTaskPoliticalResult = models.AiReviewTaskPoliticalResult;
const SvgWatermarkInputForUpdate = models.SvgWatermarkInputForUpdate;
const WorkflowTrigger = models.WorkflowTrigger;
const ProhibitedConfigureInfo = models.ProhibitedConfigureInfo;
const DeleteAIAnalysisTemplateRequest = models.DeleteAIAnalysisTemplateRequest;
const EditMediaRequest = models.EditMediaRequest;
const SampleSnapshotTemplate = models.SampleSnapshotTemplate;
const ModifySnapshotByTimeOffsetTemplateRequest = models.ModifySnapshotByTimeOffsetTemplateRequest;
const ModifySampleSnapshotTemplateRequest = models.ModifySampleSnapshotTemplateRequest;
const AiAnalysisResult = models.AiAnalysisResult;
const ManageTaskRequest = models.ManageTaskRequest;
const AiReviewPoliticalOcrTaskInput = models.AiReviewPoliticalOcrTaskInput;
const PornOcrReviewTemplateInfo = models.PornOcrReviewTemplateInfo;
const LiveStreamAiReviewResultItem = models.LiveStreamAiReviewResultItem;
const ImageWatermarkInputForUpdate = models.ImageWatermarkInputForUpdate;
const DescribeAIAnalysisTemplatesRequest = models.DescribeAIAnalysisTemplatesRequest;
const MediaInputInfo = models.MediaInputInfo;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const DescribeContentReviewTemplatesRequest = models.DescribeContentReviewTemplatesRequest;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const CreateWorkflowRequest = models.CreateWorkflowRequest;
const ParseLiveStreamProcessNotificationRequest = models.ParseLiveStreamProcessNotificationRequest;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const OcrFullTextConfigureInfo = models.OcrFullTextConfigureInfo;
const SnapshotByTimeOffsetTemplate = models.SnapshotByTimeOffsetTemplate;
const DeleteSnapshotByTimeOffsetTemplateResponse = models.DeleteSnapshotByTimeOffsetTemplateResponse;
const AiRecognitionTaskOcrWordsResultItem = models.AiRecognitionTaskOcrWordsResultItem;
const DescribeAdaptiveDynamicStreamingTemplatesResponse = models.DescribeAdaptiveDynamicStreamingTemplatesResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const FaceConfigureInfoForUpdate = models.FaceConfigureInfoForUpdate;
const CreateTranscodeTemplateResponse = models.CreateTranscodeTemplateResponse;
const AiAnalysisTaskTagInput = models.AiAnalysisTaskTagInput;
const MediaContentReviewOcrTextSegmentItem = models.MediaContentReviewOcrTextSegmentItem;
const AiReviewTaskPoliticalOcrResult = models.AiReviewTaskPoliticalOcrResult;
const AnimatedGraphicsTemplate = models.AnimatedGraphicsTemplate;
const PornAsrReviewTemplateInfoForUpdate = models.PornAsrReviewTemplateInfoForUpdate;
const AiSampleWord = models.AiSampleWord;
const CreateAIAnalysisTemplateRequest = models.CreateAIAnalysisTemplateRequest;
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const AiReviewTerrorismTaskInput = models.AiReviewTerrorismTaskInput;
const CreateImageSpriteTemplateRequest = models.CreateImageSpriteTemplateRequest;
const DescribeWorkflowsRequest = models.DescribeWorkflowsRequest;
const AsrFullTextConfigureInfoForUpdate = models.AsrFullTextConfigureInfoForUpdate;
const AiReviewTaskTerrorismResult = models.AiReviewTaskTerrorismResult;
const LiveStreamAiReviewImageTerrorismResult = models.LiveStreamAiReviewImageTerrorismResult;
const ProcessLiveStreamRequest = models.ProcessLiveStreamRequest;
const CreatePersonSampleResponse = models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models.CreateContentReviewTemplateResponse;
const CreateAdaptiveDynamicStreamingTemplateRequest = models.CreateAdaptiveDynamicStreamingTemplateRequest;
const TagConfigureInfoForUpdate = models.TagConfigureInfoForUpdate;
const DescribeTranscodeTemplatesResponse = models.DescribeTranscodeTemplatesResponse;
const ModifyImageSpriteTemplateRequest = models.ModifyImageSpriteTemplateRequest;
const ContentReviewTemplateItem = models.ContentReviewTemplateItem;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const DeletePersonSampleResponse = models.DeletePersonSampleResponse;
const DeleteAIRecognitionTemplateResponse = models.DeleteAIRecognitionTemplateResponse;
const DeleteWordSamplesRequest = models.DeleteWordSamplesRequest;
const LiveStreamAiRecognitionResultInfo = models.LiveStreamAiRecognitionResultInfo;
const DeleteContentReviewTemplateRequest = models.DeleteContentReviewTemplateRequest;
const CreateSnapshotByTimeOffsetTemplateResponse = models.CreateSnapshotByTimeOffsetTemplateResponse;
const DescribeWordSamplesRequest = models.DescribeWordSamplesRequest;
const ModifyAIAnalysisTemplateRequest = models.ModifyAIAnalysisTemplateRequest;
const DescribeWatermarkTemplatesRequest = models.DescribeWatermarkTemplatesRequest;
const AiReviewPoliticalTaskInput = models.AiReviewPoliticalTaskInput;
const ModifyContentReviewTemplateResponse = models.ModifyContentReviewTemplateResponse;
const PornConfigureInfoForUpdate = models.PornConfigureInfoForUpdate;
const AiRecognitionTaskOcrFullTextSegmentTextItem = models.AiRecognitionTaskOcrFullTextSegmentTextItem;
const AiContentReviewTaskInput = models.AiContentReviewTaskInput;
const WorkflowTask = models.WorkflowTask;
const DeleteImageSpriteTemplateRequest = models.DeleteImageSpriteTemplateRequest;
const CreateAdaptiveDynamicStreamingTemplateResponse = models.CreateAdaptiveDynamicStreamingTemplateResponse;
const CosOutputStorage = models.CosOutputStorage;
const DescribeSampleSnapshotTemplatesResponse = models.DescribeSampleSnapshotTemplatesResponse;
const AiAnalysisTaskClassificationOutput = models.AiAnalysisTaskClassificationOutput;
const SvgWatermarkInput = models.SvgWatermarkInput;
const AiReviewTaskPornOcrResult = models.AiReviewTaskPornOcrResult;
const ImageSpriteTemplate = models.ImageSpriteTemplate;
const AiAnalysisTaskCoverOutput = models.AiAnalysisTaskCoverOutput;
const ClassificationConfigureInfo = models.ClassificationConfigureInfo;
const LiveStreamAiReviewVoicePornResult = models.LiveStreamAiReviewVoicePornResult;
const MediaContentReviewSegmentItem = models.MediaContentReviewSegmentItem;
const ModifyWordSampleResponse = models.ModifyWordSampleResponse;
const AiContentReviewResult = models.AiContentReviewResult;
const AudioTemplateInfoForUpdate = models.AudioTemplateInfoForUpdate;
const SnapshotByTimeOffsetTaskInput = models.SnapshotByTimeOffsetTaskInput;
const TerrorismImgReviewTemplateInfo = models.TerrorismImgReviewTemplateInfo;
const TaskOutputStorage = models.TaskOutputStorage;
const DeletePersonSampleRequest = models.DeletePersonSampleRequest;
const ImageSpriteTaskInput = models.ImageSpriteTaskInput;
const UserDefineOcrTextReviewTemplateInfo = models.UserDefineOcrTextReviewTemplateInfo;
const AiRecognitionTaskAsrWordsSegmentItem = models.AiRecognitionTaskAsrWordsSegmentItem;
const DescribeImageSpriteTemplatesResponse = models.DescribeImageSpriteTemplatesResponse;
const ParseLiveStreamProcessNotificationResponse = models.ParseLiveStreamProcessNotificationResponse;
const LiveStreamAsrFullTextRecognitionResult = models.LiveStreamAsrFullTextRecognitionResult;
const DescribeTranscodeTemplatesRequest = models.DescribeTranscodeTemplatesRequest;
const AiReviewPornOcrTaskOutput = models.AiReviewPornOcrTaskOutput;
const CreateSampleSnapshotTemplateResponse = models.CreateSampleSnapshotTemplateResponse;
const AiRecognitionTaskInput = models.AiRecognitionTaskInput;
const AiReviewPornOcrTaskInput = models.AiReviewPornOcrTaskInput;
const OcrWordsConfigureInfo = models.OcrWordsConfigureInfo;
const DisableWorkflowRequest = models.DisableWorkflowRequest;
const AiAnalysisTaskFrameTagOutput = models.AiAnalysisTaskFrameTagOutput;
const PoliticalConfigureInfoForUpdate = models.PoliticalConfigureInfoForUpdate;
const AudioTemplateInfo = models.AudioTemplateInfo;
const DescribeContentReviewTemplatesResponse = models.DescribeContentReviewTemplatesResponse;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const CoverConfigureInfo = models.CoverConfigureInfo;
const MediaProcessTaskAnimatedGraphicResult = models.MediaProcessTaskAnimatedGraphicResult;
const DeleteAdaptiveDynamicStreamingTemplateResponse = models.DeleteAdaptiveDynamicStreamingTemplateResponse;
const TaskNotifyConfig = models.TaskNotifyConfig;
const ModifyWordSampleRequest = models.ModifyWordSampleRequest;
const AIRecognitionTemplateItem = models.AIRecognitionTemplateItem;
const AiReviewPornAsrTaskInput = models.AiReviewPornAsrTaskInput;
const AiRecognitionTaskFaceSegmentItem = models.AiRecognitionTaskFaceSegmentItem;
const CreateAnimatedGraphicsTemplateRequest = models.CreateAnimatedGraphicsTemplateRequest;
const FrameTagConfigureInfo = models.FrameTagConfigureInfo;
const DescribeAnimatedGraphicsTemplatesRequest = models.DescribeAnimatedGraphicsTemplatesRequest;
const AiAnalysisTaskTagResult = models.AiAnalysisTaskTagResult;
const PornOcrReviewTemplateInfoForUpdate = models.PornOcrReviewTemplateInfoForUpdate;
const ModifyAIAnalysisTemplateResponse = models.ModifyAIAnalysisTemplateResponse;
const TerrorismImgReviewTemplateInfoForUpdate = models.TerrorismImgReviewTemplateInfoForUpdate;
const ModifyPersonSampleResponse = models.ModifyPersonSampleResponse;
const ModifyTranscodeTemplateRequest = models.ModifyTranscodeTemplateRequest;
const UserDefineConfigureInfo = models.UserDefineConfigureInfo;
const NumberFormat = models.NumberFormat;
const AiAnalysisTaskTagOutput = models.AiAnalysisTaskTagOutput;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const AiReviewTaskPoliticalAsrResult = models.AiReviewTaskPoliticalAsrResult;
const MediaTranscodeItem = models.MediaTranscodeItem;
const ModifyAdaptiveDynamicStreamingTemplateRequest = models.ModifyAdaptiveDynamicStreamingTemplateRequest;
const VideoTemplateInfo = models.VideoTemplateInfo;
const DescribePersonSamplesResponse = models.DescribePersonSamplesResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models.CreateSnapshotByTimeOffsetTemplateRequest;
const TextWatermarkTemplateInputForUpdate = models.TextWatermarkTemplateInputForUpdate;
const LiveStreamProcessTask = models.LiveStreamProcessTask;
const PornConfigureInfo = models.PornConfigureInfo;
const DescribeMediaMetaDataResponse = models.DescribeMediaMetaDataResponse;
const AiRecognitionTaskOcrWordsResultInput = models.AiRecognitionTaskOcrWordsResultInput;
const DeleteWorkflowResponse = models.DeleteWorkflowResponse;
const WatermarkTemplate = models.WatermarkTemplate;
const ModifyImageSpriteTemplateResponse = models.ModifyImageSpriteTemplateResponse;
const UserDefineFaceReviewTemplateInfoForUpdate = models.UserDefineFaceReviewTemplateInfoForUpdate;
const DescribeAIAnalysisTemplatesResponse = models.DescribeAIAnalysisTemplatesResponse;
const AiReviewTaskPornResult = models.AiReviewTaskPornResult;
const DeleteSampleSnapshotTemplateResponse = models.DeleteSampleSnapshotTemplateResponse;
const UserDefineFaceReviewTemplateInfo = models.UserDefineFaceReviewTemplateInfo;
const AiRecognitionTaskOcrFullTextResult = models.AiRecognitionTaskOcrFullTextResult;
const AiRecognitionTaskAsrWordsResult = models.AiRecognitionTaskAsrWordsResult;
const AiReviewPornTaskInput = models.AiReviewPornTaskInput;
const LiveStreamFaceRecognitionResult = models.LiveStreamFaceRecognitionResult;
const CreateSampleSnapshotTemplateRequest = models.CreateSampleSnapshotTemplateRequest;
const UserDefineAsrTextReviewTemplateInfo = models.UserDefineAsrTextReviewTemplateInfo;
const DescribeSampleSnapshotTemplatesRequest = models.DescribeSampleSnapshotTemplatesRequest;
const CoverConfigureInfoForUpdate = models.CoverConfigureInfoForUpdate;
const DisableWorkflowResponse = models.DisableWorkflowResponse;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const CreatePersonSampleRequest = models.CreatePersonSampleRequest;
const AiReviewTaskPornAsrResult = models.AiReviewTaskPornAsrResult;
const PoliticalImgReviewTemplateInfoForUpdate = models.PoliticalImgReviewTemplateInfoForUpdate;
const EditMediaFileInfo = models.EditMediaFileInfo;
const MediaAiAnalysisCoverItem = models.MediaAiAnalysisCoverItem;
const AdaptiveStreamTemplate = models.AdaptiveStreamTemplate;
const CosInputInfo = models.CosInputInfo;
const TagConfigureInfo = models.TagConfigureInfo;
const TranscodeTaskInput = models.TranscodeTaskInput;
const DescribeWordSamplesResponse = models.DescribeWordSamplesResponse;
const FaceConfigureInfo = models.FaceConfigureInfo;
const AiRecognitionTaskFaceResultOutput = models.AiRecognitionTaskFaceResultOutput;
const ParseNotificationResponse = models.ParseNotificationResponse;
const PornImgReviewTemplateInfoForUpdate = models.PornImgReviewTemplateInfoForUpdate;
const DeleteAIRecognitionTemplateRequest = models.DeleteAIRecognitionTemplateRequest;
const DescribeAdaptiveDynamicStreamingTemplatesRequest = models.DescribeAdaptiveDynamicStreamingTemplatesRequest;
const CreateWatermarkTemplateResponse = models.CreateWatermarkTemplateResponse;
const ModifyAnimatedGraphicsTemplateResponse = models.ModifyAnimatedGraphicsTemplateResponse;
const ResetWorkflowRequest = models.ResetWorkflowRequest;
const AiAnalysisTaskCoverResult = models.AiAnalysisTaskCoverResult;
const AiReviewPoliticalOcrTaskOutput = models.AiReviewPoliticalOcrTaskOutput;
const AiRecognitionTaskAsrWordsResultOutput = models.AiRecognitionTaskAsrWordsResultOutput;
const AiRecognitionTaskOcrFullTextResultInput = models.AiRecognitionTaskOcrFullTextResultInput;
const LiveStreamOcrWordsRecognitionResult = models.LiveStreamOcrWordsRecognitionResult;
const LiveStreamProcessErrorInfo = models.LiveStreamProcessErrorInfo;
const EnableWorkflowRequest = models.EnableWorkflowRequest;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const DescribeWatermarkTemplatesResponse = models.DescribeWatermarkTemplatesResponse;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const AiAnalysisTaskInput = models.AiAnalysisTaskInput;
const DeleteAnimatedGraphicsTemplateRequest = models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models.DeleteSnapshotByTimeOffsetTemplateRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models.DescribeAnimatedGraphicsTemplatesResponse;
const RawWatermarkParameter = models.RawWatermarkParameter;
const MediaAiAnalysisFrameTagItem = models.MediaAiAnalysisFrameTagItem;
const DeleteContentReviewTemplateResponse = models.DeleteContentReviewTemplateResponse;
const TerrorismConfigureInfoForUpdate = models.TerrorismConfigureInfoForUpdate;
const MediaContentReviewPoliticalSegmentItem = models.MediaContentReviewPoliticalSegmentItem;
const CreateAIAnalysisTemplateResponse = models.CreateAIAnalysisTemplateResponse;
const MediaProcessTaskSampleSnapshotResult = models.MediaProcessTaskSampleSnapshotResult;
const AiRecognitionTaskOcrFullTextResultOutput = models.AiRecognitionTaskOcrFullTextResultOutput;
const ImageWatermarkTemplate = models.ImageWatermarkTemplate;
const ImageWatermarkInput = models.ImageWatermarkInput;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const AsrWordsConfigureInfo = models.AsrWordsConfigureInfo;
const CosFileUploadTrigger = models.CosFileUploadTrigger;
const AiRecognitionTaskOcrWordsResultOutput = models.AiRecognitionTaskOcrWordsResultOutput;
const AiSampleFaceInfo = models.AiSampleFaceInfo;
const LiveStreamAsrWordsRecognitionResult = models.LiveStreamAsrWordsRecognitionResult;
const AiReviewPoliticalAsrTaskOutput = models.AiReviewPoliticalAsrTaskOutput;
const UserDefineConfigureInfoForUpdate = models.UserDefineConfigureInfoForUpdate;
const DeleteSampleSnapshotTemplateRequest = models.DeleteSampleSnapshotTemplateRequest;
const TerrorismConfigureInfo = models.TerrorismConfigureInfo;
const TEHDConfigForUpdate = models.TEHDConfigForUpdate;
const TranscodeTemplate = models.TranscodeTemplate;
const AiSamplePerson = models.AiSamplePerson;
const CreateAnimatedGraphicsTemplateResponse = models.CreateAnimatedGraphicsTemplateResponse;
const MediaProcessTaskAdaptiveDynamicStreamingResult = models.MediaProcessTaskAdaptiveDynamicStreamingResult;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const AiAnalysisTaskClassificationResult = models.AiAnalysisTaskClassificationResult;
const PoliticalOcrReviewTemplateInfo = models.PoliticalOcrReviewTemplateInfo;
const AiReviewPoliticalAsrTaskInput = models.AiReviewPoliticalAsrTaskInput;
const AsrFullTextConfigureInfo = models.AsrFullTextConfigureInfo;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const DescribeWorkflowsResponse = models.DescribeWorkflowsResponse;
const DescribePersonSamplesRequest = models.DescribePersonSamplesRequest;
const AsrWordsConfigureInfoForUpdate = models.AsrWordsConfigureInfoForUpdate;
const AiRecognitionTaskFaceResultItem = models.AiRecognitionTaskFaceResultItem;
const PoliticalAsrReviewTemplateInfo = models.PoliticalAsrReviewTemplateInfo;
const AiAnalysisTaskCoverInput = models.AiAnalysisTaskCoverInput;
const CreateAIRecognitionTemplateRequest = models.CreateAIRecognitionTemplateRequest;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const MediaAiAnalysisClassificationItem = models.MediaAiAnalysisClassificationItem;
const AiAnalysisTaskFrameTagResult = models.AiAnalysisTaskFrameTagResult;
const AiReviewPornTaskOutput = models.AiReviewPornTaskOutput;
const CreateWorkflowResponse = models.CreateWorkflowResponse;
const LiveStreamAiReviewResultInfo = models.LiveStreamAiReviewResultInfo;
const EditMediaResponse = models.EditMediaResponse;
const AiRecognitionTaskAsrFullTextResult = models.AiRecognitionTaskAsrFullTextResult;
const PoliticalOcrReviewTemplateInfoForUpdate = models.PoliticalOcrReviewTemplateInfoForUpdate;
const ModifyAIRecognitionTemplateResponse = models.ModifyAIRecognitionTemplateResponse;
const AiRecognitionTaskAsrWordsResultInput = models.AiRecognitionTaskAsrWordsResultInput;
const CreateImageSpriteTemplateResponse = models.CreateImageSpriteTemplateResponse;
const ModifyAnimatedGraphicsTemplateRequest = models.ModifyAnimatedGraphicsTemplateRequest;
const LiveStreamTaskNotifyConfig = models.LiveStreamTaskNotifyConfig;
const TEHDConfig = models.TEHDConfig;
const PoliticalConfigureInfo = models.PoliticalConfigureInfo;
const AiRecognitionTaskOcrWordsSegmentItem = models.AiRecognitionTaskOcrWordsSegmentItem;
const WatermarkInput = models.WatermarkInput;
const LiveStreamAiReviewImagePoliticalResult = models.LiveStreamAiReviewImagePoliticalResult;
const DeleteWordSamplesResponse = models.DeleteWordSamplesResponse;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const ModifyPersonSampleRequest = models.ModifyPersonSampleRequest;
const ProcessMediaRequest = models.ProcessMediaRequest;
const EnableWorkflowResponse = models.EnableWorkflowResponse;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const AdaptiveDynamicStreamingTaskInput = models.AdaptiveDynamicStreamingTaskInput;
const AiSampleWordInfo = models.AiSampleWordInfo;
const MediaContentReviewAsrTextSegmentItem = models.MediaContentReviewAsrTextSegmentItem;
const AdaptiveDynamicStreamingInfoItem = models.AdaptiveDynamicStreamingInfoItem;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const RawTranscodeParameter = models.RawTranscodeParameter;
const ProhibitedOcrReviewTemplateInfo = models.ProhibitedOcrReviewTemplateInfo;
const LiveStreamOcrFullTextRecognitionResult = models.LiveStreamOcrFullTextRecognitionResult;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const DeleteWatermarkTemplateRequest = models.DeleteWatermarkTemplateRequest;
const AiRecognitionTaskAsrFullTextResultInput = models.AiRecognitionTaskAsrFullTextResultInput;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const MediaMetaData = models.MediaMetaData;
const ProcessMediaResponse = models.ProcessMediaResponse;
const OcrWordsConfigureInfoForUpdate = models.OcrWordsConfigureInfoForUpdate;
const VideoTemplateInfoForUpdate = models.VideoTemplateInfoForUpdate;
const TextWatermarkTemplateInput = models.TextWatermarkTemplateInput;
const SampleSnapshotTaskInput = models.SampleSnapshotTaskInput;
const ParseNotificationRequest = models.ParseNotificationRequest;
const DescribeMediaMetaDataRequest = models.DescribeMediaMetaDataRequest;
const FrameTagConfigureInfoForUpdate = models.FrameTagConfigureInfoForUpdate;
const CreateContentReviewTemplateRequest = models.CreateContentReviewTemplateRequest;
const DescribeAIRecognitionTemplatesRequest = models.DescribeAIRecognitionTemplatesRequest;
const AiReviewPoliticalTaskOutput = models.AiReviewPoliticalTaskOutput;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const AiRecognitionTaskFaceResult = models.AiRecognitionTaskFaceResult;
const ModifyWatermarkTemplateResponse = models.ModifyWatermarkTemplateResponse;
const CreateWordSamplesResponse = models.CreateWordSamplesResponse;
const ClassificationConfigureInfoForUpdate = models.ClassificationConfigureInfoForUpdate;
const AiRecognitionResult = models.AiRecognitionResult;


/**
 * mps client
 * @class
 */
class MpsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mps.tencentcloudapi.com", "2019-06-12", credential, region, profile);
    }
    
    /**
     * This API is used to create a custom time point screencapturing template. Up to 16 templates can be created.
     * @param {CreateSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, CreateSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    CreateSnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new CreateSnapshotByTimeOffsetTemplateResponse();
        this.request("CreateSnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * This API is used to parse the content of an MPS event notification from the `msgBody` field in the message received from CMQ.
Instead of initiating a video processing task, this API is used to help generate SDKs for various programming languages. You can parse the event notification based on the analytic function of the SDKs.
     * @param {ParseNotificationRequest} req
     * @param {function(string, ParseNotificationResponse):void} cb
     * @public
     */
    ParseNotification(req, cb) {
        let resp = new ParseNotificationResponse();
        this.request("ParseNotification", req, resp, cb);
    }

    /**
     * This API is used to modify a custom content audit template.
     * @param {ModifyContentReviewTemplateRequest} req
     * @param {function(string, ModifyContentReviewTemplateResponse):void} cb
     * @public
     */
    ModifyContentReviewTemplate(req, cb) {
        let resp = new ModifyContentReviewTemplateResponse();
        this.request("ModifyContentReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a custom content audit template. Up to 50 templates can be created.
     * @param {CreateContentReviewTemplateRequest} req
     * @param {function(string, CreateContentReviewTemplateResponse):void} cb
     * @public
     */
    CreateContentReviewTemplate(req, cb) {
        let resp = new CreateContentReviewTemplateResponse();
        this.request("CreateContentReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a custom sampled screencapturing template. Up to 16 templates can be created.
     * @param {CreateSampleSnapshotTemplateRequest} req
     * @param {function(string, CreateSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    CreateSampleSnapshotTemplate(req, cb) {
        let resp = new CreateSampleSnapshotTemplateResponse();
        this.request("CreateSampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * This API is used to edit a video (by clipping, splicing, etc.) to generate a new VOD video. Editing features include:

1. Clipping a file to generate a new video;
2. Splicing multiple files to generate a new video;
3. Clipping multiple files and then splicing the clips to generate a new video.
     * @param {EditMediaRequest} req
     * @param {function(string, EditMediaResponse):void} cb
     * @public
     */
    EditMedia(req, cb) {
        let resp = new EditMediaResponse();
        this.request("EditMedia", req, resp, cb);
    }

    /**
     * This API is used to delete a custom content analysis template.

Note: templates with an ID below 10000 are preset and cannot be deleted.
     * @param {DeleteAIAnalysisTemplateRequest} req
     * @param {function(string, DeleteAIAnalysisTemplateResponse):void} cb
     * @public
     */
    DeleteAIAnalysisTemplate(req, cb) {
        let resp = new DeleteAIAnalysisTemplateResponse();
        this.request("DeleteAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * This API is used to parse the content of an MPS live stream processing event notification from the `msgBody` field in the message received from CMQ.
Instead of initiating a video processing task, this API is used to help generate SDKs for various programming languages. You can parse the event notification based on the analytic function of the SDKs.
     * @param {ParseLiveStreamProcessNotificationRequest} req
     * @param {function(string, ParseLiveStreamProcessNotificationResponse):void} cb
     * @public
     */
    ParseLiveStreamProcessNotification(req, cb) {
        let resp = new ParseLiveStreamProcessNotificationResponse();
        this.request("ParseLiveStreamProcessNotification", req, resp, cb);
    }

    /**
     * This API is used to get the list of workflow details by workflow ID.
     * @param {DescribeWorkflowsRequest} req
     * @param {function(string, DescribeWorkflowsResponse):void} cb
     * @public
     */
    DescribeWorkflows(req, cb) {
        let resp = new DescribeWorkflowsResponse();
        this.request("DescribeWorkflows", req, resp, cb);
    }

    /**
     * This API is used to query the list of time point screencapturing templates and supports paged queries by filters.
     * @param {DescribeSnapshotByTimeOffsetTemplatesRequest} req
     * @param {function(string, DescribeSnapshotByTimeOffsetTemplatesResponse):void} cb
     * @public
     */
    DescribeSnapshotByTimeOffsetTemplates(req, cb) {
        let resp = new DescribeSnapshotByTimeOffsetTemplatesResponse();
        this.request("DescribeSnapshotByTimeOffsetTemplates", req, resp, cb);
    }

    /**
     * This API is used to get the metadata of media, such as video image width/height, codec, length, and frame rate.
     * @param {DescribeMediaMetaDataRequest} req
     * @param {function(string, DescribeMediaMetaDataResponse):void} cb
     * @public
     */
    DescribeMediaMetaData(req, cb) {
        let resp = new DescribeMediaMetaDataResponse();
        this.request("DescribeMediaMetaData", req, resp, cb);
    }

    /**
     * This API is used to reset an existing workflow that is disabled.
     * @param {ResetWorkflowRequest} req
     * @param {function(string, ResetWorkflowResponse):void} cb
     * @public
     */
    ResetWorkflow(req, cb) {
        let resp = new ResetWorkflowResponse();
        this.request("ResetWorkflow", req, resp, cb);
    }

    /**
     * This API is used to modify a custom transcoding template.
     * @param {ModifyTranscodeTemplateRequest} req
     * @param {function(string, ModifyTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyTranscodeTemplate(req, cb) {
        let resp = new ModifyTranscodeTemplateResponse();
        this.request("ModifyTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a custom animated image generating template.
     * @param {DeleteAnimatedGraphicsTemplateRequest} req
     * @param {function(string, DeleteAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    DeleteAnimatedGraphicsTemplate(req, cb) {
        let resp = new DeleteAnimatedGraphicsTemplateResponse();
        this.request("DeleteAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the list of content analysis templates based on unique template ID. The returned result includes all eligible custom and preset video content analysis templates.
     * @param {DescribeAIAnalysisTemplatesRequest} req
     * @param {function(string, DescribeAIAnalysisTemplatesResponse):void} cb
     * @public
     */
    DescribeAIAnalysisTemplates(req, cb) {
        let resp = new DescribeAIAnalysisTemplatesResponse();
        this.request("DescribeAIAnalysisTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the details of execution status and result of a task submitted in the last 3 days by task ID.
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     * This API is used to modify a custom content recognition template.
     * @param {ModifyAIRecognitionTemplateRequest} req
     * @param {function(string, ModifyAIRecognitionTemplateResponse):void} cb
     * @public
     */
    ModifyAIRecognitionTemplate(req, cb) {
        let resp = new ModifyAIRecognitionTemplateResponse();
        this.request("ModifyAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify an adaptive bitrate streaming template.
     * @param {ModifyAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, ModifyAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    ModifyAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new ModifyAdaptiveDynamicStreamingTemplateResponse();
        this.request("ModifyAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify a custom sampled screencapturing template.
     * @param {ModifySampleSnapshotTemplateRequest} req
     * @param {function(string, ModifySampleSnapshotTemplateResponse):void} cb
     * @public
     */
    ModifySampleSnapshotTemplate(req, cb) {
        let resp = new ModifySampleSnapshotTemplateResponse();
        this.request("ModifySampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a custom watermarking template.
     * @param {DeleteWatermarkTemplateRequest} req
     * @param {function(string, DeleteWatermarkTemplateResponse):void} cb
     * @public
     */
    DeleteWatermarkTemplate(req, cb) {
        let resp = new DeleteWatermarkTemplateResponse();
        this.request("DeleteWatermarkTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a figure sample based on figure ID.
     * @param {DeletePersonSampleRequest} req
     * @param {function(string, DeletePersonSampleResponse):void} cb
     * @public
     */
    DeletePersonSample(req, cb) {
        let resp = new DeletePersonSampleResponse();
        this.request("DeletePersonSample", req, resp, cb);
    }

    /**
     * This API is used to delete a custom transcoding template.
     * @param {DeleteTranscodeTemplateRequest} req
     * @param {function(string, DeleteTranscodeTemplateResponse):void} cb
     * @public
     */
    DeleteTranscodeTemplate(req, cb) {
        let resp = new DeleteTranscodeTemplateResponse();
        this.request("DeleteTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a custom time point screencapturing template.
     * @param {DeleteSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, DeleteSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    DeleteSnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new DeleteSnapshotByTimeOffsetTemplateResponse();
        this.request("DeleteSnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify a custom animated image generating template.
     * @param {ModifyAnimatedGraphicsTemplateRequest} req
     * @param {function(string, ModifyAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    ModifyAnimatedGraphicsTemplate(req, cb) {
        let resp = new ModifyAnimatedGraphicsTemplateResponse();
        this.request("ModifyAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * This API is used to perform paged queries of keyword sample information by use case, keyword, and tag.
     * @param {DescribeWordSamplesRequest} req
     * @param {function(string, DescribeWordSamplesResponse):void} cb
     * @public
     */
    DescribeWordSamples(req, cb) {
        let resp = new DescribeWordSamplesResponse();
        this.request("DescribeWordSamples", req, resp, cb);
    }

    /**
     * This API is used to modify a custom watermarking template. The watermark type cannot be modified.
     * @param {ModifyWatermarkTemplateRequest} req
     * @param {function(string, ModifyWatermarkTemplateResponse):void} cb
     * @public
     */
    ModifyWatermarkTemplate(req, cb) {
        let resp = new ModifyWatermarkTemplateResponse();
        this.request("ModifyWatermarkTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete keyword samples in batches.
     * @param {DeleteWordSamplesRequest} req
     * @param {function(string, DeleteWordSamplesResponse):void} cb
     * @public
     */
    DeleteWordSamples(req, cb) {
        let resp = new DeleteWordSamplesResponse();
        this.request("DeleteWordSamples", req, resp, cb);
    }

    /**
     * This API is used to delete a workflow. An enabled workflow must be disabled before it can be deleted.
     * @param {DeleteWorkflowRequest} req
     * @param {function(string, DeleteWorkflowResponse):void} cb
     * @public
     */
    DeleteWorkflow(req, cb) {
        let resp = new DeleteWorkflowResponse();
        this.request("DeleteWorkflow", req, resp, cb);
    }

    /**
     * This API is used to delete an adaptive bitrate streaming template.
     * @param {DeleteAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, DeleteAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    DeleteAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new DeleteAdaptiveDynamicStreamingTemplateResponse();
        this.request("DeleteAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }

    /**
     * This API is used to create up to 100 adaptive bitrate streaming templates.
     * @param {CreateAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, CreateAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    CreateAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new CreateAdaptiveDynamicStreamingTemplateResponse();
        this.request("CreateAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }

    /**
     * This API is used to disable a workflow.
     * @param {DisableWorkflowRequest} req
     * @param {function(string, DisableWorkflowResponse):void} cb
     * @public
     */
    DisableWorkflow(req, cb) {
        let resp = new DisableWorkflowResponse();
        this.request("DisableWorkflow", req, resp, cb);
    }

    /**
     * This API is used to query the list of sampled screencapturing templates and supports paged queries by filters.
     * @param {DescribeSampleSnapshotTemplatesRequest} req
     * @param {function(string, DescribeSampleSnapshotTemplatesResponse):void} cb
     * @public
     */
    DescribeSampleSnapshotTemplates(req, cb) {
        let resp = new DescribeSampleSnapshotTemplatesResponse();
        this.request("DescribeSampleSnapshotTemplates", req, resp, cb);
    }

    /**
     * This API is used to create a custom watermarking template. Up to 1,000 templates can be created.
     * @param {CreateWatermarkTemplateRequest} req
     * @param {function(string, CreateWatermarkTemplateResponse):void} cb
     * @public
     */
    CreateWatermarkTemplate(req, cb) {
        let resp = new CreateWatermarkTemplateResponse();
        this.request("CreateWatermarkTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the information of figure samples and supports paged queries by figure ID, name, and tag.
     * @param {DescribePersonSamplesRequest} req
     * @param {function(string, DescribePersonSamplesResponse):void} cb
     * @public
     */
    DescribePersonSamples(req, cb) {
        let resp = new DescribePersonSamplesResponse();
        this.request("DescribePersonSamples", req, resp, cb);
    }

    /**
     * This API is used to delete a custom sampled screencapturing template.
     * @param {DeleteSampleSnapshotTemplateRequest} req
     * @param {function(string, DeleteSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    DeleteSampleSnapshotTemplate(req, cb) {
        let resp = new DeleteSampleSnapshotTemplateResponse();
        this.request("DeleteSampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a custom content recognition template.
     * @param {DeleteAIRecognitionTemplateRequest} req
     * @param {function(string, DeleteAIRecognitionTemplateResponse):void} cb
     * @public
     */
    DeleteAIRecognitionTemplate(req, cb) {
        let resp = new DeleteAIRecognitionTemplateResponse();
        this.request("DeleteAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a custom animated image generating template. Up to 16 templates can be created.
     * @param {CreateAnimatedGraphicsTemplateRequest} req
     * @param {function(string, CreateAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    CreateAnimatedGraphicsTemplate(req, cb) {
        let resp = new CreateAnimatedGraphicsTemplateResponse();
        this.request("CreateAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the list of animated image generating templates and supports paged queries by filters.
     * @param {DescribeAnimatedGraphicsTemplatesRequest} req
     * @param {function(string, DescribeAnimatedGraphicsTemplatesResponse):void} cb
     * @public
     */
    DescribeAnimatedGraphicsTemplates(req, cb) {
        let resp = new DescribeAnimatedGraphicsTemplatesResponse();
        this.request("DescribeAnimatedGraphicsTemplates", req, resp, cb);
    }

    /**
     * This API is used to enable a workflow.
     * @param {EnableWorkflowRequest} req
     * @param {function(string, EnableWorkflowResponse):void} cb
     * @public
     */
    EnableWorkflow(req, cb) {
        let resp = new EnableWorkflowResponse();
        this.request("EnableWorkflow", req, resp, cb);
    }

    /**
     * This API is used to manage an initiated task.
> Note: currently, you can only terminate an ongoing live stream processing task.
     * @param {ManageTaskRequest} req
     * @param {function(string, ManageTaskResponse):void} cb
     * @public
     */
    ManageTask(req, cb) {
        let resp = new ManageTaskResponse();
        this.request("ManageTask", req, resp, cb);
    }

    /**
     * This API is used to modify a custom content analysis template.

Note: templates with an ID below 10000 are preset and cannot be modified.
     * @param {ModifyAIAnalysisTemplateRequest} req
     * @param {function(string, ModifyAIAnalysisTemplateResponse):void} cb
     * @public
     */
    ModifyAIAnalysisTemplate(req, cb) {
        let resp = new ModifyAIAnalysisTemplateResponse();
        this.request("ModifyAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * * This API is used to query the task list;
* If there are many data entries in the list, one single call of the API may not be able to pull the entire list. The `ScrollToken` parameter can be used to pull the list in batches;
* Only tasks in the last three days (72 hours) can be queried.
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * This API is used to modify a custom time point screencapturing template.
     * @param {ModifySnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, ModifySnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    ModifySnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new ModifySnapshotByTimeOffsetTemplateResponse();
        this.request("ModifySnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * This API is used to create keyword samples in batches for video processing operations such as content recognition and audit using the OCR and ASR technologies.
     * @param {CreateWordSamplesRequest} req
     * @param {function(string, CreateWordSamplesResponse):void} cb
     * @public
     */
    CreateWordSamples(req, cb) {
        let resp = new CreateWordSamplesResponse();
        this.request("CreateWordSamples", req, resp, cb);
    }

    /**
     * This API is used to create a figure sample for video processing operations such as content recognition and audit using the face recognition technology.
     * @param {CreatePersonSampleRequest} req
     * @param {function(string, CreatePersonSampleResponse):void} cb
     * @public
     */
    CreatePersonSample(req, cb) {
        let resp = new CreatePersonSampleResponse();
        this.request("CreatePersonSample", req, resp, cb);
    }

    /**
     * This API is used to modify figure sample information based on figure ID, such as modifying the name and description and adding/deleting/resetting a face or tag. There should be at least one image left after the face deletion operation; otherwise, please use the reset operation.
     * @param {ModifyPersonSampleRequest} req
     * @param {function(string, ModifyPersonSampleResponse):void} cb
     * @public
     */
    ModifyPersonSample(req, cb) {
        let resp = new ModifyPersonSampleResponse();
        this.request("ModifyPersonSample", req, resp, cb);
    }

    /**
     * This API is used to create a custom transcoding template. Up to 1,000 templates can be created.
     * @param {CreateTranscodeTemplateRequest} req
     * @param {function(string, CreateTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateTranscodeTemplate(req, cb) {
        let resp = new CreateTranscodeTemplateResponse();
        this.request("CreateTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to set a processing rule for media files uploaded to the specified directory of a COS bucket, including:
1. Video transcoding (with watermark);
2. Animated image generating;
3. Time point screencapturing;
4. Sampled screencapturing;
5. Image sprite generating;
6. Video conversion to adaptive bitrate streaming;
7. Intelligent content audit (detection of porn, terrorism, and politically sensitive information);
8. Intelligent content recognition (face recognition, full text recognition, text keyword recognition, full speech recognition, and speech keyword recognition).

Note: Once successfully created, a workflow is disabled by default and needs to be enabled manually.
     * @param {CreateWorkflowRequest} req
     * @param {function(string, CreateWorkflowResponse):void} cb
     * @public
     */
    CreateWorkflow(req, cb) {
        let resp = new CreateWorkflowResponse();
        this.request("CreateWorkflow", req, resp, cb);
    }

    /**
     * This API is used to initiate a processing task for a live streaming media file, including:

* Intelligent content audit (detection of porn, terrorism, and politically sensitive information in image and porn information in speech);

The live stream processing event notification is written into the specified CMQ queue in real time. You need to obtain the event notification result from CMQ. If a file is output during video processing, it will be written into the specified target bucket.
     * @param {ProcessLiveStreamRequest} req
     * @param {function(string, ProcessLiveStreamResponse):void} cb
     * @public
     */
    ProcessLiveStream(req, cb) {
        let resp = new ProcessLiveStreamResponse();
        this.request("ProcessLiveStream", req, resp, cb);
    }

    /**
     * This API is used to query the list of adaptive bitrate streaming templates and supports paginated queries by filters.
     * @param {DescribeAdaptiveDynamicStreamingTemplatesRequest} req
     * @param {function(string, DescribeAdaptiveDynamicStreamingTemplatesResponse):void} cb
     * @public
     */
    DescribeAdaptiveDynamicStreamingTemplates(req, cb) {
        let resp = new DescribeAdaptiveDynamicStreamingTemplatesResponse();
        this.request("DescribeAdaptiveDynamicStreamingTemplates", req, resp, cb);
    }

    /**
     * This API is used to initiate a processing task for media files in COS, including:
1. Video transcoding (with watermark);
2. Animated image generating;
3. Time point screencapturing;
4. Sampled screencapturing;
5. Image sprite generating;
6. Video conversion to adaptive bitrate streaming;
7. Intelligent content audit (detection of porn, terrorism, and politically sensitive information);
8. Intelligent content recognition (face recognition, full text recognition, text keyword recognition, full speech recognition, and speech keyword recognition).
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        let resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
    }

    /**
     * This API is used to create a custom content recognition template. Up to 50 templates can be created.
     * @param {CreateAIRecognitionTemplateRequest} req
     * @param {function(string, CreateAIRecognitionTemplateResponse):void} cb
     * @public
     */
    CreateAIRecognitionTemplate(req, cb) {
        let resp = new CreateAIRecognitionTemplateResponse();
        this.request("CreateAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify a custom image sprite generating template.
     * @param {ModifyImageSpriteTemplateRequest} req
     * @param {function(string, ModifyImageSpriteTemplateResponse):void} cb
     * @public
     */
    ModifyImageSpriteTemplate(req, cb) {
        let resp = new ModifyImageSpriteTemplateResponse();
        this.request("ModifyImageSpriteTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify the use case and tag of a keyword. The keyword itself cannot be modified, but you can delete it and create another one if needed.
     * @param {ModifyWordSampleRequest} req
     * @param {function(string, ModifyWordSampleResponse):void} cb
     * @public
     */
    ModifyWordSample(req, cb) {
        let resp = new ModifyWordSampleResponse();
        this.request("ModifyWordSample", req, resp, cb);
    }

    /**
     * This API is used to query the list of image sprite generating templates and supports paged queries by filters.
     * @param {DescribeImageSpriteTemplatesRequest} req
     * @param {function(string, DescribeImageSpriteTemplatesResponse):void} cb
     * @public
     */
    DescribeImageSpriteTemplates(req, cb) {
        let resp = new DescribeImageSpriteTemplatesResponse();
        this.request("DescribeImageSpriteTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete a custom content audit template.
     * @param {DeleteContentReviewTemplateRequest} req
     * @param {function(string, DeleteContentReviewTemplateResponse):void} cb
     * @public
     */
    DeleteContentReviewTemplate(req, cb) {
        let resp = new DeleteContentReviewTemplateResponse();
        this.request("DeleteContentReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a custom content analysis template. Up to 50 templates can be created.
     * @param {CreateAIAnalysisTemplateRequest} req
     * @param {function(string, CreateAIAnalysisTemplateResponse):void} cb
     * @public
     */
    CreateAIAnalysisTemplate(req, cb) {
        let resp = new CreateAIAnalysisTemplateResponse();
        this.request("CreateAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the list of content recognition templates based on unique template ID. The return result includes all eligible custom and preset content recognition templates.
     * @param {DescribeAIRecognitionTemplatesRequest} req
     * @param {function(string, DescribeAIRecognitionTemplatesResponse):void} cb
     * @public
     */
    DescribeAIRecognitionTemplates(req, cb) {
        let resp = new DescribeAIRecognitionTemplatesResponse();
        this.request("DescribeAIRecognitionTemplates", req, resp, cb);
    }

    /**
     * This API is used to query custom watermarking templates and supports paged queries by filters.
     * @param {DescribeWatermarkTemplatesRequest} req
     * @param {function(string, DescribeWatermarkTemplatesResponse):void} cb
     * @public
     */
    DescribeWatermarkTemplates(req, cb) {
        let resp = new DescribeWatermarkTemplatesResponse();
        this.request("DescribeWatermarkTemplates", req, resp, cb);
    }

    /**
     * This API is used to create a custom image sprite generating template. Up to 16 templates can be created.
     * @param {CreateImageSpriteTemplateRequest} req
     * @param {function(string, CreateImageSpriteTemplateResponse):void} cb
     * @public
     */
    CreateImageSpriteTemplate(req, cb) {
        let resp = new CreateImageSpriteTemplateResponse();
        this.request("CreateImageSpriteTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete an image sprite generating template.
     * @param {DeleteImageSpriteTemplateRequest} req
     * @param {function(string, DeleteImageSpriteTemplateResponse):void} cb
     * @public
     */
    DeleteImageSpriteTemplate(req, cb) {
        let resp = new DeleteImageSpriteTemplateResponse();
        this.request("DeleteImageSpriteTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the list of transcoding templates based on unique template ID. The return result includes all eligible custom and [preset transcoding templates](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF).
     * @param {DescribeTranscodeTemplatesRequest} req
     * @param {function(string, DescribeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeTranscodeTemplates(req, cb) {
        let resp = new DescribeTranscodeTemplatesResponse();
        this.request("DescribeTranscodeTemplates", req, resp, cb);
    }

    /**
     * This API is used to get the list of content audit templates based on unique template ID. The return result includes all eligible custom and preset content audit templates.
     * @param {DescribeContentReviewTemplatesRequest} req
     * @param {function(string, DescribeContentReviewTemplatesResponse):void} cb
     * @public
     */
    DescribeContentReviewTemplates(req, cb) {
        let resp = new DescribeContentReviewTemplatesResponse();
        this.request("DescribeContentReviewTemplates", req, resp, cb);
    }


}
module.exports = MpsClient;
