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
         * Circuit code of connection, which is provided by the ISP or connection provider.
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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
         * @type {string || null}
         */
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
         * Local IDC location.
         * @type {string || null}
         */
        this.Location = null;

        /**
         * Port type of connection. Valid values: 100Base-T (100-Megabit electrical Ethernet interface), 1000Base-T (1-Gigabit electrical Ethernet interface), 1000Base-LX (1-Gigabit single-module optical Ethernet interface; 10 KM), 10GBase-T (10-Gigabit electrical Ethernet interface), 10GBase-LR (10-Gigabit single-module optical Ethernet interface; 10 KM). Default value: 1000Base-LX.
         * @type {string || null}
         */
        this.PortType = null;

        /**
         * Circuit code of connection, which is provided by the ISP or connection provider.
         * @type {string || null}
         */
        this.CircuitCode = null;

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
        this.Location = 'Location' in params ? params.Location : null;
        this.PortType = 'PortType' in params ? params.PortType : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
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
 * Dedicated tunnel information list
 * @class
 */
class DirectConnectTunnel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dedicated tunnel ID
         * @type {string || null}
         */
        this.DirectConnectTunnelId = null;

        /**
         * Connection ID.
         * @type {string || null}
         */
        this.DirectConnectId = null;

        /**
         * Dedicated tunnel status
AVAILABLE: ready or connected
PENDING: applying
ALLOCATING: configuring
ALLOCATED: configured
ALTERING: modifying
DELETING: deleting
DELETED: deleted
CONFIRMING: to be accepted
REJECTED: rejected
         * @type {string || null}
         */
        this.State = null;

        /**
         * Connection owner, i.e., developer account ID.
         * @type {string || null}
         */
        this.DirectConnectOwnerAccount = null;

        /**
         * Dedicated tunnel owner, i.e., developer account ID
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
         * Dedicated tunnel `Vlan`
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
         * Dedicated tunnel name
         * @type {string || null}
         */
        this.DirectConnectTunnelName = null;

        /**
         * Dedicated tunnel creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Dedicated tunnel bandwidth value
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * Dedicated tunnel tag value
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
         * Dedicated tunnel access point type
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
         * TencentBackupAddress, i.e., Tencent-side standby IP address
Note: this field may return null, indicating that no valid values can be obtained.
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

    }
}

module.exports = {
    BgpPeer: BgpPeer,
    RejectDirectConnectTunnelRequest: RejectDirectConnectTunnelRequest,
    ModifyDirectConnectAttributeRequest: ModifyDirectConnectAttributeRequest,
    DeleteDirectConnectTunnelRequest: DeleteDirectConnectTunnelRequest,
    CreateDirectConnectResponse: CreateDirectConnectResponse,
    DirectConnect: DirectConnect,
    DescribeAccessPointsResponse: DescribeAccessPointsResponse,
    AcceptDirectConnectTunnelResponse: AcceptDirectConnectTunnelResponse,
    DescribeDirectConnectTunnelsRequest: DescribeDirectConnectTunnelsRequest,
    ModifyDirectConnectTunnelAttributeResponse: ModifyDirectConnectTunnelAttributeResponse,
    RouteFilterPrefix: RouteFilterPrefix,
    AcceptDirectConnectTunnelRequest: AcceptDirectConnectTunnelRequest,
    CreateDirectConnectTunnelRequest: CreateDirectConnectTunnelRequest,
    DeleteDirectConnectResponse: DeleteDirectConnectResponse,
    DescribeDirectConnectsResponse: DescribeDirectConnectsResponse,
    DescribeAccessPointsRequest: DescribeAccessPointsRequest,
    DescribeDirectConnectsRequest: DescribeDirectConnectsRequest,
    ModifyDirectConnectTunnelAttributeRequest: ModifyDirectConnectTunnelAttributeRequest,
    Filter: Filter,
    CreateDirectConnectRequest: CreateDirectConnectRequest,
    ModifyDirectConnectAttributeResponse: ModifyDirectConnectAttributeResponse,
    RejectDirectConnectTunnelResponse: RejectDirectConnectTunnelResponse,
    CreateDirectConnectTunnelResponse: CreateDirectConnectTunnelResponse,
    DeleteDirectConnectTunnelResponse: DeleteDirectConnectTunnelResponse,
    AccessPoint: AccessPoint,
    DeleteDirectConnectRequest: DeleteDirectConnectRequest,
    DescribeDirectConnectTunnelsResponse: DescribeDirectConnectTunnelsResponse,
    Tag: Tag,
    DirectConnectTunnel: DirectConnectTunnel,

}
