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
 * DeleteProduct request structure.
 * @class
 */
class DeleteProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the product to delete
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Skey, which is required to delete a LoRa product
         * @type {string || null}
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Skey = 'Skey' in params ? params.Skey : null;

    }
}

/**
 * DescribePrivateCABindedProducts request structure.
 * @class
 */
class DescribePrivateCABindedProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate name
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Offset for query
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of records to return, which is 20 by default and cannot exceed 200
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribePrivateCAs response structure.
 * @class
 */
class DescribePrivateCAsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of private CA certificates
         * @type {Array.<CertInfo> || null}
         */
        this.CAs = null;

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

        if (params.CAs) {
            this.CAs = new Array();
            for (let z in params.CAs) {
                let obj = new CertInfo();
                obj.deserialize(params.CAs[z]);
                this.CAs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDevicesEnableState response structure.
 * @class
 */
class UpdateDevicesEnableStateResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrivateCA request structure.
 * @class
 */
class DescribePrivateCARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the private CA certificate to query
         * @type {string || null}
         */
        this.CertName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertName = 'CertName' in params ? params.CertName : null;

    }
}

/**
 * DescribeProductCA response structure.
 * @class
 */
class DescribeProductCAResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of CA certificates bound to the product
         * @type {Array.<CertInfo> || null}
         */
        this.CAs = null;

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

        if (params.CAs) {
            this.CAs = new Array();
            for (let z in params.CAs) {
                let obj = new CertInfo();
                obj.deserialize(params.CAs[z]);
                this.CAs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDeviceShadow response structure.
 * @class
 */
class DeleteDeviceShadowResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdatePrivateCA response structure.
 * @class
 */
class UpdatePrivateCAResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePrivateCA response structure.
 * @class
 */
class DeletePrivateCAResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Device attribute
 * @class
 */
class DeviceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute name
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * Attribute value type. `1`: integer; `2`: string
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Attribute value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Attribute description
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * UpdatePrivateCA request structure.
 * @class
 */
class UpdatePrivateCARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CA certificate name
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * CA certificate content
         * @type {string || null}
         */
        this.CertText = null;

        /**
         * Content verifying the CA certificate
         * @type {string || null}
         */
        this.VerifyCertText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertText = 'CertText' in params ? params.CertText : null;
        this.VerifyCertText = 'VerifyCertText' in params ? params.VerifyCertText : null;

    }
}

/**
 * DescribePrivateCABindedProducts response structure.
 * @class
 */
class DescribePrivateCABindedProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the products bound to the private CA certificate
         * @type {Array.<BindProductInfo> || null}
         */
        this.Products = null;

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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new BindProductInfo();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDevice request structure.
 * @class
 */
class DeleteDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the product to which the device belongs
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Name of the device to delete
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * Skey, which is required to delete a LoRa device or LoRa gateway device
         * @type {string || null}
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Skey = 'Skey' in params ? params.Skey : null;

    }
}

/**
 * DeleteProduct response structure.
 * @class
 */
class DeleteProductResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrivateCA response structure.
 * @class
 */
class CreatePrivateCAResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProducts request structure.
 * @class
 */
class DescribeProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset, starting from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of entries returned per page. Valid range: 10–250.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Sub-product information
 * @class
 */
class BindProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.ProductName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

    }
}

/**
 * DescribeDevices response structure.
 * @class
 */
class DescribeDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of the devices returned
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of device details
         * @type {Array.<DeviceInfo> || null}
         */
        this.Devices = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceInfo();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDeviceShadow request structure.
 * @class
 */
class DeleteDeviceShadowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Device name
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * SetProductsForbiddenStatus request structure.
 * @class
 */
class SetProductsForbiddenStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of products to enable or disable
         * @type {Array.<string> || null}
         */
        this.ProductId = null;

        /**
         * `0`: enable; `1`: disable
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Product details
 * @class
 */
class ProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Product metadata
         * @type {ProductMetadata || null}
         */
        this.ProductMetadata = null;

        /**
         * Product properties
         * @type {ProductProperties || null}
         */
        this.ProductProperties = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

        if (params.ProductMetadata) {
            let obj = new ProductMetadata();
            obj.deserialize(params.ProductMetadata)
            this.ProductMetadata = obj;
        }

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }

    }
}

/**
 * DescribeProductCA request structure.
 * @class
 */
class DescribeProductCARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * CreatePrivateCA request structure.
 * @class
 */
class CreatePrivateCARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CA certificate name
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * CA certificate content
         * @type {string || null}
         */
        this.CertText = null;

        /**
         * Content verifying the CA certificate
         * @type {string || null}
         */
        this.VerifyCertText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertText = 'CertText' in params ? params.CertText : null;
        this.VerifyCertText = 'VerifyCertText' in params ? params.VerifyCertText : null;

    }
}

/**
 * DescribeProduct response structure.
 * @class
 */
class DescribeProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Product metadata
         * @type {ProductMetadata || null}
         */
        this.ProductMetadata = null;

        /**
         * Product properties
         * @type {ProductProperties || null}
         */
        this.ProductProperties = null;

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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

        if (params.ProductMetadata) {
            let obj = new ProductMetadata();
            obj.deserialize(params.ProductMetadata)
            this.ProductMetadata = obj;
        }

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevice request structure.
 * @class
 */
class DescribeDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Device name
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * SetProductsForbiddenStatus response structure.
 * @class
 */
class SetProductsForbiddenStatusResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Device tags
 * @class
 */
class DeviceLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag value
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * UpdateProductDynamicRegister request structure.
 * @class
 */
class UpdateProductDynamicRegisterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Dynamic registration type. Valid values: 0 - disabled; 1 - pre-create device; 2 - auto-create device.
         * @type {number || null}
         */
        this.RegisterType = null;

        /**
         * Maximum dynamically registered devices
         * @type {number || null}
         */
        this.RegisterLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.RegisterType = 'RegisterType' in params ? params.RegisterType : null;
        this.RegisterLimit = 'RegisterLimit' in params ? params.RegisterLimit : null;

    }
}

/**
 * X.509 certificate information
 * @class
 */
class CertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate name
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Hex sequence number of a certificate
         * @type {string || null}
         */
        this.CertSN = null;

        /**
         * Certificate issuer
         * @type {string || null}
         */
        this.IssuerName = null;

        /**
         * Certificate subject
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * Certificate creation time (timestamp in milliseconds)
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Certificate effective time (timestamp in milliseconds)
         * @type {number || null}
         */
        this.EffectiveTime = null;

        /**
         * Certificate expiration time (timestamp in milliseconds)
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * X.509 certificate content
         * @type {string || null}
         */
        this.CertText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertSN = 'CertSN' in params ? params.CertSN : null;
        this.IssuerName = 'IssuerName' in params ? params.IssuerName : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.CertText = 'CertText' in params ? params.CertText : null;

    }
}

/**
 * Product metadata
 * @class
 */
class ProductMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product creation time
         * @type {number || null}
         */
        this.CreationDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationDate = 'CreationDate' in params ? params.CreationDate : null;

    }
}

/**
 * DescribePrivateCAs request structure.
 * @class
 */
class DescribePrivateCAsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * CreateProduct response structure.
 * @class
 */
class CreateProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Product ID, the globally unique ID assigned by Tencent Cloud.
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Product properties
         * @type {ProductProperties || null}
         */
        this.ProductProperties = null;

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
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevices request structure.
 * @class
 */
class DescribeDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the product whose devices are queried
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Offset, which starts from 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Page size. Value range: 10-250
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Device firmware version. If no value is passed in, devices of all firmware versions are returned. If `None-FirmwareVersion` is passed in, devices without version numbers are returned.
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * Device name to query
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * Whether to query enabled or disabled devices. `0`: disabled devices; `1`: enabled devices. By default, both enabled and disabled devices are queried.
         * @type {number || null}
         */
        this.EnableState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

    }
}

/**
 * UpdateDeviceLogLevel request structure.
 * @class
 */
class UpdateDeviceLogLevelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Device name
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * Log level. `0`: disable; `1`: error; `2`: warning; `3`: information; `4`: debugging
         * @type {number || null}
         */
        this.LogLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;

    }
}

/**
 * DescribePrivateCA response structure.
 * @class
 */
class DescribePrivateCAResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of the private CA certificate
         * @type {CertInfo || null}
         */
        this.CA = null;

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

        if (params.CA) {
            let obj = new CertInfo();
            obj.deserialize(params.CA)
            this.CA = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDeviceLogLevel response structure.
 * @class
 */
class UpdateDeviceLogLevelResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDevice response structure.
 * @class
 */
class CreateDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Device name
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * Base64-encoded symmetric encryption key, which is returned if symmetric encryption is used
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * Device certificate, which authenticates client identity during TLS connection establishment and is returned if asymmetric encryption is used
         * @type {string || null}
         */
        this.DeviceCert = null;

        /**
         * Device private key, which authenticates client identity during TLS connection establishment and is returned if asymmetric encryption is used. Tencent Cloud does not store the key. Please store it by yourself properly.
         * @type {string || null}
         */
        this.DevicePrivateKey = null;

        /**
         * DevEUI of a LoRa device, which is returned for a LoRa device
         * @type {string || null}
         */
        this.LoraDevEui = null;

        /**
         * MoteType of a LoRa device, which is returned for a LoRa device
         * @type {number || null}
         */
        this.LoraMoteType = null;

        /**
         * AppKey of a LoRa device, which is returned for a LoRa device
         * @type {string || null}
         */
        this.LoraAppKey = null;

        /**
         * NwkKey of a LoRa device, which is returned for a LoRa device
         * @type {string || null}
         */
        this.LoraNwkKey = null;

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
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePrivateKey = 'DevicePrivateKey' in params ? params.DevicePrivateKey : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.LoraAppKey = 'LoraAppKey' in params ? params.LoraAppKey : null;
        this.LoraNwkKey = 'LoraNwkKey' in params ? params.LoraNwkKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDevicesEnableState request structure.
 * @class
 */
class UpdateDevicesEnableStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the product to which the device belongs
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Device names
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

        /**
         * New status of the devices. `0`: disabled; `1`: enabled
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateDevice request structure.
 * @class
 */
class CreateDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID, globally unique ID assigned by Tencent Cloud during product creation
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Device name. It is a string of 1 to 48 characters. Letters, digits, and :_- are allowed.
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * Device attribute
         * @type {Attribute || null}
         */
        this.Attribute = null;

        /**
         * Whether to use custom PSK, no by default
         * @type {string || null}
         */
        this.DefinedPsk = null;

        /**
         * ISP, required for a NB-IoT product. `1`: China Telecom; `2`: China Mobile; `3`: China Unicom
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * IMEI, required for a NB-IoT product
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * DevEUI of a LoRa device, required when you create a LoRa device
         * @type {string || null}
         */
        this.LoraDevEui = null;

        /**
         * MoteType of a LoRa device
         * @type {number || null}
         */
        this.LoraMoteType = null;

        /**
         * Skey, required when you create a LoRa device
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * AppKey of a LoRa device
         * @type {string || null}
         */
        this.LoraAppKey = null;

        /**
         * Private CA certificate
         * @type {string || null}
         */
        this.TlsCrt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

        if (params.Attribute) {
            let obj = new Attribute();
            obj.deserialize(params.Attribute)
            this.Attribute = obj;
        }
        this.DefinedPsk = 'DefinedPsk' in params ? params.DefinedPsk : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.LoraAppKey = 'LoraAppKey' in params ? params.LoraAppKey : null;
        this.TlsCrt = 'TlsCrt' in params ? params.TlsCrt : null;

    }
}

/**
 * DescribeProduct request structure.
 * @class
 */
class DescribeProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DescribeProducts response structure.
 * @class
 */
class DescribeProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of products
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of product details
         * @type {Array.<ProductInfo> || null}
         */
        this.Products = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new ProductInfo();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProduct request structure.
 * @class
 */
class CreateProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name, which cannot be same as that of an existing product. Naming rule: [a-zA-Z0-9:_-]{1,32}.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Product properties
         * @type {ProductProperties || null}
         */
        this.ProductProperties = null;

        /**
         * Skey, which is required to create a CLAA product.
         * @type {string || null}
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }
        this.Skey = 'Skey' in params ? params.Skey : null;

    }
}

/**
 * Device attributes
 * @class
 */
class Attribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attribute list
         * @type {Array.<DeviceTag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DeleteDevice response structure.
 * @class
 */
class DeleteDeviceResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePrivateCA request structure.
 * @class
 */
class DeletePrivateCARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Private CA certificate name
         * @type {string || null}
         */
        this.CertName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertName = 'CertName' in params ? params.CertName : null;

    }
}

/**
 * Device details
 * @class
 */
class DeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Device name
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * Whether the device is online. `0`: offline; `1`: online
         * @type {number || null}
         */
        this.Online = null;

        /**
         * Device login time
         * @type {number || null}
         */
        this.LoginTime = null;

        /**
         * Device version
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Device certificate, which is returned for devices that use certificates for authentication
         * @type {string || null}
         */
        this.DeviceCert = null;

        /**
         * Device key, which is returned for devices that use keys for authentication
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * Device attribute
         * @type {Array.<DeviceTag> || null}
         */
        this.Tags = null;

        /**
         * Device type
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * International Mobile Equipment Identity (IMEI)
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * ISP
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * Device ID at the NB-IoT ISP
         * @type {string || null}
         */
        this.NbiotDeviceID = null;

        /**
         * IP address
         * @type {number || null}
         */
        this.ConnIP = null;

        /**
         * Last updated time of the device
         * @type {number || null}
         */
        this.LastUpdateTime = null;

        /**
         * DevEUI of a LoRa device
         * @type {string || null}
         */
        this.LoraDevEui = null;

        /**
         * MoteType of a LoRa device
         * @type {number || null}
         */
        this.LoraMoteType = null;

        /**
         * The first time when the device went online
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.FirstOnlineTime = null;

        /**
         * The last time when the device went offline
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.LastOfflineTime = null;

        /**
         * Device creation time
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Device log level
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.LogLevel = null;

        /**
         * Whether the device certificate has been obtained. `0`: no; `1`: yes
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.CertState = null;

        /**
         * Whether the device is enabled. `0`: disabled; `1`: enabled
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.EnableState = null;

        /**
         * Device tags
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<DeviceLabel> || null}
         */
        this.Labels = null;

        /**
         * IP address of the MQTT client
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ClientIP = null;

        /**
         * Time of last OTA update
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.FirmwareUpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.NbiotDeviceID = 'NbiotDeviceID' in params ? params.NbiotDeviceID : null;
        this.ConnIP = 'ConnIP' in params ? params.ConnIP : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.FirstOnlineTime = 'FirstOnlineTime' in params ? params.FirstOnlineTime : null;
        this.LastOfflineTime = 'LastOfflineTime' in params ? params.LastOfflineTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.CertState = 'CertState' in params ? params.CertState : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new DeviceLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.FirmwareUpdateTime = 'FirmwareUpdateTime' in params ? params.FirmwareUpdateTime : null;

    }
}

/**
 * Product properties
 * @class
 */
class ProductProperties extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product description
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * Authentication type. `1` (default): certificate; `2`: signature
         * @type {string || null}
         */
        this.EncryptionType = null;

        /**
         * Product region. Valid value: `gz` (Guangzhou)
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Product type. Valid values:
`0` (default): general; `2`: NB-IoT; `3`: LoRa gateway; `4`: LoRa; `5`: general gateway
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * Data format. Valid values: `json` (default), `custom`
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Platform of the product. Default value: `0`
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * AppEUI at the LoRa product operator, required only for LoRa products
         * @type {string || null}
         */
        this.Appeui = null;

        /**
         * ID of the Thing Specification Language (TSL) model bound to the product. `-1` means no models are bound.
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * Name of the TSL model bound to the product
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * Product key, which is specific to suite products
         * @type {string || null}
         */
        this.ProductKey = null;

        /**
         * Dynamic registration type. `0`: disable; `1`: preset device names; `2`: generate device names dynamically
         * @type {number || null}
         */
        this.RegisterType = null;

        /**
         * Dynamic registration product key
         * @type {string || null}
         */
        this.ProductSecret = null;

        /**
         * The maximum number of devices that can be dynamically created when `RegisterType` is set to `2`
         * @type {number || null}
         */
        this.RegisterLimit = null;

        /**
         * Original product ID of a transferred product. This parameter is empty for products that are not transferred.
         * @type {string || null}
         */
        this.OriginProductId = null;

        /**
         * Private CA certificate name
         * @type {string || null}
         */
        this.PrivateCAName = null;

        /**
         * Original user ID of a transferred product. This parameter is empty for products that are not transferred.
         * @type {number || null}
         */
        this.OriginUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.EncryptionType = 'EncryptionType' in params ? params.EncryptionType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Appeui = 'Appeui' in params ? params.Appeui : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.ProductKey = 'ProductKey' in params ? params.ProductKey : null;
        this.RegisterType = 'RegisterType' in params ? params.RegisterType : null;
        this.ProductSecret = 'ProductSecret' in params ? params.ProductSecret : null;
        this.RegisterLimit = 'RegisterLimit' in params ? params.RegisterLimit : null;
        this.OriginProductId = 'OriginProductId' in params ? params.OriginProductId : null;
        this.PrivateCAName = 'PrivateCAName' in params ? params.PrivateCAName : null;
        this.OriginUserId = 'OriginUserId' in params ? params.OriginUserId : null;

    }
}

/**
 * DescribeDevice response structure.
 * @class
 */
class DescribeDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Device name
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * Whether the device is online. `0`: offline; `1`: online
         * @type {number || null}
         */
        this.Online = null;

        /**
         * Device login time
         * @type {number || null}
         */
        this.LoginTime = null;

        /**
         * Device firmware version
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Last updated time of the device
         * @type {number || null}
         */
        this.LastUpdateTime = null;

        /**
         * Device certificate
         * @type {string || null}
         */
        this.DeviceCert = null;

        /**
         * Device key
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * Device attribute
         * @type {Array.<DeviceTag> || null}
         */
        this.Tags = null;

        /**
         * Device type
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * International Mobile Equipment Identity (IMEI)
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * ISP
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * IP address
         * @type {number || null}
         */
        this.ConnIP = null;

        /**
         * Device ID at the NB-IoT ISP
         * @type {string || null}
         */
        this.NbiotDeviceID = null;

        /**
         * DevEUI of a LoRa device
         * @type {string || null}
         */
        this.LoraDevEui = null;

        /**
         * MoteType of a LoRa device
         * @type {number || null}
         */
        this.LoraMoteType = null;

        /**
         * SDK log level of the device
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.LogLevel = null;

        /**
         * The first time when the device went online
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.FirstOnlineTime = null;

        /**
         * The last time when the device went offline
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.LastOfflineTime = null;

        /**
         * Device creation time
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Whether the device certificate has been obtained. `0`: no; `1`: yes
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.CertState = null;

        /**
         * Whether the device is enabled
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.EnableState = null;

        /**
         * Device tags
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<DeviceLabel> || null}
         */
        this.Labels = null;

        /**
         * IP address of the MQTT client
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.ClientIP = null;

        /**
         * Firmware update time of the device
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.FirmwareUpdateTime = null;

        /**
         * Account ID of the creator
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CreateUserId = null;

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
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.ConnIP = 'ConnIP' in params ? params.ConnIP : null;
        this.NbiotDeviceID = 'NbiotDeviceID' in params ? params.NbiotDeviceID : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.FirstOnlineTime = 'FirstOnlineTime' in params ? params.FirstOnlineTime : null;
        this.LastOfflineTime = 'LastOfflineTime' in params ? params.LastOfflineTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.CertState = 'CertState' in params ? params.CertState : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new DeviceLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.FirmwareUpdateTime = 'FirmwareUpdateTime' in params ? params.FirmwareUpdateTime : null;
        this.CreateUserId = 'CreateUserId' in params ? params.CreateUserId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateProductDynamicRegister response structure.
 * @class
 */
class UpdateProductDynamicRegisterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dynamic registration type. Valid values: 0 - disabled; 1 - pre-create device; 2 - auto-create device.
         * @type {number || null}
         */
        this.RegisterType = null;

        /**
         * Product key for dynamic registration
         * @type {string || null}
         */
        this.ProductSecret = null;

        /**
         * Maximum dynamically registered devices
         * @type {number || null}
         */
        this.RegisterLimit = null;

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
        this.RegisterType = 'RegisterType' in params ? params.RegisterType : null;
        this.ProductSecret = 'ProductSecret' in params ? params.ProductSecret : null;
        this.RegisterLimit = 'RegisterLimit' in params ? params.RegisterLimit : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DeleteProductRequest: DeleteProductRequest,
    DescribePrivateCABindedProductsRequest: DescribePrivateCABindedProductsRequest,
    DescribePrivateCAsResponse: DescribePrivateCAsResponse,
    UpdateDevicesEnableStateResponse: UpdateDevicesEnableStateResponse,
    DescribePrivateCARequest: DescribePrivateCARequest,
    DescribeProductCAResponse: DescribeProductCAResponse,
    DeleteDeviceShadowResponse: DeleteDeviceShadowResponse,
    UpdatePrivateCAResponse: UpdatePrivateCAResponse,
    DeletePrivateCAResponse: DeletePrivateCAResponse,
    DeviceTag: DeviceTag,
    UpdatePrivateCARequest: UpdatePrivateCARequest,
    DescribePrivateCABindedProductsResponse: DescribePrivateCABindedProductsResponse,
    DeleteDeviceRequest: DeleteDeviceRequest,
    DeleteProductResponse: DeleteProductResponse,
    CreatePrivateCAResponse: CreatePrivateCAResponse,
    DescribeProductsRequest: DescribeProductsRequest,
    BindProductInfo: BindProductInfo,
    DescribeDevicesResponse: DescribeDevicesResponse,
    DeleteDeviceShadowRequest: DeleteDeviceShadowRequest,
    SetProductsForbiddenStatusRequest: SetProductsForbiddenStatusRequest,
    ProductInfo: ProductInfo,
    DescribeProductCARequest: DescribeProductCARequest,
    CreatePrivateCARequest: CreatePrivateCARequest,
    DescribeProductResponse: DescribeProductResponse,
    DescribeDeviceRequest: DescribeDeviceRequest,
    SetProductsForbiddenStatusResponse: SetProductsForbiddenStatusResponse,
    DeviceLabel: DeviceLabel,
    UpdateProductDynamicRegisterRequest: UpdateProductDynamicRegisterRequest,
    CertInfo: CertInfo,
    ProductMetadata: ProductMetadata,
    DescribePrivateCAsRequest: DescribePrivateCAsRequest,
    CreateProductResponse: CreateProductResponse,
    DescribeDevicesRequest: DescribeDevicesRequest,
    UpdateDeviceLogLevelRequest: UpdateDeviceLogLevelRequest,
    DescribePrivateCAResponse: DescribePrivateCAResponse,
    UpdateDeviceLogLevelResponse: UpdateDeviceLogLevelResponse,
    CreateDeviceResponse: CreateDeviceResponse,
    UpdateDevicesEnableStateRequest: UpdateDevicesEnableStateRequest,
    CreateDeviceRequest: CreateDeviceRequest,
    DescribeProductRequest: DescribeProductRequest,
    DescribeProductsResponse: DescribeProductsResponse,
    CreateProductRequest: CreateProductRequest,
    Attribute: Attribute,
    DeleteDeviceResponse: DeleteDeviceResponse,
    DeletePrivateCARequest: DeletePrivateCARequest,
    DeviceInfo: DeviceInfo,
    ProductProperties: ProductProperties,
    DescribeDeviceResponse: DescribeDeviceResponse,
    UpdateProductDynamicRegisterResponse: UpdateProductDynamicRegisterResponse,

}
