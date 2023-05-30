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
 * The coordinates of the four vertices of the text
Note: This field may return null, indicating that no valid values can be obtained.
 * @class
 */
class Polygon extends  AbstractModel {
    constructor(){
        super();

        /**
         * The coordinates of the upper-left vertex.
         * @type {Coord || null}
         */
        this.LeftTop = null;

        /**
         * The coordinates of the upper-right vertex.
         * @type {Coord || null}
         */
        this.RightTop = null;

        /**
         * The coordinates of the lower-left vertex.
         * @type {Coord || null}
         */
        this.RightBottom = null;

        /**
         * The coordinates of the lower-right vertex.
         * @type {Coord || null}
         */
        this.LeftBottom = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LeftTop) {
            let obj = new Coord();
            obj.deserialize(params.LeftTop)
            this.LeftTop = obj;
        }

        if (params.RightTop) {
            let obj = new Coord();
            obj.deserialize(params.RightTop)
            this.RightTop = obj;
        }

        if (params.RightBottom) {
            let obj = new Coord();
            obj.deserialize(params.RightBottom)
            this.RightBottom = obj;
        }

        if (params.LeftBottom) {
            let obj = new Coord();
            obj.deserialize(params.LeftBottom)
            this.LeftBottom = obj;
        }

    }
}

/**
 * Recognition result
 * @class
 */
class TextDetectionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The recognized text line content.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * The coordinates, represented in the coordinates of the four points.
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }

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
 * RecognizePhilippinesVoteIDOCR response structure.
 * @class
 */
class RecognizePhilippinesVoteIDOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded identity photo.
         * @type {TextDetectionResult || null}
         */
        this.HeadPortrait = null;

        /**
         * The voter's identification number (VIN).
         * @type {TextDetectionResult || null}
         */
        this.VIN = null;

        /**
         * The first name.
         * @type {TextDetectionResult || null}
         */
        this.FirstName = null;

        /**
         * The last name.
         * @type {TextDetectionResult || null}
         */
        this.LastName = null;

        /**
         * The date of birth.
         * @type {TextDetectionResult || null}
         */
        this.Birthday = null;

        /**
         * The civil status.
         * @type {TextDetectionResult || null}
         */
        this.CivilStatus = null;

        /**
         * The citizenship.
         * @type {TextDetectionResult || null}
         */
        this.Citizenship = null;

        /**
         * The address.
         * @type {TextDetectionResult || null}
         */
        this.Address = null;

        /**
         * The precinct.
         * @type {TextDetectionResult || null}
         */
        this.PrecinctNo = null;

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

        if (params.HeadPortrait) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.HeadPortrait)
            this.HeadPortrait = obj;
        }

        if (params.VIN) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.VIN)
            this.VIN = obj;
        }

        if (params.FirstName) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.FirstName)
            this.FirstName = obj;
        }

        if (params.LastName) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.LastName)
            this.LastName = obj;
        }

        if (params.Birthday) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Birthday)
            this.Birthday = obj;
        }

        if (params.CivilStatus) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.CivilStatus)
            this.CivilStatus = obj;
        }

        if (params.Citizenship) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Citizenship)
            this.Citizenship = obj;
        }

        if (params.Address) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Address)
            this.Address = obj;
        }

        if (params.PrecinctNo) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.PrecinctNo)
            this.PrecinctNo = obj;
        }
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
         * Image rotation angle in degrees. 0°: The horizontal direction of the text on the image; a positive value: rotate clockwise; a negative value: rotate counterclockwise.
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
         * Country/region code
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * Alarm codes
-9103 Alarm for spoofed document
-9102 Alarm for photocopied document (including black & white and color ones)
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
         * The first row of the machine-readable zone (MRZ) at the bottom
         * @type {string || null}
         */
        this.CodeSet = null;

        /**
         * The second row of the MRZ at the bottom
         * @type {string || null}
         */
        this.CodeCrc = null;

        /**
         * The surname.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Surname = null;

        /**
         * The given name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GivenName = null;

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
        this.CodeSet = 'CodeSet' in params ? params.CodeSet : null;
        this.CodeCrc = 'CodeCrc' in params ? params.CodeCrc : null;
        this.Surname = 'Surname' in params ? params.Surname : null;
        this.GivenName = 'GivenName' in params ? params.GivenName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * RecognizePhilippinesDrivingLicenseOCR request structure.
 * @class
 */
class RecognizePhilippinesDrivingLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded value of an image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Either the `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
For a non-Tencent Cloud URL, the download speed and stability may be affected.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to return the identity photo.
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

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
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;

    }
}

/**
 * The recognized text information.
 * @class
 */
class WordItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The text content.
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * The coordinates of the four vertices.
         * @type {Polygon || null}
         */
        this.Coord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;

        if (params.Coord) {
            let obj = new Polygon();
            obj.deserialize(params.Coord)
            this.Coord = obj;
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
 * Structured element group
 * @class
 */
class ItemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Key || null}
         */
        this.Key = null;

        /**
         * The value information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Value || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Key) {
            let obj = new Key();
            obj.deserialize(params.Key)
            this.Key = obj;
        }

        if (params.Value) {
            let obj = new Value();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * SmartStructuralOCRV2 request structure.
 * @class
 */
class SmartStructuralOCRV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * The Base64-encoded value of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Either `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` is used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * Whether to enable PDF recognition. Default value: `false`. If you enable this feature, both images and PDF files can be recognized.
         * @type {boolean || null}
         */
        this.IsPdf = null;

        /**
         * The number of the PDF page that needs to be recognized. Only one single PDF page can be recognized. This parameter is valid if the uploaded file is a PDF and the value of `IsPdf` is `true`. Default value: `1`.
         * @type {number || null}
         */
        this.PdfPageNumber = null;

        /**
         * The names of the fields you want to return for the structured information recognition.
For example, if you want to return only the recognition result of the "Name" and "Gender" fields, set this parameter as follows:
ItemNames=["Name","Gender"]
         * @type {Array.<string> || null}
         */
        this.ItemNames = null;

        /**
         * Whether to enable recognition of all fields.
         * @type {boolean || null}
         */
        this.ReturnFullText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.IsPdf = 'IsPdf' in params ? params.IsPdf : null;
        this.PdfPageNumber = 'PdfPageNumber' in params ? params.PdfPageNumber : null;
        this.ItemNames = 'ItemNames' in params ? params.ItemNames : null;
        this.ReturnFullText = 'ReturnFullText' in params ? params.ReturnFullText : null;

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
         * Image rotation angle in degrees. 0°: The horizontal direction of the text on the image; a positive value: rotate clockwise; a negative value: rotate counterclockwise.
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
 * RecognizePhilippinesDrivingLicenseOCR response structure.
 * @class
 */
class RecognizePhilippinesDrivingLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded identity photo.
         * @type {TextDetectionResult || null}
         */
        this.HeadPortrait = null;

        /**
         * The full name.
         * @type {TextDetectionResult || null}
         */
        this.Name = null;

        /**
         * The last name.
         * @type {TextDetectionResult || null}
         */
        this.LastName = null;

        /**
         * The first name.
         * @type {TextDetectionResult || null}
         */
        this.FirstName = null;

        /**
         * The middle name.
         * @type {TextDetectionResult || null}
         */
        this.MiddleName = null;

        /**
         * The nationality.
         * @type {TextDetectionResult || null}
         */
        this.Nationality = null;

        /**
         * The gender.
         * @type {TextDetectionResult || null}
         */
        this.Sex = null;

        /**
         * The address.
         * @type {TextDetectionResult || null}
         */
        this.Address = null;

        /**
         * The license No.
         * @type {TextDetectionResult || null}
         */
        this.LicenseNo = null;

        /**
         * The expiration date.
         * @type {TextDetectionResult || null}
         */
        this.ExpiresDate = null;

        /**
         * The agency code.
         * @type {TextDetectionResult || null}
         */
        this.AgencyCode = null;

        /**
         * The date of birth.
         * @type {TextDetectionResult || null}
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

        if (params.HeadPortrait) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.HeadPortrait)
            this.HeadPortrait = obj;
        }

        if (params.Name) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Name)
            this.Name = obj;
        }

        if (params.LastName) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.LastName)
            this.LastName = obj;
        }

        if (params.FirstName) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.FirstName)
            this.FirstName = obj;
        }

        if (params.MiddleName) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.MiddleName)
            this.MiddleName = obj;
        }

        if (params.Nationality) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Nationality)
            this.Nationality = obj;
        }

        if (params.Sex) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Sex)
            this.Sex = obj;
        }

        if (params.Address) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Address)
            this.Address = obj;
        }

        if (params.LicenseNo) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.LicenseNo)
            this.LicenseNo = obj;
        }

        if (params.ExpiresDate) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.ExpiresDate)
            this.ExpiresDate = obj;
        }

        if (params.AgencyCode) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.AgencyCode)
            this.AgencyCode = obj;
        }

        if (params.Birthday) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Birthday)
            this.Birthday = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * RecognizePhilippinesSssIDOCR request structure.
 * @class
 */
class RecognizePhilippinesSssIDOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to return the identity photo.
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

        /**
         * The Base64-encoded value of an image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Either the `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
For a non-Tencent Cloud URL, the download speed and stability may be affected.
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
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * Key information
 * @class
 */
class Key extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the recognized field.
         * @type {string || null}
         */
        this.AutoName = null;

        /**
         * The name of a defined field (the key passed in).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConfigName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoName = 'AutoName' in params ? params.AutoName : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;

    }
}

/**
 * SmartStructuralOCRV2 response structure.
 * @class
 */
class SmartStructuralOCRV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * The rotation angle (degrees) of the text on the image. 0: The text is horizontal. Positive value: The text is rotated clockwise. Negative value: The text is rotated counterclockwise.
         * @type {number || null}
         */
        this.Angle = null;

        /**
         * The structural information (key-value).
         * @type {Array.<GroupInfo> || null}
         */
        this.StructuralList = null;

        /**
         * The recognized text information.
         * @type {Array.<WordItem> || null}
         */
        this.WordList = null;

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
        this.Angle = 'Angle' in params ? params.Angle : null;

        if (params.StructuralList) {
            this.StructuralList = new Array();
            for (let z in params.StructuralList) {
                let obj = new GroupInfo();
                obj.deserialize(params.StructuralList[z]);
                this.StructuralList.push(obj);
            }
        }

        if (params.WordList) {
            this.WordList = new Array();
            for (let z in params.WordList) {
                let obj = new WordItem();
                obj.deserialize(params.WordList[z]);
                this.WordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Multiple alarm codes. If the ID card is spoofed, photocopied, or photoshopped, the corresponding alarm code will be returned.
-9102: Alarm for photocopied document
-9103: Alarm for spoofed document
-9104: Alarm for photoshopped document
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
 * The sequence number of an element group in the image
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The elements in each line.
         * @type {Array.<LineInfo> || null}
         */
        this.Groups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new LineInfo();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }

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
         * The Base64-encoded value of an image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of an image. (This field is not available outside the Chinese mainland.)
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
For a non-Tencent Cloud URL, the download speed and stability may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to return an image. Default value: `false`.
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
 * Value information
 * @class
 */
class Value extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value of the recognized field.
         * @type {string || null}
         */
        this.AutoContent = null;

        /**
         * The coordinates of the four vertices.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Polygon || null}
         */
        this.Coord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoContent = 'AutoContent' in params ? params.AutoContent : null;

        if (params.Coord) {
            let obj = new Polygon();
            obj.deserialize(params.Coord)
            this.Coord = obj;
        }

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
 * RecognizeKoreanIDCardOCR request structure.
 * @class
 */
class RecognizeKoreanIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded value of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Either `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` is used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to return the identity photo.
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

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
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;

    }
}

/**
 * RecognizeKoreanIDCardOCR response structure.
 * @class
 */
class RecognizeKoreanIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID card number.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * The address.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * The name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The issue date.
         * @type {string || null}
         */
        this.DateOfIssue = null;

        /**
         * The Base64-encoded identity photo.
         * @type {string || null}
         */
        this.Photo = null;

        /**
         * The gender.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * The birth date in the format of dd/mm/yyyy.
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
        this.Address = 'Address' in params ? params.Address : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DateOfIssue = 'DateOfIssue' in params ? params.DateOfIssue : null;
        this.Photo = 'Photo' in params ? params.Photo : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizePhilippinesSssIDOCR response structure.
 * @class
 */
class RecognizePhilippinesSssIDOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded identity photo.
         * @type {TextDetectionResult || null}
         */
        this.HeadPortrait = null;

        /**
         * The common reference number (CRN).
         * @type {TextDetectionResult || null}
         */
        this.LicenseNumber = null;

        /**
         * The full name.
         * @type {TextDetectionResult || null}
         */
        this.FullName = null;

        /**
         * The date of birth.
         * @type {TextDetectionResult || null}
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

        if (params.HeadPortrait) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.HeadPortrait)
            this.HeadPortrait = obj;
        }

        if (params.LicenseNumber) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.LicenseNumber)
            this.LicenseNumber = obj;
        }

        if (params.FullName) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.FullName)
            this.FullName = obj;
        }

        if (params.Birthday) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Birthday)
            this.Birthday = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeKoreanDrivingLicenseOCR request structure.
 * @class
 */
class RecognizeKoreanDrivingLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded value of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Either `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` is used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to return the identity photo.
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

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
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;

    }
}

/**
 * RecognizeIndonesiaIDCardOCR request structure.
 * @class
 */
class RecognizeIndonesiaIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded value of an image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Either the `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
For a non-Tencent Cloud URL, the download speed and stability may be affected.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to return the identity photo.
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

        /**
         * The scene, which defaults to `V1`.
Valid values:
V1
V2
         * @type {string || null}
         */
        this.Scene = null;

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
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;
        this.Scene = 'Scene' in params ? params.Scene : null;

    }
}

/**
 * RecognizeIndonesiaIDCardOCR response structure.
 * @class
 */
class RecognizeIndonesiaIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Single Identity Number.
         * @type {string || null}
         */
        this.NIK = null;

        /**
         * The full name.
         * @type {string || null}
         */
        this.Nama = null;

        /**
         * The place and date of birth.
         * @type {string || null}
         */
        this.TempatTglLahir = null;

        /**
         * The gender.
         * @type {string || null}
         */
        this.JenisKelamin = null;

        /**
         * The blood type.
         * @type {string || null}
         */
        this.GolDarah = null;

        /**
         * The address.
         * @type {string || null}
         */
        this.Alamat = null;

        /**
         * The street.
         * @type {string || null}
         */
        this.RTRW = null;

        /**
         * The village.
         * @type {string || null}
         */
        this.KelDesa = null;

        /**
         * The region.
         * @type {string || null}
         */
        this.Kecamatan = null;

        /**
         * The religion.
         * @type {string || null}
         */
        this.Agama = null;

        /**
         * The marital status.
         * @type {string || null}
         */
        this.StatusPerkawinan = null;

        /**
         * The occupation.
         * @type {string || null}
         */
        this.Perkerjaan = null;

        /**
         * The nationality.
         * @type {string || null}
         */
        this.KewargaNegaraan = null;

        /**
         * The expiry date.
         * @type {string || null}
         */
        this.BerlakuHingga = null;

        /**
         * The issue date.
         * @type {string || null}
         */
        this.IssuedDate = null;

        /**
         * The photo.
         * @type {string || null}
         */
        this.Photo = null;

        /**
         * The province, which is supported when the value of `Scene` is `V2`.
         * @type {string || null}
         */
        this.Provinsi = null;

        /**
         * The city, which is supported when the value of `Scene` is `V2`.
         * @type {string || null}
         */
        this.Kota = null;

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
        this.Photo = 'Photo' in params ? params.Photo : null;
        this.Provinsi = 'Provinsi' in params ? params.Provinsi : null;
        this.Kota = 'Kota' in params ? params.Kota : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeKoreanDrivingLicenseOCR response structure.
 * @class
 */
class RecognizeKoreanDrivingLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID card number.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * The license number.
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * The resident registration number.
         * @type {string || null}
         */
        this.Number = null;

        /**
         * The license class type.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The address.
         * @type {string || null}
         */
        this.Address = null;

        /**
         * The name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The renewal period.
         * @type {string || null}
         */
        this.AptitudeTesDate = null;

        /**
         * The issue date.
         * @type {string || null}
         */
        this.DateOfIssue = null;

        /**
         * The Base64-encoded identity photo.
         * @type {string || null}
         */
        this.Photo = null;

        /**
         * The gender.
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * The birth date in the format of dd/mm/yyyy.
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
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AptitudeTesDate = 'AptitudeTesDate' in params ? params.AptitudeTesDate : null;
        this.DateOfIssue = 'DateOfIssue' in params ? params.DateOfIssue : null;
        this.Photo = 'Photo' in params ? params.Photo : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
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
         * ID number
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Full name
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
         * Alarm codes
-9103 Alarm for photographed certificate
-9102 Alarm for photocopied certificate
-9106 Alarm for covered certificate
-9107 Alarm for blurry image
         * @type {Array.<number> || null}
         */
        this.Warn = null;

        /**
         * Identity photo
         * @type {string || null}
         */
        this.Image = null;

        /**
         * This is an extended field, 
with the confidence of a field recognition result returned in the following format.
{
  Field name:{
    Confidence:0.9999
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
         * Date of birth. This field is available only for work permits (i-Kad) and ID cards (MyKad).
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
 * RecognizePhilippinesTinIDOCR request structure.
 * @class
 */
class RecognizePhilippinesTinIDOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to return the identity photo.
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

        /**
         * The Base64-encoded value of an image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Either the `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
For a non-Tencent Cloud URL, the download speed and stability may be affected.
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
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * RecognizePhilippinesVoteIDOCR request structure.
 * @class
 */
class RecognizePhilippinesVoteIDOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to return the identity photo.
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

        /**
         * The Base64-encoded value of an image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Either the `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image.
Supported image formats: PNG, JPG, and JPEG. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
For a non-Tencent Cloud URL, the download speed and stability may be affected.
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
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

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
 * Line number
 * @class
 */
class LineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The elements in a line
         * @type {Array.<ItemInfo> || null}
         */
        this.Lines = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Lines) {
            this.Lines = new Array();
            for (let z in params.Lines) {
                let obj = new ItemInfo();
                obj.deserialize(params.Lines[z]);
                this.Lines.push(obj);
            }
        }

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
 * RecognizePhilippinesTinIDOCR response structure.
 * @class
 */
class RecognizePhilippinesTinIDOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded identity photo.
         * @type {TextDetectionResult || null}
         */
        this.HeadPortrait = null;

        /**
         * The tax identification number (TIN).
         * @type {TextDetectionResult || null}
         */
        this.LicenseNumber = null;

        /**
         * The name.
         * @type {TextDetectionResult || null}
         */
        this.FullName = null;

        /**
         * The address.
         * @type {TextDetectionResult || null}
         */
        this.Address = null;

        /**
         * The birth date.
         * @type {TextDetectionResult || null}
         */
        this.Birthday = null;

        /**
         * The issue date.
         * @type {TextDetectionResult || null}
         */
        this.IssueDate = null;

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

        if (params.HeadPortrait) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.HeadPortrait)
            this.HeadPortrait = obj;
        }

        if (params.LicenseNumber) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.LicenseNumber)
            this.LicenseNumber = obj;
        }

        if (params.FullName) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.FullName)
            this.FullName = obj;
        }

        if (params.Address) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Address)
            this.Address = obj;
        }

        if (params.Birthday) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Birthday)
            this.Birthday = obj;
        }

        if (params.IssueDate) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.IssueDate)
            this.IssueDate = obj;
        }
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
    DetectedWords: DetectedWords,
    Polygon: Polygon,
    TextDetectionResult: TextDetectionResult,
    HKIDCardOCRRequest: HKIDCardOCRRequest,
    RecognizePhilippinesVoteIDOCRResponse: RecognizePhilippinesVoteIDOCRResponse,
    GeneralAccurateOCRResponse: GeneralAccurateOCRResponse,
    MLIDPassportOCRResponse: MLIDPassportOCRResponse,
    TextTable: TextTable,
    RecognizePhilippinesDrivingLicenseOCRRequest: RecognizePhilippinesDrivingLicenseOCRRequest,
    WordItem: WordItem,
    MLIDPassportOCRRequest: MLIDPassportOCRRequest,
    GeneralAccurateOCRRequest: GeneralAccurateOCRRequest,
    ItemInfo: ItemInfo,
    SmartStructuralOCRV2Request: SmartStructuralOCRV2Request,
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    RecognizePhilippinesDrivingLicenseOCRResponse: RecognizePhilippinesDrivingLicenseOCRResponse,
    BankCardOCRRequest: BankCardOCRRequest,
    RecognizePhilippinesSssIDOCRRequest: RecognizePhilippinesSssIDOCRRequest,
    Key: Key,
    SmartStructuralOCRV2Response: SmartStructuralOCRV2Response,
    HKIDCardOCRResponse: HKIDCardOCRResponse,
    GroupInfo: GroupInfo,
    MLIDCardOCRRequest: MLIDCardOCRRequest,
    TableOCRResponse: TableOCRResponse,
    DetectedWordCoordPoint: DetectedWordCoordPoint,
    Value: Value,
    Coord: Coord,
    RecognizeKoreanIDCardOCRRequest: RecognizeKoreanIDCardOCRRequest,
    RecognizeKoreanIDCardOCRResponse: RecognizeKoreanIDCardOCRResponse,
    RecognizePhilippinesSssIDOCRResponse: RecognizePhilippinesSssIDOCRResponse,
    RecognizeKoreanDrivingLicenseOCRRequest: RecognizeKoreanDrivingLicenseOCRRequest,
    RecognizeIndonesiaIDCardOCRRequest: RecognizeIndonesiaIDCardOCRRequest,
    RecognizeIndonesiaIDCardOCRResponse: RecognizeIndonesiaIDCardOCRResponse,
    RecognizeKoreanDrivingLicenseOCRResponse: RecognizeKoreanDrivingLicenseOCRResponse,
    MLIDCardOCRResponse: MLIDCardOCRResponse,
    RecognizePhilippinesTinIDOCRRequest: RecognizePhilippinesTinIDOCRRequest,
    RecognizePhilippinesVoteIDOCRRequest: RecognizePhilippinesVoteIDOCRRequest,
    TableOCRRequest: TableOCRRequest,
    LineInfo: LineInfo,
    BankCardOCRResponse: BankCardOCRResponse,
    ItemCoord: ItemCoord,
    TextDetection: TextDetection,
    RecognizePhilippinesTinIDOCRResponse: RecognizePhilippinesTinIDOCRResponse,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,

}
