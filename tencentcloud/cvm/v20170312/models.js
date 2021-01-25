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
const AbstractModel = require("../../common/abstract_model");

/**
 * Parameters related to the prepaid billing method, including the subscription period, the auto renewal logic, etc.
 * @class
 */
class ChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchased usage period, in month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Auto renewal flag. Valid values: <br><li>NOTIFY_AND_AUTO_RENEW: notify upon expiration and renew automatically <br><li>NOTIFY_AND_MANUAL_RENEW: notify upon expiration but do not renew automatically <br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: neither notify upon expiration nor renew automatically <br><br>Default value: NOTIFY_AND_AUTO_RENEW. If this parameter is specified as NOTIFY_AND_AUTO_RENEW, the instance will be automatically renewed on a monthly basis if the account balance is sufficient.
         * @type {string || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * Describes local disk specifications.
 * @class
 */
class LocalDiskType extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of a local disk.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Attributes of a local disk.
         * @type {string || null}
         */
        this.PartitionType = null;

        /**
         * Minimum size of a local disk.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Maximum size of a local disk.
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * Whether a local disk is required during purchase. Valid values:<br><li>REQUIRED: required<br><li>OPTIONAL: optional
         * @type {string || null}
         */
        this.Required = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PartitionType = 'PartitionType' in params ? params.PartitionType : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Required = 'Required' in params ? params.Required : null;

    }
}

/**
 * AssociateInstancesKeyPairs response structure.
 * @class
 */
class AssociateInstancesKeyPairsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageQuota response structure.
 * @class
 */
class DescribeImageQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The image quota of an account
         * @type {number || null}
         */
        this.ImageNumQuota = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageNumQuota = 'ImageNumQuota' in params ? params.ImageNumQuota : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesProject request structure.
 * @class
 */
class ModifyInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance IDs. To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response. You can operate up to 100 instances in each request.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Project ID. You can create a project by using the [AddProject](https://intl.cloud.tencent.com/doc/api/403/4398?from_cn_redirect=1) API and obtain its ID from the response parameter `projectId` of the [`DescribeProject`](https://intl.cloud.tencent.com/document/product/378/4400?from_cn_redirect=1) API. Subsequently, the project ID can be used to filter results when you query instances by calling the [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ResetInstancesType response structure.
 * @class
 */
class ResetInstancesTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Resource information of a CDH instance
 * @class
 */
class HostResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of CPU cores in the CDH instance
         * @type {number || null}
         */
        this.CpuTotal = null;

        /**
         * Number of available CPU cores in the CDH instance
         * @type {number || null}
         */
        this.CpuAvailable = null;

        /**
         * Total memory of the CDH instance; unit: GiB
         * @type {number || null}
         */
        this.MemTotal = null;

        /**
         * Available memory of the CDH instance; unit: GiB
         * @type {number || null}
         */
        this.MemAvailable = null;

        /**
         * Total disk size of the CDH instance; unit: GiB
         * @type {number || null}
         */
        this.DiskTotal = null;

        /**
         * Avilable disk size of the CDH instance; unit: GiB
         * @type {number || null}
         */
        this.DiskAvailable = null;

        /**
         * CDH instance disk type.
         * @type {string || null}
         */
        this.DiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CpuTotal = 'CpuTotal' in params ? params.CpuTotal : null;
        this.CpuAvailable = 'CpuAvailable' in params ? params.CpuAvailable : null;
        this.MemTotal = 'MemTotal' in params ? params.MemTotal : null;
        this.MemAvailable = 'MemAvailable' in params ? params.MemAvailable : null;
        this.DiskTotal = 'DiskTotal' in params ? params.DiskTotal : null;
        this.DiskAvailable = 'DiskAvailable' in params ? params.DiskAvailable : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;

    }
}

/**
 * DeleteDisasterRecoverGroups request structure.
 * @class
 */
class DeleteDisasterRecoverGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of spread placement groups, obtainable via the [DescribeDisasterRecoverGroups](https://intl.cloud.tencent.com/document/api/213/17810?from_cn_redirect=1) API. You can operate up to 100 spread placement groups in each request.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

    }
}

/**
 * DescribeInstancesOperationLimit request structure.
 * @class
 */
class DescribeInstancesOperationLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query by instance ID(s). You can obtain the instance IDs from the value of `InstanceId` returned by the [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) API. For example, instance ID: ins-xxxxxxxx. (For the specific format, refer to section `ids.N` of the API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).) You can query up to 100 instances in each request.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Operation on the instance(s).
<li> INSTANCE_DEGRADE: downgrade the instance configurations</li>
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * TerminateInstances response structure.
 * @class
 */
class TerminateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetInstancesInternetMaxBandwidth response structure.
 * @class
 */
class ResetInstancesInternetMaxBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDisasterRecoverGroup response structure.
 * @class
 */
class CreateDisasterRecoverGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of spread placement group IDs.
         * @type {string || null}
         */
        this.DisasterRecoverGroupId = null;

        /**
         * Type of the spread placement group. Valid values: <br><li>HOST: physical machine <br><li>SW: switch <br><li>RACK: rack.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of the spread placement group. The name must be 1-60 characters long and can contain both Chinese characters and English letters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The maximum number of CVMs in a placement group.
         * @type {number || null}
         */
        this.CvmQuotaTotal = null;

        /**
         * The current number of CVMs in a placement group.
         * @type {number || null}
         */
        this.CurrentNum = null;

        /**
         * Creation time of the placement group.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisasterRecoverGroupId = 'DisasterRecoverGroupId' in params ? params.DisasterRecoverGroupId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CvmQuotaTotal = 'CvmQuotaTotal' in params ? params.CvmQuotaTotal : null;
        this.CurrentNum = 'CurrentNum' in params ? params.CurrentNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceResetInstancesInternetMaxBandwidth response structure.
 * @class
 */
class InquiryPriceResetInstancesInternetMaxBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price of the new bandwidth
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyKeyPairAttribute request structure.
 * @class
 */
class ModifyKeyPairAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID in the format of `skey-xxxxxxxx`. <br><br>You can obtain the available key pair IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/sshkey) to query the key pair IDs. <br><li>Call [DescribeKeyPairs](https://intl.cloud.tencent.com/document/api/213/15699?from_cn_redirect=1) and look for `KeyId` in the response.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * New key pair name, which can contain numbers, letters, and underscores, with a maximum length of 25 characters.
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * New key pair description. You can specify any name you like, but its length cannot exceed 60 characters.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * AssociateSecurityGroups request structure.
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the security group to be associated, such as `sg-efil73jd`. Only one security group can be associated.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * ID of the instance bound in the format of ins-lesecurk. You can specify up to 100 instances in each request.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ResetInstancesType request structure.
 * @class
 */
class ResetInstancesTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call the [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) API and find the value `InstanceId` in the response. The maximum number of instances in each request is 1.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Instance model. Different resource specifications are specified for different models. For specific values, call [DescribeInstanceTypeConfigs](https://intl.cloud.tencent.com/document/api/213/15749?from_cn_redirect=1) to get the latest specification list or refer to [Instance Types](https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1).
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Forced shutdown of a running instances. We recommend you firstly try to shut down a running instance manually. Valid values: <br><li>TRUE: forced shutdown of an instance after a normal shutdown fails.<br><li>FALSE: no forced shutdown of an instance after a normal shutdown fails.<br><br>Default value: FALSE.<br><br>A forced shutdown is similar to switching off the power of a physical computer. It may cause data loss or file system corruption. Be sure to only force a CVM to shut off if the normal shutdown fails.
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * InquiryPriceResetInstance request structure.
 * @class
 */
class InquiryPriceResetInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * [Image](https://intl.cloud.tencent.com/document/product/213/4940?from_cn_redirect=1) ID in the format of `img-xxx`. There are four types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><li>Marketplace images </li><br/>You can obtain the available image IDs in the following ways: <br/><li>For IDs of `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the information; for IDs of `marketplace images`, go to [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>Call [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response.</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Configuration of the system disk of the instance. For instances with a cloud disk as the system disk, you can expand the system disk by using this parameter to specify the new capacity after reinstallation. If the parameter is not specified, the system disk capacity remains unchanged by default. You can only expand the capacity of the system disk; reducing its capacity is not supported. When reinstalling the system, you can only modify the capacity of the system disk, not the type.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Login settings of the instance. You can use this parameter to set the login method, password, and key of the instance or keep the login settings of the original image. By default, a random password will be generated and sent to you via the Message Center.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Enhanced services. You can use this parameter to specify whether to enable services such as Cloud Monitor and Cloud Security. If this parameter is not specified, Cloud Monitor and Cloud Security will be enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

    }
}

/**
 * RunInstances request structure.
 * @class
 */
class RunInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The instance [billing method](https://intl.cloud.tencent.com/document/product/213/2180?from_cn_redirect=1). Valid values: <br><li>`POSTPAID_BY_HOUR`: hourly, pay-as-you-go<br><li>`CDHPAID`: you are only billed for CDH instances, not the CVMs running on the CDH instances.<br>Default value: POSTPAID_BY_HOUR.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Configuration of prepaid instances. You can use the parameter to specify the attributes of prepaid instances, such as the subscription period and the auto-renewal plan. This parameter is required for prepaid instances.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * Location of the instance. You can use this parameter to specify the attributes of the instance, such as its availability zone, project, and CDH. You can specify a CDH for a CVM by creating the CVM on the CDH.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * The instance model. Different resource specifications are specified for different instance models.
<br><li>To view specific values for `POSTPAID_BY_HOUR` instances, you can call [DescribeInstanceTypeConfigs](https://intl.cloud.tencent.com/document/api/213/15749?from_cn_redirect=1) or refer to [Instance Types](https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1). If this parameter is not specified, `S1.SMALL1` will be used by default.<br><li>For `CDHPAID` instances, the value of this parameter is in the format of `CDH_XCXG` based on the number of CPU cores and memory capacity. For example, if you want to create a CDH instance with a single-core CPU and 1 GB memory, specify this parameter as `CDH_1C1G`.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * The [image](https://intl.cloud.tencent.com/document/product/213/4940?from_cn_redirect=1) ID in the format of `img-xxx`. There are four types of images:<br/><li>Public images</li><li>Custom images</li><li>Shared images</li><li>Marketplace images</li><br/>You can retrieve available image IDs in the following ways:<br/><li>For the IDs of `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the information. For the IDs of `marketplace images`, go to [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>Call [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1), pass in `InstanceType` to retrieve the list of images supported by the current model, and then find the `ImageId` in the response.</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * System disk configuration of the instance. If this parameter is not specified, the default value will be used.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * The configuration information of instance data disks. If this parameter is not specified, no data disk will be purchased by default. When purchasing, you can specify 21 data disks, which can contain at most 1 LOCAL_BASIC data disk or LOCAL_SSD data disk, and at most 20 CLOUD_BASIC data disks, CLOUD_PREMIUM data disks, or CLOUD_SSD data disks.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Configuration information of VPC. This parameter is used to specify VPC ID and subnet ID, etc. If this parameter is not specified, the classic network is used by default. If a VPC IP is specified in this parameter, it indicates the primary ENI IP of each instance. The value of parameter InstanceCount must be same as the number of VPC IPs, which cannot be greater than 20.
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * Configuration of public network bandwidth. If this parameter is not specified, 0 Mbps will be used by default.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * The number of instances to be purchased. Value range: [1, 100]; default value: 1. The specified number of instances to be purchased cannot exceed the remaining quota allowed for the user. For more information on the quota, see [CVM instance purchase limit](https://intl.cloud.tencent.com/document/product/213/2664).
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Instance name to be displayed.<br><li>If this parameter is not specified, "Unnamed" will be displayed by default.</li><li>If you purchase multiple instances at the same time and specify a pattern string `{R:x}`, numbers `[x, x+n-1]` will be generated, where `n` represents the number of instances purchased. For example, you specify a pattern string, `server_{R:3}`. If you only purchase 1 instance, the instance will be named `server_3`; if you purchase 2, they will be named `server_3` and `server_4`. You can specify multiple pattern strings in the format of `{R:x}`.</li><li>If you purchase multiple instances at the same time and do not specify a pattern string, the instance names will be suffixed by `1, 2...n`, where `n` represents the number of instances purchased. For example, if you purchase 2 instances and name them as `server_`, the instance names will be displayed as `server_1` and `server_2`.</li><li>The instance name contains up to 60 characters (including pattern strings).
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Login settings of the instance. You can use this parameter to set the login method, password, and key of the instance or keep the login settings of the original image. By default, a random password will be generated and sent to you via the Message Center.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Security groups to which the instance belongs. To obtain the security group IDs, you can call [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808) and look for the `sgld` fields in the response. If this parameter is not specified, the instance will be associated with default security groups.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Specifies whether to enable services such as Anti-DDoS and Cloud Monitor. If this parameter is not specified, Cloud Monitor and Anti-DDoS are enabled for public images by default. However, for custom images and images from the marketplace, Anti-DDoS and Cloud Monitor are not enabled by default. The original services in the image will be retained.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed. <br>For more information, see 'How to ensure idempotency'.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Host name of the CVM. <br><li>Periods (.) or hyphens (-) cannot be the start or end of a host name or appear consecutively in a host name.<br><li>For Windows instances, the host name must be 2-15 characters long and can contain uppercase and lowercase letters, numbers, and hyphens (-). It cannot contain periods (.) or contain only numbers. <br><li>For other instances, such as Linux instances, the host name must be 2-60 characters long. It supports multiple periods (.) and allows uppercase and lowercase letters, numbers, and hyphens (-) between any two periods (.).
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * Scheduled tasks. You can use this parameter to specify scheduled tasks for the instance. Only scheduled termination is supported.
         * @type {ActionTimer || null}
         */
        this.ActionTimer = null;

        /**
         * Placement group ID. You can only specify one.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * The tag description list. This parameter is used to bind a tag to a resource instance. A tag can only be bound to CVM instances.
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * The market options of the instance.
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * User data provided to the instance, which needs to be encoded in base64 format with the maximum size of 16KB. For more information on how to get the value of this parameter, see the commands you need to execute on startup for [Windows](https://intl.cloud.tencent.com/document/product/213/17526) or [Linux](https://intl.cloud.tencent.com/document/product/213/17525).
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * Whether the request is a dry run only.
true: dry run only. The request will not create instance(s). A dry run can check whether all the required parameters are specified, whether the request format is right, whether the request exceeds service limits, and whether the specified CVMs are available.
If the dry run fails, the corresponding error code will be returned.
If the dry run succeeds, the RequestId will be returned.
false (default value): send a normal request and create instance(s) if all the requirements are met.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * CAM role name, which can be obtained from the `roleName` field in the response of the [`DescribeRoleList`](https://intl.cloud.tencent.com/document/product/598/13887?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.CamRoleName = null;

        /**
         * HPC cluster ID. The HPC cluster must and can only be specified for a high-performance computing instance.
         * @type {string || null}
         */
        this.HpcClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

        if (params.ActionTimer) {
            let obj = new ActionTimer();
            obj.deserialize(params.ActionTimer)
            this.ActionTimer = obj;
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.CamRoleName = 'CamRoleName' in params ? params.CamRoleName : null;
        this.HpcClusterId = 'HpcClusterId' in params ? params.HpcClusterId : null;

    }
}

/**
 * DeleteImages request structure.
 * @class
 */
class DeleteImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the IDs of the instances to be deleted.
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;

    }
}

/**
 * DescribeInstances response structure.
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances meeting the filtering conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Detailed instance information.
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHosts response structure.
 * @class
 */
class DescribeHostsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of CDH instances meeting the query conditions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information on CDH instances
         * @type {Array.<HostItem> || null}
         */
        this.HostSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.HostSet) {
            this.HostSet = new Array();
            for (let z in params.HostSet) {
                let obj = new HostItem();
                obj.deserialize(params.HostSet[z]);
                this.HostSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteKeyPairs request structure.
 * @class
 */
class DeleteKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key ID(s). The maximum number of key pairs in each request is 100. <br>You can obtain the available key pair IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/sshkey) to query the key pair IDs. <br><li>Call [DescribeKeyPairs](https://intl.cloud.tencent.com/document/api/213/15699?from_cn_redirect=1) and look for `KeyId` in the response.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * Describes information on the block device where the operating system is stored, i.e., the system disk.
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * System disk type. For more information on limits of system disk types, see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952?from_cn_redirect=1). Valid values:<br><li>LOCAL_BASIC: local disk<br><li>LOCAL_SSD: local SSD disk<br><li>CLOUD_BASIC: HDD cloud disk<br><li>CLOUD_SSD: SSD<br><li>CLOUD_PREMIUM: Premium Cloud Storage<br><br>The disk type currently in stock will be used by default. 
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * System disk ID. System disks whose type is `LOCAL_BASIC` or `LOCAL_SSD` do not have an ID and do not support this parameter currently.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * System disk size; unit: GB; default value: 50 GB.
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * ResetInstance request structure.
 * @class
 */
class ResetInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Specified effective [image](https://intl.cloud.tencent.com/document/product/213/4940?from_cn_redirect=1) ID in the format of `img-xxx`. There are four types of images:<br/><li>Public images</li><li>Custom images</li><li>Shared images</li><li>Marketplace images </li><br/>You can obtain the available image IDs in the following ways:<br/><li>for IDs of `public images`, `custom images`, and `shared images`, log in to the [CVM console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE); for IDs of `marketplace images`, go to [Cloud Marketplace](https://market.cloud.tencent.com/list).</li><li>Call the API [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response.</li>
<br>Default value: current image.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * System disk configurations in the instance. For instances with a cloud disk as the system disk, you can expand the capacity of the system disk to the specified value after re-installation by using this parameter. If the parameter is not specified, lower system disk capacity will be automatically expanded to the image size, and extra disk costs are generated. You can only expand but cannot reduce the system disk capacity. By re-installing the system, you only modify the system disk capacity, but not the type.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Login settings of the instance. You can use this parameter to set the login method, password, and key of the instance or keep the login settings of the original image. By default, a random password will be generated and sent to you via the Message Center.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Enhanced services. You can use this parameter to specify whether to enable services such as Cloud Monitor and Cloud Security. If this parameter is not specified, Cloud Monitor and Cloud Security will be enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * Host name of the CVM, editable during the system reinstallation. <br><li>Periods (.) or hyphens (-) cannot be the start or end of a host name or appear consecutively in a host name.<br><li>For Windows instances, the host name must consist of 2-15 characters , including uppercase and lowercase letters, numbers, or hyphens (-). It cannot contain periods (.) or contain only numbers.<br><li>For other instances, such as Linux instances, the host name must consist of 2-60 characters, including multiple periods (.), and allows uppercase and lowercase letters, numbers, or hyphens (-) between any two periods (.).
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * Describes the configurations of an instance model.
 * @class
 */
class InstanceTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance model.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Instance model family.
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * Number of GPU cores.
         * @type {number || null}
         */
        this.GPU = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Memory capacity; unit: `GB`.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Number of FPGA cores; unit: core.
         * @type {number || null}
         */
        this.FPGA = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.GPU = 'GPU' in params ? params.GPU : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.FPGA = 'FPGA' in params ? params.FPGA : null;

    }
}

/**
 * AllocateHosts request structure.
 * @class
 */
class AllocateHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance location. This parameter is used to specify the attributes of an instance, such as its availability zone and project.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * A string used to ensure the idempotency of the request.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Configuration of prepaid instances. You can use the parameter to specify the attributes of prepaid instances, such as the subscription period and the auto-renewal plan. This parameter is required for prepaid instances.
         * @type {ChargePrepaid || null}
         */
        this.HostChargePrepaid = null;

        /**
         * Instance billing model, only monthly or yearly subscription supported. Default value: `PREPAID'.
         * @type {string || null}
         */
        this.HostChargeType = null;

        /**
         * CDH instance model. Default value: `HS1`.
         * @type {string || null}
         */
        this.HostType = null;

        /**
         * Quantity of CDH instances purchased. Default value: 1.
         * @type {number || null}
         */
        this.HostCount = null;

        /**
         * Tag description. You can specify the parameter to associate a tag with an instance.
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.HostChargePrepaid) {
            let obj = new ChargePrepaid();
            obj.deserialize(params.HostChargePrepaid)
            this.HostChargePrepaid = obj;
        }
        this.HostChargeType = 'HostChargeType' in params ? params.HostChargeType : null;
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.HostCount = 'HostCount' in params ? params.HostCount : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

    }
}

/**
 * Describes login settings of an instance.
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Login password of the instance. The password requirements vary among different operating systems: <br><li>For Linux instances, the password must be 8-30 characters long and contain at least two of the following types: [a-z], [A-Z], [0-9] and [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]. <br><li>For Windows instances, the password must be 12-30 characters long and contain at least three of the following categories: [a-z], [A-Z], [0-9] and [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]. <br><br>If this parameter is not specified, a random password will be generated and sent to you via the Message Center.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * List of key IDs. After an instance is associated with a key, you can access the instance with the private key in the key pair. You can call [`DescribeKeyPairs`](https://intl.cloud.tencent.com/document/api/213/15699?from_cn_redirect=1) to obtain `KeyId`. A key and password cannot be specified at the same time. Windows instances do not support keys. Currently, you can only specify one key when purchasing an instance.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Whether to keep the original settings of an image. You cannot specify this parameter and `Password` or `KeyIds.N` at the same time. You can specify this parameter as `TRUE` only when you create an instance using a custom image, a shared image, or an imported image. Valid values: <br><li>TRUE: keep the login settings of the image <br><li>FALSE: do not keep the login settings of the image <br><br>Default value: FALSE.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.KeepImageLogin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null;

    }
}

/**
 * DescribeRegions response structure.
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of regions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of regions
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PurchaseReservedInstancesOffering request structure.
 * @class
 */
class PurchaseReservedInstancesOfferingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of the Reserved Instance you are purchasing.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * The ID of the Reserved Instance.
         * @type {string || null}
         */
        this.ReservedInstancesOfferingId = null;

        /**
         * Dry run
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.<br>For more information, see Ensuring Idempotency.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Reserved instance name.<br><li>The RI name defaults to “unnamed” if this parameter is left empty.</li><li>You can enter any name within 60 characters (including the pattern string).</li>
         * @type {string || null}
         */
        this.ReservedInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ReservedInstancesOfferingId = 'ReservedInstancesOfferingId' in params ? params.ReservedInstancesOfferingId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ReservedInstanceName = 'ReservedInstanceName' in params ? params.ReservedInstanceName : null;

    }
}

/**
 * RebootInstances request structure.
 * @class
 */
class RebootInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance IDs. To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response. You can operate up to 100 instances in each request.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Whether to force restart an instance after a normal restart fails. Valid values: <br><li>TRUE: force restart an instance after a normal restart fails <br><li>FALSE: do not force restart an instance after a normal restart fails <br><br>Default value: FALSE.
         * @type {boolean || null}
         */
        this.ForceReboot = null;

        /**
         * Shutdown type. Valid values: <br><li>SOFT: soft shutdown<br><li>HARD: hard shutdown<br><li>SOFT_FIRST: perform a soft shutdown first, and perform a hard shutdown if the soft shutdown fails<br><br>Default value: SOFT.
         * @type {string || null}
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ForceReboot = 'ForceReboot' in params ? params.ForceReboot : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * AssociateInstancesKeyPairs request structure.
 * @class
 */
class AssociateInstancesKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). The maximum number of instances in each request is 100. <br>You can obtain the available instance IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/index) to query the instance IDs. <br><li>Call [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Key ID(s). The maximum number of key pairs in each request is 100. The key pair ID is in the format of `skey-3glfot13`. <br>You can obtain the available key pair IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/sshkey) to query the key pair IDs. <br><li>Call [DescribeKeyPairs](https://intl.cloud.tencent.com/document/api/213/15699?from_cn_redirect=1) and look for `KeyId` in the response.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Whether to force shut down a running instances. It is recommended to manually shut down a running instance before associating a key pair with it. Valid values: <br><li>TRUE: force shut down an instance after a normal shutdown fails. <br><li>FALSE: do not force shut down an instance after a normal shutdown fails. <br><br>Default value: FALSE.
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * ImportKeyPair response structure.
 * @class
 */
class ImportKeyPairResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesStatus response structure.
 * @class
 */
class DescribeInstancesStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instance states meeting the filtering conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * [Instance status](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) list.
         * @type {Array.<InstanceStatus> || null}
         */
        this.InstanceStatusSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceStatusSet) {
            this.InstanceStatusSet = new Array();
            for (let z in params.InstanceStatusSet) {
                let obj = new InstanceStatus();
                obj.deserialize(params.InstanceStatusSet[z]);
                this.InstanceStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information on availability zones.
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability zone name, such as `ap-guangzhou-3`.
The following is a list of all availability zones:
<li> ap-chongqing-1 </li>
<li> ap-seoul-1 </li>
<li> ap-seoul-2 </li>
<li> ap-chengdu-1 </li>
<li> ap-chengdu-2 </li>
<li> ap-hongkong-1 </li>
<li> ap-hongkong-2 </li>
<li> ap-shenzhen-fsi-1 </li>
<li> ap-shenzhen-fsi-2 </li>
<li> ap-shenzhen-fsi-3 </li>
<li> ap-guangzhou-1 (sold out)</li>
<li> ap-guangzhou-2 (sold out)</li>
<li> ap-guangzhou-3 </li>
<li> ap-guangzhou-4 </li>
<li> ap-guangzhou-6 </li>
<li> ap-tokyo-1 </li>
<li> ap-singapore-1 </li>
<li> ap-singapore-2 </li>
<li> ap-shanghai-fsi-1 </li>
<li> ap-shanghai-fsi-2 </li>
<li> ap-shanghai-fsi-3 </li>
<li> ap-bangkok-1 </li>
<li> ap-shanghai-1 (sold out) </li>
<li> ap-shanghai-2 </li>
<li> ap-shanghai-3 </li>
<li> ap-shanghai-4 </li>
<li> ap-shanghai-5 </li>
<li> ap-mumbai-1 </li>
<li> ap-mumbai-2 </li>
<li> eu-moscow-1 </li>
<li> ap-beijing-1 </li>
<li> ap-beijing-2 </li>
<li> ap-beijing-3 </li>
<li> ap-beijing-4 </li>
<li> ap-beijing-5 </li>
<li> na-siliconvalley-1 </li>
<li> na-siliconvalley-2 </li>
<li> eu-frankfurt-1 </li>
<li> na-toronto-1 </li>
<li> na-ashburn-1 </li>
<li> na-ashburn-2 </li>
<li> ap-nanjing-1 </li>
<li> ap-nanjing-2 </li>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Availability zone description, such as Guangzhou Zone 3.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Availability zone ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Availability zone status. Valid values: `AVAILABLE`: available; `UNAVAILABLE`: unavailable.
         * @type {string || null}
         */
        this.ZoneState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;

    }
}

/**
 * DescribeInstanceTypeConfigs request structure.
 * @class
 */
class DescribeInstanceTypeConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">Filter results by **<strong>availability zones</strong>**. For example, availability zone: ap-guangzhou-1.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: <a href="https://intl.cloud.tencent.com/document/product/213/6091?from_cn_redirect=1">list of availability zones</a></p>
<li><strong>instance-family</strong></li>
<p style="padding-left: 30px;">Filter results by **<strong>instance models</strong>**. For example, instance models: S1, I1 and M1.</p><p style="padding-left: 30px;">Type: Integer</p><p style="padding-left: 30px;">Required: no</p>
Each request can have up to 10 `Filters` and 1 `Filters.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeKeyPairs response structure.
 * @class
 */
class DescribeKeyPairsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of key pairs meeting the filtering conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Detailed information on key pairs.
         * @type {Array.<KeyPair> || null}
         */
        this.KeyPairSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.KeyPairSet) {
            this.KeyPairSet = new Array();
            for (let z in params.KeyPairSet) {
                let obj = new KeyPair();
                obj.deserialize(params.KeyPairSet[z]);
                this.KeyPairSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetInstancesPassword request structure.
 * @class
 */
class ResetInstancesPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Login password of the instance. The rule of password complexity varies with operating systems:
For a Linux instance, the password must be 8 to 30 characters in length; password with more than 12 characters is recommended. It cannot begin with "/", and must contain at least three types of the following:<br><li>Lowercase letters: [a-z]<br><li>Uppercase letters: [A-Z]<br><li>Numbers: 0-9<br><li>Special characters: ()\`~!@#$%^&\*-+=\_|{}[]:;'<>,.?/
For a Windows CVM, the password must be 12 to 30 characters in length. It cannot begin with "/" or contain your username. It must contain at least three types of the following:<br><li>Lowercase letters: [a-z]<br><li>Uppercase letters: [A-Z]<br><li>Numbers: 0-9<br><li>Special characters: ()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/<li>If the specified instances include both `Linux` and `Windows` instances, you need to follow the password requirements for `Windows` instances.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Username of the instance operating system for which the password needs to be reset. This parameter is limited to 64 characters.
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Whether to force shut down a running instances. It is recommended to manually shut down a running instance before resetting the user password. Valid values: <br><li>TRUE: force shut down an instance after a normal shutdown fails. <br><li>FALSE: do not force shut down an instance after a normal shutdown fails. <br><br>Default value: FALSE. <br><br>A forced shutdown is similar to switching off the power of a physical computer. It may cause data loss or file system corruption. Be sure to only force shut down a CVM when it cannot be shut down normally.
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * Describes network billing.
 * @class
 */
class InternetChargeTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network billing method.
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * Description of the network billing method.
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeImages response structure.
 * @class
 */
class DescribeImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information on an image, including its state and attributes.
         * @type {Array.<Image> || null}
         */
        this.ImageSet = null;

        /**
         * Number of images meeting the filtering conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageSet) {
            this.ImageSet = new Array();
            for (let z in params.ImageSet) {
                let obj = new Image();
                obj.deserialize(params.ImageSet[z]);
                this.ImageSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesVpcAttribute response structure.
 * @class
 */
class ModifyInstancesVpcAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateKeyPair response structure.
 * @class
 */
class CreateKeyPairResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair information.
         * @type {KeyPair || null}
         */
        this.KeyPair = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyPair) {
            let obj = new KeyPair();
            obj.deserialize(params.KeyPair)
            this.KeyPair = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteKeyPairs response structure.
 * @class
 */
class DeleteKeyPairsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceVncUrl request structure.
 * @class
 */
class DescribeInstanceVncUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyImageSharePermission request structure.
 * @class
 */
class ModifyImageSharePermissionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID such as `img-gvbnzy6f`. You can obtain the image IDs in two ways: <br><li>Call [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response. <br><li>Look for the information in the [Image Console](https://console.cloud.tencent.com/cvm/image). <br>You can only specify an image in the `NORMAL` state. For more information on image states, see [here](https://intl.cloud.tencent.com/document/api/213/9452?from_cn_redirect=1#image_state).
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * List of account IDs with which an image is shared. For the format of array-type parameters, see [API Introduction](https://intl.cloud.tencent.com/document/api/213/568?from_cn_redirect=1). The account ID is different from the QQ number. You can find the account ID in [Account Information](https://console.cloud.tencent.com/developer). 
         * @type {Array.<string> || null}
         */
        this.AccountIds = null;

        /**
         * Operations. Valid values: `SHARE`, sharing an image; `CANCEL`, cancelling an image sharing. 
         * @type {string || null}
         */
        this.Permission = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.AccountIds = 'AccountIds' in params ? params.AccountIds : null;
        this.Permission = 'Permission' in params ? params.Permission : null;

    }
}

/**
 * DisassociateInstancesKeyPairs response structure.
 * @class
 */
class DisassociateInstancesKeyPairsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceResizeInstanceDisks request structure.
 * @class
 */
class InquiryPriceResizeInstanceDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The configuration of data disks to be expanded. Currently, you can only use the API to expand non-elastic data disks whose [disk type](https://intl.cloud.tencent.com/document/product/213/15753?from_cn_redirect=1#DataDisk) is `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`. You can use [`DescribeDisks`](https://intl.cloud.tencent.com/document/api/362/16315?from_cn_redirect=1) to check whether a disk is elastic. If the `Portable` field in the response is `false`, it means that the disk is non-elastic. Data disk capacity unit: GB; minimum increment: 10 GB. For more information about selecting a data disk type, see the product overview on cloud disks. Available data disk types are subject to the instance type (`InstanceType`). In addition, the maximum capacity allowed for expansion varies by data disk type.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Whether to force shut down a running instances. It is recommended to manually shut down a running instance before resetting the user password. Valid values: <br><li>TRUE: force shut down an instance after a normal shutdown fails. <br><li>FALSE: do not force shut down an instance after a normal shutdown fails. <br><br>Default value: FALSE. <br><br>A forced shutdown is similar to switching off the power of a physical computer. It may cause data loss or file system corruption. Be sure to only force shut down a CVM when it cannot be shut down normally.
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * RunInstances response structure.
 * @class
 */
class RunInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * If you use this API to create instance(s), this parameter will be returned, representing one or more instance `ID`s. Retuning the instance `ID` list does not necessarily mean that the instance(s) were created successfully. To check whether the instance(s) were created successfully, you can call [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and check the states of the instances in `InstancesSet` in the response. If the state of an instance changes from "pending" to "running", it means that the instance has been created successfully.
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Price of the reserved instance. Currently, RIs are only offered to beta users.
 * @class
 */
class ReservedInstancePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Original upfront payment, in USD.
         * @type {number || null}
         */
        this.OriginalFixedPrice = null;

        /**
         * Discounted upfront payment, in USD.
         * @type {number || null}
         */
        this.DiscountFixedPrice = null;

        /**
         * Original subsequent unit price, in USD/hr.
         * @type {number || null}
         */
        this.OriginalUsagePrice = null;

        /**
         * Discounted subsequent unit price, in USD/hr.
         * @type {number || null}
         */
        this.DiscountUsagePrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalFixedPrice = 'OriginalFixedPrice' in params ? params.OriginalFixedPrice : null;
        this.DiscountFixedPrice = 'DiscountFixedPrice' in params ? params.DiscountFixedPrice : null;
        this.OriginalUsagePrice = 'OriginalUsagePrice' in params ? params.OriginalUsagePrice : null;
        this.DiscountUsagePrice = 'DiscountUsagePrice' in params ? params.DiscountUsagePrice : null;

    }
}

/**
 * ModifyInstancesAttribute response structure.
 * @class
 */
class ModifyInstancesAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyImageSharePermission response structure.
 * @class
 */
class ModifyImageSharePermissionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesOperationLimit response structure.
 * @class
 */
class DescribeInstancesOperationLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The maximum number of times you can modify the instance configurations (degrading the configurations)
         * @type {Array.<OperationCountLimit> || null}
         */
        this.InstanceOperationLimitSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceOperationLimitSet) {
            this.InstanceOperationLimitSet = new Array();
            for (let z in params.InstanceOperationLimitSet) {
                let obj = new OperationCountLimit();
                obj.deserialize(params.InstanceOperationLimitSet[z]);
                this.InstanceOperationLimitSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncImages response structure.
 * @class
 */
class SyncImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneInstanceConfigInfos response structure.
 * @class
 */
class DescribeZoneInstanceConfigInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of model configurations for the availability zone.
         * @type {Array.<InstanceTypeQuotaItem> || null}
         */
        this.InstanceTypeQuotaSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceTypeQuotaSet) {
            this.InstanceTypeQuotaSet = new Array();
            for (let z in params.InstanceTypeQuotaSet) {
                let obj = new InstanceTypeQuotaItem();
                obj.deserialize(params.InstanceTypeQuotaSet[z]);
                this.InstanceTypeQuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesAttribute request structure.
 * @class
 */
class ModifyInstancesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Instance name. You can specify any name you like, but its length cannot exceed 60 characters.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * ID list of security groups of the instance. The instance will be associated with the specified security groups and will be disassociated from the original security groups.
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;

    }
}

/**
 * DescribeZones request structure.
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * StartInstances request structure.
 * @class
 */
class StartInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Key-value pair of a tag.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Describes the location of an instance, including its availability zone, project, host (for CDH products only), primary host IP, etc.
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the availability zone where the instance resides. You can call the [DescribeZones](https://intl.cloud.tencent.com/document/product/213/15707?from_cn_redirect=1) API and obtain the ID in the returned `Zone` field.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * ID of the project to which the instance belongs. To obtain the project IDs, you can call [DescribeProject](https://intl.cloud.tencent.com/document/api/378/4400?from_cn_redirect=1) and look for the `projectId` fields in the response. If this parameter is not specified, the default project will be used.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * ID list of CDHs from which the instance can be created. If you have purchased CDHs and specify this parameter, the instances you purchase will be randomly deployed on the CDHs.
         * @type {Array.<string> || null}
         */
        this.HostIds = null;

        /**
         * Master host IP used to create the CVM
         * @type {Array.<string> || null}
         */
        this.HostIps = null;

        /**
         * The ID of the CDH to which the instance belongs, only used as an output parameter.
         * @type {string || null}
         */
        this.HostId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.HostIds = 'HostIds' in params ? params.HostIds : null;
        this.HostIps = 'HostIps' in params ? params.HostIps : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

    }
}

/**
 * DescribeDisasterRecoverGroups request structure.
 * @class
 */
class DescribeDisasterRecoverGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID list of spread placement groups. You can operate up to 100 spread placement groups in each request.
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * Name of a spread placement group. Fuzzy match is supported.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Offset; default value: 0. For more information on `Offset`, see the corresponding section in API [Introduction](https://intl.cloud.tencent.com/document/product/377).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results returned; default value: 20; maximum: 100. For more information on `Limit`, see the corresponding section in API [Introduction](https://intl.cloud.tencent.com/document/product/377). 
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyKeyPairAttribute response structure.
 * @class
 */
class ModifyKeyPairAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncImages request structure.
 * @class
 */
class SyncImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of image IDs. You can obtain the image IDs in two ways: <br><li>Call [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response. <br><li>Look for the information in the [Image Console](https://console.cloud.tencent.com/cvm/image). <br>The specified images must meet the following requirements: <br><li>The images must be in the `NORMAL` state. <br><li>The image size must be smaller than 50 GB. <br>For more information on image states, see [here](https://intl.cloud.tencent.com/document/api/213/9452?from_cn_redirect=1#image_state).
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

        /**
         * List of destination regions for synchronization. A destination region must meet the following requirements: <br><li>It cannot be the source region. <br><li>It must be valid. <br><li>Currently some regions do not support image synchronization. <br>For specific regions, see [Region](https://intl.cloud.tencent.com/document/product/213/6091?from_cn_redirect=1).
         * @type {Array.<string> || null}
         */
        this.DestinationRegions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;
        this.DestinationRegions = 'DestinationRegions' in params ? params.DestinationRegions : null;

    }
}

/**
 * DisassociateInstancesKeyPairs request structure.
 * @class
 */
class DisassociateInstancesKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). The maximum number of instances in each request is 100. <br><br>You can obtain the available instance IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/index) to query the instance IDs. <br><li>Call [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of key pair IDs. The maximum number of key pairs in each request is 100. The key pair ID is in the format of `skey-11112222`. <br><br>You can obtain the available key pair IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/sshkey) to query the key pair IDs. <br><li>Call [DescribeKeyPairs](https://intl.cloud.tencent.com/document/api/213/15699?from_cn_redirect=1) and look for `KeyId` in the response.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Whether to force shut down a running instances. It is recommended to manually shut down a running instance before disassociating a key pair from it. Valid values: <br><li>TRUE: force shut down an instance after a normal shutdown fails. <br><li>FALSE: do not force shut down an instance after a normal shutdown fails. <br><br>Default value: FALSE.
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * DescribeImageQuota request structure.
 * @class
 */
class DescribeImageQuotaRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeInstanceFamilyConfigs response structure.
 * @class
 */
class DescribeInstanceFamilyConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance model families
         * @type {Array.<InstanceFamilyConfig> || null}
         */
        this.InstanceFamilyConfigSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceFamilyConfigSet) {
            this.InstanceFamilyConfigSet = new Array();
            for (let z in params.InstanceFamilyConfigSet) {
                let obj = new InstanceFamilyConfig();
                obj.deserialize(params.InstanceFamilyConfigSet[z]);
                this.InstanceFamilyConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImage response structure.
 * @class
 */
class CreateImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID.
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopInstances response structure.
 * @class
 */
class StopInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Options related to bidding requests
 * @class
 */
class InstanceMarketOptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Options related to bidding
         * @type {SpotMarketOptions || null}
         */
        this.SpotOptions = null;

        /**
         * Market option type. Currently `spot` is the only supported value.
         * @type {string || null}
         */
        this.MarketType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpotOptions) {
            let obj = new SpotMarketOptions();
            obj.deserialize(params.SpotOptions)
            this.SpotOptions = obj;
        }
        this.MarketType = 'MarketType' in params ? params.MarketType : null;

    }
}

/**
 * InquiryPriceResetInstancesInternetMaxBandwidth request structure.
 * @class
 */
class InquiryPriceResetInstancesInternetMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response. The maximum number of instances in each request is 100. When changing the bandwidth of instances with `BANDWIDTH_PREPAID` or `BANDWIDTH_POSTPAID_BY_HOUR` as the network billing method, you can only specify one instance at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Configuration of public network egress bandwidth. The maximum bandwidth varies among different models. For more information, see the documentation on bandwidth limits. Currently only the `InternetMaxBandwidthOut` parameter is supported.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Date from which the new bandwidth takes effect. Format: `YYYY-MM-DD`, such as `2016-10-30`. The starting date cannot be earlier than the current date. If the starting date is the current date, the new bandwidth takes effect immediately. This parameter is only valid for prepaid bandwidth. If you specify the parameter for bandwidth with other network billing methods, an error code will be returned.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Date until which the new bandwidth is effective. Format: `YYYY-MM-DD`, such as `2016-10-30`. The validity period of the new bandwidth covers the end date. The end date cannot be later than the expiration date of a prepaid instance. You can query the expiration time of an instance by calling [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728) and looking for `ExpiredTime` in the response. This parameter is only valid for prepaid bandwidth. If you specify the parameter for bandwidth with other network billing methods, an error code will be returned.
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ResetInstancesPassword response structure.
 * @class
 */
class ResetInstancesPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceRunInstances request structure.
 * @class
 */
class InquiryPriceRunInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Location of the instance. You can use this parameter to specify the attributes of the instance, such as its availability zone and project.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * [Image](https://intl.cloud.tencent.com/document/product/213/4940?from_cn_redirect=1) ID in the format of `img-xxx`. There are four types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><li>Marketplace images </li><br/>You can obtain the available image IDs in the following ways: <br/><li>For IDs of `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the information; for IDs of `marketplace images`, go to [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>Call [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response.</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * The instance [billing method](https://intl.cloud.tencent.com/document/product/213/2180?from_cn_redirect=1).<br><li>POSTPAID_BY_HOUR: hourly, pay-as-you-go<br>Default value: POSTPAID_BY_HOUR.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Configuration of prepaid instances. You can use the parameter to specify the attributes of prepaid instances, such as the subscription period and the auto-renewal plan. This parameter is required for prepaid instances.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * The instance model. Different resource specifications are specified for different models. For specific values, call [DescribeInstanceTypeConfigs](https://intl.cloud.tencent.com/document/api/213/15749?from_cn_redirect=1) to retrieve the latest specification list or refer to [Instance Types](https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1). If the parameter is not specified, `S1.SMALL1` will be used by default.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * System disk configuration of the instance. If this parameter is not specified, the default value will be used.
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * The configuration information of the instance data disk. If this parameter is not specified, no data disk will be purchased by default. When purchasing, you can specify 21 data disks, which can contain at most 1 LOCAL_BASIC data disk or LOCAL_SSD data disk, and at most 20 CLOUD_BASIC data disks, CLOUD_PREMIUM data disks, or CLOUD_SSD data disks.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * VPC configurations. You can use this parameter to specify the VPC ID, subnet ID, etc. If this parameter is not specified, the basic network will be used by default. If a VPC IP is specified in this parameter, the `InstanceCount` parameter can only be 1. 
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * Configuration of public network bandwidth. If this parameter is not specified, 0 Mbps will be used by default.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Number of instances to be purchased. Value range: [1, 100]; default value: 1. The specified number of instances to be purchased cannot exceed the remaining quota allowed for the user. For more information on quota, see [CVM instance purchase limit](https://intl.cloud.tencent.com/document/product/213/2664).
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Instance name to be displayed.<br><li>If this parameter is not specified, "Unnamed" will be displayed by default.</li><li>If you purchase multiple instances at the same time and specify a pattern string `{R:x}`, numbers `[x, x+n-1]` will be generated, where `n` represents the number of instances purchased. For example, you specify a pattern string, `server_{R:3}`. If you only purchase 1 instance, the instance will be named `server_3`; if you purchase 2, they will be named `server_3` and `server_4`. You can specify multiple pattern strings in the format of `{R:x}`.</li><li>If you purchase multiple instances at the same time and do not specify a pattern string, the instance names will be suffixed by `1, 2...n`, where `n` represents the number of instances purchased. For example, if you purchase 2 instances and name them as `server_`, the instance names will be displayed as `server_1` and `server_2`.</li><li>The instance name contains up to 60 characters (including pattern strings).
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Login settings of the instance. You can use this parameter to set the login method, password, and key of the instance or keep the login settings of the original image. By default, a random password will be generated and sent to you via the Message Center.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Security groups to which the instance belongs. To obtain the security group IDs, you can call [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808) and look for the `sgld` fields in the response. If this parameter is not specified, the instance will not be associated with any security group by default.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Enhanced services. You can use this parameter to specify whether to enable services such as Cloud Monitor and Cloud Security. If this parameter is not specified, Cloud Monitor and Cloud Security will be enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed. <br>For more information, see 'How to ensure idempotency'.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Host name of the CVM. <br><li>Periods (.) or hyphens (-) cannot be the start or end of a host name or appear consecutively in a host name.<br><li>For Windows instances, the host name must be 2-15 characters long and can contain uppercase and lowercase letters, numbers, and hyphens (-). It cannot contain periods (.) or contain only numbers. <br><li>For other instances, such as Linux instances, the host name must be 2-30 characters long. It supports multiple periods (.) and allows uppercase and lowercase letters, numbers, and hyphens (-) between any two periods (.).
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * The tag description list. This parameter is used to bind a tag to a resource instance. A tag can only be bound to CVM instances.
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * The market options of the instance.
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * HPC cluster ID.
         * @type {string || null}
         */
        this.HpcClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.HpcClusterId = 'HpcClusterId' in params ? params.HpcClusterId : null;

    }
}

/**
 * Details about an image, including its state and attributes.
 * @class
 */
class Image extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Operating system of the image
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * Image type
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * Creation time of the image
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Image name
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * Image description
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * Image size
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * Image architecture
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * Image state
         * @type {string || null}
         */
        this.ImageState = null;

        /**
         * Source platform of the image
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Image creator
         * @type {string || null}
         */
        this.ImageCreator = null;

        /**
         * Image source
         * @type {string || null}
         */
        this.ImageSource = null;

        /**
         * Synchronization percentage
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.SyncPercent = null;

        /**
         * Whether the image supports cloud-init
Note: This field may return null, indicating that no valid value is found.
         * @type {boolean || null}
         */
        this.IsSupportCloudinit = null;

        /**
         * Information on the snapshots associated with the image
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<Snapshot> || null}
         */
        this.SnapshotSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.ImageState = 'ImageState' in params ? params.ImageState : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ImageCreator = 'ImageCreator' in params ? params.ImageCreator : null;
        this.ImageSource = 'ImageSource' in params ? params.ImageSource : null;
        this.SyncPercent = 'SyncPercent' in params ? params.SyncPercent : null;
        this.IsSupportCloudinit = 'IsSupportCloudinit' in params ? params.IsSupportCloudinit : null;

        if (params.SnapshotSet) {
            this.SnapshotSet = new Array();
            for (let z in params.SnapshotSet) {
                let obj = new Snapshot();
                obj.deserialize(params.SnapshotSet[z]);
                this.SnapshotSet.push(obj);
            }
        }

    }
}

/**
 * DescribeDisasterRecoverGroupQuota response structure.
 * @class
 */
class DescribeDisasterRecoverGroupQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The maximum number of placement groups that can be created.
         * @type {number || null}
         */
        this.GroupQuota = null;

        /**
         * The number of placement groups that have been created by the current user.
         * @type {number || null}
         */
        this.CurrentNum = null;

        /**
         * Quota on instances in a physical-machine-type disaster recovery group.
         * @type {number || null}
         */
        this.CvmInHostGroupQuota = null;

        /**
         * Quota on instances in a switch-type disaster recovery group.
         * @type {number || null}
         */
        this.CvmInSwGroupQuota = null;

        /**
         * Quota on instances in a rack-type disaster recovery group.
         * @type {number || null}
         */
        this.CvmInRackGroupQuota = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupQuota = 'GroupQuota' in params ? params.GroupQuota : null;
        this.CurrentNum = 'CurrentNum' in params ? params.CurrentNum : null;
        this.CvmInHostGroupQuota = 'CvmInHostGroupQuota' in params ? params.CvmInHostGroupQuota : null;
        this.CvmInSwGroupQuota = 'CvmInSwGroupQuota' in params ? params.CvmInSwGroupQuota : null;
        this.CvmInRackGroupQuota = 'CvmInRackGroupQuota' in params ? params.CvmInRackGroupQuota : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions request structure.
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * CreateDisasterRecoverGroup request structure.
 * @class
 */
class CreateDisasterRecoverGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the spread placement group. The name must be 1-60 characters long and can contain both Chinese characters and English letters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Type of the spread placement group. Valid values: <br><li>HOST: physical machine <br><li>SW: switch <br><li>RACK: rack
         * @type {string || null}
         */
        this.Type = null;

        /**
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed. <br>For more information, see 'How to ensure idempotency'.
         * @type {string || null}
         */
        this.ClientToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

/**
 * DescribeReservedInstancesConfigInfos response structure.
 * @class
 */
class DescribeReservedInstancesConfigInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Static configurations of the reserved instance.
         * @type {Array.<ReservedInstanceConfigInfoItem> || null}
         */
        this.ReservedInstanceConfigInfos = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ReservedInstanceConfigInfos) {
            this.ReservedInstanceConfigInfos = new Array();
            for (let z in params.ReservedInstanceConfigInfos) {
                let obj = new ReservedInstanceConfigInfoItem();
                obj.deserialize(params.ReservedInstanceConfigInfos[z]);
                this.ReservedInstanceConfigInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReservedInstances response structure.
 * @class
 */
class DescribeReservedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of eligible reserved instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of eligible reserved instances.
         * @type {Array.<ReservedInstances> || null}
         */
        this.ReservedInstancesSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ReservedInstancesSet) {
            this.ReservedInstancesSet = new Array();
            for (let z in params.ReservedInstancesSet) {
                let obj = new ReservedInstances();
                obj.deserialize(params.ReservedInstancesSet[z]);
                this.ReservedInstancesSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImportImageOs response structure.
 * @class
 */
class DescribeImportImageOsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported operating system types of imported images.
         * @type {ImageOsList || null}
         */
        this.ImportImageOsListSupported = null;

        /**
         * Supported operating system versions of imported images. 
         * @type {Array.<OsVersion> || null}
         */
        this.ImportImageOsVersionSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImportImageOsListSupported) {
            let obj = new ImageOsList();
            obj.deserialize(params.ImportImageOsListSupported)
            this.ImportImageOsListSupported = obj;
        }

        if (params.ImportImageOsVersionSet) {
            this.ImportImageOsVersionSet = new Array();
            for (let z in params.ImportImageOsVersionSet) {
                let obj = new OsVersion();
                obj.deserialize(params.ImportImageOsVersionSet[z]);
                this.ImportImageOsVersionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePricePurchaseReservedInstancesOffering request structure.
 * @class
 */
class InquirePricePurchaseReservedInstancesOfferingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of the reserved instances you are purchasing.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * The ID of the reserved instance offering.
         * @type {string || null}
         */
        this.ReservedInstancesOfferingId = null;

        /**
         * Dry run.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed.<br>For more information, see Ensuring Idempotency.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Reserved instance name.<br><li>The RI name defaults to “unnamed” if this parameter is left empty.</li><li>You can enter any name within 60 characters (including the pattern string).</li>
         * @type {string || null}
         */
        this.ReservedInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ReservedInstancesOfferingId = 'ReservedInstancesOfferingId' in params ? params.ReservedInstancesOfferingId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ReservedInstanceName = 'ReservedInstanceName' in params ? params.ReservedInstanceName : null;

    }
}

/**
 * Describes data disk information.
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data disk size (in GB). The minimum adjustment increment is 10 GB. The value range varies by data disk type. For more information on limits, see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952?from_cn_redirect=1). The default value is 0, indicating that no data disk is purchased. For more information, see the product documentation.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Data disk type. For more information about limits on different data disk types, see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952?from_cn_redirect=1). Valid values: <br><li>LOCAL_BASIC: local disk<br><li>LOCAL_SSD: local SSD disk<br><li>LOCAL_NVME: local NVME disk, specified in the `InstanceType`<br><li>LOCAL_PRO: local HDD disk, specified in the `InstanceType`<br><li>CLOUD_BASIC: HDD cloud disk<br><li>CLOUD_PREMIUM: Premium Cloud Storage<br><li>CLOUD_SSD: SSD<br><li>CLOUD_HSSD: Enhanced SSD<br><li>CLOUD_TSSD: Tremendous SSD<br><br>Default value: LOCAL_BASIC.<br><br>This parameter is invalid for the `ResizeInstanceDisk` API.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Data disk ID. Data disks of the type `LOCAL_BASIC` or `LOCAL_SSD` do not have IDs and do not support this parameter.
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * Whether to terminate the data disk when its CVM is terminated. Valid values:
<li>TRUE: terminate the data disk when its CVM is terminated. This value only supports pay-as-you-go cloud disks billed on an hourly basis.
<li>FALSE: retain the data disk when its CVM is terminated.<br>
Default value: TRUE<br>
Currently this parameter is only used in the `RunInstances` API.
Note: This field may return null, indicating that no valid value is found.
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * Data disk snapshot ID. The size of the selected data disk snapshot must be smaller than that of the data disk.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Specifies whether the data disk is encrypted. Valid values: 
<li>TRUE: encrypted
<li>FALSE: not encrypted<br>
Default value: FALSE<br>
This parameter is only used with `RunInstances`.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * ID of the custom CMK in the format of UUID or “kms-abcd1234”. This parameter is used to encrypt cloud disks.

Currently, this parameter is only used in the `RunInstances` API.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * Cloud disk performance, in MB/s
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ThroughputPerformance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.ThroughputPerformance = 'ThroughputPerformance' in params ? params.ThroughputPerformance : null;

    }
}

/**
 * DescribeKeyPairs request structure.
 * @class
 */
class DescribeKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair ID(s) in the format of `skey-11112222`. This API supports using multiple IDs as filters at the same time. For more information on the format of this parameter, see the `id.N` section in [API Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1). You cannot specify `KeyIds` and `Filters` at the same time. You can log in to the [console](https://console.cloud.tencent.com/cvm/index) to query the key pair IDs.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Filters.
<li> `project-id` - Integer - Optional - Filter results by project ID. To view the list of project IDs, you can go to [Project Management](https://console.cloud.tencent.com/project), or call [DescribeProject](https://intl.cloud.tencent.com/document/api/378/4400?from_cn_redirect=1) and look for `projectId` in the response. </li>
<li> `key-name` - String - Optional - Filter results by key pair name. </li> You cannot specify `KeyIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset; default value: 0. For more information on `Offset`, see the corresponding sections in API [Introduction](https://intl.cloud.tencent.com/document/product/377). Number of results returned; default value: 20; maximum: 100. For more information on `Limit`, see the corresponding section in API [Introduction](https://intl.cloud.tencent.com/document/product/377). 
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results returned; default value: 20; maximum: 100. For more information on `Limit`, see the corresponding section in API [Introduction](https://intl.cloud.tencent.com/document/product/377). 
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Describes the maximum number of times you can perform an operation on a single instance.
 * @class
 */
class OperationCountLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance operation. Valid values: <br><li>`INSTANCE_DEGRADE`: downgrade an instance<br><li>`INTERNET_CHARGE_TYPE_CHANGE`: modify the billing plan of the network connection
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of operations already performed. If it returns `-1`, it means there is no limit on the times of the operation.
         * @type {number || null}
         */
        this.CurrentCount = null;

        /**
         * Maximum number of times you can perform an operation. If it returns `-1`, it means there is no limit on the times of the operation. If it returns `0`, it means that configuration modification is not supported.
         * @type {number || null}
         */
        this.LimitCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CurrentCount = 'CurrentCount' in params ? params.CurrentCount : null;
        this.LimitCount = 'LimitCount' in params ? params.LimitCount : null;

    }
}

/**
 * Static configurations of the reserved instance. Currently, RIs are only offered to beta users.
 * @class
 */
class ReservedInstanceConfigInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Abbreviation name of the instance type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Full name of the instance type.
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * Priority.
         * @type {number || null}
         */
        this.Order = null;

        /**
         * List of instance families.
         * @type {Array.<ReservedInstanceFamilyItem> || null}
         */
        this.InstanceFamilies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.Order = 'Order' in params ? params.Order : null;

        if (params.InstanceFamilies) {
            this.InstanceFamilies = new Array();
            for (let z in params.InstanceFamilies) {
                let obj = new ReservedInstanceFamilyItem();
                obj.deserialize(params.InstanceFamilies[z]);
                this.InstanceFamilies.push(obj);
            }
        }

    }
}

/**
 * DeleteDisasterRecoverGroups response structure.
 * @class
 */
class DeleteDisasterRecoverGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details about a CDH instance
 * @class
 */
class HostItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Location of the CDH instance. You can use this parameter to specify the attributes of the instance, such as its availability zone and project.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * CDH instance ID
         * @type {string || null}
         */
        this.HostId = null;

        /**
         * CDH instance type
         * @type {string || null}
         */
        this.HostType = null;

        /**
         * CDH instance name
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * Billing method of the CDH instance
         * @type {string || null}
         */
        this.HostChargeType = null;

        /**
         * Auto renewal flag of the CDH instance
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Creation time of the CDH instance
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Expiration time of the CDH instance
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * List of IDs of CVM instances created on the CDH
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * CDH instance state
         * @type {string || null}
         */
        this.HostState = null;

        /**
         * CDH instance IP
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * Resource information of the CDH instance
         * @type {HostResource || null}
         */
        this.HostResource = null;

        /**
         * Cage ID of the CDH instance. This parameter is only valid for CDH instances in the cages of finance availability zones.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.CageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.HostId = 'HostId' in params ? params.HostId : null;
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostChargeType = 'HostChargeType' in params ? params.HostChargeType : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.HostState = 'HostState' in params ? params.HostState : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;

        if (params.HostResource) {
            let obj = new HostResource();
            obj.deserialize(params.HostResource)
            this.HostResource = obj;
        }
        this.CageId = 'CageId' in params ? params.CageId : null;

    }
}

/**
 * Additional data
 * @class
 */
class Externals extends  AbstractModel {
    constructor(){
        super();

        /**
         * Release address
Note: This field may return null, indicating that no valid value is found.
         * @type {boolean || null}
         */
        this.ReleaseAddress = null;

        /**
         * Not supported network. Value: <br><li>BASIC: classic network<br><li>VPC1.0: VPC1.0
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.UnsupportNetworks = null;

        /**
         * Attributes of local HDD storage
Note: This field may return null, indicating that no valid value is found.
         * @type {StorageBlock || null}
         */
        this.StorageBlockAttr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReleaseAddress = 'ReleaseAddress' in params ? params.ReleaseAddress : null;
        this.UnsupportNetworks = 'UnsupportNetworks' in params ? params.UnsupportNetworks : null;

        if (params.StorageBlockAttr) {
            let obj = new StorageBlock();
            obj.deserialize(params.StorageBlockAttr)
            this.StorageBlockAttr = obj;
        }

    }
}

/**
 * CreateImage request structure.
 * @class
 */
class CreateImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image name
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * Instance ID used to create an image.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Image description
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * Whether to force shut down an instance to create an image when a soft shutdown fails
         * @type {string || null}
         */
        this.ForcePoweroff = null;

        /**
         * Whether to enable Sysprep when creating a Windows image. Click [here](https://intl.cloud.tencent.com/document/product/213/43498?from_cn_redirect=1) to learn more about Sysprep.
         * @type {string || null}
         */
        this.Sysprep = null;

        /**
         * Specified data disk ID included in the full image created from the instance.
         * @type {Array.<string> || null}
         */
        this.DataDiskIds = null;

        /**
         * Specified snapshot ID used to create an image. A system disk snapshot must be included. It cannot be passed together with `InstanceId`.
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * Success status of this request, without affecting the resources involved
         * @type {boolean || null}
         */
        this.DryRun = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ForcePoweroff = 'ForcePoweroff' in params ? params.ForcePoweroff : null;
        this.Sysprep = 'Sysprep' in params ? params.Sysprep : null;
        this.DataDiskIds = 'DataDiskIds' in params ? params.DataDiskIds : null;
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * Describes information on an instance
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Location of the instance
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * Instance `ID`
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance model
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Number of CPU cores of the instance; unit: core
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * Memory capacity; unit: `GB`.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance status. Valid values: <br><li>NORMAL: instance is normal. <br><li>EXPIRED: instance expired. <br><li>PROTECTIVELY_ISOLATED: instance is protectively isolated.
         * @type {string || null}
         */
        this.RestrictState = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance billing plan. Valid values:<br><li>`POSTPAID_BY_HOUR`: pay after use. You are billed by the hour, by traffic.<br><li>`CDHPAID`: `CDH` billing plan. Applicable to `CDH` only, not the instances on the host.<br>
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Information on the system disk of the instance
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * Information on the data disks of the instance, which only covers the data disks purchased together with the instance. 
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * List of private IPs of the instance's primary ENI.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * List of public IPs of the instance's primary ENI.
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * Information on instance bandwidth.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Information on the VPC where the instance resides.
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * `ID` of the image used to create the instance.
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * Auto renewal flag. Valid values: <br><li>`NOTIFY_AND_MANUAL_RENEW`: notify upon expiration, but do not renew automatically <br><li>`NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically <br><li>`DISABLE_NOTIFY_AND_MANUAL_RENEW`: do not notify upon expiration and do not renew automatically.
<br><li>Note: this parameter is `null` for postpaid instances.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Creation time following the `ISO8601` standard and using `UTC` time in the format of `YYYY-MM-DDThh:mm:ssZ`.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Expiration time in UTC format following the `ISO8601` standard: `YYYY-MM-DDThh:mm:ssZ`. Note: this parameter is `null` for postpaid instances.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Operating system name.
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * Security groups to which the instance belongs. To obtain the security group IDs, you can call [DescribeSecurityGroups](https://intl.cloud.tencent.com/document/api/215/15808) and look for the `sgld` fields in the response.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Login settings of the instance. Currently only the key associated with the instance is returned.
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * Instance state. Valid values: <br><li>PENDING: creating <br></li><li>LAUNCH_FAILED: creation failed <br></li><li>RUNNING: running <br></li><li>STOPPED: shut down <br></li><li>STARTING: starting <br></li><li>STOPPING: shutting down <br></li><li>REBOOTING: rebooting <br></li><li>SHUTDOWN: shut down and to be terminated <br></li><li>TERMINATING: terminating. <br></li>
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * List of tags associated with the instance.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Instance billing method after shutdown.
Valid values: <br><li>KEEP_CHARGING: billing continues after shutdown <br><li>STOP_CHARGING: billing stops after shutdown <li>NOT_APPLICABLE: the instance is not shut down or stopping billing after shutdown is not applicable to the instance. <br>
         * @type {string || null}
         */
        this.StopChargingMode = null;

        /**
         * Globally unique ID of the instance.
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * Last operation of the instance, such as StopInstances or ResetInstance.
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * The latest operation status of the instance. Valid values:<br><li>SUCCESS: operation succeeded<br><li>OPERATING: operation in progress<br><li>FAILED: operation failed
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * Unique request ID for the last operation of the instance.
         * @type {string || null}
         */
        this.LatestOperationRequestId = null;

        /**
         * ID of a spread placement group.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.DisasterRecoverGroupId = null;

        /**
         * IPv6 address of the instance.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.IPv6Addresses = null;

        /**
         * CAM role name.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.CamRoleName = null;

        /**
         * HPC cluster ID.
Note: this field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.HpcClusterId = null;

        /**
         * IP list of HPC cluster.
Note: this field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.RdmaIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.RestrictState = 'RestrictState' in params ? params.RestrictState : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.StopChargingMode = 'StopChargingMode' in params ? params.StopChargingMode : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.LatestOperationRequestId = 'LatestOperationRequestId' in params ? params.LatestOperationRequestId : null;
        this.DisasterRecoverGroupId = 'DisasterRecoverGroupId' in params ? params.DisasterRecoverGroupId : null;
        this.IPv6Addresses = 'IPv6Addresses' in params ? params.IPv6Addresses : null;
        this.CamRoleName = 'CamRoleName' in params ? params.CamRoleName : null;
        this.HpcClusterId = 'HpcClusterId' in params ? params.HpcClusterId : null;
        this.RdmaIpAddresses = 'RdmaIpAddresses' in params ? params.RdmaIpAddresses : null;

    }
}

/**
 * Describes the configuration of enhanced services, such as Cloud Security and Cloud Monitor.
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enables cloud security service. If this parameter is not specified, the cloud security service will be enabled by default.
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * Enables cloud monitor service. If this parameter is not specified, the cloud monitor service will be enabled by default.
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

    }
}

/**
 * InquiryPriceResetInstancesType request structure.
 * @class
 */
class InquiryPriceResetInstancesTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). You can obtain the instance IDs from the value of `InstanceId` returned by the [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) API. The maximum number of instances in each request is 1.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Instance model. Resources vary with the instance model. Specific values can be found in the tables of [Instance Types] (https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1) or in the latest specifications via the [DescribeInstanceTypeConfigs] (https://intl.cloud.tencent.com/document/product/213/15749?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DescribeInstanceVncUrl response structure.
 * @class
 */
class DescribeInstanceVncUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance VNC URL.
         * @type {string || null}
         */
        this.InstanceVncUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceVncUrl = 'InstanceVncUrl' in params ? params.InstanceVncUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReservedInstancesOfferings request structure.
 * @class
 */
class DescribeReservedInstancesOfferingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dry run. Default value: false.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * The offset. Default value: 0. For more information on `Offset`, see the relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of returned results. Default value: 20. Maximum value: 100. For more information on `Limit`, see the relevant sections in API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The maximum duration as a filter, 
in seconds.
Default value: 94608000.
         * @type {number || null}
         */
        this.MaxDuration = null;

        /**
         * The minimum duration as a filter, 
in seconds.
Default value: 2592000.
         * @type {number || null}
         */
        this.MinDuration = null;

        /**
         * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">Filters by the <strong>availability zones</strong> in which the Reserved Instances can be purchased, such as ap-guangzhou-1.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: please see <a href="https://intl.cloud.tencent.com/document/product/213/6091?from_cn_redirect=1">Availability Zones</a></p>
<li><strong>duration</strong></li>
<p style="padding-left: 30px;">Filters by the <strong>duration</strong> of the Reserved Instance, in seconds. For example, 31536000.</p><p style="padding-left: 30px;">Type: Integer</p><p style="padding-left: 30px;">Unit: second</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: 31536000 (1 year) | 94608000 (3 years)</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">Filters by <strong>type of the Reserved Instance</strong>, such as `S3.MEDIUM4`.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: please see <a href="https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1">Instance Types</a></p>
<li><strong>offering-type</strong></li>
<p style="padding-left: 30px;">Filters by **<strong>payment term</strong>**, such as `All Upfront`.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid value: All Upfront</p>
<li><strong>product-description</strong></li>
<p style="padding-left: 30px;">Filters by the <strong>platform description</strong> (operating system) of the Reserved Instance, such as `linux`.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid value: linux</p>
<li><strong>reserved-instances-offering-id</strong></li>
<p style="padding-left: 30px;">Filters by <strong>Reserved Instance ID</strong>, in the form of 650c138f-ae7e-4750-952a-96841d6e9fc1.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p>
Each request can have up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.MaxDuration = 'MaxDuration' in params ? params.MaxDuration : null;
        this.MinDuration = 'MinDuration' in params ? params.MinDuration : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * RI-related instance family. Currently, RIs are only offered to beta users.
 * @class
 */
class ReservedInstanceFamilyItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance family.
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * Priority.
         * @type {number || null}
         */
        this.Order = null;

        /**
         * List of instance types.
         * @type {Array.<ReservedInstanceTypeItem> || null}
         */
        this.InstanceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.Order = 'Order' in params ? params.Order : null;

        if (params.InstanceTypes) {
            this.InstanceTypes = new Array();
            for (let z in params.InstanceTypes) {
                let obj = new ReservedInstanceTypeItem();
                obj.deserialize(params.InstanceTypes[z]);
                this.InstanceTypes.push(obj);
            }
        }

    }
}

/**
 * DescribeDisasterRecoverGroups response structure.
 * @class
 */
class DescribeDisasterRecoverGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information on spread placement groups.
         * @type {Array.<DisasterRecoverGroup> || null}
         */
        this.DisasterRecoverGroupSet = null;

        /**
         * Total number of placement groups of the user.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DisasterRecoverGroupSet) {
            this.DisasterRecoverGroupSet = new Array();
            for (let z in params.DisasterRecoverGroupSet) {
                let obj = new DisasterRecoverGroup();
                obj.deserialize(params.DisasterRecoverGroupSet[z]);
                this.DisasterRecoverGroupSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes information related to the Cloud Security service.
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [Cloud Security](https://intl.cloud.tencent.com/document/product/296?from_cn_redirect=1). Valid values: <br><li>TRUE: enable Cloud Security <br><li>FALSE: do not enable Cloud Security <br><br>Default value: TRUE.
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * Scheduled tasks.
 * @class
 */
class ActionTimer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Additional data
         * @type {Externals || null}
         */
        this.Externals = null;

        /**
         * Timer name. Currently `TerminateInstances` is the only supported value.
         * @type {string || null}
         */
        this.TimerAction = null;

        /**
         * Execution time, which must be at least 5 minutes later than the current time. For example, 2018-5-29 11:26:40.
         * @type {string || null}
         */
        this.ActionTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Externals) {
            let obj = new Externals();
            obj.deserialize(params.Externals)
            this.Externals = obj;
        }
        this.TimerAction = 'TimerAction' in params ? params.TimerAction : null;
        this.ActionTime = 'ActionTime' in params ? params.ActionTime : null;

    }
}

/**
 * DescribeReservedInstancesConfigInfos request structure.
 * @class
 */
class DescribeReservedInstancesConfigInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * zone
Filters by the availability zones in which the reserved instance can be purchased, such as `ap-guangzhou-1`.
Type: String
Required: no
Valid values: list of regions/availability zones

product-description
Filters by the platform description (operating system) of the reserved instance, such as `linux`.
Type: String
Required: no
Valid value: linux

duration
Filters by the **validity** of the reserved instance, which is the purchased usage period. For example, `31536000`.
Type: Integer
Unit: second
Required: no
Valid value: 31536000 (1 year)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * Description of tags associated with resource instances during instance creation.
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type of resource that bound with the tag. Valid values: `instance` (for CVM) and `host` (for CDH).
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * List of tags
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * ResetInstancesInternetMaxBandwidth request structure.
 * @class
 */
class ResetInstancesInternetMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response. The maximum number of instances in each request is 100. When changing the bandwidth of instances with `BANDWIDTH_PREPAID` or `BANDWIDTH_POSTPAID_BY_HOUR` as the network billing method, you can only specify one instance at a time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Configuration of public network egress bandwidth. The maximum bandwidth varies among different models. For more information, see the documentation on bandwidth limits. Currently only the `InternetMaxBandwidthOut` parameter is supported.
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * Date from which the new bandwidth takes effect. Format: `YYYY-MM-DD`, such as `2016-10-30`. The starting date cannot be earlier than the current date. If the starting date is the current date, the new bandwidth takes effect immediately. This parameter is only valid for prepaid bandwidth. If you specify the parameter for bandwidth with other network billing methods, an error code will be returned.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Date until which the new bandwidth is effective. Format: `YYYY-MM-DD`, such as `2016-10-30`. The validity period of the new bandwidth covers the end date. The end date cannot be later than the expiration date of a prepaid instance. You can query the expiration time of an instance by calling [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728) and looking for `ExpiredTime` in the response. This parameter is only valid for prepaid bandwidth. If you specify the parameter for bandwidth with other network billing methods, an error code will be returned.
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * Describes the model family of the instance.
Examples: {'InstanceFamilyName': 'Standard S1', 'InstanceFamily': 'S1'}, {'InstanceFamilyName': 'Network-optimized N1', 'InstanceFamily': 'N1'}, {'InstanceFamilyName': 'High IO I1', 'InstanceFamily': 'I1'}, etc.
 * @class
 */
class InstanceFamilyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full name of the model family.
         * @type {string || null}
         */
        this.InstanceFamilyName = null;

        /**
         * Acronym of the model family.
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceFamilyName = 'InstanceFamilyName' in params ? params.InstanceFamilyName : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * AssociateSecurityGroups response structure.
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportImage request structure.
 * @class
 */
class ImportImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * OS architecture of the image to be imported, `x86_64` or `i386`.
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * OS type of the image to be imported. You can call `DescribeImportImageOs` to obtain the list of supported operating systems.
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * OS version of the image to be imported. You can call `DescribeImportImageOs` to obtain the list of supported operating systems.
         * @type {string || null}
         */
        this.OsVersion = null;

        /**
         * Address on COS where the image to be imported is stored.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Image name
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * Image description
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * Dry run to check the parameters without performing the operation
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Whether to force import the image. For more information, see [Forcibly Import Image](https://intl.cloud.tencent.com/document/product/213/12849).
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * Options related to bidding.
 * @class
 */
class SpotMarketOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bidding price
         * @type {string || null}
         */
        this.MaxPrice = null;

        /**
         * Bidding request type. Currently only "one-time" is supported.
         * @type {string || null}
         */
        this.SpotInstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxPrice = 'MaxPrice' in params ? params.MaxPrice : null;
        this.SpotInstanceType = 'SpotInstanceType' in params ? params.SpotInstanceType : null;

    }
}

/**
 * DescribeImportImageOs request structure.
 * @class
 */
class DescribeImportImageOsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * CreateKeyPair request structure.
 * @class
 */
class CreateKeyPairRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the key pair, which can contain numbers, letters, and underscores, with a maximum length of 25 characters.
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * The ID of the project to which the new key pair belongs.
You can query the project IDs in two ways:
<li>Query the project IDs in the project list.
<li>Call `DescribeProject` and look for `projectId` in the response.
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * Describes instance states. For state types, see [here](https://intl.cloud.tencent.com/document/api/213/15753?from_cn_redirect=1#InstanceStatus).
 * @class
 */
class InstanceStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance `ID`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The instance state. Valid values: <br><li>PENDING: creating<br></li><li>LAUNCH_FAILED: creation failed<br></li><li>RUNNING: running<br></li><li>STOPPED: shut down<br></li><li>STARTING: starting<br></li><li>STOPPING: shutting down<br></li><li>REBOOTING: rebooting<br></li><li>SHUTDOWN: shut down and to be terminated<br></li><li>TERMINATING: terminating.<br></li>
         * @type {string || null}
         */
        this.InstanceState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;

    }
}

/**
 * Price information of the reserved instance based on the payment method. Currently, RIs are only offered to beta users.
 * @class
 */
class ReservedInstancePriceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Payment method. Valid values: All Upfront, Partial Upfront, and No Upfront.
         * @type {string || null}
         */
        this.OfferingType = null;

        /**
         * Upfront payment, in USD.
         * @type {number || null}
         */
        this.FixedPrice = null;

        /**
         * Subsequent unit price, in USD/hr.
         * @type {number || null}
         */
        this.UsagePrice = null;

        /**
         * The ID of the reserved instance offering.
         * @type {string || null}
         */
        this.ReservedInstancesOfferingId = null;

        /**
         * The availability zone in which the reserved instance can be purchased.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The **validity** of the reserved instance in seconds, which is the purchased usage period. For example, `31536000`.
Unit: second
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * The operating system of the reserved instance, such as `linux`.
Valid value: linux.
         * @type {string || null}
         */
        this.ProductDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OfferingType = 'OfferingType' in params ? params.OfferingType : null;
        this.FixedPrice = 'FixedPrice' in params ? params.FixedPrice : null;
        this.UsagePrice = 'UsagePrice' in params ? params.UsagePrice : null;
        this.ReservedInstancesOfferingId = 'ReservedInstancesOfferingId' in params ? params.ReservedInstancesOfferingId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;

    }
}

/**
 * AllocateHosts response structure.
 * @class
 */
class AllocateHostsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID list of the CVM instances newly created on the CDH.
         * @type {Array.<string> || null}
         */
        this.HostIdSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostIdSet = 'HostIdSet' in params ? params.HostIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageSharePermission request structure.
 * @class
 */
class DescribeImageSharePermissionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the image to be shared
         * @type {string || null}
         */
        this.ImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

    }
}

/**
 * Information on disaster recovery groups
 * @class
 */
class DisasterRecoverGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a spread placement group.
         * @type {string || null}
         */
        this.DisasterRecoverGroupId = null;

        /**
         * Name of a spread placement group, which must be 1-60 characters long.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Type of a spread placement group. Valid values: <br><li>HOST: physical machine <br><li>SW: switch <br><li>RACK: rack.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The maximum number of CVMs that can be hosted in a spread placement group.
         * @type {number || null}
         */
        this.CvmQuotaTotal = null;

        /**
         * The current number of CVMs in a spread placement group.
         * @type {number || null}
         */
        this.CurrentNum = null;

        /**
         * The list of CVM IDs in a spread placement group.
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Creation time of a spread placement group.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisasterRecoverGroupId = 'DisasterRecoverGroupId' in params ? params.DisasterRecoverGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CvmQuotaTotal = 'CvmQuotaTotal' in params ? params.CvmQuotaTotal : null;
        this.CurrentNum = 'CurrentNum' in params ? params.CurrentNum : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * InquiryPriceResetInstance response structure.
 * @class
 */
class InquiryPriceResetInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price of reinstalling the instance with the specified configuration.
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * > Key-value pair filters used for conditional queries, such as filtering results by ID, name, and state.
> * If there are multiple `Filter` parameters, they are evaluated using the logical `AND` operator.
> * If a `Filter` contains multiple `Values`, they are evaluated using the logical `OR` operator.
>
> Take [DescribeInstances](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) as an example. You can use the following filters to query the instances in availability zone (`zone`) Guangzhou Zone 1 ***and*** whose billing plan (`instance-charge-type`) is pay-as-you-go:
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=POSTPAID_BY_HOUR
```
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter values.
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeImageSharePermission response structure.
 * @class
 */
class DescribeImageSharePermissionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information on image sharing.
         * @type {Array.<SharePermission> || null}
         */
        this.SharePermissionSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SharePermissionSet) {
            this.SharePermissionSet = new Array();
            for (let z in params.SharePermissionSet) {
                let obj = new SharePermission();
                obj.deserialize(params.SharePermissionSet[z]);
                this.SharePermissionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyHostsAttribute response structure.
 * @class
 */
class ModifyHostsAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDisasterRecoverGroupQuota request structure.
 * @class
 */
class DescribeDisasterRecoverGroupQuotaRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * StartInstances response structure.
 * @class
 */
class StartInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesVpcAttribute request structure.
 * @class
 */
class ModifyInstancesVpcAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * VPC configurations. You can use this parameter to specify the VPC ID, subnet ID, VPC IP, etc. If the specified VPC ID and subnet ID (the subnet must be in the same availability zone as the instance) are different from the VPC where the specified instance resides, the instance will be migrated to a subnet of the specified VPC. You can use `PrivateIpAddresses` to specify the VPC subnet IP. If you want to specify the subnet IP, you will need to specify a subnet IP for each of the specified instances, and each `InstanceIds` will match a `PrivateIpAddresses`. If `PrivateIpAddresses` is not specified, the VPC subnet IP will be assigned randomly.
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * Whether to force shut down a running instances. Default value: TRUE.
         * @type {boolean || null}
         */
        this.ForceStop = null;

        /**
         * Whether to keep the host name. Default value: FALSE.
         * @type {boolean || null}
         */
        this.ReserveHostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.ReserveHostName = 'ReserveHostName' in params ? params.ReserveHostName : null;

    }
}

/**
 * DescribeReservedInstances request structure.
 * @class
 */
class DescribeReservedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dry run. The default is false.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Offset. The default value is 0. For more information on `Offset`, see the relevant sections in API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. The default value is 20. The maximum is 100. For more information on `Limit`, see the relevant sections in API [Overview](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">Filters by <strong>availability zone</strong> in which reserved instances can be purchased, such as `ap-guangzhou-1`.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: please see <a href="https://intl.cloud.tencent.com/document/product/213/6091?from_cn_redirect=1">Availability Zones</a></p>
<li><strong>duration</strong></li>
<p style="padding-left: 30px;">Filters by <strong>validity period</strong> of the reserved instance, such as `31536000`.</p><p style="padding-left: 30px;">Type: Integer</p><p style="padding-left: 30px;">Unit: second</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid value: 31536000 (1 year)</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">Filters by <strong>specification of the reserved instance</strong>, such as `S3.MEDIUM4`.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: please see <a href="https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1">Reserved Instance Types</a></p>
<li><strong>instance-family</strong></li>
<p style="padding-left: 30px;">Filters by <strong>type of the reserved instance</strong>, such as `S3`.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: please see <a href="https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1">Reserved Instance Types</a></p>
<li><strong>offering-type</strong></li>
<li><strong>offering-type</strong></li>
<p style="padding-left: 30px;">Filters by <strong>payment method</strong>, such as `All Upfront`.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: All Upfront | Partial Upfront | No Upfront</p>
<li><strong>product-description</strong></li>
<p style="padding-left: 30px;">Filters by <strong>platform description</strong> (operating system) of the reserved instance, such as `linux`.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid value: linux</p>
<li><strong>reserved-instances-id</strong></li>
<p style="padding-left: 30px;">Filters by <strong>reserved instance ID</strong> in the form of 650c138f-ae7e-4750-952a-96841d6e9fc1.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p>
<li><strong>state</strong></li>
<p style="padding-left: 30px;">Filters by <strong>reserved instance status</strong>, such as `active`.</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: active (created) | pending (waiting to be created) | retired (expired)</p>
Each request can have up to 10 `Filters` and 5 `Filter.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeInternetChargeTypeConfigs response structure.
 * @class
 */
class DescribeInternetChargeTypeConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of network billing methods.
         * @type {Array.<InternetChargeTypeConfig> || null}
         */
        this.InternetChargeTypeConfigSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InternetChargeTypeConfigSet) {
            this.InternetChargeTypeConfigSet = new Array();
            for (let z in params.InternetChargeTypeConfigSet) {
                let obj = new InternetChargeTypeConfig();
                obj.deserialize(params.InternetChargeTypeConfigSet[z]);
                this.InternetChargeTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneInstanceConfigInfos request structure.
 * @class
 */
class DescribeZoneInstanceConfigInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters.

<li> `zone` - String - Optional - Filter results by availability zone.</li>

<li>`instance-family` - String - Optional - Filter results by instance model family, such as `S1`, `I1`, and `M1`.</li>

<li>`instance-type` - String - Optional - Filter results by model. Different instance models have different configurations. You can call `DescribeInstanceTypeConfigs` to query the latest configuration list or refer to the documentation on instance types. If this parameter is not specified, `S1.SMALL1` will be used by default.</li>

<li>`instance-charge-type` - String - Optional - Filter results by instance billing method. `POSTPAID_BY_HOUR`: pay-as-you-go | `CDHPAID`: you are only billed for CDH instances, not the CVMs running on the CDH instances.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeZones response structure.
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of availability zones.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of availability zones.
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes pricing information.
 * @class
 */
class ItemPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * The original unit price for pay-as-you-go mode in USD. <br><li>When a billing tier is returned, it indicates the price fo the returned billing tier. For example, if `UnitPriceSecondStep` is returned, it refers to the unit price for the usage between 0 to 96 hours. Otherwise, it refers to that the unit price for unlimited usage.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Billing unit for pay-as-you-go mode. Valid values: <br><li>HOUR: billed on an hourly basis. It's used for hourly postpaid instances (`POSTPAID_BY_HOUR`). <br><li>GB: bill by traffic in GB. It's used for postpaid products that are billed by the hourly traffic (`TRAFFIC_POSTPAID_BY_HOUR`).
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * The original price of a pay-in-advance instance, in USD.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount price of a prepaid instance, in USD.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * Percentage of the original price. For example, if you enter "20.0", the discounted price will be 20% of the original price.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * The discounted unit price for pay-as-you-go mode in USD. <br><li>When a billing tier is returned, it indicates the price fo the returned billing tier. For example, if `UnitPriceSecondStep` is returned, it refers to the unit price for the usage between 0 to 96 hours. Otherwise, it refers to that the unit price for unlimited usage.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * Original unit price for the usage between 96 to 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceSecondStep = null;

        /**
         * Discounted unit price for the usage between 96 to 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscountSecondStep = null;

        /**
         * Original unit price for the usage after 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceThirdStep = null;

        /**
         * Discounted unit price for the usage after 360 hours in USD. It's applicable to pay-as-you-go mode.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.UnitPriceDiscountThirdStep = null;

        /**
         * Original 3-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPriceThreeYear = null;

        /**
         * Discounted 3-year upfront payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPriceThreeYear = null;

        /**
         * Discount for 3-year upfront payment. For example, 20.0 indicates 80% off.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountThreeYear = null;

        /**
         * Original 5-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPriceFiveYear = null;

        /**
         * Discounted 5-year upfront payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPriceFiveYear = null;

        /**
         * Discount for 5-year upfront payment. For example, 20.0 indicates 80% off.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountFiveYear = null;

        /**
         * Original 1-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.OriginalPriceOneYear = null;

        /**
         * Discounted 1-year payment, in USD. This parameter is only available to upfront payment mode.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountPriceOneYear = null;

        /**
         * Discount for 1-year upfront payment. For example, 20.0 indicates 80% off.
Note: this field may return `null`, indicating that no valid value was found.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.DiscountOneYear = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.UnitPriceSecondStep = 'UnitPriceSecondStep' in params ? params.UnitPriceSecondStep : null;
        this.UnitPriceDiscountSecondStep = 'UnitPriceDiscountSecondStep' in params ? params.UnitPriceDiscountSecondStep : null;
        this.UnitPriceThirdStep = 'UnitPriceThirdStep' in params ? params.UnitPriceThirdStep : null;
        this.UnitPriceDiscountThirdStep = 'UnitPriceDiscountThirdStep' in params ? params.UnitPriceDiscountThirdStep : null;
        this.OriginalPriceThreeYear = 'OriginalPriceThreeYear' in params ? params.OriginalPriceThreeYear : null;
        this.DiscountPriceThreeYear = 'DiscountPriceThreeYear' in params ? params.DiscountPriceThreeYear : null;
        this.DiscountThreeYear = 'DiscountThreeYear' in params ? params.DiscountThreeYear : null;
        this.OriginalPriceFiveYear = 'OriginalPriceFiveYear' in params ? params.OriginalPriceFiveYear : null;
        this.DiscountPriceFiveYear = 'DiscountPriceFiveYear' in params ? params.DiscountPriceFiveYear : null;
        this.DiscountFiveYear = 'DiscountFiveYear' in params ? params.DiscountFiveYear : null;
        this.OriginalPriceOneYear = 'OriginalPriceOneYear' in params ? params.OriginalPriceOneYear : null;
        this.DiscountPriceOneYear = 'DiscountPriceOneYear' in params ? params.DiscountPriceOneYear : null;
        this.DiscountOneYear = 'DiscountOneYear' in params ? params.DiscountOneYear : null;

    }
}

/**
 * Describes instance model quota.
 * @class
 */
class InstanceTypeQuotaItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance model.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Instance billing plan. Valid values: <br><li>POSTPAID_BY_HOUR: pay after use. You are billed for your traffic by the hour.<br><li>`CDHPAID`: [`CDH`](https://intl.cloud.tencent.com/document/product/416?from_cn_redirect=1) billing plan. Applicable to `CDH` only, not the instances on the host.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * ENI type. For example, 25 represents an ENI of 25 GB.
         * @type {number || null}
         */
        this.NetworkCard = null;

        /**
         * Additional data.
Note: This field may return null, indicating that no valid value is found.
         * @type {Externals || null}
         */
        this.Externals = null;

        /**
         * Number of CPU cores of an instance model.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Instance memory capacity; unit: `GB`.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Instance model family.
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * Model name.
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * List of local disk specifications. If the parameter returns null, it means that local disks cannot be created.
         * @type {Array.<LocalDiskType> || null}
         */
        this.LocalDiskTypeList = null;

        /**
         * Whether an instance model is available. Valid values: <br><li>SELL: available <br><li>SOLD_OUT: sold out
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Price of an instance model.
         * @type {ItemPrice || null}
         */
        this.Price = null;

        /**
         * Details of out-of-stock items
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.SoldOutReason = null;

        /**
         * Private network bandwidth, in Gbps.
         * @type {number || null}
         */
        this.InstanceBandwidth = null;

        /**
         * The max packet sending and receiving capability (in 10k PPS).
         * @type {number || null}
         */
        this.InstancePps = null;

        /**
         * Number of local storage blocks.
         * @type {number || null}
         */
        this.StorageBlockAmount = null;

        /**
         * CPU type.
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * Number of GPUs of the instance.
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * Number of FPGAs of the instance.
         * @type {number || null}
         */
        this.Fpga = null;

        /**
         * Descriptive information of the instance.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.NetworkCard = 'NetworkCard' in params ? params.NetworkCard : null;

        if (params.Externals) {
            let obj = new Externals();
            obj.deserialize(params.Externals)
            this.Externals = obj;
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;

        if (params.LocalDiskTypeList) {
            this.LocalDiskTypeList = new Array();
            for (let z in params.LocalDiskTypeList) {
                let obj = new LocalDiskType();
                obj.deserialize(params.LocalDiskTypeList[z]);
                this.LocalDiskTypeList.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Price) {
            let obj = new ItemPrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.SoldOutReason = 'SoldOutReason' in params ? params.SoldOutReason : null;
        this.InstanceBandwidth = 'InstanceBandwidth' in params ? params.InstanceBandwidth : null;
        this.InstancePps = 'InstancePps' in params ? params.InstancePps : null;
        this.StorageBlockAmount = 'StorageBlockAmount' in params ? params.StorageBlockAmount : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.Fpga = 'Fpga' in params ? params.Fpga : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * Supported operating systems are divided into two categories, Windows and Linux.
 * @class
 */
class ImageOsList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported Windows OS
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<string> || null}
         */
        this.Windows = null;

        /**
         * Supported Linux OS
Note: This field may return null, indicating that no valid value is found.
         * @type {Array.<string> || null}
         */
        this.Linux = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Windows = 'Windows' in params ? params.Windows : null;
        this.Linux = 'Linux' in params ? params.Linux : null;

    }
}

/**
 * Reserved instance specification. Currently, RIs are only offered to beta users.
 * @class
 */
class ReservedInstanceTypeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Number of CPU cores.
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Memory size.
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * Number of GPUs.
         * @type {number || null}
         */
        this.Gpu = null;

        /**
         * Number of FPGAs.
         * @type {number || null}
         */
        this.Fpga = null;

        /**
         * Number of local storage blocks.
         * @type {number || null}
         */
        this.StorageBlock = null;

        /**
         * Number of NICs.
         * @type {number || null}
         */
        this.NetworkCard = null;

        /**
         * Maximum bandwidth.
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * CPU frequency.
         * @type {string || null}
         */
        this.Frequency = null;

        /**
         * CPU type.
         * @type {string || null}
         */
        this.CpuModelName = null;

        /**
         * Packet forwarding rate.
         * @type {number || null}
         */
        this.Pps = null;

        /**
         * Other information.
         * @type {Externals || null}
         */
        this.Externals = null;

        /**
         * Remarks.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Price information about the reserved instance.
         * @type {Array.<ReservedInstancePriceItem> || null}
         */
        this.Prices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Gpu = 'Gpu' in params ? params.Gpu : null;
        this.Fpga = 'Fpga' in params ? params.Fpga : null;
        this.StorageBlock = 'StorageBlock' in params ? params.StorageBlock : null;
        this.NetworkCard = 'NetworkCard' in params ? params.NetworkCard : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.CpuModelName = 'CpuModelName' in params ? params.CpuModelName : null;
        this.Pps = 'Pps' in params ? params.Pps : null;

        if (params.Externals) {
            let obj = new Externals();
            obj.deserialize(params.Externals)
            this.Externals = obj;
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Prices) {
            this.Prices = new Array();
            for (let z in params.Prices) {
                let obj = new ReservedInstancePriceItem();
                obj.deserialize(params.Prices[z]);
                this.Prices.push(obj);
            }
        }

    }
}

/**
 * InquiryPriceRunInstances response structure.
 * @class
 */
class InquiryPriceRunInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price of the instance with the specified configurations.
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHosts request structure.
 * @class
 */
class DescribeHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">Filter results by **<strong>availability zones</strong>**. For example, availability zone: ap-guangzhou-1;</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p><p style="padding-left: 30px;">Valid values: <a href="https://intl.cloud.tencent.com/document/product/213/6091?from_cn_redirect=1">list of availability zones</a></p>
<li><strong>project-id</strong></li>
<p style="padding-left: 30px;">Filter results by **<strong>project ID</strong>**. You can query the existing project list through the [DescribeProject](https://intl.cloud.tencent.com/document/api/378/4400?from_cn_redirect=1) API or [CVM console](https://console.cloud.tencent.com/cvm/index), or create a project by calling the [AddProject](https://intl.cloud.tencent.com/document/api/378/4398?from_cn_redirect=1) API. For example, project ID: 1002189;</p><p style="padding-left: 30px;">Type: Integer</p><p style="padding-left: 30px;">Required: no</p>
<li><strong>host-id</strong></li>
<p style="padding-left: 30px;">Filter results by **<strong>[CDH](https://intl.cloud.tencent.com/document/product/416?from_cn_redirect=1) ID</strong>**. For example, [CDH](https://intl.cloud.tencent.com/document/product/416?from_cn_redirect=1) ID: host-xxxxxxxx;</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p>
<li><strong>state</strong></li>
<p style="padding-left: 30px;">Filter results by **<strong>CDH instance name</strong>**. </p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p>
<li><strong>state</strong></li>
<p style="padding-left: 30px;">Filter results by **<strong>CDH instance status </strong>**. (PENDING: creating | LAUNCH_FAILURE: creation failed | RUNNING: running | EXPIRED: expired)</p><p style="padding-left: 30px;">Type: String</p><p style="padding-left: 30px;">Required: no</p>
Each request can have up to 10 `Filters` and 5 `Filters.Values`.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset; default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results returned; default value: 20; maximum: 100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeInstancesStatus request structure.
 * @class
 */
class DescribeInstancesStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query by instance ID(s). For example, instance ID: `ins-xxxxxxxx`. For the specific format, refer to section `Ids.N` of the API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1). You can query up to 100 instances in each request.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Offset; default value: 0. For more information on `Offset`, see the corresponding section in API [Introduction](https://intl.cloud.tencent.com/document/product/377).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results returned; default value: 20; maximum: 100. For more information on `Limit`, see the corresponding section in API [Introduction](https://intl.cloud.tencent.com/document/product/377).
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * InquiryPriceResizeInstanceDisks response structure.
 * @class
 */
class InquiryPriceResizeInstanceDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price of the disks after being expanded to the specified configurations
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateInstances request structure.
 * @class
 */
class TerminateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Describes image sharing information.
 * @class
 */
class SharePermission extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time when an image was shared.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * ID of the account with which the image is shared.
         * @type {string || null}
         */
        this.AccountId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.AccountId = 'AccountId' in params ? params.AccountId : null;

    }
}

/**
 * Describes the information of the reserved instances the user has purchased
 * @class
 */
class ReservedInstances extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the purchased reserved instance, taking the form 650c138f-ae7e-4750-952a-96841d6e9fc1.
         * @type {string || null}
         */
        this.ReservedInstancesId = null;

        /**
         * Reserved instance specification, such as `S3.MEDIUM4`.
Valid values: please see <a href="https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1">Reserved Instance Specifications</a>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Availability zones in which the reserved instance can be purchased. For example, "ap-guangzhou-1".
Returned values: <a href="https://intl.cloud.tencent.com/document/product/213/6091?from_cn_redirect=1">list of availability zones</a>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Start time of the reserved instance billing, taking the form of 2019-10-23 00:00:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the reserved instance, taking the form of 2019-10-23 00:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The **validity** of the reserved instance in seconds, which is the purchased usage period. For example, 31536000.
Measurement unit: second.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * The number of reserved instances that have been purchased. For example, 10.
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * The operating system of the reserved instance. For example, "linux".
Returned value: linux.
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * The status of the reserved instance. For example, "active".
Returned value: "active" (created) | "pending" (waiting to be created) | "retired" (expired).
         * @type {string || null}
         */
        this.State = null;

        /**
         * The currency in which the reserved instance is billed. The ISO 4217 standard currency codes are used. For example, USD.
Returned value: USD.
         * @type {string || null}
         */
        this.CurrencyCode = null;

        /**
         * The payment method of the reserved instance. For example, "All Upfront".
Returned value: All Upfront.
         * @type {string || null}
         */
        this.OfferingType = null;

        /**
         * Reserved instance type, such as `S3`.
Valid values: please see <a href="https://intl.cloud.tencent.com/document/product/213/11518?from_cn_redirect=1">Reserved Instance Types</a>
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReservedInstancesId = 'ReservedInstancesId' in params ? params.ReservedInstancesId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.State = 'State' in params ? params.State : null;
        this.CurrencyCode = 'CurrencyCode' in params ? params.CurrencyCode : null;
        this.OfferingType = 'OfferingType' in params ? params.OfferingType : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * DeleteImages response structure.
 * @class
 */
class DeleteImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportImage response structure.
 * @class
 */
class ImportImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDisasterRecoverGroupAttribute request structure.
 * @class
 */
class ModifyDisasterRecoverGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Spread placement group ID, which can be obtained by calling the [DescribeDisasterRecoverGroups](https://intl.cloud.tencent.com/document/api/213/17810?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.DisasterRecoverGroupId = null;

        /**
         * Name of a spread placement group. The name must be 1-60 characters long and can contain both Chinese characters and English letters.
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisasterRecoverGroupId = 'DisasterRecoverGroupId' in params ? params.DisasterRecoverGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * RebootInstances response structure.
 * @class
 */
class RebootInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceResetInstancesType response structure.
 * @class
 */
class InquiryPriceResetInstancesTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price of the instance using the specified model
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Supported operating system types.
 * @class
 */
class OsVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operating system type
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * Supported operating system versions
         * @type {Array.<string> || null}
         */
        this.OsVersions = null;

        /**
         * Supported operating system architecture
         * @type {Array.<string> || null}
         */
        this.Architecture = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.OsVersions = 'OsVersions' in params ? params.OsVersions : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;

    }
}

/**
 * ModifyImageAttribute response structure.
 * @class
 */
class ModifyImageAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstances request structure.
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query by instance ID(s). For example, instance ID: `ins-xxxxxxxx`. For the specific format, refer to section `Ids.N` of the API [Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1). You can query up to 100 instances in each request. However, `InstanceIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Filters.
<li> `zone` - String - Optional - Filter results by availability zone.</li>
<li> `project-id` - Integer - Optional - Filter results by project ID. You can call [DescribeProject](https://intl.cloud.tencent.com/document/api/378/4400?from_cn_redirect=1) or log in to the [console](https://console.cloud.tencent.com/cvm/index) to view the list of existing projects. You can also create a new project by calling [AddProject](https://intl.cloud.tencent.com/document/api/378/4398?from_cn_redirect=1).</li>
<li> `host-id` - String - Optional - Filter results by [CDH](https://intl.cloud.tencent.com/document/product/416?from_cn_redirect=1) ID. [CDH](https://intl.cloud.tencent.com/document/product/416?from_cn_redirect=1) ID format: `host-xxxxxxxx`.</li>
</li>`vpc-id` - String - Optional - Filter results by VPC ID. VPC ID format: `vpc-xxxxxxxx`.</li>
<li> `subnet-id` - String - Optional - Filter results by subnet ID. Subnet ID format: `subnet-xxxxxxxx`.</li>
</li>`instance-id` - String - Optional - Filter results by instance ID. Instance ID format: `ins-xxxxxxxx`.</li>
</li>`security-group-id` - String - Optional - Filter results by security group ID. Security group ID format: `sg-8jlk3f3r`.</li>
</li>`instance-name` - String - Optional - Filter results by instance name.</li>
</li>`instance-charge-type` - String - Optional - Filter results by instance billing method. `POSTPAID_BY_HOUR`: pay-as-you-go | `CDHPAID`: you are only billed for [CDH](https://intl.cloud.tencent.com/document/product/416?from_cn_redirect=1) instances, not the CVMs running on the [CDH](https://intl.cloud.tencent.com/document/product/416?from_cn_redirect=1) instances.</li>
</li>`private-ip-address` - String - Optional - Filter results by the private IP address of the instance's primary ENI.</li>
</li>`public-ip-address` - String - Optional - Filter results by the public IP address of the instance's primary ENI, including the IP addresses automatically assigned during the instance creation and the EIPs manually associated after the instance creation.</li>
<li> `tag-key` - String - Optional - Filter results by tag key.</li>
</li>`tag-value` - String - Optional - Filter results by tag value.</li>
<li> `tag:tag-key` - String - Optional - Filter results by tag key-value pair. Replace `tag-key` with specific tag keys, as shown in example 2.</li>
Each request can have up to 10 `Filters` and 5 `Filters.Values`. You cannot specify `InstanceIds` and `Filters` at the same time.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset; default value: 0. For more information on `Offset`, see the corresponding section in API [Introduction](https://intl.cloud.tencent.com/document/product/377).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results returned; default value: 20; maximum: 100. For more information on `Limit`, see the corresponding section in API [Introduction](https://intl.cloud.tencent.com/document/product/377). 
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Region information.
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name, such as `ap-guangzhou`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region description, such as South China (Guangzhou)
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Whether the region is available
         * @type {string || null}
         */
        this.RegionState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;

    }
}

/**
 * StopInstances request structure.
 * @class
 */
class StopInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Whether to force shut down an instance after a normal shutdown fails. Valid values: <br><li>TRUE: force shut down an instance after a normal shutdown fails <br><li>FALSE: do not force shut down an instance after a normal shutdown fails <br><br>Default value: FALSE.
         * @type {boolean || null}
         */
        this.ForceStop = null;

        /**
         * Instance shutdown mode. Valid values: <br><li>SOFT_FIRST: perform a soft shutdown first, and force shut down the instance if the soft shutdown fails <br><li>HARD: force shut down the instance directly <br><li>SOFT: soft shutdown only <br>Default value: SOFT.
         * @type {string || null}
         */
        this.StopType = null;

        /**
         * Billing method of a pay-as-you-go instance after shutdown.
Valid values: <br><li>KEEP_CHARGING: billing continues after shutdown <br><li>STOP_CHARGING: billing stops after shutdown <br>Default value: KEEP_CHARGING.
This parameter is only valid for some pay-as-you-go instances using cloud disks. For more information, see [No charges when shut down for pay-as-you-go instances](https://intl.cloud.tencent.com/document/product/213/19918).
         * @type {string || null}
         */
        this.StoppedMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.StopType = 'StopType' in params ? params.StopType : null;
        this.StoppedMode = 'StoppedMode' in params ? params.StoppedMode : null;

    }
}

/**
 * DescribeInternetChargeTypeConfigs request structure.
 * @class
 */
class DescribeInternetChargeTypeConfigsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeImages request structure.
 * @class
 */
class DescribeImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of image IDs, such as `img-gvbnzy6f`. For the format of array-type parameters, see [API Introduction](https://intl.cloud.tencent.com/document/api/213/15688?from_cn_redirect=1). You can obtain the image IDs in two ways: <br><li>Call [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response. <br><li>View the image IDs in the [Image Console](https://console.cloud.tencent.com/cvm/image).
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

        /**
         * Filters. Each request can have up to 10 `Filters` and 5 `Filters.Values`. You cannot specify `ImageIds` and `Filters` at the same time. Specific filters:
<li>`image-id` - String - Optional - Filter results by image ID</li>
<li>`image-type` - String - Optional - Filter results by image type. Valid values:
    PRIVATE_IMAGE: private image created by the current account 
    PUBLIC_IMAGE: public image created by Tencent Cloud
   SHARED_IMAGE: image shared with the current account by another account.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset; default value: 0. For more information on `Offset`, see [API Introduction](https://intl.cloud.tencent.com/document/api/213/568?from_cn_redirect=1#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results returned; default value: 20; maximum: 100. For more information on `Limit`, see [API Introduction](https://intl.cloud.tencent.com/document/api/213/568?from_cn_redirect=1#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Instance type, e.g. `S1.SMALL1`
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * ModifyImageAttribute request structure.
 * @class
 */
class ModifyImageAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID such as `img-gvbnzy6f`. You can obtain the image IDs in two ways: <br><li>Call [DescribeImages](https://intl.cloud.tencent.com/document/api/213/15715?from_cn_redirect=1) and look for `ImageId` in the response. <br><li>Look for the information in the [Image Console](https://console.cloud.tencent.com/cvm/image).
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * New image name, which must meet the following requirements: <br> <li>No more than 20 characters. <br> <li>Must be unique.
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * New image description, which must meet the following requirement: <br> <li> No more than 60 characters.
         * @type {string || null}
         */
        this.ImageDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;

    }
}

/**
 * ResizeInstanceDisks response structure.
 * @class
 */
class ResizeInstanceDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePricePurchaseReservedInstancesOffering response structure.
 * @class
 */
class InquirePricePurchaseReservedInstancesOfferingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price of the reserved instance with specified configuration.
         * @type {ReservedInstancePrice || null}
         */
        this.Price = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new ReservedInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateSecurityGroups request structure.
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the security group to be disassociated, such as `sg-efil73jd`. Only one security group can be disassociated.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * ID(s) of the instance(s) to be disassociated,such as `ins-lesecurk`. You can specify multiple instances.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ModifyHostsAttribute request structure.
 * @class
 */
class ModifyHostsAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CDH instance ID(s).
         * @type {Array.<string> || null}
         */
        this.HostIds = null;

        /**
         * CDH instance name to be displayed. You can specify any name you like, but its length cannot exceed 60 characters.
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * Auto renewal flag. Valid values: <br><li>NOTIFY_AND_AUTO_RENEW: notify upon expiration and renew automatically <br><li>NOTIFY_AND_MANUAL_RENEW: notify upon expiration but do not renew automatically <br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: neither notify upon expiration nor renew automatically <br><br>If this parameter is specified as NOTIFY_AND_AUTO_RENEW, the instance will be automatically renewed on a monthly basis if the account balance is sufficient.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Project ID. You can create a project by using the [AddProject](https://intl.cloud.tencent.com/doc/api/403/4398?from_cn_redirect=1) API and obtain its ID from the response parameter `projectId` of the [`DescribeProject`](https://intl.cloud.tencent.com/document/product/378/4400?from_cn_redirect=1) API. Subsequently, the project ID can be used to filter results when you query instances by calling the [DescribeHosts](https://intl.cloud.tencent.com/document/api/213/16474?from_cn_redirect=1) API.
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostIds = 'HostIds' in params ? params.HostIds : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ImportKeyPair request structure.
 * @class
 */
class ImportKeyPairRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair name, which can contain numbers, letters, and underscores, with a maximum length of 25 characters.
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * The ID of the [project](https://intl.cloud.tencent.com/document/product/378/10861?from_cn_redirect=1) to which the created key pair belongs.<br><br>You can retrieve the project ID in two ways:<br><li>Query the project ID in [Project Management](https://console.cloud.tencent.com/project).<br><li>Call [DescribeProject](https://intl.cloud.tencent.com/document/api/378/4400?from_cn_redirect=1) and search for `projectId` in the response.

If you want to use the default project, specify 0 for the parameter.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Content of the public key in the key pair in the `OpenSSH RSA` format.
         * @type {string || null}
         */
        this.PublicKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;

    }
}

/**
 * Describes key pair information.
 * @class
 */
class KeyPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key pair `ID`, the unique identifier of a key pair.
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Key pair name.
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * `ID` of the project to which a key pair belongs.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Key pair description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Content of public key in a key pair.
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * Content of private key in a key pair. Tencent Cloud do not keep private keys. Please keep it properly.
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * `ID` list of instances associated with a key.
         * @type {Array.<string> || null}
         */
        this.AssociatedInstanceIds = null;

        /**
         * Creation time, which follows the `ISO8601` standard and uses `UTC` time in the format of `YYYY-MM-DDThh:mm:ssZ`.
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.AssociatedInstanceIds = 'AssociatedInstanceIds' in params ? params.AssociatedInstanceIds : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DescribeReservedInstancesOfferings response structure.
 * @class
 */
class DescribeReservedInstancesOfferingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of Reserved Instances that meet the condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of Reserved Instances that meet the condition.
         * @type {Array.<ReservedInstancesOffering> || null}
         */
        this.ReservedInstancesOfferingsSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ReservedInstancesOfferingsSet) {
            this.ReservedInstancesOfferingsSet = new Array();
            for (let z in params.ReservedInstancesOfferingsSet) {
                let obj = new ReservedInstancesOffering();
                obj.deserialize(params.ReservedInstancesOfferingsSet[z]);
                this.ReservedInstancesOfferingsSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes information related to the Cloud Monitor service.
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [Cloud Monitor](https://intl.cloud.tencent.com/document/product/248?from_cn_redirect=1). Valid values: <br><li>TRUE: enable Cloud Monitor <br><li>FALSE: do not enable Cloud Monitor <br><br>Default value: TRUE.
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * ResetInstance response structure.
 * @class
 */
class ResetInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes information on VPC, including subnets, IP addresses, etc.
 * @class
 */
class VirtualPrivateCloud extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID in the format of `vpc-xxx`. To obtain valid VPC IDs, you can log in to the [console](https://console.cloud.tencent.com/vpc/vpc?rid=1) or call the [DescribeVpcEx](https://intl.cloud.tencent.com/document/api/215/1372?from_cn_redirect=1) API and look for the `unVpcId` fields in the response. If you specify `DEFAULT` for both `VpcId` and `SubnetId` when creating an instance, the default VPC will be used.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID in the format `subnet-xxx`. To obtain valid subnet IDs, you can log in to the [console](https://console.cloud.tencent.com/vpc/subnet?rid=1) or call [DescribeSubnets](https://intl.cloud.tencent.com/document/api/215/15784?from_cn_redirect=1) and look for the `unSubnetId` fields in the response. If you specify `DEFAULT` for both `SubnetId` and `VpcId` when creating an instance, the default VPC will be used.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Whether to use an instance as a public gateway. An instance can be used as a public gateway only when it has a public IP and resides in a VPC. Valid values: <br><li>TRUE: use the instance as a public gateway <br><li>FALSE: do not use the instance as a public gateway <br><br>Default value: FALSE.
         * @type {boolean || null}
         */
        this.AsVpcGateway = null;

        /**
         * Array of VPC subnet IPs. You can use this parameter when creating instances or modifying VPC attributes of instances. Currently you can specify multiple IPs in one subnet only when creating multiple instances at the same time.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Number of IPv6 addresses randomly generated for the ENI.
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AsVpcGateway = 'AsVpcGateway' in params ? params.AsVpcGateway : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * ModifyDisasterRecoverGroupAttribute response structure.
 * @class
 */
class ModifyDisasterRecoverGroupAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceTypeConfigs response structure.
 * @class
 */
class DescribeInstanceTypeConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance model families
         * @type {Array.<InstanceTypeConfig> || null}
         */
        this.InstanceTypeConfigSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceTypeConfigSet) {
            this.InstanceTypeConfigSet = new Array();
            for (let z in params.InstanceTypeConfigSet) {
                let obj = new InstanceTypeConfig();
                obj.deserialize(params.InstanceTypeConfigSet[z]);
                this.InstanceTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResizeInstanceDisks request structure.
 * @class
 */
class ResizeInstanceDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://intl.cloud.tencent.com/document/api/213/15728?from_cn_redirect=1) and look for `InstanceId` in the response.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Configuration of data disks to be expanded. Currently you can only use the API to expand non-elastic data disks whose [disk type](https://intl.cloud.tencent.com/document/api/213/9452?from_cn_redirect=1#block_device) is `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`. You can use [`DescribeDisks`](https://intl.cloud.tencent.com/document/api/362/16315?from_cn_redirect=1) to check whether a disk is elastic. If the `Portable` field in the response is `false`, it means that the disk is not elastic. Data disk capacity unit: GB; minimum increment: 10 GB. For more information on selecting the data disk type, see the [product overview on cloud disks](https://intl.cloud.tencent.com/document/product/362/2353?from_cn_redirect=1). Available data disk types are subject to the instance type (`InstanceType`). In addition, the maximum capacity allowed for expansion varies by data disk type.
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * Whether to force shut down a running instances. It is recommended to manually shut down a running instance before resetting the user password. Valid values: <br><li>TRUE: force shut down an instance after a normal shutdown fails. <br><li>FALSE: do not force shut down an instance after a normal shutdown fails. <br><br>Default value: FALSE. <br><br>A forced shutdown is similar to switching off the power of a physical computer. It may cause data loss or file system corruption. Be sure to only force shut down a CVM when it cannot be shut down normally.
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * DescribeInstanceFamilyConfigs request structure.
 * @class
 */
class DescribeInstanceFamilyConfigsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * PurchaseReservedInstancesOffering response structure.
 * @class
 */
class PurchaseReservedInstancesOfferingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the Reserved Instance purchased.
         * @type {string || null}
         */
        this.ReservedInstanceId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReservedInstanceId = 'ReservedInstanceId' in params ? params.ReservedInstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information on local HDD storage.
 * @class
 */
class StorageBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * Local HDD storage type. Value: LOCAL_PRO.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Minimum capacity of local HDD storage
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * Maximum capacity of local HDD storage
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * Describes the accessibility of an instance in the public network, including its network billing method, maximum bandwidth, etc.
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network connection billing plan. Valid value: <br><li>TRAFFIC_POSTPAID_BY_HOUR: pay after use. You are billed for your traffic, by the hour.
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * The maximum outbound bandwidth of the public network, in Mbps. The default value is 0 Mbps. The upper limit of bandwidth varies for different models. For more information, see [Purchase Network Bandwidth](https://intl.cloud.tencent.com/document/product/213/12523?from_cn_redirect=1).
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Whether to assign a public IP. Valid values: <br><li>TRUE: Assign a public IP <br><li>FALSE: Do not assign a public IP <br><br>If the public network bandwidth is greater than 0 Mbps, you can choose whether to assign a public IP; by default a public IP will be assigned. If the public network bandwidth is 0 Mbps, you will not be able to assign a public IP.
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

        /**
         * Bandwidth package ID. To obatin the IDs, you can call [`DescribeBandwidthPackages`](https://intl.cloud.tencent.com/document/api/215/19209?from_cn_redirect=1) and look for the `BandwidthPackageId` fields in the response.
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

    }
}

/**
 * The information of the Reserved Instance offering.
 * @class
 */
class ReservedInstancesOffering extends  AbstractModel {
    constructor(){
        super();

        /**
         * The availability zones in which the Reserved Instance can be purchased, such as ap-guangzhou-1.
Valid value: <a href="https://intl.cloud.tencent.com/document/product/213/6091?from_cn_redirect=1">Availability Zones</a>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The billing currency of the Reserved Instance you are purchasing. It's specified using ISO 4217 standard currency.
Value: USD.
         * @type {string || null}
         */
        this.CurrencyCode = null;

        /**
         * The **validity** of the Reserved Instance in seconds, which is the purchased usage period. For example, 31536000.
Unit: second
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * The purchase price of the Reserved Instance, such as 4000.0.
Unit: this field uses the currency code specified in `currencyCode`, and only supports “USD” at this time.
         * @type {number || null}
         */
        this.FixedPrice = null;

        /**
         * The instance model of the Reserved Instance, such as S3.MEDIUM4.
Valid value: <a href="https://intl.cloud.tencent.com/product/cvm/instances?from_cn_redirect=1">Instance Models</a>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * The payment term of the Reserved Instance, such as **All Upfront**.
Valid value: All Upfront.
         * @type {string || null}
         */
        this.OfferingType = null;

        /**
         * The ID of the Reserved Instance offering, such as 650c138f-ae7e-4750-952a-96841d6e9fc1.
         * @type {string || null}
         */
        this.ReservedInstancesOfferingId = null;

        /**
         * The operating system of the Reserved Instance, such as **linux**.
Valid value: linux.
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * The hourly usage price of the Reserved Instance, such as 0.0.
Currently, the only supported payment mode is **All Upfront**, so the default value of `UsagePrice` is 0 USD/hr.
Unit: USD/hr. This field uses the currency code specified in `currencyCode`, and only supports “USD” at this time.
         * @type {number || null}
         */
        this.UsagePrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CurrencyCode = 'CurrencyCode' in params ? params.CurrencyCode : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.FixedPrice = 'FixedPrice' in params ? params.FixedPrice : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.OfferingType = 'OfferingType' in params ? params.OfferingType : null;
        this.ReservedInstancesOfferingId = 'ReservedInstancesOfferingId' in params ? params.ReservedInstancesOfferingId : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.UsagePrice = 'UsagePrice' in params ? params.UsagePrice : null;

    }
}

/**
 * DisassociateSecurityGroups response structure.
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes information on the snapshot associated with an image.
 * @class
 */
class Snapshot extends  AbstractModel {
    constructor(){
        super();

        /**
         * Snapshot ID.
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * Type of the cloud disk used to create the snapshot. Valid values:
SYSTEM_DISK: system disk
DATA_DISK: data disk
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Size of the cloud disk used to create the snapshot; unit: GB.
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * ModifyInstancesProject response structure.
 * @class
 */
class ModifyInstancesProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Describes the billing method of an instance.
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subscription period; unit: month; valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Auto renewal flag. Valid values: <br><li>NOTIFY_AND_AUTO_RENEW: notify upon expiration and renew automatically <br><li>NOTIFY_AND_MANUAL_RENEW: notify upon expiration but do not renew automatically <br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW: neither notify upon expiration nor renew automatically <br><br>Default value: NOTIFY_AND_MANUAL_RENEW. If this parameter is specified as NOTIFY_AND_AUTO_RENEW, the instance will be automatically renewed on a monthly basis if the account balance is sufficient.
         * @type {string || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * Price.
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance price.
         * @type {ItemPrice || null}
         */
        this.InstancePrice = null;

        /**
         * Network price.
         * @type {ItemPrice || null}
         */
        this.BandwidthPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new ItemPrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

        if (params.BandwidthPrice) {
            let obj = new ItemPrice();
            obj.deserialize(params.BandwidthPrice)
            this.BandwidthPrice = obj;
        }

    }
}

module.exports = {
    ChargePrepaid: ChargePrepaid,
    LocalDiskType: LocalDiskType,
    AssociateInstancesKeyPairsResponse: AssociateInstancesKeyPairsResponse,
    DescribeImageQuotaResponse: DescribeImageQuotaResponse,
    ModifyInstancesProjectRequest: ModifyInstancesProjectRequest,
    ResetInstancesTypeResponse: ResetInstancesTypeResponse,
    HostResource: HostResource,
    DeleteDisasterRecoverGroupsRequest: DeleteDisasterRecoverGroupsRequest,
    DescribeInstancesOperationLimitRequest: DescribeInstancesOperationLimitRequest,
    TerminateInstancesResponse: TerminateInstancesResponse,
    ResetInstancesInternetMaxBandwidthResponse: ResetInstancesInternetMaxBandwidthResponse,
    CreateDisasterRecoverGroupResponse: CreateDisasterRecoverGroupResponse,
    InquiryPriceResetInstancesInternetMaxBandwidthResponse: InquiryPriceResetInstancesInternetMaxBandwidthResponse,
    ModifyKeyPairAttributeRequest: ModifyKeyPairAttributeRequest,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    ResetInstancesTypeRequest: ResetInstancesTypeRequest,
    InquiryPriceResetInstanceRequest: InquiryPriceResetInstanceRequest,
    RunInstancesRequest: RunInstancesRequest,
    DeleteImagesRequest: DeleteImagesRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeHostsResponse: DescribeHostsResponse,
    DeleteKeyPairsRequest: DeleteKeyPairsRequest,
    SystemDisk: SystemDisk,
    ResetInstanceRequest: ResetInstanceRequest,
    InstanceTypeConfig: InstanceTypeConfig,
    AllocateHostsRequest: AllocateHostsRequest,
    LoginSettings: LoginSettings,
    DescribeRegionsResponse: DescribeRegionsResponse,
    PurchaseReservedInstancesOfferingRequest: PurchaseReservedInstancesOfferingRequest,
    RebootInstancesRequest: RebootInstancesRequest,
    AssociateInstancesKeyPairsRequest: AssociateInstancesKeyPairsRequest,
    ImportKeyPairResponse: ImportKeyPairResponse,
    DescribeInstancesStatusResponse: DescribeInstancesStatusResponse,
    ZoneInfo: ZoneInfo,
    DescribeInstanceTypeConfigsRequest: DescribeInstanceTypeConfigsRequest,
    DescribeKeyPairsResponse: DescribeKeyPairsResponse,
    ResetInstancesPasswordRequest: ResetInstancesPasswordRequest,
    InternetChargeTypeConfig: InternetChargeTypeConfig,
    DescribeImagesResponse: DescribeImagesResponse,
    ModifyInstancesVpcAttributeResponse: ModifyInstancesVpcAttributeResponse,
    CreateKeyPairResponse: CreateKeyPairResponse,
    DeleteKeyPairsResponse: DeleteKeyPairsResponse,
    DescribeInstanceVncUrlRequest: DescribeInstanceVncUrlRequest,
    ModifyImageSharePermissionRequest: ModifyImageSharePermissionRequest,
    DisassociateInstancesKeyPairsResponse: DisassociateInstancesKeyPairsResponse,
    InquiryPriceResizeInstanceDisksRequest: InquiryPriceResizeInstanceDisksRequest,
    RunInstancesResponse: RunInstancesResponse,
    ReservedInstancePrice: ReservedInstancePrice,
    ModifyInstancesAttributeResponse: ModifyInstancesAttributeResponse,
    ModifyImageSharePermissionResponse: ModifyImageSharePermissionResponse,
    DescribeInstancesOperationLimitResponse: DescribeInstancesOperationLimitResponse,
    SyncImagesResponse: SyncImagesResponse,
    DescribeZoneInstanceConfigInfosResponse: DescribeZoneInstanceConfigInfosResponse,
    ModifyInstancesAttributeRequest: ModifyInstancesAttributeRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    StartInstancesRequest: StartInstancesRequest,
    Tag: Tag,
    Placement: Placement,
    DescribeDisasterRecoverGroupsRequest: DescribeDisasterRecoverGroupsRequest,
    ModifyKeyPairAttributeResponse: ModifyKeyPairAttributeResponse,
    SyncImagesRequest: SyncImagesRequest,
    DisassociateInstancesKeyPairsRequest: DisassociateInstancesKeyPairsRequest,
    DescribeImageQuotaRequest: DescribeImageQuotaRequest,
    DescribeInstanceFamilyConfigsResponse: DescribeInstanceFamilyConfigsResponse,
    CreateImageResponse: CreateImageResponse,
    StopInstancesResponse: StopInstancesResponse,
    InstanceMarketOptionsRequest: InstanceMarketOptionsRequest,
    InquiryPriceResetInstancesInternetMaxBandwidthRequest: InquiryPriceResetInstancesInternetMaxBandwidthRequest,
    ResetInstancesPasswordResponse: ResetInstancesPasswordResponse,
    InquiryPriceRunInstancesRequest: InquiryPriceRunInstancesRequest,
    Image: Image,
    DescribeDisasterRecoverGroupQuotaResponse: DescribeDisasterRecoverGroupQuotaResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    CreateDisasterRecoverGroupRequest: CreateDisasterRecoverGroupRequest,
    DescribeReservedInstancesConfigInfosResponse: DescribeReservedInstancesConfigInfosResponse,
    DescribeReservedInstancesResponse: DescribeReservedInstancesResponse,
    DescribeImportImageOsResponse: DescribeImportImageOsResponse,
    InquirePricePurchaseReservedInstancesOfferingRequest: InquirePricePurchaseReservedInstancesOfferingRequest,
    DataDisk: DataDisk,
    DescribeKeyPairsRequest: DescribeKeyPairsRequest,
    OperationCountLimit: OperationCountLimit,
    ReservedInstanceConfigInfoItem: ReservedInstanceConfigInfoItem,
    DeleteDisasterRecoverGroupsResponse: DeleteDisasterRecoverGroupsResponse,
    HostItem: HostItem,
    Externals: Externals,
    CreateImageRequest: CreateImageRequest,
    Instance: Instance,
    EnhancedService: EnhancedService,
    InquiryPriceResetInstancesTypeRequest: InquiryPriceResetInstancesTypeRequest,
    DescribeInstanceVncUrlResponse: DescribeInstanceVncUrlResponse,
    DescribeReservedInstancesOfferingsRequest: DescribeReservedInstancesOfferingsRequest,
    ReservedInstanceFamilyItem: ReservedInstanceFamilyItem,
    DescribeDisasterRecoverGroupsResponse: DescribeDisasterRecoverGroupsResponse,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    ActionTimer: ActionTimer,
    DescribeReservedInstancesConfigInfosRequest: DescribeReservedInstancesConfigInfosRequest,
    TagSpecification: TagSpecification,
    ResetInstancesInternetMaxBandwidthRequest: ResetInstancesInternetMaxBandwidthRequest,
    InstanceFamilyConfig: InstanceFamilyConfig,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    ImportImageRequest: ImportImageRequest,
    SpotMarketOptions: SpotMarketOptions,
    DescribeImportImageOsRequest: DescribeImportImageOsRequest,
    CreateKeyPairRequest: CreateKeyPairRequest,
    InstanceStatus: InstanceStatus,
    ReservedInstancePriceItem: ReservedInstancePriceItem,
    AllocateHostsResponse: AllocateHostsResponse,
    DescribeImageSharePermissionRequest: DescribeImageSharePermissionRequest,
    DisasterRecoverGroup: DisasterRecoverGroup,
    InquiryPriceResetInstanceResponse: InquiryPriceResetInstanceResponse,
    Filter: Filter,
    DescribeImageSharePermissionResponse: DescribeImageSharePermissionResponse,
    ModifyHostsAttributeResponse: ModifyHostsAttributeResponse,
    DescribeDisasterRecoverGroupQuotaRequest: DescribeDisasterRecoverGroupQuotaRequest,
    StartInstancesResponse: StartInstancesResponse,
    ModifyInstancesVpcAttributeRequest: ModifyInstancesVpcAttributeRequest,
    DescribeReservedInstancesRequest: DescribeReservedInstancesRequest,
    DescribeInternetChargeTypeConfigsResponse: DescribeInternetChargeTypeConfigsResponse,
    DescribeZoneInstanceConfigInfosRequest: DescribeZoneInstanceConfigInfosRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    ItemPrice: ItemPrice,
    InstanceTypeQuotaItem: InstanceTypeQuotaItem,
    ImageOsList: ImageOsList,
    ReservedInstanceTypeItem: ReservedInstanceTypeItem,
    InquiryPriceRunInstancesResponse: InquiryPriceRunInstancesResponse,
    DescribeHostsRequest: DescribeHostsRequest,
    DescribeInstancesStatusRequest: DescribeInstancesStatusRequest,
    InquiryPriceResizeInstanceDisksResponse: InquiryPriceResizeInstanceDisksResponse,
    TerminateInstancesRequest: TerminateInstancesRequest,
    SharePermission: SharePermission,
    ReservedInstances: ReservedInstances,
    DeleteImagesResponse: DeleteImagesResponse,
    ImportImageResponse: ImportImageResponse,
    ModifyDisasterRecoverGroupAttributeRequest: ModifyDisasterRecoverGroupAttributeRequest,
    RebootInstancesResponse: RebootInstancesResponse,
    InquiryPriceResetInstancesTypeResponse: InquiryPriceResetInstancesTypeResponse,
    OsVersion: OsVersion,
    ModifyImageAttributeResponse: ModifyImageAttributeResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    RegionInfo: RegionInfo,
    StopInstancesRequest: StopInstancesRequest,
    DescribeInternetChargeTypeConfigsRequest: DescribeInternetChargeTypeConfigsRequest,
    DescribeImagesRequest: DescribeImagesRequest,
    ModifyImageAttributeRequest: ModifyImageAttributeRequest,
    ResizeInstanceDisksResponse: ResizeInstanceDisksResponse,
    InquirePricePurchaseReservedInstancesOfferingResponse: InquirePricePurchaseReservedInstancesOfferingResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    ModifyHostsAttributeRequest: ModifyHostsAttributeRequest,
    ImportKeyPairRequest: ImportKeyPairRequest,
    KeyPair: KeyPair,
    DescribeReservedInstancesOfferingsResponse: DescribeReservedInstancesOfferingsResponse,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    ResetInstanceResponse: ResetInstanceResponse,
    VirtualPrivateCloud: VirtualPrivateCloud,
    ModifyDisasterRecoverGroupAttributeResponse: ModifyDisasterRecoverGroupAttributeResponse,
    DescribeInstanceTypeConfigsResponse: DescribeInstanceTypeConfigsResponse,
    ResizeInstanceDisksRequest: ResizeInstanceDisksRequest,
    DescribeInstanceFamilyConfigsRequest: DescribeInstanceFamilyConfigsRequest,
    PurchaseReservedInstancesOfferingResponse: PurchaseReservedInstancesOfferingResponse,
    StorageBlock: StorageBlock,
    InternetAccessible: InternetAccessible,
    ReservedInstancesOffering: ReservedInstancesOffering,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    Snapshot: Snapshot,
    ModifyInstancesProjectResponse: ModifyInstancesProjectResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    Price: Price,

}
