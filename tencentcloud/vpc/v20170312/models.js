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
 * DeleteDirectConnectGatewayCcnRoutes response structure.
 * @class
 */
class DeleteDirectConnectGatewayCcnRoutesResponse extends  AbstractModel {
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
 * HaVipDisassociateAddressIp request structure.
 * @class
 */
class HaVipDisassociateAddressIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique `ID` of the `HAVIP`, such as `havip-9o233uri`. This must be an `HAVIP` that has been bound to an `EIP`.
         * @type {string || null}
         */
        this.HaVipId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;

    }
}

/**
 * DescribeTaskResult response structure.
 * @class
 */
class DescribeTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Job ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * The execution results, including `SUCCESS`, `FAILED`, and `RUNNING`
         * @type {string || null}
         */
        this.Result = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * `IPv6` address information.
 * @class
 */
class Ipv6Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * `IPv6` address, such as `3402:4e00:20:100:0:8cd9:2a67:71f3`
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Whether it is a primary `IP`.
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * The `ID` of the `EIP` instance, such as `eip-hxlqja90`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * Message description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether the public IP is blocked.
         * @type {boolean || null}
         */
        this.IsWanIpBlocked = null;

        /**
         * `IPv6` address status:
<li>`PENDING`: Creating</li>
<li>`MIGRATING`: Migrating</li>
<li>`DELETING`: Deleting</li>
<li>`AVAILABLE`: Available</li>
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * Subnet object
 * @class
 */
class Subnet extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the `VPC` instance.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet instance `ID`, such as `subnet-bthucmmy`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Subnet name.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * The `IPv4` `CIDR` of the subnet.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Whether it is the default subnet.
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * Whether to enable broadcast.
         * @type {boolean || null}
         */
        this.EnableBroadcast = null;

        /**
         * Availability Zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The route table instance ID, such as `rtb-l2h8d7c2`.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Creation Time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * The number of available `IP`s.
         * @type {number || null}
         */
        this.AvailableIpAddressCount = null;

        /**
         * The `IPv6` `CIDR` of the subnet.
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * The associated `ACL`ID
         * @type {string || null}
         */
        this.NetworkAclId = null;

        /**
         * Whether it is a `SNAT` address pool subnet.
         * @type {boolean || null}
         */
        this.IsRemoteVpcSnat = null;

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
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.AvailableIpAddressCount = 'AvailableIpAddressCount' in params ? params.AvailableIpAddressCount : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;
        this.IsRemoteVpcSnat = 'IsRemoteVpcSnat' in params ? params.IsRemoteVpcSnat : null;

    }
}

/**
 * ModifyAddressTemplateGroupAttribute request structure.
 * @class
 */
class ModifyAddressTemplateGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address template group instance ID, such as `ipmg-2uw6ujo6`.
         * @type {string || null}
         */
        this.AddressTemplateGroupId = null;

        /**
         * IP address template group name.
         * @type {string || null}
         */
        this.AddressTemplateGroupName = null;

        /**
         * IP address template instance ID, such as `ipm-mdunqeb6`.
         * @type {Array.<string> || null}
         */
        this.AddressTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateGroupId = 'AddressTemplateGroupId' in params ? params.AddressTemplateGroupId : null;
        this.AddressTemplateGroupName = 'AddressTemplateGroupName' in params ? params.AddressTemplateGroupName : null;
        this.AddressTemplateIds = 'AddressTemplateIds' in params ? params.AddressTemplateIds : null;

    }
}

/**
 * ModifyVpnGatewayAttribute request structure.
 * @class
 */
class ModifyVpnGatewayAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPN gateway instance.
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * The VPN gateway name. The maximum length is 60 bytes.
         * @type {string || null}
         */
        this.VpnGatewayName = null;

        /**
         * VPN gateway billing mode. Currently, only the conversion of prepaid (monthly subscription) to postpaid (that is, pay-as-you-go) is supported. That is, the parameters only supports POSTPAID_BY_HOUR.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnGatewayName = 'VpnGatewayName' in params ? params.VpnGatewayName : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * ModifyAddressTemplateAttribute response structure.
 * @class
 */
class ModifyAddressTemplateAttributeResponse extends  AbstractModel {
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
 * Protocol port template group
 * @class
 */
class ServiceTemplateGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol port template group instance ID, such as `ppmg-2klmrefu`.
         * @type {string || null}
         */
        this.ServiceTemplateGroupId = null;

        /**
         * Protocol port template group name.
         * @type {string || null}
         */
        this.ServiceTemplateGroupName = null;

        /**
         * Protocol port template instance ID.
         * @type {Array.<string> || null}
         */
        this.ServiceTemplateIdSet = null;

        /**
         * Creation Time.
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
        this.ServiceTemplateGroupId = 'ServiceTemplateGroupId' in params ? params.ServiceTemplateGroupId : null;
        this.ServiceTemplateGroupName = 'ServiceTemplateGroupName' in params ? params.ServiceTemplateGroupName : null;
        this.ServiceTemplateIdSet = 'ServiceTemplateIdSet' in params ? params.ServiceTemplateIdSet : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * CreateNetworkInterface request structure.
 * @class
 */
class CreateNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPC instance. You can obtain the parameter value from the VpcId field in the returned result of DescribeVpcs API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The name of the ENI. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * The subnet instance ID of the ENI, such as `subnet-0ap8nwca`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ENI description can be named freely, but the maximum length is 60 characters.
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * The number of private IP addresses that is newly applied for. The total number of private IP addresses cannot exceed the quota.
         * @type {number || null}
         */
        this.SecondaryPrivateIpAddressCount = null;

        /**
         * Specifies the security group to be bound with, such as ['sg-1dd51d'].
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * The information of the specified private IPs. You can specify a maximum of 10 each time.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * Bound tags, such as [{"Key": "city", "Value": "shanghai"}].
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

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
 * Statistics used to describe the instance
 * @class
 */
class InstanceStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of instance
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Number of instances
         * @type {number || null}
         */
        this.InstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

    }
}

/**
 * UnassignIpv6CidrBlock request structure.
 * @class
 */
class UnassignIpv6CidrBlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the `VPC`, such as `vpc-f49l6u0z`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The `IPv6` IP range, such as `3402:4e00:20:1000::/56`
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

    }
}

/**
 * CreateRoutes request structure.
 * @class
 */
class CreateRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Routing policy object.
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * The CCN object
 * @class
 */
class CCN extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the CCN
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The name of the CCN
         * @type {string || null}
         */
        this.CcnName = null;

        /**
         * The detailed information of the CCN
         * @type {string || null}
         */
        this.CcnDescription = null;

        /**
         * The number of associated instances
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * The creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The instance status. 'ISOLATED': Being isolated (instance is in arrears and service is suspended). 'AVAILABLE': Operating.
         * @type {string || null}
         */
        this.State = null;

        /**
         * The instance service quality. ’PT’: Platinum , 'AU': Gold, 'AG': Silver.
         * @type {string || null}
         */
        this.QosLevel = null;

        /**
         * The billing method. POSTPAID indicates postpaid.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * The limit type. INTER_REGION_LIMIT is the limit between regions. OUTER_REGION_LIMIT is a region egress limit.
Note: This field may return null, indicating no valid value.
         * @type {string || null}
         */
        this.BandwidthLimitType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CcnName = 'CcnName' in params ? params.CcnName : null;
        this.CcnDescription = 'CcnDescription' in params ? params.CcnDescription : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.State = 'State' in params ? params.State : null;
        this.QosLevel = 'QosLevel' in params ? params.QosLevel : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.BandwidthLimitType = 'BandwidthLimitType' in params ? params.BandwidthLimitType : null;

    }
}

/**
 * CreateVpnConnection request structure.
 * @class
 */
class CreateVpnConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPC instance. You can obtain the parameter value from the VpcId field in the returned result of DescribeVpcs API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The ID of the VPN gateway instance.
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * The ID of the customer gateway, such as `cgw-2wqq41m9`. You can query the customer gateway by using the `DescribeCustomerGateways` API.
         * @type {string || null}
         */
        this.CustomerGatewayId = null;

        /**
         * Gateway can be named freely, but the maximum length is 60 characters.
         * @type {string || null}
         */
        this.VpnConnectionName = null;

        /**
         * The pre-shared key.
         * @type {string || null}
         */
        this.PreShareKey = null;

        /**
         * The SPD policy group, for example: {"10.0.0.5/24":["172.123.10.5/16"]}. 10.0.0.5/24 is the VPC internal IP range, and 172.123.10.5/16 is the IDC IP range. The user specifies the IP range in the VPC that can communicate with the IP range in the IDC.
         * @type {Array.<SecurityPolicyDatabase> || null}
         */
        this.SecurityPolicyDatabases = null;

        /**
         * Internet Key Exchange (IKE) configuration. IKE has a self-protection mechanism. The network security protocol is configured by the user.
         * @type {IKEOptionsSpecification || null}
         */
        this.IKEOptionsSpecification = null;

        /**
         * IPSec configuration. The IPSec secure session configuration is provided by Tencent Cloud.
         * @type {IPSECOptionsSpecification || null}
         */
        this.IPSECOptionsSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.PreShareKey = 'PreShareKey' in params ? params.PreShareKey : null;

        if (params.SecurityPolicyDatabases) {
            this.SecurityPolicyDatabases = new Array();
            for (let z in params.SecurityPolicyDatabases) {
                let obj = new SecurityPolicyDatabase();
                obj.deserialize(params.SecurityPolicyDatabases[z]);
                this.SecurityPolicyDatabases.push(obj);
            }
        }

        if (params.IKEOptionsSpecification) {
            let obj = new IKEOptionsSpecification();
            obj.deserialize(params.IKEOptionsSpecification)
            this.IKEOptionsSpecification = obj;
        }

        if (params.IPSECOptionsSpecification) {
            let obj = new IPSECOptionsSpecification();
            obj.deserialize(params.IPSECOptionsSpecification)
            this.IPSECOptionsSpecification = obj;
        }

    }
}

/**
 * The CCN routing policy object
 * @class
 */
class CcnRoute extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the routing policy
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * Destination
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * The type of the next hop (associated instance type). Available types: VPC, DIRECTCONNECT
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * The next hop (associated instance)
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The name of the next hop (associated instance name)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * The region of the next hop (the region of the associated instance)
         * @type {string || null}
         */
        this.InstanceRegion = null;

        /**
         * Update Time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Whether the route is enabled
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * The UIN (root account) to which the associated instance belongs
         * @type {string || null}
         */
        this.InstanceUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.InstanceUin = 'InstanceUin' in params ? params.InstanceUin : null;

    }
}

/**
 * DeleteServiceTemplate response structure.
 * @class
 */
class DeleteServiceTemplateResponse extends  AbstractModel {
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
 * Protocol port template
 * @class
 */
class ServiceTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol port instance ID, such as `ppm-f5n1f8da`.
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * Template name.
         * @type {string || null}
         */
        this.ServiceTemplateName = null;

        /**
         * Protocol port information.
         * @type {Array.<string> || null}
         */
        this.ServiceSet = null;

        /**
         * Creation Time.
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
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;
        this.ServiceTemplateName = 'ServiceTemplateName' in params ? params.ServiceTemplateName : null;
        this.ServiceSet = 'ServiceSet' in params ? params.ServiceSet : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * CreateServiceTemplate request structure.
 * @class
 */
class CreateServiceTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Template name of the protocol port
         * @type {string || null}
         */
        this.ServiceTemplateName = null;

        /**
         * It supports single port, multiple ports, consecutive ports and all ports. Supported protocols include TCP, UDP, ICMP, and GRE.
         * @type {Array.<string> || null}
         */
        this.Services = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateName = 'ServiceTemplateName' in params ? params.ServiceTemplateName : null;
        this.Services = 'Services' in params ? params.Services : null;

    }
}

/**
 * DeleteHaVip response structure.
 * @class
 */
class DeleteHaVipResponse extends  AbstractModel {
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
 * VPN tunnel object.
 * @class
 */
class VpnConnection extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tunnel instance ID.
         * @type {string || null}
         */
        this.VpnConnectionId = null;

        /**
         * Tunnel name.
         * @type {string || null}
         */
        this.VpnConnectionName = null;

        /**
         * VPC instance ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The ID of the VPN gateway instance.
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * Customer gateway instance ID.
         * @type {string || null}
         */
        this.CustomerGatewayId = null;

        /**
         * The pre-shared key.
         * @type {string || null}
         */
        this.PreShareKey = null;

        /**
         * Tunnel transmission protocol.
         * @type {string || null}
         */
        this.VpnProto = null;

        /**
         * Tunnel encryption protocol.
         * @type {string || null}
         */
        this.EncryptProto = null;

        /**
         * Route Type.
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * Creation Time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Production status of the tunnel. PENDING: Creating; AVAILABLE: Running; DELETING: Deleting.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Connection status of the tunnel. AVAILABLE: Connected.
         * @type {string || null}
         */
        this.NetStatus = null;

        /**
         * SPD.
         * @type {Array.<SecurityPolicyDatabase> || null}
         */
        this.SecurityPolicyDatabaseSet = null;

        /**
         * IKE options.
         * @type {IKEOptionsSpecification || null}
         */
        this.IKEOptionsSpecification = null;

        /**
         * IPSEC options.
         * @type {IPSECOptionsSpecification || null}
         */
        this.IPSECOptionsSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.PreShareKey = 'PreShareKey' in params ? params.PreShareKey : null;
        this.VpnProto = 'VpnProto' in params ? params.VpnProto : null;
        this.EncryptProto = 'EncryptProto' in params ? params.EncryptProto : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.State = 'State' in params ? params.State : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;

        if (params.SecurityPolicyDatabaseSet) {
            this.SecurityPolicyDatabaseSet = new Array();
            for (let z in params.SecurityPolicyDatabaseSet) {
                let obj = new SecurityPolicyDatabase();
                obj.deserialize(params.SecurityPolicyDatabaseSet[z]);
                this.SecurityPolicyDatabaseSet.push(obj);
            }
        }

        if (params.IKEOptionsSpecification) {
            let obj = new IKEOptionsSpecification();
            obj.deserialize(params.IKEOptionsSpecification)
            this.IKEOptionsSpecification = obj;
        }

        if (params.IPSECOptionsSpecification) {
            let obj = new IPSECOptionsSpecification();
            obj.deserialize(params.IPSECOptionsSpecification)
            this.IPSECOptionsSpecification = obj;
        }

    }
}

/**
 * RejectAttachCcnInstances response structure.
 * @class
 */
class RejectAttachCcnInstancesResponse extends  AbstractModel {
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
 * DescribeCcnAttachedInstances request structure.
 * @class
 */
class DescribeCcnAttachedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The returned quantity
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter conditions:
<li>ccn-id - String - (Filter condition) The CCN instance ID.</li>
<li>instance-type - String - (Filter condition) The associated instance type.</li>
<li>instance-region - String - (Filter condition) The associated instance region.</li>
<li>instance-type - String - (Filter condition) The instance ID of the associated instance.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The ID of the CCN instance
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The order field supports `CcnId`, `InstanceType`, `InstanceId`, `InstanceName`, `InstanceRegion`, `AttachedTime`, and `State`.
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Order methods. Ascending: `ASC`, Descending: `DESC`.
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
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
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * DescribeCcns request structure.
 * @class
 */
class DescribeCcnsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`. Each request can have a maximum of 100 instances. `CcnIds` and `Filters` cannot be specified at the same time
         * @type {Array.<string> || null}
         */
        this.CcnIds = null;

        /**
         * Filter conditions. `CcnIds` and `Filters` cannot be specified at the same time.
<li>ccn-id - String - (Filter condition) The unique ID of the CCN, such as `vpc-f49l6u0z`.</li>
<li>ccn-name - String - (Filter condition) The CCN name.</li>
<li>ccn-description - String - (Filter condition) CCN description.</li>
<li>state - String - (Filter condition) The instance status. 'ISOLATED': Isolated (the account is in arrears and the service is suspended.) 'AVAILABLE': Running.</li>
<li>tag-key - String - Required: no - (Filter condition) Filters by tag key.</li>
<li>`tag:tag-key` - String - Required: no - (Filter condition) Filters by tag key pair. For this parameter, `tag-key` will be replaced with a specific tag key. For more information, see this example: **Querying the list of CCNs bound to tags**.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The returned quantity
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Order fields support `CcnId`, `CcnName`, `CreateTime`, `State`, and `QosLevel`
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Order methods. Ascending: `ASC`, Descending: `DESC`.
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnIds = 'CcnIds' in params ? params.CcnIds : null;

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
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * ModifyNatGatewayAttribute response structure.
 * @class
 */
class ModifyNatGatewayAttributeResponse extends  AbstractModel {
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
 * DescribeNetDetects request structure.
 * @class
 */
class DescribeNetDetectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The array of network detection instance `IDs`, such as [`netd-12345678`].
         * @type {Array.<string> || null}
         */
        this.NetDetectIds = null;

        /**
         * Filter conditions. `NetDetectIds` and `Filters` cannot be specified at the same time.
<li>vpc-id - String - (Filter condition) The VPC instance ID, such as vpc-12345678.</li>
<li>net-detect-id - String - (Filter condition) The network detection instance ID, such as netd-12345678.</li>
<li>subnet-id - String - (Filter condition) The subnet instance ID, such as subnet-12345678.</li>
<li>net-detect-name - String - (Filter condition) The network detection name.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The offset. Default: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of returned values. Default: 20. Maximum: 100.
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
        this.NetDetectIds = 'NetDetectIds' in params ? params.NetDetectIds : null;

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
 * CreateAddressTemplateGroup request structure.
 * @class
 */
class CreateAddressTemplateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the IP address template group.
         * @type {string || null}
         */
        this.AddressTemplateGroupName = null;

        /**
         * The instance ID of the IP address template, such as `ipm-mdunqeb6`.
         * @type {Array.<string> || null}
         */
        this.AddressTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateGroupName = 'AddressTemplateGroupName' in params ? params.AddressTemplateGroupName : null;
        this.AddressTemplateIds = 'AddressTemplateIds' in params ? params.AddressTemplateIds : null;

    }
}

/**
 * DescribeSubnets request structure.
 * @class
 */
class DescribeSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries the ID of the subnet instance, such as `subnet-pxir56ns`. Each request can have a maximum of 100 instances. `SubnetIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Filter condition. `SubnetIds` and `Filters` cannot be specified at the same time.
<li>subnet-id - String - (Filter condition) Subnet instance name.</li>
<li>vpc-id - String - (Filter condition) VPC instance ID, such as `vpc-f49l6u0z`.</li>
<li>cidr-block - String - (Filter condition) The subnet IP range, such as 192.168.1.0.</li>
<li>is-default - Boolean - (Filter condition) Whether it is the default subnet.</li>
<li>is-remote-vpc-snat - Boolean - (Filter condition) Whether it is a VPC SNAT address pool subnet.</li>
<li>subnet-name - String - (Filter condition) Subnet name.</li>
<li>zone - String - (Filter condition) Availability zone.</li>
<li>tag-key - String - Required: No - (Filter condition) Filter by tag key.</li>
<li>tag:tag-key - String - Required: No - (Filter condition) Filter by tag key-value pair. The tag-key is replaced with the specific tag key. For usage, refer to case 2.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * The returned quantity
         * @type {string || null}
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
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

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
 * CreateSubnet request structure.
 * @class
 */
class CreateSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPC instance to be operated on. You can obtain the parameter value from the VpcId field in the returned result of DescribeVpcs API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The subnet name. The maximum length is 60 bytes.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * The subnet IP address range. It must be within the VPC IP address range. Subnet IP address ranges cannot overlap with each other within the same VPC.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * The ID of the availability zone in which the subnet resides. You can set up disaster recovery across availability zones by choosing different availability zones for different subnets.
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * IP address template group
 * @class
 */
class AddressTemplateGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address template group name.
         * @type {string || null}
         */
        this.AddressTemplateGroupName = null;

        /**
         * IP address template group instance ID, such as `ipmg-dih8xdbq`.
         * @type {string || null}
         */
        this.AddressTemplateGroupId = null;

        /**
         * IP address template ID.
         * @type {Array.<string> || null}
         */
        this.AddressTemplateIdSet = null;

        /**
         * Creation Time.
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
        this.AddressTemplateGroupName = 'AddressTemplateGroupName' in params ? params.AddressTemplateGroupName : null;
        this.AddressTemplateGroupId = 'AddressTemplateGroupId' in params ? params.AddressTemplateGroupId : null;
        this.AddressTemplateIdSet = 'AddressTemplateIdSet' in params ? params.AddressTemplateIdSet : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DownloadCustomerGatewayConfiguration request structure.
 * @class
 */
class DownloadCustomerGatewayConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPN gateway instance.
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * The ID of the VPN tunnel instance, such as `vpnx-f49l6u0z`.
         * @type {string || null}
         */
        this.VpnConnectionId = null;

        /**
         * Customer gateway vendor information object, which can be obtained through DescribeCustomerGatewayVendors.
         * @type {CustomerGatewayVendor || null}
         */
        this.CustomerGatewayVendor = null;

        /**
         * Name of the physical API for tunnel access device.
         * @type {string || null}
         */
        this.InterfaceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;

        if (params.CustomerGatewayVendor) {
            let obj = new CustomerGatewayVendor();
            obj.deserialize(params.CustomerGatewayVendor)
            this.CustomerGatewayVendor = obj;
        }
        this.InterfaceName = 'InterfaceName' in params ? params.InterfaceName : null;

    }
}

/**
 * The port forwarding rules of the NAT gateway
 * @class
 */
class DestinationIpPortTranslationNatRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network protocol. Available choices: `TCP`, `UDP`.
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * EIP.
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * Public port.
         * @type {number || null}
         */
        this.PublicPort = null;

        /**
         * Private network address.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * Private network port.
         * @type {number || null}
         */
        this.PrivatePort = null;

        /**
         * NAT gateway forwarding rule description.
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
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.PublicPort = 'PublicPort' in params ? params.PublicPort : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.PrivatePort = 'PrivatePort' in params ? params.PrivatePort : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * HAVIP description information
 * @class
 */
class HaVip extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the `HAVIP`. This is the unique identifier of the `HAVIP`.
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * The name of the `HAVIP`.
         * @type {string || null}
         */
        this.HaVipName = null;

        /**
         * The virtual IP address.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * The `ID` of the VPC to which the `HAVIP` belongs.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The `ID` of the subnet to which the `HAVIP` belongs.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The `ID` of the ENI associated with the `HAVIP`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The `ID` of the bound instance.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Bound `EIP`.
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * Status:
<li>`AVAILABLE`: Operating</li>
<li>`UNBIND`: Not bound</li>
         * @type {string || null}
         */
        this.State = null;

        /**
         * Creation Time.
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
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * CreateDefaultVpc request structure.
 * @class
 */
class CreateDefaultVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the availability zone in which the subnet resides. The availability zone will be randomly selected if not specified.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Whether to forcibly return a default VPC
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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DeleteSubnet response structure.
 * @class
 */
class DeleteSubnetResponse extends  AbstractModel {
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
 * ModifyAddressesBandwidth response structure.
 * @class
 */
class ModifyAddressesBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The async task ID. You can use the [DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271) API to query the task status.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAddressQuota response structure.
 * @class
 */
class DescribeAddressQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The quota information of EIPs in an account.
         * @type {Array.<Quota> || null}
         */
        this.QuotaSet = null;

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

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new Quota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Virtual Private Cloud (VPC) object.
 * @class
 */
class Vpc extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC` name.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * `VPC` instance `ID`, such as `vpc-azd4dt1c`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The `IPv4` `CIDR` of the `VPC`.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Whether it is the default `VPC`.
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * Whether multicast is enabled.
         * @type {boolean || null}
         */
        this.EnableMulticast = null;

        /**
         * Creation Time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * `DNS` list.
         * @type {Array.<string> || null}
         */
        this.DnsServerSet = null;

        /**
         * DHCP domain name option value.
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * `DHCP` option set `ID`.
         * @type {string || null}
         */
        this.DhcpOptionsId = null;

        /**
         * Whether `DHCP` is enabled.
         * @type {boolean || null}
         */
        this.EnableDhcp = null;

        /**
         * The `IPv6` `CIDR` of the `VPC`.
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * Tag key-value pair
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * The secondary CIDR block.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AssistantCidr> || null}
         */
        this.AssistantCidrSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DnsServerSet = 'DnsServerSet' in params ? params.DnsServerSet : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DhcpOptionsId = 'DhcpOptionsId' in params ? params.DhcpOptionsId : null;
        this.EnableDhcp = 'EnableDhcp' in params ? params.EnableDhcp : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.AssistantCidrSet) {
            this.AssistantCidrSet = new Array();
            for (let z in params.AssistantCidrSet) {
                let obj = new AssistantCidr();
                obj.deserialize(params.AssistantCidrSet[z]);
                this.AssistantCidrSet.push(obj);
            }
        }

    }
}

/**
 * CreateVpnGateway response structure.
 * @class
 */
class CreateVpnGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPN gateway object.
         * @type {VpnGateway || null}
         */
        this.VpnGateway = null;

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

        if (params.VpnGateway) {
            let obj = new VpnGateway();
            obj.deserialize(params.VpnGateway)
            this.VpnGateway = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatGatewayDestinationIpPortTranslationNatRules response structure.
 * @class
 */
class DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The object array of port forwarding rules for the NAT gateway.
         * @type {Array.<NatGatewayDestinationIpPortTranslationNatRule> || null}
         */
        this.NatGatewayDestinationIpPortTranslationNatRuleSet = null;

        /**
         * The number of object arrays of NAT port forwarding rules meeting the conditions.
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

        if (params.NatGatewayDestinationIpPortTranslationNatRuleSet) {
            this.NatGatewayDestinationIpPortTranslationNatRuleSet = new Array();
            for (let z in params.NatGatewayDestinationIpPortTranslationNatRuleSet) {
                let obj = new NatGatewayDestinationIpPortTranslationNatRule();
                obj.deserialize(params.NatGatewayDestinationIpPortTranslationNatRuleSet[z]);
                this.NatGatewayDestinationIpPortTranslationNatRuleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatGatewayDestinationIpPortTranslationNatRule response structure.
 * @class
 */
class ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse extends  AbstractModel {
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
 * DescribeVpcIpv6Addresses response structure.
 * @class
 */
class DescribeVpcIpv6AddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `IPv6` address list.
         * @type {Array.<VpcIpv6Address> || null}
         */
        this.Ipv6AddressSet = null;

        /**
         * The total number of `IPv6` addresses.
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

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new VpcIpv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountAttributes request structure.
 * @class
 */
class DescribeAccountAttributesRequest extends  AbstractModel {
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
 * ModifyServiceTemplateGroupAttribute request structure.
 * @class
 */
class ModifyServiceTemplateGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The protocol port template group instance ID, such as `ppmg-ei8hfd9a`.
         * @type {string || null}
         */
        this.ServiceTemplateGroupId = null;

        /**
         * Protocol port template group name.
         * @type {string || null}
         */
        this.ServiceTemplateGroupName = null;

        /**
         * Instance ID of the protocol port template, such as `ppm-4dw6agho`.
         * @type {Array.<string> || null}
         */
        this.ServiceTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateGroupId = 'ServiceTemplateGroupId' in params ? params.ServiceTemplateGroupId : null;
        this.ServiceTemplateGroupName = 'ServiceTemplateGroupName' in params ? params.ServiceTemplateGroupName : null;
        this.ServiceTemplateIds = 'ServiceTemplateIds' in params ? params.ServiceTemplateIds : null;

    }
}

/**
 * ModifyRouteTableAttribute response structure.
 * @class
 */
class ModifyRouteTableAttributeResponse extends  AbstractModel {
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
 * DescribeVpnGateways response structure.
 * @class
 */
class DescribeVpnGatewaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of instances meeting the filter condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of details of VPN gateway instances.
         * @type {Array.<VpnGateway> || null}
         */
        this.VpnGatewaySet = null;

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

        if (params.VpnGatewaySet) {
            this.VpnGatewaySet = new Array();
            for (let z in params.VpnGatewaySet) {
                let obj = new VpnGateway();
                obj.deserialize(params.VpnGatewaySet[z]);
                this.VpnGatewaySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableCcnRoutes response structure.
 * @class
 */
class EnableCcnRoutesResponse extends  AbstractModel {
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
 * The outbound bandwidth cap of the CCN region
 * @class
 */
class CcnRegionBandwidthLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region, such as `ap-guangzhou`
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The outbound bandwidth cap. Units: Mbps
         * @type {number || null}
         */
        this.BandwidthLimit = null;

        /**
         * Whether it is a BM region. The default is `false`.
         * @type {boolean || null}
         */
        this.IsBm = null;

        /**
         * The target region, such as `ap-shanghai`
Note: This field may return null, indicating no valid value.
         * @type {string || null}
         */
        this.DstRegion = null;

        /**
         * Whether the target region is a BM region. The default is `false`.
         * @type {boolean || null}
         */
        this.DstIsBm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.BandwidthLimit = 'BandwidthLimit' in params ? params.BandwidthLimit : null;
        this.IsBm = 'IsBm' in params ? params.IsBm : null;
        this.DstRegion = 'DstRegion' in params ? params.DstRegion : null;
        this.DstIsBm = 'DstIsBm' in params ? params.DstIsBm : null;

    }
}

/**
 * DescribeCcnRoutes request structure.
 * @class
 */
class DescribeCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-gree226l`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The unique ID of the CCN routing policy, such as `ccnr-f49l6u0z`.
         * @type {Array.<string> || null}
         */
        this.RouteIds = null;

        /**
         * Filter condition. `RouteIds` and `Filters` cannot be specified at the same time.
<li>route-id - String - (Filter condition) Routing policy ID.</li>
<li>cidr-block - String - (Filter condition) Destination port.</li>
<li>instance-type - String - (Filter condition) The next hop type.</li>
<li>instance-region - String - (Filter condition) The next hop region.</li>
<li>instance-type - String - (Filter condition) The instance ID of the next hop.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The returned quantity
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
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

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
 * ModifyServiceTemplateAttribute request structure.
 * @class
 */
class ModifyServiceTemplateAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol port template instance ID, such as `ppm-529nwwj8`.
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

        /**
         * Protocol port template name.
         * @type {string || null}
         */
        this.ServiceTemplateName = null;

        /**
         * It supports single port, multiple ports, consecutive ports and all ports. Supported protocols include TCP, UDP, ICMP, and GRE.
         * @type {Array.<string> || null}
         */
        this.Services = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;
        this.ServiceTemplateName = 'ServiceTemplateName' in params ? params.ServiceTemplateName : null;
        this.Services = 'Services' in params ? params.Services : null;

    }
}

/**
 * DescribeServiceTemplateGroups response structure.
 * @class
 */
class DescribeServiceTemplateGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of instances meeting the filter condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Protocol port template group.
         * @type {Array.<ServiceTemplateGroup> || null}
         */
        this.ServiceTemplateGroupSet = null;

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

        if (params.ServiceTemplateGroupSet) {
            this.ServiceTemplateGroupSet = new Array();
            for (let z in params.ServiceTemplateGroupSet) {
                let obj = new ServiceTemplateGroup();
                obj.deserialize(params.ServiceTemplateGroupSet[z]);
                this.ServiceTemplateGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachCcnInstances response structure.
 * @class
 */
class DetachCcnInstancesResponse extends  AbstractModel {
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
 * ReplaceSecurityGroupPolicy request structure.
 * @class
 */
class ReplaceSecurityGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group instance ID, such as `sg-33ocnj9n`. This can be obtained through DescribeSecurityGroups.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group policy set object.
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * ModifyServiceTemplateGroupAttribute response structure.
 * @class
 */
class ModifyServiceTemplateGroupAttributeResponse extends  AbstractModel {
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
 * VPN gateway object.
 * @class
 */
class VpnGateway extends  AbstractModel {
    constructor(){
        super();

        /**
         * Gateway instance ID.
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * VPC instance ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Gateway instance name.
         * @type {string || null}
         */
        this.VpnGatewayName = null;

        /**
         * Gateway instance type: 'IPSEC' and 'SSL'.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Gateway instance status. 'PENDING': Creating; 'DELETING': Deleting; 'AVAILABLE': Running.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Gateway public IP.
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * Gateway renewal type: 'NOTIFY_AND_MANUAL_RENEW': Manual renewal. 'NOTIFY_AND_AUTO_RENEW': Automatic renewal. 'NOT_NOTIFY_AND_NOT_RENEW': No renewal after expiration.
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * Gateway billing type: POSTPAID_BY_HOUR: Postpaid by hour; PREPAID: Prepaid.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Outbound bandwidth of gateway.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * Creation Time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Expiration time of the prepaid gateway.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Whether the public IP is blocked.
         * @type {boolean || null}
         */
        this.IsAddressBlocked = null;

        /**
         * Change of billing method. PREPAID_TO_POSTPAID: Monthly subscription prepaid to postpaid by hour.
         * @type {string || null}
         */
        this.NewPurchasePlan = null;

        /**
         * Gateway billing status. PROTECTIVELY_ISOLATED: Instance is isolated; NORMAL: Normal.
         * @type {string || null}
         */
        this.RestrictState = null;

        /**
         * The availability zone, such as `ap-guangzhou-2`
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Gateway bandwidth quota information.
         * @type {Array.<VpnGatewayQuota> || null}
         */
        this.VpnGatewayQuotaSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayName = 'VpnGatewayName' in params ? params.VpnGatewayName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.State = 'State' in params ? params.State : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.IsAddressBlocked = 'IsAddressBlocked' in params ? params.IsAddressBlocked : null;
        this.NewPurchasePlan = 'NewPurchasePlan' in params ? params.NewPurchasePlan : null;
        this.RestrictState = 'RestrictState' in params ? params.RestrictState : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.VpnGatewayQuotaSet) {
            this.VpnGatewayQuotaSet = new Array();
            for (let z in params.VpnGatewayQuotaSet) {
                let obj = new VpnGatewayQuota();
                obj.deserialize(params.VpnGatewayQuotaSet[z]);
                this.VpnGatewayQuotaSet.push(obj);
            }
        }

    }
}

/**
 * Security group policy object
 * @class
 */
class SecurityGroupPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group policy index number.
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * Protocol. Values: TCP, UDP, ICMP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Port (all, discrete port, range).
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Protocol port ID or protocol port group ID. ServiceTemplate and Protocol+Port are mutually exclusive.
         * @type {ServiceTemplateSpecification || null}
         */
        this.ServiceTemplate = null;

        /**
         * IP range or IP (mutually exclusive).
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * The CIDR block or IPv6 (mutually exclusive).
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * The security group instance ID, such as `sg-ohuuioma`.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * IP address ID or IP address group ID.
         * @type {AddressTemplateSpecification || null}
         */
        this.AddressTemplate = null;

        /**
         * ACCEPT or DROP.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Security group policy description.
         * @type {string || null}
         */
        this.PolicyDescription = null;

        /**
         * The last modification time of the security group.
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.ServiceTemplate) {
            let obj = new ServiceTemplateSpecification();
            obj.deserialize(params.ServiceTemplate)
            this.ServiceTemplate = obj;
        }
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.AddressTemplate) {
            let obj = new AddressTemplateSpecification();
            obj.deserialize(params.AddressTemplate)
            this.AddressTemplate = obj;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.PolicyDescription = 'PolicyDescription' in params ? params.PolicyDescription : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DownloadCustomerGatewayConfiguration response structure.
 * @class
 */
class DownloadCustomerGatewayConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration information in XML format.
         * @type {string || null}
         */
        this.CustomerGatewayConfiguration = null;

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
        this.CustomerGatewayConfiguration = 'CustomerGatewayConfiguration' in params ? params.CustomerGatewayConfiguration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubnet request structure.
 * @class
 */
class DeleteSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the subnet instance. You can obtain the parameter value from the SubnetId field in the returned result of DescribeSubnets API.
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeAddressTemplateGroups request structure.
 * @class
 */
class DescribeAddressTemplateGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions.
<li>address-template-group-name - String - (Filter condition) IP address template group name.</li>
<li>address-template-group-id - String - (Filter condition) IP address template group instance ID, such as `ipmg-mdunqeb6`.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. The default value is 0.
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * Number of values to be returned. The default value is 20. Maximum is 100.
         * @type {string || null}
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
 * CheckNetDetectState response structure.
 * @class
 */
class CheckNetDetectStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The array of network detection verification results.
         * @type {Array.<NetDetectIpState> || null}
         */
        this.NetDetectIpStateSet = null;

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

        if (params.NetDetectIpStateSet) {
            this.NetDetectIpStateSet = new Array();
            for (let z in params.NetDetectIpStateSet) {
                let obj = new NetDetectIpState();
                obj.deserialize(params.NetDetectIpStateSet[z]);
                this.NetDetectIpStateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetAttachCcnInstances response structure.
 * @class
 */
class ResetAttachCcnInstancesResponse extends  AbstractModel {
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
 * DeleteNetDetect response structure.
 * @class
 */
class DeleteNetDetectResponse extends  AbstractModel {
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
 * AllocateAddresses request structure.
 * @class
 */
class AllocateAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of EIPs. Default: 1.
         * @type {number || null}
         */
        this.AddressCount = null;

        /**
         * The EIP line type. Default: BGP.
<ul style="margin:0"><li>For a user who has activated the static single-line IP whitelist, possible values are:<ul><li>CMCC: China Mobile</li>
<li>CTCC: China Telecom</li>
<li>CUCC: China Unicom</li></ul>Note: Only certain regions support static single-line IP addresses.</li></ul>
         * @type {string || null}
         */
        this.InternetServiceProvider = null;

        /**
         * The EIP billing method.
<ul style="margin:0"><li>For a user who has activated bandwidth billing by IP whitelist, possible values are:<ul><li>BANDWIDTH_PACKAGE: paid by the [bandwidth package](https://cloud.tencent.com/document/product/684/15255) (The bandwidth sharing whitelist must be activated additionally.)</li>
<li>BANDWIDTH_POSTPAID_BY_HOUR: bandwidth postpaid by hour</li>
<li>TRAFFIC_POSTPAID_BY_HOUR: traffic postpaid by hour</li></ul>Default: TRAFFIC_POSTPAID_BY_HOUR</li>.
<li>For users who do not use bill-by-bandwidth billing mode, InternetChargeType is consistent with that of the instance bound to the EIP. Therefore, it is unnecessary to pass in this parameter.</li></ul>
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * The maximum EIP outbound bandwidth. Unit: Mbps.
<ul style="margin:0"><li>For a user who has activated bandwidth billing by IP whitelist, the value range is determined by the EIP billing method:<ul><li>BANDWIDTH_PACKAGE: 1 Mbps to 1,000 Mbps</li>
<li>BANDWIDTH_POSTPAID_BY_HOUR: 1 Mbps to 100 Mbps</li>
<li>TRAFFIC_POSTPAID_BY_HOUR: 1 Mbps to 100 Mbps</li></ul>Default: 1 Mbps</li>.
<li>For a user who has not activated bandwidth billing by IP whitelist, InternetMaxBandwidthOut is consistent with that of the instance bound to the EIP. Therefore, it is unnecessary to pass in this parameter.</li></ul>
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * The EIP type. Default: EIP.
<ul style="margin:0"><li>For a user who has activated the AIA whitelist, possible values are:<ul><li>AnycastEIP: an Anycast EIP address. For more information, see [Anycast Internet Acceleration](https://cloud.tencent.com/document/product/644).</li></ul>Note: Only certain regions support Anycast EIPs.</li></ul>
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * The Anycast publishing region.
<ul style="margin:0"><li>For a user who has activated the AIA whitelist, possible values are:<ul><li>ANYCAST_ZONE_GLOBAL: the global publishing region (the global AIA whitelist must be activated additionally.) </li><li>ANYCAST_ZONE_OVERSEAS: the publishing regions outside Mainland China </li></ul>Default: ANYCAST_ZONE_OVERSEAS.</li></ul>
         * @type {string || null}
         */
        this.AnycastZone = null;

        /**
         * Whether the Anycast EIP can be bound to Cloud Load Balancer (CLB) instances.
<ul style="margin:0"><li>For a user who has activated the AIA whitelist, possible values are:<ul><li>TRUE: the Anycast EIP can be bound to CLB instances.</li>
<li>FALSE: the Anycast EIP can be bound to CVMs, NAT gateways, and HA virtual IP addresses.</li></ul>Default: FALSE.</li></ul>
         * @type {boolean || null}
         */
        this.ApplicableForCLB = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressCount = 'AddressCount' in params ? params.AddressCount : null;
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.AnycastZone = 'AnycastZone' in params ? params.AnycastZone : null;
        this.ApplicableForCLB = 'ApplicableForCLB' in params ? params.ApplicableForCLB : null;

    }
}

/**
 * The EIP bound to the NAT gateway
 * @class
 */
class NatGatewayAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the Elastic IP (EIP), such as `eip-11112222`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * The public IP address, such as `123.121.34.33`.
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * The block status of the resource. `true` indicates the EIP is blocked. `false` indicates that the EIP is not blocked.
         * @type {boolean || null}
         */
        this.IsBlocked = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.IsBlocked = 'IsBlocked' in params ? params.IsBlocked : null;

    }
}

/**
 * Route table object
 * @class
 */
class RouteTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The route table instance ID, such as `rtb-azd4dt1c`.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * The association relationships of the route table.
         * @type {Array.<RouteTableAssociation> || null}
         */
        this.AssociationSet = null;

        /**
         * Route table policy set.
         * @type {Array.<Route> || null}
         */
        this.RouteSet = null;

        /**
         * Whether it is the default route table.
         * @type {boolean || null}
         */
        this.Main = null;

        /**
         * Creation Time.
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

        if (params.AssociationSet) {
            this.AssociationSet = new Array();
            for (let z in params.AssociationSet) {
                let obj = new RouteTableAssociation();
                obj.deserialize(params.AssociationSet[z]);
                this.AssociationSet.push(obj);
            }
        }

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new Route();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.Main = 'Main' in params ? params.Main : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DeleteNetworkInterface request structure.
 * @class
 */
class DeleteNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the ENI instance, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

    }
}

/**
 * DetachClassicLinkVpc request structure.
 * @class
 */
class DetachClassicLinkVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPC instance. You can obtain the parameter value from the VpcId field in the returned result of DescribeVpcs API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Queries the ID of the CVM instance, such as `ins-r8hr2upy`.
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DeleteAddressTemplateGroup response structure.
 * @class
 */
class DeleteAddressTemplateGroupResponse extends  AbstractModel {
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
 * ReplaceRoutes response structure.
 * @class
 */
class ReplaceRoutesResponse extends  AbstractModel {
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
 * Tag key-value pair
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
Note: This field may return null, indicating no valid value.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
Note: This field may return null, indicating no valid value.
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
 * The object of the CCN route (IDC IP range) of the Direct Connect gateway
 * @class
 */
class DirectConnectGatewayCcnRoute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route ID.
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * IDC IP range.
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * The `AS-Path` attribute of `BGP`.
         * @type {Array.<string> || null}
         */
        this.ASPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.ASPath = 'ASPath' in params ? params.ASPath : null;

    }
}

/**
 * DeleteVpc request structure.
 * @class
 */
class DeleteVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPC instance. You can obtain the parameter value from the VpcId field in the returned result of DescribeVpcs API.
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DisassociateNatGatewayAddress response structure.
 * @class
 */
class DisassociateNatGatewayAddressResponse extends  AbstractModel {
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
 * ModifyServiceTemplateAttribute response structure.
 * @class
 */
class ModifyServiceTemplateAttributeResponse extends  AbstractModel {
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
 * DescribeCcns response structure.
 * @class
 */
class DescribeCcnsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of objects meeting the condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * CCN object.
         * @type {Array.<CCN> || null}
         */
        this.CcnSet = null;

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

        if (params.CcnSet) {
            this.CcnSet = new Array();
            for (let z in params.CcnSet) {
                let obj = new CCN();
                obj.deserialize(params.CcnSet[z]);
                this.CcnSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MigratePrivateIpAddress request structure.
 * @class
 */
class MigratePrivateIpAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the ENI instance bound with the private IP, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.SourceNetworkInterfaceId = null;

        /**
         * ID of the destination ENI instance to be migrated.
         * @type {string || null}
         */
        this.DestinationNetworkInterfaceId = null;

        /**
         * The private IP to be migrated, such as 10.0.0.6.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceNetworkInterfaceId = 'SourceNetworkInterfaceId' in params ? params.SourceNetworkInterfaceId : null;
        this.DestinationNetworkInterfaceId = 'DestinationNetworkInterfaceId' in params ? params.DestinationNetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * DescribeServiceTemplates request structure.
 * @class
 */
class DescribeServiceTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions.
<li>service-template-name - String - (Filter condition) Protocol port template name.</li>
<li>service-template-id - String - (Filter condition) Protocol port template instance ID, such as `ppm-e6dy460g`.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. The default value is 0.
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * Number of values to be returned. The default value is 20. Maximum is 100.
         * @type {string || null}
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
 * DescribeHaVips response structure.
 * @class
 */
class DescribeHaVipsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of objects meeting the condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * `HAVIP` object array.
         * @type {Array.<HaVip> || null}
         */
        this.HaVipSet = null;

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

        if (params.HaVipSet) {
            this.HaVipSet = new Array();
            for (let z in params.HaVipSet) {
                let obj = new HaVip();
                obj.deserialize(params.HaVipSet[z]);
                this.HaVipSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRouteTable request structure.
 * @class
 */
class DeleteRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The route table instance ID, such as `rtb-azd4dt1c`.
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * CreateSubnet response structure.
 * @class
 */
class CreateSubnetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet object.
         * @type {Subnet || null}
         */
        this.Subnet = null;

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

        if (params.Subnet) {
            let obj = new Subnet();
            obj.deserialize(params.Subnet)
            this.Subnet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVpnConnectionAttribute response structure.
 * @class
 */
class ModifyVpnConnectionAttributeResponse extends  AbstractModel {
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
 * DescribeSecurityGroupPolicies response structure.
 * @class
 */
class DescribeSecurityGroupPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group policy set.
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

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

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignIpv6SubnetCidrBlock request structure.
 * @class
 */
class AssignIpv6SubnetCidrBlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the VPC where the subnet is located, such as `vpc-f49l6u0z`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The assigned `IPv6` subnet IP range list.
         * @type {Array.<Ipv6SubnetCidrBlock> || null}
         */
        this.Ipv6SubnetCidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Ipv6SubnetCidrBlocks) {
            this.Ipv6SubnetCidrBlocks = new Array();
            for (let z in params.Ipv6SubnetCidrBlocks) {
                let obj = new Ipv6SubnetCidrBlock();
                obj.deserialize(params.Ipv6SubnetCidrBlocks[z]);
                this.Ipv6SubnetCidrBlocks.push(obj);
            }
        }

    }
}

/**
 * ModifySecurityGroupPolicies request structure.
 * @class
 */
class ModifySecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group instance ID, such as `sg-33ocnj9n`. This can be obtained through DescribeSecurityGroups.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * The security group policy set. SecurityGroupPolicySet object must specify new egress and ingress policies at the same time. SecurityGroupPolicy object does not support custom index (PolicyIndex).
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

        /**
         * Whether security group sorting is supported. True indicates that security group sorting is supported. If SortPolicys does not exist or is set to False, the security group policy can be modified.
         * @type {boolean || null}
         */
        this.SortPolicys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }
        this.SortPolicys = 'SortPolicys' in params ? params.SortPolicys : null;

    }
}

/**
 * ModifyAddressAttribute response structure.
 * @class
 */
class ModifyAddressAttributeResponse extends  AbstractModel {
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
 * AttachClassicLinkVpc request structure.
 * @class
 */
class AttachClassicLinkVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * CVM Instance ID
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * The gateway traffic monitoring details
 * @class
 */
class GatewayFlowMonitorDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin `IP`.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * Inbound packets.
         * @type {number || null}
         */
        this.InPkg = null;

        /**
         * Outbound packets.
         * @type {number || null}
         */
        this.OutPkg = null;

        /**
         * Inbound bandwidth, unit: `Byte`.
         * @type {number || null}
         */
        this.InTraffic = null;

        /**
         * Outbound bandwidth, unit: `Byte`.
         * @type {number || null}
         */
        this.OutTraffic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.InPkg = 'InPkg' in params ? params.InPkg : null;
        this.OutPkg = 'OutPkg' in params ? params.OutPkg : null;
        this.InTraffic = 'InTraffic' in params ? params.InTraffic : null;
        this.OutTraffic = 'OutTraffic' in params ? params.OutTraffic : null;

    }
}

/**
 * The network detection object.
 * @class
 */
class NetDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of a VPC instance, such as `vpc-12345678`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The name of a VPC instance.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * The ID of a subnet instance, such as subnet-12345678.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The name of a subnet instance.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * The ID of a network detection instance, such as netd-12345678.
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * The name of a network detection instance. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.NetDetectName = null;

        /**
         * The array of detection destination IPv4 addresses, which contains at most two IP addresses.
         * @type {Array.<string> || null}
         */
        this.DetectDestinationIp = null;

        /**
         * The array of detection source IPv4 addresses automatically allocated by the system. The length is 2.
         * @type {Array.<string> || null}
         */
        this.DetectSourceIp = null;

        /**
         * The type of the next hop. Currently supported types are:
VPN: VPN gateway;
DIRECTCONNECT: direct connect gateway;
PEERCONNECTION: peering connection;
NAT: NAT gateway;
NORMAL_CVM: normal CVM.
         * @type {string || null}
         */
        this.NextHopType = null;

        /**
         * The next-hop destination gateway. The value is related to NextHopType.
If NextHopType is set to VPN, the value of this parameter is the VPN gateway ID, such as vpngw-12345678.
If NextHopType is set to DIRECTCONNECT, the value of this parameter is the direct connect gateway ID, such as dcg-12345678.
If NextHopType is set to PEERCONNECTION, the value of this parameter is the peering connection ID, such as pcx-12345678.
If NextHopType is set to NAT, the value of this parameter is the NAT gateway ID, such as nat-12345678.
If NextHopType is set to NORMAL_CVM, the value of this parameter is the IPv4 address of the CVM, such as 10.0.0.12.
         * @type {string || null}
         */
        this.NextHopDestination = null;

        /**
         * The name of the next-hop gateway.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NextHopName = null;

        /**
         * Network detection description.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NetDetectDescription = null;

        /**
         * The creation time.
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.NetDetectName = 'NetDetectName' in params ? params.NetDetectName : null;
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.DetectSourceIp = 'DetectSourceIp' in params ? params.DetectSourceIp : null;
        this.NextHopType = 'NextHopType' in params ? params.NextHopType : null;
        this.NextHopDestination = 'NextHopDestination' in params ? params.NextHopDestination : null;
        this.NextHopName = 'NextHopName' in params ? params.NextHopName : null;
        this.NetDetectDescription = 'NetDetectDescription' in params ? params.NetDetectDescription : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * ResetVpnConnection response structure.
 * @class
 */
class ResetVpnConnectionResponse extends  AbstractModel {
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
 * NAT gateway object.
 * @class
 */
class NatGateway extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT gateway ID.
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * NAT gateway name.
         * @type {string || null}
         */
        this.NatGatewayName = null;

        /**
         * NAT gateway creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * The status of the NAT gateway.
 'PENDING': Creating, 'DELETING': Deleting, 'AVAILABLE': Operating, 'UPDATING': Upgrading,
‘FAILED’: Failed.
         * @type {string || null}
         */
        this.State = null;

        /**
         * The maximum outbound bandwidth of the gateway. Unit: Mbps.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * The concurrent connections cap of the gateway.
         * @type {number || null}
         */
        this.MaxConcurrentConnection = null;

        /**
         * The public IP object array of the bound NAT gateway.
         * @type {Array.<NatGatewayAddress> || null}
         */
        this.PublicIpAddressSet = null;

        /**
         * The NAT gateway status. `AVAILABLE`: Operating, `UNAVAILABLE`: Unavailable, `INSUFFICIENT`: Account is in arrears and the service is suspended.
         * @type {string || null}
         */
        this.NetworkState = null;

        /**
         * The port forwarding rules of the NAT gateway.
         * @type {Array.<DestinationIpPortTranslationNatRule> || null}
         */
        this.DestinationIpPortTranslationNatRuleSet = null;

        /**
         * VPC instance ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The availability zone in which the NAT gateway is located.
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.NatGatewayName = 'NatGatewayName' in params ? params.NatGatewayName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.State = 'State' in params ? params.State : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.MaxConcurrentConnection = 'MaxConcurrentConnection' in params ? params.MaxConcurrentConnection : null;

        if (params.PublicIpAddressSet) {
            this.PublicIpAddressSet = new Array();
            for (let z in params.PublicIpAddressSet) {
                let obj = new NatGatewayAddress();
                obj.deserialize(params.PublicIpAddressSet[z]);
                this.PublicIpAddressSet.push(obj);
            }
        }
        this.NetworkState = 'NetworkState' in params ? params.NetworkState : null;

        if (params.DestinationIpPortTranslationNatRuleSet) {
            this.DestinationIpPortTranslationNatRuleSet = new Array();
            for (let z in params.DestinationIpPortTranslationNatRuleSet) {
                let obj = new DestinationIpPortTranslationNatRule();
                obj.deserialize(params.DestinationIpPortTranslationNatRuleSet[z]);
                this.DestinationIpPortTranslationNatRuleSet.push(obj);
            }
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * CreateVpc response structure.
 * @class
 */
class CreateVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The VPC object.
         * @type {Vpc || null}
         */
        this.Vpc = null;

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

        if (params.Vpc) {
            let obj = new Vpc();
            obj.deserialize(params.Vpc)
            this.Vpc = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information about the secondary CIDR of the VPC.
 * @class
 */
class AssistantCidr extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of a `VPC` instance, such as `vpc-6v2ht8q5`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The secondary CIDR, such as `172.16.0.0/16`.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * The secondary CIDR block type. 0: common secondary CIDR block. 1: container secondary CIDR block. Default: 0.
         * @type {number || null}
         */
        this.AssistantType = null;

        /**
         * Subnets divided by the secondary CIDR.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.AssistantType = 'AssistantType' in params ? params.AssistantType : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

    }
}

/**
 * SetCcnRegionBandwidthLimits response structure.
 * @class
 */
class SetCcnRegionBandwidthLimitsResponse extends  AbstractModel {
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
 * ENI
 * @class
 */
class NetworkInterface extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the ENI instance, such as `eni-f1xjkw1b`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * ENI Name
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * ENI description.
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * Subnet instance ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC instance ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Bound security group.
         * @type {Array.<string> || null}
         */
        this.GroupSet = null;

        /**
         * Whether it is the primary ENI.
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * MAC address
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * ENI status:
<li>`PENDING`: Creating</li>
<li>`AVAILABLE`: Available</li>
<li>`ATTACHING`: Binding</li>
<li>`DETACHING`: Unbinding</li>
<li>`DELETING`: Deleting</li>
         * @type {string || null}
         */
        this.State = null;

        /**
         * Private IP information.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddressSet = null;

        /**
         * Bound CVM object.
Note: This field may return null, indicating no valid value.
         * @type {NetworkInterfaceAttachment || null}
         */
        this.Attachment = null;

        /**
         * Availability Zone.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Creation Time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * The `IPv6` address list.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6AddressSet = null;

        /**
         * Tag key-value pair.
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * The ENI type. 0: ENI. 1: EVM ENI.
         * @type {number || null}
         */
        this.EniType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.GroupSet = 'GroupSet' in params ? params.GroupSet : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.State = 'State' in params ? params.State : null;

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }

        if (params.Attachment) {
            let obj = new NetworkInterfaceAttachment();
            obj.deserialize(params.Attachment)
            this.Attachment = obj;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.EniType = 'EniType' in params ? params.EniType : null;

    }
}

/**
 * DeleteNatGatewayDestinationIpPortTranslationNatRule response structure.
 * @class
 */
class DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse extends  AbstractModel {
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
 * DeleteVpnGateway request structure.
 * @class
 */
class DeleteVpnGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPN gateway instance.
         * @type {string || null}
         */
        this.VpnGatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;

    }
}

/**
 * ReplaceRouteTableAssociation response structure.
 * @class
 */
class ReplaceRouteTableAssociationResponse extends  AbstractModel {
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
 * The network detection verification result.
 * @class
 */
class NetDetectState extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of a network detection instance, such as netd-12345678.
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * The array of network detection destination IP verification results.
         * @type {Array.<NetDetectIpState> || null}
         */
        this.NetDetectIpStateSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;

        if (params.NetDetectIpStateSet) {
            this.NetDetectIpStateSet = new Array();
            for (let z in params.NetDetectIpStateSet) {
                let obj = new NetDetectIpState();
                obj.deserialize(params.NetDetectIpStateSet[z]);
                this.NetDetectIpStateSet.push(obj);
            }
        }

    }
}

/**
 * ModifyHaVipAttribute request structure.
 * @class
 */
class ModifyHaVipAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique `ID` of the `HAVIP`, such as `havip-9o233uri`.
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * `HAVIP` can be named freely, but the maximum length is 60 characters.
         * @type {string || null}
         */
        this.HaVipName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;

    }
}

/**
 * AttachCcnInstances request structure.
 * @class
 */
class AttachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * List of associated network instances
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

        /**
         * The UIN (root account) of the CCN. By default, the current account belongs to the UIN
         * @type {string || null}
         */
        this.CcnUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.CcnUin = 'CcnUin' in params ? params.CcnUin : null;

    }
}

/**
 * ReleaseAddresses response structure.
 * @class
 */
class ReleaseAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The async task ID. You can use the [DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271) API to query the task status.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP address template
 * @class
 */
class AddressTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address template name.
         * @type {string || null}
         */
        this.AddressTemplateName = null;

        /**
         * The unique ID of the IP address template instance.
         * @type {string || null}
         */
        this.AddressTemplateId = null;

        /**
         * IP address information.
         * @type {Array.<string> || null}
         */
        this.AddressSet = null;

        /**
         * Creation Time.
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
        this.AddressTemplateName = 'AddressTemplateName' in params ? params.AddressTemplateName : null;
        this.AddressTemplateId = 'AddressTemplateId' in params ? params.AddressTemplateId : null;
        this.AddressSet = 'AddressSet' in params ? params.AddressSet : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * The instance object associated with a CCN.
 * @class
 */
class CcnInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the associated instance.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The region to which the associated instance ID belongs, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.InstanceRegion = null;

        /**
         * The type of the associated instance. Available values are:
<li>`VPC`: VPC</li>
<li>`DIRECTCONNECT`: Direct Connect</li>
<li>`BMVPC`: BM VPC</li>
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DeleteSecurityGroupPolicies request structure.
 * @class
 */
class DeleteSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group instance ID, such as `sg-33ocnj9n`. This can be obtained through DescribeSecurityGroups.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * The policy set of the security group. One request can only delete one or more policies in one direction. Both PolicyIndex-matching deletion and security group policy-matching deletion methods are supported. Each request can use only one matching method.
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * ResetVpnConnection request structure.
 * @class
 */
class ResetVpnConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPN gateway instance.
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * The ID of the VPN tunnel instance, such as `vpnx-f49l6u0z`.
         * @type {string || null}
         */
        this.VpnConnectionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;

    }
}

/**
 * VPN gateway quota object
 * @class
 */
class VpnGatewayQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * The bandwidth quota.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * The bandwidth quota name in Chinese.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * The bandwidth quota name in English.
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
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * The pricing information of a single billing item
 * @class
 */
class ItemPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * The pay-as-you-go billing method. Unit: CNY.
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * Pay-as-you-go billing method. Value Range: HOUR: Indicates billing by the hour. Scenarios using this hourly billing unit include: Instances postpaid on an hourly basis (POSTPAID_BY_HOUR), and bandwidth postpaid on an hourly basis (BANDWIDTH_POSTPAID_BY_HOUR). GB: Indicates billing on a per-GB basis. Scenarios using this billing unit include: Traffic postpaid on an hourly basis (TRAFFIC_POSTPAID_BY_HOUR).
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * Original price of the prepaid product. Unit: CNY.
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * Discount price of the prepaid product. Unit: CNY.
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
 * DeleteNatGateway request structure.
 * @class
 */
class DeleteNatGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the NAT gateway, such as `nat-df45454`.
         * @type {string || null}
         */
        this.NatGatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

    }
}

/**
 * DeleteVpnConnection response structure.
 * @class
 */
class DeleteVpnConnectionResponse extends  AbstractModel {
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
 * ReplaceSecurityGroupPolicy response structure.
 * @class
 */
class ReplaceSecurityGroupPolicyResponse extends  AbstractModel {
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
 * ModifyPrivateIpAddressesAttribute response structure.
 * @class
 */
class ModifyPrivateIpAddressesAttributeResponse extends  AbstractModel {
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
 * Subnet object
 * @class
 */
class SubnetInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `CIDR` of the subnet.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Subnet name.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * The availability zone, such as `ap-guangzhou-2`.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * The specified associated route table, such as `rtb-3ryrwzuu`.
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * ModifyHaVipAttribute response structure.
 * @class
 */
class ModifyHaVipAttributeResponse extends  AbstractModel {
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
 * CreateCcn response structure.
 * @class
 */
class CreateCcnResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN object.
         * @type {CCN || null}
         */
        this.Ccn = null;

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

        if (params.Ccn) {
            let obj = new CCN();
            obj.deserialize(params.Ccn)
            this.Ccn = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableCcnRoutes request structure.
 * @class
 */
class EnableCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The unique ID of the CCN routing policy, such as `ccnr-f49l6u0z`.
         * @type {Array.<string> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * DisableCcnRoutes request structure.
 * @class
 */
class DisableCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The unique ID of the CCN routing policy, such as `ccnr-f49l6u0z`.
         * @type {Array.<string> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * DescribeVpcPrivateIpAddresses response structure.
 * @class
 */
class DescribeVpcPrivateIpAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of private `IP` address information.
         * @type {Array.<VpcPrivateIpAddress> || null}
         */
        this.VpcPrivateIpAddressSet = null;

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

        if (params.VpcPrivateIpAddressSet) {
            this.VpcPrivateIpAddressSet = new Array();
            for (let z in params.VpcPrivateIpAddressSet) {
                let obj = new VpcPrivateIpAddress();
                obj.deserialize(params.VpcPrivateIpAddressSet[z]);
                this.VpcPrivateIpAddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Default VPC and subnet
 * @class
 */
class DefaultVpcSubnet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default VpcId
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Default SubnetId
         * @type {string || null}
         */
        this.SubnetId = null;

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

    }
}

/**
 * AssignIpv6SubnetCidrBlock response structure.
 * @class
 */
class AssignIpv6SubnetCidrBlockResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The assigned `IPv6` subnet IP range list.
         * @type {Array.<Ipv6SubnetCidrBlock> || null}
         */
        this.Ipv6SubnetCidrBlockSet = null;

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

        if (params.Ipv6SubnetCidrBlockSet) {
            this.Ipv6SubnetCidrBlockSet = new Array();
            for (let z in params.Ipv6SubnetCidrBlockSet) {
                let obj = new Ipv6SubnetCidrBlock();
                obj.deserialize(params.Ipv6SubnetCidrBlockSet[z]);
                this.Ipv6SubnetCidrBlockSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatGatewayAttribute request structure.
 * @class
 */
class ModifyNatGatewayAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the NAT gateway, such as `nat-df45454`.
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * The NAT gateway name, such as `test_nat`.
         * @type {string || null}
         */
        this.NatGatewayName = null;

        /**
         * The maximum outbound bandwidth of the NAT gateway. Unit: Mbps.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.NatGatewayName = 'NatGatewayName' in params ? params.NatGatewayName : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * DeleteSecurityGroup response structure.
 * @class
 */
class DeleteSecurityGroupResponse extends  AbstractModel {
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
 * Routing policy object
 * @class
 */
class Route extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination IP range, such as 112.20.51.0/24. Values cannot be in the VPC IP range.
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * The type of the next hop. Currently supported types include:
CVM: Public gateway-type CVM;
VPN: VPN gateway;
DIRECTCONNECT: Direct connect gateway;
PEERCONNECTION: Peering connection;
SSLVPN: sslvpn gateway;
NAT: NAT gateway; 
NORMAL_CVM: Normal CVM;
EIP: The public IP of the CVM;
CCN: Cloud Connect Network.
         * @type {string || null}
         */
        this.GatewayType = null;

        /**
         * Next hop address. You simply need to specify the gateway ID of a different next hop type, and the system will automatically match the next hop address.
Important note: When the GatewayType is EIP, the GatewayId has a fixed value `0`
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * The ID of the routing policy.
         * @type {number || null}
         */
        this.RouteId = null;

        /**
         * The description of the routing policy.
         * @type {string || null}
         */
        this.RouteDescription = null;

        /**
         * Whether it is enabled
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * The route type. Currently, the following types are supported:
USER: User route;
NETD: Network probe route. When creating a network probe route, the system delivers by default. It cannot be edited or deleted;
CCN: CCN route. The system delivers by default. It cannot be edited or deleted.
Users can only add and operate USER-type routes.
         * @type {string || null}
         */
        this.RouteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayType = 'GatewayType' in params ? params.GatewayType : null;
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.RouteDescription = 'RouteDescription' in params ? params.RouteDescription : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;

    }
}

/**
 * CreateSubnets response structure.
 * @class
 */
class CreateSubnetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of newly created subnets.
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

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

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNetworkInterface response structure.
 * @class
 */
class CreateNetworkInterfaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ENI instance.
         * @type {NetworkInterface || null}
         */
        this.NetworkInterface = null;

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

        if (params.NetworkInterface) {
            let obj = new NetworkInterface();
            obj.deserialize(params.NetworkInterface)
            this.NetworkInterface = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HaVipAssociateAddressIp request structure.
 * @class
 */
class HaVipAssociateAddressIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique `ID` of the `HAVIP`, such as `havip-9o233uri`. This must be a `HAVIP` that has not been bound to an `EIP`
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * The Elastic `IP`. This must be an `EIP` that has not been bound to a `HAVIP`
         * @type {string || null}
         */
        this.AddressIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;

    }
}

/**
 * DescribeGatewayFlowMonitorDetail request structure.
 * @class
 */
class DescribeGatewayFlowMonitorDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The point in time. This indicates details of this minute will be queried. For example, in `2019-02-28 18:15:20`, details at `18:15` will be queried.
         * @type {string || null}
         */
        this.TimePoint = null;

        /**
         * The instance ID of the VPN gateway, such as `vpn-ltjahce6`.
         * @type {string || null}
         */
        this.VpnId = null;

        /**
         * The instance ID of the Direct Connect gateway, such as `dcg-ltjahce6`.
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * The instance ID of the peering connection, such as `pcx-ltjahce6`.
         * @type {string || null}
         */
        this.PeeringConnectionId = null;

        /**
         * The instance ID of the NAT gateway, such as `nat-ltjahce6`.
         * @type {string || null}
         */
        this.NatId = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The returned quantity.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The order field supports `InPkg`, `OutPkg`, `InTraffic`, and `OutTraffic`.
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * Order methods. Ascending: `ASC`, Descending: `DESC`.
         * @type {string || null}
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimePoint = 'TimePoint' in params ? params.TimePoint : null;
        this.VpnId = 'VpnId' in params ? params.VpnId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.PeeringConnectionId = 'PeeringConnectionId' in params ? params.PeeringConnectionId : null;
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * DescribeAddressQuota request structure.
 * @class
 */
class DescribeAddressQuotaRequest extends  AbstractModel {
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
 * ModifyNetworkInterfaceAttribute response structure.
 * @class
 */
class ModifyNetworkInterfaceAttributeResponse extends  AbstractModel {
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
 * TransformAddress response structure.
 * @class
 */
class TransformAddressResponse extends  AbstractModel {
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
 * InquiryPriceCreateVpnGateway response structure.
 * @class
 */
class InquiryPriceCreateVpnGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product price.
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
 * CreateNatGatewayDestinationIpPortTranslationNatRule request structure.
 * @class
 */
class CreateNatGatewayDestinationIpPortTranslationNatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the NAT gateway, such as `nat-df45454`.
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * The port forwarding rules of the NAT gateway.
         * @type {Array.<DestinationIpPortTranslationNatRule> || null}
         */
        this.DestinationIpPortTranslationNatRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

        if (params.DestinationIpPortTranslationNatRules) {
            this.DestinationIpPortTranslationNatRules = new Array();
            for (let z in params.DestinationIpPortTranslationNatRules) {
                let obj = new DestinationIpPortTranslationNatRule();
                obj.deserialize(params.DestinationIpPortTranslationNatRules[z]);
                this.DestinationIpPortTranslationNatRules.push(obj);
            }
        }

    }
}

/**
 * AssignIpv6Addresses response structure.
 * @class
 */
class AssignIpv6AddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of `IPv6` addresses assigned to ENIs.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6AddressSet = null;

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

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRoutes response structure.
 * @class
 */
class CreateRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of newly added instances.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Route table object.
         * @type {Array.<RouteTable> || null}
         */
        this.RouteTableSet = null;

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

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTable();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpcIpv6Addresses request structure.
 * @class
 */
class DescribeVpcIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the `VPC`, such as `vpc-f49l6u0z`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The `IP` address list. Each request supports a maximum of `10` batch querying.
         * @type {Array.<string> || null}
         */
        this.Ipv6Addresses = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The returned quantity.
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Ipv6Addresses = 'Ipv6Addresses' in params ? params.Ipv6Addresses : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSecurityGroups response structure.
 * @class
 */
class DescribeSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group object.
         * @type {Array.<SecurityGroup> || null}
         */
        this.SecurityGroupSet = null;

        /**
         * The number of instances meeting the filter condition.
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

        if (params.SecurityGroupSet) {
            this.SecurityGroupSet = new Array();
            for (let z in params.SecurityGroupSet) {
                let obj = new SecurityGroup();
                obj.deserialize(params.SecurityGroupSet[z]);
                this.SecurityGroupSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The association relationships of the route table
 * @class
 */
class RouteTableAssociation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet instance ID.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Route table instance ID.
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * DetachNetworkInterface response structure.
 * @class
 */
class DetachNetworkInterfaceResponse extends  AbstractModel {
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
 * ModifyIpv6AddressesAttribute request structure.
 * @class
 */
class ModifyIpv6AddressesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the ENI instance, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The information of the specified private `IPv6` addresses.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }

    }
}

/**
 * ResetRoutes response structure.
 * @class
 */
class ResetRoutesResponse extends  AbstractModel {
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
 * Filter key-value pair
 * @class
 */
class FilterObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * The attribute name. If more than one Filter exists, the logical relation between these Filters is `AND`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The attribute value. If there are multiple Values for one Filter, the logical relation between these Values under the same Filter is `OR`.
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
 * DescribeVpcs request structure.
 * @class
 */
class DescribeVpcsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The VPC instance ID, such as `vpc-f49l6u0z`. Each request supports a maximum of 100 instances. `VpcIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * Filter condition. `VpcIds` and `Filters` cannot be specified at the same time.
<li>vpc-name - String - (Filter condition) VPC instance name.</li>
<li>is-default - String - (Filter condition) Indicates whether it is the default VPC.</li>
<li>vpc-id - String - (Filter condition) VPC instance ID, such as `vpc-f49l6u0z`.</li>
<li>cidr-block - String - (Filter condition) VPC CIDR.</li>
<li>tag-key - String - Required: No - (Filter condition) Filter by tag key.</li>
<li>tag:tag-key - String - Required: No - (Filter condition) Filter by tag key-value pair. The tag-key is replaced with the specific tag key. For usage, refer to case 2.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * The returned quantity
         * @type {string || null}
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
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;

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
 * ModifySecurityGroupPolicies response structure.
 * @class
 */
class ModifySecurityGroupPoliciesResponse extends  AbstractModel {
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
 * DeleteNatGatewayDestinationIpPortTranslationNatRule request structure.
 * @class
 */
class DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the NAT gateway, such as `nat-df45454`.
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * The port forwarding rules of the NAT gateway.
         * @type {Array.<DestinationIpPortTranslationNatRule> || null}
         */
        this.DestinationIpPortTranslationNatRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

        if (params.DestinationIpPortTranslationNatRules) {
            this.DestinationIpPortTranslationNatRules = new Array();
            for (let z in params.DestinationIpPortTranslationNatRules) {
                let obj = new DestinationIpPortTranslationNatRule();
                obj.deserialize(params.DestinationIpPortTranslationNatRules[z]);
                this.DestinationIpPortTranslationNatRules.push(obj);
            }
        }

    }
}

/**
 * The port forwarding rules of the NAT gateway
 * @class
 */
class NatGatewayDestinationIpPortTranslationNatRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Network protocol. Available choices: `TCP`, `UDP`.
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * EIP.
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * Public port.
         * @type {number || null}
         */
        this.PublicPort = null;

        /**
         * Private network address.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * Private network port.
         * @type {number || null}
         */
        this.PrivatePort = null;

        /**
         * NAT gateway forwarding rule description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * NAT gateway ID.
Note: This field may return null, indicating no valid value.
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * VPC ID.
Note: This field may return null, indicating no valid value.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The creation time of the NAT gateway forwarding rule.
Note: This field may return null, indicating no valid value.
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
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.PublicPort = 'PublicPort' in params ? params.PublicPort : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.PrivatePort = 'PrivatePort' in params ? params.PrivatePort : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DescribeNetDetectStates response structure.
 * @class
 */
class DescribeNetDetectStatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The array of network detection verification results that meet requirements.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<NetDetectState> || null}
         */
        this.NetDetectStateSet = null;

        /**
         * The number of network detection verification results that meet requirements.
Note: This field may return null, indicating that no valid values can be obtained.
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

        if (params.NetDetectStateSet) {
            this.NetDetectStateSet = new Array();
            for (let z in params.NetDetectStateSet) {
                let obj = new NetDetectState();
                obj.deserialize(params.NetDetectStateSet[z]);
                this.NetDetectStateSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Binding relationship of the ENI
 * @class
 */
class NetworkInterfaceAttachment extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The serial number of ENI in the CVM instance.
         * @type {number || null}
         */
        this.DeviceIndex = null;

        /**
         * The account information of the CVM owner.
         * @type {string || null}
         */
        this.InstanceAccountId = null;

        /**
         * Binding time
         * @type {string || null}
         */
        this.AttachTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DeviceIndex = 'DeviceIndex' in params ? params.DeviceIndex : null;
        this.InstanceAccountId = 'InstanceAccountId' in params ? params.InstanceAccountId : null;
        this.AttachTime = 'AttachTime' in params ? params.AttachTime : null;

    }
}

/**
 * ResetVpnGatewayInternetMaxBandwidth response structure.
 * @class
 */
class ResetVpnGatewayInternetMaxBandwidthResponse extends  AbstractModel {
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
 * CreateVpnConnection response structure.
 * @class
 */
class CreateVpnConnectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tunnel instance object.
         * @type {VpnConnection || null}
         */
        this.VpnConnection = null;

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

        if (params.VpnConnection) {
            let obj = new VpnConnection();
            obj.deserialize(params.VpnConnection)
            this.VpnConnection = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachNetworkInterface request structure.
 * @class
 */
class DetachNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the ENI instance, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The ID of the CVM instance, such as `ins-r8hr2upy`.
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
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * IP address template.
 * @class
 */
class AddressTemplateSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the IP address, such as `ipm-2uw6ujo6`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * The ID of the IP address group, such as `ipmg-2uw6ujo6`.
         * @type {string || null}
         */
        this.AddressGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressGroupId = 'AddressGroupId' in params ? params.AddressGroupId : null;

    }
}

/**
 * CheckNetDetectState request structure.
 * @class
 */
class CheckNetDetectStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The array of detection destination IPv4 addresses, which contains at most two IP addresses.
         * @type {Array.<string> || null}
         */
        this.DetectDestinationIp = null;

        /**
         * The type of the next hop. Currently supported types are:
VPN: VPN gateway;
DIRECTCONNECT: direct connect gateway;
PEERCONNECTION: peering connection;
NAT: NAT gateway;
NORMAL_CVM: normal CVM.
         * @type {string || null}
         */
        this.NextHopType = null;

        /**
         * The next-hop destination gateway. The value is related to NextHopType.
If NextHopType is set to VPN, the value of this parameter is the VPN gateway ID, such as vpngw-12345678.
If NextHopType is set to DIRECTCONNECT, the value of this parameter is the direct connect gateway ID, such as dcg-12345678.
If NextHopType is set to PEERCONNECTION, the value of this parameter is the peering connection ID, such as pcx-12345678.
If NextHopType is set to NAT, the value of this parameter is the NAT gateway ID, such as nat-12345678.
If NextHopType is set to NORMAL_CVM, the value of this parameter is the IPv4 address of the CVM, such as 10.0.0.12.
         * @type {string || null}
         */
        this.NextHopDestination = null;

        /**
         * The ID of a network detection instance, such as netd-12345678.
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * The `ID` of a `VPC` instance, such as `vpc-12345678`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The ID of a subnet instance, such as subnet-12345678.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The name of a network detection instance. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.NetDetectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.NextHopType = 'NextHopType' in params ? params.NextHopType : null;
        this.NextHopDestination = 'NextHopDestination' in params ? params.NextHopDestination : null;
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.NetDetectName = 'NetDetectName' in params ? params.NetDetectName : null;

    }
}

/**
 * AssignIpv6Addresses request structure.
 * @class
 */
class AssignIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the ENI instance, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The specified `IPv6` address list. You can specify a maximum of 10 at one time. The quota is calculated together with the `Ipv6AddressCount` input parameter.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

        /**
         * The number of automatically assigned `IPv6` addresses. The total number of private IP addresses cannot exceed the quota. The quota is calculated together with the `Ipv6Addresses` input parameter.
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
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * DescribeAddresses response structure.
 * @class
 */
class DescribeAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of EIPs meeting the condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of EIPs details.
         * @type {Array.<Address> || null}
         */
        this.AddressSet = null;

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

        if (params.AddressSet) {
            this.AddressSet = new Array();
            for (let z in params.AddressSet) {
                let obj = new Address();
                obj.deserialize(params.AddressSet[z]);
                this.AddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Statistics on the instances associated with the security group
 * @class
 */
class SecurityGroupAssociationStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group instance ID.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Number of CVM instances.
         * @type {number || null}
         */
        this.CVM = null;

        /**
         * Number of database instances.
         * @type {number || null}
         */
        this.CDB = null;

        /**
         * Number of ENI instances.
         * @type {number || null}
         */
        this.ENI = null;

        /**
         * Number of times a security group is referenced by other security groups
         * @type {number || null}
         */
        this.SG = null;

        /**
         * Number of load balancer instances.
         * @type {number || null}
         */
        this.CLB = null;

        /**
         * The binding statistics for all instances.
         * @type {Array.<InstanceStatistic> || null}
         */
        this.InstanceStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.CVM = 'CVM' in params ? params.CVM : null;
        this.CDB = 'CDB' in params ? params.CDB : null;
        this.ENI = 'ENI' in params ? params.ENI : null;
        this.SG = 'SG' in params ? params.SG : null;
        this.CLB = 'CLB' in params ? params.CLB : null;

        if (params.InstanceStatistics) {
            this.InstanceStatistics = new Array();
            for (let z in params.InstanceStatistics) {
                let obj = new InstanceStatistic();
                obj.deserialize(params.InstanceStatistics[z]);
                this.InstanceStatistics.push(obj);
            }
        }

    }
}

/**
 * AttachClassicLinkVpc response structure.
 * @class
 */
class AttachClassicLinkVpcResponse extends  AbstractModel {
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
 * CreateServiceTemplateGroup response structure.
 * @class
 */
class CreateServiceTemplateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group object of the protocol port template.
         * @type {ServiceTemplateGroup || null}
         */
        this.ServiceTemplateGroup = null;

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

        if (params.ServiceTemplateGroup) {
            let obj = new ServiceTemplateGroup();
            obj.deserialize(params.ServiceTemplateGroup)
            this.ServiceTemplateGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAddressTemplate request structure.
 * @class
 */
class CreateAddressTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the IP address template
         * @type {string || null}
         */
        this.AddressTemplateName = null;

        /**
         * Address information, including IP, CIDR and IP address range.
         * @type {Array.<string> || null}
         */
        this.Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateName = 'AddressTemplateName' in params ? params.AddressTemplateName : null;
        this.Addresses = 'Addresses' in params ? params.Addresses : null;

    }
}

/**
 * DescribeNatGateways response structure.
 * @class
 */
class DescribeNatGatewaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT gateway object array.
         * @type {Array.<NatGateway> || null}
         */
        this.NatGatewaySet = null;

        /**
         * The number of NAT gateway object sets meeting the conditions.
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

        if (params.NatGatewaySet) {
            this.NatGatewaySet = new Array();
            for (let z in params.NatGatewaySet) {
                let obj = new NatGateway();
                obj.deserialize(params.NatGatewaySet[z]);
                this.NatGatewaySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttachCcnInstances response structure.
 * @class
 */
class AttachCcnInstancesResponse extends  AbstractModel {
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
 * CreateDefaultVpc response structure.
 * @class
 */
class CreateDefaultVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default VPC and subnet IDs
         * @type {DefaultVpcSubnet || null}
         */
        this.Vpc = null;

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

        if (params.Vpc) {
            let obj = new DefaultVpcSubnet();
            obj.deserialize(params.Vpc)
            this.Vpc = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVpcAttribute response structure.
 * @class
 */
class ModifyVpcAttributeResponse extends  AbstractModel {
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
 * DeleteCcn response structure.
 * @class
 */
class DeleteCcnResponse extends  AbstractModel {
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
 * ModifyIpv6AddressesAttribute response structure.
 * @class
 */
class ModifyIpv6AddressesAttributeResponse extends  AbstractModel {
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
 * DeleteVpc response structure.
 * @class
 */
class DeleteVpcResponse extends  AbstractModel {
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
 * DescribeCcnRoutes response structure.
 * @class
 */
class DescribeCcnRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of objects meeting the condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The CCN routing policy object.
         * @type {Array.<CcnRoute> || null}
         */
        this.RouteSet = null;

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

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new CcnRoute();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateNatGatewayAddress request structure.
 * @class
 */
class DisassociateNatGatewayAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the NAT gateway, such as `nat-df45454`.
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * The array of EIPs bound to the NAT gateway.
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;

    }
}

/**
 * DescribeNatGateways request structure.
 * @class
 */
class DescribeNatGatewaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unified ID of the NAT gateways, such as `nat-123xx454`.
         * @type {Array.<string> || null}
         */
        this.NatGatewayIds = null;

        /**
         * Filter condition. `NatGatewayIds` and `Filters` cannot be specified at the same time.
<li>nat-gateway-id - String - (Filter condition) The ID of the protocol port template instance, such as `nat-123xx454`.</li>
<li>vpc-id - String - (Filter condition) The unique ID of the VPC, such as `vpc-123xx454`.</li>
<li>nat-gateway-name - String - (Filter condition) The ID of the protocol port template instance, such as `test_nat`.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of values to be returned. The default value is 20. Maximum is 100.
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
        this.NatGatewayIds = 'NatGatewayIds' in params ? params.NatGatewayIds : null;

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
 * Private IP information
 * @class
 */
class PrivateIpAddressSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private IP address.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * Whether it is a primary IP.
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * Public IP address.
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * EIP instance ID, such as `eip-11112222`。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * Private IP description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Whether the public IP is blocked.
         * @type {boolean || null}
         */
        this.IsWanIpBlocked = null;

        /**
         * IP status:
PENDING: Creating
MIGRATING: Migrating
DELETING: Deleting
AVAILABLE: Available
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * ModifySecurityGroupAttribute response structure.
 * @class
 */
class ModifySecurityGroupAttributeResponse extends  AbstractModel {
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
 * Security group object
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group instance ID, such as `sg-ohuuioma`.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group can be named freely, but cannot exceed 60 characters.
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * The remarks for the security group. The maximum length is 100 characters.
         * @type {string || null}
         */
        this.SecurityGroupDesc = null;

        /**
         * The project id is 0 by default. You can query this in the project management page of the Qcloud console.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Whether it is the default security group (which cannot be deleted).
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * Security group creation time.
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
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupDesc = 'SecurityGroupDesc' in params ? params.SecurityGroupDesc : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * MigratePrivateIpAddress response structure.
 * @class
 */
class MigratePrivateIpAddressResponse extends  AbstractModel {
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
 * DeleteRouteTable response structure.
 * @class
 */
class DeleteRouteTableResponse extends  AbstractModel {
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
 * ResetNatGatewayConnection request structure.
 * @class
 */
class ResetNatGatewayConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT gateway ID.
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * Concurrent connections cap of the NAT gateway, such as 1000000, 3000000, 10000000.
         * @type {number || null}
         */
        this.MaxConcurrentConnection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;
        this.MaxConcurrentConnection = 'MaxConcurrentConnection' in params ? params.MaxConcurrentConnection : null;

    }
}

/**
 * The verification result of the network detection destination IP address.
 * @class
 */
class NetDetectIpState extends  AbstractModel {
    constructor(){
        super();

        /**
         * The destination IPv4 address of network detection.
         * @type {string || null}
         */
        this.DetectDestinationIp = null;

        /**
         * The detection result.
0: successful;
-1: no packet loss occurred during routing;
-2: packet loss occurred when outbound traffic is blocked by the ACL;
-3: packet loss occurred when inbound traffic is blocked by the ACL;
-4: other errors.
         * @type {number || null}
         */
        this.State = null;

        /**
         * The latency. Unit: ms.
         * @type {number || null}
         */
        this.Delay = null;

        /**
         * The packet loss rate.
         * @type {number || null}
         */
        this.PacketLossRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.State = 'State' in params ? params.State : null;
        this.Delay = 'Delay' in params ? params.Delay : null;
        this.PacketLossRate = 'PacketLossRate' in params ? params.PacketLossRate : null;

    }
}

/**
 * Account attribute object
 * @class
 */
class AccountAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute name
         * @type {string || null}
         */
        this.AttributeName = null;

        /**
         * Attribute values
         * @type {Array.<string> || null}
         */
        this.AttributeValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttributeName = 'AttributeName' in params ? params.AttributeName : null;
        this.AttributeValues = 'AttributeValues' in params ? params.AttributeValues : null;

    }
}

/**
 * DisassociateAddress response structure.
 * @class
 */
class DisassociateAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The async task ID. You can use the [DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271) API to query the task status.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDirectConnectGatewayCcnRoutes request structure.
 * @class
 */
class DeleteDirectConnectGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the Direct Connect gateway, such as `dcg-prpqlmg1`
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * The route ID, such as `ccnr-f49l6u0z`.
         * @type {Array.<string> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * DescribeCcnAttachedInstances response structure.
 * @class
 */
class DescribeCcnAttachedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of objects meeting the condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The list of associated instances.
         * @type {Array.<CcnAttachedInstance> || null}
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
                let obj = new CcnAttachedInstance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HaVipAssociateAddressIp response structure.
 * @class
 */
class HaVipAssociateAddressIpResponse extends  AbstractModel {
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
 * DeleteRoutes request structure.
 * @class
 */
class DeleteRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table instance ID.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Routing policy object.
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * AssociateAddress request structure.
 * @class
 */
class AssociateAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the EIP, such as `eip-11112222`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * The ID of the instance to be bound, such as `ins-11112222`. You can query the instance ID by logging into the [Console](https://console.cloud.tencent.com/cvm). You can also obtain the parameter value from the `InstanceId` field in the returned result of [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The ID of the ENI to be bonud, such as `eni-11112222`. `NetworkInterfaceId` and `InstanceId` cannot be specified at the same time. You can query the ENI ID by logging into the [Console](https://console.cloud.tencent.com/vpc/eni). You can also obtain the parameter value from the `networkInterfaceId` field in the returned result of [DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/15817) API.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The private IP to be bound. If you specify `NetworkInterfaceId`, then you must also specify `PrivateIpAddress`, indicating the EIP is bound to the specified private IP of the specified ENI. At the same time, you must ensure the specified `PrivateIpAddress` is a private IP on the `NetworkInterfaceId`. You can query the private IP of the specified ENI by logging into the [Console](https://console.cloud.tencent.com/vpc/eni). You can also obtain the parameter value from the `privateIpAddress` field in the returned result of [DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/15817) API.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * CreateNetDetect request structure.
 * @class
 */
class CreateNetDetectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of a `VPC` instance, such as `vpc-12345678`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The ID of a subnet instance, such as subnet-12345678.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The name of a network detection instance. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.NetDetectName = null;

        /**
         * The array of detection destination IPv4 addresses, which contains at most two IP addresses.
         * @type {Array.<string> || null}
         */
        this.DetectDestinationIp = null;

        /**
         * The type of the next hop. Currently supported types are:
VPN: VPN gateway;
DIRECTCONNECT: direct connect gateway;
PEERCONNECTION: peering connection;
NAT: NAT gateway;
NORMAL_CVM: normal CVM.
         * @type {string || null}
         */
        this.NextHopType = null;

        /**
         * The next-hop destination gateway. The value is related to NextHopType.
If NextHopType is set to VPN, the value of this parameter is the VPN gateway ID, such as vpngw-12345678.
If NextHopType is set to DIRECTCONNECT, the value of this parameter is the direct connect gateway ID, such as dcg-12345678.
If NextHopType is set to PEERCONNECTION, the value of this parameter is the peering connection ID, such as pcx-12345678.
If NextHopType is set to NAT, the value of this parameter is the NAT gateway ID, such as nat-12345678.
If NextHopType is set to NORMAL_CVM, the value of this parameter is the IPv4 address of the CVM, such as 10.0.0.12.
         * @type {string || null}
         */
        this.NextHopDestination = null;

        /**
         * Network detection description.
         * @type {string || null}
         */
        this.NetDetectDescription = null;

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
        this.NetDetectName = 'NetDetectName' in params ? params.NetDetectName : null;
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.NextHopType = 'NextHopType' in params ? params.NextHopType : null;
        this.NextHopDestination = 'NextHopDestination' in params ? params.NextHopDestination : null;
        this.NetDetectDescription = 'NetDetectDescription' in params ? params.NetDetectDescription : null;

    }
}

/**
 * CreateAddressTemplate response structure.
 * @class
 */
class CreateAddressTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The template object of the IP address.
         * @type {AddressTemplate || null}
         */
        this.AddressTemplate = null;

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

        if (params.AddressTemplate) {
            let obj = new AddressTemplate();
            obj.deserialize(params.AddressTemplate)
            this.AddressTemplate = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNatGatewayDestinationIpPortTranslationNatRule response structure.
 * @class
 */
class CreateNatGatewayDestinationIpPortTranslationNatRuleResponse extends  AbstractModel {
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
 * DeleteAddressTemplateGroup request structure.
 * @class
 */
class DeleteAddressTemplateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IP address template group instance ID, such as `ipmg-90cex8mq`.
         * @type {string || null}
         */
        this.AddressTemplateGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateGroupId = 'AddressTemplateGroupId' in params ? params.AddressTemplateGroupId : null;

    }
}

/**
 * AttachNetworkInterface response structure.
 * @class
 */
class AttachNetworkInterfaceResponse extends  AbstractModel {
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
 * DescribeNetworkInterfaceLimit request structure.
 * @class
 */
class DescribeNetworkInterfaceLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the CVM instance to be queried.
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
 * Protocol port template
 * @class
 */
class ServiceTemplateSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol port ID, such as `ppm-f5n1f8da`.
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * Protocol port group ID, such as `ppmg-f5n1f8da`.
         * @type {string || null}
         */
        this.ServiceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;

    }
}

/**
 * DescribeServiceTemplates response structure.
 * @class
 */
class DescribeServiceTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of instances meeting the filter condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Protocol port template object.
         * @type {Array.<ServiceTemplate> || null}
         */
        this.ServiceTemplateSet = null;

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

        if (params.ServiceTemplateSet) {
            this.ServiceTemplateSet = new Array();
            for (let z in params.ServiceTemplateSet) {
                let obj = new ServiceTemplate();
                obj.deserialize(params.ServiceTemplateSet[z]);
                this.ServiceTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptAttachCcnInstances request structure.
 * @class
 */
class AcceptAttachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * List of associated instances.
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * ResetAttachCcnInstances request structure.
 * @class
 */
class ResetAttachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The UIN (root account) to which the CCN belongs.
         * @type {string || null}
         */
        this.CcnUin = null;

        /**
         * The list of network instances that re-apply for association.
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CcnUin = 'CcnUin' in params ? params.CcnUin : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * CreateHaVip response structure.
 * @class
 */
class CreateHaVipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * `HAVIP` object.
         * @type {HaVip || null}
         */
        this.HaVip = null;

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

        if (params.HaVip) {
            let obj = new HaVip();
            obj.deserialize(params.HaVip)
            this.HaVip = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGatewayFlowMonitorDetail response structure.
 * @class
 */
class DescribeGatewayFlowMonitorDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of objects meeting the condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The gateway traffic monitoring details.
         * @type {Array.<GatewayFlowMonitorDetail> || null}
         */
        this.GatewayFlowMonitorDetailSet = null;

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

        if (params.GatewayFlowMonitorDetailSet) {
            this.GatewayFlowMonitorDetailSet = new Array();
            for (let z in params.GatewayFlowMonitorDetailSet) {
                let obj = new GatewayFlowMonitorDetail();
                obj.deserialize(params.GatewayFlowMonitorDetailSet[z]);
                this.GatewayFlowMonitorDetailSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpnGateways request structure.
 * @class
 */
class DescribeVpnGatewaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The VPN gateway instance ID, such as `vpngw-f49l6u0z`. Each request can have a maximum of 100 instances. `VpnGatewayIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.VpnGatewayIds = null;

        /**
         * Filter condition. `VpnGatewayIds` and `Filters` cannot be specified at the same time.
<li>vpc-id - String - (Filter condition) VPC instance ID, such as `vpc-f49l6u0z`.</li>
<li>vpn-gateway-id - String - (Filter condition) VPN instance ID, such as `vpngw-5aluhh9t`.</li>
<li>vpn-gateway-name - String - (Filter condition) VPN instance name.</li>
<li>type - String - (Filter condition) VPN gateway type: 'IPSEC', 'SSL'.</li>
<li>public-ip-address- String - (Filter condition) Public IP.</li>
<li>renew-flag - String - (Filter condition) Gateway renewal type. Manual renewal: `NOTIFY_AND_MANUAL_RENEW`, Automatic renewal: `NOTIFY_AND_AUTO_RENEW`.</li>
<li>zone - String - (Filter condition) The availability zone where the VPN is located, such as `ap-guangzhou-2`.</li>
         * @type {Array.<FilterObject> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of request objects.
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
        this.VpnGatewayIds = 'VpnGatewayIds' in params ? params.VpnGatewayIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new FilterObject();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Classiclink instance
 * @class
 */
class ClassicLinkInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC instance ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The unique ID of the CVM instance
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateVpnGateway request structure.
 * @class
 */
class CreateVpnGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPC instance. You can obtain the parameter value from the VpcId field in the returned result of DescribeVpcs API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The VPN gateway name. The maximum length is 60 bytes.
         * @type {string || null}
         */
        this.VpnGatewayName = null;

        /**
         * The public network bandwidth configuration. Available bandwidth specifications: 5, 10, 20, 50, and 100. Unit: Mbps
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * The VPN gateway billing mode. PREPAID: prepaid means monthly subscription. POSTPAID_BY_HOUR: postpaid means pay-as-you-go. Default: POSTPAID_BY_HOUR. If prepaid mode is specified, the `InstanceChargePrepaid` parameter must be entered.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Parameter settings for prepaid billing mode, also known as monthly subscription. This parameter can specify the purchase period and other attributes such as auto-renewal. This parameter is mandatory for prepaid instances.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * The availability zone, such as `ap-guangzhou-2`.
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayName = 'VpnGatewayName' in params ? params.VpnGatewayName : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DescribeSubnets response structure.
 * @class
 */
class DescribeSubnetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of instances meeting the filter condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Subnet object.
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

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

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNetworkInterfaceAttribute request structure.
 * @class
 */
class ModifyNetworkInterfaceAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the ENI instance, such as `eni-pxir56ns`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The name of the ENI. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * ENI description can be named freely, but the maximum length is 60 characters.
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * The specified security groups to be bound with, such as ['sg-1dd51d'].
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DisableCcnRoutes response structure.
 * @class
 */
class DisableCcnRoutesResponse extends  AbstractModel {
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
 * HaVipDisassociateAddressIp response structure.
 * @class
 */
class HaVipDisassociateAddressIpResponse extends  AbstractModel {
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
 * CreateSubnets request structure.
 * @class
 */
class CreateSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the `VPC` instance, such as `vpc-6v2ht8q5`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The subnet object list.
         * @type {Array.<SubnetInput> || null}
         */
        this.Subnets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Subnets) {
            this.Subnets = new Array();
            for (let z in params.Subnets) {
                let obj = new SubnetInput();
                obj.deserialize(params.Subnets[z]);
                this.Subnets.push(obj);
            }
        }

    }
}

/**
 * DescribeAddressTemplateGroups response structure.
 * @class
 */
class DescribeAddressTemplateGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of instances meeting the filter condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * IP address template.
         * @type {Array.<AddressTemplateGroup> || null}
         */
        this.AddressTemplateGroupSet = null;

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

        if (params.AddressTemplateGroupSet) {
            this.AddressTemplateGroupSet = new Array();
            for (let z in params.AddressTemplateGroupSet) {
                let obj = new AddressTemplateGroup();
                obj.deserialize(params.AddressTemplateGroupSet[z]);
                this.AddressTemplateGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetCcnRegionBandwidthLimits request structure.
 * @class
 */
class SetCcnRegionBandwidthLimitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The outbound bandwidth cap of each CCN region.
         * @type {Array.<CcnRegionBandwidthLimit> || null}
         */
        this.CcnRegionBandwidthLimits = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.CcnRegionBandwidthLimits) {
            this.CcnRegionBandwidthLimits = new Array();
            for (let z in params.CcnRegionBandwidthLimits) {
                let obj = new CcnRegionBandwidthLimit();
                obj.deserialize(params.CcnRegionBandwidthLimits[z]);
                this.CcnRegionBandwidthLimits.push(obj);
            }
        }

    }
}

/**
 * DetachClassicLinkVpc response structure.
 * @class
 */
class DetachClassicLinkVpcResponse extends  AbstractModel {
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
 * DescribeTaskResult request structure.
 * @class
 */
class DescribeTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The async job ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * The billing order ID
         * @type {string || null}
         */
        this.DealName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;

    }
}

/**
 * CreateDirectConnectGatewayCcnRoutes request structure.
 * @class
 */
class CreateDirectConnectGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the Direct Connect gateway, such as `dcg-prpqlmg1`
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * The list of IDC IP range that must be connected
         * @type {Array.<DirectConnectGatewayCcnRoute> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new DirectConnectGatewayCcnRoute();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * UnassignPrivateIpAddresses request structure.
 * @class
 */
class UnassignPrivateIpAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the ENI instance, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The information of the specified private IPs. You can specify a maximum of 10 each time.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

    }
}

/**
 * AssociateAddress response structure.
 * @class
 */
class AssociateAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The async task ID. You can use the [DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271) API to query the task status.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Filter
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * The attribute name. If more than one Filter exists, the logical relation between these Filters is `AND`.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The attribute value. If there are multiple Values for one Filter, the logical relation between these Values under the same Filter is `OR`.
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
 * CreateDirectConnectGatewayCcnRoutes response structure.
 * @class
 */
class CreateDirectConnectGatewayCcnRoutesResponse extends  AbstractModel {
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
 * ModifySubnetAttribute request structure.
 * @class
 */
class ModifySubnetAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet instance ID, such as `subnet-pxir56ns`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The subnet name. The maximum length is 60 bytes.
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * Whether the subnet has broadcast enabled.
         * @type {string || null}
         */
        this.EnableBroadcast = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;

    }
}

/**
 * CreateRouteTable request structure.
 * @class
 */
class CreateRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPC instance to be operated on. You can obtain the parameter value from the VpcId field in the returned result of DescribeVpcs API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The route table name. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * ModifyNetDetect response structure.
 * @class
 */
class ModifyNetDetectResponse extends  AbstractModel {
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
 * UnassignIpv6SubnetCidrBlock request structure.
 * @class
 */
class UnassignIpv6SubnetCidrBlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the VPC where the subnet is located, such as `vpc-f49l6u0z`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The `IPv6` subnet IP range list.
         * @type {Array.<Ipv6SubnetCidrBlock> || null}
         */
        this.Ipv6SubnetCidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Ipv6SubnetCidrBlocks) {
            this.Ipv6SubnetCidrBlocks = new Array();
            for (let z in params.Ipv6SubnetCidrBlocks) {
                let obj = new Ipv6SubnetCidrBlock();
                obj.deserialize(params.Ipv6SubnetCidrBlocks[z]);
                this.Ipv6SubnetCidrBlocks.push(obj);
            }
        }

    }
}

/**
 * CreateHaVip request structure.
 * @class
 */
class CreateHaVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the VPC to which the `HAVIP` belongs.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The `ID` of the subnet to which the `HAVIP` belongs.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The name of the `HAVIP`.
         * @type {string || null}
         */
        this.HaVipName = null;

        /**
         * The specified virtual IP address, which must be within the IP range of the `VPC` and not in use. It will be automatically assigned if not specified.
         * @type {string || null}
         */
        this.Vip = null;

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
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * DescribeAddresses request structure.
 * @class
 */
class DescribeAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The list of unique IDs of EIPs, such as `eip-11112222`. `AddressIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * The upper limit for `Filters` in each request is 10 and 5 for `Filter.Values`. `AddressIds` and `Filters` cannot be specified at the same time. Detailed filter conditions are as follows:
<li> address-id - String - Required: no - (Filter condition) The unique EIP ID, such as `eip-11112222`.</li>
<li> address-name - String - Required: no - (Filter condition) The EIP name. Fuzzy filtering is not supported.</li>
<li> address-ip - String - Required: no - (Filter condition) Filters by EIP.</li>
<li> address-status - String - Required: no - (Filter condition) The EIP state. Possible EIP states are: 'CREATING', 'BINDING', 'BIND', 'UNBINDING', 'UNBIND', 'OFFLINING', and 'BIND_ENI'.</li>
<li> instance-id - String - Required: no - (Filter condition) The ID of the instance bound to the EIP, such as `ins-11112222`.</li>
<li> private-ip-address - String - Required: no - (Filter condition) The private IP address bound to the EIP.</li>
<li> network-interface-id - String - Required: no - (Filter condition) The ID of the ENI bound to the EIP, such as `eni-11112222`.</li>
<li> is-arrears - String - Required: no - (Filter condition) Whether the EIP is in arrears. (TRUE: the EIP is in arrears | FALSE: the billing status of the EIP is normal)</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The Offset. The default value is 0. For more information on `Offset`, see the relevant sections in API [Overview](https://intl.cloud.tencent.com/document/product/11646).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. The default value is 20. The maximum is 100. For more information on `Limit`, see the relevant sections in API [Overview](https://intl.cloud.tencent.com/document/product/11646).
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
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

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
 * ResetRoutes request structure.
 * @class
 */
class ResetRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The route table instance ID, such as `rtb-azd4dt1c`.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * The route table name. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * Routing policy.
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * IPv6 subnet IP range object.
 * @class
 */
class Ipv6SubnetCidrBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the subnet instance, such as `subnet-pxir56ns`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The `IPv6` subnet IP range, such as `3402:4e00:20:1001::/64`
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

    }
}

/**
 * DescribeSecurityGroupPolicies request structure.
 * @class
 */
class DescribeSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group instance ID, such as `sg-33ocnj9n`. It can be obtained through DescribeSecurityGroups.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * MigrateNetworkInterface request structure.
 * @class
 */
class MigrateNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the ENI instance, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The ID of the CVM bound to the ENI, such as `ins-r8hr2upy`.
         * @type {string || null}
         */
        this.SourceInstanceId = null;

        /**
         * ID of the destination CVM instance to be migrated.
         * @type {string || null}
         */
        this.DestinationInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.SourceInstanceId = 'SourceInstanceId' in params ? params.SourceInstanceId : null;
        this.DestinationInstanceId = 'DestinationInstanceId' in params ? params.DestinationInstanceId : null;

    }
}

/**
 * AssignIpv6CidrBlock request structure.
 * @class
 */
class AssignIpv6CidrBlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the `VPC`, such as `vpc-f49l6u0z`.
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * CreateSecurityGroupPolicies response structure.
 * @class
 */
class CreateSecurityGroupPoliciesResponse extends  AbstractModel {
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
 * CreateSecurityGroup response structure.
 * @class
 */
class CreateSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group object.
         * @type {SecurityGroup || null}
         */
        this.SecurityGroup = null;

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

        if (params.SecurityGroup) {
            let obj = new SecurityGroup();
            obj.deserialize(params.SecurityGroup)
            this.SecurityGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSecurityGroup request structure.
 * @class
 */
class DeleteSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group instance ID, such as `sg-33ocnj9n`. This can be obtained through DescribeSecurityGroups.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * ModifyVpnConnectionAttribute request structure.
 * @class
 */
class ModifyVpnConnectionAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPN tunnel instance, such as `vpnx-f49l6u0z`.
         * @type {string || null}
         */
        this.VpnConnectionId = null;

        /**
         * VPN tunnel can be named freely, but the maximum length is 60 characters.
         * @type {string || null}
         */
        this.VpnConnectionName = null;

        /**
         * The pre-shared key.
         * @type {string || null}
         */
        this.PreShareKey = null;

        /**
         * The SPD policy group, for example: {"10.0.0.5/24":["172.123.10.5/16"]}. 10.0.0.5/24 is the VPC internal IP range, and 172.123.10.5/16 is the IDC IP range. The user specifies the IP range in the VPC that can communicate with the IP range in the IDC.
         * @type {Array.<SecurityPolicyDatabase> || null}
         */
        this.SecurityPolicyDatabases = null;

        /**
         * IKE (Internet Key Exchange) configuration. IKE comes with a self-protection mechanism. The network security protocol is configured by the user.
         * @type {IKEOptionsSpecification || null}
         */
        this.IKEOptionsSpecification = null;

        /**
         * IPSec configuration. The IPSec secure session configuration is provided by Tencent Cloud.
         * @type {IPSECOptionsSpecification || null}
         */
        this.IPSECOptionsSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.PreShareKey = 'PreShareKey' in params ? params.PreShareKey : null;

        if (params.SecurityPolicyDatabases) {
            this.SecurityPolicyDatabases = new Array();
            for (let z in params.SecurityPolicyDatabases) {
                let obj = new SecurityPolicyDatabase();
                obj.deserialize(params.SecurityPolicyDatabases[z]);
                this.SecurityPolicyDatabases.push(obj);
            }
        }

        if (params.IKEOptionsSpecification) {
            let obj = new IKEOptionsSpecification();
            obj.deserialize(params.IKEOptionsSpecification)
            this.IKEOptionsSpecification = obj;
        }

        if (params.IPSECOptionsSpecification) {
            let obj = new IPSECOptionsSpecification();
            obj.deserialize(params.IPSECOptionsSpecification)
            this.IPSECOptionsSpecification = obj;
        }

    }
}

/**
 * ReplaceRoutes request structure.
 * @class
 */
class ReplaceRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The route table instance ID, such as `rtb-azd4dt1c`.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Routing policy object. The routing policy ID (RouteId) must be specified.
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * CreateRouteTable response structure.
 * @class
 */
class CreateRouteTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Route table object.
         * @type {RouteTable || null}
         */
        this.RouteTable = null;

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

        if (params.RouteTable) {
            let obj = new RouteTable();
            obj.deserialize(params.RouteTable)
            this.RouteTable = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNetworkInterfaceLimit response structure.
 * @class
 */
class DescribeNetworkInterfaceLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ENI quota
         * @type {number || null}
         */
        this.EniQuantity = null;

        /**
         * The quota of IP addresses that can be allocated to each ENI.
         * @type {number || null}
         */
        this.EniPrivateIpAddressQuantity = null;

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
        this.EniQuantity = 'EniQuantity' in params ? params.EniQuantity : null;
        this.EniPrivateIpAddressQuantity = 'EniPrivateIpAddressQuantity' in params ? params.EniPrivateIpAddressQuantity : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRoutes response structure.
 * @class
 */
class DeleteRoutesResponse extends  AbstractModel {
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
 * AssignIpv6CidrBlock response structure.
 * @class
 */
class AssignIpv6CidrBlockResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The assigned `IPv6` IP range, such as `3402:4e00:20:1000::/56`
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

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
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCcn request structure.
 * @class
 */
class CreateCcnRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the CCN. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.CcnName = null;

        /**
         * The description of the CCN. The maximum length is 100 characters.
         * @type {string || null}
         */
        this.CcnDescription = null;

        /**
         * CCN service quality, 'PT': Platinum, 'AU': Gold, 'AG': Silver. The default is ‘AU’.
         * @type {string || null}
         */
        this.QosLevel = null;

        /**
         * The billing method. POSTPAID: postpaid by traffic. Default: POSTPAID.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * The bandwidth limit type. OUTER_REGION_LIMIT: regional outbound limit. INTER_REGION_LIMIT: inter-regional limit. Default: OUTER_REGION_LIMIT.
         * @type {string || null}
         */
        this.BandwidthLimitType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnName = 'CcnName' in params ? params.CcnName : null;
        this.CcnDescription = 'CcnDescription' in params ? params.CcnDescription : null;
        this.QosLevel = 'QosLevel' in params ? params.QosLevel : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.BandwidthLimitType = 'BandwidthLimitType' in params ? params.BandwidthLimitType : null;

    }
}

/**
 * DescribeSecurityGroupAssociationStatistics response structure.
 * @class
 */
class DescribeSecurityGroupAssociationStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistics on the instances associated with a security group.
         * @type {Array.<SecurityGroupAssociationStatistics> || null}
         */
        this.SecurityGroupAssociationStatisticsSet = null;

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

        if (params.SecurityGroupAssociationStatisticsSet) {
            this.SecurityGroupAssociationStatisticsSet = new Array();
            for (let z in params.SecurityGroupAssociationStatisticsSet) {
                let obj = new SecurityGroupAssociationStatistics();
                obj.deserialize(params.SecurityGroupAssociationStatisticsSet[z]);
                this.SecurityGroupAssociationStatisticsSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDirectConnectGatewayCcnRoutes response structure.
 * @class
 */
class DescribeDirectConnectGatewayCcnRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of objects meeting the condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The CCN route (IDC IP range) list.
         * @type {Array.<DirectConnectGatewayCcnRoute> || null}
         */
        this.RouteSet = null;

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

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new DirectConnectGatewayCcnRoute();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrivateIpAddressesAttribute request structure.
 * @class
 */
class ModifyPrivateIpAddressesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the ENI instance, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The specified private IP information.
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

    }
}

/**
 * ResetNatGatewayConnection response structure.
 * @class
 */
class ResetNatGatewayConnectionResponse extends  AbstractModel {
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
 * UnassignIpv6SubnetCidrBlock response structure.
 * @class
 */
class UnassignIpv6SubnetCidrBlockResponse extends  AbstractModel {
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
 * CreateNetDetect response structure.
 * @class
 */
class CreateNetDetectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The network detection (NetDetect) object.
         * @type {NetDetect || null}
         */
        this.NetDetect = null;

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

        if (params.NetDetect) {
            let obj = new NetDetect();
            obj.deserialize(params.NetDetect)
            this.NetDetect = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSecurityGroup request structure.
 * @class
 */
class CreateSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group can be named freely, but cannot exceed 60 characters.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The remarks for the security group. The maximum length is 100 characters.
         * @type {string || null}
         */
        this.GroupDescription = null;

        /**
         * The project id is 0 by default. You can query this in the project management page of the Qcloud console.
         * @type {string || null}
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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyCcnAttribute response structure.
 * @class
 */
class ModifyCcnAttributeResponse extends  AbstractModel {
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
 * DeleteCcn request structure.
 * @class
 */
class DeleteCcnRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

    }
}

/**
 * DescribeClassicLinkInstances request structure.
 * @class
 */
class DescribeClassicLinkInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions.
<li>vpc-id - String - (Filter condition) The VPC instance ID.</li>
<li>vm-ip - String - (Filter condition) The IP address of the CVM on the basic network.</li>
         * @type {Array.<FilterObject> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * The returned quantity
         * @type {string || null}
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
                let obj = new FilterObject();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateServiceTemplate response structure.
 * @class
 */
class CreateServiceTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol port template object.
         * @type {ServiceTemplate || null}
         */
        this.ServiceTemplate = null;

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

        if (params.ServiceTemplate) {
            let obj = new ServiceTemplate();
            obj.deserialize(params.ServiceTemplate)
            this.ServiceTemplate = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNetworkInterface response structure.
 * @class
 */
class DeleteNetworkInterfaceResponse extends  AbstractModel {
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
 * CreateNatGateway request structure.
 * @class
 */
class CreateNatGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT gateway name
         * @type {string || null}
         */
        this.NatGatewayName = null;

        /**
         * The ID of the VPC instance. You can obtain the parameter value from the VpcId field in the returned result of DescribeVpcs API.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The maximum outbound bandwidth of the NAT gateway (unit: Mbps). Supported parameter values: `20, 50, 100, 200, 500, 1000, 2000, 5000`. Default: `100Mbps`.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * The concurrent connection cap of the NAT gateway. Supported parameter values: `1000000, 3000000, 10000000`. The default value is `100000`.
         * @type {number || null}
         */
        this.MaxConcurrentConnection = null;

        /**
         * The number of EIPs that needs to be applied for. The system will create N number of EIPs according to your requirements. Either AddressCount or PublicAddresses must be passed in.
         * @type {number || null}
         */
        this.AddressCount = null;

        /**
         * The EIP array bound to the NAT gateway. Either AddressCount or PublicAddresses must be passed in.
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * The availability zone, such as `ap-guangzhou-1`.
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayName = 'NatGatewayName' in params ? params.NatGatewayName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.MaxConcurrentConnection = 'MaxConcurrentConnection' in params ? params.MaxConcurrentConnection : null;
        this.AddressCount = 'AddressCount' in params ? params.AddressCount : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DeleteNetDetect request structure.
 * @class
 */
class DeleteNetDetectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of a network detection instance, such as `netd-12345678`.
         * @type {string || null}
         */
        this.NetDetectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;

    }
}

/**
 * UnassignIpv6Addresses response structure.
 * @class
 */
class UnassignIpv6AddressesResponse extends  AbstractModel {
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
 * IPSec configuration. The IPSec secure session configuration is provided by Tencent Cloud.
 * @class
 */
class IPSECOptionsSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Encryption algorithm. Available values: '3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC', and 'NULL'. Default is AES-CBC-128.
         * @type {string || null}
         */
        this.EncryptAlgorithm = null;

        /**
         * Verification algorithm. Available value: 'MD5' and 'SHA1'. Default is:
         * @type {string || null}
         */
        this.IntegrityAlgorith = null;

        /**
         * IPsec SA lifetime (in sec). Value range: 180-604800
         * @type {number || null}
         */
        this.IPSECSaLifetimeSeconds = null;

        /**
         * PFS. Available value: 'NULL', 'DH-GROUP1', 'DH-GROUP2', 'DH-GROUP5', 'DH-GROUP14', and 'DH-GROUP24'. Default is NULL.
         * @type {string || null}
         */
        this.PfsDhGroup = null;

        /**
         * IPsec SA lifetime (in KB). Value range: 2560-604800
         * @type {number || null}
         */
        this.IPSECSaLifetimeTraffic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EncryptAlgorithm = 'EncryptAlgorithm' in params ? params.EncryptAlgorithm : null;
        this.IntegrityAlgorith = 'IntegrityAlgorith' in params ? params.IntegrityAlgorith : null;
        this.IPSECSaLifetimeSeconds = 'IPSECSaLifetimeSeconds' in params ? params.IPSECSaLifetimeSeconds : null;
        this.PfsDhGroup = 'PfsDhGroup' in params ? params.PfsDhGroup : null;
        this.IPSECSaLifetimeTraffic = 'IPSECSaLifetimeTraffic' in params ? params.IPSECSaLifetimeTraffic : null;

    }
}

/**
 * DescribeAccountAttributes response structure.
 * @class
 */
class DescribeAccountAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * User account attribute object
         * @type {Array.<AccountAttribute> || null}
         */
        this.AccountAttributeSet = null;

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

        if (params.AccountAttributeSet) {
            this.AccountAttributeSet = new Array();
            for (let z in params.AccountAttributeSet) {
                let obj = new AccountAttribute();
                obj.deserialize(params.AccountAttributeSet[z]);
                this.AccountAttributeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateVpnGateway request structure.
 * @class
 */
class InquiryPriceCreateVpnGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The public network bandwidth configuration. Available bandwidth specifications: 5, 10, 20, 50, and 100. Unit: Mbps.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * The VPN gateway billing mode. PREPAID: prepaid means monthly subscription. POSTPAID_BY_HOUR: postpaid means pay-as-you-go. Default: POSTPAID_BY_HOUR. If prepaid mode is specified, the `InstanceChargePrepaid` parameter must be entered.
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * Parameter settings for prepaid billing mode, also known as monthly subscription. This parameter can specify the purchase period and other attributes such as auto-renewal. This parameter is mandatory for prepaid instances.
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * VPC private IPv6 object.
 * @class
 */
class VpcIpv6Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC` private `IPv6` address
         * @type {string || null}
         */
        this.Ipv6Address = null;

        /**
         * The `IPv6` `CIDR` belonging to the subnet.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * `IPv6` type.
         * @type {string || null}
         */
        this.Ipv6AddressType = null;

        /**
         * `IPv6` application time.
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
        this.Ipv6Address = 'Ipv6Address' in params ? params.Ipv6Address : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Ipv6AddressType = 'Ipv6AddressType' in params ? params.Ipv6AddressType : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * UnassignIpv6Addresses request structure.
 * @class
 */
class UnassignIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the ENI instance, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The list of specified `IPv6` addresses. A maximum of 10 can be specified each time.
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }

    }
}

/**
 * DeleteVpnConnection request structure.
 * @class
 */
class DeleteVpnConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPN gateway instance.
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * The ID of the VPN tunnel instance, such as `vpnx-f49l6u0z`.
         * @type {string || null}
         */
        this.VpnConnectionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;

    }
}

/**
 * DescribeSecurityGroups request structure.
 * @class
 */
class DescribeSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group instance ID, such as `sg-33ocnj9n`. It can be obtained through `DescribeSecurityGroups`. Each request can have a maximum of 100 instances. `SecurityGroupIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Filter conditions. `SecurityGroupIds` and `Filters` cannot be specified at the same time.
<li>security-group-id - String - (Filter condition) The security group ID.</li>
<li>project-id - Integer - (Filter condition) The project ID.</li>
<li>security-group-name - String - (Filter condition) The security group name.</li>
<li>tag-key - String - Required: no - (Filter condition) Filters by tag key. For more information, see Example 2.</li>
<li> `tag:tag-key` - String - Required: no - (Filter condition) Filters by tag key pair. For this parameter, `tag-key` will be replaced with a specific tag key. For more information, see Example 3.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset.
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * The returned quantity.
         * @type {string || null}
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

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
 * DescribeNatGatewayDestinationIpPortTranslationNatRules request structure.
 * @class
 */
class DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT gateway ID.
         * @type {Array.<string> || null}
         */
        this.NatGatewayIds = null;

        /**
         * Filter conditions:
`NatGatewayIds` and `Filters` cannot be specified at the same time.
<li> nat-gateway-id, the NAT gateway ID, such as `nat-0yi4hekt`.</li>
<li> vpc-id, the VPC ID, such as `vpc-0yi4hekt`.</li>
<li> public-ip-address, the EIP, such as `139.199.232.238`.</li>
<li>public-port, the public network port.</li>
<li>private-ip-address, the private IP, such as `10.0.0.1`.</li>
<li>private-port, the private network port.</li>
<li>description, the rule description.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. The default value is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of values to be returned. The default value is 20. Maximum is 100.
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
        this.NatGatewayIds = 'NatGatewayIds' in params ? params.NatGatewayIds : null;

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
 * Customer gateway vendor information object.
 * @class
 */
class CustomerGatewayVendor extends  AbstractModel {
    constructor(){
        super();

        /**
         * Platform.
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Software version.
         * @type {string || null}
         */
        this.SoftwareVersion = null;

        /**
         * Vendor name.
         * @type {string || null}
         */
        this.VendorName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.SoftwareVersion = 'SoftwareVersion' in params ? params.SoftwareVersion : null;
        this.VendorName = 'VendorName' in params ? params.VendorName : null;

    }
}

/**
 * DescribeAddressTemplates request structure.
 * @class
 */
class DescribeAddressTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions.
<li>address-template-name - String - (Filter condition) IP address template name.</li>
<li>address-template-id - String - (Filter condition) IP address template instance ID, such as `ipm-mdunqeb6`.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. The default value is 0.
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * Number of values to be returned. The default value is 20. Maximum is 100.
         * @type {string || null}
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
 * ModifyCcnAttribute request structure.
 * @class
 */
class ModifyCcnAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The name of the CCN. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.CcnName = null;

        /**
         * The description of the CCN. The maximum length is 100 characters.
         * @type {string || null}
         */
        this.CcnDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CcnName = 'CcnName' in params ? params.CcnName : null;
        this.CcnDescription = 'CcnDescription' in params ? params.CcnDescription : null;

    }
}

/**
 * Security group policy set
 * @class
 */
class SecurityGroupPolicySet extends  AbstractModel {
    constructor(){
        super();

        /**
         * The version of the security group policy. The version number is automatically increased by one each time users update the security policy, to prevent the expiration of updated routing policies. Conflict is ignored if it is left empty.
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Outbound policy.
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.Egress = null;

        /**
         * Inbound policy.
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.Ingress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;

        if (params.Egress) {
            this.Egress = new Array();
            for (let z in params.Egress) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.Egress[z]);
                this.Egress.push(obj);
            }
        }

        if (params.Ingress) {
            this.Ingress = new Array();
            for (let z in params.Ingress) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.Ingress[z]);
                this.Ingress.push(obj);
            }
        }

    }
}

/**
 * ModifyAddressTemplateGroupAttribute response structure.
 * @class
 */
class ModifyAddressTemplateGroupAttributeResponse extends  AbstractModel {
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
 * DeleteSecurityGroupPolicies response structure.
 * @class
 */
class DeleteSecurityGroupPoliciesResponse extends  AbstractModel {
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
 * ModifyAddressAttribute request structure.
 * @class
 */
class ModifyAddressAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the EIP, such as `eip-11112222`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * The EIP name after modification. The maximum length is 20 characters.
         * @type {string || null}
         */
        this.AddressName = null;

        /**
         * Whether the set EIP is a direct connection EIP. TRUE: yes. FALSE: no. Note that this parameter is available only to users who have activated the EIP direct connection function.
         * @type {string || null}
         */
        this.EipDirectConnection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;
        this.EipDirectConnection = 'EipDirectConnection' in params ? params.EipDirectConnection : null;

    }
}

/**
 * ResetVpnGatewayInternetMaxBandwidth request structure.
 * @class
 */
class ResetVpnGatewayInternetMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the VPN gateway instance.
         * @type {string || null}
         */
        this.VpnGatewayId = null;

        /**
         * The public network bandwidth configuration. Available bandwidth specifications: 5, 10, 20, 50, and 100. Unit: Mbps.
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * DescribeVpnConnections response structure.
 * @class
 */
class DescribeVpnConnectionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of instances meeting the filter condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * VPN tunnel instance.
         * @type {Array.<VpnConnection> || null}
         */
        this.VpnConnectionSet = null;

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

        if (params.VpnConnectionSet) {
            this.VpnConnectionSet = new Array();
            for (let z in params.VpnConnectionSet) {
                let obj = new VpnConnection();
                obj.deserialize(params.VpnConnectionSet[z]);
                this.VpnConnectionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNatGatewayDestinationIpPortTranslationNatRule request structure.
 * @class
 */
class ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the NAT gateway, such as `nat-df45454`.
         * @type {string || null}
         */
        this.NatGatewayId = null;

        /**
         * The port forwarding rule of the source NAT gateway.
         * @type {DestinationIpPortTranslationNatRule || null}
         */
        this.SourceNatRule = null;

        /**
         * The port forwarding rule of the destination NAT gateway.
         * @type {DestinationIpPortTranslationNatRule || null}
         */
        this.DestinationNatRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NatGatewayId = 'NatGatewayId' in params ? params.NatGatewayId : null;

        if (params.SourceNatRule) {
            let obj = new DestinationIpPortTranslationNatRule();
            obj.deserialize(params.SourceNatRule)
            this.SourceNatRule = obj;
        }

        if (params.DestinationNatRule) {
            let obj = new DestinationIpPortTranslationNatRule();
            obj.deserialize(params.DestinationNatRule)
            this.DestinationNatRule = obj;
        }

    }
}

/**
 * RejectAttachCcnInstances request structure.
 * @class
 */
class RejectAttachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The list of instances whose association is rejected.
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * SecurityPolicyDatabase policy
 * @class
 */
class SecurityPolicyDatabase extends  AbstractModel {
    constructor(){
        super();

        /**
         * Local IP range
         * @type {string || null}
         */
        this.LocalCidrBlock = null;

        /**
         * Opposite IP range
         * @type {Array.<string> || null}
         */
        this.RemoteCidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalCidrBlock = 'LocalCidrBlock' in params ? params.LocalCidrBlock : null;
        this.RemoteCidrBlock = 'RemoteCidrBlock' in params ? params.RemoteCidrBlock : null;

    }
}

/**
 * DeleteVpnGateway response structure.
 * @class
 */
class DeleteVpnGatewayResponse extends  AbstractModel {
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
 * DescribeAddressTemplates response structure.
 * @class
 */
class DescribeAddressTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of instances meeting the filter condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * IP address template.
         * @type {Array.<AddressTemplate> || null}
         */
        this.AddressTemplateSet = null;

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

        if (params.AddressTemplateSet) {
            this.AddressTemplateSet = new Array();
            for (let z in params.AddressTemplateSet) {
                let obj = new AddressTemplate();
                obj.deserialize(params.AddressTemplateSet[z]);
                this.AddressTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHaVips request structure.
 * @class
 */
class DescribeHaVipsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique `ID` of the `HAVIP`, such as `havip-9o233uri`.
         * @type {Array.<string> || null}
         */
        this.HaVipIds = null;

        /**
         * Filter condition. `HaVipIds` and `Filters` cannot be specified at the same time.
<li>havip-id - String - The unique `ID` of the `HAVIP`, such as `havip-9o233uri`.</li>
<li>havip-name - String - `HAVIP` name.</li>
<li>vpc-id - String - The `ID` of the VPC where `HAVIP` is located.</li>
<li>subnet-id - String - The `ID` of the subnet where `HAVIP` is located.</li>
<li>address-ip - String - The `EIP` to which `HAVIP` is bound.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The returned quantity
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
        this.HaVipIds = 'HaVipIds' in params ? params.HaVipIds : null;

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
 * Quota description information
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quota name. Value range:<br><li>`TOTAL_EIP_QUOTA`:EIP quota under the user's current region<br><li>`DAILY_EIP_APPLY`: Number of EIP applications submitted daily under the user's current region<br><li>`DAILY_PUBLIC_IP_ASSIGN`: Number of public IP reassignments under the user's current region.
         * @type {string || null}
         */
        this.QuotaId = null;

        /**
         * Current count
         * @type {number || null}
         */
        this.QuotaCurrent = null;

        /**
         * Quota
         * @type {number || null}
         */
        this.QuotaLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuotaId = 'QuotaId' in params ? params.QuotaId : null;
        this.QuotaCurrent = 'QuotaCurrent' in params ? params.QuotaCurrent : null;
        this.QuotaLimit = 'QuotaLimit' in params ? params.QuotaLimit : null;

    }
}

/**
 * UnassignPrivateIpAddresses response structure.
 * @class
 */
class UnassignPrivateIpAddressesResponse extends  AbstractModel {
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
 * Detailed EIP information
 * @class
 */
class Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * `EIP` `ID`, the unique ID of the `EIP`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * The `EIP` name.
         * @type {string || null}
         */
        this.AddressName = null;

        /**
         * Possible `EIP` states are 'CREATING', 'BINDING', 'BIND', 'UNBINDING', 'UNBIND', 'OFFLINING', and 'BIND_ENI'.
         * @type {string || null}
         */
        this.AddressStatus = null;

        /**
         * The public IP address
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * The ID of the bound resource instance. This can be a `CVM` or `NAT`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The creation time, which follows the `ISO8601` standard and uses `UTC` time in the format of `YYYY-MM-DDThh:mm:ssZ`.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * The ID of the bound ENI
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The private IP of the bound resources
         * @type {string || null}
         */
        this.PrivateAddressIp = null;

        /**
         * The isolation status of the resource. `True` indicates the EIP is isolated. `False` indicates that the resource is not isolated.
         * @type {boolean || null}
         */
        this.IsArrears = null;

        /**
         * The block status of the resource. `True` indicates the EIP is blocked. `False` indicates that the EIP is not blocked.
         * @type {boolean || null}
         */
        this.IsBlocked = null;

        /**
         * Whether the EIP supports direct connection mode. `True` indicates the EIP supports direct connection. `False` indicates that the resource does not support direct connection.
         * @type {boolean || null}
         */
        this.IsEipDirectConnection = null;

        /**
         * The resource type of the EIP. This includes `CalcIP`, `WanIP`, `EIP`, and `AnycastEIP`. Among these, `CalcIP` indicates the device IP, `WanIP` indicates the common public IP, `EIP` indicates Elastic IP, and `AnycastEip` indicates accelerated EIP.
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * Whether the EIP is automatically released after being unbound. `True` indicates the EIP will be automatically released after being unbound. `False` indicates the EIP will not be automatically released after being unbound.
         * @type {boolean || null}
         */
        this.CascadeRelease = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;
        this.AddressStatus = 'AddressStatus' in params ? params.AddressStatus : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateAddressIp = 'PrivateAddressIp' in params ? params.PrivateAddressIp : null;
        this.IsArrears = 'IsArrears' in params ? params.IsArrears : null;
        this.IsBlocked = 'IsBlocked' in params ? params.IsBlocked : null;
        this.IsEipDirectConnection = 'IsEipDirectConnection' in params ? params.IsEipDirectConnection : null;
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.CascadeRelease = 'CascadeRelease' in params ? params.CascadeRelease : null;

    }
}

/**
 * ModifyVpnGatewayAttribute response structure.
 * @class
 */
class ModifyVpnGatewayAttributeResponse extends  AbstractModel {
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
 * DeleteAddressTemplate response structure.
 * @class
 */
class DeleteAddressTemplateResponse extends  AbstractModel {
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
 * DescribeVpnConnections request structure.
 * @class
 */
class DescribeVpnConnectionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The instance ID of the VPN tunnel, such as `vpnx-f49l6u0z`. Each request can have a maximum of 100 instances. `VpnConnectionIds` and `Filters` cannot be specified at the same time.
         * @type {Array.<string> || null}
         */
        this.VpnConnectionIds = null;

        /**
         * The filter condition. For details, see the Instance Filter Conditions Table. The upper limit for `Filters` in each request is 10 and 5 for `Filter.Values`. `VpnConnectionIds` and `Filters` cannot be specified at the same time.
<li>vpc-id - String - The VPC instance ID, such as `vpc-0a36uwkr`.</li>
<li>vpn-gateway-id - String - The VPN gateway instance ID, such as `vpngw-p4lmqawn`.</li>
<li>customer-gateway-id - String - The customer gateway instance ID, such as `cgw-l4rblw63`.</li>
<li>vpn-connection-name - String - The connection name, such as `test-vpn`.</li>
<li>vpn-connection-id - String - The connection instance ID, such as `vpnx-5p7vkch8"`.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The Offset. The default value is 0. For more information about Offset, see the relevant section in the API Introduction.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of values to be returned. The default value is 20. Maximum is 100.
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
        this.VpnConnectionIds = 'VpnConnectionIds' in params ? params.VpnConnectionIds : null;

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
 * ModifyAddressesBandwidth request structure.
 * @class
 */
class ModifyAddressesBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the EIP, such as 'eip-xxxx'.
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * Target bandwidth value adjustment
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * The monthly bandwidth start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The monthly bandwidth end time
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
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DeleteHaVip request structure.
 * @class
 */
class DeleteHaVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique `ID` of the `HAVIP`, such as `havip-9o233uri`.
         * @type {string || null}
         */
        this.HaVipId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;

    }
}

/**
 * ModifySubnetAttribute response structure.
 * @class
 */
class ModifySubnetAttributeResponse extends  AbstractModel {
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
 * DescribeServiceTemplateGroups request structure.
 * @class
 */
class DescribeServiceTemplateGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions.
<li>service-template-group-name - String - (Filter condition) Protocol port template group name.</li>
<li>service-template-group-id - String - (Filter condition) Protocol port template group instance ID, such as `ppmg-e6dy460g`.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset. The default value is 0.
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * Number of values to be returned. The default value is 20. Maximum is 100.
         * @type {string || null}
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
 * UnassignIpv6CidrBlock response structure.
 * @class
 */
class UnassignIpv6CidrBlockResponse extends  AbstractModel {
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
 * ReleaseAddresses request structure.
 * @class
 */
class ReleaseAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID list of the EIP. The unique ID of an EIP is as follows: `eip-11112222`.
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

    }
}

/**
 * CreateVpc request structure.
 * @class
 */
class CreateVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The VPC name. The maximum length is 60 bytes.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VPC CIDR, which must fall within the following private network IP ranges: 10.0.0.0/16, 172.16.0.0/16, and 192.168.0.0/16.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Whether multicast is enabled. `true`: Enabled. `false`: Not enabled.
         * @type {string || null}
         */
        this.EnableMulticast = null;

        /**
         * The DNS address. A maximum of 4 addresses is supported.
         * @type {Array.<string> || null}
         */
        this.DnsServers = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.DnsServers = 'DnsServers' in params ? params.DnsServers : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * ReplaceDirectConnectGatewayCcnRoutes response structure.
 * @class
 */
class ReplaceDirectConnectGatewayCcnRoutesResponse extends  AbstractModel {
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
 * CreateServiceTemplateGroup request structure.
 * @class
 */
class CreateServiceTemplateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group name of the protocol port template.
         * @type {string || null}
         */
        this.ServiceTemplateGroupName = null;

        /**
         * Instance ID of the protocol port template, such as `ppm-4dw6agho`.
         * @type {Array.<string> || null}
         */
        this.ServiceTemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateGroupName = 'ServiceTemplateGroupName' in params ? params.ServiceTemplateGroupName : null;
        this.ServiceTemplateIds = 'ServiceTemplateIds' in params ? params.ServiceTemplateIds : null;

    }
}

/**
 * DeleteServiceTemplate request structure.
 * @class
 */
class DeleteServiceTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol port template instance ID, such as `ppm-e6dy460g`.
         * @type {string || null}
         */
        this.ServiceTemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateId = 'ServiceTemplateId' in params ? params.ServiceTemplateId : null;

    }
}

/**
 * DescribeSecurityGroupAssociationStatistics request structure.
 * @class
 */
class DescribeSecurityGroupAssociationStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Security instance ID, such as `sg-33ocnj9n`. It can be obtained through DescribeSecurityGroups.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeDirectConnectGatewayCcnRoutes request structure.
 * @class
 */
class DescribeDirectConnectGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the Direct Connect gateway, such as `dcg-prpqlmg1`.
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * The route learning type of the CCN. Available values:
<li>`BGP` - Automatic learning.</li>
<li>`STATIC` - Static means user-configured. This is the default value.</li>
         * @type {string || null}
         */
        this.CcnRouteType = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The returned quantity.
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
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.CcnRouteType = 'CcnRouteType' in params ? params.CcnRouteType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeClassicLinkInstances response structure.
 * @class
 */
class DescribeClassicLinkInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of instances meeting the filter condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Classiclink instance.
         * @type {Array.<ClassicLinkInstance> || null}
         */
        this.ClassicLinkInstanceSet = null;

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

        if (params.ClassicLinkInstanceSet) {
            this.ClassicLinkInstanceSet = new Array();
            for (let z in params.ClassicLinkInstanceSet) {
                let obj = new ClassicLinkInstance();
                obj.deserialize(params.ClassicLinkInstanceSet[z]);
                this.ClassicLinkInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAddressTemplate request structure.
 * @class
 */
class DeleteAddressTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IP address template instance ID, such as `ipm-09o5m8kc`.
         * @type {string || null}
         */
        this.AddressTemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateId = 'AddressTemplateId' in params ? params.AddressTemplateId : null;

    }
}

/**
 * DeleteServiceTemplateGroup response structure.
 * @class
 */
class DeleteServiceTemplateGroupResponse extends  AbstractModel {
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
 * AllocateAddresses response structure.
 * @class
 */
class AllocateAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the unique IDs of the requested EIPs.
         * @type {Array.<string> || null}
         */
        this.AddressSet = null;

        /**
         * The Async task ID. You can use the [DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271) API to query the task status.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.AddressSet = 'AddressSet' in params ? params.AddressSet : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransformAddress request structure.
 * @class
 */
class TransformAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the instance with a common public IP to be operated on, such as `ins-11112222`. You can query the instance ID by logging into the [Console](https://console.cloud.tencent.com/cvm). You can also obtain the parameter value from the `InstanceId` field in the returned result of [DescribeInstances](https://cloud.tencent.com/document/api/213/9389) API.
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
 * ReplaceDirectConnectGatewayCcnRoutes request structure.
 * @class
 */
class ReplaceDirectConnectGatewayCcnRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the Direct Connect gateway, such as `dcg-prpqlmg1`
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * The list of IDC IP range that must be connected
         * @type {Array.<DirectConnectGatewayCcnRoute> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new DirectConnectGatewayCcnRoute();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * DescribeVpcPrivateIpAddresses request structure.
 * @class
 */
class DescribeVpcPrivateIpAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The `ID` of the `VPC`, such as `vpc-f49l6u0z`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * The private `IP` address list. Each request supports a maximum of `10` batch querying.
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;

    }
}

/**
 * DisassociateAddress request structure.
 * @class
 */
class DisassociateAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the EIP, such as `eip-11112222`.
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * Whether a common public IP is assigned after the EIP is unbound. Value range:<br><li>TRUE: Indicates that after the EIP is unbound, a common public IP is assigned.<br><li>FALSE: Indicates that after the EIP is unbound, a common public IP is not assigned.<br>Default value: FALSE.<br><br>The parameter can be specified only under the following conditions:<br><li>It can only be specified when you unbind an EIP from the primary private IP of the primary ENI.<br><li>After an EIP is unbound, you can assign public IPs to an account up to 10 times per day. For more information, use the [DescribeAddressQuota] (https://cloud.tencent.com/document/api/213/1378) API.
         * @type {boolean || null}
         */
        this.ReallocateNormalPublicIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.ReallocateNormalPublicIp = 'ReallocateNormalPublicIp' in params ? params.ReallocateNormalPublicIp : null;

    }
}

/**
 * ReplaceRouteTableAssociation request structure.
 * @class
 */
class ReplaceRouteTableAssociationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet instance ID, such as `subnet-3x5lf5q0`. This can be queried using the DescribeSubnets API.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * The route table instance ID, such as `rtb-azd4dt1c`.
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * AttachNetworkInterface request structure.
 * @class
 */
class AttachNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the ENI instance, such as `eni-m6dyj72l`.
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * The ID of the CVM instance, such as `ins-r8hr2upy`.
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
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyVpcAttribute request structure.
 * @class
 */
class ModifyVpcAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group can be named freely, but cannot exceed 60 characters.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC can be named freely, but the maximum length is 60 characters.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Whether multicast is enabled. `true`: Enabled. `false`: Off.
         * @type {string || null}
         */
        this.EnableMulticast = null;

        /**
         * DNS address. A maximum of 4 addresses is supported. The first one is master server by default, and the rest are slave servers.
         * @type {Array.<string> || null}
         */
        this.DnsServers = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.DnsServers = 'DnsServers' in params ? params.DnsServers : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

    }
}

/**
 * DetachCcnInstances request structure.
 * @class
 */
class DetachCcnInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CCN instance ID, such as `ccn-f49l6u0z`.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The list of network instances to be unbound
         * @type {Array.<CcnInstance> || null}
         */
        this.Instances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new CcnInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

    }
}

/**
 * CreateSecurityGroupPolicies request structure.
 * @class
 */
class CreateSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group instance ID, such as `sg-33ocnj9n`. This can be obtained through DescribeSecurityGroups.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group policy set.
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * CreateNatGateway response structure.
 * @class
 */
class CreateNatGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * NAT gateway object array.
         * @type {Array.<NatGateway> || null}
         */
        this.NatGatewaySet = null;

        /**
         * The number of NAT gateway objects meeting the conditions.
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

        if (params.NatGatewaySet) {
            this.NatGatewaySet = new Array();
            for (let z in params.NatGatewaySet) {
                let obj = new NatGateway();
                obj.deserialize(params.NatGatewaySet[z]);
                this.NatGatewaySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Internet Key Exchange (IKE) configuration. IKE has a self-protection mechanism. The network security protocol is configured by the user.
 * @class
 */
class IKEOptionsSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Encryption algorithm. Available values: '3DES-CBC', 'AES-CBC-128', 'AES-CBS-192', 'AES-CBC-256', and 'DES-CBC'. Default is 3DES-CBC.
         * @type {string || null}
         */
        this.PropoEncryAlgorithm = null;

        /**
         * Verification algorithm. Available value: 'MD5' and 'SHA1'. Default is MD5.
         * @type {string || null}
         */
        this.PropoAuthenAlgorithm = null;

        /**
         * Negotiation mode. Available values: 'AGGRESSIVE' and 'MAIN'. Default is MAIN.
         * @type {string || null}
         */
        this.ExchangeMode = null;

        /**
         * Type of local identity. Available values: 'ADDRESS' and 'FQDN'. Default is ADDRESS.
         * @type {string || null}
         */
        this.LocalIdentity = null;

        /**
         * Type of remote identity. Available values: 'ADDRESS' and 'FQDN'. Default is ADDRESS.
         * @type {string || null}
         */
        this.RemoteIdentity = null;

        /**
         * Local identity. When ADDRESS is selected for LocalIdentity, LocalAddress is required. The default LocalAddress is the public IP of the VPN gateway.
         * @type {string || null}
         */
        this.LocalAddress = null;

        /**
         * Remote identity. When ADDRESS is selected for RemoteIdentity, RemoteAddress is required.
         * @type {string || null}
         */
        this.RemoteAddress = null;

        /**
         * Local identity. When FQDN is selected for LocalIdentity, LocalFqdnName is required.
         * @type {string || null}
         */
        this.LocalFqdnName = null;

        /**
         * Remote identity. When FQDN is selected for RemoteIdentity, RemoteFqdnName is required.
         * @type {string || null}
         */
        this.RemoteFqdnName = null;

        /**
         * DH group. Specify the DH group used for exchanging the key via IKE. Available values: 'GROUP1', 'GROUP2', 'GROUP5', 'GROUP14', and 'GROUP24'.
         * @type {string || null}
         */
        this.DhGroupName = null;

        /**
         * IKE SA lifetime (in sec). Value range: 60-604800
         * @type {number || null}
         */
        this.IKESaLifetimeSeconds = null;

        /**
         * IKE version
         * @type {string || null}
         */
        this.IKEVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PropoEncryAlgorithm = 'PropoEncryAlgorithm' in params ? params.PropoEncryAlgorithm : null;
        this.PropoAuthenAlgorithm = 'PropoAuthenAlgorithm' in params ? params.PropoAuthenAlgorithm : null;
        this.ExchangeMode = 'ExchangeMode' in params ? params.ExchangeMode : null;
        this.LocalIdentity = 'LocalIdentity' in params ? params.LocalIdentity : null;
        this.RemoteIdentity = 'RemoteIdentity' in params ? params.RemoteIdentity : null;
        this.LocalAddress = 'LocalAddress' in params ? params.LocalAddress : null;
        this.RemoteAddress = 'RemoteAddress' in params ? params.RemoteAddress : null;
        this.LocalFqdnName = 'LocalFqdnName' in params ? params.LocalFqdnName : null;
        this.RemoteFqdnName = 'RemoteFqdnName' in params ? params.RemoteFqdnName : null;
        this.DhGroupName = 'DhGroupName' in params ? params.DhGroupName : null;
        this.IKESaLifetimeSeconds = 'IKESaLifetimeSeconds' in params ? params.IKESaLifetimeSeconds : null;
        this.IKEVersion = 'IKEVersion' in params ? params.IKEVersion : null;

    }
}

/**
 * MigrateNetworkInterface response structure.
 * @class
 */
class MigrateNetworkInterfaceResponse extends  AbstractModel {
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
 * DescribeVpcs response structure.
 * @class
 */
class DescribeVpcsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of objects meeting the condition.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The VPC object.
         * @type {Array.<Vpc> || null}
         */
        this.VpcSet = null;

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

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new Vpc();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VPC private IP object.
 * @class
 */
class VpcPrivateIpAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * `VPC` private `IP`.
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * The `CIDR` belonging to the subnet.
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * Private `IP` type.
         * @type {string || null}
         */
        this.PrivateIpAddressType = null;

        /**
         * `IP` application time.
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
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.PrivateIpAddressType = 'PrivateIpAddressType' in params ? params.PrivateIpAddressType : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * ModifyAddressTemplateAttribute request structure.
 * @class
 */
class ModifyAddressTemplateAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address template instance ID, such as `ipm-mdunqeb6`.
         * @type {string || null}
         */
        this.AddressTemplateId = null;

        /**
         * IP address template name.
         * @type {string || null}
         */
        this.AddressTemplateName = null;

        /**
         * Address information, including IP, CIDR and IP address range.
         * @type {Array.<string> || null}
         */
        this.Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressTemplateId = 'AddressTemplateId' in params ? params.AddressTemplateId : null;
        this.AddressTemplateName = 'AddressTemplateName' in params ? params.AddressTemplateName : null;
        this.Addresses = 'Addresses' in params ? params.Addresses : null;

    }
}

/**
 * ModifySecurityGroupAttribute request structure.
 * @class
 */
class ModifySecurityGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group instance ID, such as `sg-33ocnj9n`. This can be obtained through DescribeSecurityGroups.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group can be named freely, but cannot exceed 60 characters.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The remarks for the security group. The maximum length is 100 characters.
         * @type {string || null}
         */
        this.GroupDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;

    }
}

/**
 * CreateAddressTemplateGroup response structure.
 * @class
 */
class CreateAddressTemplateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group object of the IP address template.
         * @type {AddressTemplateGroup || null}
         */
        this.AddressTemplateGroup = null;

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

        if (params.AddressTemplateGroup) {
            let obj = new AddressTemplateGroup();
            obj.deserialize(params.AddressTemplateGroup)
            this.AddressTemplateGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The instance object associated with a CCN
 * @class
 */
class CcnAttachedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of a CCN instance.
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * The type of associated instances:
<li>`VPC`: VPC</li>
<li>`DIRECTCONNECT`: Direct Connect</li>
<li>`BMVPC`: BM VPC</li>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * The ID of the associated instance.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The name of the associated instance.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * The region to which the associated instance belongs, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.InstanceRegion = null;

        /**
         * The UIN (root account) to which the associated instance belongs.
         * @type {string || null}
         */
        this.InstanceUin = null;

        /**
         * The CIDR of the associated instance.
         * @type {Array.<string> || null}
         */
        this.CidrBlock = null;

        /**
         * The status of the associated instance:
<li>`PENDING`: In application</li>
<li>`ACTIVE`: Connected</li>
<li>`EXPIRED`: Expired</li>
<li>`REJECTED`: Rejected</li>
<li>`DELETED`: Deleted</li>
<li>`FAILED`: Failed (it will be asynchronously unbound after 2 hours)</li>
<li>`ATTACHING`: binding</li>
<li>`DETACHING`: Unbinding</li>
<li>`DETACHFAILED`: The unbinding failed (it will be asynchronously unbound after 2 hours)</li>
         * @type {string || null}
         */
        this.State = null;

        /**
         * Association Time.
         * @type {string || null}
         */
        this.AttachedTime = null;

        /**
         * The UIN (root account) to which the CCN belongs.
         * @type {string || null}
         */
        this.CcnUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceRegion = 'InstanceRegion' in params ? params.InstanceRegion : null;
        this.InstanceUin = 'InstanceUin' in params ? params.InstanceUin : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.State = 'State' in params ? params.State : null;
        this.AttachedTime = 'AttachedTime' in params ? params.AttachedTime : null;
        this.CcnUin = 'CcnUin' in params ? params.CcnUin : null;

    }
}

/**
 * ModifyNetDetect request structure.
 * @class
 */
class ModifyNetDetectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of a network detection instance, such as `netd-12345678`.
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * The name of a network detection instance. The maximum length is 60 characters.
         * @type {string || null}
         */
        this.NetDetectName = null;

        /**
         * The array of detection destination IPv4 addresses, which contains at most two IP addresses.
         * @type {Array.<string> || null}
         */
        this.DetectDestinationIp = null;

        /**
         * The type of the next hop. Currently supported types are:
VPN: VPN gateway;
DIRECTCONNECT: direct connect gateway;
PEERCONNECTION: peering connection;
NAT: NAT gateway;
NORMAL_CVM: normal CVM.
         * @type {string || null}
         */
        this.NextHopType = null;

        /**
         * The next-hop destination gateway. The value is related to NextHopType.
If NextHopType is set to VPN, the value of this parameter is the VPN gateway ID, such as vpngw-12345678.
If NextHopType is set to DIRECTCONNECT, the value of this parameter is the direct connect gateway ID, such as dcg-12345678.
If NextHopType is set to PEERCONNECTION, the value of this parameter is the peering connection ID, such as pcx-12345678.
If NextHopType is set to NAT, the value of this parameter is the NAT gateway ID, such as nat-12345678.
If NextHopType is set to NORMAL_CVM, the value of this parameter is the IPv4 address of the CVM, such as 10.0.0.12.
         * @type {string || null}
         */
        this.NextHopDestination = null;

        /**
         * Network detection description.
         * @type {string || null}
         */
        this.NetDetectDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.NetDetectName = 'NetDetectName' in params ? params.NetDetectName : null;
        this.DetectDestinationIp = 'DetectDestinationIp' in params ? params.DetectDestinationIp : null;
        this.NextHopType = 'NextHopType' in params ? params.NextHopType : null;
        this.NextHopDestination = 'NextHopDestination' in params ? params.NextHopDestination : null;
        this.NetDetectDescription = 'NetDetectDescription' in params ? params.NetDetectDescription : null;

    }
}

/**
 * ModifyRouteTableAttribute request structure.
 * @class
 */
class ModifyRouteTableAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The route table instance ID, such as `rtb-azd4dt1c`.
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * Route table name.
         * @type {string || null}
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * AcceptAttachCcnInstances response structure.
 * @class
 */
class AcceptAttachCcnInstancesResponse extends  AbstractModel {
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
 * DeleteServiceTemplateGroup request structure.
 * @class
 */
class DeleteServiceTemplateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The protocol port template group instance ID, such as `ppmg-n17uxvve`.
         * @type {string || null}
         */
        this.ServiceTemplateGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceTemplateGroupId = 'ServiceTemplateGroupId' in params ? params.ServiceTemplateGroupId : null;

    }
}

/**
 * DescribeNetDetectStates request structure.
 * @class
 */
class DescribeNetDetectStatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The array of network detection instance `IDs`, such as [`netd-12345678`].
         * @type {Array.<string> || null}
         */
        this.NetDetectIds = null;

        /**
         * Filter conditions. `NetDetectIds` and `Filters` cannot be specified at the same time.
<li>net-detect-id - String - (Filter condition) The network detection instance ID, such as netd-12345678.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * The offset. Default: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of returned values. Default: 20. Maximum: 100.
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
        this.NetDetectIds = 'NetDetectIds' in params ? params.NetDetectIds : null;

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
 * DeleteNatGateway response structure.
 * @class
 */
class DeleteNatGatewayResponse extends  AbstractModel {
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
 * Prepaid (monthly subscription) billing object.
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchased usage period (in month). Value range: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36].
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Auto-renewal ID. Value range: NOTIFY_AND_AUTO_RENEW: notify expiry and renew automatically, NOTIFY_AND_MANUAL_RENEW: notify expiry but do not renew automatically. The default is NOTIFY_AND_MANUAL_RENEW
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
 * Price
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

/**
 * DescribeNetDetects response structure.
 * @class
 */
class DescribeNetDetectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The array of network detection objects that meet requirements.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<NetDetect> || null}
         */
        this.NetDetectSet = null;

        /**
         * The number of network detection objects that meet requirements.
Note: This field may return null, indicating that no valid values can be obtained.
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

        if (params.NetDetectSet) {
            this.NetDetectSet = new Array();
            for (let z in params.NetDetectSet) {
                let obj = new NetDetect();
                obj.deserialize(params.NetDetectSet[z]);
                this.NetDetectSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DeleteDirectConnectGatewayCcnRoutesResponse: DeleteDirectConnectGatewayCcnRoutesResponse,
    HaVipDisassociateAddressIpRequest: HaVipDisassociateAddressIpRequest,
    DescribeTaskResultResponse: DescribeTaskResultResponse,
    Ipv6Address: Ipv6Address,
    Subnet: Subnet,
    ModifyAddressTemplateGroupAttributeRequest: ModifyAddressTemplateGroupAttributeRequest,
    ModifyVpnGatewayAttributeRequest: ModifyVpnGatewayAttributeRequest,
    ModifyAddressTemplateAttributeResponse: ModifyAddressTemplateAttributeResponse,
    ServiceTemplateGroup: ServiceTemplateGroup,
    CreateNetworkInterfaceRequest: CreateNetworkInterfaceRequest,
    InstanceStatistic: InstanceStatistic,
    UnassignIpv6CidrBlockRequest: UnassignIpv6CidrBlockRequest,
    CreateRoutesRequest: CreateRoutesRequest,
    CCN: CCN,
    CreateVpnConnectionRequest: CreateVpnConnectionRequest,
    CcnRoute: CcnRoute,
    DeleteServiceTemplateResponse: DeleteServiceTemplateResponse,
    ServiceTemplate: ServiceTemplate,
    CreateServiceTemplateRequest: CreateServiceTemplateRequest,
    DeleteHaVipResponse: DeleteHaVipResponse,
    VpnConnection: VpnConnection,
    RejectAttachCcnInstancesResponse: RejectAttachCcnInstancesResponse,
    DescribeCcnAttachedInstancesRequest: DescribeCcnAttachedInstancesRequest,
    DescribeCcnsRequest: DescribeCcnsRequest,
    ModifyNatGatewayAttributeResponse: ModifyNatGatewayAttributeResponse,
    DescribeNetDetectsRequest: DescribeNetDetectsRequest,
    CreateAddressTemplateGroupRequest: CreateAddressTemplateGroupRequest,
    DescribeSubnetsRequest: DescribeSubnetsRequest,
    CreateSubnetRequest: CreateSubnetRequest,
    AddressTemplateGroup: AddressTemplateGroup,
    DownloadCustomerGatewayConfigurationRequest: DownloadCustomerGatewayConfigurationRequest,
    DestinationIpPortTranslationNatRule: DestinationIpPortTranslationNatRule,
    HaVip: HaVip,
    CreateDefaultVpcRequest: CreateDefaultVpcRequest,
    DeleteSubnetResponse: DeleteSubnetResponse,
    ModifyAddressesBandwidthResponse: ModifyAddressesBandwidthResponse,
    DescribeAddressQuotaResponse: DescribeAddressQuotaResponse,
    Vpc: Vpc,
    CreateVpnGatewayResponse: CreateVpnGatewayResponse,
    DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse: DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse,
    ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse: ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse,
    DescribeVpcIpv6AddressesResponse: DescribeVpcIpv6AddressesResponse,
    DescribeAccountAttributesRequest: DescribeAccountAttributesRequest,
    ModifyServiceTemplateGroupAttributeRequest: ModifyServiceTemplateGroupAttributeRequest,
    ModifyRouteTableAttributeResponse: ModifyRouteTableAttributeResponse,
    DescribeVpnGatewaysResponse: DescribeVpnGatewaysResponse,
    EnableCcnRoutesResponse: EnableCcnRoutesResponse,
    CcnRegionBandwidthLimit: CcnRegionBandwidthLimit,
    DescribeCcnRoutesRequest: DescribeCcnRoutesRequest,
    ModifyServiceTemplateAttributeRequest: ModifyServiceTemplateAttributeRequest,
    DescribeServiceTemplateGroupsResponse: DescribeServiceTemplateGroupsResponse,
    DetachCcnInstancesResponse: DetachCcnInstancesResponse,
    ReplaceSecurityGroupPolicyRequest: ReplaceSecurityGroupPolicyRequest,
    ModifyServiceTemplateGroupAttributeResponse: ModifyServiceTemplateGroupAttributeResponse,
    VpnGateway: VpnGateway,
    SecurityGroupPolicy: SecurityGroupPolicy,
    DownloadCustomerGatewayConfigurationResponse: DownloadCustomerGatewayConfigurationResponse,
    DeleteSubnetRequest: DeleteSubnetRequest,
    DescribeAddressTemplateGroupsRequest: DescribeAddressTemplateGroupsRequest,
    CheckNetDetectStateResponse: CheckNetDetectStateResponse,
    ResetAttachCcnInstancesResponse: ResetAttachCcnInstancesResponse,
    DeleteNetDetectResponse: DeleteNetDetectResponse,
    AllocateAddressesRequest: AllocateAddressesRequest,
    NatGatewayAddress: NatGatewayAddress,
    RouteTable: RouteTable,
    DeleteNetworkInterfaceRequest: DeleteNetworkInterfaceRequest,
    DetachClassicLinkVpcRequest: DetachClassicLinkVpcRequest,
    DeleteAddressTemplateGroupResponse: DeleteAddressTemplateGroupResponse,
    ReplaceRoutesResponse: ReplaceRoutesResponse,
    Tag: Tag,
    DirectConnectGatewayCcnRoute: DirectConnectGatewayCcnRoute,
    DeleteVpcRequest: DeleteVpcRequest,
    DisassociateNatGatewayAddressResponse: DisassociateNatGatewayAddressResponse,
    ModifyServiceTemplateAttributeResponse: ModifyServiceTemplateAttributeResponse,
    DescribeCcnsResponse: DescribeCcnsResponse,
    MigratePrivateIpAddressRequest: MigratePrivateIpAddressRequest,
    DescribeServiceTemplatesRequest: DescribeServiceTemplatesRequest,
    DescribeHaVipsResponse: DescribeHaVipsResponse,
    DeleteRouteTableRequest: DeleteRouteTableRequest,
    CreateSubnetResponse: CreateSubnetResponse,
    ModifyVpnConnectionAttributeResponse: ModifyVpnConnectionAttributeResponse,
    DescribeSecurityGroupPoliciesResponse: DescribeSecurityGroupPoliciesResponse,
    AssignIpv6SubnetCidrBlockRequest: AssignIpv6SubnetCidrBlockRequest,
    ModifySecurityGroupPoliciesRequest: ModifySecurityGroupPoliciesRequest,
    ModifyAddressAttributeResponse: ModifyAddressAttributeResponse,
    AttachClassicLinkVpcRequest: AttachClassicLinkVpcRequest,
    GatewayFlowMonitorDetail: GatewayFlowMonitorDetail,
    NetDetect: NetDetect,
    ResetVpnConnectionResponse: ResetVpnConnectionResponse,
    NatGateway: NatGateway,
    CreateVpcResponse: CreateVpcResponse,
    AssistantCidr: AssistantCidr,
    SetCcnRegionBandwidthLimitsResponse: SetCcnRegionBandwidthLimitsResponse,
    NetworkInterface: NetworkInterface,
    DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse: DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse,
    DeleteVpnGatewayRequest: DeleteVpnGatewayRequest,
    ReplaceRouteTableAssociationResponse: ReplaceRouteTableAssociationResponse,
    NetDetectState: NetDetectState,
    ModifyHaVipAttributeRequest: ModifyHaVipAttributeRequest,
    AttachCcnInstancesRequest: AttachCcnInstancesRequest,
    ReleaseAddressesResponse: ReleaseAddressesResponse,
    AddressTemplate: AddressTemplate,
    CcnInstance: CcnInstance,
    DeleteSecurityGroupPoliciesRequest: DeleteSecurityGroupPoliciesRequest,
    ResetVpnConnectionRequest: ResetVpnConnectionRequest,
    VpnGatewayQuota: VpnGatewayQuota,
    ItemPrice: ItemPrice,
    DeleteNatGatewayRequest: DeleteNatGatewayRequest,
    DeleteVpnConnectionResponse: DeleteVpnConnectionResponse,
    ReplaceSecurityGroupPolicyResponse: ReplaceSecurityGroupPolicyResponse,
    ModifyPrivateIpAddressesAttributeResponse: ModifyPrivateIpAddressesAttributeResponse,
    SubnetInput: SubnetInput,
    ModifyHaVipAttributeResponse: ModifyHaVipAttributeResponse,
    CreateCcnResponse: CreateCcnResponse,
    EnableCcnRoutesRequest: EnableCcnRoutesRequest,
    DisableCcnRoutesRequest: DisableCcnRoutesRequest,
    DescribeVpcPrivateIpAddressesResponse: DescribeVpcPrivateIpAddressesResponse,
    DefaultVpcSubnet: DefaultVpcSubnet,
    AssignIpv6SubnetCidrBlockResponse: AssignIpv6SubnetCidrBlockResponse,
    ModifyNatGatewayAttributeRequest: ModifyNatGatewayAttributeRequest,
    DeleteSecurityGroupResponse: DeleteSecurityGroupResponse,
    Route: Route,
    CreateSubnetsResponse: CreateSubnetsResponse,
    CreateNetworkInterfaceResponse: CreateNetworkInterfaceResponse,
    HaVipAssociateAddressIpRequest: HaVipAssociateAddressIpRequest,
    DescribeGatewayFlowMonitorDetailRequest: DescribeGatewayFlowMonitorDetailRequest,
    DescribeAddressQuotaRequest: DescribeAddressQuotaRequest,
    ModifyNetworkInterfaceAttributeResponse: ModifyNetworkInterfaceAttributeResponse,
    TransformAddressResponse: TransformAddressResponse,
    InquiryPriceCreateVpnGatewayResponse: InquiryPriceCreateVpnGatewayResponse,
    CreateNatGatewayDestinationIpPortTranslationNatRuleRequest: CreateNatGatewayDestinationIpPortTranslationNatRuleRequest,
    AssignIpv6AddressesResponse: AssignIpv6AddressesResponse,
    CreateRoutesResponse: CreateRoutesResponse,
    DescribeVpcIpv6AddressesRequest: DescribeVpcIpv6AddressesRequest,
    DescribeSecurityGroupsResponse: DescribeSecurityGroupsResponse,
    RouteTableAssociation: RouteTableAssociation,
    DetachNetworkInterfaceResponse: DetachNetworkInterfaceResponse,
    ModifyIpv6AddressesAttributeRequest: ModifyIpv6AddressesAttributeRequest,
    ResetRoutesResponse: ResetRoutesResponse,
    FilterObject: FilterObject,
    DescribeVpcsRequest: DescribeVpcsRequest,
    ModifySecurityGroupPoliciesResponse: ModifySecurityGroupPoliciesResponse,
    DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest: DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest,
    NatGatewayDestinationIpPortTranslationNatRule: NatGatewayDestinationIpPortTranslationNatRule,
    DescribeNetDetectStatesResponse: DescribeNetDetectStatesResponse,
    NetworkInterfaceAttachment: NetworkInterfaceAttachment,
    ResetVpnGatewayInternetMaxBandwidthResponse: ResetVpnGatewayInternetMaxBandwidthResponse,
    CreateVpnConnectionResponse: CreateVpnConnectionResponse,
    DetachNetworkInterfaceRequest: DetachNetworkInterfaceRequest,
    AddressTemplateSpecification: AddressTemplateSpecification,
    CheckNetDetectStateRequest: CheckNetDetectStateRequest,
    AssignIpv6AddressesRequest: AssignIpv6AddressesRequest,
    DescribeAddressesResponse: DescribeAddressesResponse,
    SecurityGroupAssociationStatistics: SecurityGroupAssociationStatistics,
    AttachClassicLinkVpcResponse: AttachClassicLinkVpcResponse,
    CreateServiceTemplateGroupResponse: CreateServiceTemplateGroupResponse,
    CreateAddressTemplateRequest: CreateAddressTemplateRequest,
    DescribeNatGatewaysResponse: DescribeNatGatewaysResponse,
    AttachCcnInstancesResponse: AttachCcnInstancesResponse,
    CreateDefaultVpcResponse: CreateDefaultVpcResponse,
    ModifyVpcAttributeResponse: ModifyVpcAttributeResponse,
    DeleteCcnResponse: DeleteCcnResponse,
    ModifyIpv6AddressesAttributeResponse: ModifyIpv6AddressesAttributeResponse,
    DeleteVpcResponse: DeleteVpcResponse,
    DescribeCcnRoutesResponse: DescribeCcnRoutesResponse,
    DisassociateNatGatewayAddressRequest: DisassociateNatGatewayAddressRequest,
    DescribeNatGatewaysRequest: DescribeNatGatewaysRequest,
    PrivateIpAddressSpecification: PrivateIpAddressSpecification,
    ModifySecurityGroupAttributeResponse: ModifySecurityGroupAttributeResponse,
    SecurityGroup: SecurityGroup,
    MigratePrivateIpAddressResponse: MigratePrivateIpAddressResponse,
    DeleteRouteTableResponse: DeleteRouteTableResponse,
    ResetNatGatewayConnectionRequest: ResetNatGatewayConnectionRequest,
    NetDetectIpState: NetDetectIpState,
    AccountAttribute: AccountAttribute,
    DisassociateAddressResponse: DisassociateAddressResponse,
    DeleteDirectConnectGatewayCcnRoutesRequest: DeleteDirectConnectGatewayCcnRoutesRequest,
    DescribeCcnAttachedInstancesResponse: DescribeCcnAttachedInstancesResponse,
    HaVipAssociateAddressIpResponse: HaVipAssociateAddressIpResponse,
    DeleteRoutesRequest: DeleteRoutesRequest,
    AssociateAddressRequest: AssociateAddressRequest,
    CreateNetDetectRequest: CreateNetDetectRequest,
    CreateAddressTemplateResponse: CreateAddressTemplateResponse,
    CreateNatGatewayDestinationIpPortTranslationNatRuleResponse: CreateNatGatewayDestinationIpPortTranslationNatRuleResponse,
    DeleteAddressTemplateGroupRequest: DeleteAddressTemplateGroupRequest,
    AttachNetworkInterfaceResponse: AttachNetworkInterfaceResponse,
    DescribeNetworkInterfaceLimitRequest: DescribeNetworkInterfaceLimitRequest,
    ServiceTemplateSpecification: ServiceTemplateSpecification,
    DescribeServiceTemplatesResponse: DescribeServiceTemplatesResponse,
    AcceptAttachCcnInstancesRequest: AcceptAttachCcnInstancesRequest,
    ResetAttachCcnInstancesRequest: ResetAttachCcnInstancesRequest,
    CreateHaVipResponse: CreateHaVipResponse,
    DescribeGatewayFlowMonitorDetailResponse: DescribeGatewayFlowMonitorDetailResponse,
    DescribeVpnGatewaysRequest: DescribeVpnGatewaysRequest,
    ClassicLinkInstance: ClassicLinkInstance,
    CreateVpnGatewayRequest: CreateVpnGatewayRequest,
    DescribeSubnetsResponse: DescribeSubnetsResponse,
    ModifyNetworkInterfaceAttributeRequest: ModifyNetworkInterfaceAttributeRequest,
    DisableCcnRoutesResponse: DisableCcnRoutesResponse,
    HaVipDisassociateAddressIpResponse: HaVipDisassociateAddressIpResponse,
    CreateSubnetsRequest: CreateSubnetsRequest,
    DescribeAddressTemplateGroupsResponse: DescribeAddressTemplateGroupsResponse,
    SetCcnRegionBandwidthLimitsRequest: SetCcnRegionBandwidthLimitsRequest,
    DetachClassicLinkVpcResponse: DetachClassicLinkVpcResponse,
    DescribeTaskResultRequest: DescribeTaskResultRequest,
    CreateDirectConnectGatewayCcnRoutesRequest: CreateDirectConnectGatewayCcnRoutesRequest,
    UnassignPrivateIpAddressesRequest: UnassignPrivateIpAddressesRequest,
    AssociateAddressResponse: AssociateAddressResponse,
    Filter: Filter,
    CreateDirectConnectGatewayCcnRoutesResponse: CreateDirectConnectGatewayCcnRoutesResponse,
    ModifySubnetAttributeRequest: ModifySubnetAttributeRequest,
    CreateRouteTableRequest: CreateRouteTableRequest,
    ModifyNetDetectResponse: ModifyNetDetectResponse,
    UnassignIpv6SubnetCidrBlockRequest: UnassignIpv6SubnetCidrBlockRequest,
    CreateHaVipRequest: CreateHaVipRequest,
    DescribeAddressesRequest: DescribeAddressesRequest,
    ResetRoutesRequest: ResetRoutesRequest,
    Ipv6SubnetCidrBlock: Ipv6SubnetCidrBlock,
    DescribeSecurityGroupPoliciesRequest: DescribeSecurityGroupPoliciesRequest,
    MigrateNetworkInterfaceRequest: MigrateNetworkInterfaceRequest,
    AssignIpv6CidrBlockRequest: AssignIpv6CidrBlockRequest,
    CreateSecurityGroupPoliciesResponse: CreateSecurityGroupPoliciesResponse,
    CreateSecurityGroupResponse: CreateSecurityGroupResponse,
    DeleteSecurityGroupRequest: DeleteSecurityGroupRequest,
    ModifyVpnConnectionAttributeRequest: ModifyVpnConnectionAttributeRequest,
    ReplaceRoutesRequest: ReplaceRoutesRequest,
    CreateRouteTableResponse: CreateRouteTableResponse,
    DescribeNetworkInterfaceLimitResponse: DescribeNetworkInterfaceLimitResponse,
    DeleteRoutesResponse: DeleteRoutesResponse,
    AssignIpv6CidrBlockResponse: AssignIpv6CidrBlockResponse,
    CreateCcnRequest: CreateCcnRequest,
    DescribeSecurityGroupAssociationStatisticsResponse: DescribeSecurityGroupAssociationStatisticsResponse,
    DescribeDirectConnectGatewayCcnRoutesResponse: DescribeDirectConnectGatewayCcnRoutesResponse,
    ModifyPrivateIpAddressesAttributeRequest: ModifyPrivateIpAddressesAttributeRequest,
    ResetNatGatewayConnectionResponse: ResetNatGatewayConnectionResponse,
    UnassignIpv6SubnetCidrBlockResponse: UnassignIpv6SubnetCidrBlockResponse,
    CreateNetDetectResponse: CreateNetDetectResponse,
    CreateSecurityGroupRequest: CreateSecurityGroupRequest,
    ModifyCcnAttributeResponse: ModifyCcnAttributeResponse,
    DeleteCcnRequest: DeleteCcnRequest,
    DescribeClassicLinkInstancesRequest: DescribeClassicLinkInstancesRequest,
    CreateServiceTemplateResponse: CreateServiceTemplateResponse,
    DeleteNetworkInterfaceResponse: DeleteNetworkInterfaceResponse,
    CreateNatGatewayRequest: CreateNatGatewayRequest,
    DeleteNetDetectRequest: DeleteNetDetectRequest,
    UnassignIpv6AddressesResponse: UnassignIpv6AddressesResponse,
    IPSECOptionsSpecification: IPSECOptionsSpecification,
    DescribeAccountAttributesResponse: DescribeAccountAttributesResponse,
    InquiryPriceCreateVpnGatewayRequest: InquiryPriceCreateVpnGatewayRequest,
    VpcIpv6Address: VpcIpv6Address,
    UnassignIpv6AddressesRequest: UnassignIpv6AddressesRequest,
    DeleteVpnConnectionRequest: DeleteVpnConnectionRequest,
    DescribeSecurityGroupsRequest: DescribeSecurityGroupsRequest,
    DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest: DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest,
    CustomerGatewayVendor: CustomerGatewayVendor,
    DescribeAddressTemplatesRequest: DescribeAddressTemplatesRequest,
    ModifyCcnAttributeRequest: ModifyCcnAttributeRequest,
    SecurityGroupPolicySet: SecurityGroupPolicySet,
    ModifyAddressTemplateGroupAttributeResponse: ModifyAddressTemplateGroupAttributeResponse,
    DeleteSecurityGroupPoliciesResponse: DeleteSecurityGroupPoliciesResponse,
    ModifyAddressAttributeRequest: ModifyAddressAttributeRequest,
    ResetVpnGatewayInternetMaxBandwidthRequest: ResetVpnGatewayInternetMaxBandwidthRequest,
    DescribeVpnConnectionsResponse: DescribeVpnConnectionsResponse,
    ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest: ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest,
    RejectAttachCcnInstancesRequest: RejectAttachCcnInstancesRequest,
    SecurityPolicyDatabase: SecurityPolicyDatabase,
    DeleteVpnGatewayResponse: DeleteVpnGatewayResponse,
    DescribeAddressTemplatesResponse: DescribeAddressTemplatesResponse,
    DescribeHaVipsRequest: DescribeHaVipsRequest,
    Quota: Quota,
    UnassignPrivateIpAddressesResponse: UnassignPrivateIpAddressesResponse,
    Address: Address,
    ModifyVpnGatewayAttributeResponse: ModifyVpnGatewayAttributeResponse,
    DeleteAddressTemplateResponse: DeleteAddressTemplateResponse,
    DescribeVpnConnectionsRequest: DescribeVpnConnectionsRequest,
    ModifyAddressesBandwidthRequest: ModifyAddressesBandwidthRequest,
    DeleteHaVipRequest: DeleteHaVipRequest,
    ModifySubnetAttributeResponse: ModifySubnetAttributeResponse,
    DescribeServiceTemplateGroupsRequest: DescribeServiceTemplateGroupsRequest,
    UnassignIpv6CidrBlockResponse: UnassignIpv6CidrBlockResponse,
    ReleaseAddressesRequest: ReleaseAddressesRequest,
    CreateVpcRequest: CreateVpcRequest,
    ReplaceDirectConnectGatewayCcnRoutesResponse: ReplaceDirectConnectGatewayCcnRoutesResponse,
    CreateServiceTemplateGroupRequest: CreateServiceTemplateGroupRequest,
    DeleteServiceTemplateRequest: DeleteServiceTemplateRequest,
    DescribeSecurityGroupAssociationStatisticsRequest: DescribeSecurityGroupAssociationStatisticsRequest,
    DescribeDirectConnectGatewayCcnRoutesRequest: DescribeDirectConnectGatewayCcnRoutesRequest,
    DescribeClassicLinkInstancesResponse: DescribeClassicLinkInstancesResponse,
    DeleteAddressTemplateRequest: DeleteAddressTemplateRequest,
    DeleteServiceTemplateGroupResponse: DeleteServiceTemplateGroupResponse,
    AllocateAddressesResponse: AllocateAddressesResponse,
    TransformAddressRequest: TransformAddressRequest,
    ReplaceDirectConnectGatewayCcnRoutesRequest: ReplaceDirectConnectGatewayCcnRoutesRequest,
    DescribeVpcPrivateIpAddressesRequest: DescribeVpcPrivateIpAddressesRequest,
    DisassociateAddressRequest: DisassociateAddressRequest,
    ReplaceRouteTableAssociationRequest: ReplaceRouteTableAssociationRequest,
    AttachNetworkInterfaceRequest: AttachNetworkInterfaceRequest,
    ModifyVpcAttributeRequest: ModifyVpcAttributeRequest,
    DetachCcnInstancesRequest: DetachCcnInstancesRequest,
    CreateSecurityGroupPoliciesRequest: CreateSecurityGroupPoliciesRequest,
    CreateNatGatewayResponse: CreateNatGatewayResponse,
    IKEOptionsSpecification: IKEOptionsSpecification,
    MigrateNetworkInterfaceResponse: MigrateNetworkInterfaceResponse,
    DescribeVpcsResponse: DescribeVpcsResponse,
    VpcPrivateIpAddress: VpcPrivateIpAddress,
    ModifyAddressTemplateAttributeRequest: ModifyAddressTemplateAttributeRequest,
    ModifySecurityGroupAttributeRequest: ModifySecurityGroupAttributeRequest,
    CreateAddressTemplateGroupResponse: CreateAddressTemplateGroupResponse,
    CcnAttachedInstance: CcnAttachedInstance,
    ModifyNetDetectRequest: ModifyNetDetectRequest,
    ModifyRouteTableAttributeRequest: ModifyRouteTableAttributeRequest,
    AcceptAttachCcnInstancesResponse: AcceptAttachCcnInstancesResponse,
    DeleteServiceTemplateGroupRequest: DeleteServiceTemplateGroupRequest,
    DescribeNetDetectStatesRequest: DescribeNetDetectStatesRequest,
    DeleteNatGatewayResponse: DeleteNatGatewayResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    Price: Price,
    DescribeNetDetectsResponse: DescribeNetDetectsResponse,

}
