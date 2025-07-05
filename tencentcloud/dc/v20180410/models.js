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
 * DescribeInternetAddressQuota request structure.
 * @class
 */
class DescribeInternetAddressQuotaRequest extends  AbstractModel {
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
 * BGP parameter, including Asn and AuthKey.
 * @class
 */
class BgpPeer extends  AbstractModel {
    constructor(){
        super();

        /**
         * User-side BGP Asn.
         * @type {number || null}
         */
        this.Asn = null;

        /**
         * User-side BGP key.
         * @type {string || null}
         */
        this.AuthKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Asn = 'Asn' in params ? params.Asn : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;

    }
}

/**
 * RejectDirectConnectTunnel request structure.
 * @class
 */
class RejectDirectConnectTunnelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * None.
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

    }
}

/**
 * Coordinate describing the longitude and latitude.
 * @class
 */
class Coordinate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Latitude
         * @type {number || null}
         */
        this.Lat = null;

        /**
         * Longitude
         * @type {number || null}
         */
        this.Lng = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Lat = 'Lat' in params ? params.Lat : null;
        this.Lng = 'Lng' in params ? params.Lng : null;

    }
}

/**
 * DeleteDirectConnectTunnel request structure.
 * @class
 */
class DeleteDirectConnectTunnelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dedicated tunnel ID.
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

    }
}

/**
 * CreateDirectConnect response structure.
 * @class
 */
class CreateDirectConnectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID.
         * @type {Array.<string> || null}
         */
        this.DirectConnectIdSet = null;

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
        this.DirectConnectIdSet = 'DirectConnectIdSet' in params ? params.DirectConnectIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Connection information list.
 * @class
 */
class DirectConnect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID.
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * Connection name.
         * @type {string || null}
         */
        this.DirectConnectName = null;

        /**
         * Access point ID of a connection.
         * @type {string || null}
         */
        this.AccessPointId = null;

        /**
         * Connection status.
PENDING: Applying. 
REJECTED: Application rejected.   
TOPAY: Payment pending. 
PAID: Paid. 
ALLOCATED: Constructing.   
AVAILABLE: Available.  
DELETING: Deleting.
DELETED: Deleted.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Connection creation time.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Connection activation time.
         * @type {string || null}
         */
        this.EnabledTime = null;

        /**
         * ISP that provides connections. Valid values: ChinaTelecom (China Telecom), ChinaMobile (China Mobile), ChinaUnicom (China Unicom), In-houseWiring (in-house wiring), ChinaOther (other Chinese ISPs), InternationalOperator (international ISPs).
         * @type {string || null}
         */
        this.LineOperator = null;

        /**
         * Location of a local IDC.
         * @type {string || null}
         */
        this.Location = null;

        /**
         * Connection port bandwidth in Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * User-side port type of a connection. Valid values: 100Base-T (100-Megabit electrical Ethernet interface), 1000Base-T (1-Gigabit electrical Ethernet interface; it is the default value), 1000Base-LX (1-Gigabit single-mode optical Ethernet interface; 10 KM), 10GBase-T (10-Gigabit electrical Ethernet interface), 10GBase-LR (10-Gigabit single-mode optical Ethernet interface; 10 KM).
         * @type {string || null}
         */
        this.PortType = null;

        /**
         * Circuit code of a connection, which is provided by the ISP or service provider.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CircuitCode = null;

        /**
         * ID of a redundant connection.
         * @type {string || null}
         */
        this.RedundantDirectConnectId = null;

        /**
         * VLAN for connection debugging, which is enabled and automatically assigned by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * Tencent-side IP address for connection debugging.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * User-side IP address for connection debugging.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * Name of the connection applicant, which is obtained from the account system by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * Email address of the connection applicant, which is obtained from the account system by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomerContactMail = null;

        /**
         * Contact number of the connection applicant, which is obtained from the account system by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomerContactNumber = null;

        /**
         * Connection expiration time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Connection billing mode. NON_RECURRING_CHARGE: One-time charge for accessing service
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * Fault reporting contact person.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FaultReportContactPerson = null;

        /**
         * Fault reporting contact number.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FaultReportContactNumber = null;

        /**
         * Tag key-value pair
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * Access point type of a connection.
         * @type {string || null}
         */
        this.AccessPointType = null;

        /**
         * IDC city.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IdcCity = null;

        /**
         * Billing status
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChargeState = null;

        /**
         * Connection activation time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Whether the connection has the service agreement signed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {boolean || null}
         */
        this.SignLaw = null;

        /**
         * Whether the connection is an edge zone.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {boolean || null}
         */
        this.LocalZone = null;

        /**
         * Number of dedicated tunnels with disabled VLAN in the connection
Note: this field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.VlanZeroDirectConnectTunnelCount = null;

        /**
         * Number of dedicated tunnels with enabled VLAN in the connection
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.OtherVlanDirectConnectTunnelCount = null;

        /**
         * Minimum bandwidth of the connection
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.DirectConnectName = 'DirectConnectName' in params ? params.DirectConnectName : null;
        this.AccessPointId = 'AccessPointId' in params ? params.AccessPointId : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.EnabledTime = 'EnabledTime' in params ? params.EnabledTime : null;
        this.LineOperator = 'LineOperator' in params ? params.LineOperator : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.PortType = 'PortType' in params ? params.PortType : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
        this.RedundantDirectConnectId = 'RedundantDirectConnectId' in params ? params.RedundantDirectConnectId : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerContactMail = 'CustomerContactMail' in params ? params.CustomerContactMail : null;
        this.CustomerContactNumber = 'CustomerContactNumber' in params ? params.CustomerContactNumber : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.FaultReportContactPerson = 'FaultReportContactPerson' in params ? params.FaultReportContactPerson : null;
        this.FaultReportContactNumber = 'FaultReportContactNumber' in params ? params.FaultReportContactNumber : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.AccessPointType = 'AccessPointType' in params ? params.AccessPointType : null;
        this.IdcCity = 'IdcCity' in params ? params.IdcCity : null;
        this.ChargeState = 'ChargeState' in params ? params.ChargeState : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;
        this.LocalZone = 'LocalZone' in params ? params.LocalZone : null;
        this.VlanZeroDirectConnectTunnelCount = 'VlanZeroDirectConnectTunnelCount' in params ? params.VlanZeroDirectConnectTunnelCount : null;
        this.OtherVlanDirectConnectTunnelCount = 'OtherVlanDirectConnectTunnelCount' in params ? params.OtherVlanDirectConnectTunnelCount : null;
        this.MinBandwidth = 'MinBandwidth' in params ? params.MinBandwidth : null;

    }
}

/**
 * Internet tunnel’s IP address details
 * @class
 */
class InternetAddressDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Internet tunnel’s IP address ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Internet tunnel’s network address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Subnet = null;

        /**
         * Mask length of a network address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaskLen = null;

        /**
         * Address type. Valid values: 0: BGP
1: China Telecom
2: China Mobile
3: China Unicom
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AddrType = null;

        /**
         * Address status. Valid values: 0: in use
1: disabled
2: returned
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Applied at
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ApplyTime = null;

        /**
         * Disabled at
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StopTime = null;

        /**
         * Returned at
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReleaseTime = null;

        /**
         * Region
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * User ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Address protocol. Valid values: 0: IPv4; 1: IPv6
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AddrProto = null;

        /**
         * Retention period of a released IP address, in days
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReserveTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Subnet = 'Subnet' in params ? params.Subnet : null;
        this.MaskLen = 'MaskLen' in params ? params.MaskLen : null;
        this.AddrType = 'AddrType' in params ? params.AddrType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ApplyTime = 'ApplyTime' in params ? params.ApplyTime : null;
        this.StopTime = 'StopTime' in params ? params.StopTime : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AddrProto = 'AddrProto' in params ? params.AddrProto : null;
        this.ReserveTime = 'ReserveTime' in params ? params.ReserveTime : null;

    }
}

/**
 * DescribeAccessPoints response structure.
 * @class
 */
class DescribeAccessPointsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access point information.
         * @type {Array.<AccessPoint> || null}
         */
        this.AccessPointSet = null;

        /**
         * Number of eligible access points.
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

        if (params.AccessPointSet) {
            this.AccessPointSet = new Array();
            for (let z in params.AccessPointSet) {
                let obj = new AccessPoint();
                obj.deserialize(params.AccessPointSet[z]);
                this.AccessPointSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptDirectConnectTunnel response structure.
 * @class
 */
class AcceptDirectConnectTunnelResponse extends  AbstractModel {
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
 * DescribeDirectConnectTunnels request structure.
 * @class
 */
class DescribeDirectConnectTunnelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions:
This parameter does not support specifying `DirectConnectTunnelIds` and `Filters` at the same time.
<li> direct-connect-tunnel-name: Dedicated tunnel name.</li>
<li> direct-connect-tunnel-id: Dedicated tunnel instance ID, such as `dcx-abcdefgh`.</li>
<li>direct-connect-id: Connection instance ID, such as `dc-abcdefgh`.</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Array of dedicated tunnel IDs.
         * @type {Array.<string> || null}
         */
        this.DirectConnectTunnelIds = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.DirectConnectTunnelIds = 'DirectConnectTunnelIds' in params ? params.DirectConnectTunnelIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ReleaseInternetAddress request structure.
 * @class
 */
class ReleaseInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the internet tunnel’s public IP address
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
 * ModifyDirectConnectTunnelAttribute response structure.
 * @class
 */
class ModifyDirectConnectTunnelAttributeResponse extends  AbstractModel {
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
 * User-side IP range.
 * @class
 */
class RouteFilterPrefix extends  AbstractModel {
    constructor(){
        super();

        /**
         * User-side IP range.
         * @type {string || null}
         */
        this.Cidr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cidr = 'Cidr' in params ? params.Cidr : null;

    }
}

/**
 * ApplyInternetAddress response structure.
 * @class
 */
class ApplyInternetAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the internet tunnel’s public IP address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptDirectConnectTunnel request structure.
 * @class
 */
class AcceptDirectConnectTunnelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The connection owner accepts an application for sharing the dedicated tunnel
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

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
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
Note: this field may return null, indicating that no valid values can be obtained.
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
 * CreateDirectConnectTunnel request structure.
 * @class
 */
class CreateDirectConnectTunnelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Direct Connect ID, such as `dc-kd7d06of`.
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * Dedicated tunnel name.
         * @type {string || null}
         */
        this.DirectConnectTunnelName = null;

        /**
         * Connection owner, who is the current customer by default.
The developer account ID should be entered for shared connections.
         * @type {string || null}
         */
        this.DirectConnectOwnerAccount = null;

        /**
         * Network type. Valid values: VPC, BMVPC, CCN. Default value: VPC.
VPC: Virtual Private Cloud.
BMVPC: BM VPC.
CCN: Cloud Connect Network.
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * Network region.
         * @type {string || null}
         */
        this.NetworkRegion = null;

        /**
         * Unified VPC ID or BMVPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Direct connect gateway ID, such as `dcg-d545ddf`.
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * Direct Connect bandwidth in Mbps.
Default value: connection bandwidth value.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * BGP: BGP routing.
STATIC: Static routing.
Default value: BGP routing.
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * BgpPeer, which is BGP information on the user side and includes Asn and AuthKey.
         * @type {BgpPeer || null}
         */
        this.BgpPeer = null;

        /**
         * Static routing, i.e., IP range of the user's IDC.
         * @type {Array.<RouteFilterPrefix> || null}
         */
        this.RouteFilterPrefixes = null;

        /**
         * VLAN. Value range: 0-3,000.
0: sub-interface not enabled.
Default value: Non-zero.
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * TencentAddress: Tencent-side IP address.
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * CustomerAddress: User-side IP address.
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * TencentBackupAddress, i.e., Tencent-side standby IP address
         * @type {string || null}
         */
        this.TencentBackupAddress = null;

        /**
         * Cloud Attached Connection Service ID
         * @type {string || null}
         */
        this.CloudAttachId = null;

        /**
         * Whether to enable BFD
         * @type {number || null}
         */
        this.BfdEnable = null;

        /**
         * Whether to enable NQA
         * @type {number || null}
         */
        this.NqaEnable = null;

        /**
         * BFD configuration information
         * @type {BFDInfo || null}
         */
        this.BfdInfo = null;

        /**
         * NQA configuration information
         * @type {NQAInfo || null}
         */
        this.NqaInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;
        this.DirectConnectOwnerAccount = 'DirectConnectOwnerAccount' in params ? params.DirectConnectOwnerAccount : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.NetworkRegion = 'NetworkRegion' in params ? params.NetworkRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;
        this.CloudAttachId = 'CloudAttachId' in params ? params.CloudAttachId : null;
        this.BfdEnable = 'BfdEnable' in params ? params.BfdEnable : null;
        this.NqaEnable = 'NqaEnable' in params ? params.NqaEnable : null;

        if (params.BfdInfo) {
            let obj = new BFDInfo();
            obj.deserialize(params.BfdInfo)
            this.BfdInfo = obj;
        }

        if (params.NqaInfo) {
            let obj = new NQAInfo();
            obj.deserialize(params.NqaInfo)
            this.NqaInfo = obj;
        }

    }
}

/**
 * DeleteDirectConnect response structure.
 * @class
 */
class DeleteDirectConnectResponse extends  AbstractModel {
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
 * EnableInternetAddress response structure.
 * @class
 */
class EnableInternetAddressResponse extends  AbstractModel {
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
 * ApplyInternetAddress request structure.
 * @class
 */
class ApplyInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mask length of a CIDR block
         * @type {number || null}
         */
        this.MaskLen = null;

        /**
         * Address type. Valid values: 0: BGP
1: China Telecom
2: China Mobile
3: China Unicom
         * @type {number || null}
         */
        this.AddrType = null;

        /**
         * Address protocol. Valid values: 0: IPv4
1: IPv6
         * @type {number || null}
         */
        this.AddrProto = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaskLen = 'MaskLen' in params ? params.MaskLen : null;
        this.AddrType = 'AddrType' in params ? params.AddrType : null;
        this.AddrProto = 'AddrProto' in params ? params.AddrProto : null;

    }
}

/**
 * DescribeDirectConnects response structure.
 * @class
 */
class DescribeDirectConnectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of connections.
         * @type {Array.<DirectConnect> || null}
         */
        this.DirectConnectSet = null;

        /**
         * Number of eligible connection lists.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Whether all connections under the account have the service agreement signed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {boolean || null}
         */
        this.AllSignLaw = null;

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

        if (params.DirectConnectSet) {
            this.DirectConnectSet = new Array();
            for (let z in params.DirectConnectSet) {
                let obj = new DirectConnect();
                obj.deserialize(params.DirectConnectSet[z]);
                this.DirectConnectSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.AllSignLaw = 'AllSignLaw' in params ? params.AllSignLaw : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessPoints request structure.
 * @class
 */
class DescribeAccessPointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access point region, which can be queried through `DescribeRegions`.

You can call `DescribeRegions` to get the region ID.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of results to be returned. Default value: 20. Maximum value: 100.
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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDirectConnects request structure.
 * @class
 */
class DescribeDirectConnectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter conditions:
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Array of connection IDs.
         * @type {Array.<string> || null}
         */
        this.DirectConnectIds = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
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
        this.DirectConnectIds = 'DirectConnectIds' in params ? params.DirectConnectIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyDirectConnectTunnelAttribute request structure.
 * @class
 */
class ModifyDirectConnectTunnelAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dedicated tunnel ID.
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

        /**
         * Dedicated tunnel name.
         * @type {string || null}
         */
        this.DirectConnectTunnelName = null;

        /**
         * User-side BGP, including Asn and AuthKey.
         * @type {BgpPeer || null}
         */
        this.BgpPeer = null;

        /**
         * User-side IP range.
         * @type {Array.<RouteFilterPrefix> || null}
         */
        this.RouteFilterPrefixes = null;

        /**
         * Tencent-side IP address.
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * User-side IP address.
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * Bandwidth value of a dedicated tunnel in Mbps.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Tencent-side standby IP address
         * @type {string || null}
         */
        this.TencentBackupAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;

    }
}

/**
 * ModifyDirectConnectAttribute request structure.
 * @class
 */
class ModifyDirectConnectAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID.
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * Connection name.
         * @type {string || null}
         */
        this.DirectConnectName = null;

        /**
         * Circuit code of a connection, which is provided by the ISP or connection provider.
         * @type {string || null}
         */
        this.CircuitCode = null;

        /**
         * VLAN for connection debugging.
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * Tencent-side IP address for connection debugging.
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * User-side IP address for connection debugging.
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * Name of connection applicant, which is obtained from the account system by default.
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * Email address of connection applicant, which is obtained from the account system by default.
         * @type {string || null}
         */
        this.CustomerContactMail = null;

        /**
         * Contact number of connection applicant, which is obtained from the account system by default.
         * @type {string || null}
         */
        this.CustomerContactNumber = null;

        /**
         * Fault reporting contact person.
         * @type {string || null}
         */
        this.FaultReportContactPerson = null;

        /**
         * Fault reporting contact number.
         * @type {string || null}
         */
        this.FaultReportContactNumber = null;

        /**
         * Whether the connection applicant has signed the service agreement.
         * @type {boolean || null}
         */
        this.SignLaw = null;

        /**
         * Connection’s bandwidth
         * @type {number || null}
         */
        this.Bandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.DirectConnectName = 'DirectConnectName' in params ? params.DirectConnectName : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerContactMail = 'CustomerContactMail' in params ? params.CustomerContactMail : null;
        this.CustomerContactNumber = 'CustomerContactNumber' in params ? params.CustomerContactNumber : null;
        this.FaultReportContactPerson = 'FaultReportContactPerson' in params ? params.FaultReportContactPerson : null;
        this.FaultReportContactNumber = 'FaultReportContactNumber' in params ? params.FaultReportContactNumber : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * DescribeInternetAddress response structure.
 * @class
 */
class DescribeInternetAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of public IP addresses for internet tunnels
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of the public IP addresses for internet tunnels
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<InternetAddressDetail> || null}
         */
        this.Subnets = null;

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

        if (params.Subnets) {
            this.Subnets = new Array();
            for (let z in params.Subnets) {
                let obj = new InternetAddressDetail();
                obj.deserialize(params.Subnets[z]);
                this.Subnets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Used for conditional filtering queries.
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fields to be filtered.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter values of the field.
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
 * DisableInternetAddress response structure.
 * @class
 */
class DisableInternetAddressResponse extends  AbstractModel {
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
 * DescribeInternetAddressStatistics request structure.
 * @class
 */
class DescribeInternetAddressStatisticsRequest extends  AbstractModel {
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
 * Public IP address statistics of internet tunnels
 * @class
 */
class InternetAddressStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Number of public IP addresses for internet tunnels
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SubnetNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.SubnetNum = 'SubnetNum' in params ? params.SubnetNum : null;

    }
}

/**
 * CreateDirectConnect request structure.
 * @class
 */
class CreateDirectConnectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection name.
         * @type {string || null}
         */
        this.DirectConnectName = null;

        /**
         * Access point of connection.
You can call `DescribeAccessPoints` to get the region ID. The selected access point must exist and be available.
         * @type {string || null}
         */
        this.AccessPointId = null;

        /**
         * ISP that provides connections. Valid values: ChinaTelecom (China Telecom), ChinaMobile (China Mobile), ChinaUnicom (China Unicom), In-houseWiring (in-house wiring), ChinaOther (other Chinese ISPs), InternationalOperator (international ISPs).
         * @type {string || null}
         */
        this.LineOperator = null;

        /**
         * Port type of connection. Valid values: 100Base-T (100-Megabit electrical Ethernet interface), 1000Base-T (1-Gigabit electrical Ethernet interface), 1000Base-LX (1-Gigabit single-module optical Ethernet interface; 10 KM), 10GBase-T (10-Gigabit electrical Ethernet interface), 10GBase-LR (10-Gigabit single-module optical Ethernet interface; 10 KM). Default value: 1000Base-LX.
         * @type {string || null}
         */
        this.PortType = null;

        /**
         * Circuit code of a connection, which is provided by the ISP or connection provider.
         * @type {string || null}
         */
        this.CircuitCode = null;

        /**
         * Local IDC location.
         * @type {string || null}
         */
        this.Location = null;

        /**
         * Connection port bandwidth in Mbps. Value range: [2,10240]. Default value: 1000.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * ID of redundant connection.
         * @type {string || null}
         */
        this.RedundantDirectConnectId = null;

        /**
         * VLAN for connection debugging, which is enabled and automatically assigned by default.
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * Tencent-side IP address for connection debugging, which is automatically assigned by default.
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * User-side IP address for connection debugging, which is automatically assigned by default.
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * Name of connection applicant, which is obtained from the account system by default.
         * @type {string || null}
         */
        this.CustomerName = null;

        /**
         * Email address of connection applicant, which is obtained from the account system by default.
         * @type {string || null}
         */
        this.CustomerContactMail = null;

        /**
         * Contact number of connection applicant, which is obtained from the account system by default.
         * @type {string || null}
         */
        this.CustomerContactNumber = null;

        /**
         * Fault reporting contact person.
         * @type {string || null}
         */
        this.FaultReportContactPerson = null;

        /**
         * Fault reporting contact number.
         * @type {string || null}
         */
        this.FaultReportContactNumber = null;

        /**
         * Whether the connection applicant has signed the service agreement. Default value: true.
         * @type {boolean || null}
         */
        this.SignLaw = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectName = 'DirectConnectName' in params ? params.DirectConnectName : null;
        this.AccessPointId = 'AccessPointId' in params ? params.AccessPointId : null;
        this.LineOperator = 'LineOperator' in params ? params.LineOperator : null;
        this.PortType = 'PortType' in params ? params.PortType : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.RedundantDirectConnectId = 'RedundantDirectConnectId' in params ? params.RedundantDirectConnectId : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerContactMail = 'CustomerContactMail' in params ? params.CustomerContactMail : null;
        this.CustomerContactNumber = 'CustomerContactNumber' in params ? params.CustomerContactNumber : null;
        this.FaultReportContactPerson = 'FaultReportContactPerson' in params ? params.FaultReportContactPerson : null;
        this.FaultReportContactNumber = 'FaultReportContactNumber' in params ? params.FaultReportContactNumber : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;

    }
}

/**
 * EnableInternetAddress request structure.
 * @class
 */
class EnableInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the internet tunnel’s public IP address
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
 * ModifyDirectConnectAttribute response structure.
 * @class
 */
class ModifyDirectConnectAttributeResponse extends  AbstractModel {
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
 * RejectDirectConnectTunnel response structure.
 * @class
 */
class RejectDirectConnectTunnelResponse extends  AbstractModel {
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
 * CreateDirectConnectTunnel response structure.
 * @class
 */
class CreateDirectConnectTunnelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dedicated tunnel ID.
         * @type {Array.<string> || null}
         */
        this.DirectConnectTunnelIdSet = null;

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
        this.DirectConnectTunnelIdSet = 'DirectConnectTunnelIdSet' in params ? params.DirectConnectTunnelIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDirectConnectTunnel response structure.
 * @class
 */
class DeleteDirectConnectTunnelResponse extends  AbstractModel {
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
 * BFD configuration information
 * @class
 */
class BFDInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of health checks
         * @type {number || null}
         */
        this.ProbeFailedTimes = null;

        /**
         * Health check interval
         * @type {number || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProbeFailedTimes = 'ProbeFailedTimes' in params ? params.ProbeFailedTimes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * DeleteDirectConnect request structure.
 * @class
 */
class DeleteDirectConnectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection ID.
         * @type {string || null}
         */
        this.DirectConnectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;

    }
}

/**
 * DescribeDirectConnectTunnels response structure.
 * @class
 */
class DescribeDirectConnectTunnelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of dedicated tunnels.
         * @type {Array.<DirectConnectTunnel> || null}
         */
        this.DirectConnectTunnelSet = null;

        /**
         * Number of eligible dedicated tunnels.
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

        if (params.DirectConnectTunnelSet) {
            this.DirectConnectTunnelSet = new Array();
            for (let z in params.DirectConnectTunnelSet) {
                let obj = new DirectConnectTunnel();
                obj.deserialize(params.DirectConnectTunnelSet[z]);
                this.DirectConnectTunnelSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Access point information.
 * @class
 */
class AccessPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access point name.
         * @type {string || null}
         */
        this.AccessPointName = null;

        /**
         * Unique access point ID.
         * @type {string || null}
         */
        this.AccessPointId = null;

        /**
         * Access point status. Valid values: available, unavailable.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Access point location.
         * @type {string || null}
         */
        this.Location = null;

        /**
         * List of ISPs supported by access point.
         * @type {Array.<string> || null}
         */
        this.LineOperator = null;

        /**
         * ID of the region that manages the access point.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Available port type at the access point. Valid values: 1000BASE-T: gigabit electrical port; 1000BASE-LX: 10 km gigabit single-mode optical port; 1000BASE-ZX: 80 km gigabit single-mode optical port; 10GBASE-LR: 10 km 10-gigabit single-mode optical port; 10GBASE-ZR: 80 km 10-gigabit single-mode optical port; 10GBASE-LH: 40 km 10-gigabit single-mode optical port; 100GBASE-LR4: 10 km 100-gigabit single-mode optical portfiber optic port.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.AvailablePortType = null;

        /**
         * Latitude and longitude of the access point
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Coordinate || null}
         */
        this.Coordinate = null;

        /**
         * City where the access point is located
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.City = null;

        /**
         * Access point region
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Access point type. Valid values: `VXLAN`, `QCPL`, and `QCAR`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccessPointType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessPointName = 'AccessPointName' in params ? params.AccessPointName : null;
        this.AccessPointId = 'AccessPointId' in params ? params.AccessPointId : null;
        this.State = 'State' in params ? params.State : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.LineOperator = 'LineOperator' in params ? params.LineOperator : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.AvailablePortType = 'AvailablePortType' in params ? params.AvailablePortType : null;

        if (params.Coordinate) {
            let obj = new Coordinate();
            obj.deserialize(params.Coordinate)
            this.Coordinate = obj;
        }
        this.City = 'City' in params ? params.City : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.AccessPointType = 'AccessPointType' in params ? params.AccessPointType : null;

    }
}

/**
 * DescribeInternetAddressStatistics response structure.
 * @class
 */
class DescribeInternetAddressStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of public IP address statistics for internet tunnels
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of the public IP address statistics for internet tunnels
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<InternetAddressStatistics> || null}
         */
        this.InternetAddressStatistics = null;

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

        if (params.InternetAddressStatistics) {
            this.InternetAddressStatistics = new Array();
            for (let z in params.InternetAddressStatistics) {
                let obj = new InternetAddressStatistics();
                obj.deserialize(params.InternetAddressStatistics[z]);
                this.InternetAddressStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * NQA configuration information
 * @class
 */
class NQAInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of health checks
         * @type {number || null}
         */
        this.ProbeFailedTimes = null;

        /**
         * Health check interval
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * IP address for the health check
         * @type {string || null}
         */
        this.DestinationIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProbeFailedTimes = 'ProbeFailedTimes' in params ? params.ProbeFailedTimes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.DestinationIp = 'DestinationIp' in params ? params.DestinationIp : null;

    }
}

/**
 * DescribeInternetAddress request structure.
 * @class
 */
class DescribeInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned results. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filter conditions:
<li>AddrType, address type. Valid values: 0: BGP; 1: China Telecom; 2: China Mobile; 3: China Unicom</li>
<li>AddrProto, address protocol. Valid values: 0: IPv4; 1: IPv6</li>
<li>Status, address status. Valid values: 0: in use; 1: disabled; 2: returned</li>
<li>Subnet, public IP address array</li>
<InstanceIds>Public IP address ID array</li>
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
 * DescribeInternetAddressQuota response structure.
 * @class
 */
class DescribeInternetAddressQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Minimum prefix length allowed for a public IPv6 address
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Ipv6PrefixLen = null;

        /**
         * Quota of BGP IPv4 addresses
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Ipv4BgpQuota = null;

        /**
         * Quota of non-BGP IPv4 addresses
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Ipv4OtherQuota = null;

        /**
         * Used number of BGP IPv4 addresses
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Ipv4BgpNum = null;

        /**
         * Used number of non-BGP IPv4 addresses
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Ipv4OtherNum = null;

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
        this.Ipv6PrefixLen = 'Ipv6PrefixLen' in params ? params.Ipv6PrefixLen : null;
        this.Ipv4BgpQuota = 'Ipv4BgpQuota' in params ? params.Ipv4BgpQuota : null;
        this.Ipv4OtherQuota = 'Ipv4OtherQuota' in params ? params.Ipv4OtherQuota : null;
        this.Ipv4BgpNum = 'Ipv4BgpNum' in params ? params.Ipv4BgpNum : null;
        this.Ipv4OtherNum = 'Ipv4OtherNum' in params ? params.Ipv4OtherNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseInternetAddress response structure.
 * @class
 */
class ReleaseInternetAddressResponse extends  AbstractModel {
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
 * Dedicated tunnel information list.
 * @class
 */
class DirectConnectTunnel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dedicated tunnel ID.
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

        /**
         * Connection ID.
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * Dedicated tunnel status.
AVAILABLE: Ready or connected.
PENDING: Applying.
ALLOCATING: Configuring.
ALLOCATED: Configured.
ALTERING: Modifying.
DELETING: Deleting.
DELETED: Deleted.
COMFIRMING: To be accepted.
REJECTED: Rejected.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Connection owner, i.e., developer account ID.
         * @type {string || null}
         */
        this.DirectConnectOwnerAccount = null;

        /**
         * Dedicated tunnel owner, i.e., developer account ID.
         * @type {string || null}
         */
        this.OwnerAccount = null;

        /**
         * Network type. Valid values: VPC, BMVPC, CCN.
 VPC: Virtual Private Cloud; BMVPC: BM VPC; CCN: Cloud Connect Network.
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * Network of the VPC region, such as `ap-guangzhou`.
         * @type {string || null}
         */
        this.NetworkRegion = null;

        /**
         * Unified VPC ID or BMVPC ID.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Direct connect gateway ID.
         * @type {string || null}
         */
        this.DirectConnectGatewayId = null;

        /**
         * BGP: BGP routing; STATIC: Static routing. Default value: BGP routing.
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * User-side BGP, including Asn and AuthKey.
         * @type {BgpPeer || null}
         */
        this.BgpPeer = null;

        /**
         * User-side IP range.
         * @type {Array.<RouteFilterPrefix> || null}
         */
        this.RouteFilterPrefixes = null;

        /**
         * VLAN of a dedicated tunnel.
         * @type {number || null}
         */
        this.Vlan = null;

        /**
         * TencentAddress: Tencent-side IP address.
         * @type {string || null}
         */
        this.TencentAddress = null;

        /**
         * CustomerAddress: User-side IP address.
         * @type {string || null}
         */
        this.CustomerAddress = null;

        /**
         * Dedicated tunnel name.
         * @type {string || null}
         */
        this.DirectConnectTunnelName = null;

        /**
         * Creation time of a dedicated tunnel.
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Bandwidth value of a dedicated tunnel.
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Tag value of a dedicated tunnel.
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * Associated custom network probe ID
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NetDetectId = null;

        /**
         * BGP community switch
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.EnableBGPCommunity = null;

        /**
         * Whether it is a NAT tunnel
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NatType = null;

        /**
         * VPC region abbreviation, such as `gz`, `cd`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcRegion = null;

        /**
         * Whether to enable BFD
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BfdEnable = null;

        /**
         * Access point type of a dedicated tunnel.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccessPointType = null;

        /**
         * Direct connect gateway name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DirectConnectGatewayName = null;

        /**
         * VPC name.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * Backup IP address on the Tencent side.
         * @type {string || null}
         */
        this.TencentBackupAddress = null;

        /**
         * Whether the connection associated with the dedicated tunnel has the service agreement signed.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {boolean || null}
         */
        this.SignLaw = null;

        /**
         * Cloud Attached Connection Service ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CloudAttachId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.State = 'State' in params ? params.State : null;
        this.DirectConnectOwnerAccount = 'DirectConnectOwnerAccount' in params ? params.DirectConnectOwnerAccount : null;
        this.OwnerAccount = 'OwnerAccount' in params ? params.OwnerAccount : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.NetworkRegion = 'NetworkRegion' in params ? params.NetworkRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.EnableBGPCommunity = 'EnableBGPCommunity' in params ? params.EnableBGPCommunity : null;
        this.NatType = 'NatType' in params ? params.NatType : null;
        this.VpcRegion = 'VpcRegion' in params ? params.VpcRegion : null;
        this.BfdEnable = 'BfdEnable' in params ? params.BfdEnable : null;
        this.AccessPointType = 'AccessPointType' in params ? params.AccessPointType : null;
        this.DirectConnectGatewayName = 'DirectConnectGatewayName' in params ? params.DirectConnectGatewayName : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;
        this.CloudAttachId = 'CloudAttachId' in params ? params.CloudAttachId : null;

    }
}

/**
 * DisableInternetAddress request structure.
 * @class
 */
class DisableInternetAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the internet tunnel’s public IP address
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

module.exports = {
    DescribeInternetAddressQuotaRequest: DescribeInternetAddressQuotaRequest,
    BgpPeer: BgpPeer,
    RejectDirectConnectTunnelRequest: RejectDirectConnectTunnelRequest,
    Coordinate: Coordinate,
    DeleteDirectConnectTunnelRequest: DeleteDirectConnectTunnelRequest,
    CreateDirectConnectResponse: CreateDirectConnectResponse,
    DirectConnect: DirectConnect,
    InternetAddressDetail: InternetAddressDetail,
    DescribeAccessPointsResponse: DescribeAccessPointsResponse,
    AcceptDirectConnectTunnelResponse: AcceptDirectConnectTunnelResponse,
    DescribeDirectConnectTunnelsRequest: DescribeDirectConnectTunnelsRequest,
    ReleaseInternetAddressRequest: ReleaseInternetAddressRequest,
    ModifyDirectConnectTunnelAttributeResponse: ModifyDirectConnectTunnelAttributeResponse,
    RouteFilterPrefix: RouteFilterPrefix,
    ApplyInternetAddressResponse: ApplyInternetAddressResponse,
    AcceptDirectConnectTunnelRequest: AcceptDirectConnectTunnelRequest,
    Tag: Tag,
    CreateDirectConnectTunnelRequest: CreateDirectConnectTunnelRequest,
    DeleteDirectConnectResponse: DeleteDirectConnectResponse,
    EnableInternetAddressResponse: EnableInternetAddressResponse,
    ApplyInternetAddressRequest: ApplyInternetAddressRequest,
    DescribeDirectConnectsResponse: DescribeDirectConnectsResponse,
    DescribeAccessPointsRequest: DescribeAccessPointsRequest,
    DescribeDirectConnectsRequest: DescribeDirectConnectsRequest,
    ModifyDirectConnectTunnelAttributeRequest: ModifyDirectConnectTunnelAttributeRequest,
    ModifyDirectConnectAttributeRequest: ModifyDirectConnectAttributeRequest,
    DescribeInternetAddressResponse: DescribeInternetAddressResponse,
    Filter: Filter,
    DisableInternetAddressResponse: DisableInternetAddressResponse,
    DescribeInternetAddressStatisticsRequest: DescribeInternetAddressStatisticsRequest,
    InternetAddressStatistics: InternetAddressStatistics,
    CreateDirectConnectRequest: CreateDirectConnectRequest,
    EnableInternetAddressRequest: EnableInternetAddressRequest,
    ModifyDirectConnectAttributeResponse: ModifyDirectConnectAttributeResponse,
    RejectDirectConnectTunnelResponse: RejectDirectConnectTunnelResponse,
    CreateDirectConnectTunnelResponse: CreateDirectConnectTunnelResponse,
    DeleteDirectConnectTunnelResponse: DeleteDirectConnectTunnelResponse,
    BFDInfo: BFDInfo,
    DeleteDirectConnectRequest: DeleteDirectConnectRequest,
    DescribeDirectConnectTunnelsResponse: DescribeDirectConnectTunnelsResponse,
    AccessPoint: AccessPoint,
    DescribeInternetAddressStatisticsResponse: DescribeInternetAddressStatisticsResponse,
    NQAInfo: NQAInfo,
    DescribeInternetAddressRequest: DescribeInternetAddressRequest,
    DescribeInternetAddressQuotaResponse: DescribeInternetAddressQuotaResponse,
    ReleaseInternetAddressResponse: ReleaseInternetAddressResponse,
    DirectConnectTunnel: DirectConnectTunnel,
    DisableInternetAddressRequest: DisableInternetAddressRequest,

}
