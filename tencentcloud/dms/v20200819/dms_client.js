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
const SendTemplatedEmailRequest = models.SendTemplatedEmailRequest;
const SendTemplatedEmailResponse = models.SendTemplatedEmailResponse;
const SendEmailRequest = models.SendEmailRequest;
const SendEmailResponse = models.SendEmailResponse;


/**
 * dms client
 * @class
 */
class DmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dms.intl.tencentcloudapi.com", "2020-08-19", credential, region, profile);
    }
    
    /**
     * This API is used to send template emails.
     * @param {SendTemplatedEmailRequest} req
     * @param {function(string, SendTemplatedEmailResponse):void} cb
     * @public
     */
    SendTemplatedEmail(req, cb) {
        let resp = new SendTemplatedEmailResponse();
        this.request("SendTemplatedEmail", req, resp, cb);
    }

    /**
     * This API is used to send regular emails.
     * @param {SendEmailRequest} req
     * @param {function(string, SendEmailResponse):void} cb
     * @public
     */
    SendEmail(req, cb) {
        let resp = new SendEmailResponse();
        this.request("SendEmail", req, resp, cb);
    }


}
module.exports = DmsClient;
