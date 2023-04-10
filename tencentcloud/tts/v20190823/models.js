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
 * TextToVoice response structure.
 * @class
 */
class TextToVoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded WAV/MP3 audio data
         * @type {string || null}
         */
        this.Audio = null;

        /**
         * The `SessionId` of a request
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Timestamp information. If the timestamp feature is not enabled, an empty array will be returned.
         * @type {Array.<Subtitle> || null}
         */
        this.Subtitles = null;

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
        this.Audio = 'Audio' in params ? params.Audio : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

        if (params.Subtitles) {
            this.Subtitles = new Array();
            for (let z in params.Subtitles) {
                let obj = new Subtitle();
                obj.deserialize(params.Subtitles[z]);
                this.Subtitles.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The information about the timestamps.
 * @class
 */
class Subtitle extends  AbstractModel {
    constructor(){
        super();

        /**
         * The word in the text that is sent.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * The start timestamp of the word in the synthesized audio data, in milliseconds.
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * The end timestamp of the word in the synthesized audio data, in milliseconds.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * The start index of the character in the whole sentence, starting from 0.
         * @type {number || null}
         */
        this.BeginIndex = null;

        /**
         * The end index of the character in the whole sentence, starting from 0.
         * @type {number || null}
         */
        this.EndIndex = null;

        /**
         * The phonemes of the word.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Phoneme = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BeginIndex = 'BeginIndex' in params ? params.BeginIndex : null;
        this.EndIndex = 'EndIndex' in params ? params.EndIndex : null;
        this.Phoneme = 'Phoneme' in params ? params.Phoneme : null;

    }
}

/**
 * TextToVoice request structure.
 * @class
 */
class TextToVoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The source text for synthesizing speech, which is encoded in UTF-8.
It can contain up to 150 Chinese characters (a full-width punctuation as a Chinese character) or 500 letters ( a half-width punctuation as a letter).
         * @type {string || null}
         */
        this.Text = null;

        /**
         * The `SessionId` of a request, which will be returned as-is. We recommend that you pass characters like uuid to prevent repetition.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Volume range: [0, 10], corresponding to 11 volume levels. 0 is the default value, indicating the normal volume. There is no mute option.
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * Speed range: [-2, 6], corresponding to different speeds<li>-2 for 0.6 times</li><li>-1 for 0.8 times</li><li>0 for 1.0 time (default)</li><li>1 for 1.2 times</li><li>2 for 1.5 times</li><li>6 for 2.5 times</li>To set finer-grained speed levels, keep one decimal place, such as 0.5, 1.1, and 1.8.<br>
         * @type {number || null}
         */
        this.Speed = null;

        /**
         * Project ID, which defaults to 0 and can be customized.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Model type, with `1` for the default model.
         * @type {number || null}
         */
        this.ModelType = null;

        /**
         * Standard voices <li>10510000-zhixiaoyao (Chinese)</li><li>1001-zhiyu (Chinese)</li><li>1002-zhiling (Chinese)</li><li>1003-zhimei (Chinese)</li><li>1004-zhiyun (Chinese)</li><li>1005-zhili (Chinese)</li><li>1007-zhina (Chinese)</li><li>1008-zhiqi (Chinese)</li><li>1009-zhiyun (Chinese)</li><li>1010-zhihua (Chinese)</li><li>1017-zhirong (Chinese)</li><li>1018-zhijing (Chinese)</li><li>1050-WeJack (English)</li><li>1051-WeRose (English)</li>Premium voices<br>Premium voices have higher fidelity and more natural-sounding quality than standard voices. For price details, see [Purchase Guide](https://www.tencentcloud.com/document/product/1154/47874).<br><li>100510000-zhixiaoyao (Chinese)</li><li>101001-zhiyu (Chinese)</li><li>101002-zhiling (Chinese)</li><li>101003-zhimei (Chinese)</li><li>101004-zhiyun (Chinese)</li><li>101005-zhili (Chinese)</li><li>101006-zhiyan (Chinese)</li><li>101007-zhina (Chinese)</li><li>101008-zhiqi (Chinese)</li><li>101009-zhiyun (Chinese)</li><li>101010-zhihua (Chinese)</li><li>101011-zhiyan (Chinese)</li><li>101012-zhidan (Chinese)</li><li>101013-zhihui (Chinese)</li><li>101014-zhining (Chinese)</li><li>101015-zhimeng (Chinese)</li><li>101016-zhitian (Chinese)</li><li>101017-zhirong (Chinese)</li><li>101018-zhijing (Chinese)</li><li>101019-zhitong (Cantonese)</li><li>101020-zhigang (Chinese)</li><li>101021-zhirui (Chinese)</li><li>101022-zhihong (Chinese)</li><li>101023-zhixuan (Chinese)</li><li>101024-zhihao (Chinese)</li><li>101025-zhiwei (Chinese)</li><li>101026-zhixi (Chinese)</li><li>101027-zhimei (Chinese)</li><li>101028-zhijie (Chinese)</li><li>101029-zhikai (Chinese)</li><li>101030-zhike (Chinese)</li><li>101031-zhikui (Chinese)</li><li>101032-zhifang (Chinese)</li><li>101033-zhibei (Chinese)</li><li>101034-zhilian (Chinese)</li><li>101035-zhiyi (Chinese)</li><li>101040-zhichuan (Sichuan dialect)</li><li>101050-WeJack (English)</li><li>101051-WeRose (English)</li><li>101052-zhiwei (Chinese)</li>
<li>101053-zhifang (Chinese)</li>
<li>101054-zhiyou (Chinese)</li>
<li>101055-zhiyou (Chinese)</li>
<li>101056-zhilin (Northeastern Mandarin)</li>
         * @type {number || null}
         */
        this.VoiceType = null;

        /**
         * Primary language type: <li>1 - Chinese (default)</li><li>2 - English</li>
         * @type {number || null}
         */
        this.PrimaryLanguage = null;

        /**
         * Audio sample rate: <li>16000: 16k (default)</li><li>8000: 8k</li>
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Format of returned audio. Valid values: WAV (default), MP3, and PCM.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Whether to enable the timestamp feature. Default value: `false`.
         * @type {boolean || null}
         */
        this.EnableSubtitle = null;

        /**
         * The threshold of speech segmentation sensibility, which can be `0` (default), `1`, or `2`. A larger value indicates fewer segments, and the model tends to only segment sentences based on punctuation marks. We recommend you not change this parameter to avoid adverse effect on speech synthesis.
         * @type {number || null}
         */
        this.SegmentRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Speed = 'Speed' in params ? params.Speed : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModelType = 'ModelType' in params ? params.ModelType : null;
        this.VoiceType = 'VoiceType' in params ? params.VoiceType : null;
        this.PrimaryLanguage = 'PrimaryLanguage' in params ? params.PrimaryLanguage : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.EnableSubtitle = 'EnableSubtitle' in params ? params.EnableSubtitle : null;
        this.SegmentRate = 'SegmentRate' in params ? params.SegmentRate : null;

    }
}

module.exports = {
    TextToVoiceResponse: TextToVoiceResponse,
    Subtitle: Subtitle,
    TextToVoiceRequest: TextToVoiceRequest,

}
