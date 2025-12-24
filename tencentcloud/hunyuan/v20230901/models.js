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
const AbstractModel = require("../../common/abstract_model");

/**
 * SubmitHunyuanTo3DProJob request structure.
 * @class
 */
class SubmitHunyuanTo3DProJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Generates 3D content, describes 3D content.
Supports up to 1024 utf-8 characters.
Text-To-3D. Specifies either ImageBase64/ImageUrl or Prompt is required. Prompt and ImageBase64/ImageUrl cannot coexist.
         * @type {string || null}
         */
        this.Prompt = null;

        /**
         * Enter the Base64 code of the image.
Size: specifies the unilateral resolution requirement, not less than 128 and not greater than 5000. size should not exceed 8m (after encoding, it increases by about 30%, recommend actual input image size no more than 6m).
Input image suggestion:
1.Simple background (solid-color background) 
2.No text or blended colors
3.Single object
4.The object occupies over 50% of the frame
Valid values: jpg, png, jpeg, webp.
Specifies either ImageBase64/ImageUrl or Prompt is required. Prompt and ImageBase64/ImageUrl cannot coexist.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * Input image Url.
Size: specifies the unilateral resolution requirement, not less than 128 and not greater than 5000. size should not exceed 8m (after encoding, it increases by about 30%, recommend actual input image size no more than 6m).
Input image suggestion:
1.Simple background (solid-color background) 
2.No text or blended colors
3.Single object
4.The object occupies over 50% of the frame
Valid values: jpg, png, jpeg, webp.
Specifies either ImageBase64/ImageUrl or Prompt is required. Prompt and ImageBase64/ImageUrl cannot coexist.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Multi-Perspective model image. reference value for viewing angle:.
left view.
right view.
back view.

Each perspective is limited to one image.
Image size limit. the value must not exceed 8 mb after encoding.
Image resolution limitation: the unilateral resolution should be less than 5000 and greater than 128.
Supported image format: JPG or PNG
         * @type {Array.<ViewImage> || null}
         */
        this.MultiViewImages = null;

        /**
         * Specifies whether PBR material generation is enabled. default false.
         * @type {boolean || null}
         */
        this.EnablePBR = null;

        /**
         * Specifies the face count for 3D model generation. default value is 500000.
Specifies the supported face count generation range. value range: 40000-1500000.
         * @type {number || null}
         */
        this.FaceCount = null;

        /**
         * Generation task type. default: Normal. valid values:.
Normal: generates a geometric model with textures.
LowPoly: specifies the model generated after intelligent polygon reduction.
Geometry: specifies whether to generate a Geometry model without textures (white model). when this task is selected, the EnablePBR parameter does not take effect.
Specifies the Sketch for the generative model, allowing input of a Sketch or line drawing. in this mode, both prompt and ImageUrl/ImageBase64 can be entered together.
         * @type {string || null}
         */
        this.GenerateType = null;

        /**
         * This parameter only takes effect when LowPoly mode is selected from GenerateType.

Polygon type, indicates the number of sides in the model's surface grid, defaults to triangle. valid values:.
triangle. specifies the triangular face.
quadrilateral: mix quadrangle and triangle faces to generate.
         * @type {string || null}
         */
        this.PolygonType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Prompt = 'Prompt' in params ? params.Prompt : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

        if (params.MultiViewImages) {
            this.MultiViewImages = new Array();
            for (let z in params.MultiViewImages) {
                let obj = new ViewImage();
                obj.deserialize(params.MultiViewImages[z]);
                this.MultiViewImages.push(obj);
            }
        }
        this.EnablePBR = 'EnablePBR' in params ? params.EnablePBR : null;
        this.FaceCount = 'FaceCount' in params ? params.FaceCount : null;
        this.GenerateType = 'GenerateType' in params ? params.GenerateType : null;
        this.PolygonType = 'PolygonType' in params ? params.PolygonType : null;

    }
}

/**
 * SubmitHunyuanTo3DProJob response structure.
 * @class
 */
class SubmitHunyuanTo3DProJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID (valid period: 24 hours).
         * @type {string || null}
         */
        this.JobId = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Multi-Perspective images.
 * @class
 */
class ViewImage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the viewing angle type.
Valid values: back, left, right.
         * @type {string || null}
         */
        this.ViewType = null;

        /**
         * Image Url.
         * @type {string || null}
         */
        this.ViewImageUrl = null;

        /**
         * base64 address of the image.
         * @type {string || null}
         */
        this.ViewImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ViewType = 'ViewType' in params ? params.ViewType : null;
        this.ViewImageUrl = 'ViewImageUrl' in params ? params.ViewImageUrl : null;
        this.ViewImageBase64 = 'ViewImageBase64' in params ? params.ViewImageBase64 : null;

    }
}

/**
 * QueryHunyuanTo3DProJob request structure.
 * @class
 */
class QueryHunyuanTo3DProJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * 3D file.
 * @class
 */
class File3D extends  AbstractModel {
    constructor(){
        super();

        /**
         * 3D file format. valid values: GIF, OBJ.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Specifies the file Url (valid for 24 hours).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Preview image Url.
         * @type {string || null}
         */
        this.PreviewImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PreviewImageUrl = 'PreviewImageUrl' in params ? params.PreviewImageUrl : null;

    }
}

/**
 * QueryHunyuanTo3DProJob response structure.
 * @class
 */
class QueryHunyuanTo3DProJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. WAIT: waiting; RUN: running; FAIL: failed; DONE: successful.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * Error message
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Describes the generated 3d file array.
         * @type {Array.<File3D> || null}
         */
        this.ResultFile3Ds = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

        if (params.ResultFile3Ds) {
            this.ResultFile3Ds = new Array();
            for (let z in params.ResultFile3Ds) {
                let obj = new File3D();
                obj.deserialize(params.ResultFile3Ds[z]);
                this.ResultFile3Ds.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SubmitHunyuanTo3DProJobRequest: SubmitHunyuanTo3DProJobRequest,
    SubmitHunyuanTo3DProJobResponse: SubmitHunyuanTo3DProJobResponse,
    ViewImage: ViewImage,
    QueryHunyuanTo3DProJobRequest: QueryHunyuanTo3DProJobRequest,
    File3D: File3D,
    QueryHunyuanTo3DProJobResponse: QueryHunyuanTo3DProJobResponse,

}
