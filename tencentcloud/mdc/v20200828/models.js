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
 * ModifyStreamLinkFlow request structure.
 * @class
 */
class ModifyStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Name of the flow to modify
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
 * DeleteStreamLinkFlow request structure.
 * @class
 */
class DeleteStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
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
 * CreateStreamLinkFlow request structure.
 * @class
 */
class CreateStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow name
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * Maximum bandwidth in bps. Valid values: `10000000`, `20000000`, `50000000`
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * Flow input group
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
         * Flow status. Valid values: `IDLE`, `RUNNING`
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
 * DeleteStreamLinkOutput request structure.
 * @class
 */
class DeleteStreamLinkOutputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * Output ID
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
 * SRT configuration information of the created input.
 * @class
 */
class CreateInputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Stream ID, which can contain 0 to 512 letters, digits, and special characters (.#!:&,=_-).
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * Latency in ms. Default value: 0. Value range: [0, 3000].
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * Receive latency in ms. Default value: 120. Value range: [0, 3000].
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
         * Key length. Default value: 0. Valid values: 0, 16, 24, 32.
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
 * RTMP configuration information of the queried input
 * @class
 */
class DescribeInputRTMPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Path for RTMP stream pushing
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * StreamKey for RTMP stream pushing
Format of an RTMP stream pushing URL: rtmp://IP address:1935/AppName/StreamKey
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
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * ModifyStreamLinkFlow response structure.
 * @class
 */
class ModifyStreamLinkFlowResponse extends  AbstractModel {
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
 * StartStreamLinkFlow request structure.
 * @class
 */
class StartStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
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
 * StartStreamLinkFlow response structure.
 * @class
 */
class StartStreamLinkFlowResponse extends  AbstractModel {
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
 * DescribeStreamLinkFlow response structure.
 * @class
 */
class DescribeStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration information of a flow
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
 * StopStreamLinkFlow response structure.
 * @class
 */
class StopStreamLinkFlowResponse extends  AbstractModel {
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
 * StopStreamLinkFlow request structure.
 * @class
 */
class StopStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
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
 * Configuration information of the created input.
 * @class
 */
class CreateInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input name, which can contain 1 to 32 letters, digits, and underscores.
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * Input protocol. Valid values: `SRT`, `RTP`, `RTMP`
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

        /**
         * Input failover. Valid values: `OPEN`, `CLOSE` (default)
         * @type {string || null}
         */
        this.FailOver = null;

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
        this.FailOver = 'FailOver' in params ? params.FailOver : null;

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

        /**
         * RTMP configuration information of an input
         * @type {DescribeInputRTMPSettings || null}
         */
        this.RTMPSettings = null;

        /**
         * Input failover
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.FailOver = null;

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

        if (params.RTMPSettings) {
            let obj = new DescribeInputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }
        this.FailOver = 'FailOver' in params ? params.FailOver : null;

    }
}

/**
 * DescribeStreamLinkFlow request structure.
 * @class
 */
class DescribeStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flow ID
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
         * Receive latency.
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
 * DeleteStreamLinkOutput response structure.
 * @class
 */
class DeleteStreamLinkOutputResponse extends  AbstractModel {
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
 * DescribeStreamLinkFlows response structure.
 * @class
 */
class DescribeStreamLinkFlowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of the configuration information of the flows
         * @type {Array.<DescribeFlow> || null}
         */
        this.Infos = null;

        /**
         * Number of the current page
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
 * DeleteStreamLinkFlow response structure.
 * @class
 */
class DeleteStreamLinkFlowResponse extends  AbstractModel {
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
         * Receive latency.
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
 * CreateStreamLinkFlow response structure.
 * @class
 */
class CreateStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of the created flow
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
 * DescribeStreamLinkFlows request structure.
 * @class
 */
class DescribeStreamLinkFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of the current page. Default value: `1`
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * Number of entries per page. Default value: `10`
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

module.exports = {
    DescribeOutputRTMPSettings: DescribeOutputRTMPSettings,
    OutputAddress: OutputAddress,
    DescribeInputRTPSettings: DescribeInputRTPSettings,
    ModifyStreamLinkFlowRequest: ModifyStreamLinkFlowRequest,
    DeleteStreamLinkFlowRequest: DeleteStreamLinkFlowRequest,
    CreateStreamLinkFlowRequest: CreateStreamLinkFlowRequest,
    DescribeOutput: DescribeOutput,
    DescribeFlow: DescribeFlow,
    DeleteStreamLinkOutputRequest: DeleteStreamLinkOutputRequest,
    CreateInputSRTSettings: CreateInputSRTSettings,
    DescribeInputRTMPSettings: DescribeInputRTMPSettings,
    ModifyStreamLinkFlowResponse: ModifyStreamLinkFlowResponse,
    StartStreamLinkFlowRequest: StartStreamLinkFlowRequest,
    StartStreamLinkFlowResponse: StartStreamLinkFlowResponse,
    DescribeStreamLinkFlowResponse: DescribeStreamLinkFlowResponse,
    StopStreamLinkFlowResponse: StopStreamLinkFlowResponse,
    InputAddress: InputAddress,
    StopStreamLinkFlowRequest: StopStreamLinkFlowRequest,
    CreateInput: CreateInput,
    DescribeInput: DescribeInput,
    DescribeStreamLinkFlowRequest: DescribeStreamLinkFlowRequest,
    DescribeOutputSRTSettings: DescribeOutputSRTSettings,
    DeleteStreamLinkOutputResponse: DeleteStreamLinkOutputResponse,
    DescribeStreamLinkFlowsResponse: DescribeStreamLinkFlowsResponse,
    RTMPAddressDestination: RTMPAddressDestination,
    DeleteStreamLinkFlowResponse: DeleteStreamLinkFlowResponse,
    DescribeOutputRTPSettings: DescribeOutputRTPSettings,
    DescribeInputSRTSettings: DescribeInputSRTSettings,
    CreateStreamLinkFlowResponse: CreateStreamLinkFlowResponse,
    CreateInputRTPSettings: CreateInputRTPSettings,
    SRTAddressDestination: SRTAddressDestination,
    DescribeStreamLinkFlowsRequest: DescribeStreamLinkFlowsRequest,
    RTPAddressDestination: RTPAddressDestination,

}
