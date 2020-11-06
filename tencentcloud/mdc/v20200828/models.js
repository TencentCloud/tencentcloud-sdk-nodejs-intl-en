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
 * CreateMediaConnectFlow request structure.
 * @class
 */
class CreateMediaConnectFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow name.
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * Maximum bandwidth in bps. Valid values: [10000000, 20000000, 50000000].
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * Flow input group.
         * @type {Array.<CreateInput> || null}
         */
        this.InputGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;

        if (params.InputGroup) {
            this.InputGroup = new Array();
            for (let z in params.InputGroup) {
                let obj = new CreateInput();
                obj.deserialize(params.InputGroup[z]);
                this.InputGroup.push(obj);
            }
        }

    }
}

/**
 * DeleteMediaConnectFlow response structure.
 * @class
 */
class DeleteMediaConnectFlowResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Output destination address.
 * @class
 */
class OutputAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output destination IP.
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * RTP configuration information of the queried input.
 * @class
 */
class DescribeInputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether it is FEC.
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * Idle timeout period.
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * DeleteMediaConnectFlow request structure.
 * @class
 */
class DeleteMediaConnectFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * StopMediaConnectFlow request structure.
 * @class
 */
class StopMediaConnectFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * SRT destination address of the created MediaConnect flow output.
 * @class
 */
class CreateOutputSrtSettingsDestinations extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Output port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeMediaConnectFlows response structure.
 * @class
 */
class DescribeMediaConnectFlowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration information list of flow.
         * @type {Array.<DescribeFlow> || null}
         */
        this.Infos = null;

        /**
         * Number of current pages.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Total number.
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * Total number of pages.
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new DescribeFlow();
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
 * StartMediaConnectFlow request structure.
 * @class
 */
class StartMediaConnectFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * DeleteMediaConnectOutput request structure.
 * @class
 */
class DeleteMediaConnectOutputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Output ID.
         * @type {string || null}
         */
        this.OutputId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.OutputId = 'OutputId' in params ? params.OutputId : null;

    }
}

/**
 * DeleteMediaConnectOutput response structure.
 * @class
 */
class DeleteMediaConnectOutputResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration information of the queried output.
 * @class
 */
class DescribeOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output ID.
         * @type {string || null}
         */
        this.OutputId = null;

        /**
         * Output name.
         * @type {string || null}
         */
        this.OutputName = null;

        /**
         * Output type.
         * @type {string || null}
         */
        this.OutputType = null;

        /**
         * Output description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Output protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Output destination address information list.
         * @type {Array.<OutputAddress> || null}
         */
        this.OutputAddressList = null;

        /**
         * Output region.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutputRegion = null;

        /**
         * SRT configuration information of output.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeOutputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * RTP configuration information of output.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeOutputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * RTMP configuration information of output.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeOutputRTMPSettings || null}
         */
        this.RTMPSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputId = 'OutputId' in params ? params.OutputId : null;
        this.OutputName = 'OutputName' in params ? params.OutputName : null;
        this.OutputType = 'OutputType' in params ? params.OutputType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.OutputAddressList) {
            this.OutputAddressList = new Array();
            for (let z in params.OutputAddressList) {
                let obj = new OutputAddress();
                obj.deserialize(params.OutputAddressList[z]);
                this.OutputAddressList.push(obj);
            }
        }
        this.OutputRegion = 'OutputRegion' in params ? params.OutputRegion : null;

        if (params.SRTSettings) {
            let obj = new DescribeOutputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new DescribeOutputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }

        if (params.RTMPSettings) {
            let obj = new DescribeOutputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }

    }
}

/**
 * Configuration information of the queried flow.
 * @class
 */
class DescribeFlow extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Flow name.
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * Flow status.
         * @type {string || null}
         */
        this.State = null;

        /**
         * Maximum bandwidth value.
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * Input group.
         * @type {Array.<DescribeInput> || null}
         */
        this.InputGroup = null;

        /**
         * Output group.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<DescribeOutput> || null}
         */
        this.OutputGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.State = 'State' in params ? params.State : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;

        if (params.InputGroup) {
            this.InputGroup = new Array();
            for (let z in params.InputGroup) {
                let obj = new DescribeInput();
                obj.deserialize(params.InputGroup[z]);
                this.InputGroup.push(obj);
            }
        }

        if (params.OutputGroup) {
            this.OutputGroup = new Array();
            for (let z in params.OutputGroup) {
                let obj = new DescribeOutput();
                obj.deserialize(params.OutputGroup[z]);
                this.OutputGroup.push(obj);
            }
        }

    }
}

/**
 * ModifyMediaConnectInput request structure.
 * @class
 */
class ModifyMediaConnectInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Information of the input to be modified.
         * @type {ModifyInput || null}
         */
        this.Input = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Input) {
            let obj = new ModifyInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

    }
}

/**
 * CreateMediaConnectOutput request structure.
 * @class
 */
class CreateMediaConnectOutputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Output configuration of flow.
         * @type {CreateOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Output) {
            let obj = new CreateOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * SRT configuration information of the created input.
 * @class
 */
class CreateInputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream ID, which can contain 0–512 letters, digits, and special symbols (.#!:&,=_-).
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Latency in ms. Default value: 0. Value range: [0, 3000].
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * Receipt latency in ms. Default value: 120. Value range: [0, 3000].
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * Peer latency in ms. Default value: 0. Value range: [0, 3000].
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * Peer timeout period in ms. Default value: 5000. Value range: [1000, 10000].
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * Decryption key, which is empty by default, indicating not to encrypt. Only ASCII codes can be filled. Length: [10, 79].
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * Key length. Default value: 0. Valid values: [0|16|24|32].
         * @type {number || null}
         */
        this.PbKeyLen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;

    }
}

/**
 * CreateMediaConnectOutput response structure.
 * @class
 */
class CreateMediaConnectOutputResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the created output.
         * @type {DescribeOutput || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeOutput();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMediaConnectOutput request structure.
 * @class
 */
class ModifyMediaConnectOutputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Configuration of the output to be modified.
         * @type {ModifyOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Output) {
            let obj = new ModifyOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ModifyMediaConnectFlow response structure.
 * @class
 */
class ModifyMediaConnectFlowResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMediaConnectFlow response structure.
 * @class
 */
class CreateMediaConnectFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the created flow.
         * @type {DescribeFlow || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeFlow();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMediaConnectFlow request structure.
 * @class
 */
class DescribeMediaConnectFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * RTMP configuration information of the queried output.
 * @class
 */
class DescribeOutputRTMPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Idle timeout period.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdleTimeout = null;

        /**
         * Chunk size.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ChunkSize = null;

        /**
         * Destination address information list of RTMP push.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RTMPAddressDestination> || null}
         */
        this.Destinations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;
        this.ChunkSize = 'ChunkSize' in params ? params.ChunkSize : null;

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new RTMPAddressDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }

    }
}

/**
 * RTP destination address of the created MediaConnect flow output.
 * @class
 */
class CreateOutputRTPSettingsDestinations extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push destination IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Push destination port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Configuration of the modified output.
 * @class
 */
class ModifyOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the output to be modified.
         * @type {string || null}
         */
        this.OutputId = null;

        /**
         * Output name.
         * @type {string || null}
         */
        this.OutputName = null;

        /**
         * Output description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Output push protocol. Valid values: SRT|RTMP.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Configuration of SRT push.
         * @type {CreateOutputSrtSettings || null}
         */
        this.SRTSettings = null;

        /**
         * Configuration of RTP push.
         * @type {CreateOutputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * Configuration of RTMP push.
         * @type {CreateOutputRTMPSettings || null}
         */
        this.RTMPSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputId = 'OutputId' in params ? params.OutputId : null;
        this.OutputName = 'OutputName' in params ? params.OutputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.SRTSettings) {
            let obj = new CreateOutputSrtSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateOutputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }

        if (params.RTMPSettings) {
            let obj = new CreateOutputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }

    }
}

/**
 * Configuration information of the created input.
 * @class
 */
class CreateInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input name, which can contain 1–32 letters, digits, and underscores.
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * Input protocol. Valid values: [SRT|RTP].
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Input description. Length: [0, 255].
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Allowlist of input IPs in CIDR format.
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * SRT configuration information of input.
         * @type {CreateInputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * RTP configuration information of input.
         * @type {CreateInputRTPSettings || null}
         */
        this.RTPSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.SRTSettings) {
            let obj = new CreateInputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }

    }
}

/**
 * RTMP configuration of the created MediaConnect flow output.
 * @class
 */
class CreateOutputRTMPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push destination address. 1–2 addresses can be entered.
         * @type {Array.<CreateOutputRtmpSettingsDestinations> || null}
         */
        this.Destinations = null;

        /**
         * RTMP chunk size. Value range: [4096, 40960].
         * @type {number || null}
         */
        this.ChunkSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new CreateOutputRtmpSettingsDestinations();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.ChunkSize = 'ChunkSize' in params ? params.ChunkSize : null;

    }
}

/**
 * Configuration information of the queried input.
 * @class
 */
class DescribeInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input ID.
         * @type {string || null}
         */
        this.InputId = null;

        /**
         * Input name.
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * Input description.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Input protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Input address list.
         * @type {Array.<InputAddress> || null}
         */
        this.InputAddressList = null;

        /**
         * Input IP allowlist.
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * SRT configuration information of input.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeInputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * RTP configuration information of input.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DescribeInputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * Input region.
         * @type {string || null}
         */
        this.InputRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputId = 'InputId' in params ? params.InputId : null;
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.InputAddressList) {
            this.InputAddressList = new Array();
            for (let z in params.InputAddressList) {
                let obj = new InputAddress();
                obj.deserialize(params.InputAddressList[z]);
                this.InputAddressList.push(obj);
            }
        }
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.SRTSettings) {
            let obj = new DescribeInputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new DescribeInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }
        this.InputRegion = 'InputRegion' in params ? params.InputRegion : null;

    }
}

/**
 * RTMP destination address of the created MediaConnect flow output.
 * @class
 */
class CreateOutputRtmpSettingsDestinations extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push URL in the format of `rtmp://domain/live`.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Push `StreamKey` in the format of `stream?key=value`.
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * DescribeMediaConnectFlow response structure.
 * @class
 */
class DescribeMediaConnectFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration information of flow.
         * @type {DescribeFlow || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeFlow();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SRT configuration information of the queried output.
 * @class
 */
class DescribeOutputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push destination address information list.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SRTAddressDestination> || null}
         */
        this.Destinations = null;

        /**
         * Stream ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Latency.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * Receipt latency.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * Peer latency.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * Peer idle timeout period.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * Encryption key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * Encryption key length.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PbKeyLen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new SRTAddressDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;

    }
}

/**
 * ModifyMediaConnectFlow request structure.
 * @class
 */
class ModifyMediaConnectFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID.
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Name of the flow to be modified.
         * @type {string || null}
         */
        this.FlowName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;

    }
}

/**
 * StopMediaConnectFlow response structure.
 * @class
 */
class StopMediaConnectFlowResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Destination address information of RTMP push.
 * @class
 */
class RTMPAddressDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination URL of RTMP push in the format of 'rtmp://domain/live'.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Destination `StreamKey` of RTMP push in the format of 'streamid?key=value'.
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * StartMediaConnectFlow response structure.
 * @class
 */
class StartMediaConnectFlowResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMediaConnectOutput response structure.
 * @class
 */
class ModifyMediaConnectOutputResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output configuration after modification.
         * @type {DescribeOutput || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeOutput();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RTP configuration information of the queried output.
 * @class
 */
class DescribeOutputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination address information list of RTP push.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RTPAddressDestination> || null}
         */
        this.Destinations = null;

        /**
         * Whether it is FEC.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * Idle timeout period.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new RTPAddressDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * SRT configuration information of the queried input.
 * @class
 */
class DescribeInputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream ID.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Latency.
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * Receipt latency.
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * Peer latency.
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * Peer idle timeout period.
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * Decryption key.
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * Key length.
         * @type {number || null}
         */
        this.PbKeyLen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;

    }
}

/**
 * RTP configuration of the created MediaConnect flow output.
 * @class
 */
class CreateOutputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push destination address. 1–2 addresses can be entered.
         * @type {CreateOutputRTPSettingsDestinations || null}
         */
        this.Destinations = null;

        /**
         * Only `none` can be entered.
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * Idle timeout period.
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            let obj = new CreateOutputRTPSettingsDestinations();
            obj.deserialize(params.Destinations)
            this.Destinations = obj;
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * DescribeMediaConnectFlows request structure.
 * @class
 */
class DescribeMediaConnectFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of current pages. Default value: 1.
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Default value: 10.
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
 * Input address information.
 * @class
 */
class InputAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input address IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Input address port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Parameters of the modified input.
 * @class
 */
class ModifyInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input ID.
         * @type {string || null}
         */
        this.InputId = null;

        /**
         * Input name.
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * Input description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Allowed push IP in CIDR format.
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * SRT configuration information.
         * @type {CreateInputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * RTP configuration information.
         * @type {CreateInputRTPSettings || null}
         */
        this.RTPSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputId = 'InputId' in params ? params.InputId : null;
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.SRTSettings) {
            let obj = new CreateInputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }

    }
}

/**
 * SRT configuration of the created MediaConnect flow output.
 * @class
 */
class CreateOutputSrtSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push destination address. Please configure 1–2 addresses.
         * @type {Array.<CreateOutputSrtSettingsDestinations> || null}
         */
        this.Destinations = null;

        /**
         * Stream ID of SRT push.
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Total latency of SRT push.
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * Receipt latency of SRT push.
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * Peer latency of SRT push.
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * Peer idle timeout period of SRT push.
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * Encryption key of SRT push.
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * Key length of SRT push.
         * @type {number || null}
         */
        this.PbKeyLen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new CreateOutputSrtSettingsDestinations();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;

    }
}

/**
 * RTP configuration information of the created input.
 * @class
 */
class CreateInputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default value: none. Valid values: ['none'].
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * Idle timeout period in ms. Default value: 5000. Value range: [1000, 10000].
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * Push destination address information.
 * @class
 */
class SRTAddressDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * Destination address IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Destination address port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * ModifyMediaConnectInput response structure.
 * @class
 */
class ModifyMediaConnectInputResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input information after modification.
         * @type {DescribeInput || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeInput();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Destination address information of RTP push.
 * @class
 */
class RTPAddressDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * Push destination address IP.
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Push destination address port.
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * Configuration information of the created output.
 * @class
 */
class CreateOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Output name.
         * @type {string || null}
         */
        this.OutputName = null;

        /**
         * Output description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Output protocol.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Output region.
         * @type {string || null}
         */
        this.OutputRegion = null;

        /**
         * SRT configuration of output.
         * @type {CreateOutputSrtSettings || null}
         */
        this.SRTSettings = null;

        /**
         * RTP configuration of output.
         * @type {CreateInputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * RTMP configuration of output.
         * @type {CreateOutputRTMPSettings || null}
         */
        this.RTMPSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputName = 'OutputName' in params ? params.OutputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.OutputRegion = 'OutputRegion' in params ? params.OutputRegion : null;

        if (params.SRTSettings) {
            let obj = new CreateOutputSrtSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }

        if (params.RTMPSettings) {
            let obj = new CreateOutputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }

    }
}

module.exports = {
    CreateMediaConnectFlowRequest: CreateMediaConnectFlowRequest,
    DeleteMediaConnectFlowResponse: DeleteMediaConnectFlowResponse,
    OutputAddress: OutputAddress,
    DescribeInputRTPSettings: DescribeInputRTPSettings,
    DeleteMediaConnectFlowRequest: DeleteMediaConnectFlowRequest,
    StopMediaConnectFlowRequest: StopMediaConnectFlowRequest,
    CreateOutputSrtSettingsDestinations: CreateOutputSrtSettingsDestinations,
    DescribeMediaConnectFlowsResponse: DescribeMediaConnectFlowsResponse,
    StartMediaConnectFlowRequest: StartMediaConnectFlowRequest,
    DeleteMediaConnectOutputRequest: DeleteMediaConnectOutputRequest,
    DeleteMediaConnectOutputResponse: DeleteMediaConnectOutputResponse,
    DescribeOutput: DescribeOutput,
    DescribeFlow: DescribeFlow,
    ModifyMediaConnectInputRequest: ModifyMediaConnectInputRequest,
    CreateMediaConnectOutputRequest: CreateMediaConnectOutputRequest,
    CreateInputSRTSettings: CreateInputSRTSettings,
    CreateMediaConnectOutputResponse: CreateMediaConnectOutputResponse,
    ModifyMediaConnectOutputRequest: ModifyMediaConnectOutputRequest,
    ModifyMediaConnectFlowResponse: ModifyMediaConnectFlowResponse,
    CreateMediaConnectFlowResponse: CreateMediaConnectFlowResponse,
    DescribeMediaConnectFlowRequest: DescribeMediaConnectFlowRequest,
    DescribeOutputRTMPSettings: DescribeOutputRTMPSettings,
    CreateOutputRTPSettingsDestinations: CreateOutputRTPSettingsDestinations,
    ModifyOutput: ModifyOutput,
    CreateInput: CreateInput,
    CreateOutputRTMPSettings: CreateOutputRTMPSettings,
    DescribeInput: DescribeInput,
    CreateOutputRtmpSettingsDestinations: CreateOutputRtmpSettingsDestinations,
    DescribeMediaConnectFlowResponse: DescribeMediaConnectFlowResponse,
    DescribeOutputSRTSettings: DescribeOutputSRTSettings,
    ModifyMediaConnectFlowRequest: ModifyMediaConnectFlowRequest,
    StopMediaConnectFlowResponse: StopMediaConnectFlowResponse,
    RTMPAddressDestination: RTMPAddressDestination,
    StartMediaConnectFlowResponse: StartMediaConnectFlowResponse,
    ModifyMediaConnectOutputResponse: ModifyMediaConnectOutputResponse,
    DescribeOutputRTPSettings: DescribeOutputRTPSettings,
    DescribeInputSRTSettings: DescribeInputSRTSettings,
    CreateOutputRTPSettings: CreateOutputRTPSettings,
    DescribeMediaConnectFlowsRequest: DescribeMediaConnectFlowsRequest,
    InputAddress: InputAddress,
    ModifyInput: ModifyInput,
    CreateOutputSrtSettings: CreateOutputSrtSettings,
    CreateInputRTPSettings: CreateInputRTPSettings,
    SRTAddressDestination: SRTAddressDestination,
    ModifyMediaConnectInputResponse: ModifyMediaConnectInputResponse,
    RTPAddressDestination: RTPAddressDestination,
    CreateOutput: CreateOutput,

}
