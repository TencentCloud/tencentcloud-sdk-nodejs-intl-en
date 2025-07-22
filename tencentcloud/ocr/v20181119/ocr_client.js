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
const InvoiceItem = models.InvoiceItem;
const RecognizeMexicoVTIDResponse = models.RecognizeMexicoVTIDResponse;
const HKIDCardOCRRequest = models.HKIDCardOCRRequest;
const ExtractDocMultiRequest = models.ExtractDocMultiRequest;
const RecognizeBrazilIDCardOCRRequest = models.RecognizeBrazilIDCardOCRRequest;
const RecognizePhilippinesDrivingLicenseOCRRequest = models.RecognizePhilippinesDrivingLicenseOCRRequest;
const WordItem = models.WordItem;
const MLIDPassportOCRRequest = models.MLIDPassportOCRRequest;
const ItemInfo = models.ItemInfo;
const SmartStructuralOCRV2Request = models.SmartStructuralOCRV2Request;
const OtherInvoiceList = models.OtherInvoiceList;
const RecognizeMacaoIDCardOCRResponse = models.RecognizeMacaoIDCardOCRResponse;
const PermitOCRResponse = models.PermitOCRResponse;
const RecognizeBrazilDriverLicenseOCRRequest = models.RecognizeBrazilDriverLicenseOCRRequest;
const Rect = models.Rect;
const LicensePlateInfo = models.LicensePlateInfo;
const VatRollItem = models.VatRollItem;
const HmtResidentPermitOCRResponse = models.HmtResidentPermitOCRResponse;
const WordPolygon = models.WordPolygon;
const FlightItem = models.FlightItem;
const Value = models.Value;
const SealInfo = models.SealInfo;
const RecognizePhilippinesVoteIDOCRRequest = models.RecognizePhilippinesVoteIDOCRRequest;
const RecognizeKoreanDrivingLicenseOCRRequest = models.RecognizeKoreanDrivingLicenseOCRRequest;
const OtherInvoiceItem = models.OtherInvoiceItem;
const SmartStructuralProRequest = models.SmartStructuralProRequest;
const VatInvoiceItemInfo = models.VatInvoiceItemInfo;
const MainlandPermitOCRRequest = models.MainlandPermitOCRRequest;
const TextDetection = models.TextDetection;
const RecognizePhilippinesTinIDOCRResponse = models.RecognizePhilippinesTinIDOCRResponse;
const DetectedWords = models.DetectedWords;
const TableCellInfo = models.TableCellInfo;
const ShippingInvoice = models.ShippingInvoice;
const LineInfo = models.LineInfo;
const GeneralMachineItem = models.GeneralMachineItem;
const GeneralAccurateOCRResponse = models.GeneralAccurateOCRResponse;
const HmtResidentPermitOCRRequest = models.HmtResidentPermitOCRRequest;
const BusInvoice = models.BusInvoice;
const RecognizeGeneralInvoiceRequest = models.RecognizeGeneralInvoiceRequest;
const GeneralBasicOCRResponse = models.GeneralBasicOCRResponse;
const RecognizeThaiIDCardOCRResponse = models.RecognizeThaiIDCardOCRResponse;
const OtherInvoice = models.OtherInvoice;
const RecognizePhilippinesUMIDOCRRequest = models.RecognizePhilippinesUMIDOCRRequest;
const BankCardOCRRequest = models.BankCardOCRRequest;
const RecognizePhilippinesSssIDOCRRequest = models.RecognizePhilippinesSssIDOCRRequest;
const Key = models.Key;
const IDCardOCRResponse = models.IDCardOCRResponse;
const MLIDCardOCRRequest = models.MLIDCardOCRRequest;
const LicensePlateOCRResponse = models.LicensePlateOCRResponse;
const HKIDCardOCRResponse = models.HKIDCardOCRResponse;
const GroupInfo = models.GroupInfo;
const QuotaInvoice = models.QuotaInvoice;
const PermitOCRRequest = models.PermitOCRRequest;
const SingleInvoiceItem = models.SingleInvoiceItem;
const VatInvoiceInfo = models.VatInvoiceInfo;
const ExtractDocMultiResponse = models.ExtractDocMultiResponse;
const RecognizePhilippinesSssIDOCRResponse = models.RecognizePhilippinesSssIDOCRResponse;
const MachinePrintedInvoice = models.MachinePrintedInvoice;
const RecognizeKoreanIDCardOCRResponse = models.RecognizeKoreanIDCardOCRResponse;
const RecognizePhilippinesUMIDOCRResponse = models.RecognizePhilippinesUMIDOCRResponse;
const TrainTicket = models.TrainTicket;
const RecognizeThaiIDCardOCRRequest = models.RecognizeThaiIDCardOCRRequest;
const MotorVehicleSaleInvoice = models.MotorVehicleSaleInvoice;
const RecognizeKoreanIDCardOCRRequest = models.RecognizeKoreanIDCardOCRRequest;
const TableOCRRequest = models.TableOCRRequest;
const PassportRecognizeInfos = models.PassportRecognizeInfos;
const RecognizeSingaporeIDCardOCRRequest = models.RecognizeSingaporeIDCardOCRRequest;
const TaxiTicket = models.TaxiTicket;
const RecognizeBrazilRNMOCRResponse = models.RecognizeBrazilRNMOCRResponse;
const LicensePlateOCRRequest = models.LicensePlateOCRRequest;
const GeneralBasicOCRRequest = models.GeneralBasicOCRRequest;
const RecognizeBrazilRNMOCRRequest = models.RecognizeBrazilRNMOCRRequest;
const RecognizeBrazilIDCardOCRResponse = models.RecognizeBrazilIDCardOCRResponse;
const RecognizeBrazilRNEOCRRequest = models.RecognizeBrazilRNEOCRRequest;
const VatElectronicInfo = models.VatElectronicInfo;
const IDCardOCRRequest = models.IDCardOCRRequest;
const GeneralAccurateOCRRequest = models.GeneralAccurateOCRRequest;
const UsedCarPurchaseInvoice = models.UsedCarPurchaseInvoice;
const RecognizeMacaoIDCardOCRRequest = models.RecognizeMacaoIDCardOCRRequest;
const NonTaxIncomeBill = models.NonTaxIncomeBill;
const MLIDPassportOCRResponse = models.MLIDPassportOCRResponse;
const AirTransport = models.AirTransport;
const RecognizeTableAccurateOCRRequest = models.RecognizeTableAccurateOCRRequest;
const Coord = models.Coord;
const SealOCRResponse = models.SealOCRResponse;
const RecognizeBrazilRNEOCRResponse = models.RecognizeBrazilRNEOCRResponse;
const RecognizeIndonesiaIDCardOCRResponse = models.RecognizeIndonesiaIDCardOCRResponse;
const TableInfo = models.TableInfo;
const VinOCRResponse = models.VinOCRResponse;
const RecognizeKoreanDrivingLicenseOCRResponse = models.RecognizeKoreanDrivingLicenseOCRResponse;
const VatElectronicItemInfo = models.VatElectronicItemInfo;
const ConfigAdvanced = models.ConfigAdvanced;
const RecognizePhilippinesVoteIDOCRResponse = models.RecognizePhilippinesVoteIDOCRResponse;
const ItemCoord = models.ItemCoord;
const RecognizeMainlandIDCardOCRRequest = models.RecognizeMainlandIDCardOCRRequest;
const VatInvoiceRoll = models.VatInvoiceRoll;
const Polygon = models.Polygon;
const TextDetectionResult = models.TextDetectionResult;
const RecognizeGeneralInvoiceResponse = models.RecognizeGeneralInvoiceResponse;
const RecognizeSingaporeIDCardOCRResponse = models.RecognizeSingaporeIDCardOCRResponse;
const SealOCRRequest = models.SealOCRRequest;
const MedicalInvoice = models.MedicalInvoice;
const TextTable = models.TextTable;
const RecognizeTableAccurateOCRResponse = models.RecognizeTableAccurateOCRResponse;
const SmartStructuralOCRV2Response = models.SmartStructuralOCRV2Response;
const RecognizeMainlandIDCardOCRResponse = models.RecognizeMainlandIDCardOCRResponse;
const MainlandPermitOCRResponse = models.MainlandPermitOCRResponse;
const NonTaxItem = models.NonTaxItem;
const RecognizeMexicoVTIDRequest = models.RecognizeMexicoVTIDRequest;
const TollInvoice = models.TollInvoice;
const SmartStructuralProResponse = models.SmartStructuralProResponse;
const TableOCRResponse = models.TableOCRResponse;
const DetectedWordCoordPoint = models.DetectedWordCoordPoint;
const RecognizeBrazilDriverLicenseOCRResponse = models.RecognizeBrazilDriverLicenseOCRResponse;
const RecognizeIndonesiaIDCardOCRRequest = models.RecognizeIndonesiaIDCardOCRRequest;
const VinOCRRequest = models.VinOCRRequest;
const MLIDCardOCRResponse = models.MLIDCardOCRResponse;
const RecognizePhilippinesTinIDOCRRequest = models.RecognizePhilippinesTinIDOCRRequest;
const RecognizeThaiPinkCardRequest = models.RecognizeThaiPinkCardRequest;
const BankCardOCRResponse = models.BankCardOCRResponse;
const RecognizeThaiPinkCardResponse = models.RecognizeThaiPinkCardResponse;
const RecognizePhilippinesDrivingLicenseOCRResponse = models.RecognizePhilippinesDrivingLicenseOCRResponse;


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
Currently, this API is not generally available. For more information, please [contact your sales rep](https://intl.cloud.tencent.com/about/connect?from_cn_redirect=1).

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
     * This API is used to recognize all fields on the front and back sides of a second-generation resident identity card for the Chinese mainland: name, gender, ethnicity, date of birth, domicile, identification number, issuing authority, and validity period, with a recognition accuracy of over 99%.

In addition, this API supports multiple value-added capabilities to meet the needs of different scenarios. It can crop ID card photos and profile photos, and provide warnings for nine cases, as detailed below.

<table style="width:650px">
      <thead>
        <tr>
       <th width="150">Capability</th>
          <th width="500">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">Cropping</td>
          <td>Crops the ID card photo (by removing extra edges outside the ID card and automatically correcting the shooting angle).</td>
        </tr>
        <tr>
          <td>Crops the profile photo (by automatically cutting out the face area in the ID card).</td>
        </tr>
        <tr>
          <td rowspan="9">Warning</td>
          <td>Warns about invalid ID card validity periods.</td>
        </tr>
        <tr>
          <td>Warns about  incomplete ID card borders.</td>
        </tr>
        <tr>
          <td>Warns about photocopied images.</td>
        </tr>
        <tr>
          <td>Warns about spoofed images.</td>
        </tr>
          <tr>
          <td>Warns about border and frame occlusions.</td>
        </tr>
         <tr>
          <td>Warns about temporary ID cards.</td>
        </tr>
          <tr>
          <td>Warns about photoshopped images.</td>
        </tr>
          <tr>
          <td>Warns about blurry ID card images (blurriness can be determined based on the image quality score).</td>
        </tr>
      </tbody>
    </table>

A maximum of 20 requests can be initiated per second for this API.
     * @param {IDCardOCRRequest} req
     * @param {function(string, IDCardOCRResponse):void} cb
     * @public
     */
    IDCardOCR(req, cb) {
        let resp = new IDCardOCRResponse();
        this.request("IDCardOCR", req, resp, cb);
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
     * This API is used to recognize regular tables, borderless tables, or multi-tables in images or PDF files containing Chinese and English texts. It returns the text content of each cell, supports recognition of rotated table images, and can save the recognition results into an Excel document. It delivers higher recognition accuracy than that of table OCR v2 and applies to more scenarios. The recognition accuracy in difficult table scenarios, such as irregular tables and nested tables (borderless tables contained in bordered tables), is better than that of table OCR v2. To try it, click [here](https://intl.cloud.tencent.com/product/smart?from_cn_redirect=1-ocr).

A maximum of 2 requests can be initiated per second for this API.
     * @param {RecognizeTableAccurateOCRRequest} req
     * @param {function(string, RecognizeTableAccurateOCRResponse):void} cb
     * @public
     */
    RecognizeTableAccurateOCR(req, cb) {
        let resp = new RecognizeTableAccurateOCRResponse();
        this.request("RecognizeTableAccurateOCR", req, resp, cb);
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
     * This API is used to detect and recognize Chinese and English forms in images. It can return the text content of each cell and save the recognition result as Excel.

This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://intl.cloud.tencent.com/contact-sales).
     * @param {TableOCRRequest} req
     * @param {function(string, TableOCRResponse):void} cb
     * @public
     */
    TableOCR(req, cb) {
        let resp = new TableOCRResponse();
        this.request("TableOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize key fields on the front and back sides of a residence permit for Hong Kong, Macao, or Taiwan residents, including name, gender, date of birth, address, ID number, issuing authority, validity period, number of issues, and permit number. It can be used for residence permit OCR in scenarios such as bank account opening and user registration.

A maximum of 20 requests can be initiated per second for this API.
     * @param {HmtResidentPermitOCRRequest} req
     * @param {function(string, HmtResidentPermitOCRResponse):void} cb
     * @public
     */
    HmtResidentPermitOCR(req, cb) {
        let resp = new HmtResidentPermitOCRResponse();
        this.request("HmtResidentPermitOCR", req, resp, cb);
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
     * This API is used to recognize a license plate attached to a motor vehicle in the Chinese mainland and return the regional code, license plate number, and license plate color.

A maximum of 10 requests can be initiated per second for this API.
     * @param {LicensePlateOCRRequest} req
     * @param {function(string, LicensePlateOCRResponse):void} cb
     * @public
     */
    LicensePlateOCR(req, cb) {
        let resp = new LicensePlateOCRResponse();
        this.request("LicensePlateOCR", req, resp, cb);
    }

    /**
     * This interface supports the identification of all fields on the front and back of the second-generation ID card for mainland Chinese residents.Including name, gender, ethnicity, date of birth, address, citizen ID number, issuing authority, and validity period, the identification accuracy reaches more than 99%.In addition, this interface also supports a variety of value-added capabilities to meet the needs of different scenarios. Such as the cropping function of ID card photos and portrait photos, and also has 5 alarm functions.
As shown in the table below. <table style="width:650px"> <thead> <tr> <th width="150">Value-added ability</th> <th width="500">Ability items</th> </tr> </thead> <tbody> <tr> <td rowspan="9">Alarm function</td> </tr> <tr> <td>ID card copy warning</td> </tr> <tr> <td>ID card copy warning</td> </tr> <tr> <td>Alarm for occlusion in the ID card frame</td> </tr> <tr> <td>ID card reflective warning</td> </tr> <tr> <td>Blurry picture warning</td> </tr> </tbody> </table> Default interface request frequency limit: 20 times/second
     * @param {RecognizeMainlandIDCardOCRRequest} req
     * @param {function(string, RecognizeMainlandIDCardOCRResponse):void} cb
     * @public
     */
    RecognizeMainlandIDCardOCR(req, cb) {
        let resp = new RecognizeMainlandIDCardOCRResponse();
        this.request("RecognizeMainlandIDCardOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize various types of seals, including invoice seals and finance seals. It is suitable for scenarios such as official document and invoice/ticket OCR.

A maximum of 5 requests can be initiated per second for this API.
     * @param {SealOCRRequest} req
     * @param {function(string, SealOCRResponse):void} cb
     * @public
     */
    SealOCR(req, cb) {
        let resp = new SealOCRResponse();
        this.request("SealOCR", req, resp, cb);
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
     * This API is used to detect and recognize key fields such as the card number, bank information, and expiration date on mainstream bank cards in Mainland China.

This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://intl.cloud.tencent.com/contact-sales).
     * @param {BankCardOCRRequest} req
     * @param {function(string, BankCardOCRResponse):void} cb
     * @public
     */
    BankCardOCR(req, cb) {
        let resp = new BankCardOCRResponse();
        this.request("BankCardOCR", req, resp, cb);
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
     * This API is used to recognize a South Korean ID card.
     * @param {RecognizeKoreanIDCardOCRRequest} req
     * @param {function(string, RecognizeKoreanIDCardOCRResponse):void} cb
     * @public
     */
    RecognizeKoreanIDCardOCR(req, cb) {
        let resp = new RecognizeKoreanIDCardOCRResponse();
        this.request("RecognizeKoreanIDCardOCR", req, resp, cb);
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
     * This API is used to recognize fields from cards, documents, bills, forms, contracts, and other structured information. It is flexible and efficient to use, without any configuration required. This API is suitable for recognizing structured information.

A maximum of 10 requests can be initiated per second for this API.
     * @param {SmartStructuralProRequest} req
     * @param {function(string, SmartStructuralProResponse):void} cb
     * @public
     */
    SmartStructuralPro(req, cb) {
        let resp = new SmartStructuralProResponse();
        this.request("SmartStructuralPro", req, resp, cb);
    }

    /**
     * This API is used to recognize an Indonesian identity card.

The API request rate is limited to 20 requests/sec by default.
     * @param {RecognizeIndonesiaIDCardOCRRequest} req
     * @param {function(string, RecognizeIndonesiaIDCardOCRResponse):void} cb
     * @public
     */
    RecognizeIndonesiaIDCardOCR(req, cb) {
        let resp = new RecognizeIndonesiaIDCardOCRResponse();
        this.request("RecognizeIndonesiaIDCardOCR", req, resp, cb);
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
     * This API is used to recognize a South Korean driver's license.
     * @param {RecognizeKoreanDrivingLicenseOCRRequest} req
     * @param {function(string, RecognizeKoreanDrivingLicenseOCRResponse):void} cb
     * @public
     */
    RecognizeKoreanDrivingLicenseOCR(req, cb) {
        let resp = new RecognizeKoreanDrivingLicenseOCRResponse();
        this.request("RecognizeKoreanDrivingLicenseOCR", req, resp, cb);
    }

    /**
     * This API is used to recognize various types of invoices or tickets in an image or PDF file. You can also specify a type. 14 types of standard expense reimbursement invoices are supported, including value-added tax (VAT) invoice (special, general, roll, blockchain, and toll), fully digitalized electronic invoice (special and general), non-tax revenue invoice (general receipt and general payment voucher), quota invoice, general machine-printed invoice, car sales invoice (motor vehicle sales invoice and used car invoice), train ticket, taxi receipt, itinerary/receipt of e-ticket for air transportation, bus ticket, ship ticket, toll receipt, and medical invoice (inpatient and outpatient). This API can also be used for intelligent recognition of other types of invoices. To try now, click [here](https://intl.cloud.tencent.com/product/ocr?from_cn_redirect=1).

A maximum of 5 requests can be initiated per second for this API.


The invoice/ticket subtype (SubType), subtype description (TypeDescription), and parent type (Type) can be returned, as described below:
<table style="width:715px">
      <thead>
        <tr>
          <th style="width:200px">SubType</th>
          <th style="width:200px">TypeDescription</th>
          <th >Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> VatSpecialInvoice</td>
          <td> Special VAT invoice </td>
          <td> 3 </td>
        </tr>
        <tr>
          <td> VatCommonInvoice</td>
          <td> General VAT invoice </td>
          <td> 3 </td>
        </tr>
        <tr>
          <td> VatElectronicCommonInvoice </td>
          <td> Electronic general VAT invoice </td>
          <td> 3 </td>
        </tr>
        <tr>
          <td> VatElectronicSpecialInvoice </td>
          <td> Electronic special VAT invoice </td>
          <td> 3 </td>
        </tr>
        <tr>
          <td> VatElectronicInvoiceBlockchain</td>
          <td> Blockchain electronic invoice </td>
          <td> 3 </td>
        </tr>
        <tr>
          <td> VatElectronicInvoiceToll</td>
          <td> Electronic general VAT invoice (toll)</td>
          <td> 3 </td>
        </tr>
        <tr>
          <td> VatElectronicSpecialInvoiceFull</td>
          <td> Electronic invoice (special)</td>
          <td> 16 </td>
        </tr>
        <tr>
          <td> VatElectronicInvoiceFull</td>
          <td> Electronic invoice (general) </td>
          <td> 16 </td>
        </tr>
        <tr>
          <td> MotorVehicleSaleInvoice </td>
          <td> Motor vehicle sales invoice </td>
          <td> 12 </td>
        </tr>
        <tr>
          <td> UsedCarPurchaseInvoice </td>
          <td> Used car invoice </td>
          <td> 12 </td>
        </tr>
        <tr>
          <td> VatInvoiceRoll </td>
          <td> General VAT invoice (roll) </td>
          <td> 11 </td>
        </tr>
        <tr>
          <td> TaxiTicket </td>
          <td> Taxi receipt </td>
          <td> 0 </td>
        </tr>
        <tr>
          <td> QuotaInvoice </td>
          <td> Quota invoice </td>
          <td> 1 </td>
        </tr>
        <tr>
          <td> TrainTicket </td>
          <td> Train ticket </td>
          <td> 2 </td>
        </tr>
        <tr>
          <td> AirTransport </td>
          <td> Itinerary/Receipt of e-ticket for air transportation </td>
          <td> 5 </td>
        </tr>
        <tr>
          <td> MachinePrintedInvoice </td>
          <td> General machine-printed invoice </td>
          <td> 8 </td>
        </tr>
        <tr>
          <td> BusInvoice </td>
          <td> Bus ticket </td>
          <td> 9 </td>
        </tr>
        <tr>
          <td> ShippingInvoice </td>
          <td> Ship ticket </td>
          <td> 10 </td>
        </tr>
        <tr>
          <td> NonTaxIncomeGeneralBill </td>
          <td> General receipt for non-tax revenue </td>
          <td> 15 </td>
        </tr>
        <tr>
          <td> NonTaxIncomeElectronicBill </td>
          <td> General payment voucher for non-tax revenue (electronic) </td>
          <td> 15 </td>
        </tr>
        <tr>
          <td> TollInvoice </td>
          <td> Toll receipt </td>
          <td> 13 </td>
        </tr>
        <tr>
          <td> OtherInvoice </td>
          <td> Other </td>
          <td> -1 </td>
        </tr>
      </tbody>
    </table>
     * @param {RecognizeGeneralInvoiceRequest} req
     * @param {function(string, RecognizeGeneralInvoiceResponse):void} cb
     * @public
     */
    RecognizeGeneralInvoice(req, cb) {
        let resp = new RecognizeGeneralInvoiceResponse();
        this.request("RecognizeGeneralInvoice", req, resp, cb);
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
