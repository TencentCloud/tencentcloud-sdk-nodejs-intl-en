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
const ProcessMediaRequest = models.ProcessMediaRequest;
const Canvas = models.Canvas;
const ModifySampleSnapshotTemplateResponse = models.ModifySampleSnapshotTemplateResponse;
const AigcVideoOutputConfig = models.AigcVideoOutputConfig;
const CreateAigcVideoRedrawTaskRequest = models.CreateAigcVideoRedrawTaskRequest;
const ImageSceneAigcEncodeConfig = models.ImageSceneAigcEncodeConfig;
const DomainCLSTargetInfo = models.DomainCLSTargetInfo;
const SnapshotByTimeOffset2017 = models.SnapshotByTimeOffset2017;
const CreateStorageRegionRequest = models.CreateStorageRegionRequest;
const AiRecognitionTaskAsrFullTextSegmentItem = models.AiRecognitionTaskAsrFullTextSegmentItem;
const DescribeFileAttributesTask = models.DescribeFileAttributesTask;
const ExtractBlindWatermarkRequest = models.ExtractBlindWatermarkRequest;
const ReviewAudioVideoTaskInput = models.ReviewAudioVideoTaskInput;
const DescribeAllClassRequest = models.DescribeAllClassRequest;
const AigcImageTaskOutput = models.AigcImageTaskOutput;
const CreateAigcVideoRedrawTaskResponse = models.CreateAigcVideoRedrawTaskResponse;
const DescribeRoundPlaysRequest = models.DescribeRoundPlaysRequest;
const ReviewInfo = models.ReviewInfo;
const AiAnalysisTaskClassificationInput = models.AiAnalysisTaskClassificationInput;
const SvgWatermarkInput = models.SvgWatermarkInput;
const CreateTranscodeTemplateRequest = models.CreateTranscodeTemplateRequest;
const MPSSubtitleEmbedConfig = models.MPSSubtitleEmbedConfig;
const AudioTrackItem = models.AudioTrackItem;
const MediaAiAnalysisHighlightItem = models.MediaAiAnalysisHighlightItem;
const ProcessMediaByProcedureRequest = models.ProcessMediaByProcedureRequest;
const DescribeAnimatedGraphicsTemplatesRequest = models.DescribeAnimatedGraphicsTemplatesRequest;
const LiveRealTimeClipResponse = models.LiveRealTimeClipResponse;
const AiReviewTaskProhibitedAsrResult = models.AiReviewTaskProhibitedAsrResult;
const AdaptiveDynamicStreamingTemplate = models.AdaptiveDynamicStreamingTemplate;
const HttpHeaderPathRule = models.HttpHeaderPathRule;
const TextToSpeechAsyncInput = models.TextToSpeechAsyncInput;
const DeleteJustInTimeTranscodeTemplateRequest = models.DeleteJustInTimeTranscodeTemplateRequest;
const DeleteAnimatedGraphicsTemplateResponse = models.DeleteAnimatedGraphicsTemplateResponse;
const AiReviewTaskProhibitedOcrResult = models.AiReviewTaskProhibitedOcrResult;
const ProhibitedAsrReviewTemplateInfo = models.ProhibitedAsrReviewTemplateInfo;
const AiRecognitionTaskAsrFullTextResultOutput = models.AiRecognitionTaskAsrFullTextResultOutput;
const AiReviewProhibitedOcrTaskOutput = models.AiReviewProhibitedOcrTaskOutput;
const ProcessImageAsyncTemplateItem = models.ProcessImageAsyncTemplateItem;
const DescribeAigcFaceInfoRequest = models.DescribeAigcFaceInfoRequest;
const CacheConfigFollowOrigin = models.CacheConfigFollowOrigin;
const NoiseConfigureInfo = models.NoiseConfigureInfo;
const DescribeAigcFaceInfoAsyncResponse = models.DescribeAigcFaceInfoAsyncResponse;
const ManageTaskResponse = models.ManageTaskResponse;
const CreateImageProcessingTemplateRequest = models.CreateImageProcessingTemplateRequest;
const ModifyDefaultStorageRegionRequest = models.ModifyDefaultStorageRegionRequest;
const DeleteLLMComprehendTemplateRequest = models.DeleteLLMComprehendTemplateRequest;
const CloneCDNDomainRequest = models.CloneCDNDomainRequest;
const AigcHunyuan3DOutputConfig = models.AigcHunyuan3DOutputConfig;
const QualityInspectTaskOutput = models.QualityInspectTaskOutput;
const QualityEnhanceTaskInput = models.QualityEnhanceTaskInput;
const TextToSpeechAsyncOutput = models.TextToSpeechAsyncOutput;
const CreateAigcAdvancedCustomElementRequest = models.CreateAigcAdvancedCustomElementRequest;
const Origin = models.Origin;
const FaceRecognitionInfo = models.FaceRecognitionInfo;
const RebuildMediaTargetInfo = models.RebuildMediaTargetInfo;
const ModifySampleSnapshotTemplateRequest = models.ModifySampleSnapshotTemplateRequest;
const AiReviewPoliticalOcrTaskInput = models.AiReviewPoliticalOcrTaskInput;
const ModifyJustInTimeTranscodeTemplateRequest = models.ModifyJustInTimeTranscodeTemplateRequest;
const ManageTaskRequest = models.ManageTaskRequest;
const DescribeAigcApiTokensResponse = models.DescribeAigcApiTokensResponse;
const EnhanceConfig = models.EnhanceConfig;
const MediaInputInfo = models.MediaInputInfo;
const MPSEmbedSubtitleTemplate = models.MPSEmbedSubtitleTemplate;
const CreateImageSpriteTask2017 = models.CreateImageSpriteTask2017;
const DescribeImageReviewUsageDataResponse = models.DescribeImageReviewUsageDataResponse;
const MPSSmartEraseSubtitleConfig = models.MPSSmartEraseSubtitleConfig;
const TempCertificate = models.TempCertificate;
const RebuildMediaRequest = models.RebuildMediaRequest;
const MPSSmartEraseWatermarkConfig = models.MPSSmartEraseWatermarkConfig;
const LLMComprehendSummary = models.LLMComprehendSummary;
const DescribeDefaultDistributionConfigRequest = models.DescribeDefaultDistributionConfigRequest;
const AiReviewTaskPoliticalOcrResult = models.AiReviewTaskPoliticalOcrResult;
const VideoDubbingAsyncInput = models.VideoDubbingAsyncInput;
const QualityEnhanceTask = models.QualityEnhanceTask;
const AiSampleWord = models.AiSampleWord;
const OverrideTranscodeParameter = models.OverrideTranscodeParameter;
const PoliticalOcrReviewTemplateInfo = models.PoliticalOcrReviewTemplateInfo;
const CreateImageSpriteTemplateRequest = models.CreateImageSpriteTemplateRequest;
const AigcAudioReferenceAudioInfo = models.AigcAudioReferenceAudioInfo;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const DeleteProcessImageAsyncTemplateResponse = models.DeleteProcessImageAsyncTemplateResponse;
const PornOcrReviewTemplateInfoForUpdate = models.PornOcrReviewTemplateInfoForUpdate;
const RefreshUrlCacheRequest = models.RefreshUrlCacheRequest;
const SceneAigcVideoTaskInputFileInfo = models.SceneAigcVideoTaskInputFileInfo;
const FaceConfigureInfoForUpdate = models.FaceConfigureInfoForUpdate;
const DescribeAIAnalysisTemplatesRequest = models.DescribeAIAnalysisTemplatesRequest;
const ContentReviewTemplateItem = models.ContentReviewTemplateItem;
const AigcImageTaskOutputFileInfo = models.AigcImageTaskOutputFileInfo;
const TaskSimpleInfo = models.TaskSimpleInfo;
const DeleteAIRecognitionTemplateResponse = models.DeleteAIRecognitionTemplateResponse;
const VideoEnhanceConfig = models.VideoEnhanceConfig;
const DeleteContentReviewTemplateRequest = models.DeleteContentReviewTemplateRequest;
const CreateAigcSubjectResponse = models.CreateAigcSubjectResponse;
const AiReviewPoliticalTaskInput = models.AiReviewPoliticalTaskInput;
const VerifyDomainRecordResponse = models.VerifyDomainRecordResponse;
const AudioTransform = models.AudioTransform;
const TranscodeTask2017 = models.TranscodeTask2017;
const DescribeCurrentPlaylistResponse = models.DescribeCurrentPlaylistResponse;
const ModifySuperPlayerConfigRequest = models.ModifySuperPlayerConfigRequest;
const ResetProcedureTemplateRequest = models.ResetProcedureTemplateRequest;
const ContentReviewOcrResult = models.ContentReviewOcrResult;
const ComposeMediaResponse = models.ComposeMediaResponse;
const VideoDubbingAsyncTask = models.VideoDubbingAsyncTask;
const RoundPlayInfo = models.RoundPlayInfo;
const CloneVoiceSyncRequest = models.CloneVoiceSyncRequest;
const AigcFaceIdentityInfo = models.AigcFaceIdentityInfo;
const DeleteMPSTemplateRequest = models.DeleteMPSTemplateRequest;
const DrmStreamingsInfoForUpdate = models.DrmStreamingsInfoForUpdate;
const ClassificationConfigureInfo = models.ClassificationConfigureInfo;
const AbnormalLightingConfigureInfoForUpdate = models.AbnormalLightingConfigureInfoForUpdate;
const AigcHunyuan3DReferenceImageInfo = models.AigcHunyuan3DReferenceImageInfo;
const CreateCDNDomainResponse = models.CreateCDNDomainResponse;
const AudioTemplateInfoForUpdate = models.AudioTemplateInfoForUpdate;
const DescribeDailyMediaPlayStatResponse = models.DescribeDailyMediaPlayStatResponse;
const CustomVoiceInfo = models.CustomVoiceInfo;
const DiffusionEnhanceInfo = models.DiffusionEnhanceInfo;
const CreateAigcAudioCloneTask = models.CreateAigcAudioCloneTask;
const ProcedureReviewAudioVideoTaskInput = models.ProcedureReviewAudioVideoTaskInput;
const AiRecognitionTaskAsrWordsSegmentItem = models.AiRecognitionTaskAsrWordsSegmentItem;
const CreateAigcAdvancedCustomElementResponse = models.CreateAigcAdvancedCustomElementResponse;
const TextWatermarkTemplateInput = models.TextWatermarkTemplateInput;
const TransitionOpertion = models.TransitionOpertion;
const SegmentConfigureInfoForUpdate = models.SegmentConfigureInfoForUpdate;
const QualityEvaluationConfigureInfoForUpdate = models.QualityEvaluationConfigureInfoForUpdate;
const AiRecognitionTaskInput = models.AiRecognitionTaskInput;
const CreateCDNDomainRequest = models.CreateCDNDomainRequest;
const VideoConfigureInfoForUpdate = models.VideoConfigureInfoForUpdate;
const ReviewAudioVideoTaskOutput = models.ReviewAudioVideoTaskOutput;
const VoiceUpdateFields = models.VoiceUpdateFields;
const AudioTemplateInfo = models.AudioTemplateInfo;
const DeleteAigcAdvancedCustomElementRequest = models.DeleteAigcAdvancedCustomElementRequest;
const CoverConfigureInfo = models.CoverConfigureInfo;
const DescribeClientUploadAccelerationUsageDataResponse = models.DescribeClientUploadAccelerationUsageDataResponse;
const ModifyRebuildMediaTemplateRequest = models.ModifyRebuildMediaTemplateRequest;
const ComposeMediaRequest = models.ComposeMediaRequest;
const DescribeCLSTopicsRequest = models.DescribeCLSTopicsRequest;
const AIRecognitionTemplateItem = models.AIRecognitionTemplateItem;
const AiReviewPornAsrTaskInput = models.AiReviewPornAsrTaskInput;
const AiRecognitionTaskFaceResult = models.AiRecognitionTaskFaceResult;
const AiRecognitionTaskHeadTailResultInput = models.AiRecognitionTaskHeadTailResultInput;
const CreateAdaptiveDynamicStreamingTemplateRequest = models.CreateAdaptiveDynamicStreamingTemplateRequest;
const PushUrlCacheResponse = models.PushUrlCacheResponse;
const MediaProcessTaskSampleSnapshotResult = models.MediaProcessTaskSampleSnapshotResult;
const DescribeDailyMediaPlayStatRequest = models.DescribeDailyMediaPlayStatRequest;
const TerrorismImgReviewTemplateInfoForUpdate = models.TerrorismImgReviewTemplateInfoForUpdate;
const AudioBeautifyInfo = models.AudioBeautifyInfo;
const AiRecognitionTaskOcrFullTextResultOutput = models.AiRecognitionTaskOcrFullTextResultOutput;
const ModifyTranscodeTemplateRequest = models.ModifyTranscodeTemplateRequest;
const ModifyMPSTemplateRequest = models.ModifyMPSTemplateRequest;
const ProcessMediaByMPS = models.ProcessMediaByMPS;
const EditMediaTaskInput = models.EditMediaTaskInput;
const DescribeImageSpriteTemplatesRequest = models.DescribeImageSpriteTemplatesRequest;
const DeleteImageProcessingTemplateRequest = models.DeleteImageProcessingTemplateRequest;
const MPSTemplate = models.MPSTemplate;
const DescribeDailyPlayStatFileListResponse = models.DescribeDailyPlayStatFileListResponse;
const CLSTopicInfo = models.CLSTopicInfo;
const MPSAIAnalysisConfigureInfo = models.MPSAIAnalysisConfigureInfo;
const AbnormalLightingConfigureInfo = models.AbnormalLightingConfigureInfo;
const TextWatermarkTemplateInputForUpdate = models.TextWatermarkTemplateInputForUpdate;
const SetVodDomainCertificateRequest = models.SetVodDomainCertificateRequest;
const DeleteSuperPlayerConfigRequest = models.DeleteSuperPlayerConfigRequest;
const AiReviewTerrorismOcrTaskInput = models.AiReviewTerrorismOcrTaskInput;
const AiRecognitionTaskOcrWordsResultInput = models.AiRecognitionTaskOcrWordsResultInput;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const SceneAigcImageTaskOutputFileInfo = models.SceneAigcImageTaskOutputFileInfo;
const CreateAigcHunyuan3DTaskRequest = models.CreateAigcHunyuan3DTaskRequest;
const CreateAigcQuotaResponse = models.CreateAigcQuotaResponse;
const DescribeProcedureTemplatesRequest = models.DescribeProcedureTemplatesRequest;
const AiReviewPornTaskInput = models.AiReviewPornTaskInput;
const JitterConfigureInfoForUpdate = models.JitterConfigureInfoForUpdate;
const CloneVoiceAsyncTask = models.CloneVoiceAsyncTask;
const CreateProcedureTemplateRequest = models.CreateProcedureTemplateRequest;
const MediaProcessTaskAnimatedGraphicResult = models.MediaProcessTaskAnimatedGraphicResult;
const DeleteAigcQuotaRequest = models.DeleteAigcQuotaRequest;
const AigcUsageDataItem = models.AigcUsageDataItem;
const MPSOutputFile = models.MPSOutputFile;
const QualityEvaluationConfigureInfo = models.QualityEvaluationConfigureInfo;
const CreatePersonSampleRequest = models.CreatePersonSampleRequest;
const RemoveWatermarkTask = models.RemoveWatermarkTask;
const ProcedureTask = models.ProcedureTask;
const ReviewAudioVideoRequest = models.ReviewAudioVideoRequest;
const StorageRegionInfo = models.StorageRegionInfo;
const MediaTransitionItem = models.MediaTransitionItem;
const MediaAiAnalysisCoverItem = models.MediaAiAnalysisCoverItem;
const ComplexAdaptiveDynamicStreamingTaskSubtitleInput = models.ComplexAdaptiveDynamicStreamingTaskSubtitleInput;
const TagConfigureInfo = models.TagConfigureInfo;
const SharpEnhanceInfo = models.SharpEnhanceInfo;
const ModifySuperPlayerConfigResponse = models.ModifySuperPlayerConfigResponse;
const DescribeWordSamplesResponse = models.DescribeWordSamplesResponse;
const DescribeAigcFaceInfoAsyncRequest = models.DescribeAigcFaceInfoAsyncRequest;
const RefreshUrlCacheResponse = models.RefreshUrlCacheResponse;
const ConcatTask2017 = models.ConcatTask2017;
const ProhibitedConfigureInfoForUpdate = models.ProhibitedConfigureInfoForUpdate;
const DescribeAigcFaceInfoAsyncTask = models.DescribeAigcFaceInfoAsyncTask;
const DeleteAIRecognitionTemplateRequest = models.DeleteAIRecognitionTemplateRequest;
const FileUploadTask = models.FileUploadTask;
const CreateKnowledgeBaseResponse = models.CreateKnowledgeBaseResponse;
const DescribeCDNStatDetailsResponse = models.DescribeCDNStatDetailsResponse;
const AttachMediaSubtitlesRequest = models.AttachMediaSubtitlesRequest;
const AiAnalysisTaskCoverResult = models.AiAnalysisTaskCoverResult;
const LLMComprehendFaceRecognitionForUpdate = models.LLMComprehendFaceRecognitionForUpdate;
const DescribeEventConfigRequest = models.DescribeEventConfigRequest;
const MediaContentReviewOcrTextSegmentItem = models.MediaContentReviewOcrTextSegmentItem;
const OutputAudioStream = models.OutputAudioStream;
const ModifyLLMComprehendTemplateResponse = models.ModifyLLMComprehendTemplateResponse;
const DescribeAigcFaceInfoAsyncInput = models.DescribeAigcFaceInfoAsyncInput;
const AiAnalysisTaskClassificationOutput = models.AiAnalysisTaskClassificationOutput;
const QualityInspectTask = models.QualityInspectTask;
const CacheConfigNoCache = models.CacheConfigNoCache;
const CreateKnowledgeBaseRequest = models.CreateKnowledgeBaseRequest;
const UserDefineAsrTextReviewTemplateInfo = models.UserDefineAsrTextReviewTemplateInfo;
const FileDeleteTask = models.FileDeleteTask;
const ResourceTag = models.ResourceTag;
const ImportMediaKnowledgeRequest = models.ImportMediaKnowledgeRequest;
const AigcImageSceneInfo = models.AigcImageSceneInfo;
const AiAnalysisTaskHighlightResult = models.AiAnalysisTaskHighlightResult;
const DescribeEnhanceMediaTemplatesResponse = models.DescribeEnhanceMediaTemplatesResponse;
const PlayerConfig = models.PlayerConfig;
const CreateAigcVideoTaskResponse = models.CreateAigcVideoTaskResponse;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const CreateRebuildMediaTemplateResponse = models.CreateRebuildMediaTemplateResponse;
const AiRecognitionTaskOcrWordsResultOutput = models.AiRecognitionTaskOcrWordsResultOutput;
const AiAnalysisTaskFrameTagOutput = models.AiAnalysisTaskFrameTagOutput;
const ImageUnderstandingInfo = models.ImageUnderstandingInfo;
const CDNDomainInfo = models.CDNDomainInfo;
const CreateAigcSubjectTask = models.CreateAigcSubjectTask;
const ImageBlur = models.ImageBlur;
const CreateBlindWatermarkTemplateRequest = models.CreateBlindWatermarkTemplateRequest;
const CreateAigcAudioTaskResponse = models.CreateAigcAudioTaskResponse;
const ModifyVodDomainAccelerateConfigRequest = models.ModifyVodDomainAccelerateConfigRequest;
const PoliticalConfigureInfoForUpdate = models.PoliticalConfigureInfoForUpdate;
const ElementReferInfo = models.ElementReferInfo;
const OcrWordsConfigureInfoForUpdate = models.OcrWordsConfigureInfoForUpdate;
const FileReviewInfo = models.FileReviewInfo;
const MPSSubtitleLayoutConfig = models.MPSSubtitleLayoutConfig;
const CoverBySnapshotTaskOutput = models.CoverBySnapshotTaskOutput;
const WatermarkConfigureInfoForUpdate = models.WatermarkConfigureInfoForUpdate;
const ModifyQualityInspectTemplateResponse = models.ModifyQualityInspectTemplateResponse;
const AigcAudioTaskInput = models.AigcAudioTaskInput;
const MediaMiniProgramReviewElem = models.MediaMiniProgramReviewElem;
const ModifyAdaptiveDynamicStreamingTemplateRequest = models.ModifyAdaptiveDynamicStreamingTemplateRequest;
const ForbidMediaDistributionRequest = models.ForbidMediaDistributionRequest;
const DescribeAIRecognitionTemplatesResponse = models.DescribeAIRecognitionTemplatesResponse;
const MPSAIAnalysisTemplate = models.MPSAIAnalysisTemplate;
const AwsPrivateAccess = models.AwsPrivateAccess;
const EditMediaResponse = models.EditMediaResponse;
const TextToSpeechAsyncOutputOption = models.TextToSpeechAsyncOutputOption;
const PoliticalOcrReviewTemplateInfoForUpdate = models.PoliticalOcrReviewTemplateInfoForUpdate;
const TaskOutputMediaInfo = models.TaskOutputMediaInfo;
const ProcessMediaByUrlRequest = models.ProcessMediaByUrlRequest;
const DescribeDailyMostPlayedStatResponse = models.DescribeDailyMostPlayedStatResponse;
const ModifyAIRecognitionTemplateResponse = models.ModifyAIRecognitionTemplateResponse;
const SplitMediaTaskConfig = models.SplitMediaTaskConfig;
const TEHDConfig = models.TEHDConfig;
const PlayStatFileInfo = models.PlayStatFileInfo;
const ModifyMediaInfoRequest = models.ModifyMediaInfoRequest;
const MediaProcessTaskAdaptiveDynamicStreamingResult = models.MediaProcessTaskAdaptiveDynamicStreamingResult;
const FrameRateWithDenInfo = models.FrameRateWithDenInfo;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const LLMComprehendAsrForUpdate = models.LLMComprehendAsrForUpdate;
const TraceWatermarkInput = models.TraceWatermarkInput;
const ModifyPersonSampleRequest = models.ModifyPersonSampleRequest;
const ReviewAudioVideoSegmentItem = models.ReviewAudioVideoSegmentItem;
const MediaAnimatedGraphicsInfo = models.MediaAnimatedGraphicsInfo;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const DescribeCDNDomainsRequest = models.DescribeCDNDomainsRequest;
const QualityInspectLLMDetectionIssue = models.QualityInspectLLMDetectionIssue;
const RepairInfo = models.RepairInfo;
const CdnLogInfo = models.CdnLogInfo;
const ReduceMediaBitrateTranscodeResult = models.ReduceMediaBitrateTranscodeResult;
const MediaSubtitleInfo = models.MediaSubtitleInfo;
const AiRecognitionTaskAsrFullTextResultInput = models.AiRecognitionTaskAsrFullTextResultInput;
const DeleteLLMComprehendTemplateResponse = models.DeleteLLMComprehendTemplateResponse;
const MediaMiniProgramReviewInfoItem = models.MediaMiniProgramReviewInfoItem;
const TaskStatData = models.TaskStatData;
const CloneVoiceAsyncOutput = models.CloneVoiceAsyncOutput;
const CreateVodDomainRequest = models.CreateVodDomainRequest;
const OcrFullTextConfigureInfoForUpdate = models.OcrFullTextConfigureInfoForUpdate;
const DeleteRoundPlayRequest = models.DeleteRoundPlayRequest;
const SuperResolutionInfo = models.SuperResolutionInfo;
const MediaImageSpriteInfo = models.MediaImageSpriteInfo;
const EnhanceMediaQualityRequest = models.EnhanceMediaQualityRequest;
const ExtractBlindWatermarkTask = models.ExtractBlindWatermarkTask;
const UpdateAigcApiTokenRequest = models.UpdateAigcApiTokenRequest;
const DesignVoiceAsyncTask = models.DesignVoiceAsyncTask;
const DescribeImageProcessingTemplatesRequest = models.DescribeImageProcessingTemplatesRequest;
const AiRecognitionTaskFaceSegmentItem = models.AiRecognitionTaskFaceSegmentItem;
const ProcessMediaResponse = models.ProcessMediaResponse;
const CreateWordSamplesResponse = models.CreateWordSamplesResponse;
const ClassificationConfigureInfoForUpdate = models.ClassificationConfigureInfoForUpdate;
const DeleteAdaptiveDynamicStreamingTemplateResponse = models.DeleteAdaptiveDynamicStreamingTemplateResponse;
const AigcAdvancedCustomElementInfo = models.AigcAdvancedCustomElementInfo;
const DescribeKnowledgeBasesRequest = models.DescribeKnowledgeBasesRequest;
const ModifyHeadTailTemplateResponse = models.ModifyHeadTailTemplateResponse;
const CreateWordSamplesRequest = models.CreateWordSamplesRequest;
const FrameTagConfigureInfo = models.FrameTagConfigureInfo;
const DeleteVodDomainRequest = models.DeleteVodDomainRequest;
const BlurConfigureInfo = models.BlurConfigureInfo;
const MPSSmartSubtitleTemplateForUpdate = models.MPSSmartSubtitleTemplateForUpdate;
const ForbidMediaDistributionResponse = models.ForbidMediaDistributionResponse;
const UpdateVoiceResponse = models.UpdateVoiceResponse;
const PoliticalAsrReviewTemplateInfoForUpdate = models.PoliticalAsrReviewTemplateInfoForUpdate;
const WechatMiniProgramPublishTaskInput = models.WechatMiniProgramPublishTaskInput;
const SetCLSPushTargetRequest = models.SetCLSPushTargetRequest;
const LLMComprehendTemplateItem = models.LLMComprehendTemplateItem;
const AiSampleFaceOperation = models.AiSampleFaceOperation;
const SvgWatermarkInputForUpdate = models.SvgWatermarkInputForUpdate;
const AiReviewTaskTerrorismOcrResult = models.AiReviewTaskTerrorismOcrResult;
const DescribeProcessImageAsyncTemplatesRequest = models.DescribeProcessImageAsyncTemplatesRequest;
const AigcImageOutputConfig = models.AigcImageOutputConfig;
const ProcessImageAsyncRequest = models.ProcessImageAsyncRequest;
const AiRecognitionTaskOcrWordsResult = models.AiRecognitionTaskOcrWordsResult;
const PornAsrReviewTemplateInfo = models.PornAsrReviewTemplateInfo;
const AiRecognitionTaskSegmentResult = models.AiRecognitionTaskSegmentResult;
const CreateAigcImageTaskResponse = models.CreateAigcImageTaskResponse;
const JitterConfigureInfo = models.JitterConfigureInfo;
const MPSSmartSubtitleTemplate = models.MPSSmartSubtitleTemplate;
const MediaSubtitleItem = models.MediaSubtitleItem;
const QualityInspectConfig = models.QualityInspectConfig;
const ProhibitedAsrReviewTemplateInfoForUpdate = models.ProhibitedAsrReviewTemplateInfoForUpdate;
const MPSSubtitleOutlineConfig = models.MPSSubtitleOutlineConfig;
const ModifyAnimatedGraphicsTemplateResponse = models.ModifyAnimatedGraphicsTemplateResponse;
const CreateSceneAigcImageTaskResponse = models.CreateSceneAigcImageTaskResponse;
const AiRecognitionTaskAsrTranslateSegmentItem = models.AiRecognitionTaskAsrTranslateSegmentItem;
const DeleteCLSTopicResponse = models.DeleteCLSTopicResponse;
const SceneAigcVideoOutputConfig = models.SceneAigcVideoOutputConfig;
const LiveRealTimeClipRequest = models.LiveRealTimeClipRequest;
const DeleteAdaptiveDynamicStreamingTemplateRequest = models.DeleteAdaptiveDynamicStreamingTemplateRequest;
const AiRecognitionTaskOcrFullTextSegmentItem = models.AiRecognitionTaskOcrFullTextSegmentItem;
const ColorEnhanceInfo = models.ColorEnhanceInfo;
const DeleteEnhanceMediaTemplateResponse = models.DeleteEnhanceMediaTemplateResponse;
const EditMediaOutputConfig = models.EditMediaOutputConfig;
const ModifyPersonSampleResponse = models.ModifyPersonSampleResponse;
const CreateAigcCustomElementRequest = models.CreateAigcCustomElementRequest;
const SplitMediaTaskSegmentInfo = models.SplitMediaTaskSegmentInfo;
const PornConfigureInfoForUpdate = models.PornConfigureInfoForUpdate;
const AiReviewPornAsrTaskOutput = models.AiReviewPornAsrTaskOutput;
const DesignVoiceAsyncInput = models.DesignVoiceAsyncInput;
const FileContent = models.FileContent;
const AigcImageTask = models.AigcImageTask;
const SimpleHlsClipResponse = models.SimpleHlsClipResponse;
const AigcVideoTaskOutputFileInfo = models.AigcVideoTaskOutputFileInfo;
const DeleteAIAnalysisTemplateRequest = models.DeleteAIAnalysisTemplateRequest;
const VideoFrameInterpolationInfo = models.VideoFrameInterpolationInfo;
const EditMediaRequest = models.EditMediaRequest;
const CreateComplexAdaptiveDynamicStreamingTaskRequest = models.CreateComplexAdaptiveDynamicStreamingTaskRequest;
const AiRecognitionTaskAsrTranslateResult = models.AiRecognitionTaskAsrTranslateResult;
const DescribeFileAttributesResponse = models.DescribeFileAttributesResponse;
const ProcessImageAsyncResponse = models.ProcessImageAsyncResponse;
const LicenseUsageDataItem = models.LicenseUsageDataItem;
const ProcessImageAsyncTask = models.ProcessImageAsyncTask;
const RebuildMediaTargetAudioStream = models.RebuildMediaTargetAudioStream;
const DescribeBlindWatermarkTemplatesRequest = models.DescribeBlindWatermarkTemplatesRequest;
const ConcatFileInfo2017 = models.ConcatFileInfo2017;
const ContentReviewResult = models.ContentReviewResult;
const DescribeAigcAdvancedCustomElementsResponse = models.DescribeAigcAdvancedCustomElementsResponse;
const SceneAigcVideoTaskInput = models.SceneAigcVideoTaskInput;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const DescribeJustInTimeTranscodeTemplatesResponse = models.DescribeJustInTimeTranscodeTemplatesResponse;
const RefererRule = models.RefererRule;
const RequestHeader = models.RequestHeader;
const CrashScreenConfigureInfo = models.CrashScreenConfigureInfo;
const CreateReviewTemplateRequest = models.CreateReviewTemplateRequest;
const DescribeMediaInfosResponse = models.DescribeMediaInfosResponse;
const DeleteProcedureTemplateResponse = models.DeleteProcedureTemplateResponse;
const ModifyAigcQuotaResponse = models.ModifyAigcQuotaResponse;
const DescribeReviewTemplatesResponse = models.DescribeReviewTemplatesResponse;
const DescribeAdaptiveDynamicStreamingTemplatesResponse = models.DescribeAdaptiveDynamicStreamingTemplatesResponse;
const MediaMiniProgramReviewInfo = models.MediaMiniProgramReviewInfo;
const CacheConfigCache = models.CacheConfigCache;
const DeleteBlindWatermarkTemplateResponse = models.DeleteBlindWatermarkTemplateResponse;
const ExtractBlindWatermarkResponse = models.ExtractBlindWatermarkResponse;
const DescribeBlindWatermarkTemplatesResponse = models.DescribeBlindWatermarkTemplatesResponse;
const DescribeAdaptiveDynamicStreamingTemplatesRequest = models.DescribeAdaptiveDynamicStreamingTemplatesRequest;
const CreateAigcAdvancedCustomElementInput = models.CreateAigcAdvancedCustomElementInput;
const ModifyRoundPlayRequest = models.ModifyRoundPlayRequest;
const ImageWatermarkInput = models.ImageWatermarkInput;
const ModifyWatermarkTemplateRequest = models.ModifyWatermarkTemplateRequest;
const CreateAigcAudioCloneInput = models.CreateAigcAudioCloneInput;
const AsrFullTextConfigureInfoForUpdate = models.AsrFullTextConfigureInfoForUpdate;
const AiRecognitionTaskHeadTailResult = models.AiRecognitionTaskHeadTailResult;
const RebuildAudioInfo = models.RebuildAudioInfo;
const RemoveWatermarkResponse = models.RemoveWatermarkResponse;
const MPSSmartEraseTemplateForUpdate = models.MPSSmartEraseTemplateForUpdate;
const CreatePersonSampleResponse = models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models.CreateContentReviewTemplateResponse;
const ModifyBlindWatermarkTemplateResponse = models.ModifyBlindWatermarkTemplateResponse;
const ModifyAnimatedGraphicsTemplateRequest = models.ModifyAnimatedGraphicsTemplateRequest;
const CreateAigcAudioCloneRequest = models.CreateAigcAudioCloneRequest;
const AigcAudioTask = models.AigcAudioTask;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const TagConfigureInfoForUpdate = models.TagConfigureInfoForUpdate;
const DeleteWordSamplesRequest = models.DeleteWordSamplesRequest;
const FastEditMediaResponse = models.FastEditMediaResponse;
const EmptyTrackItem = models.EmptyTrackItem;
const AigcAudioTaskOutput = models.AigcAudioTaskOutput;
const AigcVideoTaskInputFileInfo = models.AigcVideoTaskInputFileInfo;
const StickerTrackItem = models.StickerTrackItem;
const ModifyEventConfigResponse = models.ModifyEventConfigResponse;
const DescribeAigcAdvancedCustomElementsRequest = models.DescribeAigcAdvancedCustomElementsRequest;
const ReduceMediaBitrateTask = models.ReduceMediaBitrateTask;
const UserAgentFilterRule = models.UserAgentFilterRule;
const DescribeMediaPlayStatDetailsResponse = models.DescribeMediaPlayStatDetailsResponse;
const FaceEnhanceInfo = models.FaceEnhanceInfo;
const VideoTemplateInfo = models.VideoTemplateInfo;
const AigcVideoTask = models.AigcVideoTask;
const ModifyCDNDomainConfigResponse = models.ModifyCDNDomainConfigResponse;
const RuleCacheConfig = models.RuleCacheConfig;
const AiReviewTaskPornOcrResult = models.AiReviewTaskPornOcrResult;
const ModifyContentReviewTemplateResponse = models.ModifyContentReviewTemplateResponse;
const DescribeWatermarkTemplatesRequest = models.DescribeWatermarkTemplatesRequest;
const ArtifactRepairInfo = models.ArtifactRepairInfo;
const CreateAigcAudioTaskRequest = models.CreateAigcAudioTaskRequest;
const CoverBySnapshotTaskInput = models.CoverBySnapshotTaskInput;
const DescribeMediaProcessUsageDataRequest = models.DescribeMediaProcessUsageDataRequest;
const RebuildMediaTaskInput = models.RebuildMediaTaskInput;
const AigcHunyuan3DTaskOutput = models.AigcHunyuan3DTaskOutput;
const UserDefineConfigureInfo = models.UserDefineConfigureInfo;
const QualityInspectLLMDetectionReport = models.QualityInspectLLMDetectionReport;
const NoiseConfigureInfoForUpdate = models.NoiseConfigureInfoForUpdate;
const LiveRecordInfo = models.LiveRecordInfo;
const DescribeAigcQuotasRequest = models.DescribeAigcQuotasRequest;
const AiRecognitionTaskSegmentSegmentItem = models.AiRecognitionTaskSegmentSegmentItem;
const RestoreMediaTask = models.RestoreMediaTask;
const AiReviewPornOcrTaskInput = models.AiReviewPornOcrTaskInput;
const OcrWordsConfigureInfo = models.OcrWordsConfigureInfo;
const CreateSuperPlayerConfigResponse = models.CreateSuperPlayerConfigResponse;
const ComposeMediaOutput = models.ComposeMediaOutput;
const AigcHunyuan3DTaskInput = models.AigcHunyuan3DTaskInput;
const CreateEnhanceMediaTemplateResponse = models.CreateEnhanceMediaTemplateResponse;
const KnowledgeBasesInfo = models.KnowledgeBasesInfo;
const DeleteReviewTemplateResponse = models.DeleteReviewTemplateResponse;
const DNSVerifyInfo = models.DNSVerifyInfo;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const AiRecognitionTaskAsrTranslateResultInput = models.AiRecognitionTaskAsrTranslateResultInput;
const WebPageRecordInfo = models.WebPageRecordInfo;
const DescribeCDNUsageDataResponse = models.DescribeCDNUsageDataResponse;
const ResponseHeader = models.ResponseHeader;
const ModifyWordSampleRequest = models.ModifyWordSampleRequest;
const EditMediaTask = models.EditMediaTask;
const CreateJustInTimeTranscodeTemplateResponse = models.CreateJustInTimeTranscodeTemplateResponse;
const WatermarkConfigureData = models.WatermarkConfigureData;
const DeleteMediaResponse = models.DeleteMediaResponse;
const ModifySnapshotByTimeOffsetTemplateResponse = models.ModifySnapshotByTimeOffsetTemplateResponse;
const DeleteHeadTailTemplateRequest = models.DeleteHeadTailTemplateRequest;
const LLMComprehendFaceRecognition = models.LLMComprehendFaceRecognition;
const AiAnalysisTaskTagResult = models.AiAnalysisTaskTagResult;
const SearchMediaResponse = models.SearchMediaResponse;
const ModifyAIAnalysisTemplateResponse = models.ModifyAIAnalysisTemplateResponse;
const DescribeAigcApiTokensRequest = models.DescribeAigcApiTokensRequest;
const Cache = models.Cache;
const RemoveWaterMarkTaskOutput = models.RemoveWaterMarkTaskOutput;
const ModifyMediaStorageClassRequest = models.ModifyMediaStorageClassRequest;
const AiAnalysisTaskTagOutput = models.AiAnalysisTaskTagOutput;
const MosaicConfigureInfo = models.MosaicConfigureInfo;
const DescribeTranscodeTemplatesResponse = models.DescribeTranscodeTemplatesResponse;
const AiAnalysisTaskHighlightOutput = models.AiAnalysisTaskHighlightOutput;
const DescribeRebuildMediaTemplatesRequest = models.DescribeRebuildMediaTemplatesRequest;
const ReviewImageSegmentItem = models.ReviewImageSegmentItem;
const CreateCLSTopicResponse = models.CreateCLSTopicResponse;
const CreateRoundPlayResponse = models.CreateRoundPlayResponse;
const MediaSubtitleInput = models.MediaSubtitleInput;
const FileVerifyInfo = models.FileVerifyInfo;
const DeleteCDNDomainResponse = models.DeleteCDNDomainResponse;
const PatternConfig = models.PatternConfig;
const PornImageResult = models.PornImageResult;
const TextToSpeechSyncRequest = models.TextToSpeechSyncRequest;
const MPSEraseArea = models.MPSEraseArea;
const ComplexAdaptiveDynamicStreamingTask = models.ComplexAdaptiveDynamicStreamingTask;
const ModifyMediaInfoResponse = models.ModifyMediaInfoResponse;
const DescribeLLMComprehendTemplatesResponse = models.DescribeLLMComprehendTemplatesResponse;
const ModifyReviewTemplateRequest = models.ModifyReviewTemplateRequest;
const CreateBlindWatermarkTemplateResponse = models.CreateBlindWatermarkTemplateResponse;
const AiRecognitionTaskOcrFullTextResult = models.AiRecognitionTaskOcrFullTextResult;
const DescribeCLSTopicsResponse = models.DescribeCLSTopicsResponse;
const SplitMediaOutputConfig = models.SplitMediaOutputConfig;
const ModifyProcessImageAsyncTemplateResponse = models.ModifyProcessImageAsyncTemplateResponse;
const ProhibitedOcrReviewTemplateInfo = models.ProhibitedOcrReviewTemplateInfo;
const MPSSubTaskResult = models.MPSSubTaskResult;
const CloneVoiceSyncResponse = models.CloneVoiceSyncResponse;
const ImportMediaKnowledgeResponse = models.ImportMediaKnowledgeResponse;
const RestoreMediaResponse = models.RestoreMediaResponse;
const ImageUnderstandingItem = models.ImageUnderstandingItem;
const AigcHunyuan3DTaskOutputFileInfo = models.AigcHunyuan3DTaskOutputFileInfo;
const RuleCache = models.RuleCache;
const CreateAigcAudioCloneOutput = models.CreateAigcAudioCloneOutput;
const ModifyWordSampleResponse = models.ModifyWordSampleResponse;
const ModifyEnhanceMediaTemplateResponse = models.ModifyEnhanceMediaTemplateResponse;
const KnowledgeAnalysisInfo = models.KnowledgeAnalysisInfo;
const ModifyWatermarkTemplateResponse = models.ModifyWatermarkTemplateResponse;
const EnhanceMediaByTemplateResponse = models.EnhanceMediaByTemplateResponse;
const CreateJustInTimeTranscodeTemplateRequest = models.CreateJustInTimeTranscodeTemplateRequest;
const CreateAigcVideoTaskRequest = models.CreateAigcVideoTaskRequest;
const AiSampleFaceInfo = models.AiSampleFaceInfo;
const TextToSpeechAsyncTask = models.TextToSpeechAsyncTask;
const RoundPlayFilePlayInfo = models.RoundPlayFilePlayInfo;
const ComplexAdaptiveDynamicStreamingTaskAudioInput = models.ComplexAdaptiveDynamicStreamingTaskAudioInput;
const CreateAigcCustomVoiceOutput = models.CreateAigcCustomVoiceOutput;
const AudioVolumeBalanceInfo = models.AudioVolumeBalanceInfo;
const MPSEmbedSubtitleTemplateForUpdate = models.MPSEmbedSubtitleTemplateForUpdate;
const ModifyBlindWatermarkTemplateRequest = models.ModifyBlindWatermarkTemplateRequest;
const AiRecognitionTaskAsrWordsResultOutput = models.AiRecognitionTaskAsrWordsResultOutput;
const CreateAigcQuotaRequest = models.CreateAigcQuotaRequest;
const DescribeHeadTailTemplatesRequest = models.DescribeHeadTailTemplatesRequest;
const CreateLLMComprehendTemplateResponse = models.CreateLLMComprehendTemplateResponse;
const DescribeCdnLogsRequest = models.DescribeCdnLogsRequest;
const BlurConfigureInfoForUpdate = models.BlurConfigureInfoForUpdate;
const ProcessMediaByUrlResponse = models.ProcessMediaByUrlResponse;
const EditMediaVideoStream = models.EditMediaVideoStream;
const ExtractTraceWatermarkTask = models.ExtractTraceWatermarkTask;
const AiRecognitionTaskSegmentResultOutput = models.AiRecognitionTaskSegmentResultOutput;
const TextToSpeechSyncResponse = models.TextToSpeechSyncResponse;
const ImageSpriteTaskInput = models.ImageSpriteTaskInput;
const MPSSmartSubtitlesTaskInput = models.MPSSmartSubtitlesTaskInput;
const DeleteContentReviewTemplateResponse = models.DeleteContentReviewTemplateResponse;
const DescribeReviewTemplatesRequest = models.DescribeReviewTemplatesRequest;
const CreateSuperPlayerConfigRequest = models.CreateSuperPlayerConfigRequest;
const DesignVoiceAsyncRequest = models.DesignVoiceAsyncRequest;
const ImageWatermarkTemplate = models.ImageWatermarkTemplate;
const AdvancedElementInfo = models.AdvancedElementInfo;
const AsrWordsConfigureInfo = models.AsrWordsConfigureInfo;
const AigcAudioOutputConfig = models.AigcAudioOutputConfig;
const AreaCLSTargetInfo = models.AreaCLSTargetInfo;
const StartCDNDomainRequest = models.StartCDNDomainRequest;
const DeleteRebuildMediaTemplateResponse = models.DeleteRebuildMediaTemplateResponse;
const DescribeSubAppIdsResponse = models.DescribeSubAppIdsResponse;
const MPSOverrideEraseParameter = models.MPSOverrideEraseParameter;
const MediaDeleteItem = models.MediaDeleteItem;
const EnhanceConfigForUpdate = models.EnhanceConfigForUpdate;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const PoliticalImageResult = models.PoliticalImageResult;
const TimeRange = models.TimeRange;
const AiSamplePerson = models.AiSamplePerson;
const MediaAdaptiveDynamicStreamingInfo = models.MediaAdaptiveDynamicStreamingInfo;
const AigcFaceInputFileInfo = models.AigcFaceInputFileInfo;
const DescribeDailyPlayStatFileListRequest = models.DescribeDailyPlayStatFileListRequest;
const AiReviewTaskTerrorismResult = models.AiReviewTaskTerrorismResult;
const DescribeSuperPlayerConfigsResponse = models.DescribeSuperPlayerConfigsResponse;
const VerifyDomainRecordRequest = models.VerifyDomainRecordRequest;
const AsrWordsConfigureInfoForUpdate = models.AsrWordsConfigureInfoForUpdate;
const DescribeDailyMostPlayedStatRequest = models.DescribeDailyMostPlayedStatRequest;
const LiveRealTimeClipMediaSegmentInfo = models.LiveRealTimeClipMediaSegmentInfo;
const ModifyLLMComprehendTemplateRequest = models.ModifyLLMComprehendTemplateRequest;
const ModifyKnowledgeBaseRequest = models.ModifyKnowledgeBaseRequest;
const DeleteImageSpriteTemplateResponse = models.DeleteImageSpriteTemplateResponse;
const LowLightEnhanceInfo = models.LowLightEnhanceInfo;
const DescribeContentReviewTemplatesResponse = models.DescribeContentReviewTemplatesResponse;
const ProductImageConfig = models.ProductImageConfig;
const DeleteAigcQuotaResponse = models.DeleteAigcQuotaResponse;
const ProcessImageAsyncTaskInput = models.ProcessImageAsyncTaskInput;
const ImageReviewUsageDataItem = models.ImageReviewUsageDataItem;
const AnimatedGraphicsTemplate = models.AnimatedGraphicsTemplate;
const ExtractCopyRightWatermarkRequest = models.ExtractCopyRightWatermarkRequest;
const MPSEraseTimeArea = models.MPSEraseTimeArea;
const IpFilter = models.IpFilter;
const MPSTaskOutput = models.MPSTaskOutput;
const DescribeEnhanceMediaTemplatesRequest = models.DescribeEnhanceMediaTemplatesRequest;
const DailyPlayStatInfo = models.DailyPlayStatInfo;
const TerrorismOcrReviewTemplateInfoForUpdate = models.TerrorismOcrReviewTemplateInfoForUpdate;
const FastEditMediaRequest = models.FastEditMediaRequest;
const CopyRightWatermarkInput = models.CopyRightWatermarkInput;
const AiRecognitionTaskHeadTailResultOutput = models.AiRecognitionTaskHeadTailResultOutput;
const ModifyImageSpriteTemplateResponse = models.ModifyImageSpriteTemplateResponse;
const MediaContentReviewAsrTextSegmentItem = models.MediaContentReviewAsrTextSegmentItem;
const SetVodDomainCertificateResponse = models.SetVodDomainCertificateResponse;
const ExtractTraceWatermarkTaskOutput = models.ExtractTraceWatermarkTaskOutput;
const MediaProcessTaskCoverBySnapshotResult = models.MediaProcessTaskCoverBySnapshotResult;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const UserAgentFilter = models.UserAgentFilter;
const BlackWhiteEdgeConfigureInfo = models.BlackWhiteEdgeConfigureInfo;
const SortBy = models.SortBy;
const AdvancedSuperResolutionConfig = models.AdvancedSuperResolutionConfig;
const DescribeMPSTemplatesRequest = models.DescribeMPSTemplatesRequest;
const BlindWatermarkTemplate = models.BlindWatermarkTemplate;
const TerrorismConfigureInfoForUpdate = models.TerrorismConfigureInfoForUpdate;
const DescribePersonSamplesRequest = models.DescribePersonSamplesRequest;
const WechatMiniProgramPublishTask = models.WechatMiniProgramPublishTask;
const ProcessImageAsync = models.ProcessImageAsync;
const DescribeDrmKeyProviderInfoRequest = models.DescribeDrmKeyProviderInfoRequest;
const AigcAudioTaskOutputFileInfo = models.AigcAudioTaskOutputFileInfo;
const CreateImageProcessingTemplateResponse = models.CreateImageProcessingTemplateResponse;
const IpFilterPathRule = models.IpFilterPathRule;
const ComposeMediaTask = models.ComposeMediaTask;
const HeadTailConfigureInfoForUpdate = models.HeadTailConfigureInfoForUpdate;
const ImageScale = models.ImageScale;
const ModifyEventConfigRequest = models.ModifyEventConfigRequest;
const ModifyJustInTimeTranscodeTemplateResponse = models.ModifyJustInTimeTranscodeTemplateResponse;
const BeautyEffectItem = models.BeautyEffectItem;
const TextToSpeechSyncOutputOption = models.TextToSpeechSyncOutputOption;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const ExecuteFunctionResponse = models.ExecuteFunctionResponse;
const TranscodePlayInfo2017 = models.TranscodePlayInfo2017;
const SplitMediaTask = models.SplitMediaTask;
const OthersPrivateAccess = models.OthersPrivateAccess;
const ComposeMediaTaskInput = models.ComposeMediaTaskInput;
const ModifyQualityInspectTemplateRequest = models.ModifyQualityInspectTemplateRequest;
const DesignVoiceAsyncResponse = models.DesignVoiceAsyncResponse;
const Authentication = models.Authentication;
const SceneAigcVideoTask = models.SceneAigcVideoTask;
const ProcessImageAsyncInputExtendedParameter = models.ProcessImageAsyncInputExtendedParameter;
const AnimatedGraphicTaskInput = models.AnimatedGraphicTaskInput;
const MosaicInput = models.MosaicInput;
const AIAnalysisTemplateItem = models.AIAnalysisTemplateItem;
const AiRecognitionTaskObjectResultItem = models.AiRecognitionTaskObjectResultItem;
const DeleteImageProcessingTemplateResponse = models.DeleteImageProcessingTemplateResponse;
const AigcVideoRedrawOutputFileInfo = models.AigcVideoRedrawOutputFileInfo;
const UrlSignatureAuthPolicy = models.UrlSignatureAuthPolicy;
const ModifyVodDomainConfigResponse = models.ModifyVodDomainConfigResponse;
const MediaSnapshotByTimeOffsetInfo = models.MediaSnapshotByTimeOffsetInfo;
const VideoConfigureInfo = models.VideoConfigureInfo;
const DeleteAIAnalysisTemplateResponse = models.DeleteAIAnalysisTemplateResponse;
const ModifyRebuildMediaTemplateResponse = models.ModifyRebuildMediaTemplateResponse;
const CreateEnhanceMediaTemplateRequest = models.CreateEnhanceMediaTemplateRequest;
const MediaKeyFrameDescItem = models.MediaKeyFrameDescItem;
const AsrTranslateConfigureInfoForUpdate = models.AsrTranslateConfigureInfoForUpdate;
const SceneAigcImageTask = models.SceneAigcImageTask;
const RebuildMediaByTemplateRequest = models.RebuildMediaByTemplateRequest;
const ModifyVodDomainConfigRequest = models.ModifyVodDomainConfigRequest;
const AiSampleTagOperation = models.AiSampleTagOperation;
const ComplexAdaptiveDynamicStreamingTaskOutput = models.ComplexAdaptiveDynamicStreamingTaskOutput;
const MPSSubtitleShadowConfig = models.MPSSubtitleShadowConfig;
const ComplexAdaptiveDynamicStreamingTaskResult = models.ComplexAdaptiveDynamicStreamingTaskResult;
const ConfirmEventsRequest = models.ConfirmEventsRequest;
const CreateAIRecognitionTemplateResponse = models.CreateAIRecognitionTemplateResponse;
const ProcessImageAsyncInput = models.ProcessImageAsyncInput;
const ModifySubAppIdStatusRequest = models.ModifySubAppIdStatusRequest;
const DeleteBlindWatermarkTemplateRequest = models.DeleteBlindWatermarkTemplateRequest;
const CreateSubAppIdResponse = models.CreateSubAppIdResponse;
const AiCutOutConfig = models.AiCutOutConfig;
const AiReviewTerrorismTaskOutput = models.AiReviewTerrorismTaskOutput;
const AudioSeparateInfo = models.AudioSeparateInfo;
const DescribeAigcFaceInfoAsyncOutput = models.DescribeAigcFaceInfoAsyncOutput;
const QualityInspectTaskInput = models.QualityInspectTaskInput;
const ProhibitedConfigureInfo = models.ProhibitedConfigureInfo;
const DrmStreamingsInfo = models.DrmStreamingsInfo;
const SplitMediaRequest = models.SplitMediaRequest;
const AiReviewTerrorismOcrTaskOutput = models.AiReviewTerrorismOcrTaskOutput;
const AigcAudioCloneInputFileInfo = models.AigcAudioCloneInputFileInfo;
const AiAnalysisResult = models.AiAnalysisResult;
const ReduceMediaBitrateAdaptiveDynamicStreamingResult = models.ReduceMediaBitrateAdaptiveDynamicStreamingResult;
const DeleteVoiceResponse = models.DeleteVoiceResponse;
const BlindWatermarkInput = models.BlindWatermarkInput;
const AigcHunyuan3DMeshInfo = models.AigcHunyuan3DMeshInfo;
const AttachMediaSubtitlesResponse = models.AttachMediaSubtitlesResponse;
const TextToSpeechAsyncResponse = models.TextToSpeechAsyncResponse;
const CreateDomainVerifyRecordResponse = models.CreateDomainVerifyRecordResponse;
const ExtractCopyRightWatermarkResponse = models.ExtractCopyRightWatermarkResponse;
const MediaTranscodeInfo = models.MediaTranscodeInfo;
const ListFilesRequest = models.ListFilesRequest;
const ResolutionNameInfo = models.ResolutionNameInfo;
const OcrFullTextConfigureInfo = models.OcrFullTextConfigureInfo;
const AiRecognitionTaskOcrWordsResultItem = models.AiRecognitionTaskOcrWordsResultItem;
const DeleteCDNDomainRequest = models.DeleteCDNDomainRequest;
const ParseStreamingManifestRequest = models.ParseStreamingManifestRequest;
const ReviewImageResult = models.ReviewImageResult;
const DeleteSampleSnapshotTemplateResponse = models.DeleteSampleSnapshotTemplateResponse;
const AiAnalysisTaskTagInput = models.AiAnalysisTaskTagInput;
const CloneVoiceAsyncRequest = models.CloneVoiceAsyncRequest;
const DescribeStorageDetailsResponse = models.DescribeStorageDetailsResponse;
const PullEventsResponse = models.PullEventsResponse;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const AiRecognitionTaskObjectResultInput = models.AiRecognitionTaskObjectResultInput;
const CreateCLSLogsetResponse = models.CreateCLSLogsetResponse;
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const OutputVideoStream = models.OutputVideoStream;
const ModifyDefaultDistributionConfigRequest = models.ModifyDefaultDistributionConfigRequest;
const ProcedureTemplate = models.ProcedureTemplate;
const DescribeLicenseUsageDataResponse = models.DescribeLicenseUsageDataResponse;
const DomainDetailInfo = models.DomainDetailInfo;
const CreateAigcSubjectOutput = models.CreateAigcSubjectOutput;
const SemanticsSearchResult = models.SemanticsSearchResult;
const MPSAiMediaTask = models.MPSAiMediaTask;
const DescribeImageReviewUsageDataRequest = models.DescribeImageReviewUsageDataRequest;
const MPSAiAnalysisTaskInput = models.MPSAiAnalysisTaskInput;
const DescribeEventConfigResponse = models.DescribeEventConfigResponse;
const DescribeCdnLogsResponse = models.DescribeCdnLogsResponse;
const FaceRecognitionTask = models.FaceRecognitionTask;
const AigcVideoTaskOutput = models.AigcVideoTaskOutput;
const DeletePersonSampleResponse = models.DeletePersonSampleResponse;
const ProductShowcaseConfig = models.ProductShowcaseConfig;
const CreateAigcSubjectRequest = models.CreateAigcSubjectRequest;
const CreateSnapshotByTimeOffsetTemplateResponse = models.CreateSnapshotByTimeOffsetTemplateResponse;
const VoiceConfigureInfoForUpdate = models.VoiceConfigureInfoForUpdate;
const ModifyContentReviewTemplateRequest = models.ModifyContentReviewTemplateRequest;
const ImageSpriteTemplate = models.ImageSpriteTemplate;
const DeleteReviewTemplateRequest = models.DeleteReviewTemplateRequest;
const CreateLLMComprehendTemplateRequest = models.CreateLLMComprehendTemplateRequest;
const AiAnalysisTaskCoverOutput = models.AiAnalysisTaskCoverOutput;
const AiContentReviewTaskInput = models.AiContentReviewTaskInput;
const DescribeAigcQuotasResponse = models.DescribeAigcQuotasResponse;
const CreateAdaptiveDynamicStreamingTemplateResponse = models.CreateAdaptiveDynamicStreamingTemplateResponse;
const DeleteSampleSnapshotTemplateRequest = models.DeleteSampleSnapshotTemplateRequest;
const AiAnalysisTaskInput = models.AiAnalysisTaskInput;
const MediaAiAnalysisTagItem = models.MediaAiAnalysisTagItem;
const DescribeStorageDataResponse = models.DescribeStorageDataResponse;
const AiRecognitionTaskOcrFullTextSegmentTextItem = models.AiRecognitionTaskOcrFullTextSegmentTextItem;
const ImageProcessingTemplate = models.ImageProcessingTemplate;
const SegmentConfigureInfo = models.SegmentConfigureInfo;
const ProcessMediaByMPSRequest = models.ProcessMediaByMPSRequest;
const ScratchRepairInfo = models.ScratchRepairInfo;
const CreateAigcCustomVoiceInput = models.CreateAigcCustomVoiceInput;
const ProcessImageAsyncOutput = models.ProcessImageAsyncOutput;
const SnapshotByTimeOffsetTaskInput = models.SnapshotByTimeOffsetTaskInput;
const RefererAuthPolicy = models.RefererAuthPolicy;
const ProcessMediaByMPSResponse = models.ProcessMediaByMPSResponse;
const AiRecognitionTaskObjectSegmentItem = models.AiRecognitionTaskObjectSegmentItem;
const CreateCLSTopicRequest = models.CreateCLSTopicRequest;
const AiReviewPornOcrTaskOutput = models.AiReviewPornOcrTaskOutput;
const ObjectConfigureInfoForUpdate = models.ObjectConfigureInfoForUpdate;
const ApplyUploadRequest = models.ApplyUploadRequest;
const CreateSampleSnapshotTemplateResponse = models.CreateSampleSnapshotTemplateResponse;
const AiAnalysisTaskHighlightInput = models.AiAnalysisTaskHighlightInput;
const ModifyCDNDomainConfigRequest = models.ModifyCDNDomainConfigRequest;
const DeleteMediaRequest = models.DeleteMediaRequest;
const CloneCDNDomainResponse = models.CloneCDNDomainResponse;
const FaceRecognitionOutputFileInfo = models.FaceRecognitionOutputFileInfo;
const MediaBasicInfo = models.MediaBasicInfo;
const AiReviewPoliticalAsrTaskInput = models.AiReviewPoliticalAsrTaskInput;
const ExtractBlindWatermarkInputInfo = models.ExtractBlindWatermarkInputInfo;
const CreateQualityInspectTemplateRequest = models.CreateQualityInspectTemplateRequest;
const MPSSubtitleBoardConfig = models.MPSSubtitleBoardConfig;
const Ipv6Access = models.Ipv6Access;
const ModifySubAppIdInfoRequest = models.ModifySubAppIdInfoRequest;
const RebuildMediaTargetVideoStream = models.RebuildMediaTargetVideoStream;
const VoiceConfigureInfo = models.VoiceConfigureInfo;
const SetCLSPushTargetResponse = models.SetCLSPushTargetResponse;
const MediaTrackItem = models.MediaTrackItem;
const MPSAIAnalysisTemplateForUpdate = models.MPSAIAnalysisTemplateForUpdate;
const ClipTask2017 = models.ClipTask2017;
const DeletePersonSampleRequest = models.DeletePersonSampleRequest;
const TranscodeTemplate = models.TranscodeTemplate;
const DescribeCDNUsageDataRequest = models.DescribeCDNUsageDataRequest;
const JustInTimeTranscodeTemplate = models.JustInTimeTranscodeTemplate;
const SceneAigcImageOutputConfig = models.SceneAigcImageOutputConfig;
const TaskStatDataItem = models.TaskStatDataItem;
const PornOcrReviewTemplateInfo = models.PornOcrReviewTemplateInfo;
const DescribeLLMComprehendTemplatesRequest = models.DescribeLLMComprehendTemplatesRequest;
const AiReviewTaskPoliticalAsrResult = models.AiReviewTaskPoliticalAsrResult;
const CreateProcessImageAsyncTemplateResponse = models.CreateProcessImageAsyncTemplateResponse;
const TrtcRecordInfo = models.TrtcRecordInfo;
const AiTryOnConfig = models.AiTryOnConfig;
const DescribeReviewDetailsRequest = models.DescribeReviewDetailsRequest;
const ModifySubAppIdInfoResponse = models.ModifySubAppIdInfoResponse;
const AiReviewProhibitedAsrTaskInput = models.AiReviewProhibitedAsrTaskInput;
const DeleteCLSTopicRequest = models.DeleteCLSTopicRequest;
const ParseStreamingManifestResponse = models.ParseStreamingManifestResponse;
const ListFilesResponse = models.ListFilesResponse;
const CreateRoundPlayRequest = models.CreateRoundPlayRequest;
const ExtractBlindWatermarkTaskConfig = models.ExtractBlindWatermarkTaskConfig;
const WatermarkTemplate = models.WatermarkTemplate;
const ImageEncodeConfig = models.ImageEncodeConfig;
const AiReviewTaskPornResult = models.AiReviewTaskPornResult;
const AiRecognitionTaskObjectResultOutput = models.AiRecognitionTaskObjectResultOutput;
const DescribeMediaPlayStatDetailsRequest = models.DescribeMediaPlayStatDetailsRequest;
const AigcVideoRedrawTaskInput = models.AigcVideoRedrawTaskInput;
const AiReviewProhibitedAsrTaskOutput = models.AiReviewProhibitedAsrTaskOutput;
const CreateClassResponse = models.CreateClassResponse;
const DeleteSuperPlayerConfigResponse = models.DeleteSuperPlayerConfigResponse;
const CrashScreenConfigureInfoForUpdate = models.CrashScreenConfigureInfoForUpdate;
const DescribeSampleSnapshotTemplatesRequest = models.DescribeSampleSnapshotTemplatesRequest;
const CoverConfigureInfoForUpdate = models.CoverConfigureInfoForUpdate;
const DeleteKnowledgeBaseResponse = models.DeleteKnowledgeBaseResponse;
const AigcVideoTaskInputSubjectInfo = models.AigcVideoTaskInputSubjectInfo;
const AiAnalysisTaskClassificationResult = models.AiAnalysisTaskClassificationResult;
const PoliticalImgReviewTemplateInfoForUpdate = models.PoliticalImgReviewTemplateInfoForUpdate;
const AigcImageTaskInputFileInfo = models.AigcImageTaskInputFileInfo;
const UserDefineOcrTextReviewTemplateInfo = models.UserDefineOcrTextReviewTemplateInfo;
const DescribeVodDomainsResponse = models.DescribeVodDomainsResponse;
const AdaptiveStreamTemplate = models.AdaptiveStreamTemplate;
const DeleteAigcAdvancedCustomElementResponse = models.DeleteAigcAdvancedCustomElementResponse;
const VoiceSettings = models.VoiceSettings;
const AigcVideoRedrawOutputConfig = models.AigcVideoRedrawOutputConfig;
const TranscodeTaskInput = models.TranscodeTaskInput;
const DescribeClientUploadAccelerationUsageDataRequest = models.DescribeClientUploadAccelerationUsageDataRequest;
const StartCDNDomainResponse = models.StartCDNDomainResponse;
const AigcFaceInfo = models.AigcFaceInfo;
const ModifyAIRecognitionTemplateRequest = models.ModifyAIRecognitionTemplateRequest;
const DeleteMPSTemplateResponse = models.DeleteMPSTemplateResponse;
const QRCodeConfigureInfo = models.QRCodeConfigureInfo;
const DescribeStorageRegionsRequest = models.DescribeStorageRegionsRequest;
const OssPrivateAccess = models.OssPrivateAccess;
const DescribeAigcFaceInfoResponse = models.DescribeAigcFaceInfoResponse;
const KnowledgeBaseInfo = models.KnowledgeBaseInfo;
const ImageQualityEnhanceInfo = models.ImageQualityEnhanceInfo;
const CreateMPSTemplateResponse = models.CreateMPSTemplateResponse;
const WechatPublishTask = models.WechatPublishTask;
const DescribeCDNStatDetailsRequest = models.DescribeCDNStatDetailsRequest;
const HeadTailTaskInput = models.HeadTailTaskInput;
const ClipFileInfo2017 = models.ClipFileInfo2017;
const DeleteRoundPlayResponse = models.DeleteRoundPlayResponse;
const StatDataItem = models.StatDataItem;
const QualityInspectLLMDetectionResultItem = models.QualityInspectLLMDetectionResultItem;
const CreateStorageRegionResponse = models.CreateStorageRegionResponse;
const AccelerateAreaInfo = models.AccelerateAreaInfo;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const MediaSourceData = models.MediaSourceData;
const CloneVoiceAsyncInput = models.CloneVoiceAsyncInput;
const CreateAigcAdvancedCustomElementTask = models.CreateAigcAdvancedCustomElementTask;
const HandleCurrentPlaylistResponse = models.HandleCurrentPlaylistResponse;
const PushUrlCacheRequest = models.PushUrlCacheRequest;
const MediaContentReviewPoliticalSegmentItem = models.MediaContentReviewPoliticalSegmentItem;
const CreateAIAnalysisTemplateResponse = models.CreateAIAnalysisTemplateResponse;
const DeleteProcessImageAsyncTemplateRequest = models.DeleteProcessImageAsyncTemplateRequest;
const HeadTailConfigureInfo = models.HeadTailConfigureInfo;
const EventContent = models.EventContent;
const CreateAigcAudioCloneResponse = models.CreateAigcAudioCloneResponse;
const HighlightsConfigureInfoForUpdate = models.HighlightsConfigureInfoForUpdate;
const IPFilterPolicy = models.IPFilterPolicy;
const UserDefineConfigureInfoForUpdate = models.UserDefineConfigureInfoForUpdate;
const TerrorismConfigureInfo = models.TerrorismConfigureInfo;
const ExtractTraceWatermarkTaskInput = models.ExtractTraceWatermarkTaskInput;
const AiReviewPoliticalAsrTaskOutput = models.AiReviewPoliticalAsrTaskOutput;
const KnowledgeAnalysisResult = models.KnowledgeAnalysisResult;
const ModifyClassRequest = models.ModifyClassRequest;
const QRCodeConfigureInfoForUpdate = models.QRCodeConfigureInfoForUpdate;
const SceneAigcImageTaskInputFileInfo = models.SceneAigcImageTaskInputFileInfo;
const SpecificationDataItem = models.SpecificationDataItem;
const TEHDConfigForUpdate = models.TEHDConfigForUpdate;
const SceneAigcImageTaskOutput = models.SceneAigcImageTaskOutput;
const ComposeMediaTaskOutput = models.ComposeMediaTaskOutput;
const DescribeQualityInspectTemplatesRequest = models.DescribeQualityInspectTemplatesRequest;
const MPSOutputFileInfo = models.MPSOutputFileInfo;
const ModifyKnowledgeBaseResponse = models.ModifyKnowledgeBaseResponse;
const DescribeMediaInfosRequest = models.DescribeMediaInfosRequest;
const CreateAigcApiTokenRequest = models.CreateAigcApiTokenRequest;
const AsrFullTextConfigureInfo = models.AsrFullTextConfigureInfo;
const TerrorismImageResult = models.TerrorismImageResult;
const MediaContentReviewSegmentItem = models.MediaContentReviewSegmentItem;
const CreateAigcCustomVoiceResponse = models.CreateAigcCustomVoiceResponse;
const ImageEnhanceConfig = models.ImageEnhanceConfig;
const DescribeDrmKeyProviderInfoResponse = models.DescribeDrmKeyProviderInfoResponse;
const ExtractTraceWatermarkResponse = models.ExtractTraceWatermarkResponse;
const CreateAIRecognitionTemplateRequest = models.CreateAIRecognitionTemplateRequest;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const MediaAiAnalysisClassificationItem = models.MediaAiAnalysisClassificationItem;
const AiAnalysisTaskFrameTagResult = models.AiAnalysisTaskFrameTagResult;
const MPSAiMediaInfo = models.MPSAiMediaInfo;
const AiReviewPornTaskOutput = models.AiReviewPornTaskOutput;
const SDMCDrmKeyProviderInfo = models.SDMCDrmKeyProviderInfo;
const PullUploadRequest = models.PullUploadRequest;
const ResetProcedureTemplateResponse = models.ResetProcedureTemplateResponse;
const CreateSceneAigcVideoTaskResponse = models.CreateSceneAigcVideoTaskResponse;
const AiRecognitionTaskAsrFullTextResult = models.AiRecognitionTaskAsrFullTextResult;
const DeleteQualityInspectTemplateResponse = models.DeleteQualityInspectTemplateResponse;
const PlayStatInfo = models.PlayStatInfo;
const AiRecognitionTaskAsrTranslateResultOutput = models.AiRecognitionTaskAsrTranslateResultOutput;
const PoliticalImgReviewTemplateInfo = models.PoliticalImgReviewTemplateInfo;
const MPSSelectingSubtitleAreasConfig = models.MPSSelectingSubtitleAreasConfig;
const PoliticalConfigureInfo = models.PoliticalConfigureInfo;
const HighlightsConfigureInfo = models.HighlightsConfigureInfo;
const CDNCertInfo = models.CDNCertInfo;
const CreateHeadTailTemplateResponse = models.CreateHeadTailTemplateResponse;
const AiRecognitionTaskOcrWordsSegmentItem = models.AiRecognitionTaskOcrWordsSegmentItem;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const DeleteWordSamplesResponse = models.DeleteWordSamplesResponse;
const MediaCastEvent = models.MediaCastEvent;
const HeuristicCache = models.HeuristicCache;
const DescribeDefaultDistributionConfigResponse = models.DescribeDefaultDistributionConfigResponse;
const DeleteProcedureTemplateRequest = models.DeleteProcedureTemplateRequest;
const WatermarkInput = models.WatermarkInput;
const SearchMediaBySemanticsResponse = models.SearchMediaBySemanticsResponse;
const AiSampleWordInfo = models.AiSampleWordInfo;
const AdaptiveDynamicStreamingInfoItem = models.AdaptiveDynamicStreamingInfoItem;
const CreateMPSTemplateRequest = models.CreateMPSTemplateRequest;
const LiveRealTimeClipStreamInfo = models.LiveRealTimeClipStreamInfo;
const HwPrivateAccess = models.HwPrivateAccess;
const DeleteClassResponse = models.DeleteClassResponse;
const MaxAge = models.MaxAge;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const MediaMetaData = models.MediaMetaData;
const MediaSampleSnapshotInfo = models.MediaSampleSnapshotInfo;
const InspectMediaQualityResponse = models.InspectMediaQualityResponse;
const DeleteRebuildMediaTemplateRequest = models.DeleteRebuildMediaTemplateRequest;
const CreateAigcCustomVoiceTask = models.CreateAigcCustomVoiceTask;
const CreateDomainVerifyRecordRequest = models.CreateDomainVerifyRecordRequest;
const MediaInfo = models.MediaInfo;
const AigcImageTaskInput = models.AigcImageTaskInput;
const VideoTemplateInfoForUpdate = models.VideoTemplateInfoForUpdate;
const CreateContentReviewTemplateRequest = models.CreateContentReviewTemplateRequest;
const DescribeContentReviewTemplatesRequest = models.DescribeContentReviewTemplatesRequest;
const CreateComplexAdaptiveDynamicStreamingTaskResponse = models.CreateComplexAdaptiveDynamicStreamingTaskResponse;
const AdaptiveDynamicStreamingTaskInput = models.AdaptiveDynamicStreamingTaskInput;
const DescribeImageSpriteTemplatesResponse = models.DescribeImageSpriteTemplatesResponse;
const CreateSceneAigcImageTaskRequest = models.CreateSceneAigcImageTaskRequest;
const InspectMediaQualityRequest = models.InspectMediaQualityRequest;
const MPSSmartEraseTemplate = models.MPSSmartEraseTemplate;
const TransitionOperation = models.TransitionOperation;
const CreateAigcCustomElementResponse = models.CreateAigcCustomElementResponse;
const WatermarkConfigureInfo = models.WatermarkConfigureInfo;
const AiAnalysisTaskFrameTagInput = models.AiAnalysisTaskFrameTagInput;
const MediaAiAnalysisFrameTagSegmentItem = models.MediaAiAnalysisFrameTagSegmentItem;
const AiRecognitionTaskAsrWordsResultItem = models.AiRecognitionTaskAsrWordsResultItem;
const CreateQualityInspectTemplateResponse = models.CreateQualityInspectTemplateResponse;
const RebuildMediaTaskOutput = models.RebuildMediaTaskOutput;
const EnhanceMediaQualityOutputConfig = models.EnhanceMediaQualityOutputConfig;
const ModifyMediaStorageClassResponse = models.ModifyMediaStorageClassResponse;
const Https = models.Https;
const AiRecognitionTaskAsrFullTextResultOutputSubtitleItem = models.AiRecognitionTaskAsrFullTextResultOutputSubtitleItem;
const DescribeStorageDataRequest = models.DescribeStorageDataRequest;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const MediaKeyFrameDescInfo = models.MediaKeyFrameDescInfo;
const SimpleHlsClipRequest = models.SimpleHlsClipRequest;
const DeleteImageSpriteTemplateRequest = models.DeleteImageSpriteTemplateRequest;
const ModifyDefaultDistributionConfigResponse = models.ModifyDefaultDistributionConfigResponse;
const CreateClassRequest = models.CreateClassRequest;
const AiSampleFailFaceInfo = models.AiSampleFailFaceInfo;
const UserDefineFaceReviewTemplateInfoForUpdate = models.UserDefineFaceReviewTemplateInfoForUpdate;
const ProcessImageAsyncOutputFileInfo = models.ProcessImageAsyncOutputFileInfo;
const ModifyRoundPlayResponse = models.ModifyRoundPlayResponse;
const CreateProcedureTemplateResponse = models.CreateProcedureTemplateResponse;
const FollowRedirect = models.FollowRedirect;
const DescribeCLSLogsetsResponse = models.DescribeCLSLogsetsResponse;
const DescribeMPSTemplatesResponse = models.DescribeMPSTemplatesResponse;
const RebuildMediaResponse = models.RebuildMediaResponse;
const SetDrmKeyProviderInfoResponse = models.SetDrmKeyProviderInfoResponse;
const DomainHTTPSConfig = models.DomainHTTPSConfig;
const DescribeMediaProcessUsageDataResponse = models.DescribeMediaProcessUsageDataResponse;
const DescribeSuperPlayerConfigsRequest = models.DescribeSuperPlayerConfigsRequest;
const ReduceMediaBitrateMediaProcessTaskResult = models.ReduceMediaBitrateMediaProcessTaskResult;
const CreateAigcAdvancedCustomElementOutput = models.CreateAigcAdvancedCustomElementOutput;
const AiRecognitionTaskOcrFullTextResultInput = models.AiRecognitionTaskOcrFullTextResultInput;
const DescribeCLSLogsetsRequest = models.DescribeCLSLogsetsRequest;
const DescribeAigcUsageDataRequest = models.DescribeAigcUsageDataRequest;
const CreateVodDomainResponse = models.CreateVodDomainResponse;
const ModifyVodDomainAccelerateConfigResponse = models.ModifyVodDomainAccelerateConfigResponse;
const AigcQuotaItem = models.AigcQuotaItem;
const ForceRedirect = models.ForceRedirect;
const ModifyHeadTailTemplateRequest = models.ModifyHeadTailTemplateRequest;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeSubAppIdsRequest = models.DescribeSubAppIdsRequest;
const ModifyMPSTemplateResponse = models.ModifyMPSTemplateResponse;
const AiRecognitionTaskFaceResultInput = models.AiRecognitionTaskFaceResultInput;
const RebuildMediaOutputConfig = models.RebuildMediaOutputConfig;
const KnowledgeBaseDetail = models.KnowledgeBaseDetail;
const AiReviewPoliticalTaskOutput = models.AiReviewPoliticalTaskOutput;
const AiReviewTaskPoliticalResult = models.AiReviewTaskPoliticalResult;
const ImportMediaKnowledgeTask = models.ImportMediaKnowledgeTask;
const ChangeClothesConfig = models.ChangeClothesConfig;
const MPSSmartEraseTaskInput = models.MPSSmartEraseTaskInput;
const ReviewImageResponse = models.ReviewImageResponse;
const DescribeStorageRegionsResponse = models.DescribeStorageRegionsResponse;
const SampleSnapshotTemplate = models.SampleSnapshotTemplate;
const ModifySnapshotByTimeOffsetTemplateRequest = models.ModifySnapshotByTimeOffsetTemplateRequest;
const ModifyReviewTemplateResponse = models.ModifyReviewTemplateResponse;
const CreateProcessImageAsyncTemplateRequest = models.CreateProcessImageAsyncTemplateRequest;
const CreateCLSLogsetRequest = models.CreateCLSLogsetRequest;
const ExtractTraceWatermarkRequest = models.ExtractTraceWatermarkRequest;
const CDNDomainConfig = models.CDNDomainConfig;
const DeleteVoiceRequest = models.DeleteVoiceRequest;
const DeleteAigcApiTokenResponse = models.DeleteAigcApiTokenResponse;
const ReviewAudioVideoTask = models.ReviewAudioVideoTask;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const DeleteAigcApiTokenRequest = models.DeleteAigcApiTokenRequest;
const SetDrmKeyProviderInfoRequest = models.SetDrmKeyProviderInfoRequest;
const QualityInspectTimeSpotCheck = models.QualityInspectTimeSpotCheck;
const DeleteSnapshotByTimeOffsetTemplateResponse = models.DeleteSnapshotByTimeOffsetTemplateResponse;
const ProhibitedOcrReviewTemplateInfoForUpdate = models.ProhibitedOcrReviewTemplateInfoForUpdate;
const AigcVideoRedrawTaskInfo = models.AigcVideoRedrawTaskInfo;
const DescribeCLSPushTargetsRequest = models.DescribeCLSPushTargetsRequest;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DescribeReviewDetailsResponse = models.DescribeReviewDetailsResponse;
const ImageBeautyConfig = models.ImageBeautyConfig;
const CreateTranscodeTemplateResponse = models.CreateTranscodeTemplateResponse;
const AudioDenoiseInfo = models.AudioDenoiseInfo;
const AiRecognitionTaskAsrWordsResultInput = models.AiRecognitionTaskAsrWordsResultInput;
const PornAsrReviewTemplateInfoForUpdate = models.PornAsrReviewTemplateInfoForUpdate;
const ModifySubAppIdStatusResponse = models.ModifySubAppIdStatusResponse;
const VideoDubbingAsyncOutput = models.VideoDubbingAsyncOutput;
const CreateAIAnalysisTemplateRequest = models.CreateAIAnalysisTemplateRequest;
const UpdateAigcApiTokenResponse = models.UpdateAigcApiTokenResponse;
const AiReviewTerrorismTaskInput = models.AiReviewTerrorismTaskInput;
const Quic = models.Quic;
const ComplexAdaptiveDynamicStreamingTaskStreamPara = models.ComplexAdaptiveDynamicStreamingTaskStreamPara;
const MPSUpdateSmartEraseSubtitleConfig = models.MPSUpdateSmartEraseSubtitleConfig;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const RoundPlayListItemInfo = models.RoundPlayListItemInfo;
const EnhanceMediaByTemplateRequest = models.EnhanceMediaByTemplateRequest;
const DeleteHeadTailTemplateResponse = models.DeleteHeadTailTemplateResponse;
const SubAppIdInfo = models.SubAppIdInfo;
const DescribeAllClassResponse = models.DescribeAllClassResponse;
const ModifyImageSpriteTemplateRequest = models.ModifyImageSpriteTemplateRequest;
const Referer = models.Referer;
const AiReviewProhibitedOcrTaskInput = models.AiReviewProhibitedOcrTaskInput;
const DeleteWatermarkTemplateRequest = models.DeleteWatermarkTemplateRequest;
const DeleteVodDomainResponse = models.DeleteVodDomainResponse;
const EditMediaStreamInfo = models.EditMediaStreamInfo;
const HeuristicCacheConfig = models.HeuristicCacheConfig;
const DescribeWordSamplesRequest = models.DescribeWordSamplesRequest;
const ImageCenterCut = models.ImageCenterCut;
const VoiceInfo = models.VoiceInfo;
const ModifyAIAnalysisTemplateRequest = models.ModifyAIAnalysisTemplateRequest;
const CommitUploadResponse = models.CommitUploadResponse;
const MaxAgeRule = models.MaxAgeRule;
const MPSRawSmartEraseParameter = models.MPSRawSmartEraseParameter;
const ExtractCopyRightWatermarkTaskInput = models.ExtractCopyRightWatermarkTaskInput;
const AsrTranslateConfigureInfo = models.AsrTranslateConfigureInfo;
const ImportMediaKnowledgeTaskInput = models.ImportMediaKnowledgeTaskInput;
const DescribeSampleSnapshotTemplatesResponse = models.DescribeSampleSnapshotTemplatesResponse;
const ModifyProcessImageAsyncTemplateRequest = models.ModifyProcessImageAsyncTemplateRequest;
const MPSRawSmartSubtitleParameter = models.MPSRawSmartSubtitleParameter;
const AuthenticationTypeD = models.AuthenticationTypeD;
const AuthenticationTypeC = models.AuthenticationTypeC;
const AuthenticationTypeB = models.AuthenticationTypeB;
const AuthenticationTypeA = models.AuthenticationTypeA;
const AiContentReviewResult = models.AiContentReviewResult;
const CreateAigcImageTaskRequest = models.CreateAigcImageTaskRequest;
const TerrorismImgReviewTemplateInfo = models.TerrorismImgReviewTemplateInfo;
const MPSAiMediaItem = models.MPSAiMediaItem;
const ApplyUploadResponse = models.ApplyUploadResponse;
const ReviewAudioVideoResponse = models.ReviewAudioVideoResponse;
const DeleteClassRequest = models.DeleteClassRequest;
const TerrorismOcrReviewTemplateInfo = models.TerrorismOcrReviewTemplateInfo;
const DescribeTranscodeTemplatesRequest = models.DescribeTranscodeTemplatesRequest;
const ProcessImageAsyncOutputConfig = models.ProcessImageAsyncOutputConfig;
const QualityEnhanceTaskOutput = models.QualityEnhanceTaskOutput;
const ReviewTemplate = models.ReviewTemplate;
const DescribeCurrentPlaylistRequest = models.DescribeCurrentPlaylistRequest;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const DescribeCDNDomainsResponse = models.DescribeCDNDomainsResponse;
const DomainQUICConfig = models.DomainQUICConfig;
const MPSSmartErasePrivacyConfig = models.MPSSmartErasePrivacyConfig;
const CreateRebuildMediaTemplateRequest = models.CreateRebuildMediaTemplateRequest;
const CloneVoiceAsyncResponse = models.CloneVoiceAsyncResponse;
const ImageOperation = models.ImageOperation;
const MediaSubStreamInfoItem = models.MediaSubStreamInfoItem;
const MosaicConfigureInfoForUpdate = models.MosaicConfigureInfoForUpdate;
const DescribeWatermarkTemplatesResponse = models.DescribeWatermarkTemplatesResponse;
const SnapshotByTimeOffsetTemplate = models.SnapshotByTimeOffsetTemplate;
const UpdateVoiceRequest = models.UpdateVoiceRequest;
const DescribeRoundPlaysResponse = models.DescribeRoundPlaysResponse;
const FaceConfigureInfo = models.FaceConfigureInfo;
const ImageTransform = models.ImageTransform;
const CreateAnimatedGraphicsTemplateRequest = models.CreateAnimatedGraphicsTemplateRequest;
const AigcVideoRedrawTaskOutput = models.AigcVideoRedrawTaskOutput;
const DescribeFileAttributesTaskOutput = models.DescribeFileAttributesTaskOutput;
const RemoveWatermarkRequest = models.RemoveWatermarkRequest;
const SPEKEDrm = models.SPEKEDrm;
const ExecuteFunctionRequest = models.ExecuteFunctionRequest;
const ModifyAigcQuotaRequest = models.ModifyAigcQuotaRequest;
const RebuildMediaTask = models.RebuildMediaTask;
const DescribeVoicesResponse = models.DescribeVoicesResponse;
const ConfirmEventsResponse = models.ConfirmEventsResponse;
const CreateAigcApiTokenResponse = models.CreateAigcApiTokenResponse;
const VideoTrackItem = models.VideoTrackItem;
const VideoDenoiseInfo = models.VideoDenoiseInfo;
const DescribeLicenseUsageDataRequest = models.DescribeLicenseUsageDataRequest;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const AigcTextDetail = models.AigcTextDetail;
const RebuildVideoInfo = models.RebuildVideoInfo;
const MediaTranscodeItem = models.MediaTranscodeItem;
const CLSLogsetInfo = models.CLSLogsetInfo;
const DescribePersonSamplesResponse = models.DescribePersonSamplesResponse;
const ExtractCopyRightWatermarkTaskOutput = models.ExtractCopyRightWatermarkTaskOutput;
const AigcAudioReferenceVideoInfo = models.AigcAudioReferenceVideoInfo;
const SplitMediaTaskInput = models.SplitMediaTaskInput;
const DescribeVodDomainsRequest = models.DescribeVodDomainsRequest;
const PornConfigureInfo = models.PornConfigureInfo;
const AiRecognitionTaskObjectSeqmentItem = models.AiRecognitionTaskObjectSeqmentItem;
const SplitMediaResponse = models.SplitMediaResponse;
const ImageDenoiseConfig = models.ImageDenoiseConfig;
const RestoreMediaRequest = models.RestoreMediaRequest;
const PullEventsRequest = models.PullEventsRequest;
const AiRecognitionTaskObjectResult = models.AiRecognitionTaskObjectResult;
const DescribeAIAnalysisTemplatesResponse = models.DescribeAIAnalysisTemplatesResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models.CreateSnapshotByTimeOffsetTemplateRequest;
const DescribeQualityInspectTemplatesResponse = models.DescribeQualityInspectTemplatesResponse;
const UserDefineFaceReviewTemplateInfo = models.UserDefineFaceReviewTemplateInfo;
const LLMComprehendSummaryForUpdate = models.LLMComprehendSummaryForUpdate;
const AiRecognitionTaskAsrWordsResult = models.AiRecognitionTaskAsrWordsResult;
const CreateSubAppIdRequest = models.CreateSubAppIdRequest;
const DescribeProcedureTemplatesResponse = models.DescribeProcedureTemplatesResponse;
const SearchMediaRequest = models.SearchMediaRequest;
const DynamicRangeInfo = models.DynamicRangeInfo;
const CreateSampleSnapshotTemplateRequest = models.CreateSampleSnapshotTemplateRequest;
const DescribeRebuildMediaTemplatesResponse = models.DescribeRebuildMediaTemplatesResponse;
const ModifyEnhanceMediaTemplateRequest = models.ModifyEnhanceMediaTemplateRequest;
const AudioVolumeParam = models.AudioVolumeParam;
const CDNDomainConfigForUpdate = models.CDNDomainConfigForUpdate;
const AiReviewTaskPornAsrResult = models.AiReviewTaskPornAsrResult;
const ModifyClassResponse = models.ModifyClassResponse;
const BlackWhiteEdgeConfigureInfoForUpdate = models.BlackWhiteEdgeConfigureInfoForUpdate;
const EditMediaFileInfo = models.EditMediaFileInfo;
const ImageWatermarkInputForUpdate = models.ImageWatermarkInputForUpdate;
const ProcessMediaByProcedureResponse = models.ProcessMediaByProcedureResponse;
const QualityInspectStrategy = models.QualityInspectStrategy;
const PullUploadResponse = models.PullUploadResponse;
const RemoveWaterMarkTaskInput = models.RemoveWaterMarkTaskInput;
const DescribeVoicesRequest = models.DescribeVoicesRequest;
const AiRecognitionTaskFaceResultOutput = models.AiRecognitionTaskFaceResultOutput;
const AigcVideoRedrawTaskInputFileInfo = models.AigcVideoRedrawTaskInputFileInfo;
const PornImgReviewTemplateInfoForUpdate = models.PornImgReviewTemplateInfoForUpdate;
const DescribeProcessImageAsyncTemplatesResponse = models.DescribeProcessImageAsyncTemplatesResponse;
const CreateWatermarkTemplateResponse = models.CreateWatermarkTemplateResponse;
const PornImgReviewTemplateInfo = models.PornImgReviewTemplateInfo;
const QualityInspectTemplateItem = models.QualityInspectTemplateItem;
const DescribeKnowledgeBasesResponse = models.DescribeKnowledgeBasesResponse;
const AiReviewPoliticalOcrTaskOutput = models.AiReviewPoliticalOcrTaskOutput;
const AigcTextDetailData = models.AigcTextDetailData;
const FileDeleteResultItem = models.FileDeleteResultItem;
const CommitUploadRequest = models.CommitUploadRequest;
const WatermarkCycleConfigForUpdate = models.WatermarkCycleConfigForUpdate;
const SnapshotByTimeOffsetTask2017 = models.SnapshotByTimeOffsetTask2017;
const CreateAigcHunyuan3DTaskResponse = models.CreateAigcHunyuan3DTaskResponse;
const AigcHunyuan3DMultiViewImageInfo = models.AigcHunyuan3DMultiViewImageInfo;
const MediaClassInfo = models.MediaClassInfo;
const CreateAigcSubjectInput = models.CreateAigcSubjectInput;
const DeleteAnimatedGraphicsTemplateRequest = models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models.DeleteSnapshotByTimeOffsetTemplateRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models.DescribeAnimatedGraphicsTemplatesResponse;
const ExtractCopyRightWatermarkTask = models.ExtractCopyRightWatermarkTask;
const MediaAiAnalysisFrameTagItem = models.MediaAiAnalysisFrameTagItem;
const DeleteKnowledgeBaseRequest = models.DeleteKnowledgeBaseRequest;
const QualityInspectItem = models.QualityInspectItem;
const DescribeAigcUsageDataResponse = models.DescribeAigcUsageDataResponse;
const DescribeCLSPushTargetsResponse = models.DescribeCLSPushTargetsResponse;
const PullUploadTask = models.PullUploadTask;
const DescribeImageProcessingTemplatesResponse = models.DescribeImageProcessingTemplatesResponse;
const AigcVideoRedrawTask = models.AigcVideoRedrawTask;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const SampleSnapshotTaskInput = models.SampleSnapshotTaskInput;
const ReviewImageRequest = models.ReviewImageRequest;
const ObjectConfigureInfo = models.ObjectConfigureInfo;
const QualityInspectContainerDiagnoseResultItem = models.QualityInspectContainerDiagnoseResultItem;
const BeautyFilterItem = models.BeautyFilterItem;
const DescribeHeadTailTemplatesResponse = models.DescribeHeadTailTemplatesResponse;
const HandleCurrentPlaylistRequest = models.HandleCurrentPlaylistRequest;
const RebuildMediaByTemplateResponse = models.RebuildMediaByTemplateResponse;
const CreateAigcCustomVoiceRequest = models.CreateAigcCustomVoiceRequest;
const PoliticalAsrReviewTemplateInfo = models.PoliticalAsrReviewTemplateInfo;
const LLMComprehendAsr = models.LLMComprehendAsr;
const SceneAigcImageTaskInput = models.SceneAigcImageTaskInput;
const CreateAnimatedGraphicsTemplateResponse = models.CreateAnimatedGraphicsTemplateResponse;
const AigcVideoTaskUsage = models.AigcVideoTaskUsage;
const AigcVideoTaskInput = models.AigcVideoTaskInput;
const ComplexAdaptiveDynamicStreamingTaskInput = models.ComplexAdaptiveDynamicStreamingTaskInput;
const AudioEnhanceConfig = models.AudioEnhanceConfig;
const AigcHunyuan3DTask = models.AigcHunyuan3DTask;
const AiRecognitionTaskFaceResultItem = models.AiRecognitionTaskFaceResultItem;
const AiAnalysisTaskCoverInput = models.AiAnalysisTaskCoverInput;
const DeleteEnhanceMediaTemplateRequest = models.DeleteEnhanceMediaTemplateRequest;
const ModifyDefaultStorageRegionResponse = models.ModifyDefaultStorageRegionResponse;
const DescribeStorageDetailsRequest = models.DescribeStorageDetailsRequest;
const EnhanceMediaQualityResponse = models.EnhanceMediaQualityResponse;
const SubtitleFormatsOperation = models.SubtitleFormatsOperation;
const ThirdPartyDrmInfo = models.ThirdPartyDrmInfo;
const AiRecognitionTaskSegmentResultInput = models.AiRecognitionTaskSegmentResultInput;
const TextToSpeechAsyncRequest = models.TextToSpeechAsyncRequest;
const MediaTrack = models.MediaTrack;
const FastEditMediaFileInfo = models.FastEditMediaFileInfo;
const StorageStatData = models.StorageStatData;
const RebuildMediaTemplate = models.RebuildMediaTemplate;
const DescribeFileAttributesRequest = models.DescribeFileAttributesRequest;
const AigcVideoSceneInfo = models.AigcVideoSceneInfo;
const SceneAigcVideoTaskOutput = models.SceneAigcVideoTaskOutput;
const DesignVoiceAsyncOutput = models.DesignVoiceAsyncOutput;
const QualityInspectResultItem = models.QualityInspectResultItem;
const MediaOutputInfo = models.MediaOutputInfo;
const HeadTailTemplate = models.HeadTailTemplate;
const EditMediaTaskOutput = models.EditMediaTaskOutput;
const HighlightSegmentItem = models.HighlightSegmentItem;
const CreateReviewTemplateResponse = models.CreateReviewTemplateResponse;
const CreateSceneAigcVideoTaskRequest = models.CreateSceneAigcVideoTaskRequest;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const DeleteQualityInspectTemplateRequest = models.DeleteQualityInspectTemplateRequest;
const SubtitleInfoInput = models.SubtitleInfoInput;
const DeleteJustInTimeTranscodeTemplateResponse = models.DeleteJustInTimeTranscodeTemplateResponse;
const MPSUpdateSmartEraseWatermarkConfig = models.MPSUpdateSmartEraseWatermarkConfig;
const PersistenceCompleteTask = models.PersistenceCompleteTask;
const DescribeJustInTimeTranscodeTemplatesRequest = models.DescribeJustInTimeTranscodeTemplatesRequest;
const SearchMediaBySemanticsRequest = models.SearchMediaBySemanticsRequest;
const CreateHeadTailTemplateRequest = models.CreateHeadTailTemplateRequest;
const FrameTagConfigureInfoForUpdate = models.FrameTagConfigureInfoForUpdate;
const CreateImageSpriteTemplateResponse = models.CreateImageSpriteTemplateResponse;
const DescribeAIRecognitionTemplatesRequest = models.DescribeAIRecognitionTemplatesRequest;
const HDRInfo = models.HDRInfo;
const EditMediaTEHDConfig = models.EditMediaTEHDConfig;
const AiRecognitionResult = models.AiRecognitionResult;


/**
 * vod client
 * @class
 */
class VodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vod.intl.tencentcloudapi.com", "2018-07-17", credential, region, profile);
    }
    
    /**
     * Create a custom image processing template. Maximum quantity: 16. Supports up to ten operations, for example: crop-thumbnail-crop-blur-thumbnail-crop-thumbnail-crop-blur-thumbnail.
     * @param {CreateImageProcessingTemplateRequest} req
     * @param {function(string, CreateImageProcessingTemplateResponse):void} cb
     * @public
     */
    CreateImageProcessingTemplate(req, cb) {
        let resp = new CreateImageProcessingTemplateResponse();
        this.request("CreateImageProcessingTemplate", req, resp, cb);
    }

    /**
     * Queries CLS log sets created by VOD.
     * @param {DescribeCLSLogsetsRequest} req
     * @param {function(string, DescribeCLSLogsetsResponse):void} cb
     * @public
     */
    DescribeCLSLogsets(req, cb) {
        let resp = new DescribeCLSLogsetsResponse();
        this.request("DescribeCLSLogsets", req, resp, cb);
    }

    /**
     * This API is used to create a large model parsing template.
     * @param {CreateLLMComprehendTemplateRequest} req
     * @param {function(string, CreateLLMComprehendTemplateResponse):void} cb
     * @public
     */
    CreateLLMComprehendTemplate(req, cb) {
        let resp = new CreateLLMComprehendTemplateResponse();
        this.request("CreateLLMComprehendTemplate", req, resp, cb);
    }

    /**
     * This API is used to initiate a voice cloning task. It generates an exclusive voice based on reference audio. The generated voice can be used for subsequent text to speech. Voice cloning is an asynchronous task. The voice ID and audio audition are generated after task completion.
     * @param {CloneVoiceAsyncRequest} req
     * @param {function(string, CloneVoiceAsyncResponse):void} cb
     * @public
     */
    CloneVoiceAsync(req, cb) {
        let resp = new CloneVoiceAsyncResponse();
        this.request("CloneVoiceAsync", req, resp, cb);
    }

    /**
     * If source tracing for piracy is required, ghost watermark is recommended for use (https://www.tencentcloud.com/document/product/266/94228?from_cn_redirect=1).
     * @param {ExtractTraceWatermarkRequest} req
     * @param {function(string, ExtractTraceWatermarkResponse):void} cb
     * @public
     */
    ExtractTraceWatermark(req, cb) {
        let resp = new ExtractTraceWatermarkResponse();
        this.request("ExtractTraceWatermark", req, resp, cb);
    }

    /**
     * This API is used to delete a specified voice by voice ID. Deletion is irreversible and the voice cannot be used for subsequent APIs. It only supports deletion of voices for this account. System preset voices cannot be deleted.

Note: Newly designed or cloned voice types cannot be deleted before activation (not found means non-operational). They are activated only after the newly created voice type is used for TTS once.
     * @param {DeleteVoiceRequest} req
     * @param {function(string, DeleteVoiceResponse):void} cb
     * @public
     */
    DeleteVoice(req, cb) {
        let resp = new DeleteVoiceResponse();
        this.request("DeleteVoice", req, resp, cb);
    }

    /**
     * This API is used to modify a user-customized image async processing template.

Note: Templates with IDs below 10000 are preset templates and are not allowed to be modified.
     * @param {ModifyProcessImageAsyncTemplateRequest} req
     * @param {function(string, ModifyProcessImageAsyncTemplateResponse):void} cb
     * @public
     */
    ModifyProcessImageAsyncTemplate(req, cb) {
        let resp = new ModifyProcessImageAsyncTemplateResponse();
        this.request("ModifyProcessImageAsyncTemplate", req, resp, cb);
    }

    /**
     * Used to asynchronously fetch file attributes.
-Currently only support getting the Md5 and Sha1 of the source file.
-For HLS or DASH input files, only get the attributes of the index file.
     * @param {DescribeFileAttributesRequest} req
     * @param {function(string, DescribeFileAttributesResponse):void} cb
     * @public
     */
    DescribeFileAttributes(req, cb) {
        let resp = new DescribeFileAttributesResponse();
        this.request("DescribeFileAttributes", req, resp, cb);
    }

    /**
     * This API is used to edit a video, such as clipping and concatenation, to generate a new on-demand video. Editing features include:

1) Edit a file in on-demand playback to generate a new video.
2) Splice multiple on-demand files to generate a new video.
3) Edit multiple on-demand video files and then splice them to generate a new video;
4. Directly generate a new video for one stream in VOD;
5. Edit one stream in VOD to generate a new video;
6) Splice multiple on-demand streams to generate a new video.
7) Edit multiple streams in VOD and then splice them to generate a new video.

For the generated new video, you can also specify whether to execute task flow for the generated video.

When editing or splicing a live stream, please ensure the stream ended before you operate. Otherwise, the generated video may be incomplete.

If event notification is used, its type is [video editing completed](https://www.tencentcloud.com/document/product/266/33794?from_cn_redirect=1).
     * @param {EditMediaRequest} req
     * @param {function(string, EditMediaResponse):void} cb
     * @public
     */
    EditMedia(req, cb) {
        let resp = new EditMediaResponse();
        this.request("EditMedia", req, resp, cb);
    }

    /**
     * This API is used to generate AIGC images. The default limit is 1 concurrent processing. API calls incur actual fees. Refer to the VOD AIGC image generation billing documentation. The settlement mode for this feature is pay-as-you-go. For daily billing customers, usage on the day is billed on the second day. For monthly billing customers, the previous month's usage fees are billed on the 1st of the next month.
     * @param {CreateAigcImageTaskRequest} req
     * @param {function(string, CreateAigcImageTaskResponse):void} cb
     * @public
     */
    CreateAigcImageTask(req, cb) {
        let resp = new CreateAigcImageTaskResponse();
        this.request("CreateAigcImageTask", req, resp, cb);
    }

    /**
     * This API is used to obtain the template detail list of large model parsing templates based on the Template Unique Identifier. The returned results include all eligible user-customized large model parsing templates.
     * @param {DescribeLLMComprehendTemplatesRequest} req
     * @param {function(string, DescribeLLMComprehendTemplatesResponse):void} cb
     * @public
     */
    DescribeLLMComprehendTemplates(req, cb) {
        let resp = new DescribeLLMComprehendTemplatesResponse();
        this.request("DescribeLLMComprehendTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the list of on-demand video domain names.
     * @param {DescribeVodDomainsRequest} req
     * @param {function(string, DescribeVodDomainsResponse):void} cb
     * @public
     */
    DescribeVodDomains(req, cb) {
        let resp = new DescribeVodDomainsResponse();
        this.request("DescribeVodDomains", req, resp, cb);
    }

    /**
     * We strongly recommend that you use the [server-side upload SDK](https://www.tencentcloud.comhttps://www.tencentcloud.com/document/product/266/9759?from_cn_redirect=1?from_cn_redirect=1#1.-.E5.8F.91.E8.B5.B7.E4.B8.8A.E4.BC.A0) provided by VOD to upload files. Directly invoking the API for upload is significantly more difficult and requires a larger workload than using the SDK.
* This API is used to apply for upload of media files (and cover files), obtain meta information for file upload to VOD (including upload path, upload signature), for subsequent upload API.
For the upload process, see [Server-Side Upload Overview](https://www.tencentcloud.com/document/product/266/9759?from_cn_redirect=1).
     * @param {ApplyUploadRequest} req
     * @param {function(string, ApplyUploadResponse):void} cb
     * @public
     */
    ApplyUpload(req, cb) {
        let resp = new ApplyUploadResponse();
        this.request("ApplyUpload", req, resp, cb);
    }

    /**
     * This API is used to create a carousel playlist. Maximum quantity: 100.
Each file in a carousel playlist can specify a source file or a transcoded file.
The specified file must be in hls format. All playlist files should have the same bitrate and resolution.
     * @param {CreateRoundPlayRequest} req
     * @param {function(string, CreateRoundPlayResponse):void} cb
     * @public
     */
    CreateRoundPlay(req, cb) {
        let resp = new CreateRoundPlayResponse();
        this.request("CreateRoundPlay", req, resp, cb);
    }

    /**
     * Create a user-customized async image processing template. Maximum number: 50. HLS format is not supported currently.
     * @param {CreateProcessImageAsyncTemplateRequest} req
     * @param {function(string, CreateProcessImageAsyncTemplateResponse):void} cb
     * @public
     */
    CreateProcessImageAsyncTemplate(req, cb) {
        let resp = new CreateProcessImageAsyncTemplateResponse();
        this.request("CreateProcessImageAsyncTemplate", req, resp, cb);
    }

    /**
     * * This API is used for the business server to get event notifications via reliable callback (https://www.tencentcloud.com/document/product/266/33779?from_cn_redirect=1#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83);
* The API uses long polling mode. If there are unconsumed events on the server, they will be returned to the requester immediately. If there are no unconsumed events, the request will be suspended in the background until a new event occurs.
* The request can be suspended for up to 5 seconds. It is advisable to set the timeout to 10 seconds for the requester.
* Event notifications that are not pulled are retained for up to 4 days. Notifications exceeding this time limit may be purged.
* If this API returns an event, the caller must call the [Confirm Event Notification](https://www.tencentcloud.com/document/product/266/33434?from_cn_redirect=1) API within <font color="red">30 seconds</font> to confirm that the event notification has been processed. Otherwise, the event notification will be pulled again after <font color="red">30 seconds</font>.
* Currently, a maximum of 16 event notifications can be obtained per API call.
     * @param {PullEventsRequest} req
     * @param {function(string, PullEventsResponse):void} cb
     * @public
     */
    PullEvents(req, cb) {
        let resp = new PullEventsResponse();
        this.request("PullEvents", req, resp, cb);
    }

    /**
     * Used to edit AIGC quota configuration. Quota usage starts accumulating when the quota feature is enabled. Once the quota is reached, AIGC features will no longer be usable.

Since AGC content generation is an async task, real-time usage data cannot be obtained. Therefore, quota limits result in some errors, and complete precise control with the set limit cannot be achieved.
     * @param {ModifyAigcQuotaRequest} req
     * @param {function(string, ModifyAigcQuotaResponse):void} cb
     * @public
     */
    ModifyAigcQuota(req, cb) {
        let resp = new ModifyAigcQuotaResponse();
        this.request("ModifyAigcQuota", req, resp, cb);
    }

    /**
     * Use a task flow template to initiate processing tasks for videos in VOD.
There are two ways to create a task flow template:
1. Create and modify a task flow template in the console;
2. Create a task flow template through the task flow template API.

If event notification is used, the type of event notification for tasks other than audio/video moderation tasks is task flow status change (https://www.tencentcloud.com/document/product/266/9636?from_cn_redirect=1); the type of event notification for audio/video moderation tasks is audio/video moderation completed (https://www.tencentcloud.com/document/product/266/81258?from_cn_redirect=1).
     * @param {ProcessMediaByProcedureRequest} req
     * @param {function(string, ProcessMediaByProcedureResponse):void} cb
     * @public
     */
    ProcessMediaByProcedure(req, cb) {
        let resp = new ProcessMediaByProcedureResponse();
        this.request("ProcessMediaByProcedure", req, resp, cb);
    }

    /**
     * Creates an audio-visual quality inspection template.
     * @param {CreateQualityInspectTemplateRequest} req
     * @param {function(string, CreateQualityInspectTemplateResponse):void} cb
     * @public
     */
    CreateQualityInspectTemplate(req, cb) {
        let resp = new CreateQualityInspectTemplateResponse();
        this.request("CreateQualityInspectTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a user-customized specified time point screenshot template. Maximum quantity: 16.
     * @param {CreateSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, CreateSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    CreateSnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new CreateSnapshotByTimeOffsetTemplateResponse();
        this.request("CreateSnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of [audio and video quality revival](https://www.tencentcloud.com/document/product/266/102571?from_cn_redirect=1) interface uses preset templates. For details, see [Audio and Video Quality Rebirth Template](https://www.tencentcloud.com/document/product/266/102586?from_cn_redirect=1#50604b3f-0286-4a10-a3f7-18218116aff7).
Modifying a Video Rebirth Template.
     * @param {ModifyRebuildMediaTemplateRequest} req
     * @param {function(string, ModifyRebuildMediaTemplateResponse):void} cb
     * @public
     */
    ModifyRebuildMediaTemplate(req, cb) {
        let resp = new ModifyRebuildMediaTemplateResponse();
        this.request("ModifyRebuildMediaTemplate", req, resp, cb);
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
     * This API is used to query the details of the task execution status and results by task ID (tasks submitted within the last 3 days can be queried).
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     * <b>This API is not recommended. Use [DescribeMediaProcessUsageData](https://www.tencentcloud.com/document/product/266/41464?from_cn_redirect=1) as an alternative.</b>

This API is used to return the daily video content intelligent identification duration data within the specified query time range. Unit: seconds.

1. Video content intelligent identification duration stats from the last 365 days can be queried.
2. The query time span should not exceed 90 days.
     * @param {DescribeReviewDetailsRequest} req
     * @param {function(string, DescribeReviewDetailsResponse):void} cb
     * @public
     */
    DescribeReviewDetails(req, cb) {
        let resp = new DescribeReviewDetailsResponse();
        this.request("DescribeReviewDetails", req, resp, cb);
    }

    /**
     * This API is used to paginate keyword sample information by scenario, keyword, and tag.
     * @param {DescribeWordSamplesRequest} req
     * @param {function(string, DescribeWordSamplesResponse):void} cb
     * @public
     */
    DescribeWordSamples(req, cb) {
        let resp = new DescribeWordSamplesResponse();
        this.request("DescribeWordSamples", req, resp, cb);
    }

    /**
     * Queries storage space usage and number of files.
     * @param {DescribeStorageDataRequest} req
     * @param {function(string, DescribeStorageDataResponse):void} cb
     * @public
     */
    DescribeStorageData(req, cb) {
        let resp = new DescribeStorageDataResponse();
        this.request("DescribeStorageData", req, resp, cb);
    }

    /**
     * This API is used to split an on-demand video into multiple new on-demand videos.
     * @param {SplitMediaRequest} req
     * @param {function(string, SplitMediaResponse):void} cb
     * @public
     */
    SplitMedia(req, cb) {
        let resp = new SplitMediaResponse();
        this.request("SplitMedia", req, resp, cb);
    }

    /**
     * This API is used to query the list of image processing templates based on conditions with paging.
     * @param {DescribeImageProcessingTemplatesRequest} req
     * @param {function(string, DescribeImageProcessingTemplatesResponse):void} cb
     * @public
     */
    DescribeImageProcessingTemplates(req, cb) {
        let resp = new DescribeImageProcessingTemplatesResponse();
        this.request("DescribeImageProcessingTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete a user-defined task flow template.
     * @param {DeleteProcedureTemplateRequest} req
     * @param {function(string, DeleteProcedureTemplateResponse):void} cb
     * @public
     */
    DeleteProcedureTemplate(req, cb) {
        let resp = new DeleteProcedureTemplateResponse();
        this.request("DeleteProcedureTemplate", req, resp, cb);
    }

    /**
     * Delete an adaptive bitrate streaming template
     * @param {DeleteAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, DeleteAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    DeleteAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new DeleteAdaptiveDynamicStreamingTemplateResponse();
        this.request("DeleteAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }

    /**
     * Create adaptive bitrate streaming templates. Maximum quantity: 100.
     * @param {CreateAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, CreateAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    CreateAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new CreateAdaptiveDynamicStreamingTemplateResponse();
        this.request("CreateAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }

    /**
     * This API is used to query sampled screenshot templates based on conditions with paging.
     * @param {DescribeSampleSnapshotTemplatesRequest} req
     * @param {function(string, DescribeSampleSnapshotTemplatesResponse):void} cb
     * @public
     */
    DescribeSampleSnapshotTemplates(req, cb) {
        let resp = new DescribeSampleSnapshotTemplatesResponse();
        this.request("DescribeSampleSnapshotTemplates", req, resp, cb);
    }

    /**
     * This API is used to create custom animated image generating templates. Maximum quantity: 16.
     * @param {CreateAnimatedGraphicsTemplateRequest} req
     * @param {function(string, CreateAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    CreateAnimatedGraphicsTemplate(req, cb) {
        let resp = new CreateAnimatedGraphicsTemplateResponse();
        this.request("CreateAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * Watermark removal
     * @param {RemoveWatermarkRequest} req
     * @param {function(string, RemoveWatermarkResponse):void} cb
     * @public
     */
    RemoveWatermark(req, cb) {
        let resp = new RemoveWatermarkResponse();
        this.request("RemoveWatermark", req, resp, cb);
    }

    /**
     * This API is used to modify the default distribution configuration.
* Distribution domain name and distribution protocol, i.e., the domain name and protocol in the media file distribution URL. Media files are distributed based on the default distribution configuration.
Playback key, used to calculate player signature.
     * @param {ModifyDefaultDistributionConfigRequest} req
     * @param {function(string, ModifyDefaultDistributionConfigResponse):void} cb
     * @public
     */
    ModifyDefaultDistributionConfig(req, cb) {
        let resp = new ModifyDefaultDistributionConfigResponse();
        this.request("ModifyDefaultDistributionConfig", req, resp, cb);
    }

    /**
     * This API is used to obtain the template details list based on the template unique identifier. The returned results include all eligible user-customized image asynchronous processing templates.
     * @param {DescribeProcessImageAsyncTemplatesRequest} req
     * @param {function(string, DescribeProcessImageAsyncTemplatesResponse):void} cb
     * @public
     */
    DescribeProcessImageAsyncTemplates(req, cb) {
        let resp = new DescribeProcessImageAsyncTemplatesResponse();
        this.request("DescribeProcessImageAsyncTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the download URL of CDN access logs for a VOD domain, excluding logs where EdgeOne pulls from the VOD domain.
1. Can query CDN log download links from the most recent 30 days.
2. By default, CDN generates a log file per hour. If there is no CDN access in an hour, no log file is generated.    
3. The CDN log download link has a validity of 24 hours.
     * @param {DescribeCdnLogsRequest} req
     * @param {function(string, DescribeCdnLogsResponse):void} cb
     * @public
     */
    DescribeCdnLogs(req, cb) {
        let resp = new DescribeCdnLogsResponse();
        this.request("DescribeCdnLogs", req, resp, cb);
    }

    /**
     * This API is used to delete AIGC quota configurations. Once deleted, AIGC task initiation will no longer be limited.

If the quota is deleted and re-enabled, the amount will be cleared and recalculated.
     * @param {DeleteAigcQuotaRequest} req
     * @param {function(string, DeleteAigcQuotaResponse):void} cb
     * @public
     */
    DeleteAigcQuota(req, cb) {
        let resp = new DeleteAigcQuotaResponse();
        this.request("DeleteAigcQuota", req, resp, cb);
    }

    /**
     * Initiate a speech synthesis task to convert text into speech, oriented towards long text scenarios (maximum 200,000 characters), supporting specified timbre and synthesis parameters such as speaking rate, volume, pitch, sampling rate, and output format. Speech synthesis is an asynchronous task, and audio results are generated upon completion.
     * @param {TextToSpeechAsyncRequest} req
     * @param {function(string, TextToSpeechAsyncResponse):void} cb
     * @public
     */
    TextToSpeechAsync(req, cb) {
        let resp = new TextToSpeechAsyncResponse();
        this.request("TextToSpeechAsync", req, resp, cb);
    }

    /**
     * Modify a large model parsing template
     * @param {ModifyLLMComprehendTemplateRequest} req
     * @param {function(string, ModifyLLMComprehendTemplateResponse):void} cb
     * @public
     */
    ModifyLLMComprehendTemplate(req, cb) {
        let resp = new ModifyLLMComprehendTemplateResponse();
        this.request("ModifyLLMComprehendTemplate", req, resp, cb);
    }

    /**
     * This API is used to list stored file entries under a sub-application.

**This API is only available in "FileID+Path mode"**
     * @param {ListFilesRequest} req
     * @param {function(string, ListFilesResponse):void} cb
     * @public
     */
    ListFiles(req, cb) {
        let resp = new ListFilesResponse();
        this.request("ListFiles", req, resp, cb);
    }

    /**
     * Delete a user-customized large model parsing template.

Note: Templates with IDs below 10000 are system-preset templates and cannot be deleted.
     * @param {DeleteLLMComprehendTemplateRequest} req
     * @param {function(string, DeleteLLMComprehendTemplateResponse):void} cb
     * @public
     */
    DeleteLLMComprehendTemplate(req, cb) {
        let resp = new DeleteLLMComprehendTemplateResponse();
        this.request("DeleteLLMComprehendTemplate", req, resp, cb);
    }

    /**
     * * This API is used to query the task list.
* When the list contains a large amount of data, a single API call cannot pull the entire list. You can use the ScrollToken parameter to pull in batches.
* Only tasks from the last three days (72 hours) can be queried.
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * Delete a knowledge base.
After the API is called, the knowledge base is in the "Deleting" status, and the deletion operation is performed in the backend.
     * @param {DeleteKnowledgeBaseRequest} req
     * @param {function(string, DeleteKnowledgeBaseResponse):void} cb
     * @public
     */
    DeleteKnowledgeBase(req, cb) {
        let resp = new DeleteKnowledgeBaseResponse();
        this.request("DeleteKnowledgeBase", req, resp, cb);
    }

    /**
     * This API is used to enable storage in a region.
1. When a user enables the VOD service, storage in partial regions is enabled by default. If the user needs storage in other regions, they can use this API to enable it.
2. The DescribeStorageRegions API can be used to query all storage regions and regions that are already opened.
     * @param {CreateStorageRegionRequest} req
     * @param {function(string, CreateStorageRegionResponse):void} cb
     * @public
     */
    CreateStorageRegion(req, cb) {
        let resp = new CreateStorageRegionResponse();
        this.request("CreateStorageRegion", req, resp, cb);
    }

    /**
     * Delete the log topic enabled for VOD.
     * @param {DeleteCLSTopicRequest} req
     * @param {function(string, DeleteCLSTopicResponse):void} cb
     * @public
     */
    DeleteCLSTopic(req, cb) {
        let resp = new DeleteCLSTopicResponse();
        this.request("DeleteCLSTopic", req, resp, cb);
    }

    /**
     * Reset the content of the user-defined task flow template.
     * @param {ResetProcedureTemplateRequest} req
     * @param {function(string, ResetProcedureTemplateResponse):void} cb
     * @public
     */
    ResetProcedureTemplate(req, cb) {
        let resp = new ResetProcedureTemplateResponse();
        this.request("ResetProcedureTemplate", req, resp, cb);
    }

    /**
     * This API is used to return AIGC statistical information within a specified time range.
1. AIGC statistical data from the last 365 days can be queried.
   2. The query time span should not exceed 90 days.
3. If the query time span exceeds 1 day, the data of day granularity is returned. Otherwise, the data of 5-minute granularity is returned.
     * @param {DescribeAigcUsageDataRequest} req
     * @param {function(string, DescribeAigcUsageDataResponse):void} cb
     * @public
     */
    DescribeAigcUsageData(req, cb) {
        let resp = new DescribeAigcUsageDataResponse();
        this.request("DescribeAigcUsageData", req, resp, cb);
    }

    /**
     * This API is used to query VOD CDN stats such as traffic and bandwidth.
1. CDN usage data is retained on the system side for 13 months. You can only query usage data from the most recent 365 days through the API. If you need to retrieve historical usage data beyond 365 days, contact us.
   2. The query time span should not exceed 90 days.
3. You can specify the time granularity of usage data. Supported granularities: 5 minutes, 1 hour, and 1 day.
4. Traffic is the total traffic within the query time granularity, and bandwidth is the peak bandwidth within the query time granularity.
5. Playback statistics only target VOD domains. Distribution through EdgeOne domain names is not included in playback statistics.
     * @param {DescribeCDNUsageDataRequest} req
     * @param {function(string, DescribeCDNUsageDataResponse):void} cb
     * @public
     */
    DescribeCDNUsageData(req, cb) {
        let resp = new DescribeCDNUsageDataResponse();
        this.request("DescribeCDNUsageData", req, resp, cb);
    }

    /**
     * This API is used to process image tasks.
     * @param {ProcessImageAsyncRequest} req
     * @param {function(string, ProcessImageAsyncResponse):void} cb
     * @public
     */
    ProcessImageAsync(req, cb) {
        let resp = new ProcessImageAsyncResponse();
        this.request("ProcessImageAsync", req, resp, cb);
    }

    /**
     * Create custom transcoding templates. Maximum quantity: 100.
     * @param {CreateTranscodeTemplateRequest} req
     * @param {function(string, CreateTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateTranscodeTemplate(req, cb) {
        let resp = new CreateTranscodeTemplateResponse();
        this.request("CreateTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to query CDN bandwidth, traffic, and other stats of an on-demand domain name.
* The time span between the query start time and end time should not exceed 90 days.
* Data in different service regions can be queried.
* Data support within the Chinese mainland for querying stats by specified region and carrier.
Playback statistics only target VOD domains. Distribution through EdgeOne domain names is not included in playback statistics.
     * @param {DescribeCDNStatDetailsRequest} req
     * @param {function(string, DescribeCDNStatDetailsResponse):void} cb
     * @public
     */
    DescribeCDNStatDetails(req, cb) {
        let resp = new DescribeCDNStatDetailsResponse();
        this.request("DescribeCDNStatDetails", req, resp, cb);
    }

    /**
     * Use the media processing capability of Media Processing Service (MPS) to initiate media processing for videos in VOD.
Currently supported MPS features:
1. Smart subtitling: The feature supports processing offline audio files, video files, and live streams. It can extract subtitles in the video source language through ASR speech recognition or OCR text recognition, and implement multilingual translation. View details in the integration guide (https://www.tencentcloud.com/document/product/266/131210?from_cn_redirect=1).
2. Intelligent erasure: It can blur, mosaic, or seamlessly process elements such as logos, subtitles, human faces, and license plates in video footage, making it easy to spread and share content. The new video generated by this task will be assigned a new FileId and stored in a subapplication of the VOD platform. For details, see the Access Guide (https://www.tencentcloud.com/document/product/266/131211?from_cn_redirect=1).
3. AI analysis: This feature supports all-in-one translation (https://www.tencentcloud.com/document/product/266/131212?from_cn_redirect=1), highlights (https://www.tencentcloud.com/document/product/266/131213?from_cn_redirect=1), LLM video summary (https://www.tencentcloud.com/document/product/266/131214?from_cn_redirect=1), LLM audio/video understanding (https://www.tencentcloud.com/document/product/266/131215?from_cn_redirect=1), intelligent splitting (https://www.tencentcloud.com/document/product/266/131216?from_cn_redirect=1), intelligent landscape-to-portrait (https://www.tencentcloud.com/document/product/266/131217?from_cn_redirect=1), video deduplication (https://www.tencentcloud.com/document/product/266/131218?from_cn_redirect=1), and other features.


> Video processing tasks initiated this method:
> 1. Query of task status and results is still completed in the VOD platform. Use [DescribeTaskDetail](https://www.tencentcloud.com/document/product/266/33431?from_cn_redirect=1) or [DescribeTasks](https://www.tencentcloud.com/document/product/266/33430?from_cn_redirect=1) to query tasks.
> 2. The amount and bills of related features will be provided on the PS platform. Before using this feature, first enable Media Processing Service (MPS) in the console. For the activation method, see the preliminary operations in the access documentation.
     * @param {ProcessMediaByMPSRequest} req
     * @param {function(string, ProcessMediaByMPSResponse):void} cb
     * @public
     */
    ProcessMediaByMPS(req, cb) {
        let resp = new ProcessMediaByMPSResponse();
        this.request("ProcessMediaByMPS", req, resp, cb);
    }

    /**
     * This API is used to query playback data of media files by specified time granularity.
* Playback statistics from the past one year can be queried.
Time granularity: hour. The maximum span between start time and end time is 7 days.
Time granularity: day. The maximum span between the end time and start time is 90 days.
* Playback statistics only target VOD domains (distribution from EdgeOne domain names is not included in playback statistics).
     * @param {DescribeMediaPlayStatDetailsRequest} req
     * @param {function(string, DescribeMediaPlayStatDetailsResponse):void} cb
     * @public
     */
    DescribeMediaPlayStatDetails(req, cb) {
        let resp = new DescribeMediaPlayStatDetailsResponse();
        this.request("DescribeMediaPlayStatDetails", req, resp, cb);
    }

    /**
     * Modifies a user-customized moderation template.
>Template is applicable only to the ReviewAudioVideo (https://www.tencentcloud.com/document/api/266/80283?from_cn_redirect=1) and ReviewImage (https://www.tencentcloud.com/document/api/266/73217?from_cn_redirect=1) APIs.
     * @param {ModifyReviewTemplateRequest} req
     * @param {function(string, ModifyReviewTemplateResponse):void} cb
     * @public
     */
    ModifyReviewTemplate(req, cb) {
        let resp = new ModifyReviewTemplateResponse();
        this.request("ModifyReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to return the daily License request count within the specified query time range.
1. License request count stats from the last 365 days can be queried.
   2. The query time span should not exceed 90 days.
3. If the query time span exceeds 1 day, the data returned is at day granularity. Otherwise, the data returned is at 5-minute granularity.
     * @param {DescribeLicenseUsageDataRequest} req
     * @param {function(string, DescribeLicenseUsageDataResponse):void} cb
     * @public
     */
    DescribeLicenseUsageData(req, cb) {
        let resp = new DescribeLicenseUsageDataResponse();
        this.request("DescribeLicenseUsageData", req, resp, cb);
    }

    /**
     * Tencent Cloud VOD provides customers with media upload, media management, media processing, and other services. During or after the execution of these services, Tencent Cloud VOD also offers various corresponding event notifications, allowing developers to detect the service processing status and perform the next business operation.

Developers can call this interface to:
- Set the type for receiving callback notifications. Currently, there are two types: [HTTP callback notification](https://www.tencentcloud.com/document/product/266/33779?from_cn_redirect=1) and [reliable notification based on message queue](https://www.tencentcloud.com/document/product/266/33779?from_cn_redirect=1).
- For [HTTP callback notification](https://www.tencentcloud.com/document/product/266/33779?from_cn_redirect=1), you can set the address for 3.0 format callback. For 3.0 format callback details, see [historical format callback](https://www.tencentcloud.com/document/product/266/33796?from_cn_redirect=1).
-Select to receive or ignore notification events for a specific event service.
     * @param {ModifyEventConfigRequest} req
     * @param {function(string, ModifyEventConfigResponse):void} cb
     * @public
     */
    ModifyEventConfig(req, cb) {
        let resp = new ModifyEventConfigResponse();
        this.request("ModifyEventConfig", req, resp, cb);
    }

    /**
     * * A category can be deleted only when it has no subcategories and no associated media.
* Otherwise, execute [delete media](https://www.tencentcloud.com/document/product/266/31764?from_cn_redirect=1) and subcategories first, then delete the category;
     * @param {DeleteClassRequest} req
     * @param {function(string, DeleteClassResponse):void} cb
     * @public
     */
    DeleteClass(req, cb) {
        let resp = new DeleteClassResponse();
        this.request("DeleteClass", req, resp, cb);
    }

    /**
     * This API is used to obtain advanced custom AIGC subjects.
     * @param {DescribeAigcAdvancedCustomElementsRequest} req
     * @param {function(string, DescribeAigcAdvancedCustomElementsResponse):void} cb
     * @public
     */
    DescribeAigcAdvancedCustomElements(req, cb) {
        let resp = new DescribeAigcAdvancedCustomElementsResponse();
        this.request("DescribeAigcAdvancedCustomElements", req, resp, cb);
    }

    /**
     * This API is only used for special scenarios of customized development. Do not call this API unless VOD customer service proactively informs you to use it.
     * @param {ExecuteFunctionRequest} req
     * @param {function(string, ExecuteFunctionResponse):void} cb
     * @public
     */
    ExecuteFunction(req, cb) {
        let resp = new ExecuteFunctionResponse();
        this.request("ExecuteFunction", req, resp, cb);
    }

    /**
     * This API is used to delete VOD acceleration domains.
1. Before domain deletion, acceleration in all regions needs to be disabled.
     * @param {DeleteVodDomainRequest} req
     * @param {function(string, DeleteVodDomainResponse):void} cb
     * @public
     */
    DeleteVodDomain(req, cb) {
        let resp = new DeleteVodDomainResponse();
        this.request("DeleteVodDomain", req, resp, cb);
    }

    /**
     * This API is used to return the daily video processing usage information within the specified query time range.
1. Video processing usage data is retained in the data system for 13 months. You can query usage data from the most recent 365 days through the API. To call historical usage data beyond 365 days, contact us.
   2. The query time span should not exceed 90 days.
     * @param {DescribeMediaProcessUsageDataRequest} req
     * @param {function(string, DescribeMediaProcessUsageDataResponse):void} cb
     * @public
     */
    DescribeMediaProcessUsageData(req, cb) {
        let resp = new DescribeMediaProcessUsageDataResponse();
        this.request("DescribeMediaProcessUsageData", req, resp, cb);
    }

    /**
     * This API is used to create AIGC voice replication. Note that calling this API incurs fees. Refer to the billing documentation (https://www.tencentcloud.com/document/product/266/95125?from_cn_redirect=1#96b3b59a-f9e1-49e9-966a-bedb70a4bf12).
     * @param {CreateAigcAudioCloneRequest} req
     * @param {function(string, CreateAigcAudioCloneResponse):void} cb
     * @public
     */
    CreateAigcAudioClone(req, cb) {
        let resp = new CreateAigcAudioCloneResponse();
        this.request("CreateAigcAudioClone", req, resp, cb);
    }

    /**
     * This API is used to initiate an audio and video quality inspection task for on-demand audio-video media.
     * @param {InspectMediaQualityRequest} req
     * @param {function(string, InspectMediaQualityResponse):void} cb
     * @public
     */
    InspectMediaQuality(req, cb) {
        let resp = new InspectMediaQualityResponse();
        this.request("InspectMediaQuality", req, resp, cb);
    }

    /**
     * This API is used to generate a subdomain name resolution and prompt customers to add it to the domain name resolution for wildcard domain name and domain name retrieval ownership verification.
     * @param {CreateDomainVerifyRecordRequest} req
     * @param {function(string, CreateDomainVerifyRecordResponse):void} cb
     * @public
     */
    CreateDomainVerifyRecord(req, cb) {
        let resp = new CreateDomainVerifyRecordResponse();
        this.request("CreateDomainVerifyRecord", req, resp, cb);
    }

    /**
     * Queries specified time point screenshot templates and supports paging query based on conditions.
     * @param {DescribeSnapshotByTimeOffsetTemplatesRequest} req
     * @param {function(string, DescribeSnapshotByTimeOffsetTemplatesResponse):void} cb
     * @public
     */
    DescribeSnapshotByTimeOffsetTemplates(req, cb) {
        let resp = new DescribeSnapshotByTimeOffsetTemplatesResponse();
        this.request("DescribeSnapshotByTimeOffsetTemplates", req, resp, cb);
    }

    /**
     * This API is used to query adaptive bitrate streaming templates, and the pagination query is supported based on conditions.
     * @param {DescribeAdaptiveDynamicStreamingTemplatesRequest} req
     * @param {function(string, DescribeAdaptiveDynamicStreamingTemplatesResponse):void} cb
     * @public
     */
    DescribeAdaptiveDynamicStreamingTemplates(req, cb) {
        let resp = new DescribeAdaptiveDynamicStreamingTemplatesResponse();
        this.request("DescribeAdaptiveDynamicStreamingTemplates", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of the moderation template supports video moderation and image moderation. For details, please see [Create Moderation Template](https://www.tencentcloud.com/document/api/266/84391?from_cn_redirect=1).
This API is used to create a user-customized audio/video moderation template. Up to 50 templates can be created.
     * @param {CreateContentReviewTemplateRequest} req
     * @param {function(string, CreateContentReviewTemplateResponse):void} cb
     * @public
     */
    CreateContentReviewTemplate(req, cb) {
        let resp = new CreateContentReviewTemplateResponse();
        this.request("CreateContentReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to obtain user-customized media processing service task templates.
When querying the template list, fill in MPS-related parameters in MPSDescribeTemplateParams in JSON format. For task parameter configuration, refer to the MPS task template documentation.
     * @param {DescribeMPSTemplatesRequest} req
     * @param {function(string, DescribeMPSTemplatesResponse):void} cb
     * @public
     */
    DescribeMPSTemplates(req, cb) {
        let resp = new DescribeMPSTemplatesResponse();
        this.request("DescribeMPSTemplates", req, resp, cb);
    }

    /**
     * This API is used to modify a user-defined digital watermark template. The digital watermark type cannot be modified.
     * @param {ModifyBlindWatermarkTemplateRequest} req
     * @param {function(string, ModifyBlindWatermarkTemplateResponse):void} cb
     * @public
     */
    ModifyBlindWatermarkTemplate(req, cb) {
        let resp = new ModifyBlindWatermarkTemplateResponse();
        this.request("ModifyBlindWatermarkTemplate", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. Please use the new version of APIs [audio and video quality revival](https://www.tencentcloud.com/document/api/266/102571?from_cn_redirect=1).
This API is used to initiate audio and video quality revival.
     * @param {RebuildMediaRequest} req
     * @param {function(string, RebuildMediaResponse):void} cb
     * @public
     */
    RebuildMedia(req, cb) {
        let resp = new RebuildMediaResponse();
        this.request("RebuildMedia", req, resp, cb);
    }

    /**
     * This API is used to create custom sampled screenshot templates. Maximum quantity: 16.
     * @param {CreateSampleSnapshotTemplateRequest} req
     * @param {function(string, CreateSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    CreateSampleSnapshotTemplate(req, cb) {
        let resp = new CreateSampleSnapshotTemplateResponse();
        this.request("CreateSampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * Modify CDN Domain Config.
     * @param {ModifyCDNDomainConfigRequest} req
     * @param {function(string, ModifyCDNDomainConfigResponse):void} cb
     * @public
     */
    ModifyCDNDomainConfig(req, cb) {
        let resp = new ModifyCDNDomainConfigResponse();
        this.request("ModifyCDNDomainConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a user-defined audio and video content analysis template.

Note: Templates with IDs below 10000 are system-preset templates and cannot be deleted.
     * @param {DeleteAIAnalysisTemplateRequest} req
     * @param {function(string, DeleteAIAnalysisTemplateResponse):void} cb
     * @public
     */
    DeleteAIAnalysisTemplate(req, cb) {
        let resp = new DeleteAIAnalysisTemplateResponse();
        this.request("DeleteAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * Query the knowledge base list. Return all knowledge base information under the specified user.
     * @param {DescribeKnowledgeBasesRequest} req
     * @param {function(string, DescribeKnowledgeBasesResponse):void} cb
     * @public
     */
    DescribeKnowledgeBases(req, cb) {
        let resp = new DescribeKnowledgeBasesResponse();
        this.request("DescribeKnowledgeBases", req, resp, cb);
    }

    /**
     * Query the available timbre list under the current account. It supports filtering by optional conditions such as voice ID, kind, name, gender, age, language, tag, and scenario.

Note: Newly designed or cloned voice types cannot be queried before activation. They are activated only after the newly created voice type is used for TTS once.
     * @param {DescribeVoicesRequest} req
     * @param {function(string, DescribeVoicesResponse):void} cb
     * @public
     */
    DescribeVoices(req, cb) {
        let resp = new DescribeVoicesResponse();
        this.request("DescribeVoices", req, resp, cb);
    }

    /**
     * This API is used to query DRM key provider information.
     * @param {DescribeDrmKeyProviderInfoRequest} req
     * @param {function(string, DescribeDrmKeyProviderInfoResponse):void} cb
     * @public
     */
    DescribeDrmKeyProviderInfo(req, cb) {
        let resp = new DescribeDrmKeyProviderInfoResponse();
        this.request("DescribeDrmKeyProviderInfo", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of the [audio and video quality revival](https://www.tencentcloud.com/document/product/266/102571?from_cn_redirect=1) API uses preset templates. For details, see [Audio and Video Quality Rebirth Template](https://www.tencentcloud.com/document/product/266/102586?from_cn_redirect=1#50604b3f-0286-4a10-a3f7-18218116aff7).
This API is used to delete a video rebirth template.
     * @param {DeleteRebuildMediaTemplateRequest} req
     * @param {function(string, DeleteRebuildMediaTemplateResponse):void} cb
     * @public
     */
    DeleteRebuildMediaTemplate(req, cb) {
        let resp = new DeleteRebuildMediaTemplateResponse();
        this.request("DeleteRebuildMediaTemplate", req, resp, cb);
    }

    /**
     * Live stream clipping refers to the ability for customers to select a segment from the live stream content during live streaming (that is, before the live stream has ended), and generate a new video in HLS format in real time. Developers can share it immediately or save it for long-term preservation.

Tencent Cloud VOD supports two real-time clipping modes:
- Edit and save: Save the edited video as a standalone video with an independent FileId. This is suitable for long-term preservation of highlights.
- Editing is not solidified: The edited video is attached to the live streaming recording file and has no standalone FileId. This is suitable for scenarios where highlights are shared temporarily.

Note:
- The premise for using the live stream clipping feature is that the target live stream has the time shifting and playback (https://www.tencentcloud.com/document/product/267/32742?from_cn_redirect=1) feature enabled.
-Live streaming Instant Editing is based on the m3u8 file generated by live recording, so its minimum editing precision is one ts slice. Second-level or more precise editing precision cannot be achieved.
-Since stream disconnection may occur during live streaming, the actual video duration generated by editing may differ from the expected duration. For example, if you edit a live stream from 2018-09-20T10:30:00Z to 2018-09-20T10:40:00Z, and stream disconnection occurred during this time interval, the returned media file duration will be less than 10 minutes. In such cases, you can perceive it through the output parameter <a href="#p_segmentset">SegmentSet</a>.

### Edit solidification
Clipping persistence refers to saving an edited video as an independent video with its own FileId. Its lifecycle is not subject to any impact from the original live recorded video. Even if the original recorded video is deleted, the clipping result is not affected. You can also transcode it or publish it on WeChat for secondary processing.

For example, a complete football match live recording may produce raw video lasting for over 2 hours. For cost savings, a customer can store this video for 2 months, but can specify longer storage for highlight videos from live stream clipping. You can also perform additional on-demand operations on highlight videos separately, such as transcoding and publishing on WeChat. In this case, you can choose a live stream clipping and persistent solution.

The advantage of solidified editing is that its lifecycle is independent of the original recorded video, allowing for separate management and long-term preservation.

<font color='red'>Note:</font> If solidification is specified when editing, enable reception of editing solidification event notifications through the ModifyEventConfig API. After successful solidification, you will receive a PersistenceComplete event notification. Before receiving this event notification, you should not delete or transition the live video recording to colder storage. Otherwise, playback of the generated video may be abnormal.

### Editing is not solidified
So-called non-solidified editing means that the result of editing (m3u8 file) shares the same TS segments with the live video recording. The newly generated video is not an independent and complete video (no standalone FileId, only a playback URL), and its valid period is consistent with that of the full live recording video. Once the live recording video is deleted, the clip will also become unplayable.

Editing is not solidified. Since the clipping result is not an independent video, it is not included in video management of on-demand media assets (for example, the total number of videos in the console does not count this clip), and no video processing operation such as transcoding or publishing on WeChat can be performed against this clip separately.

The advantage of non-solidified editing is that the editing operation is relatively "lightweight" and will not generate additional storage overhead. However, its shortcoming is that the lifecycle is identical to the original recorded video, and it is unable to further transcode or perform other video processing.
     * @param {LiveRealTimeClipRequest} req
     * @param {function(string, LiveRealTimeClipResponse):void} cb
     * @public
     */
    LiveRealTimeClip(req, cb) {
        let resp = new LiveRealTimeClipResponse();
        this.request("LiveRealTimeClip", req, resp, cb);
    }

    /**
     * Modifies the storage type of media files.
When the storage type of a media file is standard storage, it can be modified to the following types:
<li>Infrequent storage</li>
<li>Archive storage</li>
<li>DEEP_ARCHIVE</li>
When the current storage type of a media file is infrequent storage, it can be modified to the following types:
<li>Standard storage</li>
<li>Archive storage</li>
<li>DEEP_ARCHIVE</li>
When the current storage type of a media file is archive storage, it can be modified to the following types:
<li>Standard storage</li>
When the current storage type of a media file is DEEP_ARCHIVE, it can be modified to the following types:
<li>Standard storage</li>
     * @param {ModifyMediaStorageClassRequest} req
     * @param {function(string, ModifyMediaStorageClassResponse):void} cb
     * @public
     */
    ModifyMediaStorageClass(req, cb) {
        let resp = new ModifyMediaStorageClassResponse();
        this.request("ModifyMediaStorageClass", req, resp, cb);
    }

    /**
     * This API is used to pull a video from the network to the VOD platform.
     * @param {PullUploadRequest} req
     * @param {function(string, PullUploadResponse):void} cb
     * @public
     */
    PullUpload(req, cb) {
        let resp = new PullUploadResponse();
        this.request("PullUpload", req, resp, cb);
    }

    /**
     * This API is used to set the default storage region. If no region is specified during file upload, files will be uploaded to the default region.
     * @param {ModifyDefaultStorageRegionRequest} req
     * @param {function(string, ModifyDefaultStorageRegionResponse):void} cb
     * @public
     */
    ModifyDefaultStorageRegion(req, cb) {
        let resp = new ModifyDefaultStorageRegionResponse();
        this.request("ModifyDefaultStorageRegion", req, resp, cb);
    }

    /**
     * This API is used to create a Token for AIGC API calls. Data sync may delay after creation. It can be queried or deleted after about 30 seconds.
     * @param {UpdateAigcApiTokenRequest} req
     * @param {function(string, UpdateAigcApiTokenResponse):void} cb
     * @public
     */
    UpdateAigcApiToken(req, cb) {
        let resp = new UpdateAigcApiTokenResponse();
        this.request("UpdateAigcApiToken", req, resp, cb);
    }

    /**
     * This API is used to query sprite sheet templates based on conditions with paging.
     * @param {DescribeImageSpriteTemplatesRequest} req
     * @param {function(string, DescribeImageSpriteTemplatesResponse):void} cb
     * @public
     */
    DescribeImageSpriteTemplates(req, cb) {
        let resp = new DescribeImageSpriteTemplatesResponse();
        this.request("DescribeImageSpriteTemplates", req, resp, cb);
    }

    /**
     * This API is used to retrieve the transcoding template detail list based on the transcoding template unique identifier. The returned results include all eligible custom templates and [system preset transcoding templates](https://www.tencentcloud.com/document/product/266/33476?from_cn_redirect=1#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF).
     * @param {DescribeTranscodeTemplatesRequest} req
     * @param {function(string, DescribeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeTranscodeTemplates(req, cb) {
        let resp = new DescribeTranscodeTemplatesResponse();
        this.request("DescribeTranscodeTemplates", req, resp, cb);
    }

    /**
     * This API is used to modify the acceleration region of a VOD domain.
1. The acceleration region can be modified only when the domain name deployment state is Online.
     * @param {ModifyVodDomainAccelerateConfigRequest} req
     * @param {function(string, ModifyVodDomainAccelerateConfigResponse):void} cb
     * @public
     */
    ModifyVodDomainAccelerateConfig(req, cb) {
        let resp = new ModifyVodDomainAccelerateConfigResponse();
        this.request("ModifyVodDomainAccelerateConfig", req, resp, cb);
    }

    /**
     * Modify the information of a custom transcoding template.
     * @param {ModifyTranscodeTemplateRequest} req
     * @param {function(string, ModifyTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyTranscodeTemplate(req, cb) {
        let resp = new ModifyTranscodeTemplateResponse();
        this.request("ModifyTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is <font color='red'>no longer maintained</font>. The new version of player signature no longer uses player configuration templates. For details, please see [Player Signature](https://www.tencentcloud.com/document/product/266/45554?from_cn_redirect=1).
This API is used to delete player configurations.  
*Note: System preset player configurations cannot be deleted.*
     * @param {DeleteSuperPlayerConfigRequest} req
     * @param {function(string, DeleteSuperPlayerConfigResponse):void} cb
     * @public
     */
    DeleteSuperPlayerConfig(req, cb) {
        let resp = new DeleteSuperPlayerConfigResponse();
        this.request("DeleteSuperPlayerConfig", req, resp, cb);
    }

    /**
     * This API is used to initiate a moderation task for on-demand audio-video media, intelligently detecting violative content in video footage, text in images, text in speech, and sound.

If event notification is used, the event notification type is [audio/video moderation completed](https://www.tencentcloud.com/document/product/266/81258?from_cn_redirect=1).
     * @param {ReviewAudioVideoRequest} req
     * @param {function(string, ReviewAudioVideoResponse):void} cb
     * @public
     */
    ReviewAudioVideo(req, cb) {
        let resp = new ReviewAudioVideoResponse();
        this.request("ReviewAudioVideo", req, resp, cb);
    }

    /**
     * This API is used to search the task flow template detail list based on the task flow template name.
     * @param {DescribeProcedureTemplatesRequest} req
     * @param {function(string, DescribeProcedureTemplatesResponse):void} cb
     * @public
     */
    DescribeProcedureTemplates(req, cb) {
        let resp = new DescribeProcedureTemplatesResponse();
        this.request("DescribeProcedureTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete a user-customized moderation template.
>Template is applicable only to the ReviewAudioVideo (https://www.tencentcloud.com/document/api/266/80283?from_cn_redirect=1) and ReviewImage (https://www.tencentcloud.com/document/api/266/73217?from_cn_redirect=1) APIs.
     * @param {DeleteReviewTemplateRequest} req
     * @param {function(string, DeleteReviewTemplateResponse):void} cb
     * @public
     */
    DeleteReviewTemplate(req, cb) {
        let resp = new DeleteReviewTemplateResponse();
        this.request("DeleteReviewTemplate", req, resp, cb);
    }

    /**
     * Modify a user-customized image sprite template.
     * @param {ModifyImageSpriteTemplateRequest} req
     * @param {function(string, ModifyImageSpriteTemplateResponse):void} cb
     * @public
     */
    ModifyImageSpriteTemplate(req, cb) {
        let resp = new ModifyImageSpriteTemplateResponse();
        this.request("ModifyImageSpriteTemplate", req, resp, cb);
    }

    /**
     * This API is used to create AIGC custom subjects (Vidu). Note that calling this API incurs fees. Refer to the billing documentation (https://www.tencentcloud.com/document/product/266/95125?from_cn_redirect=1#96b3b59a-f9e1-49e9-966a-bedb70a4bf12).
     * @param {CreateAigcSubjectRequest} req
     * @param {function(string, CreateAigcSubjectResponse):void} cb
     * @public
     */
    CreateAigcSubject(req, cb) {
        let resp = new CreateAigcSubjectResponse();
        this.request("CreateAigcSubject", req, resp, cb);
    }

    /**
     * When uploading HLS videos, this API parses the index file content and returns a list of shard files to be uploaded. The shard file path must be a relative path in the current directory or subdirectory. It cannot be a URL or an absolute path.
     * @param {ParseStreamingManifestRequest} req
     * @param {function(string, ParseStreamingManifestResponse):void} cb
     * @public
     */
    ParseStreamingManifest(req, cb) {
        let resp = new ParseStreamingManifestResponse();
        this.request("ParseStreamingManifest", req, resp, cb);
    }

    /**
     * Delete CDN Domain
     * @param {DeleteCDNDomainRequest} req
     * @param {function(string, DeleteCDNDomainResponse):void} cb
     * @public
     */
    DeleteCDNDomain(req, cb) {
        let resp = new DeleteCDNDomainResponse();
        this.request("DeleteCDNDomain", req, resp, cb);
    }

    /**
     * This API is used to initiate an audio and video quality regeneration task for on-demand audio-video media.
     * @param {EnhanceMediaQualityRequest} req
     * @param {function(string, EnhanceMediaQualityResponse):void} cb
     * @public
     */
    EnhanceMediaQuality(req, cb) {
        let resp = new EnhanceMediaQualityResponse();
        this.request("EnhanceMediaQuality", req, resp, cb);
    }

    /**
     * This API is used to create user-defined task flow templates. Template capacity limit: 50.
     * @param {CreateProcedureTemplateRequest} req
     * @param {function(string, CreateProcedureTemplateResponse):void} cb
     * @public
     */
    CreateProcedureTemplate(req, cb) {
        let resp = new CreateProcedureTemplateResponse();
        this.request("CreateProcedureTemplate", req, resp, cb);
    }

    /**
     * This API is used to retrieve the detail list of audio and video content analysis templates based on the unique identifier of an audio and video content analysis template. The returned results include all eligible user-defined audio and video content analysis templates and [system preset audio/video content analysis templates](https://www.tencentcloud.com/document/product/266/33476?from_cn_redirect=1#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.88.86.E6.9E.90.E6.A8.A1.E6.9D.BF).
     * @param {DescribeAIAnalysisTemplatesRequest} req
     * @param {function(string, DescribeAIAnalysisTemplatesResponse):void} cb
     * @public
     */
    DescribeAIAnalysisTemplates(req, cb) {
        let resp = new DescribeAIAnalysisTemplatesResponse();
        this.request("DescribeAIAnalysisTemplates", req, resp, cb);
    }

    /**
     * * Delete media and its corresponding video processing files (raw files, such as transcoded videos, sprite sheets, screenshots, WeChat video releases, etc.);
* You can separately delete the original file, transcoded video, and WeChat-published video under a specified video file ID.
* Note: After the original file is deleted, you cannot initiate any video processing operations such as transcoding or WeChat publishing.
     * @param {DeleteMediaRequest} req
     * @param {function(string, DeleteMediaResponse):void} cb
     * @public
     */
    DeleteMedia(req, cb) {
        let resp = new DeleteMediaResponse();
        this.request("DeleteMedia", req, resp, cb);
    }

    /**
     * Manipulate the carousel current playlist. Supported operations: <li> Insert: Insert a program into the current playlist.</li><li> Delete: Delete a program from the playlist.</li>
     * @param {HandleCurrentPlaylistRequest} req
     * @param {function(string, HandleCurrentPlaylistResponse):void} cb
     * @public
     */
    HandleCurrentPlaylist(req, cb) {
        let resp = new HandleCurrentPlaylistResponse();
        this.request("HandleCurrentPlaylist", req, resp, cb);
    }

    /**
     * This API is <font color='red'>no longer maintained</font>. The new version of player signature no longer uses player configuration templates. For details, please see [Player Signature](https://www.tencentcloud.com/document/product/266/45554?from_cn_redirect=1).
This API is used to create player configurations. Maximum quantity: 100.
     * @param {CreateSuperPlayerConfigRequest} req
     * @param {function(string, CreateSuperPlayerConfigResponse):void} cb
     * @public
     */
    CreateSuperPlayerConfig(req, cb) {
        let resp = new CreateSuperPlayerConfigResponse();
        this.request("CreateSuperPlayerConfig", req, resp, cb);
    }

    /**
     * Queries the destination topic for log delivery under an on-demand domain name.
     * @param {DescribeCLSPushTargetsRequest} req
     * @param {function(string, DescribeCLSPushTargetsResponse):void} cb
     * @public
     */
    DescribeCLSPushTargets(req, cb) {
        let resp = new DescribeCLSPushTargetsResponse();
        this.request("DescribeCLSPushTargets", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. Please use the new version of APIs [audio and video quality revival](https://www.tencentcloud.com/document/api/266/102571?from_cn_redirect=1).
Use a template to initiate audio and video quality revival.
     * @param {EnhanceMediaByTemplateRequest} req
     * @param {function(string, EnhanceMediaByTemplateResponse):void} cb
     * @public
     */
    EnhanceMediaByTemplate(req, cb) {
        let resp = new EnhanceMediaByTemplateResponse();
        this.request("EnhanceMediaByTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a Token for AIGC API calls. Data sync may delay after creation. It can be queried or deleted after about 30 seconds.
     * @param {CreateAigcApiTokenRequest} req
     * @param {function(string, CreateAigcApiTokenResponse):void} cb
     * @public
     */
    CreateAigcApiToken(req, cb) {
        let resp = new CreateAigcApiTokenResponse();
        this.request("CreateAigcApiToken", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of the [audio and video quality revival](https://www.tencentcloud.com/document/product/266/102571?from_cn_redirect=1) API uses preset templates. For details, see [Audio and Video Quality Rebirth Template](https://www.tencentcloud.com/document/product/266/102586?from_cn_redirect=1#50604b3f-0286-4a10-a3f7-18218116aff7).
This API is used to create an audio and video quality rebirth template.
     * @param {CreateEnhanceMediaTemplateRequest} req
     * @param {function(string, CreateEnhanceMediaTemplateResponse):void} cb
     * @public
     */
    CreateEnhanceMediaTemplate(req, cb) {
        let resp = new CreateEnhanceMediaTemplateResponse();
        this.request("CreateEnhanceMediaTemplate", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of the [audio and video quality revival](https://www.tencentcloud.com/document/product/266/102571?from_cn_redirect=1) API uses preset templates. For details, see [Audio and Video Quality Rebirth Template](https://www.tencentcloud.com/document/product/266/102586?from_cn_redirect=1#50604b3f-0286-4a10-a3f7-18218116aff7).
This API is used to create a video rebirth template.
     * @param {CreateRebuildMediaTemplateRequest} req
     * @param {function(string, CreateRebuildMediaTemplateResponse):void} cb
     * @public
     */
    CreateRebuildMediaTemplate(req, cb) {
        let resp = new CreateRebuildMediaTemplateResponse();
        this.request("CreateRebuildMediaTemplate", req, resp, cb);
    }

    /**
     * This API is used to initiate a voice cloning task to clone an exclusive voice based on reference audio. The generated voice can be used for subsequent text to speech.
     * @param {CloneVoiceSyncRequest} req
     * @param {function(string, CloneVoiceSyncResponse):void} cb
     * @public
     */
    CloneVoiceSync(req, cb) {
        let resp = new CloneVoiceSyncResponse();
        this.request("CloneVoiceSync", req, resp, cb);
    }

    /**
     * Query the carousel current playlist.
     * @param {DescribeCurrentPlaylistRequest} req
     * @param {function(string, DescribeCurrentPlaylistResponse):void} cb
     * @public
     */
    DescribeCurrentPlaylist(req, cb) {
        let resp = new DescribeCurrentPlaylistResponse();
        this.request("DescribeCurrentPlaylist", req, resp, cb);
    }

    /**
     * This API is used to query the daily playback statistics within the specified date range.
* Playback statistics from the past one year can be queried.
* The time span between the start date and end date can be up to 90 days.
Playback statistics only target VOD domains. Distribution of EdgeOne domain names is not included in playback statistics.
* Due to data delay, you are advised to query the usage data of the previous day after 12:00 noon the next day.
     * @param {DescribeDailyMediaPlayStatRequest} req
     * @param {function(string, DescribeDailyMediaPlayStatResponse):void} cb
     * @public
     */
    DescribeDailyMediaPlayStat(req, cb) {
        let resp = new DescribeDailyMediaPlayStatResponse();
        this.request("DescribeDailyMediaPlayStat", req, resp, cb);
    }

    /**
     * This API is used to create and enable AIGC quota configuration. Quota usage starts accumulating when the quota feature is enabled. Once the quota is reached, AIGC features will no longer be usable.

If the quota is deleted and re-enabled, the amount will be cleared and recalculated.

Since AGC content generation is an async task, real-time usage data cannot be obtained. Therefore, quota limits result in some errors, and full precise control over the set limit cannot be achieved.
     * @param {CreateAigcQuotaRequest} req
     * @param {function(string, CreateAigcQuotaResponse):void} cb
     * @public
     */
    CreateAigcQuota(req, cb) {
        let resp = new CreateAigcQuotaResponse();
        this.request("CreateAigcQuota", req, resp, cb);
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
     * This API is used to create a user-defined digital watermark template.
     * @param {CreateBlindWatermarkTemplateRequest} req
     * @param {function(string, CreateBlindWatermarkTemplateResponse):void} cb
     * @public
     */
    CreateBlindWatermarkTemplate(req, cb) {
        let resp = new CreateBlindWatermarkTemplateResponse();
        this.request("CreateBlindWatermarkTemplate", req, resp, cb);
    }

    /**
     * Queries the list of CLS log topics created by VOD.
     * @param {DescribeCLSTopicsRequest} req
     * @param {function(string, DescribeCLSTopicsResponse):void} cb
     * @public
     */
    DescribeCLSTopics(req, cb) {
        let resp = new DescribeCLSTopicsResponse();
        this.request("DescribeCLSTopics", req, resp, cb);
    }

    /**
     * This API is used to create a CLS log topic for VOD.
     * @param {CreateCLSTopicRequest} req
     * @param {function(string, CreateCLSTopicResponse):void} cb
     * @public
     */
    CreateCLSTopic(req, cb) {
        let resp = new CreateCLSTopicResponse();
        this.request("CreateCLSTopic", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of the moderation template supports video moderation and image moderation. For details, please see [Deleting a Moderation Template](https://www.tencentcloud.com/document/api/266/84390?from_cn_redirect=1).
Delete a user-customized audio/video moderation template.
     * @param {DeleteContentReviewTemplateRequest} req
     * @param {function(string, DeleteContentReviewTemplateResponse):void} cb
     * @public
     */
    DeleteContentReviewTemplate(req, cb) {
        let resp = new DeleteContentReviewTemplateResponse();
        this.request("DeleteContentReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used for adding domain names to VOD. A user can add up to 20 domain names. 1. After the domain name is added successfully, VOD will carry out the deployment of the domain name. It takes approximately 2 minutes for the domain name to change from the deployment status to the online status.
     * @param {CreateCDNDomainRequest} req
     * @param {function(string, CreateCDNDomainResponse):void} cb
     * @public
     */
    CreateCDNDomain(req, cb) {
        let resp = new CreateCDNDomainResponse();
        this.request("CreateCDNDomain", req, resp, cb);
    }

    /**
     * This API is used to query playback statistics of the Top 100 daily played media files.
* Playback statistics from the past one year can be queried.
* You can query by number of plays or playback traffic.
* Playback count statistics description:
1. HLS file: The number of plays is counted when an M3U8 file is accessed, but not when a TS file is accessed.
2. Other files (for example, MP4 files): If a playback request includes the range parameter and the start parameter of range is not equal to 0, the number of plays is not counted. In other cases, the number of plays is counted.
* Playback statistics only target VOD domains. Distribution through EdgeOne domain names is not included in playback statistics.
     * @param {DescribeDailyMostPlayedStatRequest} req
     * @param {function(string, DescribeDailyMostPlayedStatResponse):void} cb
     * @public
     */
    DescribeDailyMostPlayedStat(req, cb) {
        let resp = new DescribeDailyMostPlayedStatResponse();
        this.request("DescribeDailyMostPlayedStat", req, resp, cb);
    }

    /**
     * If you need source tracing for piracy, see Ghost Watermark (https://www.tencentcloud.com/document/product/266/94228?from_cn_redirect=1).
     * @param {ExtractCopyRightWatermarkRequest} req
     * @param {function(string, ExtractCopyRightWatermarkResponse):void} cb
     * @public
     */
    ExtractCopyRightWatermark(req, cb) {
        let resp = new ExtractCopyRightWatermarkResponse();
        this.request("ExtractCopyRightWatermark", req, resp, cb);
    }

    /**
     * This API is used to:
1. Query the list of all storage campuses available for on-demand activation.
2. Query the list of opened parks.
3. Query the storage campus used by default.
     * @param {DescribeStorageRegionsRequest} req
     * @param {function(string, DescribeStorageRegionsResponse):void} cb
     * @public
     */
    DescribeStorageRegions(req, cb) {
        let resp = new DescribeStorageRegionsResponse();
        this.request("DescribeStorageRegions", req, resp, cb);
    }

    /**
     * 1. Refresh a specified URL list.
2. The domain name of the URL must be registered in VOD.
3. A maximum of 20 URLs can be specified per request.
4. The default refresh quota is 100,000 URLs per day.
     * @param {RefreshUrlCacheRequest} req
     * @param {function(string, RefreshUrlCacheResponse):void} cb
     * @public
     */
    RefreshUrlCache(req, cb) {
        let resp = new RefreshUrlCacheResponse();
        this.request("RefreshUrlCache", req, resp, cb);
    }

    /**
     * Modify a just in time transcoding template.
-Note: Once a just in time transcoding template is created, modification is not recommended. If parameter modification is needed, adding a template is recommended.
     * @param {ModifyJustInTimeTranscodeTemplateRequest} req
     * @param {function(string, ModifyJustInTimeTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyJustInTimeTranscodeTemplate(req, cb) {
        let resp = new ModifyJustInTimeTranscodeTemplateResponse();
        this.request("ModifyJustInTimeTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify an audio and video quality inspection template.
     * @param {ModifyQualityInspectTemplateRequest} req
     * @param {function(string, ModifyQualityInspectTemplateResponse):void} cb
     * @public
     */
    ModifyQualityInspectTemplate(req, cb) {
        let resp = new ModifyQualityInspectTemplateResponse();
        this.request("ModifyQualityInspectTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the carousel playlist list.
     * @param {DescribeRoundPlaysRequest} req
     * @param {function(string, DescribeRoundPlaysResponse):void} cb
     * @public
     */
    DescribeRoundPlays(req, cb) {
        let resp = new DescribeRoundPlaysResponse();
        this.request("DescribeRoundPlays", req, resp, cb);
    }

    /**
     * This API is used to verify domain name resolution values.
     * @param {VerifyDomainRecordRequest} req
     * @param {function(string, VerifyDomainRecordResponse):void} cb
     * @public
     */
    VerifyDomainRecord(req, cb) {
        let resp = new VerifyDomainRecordResponse();
        this.request("VerifyDomainRecord", req, resp, cb);
    }

    /**
     * This API is used to return the daily image moderation usage information within the specified query time range.
1. Image moderation statistics data from the last 365 days can be queried.
   2. The query time span should not exceed 90 days.
3. If the query time span exceeds 1 day, the data is returned at a granularity of 1 day. Otherwise, the data is returned at a granularity of 5 minutes.
     * @param {DescribeImageReviewUsageDataRequest} req
     * @param {function(string, DescribeImageReviewUsageDataResponse):void} cb
     * @public
     */
    DescribeImageReviewUsageData(req, cb) {
        let resp = new DescribeImageReviewUsageDataResponse();
        this.request("DescribeImageReviewUsageData", req, resp, cb);
    }

    /**
     * Call this API to create a subject for a specified model.
     * @param {CreateAigcCustomElementRequest} req
     * @param {function(string, CreateAigcCustomElementResponse):void} cb
     * @public
     */
    CreateAigcCustomElement(req, cb) {
        let resp = new CreateAigcCustomElementResponse();
        this.request("CreateAigcCustomElement", req, resp, cb);
    }

    /**
     * This API is used to create a user-customized moderation template. Up to 50 templates can be created.
>Template is applicable only to the ReviewAudioVideo (https://www.tencentcloud.com/document/api/266/80283?from_cn_redirect=1) and ReviewImage (https://www.tencentcloud.com/document/api/266/73217?from_cn_redirect=1) APIs.
     * @param {CreateReviewTemplateRequest} req
     * @param {function(string, CreateReviewTemplateResponse):void} cb
     * @public
     */
    CreateReviewTemplate(req, cb) {
        let resp = new CreateReviewTemplateResponse();
        this.request("CreateReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to generate scenario-based AIGC images. <b>The API is in beta. To use it, please [contact us](https://www.tencentcloud.com/online?from_cn_redirect=1-service?from=sales_sales&source=PRESALE). API calls will incur actual fees.</b>
     * @param {CreateSceneAigcVideoTaskRequest} req
     * @param {function(string, CreateSceneAigcVideoTaskResponse):void} cb
     * @public
     */
    CreateSceneAigcVideoTask(req, cb) {
        let resp = new CreateSceneAigcVideoTaskResponse();
        this.request("CreateSceneAigcVideoTask", req, resp, cb);
    }

    /**
     * This API is used to generate scenario-based AIGC images. API calls incur actual fees. Refer to the VOD AIGC image generation billing documentation (https://www.tencentcloud.com/document/product/266/95125?from_cn_redirect=1#9c4dc6ff-4b3f-4b25-bf2d-393889dfb9ac). The feature uses pay-as-you-go settlement mode (https://www.tencentcloud.com/document/product/266/2838?from_cn_redirect=1). For daily billing customers, usage on the day is billed on the second day. For monthly settlement customers, the previous month's usage fees are billed on the 1st of the next month.
     * @param {CreateSceneAigcImageTaskRequest} req
     * @param {function(string, CreateSceneAigcImageTaskResponse):void} cb
     * @public
     */
    CreateSceneAigcImageTask(req, cb) {
        let resp = new CreateSceneAigcImageTaskResponse();
        this.request("CreateSceneAigcImageTask", req, resp, cb);
    }

    /**
     * This API is used to initiate a voice design task. It generates a custom voice based on a natural language description. You can also specify a voice profile, such as name, gender, age, language, tag, and scenario. If trial text is attached upon submission, an audio audition is generated after task completion. Voice design is an asynchronous task, and the voice ID is generated after task completion.
     * @param {DesignVoiceAsyncRequest} req
     * @param {function(string, DesignVoiceAsyncResponse):void} cb
     * @public
     */
    DesignVoiceAsync(req, cb) {
        let resp = new DesignVoiceAsyncResponse();
        this.request("DesignVoiceAsync", req, resp, cb);
    }

    /**
     * This API is used to modify domain name configuration, including hotlink protection configuration.
1. The domain name configuration can be modified only when the domain name deployment state is Online.
     * @param {ModifyVodDomainConfigRequest} req
     * @param {function(string, ModifyVodDomainConfigResponse):void} cb
     * @public
     */
    ModifyVodDomainConfig(req, cb) {
        let resp = new ModifyVodDomainConfigResponse();
        this.request("ModifyVodDomainConfig", req, resp, cb);
    }

    /**
     * * Developers call the event notification pull API. After obtaining an event, they must call this API to acknowledge that the message has been received.
* After the developer obtains the event handler, the validity time for pending confirmation is 30 seconds. If it exceeds 30 seconds, a parameter error (4000) is reported.
* For more references on reliable callback for event notification, see [Reliable Callback](https://www.tencentcloud.com/document/product/266/33779?from_cn_redirect=1#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83).
     * @param {ConfirmEventsRequest} req
     * @param {function(string, ConfirmEventsResponse):void} cb
     * @public
     */
    ConfirmEvents(req, cb) {
        let resp = new ConfirmEventsResponse();
        this.request("ConfirmEvents", req, resp, cb);
    }

    /**
     * This API is used to delete AIGC advanced custom subjects.
     * @param {DeleteAigcAdvancedCustomElementRequest} req
     * @param {function(string, DeleteAigcAdvancedCustomElementResponse):void} cb
     * @public
     */
    DeleteAigcAdvancedCustomElement(req, cb) {
        let resp = new DeleteAigcAdvancedCustomElementResponse();
        this.request("DeleteAigcAdvancedCustomElement", req, resp, cb);
    }

    /**
     * This API is <font color='red'>no longer maintained</font>. Please use the [ProcessMedia](https://www.tencentcloud.com/document/product/862/37578?from_cn_redirect=1) API of MPS and specify the video URL in the input parameter InputInfo.UrlInputInfo.Url.
     * @param {ProcessMediaByUrlRequest} req
     * @param {function(string, ProcessMediaByUrlResponse):void} cb
     * @public
     */
    ProcessMediaByUrl(req, cb) {
        let resp = new ProcessMediaByUrlResponse();
        this.request("ProcessMediaByUrl", req, resp, cb);
    }

    /**
     * Initiates a complex adaptive bitstream processing task. Features include:
1. Output HLS and DASH adaptive bitrate streams based on the designated adaptive bitrate template;
2. Content protection solutions for adaptive bitrate streams can be unencrypted, Widevine, or FairPlay.
3. Support adding opening and ending segments;
4. The output adaptive bitrate stream can contain multilingual audio streams, each language comes from a different media file;
5. The output adaptive bitrate stream can include multilingual subtitle streams.

Notes:
1. When using an opening scene, the video stream in the opening scene media needs to align with the audio stream; otherwise, the output content will have audio and video synchronization issues.
2. If the output adaptive bitrate stream needs to include the audio of the main media, the FileId of the main media needs to be specified in the AudioSet parameter.
3. To use subtitles, add them to the main media first via the ModifyMediaInfo API or the audio and video details page in the console;
4. Top speed Codec and watermark are not currently supported.
     * @param {CreateComplexAdaptiveDynamicStreamingTaskRequest} req
     * @param {function(string, CreateComplexAdaptiveDynamicStreamingTaskResponse):void} cb
     * @public
     */
    CreateComplexAdaptiveDynamicStreamingTask(req, cb) {
        let resp = new CreateComplexAdaptiveDynamicStreamingTaskResponse();
        this.request("CreateComplexAdaptiveDynamicStreamingTask", req, resp, cb);
    }

    /**
     * This API is used to generate AIGC videos. API calls incur actual fees. Refer to the VOD AIGC video generation billing documentation. The settlement mode for this feature is pay-as-you-go. For daily billing customers, usage on the day is billed on the second day. For monthly billing customers, usage fees for the previous month are billed on the 1st of the next month.
     * @param {CreateAigcVideoRedrawTaskRequest} req
     * @param {function(string, CreateAigcVideoRedrawTaskResponse):void} cb
     * @public
     */
    CreateAigcVideoRedrawTask(req, cb) {
        let resp = new CreateAigcVideoRedrawTaskResponse();
        this.request("CreateAigcVideoRedrawTask", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of moderation template supports video moderation and image moderation. For details, please see [Get Moderation Template List](https://www.tencentcloud.com/document/api/266/84389?from_cn_redirect=1).
This API is used to retrieve the list of audio/video moderation template details based on the unique identifier of an audio/video moderation template. The returned results include all eligible custom templates and system preset content review templates (https://www.tencentcloud.com/document/product/266/33476?from_cn_redirect=1#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.AE.A1.E6.A0.B8.E6.A8.A1.E6.9D.BF).
     * @param {DescribeContentReviewTemplatesRequest} req
     * @param {function(string, DescribeContentReviewTemplatesResponse):void} cb
     * @public
     */
    DescribeContentReviewTemplates(req, cb) {
        let resp = new DescribeContentReviewTemplatesResponse();
        this.request("DescribeContentReviewTemplates", req, resp, cb);
    }

    /**
     * Modify a title and trailer template.
     * @param {ModifyHeadTailTemplateRequest} req
     * @param {function(string, ModifyHeadTailTemplateResponse):void} cb
     * @public
     */
    ModifyHeadTailTemplate(req, cb) {
        let resp = new ModifyHeadTailTemplateResponse();
        this.request("ModifyHeadTailTemplate", req, resp, cb);
    }

    /**
     * This API is used for enabling/disabling the CDN acceleration domain.
     * @param {StartCDNDomainRequest} req
     * @param {function(string, StartCDNDomainResponse):void} cb
     * @public
     */
    StartCDNDomain(req, cb) {
        let resp = new StartCDNDomainResponse();
        this.request("StartCDNDomain", req, resp, cb);
    }

    /**
     * This API is used to delete a user-customized image processing template.
     * @param {DeleteImageProcessingTemplateRequest} req
     * @param {function(string, DeleteImageProcessingTemplateResponse):void} cb
     * @public
     */
    DeleteImageProcessingTemplate(req, cb) {
        let resp = new DeleteImageProcessingTemplateResponse();
        this.request("DeleteImageProcessingTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete a user-defined digital watermark template.
     * @param {DeleteBlindWatermarkTemplateRequest} req
     * @param {function(string, DeleteBlindWatermarkTemplateResponse):void} cb
     * @public
     */
    DeleteBlindWatermarkTemplate(req, cb) {
        let resp = new DeleteBlindWatermarkTemplateResponse();
        this.request("DeleteBlindWatermarkTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a title and trailer template.
-Maximum supported template quantity: 100.
     * @param {CreateHeadTailTemplateRequest} req
     * @param {function(string, CreateHeadTailTemplateResponse):void} cb
     * @public
     */
    CreateHeadTailTemplate(req, cb) {
        let resp = new CreateHeadTailTemplateResponse();
        this.request("CreateHeadTailTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify a user-defined watermark template. The watermark type cannot be modified.
     * @param {ModifyWatermarkTemplateRequest} req
     * @param {function(string, ModifyWatermarkTemplateResponse):void} cb
     * @public
     */
    ModifyWatermarkTemplate(req, cb) {
        let resp = new ModifyWatermarkTemplateResponse();
        this.request("ModifyWatermarkTemplate", req, resp, cb);
    }

    /**
     * This API is used to return the VOD storage space used within a specified time range, in bytes.
1. Storage usage data is retained for 13 months in the data system. You can only query usage data from the most recent 365 days through the API. If you need to access historical usage data beyond 365 days, contact us;
2. The query time span should not exceed 90 days.
3. The query span at a minute granularity should not exceed 7 days;
     * @param {DescribeStorageDetailsRequest} req
     * @param {function(string, DescribeStorageDetailsResponse):void} cb
     * @public
     */
    DescribeStorageDetails(req, cb) {
        let resp = new DescribeStorageDetailsResponse();
        this.request("DescribeStorageDetails", req, resp, cb);
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
     * This API is used to create a custom template for partial features of the ProcessMediaByMPS API.
When creating a template, fill in the MPS related parameters in JSON format in the MPSCreateTemplateParams parameter. For specific task parameter configuration methods, refer to the MPS task template documentation.
Currently supported MPS features for creating custom templates:
1. [Audio and video enhancement](https://www.tencentcloud.com/document/product/862/118703?from_cn_redirect=1).
2. [Media AI](https://www.tencentcloud.com/document/product/862/113756?from_cn_redirect=1)

> Template for tasks created this way:
> 1. Template management is still done in the VOD platform.
> 2. The feature is currently in beta test. If needed, you can contact us for support to get testing experience.
     * @param {CreateMPSTemplateRequest} req
     * @param {function(string, CreateMPSTemplateResponse):void} cb
     * @public
     */
    CreateMPSTemplate(req, cb) {
        let resp = new CreateMPSTemplateResponse();
        this.request("CreateMPSTemplate", req, resp, cb);
    }

    /**
     * This API is used to initiate a digital watermark extraction task for a video. The extraction result can be queried through DescribeTaskDetail.
     * @param {ExtractBlindWatermarkRequest} req
     * @param {function(string, ExtractBlindWatermarkResponse):void} cb
     * @public
     */
    ExtractBlindWatermark(req, cb) {
        let resp = new ExtractBlindWatermarkResponse();
        this.request("ExtractBlindWatermark", req, resp, cb);
    }

    /**
     * This API is used to add acceleration domain names to VOD. A user can add up to 20 acceleration domain names.
1. After the domain name is successfully added, VOD will deploy the domain name. It takes about 2 minutes for the domain name to change from deployment status to online status.
     * @param {CreateVodDomainRequest} req
     * @param {function(string, CreateVodDomainResponse):void} cb
     * @public
     */
    CreateVodDomain(req, cb) {
        let resp = new CreateVodDomainResponse();
        this.request("CreateVodDomain", req, resp, cb);
    }

    /**
     * This API is used to create a user-customized image sprite template. Maximum number: 16.
     * @param {CreateImageSpriteTemplateRequest} req
     * @param {function(string, CreateImageSpriteTemplateResponse):void} cb
     * @public
     */
    CreateImageSpriteTemplate(req, cb) {
        let resp = new CreateImageSpriteTemplateResponse();
        this.request("CreateImageSpriteTemplate", req, resp, cb);
    }

    /**
     * This API is used to query material sample information by material ID, name, or tag with pagination.
     * @param {DescribePersonSamplesRequest} req
     * @param {function(string, DescribePersonSamplesResponse):void} cb
     * @public
     */
    DescribePersonSamples(req, cb) {
        let resp = new DescribePersonSamplesResponse();
        this.request("DescribePersonSamples", req, resp, cb);
    }

    /**
     * This API is used to generate AIGC videos. The default limit is 1 concurrent processing. API calls incur actual fees. Refer to the VOD AIGC video generation billing documentation. The feature uses postpaid settlement mode. Daily billing customers are billed on the second day after usage. Monthly settlement customers are billed on the 1st of the next month for the previous month's usage fees.
     * @param {CreateAigcVideoTaskRequest} req
     * @param {function(string, CreateAigcVideoTaskResponse):void} cb
     * @public
     */
    CreateAigcVideoTask(req, cb) {
        let resp = new CreateAigcVideoTaskResponse();
        this.request("CreateAigcVideoTask", req, resp, cb);
    }

    /**
     * This API is used to delete a user-defined audio and video content recognition template.
     * @param {DeleteAIRecognitionTemplateRequest} req
     * @param {function(string, DeleteAIRecognitionTemplateResponse):void} cb
     * @public
     */
    DeleteAIRecognitionTemplate(req, cb) {
        let resp = new DeleteAIRecognitionTemplateResponse();
        this.request("DeleteAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a VOD application.
     * @param {CreateSubAppIdRequest} req
     * @param {function(string, CreateSubAppIdResponse):void} cb
     * @public
     */
    CreateSubAppId(req, cb) {
        let resp = new CreateSubAppIdResponse();
        this.request("CreateSubAppId", req, resp, cb);
    }

    /**
     * This API is used to modify material sample information based on the material ID, including modification of the name and description, as well as addition, deletion, and reset of facial features and tags. Ensure at least 1 image remains after facial feature deletion. Otherwise, use the reset operation.
     * @param {ModifyPersonSampleRequest} req
     * @param {function(string, ModifyPersonSampleResponse):void} cb
     * @public
     */
    ModifyPersonSample(req, cb) {
        let resp = new ModifyPersonSampleResponse();
        this.request("ModifyPersonSample", req, resp, cb);
    }

    /**
     * Queries the list of rotating image templates based on conditions with paging.
     * @param {DescribeAnimatedGraphicsTemplatesRequest} req
     * @param {function(string, DescribeAnimatedGraphicsTemplatesResponse):void} cb
     * @public
     */
    DescribeAnimatedGraphicsTemplates(req, cb) {
        let resp = new DescribeAnimatedGraphicsTemplatesResponse();
        this.request("DescribeAnimatedGraphicsTemplates", req, resp, cb);
    }

    /**
     * * After media blocking, except for VOD console preview, accessing URLs of various video resources (original files, transcoding output files, screenshots, etc.) for other scenarios will return 403.
It takes about 5 to 10 minutes for the block or unblock operation to take effect across the entire network.
* Note: Media blocking can only be performed on media stored in standard storage and infrequent storage. Media stored in infrequent storage must be stored for at least 30 days. If it is deleted early or its storage class is changed, it will still be billed for 30 days. If media stored in infrequent storage is blocked and its infrequent storage duration is less than 30 days, early deletion billing will occur. In addition, after blocking, the infrequent storage duration of the media will restart from the current time. If the media is deleted or its storage class is changed before reaching 30 days, early deletion billing will also occur. For example, media 001 has been stored in infrequent storage for 10 days. If 001 is blocked at this point, infrequent storage billing is still calculated based on 30 days (early deletion billing duration: 30 - 10 = 20 days). After blocking, the infrequent storage duration of 001 restarts. If 001 is deleted on the 5th day after blocking, infrequent storage billing is also calculated based on 30 days (early deletion billing duration: 30 - 5 = 25 days). The actual infrequent storage duration of 001 is 10 + 5 = 15 days, while the infrequent storage billing duration is 10 + 20 (early deletion billing) + 5 + 25 (early deletion billing) = 60 days.
     * @param {ForbidMediaDistributionRequest} req
     * @param {function(string, ForbidMediaDistributionResponse):void} cb
     * @public
     */
    ForbidMediaDistribution(req, cb) {
        let resp = new ForbidMediaDistributionResponse();
        this.request("ForbidMediaDistribution", req, resp, cb);
    }

    /**
     * This API is used to query AIGC quota configurations.
     * @param {DescribeAigcQuotasRequest} req
     * @param {function(string, DescribeAigcQuotasResponse):void} cb
     * @public
     */
    DescribeAigcQuotas(req, cb) {
        let resp = new DescribeAigcQuotasResponse();
        this.request("DescribeAigcQuotas", req, resp, cb);
    }

    /**
     * Used to import AI analysis results into the knowledge base.
     * @param {ImportMediaKnowledgeRequest} req
     * @param {function(string, ImportMediaKnowledgeResponse):void} cb
     * @public
     */
    ImportMediaKnowledge(req, cb) {
        let resp = new ImportMediaKnowledgeResponse();
        this.request("ImportMediaKnowledge", req, resp, cb);
    }

    /**
     * Manage initiated tasks.
     * @param {ManageTaskRequest} req
     * @param {function(string, ManageTaskResponse):void} cb
     * @public
     */
    ManageTask(req, cb) {
        let resp = new ManageTaskResponse();
        this.request("ManageTask", req, resp, cb);
    }

    /**
     * This API is used to modify a user-defined audio and video content analysis template.

Note: Templates with IDs below 10000 are system-preset templates and cannot be modified.
     * @param {ModifyAIAnalysisTemplateRequest} req
     * @param {function(string, ModifyAIAnalysisTemplateResponse):void} cb
     * @public
     */
    ModifyAIAnalysisTemplate(req, cb) {
        let resp = new ModifyAIAnalysisTemplateResponse();
        this.request("ModifyAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * This API is used to create AIGC custom voice types. Note that calling this API incurs custom voice type creation fees. Refer to the billing documentation (https://www.tencentcloud.com/document/product/266/95125?from_cn_redirect=1#5e5217e8-29fc-467e-ac2d-853648f988b7).
     * @param {CreateAigcCustomVoiceRequest} req
     * @param {function(string, CreateAigcCustomVoiceResponse):void} cb
     * @public
     */
    CreateAigcCustomVoice(req, cb) {
        let resp = new CreateAigcCustomVoiceResponse();
        this.request("CreateAigcCustomVoice", req, resp, cb);
    }

    /**
     * Modify a user-customized specified time point screenshot template.
     * @param {ModifySnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, ModifySnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    ModifySnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new ModifySnapshotByTimeOffsetTemplateResponse();
        this.request("ModifySnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * This API is <font color='red'>no longer maintained</font>. The new version of player signature no longer uses player configuration templates. For details, please see [Player Signature](https://www.tencentcloud.com/document/product/266/45554?from_cn_redirect=1).
This API is used to modify player configuration.
     * @param {ModifySuperPlayerConfigRequest} req
     * @param {function(string, ModifySuperPlayerConfigResponse):void} cb
     * @public
     */
    ModifySuperPlayerConfig(req, cb) {
        let resp = new ModifySuperPlayerConfigResponse();
        this.request("ModifySuperPlayerConfig", req, resp, cb);
    }

    /**
     * * Used to categorize and manage media;
* This API does not affect the existing media categories. To modify media categories, call the [ModifyMediaInfo](https://www.tencentcloud.com/document/product/266/31762?from_cn_redirect=1) API.
* The classification hierarchy cannot exceed 4 levels.
The number of subcategories in each category cannot exceed 500.
     * @param {CreateClassRequest} req
     * @param {function(string, CreateClassResponse):void} cb
     * @public
     */
    CreateClass(req, cb) {
        let resp = new CreateClassResponse();
        this.request("CreateClass", req, resp, cb);
    }

    /**
     * Query the list of AIGC API tokens. Data sync may delay after creation or deletion. You can query the latest data after about 30 seconds.
     * @param {DescribeAigcApiTokensRequest} req
     * @param {function(string, DescribeAigcApiTokensResponse):void} cb
     * @public
     */
    DescribeAigcApiTokens(req, cb) {
        let resp = new DescribeAigcApiTokensResponse();
        this.request("DescribeAigcApiTokens", req, resp, cb);
    }

    /**
     * Quickly splice and edit HLS videos in VOD to generate new media in HLS format.

Quickly splice or edit the generated video to create a new FileId and solidify it. After successful solidification, the new video file exists independently of the original input video and is not affected by deletion of the original video.

<font color='red'>Note:</font> Enable reception of editing solidification event notifications through the ModifyEventConfig API. After successful solidification, you will receive a PersistenceComplete event notification. Before receiving this event notification, you should not delete or transition the original input video to colder storage. Otherwise, playback of the video generated by splicing and clipping may be abnormal.
     * @param {FastEditMediaRequest} req
     * @param {function(string, FastEditMediaResponse):void} cb
     * @public
     */
    FastEditMedia(req, cb) {
        let resp = new FastEditMediaResponse();
        this.request("FastEditMedia", req, resp, cb);
    }

    /**
     * This API is used to create keyword samples in batches. Samples are used for video processing such as inappropriate content recognition and content recognition through OCR and ASR technologies.
     * @param {CreateWordSamplesRequest} req
     * @param {function(string, CreateWordSamplesResponse):void} cb
     * @public
     */
    CreateWordSamples(req, cb) {
        let resp = new CreateWordSamplesResponse();
        this.request("CreateWordSamples", req, resp, cb);
    }

    /**
     * Tencent Cloud Video on Demand (VOD) provides customers with media upload, media management, media processing, and other services. During or after the execution of these services, VOD also provides various event notifications, helping developers detect service processing status and perform next business operations.

Developers can use this API to query the current configuration of event notification receiving methods, recipient addresses, and which events have callback notifications enabled.

Default API request rate limit: 100 requests/second.
     * @param {DescribeEventConfigRequest} req
     * @param {function(string, DescribeEventConfigResponse):void} cb
     * @public
     */
    DescribeEventConfig(req, cb) {
        let resp = new DescribeEventConfigResponse();
        this.request("DescribeEventConfig", req, resp, cb);
    }

    /**
     * This API is used to retrieve AIGC face information. Note that calling this API will incur face recognition fees. Refer to the billing documentation (https://www.tencentcloud.com/document/product/266/95125?from_cn_redirect=1#96b3b59a-f9e1-49e9-966a-bedb70a4bf12).
     * @param {DescribeAigcFaceInfoRequest} req
     * @param {function(string, DescribeAigcFaceInfoResponse):void} cb
     * @public
     */
    DescribeAigcFaceInfo(req, cb) {
        let resp = new DescribeAigcFaceInfoResponse();
        this.request("DescribeAigcFaceInfo", req, resp, cb);
    }

    /**
     * 1. Preheat the specified URL list.
2. The domain name of the URL must be registered in VOD.
3. Specify up to 20 URLs per request.
4. The default prefetch quota is 10,000 URLs per day.
     * @param {PushUrlCacheRequest} req
     * @param {function(string, PushUrlCacheResponse):void} cb
     * @public
     */
    PushUrlCache(req, cb) {
        let resp = new PushUrlCacheResponse();
        this.request("PushUrlCache", req, resp, cb);
    }

    /**
     * This API is used to modify a carousel playlist.
After modification, only new playback requests will take effect. Users already playing can still play the previous playlist within 7 days.
     * @param {ModifyRoundPlayRequest} req
     * @param {function(string, ModifyRoundPlayResponse):void} cb
     * @public
     */
    ModifyRoundPlay(req, cb) {
        let resp = new ModifyRoundPlayResponse();
        this.request("ModifyRoundPlay", req, resp, cb);
    }

    /**
     * This API is used to compose media files to achieve the following effects:

1. **Image rotation**: Rotate the image of a video or picture by a certain degree, or flip it in a certain direction.
2. **Audio control**: Increase or reduce the volume of video and audio, or mute the video.
3. **Screen overlay**: Overlay frames from videos and images in sequence, for example, to achieve a Picture-in-Picture effect.
4. **Audio mixing**: Mix the sound in video and audio together.
5. **Audio extraction**: Extract the audio from the video (the visual is not retained).
6. **Crop**: Crop a specified time period from a video or audio.
7. **Splicing**: Splice videos, audio, and images in chronological order.
8. **Transitions**: When stitching multiple videos or images, you can add transition effects between paragraphs.

The muxing format of the synthesized media can be MP4 (video) or MP3 (audio). If event notification is used, its type is [Video synthesis completed](https://www.tencentcloud.com/document/product/266/43000?from_cn_redirect=1).
     * @param {ComposeMediaRequest} req
     * @param {function(string, ComposeMediaResponse):void} cb
     * @public
     */
    ComposeMedia(req, cb) {
        let resp = new ComposeMediaResponse();
        this.request("ComposeMedia", req, resp, cb);
    }

    /**
     * Describe CDN Domains
     * @param {DescribeCDNDomainsRequest} req
     * @param {function(string, DescribeCDNDomainsResponse):void} cb
     * @public
     */
    DescribeCDNDomains(req, cb) {
        let resp = new DescribeCDNDomainsResponse();
        this.request("DescribeCDNDomains", req, resp, cb);
    }

    /**
     * This API is used to modify the application scenario and tags of a keyword. The keyword itself cannot be modified. If modification is needed, delete and rebuild it.
     * @param {ModifyWordSampleRequest} req
     * @param {function(string, ModifyWordSampleResponse):void} cb
     * @public
     */
    ModifyWordSample(req, cb) {
        let resp = new ModifyWordSampleResponse();
        this.request("ModifyWordSample", req, resp, cb);
    }

    /**
     * This API is no longer maintained. The new version of the [audio and video quality revival](https://www.tencentcloud.com/document/product/266/102571?from_cn_redirect=1) API uses preset templates. For details, see [Audio and Video Quality Rebirth Template](https://www.tencentcloud.com/document/product/266/102586?from_cn_redirect=1#50604b3f-0286-4a10-a3f7-18218116aff7).
Modify an audio and video quality rebirth template.
     * @param {ModifyEnhanceMediaTemplateRequest} req
     * @param {function(string, ModifyEnhanceMediaTemplateResponse):void} cb
     * @public
     */
    ModifyEnhanceMediaTemplate(req, cb) {
        let resp = new ModifyEnhanceMediaTemplateResponse();
        this.request("ModifyEnhanceMediaTemplate", req, resp, cb);
    }

    /**
     * This API is used to create advanced custom AIGC subjects.
     * @param {CreateAigcAdvancedCustomElementRequest} req
     * @param {function(string, CreateAigcAdvancedCustomElementResponse):void} cb
     * @public
     */
    CreateAigcAdvancedCustomElement(req, cb) {
        let resp = new CreateAigcAdvancedCustomElementResponse();
        this.request("CreateAigcAdvancedCustomElement", req, resp, cb);
    }

    /**
     * * Obtain all classification information of the user.
     * @param {DescribeAllClassRequest} req
     * @param {function(string, DescribeAllClassResponse):void} cb
     * @public
     */
    DescribeAllClass(req, cb) {
        let resp = new DescribeAllClassResponse();
        this.request("DescribeAllClass", req, resp, cb);
    }

    /**
     * This API is used to query user-defined watermark templates, and paging query is supported based on conditions.
     * @param {DescribeWatermarkTemplatesRequest} req
     * @param {function(string, DescribeWatermarkTemplatesResponse):void} cb
     * @public
     */
    DescribeWatermarkTemplates(req, cb) {
        let resp = new DescribeWatermarkTemplatesResponse();
        this.request("DescribeWatermarkTemplates", req, resp, cb);
    }

    /**
     * This API is used to create a user-defined watermark template with an upper limit of 1000.
     * @param {CreateWatermarkTemplateRequest} req
     * @param {function(string, CreateWatermarkTemplateResponse):void} cb
     * @public
     */
    CreateWatermarkTemplate(req, cb) {
        let resp = new CreateWatermarkTemplateResponse();
        this.request("CreateWatermarkTemplate", req, resp, cb);
    }

    /**
     * Sets DRM key provider information.
     * @param {SetDrmKeyProviderInfoRequest} req
     * @param {function(string, SetDrmKeyProviderInfoResponse):void} cb
     * @public
     */
    SetDrmKeyProviderInfo(req, cb) {
        let resp = new SetDrmKeyProviderInfoResponse();
        this.request("SetDrmKeyProviderInfo", req, resp, cb);
    }

    /**
     * Queries the list of instant transcoding templates.
     * @param {DescribeJustInTimeTranscodeTemplatesRequest} req
     * @param {function(string, DescribeJustInTimeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeJustInTimeTranscodeTemplates(req, cb) {
        let resp = new DescribeJustInTimeTranscodeTemplatesResponse();
        this.request("DescribeJustInTimeTranscodeTemplates", req, resp, cb);
    }

    /**
     * This API is used to create AI audio generation tasks.
     * @param {CreateAigcAudioTaskRequest} req
     * @param {function(string, CreateAigcAudioTaskResponse):void} cb
     * @public
     */
    CreateAigcAudioTask(req, cb) {
        let resp = new CreateAigcAudioTaskResponse();
        this.request("CreateAigcAudioTask", req, resp, cb);
    }

    /**
     * Delete an AIGC API Token. The AIGC quota associated with the Token will also be deleted.
     * @param {DeleteAigcApiTokenRequest} req
     * @param {function(string, DeleteAigcApiTokenResponse):void} cb
     * @public
     */
    DeleteAigcApiToken(req, cb) {
        let resp = new DeleteAigcApiTokenResponse();
        this.request("DeleteAigcApiToken", req, resp, cb);
    }

    /**
     * This API is used to get the list of details of audio/video content recognition templates by unique identifier. The returned results include all eligible user-defined audio/video content recognition templates and system preset audio/video content recognition templates (https://www.tencentcloud.com/document/product/266/33476?from_cn_redirect=1#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E8.AF.86.E5.88.AB.E6.A8.A1.E6.9D.BF).
     * @param {DescribeAIRecognitionTemplatesRequest} req
     * @param {function(string, DescribeAIRecognitionTemplatesResponse):void} cb
     * @public
     */
    DescribeAIRecognitionTemplates(req, cb) {
        let resp = new DescribeAIRecognitionTemplatesResponse();
        this.request("DescribeAIRecognitionTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete an audio-visual quality inspection template.
     * @param {DeleteQualityInspectTemplateRequest} req
     * @param {function(string, DeleteQualityInspectTemplateResponse):void} cb
     * @public
     */
    DeleteQualityInspectTemplate(req, cb) {
        let resp = new DeleteQualityInspectTemplateResponse();
        this.request("DeleteQualityInspectTemplate", req, resp, cb);
    }

    /**
     * Queries user-customized digital watermark templates.
     * @param {DescribeBlindWatermarkTemplatesRequest} req
     * @param {function(string, DescribeBlindWatermarkTemplatesResponse):void} cb
     * @public
     */
    DescribeBlindWatermarkTemplates(req, cb) {
        let resp = new DescribeBlindWatermarkTemplatesResponse();
        this.request("DescribeBlindWatermarkTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the audio and video quality detection template list.
     * @param {DescribeQualityInspectTemplatesRequest} req
     * @param {function(string, DescribeQualityInspectTemplatesResponse):void} cb
     * @public
     */
    DescribeQualityInspectTemplates(req, cb) {
        let resp = new DescribeQualityInspectTemplatesResponse();
        this.request("DescribeQualityInspectTemplates", req, resp, cb);
    }

    /**
     * This API is used to asynchronously fetch AIGC face information. Note that calling this API will incur face recognition fees. Refer to the [billing documentation](https://www.tencentcloud.com/document/product/266/95125?from_cn_redirect=1#96b3b59a-f9e1-49e9-966a-bedb70a4bf12).
     * @param {DescribeAigcFaceInfoAsyncRequest} req
     * @param {function(string, DescribeAigcFaceInfoAsyncResponse):void} cb
     * @public
     */
    DescribeAigcFaceInfoAsync(req, cb) {
        let resp = new DescribeAigcFaceInfoAsyncResponse();
        this.request("DescribeAigcFaceInfoAsync", req, resp, cb);
    }

    /**
     * This API is used to modify a knowledge base. The name and/or description of the knowledge base can be modified. At least one of the Name or Description fields is required.
     * @param {ModifyKnowledgeBaseRequest} req
     * @param {function(string, ModifyKnowledgeBaseResponse):void} cb
     * @public
     */
    ModifyKnowledgeBase(req, cb) {
        let resp = new ModifyKnowledgeBaseResponse();
        this.request("ModifyKnowledgeBase", req, resp, cb);
    }

    /**
     * This API is used to create a just in time transcoding template.
     * @param {CreateJustInTimeTranscodeTemplateRequest} req
     * @param {function(string, CreateJustInTimeTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateJustInTimeTranscodeTemplate(req, cb) {
        let resp = new CreateJustInTimeTranscodeTemplateResponse();
        this.request("CreateJustInTimeTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is <font color='red'>no longer maintained</font>. The new version of player signature no longer uses player configuration templates. For details, please see [Player Signature](https://www.tencentcloud.com/document/product/266/45554?from_cn_redirect=1).
Queries player configurations and supports paging query based on conditions.
     * @param {DescribeSuperPlayerConfigsRequest} req
     * @param {function(string, DescribeSuperPlayerConfigsResponse):void} cb
     * @public
     */
    DescribeSuperPlayerConfigs(req, cb) {
        let resp = new DescribeSuperPlayerConfigsResponse();
        this.request("DescribeSuperPlayerConfigs", req, resp, cb);
    }

    /**
     * This API is used to get the application list of the current account.
     * @param {DescribeSubAppIdsRequest} req
     * @param {function(string, DescribeSubAppIdsResponse):void} cb
     * @public
     */
    DescribeSubAppIds(req, cb) {
        let resp = new DescribeSubAppIdsResponse();
        this.request("DescribeSubAppIds", req, resp, cb);
    }

    /**
     * This API is used to delete a user-customized image asynchronous processing template.

Note: Templates with IDs below 10000 are system-preset templates and cannot be deleted.
     * @param {DeleteProcessImageAsyncTemplateRequest} req
     * @param {function(string, DeleteProcessImageAsyncTemplateResponse):void} cb
     * @public
     */
    DeleteProcessImageAsyncTemplate(req, cb) {
        let resp = new DeleteProcessImageAsyncTemplateResponse();
        this.request("DeleteProcessImageAsyncTemplate", req, resp, cb);
    }

    /**
     * This API is used to get the list of title and trailer templates.
     * @param {DescribeHeadTailTemplatesRequest} req
     * @param {function(string, DescribeHeadTailTemplatesResponse):void} cb
     * @public
     */
    DescribeHeadTailTemplates(req, cb) {
        let resp = new DescribeHeadTailTemplatesResponse();
        this.request("DescribeHeadTailTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the default distribution configuration.
* Distribution domain name and distribution protocol, i.e., the domain name and protocol in the media file distribution URL. Media files are distributed based on the default distribution configuration.
Playback key, used to calculate player signature.
     * @param {DescribeDefaultDistributionConfigRequest} req
     * @param {function(string, DescribeDefaultDistributionConfigResponse):void} cb
     * @public
     */
    DescribeDefaultDistributionConfig(req, cb) {
        let resp = new DescribeDefaultDistributionConfigResponse();
        this.request("DescribeDefaultDistributionConfig", req, resp, cb);
    }

    /**
     * This API is used to update the profile of a voice by voice ID, including its name, description, gender, age, language, tags, and scenarios, and returns the complete voice information after the update. Only voices under this account can be updated. System preset voices do not support update.

Note: Newly designed or cloned voice types cannot be updated before activation. They are activated only after the newly created voice type is used for TTS once.
     * @param {UpdateVoiceRequest} req
     * @param {function(string, UpdateVoiceResponse):void} cb
     * @public
     */
    UpdateVoice(req, cb) {
        let resp = new UpdateVoiceResponse();
        this.request("UpdateVoice", req, resp, cb);
    }

    /**
     * This API is used to delete a user-defined MPS task template.
     * @param {DeleteMPSTemplateRequest} req
     * @param {function(string, DeleteMPSTemplateResponse):void} cb
     * @public
     */
    DeleteMPSTemplate(req, cb) {
        let resp = new DeleteMPSTemplateResponse();
        this.request("DeleteMPSTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the moderation template list.
>Template is applicable only to the [audio/video moderation (ReviewAudioVideo)](https://www.tencentcloud.com/document/api/266/80283?from_cn_redirect=1) and [image moderation (ReviewImage)](https://www.tencentcloud.com/document/api/266/73217?from_cn_redirect=1) APIs.
     * @param {DescribeReviewTemplatesRequest} req
     * @param {function(string, DescribeReviewTemplatesResponse):void} cb
     * @public
     */
    DescribeReviewTemplates(req, cb) {
        let resp = new DescribeReviewTemplatesResponse();
        this.request("DescribeReviewTemplates", req, resp, cb);
    }

    /**
     * This API is used to confirm the result of uploading media files and cover files to Tencent Cloud VOD, store media information, and return the playback addresses and file IDs.
     * @param {CommitUploadRequest} req
     * @param {function(string, CommitUploadResponse):void} cb
     * @public
     */
    CommitUpload(req, cb) {
        let resp = new CommitUploadResponse();
        this.request("CommitUpload", req, resp, cb);
    }

    /**
     * Initiate a speech synthesis task to convert text into speech.
     * @param {TextToSpeechSyncRequest} req
     * @param {function(string, TextToSpeechSyncResponse):void} cb
     * @public
     */
    TextToSpeechSync(req, cb) {
        let resp = new TextToSpeechSyncResponse();
        this.request("TextToSpeechSync", req, resp, cb);
    }

    /**
     * If the storage type of a media file is archive storage or deep archive storage, it is inaccessible. If you need access, call this API to unfreeze it. After unfreezing, the accessible media file is temporary and becomes inaccessible after the validity period expires.
     * @param {RestoreMediaRequest} req
     * @param {function(string, RestoreMediaResponse):void} cb
     * @public
     */
    RestoreMedia(req, cb) {
        let resp = new RestoreMediaResponse();
        this.request("RestoreMedia", req, resp, cb);
    }

    /**
     * This API is used to modify a user-defined audio and video content recognition template.
     * @param {ModifyAIRecognitionTemplateRequest} req
     * @param {function(string, ModifyAIRecognitionTemplateResponse):void} cb
     * @public
     */
    ModifyAIRecognitionTemplate(req, cb) {
        let resp = new ModifyAIRecognitionTemplateResponse();
        this.request("ModifyAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * Modifying an Adaptive Bitrate Streaming Template
     * @param {ModifyAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, ModifyAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    ModifyAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new ModifyAdaptiveDynamicStreamingTemplateResponse();
        this.request("ModifyAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }

    /**
     * This API is used to search media information with multiple filter criteria, sort and filter returned results, and other features. This includes:
-Specify the file ID collection FileIds to return media matching any ID in the collection.
-Perform fuzzy search by multiple media file names (Names) or descriptions (Descriptions).
-Search by multiple filename prefixes NamePrefixes.
- Specify the category collection ClassIds (see input parameter), and media that meet any category in the collection will be returned. For example, media categories include movies, TV series, and variety shows. The movie category has subcategories such as historical films, action films, and romance films. If ClassIds specifies movies and TV series, all subcategories under movies and TV series will be returned. If ClassIds specifies historical films and action films, only media under these two subcategories will be returned.
- Specify tag collection Tags (see input parameters) to return media that match any tag in the collection. For example, if media tags include ACG, palace intrigue, and parody remix, and Tags specifies ACG and parody remix, any media that meets either of these two tags will be retrieved.
-Specified file type collection Categories (see input parameter). Returns media that meet any type in the collection. For example, file types include Video, Audio, and Image. If Categories specifies Video and Audio, media that meet these types will be retrieved.
-Specify the source collection SourceTypes (see input parameters) to return media that meets any source in the collection. For example, media sources include Record (live recording), Upload, and so on. If SourceTypes specifies Record and Upload, media that meets these sources will be retrieved.
-Specify the file packaging format set MediaTypes (see input parameters), and return media that meets any packaging format in the collection. For example, packaging formats include MP4, AVI, MP3, and so on. If MediaTypes specifies MP4 and MP3, then media that complies with these packaging formats will be retrieved.
-Specify the file status collection Status (see input parameters) to return media that meet any status in the collection. For example, file statuses include Normal, SystemForbidden (Platform Ban), and Forbidden (proactive ban). If Status specifies Normal and Forbidden, media that meet these statuses will be retrieved.
-Specify the file review result set ReviewResults (see input parameters) to return media that meets any status in the collection. For example, file review results include pass and block. If ReviewResults specifies both pass and block, media that complies with these review results will be retrieved.
-Filter the media of live recording service by specifying the collection of live streaming codes StreamIds (see input parameter).
-Filter media by the create time range of the specified media.
-Specify a TRTC application ID collection to filter media.
-Specify a TRTC room ID collection to filter media.

- The above parameters can be combined in any way for retrieval. For example: filter media with a creation time between 2018-12-01 12:00:00 and 2018-12-08 12:00:00, categorized as movie or TV series, and tagged with palace intrigue and suspense. Note that for any parameter that supports array input, the search logic between its elements is "OR". The logical relationship between all parameters is "AND".

-Allow passage of Filters to control the type of media information returned (default return all information). Selectable inputs include:
1. Basic information (basicInfo): including media name, category, playback address, cover image, etc.
2. Meta information (metaData): including size, duration, video stream information, and audio stream information.
3. transcodeInfo: includes media addresses, video stream parameters, and audio stream parameters of various specifications generated for the transcoded media.
4. animatedGraphicsInfo: The animated graphics info after converting a video to gif (for example, gif).
5. sampleSnapshotInfo: screenshot information after sampling screenshots from the video.
6. Sprite image information (imageSpriteInfo): sprite image information after capturing sprite images from a video.
7. snapshotByTimeOffsetInfo: screenshot information after taking screenshots of a video at specified time points.
8. Video timestamp information (keyFrameDescInfo): Dotting information set for the video.
9. Adaptive Bitrate Streaming information (adaptiveDynamicStreamingInfo): information including specification, encryption type, and packaging format.

-Permission to sort results by creation time and return in pages. Use Offset and Limit (see input parameters) to control pagination.

<div id="maxResultsDesc">API return result count limit:</div>

-<b><a href="#p_offset">Offset</a> and <a href="#p_limit">Limit</a> impact the number of results per pagination query. Special attention: when both are omitted, this interface returns up to 10 query results by default.</b>
-<b>Supports returning up to 5,000 search results. Results beyond this limit can no longer be queried. If the search result volume is too large, recommend using more granular criteria to reduce the search results.</b>

<br>Conditional filtering not recommended:
- (Not recommended: use Names, NamePrefixes, or Descriptions instead) Specify single text Text for fuzzy search on media file name or description.
-(Not recommended: use SourceTypes instead) Specify a single media file source SourceType for search.
-(Not recommended: Use StreamIds instead) Specify a single push stream live code StreamId to search.
-(Not recommended: use CreateTime as an alternative) Specify a single starting creation time StartTime to search.
-(Not recommended: use CreateTime instead) Specify a single end time EndTime to search.
     * @param {SearchMediaRequest} req
     * @param {function(string, SearchMediaResponse):void} cb
     * @public
     */
    SearchMedia(req, cb) {
        let resp = new SearchMediaResponse();
        this.request("SearchMedia", req, resp, cb);
    }

    /**
     * This API is used to delete a user-customized watermark template.
     * @param {DeleteWatermarkTemplateRequest} req
     * @param {function(string, DeleteWatermarkTemplateResponse):void} cb
     * @public
     */
    DeleteWatermarkTemplate(req, cb) {
        let resp = new DeleteWatermarkTemplateResponse();
        this.request("DeleteWatermarkTemplate", req, resp, cb);
    }

    /**
     * Delete a just in time transcoding template.
     * @param {DeleteJustInTimeTranscodeTemplateRequest} req
     * @param {function(string, DeleteJustInTimeTranscodeTemplateResponse):void} cb
     * @public
     */
    DeleteJustInTimeTranscodeTemplate(req, cb) {
        let resp = new DeleteJustInTimeTranscodeTemplateResponse();
        this.request("DeleteJustInTimeTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to delete material samples based on person ID.
     * @param {DeletePersonSampleRequest} req
     * @param {function(string, DeletePersonSampleResponse):void} cb
     * @public
     */
    DeletePersonSample(req, cb) {
        let resp = new DeletePersonSampleResponse();
        this.request("DeletePersonSample", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of the [audio and video quality revival](https://www.tencentcloud.com/document/product/266/102571?from_cn_redirect=1) API uses preset templates. For details, see [Audio and Video Quality Rebirth Template](https://www.tencentcloud.com/document/product/266/102586?from_cn_redirect=1#50604b3f-0286-4a10-a3f7-18218116aff7).
This API is used to retrieve the audio and video quality regeneration template list.
     * @param {DescribeEnhanceMediaTemplatesRequest} req
     * @param {function(string, DescribeEnhanceMediaTemplatesResponse):void} cb
     * @public
     */
    DescribeEnhanceMediaTemplates(req, cb) {
        let resp = new DescribeEnhanceMediaTemplatesResponse();
        this.request("DescribeEnhanceMediaTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete a user-defined specified time point screenshot template.
     * @param {DeleteSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, DeleteSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    DeleteSnapshotByTimeOffsetTemplate(req, cb) {
        let resp = new DeleteSnapshotByTimeOffsetTemplateResponse();
        this.request("DeleteSnapshotByTimeOffsetTemplate", req, resp, cb);
    }

    /**
     * Modify a custom animated image generating template.
     * @param {ModifyAnimatedGraphicsTemplateRequest} req
     * @param {function(string, ModifyAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    ModifyAnimatedGraphicsTemplate(req, cb) {
        let resp = new ModifyAnimatedGraphicsTemplateResponse();
        this.request("ModifyAnimatedGraphicsTemplate", req, resp, cb);
    }

    /**
     * Modify media classification attributes.
     * @param {ModifyClassRequest} req
     * @param {function(string, ModifyClassResponse):void} cb
     * @public
     */
    ModifyClass(req, cb) {
        let resp = new ModifyClassResponse();
        this.request("ModifyClass", req, resp, cb);
    }

    /**
     * Modify a user-customized MPS task template.
When modifying a template, fill in the MPS related parameters in JSON format into the MPSModifyTemplateParams parameter. For specific task parameter configuration methods, see the MPS task template related documentation.
     * @param {ModifyMPSTemplateRequest} req
     * @param {function(string, ModifyMPSTemplateResponse):void} cb
     * @public
     */
    ModifyMPSTemplate(req, cb) {
        let resp = new ModifyMPSTemplateResponse();
        this.request("ModifyMPSTemplate", req, resp, cb);
    }

    /**
     * Associate media asset subtitles with the media output file corresponding to the adaptive bitrate streaming template ID (or disassociate them).
     * @param {AttachMediaSubtitlesRequest} req
     * @param {function(string, AttachMediaSubtitlesResponse):void} cb
     * @public
     */
    AttachMediaSubtitles(req, cb) {
        let resp = new AttachMediaSubtitlesResponse();
        this.request("AttachMediaSubtitles", req, resp, cb);
    }

    /**
     * This API returns client upload acceleration statistics within a specified time range.
1. Can query client upload acceleration statistics data for the most recent 365 days.
   2. The query time span should not exceed 90 days.
3. If the query time span exceeds 1 day, the data is returned at a granularity of 1 day. Otherwise, the data is returned at a granularity of 5 minutes.
     * @param {DescribeClientUploadAccelerationUsageDataRequest} req
     * @param {function(string, DescribeClientUploadAccelerationUsageDataResponse):void} cb
     * @public
     */
    DescribeClientUploadAccelerationUsageData(req, cb) {
        let resp = new DescribeClientUploadAccelerationUsageDataResponse();
        this.request("DescribeClientUploadAccelerationUsageData", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a media file, including category, name, description, tag, expiration time, dotting information, video cover, and subtitle information.
     * @param {ModifyMediaInfoRequest} req
     * @param {function(string, ModifyMediaInfoResponse):void} cb
     * @public
     */
    ModifyMediaInfo(req, cb) {
        let resp = new ModifyMediaInfoResponse();
        this.request("ModifyMediaInfo", req, resp, cb);
    }

    /**
     * Initiate a review task for image files in VOD to detect offensive, unsafe, and inappropriate content.

<li>Supported image file size: file < 5M;</li>
<li>Image file resolution support: recommended resolution above 256x256, otherwise it may affect review effectiveness;</li>
<li>Supported image file formats: PNG, JPG, JPEG, BMP, GIF, WEBP.</li>
     * @param {ReviewImageRequest} req
     * @param {function(string, ReviewImageResponse):void} cb
     * @public
     */
    ReviewImage(req, cb) {
        let resp = new ReviewImageResponse();
        this.request("ReviewImage", req, resp, cb);
    }

    /**
     * This API is used to delete a user-customized sampled screenshot template.
     * @param {DeleteSampleSnapshotTemplateRequest} req
     * @param {function(string, DeleteSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    DeleteSampleSnapshotTemplate(req, cb) {
        let resp = new DeleteSampleSnapshotTemplateResponse();
        this.request("DeleteSampleSnapshotTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a user-defined audio and video content analysis template. Maximum quantity: 50. HLS format is not supported currently.
     * @param {CreateAIAnalysisTemplateRequest} req
     * @param {function(string, CreateAIAnalysisTemplateResponse):void} cb
     * @public
     */
    CreateAIAnalysisTemplate(req, cb) {
        let resp = new CreateAIAnalysisTemplateResponse();
        this.request("CreateAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * Crop HLS video by time period and generate a new HLS video in real time. Developers can share it immediately or save it for long-term preservation.

Tencent Cloud VOD supports two editing modes:
- Clip solidification: Save the edited video as a standalone video with an independent FileId; suitable for long-term preservation of highlights.
- Editing is not solidified: The edited video is attached to the input file and has no standalone FileId. This is suitable for scenarios where highlight clips are shared temporarily.

This API is used to crop an input m3u8 file. The minimum editing precision is one ts slice, so second-level or more precise editing precision cannot be achieved.

### Edit solidification
Clip solidification refers to saving an edited video as an independent video with its own FileId. Its lifecycle is not subject to any impact from the original input video. Even if the original input video is deleted, the clipping result is not affected. You can also transcode it or publish it on WeChat.

For example, a complete football match may have raw video lasting over 2 hours. For cost savings, a customer can store this video for 2 months, but specify longer storage for the edited highlights video. You can also perform additional on-demand operations on the highlights video separately, such as transcoding and publishing on WeChat. In this case, you can choose the edit and solidify solution.

The advantage of solidified edits is that their lifecycle is independent of the original input video, allowing them to be managed separately and preserved long-term.

<font color='red'>Note:</font> If solidification is specified when editing, enable reception of editing solidification event notifications through the ModifyEventConfig API. After successful solidification, you will receive a PersistenceComplete event notification. Before receiving this event notification, you should not delete or transition the original input video to colder storage. Otherwise, playback of the generated video may be abnormal.

### Editing is not solidified
Editing is not solidified, meaning the result of editing (m3u8 file) shares the same TS segments with the original input video. The newly generated video is not a standalone complete video (no independent FileId, only a playback URL), and its valid period is consistent with that of the original input full video. Once the original input video is deleted, the clip will also become unplayable.

Editing is not solidified. Since the clipping result is not an independent video, it is not included in the video management of on-demand media assets (for example, the total number of videos in the console does not count this clip). It is also unable to separately perform any video processing operations such as transcoding or WeChat publishing on this clip.

The advantage of non-solidified editing is that the editing operation is Relatively "lightweight" and will not generate additional storage overhead. However, its shortcoming is that the lifecycle is identical to the original recorded video, and it is unable to further transcode or perform other video processing.
     * @param {SimpleHlsClipRequest} req
     * @param {function(string, SimpleHlsClipResponse):void} cb
     * @public
     */
    SimpleHlsClip(req, cb) {
        let resp = new SimpleHlsClipResponse();
        this.request("SimpleHlsClip", req, resp, cb);
    }

    /**
     * Set the HTTPS certificate for a vod domain.
     * @param {SetVodDomainCertificateRequest} req
     * @param {function(string, SetVodDomainCertificateResponse):void} cb
     * @public
     */
    SetVodDomainCertificate(req, cb) {
        let resp = new SetVodDomainCertificateResponse();
        this.request("SetVodDomainCertificate", req, resp, cb);
    }

    /**
     * 1. This API can obtain multiple types of info of multiple media files, including:
1. Basic information (basicInfo): including media name, categorization, playback address, cover image, and more.
2. Meta information (metaData): including size, duration, video stream information, and audio stream information.
3. Transcode result information (transcodeInfo): includes media addresses of various specifications generated by transcoding the media, video stream parameters, audio stream parameters, etc.
4. Animated graphics info (animatedGraphicsInfo): the animated graphics info after converting a video to gif (for example, gif).
5. sampleSnapshotInfo: sampling screenshot information.
6. Sprite image information (imageSpriteInfo): sprite image information after capturing sprite image files from a video.
7. snapshotByTimeOffsetInfo: screenshot information after taking screenshots of a video at specified time points.
8. Video timestamp information (keyFrameDescInfo): Dotting information set for a video.
9. Adaptive Bitrate Streaming information (adaptiveDynamicStreamingInfo): information including specification, encryption type, and packaging format.
10. Review information (reviewInfo): includes media moderation and media cover review information.
2. You can specify to only return partial information in the response.
     * @param {DescribeMediaInfosRequest} req
     * @param {function(string, DescribeMediaInfosResponse):void} cb
     * @public
     */
    DescribeMediaInfos(req, cb) {
        let resp = new DescribeMediaInfosResponse();
        this.request("DescribeMediaInfos", req, resp, cb);
    }

    /**
     * This API is used to generate AIGC Hunyuan 3D Files.
     * @param {CreateAigcHunyuan3DTaskRequest} req
     * @param {function(string, CreateAigcHunyuan3DTaskResponse):void} cb
     * @public
     */
    CreateAigcHunyuan3DTask(req, cb) {
        let resp = new CreateAigcHunyuan3DTaskResponse();
        this.request("CreateAigcHunyuan3DTask", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. Please use the new version of APIs for [audio and video quality revival](https://www.tencentcloud.com/document/api/266/102571?from_cn_redirect=1).
Use a template to initiate video rebirth.
     * @param {RebuildMediaByTemplateRequest} req
     * @param {function(string, RebuildMediaByTemplateResponse):void} cb
     * @public
     */
    RebuildMediaByTemplate(req, cb) {
        let resp = new RebuildMediaByTemplateResponse();
        this.request("RebuildMediaByTemplate", req, resp, cb);
    }

    /**
     * Delete a title and trailer template.
     * @param {DeleteHeadTailTemplateRequest} req
     * @param {function(string, DeleteHeadTailTemplateResponse):void} cb
     * @public
     */
    DeleteHeadTailTemplate(req, cb) {
        let resp = new DeleteHeadTailTemplateResponse();
        this.request("DeleteHeadTailTemplate", req, resp, cb);
    }

    /**
     * This API is used to create material samples for video processing such as content recognition and inappropriate video recognition through technologies like facial feature positioning.
     * @param {CreatePersonSampleRequest} req
     * @param {function(string, CreatePersonSampleResponse):void} cb
     * @public
     */
    CreatePersonSample(req, cb) {
        let resp = new CreatePersonSampleResponse();
        this.request("CreatePersonSample", req, resp, cb);
    }

    /**
     * Use natural language to conduct semantic search on media.
     * @param {SearchMediaBySemanticsRequest} req
     * @param {function(string, SearchMediaBySemanticsResponse):void} cb
     * @public
     */
    SearchMediaBySemantics(req, cb) {
        let resp = new SearchMediaBySemanticsResponse();
        this.request("SearchMediaBySemantics", req, resp, cb);
    }

    /**
     * This API is used to enable or disable applications. Disabled applications will have their corresponding domains blocked and console access restricted.
     * @param {ModifySubAppIdStatusRequest} req
     * @param {function(string, ModifySubAppIdStatusResponse):void} cb
     * @public
     */
    ModifySubAppIdStatus(req, cb) {
        let resp = new ModifySubAppIdStatusResponse();
        this.request("ModifySubAppIdStatus", req, resp, cb);
    }

    /**
     * This API is used to delete a carousel playlist.
     * @param {DeleteRoundPlayRequest} req
     * @param {function(string, DeleteRoundPlayResponse):void} cb
     * @public
     */
    DeleteRoundPlay(req, cb) {
        let resp = new DeleteRoundPlayResponse();
        this.request("DeleteRoundPlay", req, resp, cb);
    }

    /**
     * Clone CDN Domain.
     * @param {CloneCDNDomainRequest} req
     * @param {function(string, CloneCDNDomainResponse):void} cb
     * @public
     */
    CloneCDNDomain(req, cb) {
        let resp = new CloneCDNDomainResponse();
        this.request("CloneCDNDomain", req, resp, cb);
    }

    /**
     * Create a logset via VOD.
     * @param {CreateCLSLogsetRequest} req
     * @param {function(string, CreateCLSLogsetResponse):void} cb
     * @public
     */
    CreateCLSLogset(req, cb) {
        let resp = new CreateCLSLogsetResponse();
        this.request("CreateCLSLogset", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of moderation template supports audio/video moderation and image moderation. For details, please see [Modify Moderation Template](https://www.tencentcloud.com/document/api/266/84388?from_cn_redirect=1).
Modify a user-customized audio/video moderation template.
     * @param {ModifyContentReviewTemplateRequest} req
     * @param {function(string, ModifyContentReviewTemplateResponse):void} cb
     * @public
     */
    ModifyContentReviewTemplate(req, cb) {
        let resp = new ModifyContentReviewTemplateResponse();
        this.request("ModifyContentReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to initiate processing tasks for audio-video media in VOD, with features including:
1. Watermarked video transcoding;
2. Animated image generating;
3. Screenshot taking at specified time points;
4. Sampled screenshot taking;
5. Capture CSS sprites for videos;
6. Capture a frame from a video as the cover.
7. Transcoding to adaptive bitrate streaming (and encrypting);
8. Content review (offensive content, unsafe information, inappropriate information), it is <font color=red>not recommended</font> to use this API to initiate. It is recommended to use [Audio/Video Moderation (ReviewAudioVideo)](https://www.tencentcloud.com/document/api/266/80283?from_cn_redirect=1) or [Image Moderation (ReviewImage)](https://www.tencentcloud.com/document/api/266/73217?from_cn_redirect=1);
9. Content analysis (tag, categorization, cover, frame tagging), HLS format not supported currently.
10. Content recognition (video intro and outro, human face, full text, text keyword, full speech, speech keyword, object).

If event notification is used, the event notification type is task flow status change (https://www.tencentcloud.com/document/product/266/9636?from_cn_redirect=1).
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        let resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
    }

    /**
     * This API is used to create a user-defined audio and video content recognition template. Maximum quantity: 50.
     * @param {CreateAIRecognitionTemplateRequest} req
     * @param {function(string, CreateAIRecognitionTemplateResponse):void} cb
     * @public
     */
    CreateAIRecognitionTemplate(req, cb) {
        let resp = new CreateAIRecognitionTemplateResponse();
        this.request("CreateAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of [audio and video quality revival](https://www.tencentcloud.com/document/product/266/102571?from_cn_redirect=1) interface uses preset templates. For details, see [Audio and Video Quality Rebirth Template](https://www.tencentcloud.com/document/product/266/102586?from_cn_redirect=1#50604b3f-0286-4a10-a3f7-18218116aff7).
This API is used to delete an audio and video quality rebirth template.
     * @param {DeleteEnhanceMediaTemplateRequest} req
     * @param {function(string, DeleteEnhanceMediaTemplateResponse):void} cb
     * @public
     */
    DeleteEnhanceMediaTemplate(req, cb) {
        let resp = new DeleteEnhanceMediaTemplateResponse();
        this.request("DeleteEnhanceMediaTemplate", req, resp, cb);
    }

    /**
     * Set a delivery destination in CLS for a vod domain.
     * @param {SetCLSPushTargetRequest} req
     * @param {function(string, SetCLSPushTargetResponse):void} cb
     * @public
     */
    SetCLSPushTarget(req, cb) {
        let resp = new SetCLSPushTargetResponse();
        this.request("SetCLSPushTarget", req, resp, cb);
    }

    /**
     * This API is <font color=red>no longer maintained</font>. The new version of the [audio and video quality revival](https://www.tencentcloud.com/document/product/266/102571?from_cn_redirect=1) API uses preset templates. For details, see [Audio and Video Quality Rebirth Template](https://www.tencentcloud.com/document/product/266/102586?from_cn_redirect=1#50604b3f-0286-4a10-a3f7-18218116aff7).
Queries the video rebirth template list.
     * @param {DescribeRebuildMediaTemplatesRequest} req
     * @param {function(string, DescribeRebuildMediaTemplatesResponse):void} cb
     * @public
     */
    DescribeRebuildMediaTemplates(req, cb) {
        let resp = new DescribeRebuildMediaTemplatesResponse();
        this.request("DescribeRebuildMediaTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the download address of playback statistics files.
* You can query the download link for playback statistics files from the past one year. The time span between the start date and end date cannot exceed 90 days.
VOD analyzes and processes the CDN request logs of the previous day to generate playback statistics files.
* The playback statistics file contains statistical information such as the number of plays and total traffic of media files.
* Statistical description of the number of plays:
1. HLS file: The number of plays is counted when accessing M3U8 files, but not when accessing TS files.
2. Other files (for example, MP4 files): If the playback request includes the range parameter and the start parameter of range is not equal to 0, the number of plays is not counted. In other cases, the number of plays is counted.
* Statistics of playback devices: If a playback request includes the UserAgent parameter and the UserAgent contains identifiers such as Android or iPhone, it is counted as a mobile playback count. Otherwise, it is counted as a PC playback count.
Playback statistics only target VOD domain names. Distribution of EdgeOne domain names is not included in playback statistics.
     * @param {DescribeDailyPlayStatFileListRequest} req
     * @param {function(string, DescribeDailyPlayStatFileListResponse):void} cb
     * @public
     */
    DescribeDailyPlayStatFileList(req, cb) {
        let resp = new DescribeDailyPlayStatFileListResponse();
        this.request("DescribeDailyPlayStatFileList", req, resp, cb);
    }

    /**
     * This API is used to change application information, but default application information is not allowed to be modified.
     * @param {ModifySubAppIdInfoRequest} req
     * @param {function(string, ModifySubAppIdInfoResponse):void} cb
     * @public
     */
    ModifySubAppIdInfo(req, cb) {
        let resp = new ModifySubAppIdInfoResponse();
        this.request("ModifySubAppIdInfo", req, resp, cb);
    }

    /**
     * Create a knowledge base. This API is used to create a new knowledge base for Intelligent Media Assets. Each user can create up to 20 knowledge bases.
     * @param {CreateKnowledgeBaseRequest} req
     * @param {function(string, CreateKnowledgeBaseResponse):void} cb
     * @public
     */
    CreateKnowledgeBase(req, cb) {
        let resp = new CreateKnowledgeBaseResponse();
        this.request("CreateKnowledgeBase", req, resp, cb);
    }

    /**
     * Delete an image sprite template.
     * @param {DeleteImageSpriteTemplateRequest} req
     * @param {function(string, DeleteImageSpriteTemplateResponse):void} cb
     * @public
     */
    DeleteImageSpriteTemplate(req, cb) {
        let resp = new DeleteImageSpriteTemplateResponse();
        this.request("DeleteImageSpriteTemplate", req, resp, cb);
    }

    /**
     * Modify a user-customized sampled screenshot template.
     * @param {ModifySampleSnapshotTemplateRequest} req
     * @param {function(string, ModifySampleSnapshotTemplateResponse):void} cb
     * @public
     */
    ModifySampleSnapshotTemplate(req, cb) {
        let resp = new ModifySampleSnapshotTemplateResponse();
        this.request("ModifySampleSnapshotTemplate", req, resp, cb);
    }


}
module.exports = VodClient;
