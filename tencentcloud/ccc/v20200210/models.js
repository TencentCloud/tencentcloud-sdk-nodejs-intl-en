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
 * DescribeExtension request structure.
 * @class
 */
class DescribeExtensionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCCC instance application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Extension
         * @type {string || null}
         */
        this.ExtensionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;

    }
}

/**
 * StopAutoCalloutTask request structure.
 * @class
 */
class StopAutoCalloutTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Call Center Instance ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task ID.
         * @type {number || null}
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateIVRSession request structure.
 * @class
 */
class CreateIVRSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Called.
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * Specified IVR Id. Currently, it supports inbound and automatic outbound types
         * @type {number || null}
         */
        this.IVRId = null;

        /**
         * List of calling numbers.
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * Custom variable
         * @type {Array.<Variable> || null}
         */
        this.Variables = null;

        /**
         * User Data
         * @type {string || null}
         */
        this.UUI = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.IVRId = 'IVRId' in params ? params.IVRId : null;
        this.Callers = 'Callers' in params ? params.Callers : null;

        if (params.Variables) {
            this.Variables = new Array();
            for (let z in params.Variables) {
                let obj = new Variable();
                obj.deserialize(params.Variables[z]);
                this.Variables.push(obj);
            }
        }
        this.UUI = 'UUI' in params ? params.UUI : null;

    }
}

/**
 * HangUpCall request structure.
 * @class
 */
class HangUpCallRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCCC instance application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Session ID.
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * CreateSDKLoginToken response structure.
 * @class
 */
class CreateSDKLoginTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SDK log-in Token.
         * @type {string || null}
         */
        this.Token = null;

        /**
         * Expiry timestamp. Unix timestamp.
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * The path in which the SDK is loaded will change with its release.
         * @type {string || null}
         */
        this.SdkURL = null;

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
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.SdkURL = 'SdkURL' in params ? params.SdkURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyStaff request structure.
 * @class
 */
class ModifyStaffRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Agent account.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Agent name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent phone number (preceded by 0086, example: 008618011111111).
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * Agent nickname.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.StaffNo = null;

        /**
         * Bind skill group ID list.
         * @type {Array.<number> || null}
         */
        this.SkillGroupIds = null;

        /**
         * Whether the cell phone outbound call switch is enabled or not.
         * @type {boolean || null}
         */
        this.UseMobileCallOut = null;

        /**
         * Cell phone answering pattern: 0 - Off | 1 - Only when Offline | 2 - Always.
         * @type {number || null}
         */
        this.UseMobileAccept = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.StaffNo = 'StaffNo' in params ? params.StaffNo : null;
        this.SkillGroupIds = 'SkillGroupIds' in params ? params.SkillGroupIds : null;
        this.UseMobileCallOut = 'UseMobileCallOut' in params ? params.UseMobileCallOut : null;
        this.UseMobileAccept = 'UseMobileAccept' in params ? params.UseMobileAccept : null;

    }
}

/**
 * DescribeIvrAudioList response structure.
 * @class
 */
class DescribeIvrAudioListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * File Information
         * @type {Array.<AudioFileInfo> || null}
         */
        this.FileInfo = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.FileInfo) {
            this.FileInfo = new Array();
            for (let z in params.FileInfo) {
                let obj = new AudioFileInfo();
                obj.deserialize(params.FileInfo[z]);
                this.FileInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindNumberCallOutSkillGroup response structure.
 * @class
 */
class BindNumberCallOutSkillGroupResponse extends  AbstractModel {
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
 * ResetExtensionPassword request structure.
 * @class
 */
class ResetExtensionPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCCC instance application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Extension
         * @type {string || null}
         */
        this.ExtensionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;

    }
}

/**
 * DisableCCCPhoneNumber response structure.
 * @class
 */
class DisableCCCPhoneNumberResponse extends  AbstractModel {
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
 * DescribeProtectedTelCdr response structure.
 * @class
 */
class DescribeProtectedTelCdrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of call records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Call record.
         * @type {Array.<TelCdrInfo> || null}
         */
        this.TelCdrs = null;

        /**
         * Call record.
         * @type {Array.<TelCdrInfo> || null}
         */
        this.TelCdrList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TelCdrs) {
            this.TelCdrs = new Array();
            for (let z in params.TelCdrs) {
                let obj = new TelCdrInfo();
                obj.deserialize(params.TelCdrs[z]);
                this.TelCdrs.push(obj);
            }
        }

        if (params.TelCdrList) {
            this.TelCdrList = new Array();
            for (let z in params.TelCdrList) {
                let obj = new TelCdrInfo();
                obj.deserialize(params.TelCdrList[z]);
                this.TelCdrList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoCalloutTask request structure.
 * @class
 */
class DescribeAutoCalloutTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task ID.
         * @type {number || null}
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateAICall request structure.
 * @class
 */
class CreateAICallRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Called number.
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * ## Identity
You are Kate from the appointment department at Retell Health calling Cindy over the phone to prepare for the annual checkup coming up. You are a pleasant and friendly receptionist caring deeply for the user. You don't provide medical advice but would use the medical knowledge to understand user responses.

## Style Guardrails
Be Concise: Respond succinctly, addressing one topic at most.
Embrace Variety: Use diverse language and rephrasing to enhance clarity without repeating content.
Be Conversational: Use everyday language, making the chat feel like talking to a friend.
Be Proactive: Lead the conversation, often wrapping up with a question or next-step suggestion.
Avoid multiple questions in a single response.
Get clarity: If the user only partially answers a question, or if the answer is unclear, keep asking to get clarity.
Use a colloquial way of referring to the date (like Friday, January 14th, or Tuesday, January 12th, 2024 at 8am).

## Response Guideline
Adapt and Guess: Try to understand transcripts that may contain transcription errors. Avoid mentioning "transcription error" in the response.
Stay in Character: Keep conversations within your role's scope, guiding them back creatively without repeating.
Ensure Fluid Dialogue: Respond in a role-appropriate, direct manner to maintain a smooth conversation flow.

## Task
You will follow the steps below, do not skip steps, and only ask up to one question in response.
If at any time the user showed anger or wanted a human agent, call transfer_call to transfer to a human representative.
1. Begin with a self-introduction and verify if callee is Cindy.
  - if callee is not Cindy, call end_call to hang up, say sorry for the confusion when hanging up.
  - if Cindy is not available, call end_call politely to hang up, say you will call back later when hanging up.
2. Inform Cindy she has an annual body check coming up on April 4th, 2024 at 10am PDT. Check if Cindy is available.
  - If not, tell Cindy to reschedule online and jump to step 5.
3. Ask Cindy if there's anything that the doctor should know before the annual checkup.
  - Ask followup questions as needed to assess the severity of the issue, and understand how it has progressed.
4. Tell Cindy to not eat or drink that day before the checkup. Also tell Cindy to give you a callback if there's any changes in health condition.
5. Ask Cindy if she has any questions, and if so, answer them until there are no questions.
  - If user asks something you do not know, let them know you don't have the answer. Ask them if they have any other questions.
  - If user do not have any questions, call function end_call to hang up.
         * @type {string || null}
         */
        this.SystemPrompt = null;

        /**
         * Model interface protocol types, currently compatible with three protocol types:

- OpenAI protocol (including GPT, Hunyuan, DeepSeek, etc.):"openai"
- Azure protocol:"azure"
- Minimax protocol:"minimax"
         * @type {string || null}
         */
        this.LLMType = null;

        /**
         * Model name, such as

- OpenAI protocol
"gpt-4o-mini","gpt-4o","hunyuan-standard", "hunyuan-turbo","deepseek-chat";

- Azure protocol
"gpt-4o-mini", "gpt-4o";

- Minimax protocol
"deepseek-chat".
         * @type {string || null}
         */
        this.Model = null;

        /**
         * Model API key, for authentication information, please refer to the respective model's official website

- OpenAI protocol: [GPT](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key), [Hunyuan](https://intl.cloud.tencent.com/document/product/1729/111008?from_cn_redirect=1), [DeepSeek](https://api-docs.deepseek.com/zh-cn/);

- Azure protocol: [Azure GPT](https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Ctypescript%2Cpython-new&pivots=programming-language-studio#key-settings);

- Minimax:[Minimax](https://platform.minimaxi.com/document/Fast%20access?key=66701cf51d57f38758d581b2)
         * @type {string || null}
         */
        this.APIKey = null;

        /**
         * Model interface address

- OpenAI protocol
GPT:"https://api.openai.com/v1/"
Hunyuan:"https://api.hunyuan.cloud.tencent.com/v1"
Deepseek:"https://api.deepseek.com/v1"

- Azure protocol
 "https://{your-resource-name}.openai.azure.com?api-version={api-version}"

- Minimax protocol
"https://api.minimax.chat/v1"
         * @type {string || null}
         */
        this.APIUrl = null;

        /**
         * The following voice parameter values are available by default. If you wish to customize the voice type, please leave VoiceType blank and configure it in the CustomTTSConfig parameter.

Chinese:
ZhiMei: Zhimei, customer service female voice
ZhiXi: Zhixi, general female voice
ZhiQi: Zhiqi, customer service female voice
ZhiTian: Zhitian, female child voice
AiXiaoJing: Ai Xiaojing, dialogue female voice

English:
WeRose:English Female Voice
Monika:English Female Voice

Japanese:
Nanami

Korean:
SunHi

Indonesian (Indonesia):
Gadis

Malay (Malaysia):
Yasmin

 Tamil (Malaysia):
Kani

Thai (Thailand):
Achara

Vietnamese (Vietnam):
HoaiMy


         * @type {string || null}
         */
        this.VoiceType = null;

        /**
         * List of calling numbers.
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * Used to set the AI Agent Greeting.
         * @type {string || null}
         */
        this.WelcomeMessage = null;

        /**
         * 0: Use welcomeMessage (if empty, the callee speaks first; if not empty, the bot speaks first)
1:   Use AI to automatically generate welcomeMessage and speak first based on the prompt
         * @type {number || null}
         */
        this.WelcomeType = null;

        /**
         * Maximum Waiting Duration (milliseconds), default is 60 seconds, if the user does not speak within this time, the call is automatically terminated
         * @type {number || null}
         */
        this.MaxDuration = null;

        /**
         * ASR Supported Languages, default is "zh" Chinese,
Fill in the array with up to 4 languages, the first is the primary language for recognition, followed by optional languages,
Note: When the primary language is a Chinese dialect, optional languages are invalid
Currently, the supported languages are as follows. The English name of the language is on the left side of the equals sign, and the value to be filled in the Language field is on the right side, following ISO639:
1. Chinese = "zh" # Chinese
2. Chinese_TW = "zh-TW" # Taiwan (China)
3. Chinese_DIALECT = "zh-dialect" # Chinese Dialect
4. English = "en" # English
5. Vietnamese = "vi" # Vietnamese
6. Japanese = "ja" # Japanese
7. Korean = "ko" # Korean
8. Indonesia = "id" # Indonesian
9. Thai = "th" # Thai
10. Portuguese = "pt" # Portuguese
11. Turkish = "tr" # Turkish
12. Arabic = "ar" # Arabic
13. Spanish = "es" # Spanish
14. Hindi = "hi" # Hindi
15. French = "fr" # French
16. Malay = "ms" # Malay
17. Filipino = "fil" # Filipino
18. German = "de" # German
19. Italian = "it" # Italian
20. Russian = "ru" # Russian
         * @type {Array.<string> || null}
         */
        this.Languages = null;

        /**
         * Interrupt AI speech mode, default is 0, 0 indicates the server interrupts automatically, 1 indicates the server does not interrupt, interruption signal sent by the client side.
         * @type {number || null}
         */
        this.InterruptMode = null;

        /**
         * Used when InterruptMode is 0, unit in milliseconds, default is 500ms. It means that the server-side detects ongoing vocal input for the InterruptSpeechDuration milliseconds and then interrupts.
         * @type {number || null}
         */
        this.InterruptSpeechDuration = null;

        /**
         * Whether the model supports (or enables) call_end function calling
         * @type {boolean || null}
         */
        this.EndFunctionEnable = null;

        /**
         * Effective when EndFunctionEnable is true; the description of call_end function calling, default is "End the call when user has to leave (like says bye) or you are instructed to do so."
         * @type {string || null}
         */
        this.EndFunctionDesc = null;

        /**
         * The duration after which the user hasn't spoken to trigger a notification, minimum 10 seconds, default 10 seconds
         * @type {number || null}
         */
        this.NotifyDuration = null;

        /**
         * The AI prompt when NotifyDuration has passed without the user speaking, default is "Sorry, I didn't hear you clearly. Can you repeat that?"
         * @type {string || null}
         */
        this.NotifyMessage = null;

        /**
         * <p>And VoiceType field needs to select one, here is to use your own custom TTS, VoiceType is some built-in sound qualities</p>
<ul>
<li>Tencent TTS<br>
For configuration, please refer to <a href="https://intl.cloud.tencent.com/document/product/1073/92668?from_cn_redirect=1#55924b56-1a73-4663-a7a1-a8dd82d6e823" target="_blank">Tencent Cloud TTS documentation link</a></li>
</ul>
<div><div class="v-md-pre-wrapper copy-code-mode v-md-pre-wrapper- extra-class"><pre class="v-md-prism-"><code>{
    &quot;TTSType&quot;: &quot;tencent&quot;, // String TTS type, currently supports &quot;tencent&quot; and "minixmax", other vendors support in progress
    &quot;AppId&quot;: &quot;Your application ID&quot;, // String required
    &quot;SecretId&quot;: &quot;Your Secret ID&quot;, // String Required
    &quot;SecretKey&quot;:  &quot;Your Secret Key&quot;, // String Required
    &quot;VoiceType&quot;: 101001, // Integer Required, Sound quality ID, includes standard and premium sound quality. Premium sound quality is more realistic and differently priced than standard sound quality. See TTS billing overview for details. For the full list of sound quality IDs, see the TTS sound quality list.
    "Speed": 1.25, // Integer Optional, speech speed, range: [-2,6], corresponding to different speeds: -2: represents 0.6x -1: represents 0.8x 0: represents 1.0x (default) 1: represents 1.2x 2: represents 1.5x 6: represents 2.5x For more precise speed control, you can retain two decimal places, such as 0.5/1.25/2.81, etc. For parameter value to actual speed conversion, refer to Speed Conversion
    &quot;Volume&quot;: 5, // Integer Optional, Volume level, range: [0,10], corresponding to 11 levels of volume, default is 0, which represents normal volume.
    &quot;PrimaryLanguage&quot;: 1, // Integer Optional, Primary language 1- Chinese (default) 2- English 3- Japanese
    &quot;FastVoiceType&quot;: &quot;xxxx&quot;   // Optional parameter, Fast VRS parameter
  }
</code></pre>

  </div></div><ul>
<li>Minimax TTS<br>
For configuration, please refer to the <a href="https://platform.minimaxi.com/document/T2A%20V2?key=66719005a427f0c8a5701643" target="_blank">Minimax TTS documentation link</a>. Note that Minimax TTS has frequency limits, and exceeding the limit may cause response delays, <a href="https://platform.minimaxi.com/document/Rate%20limits?key=66b19417290299a26b234572" target="_blank">Minimax TTS frequency limit related documentation link</a>.</li>
</ul>
<div><div class="v-md-pre-wrapper copy-code-mode v-md-pre-wrapper- extra-class"><pre class="v-md-prism-"><code>{
        &quot;TTSType&quot;: &quot;minimax&quot;,  // String TTS type,
        &quot;Model&quot;: &quot;speech-01-turbo&quot;,
        &quot;APIUrl&quot;: &quot;https://api.minimax.chat/v1/t2a_v2&quot;,
        &quot;APIKey&quot;: &quot;eyxxxx&quot;,
        &quot;GroupId&quot;: &quot;181000000000000&quot;,
        &quot;VoiceType&quot;:&quot;female-tianmei-yujie&quot;,
        &quot;Speed&quot;: 1.2
}
</code></pre>
</div></div><ul>
<li>Volcano TTS</li>
</ul>
<p>For type of sound quality configuration, refer to the<a href="https://www.volcengine.com/docs/6561/162929" target="_blank">Volcano TTS documentation</a><br>
TTS Sound Quality List - Voice Technology - Volcano Engine<br>
Large Model TTS Sound Quality List - Voice Technology - Volcano Engine</p>
<div><div class="v-md-pre-wrapper copy-code-mode v-md-pre-wrapper- extra-class"><pre class="v-md-prism-"><code>{
    &quot;TTSType&quot;: &quot;volcengine&quot;,  // Required: String TTS type
    &quot;AppId&quot; : &quot;xxxxxxxx&quot;,   // Required: String Volcano Engine assigned AppId
    &quot;Token&quot; : &quot;TY9d4sQXHxxxxxxx&quot;, // Required: String type Volcano Engine access token
    &quot;Speed&quot; : 1.0,            // Optional parameter: Playback speed, default is 1.0
    &quot;Volume&quot;: 1.0,            // Optional parameter: Volume, default is 1.0
    &quot;Cluster&quot; : &quot;volcano_tts&quot;, // Optional parameter: Business cluster, default is volcano_tts
    &quot;VoiceType&quot; : &quot;zh_male_aojiaobazong_moon_bigtts&quot;   // Sound quality type, default is the sound quality of the large model TTS. If using normal TTS, fill in the corresponding sound quality type. Incorrect sound quality type will result in no sound.
}
</code></pre>

</div></div><ul>
<li>Azure TTS<br>
For configuration, refer to the<a href="https://docs.azure.cn/zh-cn/ai-services/speech-service/speech-synthesis-markup-voice" target="_blank">Azure TTS documentation</a></li>
</ul>
<div><div class="v-md-pre-wrapper copy-code-mode v-md-pre-wrapper- extra-class"><pre class="v-md-prism-"><code>{
    &quot;TTSType&quot;: &quot;azure&quot;, // Required: String TTS type
    &quot;SubscriptionKey&quot;: &quot;xxxxxxxx&quot;, // Required: String subscription key
    &quot;Region&quot;: &quot;chinanorth3&quot;,  // Required: String subscription region
    &quot;VoiceName&quot;: &quot;zh-CN-XiaoxiaoNeural&quot;, // Required: String Timbre Name required
    &quot;Language&quot;: &quot;zh-CN&quot;, // Required: String Language for synthesis
    &quot;Rate&quot;: 1 // Optional: float Playback Speed 0.5-2 default is 1
}
</code></pre>

</div></div><ul>
<li>Custom</li>
</ul>
<p>TTS<br>
Please refer to the specific protocol standards in the <a href="https://doc.weixin.qq.com/doc/w3_ANQAiAbdAFwHILbJBmtSqSbV1WZ3L?scode=AJEAIQdfAAo5a1xajYANQAiAbdAFw" target="_blank">Tencent documentation</a></p>
<div><div class="v-md-pre-wrapper copy-code-mode v-md-pre-wrapper- extra-class"><pre class="v-md-prism-"><code>{
  &quot;TTSType&quot;: &quot;custom&quot;, // Required String
  &quot;APIKey&quot;: &quot;ApiKey&quot;, // Required String for Authentication
  &quot;APIUrl&quot;: &quot;http://0.0.0.0:8080/stream-audio&quot; // Required String, TTS API URL
  &quot;AudioFormat&quot;: &quot;wav&quot;, // String, optional, expected audio format, such as mp3, ogg_opus, pcm, wav, default is wav, currently only pcm and wav are supported,
  &quot;SampleRate&quot;: 16000,  // Integer, optional, audio sample rate, default is 16000 (16k), recommended value is 16000
  &quot;AudioChannel&quot;: 1,    // Integer, optional, number of audio channels, values: 1 or 2, default is 1
}
</code></pre>

</div></div>
         * @type {string || null}
         */
        this.CustomTTSConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.SystemPrompt = 'SystemPrompt' in params ? params.SystemPrompt : null;
        this.LLMType = 'LLMType' in params ? params.LLMType : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.APIKey = 'APIKey' in params ? params.APIKey : null;
        this.APIUrl = 'APIUrl' in params ? params.APIUrl : null;
        this.VoiceType = 'VoiceType' in params ? params.VoiceType : null;
        this.Callers = 'Callers' in params ? params.Callers : null;
        this.WelcomeMessage = 'WelcomeMessage' in params ? params.WelcomeMessage : null;
        this.WelcomeType = 'WelcomeType' in params ? params.WelcomeType : null;
        this.MaxDuration = 'MaxDuration' in params ? params.MaxDuration : null;
        this.Languages = 'Languages' in params ? params.Languages : null;
        this.InterruptMode = 'InterruptMode' in params ? params.InterruptMode : null;
        this.InterruptSpeechDuration = 'InterruptSpeechDuration' in params ? params.InterruptSpeechDuration : null;
        this.EndFunctionEnable = 'EndFunctionEnable' in params ? params.EndFunctionEnable : null;
        this.EndFunctionDesc = 'EndFunctionDesc' in params ? params.EndFunctionDesc : null;
        this.NotifyDuration = 'NotifyDuration' in params ? params.NotifyDuration : null;
        this.NotifyMessage = 'NotifyMessage' in params ? params.NotifyMessage : null;
        this.CustomTTSConfig = 'CustomTTSConfig' in params ? params.CustomTTSConfig : null;

    }
}

/**
 * CreateAdminURL response structure.
 * @class
 */
class CreateAdminURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log-in link.
         * @type {string || null}
         */
        this.URL = null;

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
        this.URL = 'URL' in params ? params.URL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PausePredictiveDialingCampaign request structure.
 * @class
 */
class PausePredictiveDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * CreateCallOutSession response structure.
 * @class
 */
class CreateCallOutSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Newly created session ID.
         * @type {string || null}
         */
        this.SessionId = null;

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
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableCCCPhoneNumber request structure.
 * @class
 */
class DisableCCCPhoneNumberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number list starting with 0086.
         * @type {Array.<string> || null}
         */
        this.PhoneNumbers = null;

        /**
         * Disable switch: 0 for enable, 1 for disable.
         * @type {number || null}
         */
        this.Disabled = null;

        /**
         * TCCC instance application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumbers = 'PhoneNumbers' in params ? params.PhoneNumbers : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * ModifyStaffPassword response structure.
 * @class
 */
class ModifyStaffPasswordResponse extends  AbstractModel {
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
 * CreatePredictiveDialingCampaign request structure.
 * @class
 */
class CreatePredictiveDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Called list supporting E.164 or number formats without country code.
         * @type {Array.<string> || null}
         */
        this.Callees = null;

        /**
         * Calling list using the number formats displayed on the management side.
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * Being called sequence: 0 for random 1 for in order.
         * @type {number || null}
         */
        this.CallOrder = null;

        /**
         * ID of the used skill group of agents.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * Running priority of multiple tasks in the same application, from high to low 1 - 5.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Expected call drop rate, percentage, 5 - 50.
         * @type {number || null}
         */
        this.ExpectedAbandonRate = null;

        /**
         * Call retry interval, in seconds, [60 - 86,400].
         * @type {number || null}
         */
        this.RetryInterval = null;

        /**
         * Task start time. Unix timestamp. The task will automatically start after this time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Task termination time. Unix timestamp. The task will automatically terminate after this time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Specified IVR ID.
         * @type {number || null}
         */
        this.IVRId = null;

        /**
         * Number of call retries, 0 - 2.
         * @type {number || null}
         */
        this.RetryTimes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Callees = 'Callees' in params ? params.Callees : null;
        this.Callers = 'Callers' in params ? params.Callers : null;
        this.CallOrder = 'CallOrder' in params ? params.CallOrder : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.ExpectedAbandonRate = 'ExpectedAbandonRate' in params ? params.ExpectedAbandonRate : null;
        this.RetryInterval = 'RetryInterval' in params ? params.RetryInterval : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IVRId = 'IVRId' in params ? params.IVRId : null;
        this.RetryTimes = 'RetryTimes' in params ? params.RetryTimes : null;

    }
}

/**
 * AbortAgentCruiseDialingCampaign response structure.
 * @class
 */
class AbortAgentCruiseDialingCampaignResponse extends  AbstractModel {
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
 * Participant information.
 * @class
 */
class ServeParticipant extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent email.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * Agent Telephone
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * Ring timestamp. Unix second-level timestamp.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RingTimestamp = null;

        /**
         * Answer timestamp. Unix second-level timestamp.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AcceptTimestamp = null;

        /**
         * End timestamp. Unix second-level timestamp.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndedTimestamp = null;

        /**
         * Recording ID, which can be used to index the recording on the agent side
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * Participant type: "staffSeat", "outboundSeat", "staffPhoneSeat".
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Transfer Source Agent Information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferFrom = null;

        /**
         * Transfer source participant type is consistent with the Type value.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferFromType = null;

        /**
         * Transfer Destination Agent Information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferTo = null;

        /**
         * Transfer destination participant type is consistent with Type values.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferToType = null;

        /**
         * Skill group ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * Ending status.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndStatusString = null;

        /**
         * Recording URL.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordURL = null;

        /**
         * Participant sequence number, starting from 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Sequence = null;

        /**
         * Start timestamp. Unix second-level timestamp.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StartTimestamp = null;

        /**
         * Skill Group name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SkillGroupName = null;

        /**
         * Address of the third party COS for transferring recording.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomRecordURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.RingTimestamp = 'RingTimestamp' in params ? params.RingTimestamp : null;
        this.AcceptTimestamp = 'AcceptTimestamp' in params ? params.AcceptTimestamp : null;
        this.EndedTimestamp = 'EndedTimestamp' in params ? params.EndedTimestamp : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TransferFrom = 'TransferFrom' in params ? params.TransferFrom : null;
        this.TransferFromType = 'TransferFromType' in params ? params.TransferFromType : null;
        this.TransferTo = 'TransferTo' in params ? params.TransferTo : null;
        this.TransferToType = 'TransferToType' in params ? params.TransferToType : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.EndStatusString = 'EndStatusString' in params ? params.EndStatusString : null;
        this.RecordURL = 'RecordURL' in params ? params.RecordURL : null;
        this.Sequence = 'Sequence' in params ? params.Sequence : null;
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;
        this.CustomRecordURL = 'CustomRecordURL' in params ? params.CustomRecordURL : null;

    }
}

/**
 * DescribeTelCallInfo response structure.
 * @class
 */
class DescribeTelCallInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of minutes consumed by Outbound Package.
         * @type {number || null}
         */
        this.TelCallOutCount = null;

        /**
         * Number of minutes consumed by Inbound Package.
         * @type {number || null}
         */
        this.TelCallInCount = null;

        /**
         * Number of agent usage statistics.
         * @type {number || null}
         */
        this.SeatUsedCount = null;

        /**
         * Number of minutes consumed by Audio package.
         * @type {number || null}
         */
        this.VoipCallInCount = null;

        /**
         * Number of minutes consumed by Audio package.
         * @type {number || null}
         */
        this.VOIPCallInCount = null;

        /**
         * Number of minutes consumed by Offline Speech-to-Text Package.
         * @type {number || null}
         */
        this.AsrOfflineCount = null;

        /**
         * Number of minutes consumed by Real-time Speech-to-Text Package.
         * @type {number || null}
         */
        this.AsrRealtimeCount = null;

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
        this.TelCallOutCount = 'TelCallOutCount' in params ? params.TelCallOutCount : null;
        this.TelCallInCount = 'TelCallInCount' in params ? params.TelCallInCount : null;
        this.SeatUsedCount = 'SeatUsedCount' in params ? params.SeatUsedCount : null;
        this.VoipCallInCount = 'VoipCallInCount' in params ? params.VoipCallInCount : null;
        this.VOIPCallInCount = 'VOIPCallInCount' in params ? params.VOIPCallInCount : null;
        this.AsrOfflineCount = 'AsrOfflineCount' in params ? params.AsrOfflineCount : null;
        this.AsrRealtimeCount = 'AsrRealtimeCount' in params ? params.AsrRealtimeCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExtensions response structure.
 * @class
 */
class DescribeExtensionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total query count.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Telephone information list.
         * @type {Array.<ExtensionInfo> || null}
         */
        this.ExtensionList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ExtensionList) {
            this.ExtensionList = new Array();
            for (let z in params.ExtensionList) {
                let obj = new ExtensionInfo();
                obj.deserialize(params.ExtensionList[z]);
                this.ExtensionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteExtension request structure.
 * @class
 */
class DeleteExtensionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCCC instance application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Extension
         * @type {string || null}
         */
        this.ExtensionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;

    }
}

/**
 * DescribePredictiveDialingCampaign request structure.
 * @class
 */
class DescribePredictiveDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * DescribePredictiveDialingCampaign response structure.
 * @class
 */
class DescribePredictiveDialingCampaignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

        /**
         * Task Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Being called sequence: 0 for random 1 for in order.
         * @type {number || null}
         */
        this.CallOrder = null;

        /**
         * ID of the used skill group of agents.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * Specified IVR ID.
         * @type {number || null}
         */
        this.IVRId = null;

        /**
         * Running priority of multiple tasks in the same application, from high to low 1 - 5.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Expected call drop rate, percentage, 5 - 50.
         * @type {number || null}
         */
        this.ExpectedAbandonRate = null;

        /**
         * Number of call retries, 0 - 2.
         * @type {number || null}
         */
        this.RetryTimes = null;

        /**
         * Call retry interval, in seconds, [60 - 86,400].
         * @type {number || null}
         */
        this.RetryInterval = null;

        /**
         * Task start time. Unix timestamp. The task will automatically start after this time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Task termination time. Unix timestamp. The task will automatically terminate after this time.
         * @type {number || null}
         */
        this.EndTime = null;

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
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CallOrder = 'CallOrder' in params ? params.CallOrder : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.IVRId = 'IVRId' in params ? params.IVRId : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.ExpectedAbandonRate = 'ExpectedAbandonRate' in params ? params.ExpectedAbandonRate : null;
        this.RetryTimes = 'RetryTimes' in params ? params.RetryTimes : null;
        this.RetryInterval = 'RetryInterval' in params ? params.RetryInterval : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Agent status-related information
 * @class
 */
class StaffStatusMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent email.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * Agent status free Available | busy Busy | rest On Break | notReady Not Ready | afterCallWork Post-call Adjustment | offline Offline
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Supplementary Information on Agent Status
         * @type {StaffStatusExtra || null}
         */
        this.StatusExtra = null;

        /**
         * Total Online duration of the day.
         * @type {number || null}
         */
        this.OnlineDuration = null;

        /**
         * Total Available duration of the day.
         * @type {number || null}
         */
        this.FreeDuration = null;

        /**
         * Total Busy duration of the day.
         * @type {number || null}
         */
        this.BusyDuration = null;

        /**
         * Total Not Ready status duration of the day.
         * @type {number || null}
         */
        this.NotReadyDuration = null;

        /**
         * Total Break duration of the day.
         * @type {number || null}
         */
        this.RestDuration = null;

        /**
         * Total After Call Work duration of the day.
         * @type {number || null}
         */
        this.AfterCallWorkDuration = null;

        /**
         * Reason for Break.
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * Whether to reserve Break status.
         * @type {boolean || null}
         */
        this.ReserveRest = null;

        /**
         * Whether to reserve Not Ready status.
         * @type {boolean || null}
         */
        this.ReserveNotReady = null;

        /**
         * Cell phone answering pattern: 0 - Off | 1 - Only when Offline | 2 - Always.
         * @type {number || null}
         */
        this.UseMobileAccept = null;

        /**
         * Cell phone outbound call switch.
         * @type {boolean || null}
         */
        this.UseMobileCallOut = null;

        /**
         * Last online timestamp.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastOnlineTimestamp = null;

        /**
         * Last status timestamp.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastStatusTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Email = 'Email' in params ? params.Email : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.StatusExtra) {
            let obj = new StaffStatusExtra();
            obj.deserialize(params.StatusExtra)
            this.StatusExtra = obj;
        }
        this.OnlineDuration = 'OnlineDuration' in params ? params.OnlineDuration : null;
        this.FreeDuration = 'FreeDuration' in params ? params.FreeDuration : null;
        this.BusyDuration = 'BusyDuration' in params ? params.BusyDuration : null;
        this.NotReadyDuration = 'NotReadyDuration' in params ? params.NotReadyDuration : null;
        this.RestDuration = 'RestDuration' in params ? params.RestDuration : null;
        this.AfterCallWorkDuration = 'AfterCallWorkDuration' in params ? params.AfterCallWorkDuration : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.ReserveRest = 'ReserveRest' in params ? params.ReserveRest : null;
        this.ReserveNotReady = 'ReserveNotReady' in params ? params.ReserveNotReady : null;
        this.UseMobileAccept = 'UseMobileAccept' in params ? params.UseMobileAccept : null;
        this.UseMobileCallOut = 'UseMobileCallOut' in params ? params.UseMobileCallOut : null;
        this.LastOnlineTimestamp = 'LastOnlineTimestamp' in params ? params.LastOnlineTimestamp : null;
        this.LastStatusTimestamp = 'LastStatusTimestamp' in params ? params.LastStatusTimestamp : null;

    }
}

/**
 * DescribeTelCdr request structure.
 * @class
 */
class DescribeTelCdrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start timestamp, Unix Timestamp in Seconds. Supports up to the past 180 days.
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * End timestamp, Unix Timestamp in Seconds. The range between the end time and start time is less than 90 days.
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * Instance ID (deprecated).
         * @type {number || null}
         */
        this.InstanceId = null;

        /**
         * Maximum number of returned entries (deprecated).
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset (deprecated).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Page size (required), up to 100.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number (required), starting from 0.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Filter by Phone Number.
         * @type {Array.<string> || null}
         */
        this.Phones = null;

        /**
         * Filter by SessionId.
         * @type {Array.<string> || null}
         */
        this.SessionIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.Phones = 'Phones' in params ? params.Phones : null;
        this.SessionIds = 'SessionIds' in params ? params.SessionIds : null;

    }
}

/**
 * DescribeAutoCalloutTasks response structure.
 * @class
 */
class DescribeAutoCalloutTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Task list.
         * @type {Array.<AutoCalloutTaskInfo> || null}
         */
        this.Tasks = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new AutoCalloutTaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Package purchase information.
 * @class
 */
class PackageBuyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Package ID.
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * Package type, 0 - Outbound call package | 1 - 400 inbound call package.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Total package.
         * @type {number || null}
         */
        this.CapacitySize = null;

        /**
         * Remaining package.
         * @type {number || null}
         */
        this.CapacityRemain = null;

        /**
         * Purchased timestamp.
         * @type {number || null}
         */
        this.BuyTime = null;

        /**
         * End timestamp.
         * @type {number || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CapacitySize = 'CapacitySize' in params ? params.CapacitySize : null;
        this.CapacityRemain = 'CapacityRemain' in params ? params.CapacityRemain : null;
        this.BuyTime = 'BuyTime' in params ? params.BuyTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyExtension response structure.
 * @class
 */
class ModifyExtensionResponse extends  AbstractModel {
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
 * CreateAgentCruiseDialingCampaign request structure.
 * @class
 */
class CreateAgentCruiseDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent Account
         * @type {string || null}
         */
        this.Agent = null;

        /**
         * Single-round Concurrent Call Volume 1-20
         * @type {number || null}
         */
        this.ConcurrencyNumber = null;

        /**
         * Task start time. Unix timestamp. The task will automatically start after this time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Task termination time. Unix timestamp. The task will automatically terminate after this time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Called list supporting E.164 or number formats without country code.
         * @type {Array.<string> || null}
         */
        this.Callees = null;

        /**
         * Calling list using the number formats displayed on the management side.
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * Being called sequence: 0 for random 1 for in order.
         * @type {number || null}
         */
        this.CallOrder = null;

        /**
         * Caller Custom Data, Maximum Length 1024
         * @type {string || null}
         */
        this.UUI = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Agent = 'Agent' in params ? params.Agent : null;
        this.ConcurrencyNumber = 'ConcurrencyNumber' in params ? params.ConcurrencyNumber : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Callees = 'Callees' in params ? params.Callees : null;
        this.Callers = 'Callers' in params ? params.Callers : null;
        this.CallOrder = 'CallOrder' in params ? params.CallOrder : null;
        this.UUI = 'UUI' in params ? params.UUI : null;

    }
}

/**
 * CreateStaff response structure.
 * @class
 */
class CreateStaffResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error agent list and error information.
Note: This field may return null, indicating that no valid value could be obtained.
         * @type {Array.<ErrStaffItem> || null}
         */
        this.ErrorStaffList = null;

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

        if (params.ErrorStaffList) {
            this.ErrorStaffList = new Array();
            for (let z in params.ErrorStaffList) {
                let obj = new ErrStaffItem();
                obj.deserialize(params.ErrorStaffList[z]);
                this.ErrorStaffList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePredictiveDialingCampaigns request structure.
 * @class
 */
class DescribePredictiveDialingCampaignsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Page size, 100 maximum.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number starting from 0.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Query the task list name keyword.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Query task list skill group ID.
         * @type {number || null}
         */
        this.SkillGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;

    }
}

/**
 * DescribeSkillGroupInfoList response structure.
 * @class
 */
class DescribeSkillGroupInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of skill groups.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Skill Group Information List.
         * @type {Array.<SkillGroupInfoItem> || null}
         */
        this.SkillGroupList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SkillGroupList) {
            this.SkillGroupList = new Array();
            for (let z in params.SkillGroupList) {
                let obj = new SkillGroupInfoItem();
                obj.deserialize(params.SkillGroupList[z]);
                this.SkillGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNumbers response structure.
 * @class
 */
class DescribeNumbersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total quantity
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Number list.
         * @type {Array.<NumberInfo> || null}
         */
        this.Numbers = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Numbers) {
            this.Numbers = new Array();
            for (let z in params.Numbers) {
                let obj = new NumberInfo();
                obj.deserialize(params.Numbers[z]);
                this.Numbers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePredictiveDialingCampaign request structure.
 * @class
 */
class DeletePredictiveDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * UploadIvrAudio request structure.
 * @class
 */
class UploadIvrAudioRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Audio File List
         * @type {Array.<UploadAudioInfo> || null}
         */
        this.AudioList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.AudioList) {
            this.AudioList = new Array();
            for (let z in params.AudioList) {
                let obj = new UploadAudioInfo();
                obj.deserialize(params.AudioList[z]);
                this.AudioList.push(obj);
            }
        }

    }
}

/**
 * DescribeStaffInfoList response structure.
 * @class
 */
class DescribeStaffInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of agent users.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Agent user information list.
         * @type {Array.<StaffInfo> || null}
         */
        this.StaffList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.StaffList) {
            this.StaffList = new Array();
            for (let z in params.StaffList) {
                let obj = new StaffInfo();
                obj.deserialize(params.StaffList[z]);
                this.StaffList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindNumberCallOutSkillGroup request structure.
 * @class
 */
class UnbindNumberCallOutSkillGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Number to be unbound.
         * @type {string || null}
         */
        this.Number = null;

        /**
         * List of skill group IDs to be unbound.
         * @type {Array.<number> || null}
         */
        this.SkillGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.SkillGroupIds = 'SkillGroupIds' in params ? params.SkillGroupIds : null;

    }
}

/**
 * CreateAutoCalloutTask request structure.
 * @class
 */
class CreateAutoCalloutTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task starting timestamp. Unix second-level timestamp.
         * @type {number || null}
         */
        this.NotBefore = null;

        /**
         * List of called numbers.
         * @type {Array.<string> || null}
         */
        this.Callees = null;

        /**
         * List of calling numbers.
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * IVR used for calling.
         * @type {number || null}
         */
        this.IvrId = null;

        /**
         * Task name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Task stop timestamp. Unix second-level timestamp.
         * @type {number || null}
         */
        this.NotAfter = null;

        /**
         * Maximum attempts, 1-3 times
         * @type {number || null}
         */
        this.Tries = null;

        /**
         * Custom variables (supported only in advanced versions).
         * @type {Array.<Variable> || null}
         */
        this.Variables = null;

        /**
         * UUI
         * @type {string || null}
         */
        this.UUI = null;

        /**
         * Property of the called.
         * @type {Array.<CalleeAttribute> || null}
         */
        this.CalleeAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.NotBefore = 'NotBefore' in params ? params.NotBefore : null;
        this.Callees = 'Callees' in params ? params.Callees : null;
        this.Callers = 'Callers' in params ? params.Callers : null;
        this.IvrId = 'IvrId' in params ? params.IvrId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NotAfter = 'NotAfter' in params ? params.NotAfter : null;
        this.Tries = 'Tries' in params ? params.Tries : null;

        if (params.Variables) {
            this.Variables = new Array();
            for (let z in params.Variables) {
                let obj = new Variable();
                obj.deserialize(params.Variables[z]);
                this.Variables.push(obj);
            }
        }
        this.UUI = 'UUI' in params ? params.UUI : null;

        if (params.CalleeAttributes) {
            this.CalleeAttributes = new Array();
            for (let z in params.CalleeAttributes) {
                let obj = new CalleeAttribute();
                obj.deserialize(params.CalleeAttributes[z]);
                this.CalleeAttributes.push(obj);
            }
        }

    }
}

/**
 * ResumePredictiveDialingCampaign response structure.
 * @class
 */
class ResumePredictiveDialingCampaignResponse extends  AbstractModel {
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
 * Inbound capability group metrics.
 * @class
 */
class CallInSkillGroupMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Skill group ID.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * Data metrics.
         * @type {CallInMetrics || null}
         */
        this.Metrics = null;

        /**
         * Skill group name.
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
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;

        if (params.Metrics) {
            let obj = new CallInMetrics();
            obj.deserialize(params.Metrics)
            this.Metrics = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * CreateExtension response structure.
 * @class
 */
class CreateExtensionResponse extends  AbstractModel {
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
 * CreateCCCSkillGroup request structure.
 * @class
 */
class CreateCCCSkillGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required).
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Skill group name.
         * @type {string || null}
         */
        this.SkillGroupName = null;

        /**
         * Skill group type 0-Cell phone, 1-Online, 3-Audio, 4-Video.
         * @type {number || null}
         */
        this.SkillGroupType = null;

        /**
         * The maximum number of people received by the skill group (the maximum number of people that one seat in this skill group can receive) is set to 1 by default. 1. If the skill group type is online, the maximum could be set to one and above.
2. If the skill group type is phone, audio, or video, then the maximum must be 1
         * @type {number || null}
         */
        this.MaxConcurrency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;
        this.SkillGroupType = 'SkillGroupType' in params ? params.SkillGroupType : null;
        this.MaxConcurrency = 'MaxConcurrency' in params ? params.MaxConcurrency : null;

    }
}

/**
 * DescribeAutoCalloutTask response structure.
 * @class
 */
class DescribeAutoCalloutTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task Description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Task start timestamp.
         * @type {number || null}
         */
        this.NotBefore = null;

        /**
         * Task end timestamp.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NotAfter = null;

        /**
         * Calling list.
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * Called information list.
         * @type {Array.<AutoCalloutTaskCalleeInfo> || null}
         */
        this.Callees = null;

        /**
         * IvrId used by the task.
         * @type {number || null}
         */
        this.IvrId = null;

        /**
         * Task status: 0 - initial, 1 - running, 2 - completed, 3 - ending, 4 - terminated.
         * @type {number || null}
         */
        this.State = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.NotBefore = 'NotBefore' in params ? params.NotBefore : null;
        this.NotAfter = 'NotAfter' in params ? params.NotAfter : null;
        this.Callers = 'Callers' in params ? params.Callers : null;

        if (params.Callees) {
            this.Callees = new Array();
            for (let z in params.Callees) {
                let obj = new AutoCalloutTaskCalleeInfo();
                obj.deserialize(params.Callees[z]);
                this.Callees.push(obj);
            }
        }
        this.IvrId = 'IvrId' in params ? params.IvrId : null;
        this.State = 'State' in params ? params.State : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCCCSkillGroup response structure.
 * @class
 */
class CreateCCCSkillGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Skill group ID.
         * @type {number || null}
         */
        this.SkillGroupId = null;

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
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTelSession request structure.
 * @class
 */
class DescribeTelSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Session ID.
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * DescribeSkillGroupInfoList request structure.
 * @class
 */
class DescribeSkillGroupInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Page size, upper limit 100.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number starting from 0.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Using skill group ID when querying a single skill group.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * Used when querying skill groups with a modified time greater or equal to ModifiedTime.
         * @type {number || null}
         */
        this.ModifiedTime = null;

        /**
         * Skill group name.
         * @type {string || null}
         */
        this.SkillGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;

    }
}

/**
 * Outbound call task called information.
 * @class
 */
class AutoCalloutTaskCalleeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Called number.
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * Call status 0 - Initial, 1 - Answered, 2 - Unanswered, 3 - Calling, 4 - Pending Retry.
         * @type {number || null}
         */
        this.State = null;

        /**
         * List of session IDs.
         * @type {Array.<string> || null}
         */
        this.Sessions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.State = 'State' in params ? params.State : null;
        this.Sessions = 'Sessions' in params ? params.Sessions : null;

    }
}

/**
 * Agent User Information
 * @class
 */
class SeatUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent email.
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * Worker number.
Note: This field may return null, indicating that no valid value could be obtained.
         * @type {string || null}
         */
        this.StaffNumber = null;

        /**
         * Agent's Telephone Number (With 0086 Prefix)
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * Agent nickname.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * User ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * List of skill groups associated with the seat
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SkillGroupNameList = null;

        /**
         * 1: Admin.
2: Quality inspector.
3: Ordinary agent.
else: Custom Role ID.
Note: This field may return null, indicating that no valid value could be obtained.
         * @type {number || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.StaffNumber = 'StaffNumber' in params ? params.StaffNumber : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.SkillGroupNameList = 'SkillGroupNameList' in params ? params.SkillGroupNameList : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * UpdateCCCSkillGroup response structure.
 * @class
 */
class UpdateCCCSkillGroupResponse extends  AbstractModel {
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
 * DescribePredictiveDialingSessions response structure.
 * @class
 */
class DescribePredictiveDialingSessionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total data volume.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of session IDs for a call. You can access detailed call bills in batches through https://intl.cloud.tencent.com/document/product/679/47714.?from_cn_redirect=1
         * @type {Array.<string> || null}
         */
        this.SessionList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.SessionList = 'SessionList' in params ? params.SessionList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * When adding customer service personnel in batches, information of the customer service personnel with an error is returned.
 * @class
 */
class ErrStaffItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent Email Address
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * Error code.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Error description.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * PausePredictiveDialingCampaign response structure.
 * @class
 */
class PausePredictiveDialingCampaignResponse extends  AbstractModel {
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
 * PSTN session type.
 * @class
 */
class PSTNSession extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session ID.
         * @type {string || null}
         */
        this.SessionID = null;

        /**
         * Temporary room ID for session.
         * @type {string || null}
         */
        this.RoomID = null;

        /**
         * Caller.
         * @type {string || null}
         */
        this.Caller = null;

        /**
         * Called.
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * Start time. Unix timestamp.
         * @type {number || null}
         */
        this.StartTimestamp = null;

        /**
         * Ring time. Unix timestamp.
         * @type {number || null}
         */
        this.RingTimestamp = null;

        /**
         * Answer time. Unix timestamp.
         * @type {number || null}
         */
        this.AcceptTimestamp = null;

        /**
         * Agent email.
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.StaffNumber = null;

        /**
         * Session Status
ringing Ringing
seatJoining  waiting for the agent to answer
inProgress  Ongoing
finished - Completed.
         * @type {string || null}
         */
        this.SessionStatus = null;

        /**
         * Session call direction, 0 - Inbound | 1 - Outbound.
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * The number used for transferring to the external line (Outbound Caller).
         * @type {string || null}
         */
        this.OutBoundCaller = null;

        /**
         * Outbound callee.
         * @type {string || null}
         */
        this.OutBoundCallee = null;

        /**
         * Caller number protection ID. Effective when the number protection map feature is activated, and the Caller field is empty.
         * @type {string || null}
         */
        this.ProtectedCaller = null;

        /**
         * Called number protection ID. Effective when the number protection map feature is activated, and the Callee field is empty.
         * @type {string || null}
         */
        this.ProtectedCallee = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionID = 'SessionID' in params ? params.SessionID : null;
        this.RoomID = 'RoomID' in params ? params.RoomID : null;
        this.Caller = 'Caller' in params ? params.Caller : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.RingTimestamp = 'RingTimestamp' in params ? params.RingTimestamp : null;
        this.AcceptTimestamp = 'AcceptTimestamp' in params ? params.AcceptTimestamp : null;
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.StaffNumber = 'StaffNumber' in params ? params.StaffNumber : null;
        this.SessionStatus = 'SessionStatus' in params ? params.SessionStatus : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.OutBoundCaller = 'OutBoundCaller' in params ? params.OutBoundCaller : null;
        this.OutBoundCallee = 'OutBoundCallee' in params ? params.OutBoundCallee : null;
        this.ProtectedCaller = 'ProtectedCaller' in params ? params.ProtectedCaller : null;
        this.ProtectedCallee = 'ProtectedCallee' in params ? params.ProtectedCallee : null;

    }
}

/**
 * UpdatePredictiveDialingCampaign request structure.
 * @class
 */
class UpdatePredictiveDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Generated task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

        /**
         * Task Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Called list supporting E.164 or number formats without country code.
         * @type {Array.<string> || null}
         */
        this.Callees = null;

        /**
         * Calling list using the number formats displayed on the management side.
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * Being called sequence: 0 for random 1 for in order.
         * @type {number || null}
         */
        this.CallOrder = null;

        /**
         * ID of the used skill group of agents.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * Running priority of multiple tasks in the same application, from high to low 1 - 5.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Expected call drop rate, percentage, 5 - 50.
         * @type {number || null}
         */
        this.ExpectedAbandonRate = null;

        /**
         * Call retry interval, in seconds, [60 - 86,400].
         * @type {number || null}
         */
        this.RetryInterval = null;

        /**
         * Task start time. Unix timestamp. The task will automatically start after this time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Task termination time. Unix timestamp. The task will automatically terminate after this time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Specified IVR ID.
         * @type {number || null}
         */
        this.IVRId = null;

        /**
         * Number of call retries, 0 - 2.
         * @type {number || null}
         */
        this.RetryTimes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Callees = 'Callees' in params ? params.Callees : null;
        this.Callers = 'Callers' in params ? params.Callers : null;
        this.CallOrder = 'CallOrder' in params ? params.CallOrder : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.ExpectedAbandonRate = 'ExpectedAbandonRate' in params ? params.ExpectedAbandonRate : null;
        this.RetryInterval = 'RetryInterval' in params ? params.RetryInterval : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IVRId = 'IVRId' in params ? params.IVRId : null;
        this.RetryTimes = 'RetryTimes' in params ? params.RetryTimes : null;

    }
}

/**
 * DescribeStaffInfoList request structure.
 * @class
 */
class DescribeStaffInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Page size, upper limit 9,999
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number starting from 0.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Agent account used when querying a single agent.
         * @type {string || null}
         */
        this.StaffMail = null;

        /**
         * Use when querying for agents with a modification time greater or equal to ModifiedTime.
         * @type {number || null}
         */
        this.ModifiedTime = null;

        /**
         * Skill group ID.
         * @type {number || null}
         */
        this.SkillGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.StaffMail = 'StaffMail' in params ? params.StaffMail : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;

    }
}

/**
 * Automatic outbound call task list item.
 * @class
 */
class AutoCalloutTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Number of calls.
         * @type {number || null}
         */
        this.CalleeCount = null;

        /**
         * List of calling numbers.
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * Start timestamp.
         * @type {number || null}
         */
        this.NotBefore = null;

        /**
         * End timestamp.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.NotAfter = null;

        /**
         * IvrId used by the task.
         * @type {number || null}
         */
        this.IvrId = null;

        /**
         * Task status:
0 Initial: Task created, calling not started
1 Running
2  Completed: All calls in the task are completed
3 Ending: The task is due, but some calls are still not finished
4 Ended: Task terminated due to expiration
         * @type {number || null}
         */
        this.State = null;

        /**
         * Task ID.
         * @type {number || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.CalleeCount = 'CalleeCount' in params ? params.CalleeCount : null;
        this.Callers = 'Callers' in params ? params.Callers : null;
        this.NotBefore = 'NotBefore' in params ? params.NotBefore : null;
        this.NotAfter = 'NotAfter' in params ? params.NotAfter : null;
        this.IvrId = 'IvrId' in params ? params.IvrId : null;
        this.State = 'State' in params ? params.State : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeIvrAudioList request structure.
 * @class
 */
class DescribeIvrAudioListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Page size, upper limit 50
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number starting from 0.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * File alias
         * @type {Array.<string> || null}
         */
        this.CustomFileName = null;

        /**
         * Filename
         * @type {Array.<string> || null}
         */
        this.AudioFileName = null;

        /**
         * File ID
         * @type {Array.<number> || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.CustomFileName = 'CustomFileName' in params ? params.CustomFileName : null;
        this.AudioFileName = 'AudioFileName' in params ? params.AudioFileName : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * Skill group information.
 * @class
 */
class SkillGroupInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Skill group ID.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * Skill group name.
         * @type {string || null}
         */
        this.SkillGroupName = null;

        /**
         * (Deprecated) Type: IM, TEL, ALL (full media).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Session allocation policy.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RoutePolicy = null;

        /**
         * Should the conversation allocation prioritize the last service seat?
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.UsingLastSeat = null;

        /**
         * Maximum concurrency number of single client service (default 1 for telephone type).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxConcurrency = null;

        /**
         * Last modification time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastModifyTimestamp = null;

        /**
         * Skill group type 0-phone, 1-online, 3-audio, 4-video.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SkillGroupType = null;

        /**
         * Extension number within the skill group
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RoutePolicy = 'RoutePolicy' in params ? params.RoutePolicy : null;
        this.UsingLastSeat = 'UsingLastSeat' in params ? params.UsingLastSeat : null;
        this.MaxConcurrency = 'MaxConcurrency' in params ? params.MaxConcurrency : null;
        this.LastModifyTimestamp = 'LastModifyTimestamp' in params ? params.LastModifyTimestamp : null;
        this.SkillGroupType = 'SkillGroupType' in params ? params.SkillGroupType : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * ResetExtensionPassword response structure.
 * @class
 */
class ResetExtensionPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Reset password.
         * @type {string || null}
         */
        this.Password = null;

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
        this.Password = 'Password' in params ? params.Password : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCCCSkillGroup request structure.
 * @class
 */
class UpdateCCCSkillGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required).
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Skill group ID.
         * @type {number || null}
         */
        this.SkillGroupID = null;

        /**
         * Modified skill group name.
         * @type {string || null}
         */
        this.SkillGroupName = null;

        /**
         * Modified maximum concurrency and the maximum synchronization is 2.
         * @type {number || null}
         */
        this.MaxConcurrency = null;

        /**
         * True for simultaneous ringing, false for sequential ringing.
         * @type {boolean || null}
         */
        this.RingAll = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SkillGroupID = 'SkillGroupID' in params ? params.SkillGroupID : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;
        this.MaxConcurrency = 'MaxConcurrency' in params ? params.MaxConcurrency : null;
        this.RingAll = 'RingAll' in params ? params.RingAll : null;

    }
}

/**
 * ModifyStaffPassword request structure.
 * @class
 */
class ModifyStaffPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Agent email.
         * @type {string || null}
         */
        this.Email = null;

        /**
         * The set password 
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * ModifyStaff response structure.
 * @class
 */
class ModifyStaffResponse extends  AbstractModel {
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
 * ModifyExtension request structure.
 * @class
 */
class ModifyExtensionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCCC instance application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Extension
         * @type {string || null}
         */
        this.ExtensionId = null;

        /**
         * Extension name.
         * @type {string || null}
         */
        this.ExtensionName = null;

        /**
         * Affiliated skill group list.
         * @type {Array.<number> || null}
         */
        this.SkillGroupIds = null;

        /**
         * Bind agent email account.
         * @type {string || null}
         */
        this.Relation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;
        this.ExtensionName = 'ExtensionName' in params ? params.ExtensionName : null;
        this.SkillGroupIds = 'SkillGroupIds' in params ? params.SkillGroupIds : null;
        this.Relation = 'Relation' in params ? params.Relation : null;

    }
}

/**
 * CreatePredictiveDialingCampaign response structure.
 * @class
 */
class CreatePredictiveDialingCampaignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Generated task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

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
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdatePredictiveDialingCampaign response structure.
 * @class
 */
class UpdatePredictiveDialingCampaignResponse extends  AbstractModel {
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
 * PSTN Session Information.
 * @class
 */
class PSTNSessionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session ID.
         * @type {string || null}
         */
        this.SessionID = null;

        /**
         * Temporary room ID for session.
         * @type {string || null}
         */
        this.RoomID = null;

        /**
         * Caller.
         * @type {string || null}
         */
        this.Caller = null;

        /**
         * Called.
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * Start time. Unix timestamp.
         * @type {string || null}
         */
        this.StartTimestamp = null;

        /**
         * Answer time. Unix timestamp.
         * @type {string || null}
         */
        this.AcceptTimestamp = null;

        /**
         * Agent email.
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.StaffNumber = null;

        /**
         * Agent Status inProgress Ongoing
         * @type {string || null}
         */
        this.SessionStatus = null;

        /**
         * Session call direction, 0 - Inbound | 1 - Outbound.
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Ring time. Unix timestamp.
         * @type {number || null}
         */
        this.RingTimestamp = null;

        /**
         * Caller number protection ID. Effective when the number protection map feature is activated, and the Caller field is empty.
         * @type {string || null}
         */
        this.ProtectedCaller = null;

        /**
         * Called number protection ID. Effective when the number protection map feature is activated, and the Callee field is empty.
         * @type {string || null}
         */
        this.ProtectedCallee = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionID = 'SessionID' in params ? params.SessionID : null;
        this.RoomID = 'RoomID' in params ? params.RoomID : null;
        this.Caller = 'Caller' in params ? params.Caller : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.AcceptTimestamp = 'AcceptTimestamp' in params ? params.AcceptTimestamp : null;
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.StaffNumber = 'StaffNumber' in params ? params.StaffNumber : null;
        this.SessionStatus = 'SessionStatus' in params ? params.SessionStatus : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.RingTimestamp = 'RingTimestamp' in params ? params.RingTimestamp : null;
        this.ProtectedCaller = 'ProtectedCaller' in params ? params.ProtectedCaller : null;
        this.ProtectedCallee = 'ProtectedCallee' in params ? params.ProtectedCallee : null;

    }
}

/**
 * AbortPredictiveDialingCampaign response structure.
 * @class
 */
class AbortPredictiveDialingCampaignResponse extends  AbstractModel {
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
 * DescribeNumbers request structure.
 * @class
 */
class DescribeNumbersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Page number, starting from 0.
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Page size, default 20.
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * Telephone information.
 * @class
 */
class ExtensionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Extension full name.
         * @type {string || null}
         */
        this.FullExtensionId = null;

        /**
         * Extension
         * @type {string || null}
         */
        this.ExtensionId = null;

        /**
         * Affiliated skill group list.
         * @type {string || null}
         */
        this.SkillGroupId = null;

        /**
         * Extension name.
         * @type {string || null}
         */
        this.ExtensionName = null;

        /**
         * Creation Time
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Last modification time.
         * @type {number || null}
         */
        this.ModifyTime = null;

        /**
         * Telephone status (0 Offline, 100 Free, 200 Busy).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Whether to register.
         * @type {boolean || null}
         */
        this.Register = null;

        /**
         * Bind Agent Email
         * @type {string || null}
         */
        this.Relation = null;

        /**
         * Bind Agent Name
         * @type {string || null}
         */
        this.RelationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.FullExtensionId = 'FullExtensionId' in params ? params.FullExtensionId : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.ExtensionName = 'ExtensionName' in params ? params.ExtensionName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Register = 'Register' in params ? params.Register : null;
        this.Relation = 'Relation' in params ? params.Relation : null;
        this.RelationName = 'RelationName' in params ? params.RelationName : null;

    }
}

/**
 * BindNumberCallOutSkillGroup request structure.
 * @class
 */
class BindNumberCallOutSkillGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Number to be bound.
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Skill group ID list to be bound.
         * @type {Array.<number> || null}
         */
        this.SkillGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.SkillGroupIds = 'SkillGroupIds' in params ? params.SkillGroupIds : null;

    }
}

/**
 * DeletePredictiveDialingCampaign response structure.
 * @class
 */
class DeletePredictiveDialingCampaignResponse extends  AbstractModel {
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
 * IVR Key Information.
 * @class
 */
class IVRKeyPressedElement extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Tag associated with key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * UnbindNumberCallOutSkillGroup response structure.
 * @class
 */
class UnbindNumberCallOutSkillGroupResponse extends  AbstractModel {
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
 * DescribeAgentCruiseDialingCampaign request structure.
 * @class
 */
class DescribeAgentCruiseDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * DescribePSTNActiveSessionList request structure.
 * @class
 */
class DescribePSTNActiveSessionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Data offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned data entries, up to 25.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateAutoCalloutTask response structure.
 * @class
 */
class CreateAutoCalloutTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {number || null}
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
 * Phone call information.
 * @class
 */
class TelCdrInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Caller number.
         * @type {string || null}
         */
        this.Caller = null;

        /**
         * Called number.
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * Call initiation timestamp, Unix timestamp.
         * @type {number || null}
         */
        this.Time = null;

        /**
         * Call direction: 0 - Inbound, 1 - Outbound.
         * @type {number || null}
         */
        this.Direction = null;

        /**
         * Call duration.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Recording Information.
         * @type {string || null}
         */
        this.RecordURL = null;

        /**
         * Recording ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * Agent Information
         * @type {SeatUserInfo || null}
         */
        this.SeatUser = null;

        /**
         * EndStatus corresponds one-to-one with EndStatusString, specific enumerations are as follows:

**Scenario	         EndStatus	EndStatusString	Status Description**

Incoming & Outgoing Calls	1	        ok	                        Normal End

Incoming & Outgoing Calls	0	        error	                System Error

Incoming Call	             102	        ivrGiveUp	        User Gave Up During IVR

Incoming Call	             103	        waitingGiveUp	       User Gave Up During Queue

Incoming Call	             104	        ringingGiveUp	       User Gave Up During Ringing

Incoming Call	             105	        noSeatOnline	       No Seat Online

Incoming Call              106	       notWorkTime	       Non-Working Hours   

Incoming Call	            107	       ivrEnd	               Ended Directly After IVR

Incoming Call	            100	      blackList Incoming blocklist  

Outgoing Call               2	              unconnected	Unconnected

Outgoing Call             108	        restrictedCallee	Callee restricted due to high risk

Outgoing Call             109	        tooManyRequest	    Frequency limit exceeded

Outgoing Call             110	        restrictedArea	    Call to restricted area

Outgoing Call             111	        restrictedTime	Call time restricted
                         
Outgoing Call             201            unknown	Unknown status

Outgoing Call             202            notAnswer	Missed call

Outgoing Call            203	    userReject	Reject/Hang Up

Outgoing Call	          204	    powerOff	Shutting down

Outgoing Call           205            numberNotExist	Disconnected Number

Outgoing Call	         206	           busy	During the call

Outgoing Call   	        207	           outOfCredit	Overdue Payment

Outgoing Call	         208	           operatorError	 ISP Carrier Line Anomaly

Outgoing Call         	209	           callerCancel	Caller Cancelled

Outgoing Call	        210	           notInService	Out of Service Area

Incoming & Outgoing Calls	211    clientError    Client Error

         * @type {number || null}
         */
        this.EndStatus = null;

        /**
         * Skill group name.
         * @type {string || null}
         */
        this.SkillGroup = null;

        /**
         * Caller's location.
         * @type {string || null}
         */
        this.CallerLocation = null;

        /**
         * Time spent in IVR stage.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IVRDuration = null;

        /**
         * Ring timestamp. UNIX second-level timestamp
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RingTimestamp = null;

        /**
         * Answer timestamp. UNIX second-Level timestamp
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AcceptTimestamp = null;

        /**
         * End timestamp. UNIX second-level timestamp
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EndedTimestamp = null;

        /**
         * IVR key information, e.g. ["1","2","3"]
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.IVRKeyPressed = null;

        /**
         * Hanging Up Party seat Seat user Users system system
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HungUpSide = null;

        /**
         * List of Service Participants
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ServeParticipant> || null}
         */
        this.ServeParticipants = null;

        /**
         * Skill group ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * EndStatus corresponds one-to-one with EndStatusString, specific enumerations are as follows:

**Scenario	         EndStatus	EndStatusString	Status Description**

Incoming & Outgoing Calls	1	        ok	                        Normal End

Incoming & Outgoing Calls	0	        error	                System Error

Incoming Call	             102	        ivrGiveUp	        User Gave Up During IVR

Incoming Call	             103	        waitingGiveUp	       User Gave Up During Queue

Incoming Call	             104	        ringingGiveUp	       User Gave Up During Ringing

Incoming Call	             105	        noSeatOnline	       No Seat Online

Incoming Call              106	       notWorkTime	       Non-Working Hours   

Incoming Call	            107	       ivrEnd	               Ended Directly After IVR

Incoming Call	            100	      blackList Incoming blocklist  

Outgoing Call               2	              unconnected	Unconnected

Outgoing Call             108	        restrictedCallee	Callee restricted due to high risk

Outgoing Call             109	        tooManyRequest	    Frequency limit exceeded

Outgoing Call             110	        restrictedArea	    Call to restricted area

Outgoing Call             111	        restrictedTime	Call time restricted
                         
Outgoing Call             201            unknown	Unknown status

Outgoing Call             202            notAnswer	Missed call

Outgoing Call            203	    userReject	Reject/Hang Up

Outgoing Call	          204	    powerOff	Shutting down

Outgoing Call           205            numberNotExist	Disconnected Number

Phone Call Out	         206	           busy	In Call

Outgoing Call   	        207	           outOfCredit	Overdue Payment

Outgoing Call	         208	           operatorError	 ISP Carrier Line Anomaly

Outgoing Call         	209	           callerCancel	Caller Cancelled

Outgoing Call	        210	           notInService	Out of Service Area

Phone Call In & Out	211    clientError    Client Error

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndStatusString = null;

        /**
         * Session start timestamp. UNIX second-level timestamp.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.StartTimestamp = null;

        /**
         * Queue entry time. Unix second-level timestamp.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.QueuedTimestamp = null;

        /**
         * Post-IVR key information (e.g. [{"Key":"1","Label":"Very Satisfied"}])
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<IVRKeyPressedElement> || null}
         */
        this.PostIVRKeyPressed = null;

        /**
         * Queue Skill Group ID.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.QueuedSkillGroupId = null;

        /**
         * Session ID.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * Caller number protection ID. (Effective when the number protection map feature is activated, and the Caller field is empty).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProtectedCaller = null;

        /**
         * Called number protection ID (Effective when the number protection map feature is activated, and the Callee field is empty).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProtectedCallee = null;

        /**
         * Customer custom data. (User-to-User Interface)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uui = null;

        /**
         * Customer custom data. (User-to-User Interface)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UUI = null;

        /**
         * IVR key information (e.g.?[{"Key":"1","Label":"highly satisfied"}])
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<IVRKeyPressedElement> || null}
         */
        this.IVRKeyPressedEx = null;

        /**
         * Access to the ASR text information address of the recording.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AsrUrl = null;

        /**
         * Address of the third party COS for transferring recording.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomRecordURL = null;

        /**
         * Remarks
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Queue skill group name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.QueuedSkillGroupName = null;

        /**
         * Audio message recording URL during call.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.VoicemailRecordURL = null;

        /**
         * Text Information address of ASR audio message during a call.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.VoicemailAsrURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Caller = 'Caller' in params ? params.Caller : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.RecordURL = 'RecordURL' in params ? params.RecordURL : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;

        if (params.SeatUser) {
            let obj = new SeatUserInfo();
            obj.deserialize(params.SeatUser)
            this.SeatUser = obj;
        }
        this.EndStatus = 'EndStatus' in params ? params.EndStatus : null;
        this.SkillGroup = 'SkillGroup' in params ? params.SkillGroup : null;
        this.CallerLocation = 'CallerLocation' in params ? params.CallerLocation : null;
        this.IVRDuration = 'IVRDuration' in params ? params.IVRDuration : null;
        this.RingTimestamp = 'RingTimestamp' in params ? params.RingTimestamp : null;
        this.AcceptTimestamp = 'AcceptTimestamp' in params ? params.AcceptTimestamp : null;
        this.EndedTimestamp = 'EndedTimestamp' in params ? params.EndedTimestamp : null;
        this.IVRKeyPressed = 'IVRKeyPressed' in params ? params.IVRKeyPressed : null;
        this.HungUpSide = 'HungUpSide' in params ? params.HungUpSide : null;

        if (params.ServeParticipants) {
            this.ServeParticipants = new Array();
            for (let z in params.ServeParticipants) {
                let obj = new ServeParticipant();
                obj.deserialize(params.ServeParticipants[z]);
                this.ServeParticipants.push(obj);
            }
        }
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.EndStatusString = 'EndStatusString' in params ? params.EndStatusString : null;
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.QueuedTimestamp = 'QueuedTimestamp' in params ? params.QueuedTimestamp : null;

        if (params.PostIVRKeyPressed) {
            this.PostIVRKeyPressed = new Array();
            for (let z in params.PostIVRKeyPressed) {
                let obj = new IVRKeyPressedElement();
                obj.deserialize(params.PostIVRKeyPressed[z]);
                this.PostIVRKeyPressed.push(obj);
            }
        }
        this.QueuedSkillGroupId = 'QueuedSkillGroupId' in params ? params.QueuedSkillGroupId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ProtectedCaller = 'ProtectedCaller' in params ? params.ProtectedCaller : null;
        this.ProtectedCallee = 'ProtectedCallee' in params ? params.ProtectedCallee : null;
        this.Uui = 'Uui' in params ? params.Uui : null;
        this.UUI = 'UUI' in params ? params.UUI : null;

        if (params.IVRKeyPressedEx) {
            this.IVRKeyPressedEx = new Array();
            for (let z in params.IVRKeyPressedEx) {
                let obj = new IVRKeyPressedElement();
                obj.deserialize(params.IVRKeyPressedEx[z]);
                this.IVRKeyPressedEx.push(obj);
            }
        }
        this.AsrUrl = 'AsrUrl' in params ? params.AsrUrl : null;
        this.CustomRecordURL = 'CustomRecordURL' in params ? params.CustomRecordURL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.QueuedSkillGroupName = 'QueuedSkillGroupName' in params ? params.QueuedSkillGroupName : null;
        this.VoicemailRecordURL = 'VoicemailRecordURL' in params ? params.VoicemailRecordURL : null;
        this.VoicemailAsrURL = 'VoicemailAsrURL' in params ? params.VoicemailAsrURL : null;

    }
}

/**
 * UploadIvrAudio response structure.
 * @class
 */
class UploadIvrAudioResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of failed uploads
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UploadIvrAudioFailedInfo> || null}
         */
        this.FailedFileList = null;

        /**
         * List of successful uploads
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AudioFileInfo> || null}
         */
        this.SuccessFileList = null;

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

        if (params.FailedFileList) {
            this.FailedFileList = new Array();
            for (let z in params.FailedFileList) {
                let obj = new UploadIvrAudioFailedInfo();
                obj.deserialize(params.FailedFileList[z]);
                this.FailedFileList.push(obj);
            }
        }

        if (params.SuccessFileList) {
            this.SuccessFileList = new Array();
            for (let z in params.SuccessFileList) {
                let obj = new AudioFileInfo();
                obj.deserialize(params.SuccessFileList[z]);
                this.SuccessFileList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Number information.
 * @class
 */
class NumberInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number.
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Bound outbound call skill group.
         * @type {Array.<number> || null}
         */
        this.CallOutSkillGroupIds = null;

        /**
         * Number status, 1-normal, 2-disabled due to overdue payment, 4-disabled by the administrator, 5-disabled due to violation.
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Number = 'Number' in params ? params.Number : null;
        this.CallOutSkillGroupIds = 'CallOutSkillGroupIds' in params ? params.CallOutSkillGroupIds : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * DeleteStaff request structure.
 * @class
 */
class DeleteStaffRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Customer service emails, supports up to 200 at a time.
         * @type {Array.<string> || null}
         */
        this.StaffList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StaffList = 'StaffList' in params ? params.StaffList : null;

    }
}

/**
 * Real-Time inbound metric.
 * @class
 */
class CallInMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of IVR residency.
         * @type {number || null}
         */
        this.IvrCount = null;

        /**
         * Number in queue.
         * @type {number || null}
         */
        this.QueueCount = null;

        /**
         * Number in ringing.
         * @type {number || null}
         */
        this.RingCount = null;

        /**
         * Number in connection.
         * @type {number || null}
         */
        this.AcceptCount = null;

        /**
         * Number of customer service transferring to the external line.
         * @type {number || null}
         */
        this.TransferOuterCount = null;

        /**
         * Maximum queue duration.
         * @type {number || null}
         */
        this.MaxQueueDuration = null;

        /**
         * Average queue duration.
         * @type {number || null}
         */
        this.AvgQueueDuration = null;

        /**
         * Maximum ringing duration.
         * @type {number || null}
         */
        this.MaxRingDuration = null;

        /**
         * Average ringing duration.
         * @type {number || null}
         */
        this.AvgRingDuration = null;

        /**
         * Maximum connection duration.
         * @type {number || null}
         */
        this.MaxAcceptDuration = null;

        /**
         * Average connection duration.
         * @type {number || null}
         */
        this.AvgAcceptDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IvrCount = 'IvrCount' in params ? params.IvrCount : null;
        this.QueueCount = 'QueueCount' in params ? params.QueueCount : null;
        this.RingCount = 'RingCount' in params ? params.RingCount : null;
        this.AcceptCount = 'AcceptCount' in params ? params.AcceptCount : null;
        this.TransferOuterCount = 'TransferOuterCount' in params ? params.TransferOuterCount : null;
        this.MaxQueueDuration = 'MaxQueueDuration' in params ? params.MaxQueueDuration : null;
        this.AvgQueueDuration = 'AvgQueueDuration' in params ? params.AvgQueueDuration : null;
        this.MaxRingDuration = 'MaxRingDuration' in params ? params.MaxRingDuration : null;
        this.AvgRingDuration = 'AvgRingDuration' in params ? params.AvgRingDuration : null;
        this.MaxAcceptDuration = 'MaxAcceptDuration' in params ? params.MaxAcceptDuration : null;
        this.AvgAcceptDuration = 'AvgAcceptDuration' in params ? params.AvgAcceptDuration : null;

    }
}

/**
 * DescribeCCCBuyInfoList request structure.
 * @class
 */
class DescribeCCCBuyInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID list, query all applications when not transmitted.
         * @type {Array.<number> || null}
         */
        this.SdkAppIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppIds = 'SdkAppIds' in params ? params.SdkAppIds : null;

    }
}

/**
 * Agent Information with Skill Group Priority
 * @class
 */
class StaffInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent email.
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * Agent's Telephone Number
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * Agent nickname.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * Agent ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StaffNumber = null;

        /**
         * User Role ID
         * @type {number || null}
         */
        this.RoleId = null;

        /**
         * Affiliated Skill Group List.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SkillGroupItem> || null}
         */
        this.SkillGroupList = null;

        /**
         * Last modification time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.LastModifyTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.StaffNumber = 'StaffNumber' in params ? params.StaffNumber : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;

        if (params.SkillGroupList) {
            this.SkillGroupList = new Array();
            for (let z in params.SkillGroupList) {
                let obj = new SkillGroupItem();
                obj.deserialize(params.SkillGroupList[z]);
                this.SkillGroupList.push(obj);
            }
        }
        this.LastModifyTimestamp = 'LastModifyTimestamp' in params ? params.LastModifyTimestamp : null;

    }
}

/**
 * DescribePredictiveDialingCampaigns response structure.
 * @class
 */
class DescribePredictiveDialingCampaignsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total data volume.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Data
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DescribePredictiveDialingCampaignsElement> || null}
         */
        this.CampaignList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.CampaignList) {
            this.CampaignList = new Array();
            for (let z in params.CampaignList) {
                let obj = new DescribePredictiveDialingCampaignsElement();
                obj.deserialize(params.CampaignList[z]);
                this.CampaignList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTelCallInfo request structure.
 * @class
 */
class DescribeTelCallInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start timestamp, Unix timestamp (query dimension supports only daily. For example, to query May 1st, pass startTime:"2023-05-01 00:00:00","endTime":"2023-05-01 23:59:59" timestamp. To query May 1st and May 2nd, pass startTime:"2023-05-01 00:00:00","endTime":"2023-05-02 23:59:59" timestamp)
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * End timestamp, Unix timestamp, the query time range is up to 90 days (query dimension supports only daily. For example, to query May 1st, pass startTime:"2023-05-01 00:00:00","endTime":"2023-05-01 23:59:59" timestamp. To query May 1st and May 2nd, pass startTime:"2023-05-01 00:00:00","endTime":"2023-05-02 23:59:59" timestamp)
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * Application ID list, when having multiple IDs, the returned value is the sum of all the IDs.
         * @type {Array.<number> || null}
         */
        this.SdkAppIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.SdkAppIdList = 'SdkAppIdList' in params ? params.SdkAppIdList : null;

    }
}

/**
 * Variable.
 * @class
 */
class Variable extends  AbstractModel {
    constructor(){
        super();

        /**
         * Variable name.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Variable value.
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
 * Inbound line dimension metrics.
 * @class
 */
class CallInNumberMetrics extends  AbstractModel {
    constructor(){
        super();

        /**
         * Line number.
         * @type {string || null}
         */
        this.Number = null;

        /**
         * Line-related metrics.
         * @type {CallInMetrics || null}
         */
        this.Metrics = null;

        /**
         * Bound skill group metrics.
         * @type {Array.<CallInSkillGroupMetrics> || null}
         */
        this.SkillGroupMetrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Number = 'Number' in params ? params.Number : null;

        if (params.Metrics) {
            let obj = new CallInMetrics();
            obj.deserialize(params.Metrics)
            this.Metrics = obj;
        }

        if (params.SkillGroupMetrics) {
            this.SkillGroupMetrics = new Array();
            for (let z in params.SkillGroupMetrics) {
                let obj = new CallInSkillGroupMetrics();
                obj.deserialize(params.SkillGroupMetrics[z]);
                this.SkillGroupMetrics.push(obj);
            }
        }

    }
}

/**
 * CreateExtension request structure.
 * @class
 */
class CreateExtensionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCCC instance application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Extension
         * @type {string || null}
         */
        this.ExtensionId = null;

        /**
         * Extension name.
         * @type {string || null}
         */
        this.ExtensionName = null;

        /**
         * Bound skill group list.
         * @type {Array.<number> || null}
         */
        this.SkillGroupIds = null;

        /**
         * Bound agent email.
         * @type {string || null}
         */
        this.Relation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;
        this.ExtensionName = 'ExtensionName' in params ? params.ExtensionName : null;
        this.SkillGroupIds = 'SkillGroupIds' in params ? params.SkillGroupIds : null;
        this.Relation = 'Relation' in params ? params.Relation : null;

    }
}

/**
 * Bound skill group list for agents.
 * @class
 */
class StaffSkillGroupList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Skill group ID.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * Priority of the agent in the skill group (1 is the highest, 5 is the lowest, 3 by default).
         * @type {number || null}
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * AbortAgentCruiseDialingCampaign request structure.
 * @class
 */
class AbortAgentCruiseDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * Query the predictive outbound call task list elements.
 * @class
 */
class DescribePredictiveDialingCampaignsElement extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
Note: This field may return null if no valid value is obtained.
         * @type {number || null}
         */
        this.CampaignId = null;

        /**
         * Task Name
Note: This field might return null if no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Task status 0 - Ready to start, 1 - In progress, 2 - Paused, 3 - Terminated, 4 - Completed.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Task status reasons 0 - Normal, 1 - Manually ended, 2 - Ended due to overtime.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StatusReason = null;

        /**
         * Number of called numbers.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CalleeCount = null;

        /**
         * Number of completed calls.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FinishedCalleeCount = null;

        /**
         * Running priority of multiple tasks in the same application, from high to low 1 - 5.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * ID of the used skill group of agents.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SkillGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusReason = 'StatusReason' in params ? params.StatusReason : null;
        this.CalleeCount = 'CalleeCount' in params ? params.CalleeCount : null;
        this.FinishedCalleeCount = 'FinishedCalleeCount' in params ? params.FinishedCalleeCount : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;

    }
}

/**
 * HangUpCall response structure.
 * @class
 */
class HangUpCallResponse extends  AbstractModel {
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
 * StopAutoCalloutTask response structure.
 * @class
 */
class StopAutoCalloutTaskResponse extends  AbstractModel {
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
 * AbortPredictiveDialingCampaign request structure.
 * @class
 */
class AbortPredictiveDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * Skill group information.
 * @class
 */
class SkillGroupItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Skill group ID.
         * @type {number || null}
         */
        this.SkillGroupId = null;

        /**
         * Skill group name.
         * @type {string || null}
         */
        this.SkillGroupName = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Type: IM, TEL, ALL (full media).
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SkillGroupId = 'SkillGroupId' in params ? params.SkillGroupId : null;
        this.SkillGroupName = 'SkillGroupName' in params ? params.SkillGroupName : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Number purchase information.
 * @class
 */
class PhoneNumBuyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Telephone Number
         * @type {string || null}
         */
        this.PhoneNum = null;

        /**
         * Number type, 0 - Landline | 1 - Virtual Business Number | 2 - ISP Number | 3 - 400 Number.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Call type of the number, 1 - Inbound | 2 - Outbound | 3 - Inbound and outbound.
         * @type {number || null}
         */
        this.CallType = null;

        /**
         * Purchased timestamp.
         * @type {number || null}
         */
        this.BuyTime = null;

        /**
         * End timestamp.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number status, 1-Normal | 2-Suspended due to non-payment | 4-Admin suspended | 5-Suspended due to violation.
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CallType = 'CallType' in params ? params.CallType : null;
        this.BuyTime = 'BuyTime' in params ? params.BuyTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * DescribeCCCBuyInfoList response structure.
 * @class
 */
class DescribeCCCBuyInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of applications.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Application purchase information list.
         * @type {Array.<SdkAppIdBuyInfo> || null}
         */
        this.SdkAppIdBuyList = null;

        /**
         * Package purchase information list.
         * @type {Array.<PackageBuyInfo> || null}
         */
        this.PackageBuyList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SdkAppIdBuyList) {
            this.SdkAppIdBuyList = new Array();
            for (let z in params.SdkAppIdBuyList) {
                let obj = new SdkAppIdBuyInfo();
                obj.deserialize(params.SdkAppIdBuyList[z]);
                this.SdkAppIdBuyList.push(obj);
            }
        }

        if (params.PackageBuyList) {
            this.PackageBuyList = new Array();
            for (let z in params.PackageBuyList) {
                let obj = new PackageBuyInfo();
                obj.deserialize(params.PackageBuyList[z]);
                this.PackageBuyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindStaffSkillGroupList response structure.
 * @class
 */
class UnbindStaffSkillGroupListResponse extends  AbstractModel {
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
 * ResumePredictiveDialingCampaign request structure.
 * @class
 */
class ResumePredictiveDialingCampaignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;

    }
}

/**
 * Upload Audio File Information
 * @class
 */
class UploadAudioInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * File Alias (can be duplicated)
         * @type {string || null}
         */
        this.CustomFileName = null;

        /**
         * Audio File Link (supports mp3 and wav formats, file size not exceeding 5MB)
         * @type {string || null}
         */
        this.AudioUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomFileName = 'CustomFileName' in params ? params.CustomFileName : null;
        this.AudioUrl = 'AudioUrl' in params ? params.AudioUrl : null;

    }
}

/**
 * DeleteExtension response structure.
 * @class
 */
class DeleteExtensionResponse extends  AbstractModel {
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
 * BindStaffSkillGroupList request structure.
 * @class
 */
class BindStaffSkillGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Agent email.
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * Bound skill group list
         * @type {Array.<number> || null}
         */
        this.SkillGroupList = null;

        /**
         * Bound skill group list (required).
         * @type {Array.<StaffSkillGroupList> || null}
         */
        this.StaffSkillGroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.SkillGroupList = 'SkillGroupList' in params ? params.SkillGroupList : null;

        if (params.StaffSkillGroupList) {
            this.StaffSkillGroupList = new Array();
            for (let z in params.StaffSkillGroupList) {
                let obj = new StaffSkillGroupList();
                obj.deserialize(params.StaffSkillGroupList[z]);
                this.StaffSkillGroupList.push(obj);
            }
        }

    }
}

/**
 * CreateAgentCruiseDialingCampaign response structure.
 * @class
 */
class CreateAgentCruiseDialingCampaignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Generated task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

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
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Failed to upload audio file information
 * @class
 */
class UploadIvrAudioFailedInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filename
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Reason for failure
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FailedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FailedMsg = 'FailedMsg' in params ? params.FailedMsg : null;

    }
}

/**
 * DescribeCallInMetrics response structure.
 * @class
 */
class DescribeCallInMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timestamp.
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Overall metrics.
         * @type {CallInMetrics || null}
         */
        this.TotalMetrics = null;

        /**
         * Circuit dimension metrics.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CallInNumberMetrics> || null}
         */
        this.NumberMetrics = null;

        /**
         * Skill group dimension metrics
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CallInSkillGroupMetrics> || null}
         */
        this.SkillGroupMetrics = null;

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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.TotalMetrics) {
            let obj = new CallInMetrics();
            obj.deserialize(params.TotalMetrics)
            this.TotalMetrics = obj;
        }

        if (params.NumberMetrics) {
            this.NumberMetrics = new Array();
            for (let z in params.NumberMetrics) {
                let obj = new CallInNumberMetrics();
                obj.deserialize(params.NumberMetrics[z]);
                this.NumberMetrics.push(obj);
            }
        }

        if (params.SkillGroupMetrics) {
            this.SkillGroupMetrics = new Array();
            for (let z in params.SkillGroupMetrics) {
                let obj = new CallInSkillGroupMetrics();
                obj.deserialize(params.SkillGroupMetrics[z]);
                this.SkillGroupMetrics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentCruiseDialingCampaign response structure.
 * @class
 */
class DescribeAgentCruiseDialingCampaignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent Account
         * @type {string || null}
         */
        this.Agent = null;

        /**
         * Single-round Concurrent Call Volume 1-20
         * @type {number || null}
         */
        this.ConcurrencyNumber = null;

        /**
         * Task start time. Unix timestamp. The task will automatically start after this time.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Task termination time. Unix timestamp. The task will automatically terminate after this time.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Being called sequence: 0 for random 1 for in order.
         * @type {number || null}
         */
        this.CallOrder = null;

        /**
         * Caller Custom Data, Maximum Length 1024
         * @type {string || null}
         */
        this.UUI = null;

        /**
         * Task status 0 Not started 1 Running 2 Completed 3 Terminated
         * @type {number || null}
         */
        this.State = null;

        /**
         * Total number of called parties
         * @type {number || null}
         */
        this.TotalCalleeCount = null;

        /**
         * Number of called parties
         * @type {number || null}
         */
        this.CalledCalleeCount = null;

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
        this.Agent = 'Agent' in params ? params.Agent : null;
        this.ConcurrencyNumber = 'ConcurrencyNumber' in params ? params.ConcurrencyNumber : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CallOrder = 'CallOrder' in params ? params.CallOrder : null;
        this.UUI = 'UUI' in params ? params.UUI : null;
        this.State = 'State' in params ? params.State : null;
        this.TotalCalleeCount = 'TotalCalleeCount' in params ? params.TotalCalleeCount : null;
        this.CalledCalleeCount = 'CalledCalleeCount' in params ? params.CalledCalleeCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAICall response structure.
 * @class
 */
class CreateAICallResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Newly created session ID.
         * @type {string || null}
         */
        this.SessionId = null;

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
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateIVRSession response structure.
 * @class
 */
class CreateIVRSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Newly created session ID.
         * @type {string || null}
         */
        this.SessionId = null;

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
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindStaffSkillGroupList request structure.
 * @class
 */
class UnbindStaffSkillGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Customer service email.
         * @type {string || null}
         */
        this.StaffEmail = null;

        /**
         * Unbound skill group list.
         * @type {Array.<number> || null}
         */
        this.SkillGroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StaffEmail = 'StaffEmail' in params ? params.StaffEmail : null;
        this.SkillGroupList = 'SkillGroupList' in params ? params.SkillGroupList : null;

    }
}

/**
 * DescribeTelCdr response structure.
 * @class
 */
class DescribeTelCdrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of call records.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Call record.
         * @type {Array.<TelCdrInfo> || null}
         */
        this.TelCdrs = null;

        /**
         * Call record.
         * @type {Array.<TelCdrInfo> || null}
         */
        this.TelCdrList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TelCdrs) {
            this.TelCdrs = new Array();
            for (let z in params.TelCdrs) {
                let obj = new TelCdrInfo();
                obj.deserialize(params.TelCdrs[z]);
                this.TelCdrs.push(obj);
            }
        }

        if (params.TelCdrList) {
            this.TelCdrList = new Array();
            for (let z in params.TelCdrList) {
                let obj = new TelCdrInfo();
                obj.deserialize(params.TelCdrList[z]);
                this.TelCdrList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStaffStatusMetrics request structure.
 * @class
 */
class DescribeStaffStatusMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Filter agent list. By default, do not pass all returned agent information.
         * @type {Array.<string> || null}
         */
        this.StaffList = null;

        /**
         * Filter skill group ID list.
         * @type {Array.<number> || null}
         */
        this.GroupIdList = null;

        /**
         * Filter agent status list Agent status free Available | busy Busy | rest On Break | notReady Not Ready | afterCallWork Post-call Adjustment | offline Offline
         * @type {Array.<string> || null}
         */
        this.StatusList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StaffList = 'StaffList' in params ? params.StaffList : null;
        this.GroupIdList = 'GroupIdList' in params ? params.GroupIdList : null;
        this.StatusList = 'StatusList' in params ? params.StatusList : null;

    }
}

/**
 * DeleteStaff response structure.
 * @class
 */
class DeleteStaffResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of customer service staff that can't be deleted when being online.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.OnlineStaffList = null;

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
        this.OnlineStaffList = 'OnlineStaffList' in params ? params.OnlineStaffList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Property of the called.
 * @class
 */
class CalleeAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * Called number.
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * Associate data.
         * @type {string || null}
         */
        this.UUI = null;

        /**
         * Parameter
         * @type {Array.<Variable> || null}
         */
        this.Variables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.UUI = 'UUI' in params ? params.UUI : null;

        if (params.Variables) {
            this.Variables = new Array();
            for (let z in params.Variables) {
                let obj = new Variable();
                obj.deserialize(params.Variables[z]);
                this.Variables.push(obj);
            }
        }

    }
}

/**
 * Supplementary Information on Agent Status
 * @class
 */
class StaffStatusExtra extends  AbstractModel {
    constructor(){
        super();

        /**
         * IM - Text | TEL - Cell phone | ALL - Full media.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * IN - Inbound | OUT - Outbound.
         * @type {string || null}
         */
        this.Direct = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Direct = 'Direct' in params ? params.Direct : null;

    }
}

/**
 * CreateStaff request structure.
 * @class
 */
class CreateStaffRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Customer information, no more than 10.
         * @type {Array.<SeatUserInfo> || null}
         */
        this.Staffs = null;

        /**
         * Whether to send a password mail or not (the default is true)
         * @type {boolean || null}
         */
        this.SendPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Staffs) {
            this.Staffs = new Array();
            for (let z in params.Staffs) {
                let obj = new SeatUserInfo();
                obj.deserialize(params.Staffs[z]);
                this.Staffs.push(obj);
            }
        }
        this.SendPassword = 'SendPassword' in params ? params.SendPassword : null;

    }
}

/**
 * Application purchase information.
 * @class
 */
class SdkAppIdBuyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Application Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent Purchase Count (still within the validity period)
         * @type {number || null}
         */
        this.StaffBuyNum = null;

        /**
         * Agent Purchase List (still within the validity period)
         * @type {Array.<StaffBuyInfo> || null}
         */
        this.StaffBuyList = null;

        /**
         * List of numbers purchased.
         * @type {Array.<PhoneNumBuyInfo> || null}
         */
        this.PhoneNumBuyList = null;

        /**
         * Number of office telephones purchased (still within the validity period).
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SipBuyNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.StaffBuyNum = 'StaffBuyNum' in params ? params.StaffBuyNum : null;

        if (params.StaffBuyList) {
            this.StaffBuyList = new Array();
            for (let z in params.StaffBuyList) {
                let obj = new StaffBuyInfo();
                obj.deserialize(params.StaffBuyList[z]);
                this.StaffBuyList.push(obj);
            }
        }

        if (params.PhoneNumBuyList) {
            this.PhoneNumBuyList = new Array();
            for (let z in params.PhoneNumBuyList) {
                let obj = new PhoneNumBuyInfo();
                obj.deserialize(params.PhoneNumBuyList[z]);
                this.PhoneNumBuyList.push(obj);
            }
        }
        this.SipBuyNum = 'SipBuyNum' in params ? params.SipBuyNum : null;

    }
}

/**
 * DescribePSTNActiveSessionList response structure.
 * @class
 */
class DescribePSTNActiveSessionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of items in the list.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List content.
         * @type {Array.<PSTNSessionInfo> || null}
         */
        this.Sessions = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Sessions) {
            this.Sessions = new Array();
            for (let z in params.Sessions) {
                let obj = new PSTNSessionInfo();
                obj.deserialize(params.Sessions[z]);
                this.Sessions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoCalloutTasks request structure.
 * @class
 */
class DescribeAutoCalloutTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Page size
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * DescribeTelSession response structure.
 * @class
 */
class DescribeTelSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Session information.
         * @type {PSTNSession || null}
         */
        this.Session = null;

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

        if (params.Session) {
            let obj = new PSTNSession();
            obj.deserialize(params.Session)
            this.Session = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAdminURL request structure.
 * @class
 */
class CreateAdminURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Admin account.
         * @type {string || null}
         */
        this.SeatUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SeatUserId = 'SeatUserId' in params ? params.SeatUserId : null;

    }
}

/**
 * DescribeStaffStatusMetrics response structure.
 * @class
 */
class DescribeStaffStatusMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Real-time information on agent status.
         * @type {Array.<StaffStatusMetrics> || null}
         */
        this.Metrics = null;

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

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new StaffStatusMetrics();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Audio file review information
 * @class
 */
class AudioFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * File ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FileId = null;

        /**
         * File alias
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomFileName = null;

        /**
         * Filename
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AudioFileName = null;

        /**
         * Review status, 0-Not reviewed, 1-Approved, 2-Rejected
Note: This field may return null, indicating that no valid values can be obtained.
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
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.CustomFileName = 'CustomFileName' in params ? params.CustomFileName : null;
        this.AudioFileName = 'AudioFileName' in params ? params.AudioFileName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateCallOutSession request structure.
 * @class
 */
class CreateCallOutSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Customer Service User ID usually refers to the customer service email.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * Called number must be preceded by 0086.
         * @type {string || null}
         */
        this.Callee = null;

        /**
         * Caller number (obsolete one and use Callers) must be preceded by 0086.
         * @type {string || null}
         */
        this.Caller = null;

        /**
         * Designated caller number list. If the prior number fails, it will automatically switch to the next number that must be preceded by 0086.
         * @type {Array.<string> || null}
         */
        this.Callers = null;

        /**
         * Whether to force the use of cell phone outbound call or not, currently only supports true, if true, please ensure that the allowlist has been configured.
         * @type {boolean || null}
         */
        this.IsForceUseMobile = null;

        /**
         * Custom data, length limited to 1024 bytes.
         * @type {string || null}
         */
        this.Uui = null;

        /**
         * Custom data, length limited to 1024 bytes.
         * @type {string || null}
         */
        this.UUI = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Callee = 'Callee' in params ? params.Callee : null;
        this.Caller = 'Caller' in params ? params.Caller : null;
        this.Callers = 'Callers' in params ? params.Callers : null;
        this.IsForceUseMobile = 'IsForceUseMobile' in params ? params.IsForceUseMobile : null;
        this.Uui = 'Uui' in params ? params.Uui : null;
        this.UUI = 'UUI' in params ? params.UUI : null;

    }
}

/**
 * BindStaffSkillGroupList response structure.
 * @class
 */
class BindStaffSkillGroupListResponse extends  AbstractModel {
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
 * DescribeExtensions request structure.
 * @class
 */
class DescribeExtensionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCCC instance application ID.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Page number (starting from 0)
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Filtering extension number list
         * @type {Array.<string> || null}
         */
        this.ExtensionIds = null;

        /**
         * Page size
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Fuzzy query field (fuzzy query for extension number, extension name, agent email, and agent name).
         * @type {string || null}
         */
        this.FuzzingKeyWord = null;

        /**
         * Whether to return the current status of the telephone or not.
         * @type {boolean || null}
         */
        this.IsNeedStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.ExtensionIds = 'ExtensionIds' in params ? params.ExtensionIds : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.FuzzingKeyWord = 'FuzzingKeyWord' in params ? params.FuzzingKeyWord : null;
        this.IsNeedStatus = 'IsNeedStatus' in params ? params.IsNeedStatus : null;

    }
}

/**
 * DescribeProtectedTelCdr request structure.
 * @class
 */
class DescribeProtectedTelCdrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start timestamp. Unix second-level timestamp.
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * End timestamp. Unix second-level timestamp.
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * For the Application ID, go to https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Page size, upper limit 100.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number starting from 0.
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
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * DescribePredictiveDialingSessions request structure.
 * @class
 */
class DescribePredictiveDialingSessionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Generated task ID.
         * @type {number || null}
         */
        this.CampaignId = null;

        /**
         * Page size, maximum of 1000
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number starting from 0.
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CampaignId = 'CampaignId' in params ? params.CampaignId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * CreateSDKLoginToken request structure.
 * @class
 */
class CreateSDKLoginTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Agent account.
         * @type {string || null}
         */
        this.SeatUserId = null;

        /**
         * Whether the generated token is for one-time verification?
         * @type {boolean || null}
         */
        this.OnlyOnce = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SeatUserId = 'SeatUserId' in params ? params.SeatUserId : null;
        this.OnlyOnce = 'OnlyOnce' in params ? params.OnlyOnce : null;

    }
}

/**
 * Agent purchase information
 * @class
 */
class StaffBuyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of agents purchased
         * @type {number || null}
         */
        this.Num = null;

        /**
         * Purchased timestamp.
         * @type {number || null}
         */
        this.BuyTime = null;

        /**
         * End timestamp.
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * Number of office telephones purchased.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SipNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Num = 'Num' in params ? params.Num : null;
        this.BuyTime = 'BuyTime' in params ? params.BuyTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SipNum = 'SipNum' in params ? params.SipNum : null;

    }
}

/**
 * DescribeCallInMetrics request structure.
 * @class
 */
class DescribeCallInMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Application ID (required) can be found at https://console.cloud.tencent.com/ccc.
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * Whether to return skill group dimension information or not (the default is "Yes").
         * @type {boolean || null}
         */
        this.EnabledSkillGroup = null;

        /**
         * Whether to return line dimension information or not (the default is "No").
         * @type {boolean || null}
         */
        this.EnabledNumber = null;

        /**
         * Filter skill group list.
         * @type {Array.<number> || null}
         */
        this.GroupIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.EnabledSkillGroup = 'EnabledSkillGroup' in params ? params.EnabledSkillGroup : null;
        this.EnabledNumber = 'EnabledNumber' in params ? params.EnabledNumber : null;
        this.GroupIdList = 'GroupIdList' in params ? params.GroupIdList : null;

    }
}

/**
 * DescribeExtension response structure.
 * @class
 */
class DescribeExtensionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Extension
         * @type {string || null}
         */
        this.ExtensionId = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.ExtensionDomain = null;

        /**
         * Registered password.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Proxy server address.
         * @type {string || null}
         */
        this.OutboundProxy = null;

        /**
         * Transfer protocol.
         * @type {string || null}
         */
        this.Transport = null;

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
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;
        this.ExtensionDomain = 'ExtensionDomain' in params ? params.ExtensionDomain : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.OutboundProxy = 'OutboundProxy' in params ? params.OutboundProxy : null;
        this.Transport = 'Transport' in params ? params.Transport : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeExtensionRequest: DescribeExtensionRequest,
    StopAutoCalloutTaskRequest: StopAutoCalloutTaskRequest,
    CreateIVRSessionRequest: CreateIVRSessionRequest,
    HangUpCallRequest: HangUpCallRequest,
    CreateSDKLoginTokenResponse: CreateSDKLoginTokenResponse,
    ModifyStaffRequest: ModifyStaffRequest,
    DescribeIvrAudioListResponse: DescribeIvrAudioListResponse,
    BindNumberCallOutSkillGroupResponse: BindNumberCallOutSkillGroupResponse,
    ResetExtensionPasswordRequest: ResetExtensionPasswordRequest,
    DisableCCCPhoneNumberResponse: DisableCCCPhoneNumberResponse,
    DescribeProtectedTelCdrResponse: DescribeProtectedTelCdrResponse,
    DescribeAutoCalloutTaskRequest: DescribeAutoCalloutTaskRequest,
    CreateAICallRequest: CreateAICallRequest,
    CreateAdminURLResponse: CreateAdminURLResponse,
    PausePredictiveDialingCampaignRequest: PausePredictiveDialingCampaignRequest,
    CreateCallOutSessionResponse: CreateCallOutSessionResponse,
    DisableCCCPhoneNumberRequest: DisableCCCPhoneNumberRequest,
    ModifyStaffPasswordResponse: ModifyStaffPasswordResponse,
    CreatePredictiveDialingCampaignRequest: CreatePredictiveDialingCampaignRequest,
    AbortAgentCruiseDialingCampaignResponse: AbortAgentCruiseDialingCampaignResponse,
    ServeParticipant: ServeParticipant,
    DescribeTelCallInfoResponse: DescribeTelCallInfoResponse,
    DescribeExtensionsResponse: DescribeExtensionsResponse,
    DeleteExtensionRequest: DeleteExtensionRequest,
    DescribePredictiveDialingCampaignRequest: DescribePredictiveDialingCampaignRequest,
    DescribePredictiveDialingCampaignResponse: DescribePredictiveDialingCampaignResponse,
    StaffStatusMetrics: StaffStatusMetrics,
    DescribeTelCdrRequest: DescribeTelCdrRequest,
    DescribeAutoCalloutTasksResponse: DescribeAutoCalloutTasksResponse,
    PackageBuyInfo: PackageBuyInfo,
    ModifyExtensionResponse: ModifyExtensionResponse,
    CreateAgentCruiseDialingCampaignRequest: CreateAgentCruiseDialingCampaignRequest,
    CreateStaffResponse: CreateStaffResponse,
    DescribePredictiveDialingCampaignsRequest: DescribePredictiveDialingCampaignsRequest,
    DescribeSkillGroupInfoListResponse: DescribeSkillGroupInfoListResponse,
    DescribeNumbersResponse: DescribeNumbersResponse,
    DeletePredictiveDialingCampaignRequest: DeletePredictiveDialingCampaignRequest,
    UploadIvrAudioRequest: UploadIvrAudioRequest,
    DescribeStaffInfoListResponse: DescribeStaffInfoListResponse,
    UnbindNumberCallOutSkillGroupRequest: UnbindNumberCallOutSkillGroupRequest,
    CreateAutoCalloutTaskRequest: CreateAutoCalloutTaskRequest,
    ResumePredictiveDialingCampaignResponse: ResumePredictiveDialingCampaignResponse,
    CallInSkillGroupMetrics: CallInSkillGroupMetrics,
    CreateExtensionResponse: CreateExtensionResponse,
    CreateCCCSkillGroupRequest: CreateCCCSkillGroupRequest,
    DescribeAutoCalloutTaskResponse: DescribeAutoCalloutTaskResponse,
    CreateCCCSkillGroupResponse: CreateCCCSkillGroupResponse,
    DescribeTelSessionRequest: DescribeTelSessionRequest,
    DescribeSkillGroupInfoListRequest: DescribeSkillGroupInfoListRequest,
    AutoCalloutTaskCalleeInfo: AutoCalloutTaskCalleeInfo,
    SeatUserInfo: SeatUserInfo,
    UpdateCCCSkillGroupResponse: UpdateCCCSkillGroupResponse,
    DescribePredictiveDialingSessionsResponse: DescribePredictiveDialingSessionsResponse,
    ErrStaffItem: ErrStaffItem,
    PausePredictiveDialingCampaignResponse: PausePredictiveDialingCampaignResponse,
    PSTNSession: PSTNSession,
    UpdatePredictiveDialingCampaignRequest: UpdatePredictiveDialingCampaignRequest,
    DescribeStaffInfoListRequest: DescribeStaffInfoListRequest,
    AutoCalloutTaskInfo: AutoCalloutTaskInfo,
    DescribeIvrAudioListRequest: DescribeIvrAudioListRequest,
    SkillGroupInfoItem: SkillGroupInfoItem,
    ResetExtensionPasswordResponse: ResetExtensionPasswordResponse,
    UpdateCCCSkillGroupRequest: UpdateCCCSkillGroupRequest,
    ModifyStaffPasswordRequest: ModifyStaffPasswordRequest,
    ModifyStaffResponse: ModifyStaffResponse,
    ModifyExtensionRequest: ModifyExtensionRequest,
    CreatePredictiveDialingCampaignResponse: CreatePredictiveDialingCampaignResponse,
    UpdatePredictiveDialingCampaignResponse: UpdatePredictiveDialingCampaignResponse,
    PSTNSessionInfo: PSTNSessionInfo,
    AbortPredictiveDialingCampaignResponse: AbortPredictiveDialingCampaignResponse,
    DescribeNumbersRequest: DescribeNumbersRequest,
    ExtensionInfo: ExtensionInfo,
    BindNumberCallOutSkillGroupRequest: BindNumberCallOutSkillGroupRequest,
    DeletePredictiveDialingCampaignResponse: DeletePredictiveDialingCampaignResponse,
    IVRKeyPressedElement: IVRKeyPressedElement,
    UnbindNumberCallOutSkillGroupResponse: UnbindNumberCallOutSkillGroupResponse,
    DescribeAgentCruiseDialingCampaignRequest: DescribeAgentCruiseDialingCampaignRequest,
    DescribePSTNActiveSessionListRequest: DescribePSTNActiveSessionListRequest,
    CreateAutoCalloutTaskResponse: CreateAutoCalloutTaskResponse,
    TelCdrInfo: TelCdrInfo,
    UploadIvrAudioResponse: UploadIvrAudioResponse,
    NumberInfo: NumberInfo,
    DeleteStaffRequest: DeleteStaffRequest,
    CallInMetrics: CallInMetrics,
    DescribeCCCBuyInfoListRequest: DescribeCCCBuyInfoListRequest,
    StaffInfo: StaffInfo,
    DescribePredictiveDialingCampaignsResponse: DescribePredictiveDialingCampaignsResponse,
    DescribeTelCallInfoRequest: DescribeTelCallInfoRequest,
    Variable: Variable,
    CallInNumberMetrics: CallInNumberMetrics,
    CreateExtensionRequest: CreateExtensionRequest,
    StaffSkillGroupList: StaffSkillGroupList,
    AbortAgentCruiseDialingCampaignRequest: AbortAgentCruiseDialingCampaignRequest,
    DescribePredictiveDialingCampaignsElement: DescribePredictiveDialingCampaignsElement,
    HangUpCallResponse: HangUpCallResponse,
    StopAutoCalloutTaskResponse: StopAutoCalloutTaskResponse,
    AbortPredictiveDialingCampaignRequest: AbortPredictiveDialingCampaignRequest,
    SkillGroupItem: SkillGroupItem,
    PhoneNumBuyInfo: PhoneNumBuyInfo,
    DescribeCCCBuyInfoListResponse: DescribeCCCBuyInfoListResponse,
    UnbindStaffSkillGroupListResponse: UnbindStaffSkillGroupListResponse,
    ResumePredictiveDialingCampaignRequest: ResumePredictiveDialingCampaignRequest,
    UploadAudioInfo: UploadAudioInfo,
    DeleteExtensionResponse: DeleteExtensionResponse,
    BindStaffSkillGroupListRequest: BindStaffSkillGroupListRequest,
    CreateAgentCruiseDialingCampaignResponse: CreateAgentCruiseDialingCampaignResponse,
    UploadIvrAudioFailedInfo: UploadIvrAudioFailedInfo,
    DescribeCallInMetricsResponse: DescribeCallInMetricsResponse,
    DescribeAgentCruiseDialingCampaignResponse: DescribeAgentCruiseDialingCampaignResponse,
    CreateAICallResponse: CreateAICallResponse,
    CreateIVRSessionResponse: CreateIVRSessionResponse,
    UnbindStaffSkillGroupListRequest: UnbindStaffSkillGroupListRequest,
    DescribeTelCdrResponse: DescribeTelCdrResponse,
    DescribeStaffStatusMetricsRequest: DescribeStaffStatusMetricsRequest,
    DeleteStaffResponse: DeleteStaffResponse,
    CalleeAttribute: CalleeAttribute,
    StaffStatusExtra: StaffStatusExtra,
    CreateStaffRequest: CreateStaffRequest,
    SdkAppIdBuyInfo: SdkAppIdBuyInfo,
    DescribePSTNActiveSessionListResponse: DescribePSTNActiveSessionListResponse,
    DescribeAutoCalloutTasksRequest: DescribeAutoCalloutTasksRequest,
    DescribeTelSessionResponse: DescribeTelSessionResponse,
    CreateAdminURLRequest: CreateAdminURLRequest,
    DescribeStaffStatusMetricsResponse: DescribeStaffStatusMetricsResponse,
    AudioFileInfo: AudioFileInfo,
    CreateCallOutSessionRequest: CreateCallOutSessionRequest,
    BindStaffSkillGroupListResponse: BindStaffSkillGroupListResponse,
    DescribeExtensionsRequest: DescribeExtensionsRequest,
    DescribeProtectedTelCdrRequest: DescribeProtectedTelCdrRequest,
    DescribePredictiveDialingSessionsRequest: DescribePredictiveDialingSessionsRequest,
    CreateSDKLoginTokenRequest: CreateSDKLoginTokenRequest,
    StaffBuyInfo: StaffBuyInfo,
    DescribeCallInMetricsRequest: DescribeCallInMetricsRequest,
    DescribeExtensionResponse: DescribeExtensionResponse,

}
