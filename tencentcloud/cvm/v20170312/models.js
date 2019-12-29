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
         * 
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
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Project ID. You can create a project by calling [AddProject](https://cloud.tencent.com/doc/api/403/4398). When calling [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) to query instances, the project IDs can be used to filter the results.
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
         * List of spread placement group IDs, which can be obtained by calling the [DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810) API.
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
         * Instance ID(s). To obtain the instance IDs, you can call [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The instance ID format is `ins-xxxxxxxx`. For more information on the format of this parameter, see the `id.N` section of [API Introduction](https://cloud.tencent.com/document/api/213/15688)). The maximum number of instance IDs in each request is 100.
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
         * Key pair ID in the format of `skey-xxxxxxxx`. <br><br>You can obtain the available key pair IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/sshkey) to query the key pair IDs. <br><li>Call [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) and look for `KeyId` in the response.
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
         * ID(s) of the instance(s) to be associated，such as `ins-lesecurk`. You can specify multiple instances.
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
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 1.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Instance model. Different resource specifications are specified for different models. For specific values, call [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749) to get the latest specification list or refer to [Instance Types](https://cloud.tencent.com/document/product/213/11518).
         * @type {string || null}
         */
        this.InstanceType = null;

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
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * [Image](/document/product/213/4940) ID in the format of `img-xxx`. There are four types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><li>Marketplace images </li><br/>You can obtain the available image IDs in the following ways: <br/><li>For IDs of `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the information; for IDs of `marketplace images`, go to [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>Call [DescribeImages](https://cloud.tencent.com/document/api/213/15715) and look for `ImageId` in the response.</li>
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
         * Location of the instance. You can use this parameter to specify the attributes of the instance, such as its availability zone, project, and CDH. You can specify a CDH for a CVM by creating the CVM on the CDH.
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * The [image](/document/product/213/4940) ID in the format of `img-xxx`. There are four types of images:<br/><li>Public images</li><li>Custom images</li><li>Shared images</li><li>Marketplace images</li><br/>You can retrieve available image IDs in the following ways:<br/><li>For the IDs of `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the information. For the IDs of `marketplace images`, go to [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>Call [DescribeImages](https://cloud.tencent.com/document/api/213/15715), pass in `InstanceType` to retrieve the list of images supported by the current model, and then find the `ImageId` in the response.</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * The instance [billing method](https://cloud.tencent.com/document/product/213/2180). Valid values: <br><li>`POSTPAID_BY_HOUR`: hourly, pay-as-you-go<br><li>`CDHPAID`: you are only billed for CDH instances, not the CVMs running on the CDH instances.<br>Default value: POSTPAID_BY_HOUR.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Configuration of prepaid instances. You can use the parameter to specify the attributes of prepaid instances, such as the subscription period and the auto-renewal plan. This parameter is required for prepaid instances.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * The instance model. Different resource specifications are specified for different instance models.
<br><li>To view specific values for `POSTPAID_BY_HOUR` instances, you can call [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749) or refer to [Instance Types](https://cloud.tencent.com/document/product/213/11518). If this parameter is not specified, `S1.SMALL1` will be used by default.<br><li>For `CDHPAID` instances, the value of this parameter is in the format of `CDH_XCXG` based on the number of CPU cores and memory capacity. For example, if you want to create a CDH instance with a single-core CPU and 1 GB memory, specify this parameter as `CDH_1C1G`.
         * @type {string || null}
         */
        this.InstanceType = null;

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
         * VPC configurations. You can use this parameter to specify the VPC ID, subnet ID, etc. If this parameter is not specified, the basic network will be used by default. If a VPC IP is specified in this parameter, it will represent the primary ENI IP of each instance. The value of `InstanceCount` must be the same as the number of VPC IPs.
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
         * Instance name to be displayed. <br><li>If this parameter is not specified, "Unnamed" will be displayed by default. </li><li>If you purchase multiple instances at the same time and specify a pattern string `{R:x}`, numbers `[x, x+n-1]` will be generated, where `n` represents the number of instances purchased. For example, you specify a pattern string, `server_{R:3}`. If you only purchase 1 instance, the instance will be named `server_3`; if you purchase 2, they will be named `server_3` and `server_4`. You can specify multiple pattern strings in the format of `{R:x}`. </li><li>If you purchase multiple instances at the same time and do not specify a pattern string, the instance names will be suffixed by `1, 2...n`, where `n` represents the number of instances purchased. For example, if you purchase 2 instances and the instance name body is `server_`, the instance names will be `server_1` and `server_2`.
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
         * Enhanced services. You can use this parameter to specify whether to enable services such as Cloud Monitor and Cloud Security. If this parameter is not specified, Cloud Monitor and Cloud Security will be enabled by default.
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed. <br>For more information, see “How to ensure idempotency”.
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
         * Key ID(s). The maximum number of key pairs in each request is 100. <br>You can obtain the available key pair IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/sshkey) to query the key pair IDs. <br><li>Call [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) and look for `KeyId` in the response.
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
         * The system disk type. For more information about the limits on system disk types, see [Instance Types](/document/product/213/2177). Valid values:<br><li>LOCAL_BASIC: local disk<br><li>LOCAL_SSD: local SSD disk<br><li>CLOUD_BASIC: HDD cloud disk<br><li>CLOUD_SSD: SSD cloud disk<br><li>CLOUD_PREMIUM: premium cloud storage<br><br>Default value: CLOUD_BASIC.
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
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * [Image](/document/product/213/4940) ID in the format of `img-xxx`. There are four types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><li>Marketplace images </li><br/>You can obtain the available image IDs in the following ways: <br/><li>For IDs of `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the information; for IDs of `marketplace images`, go to [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>Call [DescribeImages](https://cloud.tencent.com/document/api/213/15715) and look for `ImageId` in the response.</li>
<br>The current image will be used by default.
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

        /**
         * You can use this parameter to specify a new HostName for the instance when reinstalling the system.
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
         * The billing method of an instance. Currently only `PREPAID` is supported.
         * @type {string || null}
         */
        this.HostChargeType = null;

        /**
         * CDH instance model. Default value: `HS1`.
         * @type {string || null}
         */
        this.HostType = null;

        /**
         * The quantity of CDH instances you want to purchase.
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
         * Login password of the instance. The password requirements vary among different operating systems: <br><li>For Linux instances, the password must be 8-16 characters long and contain at least one character from two of the following categories: [a-z, A-Z], [0-9] and [( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]. <br><li>For Windows instances, the password must be 12-16 characters long and contain at least one character from three of the following categories: [a-z], [A-Z], [0-9] and [( ) ` ~ ! @ # $ % ^ & * - + = { } [ ] : ; ' , . ? /]. <br><br>If this parameter is not specified, a random password will be generated and sent to you via the Message Center.
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * List of key IDs. After an instance is associated with a key, you can access the instance with the private key in the key pair. You can call `DescribeKeyPairs` to obtain `KeyId`. Key and password cannot be specified at the same time. Windows instances do not support keys. Currently, you can only specify one key when purchasing an instance.
Note: This field may return null, indicating that no valid value is found.
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
 * RebootInstances request structure.
 * @class
 */
class RebootInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
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
         * Instance ID(s). The maximum number of instances in each request is 100. <br>You can obtain the available instance IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/index) to query the instance IDs. <br><li>Call [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Key ID(s). The maximum number of key pairs in each request is 100. The key pair ID is in the format of `skey-3glfot13`. <br>You can obtain the available key pair IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/sshkey) to query the key pair IDs. <br><li>Call [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) and look for `KeyId` in the response.
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
         * List of [instance states](https://cloud.tencent.com/document/api/213/15728).
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
 * DescribeInstanceTypeConfigs request structure.
 * @class
 */
class DescribeInstanceTypeConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters.
<li> `zone` - String - Optional - Filter results by [availability zone](https://cloud.tencent.com/document/product/213/15753#ZoneInfo).</li>
<li> `instance-family` - String - Optional - Filter results by instance model family, such as `S1`, `I1`, and `M1`.</li>
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
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Login password of the instance(s). The password requirements vary among different operating systems:
For a Linux instance, the password must be 8 to 30 characters in length; password with more than 12 characters is recommended. It cannot begin with "/", and must contain at least one character from three of the following categories: <br><li>Lowercase letters: [a-z]<br><li>Uppercase letters: [A-Z]<br><li>Numbers: 0-9<br><li>Special characters: ()\`~!@#$%^&\*-+=\_|{}[]:;'<>,.?/:
For a Windows CVM, the password must be 12 to 30 characters in length. It cannot begin with "/" or contain your username. It must contain at least one character from three of the following categories: <br><li>Lowercase letters: [a-z]<br><li>Uppercase letters: [A-Z]<br><li>Numbers: 0-9<br><li>Special characters: ()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/:<br><li>If the specified instances include both `Linux` and `Windows` instances, you will need to follow the password requirements for `Windows` instances.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Operating system username of the instance for which you want to reset the password. The length of the username cannot exceed 64 characters.
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
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response.
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
         * Image ID such as `img-gvbnzy6f`. You can obtain the image IDs in two ways: <br><li>Call [DescribeImages](https://cloud.tencent.com/document/api/213/15715) and look for `ImageId` in the response. <br><li>Look for the information in the [Image Console](https://console.cloud.tencent.com/cvm/image). <br>You can only specify an image in the `NORMAL` state. For more information on image states, see [here](/document/api/213/9452#image_state).
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * List of account IDs with which an image is shared. For the format of array-type parameters, see [API Introduction](/document/api/213/568). The account ID is different from the QQ number. You can find the account ID in [Account Information](https://console.cloud.tencent.com/developer). 
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
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The configuration of data disks to be expanded. Currently, you can only use the API to expand non-elastic data disks whose [disk type](https://cloud.tencent.com/document/product/213/15753#DataDisk) is `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`. You can use [`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315) to check whether a disk is elastic. If the `Portable` field in the response is `false`, it means that the disk is non-elastic. Data disk capacity unit: GB; minimum increment: 10 GB. For more information about selecting a data disk type, see the product overview on cloud disks. Available data disk types are subject to the instance type (`InstanceType`). In addition, the maximum capacity allowed for expansion varies by data disk type.
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
         * If you use this API to create instance(s), this parameter will be returned, representing one or more instance `ID`s. Retuning the instance `ID` list does not necessarily mean that the instance(s) were created successfully. To check whether the instance(s) were created successfully, you can call [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) and check the states of the instances in `InstancesSet` in the response. If the state of an instance changes from "pending" to "running", it means that the instance has been created successfully.
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
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
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
 * StartInstances request structure.
 * @class
 */
class StartInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
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
 * Describes the location of an instance, including its availability zone, project, host (for CDH products only), master host IP, etc.
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the [Availability Zone](/document/product/213/9452#zone) where the instance resides. To obtain the availability zone IDs, you can call [DescribeZones](/document/api/213/9455) and look for the `Zone` fields in the response.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * ID of the project to which the instance belongs. To obtain the project IDs, you can call [DescribeProject](/document/api/378/4400) and look for the `projectId` fields in the response. If this parameter is not specified, the default project will be used.
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
         * List of spread placement group IDs.
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
 * SyncImages request structure.
 * @class
 */
class SyncImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of image IDs. You can obtain the image IDs in two ways: <br><li>Call [DescribeImages](https://cloud.tencent.com/document/api/213/15715) and look for `ImageId` in the response. <br><li>Look for the information in the [Image Console](https://console.cloud.tencent.com/cvm/image). <br>The specified images must meet the following requirements: <br><li>The images must be in the `NORMAL` state. <br><li>The image size must be smaller than 50 GB. <br>For more information on image states, see [here](/document/api/213/9452#image_state).
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

        /**
         * List of destination regions for synchronization. A destination region must meet the following requirements: <br><li>It cannot be the source region. <br><li>It must be valid. <br><li>Currently some regions do not support image synchronization. <br>For specific regions, see [Region](https://cloud.tencent.com/document/product/213/6091).
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
         * Instance ID(s). The maximum number of instances in each request is 100. <br><br>You can obtain the available instance IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/index) to query the instance IDs. <br><li>Call [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of key pair IDs. The maximum number of key pairs in each request is 100. The key pair ID is in the format of `skey-11112222`. <br><br>You can obtain the available key pair IDs in two ways: <br><li>Log in to the [console](https://console.cloud.tencent.com/cvm/sshkey) to query the key pair IDs. <br><li>Call [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) and look for `KeyId` in the response.
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
         * The ID of the [project](https://cloud.tencent.com/document/product/378/10861) to which the created key pair belongs.<br><br>You can retrieve the project ID in two ways:<br><li>Query the project ID in [Project Management](https://console.cloud.tencent.com/project).<br><li>Call [DescribeProject](https://cloud.tencent.com/document/api/378/4400) and search for `projectId` in the response.

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
 * CreateImage response structure.
 * @class
 */
class CreateImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID
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
 * InquiryPriceResetInstancesInternetMaxBandwidth request structure.
 * @class
 */
class InquiryPriceResetInstancesInternetMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 100. When changing the bandwidth of instances with `BANDWIDTH_PREPAID` or `BANDWIDTH_POSTPAID_BY_HOUR` as the network billing method, you can only specify one instance at a time.
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
         * [Image](/document/product/213/4940) ID in the format of `img-xxx`. There are four types of images: <br/><li>Public images </li><li>Custom images </li><li>Shared images </li><li>Marketplace images </li><br/>You can obtain the available image IDs in the following ways: <br/><li>For IDs of `public images`, `custom images`, and `shared images`, log in to the [console](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE) to query the information; for IDs of `marketplace images`, go to [Cloud Marketplace](https://market.cloud.tencent.com/list). </li><li>Call [DescribeImages](https://cloud.tencent.com/document/api/213/15715) and look for `ImageId` in the response.</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * The instance [billing method](https://cloud.tencent.com/document/product/213/2180).<br><li>POSTPAID_BY_HOUR: hourly, pay-as-you-go<br>Default value: POSTPAID_BY_HOUR.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Configuration of prepaid instances. You can use the parameter to specify the attributes of prepaid instances, such as the subscription period and the auto-renewal plan. This parameter is required for prepaid instances.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * The instance model. Different resource specifications are specified for different models. For specific values, call [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749) to retrieve the latest specification list or refer to [Instance Types](https://cloud.tencent.com/document/product/213/11518). If the parameter is not specified, `S1.SMALL1` will be used by default.
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
         * Instance name to be displayed. <br><li>If this parameter is not specified, "Unnamed" will be displayed by default. </li><li>If you purchase multiple instances at the same time and specify a pattern string `{R:x}`, numbers `[x, x+n-1]` will be generated, where `n` represents the number of instances purchased. For example, you specify a pattern string, `server_{R:3}`. If you only purchase 1 instance, the instance will be named `server_3`; if you purchase 2, they will be named `server_3` and `server_4`. You can specify multiple pattern strings in the format of `{R:x}`. </li><li>If you purchase multiple instances at the same time and do not specify a pattern string, the instance names will be suffixed by `1, 2...n`, where `n` represents the number of instances purchased. For example, if you purchase 2 instances and the instance name body is `server_`, the instance names will be `server_1` and `server_2`.
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
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed. <br>For more information, see “How to ensure idempotency”.
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
         * A string used to ensure the idempotency of the request, which is generated by the user and must be unique to each request. The maximum length is 64 ASCII characters. If this parameter is not specified, the idempotency of the request cannot be guaranteed. <br>For more information, see “How to ensure idempotency”.
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
 * Describes data disk information.
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * The data disk size in GB. The minimum increment is 10 GB. Different types of data disks have different value ranges. For details, see [Instance Specifications](https://intl.cloud.tencent.com/document/product/213/11518). The default value is 0, indicating that no data disk is purchased. For more information, see the CVM documentation.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * The data disk type. For more information about the limits on different data disk types, see [Instance Specifications](/document/product/213/2177). Valid values: <br><li>LOCAL_BASIC: local disk<br><li>LOCAL_SSD: local SSD disk<br><li>CLOUD_BASIC: HDD cloud disk<br><li>CLOUD_PREMIUM: premium cloud storage<br><li>CLOUD_SSD: SSD cloud disk<br><br>Default value: LOCAL_BASIC.<br><br>This parameter is invalid for the `ResizeInstanceDisk` API.
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * Data disk ID. Data disks whose type is `LOCAL_BASIC` or `LOCAL_SSD` do not have an ID and do not support this parameter currently.
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
         * Key pair ID(s) in the format of `skey-11112222`. This API supports using multiple IDs as filters at the same time. For more information on the format of this parameter, see the `id.N` section in [API Introduction](https://cloud.tencent.com/document/api/213/15688). You cannot specify `KeyIds` and `Filters` at the same time. You can log in to the [console](https://console.cloud.tencent.com/cvm/index) to query the key pair IDs.
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * Filters.
<li> `project-id` - Integer - Optional - Filter results by project ID. To view the list of project IDs, you can go to [Project Management](https://console.cloud.tencent.com/project), or call [DescribeProject](https://cloud.tencent.com/document/api/378/4400) and look for `projectId` in the response. </li>
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
         * Operations on an instance.
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
         * Unsupported network types
Note: This field may return null, indicating that no valid value is found.
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
         * The ID of the instance used to create an image
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
         * Whether to enable Sysprep when creating a Windows image
         * @type {string || null}
         */
        this.Sysprep = null;

        /**
         * The ID of the data disk used to create an image
         * @type {Array.<string> || null}
         */
        this.DataDiskIds = null;

        /**
         * The ID of the snapshot used to create an image. A system disk snapshot must be included.
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * Verifies the validity of the request without affecting the resources involved.
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
         * Instance billing method. Valid values: <br><li>`PREPAID`: prepaid, i.e., monthly subscription <br><li>`POSTPAID_BY_HOUR`: pay-as-you-go <br><li>`CDHPAID`: you are only billed for the CDH instances, not the CVMs running on the CDHs. <br><li>`SPOTPAID`: you are billed based on your bid.
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
         * Auto renewal flag. Valid values: <br><li>`NOTIFY_AND_MANUAL_RENEW`: notify upon expiration, but do not renew automatically <br><li>`NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically <br><li>`DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify upon expiration nor renew automatically.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Creation time following the `ISO8601` standard and using `UTC` time in the format of `YYYY-MM-DDThh:mm:ssZ`.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Expiration time following the `ISO8601` standard and using `UTC` time in the format of `YYYY-MM-DDThh:mm:ssZ`.
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
         * 
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * 
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * 
         * @type {string || null}
         */
        this.LatestOperationRequestId = null;

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
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 1.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Instance model. Different resource specifications are specified for different models. For specific values, see the instance resource specification table. You can also obtain the latest specification list by calling the API for querying the list of instance resource specifications.
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
         * Whether to enable [Cloud Security](/document/product/296). Valid values: <br><li>TRUE: enable Cloud Security <br><li>FALSE: do not enable Cloud Security <br><br>Default value: TRUE.
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
 * Description of tags associated with resource instances during instance creation.
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the resources associated with the tags. Currently only "instance" and "host" are supported.
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
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 100. When changing the bandwidth of instances with `BANDWIDTH_PREPAID` or `BANDWIDTH_POSTPAID_BY_HOUR` as the network billing method, you can only specify one instance at a time.
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
 * Describes instance states. For state types, see [here](/document/api/213/9452#INSTANCE_STATE).
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
 * > Describes key-value pair filters used for conditional queries, such as filtering results by ID, name and state.
> * If there are multiple `Filter` parameters, the relationship among them will be logical `AND`.
> * If there are multiple `Values` for the same `Filter`, the relationship among the `Values` for the same `Filter` will be logical `OR`.
>
> Take the [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API as an example. You can use the following filters to query the instances whose availability zone (`zone`) is Guangzhou Zone 1 ***and*** billing method (`instance-charge-type`) is prepaid ***or*** pay-as-you-go:
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
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
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response.
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
 * Parameters related to the prepaid billing method, including the subscription period, the auto renewal logic, etc.
 * @class
 */
class ChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
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
 * Describes pricing information.
 * @class
 */
class ItemPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subsequent unit price (in RMB).
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Subsequent billing unit. Valid values: <br><li>HOUR: bill by hour. Scenarios using this billing unit include: pay as you go for instances on an hourly basis (`POSTPAID_BY_HOUR`), and pay as you go for bandwidth on an hourly basis (`BANDWIDTH_POSTPAID_BY_HOUR`). <br><li>GB: bill by traffic in GB. Scenarios using this billing unit include: pay as you go for traffic on an hourly basis (`TRAFFIC_POSTPAID_BY_HOUR`).
Note: This field may return null, indicating that no valid value is found.
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * Original price of a prepaid instance (in RMB).
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount price of a prepaid instance (in RMB).
Note: This field may return null, indicating that no valid value is found.
         * @type {number || null}
         */
        this.DiscountPrice = null;

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
         * Instance billing method. Valid values: <br><li>`PREPAID`: prepaid, i.e., monthly subscription <br><li>`POSTPAID_BY_HOUR`: pay-as-you-go <br><li>`CDHPAID`: you are only billed for the [CDH](https://cloud.tencent.com/document/product/416) instances, not the CVMs running on the CDHs. <br><li>`SPOTPAID`: you are billed based on your bid.
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
         * Filters.
<li> `zone` - String - Optional - Filter results by availability zone.</li>
<li> `project-id` - Integer - Optional - Filter results by project ID. You can call `DescribeProject` or log in to the console to view the list of existing projects. You can also create a new project by calling `AddProject`.</li>
<li> `host-id` - String - Optional - Filter results by CDH ID. CDH IDs are in the format of `host-11112222`.</li>
<li> `host-name` - String - Optional - Filter results by CDH instance name.</li>
<li> `host-state` - String - Optional - Filter results by CDH instance state. (PENDING: creating | LAUNCH_FAILURE: creation failed | RUNNING: running | EXPIRED: expired)</li>
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
         * Instance ID(s) in the format of `ins-xxxxxxxx`. For more information on the format of this parameter, see the `id.N` section of [API Introduction](https://cloud.tencent.com/document/api/213/15688). The maximum number of instances in each request is 100.
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
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
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
         * Spread placement group ID, which can be obtained by calling the [DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810) API.
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
         * Instance ID(s) in the format of `ins-xxxxxxxx`. For more information on the format of this parameter, see the `id.N` section of [API Introduction](https://cloud.tencent.com/document/api/213/15688). The maximum number of instances in each request is 100. You cannot specify `InstanceIds` and `Filters` at the same time.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Filters.
<li> `zone` - String - Optional - Filter results by availability zone.</li>
<li> `project-id` - Integer - Optional - Filter results by project ID. You can call [DescribeProject](https://cloud.tencent.com/document/api/378/4400) or log in to the [console](https://console.cloud.tencent.com/cvm/index) to view the list of existing projects. You can also create a new project by calling [AddProject](https://cloud.tencent.com/document/api/378/4398).</li>
<li> `host-id` - String - Optional - Filter results by [CDH](https://cloud.tencent.com/document/product/416) ID. [CDH](https://cloud.tencent.com/document/product/416) ID format: `host-xxxxxxxx`.</li>
</li>`vpc-id` - String - Optional - Filter results by VPC ID. VPC ID format: `vpc-xxxxxxxx`.</li>
<li> `subnet-id` - String - Optional - Filter results by subnet ID. Subnet ID format: `subnet-xxxxxxxx`.</li>
</li>`instance-id` - String - Optional - Filter results by instance ID. Instance ID format: `ins-xxxxxxxx`.</li>
</li>`security-group-id` - String - Optional - Filter results by security group ID. Security group ID format: `sg-8jlk3f3r`.</li>
</li>`instance-name` - String - Optional - Filter results by instance name.</li>
</li>`instance-charge-type` - String - Optional - Filter results by instance billing method. `POSTPAID_BY_HOUR`: pay-as-you-go | `CDHPAID`: you are only billed for [CDH](https://cloud.tencent.com/document/product/416) instances, not the CVMs running on the [CDH](https://cloud.tencent.com/document/product/416) instances.</li>
</li>`private-ip-address` - String - Optional - Filter results by the private IP address of the instance’s primary ENI.</li>
</li>`public-ip-address` - String - Optional - Filter results by the public IP address of the instance’s primary ENI, including the IP addresses automatically assigned during the instance creation and the EIPs manually associated after the instance creation.</li>
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
         * Instance ID(s). To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response. The maximum number of instances in each request is 100.
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
         * List of image IDs, such as `img-gvbnzy6f`. For the format of array-type parameters, see [API Introduction](https://cloud.tencent.com/document/api/213/15688). You can obtain the image IDs in two ways: <br><li>Call [DescribeImages](https://cloud.tencent.com/document/api/213/15715) and look for `ImageId` in the response. <br><li>View the image IDs in the [Image Console](https://console.cloud.tencent.com/cvm/image).
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
         * Offset; default value: 0. For more information on `Offset`, see [API Introduction](/document/api/213/568#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results returned; default value: 20; maximum: 100. For more information on `Limit`, see [API Introduction](/document/api/213/568#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89).
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
         * Image ID such as `img-gvbnzy6f`. You can obtain the image IDs in two ways: <br><li>Call [DescribeImages](https://cloud.tencent.com/document/api/213/15715) and look for `ImageId` in the response. <br><li>Look for the information in the [Image Console](https://console.cloud.tencent.com/cvm/image).
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
         * ID(s) of the instance(s) to be disassociated，such as `ins-lesecurk`. You can specify multiple instances.
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
 * Describes information related to the Cloud Monitor service.
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable [Cloud Monitor](/document/product/248). Valid values: <br><li>TRUE: enable Cloud Monitor <br><li>FALSE: do not enable Cloud Monitor <br><br>Default value: TRUE.
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
         * 
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC subnet ID in the format `subnet-xxx`. To obtain valid subnet IDs, you can log in to the [console](https://console.cloud.tencent.com/vpc/subnet?rid=1) or call [DescribeSubnets](/document/api/215/15784) and look for the `unSubnetId` fields in the response. If you specify `DEFAULT` for both `SubnetId` and `VpcId` when creating an instance, the default VPC will be used.
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
         * 
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
         * Instance ID. To obtain the instance IDs, you can call [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) and look for `InstanceId` in the response.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Configuration of data disks to be expanded. Currently you can only use the API to expand non-elastic data disks whose [disk type](/document/api/213/9452#block_device) is `CLOUD_BASIC`, `CLOUD_PREMIUM`, or `CLOUD_SSD`. You can use [`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315) to check whether a disk is elastic. If the `Portable` field in the response is `false`, it means that the disk is not elastic. Data disk capacity unit: GB; minimum increment: 10 GB. For more information on selecting the data disk type, see the product overview on cloud disks. Available data disk types are subject to the instance type (`InstanceType`). In addition, the maximum capacity allowed for expansion varies by data disk type.
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
         * Network billing method. Valid values: <br><li>BANDWIDTH_PREPAID: prepaid; billed by bandwidth <br><li>TRAFFIC_POSTPAID_BY_HOUR: pay-as-you-go; billed by traffic on an hourly basis <br><li>BANDWIDTH_POSTPAID_BY_HOUR: pay-as-you-go; billed by bandwidth on an hourly basis <br><li>BANDWIDTH_PACKAGE: for bandwidth package users <br>Default value: same as the instance billing method for non-bandwidth package users.
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * The maximum outbound bandwidth of the public network, in Mbps. The default value is 0 Mbps. The upper limit of bandwidth varies for different models. For more information, see [Purchase Network Bandwidth](https://cloud.tencent.com/document/product/213/12523).
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Whether to assign a public IP. Valid values: <br><li>TRUE: Assign a public IP <br><li>FALSE: Do not assign a public IP <br><br>If the public network bandwidth is greater than 0 Mbps, you can choose whether to assign a public IP; by default a public IP will be assigned. If the public network bandwidth is 0 Mbps, you will not be able to assign a public IP.
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

        /**
         * Bandwidth package ID. To obatin the IDs, you can call [`DescribeBandwidthPackages`](https://cloud.tencent.com/document/api/215/19209) and look for the `BandwidthPackageId` fields in the response.
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
    RebootInstancesRequest: RebootInstancesRequest,
    AssociateInstancesKeyPairsRequest: AssociateInstancesKeyPairsRequest,
    ImportKeyPairResponse: ImportKeyPairResponse,
    DescribeInstancesStatusResponse: DescribeInstancesStatusResponse,
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
    ModifyInstancesAttributeResponse: ModifyInstancesAttributeResponse,
    ModifyImageSharePermissionResponse: ModifyImageSharePermissionResponse,
    DescribeInstancesOperationLimitResponse: DescribeInstancesOperationLimitResponse,
    SyncImagesResponse: SyncImagesResponse,
    DescribeZoneInstanceConfigInfosResponse: DescribeZoneInstanceConfigInfosResponse,
    ModifyInstancesAttributeRequest: ModifyInstancesAttributeRequest,
    CreateDisasterRecoverGroupResponse: CreateDisasterRecoverGroupResponse,
    StartInstancesRequest: StartInstancesRequest,
    Tag: Tag,
    Placement: Placement,
    DescribeDisasterRecoverGroupsRequest: DescribeDisasterRecoverGroupsRequest,
    SyncImagesRequest: SyncImagesRequest,
    DisassociateInstancesKeyPairsRequest: DisassociateInstancesKeyPairsRequest,
    InstanceMarketOptionsRequest: InstanceMarketOptionsRequest,
    ImportKeyPairRequest: ImportKeyPairRequest,
    CreateImageResponse: CreateImageResponse,
    StopInstancesResponse: StopInstancesResponse,
    DescribeImageQuotaRequest: DescribeImageQuotaRequest,
    InquiryPriceResetInstancesInternetMaxBandwidthRequest: InquiryPriceResetInstancesInternetMaxBandwidthRequest,
    ResetInstancesPasswordResponse: ResetInstancesPasswordResponse,
    InquiryPriceRunInstancesRequest: InquiryPriceRunInstancesRequest,
    Image: Image,
    DescribeDisasterRecoverGroupQuotaResponse: DescribeDisasterRecoverGroupQuotaResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    CreateDisasterRecoverGroupRequest: CreateDisasterRecoverGroupRequest,
    DescribeImportImageOsResponse: DescribeImportImageOsResponse,
    ModifyKeyPairAttributeResponse: ModifyKeyPairAttributeResponse,
    DataDisk: DataDisk,
    DescribeKeyPairsRequest: DescribeKeyPairsRequest,
    OperationCountLimit: OperationCountLimit,
    DeleteDisasterRecoverGroupsResponse: DeleteDisasterRecoverGroupsResponse,
    HostItem: HostItem,
    Externals: Externals,
    CreateImageRequest: CreateImageRequest,
    Instance: Instance,
    EnhancedService: EnhancedService,
    InquiryPriceResetInstancesTypeRequest: InquiryPriceResetInstancesTypeRequest,
    DescribeInstanceVncUrlResponse: DescribeInstanceVncUrlResponse,
    DescribeDisasterRecoverGroupsResponse: DescribeDisasterRecoverGroupsResponse,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    ActionTimer: ActionTimer,
    TagSpecification: TagSpecification,
    ResetInstancesInternetMaxBandwidthRequest: ResetInstancesInternetMaxBandwidthRequest,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    ImportImageRequest: ImportImageRequest,
    SpotMarketOptions: SpotMarketOptions,
    DescribeImportImageOsRequest: DescribeImportImageOsRequest,
    CreateKeyPairRequest: CreateKeyPairRequest,
    InstanceStatus: InstanceStatus,
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
    ChargePrepaid: ChargePrepaid,
    DescribeInternetChargeTypeConfigsResponse: DescribeInternetChargeTypeConfigsResponse,
    DescribeZoneInstanceConfigInfosRequest: DescribeZoneInstanceConfigInfosRequest,
    ItemPrice: ItemPrice,
    InstanceTypeQuotaItem: InstanceTypeQuotaItem,
    ImageOsList: ImageOsList,
    InquiryPriceRunInstancesResponse: InquiryPriceRunInstancesResponse,
    DescribeHostsRequest: DescribeHostsRequest,
    DescribeInstancesStatusRequest: DescribeInstancesStatusRequest,
    InquiryPriceResizeInstanceDisksResponse: InquiryPriceResizeInstanceDisksResponse,
    TerminateInstancesRequest: TerminateInstancesRequest,
    SharePermission: SharePermission,
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
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    ModifyHostsAttributeRequest: ModifyHostsAttributeRequest,
    KeyPair: KeyPair,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    ResetInstanceResponse: ResetInstanceResponse,
    VirtualPrivateCloud: VirtualPrivateCloud,
    ModifyDisasterRecoverGroupAttributeResponse: ModifyDisasterRecoverGroupAttributeResponse,
    DescribeInstanceTypeConfigsResponse: DescribeInstanceTypeConfigsResponse,
    ResizeInstanceDisksRequest: ResizeInstanceDisksRequest,
    StorageBlock: StorageBlock,
    InternetAccessible: InternetAccessible,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    Snapshot: Snapshot,
    ModifyInstancesProjectResponse: ModifyInstancesProjectResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    Price: Price,

}
