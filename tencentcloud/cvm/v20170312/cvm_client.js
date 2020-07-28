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
const ChargePrepaid = models.ChargePrepaid;
const LocalDiskType = models.LocalDiskType;
const AssociateInstancesKeyPairsResponse = models.AssociateInstancesKeyPairsResponse;
const DescribeImageQuotaResponse = models.DescribeImageQuotaResponse;
const ModifyInstancesProjectRequest = models.ModifyInstancesProjectRequest;
const ResetInstancesTypeResponse = models.ResetInstancesTypeResponse;
const HostResource = models.HostResource;
const DeleteDisasterRecoverGroupsRequest = models.DeleteDisasterRecoverGroupsRequest;
const DescribeInstancesOperationLimitRequest = models.DescribeInstancesOperationLimitRequest;
const TerminateInstancesResponse = models.TerminateInstancesResponse;
const ResetInstancesInternetMaxBandwidthResponse = models.ResetInstancesInternetMaxBandwidthResponse;
const CreateDisasterRecoverGroupResponse = models.CreateDisasterRecoverGroupResponse;
const InquiryPriceResetInstancesInternetMaxBandwidthResponse = models.InquiryPriceResetInstancesInternetMaxBandwidthResponse;
const ModifyKeyPairAttributeRequest = models.ModifyKeyPairAttributeRequest;
const AssociateSecurityGroupsRequest = models.AssociateSecurityGroupsRequest;
const ResetInstancesTypeRequest = models.ResetInstancesTypeRequest;
const InquiryPriceResetInstanceRequest = models.InquiryPriceResetInstanceRequest;
const RunInstancesRequest = models.RunInstancesRequest;
const DeleteImagesRequest = models.DeleteImagesRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeHostsResponse = models.DescribeHostsResponse;
const DeleteKeyPairsRequest = models.DeleteKeyPairsRequest;
const SystemDisk = models.SystemDisk;
const ResetInstanceRequest = models.ResetInstanceRequest;
const InstanceTypeConfig = models.InstanceTypeConfig;
const AllocateHostsRequest = models.AllocateHostsRequest;
const LoginSettings = models.LoginSettings;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const PurchaseReservedInstancesOfferingRequest = models.PurchaseReservedInstancesOfferingRequest;
const RebootInstancesRequest = models.RebootInstancesRequest;
const AssociateInstancesKeyPairsRequest = models.AssociateInstancesKeyPairsRequest;
const ImportKeyPairResponse = models.ImportKeyPairResponse;
const DescribeInstancesStatusResponse = models.DescribeInstancesStatusResponse;
const ZoneInfo = models.ZoneInfo;
const DescribeInstanceTypeConfigsRequest = models.DescribeInstanceTypeConfigsRequest;
const DescribeKeyPairsResponse = models.DescribeKeyPairsResponse;
const ResetInstancesPasswordRequest = models.ResetInstancesPasswordRequest;
const InternetChargeTypeConfig = models.InternetChargeTypeConfig;
const DescribeImagesResponse = models.DescribeImagesResponse;
const ModifyInstancesVpcAttributeResponse = models.ModifyInstancesVpcAttributeResponse;
const CreateKeyPairResponse = models.CreateKeyPairResponse;
const DeleteKeyPairsResponse = models.DeleteKeyPairsResponse;
const DescribeInstanceVncUrlRequest = models.DescribeInstanceVncUrlRequest;
const ModifyImageSharePermissionRequest = models.ModifyImageSharePermissionRequest;
const DisassociateInstancesKeyPairsResponse = models.DisassociateInstancesKeyPairsResponse;
const InquiryPriceResizeInstanceDisksRequest = models.InquiryPriceResizeInstanceDisksRequest;
const RunInstancesResponse = models.RunInstancesResponse;
const ModifyInstancesAttributeResponse = models.ModifyInstancesAttributeResponse;
const ModifyImageSharePermissionResponse = models.ModifyImageSharePermissionResponse;
const DescribeInstancesOperationLimitResponse = models.DescribeInstancesOperationLimitResponse;
const SyncImagesResponse = models.SyncImagesResponse;
const DescribeZoneInstanceConfigInfosResponse = models.DescribeZoneInstanceConfigInfosResponse;
const ModifyInstancesAttributeRequest = models.ModifyInstancesAttributeRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const StartInstancesRequest = models.StartInstancesRequest;
const Tag = models.Tag;
const Placement = models.Placement;
const DescribeDisasterRecoverGroupsRequest = models.DescribeDisasterRecoverGroupsRequest;
const SyncImagesRequest = models.SyncImagesRequest;
const DisassociateInstancesKeyPairsRequest = models.DisassociateInstancesKeyPairsRequest;
const DescribeImageQuotaRequest = models.DescribeImageQuotaRequest;
const DescribeInstanceFamilyConfigsResponse = models.DescribeInstanceFamilyConfigsResponse;
const CreateImageResponse = models.CreateImageResponse;
const StopInstancesResponse = models.StopInstancesResponse;
const InstanceMarketOptionsRequest = models.InstanceMarketOptionsRequest;
const InquiryPriceResetInstancesInternetMaxBandwidthRequest = models.InquiryPriceResetInstancesInternetMaxBandwidthRequest;
const ResetInstancesPasswordResponse = models.ResetInstancesPasswordResponse;
const InquiryPriceRunInstancesRequest = models.InquiryPriceRunInstancesRequest;
const Image = models.Image;
const DescribeDisasterRecoverGroupQuotaResponse = models.DescribeDisasterRecoverGroupQuotaResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const CreateDisasterRecoverGroupRequest = models.CreateDisasterRecoverGroupRequest;
const DescribeReservedInstancesResponse = models.DescribeReservedInstancesResponse;
const DescribeImportImageOsResponse = models.DescribeImportImageOsResponse;
const ModifyKeyPairAttributeResponse = models.ModifyKeyPairAttributeResponse;
const DataDisk = models.DataDisk;
const DescribeKeyPairsRequest = models.DescribeKeyPairsRequest;
const OperationCountLimit = models.OperationCountLimit;
const DeleteDisasterRecoverGroupsResponse = models.DeleteDisasterRecoverGroupsResponse;
const HostItem = models.HostItem;
const Externals = models.Externals;
const CreateImageRequest = models.CreateImageRequest;
const Instance = models.Instance;
const EnhancedService = models.EnhancedService;
const InquiryPriceResetInstancesTypeRequest = models.InquiryPriceResetInstancesTypeRequest;
const DescribeInstanceVncUrlResponse = models.DescribeInstanceVncUrlResponse;
const DescribeReservedInstancesOfferingsRequest = models.DescribeReservedInstancesOfferingsRequest;
const DescribeDisasterRecoverGroupsResponse = models.DescribeDisasterRecoverGroupsResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const ActionTimer = models.ActionTimer;
const TagSpecification = models.TagSpecification;
const ResetInstancesInternetMaxBandwidthRequest = models.ResetInstancesInternetMaxBandwidthRequest;
const InstanceFamilyConfig = models.InstanceFamilyConfig;
const AssociateSecurityGroupsResponse = models.AssociateSecurityGroupsResponse;
const ImportImageRequest = models.ImportImageRequest;
const SpotMarketOptions = models.SpotMarketOptions;
const DescribeImportImageOsRequest = models.DescribeImportImageOsRequest;
const CreateKeyPairRequest = models.CreateKeyPairRequest;
const InstanceStatus = models.InstanceStatus;
const AllocateHostsResponse = models.AllocateHostsResponse;
const DescribeImageSharePermissionRequest = models.DescribeImageSharePermissionRequest;
const DisasterRecoverGroup = models.DisasterRecoverGroup;
const InquiryPriceResetInstanceResponse = models.InquiryPriceResetInstanceResponse;
const Filter = models.Filter;
const DescribeImageSharePermissionResponse = models.DescribeImageSharePermissionResponse;
const ModifyHostsAttributeResponse = models.ModifyHostsAttributeResponse;
const DescribeDisasterRecoverGroupQuotaRequest = models.DescribeDisasterRecoverGroupQuotaRequest;
const StartInstancesResponse = models.StartInstancesResponse;
const ModifyInstancesVpcAttributeRequest = models.ModifyInstancesVpcAttributeRequest;
const DescribeReservedInstancesRequest = models.DescribeReservedInstancesRequest;
const DescribeInternetChargeTypeConfigsResponse = models.DescribeInternetChargeTypeConfigsResponse;
const DescribeZoneInstanceConfigInfosRequest = models.DescribeZoneInstanceConfigInfosRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const ItemPrice = models.ItemPrice;
const InstanceTypeQuotaItem = models.InstanceTypeQuotaItem;
const ImageOsList = models.ImageOsList;
const InquiryPriceRunInstancesResponse = models.InquiryPriceRunInstancesResponse;
const DescribeHostsRequest = models.DescribeHostsRequest;
const DescribeInstancesStatusRequest = models.DescribeInstancesStatusRequest;
const InquiryPriceResizeInstanceDisksResponse = models.InquiryPriceResizeInstanceDisksResponse;
const TerminateInstancesRequest = models.TerminateInstancesRequest;
const SharePermission = models.SharePermission;
const ReservedInstances = models.ReservedInstances;
const DeleteImagesResponse = models.DeleteImagesResponse;
const ImportImageResponse = models.ImportImageResponse;
const ModifyDisasterRecoverGroupAttributeRequest = models.ModifyDisasterRecoverGroupAttributeRequest;
const RebootInstancesResponse = models.RebootInstancesResponse;
const InquiryPriceResetInstancesTypeResponse = models.InquiryPriceResetInstancesTypeResponse;
const OsVersion = models.OsVersion;
const ModifyImageAttributeResponse = models.ModifyImageAttributeResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const RegionInfo = models.RegionInfo;
const StopInstancesRequest = models.StopInstancesRequest;
const DescribeInternetChargeTypeConfigsRequest = models.DescribeInternetChargeTypeConfigsRequest;
const DescribeImagesRequest = models.DescribeImagesRequest;
const ModifyImageAttributeRequest = models.ModifyImageAttributeRequest;
const ResizeInstanceDisksResponse = models.ResizeInstanceDisksResponse;
const DisassociateSecurityGroupsRequest = models.DisassociateSecurityGroupsRequest;
const ModifyHostsAttributeRequest = models.ModifyHostsAttributeRequest;
const ImportKeyPairRequest = models.ImportKeyPairRequest;
const KeyPair = models.KeyPair;
const DescribeReservedInstancesOfferingsResponse = models.DescribeReservedInstancesOfferingsResponse;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const ResetInstanceResponse = models.ResetInstanceResponse;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const ModifyDisasterRecoverGroupAttributeResponse = models.ModifyDisasterRecoverGroupAttributeResponse;
const DescribeInstanceTypeConfigsResponse = models.DescribeInstanceTypeConfigsResponse;
const ResizeInstanceDisksRequest = models.ResizeInstanceDisksRequest;
const DescribeInstanceFamilyConfigsRequest = models.DescribeInstanceFamilyConfigsRequest;
const PurchaseReservedInstancesOfferingResponse = models.PurchaseReservedInstancesOfferingResponse;
const StorageBlock = models.StorageBlock;
const InternetAccessible = models.InternetAccessible;
const ReservedInstancesOffering = models.ReservedInstancesOffering;
const DisassociateSecurityGroupsResponse = models.DisassociateSecurityGroupsResponse;
const Snapshot = models.Snapshot;
const ModifyInstancesProjectResponse = models.ModifyInstancesProjectResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const Price = models.Price;


/**
 * cvm client
 * @class
 */
class CvmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cvm.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * This API is used to query the image quota of an user account.
     * @param {DescribeImageQuotaRequest} req
     * @param {function(string, DescribeImageQuotaResponse):void} cb
     * @public
     */
    DescribeImageQuota(req, cb) {
        let resp = new DescribeImageQuotaResponse();
        this.request("DescribeImageQuota", req, resp, cb);
    }

    /**
     * This API is used to shut down instances.

* You can only perform this operation on instances whose status is `RUNNING`.
* The instance status will become `STOPPING` when the API is called successfully and `STOPPED` when the instance is successfully shut down.
* Forced shutdown is supported. A forced shutdown is similar to switching off the power of a physical computer. It may cause data loss or file system corruption. Be sure to only force shut down a CVM when it cannot be sht down normally.
* Batch operations are supported. The maximum number of instances in each request is 100.
     * @param {StopInstancesRequest} req
     * @param {function(string, StopInstancesResponse):void} cb
     * @public
     */
    StopInstances(req, cb) {
        let resp = new StopInstancesResponse();
        this.request("StopInstances", req, resp, cb);
    }

    /**
     * This API is used to query the status of instances.

* You can query the status of an instance with its `ID`.
* If no parameter is defined, the status of a certain number of instances under the current account will be returned. The number is specified by `Limit` and is 20 by default.
     * @param {DescribeInstancesStatusRequest} req
     * @param {function(string, DescribeInstancesStatusResponse):void} cb
     * @public
     */
    DescribeInstancesStatus(req, cb) {
        let resp = new DescribeInstancesStatusResponse();
        this.request("DescribeInstancesStatus", req, resp, cb);
    }

    /**
     * This API is used to modify image sharing information.

* The accounts with which an image is shared can use the shared image to create instances.
* Each custom image can be shared with up to 50 accounts.
* You can use a shared image to create instances, but you cannot change its name and description.
* If an image is shared with another account, the shared image will be in the same region as the original image.

     * @param {ModifyImageSharePermissionRequest} req
     * @param {function(string, ModifyImageSharePermissionResponse):void} cb
     * @public
     */
    ModifyImageSharePermission(req, cb) {
        let resp = new ModifyImageSharePermissionResponse();
        this.request("ModifyImageSharePermission", req, resp, cb);
    }

    /**
     * This API is used to query image sharing information.
     * @param {DescribeImageSharePermissionRequest} req
     * @param {function(string, DescribeImageSharePermissionResponse):void} cb
     * @public
     */
    DescribeImageSharePermission(req, cb) {
        let resp = new DescribeImageSharePermissionResponse();
        this.request("DescribeImageSharePermission", req, resp, cb);
    }

    /**
     * This API is used to query the price of creating instances. You can only use this API for instances whose configuration is within the purchase limit. For more information, see [RunInstances](https://cloud.tencent.com/document/api/213/15730).
     * @param {InquiryPriceRunInstancesRequest} req
     * @param {function(string, InquiryPriceRunInstancesResponse):void} cb
     * @public
     */
    InquiryPriceRunInstances(req, cb) {
        let resp = new InquiryPriceRunInstancesResponse();
        this.request("InquiryPriceRunInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a CDH instance, such as instance name and renewal flag. One of the two parameters, HostName and RenewFlag, must be set, but you cannot set both of them at the same time.
     * @param {ModifyHostsAttributeRequest} req
     * @param {function(string, ModifyHostsAttributeResponse):void} cb
     * @public
     */
    ModifyHostsAttribute(req, cb) {
        let resp = new ModifyHostsAttributeResponse();
        this.request("ModifyHostsAttribute", req, resp, cb);
    }

    /**
     * This API is used to view the list of images.

* You specify the image ID or set filters to query the details of certain images.
* You can specify `Offset` and `Limit` to select a certain part of the results. By default, the information on the first 20 matching results is returned.
     * @param {DescribeImagesRequest} req
     * @param {function(string, DescribeImagesResponse):void} cb
     * @public
     */
    DescribeImages(req, cb) {
        let resp = new DescribeImagesResponse();
        this.request("DescribeImages", req, resp, cb);
    }

    /**
     * This API is used to query the configurations of models in an availability zone.
     * @param {DescribeZoneInstanceConfigInfosRequest} req
     * @param {function(string, DescribeZoneInstanceConfigInfosResponse):void} cb
     * @public
     */
    DescribeZoneInstanceConfigInfos(req, cb) {
        let resp = new DescribeZoneInstanceConfigInfosResponse();
        this.request("DescribeZoneInstanceConfigInfos", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of an instance. Currently you can only use the API to modify the name and the associated security groups of the instance.

* Instance names are used only for users' convenience. Tencent Cloud does not use the name for ticket submission or instance management.
* Batch operations are supported. The maximum number of instances in each request is 100.
* When you change the security groups associated with an instance, the original security groups will be disassociated.
     * @param {ModifyInstancesAttributeRequest} req
     * @param {function(string, ModifyInstancesAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesAttribute(req, cb) {
        let resp = new ModifyInstancesAttributeResponse();
        this.request("ModifyInstancesAttribute", req, resp, cb);
    }

    /**
     * This API is used to query regions.
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * This API is used to query the price for upgrading the public bandwidth cap of an instance.

* The allowed bandwidth cap varies for different models. For details, see [Purchasing Network Bandwidth](https://cloud.tencent.com/document/product/213/509).
* For bandwidth billed by the `TRAFFIC_POSTPAID_BY_HOUR` method, changing the bandwidth cap through this API takes effect in real time. You can increase or reduce bandwidth within applicable limits.
     * @param {InquiryPriceResetInstancesInternetMaxBandwidthRequest} req
     * @param {function(string, InquiryPriceResetInstancesInternetMaxBandwidthResponse):void} cb
     * @public
     */
    InquiryPriceResetInstancesInternetMaxBandwidth(req, cb) {
        let resp = new InquiryPriceResetInstancesInternetMaxBandwidthResponse();
        this.request("InquiryPriceResetInstancesInternetMaxBandwidth", req, resp, cb);
    }

    /**
     * This API is used to unbind one or more key pairs from one or more instances.

* It only supports [`STOPPED`](https://cloud.tencent.com/document/product/213/15753#InstanceStatus) Linux instances.
* After a key pair is disassociated from an instance, you can log in to the instance with password.
* If you did not set a password for the instance, you will not be able to log in via SSH after the unbinding. In this case, you can call [ResetInstancesPassword](https://cloud.tencent.com/document/api/213/15736) to set a login password.
* Batch operations are supported. The maximum number of instances in each request is 100. If instances not available for the operation are selected, you will get an error code.
     * @param {DisassociateInstancesKeyPairsRequest} req
     * @param {function(string, DisassociateInstancesKeyPairsResponse):void} cb
     * @public
     */
    DisassociateInstancesKeyPairs(req, cb) {
        let resp = new DisassociateInstancesKeyPairsResponse();
        this.request("DisassociateInstancesKeyPairs", req, resp, cb);
    }

    /**
     * This API is used to create an `OpenSSH RSA` key pair, which you can use to log in to a `Linux` instance.

* You only need to specify a name, and the system will automatically create a key pair and return its `ID` and the public and private keys.
* The name of the key pair must be unique.
* You can save the private key to a file and use it as an authentication method for `SSH`.
* Tencent Cloud does not save users' private keys. Be sure to save it yourself.
     * @param {CreateKeyPairRequest} req
     * @param {function(string, CreateKeyPairResponse):void} cb
     * @public
     */
    CreateKeyPair(req, cb) {
        let resp = new CreateKeyPairResponse();
        this.request("CreateKeyPair", req, resp, cb);
    }

    /**
     * This API is used to delete the key pairs hosted in Tencent Cloud.

* You can delete multiple key pairs at the same time.
* A key pair used by an instance or image cannot be deleted. Therefore, you need to verify whether all the key pairs have been deleted successfully.
     * @param {DeleteKeyPairsRequest} req
     * @param {function(string, DeleteKeyPairsResponse):void} cb
     * @public
     */
    DeleteKeyPairs(req, cb) {
        let resp = new DeleteKeyPairsResponse();
        this.request("DeleteKeyPairs", req, resp, cb);
    }

    /**
     * This API is used to create a [spread placement group](https://cloud.tencent.com/document/product/213/15486). After you create one, you can specify it for an instance when you [create the instance](https://cloud.tencent.com/document/api/213/15730), 
     * @param {CreateDisasterRecoverGroupRequest} req
     * @param {function(string, CreateDisasterRecoverGroupResponse):void} cb
     * @public
     */
    CreateDisasterRecoverGroup(req, cb) {
        let resp = new CreateDisasterRecoverGroupResponse();
        this.request("CreateDisasterRecoverGroup", req, resp, cb);
    }

    /**
     * This API is used to query the details of instances.

* You can filter the query results with the instance `ID`, name, or billing method. See `Filter` for more information.
* If no parameter is defined, a certain number of instances under the current account will be returned. The number is specified by `Limit` and is 20 by default.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * This API is used to import key pairs.

* You can use this API to import key pairs to a user account, but the key pairs will not be automatically associated with any instance. You may use [AssociasteInstancesKeyPair](https://cloud.tencent.com/document/api/213/9404) to associate key pairs with instances.
* You need to specify the names of the key pairs and the content of the public keys.
* If you only have private keys, you can convert them to public keys with the `SSL` tool before importing them.
     * @param {ImportKeyPairRequest} req
     * @param {function(string, ImportKeyPairResponse):void} cb
     * @public
     */
    ImportKeyPair(req, cb) {
        let resp = new ImportKeyPairResponse();
        this.request("ImportKeyPair", req, resp, cb);
    }

    /**
     * This API is used to associate key pairs with instances.

* If the public key of a key pair is written to the `SSH` configuration of the instance, users will be able to log in to the instance with the private key of the key pair.
* If the instance is already associated with a key, the old key will become invalid.
If you currently use a password to log in, you will no longer be able to do so after you associate the instance with a key.
* Batch operations are supported. The maximum number of instances in each request is 100. If any instance in the request cannot be associated with a key, you will get an error code.
     * @param {AssociateInstancesKeyPairsRequest} req
     * @param {function(string, AssociateInstancesKeyPairsResponse):void} cb
     * @public
     */
    AssociateInstancesKeyPairs(req, cb) {
        let resp = new AssociateInstancesKeyPairsResponse();
        this.request("AssociateInstancesKeyPairs", req, resp, cb);
    }

    /**
     * This API is used to create one or more instances with a specified configuration.

* After an instance is created successfully, it will start up automatically, and the [instance state](/document/api/213/9452#instance_state) will become "Running".
* If you create a pay-as-you-go instance billed on an hourly basis, an amount equivalent to the hourly rate will be frozen before the creation. Make sure your account balance is sufficient before calling this API.
* The number of instances you can purchase through this API is subject to the [CVM instance purchase limit](https://cloud.tencent.com/document/product/213/2664). Both the instances created through this API and the console will be counted toward the quota.
* This API is an async API. An instance `ID` list will be returned after you successfully make a creation request. However, it does not mean the creation has been completed. The state of the instance will be `Creating` during the creation. You can use [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) to query the status of the instance. If the status changes from `Creating` to `Running`, it means that the instance has been created successfully.
     * @param {RunInstancesRequest} req
     * @param {function(string, RunInstancesResponse):void} cb
     * @public
     */
    RunInstances(req, cb) {
        let resp = new RunInstancesResponse();
        this.request("RunInstances", req, resp, cb);
    }

    /**
     * This API is used to delete images.

* If the [ImageState](https://cloud.tencent.com/document/api/213/9452#image_state) of an image is `Creating` or `In Use`, it cannot be deleted. Use [DescribeImages](https://cloud.tencent.com/document/api/213/9418) to query the image state.
* You can only create up to 10 custom images in each region. If you have used up the quota, you can delete images to create new ones.
* A shared image cannot be deleted.
     * @param {DeleteImagesRequest} req
     * @param {function(string, DeleteImagesResponse):void} cb
     * @public
     */
    DeleteImages(req, cb) {
        let resp = new DeleteImagesResponse();
        this.request("DeleteImages", req, resp, cb);
    }

    /**
     * This API is used to query the price for expanding data disks of an instance.

* Currently, you can only use this API to query the price of non-elastic data disks whose [disk type](/document/api/213/9452#block_device) is `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`. You can use [`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315) to check whether a disk is elastic. If the `Portable` field in the response is `false`, it means that the disk is non-elastic.
* Currently, you cannot use this API to query the price for [CDH](https://cloud.tencent.com/document/product/416) instances. *Also, you can only query the price of expanding one data disk at a time.
     * @param {InquiryPriceResizeInstanceDisksRequest} req
     * @param {function(string, InquiryPriceResizeInstanceDisksResponse):void} cb
     * @public
     */
    InquiryPriceResizeInstanceDisks(req, cb) {
        let resp = new InquiryPriceResizeInstanceDisksResponse();
        this.request("InquiryPriceResizeInstanceDisks", req, resp, cb);
    }

    /**
     * This API is used to return instances.

* Use this API to return instances that are no longer required.
* Pay-as-you-go instances can be returned directly through this API.
* When this API is called for the first time, the instance will be moved to the recycle bin. When this API is called for the second time, the instance will be terminated and cannot be recovered.
* Batch operations are supported. The allowed maximum number of instances in each request is 100.
     * @param {TerminateInstancesRequest} req
     * @param {function(string, TerminateInstancesResponse):void} cb
     * @public
     */
    TerminateInstances(req, cb) {
        let resp = new TerminateInstancesResponse();
        this.request("TerminateInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the VPC attributes of an instance, such as the VPC IP address.
* By default, the instances will shut down when you perform this operation and restart upon completion.
* If the specified VPC ID and subnet ID (the subnet must be in the same availability zone as the instance) are different from the VPC where the specified instance resides, the instance will be migrated to a subnet of the specified VPC. Before performing this operation, make sure that the specified instance is not bound with an [ENI](https://cloud.tencent.com/document/product/576) or [CLB](https://cloud.tencent.com/document/product/214).
     * @param {ModifyInstancesVpcAttributeRequest} req
     * @param {function(string, ModifyInstancesVpcAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesVpcAttribute(req, cb) {
        let resp = new ModifyInstancesVpcAttributeResponse();
        this.request("ModifyInstancesVpcAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the price for reinstalling an instance.

* If you have specified the `ImageId` parameter, the price query is performed with the specified image. Otherwise, the image used by the current instance is used.
* You can only query the price for reinstallation caused by switching between Linux and Windows OS. And the [system disk type](https://cloud.tencent.com/document/api/213/15753#SystemDisk) of the instance must be `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`.
* Currently, this API only supports instances in Mainland China regions.
     * @param {InquiryPriceResetInstanceRequest} req
     * @param {function(string, InquiryPriceResetInstanceResponse):void} cb
     * @public
     */
    InquiryPriceResetInstance(req, cb) {
        let resp = new InquiryPriceResetInstanceResponse();
        this.request("InquiryPriceResetInstance", req, resp, cb);
    }

    /**
     * This API is used to query the quota of [spread placement groups](https://cloud.tencent.com/document/product/213/15486).
     * @param {DescribeDisasterRecoverGroupQuotaRequest} req
     * @param {function(string, DescribeDisasterRecoverGroupQuotaResponse):void} cb
     * @public
     */
    DescribeDisasterRecoverGroupQuota(req, cb) {
        let resp = new DescribeDisasterRecoverGroupQuotaResponse();
        this.request("DescribeDisasterRecoverGroupQuota", req, resp, cb);
    }

    /**
     * This API is used to reset the password of the operating system instances to a user-specified password.

* To modify the password of the administrator account: the name of the administrator account varies with the operating system. In Windows, it is `Administrator`; in Ubuntu, it is `ubuntu`; in Linux, it is `root`.
* To reset the password of a running instance, you need to set the parameter `ForceStop` to `True` for a forced shutdown. If not, only passwords of stopped instances can be reset.
* Batch operations are supported. You can reset the passwords of up to 100 instances to the same value once.
* You can call the [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) API and find the result of the operation in the response parameter `LatestOperationState`. If the value is `SUCCESS`, the operation is successful.
     * @param {ResetInstancesPasswordRequest} req
     * @param {function(string, ResetInstancesPasswordResponse):void} cb
     * @public
     */
    ResetInstancesPassword(req, cb) {
        let resp = new ResetInstancesPasswordResponse();
        this.request("ResetInstancesPassword", req, resp, cb);
    }

    /**
     * This API is used to purchase one or more specific Reserved Instances.
     * @param {PurchaseReservedInstancesOfferingRequest} req
     * @param {function(string, PurchaseReservedInstancesOfferingResponse):void} cb
     * @public
     */
    PurchaseReservedInstancesOffering(req, cb) {
        let resp = new PurchaseReservedInstancesOfferingResponse();
        this.request("PurchaseReservedInstancesOffering", req, resp, cb);
    }

    /**
     * This API (ResizeInstanceDisks) is used to expand the data disks of an instance.

* Currently, you can only use the API to expand non-elastic data disks whose [disk type](/document/api/213/9452#block_device) is `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`. You can use [`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315) to check whether a disk is elastic. If the `Portable` field in the response is `false`, it means that the disk is non-elastic.
* Currently, this API does not support [CDH](https://cloud.tencent.com/document/product/416) instances.
* Currently, only one data disk can be expanded at a time.
     * @param {ResizeInstanceDisksRequest} req
     * @param {function(string, ResizeInstanceDisksResponse):void} cb
     * @public
     */
    ResizeInstanceDisks(req, cb) {
        let resp = new ResizeInstanceDisksResponse();
        this.request("ResizeInstanceDisks", req, resp, cb);
    }

    /**
     * This API is used to list reserved instances the user has purchased.
     * @param {DescribeReservedInstancesRequest} req
     * @param {function(string, DescribeReservedInstancesResponse):void} cb
     * @public
     */
    DescribeReservedInstances(req, cb) {
        let resp = new DescribeReservedInstancesResponse();
        this.request("DescribeReservedInstances", req, resp, cb);
    }

    /**
     * This API is used to query availability zones.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to create a new image with the system disk of an instance. The image can be used to create new instances.
     * @param {CreateImageRequest} req
     * @param {function(string, CreateImageResponse):void} cb
     * @public
     */
    CreateImage(req, cb) {
        let resp = new CreateImageResponse();
        this.request("CreateImage", req, resp, cb);
    }

    /**
     * This API is used to associate security groups with specified instances.
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        let resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }

    /**
     * This API is used to change the model of an instance.
* You can only use this API to change the models of instances whose [system disk type](/document/api/213/9452#block_device) is `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`.
* Currently, you cannot use this API to change the models of [CDH](https://cloud.tencent.com/document/product/416) instances.
     * @param {ResetInstancesTypeRequest} req
     * @param {function(string, ResetInstancesTypeResponse):void} cb
     * @public
     */
    ResetInstancesType(req, cb) {
        let resp = new ResetInstancesTypeResponse();
        this.request("ResetInstancesType", req, resp, cb);
    }

    /**
     * This API is used to modify image attributes.

* Attributes of shared images cannot be modified.
     * @param {ModifyImageAttributeRequest} req
     * @param {function(string, ModifyImageAttributeResponse):void} cb
     * @public
     */
    ModifyImageAttribute(req, cb) {
        let resp = new ModifyImageAttributeResponse();
        this.request("ModifyImageAttribute", req, resp, cb);
    }

    /**
     * This API is used to query limitations on operations on an instance.

* Currently you can use this API to query the maximum number of times you can modify the configuration of an instance.
     * @param {DescribeInstancesOperationLimitRequest} req
     * @param {function(string, DescribeInstancesOperationLimitResponse):void} cb
     * @public
     */
    DescribeInstancesOperationLimit(req, cb) {
        let resp = new DescribeInstancesOperationLimitResponse();
        this.request("DescribeInstancesOperationLimit", req, resp, cb);
    }

    /**
     * This API is used to query the price for adjusting the instance model.

* Currently, you can only use this API to query the prices of instances whose [system disk type](https://cloud.tencent.com/document/api/213/9452#block_device) is `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`.
* Currently, you cannot use this API to query the prices of [CDH](https://cloud.tencent.com/document/product/416) instances.
     * @param {InquiryPriceResetInstancesTypeRequest} req
     * @param {function(string, InquiryPriceResetInstancesTypeResponse):void} cb
     * @public
     */
    InquiryPriceResetInstancesType(req, cb) {
        let resp = new InquiryPriceResetInstancesTypeResponse();
        this.request("InquiryPriceResetInstancesType", req, resp, cb);
    }

    /**
     * This API is used to query a list of model families available to the current user in the current region.
     * @param {DescribeInstanceFamilyConfigsRequest} req
     * @param {function(string, DescribeInstanceFamilyConfigsResponse):void} cb
     * @public
     */
    DescribeInstanceFamilyConfigs(req, cb) {
        let resp = new DescribeInstanceFamilyConfigsResponse();
        this.request("DescribeInstanceFamilyConfigs", req, resp, cb);
    }

    /**
     * This API is used to delete a [spread placement group](https://cloud.tencent.com/document/product/213/15486). Only empty placement groups can be deleted. To delete a non-empty group, you need to terminate all the CVM instances in it first. Otherwise, the deletion will fail.
     * @param {DeleteDisasterRecoverGroupsRequest} req
     * @param {function(string, DeleteDisasterRecoverGroupsResponse):void} cb
     * @public
     */
    DeleteDisasterRecoverGroups(req, cb) {
        let resp = new DeleteDisasterRecoverGroupsResponse();
        this.request("DeleteDisasterRecoverGroups", req, resp, cb);
    }

    /**
     * This API is used to query the list of supported operating systems of imported images.
     * @param {DescribeImportImageOsRequest} req
     * @param {function(string, DescribeImportImageOsResponse):void} cb
     * @public
     */
    DescribeImportImageOs(req, cb) {
        let resp = new DescribeImportImageOsResponse();
        this.request("DescribeImportImageOs", req, resp, cb);
    }

    /**
     * This API is used to change the public bandwidth cap of an instance.

* The allowed bandwidth cap varies for different models. For details, see [Purchasing Network Bandwidth](https://cloud.tencent.com/document/product/213/509).
* For bandwidth billed by the `TRAFFIC_POSTPAID_BY_HOUR` method, changing the bandwidth cap through this API takes effect in real time. Users can increase or reduce bandwidth within applicable limits.
     * @param {ResetInstancesInternetMaxBandwidthRequest} req
     * @param {function(string, ResetInstancesInternetMaxBandwidthResponse):void} cb
     * @public
     */
    ResetInstancesInternetMaxBandwidth(req, cb) {
        let resp = new ResetInstancesInternetMaxBandwidthResponse();
        this.request("ResetInstancesInternetMaxBandwidth", req, resp, cb);
    }

    /**
     * This API is used to reinstall the operating system of the specified instance.

* If you specify an `ImageId`, the specified image is used. Otherwise, the image used by the current instance is used.
* The system disk will be formatted and reset. Therefore, make sure that no important files are stored on the system disk.
* If the operating system switches between `Linux` and `Windows`, the system disk `ID` of the instance will change, and the snapshots that are associated with the system disk can no longer be used to roll back and restore data.
* If no password is specified, you will get a random password via internal message.
* You can only use this API to switch the operating system between `Linux` and `Windows` for instances whose [system disk type](https://cloud.tencent.com/document/api/213/9452#SystemDisk) is `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`.
* Currently, this API only supports instances in Mainland China regions.
     * @param {ResetInstanceRequest} req
     * @param {function(string, ResetInstanceResponse):void} cb
     * @public
     */
    ResetInstance(req, cb) {
        let resp = new ResetInstanceResponse();
        this.request("ResetInstance", req, resp, cb);
    }

    /**
     * This API is used to sync a custom image to other regions.

* Each API call syncs a single image.
* This API supports syncing an image to multiple regions.
* Each account can have up to 10 custom images in each region. 
     * @param {SyncImagesRequest} req
     * @param {function(string, SyncImagesResponse):void} cb
     * @public
     */
    SyncImages(req, cb) {
        let resp = new SyncImagesResponse();
        this.request("SyncImages", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of key pairs.

* This API modifies the name and description of the key pair identified by the key pair ID.
* The name of the key pair must be unique.
* Key pair ID is the unique identifier of a key pair and cannot be modified.
     * @param {ModifyKeyPairAttributeRequest} req
     * @param {function(string, ModifyKeyPairAttributeResponse):void} cb
     * @public
     */
    ModifyKeyPairAttribute(req, cb) {
        let resp = new ModifyKeyPairAttributeResponse();
        this.request("ModifyKeyPairAttribute", req, resp, cb);
    }

    /**
     * This API is used to import images. Imported images can be used to create instances. 
     * @param {ImportImageRequest} req
     * @param {function(string, ImportImageResponse):void} cb
     * @public
     */
    ImportImage(req, cb) {
        let resp = new ImportImageResponse();
        this.request("ImportImage", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of [spread placement groups](https://cloud.tencent.com/document/product/213/15486).
     * @param {ModifyDisasterRecoverGroupAttributeRequest} req
     * @param {function(string, ModifyDisasterRecoverGroupAttributeResponse):void} cb
     * @public
     */
    ModifyDisasterRecoverGroupAttribute(req, cb) {
        let resp = new ModifyDisasterRecoverGroupAttributeResponse();
        this.request("ModifyDisasterRecoverGroupAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the Virtual Network Console (VNC) URL of an instance for its login to the VNC.

* It does not support `STOPPED` CVMs.
* A VNC URL is only valid for 15 seconds. If you do not access the URL within 15 seconds, it will become invalid and you have to query a URL again.
* Once the VNC URL is accessed, it will become invalid and you have to query a URL again if needed.
* If the connection is interrupted, you can make up to 30 reconnection attempts per minute.
* After getting the value `InstanceVncUrl`, you need to append `InstanceVncUrl=xxxx` to the end of the link <https://img.qcloud.com/qcloud/app/active_vnc/index.html?>.

  - `InstanceVncUrl`: its value will be returned after the API is successfully called.

    The final URL is in the following format:

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
     * This API is used to change the project to which an instance belongs.

* Project is a virtual concept. You can create multiple projects under one account, manage different resources in each project, and assign different instances to different projects. You may use the [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API to query instances and use the project ID to filter results.
* You cannot modify the project of an instance that is bound to a load balancer. You need to firstly unbind the load balancer from the instance by using the [`DeregisterInstancesFromLoadBalancer`](https://cloud.tencent.com/document/api/214/1258) API.
[^_^]: # (If you modify the project of an instance, security groups associated with the instance will be automatically disassociated. You can use the [`ModifyInstancesAttribute`](https://cloud.tencent.com/document/api/213/15739) API to associate the instance with the security groups again.
* Batch operations are supported. You can operate up to 100 instances in each request.
* You can call the [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) API and find the result of the operation in the response parameter `LatestOperationState`. If the value is `SUCCESS`, the operation is successful.
     * @param {ModifyInstancesProjectRequest} req
     * @param {function(string, ModifyInstancesProjectResponse):void} cb
     * @public
     */
    ModifyInstancesProject(req, cb) {
        let resp = new ModifyInstancesProjectResponse();
        this.request("ModifyInstancesProject", req, resp, cb);
    }

    /**
     * This API is used to start instances.

* You can only perform this operation on instances whose status is `STOPPED`.
* The instance status will become `STARTING` when the API is called successfully and `RUNNING` when the instance is successfully started.
* Batch operations are supported. The maximum number of instances in each request is 100.
     * @param {StartInstancesRequest} req
     * @param {function(string, StartInstancesResponse):void} cb
     * @public
     */
    StartInstances(req, cb) {
        let resp = new StartInstancesResponse();
        this.request("StartInstances", req, resp, cb);
    }

    /**
     * This API is used to query the information on [spread placement groups](https://cloud.tencent.com/document/product/213/15486).
     * @param {DescribeDisasterRecoverGroupsRequest} req
     * @param {function(string, DescribeDisasterRecoverGroupsResponse):void} cb
     * @public
     */
    DescribeDisasterRecoverGroups(req, cb) {
        let resp = new DescribeDisasterRecoverGroupsResponse();
        this.request("DescribeDisasterRecoverGroups", req, resp, cb);
    }

    /**
     * This API is used to query key pairs.

* A key pair is a pair of keys generated by an algorithm in which the public key is available to the public and the private key is available only to the user. You can use this API to query the public key but not the private key.
     * @param {DescribeKeyPairsRequest} req
     * @param {function(string, DescribeKeyPairsResponse):void} cb
     * @public
     */
    DescribeKeyPairs(req, cb) {
        let resp = new DescribeKeyPairsResponse();
        this.request("DescribeKeyPairs", req, resp, cb);
    }

    /**
     * This API is used to describe Reserved Instance offerings that are available for purchase.
     * @param {DescribeReservedInstancesOfferingsRequest} req
     * @param {function(string, DescribeReservedInstancesOfferingsResponse):void} cb
     * @public
     */
    DescribeReservedInstancesOfferings(req, cb) {
        let resp = new DescribeReservedInstancesOfferingsResponse();
        this.request("DescribeReservedInstancesOfferings", req, resp, cb);
    }

    /**
     * This API is used to query the details of CDH instances.
     * @param {DescribeHostsRequest} req
     * @param {function(string, DescribeHostsResponse):void} cb
     * @public
     */
    DescribeHosts(req, cb) {
        let resp = new DescribeHostsResponse();
        this.request("DescribeHosts", req, resp, cb);
    }

    /**
     * This API is used to create CDH instances with specified configuration.
* When HostChargeType is PREPAID, the HostChargePrepaid parameter must be specified.
     * @param {AllocateHostsRequest} req
     * @param {function(string, AllocateHostsResponse):void} cb
     * @public
     */
    AllocateHosts(req, cb) {
        let resp = new AllocateHostsResponse();
        this.request("AllocateHosts", req, resp, cb);
    }

    /**
     * This API is used to query the network billing methods.
     * @param {DescribeInternetChargeTypeConfigsRequest} req
     * @param {function(string, DescribeInternetChargeTypeConfigsResponse):void} cb
     * @public
     */
    DescribeInternetChargeTypeConfigs(req, cb) {
        let resp = new DescribeInternetChargeTypeConfigsResponse();
        this.request("DescribeInternetChargeTypeConfigs", req, resp, cb);
    }

    /**
     * This API is used to restart instances.

* You can only perform this operation on instances whose status is `RUNNING`.
* If the API is called successfully, the instance status will become `REBOOTING`. After the instance is restarted, its status will become `RUNNING` again.
* Forced restart is supported. A forced restart is similar to switching off the power of a physical computer and starting it again. It may cause data loss or file system corruption. Be sure to only force start a CVM when it cannot be restarted normally.
* Batch operations are supported. The maximum number of instances in each request is 100.
     * @param {RebootInstancesRequest} req
     * @param {function(string, RebootInstancesResponse):void} cb
     * @public
     */
    RebootInstances(req, cb) {
        let resp = new RebootInstancesResponse();
        this.request("RebootInstances", req, resp, cb);
    }

    /**
     * This API is used to query the model configuration of an instance.

* You can filter the query results with `zone` or `instance-family`. For more information on filtering conditions, see [`Filter`](https://cloud.tencent.com/document/api/213/15753#Filter).
* If no parameter is defined, the model configuration of all the instances in the specified region will be returned.
     * @param {DescribeInstanceTypeConfigsRequest} req
     * @param {function(string, DescribeInstanceTypeConfigsResponse):void} cb
     * @public
     */
    DescribeInstanceTypeConfigs(req, cb) {
        let resp = new DescribeInstanceTypeConfigsResponse();
        this.request("DescribeInstanceTypeConfigs", req, resp, cb);
    }

    /**
     * This API is used to disassociate security groups from instances.
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        let resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }


}
module.exports = CvmClient;
