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
const Canvas = models.Canvas;
const LayoutParams = models.LayoutParams;
const StreamControl = models.StreamControl;
const ResumeOnlineRecordResponse = models.ResumeOnlineRecordResponse;
const StartOnlineRecordRequest = models.StartOnlineRecordRequest;
const DescribeOnlineRecordCallbackRequest = models.DescribeOnlineRecordCallbackRequest;
const DescribeOnlineRecordCallbackResponse = models.DescribeOnlineRecordCallbackResponse;
const SetTranscodeCallbackResponse = models.SetTranscodeCallbackResponse;
const StopOnlineRecordRequest = models.StopOnlineRecordRequest;
const StreamLayout = models.StreamLayout;
const CreateTranscodeResponse = models.CreateTranscodeResponse;
const VideoInfo = models.VideoInfo;
const CustomLayout = models.CustomLayout;
const SetTranscodeCallbackKeyResponse = models.SetTranscodeCallbackKeyResponse;
const Concat = models.Concat;
const DescribeOnlineRecordRequest = models.DescribeOnlineRecordRequest;
const StartOnlineRecordResponse = models.StartOnlineRecordResponse;
const Whiteboard = models.Whiteboard;
const DescribeOnlineRecordResponse = models.DescribeOnlineRecordResponse;
const CreateTranscodeRequest = models.CreateTranscodeRequest;
const SetOnlineRecordCallbackKeyResponse = models.SetOnlineRecordCallbackKeyResponse;
const PauseOnlineRecordResponse = models.PauseOnlineRecordResponse;
const SetTranscodeCallbackKeyRequest = models.SetTranscodeCallbackKeyRequest;
const DescribeTranscodeRequest = models.DescribeTranscodeRequest;
const DescribeTranscodeResponse = models.DescribeTranscodeResponse;
const SetOnlineRecordCallbackResponse = models.SetOnlineRecordCallbackResponse;
const SetOnlineRecordCallbackKeyRequest = models.SetOnlineRecordCallbackKeyRequest;
const StopOnlineRecordResponse = models.StopOnlineRecordResponse;
const DescribeTranscodeCallbackRequest = models.DescribeTranscodeCallbackRequest;
const ResumeOnlineRecordRequest = models.ResumeOnlineRecordRequest;
const DescribeTranscodeCallbackResponse = models.DescribeTranscodeCallbackResponse;
const SetTranscodeCallbackRequest = models.SetTranscodeCallbackRequest;
const RecordControl = models.RecordControl;
const SetOnlineRecordCallbackRequest = models.SetOnlineRecordCallbackRequest;
const MixStream = models.MixStream;
const OmittedDuration = models.OmittedDuration;
const PauseOnlineRecordRequest = models.PauseOnlineRecordRequest;


/**
 * tiw client
 * @class
 */
class TiwClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tiw.tencentcloudapi.com", "2019-09-19", credential, region, profile);
    }
    
    /**
     * This API is used to set the real-time recording callback address. For the callback format, please [see here](https://intl.cloud.tencent.com/document/product/1137/40258?from_cn_redirect=1).
     * @param {SetOnlineRecordCallbackRequest} req
     * @param {function(string, SetOnlineRecordCallbackResponse):void} cb
     * @public
     */
    SetOnlineRecordCallback(req, cb) {
        let resp = new SetOnlineRecordCallbackResponse();
        this.request("SetOnlineRecordCallback", req, resp, cb);
    }

    /**
     * This API is used to set the callback authentication key for document transcoding. For more information, see [Event Notification](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
     * @param {SetTranscodeCallbackKeyRequest} req
     * @param {function(string, SetTranscodeCallbackKeyResponse):void} cb
     * @public
     */
    SetTranscodeCallbackKey(req, cb) {
        let resp = new SetTranscodeCallbackKeyResponse();
        this.request("SetTranscodeCallbackKey", req, resp, cb);
    }

    /**
     * This API is used to query the progress and result of a document transcoding task.
     * @param {DescribeTranscodeRequest} req
     * @param {function(string, DescribeTranscodeResponse):void} cb
     * @public
     */
    DescribeTranscode(req, cb) {
        let resp = new DescribeTranscodeResponse();
        this.request("DescribeTranscode", req, resp, cb);
    }

    /**
     * This API is used to create a document transcoding task.
     * @param {CreateTranscodeRequest} req
     * @param {function(string, CreateTranscodeResponse):void} cb
     * @public
     */
    CreateTranscode(req, cb) {
        let resp = new CreateTranscodeResponse();
        this.request("CreateTranscode", req, resp, cb);
    }

    /**
     * This API is used to stop real-time recording.
     * @param {StopOnlineRecordRequest} req
     * @param {function(string, StopOnlineRecordResponse):void} cb
     * @public
     */
    StopOnlineRecord(req, cb) {
        let resp = new StopOnlineRecordResponse();
        this.request("StopOnlineRecord", req, resp, cb);
    }

    /**
     * This API is used to set the callback address for document transcoding. For the callback format, please [see here](https://intl.cloud.tencent.com/document/product/1137/40260?from_cn_redirect=1).
     * @param {SetTranscodeCallbackRequest} req
     * @param {function(string, SetTranscodeCallbackResponse):void} cb
     * @public
     */
    SetTranscodeCallback(req, cb) {
        let resp = new SetTranscodeCallbackResponse();
        this.request("SetTranscodeCallback", req, resp, cb);
    }

    /**
     * This API is used to start a real-time recording task.
     * @param {StartOnlineRecordRequest} req
     * @param {function(string, StartOnlineRecordResponse):void} cb
     * @public
     */
    StartOnlineRecord(req, cb) {
        let resp = new StartOnlineRecordResponse();
        this.request("StartOnlineRecord", req, resp, cb);
    }

    /**
     * This API is used to set the callback authentication key for real-time recording. For more information, see [Event Notification](https://intl.cloud.tencent.com/document/product/1137/40257?from_cn_redirect=1).
     * @param {SetOnlineRecordCallbackKeyRequest} req
     * @param {function(string, SetOnlineRecordCallbackKeyResponse):void} cb
     * @public
     */
    SetOnlineRecordCallbackKey(req, cb) {
        let resp = new SetOnlineRecordCallbackKeyResponse();
        this.request("SetOnlineRecordCallbackKey", req, resp, cb);
    }

    /**
     * This API is used to pause real-time recording.
     * @param {PauseOnlineRecordRequest} req
     * @param {function(string, PauseOnlineRecordResponse):void} cb
     * @public
     */
    PauseOnlineRecord(req, cb) {
        let resp = new PauseOnlineRecordResponse();
        this.request("PauseOnlineRecord", req, resp, cb);
    }

    /**
     * This API is used to query the document transcoding callback address.
     * @param {DescribeTranscodeCallbackRequest} req
     * @param {function(string, DescribeTranscodeCallbackResponse):void} cb
     * @public
     */
    DescribeTranscodeCallback(req, cb) {
        let resp = new DescribeTranscodeCallbackResponse();
        this.request("DescribeTranscodeCallback", req, resp, cb);
    }

    /**
     * This API is used to query the status and result of a real-time recording task.
     * @param {DescribeOnlineRecordRequest} req
     * @param {function(string, DescribeOnlineRecordResponse):void} cb
     * @public
     */
    DescribeOnlineRecord(req, cb) {
        let resp = new DescribeOnlineRecordResponse();
        this.request("DescribeOnlineRecord", req, resp, cb);
    }

    /**
     * This API is used to query the real-time recording callback address.
     * @param {DescribeOnlineRecordCallbackRequest} req
     * @param {function(string, DescribeOnlineRecordCallbackResponse):void} cb
     * @public
     */
    DescribeOnlineRecordCallback(req, cb) {
        let resp = new DescribeOnlineRecordCallbackResponse();
        this.request("DescribeOnlineRecordCallback", req, resp, cb);
    }

    /**
     * This API is used to resume real-time recording.
     * @param {ResumeOnlineRecordRequest} req
     * @param {function(string, ResumeOnlineRecordResponse):void} cb
     * @public
     */
    ResumeOnlineRecord(req, cb) {
        let resp = new ResumeOnlineRecordResponse();
        this.request("ResumeOnlineRecord", req, resp, cb);
    }


}
module.exports = TiwClient;
