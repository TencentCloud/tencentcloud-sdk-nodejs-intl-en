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
const ModifySnapshotByTimeOffsetTemplateResponse = models.ModifySnapshotByTimeOffsetTemplateResponse;
const ModifySampleSnapshotTemplateResponse = models.ModifySampleSnapshotTemplateResponse;
const ModifyWatermarkTemplateRequest = models.ModifyWatermarkTemplateRequest;
const AiRecognitionTaskAsrFullTextSegmentItem = models.AiRecognitionTaskAsrFullTextSegmentItem;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const OverrideTranscodeParameter = models.OverrideTranscodeParameter;
const AiAnalysisTaskClassificationInput = models.AiAnalysisTaskClassificationInput;
const SvgWatermarkInput = models.SvgWatermarkInput;
const WorkflowInfo = models.WorkflowInfo;
const CreateTranscodeTemplateRequest = models.CreateTranscodeTemplateRequest;
const ProcessLiveStreamResponse = models.ProcessLiveStreamResponse;
const DescribeAnimatedGraphicsTemplatesRequest = models.DescribeAnimatedGraphicsTemplatesRequest;
const AiReviewTaskProhibitedAsrResult = models.AiReviewTaskProhibitedAsrResult;
const AdaptiveDynamicStreamingTemplate = models.AdaptiveDynamicStreamingTemplate;
const DeleteAnimatedGraphicsTemplateResponse = models.DeleteAnimatedGraphicsTemplateResponse;
const AiReviewTaskProhibitedOcrResult = models.AiReviewTaskProhibitedOcrResult;
const AiRecognitionTaskAsrFullTextResultOutput = models.AiRecognitionTaskAsrFullTextResultOutput;
const AiReviewProhibitedOcrTaskOutput = models.AiReviewProhibitedOcrTaskOutput;
const ManageTaskResponse = models.ManageTaskResponse;
const DeleteWorkflowRequest = models.DeleteWorkflowRequest;
const AiAnalysisTaskCoverOutput = models.AiAnalysisTaskCoverOutput;
const AiAnalysisTaskCoverResult = models.AiAnalysisTaskCoverResult;
const ModifySampleSnapshotTemplateRequest = models.ModifySampleSnapshotTemplateRequest;
const AiReviewPoliticalOcrTaskInput = models.AiReviewPoliticalOcrTaskInput;
const MediaInputInfo = models.MediaInputInfo;
const CreateWorkflowRequest = models.CreateWorkflowRequest;
const OcrWordsConfigureInfo = models.OcrWordsConfigureInfo;
const RawWatermarkParameter = models.RawWatermarkParameter;
const AiReviewTaskPoliticalOcrResult = models.AiReviewTaskPoliticalOcrResult;
const ManageTaskRequest = models.ManageTaskRequest;
const CreateImageSpriteTemplateRequest = models.CreateImageSpriteTemplateRequest;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const UserDefineFaceReviewTemplateInfo = models.UserDefineFaceReviewTemplateInfo;
const ContentReviewTemplateItem = models.ContentReviewTemplateItem;
const DeleteAIRecognitionTemplateResponse = models.DeleteAIRecognitionTemplateResponse;
const MosaicInput = models.MosaicInput;
const AiReviewPoliticalTaskInput = models.AiReviewPoliticalTaskInput;
const ClassificationConfigureInfo = models.ClassificationConfigureInfo;
const MediaAiAnalysisClassificationItem = models.MediaAiAnalysisClassificationItem;
const AudioTemplateInfoForUpdate = models.AudioTemplateInfoForUpdate;
const DeletePersonSampleRequest = models.DeletePersonSampleRequest;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const ParseLiveStreamProcessNotificationResponse = models.ParseLiveStreamProcessNotificationResponse;
const AiRecognitionTaskInput = models.AiRecognitionTaskInput;
const AudioTemplateInfo = models.AudioTemplateInfo;
const ExecuteFunctionResponse = models.ExecuteFunctionResponse;
const CoverConfigureInfo = models.CoverConfigureInfo;
const AIRecognitionTemplateItem = models.AIRecognitionTemplateItem;
const AiReviewPornAsrTaskInput = models.AiReviewPornAsrTaskInput;
const AiRecognitionTaskFaceResult = models.AiRecognitionTaskFaceResult;
const CreateAdaptiveDynamicStreamingTemplateRequest = models.CreateAdaptiveDynamicStreamingTemplateRequest;
const TerrorismImgReviewTemplateInfoForUpdate = models.TerrorismImgReviewTemplateInfoForUpdate;
const AiRecognitionTaskOcrFullTextResultOutput = models.AiRecognitionTaskOcrFullTextResultOutput;
const DeleteAIAnalysisTemplateResponse = models.DeleteAIAnalysisTemplateResponse;
const TextWatermarkTemplateInputForUpdate = models.TextWatermarkTemplateInputForUpdate;
const AiReviewTerrorismOcrTaskInput = models.AiReviewTerrorismOcrTaskInput;
const AiRecognitionTaskOcrWordsResultInput = models.AiRecognitionTaskOcrWordsResultInput;
const DeleteWorkflowResponse = models.DeleteWorkflowResponse;
const AiReviewPornTaskInput = models.AiReviewPornTaskInput;
const CreatePersonSampleRequest = models.CreatePersonSampleRequest;
const MediaAiAnalysisCoverItem = models.MediaAiAnalysisCoverItem;
const CosInputInfo = models.CosInputInfo;
const TagConfigureInfo = models.TagConfigureInfo;
const AiRecognitionTaskOcrWordsResultOutput = models.AiRecognitionTaskOcrWordsResultOutput;
const AiSampleFaceInfo = models.AiSampleFaceInfo;
const DeleteAIRecognitionTemplateRequest = models.DeleteAIRecognitionTemplateRequest;
const NumberFormat = models.NumberFormat;
const EnableWorkflowRequest = models.EnableWorkflowRequest;
const AiAnalysisTaskClassificationOutput = models.AiAnalysisTaskClassificationOutput;
const ModifyTranscodeTemplateRequest = models.ModifyTranscodeTemplateRequest;
const EditMediaTaskInput = models.EditMediaTaskInput;
const UserDefineAsrTextReviewTemplateInfo = models.UserDefineAsrTextReviewTemplateInfo;
const DescribeWordSamplesResponse = models.DescribeWordSamplesResponse;
const AiAnalysisTaskFrameTagOutput = models.AiAnalysisTaskFrameTagOutput;
const MediaProcessTaskAdaptiveDynamicStreamingResult = models.MediaProcessTaskAdaptiveDynamicStreamingResult;
const OcrWordsConfigureInfoForUpdate = models.OcrWordsConfigureInfoForUpdate;
const WatermarkTemplate = models.WatermarkTemplate;
const TextWatermarkTemplateInput = models.TextWatermarkTemplateInput;
const ModifyAIAnalysisTemplateResponse = models.ModifyAIAnalysisTemplateResponse;
const DescribeAIRecognitionTemplatesResponse = models.DescribeAIRecognitionTemplatesResponse;
const LiveStreamAiReviewResultInfo = models.LiveStreamAiReviewResultInfo;
const EditMediaResponse = models.EditMediaResponse;
const PoliticalOcrReviewTemplateInfoForUpdate = models.PoliticalOcrReviewTemplateInfoForUpdate;
const PornAsrReviewTemplateInfoForUpdate = models.PornAsrReviewTemplateInfoForUpdate;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const AiRecognitionTaskAsrFullTextResultInput = models.AiRecognitionTaskAsrFullTextResultInput;
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const CosOutputStorage = models.CosOutputStorage;
const AiRecognitionTaskFaceSegmentItem = models.AiRecognitionTaskFaceSegmentItem;
const ProcessMediaResponse = models.ProcessMediaResponse;
const CreateWordSamplesResponse = models.CreateWordSamplesResponse;
const ClassificationConfigureInfoForUpdate = models.ClassificationConfigureInfoForUpdate;
const DeleteAdaptiveDynamicStreamingTemplateResponse = models.DeleteAdaptiveDynamicStreamingTemplateResponse;
const ParseNotificationRequest = models.ParseNotificationRequest;
const CreateWordSamplesRequest = models.CreateWordSamplesRequest;
const PoliticalAsrReviewTemplateInfoForUpdate = models.PoliticalAsrReviewTemplateInfoForUpdate;
const AiSampleFaceOperation = models.AiSampleFaceOperation;
const SvgWatermarkInputForUpdate = models.SvgWatermarkInputForUpdate;
const AiReviewTaskTerrorismOcrResult = models.AiReviewTaskTerrorismOcrResult;
const AiRecognitionTaskOcrWordsResult = models.AiRecognitionTaskOcrWordsResult;
const PornAsrReviewTemplateInfo = models.PornAsrReviewTemplateInfo;
const ProhibitedAsrReviewTemplateInfoForUpdate = models.ProhibitedAsrReviewTemplateInfoForUpdate;
const ModifyAnimatedGraphicsTemplateResponse = models.ModifyAnimatedGraphicsTemplateResponse;
const DeleteAdaptiveDynamicStreamingTemplateRequest = models.DeleteAdaptiveDynamicStreamingTemplateRequest;
const AiRecognitionTaskOcrFullTextSegmentItem = models.AiRecognitionTaskOcrFullTextSegmentItem;
const EditMediaOutputConfig = models.EditMediaOutputConfig;
const AiReviewPornAsrTaskOutput = models.AiReviewPornAsrTaskOutput;
const DeleteAIAnalysisTemplateRequest = models.DeleteAIAnalysisTemplateRequest;
const EditMediaRequest = models.EditMediaRequest;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const DescribeAdaptiveDynamicStreamingTemplatesResponse = models.DescribeAdaptiveDynamicStreamingTemplatesResponse;
const MediaContentReviewOcrTextSegmentItem = models.MediaContentReviewOcrTextSegmentItem;
const UrlInputInfo = models.UrlInputInfo;
const DescribeAdaptiveDynamicStreamingTemplatesRequest = models.DescribeAdaptiveDynamicStreamingTemplatesRequest;
const ImageWatermarkInput = models.ImageWatermarkInput;
const AsrFullTextConfigureInfoForUpdate = models.AsrFullTextConfigureInfoForUpdate;
const CreatePersonSampleResponse = models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models.CreateContentReviewTemplateResponse;
const ProhibitedConfigureInfoForUpdate = models.ProhibitedConfigureInfoForUpdate;
const TagConfigureInfoForUpdate = models.TagConfigureInfoForUpdate;
const DeleteWordSamplesRequest = models.DeleteWordSamplesRequest;
const RawTranscodeParameter = models.RawTranscodeParameter;
const LiveStreamTaskNotifyConfig = models.LiveStreamTaskNotifyConfig;
const VideoTemplateInfo = models.VideoTemplateInfo;
const PoliticalOcrReviewTemplateInfo = models.PoliticalOcrReviewTemplateInfo;
const PornOcrReviewTemplateInfoForUpdate = models.PornOcrReviewTemplateInfoForUpdate;
const AiReviewTaskPornOcrResult = models.AiReviewTaskPornOcrResult;
const ModifyContentReviewTemplateResponse = models.ModifyContentReviewTemplateResponse;
const DescribeWatermarkTemplatesRequest = models.DescribeWatermarkTemplatesRequest;
const TaskOutputStorage = models.TaskOutputStorage;
const UserDefineConfigureInfo = models.UserDefineConfigureInfo;
const AiReviewPornOcrTaskInput = models.AiReviewPornOcrTaskInput;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const ModifyAdaptiveDynamicStreamingTemplateRequest = models.ModifyAdaptiveDynamicStreamingTemplateRequest;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const ModifyWordSampleRequest = models.ModifyWordSampleRequest;
const MediaProcessTaskAnimatedGraphicResult = models.MediaProcessTaskAnimatedGraphicResult;
const AiAnalysisTaskTagResult = models.AiAnalysisTaskTagResult;
const AiAnalysisTaskTagOutput = models.AiAnalysisTaskTagOutput;
const ProcessMediaRequest = models.ProcessMediaRequest;
const AiRecognitionTaskOcrFullTextResult = models.AiRecognitionTaskOcrFullTextResult;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const AiSampleWord = models.AiSampleWord;
const AiRecognitionTaskAsrWordsResultOutput = models.AiRecognitionTaskAsrWordsResultOutput;
const LiveStreamOcrWordsRecognitionResult = models.LiveStreamOcrWordsRecognitionResult;
const LiveStreamProcessErrorInfo = models.LiveStreamProcessErrorInfo;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const SnapshotByTimeOffsetTaskInput = models.SnapshotByTimeOffsetTaskInput;
const ImageSpriteTaskInput = models.ImageSpriteTaskInput;
const DeleteContentReviewTemplateResponse = models.DeleteContentReviewTemplateResponse;
const ImageWatermarkTemplate = models.ImageWatermarkTemplate;
const AsrWordsConfigureInfo = models.AsrWordsConfigureInfo;
const LiveStreamAsrWordsRecognitionResult = models.LiveStreamAsrWordsRecognitionResult;
const AiSamplePerson = models.AiSamplePerson;
const DescribeWorkflowsResponse = models.DescribeWorkflowsResponse;
const AsrWordsConfigureInfoForUpdate = models.AsrWordsConfigureInfoForUpdate;
const DeleteImageSpriteTemplateResponse = models.DeleteImageSpriteTemplateResponse;
const DescribeContentReviewTemplatesResponse = models.DescribeContentReviewTemplatesResponse;
const TEHDConfig = models.TEHDConfig;
const AnimatedGraphicsTemplate = models.AnimatedGraphicsTemplate;
const WorkflowTrigger = models.WorkflowTrigger;
const LiveStreamAiRecognitionResultInfo = models.LiveStreamAiRecognitionResultInfo;
const LiveStreamAiReviewImagePoliticalResult = models.LiveStreamAiReviewImagePoliticalResult;
const TerrorismOcrReviewTemplateInfoForUpdate = models.TerrorismOcrReviewTemplateInfoForUpdate;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const ModifyImageSpriteTemplateResponse = models.ModifyImageSpriteTemplateResponse;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const TerrorismConfigureInfoForUpdate = models.TerrorismConfigureInfoForUpdate;
const AnimatedGraphicTaskInput = models.AnimatedGraphicTaskInput;
const DeleteContentReviewTemplateRequest = models.DeleteContentReviewTemplateRequest;
const AIAnalysisTemplateItem = models.AIAnalysisTemplateItem;
const RawImageWatermarkInput = models.RawImageWatermarkInput;
const DescribeImageSpriteTemplatesRequest = models.DescribeImageSpriteTemplatesRequest;
const AiSampleTagOperation = models.AiSampleTagOperation;
const CreateAIRecognitionTemplateResponse = models.CreateAIRecognitionTemplateResponse;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const AiReviewTerrorismTaskOutput = models.AiReviewTerrorismTaskOutput;
const ProhibitedConfigureInfo = models.ProhibitedConfigureInfo;
const AiReviewTerrorismOcrTaskOutput = models.AiReviewTerrorismOcrTaskOutput;
const AiAnalysisResult = models.AiAnalysisResult;
const DescribeAIAnalysisTemplatesRequest = models.DescribeAIAnalysisTemplatesRequest;
const AiRecognitionTaskOcrWordsResultItem = models.AiRecognitionTaskOcrWordsResultItem;
const DeleteSampleSnapshotTemplateResponse = models.DeleteSampleSnapshotTemplateResponse;
const AiAnalysisTaskTagInput = models.AiAnalysisTaskTagInput;
const ResetWorkflowRequest = models.ResetWorkflowRequest;
const AiReviewTaskTerrorismResult = models.AiReviewTaskTerrorismResult;
const LiveStreamAiReviewVoicePornResult = models.LiveStreamAiReviewVoicePornResult;
const MediaContentReviewAsrTextSegmentItem = models.MediaContentReviewAsrTextSegmentItem;
const MediaContentReviewPoliticalSegmentItem = models.MediaContentReviewPoliticalSegmentItem;
const DeletePersonSampleResponse = models.DeletePersonSampleResponse;
const CreateSnapshotByTimeOffsetTemplateResponse = models.CreateSnapshotByTimeOffsetTemplateResponse;
const ModifyContentReviewTemplateRequest = models.ModifyContentReviewTemplateRequest;
const ImageWatermarkInputForUpdate = models.ImageWatermarkInputForUpdate;
const AiContentReviewTaskInput = models.AiContentReviewTaskInput;
const CreateAdaptiveDynamicStreamingTemplateResponse = models.CreateAdaptiveDynamicStreamingTemplateResponse;
const DeleteSampleSnapshotTemplateRequest = models.DeleteSampleSnapshotTemplateRequest;
const AiAnalysisTaskInput = models.AiAnalysisTaskInput;
const ImageSpriteTemplate = models.ImageSpriteTemplate;
const AiRecognitionTaskOcrFullTextSegmentTextItem = models.AiRecognitionTaskOcrFullTextSegmentTextItem;
const LiveStreamAsrFullTextRecognitionResult = models.LiveStreamAsrFullTextRecognitionResult;
const AiReviewPornOcrTaskOutput = models.AiReviewPornOcrTaskOutput;
const CreateSampleSnapshotTemplateResponse = models.CreateSampleSnapshotTemplateResponse;
const ProhibitedAsrReviewTemplateInfo = models.ProhibitedAsrReviewTemplateInfo;
const AiReviewPoliticalAsrTaskInput = models.AiReviewPoliticalAsrTaskInput;
const MediaAiAnalysisTagItem = models.MediaAiAnalysisTagItem;
const TranscodeTemplate = models.TranscodeTemplate;
const PornOcrReviewTemplateInfo = models.PornOcrReviewTemplateInfo;
const AiReviewTaskPoliticalAsrResult = models.AiReviewTaskPoliticalAsrResult;
const AiRecognitionTaskAsrWordsSegmentItem = models.AiRecognitionTaskAsrWordsSegmentItem;
const PornConfigureInfoForUpdate = models.PornConfigureInfoForUpdate;
const AiReviewProhibitedAsrTaskInput = models.AiReviewProhibitedAsrTaskInput;
const MediaContentReviewSegmentItem = models.MediaContentReviewSegmentItem;
const TerrorismOcrReviewTemplateInfo = models.TerrorismOcrReviewTemplateInfo;
const AiReviewTaskPornResult = models.AiReviewTaskPornResult;
const AiReviewProhibitedAsrTaskOutput = models.AiReviewProhibitedAsrTaskOutput;
const LiveStreamFaceRecognitionResult = models.LiveStreamFaceRecognitionResult;
const DescribeSampleSnapshotTemplatesRequest = models.DescribeSampleSnapshotTemplatesRequest;
const CoverConfigureInfoForUpdate = models.CoverConfigureInfoForUpdate;
const DisableWorkflowResponse = models.DisableWorkflowResponse;
const SampleSnapshotTemplate = models.SampleSnapshotTemplate;
const PoliticalImgReviewTemplateInfoForUpdate = models.PoliticalImgReviewTemplateInfoForUpdate;
const UserDefineOcrTextReviewTemplateInfo = models.UserDefineOcrTextReviewTemplateInfo;
const AdaptiveStreamTemplate = models.AdaptiveStreamTemplate;
const TranscodeTaskInput = models.TranscodeTaskInput;
const ModifyAIRecognitionTemplateRequest = models.ModifyAIRecognitionTemplateRequest;
const ParseNotificationResponse = models.ParseNotificationResponse;
const ResetWorkflowResponse = models.ResetWorkflowResponse;
const CreateAIAnalysisTemplateResponse = models.CreateAIAnalysisTemplateResponse;
const MediaProcessTaskSampleSnapshotResult = models.MediaProcessTaskSampleSnapshotResult;
const UserDefineConfigureInfoForUpdate = models.UserDefineConfigureInfoForUpdate;
const CosFileUploadTrigger = models.CosFileUploadTrigger;
const AiReviewPoliticalAsrTaskOutput = models.AiReviewPoliticalAsrTaskOutput;
const TEHDConfigForUpdate = models.TEHDConfigForUpdate;
const ModifyPersonSampleRequest = models.ModifyPersonSampleRequest;
const AsrFullTextConfigureInfo = models.AsrFullTextConfigureInfo;
const DescribeMediaMetaDataResponse = models.DescribeMediaMetaDataResponse;
const CreateAIRecognitionTemplateRequest = models.CreateAIRecognitionTemplateRequest;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const AiAnalysisTaskFrameTagResult = models.AiAnalysisTaskFrameTagResult;
const AiReviewPornTaskOutput = models.AiReviewPornTaskOutput;
const CreateWorkflowResponse = models.CreateWorkflowResponse;
const AiRecognitionTaskAsrFullTextResult = models.AiRecognitionTaskAsrFullTextResult;
const ModifyAIRecognitionTemplateResponse = models.ModifyAIRecognitionTemplateResponse;
const PoliticalImgReviewTemplateInfo = models.PoliticalImgReviewTemplateInfo;
const PoliticalConfigureInfo = models.PoliticalConfigureInfo;
const ModifyAnimatedGraphicsTemplateRequest = models.ModifyAnimatedGraphicsTemplateRequest;
const AiRecognitionTaskOcrWordsSegmentItem = models.AiRecognitionTaskOcrWordsSegmentItem;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const DeleteWordSamplesResponse = models.DeleteWordSamplesResponse;
const WatermarkInput = models.WatermarkInput;
const EnableWorkflowResponse = models.EnableWorkflowResponse;
const AiSampleWordInfo = models.AiSampleWordInfo;
const AdaptiveDynamicStreamingInfoItem = models.AdaptiveDynamicStreamingInfoItem;
const ProhibitedOcrReviewTemplateInfo = models.ProhibitedOcrReviewTemplateInfo;
const LiveStreamOcrFullTextRecognitionResult = models.LiveStreamOcrFullTextRecognitionResult;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const MediaMetaData = models.MediaMetaData;
const VideoTemplateInfoForUpdate = models.VideoTemplateInfoForUpdate;
const CreateContentReviewTemplateRequest = models.CreateContentReviewTemplateRequest;
const DescribeContentReviewTemplatesRequest = models.DescribeContentReviewTemplatesRequest;
const AdaptiveDynamicStreamingTaskInput = models.AdaptiveDynamicStreamingTaskInput;
const DescribeImageSpriteTemplatesResponse = models.DescribeImageSpriteTemplatesResponse;
const TaskNotifyConfig = models.TaskNotifyConfig;
const AiReviewTaskPoliticalResult = models.AiReviewTaskPoliticalResult;
const AiAnalysisTaskFrameTagInput = models.AiAnalysisTaskFrameTagInput;
const MediaAiAnalysisFrameTagSegmentItem = models.MediaAiAnalysisFrameTagSegmentItem;
const AiRecognitionTaskAsrWordsResultItem = models.AiRecognitionTaskAsrWordsResultItem;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const LiveStreamAiRecognitionResultItem = models.LiveStreamAiRecognitionResultItem;
const DeleteImageSpriteTemplateRequest = models.DeleteImageSpriteTemplateRequest;
const AiSampleFailFaceInfo = models.AiSampleFailFaceInfo;
const UserDefineFaceReviewTemplateInfoForUpdate = models.UserDefineFaceReviewTemplateInfoForUpdate;
const OcrFullTextConfigureInfoForUpdate = models.OcrFullTextConfigureInfoForUpdate;
const AiRecognitionTaskOcrFullTextResultInput = models.AiRecognitionTaskOcrFullTextResultInput;
const DescribeTasksResponse = models.DescribeTasksResponse;
const AiRecognitionTaskFaceResultInput = models.AiRecognitionTaskFaceResultInput;
const AiReviewPoliticalTaskOutput = models.AiReviewPoliticalTaskOutput;
const LiveStreamAiReviewImagePornResult = models.LiveStreamAiReviewImagePornResult;
const ModifySnapshotByTimeOffsetTemplateRequest = models.ModifySnapshotByTimeOffsetTemplateRequest;
const LiveStreamAiReviewResultItem = models.LiveStreamAiReviewResultItem;
const TaskSimpleInfo = models.TaskSimpleInfo;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const SnapshotByTimeOffsetTemplate = models.SnapshotByTimeOffsetTemplate;
const DeleteSnapshotByTimeOffsetTemplateResponse = models.DeleteSnapshotByTimeOffsetTemplateResponse;
const ProhibitedOcrReviewTemplateInfoForUpdate = models.ProhibitedOcrReviewTemplateInfoForUpdate;
const DescribeTasksRequest = models.DescribeTasksRequest;
const FaceConfigureInfoForUpdate = models.FaceConfigureInfoForUpdate;
const CreateTranscodeTemplateResponse = models.CreateTranscodeTemplateResponse;
const AiRecognitionTaskAsrWordsResultInput = models.AiRecognitionTaskAsrWordsResultInput;
const CreateAIAnalysisTemplateRequest = models.CreateAIAnalysisTemplateRequest;
const AiReviewTerrorismTaskInput = models.AiReviewTerrorismTaskInput;
const DescribeWorkflowsRequest = models.DescribeWorkflowsRequest;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const LiveStreamAiReviewImageTerrorismResult = models.LiveStreamAiReviewImageTerrorismResult;
const ProcessLiveStreamRequest = models.ProcessLiveStreamRequest;
const ModifyImageSpriteTemplateRequest = models.ModifyImageSpriteTemplateRequest;
const AiReviewProhibitedOcrTaskInput = models.AiReviewProhibitedOcrTaskInput;
const DeleteWatermarkTemplateRequest = models.DeleteWatermarkTemplateRequest;
const DescribeWordSamplesRequest = models.DescribeWordSamplesRequest;
const ModifyAIAnalysisTemplateRequest = models.ModifyAIAnalysisTemplateRequest;
const LiveStreamProcessTask = models.LiveStreamProcessTask;
const CreateWatermarkTemplateResponse = models.CreateWatermarkTemplateResponse;
const DescribeSampleSnapshotTemplatesResponse = models.DescribeSampleSnapshotTemplatesResponse;
const ModifyWordSampleResponse = models.ModifyWordSampleResponse;
const AiContentReviewResult = models.AiContentReviewResult;
const TerrorismImgReviewTemplateInfo = models.TerrorismImgReviewTemplateInfo;
const DescribeTranscodeTemplatesRequest = models.DescribeTranscodeTemplatesRequest;
const DisableWorkflowRequest = models.DisableWorkflowRequest;
const PoliticalConfigureInfoForUpdate = models.PoliticalConfigureInfoForUpdate;
const DescribeWatermarkTemplatesResponse = models.DescribeWatermarkTemplatesResponse;
const CreateAnimatedGraphicsTemplateRequest = models.CreateAnimatedGraphicsTemplateRequest;
const FrameTagConfigureInfo = models.FrameTagConfigureInfo;
const ExecuteFunctionRequest = models.ExecuteFunctionRequest;
const ModifyPersonSampleResponse = models.ModifyPersonSampleResponse;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const MediaTranscodeItem = models.MediaTranscodeItem;
const DescribePersonSamplesResponse = models.DescribePersonSamplesResponse;
const PornConfigureInfo = models.PornConfigureInfo;
const DescribeAIAnalysisTemplatesResponse = models.DescribeAIAnalysisTemplatesResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models.CreateSnapshotByTimeOffsetTemplateRequest;
const ParseLiveStreamProcessNotificationRequest = models.ParseLiveStreamProcessNotificationRequest;
const AiRecognitionTaskAsrWordsResult = models.AiRecognitionTaskAsrWordsResult;
const CreateSampleSnapshotTemplateRequest = models.CreateSampleSnapshotTemplateRequest;
const WorkflowTask = models.WorkflowTask;
const AiReviewTaskPornAsrResult = models.AiReviewTaskPornAsrResult;
const EditMediaFileInfo = models.EditMediaFileInfo;
const FaceConfigureInfo = models.FaceConfigureInfo;
const AiRecognitionTaskFaceResultOutput = models.AiRecognitionTaskFaceResultOutput;
const PornImgReviewTemplateInfoForUpdate = models.PornImgReviewTemplateInfoForUpdate;
const EditMediaTask = models.EditMediaTask;
const PornImgReviewTemplateInfo = models.PornImgReviewTemplateInfo;
const AiReviewPoliticalOcrTaskOutput = models.AiReviewPoliticalOcrTaskOutput;
const OcrFullTextConfigureInfo = models.OcrFullTextConfigureInfo;
const DescribeTranscodeTemplatesResponse = models.DescribeTranscodeTemplatesResponse;
const DeleteAnimatedGraphicsTemplateRequest = models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models.DeleteSnapshotByTimeOffsetTemplateRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models.DescribeAnimatedGraphicsTemplatesResponse;
const MediaAiAnalysisFrameTagItem = models.MediaAiAnalysisFrameTagItem;
const SampleSnapshotTaskInput = models.SampleSnapshotTaskInput;
const TerrorismConfigureInfo = models.TerrorismConfigureInfo;
const PoliticalAsrReviewTemplateInfo = models.PoliticalAsrReviewTemplateInfo;
const CreateAnimatedGraphicsTemplateResponse = models.CreateAnimatedGraphicsTemplateResponse;
const AiAnalysisTaskClassificationResult = models.AiAnalysisTaskClassificationResult;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const DescribePersonSamplesRequest = models.DescribePersonSamplesRequest;
const AiRecognitionTaskFaceResultItem = models.AiRecognitionTaskFaceResultItem;
const AiAnalysisTaskCoverInput = models.AiAnalysisTaskCoverInput;
const EditMediaTaskOutput = models.EditMediaTaskOutput;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const DescribeMediaMetaDataRequest = models.DescribeMediaMetaDataRequest;
const FrameTagConfigureInfoForUpdate = models.FrameTagConfigureInfoForUpdate;
const CreateImageSpriteTemplateResponse = models.CreateImageSpriteTemplateResponse;
const DescribeAIRecognitionTemplatesRequest = models.DescribeAIRecognitionTemplatesRequest;
const ModifyWatermarkTemplateResponse = models.ModifyWatermarkTemplateResponse;
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
     * This API is used to modify a custom intelligent content recognition template.
     * @param {ModifyContentReviewTemplateRequest} req
     * @param {function(string, ModifyContentReviewTemplateResponse):void} cb
     * @public
     */
    ModifyContentReviewTemplate(req, cb) {
        let resp = new ModifyContentReviewTemplateResponse();
        this.request("ModifyContentReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a custom template for intelligent content recognition. Up to 50 templates can be created.
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
     * This API is used to delete image samples by image ID.
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
     * This API is used to create an adaptive bitrate streaming template. Up up to 100 such templates can be created.
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
     * This API is used to query the information of image samples. It supports paginated queries by image ID, name, and tag.
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
     * This API is used to manage initiated tasks.
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
     * This API is used to create keyword samples in batches for video processing operations such as content recognition and inappropriate information detection with the help of the OCR and ASR technologies.
     * @param {CreateWordSamplesRequest} req
     * @param {function(string, CreateWordSamplesResponse):void} cb
     * @public
     */
    CreateWordSamples(req, cb) {
        let resp = new CreateWordSamplesResponse();
        this.request("CreateWordSamples", req, resp, cb);
    }

    /**
     * This API is used to create image samples for video processing operations such as content recognition and inappropriate information detection with the help of technologies such as facial feature positioning.
     * @param {CreatePersonSampleRequest} req
     * @param {function(string, CreatePersonSampleResponse):void} cb
     * @public
     */
    CreatePersonSample(req, cb) {
        let resp = new CreatePersonSampleResponse();
        this.request("CreatePersonSample", req, resp, cb);
    }

    /**
     * This API is only used in unique custom development scenarios. Unless requested by Media Processing Service customer service, please do not call it.
     * @param {ExecuteFunctionRequest} req
     * @param {function(string, ExecuteFunctionResponse):void} cb
     * @public
     */
    ExecuteFunction(req, cb) {
        let resp = new ExecuteFunctionResponse();
        this.request("ExecuteFunction", req, resp, cb);
    }

    /**
     * This API is used to modify image samples by image ID. You can use it to modify the name and description of an image sample and add/delete/reset facial features or tags. There must be at least one image left after the deletion of facial features; otherwise, please reset instead of delete the facial features.
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
     * This API is used to initiate tasks to process live streaming media files. Such tasks include:

* Intelligent content moderation (detecting porn, terrorism, and politically sensitive information in image and porn information in speech)
* Intelligent content recognition (face, full text, text keyword, full speech, and speech keyword)

Live stream processing event notifications are written into specified CMQ queues in real time. Users need to obtain event notification results from such CMQ queues. Output files of the processing tasks are written into destination buckets specified by users.
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
     * This API is used to delete a custom intelligent content recognition template.
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
     * This API is used to get the list of transcoding templates based on unique template ID. The return result includes all eligible custom and [preset transcoding templates](https://intl.cloud.tencent.com/document/product/266/33476?from_cn_redirect=1#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF).
     * @param {DescribeTranscodeTemplatesRequest} req
     * @param {function(string, DescribeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeTranscodeTemplates(req, cb) {
        let resp = new DescribeTranscodeTemplatesResponse();
        this.request("DescribeTranscodeTemplates", req, resp, cb);
    }

    /**
     * This API is used to get the list of intelligent content recognition templates using their unique ID. The returned result includes all custom templates that meet the conditions as well as preset intelligent content recognition templates.
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
