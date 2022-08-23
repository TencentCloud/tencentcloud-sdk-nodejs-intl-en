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
const TextToVoiceResponse = models.TextToVoiceResponse;
const Subtitle = models.Subtitle;
const TextToVoiceRequest = models.TextToVoiceRequest;


/**
 * tts client
 * @class
 */
class TtsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tts.tencentcloudapi.com", "2019-08-23", credential, region, profile);
    }
    
    /**
     * This API is used to convert any text to speech, allowing your devices and applications to talk to users.
​Tencent Cloud Text To Speech (TTS) can synthesize speech from text in real time for many use cases, such as audiobook and news apps, voice reminders on smart devices, quick synthesis of a celebrity's voice based on existing programs or certain voice records available on the Internet, and personalized vehicle navigation systems.
It is free for use in beta.
It supports SSML. For syntax details, see [SSML](https://intl.cloud.tencent.com/document/product/1073/49575?from_cn_redirect=1).
     * @param {TextToVoiceRequest} req
     * @param {function(string, TextToVoiceResponse):void} cb
     * @public
     */
    TextToVoice(req, cb) {
        let resp = new TextToVoiceResponse();
        this.request("TextToVoice", req, resp, cb);
    }


}
module.exports = TtsClient;
