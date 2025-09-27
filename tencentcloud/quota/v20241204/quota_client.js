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
const EnableAlarmResponse = models.EnableAlarmResponse;
const CreateAlarmResponse = models.CreateAlarmResponse;
const CreateAlarmRequest = models.CreateAlarmRequest;
const Alarm = models.Alarm;
const EnableAlarmRequest = models.EnableAlarmRequest;
const DeleteAlarmResponse = models.DeleteAlarmResponse;
const DeleteAlarmRequest = models.DeleteAlarmRequest;
const DescribeAlarmsResponse = models.DescribeAlarmsResponse;
const UpdateAlarmRequest = models.UpdateAlarmRequest;
const UpdateAlarmResponse = models.UpdateAlarmResponse;
const DescribeAlarmsRequest = models.DescribeAlarmsRequest;


/**
 * quota client
 * @class
 */
class QuotaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("quota.intl.tencentcloudapi.com", "2024-12-04", credential, region, profile);
    }
    
    /**
     * Add alarm rules
     * @param {CreateAlarmRequest} req
     * @param {function(string, CreateAlarmResponse):void} cb
     * @public
     */
    CreateAlarm(req, cb) {
        let resp = new CreateAlarmResponse();
        this.request("CreateAlarm", req, resp, cb);
    }

    /**
     * Modifies alarm rules
     * @param {UpdateAlarmRequest} req
     * @param {function(string, UpdateAlarmResponse):void} cb
     * @public
     */
    UpdateAlarm(req, cb) {
        let resp = new UpdateAlarmResponse();
        this.request("UpdateAlarm", req, resp, cb);
    }

    /**
     * Deletes alarm rules
     * @param {DeleteAlarmRequest} req
     * @param {function(string, DeleteAlarmResponse):void} cb
     * @public
     */
    DeleteAlarm(req, cb) {
        let resp = new DeleteAlarmResponse();
        this.request("DeleteAlarm", req, resp, cb);
    }

    /**
     * This API is used to query the alarm rule list.
     * @param {DescribeAlarmsRequest} req
     * @param {function(string, DescribeAlarmsResponse):void} cb
     * @public
     */
    DescribeAlarms(req, cb) {
        let resp = new DescribeAlarmsResponse();
        this.request("DescribeAlarms", req, resp, cb);
    }

    /**
     * This API is used to enable alarm rules.
     * @param {EnableAlarmRequest} req
     * @param {function(string, EnableAlarmResponse):void} cb
     * @public
     */
    EnableAlarm(req, cb) {
        let resp = new EnableAlarmResponse();
        this.request("EnableAlarm", req, resp, cb);
    }


}
module.exports = QuotaClient;
