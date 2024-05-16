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
const InternationalIDPassport = models.InternationalIDPassport;
const GetSdkVerificationResultResponse = models.GetSdkVerificationResultResponse;
const ThailandIDCard = models.ThailandIDCard;
const GetSdkVerificationResultRequest = models.GetSdkVerificationResultRequest;
const HKIDCard = models.HKIDCard;
const SingaporeIDCard = models.SingaporeIDCard;
const IndonesiaDrivingLicense = models.IndonesiaDrivingLicense;
const NormalCardInfo = models.NormalCardInfo;
const ApplySdkVerificationTokenRequest = models.ApplySdkVerificationTokenRequest;
const CardVerifyResult = models.CardVerifyResult;
const Address = models.Address;
const CardInfo = models.CardInfo;
const PhilippinesVoteID = models.PhilippinesVoteID;
const PhilippinesSSSID = models.PhilippinesSSSID;
const NormalMLIDCard = models.NormalMLIDCard;
const IndonesiaIDCard = models.IndonesiaIDCard;
const ApplySdkVerificationTokenResponse = models.ApplySdkVerificationTokenResponse;
const NormalHKIDCard = models.NormalHKIDCard;
const FileInfo = models.FileInfo;
const PhilippinesDrivingLicense = models.PhilippinesDrivingLicense;
const NormalIndonesiaIDCard = models.NormalIndonesiaIDCard;
const MacaoIDCard = models.MacaoIDCard;
const GeneralCard = models.GeneralCard;
const PhilippinesUMID = models.PhilippinesUMID;
const PhilippinesTinID = models.PhilippinesTinID;
const MLIDCard = models.MLIDCard;
const NormalThailandIDCard = models.NormalThailandIDCard;
const CompareResult = models.CompareResult;


/**
 * faceid client
 * @class
 */
class FaceidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("faceid.tencentcloudapi.com", "2018-03-01", credential, region, profile);
    }
    
    /**
     * This API is used to apply for a token before calling the Identity Verification SDK service each time. This token is required for initiating the verification process and getting the result after the verification is completed.
     * @param {ApplySdkVerificationTokenRequest} req
     * @param {function(string, ApplySdkVerificationTokenResponse):void} cb
     * @public
     */
    ApplySdkVerificationToken(req, cb) {
        let resp = new ApplySdkVerificationTokenResponse();
        this.request("ApplySdkVerificationToken", req, resp, cb);
    }

    /**
     * This API is used to get the verification result with the corresponding token after the SDK-based verification is completed. The token is valid for three days after issuance and can be called multiple times.
     * @param {GetSdkVerificationResultRequest} req
     * @param {function(string, GetSdkVerificationResultResponse):void} cb
     * @public
     */
    GetSdkVerificationResult(req, cb) {
        let resp = new GetSdkVerificationResultResponse();
        this.request("GetSdkVerificationResult", req, resp, cb);
    }


}
module.exports = FaceidClient;
