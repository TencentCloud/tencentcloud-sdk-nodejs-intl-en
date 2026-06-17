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
const LBChargePrepaid = models.LBChargePrepaid;
const DescribeLoadBalancerListByCertIdRequest = models.DescribeLoadBalancerListByCertIdRequest;
const ClassicalListener = models.ClassicalListener;
const TargetRegionInfo = models.TargetRegionInfo;
const SetCustomizedConfigForLoadBalancerRequest = models.SetCustomizedConfigForLoadBalancerRequest;
const DescribeCustomizedConfigListRequest = models.DescribeCustomizedConfigListRequest;
const ExtraInfo = models.ExtraInfo;
const DescribeCustomizedConfigAssociateListResponse = models.DescribeCustomizedConfigAssociateListResponse;
const CloneLoadBalancerResponse = models.CloneLoadBalancerResponse;
const BatchModifyTargetWeightResponse = models.BatchModifyTargetWeightResponse;
const DescribeLoadBalancerListByCertIdResponse = models.DescribeLoadBalancerListByCertIdResponse;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const LoadBalancerHealth = models.LoadBalancerHealth;
const DescribeTargetHealthRequest = models.DescribeTargetHealthRequest;
const CloneLoadBalancerRequest = models.CloneLoadBalancerRequest;
const Target = models.Target;
const RsWeightRule = models.RsWeightRule;
const DescribeCustomizedConfigListResponse = models.DescribeCustomizedConfigListResponse;
const CertIdRelatedWithLoadBalancers = models.CertIdRelatedWithLoadBalancers;
const RuleHealth = models.RuleHealth;
const TagInfo = models.TagInfo;
const ConfigListItem = models.ConfigListItem;
const DescribeClassicalLBListenersResponse = models.DescribeClassicalLBListenersResponse;
const SnatIp = models.SnatIp;
const DescribeTargetHealthResponse = models.DescribeTargetHealthResponse;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const ClusterItem = models.ClusterItem;
const BindDetailItem = models.BindDetailItem;
const SetCustomizedConfigForLoadBalancerResponse = models.SetCustomizedConfigForLoadBalancerResponse;
const AvailableZoneAffinityInfo = models.AvailableZoneAffinityInfo;
const Filter = models.Filter;
const DescribeCustomizedConfigAssociateListRequest = models.DescribeCustomizedConfigAssociateListRequest;
const DescribeLoadBalancersDetailRequest = models.DescribeLoadBalancersDetailRequest;
const LoadBalancerDetail = models.LoadBalancerDetail;
const DescribeLoadBalancersRequest = models.DescribeLoadBalancersRequest;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const ZoneInfo = models.ZoneInfo;
const ExclusiveCluster = models.ExclusiveCluster;
const InternetAccessible = models.InternetAccessible;
const DescribeClassicalLBListenersRequest = models.DescribeClassicalLBListenersRequest;
const TargetHealth = models.TargetHealth;
const ListenerHealth = models.ListenerHealth;
const DescribeLoadBalancersDetailResponse = models.DescribeLoadBalancersDetailResponse;
const BatchModifyTargetWeightRequest = models.BatchModifyTargetWeightRequest;
const LoadBalancer = models.LoadBalancer;


/**
 * clb client
 * @class
 */
class ClbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("clb.intl.tencentcloudapi.com", "2023-04-17", credential, region, profile);
    }
    
    /**
     * This API is used to obtain listener information of classic CLB.
     * @param {DescribeClassicalLBListenersRequest} req
     * @param {function(string, DescribeClassicalLBListenersResponse):void} cb
     * @public
     */
    DescribeClassicalLBListeners(req, cb) {
        let resp = new DescribeClassicalLBListenersResponse();
        this.request("DescribeClassicalLBListeners", req, resp, cb);
    }

    /**
     * Query the detailed information of Cloud Load Balancer, including listeners, rules, and backend targets.
     * @param {DescribeLoadBalancersDetailRequest} req
     * @param {function(string, DescribeLoadBalancersDetailResponse):void} cb
     * @public
     */
    DescribeLoadBalancersDetail(req, cb) {
        let resp = new DescribeLoadBalancersDetailResponse();
        this.request("DescribeLoadBalancersDetail", req, resp, cb);
    }

    /**
     * This API is used to query the locations, servers, or CLB instances bound to a configuration. If there are domains, the result will be filtered by domain.
     * @param {DescribeCustomizedConfigAssociateListRequest} req
     * @param {function(string, DescribeCustomizedConfigAssociateListResponse):void} cb
     * @public
     */
    DescribeCustomizedConfigAssociateList(req, cb) {
        let resp = new DescribeCustomizedConfigAssociateListResponse();
        this.request("DescribeCustomizedConfigAssociateList", req, resp, cb);
    }

    /**
     * Pull the list of custom configurations. The configurations of the specified type under the user's AppId will be returned.
     * @param {DescribeCustomizedConfigListRequest} req
     * @param {function(string, DescribeCustomizedConfigListResponse):void} cb
     * @public
     */
    DescribeCustomizedConfigList(req, cb) {
        let resp = new DescribeCustomizedConfigListResponse();
        this.request("DescribeCustomizedConfigList", req, resp, cb);
    }

    /**
     * This API is used to query the list of CLB instances associated with a certificate in a region by certificate ID.
     * @param {DescribeLoadBalancerListByCertIdRequest} req
     * @param {function(string, DescribeLoadBalancerListByCertIdResponse):void} cb
     * @public
     */
    DescribeLoadBalancerListByCertId(req, cb) {
        let resp = new DescribeLoadBalancerListByCertIdResponse();
        this.request("DescribeLoadBalancerListByCertId", req, resp, cb);
    }

    /**
     * This API is used to create, delete, modify, bind, and unbind custom CLB configurations.
     * @param {SetCustomizedConfigForLoadBalancerRequest} req
     * @param {function(string, SetCustomizedConfigForLoadBalancerResponse):void} cb
     * @public
     */
    SetCustomizedConfigForLoadBalancer(req, cb) {
        let resp = new SetCustomizedConfigForLoadBalancerResponse();
        this.request("SetCustomizedConfigForLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to clone a Cloud Load Balancer instance. Based on the designated CLB instance, it creates a new instance with identical rules and binding relationships. The cloning operation is asynchronous. The cloned data is based on the call to CloneLoadBalancer. If the cloned CLB changes after calling CloneLoadBalancer, the change rules will not be cloned.

Limitation notes:
Does not support basic networks, classic CLB, IPv6, or NAT64.
Unsupported Monthly Subscription CLB
The listener does not support QUIC or port ranges.
No support for backend types: target group, Serverless Cloud Function (SCF).
Personalized configuration, redirection configuration, and security group default allow switch will not be cloned and must be manually configured.

API calling
BGP bandwidth package must include bandwidth package ID
Exclusive cluster cloning must pass corresponding parameters, otherwise shared instance creation is used.
The feature is in beta test. You can submit a [beta test application](https://www.tencentcloud.com/apply/p/1akuvsmyn0g?from_cn_redirect=1).
     * @param {CloneLoadBalancerRequest} req
     * @param {function(string, CloneLoadBalancerResponse):void} cb
     * @public
     */
    CloneLoadBalancer(req, cb) {
        let resp = new CloneLoadBalancerResponse();
        this.request("CloneLoadBalancer", req, resp, cb);
    }

    /**
     * The BatchModifyTargetWeight API is used to modify the forwarding weight of backend machines bound to a Cloud Load Balancer listener in batch. The resource limit is 500. This is an async API. After it returns a successful result, call DescribeTaskStatus API with the returned RequestID as input parameter to check whether this task is successful.<br/>This API is supported by layer-4 and layer-7 CLB listeners but not by classic CLB.
     * @param {BatchModifyTargetWeightRequest} req
     * @param {function(string, BatchModifyTargetWeightResponse):void} cb
     * @public
     */
    BatchModifyTargetWeight(req, cb) {
        let resp = new BatchModifyTargetWeightResponse();
        this.request("BatchModifyTargetWeight", req, resp, cb);
    }

    /**
     * This API (DescribeTargetHealth) is used to query the health check result of a real server of a CLB instance. It is not supported by Classic CLB.
     * @param {DescribeTargetHealthRequest} req
     * @param {function(string, DescribeTargetHealthResponse):void} cb
     * @public
     */
    DescribeTargetHealth(req, cb) {
        let resp = new DescribeTargetHealthResponse();
        this.request("DescribeTargetHealth", req, resp, cb);
    }

    /**
     * This API is used to create a Cloud Load Balancer instance (this interface supports only pay-as-you-go CLB instances. For annual/monthly subscription, proceed to purchase through the console). To use the CLB service, you must purchase one or more CLB instances. After successfully calling the API, the unique ID of the CLB instance will be returned. CLB instances are divided into public network and private network types. For details, refer to the product type in the product description.
Note: (1) To apply for Cloud Load Balancer (CLB) in a specified availability zone or cross-zone disaster recovery (only supported in Hong Kong (China)), [submit a request](https://console.cloud.tencent.com/workorder/category) if you need to experience the feature. (2) Currently only Beijing, Shanghai, and Guangzhou support IPv6. (3) The default purchase quota for an account in each region is 100 for public network and 100 for private network.
This is an async API. After the API returns successfully, you can use the DescribeLoadBalancers API to query the status of the Cloud Load Balancer instance (such as creating and normal) to confirm whether the creation is successful.
     * @param {CreateLoadBalancerRequest} req
     * @param {function(string, CreateLoadBalancerResponse):void} cb
     * @public
     */
    CreateLoadBalancer(req, cb) {
        let resp = new CreateLoadBalancerResponse();
        this.request("CreateLoadBalancer", req, resp, cb);
    }

    /**
     * This API is used to query the list of CLB instances in a region.
     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        let resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }


}
module.exports = ClbClient;
