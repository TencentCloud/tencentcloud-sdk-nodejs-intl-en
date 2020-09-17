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
const ModifyAutoOpenProVersionConfigRequest = models.ModifyAutoOpenProVersionConfigRequest;
const DescribeProcessTaskStatusResponse = models.DescribeProcessTaskStatusResponse;
const DescribeAlarmAttributeResponse = models.DescribeAlarmAttributeResponse;
const DescribeWeeklyReportBruteAttacksResponse = models.DescribeWeeklyReportBruteAttacksResponse;
const DescribeAgentVulsRequest = models.DescribeAgentVulsRequest;
const AddMachineTagResponse = models.AddMachineTagResponse;
const UsualPlace = models.UsualPlace;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const WeeklyReportVul = models.WeeklyReportVul;
const DescribeWeeklyReportBruteAttacksRequest = models.DescribeWeeklyReportBruteAttacksRequest;
const CreateUsualLoginPlacesRequest = models.CreateUsualLoginPlacesRequest;
const DescribeProcessTaskStatusRequest = models.DescribeProcessTaskStatusRequest;
const RegionInfo = models.RegionInfo;
const ModifyAlarmAttributeRequest = models.ModifyAlarmAttributeRequest;
const ComponentStatistics = models.ComponentStatistics;
const ExportMalwaresRequest = models.ExportMalwaresRequest;
const DescribeProcessesResponse = models.DescribeProcessesResponse;
const WeeklyReportMalware = models.WeeklyReportMalware;
const DescribeBruteAttacksRequest = models.DescribeBruteAttacksRequest;
const DescribeSecurityTrendsRequest = models.DescribeSecurityTrendsRequest;
const Account = models.Account;
const RescanImpactedHostRequest = models.RescanImpactedHostRequest;
const BruteAttack = models.BruteAttack;
const DescribeOpenPortsRequest = models.DescribeOpenPortsRequest;
const DescribeImpactedHostsRequest = models.DescribeImpactedHostsRequest;
const DescribeMaliciousRequestsResponse = models.DescribeMaliciousRequestsResponse;
const NonLocalLoginPlace = models.NonLocalLoginPlace;
const CreateProcessTaskResponse = models.CreateProcessTaskResponse;
const SecurityDynamic = models.SecurityDynamic;
const DescribeComponentsRequest = models.DescribeComponentsRequest;
const DescribeNonlocalLoginPlacesRequest = models.DescribeNonlocalLoginPlacesRequest;
const DeleteMachineTagRequest = models.DeleteMachineTagRequest;
const OpenPortStatistics = models.OpenPortStatistics;
const DescribeHistoryAccountsResponse = models.DescribeHistoryAccountsResponse;
const AgentVul = models.AgentVul;
const UntrustMalwaresRequest = models.UntrustMalwaresRequest;
const DescribeWeeklyReportVulsRequest = models.DescribeWeeklyReportVulsRequest;
const DescribeLoginWhiteListRequest = models.DescribeLoginWhiteListRequest;
const UntrustMalwaresResponse = models.UntrustMalwaresResponse;
const UntrustMaliciousRequestRequest = models.UntrustMaliciousRequestRequest;
const DescribeComponentInfoResponse = models.DescribeComponentInfoResponse;
const DescribeAccountStatisticsResponse = models.DescribeAccountStatisticsResponse;
const ModifyLoginWhiteListResponse = models.ModifyLoginWhiteListResponse;
const DescribeTagsResponse = models.DescribeTagsResponse;
const OpenPort = models.OpenPort;
const DescribeProVersionInfoRequest = models.DescribeProVersionInfoRequest;
const CreateProcessTaskRequest = models.CreateProcessTaskRequest;
const DeleteMaliciousRequestsResponse = models.DeleteMaliciousRequestsResponse;
const ExportBruteAttacksResponse = models.ExportBruteAttacksResponse;
const DeleteMachineResponse = models.DeleteMachineResponse;
const DeleteLoginWhiteListRequest = models.DeleteLoginWhiteListRequest;
const MachineTag = models.MachineTag;
const WeeklyReportNonlocalLoginPlace = models.WeeklyReportNonlocalLoginPlace;
const DescribeOverviewStatisticsResponse = models.DescribeOverviewStatisticsResponse;
const RecoverMalwaresRequest = models.RecoverMalwaresRequest;
const MaliciousRequest = models.MaliciousRequest;
const TrustMalwaresResponse = models.TrustMalwaresResponse;
const TagMachine = models.TagMachine;
const DescribeWeeklyReportInfoRequest = models.DescribeWeeklyReportInfoRequest;
const EditTagsRequest = models.EditTagsRequest;
const AddLoginWhiteListRequest = models.AddLoginWhiteListRequest;
const Tag = models.Tag;
const DescribeWeeklyReportsRequest = models.DescribeWeeklyReportsRequest;
const DescribeVulsResponse = models.DescribeVulsResponse;
const DescribeImpactedHostsResponse = models.DescribeImpactedHostsResponse;
const DescribeVulScanResultResponse = models.DescribeVulScanResultResponse;
const ModifyLoginWhiteListRequest = models.ModifyLoginWhiteListRequest;
const DescribeOpenPortStatisticsRequest = models.DescribeOpenPortStatisticsRequest;
const DeleteMachineRequest = models.DeleteMachineRequest;
const DescribeVulInfoRequest = models.DescribeVulInfoRequest;
const DescribeComponentStatisticsResponse = models.DescribeComponentStatisticsResponse;
const Place = models.Place;
const LoginWhiteLists = models.LoginWhiteLists;
const DeleteUsualLoginPlacesResponse = models.DeleteUsualLoginPlacesResponse;
const DeleteNonlocalLoginPlacesResponse = models.DeleteNonlocalLoginPlacesResponse;
const DescribeNonlocalLoginPlacesResponse = models.DescribeNonlocalLoginPlacesResponse;
const ExportMalwaresResponse = models.ExportMalwaresResponse;
const DescribeWeeklyReportNonlocalLoginPlacesRequest = models.DescribeWeeklyReportNonlocalLoginPlacesRequest;
const CreateOpenPortTaskResponse = models.CreateOpenPortTaskResponse;
const DescribeMachineInfoResponse = models.DescribeMachineInfoResponse;
const DescribeUsualLoginPlacesResponse = models.DescribeUsualLoginPlacesResponse;
const DescribeComponentInfoRequest = models.DescribeComponentInfoRequest;
const MisAlarmNonlocalLoginPlacesRequest = models.MisAlarmNonlocalLoginPlacesRequest;
const TrustMaliciousRequestRequest = models.TrustMaliciousRequestRequest;
const ExportMaliciousRequestsResponse = models.ExportMaliciousRequestsResponse;
const DescribeWeeklyReportMalwaresRequest = models.DescribeWeeklyReportMalwaresRequest;
const DescribeBruteAttacksResponse = models.DescribeBruteAttacksResponse;
const ExportNonlocalLoginPlacesResponse = models.ExportNonlocalLoginPlacesResponse;
const DescribeComponentStatisticsRequest = models.DescribeComponentStatisticsRequest;
const DescribeOverviewStatisticsRequest = models.DescribeOverviewStatisticsRequest;
const DescribeOpenPortStatisticsResponse = models.DescribeOpenPortStatisticsResponse;
const UntrustMaliciousRequestResponse = models.UntrustMaliciousRequestResponse;
const DescribeLoginWhiteListResponse = models.DescribeLoginWhiteListResponse;
const DescribeVulInfoResponse = models.DescribeVulInfoResponse;
const DescribeTagMachinesRequest = models.DescribeTagMachinesRequest;
const DescribeProVersionInfoResponse = models.DescribeProVersionInfoResponse;
const ExportBruteAttacksRequest = models.ExportBruteAttacksRequest;
const DeleteBruteAttacksRequest = models.DeleteBruteAttacksRequest;
const ExportNonlocalLoginPlacesRequest = models.ExportNonlocalLoginPlacesRequest;
const AddLoginWhiteListResponse = models.AddLoginWhiteListResponse;
const CreateOpenPortTaskRequest = models.CreateOpenPortTaskRequest;
const DescribeWeeklyReportNonlocalLoginPlacesResponse = models.DescribeWeeklyReportNonlocalLoginPlacesResponse;
const SeparateMalwaresRequest = models.SeparateMalwaresRequest;
const DescribeTagMachinesResponse = models.DescribeTagMachinesResponse;
const DescribeSecurityTrendsResponse = models.DescribeSecurityTrendsResponse;
const DescribeOpenPortTaskStatusResponse = models.DescribeOpenPortTaskStatusResponse;
const DescribeWeeklyReportInfoResponse = models.DescribeWeeklyReportInfoResponse;
const DescribeSecurityDynamicsResponse = models.DescribeSecurityDynamicsResponse;
const TrustMaliciousRequestResponse = models.TrustMaliciousRequestResponse;
const LoginWhiteListsRule = models.LoginWhiteListsRule;
const CloseProVersionResponse = models.CloseProVersionResponse;
const DescribeOpenPortsResponse = models.DescribeOpenPortsResponse;
const OpenProVersionResponse = models.OpenProVersionResponse;
const DescribeMachineInfoRequest = models.DescribeMachineInfoRequest;
const DescribeMaliciousRequestsRequest = models.DescribeMaliciousRequestsRequest;
const DescribeProcessesRequest = models.DescribeProcessesRequest;
const DeleteUsualLoginPlacesRequest = models.DeleteUsualLoginPlacesRequest;
const WeeklyReport = models.WeeklyReport;
const DescribeOpenPortTaskStatusRequest = models.DescribeOpenPortTaskStatusRequest;
const Filter = models.Filter;
const DeleteLoginWhiteListResponse = models.DeleteLoginWhiteListResponse;
const DescribeAccountStatisticsRequest = models.DescribeAccountStatisticsRequest;
const MisAlarmNonlocalLoginPlacesResponse = models.MisAlarmNonlocalLoginPlacesResponse;
const DeleteMalwaresResponse = models.DeleteMalwaresResponse;
const SeparateMalwaresResponse = models.SeparateMalwaresResponse;
const ProcessStatistics = models.ProcessStatistics;
const Process = models.Process;
const DescribeTagsRequest = models.DescribeTagsRequest;
const DescribeVulScanResultRequest = models.DescribeVulScanResultRequest;
const DescribeWeeklyReportMalwaresResponse = models.DescribeWeeklyReportMalwaresResponse;
const DescribeSecurityDynamicsRequest = models.DescribeSecurityDynamicsRequest;
const ImpactedHost = models.ImpactedHost;
const DescribeProcessStatisticsResponse = models.DescribeProcessStatisticsResponse;
const DeleteNonlocalLoginPlacesRequest = models.DeleteNonlocalLoginPlacesRequest;
const Malware = models.Malware;
const ExportMaliciousRequestsRequest = models.ExportMaliciousRequestsRequest;
const AccountStatistics = models.AccountStatistics;
const DescribeMachinesResponse = models.DescribeMachinesResponse;
const CreateUsualLoginPlacesResponse = models.CreateUsualLoginPlacesResponse;
const ModifyProVersionRenewFlagResponse = models.ModifyProVersionRenewFlagResponse;
const Machine = models.Machine;
const DescribeWeeklyReportVulsResponse = models.DescribeWeeklyReportVulsResponse;
const WeeklyReportBruteAttack = models.WeeklyReportBruteAttack;
const HistoryAccount = models.HistoryAccount;
const ModifyProVersionRenewFlagRequest = models.ModifyProVersionRenewFlagRequest;
const DescribeUsualLoginPlacesRequest = models.DescribeUsualLoginPlacesRequest;
const Component = models.Component;
const DescribeVulsRequest = models.DescribeVulsRequest;
const DescribeAgentVulsResponse = models.DescribeAgentVulsResponse;
const DescribeProcessStatisticsRequest = models.DescribeProcessStatisticsRequest;
const DeleteMachineTagResponse = models.DeleteMachineTagResponse;
const DescribeHistoryAccountsRequest = models.DescribeHistoryAccountsRequest;
const CloseProVersionRequest = models.CloseProVersionRequest;
const OpenProVersionRequest = models.OpenProVersionRequest;
const ModifyAlarmAttributeResponse = models.ModifyAlarmAttributeResponse;
const IgnoreImpactedHostsResponse = models.IgnoreImpactedHostsResponse;
const DescribeComponentsResponse = models.DescribeComponentsResponse;
const RescanImpactedHostResponse = models.RescanImpactedHostResponse;
const SecurityTrend = models.SecurityTrend;
const Vul = models.Vul;
const AddMachineTagRequest = models.AddMachineTagRequest;
const DescribeWeeklyReportsResponse = models.DescribeWeeklyReportsResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const ModifyAutoOpenProVersionConfigResponse = models.ModifyAutoOpenProVersionConfigResponse;
const RecoverMalwaresResponse = models.RecoverMalwaresResponse;
const EditTagsResponse = models.EditTagsResponse;
const IgnoreImpactedHostsRequest = models.IgnoreImpactedHostsRequest;
const DescribeAlarmAttributeRequest = models.DescribeAlarmAttributeRequest;
const DescribeMalwaresRequest = models.DescribeMalwaresRequest;
const DeleteMaliciousRequestsRequest = models.DeleteMaliciousRequestsRequest;
const DescribeMachinesRequest = models.DescribeMachinesRequest;
const TrustMalwaresRequest = models.TrustMalwaresRequest;
const DeleteMalwaresRequest = models.DeleteMalwaresRequest;
const DescribeMalwaresResponse = models.DescribeMalwaresResponse;
const DeleteBruteAttacksResponse = models.DeleteBruteAttacksResponse;


/**
 * yunjing client
 * @class
 */
class YunjingClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("yunjing.tencentcloudapi.com", "2018-02-28", credential, region, profile);
    }
    
    /**
     * This API is used to get the vulnerability detection result.

     * @param {DescribeVulScanResultRequest} req
     * @param {function(string, DescribeVulScanResultResponse):void} cb
     * @public
     */
    DescribeVulScanResult(req, cb) {
        let resp = new DescribeVulScanResultResponse();
        this.request("DescribeVulScanResult", req, resp, cb);
    }

    /**
     * This API is used to trust an identified trojan file.
     * @param {TrustMalwaresRequest} req
     * @param {function(string, TrustMalwaresResponse):void} cb
     * @public
     */
    TrustMalwares(req, cb) {
        let resp = new TrustMalwaresResponse();
        this.request("TrustMalwares", req, resp, cb);
    }

    /**
     * This API is used to recover isolated trojan files in a batch.
     * @param {RecoverMalwaresRequest} req
     * @param {function(string, RecoverMalwaresResponse):void} cb
     * @public
     */
    RecoverMalwares(req, cb) {
        let resp = new RecoverMalwaresResponse();
        this.request("RecoverMalwares", req, resp, cb);
    }

    /**
     * This API is used to get the component statistics list.
     * @param {DescribeComponentStatisticsRequest} req
     * @param {function(string, DescribeComponentStatisticsResponse):void} cb
     * @public
     */
    DescribeComponentStatistics(req, cb) {
        let resp = new DescribeComponentStatisticsResponse();
        this.request("DescribeComponentStatistics", req, resp, cb);
    }

    /**
     * This API is used to remove a tag from a server.
     * @param {DeleteMachineTagRequest} req
     * @param {function(string, DeleteMachineTagResponse):void} cb
     * @public
     */
    DeleteMachineTag(req, cb) {
        let resp = new DeleteMachineTagResponse();
        this.request("DeleteMachineTag", req, resp, cb);
    }

    /**
     * This API is used to get the account change history list.
     * @param {DescribeHistoryAccountsRequest} req
     * @param {function(string, DescribeHistoryAccountsResponse):void} cb
     * @public
     */
    DescribeHistoryAccounts(req, cb) {
        let resp = new DescribeHistoryAccountsResponse();
        this.request("DescribeHistoryAccounts", req, resp, cb);
    }

    /**
     * This API is used to delete trojan records.
     * @param {DeleteMalwaresRequest} req
     * @param {function(string, DeleteMalwaresResponse):void} cb
     * @public
     */
    DeleteMalwares(req, cb) {
        let resp = new DeleteMalwaresResponse();
        this.request("DeleteMalwares", req, resp, cb);
    }

    /**
     * This API is used to export trojan records into a CSV file.
     * @param {ExportMalwaresRequest} req
     * @param {function(string, ExportMalwaresResponse):void} cb
     * @public
     */
    ExportMalwares(req, cb) {
        let resp = new ExportMalwaresResponse();
        this.request("ExportMalwares", req, resp, cb);
    }

    /**
     * This API is used to export unusual login location events into a CSV file.
     * @param {ExportNonlocalLoginPlacesRequest} req
     * @param {function(string, ExportNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    ExportNonlocalLoginPlaces(req, cb) {
        let resp = new ExportNonlocalLoginPlacesResponse();
        this.request("ExportNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * This API is used to get the brute force attack data in the weekly CWP Pro report.
     * @param {DescribeWeeklyReportBruteAttacksRequest} req
     * @param {function(string, DescribeWeeklyReportBruteAttacksResponse):void} cb
     * @public
     */
    DescribeWeeklyReportBruteAttacks(req, cb) {
        let resp = new DescribeWeeklyReportBruteAttacksResponse();
        this.request("DescribeWeeklyReportBruteAttacks", req, resp, cb);
    }

    /**
     * This API is used to get the brute force attack event list.
     * @param {DescribeBruteAttacksRequest} req
     * @param {function(string, DescribeBruteAttacksResponse):void} cb
     * @public
     */
    DescribeBruteAttacks(req, cb) {
        let resp = new DescribeBruteAttacksResponse();
        this.request("DescribeBruteAttacks", req, resp, cb);
    }

    /**
     * This API is used to get the vulnerability data in the weekly CWP Pro report.

     * @param {DescribeWeeklyReportVulsRequest} req
     * @param {function(string, DescribeWeeklyReportVulsResponse):void} cb
     * @public
     */
    DescribeWeeklyReportVuls(req, cb) {
        let resp = new DescribeWeeklyReportVulsResponse();
        this.request("DescribeWeeklyReportVuls", req, resp, cb);
    }

    /**
     * This API is used to untrust a trojan file.
     * @param {UntrustMalwaresRequest} req
     * @param {function(string, UntrustMalwaresResponse):void} cb
     * @public
     */
    UntrustMalwares(req, cb) {
        let resp = new UntrustMalwaresResponse();
        this.request("UntrustMalwares", req, resp, cb);
    }

    /**
     * This API is used to get the trojan data in the weekly CWP Pro report.
     * @param {DescribeWeeklyReportMalwaresRequest} req
     * @param {function(string, DescribeWeeklyReportMalwaresResponse):void} cb
     * @public
     */
    DescribeWeeklyReportMalwares(req, cb) {
        let resp = new DescribeWeeklyReportMalwaresResponse();
        this.request("DescribeWeeklyReportMalwares", req, resp, cb);
    }

    /**
     * This API is used to get the details in the weekly CWP Pro report.
     * @param {DescribeWeeklyReportInfoRequest} req
     * @param {function(string, DescribeWeeklyReportInfoResponse):void} cb
     * @public
     */
    DescribeWeeklyReportInfo(req, cb) {
        let resp = new DescribeWeeklyReportInfoResponse();
        this.request("DescribeWeeklyReportInfo", req, resp, cb);
    }

    /**
     * This API is used to get the component information.
     * @param {DescribeComponentInfoRequest} req
     * @param {function(string, DescribeComponentInfoResponse):void} cb
     * @public
     */
    DescribeComponentInfo(req, cb) {
        let resp = new DescribeComponentInfoResponse();
        this.request("DescribeComponentInfo", req, resp, cb);
    }

    /**
     * This API is used to get vulnerability details.
     * @param {DescribeVulInfoRequest} req
     * @param {function(string, DescribeVulInfoResponse):void} cb
     * @public
     */
    DescribeVulInfo(req, cb) {
        let resp = new DescribeVulInfoResponse();
        this.request("DescribeVulInfo", req, resp, cb);
    }

    /**
     * This API is used to modify the renewal flag of CWP Pro.
     * @param {ModifyProVersionRenewFlagRequest} req
     * @param {function(string, ModifyProVersionRenewFlagResponse):void} cb
     * @public
     */
    ModifyProVersionRenewFlag(req, cb) {
        let resp = new ModifyProVersionRenewFlagResponse();
        this.request("ModifyProVersionRenewFlag", req, resp, cb);
    }

    /**
     * This API is used to delete one or more usual login locations.
     * @param {DeleteUsualLoginPlacesRequest} req
     * @param {function(string, DeleteUsualLoginPlacesResponse):void} cb
     * @public
     */
    DeleteUsualLoginPlaces(req, cb) {
        let resp = new DeleteUsualLoginPlacesResponse();
        this.request("DeleteUsualLoginPlaces", req, resp, cb);
    }

    /**
     * This API is used to delete unusual login location records.
     * @param {DeleteNonlocalLoginPlacesRequest} req
     * @param {function(string, DeleteNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DeleteNonlocalLoginPlaces(req, cb) {
        let resp = new DeleteNonlocalLoginPlacesResponse();
        this.request("DeleteNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * This API is used to get the port list.

     * @param {DescribeOpenPortsRequest} req
     * @param {function(string, DescribeOpenPortsResponse):void} cb
     * @public
     */
    DescribeOpenPorts(req, cb) {
        let resp = new DescribeOpenPortsResponse();
        this.request("DescribeOpenPorts", req, resp, cb);
    }

    /**
     * This API is used to set the current location as the usual login location.
     * @param {MisAlarmNonlocalLoginPlacesRequest} req
     * @param {function(string, MisAlarmNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    MisAlarmNonlocalLoginPlaces(req, cb) {
        let resp = new MisAlarmNonlocalLoginPlacesResponse();
        this.request("MisAlarmNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * This API is used to get the statistics on port usage
     * @param {DescribeOpenPortStatisticsRequest} req
     * @param {function(string, DescribeOpenPortStatisticsResponse):void} cb
     * @public
     */
    DescribeOpenPortStatistics(req, cb) {
        let resp = new DescribeOpenPortStatisticsResponse();
        this.request("DescribeOpenPortStatistics", req, resp, cb);
    }

    /**
     * This API is used to export the malicious request file into a CSV file for download.
     * @param {ExportMaliciousRequestsRequest} req
     * @param {function(string, ExportMaliciousRequestsResponse):void} cb
     * @public
     */
    ExportMaliciousRequests(req, cb) {
        let resp = new ExportMaliciousRequestsResponse();
        this.request("ExportMaliciousRequests", req, resp, cb);
    }

    /**
     * This API is used to isolate trojans.
     * @param {SeparateMalwaresRequest} req
     * @param {function(string, SeparateMalwaresResponse):void} cb
     * @public
     */
    SeparateMalwares(req, cb) {
        let resp = new SeparateMalwaresResponse();
        this.request("SeparateMalwares", req, resp, cb);
    }

    /**
     * This API is used to get the information of servers associated with a specified tag.
     * @param {DescribeTagMachinesRequest} req
     * @param {function(string, DescribeTagMachinesResponse):void} cb
     * @public
     */
    DescribeTagMachines(req, cb) {
        let resp = new DescribeTagMachinesResponse();
        this.request("DescribeTagMachines", req, resp, cb);
    }

    /**
     * This API is used to add a tag to a server.
     * @param {AddMachineTagRequest} req
     * @param {function(string, AddMachineTagResponse):void} cb
     * @public
     */
    AddMachineTag(req, cb) {
        let resp = new AddMachineTagResponse();
        this.request("AddMachineTag", req, resp, cb);
    }

    /**
     * This API is used to modify alarm settings.
     * @param {ModifyAlarmAttributeRequest} req
     * @param {function(string, ModifyAlarmAttributeResponse):void} cb
     * @public
     */
    ModifyAlarmAttribute(req, cb) {
        let resp = new ModifyAlarmAttributeResponse();
        this.request("ModifyAlarmAttribute", req, resp, cb);
    }

    /**
     * This API is used to add a allowlist rule.
     * @param {AddLoginWhiteListRequest} req
     * @param {function(string, AddLoginWhiteListResponse):void} cb
     * @public
     */
    AddLoginWhiteList(req, cb) {
        let resp = new AddLoginWhiteListResponse();
        this.request("AddLoginWhiteList", req, resp, cb);
    }

    /**
     * This API is used to get unusual login events.
     * @param {DescribeNonlocalLoginPlacesRequest} req
     * @param {function(string, DescribeNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DescribeNonlocalLoginPlaces(req, cb) {
        let resp = new DescribeNonlocalLoginPlacesResponse();
        this.request("DescribeNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * This API is used to uninstall the CWP agent.
     * @param {DeleteMachineRequest} req
     * @param {function(string, DeleteMachineResponse):void} cb
     * @public
     */
    DeleteMachine(req, cb) {
        let resp = new DeleteMachineResponse();
        this.request("DeleteMachine", req, resp, cb);
    }

    /**
     * This API is used to get the status of a real-time process pulling task.
     * @param {DescribeProcessTaskStatusRequest} req
     * @param {function(string, DescribeProcessTaskStatusResponse):void} cb
     * @public
     */
    DescribeProcessTaskStatus(req, cb) {
        let resp = new DescribeProcessTaskStatusResponse();
        this.request("DescribeProcessTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to get the overview statistics of CWP under the current account.
     * @param {DescribeOverviewStatisticsRequest} req
     * @param {function(string, DescribeOverviewStatisticsResponse):void} cb
     * @public
     */
    DescribeOverviewStatistics(req, cb) {
        let resp = new DescribeOverviewStatisticsResponse();
        this.request("DescribeOverviewStatistics", req, resp, cb);
    }

    /**
     * This API is used to untrust a malicious request.
     * @param {UntrustMaliciousRequestRequest} req
     * @param {function(string, UntrustMaliciousRequestResponse):void} cb
     * @public
     */
    UntrustMaliciousRequest(req, cb) {
        let resp = new UntrustMaliciousRequestResponse();
        this.request("UntrustMaliciousRequest", req, resp, cb);
    }

    /**
     * This API is used to query usual login locations.
     * @param {DescribeUsualLoginPlacesRequest} req
     * @param {function(string, DescribeUsualLoginPlacesResponse):void} cb
     * @public
     */
    DescribeUsualLoginPlaces(req, cb) {
        let resp = new DescribeUsualLoginPlacesResponse();
        this.request("DescribeUsualLoginPlaces", req, resp, cb);
    }

    /**
     * This API is used to get the process statistics list.
     * @param {DescribeProcessStatisticsRequest} req
     * @param {function(string, DescribeProcessStatisticsResponse):void} cb
     * @public
     */
    DescribeProcessStatistics(req, cb) {
        let resp = new DescribeProcessStatisticsResponse();
        this.request("DescribeProcessStatistics", req, resp, cb);
    }

    /**
     * This API is used to get malicious request data.
     * @param {DescribeMaliciousRequestsRequest} req
     * @param {function(string, DescribeMaliciousRequestsResponse):void} cb
     * @public
     */
    DescribeMaliciousRequests(req, cb) {
        let resp = new DescribeMaliciousRequestsResponse();
        this.request("DescribeMaliciousRequests", req, resp, cb);
    }

    /**
     * This API is used to get the status of a real-time port pulling task.
     * @param {DescribeOpenPortTaskStatusRequest} req
     * @param {function(string, DescribeOpenPortTaskStatusResponse):void} cb
     * @public
     */
    DescribeOpenPortTaskStatus(req, cb) {
        let resp = new DescribeOpenPortTaskStatusResponse();
        this.request("DescribeOpenPortTaskStatus", req, resp, cb);
    }

    /**
     * This API is used to get the security event message data.
     * @param {DescribeSecurityDynamicsRequest} req
     * @param {function(string, DescribeSecurityDynamicsResponse):void} cb
     * @public
     */
    DescribeSecurityDynamics(req, cb) {
        let resp = new DescribeSecurityDynamicsResponse();
        this.request("DescribeSecurityDynamics", req, resp, cb);
    }

    /**
     * This API is used to delete malicious request records.
     * @param {DeleteMaliciousRequestsRequest} req
     * @param {function(string, DeleteMaliciousRequestsResponse):void} cb
     * @public
     */
    DeleteMaliciousRequests(req, cb) {
        let resp = new DeleteMaliciousRequestsResponse();
        this.request("DeleteMaliciousRequests", req, resp, cb);
    }

    /**
     * This API is used to re-scan for vulnerabilities.
     * @param {RescanImpactedHostRequest} req
     * @param {function(string, RescanImpactedHostResponse):void} cb
     * @public
     */
    RescanImpactedHost(req, cb) {
        let resp = new RescanImpactedHostResponse();
        this.request("RescanImpactedHost", req, resp, cb);
    }

    /**
     * This API is used to edit a allowlist rule.
     * @param {ModifyLoginWhiteListRequest} req
     * @param {function(string, ModifyLoginWhiteListResponse):void} cb
     * @public
     */
    ModifyLoginWhiteList(req, cb) {
        let resp = new ModifyLoginWhiteListResponse();
        this.request("ModifyLoginWhiteList", req, resp, cb);
    }

    /**
     * This API is used to export brute force attack records into a CSV file.
     * @param {ExportBruteAttacksRequest} req
     * @param {function(string, ExportBruteAttacksResponse):void} cb
     * @public
     */
    ExportBruteAttacks(req, cb) {
        let resp = new ExportBruteAttacksResponse();
        this.request("ExportBruteAttacks", req, resp, cb);
    }

    /**
     * This API is used to get the list of servers affected by a vulnerability.
     * @param {DescribeImpactedHostsRequest} req
     * @param {function(string, DescribeImpactedHostsResponse):void} cb
     * @public
     */
    DescribeImpactedHosts(req, cb) {
        let resp = new DescribeImpactedHostsResponse();
        this.request("DescribeImpactedHosts", req, resp, cb);
    }

    /**
     * This API is used to get all server tags.
     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        let resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
    }

    /**
     * This API is used to get the security event statistics.
     * @param {DescribeSecurityTrendsRequest} req
     * @param {function(string, DescribeSecurityTrendsResponse):void} cb
     * @public
     */
    DescribeSecurityTrends(req, cb) {
        let resp = new DescribeSecurityTrendsResponse();
        this.request("DescribeSecurityTrends", req, resp, cb);
    }

    /**
     * This API is used to get the list of vulnerabilities on a single server.
     * @param {DescribeAgentVulsRequest} req
     * @param {function(string, DescribeAgentVulsResponse):void} cb
     * @public
     */
    DescribeAgentVuls(req, cb) {
        let resp = new DescribeAgentVulsResponse();
        this.request("DescribeAgentVuls", req, resp, cb);
    }

    /**
     * This API is used to delete brute force attack records.
     * @param {DeleteBruteAttacksRequest} req
     * @param {function(string, DeleteBruteAttacksResponse):void} cb
     * @public
     */
    DeleteBruteAttacks(req, cb) {
        let resp = new DeleteBruteAttacksResponse();
        this.request("DeleteBruteAttacks", req, resp, cb);
    }

    /**
     * This API is used to get the unusual login location data in the weekly CWP Pro report.
     * @param {DescribeWeeklyReportNonlocalLoginPlacesRequest} req
     * @param {function(string, DescribeWeeklyReportNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DescribeWeeklyReportNonlocalLoginPlaces(req, cb) {
        let resp = new DescribeWeeklyReportNonlocalLoginPlacesResponse();
        this.request("DescribeWeeklyReportNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * This API is used to get the account list.
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * This API is used to get the vulnerability list.
     * @param {DescribeVulsRequest} req
     * @param {function(string, DescribeVulsResponse):void} cb
     * @public
     */
    DescribeVuls(req, cb) {
        let resp = new DescribeVulsResponse();
        this.request("DescribeVuls", req, resp, cb);
    }

    /**
     * This API is used to get the weekly report list.
     * @param {DescribeWeeklyReportsRequest} req
     * @param {function(string, DescribeWeeklyReportsResponse):void} cb
     * @public
     */
    DescribeWeeklyReports(req, cb) {
        let resp = new DescribeWeeklyReportsResponse();
        this.request("DescribeWeeklyReports", req, resp, cb);
    }

    /**
     * This API is used to delete a allowlist rule.
     * @param {DeleteLoginWhiteListRequest} req
     * @param {function(string, DeleteLoginWhiteListResponse):void} cb
     * @public
     */
    DeleteLoginWhiteList(req, cb) {
        let resp = new DeleteLoginWhiteListResponse();
        this.request("DeleteLoginWhiteList", req, resp, cb);
    }

    /**
     * This API is used to create a real-time port acquisition task.
     * @param {CreateOpenPortTaskRequest} req
     * @param {function(string, CreateOpenPortTaskResponse):void} cb
     * @public
     */
    CreateOpenPortTask(req, cb) {
        let resp = new CreateOpenPortTaskResponse();
        this.request("CreateOpenPortTask", req, resp, cb);
    }

    /**
     * This API is used to set whether to automatically activate CWP Pro for newly added servers.
     * @param {ModifyAutoOpenProVersionConfigRequest} req
     * @param {function(string, ModifyAutoOpenProVersionConfigResponse):void} cb
     * @public
     */
    ModifyAutoOpenProVersionConfig(req, cb) {
        let resp = new ModifyAutoOpenProVersionConfigResponse();
        this.request("ModifyAutoOpenProVersionConfig", req, resp, cb);
    }

    /**
     * This API is used to get the CWP Pro information.
     * @param {DescribeProVersionInfoRequest} req
     * @param {function(string, DescribeProVersionInfoResponse):void} cb
     * @public
     */
    DescribeProVersionInfo(req, cb) {
        let resp = new DescribeProVersionInfoResponse();
        this.request("DescribeProVersionInfo", req, resp, cb);
    }

    /**
     * This API is used to ignore one or more vulnerabilities.
     * @param {IgnoreImpactedHostsRequest} req
     * @param {function(string, IgnoreImpactedHostsResponse):void} cb
     * @public
     */
    IgnoreImpactedHosts(req, cb) {
        let resp = new IgnoreImpactedHostsResponse();
        this.request("IgnoreImpactedHosts", req, resp, cb);
    }

    /**
     * This API is used to deactivate CWP Pro.
     * @param {CloseProVersionRequest} req
     * @param {function(string, CloseProVersionResponse):void} cb
     * @public
     */
    CloseProVersion(req, cb) {
        let resp = new CloseProVersionResponse();
        this.request("CloseProVersion", req, resp, cb);
    }

    /**
     * This API is used to activate CWP Pro.
     * @param {OpenProVersionRequest} req
     * @param {function(string, OpenProVersionResponse):void} cb
     * @public
     */
    OpenProVersion(req, cb) {
        let resp = new OpenProVersionResponse();
        this.request("OpenProVersion", req, resp, cb);
    }

    /**
     * This API is used to get the account statistics list.
     * @param {DescribeAccountStatisticsRequest} req
     * @param {function(string, DescribeAccountStatisticsResponse):void} cb
     * @public
     */
    DescribeAccountStatistics(req, cb) {
        let resp = new DescribeAccountStatisticsResponse();
        this.request("DescribeAccountStatistics", req, resp, cb);
    }

    /**
     * This API is used to create a real-time process pulling task.
     * @param {CreateProcessTaskRequest} req
     * @param {function(string, CreateProcessTaskResponse):void} cb
     * @public
     */
    CreateProcessTask(req, cb) {
        let resp = new CreateProcessTaskResponse();
        this.request("CreateProcessTask", req, resp, cb);
    }

    /**
     * This API is used to add or edit tags.
     * @param {EditTagsRequest} req
     * @param {function(string, EditTagsResponse):void} cb
     * @public
     */
    EditTags(req, cb) {
        let resp = new EditTagsResponse();
        this.request("EditTags", req, resp, cb);
    }

    /**
     * This API is used to get server details.
     * @param {DescribeMachineInfoRequest} req
     * @param {function(string, DescribeMachineInfoResponse):void} cb
     * @public
     */
    DescribeMachineInfo(req, cb) {
        let resp = new DescribeMachineInfoResponse();
        this.request("DescribeMachineInfo", req, resp, cb);
    }

    /**
     * This API is used to get the alarm settings.
     * @param {DescribeAlarmAttributeRequest} req
     * @param {function(string, DescribeAlarmAttributeResponse):void} cb
     * @public
     */
    DescribeAlarmAttribute(req, cb) {
        let resp = new DescribeAlarmAttributeResponse();
        this.request("DescribeAlarmAttribute", req, resp, cb);
    }

    /**
     * This API is used to get the list of servers in a specified region.
     * @param {DescribeMachinesRequest} req
     * @param {function(string, DescribeMachinesResponse):void} cb
     * @public
     */
    DescribeMachines(req, cb) {
        let resp = new DescribeMachinesResponse();
        this.request("DescribeMachines", req, resp, cb);
    }

    /**
     * This API is used to add one or more usual login locations.
     * @param {CreateUsualLoginPlacesRequest} req
     * @param {function(string, CreateUsualLoginPlacesResponse):void} cb
     * @public
     */
    CreateUsualLoginPlaces(req, cb) {
        let resp = new CreateUsualLoginPlacesResponse();
        this.request("CreateUsualLoginPlaces", req, resp, cb);
    }

    /**
     * This API is used to get the component list.
     * @param {DescribeComponentsRequest} req
     * @param {function(string, DescribeComponentsResponse):void} cb
     * @public
     */
    DescribeComponents(req, cb) {
        let resp = new DescribeComponentsResponse();
        this.request("DescribeComponents", req, resp, cb);
    }

    /**
     * This API is used to get the list of login allowlist entries.
     * @param {DescribeLoginWhiteListRequest} req
     * @param {function(string, DescribeLoginWhiteListResponse):void} cb
     * @public
     */
    DescribeLoginWhiteList(req, cb) {
        let resp = new DescribeLoginWhiteListResponse();
        this.request("DescribeLoginWhiteList", req, resp, cb);
    }

    /**
     * This API is used to get the process list.
     * @param {DescribeProcessesRequest} req
     * @param {function(string, DescribeProcessesResponse):void} cb
     * @public
     */
    DescribeProcesses(req, cb) {
        let resp = new DescribeProcessesResponse();
        this.request("DescribeProcesses", req, resp, cb);
    }

    /**
     * This API is used to trust a malicious request.
     * @param {TrustMaliciousRequestRequest} req
     * @param {function(string, TrustMaliciousRequestResponse):void} cb
     * @public
     */
    TrustMaliciousRequest(req, cb) {
        let resp = new TrustMaliciousRequestResponse();
        this.request("TrustMaliciousRequest", req, resp, cb);
    }

    /**
     * This API is used to get the list of trojan events.
     * @param {DescribeMalwaresRequest} req
     * @param {function(string, DescribeMalwaresResponse):void} cb
     * @public
     */
    DescribeMalwares(req, cb) {
        let resp = new DescribeMalwaresResponse();
        this.request("DescribeMalwares", req, resp, cb);
    }


}
module.exports = YunjingClient;
