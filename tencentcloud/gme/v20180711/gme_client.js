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
const ScanVoiceResponse = models.ScanVoiceResponse;
const AppStatisticsItem = models.AppStatisticsItem;
const ModifyAppStatusRequest = models.ModifyAppStatusRequest;
const DescribeScanResultListResponse = models.DescribeScanResultListResponse;
const DescribeApplicationDataRequest = models.DescribeApplicationDataRequest;
const Task = models.Task;
const VoiceMessageStatisticsItem = models.VoiceMessageStatisticsItem;
const DeleteRoomMemberRequest = models.DeleteRoomMemberRequest;
const DescribeScanResultListRequest = models.DescribeScanResultListRequest;
const RealTimeSpeechStatisticsItem = models.RealTimeSpeechStatisticsItem;
const StreamTextStatisticsItem = models.StreamTextStatisticsItem;
const Tag = models.Tag;
const VoiceMessageConf = models.VoiceMessageConf;
const AudioTextStatisticsItem = models.AudioTextStatisticsItem;
const ApplicationDataStatistics = models.ApplicationDataStatistics;
const ModifyAppStatusResp = models.ModifyAppStatusResp;
const DescribeAppStatisticsResponse = models.DescribeAppStatisticsResponse;
const DescribeApplicationDataResponse = models.DescribeApplicationDataResponse;
const DeleteRoomMemberResponse = models.DeleteRoomMemberResponse;
const VoiceFilterStatisticsItem = models.VoiceFilterStatisticsItem;
const CreateAppResp = models.CreateAppResp;
const RealtimeTextStatisticsItem = models.RealtimeTextStatisticsItem;
const DeleteResult = models.DeleteResult;
const OverseaTextStatisticsItem = models.OverseaTextStatisticsItem;
const DescribeScanResult = models.DescribeScanResult;
const ScanDetail = models.ScanDetail;
const CreateAppRequest = models.CreateAppRequest;
const RealtimeSpeechConf = models.RealtimeSpeechConf;
const DescribeAppStatisticsResp = models.DescribeAppStatisticsResp;
const ScanVoiceResult = models.ScanVoiceResult;
const CreateAppResponse = models.CreateAppResponse;
const DescribeAppStatisticsRequest = models.DescribeAppStatisticsRequest;
const ScanPiece = models.ScanPiece;
const ModifyAppStatusResponse = models.ModifyAppStatusResponse;
const VoiceFilterConf = models.VoiceFilterConf;
const StatisticsItem = models.StatisticsItem;
const ScanVoiceRequest = models.ScanVoiceRequest;


/**
 * gme client
 * @class
 */
class GmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gme.tencentcloudapi.com", "2018-07-11", credential, region, profile);
    }
    
    /**
     * This API is used to query the usage statistics of a GME application, including those of Voice Chat, Voice Message Service, Voice Analysis, etc. The maximum query period is the past 30 days.
     * @param {DescribeAppStatisticsRequest} req
     * @param {function(string, DescribeAppStatisticsResponse):void} cb
     * @public
     */
    DescribeAppStatistics(req, cb) {
        let resp = new DescribeAppStatisticsResponse();
        this.request("DescribeAppStatistics", req, resp, cb);
    }

    /**
     * This API is used to query the result of voice moderation tasks. Up to 100 tasks can be queried in one time.
<p style="color:red">If the `Callback` field is not set when a voice moderation task is submitted, this API is called to query the moderation result.</p>
     * @param {DescribeScanResultListRequest} req
     * @param {function(string, DescribeScanResultListResponse):void} cb
     * @public
     */
    DescribeScanResultList(req, cb) {
        let resp = new DescribeScanResultListResponse();
        this.request("DescribeScanResultList", req, resp, cb);
    }

    /**
     * This API is used to delete a room or remove members from the room.
     * @param {DeleteRoomMemberRequest} req
     * @param {function(string, DeleteRoomMemberResponse):void} cb
     * @public
     */
    DeleteRoomMember(req, cb) {
        let resp = new DeleteRoomMemberResponse();
        this.request("DeleteRoomMember", req, resp, cb);
    }

    /**
     * This API is used to query data details for up to the past 90 days.
     * @param {DescribeApplicationDataRequest} req
     * @param {function(string, DescribeApplicationDataResponse):void} cb
     * @public
     */
    DescribeApplicationData(req, cb) {
        let resp = new DescribeApplicationDataResponse();
        this.request("DescribeApplicationData", req, resp, cb);
    }

    /**
     * This API is used to submit a voice moderation task. Up to 100 tasks can be added in a task. Make sure you have activated Voice Analysis Service in [GME Console > Voice Content Moderation > Service Configuration](https://console.cloud.tencent.com/gamegme/conf).
</br></br>

<h4><b>Free trial:</b></h4>
<li>You can try out the Voice Analysis Service free of charge in <a href="https://console.cloud.tencent.com/gamegme/tryout">GME Console > Voice Content Moderation > Product Trial</a>.</li>
</br>

<h4><b>API feature description:</b></h4>
<li>This API checks voice streams or files for non-compliant content.</li>
<li>The detection result can be queried by setting the callback address (`Callback`) or calling the `DescribeScanResultList` API for polling.</li>
<li>The scenario can be specified, such as abusive or pornographic.</li>
<li>Detection tasks can be submitted in batches. Up to 100 tasks can be added in the detection task list.</li>
</br>
<h4><b>Audio file limit description:</b></h4>
<li>Audio file size limit: 100 MB</li>
<li>Audio file duration limit: 30 minutes</li>
<li>Supported audio file formats: .wav, .m4a, .amr, .mp3, .aac, .wma, .ogg</li>
</br>
<h4><b>Voice stream limit description:</b></h4>
<li>Supported voice stream formats: .m3u8, .flv</li>
<li>Supported voice stream transfer protocols: RTMP, HTTP, HTTPS</li>
<li>Voice stream duration limit: 4 hours</li>
<li>Audio/video stream separation and audio stream analysis are supported</li>
</br>
<h4 id="Label_Value"><b>`Scenes` and `Label` parameter description:</b></h4>
<p>When submitting a voice detection task, you need to specify the `Scenes` parameter. <font color="red">You are currently required to set the `Scenes` parameter to `["default"]`</font>. The detection result will contain the scenario specified at the time of request and detection result in the corresponding type.</p>
<table>
<thread>
<tr>
<th>Scenario</th>
<th>Description</th>
<th>Label</th>
</tr>
</thread>
<tbody>
<tr>
<td>Voice detection</td>
<td>Voice detection type</td>
<td>
<p>`normal`: Normal</p>
<p>`porn`: Pornographic</p>
<p>`abuse`: Abusive</p>
<p>`ad`: Advertising</p>
<p>`contraband`: Prohibited</p>
<p>`customized`: Custom keyword library. This feature is only available to beta users. To try it out, please <a href="https://intl.cloud.tencent.com/apply/p/8809fjcik56?from_cn_redirect=1">contact us</a>.</p>
</td>
</tr>
</tbody>
</table>
</br>
<h4 id="Callback_Declare"><b>Callback description:</b></h4>
<li>If the callback address parameter `Callback` (i.e., the URL of an HTTP(S) API) is specified in the request parameters, then the POST method should be supported and transferred data should be encoded with UTF-8.</li>
<li>After the callback data is pushed, if the HTTP status code received is 200, the push is successful.</li>
<li>HTTP header parameter description:</li>
<table>
<thread>
<tr>
<th>Item</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thread>
<tbody>
<tr>
<td>Signatue</td>
<td>string</td>
<td>Yes</td>
<td>Signature. For more information, please see <a href="#Callback_Signatue">Signature generation description</a>.</td>
</tr>
</tbody>
</table>
<ul  id="Callback_Signatue">
	<li>Signature generation description:</li>
	<ul>
		<li>The HMAC-SH1 algorithm should be used, and the result should be encoded with Base64;</li>
		<li>The original signature string is the entire JSON content of POST and body (the length is subject to `Content-Length`);</li>
		<li>The signature key is the `SecretKey` of the application, which can be viewed in the console.</li>
	</ul>
</ul>

<li>Below is a sample callback <font color="red">(for more information on the fields, please see the structure:
<a href="https://intl.cloud.tencent.com/document/api/607/35375?from_cn_redirect=1#DescribeScanResult" target="_blank">DescribeScanResult</a>)</font>:</li>
<pre><code>{
	"Code": 0,
	"DataId": "1400000000_test_data_id",
	"ScanFinishTime": 1566720906,
	"HitFlag": true,
	"Live": false,
	"Msg": "",
	"ScanPiece": [{
		"DumpUrl": "",
		"HitFlag": true,
		"MainType": "abuse",
		"RoomId": "123",
		"OpenId": "xxx",
		"Info":"",
		"Offset": 0,
		"Duration": 3400,
		"PieceStartTime":1574684231,
		"ScanDetail": [{
			"EndTime": 1110,
			"KeyWord": "xxx",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 1110
		}, {
			"EndTime": 1380,
			"KeyWord": "xxx",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 930
		}, {
			"EndTime": 1560,
			"KeyWord": "xxx",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 930
		}, {
			"EndTime": 2820,
			"KeyWord": "xxx",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 2490
		}]
	}],
	"ScanStartTime": 1566720905,
	"Scenes": [
		"default"
	],
	"Status": "Success",
	"TaskId": "xxx",
	"Url": "https://xxx/xxx.m4a"
}
</code></pre>
     * @param {ScanVoiceRequest} req
     * @param {function(string, ScanVoiceResponse):void} cb
     * @public
     */
    ScanVoice(req, cb) {
        let resp = new ScanVoiceResponse();
        this.request("ScanVoice", req, resp, cb);
    }

    /**
     * This API is used to create a GME application.
     * @param {CreateAppRequest} req
     * @param {function(string, CreateAppResponse):void} cb
     * @public
     */
    CreateApp(req, cb) {
        let resp = new CreateAppResponse();
        this.request("CreateApp", req, resp, cb);
    }

    /**
     * This API is used to change the status of an application.
     * @param {ModifyAppStatusRequest} req
     * @param {function(string, ModifyAppStatusResponse):void} cb
     * @public
     */
    ModifyAppStatus(req, cb) {
        let resp = new ModifyAppStatusResponse();
        this.request("ModifyAppStatus", req, resp, cb);
    }


}
module.exports = GmeClient;
