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
const DescribeDedicatedClusterInstanceTypesResponse = models.DescribeDedicatedClusterInstanceTypesResponse;
const DescribeDedicatedClustersRequest = models.DescribeDedicatedClustersRequest;
const DescribeDedicatedClusterTypesResponse = models.DescribeDedicatedClusterTypesResponse;
const DedicatedClusterInstanceType = models.DedicatedClusterInstanceType;
const DedicatedClusterType = models.DedicatedClusterType;
const DeleteSitesRequest = models.DeleteSitesRequest;
const CosInfo = models.CosInfo;
const ZoneInfo = models.ZoneInfo;
const DescribeDedicatedClusterOverviewResponse = models.DescribeDedicatedClusterOverviewResponse;
const DescribeSitesRequest = models.DescribeSitesRequest;
const HostInfo = models.HostInfo;
const CreateSiteResponse = models.CreateSiteResponse;
const DescribeDedicatedSupportedZonesResponse = models.DescribeDedicatedSupportedZonesResponse;
const ModifySiteInfoResponse = models.ModifySiteInfoResponse;
const CreateDedicatedClusterOrderRequest = models.CreateDedicatedClusterOrderRequest;
const ModifyOrderStatusRequest = models.ModifyOrderStatusRequest;
const DedicatedClusterOrderItem = models.DedicatedClusterOrderItem;
const CreateSiteRequest = models.CreateSiteRequest;
const DescribeDedicatedSupportedZonesRequest = models.DescribeDedicatedSupportedZonesRequest;
const DedicatedClusterTypeInfo = models.DedicatedClusterTypeInfo;
const ModifyOrderStatusResponse = models.ModifyOrderStatusResponse;
const InBandwidth = models.InBandwidth;
const DescribeDedicatedClusterCosCapacityRequest = models.DescribeDedicatedClusterCosCapacityRequest;
const DescribeSitesResponse = models.DescribeSitesResponse;
const DescribeSitesDetailRequest = models.DescribeSitesDetailRequest;
const DetailData = models.DetailData;
const DedicatedClusterOrder = models.DedicatedClusterOrder;
const ModifyDedicatedClusterInfoRequest = models.ModifyDedicatedClusterInfoRequest;
const DescribeDedicatedClusterHostsRequest = models.DescribeDedicatedClusterHostsRequest;
const CreateDedicatedClusterOrderResponse = models.CreateDedicatedClusterOrderResponse;
const DescribeDedicatedClusterCosCapacityResponse = models.DescribeDedicatedClusterCosCapacityResponse;
const RegionZoneInfo = models.RegionZoneInfo;
const CreateDedicatedClusterResponse = models.CreateDedicatedClusterResponse;
const DedicatedCluster = models.DedicatedCluster;
const DescribeSitesDetailResponse = models.DescribeSitesDetailResponse;
const DescribeDedicatedClusterOrdersRequest = models.DescribeDedicatedClusterOrdersRequest;
const DescribeDedicatedClustersResponse = models.DescribeDedicatedClustersResponse;
const HostStatistic = models.HostStatistic;
const HostDetailInfo = models.HostDetailInfo;
const CbsInfo = models.CbsInfo;
const ModifySiteDeviceInfoResponse = models.ModifySiteDeviceInfoResponse;
const CreateDedicatedClusterRequest = models.CreateDedicatedClusterRequest;
const DescribeDedicatedClusterHostsResponse = models.DescribeDedicatedClusterHostsResponse;
const LocalNetInfo = models.LocalNetInfo;
const DescribeDedicatedClusterInstanceTypesRequest = models.DescribeDedicatedClusterInstanceTypesRequest;
const ModifyDedicatedClusterInfoResponse = models.ModifyDedicatedClusterInfoResponse;
const ModifySiteInfoRequest = models.ModifySiteInfoRequest;
const SiteDetail = models.SiteDetail;
const DeleteSitesResponse = models.DeleteSitesResponse;
const CosCapacity = models.CosCapacity;
const VpngwBandwidthData = models.VpngwBandwidthData;
const ModifySiteDeviceInfoRequest = models.ModifySiteDeviceInfoRequest;
const DescribeDedicatedClusterHostStatisticsResponse = models.DescribeDedicatedClusterHostStatisticsResponse;
const Site = models.Site;
const DescribeDedicatedClusterTypesRequest = models.DescribeDedicatedClusterTypesRequest;
const DescribeDedicatedClusterOrdersResponse = models.DescribeDedicatedClusterOrdersResponse;
const DescribeDedicatedClusterHostStatisticsRequest = models.DescribeDedicatedClusterHostStatisticsRequest;
const OutBandwidth = models.OutBandwidth;
const DescribeDedicatedClusterOverviewRequest = models.DescribeDedicatedClusterOverviewRequest;
const DeleteDedicatedClustersRequest = models.DeleteDedicatedClustersRequest;
const DeleteDedicatedClustersResponse = models.DeleteDedicatedClustersResponse;


/**
 * cdc client
 * @class
 */
class CdcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdc.intl.tencentcloudapi.com", "2020-12-14", credential, region, profile);
    }
    
    /**
     * This API is used to modify the information about devices in the equipment room.
     * @param {ModifySiteDeviceInfoRequest} req
     * @param {function(string, ModifySiteDeviceInfoResponse):void} cb
     * @public
     */
    ModifySiteDeviceInfo(req, cb) {
        let resp = new ModifySiteDeviceInfoResponse();
        this.request("ModifySiteDeviceInfo", req, resp, cb);
    }

    /**
     * This API is used to delete a CDC.
     * @param {DeleteDedicatedClustersRequest} req
     * @param {function(string, DeleteDedicatedClustersResponse):void} cb
     * @public
     */
    DeleteDedicatedClusters(req, cb) {
        let resp = new DeleteDedicatedClustersResponse();
        this.request("DeleteDedicatedClusters", req, resp, cb);
    }

    /**
     * This API is used to query the Cloud Object Storage (COS) capacity of the CDC.
     * @param {DescribeDedicatedClusterCosCapacityRequest} req
     * @param {function(string, DescribeDedicatedClusterCosCapacityResponse):void} cb
     * @public
     */
    DescribeDedicatedClusterCosCapacity(req, cb) {
        let resp = new DescribeDedicatedClusterCosCapacityResponse();
        this.request("DescribeDedicatedClusterCosCapacity", req, resp, cb);
    }

    /**
     * This API is used to modify the equipment room information.
     * @param {ModifySiteInfoRequest} req
     * @param {function(string, ModifySiteInfoResponse):void} cb
     * @public
     */
    ModifySiteInfo(req, cb) {
        let resp = new ModifySiteInfoResponse();
        this.request("ModifySiteInfo", req, resp, cb);
    }

    /**
     * This API is used to query the statistic information of the host in the CDC.
     * @param {DescribeDedicatedClusterHostStatisticsRequest} req
     * @param {function(string, DescribeDedicatedClusterHostStatisticsResponse):void} cb
     * @public
     */
    DescribeDedicatedClusterHostStatistics(req, cb) {
        let resp = new DescribeDedicatedClusterHostStatisticsResponse();
        this.request("DescribeDedicatedClusterHostStatistics", req, resp, cb);
    }

    /**
     * This API is used to modify the CDC information.
     * @param {ModifyDedicatedClusterInfoRequest} req
     * @param {function(string, ModifyDedicatedClusterInfoResponse):void} cb
     * @public
     */
    ModifyDedicatedClusterInfo(req, cb) {
        let resp = new ModifyDedicatedClusterInfoResponse();
        this.request("ModifyDedicatedClusterInfo", req, resp, cb);
    }

    /**
     * This API is used to query the site list.
     * @param {DescribeSitesRequest} req
     * @param {function(string, DescribeSitesResponse):void} cb
     * @public
     */
    DescribeSites(req, cb) {
        let resp = new DescribeSitesResponse();
        this.request("DescribeSites", req, resp, cb);
    }

    /**
     * This API is used to query the list of CDC orders.
     * @param {DescribeDedicatedClusterOrdersRequest} req
     * @param {function(string, DescribeDedicatedClusterOrdersResponse):void} cb
     * @public
     */
    DescribeDedicatedClusterOrders(req, cb) {
        let resp = new DescribeDedicatedClusterOrdersResponse();
        this.request("DescribeDedicatedClusterOrders", req, resp, cb);
    }

    /**
     * This API is used to modify the status of large and small orders.
     * @param {ModifyOrderStatusRequest} req
     * @param {function(string, ModifyOrderStatusResponse):void} cb
     * @public
     */
    ModifyOrderStatus(req, cb) {
        let resp = new ModifyOrderStatusResponse();
        this.request("ModifyOrderStatus", req, resp, cb);
    }

    /**
     * This API is used to create a CDC.
     * @param {CreateDedicatedClusterRequest} req
     * @param {function(string, CreateDedicatedClusterResponse):void} cb
     * @public
     */
    CreateDedicatedCluster(req, cb) {
        let resp = new CreateDedicatedClusterResponse();
        this.request("CreateDedicatedCluster", req, resp, cb);
    }

    /**
     * This API is used to query the CDC list.
     * @param {DescribeDedicatedClustersRequest} req
     * @param {function(string, DescribeDedicatedClustersResponse):void} cb
     * @public
     */
    DescribeDedicatedClusters(req, cb) {
        let resp = new DescribeDedicatedClustersResponse();
        this.request("DescribeDedicatedClusters", req, resp, cb);
    }

    /**
     * This API is used to query host information of the CDC
     * @param {DescribeDedicatedClusterHostsRequest} req
     * @param {function(string, DescribeDedicatedClusterHostsResponse):void} cb
     * @public
     */
    DescribeDedicatedClusterHosts(req, cb) {
        let resp = new DescribeDedicatedClusterHostsResponse();
        this.request("DescribeDedicatedClusterHosts", req, resp, cb);
    }

    /**
     * This API is used to query the list of AZs supported by the CDC.
     * @param {DescribeDedicatedSupportedZonesRequest} req
     * @param {function(string, DescribeDedicatedSupportedZonesResponse):void} cb
     * @public
     */
    DescribeDedicatedSupportedZones(req, cb) {
        let resp = new DescribeDedicatedSupportedZonesResponse();
        this.request("DescribeDedicatedSupportedZones", req, resp, cb);
    }

    /**
     * This API is used to create a CDC order.
     * @param {CreateDedicatedClusterOrderRequest} req
     * @param {function(string, CreateDedicatedClusterOrderResponse):void} cb
     * @public
     */
    CreateDedicatedClusterOrder(req, cb) {
        let resp = new CreateDedicatedClusterOrderResponse();
        this.request("CreateDedicatedClusterOrder", req, resp, cb);
    }

    /**
     * This API is used to query the overview of the CDC
     * @param {DescribeDedicatedClusterOverviewRequest} req
     * @param {function(string, DescribeDedicatedClusterOverviewResponse):void} cb
     * @public
     */
    DescribeDedicatedClusterOverview(req, cb) {
        let resp = new DescribeDedicatedClusterOverviewResponse();
        this.request("DescribeDedicatedClusterOverview", req, resp, cb);
    }

    /**
     * This API is used to delete a site.
     * @param {DeleteSitesRequest} req
     * @param {function(string, DeleteSitesResponse):void} cb
     * @public
     */
    DeleteSites(req, cb) {
        let resp = new DeleteSitesResponse();
        this.request("DeleteSites", req, resp, cb);
    }

    /**
     * This API is used to query site details.
     * @param {DescribeSitesDetailRequest} req
     * @param {function(string, DescribeSitesDetailResponse):void} cb
     * @public
     */
    DescribeSitesDetail(req, cb) {
        let resp = new DescribeSitesDetailResponse();
        this.request("DescribeSitesDetail", req, resp, cb);
    }

    /**
     * This API is used to query instance types supported by the CDC.
     * @param {DescribeDedicatedClusterInstanceTypesRequest} req
     * @param {function(string, DescribeDedicatedClusterInstanceTypesResponse):void} cb
     * @public
     */
    DescribeDedicatedClusterInstanceTypes(req, cb) {
        let resp = new DescribeDedicatedClusterInstanceTypesResponse();
        this.request("DescribeDedicatedClusterInstanceTypes", req, resp, cb);
    }

    /**
     * This API is used to query the configuration list of the CDC.
     * @param {DescribeDedicatedClusterTypesRequest} req
     * @param {function(string, DescribeDedicatedClusterTypesResponse):void} cb
     * @public
     */
    DescribeDedicatedClusterTypes(req, cb) {
        let resp = new DescribeDedicatedClusterTypesResponse();
        this.request("DescribeDedicatedClusterTypes", req, resp, cb);
    }

    /**
     * This API is used to create a site.
     * @param {CreateSiteRequest} req
     * @param {function(string, CreateSiteResponse):void} cb
     * @public
     */
    CreateSite(req, cb) {
        let resp = new CreateSiteResponse();
        this.request("CreateSite", req, resp, cb);
    }


}
module.exports = CdcClient;
