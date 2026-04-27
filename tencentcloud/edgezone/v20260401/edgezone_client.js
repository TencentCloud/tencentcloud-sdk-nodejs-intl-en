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
const TerminateInstancesRequest = models.TerminateInstancesRequest;
const DescribeInstanceTypesResponse = models.DescribeInstanceTypesResponse;
const DescribePrivateNetworkInstancesRequest = models.DescribePrivateNetworkInstancesRequest;
const DescribePublicNetworkInstancesResponse = models.DescribePublicNetworkInstancesResponse;
const DeletePublicNetworkInstanceRequest = models.DeletePublicNetworkInstanceRequest;
const TerminateInstancesResponse = models.TerminateInstancesResponse;
const CreateInstancesRequest = models.CreateInstancesRequest;
const DescribeInstanceTypesRequest = models.DescribeInstanceTypesRequest;
const PrivateNetworkInstanceInfo = models.PrivateNetworkInstanceInfo;
const IpInfo = models.IpInfo;
const DeletePublicNetworkInstanceResponse = models.DeletePublicNetworkInstanceResponse;
const ModifyPublicNetworkInstanceResponse = models.ModifyPublicNetworkInstanceResponse;
const CreatePrivateNetworkInstanceRequest = models.CreatePrivateNetworkInstanceRequest;
const ModifyPrivateNetworkInstanceRequest = models.ModifyPrivateNetworkInstanceRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DescribePublicNetworkInstancesRequest = models.DescribePublicNetworkInstancesRequest;
const InstanceTypeQuota = models.InstanceTypeQuota;
const ModifyPublicNetworkInstanceRequest = models.ModifyPublicNetworkInstanceRequest;
const ReleasePublicIpRequest = models.ReleasePublicIpRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const PublicNetworkSegment = models.PublicNetworkSegment;
const ReleasePublicIpResponse = models.ReleasePublicIpResponse;
const DescribeZoneDataResponse = models.DescribeZoneDataResponse;
const DeletePrivateNetworkInstanceRequest = models.DeletePrivateNetworkInstanceRequest;
const DescribePrivateNetworkInstancesResponse = models.DescribePrivateNetworkInstancesResponse;
const CreatePrivateNetworkInstanceResponse = models.CreatePrivateNetworkInstanceResponse;
const ModifyInstanceAttributeRequest = models.ModifyInstanceAttributeRequest;
const ApplyPublicIpsRequest = models.ApplyPublicIpsRequest;
const DescribePublicIpsResponse = models.DescribePublicIpsResponse;
const DeletePrivateNetworkInstanceResponse = models.DeletePrivateNetworkInstanceResponse;
const ModifyPrivateNetworkInstanceResponse = models.ModifyPrivateNetworkInstanceResponse;
const ApplyPublicIpsResponse = models.ApplyPublicIpsResponse;
const SwitchData = models.SwitchData;
const CreateInstancesResponse = models.CreateInstancesResponse;
const Instance = models.Instance;
const ZoneInfo = models.ZoneInfo;
const ModifyInstanceAttributeResponse = models.ModifyInstanceAttributeResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const PublicNetworkInstanceInfo = models.PublicNetworkInstanceInfo;
const CreatePublicNetworkInstanceRequest = models.CreatePublicNetworkInstanceRequest;
const FailedInstance = models.FailedInstance;
const CreatePublicNetworkInstanceResponse = models.CreatePublicNetworkInstanceResponse;
const DescribeZoneDataRequest = models.DescribeZoneDataRequest;
const DescribePublicIpsRequest = models.DescribePublicIpsRequest;


/**
 * edgezone client
 * @class
 */
class EdgezoneClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("edgezone.intl.tencentcloudapi.com", "2026-04-01", credential, region, profile);
    }
    
    /**
     * Create a private network instance. A user can only create one private network instance in an availability zone. The subnet range is collectively determined by both parameters: Network (network number) and Mask (bit number of the mask). Network must be a valid network address from one of the three RFC 1918 private address ranges: 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16, and all host bits must be 0 (meaning the combination of Network and Mask cannot have any host bits set, such as 10.0.0.1/24 is illegal, use 10.0.0.0/24 instead). The maximum Mask is unified as 28, and the minimum is determined by the address range it belongs to: 10.x.x.x allows 8–28, 172.16.x.x allows 12–28, and 192.168.x.x allows 16–28.
     * @param {CreatePrivateNetworkInstanceRequest} req
     * @param {function(string, CreatePrivateNetworkInstanceResponse):void} cb
     * @public
     */
    CreatePrivateNetworkInstance(req, cb) {
        let resp = new CreatePrivateNetworkInstanceResponse();
        this.request("CreatePrivateNetworkInstance", req, resp, cb);
    }

    /**
     * This API is used to query physical machine instance list, support by instance ID, instance name, availability zone, instance status with conditional filtering, and support paging query.
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * Query the public network Ip information of the user. For public network instances with routing mode set to Static, return all applied public network Ip information. For public network instances with routing mode set to Ospf and Bgp, return Ip range information directly.
     * @param {DescribePublicIpsRequest} req
     * @param {function(string, DescribePublicIpsResponse):void} cb
     * @public
     */
    DescribePublicIps(req, cb) {
        let resp = new DescribePublicIpsResponse();
        this.request("DescribePublicIps", req, resp, cb);
    }

    /**
     * Delete a private network instance
     * @param {DeletePrivateNetworkInstanceRequest} req
     * @param {function(string, DeletePrivateNetworkInstanceResponse):void} cb
     * @public
     */
    DeletePrivateNetworkInstance(req, cb) {
        let resp = new DeletePrivateNetworkInstanceResponse();
        this.request("DeletePrivateNetworkInstance", req, resp, cb);
    }

    /**
     * This API is used to terminate a physical machine instance and free up resources. It synchronously releases network resources (IP recycling) and updates status to terminating, while performing disk cleanup asynchronously in the background. It supports partially successful operations.
     * @param {TerminateInstancesRequest} req
     * @param {function(string, TerminateInstancesResponse):void} cb
     * @public
     */
    TerminateInstances(req, cb) {
        let resp = new TerminateInstancesResponse();
        this.request("TerminateInstances", req, resp, cb);
    }

    /**
     * Batch release IPv4 addresses assigned to STATIC public network instances but not bound to physical servers
This API is applicable only to STATIC mode instances. The CIDR of BGP/OSPF instances is automatically returned during deletion with no need to manually release single IP addresses.
     * @param {ReleasePublicIpRequest} req
     * @param {function(string, ReleasePublicIpResponse):void} cb
     * @public
     */
    ReleasePublicIp(req, cb) {
        let resp = new ReleasePublicIpResponse();
        this.request("ReleasePublicIp", req, resp, cb);
    }

    /**
     * Query private network instances, support through parameters such as private network instance ID, instance name, and availability zone id.
     * @param {DescribePrivateNetworkInstancesRequest} req
     * @param {function(string, DescribePrivateNetworkInstancesResponse):void} cb
     * @public
     */
    DescribePrivateNetworkInstances(req, cb) {
        let resp = new DescribePrivateNetworkInstancesResponse();
        this.request("DescribePrivateNetworkInstances", req, resp, cb);
    }

    /**
     * Modify public network instance info
     * @param {DeletePublicNetworkInstanceRequest} req
     * @param {function(string, DeletePublicNetworkInstanceResponse):void} cb
     * @public
     */
    DeletePublicNetworkInstance(req, cb) {
        let resp = new DeletePublicNetworkInstanceResponse();
        this.request("DeletePublicNetworkInstance", req, resp, cb);
    }

    /**
     * Cross-regional aggregate query returns the AZ list for the specified AppId in ALL configured regions. The local region directly performs a database query, while remote regions send HTTP requests to each region's DescribeAppZones API and merge the results.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to query the model quota list under the account by availability zone dimensionality based on AppId. If a Zone is input, it returns the model quota under the designated availability zone. If not, it returns the model quota of all AZs under the account.
     * @param {DescribeInstanceTypesRequest} req
     * @param {function(string, DescribeInstanceTypesResponse):void} cb
     * @public
     */
    DescribeInstanceTypes(req, cb) {
        let resp = new DescribeInstanceTypesResponse();
        this.request("DescribeInstanceTypes", req, resp, cb);
    }

    /**
     * This API is used to submit a request for multiple IP addresses from the static IP pool to specify a public network instance (random allocation). Need to check user quota before applying.
This API is applicable only to public network instances with `RouteMode=static`. Calling this API for BGP/OSPF instances will return an error.
     * @param {ApplyPublicIpsRequest} req
     * @param {function(string, ApplyPublicIpsResponse):void} cb
     * @public
     */
    ApplyPublicIps(req, cb) {
        let resp = new ApplyPublicIpsResponse();
        this.request("ApplyPublicIps", req, resp, cb);
    }

    /**
     * Modify private network instance info
     * @param {ModifyPrivateNetworkInstanceRequest} req
     * @param {function(string, ModifyPrivateNetworkInstanceResponse):void} cb
     * @public
     */
    ModifyPrivateNetworkInstance(req, cb) {
        let resp = new ModifyPrivateNetworkInstanceResponse();
        this.request("ModifyPrivateNetworkInstance", req, resp, cb);
    }

    /**
     * This API is used to create a physical machine instance. The system automatically allocates physical machine resources and completes installation. If the user is not in the current availability zone, the system automatically enables billing. It supports concurrent allocation of physical machine resources and async execution of network assignment and installation tasks.
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        let resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }

    /**
     * This API is used to modify the attributes of a physical machine instance, supporting modification of the instance name and update of the public IP address (IPv4/IPv6). At least one of InstanceName and NewPublicIp must be input.
     * @param {ModifyInstanceAttributeRequest} req
     * @param {function(string, ModifyInstanceAttributeResponse):void} cb
     * @public
     */
    ModifyInstanceAttribute(req, cb) {
        let resp = new ModifyInstanceAttributeResponse();
        this.request("ModifyInstanceAttribute", req, resp, cb);
    }

    /**
     * Query statistics by metric name. Data is aggregated at 1-minute intervals.
     * @param {DescribeZoneDataRequest} req
     * @param {function(string, DescribeZoneDataResponse):void} cb
     * @public
     */
    DescribeZoneData(req, cb) {
        let resp = new DescribeZoneDataResponse();
        this.request("DescribeZoneData", req, resp, cb);
    }

    /**
     * Query public network instance list, support conditional filtering by instance ID, instance name, availability zone, and support paging query.
     * @param {DescribePublicNetworkInstancesRequest} req
     * @param {function(string, DescribePublicNetworkInstancesResponse):void} cb
     * @public
     */
    DescribePublicNetworkInstances(req, cb) {
        let resp = new DescribePublicNetworkInstancesResponse();
        this.request("DescribePublicNetworkInstances", req, resp, cb);
    }

    /**
     * Modify public network instance info
     * @param {ModifyPublicNetworkInstanceRequest} req
     * @param {function(string, ModifyPublicNetworkInstanceResponse):void} cb
     * @public
     */
    ModifyPublicNetworkInstance(req, cb) {
        let resp = new ModifyPublicNetworkInstanceResponse();
        this.request("ModifyPublicNetworkInstance", req, resp, cb);
    }

    /**
     * The user inputs the availability zone ID, public network instance name, network line, and routing mode to create a public network instance. A user can only create one public network instance in an availability zone.
Public network instances in **static** routing mode require users to proactively apply for and release public IP addresses.
Public network instances with routing mode set to **OSPF, BGP** automatically allocate public IP ranges when creating and auto release public IP ranges upon termination.
     * @param {CreatePublicNetworkInstanceRequest} req
     * @param {function(string, CreatePublicNetworkInstanceResponse):void} cb
     * @public
     */
    CreatePublicNetworkInstance(req, cb) {
        let resp = new CreatePublicNetworkInstanceResponse();
        this.request("CreatePublicNetworkInstance", req, resp, cb);
    }


}
module.exports = EdgezoneClient;
