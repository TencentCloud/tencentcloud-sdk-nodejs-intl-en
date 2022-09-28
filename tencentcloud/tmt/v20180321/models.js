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
 * TextTranslate response structure.
 * @class
 */
class TextTranslateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The translation outcome.
         * @type {string || null}
         */
        this.TargetText = null;

        /**
         * The source language. See the request parameter `Source` for details.
         * @type {string || null}
         */
        this.Source = null;

        /**
         * The target language. See the request parameter `Target` for details.
         * @type {string || null}
         */
        this.Target = null;

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
        this.TargetText = 'TargetText' in params ? params.TargetText : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextTranslate request structure.
 * @class
 */
class TextTranslateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The pure texts to be translated. It must be encoded in UTF-8 and can contain up to 2,000 characters in a request. For non-pure texts such as those with HTML tags, the translation may fail.
         * @type {string || null}
         */
        this.SourceText = null;

        /**
         * Supported source languages:
auto: Automatic language detection
zh: Simplified Chinese
zh_TW: Traditional Chinese
en: English
ja: Japanese
ko: Korean
fr: French
es: Spanish
it: Italian
de: German
tr: Turkish
ru: Russian
pt: Portuguese
vi: Vietnamese
id: Bahasa Indonesian
th: Thai
ms: Malay
ar: Arabic
hi: Hindi
         * @type {string || null}
         */
        this.Source = null;

        /**
         * Supported target languages for the above source languages:

<li> zh (Simplified Chinese): en (English), ja (Japanese), ko (Korean), fr (French), es (Spanish), it (Italian), de (German), tr (Turkish), ru (Russian), pt (Portuguese), vi (Vietnamese), id (Bahasa Indonesian), th (Thai), and ms (Malay)</li>
<li> zh-TW (Traditional Chinese): en (English), ja (Japanese), ko (Korean), fr (French), es (Spanish), it (Italian), de (German), tr (Turkish), ru (Russian), pt (Portuguese), vi (Vietnamese), id (Bahasa Indonesian), th (Thai), and ms (Malay)</li>
<li> en (English): zh (Simplified Chinese), ja (Japanese), ko (Korean), fr (French), es (Spanish), it (Italian), de (German), tr (Turkish), ru (Russian), pt (Portuguese), vi (Vietnamese), id (Bahasa Indonesian), th (Thai), ms (Malay), ar (Arabic), and hi (Hindi)</li>
<li>ja (Japanese): zh (Simplified Chinese), en (English), and ko (Korean)</li>
<li>ko (Korean): zh (Simplified Chinese), en (English), and ja (Japanese)</li>
<li>fr (French): zh (Simplified Chinese), en (English), es (Spanish), it (Italian), de (German), tr (Turkish), ru (Russian), and pt (Portuguese)</li>
<li>es (Spanish): zh (Simplified Chinese), en (English), fr (French), it (Italian), de (German), tr (Turkish), ru (Russian), and pt (Portuguese)</li>
<li>it (Italian): zh (Simplified Chinese), en (English), fr (French), es (Spanish), de (German), tr (Turkish), ru (Russian), and pt (Portuguese)</li>
<li>de (German): zh (Simplified Chinese), en (English), fr (French), es (Spanish), it (Italian), tr (Turkish), ru (Russian), and pt (Portuguese)</li>
<li>tr (Turkish): zh (Simplified Chinese), en (English), fr (French), es (Spanish), it (Italian), de (German), ru (Russian), and pt (Portuguese)</li>
<li>ru (Russian): zh (Simplified Chinese), en (English), fr (French), es (Spanish), it (Italian), de (German), tr (Turkish), and pt (Portuguese)</li>
<li>pt (Portuguese): zh (Simplified Chinese), en (English), fr (French), es (Spanish), it (Italian), de (German), tr (Turkish), and ru (Russian)</li>
<li>vi (Vietnamese): zh (Simplified Chinese) and en (English)</li
<li>id (Bahasa Indonesian): zh (Simplified Chinese) and en (English)</li
<li>th (Thai): zh (Simplified Chinese) and en (English)</li
<li>ms (Malay): zh (Simplified Chinese) and en (English)</li
<li>ar (Arabic): en (English)</li>
<li>hi (Hindi): en (English)</li
         * @type {string || null}
         */
        this.Target = null;

        /**
         * The project ID, which can be obtained from **Console -> Account Center -> Project Management**. If no one is set, enter the default project ID `0`.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * The parameter used to mark the text content that needs to remain untranslated, such as special symbols and names of people and places. You can set only one word for this parameter in each request. Only nouns (like names of people and places) are supported, and verbs or phrases may cause poor translation outcomes.
         * @type {string || null}
         */
        this.UntranslatedText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceText = 'SourceText' in params ? params.SourceText : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.UntranslatedText = 'UntranslatedText' in params ? params.UntranslatedText : null;

    }
}

module.exports = {
    TextTranslateResponse: TextTranslateResponse,
    TextTranslateRequest: TextTranslateRequest,

}
