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
const CreateStorageRegionRequest = models.CreateStorageRegionRequest;
const AiRecognitionTaskAsrFullTextSegmentItem = models.AiRecognitionTaskAsrFullTextSegmentItem;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const ReviewAudioVideoTaskInput = models.ReviewAudioVideoTaskInput;
const DescribeAllClassRequest = models.DescribeAllClassRequest;
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
const ModifyDefaultStorageRegionRequest = models.ModifyDefaultStorageRegionRequest;
const AiAnalysisTaskCoverOutput = models.AiAnalysisTaskCoverOutput;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const ModifySampleSnapshotTemplateRequest = models.ModifySampleSnapshotTemplateRequest;
const AiReviewPoliticalOcrTaskInput = models.AiReviewPoliticalOcrTaskInput;
const MediaInputInfo = models.MediaInputInfo;
const CreateImageSpriteTask2017 = models.CreateImageSpriteTask2017;
const ClipFileInfo2017 = models.ClipFileInfo2017;
const TempCertificate = models.TempCertificate;
const AiReviewTaskPoliticalOcrResult = models.AiReviewTaskPoliticalOcrResult;
const ManageTaskRequest = models.ManageTaskRequest;
const CreateImageSpriteTemplateRequest = models.CreateImageSpriteTemplateRequest;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const UserDefineFaceReviewTemplateInfo = models.UserDefineFaceReviewTemplateInfo;
const RefreshUrlCacheRequest = models.RefreshUrlCacheRequest;
const ContentReviewTemplateItem = models.ContentReviewTemplateItem;
const DeleteAIRecognitionTemplateResponse = models.DeleteAIRecognitionTemplateResponse;
const DeleteContentReviewTemplateRequest = models.DeleteContentReviewTemplateRequest;
const AiReviewPoliticalTaskInput = models.AiReviewPoliticalTaskInput;
const AudioTransform = models.AudioTransform;
const ModifySuperPlayerConfigRequest = models.ModifySuperPlayerConfigRequest;
const ResetProcedureTemplateRequest = models.ResetProcedureTemplateRequest;
const ComposeMediaResponse = models.ComposeMediaResponse;
const DescribeLicenseUsageDataResponse = models.DescribeLicenseUsageDataResponse;
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
const DescribeClientUploadAccelerationUsageDataResponse = models.DescribeClientUploadAccelerationUsageDataResponse;
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
const ModifyMediaStorageClassResponse = models.ModifyMediaStorageClassResponse;
const AiReviewPornTaskInput = models.AiReviewPornTaskInput;
const CreateProcedureTemplateRequest = models.CreateProcedureTemplateRequest;
const DescribeMediaProcessUsageDataRequest = models.DescribeMediaProcessUsageDataRequest;
const CreatePersonSampleRequest = models.CreatePersonSampleRequest;
const RemoveWatermarkTask = models.RemoveWatermarkTask;
const StorageRegionInfo = models.StorageRegionInfo;
const MediaTransitionItem = models.MediaTransitionItem;
const MediaAiAnalysisCoverItem = models.MediaAiAnalysisCoverItem;
const TagConfigureInfo = models.TagConfigureInfo;
const ModifySuperPlayerConfigResponse = models.ModifySuperPlayerConfigResponse;
const AiRecognitionTaskOcrWordsResultOutput = models.AiRecognitionTaskOcrWordsResultOutput;
const RefreshUrlCacheResponse = models.RefreshUrlCacheResponse;
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
const PoliticalOcrReviewTemplateInfoForUpdate = models.PoliticalOcrReviewTemplateInfoForUpdate;
const TaskOutputMediaInfo = models.TaskOutputMediaInfo;
const ProcessMediaByUrlRequest = models.ProcessMediaByUrlRequest;
const PlayStatFileInfo = models.PlayStatFileInfo;
const ModifyMediaInfoRequest = models.ModifyMediaInfoRequest;
const DeleteTranscodeTemplateRequest = models.DeleteTranscodeTemplateRequest;
const TraceWatermarkInput = models.TraceWatermarkInput;
const PornAsrReviewTemplateInfoForUpdate = models.PornAsrReviewTemplateInfoForUpdate;
const ReviewAudioVideoSegmentItem = models.ReviewAudioVideoSegmentItem;
const MediaAnimatedGraphicsInfo = models.MediaAnimatedGraphicsInfo;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const CdnLogInfo = models.CdnLogInfo;
const MediaSubtitleInfo = models.MediaSubtitleInfo;
const AiRecognitionTaskAsrFullTextResultInput = models.AiRecognitionTaskAsrFullTextResultInput;
const MediaMiniProgramReviewInfoItem = models.MediaMiniProgramReviewInfoItem;
const TaskStatData = models.TaskStatData;
const CreateVodDomainRequest = models.CreateVodDomainRequest;
const OcrFullTextConfigureInfoForUpdate = models.OcrFullTextConfigureInfoForUpdate;
const ProcessMediaByProcedureRequest = models.ProcessMediaByProcedureRequest;
const MediaImageSpriteInfo = models.MediaImageSpriteInfo;
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
const SplitMediaTaskSegmentInfo = models.SplitMediaTaskSegmentInfo;
const AiReviewPornAsrTaskOutput = models.AiReviewPornAsrTaskOutput;
const AiRecognitionTaskAsrFullTextResultOutputSubtitleItem = models.AiRecognitionTaskAsrFullTextResultOutputSubtitleItem;
const SimpleHlsClipResponse = models.SimpleHlsClipResponse;
const DeleteAIAnalysisTemplateRequest = models.DeleteAIAnalysisTemplateRequest;
const AiAnalysisResult = models.AiAnalysisResult;
const ConcatFileInfo2017 = models.ConcatFileInfo2017;
const MediaProcessTaskImageSpriteResult = models.MediaProcessTaskImageSpriteResult;
const ReduceMediaBitrateTask = models.ReduceMediaBitrateTask;
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
const RemoveWatermarkResponse = models.RemoveWatermarkResponse;
const TranscodeTask2017 = models.TranscodeTask2017;
const CreatePersonSampleResponse = models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models.CreateContentReviewTemplateResponse;
const ModifyAnimatedGraphicsTemplateRequest = models.ModifyAnimatedGraphicsTemplateRequest;
const DescribeProcedureTemplatesRequest = models.DescribeProcedureTemplatesRequest;
const ProhibitedConfigureInfoForUpdate = models.ProhibitedConfigureInfoForUpdate;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const TagConfigureInfoForUpdate = models.TagConfigureInfoForUpdate;
const DeleteWordSamplesRequest = models.DeleteWordSamplesRequest;
const EmptyTrackItem = models.EmptyTrackItem;
const StickerTrackItem = models.StickerTrackItem;
const DescribeMediaPlayStatDetailsResponse = models.DescribeMediaPlayStatDetailsResponse;
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
const RestoreMediaTask = models.RestoreMediaTask;
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
const ReviewAudioVideoTaskOutput = models.ReviewAudioVideoTaskOutput;
const RemoveWaterMarkTaskOutput = models.RemoveWaterMarkTaskOutput;
const ModifyMediaStorageClassRequest = models.ModifyMediaStorageClassRequest;
const AiAnalysisTaskTagOutput = models.AiAnalysisTaskTagOutput;
const AiAnalysisTaskHighlightOutput = models.AiAnalysisTaskHighlightOutput;
const MediaSubtitleInput = models.MediaSubtitleInput;
const ProcessMediaRequest = models.ProcessMediaRequest;
const ModifyMediaInfoResponse = models.ModifyMediaInfoResponse;
const AiRecognitionTaskOcrFullTextResult = models.AiRecognitionTaskOcrFullTextResult;
const RestoreMediaResponse = models.RestoreMediaResponse;
const MediaProcessTaskSnapshotByTimeOffsetResult = models.MediaProcessTaskSnapshotByTimeOffsetResult;
const AiSampleWord = models.AiSampleWord;
const AiRecognitionTaskAsrWordsResultOutput = models.AiRecognitionTaskAsrWordsResultOutput;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const MediaProcessTaskTranscodeResult = models.MediaProcessTaskTranscodeResult;
const DomainDetailInfo = models.DomainDetailInfo;
const ExtractTraceWatermarkTask = models.ExtractTraceWatermarkTask;
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
const ImageReviewUsageDataItem = models.ImageReviewUsageDataItem;
const AnimatedGraphicsTemplate = models.AnimatedGraphicsTemplate;
const TerrorismOcrReviewTemplateInfoForUpdate = models.TerrorismOcrReviewTemplateInfoForUpdate;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const AiRecognitionTaskHeadTailResultOutput = models.AiRecognitionTaskHeadTailResultOutput;
const ModifyImageSpriteTemplateResponse = models.ModifyImageSpriteTemplateResponse;
const ExtractTraceWatermarkTaskOutput = models.ExtractTraceWatermarkTaskOutput;
const MediaProcessTaskCoverBySnapshotResult = models.MediaProcessTaskCoverBySnapshotResult;
const CreateWatermarkTemplateRequest = models.CreateWatermarkTemplateRequest;
const TerrorismConfigureInfoForUpdate = models.TerrorismConfigureInfoForUpdate;
const WechatMiniProgramPublishTask = models.WechatMiniProgramPublishTask;
const DescribeDrmKeyProviderInfoRequest = models.DescribeDrmKeyProviderInfoRequest;
const ModifyDefaultStorageRegionResponse = models.ModifyDefaultStorageRegionResponse;
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
const LicenseUsageDataItem = models.LicenseUsageDataItem;
const ReduceMediaBitrateAdaptiveDynamicStreamingResult = models.ReduceMediaBitrateAdaptiveDynamicStreamingResult;
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
const MediaProcessTaskInput = models.MediaProcessTaskInput;
const OutputVideoStream = models.OutputVideoStream;
const ProcedureTemplate = models.ProcedureTemplate;
const AiReviewTaskTerrorismResult = models.AiReviewTaskTerrorismResult;
const ProcessMediaByUrlResponse = models.ProcessMediaByUrlResponse;
const DescribeImageReviewUsageDataRequest = models.DescribeImageReviewUsageDataRequest;
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
const FileDeleteResultItem = models.FileDeleteResultItem;
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
const TrtcRecordInfo = models.TrtcRecordInfo;
const DescribeReviewDetailsRequest = models.DescribeReviewDetailsRequest;
const PornConfigureInfoForUpdate = models.PornConfigureInfoForUpdate;
const AiReviewProhibitedAsrTaskInput = models.AiReviewProhibitedAsrTaskInput;
const MediaContentReviewSegmentItem = models.MediaContentReviewSegmentItem;
const TerrorismOcrReviewTemplateInfo = models.TerrorismOcrReviewTemplateInfo;
const AiReviewTaskPornResult = models.AiReviewTaskPornResult;
const AiRecognitionTaskObjectResultOutput = models.AiRecognitionTaskObjectResultOutput;
const DescribeMediaPlayStatDetailsRequest = models.DescribeMediaPlayStatDetailsRequest;
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
const DescribeClientUploadAccelerationUsageDataRequest = models.DescribeClientUploadAccelerationUsageDataRequest;
const ModifyAIRecognitionTemplateRequest = models.ModifyAIRecognitionTemplateRequest;
const DescribeStorageRegionsRequest = models.DescribeStorageRegionsRequest;
const WechatPublishTask = models.WechatPublishTask;
const DescribeCDNStatDetailsRequest = models.DescribeCDNStatDetailsRequest;
const AiRecognitionTaskOcrFullTextResultInput = models.AiRecognitionTaskOcrFullTextResultInput;
const DescribeImageReviewUsageDataResponse = models.DescribeImageReviewUsageDataResponse;
const StatDataItem = models.StatDataItem;
const CreateStorageRegionResponse = models.CreateStorageRegionResponse;
const AccelerateAreaInfo = models.AccelerateAreaInfo;
const MediaSourceData = models.MediaSourceData;
const ProhibitedAsrReviewTemplateInfo = models.ProhibitedAsrReviewTemplateInfo;
const PushUrlCacheRequest = models.PushUrlCacheRequest;
const CreateAIAnalysisTemplateResponse = models.CreateAIAnalysisTemplateResponse;
const HeadTailConfigureInfo = models.HeadTailConfigureInfo;
const EventContent = models.EventContent;
const HighlightsConfigureInfoForUpdate = models.HighlightsConfigureInfoForUpdate;
const UserDefineConfigureInfoForUpdate = models.UserDefineConfigureInfoForUpdate;
const ExtractTraceWatermarkTaskInput = models.ExtractTraceWatermarkTaskInput;
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
const DescribeDrmKeyProviderInfoResponse = models.DescribeDrmKeyProviderInfoResponse;
const ExtractTraceWatermarkResponse = models.ExtractTraceWatermarkResponse;
const CreateAIRecognitionTemplateRequest = models.CreateAIRecognitionTemplateRequest;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const MediaAiAnalysisClassificationItem = models.MediaAiAnalysisClassificationItem;
const AiAnalysisTaskFrameTagResult = models.AiAnalysisTaskFrameTagResult;
const AiReviewPornTaskOutput = models.AiReviewPornTaskOutput;
const SDMCDrmKeyProviderInfo = models.SDMCDrmKeyProviderInfo;
const AiRecognitionTaskAsrFullTextResult = models.AiRecognitionTaskAsrFullTextResult;
const ModifyAIRecognitionTemplateResponse = models.ModifyAIRecognitionTemplateResponse;
const PlayStatInfo = models.PlayStatInfo;
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
const LiveRealTimeClipStreamInfo = models.LiveRealTimeClipStreamInfo;
const ProhibitedOcrReviewTemplateInfo = models.ProhibitedOcrReviewTemplateInfo;
const DeleteClassResponse = models.DeleteClassResponse;
const ModifyTranscodeTemplateResponse = models.ModifyTranscodeTemplateResponse;
const MediaMetaData = models.MediaMetaData;
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
const ReduceMediaBitrateMediaProcessTaskResult = models.ReduceMediaBitrateMediaProcessTaskResult;
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
const DescribeStorageRegionsResponse = models.DescribeStorageRegionsResponse;
const ModifySnapshotByTimeOffsetTemplateRequest = models.ModifySnapshotByTimeOffsetTemplateRequest;
const ProcedureTask = models.ProcedureTask;
const ExtractTraceWatermarkRequest = models.ExtractTraceWatermarkRequest;
const TaskSimpleInfo = models.TaskSimpleInfo;
const ReviewAudioVideoTask = models.ReviewAudioVideoTask;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const SetDrmKeyProviderInfoRequest = models.SetDrmKeyProviderInfoRequest;
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
const SubtitleFormatsOperation = models.SubtitleFormatsOperation;
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
const ImageTransform = models.ImageTransform;
const CreateAnimatedGraphicsTemplateRequest = models.CreateAnimatedGraphicsTemplateRequest;
const FrameTagConfigureInfo = models.FrameTagConfigureInfo;
const RemoveWatermarkRequest = models.RemoveWatermarkRequest;
const ExecuteFunctionRequest = models.ExecuteFunctionRequest;
const ConfirmEventsResponse = models.ConfirmEventsResponse;
const ModifyPersonSampleResponse = models.ModifyPersonSampleResponse;
const VideoTrackItem = models.VideoTrackItem;
const DescribeLicenseUsageDataRequest = models.DescribeLicenseUsageDataRequest;
const DeleteTranscodeTemplateResponse = models.DeleteTranscodeTemplateResponse;
const MediaTranscodeItem = models.MediaTranscodeItem;
const DescribePersonSamplesResponse = models.DescribePersonSamplesResponse;
const SplitMediaTaskInput = models.SplitMediaTaskInput;
const PornConfigureInfo = models.PornConfigureInfo;
const AiRecognitionTaskObjectSeqmentItem = models.AiRecognitionTaskObjectSeqmentItem;
const RestoreMediaRequest = models.RestoreMediaRequest;
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
const RemoveWaterMarkTaskInput = models.RemoveWaterMarkTaskInput;
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
const SetDrmKeyProviderInfoResponse = models.SetDrmKeyProviderInfoResponse;
const DescribeStorageDetailsRequest = models.DescribeStorageDetailsRequest;
const MediaTrack = models.MediaTrack;
const StorageStatData = models.StorageStatData;
const MediaOutputInfo = models.MediaOutputInfo;
const EditMediaTaskOutput = models.EditMediaTaskOutput;
const HighlightSegmentItem = models.HighlightSegmentItem;
const DeleteWatermarkTemplateResponse = models.DeleteWatermarkTemplateResponse;
const ComposeMediaOutput = models.ComposeMediaOutput;
const PullUploadTask = models.PullUploadTask;
const FrameTagConfigureInfoForUpdate = models.FrameTagConfigureInfoForUpdate;
const CreateImageSpriteTemplateResponse = models.CreateImageSpriteTemplateResponse;
const DescribeAIRecognitionTemplatesRequest = models.DescribeAIRecognitionTemplatesRequest;
const ReduceMediaBitrateTranscodeResult = models.ReduceMediaBitrateTranscodeResult;
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
     * This API is used to set the default storage region. A file will be stored in the default region if no region is specified for file upload.
     * @param {ModifyDefaultStorageRegionRequest} req
     * @param {function(string, ModifyDefaultStorageRegionResponse):void} cb
     * @public
     */
    ModifyDefaultStorageRegion(req, cb) {
        let resp = new ModifyDefaultStorageRegionResponse();
        this.request("ModifyDefaultStorageRegion", req, resp, cb);
    }

    /**
     * This API is used to extract the user ID of a user that distributed a video containing a digital watermark.
     * @param {ExtractTraceWatermarkRequest} req
     * @param {function(string, ExtractTraceWatermarkResponse):void} cb
     * @public
     */
    ExtractTraceWatermark(req, cb) {
        let resp = new ExtractTraceWatermarkResponse();
        this.request("ExtractTraceWatermark", req, resp, cb);
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
     * This API is used to remove watermarks from a video.
     * @param {RemoveWatermarkRequest} req
     * @param {function(string, RemoveWatermarkResponse):void} cb
     * @public
     */
    RemoveWatermark(req, cb) {
        let resp = new RemoveWatermarkResponse();
        this.request("RemoveWatermark", req, resp, cb);
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
     * This API is used to enable storage in a region.
  1. When you activate VOD, the system will enable storage for you in certain regions. If you need to store data in another region, you can use this API to enable storage in that region.
  2. You can use the `DescribeStorageRegions` API to query all supported storage regions and the regions you have storage access to currently.
     * @param {CreateStorageRegionRequest} req
     * @param {function(string, CreateStorageRegionResponse):void} cb
     * @public
     */
    CreateStorageRegion(req, cb) {
        let resp = new CreateStorageRegionResponse();
        this.request("CreateStorageRegion", req, resp, cb);
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
     * This API is used to query the playback statistics of a media file at the specified granularity.
* You can query playback statistics in the past year.
* If the granularity is an hour, the start and end time cannot be more than seven days apart.
* If the granularity is a day, the start and end time cannot be more than 90 days apart.
     * @param {DescribeMediaPlayStatDetailsRequest} req
     * @param {function(string, DescribeMediaPlayStatDetailsResponse):void} cb
     * @public
     */
    DescribeMediaPlayStatDetails(req, cb) {
        let resp = new DescribeMediaPlayStatDetailsResponse();
        this.request("DescribeMediaPlayStatDetails", req, resp, cb);
    }

    /**
     * This API is used to query daily playback license requests in a specified time period.
   1. You can query statistics from the last 365 days.
   2. The maximum query period is 90 days.
   3. If the period specified is longer than one day, the statistics returned will be on a daily basis; otherwise, they will be on a 5-minute basis.

     * @param {DescribeLicenseUsageDataRequest} req
     * @param {function(string, DescribeLicenseUsageDataResponse):void} cb
     * @public
     */
    DescribeLicenseUsageData(req, cb) {
        let resp = new DescribeLicenseUsageDataResponse();
        this.request("DescribeLicenseUsageData", req, resp, cb);
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
     * This API is used to compose a media file. You can use it to do the following:

1. **Rotation/Flipping**: Rotate a video or image by a specific angle or flip a video or image.
2. **Audio control**: Increase/Lower the volume of an audio/video file or mute an audio/video file.
3. **Overlaying**: Overlay videos/images in a specified sequence to achieve the picture-in-picture effect.
4. **Audio mixing**: Mix the audios of audio/video files.
5 **Audio extraction**: Extract audio from a video.
6. **Clipping**: Clip segments from audio/video files according to a specified start and end time.
7. **Splicing**: Splice videos/audios/images in a specified sequence.
8. **Transition**: Add transition effects between video segments or images that are spliced together.

The output file is in MP4 or MP3 format. In the callback for media composition, the event type is [ComposeMediaComplete](https://intl.cloud.tencent.com/document/product/266/43000?from_cn_redirect=1).
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
     * This API is used to query DRM key information.
     * @param {DescribeDrmKeyProviderInfoRequest} req
     * @param {function(string, DescribeDrmKeyProviderInfoResponse):void} cb
     * @public
     */
    DescribeDrmKeyProviderInfo(req, cb) {
        let resp = new DescribeDrmKeyProviderInfoResponse();
        this.request("DescribeDrmKeyProviderInfo", req, resp, cb);
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
     * This API is used to modify the storage class of media files.
If the current storage class is STANDARD, it can be changed to one of the following classes:
<li>STANDARD_IA</li>
<li>ARCHIVE</li>
<li>DEEP ARCHIVE</li>
If the current storage class is STANDARD_IA, it can be changed to one of the following classes:
<li>STANDARD</li>
<li>ARCHIVE</li>
<li>DEEP ARCHIVE</li>
If the current storage class is ARCHIVE, it can be changed to the following class:
<li>STANDARD</li>
If the current storage class is DEEP ARCHIVE, it can be changed to the following class:
<li>STANDARD</li>
     * @param {ModifyMediaStorageClassRequest} req
     * @param {function(string, ModifyMediaStorageClassResponse):void} cb
     * @public
     */
    ModifyMediaStorageClass(req, cb) {
        let resp = new ModifyMediaStorageClassResponse();
        this.request("ModifyMediaStorageClass", req, resp, cb);
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
     * This API is used to modify the acceleration region of a domain name on VOD.
1. You can modify acceleration regions of only domain names whose status is `Online`.
     * @param {ModifyVodDomainAccelerateConfigRequest} req
     * @param {function(string, ModifyVodDomainAccelerateConfigResponse):void} cb
     * @public
     */
    ModifyVodDomainAccelerateConfig(req, cb) {
        let resp = new ModifyVodDomainAccelerateConfigResponse();
        this.request("ModifyVodDomainAccelerateConfig", req, resp, cb);
    }

    /**
     * This API is used to delete a player configuration.  
*Note: Preset player configurations cannot be deleted.*
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
     * This API is used to query the usage of the client upload acceleration service in a specific time period.
   1. You can query the usage of client upload acceleration in the last 365 days.
   2. The maximum time period allowed for query is 90 days.
   3. If the period specified is longer than one day, the statistics returned will be on a daily basis; otherwise, they will be on a 5-minute basis.

     * @param {DescribeClientUploadAccelerationUsageDataRequest} req
     * @param {function(string, DescribeClientUploadAccelerationUsageDataResponse):void} cb
     * @public
     */
    DescribeClientUploadAccelerationUsageData(req, cb) {
        let resp = new DescribeClientUploadAccelerationUsageDataResponse();
        this.request("DescribeClientUploadAccelerationUsageData", req, resp, cb);
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
4. By default, the maximum number of URLs that can be refreshed per day is 10,000.
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
     * This API is used to query your daily usage of the image recognition feature in a specified time period.
   1. You can query statistics from the last 365 days.
   2. The maximum query period is 90 days.
   3. If the period specified is longer than one day, the statistics returned will be on a daily basis; otherwise, they will be on a 5-minute basis.

     * @param {DescribeImageReviewUsageDataRequest} req
     * @param {function(string, DescribeImageReviewUsageDataResponse):void} cb
     * @public
     */
    DescribeImageReviewUsageData(req, cb) {
        let resp = new DescribeImageReviewUsageDataResponse();
        this.request("DescribeImageReviewUsageData", req, resp, cb);
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
     * This API is used to query the following information:
  1. All supported storage regions.
  2. The regions you have storage access to currently.
  3. The default storage region.
     * @param {DescribeStorageRegionsRequest} req
     * @param {function(string, DescribeStorageRegionsResponse):void} cb
     * @public
     */
    DescribeStorageRegions(req, cb) {
        let resp = new DescribeStorageRegionsResponse();
        this.request("DescribeStorageRegions", req, resp, cb);
    }

    /**
     * 1. This API is used to purge URLs.
2. The URL domain names must have already been registered with VOD.
3. Up to 20 URLs can be specified in one request.
4. By default, the maximum number of URLs allowed for purge per day is 100,000.
     * @param {RefreshUrlCacheRequest} req
     * @param {function(string, RefreshUrlCacheResponse):void} cb
     * @public
     */
    RefreshUrlCache(req, cb) {
        let resp = new RefreshUrlCacheResponse();
        this.request("RefreshUrlCache", req, resp, cb);
    }

    /**
     * This API is used to create a player configuration. Up to 100 configurations can be created.
     * @param {CreateSuperPlayerConfigRequest} req
     * @param {function(string, CreateSuperPlayerConfigResponse):void} cb
     * @public
     */
    CreateSuperPlayerConfig(req, cb) {
        let resp = new CreateSuperPlayerConfigResponse();
        this.request("CreateSuperPlayerConfig", req, resp, cb);
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
     * This API is used to modify a player configuration.
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
     * This API is used to configure DRM key information.
     * @param {SetDrmKeyProviderInfoRequest} req
     * @param {function(string, SetDrmKeyProviderInfoResponse):void} cb
     * @public
     */
    SetDrmKeyProviderInfo(req, cb) {
        let resp = new SetDrmKeyProviderInfoResponse();
        this.request("SetDrmKeyProviderInfo", req, resp, cb);
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
     * This API is used to search for media files by specific criteria. You can sort the results and specify the information to return.
- Specify a list of file IDs (`FileIds`). Any file that matches one of the IDs will be returned.
- Specify one or multiple keywords for `Names` or `Descriptions` for fuzzy search by filename or description.
- Specify multiple filename prefixes (`NamePrefixes`).
- Specify a list of categories (`ClassIds`). Any file that matches one of the categories will be returned. For example, assume that there are categories `Movies`, `TV Series`, and `Variety Shows`, and `Movies` has subcategories including `History`, `Action`, and `Romance`. If `ClassIds` is set to `Movies` and `TV Series`, all media files in `Movies` (including its subcategories) and `TV Series` will be returned. If `ClassIds` is set to `History` and `Action`, only the files in those two subcategories will be returned.
- Specify a list of tags (`Tags`). Any file that matches one or more of the tags will be returned. For example, assume that there are tags `ACG`, `Drama`, and `YTPMV`. If `Tags` is set to `ACG` and `YTPMV`, any media file with either tag will be returned.
- Specify the types (`Categories`) of media files. Any file that matches one of the types will be returned. There are three file types: `Video`, `Audio`, and `Image`. If `Categories` is set to `Video` and `Audio`, all audio and video files will be returned.
- Specify the source types (`SourceTypes`). Any file that matches one of the source types specified will be returned. For example, if you set `SourceTypes` to `Record` (live recording) and `Upload` (upload), all recording files and uploaded files will be returned.
- Specify the stream IDs (`StreamIds`) of live recording files.
- Specify the video IDs (`Vids`) of live recording files.
- Specify a time range for search by file creation time.
- Specify the TRTC application IDs.
- Specify the TRTC room IDs.
- Specify one keyword for `Text` for fuzzy search by filename or description. (This is not recommended. Please use `Names`, `NamePrefixes` or `Descriptions` instead.)
- Specify one source (`SourceType`). (This is not recommended. Please use `SourceTypes` instead.)
- Specify one stream ID (`StreamId`). (This is not recommended. Please use `StreamIds` instead.)
- Specify one video ID (`Vid`). (This is not recommended. Please use `Vids` instead.)
- Specify the start (`StartTime`) of the time range to search by creation time. (This is not recommended. Please use `CreateTime` instead.)
- Specify the end (`EndTime`) of the time range to search by creation time. (This is not recommended. Please use `CreateTime` instead.)
- You can search by any combination of the parameters above. For example, you can search for media files with the tag "Drama" or "Suspense" in the category of "Movies" and "TV Series" created between 12:00:00, December 1, 2018 and 12:00:00, December 8, 2018. Note that for parameters whose data type is array, the search logic between their elements is "OR". The search logic between parameters is "AND".

- You can sort the results by creation time and return them in multiple pages by specifying `Offset` and `Limit`.
- You can use `Filters` to specify the types of file information to return (all types are returned by default). Valid values:
    1. `basicInfo`: The file name, category, playback URL, thumbnail, etc.
    2. `metaData`: The file size, duration, video stream information, audio stream information, etc.
    3. `transcodeInfo`: The URLs, video stream parameters, and audio stream parameters of transcoding outputs.
    4. `animatedGraphicsInfo`: The information of the animated images (such as GIF images) generated.
    5. `sampleSnapshotInfo`: The information of the sampled screenshots generated.
    6. `imageSpriteInfo`: The information of the image sprites generated.
    7. `snapshotByTimeOffsetInfo`: The information of the time point screenshots generated.
    8. `keyFrameDescInfo`: The video timestamp information.
    9. `adaptiveDynamicStreamingInfo`: The specification, encryption type, format, etc.

<div id="maxResultsDesc">Limits for returned records:</div>
- The <b><a href="#p_offset">Offset</a> and <a href="#p_limit">Limit</a> parameters determine the number of records per page. If neither parameter is passed, this API will return up to 10 records.</b>
- <b>Up to 5,000 records can be returned. If a request returns too many records, we recommend you use more specific search criteria to narrow down the results.</b>
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
     * This API is used to cut a clip from an HLS video to generate a new video (in HLS format). You can either share the new video or save it.

VOD supports two types of clipping:
- Clipping for persistent storage: The video clip is saved as an independent video file with its own `FileId`.
- Clipping for temporary sharing: The video clip shares `FileId` with the input file.

Notes:
- Clipping is based on the M3U8 file that contains a list of TS segments, so the smallest clipping unit is one TS segment instead of a second or less.


### Clipping for persistent storage
In this mode, a video clip is saved as an independent video file with a `FileId`, and its lifecycle is not subject to the input video. Even if the source video is deleted, the video clip still exists. Moreover, the video clip can be transcoded, published on WeChat, and processed in other ways.

Suppose you recorded a two-hour football match. You want to save the full video for only two months to save costs, but want to save the highlights for a longer time and perhaps transcode and publish the highlight clip to WeChat. In this case, you can choose clipping for persistent storage.

The advantage of clipping for persistent storage is that the video clip has a lifecycle independent of the input video and can be managed independently and stored persistently.

### Clipping for temporary sharing
The video clip (an M3U8 file) shares the same TS segments with the input video instead of being an independent video. It only has a playback URL but has no `FileId`, and its validity period is the same as that of the input video. Once the input video is deleted, the video clip cannot be played back.

Because the video clip is not an independent video, it’s not displayed as a media asset in the VOD console, and cannot be transcoded or published to WeChat.

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
     * This API is used to initiate a media processing task on a VOD file. The task may include:
1. Video transcoding (with watermark)
2. Animated image generating
3. Time point screenshot
4. Sampled screenshot
5. Image sprite generating
6. Taking a screenshot to use as the thumbnail
7. Adaptive bitrate streaming and encryption
8. Intelligent recognition of pornographic, terrorism, and politically sensitive content
9. Intelligent content analysis for labeling, categorization, thumbnail generation, or frame-specific labeling
10. Recognition of opening and closing credits, faces, full text, text keywords, full speech, speech keywords, and objects

If event notifications are used, the event type is [ProcedureStateChanged](https://intl.cloud.tencent.com/document/product/266/9636?from_cn_redirect=1).

A digital watermark has the following restrictions:
<li>Digital watermarks can only be image watermarks.</li>
<li>Digital watermarks must be looped.</li>
<li>If you use digital watermarks, the output video must be in HLS format.</li>
<li>Digital watermarks can only be displayed in the upper half of a video.</li>
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        let resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
    }

    /**
     * This API is used to query player configurations. It supports pagination.
     * @param {DescribeSuperPlayerConfigsRequest} req
     * @param {function(string, DescribeSuperPlayerConfigsResponse):void} cb
     * @public
     */
    DescribeSuperPlayerConfigs(req, cb) {
        let resp = new DescribeSuperPlayerConfigsResponse();
        this.request("DescribeSuperPlayerConfigs", req, resp, cb);
    }

    /**
     * This API is used to query the download links of playback statistics files.
* You can query the download links of playback statistics files in the past year. The start and end dates for query cannot be more than 90 days apart.
* Every day, VOD will analyze CDN request logs of the previous day and then generate a playback statistics file.
* A playback statistics file includes playback times and traffic of media files.
* Notes on playback times:
    1. HLS file: VOD counts playback times when M3U8 files are accessed, but not when TS files are accessed.
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
     * This API is used to restore files from ARCHIVE or DEEP ARCHIVE. Files stored in ARCHIVE or DEEP ARCHIVE must be restored before they can be accessed. Restored files are available for a limited period of time.
     * @param {RestoreMediaRequest} req
     * @param {function(string, RestoreMediaResponse):void} cb
     * @public
     */
    RestoreMedia(req, cb) {
        let resp = new RestoreMediaResponse();
        this.request("RestoreMedia", req, resp, cb);
    }


}
module.exports = VodClient;
