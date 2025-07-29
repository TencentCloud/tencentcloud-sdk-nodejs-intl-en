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
 * DRM configure info.
 * @class
 */
class DRMInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Encryption method, optional values: `CBCS`, `CENC`.
         * @type {string || null}
         */
        this.EncryptionMethod = null;

        /**
         * DRM system providers, when the encryption method is CBCS, the optional values are `PlayReady`, `Widevine`, `FairPlay`; when the encryption method is CENC, the oprional values are `PlayReady`, `Widevine`.
         * @type {Array.<string> || null}
         */
        this.DRMSystems = null;

        /**
         * The resource ID sent to the key server. It can contain 1 to 128 characters, including numbers, letters, underscores (_), and hyphens (-).
         * @type {string || null}
         */
        this.ResourceID = null;

        /**
         * Key server address; must start with https://.
         * @type {string || null}
         */
        this.KeyServerUrl = null;

        /**
         * Video encryption presets, options: 
`Preset Video 1` - Encrypts all video tracks with one key
`Preset Video 2` - Encrypts SD and HD video tracks with 2 different keys
`Preset Video 3` - Encrypts SD, HD and UHD video tracks with 3 different keys
`Preset Video 4` - Encrypts SD, HD, UHD1 and UHD2 video tracks with 4 different keys
`Preset Video 5` - Encrypts SD, HD1, HD2, UHD1 and UHD2 video tracks with 5 different keys
`Preset Video 6` - Encrypts SD, HD1, HD2, UHD video tracks with 4 different keys
`Preset Video 7` - Encrypts SD + HD1, HD2, UHD video tracks with 3 different keys
`Preset Video 8` - Encrypts SD + HD1, HD2, UHD1, UHD2 video tracks with 4 different keys
`Shared` - Encrypts all video and audio tracks with one key
`Unencrypted` - Does not encrypt any track
         * @type {string || null}
         */
        this.VideoEncryptionPreset = null;

        /**
         * Audio encryption presets, options:
`Preset Audio 1` - Encrypts all audio tracks with one key
`Preset Audio 2` - Encrypts STEREO and MULTICHANNEL audio tracks with 2 different keys
`Preset Audio 3` - Encrypts STEREO, MULTICHANNEL 3-6 and MULTICHANNEL 7 audio tracks with 3 different keys
`Shared` - Encrypts all video and audio tracks with one key
`Unencrypted` - Does not encrypt any track
         * @type {string || null}
         */
        this.AudioEncryptionPreset = null;

        /**
         * Optional, used together with the key to encrypt the content; a 128-bit, 32-character, hexadecimal-encoded string.
         * @type {string || null}
         */
        this.ConstantInitializationVector = null;

        /**
         * Optional, specifies the rotation interval in seconds; empty, or an integer between 300-2592000.
         * @type {number || null}
         */
        this.KeyRotationInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EncryptionMethod = 'EncryptionMethod' in params ? params.EncryptionMethod : null;
        this.DRMSystems = 'DRMSystems' in params ? params.DRMSystems : null;
        this.ResourceID = 'ResourceID' in params ? params.ResourceID : null;
        this.KeyServerUrl = 'KeyServerUrl' in params ? params.KeyServerUrl : null;
        this.VideoEncryptionPreset = 'VideoEncryptionPreset' in params ? params.VideoEncryptionPreset : null;
        this.AudioEncryptionPreset = 'AudioEncryptionPreset' in params ? params.AudioEncryptionPreset : null;
        this.ConstantInitializationVector = 'ConstantInitializationVector' in params ? params.ConstantInitializationVector : null;
        this.KeyRotationInterval = 'KeyRotationInterval' in params ? params.KeyRotationInterval : null;

    }
}

/**
 * Source file information.
 * @class
 */
class SourcePackageConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group name. When the channel is in Linear mode and vod source is selected, the group name corresponds to the output group name of the channel output.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Type, distinguish between HLS and DASH, optional values: HLS, DASH.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * access path.
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * CreateStreamPackageSSAIChannel request structure.
 * @class
 */
class CreateStreamPackageSSAIChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ad insertion configuration name, globally unique, cannot be repeated with other configurations
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Source stream url prefix
         * @type {string || null}
         */
        this.ContentSource = null;

        /**
         * Ad insertion configuration information
         * @type {SSAIConf || null}
         */
        this.SSAIInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ContentSource = 'ContentSource' in params ? params.ContentSource : null;

        if (params.SSAIInfo) {
            let obj = new SSAIConf();
            obj.deserialize(params.SSAIInfo)
            this.SSAIInfo = obj;
        }

    }
}

/**
 * AdBreakInfo.
 * @class
 */
class AdBreakInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocationId.
         * @type {string || null}
         */
        this.SourceLocationId = null;

        /**
         * VodSourceName.
         * @type {string || null}
         */
        this.VodSourceName = null;

        /**
         * Offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * MessageType, divided into SpliceInsert and TimeSignal.
         * @type {string || null}
         */
        this.MessageType = null;

        /**
         * TimeSignalConf.
         * @type {TimeSignalInfo || null}
         */
        this.TimeSignalConf = null;

        /**
         * SpliceInsertConf.
         * @type {SpliceInsertInfo || null}
         */
        this.SpliceInsertConf = null;

        /**
         * Metadatas.
         * @type {Array.<Metadata> || null}
         */
        this.Metadatas = null;

        /**
         * SourceLocationName.
         * @type {string || null}
         */
        this.SourceLocationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceLocationId = 'SourceLocationId' in params ? params.SourceLocationId : null;
        this.VodSourceName = 'VodSourceName' in params ? params.VodSourceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.MessageType = 'MessageType' in params ? params.MessageType : null;

        if (params.TimeSignalConf) {
            let obj = new TimeSignalInfo();
            obj.deserialize(params.TimeSignalConf)
            this.TimeSignalConf = obj;
        }

        if (params.SpliceInsertConf) {
            let obj = new SpliceInsertInfo();
            obj.deserialize(params.SpliceInsertConf)
            this.SpliceInsertConf = obj;
        }

        if (params.Metadatas) {
            this.Metadatas = new Array();
            for (let z in params.Metadatas) {
                let obj = new Metadata();
                obj.deserialize(params.Metadatas[z]);
                this.Metadatas.push(obj);
            }
        }
        this.SourceLocationName = 'SourceLocationName' in params ? params.SourceLocationName : null;

    }
}

/**
 * ModifyStreamPackageLinearAssemblyProgram response structure.
 * @class
 */
class ModifyStreamPackageLinearAssemblyProgramResponse extends  AbstractModel {
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
 * BindNewLVBDomainWithChannel response structure.
 * @class
 */
class BindNewLVBDomainWithChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The LVB domain name bound successfully
         * @type {string || null}
         */
        this.LVBDomain = null;

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
        this.LVBDomain = 'LVBDomain' in params ? params.LVBDomain : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStreamPackageLinearAssemblyChannels request structure.
 * @class
 */
class DeleteStreamPackageLinearAssemblyChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of channel ids.
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * 
 * @class
 */
class CdnDomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {number || null}
         */
        this.TotalSize = null;

        /**
         * 
         * @type {Array.<DomainRecordInfo> || null}
         */
        this.Records = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new DomainRecordInfo();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }

    }
}

/**
 * StartStreamPackageLinearAssemblyChannel request structure.
 * @class
 */
class StartStreamPackageLinearAssemblyChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Channel Linear Assembly Location Alarm Information.
 * @class
 */
class LocationAlert extends  AbstractModel {
    constructor(){
        super();

        /**
         * Location ID.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * Alarm event code.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Alarm classification.
         * @type {string || null}
         */
        this.Category = null;

        /**
         * Alarm message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Update time.
         * @type {number || null}
         */
        this.LastModifiedTime = null;

        /**
         * Location name.
         * @type {string || null}
         */
        this.LocationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;
        this.LocationName = 'LocationName' in params ? params.LocationName : null;

    }
}

/**
 * Metadata.
 * @class
 */
class Metadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value.
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
 * Spacer configuration.
 * @class
 */
class ClipRangeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The vod type is valid, the content is valid starting time, Entire and SpecifyTimeRange are optional.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Offset, valid when Type is SpecifyTimeRange.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * Alias-value configuration information.
 * @class
 */
class AliasValueConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alias.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Value.
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
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeStreamPackageSSAIChannel request structure.
 * @class
 */
class DescribeStreamPackageSSAIChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ad insertion configuration ID
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeLinearAssemblyCDNDomainWithChannel response structure.
 * @class
 */
class DescribeLinearAssemblyCDNDomainWithChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CDN domain name information associated with the channel.
         * @type {CdnDomainInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new CdnDomainInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyStreamPackageSSAIChannel response structure.
 * @class
 */
class ModifyStreamPackageSSAIChannelResponse extends  AbstractModel {
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
 * ModifyStreamPackageChannelInputAuthInfo request structure.
 * @class
 */
class ModifyStreamPackageChannelInputAuthInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel input URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Authentication configuration. Valid values: `CLOSE`, `UPDATE`
`CLOSE`: disable authentication
`UPDATE`: update authentication information
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * Linear assembly channel alarm return information.
 * @class
 */
class ChannelAlertResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program alarm aggregation information.
         * @type {Array.<ProgramAlertCounts> || null}
         */
        this.ProgramAlertCounts = null;

        /**
         * Program alarm details.
         * @type {Array.<ProgramAlertInfos> || null}
         */
        this.ProgramAlertInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProgramAlertCounts) {
            this.ProgramAlertCounts = new Array();
            for (let z in params.ProgramAlertCounts) {
                let obj = new ProgramAlertCounts();
                obj.deserialize(params.ProgramAlertCounts[z]);
                this.ProgramAlertCounts.push(obj);
            }
        }

        if (params.ProgramAlertInfos) {
            this.ProgramAlertInfos = new Array();
            for (let z in params.ProgramAlertInfos) {
                let obj = new ProgramAlertInfos();
                obj.deserialize(params.ProgramAlertInfos[z]);
                this.ProgramAlertInfos.push(obj);
            }
        }

    }
}

/**
 * DeleteStreamPackageChannels request structure.
 * @class
 */
class DeleteStreamPackageChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the IDs of the channels to delete
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * Channel input.
 * @class
 */
class InputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel input URL.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Channel input authentication information.
         * @type {InputAuthInfo || null}
         */
        this.AuthInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

        if (params.AuthInfo) {
            let obj = new InputAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }

    }
}

/**
 * DescribeStreamPackageLinearAssemblyPrograms response structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyProgramsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program list.
         * @type {Array.<LinearAssemblyProgramInfo> || null}
         */
        this.Infos = null;

        /**
         * Number of pages.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Size per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The total amount.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * total pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new LinearAssemblyProgramInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Channel input and output.
 * @class
 */
class PointInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel input list.
         * @type {Array.<InputInfo> || null}
         */
        this.Inputs = null;

        /**
         * Channel output list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<EndpointInfo> || null}
         */
        this.Endpoints = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Inputs) {
            this.Inputs = new Array();
            for (let z in params.Inputs) {
                let obj = new InputInfo();
                obj.deserialize(params.Inputs[z]);
                this.Inputs.push(obj);
            }
        }

        if (params.Endpoints) {
            this.Endpoints = new Array();
            for (let z in params.Endpoints) {
                let obj = new EndpointInfo();
                obj.deserialize(params.Endpoints[z]);
                this.Endpoints.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamPackageSourceAlerts request structure.
 * @class
 */
class DescribeStreamPackageSourceAlertsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source ID.
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * Query start time, Unix timestamp, supports queries in the last seven days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time, Unix timestamp, supports queries in the last seven days.
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
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyStreamPackageSSAIChannel request structure.
 * @class
 */
class ModifyStreamPackageSSAIChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ad insertion configuration name, globally unique, cannot be repeated.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Content source prefix.
         * @type {string || null}
         */
        this.ContentSource = null;

        /**
         * Ad insertion configuration information
         * @type {SSAIConf || null}
         */
        this.SSAIInfo = null;

        /**
         * Ad insertion configuration ID
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ContentSource = 'ContentSource' in params ? params.ContentSource : null;

        if (params.SSAIInfo) {
            let obj = new SSAIConf();
            obj.deserialize(params.SSAIInfo)
            this.SSAIInfo = obj;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * CreateStreamPackageSource response structure.
 * @class
 */
class CreateStreamPackageSourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source information.
         * @type {SourceInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new SourceInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Channel linear assembly program alarm information details.
 * @class
 */
class ProgramAlertInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Channel name.

         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * ProgramID.
         * @type {string || null}
         */
        this.ProgramId = null;

        /**
         * ProgramName.
         * @type {string || null}
         */
        this.ProgramName = null;

        /**
         * Alarm event code.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Alarm classification.
         * @type {string || null}
         */
        this.Category = null;

        /**
         * Alarm message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Update time.
         * @type {number || null}
         */
        this.LastModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ProgramId = 'ProgramId' in params ? params.ProgramId : null;
        this.ProgramName = 'ProgramName' in params ? params.ProgramName : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;

    }
}

/**
 * DeleteStreamPackageSource request structure.
 * @class
 */
class DeleteStreamPackageSourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocation Id.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeStreamPackageHarvestJobs response structure.
 * @class
 */
class DescribeStreamPackageHarvestJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob information list.
         * @type {Array.<HarvestJobResp> || null}
         */
        this.Infos = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * PageSize
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * TotalNum
         * @type {number || null}
         */
        this.TotalNum = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new HarvestJobResp();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPackageSourceLocationAlerts request structure.
 * @class
 */
class DescribeStreamPackageSourceLocationAlertsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Location ID.
         * @type {string || null}
         */
        this.LocationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

    }
}

/**
 * UnbindCdnDomainWithChannel response structure.
 * @class
 */
class UnbindCdnDomainWithChannelResponse extends  AbstractModel {
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
 * ModifyStreamPackageChannelEndpoint request structure.
 * @class
 */
class ModifyStreamPackageChannelEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel endpoint URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * New endpoint name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * New channel authentication information
         * @type {EndpointAuthInfo || null}
         */
        this.AuthInfo = null;

        /**
         * Endpoint protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Whether to turn on the time shift function, true: on, false: off, the default is off.
         * @type {boolean || null}
         */
        this.TimeShiftEnable = null;

        /**
         * The number of days in the time shift window, up to 30 days. Valid when TimeShiftEnable is turned on.
         * @type {number || null}
         */
        this.TimeShiftDuration = null;

        /**
         * Advertising insertion function switch.
         * @type {boolean || null}
         */
        this.SSAIEnable = null;

        /**
         * Ad insertion function configuration information. Valid when SSAIEnable is turned on.
         * @type {SSAIConf || null}
         */
        this.SSAIInfo = null;

        /**
         * The customer-defined url parameter is inserted into the subscript at the specified position of the Endpoint url. 
Calculation starts from the first '/' in the url path, and the subscript starts from 0, the optional range of the subscript is: [0,3].
         * @type {number || null}
         */
        this.CustomUrlParamIndex = null;

        /**
         * Customer-defined url parameters are inserted into the specified position of the Endpoint url based on the CustomUrlParamIndex.
The parameters can only contain digits, letters, underscores (_), and hyphens (-), with a length of 1 to 64 chars.
         * @type {string || null}
         */
        this.CustomUrlParam = null;

        /**
         * Enable DRM. This is only effective for CMAF protocol.
         * @type {boolean || null}
         */
        this.DRMEnabled = null;

        /**
         * DRM configuration information
         * @type {DRMInfo || null}
         */
        this.DRMInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AuthInfo) {
            let obj = new EndpointAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.TimeShiftEnable = 'TimeShiftEnable' in params ? params.TimeShiftEnable : null;
        this.TimeShiftDuration = 'TimeShiftDuration' in params ? params.TimeShiftDuration : null;
        this.SSAIEnable = 'SSAIEnable' in params ? params.SSAIEnable : null;

        if (params.SSAIInfo) {
            let obj = new SSAIConf();
            obj.deserialize(params.SSAIInfo)
            this.SSAIInfo = obj;
        }
        this.CustomUrlParamIndex = 'CustomUrlParamIndex' in params ? params.CustomUrlParamIndex : null;
        this.CustomUrlParam = 'CustomUrlParam' in params ? params.CustomUrlParam : null;
        this.DRMEnabled = 'DRMEnabled' in params ? params.DRMEnabled : null;

        if (params.DRMInfo) {
            let obj = new DRMInfo();
            obj.deserialize(params.DRMInfo)
            this.DRMInfo = obj;
        }

    }
}

/**
 * 
 * @class
 */
class SSAIChannelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSAI configuration ID, globally unique identifier
         * @type {string || null}
         */
        this.ID = null;

        /**
         * Configuration name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Content source stream prefix
         * @type {string || null}
         */
        this.ContentSource = null;

        /**
         * Generated playback address prefix
         * @type {string || null}
         */
        this.PlaybackPrefix = null;

        /**
         * SSAI configuration info
         * @type {SSAIConf || null}
         */
        this.SSAIInfo = null;

        /**
         * Region info
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ContentSource = 'ContentSource' in params ? params.ContentSource : null;
        this.PlaybackPrefix = 'PlaybackPrefix' in params ? params.PlaybackPrefix : null;

        if (params.SSAIInfo) {
            let obj = new SSAIConf();
            obj.deserialize(params.SSAIInfo)
            this.SSAIInfo = obj;
        }
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * ModifyStreamPackageSourceLocation response structure.
 * @class
 */
class ModifyStreamPackageSourceLocationResponse extends  AbstractModel {
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
 * BindLinearAssemblyCDNDomainWithChannel response structure.
 * @class
 */
class BindLinearAssemblyCDNDomainWithChannelResponse extends  AbstractModel {
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
 * DescribeStreamPackageChannel response structure.
 * @class
 */
class DescribeStreamPackageChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel information
         * @type {ChannelInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new ChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyPrograms request structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyProgramsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Paging query page number, the value range is [1, 1000].
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Paging query the size of each page, the value range is [1, 1000].
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Query all Programs under a Channel.
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * 
 * @class
 */
class DomainRecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.CdnDomain = null;

        /**
         * 
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CdnDomain = 'CdnDomain' in params ? params.CdnDomain : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Linearly assembled channel time-shift configuration information.
 * @class
 */
class TimeShiftInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Lookback window, in seconds.
         * @type {number || null}
         */
        this.TimeWindows = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeWindows = 'TimeWindows' in params ? params.TimeWindows : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyProgramSchedules response structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyProgramSchedulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program's scheduling list.
         * @type {Array.<LinearAssemblyProgramInfo> || null}
         */
        this.Infos = null;

        /**
         * Number of pages.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Size per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The total amount.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new LinearAssemblyProgramInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPackageHarvestJob request structure.
 * @class
 */
class DescribeStreamPackageHarvestJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob ID, a globally unique identifier.
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyChannels request structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Paging query page number, the value range is [1, 1000].
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Paging query the size of each page, the value range is [1, 1000].
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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * Channel Linear Assembly Location Alarm Information
 * @class
 */
class SourceAlert extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source ID.
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * Source name.
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * Alarm event code.
         * @type {number || null}
         */
        this.Code = null;

        /**
         * Alarm classification.
         * @type {string || null}
         */
        this.Category = null;

        /**
         * Alarm message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Update time.
         * @type {number || null}
         */
        this.LastModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceName = 'SourceName' in params ? params.SourceName : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;

    }
}

/**
 * DescribeStreamPackageSources response structure.
 * @class
 */
class DescribeStreamPackageSourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source list.
         * @type {Array.<SourceInfo> || null}
         */
        this.Infos = null;

        /**
         * Number of pages.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Size per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The total amount.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * total pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new SourceInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SourceInfo.
 * @class
 */
class SourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The source type distinguishes between live broadcast and on-demand Vod.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Source configuration.
         * @type {Array.<SourcePackageConf> || null}
         */
        this.PackageConf = null;

        /**
         * ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Create timestamp.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Update timestamp.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.PackageConf) {
            this.PackageConf = new Array();
            for (let z in params.PackageConf) {
                let obj = new SourcePackageConf();
                obj.deserialize(params.PackageConf[z]);
                this.PackageConf.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeStreamPackageSourceLocationAlerts response structure.
 * @class
 */
class DescribeStreamPackageSourceLocationAlertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Location alarm information.
         * @type {Array.<LocationAlert> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new LocationAlert();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateStreamPackageLinearAssemblyChannel request structure.
 * @class
 */
class CreateStreamPackageLinearAssemblyChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Define the characteristics of the channel. Standard supports live broadcast and on-demand sources. Basic only supports on-demand source arrangement. Optional values: Standard and Basic.
         * @type {string || null}
         */
        this.Tier = null;

        /**
         * The source switching modes in the channel are divided into Linear and Loop. Basic only supports Linear, and Standatd supports both.
Optional values: Linear, Standatd.
         * @type {string || null}
         */
        this.PlaybackMode = null;

        /**
         * Time shift enable switch, only valid when Tier is Standard.
         * @type {boolean || null}
         */
        this.TimeShiftEnable = null;

        /**
         * Time shift configuration, effective when the time shift switch is turned on.
         * @type {TimeShiftInfo || null}
         */
        this.TimeShiftConf = null;

        /**
         * Spacer configuration is only valid when PlaybackMode is Linear.
         * @type {SlateInfo || null}
         */
        this.SlateConf = null;

        /**
         * Output configuration.
         * @type {Array.<OutputReq> || null}
         */
        this.Outputs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Tier = 'Tier' in params ? params.Tier : null;
        this.PlaybackMode = 'PlaybackMode' in params ? params.PlaybackMode : null;
        this.TimeShiftEnable = 'TimeShiftEnable' in params ? params.TimeShiftEnable : null;

        if (params.TimeShiftConf) {
            let obj = new TimeShiftInfo();
            obj.deserialize(params.TimeShiftConf)
            this.TimeShiftConf = obj;
        }

        if (params.SlateConf) {
            let obj = new SlateInfo();
            obj.deserialize(params.SlateConf)
            this.SlateConf = obj;
        }

        if (params.Outputs) {
            this.Outputs = new Array();
            for (let z in params.Outputs) {
                let obj = new OutputReq();
                obj.deserialize(params.Outputs[z]);
                this.Outputs.push(obj);
            }
        }

    }
}

/**
 * program playback configuration request.
 * @class
 */
class PlaybackInfoReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program startup method, live broadcast only supports Absolute, on-demand also supports Relative.
Optional values: Absolute, Relative.
         * @type {string || null}
         */
        this.TransitionType = null;

        /**
         * Unix timestamp, the start execution time of the program in absolute scenarios.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Program duration, in milliseconds, valid for live broadcast.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * It is related to the insertion order of the selected program, divided into After and Before.
         * @type {string || null}
         */
        this.RelativePosition = null;

        /**
         * The selected insertion reference program id.
         * @type {string || null}
         */
        this.RelativeProgramId = null;

        /**
         * Spacer configuration.
         * @type {ClipRangeInfo || null}
         */
        this.ClipRangeConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransitionType = 'TransitionType' in params ? params.TransitionType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.RelativePosition = 'RelativePosition' in params ? params.RelativePosition : null;
        this.RelativeProgramId = 'RelativeProgramId' in params ? params.RelativeProgramId : null;

        if (params.ClipRangeConf) {
            let obj = new ClipRangeInfo();
            obj.deserialize(params.ClipRangeConf)
            this.ClipRangeConf = obj;
        }

    }
}

/**
 * DescribeStreamPackageHarvestJob response structure.
 * @class
 */
class DescribeStreamPackageHarvestJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob information.
         * @type {HarvestJobResp || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new HarvestJobResp();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyChannel request structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * channel id.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteStreamPackageSSAIChannel request structure.
 * @class
 */
class DeleteStreamPackageSSAIChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ad insertion configuration ID that needs to be deleted
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * ModifyStreamPackageChannelEndpoint response structure.
 * @class
 */
class ModifyStreamPackageChannelEndpointResponse extends  AbstractModel {
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
 * CreateStreamPackageSourceLocation request structure.
 * @class
 */
class CreateStreamPackageSourceLocationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocation name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * BaseUrl.
         * @type {string || null}
         */
        this.BaseUrl = null;

        /**
         * Whether to enable patching.
         * @type {boolean || null}
         */
        this.SegmentDeliverEnable = null;

        /**
         * Patch configuration.
         * @type {SegmentDeliverInfo || null}
         */
        this.SegmentDeliverConf = null;

        /**
         * Whether to enable package distribution sharding, it is enabled by default.
         * @type {boolean || null}
         */
        this.SegmentDeliverUsePackageEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.BaseUrl = 'BaseUrl' in params ? params.BaseUrl : null;
        this.SegmentDeliverEnable = 'SegmentDeliverEnable' in params ? params.SegmentDeliverEnable : null;

        if (params.SegmentDeliverConf) {
            let obj = new SegmentDeliverInfo();
            obj.deserialize(params.SegmentDeliverConf)
            this.SegmentDeliverConf = obj;
        }
        this.SegmentDeliverUsePackageEnable = 'SegmentDeliverUsePackageEnable' in params ? params.SegmentDeliverUsePackageEnable : null;

    }
}

/**
 * DescribeStreamPackageHarvestJobs request structure.
 * @class
 */
class DescribeStreamPackageHarvestJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The bound channel name. If not passed, all channels will be queried by default.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * Page number.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * PageSize.
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
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DeleteStreamPackageHarvestJob response structure.
 * @class
 */
class DeleteStreamPackageHarvestJobResponse extends  AbstractModel {
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
 * DeleteStreamPackageHarvestJobs request structure.
 * @class
 */
class DeleteStreamPackageHarvestJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob IDs, id is a globally unique identifier.
         * @type {Array.<string> || null}
         */
        this.IDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IDs = 'IDs' in params ? params.IDs : null;

    }
}

/**
 * CreateStreamPackageChannelEndpoint response structure.
 * @class
 */
class CreateStreamPackageChannelEndpointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the created channel endpoint
         * @type {EndpointInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new EndpointInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLinearAssemblyCDNDomainWithChannels request structure.
 * @class
 */
class DescribeLinearAssemblyCDNDomainWithChannelsRequest extends  AbstractModel {
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
 * program playback configuration.
 * @class
 */
class PlaybackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program duration, in milliseconds, valid for live broadcast.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Program startup method, live broadcast only supports Absolute, on-demand also supports Relative.
         * @type {string || null}
         */
        this.TransitionType = null;

        /**
         * Unix timestamp, the start execution time of the program in the Absolute scenario.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * It is related to the insertion order of the selected program, divided into After and Before.
         * @type {string || null}
         */
        this.RelativePosition = null;

        /**
         * The selected insertion reference program id.
         * @type {string || null}
         */
        this.RelativeProgramId = null;

        /**
         * Spacer configuration.
         * @type {ClipRangeInfo || null}
         */
        this.ClipRangeConf = null;

        /**
         * RelativeProgramName.
         * @type {string || null}
         */
        this.RelativeProgramName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.TransitionType = 'TransitionType' in params ? params.TransitionType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RelativePosition = 'RelativePosition' in params ? params.RelativePosition : null;
        this.RelativeProgramId = 'RelativeProgramId' in params ? params.RelativeProgramId : null;

        if (params.ClipRangeConf) {
            let obj = new ClipRangeInfo();
            obj.deserialize(params.ClipRangeConf)
            this.ClipRangeConf = obj;
        }
        this.RelativeProgramName = 'RelativeProgramName' in params ? params.RelativeProgramName : null;

    }
}

/**
 * Channel information.
 * @class
 */
class ChannelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Channel name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Channel protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Channel input and output.
         * @type {PointInfo || null}
         */
        this.Points = null;

        /**
         * Cache configuration
Note: this field may return `null`, indicating that no valid value was found.
         * @type {CacheInfo || null}
         */
        this.CacheInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.Points) {
            let obj = new PointInfo();
            obj.deserialize(params.Points)
            this.Points = obj;
        }

        if (params.CacheInfo) {
            let obj = new CacheInfo();
            obj.deserialize(params.CacheInfo)
            this.CacheInfo = obj;
        }

    }
}

/**
 * Cache configuration
 * @class
 */
class CacheInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of timeout parameter configuration
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<CacheInfoInfo> || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new CacheInfoInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamPackageSourceLocation request structure.
 * @class
 */
class DescribeStreamPackageSourceLocationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocation Id.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * UnbindCdnDomainWithChannel request structure.
 * @class
 */
class UnbindCdnDomainWithChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * CDN playback domain name
         * @type {string || null}
         */
        this.CdnDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.CdnDomain = 'CdnDomain' in params ? params.CdnDomain : null;

    }
}

/**
 * ModifyStreamPackageLinearAssemblyProgram request structure.
 * @class
 */
class ModifyStreamPackageLinearAssemblyProgramRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Modified name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The type of the arrangement target source, divided into live broadcast and on-demand.
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * The associated source location.
         * @type {string || null}
         */
        this.SourceLocationId = null;

        /**
         * The associated live broadcast or on-demand broadcast, source name, and location are globally unique.
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * PlaybackConf.
         * @type {PlaybackInfoReq || null}
         */
        this.PlaybackConf = null;

        /**
         * AdBreaks.
         * @type {Array.<AdBreakInfo> || null}
         */
        this.AdBreaks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceLocationId = 'SourceLocationId' in params ? params.SourceLocationId : null;
        this.SourceName = 'SourceName' in params ? params.SourceName : null;

        if (params.PlaybackConf) {
            let obj = new PlaybackInfoReq();
            obj.deserialize(params.PlaybackConf)
            this.PlaybackConf = obj;
        }

        if (params.AdBreaks) {
            this.AdBreaks = new Array();
            for (let z in params.AdBreaks) {
                let obj = new AdBreakInfo();
                obj.deserialize(params.AdBreaks[z]);
                this.AdBreaks.push(obj);
            }
        }

    }
}

/**
 * HarvestJob response info.
 * @class
 */
class HarvestJobResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob ID, a globally unique identifier.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * The associated channel name.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * The associated endpoint name.
         * @type {string || null}
         */
        this.EndpointName = null;

        /**
         * Time format, supports the following types: 1. Epoch seconds 2. ISO-8601
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * HarvestJob start time.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * HarvestJob end time.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The path where the recording file is stored in COS.
         * @type {string || null}
         */
        this.Destination = null;

        /**
         * The file name of the recording file stored in COS.
         * @type {string || null}
         */
        this.Manifest = null;

        /**
         * The task status is divided into running: Running, execution completed: Completed, and execution failure: Failed.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * HarvestJob error message.
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * HarvestJob creation time, timestamp in seconds.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * The associated ChannelID.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * The region corresponding to the harvest job.
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.EndpointName = 'EndpointName' in params ? params.EndpointName : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.Manifest = 'Manifest' in params ? params.Manifest : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeStreamPackageSourceLocations request structure.
 * @class
 */
class DescribeStreamPackageSourceLocationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Paging query page number, the value range is [1, 1000].
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Paging query the size of each page, the value range is [1, 1000].
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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeStreamPackageSourceLocation response structure.
 * @class
 */
class DescribeStreamPackageSourceLocationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocation information.
         * @type {SourceLocationInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new SourceLocationInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Channel endpoint information.
 * @class
 */
class EndpointInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Endpoint name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Endpoint URL.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Endpoint authentication information.
         * @type {EndpointAuthInfo || null}
         */
        this.AuthInfo = null;

        /**
         * Endpoint protocol, supports `HLS`, `CMAF`, `CMAF-HLS`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Manifest name, default is main.
         * @type {string || null}
         */
        this.Manifest = null;

        /**
         * Whether to turn on the time shift function, true: on, false: off, the default is off.
         * @type {boolean || null}
         */
        this.TimeShiftEnable = null;

        /**
         * The number of days in the time shift window, up to 30 days. Valid when TimeShiftEnable is turned on.
         * @type {number || null}
         */
        this.TimeShiftDuration = null;

        /**
         * Advertising insertion function switch.
         * @type {boolean || null}
         */
        this.SSAIEnable = null;

        /**
         * Ad insertion function configuration information.
         * @type {SSAIConf || null}
         */
        this.SSAIInfo = null;

        /**
         * The customer-defined url parameter is inserted into the subscript at the specified position of the Endpoint url. The optional range of the subscript is: [0,3].
         * @type {number || null}
         */
        this.CustomUrlParamIndex = null;

        /**
         * Customer-defined url parameters are inserted into the specified position of the Endpoint url based on the CustomUrlParamIndex.
The parameters can only contain digits, letters, underscores (_), and hyphens (-), with a length of 1 to 64 chars.
         * @type {string || null}
         */
        this.CustomUrlParam = null;

        /**
         * DRM switch. If it is turned on, only CMAF will take effect.
         * @type {boolean || null}
         */
        this.DRMEnabled = null;

        /**
         * DRM configuration information.
         * @type {DRMInfo || null}
         */
        this.DRMInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.AuthInfo) {
            let obj = new EndpointAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Manifest = 'Manifest' in params ? params.Manifest : null;
        this.TimeShiftEnable = 'TimeShiftEnable' in params ? params.TimeShiftEnable : null;
        this.TimeShiftDuration = 'TimeShiftDuration' in params ? params.TimeShiftDuration : null;
        this.SSAIEnable = 'SSAIEnable' in params ? params.SSAIEnable : null;

        if (params.SSAIInfo) {
            let obj = new SSAIConf();
            obj.deserialize(params.SSAIInfo)
            this.SSAIInfo = obj;
        }
        this.CustomUrlParamIndex = 'CustomUrlParamIndex' in params ? params.CustomUrlParamIndex : null;
        this.CustomUrlParam = 'CustomUrlParam' in params ? params.CustomUrlParam : null;
        this.DRMEnabled = 'DRMEnabled' in params ? params.DRMEnabled : null;

        if (params.DRMInfo) {
            let obj = new DRMInfo();
            obj.deserialize(params.DRMInfo)
            this.DRMInfo = obj;
        }

    }
}

/**
 * ModifyStreamPackageSource response structure.
 * @class
 */
class ModifyStreamPackageSourceResponse extends  AbstractModel {
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
 * DeleteStreamPackageLinearAssemblyChannel request structure.
 * @class
 */
class DeleteStreamPackageLinearAssemblyChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * channel id.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyStreamPackageChannel request structure.
 * @class
 */
class ModifyStreamPackageChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * New channel name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * New channel protocol. Valid values: HLS, DASH, CMAF.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Cache configuration.
         * @type {CacheInfo || null}
         */
        this.CacheInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.CacheInfo) {
            let obj = new CacheInfo();
            obj.deserialize(params.CacheInfo)
            this.CacheInfo = obj;
        }

    }
}

/**
 * CreateStreamPackageLinearAssemblyProgram request structure.
 * @class
 */
class CreateStreamPackageLinearAssemblyProgramRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The bound channel.
         * @type {string || null}
         */
        this.AttachedChannel = null;

        /**
         * The type of arrangement target source is divided into live broadcast and on-demand VOD.
Optional values: Live, VOD.
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * The associated source location.
         * @type {string || null}
         */
        this.SourceLocationId = null;

        /**
         * The associated live broadcast or on-demand broadcast, source name, and location are globally unique.
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * PlaybackConf.
         * @type {PlaybackInfoReq || null}
         */
        this.PlaybackConf = null;

        /**
         * AdBreaks is only valid when the source type is Vod.
         * @type {Array.<AdBreakInfo> || null}
         */
        this.AdBreaks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AttachedChannel = 'AttachedChannel' in params ? params.AttachedChannel : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceLocationId = 'SourceLocationId' in params ? params.SourceLocationId : null;
        this.SourceName = 'SourceName' in params ? params.SourceName : null;

        if (params.PlaybackConf) {
            let obj = new PlaybackInfoReq();
            obj.deserialize(params.PlaybackConf)
            this.PlaybackConf = obj;
        }

        if (params.AdBreaks) {
            this.AdBreaks = new Array();
            for (let z in params.AdBreaks) {
                let obj = new AdBreakInfo();
                obj.deserialize(params.AdBreaks[z]);
                this.AdBreaks.push(obj);
            }
        }

    }
}

/**
 * SourceLocation shim configuration.
 * @class
 */
class SegmentDeliverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default content source address.
         * @type {string || null}
         */
        this.DefaultSegmentUrl = null;

        /**
         * Custom server address.
         * @type {Array.<NameServer> || null}
         */
        this.NameServers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DefaultSegmentUrl = 'DefaultSegmentUrl' in params ? params.DefaultSegmentUrl : null;

        if (params.NameServers) {
            this.NameServers = new Array();
            for (let z in params.NameServers) {
                let obj = new NameServer();
                obj.deserialize(params.NameServers[z]);
                this.NameServers.push(obj);
            }
        }

    }
}

/**
 * DeleteStreamPackageLinearAssemblyChannel response structure.
 * @class
 */
class DeleteStreamPackageLinearAssemblyChannelResponse extends  AbstractModel {
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
 * CreateStreamPackageChannel request structure.
 * @class
 */
class CreateStreamPackageChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Channel protocol. Valid values: HLS, DASH, CMAF.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Cache configuration.
         * @type {CacheInfo || null}
         */
        this.CacheInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.CacheInfo) {
            let obj = new CacheInfo();
            obj.deserialize(params.CacheInfo)
            this.CacheInfo = obj;
        }

    }
}

/**
 * ModifyStreamPackageSource request structure.
 * @class
 */
class ModifyStreamPackageSourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source Id.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Modified name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Distinguish between live broadcast and on-demand VOD source types.
Optional values: Live, VOD (on demand)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * source configuration.
         * @type {Array.<SourcePackageConf> || null}
         */
        this.PackageConfs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.PackageConfs) {
            this.PackageConfs = new Array();
            for (let z in params.PackageConfs) {
                let obj = new SourcePackageConf();
                obj.deserialize(params.PackageConfs[z]);
                this.PackageConfs.push(obj);
            }
        }

    }
}

/**
 * Channel input authentication information.
 * @class
 */
class InputAuthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Username.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Password.
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeStreamPackageSSAIChannel response structure.
 * @class
 */
class DescribeStreamPackageSSAIChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ad insertion configuration information
         * @type {SSAIChannelInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new SSAIChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStreamPackageHarvestJobs response structure.
 * @class
 */
class DeleteStreamPackageHarvestJobsResponse extends  AbstractModel {
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
 * TimeSignalInfo.
 * @class
 */
class TimeSignalInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * EventID.
         * @type {string || null}
         */
        this.EventID = null;

        /**
         * UPIDType.
         * @type {string || null}
         */
        this.UPIDType = null;

        /**
         * UPID.
         * @type {string || null}
         */
        this.UPID = null;

        /**
         * TypeID.
         * @type {string || null}
         */
        this.TypeID = null;

        /**
         * Num.
         * @type {string || null}
         */
        this.Num = null;

        /**
         * Expected.
         * @type {string || null}
         */
        this.Expected = null;

        /**
         * SubsegmentNum.
         * @type {string || null}
         */
        this.SubsegmentNum = null;

        /**
         * SubsegmentsExpected.
         * @type {string || null}
         */
        this.SubsegmentsExpected = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventID = 'EventID' in params ? params.EventID : null;
        this.UPIDType = 'UPIDType' in params ? params.UPIDType : null;
        this.UPID = 'UPID' in params ? params.UPID : null;
        this.TypeID = 'TypeID' in params ? params.TypeID : null;
        this.Num = 'Num' in params ? params.Num : null;
        this.Expected = 'Expected' in params ? params.Expected : null;
        this.SubsegmentNum = 'SubsegmentNum' in params ? params.SubsegmentNum : null;
        this.SubsegmentsExpected = 'SubsegmentsExpected' in params ? params.SubsegmentsExpected : null;

    }
}

/**
 * ModifyStreamPackageLinearAssemblyChannel request structure.
 * @class
 */
class ModifyStreamPackageLinearAssemblyChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Modified name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Define the characteristics of the channel. Standard supports live broadcast and on-demand sources, while Basic only supports on-demand source arrangement.
         * @type {string || null}
         */
        this.Tier = null;

        /**
         * The source switching mode in the channel is divided into Linear and Loop. Live broadcast only supports Linear.
Optional values: Linear, Loop.
         * @type {string || null}
         */
        this.PlaybackMode = null;

        /**
         * Time shift on switch.
         * @type {boolean || null}
         */
        this.TimeShiftEnable = null;

        /**
         * Time shift configuration.
         * @type {TimeShiftInfo || null}
         */
        this.TimeShiftConf = null;

        /**
         * padding configuration.
         * @type {SlateInfo || null}
         */
        this.SlateConf = null;

        /**
         * Output configuration.
         * @type {Array.<OutputInfo> || null}
         */
        this.Outputs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Tier = 'Tier' in params ? params.Tier : null;
        this.PlaybackMode = 'PlaybackMode' in params ? params.PlaybackMode : null;
        this.TimeShiftEnable = 'TimeShiftEnable' in params ? params.TimeShiftEnable : null;

        if (params.TimeShiftConf) {
            let obj = new TimeShiftInfo();
            obj.deserialize(params.TimeShiftConf)
            this.TimeShiftConf = obj;
        }

        if (params.SlateConf) {
            let obj = new SlateInfo();
            obj.deserialize(params.SlateConf)
            this.SlateConf = obj;
        }

        if (params.Outputs) {
            this.Outputs = new Array();
            for (let z in params.Outputs) {
                let obj = new OutputInfo();
                obj.deserialize(params.Outputs[z]);
                this.Outputs.push(obj);
            }
        }

    }
}

/**
 * DeleteStreamPackageSourceLocation response structure.
 * @class
 */
class DeleteStreamPackageSourceLocationResponse extends  AbstractModel {
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
 * CreateStreamPackageSource request structure.
 * @class
 */
class CreateStreamPackageSourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The location id to which this source belongs is required and uniquely bound to one location.
         * @type {string || null}
         */
        this.AttachedLocation = null;

        /**
         * Source name, globally unique under location.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Distinguish between live broadcast and on-demand VOD source types. Optional values: Live, VOD.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * source specific configuration.
         * @type {Array.<SourcePackageConf> || null}
         */
        this.PackageConfs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttachedLocation = 'AttachedLocation' in params ? params.AttachedLocation : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.PackageConfs) {
            this.PackageConfs = new Array();
            for (let z in params.PackageConfs) {
                let obj = new SourcePackageConf();
                obj.deserialize(params.PackageConfs[z]);
                this.PackageConfs.push(obj);
            }
        }

    }
}

/**
 * DescribeStreamPackageLinearAssemblyProgram request structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyProgramRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * program id.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyChannelAlerts request structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyChannelAlertsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Query start time, Unix timestamp, supports queries in the last seven days.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Query end time, Unix timestamp, supports queries in the last seven days.
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
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * UnbindLinearAssemblyCDNDomainWithChannel request structure.
 * @class
 */
class UnbindLinearAssemblyCDNDomainWithChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel Id.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Cdn playback domain.
         * @type {string || null}
         */
        this.CdnDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.CdnDomain = 'CdnDomain' in params ? params.CdnDomain : null;

    }
}

/**
 * DescribeStreamPackageSourceLocations response structure.
 * @class
 */
class DescribeStreamPackageSourceLocationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocation list.
         * @type {Array.<SourceLocationInfo> || null}
         */
        this.Infos = null;

        /**
         * Number of pages.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Size per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The total amount.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * total pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new SourceLocationInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopStreamPackageLinearAssemblyChannel response structure.
 * @class
 */
class StopStreamPackageLinearAssemblyChannelResponse extends  AbstractModel {
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
 * DescribeStreamPackageChannels request structure.
 * @class
 */
class DescribeStreamPackageChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number. Value range: [1, 1000]
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Value range: [1, 1000]
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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * ModifyStreamPackageChannelInputAuthInfo response structure.
 * @class
 */
class ModifyStreamPackageChannelInputAuthInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel input authentication information
         * @type {InputAuthInfo || null}
         */
        this.AuthInfo = null;

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

        if (params.AuthInfo) {
            let obj = new InputAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Channel linear assembly channel spacer configuration.
 * @class
 */
class SlateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the source location.
         * @type {string || null}
         */
        this.SourceLocationId = null;

        /**
         * The corresponding vod shim content source name.
         * @type {string || null}
         */
        this.VodSourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceLocationId = 'SourceLocationId' in params ? params.SourceLocationId : null;
        this.VodSourceName = 'VodSourceName' in params ? params.VodSourceName : null;

    }
}

/**
 * UnbindLinearAssemblyCDNDomainWithChannel response structure.
 * @class
 */
class UnbindLinearAssemblyCDNDomainWithChannelResponse extends  AbstractModel {
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
 * The manifest info used when Type is DASH.
 * @class
 */
class DashManifestInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total duration of each manifest in seconds. [30, 3600], type: integer, default value 60.
         * @type {number || null}
         */
        this.Windows = null;

        /**
         * The minimum cache time (in seconds) that the player keeps in the buffer. [2, 60], type: integer, default value 30.
         * @type {number || null}
         */
        this.MinBufferTime = null;

        /**
         * The minimum time (in seconds) that the player should wait before requesting an update to the manifest. [2, 60], type: integer, default value 2.
         * @type {number || null}
         */
        this.MinUpdatePeriod = null;

        /**
         * The time from the latest live broadcast time point when the player starts broadcasting is a rollback amount (in seconds). [2, 60], type: integer, default value 10.
         * @type {number || null}
         */
        this.SuggestedPresentationDelay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Windows = 'Windows' in params ? params.Windows : null;
        this.MinBufferTime = 'MinBufferTime' in params ? params.MinBufferTime : null;
        this.MinUpdatePeriod = 'MinUpdatePeriod' in params ? params.MinUpdatePeriod : null;
        this.SuggestedPresentationDelay = 'SuggestedPresentationDelay' in params ? params.SuggestedPresentationDelay : null;

    }
}

/**
 * CreateStreamPackageChannel response structure.
 * @class
 */
class CreateStreamPackageChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel information
         * @type {ChannelInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new ChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyChannel response structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel information.
         * @type {LinearAssemblyChannelInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new LinearAssemblyChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyChannelAlerts response structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyChannelAlertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel alarm information.
         * @type {ChannelAlertResp || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            let obj = new ChannelAlertResp();
            obj.deserialize(params.Infos)
            this.Infos = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindLinearAssemblyCDNDomainWithChannel request structure.
 * @class
 */
class BindLinearAssemblyCDNDomainWithChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel Id.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Cdn playback domain.
         * @type {string || null}
         */
        this.CdnDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.CdnDomain = 'CdnDomain' in params ? params.CdnDomain : null;

    }
}

/**
 * DeleteStreamPackageChannelEndpoints request structure.
 * @class
 */
class DeleteStreamPackageChannelEndpointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * List of the URLs of the endpoints to delete
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * DeleteStreamPackageSSAIChannel response structure.
 * @class
 */
class DeleteStreamPackageSSAIChannelResponse extends  AbstractModel {
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
 * StartStreamPackageLinearAssemblyChannel response structure.
 * @class
 */
class StartStreamPackageLinearAssemblyChannelResponse extends  AbstractModel {
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
 * ModifyStreamPackageLinearAssemblyChannel response structure.
 * @class
 */
class ModifyStreamPackageLinearAssemblyChannelResponse extends  AbstractModel {
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
 * DeleteStreamPackageSource response structure.
 * @class
 */
class DeleteStreamPackageSourceResponse extends  AbstractModel {
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
 * DescribeStreamPackageSource request structure.
 * @class
 */
class DescribeStreamPackageSourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocation Id.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeStreamPackageChannel request structure.
 * @class
 */
class DescribeStreamPackageChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Channel linear assembly output information.
 * @class
 */
class OutputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * HLS DASH.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The output group name can be associated with the source group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The file name output by the channel program after scheduling.
         * @type {string || null}
         */
        this.ManifestName = null;

        /**
         * The manifest info, used when Type is HLS.
         * @type {ManifestInfo || null}
         */
        this.ManifestConf = null;

        /**
         * Playback address.
         * @type {string || null}
         */
        this.PlaybackURL = null;

        /**
         * The manifest info, used when Type is DASH.
         * @type {DashManifestInfo || null}
         */
        this.DashManifestConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ManifestName = 'ManifestName' in params ? params.ManifestName : null;

        if (params.ManifestConf) {
            let obj = new ManifestInfo();
            obj.deserialize(params.ManifestConf)
            this.ManifestConf = obj;
        }
        this.PlaybackURL = 'PlaybackURL' in params ? params.PlaybackURL : null;

        if (params.DashManifestConf) {
            let obj = new DashManifestInfo();
            obj.deserialize(params.DashManifestConf)
            this.DashManifestConf = obj;
        }

    }
}

/**
 * CreateStreamPackageChannelEndpoint request structure.
 * @class
 */
class CreateStreamPackageChannelEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Endpoint name, which must contain 1 to 32 characters and supports digits, letters, and underscores
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Authentication information
         * @type {EndpointAuthInfo || null}
         */
        this.AuthInfo = null;

        /**
         * Endpoint protocol type, supports HLS, DASH, CMAF (only HLS type input can create CMAF Endpoint).
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Mainifest name, default is main.
         * @type {string || null}
         */
        this.Manifest = null;

        /**
         * Whether to turn on the TimeShift function, true: on, false: off, the default is off.
         * @type {boolean || null}
         */
        this.TimeShiftEnable = null;

        /**
         * The number of days to look back in TimeShift, up to 30 days is supported.
         * @type {number || null}
         */
        this.TimeShiftDuration = null;

        /**
         * Enable DRM. This is only effective for CMAF protocol.
         * @type {boolean || null}
         */
        this.DRMEnabled = null;

        /**
         * DRM configuration information.
         * @type {DRMInfo || null}
         */
        this.DRMInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AuthInfo) {
            let obj = new EndpointAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Manifest = 'Manifest' in params ? params.Manifest : null;
        this.TimeShiftEnable = 'TimeShiftEnable' in params ? params.TimeShiftEnable : null;
        this.TimeShiftDuration = 'TimeShiftDuration' in params ? params.TimeShiftDuration : null;
        this.DRMEnabled = 'DRMEnabled' in params ? params.DRMEnabled : null;

        if (params.DRMInfo) {
            let obj = new DRMInfo();
            obj.deserialize(params.DRMInfo)
            this.DRMInfo = obj;
        }

    }
}

/**
 * DescribeStreamPackageSSAIChannels request structure.
 * @class
 */
class DescribeStreamPackageSSAIChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Page number, default is 1
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Page size, default is 10
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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * Channel Linear Assembly Program Aggregation Alarm Information
 * @class
 */
class ProgramAlertCounts extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program ID.
         * @type {string || null}
         */
        this.ProgramId = null;

        /**
         * Program name.
         * @type {string || null}
         */
        this.ProgramName = null;

        /**
         * Alarm classification.
         * @type {string || null}
         */
        this.Category = null;

        /**
         * The number of occurrences
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Update time.
         * @type {number || null}
         */
        this.LastModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProgramId = 'ProgramId' in params ? params.ProgramId : null;
        this.ProgramName = 'ProgramName' in params ? params.ProgramName : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.LastModifiedTime = 'LastModifiedTime' in params ? params.LastModifiedTime : null;

    }
}

/**
 * DeleteStreamPackageSourceLocation request structure.
 * @class
 */
class DeleteStreamPackageSourceLocationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocation Id.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyProgram response structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyProgramResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program information.
         * @type {LinearAssemblyProgramInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new LinearAssemblyProgramInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStreamPackageLinearAssemblyChannels response structure.
 * @class
 */
class DeleteStreamPackageLinearAssemblyChannelsResponse extends  AbstractModel {
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
 * BindNewLVBDomainWithChannel request structure.
 * @class
 */
class BindNewLVBDomainWithChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * The LVB domain name to bind
         * @type {string || null}
         */
        this.LVBDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.LVBDomain = 'LVBDomain' in params ? params.LVBDomain : null;

    }
}

/**
 * DescribeLinearAssemblyCDNDomainWithChannel request structure.
 * @class
 */
class DescribeLinearAssemblyCDNDomainWithChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel Id.
         * @type {string || null}
         */
        this.ChannelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;

    }
}

/**
 * ModifyStreamPackageChannel response structure.
 * @class
 */
class ModifyStreamPackageChannelResponse extends  AbstractModel {
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
 * CreateStreamPackageSourceLocation response structure.
 * @class
 */
class CreateStreamPackageSourceLocationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocation information.
         * @type {SourceLocationInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new SourceLocationInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopStreamPackageLinearAssemblyChannel request structure.
 * @class
 */
class StopStreamPackageLinearAssemblyChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel ID.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyProgramSchedules request structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyProgramSchedulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query all Programs under a Channel.
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Window duration information, in seconds.
         * @type {number || null}
         */
        this.TimeWindow = null;

        /**
         * Paging query page number, the value range is [1, 1000].
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Paging query the size of each page, the value range is [1, 1000].
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
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.TimeWindow = 'TimeWindow' in params ? params.TimeWindow : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DeleteStreamPackageLinearAssemblyPrograms request structure.
 * @class
 */
class DeleteStreamPackageLinearAssemblyProgramsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program id list.
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DeleteStreamPackageChannelEndpoints response structure.
 * @class
 */
class DeleteStreamPackageChannelEndpointsResponse extends  AbstractModel {
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
 * CreateStreamPackageHarvestJob request structure.
 * @class
 */
class CreateStreamPackageHarvestJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob ID, a globally unique identifier.
         * @type {string || null}
         */
        this.ID = null;

        /**
         * The associated channel name.
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * The associated endpoint name.
         * @type {string || null}
         */
        this.EndpointName = null;

        /**
         * Time format, supports the following types: 1. Epoch seconds 2. ISO-8601
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Task start time supports two formats for TimeFormat input: 1. Epoch seconds: The input box is a numeric input box, and only positive integers can be entered. 2. ISO-8601: The supported format is ISO time, for example: 2023-08-01T10:00:00+08:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task end time supports two formats for TimeFormat input: 1. Epoch seconds: The input box is a numeric input box, and only positive integers can be entered. 2. ISO-8601: The supported format is ISO time, for example: 2023-08-01T10:00:00+08:00.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The path where the recording file is stored in Cos.
         * @type {string || null}
         */
        this.Destination = null;

        /**
         * The file name of the recording file stored in Cos.
         * @type {string || null}
         */
        this.Manifest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.EndpointName = 'EndpointName' in params ? params.EndpointName : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.Manifest = 'Manifest' in params ? params.Manifest : null;

    }
}

/**
 * DescribeStreamPackageSourceAlerts response structure.
 * @class
 */
class DescribeStreamPackageSourceAlertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source alarm information.
         * @type {Array.<SourceAlert> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new SourceAlert();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStreamPackageLinearAssemblyProgram request structure.
 * @class
 */
class DeleteStreamPackageLinearAssemblyProgramRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Program id.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteStreamPackageChannels response structure.
 * @class
 */
class DeleteStreamPackageChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the information of successfully deleted channels
         * @type {Array.<ChannelInfo> || null}
         */
        this.SuccessInfos = null;

        /**
         * List of the information of the channels that failed to be deleted
         * @type {Array.<ChannelInfo> || null}
         */
        this.FailInfos = null;

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

        if (params.SuccessInfos) {
            this.SuccessInfos = new Array();
            for (let z in params.SuccessInfos) {
                let obj = new ChannelInfo();
                obj.deserialize(params.SuccessInfos[z]);
                this.SuccessInfos.push(obj);
            }
        }

        if (params.FailInfos) {
            this.FailInfos = new Array();
            for (let z in params.FailInfos) {
                let obj = new ChannelInfo();
                obj.deserialize(params.FailInfos[z]);
                this.FailInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The scheduling information of the Program under this channel.
 * @class
 */
class ProgramScheduleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * program name.
         * @type {string || null}
         */
        this.ProgramName = null;

        /**
         * program id.
         * @type {string || null}
         */
        this.ProgramId = null;

        /**
         * source type.
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * source id.
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * The id of the source location.
         * @type {string || null}
         */
        this.SourceLocationId = null;

        /**
         * Start timestamp.
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Duration.
         * @type {string || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProgramName = 'ProgramName' in params ? params.ProgramName : null;
        this.ProgramId = 'ProgramId' in params ? params.ProgramId : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceLocationId = 'SourceLocationId' in params ? params.SourceLocationId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * DeleteStreamPackageLinearAssemblyPrograms response structure.
 * @class
 */
class DeleteStreamPackageLinearAssemblyProgramsResponse extends  AbstractModel {
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
 * SpliceInsertInfo.
 * @class
 */
class SpliceInsertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * EventID.
         * @type {string || null}
         */
        this.EventID = null;

        /**
         * AvailNum.
         * @type {string || null}
         */
        this.AvailNum = null;

        /**
         * AvailExpected.
         * @type {string || null}
         */
        this.AvailExpected = null;

        /**
         * ProgramID.
         * @type {string || null}
         */
        this.ProgramID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventID = 'EventID' in params ? params.EventID : null;
        this.AvailNum = 'AvailNum' in params ? params.AvailNum : null;
        this.AvailExpected = 'AvailExpected' in params ? params.AvailExpected : null;
        this.ProgramID = 'ProgramID' in params ? params.ProgramID : null;

    }
}

/**
 * CreateStreamPackageLinearAssemblyProgram response structure.
 * @class
 */
class CreateStreamPackageLinearAssemblyProgramResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * channel information.
         * @type {LinearAssemblyProgramInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new LinearAssemblyProgramInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPackageChannels response structure.
 * @class
 */
class DescribeStreamPackageChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of channel information
Note: this field may return `null`, indicating that no valid value was found.
         * @type {Array.<ChannelInfo> || null}
         */
        this.Infos = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number of entries
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new ChannelInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPackageSource response structure.
 * @class
 */
class DescribeStreamPackageSourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source information.
         * @type {SourceInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new SourceInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStreamPackageLinearAssemblyProgram response structure.
 * @class
 */
class DeleteStreamPackageLinearAssemblyProgramResponse extends  AbstractModel {
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
 * CreateStreamPackageSSAIChannel response structure.
 * @class
 */
class CreateStreamPackageSSAIChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ad insertion configuration information
         * @type {SSAIChannelInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new SSAIChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyStreamPackageSourceLocation request structure.
 * @class
 */
class ModifyStreamPackageSourceLocationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SourceLocation Id.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Modified name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * BaseUrl.
         * @type {string || null}
         */
        this.BaseUrl = null;

        /**
         * Whether to enable patching.
         * @type {boolean || null}
         */
        this.SegmentDeliverEnable = null;

        /**
         * Patch configuration.
         * @type {SegmentDeliverInfo || null}
         */
        this.SegmentDeliverConf = null;

        /**
         * Whether to enable package distribution sharding, it is enabled by default.
         * @type {boolean || null}
         */
        this.SegmentDeliverUsePackageEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BaseUrl = 'BaseUrl' in params ? params.BaseUrl : null;
        this.SegmentDeliverEnable = 'SegmentDeliverEnable' in params ? params.SegmentDeliverEnable : null;

        if (params.SegmentDeliverConf) {
            let obj = new SegmentDeliverInfo();
            obj.deserialize(params.SegmentDeliverConf)
            this.SegmentDeliverConf = obj;
        }
        this.SegmentDeliverUsePackageEnable = 'SegmentDeliverUsePackageEnable' in params ? params.SegmentDeliverUsePackageEnable : null;

    }
}

/**
 * CreateStreamPackageHarvestJob response structure.
 * @class
 */
class CreateStreamPackageHarvestJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob information.
         * @type {HarvestJobResp || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new HarvestJobResp();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The authentication information of channel endpoints.
 * @class
 */
class EndpointAuthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The security group allowlist in CIDR format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

        /**
         * The security group blocklist in CIDR format.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * The authentication key. Its value is same as `X-TENCENT-PACKAGE` set in the HTTP request header.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AuthKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;

    }
}

/**
 * SourceLocation configuration information.
 * @class
 */
class SourceLocationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID, unique identification.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * SourceLocation name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * area.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * BaseUrl information.
         * @type {string || null}
         */
        this.BaseUrl = null;

        /**
         * Whether to enable patching.
         * @type {boolean || null}
         */
        this.SegmentDeliverEnable = null;

        /**
         * Patch configuration.
         * @type {SegmentDeliverInfo || null}
         */
        this.SegmentDeliverConf = null;

        /**
         * List of bound live broadcast source ids.
         * @type {Array.<string> || null}
         */
        this.AttachedLiveSources = null;

        /**
         * List of bound on-demand source ids.
         * @type {Array.<string> || null}
         */
        this.AttachedVodSources = null;

        /**
         * Source location creation time, Unix timestamp.
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * Source location last modified time, Unix timestamp.
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * Whether to enable package distribution sharding, it is enabled by default.
         * @type {boolean || null}
         */
        this.SegmentDeliverUsePackageEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.BaseUrl = 'BaseUrl' in params ? params.BaseUrl : null;
        this.SegmentDeliverEnable = 'SegmentDeliverEnable' in params ? params.SegmentDeliverEnable : null;

        if (params.SegmentDeliverConf) {
            let obj = new SegmentDeliverInfo();
            obj.deserialize(params.SegmentDeliverConf)
            this.SegmentDeliverConf = obj;
        }
        this.AttachedLiveSources = 'AttachedLiveSources' in params ? params.AttachedLiveSources : null;
        this.AttachedVodSources = 'AttachedVodSources' in params ? params.AttachedVodSources : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.SegmentDeliverUsePackageEnable = 'SegmentDeliverUsePackageEnable' in params ? params.SegmentDeliverUsePackageEnable : null;

    }
}

/**
 * SSAI ad insertion configuration.
 * @class
 */
class SSAIConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Advertising Decision Server URL (ADS).
         * @type {string || null}
         */
        this.AdsUrl = null;

        /**
         * Parameter configuration.
         * @type {Array.<ConfigAliasesInfo> || null}
         */
        this.ConfigAliases = null;

        /**
         * Whether to enable transparent transmission of advertising tags.
         * @type {boolean || null}
         */
        this.AdMarkerPassthrough = null;

        /**
         * How to process tags in advertisements, optional values: [1,2] 
1: Process all SCTE-35 type tags - all (default) 
2: SCTE-35enhanced, parse some types.
         * @type {number || null}
         */
        this.SCTE35AdType = null;

        /**
         * Default advertising url.
         * @type {string || null}
         */
        this.SlateAd = null;

        /**
         * Maximum unfilled duration, unit: seconds.
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * Whether to enable mpd location, true corresponds to enable, false corresponds to disable.
         * @type {boolean || null}
         */
        this.DashMPDLocation = null;

        /**
         * The type of tag that is regarded as an advertisement, optional values: [1,8]
1. Splice insert 
2. Provider advertisement 
3. Distributor advertisement 
4. Provider placement opportunity 
5. Distributor placement opportunity 
6. Break 
7. Provider overlay placement opportunity 
8. Distributor overlay placement opportunity.
         * @type {Array.<number> || null}
         */
        this.AdTriggers = null;

        /**
         * The type of distribution restriction that is considered an advertisement, optional values: [1,4]
1:None 
2:Restricted (default) 
3:Unrestricted 
4.Both.
         * @type {number || null}
         */
        this.DeliveryRestrictions = null;

        /**
         * Source CDN prefix, needs to start with http:// or https://
         * @type {string || null}
         */
        this.SourceCDNPrefix = null;

        /**
         * Advertising CDN prefix needs to start with http:// or https://
         * @type {string || null}
         */
        this.AdCDNPrefix = null;

        /**
         * Pre-roll ad decision service address.
         * @type {string || null}
         */
        this.PreRollAdsUrl = null;

        /**
         * The maximum allowed duration of pre-roll ads, (0, 3600].
         * @type {number || null}
         */
        this.PreRollMaxAllowedDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AdsUrl = 'AdsUrl' in params ? params.AdsUrl : null;

        if (params.ConfigAliases) {
            this.ConfigAliases = new Array();
            for (let z in params.ConfigAliases) {
                let obj = new ConfigAliasesInfo();
                obj.deserialize(params.ConfigAliases[z]);
                this.ConfigAliases.push(obj);
            }
        }
        this.AdMarkerPassthrough = 'AdMarkerPassthrough' in params ? params.AdMarkerPassthrough : null;
        this.SCTE35AdType = 'SCTE35AdType' in params ? params.SCTE35AdType : null;
        this.SlateAd = 'SlateAd' in params ? params.SlateAd : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.DashMPDLocation = 'DashMPDLocation' in params ? params.DashMPDLocation : null;
        this.AdTriggers = 'AdTriggers' in params ? params.AdTriggers : null;
        this.DeliveryRestrictions = 'DeliveryRestrictions' in params ? params.DeliveryRestrictions : null;
        this.SourceCDNPrefix = 'SourceCDNPrefix' in params ? params.SourceCDNPrefix : null;
        this.AdCDNPrefix = 'AdCDNPrefix' in params ? params.AdCDNPrefix : null;
        this.PreRollAdsUrl = 'PreRollAdsUrl' in params ? params.PreRollAdsUrl : null;
        this.PreRollMaxAllowedDuration = 'PreRollMaxAllowedDuration' in params ? params.PreRollMaxAllowedDuration : null;

    }
}

/**
 * Channel linear assembly program information.
 * @class
 */
class LinearAssemblyProgramInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel linear assembly program information.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The type of the arrangement target source, divided into live broadcast and on-demand.
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * The associated source location id.
         * @type {string || null}
         */
        this.SourceLocationId = null;

        /**
         * SourceId, uniquely identifies a source.
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * The associated live broadcast or on-demand broadcast, source name, and location are globally unique.
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * The bound channel.
         * @type {string || null}
         */
        this.AttachedChannel = null;

        /**
         * Play configuration.
         * @type {PlaybackInfo || null}
         */
        this.PlaybackConf = null;

        /**
         * AdBreaks.
         * @type {Array.<AdBreakInfo> || null}
         */
        this.AdBreaks = null;

        /**
         * ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * SourceLocation name.
         * @type {string || null}
         */
        this.SourceLocationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceLocationId = 'SourceLocationId' in params ? params.SourceLocationId : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SourceName = 'SourceName' in params ? params.SourceName : null;
        this.AttachedChannel = 'AttachedChannel' in params ? params.AttachedChannel : null;

        if (params.PlaybackConf) {
            let obj = new PlaybackInfo();
            obj.deserialize(params.PlaybackConf)
            this.PlaybackConf = obj;
        }

        if (params.AdBreaks) {
            this.AdBreaks = new Array();
            for (let z in params.AdBreaks) {
                let obj = new AdBreakInfo();
                obj.deserialize(params.AdBreaks[z]);
                this.AdBreaks.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.SourceLocationName = 'SourceLocationName' in params ? params.SourceLocationName : null;

    }
}

/**
 * DescribeStreamPackageSources request structure.
 * @class
 */
class DescribeStreamPackageSourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Paging query page number, the value range is [1, 1000].
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Paging query the size of each page, the value range is [1, 1000].
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Location Id, query all sources under the location.
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * The type of source is divided into live broadcast and on-demand VOD.
Optional values: Live, VOD.
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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateStreamPackageLinearAssemblyChannel response structure.
 * @class
 */
class CreateStreamPackageLinearAssemblyChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * channel information.
         * @type {LinearAssemblyChannelInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new LinearAssemblyChannelInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Linearly assembled channel information.
 * @class
 */
class LinearAssemblyChannelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Linear assembly channel name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Define the characteristics of the channel. Standard supports live broadcast and on-demand sources, while Basic only supports on-demand source arrangement.
         * @type {string || null}
         */
        this.Tier = null;

        /**
         * The source switching mode in the channel is divided into Linear and Loop. Live broadcast only supports Linear.
         * @type {string || null}
         */
        this.PlaybackMode = null;

        /**
         * Time shift configuration, vod is valid.
         * @type {TimeShiftInfo || null}
         */
        this.TimeShiftConf = null;

        /**
         * Spacer configuration.
         * @type {SlateInfo || null}
         */
        this.SlateConf = null;

        /**
         * output information.
         * @type {Array.<OutputInfo> || null}
         */
        this.Outputs = null;

        /**
         * List of programs bound to this channel.
         * @type {Array.<string> || null}
         */
        this.AttachedPrograms = null;

        /**
         * program information.
         * @type {Array.<ProgramScheduleInfo> || null}
         */
        this.ProgramSchedules = null;

        /**
         * ID.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Region.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * State.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Time shift on switch.
         * @type {boolean || null}
         */
        this.TimeShiftEnable = null;

        /**
         * Channel creation time, unix seconds timestamp.
         * @type {number || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Tier = 'Tier' in params ? params.Tier : null;
        this.PlaybackMode = 'PlaybackMode' in params ? params.PlaybackMode : null;

        if (params.TimeShiftConf) {
            let obj = new TimeShiftInfo();
            obj.deserialize(params.TimeShiftConf)
            this.TimeShiftConf = obj;
        }

        if (params.SlateConf) {
            let obj = new SlateInfo();
            obj.deserialize(params.SlateConf)
            this.SlateConf = obj;
        }

        if (params.Outputs) {
            this.Outputs = new Array();
            for (let z in params.Outputs) {
                let obj = new OutputInfo();
                obj.deserialize(params.Outputs[z]);
                this.Outputs.push(obj);
            }
        }
        this.AttachedPrograms = 'AttachedPrograms' in params ? params.AttachedPrograms : null;

        if (params.ProgramSchedules) {
            this.ProgramSchedules = new Array();
            for (let z in params.ProgramSchedules) {
                let obj = new ProgramScheduleInfo();
                obj.deserialize(params.ProgramSchedules[z]);
                this.ProgramSchedules.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.State = 'State' in params ? params.State : null;
        this.TimeShiftEnable = 'TimeShiftEnable' in params ? params.TimeShiftEnable : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeStreamPackageSSAIChannels response structure.
 * @class
 */
class DescribeStreamPackageSSAIChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ad insertion configuration information.
         * @type {Array.<SSAIChannelInfo> || null}
         */
        this.Infos = null;

        /**
         * Page number
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Page size
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number
         * @type {number || null}
         */
        this.TotalNum = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new SSAIChannelInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Channel linear assembly output information.
 * @class
 */
class OutputReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output type, distinguish HLS DASH.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The output group name can be associated with the source group name.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * The file name output by the channel program after scheduling.
         * @type {string || null}
         */
        this.ManifestName = null;

        /**
         * The manifest info, used when Type is HLS.
         * @type {ManifestInfo || null}
         */
        this.ManifestConf = null;

        /**
         * The manifest info, used when Type is DASH.
         * @type {DashManifestInfo || null}
         */
        this.DashManifestConf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ManifestName = 'ManifestName' in params ? params.ManifestName : null;

        if (params.ManifestConf) {
            let obj = new ManifestInfo();
            obj.deserialize(params.ManifestConf)
            this.ManifestConf = obj;
        }

        if (params.DashManifestConf) {
            let obj = new DashManifestInfo();
            obj.deserialize(params.DashManifestConf)
            this.DashManifestConf = obj;
        }

    }
}

/**
 * Timeout information for cache configuration
 * @class
 */
class CacheInfoInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timeout period (ms), which must be an integer multiple of 1000
.m3u8/.mpd: [1000, 60000]
.ts/.m4s/.mp4: [10000, 1800000]
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * File extension. Valid values: .m3u8, .ts, .mpd, .m4s, .mp4
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.Ext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Ext = 'Ext' in params ? params.Ext : null;

    }
}

/**
 * DescribeStreamPackageLinearAssemblyChannels response structure.
 * @class
 */
class DescribeStreamPackageLinearAssemblyChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Channel list.
         * @type {Array.<LinearAssemblyChannelInfo> || null}
         */
        this.Infos = null;

        /**
         * Number of pages.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Size per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * The total amount.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * total pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new LinearAssemblyChannelInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStreamPackageHarvestJob request structure.
 * @class
 */
class DeleteStreamPackageHarvestJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HarvestJob ID, a globally unique identifier.
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * Custom server information.
 * @class
 */
class NameServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * address.
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Parameter configuration.
 * @class
 */
class ConfigAliasesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * parameter name.
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Alias-value configuration.
         * @type {Array.<AliasValueConf> || null}
         */
        this.AliasValueList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;

        if (params.AliasValueList) {
            this.AliasValueList = new Array();
            for (let z in params.AliasValueList) {
                let obj = new AliasValueConf();
                obj.deserialize(params.AliasValueList[z]);
                this.AliasValueList.push(obj);
            }
        }

    }
}

/**
 * Linear assembly channel configuration.
 * @class
 */
class ManifestInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time window, in seconds.
         * @type {number || null}
         */
        this.Windows = null;

        /**
         * Enter the format of the output advertising tag. Optional values are: Date Range and Enhanced SCTE-35.
         * @type {string || null}
         */
        this.AdMarkupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Windows = 'Windows' in params ? params.Windows : null;
        this.AdMarkupType = 'AdMarkupType' in params ? params.AdMarkupType : null;

    }
}

/**
 * DescribeLinearAssemblyCDNDomainWithChannels response structure.
 * @class
 */
class DescribeLinearAssemblyCDNDomainWithChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The CDN domain name information associated with the channel.
         * @type {CdnDomainInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new CdnDomainInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DRMInfo: DRMInfo,
    SourcePackageConf: SourcePackageConf,
    CreateStreamPackageSSAIChannelRequest: CreateStreamPackageSSAIChannelRequest,
    AdBreakInfo: AdBreakInfo,
    ModifyStreamPackageLinearAssemblyProgramResponse: ModifyStreamPackageLinearAssemblyProgramResponse,
    BindNewLVBDomainWithChannelResponse: BindNewLVBDomainWithChannelResponse,
    DeleteStreamPackageLinearAssemblyChannelsRequest: DeleteStreamPackageLinearAssemblyChannelsRequest,
    CdnDomainInfo: CdnDomainInfo,
    StartStreamPackageLinearAssemblyChannelRequest: StartStreamPackageLinearAssemblyChannelRequest,
    LocationAlert: LocationAlert,
    Metadata: Metadata,
    ClipRangeInfo: ClipRangeInfo,
    AliasValueConf: AliasValueConf,
    DescribeStreamPackageSSAIChannelRequest: DescribeStreamPackageSSAIChannelRequest,
    DescribeLinearAssemblyCDNDomainWithChannelResponse: DescribeLinearAssemblyCDNDomainWithChannelResponse,
    ModifyStreamPackageSSAIChannelResponse: ModifyStreamPackageSSAIChannelResponse,
    ModifyStreamPackageChannelInputAuthInfoRequest: ModifyStreamPackageChannelInputAuthInfoRequest,
    ChannelAlertResp: ChannelAlertResp,
    DeleteStreamPackageChannelsRequest: DeleteStreamPackageChannelsRequest,
    InputInfo: InputInfo,
    DescribeStreamPackageLinearAssemblyProgramsResponse: DescribeStreamPackageLinearAssemblyProgramsResponse,
    PointInfo: PointInfo,
    DescribeStreamPackageSourceAlertsRequest: DescribeStreamPackageSourceAlertsRequest,
    ModifyStreamPackageSSAIChannelRequest: ModifyStreamPackageSSAIChannelRequest,
    CreateStreamPackageSourceResponse: CreateStreamPackageSourceResponse,
    ProgramAlertInfos: ProgramAlertInfos,
    DeleteStreamPackageSourceRequest: DeleteStreamPackageSourceRequest,
    DescribeStreamPackageHarvestJobsResponse: DescribeStreamPackageHarvestJobsResponse,
    DescribeStreamPackageSourceLocationAlertsRequest: DescribeStreamPackageSourceLocationAlertsRequest,
    UnbindCdnDomainWithChannelResponse: UnbindCdnDomainWithChannelResponse,
    ModifyStreamPackageChannelEndpointRequest: ModifyStreamPackageChannelEndpointRequest,
    SSAIChannelInfo: SSAIChannelInfo,
    ModifyStreamPackageSourceLocationResponse: ModifyStreamPackageSourceLocationResponse,
    BindLinearAssemblyCDNDomainWithChannelResponse: BindLinearAssemblyCDNDomainWithChannelResponse,
    DescribeStreamPackageChannelResponse: DescribeStreamPackageChannelResponse,
    DescribeStreamPackageLinearAssemblyProgramsRequest: DescribeStreamPackageLinearAssemblyProgramsRequest,
    DomainRecordInfo: DomainRecordInfo,
    TimeShiftInfo: TimeShiftInfo,
    DescribeStreamPackageLinearAssemblyProgramSchedulesResponse: DescribeStreamPackageLinearAssemblyProgramSchedulesResponse,
    DescribeStreamPackageHarvestJobRequest: DescribeStreamPackageHarvestJobRequest,
    DescribeStreamPackageLinearAssemblyChannelsRequest: DescribeStreamPackageLinearAssemblyChannelsRequest,
    SourceAlert: SourceAlert,
    DescribeStreamPackageSourcesResponse: DescribeStreamPackageSourcesResponse,
    SourceInfo: SourceInfo,
    DescribeStreamPackageSourceLocationAlertsResponse: DescribeStreamPackageSourceLocationAlertsResponse,
    CreateStreamPackageLinearAssemblyChannelRequest: CreateStreamPackageLinearAssemblyChannelRequest,
    PlaybackInfoReq: PlaybackInfoReq,
    DescribeStreamPackageHarvestJobResponse: DescribeStreamPackageHarvestJobResponse,
    DescribeStreamPackageLinearAssemblyChannelRequest: DescribeStreamPackageLinearAssemblyChannelRequest,
    DeleteStreamPackageSSAIChannelRequest: DeleteStreamPackageSSAIChannelRequest,
    ModifyStreamPackageChannelEndpointResponse: ModifyStreamPackageChannelEndpointResponse,
    CreateStreamPackageSourceLocationRequest: CreateStreamPackageSourceLocationRequest,
    DescribeStreamPackageHarvestJobsRequest: DescribeStreamPackageHarvestJobsRequest,
    DeleteStreamPackageHarvestJobResponse: DeleteStreamPackageHarvestJobResponse,
    DeleteStreamPackageHarvestJobsRequest: DeleteStreamPackageHarvestJobsRequest,
    CreateStreamPackageChannelEndpointResponse: CreateStreamPackageChannelEndpointResponse,
    DescribeLinearAssemblyCDNDomainWithChannelsRequest: DescribeLinearAssemblyCDNDomainWithChannelsRequest,
    PlaybackInfo: PlaybackInfo,
    ChannelInfo: ChannelInfo,
    CacheInfo: CacheInfo,
    DescribeStreamPackageSourceLocationRequest: DescribeStreamPackageSourceLocationRequest,
    UnbindCdnDomainWithChannelRequest: UnbindCdnDomainWithChannelRequest,
    ModifyStreamPackageLinearAssemblyProgramRequest: ModifyStreamPackageLinearAssemblyProgramRequest,
    HarvestJobResp: HarvestJobResp,
    DescribeStreamPackageSourceLocationsRequest: DescribeStreamPackageSourceLocationsRequest,
    DescribeStreamPackageSourceLocationResponse: DescribeStreamPackageSourceLocationResponse,
    EndpointInfo: EndpointInfo,
    ModifyStreamPackageSourceResponse: ModifyStreamPackageSourceResponse,
    DeleteStreamPackageLinearAssemblyChannelRequest: DeleteStreamPackageLinearAssemblyChannelRequest,
    ModifyStreamPackageChannelRequest: ModifyStreamPackageChannelRequest,
    CreateStreamPackageLinearAssemblyProgramRequest: CreateStreamPackageLinearAssemblyProgramRequest,
    SegmentDeliverInfo: SegmentDeliverInfo,
    DeleteStreamPackageLinearAssemblyChannelResponse: DeleteStreamPackageLinearAssemblyChannelResponse,
    CreateStreamPackageChannelRequest: CreateStreamPackageChannelRequest,
    ModifyStreamPackageSourceRequest: ModifyStreamPackageSourceRequest,
    InputAuthInfo: InputAuthInfo,
    DescribeStreamPackageSSAIChannelResponse: DescribeStreamPackageSSAIChannelResponse,
    DeleteStreamPackageHarvestJobsResponse: DeleteStreamPackageHarvestJobsResponse,
    TimeSignalInfo: TimeSignalInfo,
    ModifyStreamPackageLinearAssemblyChannelRequest: ModifyStreamPackageLinearAssemblyChannelRequest,
    DeleteStreamPackageSourceLocationResponse: DeleteStreamPackageSourceLocationResponse,
    CreateStreamPackageSourceRequest: CreateStreamPackageSourceRequest,
    DescribeStreamPackageLinearAssemblyProgramRequest: DescribeStreamPackageLinearAssemblyProgramRequest,
    DescribeStreamPackageLinearAssemblyChannelAlertsRequest: DescribeStreamPackageLinearAssemblyChannelAlertsRequest,
    UnbindLinearAssemblyCDNDomainWithChannelRequest: UnbindLinearAssemblyCDNDomainWithChannelRequest,
    DescribeStreamPackageSourceLocationsResponse: DescribeStreamPackageSourceLocationsResponse,
    StopStreamPackageLinearAssemblyChannelResponse: StopStreamPackageLinearAssemblyChannelResponse,
    DescribeStreamPackageChannelsRequest: DescribeStreamPackageChannelsRequest,
    ModifyStreamPackageChannelInputAuthInfoResponse: ModifyStreamPackageChannelInputAuthInfoResponse,
    SlateInfo: SlateInfo,
    UnbindLinearAssemblyCDNDomainWithChannelResponse: UnbindLinearAssemblyCDNDomainWithChannelResponse,
    DashManifestInfo: DashManifestInfo,
    CreateStreamPackageChannelResponse: CreateStreamPackageChannelResponse,
    DescribeStreamPackageLinearAssemblyChannelResponse: DescribeStreamPackageLinearAssemblyChannelResponse,
    DescribeStreamPackageLinearAssemblyChannelAlertsResponse: DescribeStreamPackageLinearAssemblyChannelAlertsResponse,
    BindLinearAssemblyCDNDomainWithChannelRequest: BindLinearAssemblyCDNDomainWithChannelRequest,
    DeleteStreamPackageChannelEndpointsRequest: DeleteStreamPackageChannelEndpointsRequest,
    DeleteStreamPackageSSAIChannelResponse: DeleteStreamPackageSSAIChannelResponse,
    StartStreamPackageLinearAssemblyChannelResponse: StartStreamPackageLinearAssemblyChannelResponse,
    ModifyStreamPackageLinearAssemblyChannelResponse: ModifyStreamPackageLinearAssemblyChannelResponse,
    DeleteStreamPackageSourceResponse: DeleteStreamPackageSourceResponse,
    DescribeStreamPackageSourceRequest: DescribeStreamPackageSourceRequest,
    DescribeStreamPackageChannelRequest: DescribeStreamPackageChannelRequest,
    OutputInfo: OutputInfo,
    CreateStreamPackageChannelEndpointRequest: CreateStreamPackageChannelEndpointRequest,
    DescribeStreamPackageSSAIChannelsRequest: DescribeStreamPackageSSAIChannelsRequest,
    ProgramAlertCounts: ProgramAlertCounts,
    DeleteStreamPackageSourceLocationRequest: DeleteStreamPackageSourceLocationRequest,
    DescribeStreamPackageLinearAssemblyProgramResponse: DescribeStreamPackageLinearAssemblyProgramResponse,
    DeleteStreamPackageLinearAssemblyChannelsResponse: DeleteStreamPackageLinearAssemblyChannelsResponse,
    BindNewLVBDomainWithChannelRequest: BindNewLVBDomainWithChannelRequest,
    DescribeLinearAssemblyCDNDomainWithChannelRequest: DescribeLinearAssemblyCDNDomainWithChannelRequest,
    ModifyStreamPackageChannelResponse: ModifyStreamPackageChannelResponse,
    CreateStreamPackageSourceLocationResponse: CreateStreamPackageSourceLocationResponse,
    StopStreamPackageLinearAssemblyChannelRequest: StopStreamPackageLinearAssemblyChannelRequest,
    DescribeStreamPackageLinearAssemblyProgramSchedulesRequest: DescribeStreamPackageLinearAssemblyProgramSchedulesRequest,
    DeleteStreamPackageLinearAssemblyProgramsRequest: DeleteStreamPackageLinearAssemblyProgramsRequest,
    DeleteStreamPackageChannelEndpointsResponse: DeleteStreamPackageChannelEndpointsResponse,
    CreateStreamPackageHarvestJobRequest: CreateStreamPackageHarvestJobRequest,
    DescribeStreamPackageSourceAlertsResponse: DescribeStreamPackageSourceAlertsResponse,
    DeleteStreamPackageLinearAssemblyProgramRequest: DeleteStreamPackageLinearAssemblyProgramRequest,
    DeleteStreamPackageChannelsResponse: DeleteStreamPackageChannelsResponse,
    ProgramScheduleInfo: ProgramScheduleInfo,
    DeleteStreamPackageLinearAssemblyProgramsResponse: DeleteStreamPackageLinearAssemblyProgramsResponse,
    SpliceInsertInfo: SpliceInsertInfo,
    CreateStreamPackageLinearAssemblyProgramResponse: CreateStreamPackageLinearAssemblyProgramResponse,
    DescribeStreamPackageChannelsResponse: DescribeStreamPackageChannelsResponse,
    DescribeStreamPackageSourceResponse: DescribeStreamPackageSourceResponse,
    DeleteStreamPackageLinearAssemblyProgramResponse: DeleteStreamPackageLinearAssemblyProgramResponse,
    CreateStreamPackageSSAIChannelResponse: CreateStreamPackageSSAIChannelResponse,
    ModifyStreamPackageSourceLocationRequest: ModifyStreamPackageSourceLocationRequest,
    CreateStreamPackageHarvestJobResponse: CreateStreamPackageHarvestJobResponse,
    EndpointAuthInfo: EndpointAuthInfo,
    SourceLocationInfo: SourceLocationInfo,
    SSAIConf: SSAIConf,
    LinearAssemblyProgramInfo: LinearAssemblyProgramInfo,
    DescribeStreamPackageSourcesRequest: DescribeStreamPackageSourcesRequest,
    CreateStreamPackageLinearAssemblyChannelResponse: CreateStreamPackageLinearAssemblyChannelResponse,
    LinearAssemblyChannelInfo: LinearAssemblyChannelInfo,
    DescribeStreamPackageSSAIChannelsResponse: DescribeStreamPackageSSAIChannelsResponse,
    OutputReq: OutputReq,
    CacheInfoInfo: CacheInfoInfo,
    DescribeStreamPackageLinearAssemblyChannelsResponse: DescribeStreamPackageLinearAssemblyChannelsResponse,
    DeleteStreamPackageHarvestJobRequest: DeleteStreamPackageHarvestJobRequest,
    NameServer: NameServer,
    ConfigAliasesInfo: ConfigAliasesInfo,
    ManifestInfo: ManifestInfo,
    DescribeLinearAssemblyCDNDomainWithChannelsResponse: DescribeLinearAssemblyCDNDomainWithChannelsResponse,

}
