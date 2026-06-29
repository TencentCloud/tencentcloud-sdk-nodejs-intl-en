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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ModifyGlossaryEntriesRequest = models.ModifyGlossaryEntriesRequest;
const CreateGlossaryRequest = models.CreateGlossaryRequest;
const DescribeGlossaryEntriesResponse = models.DescribeGlossaryEntriesResponse;
const DeleteGlossaryRequest = models.DeleteGlossaryRequest;
const DescribeGlossaryEntriesRequest = models.DescribeGlossaryEntriesRequest;
const DescribeGlossariesRequest = models.DescribeGlossariesRequest;
const RequestFilter = models.RequestFilter;
const DeleteGlossaryEntriesRequest = models.DeleteGlossaryEntriesRequest;
const CreateGlossaryEntriesResponse = models.CreateGlossaryEntriesResponse;
const DeleteGlossaryEntryInput = models.DeleteGlossaryEntryInput;
const GlossaryEntryItem = models.GlossaryEntryItem;
const DeleteGlossaryResponse = models.DeleteGlossaryResponse;
const CreateGlossaryEntriesRequest = models.CreateGlossaryEntriesRequest;
const RequestSort = models.RequestSort;
const ModifyGlossaryEntriesResponse = models.ModifyGlossaryEntriesResponse;
const ModifyGlossaryEntryInput = models.ModifyGlossaryEntryInput;
const DeleteGlossaryEntriesResponse = models.DeleteGlossaryEntriesResponse;
const DescribeGlossariesResponse = models.DescribeGlossariesResponse;
const GlossaryItem = models.GlossaryItem;
const GlossaryEntryInput = models.GlossaryEntryInput;
const CreateGlossaryResponse = models.CreateGlossaryResponse;


/**
 * tokenhub client
 * @class
 */
class TokenhubClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tokenhub.intl.tencentcloudapi.com", "2026-03-22", credential, region, profile);
    }
    
    /**
     * Delete terminology entries in batches.

Delete terminology entries in batches under the specified Termbase. You can delete up to 200 entries at a time. If the Termbase is nonexistent or NOT_IN this application, it returns a ResourceNotFound error.
     * @param {DeleteGlossaryEntriesRequest} req
     * @param {function(string, DeleteGlossaryEntriesResponse):void} cb
     * @public
     */
    DeleteGlossaryEntries(req, cb) {
        let resp = new DeleteGlossaryEntriesResponse();
        this.request("DeleteGlossaryEntries", req, resp, cb);
    }

    /**
     * Create terminology entries in batches.

Create terminology entries in batches under the designated Termbase. You can create up to 100 entries at a time.
     * @param {CreateGlossaryEntriesRequest} req
     * @param {function(string, CreateGlossaryEntriesResponse):void} cb
     * @public
     */
    CreateGlossaryEntries(req, cb) {
        let resp = new CreateGlossaryEntriesResponse();
        this.request("CreateGlossaryEntries", req, resp, cb);
    }

    /**
     * Batch modify terminology entries.

This API is used to batch modify terminology entries in a designated Termbase. You can modify up to 200 entries at a time.
     * @param {ModifyGlossaryEntriesRequest} req
     * @param {function(string, ModifyGlossaryEntriesResponse):void} cb
     * @public
     */
    ModifyGlossaryEntries(req, cb) {
        let resp = new ModifyGlossaryEntriesResponse();
        this.request("ModifyGlossaryEntries", req, resp, cb);
    }

    /**
     * Query the terminology repository list.

Query the Termbase list under this application. Support paginate, filter, and sort.
     * @param {DescribeGlossariesRequest} req
     * @param {function(string, DescribeGlossariesResponse):void} cb
     * @public
     */
    DescribeGlossaries(req, cb) {
        let resp = new DescribeGlossariesResponse();
        this.request("DescribeGlossaries", req, resp, cb);
    }

    /**
     * Create a Termbase.

Create a new Termbase in this application for custom definition source to target language terminology mapping. Return the Termbase ID upon success, which can be used to carry out other management operations on terminology entries.
     * @param {CreateGlossaryRequest} req
     * @param {function(string, CreateGlossaryResponse):void} cb
     * @public
     */
    CreateGlossary(req, cb) {
        let resp = new CreateGlossaryResponse();
        this.request("CreateGlossary", req, resp, cb);
    }

    /**
     * Delete a termbase.

This API is used to delete specified Termbase and ALL terminology entries under it. The deletion is idempotent and returns a successful result for non-existing Termbase. After calling the API, if the corresponding Termbase cannot be found via DescribeGlossaries, it indicates successful deletion.
     * @param {DeleteGlossaryRequest} req
     * @param {function(string, DeleteGlossaryResponse):void} cb
     * @public
     */
    DeleteGlossary(req, cb) {
        let resp = new DeleteGlossaryResponse();
        this.request("DeleteGlossary", req, resp, cb);
    }

    /**
     * Query the terminology entry list.

Query specified entries in a Termbase. Support pagination.
     * @param {DescribeGlossaryEntriesRequest} req
     * @param {function(string, DescribeGlossaryEntriesResponse):void} cb
     * @public
     */
    DescribeGlossaryEntries(req, cb) {
        let resp = new DescribeGlossaryEntriesResponse();
        this.request("DescribeGlossaryEntries", req, resp, cb);
    }


}
module.exports = TokenhubClient;
