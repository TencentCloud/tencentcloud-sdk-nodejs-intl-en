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
const DescribeFabricBlockRequest = models.DescribeFabricBlockRequest;
const InvokeFabricChaincodeResponse = models.InvokeFabricChaincodeResponse;
const Transaction = models.Transaction;
const InvokeFabricChaincodeRequest = models.InvokeFabricChaincodeRequest;
const QueryFabricChaincodeRequest = models.QueryFabricChaincodeRequest;
const DescribeFabricBlockResponse = models.DescribeFabricBlockResponse;
const QueryFabricChaincodeResponse = models.QueryFabricChaincodeResponse;
const DescribeFabricTransactionResponse = models.DescribeFabricTransactionResponse;
const DescribeFabricTransactionRequest = models.DescribeFabricTransactionRequest;


/**
 * tbaas client
 * @class
 */
class TbaasClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tbaas.intl.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    
    /**
     * This API is used to retrieve the detailed information of a block in Fabric.
     * @param {DescribeFabricBlockRequest} req
     * @param {function(string, DescribeFabricBlockResponse):void} cb
     * @public
     */
    DescribeFabricBlock(req, cb) {
        let resp = new DescribeFabricBlockResponse();
        this.request("DescribeFabricBlock", req, resp, cb);
    }

    /**
     * This API is used to obtain detailed information of Fabric transactions.
     * @param {DescribeFabricTransactionRequest} req
     * @param {function(string, DescribeFabricTransactionResponse):void} cb
     * @public
     */
    DescribeFabricTransaction(req, cb) {
        let resp = new DescribeFabricTransactionResponse();
        this.request("DescribeFabricTransaction", req, resp, cb);
    }

    /**
     * This API is used to call a Fabric user contract to execute a transaction.
     * @param {InvokeFabricChaincodeRequest} req
     * @param {function(string, InvokeFabricChaincodeResponse):void} cb
     * @public
     */
    InvokeFabricChaincode(req, cb) {
        let resp = new InvokeFabricChaincodeResponse();
        this.request("InvokeFabricChaincode", req, resp, cb);
    }

    /**
     * This API is used to make a user contract call in Fabric for querying.
     * @param {QueryFabricChaincodeRequest} req
     * @param {function(string, QueryFabricChaincodeResponse):void} cb
     * @public
     */
    QueryFabricChaincode(req, cb) {
        let resp = new QueryFabricChaincodeResponse();
        this.request("QueryFabricChaincode", req, resp, cb);
    }


}
module.exports = TbaasClient;
