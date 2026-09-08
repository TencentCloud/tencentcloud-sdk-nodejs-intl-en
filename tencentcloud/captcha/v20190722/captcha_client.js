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
const ModifyCaptchaInfoInternationalRequest = models.ModifyCaptchaInfoInternationalRequest;
const DeleteIpWhiteListInternationalResponse = models.DeleteIpWhiteListInternationalResponse;
const DescribeCaptchaConsoleDataInternational = models.DescribeCaptchaConsoleDataInternational;
const RemoveCaptchaInfoInternationalRequest = models.RemoveCaptchaInfoInternationalRequest;
const CreateCaptchaInfoInternationalResponse = models.CreateCaptchaInfoInternationalResponse;
const ModifyIpWhiteListInternationalResponse = models.ModifyIpWhiteListInternationalResponse;
const ModifyIpWhiteListInternationalRequest = models.ModifyIpWhiteListInternationalRequest;
const CreateIpWhiteListInternationalRequest = models.CreateIpWhiteListInternationalRequest;
const DescribeIpWhiteListInternationalRequest = models.DescribeIpWhiteListInternationalRequest;
const ModifyCaptchaInfoInternationalResponse = models.ModifyCaptchaInfoInternationalResponse;
const DescribeCaptchaConsoleSubDataInternational = models.DescribeCaptchaConsoleSubDataInternational;
const OrderByInternational = models.OrderByInternational;
const DescribeCaptchaInfoListInternationalRequest = models.DescribeCaptchaInfoListInternationalRequest;
const DescribeCaptchaWhiteListItem = models.DescribeCaptchaWhiteListItem;
const DescribeIpWhiteListInternationalResponse = models.DescribeIpWhiteListInternationalResponse;
const CreateIpWhiteListInternationalResponse = models.CreateIpWhiteListInternationalResponse;
const DescribeCaptchaIpWhiteListDataNew = models.DescribeCaptchaIpWhiteListDataNew;
const CreateCaptchaInfoInternationalRequest = models.CreateCaptchaInfoInternationalRequest;
const DescribeCaptchaResultRequest = models.DescribeCaptchaResultRequest;
const DescribeCaptchaResultResponse = models.DescribeCaptchaResultResponse;
const DescribeCaptchaInfoListInternationalResponse = models.DescribeCaptchaInfoListInternationalResponse;
const DeleteIpWhiteListInternationalRequest = models.DeleteIpWhiteListInternationalRequest;
const RemoveCaptchaInfoInternationalResponse = models.RemoveCaptchaInfoInternationalResponse;


/**
 * captcha client
 * @class
 */
class CaptchaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("captcha.intl.tencentcloudapi.com", "2019-07-22", credential, region, profile);
    }
    
    /**
     * Create a captcha: You can create multiple Captcha based on different business needs. Each verification has different client types and security policies. The limit for new Captcha is 50.
     * @param {CreateCaptchaInfoInternationalRequest} req
     * @param {function(string, CreateCaptchaInfoInternationalResponse):void} cb
     * @public
     */
    CreateCaptchaInfoInternational(req, cb) {
        let resp = new CreateCaptchaInfoInternationalResponse();
        this.request("CreateCaptchaInfoInternational", req, resp, cb);
    }

    /**
     * Delete a captcha: once deleted, verification scenarios using this CaptchaAppId will fail to load the verification code on the frontend, and invoice verification will report an error on the backend. Proceed with caution.
     * @param {RemoveCaptchaInfoInternationalRequest} req
     * @param {function(string, RemoveCaptchaInfoInternationalResponse):void} cb
     * @public
     */
    RemoveCaptchaInfoInternational(req, cb) {
        let resp = new RemoveCaptchaInfoInternationalResponse();
        this.request("RemoveCaptchaInfoInternational", req, resp, cb);
    }

    /**
     * Delete an IP allowlist: You can delete an IP allowlist based on different business needs.
     * @param {DeleteIpWhiteListInternationalRequest} req
     * @param {function(string, DeleteIpWhiteListInternationalResponse):void} cb
     * @public
     */
    DeleteIpWhiteListInternational(req, cb) {
        let resp = new DeleteIpWhiteListInternationalResponse();
        this.request("DeleteIpWhiteListInternational", req, resp, cb);
    }

    /**
     * Edit IP allowlist: You can edit the IP allowlist based on different business needs.
     * @param {ModifyIpWhiteListInternationalRequest} req
     * @param {function(string, ModifyIpWhiteListInternationalResponse):void} cb
     * @public
     */
    ModifyIpWhiteListInternational(req, cb) {
        let resp = new ModifyIpWhiteListInternationalResponse();
        this.request("ModifyIpWhiteListInternational", req, resp, cb);
    }

    /**
     * This API is used to query the result of CAPTCHA ticket verification (web and app).
     * @param {DescribeCaptchaResultRequest} req
     * @param {function(string, DescribeCaptchaResultResponse):void} cb
     * @public
     */
    DescribeCaptchaResult(req, cb) {
        let resp = new DescribeCaptchaResultResponse();
        this.request("DescribeCaptchaResult", req, resp, cb);
    }

    /**
     * Create an IP allowlist: You can create an IP allowlist based on different business needs.
     * @param {CreateIpWhiteListInternationalRequest} req
     * @param {function(string, CreateIpWhiteListInternationalResponse):void} cb
     * @public
     */
    CreateIpWhiteListInternational(req, cb) {
        let resp = new CreateIpWhiteListInternationalResponse();
        this.request("CreateIpWhiteListInternational", req, resp, cb);
    }

    /**
     * IP allowlist list: You can query the IP whitelist list based on different business needs.
     * @param {DescribeIpWhiteListInternationalRequest} req
     * @param {function(string, DescribeIpWhiteListInternationalResponse):void} cb
     * @public
     */
    DescribeIpWhiteListInternational(req, cb) {
        let resp = new DescribeIpWhiteListInternationalResponse();
        this.request("DescribeIpWhiteListInternational", req, resp, cb);
    }

    /**
     * Change the captcha configuration, including basic, appearance, and security settings such as captcha name, prompt language, and validation type.
     * @param {ModifyCaptchaInfoInternationalRequest} req
     * @param {function(string, ModifyCaptchaInfoInternationalResponse):void} cb
     * @public
     */
    ModifyCaptchaInfoInternational(req, cb) {
        let resp = new ModifyCaptchaInfoInternationalResponse();
        this.request("ModifyCaptchaInfoInternational", req, resp, cb);
    }

    /**
     * Query the Captcha list to obtain all verification CaptchaAppIds, verification names, and other information internationally.
     * @param {DescribeCaptchaInfoListInternationalRequest} req
     * @param {function(string, DescribeCaptchaInfoListInternationalResponse):void} cb
     * @public
     */
    DescribeCaptchaInfoListInternational(req, cb) {
        let resp = new DescribeCaptchaInfoListInternationalResponse();
        this.request("DescribeCaptchaInfoListInternational", req, resp, cb);
    }


}
module.exports = CaptchaClient;
