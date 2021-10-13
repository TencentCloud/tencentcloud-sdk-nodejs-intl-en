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
const Canvas = models.Canvas;
const ModifySampleSnapshotTemplateResponse = models.ModifySampleSnapshotTemplateResponse;
const ModifyWatermarkTemplateRequest = models.ModifyWatermarkTemplateRequest;
const AiRecognitionTaskAsrFullTextSegmentItem = models.AiRecognitionTaskAsrFullTextSegmentItem;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const DescribeAllClassRequest = models.DescribeAllClassRequest;
const WeChatMiniProgramPublishRequest = models.WeChatMiniProgramPublishRequest;
const AiAnalysisTaskClassificationInput = models.AiAnalysisTaskClassificationInput;
const SvgWatermarkInput = models.SvgWatermarkInput;
const CreateTranscodeTemplateRequest = models.CreateTranscodeTemplateRequest;
const TransitionOpertion = models.TransitionOpertion;
const AudioTrackItem = models.AudioTrackItem;
const MediaAiAnalysisHighlightItem = models.MediaAiAnalysisHighlightItem;
const DescribeAnimatedGraphicsTemplatesRequest = models.DescribeAnimatedGraphicsTemplatesRequest;
const AiReviewTaskProhibitedAsrResult = models.AiReviewTaskProhibitedAsrResult;
const AdaptiveDynamicStreamingTemplate = models.AdaptiveDynamicStreamingTemplate;
const DeleteAnimatedGraphicsTemplateResponse = models.DeleteAnimatedGraphicsTemplateResponse;
const AiReviewTaskProhibitedOcrResult = models.AiReviewTaskProhibitedOcrResult;
const AiRecognitionTaskAsrFullTextResultOutput = models.AiRecognitionTaskAsrFullTextResultOutput;
const AiReviewProhibitedOcrTaskOutput = models.AiReviewProhibitedOcrTaskOutput;
const MediaMiniProgramReviewElem = models.MediaMiniProgramReviewElem;
const ManageTaskResponse = models.ManageTaskResponse;
const AiAnalysisTaskCoverOutput = models.AiAnalysisTaskCoverOutput;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const ModifySampleSnapshotTemplateRequest = models.ModifySampleSnapshotTemplateRequest;
const AiReviewPoliticalOcrTaskInput = models.AiReviewPoliticalOcrTaskInput;
const MediaInputInfo = models.MediaInputInfo;
const CreateImageSpriteTask2017 = models.CreateImageSpriteTask2017;
const TempCertificate = models.TempCertificate;
const AiReviewTaskPoliticalOcrResult = models.AiReviewTaskPoliticalOcrResult;
const ManageTaskRequest = models.ManageTaskRequest;
const CreateImageSpriteTemplateRequest = models.CreateImageSpriteTemplateRequest;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const UserDefineFaceReviewTemplateInfo = models.UserDefineFaceReviewTemplateInfo;
const ContentReviewTemplateItem = models.ContentReviewTemplateItem;
const DeleteAIRecognitionTemplateResponse = models.DeleteAIRecognitionTemplateResponse;
const DeleteContentReviewTemplateRequest = models.DeleteContentReviewTemplateRequest;
const AiReviewPoliticalTaskInput = models.AiReviewPoliticalTaskInput;
const AudioTransform = models.AudioTransform;
const ResetProcedureTemplateRequest = models.ResetProcedureTemplateRequest;
const ComposeMediaResponse = models.ComposeMediaResponse;
const UrlSignatureAuthPolicy = models.UrlSignatureAuthPolicy;
const DeleteSampleSnapshotTemplateRequest = models.DeleteSampleSnapshotTemplateRequest;
const DescribeStorageDataResponse = models.DescribeStorageDataResponse;
const AudioTemplateInfoForUpdate = models.AudioTemplateInfoForUpdate;
const ModifySubAppIdInfoRequest = models.ModifySubAppIdInfoRequest;
const DeletePersonSampleRequest = models.DeletePersonSampleRequest;
const AiRecognitionTaskAsrWordsSegmentItem = models.AiRecognitionTaskAsrWordsSegmentItem;
const AiRecognitionTaskInput = models.AiRecognitionTaskInput;
const AudioTemplateInfo = models.AudioTemplateInfo;
const ExecuteFunctionResponse = models.ExecuteFunctionResponse;
const CoverConfigureInfo = models.CoverConfigureInfo;
const ComposeMediaRequest = models.ComposeMediaRequest;
const AIRecognitionTemplateItem = models.AIRecognitionTemplateItem;
const AiReviewPornAsrTaskInput = models.AiReviewPornAsrTaskInput;
const AiRecognitionTaskFaceResult = models.AiRecognitionTaskFaceResult;
const AiRecognitionTaskHeadTailResultInput = models.AiRecognitionTaskHeadTailResultInput;
const CreateAdaptiveDynamicStreamingTemplateRequest = models.CreateAdaptiveDynamicStreamingTemplateRequest;
const PushUrlCacheResponse = models.PushUrlCacheResponse;
const MediaProcessTaskSampleSnapshotResult = models.MediaProcessTaskSampleSnapshotResult;
const TerrorismImgReviewTemplateInfoForUpdate = models.TerrorismImgReviewTemplateInfoForUpdate;
const ModifyTranscodeTemplateRequest = models.ModifyTranscodeTemplateRequest;
const AiAnalysisTaskHighlightResult = models.AiAnalysisTaskHighlightResult;
const DeleteAIAnalysisTemplateResponse = models.DeleteAIAnalysisTemplateResponse;
const ApplyUploadResponse = models.ApplyUploadResponse;
const DescribeDailyPlayStatFileListResponse = models.DescribeDailyPlayStatFileListResponse;
const TextWatermarkTemplateInputForUpdate = models.TextWatermarkTemplateInputForUpdate;
const DeleteSuperPlayerConfigRequest = models.DeleteSuperPlayerConfigRequest;
const AiReviewTerrorismOcrTaskInput = models.AiReviewTerrorismOcrTaskInput;
const AiRecognitionTaskOcrWordsResultInput = models.AiRecognitionTaskOcrWordsResultInput;
const AiReviewPornTaskInput = models.AiReviewPornTaskInput;
const CreateProcedureTemplateRequest = models.CreateProcedureTemplateRequest;
const DescribeMediaProcessUsageDataRequest = models.DescribeMediaProcessUsageDataRequest;
const CreatePersonSampleRequest = models.CreatePersonSampleRequest;
const MediaTransitionItem = models.MediaTransitionItem;
const MediaAiAnalysisCoverItem = models.MediaAiAnalysisCoverItem;
const TagConfigureInfo = models.TagConfigureInfo;
const ModifySuperPlayerConfigResponse = models.ModifySuperPlayerConfigResponse;
const AiRecognitionTaskOcrWordsResultOutput = models.AiRecognitionTaskOcrWordsResultOutput;
const ConcatTask2017 = models.ConcatTask2017;
const DeleteAIRecognitionTemplateRequest = models.DeleteAIRecognitionTemplateRequest;
const FileUploadTask = models.FileUploadTask;
const DescribeCDNStatDetailsResponse = models.DescribeCDNStatDetailsResponse;
const AttachMediaSubtitlesRequest = models.AttachMediaSubtitlesRequest;
const AiAnalysisTaskCoverResult = models.AiAnalysisTaskCoverResult;
const AiAnalysisTaskClassificationOutput = models.AiAnalysisTaskClassificationOutput;
const FileDeleteTask = models.FileDeleteTask;
const ResourceTag = models.ResourceTag;
const AiRecognitionTaskOcrFullTextResultOutput = models.AiRecognitionTaskOcrFullTextResultOutput;
const EditMediaTaskInput = models.EditMediaTaskInput;
const UserDefineAsrTextReviewTemplateInfo = models.UserDefineAsrTextReviewTemplateInfo;
const DescribeWordSamplesResponse = models.DescribeWordSamplesResponse;
const AiSampleFaceInfo = models.AiSampleFaceInfo;
const ModifyVodDomainAccelerateConfigRequest = models.ModifyVodDomainAccelerateConfigRequest;
const MediaProcessTaskAdaptiveDynamicStreamingResult = models.MediaProcessTaskAdaptiveDynamicStreamingResult;
const OcrWordsConfigureInfoForUpdate = models.OcrWordsConfigureInfoForUpdate;
const WatermarkTemplate = models.WatermarkTemplate;
const CoverBySnapshotTaskOutput = models.CoverBySnapshotTaskOutput;
const TextWatermarkTemplateInput = models.TextWatermarkTemplateInput;
const ForbidMediaDistributionRequest = models.ForbidMediaDistributionRequest;
const DescribeAIRecognitionTemplatesResponse = models.DescribeAIRecognitionTemplatesResponse;
const EditMediaResponse = models.EditMediaResponse;
const PoliticalOcrReviewTemplateInfoForUpdate = models.PoliticalOcrReviewTemplateInfoForUpdate;
const TaskOutputMediaInfo = models.TaskOutputMediaInfo;
const ProcessMediaByUrlRequest = models.ProcessMediaByUrlRequest;
const PlayStatFileInfo = models.PlayStatFileInfo;
const ModifyMediaInfoRequest = models.ModifyMediaInfoRequest;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const PornAsrReviewTemplateInfoForUpdate = models.PornAsrReviewTemplateInfoForUpdate;
const MediaAnimatedGraphicsInfo = models.MediaAnimatedGraphicsInfo;
const MediaMetaData = models.MediaMetaData;
const CdnLogInfo = models.CdnLogInfo;
const MediaSubtitleInfo = models.MediaSubtitleInfo;
const AiRecognitionTaskAsrFullTextResultInput = models.AiRecognitionTaskAsrFullTextResultInput;
const MediaMiniProgramReviewInfoItem = models.MediaMiniProgramReviewInfoItem;
const TaskStatData = models.TaskStatData;
const CreateVodDomainRequest = models.CreateVodDomainRequest;
const OcrFullTextConfigureInfoForUpdate = models.OcrFullTextConfigureInfoForUpdate;
const ProcessMediaByProcedureRequest = models.ProcessMediaByProcedureRequest;
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const MediaProcessTaskAnimatedGraphicResult = models.MediaProcessTaskAnimatedGraphicResult;
const ProcessMediaResponse = models.ProcessMediaResponse;
const CreateWordSamplesResponse = models.CreateWordSamplesResponse;
const ClassificationConfigureInfoForUpdate = models.ClassificationConfigureInfoForUpdate;
const DeleteAdaptiveDynamicStreamingTemplateResponse = models.DeleteAdaptiveDynamicStreamingTemplateResponse;
const CreateWordSamplesRequest = models.CreateWordSamplesRequest;
const PoliticalAsrReviewTemplateInfoForUpdate = models.PoliticalAsrReviewTemplateInfoForUpdate;
const WechatMiniProgramPublishTaskInput = models.WechatMiniProgramPublishTaskInput;
const AiSampleFaceOperation = models.AiSampleFaceOperation;
const SvgWatermarkInputForUpdate = models.SvgWatermarkInputForUpdate;
const AiReviewTaskTerrorismOcrResult = models.AiReviewTaskTerrorismOcrResult;
const AiRecognitionTaskOcrWordsResult = models.AiRecognitionTaskOcrWordsResult;
const PornAsrReviewTemplateInfo = models.PornAsrReviewTemplateInfo;
const AiRecognitionTaskSegmentResult = models.AiRecognitionTaskSegmentResult;
const MediaSubtitleItem = models.MediaSubtitleItem;
const ProhibitedAsrReviewTemplateInfoForUpdate = models.ProhibitedAsrReviewTemplateInfoForUpdate;
const ModifyAnimatedGraphicsTemplateResponse = models.ModifyAnimatedGraphicsTemplateResponse;
const ModifyAIAnalysisTemplateResponse = models.ModifyAIAnalysisTemplateResponse;
const LiveRealTimeClipRequest = models.LiveRealTimeClipRequest;
const DeleteAdaptiveDynamicStreamingTemplateRequest = models.DeleteAdaptiveDynamicStreamingTemplateRequest;
const AiRecognitionTaskOcrFullTextSegmentItem = models.AiRecognitionTaskOcrFullTextSegmentItem;
const EditMediaOutputConfig = models.EditMediaOutputConfig;
const SplitMediaTaskSegmentInfo = models.SplitMediaTaskSegmentInfo;
const AiReviewPornAsrTaskOutput = models.AiReviewPornAsrTaskOutput;
const SimpleHlsClipResponse = models.SimpleHlsClipResponse;
const DeleteAIAnalysisTemplateRequest = models.DeleteAIAnalysisTemplateRequest;
const EditMediaRequest = models.EditMediaRequest;
const ConcatFileInfo2017 = models.ConcatFileInfo2017;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const DescribeMediaInfosResponse = models.DescribeMediaInfosResponse;
const DeleteProcedureTemplateResponse = models.DeleteProcedureTemplateResponse;
const DescribeAdaptiveDynamicStreamingTemplatesResponse = models.DescribeAdaptiveDynamicStreamingTemplatesResponse;
const MediaMiniProgramReviewInfo = models.MediaMiniProgramReviewInfo;
const ForbidMediaDistributionResponse = models.ForbidMediaDistributionResponse;
const TimeRange = models.TimeRange;
const DescribeAdaptiveDynamicStreamingTemplatesRequest = models.DescribeAdaptiveDynamicStreamingTemplatesRequest;
const ImageWatermarkInput = models.ImageWatermarkInput;
const ObjectConfigureInfo = models.ObjectConfigureInfo;
const AsrFullTextConfigureInfoForUpdate = models.AsrFullTextConfigureInfoForUpdate;
const AiRecognitionTaskHeadTailResult = models.AiRecognitionTaskHeadTailResult;
const TranscodeTask2017 = models.TranscodeTask2017;
const CreatePersonSampleResponse = models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models.CreateContentReviewTemplateResponse;
const ModifyAnimatedGraphicsTemplateRequest = models.ModifyAnimatedGraphicsTemplateRequest;
const DescribeProcedureTemplatesRequest = models.DescribeProcedureTemplatesRequest;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const TagConfigureInfoForUpdate = models.TagConfigureInfoForUpdate;
const DeleteWordSamplesRequest = models.DeleteWordSamplesRequest;
const EmptyTrackItem = models.EmptyTrackItem;
const StickerTrackItem = models.StickerTrackItem;
const VideoTemplateInfo = models.VideoTemplateInfo;
const PoliticalOcrReviewTemplateInfo = models.PoliticalOcrReviewTemplateInfo;
const PornOcrReviewTemplateInfoForUpdate = models.PornOcrReviewTemplateInfoForUpdate;
const AiReviewTaskPornOcrResult = models.AiReviewTaskPornOcrResult;
const ModifyContentReviewTemplateResponse = models.ModifyContentReviewTemplateResponse;
const DescribeWatermarkTemplatesRequest = models.DescribeWatermarkTemplatesRequest;
const CoverBySnapshotTaskInput = models.CoverBySnapshotTaskInput;
const SegmentConfigureInfoForUpdate = models.SegmentConfigureInfoForUpdate;
const UserDefineConfigureInfo = models.UserDefineConfigureInfo;
const AiRecognitionTaskSegmentSegmentItem = models.AiRecognitionTaskSegmentSegmentItem;
const AiReviewPornOcrTaskInput = models.AiReviewPornOcrTaskInput;
const OcrWordsConfigureInfo = models.OcrWordsConfigureInfo;
const CreateSuperPlayerConfigResponse = models.CreateSuperPlayerConfigResponse;
const AiAnalysisTaskFrameTagOutput = models.AiAnalysisTaskFrameTagOutput;
const ModifyAdaptiveDynamicStreamingTemplateRequest = models.ModifyAdaptiveDynamicStreamingTemplateRequest;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const DescribeCDNUsageDataResponse = models.DescribeCDNUsageDataResponse;
const ModifyWordSampleRequest = models.ModifyWordSampleRequest;
const AiRecognitionTaskFaceSegmentItem = models.AiRecognitionTaskFaceSegmentItem;
const DeleteMediaResponse = models.DeleteMediaResponse;
const ModifySnapshotByTimeOffsetTemplateResponse = models.ModifySnapshotByTimeOffsetTemplateResponse;
const AiRecognitionTaskObjectResult = models.AiRecognitionTaskObjectResult;
const AiAnalysisTaskTagResult = models.AiAnalysisTaskTagResult;
const SearchMediaResponse = models.SearchMediaResponse;
const AiAnalysisTaskTagOutput = models.AiAnalysisTaskTagOutput;
const AiAnalysisTaskHighlightOutput = models.AiAnalysisTaskHighlightOutput;
const MediaSubtitleInput = models.MediaSubtitleInput;
const ProcessMediaRequest = models.ProcessMediaRequest;
const ModifyMediaInfoResponse = models.ModifyMediaInfoResponse;
const AiRecognitionTaskOcrFullTextResult = models.AiRecognitionTaskOcrFullTextResult;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const AiSampleWord = models.AiSampleWord;
const AiRecognitionTaskAsrWordsResultOutput = models.AiRecognitionTaskAsrWordsResultOutput;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const DomainDetailInfo = models.DomainDetailInfo;
const AiRecognitionTaskSegmentResultOutput = models.AiRecognitionTaskSegmentResultOutput;
const ImageSpriteTaskInput = models.ImageSpriteTaskInput;
const ObjectConfigureInfoForUpdate = models.ObjectConfigureInfoForUpdate;
const DeleteMediaRequest = models.DeleteMediaRequest;
const CreateSuperPlayerConfigRequest = models.CreateSuperPlayerConfigRequest;
const ImageWatermarkTemplate = models.ImageWatermarkTemplate;
const ModifySubAppIdInfoResponse = models.ModifySubAppIdInfoResponse;
const AsrWordsConfigureInfo = models.AsrWordsConfigureInfo;
const ModifySubAppIdStatusResponse = models.ModifySubAppIdStatusResponse;
const SimpleHlsClipRequest = models.SimpleHlsClipRequest;
const MediaDeleteItem = models.MediaDeleteItem;
const AiSamplePerson = models.AiSamplePerson;
const MediaAdaptiveDynamicStreamingInfo = models.MediaAdaptiveDynamicStreamingInfo;
const DescribeDailyPlayStatFileListRequest = models.DescribeDailyPlayStatFileListRequest;
const DescribeSuperPlayerConfigsResponse = models.DescribeSuperPlayerConfigsResponse;
const AsrWordsConfigureInfoForUpdate = models.AsrWordsConfigureInfoForUpdate;
const DescribeStorageDataRequest = models.DescribeStorageDataRequest;
const DeleteImageSpriteTemplateResponse = models.DeleteImageSpriteTemplateResponse;
const DescribeContentReviewTemplatesResponse = models.DescribeContentReviewTemplatesResponse;
const TEHDConfig = models.TEHDConfig;
const AnimatedGraphicsTemplate = models.AnimatedGraphicsTemplate;
const TerrorismOcrReviewTemplateInfoForUpdate = models.TerrorismOcrReviewTemplateInfoForUpdate;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const AiRecognitionTaskHeadTailResultOutput = models.AiRecognitionTaskHeadTailResultOutput;
const ModifyImageSpriteTemplateResponse = models.ModifyImageSpriteTemplateResponse;
const MediaProcessTaskCoverBySnapshotResult = models.MediaProcessTaskCoverBySnapshotResult;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const TerrorismConfigureInfoForUpdate = models.TerrorismConfigureInfoForUpdate;
const WechatMiniProgramPublishTask = models.WechatMiniProgramPublishTask;
const ComposeMediaTask = models.ComposeMediaTask;
const HeadTailConfigureInfoForUpdate = models.HeadTailConfigureInfoForUpdate;
const TranscodePlayInfo2017 = models.TranscodePlayInfo2017;
const SplitMediaTask = models.SplitMediaTask;
const ComposeMediaTaskInput = models.ComposeMediaTaskInput;
const AnimatedGraphicTaskInput = models.AnimatedGraphicTaskInput;
const MosaicInput = models.MosaicInput;
const AIAnalysisTemplateItem = models.AIAnalysisTemplateItem;
const AiRecognitionTaskObjectResultItem = models.AiRecognitionTaskObjectResultItem;
const ModifyVodDomainConfigResponse = models.ModifyVodDomainConfigResponse;
const MediaSnapshotByTimeOffsetInfo = models.MediaSnapshotByTimeOffsetInfo;
const DescribeImageSpriteTemplatesRequest = models.DescribeImageSpriteTemplatesRequest;
const MediaKeyFrameDescItem = models.MediaKeyFrameDescItem;
const ModifyVodDomainConfigRequest = models.ModifyVodDomainConfigRequest;
const AiSampleTagOperation = models.AiSampleTagOperation;
const PlayerConfig = models.PlayerConfig;
const ConfirmEventsRequest = models.ConfirmEventsRequest;
const CreateAIRecognitionTemplateResponse = models.CreateAIRecognitionTemplateResponse;
const ModifySubAppIdStatusRequest = models.ModifySubAppIdStatusRequest;
const CreateSubAppIdResponse = models.CreateSubAppIdResponse;
const CreateWatermarkTemplateResponse = models.CreateWatermarkTemplateResponse;
const AiReviewTerrorismTaskOutput = models.AiReviewTerrorismTaskOutput;
const ResetProcedureTemplateResponse = models.ResetProcedureTemplateResponse;
const ProhibitedConfigureInfo = models.ProhibitedConfigureInfo;
const DrmStreamingsInfo = models.DrmStreamingsInfo;
const AiReviewTerrorismOcrTaskOutput = models.AiReviewTerrorismOcrTaskOutput;
const AiAnalysisResult = models.AiAnalysisResult;
const ImageWatermarkInputForUpdate = models.ImageWatermarkInputForUpdate;
const DescribeAIAnalysisTemplatesRequest = models.DescribeAIAnalysisTemplatesRequest;
const MediaTranscodeInfo = models.MediaTranscodeInfo;
const ResolutionNameInfo = models.ResolutionNameInfo;
const AiRecognitionTaskOcrWordsResultItem = models.AiRecognitionTaskOcrWordsResultItem;
const ParseStreamingManifestRequest = models.ParseStreamingManifestRequest;
const DeleteSampleSnapshotTemplateResponse = models.DeleteSampleSnapshotTemplateResponse;
const AiAnalysisTaskTagInput = models.AiAnalysisTaskTagInput;
const MediaTrackItem = models.MediaTrackItem;
const DescribeStorageDetailsResponse = models.DescribeStorageDetailsResponse;
const PullEventsResponse = models.PullEventsResponse;
const AiRecognitionTaskObjectResultInput = models.AiRecognitionTaskObjectResultInput;
const DescribeCdnLogsRequest = models.DescribeCdnLogsRequest;
const OutputVideoStream = models.OutputVideoStream;
const ProcedureTemplate = models.ProcedureTemplate;
const AiReviewTaskTerrorismResult = models.AiReviewTaskTerrorismResult;
const ProcessMediaByUrlResponse = models.ProcessMediaByUrlResponse;
const MediaContentReviewAsrTextSegmentItem = models.MediaContentReviewAsrTextSegmentItem;
const DescribeCdnLogsResponse = models.DescribeCdnLogsResponse;
const MediaContentReviewPoliticalSegmentItem = models.MediaContentReviewPoliticalSegmentItem;
const DeletePersonSampleResponse = models.DeletePersonSampleResponse;
const CreateSnapshotByTimeOffsetTemplateResponse = models.CreateSnapshotByTimeOffsetTemplateResponse;
const ModifyContentReviewTemplateRequest = models.ModifyContentReviewTemplateRequest;
const AttachMediaSubtitlesResponse = models.AttachMediaSubtitlesResponse;
const AiContentReviewTaskInput = models.AiContentReviewTaskInput;
const CreateAdaptiveDynamicStreamingTemplateResponse = models.CreateAdaptiveDynamicStreamingTemplateResponse;
const ClassificationConfigureInfo = models.ClassificationConfigureInfo;
const AiAnalysisTaskInput = models.AiAnalysisTaskInput;
const ImageSpriteTemplate = models.ImageSpriteTemplate;
const AiRecognitionTaskOcrFullTextSegmentTextItem = models.AiRecognitionTaskOcrFullTextSegmentTextItem;
const SnapshotByTimeOffsetTaskInput = models.SnapshotByTimeOffsetTaskInput;
const SegmentConfigureInfo = models.SegmentConfigureInfo;
const RefererAuthPolicy = models.RefererAuthPolicy;
const TaskStatDataItem = models.TaskStatDataItem;
const ParseStreamingManifestResponse = models.ParseStreamingManifestResponse;
const AiReviewPornOcrTaskOutput = models.AiReviewPornOcrTaskOutput;
const ApplyUploadRequest = models.ApplyUploadRequest;
const CreateSampleSnapshotTemplateResponse = models.CreateSampleSnapshotTemplateResponse;
const AiAnalysisTaskHighlightInput = models.AiAnalysisTaskHighlightInput;
const DeleteContentReviewTemplateResponse = models.DeleteContentReviewTemplateResponse;
const MediaBasicInfo = models.MediaBasicInfo;
const AiReviewPoliticalAsrTaskInput = models.AiReviewPoliticalAsrTaskInput;
const PullUploadRequest = models.PullUploadRequest;
const SortBy = models.SortBy;
const ClipTask2017 = models.ClipTask2017;
const TranscodeTemplate = models.TranscodeTemplate;
const DescribeCDNUsageDataRequest = models.DescribeCDNUsageDataRequest;
const PornOcrReviewTemplateInfo = models.PornOcrReviewTemplateInfo;
const AiReviewTaskPoliticalAsrResult = models.AiReviewTaskPoliticalAsrResult;
const DescribeReviewDetailsRequest = models.DescribeReviewDetailsRequest;
const PornConfigureInfoForUpdate = models.PornConfigureInfoForUpdate;
const AiReviewProhibitedAsrTaskInput = models.AiReviewProhibitedAsrTaskInput;
const MediaContentReviewSegmentItem = models.MediaContentReviewSegmentItem;
const TerrorismOcrReviewTemplateInfo = models.TerrorismOcrReviewTemplateInfo;
const AiReviewTaskPornResult = models.AiReviewTaskPornResult;
const AiRecognitionTaskObjectResultOutput = models.AiRecognitionTaskObjectResultOutput;
const AiReviewProhibitedAsrTaskOutput = models.AiReviewProhibitedAsrTaskOutput;
const CreateClassResponse = models.CreateClassResponse;
const DeleteSuperPlayerConfigResponse = models.DeleteSuperPlayerConfigResponse;
const DescribeSampleSnapshotTemplatesRequest = models.DescribeSampleSnapshotTemplatesRequest;
const CoverConfigureInfoForUpdate = models.CoverConfigureInfoForUpdate;
const AiAnalysisTaskClassificationResult = models.AiAnalysisTaskClassificationResult;
const PoliticalImgReviewTemplateInfoForUpdate = models.PoliticalImgReviewTemplateInfoForUpdate;
const UserDefineOcrTextReviewTemplateInfo = models.UserDefineOcrTextReviewTemplateInfo;
const DescribeVodDomainsResponse = models.DescribeVodDomainsResponse;
const AdaptiveStreamTemplate = models.AdaptiveStreamTemplate;
const TranscodeTaskInput = models.TranscodeTaskInput;
const ModifyAIRecognitionTemplateRequest = models.ModifyAIRecognitionTemplateRequest;
const WechatPublishTask = models.WechatPublishTask;
const DescribeCDNStatDetailsRequest = models.DescribeCDNStatDetailsRequest;
const AiRecognitionTaskOcrFullTextResultInput = models.AiRecognitionTaskOcrFullTextResultInput;
const ClipFileInfo2017 = models.ClipFileInfo2017;
const StatDataItem = models.StatDataItem;
const AccelerateAreaInfo = models.AccelerateAreaInfo;
const MediaSourceData = models.MediaSourceData;
const ProhibitedAsrReviewTemplateInfo = models.ProhibitedAsrReviewTemplateInfo;
const PushUrlCacheRequest = models.PushUrlCacheRequest;
const CreateAIAnalysisTemplateResponse = models.CreateAIAnalysisTemplateResponse;
const HeadTailConfigureInfo = models.HeadTailConfigureInfo;
const EventContent = models.EventContent;
const HighlightsConfigureInfoForUpdate = models.HighlightsConfigureInfoForUpdate;
const UserDefineConfigureInfoForUpdate = models.UserDefineConfigureInfoForUpdate;
const AiReviewPoliticalAsrTaskOutput = models.AiReviewPoliticalAsrTaskOutput;
const OutputAudioStream = models.OutputAudioStream;
const ModifyClassRequest = models.ModifyClassRequest;
const SpecificationDataItem = models.SpecificationDataItem;
const TEHDConfigForUpdate = models.TEHDConfigForUpdate;
const ComposeMediaTaskOutput = models.ComposeMediaTaskOutput;
const DescribeMediaInfosRequest = models.DescribeMediaInfosRequest;
const ModifyPersonSampleRequest = models.ModifyPersonSampleRequest;
const AsrFullTextConfigureInfo = models.AsrFullTextConfigureInfo;
const DeleteVodDomainRequest = models.DeleteVodDomainRequest;
const CreateAIRecognitionTemplateRequest = models.CreateAIRecognitionTemplateRequest;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const MediaAiAnalysisClassificationItem = models.MediaAiAnalysisClassificationItem;
const AiAnalysisTaskFrameTagResult = models.AiAnalysisTaskFrameTagResult;
const AiReviewPornTaskOutput = models.AiReviewPornTaskOutput;
const AiRecognitionTaskAsrFullTextResult = models.AiRecognitionTaskAsrFullTextResult;
const ModifyAIRecognitionTemplateResponse = models.ModifyAIRecognitionTemplateResponse;
const PoliticalImgReviewTemplateInfo = models.PoliticalImgReviewTemplateInfo;
const PoliticalConfigureInfo = models.PoliticalConfigureInfo;
const HighlightsConfigureInfo = models.HighlightsConfigureInfo;
const AiRecognitionTaskOcrWordsSegmentItem = models.AiRecognitionTaskOcrWordsSegmentItem;
const MediaProcessTaskResult = models.MediaProcessTaskResult;
const DeleteWordSamplesResponse = models.DeleteWordSamplesResponse;
const DeleteProcedureTemplateRequest = models.DeleteProcedureTemplateRequest;
const WatermarkInput = models.WatermarkInput;
const AiSampleWordInfo = models.AiSampleWordInfo;
const AdaptiveDynamicStreamingInfoItem = models.AdaptiveDynamicStreamingInfoItem;
const ProhibitedOcrReviewTemplateInfo = models.ProhibitedOcrReviewTemplateInfo;
const DeleteClassResponse = models.DeleteClassResponse;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const MediaSampleSnapshotInfo = models.MediaSampleSnapshotInfo;
const DescribeSubAppIdsResponse = models.DescribeSubAppIdsResponse;
const MediaInfo = models.MediaInfo;
const VideoTemplateInfoForUpdate = models.VideoTemplateInfoForUpdate;
const CreateContentReviewTemplateRequest = models.CreateContentReviewTemplateRequest;
const DescribeContentReviewTemplatesRequest = models.DescribeContentReviewTemplatesRequest;
const AdaptiveDynamicStreamingTaskInput = models.AdaptiveDynamicStreamingTaskInput;
const DescribeImageSpriteTemplatesResponse = models.DescribeImageSpriteTemplatesResponse;
const AiAnalysisTaskFrameTagInput = models.AiAnalysisTaskFrameTagInput;
const MediaAiAnalysisFrameTagSegmentItem = models.MediaAiAnalysisFrameTagSegmentItem;
const AiRecognitionTaskAsrWordsResultItem = models.AiRecognitionTaskAsrWordsResultItem;
const MediaAiAnalysisTagItem = models.MediaAiAnalysisTagItem;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const MediaKeyFrameDescInfo = models.MediaKeyFrameDescInfo;
const DeleteImageSpriteTemplateRequest = models.DeleteImageSpriteTemplateRequest;
const CreateClassRequest = models.CreateClassRequest;
const AiSampleFailFaceInfo = models.AiSampleFailFaceInfo;
const UserDefineFaceReviewTemplateInfoForUpdate = models.UserDefineFaceReviewTemplateInfoForUpdate;
const CreateProcedureTemplateResponse = models.CreateProcedureTemplateResponse;
const DomainHTTPSConfig = models.DomainHTTPSConfig;
const DescribeMediaProcessUsageDataResponse = models.DescribeMediaProcessUsageDataResponse;
const DescribeSuperPlayerConfigsRequest = models.DescribeSuperPlayerConfigsRequest;
const HeadTailTaskInput = models.HeadTailTaskInput;
const SplitMediaOutputConfig = models.SplitMediaOutputConfig;
const CreateVodDomainResponse = models.CreateVodDomainResponse;
const ModifyVodDomainAccelerateConfigResponse = models.ModifyVodDomainAccelerateConfigResponse;
const AiRecognitionTaskSegmentResultInput = models.AiRecognitionTaskSegmentResultInput;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeSubAppIdsRequest = models.DescribeSubAppIdsRequest;
const AiRecognitionTaskFaceResultInput = models.AiRecognitionTaskFaceResultInput;
const AiReviewPoliticalTaskOutput = models.AiReviewPoliticalTaskOutput;
const AiReviewTaskPoliticalResult = models.AiReviewTaskPoliticalResult;
const ModifySnapshotByTimeOffsetTemplateRequest = models.ModifySnapshotByTimeOffsetTemplateRequest;
const ProcedureTask = models.ProcedureTask;
const ModifySuperPlayerConfigRequest = models.ModifySuperPlayerConfigRequest;
const TaskSimpleInfo = models.TaskSimpleInfo;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const SnapshotByTimeOffsetTemplate = models.SnapshotByTimeOffsetTemplate;
const DeleteSnapshotByTimeOffsetTemplateResponse = models.DeleteSnapshotByTimeOffsetTemplateResponse;
const ProhibitedOcrReviewTemplateInfoForUpdate = models.ProhibitedOcrReviewTemplateInfoForUpdate;
const DescribeVodDomainsRequest = models.DescribeVodDomainsRequest;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DescribeReviewDetailsResponse = models.DescribeReviewDetailsResponse;
const CreateTranscodeTemplateResponse = models.CreateTranscodeTemplateResponse;
const AiRecognitionTaskAsrWordsResultInput = models.AiRecognitionTaskAsrWordsResultInput;
const SnapshotByTimeOffset2017 = models.SnapshotByTimeOffset2017;
const CreateAIAnalysisTemplateRequest = models.CreateAIAnalysisTemplateRequest;
const AiReviewTerrorismTaskInput = models.AiReviewTerrorismTaskInput;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const MediaImageSpriteInfo = models.MediaImageSpriteInfo;
const SubAppIdInfo = models.SubAppIdInfo;
const DescribeAllClassResponse = models.DescribeAllClassResponse;
const ModifyImageSpriteTemplateRequest = models.ModifyImageSpriteTemplateRequest;
const AiReviewProhibitedOcrTaskInput = models.AiReviewProhibitedOcrTaskInput;
const DeleteWatermarkTemplateRequest = models.DeleteWatermarkTemplateRequest;
const DeleteVodDomainResponse = models.DeleteVodDomainResponse;
const EditMediaStreamInfo = models.EditMediaStreamInfo;
const DescribeWordSamplesRequest = models.DescribeWordSamplesRequest;
const LiveRealTimeClipResponse = models.LiveRealTimeClipResponse;
const ModifyAIAnalysisTemplateRequest = models.ModifyAIAnalysisTemplateRequest;
const CommitUploadResponse = models.CommitUploadResponse;
const DescribeSampleSnapshotTemplatesResponse = models.DescribeSampleSnapshotTemplatesResponse;
const ModifyWordSampleResponse = models.ModifyWordSampleResponse;
const AiContentReviewResult = models.AiContentReviewResult;
const TerrorismImgReviewTemplateInfo = models.TerrorismImgReviewTemplateInfo;
const DrmStreamingsInfoForUpdate = models.DrmStreamingsInfoForUpdate;
const DeleteClassRequest = models.DeleteClassRequest;
const DescribeTranscodeTemplatesRequest = models.DescribeTranscodeTemplatesRequest;
const PoliticalConfigureInfoForUpdate = models.PoliticalConfigureInfoForUpdate;
const DescribeWatermarkTemplatesResponse = models.DescribeWatermarkTemplatesResponse;
const WeChatMiniProgramPublishResponse = models.WeChatMiniProgramPublishResponse;
const ImageTransform = models.ImageTransform;
const CreateAnimatedGraphicsTemplateRequest = models.CreateAnimatedGraphicsTemplateRequest;
const FrameTagConfigureInfo = models.FrameTagConfigureInfo;
const ExecuteFunctionRequest = models.ExecuteFunctionRequest;
const ConfirmEventsResponse = models.ConfirmEventsResponse;
const ModifyPersonSampleResponse = models.ModifyPersonSampleResponse;
const VideoTrackItem = models.VideoTrackItem;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const MediaTranscodeItem = models.MediaTranscodeItem;
const DescribePersonSamplesResponse = models.DescribePersonSamplesResponse;
const SplitMediaTaskInput = models.SplitMediaTaskInput;
const PornConfigureInfo = models.PornConfigureInfo;
const AiRecognitionTaskObjectSeqmentItem = models.AiRecognitionTaskObjectSeqmentItem;
const PullEventsRequest = models.PullEventsRequest;
const FaceConfigureInfoForUpdate = models.FaceConfigureInfoForUpdate;
const DescribeAIAnalysisTemplatesResponse = models.DescribeAIAnalysisTemplatesResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models.CreateSnapshotByTimeOffsetTemplateRequest;
const AiRecognitionTaskAsrWordsResult = models.AiRecognitionTaskAsrWordsResult;
const CreateSubAppIdRequest = models.CreateSubAppIdRequest;
const DescribeProcedureTemplatesResponse = models.DescribeProcedureTemplatesResponse;
const SearchMediaRequest = models.SearchMediaRequest;
const CreateSampleSnapshotTemplateRequest = models.CreateSampleSnapshotTemplateRequest;
const MediaContentReviewOcrTextSegmentItem = models.MediaContentReviewOcrTextSegmentItem;
const AudioVolumeParam = models.AudioVolumeParam;
const AiReviewTaskPornAsrResult = models.AiReviewTaskPornAsrResult;
const ModifyClassResponse = models.ModifyClassResponse;
const EditMediaFileInfo = models.EditMediaFileInfo;
const ProcessMediaByProcedureResponse = models.ProcessMediaByProcedureResponse;
const PullUploadResponse = models.PullUploadResponse;
const FaceConfigureInfo = models.FaceConfigureInfo;
const AiRecognitionTaskFaceResultOutput = models.AiRecognitionTaskFaceResultOutput;
const PornImgReviewTemplateInfoForUpdate = models.PornImgReviewTemplateInfoForUpdate;
const EditMediaTask = models.EditMediaTask;
const PornImgReviewTemplateInfo = models.PornImgReviewTemplateInfo;
const AiReviewPoliticalOcrTaskOutput = models.AiReviewPoliticalOcrTaskOutput;
const OcrFullTextConfigureInfo = models.OcrFullTextConfigureInfo;
const CommitUploadRequest = models.CommitUploadRequest;
const WatermarkCycleConfigForUpdate = models.WatermarkCycleConfigForUpdate;
const SnapshotByTimeOffsetTask2017 = models.SnapshotByTimeOffsetTask2017;
const MediaClassInfo = models.MediaClassInfo;
const DescribeTranscodeTemplatesResponse = models.DescribeTranscodeTemplatesResponse;
const DeleteAnimatedGraphicsTemplateRequest = models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models.DeleteSnapshotByTimeOffsetTemplateRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models.DescribeAnimatedGraphicsTemplatesResponse;
const MediaAiAnalysisFrameTagItem = models.MediaAiAnalysisFrameTagItem;
const SampleSnapshotTaskInput = models.SampleSnapshotTaskInput;
const TerrorismConfigureInfo = models.TerrorismConfigureInfo;
const PoliticalAsrReviewTemplateInfo = models.PoliticalAsrReviewTemplateInfo;
const CreateAnimatedGraphicsTemplateResponse = models.CreateAnimatedGraphicsTemplateResponse;
const SampleSnapshotTemplate = models.SampleSnapshotTemplate;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const DescribePersonSamplesRequest = models.DescribePersonSamplesRequest;
const AiRecognitionTaskFaceResultItem = models.AiRecognitionTaskFaceResultItem;
const AiAnalysisTaskCoverInput = models.AiAnalysisTaskCoverInput;
const DescribeStorageDetailsRequest = models.DescribeStorageDetailsRequest;
const MediaTrack = models.MediaTrack;
const StorageStatData = models.StorageStatData;
const MediaOutputInfo = models.MediaOutputInfo;
const EditMediaTaskOutput = models.EditMediaTaskOutput;
const HighlightSegmentItem = models.HighlightSegmentItem;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const ComposeMediaOutput = models.ComposeMediaOutput;
const PullUploadTask = models.PullUploadTask;
const ProhibitedConfigureInfoForUpdate = models.ProhibitedConfigureInfoForUpdate;
const FrameTagConfigureInfoForUpdate = models.FrameTagConfigureInfoForUpdate;
const CreateImageSpriteTemplateResponse = models.CreateImageSpriteTemplateResponse;
const DescribeAIRecognitionTemplatesRequest = models.DescribeAIRecognitionTemplatesRequest;
const ModifyWatermarkTemplateResponse = models.ModifyWatermarkTemplateResponse;
const AiRecognitionResult = models.AiRecognitionResult;


/**
 * vod client
 * @class
 */
class VodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vod.tencentcloudapi.com", "2018-07-17", credential, region, profile);
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
     * This API is used to edit a video (by clipping, splicing, etc.) to generate a new VOD video. Editing features include:

1. Clipping a file in VOD to generate a new video;
2. Splicing multiple files in VOD to generate a new video;
3. Clipping multiple files in VOD and then splicing the clips to generate a new video;
4. Directly generating a new video from a stream in VOD;
5. Clipping a stream in VOD to generate a new video;
6. Splicing multiple streams in VOD to generate a new video;
7. Clipping multiple streams in VOD and then splicing the clips to generate a new video.

You can also specify whether to perform a task flow for the generated new video.
     * @param {EditMediaRequest} req
     * @param {function(string, EditMediaResponse):void} cb
     * @public
     */
    EditMedia(req, cb) {
        let resp = new EditMediaResponse();
        this.request("EditMedia", req, resp, cb);
    }

    /**
     * This API is used to query the list of VOD domain names.
     * @param {DescribeVodDomainsRequest} req
     * @param {function(string, DescribeVodDomainsResponse):void} cb
     * @public
     */
    DescribeVodDomains(req, cb) {
        let resp = new DescribeVodDomainsResponse();
        this.request("DescribeVodDomains", req, resp, cb);
    }

    /**
     * * This API is used to apply for uploading a media file (and cover file) to VOD and obtain the metadata of file storage (including upload path and upload signature) for subsequent use by the uploading API.
* For the detailed upload process, please see [Overview of Upload from Client](https://intl.cloud.tencent.com/document/product/266/9759?from_cn_redirect=1).
     * @param {ApplyUploadRequest} req
     * @param {function(string, ApplyUploadResponse):void} cb
     * @public
     */
    ApplyUpload(req, cb) {
        let resp = new ApplyUploadResponse();
        this.request("ApplyUpload", req, resp, cb);
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
     * This API is used to get the list of video content analysis templates based on unique template ID. The returned result includes all eligible custom and [preset video content analysis templates](https://intl.cloud.tencent.com/document/product/266/33476?from_cn_redirect=1#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.88.86.E6.9E.90.E6.A8.A1.E6.9D.BF).
     * @param {DescribeAIAnalysisTemplatesRequest} req
     * @param {function(string, DescribeAIAnalysisTemplatesResponse):void} cb
     * @public
     */
    DescribeAIAnalysisTemplates(req, cb) {
        let resp = new DescribeAIAnalysisTemplatesResponse();
        this.request("DescribeAIAnalysisTemplates", req, resp, cb);
    }

    /**
     * * This API is used to get event notifications from the business server through [reliable callback](https://intl.cloud.tencent.com/document/product/266/33948).
* The API gets event data through long polling. That is, if there is any unconsumed event on the server, the event notification will be returned to the requester immediately. If there is no unconsumed event on the server, the request will be suspended in the backend until a new event is generated.
* The request can be suspended for up to 5 seconds. It’s recommended to set the request timeout period to 10 seconds.
* Event notifications not pulled will be retained for up to 4 days and may be cleared after this period.
* After the API returns an event, the caller must call the [ConfirmEvents](https://intl.cloud.tencent.com/document/product/266/34184) API within <font color="red">30 seconds</font> to confirm that the event notification has been processed. Otherwise, the event notification will be pulled again after <font color="red">30 seconds</font>.
* This API can get up to 16 event notifications at a time.
     * @param {PullEventsRequest} req
     * @param {function(string, PullEventsResponse):void} cb
     * @public
     */
    PullEvents(req, cb) {
        let resp = new PullEventsResponse();
        this.request("PullEvents", req, resp, cb);
    }

    /**
     * This API is used to initiate a processing task for a VOD video with a task flow template.
There are two ways to create a task flow template:
1. Create and modify a task flow template in the console;
2. Create a task flow template through the task flow template API.
     * @param {ProcessMediaByProcedureRequest} req
     * @param {function(string, ProcessMediaByProcedureResponse):void} cb
     * @public
     */
    ProcessMediaByProcedure(req, cb) {
        let resp = new ProcessMediaByProcedureResponse();
        this.request("ProcessMediaByProcedure", req, resp, cb);
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
     * <b>This API is disused and replaced by [DescribeMediaProcessUsageData](https://intl.cloud.tencent.com/document/product/266/41464?from_cn_redirect=1).</b>

This API returns the video content duration for intelligent recognition in seconds per day within the queried period.

1. The API is used to query statistics on the video content duration for intelligent recognition in the last 365 days.
2. The query period is up to 90 days.
     * @param {DescribeReviewDetailsRequest} req
     * @param {function(string, DescribeReviewDetailsResponse):void} cb
     * @public
     */
    DescribeReviewDetails(req, cb) {
        let resp = new DescribeReviewDetailsResponse();
        this.request("DescribeReviewDetails", req, resp, cb);
    }

    /**
     * This API is used to perform paginated queries of keyword sample information by use case, keyword, and tag.
     * @param {DescribeWordSamplesRequest} req
     * @param {function(string, DescribeWordSamplesResponse):void} cb
     * @public
     */
    DescribeWordSamples(req, cb) {
        let resp = new DescribeWordSamplesResponse();
        this.request("DescribeWordSamples", req, resp, cb);
    }

    /**
     * This API is used to query the storage capacity usage and number of files.
     * @param {DescribeStorageDataRequest} req
     * @param {function(string, DescribeStorageDataResponse):void} cb
     * @public
     */
    DescribeStorageData(req, cb) {
        let resp = new DescribeStorageDataResponse();
        this.request("DescribeStorageData", req, resp, cb);
    }

    /**
     * This API is used to modify a custom video content analysis template.

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
     * This API is used to delete a custom task flow template.  
     * @param {DeleteProcedureTemplateRequest} req
     * @param {function(string, DeleteProcedureTemplateResponse):void} cb
     * @public
     */
    DeleteProcedureTemplate(req, cb) {
        let resp = new DeleteProcedureTemplateResponse();
        this.request("DeleteProcedureTemplate", req, resp, cb);
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
     * This API is used to create an adaptive bitrate streaming template. Up to 100 templates can be created.
     * @param {CreateAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, CreateAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    CreateAdaptiveDynamicStreamingTemplate(req, cb) {
        let resp = new CreateAdaptiveDynamicStreamingTemplateResponse();
        this.request("CreateAdaptiveDynamicStreamingTemplate", req, resp, cb);
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
     * This API is used to query the download links of CDN access logs of a VOD domain name.
    1. Only download links of CDN logs for the last 30 days can be queried.
    2. By default, CDN generates a log file every hour. If there is no CDN access for a certain hour, no log file will be generated for the hour.    
    3. A CDN log download link is valid for 24 hours.
     * @param {DescribeCdnLogsRequest} req
     * @param {function(string, DescribeCdnLogsResponse):void} cb
     * @public
     */
    DescribeCdnLogs(req, cb) {
        let resp = new DescribeCdnLogsResponse();
        this.request("DescribeCdnLogs", req, resp, cb);
    }

    /**
     * This API is used to modify the category of a media file.
     * @param {ModifyClassRequest} req
     * @param {function(string, ModifyClassResponse):void} cb
     * @public
     */
    ModifyClass(req, cb) {
        let resp = new ModifyClassResponse();
        this.request("ModifyClass", req, resp, cb);
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
     * This API is used to reset a custom task flow template.  
     * @param {ResetProcedureTemplateRequest} req
     * @param {function(string, ResetProcedureTemplateResponse):void} cb
     * @public
     */
    ResetProcedureTemplate(req, cb) {
        let resp = new ResetProcedureTemplateResponse();
        this.request("ResetProcedureTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the CDN statistics of VOD such as traffic and bandwidth.
   1. Only CDN usage data for the last 365 days can be queried.
   2. The query time range cannot be more than 90 days.
   3. The time granularity of usage data can be specified, including 5-minute, 1-hour, and 1-day.
   4. Traffic refers to the total traffic within the query time granularity, while bandwidth the peak bandwidth.
     * @param {DescribeCDNUsageDataRequest} req
     * @param {function(string, DescribeCDNUsageDataResponse):void} cb
     * @public
     */
    DescribeCDNUsageData(req, cb) {
        let resp = new DescribeCDNUsageDataResponse();
        this.request("DescribeCDNUsageData", req, resp, cb);
    }

    /**
     * This API is used to create a custom transcoding template. Up to 100 templates can be created.
     * @param {CreateTranscodeTemplateRequest} req
     * @param {function(string, CreateTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateTranscodeTemplate(req, cb) {
        let resp = new CreateTranscodeTemplateResponse();
        this.request("CreateTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to query CDN bandwidth, traffic, and other data of VOD domain names.
* The query period is up to 90 days.
* You can query data of different service regions.
* You can query data of Chinese mainland by region and ISP.
     * @param {DescribeCDNStatDetailsRequest} req
     * @param {function(string, DescribeCDNStatDetailsResponse):void} cb
     * @public
     */
    DescribeCDNStatDetails(req, cb) {
        let resp = new DescribeCDNStatDetailsResponse();
        this.request("DescribeCDNStatDetails", req, resp, cb);
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
     * * A category can be deleted only if it has no subcategories and associated media files;
* Otherwise, [delete the media files](https://intl.cloud.tencent.com/document/product/266/31764?from_cn_redirect=1) and subcategories first before deleting the category.
     * @param {DeleteClassRequest} req
     * @param {function(string, DeleteClassResponse):void} cb
     * @public
     */
    DeleteClass(req, cb) {
        let resp = new DeleteClassResponse();
        this.request("DeleteClass", req, resp, cb);
    }

    /**
     * This API is only used in special scenarios of custom development. Unless requested by VOD customer service, please do not call it.
     * @param {ExecuteFunctionRequest} req
     * @param {function(string, ExecuteFunctionResponse):void} cb
     * @public
     */
    ExecuteFunction(req, cb) {
        let resp = new ExecuteFunctionResponse();
        this.request("ExecuteFunction", req, resp, cb);
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
     * This API is used to query the information of video processing usage within the specified time range.
   1. Statistics on video processing for the last 365 days can be queried.
   2. The query time range cannot be more than 90 days.
     * @param {DescribeMediaProcessUsageDataRequest} req
     * @param {function(string, DescribeMediaProcessUsageDataResponse):void} cb
     * @public
     */
    DescribeMediaProcessUsageData(req, cb) {
        let resp = new DescribeMediaProcessUsageDataResponse();
        this.request("DescribeMediaProcessUsageData", req, resp, cb);
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
     * This API is used to compose a media file, including:

1. Clipping a media file to generate a new media file;
2. Clipping and splicing multiple media files to generate a new media file;
3. Clipping and splicing the media streams of multiple media files to generate a new media file;
     * @param {ComposeMediaRequest} req
     * @param {function(string, ComposeMediaResponse):void} cb
     * @public
     */
    ComposeMedia(req, cb) {
        let resp = new ComposeMediaResponse();
        this.request("ComposeMedia", req, resp, cb);
    }

    /**
     * This API is used to create custom intelligent video content recognition templates. Up to 50 templates can be created.
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
     * This API is used to delete a custom video content analysis template.

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
     * 1. This API can get multiple types of information of multiple media files, including:
    1. Basic information (basicInfo): media name, category, playback address, cover image, etc.
    2. Metadata (metaData): size, duration, video stream information, audio stream information, etc.
    3. Information of the transcoding result (transcodeInfo): addresses, video stream parameters, and audio stream parameters of the media files with various specifications generated by transcoding a media file.
    4. Information of the animated image generating result (animatedGraphicsInfo): information of an animated image (such as .gif) generated from a video.
    5. Information of a sampled screenshot (sampleSnapshotInfo): information of a sampled screenshot of a video.
    6. Information of an image sprite (imageSpriteInfo): information of an image sprite generated from a video.
    7. Information of a time point screenshot (snapshotByTimeOffsetInfo): information of a time point screenshot of a video.
    8. Information of a timestamp (keyFrameDescInfo): information of a timestamp set for a video.
    9. Information of transcoding to adaptive bitrate streaming (adaptiveDynamicStreamingInfo): specification, encryption type, container format, etc.
2. The return packet can be configured to only contain certain information.
     * @param {DescribeMediaInfosRequest} req
     * @param {function(string, DescribeMediaInfosResponse):void} cb
     * @public
     */
    DescribeMediaInfos(req, cb) {
        let resp = new DescribeMediaInfosResponse();
        this.request("DescribeMediaInfos", req, resp, cb);
    }

    /**
     * Live clipping means that during a live broadcast (before it ends), you can select a segment of previous live broadcast content to generate a new video (in HLS format) in real time and share it immediately or store it persistently.

VOD supports two live clipping modes:
- Persistent clipping: in this mode, the clipped video is saved as an independent video file with a `FileId`, which is suitable for **persistently storing** highlights;
- Temporary clipping: in this mode, the clipped video is part of the LVB recording file with no `FileId`, which is suitable for **temporarily sharing** highlights;

Note:
- The live clipping feature can be used only when [time shifting](https://intl.cloud.tencent.com/document/product/267/32742?from_cn_redirect=1) has been enabled for the target live stream.
- Live clipping is performed based on the m3u8 file generated by LVB recording, so its minimum clipping granularity is one ts segment rather than at or below the second level.


### Persistent clipping
In persistent clipping mode, the clipped video is saved as an independent video file with a `FileId`, and its lifecycle is not subject to the source LVB recording video (even if the source video is deleted, the clipped video will not be affected in any way). It can be further processed (transcoded, published on WeChat, etc.).

An example is as follows: for a complete football match, the source LVB recording video may be up to 2 hours in length. You want to store this video for only 2 months for the purpose of cost savings. However, you want to specify a longer retention period for the "highlights" video created by live clipping and perform additional VOD operations on it such as transcoding and release on WeChat. In this case, you need to choose the persistent clipping mode of live clipping.

The advantage of persistent clipping is that the clipped video has a lifecycle independent of the source recording video and can be managed independently and stored persistently.

### Temporary clipping
In temporary clipping mode, the clipped video (m3u8 file) shares the same ts segments with the LVB recording video instead of being an independent video. It only has a playback URL but has no `FileId`, and its validity period is the same as that of the LVB recording video; therefore, if the LVB recording video is deleted, it cannot be played back.

For temporary clipping, as the clipping result is not an independent video, it will not be included in VOD's media asset management (for example, it will not be counted in the total videos in the console), and no video processing operations can be separately performed on it, such as transcoding and release on WeChat.

The advantage of temporary clipping is that the clipping operation is very "lightweight" and does not incur additional storage fees. However, the clipped video has the same lifecycle as the source recording video and cannot be further transcoded or processed.
     * @param {LiveRealTimeClipRequest} req
     * @param {function(string, LiveRealTimeClipResponse):void} cb
     * @public
     */
    LiveRealTimeClip(req, cb) {
        let resp = new LiveRealTimeClipResponse();
        this.request("LiveRealTimeClip", req, resp, cb);
    }

    /**
     * This API is used to pull a video on the internet to the VOD platform.
     * @param {PullUploadRequest} req
     * @param {function(string, PullUploadResponse):void} cb
     * @public
     */
    PullUpload(req, cb) {
        let resp = new PullUploadResponse();
        this.request("PullUpload", req, resp, cb);
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
     * This API is used to enable or disable the acceleration region of a domain name on VOD.
1. You can enable or disable acceleration regions of only domain names whose status is `Online`.
     * @param {ModifyVodDomainAccelerateConfigRequest} req
     * @param {function(string, ModifyVodDomainAccelerateConfigResponse):void} cb
     * @public
     */
    ModifyVodDomainAccelerateConfig(req, cb) {
        let resp = new ModifyVodDomainAccelerateConfigResponse();
        this.request("ModifyVodDomainAccelerateConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a superplayer configuration.  
*Note: preset player configurations cannot be deleted.*
     * @param {DeleteSuperPlayerConfigRequest} req
     * @param {function(string, DeleteSuperPlayerConfigResponse):void} cb
     * @public
     */
    DeleteSuperPlayerConfig(req, cb) {
        let resp = new DeleteSuperPlayerConfigResponse();
        this.request("DeleteSuperPlayerConfig", req, resp, cb);
    }

    /**
     * This API is used to get the list of task flow template details by task flow template name.
     * @param {DescribeProcedureTemplatesRequest} req
     * @param {function(string, DescribeProcedureTemplatesResponse):void} cb
     * @public
     */
    DescribeProcedureTemplates(req, cb) {
        let resp = new DescribeProcedureTemplatesResponse();
        this.request("DescribeProcedureTemplates", req, resp, cb);
    }

    /**
     * This API is used to delete an acceleration domain name from VOD.
1. Before deleting a domain name, disable its acceleration in all regions.
     * @param {DeleteVodDomainRequest} req
     * @param {function(string, DeleteVodDomainResponse):void} cb
     * @public
     */
    DeleteVodDomain(req, cb) {
        let resp = new DeleteVodDomainResponse();
        this.request("DeleteVodDomain", req, resp, cb);
    }

    /**
     * This API is used to parse the index file content and return the list of segment files to be uploaded when an HLS video is uploaded. A segment file path must be a relative path of the current directory or subdirectory instead of a URL or absolute path.
     * @param {ParseStreamingManifestRequest} req
     * @param {function(string, ParseStreamingManifestResponse):void} cb
     * @public
     */
    ParseStreamingManifest(req, cb) {
        let resp = new ParseStreamingManifestResponse();
        this.request("ParseStreamingManifest", req, resp, cb);
    }

    /**
     * This API is used to create a custom task flow template. Up to 50 templates can be created.
     * @param {CreateProcedureTemplateRequest} req
     * @param {function(string, CreateProcedureTemplateResponse):void} cb
     * @public
     */
    CreateProcedureTemplate(req, cb) {
        let resp = new CreateProcedureTemplateResponse();
        this.request("CreateProcedureTemplate", req, resp, cb);
    }

    /**
     * 1. This API is used to prefetch a list of specified URLs.
2. The URL domain names must have already been registered with VOD.
3. Up to 20 URLs can be specified in one request.
     * @param {PushUrlCacheRequest} req
     * @param {function(string, PushUrlCacheResponse):void} cb
     * @public
     */
    PushUrlCache(req, cb) {
        let resp = new PushUrlCacheResponse();
        this.request("PushUrlCache", req, resp, cb);
    }

    /**
     * * This API is used to delete a media file and its processed files, such as the transcoded video files, image sprites, screenshots, and videos for publishing on WeChat.
* You can delete the original files, transcoded video files, and videos for publishing on WeChat, etc. of videos with specified IDs.
* Note: after the original file of a video is deleted, you cannot transcode the video, publish it on WeChat, or perform other operations on it.
     * @param {DeleteMediaRequest} req
     * @param {function(string, DeleteMediaResponse):void} cb
     * @public
     */
    DeleteMedia(req, cb) {
        let resp = new DeleteMediaResponse();
        this.request("DeleteMedia", req, resp, cb);
    }

    /**
     * This API is used to create a superplayer configuration. Up to 100 configurations can be created.
     * @param {CreateSuperPlayerConfigRequest} req
     * @param {function(string, CreateSuperPlayerConfigResponse):void} cb
     * @public
     */
    CreateSuperPlayerConfig(req, cb) {
        let resp = new CreateSuperPlayerConfigResponse();
        this.request("CreateSuperPlayerConfig", req, resp, cb);
    }

    /**
     * This API is used to modify sample information according to the sample ID. You can modify the name and description, add, delete, and reset facial features or tags. Leave at least one image after deleting facial features. To leave no image, please use the reset operation.
     * @param {ModifyPersonSampleRequest} req
     * @param {function(string, ModifyPersonSampleResponse):void} cb
     * @public
     */
    ModifyPersonSample(req, cb) {
        let resp = new ModifyPersonSampleResponse();
        this.request("ModifyPersonSample", req, resp, cb);
    }

    /**
     * This API is used to delete custom intelligent video content recognition templates.
     * @param {DeleteContentReviewTemplateRequest} req
     * @param {function(string, DeleteContentReviewTemplateResponse):void} cb
     * @public
     */
    DeleteContentReviewTemplate(req, cb) {
        let resp = new DeleteContentReviewTemplateResponse();
        this.request("DeleteContentReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a custom video content analysis template. Up to 50 templates can be created.
     * @param {CreateAIAnalysisTemplateRequest} req
     * @param {function(string, CreateAIAnalysisTemplateResponse):void} cb
     * @public
     */
    CreateAIAnalysisTemplate(req, cb) {
        let resp = new CreateAIAnalysisTemplateResponse();
        this.request("CreateAIAnalysisTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify domain name settings, such as the hotlink protection configuration.
1. You can modify settings of only domain names whose status is `Online`.
     * @param {ModifyVodDomainConfigRequest} req
     * @param {function(string, ModifyVodDomainConfigResponse):void} cb
     * @public
     */
    ModifyVodDomainConfig(req, cb) {
        let resp = new ModifyVodDomainConfigResponse();
        this.request("ModifyVodDomainConfig", req, resp, cb);
    }

    /**
     * * After the `PullEvents` API is called to get an event, this API must be called to confirm that the message has been received;
* After the event handler is obtained, the validity period of waiting for confirmation is 30 seconds. If the wait exceeds 30 seconds, a parameter error will be reported (4000);
* For more information, please see the [reliable callback](https://intl.cloud.tencent.com/document/product/266/33779?from_cn_redirect=1#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) of event notification.
     * @param {ConfirmEventsRequest} req
     * @param {function(string, ConfirmEventsResponse):void} cb
     * @public
     */
    ConfirmEvents(req, cb) {
        let resp = new ConfirmEventsResponse();
        this.request("ConfirmEvents", req, resp, cb);
    }

    /**
     * This API is <font color='red'>disused</font>, please use [ProcessMedia](https://intl.cloud.tencent.com/document/product/862/37578?from_cn_redirect=1) API of MPS, with the input parameter `InputInfo.UrlInputInfo.Url` set to a video URL.
     * @param {ProcessMediaByUrlRequest} req
     * @param {function(string, ProcessMediaByUrlResponse):void} cb
     * @public
     */
    ProcessMediaByUrl(req, cb) {
        let resp = new ProcessMediaByUrlResponse();
        this.request("ProcessMediaByUrl", req, resp, cb);
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
     * This API is used to get the list of intelligent video content recognition template details according to unique template IDs. The return result includes all eligible custom and [preset intelligent video content recognition templates](https://intl.cloud.tencent.com/document/product/266/33932).
     * @param {DescribeContentReviewTemplatesRequest} req
     * @param {function(string, DescribeContentReviewTemplatesResponse):void} cb
     * @public
     */
    DescribeContentReviewTemplates(req, cb) {
        let resp = new DescribeContentReviewTemplatesResponse();
        this.request("DescribeContentReviewTemplates", req, resp, cb);
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
     * This API is used to query VOD storage usage in bytes within the query period.
    1. You can only query storage usage for the last 365 days.
    2. The query period is up to 90 days.
    3. The query period at minute-level granularity is up to 7 days.
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
     * This API is used to add an acceleration domain name to VOD. One user can add up to 20 domain names.
1. After a domain name is added, VOD will deploy it, and it takes about 2 minutes for the domain name status to change from `Deploying` to `Online`.
     * @param {CreateVodDomainRequest} req
     * @param {function(string, CreateVodDomainResponse):void} cb
     * @public
     */
    CreateVodDomain(req, cb) {
        let resp = new CreateVodDomainResponse();
        this.request("CreateVodDomain", req, resp, cb);
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
     * This API is used to query the information of samples and supports paginated queries by sample ID, name, and tag.
     * @param {DescribePersonSamplesRequest} req
     * @param {function(string, DescribePersonSamplesResponse):void} cb
     * @public
     */
    DescribePersonSamples(req, cb) {
        let resp = new DescribePersonSamplesResponse();
        this.request("DescribePersonSamples", req, resp, cb);
    }

    /**
     * This API is used to delete a custom video content recognition template.
     * @param {DeleteAIRecognitionTemplateRequest} req
     * @param {function(string, DeleteAIRecognitionTemplateResponse):void} cb
     * @public
     */
    DeleteAIRecognitionTemplate(req, cb) {
        let resp = new DeleteAIRecognitionTemplateResponse();
        this.request("DeleteAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a VOD subapplication.
     * @param {CreateSubAppIdRequest} req
     * @param {function(string, CreateSubAppIdResponse):void} cb
     * @public
     */
    CreateSubAppId(req, cb) {
        let resp = new CreateSubAppIdResponse();
        this.request("CreateSubAppId", req, resp, cb);
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
     * * After a media file is forbidden, except previewing it in the VOD Console, accessing the URLs of its various resources (such as source file, output files, and screenshots) in other scenarios will return error 403.
  It takes about 5-10 minutes for a forbidding/unblocking operation to take effect across the entire network.
     * @param {ForbidMediaDistributionRequest} req
     * @param {function(string, ForbidMediaDistributionResponse):void} cb
     * @public
     */
    ForbidMediaDistribution(req, cb) {
        let resp = new ForbidMediaDistributionResponse();
        this.request("ForbidMediaDistribution", req, resp, cb);
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
     * This API is used to modify a superplayer configuration.
     * @param {ModifySuperPlayerConfigRequest} req
     * @param {function(string, ModifySuperPlayerConfigResponse):void} cb
     * @public
     */
    ModifySuperPlayerConfig(req, cb) {
        let resp = new ModifySuperPlayerConfigResponse();
        this.request("ModifySuperPlayerConfig", req, resp, cb);
    }

    /**
     * * This API is used to categorize media assets for management;
* It does not affect the categories of existing media assets. If you want to modify the category of a media asset, call the [ModifyMediaInfo](https://intl.cloud.tencent.com/document/product/266/31762?from_cn_redirect=1) API.
* There can be up to 4 levels of categories.
* One category can have up to 500 subcategories under it.
     * @param {CreateClassRequest} req
     * @param {function(string, CreateClassResponse):void} cb
     * @public
     */
    CreateClass(req, cb) {
        let resp = new CreateClassResponse();
        this.request("CreateClass", req, resp, cb);
    }

    /**
     * This API is used to create keyword samples in batches for using OCR and ASR technologies to perform video processing operations such as content recognition and inappropriate information recognition.
     * @param {CreateWordSamplesRequest} req
     * @param {function(string, CreateWordSamplesResponse):void} cb
     * @public
     */
    CreateWordSamples(req, cb) {
        let resp = new CreateWordSamplesResponse();
        this.request("CreateWordSamples", req, resp, cb);
    }

    /**
     * This API is used to modify subapplication information, but it is not allowed to modify primary application information.
     * @param {ModifySubAppIdInfoRequest} req
     * @param {function(string, ModifySubAppIdInfoResponse):void} cb
     * @public
     */
    ModifySubAppIdInfo(req, cb) {
        let resp = new ModifySubAppIdInfoResponse();
        this.request("ModifySubAppIdInfo", req, resp, cb);
    }

    /**
     * This API is used to query the list of transcoding to adaptive bitrate streaming templates and supports paged queries by filters.
     * @param {DescribeAdaptiveDynamicStreamingTemplatesRequest} req
     * @param {function(string, DescribeAdaptiveDynamicStreamingTemplatesResponse):void} cb
     * @public
     */
    DescribeAdaptiveDynamicStreamingTemplates(req, cb) {
        let resp = new DescribeAdaptiveDynamicStreamingTemplatesResponse();
        this.request("DescribeAdaptiveDynamicStreamingTemplates", req, resp, cb);
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
     * * This API is used to get the information of all categories.
     * @param {DescribeAllClassRequest} req
     * @param {function(string, DescribeAllClassResponse):void} cb
     * @public
     */
    DescribeAllClass(req, cb) {
        let resp = new DescribeAllClassResponse();
        this.request("DescribeAllClass", req, resp, cb);
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
     * This API is used to get the list of video content recognition templates based on unique template ID. The return result includes all eligible custom and [preset video content recognition templates](https://intl.cloud.tencent.com/document/product/266/33476?from_cn_redirect=1#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E8.AF.86.E5.88.AB.E6.A8.A1.E6.9D.BF).
     * @param {DescribeAIRecognitionTemplatesRequest} req
     * @param {function(string, DescribeAIRecognitionTemplatesResponse):void} cb
     * @public
     */
    DescribeAIRecognitionTemplates(req, cb) {
        let resp = new DescribeAIRecognitionTemplatesResponse();
        this.request("DescribeAIRecognitionTemplates", req, resp, cb);
    }

    /**
     * This API is used to create a custom video content recognition template. Up to 50 templates can be created.
     * @param {CreateAIRecognitionTemplateRequest} req
     * @param {function(string, CreateAIRecognitionTemplateResponse):void} cb
     * @public
     */
    CreateAIRecognitionTemplate(req, cb) {
        let resp = new CreateAIRecognitionTemplateResponse();
        this.request("CreateAIRecognitionTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the list of the primary application and subapplications of the current account.
     * @param {DescribeSubAppIdsRequest} req
     * @param {function(string, DescribeSubAppIdsResponse):void} cb
     * @public
     */
    DescribeSubAppIds(req, cb) {
        let resp = new DescribeSubAppIdsResponse();
        this.request("DescribeSubAppIds", req, resp, cb);
    }

    /**
     * This API is used to confirm the result of uploading a media file (and cover file) to VOD, store the media information, and return the playback address and ID of the file.
     * @param {CommitUploadRequest} req
     * @param {function(string, CommitUploadResponse):void} cb
     * @public
     */
    CommitUpload(req, cb) {
        let resp = new CommitUploadResponse();
        this.request("CommitUpload", req, resp, cb);
    }

    /**
     * This API is used to modify a custom video content recognition template.
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
     * This API is used to search for media information and supports filtering and sorting the returned results in many ways. You can:
- Specify the file ID set `FileIds` to return the media files with any ID in the set.
- Fuzzily search by multiple media filenames `Names` or multiple descriptions `Descriptions`.
- Search by multiple filename prefixes `NamePrefixes`.
- Specify the category set `ClassIds` (please see the input parameters) to return the media files in any category in the set. For example, assuming that there are categories of `Movies`, `TV Series`, and `Variety Shows`, and there are subcategories of `History`, `Action`, and `Romance` in the category of `Movies`, if `Movies` and `TV Series` are specified in `ClassIds`, then all the subcategories under `Movies` and `TV Series` will be returned. However, if `History` and `Action` are specified in `ClassIds`, only the media files in these two subcategories will be returned.
- Specify the tag set `Tags` (please see the input parameters) to return the media files with any tag in the set. For example, assuming that there are tags of `ACG`, `Drama`, and `YTPMV`, if `ACG` and `YTPMV` are specified in `Tags`, then any media files with either tag will be retrieved.
- Specify the file type set `Categories` (please see the input parameters) to return the media files of any type in the set. For example, assuming that there are `Video`, `Audio`, and `Image` file types, if `Video` and `Audio` are specified in `Categories`, then all media files of these two types will be retrieved.
- Specify the source set `SourceTypes` (please see the input parameters) to return the media files from any source in the set. For example, assuming that there are `Record` (live recording) and `Upload` (upload) sources, if `Record` and `Upload` are specified in `SourceTypes`, then all media files from these two sources will be retrieved.
- Specify the live stream code set `StreamIds` (please see the input parameters) to filter live recording media files.
- Specify the video ID set `Vids` (please see the input parameters) to filter live recording media files.
- Specify the creation time range to filter media files.
- Specify a text string `Text` for fuzzy search by media filenames or descriptions. (This is not recommended. `Names`, `NamePrefixes`, or `Descriptions` should be used instead.)
- Specify a media file source `SourceType` for search. (This is not recommended. `SourceTypes` should be used instead.)
- Specify a live stream code `StreamId` for search. (This is not recommended. `StreamIds` should be used instead.)
- Specify a video ID `Vid` for search. (This is not recommended. `Vids` should be used instead.)
- Specify a creation start time `StartTime` for search. (This is not recommended. `CreateTime` should be used instead.)
- Specify a creation end time `EndTime` for search. (This is not recommended. `CreateTime` should be used instead.)
- Search by any combination of the parameters above. For example, you can search for the media files with the tags of "Drama" and "Suspense" in the category of "Movies" or "TV Series" created between 12:00:00, December 1, 2018 and 12:00:00, December 8, 2018. Please note that for any parameter that supports array input, the search logic between its elements is "OR", and the logical relationship between parameters is "AND".

- Sort the results by creation time and return them in multiple pages by specifying `Offset` and `Limit` (please see the input parameters).
- Specify `Filters` to return specified types of media information (all types will be returned by default). Valid values:
    1. Basic information `basicInfo`: media name, category, playback address, cover image, etc.
    2. Metadata `metaData`: size, duration, video stream information, audio stream information, etc.
    3. Information of the transcoding result `transcodeInfo`: addresses, video stream parameters, and audio stream parameters of various specifications generated by the file transcoding.
    4. Information of the animated image generating result `animatedGraphicsInfo`: information of an animated image (such as .gif) generated from a video.
    5. Information of a sampled screenshot `sampleSnapshotInfo`: information of a sampled screenshot of a video.
    6. Information of an image sprite `imageSpriteInfo`: information of an image sprite generated from a video.
    7. Information of a point-in-time screenshot `snapshotByTimeOffsetInfo`: information of a point-in-time screenshot of a video.
    8. Information of a timestamp `keyFrameDescInfo`: information of a timestamp configured for a video.
    9. Information of transcoding to adaptive bitrate streaming `adaptiveDynamicStreamingInfo`: specification, encryption type, muxing format, etc.

<div id="maxResultsDesc">Upper limit of returned results:</div>
- The <b><a href="#p_offset">Offset</a> and <a href="#p_limit">Limit</a> parameters determine the number of search results on one single page. Note: if both of them use the default value, this API will return up to 10 results.</b>
- <b>Up to 5,000 search results can be returned, and excessive ones will not be displayed. If there are too many search results, you are recommended to use more filters to narrow down the search results.</b>
     * @param {SearchMediaRequest} req
     * @param {function(string, SearchMediaResponse):void} cb
     * @public
     */
    SearchMedia(req, cb) {
        let resp = new SearchMediaResponse();
        this.request("SearchMedia", req, resp, cb);
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
     * This API is used to delete samples according to sample IDs.
     * @param {DeletePersonSampleRequest} req
     * @param {function(string, DeletePersonSampleResponse):void} cb
     * @public
     */
    DeletePersonSample(req, cb) {
        let resp = new DeletePersonSampleResponse();
        this.request("DeletePersonSample", req, resp, cb);
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
     * This API is used to associate/disassociate subtitles with/from a media file of a specific adaptive bitrate streaming template ID.
     * @param {AttachMediaSubtitlesRequest} req
     * @param {function(string, AttachMediaSubtitlesResponse):void} cb
     * @public
     */
    AttachMediaSubtitles(req, cb) {
        let resp = new AttachMediaSubtitlesResponse();
        this.request("AttachMediaSubtitles", req, resp, cb);
    }

    /**
     * This API is used to query the download links of playback statistics files.
* You can query the download links of playback statistics files in last 30 days.
* Every day, VOD will analyze CDN request logs of the previous day and then generate a playback statistics file.
* A playback statistics file includes playback times and traffic of media files.
* Notes on playback times:
    1. HLS file: VOD counts playback times when accessing M3U8 files, but not when accessing TS files.
    2. Other files (MP4 files for example): VOD does not count playback times when the playback request carries the `range` parameter and the `start` parameter in `range` is not `0`. In other cases, VOD counts playback times.
* Statistics on playback devices: VOD counts playback times on mobile clients when the playback request carries the `UserAgent` parameter which includes an identifier such as `Android` or `iPhone`. In other cases, VOD counts playback times on PC clients.
     * @param {DescribeDailyPlayStatFileListRequest} req
     * @param {function(string, DescribeDailyPlayStatFileListResponse):void} cb
     * @public
     */
    DescribeDailyPlayStatFileList(req, cb) {
        let resp = new DescribeDailyPlayStatFileListResponse();
        this.request("DescribeDailyPlayStatFileList", req, resp, cb);
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
     * This API is used to publish a VOD video on WeChat Mini Program for playback in the WeChat Mini Program player.
     * @param {WeChatMiniProgramPublishRequest} req
     * @param {function(string, WeChatMiniProgramPublishResponse):void} cb
     * @public
     */
    WeChatMiniProgramPublish(req, cb) {
        let resp = new WeChatMiniProgramPublishResponse();
        this.request("WeChatMiniProgramPublish", req, resp, cb);
    }

    /**
     * This API is used to clip an HLS video by time period and then generate a new HLS video which developers can share right away or store persistently.

VOD supports two types of clipping:
- Clipping for persistent storage: the video clip is saved as an independent video file with a `FileId`.
- Clipping for temporary sharing: the video clip is affiliated to the input file and has no `FileId`.

Notes:
- Clipping is based on the input M3U8 file that contains the list of TS segments, so the smallest clipping unit is one TS segment instead of in seconds or less.


### Clipping for Persistent Storage
In this mode, a video clip is saved as an independent video file with a `FileId`, and its lifecycle is not subject to the input video. Even if the source video is deleted, the video clip still exists. Moreover, the video clip can be transcoded, published on WeChat, and processed in other ways.

Take the video of a two-hour long football match for example. The customer may only want to store the original two-hour video for two months to save costs, but want to store clipped highlights for a specified longer time and also to transcode and publish such highlights on WeChat. Clipping for persistent storage is suitable for this customer.

The advantage of clipping for persistent storage is that the video clip has a lifecycle independent of the input video and can be managed independently and stored persistently.

### Clipping for Temporary Sharing
The video clip (an M3U8 file) shares the same TS segments with the input video instead of being an independent video. It only has a playback URL but has no `FileId`, and its validity period is the same as that of the input video. Once the input video is deleted, the video clip cannot be played back.

As the video clip is not an independent video, it will not be managed as a VOD media asset. For example, it will not be counted in the total videos displayed on the VOD console, and also cannot be transcoded or published on WeChat.

Clipping for temporary sharing is lightweight and incurs no additional storage fees. However, the video clip has the same lifecycle as the source recording video and cannot be transcoded or processed in other ways.
     * @param {SimpleHlsClipRequest} req
     * @param {function(string, SimpleHlsClipResponse):void} cb
     * @public
     */
    SimpleHlsClip(req, cb) {
        let resp = new SimpleHlsClipResponse();
        this.request("SimpleHlsClip", req, resp, cb);
    }

    /**
     * This API is used to create samples for using facial features positioning and other technologies to perform video processing operations such as content recognition and inappropriate information recognition.
     * @param {CreatePersonSampleRequest} req
     * @param {function(string, CreatePersonSampleResponse):void} cb
     * @public
     */
    CreatePersonSample(req, cb) {
        let resp = new CreatePersonSampleResponse();
        this.request("CreatePersonSample", req, resp, cb);
    }

    /**
     * This API is used to enable/disable a subapplication. After a subapplication is disabled, its corresponding domain name will be blocked and its access to the console will be restricted.
     * @param {ModifySubAppIdStatusRequest} req
     * @param {function(string, ModifySubAppIdStatusResponse):void} cb
     * @public
     */
    ModifySubAppIdStatus(req, cb) {
        let resp = new ModifySubAppIdStatusResponse();
        this.request("ModifySubAppIdStatus", req, resp, cb);
    }

    /**
     * This API is used to modify custom intelligent video content recognition templates.
     * @param {ModifyContentReviewTemplateRequest} req
     * @param {function(string, ModifyContentReviewTemplateResponse):void} cb
     * @public
     */
    ModifyContentReviewTemplate(req, cb) {
        let resp = new ModifyContentReviewTemplateResponse();
        this.request("ModifyContentReviewTemplate", req, resp, cb);
    }

    /**
     * This API is used to initiate a processing task for an audio/video media file in VOD, including:
1. Video transcoding (with watermark);
2. Animated image generating;
3. Time point screencapturing;
4. Sampled screencapturing;
5. Image sprite generating;
6. Cover generating by screencapturing;
7. Adaptive bitrate streaming (with encryption);
8. Intelligent content audit (detection of porn, terrorism, and politically sensitive information);
9. Intelligent content analysis (tag, category, cover, and frame-specific tag);
10. Intelligent content recognition (opening and closing credits, face, full text, text keyword, full speech, speech keyword, and object).
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        let resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
    }

    /**
     * This API is used to query the list of superplayer configurations and supports paginated queries by filters.
     * @param {DescribeSuperPlayerConfigsRequest} req
     * @param {function(string, DescribeSuperPlayerConfigsResponse):void} cb
     * @public
     */
    DescribeSuperPlayerConfigs(req, cb) {
        let resp = new DescribeSuperPlayerConfigsResponse();
        this.request("DescribeSuperPlayerConfigs", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a media file, including category, name, description, tag, expiration time, timestamp information, video thumbnail, and subtitle information.
     * @param {ModifyMediaInfoRequest} req
     * @param {function(string, ModifyMediaInfoResponse):void} cb
     * @public
     */
    ModifyMediaInfo(req, cb) {
        let resp = new ModifyMediaInfoResponse();
        this.request("ModifyMediaInfo", req, resp, cb);
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
module.exports = VodClient;
