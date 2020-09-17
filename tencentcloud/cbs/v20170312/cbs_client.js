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
const DetachDisksRequest = models.DetachDisksRequest;
const DescribeDiskOperationLogsResponse = models.DescribeDiskOperationLogsResponse;
const ResizeDiskRequest = models.ResizeDiskRequest;
const TerminateDisksResponse = models.TerminateDisksResponse;
const DescribeSnapshotSharePermissionResponse = models.DescribeSnapshotSharePermissionResponse;
const SharePermission = models.SharePermission;
const ModifyDiskAttributesResponse = models.ModifyDiskAttributesResponse;
const TerminateDisksRequest = models.TerminateDisksRequest;
const DescribeDisksRequest = models.DescribeDisksRequest;
const DescribeInstancesDiskNumRequest = models.DescribeInstancesDiskNumRequest;
const AutoSnapshotPolicy = models.AutoSnapshotPolicy;
const Policy = models.Policy;
const ModifySnapshotsSharePermissionResponse = models.ModifySnapshotsSharePermissionResponse;
const GetSnapOverviewRequest = models.GetSnapOverviewRequest;
const DescribeSnapshotOperationLogsRequest = models.DescribeSnapshotOperationLogsRequest;
const ModifySnapshotAttributeRequest = models.ModifySnapshotAttributeRequest;
const DescribeSnapshotSharePermissionRequest = models.DescribeSnapshotSharePermissionRequest;
const ModifyAutoSnapshotPolicyAttributeResponse = models.ModifyAutoSnapshotPolicyAttributeResponse;
const Price = models.Price;
const UnbindAutoSnapshotPolicyResponse = models.UnbindAutoSnapshotPolicyResponse;
const InquiryPriceCreateDisksResponse = models.InquiryPriceCreateDisksResponse;
const DiskConfig = models.DiskConfig;
const BindAutoSnapshotPolicyRequest = models.BindAutoSnapshotPolicyRequest;
const CreateSnapshotResponse = models.CreateSnapshotResponse;
const DeleteSnapshotsRequest = models.DeleteSnapshotsRequest;
const DescribeDiskConfigQuotaRequest = models.DescribeDiskConfigQuotaRequest;
const DeleteAutoSnapshotPoliciesRequest = models.DeleteAutoSnapshotPoliciesRequest;
const DiskChargePrepaid = models.DiskChargePrepaid;
const DescribeSnapshotOperationLogsResponse = models.DescribeSnapshotOperationLogsResponse;
const DescribeDiskAssociatedAutoSnapshotPolicyResponse = models.DescribeDiskAssociatedAutoSnapshotPolicyResponse;
const GetSnapOverviewResponse = models.GetSnapOverviewResponse;
const ApplySnapshotResponse = models.ApplySnapshotResponse;
const DeleteAutoSnapshotPoliciesResponse = models.DeleteAutoSnapshotPoliciesResponse;
const DescribeDisksResponse = models.DescribeDisksResponse;
const ModifySnapshotAttributeResponse = models.ModifySnapshotAttributeResponse;
const PrepayPrice = models.PrepayPrice;
const DeleteSnapshotsResponse = models.DeleteSnapshotsResponse;
const DetachDisksResponse = models.DetachDisksResponse;
const Filter = models.Filter;
const InquiryPriceCreateDisksRequest = models.InquiryPriceCreateDisksRequest;
const DescribeSnapshotsResponse = models.DescribeSnapshotsResponse;
const Snapshot = models.Snapshot;
const SnapshotOperationLog = models.SnapshotOperationLog;
const CreateDisksResponse = models.CreateDisksResponse;
const AttachDisksResponse = models.AttachDisksResponse;
const CreateAutoSnapshotPolicyResponse = models.CreateAutoSnapshotPolicyResponse;
const ModifySnapshotsSharePermissionRequest = models.ModifySnapshotsSharePermissionRequest;
const DiskOperationLog = models.DiskOperationLog;
const UnbindAutoSnapshotPolicyRequest = models.UnbindAutoSnapshotPolicyRequest;
const DescribeDiskOperationLogsRequest = models.DescribeDiskOperationLogsRequest;
const BindAutoSnapshotPolicyResponse = models.BindAutoSnapshotPolicyResponse;
const CreateDisksRequest = models.CreateDisksRequest;
const AttachDisksRequest = models.AttachDisksRequest;
const DescribeAutoSnapshotPoliciesResponse = models.DescribeAutoSnapshotPoliciesResponse;
const DescribeDiskAssociatedAutoSnapshotPolicyRequest = models.DescribeDiskAssociatedAutoSnapshotPolicyRequest;
const DescribeAutoSnapshotPoliciesRequest = models.DescribeAutoSnapshotPoliciesRequest;
const Image = models.Image;
const DescribeDiskConfigQuotaResponse = models.DescribeDiskConfigQuotaResponse;
const ModifyDiskAttributesRequest = models.ModifyDiskAttributesRequest;
const CreateSnapshotRequest = models.CreateSnapshotRequest;
const AttachDetail = models.AttachDetail;
const InquiryPriceResizeDiskResponse = models.InquiryPriceResizeDiskResponse;
const DescribeInstancesDiskNumResponse = models.DescribeInstancesDiskNumResponse;
const ResizeDiskResponse = models.ResizeDiskResponse;
const DescribeSnapshotsRequest = models.DescribeSnapshotsRequest;
const Placement = models.Placement;
const CreateAutoSnapshotPolicyRequest = models.CreateAutoSnapshotPolicyRequest;
const InquiryPriceResizeDiskRequest = models.InquiryPriceResizeDiskRequest;
const Disk = models.Disk;
const ModifyAutoSnapshotPolicyAttributeRequest = models.ModifyAutoSnapshotPolicyAttributeRequest;
const Tag = models.Tag;
const ApplySnapshotRequest = models.ApplySnapshotRequest;


/**
 * cbs client
 * @class
 */
class CbsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cbs.tencentcloudapi.com", "2017-03-12", credential, region, profile);
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
     * This API (DescribeAutoSnapshotPolicies) is used to query scheduled snapshot policies.

* You can query the detailed information of scheduled snapshot policies by ID, name, or status. Insert `AND` between different values. For details on filtering information, see `Filter`.
* If the parameter is empty, a certain number (specified by `Limit`; the default is 20) of the scheduled snapshot policy lists are returned to the current user.

     * @param {DescribeAutoSnapshotPoliciesRequest} req
     * @param {function(string, DescribeAutoSnapshotPoliciesResponse):void} cb
     * @public
     */
    DescribeAutoSnapshotPolicies(req, cb) {
        let resp = new DescribeAutoSnapshotPoliciesResponse();
        this.request("DescribeAutoSnapshotPolicies", req, resp, cb);
    }

    /**
     * This API (AttachDisks) is used to mount cloud disks.
 
* Batch operations are supported. Multiple cloud disks can be mounted to a CVM. If there is a cloud disk that does not allow this operation, the operation is not performed and a specific error code is returned.
* This API is an asynchronous API. If the request for mounting the cloud disk successfully returns results, the operation of mounting cloud disk has been initiated at the background. You can use the API [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) to query the cloud disk status. If the status changes from "ATTACHING" to "ATTACHED", the cloud disk is mounted.
     * @param {AttachDisksRequest} req
     * @param {function(string, AttachDisksResponse):void} cb
     * @public
     */
    AttachDisks(req, cb) {
        let resp = new AttachDisksResponse();
        this.request("AttachDisks", req, resp, cb);
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
     * This API (InquiryPriceCreateDisks) is used to inquire the price for cloud disk creation.

* It supports inquiring the price for the creation of multiple cloud disks. The total price for the creation is returned.
     * @param {InquiryPriceCreateDisksRequest} req
     * @param {function(string, InquiryPriceCreateDisksResponse):void} cb
     * @public
     */
    InquiryPriceCreateDisks(req, cb) {
        let resp = new InquiryPriceCreateDisksResponse();
        this.request("InquiryPriceCreateDisks", req, resp, cb);
    }

    /**
     * This API (DescribeDiskOperationLogs) is used to query a list of cloud disk operation logs.

This can be filtered according to the cloud disk ID. The format of cloud disk IDs is as follows: disk-a1kmcp13.

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
     * This API is used to create one or more cloud disks.

* This API supports creating a cloud disk with a data disk snapshot so that the snapshot data can be copied to the purchased cloud disk.
* This API is an async API. A cloud disk ID list will be returned when a request is made successfully, but it does not mean that the creation has been completed. You can call the [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) API to query cloud disks by `DiskId`. If a new cloud disk can be found and its state is 'UNATTACHED' or 'ATTACHED', it means that the cloud disk has been created successfully.
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
     * This API (DeleteSnapshots) is used to delete snapshots.

* The snapshot must be in NORMAL status. The snapshot status can be queried in the SnapshotState field in the output parameters through the API [DescribeSnapshots](https://intl.cloud.tencent.com/document/product/362/15647?from_cn_redirect=1).
* Batch operations are supported. If one of the snapshots in a batch cannot be deleted, the operation is not performed and a specific error code is returned.
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
     * This API (DescribeSnapshotOperationLogs) is used to query a list of snapshot operation logs.

You can filter according to the snapshot ID. The snapshot ID format is as follows: snap-a1kmcp13.

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
     * This API (CreateSnapshot) is used to create a snapshot of a specified cloud disk.

* Snapshots can only be created for cloud disks with the snapshot capability. To check whether a cloud disk has the snapshot capability, see the SnapshotAbility field returned by the API [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1).
* For the number of snapshots that can be created, please see [Product Usage Restriction](https://intl.cloud.tencent.com/doc/product/362/5145?from_cn_redirect=1).
     * @param {CreateSnapshotRequest} req
     * @param {function(string, CreateSnapshotResponse):void} cb
     * @public
     */
    CreateSnapshot(req, cb) {
        let resp = new CreateSnapshotResponse();
        this.request("CreateSnapshot", req, resp, cb);
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
     * This API (ResizeDisk) is used to expand the capacity of the cloud disk.

* Only elastic cloud disks can be expanded. The cloud disk type can be queried in the Portable field in the output parameters through the API [DescribeDisks](https://intl.cloud.tencent.comhttps://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1?from_cn_redirect=1). For the cloud disk created along with the CVM, the capacity can only be expanded via the API [ResizeInstanceDisks](https://intl.cloud.tencent.com/document/product/213/15731?from_cn_redirect=1).
* This API is an asynchronous API. The cloud disk is not immediately expanded to the specified size as the API successfully returns results. You can use the API [DescribeDisks](https://intl.cloud.tencent.comhttps://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1?from_cn_redirect=1) to query the cloud disk status. The cloud disk in the status of "EXPANDING" is in the process of capacity expansion. When the status changes to "UNATTACHED", the capacity expansion is completed. 
     * @param {ResizeDiskRequest} req
     * @param {function(string, ResizeDiskResponse):void} cb
     * @public
     */
    ResizeDisk(req, cb) {
        let resp = new ResizeDiskResponse();
        this.request("ResizeDisk", req, resp, cb);
    }

    /**
     * This API (DetachDisks) is used to unmount cloud disks.

* Batch operations are supported. Multiple cloud disks mounted to the same CVM can be unmounted in batch. If there is a cloud disk that does not allow this operation, the operation is not performed and a specific error code is returned.
* This API is an asynchronous API. When the request successfully returns results, the cloud disk is not unmounted from the CVM immediately. You can use the API [DescribeDisks](https://intl.cloud.tencent.com/document/product/362/16315?from_cn_redirect=1) to query the cloud disk status. If the status changes from "ATTACHED" to "UNATTACHED", the cloud disk is unmounted.
     * @param {DetachDisksRequest} req
     * @param {function(string, DetachDisksResponse):void} cb
     * @public
     */
    DetachDisks(req, cb) {
        let resp = new DetachDisksResponse();
        this.request("DetachDisks", req, resp, cb);
    }


}
module.exports = CbsClient;
