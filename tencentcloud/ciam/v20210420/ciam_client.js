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
const ListUserGroupsRequest = models.ListUserGroupsRequest;
const Pageable = models.Pageable;
const ListUserGroupsResponse = models.ListUserGroupsResponse;
const UserGroup = models.UserGroup;


/**
 * ciam client
 * @class
 */
class CiamClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ciam.tencentcloudapi.com", "2021-04-20", credential, region, profile);
    }
    
    /**
     * This API is used to list user groups.
     * @param {ListUserGroupsRequest} req
     * @param {function(string, ListUserGroupsResponse):void} cb
     * @public
     */
    ListUserGroups(req, cb) {
        let resp = new ListUserGroupsResponse();
        this.request("ListUserGroups", req, resp, cb);
    }


}
module.exports = CiamClient;
