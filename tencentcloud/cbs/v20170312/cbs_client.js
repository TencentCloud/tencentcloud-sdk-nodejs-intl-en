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
const SnapshotOperationLog = models.SnapshotOperationLog;
const ModifyDiskExtraPerformanceRequest = models.ModifyDiskExtraPerformanceRequest;
const ModifyDiskAttributesResponse = models.ModifyDiskAttributesResponse;
const DescribeDiskBackupsRequest = models.DescribeDiskBackupsRequest;
const AutoSnapshotPolicy = models.AutoSnapshotPolicy;
const DetailPrice = models.DetailPrice;
const DescribeSnapshotOperationLogsRequest = models.DescribeSnapshotOperationLogsRequest;
const CreateDiskBackupRequest = models.CreateDiskBackupRequest;
const CopySnapshotCrossRegionsResponse = models.CopySnapshotCrossRegionsResponse;
const ModifyAutoSnapshotPolicyAttributeResponse = models.ModifyAutoSnapshotPolicyAttributeResponse;
const ModifyDiskBackupQuotaRequest = models.ModifyDiskBackupQuotaRequest;
const InquiryPriceCreateDisksResponse = models.InquiryPriceCreateDisksResponse;
const BindAutoSnapshotPolicyRequest = models.BindAutoSnapshotPolicyRequest;
const CreateSnapshotResponse = models.CreateSnapshotResponse;
const DescribeAutoSnapshotPoliciesRequest = models.DescribeAutoSnapshotPoliciesRequest;
const ModifySnapshotsSharePermissionResponse = models.ModifySnapshotsSharePermissionResponse;
const DeleteDiskBackupsRequest = models.DeleteDiskBackupsRequest;
const InitializeDisksResponse = models.InitializeDisksResponse;
const DeleteDiskBackupsResponse = models.DeleteDiskBackupsResponse;
const DescribeDiskBackupsResponse = models.DescribeDiskBackupsResponse;
const SnapshotCopyResult = models.SnapshotCopyResult;
const InquirePriceModifyDiskExtraPerformanceResponse = models.InquirePriceModifyDiskExtraPerformanceResponse;
const AdvancedRetentionPolicy = models.AdvancedRetentionPolicy;
const CreateDisksRequest = models.CreateDisksRequest;
const AttachDisksRequest = models.AttachDisksRequest;
const DescribeDiskAssociatedAutoSnapshotPolicyRequest = models.DescribeDiskAssociatedAutoSnapshotPolicyRequest;
const DescribeSnapshotsRequest = models.DescribeSnapshotsRequest;
const ModifyAutoSnapshotPolicyAttributeRequest = models.ModifyAutoSnapshotPolicyAttributeRequest;
const DescribeDiskConfigQuotaResponse = models.DescribeDiskConfigQuotaResponse;
const ApplyDiskBackupResponse = models.ApplyDiskBackupResponse;
const InquiryPriceResizeDiskResponse = models.InquiryPriceResizeDiskResponse;
const Tag = models.Tag;
const ResizeDiskResponse = models.ResizeDiskResponse;
const Disk = models.Disk;
const TerminateDisksResponse = models.TerminateDisksResponse;
const ApplySnapshotResponse = models.ApplySnapshotResponse;
const DetachDisksRequest = models.DetachDisksRequest;
const CreateSnapshotRequest = models.CreateSnapshotRequest;
const DescribeInstancesDiskNumRequest = models.DescribeInstancesDiskNumRequest;
const DescribeSnapshotSharePermissionResponse = models.DescribeSnapshotSharePermissionResponse;
const ModifyDiskBackupQuotaResponse = models.ModifyDiskBackupQuotaResponse;
const DescribeSnapshotSharePermissionRequest = models.DescribeSnapshotSharePermissionRequest;
const InquirePriceModifyDiskBackupQuotaRequest = models.InquirePriceModifyDiskBackupQuotaRequest;
const DescribeSnapshotOperationLogsResponse = models.DescribeSnapshotOperationLogsResponse;
const DeleteSnapshotsRequest = models.DeleteSnapshotsRequest;
const DeleteAutoSnapshotPoliciesResponse = models.DeleteAutoSnapshotPoliciesResponse;
const DescribeDisksResponse = models.DescribeDisksResponse;
const Placement = models.Placement;
const DeleteSnapshotsResponse = models.DeleteSnapshotsResponse;
const ModifySnapshotAttributeResponse = models.ModifySnapshotAttributeResponse;
const ModifyDiskAttributesRequest = models.ModifyDiskAttributesRequest;
const GetSnapOverviewRequest = models.GetSnapOverviewRequest;
const Image = models.Image;
const TerminateDisksRequest = models.TerminateDisksRequest;
const DescribeInstancesDiskNumResponse = models.DescribeInstancesDiskNumResponse;
const DescribeDiskOperationLogsResponse = models.DescribeDiskOperationLogsResponse;
const ResizeDiskRequest = models.ResizeDiskRequest;
const ApplyDiskBackupRequest = models.ApplyDiskBackupRequest;
const InitializeDisksRequest = models.InitializeDisksRequest;
const CreateAutoSnapshotPolicyResponse = models.CreateAutoSnapshotPolicyResponse;
const ModifySnapshotAttributeRequest = models.ModifySnapshotAttributeRequest;
const DiskConfig = models.DiskConfig;
const CreateDiskBackupResponse = models.CreateDiskBackupResponse;
const InquirePriceModifyDiskBackupQuotaResponse = models.InquirePriceModifyDiskBackupQuotaResponse;
const DeleteAutoSnapshotPoliciesRequest = models.DeleteAutoSnapshotPoliciesRequest;
const DiskChargePrepaid = models.DiskChargePrepaid;
const Filter = models.Filter;
const InquiryPriceCreateDisksRequest = models.InquiryPriceCreateDisksRequest;
const DescribeSnapshotsResponse = models.DescribeSnapshotsResponse;
const Snapshot = models.Snapshot;
const CreateDisksResponse = models.CreateDisksResponse;
const AttachDisksResponse = models.AttachDisksResponse;
const ModifySnapshotsSharePermissionRequest = models.ModifySnapshotsSharePermissionRequest;
const DiskOperationLog = models.DiskOperationLog;
const BindAutoSnapshotPolicyResponse = models.BindAutoSnapshotPolicyResponse;
const DescribeDiskOperationLogsRequest = models.DescribeDiskOperationLogsRequest;
const DiskBackup = models.DiskBackup;
const DescribeDisksRequest = models.DescribeDisksRequest;
const DetachDisksResponse = models.DetachDisksResponse;
const SharePermission = models.SharePermission;
const Policy = models.Policy;
const ModifyDiskExtraPerformanceResponse = models.ModifyDiskExtraPerformanceResponse;
const InquirePriceModifyDiskExtraPerformanceRequest = models.InquirePriceModifyDiskExtraPerformanceRequest;
const InquiryPriceResizeDiskRequest = models.InquiryPriceResizeDiskRequest;
const DescribeDiskConfigQuotaRequest = models.DescribeDiskConfigQuotaRequest;
const DescribeDiskAssociatedAutoSnapshotPolicyResponse = models.DescribeDiskAssociatedAutoSnapshotPolicyResponse;
const GetSnapOverviewResponse = models.GetSnapOverviewResponse;
const AutoMountConfiguration = models.AutoMountConfiguration;
const CopySnapshotCrossRegionsRequest = models.CopySnapshotCrossRegionsRequest;
const PrepayPrice = models.PrepayPrice;
const DescribeAutoSnapshotPoliciesResponse = models.DescribeAutoSnapshotPoliciesResponse;
const UnbindAutoSnapshotPolicyRequest = models.UnbindAutoSnapshotPolicyRequest;
const UnbindAutoSnapshotPolicyResponse = models.UnbindAutoSnapshotPolicyResponse;
const AttachDetail = models.AttachDetail;
const CreateAutoSnapshotPolicyRequest = models.CreateAutoSnapshotPolicyRequest;
const Price = models.Price;
const ApplySnapshotRequest = models.ApplySnapshotRequest;


/**
 * cbs client
 * @class
 */
class CbsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cbs.intl.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * This API is used to adjust extra performance for Enhanced SSD (CLOUD_HSSD) and ulTra SSD. 

*This API only supports adjust extra performance for Enhanced SSD and ulTra SSD. 
     * @param {ModifyDiskExtraPerformanceRequest} req
     * @param {function(string, ModifyDiskExtraPerformanceResponse):void} cb
     * @public
     */
    ModifyDiskExtraPerformance(req, cb) {
        let resp = new ModifyDiskExtraPerformanceResponse();
        this.request("ModifyDiskExtraPerformance", req, resp, cb);
    }

    /**
     * This API is used to roll back a backup point to the original cloud disk.

* Only rollback to the original cloud disk is supported. For a data disk backup point, if you want to copy the backup point data to another cloud disk, use the `CreateSnapshot` API to convert the backup point into a snapshot, use the `CreateDisks` API to create an elastic cloud disk, and then copy the snapshot data to it.
* Only backup points in `NORMAL` status can be rolled back. To query the status of a backup point, call the `DescribeDiskBackups` API and see the `BackupState` field in the response.
* For an elastic cloud disk, it must be in unattached status. To query the status of the cloud disk, call the `DescribeDisks` API and see the `Attached` field in the response. For a non-elastic cloud disk purchased together with an instance, the instance must be in shutdown status, which can be queried through the `DescribeInstancesStatus` API.
     * @param {ApplyDiskBackupRequest} req
     * @param {function(string, ApplyDiskBackupResponse):void} cb
     * @public
     */
    ApplyDiskBackup(req, cb) {
        let resp = new ApplyDiskBackupResponse();
        this.request("ApplyDiskBackup", req, resp, cb);
    }

    /**
     * This API is used to replicate a snapshot to another region.

* This is an async API. A new snapshot ID is issued when the cross-region replication task is generated. It does not mean that the snapshot has been replicated successfully. You can all the [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1) API in the destination region to check for this snapshot. If the snapshot status is `NORMAL`, the snapshot is replicated successfully.
* The snapshot cross-region replication service will be commercialized in the Q3 of 2022. We will notify users about the commercialization in advance. Please check your messages in the Message Center.
     * @param {CopySnapshotCrossRegionsRequest} req
     * @param {function(string, CopySnapshotCrossRegionsResponse):void} cb
     * @public
     */
    CopySnapshotCrossRegions(req, cb) {
        let resp = new CopySnapshotCrossRegionsResponse();
        this.request("CopySnapshotCrossRegions", req, resp, cb);
    }

    /**
     * This API (DescribeInstancesDiskNum) is used to query the number of cloud disks mounted in the instance.

* Batch operations are supported. If multiple CVM instance IDs are specified, the returned results will list the number of cloud disks mounted on each CVM.
     * @param {DescribeInstancesDiskNumRequest} req
     * @param {function(string, DescribeInstancesDiskNumResponse):void} cb
     * @public
     */
    DescribeInstancesDiskNum(req, cb) {
        let resp = new DescribeInstancesDiskNumResponse();
        this.request("DescribeInstancesDiskNum", req, resp, cb);
    }

    /**
     * This API is used to query the price for expanding cloud disks.
     * @param {InquiryPriceResizeDiskRequest} req
     * @param {function(string, InquiryPriceResizeDiskResponse):void} cb
     * @public
     */
    InquiryPriceResizeDisk(req, cb) {
        let resp = new InquiryPriceResizeDiskResponse();
        this.request("InquiryPriceResizeDisk", req, resp, cb);
    }

    /**
     * This API is used to query the price for adjusting the cloud disk’s extra performance.
     * @param {InquirePriceModifyDiskExtraPerformanceRequest} req
     * @param {function(string, InquirePriceModifyDiskExtraPerformanceResponse):void} cb
     * @public
     */
    InquirePriceModifyDiskExtraPerformance(req, cb) {
        let resp = new InquirePriceModifyDiskExtraPerformanceResponse();
        this.request("InquirePriceModifyDiskExtraPerformance", req, resp, cb);
    }

    /**
     * This API is used to query scheduled snapshot policies.

* You can filter scheduled snapshot policies by ID, name, state, etc. The relationship between different filters is logical `AND`. For details on filters, see `Filter`.
* If no parameter is specified, a certain number of scheduled snapshot policies under the current account will be returned. The number is specified by `Limit` and is 20 by default.
     * @param {DescribeAutoSnapshotPoliciesRequest} req
     * @param {function(string, DescribeAutoSnapshotPoliciesResponse):void} cb
     * @public
     */
    DescribeAutoSnapshotPolicies(req, cb) {
        let resp = new DescribeAutoSnapshotPoliciesResponse();
        this.request("DescribeAutoSnapshotPolicies", req, resp, cb);
    }

    /**
     * This API is used to mount one or more cloud disks.
 
* Batch operation is supported. You can mount multiple cloud disks to one CVM in a single request. If any of these cloud disks cannot be mounted, the operation fails and a specific error code returns.
* This is an async API. A successful request indicates that the mounting is initiated. You can call the [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) API to query the status of cloud disks. If the status changes from `ATTACHING` to `ATTACHED`, the mounting is successful.
     * @param {AttachDisksRequest} req
     * @param {function(string, AttachDisksResponse):void} cb
     * @public
     */
    AttachDisks(req, cb) {
        let resp = new AttachDisksResponse();
        this.request("AttachDisks", req, resp, cb);
    }

    /**
     * This API is used to query the price of a cloud disk after its backup point quota is modified.
     * @param {InquirePriceModifyDiskBackupQuotaRequest} req
     * @param {function(string, InquirePriceModifyDiskBackupQuotaResponse):void} cb
     * @public
     */
    InquirePriceModifyDiskBackupQuota(req, cb) {
        let resp = new InquirePriceModifyDiskBackupQuotaResponse();
        this.request("InquirePriceModifyDiskBackupQuota", req, resp, cb);
    }

    /**
     * This API is used to delete the backup points of the specified cloud disk in batches.
     * @param {DeleteDiskBackupsRequest} req
     * @param {function(string, DeleteDiskBackupsResponse):void} cb
     * @public
     */
    DeleteDiskBackups(req, cb) {
        let resp = new DeleteDiskBackupsResponse();
        this.request("DeleteDiskBackups", req, resp, cb);
    }

    /**
     * This API (ModifyAutoSnapshotPolicyAttribute) is used to modify the attributes of an automatic snapshot policy.

* You can use this API to modify the attributes of a scheduled snapshot policy, including the execution policy, name, and activation.
* When modifying the number of days for retention, you must ensure that there is no clash with the permanent retention attribute. Otherwise, the entire operation will fail and a specific error code will be returned.
     * @param {ModifyAutoSnapshotPolicyAttributeRequest} req
     * @param {function(string, ModifyAutoSnapshotPolicyAttributeResponse):void} cb
     * @public
     */
    ModifyAutoSnapshotPolicyAttribute(req, cb) {
        let resp = new ModifyAutoSnapshotPolicyAttributeResponse();
        this.request("ModifyAutoSnapshotPolicyAttribute", req, resp, cb);
    }

    /**
     * This API is used to query the price of creating cloud disks.

* You can query the price of creating multiple cloud disks in a single request. In this case, the price returned will be the total price.
     * @param {InquiryPriceCreateDisksRequest} req
     * @param {function(string, InquiryPriceCreateDisksResponse):void} cb
     * @public
     */
    InquiryPriceCreateDisks(req, cb) {
        let resp = new InquiryPriceCreateDisksResponse();
        this.request("InquiryPriceCreateDisks", req, resp, cb);
    }

    /**
     * This API is used to query the details of backup points.

You can filter results by backup point ID. You can also look for certain backup points by specifying the ID or type of the cloud disk for which the backup points are created. The relationship between different filters is logical `AND`. For more information on filters, see `Filter`.
If the parameter is empty, a certain number (as specified by `Limit` and 20 by default) of backup points will be returned.
     * @param {DescribeDiskBackupsRequest} req
     * @param {function(string, DescribeDiskBackupsResponse):void} cb
     * @public
     */
    DescribeDiskBackups(req, cb) {
        let resp = new DescribeDiskBackupsResponse();
        this.request("DescribeDiskBackups", req, resp, cb);
    }

    /**
     * 接口已废弃，切换至云审计接口。见https://tapd.woa.com/pro/prong/stories/view/1010114221880719007

This API has been disused. Use the CloudAudit API instead, For more information, visit https://tapd.woa.com/pro/prong/stories/view/1010114221880719007.

This API is used to query the operation logs of a cloud disk. It will be disused soon. Use [LookUpEvents](https://intl.cloud.tencent.com/document/product/629/12359?from_cn_redirect=1) instead.
     * @param {DescribeDiskOperationLogsRequest} req
     * @param {function(string, DescribeDiskOperationLogsResponse):void} cb
     * @public
     */
    DescribeDiskOperationLogs(req, cb) {
        let resp = new DescribeDiskOperationLogsResponse();
        this.request("DescribeDiskOperationLogs", req, resp, cb);
    }

    /**
     * This API (DeleteAutoSnapshotPolicies) is used to delete scheduled snapshot policies.

* Batch operations are supported. If one of the scheduled snapshot policies in a batch cannot be deleted, the operation is not performed and a specific error code is returned.
     * @param {DeleteAutoSnapshotPoliciesRequest} req
     * @param {function(string, DeleteAutoSnapshotPoliciesResponse):void} cb
     * @public
     */
    DeleteAutoSnapshotPolicies(req, cb) {
        let resp = new DeleteAutoSnapshotPoliciesResponse();
        this.request("DeleteAutoSnapshotPolicies", req, resp, cb);
    }

    /**
     * This API is used to reinitialize the cloud disks. Note the following when reinitializing the cloud disks:
1. For a cloud disk created from a snapshot, it is rolled back to the state of the snapshot;
2. For a cloud disk created from the scratch, all data are cleared. Please check and back up the necessary data before the reinitialization;
3. Currently, you can only re-initialize a cloud disk when it’s not attached to a resource and not shared by others;
4. For a cloud disk created from a snapshot, if the snapshot has been deleted, it cannot be reinitialized.
     * @param {InitializeDisksRequest} req
     * @param {function(string, InitializeDisksResponse):void} cb
     * @public
     */
    InitializeDisks(req, cb) {
        let resp = new InitializeDisksResponse();
        this.request("InitializeDisks", req, resp, cb);
    }

    /**
     * This API (DescribeDisks) is used to query the list of cloud disks.

* The details of the cloud disk can be queried based on the ID, type or status of the cloud disk. The relationship between different conditions is AND. For more information about filtering, please see the `Filter`.
* If the parameter is empty, a certain number (specified by `Limit`; the default is 20) of cloud disk lists are returned to the current user.
     * @param {DescribeDisksRequest} req
     * @param {function(string, DescribeDisksResponse):void} cb
     * @public
     */
    DescribeDisks(req, cb) {
        let resp = new DescribeDisksResponse();
        this.request("DescribeDisks", req, resp, cb);
    }

    /**
     * This API is used to modify the cloud disk backup point quota.
     * @param {ModifyDiskBackupQuotaRequest} req
     * @param {function(string, ModifyDiskBackupQuotaResponse):void} cb
     * @public
     */
    ModifyDiskBackupQuota(req, cb) {
        let resp = new ModifyDiskBackupQuotaResponse();
        this.request("ModifyDiskBackupQuota", req, resp, cb);
    }

    /**
     * This API is used to create cloud disks.

* This API supports creating a cloud disk with a data disk snapshot so that the snapshot data can be copied to the purchased cloud disk.
* This API is async. A cloud disk ID list will be returned when a request is made successfully, but it does not mean that the creation has been completed. You can call the [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) API to query cloud disks by `DiskId`. If a new cloud disk can be found and its status is `UNATTACHED` or `ATTACHED`, the cloud disk has been created successfully.
     * @param {CreateDisksRequest} req
     * @param {function(string, CreateDisksResponse):void} cb
     * @public
     */
    CreateDisks(req, cb) {
        let resp = new CreateDisksResponse();
        this.request("CreateDisks", req, resp, cb);
    }

    /**
     * * Only the project ID of elastic cloud disk can be modified. The project ID of the cloud disk created with the CVM is linked with the CVM. The project ID can be can be queried in the Portable field in the output parameters through the API [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1).
* "Cloud disk name" is only used by users for their management. Tencent Cloud does not use the name as the basis for ticket submission or cloud disk management.
* Batch operations are supported. If multiple cloud disk IDs are specified, all the specified cloud disks must have the same attribute. If there is a cloud disk that does not allow this operation, the operation is not performed and a specific error code is returned.
     * @param {ModifyDiskAttributesRequest} req
     * @param {function(string, ModifyDiskAttributesResponse):void} cb
     * @public
     */
    ModifyDiskAttributes(req, cb) {
        let resp = new ModifyDiskAttributesResponse();
        this.request("ModifyDiskAttributes", req, resp, cb);
    }

    /**
     * This API is used to delete snapshots.

* Only snapshots in the `NORMAL` state can be deleted. To query the state of a snapshot, you can call the [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1) API and check the `SnapshotState` field in the response.
* Batch operations are supported. If there is any snapshot that cannot be deleted, the operation will not be performed and a specific error code will be returned.
     * @param {DeleteSnapshotsRequest} req
     * @param {function(string, DeleteSnapshotsResponse):void} cb
     * @public
     */
    DeleteSnapshots(req, cb) {
        let resp = new DeleteSnapshotsResponse();
        this.request("DeleteSnapshots", req, resp, cb);
    }

    /**
     * This API (ModifySnapshotAttribute) is used to modify the attributes of a specified snapshot.

* Currently, you can only modify snapshot name and change non-permanent snapshots into permanent snapshots.
* "Snapshot name" is only used by users for their management. Tencent Cloud does not use the name as the basis for ticket submission or snapshot management.
     * @param {ModifySnapshotAttributeRequest} req
     * @param {function(string, ModifySnapshotAttributeResponse):void} cb
     * @public
     */
    ModifySnapshotAttribute(req, cb) {
        let resp = new ModifySnapshotAttributeResponse();
        this.request("ModifySnapshotAttribute", req, resp, cb);
    }

    /**
     * This API (DescribeDiskAssociatedAutoSnapshotPolicy) is used to query the scheduled snapshot policy bound to a cloud disk.
     * @param {DescribeDiskAssociatedAutoSnapshotPolicyRequest} req
     * @param {function(string, DescribeDiskAssociatedAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    DescribeDiskAssociatedAutoSnapshotPolicy(req, cb) {
        let resp = new DescribeDiskAssociatedAutoSnapshotPolicyResponse();
        this.request("DescribeDiskAssociatedAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * This API (BindAutoSnapshotPolicy) is used to bind the cloud disk to the specified scheduled snapshot policy.

* For the scheduled snapshot policy limit of each region, see [Scheduled Snapshots](https://intl.cloud.tencent.com/document/product/362/8191?from_cn_redirect=1).
* When a cloud disk that is bound to a scheduled snapshot policy is in the unused state (that is, an elastic cloud disk has not been mounted or the server of an inelastic disk is powered off) scheduled snapshots are not created.
     * @param {BindAutoSnapshotPolicyRequest} req
     * @param {function(string, BindAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    BindAutoSnapshotPolicy(req, cb) {
        let resp = new BindAutoSnapshotPolicyResponse();
        this.request("BindAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * This API (DescribeSnapshots) is used to query the details of snapshots.

* Filter the results by the snapshot ID, the ID of cloud disk, for which the snapshot is created, and the type of cloud disk, for which the snapshot is created. The relationship between different conditions is AND. For more information about filtering, please see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit`; the default is 20) of snapshot lists are returned to the current user.
     * @param {DescribeSnapshotsRequest} req
     * @param {function(string, DescribeSnapshotsResponse):void} cb
     * @public
     */
    DescribeSnapshots(req, cb) {
        let resp = new DescribeSnapshotsResponse();
        this.request("DescribeSnapshots", req, resp, cb);
    }

    /**
     * This API is used to query the sharing information of snapshots.
     * @param {DescribeSnapshotSharePermissionRequest} req
     * @param {function(string, DescribeSnapshotSharePermissionResponse):void} cb
     * @public
     */
    DescribeSnapshotSharePermission(req, cb) {
        let resp = new DescribeSnapshotSharePermissionResponse();
        this.request("DescribeSnapshotSharePermission", req, resp, cb);
    }

    /**
     * This API (CreateAutoSnapshotPolicy) is used to create a scheduled snapshot policy.

* For the limits on the number of scheduled snapshot policies that can be created in each region, see [Scheduled Snapshots](https://intl.cloud.tencent.com/document/product/362/8191?from_cn_redirect=1).
* The quantity and capacity of the snapshots that can be created in each region are limited. For more information, see the **Snapshots** page on the Tencent Cloud Console. If the number of snapshots exceeds the quota, the creation of the scheduled snapshots will fail.
     * @param {CreateAutoSnapshotPolicyRequest} req
     * @param {function(string, CreateAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    CreateAutoSnapshotPolicy(req, cb) {
        let resp = new CreateAutoSnapshotPolicyResponse();
        this.request("CreateAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * This API is used to return cloud disks.

* You can use this API to return cloud disks you no longer need.
* This API can be used to return pay-as-you-go cloud disks billed on hourly basis. 
* Batch operations are supported. The maximum number of cloud disks in each request is 50. If there is any specified cloud disk that cannot be returned, an error code will be returned.
     * @param {TerminateDisksRequest} req
     * @param {function(string, TerminateDisksResponse):void} cb
     * @public
     */
    TerminateDisks(req, cb) {
        let resp = new TerminateDisksResponse();
        this.request("TerminateDisks", req, resp, cb);
    }

    /**
     * This API (DescribeDiskConfigQuota) is used to query the cloud disk quota.
     * @param {DescribeDiskConfigQuotaRequest} req
     * @param {function(string, DescribeDiskConfigQuotaResponse):void} cb
     * @public
     */
    DescribeDiskConfigQuota(req, cb) {
        let resp = new DescribeDiskConfigQuotaResponse();
        this.request("DescribeDiskConfigQuota", req, resp, cb);
    }

    /**
     * This API (UnbindAutoSnapshotPolicy) is used to unbind the cloud disk from the specified scheduled snapshot policy.

* Batch operations are supported. Multiple cloud disks can be unbound from a snapshot policy at one time. 
* If the passed-in cloud disks are not bound to the current scheduled snapshot policy, they will be skipped. Only cloud disks that are bound to the current scheduled snapshot policy are processed.
     * @param {UnbindAutoSnapshotPolicyRequest} req
     * @param {function(string, UnbindAutoSnapshotPolicyResponse):void} cb
     * @public
     */
    UnbindAutoSnapshotPolicy(req, cb) {
        let resp = new UnbindAutoSnapshotPolicyResponse();
        this.request("UnbindAutoSnapshotPolicy", req, resp, cb);
    }

    /**
     * This API is used to create a backup point for a cloud disk.
     * @param {CreateDiskBackupRequest} req
     * @param {function(string, CreateDiskBackupResponse):void} cb
     * @public
     */
    CreateDiskBackup(req, cb) {
        let resp = new CreateDiskBackupResponse();
        this.request("CreateDiskBackup", req, resp, cb);
    }

    /**
     * This API (ApplySnapshot) is used to roll back a snapshot to the original cloud disk.

* The snapshot can only be rolled back to the original cloud disk. For data disk snapshots, if you need to copy the snapshot data to other cloud disks, use the API [CreateDisks](https://intl.cloud.tencent.com/document/product/362/16312?from_cn_redirect=1) to create an elastic cloud disk and then copy the snapshot data to the created cloud disk. 
* The snapshot for rollback must be in NORMAL status. The snapshot status can be queried in the SnapshotState field in the output parameters through the API [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1).
* For elastic cloud disks, the cloud disk must be in UNMOUNTED status. The cloud disk status can be queried in the Attached field returned by the API [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1). For non-elastic cloud disks purchased together with instances, the instance must be in SHUTDOWN status. The instance status can be queried through the API [DescribeInstancesStatus](https://intl.cloud.tencent.com/document/product/213/15738?from_cn_redirect=1).
     * @param {ApplySnapshotRequest} req
     * @param {function(string, ApplySnapshotResponse):void} cb
     * @public
     */
    ApplySnapshot(req, cb) {
        let resp = new ApplySnapshotResponse();
        this.request("ApplySnapshot", req, resp, cb);
    }

    /**
     * 接口已废弃，切换至云审计接口。见https://tapd.woa.com/pro/prong/stories/view/1010114221880719007

This API has been disused. Use the CloudAudit API instead, For more information, visit https://tapd.woa.com/pro/prong/stories/view/1010114221880719007.

This API is used to query the operation logs of a snapshot. It will be disused soon. Use [LookUpEvents](https://intl.cloud.tencent.com/document/product/629/12359?from_cn_redirect=1) instead.

     * @param {DescribeSnapshotOperationLogsRequest} req
     * @param {function(string, DescribeSnapshotOperationLogsResponse):void} cb
     * @public
     */
    DescribeSnapshotOperationLogs(req, cb) {
        let resp = new DescribeSnapshotOperationLogsResponse();
        this.request("DescribeSnapshotOperationLogs", req, resp, cb);
    }

    /**
     * This API is used to modify snapshot sharing information.

After snapshots are shared, the accounts they are shared to can use the snapshot to create cloud disks.
* Each snapshot can be shared to at most 50 accounts.
* You can use a shared snapshot to create cloud disks, but you cannot change its name or description.
* Snapshots can only be shared with accounts in the same region.
* Only data disk snapshots can be shared.
     * @param {ModifySnapshotsSharePermissionRequest} req
     * @param {function(string, ModifySnapshotsSharePermissionResponse):void} cb
     * @public
     */
    ModifySnapshotsSharePermission(req, cb) {
        let resp = new ModifySnapshotsSharePermissionResponse();
        this.request("ModifySnapshotsSharePermission", req, resp, cb);
    }

    /**
     * This API is used to unmount one or more cloud disks.

* Batch operation is supported. You can unmount multiple cloud disks from the same CVM in a single request. If any of these cloud disks cannot be unmounted, the operation fails and a specific error code returns.
* This is an async API. A successful request does not mean that the cloud disks have been unmounted successfully. You can call the [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) API to query the status of cloud disks. When the status changes from `ATTACHED` to `UNATTACHED`, the unmounting is successful.
     * @param {DetachDisksRequest} req
     * @param {function(string, DetachDisksResponse):void} cb
     * @public
     */
    DetachDisks(req, cb) {
        let resp = new DetachDisksResponse();
        this.request("DetachDisks", req, resp, cb);
    }

    /**
     * This API is used to get snapshot overview information.
     * @param {GetSnapOverviewRequest} req
     * @param {function(string, GetSnapOverviewResponse):void} cb
     * @public
     */
    GetSnapOverview(req, cb) {
        let resp = new GetSnapOverviewResponse();
        this.request("GetSnapOverview", req, resp, cb);
    }

    /**
     * This API is used to expand cloud disks. 

*This API supports only the expansion of elastic cloud disks. To query the type of a cloud disk, you can call the [DescribeDisks](https://intl.cloud.tencent.comhttps://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1?from_cn_redirect=1) API and check the `Portable` field in the response. To expand non-elastic cloud disks, you can call the [ResizeInstanceDisks](https://intl.cloud.tencent.com/document/product/213/15731?from_cn_redirect=1) API. *This is an async API. A successful return of this API does not mean that the cloud disk has been expanded successfully. You can call the [DescribeDisks](https://intl.cloud.tencent.comhttps://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1?from_cn_redirect=1) API to query the status of a cloud disk. `EXPANDING` indicates that the expansion is in process.
     * @param {ResizeDiskRequest} req
     * @param {function(string, ResizeDiskResponse):void} cb
     * @public
     */
    ResizeDisk(req, cb) {
        let resp = new ResizeDiskResponse();
        this.request("ResizeDisk", req, resp, cb);
    }

    /**
     * This API is used to create a snapshot for the specified cloud disk.

* You can only create snapshots for cloud disks with the snapshot capability. To check whether a cloud disk is snapshot-enabled, call the [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) API and see the `SnapshotAbility` field in the response.
* For the maximum number of snapshots that can be created, see [Use Limits](https://intl.cloud.tencent.com/doc/product/362/5145?from_cn_redirect=1).
* Currently, you can convert backup points into general snapshots. After the conversion, snapshot usage fees may be charged, backup points will not be retained, and the occupied backup point quota will be released.
     * @param {CreateSnapshotRequest} req
     * @param {function(string, CreateSnapshotResponse):void} cb
     * @public
     */
    CreateSnapshot(req, cb) {
        let resp = new CreateSnapshotResponse();
        this.request("CreateSnapshot", req, resp, cb);
    }


}
module.exports = CbsClient;
