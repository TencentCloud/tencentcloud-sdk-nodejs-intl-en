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
 * GeneralBasicOCR response structure.
 * @class
 */
class GeneralBasicOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of recognized text, including the text line content, confidence, text line coordinates, and text line coordinates after rotation correction. For more information, please click the link on the left.
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

        /**
         * Detected language. For more information on the supported languages, please see the description of the `LanguageType` input parameter.
         * @type {string || null}
         */
        this.Language = null;

        /**
         * Image rotation angle in degrees. 0° indicates horizontal text, a positive value indicates clockwise rotation, and a negative value indicates anticlockwise rotation. For more information, please see <a href="https://cloud.tencent.com/document/product/866/45139">How to Correct Tilted Text</a>
         * @type {number || null}
         */
        this.Angel = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Language = 'Language' in params ? params.Language : null;
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MLIDCardOCR request structure.
 * @class
 */
class MLIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded value of an image.
Supported image formats: PNG, JPG, JPEG. GIF is not supported at present.
Supported image size: the downloaded image cannot exceed 3 MB in size after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * URL address of an image. (This field is not supported outside Mainland China)
Supported image formats: PNG, JPG, JPEG. GIF is not supported at present.
Supported image size: the downloaded image cannot exceed 3 MB in size after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
It is recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to return an image
         * @type {boolean || null}
         */
        this.RetImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RetImage = 'RetImage' in params ? params.RetImage : null;

    }
}

/**
 * BankCardOCR request structure.
 * @class
 */
class BankCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded value of image.
Supported image formats: PNG, JPG, JPEG. GIF is currently not supported.
Supported image size: the downloaded image cannot exceed 7 MB in size after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
Either the `ImageUrl` or `ImageBase64` of the image must be provided; if both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * URL address of the image.
Supported image formats: PNG, JPG, JPEG. GIF is currently not supported.
Supported image size: the downloaded image cannot exceed 7 MB in size after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
It is recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * Coordinates
 * @class
 */
class Coord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Horizontal coordinate
         * @type {number || null}
         */
        this.X = null;

        /**
         * Vertical coordinate
         * @type {number || null}
         */
        this.Y = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;

    }
}

/**
 * BankCardOCR response structure.
 * @class
 */
class BankCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Card number
         * @type {string || null}
         */
        this.CardNo = null;

        /**
         * Bank information
         * @type {string || null}
         */
        this.BankInfo = null;

        /**
         * Expiration date
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.CardNo = 'CardNo' in params ? params.CardNo : null;
        this.BankInfo = 'BankInfo' in params ? params.BankInfo : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pixel coordinates of the text line in the image after rotation correction, which is in the format of `(X-coordinate of top-left point, Y-coordinate of top-left point, width, height)`
 * @class
 */
class ItemCoord extends  AbstractModel {
    constructor(){
        super();

        /**
         * X-coordinate of top-left point
         * @type {number || null}
         */
        this.X = null;

        /**
         * Y-coordinate of top-left point
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Width
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Height
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * MLIDPassportOCR response structure.
 * @class
 */
class MLIDPassportOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Passport ID
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Date of birth
         * @type {string || null}
         */
        this.DateOfBirth = null;

        /**
         * Gender (F: female, M: male)
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Expiration date
         * @type {string || null}
         */
        this.DateOfExpiration = null;

        /**
         * Issuing country
         * @type {string || null}
         */
        this.IssuingCountry = null;

        /**
         * Nationality
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * Alarm code
-9103 Alarm for spoofed card
-9102 Alarm for photocopied card
-9106 Alarm for covered card
         * @type {Array.<number> || null}
         */
        this.Warn = null;

        /**
         * Identity photo
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Extended field:
{
    ID:{
        Confidence:0.9999
    },
    Name:{
        Confidence:0.9996
    }
}
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.IssuingCountry = 'IssuingCountry' in params ? params.IssuingCountry : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MLIDCardOCR response structure.
 * @class
 */
class MLIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Identity card number
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Gender
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Alarm code
-9103 Alarm for photographed document
-9102 Alarm for photocopied document
         * @type {Array.<number> || null}
         */
        this.Warn = null;

        /**
         * Identity photo
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Extended field:
{
    ID:{
        Confidence:0.9999
    },
    Name:{
        Confidence:0.9996
    }
}
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OCR result
 * @class
 */
class TextDetection extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recognized text line content
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * Confidence. Value range: 0–100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Text line coordinates, which are represented as 4 vertex coordinates
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * Extended field.
The paragraph information `Parag` returned by the `GeneralBasicOcr` API contains `ParagNo`.
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * Pixel coordinates of the text line in the image after rotation correction, which is in the format of `(X-coordinate of top-left point, Y-coordinate of top-left point, width, height)`
         * @type {ItemCoord || null}
         */
        this.ItemPolygon = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

        if (params.ItemPolygon) {
            let obj = new ItemCoord();
            obj.deserialize(params.ItemPolygon)
            this.ItemPolygon = obj;
        }

    }
}

/**
 * MLIDPassportOCR request structure.
 * @class
 */
class MLIDPassportOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded value of the image. The image cannot exceed 7 MB in size after being Base64-encoded. A resolution of 500x800 or above is recommended. Supported formats include PNG, JPG, JPEG, and BMP. It is recommended that the card part occupies more than 2/3 of the image.
Either the `ImageUrl` or `ImageBase64` of the image must be provided; if both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * Whether to return an image
         * @type {boolean || null}
         */
        this.RetImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.RetImage = 'RetImage' in params ? params.RetImage : null;

    }
}

/**
 * GeneralBasicOCR request structure.
 * @class
 */
class GeneralBasicOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded value of image.
The image cannot exceed 7 MB in size after being Base64-encoded. A resolution above 600x800 is recommended. PNG, JPG, JPEG, and BMP formats are supported.
Either `ImageUrl` or `ImageBase64` of the image must be provided; if both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * URL address of image.
The image cannot exceed 7 MB in size after being Base64-encoded. A resolution above 600x800 is recommended. PNG, JPG, JPEG, and BMP formats are supported.
You are recommended to store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Reserved field.
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * Language to be recognized.
The language can be automatically recognized or manually specified. Chinese-English mix (`zh`) is selected by default. Mixed characters in English and each supported language can be recognized together.
Valid values:
zh\auto\jap\kor\nspa\fre\ger\por\nvie\may\rus\ita\nhol\swe\fin\dan\nnor\hun\tha\lat
Value meanings:
Chinese-English mix, automatic recognition, Japanese, Korean,
Spanish, French, German, Portuguese,
Vietnamese, Malay, Russian, Italian,
Dutch, Swedish, Finnish, Danish,
Norwegian, Hungarian, Thai, Latin.
         * @type {string || null}
         */
        this.LanguageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.LanguageType = 'LanguageType' in params ? params.LanguageType : null;

    }
}

module.exports = {
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    MLIDCardOCRRequest: MLIDCardOCRRequest,
    BankCardOCRRequest: BankCardOCRRequest,
    Coord: Coord,
    BankCardOCRResponse: BankCardOCRResponse,
    ItemCoord: ItemCoord,
    MLIDPassportOCRResponse: MLIDPassportOCRResponse,
    MLIDCardOCRResponse: MLIDCardOCRResponse,
    TextDetection: TextDetection,
    MLIDPassportOCRRequest: MLIDPassportOCRRequest,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,

}
