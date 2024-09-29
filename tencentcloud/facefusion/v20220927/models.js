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
 * Logo parameter
 * @class
 */
class LogoParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Coordinates of the logo image in the fusion result image. The logo image will be stretched according to the coordinates.
         * @type {FaceRect || null}
         */
        this.LogoRect = null;

        /**
         * Logo image URL
●Either the Base64 code or URL must be provided. If both are provided, URL prevails.
●Supported image format: JPG or PNG
         * @type {string || null}
         */
        this.LogoUrl = null;

        /**
         * Logo image Base64 code
●Either the Base64 code or URL must be provided. If both are provided, URL prevails.
●Supported image format: JPG or PNG
         * @type {string || null}
         */
        this.LogoImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LogoRect) {
            let obj = new FaceRect();
            obj.deserialize(params.LogoRect)
            this.LogoRect = obj;
        }
        this.LogoUrl = 'LogoUrl' in params ? params.LogoUrl : null;
        this.LogoImage = 'LogoImage' in params ? params.LogoImage : null;

    }
}

/**
 * Fusion parameter
 * @class
 */
class FuseParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image encoding parameter
         * @type {ImageCodecParam || null}
         */
        this.ImageCodecParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageCodecParam) {
            let obj = new ImageCodecParam();
            obj.deserialize(params.ImageCodecParam)
            this.ImageCodecParam = obj;
        }

    }
}

/**
 * Image encoding parameter
 * @class
 */
class ImageCodecParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metadata. The number of metadata entries cannot exceed 1.
         * @type {Array.<MetaData> || null}
         */
        this.MetaData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetaData) {
            this.MetaData = new Array();
            for (let z in params.MetaData) {
                let obj = new MetaData();
                obj.deserialize(params.MetaData[z]);
                this.MetaData.push(obj);
            }
        }

    }
}

/**
 * Face position information on the face image and material template image for fusion
 * @class
 */
class MergeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Enter the image Base64 code.
●Either the Base64 code or URL must be provided. If both are provided, URL prevails.
●Material image limitation: face size in the image greater than 34×34 pixels; image size greater than 64×64 pixels. (After encoding, the image size may increase by about 30%. It is recommended to control the image size reasonably.)
●Supported image format: JPG or PNG
         * @type {string || null}
         */
        this.Image = null;

        /**
         * Enter the image URL.
●Either the Base64 code or URL must be provided. If both are provided, URL prevails.
●Material image limitation: face size in the image greater than 34×34 pixels; image size greater than 64×64 pixels. (After encoding, the image size may increase by about 30%. It is recommended to control the image size reasonably.)
●Supported image format: JPG or PNG
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Face position information (face box) on the uploaded image
Width and height are no less than 30.
         * @type {FaceRect || null}
         */
        this.InputImageFaceRect = null;

        /**
         * Material face ID. If this parameter is left blank, the largest face is used by default.
         * @type {string || null}
         */
        this.TemplateFaceID = null;

        /**
         * Face position information (face box) on the template. If this parameter is left blank, the largest face is used by default. This parameter applies to scenes where custom material templates are used for fusion.
Width and height are no less than 30.
         * @type {FaceRect || null}
         */
        this.TemplateFaceRect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.InputImageFaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.InputImageFaceRect)
            this.InputImageFaceRect = obj;
        }
        this.TemplateFaceID = 'TemplateFaceID' in params ? params.TemplateFaceID : null;

        if (params.TemplateFaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.TemplateFaceRect)
            this.TemplateFaceRect = obj;
        }

    }
}

/**
 * FuseFace response structure.
 * @class
 */
class FuseFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * When RspImgType is set to url, return the URL (valid for 7 days). When RspImgType is set to base64, return the Base64 code.
         * @type {string || null}
         */
        this.FusedImage = null;

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
        this.FusedImage = 'FusedImage' in params ? params.FusedImage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FuseFace request structure.
 * @class
 */
class FuseFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Activity ID. Check the ID in the <a href="https://console.cloud.tencent.com/facefusion" target="_blank"> Face Fusion console</a>.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Material ID. Check the ID in the <a href="https://console.cloud.tencent.com/facefusion" target="_blank"> Face Fusion console</a>.
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * Image return method (url or base64). You cannot use both methods at the same time. The URL is valid for 7 days.
         * @type {string || null}
         */
        this.RspImgType = null;

        /**
         * Face position information on the user face image and material template image. No more than 6 entries.
         * @type {Array.<MergeInfo> || null}
         */
        this.MergeInfos = null;

        /**
         * Switch indicating whether to add a synthesis logo to the fusion result image. Default value: 1.
1: add logo
0: do not add logo
Other values: add logo
It is recommended to use an obvious logo to indicate that the result image uses face fusion technology and is synthesized by AI.
         * @type {number || null}
         */
        this.LogoAdd = null;

        /**
         * Logo content settings
By default, the text "Synthesized by AI" is added to the bottom right corner of the fusion result image. You can also use other texts.
         * @type {LogoParam || null}
         */
        this.LogoParam = null;

        /**
         * Fusion parameter.
         * @type {FuseParam || null}
         */
        this.FuseParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

        if (params.MergeInfos) {
            this.MergeInfos = new Array();
            for (let z in params.MergeInfos) {
                let obj = new MergeInfo();
                obj.deserialize(params.MergeInfos[z]);
                this.MergeInfos.push(obj);
            }
        }
        this.LogoAdd = 'LogoAdd' in params ? params.LogoAdd : null;

        if (params.LogoParam) {
            let obj = new LogoParam();
            obj.deserialize(params.LogoParam)
            this.LogoParam = obj;
        }

        if (params.FuseParam) {
            let obj = new FuseParam();
            obj.deserialize(params.FuseParam)
            this.FuseParam = obj;
        }

    }
}

/**
 * Face box information
 * @class
 */
class FaceRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top-left X-axis coordinate of the face box
         * @type {number || null}
         */
        this.X = null;

        /**
         * Top-left Y-axis coordinate of the face box
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Face box width
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Face box height
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
 * Metadata structure, in key/value format
 * @class
 */
class MetaData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Metadata key
         * @type {string || null}
         */
        this.MetaKey = null;

        /**
         * Metadata value
         * @type {string || null}
         */
        this.MetaValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetaKey = 'MetaKey' in params ? params.MetaKey : null;
        this.MetaValue = 'MetaValue' in params ? params.MetaValue : null;

    }
}

module.exports = {
    LogoParam: LogoParam,
    FuseParam: FuseParam,
    ImageCodecParam: ImageCodecParam,
    MergeInfo: MergeInfo,
    FuseFaceResponse: FuseFaceResponse,
    FuseFaceRequest: FuseFaceRequest,
    FaceRect: FaceRect,
    MetaData: MetaData,

}
