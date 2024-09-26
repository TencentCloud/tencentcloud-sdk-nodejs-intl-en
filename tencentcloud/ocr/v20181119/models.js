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
 * Recognition information of a single invoice/ticket among multiple types of invoices/tickets
 * @class
 */
class InvoiceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The recognition result.
`OK`: Recognition is successful.
`FailedOperation.UnsupportedInvoice`: Recognition is not supported.
`FailedOperation.UnKnowError`: Recognition failed.
For the information about other error codes, see the OCR API description for each invoice/ticket.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * The type of invoice/ticket to which the recognized image belongs.
-1: Unknown
0: Taxi receipt
1: Quota invoice
2: Train ticket
3: VAT invoice
5: Itinerary/Receipt of e-ticket for air transportation
8: General machine-printed invoice
9: Bus ticket
10: Ship ticket
11: VAT invoice (roll)
12: Car sales invoice
13: Toll receipt
15: Non-tax revenue invoice
16: Fully digitalized electronic invoice
         * @type {number || null}
         */
        this.Type = null;

        /**
         * The coordinates of the four vertices of the rotated image.
         * @type {Polygon || null}
         */
        this.Polygon = null;

        /**
         * The rotation angle of the recognized image in the image with multiple types of invoices/tickets.
         * @type {number || null}
         */
        this.Angle = null;

        /**
         * The recognized content.
         * @type {SingleInvoiceItem || null}
         */
        this.SingleInvoiceInfos = null;

        /**
         * The number of the page on which the recognized invoice is in the image or PDF file, starting from 1 by default.
         * @type {number || null}
         */
        this.Page = null;

        /**
         * The detailed invoice type. See the description of `SubType`.
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * The invoice description. See the description of `TypeDescription`.
         * @type {string || null}
         */
        this.TypeDescription = null;

        /**
         * The image file after cropping, encoded in Base64. This is returned if `EnableCutImage` is set to `true`.
         * @type {string || null}
         */
        this.CutImage = null;

        /**
         * The description of the detailed invoice type. See the description of `SubType`.
         * @type {string || null}
         */
        this.SubTypeDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Polygon) {
            let obj = new Polygon();
            obj.deserialize(params.Polygon)
            this.Polygon = obj;
        }
        this.Angle = 'Angle' in params ? params.Angle : null;

        if (params.SingleInvoiceInfos) {
            let obj = new SingleInvoiceItem();
            obj.deserialize(params.SingleInvoiceInfos)
            this.SingleInvoiceInfos = obj;
        }
        this.Page = 'Page' in params ? params.Page : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.TypeDescription = 'TypeDescription' in params ? params.TypeDescription : null;
        this.CutImage = 'CutImage' in params ? params.CutImage : null;
        this.SubTypeDescription = 'SubTypeDescription' in params ? params.SubTypeDescription : null;

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
         * Whether to return identity photo.
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

        /**
         * Whether to check for authenticity.
         * @type {boolean || null}
         */
        this.DetectFake = null;

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
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;
        this.DetectFake = 'DetectFake' in params ? params.DetectFake : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

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
         * Whether to return an image. 
Default value: false.
         * @type {boolean || null}
         */
        this.RetImage = null;

        /**
         * URL address of image. (This field is not supported outside Chinese mainland)
Supported image formats: PNG, JPG, JPEG. GIF is currently not supported.
Supported image size: the downloaded image cannot exceed 7 MB after being Base64-encoded. The download time of the image cannot exceed 3 seconds.
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
        this.RetImage = 'RetImage' in params ? params.RetImage : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

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
 * Table of other invoices
 * @class
 */
class OtherInvoiceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * List
         * @type {Array.<OtherInvoiceItem> || null}
         */
        this.OtherInvoiceItemList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OtherInvoiceItemList) {
            this.OtherInvoiceItemList = new Array();
            for (let z in params.OtherInvoiceItemList) {
                let obj = new OtherInvoiceItem();
                obj.deserialize(params.OtherInvoiceItemList[z]);
                this.OtherInvoiceItemList.push(obj);
            }
        }

    }
}

/**
 * RecognizeMacaoIDCardOCR response structure.
 * @class
 */
class RecognizeMacaoIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Chinese last name
         * @type {string || null}
         */
        this.CnLastName = null;

        /**
         * English last name
         * @type {string || null}
         */
        this.EnLastName = null;

        /**
         * Last name code
         * @type {string || null}
         */
        this.LastNameCode = null;

        /**
         * Chinese first name
         * @type {string || null}
         */
        this.CnFirstName = null;

        /**
         * English first name
         * @type {string || null}
         */
        this.EnFirstName = null;

        /**
         * First name code
         * @type {string || null}
         */
        this.FirstNameCode = null;

        /**
         * ID Number
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Birthday(DD-MM-YYYY)
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * gender
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * First issue Date (DD-MM-YYYY)
         * @type {string || null}
         */
        this.FirstIssueDate = null;

        /**
         * Issue date (DD-MM-YYYY)
         * @type {string || null}
         */
        this.CurrentIssueDate = null;

        /**
         * Validity period (DD-MM-YYYY)
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * ID symbol
         * @type {string || null}
         */
        this.Symbol = null;

        /**
         * Height (unit: meters)
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Processed image (Base64)
         * @type {string || null}
         */
        this.RetImage = null;

        /**
         * Image rotation angle, the horizontal direction of the text is 0, clockwise is positive, counterclockwise is negative
         * @type {string || null}
         */
        this.Angle = null;

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
        this.CnLastName = 'CnLastName' in params ? params.CnLastName : null;
        this.EnLastName = 'EnLastName' in params ? params.EnLastName : null;
        this.LastNameCode = 'LastNameCode' in params ? params.LastNameCode : null;
        this.CnFirstName = 'CnFirstName' in params ? params.CnFirstName : null;
        this.EnFirstName = 'EnFirstName' in params ? params.EnFirstName : null;
        this.FirstNameCode = 'FirstNameCode' in params ? params.FirstNameCode : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.FirstIssueDate = 'FirstIssueDate' in params ? params.FirstIssueDate : null;
        this.CurrentIssueDate = 'CurrentIssueDate' in params ? params.CurrentIssueDate : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.Symbol = 'Symbol' in params ? params.Symbol : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.RetImage = 'RetImage' in params ? params.RetImage : null;
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PermitOCR response structure.
 * @class
 */
class PermitOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Name in English
         * @type {string || null}
         */
        this.EnglishName = null;

        /**
         * ID number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Gender
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Validity period
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * Issuing authority
         * @type {string || null}
         */
        this.IssueAuthority = null;

        /**
         * Place of issue
         * @type {string || null}
         */
        this.IssueAddress = null;

        /**
         * Date of birth
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
        this.Name = 'Name' in params ? params.Name : null;
        this.EnglishName = 'EnglishName' in params ? params.EnglishName : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.IssueAuthority = 'IssueAuthority' in params ? params.IssueAuthority : null;
        this.IssueAddress = 'IssueAddress' in params ? params.IssueAddress : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Coordinates
 * @class
 */
class Rect extends  AbstractModel {
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
 * Vehicle license plate information
 * @class
 */
class LicensePlateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The recognized license plate number.
         * @type {string || null}
         */
        this.Number = null;

        /**
         * The confidence score (0–100).
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The bounding box coordinates of the text line in the original image.
         * @type {Rect || null}
         */
        this.Rect = null;

        /**
         * The recognized license plate color, which currently includes "white", "black", "blue", "green", "yellow", "yellow-green", and "temporary plate".
         * @type {string || null}
         */
        this.Color = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Number = 'Number' in params ? params.Number : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }
        this.Color = 'Color' in params ? params.Color : null;

    }
}

/**
 * Items of a general VAT invoice (roll)
 * @class
 */
class VatRollItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Item name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Quantity
         * @type {string || null}
         */
        this.Quantity = null;

        /**
         * Unit price
         * @type {string || null}
         */
        this.Price = null;

        /**
         * Amount
         * @type {string || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * HmtResidentPermitOCR response structure.
 * @class
 */
class HmtResidentPermitOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Gender
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Date of birth
         * @type {string || null}
         */
        this.Birth = null;

        /**
         * Address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * ID card number
         * @type {string || null}
         */
        this.IdCardNo = null;

        /**
         * 0: Front side.
1: Back side.
         * @type {number || null}
         */
        this.CardType = null;

        /**
         * Validity period
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * Issuing authority
         * @type {string || null}
         */
        this.Authority = null;

        /**
         * Number of issues
         * @type {string || null}
         */
        this.VisaNum = null;

        /**
         * Permit number
         * @type {string || null}
         */
        this.PassNo = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdCardNo = 'IdCardNo' in params ? params.IdCardNo : null;
        this.CardType = 'CardType' in params ? params.CardType : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.Authority = 'Authority' in params ? params.Authority : null;
        this.VisaNum = 'VisaNum' in params ? params.VisaNum : null;
        this.PassNo = 'PassNo' in params ? params.PassNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Flight items
 * @class
 */
class FlightItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Departure terminal
         * @type {string || null}
         */
        this.TerminalGetOn = null;

        /**
         * Arrival terminal
         * @type {string || null}
         */
        this.TerminalGetOff = null;

        /**
         * Carrier
         * @type {string || null}
         */
        this.Carrier = null;

        /**
         * Flight number
         * @type {string || null}
         */
        this.FlightNumber = null;

        /**
         * Class
         * @type {string || null}
         */
        this.Seat = null;

        /**
         * Departure date
         * @type {string || null}
         */
        this.DateGetOn = null;

        /**
         * Departure time
         * @type {string || null}
         */
        this.TimeGetOn = null;

        /**
         * Departure city
         * @type {string || null}
         */
        this.StationGetOn = null;

        /**
         * Arrival city
         * @type {string || null}
         */
        this.StationGetOff = null;

        /**
         * Baggage allowance
         * @type {string || null}
         */
        this.Allow = null;

        /**
         * Fare category
         * @type {string || null}
         */
        this.FareBasis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TerminalGetOn = 'TerminalGetOn' in params ? params.TerminalGetOn : null;
        this.TerminalGetOff = 'TerminalGetOff' in params ? params.TerminalGetOff : null;
        this.Carrier = 'Carrier' in params ? params.Carrier : null;
        this.FlightNumber = 'FlightNumber' in params ? params.FlightNumber : null;
        this.Seat = 'Seat' in params ? params.Seat : null;
        this.DateGetOn = 'DateGetOn' in params ? params.DateGetOn : null;
        this.TimeGetOn = 'TimeGetOn' in params ? params.TimeGetOn : null;
        this.StationGetOn = 'StationGetOn' in params ? params.StationGetOn : null;
        this.StationGetOff = 'StationGetOff' in params ? params.StationGetOff : null;
        this.Allow = 'Allow' in params ? params.Allow : null;
        this.FareBasis = 'FareBasis' in params ? params.FareBasis : null;

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
 * Seal information
 * @class
 */
class SealInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Seal body information
         * @type {string || null}
         */
        this.SealBody = null;

        /**
         * Seal coordinates
         * @type {Rect || null}
         */
        this.Location = null;

        /**
         * Other text content
         * @type {Array.<string> || null}
         */
        this.OtherTexts = null;

        /**
         * Seal shape. Valid values:
0: Round
1: Oval
2: Rectangle
3: Diamond
4: Triangle
         * @type {string || null}
         */
        this.SealShape = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SealBody = 'SealBody' in params ? params.SealBody : null;

        if (params.Location) {
            let obj = new Rect();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.OtherTexts = 'OtherTexts' in params ? params.OtherTexts : null;
        this.SealShape = 'SealShape' in params ? params.SealShape : null;

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
 * Items of other invoices
 * @class
 */
class OtherInvoiceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Field name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Field value
         * @type {string || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * Information about VAT invoice items
 * @class
 */
class VatInvoiceItemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Item name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Specification
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * Unit
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Quantity
         * @type {string || null}
         */
        this.Quantity = null;

        /**
         * Unit price
         * @type {string || null}
         */
        this.Price = null;

        /**
         * Amount
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Tax rate
         * @type {string || null}
         */
        this.TaxRate = null;

        /**
         * Tax amount
         * @type {string || null}
         */
        this.Tax = null;

        /**
         * Start date
         * @type {string || null}
         */
        this.DateStart = null;

        /**
         * End date
         * @type {string || null}
         */
        this.DateEnd = null;

        /**
         * License plate number
         * @type {string || null}
         */
        this.LicensePlate = null;

        /**
         * Vehicle type
         * @type {string || null}
         */
        this.VehicleType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TaxRate = 'TaxRate' in params ? params.TaxRate : null;
        this.Tax = 'Tax' in params ? params.Tax : null;
        this.DateStart = 'DateStart' in params ? params.DateStart : null;
        this.DateEnd = 'DateEnd' in params ? params.DateEnd : null;
        this.LicensePlate = 'LicensePlate' in params ? params.LicensePlate : null;
        this.VehicleType = 'VehicleType' in params ? params.VehicleType : null;

    }
}

/**
 * MainlandPermitOCR request structure.
 * @class
 */
class MainlandPermitOCRRequest extends  AbstractModel {
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
         * Whether to return the ID photo. By default, the ID photo is not returned.
         * @type {boolean || null}
         */
        this.RetProfile = null;

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
        this.RetProfile = 'RetProfile' in params ? params.RetProfile : null;

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
 * Cell data
 * @class
 */
class TableCellInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Column index of the upper-left corner of the cell
         * @type {number || null}
         */
        this.ColTl = null;

        /**
         * Row index of the upper-left corner of the cell
         * @type {number || null}
         */
        this.RowTl = null;

        /**
         * Column index of the lower-right corner of the cell
         * @type {number || null}
         */
        this.ColBr = null;

        /**
         * Row index of the lower-right corner of the cell
         * @type {number || null}
         */
        this.RowBr = null;

        /**
         * Recognized string text within the cell. If there are multiple lines, they are separated by "\n".
         * @type {string || null}
         */
        this.Text = null;

        /**
         * Cell type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Cell confidence
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Four-point coordinates of the cell in the image
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

    }
}

/**
 * Ship ticket
 * @class
 */
class ShippingInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Date
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Time
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Departure station
         * @type {string || null}
         */
        this.StationGetOn = null;

        /**
         * Destination
         * @type {string || null}
         */
        this.StationGetOff = null;

        /**
         * Fare
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Province
         * @type {string || null}
         */
        this.Province = null;

        /**
         * City
         * @type {string || null}
         */
        this.City = null;

        /**
         * Currency
         * @type {string || null}
         */
        this.CurrencyCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.StationGetOn = 'StationGetOn' in params ? params.StationGetOn : null;
        this.StationGetOff = 'StationGetOff' in params ? params.StationGetOff : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.CurrencyCode = 'CurrencyCode' in params ? params.CurrencyCode : null;

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
 * Items of a general machine-printed invoice
 * @class
 */
class GeneralMachineItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Item name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Specification
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * Unit
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Quantity
         * @type {string || null}
         */
        this.Quantity = null;

        /**
         * Unit price
         * @type {string || null}
         */
        this.Price = null;

        /**
         * Amount
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Tax rate
         * @type {string || null}
         */
        this.TaxRate = null;

        /**
         * Tax amount
         * @type {string || null}
         */
        this.Tax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TaxRate = 'TaxRate' in params ? params.TaxRate : null;
        this.Tax = 'Tax' in params ? params.Tax : null;

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
 * HmtResidentPermitOCR request structure.
 * @class
 */
class HmtResidentPermitOCRRequest extends  AbstractModel {
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
         * `FRONT`: The side with the profile photo.
`BACK`: The side with the national emblem.
If this parameter is not specified, the system will automatically determine the ID card side.
         * @type {string || null}
         */
        this.CardSide = null;

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
        this.CardSide = 'CardSide' in params ? params.CardSide : null;

    }
}

/**
 * Bus ticket
 * @class
 */
class BusInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Departure time
         * @type {string || null}
         */
        this.TimeGetOn = null;

        /**
         * Departure date
         * @type {string || null}
         */
        this.DateGetOn = null;

        /**
         * Departure station
         * @type {string || null}
         */
        this.StationGetOn = null;

        /**
         * Destination
         * @type {string || null}
         */
        this.StationGetOff = null;

        /**
         * Fare
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Consumption type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * ID card number
         * @type {string || null}
         */
        this.UserID = null;

        /**
         * Province
         * @type {string || null}
         */
        this.Province = null;

        /**
         * City
         * @type {string || null}
         */
        this.City = null;

        /**
         * Departure place
         * @type {string || null}
         */
        this.PlaceGetOn = null;

        /**
         * Check-in gate
         * @type {string || null}
         */
        this.GateNumber = null;

        /**
         * Fare category
         * @type {string || null}
         */
        this.TicketType = null;

        /**
         * Vehicle type
         * @type {string || null}
         */
        this.VehicleType = null;

        /**
         * Seat No.
         * @type {string || null}
         */
        this.SeatNumber = null;

        /**
         * Fleet number
         * @type {string || null}
         */
        this.TrainNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.TimeGetOn = 'TimeGetOn' in params ? params.TimeGetOn : null;
        this.DateGetOn = 'DateGetOn' in params ? params.DateGetOn : null;
        this.StationGetOn = 'StationGetOn' in params ? params.StationGetOn : null;
        this.StationGetOff = 'StationGetOff' in params ? params.StationGetOff : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.UserID = 'UserID' in params ? params.UserID : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.PlaceGetOn = 'PlaceGetOn' in params ? params.PlaceGetOn : null;
        this.GateNumber = 'GateNumber' in params ? params.GateNumber : null;
        this.TicketType = 'TicketType' in params ? params.TicketType : null;
        this.VehicleType = 'VehicleType' in params ? params.VehicleType : null;
        this.SeatNumber = 'SeatNumber' in params ? params.SeatNumber : null;
        this.TrainNumber = 'TrainNumber' in params ? params.TrainNumber : null;

    }
}

/**
 * RecognizeGeneralInvoice request structure.
 * @class
 */
class RecognizeGeneralInvoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded value of the image.
Supported image formats: PNG, JPG, JPEG, and PDF. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Supported image pixels: 20 to 10,000
Either `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` is used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image.
Supported image formats: PNG, JPG, JPEG, and PDF. GIF is currently not supported.
Supported image size: The downloaded image after Base64 encoding can be up to 7 MB. The download time of the image cannot exceed 3s.
Supported image pixels: 20 to 10,000
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * The list of the types of invoices to be recognized. If this parameter is left empty, all types of invoices are recognized.
0: Taxi receipt
1: Quota invoice
2: Train ticket
3: VAT invoice
5: Itinerary/Receipt of e-ticket for air transport
8: General machine-printed invoice
9: Bus ticket
10: Ship ticket
11: VAT invoice (roll)
12: Car sales inovice
13: Toll receipt
15: Non-tax revenue invoice
16: Fully digitalized electronic invoice
-1: Other

By default, this parameter is left empty, which means to recognize all types of invoices.
When a single type is passed in, the image is recognized based on this type.
You can only specify a singe type or all types, but not some types.
         * @type {Array.<number> || null}
         */
        this.Types = null;

        /**
         * Whether to enable recognition of other invoices. If you enable this feature, other invoices can be recognized. Default value: `true`.	
         * @type {boolean || null}
         */
        this.EnableOther = null;

        /**
         * Whether to enable PDF recognition. If you enable this feature, both images and PDF files can be recognized. Default value: `true`.
         * @type {boolean || null}
         */
        this.EnablePdf = null;

        /**
         * The number of the PDF page that needs to be recognized. Only one single PDF page can be recognized. This parameter is valid if the uploaded file is a PDF and the value of `EnablePdf` is `true`. Default value: 1.
         * @type {number || null}
         */
        this.PdfPageNumber = null;

        /**
         * Whether to enable multi-page PDF recognition. If you enable this feature, multiple pages of a PDF file can be recognized, and the recognition results of a maximum of the first 30 pages can be returned. After you enable this feature, input parameters `EnablePdf` and `PdfPageNumber` are invalid. Default value: `false`.
         * @type {boolean || null}
         */
        this.EnableMultiplePage = null;

        /**
         * Whether to return the Base64-encoded value of the cropped image. Default value: `false`.
         * @type {boolean || null}
         */
        this.EnableCutImage = null;

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
        this.Types = 'Types' in params ? params.Types : null;
        this.EnableOther = 'EnableOther' in params ? params.EnableOther : null;
        this.EnablePdf = 'EnablePdf' in params ? params.EnablePdf : null;
        this.PdfPageNumber = 'PdfPageNumber' in params ? params.PdfPageNumber : null;
        this.EnableMultiplePage = 'EnableMultiplePage' in params ? params.EnableMultiplePage : null;
        this.EnableCutImage = 'EnableCutImage' in params ? params.EnableCutImage : null;

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
 * PermitOCR request structure.
 * @class
 */
class PermitOCRRequest extends  AbstractModel {
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
 * Other invoices
 * @class
 */
class OtherInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Amount
         * @type {string || null}
         */
        this.Total = null;

        /**
         * List
         * @type {Array.<OtherInvoiceItem> || null}
         */
        this.OtherInvoiceListItems = null;

        /**
         * Table
         * @type {Array.<OtherInvoiceList> || null}
         */
        this.OtherInvoiceTableItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.OtherInvoiceListItems) {
            this.OtherInvoiceListItems = new Array();
            for (let z in params.OtherInvoiceListItems) {
                let obj = new OtherInvoiceItem();
                obj.deserialize(params.OtherInvoiceListItems[z]);
                this.OtherInvoiceListItems.push(obj);
            }
        }

        if (params.OtherInvoiceTableItems) {
            this.OtherInvoiceTableItems = new Array();
            for (let z in params.OtherInvoiceTableItems) {
                let obj = new OtherInvoiceList();
                obj.deserialize(params.OtherInvoiceTableItems[z]);
                this.OtherInvoiceTableItems.push(obj);
            }
        }

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
 * IDCardOCR response structure.
 * @class
 */
class IDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name (profile photo side)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Gender (profile photo side)
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Ethnicity (profile photo side)
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * Date of birth (profile photo side)
         * @type {string || null}
         */
        this.Birth = null;

        /**
         * Address (profile photo side)
         * @type {string || null}
         */
        this.Address = null;

        /**
         * ID number (profile photo side)
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * Issuing authority (national emblem side)
         * @type {string || null}
         */
        this.Authority = null;

        /**
         * Validity period (national emblem side)
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * Extended information, which will be returned only when requested. For the input parameters, please see example 3 and example 4.
`IdCard`: Base64-encoded content of the cropped ID card photo, which will be returned if `Config.CropIdCard` is set to `true`.
`Portrait`: Base64-encoded content of the ID photo on the card, which will be returned if `Config.CropPortrait` is set to `true`.

`Quality`: Image quality score, which will be returned if `Config.Quality` is set to `true`. Value range: 0–100. The lower the score, the blurrier the image. The recommended threshold is ≥ 50.
`BorderCodeValue`: Warning threshold score for incomplete ID card borders, which will be returned if `Config.BorderCheckWarn` is set to `true`. Value range: 0–100. The lower the score, the lower the probability of border occlusion. The recommended threshold value is ≤ 50.

`WarnInfos`: Warning information. Warning codes and descriptions are as follows:
-9100: The ID card validity period is invalid.
-9101: The ID card borders are incomplete.
-9102: The ID card image is photocopied.
-9103: The ID card image is spoofed. 
-9104: The ID card is a temporary one. 
-9105: The ID card frame is occluded.
-9106: The ID card image is photoshopped.
-9107: The ID card image has glares.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Authority = 'Authority' in params ? params.Authority : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
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
 * LicensePlateOCR response structure.
 * @class
 */
class LicensePlateOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The recognized license plate number.
         * @type {string || null}
         */
        this.Number = null;

        /**
         * The confidence score (0–100).
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The bounding box coordinates of the text line in the original image.
         * @type {Rect || null}
         */
        this.Rect = null;

        /**
         * The recognized license plate color, which currently includes "white", "black", "blue", "green", "yellow", "yellow-green", and "temporary plate".
         * @type {string || null}
         */
        this.Color = null;

        /**
         * The vehicle license plate information.
         * @type {Array.<LicensePlateInfo> || null}
         */
        this.LicensePlateInfos = null;

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
        this.Number = 'Number' in params ? params.Number : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }
        this.Color = 'Color' in params ? params.Color : null;

        if (params.LicensePlateInfos) {
            this.LicensePlateInfos = new Array();
            for (let z in params.LicensePlateInfos) {
                let obj = new LicensePlateInfo();
                obj.deserialize(params.LicensePlateInfos[z]);
                this.LicensePlateInfos.push(obj);
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
         * @type {Array.<number> || null}
         */
        this.WarningCode = null;

        /**
         * Card Warning Information

-9101 Alarm for covered certificate,
-9102 Alarm for photocopied certificate,
-9103 Alarm for photographed certificate,
-9104 Alarm for PS certificate,
-9107 Alarm for reflective certificate,
-9108 Alarm for blurry image,
-9109 This capability is not enabled.
         * @type {Array.<number> || null}
         */
        this.WarnCardInfos = null;

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
        this.WarnCardInfos = 'WarnCardInfos' in params ? params.WarnCardInfos : null;
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
 * Quota invoice
 * @class
 */
class QuotaInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Total amount (in words)
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Province
         * @type {string || null}
         */
        this.Province = null;

        /**
         * City
         * @type {string || null}
         */
        this.City = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Whether there is a company seal (0: No, 1: Yes)
         * @type {number || null}
         */
        this.CompanySealMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.CompanySealMark = 'CompanySealMark' in params ? params.CompanySealMark : null;

    }
}

/**
 * RecognizeThaiIDCardOCR response structure.
 * @class
 */
class RecognizeThaiIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID card number
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Name in Thai
         * @type {string || null}
         */
        this.ThaiName = null;

        /**
         * Name in English
         * @type {string || null}
         */
        this.EnFirstName = null;

        /**
         * Name in English
         * @type {string || null}
         */
        this.EnLastName = null;

        /**
         * Date of issue in Thai
         * @type {string || null}
         */
        this.IssueDate = null;

        /**
         * Expiration date in Thai
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * Date of issue in English
         * @type {string || null}
         */
        this.EnIssueDate = null;

        /**
         * Expiration date in English
         * @type {string || null}
         */
        this.EnExpirationDate = null;

        /**
         * Date of birth in Thai
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Date of birth in English
         * @type {string || null}
         */
        this.EnBirthday = null;

        /**
         * Religion
         * @type {string || null}
         */
        this.Religion = null;

        /**
         * Serial number
         * @type {string || null}
         */
        this.SerialNumber = null;

        /**
         * Address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * Identity photo
         * @type {string || null}
         */
        this.PortraitImage = null;

        /**
         * Card Warning Information

-9101 Alarm for covered certificate,
-9102 Alarm for photocopied certificate,
-9103 Alarm for photographed certificate,
-9107 Alarm for reflective certificate,
-9108 Alarm for blurry image,
-9109 This capability is not enabled.
         * @type {Array.<number> || null}
         */
        this.WarnCardInfos = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.ThaiName = 'ThaiName' in params ? params.ThaiName : null;
        this.EnFirstName = 'EnFirstName' in params ? params.EnFirstName : null;
        this.EnLastName = 'EnLastName' in params ? params.EnLastName : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.EnIssueDate = 'EnIssueDate' in params ? params.EnIssueDate : null;
        this.EnExpirationDate = 'EnExpirationDate' in params ? params.EnExpirationDate : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.EnBirthday = 'EnBirthday' in params ? params.EnBirthday : null;
        this.Religion = 'Religion' in params ? params.Religion : null;
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.PortraitImage = 'PortraitImage' in params ? params.PortraitImage : null;
        this.WarnCardInfos = 'WarnCardInfos' in params ? params.WarnCardInfos : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Content of a single invoice/ticket among multiple types of invoices/tickets
 * @class
 */
class SingleInvoiceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Special VAT invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VatInvoiceInfo || null}
         */
        this.VatSpecialInvoice = null;

        /**
         * General VAT invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VatInvoiceInfo || null}
         */
        this.VatCommonInvoice = null;

        /**
         * Electronic general VAT invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VatInvoiceInfo || null}
         */
        this.VatElectronicCommonInvoice = null;

        /**
         * Electronic special VAT invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VatInvoiceInfo || null}
         */
        this.VatElectronicSpecialInvoice = null;

        /**
         * Blockchain electronic invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VatInvoiceInfo || null}
         */
        this.VatElectronicInvoiceBlockchain = null;

        /**
         * Electronic general VAT invoice (toll)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VatInvoiceInfo || null}
         */
        this.VatElectronicInvoiceToll = null;

        /**
         * Electronic invoice (special)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VatElectronicInfo || null}
         */
        this.VatElectronicSpecialInvoiceFull = null;

        /**
         * Electronic invoice (general)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VatElectronicInfo || null}
         */
        this.VatElectronicInvoiceFull = null;

        /**
         * General machine-printed invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MachinePrintedInvoice || null}
         */
        this.MachinePrintedInvoice = null;

        /**
         * Bus ticket
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BusInvoice || null}
         */
        this.BusInvoice = null;

        /**
         * Ship ticket
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ShippingInvoice || null}
         */
        this.ShippingInvoice = null;

        /**
         * Toll receipt
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TollInvoice || null}
         */
        this.TollInvoice = null;

        /**
         * Other invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {OtherInvoice || null}
         */
        this.OtherInvoice = null;

        /**
         * Motor vehicle sales invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MotorVehicleSaleInvoice || null}
         */
        this.MotorVehicleSaleInvoice = null;

        /**
         * Used car invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {UsedCarPurchaseInvoice || null}
         */
        this.UsedCarPurchaseInvoice = null;

        /**
         * General VAT invoice (roll)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VatInvoiceRoll || null}
         */
        this.VatInvoiceRoll = null;

        /**
         * Taxi receipt
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaxiTicket || null}
         */
        this.TaxiTicket = null;

        /**
         * Quota invoice
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {QuotaInvoice || null}
         */
        this.QuotaInvoice = null;

        /**
         * Itinerary/Receipt of e-ticket for air transportation
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AirTransport || null}
         */
        this.AirTransport = null;

        /**
         * Non-tax revenue general receipt
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NonTaxIncomeBill || null}
         */
        this.NonTaxIncomeGeneralBill = null;

        /**
         * Non-tax revenue unified payment voucher
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NonTaxIncomeBill || null}
         */
        this.NonTaxIncomeElectronicBill = null;

        /**
         * Train ticket
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TrainTicket || null}
         */
        this.TrainTicket = null;

        /**
         * 
         * @type {MedicalInvoice || null}
         */
        this.MedicalOutpatientInvoice = null;

        /**
         * 
         * @type {MedicalInvoice || null}
         */
        this.MedicalHospitalizedInvoice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VatSpecialInvoice) {
            let obj = new VatInvoiceInfo();
            obj.deserialize(params.VatSpecialInvoice)
            this.VatSpecialInvoice = obj;
        }

        if (params.VatCommonInvoice) {
            let obj = new VatInvoiceInfo();
            obj.deserialize(params.VatCommonInvoice)
            this.VatCommonInvoice = obj;
        }

        if (params.VatElectronicCommonInvoice) {
            let obj = new VatInvoiceInfo();
            obj.deserialize(params.VatElectronicCommonInvoice)
            this.VatElectronicCommonInvoice = obj;
        }

        if (params.VatElectronicSpecialInvoice) {
            let obj = new VatInvoiceInfo();
            obj.deserialize(params.VatElectronicSpecialInvoice)
            this.VatElectronicSpecialInvoice = obj;
        }

        if (params.VatElectronicInvoiceBlockchain) {
            let obj = new VatInvoiceInfo();
            obj.deserialize(params.VatElectronicInvoiceBlockchain)
            this.VatElectronicInvoiceBlockchain = obj;
        }

        if (params.VatElectronicInvoiceToll) {
            let obj = new VatInvoiceInfo();
            obj.deserialize(params.VatElectronicInvoiceToll)
            this.VatElectronicInvoiceToll = obj;
        }

        if (params.VatElectronicSpecialInvoiceFull) {
            let obj = new VatElectronicInfo();
            obj.deserialize(params.VatElectronicSpecialInvoiceFull)
            this.VatElectronicSpecialInvoiceFull = obj;
        }

        if (params.VatElectronicInvoiceFull) {
            let obj = new VatElectronicInfo();
            obj.deserialize(params.VatElectronicInvoiceFull)
            this.VatElectronicInvoiceFull = obj;
        }

        if (params.MachinePrintedInvoice) {
            let obj = new MachinePrintedInvoice();
            obj.deserialize(params.MachinePrintedInvoice)
            this.MachinePrintedInvoice = obj;
        }

        if (params.BusInvoice) {
            let obj = new BusInvoice();
            obj.deserialize(params.BusInvoice)
            this.BusInvoice = obj;
        }

        if (params.ShippingInvoice) {
            let obj = new ShippingInvoice();
            obj.deserialize(params.ShippingInvoice)
            this.ShippingInvoice = obj;
        }

        if (params.TollInvoice) {
            let obj = new TollInvoice();
            obj.deserialize(params.TollInvoice)
            this.TollInvoice = obj;
        }

        if (params.OtherInvoice) {
            let obj = new OtherInvoice();
            obj.deserialize(params.OtherInvoice)
            this.OtherInvoice = obj;
        }

        if (params.MotorVehicleSaleInvoice) {
            let obj = new MotorVehicleSaleInvoice();
            obj.deserialize(params.MotorVehicleSaleInvoice)
            this.MotorVehicleSaleInvoice = obj;
        }

        if (params.UsedCarPurchaseInvoice) {
            let obj = new UsedCarPurchaseInvoice();
            obj.deserialize(params.UsedCarPurchaseInvoice)
            this.UsedCarPurchaseInvoice = obj;
        }

        if (params.VatInvoiceRoll) {
            let obj = new VatInvoiceRoll();
            obj.deserialize(params.VatInvoiceRoll)
            this.VatInvoiceRoll = obj;
        }

        if (params.TaxiTicket) {
            let obj = new TaxiTicket();
            obj.deserialize(params.TaxiTicket)
            this.TaxiTicket = obj;
        }

        if (params.QuotaInvoice) {
            let obj = new QuotaInvoice();
            obj.deserialize(params.QuotaInvoice)
            this.QuotaInvoice = obj;
        }

        if (params.AirTransport) {
            let obj = new AirTransport();
            obj.deserialize(params.AirTransport)
            this.AirTransport = obj;
        }

        if (params.NonTaxIncomeGeneralBill) {
            let obj = new NonTaxIncomeBill();
            obj.deserialize(params.NonTaxIncomeGeneralBill)
            this.NonTaxIncomeGeneralBill = obj;
        }

        if (params.NonTaxIncomeElectronicBill) {
            let obj = new NonTaxIncomeBill();
            obj.deserialize(params.NonTaxIncomeElectronicBill)
            this.NonTaxIncomeElectronicBill = obj;
        }

        if (params.TrainTicket) {
            let obj = new TrainTicket();
            obj.deserialize(params.TrainTicket)
            this.TrainTicket = obj;
        }

        if (params.MedicalOutpatientInvoice) {
            let obj = new MedicalInvoice();
            obj.deserialize(params.MedicalOutpatientInvoice)
            this.MedicalOutpatientInvoice = obj;
        }

        if (params.MedicalHospitalizedInvoice) {
            let obj = new MedicalInvoice();
            obj.deserialize(params.MedicalHospitalizedInvoice)
            this.MedicalHospitalizedInvoice = obj;
        }

    }
}

/**
 * Return values for a VAT invoice
 * @class
 */
class VatInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Check code
         * @type {string || null}
         */
        this.CheckCode = null;

        /**
         * Form type
         * @type {string || null}
         */
        this.FormType = null;

        /**
         * Vehicle and vessel tax
         * @type {string || null}
         */
        this.TravelTax = null;

        /**
         * Buyer's address and phone number
         * @type {string || null}
         */
        this.BuyerAddrTel = null;

        /**
         * Buyer's bank account number
         * @type {string || null}
         */
        this.BuyerBankAccount = null;

        /**
         * Company seal content
         * @type {string || null}
         */
        this.CompanySealContent = null;

        /**
         * Tax authority seal content
         * @type {string || null}
         */
        this.TaxSealContent = null;

        /**
         * Service type
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * City
         * @type {string || null}
         */
        this.City = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Whether there is an agent (0: No, 1: Yes)
         * @type {number || null}
         */
        this.AgentMark = null;

        /**
         * Whether there is a toll (0: No, 1: Yes)
         * @type {number || null}
         */
        this.TransitMark = null;

        /**
         * Whether there is refined oil (0: No, 1: Yes)
         * @type {number || null}
         */
        this.OilMark = null;

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Machine-printed invoice number
         * @type {string || null}
         */
        this.NumberConfirm = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Total amount (in words)
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * Amount before tax
         * @type {string || null}
         */
        this.PretaxAmount = null;

        /**
         * Tax
         * @type {string || null}
         */
        this.Tax = null;

        /**
         * Machine No.
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * Ciphertext
         * @type {string || null}
         */
        this.Ciphertext = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Seller's name
         * @type {string || null}
         */
        this.Seller = null;

        /**
         * Seller's taxpayer identification number
         * @type {string || null}
         */
        this.SellerTaxID = null;

        /**
         * Seller's address and phone number
         * @type {string || null}
         */
        this.SellerAddrTel = null;

        /**
         * Seller's bank account number
         * @type {string || null}
         */
        this.SellerBankAccount = null;

        /**
         * Buyer's name
         * @type {string || null}
         */
        this.Buyer = null;

        /**
         * Buyer's taxpayer identification number
         * @type {string || null}
         */
        this.BuyerTaxID = null;

        /**
         * Whether there is a company seal (0: No, 1: Yes)
         * @type {number || null}
         */
        this.CompanySealMark = null;

        /**
         * Issuer
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * Reviewer
         * @type {string || null}
         */
        this.Reviewer = null;

        /**
         * Province
         * @type {string || null}
         */
        this.Province = null;

        /**
         * Information about VAT invoice items
         * @type {Array.<VatInvoiceItemInfo> || null}
         */
        this.VatInvoiceItemInfos = null;

        /**
         * Machine-printed invoice code
         * @type {string || null}
         */
        this.CodeConfirm = null;

        /**
         * Payee
         * @type {string || null}
         */
        this.Receiptor = null;

        /**
         * 
         * @type {number || null}
         */
        this.ElectronicFullMark = null;

        /**
         * 
         * @type {string || null}
         */
        this.ElectronicFullNumber = null;

        /**
         * 
         * @type {string || null}
         */
        this.FormName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.FormType = 'FormType' in params ? params.FormType : null;
        this.TravelTax = 'TravelTax' in params ? params.TravelTax : null;
        this.BuyerAddrTel = 'BuyerAddrTel' in params ? params.BuyerAddrTel : null;
        this.BuyerBankAccount = 'BuyerBankAccount' in params ? params.BuyerBankAccount : null;
        this.CompanySealContent = 'CompanySealContent' in params ? params.CompanySealContent : null;
        this.TaxSealContent = 'TaxSealContent' in params ? params.TaxSealContent : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.City = 'City' in params ? params.City : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.AgentMark = 'AgentMark' in params ? params.AgentMark : null;
        this.TransitMark = 'TransitMark' in params ? params.TransitMark : null;
        this.OilMark = 'OilMark' in params ? params.OilMark : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.NumberConfirm = 'NumberConfirm' in params ? params.NumberConfirm : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.PretaxAmount = 'PretaxAmount' in params ? params.PretaxAmount : null;
        this.Tax = 'Tax' in params ? params.Tax : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.Ciphertext = 'Ciphertext' in params ? params.Ciphertext : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Seller = 'Seller' in params ? params.Seller : null;
        this.SellerTaxID = 'SellerTaxID' in params ? params.SellerTaxID : null;
        this.SellerAddrTel = 'SellerAddrTel' in params ? params.SellerAddrTel : null;
        this.SellerBankAccount = 'SellerBankAccount' in params ? params.SellerBankAccount : null;
        this.Buyer = 'Buyer' in params ? params.Buyer : null;
        this.BuyerTaxID = 'BuyerTaxID' in params ? params.BuyerTaxID : null;
        this.CompanySealMark = 'CompanySealMark' in params ? params.CompanySealMark : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.Reviewer = 'Reviewer' in params ? params.Reviewer : null;
        this.Province = 'Province' in params ? params.Province : null;

        if (params.VatInvoiceItemInfos) {
            this.VatInvoiceItemInfos = new Array();
            for (let z in params.VatInvoiceItemInfos) {
                let obj = new VatInvoiceItemInfo();
                obj.deserialize(params.VatInvoiceItemInfos[z]);
                this.VatInvoiceItemInfos.push(obj);
            }
        }
        this.CodeConfirm = 'CodeConfirm' in params ? params.CodeConfirm : null;
        this.Receiptor = 'Receiptor' in params ? params.Receiptor : null;
        this.ElectronicFullMark = 'ElectronicFullMark' in params ? params.ElectronicFullMark : null;
        this.ElectronicFullNumber = 'ElectronicFullNumber' in params ? params.ElectronicFullNumber : null;
        this.FormName = 'FormName' in params ? params.FormName : null;

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
 * General machine-printed invoice
 * @class
 */
class MachinePrintedInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Time
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Check code
         * @type {string || null}
         */
        this.CheckCode = null;

        /**
         * Ciphertext
         * @type {string || null}
         */
        this.Ciphertext = null;

        /**
         * Category
         * @type {string || null}
         */
        this.Category = null;

        /**
         * Amount before tax
         * @type {string || null}
         */
        this.PretaxAmount = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Total amount (in words)
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * Tax
         * @type {string || null}
         */
        this.Tax = null;

        /**
         * Industry
         * @type {string || null}
         */
        this.IndustryClass = null;

        /**
         * Seller's name
         * @type {string || null}
         */
        this.Seller = null;

        /**
         * Seller's taxpayer identification number
         * @type {string || null}
         */
        this.SellerTaxID = null;

        /**
         * Seller's address and phone number
         * @type {string || null}
         */
        this.SellerAddrTel = null;

        /**
         * Seller's bank account number
         * @type {string || null}
         */
        this.SellerBankAccount = null;

        /**
         * Buyer's name
         * @type {string || null}
         */
        this.Buyer = null;

        /**
         * Buyer's taxpayer identification number
         * @type {string || null}
         */
        this.BuyerTaxID = null;

        /**
         * Buyer's address and phone number
         * @type {string || null}
         */
        this.BuyerAddrTel = null;

        /**
         * Buyer's bank account number
         * @type {string || null}
         */
        this.BuyerBankAccount = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Province
         * @type {string || null}
         */
        this.Province = null;

        /**
         * City
         * @type {string || null}
         */
        this.City = null;

        /**
         * Whether there is a company seal (0: No, 1: Yes)
         * @type {number || null}
         */
        this.CompanySealMark = null;

        /**
         * Whether it is a general machine-printed invoice issued by Zhejiang or Guangdong province (0: No, 1: Yes)
         * @type {number || null}
         */
        this.ElectronicMark = null;

        /**
         * Issuer
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * Payee
         * @type {string || null}
         */
        this.Receiptor = null;

        /**
         * Reviewer
         * @type {string || null}
         */
        this.Reviewer = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Operator's payment information
         * @type {string || null}
         */
        this.PaymentInfo = null;

        /**
         * Operator-assigned invoice pickup user
         * @type {string || null}
         */
        this.TicketPickupUser = null;

        /**
         * Operator's merchant number
         * @type {string || null}
         */
        this.MerchantNumber = null;

        /**
         * Operator's order number
         * @type {string || null}
         */
        this.OrderNumber = null;

        /**
         * Items
         * @type {Array.<GeneralMachineItem> || null}
         */
        this.GeneralMachineItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.Ciphertext = 'Ciphertext' in params ? params.Ciphertext : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.PretaxAmount = 'PretaxAmount' in params ? params.PretaxAmount : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.Tax = 'Tax' in params ? params.Tax : null;
        this.IndustryClass = 'IndustryClass' in params ? params.IndustryClass : null;
        this.Seller = 'Seller' in params ? params.Seller : null;
        this.SellerTaxID = 'SellerTaxID' in params ? params.SellerTaxID : null;
        this.SellerAddrTel = 'SellerAddrTel' in params ? params.SellerAddrTel : null;
        this.SellerBankAccount = 'SellerBankAccount' in params ? params.SellerBankAccount : null;
        this.Buyer = 'Buyer' in params ? params.Buyer : null;
        this.BuyerTaxID = 'BuyerTaxID' in params ? params.BuyerTaxID : null;
        this.BuyerAddrTel = 'BuyerAddrTel' in params ? params.BuyerAddrTel : null;
        this.BuyerBankAccount = 'BuyerBankAccount' in params ? params.BuyerBankAccount : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.CompanySealMark = 'CompanySealMark' in params ? params.CompanySealMark : null;
        this.ElectronicMark = 'ElectronicMark' in params ? params.ElectronicMark : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.Receiptor = 'Receiptor' in params ? params.Receiptor : null;
        this.Reviewer = 'Reviewer' in params ? params.Reviewer : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PaymentInfo = 'PaymentInfo' in params ? params.PaymentInfo : null;
        this.TicketPickupUser = 'TicketPickupUser' in params ? params.TicketPickupUser : null;
        this.MerchantNumber = 'MerchantNumber' in params ? params.MerchantNumber : null;
        this.OrderNumber = 'OrderNumber' in params ? params.OrderNumber : null;

        if (params.GeneralMachineItems) {
            this.GeneralMachineItems = new Array();
            for (let z in params.GeneralMachineItems) {
                let obj = new GeneralMachineItem();
                obj.deserialize(params.GeneralMachineItems[z]);
                this.GeneralMachineItems.push(obj);
            }
        }

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
 * RecognizePhilippinesUMIDOCR response structure.
 * @class
 */
class RecognizePhilippinesUMIDOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The surname.
         * @type {TextDetectionResult || null}
         */
        this.Surname = null;

        /**
         * The middle name.
         * @type {TextDetectionResult || null}
         */
        this.MiddleName = null;

        /**
         * The given name.
         * @type {TextDetectionResult || null}
         */
        this.GivenName = null;

        /**
         * The address.
         * @type {TextDetectionResult || null}
         */
        this.Address = null;

        /**
         * The date of birth.
         * @type {TextDetectionResult || null}
         */
        this.Birthday = null;

        /**
         * The common reference number (CRN).
         * @type {TextDetectionResult || null}
         */
        this.CRN = null;

        /**
         * The gender.
         * @type {TextDetectionResult || null}
         */
        this.Sex = null;

        /**
         * The Base64-encoded identity photo.
         * @type {TextDetectionResult || null}
         */
        this.HeadPortrait = null;

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

        if (params.Surname) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Surname)
            this.Surname = obj;
        }

        if (params.MiddleName) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.MiddleName)
            this.MiddleName = obj;
        }

        if (params.GivenName) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.GivenName)
            this.GivenName = obj;
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

        if (params.CRN) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.CRN)
            this.CRN = obj;
        }

        if (params.Sex) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.Sex)
            this.Sex = obj;
        }

        if (params.HeadPortrait) {
            let obj = new TextDetectionResult();
            obj.deserialize(params.HeadPortrait)
            this.HeadPortrait = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Train ticket
 * @class
 */
class TrainTicket extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Departure date
         * @type {string || null}
         */
        this.DateGetOn = null;

        /**
         * Departure time
         * @type {string || null}
         */
        this.TimeGetOn = null;

        /**
         * Passenger's name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Departure station
         * @type {string || null}
         */
        this.StationGetOn = null;

        /**
         * Destination
         * @type {string || null}
         */
        this.StationGetOff = null;

        /**
         * Seat class
         * @type {string || null}
         */
        this.Seat = null;

        /**
         * Total amount
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Serial number
         * @type {string || null}
         */
        this.SerialNumber = null;

        /**
         * ID card number
         * @type {string || null}
         */
        this.UserID = null;

        /**
         * Check-in gate
         * @type {string || null}
         */
        this.GateNumber = null;

        /**
         * Fleet number
         * @type {string || null}
         */
        this.TrainNumber = null;

        /**
         * Handling fee
         * @type {string || null}
         */
        this.HandlingFee = null;

        /**
         * Original ticket price
         * @type {string || null}
         */
        this.OriginalFare = null;

        /**
         * Total amount (in words)
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * Seat No.
         * @type {string || null}
         */
        this.SeatNumber = null;

        /**
         * Ticket pickup address
         * @type {string || null}
         */
        this.PickUpAddress = null;

        /**
         * Ticket change information
         * @type {string || null}
         */
        this.TicketChange = null;

        /**
         * Additional fare
         * @type {string || null}
         */
        this.AdditionalFare = null;

        /**
         * Receipt No.
         * @type {string || null}
         */
        this.ReceiptNumber = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Whether it is for reimbursement only (0: No, 1: Yes)
         * @type {number || null}
         */
        this.ReimburseOnlyMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.DateGetOn = 'DateGetOn' in params ? params.DateGetOn : null;
        this.TimeGetOn = 'TimeGetOn' in params ? params.TimeGetOn : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.StationGetOn = 'StationGetOn' in params ? params.StationGetOn : null;
        this.StationGetOff = 'StationGetOff' in params ? params.StationGetOff : null;
        this.Seat = 'Seat' in params ? params.Seat : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.UserID = 'UserID' in params ? params.UserID : null;
        this.GateNumber = 'GateNumber' in params ? params.GateNumber : null;
        this.TrainNumber = 'TrainNumber' in params ? params.TrainNumber : null;
        this.HandlingFee = 'HandlingFee' in params ? params.HandlingFee : null;
        this.OriginalFare = 'OriginalFare' in params ? params.OriginalFare : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.SeatNumber = 'SeatNumber' in params ? params.SeatNumber : null;
        this.PickUpAddress = 'PickUpAddress' in params ? params.PickUpAddress : null;
        this.TicketChange = 'TicketChange' in params ? params.TicketChange : null;
        this.AdditionalFare = 'AdditionalFare' in params ? params.AdditionalFare : null;
        this.ReceiptNumber = 'ReceiptNumber' in params ? params.ReceiptNumber : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.ReimburseOnlyMark = 'ReimburseOnlyMark' in params ? params.ReimburseOnlyMark : null;

    }
}

/**
 * RecognizeThaiIDCardOCR request structure.
 * @class
 */
class RecognizeThaiIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded value of an image. The image cannot exceed 7 MB after being Base64-encoded. A resolution above 500 x 800 is recommended. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupy more than 2/3 area of the image.
Either `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, `ImageUrl` is used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image. The image cannot exceed 7 MB after being Base64-encoded. A resolution above 500 x 800 is recommended. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupy more than 2/3 area of the image.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to crop the profile photo. The default value is `false`, meaning not to return the Base64-encoded value of the profile photo on the Thai identity card.
When this parameter is set to `true`, the Base64-encoded value of the profile photo on the Thai identity card after rotation correction is returned.
         * @type {boolean || null}
         */
        this.CropPortrait = null;

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
        this.CropPortrait = 'CropPortrait' in params ? params.CropPortrait : null;

    }
}

/**
 * Motor vehicle sales invoice
 * @class
 */
class MotorVehicleSaleInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Amount before tax
         * @type {string || null}
         */
        this.PretaxAmount = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Total amount (in words)
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * Seller's name
         * @type {string || null}
         */
        this.Seller = null;

        /**
         * Seller's company code
         * @type {string || null}
         */
        this.SellerTaxID = null;

        /**
         * Seller's phone number
         * @type {string || null}
         */
        this.SellerTel = null;

        /**
         * Seller's address
         * @type {string || null}
         */
        this.SellerAddress = null;

        /**
         * Seller's account opening bank
         * @type {string || null}
         */
        this.SellerBank = null;

        /**
         * Seller's bank account number
         * @type {string || null}
         */
        this.SellerBankAccount = null;

        /**
         * Buyer's name
         * @type {string || null}
         */
        this.Buyer = null;

        /**
         * Buyer's taxpayer identification number
         * @type {string || null}
         */
        this.BuyerTaxID = null;

        /**
         * Buyer's ID number/organization code
         * @type {string || null}
         */
        this.BuyerID = null;

        /**
         * Tax authority
         * @type {string || null}
         */
        this.TaxAuthorities = null;

        /**
         * Code of the tax authority
         * @type {string || null}
         */
        this.TaxAuthoritiesCode = null;

        /**
         * VIN
         * @type {string || null}
         */
        this.VIN = null;

        /**
         * Vehicle model
         * @type {string || null}
         */
        this.VehicleModel = null;

        /**
         * Engine No.
         * @type {string || null}
         */
        this.VehicleEngineCode = null;

        /**
         * No. of the certificate of conformity
         * @type {string || null}
         */
        this.CertificateNumber = null;

        /**
         * Inspection No.
         * @type {string || null}
         */
        this.InspectionNumber = null;

        /**
         * Machine No.
         * @type {string || null}
         */
        this.MachineID = null;

        /**
         * Vehicle type
         * @type {string || null}
         */
        this.VehicleType = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Province
         * @type {string || null}
         */
        this.Province = null;

        /**
         * City
         * @type {string || null}
         */
        this.City = null;

        /**
         * Tax
         * @type {string || null}
         */
        this.Tax = null;

        /**
         * Tax rate
         * @type {string || null}
         */
        this.TaxRate = null;

        /**
         * Whether there is a company seal (0: No, 1: Yes)
         * @type {number || null}
         */
        this.CompanySealMark = null;

        /**
         * Tonnage
         * @type {string || null}
         */
        this.Tonnage = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Form type
         * @type {string || null}
         */
        this.FormType = null;

        /**
         * Form name
         * @type {string || null}
         */
        this.FormName = null;

        /**
         * Issuer
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * Tax payment voucher number
         * @type {string || null}
         */
        this.TaxNum = null;

        /**
         * Passenger capacity
         * @type {string || null}
         */
        this.MaxPeopleNum = null;

        /**
         * Origin
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * Machine-printed invoice code
         * @type {string || null}
         */
        this.MachineCode = null;

        /**
         * Machine-printed invoice number
         * @type {string || null}
         */
        this.MachineNumber = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.PretaxAmount = 'PretaxAmount' in params ? params.PretaxAmount : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.Seller = 'Seller' in params ? params.Seller : null;
        this.SellerTaxID = 'SellerTaxID' in params ? params.SellerTaxID : null;
        this.SellerTel = 'SellerTel' in params ? params.SellerTel : null;
        this.SellerAddress = 'SellerAddress' in params ? params.SellerAddress : null;
        this.SellerBank = 'SellerBank' in params ? params.SellerBank : null;
        this.SellerBankAccount = 'SellerBankAccount' in params ? params.SellerBankAccount : null;
        this.Buyer = 'Buyer' in params ? params.Buyer : null;
        this.BuyerTaxID = 'BuyerTaxID' in params ? params.BuyerTaxID : null;
        this.BuyerID = 'BuyerID' in params ? params.BuyerID : null;
        this.TaxAuthorities = 'TaxAuthorities' in params ? params.TaxAuthorities : null;
        this.TaxAuthoritiesCode = 'TaxAuthoritiesCode' in params ? params.TaxAuthoritiesCode : null;
        this.VIN = 'VIN' in params ? params.VIN : null;
        this.VehicleModel = 'VehicleModel' in params ? params.VehicleModel : null;
        this.VehicleEngineCode = 'VehicleEngineCode' in params ? params.VehicleEngineCode : null;
        this.CertificateNumber = 'CertificateNumber' in params ? params.CertificateNumber : null;
        this.InspectionNumber = 'InspectionNumber' in params ? params.InspectionNumber : null;
        this.MachineID = 'MachineID' in params ? params.MachineID : null;
        this.VehicleType = 'VehicleType' in params ? params.VehicleType : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Tax = 'Tax' in params ? params.Tax : null;
        this.TaxRate = 'TaxRate' in params ? params.TaxRate : null;
        this.CompanySealMark = 'CompanySealMark' in params ? params.CompanySealMark : null;
        this.Tonnage = 'Tonnage' in params ? params.Tonnage : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.FormType = 'FormType' in params ? params.FormType : null;
        this.FormName = 'FormName' in params ? params.FormName : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.TaxNum = 'TaxNum' in params ? params.TaxNum : null;
        this.MaxPeopleNum = 'MaxPeopleNum' in params ? params.MaxPeopleNum : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.MachineNumber = 'MachineNumber' in params ? params.MachineNumber : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;

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
 * 
 * @class
 */
class PassportRecognizeInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 
         * @type {string || null}
         */
        this.IssuingCountry = null;

        /**
         * 
         * @type {string || null}
         */
        this.PassportID = null;

        /**
         * 
         * @type {string || null}
         */
        this.Surname = null;

        /**
         * 
         * @type {string || null}
         */
        this.GivenName = null;

        /**
         * 
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 
         * @type {string || null}
         */
        this.DateOfBirth = null;

        /**
         * 
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 
         * @type {string || null}
         */
        this.DateOfIssuance = null;

        /**
         * 
         * @type {string || null}
         */
        this.DateOfExpiration = null;

        /**
         * 
         * @type {string || null}
         */
        this.Signature = null;

        /**
         * 
         * @type {string || null}
         */
        this.IssuePlace = null;

        /**
         * 
         * @type {string || null}
         */
        this.IssuingAuthority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.IssuingCountry = 'IssuingCountry' in params ? params.IssuingCountry : null;
        this.PassportID = 'PassportID' in params ? params.PassportID : null;
        this.Surname = 'Surname' in params ? params.Surname : null;
        this.GivenName = 'GivenName' in params ? params.GivenName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.DateOfIssuance = 'DateOfIssuance' in params ? params.DateOfIssuance : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.Signature = 'Signature' in params ? params.Signature : null;
        this.IssuePlace = 'IssuePlace' in params ? params.IssuePlace : null;
        this.IssuingAuthority = 'IssuingAuthority' in params ? params.IssuingAuthority : null;

    }
}

/**
 * RecognizeSingaporeIDCardOCR request structure.
 * @class
 */
class RecognizeSingaporeIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64 value of the image. The image is required to be no larger than 7M after Base64 encoding, and the resolution is recommended to be 500*800 or above. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupies at least 2/3 of the picture. One of ImageUrl and ImageBase64 of the image must be provided. If both are provided, only ImageUrl will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL address of the image. The image is required to be no larger than 7M after Base64 encoding, and the resolution is recommended to be 500*800 or above. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupies at least 2/3 of the picture. It is recommended that images be stored in Tencent Cloud to ensure higher download speed and stability.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Whether to return portrait photos.
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
 * Taxi receipt
 * @class
 */
class TaxiTicket extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.TimeGetOn = null;

        /**
         * End time
         * @type {string || null}
         */
        this.TimeGetOff = null;

        /**
         * Unit price
         * @type {string || null}
         */
        this.Price = null;

        /**
         * Distance
         * @type {string || null}
         */
        this.Mileage = null;

        /**
         * Total amount
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Invoice place
         * @type {string || null}
         */
        this.Place = null;

        /**
         * Province
         * @type {string || null}
         */
        this.Province = null;

        /**
         * City
         * @type {string || null}
         */
        this.City = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * License plate number
         * @type {string || null}
         */
        this.LicensePlate = null;

        /**
         * Fuel surcharge
         * @type {string || null}
         */
        this.FuelFee = null;

        /**
         * Booking fee
         * @type {string || null}
         */
        this.BookingCallFee = null;

        /**
         * Whether there is a company seal (0: No, 1: Yes)
         * @type {number || null}
         */
        this.CompanySealMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.TimeGetOn = 'TimeGetOn' in params ? params.TimeGetOn : null;
        this.TimeGetOff = 'TimeGetOff' in params ? params.TimeGetOff : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Mileage = 'Mileage' in params ? params.Mileage : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Place = 'Place' in params ? params.Place : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.LicensePlate = 'LicensePlate' in params ? params.LicensePlate : null;
        this.FuelFee = 'FuelFee' in params ? params.FuelFee : null;
        this.BookingCallFee = 'BookingCallFee' in params ? params.BookingCallFee : null;
        this.CompanySealMark = 'CompanySealMark' in params ? params.CompanySealMark : null;

    }
}

/**
 * LicensePlateOCR request structure.
 * @class
 */
class LicensePlateOCRRequest extends  AbstractModel {
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

/**
 * Return values for an electronic invoice
 * @class
 */
class VatElectronicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Amount before tax
         * @type {string || null}
         */
        this.PretaxAmount = null;

        /**
         * Tax
         * @type {string || null}
         */
        this.Tax = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Total amount (in words)
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * Seller's name
         * @type {string || null}
         */
        this.Seller = null;

        /**
         * Seller's taxpayer identification number
         * @type {string || null}
         */
        this.SellerTaxID = null;

        /**
         * Buyer's name
         * @type {string || null}
         */
        this.Buyer = null;

        /**
         * Buyer's taxpayer identification number
         * @type {string || null}
         */
        this.BuyerTaxID = null;

        /**
         * Issuer
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Subtotal amount
         * @type {string || null}
         */
        this.SubTotal = null;

        /**
         * Subtotal tax
         * @type {string || null}
         */
        this.SubTax = null;

        /**
         * Detailed items of an electronic invoice
         * @type {Array.<VatElectronicItemInfo> || null}
         */
        this.VatElectronicItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.PretaxAmount = 'PretaxAmount' in params ? params.PretaxAmount : null;
        this.Tax = 'Tax' in params ? params.Tax : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.Seller = 'Seller' in params ? params.Seller : null;
        this.SellerTaxID = 'SellerTaxID' in params ? params.SellerTaxID : null;
        this.Buyer = 'Buyer' in params ? params.Buyer : null;
        this.BuyerTaxID = 'BuyerTaxID' in params ? params.BuyerTaxID : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.SubTotal = 'SubTotal' in params ? params.SubTotal : null;
        this.SubTax = 'SubTax' in params ? params.SubTax : null;

        if (params.VatElectronicItems) {
            this.VatElectronicItems = new Array();
            for (let z in params.VatElectronicItems) {
                let obj = new VatElectronicItemInfo();
                obj.deserialize(params.VatElectronicItems[z]);
                this.VatElectronicItems.push(obj);
            }
        }

    }
}

/**
 * IDCardOCR request structure.
 * @class
 */
class IDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded value of an image. The image cannot exceed 7 MB after being Base64-encoded. A resolution above 500 x 800 is recommended. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupy more than 2/3 area of the image.
Either `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, `ImageUrl` is used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image. The image cannot exceed 7 MB after being Base64-encoded. A resolution above 500 x 800 is recommended. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupy more than 2/3 area of the image.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * `FRONT`: The side with the profile photo.
`BACK`: The side with the national emblem.
If this parameter is not specified, the system will automatically determine the ID card side.
         * @type {string || null}
         */
        this.CardSide = null;

        /**
         * The following parameters are all of `bool` type and default to `false`:
`CropIdCard`: Crops the ID card photo (by removing extra edges outside the ID card and automatically correcting the shooting angle).
`CropPortrait`: Crops the profile photo (by automatically cutting out the face area in the ID card).
`CopyWarn`: Warns about photocopied images.
`BorderCheckWarn`: Warns about border and frame occlusions.
`ReshootWarn`: Warns about spoofed images.
`DetectPsWarn`: Warns about photoshopped images.
`TempIdWarn`: Warns about temporary ID cards.
`InvalidDateWarn`: Warns about invalid ID card validity periods.
`Quality`: Gets the image quality score (by evaluating the blurriness of the image).
`MultiCardDetect`: Enables multi-card detection.
`ReflectWarn`: Enables glare detection.

Parameter setting method via SDK:
Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})
Parameter setting method via API 3.0 Explorer:
Config = {"CropIdCard":true,"CropPortrait":true}
         * @type {string || null}
         */
        this.Config = null;

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
        this.CardSide = 'CardSide' in params ? params.CardSide : null;
        this.Config = 'Config' in params ? params.Config : null;

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
 * Used car sales invoice
 * @class
 */
class UsedCarPurchaseInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Total amount (in words)
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * Seller's name
         * @type {string || null}
         */
        this.Seller = null;

        /**
         * Seller's phone number
         * @type {string || null}
         */
        this.SellerTel = null;

        /**
         * Seller's company code/personal ID card number
         * @type {string || null}
         */
        this.SellerTaxID = null;

        /**
         * Seller's address
         * @type {string || null}
         */
        this.SellerAddress = null;

        /**
         * Buyer's name
         * @type {string || null}
         */
        this.Buyer = null;

        /**
         * Buyer's company code/personal ID card number
         * @type {string || null}
         */
        this.BuyerID = null;

        /**
         * Buyer's address
         * @type {string || null}
         */
        this.BuyerAddress = null;

        /**
         * Buyer's phone number
         * @type {string || null}
         */
        this.BuyerTel = null;

        /**
         * Company (used car market) name
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * Company's taxpayer identification number
         * @type {string || null}
         */
        this.CompanyTaxID = null;

        /**
         * Company's account opening bank and account number
         * @type {string || null}
         */
        this.CompanyBankAccount = null;

        /**
         * Company's phone number
         * @type {string || null}
         */
        this.CompanyTel = null;

        /**
         * Company's address
         * @type {string || null}
         */
        this.CompanyAddress = null;

        /**
         * Name of the transfer-to department of motor vehicles
         * @type {string || null}
         */
        this.TransferAdministrationName = null;

        /**
         * License plate number
         * @type {string || null}
         */
        this.LicensePlate = null;

        /**
         * Registration certificate No.
         * @type {string || null}
         */
        this.RegistrationNumber = null;

        /**
         * VIN
         * @type {string || null}
         */
        this.VIN = null;

        /**
         * Vehicle model
         * @type {string || null}
         */
        this.VehicleModel = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Province
         * @type {string || null}
         */
        this.Province = null;

        /**
         * City
         * @type {string || null}
         */
        this.City = null;

        /**
         * Vehicle type
         * @type {string || null}
         */
        this.VehicleType = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Form type
         * @type {string || null}
         */
        this.FormType = null;

        /**
         * Form name
         * @type {string || null}
         */
        this.FormName = null;

        /**
         * Whether there is a company seal (0: No, 1: Yes)
         * @type {number || null}
         */
        this.CompanySealMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.Seller = 'Seller' in params ? params.Seller : null;
        this.SellerTel = 'SellerTel' in params ? params.SellerTel : null;
        this.SellerTaxID = 'SellerTaxID' in params ? params.SellerTaxID : null;
        this.SellerAddress = 'SellerAddress' in params ? params.SellerAddress : null;
        this.Buyer = 'Buyer' in params ? params.Buyer : null;
        this.BuyerID = 'BuyerID' in params ? params.BuyerID : null;
        this.BuyerAddress = 'BuyerAddress' in params ? params.BuyerAddress : null;
        this.BuyerTel = 'BuyerTel' in params ? params.BuyerTel : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.CompanyTaxID = 'CompanyTaxID' in params ? params.CompanyTaxID : null;
        this.CompanyBankAccount = 'CompanyBankAccount' in params ? params.CompanyBankAccount : null;
        this.CompanyTel = 'CompanyTel' in params ? params.CompanyTel : null;
        this.CompanyAddress = 'CompanyAddress' in params ? params.CompanyAddress : null;
        this.TransferAdministrationName = 'TransferAdministrationName' in params ? params.TransferAdministrationName : null;
        this.LicensePlate = 'LicensePlate' in params ? params.LicensePlate : null;
        this.RegistrationNumber = 'RegistrationNumber' in params ? params.RegistrationNumber : null;
        this.VIN = 'VIN' in params ? params.VIN : null;
        this.VehicleModel = 'VehicleModel' in params ? params.VehicleModel : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.VehicleType = 'VehicleType' in params ? params.VehicleType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.FormType = 'FormType' in params ? params.FormType : null;
        this.FormName = 'FormName' in params ? params.FormName : null;
        this.CompanySealMark = 'CompanySealMark' in params ? params.CompanySealMark : null;

    }
}

/**
 * RecognizeMacaoIDCardOCR request structure.
 * @class
 */
class RecognizeMacaoIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL address of the image. 
Supported image formats: PNG, JPG, JPEG. Not support GIF yet.
Supported image size: The downloaded image should not exceed 7M. The image download takes no more than 3 seconds.Storing images in Tencent Cloud URLs can ensure higher download speed and stability. It is recommended that images be stored in Tencent Cloud. The URL speed and stability of non-Tencent cloud storage may be affected to a certain extent.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Base64 value of the image.Supported image formats: PNG, JPG, JPEG. Not support GIF yet.
Supported image size: The downloaded image should not exceed 7M after Base64 encoding. The image download takes no more than 3 seconds.
One of ImageUrl and ImageBase64 of the image must be provided. If both are provided, only ImageUrl will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The following optional fields are of string type and are empty by default: 
RetImage: whether to return the processed image (base64 encrypted string); the value and meaning of RetImage are as follows: 1.preprocess returns the preprocessed image data 2.portrait Return portrait image data 3."" Do not return image data SDK setting method reference: Config = Json.stringify({"RetImage":"preprocess"}) API 3.0 Explorer setting method reference: Config = {"RetImage":"portrait" }
         * @type {string || null}
         */
        this.Config = null;

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
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * Non-tax revenue
 * @class
 */
class NonTaxIncomeBill extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Check code
         * @type {string || null}
         */
        this.CheckCode = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Total amount (in words)
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * Payer's name
         * @type {string || null}
         */
        this.Buyer = null;

        /**
         * Payer's taxpayer identification number
         * @type {string || null}
         */
        this.BuyerTaxID = null;

        /**
         * Payee's name
         * @type {string || null}
         */
        this.Seller = null;

        /**
         * Payee's company name
         * @type {string || null}
         */
        this.SellerCompany = null;

        /**
         * Remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Currency
         * @type {string || null}
         */
        this.CurrencyCode = null;

        /**
         * Reviewer
         * @type {string || null}
         */
        this.Reviewer = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Other information
         * @type {string || null}
         */
        this.OtherInfo = null;

        /**
         * Payment code
         * @type {string || null}
         */
        this.PaymentCode = null;

        /**
         * Collecting organization's code
         * @type {string || null}
         */
        this.ReceiveUnitCode = null;

        /**
         * Collecting organization's name
         * @type {string || null}
         */
        this.Receiver = null;

        /**
         * Operator
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Payer's account
         * @type {string || null}
         */
        this.PayerAccount = null;

        /**
         * Payer's account opening bank
         * @type {string || null}
         */
        this.PayerBank = null;

        /**
         * Payee's account
         * @type {string || null}
         */
        this.ReceiverAccount = null;

        /**
         * Payee's account opening bank
         * @type {string || null}
         */
        this.ReceiverBank = null;

        /**
         * Items
         * @type {Array.<NonTaxItem> || null}
         */
        this.NonTaxItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.Buyer = 'Buyer' in params ? params.Buyer : null;
        this.BuyerTaxID = 'BuyerTaxID' in params ? params.BuyerTaxID : null;
        this.Seller = 'Seller' in params ? params.Seller : null;
        this.SellerCompany = 'SellerCompany' in params ? params.SellerCompany : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CurrencyCode = 'CurrencyCode' in params ? params.CurrencyCode : null;
        this.Reviewer = 'Reviewer' in params ? params.Reviewer : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.OtherInfo = 'OtherInfo' in params ? params.OtherInfo : null;
        this.PaymentCode = 'PaymentCode' in params ? params.PaymentCode : null;
        this.ReceiveUnitCode = 'ReceiveUnitCode' in params ? params.ReceiveUnitCode : null;
        this.Receiver = 'Receiver' in params ? params.Receiver : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.PayerAccount = 'PayerAccount' in params ? params.PayerAccount : null;
        this.PayerBank = 'PayerBank' in params ? params.PayerBank : null;
        this.ReceiverAccount = 'ReceiverAccount' in params ? params.ReceiverAccount : null;
        this.ReceiverBank = 'ReceiverBank' in params ? params.ReceiverBank : null;

        if (params.NonTaxItems) {
            this.NonTaxItems = new Array();
            for (let z in params.NonTaxItems) {
                let obj = new NonTaxItem();
                obj.deserialize(params.NonTaxItems[z]);
                this.NonTaxItems.push(obj);
            }
        }

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
-9102 Alarm for photocopy on a paper document (including black & white and color ones)
-9103 Alarm for photocopy on an electronic device
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
         * Type (in Machine Readable Zone)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Document content in Information Zone
         * @type {PassportRecognizeInfos || null}
         */
        this.PassportRecognizeInfos = null;

        /**
         * Card Warning Information

-9101 Alarm for covered certificate,
-9102 Alarm for photocopied certificate,
-9103 Alarm for photographed certificate,
-9104 Alarm for PS certificate,
-9107 Alarm for reflective certificate,
-9108 Alarm for blurry image,
-9109 This capability is not enabled.
         * @type {Array.<number> || null}
         */
        this.WarnCardInfos = null;

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
        this.Type = 'Type' in params ? params.Type : null;

        if (params.PassportRecognizeInfos) {
            let obj = new PassportRecognizeInfos();
            obj.deserialize(params.PassportRecognizeInfos)
            this.PassportRecognizeInfos = obj;
        }
        this.WarnCardInfos = 'WarnCardInfos' in params ? params.WarnCardInfos : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Itinerary/Receipt of e-ticket for air transportation
 * @class
 */
class AirTransport extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * E-ticket No.
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Check code
         * @type {string || null}
         */
        this.CheckCode = null;

        /**
         * Serial number
         * @type {string || null}
         */
        this.SerialNumber = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Agent code
         * @type {string || null}
         */
        this.AgentCode = null;

        /**
         * First line of the agent code
         * @type {string || null}
         */
        this.AgentCodeFirst = null;

        /**
         * Second line of the agent code
         * @type {string || null}
         */
        this.AgentCodeSecond = null;

        /**
         * Name
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * ID card number
         * @type {string || null}
         */
        this.UserID = null;

        /**
         * Issuer
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * Fare
         * @type {string || null}
         */
        this.Fare = null;

        /**
         * Tax
         * @type {string || null}
         */
        this.Tax = null;

        /**
         * Fuel surcharge
         * @type {string || null}
         */
        this.FuelSurcharge = null;

        /**
         * Aviation Development Fund
         * @type {string || null}
         */
        this.AirDevelopmentFund = null;

        /**
         * Insurance
         * @type {string || null}
         */
        this.Insurance = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Domestic or international tag
         * @type {string || null}
         */
        this.DomesticInternationalTag = null;

        /**
         * Not-valid-before date
         * @type {string || null}
         */
        this.DateStart = null;

        /**
         * Not-valid-after date
         * @type {string || null}
         */
        this.DateEnd = null;

        /**
         * Endorsements/Restrictions
         * @type {string || null}
         */
        this.Endorsement = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Items
         * @type {Array.<FlightItem> || null}
         */
        this.FlightItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.AgentCode = 'AgentCode' in params ? params.AgentCode : null;
        this.AgentCodeFirst = 'AgentCodeFirst' in params ? params.AgentCodeFirst : null;
        this.AgentCodeSecond = 'AgentCodeSecond' in params ? params.AgentCodeSecond : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserID = 'UserID' in params ? params.UserID : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.Fare = 'Fare' in params ? params.Fare : null;
        this.Tax = 'Tax' in params ? params.Tax : null;
        this.FuelSurcharge = 'FuelSurcharge' in params ? params.FuelSurcharge : null;
        this.AirDevelopmentFund = 'AirDevelopmentFund' in params ? params.AirDevelopmentFund : null;
        this.Insurance = 'Insurance' in params ? params.Insurance : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.DomesticInternationalTag = 'DomesticInternationalTag' in params ? params.DomesticInternationalTag : null;
        this.DateStart = 'DateStart' in params ? params.DateStart : null;
        this.DateEnd = 'DateEnd' in params ? params.DateEnd : null;
        this.Endorsement = 'Endorsement' in params ? params.Endorsement : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;

        if (params.FlightItems) {
            this.FlightItems = new Array();
            for (let z in params.FlightItems) {
                let obj = new FlightItem();
                obj.deserialize(params.FlightItems[z]);
                this.FlightItems.push(obj);
            }
        }

    }
}

/**
 * RecognizeTableAccurateOCR request structure.
 * @class
 */
class RecognizeTableAccurateOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded value of an image.
The image cannot exceed 7 MB after being Base64-encoded. A resolution above 600 x 800 is recommended. PNG, JPG, JPEG, BMP, and PDF formats are supported.
Supported image pixels: 20 to 10,000
Either `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, only `ImageUrl` is used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image or PDF file.
The image or PDF file cannot exceed 7 MB after being Base64-encoded. A resolution above 600 x 800 is recommended. PNG, JPG, JPEG, BMP, and PDF formats are supported.
Supported image pixels: 20 to 10,000
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
The download speed and stability of non-Tencent Cloud URLs may be low.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * The number of the PDF page that needs to be recognized. Only one single PDF page can be recognized. This parameter is valid if the uploaded file is a PDF and the value of `IsPdf` is `true`. Default value: `1`.
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
        this.PdfPageNumber = 'PdfPageNumber' in params ? params.PdfPageNumber : null;

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
 * SealOCR response structure.
 * @class
 */
class SealOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Seal content
         * @type {string || null}
         */
        this.SealBody = null;

        /**
         * Seal coordinates
         * @type {Rect || null}
         */
        this.Location = null;

        /**
         * Other text content
         * @type {Array.<string> || null}
         */
        this.OtherTexts = null;

        /**
         * All seal information
         * @type {Array.<SealInfo> || null}
         */
        this.SealInfos = null;

        /**
         * Seal shape. Valid values:
0: Round
1: Oval
2: Rectangle
3: Diamond
4: Triangle
         * @type {string || null}
         */
        this.SealShape = null;

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
        this.SealBody = 'SealBody' in params ? params.SealBody : null;

        if (params.Location) {
            let obj = new Rect();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.OtherTexts = 'OtherTexts' in params ? params.OtherTexts : null;

        if (params.SealInfos) {
            this.SealInfos = new Array();
            for (let z in params.SealInfos) {
                let obj = new SealInfo();
                obj.deserialize(params.SealInfos[z]);
                this.SealInfos.push(obj);
            }
        }
        this.SealShape = 'SealShape' in params ? params.SealShape : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Card Warning Information

-9101 Alarm for covered certificate,
-9102 Alarm for photocopied certificate,
-9103 Alarm for photographed certificate,
-9107 Alarm for reflective certificate,
-9108 Alarm for blurry image,
-9109 This capability is not enabled.
         * @type {Array.<number> || null}
         */
        this.WarnCardInfos = null;

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
        this.WarnCardInfos = 'WarnCardInfos' in params ? params.WarnCardInfos : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Recognized table information
 * @class
 */
class TableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cell content
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {Array.<TableCellInfo> || null}
         */
        this.Cells = null;

        /**
         * Type of text in the image. Valid values:
0: Non-table text
1: Text in a bordered table
2: Text in a borderless table
Note: This parameter may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * The coordinates of the four vertices (upper-left, upper-right, lower-right, and lower-left) of the table body.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Coord> || null}
         */
        this.TableCoordPoint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Cells) {
            this.Cells = new Array();
            for (let z in params.Cells) {
                let obj = new TableCellInfo();
                obj.deserialize(params.Cells[z]);
                this.Cells.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TableCoordPoint) {
            this.TableCoordPoint = new Array();
            for (let z in params.TableCoordPoint) {
                let obj = new Coord();
                obj.deserialize(params.TableCoordPoint[z]);
                this.TableCoordPoint.push(obj);
            }
        }

    }
}

/**
 * VinOCR response structure.
 * @class
 */
class VinOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The detected VIN.
         * @type {string || null}
         */
        this.Vin = null;

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
        this.Vin = 'Vin' in params ? params.Vin : null;
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
 * Detailed items of an electronic invoice
 * @class
 */
class VatElectronicItemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Item name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Quantity
         * @type {string || null}
         */
        this.Quantity = null;

        /**
         * Specification
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * Unit price
         * @type {string || null}
         */
        this.Price = null;

        /**
         * Amount
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Tax rate
         * @type {string || null}
         */
        this.TaxRate = null;

        /**
         * Tax amount
         * @type {string || null}
         */
        this.Tax = null;

        /**
         * Unit
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Vehicle type
         * @type {string || null}
         */
        this.VehicleType = null;

        /**
         * Vehicle No.
         * @type {string || null}
         */
        this.VehicleBrand = null;

        /**
         * Departure place
         * @type {string || null}
         */
        this.DeparturePlace = null;

        /**
         * Destination
         * @type {string || null}
         */
        this.ArrivalPlace = null;

        /**
         * Name of the transported goods. It is returned only for a goods transport service invoice.
         * @type {string || null}
         */
        this.TransportItemsName = null;

        /**
         * Location of the construction service. It is returned only for a construction invoice.
         * @type {string || null}
         */
        this.PlaceOfBuildingService = null;

        /**
         * Name of the construction project. It is returned only for a construction invoice.
         * @type {string || null}
         */
        this.BuildingName = null;

        /**
         * Property or real estate ownership certificate No. It is returned only for a real estate operation and leasing service invoice.
         * @type {string || null}
         */
        this.EstateNumber = null;

        /**
         * Unit of area. It is returned only for a real estate operation and leasing service invoice.
         * @type {string || null}
         */
        this.AreaUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TaxRate = 'TaxRate' in params ? params.TaxRate : null;
        this.Tax = 'Tax' in params ? params.Tax : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.VehicleType = 'VehicleType' in params ? params.VehicleType : null;
        this.VehicleBrand = 'VehicleBrand' in params ? params.VehicleBrand : null;
        this.DeparturePlace = 'DeparturePlace' in params ? params.DeparturePlace : null;
        this.ArrivalPlace = 'ArrivalPlace' in params ? params.ArrivalPlace : null;
        this.TransportItemsName = 'TransportItemsName' in params ? params.TransportItemsName : null;
        this.PlaceOfBuildingService = 'PlaceOfBuildingService' in params ? params.PlaceOfBuildingService : null;
        this.BuildingName = 'BuildingName' in params ? params.BuildingName : null;
        this.EstateNumber = 'EstateNumber' in params ? params.EstateNumber : null;
        this.AreaUnit = 'AreaUnit' in params ? params.AreaUnit : null;

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
 * RecognizeMainlandIDCardOCR request structure.
 * @class
 */
class RecognizeMainlandIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64 value of the image. The image is required to be no larger than 7M after Base64 encoding, and the resolution is recommended to be 500*800 or above. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupies at least 2/3 of the picture. One of ImageUrl and ImageBase64 of the image must be provided. If both are provided, only ImageUrl will be used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL address of the image. The image is required to be no larger than 7M after Base64 encoding, and the resolution is recommended to be 500*800 or above. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupies at least 2/3 of the picture. It is recommended that images be stored in Tencent Cloud to ensure higher download speed and stability.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * FRONT: The side of the ID card with the photo (portrait side), BACK: The side of the ID card with the national emblem (national emblem side). If this parameter is not filled in, the front and back of the ID card will be automatically determined for you.
         * @type {string || null}
         */
        this.CardSide = null;

        /**
         * Whether to return the ID card portrait, the default is false
         * @type {boolean || null}
         */
        this.CropPortrait = null;

        /**
         * Whether to enable ID card photo cropping (removing excess edges outside the ID, automatically correcting the shooting angle), the default value is false
         * @type {boolean || null}
         */
        this.CropIdCard = null;

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
        this.CardSide = 'CardSide' in params ? params.CardSide : null;
        this.CropPortrait = 'CropPortrait' in params ? params.CropPortrait : null;
        this.CropIdCard = 'CropIdCard' in params ? params.CropIdCard : null;

    }
}

/**
 * General VAT invoice (roll)
 * @class
 */
class VatInvoiceRoll extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Machine-printed invoice number
         * @type {string || null}
         */
        this.NumberConfirm = null;

        /**
         * Date of issue
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Check code
         * @type {string || null}
         */
        this.CheckCode = null;

        /**
         * Seller's name
         * @type {string || null}
         */
        this.Seller = null;

        /**
         * Seller's taxpayer identification number
         * @type {string || null}
         */
        this.SellerTaxID = null;

        /**
         * Buyer's name
         * @type {string || null}
         */
        this.Buyer = null;

        /**
         * Buyer's taxpayer identification number
         * @type {string || null}
         */
        this.BuyerTaxID = null;

        /**
         * Category
         * @type {string || null}
         */
        this.Category = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Total amount (in words)
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Province
         * @type {string || null}
         */
        this.Province = null;

        /**
         * City
         * @type {string || null}
         */
        this.City = null;

        /**
         * Whether there is a company seal (0: No, 1: Yes)
         * @type {number || null}
         */
        this.CompanySealMark = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

        /**
         * Service type
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * Company seal content
         * @type {string || null}
         */
        this.CompanySealContent = null;

        /**
         * Tax authority seal content
         * @type {string || null}
         */
        this.TaxSealContent = null;

        /**
         * Items
         * @type {Array.<VatRollItem> || null}
         */
        this.VatRollItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.NumberConfirm = 'NumberConfirm' in params ? params.NumberConfirm : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.Seller = 'Seller' in params ? params.Seller : null;
        this.SellerTaxID = 'SellerTaxID' in params ? params.SellerTaxID : null;
        this.Buyer = 'Buyer' in params ? params.Buyer : null;
        this.BuyerTaxID = 'BuyerTaxID' in params ? params.BuyerTaxID : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.CompanySealMark = 'CompanySealMark' in params ? params.CompanySealMark : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.CompanySealContent = 'CompanySealContent' in params ? params.CompanySealContent : null;
        this.TaxSealContent = 'TaxSealContent' in params ? params.TaxSealContent : null;

        if (params.VatRollItems) {
            this.VatRollItems = new Array();
            for (let z in params.VatRollItems) {
                let obj = new VatRollItem();
                obj.deserialize(params.VatRollItems[z]);
                this.VatRollItems.push(obj);
            }
        }

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
 * RecognizeGeneralInvoice response structure.
 * @class
 */
class RecognizeGeneralInvoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mixed invoice/ticket recognition result. Please click the link on the left for details.
         * @type {Array.<InvoiceItem> || null}
         */
        this.MixedInvoiceItems = null;

        /**
         * Total number of pages in the PDF file.
         * @type {number || null}
         */
        this.TotalPDFCount = null;

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

        if (params.MixedInvoiceItems) {
            this.MixedInvoiceItems = new Array();
            for (let z in params.MixedInvoiceItems) {
                let obj = new InvoiceItem();
                obj.deserialize(params.MixedInvoiceItems[z]);
                this.MixedInvoiceItems.push(obj);
            }
        }
        this.TotalPDFCount = 'TotalPDFCount' in params ? params.TotalPDFCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeSingaporeIDCardOCR response structure.
 * @class
 */
class RecognizeSingaporeIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Chinese name
         * @type {string || null}
         */
        this.ChName = null;

        /**
         * English name
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * gender
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Birth Country
         * @type {string || null}
         */
        this.CountryOfBirth = null;

        /**
         * Brithday
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Address(back side)
         * @type {string || null}
         */
        this.Address = null;

        /**
         * License number
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Nationality(back side)
         * @type {string || null}
         */
        this.Race = null;

        /**
         * NRIC code(back side)
         * @type {string || null}
         */
        this.NRICCode = null;

        /**
         * Post code(back side)
         * @type {string || null}
         */
        this.PostCode = null;

        /**
         * Date of Expiration(back side)
         * @type {string || null}
         */
        this.DateOfExpiration = null;

        /**
         * Date of issue(back side)
         * @type {string || null}
         */
        this.DateOfIssue = null;

        /**
         * Head image 
         * @type {string || null}
         */
        this.Photo = null;

        /**
         * Card Warning Information

-9101 Alarm for covered certificate,
-9102 Alarm for photocopied certificate,
-9103 Alarm for photographed certificate,
-9104 Alarm for PS certificate,
-9107 Alarm for reflective certificate,
-9108 Alarm for blurry image,
-9109 This capability is not enabled.
         * @type {Array.<number> || null}
         */
        this.WarnCardInfos = null;

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
        this.ChName = 'ChName' in params ? params.ChName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.CountryOfBirth = 'CountryOfBirth' in params ? params.CountryOfBirth : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Race = 'Race' in params ? params.Race : null;
        this.NRICCode = 'NRICCode' in params ? params.NRICCode : null;
        this.PostCode = 'PostCode' in params ? params.PostCode : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.DateOfIssue = 'DateOfIssue' in params ? params.DateOfIssue : null;
        this.Photo = 'Photo' in params ? params.Photo : null;
        this.WarnCardInfos = 'WarnCardInfos' in params ? params.WarnCardInfos : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SealOCR request structure.
 * @class
 */
class SealOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The Base64-encoded value of an image. The image cannot exceed 7 MB after being Base64-encoded. A resolution above 500 x 800 is recommended. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupy more than 2/3 area of the image.
Either `ImageUrl` or `ImageBase64` of the image must be provided. If both are provided, `ImageUrl` is used.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * The URL of the image. The image cannot exceed 7 MB after being Base64-encoded. A resolution above 500 x 800 is recommended. PNG, JPG, JPEG, and BMP formats are supported. It is recommended that the card part occupy more than 2/3 area of the image. The download time of the image cannot exceed 3s.
We recommend that you store the image in Tencent Cloud for higher download speed and stability.
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
 * 
 * @class
 */
class MedicalInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 
         * @type {string || null}
         */
        this.Number = null;

        /**
         * 
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 
         * @type {string || null}
         */
        this.TotalCn = null;

        /**
         * 
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 
         * @type {string || null}
         */
        this.CheckCode = null;

        /**
         * 
         * @type {string || null}
         */
        this.Place = null;

        /**
         * 
         * @type {string || null}
         */
        this.Reviewer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalCn = 'TotalCn' in params ? params.TotalCn : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.Place = 'Place' in params ? params.Place : null;
        this.Reviewer = 'Reviewer' in params ? params.Reviewer : null;

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
 * RecognizeTableAccurateOCR response structure.
 * @class
 */
class RecognizeTableAccurateOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The recognized text information. Please click the link on the left for details.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TableInfo> || null}
         */
        this.TableDetections = null;

        /**
         * Base64-encoded Excel data.
         * @type {string || null}
         */
        this.Data = null;

        /**
         * The total number of pages in the PDF file.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PdfPageSize = null;

        /**
         * Image rotation angle in degrees. 0°: The horizontal direction of the text on the image; a negative value: rotate counterclockwise. Value range: -360° to 0°.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.TableDetections) {
            this.TableDetections = new Array();
            for (let z in params.TableDetections) {
                let obj = new TableInfo();
                obj.deserialize(params.TableDetections[z]);
                this.TableDetections.push(obj);
            }
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.PdfPageSize = 'PdfPageSize' in params ? params.PdfPageSize : null;
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * RecognizeMainlandIDCardOCR response structure.
 * @class
 */
class RecognizeMainlandIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name((portrait side))
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Sex((portrait side))
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Nation((portrait side))
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * Brithday((portrait side))
         * @type {string || null}
         */
        this.Birth = null;

        /**
         * Address(portrait side)
         * @type {string || null}
         */
        this.Address = null;

        /**
         * ID number (portrait side)
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * Card authority(national emblem side)
         * @type {string || null}
         */
        this.Authority = null;

        /**
         * Card valid date (national emblem side)
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * Card Warning Information

-9101 Alarm for covered certificate,
-9102 Alarm for photocopied certificate,
-9103 Alarm for photographed certificate,
-9104 Alarm for PS certificate,
-9107 Alarm for reflective certificate,
-9108 Alarm for blurry image,
-9109 This capability is not enabled.
         * @type {Array.<number> || null}
         */
        this.WarnCardInfos = null;

        /**
         * Portrait image base64
         * @type {string || null}
         */
        this.PortraitImage = null;

        /**
         * ID card photo cropping results base64
         * @type {string || null}
         */
        this.IdCardImage = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Authority = 'Authority' in params ? params.Authority : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.WarnCardInfos = 'WarnCardInfos' in params ? params.WarnCardInfos : null;
        this.PortraitImage = 'PortraitImage' in params ? params.PortraitImage : null;
        this.IdCardImage = 'IdCardImage' in params ? params.IdCardImage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MainlandPermitOCR response structure.
 * @class
 */
class MainlandPermitOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name in Chinese
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Name in English
         * @type {string || null}
         */
        this.EnglishName = null;

        /**
         * Gender
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * Date of birth
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * Issuing authority
         * @type {string || null}
         */
        this.IssueAuthority = null;

        /**
         * Validity period
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * ID number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Place of issue
         * @type {string || null}
         */
        this.IssueAddress = null;

        /**
         * Number of issues
         * @type {string || null}
         */
        this.IssueNumber = null;

        /**
         * Document type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Base64-encoded profile photo, which is returned only when `RetProfile` is set to `True`
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.EnglishName = 'EnglishName' in params ? params.EnglishName : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.IssueAuthority = 'IssueAuthority' in params ? params.IssueAuthority : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.IssueAddress = 'IssueAddress' in params ? params.IssueAddress : null;
        this.IssueNumber = 'IssueNumber' in params ? params.IssueNumber : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Non-tax revenue items
 * @class
 */
class NonTaxItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Item code
         * @type {string || null}
         */
        this.ItemID = null;

        /**
         * Item name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Unit
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * Quantity
         * @type {string || null}
         */
        this.Quantity = null;

        /**
         * Standard
         * @type {string || null}
         */
        this.Standard = null;

        /**
         * Amount
         * @type {string || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemID = 'ItemID' in params ? params.ItemID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.Standard = 'Standard' in params ? params.Standard : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * Toll receipt
 * @class
 */
class TollInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * Invoice title
         * @type {string || null}
         */
        this.Title = null;

        /**
         * Invoice code
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Invoice number
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Total amount (in figures)
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Invoice type
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Date
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Time
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Entrance
         * @type {string || null}
         */
        this.Entrance = null;

        /**
         * Exit
         * @type {string || null}
         */
        this.Exit = null;

        /**
         * Highway mark (0: No, 1: Yes)
         * @type {number || null}
         */
        this.HighwayMark = null;

        /**
         * Whether there is a QR code (0: No, 1: Yes)
         * @type {number || null}
         */
        this.QRCodeMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Entrance = 'Entrance' in params ? params.Entrance : null;
        this.Exit = 'Exit' in params ? params.Exit : null;
        this.HighwayMark = 'HighwayMark' in params ? params.HighwayMark : null;
        this.QRCodeMark = 'QRCodeMark' in params ? params.QRCodeMark : null;

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
 * VinOCR request structure.
 * @class
 */
class VinOCRRequest extends  AbstractModel {
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
         * Card Warning Information

-9101 Alarm for covered certificate,
-9102 Alarm for photocopied certificate,
-9103 Alarm for photographed certificate,
-9104 Alarm for PS certificate,
-9107 Alarm for reflective certificate,
-9108 Alarm for blurry image,
-9109 This capability is not enabled.
         * @type {Array.<number> || null}
         */
        this.WarnCardInfos = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.WarnCardInfos = 'WarnCardInfos' in params ? params.WarnCardInfos : null;
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
 * RecognizePhilippinesUMIDOCR request structure.
 * @class
 */
class RecognizePhilippinesUMIDOCRRequest extends  AbstractModel {
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

module.exports = {
    InvoiceItem: InvoiceItem,
    HKIDCardOCRRequest: HKIDCardOCRRequest,
    RecognizePhilippinesDrivingLicenseOCRRequest: RecognizePhilippinesDrivingLicenseOCRRequest,
    WordItem: WordItem,
    MLIDPassportOCRRequest: MLIDPassportOCRRequest,
    ItemInfo: ItemInfo,
    SmartStructuralOCRV2Request: SmartStructuralOCRV2Request,
    OtherInvoiceList: OtherInvoiceList,
    RecognizeMacaoIDCardOCRResponse: RecognizeMacaoIDCardOCRResponse,
    PermitOCRResponse: PermitOCRResponse,
    Rect: Rect,
    LicensePlateInfo: LicensePlateInfo,
    VatRollItem: VatRollItem,
    HmtResidentPermitOCRResponse: HmtResidentPermitOCRResponse,
    FlightItem: FlightItem,
    Value: Value,
    SealInfo: SealInfo,
    RecognizePhilippinesVoteIDOCRRequest: RecognizePhilippinesVoteIDOCRRequest,
    RecognizeKoreanDrivingLicenseOCRRequest: RecognizeKoreanDrivingLicenseOCRRequest,
    OtherInvoiceItem: OtherInvoiceItem,
    TextDetection: TextDetection,
    VatInvoiceItemInfo: VatInvoiceItemInfo,
    MainlandPermitOCRRequest: MainlandPermitOCRRequest,
    RecognizePhilippinesTinIDOCRResponse: RecognizePhilippinesTinIDOCRResponse,
    DetectedWords: DetectedWords,
    TableCellInfo: TableCellInfo,
    ShippingInvoice: ShippingInvoice,
    LineInfo: LineInfo,
    GeneralMachineItem: GeneralMachineItem,
    GeneralAccurateOCRResponse: GeneralAccurateOCRResponse,
    HmtResidentPermitOCRRequest: HmtResidentPermitOCRRequest,
    BusInvoice: BusInvoice,
    RecognizeGeneralInvoiceRequest: RecognizeGeneralInvoiceRequest,
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    PermitOCRRequest: PermitOCRRequest,
    OtherInvoice: OtherInvoice,
    RecognizePhilippinesDrivingLicenseOCRResponse: RecognizePhilippinesDrivingLicenseOCRResponse,
    BankCardOCRRequest: BankCardOCRRequest,
    RecognizePhilippinesSssIDOCRRequest: RecognizePhilippinesSssIDOCRRequest,
    Key: Key,
    IDCardOCRResponse: IDCardOCRResponse,
    MLIDCardOCRRequest: MLIDCardOCRRequest,
    LicensePlateOCRResponse: LicensePlateOCRResponse,
    HKIDCardOCRResponse: HKIDCardOCRResponse,
    GroupInfo: GroupInfo,
    QuotaInvoice: QuotaInvoice,
    RecognizeThaiIDCardOCRResponse: RecognizeThaiIDCardOCRResponse,
    SingleInvoiceItem: SingleInvoiceItem,
    VatInvoiceInfo: VatInvoiceInfo,
    RecognizePhilippinesSssIDOCRResponse: RecognizePhilippinesSssIDOCRResponse,
    MachinePrintedInvoice: MachinePrintedInvoice,
    RecognizeKoreanIDCardOCRResponse: RecognizeKoreanIDCardOCRResponse,
    RecognizePhilippinesUMIDOCRResponse: RecognizePhilippinesUMIDOCRResponse,
    TrainTicket: TrainTicket,
    RecognizeThaiIDCardOCRRequest: RecognizeThaiIDCardOCRRequest,
    MotorVehicleSaleInvoice: MotorVehicleSaleInvoice,
    TableOCRRequest: TableOCRRequest,
    PassportRecognizeInfos: PassportRecognizeInfos,
    RecognizeSingaporeIDCardOCRRequest: RecognizeSingaporeIDCardOCRRequest,
    TaxiTicket: TaxiTicket,
    LicensePlateOCRRequest: LicensePlateOCRRequest,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,
    VatElectronicInfo: VatElectronicInfo,
    IDCardOCRRequest: IDCardOCRRequest,
    GeneralAccurateOCRRequest: GeneralAccurateOCRRequest,
    UsedCarPurchaseInvoice: UsedCarPurchaseInvoice,
    RecognizeMacaoIDCardOCRRequest: RecognizeMacaoIDCardOCRRequest,
    NonTaxIncomeBill: NonTaxIncomeBill,
    MLIDPassportOCRResponse: MLIDPassportOCRResponse,
    AirTransport: AirTransport,
    RecognizeTableAccurateOCRRequest: RecognizeTableAccurateOCRRequest,
    Coord: Coord,
    SealOCRResponse: SealOCRResponse,
    RecognizeIndonesiaIDCardOCRResponse: RecognizeIndonesiaIDCardOCRResponse,
    TableInfo: TableInfo,
    VinOCRResponse: VinOCRResponse,
    RecognizeKoreanDrivingLicenseOCRResponse: RecognizeKoreanDrivingLicenseOCRResponse,
    VatElectronicItemInfo: VatElectronicItemInfo,
    RecognizePhilippinesVoteIDOCRResponse: RecognizePhilippinesVoteIDOCRResponse,
    ItemCoord: ItemCoord,
    RecognizeMainlandIDCardOCRRequest: RecognizeMainlandIDCardOCRRequest,
    VatInvoiceRoll: VatInvoiceRoll,
    Polygon: Polygon,
    TextDetectionResult: TextDetectionResult,
    RecognizeGeneralInvoiceResponse: RecognizeGeneralInvoiceResponse,
    RecognizeSingaporeIDCardOCRResponse: RecognizeSingaporeIDCardOCRResponse,
    SealOCRRequest: SealOCRRequest,
    MedicalInvoice: MedicalInvoice,
    TextTable: TextTable,
    RecognizeTableAccurateOCRResponse: RecognizeTableAccurateOCRResponse,
    SmartStructuralOCRV2Response: SmartStructuralOCRV2Response,
    RecognizeMainlandIDCardOCRResponse: RecognizeMainlandIDCardOCRResponse,
    MainlandPermitOCRResponse: MainlandPermitOCRResponse,
    NonTaxItem: NonTaxItem,
    TollInvoice: TollInvoice,
    TableOCRResponse: TableOCRResponse,
    DetectedWordCoordPoint: DetectedWordCoordPoint,
    RecognizeKoreanIDCardOCRRequest: RecognizeKoreanIDCardOCRRequest,
    RecognizeIndonesiaIDCardOCRRequest: RecognizeIndonesiaIDCardOCRRequest,
    VinOCRRequest: VinOCRRequest,
    MLIDCardOCRResponse: MLIDCardOCRResponse,
    RecognizePhilippinesTinIDOCRRequest: RecognizePhilippinesTinIDOCRRequest,
    BankCardOCRResponse: BankCardOCRResponse,
    RecognizePhilippinesUMIDOCRRequest: RecognizePhilippinesUMIDOCRRequest,

}
