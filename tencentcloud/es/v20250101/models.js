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
 * Document slice amount
 * @class
 */
class DocumentChunkUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parse page count
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * token consumption
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
        this.TotalTokens = 'TotalTokens' in params ? params.TotalTokens : null;

    }
}

/**
 * ChunkDocumentAsync request structure.
 * @class
 */
class ChunkDocumentAsyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File information.
         * @type {Document || null}
         */
        this.Document = null;

        /**
         * Model name, selectable model list: doc-tree-chunk.
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * File slice configuration.
         * @type {ChunkConfigAsync || null}
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

        if (params.Document) {
            let obj = new Document();
            obj.deserialize(params.Document)
            this.Document = obj;
        }
        this.ModelName = 'ModelName' in params ? params.ModelName : null;

        if (params.Config) {
            let obj = new ChunkConfigAsync();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * ChunkDocument request structure.
 * @class
 */
class ChunkDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slice file info.
         * @type {ChunkDocument || null}
         */
        this.Document = null;

        /**
         * Model name, selectable model list: doc-chunk.
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * File slice configuration.
         * @type {ChunkConfig || null}
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

        if (params.Document) {
            let obj = new ChunkDocument();
            obj.deserialize(params.Document)
            this.Document = obj;
        }
        this.ModelName = 'ModelName' in params ? params.ModelName : null;

        if (params.Config) {
            let obj = new ChunkConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * GetDocumentChunkResult request structure.
 * @class
 */
class GetDocumentChunkResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * Output result
 * @class
 */
class RerankResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Location index value of the corresponding doc in the array of candidate docs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Index = null;

        /**
         * Similarity score
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RelevanceScore = null;

        /**
         * Document content
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Document = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.RelevanceScore = 'RelevanceScore' in params ? params.RelevanceScore : null;
        this.Document = 'Document' in params ? params.Document : null;

    }
}

/**
 * GetDocumentParseResult request structure.
 * @class
 */
class GetDocumentParseResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
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
 * Page number consumption
 * @class
 */
class PageUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of pages consumed
         * @type {number || null}
         */
        this.TotalPages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalPages = 'TotalPages' in params ? params.TotalPages : null;

    }
}

/**
 * token consumption total count
 * @class
 */
class Usage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of tokens
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.TotalTokens = 'TotalTokens' in params ? params.TotalTokens : null;

    }
}

/**
 * Document parsing configuration
 * @class
 */
class DocumentParseConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: Images are returned in link format
1:Return the text content extracted from the image
         * @type {number || null}
         */
        this.ImageResponseType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageResponseType = 'ImageResponseType' in params ? params.ImageResponseType : null;

    }
}

/**
 * ParseDocument response structure.
 * @class
 */
class ParseDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Progress: 0-100.
         * @type {string || null}
         */
        this.Progress = null;

        /**
         * File parsing result.
         * @type {string || null}
         */
        this.DocumentParseResultUrl = null;

        /**
         * Page number of the failure.
         * @type {Array.<number> || null}
         */
        this.FailedPages = null;

        /**
         * Page number consumption
         * @type {PageUsage || null}
         */
        this.Usage = null;

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
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.DocumentParseResultUrl = 'DocumentParseResultUrl' in params ? params.DocumentParseResultUrl : null;
        this.FailedPages = 'FailedPages' in params ? params.FailedPages : null;

        if (params.Usage) {
            let obj = new PageUsage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Document Information
 * @class
 */
class Document extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported file types: PDF, DOC, DOCX, PPT, PPTX, MD, TXT, XLS.
XLSX,CSV,PNG,JPG,JPEG,BMP,GIF,WEBP,HEIC,EPS,ICNS,
IM,PCX,PPM,TIFF,XBM,HEIF,JP2

Supported file size for document parsing:
-PDF, DOC, DOCX, PPT, PPTX support 100M.
-MD, TXT, XLS, XLSX, CSV support 10M.
-Other supports 20M

Supported file size for text slicing:
-Maximum PDF size: 300 MB
-D0CX, D0C, PPT, PPTX maximum 200M
-Maximum 10M for TXT, MD
-Another maximum of 20M
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * File storage on Tencent Cloud's URL ensures higher download speed and stability by using Tencent Cloud COS file address.
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * base64 value of the file, carrying the MineType prefix information. The encoded file is no more than 10M.
Supported file size: The downloaded file is no more than 8M after Base64 encoding. File download time is not more than 3 seconds.
Supported image pixel: Unilateral between 20-10000px.
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * File name, used when uploading with base64.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Starting page number of the document
         * @type {number || null}
         */
        this.FileStartPageNumber = null;

        /**
         * End page number of the document
         * @type {number || null}
         */
        this.FileEndPageNumber = null;

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
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileStartPageNumber = 'FileStartPageNumber' in params ? params.FileStartPageNumber : null;
        this.FileEndPageNumber = 'FileEndPageNumber' in params ? params.FileEndPageNumber : null;

    }
}

/**
 * GetTextEmbedding request structure.
 * @class
 */
class GetTextEmbeddingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Model name, selectable model list: bge-base-zh-v1.5, bge-large-zh-v1.5, Conan-embedding-v1, bge-m3, KaLM-embedding-multilingual-mini-v1, Qwen3-Embedding-0.6B.
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * Text set to be vectorized.
         * @type {Array.<string> || null}
         */
        this.Texts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.Texts = 'Texts' in params ? params.Texts : null;

    }
}

/**
 * ParseDocumentAsync response structure.
 * @class
 */
class ParseDocumentAsyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * ChunkDocument response structure.
 * @class
 */
class ChunkDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * None.
         * @type {Array.<Chunk> || null}
         */
        this.Chunks = null;

        /**
         * token consumption
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

        if (params.Chunks) {
            this.Chunks = new Array();
            for (let z in params.Chunks) {
                let obj = new Chunk();
                obj.deserialize(params.Chunks[z]);
                this.Chunks.push(obj);
            }
        }

        if (params.Usage) {
            let obj = new Usage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDocumentParseResult response structure.
 * @class
 */
class GetDocumentParseResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status, -1: failure, 0: running, 1: success.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Result file.
         * @type {string || null}
         */
        this.DocumentParseResultUrl = null;

        /**
         * Failed page number.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.FailedPages = null;

        /**
         * Page number consumption
         * @type {PageUsage || null}
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
        this.DocumentParseResultUrl = 'DocumentParseResultUrl' in params ? params.DocumentParseResultUrl : null;
        this.FailedPages = 'FailedPages' in params ? params.FailedPages : null;

        if (params.Usage) {
            let obj = new PageUsage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Model name, selectable model list: bge-reranker-large, bge-reranker-v2-m3.
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * Query text.
         * @type {string || null}
         */
        this.Query = null;

        /**
         * List of candidate docs to sort.
         * @type {Array.<string> || null}
         */
        this.Documents = null;

        /**
         * Number of top documents returned in sorting order. If not specified, return all candidate docs. If the specified top_n value is larger than the number of input candidate docs, return all docs.
         * @type {number || null}
         */
        this.TopN = null;

        /**
         * Whether to return the original document for each sorting result inside the result list. Default value: False.
         * @type {boolean || null}
         */
        this.ReturnDocuments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Documents = 'Documents' in params ? params.Documents : null;
        this.TopN = 'TopN' in params ? params.TopN : null;
        this.ReturnDocuments = 'ReturnDocuments' in params ? params.ReturnDocuments : null;

    }
}

/**
 * Vector content
 * @class
 */
class EmbeddingData extends  AbstractModel {
    constructor(){
        super();

        /**
         * embedding content
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.Embedding = null;

        /**
         * Index serial number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Embedding = 'Embedding' in params ? params.Embedding : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * Document sharding configuration
 * @class
 */
class ChunkConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * After splitting by the separator, the fragment length is validated. If it exceeds the maximum fragment length, it is split using the next-level separator. If there is no next-level separator, the original length is retained. Default value: 1000.
         * @type {number || null}
         */
        this.MaxChunkSize = null;

        /**
         * Separator list, separators positioned towards the front take precedence; when the file type is TXT, default value: ["\n\n", "\n", ".", ".", "?", ",", ""].
         * @type {Array.<string> || null}
         */
        this.Delimiters = null;

        /**
         * The number of overlapping characters between adjacent fragments must be less than the fragment length. Fragments that form completely redundant slices are automatically filtered. Default value: 0.2*MaxChunkSize
         * @type {number || null}
         */
        this.ChunkOverlap = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxChunkSize = 'MaxChunkSize' in params ? params.MaxChunkSize : null;
        this.Delimiters = 'Delimiters' in params ? params.Delimiters : null;
        this.ChunkOverlap = 'ChunkOverlap' in params ? params.ChunkOverlap : null;

    }
}

/**
 * Document Information
 * @class
 */
class ParseDocument extends  AbstractModel {
    constructor(){
        super();

        /**
         * Supported file types: PDF, DOC, DOCX, PPT, PPTX, MD, TXT, XLS.
XLSX,CSV,PNG,JPG,JPEG,BMP,GIF,WEBP,HEIC,EPS,ICNS,
IM,PCX,PPM,TIFF,XBM,HEIF,JP2

Supported file size for document parsing:
-PDF, DOC, DOCX, PPT, PPTX support 100M.
-MD, TXT, XLS, XLSX, CSV support 10M.
-Another supports 20M

Supported file size for text slicing:
-Maximum PDF size: 300 MB
-D0CX, D0C, PPT, PPTX maximum 200M
-Maximum 10M for TXT, MD
-Other maximum 20M
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * File storage on Tencent Cloud's URL ensures higher download speed and stability by using Tencent Cloud COS file address.
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * base64 value of the file, carrying the MineType prefix information. The encoded file is no more than 10M.
Supported file size: The downloaded file is no more than 8M after Base64 encoding. File download time is no more than 3 seconds.
Supported image pixel: Unilateral between 20-10000px.
Either FileUrl or FileContent of the file must be provided. If both are provided, only FileUrl is used.
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * Document parsing configuration
         * @type {DocumentParseConfig || null}
         */
        this.DocumentParseConfig = null;

        /**
         * Starting page number of the document
         * @type {number || null}
         */
        this.FileStartPageNumber = null;

        /**
         * End page number of the document
         * @type {number || null}
         */
        this.FileEndPageNumber = null;

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
        this.FileContent = 'FileContent' in params ? params.FileContent : null;

        if (params.DocumentParseConfig) {
            let obj = new DocumentParseConfig();
            obj.deserialize(params.DocumentParseConfig)
            this.DocumentParseConfig = obj;
        }
        this.FileStartPageNumber = 'FileStartPageNumber' in params ? params.FileStartPageNumber : null;
        this.FileEndPageNumber = 'FileEndPageNumber' in params ? params.FileEndPageNumber : null;

    }
}

/**
 * GetDocumentChunkResult response structure.
 * @class
 */
class GetDocumentChunkResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status, -1: failure, 0: running, 1: success.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Document slice result file.
         * @type {string || null}
         */
        this.DocumentChunkResultUrl = null;

        /**
         * Token amount.
         * @type {DocumentChunkUsage || null}
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
        this.DocumentChunkResultUrl = 'DocumentChunkResultUrl' in params ? params.DocumentChunkResultUrl : null;

        if (params.Usage) {
            let obj = new DocumentChunkUsage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChunkDocumentAsync response structure.
 * @class
 */
class ChunkDocumentAsyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
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
 * GetMultiModalEmbedding response structure.
 * @class
 */
class GetMultiModalEmbeddingResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetMultiModalEmbedding request structure.
 * @class
 */
class GetMultiModalEmbeddingRequest extends  AbstractModel {
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
 * ParseDocument request structure.
 * @class
 */
class ParseDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File Information
         * @type {ParseDocument || null}
         */
        this.Document = null;

        /**
         * Model name, doc-llm.
         * @type {string || null}
         */
        this.ModelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Document) {
            let obj = new ParseDocument();
            obj.deserialize(params.Document)
            this.Document = obj;
        }
        this.ModelName = 'ModelName' in params ? params.ModelName : null;

    }
}

/**
 * Slice object information
 * @class
 */
class Chunk extends  AbstractModel {
    constructor(){
        super();

        /**
         * chunk index. Slice sequence id.
         * @type {number || null}
         */
        this.Index = null;

        /**
         * chunk content.
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * Document slicing async task
 * @class
 */
class ChunkConfigAsync extends  AbstractModel {
    constructor(){
        super();

        /**
         * Maximum fragment length
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
        this.MaxChunkSize = 'MaxChunkSize' in params ? params.MaxChunkSize : null;

    }
}

/**
 * GetTextEmbedding response structure.
 * @class
 */
class GetTextEmbeddingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result set.
         * @type {Array.<EmbeddingData> || null}
         */
        this.Data = null;

        /**
         * token consumption for vectorization.
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new EmbeddingData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.Usage) {
            let obj = new Usage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ParseDocumentAsync request structure.
 * @class
 */
class ParseDocumentAsyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * File information.
         * @type {Document || null}
         */
        this.Document = null;

        /**
         * Model name, selectable model list: doc-llm.
         * @type {string || null}
         */
        this.ModelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Document) {
            let obj = new Document();
            obj.deserialize(params.Document)
            this.Document = obj;
        }
        this.ModelName = 'ModelName' in params ? params.ModelName : null;

    }
}

/**
 * Document slice information
 * @class
 */
class ChunkDocument extends  AbstractModel {
    constructor(){
        super();

        /**
         * File type, supports MD and TXT formats.
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * Text original, use string format input.
         * @type {string || null}
         */
        this.FileContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;

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
         * Output result set.
         * @type {Array.<RerankResult> || null}
         */
        this.Data = null;

        /**
         * token consumption.
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RerankResult();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.Usage) {
            let obj = new Usage();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DocumentChunkUsage: DocumentChunkUsage,
    ChunkDocumentAsyncRequest: ChunkDocumentAsyncRequest,
    ChunkDocumentRequest: ChunkDocumentRequest,
    GetDocumentChunkResultRequest: GetDocumentChunkResultRequest,
    RerankResult: RerankResult,
    GetDocumentParseResultRequest: GetDocumentParseResultRequest,
    PageUsage: PageUsage,
    Usage: Usage,
    DocumentParseConfig: DocumentParseConfig,
    ParseDocumentResponse: ParseDocumentResponse,
    Document: Document,
    GetTextEmbeddingRequest: GetTextEmbeddingRequest,
    ParseDocumentAsyncResponse: ParseDocumentAsyncResponse,
    ChunkDocumentResponse: ChunkDocumentResponse,
    GetDocumentParseResultResponse: GetDocumentParseResultResponse,
    RunRerankRequest: RunRerankRequest,
    EmbeddingData: EmbeddingData,
    ChunkConfig: ChunkConfig,
    ParseDocument: ParseDocument,
    GetDocumentChunkResultResponse: GetDocumentChunkResultResponse,
    ChunkDocumentAsyncResponse: ChunkDocumentAsyncResponse,
    GetMultiModalEmbeddingResponse: GetMultiModalEmbeddingResponse,
    GetMultiModalEmbeddingRequest: GetMultiModalEmbeddingRequest,
    ParseDocumentRequest: ParseDocumentRequest,
    Chunk: Chunk,
    ChunkConfigAsync: ChunkConfigAsync,
    GetTextEmbeddingResponse: GetTextEmbeddingResponse,
    ParseDocumentAsyncRequest: ParseDocumentAsyncRequest,
    ChunkDocument: ChunkDocument,
    RunRerankResponse: RunRerankResponse,

}
