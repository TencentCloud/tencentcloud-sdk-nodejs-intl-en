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
const DeployConfigGroupVersionRequest = models.DeployConfigGroupVersionRequest;
const DescribeSecurityAPIResourceResponse = models.DescribeSecurityAPIResourceResponse;
const RenewFlag = models.RenewFlag;
const Compression = models.Compression;
const DescribeFunctionsResponse = models.DescribeFunctionsResponse;
const RequestFieldsForException = models.RequestFieldsForException;
const DeleteL4ProxyRulesRequest = models.DeleteL4ProxyRulesRequest;
const DescribeOriginGroupResponse = models.DescribeOriginGroupResponse;
const ModifySecurityJSInjectionRuleRequest = models.ModifySecurityJSInjectionRuleRequest;
const DescribeSecurityIPGroupInfoResponse = models.DescribeSecurityIPGroupInfoResponse;
const AdaptiveFrequencyControl = models.AdaptiveFrequencyControl;
const SlowPostConfig = models.SlowPostConfig;
const DescribeWebSecurityTemplatesRequest = models.DescribeWebSecurityTemplatesRequest;
const CreateSecurityAPIServiceRequest = models.CreateSecurityAPIServiceRequest;
const RateLimitingRules = models.RateLimitingRules;
const DescribeMultiPathGatewayLineRequest = models.DescribeMultiPathGatewayLineRequest;
const OriginACLEntity = models.OriginACLEntity;
const CompressionParameters = models.CompressionParameters;
const DescribeConfigGroupVersionDetailResponse = models.DescribeConfigGroupVersionDetailResponse;
const OriginDetail = models.OriginDetail;
const HeaderAction = models.HeaderAction;
const RealtimeLogDeliveryTask = models.RealtimeLogDeliveryTask;
const PrepaidPlanParam = models.PrepaidPlanParam;
const MinimalRequestBodyTransferRate = models.MinimalRequestBodyTransferRate;
const AccessURLRedirectQueryString = models.AccessURLRedirectQueryString;
const ModifyFunctionRulePriorityRequest = models.ModifyFunctionRulePriorityRequest;
const ModifyAccelerationDomainResponse = models.ModifyAccelerationDomainResponse;
const DeleteSecurityAPIResourceRequest = models.DeleteSecurityAPIResourceRequest;
const UpstreamHTTP2Parameters = models.UpstreamHTTP2Parameters;
const TopEntryValue = models.TopEntryValue;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const DescribeWebSecurityTemplateResponse = models.DescribeWebSecurityTemplateResponse;
const Origin = models.Origin;
const DescribeRulesResponse = models.DescribeRulesResponse;
const TimingDataRecord = models.TimingDataRecord;
const CreateCLSIndexResponse = models.CreateCLSIndexResponse;
const DescribeRealtimeLogDeliveryTasksRequest = models.DescribeRealtimeLogDeliveryTasksRequest;
const DescribeOriginProtectionResponse = models.DescribeOriginProtectionResponse;
const DescribeBillingDataRequest = models.DescribeBillingDataRequest;
const LogFormat = models.LogFormat;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const MultiPathGateway = models.MultiPathGateway;
const DescribeAliasDomainsRequest = models.DescribeAliasDomainsRequest;
const QUICParameters = models.QUICParameters;
const ManagedRuleGroupMeta = models.ManagedRuleGroupMeta;
const RateLimitConfig = models.RateLimitConfig;
const CreateRealtimeLogDeliveryTaskRequest = models.CreateRealtimeLogDeliveryTaskRequest;
const ModifyAccelerationDomainStatusesResponse = models.ModifyAccelerationDomainStatusesResponse;
const DescribeOriginACLRequest = models.DescribeOriginACLRequest;
const RuleExtraParameter = models.RuleExtraParameter;
const ModifyL7AccRulePriorityRequest = models.ModifyL7AccRulePriorityRequest;
const WebSocket = models.WebSocket;
const ModifyAccelerationDomainRequest = models.ModifyAccelerationDomainRequest;
const ModifyContentIdentifierResponse = models.ModifyContentIdentifierResponse;
const DeleteSecurityAPIServiceResponse = models.DeleteSecurityAPIServiceResponse;
const RuleAndConditions = models.RuleAndConditions;
const CreateAliasDomainRequest = models.CreateAliasDomainRequest;
const CLSTopic = models.CLSTopic;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DescribeApplicationProxiesResponse = models.DescribeApplicationProxiesResponse;
const VanityNameServers = models.VanityNameServers;
const DescribeTopL7AnalysisDataRequest = models.DescribeTopL7AnalysisDataRequest;
const CreateMultiPathGatewaySecretKeyResponse = models.CreateMultiPathGatewaySecretKeyResponse;
const DescribeSecurityIPGroupContentRequest = models.DescribeSecurityIPGroupContentRequest;
const SwitchConfig = models.SwitchConfig;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const UpstreamRequestQueryString = models.UpstreamRequestQueryString;
const DeleteJustInTimeTranscodeTemplatesRequest = models.DeleteJustInTimeTranscodeTemplatesRequest;
const ModifyLoadBalancerResponse = models.ModifyLoadBalancerResponse;
const ModifyL4ProxyResponse = models.ModifyL4ProxyResponse;
const HealthChecker = models.HealthChecker;
const CreateFunctionRuleRequest = models.CreateFunctionRuleRequest;
const RuleBranch = models.RuleBranch;
const ConfirmOriginACLUpdateResponse = models.ConfirmOriginACLUpdateResponse;
const DescribeAliasDomainsResponse = models.DescribeAliasDomainsResponse;
const EnvInfo = models.EnvInfo;
const AudioTemplateInfo = models.AudioTemplateInfo;
const ModifyLoadBalancerRequest = models.ModifyLoadBalancerRequest;
const PlanInfo = models.PlanInfo;
const DescribeTimingL7CacheDataRequest = models.DescribeTimingL7CacheDataRequest;
const ModifySecurityAPIResourceRequest = models.ModifySecurityAPIResourceRequest;
const IPv6Parameters = models.IPv6Parameters;
const CreateFunctionRequest = models.CreateFunctionRequest;
const PostMaxSizeParameters = models.PostMaxSizeParameters;
const S3 = models.S3;
const DescribeDDoSAttackEventResponse = models.DescribeDDoSAttackEventResponse;
const DisableOriginACLRequest = models.DisableOriginACLRequest;
const DeleteL4ProxyRulesResponse = models.DeleteL4ProxyRulesResponse;
const ForceRedirect = models.ForceRedirect;
const CodeAction = models.CodeAction;
const ZoneConfigParameters = models.ZoneConfigParameters;
const CreateL7AccRulesResponse = models.CreateL7AccRulesResponse;
const CachePrefresh = models.CachePrefresh;
const OriginACLInfo = models.OriginACLInfo;
const DescribeTimingL7AnalysisDataResponse = models.DescribeTimingL7AnalysisDataResponse;
const ImageOptimize = models.ImageOptimize;
const CreateL7AccRulesRequest = models.CreateL7AccRulesRequest;
const BotPortraitRule = models.BotPortraitRule;
const RulesProperties = models.RulesProperties;
const DescribeSecurityJSInjectionRuleResponse = models.DescribeSecurityJSInjectionRuleResponse;
const RuleCodeActionParams = models.RuleCodeActionParams;
const OriginGroupReference = models.OriginGroupReference;
const DeleteLoadBalancerRequest = models.DeleteLoadBalancerRequest;
const CacheKeyCookie = models.CacheKeyCookie;
const SecurityPolicyTemplateInfo = models.SecurityPolicyTemplateInfo;
const ExceptUserRule = models.ExceptUserRule;
const SecEntry = models.SecEntry;
const ModifyCustomErrorPageResponse = models.ModifyCustomErrorPageResponse;
const ModifySecurityAPIServiceRequest = models.ModifySecurityAPIServiceRequest;
const StandardDebugParameters = models.StandardDebugParameters;
const ConfigGroupVersionInfo = models.ConfigGroupVersionInfo;
const VerifyOwnershipResponse = models.VerifyOwnershipResponse;
const DescribeSecurityIPGroupContentResponse = models.DescribeSecurityIPGroupContentResponse;
const Sv = models.Sv;
const Rule = models.Rule;
const DownloadL4LogsRequest = models.DownloadL4LogsRequest;
const ZoneInfo = models.ZoneInfo;
const StatusCodeCacheParam = models.StatusCodeCacheParam;
const SecurityAction = models.SecurityAction;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const DetectLengthLimitRule = models.DetectLengthLimitRule;
const OriginGroupHealthStatus = models.OriginGroupHealthStatus;
const ModifyDnsRecordsResponse = models.ModifyDnsRecordsResponse;
const BillingDataFilter = models.BillingDataFilter;
const DeleteCustomErrorPageResponse = models.DeleteCustomErrorPageResponse;
const DescribeTimingL7CacheDataResponse = models.DescribeTimingL7CacheDataResponse;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const DeleteMultiPathGatewayRequest = models.DeleteMultiPathGatewayRequest;
const DeleteCustomErrorPageRequest = models.DeleteCustomErrorPageRequest;
const CustomField = models.CustomField;
const DescribeSecurityAPIServiceRequest = models.DescribeSecurityAPIServiceRequest;
const CacheKeyHeader = models.CacheKeyHeader;
const DeleteZoneRequest = models.DeleteZoneRequest;
const RangeOriginPullParameters = models.RangeOriginPullParameters;
const BotManagedRule = models.BotManagedRule;
const CurrentOriginACL = models.CurrentOriginACL;
const SecurityConfig = models.SecurityConfig;
const CreateSecurityIPGroupRequest = models.CreateSecurityIPGroupRequest;
const ModifyPlanRequest = models.ModifyPlanRequest;
const DescribeOriginACLResponse = models.DescribeOriginACLResponse;
const FailReason = models.FailReason;
const ModifyL4ProxyRulesRequest = models.ModifyL4ProxyRulesRequest;
const DescribeRulesSettingRequest = models.DescribeRulesSettingRequest;
const EntityStatus = models.EntityStatus;
const SmartRoutingParameters = models.SmartRoutingParameters;
const DisableOriginACLResponse = models.DisableOriginACLResponse;
const CreateFunctionRuleResponse = models.CreateFunctionRuleResponse;
const CreateMultiPathGatewaySecretKeyRequest = models.CreateMultiPathGatewaySecretKeyRequest;
const HTTPUpstreamTimeoutParameters = models.HTTPUpstreamTimeoutParameters;
const DescribeMultiPathGatewayRequest = models.DescribeMultiPathGatewayRequest;
const PrivateParameter = models.PrivateParameter;
const CacheKeyConfigParameters = models.CacheKeyConfigParameters;
const CreateOriginGroupRequest = models.CreateOriginGroupRequest;
const TopDataRecord = models.TopDataRecord;
const DescribeDDoSProtectionResponse = models.DescribeDDoSProtectionResponse;
const CreateSecurityIPGroupResponse = models.CreateSecurityIPGroupResponse;
const CreateSharedCNAMEResponse = models.CreateSharedCNAMEResponse;
const DeleteMultiPathGatewayResponse = models.DeleteMultiPathGatewayResponse;
const DescribeAvailablePlansResponse = models.DescribeAvailablePlansResponse;
const RateLimitTemplate = models.RateLimitTemplate;
const ModifyRealtimeLogDeliveryTaskResponse = models.ModifyRealtimeLogDeliveryTaskResponse;
const AccelerationDomainCertificate = models.AccelerationDomainCertificate;
const OriginRecord = models.OriginRecord;
const DescribeSecurityTemplateBindingsRequest = models.DescribeSecurityTemplateBindingsRequest;
const L4ProxyRemoteAuth = models.L4ProxyRemoteAuth;
const AlgDetectResult = models.AlgDetectResult;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const RuleEngineItem = models.RuleEngineItem;
const ModifySecurityAPIServiceResponse = models.ModifySecurityAPIServiceResponse;
const OCSPStaplingParameters = models.OCSPStaplingParameters;
const CreateL4ProxyRulesRequest = models.CreateL4ProxyRulesRequest;
const DescribeDDoSAttackTopDataResponse = models.DescribeDDoSAttackTopDataResponse;
const SubRule = models.SubRule;
const ModifyMultiPathGatewayRequest = models.ModifyMultiPathGatewayRequest;
const LoadBalancer = models.LoadBalancer;
const CreateSecurityAPIServiceResponse = models.CreateSecurityAPIServiceResponse;
const HostName = models.HostName;
const DeleteRulesRequest = models.DeleteRulesRequest;
const ExceptUserRuleCondition = models.ExceptUserRuleCondition;
const DeleteWebSecurityTemplateResponse = models.DeleteWebSecurityTemplateResponse;
const ModifyL7AccRuleRequest = models.ModifyL7AccRuleRequest;
const MaxAge = models.MaxAge;
const DescribeCustomErrorPagesResponse = models.DescribeCustomErrorPagesResponse;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const AlgDetectRule = models.AlgDetectRule;
const SecEntryValue = models.SecEntryValue;
const DescribeSecurityAPIResourceRequest = models.DescribeSecurityAPIResourceRequest;
const DiffIPWhitelist = models.DiffIPWhitelist;
const DeleteSecurityIPGroupResponse = models.DeleteSecurityIPGroupResponse;
const ModifyRuleRequest = models.ModifyRuleRequest;
const SetContentIdentifierParameters = models.SetContentIdentifierParameters;
const RenewPlanRequest = models.RenewPlanRequest;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const ManagedRuleDetail = models.ManagedRuleDetail;
const NextOriginACL = models.NextOriginACL;
const DescribeMultiPathGatewayRegionsRequest = models.DescribeMultiPathGatewayRegionsRequest;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const ModifyL4ProxyStatusResponse = models.ModifyL4ProxyStatusResponse;
const FileVerification = models.FileVerification;
const ModifyWebSecurityTemplateResponse = models.ModifyWebSecurityTemplateResponse;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const DeleteL7AccRulesRequest = models.DeleteL7AccRulesRequest;
const SmartRouting = models.SmartRouting;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const BotUserRule = models.BotUserRule;
const Task = models.Task;
const DescribeL4ProxyRulesResponse = models.DescribeL4ProxyRulesResponse;
const OriginHealthStatus = models.OriginHealthStatus;
const ZoneConfig = models.ZoneConfig;
const CustomizedHeader = models.CustomizedHeader;
const ModifyDDoSProtectionResponse = models.ModifyDDoSProtectionResponse;
const DescribeFunctionsRequest = models.DescribeFunctionsRequest;
const ModifyDnsRecordsStatusRequest = models.ModifyDnsRecordsStatusRequest;
const ModifyZoneRequest = models.ModifyZoneRequest;
const CustomRule = models.CustomRule;
const BotExtendAction = models.BotExtendAction;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const DeleteAccelerationDomainsResponse = models.DeleteAccelerationDomainsResponse;
const ExceptionRules = models.ExceptionRules;
const ExceptConfig = models.ExceptConfig;
const RedirectActionParameters = models.RedirectActionParameters;
const DeleteOriginGroupRequest = models.DeleteOriginGroupRequest;
const DescribeDDoSProtectionRequest = models.DescribeDDoSProtectionRequest;
const AclCondition = models.AclCondition;
const DescribeJustInTimeTranscodeTemplatesResponse = models.DescribeJustInTimeTranscodeTemplatesResponse;
const Identification = models.Identification;
const RequestBodyTransferTimeout = models.RequestBodyTransferTimeout;
const L7OfflineLog = models.L7OfflineLog;
const ModifyRuleResponse = models.ModifyRuleResponse;
const ApplicationProxyRule = models.ApplicationProxyRule;
const UpstreamCertInfo = models.UpstreamCertInfo;
const Zone = models.Zone;
const RuleNormalActionParams = models.RuleNormalActionParams;
const ErrorPageParameters = models.ErrorPageParameters;
const DescribeRulesSettingResponse = models.DescribeRulesSettingResponse;
const BindSecurityTemplateToEntityResponse = models.BindSecurityTemplateToEntityResponse;
const ModifyL4ProxyRulesResponse = models.ModifyL4ProxyRulesResponse;
const DDoSAttackEvent = models.DDoSAttackEvent;
const ClientIpHeader = models.ClientIpHeader;
const DescribeConfigGroupVersionDetailRequest = models.DescribeConfigGroupVersionDetailRequest;
const ModifyPlanResponse = models.ModifyPlanResponse;
const DropPageDetail = models.DropPageDetail;
const CnameStatus = models.CnameStatus;
const WafConfig = models.WafConfig;
const BandwidthAbuseDefense = models.BandwidthAbuseDefense;
const ServerCertInfo = models.ServerCertInfo;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DescribeZoneConfigImportResultResponse = models.DescribeZoneConfigImportResultResponse;
const Tag = models.Tag;
const BindSharedCNAMEResponse = models.BindSharedCNAMEResponse;
const DeleteSharedCNAMERequest = models.DeleteSharedCNAMERequest;
const CustomRules = models.CustomRules;
const ModifyRealtimeLogDeliveryTaskRequest = models.ModifyRealtimeLogDeliveryTaskRequest;
const VideoTemplateInfo = models.VideoTemplateInfo;
const HandleFunctionRuntimeEnvironmentResponse = models.HandleFunctionRuntimeEnvironmentResponse;
const DestroyPlanRequest = models.DestroyPlanRequest;
const BlockIPActionParameters = models.BlockIPActionParameters;
const CreatePlanRequest = models.CreatePlanRequest;
const DetectLengthLimitConfig = models.DetectLengthLimitConfig;
const DescribeFunctionRuntimeEnvironmentRequest = models.DescribeFunctionRuntimeEnvironmentRequest;
const IPGroup = models.IPGroup;
const DescribeDnsRecordsRequest = models.DescribeDnsRecordsRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const CreateSecurityJSInjectionRuleRequest = models.CreateSecurityJSInjectionRuleRequest;
const DescribeMultiPathGatewaysResponse = models.DescribeMultiPathGatewaysResponse;
const MaxAgeParameters = models.MaxAgeParameters;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const DDoS = models.DDoS;
const ModifyL7AccRulePriorityResponse = models.ModifyL7AccRulePriorityResponse;
const APIService = models.APIService;
const CreateConfigGroupVersionResponse = models.CreateConfigGroupVersionResponse;
const ConfirmOriginACLUpdateRequest = models.ConfirmOriginACLUpdateRequest;
const CreateJustInTimeTranscodeTemplateResponse = models.CreateJustInTimeTranscodeTemplateResponse;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const DescribeSecurityClientAttesterRequest = models.DescribeSecurityClientAttesterRequest;
const WebSocketParameters = models.WebSocketParameters;
const RuleItem = models.RuleItem;
const SlowRateConfig = models.SlowRateConfig;
const Cache = models.Cache;
const CustomTime = models.CustomTime;
const DetailHost = models.DetailHost;
const DescribeRealtimeLogDeliveryTasksResponse = models.DescribeRealtimeLogDeliveryTasksResponse;
const TopEntry = models.TopEntry;
const DescribeConfigGroupVersionsResponse = models.DescribeConfigGroupVersionsResponse;
const FunctionEnvironmentVariable = models.FunctionEnvironmentVariable;
const DeleteRealtimeLogDeliveryTaskResponse = models.DeleteRealtimeLogDeliveryTaskResponse;
const RuleCondition = models.RuleCondition;
const DescribeOverviewL7DataResponse = models.DescribeOverviewL7DataResponse;
const DescribeSecurityPolicyRequest = models.DescribeSecurityPolicyRequest;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const CacheParameters = models.CacheParameters;
const TimingDataItem = models.TimingDataItem;
const RateLimitUserRule = models.RateLimitUserRule;
const DeployRecord = models.DeployRecord;
const CreatePlanForZoneRequest = models.CreatePlanForZoneRequest;
const DeviceProfile = models.DeviceProfile;
const CreateJustInTimeTranscodeTemplateRequest = models.CreateJustInTimeTranscodeTemplateRequest;
const ModifyCustomErrorPageRequest = models.ModifyCustomErrorPageRequest;
const ModifyFunctionRuleResponse = models.ModifyFunctionRuleResponse;
const DescribeL7AccRulesRequest = models.DescribeL7AccRulesRequest;
const DescribeFunctionRulesResponse = models.DescribeFunctionRulesResponse;
const CacheKey = models.CacheKey;
const DownloadL4LogsResponse = models.DownloadL4LogsResponse;
const BindSharedCNAMERequest = models.BindSharedCNAMERequest;
const IpTableConfig = models.IpTableConfig;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const DeleteOriginGroupResponse = models.DeleteOriginGroupResponse;
const ModifyOriginParameters = models.ModifyOriginParameters;
const DescribeMultiPathGatewayRegionsResponse = models.DescribeMultiPathGatewayRegionsResponse;
const DescribeL4ProxyRequest = models.DescribeL4ProxyRequest;
const DescribeIdentificationsRequest = models.DescribeIdentificationsRequest;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const DescribeSecurityAPIServiceResponse = models.DescribeSecurityAPIServiceResponse;
const CreateAccelerationDomainRequest = models.CreateAccelerationDomainRequest;
const NormalAction = models.NormalAction;
const DenyActionParameters = models.DenyActionParameters;
const TopDetailData = models.TopDetailData;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const CreateMultiPathGatewayResponse = models.CreateMultiPathGatewayResponse;
const DeleteJustInTimeTranscodeTemplatesResponse = models.DeleteJustInTimeTranscodeTemplatesResponse;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const ModifyDnsRecordsRequest = models.ModifyDnsRecordsRequest;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const CacheConfig = models.CacheConfig;
const ClientAttestationRules = models.ClientAttestationRules;
const DescribeL7AccSettingRequest = models.DescribeL7AccSettingRequest;
const UpgradePlanResponse = models.UpgradePlanResponse;
const AclConfig = models.AclConfig;
const JITVideoProcess = models.JITVideoProcess;
const OfflineCache = models.OfflineCache;
const IntelligenceRule = models.IntelligenceRule;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const CreateConfigGroupVersionRequest = models.CreateConfigGroupVersionRequest;
const AclUserRule = models.AclUserRule;
const DescribeLoadBalancerListRequest = models.DescribeLoadBalancerListRequest;
const IPExpireInfo = models.IPExpireInfo;
const AccessURLRedirectParameters = models.AccessURLRedirectParameters;
const DescribeDDoSAttackEventRequest = models.DescribeDDoSAttackEventRequest;
const CacheConfigParameters = models.CacheConfigParameters;
const CreateL4ProxyResponse = models.CreateL4ProxyResponse;
const CacheKeyParameters = models.CacheKeyParameters;
const ModifyFunctionResponse = models.ModifyFunctionResponse;
const CreateL4ProxyRulesResponse = models.CreateL4ProxyRulesResponse;
const DescribeOriginGroupRequest = models.DescribeOriginGroupRequest;
const CreateSecurityClientAttesterRequest = models.CreateSecurityClientAttesterRequest;
const DescribeIPRegionRequest = models.DescribeIPRegionRequest;
const BindDomainInfo = models.BindDomainInfo;
const TimingTypeValue = models.TimingTypeValue;
const CreatePlanForZoneResponse = models.CreatePlanForZoneResponse;
const ClientAttester = models.ClientAttester;
const ModifyL4ProxyRulesStatusResponse = models.ModifyL4ProxyRulesStatusResponse;
const CheckCnameStatusResponse = models.CheckCnameStatusResponse;
const ImportZoneConfigResponse = models.ImportZoneConfigResponse;
const ModifyWebSecurityTemplateRequest = models.ModifyWebSecurityTemplateRequest;
const DescribeWebSecurityTemplateRequest = models.DescribeWebSecurityTemplateRequest;
const ClientAttestationRule = models.ClientAttestationRule;
const CustomEndpoint = models.CustomEndpoint;
const ModifyOriginACLResponse = models.ModifyOriginACLResponse;
const VerifyOwnershipRequest = models.VerifyOwnershipRequest;
const MultiPathGatewayLine = models.MultiPathGatewayLine;
const ResponseSpeedLimitParameters = models.ResponseSpeedLimitParameters;
const ModifyMultiPathGatewayResponse = models.ModifyMultiPathGatewayResponse;
const BotManagement = models.BotManagement;
const DeleteL4ProxyRequest = models.DeleteL4ProxyRequest;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const AccelerateMainlandParameters = models.AccelerateMainlandParameters;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const UpstreamURLRewriteParameters = models.UpstreamURLRewriteParameters;
const DescribeL4ProxyResponse = models.DescribeL4ProxyResponse;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const ModifyOriginGroupResponse = models.ModifyOriginGroupResponse;
const DeleteAccelerationDomainsRequest = models.DeleteAccelerationDomainsRequest;
const RenewPlanResponse = models.RenewPlanResponse;
const CustomErrorPage = models.CustomErrorPage;
const DescribeDeployHistoryRequest = models.DescribeDeployHistoryRequest;
const Header = models.Header;
const CreateMultiPathGatewayLineResponse = models.CreateMultiPathGatewayLineResponse;
const BillingData = models.BillingData;
const DescribePlansRequest = models.DescribePlansRequest;
const CreateSecurityJSInjectionRuleResponse = models.CreateSecurityJSInjectionRuleResponse;
const ModifyOriginGroupRequest = models.ModifyOriginGroupRequest;
const RefreshMultiPathGatewaySecretKeyResponse = models.RefreshMultiPathGatewaySecretKeyResponse;
const DeleteZoneResponse = models.DeleteZoneResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const ModifyL7AccSettingResponse = models.ModifyL7AccSettingResponse;
const DeleteSecurityJSInjectionRuleResponse = models.DeleteSecurityJSInjectionRuleResponse;
const ReturnCustomPageActionParameters = models.ReturnCustomPageActionParameters;
const DescribeAccelerationDomainsResponse = models.DescribeAccelerationDomainsResponse;
const BindZoneToPlanResponse = models.BindZoneToPlanResponse;
const DeleteWebSecurityTemplateRequest = models.DeleteWebSecurityTemplateRequest;
const DescribeL7AccSettingResponse = models.DescribeL7AccSettingResponse;
const ModifyAliasDomainRequest = models.ModifyAliasDomainRequest;
const OriginInfo = models.OriginInfo;
const CreateDnsRecordRequest = models.CreateDnsRecordRequest;
const WafRule = models.WafRule;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const DomainDDoSProtection = models.DomainDDoSProtection;
const ModifyAliasDomainStatusRequest = models.ModifyAliasDomainStatusRequest;
const DeleteFunctionRequest = models.DeleteFunctionRequest;
const BindSharedCNAMEMap = models.BindSharedCNAMEMap;
const DeleteRealtimeLogDeliveryTaskRequest = models.DeleteRealtimeLogDeliveryTaskRequest;
const RulesSettingAction = models.RulesSettingAction;
const ForceRedirectHTTPSParameters = models.ForceRedirectHTTPSParameters;
const MutualTLS = models.MutualTLS;
const Ipv6 = models.Ipv6;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const CreateFunctionResponse = models.CreateFunctionResponse;
const DescribeLoadBalancerListResponse = models.DescribeLoadBalancerListResponse;
const AlgDetectJS = models.AlgDetectJS;
const SubRuleItem = models.SubRuleItem;
const DescribeL7AccRulesResponse = models.DescribeL7AccRulesResponse;
const DeleteSecurityIPGroupRequest = models.DeleteSecurityIPGroupRequest;
const Grpc = models.Grpc;
const CreateAliasDomainResponse = models.CreateAliasDomainResponse;
const ClientIpCountry = models.ClientIpCountry;
const DeleteSecurityClientAttesterRequest = models.DeleteSecurityClientAttesterRequest;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const ManagedRuleAction = models.ManagedRuleAction;
const ModifyL7AccRuleResponse = models.ModifyL7AccRuleResponse;
const FileAscriptionInfo = models.FileAscriptionInfo;
const CreateRealtimeLogDeliveryTaskResponse = models.CreateRealtimeLogDeliveryTaskResponse;
const DescribeTopL7CacheDataResponse = models.DescribeTopL7CacheDataResponse;
const DescribeFunctionRuntimeEnvironmentResponse = models.DescribeFunctionRuntimeEnvironmentResponse;
const GrpcParameters = models.GrpcParameters;
const RuleChoicePropertiesItem = models.RuleChoicePropertiesItem;
const DescribeSecurityTemplateBindingsResponse = models.DescribeSecurityTemplateBindingsResponse;
const ModifyAliasDomainStatusResponse = models.ModifyAliasDomainStatusResponse;
const DeleteFunctionRulesRequest = models.DeleteFunctionRulesRequest;
const DescribeTimingL7AnalysisDataRequest = models.DescribeTimingL7AnalysisDataRequest;
const NoCache = models.NoCache;
const ModifyFunctionRequest = models.ModifyFunctionRequest;
const ManagedRuleGroup = models.ManagedRuleGroup;
const CreateZoneRequest = models.CreateZoneRequest;
const SecurityPolicy = models.SecurityPolicy;
const AscriptionInfo = models.AscriptionInfo;
const ModifySecurityClientAttesterResponse = models.ModifySecurityClientAttesterResponse;
const ModifyOriginACLRequest = models.ModifyOriginACLRequest;
const FirstPartConfig = models.FirstPartConfig;
const Waf = models.Waf;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const JustInTimeTranscodeTemplate = models.JustInTimeTranscodeTemplate;
const DeleteSecurityAPIServiceRequest = models.DeleteSecurityAPIServiceRequest;
const TCCaptchaOption = models.TCCaptchaOption;
const DescribeDnsRecordsResponse = models.DescribeDnsRecordsResponse;
const CreateWebSecurityTemplateRequest = models.CreateWebSecurityTemplateRequest;
const CreateL4ProxyRequest = models.CreateL4ProxyRequest;
const CreatePlanResponse = models.CreatePlanResponse;
const DescribeApplicationProxiesRequest = models.DescribeApplicationProxiesRequest;
const DescribeContentQuotaRequest = models.DescribeContentQuotaRequest;
const AllowActionParameters = models.AllowActionParameters;
const Hsts = models.Hsts;
const OwnershipVerification = models.OwnershipVerification;
const CreateRuleRequest = models.CreateRuleRequest;
const ModifyL4ProxyStatusRequest = models.ModifyL4ProxyStatusRequest;
const CreateMultiPathGatewayLineRequest = models.CreateMultiPathGatewayLineRequest;
const Plan = models.Plan;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const RateLimitingRule = models.RateLimitingRule;
const CertificateInfo = models.CertificateInfo;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const CC = models.CC;
const HandleFunctionRuntimeEnvironmentRequest = models.HandleFunctionRuntimeEnvironmentRequest;
const ModifyL4ProxyRulesStatusRequest = models.ModifyL4ProxyRulesStatusRequest;
const DescribeCustomErrorPagesRequest = models.DescribeCustomErrorPagesRequest;
const GatewayRegion = models.GatewayRegion;
const CachePrefreshParameters = models.CachePrefreshParameters;
const Action = models.Action;
const JSInjectionRule = models.JSInjectionRule;
const UpstreamFollowRedirectParameters = models.UpstreamFollowRedirectParameters;
const DescribeSecurityClientAttesterResponse = models.DescribeSecurityClientAttesterResponse;
const ApplicationProxy = models.ApplicationProxy;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const ModifySecurityIPGroupResponse = models.ModifySecurityIPGroupResponse;
const SecurityType = models.SecurityType;
const ZoneSetting = models.ZoneSetting;
const ModifyL4ProxyRequest = models.ModifyL4ProxyRequest;
const DescribeSecurityJSInjectionRuleRequest = models.DescribeSecurityJSInjectionRuleRequest;
const DropPageConfig = models.DropPageConfig;
const DescribeSecurityIPGroupInfoRequest = models.DescribeSecurityIPGroupInfoRequest;
const ExceptUserRuleScope = models.ExceptUserRuleScope;
const PartialModule = models.PartialModule;
const DescribeZoneConfigImportResultRequest = models.DescribeZoneConfigImportResultRequest;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const AccelerateType = models.AccelerateType;
const DeliveryCondition = models.DeliveryCondition;
const ExceptionRule = models.ExceptionRule;
const FollowOrigin = models.FollowOrigin;
const DescribeMultiPathGatewayResponse = models.DescribeMultiPathGatewayResponse;
const IPRegionInfo = models.IPRegionInfo;
const DestroyPlanResponse = models.DestroyPlanResponse;
const CreateSecurityAPIResourceRequest = models.CreateSecurityAPIResourceRequest;
const TLSConfigParameters = models.TLSConfigParameters;
const QueryCondition = models.QueryCondition;
const RuleRewriteActionParams = models.RuleRewriteActionParams;
const ClientIPHeaderParameters = models.ClientIPHeaderParameters;
const L4OfflineLog = models.L4OfflineLog;
const ModifyAliasDomainResponse = models.ModifyAliasDomainResponse;
const DeleteDnsRecordsRequest = models.DeleteDnsRecordsRequest;
const OfflineCacheParameters = models.OfflineCacheParameters;
const DeleteAliasDomainRequest = models.DeleteAliasDomainRequest;
const DeleteFunctionRulesResponse = models.DeleteFunctionRulesResponse;
const DescribeTopL7AnalysisDataResponse = models.DescribeTopL7AnalysisDataResponse;
const ModifyContentIdentifierRequest = models.ModifyContentIdentifierRequest;
const DeleteMultiPathGatewayLineRequest = models.DeleteMultiPathGatewayLineRequest;
const Resource = models.Resource;
const DDoSProtection = models.DDoSProtection;
const ModifyResponseHeaderParameters = models.ModifyResponseHeaderParameters;
const DescribeOriginProtectionRequest = models.DescribeOriginProtectionRequest;
const DeleteContentIdentifierResponse = models.DeleteContentIdentifierResponse;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const DeleteRulesResponse = models.DeleteRulesResponse;
const OriginGroup = models.OriginGroup;
const ModifySecurityIPGroupRequest = models.ModifySecurityIPGroupRequest;
const VaryParameters = models.VaryParameters;
const L4Proxy = models.L4Proxy;
const SkipCondition = models.SkipCondition;
const CreateSharedCNAMERequest = models.CreateSharedCNAMERequest;
const UpstreamHttp2 = models.UpstreamHttp2;
const EnableOriginACLResponse = models.EnableOriginACLResponse;
const DeleteAliasDomainResponse = models.DeleteAliasDomainResponse;
const DeleteSecurityJSInjectionRuleRequest = models.DeleteSecurityJSInjectionRuleRequest;
const BotConfig = models.BotConfig;
const EnableOriginACLRequest = models.EnableOriginACLRequest;
const ModifyZoneResponse = models.ModifyZoneResponse;
const DeleteMultiPathGatewayLineResponse = models.DeleteMultiPathGatewayLineResponse;
const ClientFiltering = models.ClientFiltering;
const DescribeTopL7CacheDataRequest = models.DescribeTopL7CacheDataRequest;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const Https = models.Https;
const DescribeOriginGroupHealthStatusRequest = models.DescribeOriginGroupHealthStatusRequest;
const DescribeContentIdentifiersRequest = models.DescribeContentIdentifiersRequest;
const ExportZoneConfigRequest = models.ExportZoneConfigRequest;
const OriginGroupHealthStatusDetail = models.OriginGroupHealthStatusDetail;
const L4ProxyRule = models.L4ProxyRule;
const CacheKeyQueryString = models.CacheKeyQueryString;
const AdvancedFilter = models.AdvancedFilter;
const DescribeDDoSAttackDataResponse = models.DescribeDDoSAttackDataResponse;
const TemplateConfig = models.TemplateConfig;
const ErrorPageReference = models.ErrorPageReference;
const DescribeIdentificationsResponse = models.DescribeIdentificationsResponse;
const DeleteL4ProxyResponse = models.DeleteL4ProxyResponse;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const ManagedRuleAutoUpdate = models.ManagedRuleAutoUpdate;
const ClientIPCountryParameters = models.ClientIPCountryParameters;
const IncreasePlanQuotaResponse = models.IncreasePlanQuotaResponse;
const DescribeIPRegionResponse = models.DescribeIPRegionResponse;
const DescribeAvailablePlansRequest = models.DescribeAvailablePlansRequest;
const DnsVerification = models.DnsVerification;
const AlgDetectSession = models.AlgDetectSession;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const DeleteContentIdentifierRequest = models.DeleteContentIdentifierRequest;
const RefreshMultiPathGatewaySecretKeyRequest = models.RefreshMultiPathGatewaySecretKeyRequest;
const CreateContentIdentifierRequest = models.CreateContentIdentifierRequest;
const OriginProtectionInfo = models.OriginProtectionInfo;
const ModifyDnsRecordsStatusResponse = models.ModifyDnsRecordsStatusResponse;
const ModifySecurityJSInjectionRuleResponse = models.ModifySecurityJSInjectionRuleResponse;
const AliasDomain = models.AliasDomain;
const ImportZoneConfigRequest = models.ImportZoneConfigRequest;
const IpTableRule = models.IpTableRule;
const DDosProtectionConfig = models.DDosProtectionConfig;
const ModifyFunctionRuleRequest = models.ModifyFunctionRuleRequest;
const DescribePlansResponse = models.DescribePlansResponse;
const IncreasePlanQuotaRequest = models.IncreasePlanQuotaRequest;
const FunctionRule = models.FunctionRule;
const UpstreamRequestCookie = models.UpstreamRequestCookie;
const DescribeDDoSAttackTopDataRequest = models.DescribeDDoSAttackTopDataRequest;
const Quic = models.Quic;
const DescribeDDoSAttackDataRequest = models.DescribeDDoSAttackDataRequest;
const SlowAttackDefense = models.SlowAttackDefense;
const CreateCLSIndexRequest = models.CreateCLSIndexRequest;
const DescribeRulesRequest = models.DescribeRulesRequest;
const DescribeContentQuotaResponse = models.DescribeContentQuotaResponse;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const AccelerationDomain = models.AccelerationDomain;
const ContentIdentifier = models.ContentIdentifier;
const CreateCustomizeErrorPageResponse = models.CreateCustomizeErrorPageResponse;
const RuleEngineAction = models.RuleEngineAction;
const StatusCodeCacheParameters = models.StatusCodeCacheParameters;
const RewriteAction = models.RewriteAction;
const TemplateScope = models.TemplateScope;
const ErrorPage = models.ErrorPage;
const APIResource = models.APIResource;
const HTTP2Parameters = models.HTTP2Parameters;
const DescribeOverviewL7DataRequest = models.DescribeOverviewL7DataRequest;
const CreateMultiPathGatewayRequest = models.CreateMultiPathGatewayRequest;
const DeleteSharedCNAMEResponse = models.DeleteSharedCNAMEResponse;
const ModifyMultiPathGatewaySecretKeyResponse = models.ModifyMultiPathGatewaySecretKeyResponse;
const DescribeMultiPathGatewaySecretKeyRequest = models.DescribeMultiPathGatewaySecretKeyRequest;
const DDoSBlockData = models.DDoSBlockData;
const DescribeMultiPathGatewaysRequest = models.DescribeMultiPathGatewaysRequest;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const ModifyMultiPathGatewaySecretKeyRequest = models.ModifyMultiPathGatewaySecretKeyRequest;
const DnsRecord = models.DnsRecord;
const OriginPrivateParameters = models.OriginPrivateParameters;
const HSTSParameters = models.HSTSParameters;
const DeleteSecurityAPIResourceResponse = models.DeleteSecurityAPIResourceResponse;
const BindZoneToPlanRequest = models.BindZoneToPlanRequest;
const DeleteFunctionResponse = models.DeleteFunctionResponse;
const IPWhitelist = models.IPWhitelist;
const ModifyDDoSProtectionRequest = models.ModifyDDoSProtectionRequest;
const ModifyL7AccSettingRequest = models.ModifyL7AccSettingRequest;
const ModifyFunctionRulePriorityResponse = models.ModifyFunctionRulePriorityResponse;
const CreateCustomizeErrorPageRequest = models.CreateCustomizeErrorPageRequest;
const URLPath = models.URLPath;
const DescribeSecurityIPGroupRequest = models.DescribeSecurityIPGroupRequest;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const DescribeMultiPathGatewayLineResponse = models.DescribeMultiPathGatewayLineResponse;
const OriginGroupInLoadBalancer = models.OriginGroupInLoadBalancer;
const HTTPResponseParameters = models.HTTPResponseParameters;
const UpstreamRequestParameters = models.UpstreamRequestParameters;
const DeleteSecurityClientAttesterResponse = models.DeleteSecurityClientAttesterResponse;
const TCRCEOption = models.TCRCEOption;
const NsVerification = models.NsVerification;
const AccelerateMainland = models.AccelerateMainland;
const ChallengeActionParameters = models.ChallengeActionParameters;
const StandardDebug = models.StandardDebug;
const RateLimitTemplateDetail = models.RateLimitTemplateDetail;
const AuthenticationParameters = models.AuthenticationParameters;
const BindSecurityTemplateToEntityRequest = models.BindSecurityTemplateToEntityRequest;
const RuleEngineSubRule = models.RuleEngineSubRule;
const IntelligenceRuleItem = models.IntelligenceRuleItem;
const ExportZoneConfigResponse = models.ExportZoneConfigResponse;
const PostMaxSize = models.PostMaxSize;
const DescribeBillingDataResponse = models.DescribeBillingDataResponse;
const Filter = models.Filter;
const CreateAccelerationDomainResponse = models.CreateAccelerationDomainResponse;
const ModifyAccelerationDomainStatusesRequest = models.ModifyAccelerationDomainStatusesRequest;
const CreateZoneResponse = models.CreateZoneResponse;
const FunctionRuleCondition = models.FunctionRuleCondition;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const DeleteLoadBalancerResponse = models.DeleteLoadBalancerResponse;
const DeleteL7AccRulesResponse = models.DeleteL7AccRulesResponse;
const DescribeOriginGroupHealthStatusResponse = models.DescribeOriginGroupHealthStatusResponse;
const DescribeContentIdentifiersResponse = models.DescribeContentIdentifiersResponse;
const CacheConfigCustomTime = models.CacheConfigCustomTime;
const ManagedRules = models.ManagedRules;
const SecurityTemplateBinding = models.SecurityTemplateBinding;
const DescribeMultiPathGatewaySecretKeyResponse = models.DescribeMultiPathGatewaySecretKeyResponse;
const CreateSecurityAPIResourceResponse = models.CreateSecurityAPIResourceResponse;
const CacheTag = models.CacheTag;
const CreateSecurityClientAttesterResponse = models.CreateSecurityClientAttesterResponse;
const ModifyMultiPathGatewayLineResponse = models.ModifyMultiPathGatewayLineResponse;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const CreateOriginGroupResponse = models.CreateOriginGroupResponse;
const DescribeSecurityPolicyResponse = models.DescribeSecurityPolicyResponse;
const CreateContentIdentifierResponse = models.CreateContentIdentifierResponse;
const HostHeaderParameters = models.HostHeaderParameters;
const DescribeConfigGroupVersionsRequest = models.DescribeConfigGroupVersionsRequest;
const DescribeL4ProxyRulesRequest = models.DescribeL4ProxyRulesRequest;
const AiRule = models.AiRule;
const Function = models.Function;
const DescribeWebSecurityTemplatesResponse = models.DescribeWebSecurityTemplatesResponse;
const Quota = models.Quota;
const CheckCnameStatusRequest = models.CheckCnameStatusRequest;
const DetectLengthLimitCondition = models.DetectLengthLimitCondition;
const ModifySecurityAPIResourceResponse = models.ModifySecurityAPIResourceResponse;
const DescribeSecurityIPGroupResponse = models.DescribeSecurityIPGroupResponse;
const UpgradePlanRequest = models.UpgradePlanRequest;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const DeleteDnsRecordsResponse = models.DeleteDnsRecordsResponse;
const ModifyRequestHeaderParameters = models.ModifyRequestHeaderParameters;
const CreateWebSecurityTemplateResponse = models.CreateWebSecurityTemplateResponse;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const HttpDDoSProtection = models.HttpDDoSProtection;
const CheckRegionHealthStatus = models.CheckRegionHealthStatus;
const ModifyMultiPathGatewayLineRequest = models.ModifyMultiPathGatewayLineRequest;
const DescribeFunctionRulesRequest = models.DescribeFunctionRulesRequest;
const DeployConfigGroupVersionResponse = models.DeployConfigGroupVersionResponse;
const Addresses = models.Addresses;
const RateLimitIntelligence = models.RateLimitIntelligence;
const DescribeDeployHistoryResponse = models.DescribeDeployHistoryResponse;
const DescribeJustInTimeTranscodeTemplatesRequest = models.DescribeJustInTimeTranscodeTemplatesRequest;
const QueryString = models.QueryString;
const ModifySecurityClientAttesterRequest = models.ModifySecurityClientAttesterRequest;
const DescribeAccelerationDomainsRequest = models.DescribeAccelerationDomainsRequest;
const CreateDnsRecordResponse = models.CreateDnsRecordResponse;
const DescribeTimingL4DataRequest = models.DescribeTimingL4DataRequest;
const DescribeTimingL4DataResponse = models.DescribeTimingL4DataResponse;
const VanityNameServersIps = models.VanityNameServersIps;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.intl.tencentcloudapi.com", "2022-09-01", credential, region, profile);
    }
    
    /**
     * To stop billing for your EdgeOne plan, you can use this interface to terminate the billing plan.
> Terminating a billing plan requires the following conditions:
    1. The plan has expired (except for the Enterprise Edition Plan);
    2. All sites under the plan have been either shut down or deleted.

> The site status can be queried through the [Query Site List](https://intl.cloud.tencent.com/document/product/1552/80713?from_cn_redirect=1) interface.
A site can be deactivated by switching the site to a closed status through the [Switch Site Status](https://intl.cloud.tencent.com/document/product/1552/80707?from_cn_redirect=1) interface.
A site can be deleted by using the [Delete Site](https://intl.cloud.tencent.com/document/product/1552/80717?from_cn_redirect=1) interface.
     * @param {DestroyPlanRequest} req
     * @param {function(string, DestroyPlanResponse):void} cb
     * @public
     */
    DestroyPlan(req, cb) {
        let resp = new DestroyPlanResponse();
        this.request("DestroyPlan", req, resp, cb);
    }

    /**
     * After creating a site and the site is accessed in NS mode, you can create DNS records through this API.
     * @param {CreateDnsRecordRequest} req
     * @param {function(string, CreateDnsRecordResponse):void} cb
     * @public
     */
    CreateDnsRecord(req, cb) {
        let resp = new CreateDnsRecordResponse();
        this.request("CreateDnsRecord", req, resp, cb);
    }

    /**
     * This API is used to export site configuration . The exported configuration is used for import via the API (ImportZoneConfig). This feature only supports the sites in the plans of the Standard Edition and the Enterprise Edition.
     * @param {ExportZoneConfigRequest} req
     * @param {function(string, ExportZoneConfigResponse):void} cb
     * @public
     */
    ExportZoneConfig(req, cb) {
        let resp = new ExportZoneConfigResponse();
        this.request("ExportZoneConfig", req, resp, cb);
    }

    /**
     * Batch query content identifiers, which can be filtered by ID, description, status, or Tag. Deleted content identifiers queried by status are retained for only three months. This feature is only open to the allowlist.
     * @param {DescribeContentIdentifiersRequest} req
     * @param {function(string, DescribeContentIdentifiersResponse):void} cb
     * @public
     */
    DescribeContentIdentifiers(req, cb) {
        let resp = new DescribeContentIdentifiersResponse();
        this.request("DescribeContentIdentifiers", req, resp, cb);
    }

    /**
     * This API is used to delete an edge function. Once deleted, the function cannot be recovered, and associated trigger rules are also deleted.
     * @param {DeleteFunctionRequest} req
     * @param {function(string, DeleteFunctionResponse):void} cb
     * @public
     */
    DeleteFunction(req, cb) {
        let resp = new DeleteFunctionResponse();
        this.request("DeleteFunction", req, resp, cb);
    }

    /**
     * When there are resources updated on the origin with the TTL remaining valid, users cannot access the latest resources. In this case, you can purge the cache using this API. There are two methods: <li>Delete: This method deletes the node cache without verification and retrieves the latest resources from the origin when receiving a request.</li><li>Invalidate: This method marks the node cache as invalid and sends a request with the If-None-Match and If-Modified-Since headers to the origin. If the origin responses with 200, the latest resources are retrieved to be cached on the node. If a 304 response is returned, the latest resources are not cached on the node.

</li>For more details, see [Cache Purge](https://intl.cloud.tencent.com/document/product/1552/70759?from_cn_redirect=1). </li>
     * @param {CreatePurgeTaskRequest} req
     * @param {function(string, CreatePurgeTaskResponse):void} cb
     * @public
     */
    CreatePurgeTask(req, cb) {
        let resp = new CreatePurgeTaskResponse();
        this.request("CreatePurgeTask", req, resp, cb);
    }

    /**
     * This API is used to search for site exclusive Anti-DDoS information.
     * @param {DescribeDDoSProtectionRequest} req
     * @param {function(string, DescribeDDoSProtectionResponse):void} cb
     * @public
     */
    DescribeDDoSProtection(req, cb) {
        let resp = new DescribeDDoSProtectionResponse();
        this.request("DescribeDDoSProtection", req, resp, cb);
    }

    /**
     * This API is used to query the list of available regions for user-created multi-channel security acceleration gateways (Cloud Gateway).
     * @param {DescribeMultiPathGatewayRegionsRequest} req
     * @param {function(string, DescribeMultiPathGatewayRegionsResponse):void} cb
     * @public
     */
    DescribeMultiPathGatewayRegions(req, cb) {
        let resp = new DescribeMultiPathGatewayRegionsResponse();
        this.request("DescribeMultiPathGatewayRegions", req, resp, cb);
    }

    /**
     * This API is used to download L4 logs.
     * @param {DownloadL4LogsRequest} req
     * @param {function(string, DownloadL4LogsResponse):void} cb
     * @public
     */
    DownloadL4Logs(req, cb) {
        let resp = new DownloadL4LogsResponse();
        this.request("DownloadL4Logs", req, resp, cb);
    }

    /**
     * This API is used to purchase a plan for a new site.
     * @param {CreatePlanForZoneRequest} req
     * @param {function(string, CreatePlanForZoneResponse):void} cb
     * @public
     */
    CreatePlanForZone(req, cb) {
        let resp = new CreatePlanForZoneResponse();
        this.request("CreatePlanForZone", req, resp, cb);
    }

    /**
     * This API is used to query content management quotas.
     * @param {DescribeContentQuotaRequest} req
     * @param {function(string, DescribeContentQuotaResponse):void} cb
     * @public
     */
    DescribeContentQuota(req, cb) {
        let resp = new DescribeContentQuotaResponse();
        this.request("DescribeContentQuota", req, resp, cb);
    }

    /**
     * This API is used to create a security policy configuration template.
     * @param {CreateWebSecurityTemplateRequest} req
     * @param {function(string, CreateWebSecurityTemplateResponse):void} cb
     * @public
     */
    CreateWebSecurityTemplate(req, cb) {
        let resp = new CreateWebSecurityTemplateResponse();
        this.request("CreateWebSecurityTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the real-time log delivery task list.
     * @param {DescribeRealtimeLogDeliveryTasksRequest} req
     * @param {function(string, DescribeRealtimeLogDeliveryTasksResponse):void} cb
     * @public
     */
    DescribeRealtimeLogDeliveryTasks(req, cb) {
        let resp = new DescribeRealtimeLogDeliveryTasksResponse();
        this.request("DescribeRealtimeLogDeliveryTasks", req, resp, cb);
    }

    /**
     * This API is used to modify a site.
     * @param {ModifyZoneRequest} req
     * @param {function(string, ModifyZoneResponse):void} cb
     * @public
     */
    ModifyZone(req, cb) {
        let resp = new ModifyZoneResponse();
        this.request("ModifyZone", req, resp, cb);
    }

    /**
     * This API is used to query security policy configuration template details.
     * @param {DescribeWebSecurityTemplateRequest} req
     * @param {function(string, DescribeWebSecurityTemplateResponse):void} cb
     * @public
     */
    DescribeWebSecurityTemplate(req, cb) {
        let resp = new DescribeWebSecurityTemplateResponse();
        this.request("DescribeWebSecurityTemplate", req, resp, cb);
    }

    /**
     * This API is used to create a trigger rule for an edge function.
     * @param {CreateFunctionRuleRequest} req
     * @param {function(string, CreateFunctionRuleResponse):void} cb
     * @public
     */
    CreateFunctionRule(req, cb) {
        let resp = new CreateFunctionRuleResponse();
        this.request("CreateFunctionRule", req, resp, cb);
    }

    /**
     * This API is used to delete a trigger rule for an edge function.
     * @param {DeleteFunctionRulesRequest} req
     * @param {function(string, DeleteFunctionRulesResponse):void} cb
     * @public
     */
    DeleteFunctionRules(req, cb) {
        let resp = new DeleteFunctionRulesResponse();
        this.request("DeleteFunctionRules", req, resp, cb);
    }

    /**
     * This API is used to verify ownership of the site.
     * @param {IdentifyZoneRequest} req
     * @param {function(string, IdentifyZoneResponse):void} cb
     * @public
     */
    IdentifyZone(req, cb) {
        let resp = new IdentifyZoneResponse();
        this.request("IdentifyZone", req, resp, cb);
    }

    /**
     * This API is used to query a list of default certificates.
     * @param {DescribeDefaultCertificatesRequest} req
     * @param {function(string, DescribeDefaultCertificatesResponse):void} cb
     * @public
     */
    DescribeDefaultCertificates(req, cb) {
        let resp = new DescribeDefaultCertificatesResponse();
        this.request("DescribeDefaultCertificates", req, resp, cb);
    }

    /**
     * This API is used to modify rules in the [rule engine](https://intl.cloud.tencent.com/document/product/1552/70901?from_cn_redirect=1), supporting only one rule modification per request.
     * @param {ModifyL7AccRuleRequest} req
     * @param {function(string, ModifyL7AccRuleResponse):void} cb
     * @public
     */
    ModifyL7AccRule(req, cb) {
        let resp = new ModifyL7AccRuleResponse();
        this.request("ModifyL7AccRule", req, resp, cb);
    }

    /**
     * This API is used to create a JavaScript injection rule.
     * @param {CreateSecurityJSInjectionRuleRequest} req
     * @param {function(string, CreateSecurityJSInjectionRuleResponse):void} cb
     * @public
     */
    CreateSecurityJSInjectionRule(req, cb) {
        let resp = new CreateSecurityJSInjectionRuleResponse();
        this.request("CreateSecurityJSInjectionRule", req, resp, cb);
    }

    /**
     * This API is used to query the runtime environment of an edge function, including environment variables.
     * @param {DescribeFunctionRuntimeEnvironmentRequest} req
     * @param {function(string, DescribeFunctionRuntimeEnvironmentResponse):void} cb
     * @public
     */
    DescribeFunctionRuntimeEnvironment(req, cb) {
        let resp = new DescribeFunctionRuntimeEnvironmentResponse();
        this.request("DescribeFunctionRuntimeEnvironment", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration of an origin group. The original configuration will be overwritten. 
     * @param {ModifyOriginGroupRequest} req
     * @param {function(string, ModifyOriginGroupResponse):void} cb
     * @public
     */
    ModifyOriginGroup(req, cb) {
        let resp = new ModifyOriginGroupResponse();
        this.request("ModifyOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to delete API resources.
     * @param {DeleteSecurityAPIResourceRequest} req
     * @param {function(string, DeleteSecurityAPIResourceResponse):void} cb
     * @public
     */
    DeleteSecurityAPIResource(req, cb) {
        let resp = new DeleteSecurityAPIResourceResponse();
        this.request("DeleteSecurityAPIResource", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [DeleteL4Proxy] (https://intl.cloud.tencent.com/document/product/1552/103415?from_cn_redirect=1).
     * @param {DeleteApplicationProxyRequest} req
     * @param {function(string, DeleteApplicationProxyResponse):void} cb
     * @public
     */
    DeleteApplicationProxy(req, cb) {
        let resp = new DeleteApplicationProxyResponse();
        this.request("DeleteApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to modify the global configuration of [Site Acceleration](https://intl.cloud.tencent.com/document/product/1552/96193?from_cn_redirect=1).
     * @param {ModifyL7AccSettingRequest} req
     * @param {function(string, ModifyL7AccSettingResponse):void} cb
     * @public
     */
    ModifyL7AccSetting(req, cb) {
        let resp = new ModifyL7AccSettingResponse();
        this.request("ModifyL7AccSetting", req, resp, cb);
    }

    /**
     * This API is used to create an API resource.
     * @param {CreateSecurityAPIResourceRequest} req
     * @param {function(string, CreateSecurityAPIResourceResponse):void} cb
     * @public
     */
    CreateSecurityAPIResource(req, cb) {
        let resp = new CreateSecurityAPIResourceResponse();
        this.request("CreateSecurityAPIResource", req, resp, cb);
    }

    /**
     * This API is used to modify the access lines of the multi-channel security acceleration gateway, including EdgeOne Layer-4 proxy lines and custom lines.
     * @param {ModifyMultiPathGatewayLineRequest} req
     * @param {function(string, ModifyMultiPathGatewayLineResponse):void} cb
     * @public
     */
    ModifyMultiPathGatewayLine(req, cb) {
        let resp = new ModifyMultiPathGatewayLineResponse();
        this.request("ModifyMultiPathGatewayLine", req, resp, cb);
    }

    /**
     * This API is used to enable or disable a Layer 4 proxy instance.
     * @param {ModifyL4ProxyStatusRequest} req
     * @param {function(string, ModifyL4ProxyStatusResponse):void} cb
     * @public
     */
    ModifyL4ProxyStatus(req, cb) {
        let resp = new ModifyL4ProxyStatusResponse();
        this.request("ModifyL4ProxyStatus", req, resp, cb);
    }

    /**
     * This API is used to download L7 logs.
     * @param {DownloadL7LogsRequest} req
     * @param {function(string, DownloadL7LogsResponse):void} cb
     * @public
     */
    DownloadL7Logs(req, cb) {
        let resp = new DownloadL7LogsResponse();
        this.request("DownloadL7Logs", req, resp, cb);
    }

    /**
     * This API is used to query environment information in version management mode. The response includes the environment ID, type, and current effective version. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
    }

    /**
     * This API is used to query the binding relationship between L7 acceleration domains/L4 proxy instances and origin ACLs under a site, as well as IP range details. If you want to periodically obtain the latest version of origin IP ranges through an automation script, you can poll this API at a low-frequency (recommended every three days). If the NextOriginACL field has a return value, synchronize the latest origin IP ranges to the origin server firewall configuration.
     * @param {DescribeOriginACLRequest} req
     * @param {function(string, DescribeOriginACLResponse):void} cb
     * @public
     */
    DescribeOriginACL(req, cb) {
        let resp = new DescribeOriginACLResponse();
        this.request("DescribeOriginACL", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [DeleteL4ProxyRules] (https://intl.cloud.tencent.com/document/product/1552/103414?from_cn_redirect=1).
     * @param {DeleteApplicationProxyRuleRequest} req
     * @param {function(string, DeleteApplicationProxyRuleResponse):void} cb
     * @public
     */
    DeleteApplicationProxyRule(req, cb) {
        let resp = new DeleteApplicationProxyRuleResponse();
        this.request("DeleteApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to query the CNAME status of a domain name.
     * @param {CheckCnameStatusRequest} req
     * @param {function(string, CheckCnameStatusResponse):void} cb
     * @public
     */
    CheckCnameStatus(req, cb) {
        let resp = new CheckCnameStatusResponse();
        this.request("CheckCnameStatus", req, resp, cb);
    }

    /**
     * Create a multi-channel security acceleration gateway via this API, including Cloud Gateway (gateway created and managed by Tencent Cloud) and private gateway (gateway deployed by users). Query the status using DescribeMultiPathGateway, and creation is successful if the status is online.
     * @param {CreateMultiPathGatewayRequest} req
     * @param {function(string, CreateMultiPathGatewayResponse):void} cb
     * @public
     */
    CreateMultiPathGateway(req, cb) {
        let resp = new CreateMultiPathGatewayResponse();
        this.request("CreateMultiPathGateway", req, resp, cb);
    }

    /**
     * This API is used to create a pre-warming task.
     * @param {CreatePrefetchTaskRequest} req
     * @param {function(string, CreatePrefetchTaskResponse):void} cb
     * @public
     */
    CreatePrefetchTask(req, cb) {
        let resp = new CreatePrefetchTaskResponse();
        this.request("CreatePrefetchTask", req, resp, cb);
    }

    /**
     * This API is used to delete an alias domain name.
The feature is only supported by the enterprise plan and is currently in closed beta testing. If you need to use it, [Contact Us](https://intl.cloud.tencent.com/online?from_cn_redirect=1-service?from=connect-us).
     * @param {DeleteAliasDomainRequest} req
     * @param {function(string, DeleteAliasDomainResponse):void} cb
     * @public
     */
    DeleteAliasDomain(req, cb) {
        let resp = new DeleteAliasDomainResponse();
        this.request("DeleteAliasDomain", req, resp, cb);
    }

    /**
     * This API is used to query the time sequence traffic data of the monitoring category in L7. This API is to be discarded. Please use the API <a href="https://intl.cloud.tencent.com/document/product/1552/80648?from_cn_redirect=1">DescribeTimingL7AnalysisData</a>.
     * @param {DescribeOverviewL7DataRequest} req
     * @param {function(string, DescribeOverviewL7DataResponse):void} cb
     * @public
     */
    DescribeOverviewL7Data(req, cb) {
        let resp = new DescribeOverviewL7DataResponse();
        this.request("DescribeOverviewL7Data", req, resp, cb);
    }

    /**
     * This API is used to create an acceleration domain name. 

For sites connected via the CNAME, if you have not verified the ownership of the domain name, the ownership verification information of the domain name is returned. To verify your ownership of the domain name, see [Ownership Verification](https://intl.cloud.tencent.com/document/product/1552/70789?from_cn_redirect=1).
     * @param {CreateAccelerationDomainRequest} req
     * @param {function(string, CreateAccelerationDomainResponse):void} cb
     * @public
     */
    CreateAccelerationDomain(req, cb) {
        let resp = new CreateAccelerationDomainResponse();
        this.request("CreateAccelerationDomain", req, resp, cb);
    }

    /**
     * This API is used to create lines integrated with the multi-channel security acceleration gateway, including EdgeOne Layer-4 proxy and custom lines.
     * @param {CreateMultiPathGatewayLineRequest} req
     * @param {function(string, CreateMultiPathGatewayLineResponse):void} cb
     * @public
     */
    CreateMultiPathGatewayLine(req, cb) {
        let resp = new CreateMultiPathGatewayLineResponse();
        this.request("CreateMultiPathGatewayLine", req, resp, cb);
    }

    /**
     * This API is used to modify an alias domain name.
The feature is only supported in the enterprise plan and is currently in closed beta testing. If you need to use it, [contact us](https://intl.cloud.tencent.com/online?from_cn_redirect=1-service?from=connect-us).
     * @param {ModifyAliasDomainRequest} req
     * @param {function(string, ModifyAliasDomainResponse):void} cb
     * @public
     */
    ModifyAliasDomain(req, cb) {
        let resp = new ModifyAliasDomainResponse();
        this.request("ModifyAliasDomain", req, resp, cb);
    }

    /**
     * This API is used to query the information of sites that you have access to. You can filter sites based on different query criteria.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to obtain detailed information about a version in version management mode. The response includes the version ID, description, status, creation time, configuration group information, and the content of the version configuration file. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DescribeConfigGroupVersionDetailRequest} req
     * @param {function(string, DescribeConfigGroupVersionDetailResponse):void} cb
     * @public
     */
    DescribeConfigGroupVersionDetail(req, cb) {
        let resp = new DescribeConfigGroupVersionDetailResponse();
        this.request("DescribeConfigGroupVersionDetail", req, resp, cb);
    }

    /**
     * This API is used to query the rule list of the rule engine (https://intl.cloud.tencent.com/document/product/1552/70901?from_cn_redirect=1).
     * @param {DescribeL7AccRulesRequest} req
     * @param {function(string, DescribeL7AccRulesResponse):void} cb
     * @public
     */
    DescribeL7AccRules(req, cb) {
        let resp = new DescribeL7AccRulesResponse();
        this.request("DescribeL7AccRules", req, resp, cb);
    }

    /**
     * This API is used to bind/unbind a domain name to/from a specific policy template. 
     * @param {BindSecurityTemplateToEntityRequest} req
     * @param {function(string, BindSecurityTemplateToEntityResponse):void} cb
     * @public
     */
    BindSecurityTemplateToEntity(req, cb) {
        let resp = new BindSecurityTemplateToEntityResponse();
        this.request("BindSecurityTemplateToEntity", req, resp, cb);
    }

    /**
     * This API is used to enable or disable specific origin ACLs for L7 acceleration domain names or L4 proxy instances. A single submission supports up to 200 L7 acceleration domain names or 100 L4 proxy instances. Hybrid submissions of L7 acceleration domain names and L4 proxy instances are supported, with a maximum total number of instances of 200. If changes are needed for exceeding 200 instances, submit them in batches via this API.
     * @param {ModifyOriginACLRequest} req
     * @param {function(string, ModifyOriginACLResponse):void} cb
     * @public
     */
    ModifyOriginACL(req, cb) {
        let resp = new ModifyOriginACLResponse();
        this.request("ModifyOriginACL", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [ModifyL4ProxyRulesStatus
] (https://intl.cloud.tencent.com/document/product/1552/103409?from_cn_redirect=1).
     * @param {ModifyApplicationProxyRuleStatusRequest} req
     * @param {function(string, ModifyApplicationProxyRuleStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRuleStatus(req, cb) {
        let resp = new ModifyApplicationProxyRuleStatusResponse();
        this.request("ModifyApplicationProxyRuleStatus", req, resp, cb);
    }

    /**
     * DescribePrefetchTasks is used to query the submission history and execution progress of preheating tasks. This interface can be used to query the tasks submitted by the CreatePrefetchTasks interface.
     * @param {DescribePrefetchTasksRequest} req
     * @param {function(string, DescribePrefetchTasksResponse):void} cb
     * @public
     */
    DescribePrefetchTasks(req, cb) {
        let resp = new DescribePrefetchTasksResponse();
        this.request("DescribePrefetchTasks", req, resp, cb);
    }

    /**
     * This API is used to delete an origin group. Note that an origin group can not be deleted if it is referenced by services (e.g. L4 Proxy, domain name service, load balancing, rule engines). 
     * @param {DeleteOriginGroupRequest} req
     * @param {function(string, DeleteOriginGroupResponse):void} cb
     * @public
     */
    DeleteOriginGroup(req, cb) {
        let resp = new DeleteOriginGroupResponse();
        this.request("DeleteOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to query the LoadBalancer list. The load balancing feature is in beta test. If you need to use it, [contact us](https://intl.cloud.tencent.com/online?from_cn_redirect=1-service).
     * @param {DescribeLoadBalancerListRequest} req
     * @param {function(string, DescribeLoadBalancerListResponse):void} cb
     * @public
     */
    DescribeLoadBalancerList(req, cb) {
        let resp = new DescribeLoadBalancerListResponse();
        this.request("DescribeLoadBalancerList", req, resp, cb);
    }

    /**
     * This API is used to create a security IP group.
     * @param {CreateSecurityIPGroupRequest} req
     * @param {function(string, CreateSecurityIPGroupResponse):void} cb
     * @public
     */
    CreateSecurityIPGroup(req, cb) {
        let resp = new CreateSecurityIPGroupResponse();
        this.request("CreateSecurityIPGroup", req, resp, cb);
    }

    /**
     * This API is used to check if the IP is an EdgeOne IP.
     * @param {DescribeIPRegionRequest} req
     * @param {function(string, DescribeIPRegionResponse):void} cb
     * @public
     */
    DescribeIPRegion(req, cb) {
        let resp = new DescribeIPRegionResponse();
        this.request("DescribeIPRegion", req, resp, cb);
    }

    /**
     * This API is used to modify LoadBalancer configuration. The load balancing feature is in beta test. If you need to use it, [contact us](https://intl.cloud.tencent.com/online?from_cn_redirect=1-service).
     * @param {ModifyLoadBalancerRequest} req
     * @param {function(string, ModifyLoadBalancerResponse):void} cb
     * @public
     */
    ModifyLoadBalancer(req, cb) {
        let resp = new ModifyLoadBalancerResponse();
        this.request("ModifyLoadBalancer", req, resp, cb);
    }

    /**
     * When you need features available only in higher-tier plans, you can upgrade your plan through this interface. Upgrades are only supported for Personal and Basic Edition Plans.
> For differences between EdgeOne billing plans, refer to [Comparison of EdgeOne Plans](https://intl.cloud.tencent.com/document/product/1552/94165?from_cn_redirect=1).
For EdgeOne plan upgrade rules and pricing details, refer to [EdgeOne Plan Upgrade Guide](https://intl.cloud.tencent.com/document/product/1552/95291?from_cn_redirect=1).
If your plan needs to upgrade to the Enterprise Edition, [Contact Us](https://intl.cloud.tencent.com/online?from_cn_redirect=1-service).
     * @param {UpgradePlanRequest} req
     * @param {function(string, UpgradePlanResponse):void} cb
     * @public
     */
    UpgradePlan(req, cb) {
        let resp = new UpgradePlanResponse();
        this.request("UpgradePlan", req, resp, cb);
    }

    /**
     * This API is used to batch remove accelerated domain names.
     * @param {DeleteAccelerationDomainsRequest} req
     * @param {function(string, DeleteAccelerationDomainsResponse):void} cb
     * @public
     */
    DeleteAccelerationDomains(req, cb) {
        let resp = new DeleteAccelerationDomainsResponse();
        this.request("DeleteAccelerationDomains", req, resp, cb);
    }

    /**
     * This API is used to delete JavaScript injection rules.
     * @param {DeleteSecurityJSInjectionRuleRequest} req
     * @param {function(string, DeleteSecurityJSInjectionRuleResponse):void} cb
     * @public
     */
    DeleteSecurityJSInjectionRule(req, cb) {
        let resp = new DeleteSecurityJSInjectionRuleResponse();
        this.request("DeleteSecurityJSInjectionRule", req, resp, cb);
    }

    /**
     * This API is used to refresh keys for multi-channel security acceleration gateways. Customers access multi-channel security acceleration gateways based on integration key signatures. Each site has only one access key, which applies to all gateways under that site. After refreshing the key, the original key becomes invalid.
     * @param {RefreshMultiPathGatewaySecretKeyRequest} req
     * @param {function(string, RefreshMultiPathGatewaySecretKeyResponse):void} cb
     * @public
     */
    RefreshMultiPathGatewaySecretKey(req, cb) {
        let resp = new RefreshMultiPathGatewaySecretKeyResponse();
        this.request("RefreshMultiPathGatewaySecretKey", req, resp, cb);
    }

    /**
     * This API is used to create a real-time log delivery task.
The following restrictions apply:

- When the log type (`LogType`) is site acceleration log (L7 access log) (`domain`), L4 proxy log (`application`), or Edge Function execution log (`function`), the same entity (L7 domain, L4 proxy instance, or Edge Function instance) can be added to only one of the following `TaskType` combinations within the same `LogType`-`Area` pair:
    - One task delivering to Tencent Cloud CLS plus one task delivering to a custom HTTP(S) endpoint;
    - One task delivering to Tencent Cloud CLS plus one task delivering to an AWS S3-compatible bucket.
- When the log type (`LogType`) is rate-limiting & CC attack protection log (`web-rateLiming`), managed rule log (`web-attack`), custom rule log (`web-rule`), or bot management log (`web-bot`), the same entity can be added to only one real-time log delivery task within the same `LogType`-`Area` pair.

Before creating a task, we recommend that you first call [DescribeRealtimeLogDeliveryTasks](https://intl.cloud.tencent.com/document/product/1552/104110?from_cn_redirect=1) to list existing tasks for the entity and verify whether it has already been added to another task.
     * @param {CreateRealtimeLogDeliveryTaskRequest} req
     * @param {function(string, CreateRealtimeLogDeliveryTaskResponse):void} cb
     * @public
     */
    CreateRealtimeLogDeliveryTask(req, cb) {
        let resp = new CreateRealtimeLogDeliveryTaskResponse();
        this.request("CreateRealtimeLogDeliveryTask", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration of a Layer 4 proxy instance.
     * @param {ModifyL4ProxyRequest} req
     * @param {function(string, ModifyL4ProxyResponse):void} cb
     * @public
     */
    ModifyL4Proxy(req, cb) {
        let resp = new ModifyL4ProxyResponse();
        this.request("ModifyL4Proxy", req, resp, cb);
    }

    /**
     * This API is used to modify Layer 4 proxy forwarding rules, supporting both individual and batch modification.
     * @param {ModifyL4ProxyRulesRequest} req
     * @param {function(string, ModifyL4ProxyRulesResponse):void} cb
     * @public
     */
    ModifyL4ProxyRules(req, cb) {
        let resp = new ModifyL4ProxyRulesResponse();
        this.request("ModifyL4ProxyRules", req, resp, cb);
    }

    /**
     * This API is used to query the verification information of a site.
     * @param {DescribeIdentificationsRequest} req
     * @param {function(string, DescribeIdentificationsResponse):void} cb
     * @public
     */
    DescribeIdentifications(req, cb) {
        let resp = new DescribeIdentificationsResponse();
        this.request("DescribeIdentifications", req, resp, cb);
    }

    /**
     * This API is used to bulk modify DNS records.
     * @param {ModifyDnsRecordsRequest} req
     * @param {function(string, ModifyDnsRecordsResponse):void} cb
     * @public
     */
    ModifyDnsRecords(req, cb) {
        let resp = new ModifyDnsRecordsResponse();
        this.request("ModifyDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to query the time series traffic data of the L7 cache analysis. It will be deprecated. Use the <a href="https://intl.cloud.tencent.com/document/product/1552/80648?from_cn_redirect=1">DescribeTimingL7AnalysisData</a> API instead.
     * @param {DescribeTimingL7CacheDataRequest} req
     * @param {function(string, DescribeTimingL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTimingL7CacheData(req, cb) {
        let resp = new DescribeTimingL7CacheDataResponse();
        this.request("DescribeTimingL7CacheData", req, resp, cb);
    }

    /**
     * This API is used to verify your ownership of a site or domain name. It's required in the CNAME access mode. After a site is verified, you don't need to verify the ownership again for domain names added to it in the future. For details, see [Ownership Verification](https://intl.cloud.tencent.com/document/product/1552/70789?from_cn_redirect=1).

For sites connected via the NS, you can query whether the NS is successfully switched through this API. For details, see [Modifying DNS Servers](https://intl.cloud.tencent.com/document/product/1552/90452?from_cn_redirect=1).
     * @param {VerifyOwnershipRequest} req
     * @param {function(string, VerifyOwnershipResponse):void} cb
     * @public
     */
    VerifyOwnership(req, cb) {
        let resp = new VerifyOwnershipResponse();
        this.request("VerifyOwnership", req, resp, cb);
    }

    /**
     * This API is used to modify a trigger rule for an edge function. It supports modifying rule conditions, execution functions, and description.
     * @param {ModifyFunctionRuleRequest} req
     * @param {function(string, ModifyFunctionRuleResponse):void} cb
     * @public
     */
    ModifyFunctionRule(req, cb) {
        let resp = new ModifyFunctionRuleResponse();
        this.request("ModifyFunctionRule", req, resp, cb);
    }

    /**
     * This API is used to query the version list for the specified configuration group in version management mode. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DescribeConfigGroupVersionsRequest} req
     * @param {function(string, DescribeConfigGroupVersionsResponse):void} cb
     * @public
     */
    DescribeConfigGroupVersions(req, cb) {
        let resp = new DescribeConfigGroupVersionsResponse();
        this.request("DescribeConfigGroupVersions", req, resp, cb);
    }

    /**
     * This API is used to modify the security policy configuration template.
     * @param {ModifyWebSecurityTemplateRequest} req
     * @param {function(string, ModifyWebSecurityTemplateResponse):void} cb
     * @public
     */
    ModifyWebSecurityTemplate(req, cb) {
        let resp = new ModifyWebSecurityTemplateResponse();
        this.request("ModifyWebSecurityTemplate", req, resp, cb);
    }

    /**
     * This API is used to perform a paging query for the IP address list in a designated IP group. When the number of IP addresses in the group exceeds 2000, you can use this API to perform a paging query to obtain the complete IP address list.
     * @param {DescribeSecurityIPGroupContentRequest} req
     * @param {function(string, DescribeSecurityIPGroupContentResponse):void} cb
     * @public
     */
    DescribeSecurityIPGroupContent(req, cb) {
        let resp = new DescribeSecurityIPGroupContentResponse();
        this.request("DescribeSecurityIPGroupContent", req, resp, cb);
    }

    /**
     * This interface is used to modify the priority of the rule list in the [Rule Engine](https://intl.cloud.tencent.com/document/product/1552/70901?from_cn_redirect=1). This interface requires the complete rule ID list under the site ID to be passed in. The rule ID list can be obtained through the [Query Seven-Layer Acceleration Rules](https://intl.cloud.tencent.com/document/product/1552/115820?from_cn_redirect=1) interface. The final priority order will be adjusted to the order of the rule ID list, and will be executed from front to back.
     * @param {ModifyL7AccRulePriorityRequest} req
     * @param {function(string, ModifyL7AccRulePriorityResponse):void} cb
     * @public
     */
    ModifyL7AccRulePriority(req, cb) {
        let resp = new ModifyL7AccRulePriorityResponse();
        this.request("ModifyL7AccRulePriority", req, resp, cb);
    }

    /**
     * This API is an older version. EdgeOne has fully upgraded the APIs related to the rule engine. For details, please refer to [ModifyL7AccSetting](https://intl.cloud.tencent.com/document/product/1552/115817?from_cn_redirect=1).
     * @param {ModifyZoneSettingRequest} req
     * @param {function(string, ModifyZoneSettingResponse):void} cb
     * @public
     */
    ModifyZoneSetting(req, cb) {
        let resp = new ModifyZoneSettingResponse();
        this.request("ModifyZoneSetting", req, resp, cb);
    }

    /**
     * This API is used to create an alias domain name.
The feature is only supported by the enterprise plan and is currently in closed beta testing. If you need to use it, please [contact us](https://www.tencentcloud.com/contact-us).
     * @param {CreateAliasDomainRequest} req
     * @param {function(string, CreateAliasDomainResponse):void} cb
     * @public
     */
    CreateAliasDomain(req, cb) {
        let resp = new CreateAliasDomainResponse();
        this.request("CreateAliasDomain", req, resp, cb);
    }

    /**
     * This API is used to modify the status of an alias domain name.
The feature is only supported in the enterprise plan and is currently in closed beta testing. If you need to use it, [Contact Us](https://www.tencentcloud.com/contact-us).
     * @param {ModifyAliasDomainStatusRequest} req
     * @param {function(string, ModifyAliasDomainStatusResponse):void} cb
     * @public
     */
    ModifyAliasDomainStatus(req, cb) {
        let resp = new ModifyAliasDomainStatusResponse();
        this.request("ModifyAliasDomainStatus", req, resp, cb);
    }

    /**
     * This API is used to query the configuration information of a security IP group, including the ID, name and content of the security IP group. The query result of this API only returns up to 2000 IPs or CIDR blocks for each IP group. If there is a very large IP group exceeding 2000 IPs or CIDR blocks, call DescribeSecurityIPGroupContent to perform a paging query.
     * @param {DescribeSecurityIPGroupRequest} req
     * @param {function(string, DescribeSecurityIPGroupResponse):void} cb
     * @public
     */
    DescribeSecurityIPGroup(req, cb) {
        let resp = new DescribeSecurityIPGroupResponse();
        this.request("DescribeSecurityIPGroup", req, resp, cb);
    }

    /**
     * This API is used to create Layer 4 proxy instance rules, supporting both individual and batch creation.
     * @param {CreateL4ProxyRulesRequest} req
     * @param {function(string, CreateL4ProxyRulesResponse):void} cb
     * @public
     */
    CreateL4ProxyRules(req, cb) {
        let resp = new CreateL4ProxyRulesResponse();
        this.request("CreateL4ProxyRules", req, resp, cb);
    }

    /**
     * This API is used to query the list of L4 traffic data recorded over time.
     * @param {DescribeTimingL4DataRequest} req
     * @param {function(string, DescribeTimingL4DataResponse):void} cb
     * @public
     */
    DescribeTimingL4Data(req, cb) {
        let resp = new DescribeTimingL4DataResponse();
        this.request("DescribeTimingL4Data", req, resp, cb);
    }

    /**
     * This API is used to query the top N data of the L7 cache analysis. It will be deprecated. Use the <a href="https://intl.cloud.tencent.com/document/product/1552/80646?from_cn_redirect=1"> DescribeTopL7AnalysisData</a> API instead.
     * @param {DescribeTopL7CacheDataRequest} req
     * @param {function(string, DescribeTopL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTopL7CacheData(req, cb) {
        let resp = new DescribeTopL7CacheDataResponse();
        this.request("DescribeTopL7CacheData", req, resp, cb);
    }

    /**
     * This API is on an earlier version. EdgeOne has comprehensively upgraded the relevant APIs of the rule engine on January 21, 2025. For details about the new version of the API for modifying layer-7 acceleration rules, see ModifyL7AccRule(https://intl.cloud.tencent.com/document/product/1552/115818?from_cn_redirect=1).
<p style="color: red;">Note: Starting from January 21, 2025, the old version of the interface will stop updating and iteration. Subsequent new features will only be provided in the new version of the interface, and the original capabilities supported by the old version of the interface will not be affected. To avoid data field conflicts when using the old version of the interface, it is recommended that you migrate to the new version of the rule engine interface as soon as possible. </p>
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * Query the multi-channel security acceleration gateway list created by the user through this interface. Supports pagination.
     * @param {DescribeMultiPathGatewaysRequest} req
     * @param {function(string, DescribeMultiPathGatewaysResponse):void} cb
     * @public
     */
    DescribeMultiPathGateways(req, cb) {
        let resp = new DescribeMultiPathGatewaysResponse();
        this.request("DescribeMultiPathGateways", req, resp, cb);
    }

    /**
     * This API is used to query the top N data of the L7 domain services by a specified dimension.
Notes:
1. There is a delay of about 10 minutes for this API. It is recommended to query data from 10 minutes before the current time.
2. By default, the API returns traffic and request data after Web Security mitigation (that is, the clean traffic). Users can set `Filters.mitigatedByWebSecurity ` to query data that has been mitigated by Web Security.
     * @param {DescribeTopL7AnalysisDataRequest} req
     * @param {function(string, DescribeTopL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTopL7AnalysisData(req, cb) {
        let resp = new DescribeTopL7AnalysisDataResponse();
        this.request("DescribeTopL7AnalysisData", req, resp, cb);
    }

    /**
     * You can use this API to batch delete DNS records.
     * @param {DeleteDnsRecordsRequest} req
     * @param {function(string, DeleteDnsRecordsResponse):void} cb
     * @public
     */
    DeleteDnsRecords(req, cb) {
        let resp = new DeleteDnsRecordsResponse();
        this.request("DeleteDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to query client authentication option configuration.
     * @param {DescribeSecurityClientAttesterRequest} req
     * @param {function(string, DescribeSecurityClientAttesterResponse):void} cb
     * @public
     */
    DescribeSecurityClientAttester(req, cb) {
        let resp = new DescribeSecurityClientAttesterResponse();
        this.request("DescribeSecurityClientAttester", req, resp, cb);
    }

    /**
     * This API is used to modify the web and bot security configurations.
     * @param {ModifySecurityPolicyRequest} req
     * @param {function(string, ModifySecurityPolicyResponse):void} cb
     * @public
     */
    ModifySecurityPolicy(req, cb) {
        let resp = new ModifySecurityPolicyResponse();
        this.request("ModifySecurityPolicy", req, resp, cb);
    }

    /**
     * Use this API to query the lines integrated with the multi-channel security acceleration gateway, including direct connection lines, EdgeOne Layer-4 proxy lines, and custom lines.
     * @param {DescribeMultiPathGatewayLineRequest} req
     * @param {function(string, DescribeMultiPathGatewayLineResponse):void} cb
     * @public
     */
    DescribeMultiPathGatewayLine(req, cb) {
        let resp = new DescribeMultiPathGatewayLineResponse();
        this.request("DescribeMultiPathGatewayLine", req, resp, cb);
    }

    /**
     * This API is used to delete rules of the [rule engine](https://intl.cloud.tencent.com/document/product/1552/70901?from_cn_redirect=1), supporting batch deletion.
     * @param {DeleteL7AccRulesRequest} req
     * @param {function(string, DeleteL7AccRulesResponse):void} cb
     * @public
     */
    DeleteL7AccRules(req, cb) {
        let resp = new DeleteL7AccRulesResponse();
        this.request("DeleteL7AccRules", req, resp, cb);
    }

    /**
     * This API is used to bind a site to a plan.
     * @param {BindZoneToPlanRequest} req
     * @param {function(string, BindZoneToPlanResponse):void} cb
     * @public
     */
    BindZoneToPlan(req, cb) {
        let resp = new BindZoneToPlanResponse();
        this.request("BindZoneToPlan", req, resp, cb);
    }

    /**
     * This API is used to query DDoS attack events.
     * @param {DescribeDDoSAttackEventRequest} req
     * @param {function(string, DescribeDDoSAttackEventResponse):void} cb
     * @public
     */
    DescribeDDoSAttackEvent(req, cb) {
        let resp = new DescribeDDoSAttackEventResponse();
        this.request("DescribeDDoSAttackEvent", req, resp, cb);
    }

    /**
     * This API is used to delete Layer 4 proxy forwarding rules, supporting both individual and batch operation.
     * @param {DeleteL4ProxyRulesRequest} req
     * @param {function(string, DeleteL4ProxyRulesResponse):void} cb
     * @public
     */
    DeleteL4ProxyRules(req, cb) {
        let resp = new DeleteL4ProxyRulesResponse();
        this.request("DeleteL4ProxyRules", req, resp, cb);
    }

    /**
     * This API is used to create a custom response page.
     * @param {CreateCustomizeErrorPageRequest} req
     * @param {function(string, CreateCustomizeErrorPageResponse):void} cb
     * @public
     */
    CreateCustomizeErrorPage(req, cb) {
        let resp = new CreateCustomizeErrorPageResponse();
        this.request("CreateCustomizeErrorPage", req, resp, cb);
    }

    /**
     * This API is used to modify an accelerated domain name.
     * @param {ModifyAccelerationDomainRequest} req
     * @param {function(string, ModifyAccelerationDomainResponse):void} cb
     * @public
     */
    ModifyAccelerationDomain(req, cb) {
        let resp = new ModifyAccelerationDomainResponse();
        this.request("ModifyAccelerationDomain", req, resp, cb);
    }

    /**
     * This API is used to create Layer 4 proxy instances.
     * @param {CreateL4ProxyRequest} req
     * @param {function(string, CreateL4ProxyResponse):void} cb
     * @public
     */
    CreateL4Proxy(req, cb) {
        let resp = new CreateL4ProxyResponse();
        this.request("CreateL4Proxy", req, resp, cb);
    }

    /**
     * When the number of sites bound to your plan, the number of rules under "Web Protection - Custom Rules - Precision Matching Policy", or the number of rules under "Web Protection - Rate Limiting - Precision Rate Limiting Module" reaches the plan's quota, you can use this interface to purchase additional quotas.
> This interface only supports the Enterprise Edition Plan.
     * @param {IncreasePlanQuotaRequest} req
     * @param {function(string, IncreasePlanQuotaResponse):void} cb
     * @public
     */
    IncreasePlanQuota(req, cb) {
        let resp = new IncreasePlanQuotaResponse();
        this.request("IncreasePlanQuota", req, resp, cb);
    }

    /**
     * This API is used to modify an API resource.
     * @param {ModifySecurityAPIResourceRequest} req
     * @param {function(string, ModifySecurityAPIResourceResponse):void} cb
     * @public
     */
    ModifySecurityAPIResource(req, cb) {
        let resp = new ModifySecurityAPIResourceResponse();
        this.request("ModifySecurityAPIResource", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [ModifyL4ProxyStatus] (https://intl.cloud.tencent.com/document/product/1552/103408?from_cn_redirect=1).
     * @param {ModifyApplicationProxyStatusRequest} req
     * @param {function(string, ModifyApplicationProxyStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyStatus(req, cb) {
        let resp = new ModifyApplicationProxyStatusResponse();
        this.request("ModifyApplicationProxyStatus", req, resp, cb);
    }

    /**
     * This API is used to delete a LoadBalancer. If the LoadBalancer is referenced by other services (for example, Layer-4 proxy), the LoadBalancer cannot be deleted until the reference relationship is removed. The load balancing feature is in beta test. If you need to use it, [contact us](https://www.tencentcloud.com/contact-us).
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        let resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to query time-series data for L7 domain services.
Notes:
1. There is a delay of about 10 minutes for this API. It is recommended to query data from 10 minutes before the current time.
2. By default, the API returns traffic and request data after Web Security mitigation (that is, the clean traffic). Users can set `Filters.mitigatedByWebSecurity ` to query data that has been mitigated by Web Security.
     * @param {DescribeTimingL7AnalysisDataRequest} req
     * @param {function(string, DescribeTimingL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTimingL7AnalysisData(req, cb) {
        let resp = new DescribeTimingL7AnalysisDataResponse();
        this.request("DescribeTimingL7AnalysisData", req, resp, cb);
    }

    /**
     * This API is used to create and deploy an edge function to EdgeOne edge nodes.
     * @param {CreateFunctionRequest} req
     * @param {function(string, CreateFunctionResponse):void} cb
     * @public
     */
    CreateFunction(req, cb) {
        let resp = new CreateFunctionResponse();
        this.request("CreateFunction", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. In the latest version, this API has been split into two APIs: one for querying the Layer 4 proxy instance list and the other for querying Layer 4 forwarding rules. For details, see [DescribeL4Proxy] (https://intl.cloud.tencent.com/document/product/1552/103413?from_cn_redirect=1) and [DescribeL4ProxyRules] (https://intl.cloud.tencent.com/document/product/1552/103412?from_cn_redirect=1).
     * @param {DescribeApplicationProxiesRequest} req
     * @param {function(string, DescribeApplicationProxiesResponse):void} cb
     * @public
     */
    DescribeApplicationProxies(req, cb) {
        let resp = new DescribeApplicationProxiesResponse();
        this.request("DescribeApplicationProxies", req, resp, cb);
    }

    /**
     * This API is used to modify multi-channel security acceleration gateway information, such as name, gateway ID, IP and port.
     * @param {ModifyMultiPathGatewayRequest} req
     * @param {function(string, ModifyMultiPathGatewayResponse):void} cb
     * @public
     */
    ModifyMultiPathGateway(req, cb) {
        let resp = new ModifyMultiPathGatewayResponse();
        this.request("ModifyMultiPathGateway", req, resp, cb);
    }

    /**
     * This API is used to create a shared CNAME. It is now only available to beta users.
     * @param {CreateSharedCNAMERequest} req
     * @param {function(string, CreateSharedCNAMEResponse):void} cb
     * @public
     */
    CreateSharedCNAME(req, cb) {
        let resp = new CreateSharedCNAMEResponse();
        this.request("CreateSharedCNAME", req, resp, cb);
    }

    /**
     * This API is used to query JavaScript injection rules.
     * @param {DescribeSecurityJSInjectionRuleRequest} req
     * @param {function(string, DescribeSecurityJSInjectionRuleResponse):void} cb
     * @public
     */
    DescribeSecurityJSInjectionRule(req, cb) {
        let resp = new DescribeSecurityJSInjectionRuleResponse();
        this.request("DescribeSecurityJSInjectionRule", req, resp, cb);
    }

    /**
     * This interface is the old version of the rule engine creation interface. EdgeOne has fully upgraded the rule engine related interfaces on January 21, 2025. For details on the new version of the seven-layer acceleration rule creation interface, please refer to [CreateL7AccRules](https://intl.cloud.tencent.com/document/product/1552/115822?from_cn_redirect=1).<p style="color: red;">Note: Starting from January 21, 2025, the old version of the interface will stop updating and iteration. Subsequent new features will only be provided in the new version of the interface, and the original capabilities supported by the old version of the interface will not be affected. To avoid data field conflicts when using the old version of the interface, it is recommended that you migrate to the new version of the rule engine interface as soon as possible. </p>
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * This API is used to create a new version for the specified configuration group in version management mode. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {CreateConfigGroupVersionRequest} req
     * @param {function(string, CreateConfigGroupVersionResponse):void} cb
     * @public
     */
    CreateConfigGroupVersion(req, cb) {
        let resp = new CreateConfigGroupVersionResponse();
        this.request("CreateConfigGroupVersion", req, resp, cb);
    }

    /**
     * You can batch modify the status of DNS records through this API, enabling and disabling records in bulk.
     * @param {ModifyDnsRecordsStatusRequest} req
     * @param {function(string, ModifyDnsRecordsStatusResponse):void} cb
     * @public
     */
    ModifyDnsRecordsStatus(req, cb) {
        let resp = new ModifyDnsRecordsStatusResponse();
        this.request("ModifyDnsRecordsStatus", req, resp, cb);
    }

    /**
     * This API is used to modify an edge function. It supports modifying the function content and description. The function will take effect immediately after modification and redeployment.
     * @param {ModifyFunctionRequest} req
     * @param {function(string, ModifyFunctionResponse):void} cb
     * @public
     */
    ModifyFunction(req, cb) {
        let resp = new ModifyFunctionResponse();
        this.request("ModifyFunction", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [ModifyL4Proxy
] (https://intl.cloud.tencent.com/document/product/1552/103411?from_cn_redirect=1).
     * @param {ModifyApplicationProxyRequest} req
     * @param {function(string, ModifyApplicationProxyResponse):void} cb
     * @public
     */
    ModifyApplicationProxy(req, cb) {
        let resp = new ModifyApplicationProxyResponse();
        this.request("ModifyApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to create a site. After you create the site, you can connect it to EdgeOne via the CNAME or NS (see [Quick Start](https://intl.cloud.tencent.com/document/product/1552/87601?from_cn_redirect=1)), or connect it without a domain name (see [Quick Access to L4 Proxy Service](https://intl.cloud.tencent.com/document/product/1552/96051?from_cn_redirect=1)).

If there are already EdgeOne plans under the current account, it is recommended to pass in the `PlanId` to bind the site with the plan directly. If `PlanId` is not passed in, the created site is not activated. You need to call [BindZoneToPlan](https://intl.cloud.tencent.com/document/product/1552/83042?from_cn_redirect=1) to bind the site with a plan. To purchase a plan, please go to the EdgeOne console.
     * @param {CreateZoneRequest} req
     * @param {function(string, CreateZoneResponse):void} cb
     * @public
     */
    CreateZone(req, cb) {
        let resp = new CreateZoneResponse();
        this.request("CreateZone", req, resp, cb);
    }

    /**
     * This API is used to query the security policy configuration template list.
     * @param {DescribeWebSecurityTemplatesRequest} req
     * @param {function(string, DescribeWebSecurityTemplatesResponse):void} cb
     * @public
     */
    DescribeWebSecurityTemplates(req, cb) {
        let resp = new DescribeWebSecurityTemplatesResponse();
        this.request("DescribeWebSecurityTemplates", req, resp, cb);
    }

    /**
     * This API is used to query plan options available for purchase.
     * @param {DescribeAvailablePlansRequest} req
     * @param {function(string, DescribeAvailablePlansResponse):void} cb
     * @public
     */
    DescribeAvailablePlans(req, cb) {
        let resp = new DescribeAvailablePlansResponse();
        this.request("DescribeAvailablePlans", req, resp, cb);
    }

    /**
     * This API is used to query the custom response page list.
     * @param {DescribeCustomErrorPagesRequest} req
     * @param {function(string, DescribeCustomErrorPagesResponse):void} cb
     * @public
     */
    DescribeCustomErrorPages(req, cb) {
        let resp = new DescribeCustomErrorPagesResponse();
        this.request("DescribeCustomErrorPages", req, resp, cb);
    }

    /**
     * This API is used to query package information list with pagination support.
     * @param {DescribePlansRequest} req
     * @param {function(string, DescribePlansResponse):void} cb
     * @public
     */
    DescribePlans(req, cb) {
        let resp = new DescribePlansResponse();
        this.request("DescribePlans", req, resp, cb);
    }

    /**
     * This API is used to create client authentication options.
     * @param {CreateSecurityClientAttesterRequest} req
     * @param {function(string, CreateSecurityClientAttesterResponse):void} cb
     * @public
     */
    CreateSecurityClientAttester(req, cb) {
        let resp = new CreateSecurityClientAttesterResponse();
        this.request("CreateSecurityClientAttester", req, resp, cb);
    }

    /**
     * This API is used to disable 'Origin Protection' of a site. Once disabled, resources related to it will no longer use only the origin ACLs provided by "origin protection" to request your origin, and stops sending update notifications on the origin ACLs.
     * @param {DisableOriginACLRequest} req
     * @param {function(string, DisableOriginACLResponse):void} cb
     * @public
     */
    DisableOriginACL(req, cb) {
        let resp = new DisableOriginACLResponse();
        this.request("DisableOriginACL", req, resp, cb);
    }

    /**
     * Modify the plan settings. Currently, only the auto-renewal switch of prepaid plans can be modified.
     * @param {ModifyPlanRequest} req
     * @param {function(string, ModifyPlanResponse):void} cb
     * @public
     */
    ModifyPlan(req, cb) {
        let resp = new ModifyPlanResponse();
        this.request("ModifyPlan", req, resp, cb);
    }

    /**
     * Delete the specified content identifier. This feature is only available to the allowlist.
     * @param {DeleteContentIdentifierRequest} req
     * @param {function(string, DeleteContentIdentifierResponse):void} cb
     * @public
     */
    DeleteContentIdentifier(req, cb) {
        let resp = new DeleteContentIdentifierResponse();
        this.request("DeleteContentIdentifier", req, resp, cb);
    }

    /**
     * This API is an older version. EdgeOne has fully upgraded the APIs related to the rule engine. For details, please refer to [RuleEngineAction](https://intl.cloud.tencent.com/document/product/1552/80721?from_cn_redirect=1#RuleEngineAction).
     * @param {DescribeRulesSettingRequest} req
     * @param {function(string, DescribeRulesSettingResponse):void} cb
     * @public
     */
    DescribeRulesSetting(req, cb) {
        let resp = new DescribeRulesSettingResponse();
        this.request("DescribeRulesSetting", req, resp, cb);
    }

    /**
     * This API is used to batch modify the status of accelerated domains.
     * @param {ModifyAccelerationDomainStatusesRequest} req
     * @param {function(string, ModifyAccelerationDomainStatusesResponse):void} cb
     * @public
     */
    ModifyAccelerationDomainStatuses(req, cb) {
        let resp = new ModifyAccelerationDomainStatusesResponse();
        this.request("ModifyAccelerationDomainStatuses", req, resp, cb);
    }

    /**
     * This API is used to modify an API service.
     * @param {ModifySecurityAPIServiceRequest} req
     * @param {function(string, ModifySecurityAPIServiceResponse):void} cb
     * @public
     */
    ModifySecurityAPIService(req, cb) {
        let resp = new ModifySecurityAPIServiceResponse();
        this.request("ModifySecurityAPIService", req, resp, cb);
    }

    /**
     * This API is used to query the list of trigger rules for an edge function. It supports filtering by rule ID, function ID, rule description, and so on.
     * @param {DescribeFunctionRulesRequest} req
     * @param {function(string, DescribeFunctionRulesResponse):void} cb
     * @public
     */
    DescribeFunctionRules(req, cb) {
        let resp = new DescribeFunctionRulesResponse();
        this.request("DescribeFunctionRules", req, resp, cb);
    }

    /**
     * This API is used to delete a real-time log delivery task.
     * @param {DeleteRealtimeLogDeliveryTaskRequest} req
     * @param {function(string, DeleteRealtimeLogDeliveryTaskResponse):void} cb
     * @public
     */
    DeleteRealtimeLogDeliveryTask(req, cb) {
        let resp = new DeleteRealtimeLogDeliveryTaskResponse();
        this.request("DeleteRealtimeLogDeliveryTask", req, resp, cb);
    }

    /**
     * This API is used to query domain name information of a site, including the acceleration domain name, origin, and domain name status. You can query the information of all domain names, or specific domain names by specifying filters information.
     * @param {DescribeAccelerationDomainsRequest} req
     * @param {function(string, DescribeAccelerationDomainsResponse):void} cb
     * @public
     */
    DescribeAccelerationDomains(req, cb) {
        let resp = new DescribeAccelerationDomainsResponse();
        this.request("DescribeAccelerationDomains", req, resp, cb);
    }

    /**
     * This API is used to change the site status.
     * @param {ModifyZoneStatusRequest} req
     * @param {function(string, ModifyZoneStatusResponse):void} cb
     * @public
     */
    ModifyZoneStatus(req, cb) {
        let resp = new ModifyZoneStatusResponse();
        this.request("ModifyZoneStatus", req, resp, cb);
    }

    /**
     * This API is used to create rules in the [rule engine](https://intl.cloud.tencent.com/document/product/1552/70901?from_cn_redirect=1). Batch creation is supported.
     * @param {CreateL7AccRulesRequest} req
     * @param {function(string, CreateL7AccRulesResponse):void} cb
     * @public
     */
    CreateL7AccRules(req, cb) {
        let resp = new CreateL7AccRulesResponse();
        this.request("CreateL7AccRules", req, resp, cb);
    }

    /**
     * DescribePurgeTasks is used to query the submitted URL refreshing and directory refreshing records and execution progress. This interface can be used to query the tasks submitted by the CreatePurgeTasks API.
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * This API is used to query multi-channel security acceleration gateway details such as name, Gateway ID, IP, port and type.
     * @param {DescribeMultiPathGatewayRequest} req
     * @param {function(string, DescribeMultiPathGatewayResponse):void} cb
     * @public
     */
    DescribeMultiPathGateway(req, cb) {
        let resp = new DescribeMultiPathGatewayResponse();
        this.request("DescribeMultiPathGateway", req, resp, cb);
    }

    /**
     * This interface is the old version of the rule engine deletion interface. EdgeOne has fully upgraded the rule engine related interfaces on January 21, 2025. For details on the new version of the seven-layer acceleration rule deletion interface, please refer to [DeleteL7AccRules](https://intl.cloud.tencent.com/document/product/1552/115821?from_cn_redirect=1).<0>Note: Starting from January 21, 2025, the earlier version API will no longer be updated. Subsequent new features will only be provided in the latest version interface. The original capabilities supported by the earlier version API will not be affected. To avoid field conflicts when using the earlier version API, it is recommended that you migrate to the new version rule engine API as soon as possible.</0>.
     * @param {DeleteRulesRequest} req
     * @param {function(string, DeleteRulesResponse):void} cb
     * @public
     */
    DeleteRules(req, cb) {
        let resp = new DeleteRulesResponse();
        this.request("DeleteRules", req, resp, cb);
    }

    /**
     * This API is used to delete the API service.
     * @param {DeleteSecurityAPIServiceRequest} req
     * @param {function(string, DeleteSecurityAPIServiceResponse):void} cb
     * @public
     */
    DeleteSecurityAPIService(req, cb) {
        let resp = new DeleteSecurityAPIServiceResponse();
        this.request("DeleteSecurityAPIService", req, resp, cb);
    }

    /**
     * This API is used to delete a multi-channel security acceleration gateway, including private gateways and Cloud Gateways.
     * @param {DeleteMultiPathGatewayRequest} req
     * @param {function(string, DeleteMultiPathGatewayResponse):void} cb
     * @public
     */
    DeleteMultiPathGateway(req, cb) {
        let resp = new DeleteMultiPathGatewayResponse();
        this.request("DeleteMultiPathGateway", req, resp, cb);
    }

    /**
     * This API is used to delete a custom response page.
     * @param {DeleteCustomErrorPageRequest} req
     * @param {function(string, DeleteCustomErrorPageResponse):void} cb
     * @public
     */
    DeleteCustomErrorPage(req, cb) {
        let resp = new DeleteCustomErrorPageResponse();
        this.request("DeleteCustomErrorPage", req, resp, cb);
    }

    /**
     * This API is used to operate the runtime environment of an edge function. It supports related settings for environment variables.
After the environment variables are set, they can be used in the function code. For details, see [Edge Functions Referencing Environment Variables](https://intl.cloud.tencent.com/document/product/1552/109151?from_cn_redirect=1#0151fd9a-8b0e-407b-ae37-54553a60ded6).
     * @param {HandleFunctionRuntimeEnvironmentRequest} req
     * @param {function(string, HandleFunctionRuntimeEnvironmentResponse):void} cb
     * @public
     */
    HandleFunctionRuntimeEnvironment(req, cb) {
        let resp = new HandleFunctionRuntimeEnvironmentResponse();
        this.request("HandleFunctionRuntimeEnvironment", req, resp, cb);
    }

    /**
     * Modify content identifier, only description modification is supported. This feature is only open to the allowlist.
     * @param {ModifyContentIdentifierRequest} req
     * @param {function(string, ModifyContentIdentifierResponse):void} cb
     * @public
     */
    ModifyContentIdentifier(req, cb) {
        let resp = new ModifyContentIdentifierResponse();
        this.request("ModifyContentIdentifier", req, resp, cb);
    }

    /**
     * This API is used to delete a security policy configuration template.
     * @param {DeleteWebSecurityTemplateRequest} req
     * @param {function(string, DeleteWebSecurityTemplateResponse):void} cb
     * @public
     */
    DeleteWebSecurityTemplate(req, cb) {
        let resp = new DeleteWebSecurityTemplateResponse();
        this.request("DeleteWebSecurityTemplate", req, resp, cb);
    }

    /**
     * This API is used to modify client authentication options.
     * @param {ModifySecurityClientAttesterRequest} req
     * @param {function(string, ModifySecurityClientAttesterResponse):void} cb
     * @public
     */
    ModifySecurityClientAttester(req, cb) {
        let resp = new ModifySecurityClientAttesterResponse();
        this.request("ModifySecurityClientAttester", req, resp, cb);
    }

    /**
     * This API is used to query the web and security protection configurations.
     * @param {DescribeSecurityPolicyRequest} req
     * @param {function(string, DescribeSecurityPolicyResponse):void} cb
     * @public
     */
    DescribeSecurityPolicy(req, cb) {
        let resp = new DescribeSecurityPolicyResponse();
        this.request("DescribeSecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to delete client authentication options.
     * @param {DeleteSecurityClientAttesterRequest} req
     * @param {function(string, DeleteSecurityClientAttesterResponse):void} cb
     * @public
     */
    DeleteSecurityClientAttester(req, cb) {
        let resp = new DeleteSecurityClientAttesterResponse();
        this.request("DeleteSecurityClientAttester", req, resp, cb);
    }

    /**
     * This API is used to configure the certificate of a site. You can use your own certificate or [apply for a free certificate](https://intl.cloud.tencent.com/document/product/1552/90437?from_cn_redirect=1).
To use an external certificate, upload the certificate to [SSL Certificates Console](https://console.cloud.tencent.com/certoview) first, and then input the certificate ID in this API. For details, see [Deploying Own Certificates to EdgeOne Domains](https://intl.cloud.tencent.com/document/product/1552/88874?from_cn_redirect=1).
     * @param {ModifyHostsCertificateRequest} req
     * @param {function(string, ModifyHostsCertificateResponse):void} cb
     * @public
     */
    ModifyHostsCertificate(req, cb) {
        let resp = new ModifyHostsCertificateResponse();
        this.request("ModifyHostsCertificate", req, resp, cb);
    }

    /**
     * This API is used to modify the priority of trigger rules for an edge function.
     * @param {ModifyFunctionRulePriorityRequest} req
     * @param {function(string, ModifyFunctionRulePriorityResponse):void} cb
     * @public
     */
    ModifyFunctionRulePriority(req, cb) {
        let resp = new ModifyFunctionRulePriorityResponse();
        this.request("ModifyFunctionRulePriority", req, resp, cb);
    }

    /**
     * This API is used to modify a security IP group.
     * @param {ModifySecurityIPGroupRequest} req
     * @param {function(string, ModifySecurityIPGroupResponse):void} cb
     * @public
     */
    ModifySecurityIPGroup(req, cb) {
        let resp = new ModifySecurityIPGroupResponse();
        this.request("ModifySecurityIPGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the access key for the multi-channel security acceleration gateway.The access key is used by customers to sign requests for gateway access. The original key becomes invalid after modification.
     * @param {ModifyMultiPathGatewaySecretKeyRequest} req
     * @param {function(string, ModifyMultiPathGatewaySecretKeyResponse):void} cb
     * @public
     */
    ModifyMultiPathGatewaySecretKey(req, cb) {
        let resp = new ModifyMultiPathGatewaySecretKeyResponse();
        this.request("ModifyMultiPathGatewaySecretKey", req, resp, cb);
    }

    /**
     * This API is on an earlier version to query engine rules. EdgeOne has comprehensively upgraded relevant APIs of the rule engine on January 21, 2025. For details about the new version API to query layer-7 acceleration rules, see DescribeL7AccRules(https://intl.cloud.tencent.com/document/product/1552/115820?from_cn_redirect=1).
<p style="color: red;">Note: Starting from January 21, 2025, the old version of the interface will stop updating and iteration. Subsequent new features will only be provided in the new version of the interface, and the original capabilities supported by the old version of the interface will not be affected. To avoid data field conflicts when using the old version of the interface, it is recommended that you migrate to the new version of the rule engine interface as soon as possible. </p>
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * This API is used to create key-value indexes for relevant delivered log fields in the corresponding Tencent Cloud CLS log topic for a specified real-time log delivery task (task-id). If such indexes have been created in CLS, this API will append indexes through merging.
     * @param {CreateCLSIndexRequest} req
     * @param {function(string, CreateCLSIndexResponse):void} cb
     * @public
     */
    CreateCLSIndex(req, cb) {
        let resp = new CreateCLSIndexResponse();
        this.request("CreateCLSIndex", req, resp, cb);
    }

    /**
     * This API is used to confirm that the latest origin ACLs have been updated to the origin server firewall when the origin ACLs change. After confirming the update to the latest version, related change notifications will stop pushing.
     * @param {ConfirmOriginACLUpdateRequest} req
     * @param {function(string, ConfirmOriginACLUpdateResponse):void} cb
     * @public
     */
    ConfirmOriginACLUpdate(req, cb) {
        let resp = new ConfirmOriginACLUpdateResponse();
        this.request("ConfirmOriginACLUpdate", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version [CreateL4Proxy] (https://intl.cloud.tencent.com/document/product/1552/103417?from_cn_redirect=1).
     * @param {CreateApplicationProxyRequest} req
     * @param {function(string, CreateApplicationProxyResponse):void} cb
     * @public
     */
    CreateApplicationProxy(req, cb) {
        let resp = new CreateApplicationProxyResponse();
        this.request("CreateApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of origin groups.
     * @param {DescribeOriginGroupRequest} req
     * @param {function(string, DescribeOriginGroupResponse):void} cb
     * @public
     */
    DescribeOriginGroup(req, cb) {
        let resp = new DescribeOriginGroupResponse();
        this.request("DescribeOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to enable origin protection for a site for the first time. Enabled, EdgeOne will use specific origin IP ranges to backhaul traffic for L7 acceleration domains/L4 proxy instances. The maximum allowed number of L7 acceleration domains per submission is 200, and the maximum allowed number of L4 proxy instances is 100. Mixing L7 acceleration domains and L4 proxy instances in a single submission is supported, with a total maximum of 200 instances. To enable more than 200 resources, first enable the maximum quantity via specified resources, then enable the remaining resources via the ModifyOriginACL API. Subsequent addition of L7 acceleration domains/L4 proxy instances should be configured via the ModifyOriginACL API.

Create and bind policy Query instance Reset instance access password.
-Call this API to deem as consent to the origin protection enablement special agreement (https://intl.cloud.tencent.com/document/product/1552/120141?from_cn_redirect=1);.
-The origin IP range may change irregularly. tencent cloud EdgeOne (EdgeOne) will trigger notifications via message Center, SMS, or email 14 days, 7 days, 3 days, and 1 day before the change. To ensure you receive the change notification for the origin IP range, please ensure you have selected EdgeOne product services in the [tencent cloud message Center console](https://console.cloud.tencent.com/message) and configured the correct message recipient. For the setting method, refer to [message Subscription Management](https://intl.cloud.tencent.com/document/product/567/43476?from_cn_redirect=1).
     * @param {EnableOriginACLRequest} req
     * @param {function(string, EnableOriginACLResponse):void} cb
     * @public
     */
    EnableOriginACL(req, cb) {
        let resp = new EnableOriginACLResponse();
        this.request("EnableOriginACL", req, resp, cb);
    }

    /**
     * This API is used to query the top-ranked DDoS attack data.
     * @param {DescribeDDoSAttackTopDataRequest} req
     * @param {function(string, DescribeDDoSAttackTopDataResponse):void} cb
     * @public
     */
    DescribeDDoSAttackTopData(req, cb) {
        let resp = new DescribeDDoSAttackTopDataResponse();
        this.request("DescribeDDoSAttackTopData", req, resp, cb);
    }

    /**
     * This API is used to create a LoadBalancer. For details, see [Quickly Create Load Balancers](https://intl.cloud.tencent.com/document/product/1552/104223?from_cn_redirect=1). The load balancing feature is in beta test. If you need to use it, [contact us](https://www.tencentcloud.com/contact-us).
     * @param {CreateLoadBalancerRequest} req
     * @param {function(string, CreateLoadBalancerResponse):void} cb
     * @public
     */
    CreateLoadBalancer(req, cb) {
        let resp = new CreateLoadBalancerResponse();
        this.request("CreateLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to search the transcoding template detail list according to the name, template type, or unique identifier of the just-in-time transcoding template. The returned results include all eligible custom templates and preset templates.
     * @param {DescribeJustInTimeTranscodeTemplatesRequest} req
     * @param {function(string, DescribeJustInTimeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeJustInTimeTranscodeTemplates(req, cb) {
        let resp = new DescribeJustInTimeTranscodeTemplatesResponse();
        this.request("DescribeJustInTimeTranscodeTemplates", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [ModifyL4ProxyRules] (https://intl.cloud.tencent.com/document/product/1552/103410?from_cn_redirect=1).
     * @param {ModifyApplicationProxyRuleRequest} req
     * @param {function(string, ModifyApplicationProxyRuleResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRule(req, cb) {
        let resp = new ModifyApplicationProxyRuleResponse();
        this.request("ModifyApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to query the global configuration of [Site Acceleration](https://intl.cloud.tencent.com/document/product/1552/96193?from_cn_redirect=1).
     * @param {DescribeL7AccSettingRequest} req
     * @param {function(string, DescribeL7AccSettingResponse):void} cb
     * @public
     */
    DescribeL7AccSetting(req, cb) {
        let resp = new DescribeL7AccSettingResponse();
        this.request("DescribeL7AccSetting", req, resp, cb);
    }

    /**
     * This API is used to create an origin group for easy management. The created origin server group can be used for **adding acceleration domain names** and **layer-4 proxy configuration**.
     * @param {CreateOriginGroupRequest} req
     * @param {function(string, CreateOriginGroupResponse):void} cb
     * @public
     */
    CreateOriginGroup(req, cb) {
        let resp = new CreateOriginGroupResponse();
        this.request("CreateOriginGroup", req, resp, cb);
    }

    /**
     * JIT transcoding already provides preset transcoding templates to meet most needs. If there are personalized transcoding requirements, you can create custom transcoding templates through this API, with up to 100 custom transcoding templates allowed.
This API is used to ensure the consistency of JIT transcoding effect, avoid video output exceptions caused by EO cache or M3U8 sharding template changes during the process, and templates cannot be modified after creation.
This API is used to learn about the detailed capacity of JIT transcoding. EdgeOne video instant processing function introduction (https://www.tencentcloud.comom/document/product/1552/111927?from_cn_redirect=1).
     * @param {CreateJustInTimeTranscodeTemplateRequest} req
     * @param {function(string, CreateJustInTimeTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateJustInTimeTranscodeTemplate(req, cb) {
        let resp = new CreateJustInTimeTranscodeTemplateResponse();
        this.request("CreateJustInTimeTranscodeTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the release history of versions in the production or test environment in version management mode. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DescribeDeployHistoryRequest} req
     * @param {function(string, DescribeDeployHistoryResponse):void} cb
     * @public
     */
    DescribeDeployHistory(req, cb) {
        let resp = new DescribeDeployHistoryResponse();
        this.request("DescribeDeployHistory", req, resp, cb);
    }

    /**
     * This API is used to release versions in version management mode. Users can deploy the version to either the testing environment or the production environment by specifying the EnvId parameter. The version management feature is currently undergoing beta testing and is accessible only to users on the whitelist.
     * @param {DeployConfigGroupVersionRequest} req
     * @param {function(string, DeployConfigGroupVersionResponse):void} cb
     * @public
     */
    DeployConfigGroupVersion(req, cb) {
        let resp = new DeployConfigGroupVersionResponse();
        this.request("DeployConfigGroupVersion", req, resp, cb);
    }

    /**
     * This API is used to create content identifiers, where you can set descriptions, tags, and other information. It is also necessary to bind an enterprise edition package for billing data statistics. A content identifier can only bind one billing package, while a billing package can bind multiple content identifiers. This feature is only available to the allowlist.
     * @param {CreateContentIdentifierRequest} req
     * @param {function(string, CreateContentIdentifierResponse):void} cb
     * @public
     */
    CreateContentIdentifier(req, cb) {
        let resp = new CreateContentIdentifierResponse();
        this.request("CreateContentIdentifier", req, resp, cb);
    }

    /**
     * This API is an old version. EdgeOne has fully upgraded the APIs related to the rule engine. You can obtain detailed configurations of domain names through [DescribeL7AccSetting](https://intl.cloud.tencent.com/document/product/1552/115819?from_cn_redirect=1) and [DescribeL7AccRules](https://intl.cloud.tencent.com/document/product/1552/115820?from_cn_redirect=1).
     * @param {DescribeHostsSettingRequest} req
     * @param {function(string, DescribeHostsSettingResponse):void} cb
     * @public
     */
    DescribeHostsSetting(req, cb) {
        let resp = new DescribeHostsSettingResponse();
        this.request("DescribeHostsSetting", req, resp, cb);
    }

    /**
     * This API is used to query bindings of a policy template.
     * @param {DescribeSecurityTemplateBindingsRequest} req
     * @param {function(string, DescribeSecurityTemplateBindingsResponse):void} cb
     * @public
     */
    DescribeSecurityTemplateBindings(req, cb) {
        let resp = new DescribeSecurityTemplateBindingsResponse();
        this.request("DescribeSecurityTemplateBindings", req, resp, cb);
    }

    /**
     * This API is used to delete a Layer 4 proxy instance.
     * @param {DeleteL4ProxyRequest} req
     * @param {function(string, DeleteL4ProxyResponse):void} cb
     * @public
     */
    DeleteL4Proxy(req, cb) {
        let resp = new DeleteL4ProxyResponse();
        this.request("DeleteL4Proxy", req, resp, cb);
    }

    /**
     * This API is used to bind/unbind a domain name to/from a shared CNAME. It is now only available to beta users.
     * @param {BindSharedCNAMERequest} req
     * @param {function(string, BindSharedCNAMEResponse):void} cb
     * @public
     */
    BindSharedCNAME(req, cb) {
        let resp = new BindSharedCNAMEResponse();
        this.request("BindSharedCNAME", req, resp, cb);
    }

    /**
     * This API is used to modify the real-time log delivery task configuration. This API has the following restrictions:<li>Does not support modifying the destination type of the real-time log delivery task (TaskType);</li><li>Does not support modifying the data delivery type (LogType);</li><li>Does not support modifying the data delivery area (Area);</li><li>Does not support modifying the detailed destination configuration, such as log set and log topic, when the destination of the original real-time log delivery task is Tencent Cloud CLS.</li>
     * @param {ModifyRealtimeLogDeliveryTaskRequest} req
     * @param {function(string, ModifyRealtimeLogDeliveryTaskResponse):void} cb
     * @public
     */
    ModifyRealtimeLogDeliveryTask(req, cb) {
        let resp = new ModifyRealtimeLogDeliveryTaskResponse();
        this.request("ModifyRealtimeLogDeliveryTask", req, resp, cb);
    }

    /**
     * This API is used to query origin protection on an earlier version. EdgeOne comprehensively upgraded relevant APIs for origin protection on June 27, 2025. For details on the new version, see [DescribeOriginACL](https://intl.cloud.tencent.com/document/product/1552/120408?from_cn_redirect=1).

Note: Starting from June 27, 2025, the legacy version APIs will stop updating. New features will only be provided in the latest version APIs. To avoid data field conflicts when using legacy version APIs, it is recommended to migrate to the new version origin protection APIs as soon as possible.
     * @param {DescribeOriginProtectionRequest} req
     * @param {function(string, DescribeOriginProtectionResponse):void} cb
     * @public
     */
    DescribeOriginProtection(req, cb) {
        let resp = new DescribeOriginProtectionResponse();
        this.request("DescribeOriginProtection", req, resp, cb);
    }

    /**
     * This API is used to start or stop Layer 4 proxy forwarding rules, supporting both individual and batch operation.
     * @param {ModifyL4ProxyRulesStatusRequest} req
     * @param {function(string, ModifyL4ProxyRulesStatusResponse):void} cb
     * @public
     */
    ModifyL4ProxyRulesStatus(req, cb) {
        let resp = new ModifyL4ProxyRulesStatusResponse();
        this.request("ModifyL4ProxyRulesStatus", req, resp, cb);
    }

    /**
     * When your plan needs to be extended, you can use this interface to renew it. Plan renewal is only supported for the Personal, Basic, and Standard Editions.
> For cost details, refer to [Plan Fees](https://intl.cloud.tencent.com/document/product/1552/94158?from_cn_redirect=1).
     * @param {RenewPlanRequest} req
     * @param {function(string, RenewPlanResponse):void} cb
     * @public
     */
    RenewPlan(req, cb) {
        let resp = new RenewPlanResponse();
        this.request("RenewPlan", req, resp, cb);
    }

    /**
     * This API is an old version. EdgeOne has fully upgraded the APIs related to the rule engine. For details, please refer to [DescribeL7AccSetting](https://intl.cloud.tencent.com/document/product/1552/115819?from_cn_redirect=1).
     * @param {DescribeZoneSettingRequest} req
     * @param {function(string, DescribeZoneSettingResponse):void} cb
     * @public
     */
    DescribeZoneSetting(req, cb) {
        let resp = new DescribeZoneSettingResponse();
        this.request("DescribeZoneSetting", req, resp, cb);
    }

    /**
     * This API is used to query API resources under a site.
     * @param {DescribeSecurityAPIResourceRequest} req
     * @param {function(string, DescribeSecurityAPIResourceResponse):void} cb
     * @public
     */
    DescribeSecurityAPIResource(req, cb) {
        let resp = new DescribeSecurityAPIResourceResponse();
        this.request("DescribeSecurityAPIResource", req, resp, cb);
    }

    /**
     * This API is used to query the results of site configuration import via API (ImportZoneConfig). This feature only supports the sites in the plans of the Standard Edition and the Enterprise Edition.
     * @param {DescribeZoneConfigImportResultRequest} req
     * @param {function(string, DescribeZoneConfigImportResultResponse):void} cb
     * @public
     */
    DescribeZoneConfigImportResult(req, cb) {
        let resp = new DescribeZoneConfigImportResultResponse();
        this.request("DescribeZoneConfigImportResult", req, resp, cb);
    }

    /**
     * This API is used to create an API service.
     * @param {CreateSecurityAPIServiceRequest} req
     * @param {function(string, CreateSecurityAPIServiceResponse):void} cb
     * @public
     */
    CreateSecurityAPIService(req, cb) {
        let resp = new CreateSecurityAPIServiceResponse();
        this.request("CreateSecurityAPIService", req, resp, cb);
    }

    /**
     * This API is used to delete a specified security IP group. Note that the security IP group cannot be deleted if it is referenced in a rule.
     * @param {DeleteSecurityIPGroupRequest} req
     * @param {function(string, DeleteSecurityIPGroupResponse):void} cb
     * @public
     */
    DeleteSecurityIPGroup(req, cb) {
        let resp = new DeleteSecurityIPGroupResponse();
        this.request("DeleteSecurityIPGroup", req, resp, cb);
    }

    /**
     * This API is on an earlier version. If you want to call it, please switch to the latest version. For details, see [CreateL4ProxyRules] (https://intl.cloud.tencent.com/document/product/1552/103416?from_cn_redirect=1).
     * @param {CreateApplicationProxyRuleRequest} req
     * @param {function(string, CreateApplicationProxyRuleResponse):void} cb
     * @public
     */
    CreateApplicationProxyRule(req, cb) {
        let resp = new CreateApplicationProxyRuleResponse();
        this.request("CreateApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to modify JavaScript injection rules.
     * @param {ModifySecurityJSInjectionRuleRequest} req
     * @param {function(string, ModifySecurityJSInjectionRuleResponse):void} cb
     * @public
     */
    ModifySecurityJSInjectionRule(req, cb) {
        let resp = new ModifySecurityJSInjectionRuleResponse();
        this.request("ModifySecurityJSInjectionRule", req, resp, cb);
    }

    /**
     * This API is used to query keys for integrating multi-channel security acceleration gateways. Customers access multi-channel security acceleration gateways based on key signature.
     * @param {DescribeMultiPathGatewaySecretKeyRequest} req
     * @param {function(string, DescribeMultiPathGatewaySecretKeyResponse):void} cb
     * @public
     */
    DescribeMultiPathGatewaySecretKey(req, cb) {
        let resp = new DescribeMultiPathGatewaySecretKeyResponse();
        this.request("DescribeMultiPathGatewaySecretKey", req, resp, cb);
    }

    /**
     * This API is used to query the list of edge functions. It supports filtering by function ID, name, description, and so on.
     * @param {DescribeFunctionsRequest} req
     * @param {function(string, DescribeFunctionsResponse):void} cb
     * @public
     */
    DescribeFunctions(req, cb) {
        let resp = new DescribeFunctionsResponse();
        this.request("DescribeFunctions", req, resp, cb);
    }

    /**
     * This API is used to delete a site.
     * @param {DeleteZoneRequest} req
     * @param {function(string, DeleteZoneResponse):void} cb
     * @public
     */
    DeleteZone(req, cb) {
        let resp = new DeleteZoneResponse();
        this.request("DeleteZone", req, resp, cb);
    }

    /**
     * The API is deprecated and will be discontinued on June 30, 2024. Please use the API [DescribeSecurityIPGroup
](https://intl.cloud.tencent.com/document/product/1552/105866?from_cn_redirect=1).

This API is used to query the configuration information of an IP group, including the IP group name, IP group content, and the site the IP group belongs to.
     * @param {DescribeSecurityIPGroupInfoRequest} req
     * @param {function(string, DescribeSecurityIPGroupInfoResponse):void} cb
     * @public
     */
    DescribeSecurityIPGroupInfo(req, cb) {
        let resp = new DescribeSecurityIPGroupInfoResponse();
        this.request("DescribeSecurityIPGroupInfo", req, resp, cb);
    }

    /**
     * If you need to use the EdgeOne product, you must create a billing plan through this interface.
> After creating a plan, you need to complete the process of creating a site and binding the plan through [CreateZone](https://intl.cloud.tencent.com/document/product/1552/80719?from_cn_redirect=1), so that the EdgeOne can provide services properly.
     * @param {CreatePlanRequest} req
     * @param {function(string, CreatePlanResponse):void} cb
     * @public
     */
    CreatePlan(req, cb) {
        let resp = new CreatePlanResponse();
        this.request("CreatePlan", req, resp, cb);
    }

    /**
     * This API is used to view DNS record information under a site, including DNS record name, record type, and record content. It supports querying specific DNS record information by specifying filter conditions.
     * @param {DescribeDnsRecordsRequest} req
     * @param {function(string, DescribeDnsRecordsResponse):void} cb
     * @public
     */
    DescribeDnsRecords(req, cb) {
        let resp = new DescribeDnsRecordsResponse();
        this.request("DescribeDnsRecords", req, resp, cb);
    }

    /**
     * This API is used to modify site exclusive Anti-DDoS protection.
     * @param {ModifyDDoSProtectionRequest} req
     * @param {function(string, ModifyDDoSProtectionResponse):void} cb
     * @public
     */
    ModifyDDoSProtection(req, cb) {
        let resp = new ModifyDDoSProtectionResponse();
        this.request("ModifyDDoSProtection", req, resp, cb);
    }

    /**
     * This API is used to query API services under a site.
     * @param {DescribeSecurityAPIServiceRequest} req
     * @param {function(string, DescribeSecurityAPIServiceResponse):void} cb
     * @public
     */
    DescribeSecurityAPIService(req, cb) {
        let resp = new DescribeSecurityAPIServiceResponse();
        this.request("DescribeSecurityAPIService", req, resp, cb);
    }

    /**
     * This API is used to quickly import site configuration files. After the import is initiated, the API will return the corresponding task ID (TaskId). Users need to use the site configuration import result query API (DescribeZoneConfigImportResult) to obtain the results of this import task. This feature only supports the sites in the plans of the Standard Edition and the Enterprise Edition.
     * @param {ImportZoneConfigRequest} req
     * @param {function(string, ImportZoneConfigResponse):void} cb
     * @public
     */
    ImportZoneConfig(req, cb) {
        let resp = new ImportZoneConfigResponse();
        this.request("ImportZoneConfig", req, resp, cb);
    }

    /**
     * This API creates an access key for the multi-channel security acceleration gateway. Customers use the access key to sign requests for accessing the gateway. Each site can have only one key, which is applicable to all gateways under that site. Query the key via the DescribeMultiPathGatewaySecretKey API.
     * @param {CreateMultiPathGatewaySecretKeyRequest} req
     * @param {function(string, CreateMultiPathGatewaySecretKeyResponse):void} cb
     * @public
     */
    CreateMultiPathGatewaySecretKey(req, cb) {
        let resp = new CreateMultiPathGatewaySecretKeyResponse();
        this.request("CreateMultiPathGatewaySecretKey", req, resp, cb);
    }

    /**
     * This API is used to modify a custom response page.
     * @param {ModifyCustomErrorPageRequest} req
     * @param {function(string, ModifyCustomErrorPageResponse):void} cb
     * @public
     */
    ModifyCustomErrorPage(req, cb) {
        let resp = new ModifyCustomErrorPageResponse();
        this.request("ModifyCustomErrorPage", req, resp, cb);
    }

    /**
     * This API is used to query the forwarding rule list under a Layer 4 proxy instance.
     * @param {DescribeL4ProxyRulesRequest} req
     * @param {function(string, DescribeL4ProxyRulesResponse):void} cb
     * @public
     */
    DescribeL4ProxyRules(req, cb) {
        let resp = new DescribeL4ProxyRulesResponse();
        this.request("DescribeL4ProxyRules", req, resp, cb);
    }

    /**
     * This API is used to query the time-series data of DDoS attacks.
     * @param {DescribeDDoSAttackDataRequest} req
     * @param {function(string, DescribeDDoSAttackDataResponse):void} cb
     * @public
     */
    DescribeDDoSAttackData(req, cb) {
        let resp = new DescribeDDoSAttackDataResponse();
        this.request("DescribeDDoSAttackData", req, resp, cb);
    }

    /**
     * This API is used to delete a shared CNAME. It is now only available to beta users.
     * @param {DeleteSharedCNAMERequest} req
     * @param {function(string, DeleteSharedCNAMEResponse):void} cb
     * @public
     */
    DeleteSharedCNAME(req, cb) {
        let resp = new DeleteSharedCNAMEResponse();
        this.request("DeleteSharedCNAME", req, resp, cb);
    }

    /**
     * This API is used to query the alias domain name information list.
The feature is only supported in the enterprise plan and is currently in closed beta testing. If you need to use it, [Contact Us](https://intl.cloud.tencent.com/online?from_cn_redirect=1-service?from=connect-us).
     * @param {DescribeAliasDomainsRequest} req
     * @param {function(string, DescribeAliasDomainsResponse):void} cb
     * @public
     */
    DescribeAliasDomains(req, cb) {
        let resp = new DescribeAliasDomainsResponse();
        this.request("DescribeAliasDomains", req, resp, cb);
    }

    /**
     * This API is used to query a Layer 4 proxy instance list.
     * @param {DescribeL4ProxyRequest} req
     * @param {function(string, DescribeL4ProxyResponse):void} cb
     * @public
     */
    DescribeL4Proxy(req, cb) {
        let resp = new DescribeL4ProxyResponse();
        this.request("DescribeL4Proxy", req, resp, cb);
    }

    /**
     * This API is used to delete lines integrated with the multi-channel security acceleration gateway. Only custom lines support deletion.
     * @param {DeleteMultiPathGatewayLineRequest} req
     * @param {function(string, DeleteMultiPathGatewayLineResponse):void} cb
     * @public
     */
    DeleteMultiPathGatewayLine(req, cb) {
        let resp = new DeleteMultiPathGatewayLineResponse();
        this.request("DeleteMultiPathGatewayLine", req, resp, cb);
    }

    /**
     * This API is used to query billing data.
     * @param {DescribeBillingDataRequest} req
     * @param {function(string, DescribeBillingDataResponse):void} cb
     * @public
     */
    DescribeBillingData(req, cb) {
        let resp = new DescribeBillingDataResponse();
        this.request("DescribeBillingData", req, resp, cb);
    }

    /**
     * This API is used to delete the appropriate just in time transcoding template based on the unique template identifier under the site ID.
     * @param {DeleteJustInTimeTranscodeTemplatesRequest} req
     * @param {function(string, DeleteJustInTimeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DeleteJustInTimeTranscodeTemplates(req, cb) {
        let resp = new DeleteJustInTimeTranscodeTemplatesResponse();
        this.request("DeleteJustInTimeTranscodeTemplates", req, resp, cb);
    }

    /**
     * This API is used to query the health status of origin server groups under a LoadBalancer. The load balancing feature is in beta test. If you need to use it, [contact us](https://intl.cloud.tencent.com/online?from_cn_redirect=1-service).
     * @param {DescribeOriginGroupHealthStatusRequest} req
     * @param {function(string, DescribeOriginGroupHealthStatusResponse):void} cb
     * @public
     */
    DescribeOriginGroupHealthStatus(req, cb) {
        let resp = new DescribeOriginGroupHealthStatusResponse();
        this.request("DescribeOriginGroupHealthStatus", req, resp, cb);
    }


}
module.exports = TeoClient;
