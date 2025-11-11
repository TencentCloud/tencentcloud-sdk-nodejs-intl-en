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
 * CreateSplitDocumentFlow request structure.
 * @class
 */
class CreateSplitDocumentFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File type.
**Supported file types**: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, MD, TXT, PNG, JPG, JPEG, CSV, HTML, EPUB.
**Supported file sizes**: 
- Max 500 MB for PDF.
- Max 200 MB for DOC, DOCX, PPT, and PPTX .
- Max 10 MB for MD, and TXT.
- Max 20 MB for others.
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * File URL. It is recommended to store the file in Tencent Cloud as the URL where the file is stored in Tencent Cloud can ensure higher download speed and stability. External URL may affect the speed and stability. 
Refer to: [Tencent Cloud COS Documentation](https://cloud.tencent.com/document/product/436/7749).
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * Filename. optional.
**The file type suffix shall be included**. This field is required to be specified when the file name cannot be obtained from the passed-in "FileUrl".
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * The base64 value of the file. File size limit: the downloaded file shall not exceed 8MB after base64 encoding. File download time does not exceed 3 seconds. Supported image pixels: the length of a single side is between 20-10000px. Either FileUrl or FileBase64 of the file must be provided. If both are provided, only the FileUrl is used.
         * @type {string || null}
         */
        this.FileBase64 = null;

        /**
         * The starting page number of the file. When type of the uploaded file is pdf, doc, ppt, or pptx, it specifies the starting page number for recognition, including the current value.
         * @type {number || null}
         */
        this.FileStartPageNumber = null;

        /**
         * The end page number of the file. When type of the uploaded file is pdf, doc, ppt, or pptx, it specifies the end page number for recognition, including the current value.
         * @type {number || null}
         */
        this.FileEndPageNumber = null;

        /**
         * Configuration message for document splitting task.
         * @type {CreateSplitDocumentFlowConfig || null}
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
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileBase64 = 'FileBase64' in params ? params.FileBase64 : null;
        this.FileStartPageNumber = 'FileStartPageNumber' in params ? params.FileStartPageNumber : null;
        this.FileEndPageNumber = 'FileEndPageNumber' in params ? params.FileEndPageNumber : null;

        if (params.Config) {
            let obj = new CreateSplitDocumentFlowConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * ReconstructDocumentSSE response structure.
 * @class
 */
class ReconstructDocumentSSEResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID. The unique identifier of the current request.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Response type. 1: return progress information; 2: return parsing result.
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * Progress. Value range: 0 to 100.
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * Progress information.
         * @type {string || null}
         */
        this.ProgressMessage = null;

        /**
         * Temporary download URL for the document parsing result. The file is a zip compressed package, and the URL is valid for 30 minutes. The compressed package contains the following folders: \*.md, \*.jsonl, \*mllm.json, images.
         * @type {string || null}
         */
        this.DocumentRecognizeResultUrl = null;

        /**
         * Page number where document parsing fails.
         * @type {Array.<ReconstructDocumentFailedPage> || null}
         */
        this.FailedPages = null;

        /**
         * 
         * @type {number || null}
         */
        this.FailPageNum = null;

        /**
         * 
         * @type {number || null}
         */
        this.SuccessPageNum = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem. As a streaming response API, when the request is successfully completed, the RequestId will be placed in the Header "X-TC-RequestId" of the HTTP response.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.ProgressMessage = 'ProgressMessage' in params ? params.ProgressMessage : null;
        this.DocumentRecognizeResultUrl = 'DocumentRecognizeResultUrl' in params ? params.DocumentRecognizeResultUrl : null;

        if (params.FailedPages) {
            this.FailedPages = new Array();
            for (let z in params.FailedPages) {
                let obj = new ReconstructDocumentFailedPage();
                obj.deserialize(params.FailedPages[z]);
                this.FailedPages.push(obj);
            }
        }
        this.FailPageNum = 'FailPageNum' in params ? params.FailPageNum : null;
        this.SuccessPageNum = 'SuccessPageNum' in params ? params.SuccessPageNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetReconstructDocumentResult request structure.
 * @class
 */
class GetReconstructDocumentResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parsing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Consumption.
 * @class
 */
class Usage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of document pages.
         * @type {number || null}
         */
        this.TotalPages = null;

        /**
         * Number of input tokens.
         * @type {number || null}
         */
        this.InputTokens = null;

        /**
         * Number of output tokens.
         * @type {number || null}
         */
        this.OutputTokens = null;

        /**
         * Total number of tokens.
         * @type {number || null}
         */
        this.TotalTokens = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalPages = 'TotalPages' in params ? params.TotalPages : null;
        this.InputTokens = 'InputTokens' in params ? params.InputTokens : null;
        this.OutputTokens = 'OutputTokens' in params ? params.OutputTokens : null;
        this.TotalTokens = 'TotalTokens' in params ? params.TotalTokens : null;

    }
}

/**
 * CreateSplitDocumentFlow response structure.
 * @class
 */
class CreateSplitDocumentFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the splitting task.
The splitting results corresponding to the TaskId can be queried through the [GetSplitDocumentResult] API within 30 days.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReconstructDocumentSSE feature configuration parameters.
 * @class
 */
class ReconstructDocumentSSEConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The form in which tables in a Markdown file are returned.
- 0: returned as MD.
- 1: returned as HTML.
The default is 0.
         * @type {string || null}
         */
        this.TableResultType = null;

        /**
         * The form in which images in a Markdown file are returned.
- 0: returned as URL.
- 1: only return the text content extracted from the image in markdown.
The default value is 0.
         * @type {string || null}
         */
        this.MarkdownImageResponseType = null;

        /**
         * Whether the Markdown file contains page number information.
         * @type {boolean || null}
         */
        this.ReturnPageFormat = null;

        /**
         * The custom output page number style. {{p}} is a placeholder for the page number. Enable ReturnPageFormat to take effect. If empty, the default style is: <page_num>page {{p}}</page_num>.
         * @type {string || null}
         */
        this.PageFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableResultType = 'TableResultType' in params ? params.TableResultType : null;
        this.MarkdownImageResponseType = 'MarkdownImageResponseType' in params ? params.MarkdownImageResponseType : null;
        this.ReturnPageFormat = 'ReturnPageFormat' in params ? params.ReturnPageFormat : null;
        this.PageFormat = 'PageFormat' in params ? params.PageFormat : null;

    }
}

/**
 * The usage of document splitting task.
 * @class
 */
class DocumentUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number of the document splitting task.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Total number of tokens consumed by the document splitting task.
         * @type {number || null}
         */
        this.TotalToken = null;

        /**
         * Total number of tokens consumed by the document splitting task.
         * @type {number || null}
         */
        this.TotalTokens = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.TotalToken = 'TotalToken' in params ? params.TotalToken : null;
        this.TotalTokens = 'TotalTokens' in params ? params.TotalTokens : null;

    }
}

/**
 * GetReconstructDocumentResult response structure.
 * @class
 */
class GetReconstructDocumentResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status.
-Success: execution completed.
-Processing: executing.
-Pause: paused.
-Failed: execution failed.
-WaitExecute: pending execution.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Temporary download URL for the parsing result. The file is a zip compressed package, and the URL is valid for 30 minutes.
         * @type {string || null}
         */
        this.DocumentRecognizeResultUrl = null;

        /**
         * Page number where document parsing fails.
         * @type {Array.<ReconstructDocumentFailedPage> || null}
         */
        this.FailedPages = null;

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
        this.DocumentRecognizeResultUrl = 'DocumentRecognizeResultUrl' in params ? params.DocumentRecognizeResultUrl : null;

        if (params.FailedPages) {
            this.FailedPages = new Array();
            for (let z in params.FailedPages) {
                let obj = new ReconstructDocumentFailedPage();
                obj.deserialize(params.FailedPages[z]);
                this.FailedPages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration information for creating intelligent document parsing tasks.
 * @class
 */
class CreateReconstructDocumentFlowConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The form in which tables in a Markdown file are returned.
- 0: returned as MD.
- 1: returned as HTML.
The default is 0.
         * @type {string || null}
         */
        this.TableResultType = null;

        /**
         * The format of the returned results of intelligent document parsing.
- 0: only returns full-text MD.
- 1: only returns the OCR original Json for each page.
- 2: only returns the MD of each page.
- 3: returns the full-text MD and the original OCR Json of each page.
- 4: returns full-text MD and MD of each page.
The default value is 3 (returns the full-text MD and the original OCR Json of each page).
         * @type {string || null}
         */
        this.ResultType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableResultType = 'TableResultType' in params ? params.TableResultType : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;

    }
}

/**
 * RunRerank request structure.
 * @class
 */
class RunRerankRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query content.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * Document list, up to 20 documents.
         * @type {Array.<string> || null}
         */
        this.Docs = null;

        /**
         * Model name. Default: lke-reranker-base.
         * @type {string || null}
         */
        this.Model = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Query = 'Query' in params ? params.Query : null;
        this.Docs = 'Docs' in params ? params.Docs : null;
        this.Model = 'Model' in params ? params.Model : null;

    }
}

/**
 * ReconstructDocumentSSE request structure.
 * @class
 */
class ReconstructDocumentSSERequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The base64 value of the file. File size limit: the downloaded file shall not exceed 8MB after base64 encoding. File download time does not exceed 3 seconds. Supported image pixels: the length of a single side is between 20-10000px. Either FileUrl or FileBase64 of the file must be provided. If both are provided, only the FileUrl is used.
         * @type {string || null}
         */
        this.FileBase64 = null;

        /**
         * Document parsing configuration information.	
         * @type {ReconstructDocumentSSEConfig || null}
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
        this.FileBase64 = 'FileBase64' in params ? params.FileBase64 : null;

        if (params.Config) {
            let obj = new ReconstructDocumentSSEConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * CreateReconstructDocumentFlow request structure.
 * @class
 */
class CreateReconstructDocumentFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File type.
**Supported file types**: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, MD, TXT, PNG, JPG, JPEG, CSV, HTML, EPUB, BMP, GIF, WEBP, HEIC, EPS, ICNS, IM, PCX, PPM, TIFF, XBM, HEIF, JP2.
**Supported file sizes**: 
- Max 100 MB for PDF.
- Max 200 MB for DOC, DOCX, PPT, and PPTX .
- Max 10 MB for MD, and TXT.
- Max 20 MB for others.
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * File URL. It is recommended to store the file in Tencent Cloud as the URL where the file is stored in Tencent Cloud can ensure higher download speed and stability. External URL may affect the speed and stability. Refer to: [Tencent Cloud COS Documentation](https://cloud.tencent.com/document/product/436/7749)
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * The base64 value of the file. Supported file types: PNG, JPG, JPEG, PDF, BMP, TIFF. File size limit: the downloaded file does not exceed 8MB after base64 encoding. File download time does not exceed 3 seconds. Supported image pixels: the length of a single side is between 20-10000px. Either FileUrl or FileBase64 of the file must be provided. If both are provided, only the FileUrl is used.
         * @type {string || null}
         */
        this.FileBase64 = null;

        /**
         * The starting page number of the file. When type of the uploaded file is pdf, doc, ppt, or pptx, it specifies the starting page number for recognition, including the current value.
         * @type {number || null}
         */
        this.FileStartPageNumber = null;

        /**
         * The end page number of the file. When type of the uploaded file is pdf, doc, ppt, or pptx, it specifies the end page number for recognition, including the current value.
         * @type {number || null}
         */
        this.FileEndPageNumber = null;

        /**
         * Creates task configuration information for document parsing.
         * @type {CreateReconstructDocumentFlowConfig || null}
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
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileBase64 = 'FileBase64' in params ? params.FileBase64 : null;
        this.FileStartPageNumber = 'FileStartPageNumber' in params ? params.FileStartPageNumber : null;
        this.FileEndPageNumber = 'FileEndPageNumber' in params ? params.FileEndPageNumber : null;

        if (params.Config) {
            let obj = new CreateReconstructDocumentFlowConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * GetSplitDocumentResult response structure.
 * @class
 */
class GetSplitDocumentResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status:
-Success: execution completed.
-Processing: executing.
-Pause: paused.
-Failed: execution failed.
-WaitExecute: pending execution.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Temporary download URL for the splitting result. The file is a zip compressed package, and the URL is valid for 30 minutes. The compressed package contains the following folders: \*.md, \*.jsonl, \*mllm.json, images.
>**jsonl** structure description:.
- page_content: Used to generate an embedding library for retrieval purposes. The images in this field will be replaced with placeholders.
- org_data: The minimum semantic integrity block corresponding to page_content, used for Q&A model processing.
- big_data: The maximum semantic integrity block corresponding to page_content, also used for Q&A model processing.
         * @type {string || null}
         */
        this.DocumentRecognizeResultUrl = null;

        /**
         * Page number where document splitting fails.
         * @type {Array.<SplitDocumentFailedPage> || null}
         */
        this.FailedPages = null;

        /**
         * Amount of the document split task.
         * @type {DocumentUsage || null}
         */
        this.Usage = null;

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
        this.DocumentRecognizeResultUrl = 'DocumentRecognizeResultUrl' in params ? params.DocumentRecognizeResultUrl : null;

        if (params.FailedPages) {
            this.FailedPages = new Array();
            for (let z in params.FailedPages) {
                let obj = new SplitDocumentFailedPage();
                obj.deserialize(params.FailedPages[z]);
                this.FailedPages.push(obj);
            }
        }

        if (params.Usage) {
            let obj = new DocumentUsage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Document parsing failure record.
 * @class
 */
class ReconstructDocumentFailedPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number that failed to parse.
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * Document parsing failure record.
 * @class
 */
class SplitDocumentFailedPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number that failed to parse.
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * QueryRewrite request structure.
 * @class
 */
class QueryRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The multi-round historical conversation that needs to be rewritten. Each round of historical conversation should include paired inputs of user (question) and assistant (answer). Due to the character limit of the model, a maximum of 4 rounds of conversations can be provided. The last round of conversation will be rewritten.
         * @type {Array.<Message> || null}
         */
        this.Messages = null;

        /**
         * Model name.
         * @type {string || null}
         */
        this.Model = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Messages) {
            this.Messages = new Array();
            for (let z in params.Messages) {
                let obj = new Message();
                obj.deserialize(params.Messages[z]);
                this.Messages.push(obj);
            }
        }
        this.Model = 'Model' in params ? params.Model : null;

    }
}

/**
 * Configuration information for creating intelligent document splitting task.
 * @class
 */
class CreateSplitDocumentFlowConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The form in which tables in a Markdown file are returned.
- 0: returned as MD.
- 1: returned as HTML.
         * @type {string || null}
         */
        this.TableResultType = null;

        /**
         * The format of the returned results of intelligent document parsing.
- 0: only returns full-text MD.
- 1: only returns the OCR original Json for each page.
- 2: only returns the MD of each page.
- 3: returns the full-text MD and the original OCR Json of each page.
- 4: returns full-text MD and MD of each page.
The default value is 3 (returns the full-text MD and the original OCR Json of each page).
         * @type {string || null}
         */
        this.ResultType = null;

        /**
         * Whether to enable mllm.
         * @type {boolean || null}
         */
        this.EnableMllm = null;

        /**
         * Max segment length.
         * @type {number || null}
         */
        this.MaxChunkSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableResultType = 'TableResultType' in params ? params.TableResultType : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.EnableMllm = 'EnableMllm' in params ? params.EnableMllm : null;
        this.MaxChunkSize = 'MaxChunkSize' in params ? params.MaxChunkSize : null;

    }
}

/**
 * RunRerank response structure.
 * @class
 */
class RunRerankResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Relevance. A higher numeric value indicates greater relevance.
         * @type {Array.<number> || null}
         */
        this.ScoreList = null;

        /**
         * Consumption. Only returns TotalToken.
         * @type {Usage || null}
         */
        this.Usage = null;

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
        this.ScoreList = 'ScoreList' in params ? params.ScoreList : null;

        if (params.Usage) {
            let obj = new Usage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReconstructDocumentFlow response structure.
 * @class
 */
class CreateReconstructDocumentFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique task ID. The processing result corresponding to TaskId can be queried through the API [GetReconstructDocumentResult] within 30 days.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSplitDocumentResult request structure.
 * @class
 */
class GetSplitDocumentResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Splitting task ID.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Session content.
 * @class
 */
class Message extends  AbstractModel {
    constructor(){
        super();

        /**
         * Role.
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Content.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Chain of thought content. The ReasoningConent parameter only supports output parameters, and is only returned by the deepseek-r1 model.
         * @type {string || null}
         */
        this.ReasoningContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ReasoningContent = 'ReasoningContent' in params ? params.ReasoningContent : null;

    }
}

/**
 * QueryRewrite response structure.
 * @class
 */
class QueryRewriteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rewritten result.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Consumption. The numbers of input tokens, output tokens, and total tokens will be returned.
         * @type {Usage || null}
         */
        this.Usage = null;

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
        this.Content = 'Content' in params ? params.Content : null;

        if (params.Usage) {
            let obj = new Usage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateSplitDocumentFlowRequest: CreateSplitDocumentFlowRequest,
    ReconstructDocumentSSEResponse: ReconstructDocumentSSEResponse,
    GetReconstructDocumentResultRequest: GetReconstructDocumentResultRequest,
    Usage: Usage,
    CreateSplitDocumentFlowResponse: CreateSplitDocumentFlowResponse,
    ReconstructDocumentSSEConfig: ReconstructDocumentSSEConfig,
    DocumentUsage: DocumentUsage,
    GetReconstructDocumentResultResponse: GetReconstructDocumentResultResponse,
    CreateReconstructDocumentFlowConfig: CreateReconstructDocumentFlowConfig,
    RunRerankRequest: RunRerankRequest,
    ReconstructDocumentSSERequest: ReconstructDocumentSSERequest,
    CreateReconstructDocumentFlowRequest: CreateReconstructDocumentFlowRequest,
    GetSplitDocumentResultResponse: GetSplitDocumentResultResponse,
    ReconstructDocumentFailedPage: ReconstructDocumentFailedPage,
    SplitDocumentFailedPage: SplitDocumentFailedPage,
    QueryRewriteRequest: QueryRewriteRequest,
    CreateSplitDocumentFlowConfig: CreateSplitDocumentFlowConfig,
    RunRerankResponse: RunRerankResponse,
    CreateReconstructDocumentFlowResponse: CreateReconstructDocumentFlowResponse,
    GetSplitDocumentResultRequest: GetSplitDocumentResultRequest,
    Message: Message,
    QueryRewriteResponse: QueryRewriteResponse,

}
