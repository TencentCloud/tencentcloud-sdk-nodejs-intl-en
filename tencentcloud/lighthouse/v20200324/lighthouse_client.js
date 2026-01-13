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
const DescribeInstancesTrafficPackagesRequest = models.DescribeInstancesTrafficPackagesRequest;
const AssociateInstancesKeyPairsResponse = models.AssociateInstancesKeyPairsResponse;
const RenewInstancesRequest = models.RenewInstancesRequest;
const DescribeDisksDeniedActionsRequest = models.DescribeDisksDeniedActionsRequest;
const InquirePriceCreateBlueprintRequest = models.InquirePriceCreateBlueprintRequest;
const DescribeInstancesTrafficPackagesResponse = models.DescribeInstancesTrafficPackagesResponse;
const DescribeInstancesDeniedActionsRequest = models.DescribeInstancesDeniedActionsRequest;
const DeleteKeyPairsResponse = models.DeleteKeyPairsResponse;
const AttachCcnRequest = models.AttachCcnRequest;
const CreateInstancesRequest = models.CreateInstancesRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const RegionInfo = models.RegionInfo;
const DescribeBlueprintInstancesResponse = models.DescribeBlueprintInstancesResponse;
const InstanceDeniedActions = models.InstanceDeniedActions;
const InquirePriceCreateDisksRequest = models.InquirePriceCreateDisksRequest;
const ModifyBundle = models.ModifyBundle;
const DetachCcnResponse = models.DetachCcnResponse;
const ShareBlueprintAcrossAccountsRequest = models.ShareBlueprintAcrossAccountsRequest;
const BlueprintPrice = models.BlueprintPrice;
const DescribeScenesResponse = models.DescribeScenesResponse;
const InquirePriceRenewInstancesResponse = models.InquirePriceRenewInstancesResponse;
const DeleteFirewallRulesResponse = models.DeleteFirewallRulesResponse;
const ModifyInstancesAttributeRequest = models.ModifyInstancesAttributeRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DeleteKeyPairsRequest = models.DeleteKeyPairsRequest;
const SystemDisk = models.SystemDisk;
const ResetInstanceBlueprint = models.ResetInstanceBlueprint;
const DescribeBundlesResponse = models.DescribeBundlesResponse;
const ModifyImageSharePermissionResponse = models.ModifyImageSharePermissionResponse;
const ModifyInstancesBundleRequest = models.ModifyInstancesBundleRequest;
const InstancePriceDetail = models.InstancePriceDetail;
const InquirePriceRenewInstancesRequest = models.InquirePriceRenewInstancesRequest;
const DiscountDetail = models.DiscountDetail;
const DescribeDiskConfigsRequest = models.DescribeDiskConfigsRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const AssociateInstancesKeyPairsRequest = models.AssociateInstancesKeyPairsRequest;
const AttachCcnResponse = models.AttachCcnResponse;
const RebootInstancesRequest = models.RebootInstancesRequest;
const ResetAttachCcnRequest = models.ResetAttachCcnRequest;
const CreateDisksRequest = models.CreateDisksRequest;
const AttachDisksRequest = models.AttachDisksRequest;
const CancelShareBlueprintAcrossAccountsResponse = models.CancelShareBlueprintAcrossAccountsResponse;
const DescribeSnapshotsRequest = models.DescribeSnapshotsRequest;
const TerminateDisksResponse = models.TerminateDisksResponse;
const KeyPair = models.KeyPair;
const DescribeFirewallRulesTemplateRequest = models.DescribeFirewallRulesTemplateRequest;
const DescribeKeyPairsResponse = models.DescribeKeyPairsResponse;
const ModifyBlueprintAttributeRequest = models.ModifyBlueprintAttributeRequest;
const InquirePriceRenewDisksRequest = models.InquirePriceRenewDisksRequest;
const Disk = models.Disk;
const DestinationRegionBlueprint = models.DestinationRegionBlueprint;
const DescribeBlueprintInstancesRequest = models.DescribeBlueprintInstancesRequest;
const ApplyInstanceSnapshotResponse = models.ApplyInstanceSnapshotResponse;
const DetachDisksRequest = models.DetachDisksRequest;
const ModifyFirewallRulesRequest = models.ModifyFirewallRulesRequest;
const CreateBlueprintRequest = models.CreateBlueprintRequest;
const DeleteFirewallRulesRequest = models.DeleteFirewallRulesRequest;
const DescribeInstanceVncUrlRequest = models.DescribeInstanceVncUrlRequest;
const ModifyFirewallRuleDescriptionRequest = models.ModifyFirewallRuleDescriptionRequest;
const InstanceTrafficPackage = models.InstanceTrafficPackage;
const ModifyImageSharePermissionRequest = models.ModifyImageSharePermissionRequest;
const TerminateInstancesResponse = models.TerminateInstancesResponse;
const TrafficPackage = models.TrafficPackage;
const DescribeInstancesDiskNumRequest = models.DescribeInstancesDiskNumRequest;
const DetailPrice = models.DetailPrice;
const DescribeBlueprintsRequest = models.DescribeBlueprintsRequest;
const InstanceReturnable = models.InstanceReturnable;
const DescribeInstancesDeniedActionsResponse = models.DescribeInstancesDeniedActionsResponse;
const RenewDisksRequest = models.RenewDisksRequest;
const ModifyDisksAttributeRequest = models.ModifyDisksAttributeRequest;
const DockerContainerPublishPort = models.DockerContainerPublishPort;
const DescribeSnapshotsDeniedActionsResponse = models.DescribeSnapshotsDeniedActionsResponse;
const DescribeScenesRequest = models.DescribeScenesRequest;
const StartInstancesRequest = models.StartInstancesRequest;
const SnapshotDeniedActions = models.SnapshotDeniedActions;
const DeleteSnapshotsRequest = models.DeleteSnapshotsRequest;
const ModifyDisksRenewFlagResponse = models.ModifyDisksRenewFlagResponse;
const ModifySnapshotAttributeRequest = models.ModifySnapshotAttributeRequest;
const DeleteSnapshotsResponse = models.DeleteSnapshotsResponse;
const DescribeDisksResponse = models.DescribeDisksResponse;
const DescribeBundleDiscountResponse = models.DescribeBundleDiscountResponse;
const DescribeAllScenesRequest = models.DescribeAllScenesRequest;
const ModifyDisksRenewFlagRequest = models.ModifyDisksRenewFlagRequest;
const DisassociateInstancesKeyPairsRequest = models.DisassociateInstancesKeyPairsRequest;
const DataDiskPrice = models.DataDiskPrice;
const SceneInfo = models.SceneInfo;
const ImportKeyPairRequest = models.ImportKeyPairRequest;
const ImportKeyPairResponse = models.ImportKeyPairResponse;
const DeleteBlueprintsResponse = models.DeleteBlueprintsResponse;
const ModifyInstancesLoginKeyPairAttributeRequest = models.ModifyInstancesLoginKeyPairAttributeRequest;
const IsolateInstancesRequest = models.IsolateInstancesRequest;
const StopInstancesResponse = models.StopInstancesResponse;
const DescribeImagesToShareRequest = models.DescribeImagesToShareRequest;
const ModifyBlueprintAttributeResponse = models.ModifyBlueprintAttributeResponse;
const Image = models.Image;
const DescribeModifyInstanceBundlesRequest = models.DescribeModifyInstanceBundlesRequest;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeInstancesDiskNumResponse = models.DescribeInstancesDiskNumResponse;
const InquirePriceCreateBlueprintResponse = models.InquirePriceCreateBlueprintResponse;
const DescribeInstancesReturnableRequest = models.DescribeInstancesReturnableRequest;
const DiskReturnable = models.DiskReturnable;
const DescribeBlueprintsResponse = models.DescribeBlueprintsResponse;
const DescribeKeyPairsRequest = models.DescribeKeyPairsRequest;
const DescribeCcnAttachedInstancesRequest = models.DescribeCcnAttachedInstancesRequest;
const SyncBlueprintResponse = models.SyncBlueprintResponse;
const ResetInstancesPasswordResponse = models.ResetInstancesPasswordResponse;
const LoginSettings = models.LoginSettings;
const Instance = models.Instance;
const DockerContainerVolume = models.DockerContainerVolume;
const IsolateInstancesResponse = models.IsolateInstancesResponse;
const CreateKeyPairResponse = models.CreateKeyPairResponse;
const FirewallRule = models.FirewallRule;
const DescribeInstanceVncUrlResponse = models.DescribeInstanceVncUrlResponse;
const ModifyFirewallRulesResponse = models.ModifyFirewallRulesResponse;
const DiskPrice = models.DiskPrice;
const DescribeCcnAttachedInstancesResponse = models.DescribeCcnAttachedInstancesResponse;
const DescribeBundlesRequest = models.DescribeBundlesRequest;
const Blueprint = models.Blueprint;
const TotalPrice = models.TotalPrice;
const DeniedAction = models.DeniedAction;
const DescribeAllScenesResponse = models.DescribeAllScenesResponse;
const ModifyInstancesLoginKeyPairAttributeResponse = models.ModifyInstancesLoginKeyPairAttributeResponse;
const InquirePriceRenewDisksResponse = models.InquirePriceRenewDisksResponse;
const Bundle = models.Bundle;
const DiskConfig = models.DiskConfig;
const InquirePriceCreateInstancesResponse = models.InquirePriceCreateInstancesResponse;
const DescribeSnapshotsDeniedActionsRequest = models.DescribeSnapshotsDeniedActionsRequest;
const DescribeDiskDiscountResponse = models.DescribeDiskDiscountResponse;
const ResetInstancesPasswordRequest = models.ResetInstancesPasswordRequest;
const ResizeDisksRequest = models.ResizeDisksRequest;
const DiskChargePrepaid = models.DiskChargePrepaid;
const CreateKeyPairRequest = models.CreateKeyPairRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const ShareBlueprintAcrossAccountsResponse = models.ShareBlueprintAcrossAccountsResponse;
const DetachCcnRequest = models.DetachCcnRequest;
const DescribeImagesToShareResponse = models.DescribeImagesToShareResponse;
const Filter = models.Filter;
const DescribeSnapshotsResponse = models.DescribeSnapshotsResponse;
const Snapshot = models.Snapshot;
const ZoneInfo = models.ZoneInfo;
const ModifyFirewallRuleDescriptionResponse = models.ModifyFirewallRuleDescriptionResponse;
const DescribeDiskDiscountRequest = models.DescribeDiskDiscountRequest;
const CreateDisksResponse = models.CreateDisksResponse;
const AttachDisksResponse = models.AttachDisksResponse;
const StartInstancesResponse = models.StartInstancesResponse;
const CreateFirewallRulesRequest = models.CreateFirewallRulesRequest;
const Software = models.Software;
const DescribeFirewallRulesResponse = models.DescribeFirewallRulesResponse;
const DescribeInstancesReturnableResponse = models.DescribeInstancesReturnableResponse;
const ContainerEnv = models.ContainerEnv;
const CreateInstancesResponse = models.CreateInstancesResponse;
const DeleteBlueprintsRequest = models.DeleteBlueprintsRequest;
const FirewallRuleInfo = models.FirewallRuleInfo;
const CreateFirewallRulesResponse = models.CreateFirewallRulesResponse;
const DescribeDisksRequest = models.DescribeDisksRequest;
const DescribeGeneralResourceQuotasRequest = models.DescribeGeneralResourceQuotasRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const CreateBlueprintResponse = models.CreateBlueprintResponse;
const PolicyDetail = models.PolicyDetail;
const DetachDisksResponse = models.DetachDisksResponse;
const LoginConfiguration = models.LoginConfiguration;
const DescribeResetInstanceBlueprintsRequest = models.DescribeResetInstanceBlueprintsRequest;
const DockerContainerConfiguration = models.DockerContainerConfiguration;
const ResetAttachCcnResponse = models.ResetAttachCcnResponse;
const ModifyInstancesRenewFlagResponse = models.ModifyInstancesRenewFlagResponse;
const ApplyInstanceSnapshotRequest = models.ApplyInstanceSnapshotRequest;
const DisassociateInstancesKeyPairsResponse = models.DisassociateInstancesKeyPairsResponse;
const TerminateInstancesRequest = models.TerminateInstancesRequest;
const RenewDiskChargePrepaid = models.RenewDiskChargePrepaid;
const TerminateDisksRequest = models.TerminateDisksRequest;
const ResetInstanceRequest = models.ResetInstanceRequest;
const ResizeDisksResponse = models.ResizeDisksResponse;
const DescribeDiskConfigsResponse = models.DescribeDiskConfigsResponse;
const RenewDisksResponse = models.RenewDisksResponse;
const InternetAccessible = models.InternetAccessible;
const RebootInstancesResponse = models.RebootInstancesResponse;
const DescribeDisksDeniedActionsResponse = models.DescribeDisksDeniedActionsResponse;
const DescribeInstanceLoginKeyPairAttributeRequest = models.DescribeInstanceLoginKeyPairAttributeRequest;
const DescribeBundleDiscountRequest = models.DescribeBundleDiscountRequest;
const Price = models.Price;
const DescribeDisksReturnableResponse = models.DescribeDisksReturnableResponse;
const IsolateDisksRequest = models.IsolateDisksRequest;
const CreateInstanceSnapshotResponse = models.CreateInstanceSnapshotResponse;
const ModifyInstancesBundleResponse = models.ModifyInstancesBundleResponse;
const GeneralResourceQuota = models.GeneralResourceQuota;
const DescribeResetInstanceBlueprintsResponse = models.DescribeResetInstanceBlueprintsResponse;
const DescribeDisksReturnableRequest = models.DescribeDisksReturnableRequest;
const SoftwareDetail = models.SoftwareDetail;
const AutoMountConfiguration = models.AutoMountConfiguration;
const InstancePrice = models.InstancePrice;
const Tag = models.Tag;
const ModifySnapshotAttributeResponse = models.ModifySnapshotAttributeResponse;
const DescribeGeneralResourceQuotasResponse = models.DescribeGeneralResourceQuotasResponse;
const ModifyInstancesRenewFlagRequest = models.ModifyInstancesRenewFlagRequest;
const StopInstancesRequest = models.StopInstancesRequest;
const DescribeFirewallRulesTemplateResponse = models.DescribeFirewallRulesTemplateResponse;
const RenewInstancesResponse = models.RenewInstancesResponse;
const ResetInstanceResponse = models.ResetInstanceResponse;
const IsolateDisksResponse = models.IsolateDisksResponse;
const DescribeFirewallRulesRequest = models.DescribeFirewallRulesRequest;
const DiskDeniedActions = models.DiskDeniedActions;
const InquirePriceCreateInstancesRequest = models.InquirePriceCreateInstancesRequest;
const Scene = models.Scene;
const CcnAttachedInstance = models.CcnAttachedInstance;
const DescribeModifyInstanceBundlesResponse = models.DescribeModifyInstanceBundlesResponse;
const AttachDetail = models.AttachDetail;
const ModifyDisksAttributeResponse = models.ModifyDisksAttributeResponse;
const CreateInstanceSnapshotRequest = models.CreateInstanceSnapshotRequest;
const CancelShareBlueprintAcrossAccountsRequest = models.CancelShareBlueprintAcrossAccountsRequest;
const BlueprintInstance = models.BlueprintInstance;
const InquirePriceCreateDisksResponse = models.InquirePriceCreateDisksResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const ModifyInstancesAttributeResponse = models.ModifyInstancesAttributeResponse;
const SyncBlueprintRequest = models.SyncBlueprintRequest;
const DescribeInstanceLoginKeyPairAttributeResponse = models.DescribeInstanceLoginKeyPairAttributeResponse;


/**
 * lighthouse client
 * @class
 */
class LighthouseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("lighthouse.intl.tencentcloudapi.com", "2020-03-24", credential, region, profile);
    }
    
    /**
     * This API is used to shut down one or more instances.
* You can only perform this operation on instances whose status is `RUNNING`.
* The instance status will become `STOPPING` when the API is called successfully and will become `STOPPED` when the instance is successfully shut down.
* Batch operations are supported. The maximum number of instances in each request is 100.
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {StopInstancesRequest} req
     * @param {function(string, StopInstancesResponse):void} cb
     * @public
     */
    StopInstances(req, cb) {
        let resp = new StopInstancesResponse();
        this.request("StopInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the description of a single firewall rule.

* `FirewallVersion` is used to specify the version of the firewall to be manipulated. If the `FirewallVersion` value passed in is not equal to the current latest version of the firewall, a failure will be returned. If `FirewallVersion` is not passed in, the description of the specified rule will be modified directly.

In the `FirewallRule` parameter:
* Valid values of the `Protocol` field include `TCP`, `UDP`, `ICMP`, and `ALL`.
* For the `Port` field, you can enter only `ALL`, a single port number, several port numbers separated by commas, or a port range indicated by two port numbers separated by a minus sign. If `Port` is a range, the port number on the left of the minus sign must be smaller than the one on the right. If `Protocol` is not `TCP` or `UDP`, `Port` can only be empty or `ALL`. The length of the `Port` field cannot exceed 64 characters.
* For the `CidrBlock` field, you can enter any string that conforms to the CIDR format standard. Multi-Tenant network isolation rules take precedence over private network rules in the firewall.
* For the `Action` field, you can enter only `ACCEPT` or `DROP`.
* The length of the `FirewallRuleDescription` field cannot exceed 64 characters.
     * @param {ModifyFirewallRuleDescriptionRequest} req
     * @param {function(string, ModifyFirewallRuleDescriptionResponse):void} cb
     * @public
     */
    ModifyFirewallRuleDescription(req, cb) {
        let resp = new ModifyFirewallRuleDescriptionResponse();
        this.request("ModifyFirewallRuleDescription", req, resp, cb);
    }

    /**
     * This API is used to terminate one or more instances.

* Instances in `SHUTDOWN` status can be terminated through this API and cannot be recovered.
* Batch operations are supported. The allowed maximum number of instances in each request is 100.
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {TerminateInstancesRequest} req
     * @param {function(string, TerminateInstancesResponse):void} cb
     * @public
     */
    TerminateInstances(req, cb) {
        let resp = new TerminateInstancesResponse();
        this.request("TerminateInstances", req, resp, cb);
    }

    /**
     * This API is used to delete an image.
     * @param {DeleteBlueprintsRequest} req
     * @param {function(string, DeleteBlueprintsResponse):void} cb
     * @public
     */
    DeleteBlueprints(req, cb) {
        let resp = new DeleteBlueprintsResponse();
        this.request("DeleteBlueprints", req, resp, cb);
    }

    /**
     * This API is used to modify an image attribute.
     * @param {ModifyBlueprintAttributeRequest} req
     * @param {function(string, ModifyBlueprintAttributeResponse):void} cb
     * @public
     */
    ModifyBlueprintAttribute(req, cb) {
        let resp = new ModifyBlueprintAttributeResponse();
        this.request("ModifyBlueprintAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the list of scenes in all regions.
     * @param {DescribeAllScenesRequest} req
     * @param {function(string, DescribeAllScenesResponse):void} cb
     * @public
     */
    DescribeAllScenes(req, cb) {
        let resp = new DescribeAllScenesResponse();
        this.request("DescribeAllScenes", req, resp, cb);
    }

    /**
     * This API is used to delete a firewall rule of an instance.

* `FirewallVersion` is used to specify the version of the firewall to be manipulated. If the `FirewallVersion` value passed in is not equal to the current latest version of the firewall, a failure will be returned. If `FirewallVersion` is not passed in, the specified rule will be deleted directly.

In the `FirewallRules` parameter:
* Valid values of the `Protocol` field include `TCP`, `UDP`, `ICMP`, and `ALL`.
* For the `Port` field, you can enter only `ALL`, a single port number, several port numbers separated by commas, or a port range indicated by two port numbers separated by a minus sign. If `Port` is a range, the port number on the left of the minus sign must be smaller than the one on the right. If `Protocol` is not `TCP` or `UDP`, `Port` can only be empty or `ALL`. The length of the `Port` field cannot exceed 64 characters.
* For the `CidrBlock` field, you can enter any string that conforms to the CIDR format standard. Multi-Tenant network isolation rules take precedence over private network rules in the firewall.
* For the `Action` field, you can enter only `ACCEPT` or `DROP`.
* The length of the `FirewallRuleDescription` field cannot exceed 64 characters.
     * @param {DeleteFirewallRulesRequest} req
     * @param {function(string, DeleteFirewallRulesResponse):void} cb
     * @public
     */
    DeleteFirewallRules(req, cb) {
        let resp = new DeleteFirewallRulesResponse();
        this.request("DeleteFirewallRules", req, resp, cb);
    }

    /**
     * This API is used to change the auto-renewal setting of monthly-subscribed instances. 

* Instances with auto-renewal enabled are automatically renewed on a monthly basis upon the expiration. 
* Batch operations are supported. Up to 100 instances per request is allowed.
     * @param {ModifyInstancesRenewFlagRequest} req
     * @param {function(string, ModifyInstancesRenewFlagResponse):void} cb
     * @public
     */
    ModifyInstancesRenewFlag(req, cb) {
        let resp = new ModifyInstancesRenewFlagResponse();
        this.request("ModifyInstancesRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to add a firewall rule on an instance.


* `FirewallVersion` is the firewall version number. Every time you update the firewall rule version, it will be automatically increased by 1 to prevent the updated rule from expiring. If it is left empty, conflicts will not be considered.

In the `FirewallRules` parameter:
* Valid values of the `Protocol` field include `TCP`, `UDP`, `ICMP`, and `ALL`.
* For the `Port` field, you can enter only `ALL`, a single port number, several port numbers separated by commas, or a port range indicated by two port numbers separated by a minus sign. If `Port` is a range, the port number on the left of the minus sign must be smaller than the one on the right. If `Protocol` is not `TCP` or `UDP`, `Port` can only be empty or `ALL`. The length of the `Port` field cannot exceed 64 characters.
* For the `CidrBlock` field, you can enter any string that conforms to the CIDR format standard. Multi-Tenant network isolation rules take precedence over private network rules in the firewall.
* For the `Action` field, you can enter only `ACCEPT` or `DROP`.
* The length of the `FirewallRuleDescription` field cannot exceed 64 characters.
     * @param {CreateFirewallRulesRequest} req
     * @param {function(string, CreateFirewallRulesResponse):void} cb
     * @public
     */
    CreateFirewallRules(req, cb) {
        let resp = new CreateFirewallRulesResponse();
        this.request("CreateFirewallRules", req, resp, cb);
    }

    /**
     * This API is used to query whether the specified instance can be returned.
     * @param {DescribeInstancesReturnableRequest} req
     * @param {function(string, DescribeInstancesReturnableResponse):void} cb
     * @public
     */
    DescribeInstancesReturnable(req, cb) {
        let resp = new DescribeInstancesReturnableResponse();
        this.request("DescribeInstancesReturnable", req, resp, cb);
    }

    /**
     * This API is used to modify an instance attribute. 
* The instance name is used only for users’ convenience. 
* Batch operations are supported. The maximum number of instances in each request is 100.
     * @param {ModifyInstancesAttributeRequest} req
     * @param {function(string, ModifyInstancesAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesAttribute(req, cb) {
        let resp = new ModifyInstancesAttributeResponse();
        this.request("ModifyInstancesAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the list of package options of an instance.
     * @param {DescribeModifyInstanceBundlesRequest} req
     * @param {function(string, DescribeModifyInstanceBundlesResponse):void} cb
     * @public
     */
    DescribeModifyInstanceBundles(req, cb) {
        let resp = new DescribeModifyInstanceBundlesResponse();
        this.request("DescribeModifyInstanceBundles", req, resp, cb);
    }

    /**
     * This API is used to query the information of instances associated with CCN.
     * @param {DescribeCcnAttachedInstancesRequest} req
     * @param {function(string, DescribeCcnAttachedInstancesResponse):void} cb
     * @public
     */
    DescribeCcnAttachedInstances(req, cb) {
        let resp = new DescribeCcnAttachedInstancesResponse();
        this.request("DescribeCcnAttachedInstances", req, resp, cb);
    }

    /**
     * This API is used to create a key pair.
     * @param {CreateKeyPairRequest} req
     * @param {function(string, CreateKeyPairResponse):void} cb
     * @public
     */
    CreateKeyPair(req, cb) {
        let resp = new CreateKeyPairResponse();
        this.request("CreateKeyPair", req, resp, cb);
    }

    /**
     * This API is used to query the information of a package.
     * @param {DescribeBundlesRequest} req
     * @param {function(string, DescribeBundlesResponse):void} cb
     * @public
     */
    DescribeBundles(req, cb) {
        let resp = new DescribeBundlesResponse();
        this.request("DescribeBundles", req, resp, cb);
    }

    /**
     * This API is used to query the number of cloud disks attached to instances.
     * @param {DescribeInstancesDiskNumRequest} req
     * @param {function(string, DescribeInstancesDiskNumResponse):void} cb
     * @public
     */
    DescribeInstancesDiskNum(req, cb) {
        let resp = new DescribeInstancesDiskNumResponse();
        this.request("DescribeInstancesDiskNum", req, resp, cb);
    }

    /**
     * This API is used to delete a key pair.
     * @param {DeleteKeyPairsRequest} req
     * @param {function(string, DeleteKeyPairsResponse):void} cb
     * @public
     */
    DeleteKeyPairs(req, cb) {
        let resp = new DeleteKeyPairsResponse();
        this.request("DeleteKeyPairs", req, resp, cb);
    }

    /**
     * This API is used to modify the configuration of auto-renewal of cloud disks.
     * @param {ModifyDisksRenewFlagRequest} req
     * @param {function(string, ModifyDisksRenewFlagResponse):void} cb
     * @public
     */
    ModifyDisksRenewFlag(req, cb) {
        let resp = new ModifyDisksRenewFlagResponse();
        this.request("ModifyDisksRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to query a firewall rule template.
     * @param {DescribeFirewallRulesTemplateRequest} req
     * @param {function(string, DescribeFirewallRulesTemplateResponse):void} cb
     * @public
     */
    DescribeFirewallRulesTemplate(req, cb) {
        let resp = new DescribeFirewallRulesTemplateResponse();
        this.request("DescribeFirewallRulesTemplate", req, resp, cb);
    }

    /**
     * This API is used to query the details of one or multiple instances.

* You can query the details of an instance according to its ID, name, or private IP.
* For more information on filters, please see [Filters](https://intl.cloud.tencent.com/document/product/1207/47576?from_cn_redirect=1#Filter).
* If no parameter is defined, the status of a certain number of instances under the current account will be returned. The number is specified by `Limit` and is 20 by default.
* The latest operation (LatestOperation) and the latest operation status (LatestOperationState) of the instance can be queried.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to import the specified key pair.
     * @param {ImportKeyPairRequest} req
     * @param {function(string, ImportKeyPairResponse):void} cb
     * @public
     */
    ImportKeyPair(req, cb) {
        let resp = new ImportKeyPairResponse();
        this.request("ImportKeyPair", req, resp, cb);
    }

    /**
     * This API is used to query the list of Cloud Virtual Machine (CVM) custom images and share the images to Tencent Cloud Lighthouse (Lighthouse).
     * @param {DescribeImagesToShareRequest} req
     * @param {function(string, DescribeImagesToShareResponse):void} cb
     * @public
     */
    DescribeImagesToShare(req, cb) {
        let resp = new DescribeImagesToShareResponse();
        this.request("DescribeImagesToShare", req, resp, cb);
    }

    /**
     * This API is used to query the traffic package details of one or more instances.
     * @param {DescribeInstancesTrafficPackagesRequest} req
     * @param {function(string, DescribeInstancesTrafficPackagesResponse):void} cb
     * @public
     */
    DescribeInstancesTrafficPackages(req, cb) {
        let resp = new DescribeInstancesTrafficPackagesResponse();
        this.request("DescribeInstancesTrafficPackages", req, resp, cb);
    }

    /**
     * This API is used to query the price of a created image.
     * @param {InquirePriceCreateBlueprintRequest} req
     * @param {function(string, InquirePriceCreateBlueprintResponse):void} cb
     * @public
     */
    InquirePriceCreateBlueprint(req, cb) {
        let resp = new InquirePriceCreateBlueprintResponse();
        this.request("InquirePriceCreateBlueprint", req, resp, cb);
    }

    /**
     * This API is used to attach one or more cloud disks.
     * @param {AttachDisksRequest} req
     * @param {function(string, AttachDisksResponse):void} cb
     * @public
     */
    AttachDisks(req, cb) {
        let resp = new AttachDisksResponse();
        this.request("AttachDisks", req, resp, cb);
    }

    /**
     * This API is used to return one or more Lighthouse instances. 
* Only `RUNNING` and `STOPPED` instances can be returned. 
* The instance status goes to `SHUTDOWN` after the API is called successfully. 
* Batch operations are supported. Up to 20 resources (including instances and data disks) can be returned in each request. 
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {IsolateInstancesRequest} req
     * @param {function(string, IsolateInstancesResponse):void} cb
     * @public
     */
    IsolateInstances(req, cb) {
        let resp = new IsolateInstancesResponse();
        this.request("IsolateInstances", req, resp, cb);
    }

    /**
     * This API is used to bind a user-specified key pair to an instance.
* Only instances on LINUX_UNIX in [RUNNING, STOPPED] status are supported. Instances in `RUNNING` status will be forcibly shut down before binding.
* If the public key of a key pair is written to the SSH configuration of the instance, you will be able to log in to the instance with the private key of the key pair.
* If the instance is already associated with a key, the old key will become invalid.
* If you currently use a password to log in, you will no longer be able to do so after you associate the instance with a key.
* Batch operations are supported. The maximum number of instances in each request is 100. If instances not available for the operation are selected, you will get an error code.
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {AssociateInstancesKeyPairsRequest} req
     * @param {function(string, AssociateInstancesKeyPairsResponse):void} cb
     * @public
     */
    AssociateInstancesKeyPairs(req, cb) {
        let resp = new AssociateInstancesKeyPairsResponse();
        this.request("AssociateInstancesKeyPairs", req, resp, cb);
    }

    /**
     * This API is used to cancel image sharing across accounts.
An image to be canceled sharing must be a custom image that is originally shared from another account to your account.
     * @param {CancelShareBlueprintAcrossAccountsRequest} req
     * @param {function(string, CancelShareBlueprintAcrossAccountsResponse):void} cb
     * @public
     */
    CancelShareBlueprintAcrossAccounts(req, cb) {
        let resp = new CancelShareBlueprintAcrossAccountsResponse();
        this.request("CancelShareBlueprintAcrossAccounts", req, resp, cb);
    }

    /**
     * This API is used to unbind an instance from the specified key pair.

* Only instances on LINUX_UNIX in [RUNNING, STOPPED] status are supported. Instances in `RUNNING` status will be forcibly shut down before unbinding.
* After a key pair is unassociated from an instance, you can log in to the instance with password.
* If no password was set, you cannot log in to the instance with SSH after unbinding. You can call the ResetInstancesPassword API to set a login password.
* Batch operations are supported. The maximum number of instances in each request is 100.
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {DisassociateInstancesKeyPairsRequest} req
     * @param {function(string, DisassociateInstancesKeyPairsResponse):void} cb
     * @public
     */
    DisassociateInstancesKeyPairs(req, cb) {
        let resp = new DisassociateInstancesKeyPairsResponse();
        this.request("DisassociateInstancesKeyPairs", req, resp, cb);
    }

    /**
     * This API is used to query the discount information of a package.
     * @param {DescribeBundleDiscountRequest} req
     * @param {function(string, DescribeBundleDiscountResponse):void} cb
     * @public
     */
    DescribeBundleDiscount(req, cb) {
        let resp = new DescribeBundleDiscountResponse();
        this.request("DescribeBundleDiscount", req, resp, cb);
    }

    /**
     * This API is used to scale out a cloud disk. The operation currently only supports cloud disks of the data disk type that are in the ATTACHED or UNATTACHED status.
     * @param {ResizeDisksRequest} req
     * @param {function(string, ResizeDisksResponse):void} cb
     * @public
     */
    ResizeDisks(req, cb) {
        let resp = new ResizeDisksResponse();
        this.request("ResizeDisks", req, resp, cb);
    }

    /**
     * This API is used to associate a CCN instance.
     * @param {AttachCcnRequest} req
     * @param {function(string, AttachCcnResponse):void} cb
     * @public
     */
    AttachCcn(req, cb) {
        let resp = new AttachCcnResponse();
        this.request("AttachCcn", req, resp, cb);
    }

    /**
     * This API is used to query the information of an image.
     * @param {DescribeBlueprintsRequest} req
     * @param {function(string, DescribeBlueprintsResponse):void} cb
     * @public
     */
    DescribeBlueprints(req, cb) {
        let resp = new DescribeBlueprintsResponse();
        this.request("DescribeBlueprints", req, resp, cb);
    }

    /**
     * This API is used to reset the password of the instance OS to a user-specified password.
* You can only use this API to modify the password of the admin account. The name of the admin account varies by OS (on Windows, it is `Administrator`; on Ubuntu, it is `ubuntu`; on other systems, it is `root`).
* Batch operations are supported. You can reset the passwords of multiple instances to the same one. The maximum number of instances in each request is 100.
* It’s recommended to shut down the instance first and then reset the password. If the instance is running, this API will try to shut it down normally. If the attempt fails, it will force to instance to shut down.
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
Note: Just like powering off a physical PC, a forced shutdown may cause data loss or the corruption of file system.
     * @param {ResetInstancesPasswordRequest} req
     * @param {function(string, ResetInstancesPasswordResponse):void} cb
     * @public
     */
    ResetInstancesPassword(req, cb) {
        let resp = new ResetInstancesPasswordResponse();
        this.request("ResetInstancesPassword", req, resp, cb);
    }

    /**
     * This API is used to query the attributes of the default login key of an instance.
     * @param {DescribeInstanceLoginKeyPairAttributeRequest} req
     * @param {function(string, DescribeInstanceLoginKeyPairAttributeResponse):void} cb
     * @public
     */
    DescribeInstanceLoginKeyPairAttribute(req, cb) {
        let resp = new DescribeInstanceLoginKeyPairAttributeResponse();
        this.request("DescribeInstanceLoginKeyPairAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the list of operation limits of one or more cloud disks.
     * @param {DescribeDisksDeniedActionsRequest} req
     * @param {function(string, DescribeDisksDeniedActionsResponse):void} cb
     * @public
     */
    DescribeDisksDeniedActions(req, cb) {
        let resp = new DescribeDisksDeniedActionsResponse();
        this.request("DescribeDisksDeniedActions", req, resp, cb);
    }

    /**
     * This API is used to synchronize a custom image to other regions.

* Synchronization to multiple regions is supported. Up to 10 regions are supported.
* Synchronization to the source region is not supported.
* Only images in the NORMAL status are supported for synchronization.
* Synchronization between Chinese mainland regions and regions outside the Chinese mainland is not supported.
 * You can use the [DescribeBlueprints](https://www.tencentcloud.com/document/api/1207/47689?from_cn_redirect=1) API to query the image status. When the status is NORMAL, it indicates that the source region synchronization ends.
     * @param {SyncBlueprintRequest} req
     * @param {function(string, SyncBlueprintResponse):void} cb
     * @public
     */
    SyncBlueprint(req, cb) {
        let resp = new SyncBlueprintResponse();
        this.request("SyncBlueprint", req, resp, cb);
    }

    /**
     * This API is used to query the firewall rules of an instance.
     * @param {DescribeFirewallRulesRequest} req
     * @param {function(string, DescribeFirewallRulesResponse):void} cb
     * @public
     */
    DescribeFirewallRules(req, cb) {
        let resp = new DescribeFirewallRulesResponse();
        this.request("DescribeFirewallRules", req, resp, cb);
    }

    /**
     * This API is used to query the information of one or more cloud disks.
     * @param {DescribeDisksRequest} req
     * @param {function(string, DescribeDisksResponse):void} cb
     * @public
     */
    DescribeDisks(req, cb) {
        let resp = new DescribeDisksResponse();
        this.request("DescribeDisks", req, resp, cb);
    }

    /**
     * This API is used to query the quota information of general resources.
     * @param {DescribeGeneralResourceQuotasRequest} req
     * @param {function(string, DescribeGeneralResourceQuotasResponse):void} cb
     * @public
     */
    DescribeGeneralResourceQuotas(req, cb) {
        let resp = new DescribeGeneralResourceQuotasResponse();
        this.request("DescribeGeneralResourceQuotas", req, resp, cb);
    }

    /**
     * This API is used to create one or more cloud disks.
     * @param {CreateDisksRequest} req
     * @param {function(string, CreateDisksResponse):void} cb
     * @public
     */
    CreateDisks(req, cb) {
        let resp = new CreateDisksResponse();
        this.request("CreateDisks", req, resp, cb);
    }

    /**
     * This API is used to query the list of operation limits of one or more instances.
     * @param {DescribeInstancesDeniedActionsRequest} req
     * @param {function(string, DescribeInstancesDeniedActionsResponse):void} cb
     * @public
     */
    DescribeInstancesDeniedActions(req, cb) {
        let resp = new DescribeInstancesDeniedActionsResponse();
        this.request("DescribeInstancesDeniedActions", req, resp, cb);
    }

    /**
     * This API is used to query the price of renewing one or more instances.
     * @param {InquirePriceRenewInstancesRequest} req
     * @param {function(string, InquirePriceRenewInstancesResponse):void} cb
     * @public
     */
    InquirePriceRenewInstances(req, cb) {
        let resp = new InquirePriceRenewInstancesResponse();
        this.request("InquirePriceRenewInstances", req, resp, cb);
    }

    /**
     * This API is used to delete a snapshot.
The snapshot must be in `NORMAL` status. To query the status of a snapshot, you can call the `DescribeSnapshots` API and see the `SnapshotState` field in the response.
     * @param {DeleteSnapshotsRequest} req
     * @param {function(string, DeleteSnapshotsResponse):void} cb
     * @public
     */
    DeleteSnapshots(req, cb) {
        let resp = new DeleteSnapshotsResponse();
        this.request("DeleteSnapshots", req, resp, cb);
    }

    /**
     * This API is used to query the price of a created instance.
     * @param {InquirePriceCreateInstancesRequest} req
     * @param {function(string, InquirePriceCreateInstancesResponse):void} cb
     * @public
     */
    InquirePriceCreateInstances(req, cb) {
        let resp = new InquirePriceCreateInstancesResponse();
        this.request("InquirePriceCreateInstances", req, resp, cb);
    }

    /**
     * This API is used to create a system disk snapshot of the specified instance.
     * @param {CreateInstanceSnapshotRequest} req
     * @param {function(string, CreateInstanceSnapshotResponse):void} cb
     * @public
     */
    CreateInstanceSnapshot(req, cb) {
        let resp = new CreateInstanceSnapshotResponse();
        this.request("CreateInstanceSnapshot", req, resp, cb);
    }

    /**
     * This API is used to modify cloud disk attributes.
     * @param {ModifyDisksAttributeRequest} req
     * @param {function(string, ModifyDisksAttributeResponse):void} cb
     * @public
     */
    ModifyDisksAttribute(req, cb) {
        let resp = new ModifyDisksAttributeResponse();
        this.request("ModifyDisksAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the information of regions.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to set the attributes of the default login key pair of an instance.


     * @param {ModifyInstancesLoginKeyPairAttributeRequest} req
     * @param {function(string, ModifyInstancesLoginKeyPairAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesLoginKeyPairAttribute(req, cb) {
        let resp = new ModifyInstancesLoginKeyPairAttributeResponse();
        this.request("ModifyInstancesLoginKeyPairAttribute", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a snapshot.
<li>The snapshot name is used only for users’ convenience.</li>
     * @param {ModifySnapshotAttributeRequest} req
     * @param {function(string, ModifySnapshotAttributeResponse):void} cb
     * @public
     */
    ModifySnapshotAttribute(req, cb) {
        let resp = new ModifySnapshotAttributeResponse();
        this.request("ModifySnapshotAttribute", req, resp, cb);
    }

    /**
     * This API is used to query whether the specified cloud disk can be returned.
     * @param {DescribeDisksReturnableRequest} req
     * @param {function(string, DescribeDisksReturnableResponse):void} cb
     * @public
     */
    DescribeDisksReturnable(req, cb) {
        let resp = new DescribeDisksReturnableResponse();
        this.request("DescribeDisksReturnable", req, resp, cb);
    }

    /**
     * This API is used to query the price of renewing cloud disks.
     * @param {InquirePriceRenewDisksRequest} req
     * @param {function(string, InquirePriceRenewDisksResponse):void} cb
     * @public
     */
    InquirePriceRenewDisks(req, cb) {
        let resp = new InquirePriceRenewDisksResponse();
        this.request("InquirePriceRenewDisks", req, resp, cb);
    }

    /**
     * This API is used to query the information of an image instance.
     * @param {DescribeBlueprintInstancesRequest} req
     * @param {function(string, DescribeBlueprintInstancesResponse):void} cb
     * @public
     */
    DescribeBlueprintInstances(req, cb) {
        let resp = new DescribeBlueprintInstancesResponse();
        this.request("DescribeBlueprintInstances", req, resp, cb);
    }

    /**
     * This API is used to reinstall the image on the specified instance.

* If you specify a `BlueprintId`, the specified image is used; otherwise, the image used by the current instance is used.
* The system disk will be formatted and reset. Therefore, make sure that no important files are stored on the system disk.
* Currently, this API does not support switching the operating system between `LINUX_UNIX` and `WINDOWS` for instances.
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {ResetInstanceRequest} req
     * @param {function(string, ResetInstanceResponse):void} cb
     * @public
     */
    ResetInstance(req, cb) {
        let resp = new ResetInstanceResponse();
        this.request("ResetInstance", req, resp, cb);
    }

    /**
     * This API is used to roll back the system disk snapshot of the specified instance.
<li>Only rollback to the original system disk is supported. </li>
<li>Only snapshots in `NORMAL` status can be used for rollback. To query the status of a snapshot, you can call the `DescribeSnapshots` API and see the `SnapshotState` field in the response.</li>
<li>When a snapshot is rolled back, the status of the instance must be `STOPPED` or `RUNNING`. You can call the `DescribeInstances` API to query the instance status. Instances in `RUNNING` status will be forcibly shut down before snapshot rollback. </li>
     * @param {ApplyInstanceSnapshotRequest} req
     * @param {function(string, ApplyInstanceSnapshotResponse):void} cb
     * @public
     */
    ApplyInstanceSnapshot(req, cb) {
        let resp = new ApplyInstanceSnapshotResponse();
        this.request("ApplyInstanceSnapshot", req, resp, cb);
    }

    /**
     * This API is used to disassociate with a CCN instance.
     * @param {DetachCcnRequest} req
     * @param {function(string, DetachCcnResponse):void} cb
     * @public
     */
    DetachCcn(req, cb) {
        let resp = new DetachCcnResponse();
        this.request("DetachCcn", req, resp, cb);
    }

    /**
     * This API is used to query the list of snapshots.
     * @param {DescribeSnapshotsRequest} req
     * @param {function(string, DescribeSnapshotsResponse):void} cb
     * @public
     */
    DescribeSnapshots(req, cb) {
        let resp = new DescribeSnapshotsResponse();
        this.request("DescribeSnapshots", req, resp, cb);
    }

    /**
     * This API is used to reset the firewall rules of an instance.

This API deletes all firewall rules of the current instance first and then adds new rules.

* `FirewallVersion` is used to specify the version of the firewall to be manipulated. If the `FirewallVersion` value passed in is not equal to the current latest version of the firewall, a failure will be returned. If `FirewallVersion` is not passed in, the specified rule will be reset directly.

In the `FirewallRules` parameter:
* Valid values of the `Protocol` field include `TCP`, `UDP`, `ICMP`, and `ALL`.
* For the `Port` field, you can enter only `ALL`, a single port number, several port numbers separated by commas, or a port range indicated by two port numbers separated by a minus sign. If `Port` is a range, the port number on the left of the minus sign must be smaller than the one on the right. If `Protocol` is not `TCP` or `UDP`, `Port` can only be empty or `ALL`. The length of the `Port` field cannot exceed 64 characters.
* For the `CidrBlock` field, you can enter any string that conforms to the CIDR format standard. Multi-Tenant network isolation rules take precedence over private network rules in the firewall.
* For the `Action` field, you can enter only `ACCEPT` or `DROP`.
* The length of the `FirewallRuleDescription` field cannot exceed 64 characters.
     * @param {ModifyFirewallRulesRequest} req
     * @param {function(string, ModifyFirewallRulesResponse):void} cb
     * @public
     */
    ModifyFirewallRules(req, cb) {
        let resp = new ModifyFirewallRulesResponse();
        this.request("ModifyFirewallRules", req, resp, cb);
    }

    /**
     * This API is used to renew one or more Lighthouse cloud disks.

This operation can only be performed on data disks with the status of `ATTACHED`, `UNATTACHED` or `SHUTDOWN`.
Up to 50 cloud disks are supported at one time.
This API is async. After the request is sent, a `RequestId` is returned. At this time, the operation is not completed yet. To check the result, you need to call  [DescribeDisks](https://intl.cloud.tencent.com/document/product/1207/66093?from_cn_redirect=1). If the latest operation status (LatestOperationState) of the disk is `SUCCESS`, the operation is successful.
     * @param {RenewDisksRequest} req
     * @param {function(string, RenewDisksResponse):void} cb
     * @public
     */
    RenewDisks(req, cb) {
        let resp = new RenewDisksResponse();
        this.request("RenewDisks", req, resp, cb);
    }

    /**
     * This API is used to renew one or more Lighthouse instances.
* You can only perform this operation on instances whose status is `RUNNING`, `STOPPED` and `SHUTDOWN`.
* Batch operations are supported. Up to 100 instances are supported in each request.
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {RenewInstancesRequest} req
     * @param {function(string, RenewInstancesResponse):void} cb
     * @public
     */
    RenewInstances(req, cb) {
        let resp = new RenewInstancesResponse();
        this.request("RenewInstances", req, resp, cb);
    }

    /**
     * This API is used to query the URL for VNC login.

* It does not support `STOPPED` CVMs.
* A VNC URL is only valid for 15 seconds. If you do not access the URL within 15 seconds, you will need to query another one.
* The VNC URL can be used once only. You need to query a new one if you want to log in again.
* Up to 30 re-connection attempts allowed in one minute.
* `InstanceVncUrl`: Its value will be returned after the API is successfully called.
After you get the value of `InstanceVncUrl`, you need to append `InstanceVncUrl=xxxx` to the end of the link `https://img.qcloud.com/qcloud/app/active_vnc/index.html?`.
 The final URL can be in the following formats:

```
https://img.qcloud.com/qcloud/app/active_vnc/index.html?InstanceVncUrl=wss%3A%2F%2Fbjvnc.qcloud.com%3A26789%2Fvnc%3Fs%3DaHpjWnRVMFNhYmxKdDM5MjRHNlVTSVQwajNUSW0wb2tBbmFtREFCTmFrcy8vUUNPMG0wSHZNOUUxRm5PMmUzWmFDcWlOdDJIbUJxSTZDL0RXcHZxYnZZMmRkWWZWcEZia2lyb09XMzdKNmM9
```

     * @param {DescribeInstanceVncUrlRequest} req
     * @param {function(string, DescribeInstanceVncUrlResponse):void} cb
     * @public
     */
    DescribeInstanceVncUrl(req, cb) {
        let resp = new DescribeInstanceVncUrlResponse();
        this.request("DescribeInstanceVncUrl", req, resp, cb);
    }

    /**
     * This API is used to terminate one or more cloud disk.
     * @param {TerminateDisksRequest} req
     * @param {function(string, TerminateDisksResponse):void} cb
     * @public
     */
    TerminateDisks(req, cb) {
        let resp = new TerminateDisksResponse();
        this.request("TerminateDisks", req, resp, cb);
    }

    /**
     * This API is used to return one or more Lighthouse cloud disks.

You can only perform this operation on `UNATTACHED` disks.
After the successful call of the API, the cloud disk goes to the SHUTDOWN state.
Up to 20 instances are supported at one time. 
This API is async. After the request is sent, a `RequestId` is returned. At this time, the operation is not completed yet. To check the result, you need to call  [DescribeDisks](https://intl.cloud.tencent.com/document/product/1207/66093?from_cn_redirect=1). If the latest operation status (LatestOperationState) of the disk is `SUCCESS`, the operation is successful.
     * @param {IsolateDisksRequest} req
     * @param {function(string, IsolateDisksResponse):void} cb
     * @public
     */
    IsolateDisks(req, cb) {
        let resp = new IsolateDisksResponse();
        this.request("IsolateDisks", req, resp, cb);
    }

    /**
     * This API is used to start one or more instances.

* You can only perform this operation on instances whose status is `STOPPED`.
* The instance status will become `STARTING` when the API is called successfully and will become `RUNNING` when the instance is successfully started.
* Batch operations are supported. The maximum number of instances in each request is 100.
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {StartInstancesRequest} req
     * @param {function(string, StartInstancesResponse):void} cb
     * @public
     */
    StartInstances(req, cb) {
        let resp = new StartInstancesResponse();
        this.request("StartInstances", req, resp, cb);
    }

    /**
     * This API is used to query key pairs.
     * @param {DescribeKeyPairsRequest} req
     * @param {function(string, DescribeKeyPairsResponse):void} cb
     * @public
     */
    DescribeKeyPairs(req, cb) {
        let resp = new DescribeKeyPairsResponse();
        this.request("DescribeKeyPairs", req, resp, cb);
    }

    /**
     * This API is used to query the image information of a reset instance.
     * @param {DescribeResetInstanceBlueprintsRequest} req
     * @param {function(string, DescribeResetInstanceBlueprintsResponse):void} cb
     * @public
     */
    DescribeResetInstanceBlueprints(req, cb) {
        let resp = new DescribeResetInstanceBlueprintsResponse();
        this.request("DescribeResetInstanceBlueprints", req, resp, cb);
    }

    /**
     * This API is used to query the list of scenes.
     * @param {DescribeScenesRequest} req
     * @param {function(string, DescribeScenesResponse):void} cb
     * @public
     */
    DescribeScenes(req, cb) {
        let resp = new DescribeScenesResponse();
        this.request("DescribeScenes", req, resp, cb);
    }

    /**
     * This API is used to query the price of purchasing cloud disks.
     * @param {InquirePriceCreateDisksRequest} req
     * @param {function(string, InquirePriceCreateDisksResponse):void} cb
     * @public
     */
    InquirePriceCreateDisks(req, cb) {
        let resp = new InquirePriceCreateDisksResponse();
        this.request("InquirePriceCreateDisks", req, resp, cb);
    }

    /**
     * This API is used to query the discount information of a cloud disk.
     * @param {DescribeDiskDiscountRequest} req
     * @param {function(string, DescribeDiskDiscountResponse):void} cb
     * @public
     */
    DescribeDiskDiscount(req, cb) {
        let resp = new DescribeDiskDiscountResponse();
        this.request("DescribeDiskDiscount", req, resp, cb);
    }

    /**
     * This API is used to query the cloud disk configuration.
     * @param {DescribeDiskConfigsRequest} req
     * @param {function(string, DescribeDiskConfigsResponse):void} cb
     * @public
     */
    DescribeDiskConfigs(req, cb) {
        let resp = new DescribeDiskConfigsResponse();
        this.request("DescribeDiskConfigs", req, resp, cb);
    }

    /**
     * This API is used to query the list of AZs in a region.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to apply for association again after a CCN instance association application expires.
     * @param {ResetAttachCcnRequest} req
     * @param {function(string, ResetAttachCcnResponse):void} cb
     * @public
     */
    ResetAttachCcn(req, cb) {
        let resp = new ResetAttachCcnResponse();
        this.request("ResetAttachCcn", req, resp, cb);
    }

    /**
     * This API is used to restart instances.

* You can only perform this operation on instances whose status is `RUNNING`.
* The instance status will become `REBOOTING` when the API is called successfully and will become `RUNNING` when the instance is successfully restarted.
* Batch operations are supported. The maximum number of instances in each request is 100.
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {RebootInstancesRequest} req
     * @param {function(string, RebootInstancesResponse):void} cb
     * @public
     */
    RebootInstances(req, cb) {
        let resp = new RebootInstancesResponse();
        this.request("RebootInstances", req, resp, cb);
    }

    /**
     * This API is used to create one or more Lighthouse instances.
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }

    /**
     * This API is used to share and cancel sharing of CVM custom images to the Lighthouse service.
Sharing CVM images to Lighthouse requires the following conditions to be met:
1. Images that have been shared cannot be shared again.
2. Images imported from external sources are not supported for sharing.
3. Full-instance images are not supported for sharing.
4. Images need to support CloudInit to be eligible for sharing.
5. The Platform and OsName of the images must meet the sharing conditions before the images are eligible for sharing.
6. Only images in the NORMAL status are supported for sharing.
     * @param {ModifyImageSharePermissionRequest} req
     * @param {function(string, ModifyImageSharePermissionResponse):void} cb
     * @public
     */
    ModifyImageSharePermission(req, cb) {
        let resp = new ModifyImageSharePermissionResponse();
        this.request("ModifyImageSharePermission", req, resp, cb);
    }

    /**
     * This API is used to create an image.
     * @param {CreateBlueprintRequest} req
     * @param {function(string, CreateBlueprintResponse):void} cb
     * @public
     */
    CreateBlueprint(req, cb) {
        let resp = new CreateBlueprintResponse();
        this.request("CreateBlueprint", req, resp, cb);
    }

    /**
     * This API is used to share an image across accounts.
This API is used to share custom images only, and the status of the shared image must be NORMAL.
The account receiving the shared image must be a root account.
     * @param {ShareBlueprintAcrossAccountsRequest} req
     * @param {function(string, ShareBlueprintAcrossAccountsResponse):void} cb
     * @public
     */
    ShareBlueprintAcrossAccounts(req, cb) {
        let resp = new ShareBlueprintAcrossAccountsResponse();
        this.request("ShareBlueprintAcrossAccounts", req, resp, cb);
    }

    /**
     * This API is used to query the list of operation limits of one or more snapshots.
     * @param {DescribeSnapshotsDeniedActionsRequest} req
     * @param {function(string, DescribeSnapshotsDeniedActionsResponse):void} cb
     * @public
     */
    DescribeSnapshotsDeniedActions(req, cb) {
        let resp = new DescribeSnapshotsDeniedActionsResponse();
        this.request("DescribeSnapshotsDeniedActions", req, resp, cb);
    }

    /**
     * This API is used to detach one or more cloud disks.
     * @param {DetachDisksRequest} req
     * @param {function(string, DetachDisksResponse):void} cb
     * @public
     */
    DetachDisks(req, cb) {
        let resp = new DetachDisksResponse();
        this.request("DetachDisks", req, resp, cb);
    }

    /**
     * This API is used change one or more Lighthouse instance bundles. 
* Only `RUNNING` and `STOPPED` instances can be changed. 
* Batch operations are supported. The maximum number of instances in each request is 30. 
* This API is async. After the request is sent successfully, a `RequestId` will be returned. At this time, the operation is not completed immediately. The result of the instance operation can be queried by calling the `DescribeInstances` API. If the latest operation status (LatestOperationState) of the instance is `SUCCESS`, the operation is successful.
     * @param {ModifyInstancesBundleRequest} req
     * @param {function(string, ModifyInstancesBundleResponse):void} cb
     * @public
     */
    ModifyInstancesBundle(req, cb) {
        let resp = new ModifyInstancesBundleResponse();
        this.request("ModifyInstancesBundle", req, resp, cb);
    }


}
module.exports = LighthouseClient;
