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
 * Risk label
 * @class
 */
class RiskLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the label</p>
         * @type {string || null}
         */
        this.Id = null;

        /**
         * <p>The reason of the label</p>
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * The basic information of the IP environment
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The geographical location of the IP address</p>
         * @type {IPLocation || null}
         */
        this.Location = null;

        /**
         * <p>The basic IP network information</p>
         * @type {IPNetwork || null}
         */
        this.Network = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Location) {
            let obj = new IPLocation();
            obj.deserialize(params.Location)
            this.Location = obj;
        }

        if (params.Network) {
            let obj = new IPNetwork();
            obj.deserialize(params.Network)
            this.Network = obj;
        }

    }
}

/**
 * The results of AssessEnvironmentRisk
 * @class
 */
class AssessEnvironmentRiskRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The risk score information of the IP environment</p>
         * @type {DataScore || null}
         */
        this.Score = null;

        /**
         * <p>The basic information of the IP environment</p>
         * @type {Environment || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Score) {
            let obj = new DataScore();
            obj.deserialize(params.Score)
            this.Score = obj;
        }

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }

    }
}

/**
 * The geographical location of the IP address
 * @class
 */
class IPLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The country of the IP address</p>
         * @type {string || null}
         */
        this.Country = null;

        /**
         * <p>The region of the IP address</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>The city of the IP address</p>
         * @type {string || null}
         */
        this.City = null;

        /**
         * <p>The district of the IP address</p>
         * @type {string || null}
         */
        this.District = null;

        /**
         * <p>The longitude of the IP address</p>
         * @type {string || null}
         */
        this.Longitude = null;

        /**
         * <p>The latitude of the IP address</p>
         * @type {string || null}
         */
        this.Latitude = null;

        /**
         * <p>The timezone of the IP address</p>
         * @type {string || null}
         */
        this.Timezone = null;

        /**
         * <p>The zip code of the IP address</p>
         * @type {string || null}
         */
        this.ZipCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Country = 'Country' in params ? params.Country : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.City = 'City' in params ? params.City : null;
        this.District = 'District' in params ? params.District : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.Timezone = 'Timezone' in params ? params.Timezone : null;
        this.ZipCode = 'ZipCode' in params ? params.ZipCode : null;

    }
}

/**
 * Risk score information
 * @class
 */
class DataScore extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Risk level</p>
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * <p>Risk label</p>
         * @type {Array.<RiskLabel> || null}
         */
        this.RiskLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

        if (params.RiskLabels) {
            this.RiskLabels = new Array();
            for (let z in params.RiskLabels) {
                let obj = new RiskLabel();
                obj.deserialize(params.RiskLabels[z]);
                this.RiskLabels.push(obj);
            }
        }

    }
}

/**
 * The results of AssessDeviceRiskPro
 * @class
 */
class AssessDeviceRiskRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The risk score information of the device</p>
         * @type {DataScore || null}
         */
        this.Score = null;

        /**
         * <p>The basic information of the device</p>
         * @type {Device || null}
         */
        this.Device = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Score) {
            let obj = new DataScore();
            obj.deserialize(params.Score)
            this.Score = obj;
        }

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }

    }
}

/**
 * AssessEnvironmentRisk response structure.
 * @class
 */
class AssessEnvironmentRiskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The results of AssessEnvironmentRisk</p>
         * @type {AssessEnvironmentRiskRsp || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new AssessEnvironmentRiskRsp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssessDeviceRiskPremiumPro response structure.
 * @class
 */
class AssessDeviceRiskPremiumProResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The results of AssessDeviceRiskPremiumPro</p>
         * @type {AssessDeviceRiskPremiumRsp || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new AssessDeviceRiskPremiumRsp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssessDeviceRiskPro request structure.
 * @class
 */
class AssessDeviceRiskProRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Device fingerprint token, obtained after integration of the device fingerprint SDK into your website or application</p>
         * @type {string || null}
         */
        this.DeviceToken = null;

        /**
         * <p>User client IP address(IPv4 or IPv6)</p>
         * @type {string || null}
         */
        this.UserIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;

    }
}

/**
 * AssessDeviceRiskPremiumPro request structure.
 * @class
 */
class AssessDeviceRiskPremiumProRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Device fingerprint token, obtained after integration of the device fingerprint SDK into your website or application</p>
         * @type {string || null}
         */
        this.DeviceToken = null;

        /**
         * <p>User client IP address(IPv4 or IPv6)</p>
         * @type {string || null}
         */
        this.UserIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;

    }
}

/**
 * AssessDeviceRiskPro response structure.
 * @class
 */
class AssessDeviceRiskProResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The results of AssessDeviceRiskPro</p>
         * @type {AssessDeviceRiskRsp || null}
         */
        this.Data = null;

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

        if (params.Data) {
            let obj = new AssessDeviceRiskRsp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The basic IP network information
 * @class
 */
class IPNetwork extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Internet service provider</p>
         * @type {string || null}
         */
        this.ISP = null;

        /**
         * <p>Autonomous system number</p>
         * @type {string || null}
         */
        this.ASN = null;

        /**
         * <p>IP registration organization name</p>
         * @type {string || null}
         */
        this.Organization = null;

        /**
         * <p>Whether it is a reserved IP address</p>
         * @type {boolean || null}
         */
        this.IsReserved = null;

        /**
         * <p>Whether it is a gateway IP address</p>
         * @type {boolean || null}
         */
        this.IsGateway = null;

        /**
         * <p>Whether it belongs to an anycast network</p>
         * @type {boolean || null}
         */
        this.IsAnycast = null;

        /**
         * <p>Whether it is from a mobile network</p>
         * @type {boolean || null}
         */
        this.IsMobile = null;

        /**
         * <p>Whether it is a dynamic IP address</p>
         * @type {boolean || null}
         */
        this.IsDynamic = null;

        /**
         * <p>Whether it is a network egress</p>
         * @type {boolean || null}
         */
        this.IsEgress = null;

        /**
         * <p>Whether it is used for domain name resolution</p>
         * @type {boolean || null}
         */
        this.IsDNS = null;

        /**
         * <p>Whether it is an educational institution</p>
         * @type {boolean || null}
         */
        this.IsEducation = null;

        /**
         * <p>Whether it is an organization</p>
         * @type {boolean || null}
         */
        this.IsInstitution = null;

        /**
         * <p>Whether it is an enterprise dedicated line</p>
         * @type {boolean || null}
         */
        this.IsCompany = null;

        /**
         * <p>Whether it is a residence broadband connection</p>
         * @type {boolean || null}
         */
        this.IsResidence = null;

        /**
         * <p>Whether it is cloud service</p>
         * @type {boolean || null}
         */
        this.IsCloudService = null;

        /**
         * <p>Whether it is infrastructure</p>
         * @type {boolean || null}
         */
        this.IsInfrastructure = null;

        /**
         * <p>Whether it is an mail exchange service</p>
         * @type {boolean || null}
         */
        this.IsMXServer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ISP = 'ISP' in params ? params.ISP : null;
        this.ASN = 'ASN' in params ? params.ASN : null;
        this.Organization = 'Organization' in params ? params.Organization : null;
        this.IsReserved = 'IsReserved' in params ? params.IsReserved : null;
        this.IsGateway = 'IsGateway' in params ? params.IsGateway : null;
        this.IsAnycast = 'IsAnycast' in params ? params.IsAnycast : null;
        this.IsMobile = 'IsMobile' in params ? params.IsMobile : null;
        this.IsDynamic = 'IsDynamic' in params ? params.IsDynamic : null;
        this.IsEgress = 'IsEgress' in params ? params.IsEgress : null;
        this.IsDNS = 'IsDNS' in params ? params.IsDNS : null;
        this.IsEducation = 'IsEducation' in params ? params.IsEducation : null;
        this.IsInstitution = 'IsInstitution' in params ? params.IsInstitution : null;
        this.IsCompany = 'IsCompany' in params ? params.IsCompany : null;
        this.IsResidence = 'IsResidence' in params ? params.IsResidence : null;
        this.IsCloudService = 'IsCloudService' in params ? params.IsCloudService : null;
        this.IsInfrastructure = 'IsInfrastructure' in params ? params.IsInfrastructure : null;
        this.IsMXServer = 'IsMXServer' in params ? params.IsMXServer : null;

    }
}

/**
 * The results of AssessDeviceRiskPremiumPro
 * @class
 */
class AssessDeviceRiskPremiumRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Decision information</p>
         * @type {Decision || null}
         */
        this.Decision = null;

        /**
         * <p>The risk score information of the device</p>
         * @type {DataScore || null}
         */
        this.Score = null;

        /**
         * <p>The basic information of the device</p>
         * @type {Device || null}
         */
        this.Device = null;

        /**
         * <p>Basic IP environment information</p>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Environment || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Decision) {
            let obj = new Decision();
            obj.deserialize(params.Decision)
            this.Decision = obj;
        }

        if (params.Score) {
            let obj = new DataScore();
            obj.deserialize(params.Score)
            this.Score = obj;
        }

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }

    }
}

/**
 * AssessEnvironmentRisk request structure.
 * @class
 */
class AssessEnvironmentRiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>User client IP address(IPv4 or IPv6)</p>
         * @type {string || null}
         */
        this.UserIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserIp = 'UserIp' in params ? params.UserIp : null;

    }
}

/**
 * The basic infomation of the device
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The unique id of device returned by RCE</p>
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * <p>The version of the application</p>
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * <p>Device brand</p>
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * <p>Client IP address</p>
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * <p>Device model</p>
         * @type {string || null}
         */
        this.Model = null;

        /**
         * <p>Network type of the device</p>
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * <p>The package name of the application</p>
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * <p>Device platform</p><p>Enumeration value:</p><ul><li>2: Android</li><li>3: IOS</li><li>4: H5</li><li>5: WeChat Mini Program</li></ul>
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * <p>Device system version</p>
         * @type {string || null}
         */
        this.SystemVersion = null;

        /**
         * <p>The build version of SDK</p>
         * @type {string || null}
         */
        this.SdkBuildVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.SystemVersion = 'SystemVersion' in params ? params.SystemVersion : null;
        this.SdkBuildVersion = 'SdkBuildVersion' in params ? params.SdkBuildVersion : null;

    }
}

/**
 * Decision information
 * @class
 */
class Decision extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Decision result</p><ul><li>pass: Pass</li><li>review: Review</li><li>reject: Reject</li></ul>
         * @type {string || null}
         */
        this.DecisionResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DecisionResult = 'DecisionResult' in params ? params.DecisionResult : null;

    }
}

module.exports = {
    RiskLabel: RiskLabel,
    Environment: Environment,
    AssessEnvironmentRiskRsp: AssessEnvironmentRiskRsp,
    IPLocation: IPLocation,
    DataScore: DataScore,
    AssessDeviceRiskRsp: AssessDeviceRiskRsp,
    AssessEnvironmentRiskResponse: AssessEnvironmentRiskResponse,
    AssessDeviceRiskPremiumProResponse: AssessDeviceRiskPremiumProResponse,
    AssessDeviceRiskProRequest: AssessDeviceRiskProRequest,
    AssessDeviceRiskPremiumProRequest: AssessDeviceRiskPremiumProRequest,
    AssessDeviceRiskProResponse: AssessDeviceRiskProResponse,
    IPNetwork: IPNetwork,
    AssessDeviceRiskPremiumRsp: AssessDeviceRiskPremiumRsp,
    AssessEnvironmentRiskRequest: AssessEnvironmentRiskRequest,
    Device: Device,
    Decision: Decision,

}
