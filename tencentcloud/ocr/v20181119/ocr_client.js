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
const RecognizeMexicoVTIDResponse = models.RecognizeMexicoVTIDResponse;
const HKIDCardOCRRequest = models.HKIDCardOCRRequest;
const ExtractDocMultiRequest = models.ExtractDocMultiRequest;
const RecognizeBrazilIDCardOCRRequest = models.RecognizeBrazilIDCardOCRRequest;
const RecognizePhilippinesDrivingLicenseOCRRequest = models.RecognizePhilippinesDrivingLicenseOCRRequest;
const WordItem = models.WordItem;
const MLIDPassportOCRRequest = models.MLIDPassportOCRRequest;
const ItemInfo = models.ItemInfo;
const SmartStructuralOCRV2Request = models.SmartStructuralOCRV2Request;
const RecognizeThaiIDCardOCRResponse = models.RecognizeThaiIDCardOCRResponse;
const RecognizeBrazilCommonOCRResponse = models.RecognizeBrazilCommonOCRResponse;
const RecognizeMacaoIDCardOCRResponse = models.RecognizeMacaoIDCardOCRResponse;
const GetCardVerificationExternalResultResponse = models.GetCardVerificationExternalResultResponse;
const PermitOCRResponse = models.PermitOCRResponse;
const RecognizeBrazilDriverLicenseOCRRequest = models.RecognizeBrazilDriverLicenseOCRRequest;
const RecognizeMainlandIDCardOCRRequest = models.RecognizeMainlandIDCardOCRRequest;
const MLIDCardOCRRequest = models.MLIDCardOCRRequest;
const WordPolygon = models.WordPolygon;
const Value = models.Value;
const RecognizeDetectCardCoordsResponse = models.RecognizeDetectCardCoordsResponse;
const RecognizePhilippinesVoteIDOCRRequest = models.RecognizePhilippinesVoteIDOCRRequest;
const BrazilRNMInfo = models.BrazilRNMInfo;
const TextDetection = models.TextDetection;
const RecognizeDetectCardCoordsRequest = models.RecognizeDetectCardCoordsRequest;
const GeneralCard = models.GeneralCard;
const MainlandPermitOCRRequest = models.MainlandPermitOCRRequest;
const RecognizeBrazilCommonOCRRequest = models.RecognizeBrazilCommonOCRRequest;
const RecognizePhilippinesTinIDOCRResponse = models.RecognizePhilippinesTinIDOCRResponse;
const DetectedWords = models.DetectedWords;
const LineInfo = models.LineInfo;
const BrazilDriverLicenseInfo = models.BrazilDriverLicenseInfo;
const GeneralAccurateOCRResponse = models.GeneralAccurateOCRResponse;
const GeneralBasicOCRResponse = models.GeneralBasicOCRResponse;
const VinOCRRequest = models.VinOCRRequest;
const RecognizePhilippinesUMIDOCRRequest = models.RecognizePhilippinesUMIDOCRRequest;
const RecognizePhilippinesSssIDOCRRequest = models.RecognizePhilippinesSssIDOCRRequest;
const Key = models.Key;
const BrazilIDCardInfo = models.BrazilIDCardInfo;
const HKIDCardOCRResponse = models.HKIDCardOCRResponse;
const GroupInfo = models.GroupInfo;
const PermitOCRRequest = models.PermitOCRRequest;
const ExtractDocMultiResponse = models.ExtractDocMultiResponse;
const RecognizePhilippinesSssIDOCRResponse = models.RecognizePhilippinesSssIDOCRResponse;
const RecognizePhilippinesUMIDOCRResponse = models.RecognizePhilippinesUMIDOCRResponse;
const RecognizeThaiIDCardOCRRequest = models.RecognizeThaiIDCardOCRRequest;
const PassportRecognizeInfos = models.PassportRecognizeInfos;
const RecognizeSingaporeIDCardOCRRequest = models.RecognizeSingaporeIDCardOCRRequest;
const RecognizeBrazilRNMOCRResponse = models.RecognizeBrazilRNMOCRResponse;
const GeneralBasicOCRRequest = models.GeneralBasicOCRRequest;
const RecognizeBrazilRNMOCRRequest = models.RecognizeBrazilRNMOCRRequest;
const RecognizeBrazilIDCardOCRResponse = models.RecognizeBrazilIDCardOCRResponse;
const RecognizeBrazilRNEOCRRequest = models.RecognizeBrazilRNEOCRRequest;
const GeneralAccurateOCRRequest = models.GeneralAccurateOCRRequest;
const RecognizeMacaoIDCardOCRRequest = models.RecognizeMacaoIDCardOCRRequest;
const CoordsItem = models.CoordsItem;
const MLIDPassportOCRResponse = models.MLIDPassportOCRResponse;
const ApplyCardVerificationExternalRequest = models.ApplyCardVerificationExternalRequest;
const GetCardVerificationExternalResultRequest = models.GetCardVerificationExternalResultRequest;
const Coord = models.Coord;
const RecognizeBrazilRNEOCRResponse = models.RecognizeBrazilRNEOCRResponse;
const RecognizeIndonesiaIDCardOCRResponse = models.RecognizeIndonesiaIDCardOCRResponse;
const VinOCRResponse = models.VinOCRResponse;
const ConfigAdvanced = models.ConfigAdvanced;
const RecognizePhilippinesVoteIDOCRResponse = models.RecognizePhilippinesVoteIDOCRResponse;
const ItemCoord = models.ItemCoord;
const ApplyCardVerificationExternalResponse = models.ApplyCardVerificationExternalResponse;
const Polygon = models.Polygon;
const TextDetectionResult = models.TextDetectionResult;
const RecognizeSingaporeIDCardOCRResponse = models.RecognizeSingaporeIDCardOCRResponse;
const SmartStructuralOCRV2Response = models.SmartStructuralOCRV2Response;
const RecognizeMainlandIDCardOCRResponse = models.RecognizeMainlandIDCardOCRResponse;
const MainlandPermitOCRResponse = models.MainlandPermitOCRResponse;
const RecognizeMexicoVTIDRequest = models.RecognizeMexicoVTIDRequest;
const PODAuditAIResponse = models.PODAuditAIResponse;
const MainlandTravelPermitBackInfos = models.MainlandTravelPermitBackInfos;
const DetectedWordCoordPoint = models.DetectedWordCoordPoint;
const RecognizeBrazilDriverLicenseOCRResponse = models.RecognizeBrazilDriverLicenseOCRResponse;
const BrazilCardInfo = models.BrazilCardInfo;
const RecognizeIndonesiaIDCardOCRRequest = models.RecognizeIndonesiaIDCardOCRRequest;
const AnalyzedLog = models.AnalyzedLog;
const BrazilRNEInfo = models.BrazilRNEInfo;
const MLIDCardOCRResponse = models.MLIDCardOCRResponse;
const RecognizePhilippinesTinIDOCRRequest = models.RecognizePhilippinesTinIDOCRRequest;
const PODAuditAIRequest = models.PODAuditAIRequest;
const RecognizeThaiPinkCardRequest = models.RecognizeThaiPinkCardRequest;
const RecognizeThaiPinkCardResponse = models.RecognizeThaiPinkCardResponse;
const RecognizePhilippinesDrivingLicenseOCRResponse = models.RecognizePhilippinesDrivingLicenseOCRResponse;
const AddressInfo = models.AddressInfo;


/**
 * ocr client
 * @class
 */
class OcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ocr.intl.tencentcloudapi.com", "2018-11-19", credential, region, profile);
    }
    
    /**
     * This API is used to recognize the fields on a Thai identity card, including name in Thai, name in English, address, date of birth, identification number, date of issue, and date of expiry.
Currently, this API is not generally available. For more information, please [contact your sales rep](https://intl.cloud.tencent.com/zh/contact-us).

A maximum of 5 requests can be initiated per second for this API.
     * @param {RecognizeThaiPinkCardRequest} req
     * @param {function(string, RecognizeThaiPinkCardResponse):void} cb
     * @public
     */
    RecognizeThaiPinkCard(req, cb) {
        let resp = new RecognizeThaiPinkCardResponse();
        this.request("RecognizeThaiPinkCard", req, resp, cb);
    }

    /**
     * This interface supports identification of the front and back of Brazilian driver's license. The identification fields include name, driver's license category, number, validity period, etc.
     * @param {RecognizeBrazilDriverLicenseOCRRequest} req
     * @param {function(string, RecognizeBrazilDriverLicenseOCRResponse):void} cb
     * @public
     */
    RecognizeBrazilDriverLicenseOCR(req, cb) {
        let resp = new RecognizeBrazilDriverLicenseOCRResponse();
        this.request("RecognizeBrazilDriverLicenseOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize a Malaysian identity card, including identity card number, name, gender, and address. It is also used to crop identity photos and give alarms for photographed or photocopied certificates.

This API is not fully available for the time being. For more information, contact your [Tencent Cloud sales rep](https://intl.cloud.tencent.com/contact-sales).
     * @param {MLIDCardOCRRequest} req
     * @param {function(string, MLIDCardOCRResponse):void} cb
     * @public
     */
    MLIDCardOCR(req, cb) {
        let resp = new MLIDCardOCRResponse();
        this.request("MLIDCardOCR", req, resp, cb);
    }

    /**
     * This API is used to detect and recognize characters in an image. It can recognize Chinese, English, Chinese-English, digits, and special symbols and return the text box positions and characters.

It is suitable for scenarios with a lot of characters in complex layouts and requiring high recognition accuracy, such as examination papers, online images, signboards, and legal documents.

Strengths: compared with general print recognition, it provides higher-precision character recognition services. Its accuracy and recall rate are higher in difficult scenarios such as a large number of characters, long strings of digits, small characters, blurry characters, and tilted text.

This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://intl.cloud.tencent.com/contact-sales).
     * @param {GeneralAccurateOCRRequest} req
     * @param {function(string, GeneralAccurateOCRResponse):void} cb
     * @public
     */
    GeneralAccurateOCR(req, cb) {
        let resp = new GeneralAccurateOCRResponse();
        this.request("GeneralAccurateOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize fields from cards, documents, bills, forms, contracts, and other structured information. It is flexible and efficient to use, without any configuration required. This API is suitable for recognizing structured information.

A maximum of 10 requests can be initiated per second for this API.
     * @param {SmartStructuralOCRV2Request} req
     * @param {function(string, SmartStructuralOCRV2Response):void} cb
     * @public
     */
    SmartStructuralOCRV2(req, cb) {
        let resp = new SmartStructuralOCRV2Response();
        this.request("SmartStructuralOCRV2", req, resp, cb);
    }

    /**
     * This API is used to recognize the coordinates of four corners of cards.
     * @param {RecognizeDetectCardCoordsRequest} req
     * @param {function(string, RecognizeDetectCardCoordsResponse):void} cb
     * @public
     */
    RecognizeDetectCardCoords(req, cb) {
        let resp = new RecognizeDetectCardCoordsResponse();
        this.request("RecognizeDetectCardCoords", req, resp, cb);
    }

    /**
     * This API is used to recognize the vehicle identification number (VIN) in an image.
     * @param {VinOCRRequest} req
     * @param {function(string, VinOCRResponse):void} cb
     * @public
     */
    VinOCR(req, cb) {
        let resp = new VinOCRResponse();
        this.request("VinOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize a passport issued in Hong Kong/Macao/Taiwan (China) or other countries/regions. Recognizable fields include passport ID, name, date of birth, gender, expiration date, issuing country/region, and nationality. It has the features of cropping identity photos and alarming for photographed or photocopied documents.
This interface supports regional scope: countries with machine-readable passports
     * @param {MLIDPassportOCRRequest} req
     * @param {function(string, MLIDPassportOCRResponse):void} cb
     * @public
     */
    MLIDPassportOCR(req, cb) {
        let resp = new MLIDPassportOCRResponse();
        this.request("MLIDPassportOCR", req, resp, cb);
    }

    /**
     * Brazil RNE document recognition Default interface request frequency limit: 5 times/second
     * @param {RecognizeBrazilRNEOCRRequest} req
     * @param {function(string, RecognizeBrazilRNEOCRResponse):void} cb
     * @public
     */
    RecognizeBrazilRNEOCR(req, cb) {
        let resp = new RecognizeBrazilRNEOCRResponse();
        this.request("RecognizeBrazilRNEOCR", req, resp, cb);
    }

    /**
     * This API provides general OCR recognition for overseas identity documents.

The following table lists the supported countries or regions, document types, and whether the back side is required:

<table>
<thead>
<tr>
<td style="width:200px">Nationality</td>
<td style="width:200px">CardType</td>
<td style="width:200px">Whether the Back Side is Required</td>
</tr>
</thead>
<tbody>
<tr>
<td>Argentina</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Argentina</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Argentina</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Australia</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Australia</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Australia</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Australia</td>
<td>Residence Permit</td>
<td>Yes</td>
</tr>
<tr>
<td>Bangladesh</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Bangladesh</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Bangladesh</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Cambodia</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Cambodia</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Cambodia</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Canada</td>
<td>Driver's License</td>
<td>No</td>
</tr>
<tr>
<td>Canada</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Canada</td>
<td>Passport</td>
<td>Yes</td>
</tr>
<tr>
<td>Canada</td>
<td>Residence Permit</td>
<td>Yes</td>
</tr>
<tr>
<td>Chile</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Chile</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Chile</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Germany</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Germany</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Germany</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Germany</td>
<td>Residence Permit</td>
<td>Yes</td>
</tr>
<tr>
<td>Mexico</td>
<td>Driver's License</td>
<td>No</td>
</tr>
<tr>
<td>Mexico</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Mexico</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Myanmar</td>
<td>Driver's License</td>
<td>No</td>
</tr>
<tr>
<td>Myanmar</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Myanmar</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>New Zealand</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>New Zealand</td>
<td>National ID Card</td>
<td>No</td>
</tr>
<tr>
<td>New Zealand</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>New Zealand</td>
<td>Residence Permit</td>
<td>No</td>
</tr>
<tr>
<td>Nigeria</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Nigeria</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Nigeria</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Nigeria</td>
<td>Residence Permit</td>
<td>Yes</td>
</tr>
<tr>
<td>Pakistan</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Pakistan</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Pakistan</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Russia</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Russia</td>
<td>National ID Card</td>
<td>No</td>
</tr>
<tr>
<td>Russia</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Singapore</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Singapore</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Singapore</td>
<td>Passport</td>
<td>No</td>
</tr>
<tr>
<td>Singapore</td>
<td>Residence Permit</td>
<td>Yes</td>
</tr>
<tr>
<td>Indonesia</td>
<td>National ID Card</td>
<td>No</td>
</tr>
<tr>
<td>Indonesia</td>
<td>Driver's License</td>
<td>No</td>
</tr>
<tr>
<td>Hong Kong, China</td>
<td>Identity Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Thailand</td>
<td>National ID Card</td>
<td>No</td>
</tr>
<tr>
<td>Thailand</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Malaysia</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Malaysia</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Singapore</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Singapore</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Philippines</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Philippines</td>
<td>Driver's License</td>
<td>No</td>
</tr>
<tr>
<td>Japan</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Japan</td>
<td>Driver's License</td>
<td>No</td>
</tr>
<tr>
<td>Macau, China</td>
<td>Identity Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Taiwan, China</td>
<td>Identity Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Bangladesh</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Nigeria</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Nigeria</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
<tr>
<td>Pakistan</td>
<td>National ID Card</td>
<td>Yes</td>
</tr>
<tr>
<td>Pakistan</td>
<td>Driver's License</td>
<td>Yes</td>
</tr>
</tbody>
</table>
     * @param {ApplyCardVerificationExternalRequest} req
     * @param {function(string, ApplyCardVerificationExternalResponse):void} cb
     * @public
     */
    ApplyCardVerificationExternal(req, cb) {
        let resp = new ApplyCardVerificationExternalResponse();
        this.request("ApplyCardVerificationExternal", req, resp, cb);
    }

    /**
     * This API is used to recognize key fields on the photo side of a Hong Kong (China) identity card, including name in Chinese, name in English, telecode for name, date of birth, gender, document symbol, date of the first issue, date of the last receipt, identity card number, and permanent residency attribute. 

This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://intl.cloud.tencent.com/contact-sales).
     * @param {HKIDCardOCRRequest} req
     * @param {function(string, HKIDCardOCRResponse):void} cb
     * @public
     */
    HKIDCardOCR(req, cb) {
        let resp = new HKIDCardOCRResponse();
        this.request("HKIDCardOCR", req, resp, cb);
    }

    /**
     * This API is used to detect and recognize characters in an image in the following 20 languages: Chinese, English, Japanese, Korean, Spanish, French, German, Portuguese, Vietnamese, Malay, Russian, Italian, Dutch, Swedish, Finnish, Danish, Norwegian, Hungarian, Thai, and Arabic. Mixed characters in English and each supported language can be recognized together.

It can recognize printed text in paper documents, online images, ads, signboards, menus, video titles, profile photos, etc.

Strengths: it can automatically recognize the text language, return the text box coordinate information, and automatically rotate tilted text to the upright direction.

This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://intl.cloud.tencent.com/contact-sales).
     * @param {GeneralBasicOCRRequest} req
     * @param {function(string, GeneralBasicOCRResponse):void} cb
     * @public
     */
    GeneralBasicOCR(req, cb) {
        let resp = new GeneralBasicOCRResponse();
        this.request("GeneralBasicOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize the fields on an exit/entry permit (card) for traveling to and from Hong Kong, Macao, or Taiwan, including place of issuance, issuing authority, validity period, gender, date of birth, name in English, name in Chinese, and document number.

A maximum of 10 requests can be initiated per second for this API.
     * @param {PermitOCRRequest} req
     * @param {function(string, PermitOCRResponse):void} cb
     * @public
     */
    PermitOCR(req, cb) {
        let resp = new PermitOCRResponse();
        this.request("PermitOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize the fields on a Thai identity card, including name in Thai, name in English, address, date of birth, identification number, date of issue, and date of expiry.

A maximum of 10 requests can be initiated per second for this API.
     * @param {RecognizeThaiIDCardOCRRequest} req
     * @param {function(string, RecognizeThaiIDCardOCRResponse):void} cb
     * @public
     */
    RecognizeThaiIDCardOCR(req, cb) {
        let resp = new RecognizeThaiIDCardOCRResponse();
        this.request("RecognizeThaiIDCardOCR", req, resp, cb);
    }

    /**
     * This API is used to obtain document recognition results.
     * @param {GetCardVerificationExternalResultRequest} req
     * @param {function(string, GetCardVerificationExternalResultResponse):void} cb
     * @public
     */
    GetCardVerificationExternalResult(req, cb) {
        let resp = new GetCardVerificationExternalResultResponse();
        this.request("GetCardVerificationExternalResult", req, resp, cb);
    }

    /**
     * This API is used to recognize key fields on the photo side of a Macao (China) identity card, including name in Chinese, name in English, telecode for name, date of birth, gender, document symbol, date of the first issue, date of the last receipt, identity card number, and permanent residency attribute. 

This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://intl.cloud.tencent.com/contact-sales).
     * @param {RecognizeMacaoIDCardOCRRequest} req
     * @param {function(string, RecognizeMacaoIDCardOCRResponse):void} cb
     * @public
     */
    RecognizeMacaoIDCardOCR(req, cb) {
        let resp = new RecognizeMacaoIDCardOCRResponse();
        this.request("RecognizeMacaoIDCardOCR", req, resp, cb);
    }

    /**
     * This API is used to identify Brazil common documents.

This API is used to set the default request rate limit to 5 requests/second.
     * @param {RecognizeBrazilCommonOCRRequest} req
     * @param {function(string, RecognizeBrazilCommonOCRResponse):void} cb
     * @public
     */
    RecognizeBrazilCommonOCR(req, cb) {
        let resp = new RecognizeBrazilCommonOCRResponse();
        this.request("RecognizeBrazilCommonOCR", req, resp, cb);
    }

    /**
     * This interface supports identification of the front and back of Mexican Voter ID Card. The default interface request frequency limit is 5 times per second.
     * @param {RecognizeMexicoVTIDRequest} req
     * @param {function(string, RecognizeMexicoVTIDResponse):void} cb
     * @public
     */
    RecognizeMexicoVTID(req, cb) {
        let resp = new RecognizeMexicoVTIDResponse();
        this.request("RecognizeMexicoVTID", req, resp, cb);
    }

    /**
     * This interface recognizes all fields on both sides of the Mainland China Resident Identity Card (second-generation), including name, gender, ethnicity, date of birth, address, ID number, issuing authority, and validity period, with an accuracy of over 99%.

In addition, the interface provides additional features for various scenarios, such as ID card and portrait photo cropping, along with five alarm detections (see table below).<table style="width:650px"> <thead> <tr> <th width="150">Value-added ability</th> <th width="500">Ability items</th> </tr> </thead> <tbody> <tr> <td rowspan="9">Alarm function</td> </tr> <tr> <td>ID card photocopy warning</td> </tr> <tr> <td>ID card on-screen display warning</td> </tr> <tr> <td>Alarm for occlusion in the ID card frame</td> </tr> <tr> <td>ID card reflective warning</td> </tr> <tr> <td>Blurry picture warning</td> </tr> </tbody> </table> Default rate limit: 20 requests/second.
     * @param {RecognizeMainlandIDCardOCRRequest} req
     * @param {function(string, RecognizeMainlandIDCardOCRResponse):void} cb
     * @public
     */
    RecognizeMainlandIDCardOCR(req, cb) {
        let resp = new RecognizeMainlandIDCardOCRResponse();
        this.request("RecognizeMainlandIDCardOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize a Philippine voters ID card. It can recognize fields such as first name, family name, date of birth, civil status, citizenship, address, precinct, and voter's identification number (VIN).

The API request rate is limited to 20 requests/sec by default.
     * @param {RecognizePhilippinesVoteIDOCRRequest} req
     * @param {function(string, RecognizePhilippinesVoteIDOCRResponse):void} cb
     * @public
     */
    RecognizePhilippinesVoteIDOCR(req, cb) {
        let resp = new RecognizePhilippinesVoteIDOCRResponse();
        this.request("RecognizePhilippinesVoteIDOCR", req, resp, cb);
    }

    /**
     * This interface supports identification of the front and back of Brazilian ID license. The identification fields include name, driver's license category, number, validity period, etc.
     * @param {RecognizeBrazilIDCardOCRRequest} req
     * @param {function(string, RecognizeBrazilIDCardOCRResponse):void} cb
     * @public
     */
    RecognizeBrazilIDCardOCR(req, cb) {
        let resp = new RecognizeBrazilIDCardOCRResponse();
        this.request("RecognizeBrazilIDCardOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize a Philippine Unified Multi-Purpose ID (UMID) card.
     * @param {RecognizePhilippinesUMIDOCRRequest} req
     * @param {function(string, RecognizePhilippinesUMIDOCRResponse):void} cb
     * @public
     */
    RecognizePhilippinesUMIDOCR(req, cb) {
        let resp = new RecognizePhilippinesUMIDOCRResponse();
        this.request("RecognizePhilippinesUMIDOCR", req, resp, cb);
    }

    /**
     * This interface supports identification of the front and back of Brazilian RNM license. The default interface request frequency limit is 5 times per second.
     * @param {RecognizeBrazilRNMOCRRequest} req
     * @param {function(string, RecognizeBrazilRNMOCRResponse):void} cb
     * @public
     */
    RecognizeBrazilRNMOCR(req, cb) {
        let resp = new RecognizeBrazilRNMOCRResponse();
        this.request("RecognizeBrazilRNMOCR", req, resp, cb);
    }

    /**
     * This interface supports the identification of all fields on the front side of ID card for Singapore residents.The identification accuracy reaches more than 99%.In addition, this interface also supports a variety of value-added capabilities to meet the needs of different scenarios. Such as the cropping function of ID card photos and portrait photos, and also has 5 alarm functions.
As shown in the table below. <table style="width:650px"> <thead> <tr> <th width="150">Value-added ability</th> <th width="500">Ability items</th> </tr> </thead> <tbody> <tr> <td rowspan="9">Alarm function</td> </tr> <tr> <td>ID card copy warning</td> </tr> <tr> <td>ID card copy warning</td> </tr> <tr> <td>Alarm for occlusion in the ID card frame</td> </tr> <tr> <td>ID card reflective warning</td> </tr> <tr> <td>Blurry picture warning</td> </tr> </tbody> </table> Default interface request frequency limit: 20 times/second
     * @param {RecognizeSingaporeIDCardOCRRequest} req
     * @param {function(string, RecognizeSingaporeIDCardOCRResponse):void} cb
     * @public
     */
    RecognizeSingaporeIDCardOCR(req, cb) {
        let resp = new RecognizeSingaporeIDCardOCRResponse();
        this.request("RecognizeSingaporeIDCardOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize all fields on the front of a mainland travel permit for Hong Kong, Macao, or Taiwan residents: name in Chinese, name in English, gender, date of birth, issuing authority, validity period, document number, place of issuance, number of issues, and document type.

A maximum of 20 requests can be initiated per second for this API.
     * @param {MainlandPermitOCRRequest} req
     * @param {function(string, MainlandPermitOCRResponse):void} cb
     * @public
     */
    MainlandPermitOCR(req, cb) {
        let resp = new MainlandPermitOCRResponse();
        this.request("MainlandPermitOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize a Philippine SSSID/UMID card.
     * @param {RecognizePhilippinesSssIDOCRRequest} req
     * @param {function(string, RecognizePhilippinesSssIDOCRResponse):void} cb
     * @public
     */
    RecognizePhilippinesSssIDOCR(req, cb) {
        let resp = new RecognizePhilippinesSssIDOCRResponse();
        this.request("RecognizePhilippinesSssIDOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize a Philippine driver's license.
     * @param {RecognizePhilippinesDrivingLicenseOCRRequest} req
     * @param {function(string, RecognizePhilippinesDrivingLicenseOCRResponse):void} cb
     * @public
     */
    RecognizePhilippinesDrivingLicenseOCR(req, cb) {
        let resp = new RecognizePhilippinesDrivingLicenseOCRResponse();
        this.request("RecognizePhilippinesDrivingLicenseOCR", req, resp, cb);
    }

    /**
     * Indonesian identity card recognition

Default API request rate limit: 5 requests/second.
     * @param {RecognizeIndonesiaIDCardOCRRequest} req
     * @param {function(string, RecognizeIndonesiaIDCardOCRResponse):void} cb
     * @public
     */
    RecognizeIndonesiaIDCardOCR(req, cb) {
        let resp = new RecognizeIndonesiaIDCardOCRResponse();
        this.request("RecognizeIndonesiaIDCardOCR", req, resp, cb);
    }

    /**
     * The POD intelligent review deeply integrates multimodal large model image understanding technology, targeting the logistics last-mile delivery scenario to provide high-precision POD compliance audit service. The system auto-recognizes ticket imperfections and risks of non-compliance, helping businesses achieve standardized control in the delivery process and effectively avoid customer complaints and disputes caused by non-compliant credentials.
     * @param {PODAuditAIRequest} req
     * @param {function(string, PODAuditAIResponse):void} cb
     * @public
     */
    PODAuditAI(req, cb) {
        let resp = new PODAuditAIResponse();
        this.request("PODAuditAI", req, resp, cb);
    }

    /**
     * This API is used to recognize a Philippine TIN ID card.
     * @param {RecognizePhilippinesTinIDOCRRequest} req
     * @param {function(string, RecognizePhilippinesTinIDOCRResponse):void} cb
     * @public
     */
    RecognizePhilippinesTinIDOCR(req, cb) {
        let resp = new RecognizePhilippinesTinIDOCRResponse();
        this.request("RecognizePhilippinesTinIDOCR", req, resp, cb);
    }

    /**
     * This API supports identifying and extracting field information in structured scenarios such as complex scenarios and multiple formats. Key scenarios include: finance, health care, transportation, travel, insurance. Click [experience now](https://ocrdemo.cloud.tencent.com/).

This API is used to set the alias SmartStructuralPro.

The default API request rate limit is 5 requests per second.
     * @param {ExtractDocMultiRequest} req
     * @param {function(string, ExtractDocMultiResponse):void} cb
     * @public
     */
    ExtractDocMulti(req, cb) {
        let resp = new ExtractDocMultiResponse();
        this.request("ExtractDocMulti", req, resp, cb);
    }


}
module.exports = OcrClient;
