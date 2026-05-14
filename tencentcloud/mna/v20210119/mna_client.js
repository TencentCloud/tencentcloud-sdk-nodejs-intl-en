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
const DeleteL3ConnResponse = models.DeleteL3ConnResponse;
const GetDeviceResponse = models.GetDeviceResponse;
const GetMultiFlowStatisticResponse = models.GetMultiFlowStatisticResponse;
const OrderInfo = models.OrderInfo;
const FlowDetails = models.FlowDetails;
const UpdateApplicationKeyResponse = models.UpdateApplicationKeyResponse;
const UpdateL3ConnResponse = models.UpdateL3ConnResponse;
const UpdateHardwareResponse = models.UpdateHardwareResponse;
const UpdateNetInfo = models.UpdateNetInfo;
const UpdateL3SwitchRequest = models.UpdateL3SwitchRequest;
const AddL3ConnRequest = models.AddL3ConnRequest;
const OrderPerLicenseResponse = models.OrderPerLicenseResponse;
const GetFlowPackagesRequest = models.GetFlowPackagesRequest;
const SetNotifyUrlResponse = models.SetNotifyUrlResponse;
const UpdateL3CidrResponse = models.UpdateL3CidrResponse;
const UpdateApplicationKeyRequest = models.UpdateApplicationKeyRequest;
const AddApplicationRequest = models.AddApplicationRequest;
const ModifyPackageRenewFlagRequest = models.ModifyPackageRenewFlagRequest;
const GetFlowPackagesResponse = models.GetFlowPackagesResponse;
const ReportOrderRequest = models.ReportOrderRequest;
const DeleteL3ConnRequest = models.DeleteL3ConnRequest;
const DelApplicationList = models.DelApplicationList;
const GetVendorHardwareResponse = models.GetVendorHardwareResponse;
const GetApplicationResponse = models.GetApplicationResponse;
const GetActiveDeviceCountResponse = models.GetActiveDeviceCountResponse;
const DestIpInfo = models.DestIpInfo;
const DeviceBaseInfo = models.DeviceBaseInfo;
const AddGroupRequest = models.AddGroupRequest;
const GetGroupListRequest = models.GetGroupListRequest;
const HardwareInfo = models.HardwareInfo;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const GetGroupDetailRequest = models.GetGroupDetailRequest;
const GroupDeleteDeviceResponse = models.GroupDeleteDeviceResponse;
const GroupAddDeviceRequest = models.GroupAddDeviceRequest;
const GetStatisticDataResponse = models.GetStatisticDataResponse;
const UpdateApplicationInfoRequest = models.UpdateApplicationInfoRequest;
const GetPublicKeyRequest = models.GetPublicKeyRequest;
const GetHardwareInfoRequest = models.GetHardwareInfoRequest;
const GetFlowStatisticByGroupResponse = models.GetFlowStatisticByGroupResponse;
const GetNetMonitorResponse = models.GetNetMonitorResponse;
const GetFlowStatisticByNameResponse = models.GetFlowStatisticByNameResponse;
const ReportOrderResponse = models.ReportOrderResponse;
const GetFlowAlarmInfoRequest = models.GetFlowAlarmInfoRequest;
const GetVendorHardwareRequest = models.GetVendorHardwareRequest;
const CreateEncryptedKeyRequest = models.CreateEncryptedKeyRequest;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const DeleteGroupRequest = models.DeleteGroupRequest;
const CreateEncryptedKeyResponse = models.CreateEncryptedKeyResponse;
const UpdateL3SwitchResponse = models.UpdateL3SwitchResponse;
const GetL3ConnListResponse = models.GetL3ConnListResponse;
const GroupInfo = models.GroupInfo;
const AddApplicationResponse = models.AddApplicationResponse;
const ModifyPackageRenewFlagResponse = models.ModifyPackageRenewFlagResponse;
const GetDestIPByNameResponse = models.GetDestIPByNameResponse;
const VendorHardware = models.VendorHardware;
const GetDeviceRequest = models.GetDeviceRequest;
const ActivateHardwareResponse = models.ActivateHardwareResponse;
const GetFlowStatisticByGroupRequest = models.GetFlowStatisticByGroupRequest;
const GetDevicesResponse = models.GetDevicesResponse;
const AddL3ConnResponse = models.AddL3ConnResponse;
const GetDestIPByNameRequest = models.GetDestIPByNameRequest;
const GetDevicesRequest = models.GetDevicesRequest;
const GetStatisticDataByNameRequest = models.GetStatisticDataByNameRequest;
const SetNotifyUrlRequest = models.SetNotifyUrlRequest;
const GetDevicePayModeRequest = models.GetDevicePayModeRequest;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const SlotNetInfo = models.SlotNetInfo;
const DeviceNetInfo = models.DeviceNetInfo;
const NetDetails = models.NetDetails;
const ActivateHardware = models.ActivateHardware;
const DownloadActiveDeviceCountResponse = models.DownloadActiveDeviceCountResponse;
const GetHardwareListRequest = models.GetHardwareListRequest;
const GetFlowStatisticByNameRequest = models.GetFlowStatisticByNameRequest;
const DeviceDetails = models.DeviceDetails;
const GroupDeleteDeviceRequest = models.GroupDeleteDeviceRequest;
const GetHardwareInfoResponse = models.GetHardwareInfoResponse;
const GetFlowStatisticByRegionResponse = models.GetFlowStatisticByRegionResponse;
const ActiveDeviceList = models.ActiveDeviceList;
const GetMultiFlowStatisticRequest = models.GetMultiFlowStatisticRequest;
const GetFlowAlarmInfoResponse = models.GetFlowAlarmInfoResponse;
const GetFlowStatisticByRegionRequest = models.GetFlowStatisticByRegionRequest;
const OrderFlowPackageRequest = models.OrderFlowPackageRequest;
const GetGroupDetailResponse = models.GetGroupDetailResponse;
const UpdateGroupResponse = models.UpdateGroupResponse;
const GetL3ConnListRequest = models.GetL3ConnListRequest;
const FlowPackageInfo = models.FlowPackageInfo;
const DownloadActiveDeviceCountRequest = models.DownloadActiveDeviceCountRequest;
const GetHardwareListResponse = models.GetHardwareListResponse;
const AddDeviceRequest = models.AddDeviceRequest;
const GetNetMonitorByNameResponse = models.GetNetMonitorByNameResponse;
const OrderPerLicenseRequest = models.OrderPerLicenseRequest;
const UpdateGroupRequest = models.UpdateGroupRequest;
const GetFlowStatisticResponse = models.GetFlowStatisticResponse;
const UpdateHardwareRequest = models.UpdateHardwareRequest;
const GetNetMonitorRequest = models.GetNetMonitorRequest;
const GetNetMonitorByNameRequest = models.GetNetMonitorByNameRequest;
const GetGroupListResponse = models.GetGroupListResponse;
const UpdateApplicationInfoResponse = models.UpdateApplicationInfoResponse;
const OrderFlowPackageResponse = models.OrderFlowPackageResponse;
const UpdateDeviceResponse = models.UpdateDeviceResponse;
const L3ConnInfo = models.L3ConnInfo;
const ActivateHardwareRequest = models.ActivateHardwareRequest;
const GetMonitorDataByNameResponse = models.GetMonitorDataByNameResponse;
const GroupAddDeviceResponse = models.GroupAddDeviceResponse;
const GetStatisticDataRequest = models.GetStatisticDataRequest;
const GetApplicationRequest = models.GetApplicationRequest;
const UpdateDeviceRequest = models.UpdateDeviceRequest;
const DeleteGroupResponse = models.DeleteGroupResponse;
const GetPublicKeyResponse = models.GetPublicKeyResponse;
const GetStatisticDataByNameResponse = models.GetStatisticDataByNameResponse;
const AddHardwareResponse = models.AddHardwareResponse;
const GetFlowStatisticRequest = models.GetFlowStatisticRequest;
const AddDeviceResponse = models.AddDeviceResponse;
const GetDevicePayModeResponse = models.GetDevicePayModeResponse;
const GetActiveDeviceCountRequest = models.GetActiveDeviceCountRequest;
const GetMonitorDataByNameRequest = models.GetMonitorDataByNameRequest;
const UpdateL3ConnRequest = models.UpdateL3ConnRequest;
const DevicePayModeInfo = models.DevicePayModeInfo;
const MonitorData = models.MonitorData;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const AddHardwareRequest = models.AddHardwareRequest;
const Hardware = models.Hardware;
const UpdateL3CidrRequest = models.UpdateL3CidrRequest;
const AddGroupResponse = models.AddGroupResponse;


/**
 * mna client
 * @class
 */
class MnaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mna.intl.tencentcloudapi.com", "2021-01-19", credential, region, profile);
    }
    
    /**
     * This API is used to set user traffic alarm information. Use this API setting to configure the data transfer plan alarm threshold as well as the callback url and key when an alarm is generated.
     * @param {SetNotifyUrlRequest} req
     * @param {function(string, SetNotifyUrlResponse):void} cb
     * @public
     */
    SetNotifyUrl(req, cb) {
        let resp = new SetNotifyUrlResponse();
        this.request("SetNotifyUrl", req, resp, cb);
    }

    /**
     * Refresh hardware info
     * @param {UpdateHardwareRequest} req
     * @param {function(string, UpdateHardwareResponse):void} cb
     * @public
     */
    UpdateHardware(req, cb) {
        let resp = new UpdateHardwareResponse();
        this.request("UpdateHardware", req, resp, cb);
    }

    /**
     * This API is used to query applications.
     * @param {GetApplicationRequest} req
     * @param {function(string, GetApplicationResponse):void} cb
     * @public
     */
    GetApplication(req, cb) {
        let resp = new GetApplicationResponse();
        this.request("GetApplication", req, resp, cb);
    }

    /**
     * Auto renewal of data transfer plans can be enabled or disabled, unaffected by ongoing effective plans in the current cycle.
     * @param {ModifyPackageRenewFlagRequest} req
     * @param {function(string, ModifyPackageRenewFlagResponse):void} cb
     * @public
     */
    ModifyPackageRenewFlag(req, cb) {
        let resp = new ModifyPackageRenewFlagResponse();
        this.request("ModifyPackageRenewFlag", req, resp, cb);
    }

    /**
     * Retrieve traffic usage data for a specified device Id at a specified time point.
     * @param {GetFlowStatisticRequest} req
     * @param {function(string, GetFlowStatisticResponse):void} cb
     * @public
     */
    GetFlowStatistic(req, cb) {
        let resp = new GetFlowStatisticResponse();
        this.request("GetFlowStatistic", req, resp, cb);
    }

    /**
     * Retrieve traffic usage data for the specified group and time period
     * @param {GetFlowStatisticByGroupRequest} req
     * @param {function(string, GetFlowStatisticByGroupResponse):void} cb
     * @public
     */
    GetFlowStatisticByGroup(req, cb) {
        let resp = new GetFlowStatisticByGroupResponse();
        this.request("GetFlowStatisticByGroup", req, resp, cb);
    }

    /**
     * Obtain batch device traffic statistics curves
     * @param {GetMultiFlowStatisticRequest} req
     * @param {function(string, GetMultiFlowStatisticResponse):void} cb
     * @public
     */
    GetMultiFlowStatistic(req, cb) {
        let resp = new GetMultiFlowStatisticResponse();
        this.request("GetMultiFlowStatistic", req, resp, cb);
    }

    /**
     * This API is used to get device information list.
     * @param {GetDevicesRequest} req
     * @param {function(string, GetDevicesResponse):void} cb
     * @public
     */
    GetDevices(req, cb) {
        let resp = new GetDevicesResponse();
        this.request("GetDevices", req, resp, cb);
    }

    /**
     * This API is used to access the public key for signature verification.
     * @param {GetPublicKeyRequest} req
     * @param {function(string, GetPublicKeyResponse):void} cb
     * @public
     */
    GetPublicKey(req, cb) {
        let resp = new GetPublicKeyResponse();
        this.request("GetPublicKey", req, resp, cb);
    }

    /**
     * Update application information
     * @param {UpdateApplicationInfoRequest} req
     * @param {function(string, UpdateApplicationInfoResponse):void} cb
     * @public
     */
    UpdateApplicationInfo(req, cb) {
        let resp = new UpdateApplicationInfoResponse();
        this.request("UpdateApplicationInfo", req, resp, cb);
    }

    /**
     * Add device to already exist group
     * @param {GroupAddDeviceRequest} req
     * @param {function(string, GroupAddDeviceResponse):void} cb
     * @public
     */
    GroupAddDevice(req, cb) {
        let resp = new GroupAddDeviceResponse();
        this.request("GroupAddDevice", req, resp, cb);
    }

    /**
     * This API is used to delete applications
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        let resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
    }

    /**
     * Activate hardware device
     * @param {ActivateHardwareRequest} req
     * @param {function(string, ActivateHardwareResponse):void} cb
     * @public
     */
    ActivateHardware(req, cb) {
        let resp = new ActivateHardwareResponse();
        this.request("ActivateHardware", req, resp, cb);
    }

    /**
     * Retrieve the data transfer plan list
     * @param {GetFlowPackagesRequest} req
     * @param {function(string, GetFlowPackagesResponse):void} cb
     * @public
     */
    GetFlowPackages(req, cb) {
        let resp = new GetFlowPackagesResponse();
        this.request("GetFlowPackages", req, resp, cb);
    }

    /**
     * Add hardware devices, generate inactive hardware devices, and support batch addition
     * @param {AddHardwareRequest} req
     * @param {function(string, AddHardwareResponse):void} cb
     * @public
     */
    AddHardware(req, cb) {
        let resp = new AddHardwareResponse();
        this.request("AddHardware", req, resp, cb);
    }

    /**
     * This API is used to search device details by specified device ID.
     * @param {GetDeviceRequest} req
     * @param {function(string, GetDeviceResponse):void} cb
     * @public
     */
    GetDevice(req, cb) {
        let resp = new GetDeviceResponse();
        this.request("GetDevice", req, resp, cb);
    }

    /**
     * Statistics of a single device accessing the target IP address
     * @param {GetDestIPByNameRequest} req
     * @param {function(string, GetDestIPByNameResponse):void} cb
     * @public
     */
    GetDestIPByName(req, cb) {
        let resp = new GetDestIPByNameResponse();
        this.request("GetDestIPByName", req, resp, cb);
    }

    /**
     * Delete an interconnection rule
     * @param {DeleteL3ConnRequest} req
     * @param {function(string, DeleteL3ConnResponse):void} cb
     * @public
     */
    DeleteL3Conn(req, cb) {
        let resp = new DeleteL3ConnResponse();
        this.request("DeleteL3Conn", req, resp, cb);
    }

    /**
     * Delete group
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * This API is used to create an application
     * @param {AddApplicationRequest} req
     * @param {function(string, AddApplicationResponse):void} cb
     * @public
     */
    AddApplication(req, cb) {
        let resp = new AddApplicationResponse();
        this.request("AddApplication", req, resp, cb);
    }

    /**
     * Number of active devices statistics
     * @param {GetActiveDeviceCountRequest} req
     * @param {function(string, GetActiveDeviceCountResponse):void} cb
     * @public
     */
    GetActiveDeviceCount(req, cb) {
        let resp = new GetActiveDeviceCountResponse();
        this.request("GetActiveDeviceCount", req, resp, cb);
    }

    /**
     * Update application key
     * @param {UpdateApplicationKeyRequest} req
     * @param {function(string, UpdateApplicationKeyResponse):void} cb
     * @public
     */
    UpdateApplicationKey(req, cb) {
        let resp = new UpdateApplicationKeyResponse();
        this.request("UpdateApplicationKey", req, resp, cb);
    }

    /**
     * Delete device info
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        let resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }

    /**
     * Update device information
     * @param {UpdateDeviceRequest} req
     * @param {function(string, UpdateDeviceResponse):void} cb
     * @public
     */
    UpdateDevice(req, cb) {
        let resp = new UpdateDeviceResponse();
        this.request("UpdateDevice", req, resp, cb);
    }

    /**
     * Purchase a single-use License
     * @param {OrderPerLicenseRequest} req
     * @param {function(string, OrderPerLicenseResponse):void} cb
     * @public
     */
    OrderPerLicense(req, cb) {
        let resp = new OrderPerLicenseResponse();
        this.request("OrderPerLicense", req, resp, cb);
    }

    /**
     * This API is used to obtain real-time traffic statistics per device.
     * @param {GetNetMonitorRequest} req
     * @param {function(string, GetNetMonitorResponse):void} cb
     * @public
     */
    GetNetMonitor(req, cb) {
        let resp = new GetNetMonitorResponse();
        this.request("GetNetMonitor", req, resp, cb);
    }

    /**
     * This API is used to obtain the payment mode of a device.
     * @param {GetDevicePayModeRequest} req
     * @param {function(string, GetDevicePayModeResponse):void} cb
     * @public
     */
    GetDevicePayMode(req, cb) {
        let resp = new GetDevicePayModeResponse();
        this.request("GetDevicePayMode", req, resp, cb);
    }

    /**
     * View group details
     * @param {GetGroupDetailRequest} req
     * @param {function(string, GetGroupDetailResponse):void} cb
     * @public
     */
    GetGroupDetail(req, cb) {
        let resp = new GetGroupDetailResponse();
        this.request("GetGroupDetail", req, resp, cb);
    }

    /**
     * Update the interconnection rule CIDR
     * @param {UpdateL3CidrRequest} req
     * @param {function(string, UpdateL3CidrResponse):void} cb
     * @public
     */
    UpdateL3Cidr(req, cb) {
        let resp = new UpdateL3CidrResponse();
        this.request("UpdateL3Cidr", req, resp, cb);
    }

    /**
     * Retrieve traffic usage data for a specified device Id at a specified time point.
     * @param {GetFlowStatisticByNameRequest} req
     * @param {function(string, GetFlowStatisticByNameResponse):void} cb
     * @public
     */
    GetFlowStatisticByName(req, cb) {
        let resp = new GetFlowStatisticByNameResponse();
        this.request("GetFlowStatisticByName", req, resp, cb);
    }

    /**
     * This API is used to get the hardware device list of the manufacturer.
     * @param {GetVendorHardwareRequest} req
     * @param {function(string, GetVendorHardwareResponse):void} cb
     * @public
     */
    GetVendorHardware(req, cb) {
        let resp = new GetVendorHardwareResponse();
        this.request("GetVendorHardware", req, resp, cb);
    }

    /**
     * This API is used to obtain real-time traffic statistics per device.
     * @param {GetNetMonitorByNameRequest} req
     * @param {function(string, GetNetMonitorByNameResponse):void} cb
     * @public
     */
    GetNetMonitorByName(req, cb) {
        let resp = new GetNetMonitorByNameResponse();
        this.request("GetNetMonitorByName", req, resp, cb);
    }

    /**
     * Create an interconnection rule
     * @param {AddL3ConnRequest} req
     * @param {function(string, AddL3ConnResponse):void} cb
     * @public
     */
    AddL3Conn(req, cb) {
        let resp = new AddL3ConnResponse();
        this.request("AddL3Conn", req, resp, cb);
    }

    /**
     * Download traffic data on the usage statistics page
     * @param {GetStatisticDataByNameRequest} req
     * @param {function(string, GetStatisticDataByNameResponse):void} cb
     * @public
     */
    GetStatisticDataByName(req, cb) {
        let resp = new GetStatisticDataByNameResponse();
        this.request("GetStatisticDataByName", req, resp, cb);
    }

    /**
     * This API is used to configure and refresh preset keys.
     * @param {CreateEncryptedKeyRequest} req
     * @param {function(string, CreateEncryptedKeyResponse):void} cb
     * @public
     */
    CreateEncryptedKey(req, cb) {
        let resp = new CreateEncryptedKeyResponse();
        this.request("CreateEncryptedKey", req, resp, cb);
    }

    /**
     * This API is used to query user traffic alarm settings based on AppId, including threshold, callback url and key.
     * @param {GetFlowAlarmInfoRequest} req
     * @param {function(string, GetFlowAlarmInfoResponse):void} cb
     * @public
     */
    GetFlowAlarmInfo(req, cb) {
        let resp = new GetFlowAlarmInfoResponse();
        this.request("GetFlowAlarmInfo", req, resp, cb);
    }

    /**
     * Users report custom order information, and the Multiple Network Acceleration service saves the information related to.
     * @param {ReportOrderRequest} req
     * @param {function(string, ReportOrderResponse):void} cb
     * @public
     */
    ReportOrder(req, cb) {
        let resp = new ReportOrderResponse();
        this.request("ReportOrder", req, resp, cb);
    }

    /**
     * Delete devices in the group
     * @param {GroupDeleteDeviceRequest} req
     * @param {function(string, GroupDeleteDeviceResponse):void} cb
     * @public
     */
    GroupDeleteDevice(req, cb) {
        let resp = new GroupDeleteDeviceResponse();
        this.request("GroupDeleteDevice", req, resp, cb);
    }

    /**
     * Purchase a Prepaid Traffic Package
     * @param {OrderFlowPackageRequest} req
     * @param {function(string, OrderFlowPackageResponse):void} cb
     * @public
     */
    OrderFlowPackage(req, cb) {
        let resp = new OrderFlowPackageResponse();
        this.request("OrderFlowPackage", req, resp, cb);
    }

    /**
     * Download traffic data on the usage statistics page
     * @param {GetStatisticDataRequest} req
     * @param {function(string, GetStatisticDataResponse):void} cb
     * @public
     */
    GetStatisticData(req, cb) {
        let resp = new GetStatisticDataResponse();
        this.request("GetStatisticData", req, resp, cb);
    }

    /**
     * This API is used to get the hardware list of the manufacturer.
     * @param {GetHardwareListRequest} req
     * @param {function(string, GetHardwareListResponse):void} cb
     * @public
     */
    GetHardwareList(req, cb) {
        let resp = new GetHardwareListResponse();
        this.request("GetHardwareList", req, resp, cb);
    }

    /**
     * This API is used to obtain the download file URL for all monitoring metrics of a single device.
     * @param {GetMonitorDataByNameRequest} req
     * @param {function(string, GetMonitorDataByNameResponse):void} cb
     * @public
     */
    GetMonitorDataByName(req, cb) {
        let resp = new GetMonitorDataByNameResponse();
        this.request("GetMonitorDataByName", req, resp, cb);
    }

    /**
     * Update the interconnection rule switch
     * @param {UpdateL3SwitchRequest} req
     * @param {function(string, UpdateL3SwitchResponse):void} cb
     * @public
     */
    UpdateL3Switch(req, cb) {
        let resp = new UpdateL3SwitchResponse();
        this.request("UpdateL3Switch", req, resp, cb);
    }

    /**
     * Create new device records
     * @param {AddDeviceRequest} req
     * @param {function(string, AddDeviceResponse):void} cb
     * @public
     */
    AddDevice(req, cb) {
        let resp = new AddDeviceResponse();
        this.request("AddDevice", req, resp, cb);
    }

    /**
     * Retrieve traffic usage data for the specified region and time point
     * @param {GetFlowStatisticByRegionRequest} req
     * @param {function(string, GetFlowStatisticByRegionResponse):void} cb
     * @public
     */
    GetFlowStatisticByRegion(req, cb) {
        let resp = new GetFlowStatisticByRegionResponse();
        this.request("GetFlowStatisticByRegion", req, resp, cb);
    }

    /**
     * Download the number of active devices statistics
     * @param {DownloadActiveDeviceCountRequest} req
     * @param {function(string, DownloadActiveDeviceCountResponse):void} cb
     * @public
     */
    DownloadActiveDeviceCount(req, cb) {
        let resp = new DownloadActiveDeviceCountResponse();
        this.request("DownloadActiveDeviceCount", req, resp, cb);
    }

    /**
     * This API is used to get hardware device information.
     * @param {GetHardwareInfoRequest} req
     * @param {function(string, GetHardwareInfoResponse):void} cb
     * @public
     */
    GetHardwareInfo(req, cb) {
        let resp = new GetHardwareInfoResponse();
        this.request("GetHardwareInfo", req, resp, cb);
    }

    /**
     * This API is used to obtain a group list.
     * @param {GetGroupListRequest} req
     * @param {function(string, GetGroupListResponse):void} cb
     * @public
     */
    GetGroupList(req, cb) {
        let resp = new GetGroupListResponse();
        this.request("GetGroupList", req, resp, cb);
    }

    /**
     * Update group remark
     * @param {UpdateGroupRequest} req
     * @param {function(string, UpdateGroupResponse):void} cb
     * @public
     */
    UpdateGroup(req, cb) {
        let resp = new UpdateGroupResponse();
        this.request("UpdateGroup", req, resp, cb);
    }

    /**
     * Create group
     * @param {AddGroupRequest} req
     * @param {function(string, AddGroupResponse):void} cb
     * @public
     */
    AddGroup(req, cb) {
        let resp = new AddGroupResponse();
        this.request("AddGroup", req, resp, cb);
    }

    /**
     * Retrieve the list of interconnection rules
     * @param {GetL3ConnListRequest} req
     * @param {function(string, GetL3ConnListResponse):void} cb
     * @public
     */
    GetL3ConnList(req, cb) {
        let resp = new GetL3ConnListResponse();
        this.request("GetL3ConnList", req, resp, cb);
    }

    /**
     * Update the interconnection rule remark
     * @param {UpdateL3ConnRequest} req
     * @param {function(string, UpdateL3ConnResponse):void} cb
     * @public
     */
    UpdateL3Conn(req, cb) {
        let resp = new UpdateL3ConnResponse();
        this.request("UpdateL3Conn", req, resp, cb);
    }


}
module.exports = MnaClient;
