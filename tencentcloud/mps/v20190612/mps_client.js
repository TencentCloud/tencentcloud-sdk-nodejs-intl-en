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
const AiAnalysisTaskHorizontalToVerticalInput = models.AiAnalysisTaskHorizontalToVerticalInput;
const ModifySnapshotByTimeOffsetTemplateResponse = models.ModifySnapshotByTimeOffsetTemplateResponse;
const ModifySampleSnapshotTemplateResponse = models.ModifySampleSnapshotTemplateResponse;
const ContainerDiagnoseResultItem = models.ContainerDiagnoseResultItem;
const ModifyWatermarkTemplateRequest = models.ModifyWatermarkTemplateRequest;
const AiRecognitionTaskAsrFullTextSegmentItem = models.AiRecognitionTaskAsrFullTextSegmentItem;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const FrameRateConfig = models.FrameRateConfig;
const OverrideTranscodeParameter = models.OverrideTranscodeParameter;
const AiAnalysisTaskClassificationInput = models.AiAnalysisTaskClassificationInput;
const SvgWatermarkInput = models.SvgWatermarkInput;
const WorkflowInfo = models.WorkflowInfo;
const CreateTranscodeTemplateRequest = models.CreateTranscodeTemplateRequest;
const ProcessLiveStreamResponse = models.ProcessLiveStreamResponse;
const LiveStreamAiQualityControlResultInfo = models.LiveStreamAiQualityControlResultInfo;
const MediaAiAnalysisHighlightItem = models.MediaAiAnalysisHighlightItem;
const DeleteLiveRecordTemplateRequest = models.DeleteLiveRecordTemplateRequest;
const DescribeAnimatedGraphicsTemplatesRequest = models.DescribeAnimatedGraphicsTemplatesRequest;
const AiReviewTaskProhibitedAsrResult = models.AiReviewTaskProhibitedAsrResult;
const AdaptiveDynamicStreamingTemplate = models.AdaptiveDynamicStreamingTemplate;
const MediaAiAnalysisDescriptionItem = models.MediaAiAnalysisDescriptionItem;
const DeleteAnimatedGraphicsTemplateResponse = models.DeleteAnimatedGraphicsTemplateResponse;
const AiReviewTaskProhibitedOcrResult = models.AiReviewTaskProhibitedOcrResult;
const AiRecognitionTaskAsrFullTextResultOutput = models.AiRecognitionTaskAsrFullTextResultOutput;
const AsrHotwordsSetItem = models.AsrHotwordsSetItem;
const AiReviewProhibitedOcrTaskOutput = models.AiReviewProhibitedOcrTaskOutput;
const DeleteScheduleResponse = models.DeleteScheduleResponse;
const SmartSubtitleTaskTransTextResultOutput = models.SmartSubtitleTaskTransTextResultOutput;
const ManageTaskResponse = models.ManageTaskResponse;
const DeleteWorkflowRequest = models.DeleteWorkflowRequest;
const AwsS3FileUploadTrigger = models.AwsS3FileUploadTrigger;
const AiAnalysisTaskCoverOutput = models.AiAnalysisTaskCoverOutput;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const NumberFormat = models.NumberFormat;
const ModifySampleSnapshotTemplateRequest = models.ModifySampleSnapshotTemplateRequest;
const AiReviewPoliticalOcrTaskInput = models.AiReviewPoliticalOcrTaskInput;
const SmartSubtitleTaskTransTextResult = models.SmartSubtitleTaskTransTextResult;
const EnhanceConfig = models.EnhanceConfig;
const MediaInputInfo = models.MediaInputInfo;
const CreateWorkflowRequest = models.CreateWorkflowRequest;
const OcrWordsConfigureInfo = models.OcrWordsConfigureInfo;
const DescribeAsrHotwordsRequest = models.DescribeAsrHotwordsRequest;
const AudioTrackChannelInfo = models.AudioTrackChannelInfo;
const DiagnoseResult = models.DiagnoseResult;
const RawWatermarkParameter = models.RawWatermarkParameter;
const AiReviewTaskPoliticalOcrResult = models.AiReviewTaskPoliticalOcrResult;
const AiSampleWord = models.AiSampleWord;
const PoliticalOcrReviewTemplateInfo = models.PoliticalOcrReviewTemplateInfo;
const CreateImageSpriteTemplateRequest = models.CreateImageSpriteTemplateRequest;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const UserDefineFaceReviewTemplateInfo = models.UserDefineFaceReviewTemplateInfo;
const ContentReviewTemplateItem = models.ContentReviewTemplateItem;
const DeleteAIRecognitionTemplateResponse = models.DeleteAIRecognitionTemplateResponse;
const VideoEnhanceConfig = models.VideoEnhanceConfig;
const DeleteContentReviewTemplateRequest = models.DeleteContentReviewTemplateRequest;
const AiReviewPoliticalTaskInput = models.AiReviewPoliticalTaskInput;
const ModifyContentReviewTemplateResponse = models.ModifyContentReviewTemplateResponse;
const ModifyScheduleRequest = models.ModifyScheduleRequest;
const MediaMetaData = models.MediaMetaData;
const DescribePersonSamplesRequest = models.DescribePersonSamplesRequest;
const ClassificationConfigureInfo = models.ClassificationConfigureInfo;
const MediaAiAnalysisClassificationItem = models.MediaAiAnalysisClassificationItem;
const ModifyWordSampleResponse = models.ModifyWordSampleResponse;
const AudioTemplateInfoForUpdate = models.AudioTemplateInfoForUpdate;
const SuperResolutionConfig = models.SuperResolutionConfig;
const DeletePersonSampleRequest = models.DeletePersonSampleRequest;
const AiRecognitionTaskAsrWordsSegmentItem = models.AiRecognitionTaskAsrWordsSegmentItem;
const ParseLiveStreamProcessNotificationResponse = models.ParseLiveStreamProcessNotificationResponse;
const AiRecognitionTaskInput = models.AiRecognitionTaskInput;
const AiAnalysisTaskFrameTagResult = models.AiAnalysisTaskFrameTagResult;
const ComposeMediaConfig = models.ComposeMediaConfig;
const ExecuteFunctionResponse = models.ExecuteFunctionResponse;
const CoverConfigureInfo = models.CoverConfigureInfo;
const AIRecognitionTemplateItem = models.AIRecognitionTemplateItem;
const AiReviewPornAsrTaskInput = models.AiReviewPornAsrTaskInput;
const AiRecognitionTaskFaceResult = models.AiRecognitionTaskFaceResult;
const CreateAdaptiveDynamicStreamingTemplateRequest = models.CreateAdaptiveDynamicStreamingTemplateRequest;
const TerrorismImgReviewTemplateInfoForUpdate = models.TerrorismImgReviewTemplateInfoForUpdate;
const ModifyTranscodeTemplateRequest = models.ModifyTranscodeTemplateRequest;
const AiAnalysisTaskHighlightResult = models.AiAnalysisTaskHighlightResult;
const DeleteAIAnalysisTemplateResponse = models.DeleteAIAnalysisTemplateResponse;
const TextWatermarkTemplateInputForUpdate = models.TextWatermarkTemplateInputForUpdate;
const AiReviewTerrorismOcrTaskInput = models.AiReviewTerrorismOcrTaskInput;
const AiRecognitionTaskOcrWordsResultInput = models.AiRecognitionTaskOcrWordsResultInput;
const CreateQualityControlTemplateResponse = models.CreateQualityControlTemplateResponse;
const QualityControlResult = models.QualityControlResult;
const AiReviewPornTaskInput = models.AiReviewPornTaskInput;
const HdrConfig = models.HdrConfig;
const ScheduleTask = models.ScheduleTask;
const CreatePersonSampleRequest = models.CreatePersonSampleRequest;
const ImageTaskInput = models.ImageTaskInput;
const MediaAiAnalysisCoverItem = models.MediaAiAnalysisCoverItem;
const CosInputInfo = models.CosInputInfo;
const CreateScheduleResponse = models.CreateScheduleResponse;
const TagConfigureInfo = models.TagConfigureInfo;
const AiRecognitionTaskOcrWordsResultOutput = models.AiRecognitionTaskOcrWordsResultOutput;
const ModifyLiveRecordTemplateResponse = models.ModifyLiveRecordTemplateResponse;
const AiParagraphInfo = models.AiParagraphInfo;
const AudioSeparateConfig = models.AudioSeparateConfig;
const DeleteAIRecognitionTemplateRequest = models.DeleteAIRecognitionTemplateRequest;
const AiAnalysisTaskCoverResult = models.AiAnalysisTaskCoverResult;
const AudioBeautifyConfig = models.AudioBeautifyConfig;
const EnableWorkflowRequest = models.EnableWorkflowRequest;
const AiAnalysisTaskClassificationOutput = models.AiAnalysisTaskClassificationOutput;
const DescribeSmartSubtitleTemplatesRequest = models.DescribeSmartSubtitleTemplatesRequest;
const AiRecognitionTaskOcrFullTextResultOutput = models.AiRecognitionTaskOcrFullTextResultOutput;
const EditMediaTaskInput = models.EditMediaTaskInput;
const ComposeTransitionOperation = models.ComposeTransitionOperation;
const UserDefineAsrTextReviewTemplateInfo = models.UserDefineAsrTextReviewTemplateInfo;
const ComposeTrackTime = models.ComposeTrackTime;
const AiSampleFaceInfo = models.AiSampleFaceInfo;
const MediaTranscodeItem = models.MediaTranscodeItem;
const MediaProcessTaskAdaptiveDynamicStreamingResult = models.MediaProcessTaskAdaptiveDynamicStreamingResult;
const OcrWordsConfigureInfoForUpdate = models.OcrWordsConfigureInfoForUpdate;
const WatermarkTemplate = models.WatermarkTemplate;
const TextWatermarkTemplateInput = models.TextWatermarkTemplateInput;
const ModifyAIAnalysisTemplateResponse = models.ModifyAIAnalysisTemplateResponse;
const DescribeWordSamplesResponse = models.DescribeWordSamplesResponse;
const DescribeAIRecognitionTemplatesResponse = models.DescribeAIRecognitionTemplatesResponse;
const ScratchRepairConfig = models.ScratchRepairConfig;
const DescribeImageTaskDetailRequest = models.DescribeImageTaskDetailRequest;
const EditMediaResponse = models.EditMediaResponse;
const PoliticalOcrReviewTemplateInfoForUpdate = models.PoliticalOcrReviewTemplateInfoForUpdate;
const AudioDenoiseConfig = models.AudioDenoiseConfig;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const PornAsrReviewTemplateInfoForUpdate = models.PornAsrReviewTemplateInfoForUpdate;
const LiveRecordTemplate = models.LiveRecordTemplate;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const ScheduleRecognitionTaskResult = models.ScheduleRecognitionTaskResult;
const ImageProcessTaskOutput = models.ImageProcessTaskOutput;
const ComposeTargetInfo = models.ComposeTargetInfo;
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const DisableScheduleRequest = models.DisableScheduleRequest;
const AiAnalysisTaskHorizontalToVerticalResult = models.AiAnalysisTaskHorizontalToVerticalResult;
const CosOutputStorage = models.CosOutputStorage;
const MediaProcessTaskAnimatedGraphicResult = models.MediaProcessTaskAnimatedGraphicResult;
const ProcessMediaResponse = models.ProcessMediaResponse;
const CreateWordSamplesResponse = models.CreateWordSamplesResponse;
const ClassificationConfigureInfoForUpdate = models.ClassificationConfigureInfoForUpdate;
const CreateScheduleRequest = models.CreateScheduleRequest;
const ParseNotificationRequest = models.ParseNotificationRequest;
const ImageEraseConfig = models.ImageEraseConfig;
const CreateWordSamplesRequest = models.CreateWordSamplesRequest;
const PoliticalAsrReviewTemplateInfoForUpdate = models.PoliticalAsrReviewTemplateInfoForUpdate;
const AiSampleFaceOperation = models.AiSampleFaceOperation;
const SvgWatermarkInputForUpdate = models.SvgWatermarkInputForUpdate;
const AiReviewTaskTerrorismOcrResult = models.AiReviewTaskTerrorismOcrResult;
const AiRecognitionTaskOcrWordsResult = models.AiRecognitionTaskOcrWordsResult;
const PornAsrReviewTemplateInfo = models.PornAsrReviewTemplateInfo;
const ComposeVideoStream = models.ComposeVideoStream;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const ProhibitedAsrReviewTemplateInfoForUpdate = models.ProhibitedAsrReviewTemplateInfoForUpdate;
const DisableScheduleResponse = models.DisableScheduleResponse;
const ModifyAnimatedGraphicsTemplateResponse = models.ModifyAnimatedGraphicsTemplateResponse;
const DeleteSmartSubtitleTemplateRequest = models.DeleteSmartSubtitleTemplateRequest;
const DeleteAdaptiveDynamicStreamingTemplateRequest = models.DeleteAdaptiveDynamicStreamingTemplateRequest;
const AiRecognitionTaskOcrFullTextSegmentItem = models.AiRecognitionTaskOcrFullTextSegmentItem;
const EditMediaOutputConfig = models.EditMediaOutputConfig;
const AiQualityControlTaskInput = models.AiQualityControlTaskInput;
const AiAnalysisTaskSegmentInput = models.AiAnalysisTaskSegmentInput;
const AiReviewPornAsrTaskOutput = models.AiReviewPornAsrTaskOutput;
const ComposeTransitionItem = models.ComposeTransitionItem;
const DeleteAIAnalysisTemplateRequest = models.DeleteAIAnalysisTemplateRequest;
const EditMediaRequest = models.EditMediaRequest;
const DeleteAsrHotwordsRequest = models.DeleteAsrHotwordsRequest;
const S3InputInfo = models.S3InputInfo;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const DescribeAsrHotwordsListRequest = models.DescribeAsrHotwordsListRequest;
const AiAnalysisTaskDescriptionOutput = models.AiAnalysisTaskDescriptionOutput;
const DescribeAdaptiveDynamicStreamingTemplatesResponse = models.DescribeAdaptiveDynamicStreamingTemplatesResponse;
const MediaContentReviewOcrTextSegmentItem = models.MediaContentReviewOcrTextSegmentItem;
const UrlInputInfo = models.UrlInputInfo;
const DescribeAdaptiveDynamicStreamingTemplatesRequest = models.DescribeAdaptiveDynamicStreamingTemplatesRequest;
const ImageWatermarkInput = models.ImageWatermarkInput;
const TrackInfo = models.TrackInfo;
const BatchProcessMediaResponse = models.BatchProcessMediaResponse;
const LiveRecordResult = models.LiveRecordResult;
const AsrFullTextConfigureInfoForUpdate = models.AsrFullTextConfigureInfoForUpdate;
const LiveRecordFile = models.LiveRecordFile;
const ComposeSourceMedia = models.ComposeSourceMedia;
const CreatePersonSampleResponse = models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models.CreateContentReviewTemplateResponse;
const ProhibitedConfigureInfoForUpdate = models.ProhibitedConfigureInfoForUpdate;
const ComposeEmptyItem = models.ComposeEmptyItem;
const TagConfigureInfoForUpdate = models.TagConfigureInfoForUpdate;
const DeleteWordSamplesRequest = models.DeleteWordSamplesRequest;
const DescribeLiveRecordTemplatesResponse = models.DescribeLiveRecordTemplatesResponse;
const EnableScheduleRequest = models.EnableScheduleRequest;
const RawTranscodeParameter = models.RawTranscodeParameter;
const LiveStreamTaskNotifyConfig = models.LiveStreamTaskNotifyConfig;
const VideoTemplateInfo = models.VideoTemplateInfo;
const ComposeSubtitleStyle = models.ComposeSubtitleStyle;
const PornOcrReviewTemplateInfoForUpdate = models.PornOcrReviewTemplateInfoForUpdate;
const AiReviewTaskPornOcrResult = models.AiReviewTaskPornOcrResult;
const BatchProcessMediaRequest = models.BatchProcessMediaRequest;
const DescribeWatermarkTemplatesRequest = models.DescribeWatermarkTemplatesRequest;
const TaskOutputStorage = models.TaskOutputStorage;
const ModifyAIAnalysisTemplateRequest = models.ModifyAIAnalysisTemplateRequest;
const UserDefineConfigureInfo = models.UserDefineConfigureInfo;
const MP4ConfigureInfo = models.MP4ConfigureInfo;
const DeleteQualityControlTemplateRequest = models.DeleteQualityControlTemplateRequest;
const ColorEnhanceConfig = models.ColorEnhanceConfig;
const ComposeAudioItem = models.ComposeAudioItem;
const AiReviewPornOcrTaskInput = models.AiReviewPornOcrTaskInput;
const LiveScheduleTask = models.LiveScheduleTask;
const AiAnalysisTaskFrameTagOutput = models.AiAnalysisTaskFrameTagOutput;
const ModifyAdaptiveDynamicStreamingTemplateRequest = models.ModifyAdaptiveDynamicStreamingTemplateRequest;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const DescribeQualityControlTemplatesRequest = models.DescribeQualityControlTemplatesRequest;
const ModifyWordSampleRequest = models.ModifyWordSampleRequest;
const AiRecognitionTaskFaceSegmentItem = models.AiRecognitionTaskFaceSegmentItem;
const AiAnalysisTaskTagResult = models.AiAnalysisTaskTagResult;
const AiAnalysisTaskDelLogoInput = models.AiAnalysisTaskDelLogoInput;
const SmartSubtitleTaskBatchOutput = models.SmartSubtitleTaskBatchOutput;
const AiAnalysisTaskTagOutput = models.AiAnalysisTaskTagOutput;
const CreateAsrHotwordsResponse = models.CreateAsrHotwordsResponse;
const AiAnalysisTaskHighlightOutput = models.AiAnalysisTaskHighlightOutput;
const QualityControlItemConfig = models.QualityControlItemConfig;
const ProcessMediaRequest = models.ProcessMediaRequest;
const ProcessImageResponse = models.ProcessImageResponse;
const AiRecognitionTaskOcrFullTextResult = models.AiRecognitionTaskOcrFullTextResult;
const AiAnalysisTaskSegmentOutput = models.AiAnalysisTaskSegmentOutput;
const ComposeVideoItem = models.ComposeVideoItem;
const LiveStreamOcrFullTextRecognitionResult = models.LiveStreamOcrFullTextRecognitionResult;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const AiRecognitionTaskTransTextResultInput = models.AiRecognitionTaskTransTextResultInput;
const DescribeSchedulesResponse = models.DescribeSchedulesResponse;
const ImageQualityEnhanceConfig = models.ImageQualityEnhanceConfig;
const ManageTaskRequest = models.ManageTaskRequest;
const AiAnalysisTaskSegmentResult = models.AiAnalysisTaskSegmentResult;
const RawSmartSubtitleParameter = models.RawSmartSubtitleParameter;
const AiRecognitionTaskAsrFullTextResultInput = models.AiRecognitionTaskAsrFullTextResultInput;
const BatchSubTaskResult = models.BatchSubTaskResult;
const LiveStreamOcrWordsRecognitionResult = models.LiveStreamOcrWordsRecognitionResult;
const LiveStreamProcessErrorInfo = models.LiveStreamProcessErrorInfo;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const SnapshotByTimeOffsetTaskInput = models.SnapshotByTimeOffsetTaskInput;
const ImageSpriteTaskInput = models.ImageSpriteTaskInput;
const DeleteContentReviewTemplateResponse = models.DeleteContentReviewTemplateResponse;
const ImageWatermarkTemplate = models.ImageWatermarkTemplate;
const ModifyQualityControlTemplateResponse = models.ModifyQualityControlTemplateResponse;
const AsrWordsConfigureInfo = models.AsrWordsConfigureInfo;
const LiveStreamAsrWordsRecognitionResult = models.LiveStreamAsrWordsRecognitionResult;
const AiSamplePerson = models.AiSamplePerson;
const BatchSmartSubtitlesResult = models.BatchSmartSubtitlesResult;
const SimpleAesDrm = models.SimpleAesDrm;
const DescribeWorkflowsResponse = models.DescribeWorkflowsResponse;
const AsrWordsConfigureInfoForUpdate = models.AsrWordsConfigureInfoForUpdate;
const ScheduleSmartSubtitleTaskResult = models.ScheduleSmartSubtitleTaskResult;
const DeleteImageSpriteTemplateResponse = models.DeleteImageSpriteTemplateResponse;
const DescribeContentReviewTemplatesResponse = models.DescribeContentReviewTemplatesResponse;
const TEHDConfig = models.TEHDConfig;
const VideoTemplateInfoForUpdate = models.VideoTemplateInfoForUpdate;
const AnimatedGraphicsTemplate = models.AnimatedGraphicsTemplate;
const WorkflowTrigger = models.WorkflowTrigger;
const LiveStreamAiRecognitionResultInfo = models.LiveStreamAiRecognitionResultInfo;
const ActivityPara = models.ActivityPara;
const ModifyAsrHotwordsResponse = models.ModifyAsrHotwordsResponse;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const ModifyImageSpriteTemplateResponse = models.ModifyImageSpriteTemplateResponse;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const ScheduleAnalysisTaskResult = models.ScheduleAnalysisTaskResult;
const ComposeMediaItem = models.ComposeMediaItem;
const ScheduleQualityControlTaskResult = models.ScheduleQualityControlTaskResult;
const TerrorismConfigureInfoForUpdate = models.TerrorismConfigureInfoForUpdate;
const LiveActivityResItem = models.LiveActivityResItem;
const EnableScheduleResponse = models.EnableScheduleResponse;
const SecurityGroupInfo = models.SecurityGroupInfo;
const DeleteAdaptiveDynamicStreamingTemplateResponse = models.DeleteAdaptiveDynamicStreamingTemplateResponse;
const LiveStreamTagRecognitionResult = models.LiveStreamTagRecognitionResult;
const AnimatedGraphicTaskInput = models.AnimatedGraphicTaskInput;
const MosaicInput = models.MosaicInput;
const LiveRecordTaskInput = models.LiveRecordTaskInput;
const AIAnalysisTemplateItem = models.AIAnalysisTemplateItem;
const AiRecognitionTaskObjectResultItem = models.AiRecognitionTaskObjectResultItem;
const HeadTailParameter = models.HeadTailParameter;
const LiveStreamAiReviewImagePoliticalResult = models.LiveStreamAiReviewImagePoliticalResult;
const RawImageWatermarkInput = models.RawImageWatermarkInput;
const DescribeImageSpriteTemplatesRequest = models.DescribeImageSpriteTemplatesRequest;
const CreateQualityControlTemplateRequest = models.CreateQualityControlTemplateRequest;
const AiSampleTagOperation = models.AiSampleTagOperation;
const CreateAIRecognitionTemplateResponse = models.CreateAIRecognitionTemplateResponse;
const EditMediaTask = models.EditMediaTask;
const AiReviewTerrorismTaskOutput = models.AiReviewTerrorismTaskOutput;
const ModifyAsrHotwordsRequest = models.ModifyAsrHotwordsRequest;
const PornImgReviewTemplateInfo = models.PornImgReviewTemplateInfo;
const ProhibitedConfigureInfo = models.ProhibitedConfigureInfo;
const AiReviewTerrorismOcrTaskOutput = models.AiReviewTerrorismOcrTaskOutput;
const DescribeAsrHotwordsListResponse = models.DescribeAsrHotwordsListResponse;
const AiAnalysisResult = models.AiAnalysisResult;
const SmartSubtitleTaskResultInput = models.SmartSubtitleTaskResultInput;
const DescribeAIAnalysisTemplatesRequest = models.DescribeAIAnalysisTemplatesRequest;
const AiRecognitionTaskOcrWordsResultItem = models.AiRecognitionTaskOcrWordsResultItem;
const ProcessImageRequest = models.ProcessImageRequest;
const DeleteSampleSnapshotTemplateResponse = models.DeleteSampleSnapshotTemplateResponse;
const AiAnalysisTaskTagInput = models.AiAnalysisTaskTagInput;
const AiAnalysisTaskDescriptionResult = models.AiAnalysisTaskDescriptionResult;
const DeleteSmartSubtitleTemplateResponse = models.DeleteSmartSubtitleTemplateResponse;
const ResetWorkflowRequest = models.ResetWorkflowRequest;
const AiRecognitionTaskObjectResultInput = models.AiRecognitionTaskObjectResultInput;
const AiReviewTaskTerrorismResult = models.AiReviewTaskTerrorismResult;
const LiveStreamAiReviewVoicePornResult = models.LiveStreamAiReviewVoicePornResult;
const MediaContentReviewAsrTextSegmentItem = models.MediaContentReviewAsrTextSegmentItem;
const MediaContentReviewPoliticalSegmentItem = models.MediaContentReviewPoliticalSegmentItem;
const DeletePersonSampleResponse = models.DeletePersonSampleResponse;
const CreateSnapshotByTimeOffsetTemplateResponse = models.CreateSnapshotByTimeOffsetTemplateResponse;
const ModifyContentReviewTemplateRequest = models.ModifyContentReviewTemplateRequest;
const ImageWatermarkInputForUpdate = models.ImageWatermarkInputForUpdate;
const AiContentReviewTaskInput = models.AiContentReviewTaskInput;
const DeleteScheduleRequest = models.DeleteScheduleRequest;
const CreateAdaptiveDynamicStreamingTemplateResponse = models.CreateAdaptiveDynamicStreamingTemplateResponse;
const DeleteSampleSnapshotTemplateRequest = models.DeleteSampleSnapshotTemplateRequest;
const TerrorismOcrReviewTemplateInfoForUpdate = models.TerrorismOcrReviewTemplateInfoForUpdate;
const AiAnalysisTaskInput = models.AiAnalysisTaskInput;
const ImageSpriteTemplate = models.ImageSpriteTemplate;
const AiRecognitionTaskOcrFullTextSegmentTextItem = models.AiRecognitionTaskOcrFullTextSegmentTextItem;
const DeleteAsrHotwordsResponse = models.DeleteAsrHotwordsResponse;
const SmartSubtitleTaskAsrFullTextSegmentItem = models.SmartSubtitleTaskAsrFullTextSegmentItem;
const QualityControlItem = models.QualityControlItem;
const LiveStreamAsrFullTextRecognitionResult = models.LiveStreamAsrFullTextRecognitionResult;
const AiReviewPornOcrTaskOutput = models.AiReviewPornOcrTaskOutput;
const CreateAsrHotwordsRequest = models.CreateAsrHotwordsRequest;
const AiAnalysisTaskHighlightInput = models.AiAnalysisTaskHighlightInput;
const ProhibitedAsrReviewTemplateInfo = models.ProhibitedAsrReviewTemplateInfo;
const SegmentRecognitionItem = models.SegmentRecognitionItem;
const AiReviewPoliticalAsrTaskInput = models.AiReviewPoliticalAsrTaskInput;
const LiveStreamAiAnalysisResultInfo = models.LiveStreamAiAnalysisResultInfo;
const SegmentSpecificInfo = models.SegmentSpecificInfo;
const DescribeStreamLinkSecurityGroupResponse = models.DescribeStreamLinkSecurityGroupResponse;
const MediaAiAnalysisTagItem = models.MediaAiAnalysisTagItem;
const TranscodeTemplate = models.TranscodeTemplate;
const TranslateConfigureInfo = models.TranslateConfigureInfo;
const PornOcrReviewTemplateInfo = models.PornOcrReviewTemplateInfo;
const AiReviewTaskPoliticalAsrResult = models.AiReviewTaskPoliticalAsrResult;
const SubtitleTemplate = models.SubtitleTemplate;
const LiveStreamProcessTask = models.LiveStreamProcessTask;
const AiReviewProhibitedAsrTaskInput = models.AiReviewProhibitedAsrTaskInput;
const DescribeMediaMetaDataResponse = models.DescribeMediaMetaDataResponse;
const SmartSubtitleTaskAsrFullTextResultOutput = models.SmartSubtitleTaskAsrFullTextResultOutput;
const TerrorismOcrReviewTemplateInfo = models.TerrorismOcrReviewTemplateInfo;
const ImageEncodeConfig = models.ImageEncodeConfig;
const AiReviewTaskPornResult = models.AiReviewTaskPornResult;
const AiRecognitionTaskObjectResultOutput = models.AiRecognitionTaskObjectResultOutput;
const AiAnalysisTaskDelLogoOutput = models.AiAnalysisTaskDelLogoOutput;
const DescribeBatchTaskDetailRequest = models.DescribeBatchTaskDetailRequest;
const AiReviewProhibitedAsrTaskOutput = models.AiReviewProhibitedAsrTaskOutput;
const LiveStreamFaceRecognitionResult = models.LiveStreamFaceRecognitionResult;
const LiveStreamAiReviewResultInfo = models.LiveStreamAiReviewResultInfo;
const DescribeSampleSnapshotTemplatesRequest = models.DescribeSampleSnapshotTemplatesRequest;
const CoverConfigureInfoForUpdate = models.CoverConfigureInfoForUpdate;
const DisableWorkflowResponse = models.DisableWorkflowResponse;
const ImageProcessTaskResult = models.ImageProcessTaskResult;
const AiAnalysisTaskClassificationResult = models.AiAnalysisTaskClassificationResult;
const DescribeQualityControlTemplatesResponse = models.DescribeQualityControlTemplatesResponse;
const PoliticalImgReviewTemplateInfoForUpdate = models.PoliticalImgReviewTemplateInfoForUpdate;
const UserDefineOcrTextReviewTemplateInfo = models.UserDefineOcrTextReviewTemplateInfo;
const AdaptiveStreamTemplate = models.AdaptiveStreamTemplate;
const TranscodeTaskInput = models.TranscodeTaskInput;
const SmartSubtitleTemplateItem = models.SmartSubtitleTemplateItem;
const ModifyAIRecognitionTemplateRequest = models.ModifyAIRecognitionTemplateRequest;
const ParseNotificationResponse = models.ParseNotificationResponse;
const ComposeImageOperation = models.ComposeImageOperation;
const CreateSampleSnapshotTemplateResponse = models.CreateSampleSnapshotTemplateResponse;
const CreateLiveRecordTemplateResponse = models.CreateLiveRecordTemplateResponse;
const ActivityResult = models.ActivityResult;
const DescribeAsrHotwordsResponse = models.DescribeAsrHotwordsResponse;
const ResetWorkflowResponse = models.ResetWorkflowResponse;
const HLSConfigureInfo = models.HLSConfigureInfo;
const CreateAIAnalysisTemplateResponse = models.CreateAIAnalysisTemplateResponse;
const MediaProcessTaskSampleSnapshotResult = models.MediaProcessTaskSampleSnapshotResult;
const ModifySmartSubtitleTemplateResponse = models.ModifySmartSubtitleTemplateResponse;
const UserDefineConfigureInfoForUpdate = models.UserDefineConfigureInfoForUpdate;
const S3OutputStorage = models.S3OutputStorage;
const CosFileUploadTrigger = models.CosFileUploadTrigger;
const AiReviewPoliticalAsrTaskOutput = models.AiReviewPoliticalAsrTaskOutput;
const TEHDConfigForUpdate = models.TEHDConfigForUpdate;
const ModifyPersonSampleRequest = models.ModifyPersonSampleRequest;
const AudioTemplateInfo = models.AudioTemplateInfo;
const AsrFullTextConfigureInfo = models.AsrFullTextConfigureInfo;
const ArtifactRepairConfig = models.ArtifactRepairConfig;
const CreateAIRecognitionTemplateRequest = models.CreateAIRecognitionTemplateRequest;
const DescribeBatchTaskDetailResponse = models.DescribeBatchTaskDetailResponse;
const ComposeCanvas = models.ComposeCanvas;
const AiReviewPornTaskOutput = models.AiReviewPornTaskOutput;
const CreateWorkflowResponse = models.CreateWorkflowResponse;
const AiRecognitionTaskAsrFullTextResult = models.AiRecognitionTaskAsrFullTextResult;
const ModifyAIRecognitionTemplateResponse = models.ModifyAIRecognitionTemplateResponse;
const PoliticalImgReviewTemplateInfo = models.PoliticalImgReviewTemplateInfo;
const PoliticalConfigureInfo = models.PoliticalConfigureInfo;
const ModifyAnimatedGraphicsTemplateRequest = models.ModifyAnimatedGraphicsTemplateRequest;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const AiRecognitionTaskOcrWordsSegmentItem = models.AiRecognitionTaskOcrWordsSegmentItem;
const DescribeLiveRecordTemplatesRequest = models.DescribeLiveRecordTemplatesRequest;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const DeleteWordSamplesResponse = models.DeleteWordSamplesResponse;
const LiveStreamTransTextRecognitionResult = models.LiveStreamTransTextRecognitionResult;
const ImageEnhanceConfig = models.ImageEnhanceConfig;
const WatermarkInput = models.WatermarkInput;
const EnableWorkflowResponse = models.EnableWorkflowResponse;
const Activity = models.Activity;
const AiSampleWordInfo = models.AiSampleWordInfo;
const AdaptiveDynamicStreamingInfoItem = models.AdaptiveDynamicStreamingInfoItem;
const ComposeMediaTrack = models.ComposeMediaTrack;
const ProhibitedOcrReviewTemplateInfo = models.ProhibitedOcrReviewTemplateInfo;
const ImageEraseLogoConfig = models.ImageEraseLogoConfig;
const ScheduleReviewTaskResult = models.ScheduleReviewTaskResult;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const LiveStreamRecordResultInfo = models.LiveStreamRecordResultInfo;
const ComposeStyles = models.ComposeStyles;
const CreateLiveRecordTemplateRequest = models.CreateLiveRecordTemplateRequest;
const CreateContentReviewTemplateRequest = models.CreateContentReviewTemplateRequest;
const DescribeContentReviewTemplatesRequest = models.DescribeContentReviewTemplatesRequest;
const AdaptiveDynamicStreamingTaskInput = models.AdaptiveDynamicStreamingTaskInput;
const ModifyQualityControlTemplateRequest = models.ModifyQualityControlTemplateRequest;
const DescribeImageSpriteTemplatesResponse = models.DescribeImageSpriteTemplatesResponse;
const TaskNotifyConfig = models.TaskNotifyConfig;
const FaceEnhanceConfig = models.FaceEnhanceConfig;
const LiveStreamAiReviewImagePornResult = models.LiveStreamAiReviewImagePornResult;
const AiAnalysisTaskFrameTagInput = models.AiAnalysisTaskFrameTagInput;
const MediaAiAnalysisFrameTagSegmentItem = models.MediaAiAnalysisFrameTagSegmentItem;
const AiRecognitionTaskAsrWordsResultItem = models.AiRecognitionTaskAsrWordsResultItem;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const LiveStreamAiRecognitionResultItem = models.LiveStreamAiRecognitionResultItem;
const DeleteImageSpriteTemplateRequest = models.DeleteImageSpriteTemplateRequest;
const LiveScheduleLiveRecordTaskResult = models.LiveScheduleLiveRecordTaskResult;
const AiSampleFailFaceInfo = models.AiSampleFailFaceInfo;
const UserDefineFaceReviewTemplateInfoForUpdate = models.UserDefineFaceReviewTemplateInfoForUpdate;
const SharpEnhanceConfig = models.SharpEnhanceConfig;
const OcrFullTextConfigureInfoForUpdate = models.OcrFullTextConfigureInfoForUpdate;
const AiRecognitionTaskOcrFullTextResultInput = models.AiRecognitionTaskOcrFullTextResultInput;
const DescribeTasksResponse = models.DescribeTasksResponse;
const AiRecognitionTaskFaceResultInput = models.AiRecognitionTaskFaceResultInput;
const VolumeBalanceConfig = models.VolumeBalanceConfig;
const AiReviewPoliticalTaskOutput = models.AiReviewPoliticalTaskOutput;
const AiReviewTaskPoliticalResult = models.AiReviewTaskPoliticalResult;
const AiRecognitionTaskTransTextResultOutput = models.AiRecognitionTaskTransTextResultOutput;
const SmartSubtitlesResult = models.SmartSubtitlesResult;
const ModifySnapshotByTimeOffsetTemplateRequest = models.ModifySnapshotByTimeOffsetTemplateRequest;
const AsrHotWordsConfigure = models.AsrHotWordsConfigure;
const ImageAreaBoxInfo = models.ImageAreaBoxInfo;
const LiveStreamAiReviewResultItem = models.LiveStreamAiReviewResultItem;
const DeleteLiveRecordTemplateResponse = models.DeleteLiveRecordTemplateResponse;
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
const DescribeSchedulesRequest = models.DescribeSchedulesRequest;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const LiveStreamAiReviewImageTerrorismResult = models.LiveStreamAiReviewImageTerrorismResult;
const ProcessLiveStreamRequest = models.ProcessLiveStreamRequest;
const AiAnalysisTaskHorizontalToVerticalOutput = models.AiAnalysisTaskHorizontalToVerticalOutput;
const ModifyImageSpriteTemplateRequest = models.ModifyImageSpriteTemplateRequest;
const AiReviewProhibitedOcrTaskInput = models.AiReviewProhibitedOcrTaskInput;
const DeleteWatermarkTemplateRequest = models.DeleteWatermarkTemplateRequest;
const ComposeSubtitleItem = models.ComposeSubtitleItem;
const DescribeWordSamplesRequest = models.DescribeWordSamplesRequest;
const AddOnSubtitle = models.AddOnSubtitle;
const AwsSQS = models.AwsSQS;
const WordResult = models.WordResult;
const CreateSmartSubtitleTemplateRequest = models.CreateSmartSubtitleTemplateRequest;
const PornConfigureInfoForUpdate = models.PornConfigureInfoForUpdate;
const QualityControlData = models.QualityControlData;
const DrmInfo = models.DrmInfo;
const DescribeSampleSnapshotTemplatesResponse = models.DescribeSampleSnapshotTemplatesResponse;
const ComposeImageItem = models.ComposeImageItem;
const TaskSimpleInfo = models.TaskSimpleInfo;
const MediaContentReviewSegmentItem = models.MediaContentReviewSegmentItem;
const AiContentReviewResult = models.AiContentReviewResult;
const LiveActivityResult = models.LiveActivityResult;
const TerrorismImgReviewTemplateInfo = models.TerrorismImgReviewTemplateInfo;
const AsrHotwordsSet = models.AsrHotwordsSet;
const AiAnalysisTaskHeadTailInput = models.AiAnalysisTaskHeadTailInput;
const DescribeTranscodeTemplatesRequest = models.DescribeTranscodeTemplatesRequest;
const DescribeSmartSubtitleTemplatesResponse = models.DescribeSmartSubtitleTemplatesResponse;
const SchedulesInfo = models.SchedulesInfo;
const DisableWorkflowRequest = models.DisableWorkflowRequest;
const PoliticalConfigureInfoForUpdate = models.PoliticalConfigureInfoForUpdate;
const DescribeWatermarkTemplatesResponse = models.DescribeWatermarkTemplatesResponse;
const DeleteQualityControlTemplateResponse = models.DeleteQualityControlTemplateResponse;
const CreateAnimatedGraphicsTemplateRequest = models.CreateAnimatedGraphicsTemplateRequest;
const FrameTagConfigureInfo = models.FrameTagConfigureInfo;
const DeleteWorkflowResponse = models.DeleteWorkflowResponse;
const ExecuteFunctionRequest = models.ExecuteFunctionRequest;
const AiAnalysisTaskHeadTailOutput = models.AiAnalysisTaskHeadTailOutput;
const ModifyPersonSampleResponse = models.ModifyPersonSampleResponse;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const LiveStreamObjectRecognitionResult = models.LiveStreamObjectRecognitionResult;
const DescribeImageTaskDetailResponse = models.DescribeImageTaskDetailResponse;
const DescribePersonSamplesResponse = models.DescribePersonSamplesResponse;
const ModifyScheduleResponse = models.ModifyScheduleResponse;
const PornConfigureInfo = models.PornConfigureInfo;
const AiRecognitionTaskObjectSeqmentItem = models.AiRecognitionTaskObjectSeqmentItem;
const ImageDenoiseConfig = models.ImageDenoiseConfig;
const VideoDenoiseConfig = models.VideoDenoiseConfig;
const AiRecognitionTaskObjectResult = models.AiRecognitionTaskObjectResult;
const DescribeAIAnalysisTemplatesResponse = models.DescribeAIAnalysisTemplatesResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models.CreateSnapshotByTimeOffsetTemplateRequest;
const ParseLiveStreamProcessNotificationRequest = models.ParseLiveStreamProcessNotificationRequest;
const AiRecognitionTaskAsrWordsResult = models.AiRecognitionTaskAsrWordsResult;
const AiAnalysisTaskHeadTailResult = models.AiAnalysisTaskHeadTailResult;
const CreateSampleSnapshotTemplateRequest = models.CreateSampleSnapshotTemplateRequest;
const WorkflowTask = models.WorkflowTask;
const SmartSubtitleTaskAsrFullTextResult = models.SmartSubtitleTaskAsrFullTextResult;
const AiReviewTaskPornAsrResult = models.AiReviewTaskPornAsrResult;
const EditMediaFileInfo = models.EditMediaFileInfo;
const ComposeAudioStream = models.ComposeAudioStream;
const SmartSubtitleTaskTransTextSegmentItem = models.SmartSubtitleTaskTransTextSegmentItem;
const FaceConfigureInfo = models.FaceConfigureInfo;
const AiRecognitionTaskFaceResultOutput = models.AiRecognitionTaskFaceResultOutput;
const PornImgReviewTemplateInfoForUpdate = models.PornImgReviewTemplateInfoForUpdate;
const CreateWatermarkTemplateResponse = models.CreateWatermarkTemplateResponse;
const DescribeStreamLinkSecurityGroupRequest = models.DescribeStreamLinkSecurityGroupRequest;
const AiReviewPoliticalOcrTaskOutput = models.AiReviewPoliticalOcrTaskOutput;
const OcrFullTextConfigureInfo = models.OcrFullTextConfigureInfo;
const ModifyLiveRecordTemplateRequest = models.ModifyLiveRecordTemplateRequest;
const ModifySmartSubtitleTemplateRequest = models.ModifySmartSubtitleTemplateRequest;
const DescribeTranscodeTemplatesResponse = models.DescribeTranscodeTemplatesResponse;
const DeleteAnimatedGraphicsTemplateRequest = models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models.DeleteSnapshotByTimeOffsetTemplateRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models.DescribeAnimatedGraphicsTemplatesResponse;
const MediaAiAnalysisFrameTagItem = models.MediaAiAnalysisFrameTagItem;
const ActivityResItem = models.ActivityResItem;
const SpekeDrm = models.SpekeDrm;
const AiAnalysisTaskDelLogoResult = models.AiAnalysisTaskDelLogoResult;
const SampleSnapshotTaskInput = models.SampleSnapshotTaskInput;
const AiRecognitionTaskAsrWordsResultOutput = models.AiRecognitionTaskAsrWordsResultOutput;
const QualityControlTemplate = models.QualityControlTemplate;
const TerrorismConfigureInfo = models.TerrorismConfigureInfo;
const PoliticalAsrReviewTemplateInfo = models.PoliticalAsrReviewTemplateInfo;
const SmartSubtitlesTaskInput = models.SmartSubtitlesTaskInput;
const CreateAnimatedGraphicsTemplateResponse = models.CreateAnimatedGraphicsTemplateResponse;
const SampleSnapshotTemplate = models.SampleSnapshotTemplate;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const AudioEnhanceConfig = models.AudioEnhanceConfig;
const AiRecognitionTaskFaceResultItem = models.AiRecognitionTaskFaceResultItem;
const AiAnalysisTaskDescriptionInput = models.AiAnalysisTaskDescriptionInput;
const AiAnalysisTaskCoverInput = models.AiAnalysisTaskCoverInput;
const ComposeAudioOperation = models.ComposeAudioOperation;
const CreateSmartSubtitleTemplateResponse = models.CreateSmartSubtitleTemplateResponse;
const LiveStreamAiAnalysisResultItem = models.LiveStreamAiAnalysisResultItem;
const AiRecognitionTaskTransTextResult = models.AiRecognitionTaskTransTextResult;
const EditMediaTaskOutput = models.EditMediaTaskOutput;
const HighlightSegmentItem = models.HighlightSegmentItem;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const LowLightEnhanceConfig = models.LowLightEnhanceConfig;
const DescribeMediaMetaDataRequest = models.DescribeMediaMetaDataRequest;
const FrameTagConfigureInfoForUpdate = models.FrameTagConfigureInfoForUpdate;
const CreateImageSpriteTemplateResponse = models.CreateImageSpriteTemplateResponse;
const DescribeAIRecognitionTemplatesRequest = models.DescribeAIRecognitionTemplatesRequest;
const AiRecognitionTaskTransTextSegmentItem = models.AiRecognitionTaskTransTextSegmentItem;
const ModifyWatermarkTemplateResponse = models.ModifyWatermarkTemplateResponse;
const AiRecognitionResult = models.AiRecognitionResult;


/**
 * mps client
 * @class
 */
class MpsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mps.intl.tencentcloudapi.com", "2019-06-12", credential, region, profile);
    }
    
    /**
     * This API is used to query a smart subtitle hotword lexicon.
     * @param {DescribeAsrHotwordsRequest} req
     * @param {function(string, DescribeAsrHotwordsResponse):void} cb
     * @public
     */
    DescribeAsrHotwords(req, cb) {
        let resp = new DescribeAsrHotwordsResponse();
        this.request("DescribeAsrHotwords", req, resp, cb);
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
     * This API is used to query the details of the task execution status and results by task ID (tasks submitted within the last 7 days can be queried).
     * @param {DescribeBatchTaskDetailRequest} req
     * @param {function(string, DescribeBatchTaskDetailResponse):void} cb
     * @public
     */
    DescribeBatchTaskDetail(req, cb) {
        let resp = new DescribeBatchTaskDetailResponse();
        this.request("DescribeBatchTaskDetail", req, resp, cb);
    }

    /**
     * This API is used to modify a live recording template.
     * @param {ModifyLiveRecordTemplateRequest} req
     * @param {function(string, ModifyLiveRecordTemplateResponse):void} cb
     * @public
     */
    ModifyLiveRecordTemplate(req, cb) {
        let resp = new ModifyLiveRecordTemplateResponse();
        this.request("ModifyLiveRecordTemplate", req, resp, cb);
    }

    /**
     * This API is used to edit a video to generate a new one. Editing features include:
 

1. **Editing task**: simple video editing, such as clipping and splicing.
1) Edit a file to generate a new video.
2) Splice multiple files to generate a new video.
3) Edit multiple files and then splice them to generate a new video.

2. **Compositing task**: Generate a new video by describing information through APIs.
1) Multi-track (video, audio, and subtitles) and multi-type elements (video, image, audio, text, and empty).
2) Image level: mapping, zoom in/out, arbitrary rotation, mirroring, and more.
3) Audio level: volume control, fade in/out, mixing, and more.
4) Video level: transition, playback speed adjustment, splicing, clipping, subtitles, picture-in-picture, audio-video separation, entrance and exit animations, and more.
     * @param {EditMediaRequest} req
     * @param {function(string, EditMediaResponse):void} cb
     * @public
     */
    EditMedia(req, cb) {
        let resp = new EditMediaResponse();
        this.request("EditMedia", req, resp, cb);
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
     * This API is used to delete a user-defined smart subtitle template.
     * @param {DeleteSmartSubtitleTemplateRequest} req
     * @param {function(string, DeleteSmartSubtitleTemplateResponse):void} cb
     * @public
     */
    DeleteSmartSubtitleTemplate(req, cb) {
        let resp = new DeleteSmartSubtitleTemplateResponse();
        this.request("DeleteSmartSubtitleTemplate", req, resp, cb);
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
     * This API is used to initiate a processing task for video URLs or media files in COS. Features include:
1. Video transcoding (standard transcoding, TSC transcoding, and audio/video enhancement).
2. Video-to-GIF conversion.
3. Time point screenshot of videos.
4. Sampled screenshot of videos.
5. Image sprite of videos.
6. Adaptive bitrate stream conversion for videos.
7. Intelligent content moderation (pornography detection and sensitive information detection).
8. Intelligent content analysis (tag, category, cover, frame tag, video splitting, highlight, opening and ending clips, and game tracking).
9. Intelligent content recognition (human face, full text, text keyword, full speech, speech keyword, speech translation, and object).
10. Media quality inspection (live stream format diagnosis, audio and video content detection (jitter, blur, low light, overexposure, black and white edges, black and white screens, screen glitch, noise, mosaic, QR code, and more), and no-reference scoring).

11. Smart subtitle (full speech, speech hotword, and speech translation).
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        let resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
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
     * This API is used to get a live recording template.
     * @param {DescribeLiveRecordTemplatesRequest} req
     * @param {function(string, DescribeLiveRecordTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplates(req, cb) {
        let resp = new DescribeLiveRecordTemplatesResponse();
        this.request("DescribeLiveRecordTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete a smart subtitle hotword lexicon.
     * @param {DeleteAsrHotwordsRequest} req
     * @param {function(string, DeleteAsrHotwordsResponse):void} cb
     * @public
     */
    DeleteAsrHotwords(req, cb) {
        let resp = new DeleteAsrHotwordsResponse();
        this.request("DeleteAsrHotwords", req, resp, cb);
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
     * This API is used to obtain the hotword lexicon list.
     * @param {DescribeAsrHotwordsListRequest} req
     * @param {function(string, DescribeAsrHotwordsListResponse):void} cb
     * @public
     */
    DescribeAsrHotwordsList(req, cb) {
        let resp = new DescribeAsrHotwordsListResponse();
        this.request("DescribeAsrHotwordsList", req, resp, cb);
    }

    /**
     * * This API is used to query tasks.
* If the data is large, one API call may not be able to obtain all the tasks in the query. You can use the `ScrollToken` parameter to query tasks with multiple calls.
* Only tasks in the last seven days (168 hours) can be queried.
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
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
     * This API is reserved for special circumstances. Do not use it unless you are directed to use it by technical support.
     * @param {ExecuteFunctionRequest} req
     * @param {function(string, ExecuteFunctionResponse):void} cb
     * @public
     */
    ExecuteFunction(req, cb) {
        let resp = new ExecuteFunctionResponse();
        this.request("ExecuteFunction", req, resp, cb);
    }

    /**
     * This API is used to initiate batch processing tasks for URL video links, with features including:
Smart subtitle (full speech, speech hotword, and speech translation)
     * @param {BatchProcessMediaRequest} req
     * @param {function(string, BatchProcessMediaResponse):void} cb
     * @public
     */
    BatchProcessMedia(req, cb) {
        let resp = new BatchProcessMediaResponse();
        this.request("BatchProcessMedia", req, resp, cb);
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
     * This API is used to create a custom content moderation template. Up to 50 templates can be created in total.
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
     * This API is used to modify a scheme.
     * @param {ModifyScheduleRequest} req
     * @param {function(string, ModifyScheduleResponse):void} cb
     * @public
     */
    ModifySchedule(req, cb) {
        let resp = new ModifyScheduleResponse();
        this.request("ModifySchedule", req, resp, cb);
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
     * This API is used to delete a media quality inspection template.
     * @param {DeleteQualityControlTemplateRequest} req
     * @param {function(string, DeleteQualityControlTemplateResponse):void} cb
     * @public
     */
    DeleteQualityControlTemplate(req, cb) {
        let resp = new DeleteQualityControlTemplateResponse();
        this.request("DeleteQualityControlTemplate", req, resp, cb);
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
     * This API is used to create a media quality inspection template. Up to 50 templates can be created.
     * @param {CreateQualityControlTemplateRequest} req
     * @param {function(string, CreateQualityControlTemplateResponse):void} cb
     * @public
     */
    CreateQualityControlTemplate(req, cb) {
        let resp = new CreateQualityControlTemplateResponse();
        this.request("CreateQualityControlTemplate", req, resp, cb);
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
     * This API is used to initiate image processing, with features including:
1. Format conversion.
2. Image enhancement.
3. Image erasure.
     * @param {ProcessImageRequest} req
     * @param {function(string, ProcessImageResponse):void} cb
     * @public
     */
    ProcessImage(req, cb) {
        let resp = new ProcessImageResponse();
        this.request("ProcessImage", req, resp, cb);
    }

    /**
     * This API is used to create a custom smart subtitle template.
     * @param {CreateSmartSubtitleTemplateRequest} req
     * @param {function(string, CreateSmartSubtitleTemplateResponse):void} cb
     * @public
     */
    CreateSmartSubtitleTemplate(req, cb) {
        let resp = new CreateSmartSubtitleTemplateResponse();
        this.request("CreateSmartSubtitleTemplate", req, resp, cb);
    }

    /**
     * This API is used to query a scheme.
     * @param {DescribeSchedulesRequest} req
     * @param {function(string, DescribeSchedulesResponse):void} cb
     * @public
     */
    DescribeSchedules(req, cb) {
        let resp = new DescribeSchedulesResponse();
        this.request("DescribeSchedules", req, resp, cb);
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
     * This API is used to create a live recording template.
     * @param {CreateLiveRecordTemplateRequest} req
     * @param {function(string, CreateLiveRecordTemplateResponse):void} cb
     * @public
     */
    CreateLiveRecordTemplate(req, cb) {
        let resp = new CreateLiveRecordTemplateResponse();
        this.request("CreateLiveRecordTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a custom content moderation template.
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
     * This API is used to modify a media quality inspection template.
     * @param {ModifyQualityControlTemplateRequest} req
     * @param {function(string, ModifyQualityControlTemplateResponse):void} cb
     * @public
     */
    ModifyQualityControlTemplate(req, cb) {
        let resp = new ModifyQualityControlTemplateResponse();
        this.request("ModifyQualityControlTemplate", req, resp, cb);
    }

    /**
     * This API is used to obtain the list of smart subtitle templates based on template unique identifier. The returned result includes all matching user-defined smart subtitle templates and system preset smart subtitle templates.
     * @param {DescribeSmartSubtitleTemplatesRequest} req
     * @param {function(string, DescribeSmartSubtitleTemplatesResponse):void} cb
     * @public
     */
    DescribeSmartSubtitleTemplates(req, cb) {
        let resp = new DescribeSmartSubtitleTemplatesResponse();
        this.request("DescribeSmartSubtitleTemplates", req, resp, cb);
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
     * This API is used to query content moderation templates by template ID. Both custom and preset templates that match the template IDs passed in will be returned.
     * @param {DescribeContentReviewTemplatesRequest} req
     * @param {function(string, DescribeContentReviewTemplatesResponse):void} cb
     * @public
     */
    DescribeContentReviewTemplates(req, cb) {
        let resp = new DescribeContentReviewTemplatesResponse();
        this.request("DescribeContentReviewTemplates", req, resp, cb);
    }

    /**
     * This API is used to update a smart subtitle hotword lexicon.
     * @param {ModifyAsrHotwordsRequest} req
     * @param {function(string, ModifyAsrHotwordsResponse):void} cb
     * @public
     */
    ModifyAsrHotwords(req, cb) {
        let resp = new ModifyAsrHotwordsResponse();
        this.request("ModifyAsrHotwords", req, resp, cb);
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
     * This API is used to create a workflow for media files uploaded to a specified COS bucket. A workflow may include the following tasks:
1. Video transcoding (with watermark)
2. Animated image generating
3. Time point screencapturing
4. Sampled screencapturing
5. Image sprite generating
6. Adaptive bitrate streaming
7. Intelligent content moderation (detection of pornographic and sensitive content)
8. Intelligent content analysis (labeling, categorization, thumbnail generation, frame-specific labeling)
9. Intelligent content recognition (face, full text, text keyword, full speech, and speech keyword)

Note: A workflow is disabled upon creation. You need to manually enable it.
     * @param {CreateWorkflowRequest} req
     * @param {function(string, CreateWorkflowResponse):void} cb
     * @public
     */
    CreateWorkflow(req, cb) {
        let resp = new CreateWorkflowResponse();
        this.request("CreateWorkflow", req, resp, cb);
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
     * This API is used to create a scheme for media files uploaded to a specified COS bucket. A scheme may include the following tasks:
1. Video transcoding (with watermark)
2. Animated screenshot generating
3. Time point screencapturing
4. Sampled screencapturing
5. Image sprite generating
6. Adaptive bitrate streaming
7. Intelligent content moderation (detection of pornographic and sensitive content)
8. Intelligent content analysis (labeling, categorization, thumbnail generation, labeling by frame)
9. Intelligent content recognition (face, full text, text keyword, full speech, and speech keyword)

Note: A scheme is disabled upon creation. You need to manually enable it.
     * @param {CreateScheduleRequest} req
     * @param {function(string, CreateScheduleResponse):void} cb
     * @public
     */
    CreateSchedule(req, cb) {
        let resp = new CreateScheduleResponse();
        this.request("CreateSchedule", req, resp, cb);
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
     * This API is used to delete a scheme.
     * @param {DeleteScheduleRequest} req
     * @param {function(string, DeleteScheduleResponse):void} cb
     * @public
     */
    DeleteSchedule(req, cb) {
        let resp = new DeleteScheduleResponse();
        this.request("DeleteSchedule", req, resp, cb);
    }

    /**
     * This API is used to query a security group.
     * @param {DescribeStreamLinkSecurityGroupRequest} req
     * @param {function(string, DescribeStreamLinkSecurityGroupResponse):void} cb
     * @public
     */
    DescribeStreamLinkSecurityGroup(req, cb) {
        let resp = new DescribeStreamLinkSecurityGroupResponse();
        this.request("DescribeStreamLinkSecurityGroup", req, resp, cb);
    }

    /**
     * This API is used to modify a user-defined smart subtitle template.
     * @param {ModifySmartSubtitleTemplateRequest} req
     * @param {function(string, ModifySmartSubtitleTemplateResponse):void} cb
     * @public
     */
    ModifySmartSubtitleTemplate(req, cb) {
        let resp = new ModifySmartSubtitleTemplateResponse();
        this.request("ModifySmartSubtitleTemplate", req, resp, cb);
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
     * This API is used to enable a scheme.
     * @param {EnableScheduleRequest} req
     * @param {function(string, EnableScheduleResponse):void} cb
     * @public
     */
    EnableSchedule(req, cb) {
        let resp = new EnableScheduleResponse();
        this.request("EnableSchedule", req, resp, cb);
    }

    /**
     * This API is used to initiate live stream processing tasks. Such tasks may include the following:

* Intelligent content moderation (detection of pornographic content in images and audio, detection of sensitive information)
* Intelligent content recognition (face, full text, text keyword, full speech, speech keyword, real-time speech translation, object recognition, game event tracking)
* Intelligent content analysis (real-time news splitting)
* Quality control, including recognizing live stream format, checking audio/video content for flickering, blur, low light, overexposure, black bars, white bars, black screen, white screen, noise, pixelation, QR code, etc., and no-reference scoring.
* Recording

HTTP callbacks are supported for live stream processing events. Notifications can also be written in real time to and read from a CMQ queue. The output files of processing tasks are saved to the storage you specify.
     * @param {ProcessLiveStreamRequest} req
     * @param {function(string, ProcessLiveStreamResponse):void} cb
     * @public
     */
    ProcessLiveStream(req, cb) {
        let resp = new ProcessLiveStreamResponse();
        this.request("ProcessLiveStream", req, resp, cb);
    }

    /**
     * This API is used to delete a live recording template.
     * @param {DeleteLiveRecordTemplateRequest} req
     * @param {function(string, DeleteLiveRecordTemplateResponse):void} cb
     * @public
     */
    DeleteLiveRecordTemplate(req, cb) {
        let resp = new DeleteLiveRecordTemplateResponse();
        this.request("DeleteLiveRecordTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the details of the task execution status and results by task ID (tasks submitted within the last 7 days can be queried).
     * @param {DescribeImageTaskDetailRequest} req
     * @param {function(string, DescribeImageTaskDetailResponse):void} cb
     * @public
     */
    DescribeImageTaskDetail(req, cb) {
        let resp = new DescribeImageTaskDetailResponse();
        this.request("DescribeImageTaskDetail", req, resp, cb);
    }

    /**
     * This API is used to create a smart subtitle hotword lexicon.
     * @param {CreateAsrHotwordsRequest} req
     * @param {function(string, CreateAsrHotwordsResponse):void} cb
     * @public
     */
    CreateAsrHotwords(req, cb) {
        let resp = new CreateAsrHotwordsResponse();
        this.request("CreateAsrHotwords", req, resp, cb);
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
     * This API is used to query custom media quality inspection templates, supporting paged queries by conditions.
     * @param {DescribeQualityControlTemplatesRequest} req
     * @param {function(string, DescribeQualityControlTemplatesResponse):void} cb
     * @public
     */
    DescribeQualityControlTemplates(req, cb) {
        let resp = new DescribeQualityControlTemplatesResponse();
        this.request("DescribeQualityControlTemplates", req, resp, cb);
    }

    /**
     * This API is used to disable a scheme.
     * @param {DisableScheduleRequest} req
     * @param {function(string, DisableScheduleResponse):void} cb
     * @public
     */
    DisableSchedule(req, cb) {
        let resp = new DisableScheduleResponse();
        this.request("DisableSchedule", req, resp, cb);
    }

    /**
     * This API is used to modify a custom content moderation template.
     * @param {ModifyContentReviewTemplateRequest} req
     * @param {function(string, ModifyContentReviewTemplateResponse):void} cb
     * @public
     */
    ModifyContentReviewTemplate(req, cb) {
        let resp = new ModifyContentReviewTemplateResponse();
        this.request("ModifyContentReviewTemplate", req, resp, cb);
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
     * This API is used to delete an image sprite generating template.
     * @param {DeleteImageSpriteTemplateRequest} req
     * @param {function(string, DeleteImageSpriteTemplateResponse):void} cb
     * @public
     */
    DeleteImageSpriteTemplate(req, cb) {
        let resp = new DeleteImageSpriteTemplateResponse();
        this.request("DeleteImageSpriteTemplate", req, resp, cb);
    }


}
module.exports = MpsClient;
