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
 * GeneralAccurateOCR request structure.
 * @class
 */
class GeneralAccurateOCRRequest extends  AbstractModel {
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
         * URL address of image. (This field is not supported outside Chinese mainland)
The image cannot exceed 7 MB after being Base64-encoded. A resolution above 600x800 is recommended. PNG, JPG, JPEG, and BMP formats are supported.
We recommend you store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to return the character information. Default value: `false`
         * @type {boolean || null}
         */
        this.IsWords = null;

        /**
         * Whether to slice the input image to enhance the recognition effects for scenarios where the whole image is big, but the size of a single character is small (e.g., test papers). This feature is disabled by default.
         * @type {boolean || null}
         */
        this.EnableDetectSplit = null;

        /**
         * Whether to enable PDF recognition. Default value: `false`. If you enable this feature, both images and PDF files can be recognized.
         * @type {boolean || null}
         */
        this.IsPdf = null;

        /**
         * Number of a PDF page that needs to be recognized. Currently, only one single page can be recognized. This parameter takes effect only if a PDF file is uploaded and `IsPdf` is set to `true`. Default value: `1`
         * @type {number || null}
         */
        this.PdfPageNumber = null;

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
        this.IsWords = 'IsWords' in params ? params.IsWords : null;
        this.EnableDetectSplit = 'EnableDetectSplit' in params ? params.EnableDetectSplit : null;
        this.IsPdf = 'IsPdf' in params ? params.IsPdf : null;
        this.PdfPageNumber = 'PdfPageNumber' in params ? params.PdfPageNumber : null;

    }
}

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
         * Image rotation angle in degrees. 0° indicates horizontal text, a positive value indicates clockwise rotation, and a negative value indicates anticlockwise rotation. For more information, please see <a href="https://intl.cloud.tencent.com/document/product/866/45139?from_cn_redirect=1">How to Correct Tilted Text</a>.
         * @type {number || null}
         */
        this.Angel = null;

        /**
         * Total number of PDF pages to be returned if the image is a PDF. Default value: 0.
         * @type {number || null}
         */
        this.PdfPageSize = null;

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
        this.PdfPageSize = 'PdfPageSize' in params ? params.PdfPageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information about a character detected, including the character itself and its confidence
 * @class
 */
class DetectedWords extends  AbstractModel {
    constructor(){
        super();

        /**
         * Confidence. Value range: 0–100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * A possible character
         * @type {string || null}
         */
        this.Character = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Character = 'Character' in params ? params.Character : null;

    }
}

/**
 * Form recognition result.
 * @class
 */
class TextTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * Column index of the top-left corner of the cell.
         * @type {number || null}
         */
        this.ColTl = null;

        /**
         * Row index of the top-left corner of the cell.
         * @type {number || null}
         */
        this.RowTl = null;

        /**
         * Column index of the bottom-right corner of the cell.
         * @type {number || null}
         */
        this.ColBr = null;

        /**
         * Row index of the bottom-right corner of the cell.
         * @type {number || null}
         */
        this.RowBr = null;

        /**
         * Cell text
         * @type {string || null}
         */
        this.Text = null;

        /**
         * Cell type. Valid values: body, header, footer
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Confidence. Value range: 0–100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Text line coordinates, which are represented as 4 vertex coordinates.
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * Extended field
         * @type {string || null}
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ColTl = 'ColTl' in params ? params.ColTl : null;
        this.RowTl = 'RowTl' in params ? params.RowTl : null;
        this.ColBr = 'ColBr' in params ? params.ColBr : null;
        this.RowBr = 'RowBr' in params ? params.RowBr : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Type = 'Type' in params ? params.Type : null;
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
Supported image formats: PNG, JPG, JPEG. GIF is currently not supported.
Supported image size: the downloaded image cannot exceed 7 MB after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * URL of an image. (This field is not supported outside the Chinese mainland)
Supported image formats: PNG, JPG, JPEG. GIF is currently not supported.
Supported image size: the downloaded image cannot exceed 7 MB after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
We recommend storing the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.
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
 * TableOCR request structure.
 * @class
 */
class TableOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded value of image.
Supported image formats: PNG, JPG, JPEG. GIF is not supported at present.
Supported image size: the downloaded image cannot exceed 3 MB in size after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
Either `ImageUrl` or `ImageBase64` of the image must be provided; if both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * URL address of image. (This field is not supported outside Chinese mainland)
Supported image formats: PNG, JPG, JPEG. GIF is currently not supported.
Supported image size: the downloaded image cannot exceed 3 MB after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
We recommend you store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.
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
 * TableOCR response structure.
 * @class
 */
class TableOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recognized text. For more information, please click the link on the left
         * @type {Array.<TextTable> || null}
         */
        this.TextDetections = null;

        /**
         * Base64-encoded Excel data.
         * @type {string || null}
         */
        this.Data = null;

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
                let obj = new TextTable();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Coordinates of a word’s four corners in a clockwise order on the input image, starting from the upper-left corner
 * @class
 */
class DetectedWordCoordPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Coordinates of a word’s four corners in a clockwise order on the input image, starting from the upper-left corner
         * @type {Array.<Coord> || null}
         */
        this.WordCoordinate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WordCoordinate) {
            this.WordCoordinate = new Array();
            for (let z in params.WordCoordinate) {
                let obj = new Coord();
                obj.deserialize(params.WordCoordinate[z]);
                this.WordCoordinate.push(obj);
            }
        }

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
         * Base64-encoded value of the image. The image cannot exceed 7 MB after being Base64-encoded. A resolution above 500 x 800 is recommended. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupy more than 2/3 area of the image.
Either the `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * URL address of image. (This field is not supported outside Chinese mainland)
Supported image formats: PNG, JPG, JPEG. GIF is currently not supported.
Supported image size: the downloaded image cannot exceed 7 MB after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
We recommend you store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to return the bank card image data after preprocessing (precise cropping and alignment). Default value: `false`
         * @type {boolean || null}
         */
        this.RetBorderCutImage = null;

        /**
         * Whether to return the card number image data after slicing. Default value: `false`
         * @type {boolean || null}
         */
        this.RetCardNoImage = null;

        /**
         * Whether to enable photocopy check. If the input image is a bank card photocopy, an alarm will be returned. Default value: `false`
         * @type {boolean || null}
         */
        this.EnableCopyCheck = null;

        /**
         * Whether to enable photograph check. If the input image is a bank card photograph, an alarm will be returned. Default value: `false`
         * @type {boolean || null}
         */
        this.EnableReshootCheck = null;

        /**
         * Whether to enable obscured border check. If the input image is a bank card with obscured border, an alarm will be returned. Default value: `false`
         * @type {boolean || null}
         */
        this.EnableBorderCheck = null;

        /**
         * Whether to return the image quality value, which measures how clear an image is. Default value: `false`
         * @type {boolean || null}
         */
        this.EnableQualityValue = null;

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
        this.RetBorderCutImage = 'RetBorderCutImage' in params ? params.RetBorderCutImage : null;
        this.RetCardNoImage = 'RetCardNoImage' in params ? params.RetCardNoImage : null;
        this.EnableCopyCheck = 'EnableCopyCheck' in params ? params.EnableCopyCheck : null;
        this.EnableReshootCheck = 'EnableReshootCheck' in params ? params.EnableReshootCheck : null;
        this.EnableBorderCheck = 'EnableBorderCheck' in params ? params.EnableBorderCheck : null;
        this.EnableQualityValue = 'EnableQualityValue' in params ? params.EnableQualityValue : null;

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
 * HKIDCardOCR request structure.
 * @class
 */
class HKIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to check for authenticity.
         * @type {boolean || null}
         */
        this.DetectFake = null;

        /**
         * Whether to return identity photo.
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

        /**
         * Base64 string of the image
Supported image formats: PNG, JPG, JPEG. GIF is not supported yet.
Supported image size: The downloaded image cannot exceed 7 MB after being Base64-encoded, and it cannot take longer than 3 seconds to download the image.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * URL address of image. (This field is not supported outside Chinese mainland)
Supported image formats: PNG, JPG, JPEG. GIF is currently not supported.
Supported image size: the downloaded image cannot exceed 3 MB after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
We recommend you store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability.
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
        this.DetectFake = 'DetectFake' in params ? params.DetectFake : null;
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

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
         * Expiration date. Format: 07/2023
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * Card type
         * @type {string || null}
         */
        this.CardType = null;

        /**
         * Card name
         * @type {string || null}
         */
        this.CardName = null;

        /**
         * Sliced image data
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BorderCutImage = null;

        /**
         * Card number image data
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CardNoImage = null;

        /**
         * Warning code:
-9110: the bank card date is invalid. 
-9111: the bank card border is incomplete. 
-9112: the bank card image is reflective.
-9113: the bank card image is a photocopy.
-9114: the bank card image is a photograph.
Multiple warning codes may be returned at a time.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.WarningCode = null;

        /**
         * Image quality value, which is returned when `EnableQualityValue` is set to `true`. The smaller the value, the less clear the image is. Value range: 0−100 (a threshold greater than or equal to 50 is recommended.)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.QualityValue = null;

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
        this.CardType = 'CardType' in params ? params.CardType : null;
        this.CardName = 'CardName' in params ? params.CardName : null;
        this.BorderCutImage = 'BorderCutImage' in params ? params.BorderCutImage : null;
        this.CardNoImage = 'CardNoImage' in params ? params.CardNoImage : null;
        this.WarningCode = 'WarningCode' in params ? params.WarningCode : null;
        this.QualityValue = 'QualityValue' in params ? params.QualityValue : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pixel coordinates of the text line in the image after rotation correction, which is in the format of `(X-coordinate of top-left point, Y-coordinate of top-left point, width, height)`.
 * @class
 */
class ItemCoord extends  AbstractModel {
    constructor(){
        super();

        /**
         * X-coordinate of top-left point.
         * @type {number || null}
         */
        this.X = null;

        /**
         * Y-coordinate of top-left point.
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
 * GeneralAccurateOCR response structure.
 * @class
 */
class GeneralAccurateOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information on recognized text, including the text line content, confidence, text line coordinates, and text line coordinates after rotation correction. For more information, please click the link on the left.
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

        /**
         * Image rotation angle in degrees. 0° indicates horizontal text. A positive value indicates clockwise rotation. A negative value indicates anticlockwise rotation. For more information, please see <a href="https://intl.cloud.tencent.com/document/product/866/45139?from_cn_redirect=1">How to Correct Tilted Text</a>.
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
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OCR result.
 * @class
 */
class TextDetection extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recognized text line content.
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * Confidence. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Text line coordinates, which are represented as 4 vertex coordinates.
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
         * Pixel coordinates of the text line in the image after rotation correction, which is in the format of `(X-coordinate of top-left point, Y-coordinate of top-left point, width, height)`.
         * @type {ItemCoord || null}
         */
        this.ItemPolygon = null;

        /**
         * Information about a character, including the character itself and its confidence. Supported APIs: `GeneralBasicOCR`, `GeneralAccurateOCR`
         * @type {Array.<DetectedWords> || null}
         */
        this.Words = null;

        /**
         * Coordinates of a word’s four corners on the input image. Supported APIs: `GeneralBasicOCR`, `GeneralAccurateOCR`
         * @type {Array.<DetectedWordCoordPoint> || null}
         */
        this.WordCoordPoint = null;

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

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new DetectedWords();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }

        if (params.WordCoordPoint) {
            this.WordCoordPoint = new Array();
            for (let z in params.WordCoordPoint) {
                let obj = new DetectedWordCoordPoint();
                obj.deserialize(params.WordCoordPoint[z]);
                this.WordCoordPoint.push(obj);
            }
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
         * Base64-encoded value of image. The image cannot exceed 7 MB in size after being Base64-encoded. A resolution above 500x800 is recommended. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupies more than 2/3 area of the image.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * Whether to return an image. Default value: false.
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
 * HKIDCardOCR response structure.
 * @class
 */
class HKIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name in Chinese
         * @type {string || null}
         */
        this.CnName = null;

        /**
         * Name in English
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * Telecode for the name in Chinese
         * @type {string || null}
         */
        this.TelexCode = null;

        /**
         * Gender. Valid values: Male, Female
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Date of birth
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Permanent identity card.
0: non-permanent;
1: permanent;
-1: unknown.
         * @type {number || null}
         */
        this.Permanent = null;

        /**
         * Identity card number
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * Document symbol, i.e., the symbol under the date of birth, such as "***AZ"
         * @type {string || null}
         */
        this.Symbol = null;

        /**
         * First issue date
         * @type {string || null}
         */
        this.FirstIssueDate = null;

        /**
         * Last receipt date
         * @type {string || null}
         */
        this.CurrentIssueDate = null;

        /**
         * Authenticity check.
0: unable to judge (because the image is blurred, incomplete, reflective, too dark, etc.);
1: forged;
2: authentic.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FakeDetectResult = null;

        /**
         * Base64-encoded identity photo
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HeadImage = null;

        /**
         * Multiple alarm codes. If the ID card is spoofed, photocopied, or doctored, the corresponding alarm code will be returned.
-9102: alarm for photocopied document
-9103: alarm for spoofed document
-9104: alarm for doctored document
-9105: alarm for forged document
         * @type {Array.<number> || null}
         */
        this.WarningCode = null;

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
        this.FakeDetectResult = 'FakeDetectResult' in params ? params.FakeDetectResult : null;
        this.HeadImage = 'HeadImage' in params ? params.HeadImage : null;
        this.WarningCode = 'WarningCode' in params ? params.WarningCode : null;
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
         * Warning code
-9103 Warning for spoofed card
-9102 Warning for photocopied card
-9106 Warning for covered card
-9107 Warning for blurry image
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
         * Certificate type
MyKad  ID card
MyPR    Permanent resident card
MyTentera   Military identity card
MyKAS    Temporary ID card
POLIS  Police card
IKAD   Work permit
MyKid   Kid card
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Date of birth (currently, this field is only supported for IKAD).
         * @type {string || null}
         */
        this.Birthday = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Base64-encoded value of image/PDF.
The image/PDF cannot exceed 7 MB after being Base64-encoded. A resolution above 600x800 is recommended. PNG, JPG, JPEG, BMP, and PDF formats are supported.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * URL address of image/PDF. (This field is not supported outside Chinese mainland)
The image/PDF cannot exceed 7 MB after being Base64-encoded. A resolution above 600x800 is recommended. PNG, JPG, JPEG, BMP, and PDF formats are supported.
We recommend you store the image in Tencent Cloud, as a Tencent Cloud URL can guarantee higher download speed and stability. The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Reserved field.
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * Language to recognize
The language can be automatically recognized or manually specified. Chinese-English mix (`zh`) is selected by default. Mixed characters in English and each supported language can be recognized together.
Valid values:
`zh`: Chinese-English mix
`zh_rare`: supports letters, digits, rare Chinese characters, Traditional Chinese characters, special characters, etc.
`auto`
`mix`: language mix
`jap`: Japanese
`kor`: Korean
`spa`: Spanish
`fre`: French
`ger`: German
`por`: Portuguese
`vie`: Vietnamese
`may`: Malay
`rus`: Russian
`ita`: Italian
`hol`: Dutch
`swe`: Swedish
`fin`: Finnish
`dan`: Danish
`nor`: Norwegian
`hun`: Hungarian
`tha`: Thai
`hi`: Hindi
`ara`: Arabic
         * @type {string || null}
         */
        this.LanguageType = null;

        /**
         * Whether to enable PDF recognition. Default value: false. After this feature is enabled, both images and PDF files can be recognized at the same time.
         * @type {boolean || null}
         */
        this.IsPdf = null;

        /**
         * Page number of the PDF page that needs to be recognized. Only one single PDF page can be recognized. This parameter is valid if the uploaded file is a PDF and the value of the `IsPdf` parameter is `true`. Default value: 1.
         * @type {number || null}
         */
        this.PdfPageNumber = null;

        /**
         * Whether to return the character information. Default value: `false`
         * @type {boolean || null}
         */
        this.IsWords = null;

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
        this.IsPdf = 'IsPdf' in params ? params.IsPdf : null;
        this.PdfPageNumber = 'PdfPageNumber' in params ? params.PdfPageNumber : null;
        this.IsWords = 'IsWords' in params ? params.IsWords : null;

    }
}

module.exports = {
    GeneralAccurateOCRRequest: GeneralAccurateOCRRequest,
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    DetectedWords: DetectedWords,
    TextTable: TextTable,
    MLIDCardOCRRequest: MLIDCardOCRRequest,
    TableOCRRequest: TableOCRRequest,
    TableOCRResponse: TableOCRResponse,
    DetectedWordCoordPoint: DetectedWordCoordPoint,
    BankCardOCRRequest: BankCardOCRRequest,
    Coord: Coord,
    HKIDCardOCRRequest: HKIDCardOCRRequest,
    BankCardOCRResponse: BankCardOCRResponse,
    ItemCoord: ItemCoord,
    MLIDPassportOCRResponse: MLIDPassportOCRResponse,
    GeneralAccurateOCRResponse: GeneralAccurateOCRResponse,
    TextDetection: TextDetection,
    MLIDPassportOCRRequest: MLIDPassportOCRRequest,
    HKIDCardOCRResponse: HKIDCardOCRResponse,
    MLIDCardOCRResponse: MLIDCardOCRResponse,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,

}
