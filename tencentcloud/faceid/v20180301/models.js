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
const AbstractModel = require("../../common/abstract_model");

/**
 * ID cards of Hong Kong, Macao and Taiwan (China), and international passport.
 * @class
 */
class InternationalIDPassport extends  AbstractModel {
    constructor(){
        super();

        /**
         * Passport ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Full name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Surname = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GivenName = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Gender (F-Female, M-Male)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Expiration date
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfExpiration = null;

        /**
         * Issuing country
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuingCountry = null;

        /**
         * Nationality code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NationalityCode = null;

        /**
         * The first line at the bottom, the MRZ Code sequence
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PassportCodeFirst = null;

        /**
         * The second line at the bottom, the MRZ Code sequence
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PassportCodeSecond = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.Surname = 'Surname' in params ? params.Surname : null;
        this.GivenName = 'GivenName' in params ? params.GivenName : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.IssuingCountry = 'IssuingCountry' in params ? params.IssuingCountry : null;
        this.NationalityCode = 'NationalityCode' in params ? params.NationalityCode : null;
        this.PassportCodeFirst = 'PassportCodeFirst' in params ? params.PassportCodeFirst : null;
        this.PassportCodeSecond = 'PassportCodeSecond' in params ? params.PassportCodeSecond : null;

    }
}

/**
 * GetSdkVerificationResult response structure.
 * @class
 */
class GetSdkVerificationResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The result code of the verification result.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The verification result description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * The charge count.
         * @type {number || null}
         */
        this.ChargeCount = null;

        /**
         * The results of multiple OCR processes (in order). The result of the final process is used as the valid result.
         * @type {Array.<CardVerifyResult> || null}
         */
        this.CardVerifyResults = null;

        /**
         * The results of multiple liveness detection processes (in order). The result of the final process is used as the valid result.
         * @type {Array.<CompareResult> || null}
         */
        this.CompareResults = null;

        /**
         * Data passed through in the process of getting the token.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ChargeCount = 'ChargeCount' in params ? params.ChargeCount : null;

        if (params.CardVerifyResults) {
            this.CardVerifyResults = new Array();
            for (let z in params.CardVerifyResults) {
                let obj = new CardVerifyResult();
                obj.deserialize(params.CardVerifyResults[z]);
                this.CardVerifyResults.push(obj);
            }
        }

        if (params.CompareResults) {
            this.CompareResults = new Array();
            for (let z in params.CompareResults) {
                let obj = new CompareResult();
                obj.deserialize(params.CompareResults[z]);
                this.CompareResults.push(obj);
            }
        }
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Thailand ID Card
 * @class
 */
class ThailandIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfBirth = null;

        /**
         * Date of expiry
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfExpiry = null;

        /**
         * Date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfIssue = null;

        /**
         * Issuing country
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedCountry = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.DateOfExpiry = 'DateOfExpiry' in params ? params.DateOfExpiry : null;
        this.DateOfIssue = 'DateOfIssue' in params ? params.DateOfIssue : null;
        this.IssuedCountry = 'IssuedCountry' in params ? params.IssuedCountry : null;

    }
}

/**
 * GetSdkVerificationResult request structure.
 * @class
 */
class GetSdkVerificationResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token used to identify an SDK-based verification process.
         * @type {string || null}
         */
        this.SdkToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkToken = 'SdkToken' in params ? params.SdkToken : null;

    }
}

/**
 * Hong Kong ID card.
 * @class
 */
class HKIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.CnName = null;

        /**
         * English name
Note: This field may return null, indicating that no valid values can be obtained.
Example: SAN, Nan
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * Telex code correspondint to the Chinese name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TelexCode = null;

        /**
         * Gender: "Male-M" or "Female-F"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
Example: 01-01-2001
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Permanent resident ID card: 0-non-permanent; 1-permanent; -1-unknown
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Permanent = null;

        /**
         * ID card number
Note: This field may return null, indicating that no valid values can be obtained.
Example: C000000(E)
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * Lisence symbol, which is the symbol below Birthday. Example: "***AZ"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Symbol = null;

        /**
         * The first date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstIssueDate = null;

        /**
         * The current date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CurrentIssueDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CnName = 'CnName' in params ? params.CnName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.TelexCode = 'TelexCode' in params ? params.TelexCode : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Permanent = 'Permanent' in params ? params.Permanent : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Symbol = 'Symbol' in params ? params.Symbol : null;
        this.FirstIssueDate = 'FirstIssueDate' in params ? params.FirstIssueDate : null;
        this.CurrentIssueDate = 'CurrentIssueDate' in params ? params.CurrentIssueDate : null;

    }
}

/**
 * Singapore ID Card
 * @class
 */
class SingaporeIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Chinese name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChName = null;

        /**
         * English name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Country of birth
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CountryOfBirth = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Address (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Nationality (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Race = null;

        /**
         *  NRIC number (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NRICCode = null;

        /**
         * Post number (on the front)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PostCode = null;

        /**
         * Date of expiry (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfExpiration = null;

        /**
         * Date of issue (on the back)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DateOfIssue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChName = 'ChName' in params ? params.ChName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.CountryOfBirth = 'CountryOfBirth' in params ? params.CountryOfBirth : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Race = 'Race' in params ? params.Race : null;
        this.NRICCode = 'NRICCode' in params ? params.NRICCode : null;
        this.PostCode = 'PostCode' in params ? params.PostCode : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.DateOfIssue = 'DateOfIssue' in params ? params.DateOfIssue : null;

    }
}

/**
 * Indonesia driving license.
 * @class
 */
class IndonesiaDrivingLicense extends  AbstractModel {
    constructor(){
        super();

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Expiration date
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * Date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * Issuing country
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedCountry = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;
        this.IssuedCountry = 'IssuedCountry' in params ? params.IssuedCountry : null;

    }
}

/**
 * License OCR result
 * @class
 */
class NormalCardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hong Kong ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NormalHKIDCard || null}
         */
        this.HKIDCard = null;

        /**
         * Malaysia ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NormalMLIDCard || null}
         */
        this.MLIDCard = null;

        /**
         * Philippines VoteID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesVoteID || null}
         */
        this.PhilippinesVoteID = null;

        /**
         * Indonesia ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NormalIndonesiaIDCard || null}
         */
        this.IndonesiaIDCard = null;

        /**
         * Philippines Driving License
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesDrivingLicense || null}
         */
        this.PhilippinesDrivingLicense = null;

        /**
         * Philippines TinID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesTinID || null}
         */
        this.PhilippinesTinID = null;

        /**
         * Philippines SSSID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesSSSID || null}
         */
        this.PhilippinesSSSID = null;

        /**
         * Philippines UMID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesUMID || null}
         */
        this.PhilippinesUMID = null;

        /**
         * ID Cards of Hong Kong, Macao and Taiwan (China), and International Passport
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InternationalIDPassport || null}
         */
        this.InternationalIDPassport = null;

        /**
         * General license information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {GeneralCard || null}
         */
        this.GeneralCard = null;

        /**
         * Indonesia Driving License
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {IndonesiaDrivingLicense || null}
         */
        this.IndonesiaDrivingLicense = null;

        /**
         * Thailand ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NormalThailandIDCard || null}
         */
        this.ThailandIDCard = null;

        /**
         * Singapore ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SingaporeIDCard || null}
         */
        this.SingaporeIDCard = null;

        /**
         * Macao ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MacaoIDCard || null}
         */
        this.MacaoIDCard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HKIDCard) {
            let obj = new NormalHKIDCard();
            obj.deserialize(params.HKIDCard)
            this.HKIDCard = obj;
        }

        if (params.MLIDCard) {
            let obj = new NormalMLIDCard();
            obj.deserialize(params.MLIDCard)
            this.MLIDCard = obj;
        }

        if (params.PhilippinesVoteID) {
            let obj = new PhilippinesVoteID();
            obj.deserialize(params.PhilippinesVoteID)
            this.PhilippinesVoteID = obj;
        }

        if (params.IndonesiaIDCard) {
            let obj = new NormalIndonesiaIDCard();
            obj.deserialize(params.IndonesiaIDCard)
            this.IndonesiaIDCard = obj;
        }

        if (params.PhilippinesDrivingLicense) {
            let obj = new PhilippinesDrivingLicense();
            obj.deserialize(params.PhilippinesDrivingLicense)
            this.PhilippinesDrivingLicense = obj;
        }

        if (params.PhilippinesTinID) {
            let obj = new PhilippinesTinID();
            obj.deserialize(params.PhilippinesTinID)
            this.PhilippinesTinID = obj;
        }

        if (params.PhilippinesSSSID) {
            let obj = new PhilippinesSSSID();
            obj.deserialize(params.PhilippinesSSSID)
            this.PhilippinesSSSID = obj;
        }

        if (params.PhilippinesUMID) {
            let obj = new PhilippinesUMID();
            obj.deserialize(params.PhilippinesUMID)
            this.PhilippinesUMID = obj;
        }

        if (params.InternationalIDPassport) {
            let obj = new InternationalIDPassport();
            obj.deserialize(params.InternationalIDPassport)
            this.InternationalIDPassport = obj;
        }

        if (params.GeneralCard) {
            let obj = new GeneralCard();
            obj.deserialize(params.GeneralCard)
            this.GeneralCard = obj;
        }

        if (params.IndonesiaDrivingLicense) {
            let obj = new IndonesiaDrivingLicense();
            obj.deserialize(params.IndonesiaDrivingLicense)
            this.IndonesiaDrivingLicense = obj;
        }

        if (params.ThailandIDCard) {
            let obj = new NormalThailandIDCard();
            obj.deserialize(params.ThailandIDCard)
            this.ThailandIDCard = obj;
        }

        if (params.SingaporeIDCard) {
            let obj = new SingaporeIDCard();
            obj.deserialize(params.SingaporeIDCard)
            this.SingaporeIDCard = obj;
        }

        if (params.MacaoIDCard) {
            let obj = new MacaoIDCard();
            obj.deserialize(params.MacaoIDCard)
            this.MacaoIDCard = obj;
        }

    }
}

/**
 * ApplySdkVerificationToken request structure.
 * @class
 */
class ApplySdkVerificationTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The verification mode. Valid values:
1: OCR + liveness detection + face comparison
2: Liveness detection + face comparison
3: Liveness detection
Default value: 1
         * @type {number || null}
         */
        this.CheckMode = null;

        /**
         * The security level of the verification. Valid values:
1: Video-based liveness detection
2: Motion-based liveness detection
3: Reflection-based liveness detection
4: Motion- and reflection-based liveness detection
Default value: 4
         * @type {number || null}
         */
        this.SecurityLevel = null;

        /**
         * The identity document type. Valid values: 
1. `HK` (default): Identity card of Hong Kong (China)
2. `ML`: Malaysian identity card
3. `IndonesiaIDCard`: Indonesian identity card
4. `PhilippinesVoteID`: Philippine voters ID card
5. `PhilippinesDrivingLicense`: Philippine driver's license
6. `PhilippinesTinID`: Philippine TIN ID card
7. `PhilippinesSSSID`: Philippine SSS ID card
8. `PhilippinesUMID`: Philippine UMID card
9. `MLIDPassport`: Passport issued in Hong Kong/Macao/Taiwan (China) or other countries/regions
10..MacaoIDCard: Macao ID Card
11.ThailandIDCard: Thailand ID Card
12.MainlandIDCard: Mainland ID Card
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * The Base64-encoded value of the photo to compare, which is required only when `CheckMode` is set to `2`.
         * @type {string || null}
         */
        this.CompareImage = null;

        /**
         * Whether ID card authentication is required. If not, only document OCR will be performed. Currently, authentication is available only when the value of `IdCardType` is `HK`.
         * @type {boolean || null}
         */
        this.NeedVerifyIdCard = null;

        /**
         * Whether to forbid the modification of the OCR result by users. Default value: `false` (modification allowed). (Currently, this parameter is not applied.)
         * @type {boolean || null}
         */
        this.DisableChangeOcrResult = null;

        /**
         * Whether to disable the OCR warnings. Default value: `false` (not disable), where OCR warnings are enabled and the OCR result will not be returned if there is a warning.
This feature applies only to Hong Kong (China) identity cards, Malaysian identity cards, and passports.
         * @type {boolean || null}
         */
        this.DisableCheckOcrWarnings = null;

        /**
         * A passthrough field, which is returned together with the verification result and can contain up to 1,024 bits.
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckMode = 'CheckMode' in params ? params.CheckMode : null;
        this.SecurityLevel = 'SecurityLevel' in params ? params.SecurityLevel : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.CompareImage = 'CompareImage' in params ? params.CompareImage : null;
        this.NeedVerifyIdCard = 'NeedVerifyIdCard' in params ? params.NeedVerifyIdCard : null;
        this.DisableChangeOcrResult = 'DisableChangeOcrResult' in params ? params.DisableChangeOcrResult : null;
        this.DisableCheckOcrWarnings = 'DisableCheckOcrWarnings' in params ? params.DisableCheckOcrWarnings : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

    }
}

/**
 * The OCR result of a user's identity document during the eKYC verification process.
 * @class
 */
class CardVerifyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the authentication or OCR process is successful.
         * @type {boolean || null}
         */
        this.IsPass = null;

        /**
         * Whether the user modified the card recognition result
         * @type {boolean || null}
         */
        this.IsEdit = null;

        /**
         * The download URL of the video used for identity document verification, which is valid for 10 minutes. This parameter is returned only if video-based identity document verification is enabled.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {FileInfo || null}
         */
        this.CardVideo = null;

        /**
         * The download URL of the identity document image, which is valid for 10 minutes.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {FileInfo || null}
         */
        this.CardImage = null;

        /**
         * The OCR result (in JSON) of the identity document image. If verification or OCR fails, this parameter is left empty. The URL is valid for 10 minutes.
(1) Hong Kong (China) identity card
When the value of `IdCardType` is `HK`:
- CnName (string): Name in Chinese.
- EnName (string): Name in English.
- TelexCode (string): The code corresponding to the name in Chinese.
- Sex (string): Gender. Valid values: `M` (male) and `F` (female).
- Birthday (string): Date of birth.
- Permanent (int): Whether it is a permanent residence identity card. Valid values: `0` (non-permanent), `1` (permanent), and `-1` (unknown).
- IdNum (string): Identity card number.
- Symbol (string): The ID symbol below the date of birth, such as "***AZ".
- FirstIssueDate (string): Month and year of first registration.
- CurrentIssueDate (string): The date of latest issuance.

(2) Malaysian identity card
When the value of `IdCardType` is `ML`:
- Sex (string): Gender. Valid values: `LELAKI` (male) and `PEREMPUAN` (female).
- Birthday (string): Date of birth.
- ID (string): Identity card number.
- Name (string): Name.
- Address (string): Address.
- Type (string): Identity document type.

(3) Philippine identity document
When the value of `IdCardType` is `PhilippinesVoteID`:
- Birthday (string): Date of birth.
- Address (string): Address.
- LastName (string): Last name.
- FirstName (string): First name.
- VIN (string): Voter's identification number (VIN).
- CivilStatus (string): Civil status.
- Citizenship (string): Citizenship.
- PrecinctNo (string): Precinct.

When the value of `IdCardType` is `PhilippinesDrivingLicense`:
- Sex (string): Gender.
- Birthday (string): Date of birth.
- Name (string): Name.
- Address (string): Address.
- LastName (string): Last name.
- FirstName (string): First name.
- MiddleName (string): Middle name.
- Nationality (string): Nationality.
- LicenseNo (string): License number.
- ExpiresDate (string): Expiration date.
- AgencyCode (string): Agency code.

When the value of `IdCardType` is `PhilippinesTinID`:
- LicenseNumber (string): Tax identification number (TIN).
- FullName (string): Full name.
- Address (string): Address.
- Birthday (string): Date of birth.
- IssueDate (string): Issue date.

When the value of `IdCardType` is `PhilippinesSSSID`:
- LicenseNumber (string): Common reference number (CRN).
- FullName (string): Full name.
- Birthday (string): Date of birth.

When the value of `IdCardType` is `PhilippinesUMID`:
- Surname (string): Surname.
- MiddleName (string):Middle name.
- GivenName (string): Given name.
- Sex (string): Gender.
- Birthday (string): Date of birth.
- Address (string): Address.
- CRN (string): Common reference number (CRN).

(4) Indonesian identity card
When the value of `IdCardType` is `IndonesiaIDCard`:
- NIK (string): Single Identity Number.
- Nama (string): Full name.
- TempatTglLahir (string): Place and date of birth.
- JenisKelamin (string): Gender.
- GolDarah (string): Blood type.
- Alamat (string): Address.
- RTRW (string): Street.
- KelDesa (string): Village.
- Kecamatan (string): Region.
- Agama (string): Religion.
- StatusPerkawinan (string): Marital status.
- Perkerjaan (string): Occupation.
- KewargaNegaraan (string): Nationality.
- BerlakuHingga (string): Expiry date.
- IssuedDate (string): Issue date.

(5) A passport issued in Hong Kong/Macao/Taiwan (China) or other countries/regions
When the value of `IdCardType` is `MLIDPassport`:
- FullName (string): Full name.
- Surname (string): Surname.
- GivenName (string): Given name.
- Birthday (string): Date of birth.
- Sex (string): Gender. Valid values: `F` (female) and `M` (male).
- DateOfExpiration (string): Expiration date.
- IssuingCountry (string): Issuing country.
- NationalityCode (string): Country/region code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FileInfo || null}
         */
        this.CardInfoOcrJson = null;

        /**
         * The request ID of a single process.
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * The recognition results of ID card
         * @type {CardInfo || null}
         */
        this.CardInfo = null;

        /**
         * License OCR result
         * @type {NormalCardInfo || null}
         */
        this.NormalCardInfo = null;

        /**
         * Card warning information
-9101 Alarm for covered certificate,
-9102 Alarm for photocopied certificate,
-9103 Alarm for photographed certificate,
-9107 Alarm for reflective certificate,
-9108 Alarm for blurry image,
-9109 This capability is not enabled.
         * @type {Array.<number> || null}
         */
        this.WarnCardInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsPass = 'IsPass' in params ? params.IsPass : null;
        this.IsEdit = 'IsEdit' in params ? params.IsEdit : null;

        if (params.CardVideo) {
            let obj = new FileInfo();
            obj.deserialize(params.CardVideo)
            this.CardVideo = obj;
        }

        if (params.CardImage) {
            let obj = new FileInfo();
            obj.deserialize(params.CardImage)
            this.CardImage = obj;
        }

        if (params.CardInfoOcrJson) {
            let obj = new FileInfo();
            obj.deserialize(params.CardInfoOcrJson)
            this.CardInfoOcrJson = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

        if (params.CardInfo) {
            let obj = new CardInfo();
            obj.deserialize(params.CardInfo)
            this.CardInfo = obj;
        }

        if (params.NormalCardInfo) {
            let obj = new NormalCardInfo();
            obj.deserialize(params.NormalCardInfo)
            this.NormalCardInfo = obj;
        }
        this.WarnCardInfos = 'WarnCardInfos' in params ? params.WarnCardInfos : null;

    }
}

/**
 * 
 * @class
 */
class Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * Nationality.
         * @type {string || null}
         */
        this.Country = null;

        /**
         * Post code.
         * @type {string || null}
         */
        this.PostalCode = null;

        /**
         * Subregion.
         * @type {string || null}
         */
        this.Subdivision = null;

        /**
         * City.
         * @type {string || null}
         */
        this.City = null;

        /**
         * Complete address.
         * @type {string || null}
         */
        this.FormattedAddress = null;

        /**
         * The first line of address.
         * @type {string || null}
         */
        this.LineOne = null;

        /**
         * The second line of address.
         * @type {string || null}
         */
        this.LineTwo = null;

        /**
         * The third line of address.
         * @type {string || null}
         */
        this.LineThree = null;

        /**
         * The fourth line of address.
         * @type {string || null}
         */
        this.LineFour = null;

        /**
         * The fifth line of address.
         * @type {string || null}
         */
        this.LineFive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Country = 'Country' in params ? params.Country : null;
        this.PostalCode = 'PostalCode' in params ? params.PostalCode : null;
        this.Subdivision = 'Subdivision' in params ? params.Subdivision : null;
        this.City = 'City' in params ? params.City : null;
        this.FormattedAddress = 'FormattedAddress' in params ? params.FormattedAddress : null;
        this.LineOne = 'LineOne' in params ? params.LineOne : null;
        this.LineTwo = 'LineTwo' in params ? params.LineTwo : null;
        this.LineThree = 'LineThree' in params ? params.LineThree : null;
        this.LineFour = 'LineFour' in params ? params.LineFour : null;
        this.LineFive = 'LineFive' in params ? params.LineFive : null;

    }
}

/**
 * License OCR result
 * @class
 */
class CardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hong Kong ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {HKIDCard || null}
         */
        this.HKIDCard = null;

        /**
         * Malaysia ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MLIDCard || null}
         */
        this.MLIDCard = null;

        /**
         * Philippines VoteID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesVoteID || null}
         */
        this.PhilippinesVoteID = null;

        /**
         * Indonesia ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {IndonesiaIDCard || null}
         */
        this.IndonesiaIDCard = null;

        /**
         * Philippines Driving License
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesDrivingLicense || null}
         */
        this.PhilippinesDrivingLicense = null;

        /**
         * Philippines TinID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesTinID || null}
         */
        this.PhilippinesTinID = null;

        /**
         * Philippines SSSID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesSSSID || null}
         */
        this.PhilippinesSSSID = null;

        /**
         * Philippines UMID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PhilippinesUMID || null}
         */
        this.PhilippinesUMID = null;

        /**
         * ID Cards of Hong Kong, Macao and Taiwan (China), and International Passport
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {InternationalIDPassport || null}
         */
        this.InternationalIDPassport = null;

        /**
         * General license information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {GeneralCard || null}
         */
        this.GeneralCard = null;

        /**
         * Indonesia Driving License
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {IndonesiaDrivingLicense || null}
         */
        this.IndonesiaDrivingLicense = null;

        /**
         * Thailand ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ThailandIDCard || null}
         */
        this.ThailandIDCard = null;

        /**
         * Singapore ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SingaporeIDCard || null}
         */
        this.SingaporeIDCard = null;

        /**
         * Macao ID Card
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MacaoIDCard || null}
         */
        this.MacaoIDCard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HKIDCard) {
            let obj = new HKIDCard();
            obj.deserialize(params.HKIDCard)
            this.HKIDCard = obj;
        }

        if (params.MLIDCard) {
            let obj = new MLIDCard();
            obj.deserialize(params.MLIDCard)
            this.MLIDCard = obj;
        }

        if (params.PhilippinesVoteID) {
            let obj = new PhilippinesVoteID();
            obj.deserialize(params.PhilippinesVoteID)
            this.PhilippinesVoteID = obj;
        }

        if (params.IndonesiaIDCard) {
            let obj = new IndonesiaIDCard();
            obj.deserialize(params.IndonesiaIDCard)
            this.IndonesiaIDCard = obj;
        }

        if (params.PhilippinesDrivingLicense) {
            let obj = new PhilippinesDrivingLicense();
            obj.deserialize(params.PhilippinesDrivingLicense)
            this.PhilippinesDrivingLicense = obj;
        }

        if (params.PhilippinesTinID) {
            let obj = new PhilippinesTinID();
            obj.deserialize(params.PhilippinesTinID)
            this.PhilippinesTinID = obj;
        }

        if (params.PhilippinesSSSID) {
            let obj = new PhilippinesSSSID();
            obj.deserialize(params.PhilippinesSSSID)
            this.PhilippinesSSSID = obj;
        }

        if (params.PhilippinesUMID) {
            let obj = new PhilippinesUMID();
            obj.deserialize(params.PhilippinesUMID)
            this.PhilippinesUMID = obj;
        }

        if (params.InternationalIDPassport) {
            let obj = new InternationalIDPassport();
            obj.deserialize(params.InternationalIDPassport)
            this.InternationalIDPassport = obj;
        }

        if (params.GeneralCard) {
            let obj = new GeneralCard();
            obj.deserialize(params.GeneralCard)
            this.GeneralCard = obj;
        }

        if (params.IndonesiaDrivingLicense) {
            let obj = new IndonesiaDrivingLicense();
            obj.deserialize(params.IndonesiaDrivingLicense)
            this.IndonesiaDrivingLicense = obj;
        }

        if (params.ThailandIDCard) {
            let obj = new ThailandIDCard();
            obj.deserialize(params.ThailandIDCard)
            this.ThailandIDCard = obj;
        }

        if (params.SingaporeIDCard) {
            let obj = new SingaporeIDCard();
            obj.deserialize(params.SingaporeIDCard)
            this.SingaporeIDCard = obj;
        }

        if (params.MacaoIDCard) {
            let obj = new MacaoIDCard();
            obj.deserialize(params.MacaoIDCard)
            this.MacaoIDCard = obj;
        }

    }
}

/**
 * Philippines VoteID Card
 * @class
 */
class PhilippinesVoteID extends  AbstractModel {
    constructor(){
        super();

        /**
         * VIN of Philippines VoteID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VIN = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Civil status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CivilStatus = null;

        /**
         * Nationality
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Citizenship = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrecinctNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VIN = 'VIN' in params ? params.VIN : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.CivilStatus = 'CivilStatus' in params ? params.CivilStatus : null;
        this.Citizenship = 'Citizenship' in params ? params.Citizenship : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.PrecinctNo = 'PrecinctNo' in params ? params.PrecinctNo : null;

    }
}

/**
 * Philippines SSSID Card
 * @class
 */
class PhilippinesSSSID extends  AbstractModel {
    constructor(){
        super();

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Full name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;

    }
}

/**
 * Malaysia ID card.
 * @class
 */
class NormalMLIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FormattedAddress = null;

        /**
         * Lisence type
MyKad ID card
MyPR Permanent resident ID card
MyTentera Military ID card
MyKAS Temporary ID card
POLIS Police ID card
IKAD Labor ID card
MyKid Juvenile ID card
Example: MyKad
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Birthday (Currently, this filed only supports IKAD labor ID card and MyKad ID card)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.FormattedAddress = 'FormattedAddress' in params ? params.FormattedAddress : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;

    }
}

/**
 * Indonesia ID card.
 * @class
 */
class IndonesiaIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NIK = null;

        /**
         * Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nama = null;

        /**
         * Birth place/Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TempatTglLahir = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JenisKelamin = null;

        /**
         * Blood type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GolDarah = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alamat = null;

        /**
         * Street
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RTRW = null;

        /**
         * Village
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KelDesa = null;

        /**
         * Region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Kecamatan = null;

        /**
         * Religious beliefs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Agama = null;

        /**
         * Marital status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusPerkawinan = null;

        /**
         * Job
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Perkerjaan = null;

        /**
         * Nationality
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.KewargaNegaraan = null;

        /**
         * ID card validity period
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BerlakuHingga = null;

        /**
         * Date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * Province
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Provinsi = null;

        /**
         * City
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Kota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NIK = 'NIK' in params ? params.NIK : null;
        this.Nama = 'Nama' in params ? params.Nama : null;
        this.TempatTglLahir = 'TempatTglLahir' in params ? params.TempatTglLahir : null;
        this.JenisKelamin = 'JenisKelamin' in params ? params.JenisKelamin : null;
        this.GolDarah = 'GolDarah' in params ? params.GolDarah : null;
        this.Alamat = 'Alamat' in params ? params.Alamat : null;
        this.RTRW = 'RTRW' in params ? params.RTRW : null;
        this.KelDesa = 'KelDesa' in params ? params.KelDesa : null;
        this.Kecamatan = 'Kecamatan' in params ? params.Kecamatan : null;
        this.Agama = 'Agama' in params ? params.Agama : null;
        this.StatusPerkawinan = 'StatusPerkawinan' in params ? params.StatusPerkawinan : null;
        this.Perkerjaan = 'Perkerjaan' in params ? params.Perkerjaan : null;
        this.KewargaNegaraan = 'KewargaNegaraan' in params ? params.KewargaNegaraan : null;
        this.BerlakuHingga = 'BerlakuHingga' in params ? params.BerlakuHingga : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;
        this.Provinsi = 'Provinsi' in params ? params.Provinsi : null;
        this.Kota = 'Kota' in params ? params.Kota : null;

    }
}

/**
 * ApplySdkVerificationToken response structure.
 * @class
 */
class ApplySdkVerificationTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The token used to identify an SDK-based verification process. It is valid for 7,200s and can be used to get the verification result after the process is completed.
         * @type {string || null}
         */
        this.SdkToken = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkToken = 'SdkToken' in params ? params.SdkToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Hong Kong ID card.
 * @class
 */
class NormalHKIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Chinese name
Note: This field may return null, indicating that no valid values can be obtained.

         * @type {string || null}
         */
        this.ChineseName = null;

        /**
         * English name
Note: This field may return null, indicating that no valid values can be obtained.
Example: SAN, Nan
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * Telex code correspondint to the Chinese name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegistrationNumber = null;

        /**
         * Gender: "Male-M" or "Female-F"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
Example: 01-01-2001
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Permanent resident ID card: 0-non-permanent; 1-permanent; -1-unknown
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Permanent = null;

        /**
         * ID card number
Note: This field may return null, indicating that no valid values can be obtained.
Example: C000000(E)
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Lisence symbol, which is the symbol below Birthday. Example: "***AZ"
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Symbol = null;

        /**
         * The first date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * The current date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CurrentIssueDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChineseName = 'ChineseName' in params ? params.ChineseName : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.RegistrationNumber = 'RegistrationNumber' in params ? params.RegistrationNumber : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Permanent = 'Permanent' in params ? params.Permanent : null;
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.Symbol = 'Symbol' in params ? params.Symbol : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;
        this.CurrentIssueDate = 'CurrentIssueDate' in params ? params.CurrentIssueDate : null;

    }
}

/**
 * The description of a file, including a download URL and the MD5 checksum and size of the file.
 * @class
 */
class FileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL for downloading the file
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The 32-bit MD5 checksum of the file
         * @type {string || null}
         */
        this.MD5 = null;

        /**
         * The file size
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.MD5 = 'MD5' in params ? params.MD5 : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * Philippines driving license
 * @class
 */
class PhilippinesDrivingLicense extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Last name

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * Middle name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MiddleName = null;

        /**
         * Nationality
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNo = null;

        /**
         * Date of expiry
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpiresDate = null;

        /**
         * Agency code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AgencyCode = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.MiddleName = 'MiddleName' in params ? params.MiddleName : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.LicenseNo = 'LicenseNo' in params ? params.LicenseNo : null;
        this.ExpiresDate = 'ExpiresDate' in params ? params.ExpiresDate : null;
        this.AgencyCode = 'AgencyCode' in params ? params.AgencyCode : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;

    }
}

/**
 * Indonesia ID card.
 * @class
 */
class NormalIndonesiaIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * Birth place/Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Blood type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BloodType = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FormattedAddress = null;

        /**
         * Street
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Street = null;

        /**
         * Village
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Village = null;

        /**
         * Region
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Religious beliefs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Religion = null;

        /**
         * Marital status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MaritalStatus = null;

        /**
         * Job
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Occupation = null;

        /**
         * Nationality
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * ID card validity period
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DueDate = null;

        /**
         * Date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * Province
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Province = null;

        /**
         * City
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.City = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.BloodType = 'BloodType' in params ? params.BloodType : null;
        this.FormattedAddress = 'FormattedAddress' in params ? params.FormattedAddress : null;
        this.Street = 'Street' in params ? params.Street : null;
        this.Village = 'Village' in params ? params.Village : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Religion = 'Religion' in params ? params.Religion : null;
        this.MaritalStatus = 'MaritalStatus' in params ? params.MaritalStatus : null;
        this.Occupation = 'Occupation' in params ? params.Occupation : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.DueDate = 'DueDate' in params ? params.DueDate : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;

    }
}

/**
 * 
 * @class
 */
class MacaoIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * 
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * 
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * 
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * 
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * 
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 
         * @type {string || null}
         */
        this.Age = null;

        /**
         * 
         * @type {string || null}
         */
        this.IssuedCountry = null;

        /**
         * 
         * @type {string || null}
         */
        this.Field1 = null;

        /**
         * 
         * @type {string || null}
         */
        this.Field2 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.IssuedCountry = 'IssuedCountry' in params ? params.IssuedCountry : null;
        this.Field1 = 'Field1' in params ? params.Field1 : null;
        this.Field2 = 'Field2' in params ? params.Field2 : null;

    }
}

/**
 * General liscense information.
 * @class
 */
class GeneralCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Personal number, which is returned when it is a passport
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PersonalNumber = null;

        /**
         * The first line of passport machine reading code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PassportCodeFirst = null;

        /**
         * The first line of passport machine reading code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PassportCodeSecond = null;

        /**
         * Date of expiry in the format of YYYY-MM-DD
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * Valid date in the format of YYYY-MM-DD
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DueDate = null;

        /**
         * Date of issue in the format of YYYY-MM-DD
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * Issuing authority
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedAuthority = null;

        /**
         * Issuing country, which is returned following the ISO 3166 country coding specification
Note: This field may return null, indicating that no valid values can be obtained.
Example: MYS
         * @type {string || null}
         */
        this.IssuedCountry = null;

        /**
         * Full Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * Gender on the license
- M: male
- F: female
- X: other gender
Note: This field may return null, indicating that no valid values can be obtained.
Example: M
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Age. 0 indicates that no valid information is obtained.
Example: 0
         * @type {string || null}
         */
        this.Age = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Birth place
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BirthPlace = null;

        /**
         * Nationality, which is returned following the ISO 3166 country coding specification
Note: This field may return null, indicating that no valid values can be obtained.
Example: IND
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * Registration number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegistrationNumber = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Address || null}
         */
        this.Address = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.PersonalNumber = 'PersonalNumber' in params ? params.PersonalNumber : null;
        this.PassportCodeFirst = 'PassportCodeFirst' in params ? params.PassportCodeFirst : null;
        this.PassportCodeSecond = 'PassportCodeSecond' in params ? params.PassportCodeSecond : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.DueDate = 'DueDate' in params ? params.DueDate : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;
        this.IssuedAuthority = 'IssuedAuthority' in params ? params.IssuedAuthority : null;
        this.IssuedCountry = 'IssuedCountry' in params ? params.IssuedCountry : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.BirthPlace = 'BirthPlace' in params ? params.BirthPlace : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.RegistrationNumber = 'RegistrationNumber' in params ? params.RegistrationNumber : null;

        if (params.Address) {
            let obj = new Address();
            obj.deserialize(params.Address)
            this.Address = obj;
        }

    }
}

/**
 * Philippines UMID Card
 * @class
 */
class PhilippinesUMID extends  AbstractModel {
    constructor(){
        super();

        /**
         * Surname
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Surname = null;

        /**
         * Middle Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MiddleName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GivenName = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * CRN code
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CRN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Surname = 'Surname' in params ? params.Surname : null;
        this.MiddleName = 'MiddleName' in params ? params.MiddleName : null;
        this.GivenName = 'GivenName' in params ? params.GivenName : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.CRN = 'CRN' in params ? params.CRN : null;

    }
}

/**
 * Philippines TinID Card
 * @class
 */
class PhilippinesTinID extends  AbstractModel {
    constructor(){
        super();

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Full name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Date of issue
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssueDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;

    }
}

/**
 * Malaysia ID card.
 * @class
 */
class MLIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full Name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * License number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Gender
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Lisence type
MyKad ID card
MyPR Permanent resident ID card
MyTentera Military ID card
MyKAS Temporary ID card
POLIS Police ID card
IKAD Labor ID card
MyKid Juvenile ID card
Example: MyKad
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Birthday (Currently, this filed only supports IKAD labor ID card and MyKad ID card)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;

    }
}

/**
 * Thailand ID Card
 * @class
 */
class NormalThailandIDCard extends  AbstractModel {
    constructor(){
        super();

        /**
         * LicenseNumber
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * Thailand name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * Last name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastName = null;

        /**
         * First name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FirstName = null;

        /**
         * Birthday
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FormattedAddress = null;

        /**
         * Expiration date
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * Issued date
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * Registration number 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegistrationNumber = null;

        /**
         * Religion
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Religion = null;

        /**
         * Birthday in Thai
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ThaiBirthday = null;

        /**
         * Expiration date in Thai
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ThaiExpirationDate = null;

        /**
         * Issued date in Thai
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ThaiIssueDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.LastName = 'LastName' in params ? params.LastName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.FormattedAddress = 'FormattedAddress' in params ? params.FormattedAddress : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;
        this.RegistrationNumber = 'RegistrationNumber' in params ? params.RegistrationNumber : null;
        this.Religion = 'Religion' in params ? params.Religion : null;
        this.ThaiBirthday = 'ThaiBirthday' in params ? params.ThaiBirthday : null;
        this.ThaiExpirationDate = 'ThaiExpirationDate' in params ? params.ThaiExpirationDate : null;
        this.ThaiIssueDate = 'ThaiIssueDate' in params ? params.ThaiIssueDate : null;

    }
}

/**
 * The description of a single comparison result.
 * @class
 */
class CompareResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The final verification result code.
0: Success.
1001: Failed to call the liveness detection engine.
1004: Face detection failed.
2004: The uploaded face image is too large or too small.
2012: The face is not fully exposed.
2013: No face is detected.
2014: The resolution of the uploaded image is too low . Please upload a new one.
2015: Face comparison failed.
2016: The similarity did not reach the passing standard.
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * The description of the final verification result.
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * The liveness algorithm package generated during this SDK-based liveness detection.
         * @type {FileInfo || null}
         */
        this.LiveData = null;

        /**
         * The download URL of the video used for verification, which is valid for 10 minutes.
         * @type {FileInfo || null}
         */
        this.LiveVideo = null;

        /**
         * The liveness detection result code.
0: Success.
1001: Failed to call the liveness detection engine.
1004: Face detection failed.
         * @type {string || null}
         */
        this.LiveErrorCode = null;

        /**
         * The description of the liveness detection result.
         * @type {string || null}
         */
        this.LiveErrorMsg = null;

        /**
         * The download URL of the face screenshot during verification, which is valid for 10 minutes.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {FileInfo || null}
         */
        this.BestFrame = null;

        /**
         * The download URL of the profile photo screenshot from the identity document, which is valid for 10 minutes.
         * @type {FileInfo || null}
         */
        this.ProfileImage = null;

        /**
         * The face comparison result code.
0: Success.
2004: The uploaded face image is too large or too small.
2012: The face is not fully exposed.
2013: No face is detected.
2014: The resolution of the uploaded image is too low . Please upload a new one.
2015: Face comparison failed.
2016: The similarity did not reach the passing standard.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CompareErrorCode = null;

        /**
         * The description of the face comparison result.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompareErrorMsg = null;

        /**
         * The similarity score of face comparison.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * This parameter is disused.
         * @type {boolean || null}
         */
        this.IsNeedCharge = null;

        /**
         * The identity document photo info edited by the user. Currently, this parameter is not applied.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FileInfo || null}
         */
        this.CardInfoInputJson = null;

        /**
         * The request ID of this verification process.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

        if (params.LiveData) {
            let obj = new FileInfo();
            obj.deserialize(params.LiveData)
            this.LiveData = obj;
        }

        if (params.LiveVideo) {
            let obj = new FileInfo();
            obj.deserialize(params.LiveVideo)
            this.LiveVideo = obj;
        }
        this.LiveErrorCode = 'LiveErrorCode' in params ? params.LiveErrorCode : null;
        this.LiveErrorMsg = 'LiveErrorMsg' in params ? params.LiveErrorMsg : null;

        if (params.BestFrame) {
            let obj = new FileInfo();
            obj.deserialize(params.BestFrame)
            this.BestFrame = obj;
        }

        if (params.ProfileImage) {
            let obj = new FileInfo();
            obj.deserialize(params.ProfileImage)
            this.ProfileImage = obj;
        }
        this.CompareErrorCode = 'CompareErrorCode' in params ? params.CompareErrorCode : null;
        this.CompareErrorMsg = 'CompareErrorMsg' in params ? params.CompareErrorMsg : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.IsNeedCharge = 'IsNeedCharge' in params ? params.IsNeedCharge : null;

        if (params.CardInfoInputJson) {
            let obj = new FileInfo();
            obj.deserialize(params.CardInfoInputJson)
            this.CardInfoInputJson = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    InternationalIDPassport: InternationalIDPassport,
    GetSdkVerificationResultResponse: GetSdkVerificationResultResponse,
    ThailandIDCard: ThailandIDCard,
    GetSdkVerificationResultRequest: GetSdkVerificationResultRequest,
    HKIDCard: HKIDCard,
    SingaporeIDCard: SingaporeIDCard,
    IndonesiaDrivingLicense: IndonesiaDrivingLicense,
    NormalCardInfo: NormalCardInfo,
    ApplySdkVerificationTokenRequest: ApplySdkVerificationTokenRequest,
    CardVerifyResult: CardVerifyResult,
    Address: Address,
    CardInfo: CardInfo,
    PhilippinesVoteID: PhilippinesVoteID,
    PhilippinesSSSID: PhilippinesSSSID,
    NormalMLIDCard: NormalMLIDCard,
    IndonesiaIDCard: IndonesiaIDCard,
    ApplySdkVerificationTokenResponse: ApplySdkVerificationTokenResponse,
    NormalHKIDCard: NormalHKIDCard,
    FileInfo: FileInfo,
    PhilippinesDrivingLicense: PhilippinesDrivingLicense,
    NormalIndonesiaIDCard: NormalIndonesiaIDCard,
    MacaoIDCard: MacaoIDCard,
    GeneralCard: GeneralCard,
    PhilippinesUMID: PhilippinesUMID,
    PhilippinesTinID: PhilippinesTinID,
    MLIDCard: MLIDCard,
    NormalThailandIDCard: NormalThailandIDCard,
    CompareResult: CompareResult,

}
