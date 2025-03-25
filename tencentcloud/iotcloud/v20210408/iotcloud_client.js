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
const DeleteProductRequest = models.DeleteProductRequest;
const DescribePrivateCABindedProductsRequest = models.DescribePrivateCABindedProductsRequest;
const DescribePrivateCAsResponse = models.DescribePrivateCAsResponse;
const UpdateDevicesEnableStateResponse = models.UpdateDevicesEnableStateResponse;
const DescribePrivateCARequest = models.DescribePrivateCARequest;
const DescribeProductCAResponse = models.DescribeProductCAResponse;
const DeleteDeviceShadowResponse = models.DeleteDeviceShadowResponse;
const UpdatePrivateCAResponse = models.UpdatePrivateCAResponse;
const DeletePrivateCAResponse = models.DeletePrivateCAResponse;
const DeviceTag = models.DeviceTag;
const UpdatePrivateCARequest = models.UpdatePrivateCARequest;
const DescribePrivateCABindedProductsResponse = models.DescribePrivateCABindedProductsResponse;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const DeleteProductResponse = models.DeleteProductResponse;
const CreatePrivateCAResponse = models.CreatePrivateCAResponse;
const DescribeProductsRequest = models.DescribeProductsRequest;
const BindProductInfo = models.BindProductInfo;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const DeleteDeviceShadowRequest = models.DeleteDeviceShadowRequest;
const SetProductsForbiddenStatusRequest = models.SetProductsForbiddenStatusRequest;
const ProductInfo = models.ProductInfo;
const DescribeProductCARequest = models.DescribeProductCARequest;
const CreatePrivateCARequest = models.CreatePrivateCARequest;
const DescribeProductResponse = models.DescribeProductResponse;
const DescribeDeviceRequest = models.DescribeDeviceRequest;
const SetProductsForbiddenStatusResponse = models.SetProductsForbiddenStatusResponse;
const DeviceLabel = models.DeviceLabel;
const UpdateProductDynamicRegisterRequest = models.UpdateProductDynamicRegisterRequest;
const CertInfo = models.CertInfo;
const ProductMetadata = models.ProductMetadata;
const DescribePrivateCAsRequest = models.DescribePrivateCAsRequest;
const CreateProductResponse = models.CreateProductResponse;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const UpdateDeviceLogLevelRequest = models.UpdateDeviceLogLevelRequest;
const DescribePrivateCAResponse = models.DescribePrivateCAResponse;
const UpdateDeviceLogLevelResponse = models.UpdateDeviceLogLevelResponse;
const CreateDeviceResponse = models.CreateDeviceResponse;
const UpdateDevicesEnableStateRequest = models.UpdateDevicesEnableStateRequest;
const CreateDeviceRequest = models.CreateDeviceRequest;
const DescribeProductRequest = models.DescribeProductRequest;
const DescribeProductsResponse = models.DescribeProductsResponse;
const CreateProductRequest = models.CreateProductRequest;
const Attribute = models.Attribute;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const DeletePrivateCARequest = models.DeletePrivateCARequest;
const DeviceInfo = models.DeviceInfo;
const ProductProperties = models.ProductProperties;
const DescribeDeviceResponse = models.DescribeDeviceResponse;
const UpdateProductDynamicRegisterResponse = models.UpdateProductDynamicRegisterResponse;


/**
 * iotcloud client
 * @class
 */
class IotcloudClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iotcloud.intl.tencentcloudapi.com", "2021-04-08", credential, region, profile);
    }
    
    /**
     * This API is used to obtain the product list. 
     * @param {DescribeProductsRequest} req
     * @param {function(string, DescribeProductsResponse):void} cb
     * @public
     */
    DescribeProducts(req, cb) {
        let resp = new DescribeProductsResponse();
        this.request("DescribeProducts", req, resp, cb);
    }

    /**
     * This API is used to query the products bound to a private CA certificate.
     * @param {DescribePrivateCABindedProductsRequest} req
     * @param {function(string, DescribePrivateCABindedProductsResponse):void} cb
     * @public
     */
    DescribePrivateCABindedProducts(req, cb) {
        let resp = new DescribePrivateCABindedProductsResponse();
        this.request("DescribePrivateCABindedProducts", req, resp, cb);
    }

    /**
     * This API is used to get the list of IoT Hub devices. 
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        let resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, cb);
    }

    /**
     * This API is used to create a new IoT communication product. 
     * @param {CreateProductRequest} req
     * @param {function(string, CreateProductResponse):void} cb
     * @public
     */
    CreateProduct(req, cb) {
        let resp = new CreateProductResponse();
        this.request("CreateProduct", req, resp, cb);
    }

    /**
     * This API is used to delete a device shadow. 
     * @param {DeleteDeviceShadowRequest} req
     * @param {function(string, DeleteDeviceShadowResponse):void} cb
     * @public
     */
    DeleteDeviceShadow(req, cb) {
        let resp = new DeleteDeviceShadowResponse();
        this.request("DeleteDeviceShadow", req, resp, cb);
    }

    /**
     * This API is used to create an IoT Hub device. 
     * @param {CreateDeviceRequest} req
     * @param {function(string, CreateDeviceResponse):void} cb
     * @public
     */
    CreateDevice(req, cb) {
        let resp = new CreateDeviceResponse();
        this.request("CreateDevice", req, resp, cb);
    }

    /**
     * This API is used to query the CA certificates bound to a product.
     * @param {DescribeProductCARequest} req
     * @param {function(string, DescribeProductCAResponse):void} cb
     * @public
     */
    DescribeProductCA(req, cb) {
        let resp = new DescribeProductCAResponse();
        this.request("DescribeProductCA", req, resp, cb);
    }

    /**
     * This API is used to query private CA certificate details.
     * @param {DescribePrivateCARequest} req
     * @param {function(string, DescribePrivateCAResponse):void} cb
     * @public
     */
    DescribePrivateCA(req, cb) {
        let resp = new DescribePrivateCAResponse();
        this.request("DescribePrivateCA", req, resp, cb);
    }

    /**
     * This API is used to create a private CA certificate.
     * @param {CreatePrivateCARequest} req
     * @param {function(string, CreatePrivateCAResponse):void} cb
     * @public
     */
    CreatePrivateCA(req, cb) {
        let resp = new CreatePrivateCAResponse();
        this.request("CreatePrivateCA", req, resp, cb);
    }

    /**
     * This API is used to delete an IoT Hub product.
     * @param {DeleteProductRequest} req
     * @param {function(string, DeleteProductResponse):void} cb
     * @public
     */
    DeleteProduct(req, cb) {
        let resp = new DeleteProductResponse();
        this.request("DeleteProduct", req, resp, cb);
    }

    /**
     * This API is used to enable or disable multiple products at a time.
     * @param {SetProductsForbiddenStatusRequest} req
     * @param {function(string, SetProductsForbiddenStatusResponse):void} cb
     * @public
     */
    SetProductsForbiddenStatus(req, cb) {
        let resp = new SetProductsForbiddenStatusResponse();
        this.request("SetProductsForbiddenStatus", req, resp, cb);
    }

    /**
     * This API is used to get the list of private CA certificates.
     * @param {DescribePrivateCAsRequest} req
     * @param {function(string, DescribePrivateCAsResponse):void} cb
     * @public
     */
    DescribePrivateCAs(req, cb) {
        let resp = new DescribePrivateCAsResponse();
        this.request("DescribePrivateCAs", req, resp, cb);
    }

    /**
     * This API is used to delete a private CA certificate.
     * @param {DeletePrivateCARequest} req
     * @param {function(string, DeletePrivateCAResponse):void} cb
     * @public
     */
    DeletePrivateCA(req, cb) {
        let resp = new DeletePrivateCAResponse();
        this.request("DeletePrivateCA", req, resp, cb);
    }

    /**
     * This API is used to query device details.
     * @param {DescribeDeviceRequest} req
     * @param {function(string, DescribeDeviceResponse):void} cb
     * @public
     */
    DescribeDevice(req, cb) {
        let resp = new DescribeDeviceResponse();
        this.request("DescribeDevice", req, resp, cb);
    }

    /**
     * This API is used to enable or disable multiple devices. 
     * @param {UpdateDevicesEnableStateRequest} req
     * @param {function(string, UpdateDevicesEnableStateResponse):void} cb
     * @public
     */
    UpdateDevicesEnableState(req, cb) {
        let resp = new UpdateDevicesEnableStateResponse();
        this.request("UpdateDevicesEnableState", req, resp, cb);
    }

    /**
     * This API is used to delete an IoT Hub device. 
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        let resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }

    /**
     * This API is used to query product details.
     * @param {DescribeProductRequest} req
     * @param {function(string, DescribeProductResponse):void} cb
     * @public
     */
    DescribeProduct(req, cb) {
        let resp = new DescribeProductResponse();
        this.request("DescribeProduct", req, resp, cb);
    }

    /**
     * This API is used to update a private CA certificate.
     * @param {UpdatePrivateCARequest} req
     * @param {function(string, UpdatePrivateCAResponse):void} cb
     * @public
     */
    UpdatePrivateCA(req, cb) {
        let resp = new UpdatePrivateCAResponse();
        this.request("UpdatePrivateCA", req, resp, cb);
    }

    /**
     * This API is used to set the device log level.  
     * @param {UpdateDeviceLogLevelRequest} req
     * @param {function(string, UpdateDeviceLogLevelResponse):void} cb
     * @public
     */
    UpdateDeviceLogLevel(req, cb) {
        let resp = new UpdateDeviceLogLevelResponse();
        this.request("UpdateDeviceLogLevel", req, resp, cb);
    }

    /**
     * This API is used to update the configuration of product dynamic registration. 
     * @param {UpdateProductDynamicRegisterRequest} req
     * @param {function(string, UpdateProductDynamicRegisterResponse):void} cb
     * @public
     */
    UpdateProductDynamicRegister(req, cb) {
        let resp = new UpdateProductDynamicRegisterResponse();
        this.request("UpdateProductDynamicRegister", req, resp, cb);
    }


}
module.exports = IotcloudClient;
