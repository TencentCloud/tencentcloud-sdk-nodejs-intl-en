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
const GeneralAccurateOCRRequest = models.GeneralAccurateOCRRequest;
const GeneralBasicOCRResponse = models.GeneralBasicOCRResponse;
const DetectedWords = models.DetectedWords;
const TextTable = models.TextTable;
const MLIDCardOCRRequest = models.MLIDCardOCRRequest;
const TableOCRRequest = models.TableOCRRequest;
const TableOCRResponse = models.TableOCRResponse;
const DetectedWordCoordPoint = models.DetectedWordCoordPoint;
const BankCardOCRRequest = models.BankCardOCRRequest;
const Coord = models.Coord;
const HKIDCardOCRRequest = models.HKIDCardOCRRequest;
const BankCardOCRResponse = models.BankCardOCRResponse;
const ItemCoord = models.ItemCoord;
const MLIDPassportOCRResponse = models.MLIDPassportOCRResponse;
const GeneralAccurateOCRResponse = models.GeneralAccurateOCRResponse;
const TextDetection = models.TextDetection;
const MLIDPassportOCRRequest = models.MLIDPassportOCRRequest;
const HKIDCardOCRResponse = models.HKIDCardOCRResponse;
const MLIDCardOCRResponse = models.MLIDCardOCRResponse;
const GeneralBasicOCRRequest = models.GeneralBasicOCRRequest;


/**
 * ocr client
 * @class
 */
class OcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ocr.tencentcloudapi.com", "2018-11-19", credential, region, profile);
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
     * This API is used to recognize a Malaysian identity card. Recognizable fields include identity card number, name, gender, and address. It has the features of cropping identity photos and alarming for photographed or photocopied documents.

This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://intl.cloud.tencent.com/contact-sales).
     * @param {MLIDCardOCRRequest} req
     * @param {function(string, MLIDCardOCRResponse):void} cb
     * @public
     */
    MLIDCardOCR(req, cb) {
        let resp = new MLIDCardOCRResponse();
        this.request("MLIDCardOCR", req, resp, cb);
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
     * This API is used to recognize key fields on the photo side of a Hong Kong (China) identity card, including name in Chinese, name in English, telecode for name, date of birth, gender, document symbol, date of the first issue, date of the last receipt, identity card number, and permanent residency attribute. It can check for card authenticity and crop the identity photo.

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
     * This API is used to recognize a passport issued in Hong Kong/Macao/Taiwan (China) or other countries/regions. Recognizable fields include passport ID, name, date of birth, gender, expiration date, issuing country/region, and nationality. It has the features of cropping identity photos and alarming for photographed or photocopied documents.

This API is not fully available for the time being. For more information, please contact your [Tencent Cloud sales rep](https://intl.cloud.tencent.com/contact-sales).
     * @param {MLIDPassportOCRRequest} req
     * @param {function(string, MLIDPassportOCRResponse):void} cb
     * @public
     */
    MLIDPassportOCR(req, cb) {
        let resp = new MLIDPassportOCRResponse();
        this.request("MLIDPassportOCR", req, resp, cb);
    }


}
module.exports = OcrClient;
