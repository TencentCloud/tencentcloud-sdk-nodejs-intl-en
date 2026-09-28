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
const AbstractModel = require("../../common/abstract_model");

/**
 * NotifyUnbindTarget request structure.
 * @class
 */
class NotifyUnbindTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP list of the backend service.
> **VpcId** (**NumericVpcId**) and **Ips** must be set simultaneously.
         * @type {Array.<string> || null}
         */
        this.Ips = null;

        /**
         * Numeric ID of the VPC that the backend service belongs to.
> **VpcId** (**NumericVpcId**) and **Ips** must be set simultaneously.
         * @type {number || null}
         */
        this.NumericVpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ips = 'Ips' in params ? params.Ips : null;
        this.NumericVpcId = 'NumericVpcId' in params ? params.NumericVpcId : null;

    }
}

/**
 * DescribeQuota request structure.
 * @class
 */
class DescribeQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of quota types. Supports inputting multiple quota types at the same time. When querying resource-level quotas, can be used in conjunction with ResourceIds to input the corresponding resource IDs. To return the used amount and available amount, input used and available in DisplayFields.

Enumeration description:
- alb_quota_loadbalancers_num: Number of ALB instances creatable per region.
- alb_quota_targetgroups_num: Number of ALB target groups creatable per region.
-alb_quota_loadbalancer_listeners_num: Number of listeners creatable for each ALB instance. For ResourceIds, fill in the ALB instance ID.
-alb_quota_loadbalancer_rules_num: Number of forwarding rules that can be added to each ALB instance, excluding the default rule. For ResourceIds, fill in the ALB instance ID.
-alb_quota_loadbalancer_certificates_num: Number of additional certificates that can be added to each ALB instance, excluding the default certificate. For ResourceIds, fill in the ALB instance ID.
-alb_quota_loadbalancer_targetgroup_num: The number of target groups that can be bound to each ALB instance. Fill in the ALB instance ID in ResourceIds.
-alb_quota_loadbalancer_servers_num: Number of real servers that can be added to each ALB instance. For ResourceIds, fill in the ALB instance ID.
-alb_quota_server_added_num: Number of times one real server IP can be added to an ALB backend target group.
-alb_quota_targetgroup_attached_num: The number of times each target group can be associated with ALB forwarding rules. Fill in the target group ID in ResourceIds.
-alb_quota_targetgroup_targets_num: Number of real servers supported by each target group. It is applicable to IP and port type backends. For ResourceIds, fill in the target group ID.
-alb_quota_targetgroup_targets_num_scf: Number of SCF function backends supported by each target group. For ResourceIds, fill in the target group ID.
-alb_quota_max_request_timeout: Maximum timeout time configurable for a connection request when a listener is created.
-alb_quota_max_idle_timeout: Maximum idle timeout that can be configured for a connection when a listener is created.
-alb_quota_listener_certificates_num: Number of certificates that can be added to each listener. For ResourceIds, fill in the listener ID.
-alb_quota_rule_targetgroups_num: Number of target groups that can be bound to a forwarding rule.
-alb_quota_rule_conditions_num: Number of match conditions that can be added to a forwarding rule.
-alb_quota_rule_wildcards_num: Number of match entries containing wildcards that can be added to a single forwarding rule.
-alb_quota_rule_actions_num: Number of action entries that can be added to a single forwarding rule.
-alb_quota_cipher_template_listeners_num: Number of listeners that can be associated with each encryption suite template.
-alb_quota_healthcheck_templates_num: Number of health check templates that can be created per region.
-alb_quota_securitygroup_templates_num: Number of security groups that can be bound to one ALB instance.
-alb_quota_securitygroup_rules_per_sg_num: Number of rule entries supported by one security group in one ALB instance.
-alb_quota_security_policies_num: Number of custom security policies creatable per region.
         * @type {Array.<string> || null}
         */
        this.QuotaTypes = null;

        /**
         * Field display list used to control whether to additionally return usage information. Supports used and available: used means to return the currently used amount, and available means to return the current remaining available amount. QuotaType and Limit are always returned. ResourceId will be returned when ResourceIds are input in the request.
         * @type {Array.<string> || null}
         */
        this.DisplayFields = null;

        /**
         * Resource ID list. Used for querying the quota and amount at the specific resource dimension. If not specified, the default quota configuration at the account or region level is queried. The type of resource ID is determined by QuotaTypes. For example, for ALB instance-level quotas, fill in the ALB instance ID; for listener-level quotas, fill in the listener ID; for target group-level quotas, fill in the target group ID.
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuotaTypes = 'QuotaTypes' in params ? params.QuotaTypes : null;
        this.DisplayFields = 'DisplayFields' in params ? params.DisplayFields : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

    }
}

/**
 * InquirePriceCreateLoadBalancer request structure.
 * @class
 */
class InquirePriceCreateLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing type of the instance. Default value: POSTPAID_BY_HOUR. Only value: POSTPAID_BY_HOUR, which indicates pay-as-you-go billing.
         * @type {string || null}
         */
        this.ChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

    }
}

/**
 * DeleteRules request structure.
 * @class
 */
class DeleteRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID, in the format of lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * List of forwarding rule IDs. Each ID is in the format of `rule-` followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

        /**
         * Whether it is pre-check only for this request.
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * SetLoadBalancerSecurityGroups response structure.
 * @class
 */
class SetLoadBalancerSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * AZ and subnet mapping structure for purchase or modification
 * @class
 */
class ZoneMappingsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Subnet ID.</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Availability zone ID. A maximum of 10 availability zones can be added. If the current region supports 2 or more availability zones, at least 2 availability zones are required.<br>You can obtain the availability zone information corresponding to the availability zone ID through the <a href="https://www.tencentcloud.com/document/api/1822/133727?from_cn_redirect=1">DescribeZones</a> API.</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>ID of the EIP bound to the public network instance.</p>
         * @type {LoadBalancerAddress || null}
         */
        this.LoadBalancerAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.LoadBalancerAddress) {
            let obj = new LoadBalancerAddress();
            obj.deserialize(params.LoadBalancerAddress)
            this.LoadBalancerAddress = obj;
        }

    }
}

/**
 * Load balancing details
 * @class
 */
class LoadBalancerDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access log configuration.
         * @type {AccessLogConfig || null}
         */
        this.AccessLogConfig = null;

        /**
         * IP address version. Value: IPv4 or IPv6.
         * @type {string || null}
         */
        this.AddressIpVersion = null;

        /**
         * Network address type of the application CLB instance. Valid values:

- **Internet/Public**: The load balancing has a public IP address, and the DNS domain name is resolved to the public IP, so it can be accessed via the public network.

- **Intranet/Internal**: The load balancer only has a private IP address, and the DNS domain name resolves to the private IP, so it can only be accessed from the private network environment of the VPC where the load balancer is located.


         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * Resource creation time in the format of `yyyy-MM-ddTHH:mm:ss±hh:mm`.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Deletion protection setting information.
         * @type {DeletionProtectionConfig || null}
         */
        this.DeletionProtection = null;

        /**
         * DNS domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Billing configuration information of a load balancing instance.
         * @type {LoadBalancerBillingConfig || null}
         */
        this.LoadBalancerBillingConfig = null;

        /**
         * CLB instance ID, in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Instance name.

Length: 1 to 80 characters. It can contain Chinese, letters, digits, hyphens (-), forward slashes (/), half-width periods (.), and underscores (_).
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Application CLB operation lock configuration.
         * @type {Array.<LoadBalancerOperationLocksItem> || null}
         */
        this.LoadBalancerOperationLocks = null;

        /**
         * Application CLB instance status. Valid values:

- **Provisioning**: Under creation.
- **Active**: Running.
- **Configuring**: The configuration is being changed.
- **Deleting**: deleting.
- **ProvisionFailed**: Creation failed.
- **ConfigureFailed**: Configuration adjustment failure.
- **DeletionFailed**: Deletion failed.
- **Abnormal**: abnormal status. For the specific exception reason, see the LoadBalancerOperationLocks field.
         * @type {string || null}
         */
        this.LoadBalancerStatus = null;

        /**
         * Protection configuration modification information.
         * @type {ModificationProtectionInfo || null}
         */
        this.ModificationProtection = null;

        /**
         * ID set of the security group bound to the application CLB instance.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Tag.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Virtual Private Cloud (VPC) ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Mapping list of AZs and subnets. A maximum of 10 AZs can be returned. If the current region supports 2 or more AZs, at least 2 AZs are returned.
         * @type {Array.<ZoneMappingInfo> || null}
         */
        this.ZoneMappings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessLogConfig) {
            let obj = new AccessLogConfig();
            obj.deserialize(params.AccessLogConfig)
            this.AccessLogConfig = obj;
        }
        this.AddressIpVersion = 'AddressIpVersion' in params ? params.AddressIpVersion : null;
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.DeletionProtection) {
            let obj = new DeletionProtectionConfig();
            obj.deserialize(params.DeletionProtection)
            this.DeletionProtection = obj;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.LoadBalancerBillingConfig) {
            let obj = new LoadBalancerBillingConfig();
            obj.deserialize(params.LoadBalancerBillingConfig)
            this.LoadBalancerBillingConfig = obj;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

        if (params.LoadBalancerOperationLocks) {
            this.LoadBalancerOperationLocks = new Array();
            for (let z in params.LoadBalancerOperationLocks) {
                let obj = new LoadBalancerOperationLocksItem();
                obj.deserialize(params.LoadBalancerOperationLocks[z]);
                this.LoadBalancerOperationLocks.push(obj);
            }
        }
        this.LoadBalancerStatus = 'LoadBalancerStatus' in params ? params.LoadBalancerStatus : null;

        if (params.ModificationProtection) {
            let obj = new ModificationProtectionInfo();
            obj.deserialize(params.ModificationProtection)
            this.ModificationProtection = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.ZoneMappings) {
            this.ZoneMappings = new Array();
            for (let z in params.ZoneMappings) {
                let obj = new ZoneMappingInfo();
                obj.deserialize(params.ZoneMappings[z]);
                this.ZoneMappings.push(obj);
            }
        }

    }
}

/**
 * CreateLoadBalancer request structure.
 * @class
 */
class CreateLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Address type of the application CLB.

- **Internet**: The load balancing has a public IP address, and the DNS domain name is resolved to the public IP, so it can be accessed via the public network.

- **Intranet**: The load balancer has only a private IP address, and the DNS domain name is resolved to the private IP, so it can only be accessed from the private network environment of the VPC where the load balancer resides.
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * Billing configuration of an application CLB instance.
         * @type {LoadBalancerBillingConfig || null}
         */
        this.LoadBalancerBillingConfig = null;

        /**
         * Virtual Private Cloud (VPC) ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * AZ and private network subnet mapping list. A maximum of 10 AZs can be added. If the current region supports 2 or more AZs, a minimum of 2 AZs are required.
         * @type {Array.<ZoneMappingsItem> || null}
         */
        this.ZoneMappings = null;

        /**
         * IP address version. Value: IPv4 or IPv6.
         * @type {string || null}
         */
        this.AddressIpVersion = null;

        /**
         * Client Token, used for ensuring the idempotency of requests.

Generate a parameter value from your client to underwrite the uniqueness of the value for different requests. ClientToken supports only ASCII characters.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Deletion protection configuration.
         * @type {DeletionProtectionConfig || null}
         */
        this.DeleteProtection = null;

        /**
         * Whether to only precheck this request. Parameter Value:

- **true**: Send a check request without creating an application CLB instance. Check items include whether required parameters are filled in, request format, and service limits. If the check fails, return the corresponding error. If the check passes, return the error code `DryRunOperation`.

- **false** (default value): Send a normal request. After the check is passed, return HTTP 2xx status code and directly perform the operation.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * EIP address type. Valid values:
- **EIP**: Ordinary Elastic IP
- **AntiDDoSEIP**: Anti-DDoS EIP
- **AnycastEIP**: Accelerated EIP
-**HighQualityEIP**: High Quality IP. High Quality IP is supported only in Singapore and Hong Kong (China).
- **ResidentialEIP**: natively assigned IP

Default if not passed: EIP.
         * @type {string || null}
         */
        this.InternetAddressType = null;

        /**
         * Application CLB instance name. It contains 1-80 characters, including Chinese characters, letters, digits, dashes (-), forward slashes (/), half-width periods (.), and underscores (_).
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Tag.
         * @type {Array.<TagInfo> || null}
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
        this.AddressType = 'AddressType' in params ? params.AddressType : null;

        if (params.LoadBalancerBillingConfig) {
            let obj = new LoadBalancerBillingConfig();
            obj.deserialize(params.LoadBalancerBillingConfig)
            this.LoadBalancerBillingConfig = obj;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.ZoneMappings) {
            this.ZoneMappings = new Array();
            for (let z in params.ZoneMappings) {
                let obj = new ZoneMappingsItem();
                obj.deserialize(params.ZoneMappings[z]);
                this.ZoneMappings.push(obj);
            }
        }
        this.AddressIpVersion = 'AddressIpVersion' in params ? params.AddressIpVersion : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.DeleteProtection) {
            let obj = new DeletionProtectionConfig();
            obj.deserialize(params.DeleteProtection)
            this.DeleteProtection = obj;
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.InternetAddressType = 'InternetAddressType' in params ? params.InternetAddressType : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * ModifyLoadBalancerAttributes request structure.
 * @class
 */
class ModifyLoadBalancerAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Client Token, used to ensure request idempotency.

Generate a parameter value from your client to underwrite the uniqueness of the value for different requests. ClientToken supports only ASCII characters.

> If not specified, the system automatically uses the **RequestId** of the API request as the **ClientToken** ID. The **RequestId** of each API request may not be the same.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Deletion protection configuration
         * @type {DeletionProtectionConfig || null}
         */
        this.DeletionProtection = null;

        /**
         * Whether to only precheck this request. Parameter Value:

- **true**: Send a check request without modifying the properties of the application CLB instance. Check items include whether required parameters are filled in, request format, and service limits. If the check fails, return the corresponding error. If the check passes, return the error code `DryRunOperation`.

- **false** (default value): Send a normal request, return `HTTP_2xx` status code after check, and directly perform the operation.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Application CLB instance name. It contains 1-80 characters, including Chinese characters, letters, digits, dashes (-), forward slashes (/), half-width periods (.), and underscores (_).
         * @type {string || null}
         */
        this.LoadBalancerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.DeletionProtection) {
            let obj = new DeletionProtectionConfig();
            obj.deserialize(params.DeletionProtection)
            this.DeletionProtection = obj;
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

    }
}

/**
 * DisassociateBandwidthPackageFromLoadBalancer request structure.
 * @class
 */
class DisassociateBandwidthPackageFromLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bandwidth package ID.
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Client Token, used for ensuring the idempotency of requests.

Generate a parameter value from your client to underwrite the uniqueness of the value for different requests. ClientToken supports only ASCII characters.

> If not specified, the system automatically uses the **RequestId** of the API request as the **ClientToken** ID. The **RequestId** of each API request may not be the same.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Whether to only precheck this request. Parameter Value:
- **true**: Send a check request without removing the Bandwidth Package from the load balancing instance. Check items include whether required parameters are filled in, request format, and service limits. If the check fails, return the corresponding error. If the check passes, return the error code `DryRunOperation`.
- **false** (default value): Send a normal request, return HTTP 2xx status code after check, and directly perform the operation.
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
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * CreateHealthCheckTemplate request structure.
 * @class
 */
class CreateHealthCheckTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to preview this request.
- **false** (default): Send a normal request to directly modify the health check template.
- **true**: Send a preview request to check whether the parameters, format, and service limits of the health check template to modify meet the requirements.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Health check status code. Value:
- When the health check protocol is **HTTP/HTTPS**:
	- **http_1xx**
	- **http_2xx** (default value)
	-  **http_3xx**
	-  **http_4xx**
	-  **http_5xx**
- When the health check protocol is **GRPC/GRPCS**: the default value is **12**, the value range is **0-99**, and the input value can be a numerical value, multiple values, a range, or a composite, for example:
	- **"20"**
	- **"0-99"**
         * @type {Array.<string> || null}
         */
        this.HealthCheckCodes = null;

        /**
         * Threshold for determining backend service health. After the health check succeeds consecutively for this number of times, the backend service status changes from **unhealthy** to **healthy**.
Value range: **2**-**10**.
Default value: **2**.
         * @type {number || null}
         */
        this.HealthCheckHealthyThreshold = null;

        /**
         * Health check domain name.
Length limit: **1–255** characters.
It can contain lowercase letters, digits, dashes (-), and half-width periods (.).

> This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP/HTTPS/GRPC/GRPCS**.
         * @type {string || null}
         */
        this.HealthCheckHost = null;

        /**
         * HTTP version for health check. Value:
- **HTTP1.1** (default)
- **HTTP1.0** 
> This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
         * @type {string || null}
         */
        this.HealthCheckHttpVersion = null;

        /**
         * The interval of health check. Unit: second. Value range: **2**-**300**. Default value: **5**.
         * @type {number || null}
         */
        this.HealthCheckInterval = null;

        /**
         * Health check method. Valid values: - **GET** - **HEAD** (default value) 
> This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
         * @type {string || null}
         */
        this.HealthCheckMethod = null;

        /**
         * Forwarding rule path for health check. Length: **1-80** characters. Only can use letters, numbers, characters `-/.%?#&=` as well as extended characters `_;~!（)*[]@$^:',+`. The URL must start with a forward slash (/). 
> The forwarding rule path parameter takes effect only when **HealthCheckProtocol** is **HTTP/HTTPS/GRPC/GRPCS**.
         * @type {string || null}
         */
        this.HealthCheckPath = null;

        /**
         * Health check access to the backend server port. Value range: **0-65535**. Default value: **0**, which means the backend server port.
         * @type {number || null}
         */
        this.HealthCheckPort = null;

        /**
         * Health check protocol. Valid values:
- **HTTP** (default): Check whether the server application is healthy by sending HEAD or GET requests to simulate browser access requests.
- **HTTPS**: Check whether the server application is healthy by sending HEAD or GET requests to simulate browser access requests. (Data encryption, more secure compared with HTTP.)
- **TCP**: Detect whether the server port is alive by sending SYN handshake messages.
- **GRPC**: Check whether the server application is healthy by sending a POST or GET request.
- **GRPCS**: Check whether the server application is healthy by sending a POST or GET request.
         * @type {string || null}
         */
        this.HealthCheckProtocol = null;

        /**
         * Health check template name. It must be 1-255 characters long and can contain digits, upper- and lower-case letters, Chinese characters, half-width periods (.), underscores (_), and dashes (-).
         * @type {string || null}
         */
        this.HealthCheckTemplateName = null;

        /**
         * timeout period for the health check. Unit: seconds.
Valid values: **2**-**60**.
Default value: **2**.
         * @type {number || null}
         */
        this.HealthCheckTimeout = null;

        /**
         * Threshold for determining an unhealthy backend service. The backend service status changes from healthy to unhealthy after the health check fails consecutively for this number of times.
Value range: **2**-**10**.
Default value: **2**.
         * @type {number || null}
         */
        this.HealthCheckUnhealthyThreshold = null;

        /**
         * Tag.
         * @type {Array.<TagInfo> || null}
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
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.HealthCheckCodes = 'HealthCheckCodes' in params ? params.HealthCheckCodes : null;
        this.HealthCheckHealthyThreshold = 'HealthCheckHealthyThreshold' in params ? params.HealthCheckHealthyThreshold : null;
        this.HealthCheckHost = 'HealthCheckHost' in params ? params.HealthCheckHost : null;
        this.HealthCheckHttpVersion = 'HealthCheckHttpVersion' in params ? params.HealthCheckHttpVersion : null;
        this.HealthCheckInterval = 'HealthCheckInterval' in params ? params.HealthCheckInterval : null;
        this.HealthCheckMethod = 'HealthCheckMethod' in params ? params.HealthCheckMethod : null;
        this.HealthCheckPath = 'HealthCheckPath' in params ? params.HealthCheckPath : null;
        this.HealthCheckPort = 'HealthCheckPort' in params ? params.HealthCheckPort : null;
        this.HealthCheckProtocol = 'HealthCheckProtocol' in params ? params.HealthCheckProtocol : null;
        this.HealthCheckTemplateName = 'HealthCheckTemplateName' in params ? params.HealthCheckTemplateName : null;
        this.HealthCheckTimeout = 'HealthCheckTimeout' in params ? params.HealthCheckTimeout : null;
        this.HealthCheckUnhealthyThreshold = 'HealthCheckUnhealthyThreshold' in params ? params.HealthCheckUnhealthyThreshold : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeListenerHealthStatus request structure.
 * @class
 */
class DescribeListenerHealthStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID, in the format of lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Cloud Load Balancer instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Whether the health check result contains forwarding rules. If false, only return the health status of the default forwarding rule. If true, return the health status of all rules (including the default rule).
Valid values:
true: yes
`false` (default value): no.
         * @type {boolean || null}
         */
        this.IncludeRule = null;

        /**
         * Maximum number of data records read this time.
Value: 1-100.
Default value: 20
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for querying the next page. Not required for the first query.
         * @type {string || null}
         */
        this.NextToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.IncludeRule = 'IncludeRule' in params ? params.IncludeRule : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * HTTP Header information.
 * @class
 */
class HTTPHeaderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of the HTTP Header. Length: 1–40 characters. Supported character sets: a-z a-z 0-9 - _
Chinese characters are not allowed. No support for Host and Cookie.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value of the HTTP Header. Length: 1-128 characters. Printable characters supported.
Unsupported. It cannot begin or end with a space, and cannot end with a backslash.
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DeleteHealthCheckTemplates request structure.
 * @class
 */
class DeleteHealthCheckTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check template ID list. The ID format is `hct-` followed by alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.HealthCheckTemplateIds = null;

        /**
         * Whether to preview this request.
- **false** (default): Send a normal request to directly delete the template.
- **true**: Send a preview request to check whether the parameters, format, and service limits of the template to delete meet the requirements.
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
        this.HealthCheckTemplateIds = 'HealthCheckTemplateIds' in params ? params.HealthCheckTemplateIds : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * ModifyLoadBalancerAttributes response structure.
 * @class
 */
class ModifyLoadBalancerAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * IP information in the data structure of the availability zone subnet mapping for an application CLB
 * @class
 */
class LoadBalancerAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPv4 address list
         * @type {Array.<IPAddressInfo> || null}
         */
        this.IPv4Address = null;

        /**
         * IPv6 address list
         * @type {Array.<IPAddressInfo> || null}
         */
        this.IPv6Address = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IPv4Address) {
            this.IPv4Address = new Array();
            for (let z in params.IPv4Address) {
                let obj = new IPAddressInfo();
                obj.deserialize(params.IPv4Address[z]);
                this.IPv4Address.push(obj);
            }
        }

        if (params.IPv6Address) {
            this.IPv6Address = new Array();
            for (let z in params.IPv6Address) {
                let obj = new IPAddressInfo();
                obj.deserialize(params.IPv6Address[z]);
                this.IPv6Address.push(obj);
            }
        }

    }
}

/**
 * NotifyUnbindTarget response structure.
 * @class
 */
class NotifyUnbindTargetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Backend service output parameter.
 * @class
 */
class TargetOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network-interface ID.
         * @type {string || null}
         */
        this.EniId = null;

        /**
         * Port used by the real server. Value range: **1-65535**.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Backend service instance ID. For a CVM instance, the format is "ins-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Backend service IP. At least one of **TargetIp** and **TargetId** is required.

- When the server group is of the **Instance** type, this parameter is the primary or secondary private IP of **Eni**.

         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * Backend service name. Currently, only CVM backend services return a valid name.
         * @type {string || null}
         */
        this.TargetName = null;

        /**
         * Backend service status. Valid values:
- **Adding**: Adding.
- **Active**: available status.
- **Configuring**: configuration in progress.
- **Removing**: removing.
         * @type {string || null}
         */
        this.TargetStatus = null;

        /**
         * Backend service type.
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Weight of the backend service. Value range: **0-100**. Default value: **100**. If the weight is set to **0**, no request will be forwarded to this backend service.
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EniId = 'EniId' in params ? params.EniId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;
        this.TargetStatus = 'TargetStatus' in params ? params.TargetStatus : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * CreateHealthCheckTemplate response structure.
 * @class
 */
class CreateHealthCheckTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Health check template ID. The format is `hct-` followed by alphanumeric characters. All APIs (create, query, modify, delete) use the `hct-` prefix.
         * @type {string || null}
         */
        this.HealthCheckTemplateId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.HealthCheckTemplateId = 'HealthCheckTemplateId' in params ? params.HealthCheckTemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyHealthCheckTemplate request structure.
 * @class
 */
class ModifyHealthCheckTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Health check template ID. The format is `hct-` followed by alphanumeric characters.</p>
         * @type {string || null}
         */
        this.HealthCheckTemplateId = null;

        /**
         * <p>Whether to preview this request.</p><ul><li><strong>false</strong> (default): Send a normal request to directly modify the health check template.</li><li><strong>true</strong>: Send a preview request to check whether the parameters, format, and service limits of the modified health check template meet the requirements.</li></ul>
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * <p>Health check status code. Value:</p><ul><li>When the health check protocol is <strong>HTTP/HTTPS</strong>:<ul><li><strong>HTTP_1xx</strong></li><li><strong>HTTP_2xx</strong> (default value)</li><li><strong>HTTP_3xx</strong></li><li><strong>HTTP_4xx</strong></li><li><strong>HTTP_5xx</strong></li></ul></li><li>When the health check protocol is <strong>GRPC/GRPCS</strong>: the default value is <strong>12</strong>, the value range is <strong>0-99</strong>, and the input value can be a numerical value, multiple values, a range, or a combination, for example:<ul><li><strong>"20"</strong></li><li><strong>"0-99"</strong></li></ul></li></ul>
         * @type {Array.<string> || null}
         */
        this.HealthCheckCodes = null;

        /**
         * <p>Threshold for determining backend service health. After the health check succeeds consecutively for this number of times, the backend service status changes from <strong>unhealthy</strong> to <strong>healthy</strong>.<br>Value range: <strong>2</strong>-<strong>10</strong>.<br>Default value: <strong>2</strong>.</p>
         * @type {number || null}
         */
        this.HealthCheckHealthyThreshold = null;

        /**
         * <p>Health check domain name.<br>Length limit: <strong>1-255</strong> characters.<br>It can contain lowercase letters, digits, dashes (-), and half-width periods (.).</p><blockquote><p>This parameter takes effect only when <strong>HealthCheckProtocol</strong> is set to <strong>HTTP/HTTPS/GRPC/GRPCS</strong>.</p></blockquote>
         * @type {string || null}
         */
        this.HealthCheckHost = null;

        /**
         * <p>HTTP version for health check. Valid values:</p><ul><li><strong>HTTP1.1</strong> (default)</li><li><strong>HTTP1.0</strong> <blockquote><p>This parameter takes effect only when <strong>HealthCheckProtocol</strong> is set to <strong>HTTP</strong> or <strong>HTTPS</strong>.</p></blockquote></li></ul>
         * @type {string || null}
         */
        this.HealthCheckHttpVersion = null;

        /**
         * <p>The interval of health check. Unit: second. Value range: <strong>2</strong>-<strong>300</strong>. Default value: <strong>5</strong>.</p>
         * @type {number || null}
         */
        this.HealthCheckInterval = null;

        /**
         * <p>Health check method. Value: - <strong>GET</strong> - <strong>HEAD</strong> (default value) </p><blockquote><p>This parameter takes effect only when <strong>HealthCheckProtocol</strong> is set to <strong>HTTP</strong> or <strong>HTTPS</strong>.</p></blockquote>
         * @type {string || null}
         */
        this.HealthCheckMethod = null;

        /**
         * <p>Forwarding rule path for health check. The length is <strong>1-80</strong> characters. Only letters, digits, characters <code>-/.%?#&amp;=</code>, and extended characters <code>_;~!（)*[]@$^:&#39;,+</code> can be used. The URL must start with a forward slash (/). </p><blockquote><p>The forwarding rule path parameter takes effect only when <strong>HealthCheckProtocol</strong> is <strong>HTTP/HTTPS/GRPC/GRPCS</strong>.</p></blockquote>
         * @type {string || null}
         */
        this.HealthCheckPath = null;

        /**
         * <p>Health check access to the backend server port. Value range: <strong>0-65535</strong>. Default value: <strong>0</strong>, which means the backend server port.</p>
         * @type {number || null}
         */
        this.HealthCheckPort = null;

        /**
         * <p>Health check protocol. Valid values:</p><ul><li><strong>HTTP</strong> (default): Sends HEAD or GET requests to simulate browser access requests and check whether the server application is healthy.</li><li><strong>HTTPS</strong>: Sends HEAD or GET requests to simulate browser access requests and check whether the server application is healthy. (Encrypts data and is more secure than HTTP.)</li><li><strong>TCP</strong>: Sends SYN handshake messages to detect whether the server port is alive.</li><li><strong>GRPC</strong>: Sends POST or GET requests to check whether the server application is healthy.</li><li><strong>GRPCS</strong>: Sends POST or GET requests to check whether the server application is healthy.</li></ul>
         * @type {string || null}
         */
        this.HealthCheckProtocol = null;

        /**
         * <p>Health check template name. It is 1-255 characters long and can contain digits, upper- and lower-case letters, Chinese characters, half-width periods (.), underscores (_), and dashes (-).</p>
         * @type {string || null}
         */
        this.HealthCheckTemplateName = null;

        /**
         * <p>Health check response timeout, in seconds.<br>Value range: <strong>2</strong>-<strong>60</strong>.<br>Default value: <strong>2</strong>.</p>
         * @type {number || null}
         */
        this.HealthCheckTimeout = null;

        /**
         * <p>Threshold for determining an unhealthy backend service. After how many consecutive health check failures, the backend service status changes from <strong>healthy</strong> to <strong>unhealthy</strong>.<br>Value range: <strong>2</strong>-<strong>10</strong>.<br>Default value: <strong>2</strong>.</p>
         * @type {number || null}
         */
        this.HealthCheckUnhealthyThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HealthCheckTemplateId = 'HealthCheckTemplateId' in params ? params.HealthCheckTemplateId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.HealthCheckCodes = 'HealthCheckCodes' in params ? params.HealthCheckCodes : null;
        this.HealthCheckHealthyThreshold = 'HealthCheckHealthyThreshold' in params ? params.HealthCheckHealthyThreshold : null;
        this.HealthCheckHost = 'HealthCheckHost' in params ? params.HealthCheckHost : null;
        this.HealthCheckHttpVersion = 'HealthCheckHttpVersion' in params ? params.HealthCheckHttpVersion : null;
        this.HealthCheckInterval = 'HealthCheckInterval' in params ? params.HealthCheckInterval : null;
        this.HealthCheckMethod = 'HealthCheckMethod' in params ? params.HealthCheckMethod : null;
        this.HealthCheckPath = 'HealthCheckPath' in params ? params.HealthCheckPath : null;
        this.HealthCheckPort = 'HealthCheckPort' in params ? params.HealthCheckPort : null;
        this.HealthCheckProtocol = 'HealthCheckProtocol' in params ? params.HealthCheckProtocol : null;
        this.HealthCheckTemplateName = 'HealthCheckTemplateName' in params ? params.HealthCheckTemplateName : null;
        this.HealthCheckTimeout = 'HealthCheckTimeout' in params ? params.HealthCheckTimeout : null;
        this.HealthCheckUnhealthyThreshold = 'HealthCheckUnhealthyThreshold' in params ? params.HealthCheckUnhealthyThreshold : null;

    }
}

/**
 * AssociateListenerAdditionalCertificates request structure.
 * @class
 */
class AssociateListenerAdditionalCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of extended certificate IDs.
         * @type {Array.<string> || null}
         */
        this.CertificateIds = null;

        /**
         * Listener ID, in the format of lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Client token, used to ensure the idempotency of requests. Generate a parameter value from your client to ensure the uniqueness of the value for different requests. ClientToken supports only ASCII characters.
If not specified, the system automatically uses the RequestId of the API request as the ClientToken ID. The RequestId of each API request may not be the same.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Whether to only precheck this request. Parameter Value:
true: send a check request. It will not add extension certs for HTTPS and QUIC listeners. Check items include whether required parameters are filled in, request format, and service limits. If the check fails, return the corresponding error. If the check passes, return the error code DryRunOperation.
false (default value): Send a normal request, return HTTP 2xx status code after check, and directly perform the operation.
         * @type {string || null}
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
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * IP information data structure in the application CLB availability zone subnet mapping
 * @class
 */
class IPAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.Address = null;

        /**
         * EIP AddressId
         * @type {string || null}
         */
        this.AddressId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;

    }
}

/**
 * DescribeListenerDetail response structure.
 * @class
 */
class DescribeListenerDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>List of CA certificate IDs bound to the listener.</p>
         * @type {Array.<string> || null}
         */
        this.CaCertificateIds = null;

        /**
         * <p>Whether to enable mutual authentication.</p>
         * @type {boolean || null}
         */
        this.CaEnabled = null;

        /**
         * <p>List of server certificate IDs.</p>
         * @type {Array.<string> || null}
         */
        this.CertificateIds = null;

        /**
         * <p>Creation time of the listener instance. Format: ISO 8601 (for example, 2025-01-01T08:30:00+08:00)</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Action list of the rule.</p>
         * @type {Array.<DefaultAction> || null}
         */
        this.DefaultActions = null;

        /**
         * <p>Whether to enable Gzip compression.</p>
         * @type {boolean || null}
         */
        this.GzipEnabled = null;

        /**
         * <p>Whether to enable the HTTP/2 feature.</p>
         * @type {boolean || null}
         */
        this.Http2Enabled = null;

        /**
         * <p>Specify the connection idle timeout period. Unit: seconds.</p>
         * @type {number || null}
         */
        this.IdleTimeout = null;

        /**
         * <p>Listener ID, in the format of lst- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * <p>Custom listener name.</p>
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * <p>Port used by the load balancing instance frontend.</p>
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * <p>Listening protocol.</p>
         * @type {string || null}
         */
        this.ListenerProtocol = null;

        /**
         * <p>Listener status. Value range:</p><ul><li><strong>Active</strong>: running.</li><li><strong>Provisioning</strong>: under creation.</li><li><strong>Configuring</strong>: changing.</li><li><strong>ProvisionFailed</strong>: creation failed</li></ul>
         * @type {string || null}
         */
        this.ListenerStatus = null;

        /**
         * <p>Cloud Load Balancer instance ID. The format is alb- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * <p>Last change time of the listener instance. Format: ISO 8601 (for example, 2025-01-01T08:30:00+08:00)</p>
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * <p>Connection request timeout period. Unit: seconds.</p>
         * @type {number || null}
         */
        this.RequestTimeout = null;

        /**
         * <p>Security policy ID, format: tls- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.SecurityPolicyId = null;

        /**
         * <p>Tag.</p>
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * <p>XForwardedFor configuration.</p>
         * @type {XForwardedForConfig || null}
         */
        this.XForwardedForConfig = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.CaCertificateIds = 'CaCertificateIds' in params ? params.CaCertificateIds : null;
        this.CaEnabled = 'CaEnabled' in params ? params.CaEnabled : null;
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.DefaultActions) {
            this.DefaultActions = new Array();
            for (let z in params.DefaultActions) {
                let obj = new DefaultAction();
                obj.deserialize(params.DefaultActions[z]);
                this.DefaultActions.push(obj);
            }
        }
        this.GzipEnabled = 'GzipEnabled' in params ? params.GzipEnabled : null;
        this.Http2Enabled = 'Http2Enabled' in params ? params.Http2Enabled : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.ListenerProtocol = 'ListenerProtocol' in params ? params.ListenerProtocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.RequestTimeout = 'RequestTimeout' in params ? params.RequestTimeout : null;
        this.SecurityPolicyId = 'SecurityPolicyId' in params ? params.SecurityPolicyId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.XForwardedForConfig) {
            let obj = new XForwardedForConfig();
            obj.deserialize(params.XForwardedForConfig)
            this.XForwardedForConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Rule action for forwarding
 * @class
 */
class RuleAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forward action execution sequence. Must be unique and in ascending order. Value range: 1-50000.
         * @type {number || null}
         */
        this.Order = null;

        /**
         * Forwarding action type. Valid values:
TargetGroup: Forward to a target group.
Redirect: Redirection.
FixedResponse: returns fixed content.
Rewrite: Rewrite.
InsertHeader: Write to HTTP Header.
RemoveHeader: Delete HTTP Header.
The forward action must include one of TargetGroup, Redirect, or FixedResponse, and the execution order must be placed last.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Fixed response content configuration.
         * @type {FixedResponseInfo || null}
         */
        this.FixedResponseConfig = null;

        /**
         * Insert HTTP Header configuration.
         * @type {InsertHTTPHeaderInfo || null}
         */
        this.InsertHeaderConfig = null;

        /**
         * Redirection configuration. Except for HttpCode, other configuration cannot all use default values.
         * @type {HTTPRedirectInfo || null}
         */
        this.RedirectConfig = null;

        /**
         * Delete HTTP Header configuration.
         * @type {RemoveHTTPHeaderInfo || null}
         */
        this.RemoveHeaderConfig = null;

        /**
         * Rewrite the configuration.
         * @type {HTTPRewriteInfo || null}
         */
        this.RewriteConfig = null;

        /**
         * Forwarding target group configuration.
         * @type {TargetGroupConfig || null}
         */
        this.TargetGroupConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.FixedResponseConfig) {
            let obj = new FixedResponseInfo();
            obj.deserialize(params.FixedResponseConfig)
            this.FixedResponseConfig = obj;
        }

        if (params.InsertHeaderConfig) {
            let obj = new InsertHTTPHeaderInfo();
            obj.deserialize(params.InsertHeaderConfig)
            this.InsertHeaderConfig = obj;
        }

        if (params.RedirectConfig) {
            let obj = new HTTPRedirectInfo();
            obj.deserialize(params.RedirectConfig)
            this.RedirectConfig = obj;
        }

        if (params.RemoveHeaderConfig) {
            let obj = new RemoveHTTPHeaderInfo();
            obj.deserialize(params.RemoveHeaderConfig)
            this.RemoveHeaderConfig = obj;
        }

        if (params.RewriteConfig) {
            let obj = new HTTPRewriteInfo();
            obj.deserialize(params.RewriteConfig)
            this.RewriteConfig = obj;
        }

        if (params.TargetGroupConfig) {
            let obj = new TargetGroupConfig();
            obj.deserialize(params.TargetGroupConfig)
            this.TargetGroupConfig = obj;
        }

    }
}

/**
 * DescribeRules response structure.
 * @class
 */
class DescribeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for the next query. If the current page is the last page, this field returns empty.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Forwarding rule list.
         * @type {Array.<RuleOutput> || null}
         */
        this.Rules = null;

        /**
         * Total count of forwarding rules (after filtering by conditions such as listener ID and rule ID).
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleOutput();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTargetGroups response structure.
 * @class
 */
class DescribeTargetGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for the next query. If the current page is the last page, this field returns empty.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Target group information.
         * @type {Array.<TargetGroupOutput> || null}
         */
        this.TargetGroups = null;

        /**
         * Total number of target groups.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.TargetGroups) {
            this.TargetGroups = new Array();
            for (let z in params.TargetGroups) {
                let obj = new TargetGroupOutput();
                obj.deserialize(params.TargetGroups[z]);
                this.TargetGroups.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveTargetsFromTargetGroup request structure.
 * @class
 */
class RemoveTargetsFromTargetGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID. The format is `lbtg-` followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * List of backend services to remove from the target group. A single request can remove up to **50** backend services.
         * @type {Array.<TargetToRemove> || null}
         */
        this.Targets = null;

        /**
         * Whether to preview this request. 
- **false** (default): Send a normal request and directly remove the backend service. 
- **true**: Send a preview request to check whether the parameters, format, and service limits for removing the backend service meet the requirements.
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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new TargetToRemove();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * DescribeListenerDetail request structure.
 * @class
 */
class DescribeListenerDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Listener ID, in the format of lst- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * <p>Cloud Load Balancer instance ID. The format is alb- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.LoadBalancerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

    }
}

/**
 * AddTargetsToTargetGroup request structure.
 * @class
 */
class AddTargetsToTargetGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID. The format is `lbtg-` followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * List of backend services to be added to the target group. A single request can add up to **50** backend services.
         * @type {Array.<TargetToAdd> || null}
         */
        this.Targets = null;

        /**
         * Whether to preview this request. 
- **false** (default): Send a normal request and add the backend service directly to the target group. 
- **true**: Send a preview request to check whether the parameters, format, and service limits for adding the backend service meet the requirements.
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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new TargetToAdd();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * ModifyListenerAttributes response structure.
 * @class
 */
class ModifyListenerAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Access log configuration.
 * @class
 */
class AccessLogConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log set ID of Cloud Log Service (CLS) for CLB
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * Log topic ID of Cloud Log Service (CLS) for CLB
         * @type {string || null}
         */
        this.LogTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;

    }
}

/**
 * ModifyRulesAttributes response structure.
 * @class
 */
class ModifyRulesAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * HTTP rewrite information
 * @class
 */
class HTTPRewriteInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Rewritten host address. Default value: ${host}. Length: 3-128 characters. Supported character sets: a-z 0-9 _ . -.</p>
         * @type {string || null}
         */
        this.Host = null;

        /**
         * <p>Rewrite path. Default value: ${path}. Length: 1–128 characters. Supported character sets: a-z A-Z 0-9 ? = _ . - / : .</p>
         * @type {string || null}
         */
        this.Path = null;

        /**
         * <p>Rewritten query string. Default value: ${query}. Length: 1–128 characters. Supports printable characters. Does not support #[]{}|&lt;&gt;&amp; or spaces.</p>
         * @type {string || null}
         */
        this.Query = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Query = 'Query' in params ? params.Query : null;

    }
}

/**
 * AssociateBandwidthPackageWithLoadBalancer response structure.
 * @class
 */
class AssociateBandwidthPackageWithLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeListeners response structure.
 * @class
 */
class DescribeListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener information.
         * @type {Array.<ListenerOutput> || null}
         */
        this.Listeners = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Maximum number of data records read this time.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for the next query.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Total number of entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ListenerOutput();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssociateBandwidthPackageWithLoadBalancer request structure.
 * @class
 */
class AssociateBandwidthPackageWithLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bandwidth package ID.
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Client Token, used for ensuring the idempotency of requests.

Generate a parameter value from your client to underwrite the uniqueness of the value for different requests. ClientToken supports only ASCII characters.

> If not specified, the system automatically uses the **RequestId** of the API request as the **ClientToken** ID. The **RequestId** of each API request may not be the same.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Whether to only precheck this request. Values:
- **true**: Send a check request without binding the Bandwidth Package to the load balancing instance. Check items include whether required parameters are filled in, request format, and service limits. If the check fails, return the corresponding error. If the check passes, return the error code `DryRunOperation`.
- **false** (default value): Send a normal request. After the check is passed, return an HTTP 2xx status code and directly perform the operation.
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
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * Forwarding configuration
 * @class
 */
class XForwardedForConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to get the CLB instance ID through the ALB-ID header field.
- **true**: Yes.
- **false**: No.
         * @type {boolean || null}
         */
        this.XForwardedForAlbIdEnabled = null;

        /**
         * Whether to obtain the port of the client accessing the load balancing instance through the X-Forwarded-Client-srcport header field.
- **true**: Yes.
- **false**: No.
         * @type {boolean || null}
         */
        this.XForwardedForClientSrcPortEnabled = null;

        /**
         * Whether to enable obtaining the client domain name that accesses the load balancing instance through the X-Forwarded-Host header field.
- **true**: yes.
- **false**: No.
         * @type {boolean || null}
         */
        this.XForwardedForHostEnabled = null;

        /**
         * Specify how to handle the X-Forwarded-For (XFF) HTTP header field.
- **append**: Append mode (default). Appends the real IP of the client to the end of the X-Forwarded-For header, retaining the original XFF link information.
-**remove**: Deletion mode. Remove the X-Forwarded-For header field and do not pass this header to the real server.
- **passthrough**: Passthrough mode. The X-Forwarded-For header remains unchanged and is directly passed through to the real server without any modification.

         * @type {string || null}
         */
        this.XForwardedForMode = null;

        /**
         * Whether to obtain the listening port of the load balancing instance through the X-Forwarded-Port header field.
- **true**: yes.
- **false**: No.
         * @type {boolean || null}
         */
        this.XForwardedForPortEnabled = null;

        /**
         * Whether to obtain the listening protocol of the load balancing instance through the X-Forwarded-Proto header field.
- **true**: yes.
- **false**: No.

         * @type {boolean || null}
         */
        this.XForwardedForProtoEnabled = null;

        /**
         * Whether to access the issuer of the client certificate $ssl_client_i_dn through the X-Tencent-Client-IDN header.
- **true**: yes.
- **false**: No.

         * @type {boolean || null}
         */
        this.XTencentClientIDNEnabled = null;

        /**
         * Whether to access the subject of the client certificate $ssl_client_s_dn through the X-Tencent-Client-SDN header.
- **true**: yes.
- **false**: No.

         * @type {boolean || null}
         */
        this.XTencentClientSDNEnabled = null;

        /**
         * Whether to access the serial number $ssl_client_serial of the client certificate through the X-Tencent-Client-Serial header.
- **true**: yes.
- **false**: No.

         * @type {boolean || null}
         */
        this.XTencentClientSerialEnabled = null;

        /**
         * Access the verification result $ssl_client_verify of the client certificate through the X-Tencent-Client-Verify header.
- **true**: yes.
- **false**: No.

         * @type {boolean || null}
         */
        this.XTencentClientVerifyEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.XForwardedForAlbIdEnabled = 'XForwardedForAlbIdEnabled' in params ? params.XForwardedForAlbIdEnabled : null;
        this.XForwardedForClientSrcPortEnabled = 'XForwardedForClientSrcPortEnabled' in params ? params.XForwardedForClientSrcPortEnabled : null;
        this.XForwardedForHostEnabled = 'XForwardedForHostEnabled' in params ? params.XForwardedForHostEnabled : null;
        this.XForwardedForMode = 'XForwardedForMode' in params ? params.XForwardedForMode : null;
        this.XForwardedForPortEnabled = 'XForwardedForPortEnabled' in params ? params.XForwardedForPortEnabled : null;
        this.XForwardedForProtoEnabled = 'XForwardedForProtoEnabled' in params ? params.XForwardedForProtoEnabled : null;
        this.XTencentClientIDNEnabled = 'XTencentClientIDNEnabled' in params ? params.XTencentClientIDNEnabled : null;
        this.XTencentClientSDNEnabled = 'XTencentClientSDNEnabled' in params ? params.XTencentClientSDNEnabled : null;
        this.XTencentClientSerialEnabled = 'XTencentClientSerialEnabled' in params ? params.XTencentClientSerialEnabled : null;
        this.XTencentClientVerifyEnabled = 'XTencentClientVerifyEnabled' in params ? params.XTencentClientVerifyEnabled : null;

    }
}

/**
 * DescribeTargetGroups request structure.
 * @class
 */
class DescribeTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter. Query backend services by specified filter criteria. Supported values:
- The value of Name is **VpcId**. Filter target groups by VPC instance. The value of **Values** is a unique VPC ID list.
-The value of `Name` is **TargetType**. Filter target groups by backend service type. The value of `Values` can be **Instance**.
-The value of `Name` is **TargetGroupName**. Filter target groups by target group name. The value of `Values` is a list of target group names.
- The value of `Name` is **Protocol**. Filter target groups by the backend service protocol of the target group. The value of `Values` is a list of backend service protocols of target groups.
-Filter by tag.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of returned entries. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for the next query. Not required for the first query or when there are no more queries.
If there is a next query, the value is the NextToken value returned from the last API call.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Target group ID list. The ID format is `lbtg-` followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

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
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TargetGroupIds = 'TargetGroupIds' in params ? params.TargetGroupIds : null;

    }
}

/**
 * Query result of one quota item. Each result corresponds to a quota type. When ResourceIds is input in the request, each result also corresponds to a specific resource.
 * @class
 */
class QuotaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Current remaining available amount. Calculation method: Limit - Used. A valid value is returned only when the request parameter DisplayFields includes available. If not requested, it is not returned or is empty.
         * @type {number || null}
         */
        this.Available = null;

        /**
         * Quota upper limit. Different quota types have different units. It usually represents the number of resources. For timeout-related quotas, it represents seconds.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Quota type, corresponding to the values in the request parameter QuotaTypes. For the meaning of each quota type, see the QuotaTypes parameter description.
         * @type {string || null}
         */
        this.QuotaType = null;

        /**
         * Resource ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Currently used amount. A valid value is returned only when the request parameter DisplayFields includes used. If not requested, it is not returned or is empty.
         * @type {number || null}
         */
        this.Used = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Available = 'Available' in params ? params.Available : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.QuotaType = 'QuotaType' in params ? params.QuotaType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Used = 'Used' in params ? params.Used : null;

    }
}

/**
 * DeleteLoadBalancers response structure.
 * @class
 */
class DeleteLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeRules request structure.
 * @class
 */
class DescribeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID, in the format of lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Supported filter conditions are as follows:
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Number of lists returned. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for the next query. Not required for the first query or when there is no next query. If there is a next query, the value is the NextToken returned from the last API call.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * List of forwarding rule IDs. Each ID is in the format of `rule-` followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;

    }
}

/**
 * HTTP Cookie information
 * @class
 */
class HTTPCookieInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of the Cookie, 1-64 characters, supporting letters, digits, and underscores.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Cookie value, 1–128 characters in length, supporting printable characters.
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
 * ModifySecurityPolicyAttributes request structure.
 * @class
 */
class ModifySecurityPolicyAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Security policy ID, format: tls- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.SecurityPolicyId = null;

        /**
         * <p>Modified encryption suite list. The encryption suite is used to negotiate the encryption algorithm between client and server.</p><p><strong>Configuration instructions:</strong></p><ul><li>The optional range of encryption suites depends on the selected TLS protocol version (TLSVersions parameter).</li><li>As long as an encryption suite is supported by any one of the selected TLS versions, it can be added to the list.</li><li>If TLSVersions contains TLSv1.3: TLSv1.3 exclusive encryption suites can be unspecified (the system will auto-complete all TLSv1.3 suites); if specified, all TLSv1.3 exclusive encryption suites must be included. Specifying only part is not supported.</li></ul><p><strong>Get available encryption suites:</strong><br>Call the <a href="https://www.tencentcloud.com/document/api/1822/133718?from_cn_redirect=1">DescribeSecurityPolicyCapabilities</a> API to query the encryption suite list supported by each TLS version.</p><p><strong>Note:</strong> If this parameter is not specified, the original configuration remains unchanged.</p>
         * @type {Array.<string> || null}
         */
        this.Ciphers = null;

        /**
         * <p>Whether to only execute a preflight request. Values:</p><ul><li><strong>true</strong>: Only execute a preflight request without actually modifying resources. The preflight request will verify parameter format, permission, and configuration validity, helping you identify potential issues before proceeding with any operations.</li><li><strong>false</strong> (default): Execute a normal request. After passing the preflight, the security policy will be directly modified.</li></ul>
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * <p>Modified security policy name, used to identify and distinguish different security policies.</p><p><strong>Naming rule:</strong></p><ul><li>Length: 2–128 characters.</li><li>Must start with English letters or Chinese characters.</li><li>Can contain English letters, Chinese characters, digits, half-width periods (.), underscores (_), and dashes (-).</li></ul><p><strong>Note:</strong> If this parameter is not specified, the original name remains unchanged.</p>
         * @type {string || null}
         */
        this.SecurityPolicyName = null;

        /**
         * <p>List of TLS protocol versions after modification. TLS (Transport Layer Security) is used to guarantee the security of communication between clients and the load balancer.</p><p><strong>Available values:</strong></p><ul><li><strong>TLSv1.0</strong>: Best compatibility, but low security level. Not recommended for production environment.</li><li><strong>TLSv1.1</strong>: Slightly better security than TLSv1.0, but still not recommended.</li><li><strong>TLSv1.2</strong>: Current mainstream security protocol version, balancing security and compatibility.</li><li><strong>TLSv1.3</strong>: Latest version, highest security and better performance. Recommended to prioritize.</li></ul><p><strong>Note:</strong> </p><ul><li>If this parameter is not specified, the original configuration remains unchanged.</li><li>When modifying the TLS version, check whether the Ciphers parameter configuration is compatible.</li></ul>
         * @type {Array.<string> || null}
         */
        this.TLSVersions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityPolicyId = 'SecurityPolicyId' in params ? params.SecurityPolicyId : null;
        this.Ciphers = 'Ciphers' in params ? params.Ciphers : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.SecurityPolicyName = 'SecurityPolicyName' in params ? params.SecurityPolicyName : null;
        this.TLSVersions = 'TLSVersions' in params ? params.TLSVersions : null;

    }
}

/**
 * DescribeSecurityPolicyRelations response structure.
 * @class
 */
class DescribeSecurityPolicyRelationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener list associated with a security policy. Return the HTTPS listener information associated with each security policy.
         * @type {Array.<SecurityPolicyRelations> || null}
         */
        this.SecurityPolicyRelations = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.SecurityPolicyRelations) {
            this.SecurityPolicyRelations = new Array();
            for (let z in params.SecurityPolicyRelations) {
                let obj = new SecurityPolicyRelations();
                obj.deserialize(params.SecurityPolicyRelations[z]);
                this.SecurityPolicyRelations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityPolicies response structure.
 * @class
 */
class DescribeSecurityPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for the next query.

-If the return value is not empty, it means there is more data. You can use this value as the NextToken parameter in the next request to continue querying.
-If the return value is empty or this field is not returned, it means the current page is the last page.

         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Information list of security policies. Contains detailed configuration of each security policy, such as policy ID, name, TLS version, and encryption suite.

         * @type {Array.<SecurityPolicyInfo> || null}
         */
        this.SecurityPolicies = null;

        /**
         * Total number of security policies that meet filtering criteria.

**Description:** This value indicates the total record count that meets the query condition, not the number of records returned this time. It can be used to calculate pagination information.

         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.SecurityPolicies) {
            this.SecurityPolicies = new Array();
            for (let z in params.SecurityPolicies) {
                let obj = new SecurityPolicyInfo();
                obj.deserialize(params.SecurityPolicies[z]);
                this.SecurityPolicies.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HTTP redirection information
 * @class
 */
class HTTPRedirectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>HTTP code for redirection. Supports 301, 302, 303, 307, and 308.</p>
         * @type {number || null}
         */
        this.HttpCode = null;

        /**
         * <p>Redirected host address. Default value: ${host}. Length: 3-128 characters. Supported character sets: a-z 0-9 _ . -.</p>
         * @type {string || null}
         */
        this.Host = null;

        /**
         * <p>Redirect path. Default value: ${path}. Length: 1–128 characters. Supported character sets: a-z A-Z 0-9 ? = _ . - / : .</p>
         * @type {string || null}
         */
        this.Path = null;

        /**
         * <p>The port for redirection. Default value: ${port}. Value range: 1-65535.</p>
         * @type {string || null}
         */
        this.Port = null;

        /**
         * <p>Protocol for redirection. Valid values: HTTP and HTTPS. Default value: ${protocol}.</p>
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * <p>Query string for redirect. Default value: ${query}. Length: 1–128 characters. Supports printable characters. Does not support #[]{}&lt;&gt;&amp; and spaces.</p>
         * @type {string || null}
         */
        this.Query = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HttpCode = 'HttpCode' in params ? params.HttpCode : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Query = 'Query' in params ? params.Query : null;

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
 * Asynchronous Task Information
 * @class
 */
class Job extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation interface name.
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * Task flow Id
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Task request Id.
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * Resource ID list.
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * Task status. Valid values: `Processing`, `Succeeded`, `Failed`.
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Listener information associated
 * @class
 */
class RelatedListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID, format: lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener port.
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * Listener protocol.
         * @type {string || null}
         */
        this.ListenerProtocol = null;

        /**
         * CLB instance ID, in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.ListenerProtocol = 'ListenerProtocol' in params ? params.ListenerProtocol : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

    }
}

/**
 * DescribeListenerCertificates request structure.
 * @class
 */
class DescribeListenerCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate type. Value: CA or SVR (server certificate).
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * Listener ID, in the format of lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Maximum number of data records to read this time. Value range: 1-100. Default value: 20.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for the next query. Value:
Not required for the first query or when there is no next query.
If there is a next query, the value is the NextToken value returned from the last API call.
         * @type {string || null}
         */
        this.NextToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * ModifyLoadBalancerAddressType request structure.
 * @class
 */
class ModifyLoadBalancerAddressTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target network type. Value:
- **Internet** (public network)
A load balancing instance is assigned a public network IP address, and the domain name (DNS) is parsed to the public network IP. It can be directly accessed via the public network and is suitable for business scenarios that provide external services.
- **Intranet** (private network)
Load balancing instances are assigned only private IP addresses, and the domain name (DNS) resolves to the private IP. Access is supported only within the private network environment of the VPC to which the load balancing instance belongs. This is suitable for internal business or scenarios with high security requirements.
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Bandwidth package ID.
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * Whether to only precheck this request. Parameter Value:
- **true**: Send a check request without updating the network type of the instance. Check items include whether required parameters are filled in, request format, and service limits. If the check fails, return the corresponding error. If the check passes, return the error code `DryRunOperation`.
- **false** (default value): Send a normal request, return HTTP 2xx status code after check, and directly perform the operation.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Availability zone and subnet mapping structure.
If the current region supports 2 or more AZs, a minimum of 2 AZs is required.
         * @type {Array.<ZoneMappingsItem> || null}
         */
        this.ZoneMappings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

        if (params.ZoneMappings) {
            this.ZoneMappings = new Array();
            for (let z in params.ZoneMappings) {
                let obj = new ZoneMappingsItem();
                obj.deserialize(params.ZoneMappings[z]);
                this.ZoneMappings.push(obj);
            }
        }

    }
}

/**
 * CreateRules response structure.
 * @class
 */
class CreateRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of forwarding rule IDs. Each ID is in the format of `rule-` followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSecurityPolicy response structure.
 * @class
 */
class CreateSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Security policy ID, format: tls- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.SecurityPolicyId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.SecurityPolicyId = 'SecurityPolicyId' in params ? params.SecurityPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteListener request structure.
 * @class
 */
class DeleteListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID list. The ID format is lst- followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Client Token, used for ensuring request idempotency.

Generate a parameter value from your client to underwrite uniqueness of value for different requests. ClientToken supports only ASCII characters.
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
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

/**
 * ModifyTargetGroupAttributes response structure.
 * @class
 */
class ModifyTargetGroupAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Forwarding rule modification information
 * @class
 */
class RuleModify extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action list of the forwarding rule.
         * @type {Array.<RuleAction> || null}
         */
        this.Actions = null;

        /**
         * List of forward rule conditions.
         * @type {Array.<RuleCondition> || null}
         */
        this.Conditions = null;

        /**
         * Priority. A smaller value indicates higher priority. Value range: 1-10000.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Forwarding rule ID in the format of `rule-` followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Forwarding rule name.
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new RuleAction();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RuleCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * Session persistence configuration.
 * @class
 */
class StickySessionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable session persistence.
- **true**: enabled.
- **false**: not enabled.
         * @type {boolean || null}
         */
        this.StickySessionEnabled = null;

        /**
         * Custom Cookie name.
Length: 1-255 characters. It can only contain English letters and digits, and cannot be `tgw_l7_tg_route`. This field is a reserved field for the session persistence Cookie between target groups.
>This parameter takes effect only when **StickySessionEnabled** is **true**.
         * @type {string || null}
         */
        this.Cookie = null;

        /**
         * Session hold time.
Value range: **1-86400**. Unit: **seconds**.
Default value: **1000**.
>This parameter takes effect only when **StickySessionEnabled** is **true**.
         * @type {number || null}
         */
        this.CookieTimeout = null;

        /**
         * Session persistence type (the way cookies are handled).
- **Insert** (default value): Embed a Cookie. When a client accesses the backend service for the first time, the application CLB will embed a Cookie in the Return Request. The next time the client carries this Cookie in a request, load balancing will forward the request to the same backend service as last time.
- **Rewrite**: Rewrite the Cookie. Load balancing rewrites the user-defined Cookie. The next client request carries the Cookie, and load balancing forwards the request to the same backend service as the last request.
>This parameter takes effect only when **StickySessionEnabled** is **true**.
         * @type {string || null}
         */
        this.StickySessionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StickySessionEnabled = 'StickySessionEnabled' in params ? params.StickySessionEnabled : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;
        this.CookieTimeout = 'CookieTimeout' in params ? params.CookieTimeout : null;
        this.StickySessionType = 'StickySessionType' in params ? params.StickySessionType : null;

    }
}

/**
 * AssociateListenerAdditionalCertificates response structure.
 * @class
 */
class AssociateListenerAdditionalCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Listener brief information output parameters
 * @class
 */
class ListenerOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether mutual authentication is enabled.</p>
         * @type {boolean || null}
         */
        this.CaEnable = null;

        /**
         * <p>Creation time of the listener instance. Format: ISO 8601 (for example, 2025-01-01T08:30:00+08:00)</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Whether to enable Gzip compression.</p>
         * @type {boolean || null}
         */
        this.GzipEnabled = null;

        /**
         * <p>Whether to enable http/2.</p>
         * @type {boolean || null}
         */
        this.Http2Enable = null;

        /**
         * <p>Idle timeout period.</p>
         * @type {number || null}
         */
        this.IdleTimeout = null;

        /**
         * <p>Listener ID, format: lst- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * <p>Listener name.</p>
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * <p>Listener port.</p>
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * <p>Listener protocol.</p>
         * @type {string || null}
         */
        this.ListenerProtocol = null;

        /**
         * <p>Listener status. Value:</p><ul><li><strong>Active</strong>: Running.</li><li><strong>Provisioning</strong>: Creating.</li><li><strong>Configuring</strong>: Modifying configuration.</li><li><strong>ProvisionFailed</strong>: Creation failed</li></ul>
         * @type {string || null}
         */
        this.ListenerStatus = null;

        /**
         * <p>Last change time of the listener instance. Format: ISO 8601 (for example, 2025-01-01T08:30:00+08:00)</p>
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * <p>Connection request timeout period.</p>
         * @type {number || null}
         */
        this.RequestTimeout = null;

        /**
         * <p>Tag.</p>
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * <p>Security policy ID.</p>
         * @type {string || null}
         */
        this.TlsSecurityPolicyId = null;

        /**
         * <p>XForwardedFor configuration.</p>
         * @type {XForwardedForConfig || null}
         */
        this.XForwardedForConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaEnable = 'CaEnable' in params ? params.CaEnable : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.GzipEnabled = 'GzipEnabled' in params ? params.GzipEnabled : null;
        this.Http2Enable = 'Http2Enable' in params ? params.Http2Enable : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.ListenerProtocol = 'ListenerProtocol' in params ? params.ListenerProtocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.RequestTimeout = 'RequestTimeout' in params ? params.RequestTimeout : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TlsSecurityPolicyId = 'TlsSecurityPolicyId' in params ? params.TlsSecurityPolicyId : null;

        if (params.XForwardedForConfig) {
            let obj = new XForwardedForConfig();
            obj.deserialize(params.XForwardedForConfig)
            this.XForwardedForConfig = obj;
        }

    }
}

/**
 * Describes the price information of postpaid billing items.
 * @class
 */
class PostPayPriceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Discount, such as 20.0 representing 80% off.
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * Unit price, in CNY.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Discounted unit price. Unit: CNY.
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;

    }
}

/**
 * CreateRules request structure.
 * @class
 */
class CreateRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID, in the format of lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Forwarding rule list.
         * @type {Array.<RuleInput> || null}
         */
        this.Rules = null;

        /**
         * Client Token, used to ensure the idempotency of requests. Generate a parameter value from your client, ensuring uniqueness of the value for different requests. ClientToken supports only ASCII characters. If not specified, the system automatically uses the RequestId of the API request as the ClientToken flag. The RequestId may not be the same for each API request.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Whether it is a pre-check only request.
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInput();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * DeleteSecurityPolicy response structure.
 * @class
 */
class DeleteSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Backend service added to the target group
 * @class
 */
class TargetToAdd extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port used by the real server. Value range: **1-65535**.

>When the **targetType** value of the target group is **Instance**, this parameter is required.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Backend service IP. At least one of **TargetIp** and **TargetId** is required.

- When the server group is of the **Instance** type, this parameter is the primary or secondary private IP of **Eni**.

         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * Weight of the backend service. Value range: **0-100**. Default value: **10**. If the weight is set to **0**, no request will be forwarded to this backend service.
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * DisassociateListenerAdditionalCertificates response structure.
 * @class
 */
class DisassociateListenerAdditionalCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeSecurityPolicyCapabilities response structure.
 * @class
 */
class DescribeSecurityPolicyCapabilitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of security policy configuration capabilities. Return all supported TLS versions and their corresponding encryption suite information in the current region.

**Return content includes:**
-Supported TLS protocol versions (for example, TLSv1.0, TLSv1.1, TLSv1.2, TLSv1.3).
-List of cipher suites supported by each TLS version.

**Usage scenario:**
-Get optional encryption suites by calling this API before creating a security policy (CreateSecurityPolicy).
-Before modifying the security policy (ModifySecurityPolicyAttributes), confirm the validity of the new configuration.

         * @type {Array.<SecurityPolicyCapability> || null}
         */
        this.SecurityPolicyCapabilities = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.SecurityPolicyCapabilities) {
            this.SecurityPolicyCapabilities = new Array();
            for (let z in params.SecurityPolicyCapabilities) {
                let obj = new SecurityPolicyCapability();
                obj.deserialize(params.SecurityPolicyCapabilities[z]);
                this.SecurityPolicyCapabilities.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Delete HTTP Header information
 * @class
 */
class RemoveHTTPHeaderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of the HTTP Header to delete. Length: 1–40 characters. Supported character sets: a-z, a-z, 0-9, -, and _.
No support for Cookie, Host, Content-Length, Connection, Upgrade, transfer-encoding, keep-alive, te, authority, x-forwarded-for, x-forwarded-proto, x-forwarded-host, x-forwarded-port, and server.
         * @type {string || null}
         */
        this.Key = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * DescribeTargetGroupTargets request structure.
 * @class
 */
class DescribeTargetGroupTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID. The format is `lbtg-` followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Filter. Query backend services by specified filter criteria. Supported values:
- The value of Name is **TargetId**. Filter backend services by resource ID. This parameter is valid only when the backend type of the target group is **Instance**. The value of Values is the resource ID of Cvm or Eni.
-The value of `Name` is **TargetIp**. Filter backend services by resource IP. This parameter is valid only when the backend type of the target group is **Ip**. The value of `Values` is the IP of the backend service.
-Filter by tag.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The number of return lists, with a default value of **20** and a maximum value of **100**.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for the next query. Not required for the first query or when there are no more queries.
If there is a next query, the value is the NextToken value returned from the last API call.
         * @type {string || null}
         */
        this.NextToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * DescribeListenerCertificates response structure.
 * @class
 */
class DescribeListenerCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of listener bound certificate information.
         * @type {Array.<CertificateInfo> || null}
         */
        this.Certificates = null;

        /**
         * Maximum number of data records read this time.	
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for the next query.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Total amount of listener bound certificates.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Certificates) {
            this.Certificates = new Array();
            for (let z in params.Certificates) {
                let obj = new CertificateInfo();
                obj.deserialize(params.Certificates[z]);
                this.Certificates.push(obj);
            }
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetLoadBalancerSecurityGroups request structure.
 * @class
 */
class SetLoadBalancerSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID. The format is alb- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Security group ID list.
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;

    }
}

/**
 * RemoveTargetsFromTargetGroup response structure.
 * @class
 */
class RemoveTargetsFromTargetGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * AddTargetsToTargetGroup response structure.
 * @class
 */
class AddTargetsToTargetGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeAsyncJobs request structure.
 * @class
 */
class DescribeAsyncJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of entries displayed each time during a batch query. Value range: 1–100. Default value: 20.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Whether there is a token for the next query. Value: not required for the first query or when there is no next query. If there is a next query, the value is the NextToken returned from the last API call.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * List of RequestIds returned for async requests
         * @type {Array.<string> || null}
         */
        this.RequestIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestIds = 'RequestIds' in params ? params.RequestIds : null;

    }
}

/**
 * CreateListener response structure.
 * @class
 */
class CreateListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Listener ID, in the format of lst- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTargetGroup response structure.
 * @class
 */
class CreateTargetGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Target group ID. The format is `lbtg-` followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Target group configuration
 * @class
 */
class TargetGroupConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group list.
         * @type {Array.<TargetGroupTuple> || null}
         */
        this.TargetGroups = null;

        /**
         * Session persistence between target groups
         * @type {TargetGroupStickySession || null}
         */
        this.TargetGroupStickySession = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TargetGroups) {
            this.TargetGroups = new Array();
            for (let z in params.TargetGroups) {
                let obj = new TargetGroupTuple();
                obj.deserialize(params.TargetGroups[z]);
                this.TargetGroups.push(obj);
            }
        }

        if (params.TargetGroupStickySession) {
            let obj = new TargetGroupStickySession();
            obj.deserialize(params.TargetGroupStickySession)
            this.TargetGroupStickySession = obj;
        }

    }
}

/**
 * DescribeTargetGroupsByTarget request structure.
 * @class
 */
class DescribeTargetGroupsByTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backend service instance ID. For a CVM instance, the format is "ins-" followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.TargetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetId = 'TargetId' in params ? params.TargetId : null;

    }
}

/**
 * Session persistence between target groups
 * @class
 */
class TargetGroupStickySession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable session persistence. Off by default.
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * Timeout period in seconds. Value range: 1-86400. Default value: 1000.
         * @type {number || null}
         */
        this.Timeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

    }
}

/**
 * DeleteLoadBalancers request structure.
 * @class
 */
class DeleteLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of Cloud Load Balancer instance IDs. The format is alb- followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * Client Token, used for ensuring the idempotency of requests.

Generate a parameter value from your client to underwrite the uniqueness of the value for different requests. ClientToken supports only ASCII characters.


         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Whether to only precheck this request. Parameter value:

- **true**: Send a check request. The CLB instance will not be deleted. Check items include whether required parameters are filled in, request format, and service limits. If a check fails, return the corresponding error. If all checks pass, return the error code `DryRunOperation`.

- **false** (default value): Send a normal request, return `HTTP 2xx` status code after check, and directly perform the operation.
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
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * Forwarding rule condition
 * @class
 */
class RuleCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding condition type. Valid values:
Host: host.
Path: Path.
Header: HTTP header field.
QueryString: HTTP query string.
Method: Request method.
Cookie:Cookie.
SourceIp: Source IP.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Cookie configuration.
         * @type {Array.<HTTPCookieInfo> || null}
         */
        this.CookieConfig = null;

        /**
         * HTTP Header configuration.
         * @type {HTTPHeaderInfo || null}
         */
        this.HeaderConfig = null;

        /**
         * Host name. The host configuration can only appear once in a rule, with a length of 3 to 128 characters. It supports exact match, regular expression matching, and wildcard matching.
It cannot start or end with a half-width period (.) or underscore (_).
Exact match. Supported character sets: a-z 0-9 . - _ .
Regular expression matching. A value that begins with a tilde (~) indicates regular expression matching. Supported character sets: a-z 0-9 . - ? = ~ _ - + \ ^ * ! $ & | ( ) [ ] .
Wildcard matching. An asterisk (*) matches multiple characters, and a half-width question mark (?) matches any single character. Supported character sets: a-z 0-9 . - _ * ?.
         * @type {Array.<string> || null}
         */
        this.HostConfig = null;

        /**
         * Request method. Parameter values: HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE.
         * @type {Array.<string> || null}
         */
        this.MethodConfig = null;

        /**
         * Forwarding path. Length: 1–128 characters. Supports exact matching, regular expression matching, and wildcard matching.
Exact match. Supported character sets: a-z A-Z 0-9 . - _ / = :.
For regular expression matching, it must start with `~`. A `~` at the beginning means case-sensitive, and `~*` at the beginning means case-insensitive. Supported character sets: a-z A-Z 0-9 . - _ / = ? ~ ^ * $ : ( ) [ ] + |.
Wildcard matching. * means multiple character wildcard, and ? means any single character wildcard. Supported character sets: a-z A-Z 0-9 . - _ / = :.
         * @type {Array.<string> || null}
         */
        this.PathConfig = null;

        /**
         * Query string configuration.
         * @type {Array.<HTTPQueryStringInfo> || null}
         */
        this.QueryStringConfig = null;

        /**
         * Source IP matching configuration. CIDR format, IP address x.x.x.x/32, IP range x.x.x.x/24.
         * @type {Array.<string> || null}
         */
        this.SourceIpConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CookieConfig) {
            this.CookieConfig = new Array();
            for (let z in params.CookieConfig) {
                let obj = new HTTPCookieInfo();
                obj.deserialize(params.CookieConfig[z]);
                this.CookieConfig.push(obj);
            }
        }

        if (params.HeaderConfig) {
            let obj = new HTTPHeaderInfo();
            obj.deserialize(params.HeaderConfig)
            this.HeaderConfig = obj;
        }
        this.HostConfig = 'HostConfig' in params ? params.HostConfig : null;
        this.MethodConfig = 'MethodConfig' in params ? params.MethodConfig : null;
        this.PathConfig = 'PathConfig' in params ? params.PathConfig : null;

        if (params.QueryStringConfig) {
            this.QueryStringConfig = new Array();
            for (let z in params.QueryStringConfig) {
                let obj = new HTTPQueryStringInfo();
                obj.deserialize(params.QueryStringConfig[z]);
                this.QueryStringConfig.push(obj);
            }
        }
        this.SourceIpConfig = 'SourceIpConfig' in params ? params.SourceIpConfig : null;

    }
}

/**
 * Availability zone information
 * @class
 */
class Zone extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ name.
         * @type {string || null}
         */
        this.LocalName = null;

        /**
         * AZ ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Availability zone status
         * @type {string || null}
         */
        this.ZoneStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalName = 'LocalName' in params ? params.LocalName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneStatus = 'ZoneStatus' in params ? params.ZoneStatus : null;

    }
}

/**
 * Forwarding Rule Information
 * @class
 */
class RuleOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action list of the forwarding rule.	
         * @type {Array.<RuleAction> || null}
         */
        this.Actions = null;

        /**
         * List of forward rule conditions.
         * @type {Array.<RuleCondition> || null}
         */
        this.Conditions = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Direction of the forwarding rule. Request: request direction from the client to load balancing. Response: response direction from the real server to load balancing.
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * Last modification time.
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Priority. A smaller value indicates higher priority. Value range: 1-10000.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Forwarding rule ID in the format of `rule-` followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Forwarding rule name.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Forwarding rule status. Provisioning: under creation. Active: running. Configuring: configuration in progress.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Tag list.
         * @type {Array.<TagInfo> || null}
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

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new RuleAction();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RuleCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Encryption suite information supported by different TLS versions.
 * @class
 */
class SecurityPolicyCapability extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of supported cipher suites.
         * @type {Array.<string> || null}
         */
        this.Ciphers = null;

        /**
         * Supported TLS protocol versions. Optional values include: TLSv1.0, TLSv1.1, TLSv1.2, TLSv1.3.
         * @type {string || null}
         */
        this.TLSVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ciphers = 'Ciphers' in params ? params.Ciphers : null;
        this.TLSVersion = 'TLSVersion' in params ? params.TLSVersion : null;

    }
}

/**
 * Modification protection status information.
 * @class
 */
class ModificationProtectionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether modification protection is enabled. Once enabled, it prevents the instance from unintended modification or deletion.
- true: enable modification protection
- false: disable modification protection
         * @type {boolean || null}
         */
        this.ModificationProtectionEnabled = null;

        /**
         * 1238716123
         * @type {string || null}
         */
        this.OperatorUin = null;

        /**
         * Reason explanation for enabling modification protection.
Length: 1 to 255 characters. It must contain Chinese and characters from harmless strings. It can contain Chinese, letters, digits, hyphens (-), forward slashes (/), half-width periods (.), and underscores (_).
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModificationProtectionEnabled = 'ModificationProtectionEnabled' in params ? params.ModificationProtectionEnabled : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * ModifyTargetsInTargetGroup response structure.
 * @class
 */
class ModifyTargetsInTargetGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * ModifySecurityPolicyAttributes response structure.
 * @class
 */
class ModifySecurityPolicyAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DeleteSecurityPolicy request structure.
 * @class
 */
class DeleteSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security policy ID list. ID format: tls- followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.SecurityPolicyIds = null;

        /**
         * Whether to only execute a preflight request. Value:
- **true**: Execute only the preflight request without actually deleting a resource. The preflight request will verify the parameter format, permission, and whether the security policy is referenced, helping you identify potential issues before proceeding with any operations.
- **false** (default): Execute a normal request. After the precheck is passed, delete the security policy directly.

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
        this.SecurityPolicyIds = 'SecurityPolicyIds' in params ? params.SecurityPolicyIds : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * Rule health check status
 * @class
 */
class RuleHealthStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is the default forwarding rule.
         * @type {string || null}
         */
        this.IsDefaultRule = null;

        /**
         * Forwarding rule ID in the format of `rule-` followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Target group health status.
         * @type {Array.<TargetGroupHealthInfo> || null}
         */
        this.TargetGroupHealthInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDefaultRule = 'IsDefaultRule' in params ? params.IsDefaultRule : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.TargetGroupHealthInfos) {
            this.TargetGroupHealthInfos = new Array();
            for (let z in params.TargetGroupHealthInfos) {
                let obj = new TargetGroupHealthInfo();
                obj.deserialize(params.TargetGroupHealthInfos[z]);
                this.TargetGroupHealthInfos.push(obj);
            }
        }

    }
}

/**
 * ModifyLoadBalancerAddressType response structure.
 * @class
 */
class ModifyLoadBalancerAddressTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Certificate information.
 * @class
 */
class CertificateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate binding time.
         * @type {string || null}
         */
        this.AssociatedTime = null;

        /**
         * Certificate ID.
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Certificate type. Valid values: CA or SVR (server certificate).
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * Whether it is the default certificate of the listener. Value:
true: default certificate.
false: expand the certificate.
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * The binding status of the certificate and listener. Values: Associated, Associating, Disassociating, Error.
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AssociatedTime = 'AssociatedTime' in params ? params.AssociatedTime : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeHealthCheckTemplates response structure.
 * @class
 */
class DescribeHealthCheckTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Health check template list.</p>
         * @type {Array.<HealthCheckTemplate> || null}
         */
        this.HealthCheckTemplates = null;

        /**
         * <p>Token for the next query. If the current page is the last page, this field returns empty.</p>
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * <p>Total number of health check templates queried after filtering.</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.HealthCheckTemplates) {
            this.HealthCheckTemplates = new Array();
            for (let z in params.HealthCheckTemplates) {
                let obj = new HealthCheckTemplate();
                obj.deserialize(params.HealthCheckTemplates[z]);
                this.HealthCheckTemplates.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTargetGroupsByTarget response structure.
 * @class
 */
class DescribeTargetGroupsByTargetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTargetGroup request structure.
 * @class
 */
class CreateTargetGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Target Group Type. Value:</p><ul><li><strong>Instance</strong> (default): Cvm server type or Eni type.</li></ul>
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * <p>VPC ID.</p>
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * <p>Whether to preview this request.</p><ul><li><strong>false</strong> (default): Send a normal request to directly create a target group.</li><li><strong>true</strong>: Send a preview request to check whether the parameters, format, and service limits for target group creation meet the requirements.</li></ul>
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * <p>Health check configuration.</p>
         * @type {HealthCheckConfig || null}
         */
        this.HealthCheckConfig = null;

        /**
         * <p>Whether to enable long connections.</p>
         * @type {boolean || null}
         */
        this.KeepaliveEnabled = null;

        /**
         * <p>Backend service protocol type. Values:</p><ul><li><strong>HTTP</strong> (default): supports binding HTTP and HTTPS listeners</li><li><strong>HTTPS</strong>: supports binding HTTPS listeners</li><li><strong>GRPC</strong>: supports binding HTTPS listeners</li><li><strong>GRPCS</strong>: supports binding HTTPS listeners</li></ul>
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * <p>Scheduling algorithm. Value:</p><ul><li><strong>wrr</strong> (default): weighted polling. Backend servers are selected by weight. The higher the weight, the more likely the server is to be polled.</li><li><strong>wlc</strong>: weighted least connections. When different backend servers have the same weight, the server with fewer current connections is more likely to be polled.</li></ul>
         * @type {string || null}
         */
        this.SchedulerAlgorithm = null;

        /**
         * <p>Session persistence configuration.</p>
         * @type {StickySessionConfig || null}
         */
        this.StickySessionConfig = null;

        /**
         * <p>Tag.</p>
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * <p>Target group name, defaulting to the target group ID. It is <strong>1-255</strong> characters long and can contain digits, upper- and lower-case letters, Chinese characters, half-width periods (.), underscores (_), and dashes (-).</p>
         * @type {string || null}
         */
        this.TargetGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

        if (params.HealthCheckConfig) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.HealthCheckConfig)
            this.HealthCheckConfig = obj;
        }
        this.KeepaliveEnabled = 'KeepaliveEnabled' in params ? params.KeepaliveEnabled : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SchedulerAlgorithm = 'SchedulerAlgorithm' in params ? params.SchedulerAlgorithm : null;

        if (params.StickySessionConfig) {
            let obj = new StickySessionConfig();
            obj.deserialize(params.StickySessionConfig)
            this.StickySessionConfig = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;

    }
}

/**
 * Service health status information
 * @class
 */
class TargetHealthStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backend service health status. If DescribeListenerHealthStatus returns only unhealthy backends, this value is UnHealthy.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Backend service instance ID. For a CVM instance, the format is "ins-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * Backend target service IP.
         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * Backend server port.
         * @type {number || null}
         */
        this.TargetPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.TargetPort = 'TargetPort' in params ? params.TargetPort : null;

    }
}

/**
 * CreateListener request structure.
 * @class
 */
class CreateListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Default forwarding rule action list. Currently, a listener supports adding only 1 default forwarding rule action.</p>
         * @type {Array.<DefaultAction> || null}
         */
        this.DefaultActions = null;

        /**
         * <p>Port used by the load balancing instance frontend. Value: 1-65535.</p>
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * <p>Listening protocol. Parameter Value: HTTP, HTTPS, or QUIC.</p>
         * @type {string || null}
         */
        this.ListenerProtocol = null;

        /**
         * <p>Cloud Load Balancer instance ID. The format is alb- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * <p>List of CA certificate IDs configured for the listener. Currently, a listener supports adding only 1 CA certificate.<br>This parameter is required when the CaEnabled parameter value is true.</p>
         * @type {Array.<string> || null}
         */
        this.CaCertificateIds = null;

        /**
         * <p>Whether mutual authentication is enabled.<br>Value:<br>true: enabled.<br>false (default value): not enabled.</p>
         * @type {boolean || null}
         */
        this.CaEnabled = null;

        /**
         * <p>List of server certificate IDs.</p>
         * @type {Array.<string> || null}
         */
        this.CertificateIds = null;

        /**
         * <p>Client token, used to ensure the idempotency of requests.  </p><p>Generate a parameter value from your client to ensure the uniqueness of the value for different requests. ClientToken supports only ASCII characters.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Whether Gzip compression is enabled. Value: true (default): yes. false: no</p>
         * @type {boolean || null}
         */
        this.GzipEnabled = null;

        /**
         * <p>Whether HTTP/2 is enabled. Default value: false for HTTP and true for HTTPS. Only the HTTPS protocol supports this parameter.</p>
         * @type {boolean || null}
         */
        this.Http2Enabled = null;

        /**
         * <p>Connection idle timeout, in seconds.<br>Value range: 1–600.<br>Default value: 15.<br>If no access request is received within the timeout period, load balancing will disconnect the current connection and create a new connection when the next request arrives.</p>
         * @type {number || null}
         */
        this.IdleTimeout = null;

        /**
         * <p>Custom listener name, containing 1–255 characters. It must contain Chinese and harmless string characters, and can contain Chinese, letters, digits, dashes (-), forward slashes (/), half-width periods (.), and underscores (_).</p>
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * <p>Connection request timeout period. Unit: second. Value: 1–600. Default value: 60. If the real server does not return a response within the timeout period, load balancing will abandon waiting and return an HTTP 504 error code to the client.</p>
         * @type {number || null}
         */
        this.RequestTimeout = null;

        /**
         * <p>Security policy ID, format: tls- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.SecurityPolicyId = null;

        /**
         * <p>Tag list. Supports up to 20.</p>
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * <p>X-Forwarded-For configuration</p>
         * @type {XForwardedForConfig || null}
         */
        this.XForwardedForConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DefaultActions) {
            this.DefaultActions = new Array();
            for (let z in params.DefaultActions) {
                let obj = new DefaultAction();
                obj.deserialize(params.DefaultActions[z]);
                this.DefaultActions.push(obj);
            }
        }
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.ListenerProtocol = 'ListenerProtocol' in params ? params.ListenerProtocol : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.CaCertificateIds = 'CaCertificateIds' in params ? params.CaCertificateIds : null;
        this.CaEnabled = 'CaEnabled' in params ? params.CaEnabled : null;
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.GzipEnabled = 'GzipEnabled' in params ? params.GzipEnabled : null;
        this.Http2Enabled = 'Http2Enabled' in params ? params.Http2Enabled : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.RequestTimeout = 'RequestTimeout' in params ? params.RequestTimeout : null;
        this.SecurityPolicyId = 'SecurityPolicyId' in params ? params.SecurityPolicyId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.XForwardedForConfig) {
            let obj = new XForwardedForConfig();
            obj.deserialize(params.XForwardedForConfig)
            this.XForwardedForConfig = obj;
        }

    }
}

/**
 * ModifyLoadBalancerModificationProtection response structure.
 * @class
 */
class ModifyLoadBalancerModificationProtectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Forwarding rule creation information
 * @class
 */
class RuleInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action list of the forwarding rule.
         * @type {Array.<RuleAction> || null}
         */
        this.Actions = null;

        /**
         * List of forward rule conditions.
         * @type {Array.<RuleCondition> || null}
         */
        this.Conditions = null;

        /**
         * Priority. A smaller value indicates higher priority. Must be unique. Value range: 1-10000.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Direction of the forwarding rule. Request: request direction from the client to load balancing. Response: response direction from the real server to load balancing. Default: Request.
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * Forwarding rule name. It can contain 1–255 characters consisting of digits, upper- and lower-case letters, Chinese characters, half-width periods (.), underscores (_), and dashes (-).
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Tag.
         * @type {Array.<TagInfo> || null}
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

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new RuleAction();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RuleCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Default rule action of the listener
 * @class
 */
class DefaultAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding target group configuration. When a listener is created, the target group configuration in the forwarding action enables only a single target group.
         * @type {TargetGroupConfig || null}
         */
        this.TargetGroupConfig = null;

        /**
         * Forward action type. When a listener is created, the default forward action type only supports forwarding to a target group.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TargetGroupConfig) {
            let obj = new TargetGroupConfig();
            obj.deserialize(params.TargetGroupConfig)
            this.TargetGroupConfig = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Target group health check status
 * @class
 */
class TargetGroupHealthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the health check.
         * @type {boolean || null}
         */
        this.HealthCheckEnabled = null;

        /**
         * Target group ID in the format of lbtg- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * List of service health check statuses.
         * @type {Array.<TargetHealthStatusInfo> || null}
         */
        this.TargetHealthStatusInfos = null;

        /**
         * Forward action type. Valid values:
TargetGroup: Forward to a target group.
Redirect: Redirection.
FixedResponse: returns fixed content.
Rewrite: Rewrite.
InsertHeader: Write to an HTTP header.
RemoveHeader: Delete HTTP Header.
Forward action must include one of TargetGroup, Redirect, or FixedResponse, and the execution order is placed last.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HealthCheckEnabled = 'HealthCheckEnabled' in params ? params.HealthCheckEnabled : null;
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.TargetHealthStatusInfos) {
            this.TargetHealthStatusInfos = new Array();
            for (let z in params.TargetHealthStatusInfos) {
                let obj = new TargetHealthStatusInfo();
                obj.deserialize(params.TargetHealthStatusInfos[z]);
                this.TargetHealthStatusInfos.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * List of relationships between security policies and listeners.
 * @class
 */
class SecurityPolicyRelations extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of relationships between security policies and listeners.
         * @type {Array.<RelatedListener> || null}
         */
        this.RelatedListeners = null;

        /**
         * Security policy ID, format: tls- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.SecurityPolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RelatedListeners) {
            this.RelatedListeners = new Array();
            for (let z in params.RelatedListeners) {
                let obj = new RelatedListener();
                obj.deserialize(params.RelatedListeners[z]);
                this.RelatedListeners.push(obj);
            }
        }
        this.SecurityPolicyId = 'SecurityPolicyId' in params ? params.SecurityPolicyId : null;

    }
}

/**
 * DescribeSecurityPolicyRelations request structure.
 * @class
 */
class DescribeSecurityPolicyRelationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security policy ID list. ID format: tls- followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.SecurityPolicyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityPolicyIds = 'SecurityPolicyIds' in params ? params.SecurityPolicyIds : null;

    }
}

/**
 * Application CLB operation lock configuration.
 * @class
 */
class LoadBalancerOperationLocksItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The causes for the lock. Valid when **LoadBalancerStatus** is **Abnormal**.
         * @type {string || null}
         */
        this.LockReason = null;

        /**
         * Lock type. Valid values:

- **SecurityLocked**: Security lock.

- **RelatedResourceLocked**: Related resource locked.

- **FinancialLocked**: Locked due to arrears.

- **ResidualLocked**: residual lock.
         * @type {string || null}
         */
        this.LockType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LockReason = 'LockReason' in params ? params.LockReason : null;
        this.LockType = 'LockType' in params ? params.LockType : null;

    }
}

/**
 * DescribeLoadBalancers request structure.
 * @class
 */
class DescribeLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Query filter criteria, supporting the following fields</p><ul><li><strong>LoadBalancerId</strong>: Cloud Load Balancer instance ID</li><li><strong>LoadBalancerName</strong>: CLB name</li><li><strong>LoadBalancerStatus</strong>: load balancing status</li><li><strong>VpcId</strong>: VPC ID</li><li><strong>tag:tag-key</strong>: filter by tag key-value pair. Replace tag-key with the actual tag key. For example, <code>tag:env</code> means filtering by the tag key <code>env</code>.</li><li><strong>AddressType</strong>: network type<ul><li><strong>Intranet</strong>: private network</li><li><strong>Internet</strong>: public network</li></ul></li><li><strong>AddressIpVersion</strong>:<ul><li><strong>IPv4</strong>: IPv4 address</li><li><strong>IPv6</strong>: IPv6 address</li></ul></li><li><strong>SecurityGroupId</strong>: security group ID</li></ul>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * <p>Number of entries displayed each time during a batch query. Value range: <strong>1</strong>–<strong>100</strong>. Default value: <strong>20</strong>.</p>
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * <p>Whether there is a token for the next query. Value:</p><ul><li>Not required for the first query or when there is no next query.</li><li>If there is a next query, the value is the <strong>NextToken</strong> returned from the last API call.</li></ul>
         * @type {string || null}
         */
        this.NextToken = null;

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
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * ModifyTargetsInTargetGroup request structure.
 * @class
 */
class ModifyTargetsInTargetGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID in the format of lbtg- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * List of backend services to be modified.
         * @type {Array.<TargetToModify> || null}
         */
        this.Targets = null;

        /**
         * Whether to preview this request. 
- **false** (default): Send a normal request and directly modify the backend service information. 
- **true**: Send a preview request to check whether the modified backend service parameters, format, and service limits meet the requirements.
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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new TargetToModify();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * DescribeSecurityPolicyCapabilities request structure.
 * @class
 */
class DescribeSecurityPolicyCapabilitiesRequest extends  AbstractModel {
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
 * Health check configuration
 * @class
 */
class HealthCheckConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the health check.
- **true**: enable.
- **false**: not enabled.
         * @type {boolean || null}
         */
        this.HealthCheckEnabled = null;

        /**
         * Health check status code. Value:
- When the health check protocol is **HTTP/HTTPS**:
	- **http_1xx**
	- **http_2xx** (default value)
	-  **http_3xx**
	-  **http_4xx**
	-  **http_5xx**
- When the health check protocol is **gRPC**: default value: 12, value range: 0-99. The input value can be a numerical value, multiple values, a range, or a composite of these, for example:
	- **"20"**
	- **"0-99"**
> This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, **GRPC**, or **GRPCS**.
         * @type {Array.<string> || null}
         */
        this.HealthCheckCodes = null;

        /**
         * Threshold for determining backend service health. After the number of consecutive successful health checks reaches this value, the backend service status changes from **unhealthy** to **healthy**.
Value range: **2**-**10**.
Default value: **2**.
         * @type {number || null}
         */
        this.HealthCheckHealthyThreshold = null;

        /**
         * Health check domain. If this parameter is not set, the intranet IP of the backend service is used as the health check address by default.
Domain restriction:
-Length limit: **1-255** characters.
- It can contain lowercase letters, digits, hyphens (-), and half-width periods (.).
-At least one half-width period (.) is required, and it cannot appear at the beginning or end.
-The rightmost domain tag can only contain letters. It cannot contain digits or en dashes (-).
-En dash (-) cannot appear at the beginning or end.
>This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, **GRPC**, or **GRPCS**.
         * @type {string || null}
         */
        this.HealthCheckHost = null;

        /**
         * HTTP version for health check.
- **HTTP1.1** (default)
- **HTTP1.0** 
> This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
         * @type {string || null}
         */
        this.HealthCheckHttpVersion = null;

        /**
         * Health check interval. Unit: second.
Valid values: **2**-**300**.
Default value: **5**.
         * @type {number || null}
         */
        this.HealthCheckInterval = null;

        /**
         * Health check method. Valid values:
- **GET**
- **HEAD** (default value)
> This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
         * @type {string || null}
         */
        this.HealthCheckMethod = null;

        /**
         * Forwarding rule path for health check.
Length: 1–80 characters. Only letters, digits, characters `-/.%?#&=` and extended characters `_;~!()*[]@$^:',+` can be used. The URL must start with a forward slash (/).
> The forwarding rule path parameter takes effect only when **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, **GRPC**, or **GRPCS**.
         * @type {string || null}
         */
        this.HealthCheckPath = null;

        /**
         * Health check accesses the backend server port.

Valid values: **0-65535**.

Default value: **0**, which indicates the backend server port.
         * @type {number || null}
         */
        this.HealthCheckPort = null;

        /**
         * Health check protocol. Valid values:
- **HTTP** (default): Simulate browser access requests by sending HEAD or GET requests to check whether the server application is healthy.
- **HTTPS**: Checks the health of a server application by sending HEAD or GET requests to simulate browser access requests. (Encrypts data and is more secure compared with HTTP.)
- **TCP**: Detect whether the server port is alive by sending SYN handshake messages.
- **GRPC**: Check whether the server application is healthy by sending a POST request.
- **GRPCS**: Send a POST request to check whether the server application is healthy.
         * @type {string || null}
         */
        this.HealthCheckProtocol = null;

        /**
         * timeout period for health check. Unit: seconds.
Valid values: **2**-**60**.
Default value: **2**.
         * @type {number || null}
         */
        this.HealthCheckTimeout = null;

        /**
         * Threshold for determining an unhealthy backend service. The backend service status changes from **healthy** to **unhealthy** after the health check fails this number of consecutive times.
Value range: **2**-**10**.
Default value: **2**.
         * @type {number || null}
         */
        this.HealthCheckUnhealthyThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HealthCheckEnabled = 'HealthCheckEnabled' in params ? params.HealthCheckEnabled : null;
        this.HealthCheckCodes = 'HealthCheckCodes' in params ? params.HealthCheckCodes : null;
        this.HealthCheckHealthyThreshold = 'HealthCheckHealthyThreshold' in params ? params.HealthCheckHealthyThreshold : null;
        this.HealthCheckHost = 'HealthCheckHost' in params ? params.HealthCheckHost : null;
        this.HealthCheckHttpVersion = 'HealthCheckHttpVersion' in params ? params.HealthCheckHttpVersion : null;
        this.HealthCheckInterval = 'HealthCheckInterval' in params ? params.HealthCheckInterval : null;
        this.HealthCheckMethod = 'HealthCheckMethod' in params ? params.HealthCheckMethod : null;
        this.HealthCheckPath = 'HealthCheckPath' in params ? params.HealthCheckPath : null;
        this.HealthCheckPort = 'HealthCheckPort' in params ? params.HealthCheckPort : null;
        this.HealthCheckProtocol = 'HealthCheckProtocol' in params ? params.HealthCheckProtocol : null;
        this.HealthCheckTimeout = 'HealthCheckTimeout' in params ? params.HealthCheckTimeout : null;
        this.HealthCheckUnhealthyThreshold = 'HealthCheckUnhealthyThreshold' in params ? params.HealthCheckUnhealthyThreshold : null;

    }
}

/**
 * ModifyTargetGroupAttributes request structure.
 * @class
 */
class ModifyTargetGroupAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Whether to preview this request.</p><ul><li><strong>false</strong> (default): Send a normal request to directly modify the target group.</li><li><strong>true</strong>: Send a preview request to check whether the parameters, format, and service limits for modifying the target group meet the requirements.</li></ul>
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * <p>Health check configuration.</p>
         * @type {HealthCheckConfig || null}
         */
        this.HealthCheckConfig = null;

        /**
         * <p>Whether to enable long connections.</p>
         * @type {boolean || null}
         */
        this.KeepaliveEnabled = null;

        /**
         * <p>Scheduling algorithm. Values:</p><ul><li><strong>wrr</strong>: weighted polling. Real servers are selected by weight. The higher the weight, the more chances a server stands to be polled.</li><li><strong>wlc</strong>: number of weighted least connections. When weight values of different real servers are the same, the server with fewer current connections stands more chances to be polled.</li></ul>
         * @type {string || null}
         */
        this.SchedulerAlgorithm = null;

        /**
         * <p>Session persistence configuration.</p>
         * @type {StickySessionConfig || null}
         */
        this.StickySessionConfig = null;

        /**
         * <p>Target group ID, format: lbtg- followed by 8 alphanumeric characters.</p>
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * <p>Target group name. It can contain 1–255 characters, consisting of digits, upper- and lower-case letters, Chinese characters, half-width periods (.), underscores (_), and dashes (-). If no target group name is specified, the ID is used as the target group name by default.</p>
         * @type {string || null}
         */
        this.TargetGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

        if (params.HealthCheckConfig) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.HealthCheckConfig)
            this.HealthCheckConfig = obj;
        }
        this.KeepaliveEnabled = 'KeepaliveEnabled' in params ? params.KeepaliveEnabled : null;
        this.SchedulerAlgorithm = 'SchedulerAlgorithm' in params ? params.SchedulerAlgorithm : null;

        if (params.StickySessionConfig) {
            let obj = new StickySessionConfig();
            obj.deserialize(params.StickySessionConfig)
            this.StickySessionConfig = obj;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;

    }
}

/**
 * Health check template information
 * @class
 */
class HealthCheckTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Health check status code. Value:
- When the health check protocol is **HTTP/HTTPS**:
	- **http_1xx**
	- **http_2xx** (default value)
	-  **http_3xx**
	-  **http_4xx**
	-  **http_5xx**
- When the health check protocol is **GRPC/GRPCS**: default value is **12**, value range is **0-99**, input value can be numerical, multiple values or ranges, as well as combinations, for example:
	- **"20"**
	- **"0-99"**
         * @type {Array.<string> || null}
         */
        this.HealthCheckCodes = null;

        /**
         * Threshold for determining backend service health. The backend service status changes from **unhealthy** to **healthy** after this number of consecutive successful health checks.
Value range: **2**-**10**.
Default value: **2**.
         * @type {number || null}
         */
        this.HealthCheckHealthyThreshold = null;

        /**
         * Health check domain name.
Length limit: **1-255** characters.
It can contain lowercase letters, digits, hyphens (-), and half-width periods (.).

> This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP/HTTPS/GRPC/GRPCS**.
         * @type {string || null}
         */
        this.HealthCheckHost = null;

        /**
         * HTTP version for health check. Parameter Value:
- **HTTP1.1** (default)
- **HTTP1.0** 
> This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
         * @type {string || null}
         */
        this.HealthCheckHttpVersion = null;

        /**
         * The interval of health check. Unit: second.
Valid values: **2**-**300**.
Default value: **5**.
         * @type {number || null}
         */
        this.HealthCheckInterval = null;

        /**
         * Health check method. Valid values:
- **GET**
- **HEAD** (default value)
> This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP** or **HTTPS**.
         * @type {string || null}
         */
        this.HealthCheckMethod = null;

        /**
         * Health check forwarding rule path. Length: **1-80** characters. Only letters, digits, characters `-/.%?#&=` and extended characters `_;~!（)*[]@$^:',+` can be used. The URL must start with a forward slash (/). 
> The forwarding rule path parameter takes effect only when **HealthCheckProtocol** is set to **HTTP/HTTPS/GRPC/GRPCS**.
         * @type {string || null}
         */
        this.HealthCheckPath = null;

        /**
         * Port for health check to access the backend server.

Valid values: **0-65535**.

Default value: **0**, which indicates the backend server port.
         * @type {number || null}
         */
        this.HealthCheckPort = null;

        /**
         * Health check protocol. Valid values:
- **HTTP** (default): Check whether the server application is healthy by sending HEAD or GET requests to simulate browser access requests.
- **HTTPS**: Check whether the server application is healthy by sending HEAD or GET requests to simulate browser access requests. (Encrypt data, more secure compared with HTTP.)
- **TCP**: Detect whether the server port is alive by sending SYN handshake messages.
- **GRPC**: Check whether the server application is healthy by sending a POST or GET request.
- **GRPCS**: Check whether the server application is healthy by sending a POST or GET request.
         * @type {string || null}
         */
        this.HealthCheckProtocol = null;

        /**
         * Health check template ID, in the format of hct- followed by alphanumeric characters. All APIs (creation, querying, modification, deletion) use the hct- prefix.
         * @type {string || null}
         */
        this.HealthCheckTemplateId = null;

        /**
         * Health check template name. It must contain **1-255** characters, consisting of digits, upper- and lower-case letters, Chinese characters, half-width periods (.), underscores (_), and dashes (-).
         * @type {string || null}
         */
        this.HealthCheckTemplateName = null;

        /**
         * timeout period for the health check. Unit: seconds.
Valid values: **2**-**60**.
Default value: **2**.
         * @type {number || null}
         */
        this.HealthCheckTimeout = null;

        /**
         * Threshold for determining an unhealthy backend service. The backend service status changes from **healthy** to **unhealthy** after the health check fails this number of times consecutively.
Value range: **2**-**10**.
Default value: **2**.
         * @type {number || null}
         */
        this.HealthCheckUnhealthyThreshold = null;

        /**
         * Modify the time.
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Tag.
         * @type {Array.<TagInfo> || null}
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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.HealthCheckCodes = 'HealthCheckCodes' in params ? params.HealthCheckCodes : null;
        this.HealthCheckHealthyThreshold = 'HealthCheckHealthyThreshold' in params ? params.HealthCheckHealthyThreshold : null;
        this.HealthCheckHost = 'HealthCheckHost' in params ? params.HealthCheckHost : null;
        this.HealthCheckHttpVersion = 'HealthCheckHttpVersion' in params ? params.HealthCheckHttpVersion : null;
        this.HealthCheckInterval = 'HealthCheckInterval' in params ? params.HealthCheckInterval : null;
        this.HealthCheckMethod = 'HealthCheckMethod' in params ? params.HealthCheckMethod : null;
        this.HealthCheckPath = 'HealthCheckPath' in params ? params.HealthCheckPath : null;
        this.HealthCheckPort = 'HealthCheckPort' in params ? params.HealthCheckPort : null;
        this.HealthCheckProtocol = 'HealthCheckProtocol' in params ? params.HealthCheckProtocol : null;
        this.HealthCheckTemplateId = 'HealthCheckTemplateId' in params ? params.HealthCheckTemplateId : null;
        this.HealthCheckTemplateName = 'HealthCheckTemplateName' in params ? params.HealthCheckTemplateName : null;
        this.HealthCheckTimeout = 'HealthCheckTimeout' in params ? params.HealthCheckTimeout : null;
        this.HealthCheckUnhealthyThreshold = 'HealthCheckUnhealthyThreshold' in params ? params.HealthCheckUnhealthyThreshold : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
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
         * Availability Zone List
         * @type {Array.<Zone> || null}
         */
        this.Zones = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new Zone();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSecurityPolicy request structure.
 * @class
 */
class CreateSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>List of encryption suites supported by the security policy. Encryption suites are used to negotiate the encryption algorithm between client and server.</p><p><strong>Configuration instructions:</strong></p><ul><li>The optional range of encryption suites depends on the selected TLS protocol version (TLSVersions parameter).</li><li>An encryption suite can be added to the list as long as it is supported by any one of the selected TLS versions.</li><li>If TLSVersions includes TLSv1.3: you can add TLSv1.3 exclusive encryption suites without specifying them (the system will auto-complete all TLSv1.3 suites); if specified, all TLSv1.3 exclusive encryption suites must be included. Specifying only part of them is not supported.</li></ul><p><strong>Get available encryption suites:</strong><br>Call the <a href="https://www.tencentcloud.com/document/api/1822/133718?from_cn_redirect=1">DescribeSecurityPolicyCapabilities</a> API to query the encryption suite list supported by each TLS version.</p>
         * @type {Array.<string> || null}
         */
        this.Ciphers = null;

        /**
         * <p>List of TLS protocol versions supported by the security policy. TLS (Transport Layer Security) is used to ensure communication security between clients and load balancing.</p><p><strong>Available values:</strong></p><ul><li><strong>TLSv1.0</strong>: Best compatibility, but low security level. Not recommended for production environment.</li><li><strong>TLSv1.1</strong>: Slightly better security than TLSv1.0, but still not recommended.</li><li><strong>TLSv1.2</strong>: Current mainstream security protocol version, balancing security and compatibility.</li><li><strong>TLSv1.3</strong>: Latest version with the highest security and better performance. Recommended for priority use.</li></ul><p><strong>Recommendation:</strong> For production environment, at least select TLSv1.2. If client support is available, preferentially enable TLSv1.3.</p>
         * @type {Array.<string> || null}
         */
        this.TLSVersions = null;

        /**
         * <p>Client idempotency token.</p><p>Used for ensuring request idempotency and preventing duplicate creation caused by network timeout or client retry. We recommend using a UUID as the token value. When the same ClientToken is used for repeated requests within its validity period, the server will return the same result.</p>
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * <p>Whether to only execute a preflight request. Values:</p><ul><li><strong>true</strong>: Only execute a preflight request without creating resources. The preflight request will verify parameter format, permission, and resource quota, helping you identify potential issues before proceeding with any operations.</li><li><strong>false</strong> (default): Execute a normal request. After the preflight passes, a security policy will be created directly.</li></ul>
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * <p>security policy name. Used to identify and distinguish different security policies.</p><p><strong>Naming rule:</strong></p><ul><li>2–128 characters in length.</li><li>Must start with English letters or Chinese characters.</li><li>Can contain English letters, Chinese characters, digits, half-width periods (.), underscores (_), and dashes (-).</li></ul><p><strong>Recommendation:</strong> Use a name with business meaning, such as "prod-high-security" or "test environment policy".</p>
         * @type {string || null}
         */
        this.SecurityPolicyName = null;

        /**
         * <p>Tag list of the security policy. Tags are used for resource classification and management, making it easy to filter and organize resources by business, environment, department, and other dimensions.</p><p>Each tag consists of a Key-Value pair, and tag keys cannot be repeated under the same resource.</p>
         * @type {Array.<TagInfo> || null}
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
        this.Ciphers = 'Ciphers' in params ? params.Ciphers : null;
        this.TLSVersions = 'TLSVersions' in params ? params.TLSVersions : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.SecurityPolicyName = 'SecurityPolicyName' in params ? params.SecurityPolicyName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Brief information output parameters of the target group
 * @class
 */
class TargetGroupOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Health check configuration.
         * @type {HealthCheckConfig || null}
         */
        this.HealthCheckConfig = null;

        /**
         * Whether to enable long connections.
         * @type {boolean || null}
         */
        this.KeepaliveEnabled = null;

        /**
         * Backend service protocol type. Value:
- **HTTP** (default): support binding HTTP and HTTPS listeners
- **HTTPS**: support binding HTTPS listeners
- **GRPC**: support binding HTTPS listeners
- **GRPCS**: support binding HTTPS listeners
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Number of load balancers associated with the target group.
         * @type {number || null}
         */
        this.RelatedLoadBalancersCount = null;

        /**
         * Scheduling algorithm.
         * @type {string || null}
         */
        this.SchedulerAlgorithm = null;

        /**
         * Session persistence configuration.
         * @type {StickySessionConfig || null}
         */
        this.StickySessionConfig = null;

        /**
         * Tag.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Target group ID in the format of lbtg- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Target group name. Defaults to the target group ID. It contains 1–255 characters, consisting of digits, upper- and lower-case letters, Chinese characters, half-width periods (.), underscores (_), and dashes (-).
         * @type {string || null}
         */
        this.TargetGroupName = null;

        /**
         * Status of the target group. Valid values:
- **Provisioning**: Under creation.
- **ProvisionFailed**: Creation failed.
- **Active**: Running.
- **Configuring**: configuration changing.
         * @type {string || null}
         */
        this.TargetGroupStatus = null;

        /**
         * Target group type. Valid values:
- **Instance**: Cvm server type or Eni type
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * Virtual Private Cloud (VPC) ID.
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.HealthCheckConfig) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.HealthCheckConfig)
            this.HealthCheckConfig = obj;
        }
        this.KeepaliveEnabled = 'KeepaliveEnabled' in params ? params.KeepaliveEnabled : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.RelatedLoadBalancersCount = 'RelatedLoadBalancersCount' in params ? params.RelatedLoadBalancersCount : null;
        this.SchedulerAlgorithm = 'SchedulerAlgorithm' in params ? params.SchedulerAlgorithm : null;

        if (params.StickySessionConfig) {
            let obj = new StickySessionConfig();
            obj.deserialize(params.StickySessionConfig)
            this.StickySessionConfig = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;
        this.TargetGroupStatus = 'TargetGroupStatus' in params ? params.TargetGroupStatus : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * InquirePriceCreateLoadBalancer response structure.
 * @class
 */
class InquirePriceCreateLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Inquiry results.
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeListenerHealthStatus response structure.
 * @class
 */
class DescribeListenerHealthStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID, format: lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Listener port.
         * @type {string || null}
         */
        this.ListenerPort = null;

        /**
         * Listener protocol.
         * @type {string || null}
         */
        this.ListenerProtocol = null;

        /**
         * Token for the next query. If it is empty, this is the last page.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Health status of the forwarding rule.
         * @type {Array.<RuleHealthStatusInfo> || null}
         */
        this.RuleHealthStatusInfos = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.ListenerProtocol = 'ListenerProtocol' in params ? params.ListenerProtocol : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.RuleHealthStatusInfos) {
            this.RuleHealthStatusInfos = new Array();
            for (let z in params.RuleHealthStatusInfos) {
                let obj = new RuleHealthStatusInfo();
                obj.deserialize(params.RuleHealthStatusInfos[z]);
                this.RuleHealthStatusInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security policy information.
 * @class
 */
class SecurityPolicyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of supported cipher suites.
Supported encryption suite, which depends on the TLSVersions value.
Cipher only needs to be supported by any passed-in TLSVersions.

Description: If TLSv1.3 is selected, the Cipher list must contain ciphers supported by TLSv1.3.

Call the DescribeSecurityPolicyCapabilities API to get the supported encryption suite list.
         * @type {Array.<string> || null}
         */
        this.Ciphers = null;

        /**
         * Creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Security policy ID, format: tls- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.SecurityPolicyId = null;

        /**
         * Security policy name. It must be 2-128 English or Chinese characters, starting with letters or Chinese characters. It can consist of digits, half-width periods (.), underscores (_), and dashes (-).
         * @type {string || null}
         */
        this.SecurityPolicyName = null;

        /**
         * Security policy status. The current API most often returns Active, which means the security policy is in available status.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * List of supported TLS protocol versions. Optional values include: TLSv1.0, TLSv1.1, TLSv1.2, TLSv1.3.
         * @type {Array.<string> || null}
         */
        this.TLSVersions = null;

        /**
         * Tag information.
         * @type {Array.<TagInfo> || null}
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
        this.Ciphers = 'Ciphers' in params ? params.Ciphers : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SecurityPolicyId = 'SecurityPolicyId' in params ? params.SecurityPolicyId : null;
        this.SecurityPolicyName = 'SecurityPolicyName' in params ? params.SecurityPolicyName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TLSVersions = 'TLSVersions' in params ? params.TLSVersions : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * ModifyRulesAttributes request structure.
 * @class
 */
class ModifyRulesAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID, format: lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Cloud Load Balancer instance ID, in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Forwarding rule list.
         * @type {Array.<RuleModify> || null}
         */
        this.Rules = null;

        /**
         * Whether it is pre-check only for this request.
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleModify();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * Deletion protection status information.
 * @class
 */
class DeletionProtectionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable deletion protection. Once enabled, instances can be prevented from being deleted accidentally.
- true: enable deletion protection
- false: disable deletion protection
         * @type {boolean || null}
         */
        this.DeletionProtectionEnabled = null;

        /**
         * Reason explanation for enabling modification protection.
Length: 1 to 255 characters. It must contain Chinese and characters from harmless strings. It can contain Chinese, letters, digits, hyphens (-), forward slashes (/), half-width periods (.), and underscores (_).
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeletionProtectionEnabled = 'DeletionProtectionEnabled' in params ? params.DeletionProtectionEnabled : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * DisassociateListenerAdditionalCertificates request structure.
 * @class
 */
class DisassociateListenerAdditionalCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of extension certificate IDs to be unbound.
         * @type {Array.<string> || null}
         */
        this.CertificateIds = null;

        /**
         * Listener ID, format: lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * CLB instance ID, in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Client token, used for ensuring request idempotency. Generate a parameter value from your client to ensure uniqueness of the value for different requests. ClientToken supports only ASCII characters.
If not specified, the system automatically uses the RequestId of the API request as the ClientToken ID. The RequestId of each API request may not be the same.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * Whether to only precheck this request. Parameter Value:
true: send a check request without unbinding the extension certificate from the HTTPS and QUIC listeners. Check items include whether required parameters are filled in, request format, and service limits. If the check fails, return the corresponding error. If the check passes, return the error code DryRunOperation.
false (default): Send a normal request. After the check is passed, return the HTTP 2xx status code and directly perform the operation.
         * @type {string || null}
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
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * DescribeLoadBalancerDetail request structure.
 * @class
 */
class DescribeLoadBalancerDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID, in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

    }
}

/**
 * Insert HTTP Header information.
 * @class
 */
class InsertHTTPHeaderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of the inserted HTTP Header. Length: 1–40 characters. Supported character sets: a-z, a-z, 0-9, -, and _.
Chinese characters are not allowed. No support for Cookie, Host, Content-Length, Connection, Upgrade, transfer-encoding, keep-alive, te, authority, x-forwarded-for, x-forwarded-proto, x-forwarded-host, and x-forwarded-port.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Type of the HTTP Header value.
When ValueType is SystemDefined, the value range is as follows: ClientPort: client port, ClientIp: client IP address, Protocol: protocol of client requests, CLBPort: listening port of the load balancing instance.
When ValueType is UserDefined, it is a printable character of 1 to 128 characters in length. It does not support ". It cannot be space at the beginning and ending, and cannot be \ at the end.
When ValueType is ReferenceHeader, refer to a header in the request header. It must be 1–128 printable characters. It does not support ". It cannot begin or end with a space, and cannot end with \.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Type of the HTTP Header value. Value:
SystemDefined: system defined header.
UserDefined: user-defined header.
ReferenceHeader: refers to one header in the request header.
         * @type {string || null}
         */
        this.ValueType = null;

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
        this.ValueType = 'ValueType' in params ? params.ValueType : null;

    }
}

/**
 * DescribeHealthCheckTemplates request structure.
 * @class
 */
class DescribeHealthCheckTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Filter. Query health check templates by specifying filter criteria. Supported:</p><ul><li>Name is <strong>HealthCheckTemplateName</strong>. Filter health check templates by name. <strong>Values</strong> is a template name list.</li><li>Name is <strong>HealthCheckProtocol</strong>. Filter health check templates by health check protocol. <strong>Values</strong> is a protocol list.</li><li>Filter by tag.</li></ul>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * <p>Health check template ID list. The ID format is hct- followed by alphanumeric characters.</p>
         * @type {Array.<string> || null}
         */
        this.HealthCheckTemplateIds = null;

        /**
         * <p>The number of returned lists. Default value: 20. Maximum value: 100.</p>
         * @type {string || null}
         */
        this.MaxResults = null;

        /**
         * <p>Token for the next query. Not required for the first query or when there is no next query.<br>If there is a next query, the value is the NextToken returned from the last API call.</p>
         * @type {string || null}
         */
        this.NextToken = null;

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
        this.HealthCheckTemplateIds = 'HealthCheckTemplateIds' in params ? params.HealthCheckTemplateIds : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * DescribeSystemSecurityPolicies response structure.
 * @class
 */
class DescribeSystemSecurityPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of system security policies.
         * @type {Array.<SecurityPolicyInfo> || null}
         */
        this.SecurityPolicies = null;

        /**
         * Total number of security policies.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.SecurityPolicies) {
            this.SecurityPolicies = new Array();
            for (let z in params.SecurityPolicies) {
                let obj = new SecurityPolicyInfo();
                obj.deserialize(params.SecurityPolicies[z]);
                this.SecurityPolicies.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HTTP query string information
 * @class
 */
class HTTPQueryStringInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key of the query string. Length: 1–16 characters. Supports printable characters. Does not support spaces or #[]{}\|<>&.
Supports * as a multi-character wildcard and ? as a single-character wildcard.


         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value of the query string. Length: 1–128 characters. Supports printable characters. Does not support spaces or #[]{}\|<>&.
Supports * as a multi-character wildcard and ? as a single-character wildcard.
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
 * ModifyHealthCheckTemplate response structure.
 * @class
 */
class ModifyHealthCheckTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DeleteRules response structure.
 * @class
 */
class DeleteRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeQuota response structure.
 * @class
 */
class DescribeQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quota list. Each element represents the query result of a quota type. When ResourceIds is input in the request, each element represents the query result of a composite of a quota type and a resource ID.
         * @type {Array.<QuotaInfo> || null}
         */
        this.Quotas = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Quotas) {
            this.Quotas = new Array();
            for (let z in params.Quotas) {
                let obj = new QuotaInfo();
                obj.deserialize(params.Quotas[z]);
                this.Quotas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTargetGroups response structure.
 * @class
 */
class DeleteTargetGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Indicates the price of CLB
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * Describes instance pricing. Unit: CNY/hour.
         * @type {PostPayPriceInfo || null}
         */
        this.InstancePrice = null;

        /**
         * Describes the lcu price. Unit: CNY/lcu.
         * @type {PostPayPriceInfo || null}
         */
        this.LcuPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new PostPayPriceInfo();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

        if (params.LcuPrice) {
            let obj = new PostPayPriceInfo();
            obj.deserialize(params.LcuPrice)
            this.LcuPrice = obj;
        }

    }
}

/**
 * ModifyListenerAttributes request structure.
 * @class
 */
class ModifyListenerAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Listener ID, format: lst- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * Cloud Load Balancer instance ID, in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * CA certificate ID list for the listener configuration. Currently only support adding 1 CA certificate.
         * @type {Array.<string> || null}
         */
        this.CaCertificateIds = null;

        /**
         * Whether mutual authentication is enabled.
Valid values:
true: enabled.
false (default value): not enabled.
         * @type {boolean || null}
         */
        this.CaEnabled = null;

        /**
         * List of server certificate IDs.
         * @type {Array.<string> || null}
         */
        this.CertificateIds = null;

        /**
         * Client Token, used for ensuring request idempotency.  

Generate a parameter value from your client to underwrite the uniqueness of the value for different requests. ClientToken supports only ASCII characters.
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * List of default forward rule actions. Currently, a listener supports adding only 1 default forward rule action.
         * @type {Array.<DefaultAction> || null}
         */
        this.DefaultActions = null;

        /**
         * Whether to enable Gzip compression.
         * @type {boolean || null}
         */
        this.GzipEnabled = null;

        /**
         * Whether to enable HTTP/2. Only HTTPS protocol supports this parameter.
         * @type {boolean || null}
         */
        this.Http2Enabled = null;

        /**
         * Specify the idle timeout for a connection. Unit: seconds.
Valid values: 1-600.
Default value: 15.
If no access request is received within the set time, load balancing will temporarily disconnect the current connection and reestablish a new connection when the next request arrives.
         * @type {number || null}
         */
        this.IdleTimeout = null;

        /**
         * Custom listener name, 1–255 characters in length. It must contain Chinese and harmless string characters, and can contain Chinese, letters, digits, dashes (-), forward slashes (/), half-width periods (.), and underscores (_).
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * Specify the request timeout. Unit: seconds.
Value: 1-600.
Default value: 60.
If the real server does not respond within the timeout period, load balancing will abandon waiting and return an HTTP 504 error code to the client.
         * @type {number || null}
         */
        this.RequestTimeout = null;

        /**
         * Security policy ID in the format of tls- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.SecurityPolicyId = null;

        /**
         * XForwardedFor configuration.
         * @type {XForwardedForConfig || null}
         */
        this.XForwardedForConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.CaCertificateIds = 'CaCertificateIds' in params ? params.CaCertificateIds : null;
        this.CaEnabled = 'CaEnabled' in params ? params.CaEnabled : null;
        this.CertificateIds = 'CertificateIds' in params ? params.CertificateIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.DefaultActions) {
            this.DefaultActions = new Array();
            for (let z in params.DefaultActions) {
                let obj = new DefaultAction();
                obj.deserialize(params.DefaultActions[z]);
                this.DefaultActions.push(obj);
            }
        }
        this.GzipEnabled = 'GzipEnabled' in params ? params.GzipEnabled : null;
        this.Http2Enabled = 'Http2Enabled' in params ? params.Http2Enabled : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.RequestTimeout = 'RequestTimeout' in params ? params.RequestTimeout : null;
        this.SecurityPolicyId = 'SecurityPolicyId' in params ? params.SecurityPolicyId : null;

        if (params.XForwardedForConfig) {
            let obj = new XForwardedForConfig();
            obj.deserialize(params.XForwardedForConfig)
            this.XForwardedForConfig = obj;
        }

    }
}

/**
 * Backend service removed from the target group.
 * @class
 */
class TargetToRemove extends  AbstractModel {
    constructor(){
        super();

        /**
         * Port used by the real server. Value range: **1-65535**.

>When the **targetType** value of the target group is **Instance**, this parameter is required.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Backend service IP. At least one of **TargetIp** and **TargetId** is required.

- When the server group is of the **Instance** type, this parameter is the primary or secondary private IP of **Eni**.

         * @type {string || null}
         */
        this.TargetIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;

    }
}

/**
 * Billing configuration of an application CLB instance.
 * @class
 */
class LoadBalancerBillingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing type of the instance.

Parameter value **POSTPAID_BY_HOUR**: pay-as-you-go.
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * Bandwidth package ID.
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
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

    }
}

/**
 * Tag information
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * Basic target group configuration
 * @class
 */
class TargetGroupTuple extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target group ID in the format of lbtg- followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * Weight. Value range: [0, 100]. Default value: 10.
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * CreateLoadBalancer response structure.
 * @class
 */
class CreateLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Backend service that needs to be modified.
 * @class
 */
class TargetToModify extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backend service IP. At least one of **TargetIp** and **TargetId** is required.

- When the server group is of the **Instance** type, this parameter is the primary or secondary private IP of **Eni**.

         * @type {string || null}
         */
        this.TargetIp = null;

        /**
         * Port used by the real server. Value range: **1-65535**.

>When the **targetType** value of the target group is **Instance**, this parameter is required.
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Weight of the backend service. Value range: **0-100**. If the weight is set to **0**, the request will not be forwarded to this backend service.
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetIp = 'TargetIp' in params ? params.TargetIp : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * DescribeListeners request structure.
 * @class
 */
class DescribeListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud Load Balancer instance ID, in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Filter criteria list. Supports up to 20. Supports the following fields.
- **Protocol**: Protocol type
- **Tags**: Tag
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Listener ID list. ID format: lst- followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * Maximum number of data records read this time.
Value: 1-100.
Default value: 20
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for the next query. If it is empty, this queries page 1.
         * @type {string || null}
         */
        this.NextToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * ModifyLoadBalancerModificationProtection request structure.
 * @class
 */
class ModifyLoadBalancerModificationProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cloud Load Balancer instance ID, in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Indicates whether to enable modification protection. Once enabled, the instance is protected from unintended modification or deletion.\n- true: enables modification protection\n- false: disables modification protection
         * @type {boolean || null}
         */
        this.ModificationProtectionEnabled = null;

        /**
         * Whether to only precheck this request. Parameter Value:
- true: Only perform precheck without performing operations on a resource. Check parameter integrity, request format, and service limits. If approved, DryRunOperation is returned. If not approved, the corresponding error is returned.
-false (default): Execute a normal request. After the check is passed, directly perform operations on the resource.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Reason explanation for enabling modification protection.
Length: 1–255 characters. It must be a Chinese or harmless string and can contain Chinese characters, letters, digits, dashes (-), forward slashes (/), half-width periods (.), and underscores (_).
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ModificationProtectionEnabled = 'ModificationProtectionEnabled' in params ? params.ModificationProtectionEnabled : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * DisassociateBandwidthPackageFromLoadBalancer response structure.
 * @class
 */
class DisassociateBandwidthPackageFromLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeLoadBalancerDetail response structure.
 * @class
 */
class DescribeLoadBalancerDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Load balancing details
         * @type {LoadBalancerDetail || null}
         */
        this.LoadBalancerDetail = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.LoadBalancerDetail) {
            let obj = new LoadBalancerDetail();
            obj.deserialize(params.LoadBalancerDetail)
            this.LoadBalancerDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * information
 * @class
 */
class FixedResponseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP response code returned. 2xx, 4xx, and 5xx are supported.
         * @type {number || null}
         */
        this.HttpCode = null;

        /**
         * Fixed content returned. Supports only ASCII characters, up to 1 KB.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Format of the returned fixed content.
Value: text/plain, text/css, text/html, application/javascript, or application/json.
         * @type {string || null}
         */
        this.ContentType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HttpCode = 'HttpCode' in params ? params.HttpCode : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;

    }
}

/**
 * DescribeLoadBalancers response structure.
 * @class
 */
class DescribeLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Application CLB instance list.</p>
         * @type {Array.<LoadBalancer> || null}
         */
        this.LoadBalancers = null;

        /**
         * <p>Entry number displayed each time during batch query.</p>
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * <p>Whether there is a token for the next query. Value:</p><ul><li>If <strong>NextToken</strong> is empty, there is no next query.</li><li>If <strong>NextToken</strong> has a return value, this value is the token for starting the next query.</li></ul>
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * <p>Number of list entries.</p>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.LoadBalancers) {
            this.LoadBalancers = new Array();
            for (let z in params.LoadBalancers) {
                let obj = new LoadBalancer();
                obj.deserialize(params.LoadBalancers[z]);
                this.LoadBalancers.push(obj);
            }
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Filter criteria
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter value array
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
 * AZ and subnet mapping structure
 * @class
 */
class ZoneMappingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Subnet ID.</p>
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * <p>Availability zone ID. Maximum support for adding 10 availability zones. If the current region supports 2 or more availability zones, at least 2 availability zones need to be added.<br>You can obtain the availability zone information corresponding to the availability zone ID by calling the <a href="https://www.tencentcloud.com/document/api/1822/133727?from_cn_redirect=1">DescribeZones</a> API.</p>
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * <p>Load balancing VIP/EIP information</p>
         * @type {LoadBalancerAddress || null}
         */
        this.LoadBalancerAddress = null;

        /**
         * <p>Availability zone status. Value:</p><ul><li><strong>Active</strong>: Running.</li><li><strong>Stopped</strong>: Stopped.</li><li><strong>Shifted</strong>: Has been removed.</li><li><strong>Starting</strong>: Starting.</li><li><strong>Stopping</strong>: Stopping.</li></ul>
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.LoadBalancerAddress) {
            let obj = new LoadBalancerAddress();
            obj.deserialize(params.LoadBalancerAddress)
            this.LoadBalancerAddress = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteListener response structure.
 * @class
 */
class DeleteListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * DescribeSystemSecurityPolicies request structure.
 * @class
 */
class DescribeSystemSecurityPoliciesRequest extends  AbstractModel {
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
 * DeleteTargetGroups request structure.
 * @class
 */
class DeleteTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to preview this request.
- **false** (default): Send a normal request to directly delete the target group.
- **true**: Send a preview request to check whether the parameters, format, and service limits for deleting the target group meet the requirements.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Target group ID list. The ID format is lbtg- followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.TargetGroupIds = 'TargetGroupIds' in params ? params.TargetGroupIds : null;

    }
}

/**
 * DescribeAsyncJobs response structure.
 * @class
 */
class DescribeAsyncJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task list.
         * @type {Array.<Job> || null}
         */
        this.Jobs = null;

        /**
         * Entry number displayed each time during batch query.
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Whether it has the token for the next query. Value: If NextToken is empty, there is no next query. If NextToken has a return value, this value indicates the token for starting the next query.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Number of list entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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

        if (params.Jobs) {
            this.Jobs = new Array();
            for (let z in params.Jobs) {
                let obj = new Job();
                obj.deserialize(params.Jobs[z]);
                this.Jobs.push(obj);
            }
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTargetGroupTargets response structure.
 * @class
 */
class DescribeTargetGroupTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token for the next query. If the current value is the last page, it returns empty.
         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Backend service information.
         * @type {Array.<TargetOutput> || null}
         */
        this.Targets = null;

        /**
         * Total number of backend services in the target group.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new TargetOutput();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityPolicies request structure.
 * @class
 */
class DescribeSecurityPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter condition list for filtering security policies that meet the specified conditions. Multiple filter conditions are in an "AND" relationship with each other.

**Supported filter conditions:**
- **SecurityPolicyNames**: Filter by security policy name. Fuzzy matching is supported.
- **tag:tag-key**: Filter by tag key-value pair. Replace tag-key with the actual tag key. For example, `tag:env` means filtering by the tag key `env`.

**Description:** Each filter condition supports a maximum of 10 values.

         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Maximum number of results returned for a single request. For pagination queries, use together with NextToken.

**Value range:** from 1 to 100.

**Default value:** 20.

         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * Token for the paging query start. Used to obtain the result data on the next page.

**Instructions:**
-No need to set this parameter for the initial query.
- If the last query returned NextToken, it means there is more data. Input this value to retrieve the next page.
-If the last query did not return NextToken or returned empty, it means the current page is the last page.

         * @type {string || null}
         */
        this.NextToken = null;

        /**
         * Security policy ID list. The ID format is `tls-` followed by 8 alphanumeric characters.
         * @type {Array.<string> || null}
         */
        this.SecurityPolicyIds = null;

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
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.SecurityPolicyIds = 'SecurityPolicyIds' in params ? params.SecurityPolicyIds : null;

    }
}

/**
 * DeleteHealthCheckTemplates response structure.
 * @class
 */
class DeleteHealthCheckTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
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
 * Structure of application CLB instances in list view.
 * @class
 */
class LoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access log configuration architecture.
         * @type {AccessLogConfig || null}
         */
        this.AccessLogConfig = null;

        /**
         * IP address version. Value: IPv4 or IPv6.
         * @type {string || null}
         */
        this.AddressIpVersion = null;

        /**
         * LoadBalancer address type. Valid values:

- **Internet**: The load balancing has a public IP address, and the DNS domain name is resolved to the public IP, so it can be accessed via the public network.

- **Intranet**: The load balancer only has a private IP address, and the DNS domain name resolves to the private IP, so it can only be accessed from the private network environment of the VPC where the load balancer is located.
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * Resource creation time.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Deletion protection setting information.
         * @type {DeletionProtectionConfig || null}
         */
        this.DeletionProtection = null;

        /**
         * DNS domain name.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Billing configuration of a load balancing instance.
         * @type {LoadBalancerBillingConfig || null}
         */
        this.LoadBalancerBillingConfig = null;

        /**
         * CLB instance ID, in the format of "alb-" followed by 8 alphanumeric characters.
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * Load balancing instance name.
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * Load balancer operation lock configuration.
         * @type {Array.<LoadBalancerOperationLocksItem> || null}
         */
        this.LoadBalancerOperationLocks = null;

        /**
         * Application CLB instance status. Valid values:

- **Provisioning**: Under creation.
- **Active**: Running.
- **Configuring**: The configuration is being changed.
- **Deleting**: Deleting.
- **ProvisionFailed**: Creation failed.
- **ConfigureFailed**: Configuration adjustment failure.
- **DeletionFailed**: deletion failed.
- **Abnormal**: abnormal status. For the specific exception reason, see the LoadBalancerOperationLocks field.
         * @type {string || null}
         */
        this.LoadBalancerStatus = null;

        /**
         * Modification protection setting information.
         * @type {ModificationProtectionInfo || null}
         */
        this.ModificationProtection = null;

        /**
         * Tag list.
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * Virtual Private Cloud (VPC) ID.
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessLogConfig) {
            let obj = new AccessLogConfig();
            obj.deserialize(params.AccessLogConfig)
            this.AccessLogConfig = obj;
        }
        this.AddressIpVersion = 'AddressIpVersion' in params ? params.AddressIpVersion : null;
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.DeletionProtection) {
            let obj = new DeletionProtectionConfig();
            obj.deserialize(params.DeletionProtection)
            this.DeletionProtection = obj;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.LoadBalancerBillingConfig) {
            let obj = new LoadBalancerBillingConfig();
            obj.deserialize(params.LoadBalancerBillingConfig)
            this.LoadBalancerBillingConfig = obj;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

        if (params.LoadBalancerOperationLocks) {
            this.LoadBalancerOperationLocks = new Array();
            for (let z in params.LoadBalancerOperationLocks) {
                let obj = new LoadBalancerOperationLocksItem();
                obj.deserialize(params.LoadBalancerOperationLocks[z]);
                this.LoadBalancerOperationLocks.push(obj);
            }
        }
        this.LoadBalancerStatus = 'LoadBalancerStatus' in params ? params.LoadBalancerStatus : null;

        if (params.ModificationProtection) {
            let obj = new ModificationProtectionInfo();
            obj.deserialize(params.ModificationProtection)
            this.ModificationProtection = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

module.exports = {
    NotifyUnbindTargetRequest: NotifyUnbindTargetRequest,
    DescribeQuotaRequest: DescribeQuotaRequest,
    InquirePriceCreateLoadBalancerRequest: InquirePriceCreateLoadBalancerRequest,
    DeleteRulesRequest: DeleteRulesRequest,
    SetLoadBalancerSecurityGroupsResponse: SetLoadBalancerSecurityGroupsResponse,
    ZoneMappingsItem: ZoneMappingsItem,
    LoadBalancerDetail: LoadBalancerDetail,
    CreateLoadBalancerRequest: CreateLoadBalancerRequest,
    ModifyLoadBalancerAttributesRequest: ModifyLoadBalancerAttributesRequest,
    DisassociateBandwidthPackageFromLoadBalancerRequest: DisassociateBandwidthPackageFromLoadBalancerRequest,
    CreateHealthCheckTemplateRequest: CreateHealthCheckTemplateRequest,
    DescribeListenerHealthStatusRequest: DescribeListenerHealthStatusRequest,
    HTTPHeaderInfo: HTTPHeaderInfo,
    DeleteHealthCheckTemplatesRequest: DeleteHealthCheckTemplatesRequest,
    ModifyLoadBalancerAttributesResponse: ModifyLoadBalancerAttributesResponse,
    LoadBalancerAddress: LoadBalancerAddress,
    NotifyUnbindTargetResponse: NotifyUnbindTargetResponse,
    TargetOutput: TargetOutput,
    CreateHealthCheckTemplateResponse: CreateHealthCheckTemplateResponse,
    ModifyHealthCheckTemplateRequest: ModifyHealthCheckTemplateRequest,
    AssociateListenerAdditionalCertificatesRequest: AssociateListenerAdditionalCertificatesRequest,
    IPAddressInfo: IPAddressInfo,
    DescribeListenerDetailResponse: DescribeListenerDetailResponse,
    RuleAction: RuleAction,
    DescribeRulesResponse: DescribeRulesResponse,
    DescribeTargetGroupsResponse: DescribeTargetGroupsResponse,
    RemoveTargetsFromTargetGroupRequest: RemoveTargetsFromTargetGroupRequest,
    DescribeListenerDetailRequest: DescribeListenerDetailRequest,
    AddTargetsToTargetGroupRequest: AddTargetsToTargetGroupRequest,
    ModifyListenerAttributesResponse: ModifyListenerAttributesResponse,
    AccessLogConfig: AccessLogConfig,
    ModifyRulesAttributesResponse: ModifyRulesAttributesResponse,
    HTTPRewriteInfo: HTTPRewriteInfo,
    AssociateBandwidthPackageWithLoadBalancerResponse: AssociateBandwidthPackageWithLoadBalancerResponse,
    DescribeListenersResponse: DescribeListenersResponse,
    AssociateBandwidthPackageWithLoadBalancerRequest: AssociateBandwidthPackageWithLoadBalancerRequest,
    XForwardedForConfig: XForwardedForConfig,
    DescribeTargetGroupsRequest: DescribeTargetGroupsRequest,
    QuotaInfo: QuotaInfo,
    DeleteLoadBalancersResponse: DeleteLoadBalancersResponse,
    DescribeRulesRequest: DescribeRulesRequest,
    HTTPCookieInfo: HTTPCookieInfo,
    ModifySecurityPolicyAttributesRequest: ModifySecurityPolicyAttributesRequest,
    DescribeSecurityPolicyRelationsResponse: DescribeSecurityPolicyRelationsResponse,
    DescribeSecurityPoliciesResponse: DescribeSecurityPoliciesResponse,
    HTTPRedirectInfo: HTTPRedirectInfo,
    DescribeZonesRequest: DescribeZonesRequest,
    Job: Job,
    RelatedListener: RelatedListener,
    DescribeListenerCertificatesRequest: DescribeListenerCertificatesRequest,
    ModifyLoadBalancerAddressTypeRequest: ModifyLoadBalancerAddressTypeRequest,
    CreateRulesResponse: CreateRulesResponse,
    CreateSecurityPolicyResponse: CreateSecurityPolicyResponse,
    DeleteListenerRequest: DeleteListenerRequest,
    ModifyTargetGroupAttributesResponse: ModifyTargetGroupAttributesResponse,
    RuleModify: RuleModify,
    StickySessionConfig: StickySessionConfig,
    AssociateListenerAdditionalCertificatesResponse: AssociateListenerAdditionalCertificatesResponse,
    ListenerOutput: ListenerOutput,
    PostPayPriceInfo: PostPayPriceInfo,
    CreateRulesRequest: CreateRulesRequest,
    DeleteSecurityPolicyResponse: DeleteSecurityPolicyResponse,
    TargetToAdd: TargetToAdd,
    DisassociateListenerAdditionalCertificatesResponse: DisassociateListenerAdditionalCertificatesResponse,
    DescribeSecurityPolicyCapabilitiesResponse: DescribeSecurityPolicyCapabilitiesResponse,
    RemoveHTTPHeaderInfo: RemoveHTTPHeaderInfo,
    DescribeTargetGroupTargetsRequest: DescribeTargetGroupTargetsRequest,
    DescribeListenerCertificatesResponse: DescribeListenerCertificatesResponse,
    SetLoadBalancerSecurityGroupsRequest: SetLoadBalancerSecurityGroupsRequest,
    RemoveTargetsFromTargetGroupResponse: RemoveTargetsFromTargetGroupResponse,
    AddTargetsToTargetGroupResponse: AddTargetsToTargetGroupResponse,
    DescribeAsyncJobsRequest: DescribeAsyncJobsRequest,
    CreateListenerResponse: CreateListenerResponse,
    CreateTargetGroupResponse: CreateTargetGroupResponse,
    TargetGroupConfig: TargetGroupConfig,
    DescribeTargetGroupsByTargetRequest: DescribeTargetGroupsByTargetRequest,
    TargetGroupStickySession: TargetGroupStickySession,
    DeleteLoadBalancersRequest: DeleteLoadBalancersRequest,
    RuleCondition: RuleCondition,
    Zone: Zone,
    RuleOutput: RuleOutput,
    SecurityPolicyCapability: SecurityPolicyCapability,
    ModificationProtectionInfo: ModificationProtectionInfo,
    ModifyTargetsInTargetGroupResponse: ModifyTargetsInTargetGroupResponse,
    ModifySecurityPolicyAttributesResponse: ModifySecurityPolicyAttributesResponse,
    DeleteSecurityPolicyRequest: DeleteSecurityPolicyRequest,
    RuleHealthStatusInfo: RuleHealthStatusInfo,
    ModifyLoadBalancerAddressTypeResponse: ModifyLoadBalancerAddressTypeResponse,
    CertificateInfo: CertificateInfo,
    DescribeHealthCheckTemplatesResponse: DescribeHealthCheckTemplatesResponse,
    DescribeTargetGroupsByTargetResponse: DescribeTargetGroupsByTargetResponse,
    CreateTargetGroupRequest: CreateTargetGroupRequest,
    TargetHealthStatusInfo: TargetHealthStatusInfo,
    CreateListenerRequest: CreateListenerRequest,
    ModifyLoadBalancerModificationProtectionResponse: ModifyLoadBalancerModificationProtectionResponse,
    RuleInput: RuleInput,
    DefaultAction: DefaultAction,
    TargetGroupHealthInfo: TargetGroupHealthInfo,
    SecurityPolicyRelations: SecurityPolicyRelations,
    DescribeSecurityPolicyRelationsRequest: DescribeSecurityPolicyRelationsRequest,
    LoadBalancerOperationLocksItem: LoadBalancerOperationLocksItem,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    ModifyTargetsInTargetGroupRequest: ModifyTargetsInTargetGroupRequest,
    DescribeSecurityPolicyCapabilitiesRequest: DescribeSecurityPolicyCapabilitiesRequest,
    HealthCheckConfig: HealthCheckConfig,
    ModifyTargetGroupAttributesRequest: ModifyTargetGroupAttributesRequest,
    HealthCheckTemplate: HealthCheckTemplate,
    DescribeZonesResponse: DescribeZonesResponse,
    CreateSecurityPolicyRequest: CreateSecurityPolicyRequest,
    TargetGroupOutput: TargetGroupOutput,
    InquirePriceCreateLoadBalancerResponse: InquirePriceCreateLoadBalancerResponse,
    DescribeListenerHealthStatusResponse: DescribeListenerHealthStatusResponse,
    SecurityPolicyInfo: SecurityPolicyInfo,
    ModifyRulesAttributesRequest: ModifyRulesAttributesRequest,
    DeletionProtectionConfig: DeletionProtectionConfig,
    DisassociateListenerAdditionalCertificatesRequest: DisassociateListenerAdditionalCertificatesRequest,
    DescribeLoadBalancerDetailRequest: DescribeLoadBalancerDetailRequest,
    InsertHTTPHeaderInfo: InsertHTTPHeaderInfo,
    DescribeHealthCheckTemplatesRequest: DescribeHealthCheckTemplatesRequest,
    DescribeSystemSecurityPoliciesResponse: DescribeSystemSecurityPoliciesResponse,
    HTTPQueryStringInfo: HTTPQueryStringInfo,
    ModifyHealthCheckTemplateResponse: ModifyHealthCheckTemplateResponse,
    DeleteRulesResponse: DeleteRulesResponse,
    DescribeQuotaResponse: DescribeQuotaResponse,
    DeleteTargetGroupsResponse: DeleteTargetGroupsResponse,
    Price: Price,
    ModifyListenerAttributesRequest: ModifyListenerAttributesRequest,
    TargetToRemove: TargetToRemove,
    LoadBalancerBillingConfig: LoadBalancerBillingConfig,
    TagInfo: TagInfo,
    TargetGroupTuple: TargetGroupTuple,
    CreateLoadBalancerResponse: CreateLoadBalancerResponse,
    TargetToModify: TargetToModify,
    DescribeListenersRequest: DescribeListenersRequest,
    ModifyLoadBalancerModificationProtectionRequest: ModifyLoadBalancerModificationProtectionRequest,
    DisassociateBandwidthPackageFromLoadBalancerResponse: DisassociateBandwidthPackageFromLoadBalancerResponse,
    DescribeLoadBalancerDetailResponse: DescribeLoadBalancerDetailResponse,
    FixedResponseInfo: FixedResponseInfo,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    Filter: Filter,
    ZoneMappingInfo: ZoneMappingInfo,
    DeleteListenerResponse: DeleteListenerResponse,
    DescribeSystemSecurityPoliciesRequest: DescribeSystemSecurityPoliciesRequest,
    DeleteTargetGroupsRequest: DeleteTargetGroupsRequest,
    DescribeAsyncJobsResponse: DescribeAsyncJobsResponse,
    DescribeTargetGroupTargetsResponse: DescribeTargetGroupTargetsResponse,
    DescribeSecurityPoliciesRequest: DescribeSecurityPoliciesRequest,
    DeleteHealthCheckTemplatesResponse: DeleteHealthCheckTemplatesResponse,
    LoadBalancer: LoadBalancer,

}
