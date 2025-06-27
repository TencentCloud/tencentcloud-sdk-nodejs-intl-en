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
const DescribeDbAssetInfoResponse = models.DescribeDbAssetInfoResponse;
const DeleteRiskScanTaskRequest = models.DeleteRiskScanTaskRequest;
const DescribeRiskCenterAssetViewWeakPasswordRiskListResponse = models.DescribeRiskCenterAssetViewWeakPasswordRiskListResponse;
const DescribeVULRiskAdvanceCFGListResponse = models.DescribeVULRiskAdvanceCFGListResponse;
const TaskCenterWeakPwdRiskInputParam = models.TaskCenterWeakPwdRiskInputParam;
const DescribeOrganizationUserInfoRequest = models.DescribeOrganizationUserInfoRequest;
const ModifyRiskCenterRiskStatusRequest = models.ModifyRiskCenterRiskStatusRequest;
const ReportItemKey = models.ReportItemKey;
const CVMAssetVO = models.CVMAssetVO;
const AssetViewCFGRisk = models.AssetViewCFGRisk;
const AssetViewVULRisk = models.AssetViewVULRisk;
const DescribeScanReportListRequest = models.DescribeScanReportListRequest;
const DescribeVpcAssetsResponse = models.DescribeVpcAssetsResponse;
const Vpc = models.Vpc;
const VULRiskAdvanceCFGList = models.VULRiskAdvanceCFGList;
const StopRiskCenterTaskRequest = models.StopRiskCenterTaskRequest;
const DataSearchBug = models.DataSearchBug;
const OrganizationUserInfo = models.OrganizationUserInfo;
const AssetTag = models.AssetTag;
const DescribeVULRiskAdvanceCFGListRequest = models.DescribeVULRiskAdvanceCFGListRequest;
const DescribeRiskCenterAssetViewCFGRiskListRequest = models.DescribeRiskCenterAssetViewCFGRiskListRequest;
const DescribeDomainAssetsRequest = models.DescribeDomainAssetsRequest;
const Tag = models.Tag;
const WebsiteRisk = models.WebsiteRisk;
const DeleteDomainAndIpRequest = models.DeleteDomainAndIpRequest;
const DescribeScanTaskListRequest = models.DescribeScanTaskListRequest;
const DescribeOrganizationInfoRequest = models.DescribeOrganizationInfoRequest;
const TaskIdListKey = models.TaskIdListKey;
const DescribeRiskCenterWebsiteRiskListResponse = models.DescribeRiskCenterWebsiteRiskListResponse;
const DescribeScanReportListResponse = models.DescribeScanReportListResponse;
const DescribeSearchBugInfoRequest = models.DescribeSearchBugInfoRequest;
const TaskLogURL = models.TaskLogURL;
const AddNewBindRoleUserRequest = models.AddNewBindRoleUserRequest;
const DescribeOrganizationUserInfoResponse = models.DescribeOrganizationUserInfoResponse;
const OrganizationInfo = models.OrganizationInfo;
const DescribeListenerListResponse = models.DescribeListenerListResponse;
const DBAssetVO = models.DBAssetVO;
const AssetInfoDetail = models.AssetInfoDetail;
const SubnetAsset = models.SubnetAsset;
const CreateRiskCenterScanTaskResponse = models.CreateRiskCenterScanTaskResponse;
const DescribeSubnetAssetsResponse = models.DescribeSubnetAssetsResponse;
const DescribeRiskCenterAssetViewPortRiskListRequest = models.DescribeRiskCenterAssetViewPortRiskListRequest;
const StopRiskCenterTaskResponse = models.StopRiskCenterTaskResponse;
const DescribeOrganizationInfoResponse = models.DescribeOrganizationInfoResponse;
const DescribeVpcAssetsRequest = models.DescribeVpcAssetsRequest;
const TaskAssetObject = models.TaskAssetObject;
const IpAssetListVO = models.IpAssetListVO;
const FilterDataObject = models.FilterDataObject;
const RiskCenterStatusKey = models.RiskCenterStatusKey;
const DescribeRiskCenterAssetViewWeakPasswordRiskListRequest = models.DescribeRiskCenterAssetViewWeakPasswordRiskListRequest;
const PublicIpDomainListKey = models.PublicIpDomainListKey;
const DescribeCVMAssetsResponse = models.DescribeCVMAssetsResponse;
const DbAssetInfo = models.DbAssetInfo;
const SubUserInfo = models.SubUserInfo;
const CloudCountDesc = models.CloudCountDesc;
const DescribePublicIpAssetsRequest = models.DescribePublicIpAssetsRequest;
const AssetClusterPod = models.AssetClusterPod;
const DescribeCVMAssetInfoRequest = models.DescribeCVMAssetInfoRequest;
const AssetViewWeakPassRisk = models.AssetViewWeakPassRisk;
const DescribeDbAssetsResponse = models.DescribeDbAssetsResponse;
const CreateRiskCenterScanTaskRequest = models.CreateRiskCenterScanTaskRequest;
const DescribeRiskCenterAssetViewCFGRiskListResponse = models.DescribeRiskCenterAssetViewCFGRiskListResponse;
const DescribeRiskCenterVULViewVULRiskListResponse = models.DescribeRiskCenterVULViewVULRiskListResponse;
const DescribeRiskCenterVULViewVULRiskListRequest = models.DescribeRiskCenterVULViewVULRiskListRequest;
const TaskCenterVulRiskInputParam = models.TaskCenterVulRiskInputParam;
const TaskAdvanceCFG = models.TaskAdvanceCFG;
const DescribeScanTaskListResponse = models.DescribeScanTaskListResponse;
const ScanTaskInfo = models.ScanTaskInfo;
const Tags = models.Tags;
const VULViewVULRisk = models.VULViewVULRisk;
const PortViewPortRisk = models.PortViewPortRisk;
const DescribeClusterPodAssetsRequest = models.DescribeClusterPodAssetsRequest;
const DescribeCVMAssetInfoResponse = models.DescribeCVMAssetInfoResponse;
const DescribePublicIpAssetsResponse = models.DescribePublicIpAssetsResponse;
const DescribeTaskLogURLResponse = models.DescribeTaskLogURLResponse;
const DescribeDbAssetInfoRequest = models.DescribeDbAssetInfoRequest;
const Filter = models.Filter;
const DescribeRiskCenterWebsiteRiskListRequest = models.DescribeRiskCenterWebsiteRiskListRequest;
const ServerRiskSuggestion = models.ServerRiskSuggestion;
const DescribeSubnetAssetsRequest = models.DescribeSubnetAssetsRequest;
const DescribeClusterPodAssetsResponse = models.DescribeClusterPodAssetsResponse;
const AssetBaseInfoResponse = models.AssetBaseInfoResponse;
const AssetViewPortRisk = models.AssetViewPortRisk;
const DescribeRiskCenterPortViewPortRiskListRequest = models.DescribeRiskCenterPortViewPortRiskListRequest;
const DescribeRiskCenterPortViewPortRiskListResponse = models.DescribeRiskCenterPortViewPortRiskListResponse;
const DeleteDomainAndIpResponse = models.DeleteDomainAndIpResponse;
const ServerRisk = models.ServerRisk;
const ReportTaskIdList = models.ReportTaskIdList;
const AddNewBindRoleUserResponse = models.AddNewBindRoleUserResponse;
const WhereFilter = models.WhereFilter;
const ScanTaskInfoList = models.ScanTaskInfoList;
const DescribeDbAssetsRequest = models.DescribeDbAssetsRequest;
const TaskLogInfo = models.TaskLogInfo;
const CreateDomainAndIpResponse = models.CreateDomainAndIpResponse;
const DescribeRiskCenterAssetViewVULRiskListRequest = models.DescribeRiskCenterAssetViewVULRiskListRequest;
const TaskCenterCFGRiskInputParam = models.TaskCenterCFGRiskInputParam;
const CreateDomainAndIpRequest = models.CreateDomainAndIpRequest;
const DomainAssetVO = models.DomainAssetVO;
const DescribeSearchBugInfoResponse = models.DescribeSearchBugInfoResponse;
const DescribeTaskLogListResponse = models.DescribeTaskLogListResponse;
const BugInfoDetail = models.BugInfoDetail;
const DescribeDomainAssetsResponse = models.DescribeDomainAssetsResponse;
const DescribeTaskLogListRequest = models.DescribeTaskLogListRequest;
const DescribeRiskCenterAssetViewVULRiskListResponse = models.DescribeRiskCenterAssetViewVULRiskListResponse;
const DescribeCVMAssetsRequest = models.DescribeCVMAssetsRequest;
const DescribeRiskCenterServerRiskListRequest = models.DescribeRiskCenterServerRiskListRequest;
const ClbListenerListInfo = models.ClbListenerListInfo;
const DescribeRiskCenterServerRiskListResponse = models.DescribeRiskCenterServerRiskListResponse;
const DescribeListenerListRequest = models.DescribeListenerListRequest;
const DeleteRiskScanTaskResponse = models.DeleteRiskScanTaskResponse;
const ModifyRiskCenterRiskStatusResponse = models.ModifyRiskCenterRiskStatusResponse;
const DescribeSubUserInfoResponse = models.DescribeSubUserInfoResponse;
const DescribeSubUserInfoRequest = models.DescribeSubUserInfoRequest;
const DescribeRiskCenterAssetViewPortRiskListResponse = models.DescribeRiskCenterAssetViewPortRiskListResponse;
const DescribeTaskLogURLRequest = models.DescribeTaskLogURLRequest;


/**
 * csip client
 * @class
 */
class CsipClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("csip.intl.tencentcloudapi.com", "2022-11-21", credential, region, profile);
    }
    
    /**
     * This API is used to get the list of scan task reports.
     * @param {DescribeTaskLogListRequest} req
     * @param {function(string, DescribeTaskLogListResponse):void} cb
     * @public
     */
    DescribeTaskLogList(req, cb) {
        let resp = new DescribeTaskLogListResponse();
        this.request("DescribeTaskLogList", req, resp, cb);
    }

    /**
     * This API is used to delete assets.
     * @param {DeleteDomainAndIpRequest} req
     * @param {function(string, DeleteDomainAndIpResponse):void} cb
     * @public
     */
    DeleteDomainAndIp(req, cb) {
        let resp = new DeleteDomainAndIpResponse();
        this.request("DeleteDomainAndIp", req, resp, cb);
    }

    /**
     * This API is used to query details of a database asset. 
     * @param {DescribeDbAssetInfoRequest} req
     * @param {function(string, DescribeDbAssetInfoResponse):void} cb
     * @public
     */
    DescribeDbAssetInfo(req, cb) {
        let resp = new DescribeDbAssetInfoResponse();
        this.request("DescribeDbAssetInfo", req, resp, cb);
    }

    /**
     * This API is used to query the list of vulnerabilities by vulnerabilities.
     * @param {DescribeRiskCenterVULViewVULRiskListRequest} req
     * @param {function(string, DescribeRiskCenterVULViewVULRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterVULViewVULRiskList(req, cb) {
        let resp = new DescribeRiskCenterVULViewVULRiskListResponse();
        this.request("DescribeRiskCenterVULViewVULRiskList", req, resp, cb);
    }

    /**
     * This API is used to list domain assets. 
     * @param {DescribeDomainAssetsRequest} req
     * @param {function(string, DescribeDomainAssetsResponse):void} cb
     * @public
     */
    DescribeDomainAssets(req, cb) {
        let resp = new DescribeDomainAssetsResponse();
        this.request("DescribeDomainAssets", req, resp, cb);
    }

    /**
     * This API is used to query the list of public IP assets.
     * @param {DescribePublicIpAssetsRequest} req
     * @param {function(string, DescribePublicIpAssetsResponse):void} cb
     * @public
     */
    DescribePublicIpAssets(req, cb) {
        let resp = new DescribePublicIpAssetsResponse();
        this.request("DescribePublicIpAssets", req, resp, cb);
    }

    /**
     * This API is used to add the CAM role of Cloud Security Center (CSC) to the current account. The name of the CAM role is "csip".
     * @param {AddNewBindRoleUserRequest} req
     * @param {function(string, AddNewBindRoleUserResponse):void} cb
     * @public
     */
    AddNewBindRoleUser(req, cb) {
        let resp = new AddNewBindRoleUserResponse();
        this.request("AddNewBindRoleUser", req, resp, cb);
    }

    /**
     * This API is used to query the list of TCP listeners.
     * @param {DescribeListenerListRequest} req
     * @param {function(string, DescribeListenerListResponse):void} cb
     * @public
     */
    DescribeListenerList(req, cb) {
        let resp = new DescribeListenerListResponse();
        this.request("DescribeListenerList", req, resp, cb);
    }

    /**
     * This API is used to delete a risk scan task.
     * @param {DeleteRiskScanTaskRequest} req
     * @param {function(string, DeleteRiskScanTaskResponse):void} cb
     * @public
     */
    DeleteRiskScanTask(req, cb) {
        let resp = new DeleteRiskScanTaskResponse();
        this.request("DeleteRiskScanTask", req, resp, cb);
    }

    /**
     * This API is used to query the list of weak passwords by assets.
     * @param {DescribeRiskCenterAssetViewWeakPasswordRiskListRequest} req
     * @param {function(string, DescribeRiskCenterAssetViewWeakPasswordRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterAssetViewWeakPasswordRiskList(req, cb) {
        let resp = new DescribeRiskCenterAssetViewWeakPasswordRiskListResponse();
        this.request("DescribeRiskCenterAssetViewWeakPasswordRiskList", req, resp, cb);
    }

    /**
     * This API is used to query the list of vulnerabilities by assets.
     * @param {DescribeRiskCenterAssetViewVULRiskListRequest} req
     * @param {function(string, DescribeRiskCenterAssetViewVULRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterAssetViewVULRiskList(req, cb) {
        let resp = new DescribeRiskCenterAssetViewVULRiskListResponse();
        this.request("DescribeRiskCenterAssetViewVULRiskList", req, resp, cb);
    }

    /**
     * This API is used to list cluster pods.
     * @param {DescribeClusterPodAssetsRequest} req
     * @param {function(string, DescribeClusterPodAssetsResponse):void} cb
     * @public
     */
    DescribeClusterPodAssets(req, cb) {
        let resp = new DescribeClusterPodAssetsResponse();
        this.request("DescribeClusterPodAssets", req, resp, cb);
    }

    /**
     * This API is used to query the list of configuration risks by assets.
     * @param {DescribeRiskCenterAssetViewCFGRiskListRequest} req
     * @param {function(string, DescribeRiskCenterAssetViewCFGRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterAssetViewCFGRiskList(req, cb) {
        let resp = new DescribeRiskCenterAssetViewCFGRiskListResponse();
        this.request("DescribeRiskCenterAssetViewCFGRiskList", req, resp, cb);
    }

    /**
     * This API is used to get the list of VPCs.
     * @param {DescribeVpcAssetsRequest} req
     * @param {function(string, DescribeVpcAssetsResponse):void} cb
     * @public
     */
    DescribeVpcAssets(req, cb) {
        let resp = new DescribeVpcAssetsResponse();
        this.request("DescribeVpcAssets", req, resp, cb);
    }

    /**
     * This API is used to query the list of services in risk.
     * @param {DescribeRiskCenterServerRiskListRequest} req
     * @param {function(string, DescribeRiskCenterServerRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterServerRiskList(req, cb) {
        let resp = new DescribeRiskCenterServerRiskListResponse();
        this.request("DescribeRiskCenterServerRiskList", req, resp, cb);
    }

    /**
     * This API is used to query the list of CVM assets.
     * @param {DescribeCVMAssetsRequest} req
     * @param {function(string, DescribeCVMAssetsResponse):void} cb
     * @public
     */
    DescribeCVMAssets(req, cb) {
        let resp = new DescribeCVMAssetsResponse();
        this.request("DescribeCVMAssets", req, resp, cb);
    }

    /**
     * This API is used to get the list of content risks.
     * @param {DescribeRiskCenterWebsiteRiskListRequest} req
     * @param {function(string, DescribeRiskCenterWebsiteRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterWebsiteRiskList(req, cb) {
        let resp = new DescribeRiskCenterWebsiteRiskListResponse();
        this.request("DescribeRiskCenterWebsiteRiskList", req, resp, cb);
    }

    /**
     * Check group account details
     * @param {DescribeOrganizationInfoRequest} req
     * @param {function(string, DescribeOrganizationInfoResponse):void} cb
     * @public
     */
    DescribeOrganizationInfo(req, cb) {
        let resp = new DescribeOrganizationInfoResponse();
        this.request("DescribeOrganizationInfo", req, resp, cb);
    }

    /**
     * This API is used to get the temp download link of a report. 
     * @param {DescribeTaskLogURLRequest} req
     * @param {function(string, DescribeTaskLogURLResponse):void} cb
     * @public
     */
    DescribeTaskLogURL(req, cb) {
        let resp = new DescribeTaskLogURLResponse();
        this.request("DescribeTaskLogURL", req, resp, cb);
    }

    /**
     * This API is used to create a risk scan task. 
     * @param {CreateRiskCenterScanTaskRequest} req
     * @param {function(string, CreateRiskCenterScanTaskResponse):void} cb
     * @public
     */
    CreateRiskCenterScanTask(req, cb) {
        let resp = new CreateRiskCenterScanTaskResponse();
        this.request("CreateRiskCenterScanTask", req, resp, cb);
    }

    /**
     * This API is used to query information of a vulnerability.
     * @param {DescribeSearchBugInfoRequest} req
     * @param {function(string, DescribeSearchBugInfoResponse):void} cb
     * @public
     */
    DescribeSearchBugInfo(req, cb) {
        let resp = new DescribeSearchBugInfoResponse();
        this.request("DescribeSearchBugInfo", req, resp, cb);
    }

    /**
     * Query the group's sub-account list
     * @param {DescribeSubUserInfoRequest} req
     * @param {function(string, DescribeSubUserInfoResponse):void} cb
     * @public
     */
    DescribeSubUserInfo(req, cb) {
        let resp = new DescribeSubUserInfoResponse();
        this.request("DescribeSubUserInfo", req, resp, cb);
    }

    /**
     * This API is used to get the list of scan reports.
     * @param {DescribeScanReportListRequest} req
     * @param {function(string, DescribeScanReportListResponse):void} cb
     * @public
     */
    DescribeScanReportList(req, cb) {
        let resp = new DescribeScanReportListResponse();
        this.request("DescribeScanReportList", req, resp, cb);
    }

    /**
     * This API is used to create an asset with the specific domain/IP.
     * @param {CreateDomainAndIpRequest} req
     * @param {function(string, CreateDomainAndIpResponse):void} cb
     * @public
     */
    CreateDomainAndIp(req, cb) {
        let resp = new CreateDomainAndIpResponse();
        this.request("CreateDomainAndIp", req, resp, cb);
    }

    /**
     * This API is used to get the list of scan tasks.
     * @param {DescribeScanTaskListRequest} req
     * @param {function(string, DescribeScanTaskListResponse):void} cb
     * @public
     */
    DescribeScanTaskList(req, cb) {
        let resp = new DescribeScanTaskListResponse();
        this.request("DescribeScanTaskList", req, resp, cb);
    }

    /**
     * This API is used to list database assets.
     * @param {DescribeDbAssetsRequest} req
     * @param {function(string, DescribeDbAssetsResponse):void} cb
     * @public
     */
    DescribeDbAssets(req, cb) {
        let resp = new DescribeDbAssetsResponse();
        this.request("DescribeDbAssets", req, resp, cb);
    }

    /**
     * This API is used to query the list of port risks by ports.
     * @param {DescribeRiskCenterPortViewPortRiskListRequest} req
     * @param {function(string, DescribeRiskCenterPortViewPortRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterPortViewPortRiskList(req, cb) {
        let resp = new DescribeRiskCenterPortViewPortRiskListResponse();
        this.request("DescribeRiskCenterPortViewPortRiskList", req, resp, cb);
    }

    /**
     * This API is used to query the list of port risks by assets.
     * @param {DescribeRiskCenterAssetViewPortRiskListRequest} req
     * @param {function(string, DescribeRiskCenterAssetViewPortRiskListResponse):void} cb
     * @public
     */
    DescribeRiskCenterAssetViewPortRiskList(req, cb) {
        let resp = new DescribeRiskCenterAssetViewPortRiskListResponse();
        this.request("DescribeRiskCenterAssetViewPortRiskList", req, resp, cb);
    }

    /**
     * This API is used to query the advanced configuration of vulnerability scan.
     * @param {DescribeVULRiskAdvanceCFGListRequest} req
     * @param {function(string, DescribeVULRiskAdvanceCFGListResponse):void} cb
     * @public
     */
    DescribeVULRiskAdvanceCFGList(req, cb) {
        let resp = new DescribeVULRiskAdvanceCFGListResponse();
        this.request("DescribeVULRiskAdvanceCFGList", req, resp, cb);
    }

    /**
     * This API is used to modify the status of a risk. 
     * @param {ModifyRiskCenterRiskStatusRequest} req
     * @param {function(string, ModifyRiskCenterRiskStatusResponse):void} cb
     * @public
     */
    ModifyRiskCenterRiskStatus(req, cb) {
        let resp = new ModifyRiskCenterRiskStatusResponse();
        this.request("ModifyRiskCenterRiskStatus", req, resp, cb);
    }

    /**
     * Query group account user list
     * @param {DescribeOrganizationUserInfoRequest} req
     * @param {function(string, DescribeOrganizationUserInfoResponse):void} cb
     * @public
     */
    DescribeOrganizationUserInfo(req, cb) {
        let resp = new DescribeOrganizationUserInfoResponse();
        this.request("DescribeOrganizationUserInfo", req, resp, cb);
    }

    /**
     * This API is used to stop a scan task. 
     * @param {StopRiskCenterTaskRequest} req
     * @param {function(string, StopRiskCenterTaskResponse):void} cb
     * @public
     */
    StopRiskCenterTask(req, cb) {
        let resp = new StopRiskCenterTaskResponse();
        this.request("StopRiskCenterTask", req, resp, cb);
    }

    /**
     * This API is used to get the list of subnets.
     * @param {DescribeSubnetAssetsRequest} req
     * @param {function(string, DescribeSubnetAssetsResponse):void} cb
     * @public
     */
    DescribeSubnetAssets(req, cb) {
        let resp = new DescribeSubnetAssetsResponse();
        this.request("DescribeSubnetAssets", req, resp, cb);
    }

    /**
     * This API is used to query details of CVM assets.
     * @param {DescribeCVMAssetInfoRequest} req
     * @param {function(string, DescribeCVMAssetInfoResponse):void} cb
     * @public
     */
    DescribeCVMAssetInfo(req, cb) {
        let resp = new DescribeCVMAssetInfoResponse();
        this.request("DescribeCVMAssetInfo", req, resp, cb);
    }


}
module.exports = CsipClient;
