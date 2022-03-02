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
 * DescribeCdnDomainLogs response structure.
 * @class
 */
class DescribeCdnDomainLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Download link of the log package
         * @type {Array.<DomainLog> || null}
         */
        this.DomainLogs = null;

        /**
         * Total number of entries obtained
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.DomainLogs) {
            this.DomainLogs = new Array();
            for (let z in params.DomainLogs) {
                let obj = new DomainLog();
                obj.deserialize(params.DomainLogs[z]);
                this.DomainLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Timestamp hotlink protection advanced configuration (allowlist feature)
 * @class
 */
class AdvancedAuthentication extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hotlink protection configuration switch (which can be on or off). If it is enabled, only one mode can and must be configured, while other modes are null.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Timestamp hotlink protection advanced configuration mode A
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvancedAuthenticationTypeA || null}
         */
        this.TypeA = null;

        /**
         * Timestamp hotlink protection advanced configuration mode B
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvancedAuthenticationTypeB || null}
         */
        this.TypeB = null;

        /**
         * Timestamp hotlink protection advanced configuration mode C
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvancedAuthenticationTypeC || null}
         */
        this.TypeC = null;

        /**
         * Timestamp hotlink protection advanced configuration mode D
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvancedAuthenticationTypeD || null}
         */
        this.TypeD = null;

        /**
         * Timestamp hotlink protection advanced configuration mode E
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvancedAuthenticationTypeE || null}
         */
        this.TypeE = null;

        /**
         * Timestamp hotlink protection advanced configuration mode F
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvancedAuthenticationTypeF || null}
         */
        this.TypeF = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.TypeA) {
            let obj = new AdvancedAuthenticationTypeA();
            obj.deserialize(params.TypeA)
            this.TypeA = obj;
        }

        if (params.TypeB) {
            let obj = new AdvancedAuthenticationTypeB();
            obj.deserialize(params.TypeB)
            this.TypeB = obj;
        }

        if (params.TypeC) {
            let obj = new AdvancedAuthenticationTypeC();
            obj.deserialize(params.TypeC)
            this.TypeC = obj;
        }

        if (params.TypeD) {
            let obj = new AdvancedAuthenticationTypeD();
            obj.deserialize(params.TypeD)
            this.TypeD = obj;
        }

        if (params.TypeE) {
            let obj = new AdvancedAuthenticationTypeE();
            obj.deserialize(params.TypeE)
            this.TypeE = obj;
        }

        if (params.TypeF) {
            let obj = new AdvancedAuthenticationTypeF();
            obj.deserialize(params.TypeF)
            this.TypeF = obj;
        }

    }
}

/**
 * Custom HTTPS forwarding configuration
 * @class
 */
class AdvanceHttps extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom TLS data switch
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CustomTlsStatus = null;

        /**
         * Specifies the TLS version. Valid values: `TLSv1`, `TLSV1.1`, `TLSV1.2`, and `TLSv1.3`. Only consecutive versions can be enabled at the same time.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TlsVersion = null;

        /**
         * Custom encryption suite
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cipher = null;

        /**
         * Origin authentication type
`off`: disable authentication
`oneWay`: authenticate the origin 
`twoWay`: two-way authentication
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyOriginType = null;

        /**
         * Information of the origin-pull certificate
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ServerCert || null}
         */
        this.CertInfo = null;

        /**
         * Information of the origin server certificate
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ClientCert || null}
         */
        this.OriginCertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomTlsStatus = 'CustomTlsStatus' in params ? params.CustomTlsStatus : null;
        this.TlsVersion = 'TlsVersion' in params ? params.TlsVersion : null;
        this.Cipher = 'Cipher' in params ? params.Cipher : null;
        this.VerifyOriginType = 'VerifyOriginType' in params ? params.VerifyOriginType : null;

        if (params.CertInfo) {
            let obj = new ServerCert();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }

        if (params.OriginCertInfo) {
            let obj = new ClientCert();
            obj.deserialize(params.OriginCertInfo)
            this.OriginCertInfo = obj;
        }

    }
}

/**
 * Whether to forward to the origin server for verification
 * @class
 */
class Revalidate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to always forward to the origin server for verification. Valid values: on, off
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Forwards to the origin server for verification only for specific request path
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * This API is used to query an object and its access details
 * @class
 */
class ResourceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name, which is classified as follows based on different query filters:
A single domain name: queries domain name details by a domain name. The details of the domain name will be displayed when the passed parameter `detail` is `true` (the `detail` parameter defaults to `false`).
Multiple domain names: queries domain name details by multiple domain names. The aggregated details of the domain names will be displayed.
Project ID: queries domain name details by a project ID. The aggregated details of the domain names of the project will be displayed.
`all`: account-level data, which is aggregated details of all domain names of an account.
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Data details of a resource
         * @type {Array.<CdnData> || null}
         */
        this.CdnData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.CdnData) {
            this.CdnData = new Array();
            for (let z in params.CdnData) {
                let obj = new CdnData();
                obj.deserialize(params.CdnData[z]);
                this.CdnData.push(obj);
            }
        }

    }
}

/**
 * Details of the blocked URLs
 * @class
 */
class UrlRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status (disable: blocked; enable: unblocked)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Corresponding URL
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealUrl = null;

        /**
         * Creation time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RealUrl = 'RealUrl' in params ? params.RealUrl : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribePushQuota response structure.
 * @class
 */
class DescribePushQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL prefetch usage and quota.
         * @type {Array.<Quota> || null}
         */
        this.UrlPush = null;

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

        if (params.UrlPush) {
            this.UrlPush = new Array();
            for (let z in params.UrlPush) {
                let obj = new Quota();
                obj.deserialize(params.UrlPush[z]);
                this.UrlPush.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePurgeQuota response structure.
 * @class
 */
class DescribePurgeQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL purge usage and quota.
         * @type {Array.<Quota> || null}
         */
        this.UrlPurge = null;

        /**
         * Directory purge usage and quota.
         * @type {Array.<Quota> || null}
         */
        this.PathPurge = null;

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

        if (params.UrlPurge) {
            this.UrlPurge = new Array();
            for (let z in params.UrlPurge) {
                let obj = new Quota();
                obj.deserialize(params.UrlPurge[z]);
                this.UrlPurge.push(obj);
            }
        }

        if (params.PathPurge) {
            this.PathPurge = new Array();
            for (let z in params.PathPurge) {
                let obj = new Quota();
                obj.deserialize(params.PathPurge[z]);
                this.PathPurge.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SCDN layer-7 rule configuration for CC frequency limiting
 * @class
 */
class ScdnSevenLayerRules extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether values are case sensitive
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * Rule types:
`protocol`: protocol. Valid values: `HTTP` and `HTTPS`.
`method`: request method. Valid values: `HEAD`, `GET`, `POST`, `PUT`, `OPTIONS`, `TRACE`, `DELETE`, `PATCH` and `CONNECT`.
`all`: domain name. The matching content is `*` and cannot be edited.
`ip`: IP in CIDR format.
`directory`: path starting with a slash (/). You can specify a directory or specific path using up to 128 characters.
`index`: default homepage, which is specified by `/;/index.html` and cannot be edited.
`path`: full path of the file, such as `/acb/test.png`. Wildcard is supported, such as `/abc/*.jpg`.
`file`: file extension, such as `jpg`, `png` and `css`.
`param`: request parameter. The value can contain up to 512 characters.
`referer`: Referer. The value can contain up to 512 characters.
`cookie`: Cookie. The value can contain up to 512 characters.
`user-agent`: User-Agent. The value can contain up to 512 characters.
`head`: custom header. The value can contain up to 512 characters. If the matching content is blank or does not exist, enter the matching parameter directly.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Logical operator, which connects the relation between RuleType and RuleValue. Valid values:
`exclude`: the rule value is not contained. 
`include`: the rule value is contained. 
`notequal`: the rule value is not equal to the specified rule type. 
`equal`: the rule value is equal to the specified rule type. 
`matching`: the rule value matches with the prefix of the specified rule type.
`null`: the rule value is empty or does not exist.
         * @type {string || null}
         */
        this.LogicOperator = null;

        /**
         * Rule value
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RuleValue = null;

        /**
         * Matched parameter. Only request parameters, Cookie, and custom request headers have a value.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.LogicOperator = 'LogicOperator' in params ? params.LogicOperator : null;
        this.RuleValue = 'RuleValue' in params ? params.RuleValue : null;
        this.RuleParam = 'RuleParam' in params ? params.RuleParam : null;

    }
}

/**
 * Timestamp hotlink protection configuration
 * @class
 */
class Authentication extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hotlink protection configuration switch
on: enabled
off: disabled
When this is enabled, one mode needs to be configured. Other modes need to be set to null.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Timestamp hotlink protection mode A configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AuthenticationTypeA || null}
         */
        this.TypeA = null;

        /**
         * Timestamp hotlink protection mode B configuration (mode B is being upgraded and is currently not supported)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AuthenticationTypeB || null}
         */
        this.TypeB = null;

        /**
         * Timestamp hotlink protection mode C configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AuthenticationTypeC || null}
         */
        this.TypeC = null;

        /**
         * Timestamp hotlink protection mode D configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AuthenticationTypeD || null}
         */
        this.TypeD = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.TypeA) {
            let obj = new AuthenticationTypeA();
            obj.deserialize(params.TypeA)
            this.TypeA = obj;
        }

        if (params.TypeB) {
            let obj = new AuthenticationTypeB();
            obj.deserialize(params.TypeB)
            this.TypeB = obj;
        }

        if (params.TypeC) {
            let obj = new AuthenticationTypeC();
            obj.deserialize(params.TypeC)
            this.TypeC = obj;
        }

        if (params.TypeD) {
            let obj = new AuthenticationTypeD();
            obj.deserialize(params.TypeD)
            this.TypeD = obj;
        }

    }
}

/**
 * `ImageOptimization` configuration
 * @class
 */
class ImageOptimization extends  AbstractModel {
    constructor(){
        super();

        /**
         * `WebpAdapter` configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {WebpAdapter || null}
         */
        this.WebpAdapter = null;

        /**
         * `TpgAdapter` configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {TpgAdapter || null}
         */
        this.TpgAdapter = null;

        /**
         * `GuetzliAdapter` configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {GuetzliAdapter || null}
         */
        this.GuetzliAdapter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WebpAdapter) {
            let obj = new WebpAdapter();
            obj.deserialize(params.WebpAdapter)
            this.WebpAdapter = obj;
        }

        if (params.TpgAdapter) {
            let obj = new TpgAdapter();
            obj.deserialize(params.TpgAdapter)
            this.TpgAdapter = obj;
        }

        if (params.GuetzliAdapter) {
            let obj = new GuetzliAdapter();
            obj.deserialize(params.GuetzliAdapter)
            this.GuetzliAdapter = obj;
        }

    }
}

/**
 * Domain name HTTPS acceleration configuration. This is disabled by default.
 * @class
 */
class Https extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTPS configuration switch
on: enabled
off: disabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * HTTP2 configuration switch
on: enabled
off: disabled
Enabling HTTPS acceleration for the first time will enable HTTP2 configuration by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Http2 = null;

        /**
         * OCSP configuration switch
on: enabled
off: disabled
This is disabled by default
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OcspStapling = null;

        /**
         * Client certificate authentication feature
on: enabled
off: disabled
This is disabled by default. The client certificate information is needed when enabled. This is still in beta and not generally available yet.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VerifyClient = null;

        /**
         * Server certificate configuration information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ServerCert || null}
         */
        this.CertInfo = null;

        /**
         * Client certificate configuration information
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ClientCert || null}
         */
        this.ClientCertInfo = null;

        /**
         * Spdy configuration switch
on: enabled
off: disabled
This is disabled by default
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Spdy = null;

        /**
         * HTTPS certificate deployment status
closed: already closed
deploying: in deployment
deployed: successfully deployed
failed: deployment failed
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SslStatus = null;

        /**
         * HSTS configuration
         * @type {Hsts || null}
         */
        this.Hsts = null;

        /**
         * TLS version settings, which only support certain advanced domain names. Valid values: `TLSv1`, `TLSV1.1`, `TLSV1.2`, and `TLSv1.3`. Only consecutive versions can be enabled at the same time.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.TlsVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.VerifyClient = 'VerifyClient' in params ? params.VerifyClient : null;

        if (params.CertInfo) {
            let obj = new ServerCert();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }

        if (params.ClientCertInfo) {
            let obj = new ClientCert();
            obj.deserialize(params.ClientCertInfo)
            this.ClientCertInfo = obj;
        }
        this.Spdy = 'Spdy' in params ? params.Spdy : null;
        this.SslStatus = 'SslStatus' in params ? params.SslStatus : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }
        this.TlsVersion = 'TlsVersion' in params ? params.TlsVersion : null;

    }
}

/**
 * Path-based cache rule configuration
The cache expiration time for all files is 30 days by default. 
Static acceleration type domain names .php, .jsp, .asp, and .aspx are not cached by default.
 * @class
 */
class RuleCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Content for each `CacheType`:
For `all`, enter a wildcard `*`.
For `file`, enter the suffix, e.g., `jpg` or `txt`.
For `directory`, enter the path, e.g., `/xxx/test/`.
For `path`, enter the absolute path, e.g., `/xxx/test.html`.
For `index`, enter a forward slash `/`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * Rule types:
`all`: effective for all files.
`file`: effective for specified file suffixes.
`directory`: effective for specified paths.
`path`: effective for specified absolute paths.
`index`: homepage.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Cache configuration
Note: this field may return null, indicating that no valid value is obtained.
         * @type {RuleCacheConfig || null}
         */
        this.CacheConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;

        if (params.CacheConfig) {
            let obj = new RuleCacheConfig();
            obj.deserialize(params.CacheConfig)
            this.CacheConfig = obj;
        }

    }
}

/**
 * DescribeCdnDomainLogs request structure.
 * @class
 */
class DescribeCdnDomainLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies a domain name for the query
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Starting time, such as `2019-09-04 00:00:00`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as `2019-09-04 12:00:00`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paged queries. Default value: 100. Maximum value: 1,000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specifies a region for the query.
`mainland`: specifies to return the download link of logs on acceleration within Mainland China;
`overseas`: specifies to return the download link of logs on acceleration outside Mainland China;
`global`: specifies to return a download link of logs on acceleration within Mainland China and a link of logs on acceleration outside Mainland China.
Default value: `mainland`.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * The type of log to be downloaded.
access: access logs
         * @type {string || null}
         */
        this.LogType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

    }
}

/**
 * CreateClsLogTopic response structure.
 * @class
 */
class CreateClsLogTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TopicId = null;

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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Remote authentication rule
 * @class
 */
class RemoteAuthenticationRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Remote authentication server
The server configured in `RemoteAutherntication` is used by default.
         * @type {string || null}
         */
        this.Server = null;

        /**
         * HTTP method used by the remote authentication server. Valid values: `get`, `post`, `head`, and `all`. 
`all`: the remote authentication server follows the client request method.
Default: `all`
         * @type {string || null}
         */
        this.AuthMethod = null;

        /**
         * Rule types:
`all`: apply to all files
`file`: apply to files with the specified suffixes
`directory`: apply to the specified directories
`path`: apply to the specified absolute paths
Default: `all`.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Content for each `RuleType`:
For `all`, enter a wildcard `*`.
For `file`, enter a suffix, e.g., `jpg` or `txt`.
For `directory`, enter a path, e.g., `/xxx/test/`.
For `path`, enter an absolute path, e.g., `/xxx/test.html`.
For `index`, enter a forward slash `/`.
Default: `*`
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * Timeout period of the remote authentication server. Unit: ms.
Value range: [1, 30,000]
Default: 20000
         * @type {number || null}
         */
        this.AuthTimeout = null;

        /**
         * Whether to deny or allow the request when the remote authentication server is timed out:
`RETURN_200`: the request is allowed when the remote authentication server is timed out.
`RETURN_403`: the request is denied when the remote authentication server is timed out.
Default: `RETURN_200`
         * @type {string || null}
         */
        this.AuthTimeoutAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Server = 'Server' in params ? params.Server : null;
        this.AuthMethod = 'AuthMethod' in params ? params.AuthMethod : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.AuthTimeout = 'AuthTimeout' in params ? params.AuthTimeout : null;
        this.AuthTimeoutAction = 'AuthTimeoutAction' in params ? params.AuthTimeoutAction : null;

    }
}

/**
 * Smart compression configuration. By default, Gzip compression is performed for files with js, html, css, xml, json, shtml, and htm suffixes, and with sizes between 256 and 2097152 bytes.
 * @class
 */
class Compression extends  AbstractModel {
    constructor(){
        super();

        /**
         * Smart compression configuration switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Compression rules array
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CompressionRule> || null}
         */
        this.CompressionRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.CompressionRules) {
            this.CompressionRules = new Array();
            for (let z in params.CompressionRules) {
                let obj = new CompressionRule();
                obj.deserialize(params.CompressionRules[z]);
                this.CompressionRules.push(obj);
            }
        }

    }
}

/**
 * PurgePathCache response structure.
 * @class
 */
class PurgePathCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge task ID. Directories submitted in one request share a task ID.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Filter conditions for domain name query.
 * @class
 */
class DomainFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters field name, which includes:
- `origin`: primary origin server.
- `domain`: domain name.
- `resourceId`: domain name ID.
- `status`: domain name status. Valid values: `online`, `offline`, and `processing`.
- `serviceType`: service type. Valid values: `web`, `download`, and `media`.
- projectId: project ID.
- `domainType`: primary origin server type. Valid values: `cname` (external origin), `COS` (COS origin), and `third_party` (3rd-party object storage origin).
- `fullUrlCache`: whether to enable full-path cache, which can be `on` or `off`.
- `https`: whether to configure HTTPS, which can be `on`, `off` or `processing`.
- `originPullProtocol`: origin-pull protocol type, which can be `http`, `follow`, or `https`.
- `tagKey`: tag key.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filter field value.
         * @type {Array.<string> || null}
         */
        this.Value = null;

        /**
         * Whether to enable fuzzy query. Only `origin` or `domain` is supported for the filter field name.
When fuzzy query is enabled, the maximum Value length is 1. When fuzzy query is disabled, the maximum Value length is 5.
         * @type {boolean || null}
         */
        this.Fuzzy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * DescribeCdnOriginIp response structure.
 * @class
 */
class DescribeCdnOriginIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intermediate node IP details
         * @type {Array.<OriginIp> || null}
         */
        this.Ips = null;

        /**
         * Number of intermediate node IPs
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Ips) {
            this.Ips = new Array();
            for (let z in params.Ips) {
                let obj = new OriginIp();
                obj.deserialize(params.Ips[z]);
                this.Ips.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Specific configuration for domain names inside and outside mainland China by regions.
 * @class
 */
class SpecificConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specific configuration for domain name inside mainland China.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MainlandConfig || null}
         */
        this.Mainland = null;

        /**
         * Specific configuration for domain name outside mainland China.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OverseaConfig || null}
         */
        this.Overseas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Mainland) {
            let obj = new MainlandConfig();
            obj.deserialize(params.Mainland)
            this.Mainland = obj;
        }

        if (params.Overseas) {
            let obj = new OverseaConfig();
            obj.deserialize(params.Overseas)
            this.Overseas = obj;
        }

    }
}

/**
 * 301/302 automatic origin-pull follow-redirect configuration. It is disabled by default.
 * @class
 */
class FollowRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin-pull follow-redirect switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Custom request header configuration. This is disabled by default.
 * @class
 */
class RequestHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom request header configuration switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom request header configuration rules
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<HttpHeaderPathRule> || null}
         */
        this.HeaderRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.HeaderRules) {
            this.HeaderRules = new Array();
            for (let z in params.HeaderRules) {
                let obj = new HttpHeaderPathRule();
                obj.deserialize(params.HeaderRules[z]);
                this.HeaderRules.push(obj);
            }
        }

    }
}

/**
 * DescribePurgeQuota request structure.
 * @class
 */
class DescribePurgeQuotaRequest extends  AbstractModel {
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
 * Referer blocklist/allowlist configuration. This is disabled by default.
 * @class
 */
class Referer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Referer blocklist/allowlist configuration switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Referer blocklist/allowlist configuration rule
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RefererRule> || null}
         */
        this.RefererRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.RefererRules) {
            this.RefererRules = new Array();
            for (let z in params.RefererRules) {
                let obj = new RefererRule();
                obj.deserialize(params.RefererRules[z]);
                this.RefererRules.push(obj);
            }
        }

    }
}

/**
 * Maximum size of the file uploaded for streaming via a POST request
 * @class
 */
class PostSize extends  AbstractModel {
    constructor(){
        super();

        /**
         * Limit the size of a POST request. The default value is 32 MB.
off: Disable
on: Enable
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Maximum size. Value range: 1 MB to 200 MB.
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * DescribeCdnData response structure.
 * @class
 */
class DescribeCdnDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity of the returned data. Specify one of the following during querying:
min: 1 minute
5min: 5 minutes
hour: 1 hour
day: 1 day
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Returned data details of the specified conditional query
         * @type {Array.<ResourceData> || null}
         */
        this.Data = null;

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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableClsLogTopic request structure.
 * @class
 */
class EnableClsLogTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Connection channel. Default value: cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * Path cache/no cache configuration.
 * @class
 */
class CacheConfigNoCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * No cache configuration switch
on: enable
off: disable
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Always forwards to the origin server for verification
on: enable
off: disable
This is disabled by default.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Revalidate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Revalidate = 'Revalidate' in params ? params.Revalidate : null;

    }
}

/**
 * Merging pull requests configurations
 * @class
 */
class OriginCombine extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the merging pull requests feature. Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DeleteCdnDomain request structure.
 * @class
 */
class DeleteCdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
The domain name status should be `Disabled`
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribePayType response structure.
 * @class
 */
class DescribePayTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing modes:
`flux`: bill-by-traffic
`bandwidth`: bill-by-bandwidth
`request`: bill-by-request
In case the billing mode is changed in the day, if there is bandwidth consumption occurred in the current day, the billing mode returned is the new billing mode for the next day. If no bandwidth consumption occurs, it indicates the current billing mode.
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * Billing cycle:
day: daily settlement
month: monthly settlement
         * @type {string || null}
         */
        this.BillingCycle = null;

        /**
         * `monthMax`: billed by the monthly average of daily peak traffic (monthly settlement)
`day95`: billed by the daily 95th percentile bandwidth (monthly settlement)
`month95`: billed by the monthly 95th percentile bandwidth (monthly settlement)
`sum`: billed by the total traffic/total requests (daily or monthly settlement)
`max`: billed by the peak bandwidth (daily settlement)
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * Billing method outside Mainland China:
`all`: unified billing for all regions
`multiple`: separate billing for different regions
         * @type {string || null}
         */
        this.RegionType = null;

        /**
         * The current billing mode in effect:
`flux`: bill-by-traffic
`bandwidth`: bill-by-bandwidth
`request`: bill-by-request
         * @type {string || null}
         */
        this.CurrentPayType = null;

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
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.BillingCycle = 'BillingCycle' in params ? params.BillingCycle : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.RegionType = 'RegionType' in params ? params.RegionType : null;
        this.CurrentPayType = 'CurrentPayType' in params ? params.CurrentPayType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Path-based origin-pull configuration rules
 * @class
 */
class PathRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable wildcard match (`*`).
false: disable
true: enable
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Regex = null;

        /**
         * Matched URL. Only URLs are supported, while parameters are not. The exact match is used by default. If wildcard match is enabled, up to 5 wildcards are supported. The URL can contain up to 1,024 characters.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Origin server when the path matches. COS origin with private read/write is not supported. The default origin server will be used by default when this field is left empty.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * Origin server host header when the path matches. The default `ServerName` will be used by default when this field is left empty.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * Origin server region. Valid values: `CN` and `OV`.
CN: the Chinese mainland
OV: outside the Chinese mainland
Default value: `CN`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginArea = null;

        /**
         * Origin server URI path when the path matches, starting with `/` and excluding parameters. The path can contain up to 1,024 characters. The wildcards in the match path can be respectively captured using `$1`, `$2`, `$3`, `$4`, and `$5`. Up to 10 values can be captured.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ForwardUri = null;

        /**
         * Origin-pull header setting when the path matches.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<HttpHeaderRule> || null}
         */
        this.RequestHeaders = null;

        /**
         * When `Regex` is `false`, this parameter should be `true`.
`false`: disabled
`true`: enabled
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.FullMatch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.OriginArea = 'OriginArea' in params ? params.OriginArea : null;
        this.ForwardUri = 'ForwardUri' in params ? params.ForwardUri : null;

        if (params.RequestHeaders) {
            this.RequestHeaders = new Array();
            for (let z in params.RequestHeaders) {
                let obj = new HttpHeaderRule();
                obj.deserialize(params.RequestHeaders[z]);
                this.RequestHeaders.push(obj);
            }
        }
        this.FullMatch = 'FullMatch' in params ? params.FullMatch : null;

    }
}

/**
 * ListTopData request structure.
 * @class
 */
class ListTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time in the format of `yyyy-MM-dd HH:mm:ss`
Only supports data query at daily granularity. The date in the input parameter is used as the start date.
Data generated after or at 00:00:00 on the start date will be returned
Only data for the last 90 days can be queried
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time in the format of `yyyy-MM-dd HH:mm:ss`
Only supports data query at daily granularity. The date in the input parameter is used as the end date.
Data generated before or at 23:59:59 on the end date will be returned
`EndTime` must be later than or equal to `StartTime`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Object representing the sort criteria. The following objects are supported:
`url`: sorts by access URL (URLs carrying no parameters). Supported filters are `flux` and `request`.
`district`: sorts by province, country, or region. Supported filters are `flux` and `request`.
`isp`: sorts by ISP. Supported filters are `flux` and `request`.
`host`: sorts by domain name access data. Supported filters are `flux`, `request`, `bandwidth`, `fluxHitRate`, and `statusCode` (2XX, 3XX, 4XX, 5XX).
`originHost`: sorts by domain name origin-pull data. Supported filters are `flux`, `request`, `bandwidth`, and `OriginStatusCode` (origin_2XX, origin_3XX, origin_4XX, origin_5XX).
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Metric name used for sorting:
flux: If Metric is `host`, it indicates the access traffic; if Metric is `originHost`, it indicates the origin-pull traffic.
bandwidth: If Metric is `host`, it indicates the access bandwidth; if Metric is `originHost`, it indicates the origin-pull bandwidth.
request: If Metric is `host`, it indicates the number of access requests; if Metric is `originHost`, it indicates the number of origin-pull requests.
fluxHitRate: Average traffic hit rate
2XX: access 2XX status code
3XX: access 3XX status code
4XX: access 4XX status code
5XX: access 5XX status code
origin_2XX: origin-pull 2XX status code
origin_3XX: origin-pull 3XX status code
origin_4XX: origin-pull 4XX status code
origin_5XX: origin-pull 5XX status code
statusCode: statistics of a specific access status code which is specified in the `Code` parameter.
OriginStatusCode: statistics of a specific origin-pull status code which is specified in the `Code` parameter.
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * Specifies the list of domain names to be queried; up to 30 domain names can be queried at a time.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Specifies the project ID to be queried, which can be viewed [here](https://console.cloud.tencent.com/project)
Please note that if domain names are specified, this parameter will be ignored.
         * @type {number || null}
         */
        this.Project = null;

        /**
         * Default is `false` for multi-domain name queries, which returns sorted results of all domain names. 
If `Metric` is `url`, `path`, `district`, or `isp` and `Filter` is `flux` or `request`, it can be set to `true` to return the sorted results of each domain.
         * @type {boolean || null}
         */
        this.Detail = null;

        /**
         * When Filter is `statusCode` or `OriginStatusCode`, enter a code to query and sort results.
         * @type {string || null}
         */
        this.Code = null;

        /**
         * Specifies a service region for the query. If it is left blank, CDN data within Mainland China will be queried.
`mainland`: specifies to query CDN data within Mainland China;
`overseas`: specifies to query CDN data outside Mainland China. Supported metrics are `url`, `district`, `host`, and `originHost`. If `Metric` is `originHost`, supported filters are `flux`, `request`, and `bandwidth`.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * The region type can be specified only when you query CDN data outside Mainland China and `Metric` is `district` or `host`; if you leave it empty, data of the service region will be queried (only applicable when `Area` is `overseas` and `Metric` is `district` or `host`)
server: specifies to query data of service region (where a CDN node is located)
client: specifies to query data of the client region (where a user request device is located). If `Metric` is `host`, `Filter` can only be `flux`, `request`, or `bandwidth`
         * @type {string || null}
         */
        this.AreaType = null;

        /**
         * Specifies the product to query, either `cdn` (default) or `ecdn`.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Returns the first N data entries. The default value is 100 if this parameter is not specified, whereas 1000 if `Metric` is `url`.
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.AreaType = 'AreaType' in params ? params.AreaType : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ListClsTopicDomains request structure.
 * @class
 */
class ListClsTopicDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Connection channel. Default value: cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * DescribeDomains response structure.
 * @class
 */
class DescribeDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain names
         * @type {Array.<BriefDomain> || null}
         */
        this.Domains = null;

        /**
         * The number of domain names that matched the query conditions
Used for paginated queries
         * @type {number || null}
         */
        this.TotalNumber = null;

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

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new BriefDomain();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePayType request structure.
 * @class
 */
class DescribePayTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies a service region.
`mainland`: queries billing methods within Mainland China;
`overseas`: queries billing methods outside Mainland China.
Default value: `mainland`.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Specifies the product to query, either `cdn` (default) or `ecdn`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Timestamp hotlink protection advanced configuration mode D
 * @class
 */
class AdvancedAuthenticationTypeD extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key used for signature calculation, allowing 6 to 32 bytes of letters and digits.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Alternative key used for authentication after the authentication key (`SecretKey`) failed
         * @type {string || null}
         */
        this.BackupSecretKey = null;

        /**
         * Signature field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * Time field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * Expiration time in seconds
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * Time format. Valid values: dec (decimal), hex (hexadecimal).
         * @type {string || null}
         */
        this.TimeFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.BackupSecretKey = 'BackupSecretKey' in params ? params.BackupSecretKey : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;

    }
}

/**
 * Intelligent compression rule configuration
 * @class
 */
class CompressionRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * true: must be set as true, enables compression
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.Compress = null;

        /**
         * The minimum file size to trigger compression (in bytes)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MinLength = null;

        /**
         * The maximum file size to trigger compression (in bytes)
The maximum value is 30 MB
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxLength = null;

        /**
         * File compression algorithm
gzip: specifies Gzip compression
brotli: specifies Brotli compression
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Algorithms = null;

        /**
         * Compress according to the file suffix type
Such as: jpg, txt
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * Rule types:
`all`: effective for all files.
`file`: effective for specified file suffixes.
`directory`: effective for specified paths.
`path`: effective for specified absolute paths.
`contentType`: effective when the `ContentType` is specified
If this field is specified, `FileExtensions` does not take effect.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Content for each `CacheType`:
For `all`, enter a wildcard `*`.
For `file`, enter a suffix, e.g., `jpg` or `txt`.
For `directory`, enter a path, e.g., `/xxx/test/`.
For `path`, enter an absolute path, e.g., `/xxx/test.html`.
For `contentType`, enter `text/html`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Compress = 'Compress' in params ? params.Compress : null;
        this.MinLength = 'MinLength' in params ? params.MinLength : null;
        this.MaxLength = 'MaxLength' in params ? params.MaxLength : null;
        this.Algorithms = 'Algorithms' in params ? params.Algorithms : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

/**
 * Image optimization - `GuetzliAdapter` configuration
 * @class
 */
class GuetzliAdapter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Valid values: on, off
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * UpdateScdnDomain response structure.
 * @class
 */
class UpdateScdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of the request. `Success` indicates that the configurations are updated.
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Complex origin server configurations. The following configurations are supported:
+ Origin server specified as a single domain name
+ Origin server specified as multiple IPs. Supported port range: 1-65535; Supported weight range: 1-100. Format: IP:Port:Weight.
+ Origin-pull domain name configuration
+ Cloud Object Storage (COS) specified as origin server
+ Hot backup origin server specified as a single domain name
+ Hot backup origin server specified as multiple IPs. Supported port range: 1-65535. At present, weight configuration is not supported.
+ Hot backup origin server origin-pull domain name configuration
 * @class
 */
class Origin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Master origin server list
When modifying the origin server, you need to enter the corresponding OriginType.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Origins = null;

        /**
         * Primary origin server type
Input:
`domain`: domain name
`cos`: COS bucket address
`ip`: IP address
`ipv6`: a single IPv6 address
`ip_ipv6`: multiple IPv4 addresses and one IPv6 address
`ip_domain`: both IP addresses and domain names (only available to beta users)
`ipv6_domain`: multiple IPv6 addresses and one domain name
`ip_ipv6_domain`: multiple IPv4 and IPv6 addresses and one domain name
Output: 
`image`: Cloud Infinite origin
`ftp`: FTP origin (disused)
When modifying `Origins`, you need to enter the corresponding `OriginType`.
The IPv6 feature is now only available to beta users. Please submit an application to use this feature.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Host header used when accessing the master origin server. If left empty, the acceleration domain name will be used by default.
If a wildcard domain name is accessed, then the sub-domain name during the access will be used by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * When OriginType is COS, you can specify if access to private buckets is allowed.
Note: to enable this configuration, you need to first grant CDN access to the private bucket.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CosPrivateAccess = null;

        /**
         * Origin-pull protocol configuration
http: forced HTTP origin-pull
follow: protocol follow origin-pull
https: forced HTTPS origin-pull. This only supports origin server port 443 for origin-pull.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

        /**
         * Backup origin server list
When modifying the backup origin server, you need to enter the corresponding BackupOriginType.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.BackupOrigins = null;

        /**
         * Secondary origin type. Values:
`domain`: domain name
`ip`: IP address
When modifying `BackupOrigins`, you need to enter the corresponding `BackupOriginType`.
The following backup origin servers are only available to beta users. Submit an application if you want to become a beta user.
`ipv6_domain`: multiple IPv6 addresses and one domain name
`ip_ipv6`: multiple IPv4 addresses and one IPv6 address
`ipv6_domain`: multiple IPv6 addresses and one domain name
`ip_ipv6_domain`: multiple IPv4 and IPv6 addresses and one domain name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupOriginType = null;

        /**
         * Host header used when accessing the backup origin server. If left empty, the ServerName of master origin server will be used by default.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupServerName = null;

        /**
         * 
         * @type {string || null}
         */
        this.BasePath = null;

        /**
         * Origin URL rewrite rule configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<PathRule> || null}
         */
        this.PathRules = null;

        /**
         * Path-based origin-pull configurations
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<PathBasedOriginRule> || null}
         */
        this.PathBasedOrigin = null;

        /**
         * Advanced HTTPS forwarding configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvanceHttps || null}
         */
        this.AdvanceHttps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Origins = 'Origins' in params ? params.Origins : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.CosPrivateAccess = 'CosPrivateAccess' in params ? params.CosPrivateAccess : null;
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;
        this.BackupOrigins = 'BackupOrigins' in params ? params.BackupOrigins : null;
        this.BackupOriginType = 'BackupOriginType' in params ? params.BackupOriginType : null;
        this.BackupServerName = 'BackupServerName' in params ? params.BackupServerName : null;
        this.BasePath = 'BasePath' in params ? params.BasePath : null;

        if (params.PathRules) {
            this.PathRules = new Array();
            for (let z in params.PathRules) {
                let obj = new PathRule();
                obj.deserialize(params.PathRules[z]);
                this.PathRules.push(obj);
            }
        }

        if (params.PathBasedOrigin) {
            this.PathBasedOrigin = new Array();
            for (let z in params.PathBasedOrigin) {
                let obj = new PathBasedOriginRule();
                obj.deserialize(params.PathBasedOrigin[z]);
                this.PathBasedOrigin.push(obj);
            }
        }

        if (params.AdvanceHttps) {
            let obj = new AdvanceHttps();
            obj.deserialize(params.AdvanceHttps)
            this.AdvanceHttps = obj;
        }

    }
}

/**
 * DescribeDomainsConfig request structure.
 * @class
 */
class DescribeDomainsConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: 100. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query condition filter, complex type.
         * @type {Array.<DomainFilter> || null}
         */
        this.Filters = null;

        /**
         * Sorting rules
         * @type {Sort || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sort) {
            let obj = new Sort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * Data structure of sorted data
 * @class
 */
class TopData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name, which is classified as follows based on different query conditions:
A specific domain name: This indicates the details of this domain name
multiDomains: This indicates the aggregate details of multiple domain names
Project ID: This displays the ID of the specifically queried project
all: This indicates the details at the account level
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Detailed sorting results
         * @type {Array.<TopDetailData> || null}
         */
        this.DetailData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new TopDetailData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * EnableCaches request structure.
 * @class
 */
class EnableCachesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of unblocked URLs
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * URL blocking date
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * Purge/Prefetch available usage and quota
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * Quota limit for one batch submission request.
         * @type {number || null}
         */
        this.Batch = null;

        /**
         * Daily submission quota limit.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Remaining daily submission quota.
         * @type {number || null}
         */
        this.Available = null;

        /**
         * Quota region.
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Batch = 'Batch' in params ? params.Batch : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * A part of `CacheKey`
 * @class
 */
class HeaderKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to use it as part of `CacheKey`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Array of headers that make up the `CacheKey` (separated by ';')
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeBillingData request structure.
 * @class
 */
class DescribeBillingDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time, e.g., 2018-09-04 10:40:00. The returned result will be later than or equal to the specified time
The time will be rounded forward based on the granularity parameter `Interval`. For example, if the query start time is 2018-09-04 10:40:00 and the query time granularity is 1-hour, the time for the first returned entry will be 2018-09-04 10:00:00
The range between the start time and end time should be less than or equal to 90 days
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, e.g. 2018-09-04 10:40:00. The returned result will be earlier than or equal to the specified time
The time will be rounded forward based on the granularity parameter `Interval`. For example, if the query end time is 2018-09-04 10:40:00 and the query time granularity is 1-hour, the time for the last returned entry will be 2018-09-04 10:00:00
The range between the start time and end time should be less than or equal to 90 days
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Time granularity, which can be:
`min`: 1-minute granularity. The query period cannot exceed 24 hours.
`5min`: 5-minute granularity. The query range cannot exceed 31 days.
`hour`: 1-hour granularity. The query period cannot exceed 31 days.
`day`: 1-day granularity. The query period cannot exceed 31 days.

Querying 1-minute granularity data is not supported if the `Area` field is `overseas`.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Domain name whose billing data is to be queried
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Project ID, which can be viewed [here](https://console.cloud.tencent.com/project)
If the `Domain` parameter is populated with specific domain name information, then the billing data of this domain name instead of the specified project will be returned
         * @type {number || null}
         */
        this.Project = null;

        /**
         * Acceleration region whose billing data is to be queried:
mainland: in the mainland of China
overseas: outside the mainland of China
If this parameter is left empty, `mainland` will be used by default
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Country/region to be queried if `Area` is `overseas`
For district or country/region codes, please see [District Code Mappings](https://intl.cloud.tencent.com/document/product/228/6316?from_cn_redirect=1#.E7.9C.81.E4.BB.BD.E6.98.A0.E5.B0.84)
If this parameter is left empty, all countries/regions will be queried
         * @type {number || null}
         */
        this.District = null;

        /**
         * Billing statistics type
flux: bill-by-traffic
bandwidth: bill-by-bandwidth
Default value: `bandwidth`
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Specifies the product to query, either `cdn` (default) or `ecdn`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.District = 'District' in params ? params.District : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Cache configuration basic version
The cache expiration time for all files is 30 days by default.
Static acceleration type domain names .php, .jsp, .asp, and .aspx are not cached by default
Note: this version does not support setting cache expiration rules if the origin server does not return max-age
 * @class
 */
class SimpleCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache expiration time rules
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<SimpleCacheRule> || null}
         */
        this.CacheRules = null;

        /**
         * Follows origin server Cache-Control: max-age configurations
on: enabled
off: disabled
If this is enabled, resources that do not match CacheRules rules will be cached by the node according to the max-age value returned by the origin server. Resources that match CacheRules rules will be cached on the node according to the cache expiration time set in CacheRules.
This conflicts with CompareMaxAge. The two cannot be enabled at the same time.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FollowOrigin = null;

        /**
         * Forced cache
on: enable
off: disable
This is disabled by default. If enabled, the `no-store` and `no-cache` resources returned from the origin server will be cached according to `CacheRules` rules.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

        /**
         * Ignores the Set-Cookie header of the origin server
on: enabled
off: disabled
This is disabled by default
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IgnoreSetCookie = null;

        /**
         * Advanced cache expiration configuration. If this is enabled, the max-age value returned by the origin server will be compared with the cache expiration time set in CacheRules, and the smallest value will be cached on the node.
on: enabled
off: disabled
This is disabled by default
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CompareMaxAge = null;

        /**
         * Always forwards to the origin server for verification
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Revalidate || null}
         */
        this.Revalidate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CacheRules) {
            this.CacheRules = new Array();
            for (let z in params.CacheRules) {
                let obj = new SimpleCacheRule();
                obj.deserialize(params.CacheRules[z]);
                this.CacheRules.push(obj);
            }
        }
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;
        this.IgnoreSetCookie = 'IgnoreSetCookie' in params ? params.IgnoreSetCookie : null;
        this.CompareMaxAge = 'CompareMaxAge' in params ? params.CompareMaxAge : null;

        if (params.Revalidate) {
            let obj = new Revalidate();
            obj.deserialize(params.Revalidate)
            this.Revalidate = obj;
        }

    }
}

/**
 * DeleteClsLogTopic request structure.
 * @class
 */
class DeleteClsLogTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Connection channel. Default value: cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * `UserAgent` blocklist/allowlist configuration
 * @class
 */
class UserAgentFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Valid values: on, off
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * UA blocklist/allowlist effect rule list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UserAgentFilterRule> || null}
         */
        this.FilterRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new UserAgentFilterRule();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }

    }
}

/**
 * DescribeCdnOriginIp request structure.
 * @class
 */
class DescribeCdnOriginIpRequest extends  AbstractModel {
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
 * UpdatePayType response structure.
 * @class
 */
class UpdatePayTypeResponse extends  AbstractModel {
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
 * CLS topic information
 * @class
 */
class TopicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Whether to enable publishing
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * Creation time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Either `cdn` or `ecdn`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * Whether the log topic has been removed from CLS
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Deleted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;

    }
}

/**
 * SCDN custom CC rules
 * @class
 */
class AdvancedCCRules extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Detection duration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DetectionTime = null;

        /**
         * Detection frequency threshold
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FrequencyLimit = null;

        /**
         * Whether to enable IP penalty. Valid values: `on` and `off`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PunishmentSwitch = null;

        /**
         * IP penalty duration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PunishmentTime = null;

        /**
         * Action. Valid values: `intercept` and `redirect`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * A redirection URL used when Action is `redirect`
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * Layer-7 rule configuration for CC frequency limiting
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ScdnSevenLayerRules> || null}
         */
        this.Configure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.DetectionTime = 'DetectionTime' in params ? params.DetectionTime : null;
        this.FrequencyLimit = 'FrequencyLimit' in params ? params.FrequencyLimit : null;
        this.PunishmentSwitch = 'PunishmentSwitch' in params ? params.PunishmentSwitch : null;
        this.PunishmentTime = 'PunishmentTime' in params ? params.PunishmentTime : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

        if (params.Configure) {
            this.Configure = new Array();
            for (let z in params.Configure) {
                let obj = new ScdnSevenLayerRules();
                obj.deserialize(params.Configure[z]);
                this.Configure.push(obj);
            }
        }

    }
}

/**
 * DescribeDomainsConfig response structure.
 * @class
 */
class DescribeDomainsConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain names
         * @type {Array.<DetailDomain> || null}
         */
        this.Domains = null;

        /**
         * The number of domain names that matched the query conditions
Used for paginated queries
         * @type {number || null}
         */
        this.TotalNumber = null;

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

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DetailDomain();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Basic domain configuration information, including CNAME, status, service type, acceleration region, creation time, last modified time, and origin server configuration.
 * @class
 */
class BriefDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Tencent Cloud account ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Acceleration domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * CNAME address of domain name
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Acceleration service status
rejected: the domain name is rejected due to expiration/deregistration of its ICP filing
processing: deploying
online: activated
offline: disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Project ID, which can be viewed on the Tencent Cloud project management page
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Domain name service type
web: static acceleration
download: download acceleration
media: streaming VOD acceleration
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Domain name creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of domain name
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Origin server configuration details
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Domain name block status
normal: normal
overdue: the domain name has been disabled due to account arrears. The acceleration service can be resumed after the account is topped up.
malicious: the acceleration service has been forcibly disabled due to detection of malicious behavior.
ddos: the acceleration service has been disabled due to large-scale DDoS attacks to the domain name
idle: no operations or data has been detected for more than 90 days. The domain name is determined to be inactive which automatically disables the acceleration service. You can restart the service.
unlicensed: the acceleration service has been automatically disabled as the domain name has no ICP filing or its ICP filing is deregistered. Service can be resumed after an ICP filing is obtained.
capping: the configured upper limit for bandwidth has been reached.
readonly: the domain name has a special configuration and has been locked.
         * @type {string || null}
         */
        this.Disable = null;

        /**
         * Acceleration region
mainland: acceleration in Mainland China
overseas: acceleration outside Mainland China
global: global acceleration
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Domain name lock status
normal: not locked
mainland: locked in Mainland China
overseas: locked outside Mainland China
global: locked globally
         * @type {string || null}
         */
        this.Readonly = null;

        /**
         * Product of the domain name, either `cdn` or `ecdn`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Timestamp and its corresponding value
 * @class
 */
class TimestampData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Statistical point in time in forward rounding mode
Taking the 5-minute granularity as an example, 13:35:00 indicates that the statistical interval is between 13:35:00 and 13:39:59.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Data value
         * @type {number || null}
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Image optimization - `TpgAdapter` configuration
 * @class
 */
class TpgAdapter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Valid values: on, off
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Path cache configuration
 * @class
 */
class CacheConfigCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache configuration switch
on: enable
off: disable
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Cache expiration time settings
Unit: second. The maximum value is 365 days.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {number || null}
         */
        this.CacheTime = null;

        /**
         * Advanced cache expiration configuration. If this is enabled, the max-age value returned by the origin server will be compared with the cache expiration time set in CacheRules, and the smallest value will be cached on the node.
on: enable
off: disable
This is disabled by default.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.CompareMaxAge = null;

        /**
         * Force cache
on: enable
off: disable
This is disabled by default. If enabled, the `no-store` and `no-cache` resources returned from the origin server will be cached according to `CacheRules` rules.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

        /**
         * Whether to ignore the header and body on cache nodes if the origin server returns the header `Set-Cookie`.
`on`: Ignore; do not cache the header and body.
`off`: Do not ignore; follow the custom cache rules of cache nodes.
It is disabled by default.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.IgnoreSetCookie = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;
        this.CompareMaxAge = 'CompareMaxAge' in params ? params.CompareMaxAge : null;
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;
        this.IgnoreSetCookie = 'IgnoreSetCookie' in params ? params.IgnoreSetCookie : null;

    }
}

/**
 * DescribeReportData response structure.
 * @class
 */
class DescribeReportDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name-level data details.
         * @type {Array.<ReportData> || null}
         */
        this.DomainReport = null;

        /**
         * Project-level data details
         * @type {Array.<ReportData> || null}
         */
        this.ProjectReport = null;

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

        if (params.DomainReport) {
            this.DomainReport = new Array();
            for (let z in params.DomainReport) {
                let obj = new ReportData();
                obj.deserialize(params.DomainReport[z]);
                this.DomainReport.push(obj);
            }
        }

        if (params.ProjectReport) {
            this.ProjectReport = new Array();
            for (let z in params.ProjectReport) {
                let obj = new ReportData();
                obj.deserialize(params.ProjectReport[z]);
                this.ProjectReport.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableClsLogTopic request structure.
 * @class
 */
class DisableClsLogTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Connection channel. Default value: cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * Path cache configuration, choose one from the following three cache modes.
 * @class
 */
class RuleCacheConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache configuration
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {CacheConfigCache || null}
         */
        this.Cache = null;

        /**
         * No cache configuration
Note: this field may return null, indicating that no valid value is obtained.
         * @type {CacheConfigNoCache || null}
         */
        this.NoCache = null;

        /**
         * Follows the origin server configuration
Note: this field may return null, indicating that no valid value is obtained.
         * @type {CacheConfigFollowOrigin || null}
         */
        this.FollowOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Cache) {
            let obj = new CacheConfigCache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.NoCache) {
            let obj = new CacheConfigNoCache();
            obj.deserialize(params.NoCache)
            this.NoCache = obj;
        }

        if (params.FollowOrigin) {
            let obj = new CacheConfigFollowOrigin();
            obj.deserialize(params.FollowOrigin)
            this.FollowOrigin = obj;
        }

    }
}

/**
 * ListClsTopicDomains response structure.
 * @class
 */
class ListClsTopicDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Developer ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Channel
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Domain name region configuration, which may contain deleted domain names. If this is to be used in `ManageClsTopicDomains` API, you need to exclude deleted domain names by using the `ListCdnDomains` API.
         * @type {Array.<DomainAreaConfig> || null}
         */
        this.DomainAreaConfigs = null;

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Last modified time of log topic
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

        if (params.DomainAreaConfigs) {
            this.DomainAreaConfigs = new Array();
            for (let z in params.DomainAreaConfigs) {
                let obj = new DomainAreaConfig();
                obj.deserialize(params.DomainAreaConfigs[z]);
                this.DomainAreaConfigs.push(obj);
            }
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bot cookie policy
 * @class
 */
class BotCookie extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Rule type, which can only be `all` currently.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Rule value. Valid value: `*`.
         * @type {Array.<string> || null}
         */
        this.RuleValue = null;

        /**
         * Action. Valid values: `monitor`, `intercept`, `redirect`, and `captcha`.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Redirection target page
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * Update time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleValue = 'RuleValue' in params ? params.RuleValue : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeCdnIp request structure.
 * @class
 */
class DescribeCdnIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IPs to be queried
         * @type {Array.<string> || null}
         */
        this.Ips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ips = 'Ips' in params ? params.Ips : null;

    }
}

/**
 * IPv6 activation configurations, which cannot be changed.
 * @class
 */
class Ipv6 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the IPv6 feature for a domain name. Values include `on` or `off`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * WAF sub-rule switch status
 * @class
 */
class WafSubRuleStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sub-rule status. Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * List of rule IDs
         * @type {Array.<number> || null}
         */
        this.SubIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.SubIds = 'SubIds' in params ? params.SubIds : null;

    }
}

/**
 * Status code cache expiration configuration. 404 status codes are cached for 10 seconds by default
 * @class
 */
class StatusCodeCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status code cache expiration configuration switch
on: enabled
off: disabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Status code cache expiration rules details
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<StatusCodeCacheRule> || null}
         */
        this.CacheRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.CacheRules) {
            this.CacheRules = new Array();
            for (let z in params.CacheRules) {
                let obj = new StatusCodeCacheRule();
                obj.deserialize(params.CacheRules[z]);
                this.CacheRules.push(obj);
            }
        }

    }
}

/**
 * DescribeIpVisit response structure.
 * @class
 */
class DescribeIpVisitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity of data statistics, which supports 5min (5 minutes) and day (1 day).
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Origin-pull data details of each resource.
         * @type {Array.<ResourceData> || null}
         */
        this.Data = null;

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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableClsLogTopic response structure.
 * @class
 */
class EnableClsLogTopicResponse extends  AbstractModel {
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
 * ListClsLogTopics response structure.
 * @class
 */
class ListClsLogTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of logsets in the Shanghai region
         * @type {LogSetInfo || null}
         */
        this.Logset = null;

        /**
         * Information of log topics in the Shanghai region
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<TopicInfo> || null}
         */
        this.Topics = null;

        /**
         * Information on logsets in regions except Shanghai
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ExtraLogset> || null}
         */
        this.ExtraLogset = null;

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

        if (params.Logset) {
            let obj = new LogSetInfo();
            obj.deserialize(params.Logset)
            this.Logset = obj;
        }

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new TopicInfo();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }

        if (params.ExtraLogset) {
            this.ExtraLogset = new Array();
            for (let z in params.ExtraLogset) {
                let obj = new ExtraLogset();
                obj.deserialize(params.ExtraLogset[z]);
                this.ExtraLogset.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Specific configuration for domain names outside mainland China. UpdateDomainConfig API only supports modification of some region configurations. A list of differences that may exist for older configurations will be provided for a compatibility check. The supported configuration list is as follows:
+ Authentication
+ BandwidthAlert
+ ErrorPage
+ IpFilter
+ Origin
+ Referer
 * @class
 */
class OverseaConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timestamp hotlink protection configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * Bandwidth cap configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * Cache rules configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * Cache configurations.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Smart compression configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * Download speed limit configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * Error code redirect configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * 301 and 302 automatic origin-pull follow-redirect configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * Access protocol forced redirect configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * HTTPS configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * IP blocklist/allowlist configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP access limit configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * Browser cache rules configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * Origin server configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Cross-border optimization configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * Range GETs configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * Hotlink protection configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * Origin-pull request header configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * Origin server response header configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * Follows origin server cache header configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * SEO configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * Domain name service type. `web`: static acceleration; `download`: download acceleration; `media`: streaming media acceleration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Status code cache configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * Video dragging configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

        /**
         * Private access for S3 origin
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AwsPrivateAccess || null}
         */
        this.AwsPrivateAccess = null;

        /**
         * Private access for OSS origin
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {OssPrivateAccess || null}
         */
        this.OssPrivateAccess = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

        if (params.AwsPrivateAccess) {
            let obj = new AwsPrivateAccess();
            obj.deserialize(params.AwsPrivateAccess)
            this.AwsPrivateAccess = obj;
        }

        if (params.OssPrivateAccess) {
            let obj = new OssPrivateAccess();
            obj.deserialize(params.OssPrivateAccess)
            this.OssPrivateAccess = obj;
        }

    }
}

/**
 * AddCdnDomain request structure.
 * @class
 */
class AddCdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Acceleration domain name service type
`web`: Webpage file downloads
`download`: Large file downloads
`media`: Audio and video on demand acceleration
`hybrid`: Dynamic and static content acceleration
`dynamic`: Dynamic content acceleration
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Origin server configuration
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Project ID. Default value: 0, indicating `Default Project`
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * IP blocklist/allowlist configuration
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP access limit configuration
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * Status code cache configuration
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * Smart compression configuration
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * Bandwidth cap configuration
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * Range GETs configuration
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * 301/302 origin-pull follow-redirect configuration
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * Error code redirect configuration (This feature is in beta and not generally available yet.)
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * Request header configuration
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * Response header configuration
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * Download speed configuration
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * Node cache key configuration
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Header cache configuration
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * Video dragging configuration
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

        /**
         * Cache expiration time configuration
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * Cross-border linkage optimization configuration
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * HTTPS acceleration configuration
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Timestamp hotlink protection configuration
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * SEO configuration
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * Access protocol forced redirect configuration
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Referer hotlink protection configuration
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * Browser cache configuration (This feature is in beta and not generally available yet.)
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * IPv6 configuration (This feature is in beta and not generally available yet.)
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * Specific region configuration
Applicable to cases where the acceleration domain name configuration differs for regions in and outside mainland China.
         * @type {SpecificConfig || null}
         */
        this.SpecificConfig = null;

        /**
         * Domain name acceleration region
mainland: acceleration inside mainland China
overseas: acceleration outside mainland China
global: global acceleration
Overseas acceleration service must be enabled to use overseas acceleration and global acceleration.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Origin-pull timeout configuration
         * @type {OriginPullTimeout || null}
         */
        this.OriginPullTimeout = null;

        /**
         * Tag configuration
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * IPv6 access configuration
         * @type {Ipv6Access || null}
         */
        this.Ipv6Access = null;

        /**
         * Offline cache
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * QUIC access, which is a paid service. You can check the product document and Billing Overview for more information.
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * Access authentication for S3 origin
         * @type {AwsPrivateAccess || null}
         */
        this.AwsPrivateAccess = null;

        /**
         * Access authentication for OSS origin
         * @type {OssPrivateAccess || null}
         */
        this.OssPrivateAccess = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.SpecificConfig) {
            let obj = new SpecificConfig();
            obj.deserialize(params.SpecificConfig)
            this.SpecificConfig = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;

        if (params.OriginPullTimeout) {
            let obj = new OriginPullTimeout();
            obj.deserialize(params.OriginPullTimeout)
            this.OriginPullTimeout = obj;
        }

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }

        if (params.Ipv6Access) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6Access)
            this.Ipv6Access = obj;
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

        if (params.AwsPrivateAccess) {
            let obj = new AwsPrivateAccess();
            obj.deserialize(params.AwsPrivateAccess)
            this.AwsPrivateAccess = obj;
        }

        if (params.OssPrivateAccess) {
            let obj = new OssPrivateAccess();
            obj.deserialize(params.OssPrivateAccess)
            this.OssPrivateAccess = obj;
        }

    }
}

/**
 * `UserAgent` blocklist/allowlist rule configuration
 * @class
 */
class UserAgentFilterRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Effective access path type
all: all access paths are effective
file: effective by file extension
directory: effective by directory
path: effective by full access path
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Effective access paths
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * `UserAgent` list
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.UserAgents = null;

        /**
         * blocklist or allowlist. Valid values: blacklist, whitelist
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FilterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.UserAgents = 'UserAgents' in params ? params.UserAgents : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;

    }
}

/**
 * UpdateDomainConfig request structure.
 * @class
 */
class UpdateDomainConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Origin server configuration
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * IP blocklist/allowlist configuration
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP access limit configuration
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * Status code cache configuration
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * Smart compression configuration
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * Bandwidth cap configuration
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * Range GETs configuration
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * 301/302 origin-pull follow-redirect configuration
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * Error code redirect configuration (This feature is in beta and not generally available yet.)
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * Request header configuration
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * Response header configuration
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * Download speed configuration
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * Node cache key configuration
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Header cache configuration
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * Video dragging configuration
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

        /**
         * Cache expiration time configuration
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * Cross-border linkage optimization configuration
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * HTTPS acceleration configuration
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Timestamp hotlink protection configuration
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * SEO configuration
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * Access protocol forced redirect configuration
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Referer hotlink protection configuration
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * Browser cache configuration (This feature is in beta and not generally available yet.)
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * Domain name service type
web: static acceleration
download: download acceleration
media: streaming media VOD acceleration
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Specific region configuration
Applicable to cases where the acceleration domain name configuration differs for regions in and outside mainland China.
         * @type {SpecificConfig || null}
         */
        this.SpecificConfig = null;

        /**
         * Domain name acceleration region
`mainland`: acceleration inside the Chinese mainland
`overseas`: acceleration outside the Chinese mainland
`global`: global acceleration
When you change it to from `mainland`/`overseas` to `global`, configurations of the domain name will be deployed to the region inside or outside the Chinese mainland. The deployment will take some time as this domain name has special settings.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Origin-pull timeout configuration
         * @type {OriginPullTimeout || null}
         */
        this.OriginPullTimeout = null;

        /**
         * Origin access authentication for S3 bucket
         * @type {AwsPrivateAccess || null}
         */
        this.AwsPrivateAccess = null;

        /**
         * UA blocklist/allowlist Configuration
         * @type {UserAgentFilter || null}
         */
        this.UserAgentFilter = null;

        /**
         * Access control
         * @type {AccessControl || null}
         */
        this.AccessControl = null;

        /**
         * Configuration of URL rewriting
         * @type {UrlRedirect || null}
         */
        this.UrlRedirect = null;

        /**
         * Access port configuration
         * @type {Array.<number> || null}
         */
        this.AccessPort = null;

        /**
         * Timestamp hotlink protection advanced configuration (allowlist feature)
         * @type {AdvancedAuthentication || null}
         */
        this.AdvancedAuthentication = null;

        /**
         * Origin-pull authentication advanced configuration (allowlist feature)
         * @type {OriginAuthentication || null}
         */
        this.OriginAuthentication = null;

        /**
         * IPv6 access configuration
         * @type {Ipv6Access || null}
         */
        this.Ipv6Access = null;

        /**
         * Offline cache
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * Merging pull requests
         * @type {OriginCombine || null}
         */
        this.OriginCombine = null;

        /**
         * QUIC access, which is a paid service. You can check the product document and Billing Overview for more information.
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * Access authentication for OSS origin
         * @type {OssPrivateAccess || null}
         */
        this.OssPrivateAccess = null;

        /**
         * WebSocket configuration.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * Configuration of remote authentication
         * @type {RemoteAuthentication || null}
         */
        this.RemoteAuthentication = null;

        /**
         * Shared CNAME configuration (only available to beta users)
         * @type {ShareCname || null}
         */
        this.ShareCname = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.SpecificConfig) {
            let obj = new SpecificConfig();
            obj.deserialize(params.SpecificConfig)
            this.SpecificConfig = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;

        if (params.OriginPullTimeout) {
            let obj = new OriginPullTimeout();
            obj.deserialize(params.OriginPullTimeout)
            this.OriginPullTimeout = obj;
        }

        if (params.AwsPrivateAccess) {
            let obj = new AwsPrivateAccess();
            obj.deserialize(params.AwsPrivateAccess)
            this.AwsPrivateAccess = obj;
        }

        if (params.UserAgentFilter) {
            let obj = new UserAgentFilter();
            obj.deserialize(params.UserAgentFilter)
            this.UserAgentFilter = obj;
        }

        if (params.AccessControl) {
            let obj = new AccessControl();
            obj.deserialize(params.AccessControl)
            this.AccessControl = obj;
        }

        if (params.UrlRedirect) {
            let obj = new UrlRedirect();
            obj.deserialize(params.UrlRedirect)
            this.UrlRedirect = obj;
        }
        this.AccessPort = 'AccessPort' in params ? params.AccessPort : null;

        if (params.AdvancedAuthentication) {
            let obj = new AdvancedAuthentication();
            obj.deserialize(params.AdvancedAuthentication)
            this.AdvancedAuthentication = obj;
        }

        if (params.OriginAuthentication) {
            let obj = new OriginAuthentication();
            obj.deserialize(params.OriginAuthentication)
            this.OriginAuthentication = obj;
        }

        if (params.Ipv6Access) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6Access)
            this.Ipv6Access = obj;
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.OriginCombine) {
            let obj = new OriginCombine();
            obj.deserialize(params.OriginCombine)
            this.OriginCombine = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

        if (params.OssPrivateAccess) {
            let obj = new OssPrivateAccess();
            obj.deserialize(params.OssPrivateAccess)
            this.OssPrivateAccess = obj;
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.RemoteAuthentication) {
            let obj = new RemoteAuthentication();
            obj.deserialize(params.RemoteAuthentication)
            this.RemoteAuthentication = obj;
        }

        if (params.ShareCname) {
            let obj = new ShareCname();
            obj.deserialize(params.ShareCname)
            this.ShareCname = obj;
        }

    }
}

/**
 * Domain name tag configuration
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * Path cache configuration follows the origin server configuration.
 * @class
 */
class CacheConfigFollowOrigin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Follow origin server switch configuration
on: enable
off: disable
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * MaxAge rules configuration
 * @class
 */
class MaxAgeRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule types:
`all`: effective for all files.
`file`: effective for specified file suffixes.
`directory`: effective for specified paths.
`path`: effective for specified absolute paths.
`index`: effective for specified homepages.
         * @type {string || null}
         */
        this.MaxAgeType = null;

        /**
         * Content for each `MaxAgeType`:
For `all`, enter a wildcard `*`.
For `file`, enter a suffix, e.g., `jpg` or `txt`.
For `directory`, enter a path, e.g., `/xxx/test/`.
For `path`, enter an absolute path, e.g., `/xxx/test.html`.
For `index`, enter a forward slash `/`.
Note: the rule `all` cannot be deleted. It follows origin by default and can be modified.
         * @type {Array.<string> || null}
         */
        this.MaxAgeContents = null;

        /**
         * MaxAge time (in seconds)
Note: the value `0` means not to cache.
         * @type {number || null}
         */
        this.MaxAgeTime = null;

        /**
         * Whether to follow the origin server. Valid values: `on` and `off`. If it's on, `MaxAgeTime` is ignored.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FollowOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxAgeType = 'MaxAgeType' in params ? params.MaxAgeType : null;
        this.MaxAgeContents = 'MaxAgeContents' in params ? params.MaxAgeContents : null;
        this.MaxAgeTime = 'MaxAgeTime' in params ? params.MaxAgeTime : null;
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;

    }
}

/**
 * Timestamp hotlink protection advanced configuration mode E
 * @class
 */
class AdvancedAuthenticationTypeE extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key used for signature calculation, allowing 6 to 32 bytes of letters and digits.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Signature field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * ACL signature field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AclSignParam = null;

        /**
         * Start time field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTimeParam = null;

        /**
         * Expiration time field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTimeParam = null;

        /**
         * Time format (dec)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.AclSignParam = 'AclSignParam' in params ? params.AclSignParam : null;
        this.StartTimeParam = 'StartTimeParam' in params ? params.StartTimeParam : null;
        this.ExpireTimeParam = 'ExpireTimeParam' in params ? params.ExpireTimeParam : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;

    }
}

/**
 * DescribeCertDomains request structure.
 * @class
 */
class DescribeCertDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64-encoded string of certificate in PEM format
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * Managed certificate ID. `Cert` and `CertId` cannot be both empty. If they’re both filled in, `CerID` prevails.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Product of the domain name, either `cdn` (default) or `ecdn`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Timestamp hotlink protection advanced authentication configuration mode F (TypeF)
 * @class
 */
class AdvancedAuthenticationTypeF extends  AbstractModel {
    constructor(){
        super();

        /**
         * Signature field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * Time field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * Transaction field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransactionParam = null;

        /**
         * CMK used for signature calculation, allowing 6 to 32 bytes of letters and digits.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Alternative key used for signature calculation, which is used after the CMK fails in authentication. It allows 6 to 32 bytes of letters and digits.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.TransactionParam = 'TransactionParam' in params ? params.TransactionParam : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.BackupSecretKey = 'BackupSecretKey' in params ? params.BackupSecretKey : null;

    }
}

/**
 * Timestamp hotlink protection advanced configuration mode A
 * @class
 */
class AdvancedAuthenticationTypeA extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key used for signature calculation, allowing 6 to 32 bytes of letters and digits.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Signature field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * Time field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * Expiration time in seconds
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * Whether the expiration time parameter is required
         * @type {boolean || null}
         */
        this.ExpireTimeRequired = null;

        /**
         * URL composition, e.g., `${private_key}${schema}${host}${full_uri}`.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Time format. Valid values: dec (decimal), hex (hexadecimal).
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Status code returned when the authentication failed
         * @type {number || null}
         */
        this.FailCode = null;

        /**
         * Status code returned when the URL expired
         * @type {number || null}
         */
        this.ExpireCode = null;

        /**
         * List of URLs to be authenticated
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * Reserved field
         * @type {number || null}
         */
        this.Transformation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ExpireTimeRequired = 'ExpireTimeRequired' in params ? params.ExpireTimeRequired : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.FailCode = 'FailCode' in params ? params.FailCode : null;
        this.ExpireCode = 'ExpireCode' in params ? params.ExpireCode : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.Transformation = 'Transformation' in params ? params.Transformation : null;

    }
}

/**
 * (Disused) Advanced cache validity configuration. You can use `RuleCache` instead.
 * @class
 */
class AdvancedCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache expiration rule
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AdvanceCacheRule> || null}
         */
        this.CacheRules = null;

        /**
         * Forced cache configuration
on: enabled
off: disabled
When this is enabled, if the origin server returns no-cache, no-store headers, node caching will still be performed according to the cache expiration rules.
This is disabled by default
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

        /**
         * Whether to cache the header and body on cache nodes if the origin server returns the header `Set-Cookie`.
on: Enable; do not cache the header and body.
off: Disable; follow the custom cache rules of cache nodes.
It is disabled by default.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IgnoreSetCookie = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CacheRules) {
            this.CacheRules = new Array();
            for (let z in params.CacheRules) {
                let obj = new AdvanceCacheRule();
                obj.deserialize(params.CacheRules[z]);
                this.CacheRules.push(obj);
            }
        }
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;
        this.IgnoreSetCookie = 'IgnoreSetCookie' in params ? params.IgnoreSetCookie : null;

    }
}

/**
 * Timestamp hotlink protection advanced configuration mode C
 * @class
 */
class AdvancedAuthenticationTypeC extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access key
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * Authentication key
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * Timestamp hotlink protection advanced configuration mode B
 * @class
 */
class AdvancedAuthenticationTypeB extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alpha key name
         * @type {string || null}
         */
        this.KeyAlpha = null;

        /**
         * Beta key name
         * @type {string || null}
         */
        this.KeyBeta = null;

        /**
         * Gamma key name
         * @type {string || null}
         */
        this.KeyGamma = null;

        /**
         * Signature field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * Time field name in the URI string, starting with a letter, and consisting of letters, digits, and underscores.
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * Expiration time in seconds
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * Time format. Valid values: dec (decimal), hex (hexadecimal).
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Status code returned when the authentication failed
         * @type {number || null}
         */
        this.FailCode = null;

        /**
         * Status code returned when the URL expired
         * @type {number || null}
         */
        this.ExpireCode = null;

        /**
         * List of URLs to be authenticated
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyAlpha = 'KeyAlpha' in params ? params.KeyAlpha : null;
        this.KeyBeta = 'KeyBeta' in params ? params.KeyBeta : null;
        this.KeyGamma = 'KeyGamma' in params ? params.KeyGamma : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.FailCode = 'FailCode' in params ? params.FailCode : null;
        this.ExpireCode = 'ExpireCode' in params ? params.ExpireCode : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

/**
 * Image optimization - `WebpAdapter` configuration
 * @class
 */
class WebpAdapter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch. Valid values: on, off
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * StartCdnDomain request structure.
 * @class
 */
class StartCdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
The domain name status should be `Disabled`
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * WebSocket configuration.
 * @class
 */
class WebSocket extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable custom WebSocket timeout setting. When it’s `off`: WebSocket connection is supported, and the default timeout period is 15 seconds. To change the timeout period, please set it to `on`.

* WebSocket is now only available for beta users. To use it, please submit a ticket.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Sets the timeout period in seconds. Maximum value: 65.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Timeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

    }
}

/**
 * Mapping between a name and an ID
 * @class
 */
class MapInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Object ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Object name
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeCertDomains response structure.
 * @class
 */
class DescribeCertDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain names connected to CDN
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * List of CDN domain names with certificates configured
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CertifiedDomains = null;

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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.CertifiedDomains = 'CertifiedDomains' in params ? params.CertifiedDomains : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bot configuration
 * @class
 */
class ScdnBotConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Bot cookie policy
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<BotCookie> || null}
         */
        this.BotCookie = null;

        /**
         * Bot JS policy
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<BotJavaScript> || null}
         */
        this.BotJavaScript = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.BotCookie) {
            this.BotCookie = new Array();
            for (let z in params.BotCookie) {
                let obj = new BotCookie();
                obj.deserialize(params.BotCookie[z]);
                this.BotCookie.push(obj);
            }
        }

        if (params.BotJavaScript) {
            this.BotJavaScript = new Array();
            for (let z in params.BotJavaScript) {
                let obj = new BotJavaScript();
                obj.deserialize(params.BotJavaScript[z]);
                this.BotJavaScript.push(obj);
            }
        }

    }
}

/**
 * Timestamp hotlink protection mode D configuration
The access URL format of timestamp hotlink protection mode D is as follows: http://DomainName/FileName?sign=md5hash&t=timestamp
Here, timestamp is a decimal or hexadecimal timestamp in Unix format;
md5hash: MD5 (custom key + file path + timestamp)
 * @class
 */
class AuthenticationTypeD extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key for signature calculation
Only digits, upper and lower-case letters are allowed. Length limit: 6-32 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Signature expiration time
Unit: second. The maximum value is 630720000.
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * File extension list settings determining if authentication should be performed
If it contains an asterisk (*), this indicates all files.
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * allowlist: indicates that all file types apart from the FileExtensions list are authenticated
blacklist: indicates that only the file types in the FileExtensions list are authenticated
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * Signature parameter name
Only upper and lower-case letters, digits, and underscores (_) are allowed. It cannot start with a digit. Length limit: 1-100 characters.
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * Timestamp parameter name
Only upper and lower-case letters, digits, and underscores (_) are allowed. It cannot start with a digit. Length limit: 1-100 characters.
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * Timestamp settings
dec: decimal
hex: hexadecimal
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Backup key, which is used to calculate a signature.
6-32 characters. Only digits and letters are allowed. 
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.BackupSecretKey = 'BackupSecretKey' in params ? params.BackupSecretKey : null;

    }
}

/**
 * Timestamp hotlink protection mode C configuration
The access URL format of timestamp hotlink protection mode C is as follows: http://DomainName/md5hash/timestamp/FileName
Here, timestamp is a hexadecimal timestamp in Unix format;
md5hash: MD5 (custom key + file path + timestamp)
 * @class
 */
class AuthenticationTypeC extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key for signature calculation
Only digits, upper and lower-case letters are allowed. Length limit: 6-32 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Signature expiration time
Unit: second. The maximum value is 630720000.
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * File extension list settings determining if authentication should be performed
If it contains an asterisk (*), this indicates all files.
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * allowlist: indicates that all file types apart from the FileExtensions list are authenticated
blacklist: indicates that only the file types in the FileExtensions list are authenticated
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * Timestamp settings
dec: decimal
hex: hexadecimal
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * Backup key, which is used to calculate a signature.
6-32 characters. Only digits and letters are allowed. 
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.BackupSecretKey = 'BackupSecretKey' in params ? params.BackupSecretKey : null;

    }
}

/**
 * Timestamp hotlink protection mode B configuration (mode B is being upgraded and is currently not supported)
 * @class
 */
class AuthenticationTypeB extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key for signature calculation
Only digits, upper and lower-case letters are allowed. Length limit: 6-32 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Signature expiration time
Unit: second. The maximum value is 630720000.
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * File extension list settings determining if authentication should be performed
If it contains an asterisk (*), this indicates all files.
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * allowlist: indicates that all file types apart from the FileExtensions list are authenticated
blacklist: indicates that only the file types in the FileExtensions list are authenticated
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * Backup key, which is used to calculate a signature.
6-32 characters. Only digits and letters are allowed. 
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.BackupSecretKey = 'BackupSecretKey' in params ? params.BackupSecretKey : null;

    }
}

/**
 * Timestamp hotlink protection mode A configuration
The access URL format of timestamp hotlink protection mode A is as follows: http://DomainName/Filename?sign=timestamp-rand-uid-md5hash
Here, timestamp is a decimal timestamp in Unix format;
rand is a random string composed of 0-100 characters, including digits, upper and lower-case letters.
uid is 0;
md5hash: MD5 (file path-timestamp-rand-uid-custom key)

 * @class
 */
class AuthenticationTypeA extends  AbstractModel {
    constructor(){
        super();

        /**
         * The key for signature calculation
Only digits, upper and lower-case letters are allowed. Length limit: 6-32 characters.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Signature parameter name
Only upper and lower-case letters, digits, and underscores (_) are allowed. It cannot start with a digit. Length limit: 1-100 characters.
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * Signature expiration time
Unit: second. The maximum value is 630720000.
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * File extension list settings determining if authentication should be performed
If it contains an asterisk (*), this indicates all files.
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * allowlist: indicates that all file types apart from the FileExtensions list are authenticated
blacklist: indicates that only the file types in the FileExtensions list are authenticated
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * Backup key, which is used to calculate a signature.
6-32 characters. Only digits and letters are allowed. 
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BackupSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.BackupSecretKey = 'BackupSecretKey' in params ? params.BackupSecretKey : null;

    }
}

/**
 * Origin-pull authentication advanced configuration TypeA
 * @class
 */
class OriginAuthenticationTypeA extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key used for signature calculation, allowing 6 to 32 bytes of letters and digits.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * DescribePushTasks response structure.
 * @class
 */
class DescribePushTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prefetch history
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PushTask> || null}
         */
        this.PushLogs = null;

        /**
         * Total number of tasks, which is used for pagination.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.PushLogs) {
            this.PushLogs = new Array();
            for (let z in params.PushLogs) {
                let obj = new PushTask();
                obj.deserialize(params.PushLogs[z]);
                this.PushLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * This API is used to query an object and its origin-pull details
 * @class
 */
class ResourceOriginData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name, which is classified as follows based on different query conditions:
A specific domain name: This indicates the details of this domain name
multiDomains: This indicates the aggregate details of multiple domain names
Project ID: This displays the ID of the specifically queried project
all: This indicates the details at the account level
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Origin-pull data details
         * @type {Array.<CdnData> || null}
         */
        this.OriginData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.OriginData) {
            this.OriginData = new Array();
            for (let z in params.OriginData) {
                let obj = new CdnData();
                obj.deserialize(params.OriginData[z]);
                this.OriginData.push(obj);
            }
        }

    }
}

/**
 * Node IP information
 * @class
 */
class IpStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Node region
         * @type {string || null}
         */
        this.District = null;

        /**
         * Node ISP
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * Node city
         * @type {string || null}
         */
        this.City = null;

        /**
         * Node status
online: the node is online; scheduling service running
offline: the node is offline
         * @type {string || null}
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.District = 'District' in params ? params.District : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.City = 'City' in params ? params.City : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * AddCdnDomain response structure.
 * @class
 */
class AddCdnDomainResponse extends  AbstractModel {
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
 * Domain name region configuration
 * @class
 */
class DomainAreaConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Region list, where the element can be `mainland/overseas`
         * @type {Array.<string> || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * HTTPS acceleration server certificate configuration:
+ Supports deployment with certificates that are being hosted by the SSL Certificate Services
+ Supports uploading certificates of PEM format for deployment
Note: when uploading certificates of PEM format, the Base64 encoding is required.
 * @class
 */
class ServerCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server certificate ID, which is auto-generated when the certificate is added to Tencent Cloud SSL Certificates
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Server certificate name
This is auto-generated when the certificate is being hosted by the SSL Certificate Service
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Server certificate information
This is required when uploading an external certificate, which should contain the complete certificate chain.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * Server key information
This is required when uploading an external certificate.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * Certificate expiration time
Can be left blank when used as an input parameter
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Certificate issuance time
Can be left blank when used as an input parameter
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * Certificate remarks
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Certificate source
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.From = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.From = 'From' in params ? params.From : null;

    }
}

/**
 * Access control rule
 * @class
 */
class AccessControlRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * requestHeader: access control over request header
url: access control over access URL
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Blocked content
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleContent = null;

        /**
         * on: regular match
off: exact match
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * This parameter is required only if `RuleType` is `requestHeader`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleHeader = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleContent = 'RuleContent' in params ? params.RuleContent : null;
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.RuleHeader = 'RuleHeader' in params ? params.RuleHeader : null;

    }
}

/**
 * HTTP header setting rules. Up to 100 entries can be set.
 * @class
 */
class HttpHeaderPathRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP header setting methods
`set`: sets a value for an existing header parameter, a new header parameter, or multiple header parameters. Multiple header parameters will be merged into one.
`del`: deletes a header parameter.
`add`: adds a header parameter. By default, you can repeat the same action to add the same header parameter, which may affect browser response. Please consider the set operation first.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HeaderMode = null;

        /**
         * HTTP header name. Up to 100 characters can be set.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HeaderName = null;

        /**
         * HTTP header value. Up to 1000 characters can be set.
Not required when Mode is del
Required when Mode is add/set
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.HeaderValue = null;

        /**
         * Rule types:
`all`: effective for all files
`file`: effective for specified file suffixes
`directory`: effective for specified paths
`path`: effective for specified absolute paths
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Content for each RuleType:
For `all`, enter an asterisk (*).
For `file`, enter the suffix, such as jpg, txt.
For `directory`, enter the path, such as /xxx/test/.
For `path`, enter the corresponding absolute path, such as /xxx/test.html.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeaderMode = 'HeaderMode' in params ? params.HeaderMode : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;
        this.HeaderValue = 'HeaderValue' in params ? params.HeaderValue : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

/**
 * DisableCaches request structure.
 * @class
 */
class DisableCachesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of URLs to be blocked (URLs must contain `http://` or `https://`).
Up to 100 entries can be submitted at a time and 3,000 entries per day.
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
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * Precise access control match rule
 * @class
 */
class ScdnAclRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword
         * @type {string || null}
         */
        this.MatchKey = null;

        /**
         * Logical operator. Valid values:
         * @type {string || null}
         */
        this.LogiOperator = null;

        /**
         * Matched value
         * @type {string || null}
         */
        this.MatchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchKey = 'MatchKey' in params ? params.MatchKey : null;
        this.LogiOperator = 'LogiOperator' in params ? params.LogiOperator : null;
        this.MatchValue = 'MatchValue' in params ? params.MatchValue : null;

    }
}

/**
 * Cache expiration rules configuration
 * @class
 */
class SimpleCacheRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule types:
`all`: effective for all files
`file`: effective for specified file suffixes
`directory`: effective for specified paths
`path`: effective for specified absolute paths
index: home page
         * @type {string || null}
         */
        this.CacheType = null;

        /**
         * Content for each CacheType:
Enter `*` for `all`
Enter an extension for `file`, such as `jpg` or `txt`
Enter a path for `directory`, such as `/xxx/test`
Enter an absolute path for `path`, such as `/xxx/test.html`
Enter `/` for `index`
         * @type {Array.<string> || null}
         */
        this.CacheContents = null;

        /**
         * Cache expiration time settings
Unit: second. The maximum value is 365 days.
         * @type {number || null}
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CacheType = 'CacheType' in params ? params.CacheType : null;
        this.CacheContents = 'CacheContents' in params ? params.CacheContents : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * DisableClsLogTopic response structure.
 * @class
 */
class DisableClsLogTopicResponse extends  AbstractModel {
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
 * `HSTS` configuration.
 * @class
 */
class Hsts extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable. Valid values: on, off.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * `MaxAge` value.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxAge = null;

        /**
         * Whether to include subdomain names. Valid values: on, off.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncludeSubDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxAge = 'MaxAge' in params ? params.MaxAge : null;
        this.IncludeSubDomains = 'IncludeSubDomains' in params ? params.IncludeSubDomains : null;

    }
}

/**
 * DescribeIpStatus request structure.
 * @class
 */
class DescribeIpStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acceleration domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Node type.
edge: edge server
last: intermediate server
If this parameter is left empty, edge server information will be returned by default
         * @type {string || null}
         */
        this.Layer = null;

        /**
         * Region to be queried.
mainland: domestic nodes
overseas: overseas nodes
global: global nodes
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Whether to return a value as an IP range
         * @type {boolean || null}
         */
        this.Segment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Layer = 'Layer' in params ? params.Layer : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Segment = 'Segment' in params ? params.Segment : null;

    }
}

/**
 * Complete acceleration domain configuration information
 * @class
 */
class DetailDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Tencent Cloud account ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Acceleration domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * CNAME address of domain name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Acceleration service status
rejected: the domain name is rejected due to expiration/deregistration of its ICP filing
processing: deploying
online: activated
offline: disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Project ID, which can be viewed on the Tencent Cloud project management page
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Acceleration domain name service type
`web`: Webpage file downloads
`download`: Large file downloads
`media`: Audio and video on demand acceleration
`hybrid`: Dynamic and static content acceleration
`dynamic`: Dynamic content acceleration
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Domain name creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of domain name
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Origin server configuration
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * IP blacklist/whitelist configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP access frequency limit configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * Status code cache configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * Smart compression configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * Bandwidth cap configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * Range GETs configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * 301/302 origin-pull follow-redirect configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * Configuration of custom error page
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * Custom request header configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * Custom response header configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * Single-link downstream speed limit configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * Configuration of cache with/without parameter
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Origin server header cache configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * Video dragging configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

        /**
         * Node cache expiration rule configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * Cross-border linkage optimization configuration (in beta)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * HTTPS acceleration configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Timestamp hotlink protection configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * SEO configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * Domain name block status
normal: normal
overdue: the domain name has been disabled due to account arrears. The acceleration service can be resumed after the account is topped up.
malicious: the acceleration service has been forcibly disabled due to detection of malicious behavior.
ddos: the acceleration service has been disabled due to large-scale DDoS attacks to the domain name
idle: no operations or data has been detected for more than 90 days. The domain name is determined to be inactive which automatically disables the acceleration service. You can restart the service.
unlicensed: the acceleration service has been automatically disabled as the domain name has no ICP filing or its ICP filing is deregistered. Service can be resumed after an ICP filing is obtained.
capping: the configured upper limit for bandwidth has been reached.
readonly: the domain name has a special configuration and has been locked.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Disable = null;

        /**
         * Access protocol forced redirect configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Referer hotlink protection configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * Browser cache expiration rule configuration (in beta)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * IPv6 origin-pull configuration (in beta)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * Backwards compatibility configuration (compatibility field for internal use)
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Compatibility || null}
         */
        this.Compatibility = null;

        /**
         * Region-specific configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SpecificConfig || null}
         */
        this.SpecificConfig = null;

        /**
         * Acceleration region
mainland: acceleration in Mainland China
overseas: acceleration outside Mainland China
global: global acceleration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Domain name lock status
normal: not locked
mainland: locked in Mainland China
overseas: locked outside Mainland China
global: locked globally
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Readonly = null;

        /**
         * Origin-pull timeout configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OriginPullTimeout || null}
         */
        this.OriginPullTimeout = null;

        /**
         * S3 bucket origin access authentication configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AwsPrivateAccess || null}
         */
        this.AwsPrivateAccess = null;

        /**
         * SCDN configuration
         * @type {SecurityConfig || null}
         */
        this.SecurityConfig = null;

        /**
         * Image Optimization configuration
         * @type {ImageOptimization || null}
         */
        this.ImageOptimization = null;

        /**
         * `UA` blocklist/allowlist configuration
         * @type {UserAgentFilter || null}
         */
        this.UserAgentFilter = null;

        /**
         * Access control
         * @type {AccessControl || null}
         */
        this.AccessControl = null;

        /**
         * Whether to support advanced configuration items
on: supported
off: not supported
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Advance = null;

        /**
         * URL redirect configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {UrlRedirect || null}
         */
        this.UrlRedirect = null;

        /**
         * Access port configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.AccessPort = null;

        /**
         * Tag configuration
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * Timestamp hotlink protection advanced configuration (allowlist feature)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvancedAuthentication || null}
         */
        this.AdvancedAuthentication = null;

        /**
         * Origin-pull authentication advanced configuration (allowlist feature)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {OriginAuthentication || null}
         */
        this.OriginAuthentication = null;

        /**
         * IPv6 access configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Ipv6Access || null}
         */
        this.Ipv6Access = null;

        /**
         * Advanced configuration settings
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AdvanceConfig> || null}
         */
        this.AdvanceSet = null;

        /**
         * Offline cache (only available to beta users)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * Merging origin-pull requests (only available to beta users)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {OriginCombine || null}
         */
        this.OriginCombine = null;

        /**
         * POST request configuration item
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {PostSize || null}
         */
        this.PostMaxSize = null;

        /**
         * QUIC configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * Access authentication for OSS origin
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {OssPrivateAccess || null}
         */
        this.OssPrivateAccess = null;

        /**
         * WebSocket configuration.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * Remote authentication configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {RemoteAuthentication || null}
         */
        this.RemoteAuthentication = null;

        /**
         * Shared CNAME configuration (only available to beta users)
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ShareCname || null}
         */
        this.ShareCname = null;

        /**
         * Rule engine
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {RuleEngine || null}
         */
        this.RuleEngine = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.Compatibility) {
            let obj = new Compatibility();
            obj.deserialize(params.Compatibility)
            this.Compatibility = obj;
        }

        if (params.SpecificConfig) {
            let obj = new SpecificConfig();
            obj.deserialize(params.SpecificConfig)
            this.SpecificConfig = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;

        if (params.OriginPullTimeout) {
            let obj = new OriginPullTimeout();
            obj.deserialize(params.OriginPullTimeout)
            this.OriginPullTimeout = obj;
        }

        if (params.AwsPrivateAccess) {
            let obj = new AwsPrivateAccess();
            obj.deserialize(params.AwsPrivateAccess)
            this.AwsPrivateAccess = obj;
        }

        if (params.SecurityConfig) {
            let obj = new SecurityConfig();
            obj.deserialize(params.SecurityConfig)
            this.SecurityConfig = obj;
        }

        if (params.ImageOptimization) {
            let obj = new ImageOptimization();
            obj.deserialize(params.ImageOptimization)
            this.ImageOptimization = obj;
        }

        if (params.UserAgentFilter) {
            let obj = new UserAgentFilter();
            obj.deserialize(params.UserAgentFilter)
            this.UserAgentFilter = obj;
        }

        if (params.AccessControl) {
            let obj = new AccessControl();
            obj.deserialize(params.AccessControl)
            this.AccessControl = obj;
        }
        this.Advance = 'Advance' in params ? params.Advance : null;

        if (params.UrlRedirect) {
            let obj = new UrlRedirect();
            obj.deserialize(params.UrlRedirect)
            this.UrlRedirect = obj;
        }
        this.AccessPort = 'AccessPort' in params ? params.AccessPort : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }

        if (params.AdvancedAuthentication) {
            let obj = new AdvancedAuthentication();
            obj.deserialize(params.AdvancedAuthentication)
            this.AdvancedAuthentication = obj;
        }

        if (params.OriginAuthentication) {
            let obj = new OriginAuthentication();
            obj.deserialize(params.OriginAuthentication)
            this.OriginAuthentication = obj;
        }

        if (params.Ipv6Access) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6Access)
            this.Ipv6Access = obj;
        }

        if (params.AdvanceSet) {
            this.AdvanceSet = new Array();
            for (let z in params.AdvanceSet) {
                let obj = new AdvanceConfig();
                obj.deserialize(params.AdvanceSet[z]);
                this.AdvanceSet.push(obj);
            }
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.OriginCombine) {
            let obj = new OriginCombine();
            obj.deserialize(params.OriginCombine)
            this.OriginCombine = obj;
        }

        if (params.PostMaxSize) {
            let obj = new PostSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

        if (params.OssPrivateAccess) {
            let obj = new OssPrivateAccess();
            obj.deserialize(params.OssPrivateAccess)
            this.OssPrivateAccess = obj;
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.RemoteAuthentication) {
            let obj = new RemoteAuthentication();
            obj.deserialize(params.RemoteAuthentication)
            this.RemoteAuthentication = obj;
        }

        if (params.ShareCname) {
            let obj = new ShareCname();
            obj.deserialize(params.ShareCname)
            this.ShareCname = obj;
        }

        if (params.RuleEngine) {
            let obj = new RuleEngine();
            obj.deserialize(params.RuleEngine)
            this.RuleEngine = obj;
        }

    }
}

/**
 * Rule engine configuration
 * @class
 */
class RuleEngine extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to enable rule engine
`on`: Enable
`off`: Disable
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Rule
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * GetDisableRecords response structure.
 * @class
 */
class GetDisableRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Blocking history
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<UrlRecord> || null}
         */
        this.UrlRecordList = null;

        /**
         * Total number of tasks, which is used for pagination
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.UrlRecordList) {
            this.UrlRecordList = new Array();
            for (let z in params.UrlRecordList) {
                let obj = new UrlRecord();
                obj.deserialize(params.UrlRecordList[z]);
                this.UrlRecordList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IPv6 access configuration
 * @class
 */
class Ipv6Access extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the IPv6 access feature for a domain name. Valid values: `on` and `off`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Custom response header configuration. This is disabled by default.
 * @class
 */
class ResponseHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * Custom response header switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom response header rules
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<HttpHeaderPathRule> || null}
         */
        this.HeaderRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.HeaderRules) {
            this.HeaderRules = new Array();
            for (let z in params.HeaderRules) {
                let obj = new HttpHeaderPathRule();
                obj.deserialize(params.HeaderRules[z]);
                this.HeaderRules.push(obj);
            }
        }

    }
}

/**
 * CDN node activation and deactivation history
 * @class
 */
class CdnIpHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type
online: node is online
offline: node is offline
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Operation time corresponding to operation type
If this value is null, there are no status change records
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Datetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Datetime = 'Datetime' in params ? params.Datetime : null;

    }
}

/**
 * Aggregate values of details; each metric has different aggregation methods based on its characteristics
 * @class
 */
class SummarizedData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Aggregation method, which can be:
sum: aggregate summation
max: maximum value; in bandwidth mode, the peak bandwidth is calculated based on the aggregate data with 5-minute granularity.
avg: average value
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Aggregate data value
         * @type {number || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * UpdateScdnDomain request structure.
 * @class
 */
class UpdateScdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * WAF configuration
         * @type {ScdnWafConfig || null}
         */
        this.Waf = null;

        /**
         * Custom defense policy configuration
         * @type {ScdnAclConfig || null}
         */
        this.Acl = null;

        /**
         * CC attack defense configurations. CC attack defense is enabled by default.
         * @type {ScdnConfig || null}
         */
        this.CC = null;

        /**
         * DDoS defense configuration. DDoS defense is enabled by default.
         * @type {ScdnDdosConfig || null}
         */
        this.Ddos = null;

        /**
         * Bot defense configuration
         * @type {ScdnBotConfig || null}
         */
        this.Bot = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Waf) {
            let obj = new ScdnWafConfig();
            obj.deserialize(params.Waf)
            this.Waf = obj;
        }

        if (params.Acl) {
            let obj = new ScdnAclConfig();
            obj.deserialize(params.Acl)
            this.Acl = obj;
        }

        if (params.CC) {
            let obj = new ScdnConfig();
            obj.deserialize(params.CC)
            this.CC = obj;
        }

        if (params.Ddos) {
            let obj = new ScdnDdosConfig();
            obj.deserialize(params.Ddos)
            this.Ddos = obj;
        }

        if (params.Bot) {
            let obj = new ScdnBotConfig();
            obj.deserialize(params.Bot)
            this.Bot = obj;
        }

    }
}

/**
 * UpdatePayType request structure.
 * @class
 */
class UpdatePayTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing region, which can be mainland or overseas.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Billing mode, which can be flux or bandwidth.
         * @type {string || null}
         */
        this.PayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.PayType = 'PayType' in params ? params.PayType : null;

    }
}

/**
 * ManageClsTopicDomains request structure.
 * @class
 */
class ManageClsTopicDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Log topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Connection channel. Default value: cdn
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * Domain name region configuration. Note: if this field is empty, it means to unbind all domain names from the corresponding topic
         * @type {Array.<DomainAreaConfig> || null}
         */
        this.DomainAreaConfigs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

        if (params.DomainAreaConfigs) {
            this.DomainAreaConfigs = new Array();
            for (let z in params.DomainAreaConfigs) {
                let obj = new DomainAreaConfig();
                obj.deserialize(params.DomainAreaConfigs[z]);
                this.DomainAreaConfigs.push(obj);
            }
        }

    }
}

/**
 * WAF configuration
 * @class
 */
class ScdnWafConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable WAF. Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * WAF protection mode. Valid values: `intercept` and `observe`. Default value: `intercept`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Redirection error page
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ScdnErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * Whether to enable Web shell blocking. Valid values: `on` and `off`. Default value: `off`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.WebShellSwitch = null;

        /**
         * Attack blocking rules
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ScdnWafRule> || null}
         */
        this.Rules = null;

        /**
         * WAF rule level. Valid values: 100, 200, and 300.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Level = null;

        /**
         * WAF sub-rule switch
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<WafSubRuleStatus> || null}
         */
        this.SubRuleSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.ErrorPage) {
            let obj = new ScdnErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }
        this.WebShellSwitch = 'WebShellSwitch' in params ? params.WebShellSwitch : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ScdnWafRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Level = 'Level' in params ? params.Level : null;

        if (params.SubRuleSwitch) {
            this.SubRuleSwitch = new Array();
            for (let z in params.SubRuleSwitch) {
                let obj = new WafSubRuleStatus();
                obj.deserialize(params.SubRuleSwitch[z]);
                this.SubRuleSwitch.push(obj);
            }
        }

    }
}

/**
 * CreateScdnFailedLogTask request structure.
 * @class
 */
class CreateScdnFailedLogTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the failed task to retry
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Region. Valid values: `mainland` and `overseas`.
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Node cache expiration time configuration. There are two types of configuration:
+ Basic cache expiration rules configuration
+ Advanced cache expiration rules configuration
 * @class
 */
class Cache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Basic cache expiration time configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SimpleCache || null}
         */
        this.SimpleCache = null;

        /**
         * (Disused) Advanced cache validity configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AdvancedCache || null}
         */
        this.AdvancedCache = null;

        /**
         * Advanced path cache configuration
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<RuleCache> || null}
         */
        this.RuleCache = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SimpleCache) {
            let obj = new SimpleCache();
            obj.deserialize(params.SimpleCache)
            this.SimpleCache = obj;
        }

        if (params.AdvancedCache) {
            let obj = new AdvancedCache();
            obj.deserialize(params.AdvancedCache)
            this.AdvancedCache = obj;
        }

        if (params.RuleCache) {
            this.RuleCache = new Array();
            for (let z in params.RuleCache) {
                let obj = new RuleCache();
                obj.deserialize(params.RuleCache[z]);
                this.RuleCache.push(obj);
            }
        }

    }
}

/**
 * Access protocol forced redirect configuration. This is disabled by default.
 * @class
 */
class ForceRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access forced redirect configuration switch
on: enabled
off: disabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Access forced redirect types
http: forced HTTP redirect
https: forced HTTPS redirect
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RedirectType = null;

        /**
         * Status code returned for forced redirect 
Supports 301, 302.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RedirectStatusCode = null;

        /**
         * Whether to return the added header in forced redirection.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CarryHeaders = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RedirectType = 'RedirectType' in params ? params.RedirectType : null;
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;
        this.CarryHeaders = 'CarryHeaders' in params ? params.CarryHeaders : null;

    }
}

/**
 * DescribeOriginData request structure.
 * @class
 */
class DescribeOriginDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time, such as 2018-09-04 10:40:00; the returned result is later than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query end time is 2018-09-04 10:40:00 and the query time granularity is 1 hour, the time for the first returned entry will be 2018-09-04 10:00:00.
The gap between the start time and end time should be less than or equal to 90 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, such as 2018-09-04 10:40:00; the returned result is earlier than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query start time is 2018-09-04 10:40:00 and the query time granularity is 1 hour, the time for the last returned entry will be 2018-09-04 10:00:00.
The gap between the start time and end time should be less than or equal to 90 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the query metric, which can be:
flux: origin-pull traffic (in bytes)
bandwidth: origin-pull bandwidth (in bps)
request: number of origin-pull requests
failRequest: number of failed origin-pull requests
failRate: origin-pull failure rate (in %)
statusCode: origin-pull status code. The aggregate data for 2xx, 3xx, 4xx, and 5xx origin-pull status codes will be returned (in entries)
2xx: Returns the aggregate list of 2xx origin-pull status codes and the data for origin-pull status codes starting with 2 (in entries)
3xx: Returns the aggregate list of 3xx origin-pull status codes and the data for origin-pull status codes starting with 3 (in entries)
4xx: Returns the aggregate list of 4xx origin-pull status codes and the data for origin-pull status codes starting with 4 (in entries)
5xx: Returns the aggregate list of 5xx origin-pull status codes and the data for origin-pull status codes starting with 5 (in entries)
It is supported to specify a status code for query. The return will be empty if the status code has never been generated.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Specifies the list of domain names to be queried; up to 30 domain names can be queried at a time.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Project ID, which can be viewed [here](https://console.cloud.tencent.com/project)
If the domain name is not specified, the specified project will be queried. Up to 30 acceleration domain names can be queried at a time
If the domain name information is specified, the domain name will prevail
         * @type {number || null}
         */
        this.Project = null;

        /**
         * Time granularity; valid values:
`min`: data with 1-minute granularity is returned when the queried period is no longer than 24 hours. This value is not supported if the service region you want to query is outside Mainland China;
`5min`: data with 5-minute granularity is returned when the queried period is no longer than 31 days;
`hour`: data with 1-hour granularity is returned when the queried period is no longer than 31 days;
`day`: data with 1-day granularity is returned when the queried period is longer than 31 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The aggregate data for multiple domain names is returned by default (false) when multiple `Domains` are passed in.
You can set it to true to return the details for each Domain (the statusCode metric is currently not supported)
         * @type {boolean || null}
         */
        this.Detail = null;

        /**
         * Specifies a service region. If this value is left blank, CDN data within Mainland China will be queried.
`mainland`: specifies to query CDN data within Mainland China;
`overseas`: specifies to query CDN data outside Mainland China.
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Range GETs configuration which is enabled by default
 * @class
 */
class RangeOriginPull extends  AbstractModel {
    constructor(){
        super();

        /**
         * Range GETs configuration switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Range GETs configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RangeOriginPullRule> || null}
         */
        this.RangeRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.RangeRules) {
            this.RangeRules = new Array();
            for (let z in params.RangeRules) {
                let obj = new RangeOriginPullRule();
                obj.deserialize(params.RangeRules[z]);
                this.RangeRules.push(obj);
            }
        }

    }
}

/**
 * Details of URLs in violation
 * @class
 */
class ViolationUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Origin access URL of the resource in violation
         * @type {string || null}
         */
        this.RealUrl = null;

        /**
         * Snapshot path. This is used to display a snapshot of the content in violation on the console.
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * Current status of the resources in violation
forbid: blocked
release: unblocked
delay: processing delayed 
reject: appeal dismissed. The status is still blocked.
complain: appeal in process
         * @type {string || null}
         */
        this.UrlStatus = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RealUrl = 'RealUrl' in params ? params.RealUrl : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.UrlStatus = 'UrlStatus' in params ? params.UrlStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * SearchClsLog response structure.
 * @class
 */
class SearchClsLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query result
         * @type {ClsSearchLogs || null}
         */
        this.Logs = null;

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

        if (params.Logs) {
            let obj = new ClsSearchLogs();
            obj.deserialize(params.Logs)
            this.Logs = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Path-based origin-pull rules
 * @class
 */
class PathBasedOriginRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule types:
`file`: effective for files with specified suffixes.
`directory`: effective for specified paths.
`path`: effective for specified absolute paths.
`index`: effective for specified homepages.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Content for each `RuleType`:
For `file`, enter a suffix, e.g., `jpg` or `txt`.
For `directory`, enter a path, e.g., `/xxx/test/`.
For `path`, enter an absolute path, e.g., `/xxx/test.html`.
For `index`, enter a forward slash `/`.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * Origin server list. Domain names and IPv4 addresses are supported.
         * @type {Array.<string> || null}
         */
        this.Origin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.Origin = 'Origin' in params ? params.Origin : null;

    }
}

/**
 * PushUrlsCache request structure.
 * @class
 */
class PushUrlsCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of URLs. The protocol header such as "http://" or "https://" needs to be included.
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * Specifies the User-Agent header of an HTTP prefetch request when it is forwarded to the origin server
Default value: `TencentCdn`
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Destination region for the prefetch
`mainland`: prefetches resources to nodes within Mainland China
`overseas`: prefetches resources to nodes outside Mainland China
`global`: prefetches resources to global nodes
Default value: `mainland`. You can prefetch a URL to nodes in a region provided that CDN service has been enabled for the domain name in the URL in the region.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * If this parameter is `middle` or left empty, prefetch will be performed onto the intermediate node.
Note: resources prefetched outside the Chinese mainland will be cached to CDN nodes outside the Chinese mainland and the traffic generated will incur costs.
         * @type {string || null}
         */
        this.Layer = null;

        /**
         * Whether to recursively resolve the M3U8 index file and prefetch the TS shards in it.
Notes:
1. This feature requires that the M3U8 index file can be directly requested and obtained.
2. In the M3U8 index file, currently only the TS shards at the first to the third level can be recursively resolved.
3. Prefetching the TS shards obtained through recursive resolution consumes the daily prefetch quota. If the usage exceeds the quota, the feature will be disabled and TS shards will not be prefetched.
         * @type {boolean || null}
         */
        this.ParseM3U8 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Layer = 'Layer' in params ? params.Layer : null;
        this.ParseM3U8 = 'ParseM3U8' in params ? params.ParseM3U8 : null;

    }
}

/**
 * Specific configuration for domain names in the mainland China by region. UpdateDomainConfig API only supports modification of certain region configurations. A list of differences that may exist for older configurations will be provided for a compatibility check. The supported configuration list is as follows:
+ Authentication
+ BandwidthAlert
+ ErrorPage
+ IpFilter
+ Origin
+ Referer
 * @class
 */
class MainlandConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Timestamp hotlink protection configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * Bandwidth cap configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * Cache rules configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * Cache configurations.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Smart compression configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * Download speed limit configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * Error code redirect configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * 301 and 302 automatic origin-pull follow-redirect configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * Access protocol forced redirect configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * HTTPS configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * IP blocklist/allowlist configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP access limit configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * Browser cache rules configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * Origin server configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Cross-border optimization configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * Range GETs configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * Hotlink protection configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * Origin-pull request header configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * Origin server response header configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * Follows origin server cache header configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * SEO configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * Domain name service type. `web`: static acceleration; `download`: download acceleration; `media`: streaming media acceleration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * Status code cache configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * Video dragging configuration.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

        /**
         * Private access for S3 origin
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {AwsPrivateAccess || null}
         */
        this.AwsPrivateAccess = null;

        /**
         * Private access for OSS origin
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {OssPrivateAccess || null}
         */
        this.OssPrivateAccess = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

        if (params.AwsPrivateAccess) {
            let obj = new AwsPrivateAccess();
            obj.deserialize(params.AwsPrivateAccess)
            this.AwsPrivateAccess = obj;
        }

        if (params.OssPrivateAccess) {
            let obj = new OssPrivateAccess();
            obj.deserialize(params.OssPrivateAccess)
            this.OssPrivateAccess = obj;
        }

    }
}

/**
 * DescribeReportData request structure.
 * @class
 */
class DescribeReportDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query the start time in the format of `yyyy-MM-dd`
If the report type is `daily`, the start time and end time must be the same day.
If the report type is `weekly`, the start time must be Monday and the end time must be the Sunday of the same week.
If the report type is `monthly`, the start time must be the first day of the calendar month and the end time must be the last day of the same calendar month.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query the end time in the format of `yyyy-MM-dd`
If the report type is `daily`, the start time and end time must be of the same day.
If the report type is `weekly`, the start time must be Monday and the end time must be the Sunday of the same week.
If the report type is `monthly`, the start time must be the first day of the calendar month and the end time must be the last day of the same calendar month.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Report type
daily: daily report
weekly: weekly report (Monday to Sunday)
monthly: monthly report (calendar month)
         * @type {string || null}
         */
        this.ReportType = null;

        /**
         * Domain name acceleration region
mainland: in Mainland China
overseas: outside Mainland China
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of data entries. Default value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Filters by project ID
         * @type {number || null}
         */
        this.Project = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Project = 'Project' in params ? params.Project : null;

    }
}

/**
 * DescribePushTasks request structure.
 * @class
 */
class DescribePushTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting time, such as `2018-08-08 00:00:00`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as `2018-08-08 23:59:59`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies a task ID for your query.
You must specify either a task ID or a starting time.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Specifies a keyword for your query. Please enter a domain name or a complete URL beginning with `http(s)://`
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paged queries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specifies a region for your query:
`mainland`: within Mainland China
`overseas`: outside Mainland China
`global`: global
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Queries the status of a specified task
`fail`: prefetch failed
`done`: prefetch succeeded
`process`: prefetch in progress
`invalid`: invalid prefetch with 4XX/5XX status code returned from the origin server
         * @type {string || null}
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeUrlViolations request structure.
 * @class
 */
class DescribeUrlViolationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Specified domain name query
         * @type {Array.<string> || null}
         */
        this.Domains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

/**
 * Referer blocklist/allowlist configuration rules, which is effective for specific resources.
 * @class
 */
class RefererRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule types:
`all`: effective for all files
`file`: effective for specified file suffixes
`directory`: effective for specified paths
`path`: effective for specified absolute paths
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Content for each RuleType:
For `all`, enter an asterisk (*).
For `file`, enter the suffix, such as jpg, txt.
For `directory`, enter the path, such as /xxx/test/.
For `path`, enter the corresponding absolute path, such as /xxx/test.html.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * Referer configuration types
whitelist: allowlist
blacklist: blocklist
         * @type {string || null}
         */
        this.RefererType = null;

        /**
         * Referer content list
         * @type {Array.<string> || null}
         */
        this.Referers = null;

        /**
         * Whether to allow empty referer
true: allow empty referer
false: do not allow empty referer
         * @type {boolean || null}
         */
        this.AllowEmpty = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.RefererType = 'RefererType' in params ? params.RefererType : null;
        this.Referers = 'Referers' in params ? params.Referers : null;
        this.AllowEmpty = 'AllowEmpty' in params ? params.AllowEmpty : null;

    }
}

/**
 * SCDN custom CC rules
 * @class
 */
class ScdnCCRules extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule types:
`all`: effective for all files.
`file`: effective for specified file suffixes.
`directory`: effective for specified paths.
`path`: effective for specified absolute paths.
`index`: effective for web homepages and root directories.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Rule value (blocking condition)
         * @type {Array.<string> || null}
         */
        this.RuleValue = null;

        /**
         * IP access limit rule
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Detection granularity
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DetectionTime = null;

        /**
         * Frequency threshold
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FrequencyLimit = null;

        /**
         * Whether to block or redirect requests from suspicious IPs. Valid values: `on` and `off`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PunishmentSwitch = null;

        /**
         * Suspicious IP restriction duration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.PunishmentTime = null;

        /**
         * Action. Valid values: `intercept` and `redirect`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * The redirection target URL used when the `Action` is `redirect`
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleValue = 'RuleValue' in params ? params.RuleValue : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.DetectionTime = 'DetectionTime' in params ? params.DetectionTime : null;
        this.FrequencyLimit = 'FrequencyLimit' in params ? params.FrequencyLimit : null;
        this.PunishmentSwitch = 'PunishmentSwitch' in params ? params.PunishmentSwitch : null;
        this.PunishmentTime = 'PunishmentTime' in params ? params.PunishmentTime : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

    }
}

/**
 * Access limit configuration for a single IP of a single node. This is disabled by default. 
 * @class
 */
class IpFreqLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP access limit configuration switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Sets the limited number of requests per second
514 will be returned for requests that exceed the limit
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Qps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Qps = 'Qps' in params ? params.Qps : null;

    }
}

/**
 * CreateClsLogTopic request structure.
 * @class
 */
class CreateClsLogTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Connection channel. Default value: cdn
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * Domain name region information
         * @type {Array.<DomainAreaConfig> || null}
         */
        this.DomainAreaConfigs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

        if (params.DomainAreaConfigs) {
            this.DomainAreaConfigs = new Array();
            for (let z in params.DomainAreaConfigs) {
                let obj = new DomainAreaConfig();
                obj.deserialize(params.DomainAreaConfigs[z]);
                this.DomainAreaConfigs.push(obj);
            }
        }

    }
}

/**
 * Result of blocking/unblocking URLs
 * @class
 */
class CacheOptResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of succeeded URLs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.SuccessUrls = null;

        /**
         * List of failed URLs
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.FailUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessUrls = 'SuccessUrls' in params ? params.SuccessUrls : null;
        this.FailUrls = 'FailUrls' in params ? params.FailUrls : null;

    }
}

/**
 * StopCdnDomain request structure.
 * @class
 */
class StopCdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
The domain name status should be **Enabled**
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribeMapInfo response structure.
 * @class
 */
class DescribeMapInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of mappings.
         * @type {Array.<MapInfo> || null}
         */
        this.MapInfoList = null;

        /**
         * The relationship between server region ID and sub-region ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RegionMapRelation> || null}
         */
        this.ServerRegionRelation = null;

        /**
         * The relationship between client region ID and sub-region ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<RegionMapRelation> || null}
         */
        this.ClientRegionRelation = null;

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

        if (params.MapInfoList) {
            this.MapInfoList = new Array();
            for (let z in params.MapInfoList) {
                let obj = new MapInfo();
                obj.deserialize(params.MapInfoList[z]);
                this.MapInfoList.push(obj);
            }
        }

        if (params.ServerRegionRelation) {
            this.ServerRegionRelation = new Array();
            for (let z in params.ServerRegionRelation) {
                let obj = new RegionMapRelation();
                obj.deserialize(params.ServerRegionRelation[z]);
                this.ServerRegionRelation.push(obj);
            }
        }

        if (params.ClientRegionRelation) {
            this.ClientRegionRelation = new Array();
            for (let z in params.ClientRegionRelation) {
                let obj = new RegionMapRelation();
                obj.deserialize(params.ClientRegionRelation[z]);
                this.ClientRegionRelation.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMapInfo request structure.
 * @class
 */
class DescribeMapInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query type:
`isp`: queries ISP codes
`district`: queries codes of provinces (Mainland China) or countries/regions (outside Mainland China)
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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * EnableCaches response structure.
 * @class
 */
class EnableCachesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result list
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CacheOptResult || null}
         */
        this.CacheOptResult = null;

        /**
         * Task ID
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

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

        if (params.CacheOptResult) {
            let obj = new CacheOptResult();
            obj.deserialize(params.CacheOptResult)
            this.CacheOptResult = obj;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Configuration to retain query strings for this path
 * @class
 */
class RuleQueryString extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to use `QueryString` as part of `CacheKey`. Valid values: on, off
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * `includeCustom` will retain partial query strings
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Array of included/excluded query strings (separated by ';')
Note: this field may return null, indicating that no valid value is obtained.
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Precise access control rule
 * @class
 */
class AdvancedScdnAclRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword. Valid values:
`protocol`: HTTP protocol
`httpVersion`: HTTP version
`method`: request method
`ip`: requester IP
`ipAsn`: ASN of the requester IP
`ipCountry`: country/region of the requester IP
`ipArea`: region of the requester IP
`xForwardFor`: X-Forward-For request header
`directory`: path
`index`: homepage
`path`: full path of a file
`file`: file extension
`param`: request parameter
`referer`: Referer request header
`cookie`: Cookie request header
`userAgent`: User-Agent request header
`head`: custom request header
         * @type {string || null}
         */
        this.MatchKey = null;

        /**
         * Logical operator. Valid values:
`exclude`: the keyword is not included
`include`: the keyword is included
`notequal`: not the same as the keyword
`equal`: the same as the keyword
`matching`: the prefix is matched
`null`: empty or does not exist
         * @type {string || null}
         */
        this.LogicOperator = null;

        /**
         * Match value
When `MatchKey` is `protocol`,
Values: `HTTP` and `HTTPS`.

When `MatchKey` is `httpVersion`,
Values: `HTTP/1.0`, `HTTP/1.1`, `HTTP/1.2`, `HTTP/2`, and `HTTP/3`.

When `MatchKey` is `method`,
Values: `HEAD`, `GET`, `POST`, `PUT`, `OPTIONS`, `TRACE`, `DELETE`, `PATCH` and `CONNECT`.

When `MatchKey` is `ipCountry`, valid values include:
`OTHER`: other countries/regions
`VE`: Venezuela
`UY`: Uruguay
`SR`: Suriname
`PY`: Paraguay
`PE`: Peru
`GY`: Guyana
`EC`: Ecuador
`CO`: Colombia
`CL`: Chile
`BR`: Brazil
`BO`: Bolivia
`AR`: Argentina
`NZ`: New Zealand
`WS`: Samoa
`VU`: Vanuatu
`TV`: Tuvalu
`TO`: Tonga
`TK`: Tokelau
`PW`: Palau
`NU`: Niue
`NR`: Nauru
`KI`: Kiribati
`GU`: Guam
`FM`: Micronesia
`AU`: Australia
`US`: United States
`PR`: Puerto Rico
`DO`: Dominican Republic
`CR`: Costa Rica
`AS`: American Samoa
`AG`: Antigua and Barbuda
`PA`: Panama
`NI`: Nicaragua
`MX`: Mexico
`JM`: Jamaica
`HT`: Haiti
`HN`: Honduras
`GT`: Guatemala
`GP`: Guadeloupe
`GL`: Greenland
`GD`: Grenada
`CU`: Cuba
`CA`: Canada
`BZ`: Belize
`BS`: Bahamas
`BM`: Bermuda
`BB`: Barbados
`AW`: Aruba
`AI`: Anguilla
`VA`: Vatican
`SK`: Slovakia
`RU`: Russia
`GB`: United Kingdom
`CZ`: Czech Republic
`UA`: Ukraine
`TR`: Turkey
`SI`: Slovenia
`SE`: Sweden
`RS`: Republic of Serbia
`RO`: Romania
`PT`: Portugal
`PL`: Poland
`NO`: Norway
`NL`: Netherlands
`MT`: Malta
`MK`: Macedonia
`ME`: Montenegro
`MD`: Moldova
`MC`: Monaco
`LV`: Latvia
`LU`: Luxembourg
`LT`: Lithuania
`LI`: Liechtenstein
`KZ`: Kazakhstan
`IT`: Italy
`IS`: Iceland
`IE`: Ireland
`HU`: Hungary
`HR`: Croatia
`GR`: Greece
`GI`: Gibraltar
`GG`: Guernsey
`GE`: Georgia
`FR`: France
`FI`: Finland
`ES`: Spain
`EE`: Estonia
`DK`: Denmark
`DE`: Germany
`CY`: Cyprus
`CH`: Switzerland
`BY`: Belarus
`BG`: Bulgaria
`BE`: Belgium
`AZ`: Azerbaijan
`AT`: Austria
`AM`: Armenia
`AL`: Albania
`AD`: Andorra
`TL`: East Timor
`SY`: Syria
`SA`: Saudi Arabia
`PS`: Palestine
`LK`: Sri Lanka
`LK`: Sri Lanka
`KP`: North Korea
`KG`: Kyrgyzstan
`HK`: Hong Kong, China
`BN`: Brunei
`BD`: Bangladesh
`AE`: United Arab Emirates
`YE`: Yemen
`VN`: Vietnam
`UZ`: Uzbekistan
`TW`: Taiwan, China
`TM`: Turkmenistan
`TJ`: Tajikistan
`TH`: Thailand
`SG`: Singapore
`QA`: Qatar
`PK`: Pakistan
`PH`: Philippines
`OM`: Oman
`NP`: Nepal
`MY`: Malaysia
`MV`: Maldives
`MO`: Macao, China
`MN`: Mongolia
`MM`: Myanmar
`LB`: Lebanon
`KW`: Kuwait
`KR`: South Korea
`KH`: Cambodia
`JP`: Japan
`JO`: Jordan
`IR`: Iran
`IQ`: Iraq
`IN`: India
`IL`: Israel
`ID`: Indonesia
`CN`: China
`BT`: Bhutan
`BH`: Bahrain
`AF`: Afghanistan
`LY`: Libya
`CD`: Democratic Republic of the Congo
`RE`: La Réunion
`SZ`: Swaziland
`ZW`: Zimbabwe
`ZM`: Zambia
`YT`: Mayotte
`UG`: Uganda
`TZ`: Tanzania
`TN`: Tunisia
`TG`: Togo
`TD`: Chad
`SO`: Somalia
`SN`: Senegal
`SD`: Sudan
`SC`: Seychelles
`RW`: Rwanda
`NG`: Nigeria
`NE`: Niger
`NA`: Namibia
`MZ`: Mozambique
`MW`: Malawi
`MU`: Mauritius
`MR`: Mauritania
`ML`: Mali
`MG`: Madagascar
`MA`: Morocco
`LS`: Lesotho
`LR`: Liberia
`KM`: Comoros
`KE`: Kenya
`GN`: Guinea
`GM`: Gambia
`GH`: Ghana
`GA`: Gabon
`ET`: Ethiopia
`ER`: Eritrea
`EG`: Egypt
`DZ`: Algeria
`DJ`: Djibouti
`CM`: Cameroon
`CG`: Republic of the Congo
`BW`: Botswana
`BJ`: Benin
`BI`: Burundi
`AO`: Angola

When MatchKey is `ipArea`, valid values include:
`OTHER`: other areas
`AS`: Asia
`EU`: Europe
`AN`: Antarctica
`AF`: Africa
`OC`: Oceania
`NA`: North America
`SA`: South America

When MatchKey is `index`,
valid value is `/;/index.html`.
         * @type {Array.<string> || null}
         */
        this.MatchValue = null;

        /**
         * Whether to distinguish uppercase or lowercase letters. `true`: case sensitive; `false`: case insensitive.
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * This field is required when `MatchKey` is `param` or `cookie`. For `param`, it indicates a key value of the request parameter if MatchKey is `param`, while a key value of the Cookie request header if MatchKey is `cookie`.
         * @type {string || null}
         */
        this.MatchKeyParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchKey = 'MatchKey' in params ? params.MatchKey : null;
        this.LogicOperator = 'LogicOperator' in params ? params.LogicOperator : null;
        this.MatchValue = 'MatchValue' in params ? params.MatchValue : null;
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;
        this.MatchKeyParam = 'MatchKeyParam' in params ? params.MatchKeyParam : null;

    }
}

/**
 * DescribeIpVisit request structure.
 * @class
 */
class DescribeIpVisitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query start time, such as 2018-09-04 10:40:10; the returned result is later than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query start time is 2018-09-04 10:40:10 and the query time granularity is 5 minutes, the time for the first returned entry will be 2018-09-04 10:40:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Query end time, such as 2018-09-04 10:40:10; the returned result is earlier than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query start time is 2018-09-04 10:40:10 and the query time granularity is 5 minutes, the time for the last returned entry will be 2018-09-04 10:40:00.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the list of domain names to be queried; up to 30 domain names can be queried at a time.
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Specifies the project ID to be queried, which can be viewed [here](https://console.cloud.tencent.com/project)
Please note that if domain names are specified, this parameter will be ignored.
         * @type {number || null}
         */
        this.Project = null;

        /**
         * Time granularity, which can be:
5min: 5 minutes. If the query period is within 24 hours, `5min` will be used by default.
day: 1 day. If the query period is longer than 24 hours, `day` will be used by default.
         * @type {string || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * HTTP header setting rules.
 * @class
 */
class HttpHeaderRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP header setting method. Valid values: `add` (add header), `set` (set header) or `del` (delete header).
         * @type {string || null}
         */
        this.HeaderMode = null;

        /**
         * HTTP header name
         * @type {string || null}
         */
        this.HeaderName = null;

        /**
         * HTTP header value
         * @type {string || null}
         */
        this.HeaderValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeaderMode = 'HeaderMode' in params ? params.HeaderMode : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;
        this.HeaderValue = 'HeaderValue' in params ? params.HeaderValue : null;

    }
}

/**
 * Status code cache expiration time rule configuration
 * @class
 */
class StatusCodeCacheRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP status code
Supports 403 and 404 status codes
         * @type {string || null}
         */
        this.StatusCode = null;

        /**
         * Status code cache expiration time (in seconds)
         * @type {number || null}
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * HTTPS client certificate configuration
 * @class
 */
class ClientCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * Client Certificate
PEM format, requires Base64 encoding.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * Client certificate name
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * Certificate expiration time
When this is used as an input parameter, it can be left blank.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Certificate issuance time
When this is used as an input parameter, it can be left blank.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeployTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;

    }
}

/**
 * CC attack defense configuration
 * @class
 */
class ScdnConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom CC attack defense rule
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ScdnCCRules> || null}
         */
        this.Rules = null;

        /**
         * Advanced custom CC attack defense rule
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AdvancedCCRules> || null}
         */
        this.AdvancedRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ScdnCCRules();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

        if (params.AdvancedRules) {
            this.AdvancedRules = new Array();
            for (let z in params.AdvancedRules) {
                let obj = new AdvancedCCRules();
                obj.deserialize(params.AdvancedRules[z]);
                this.AdvancedRules.push(obj);
            }
        }

    }
}

/**
 * Details about a log package download link
 * @class
 */
class DomainLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting time of the log package
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the log package
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Log package download link
         * @type {string || null}
         */
        this.LogPath = null;

        /**
         * Acceleration region corresponding to the log package
`mainland`: within Mainland China
`overseas`: outside Mainland China
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Log package filename
         * @type {string || null}
         */
        this.LogName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.LogName = 'LogName' in params ? params.LogName : null;

    }
}

/**
 * GetDisableRecords request structure.
 * @class
 */
class GetDisableRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the URL to be queried
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Starting time, such as `2018-12-12 10:24:00`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time, such as 2018-12-14 10:24:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Current URL status
disable: The URL remains disabled, and accessing it will return an error 403
enable: The URL is enabled (unblocked) and can be normally accessed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paged queries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Task ID. The task ID and start time cannot be both left empty.
         * @type {string || null}
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
        this.Url = 'Url' in params ? params.Url : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * PurgeUrlsCache response structure.
 * @class
 */
class PurgeUrlsCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge task ID. URLs submitted in one request share a task ID.
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bot JS policy
 * @class
 */
class BotJavaScript extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Rule type, which can only be `file` currently.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Rule value. Valid values: `html` and `htm`.
         * @type {Array.<string> || null}
         */
        this.RuleValue = null;

        /**
         * Action. Valid values: `monitor`, `intercept`, `redirect`, and `captcha`.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Redirection target page
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * Update time
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleValue = 'RuleValue' in params ? params.RuleValue : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteClsLogTopic response structure.
 * @class
 */
class DeleteClsLogTopicResponse extends  AbstractModel {
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
 * DescribeBillingData response structure.
 * @class
 */
class DescribeBillingDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity, which is specified by the parameter passed in during the query:
min: 1-minute
5min: 5-minute
hour: 1-hour
day: 1-day
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Data details
         * @type {Array.<ResourceBillingData> || null}
         */
        this.Data = null;

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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceBillingData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableCaches response structure.
 * @class
 */
class DisableCachesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Submission result
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CacheOptResult || null}
         */
        this.CacheOptResult = null;

        /**
         * Task ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

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

        if (params.CacheOptResult) {
            let obj = new CacheOptResult();
            obj.deserialize(params.CacheOptResult)
            this.CacheOptResult = obj;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * A part of `CacheKey`
 * @class
 */
class SchemeKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to use the scheme as part of the cache key. Valid values: on, off
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Range GETs configuration
 * @class
 */
class RangeOriginPullRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether Range GETs is enabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Rule types:
`file`: effective for specified file suffixes.
`directory`: effective for specified paths.
`path`: effective for specified absolute paths.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Content for each `RuleType`:
For `file`, enter a suffix, e.g., `jpg` or `txt`.
For `directory`, enter a path, e.g., `/xxx/test/`.
For `path`, enter an absolute path, e.g., `/xxx/test.html`.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

/**
 * DescribeCdnIp response structure.
 * @class
 */
class DescribeCdnIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ownership details
         * @type {Array.<CdnIp> || null}
         */
        this.Ips = null;

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

        if (params.Ips) {
            this.Ips = new Array();
            for (let z in params.Ips) {
                let obj = new CdnIp();
                obj.deserialize(params.Ips[z]);
                this.Ips.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Advanced cache configuration rules
 * @class
 */
class AdvanceCacheRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule types:
`all`: effective for all files
`file`: effective for specified file suffixes
`directory`: effective for specified paths
`path`: effective for specified absolute paths
`default`: the cache rules when the origin server has not returned max-age
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CacheType = null;

        /**
         * Content for each CacheType:
For `all`, enter an asterisk (*).
For `file`, enter the suffix, such as jpg, txt.
For `directory`, enter the path, such as /xxx/test/.
For `path`, enter the corresponding absolute path, such as /xxx/test.html.
For `default`, enter "no max-age".
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.CacheContents = null;

        /**
         * Cache expiration time
Unit: second. The maximum value is 365 days.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CacheType = 'CacheType' in params ? params.CacheType : null;
        this.CacheContents = 'CacheContents' in params ? params.CacheContents : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * DescribeIpStatus response structure.
 * @class
 */
class DescribeIpStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node list
         * @type {Array.<IpStatus> || null}
         */
        this.Ips = null;

        /**
         * Total number of nodes
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Ips) {
            this.Ips = new Array();
            for (let z in params.Ips) {
                let obj = new IpStatus();
                obj.deserialize(params.Ips[z]);
                this.Ips.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Request header and request URL access control
 * @class
 */
class AccessControl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable request header and request URL access control. Valid values: on, off
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Request header and request URL access rule
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AccessControlRule> || null}
         */
        this.AccessControlRules = null;

        /**
         * Returned status code
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReturnCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.AccessControlRules) {
            this.AccessControlRules = new Array();
            for (let z in params.AccessControlRules) {
                let obj = new AccessControlRule();
                obj.deserialize(params.AccessControlRules[z]);
                this.AccessControlRules.push(obj);
            }
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;

    }
}

/**
 * ACL error page
 * @class
 */
class ScdnErrorPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status code
`403` is passed in when the action is `intercept`.
`301` is passed in when the action is `redirect`.
         * @type {number || null}
         */
        this.RedirectCode = null;

        /**
         * Redirection URL
         * @type {string || null}
         */
        this.RedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RedirectCode = 'RedirectCode' in params ? params.RedirectCode : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

    }
}

/**
 * Cache key configuration (Ignore Query String configuration)
 * @class
 */
class CacheKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable full-path cache
`on`: enables full-path cache (i.e., disables Ignore Query String)
`off`: disables full-path cache (i.e., enables Ignore Query String)
         * @type {string || null}
         */
        this.FullUrlCache = null;

        /**
         * Whether caches are case insensitive
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IgnoreCase = null;

        /**
         * Request parameter contained in `CacheKey`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {QueryStringKey || null}
         */
        this.QueryString = null;

        /**
         * Cookie contained in `CacheKey`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CookieKey || null}
         */
        this.Cookie = null;

        /**
         * Request header contained in `CacheKey`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {HeaderKey || null}
         */
        this.Header = null;

        /**
         * Custom string contained in `CacheKey`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {CacheTagKey || null}
         */
        this.CacheTag = null;

        /**
         * Request protocol contained in `CacheKey`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {SchemeKey || null}
         */
        this.Scheme = null;

        /**
         * Path-based cache key configuration
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<KeyRule> || null}
         */
        this.KeyRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FullUrlCache = 'FullUrlCache' in params ? params.FullUrlCache : null;
        this.IgnoreCase = 'IgnoreCase' in params ? params.IgnoreCase : null;

        if (params.QueryString) {
            let obj = new QueryStringKey();
            obj.deserialize(params.QueryString)
            this.QueryString = obj;
        }

        if (params.Cookie) {
            let obj = new CookieKey();
            obj.deserialize(params.Cookie)
            this.Cookie = obj;
        }

        if (params.Header) {
            let obj = new HeaderKey();
            obj.deserialize(params.Header)
            this.Header = obj;
        }

        if (params.CacheTag) {
            let obj = new CacheTagKey();
            obj.deserialize(params.CacheTag)
            this.CacheTag = obj;
        }

        if (params.Scheme) {
            let obj = new SchemeKey();
            obj.deserialize(params.Scheme)
            this.Scheme = obj;
        }

        if (params.KeyRules) {
            this.KeyRules = new Array();
            for (let z in params.KeyRules) {
                let obj = new KeyRule();
                obj.deserialize(params.KeyRules[z]);
                this.KeyRules.push(obj);
            }
        }

    }
}

/**
 * Configuration of URL rewriting
 * @class
 */
class UrlRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether URL rewriting is enabled
`on`: enabled
`off`: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Rule of URL rewriting rule, which is required if `Switch` is `on`. There can be up to 10 rules.
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<UrlRedirectRule> || null}
         */
        this.PathRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.PathRules) {
            this.PathRules = new Array();
            for (let z in params.PathRules) {
                let obj = new UrlRedirectRule();
                obj.deserialize(params.PathRules[z]);
                this.PathRules.push(obj);
            }
        }

    }
}

/**
 * Single link downstream speed limit configuration. This is disabled by default.
 * @class
 */
class DownstreamCapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * Downstream speed configuration switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Downstream speed limiting rules
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CappingRule> || null}
         */
        this.CappingRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.CappingRules) {
            this.CappingRules = new Array();
            for (let z in params.CappingRules) {
                let obj = new CappingRule();
                obj.deserialize(params.CappingRules[z]);
                this.CappingRules.push(obj);
            }
        }

    }
}

/**
 * A part of `CacheKey`
 * @class
 */
class CookieKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to use `Cookie` as part of `CacheKey`. Valid values: on, off
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Used cookies (separated by ';')
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Configuration of remote authentication rules. Setting up multiple rules is supported.
`RemoteAuthenticationRules` and `Server` cannot be configured at the same time.
If only `Server` is configured, all parameters of `RemoteAuthenticationRules` will be set to the default values. The default values are described in each configuration parameter.
 * @class
 */
class RemoteAuthentication extends  AbstractModel {
    constructor(){
        super();

        /**
         * Remote authentication switch
`on`: enable
`off`: disable
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Remote authentication rule configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RemoteAuthenticationRule> || null}
         */
        this.RemoteAuthenticationRules = null;

        /**
         * Remote authentication server
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Server = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.RemoteAuthenticationRules) {
            this.RemoteAuthenticationRules = new Array();
            for (let z in params.RemoteAuthenticationRules) {
                let obj = new RemoteAuthenticationRule();
                obj.deserialize(params.RemoteAuthenticationRules[z]);
                this.RemoteAuthenticationRules.push(obj);
            }
        }
        this.Server = 'Server' in params ? params.Server : null;

    }
}

/**
 * Path-based cache key configuration
 * @class
 */
class KeyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Content for each CacheType:
For `file`, enter the suffix, such as jpg, txt.
For `directory`, enter the path, such as /xxx/test/.
For `path`, enter the corresponding absolute path, such as /xxx/test.html.
For `index`, enter a backslash (/).
Note: this field may return null, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * Rule types:
`file`: effective for specified file suffixes
`directory`: effective for specified paths
`path`: effective for specified absolute paths
`index`: home page
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Whether full-path cache is enaled
`on`: enables full-path cache (i.e., disables ignore query string)
`off`: disables full-path cache (i.e., enables ignore query string)
Note: this field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.FullUrlCache = null;

        /**
         * Whether caches are case insensitive
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.IgnoreCase = null;

        /**
         * Request parameter contained in `CacheKey`
Note: this field may return null, indicating that no valid value is obtained.
         * @type {RuleQueryString || null}
         */
        this.QueryString = null;

        /**
         * Path cache key tag, the value "user" is passed.
Note: this field may return null, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.RuleTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.FullUrlCache = 'FullUrlCache' in params ? params.FullUrlCache : null;
        this.IgnoreCase = 'IgnoreCase' in params ? params.IgnoreCase : null;

        if (params.QueryString) {
            let obj = new RuleQueryString();
            obj.deserialize(params.QueryString)
            this.QueryString = obj;
        }
        this.RuleTag = 'RuleTag' in params ? params.RuleTag : null;

    }
}

/**
 * Downstream speed limit configuration rules. Up to 100 entries can be configured.
 * @class
 */
class CappingRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule types:
`all`: effective for all files
`file`: effective for specified file suffixes
`directory`: effective for specified paths
`path`: effective for specified absolute paths
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Content for each RuleType: 
For `all`, enter an asterisk (*).
For `file`, enter the suffix, such as jpg, txt.
For `directory`, enter the path, such as /xxx/test/.
For `path`, enter the corresponding absolute path, such as /xxx/test.html.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * Downstream speed value settings (in KB/s)
         * @type {number || null}
         */
        this.KBpsThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.KBpsThreshold = 'KBpsThreshold' in params ? params.KBpsThreshold : null;

    }
}

/**
 * Shared CNAME configuration
 * @class
 */
class ShareCname extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to enable Shared CNAME. If it is set to `off`, the default CNAME is used. If it is set to `on`, a shared CNAME is used.

* ShareCname is only available to beta users. To use this feature, please submit a ticket for application.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Shared CNAME to be configured
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Cname = 'Cname' in params ? params.Cname : null;

    }
}

/**
 * ListClsLogTopics request structure.
 * @class
 */
class ListClsLogTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Connection channel. Default value: cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * SEO configuration. This is disabled by default.
 * @class
 */
class Seo extends  AbstractModel {
    constructor(){
        super();

        /**
         * SEO configuration switch
on: enabled
off: disabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Bandwidth cap configuration. This is disabled by default.
 * @class
 */
class BandwidthAlert extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to enable the bandwidth cap
`on`: enable
`off`: disable
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The upper limit of bandwidth usage (in bps) or traffic usage (in bytes).
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BpsThreshold = null;

        /**
         * Action taken when threshold is reached
RESOLVE_DNS_TO_ORIGIN: requests will be forwarded to the origin server. This is only supported for domain names of external origin.
RETURN_404: a 404 error will be returned for all requests.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CounterMeasure = null;

        /**
         * The last time when the usage upper limit in the Chinese mainland was reached
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastTriggerTime = null;

        /**
         * Indicates whether to trigger alerts when the upper limit is reached
`on`: enable
`off`: disable
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AlertSwitch = null;

        /**
         * Triggers alarms when the ratio of bandwidth or traffic usage to the usage upper limit reaches the specified value
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AlertPercentage = null;

        /**
         * The last time when the usage outside the Chinese mainland reached the upper limit
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LastTriggerTimeOverseas = null;

        /**
         * Dimension of the usage limit
`bandwidth`: bandwidth
`flux`: traffic
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Metric = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BpsThreshold = 'BpsThreshold' in params ? params.BpsThreshold : null;
        this.CounterMeasure = 'CounterMeasure' in params ? params.CounterMeasure : null;
        this.LastTriggerTime = 'LastTriggerTime' in params ? params.LastTriggerTime : null;
        this.AlertSwitch = 'AlertSwitch' in params ? params.AlertSwitch : null;
        this.AlertPercentage = 'AlertPercentage' in params ? params.AlertPercentage : null;
        this.LastTriggerTimeOverseas = 'LastTriggerTimeOverseas' in params ? params.LastTriggerTimeOverseas : null;
        this.Metric = 'Metric' in params ? params.Metric : null;

    }
}

/**
 * CLS log search object
 * @class
 */
class ClsLogObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Log time
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * Log content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Capture path
         * @type {string || null}
         */
        this.Filename = null;

        /**
         * Log source device
         * @type {string || null}
         */
        this.Source = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Filename = 'Filename' in params ? params.Filename : null;
        this.Source = 'Source' in params ? params.Source : null;

    }
}

/**
 * Association between a region ID and sub-region IDs.
 * @class
 */
class RegionMapRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * List of sub-region IDs
         * @type {Array.<number> || null}
         */
        this.SubRegionIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.SubRegionIdList = 'SubRegionIdList' in params ? params.SubRegionIdList : null;

    }
}

/**
 * PurgePathCache request structure.
 * @class
 */
class PurgePathCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of directories. The protocol header such as "http://" or "https://" needs to be included.
         * @type {Array.<string> || null}
         */
        this.Paths = null;

        /**
         * Purge type:
`flush`: purges updated resources
`delete`: purges all resources
         * @type {string || null}
         */
        this.FlushType = null;

        /**
         * Whether to encode Chinese characters before purge.
         * @type {boolean || null}
         */
        this.UrlEncode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Paths = 'Paths' in params ? params.Paths : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;
        this.UrlEncode = 'UrlEncode' in params ? params.UrlEncode : null;

    }
}

/**
 * CreateScdnFailedLogTask response structure.
 * @class
 */
class CreateScdnFailedLogTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation result. 
0: Creation succeeded
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Detailed access data
 * @class
 */
class CdnData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries the specified metric:
flux: traffic (in bytes)
bandwidth: bandwidth (in bps)
request: number of requests
fluxHitRate: traffic hit rate (in %)
statusCode: status code. The aggregate data for 2xx, 3xx, 4xx, and 5xx status codes will be returned (in entries)
2XX: Returns the aggregate list of 2xx status codes and the data for status codes starting with 2 (in entries)
3XX: Returns the aggregate list of 3xx status codes and the data for status codes starting with 3 (in entries)
4XX: Returns the aggregate list of 4xx status codes and the data for status codes starting with 4 (in entries)
5XX: Returns the aggregate list of 5xx status codes and the data for status codes starting with 5 (in entries)
Alternatively, you can specify a status code for querying.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Detailed data combination
         * @type {Array.<TimestampData> || null}
         */
        this.DetailData = null;

        /**
         * Aggregate data combination
         * @type {SummarizedData || null}
         */
        this.SummarizedData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new TimestampData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

        if (params.SummarizedData) {
            let obj = new SummarizedData();
            obj.deserialize(params.SummarizedData)
            this.SummarizedData = obj;
        }

    }
}

/**
 * PurgeUrlsCache request structure.
 * @class
 */
class PurgeUrlsCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of URLs. The protocol header such as "http://" or "https://" needs to be included.
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * Purging region
The acceleration region of the acceleration domain name will be purged if this parameter is not passed in
If `mainland` is passed in, only the content cached on nodes in the Chinese mainland will be purged
If `overseas` is passed in, only the content cached on nodes outside the Chinese mainland will be purged
The specified purging region should match the domain name acceleration region
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Whether to encode Chinese characters before purge.
         * @type {boolean || null}
         */
        this.UrlEncode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.UrlEncode = 'UrlEncode' in params ? params.UrlEncode : null;

    }
}

/**
 * Cross-border origin-pull optimization configuration. This is disabled by default. (This feature is in beta and not generally available yet.)
 * @class
 */
class OriginPullOptimization extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cross-border origin-pull optimization configuration switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Cross-border types
OVToCN: origin-pull from outside mainland China to inside mainland China
CNToOV: origin-pull from inside mainland China to outside mainland China
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OptimizationType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.OptimizationType = 'OptimizationType' in params ? params.OptimizationType : null;

    }
}

/**
 * Status code redirect configuration, which is disabled by default.
 * @class
 */
class ErrorPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status code redirect configuration switch
on: enabled
off: disabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Status code redirect rules configuration
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ErrorPageRule> || null}
         */
        this.PageRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.PageRules) {
            this.PageRules = new Array();
            for (let z in params.PageRules) {
                let obj = new ErrorPageRule();
                obj.deserialize(params.PageRules[z]);
                this.PageRules.push(obj);
            }
        }

    }
}

/**
 * Prefetch task details.
 * @class
 */
class PushTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prefetch task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Prefetched URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Prefetch task status
`fail`: prefetch failed
`done`: prefetch succeeded
`process`: prefetch in progress
`invalid`: invalid prefetch with 4XX/5XX status code returned from the origin server
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Prefetch progress in percentage
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * Prefetch task submission time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Prefetch region
`mainland`: within Mainland China
`overseas`: outside Mainland China
`global`: global
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Prefetch task update time
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CDN report data
 * @class
 */
class ReportData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID/domain name ID.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Project name/domain name.
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Total traffic/max bandwidth in bytes and bps, respectively.
         * @type {number || null}
         */
        this.Value = null;

        /**
         * Percentage of individual resource out of all resources.
         * @type {number || null}
         */
        this.Percentage = null;

        /**
         * Total billable traffic/max billable bandwidth in bytes and bps, respectively.
         * @type {number || null}
         */
        this.BillingValue = null;

        /**
         * Percentage of billable amount out of total amount.
         * @type {number || null}
         */
        this.BillingPercentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;
        this.BillingValue = 'BillingValue' in params ? params.BillingValue : null;
        this.BillingPercentage = 'BillingPercentage' in params ? params.BillingPercentage : null;

    }
}

/**
 * StartCdnDomain response structure.
 * @class
 */
class StartCdnDomainResponse extends  AbstractModel {
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
 * DescribePushQuota request structure.
 * @class
 */
class DescribePushQuotaRequest extends  AbstractModel {
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
 * Data structure of sorted data
 * @class
 */
class TopDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Datatype name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Data value
         * @type {number || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Origin server header cache configuration. This is enabled by default and caches all the header information.
 * @class
 */
class ResponseHeaderCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin server header cache switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Billing data details
 * @class
 */
class ResourceBillingData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource name, which is categorized as follows based on different query conditions:
Specific domain name: domain name details
multiDomains: aggregated details of multiple domain names
Project ID: displays the ID of the specified project to be queried
all: the details at the account level
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Billing data details
         * @type {Array.<CdnData> || null}
         */
        this.BillingData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.BillingData) {
            this.BillingData = new Array();
            for (let z in params.BillingData) {
                let obj = new CdnData();
                obj.deserialize(params.BillingData[z]);
                this.BillingData.push(obj);
            }
        }

    }
}

/**
 * Sorting conditions for query results.
 * @class
 */
class Sort extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fields that can be sorted. Currently supports:
`createTime`: domain name creation time.
`certExpireTime`: certificate expiration time.
Default value: createTime.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * `asc` or `desc`. Default: `desc`.
         * @type {string || null}
         */
        this.Sequence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Sequence = 'Sequence' in params ? params.Sequence : null;

    }
}

/**
 * DescribePurgeTasks request structure.
 * @class
 */
class DescribePurgeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies a purge type:
`url`: URL purge record
`path`: Directory purge record
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * Specifies the starting time of the period you want to query, such as `2018-08-08 00:00:00`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Specifies the end time of the period you want to query, such as 2018-08-08 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies a task ID when you want to query by task ID.
You must specify either a task ID or a starting time for your query.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paged queries. Default value: 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * You can filter the results by domain name or a complete URL beginning with `http(s)://`
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Specifies a task state for your query:
`fail`: purge failed
`done`: purge succeeded
`process`: purge in progress
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Specifies a purge region for your query:
`mainland`: within Mainland China
`overseas`: outside Mainland China
`global`: global
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * PushUrlsCache response structure.
 * @class
 */
class PushUrlsCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the submitted task
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopCdnDomain response structure.
 * @class
 */
class StopCdnDomainResponse extends  AbstractModel {
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
 * A part of `CacheKey`
 * @class
 */
class QueryStringKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to use `QueryString` as part of `CacheKey`. Valid values: on, off
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Whether to sort again
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Reorder = null;

        /**
         * Include/exclude query parameters. Valid values: `includeAll`, `excludeAll`, `includeCustom`, `excludeAll`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Array of included/excluded URL parameters (separated by ';')
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Reorder = 'Reorder' in params ? params.Reorder : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ListTopData response structure.
 * @class
 */
class ListTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top access data details of each resource
         * @type {Array.<TopData> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TopData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Browser cache rule configuration, which is used to set the default value of `MaxAge` and is disabled by default.
 * @class
 */
class MaxAge extends  AbstractModel {
    constructor(){
        super();

        /**
         * Browser cache configuration switch
on: enabled
off: disabled
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * MaxAge rule
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MaxAgeRule> || null}
         */
        this.MaxAgeRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.MaxAgeRules) {
            this.MaxAgeRules = new Array();
            for (let z in params.MaxAgeRules) {
                let obj = new MaxAgeRule();
                obj.deserialize(params.MaxAgeRules[z]);
                this.MaxAgeRules.push(obj);
            }
        }

    }
}

/**
 * UpdateDomainConfig response structure.
 * @class
 */
class UpdateDomainConfigResponse extends  AbstractModel {
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
 * Access authentication configuration for OSS origin 
 * @class
 */
class OssPrivateAccess extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable access authentication. Valid values: `on`, `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Access ID.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * Key.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * Logset information
 * @class
 */
class LogSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Developer ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Channel
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * Logset ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * Logset name
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * Whether it is the default logset
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * Log retention period in days
         * @type {number || null}
         */
        this.LogsetSavePeriod = null;

        /**
         * Creation date
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Whether the logset has been removed from CLS
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Deleted = null;

        /**
         * Whether English is used in this region
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionEn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.LogsetSavePeriod = 'LogsetSavePeriod' in params ? params.LogsetSavePeriod : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;
        this.RegionEn = 'RegionEn' in params ? params.RegionEn : null;

    }
}

/**
 * SCDN configuration
 * @class
 */
class SecurityConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * on|off
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * SearchClsLog request structure.
 * @class
 */
class SearchClsLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of logset to be queried
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * List of IDs of log topics to be queried, separated by commas
         * @type {string || null}
         */
        this.TopicIds = null;

        /**
         * Start time of log to be queried in the format of `YYYY-mm-dd HH:MM:SS`
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of log to be queried in the format of `YYYY-mm-dd HH:MM:SS`
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of logs to be returned at a time. Maximum value: 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Connection channel. Default value: cdn
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * Content to be queried. For more information, please visit https://intl.cloud.tencent.com/document/product/614/16982?from_cn_redirect=1
         * @type {string || null}
         */
        this.Query = null;

        /**
         * This field is used when loading more results. Pass through the last `context` value returned to get more log content. Up to 10,000 logs can be obtained through the cursor. Please narrow down the time range as much as possible.
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Sorting by log time. Valid values: asc (ascending), desc (descending). Default value: desc
         * @type {string || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicIds = 'TopicIds' in params ? params.TopicIds : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * Advanced configuration set
 * @class
 */
class AdvanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Advanced configuration name
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether advanced configuration is supported:
`on`: support
`off`: do not support
Note: this field may return `null`, indicating that no valid values can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Origin access authentication for S3 bucket.
 * @class
 */
class AwsPrivateAccess extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch, which can be set to on or off.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Access ID.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * Key.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * SCDN precise access control configuration
 * @class
 */
class AdvancedScdnAclGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Specific configurations
         * @type {Array.<AdvancedScdnAclRule> || null}
         */
        this.Configure = null;

        /**
         * Action. Valid values: `intercept` and `redirect`.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * Whether the rule is activated. Valid values: `active` and `inactive`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error page configuration
         * @type {ScdnErrorPage || null}
         */
        this.ErrorPage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.Configure) {
            this.Configure = new Array();
            for (let z in params.Configure) {
                let obj = new AdvancedScdnAclRule();
                obj.deserialize(params.Configure[z]);
                this.Configure.push(obj);
            }
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.ErrorPage) {
            let obj = new ScdnErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

    }
}

/**
 * Video dragging configuration. This is disabled by default.
 * @class
 */
class VideoSeek extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video dragging switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Old configuration compatibility check
 * @class
 */
class Compatibility extends  AbstractModel {
    constructor(){
        super();

        /**
         * Compatibility flag status code.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * ManageClsTopicDomains response structure.
 * @class
 */
class ManageClsTopicDomainsResponse extends  AbstractModel {
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
 * SCDN precise access control configuration
 * @class
 */
class ScdnAclGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule name
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Specific configurations
         * @type {Array.<ScdnAclRule> || null}
         */
        this.Configure = null;

        /**
         * Action. Valid values: `intercept` and `redirect`.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * Whether the rule is effective. Valid values: `active` and `inactive`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error page configuration.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ScdnErrorPage || null}
         */
        this.ErrorPage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.Configure) {
            this.Configure = new Array();
            for (let z in params.Configure) {
                let obj = new ScdnAclRule();
                obj.deserialize(params.Configure[z]);
                this.Configure.push(obj);
            }
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.ErrorPage) {
            let obj = new ScdnErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

    }
}

/**
 * WAF rule information
 * @class
 */
class ScdnWafRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Attack type
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * Defense action. Valid value: `observe`.
         * @type {string || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

    }
}

/**
 * CLS log search result
 * @class
 */
class ClsSearchLogs extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cursor for more search results
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Whether all search results have been returned
         * @type {boolean || null}
         */
        this.Listover = null;

        /**
         * Log content information
         * @type {Array.<ClsLogObject> || null}
         */
        this.Results = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.Listover = 'Listover' in params ? params.Listover : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new ClsLogObject();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }

    }
}

/**
 * DescribeUrlViolations response structure.
 * @class
 */
class DescribeUrlViolationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details of URLs in violation
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ViolationUrl> || null}
         */
        this.UrlRecordList = null;

        /**
         * Total number of records, which is used for pagination.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.UrlRecordList) {
            this.UrlRecordList = new Array();
            for (let z in params.UrlRecordList) {
                let obj = new ViolationUrl();
                obj.deserialize(params.UrlRecordList[z]);
                this.UrlRecordList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP blocklist/allowlist configuration. This is disabled by default.
 * @class
 */
class IpFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP blocklist/allowlist configuration switch
on: enabled
off: disabled
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * IP blocklist/allowlist type
whitelist: allowlist
blacklist: blocklist
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * IP blocklist/allowlist list
Supports IPs in X.X.X.X format, or /8, /16, /24 format IP ranges.
Up to 50 allowlists or blocklists can be entered
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Filters = null;

        /**
         * IP blocklist/allowlist path-based configuration. This feature is only available to selected beta customers.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<IpFilterPathRule> || null}
         */
        this.FilterRules = null;

        /**
         * HTTP code returned when the IP allowlist/blocklist verification fails
Valid values: 400-499
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReturnCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Filters = 'Filters' in params ? params.Filters : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new IpFilterPathRule();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;

    }
}

/**
 * SCDN access control
 * @class
 */
class ScdnAclConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable. Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * This field is disused. Please use `AdvancedScriptData` instead.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ScdnAclGroup> || null}
         */
        this.ScriptData = null;

        /**
         * Error page configuration
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {ScdnErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * ACL rule group, which is required when the access control is on.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AdvancedScdnAclGroup> || null}
         */
        this.AdvancedScriptData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.ScriptData) {
            this.ScriptData = new Array();
            for (let z in params.ScriptData) {
                let obj = new ScdnAclGroup();
                obj.deserialize(params.ScriptData[z]);
                this.ScriptData.push(obj);
            }
        }

        if (params.ErrorPage) {
            let obj = new ScdnErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.AdvancedScriptData) {
            this.AdvancedScriptData = new Array();
            for (let z in params.AdvancedScriptData) {
                let obj = new AdvancedScdnAclGroup();
                obj.deserialize(params.AdvancedScriptData[z]);
                this.AdvancedScriptData.push(obj);
            }
        }

    }
}

/**
 * DDoS configuration
 * @class
 */
class ScdnDdosConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable DDoS defense. Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribePurgeTasks response structure.
 * @class
 */
class DescribePurgeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Detailed purge record.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<PurgeTask> || null}
         */
        this.PurgeLogs = null;

        /**
         * Total number of tasks, which is used for pagination.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.PurgeLogs) {
            this.PurgeLogs = new Array();
            for (let z in params.PurgeLogs) {
                let obj = new PurgeTask();
                obj.deserialize(params.PurgeLogs[z]);
                this.PurgeLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Origin-pull authentication advanced configuration
 * @class
 */
class OriginAuthentication extends  AbstractModel {
    constructor(){
        super();

        /**
         * Authentication switch, which can be on or off.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Authentication type configuration A
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {OriginAuthenticationTypeA || null}
         */
        this.TypeA = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.TypeA) {
            let obj = new OriginAuthenticationTypeA();
            obj.deserialize(params.TypeA)
            this.TypeA = obj;
        }

    }
}

/**
 * Status code redirect rules configuration
 * @class
 */
class ErrorPageRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Status code
Supports 400, 403, 404, 500.
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * Redirect status code settings
Supports 301 or 302.
         * @type {number || null}
         */
        this.RedirectCode = null;

        /**
         * Redirect URL
Requires a full redirect path, such as https://www.test.com/error.html.
         * @type {string || null}
         */
        this.RedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.RedirectCode = 'RedirectCode' in params ? params.RedirectCode : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

    }
}

/**
 * DescribeOriginData response structure.
 * @class
 */
class DescribeOriginDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time granularity of data statistics, which supports min (1 minute), 5min (5 minutes), hour (1 hour), and day (1 day).
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Origin-pull data details of each resource.
         * @type {Array.<ResourceOriginData> || null}
         */
        this.Data = null;

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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceOriginData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Purge task details.
 * @class
 */
class PurgeTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purge task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Purged URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Purge task status
`fail`: purge failed
`done`: purge succeeded
`process`: purge in progress
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Purge type
`url`: URL purge
`path`: directory purge
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * Purge method
`flush`: purges updated resources; this type is available only for directory purges
`delete`: purges all resources
         * @type {string || null}
         */
        this.FlushType = null;

        /**
         * Purge task submission time
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Origin-pull timeout configuration
 * @class
 */
class OriginPullTimeout extends  AbstractModel {
    constructor(){
        super();

        /**
         * The origin-pull connection timeout (in seconds). Valid range: 5-60.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * The origin-pull receipt timeout (in seconds). Valid range: 10-60.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ReceiveTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.ReceiveTimeout = 'ReceiveTimeout' in params ? params.ReceiveTimeout : null;

    }
}

/**
 * DeleteCdnDomain response structure.
 * @class
 */
class DeleteCdnDomainResponse extends  AbstractModel {
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
 * IP information of CDN intermediate nodes
 * @class
 */
class OriginIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intermediate IP range/intermediate IP. The IP range information is returned by default.
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
 * IP attribute information
 * @class
 */
class CdnIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP to be queried
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * IP ownership:
yes: Tencent Cloud CDN node
no: non-Tencent Cloud CDN node
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * Node district/country
unknown: unknown node location
         * @type {string || null}
         */
        this.Location = null;

        /**
         * Node activation and deactivation history
         * @type {Array.<CdnIpHistory> || null}
         */
        this.History = null;

        /**
         * Node region
mainland: cache node in Mainland China
overseas: cache node outside Mainland China
unknown: service region unknown
         * @type {string || null}
         */
        this.Area = null;

        /**
         * City where the node resides
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.City = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Location = 'Location' in params ? params.Location : null;

        if (params.History) {
            this.History = new Array();
            for (let z in params.History) {
                let obj = new CdnIpHistory();
                obj.deserialize(params.History[z]);
                this.History.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.City = 'City' in params ? params.City : null;

    }
}

/**
 * DescribeCdnData request structure.
 * @class
 */
class DescribeCdnDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queries start time, such as 2018-09-04 10:40:00; the returned result is later than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query end time is 2018-09-04 10:40:00 and the query time granularity is 1 hour, the time for the first returned entry will be 2018-09-04 10:00:00.
The gap between the start time and end time should be less than or equal to 90 days.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Queries end time, such as 2018-09-04 10:40:00; the returned result is earlier than or equal to the specified time.
According to the specified time granularity, forward rounding is applied; for example, if the query start time is 2018-09-04 10:40:00 and the query time granularity is 1 hour, the time for the last returned entry will be 2018-09-04 10:00:00.
The gap between the start time and end time should be less than or equal to 90 days.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Specifies the metric to query, which can be:
`flux`: traffic (in bytes)
`fluxIn`: upstream traffic (in bytes), only used for the `ecdn` product
`fluxOut`: downstream traffic (in bytes), only used for the `ecdn` product
`bandwidth`: bandwidth (in bps)
`bandwidthIn`: upstream bandwidth (in bps), only used for the `ecdn` product
`bandwidthOut`: downstream bandwidth (in bps), only used for the `ecdn` product
`request`: number of requests
`hitRequest`: number of hit requests
`requestHitRate`: request hit rate (in % with two decimal digits)
`hitFlux`: hit traffic (in bytes)
`fluxHitRate`: traffic hit rate (in % with two decimal digits)
`statusCode`: status code. Number of 2xx, 3xx, 4xx, and 5xx status codes returned during the queried period.
`2xx`: lists the number of all status codes starting with **2** returned during the queried period based on the specified interval (if any)
`3xx`: lists the number of all status codes starting with **3** returned during the queried period based on the specified interval (if any)
`4xx`: lists the number of all status codes starting with **4** returned during the queried period based on the specified interval (if any)
`5xx`: lists the number of all status codes starting with **5** returned during the queried period based on the specified interval (if any)
Specifies the status code to query. The return will be empty if the status code has never been generated.
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * Queries the information of specified domain names
Specifies a domain name to query
Specifies multiple domain names to query (30 at most at a time)
Queries all Specifies an account to query all domain names
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Specifies the project ID to be queried, which can be viewed [here](https://console.cloud.tencent.com/project)
Please note that if domain names are specified, this parameter will be ignored.
         * @type {number || null}
         */
        this.Project = null;

        /**
         * Time granularity; valid values:
`min`: data with 1-minute granularity is returned when the queried period is no longer than 24 hours. This value is not supported if the service region you want to query is outside Mainland China;
`5min`: data with 5-minute granularity is returned when the queried period is no longer than 31 days;
`hour`: data with 1-hour granularity is returned when the queried period is no longer than 31 days;
`day`: data with 1-day granularity is returned when the queried period is longer than 31 days.
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * The aggregate data for multiple domain names is returned by default (false) during a multi-domain-name query.
You can set it to true to return the details for each Domain (the statusCode metric is currently not supported)
         * @type {boolean || null}
         */
        this.Detail = null;

        /**
         * Specifies an ISP when you query the CDN data within Mainland China. If this is left blank, all ISPs will be queried.
To view ISP codes, see [ISP Code Mappings](https://intl.cloud.tencent.com/document/product/228/6316?from_cn_redirect=1#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
If you have specified an ISP, you cannot specify a province or an IP protocol for the same query.
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * Specifies a province when you query the CDN data within Mainland China. If this is left blank, all provinces will be queried.
Specifies a country/region when you query the CDN data outside Mainland China. If this is left blank, all countries/regions will be queried.
To view codes of provinces or countries/regions, see [Province Code Mappings](https://intl.cloud.tencent.com/document/product/228/6316?from_cn_redirect=1#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
If you have specified a province for your query on CDN data within mainland China, you cannot specify an ISP or an IP protocol for the same query.
         * @type {number || null}
         */
        this.District = null;

        /**
         * Specifies the protocol to be queried; if you leave it blank, all protocols will be queried.
all: All protocols
http: specifies the HTTP metric to be queried
https: specifies the HTTPS metric to be queried
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Specifies the data source to be queried, which can be seen as the allowlist function.
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * Specified IP protocol to be queried. If this parameter is left empty, all protocols will be queried
all: all protocols
ipv4: specifies to query IPv4 metrics
ipv6: specifies to query IPv6 metrics
If the IP protocol to be queried is specified, the district and ISP cannot be specified at the same time
Note: non-IPv6 allowlisted users cannot specify `ipv4` and `ipv6` for query
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * Specifies a service region. If this value is left blank, CDN data within Mainland China will be queried.
`mainland`: specifies to query CDN data within Mainland China;
`overseas`: specifies to query CDN data outside Mainland China.
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Specifies a region type for your query on CDN data outside Mainland China. If this parameter is left blank, data on the service region will be queried. This parameter is valid only when `Area` is `overseas`.
`server`: specifies to query data on the service region where Tencent Cloud CDN nodes are located;
`client`: specifies to query data on the client region where the request devices are located.
         * @type {string || null}
         */
        this.AreaType = null;

        /**
         * Specifies the product to query, either `cdn` (default) or `ecdn`.
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.District = 'District' in params ? params.District : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.AreaType = 'AreaType' in params ? params.AreaType : null;
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * Information of logsets and log topics (except those created in the Shanghai region)
 * @class
 */
class ExtraLogset extends  AbstractModel {
    constructor(){
        super();

        /**
         * Logset information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {LogSetInfo || null}
         */
        this.Logset = null;

        /**
         * Log topic information
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<TopicInfo> || null}
         */
        this.Topics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Logset) {
            let obj = new LogSetInfo();
            obj.deserialize(params.Logset)
            this.Logset = obj;
        }

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new TopicInfo();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }

    }
}

/**
 * A part of `CacheKey`
 * @class
 */
class CacheTagKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to use `CacheTag` as part of `CacheKey`
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Value of custom `CacheTag`
Note: this field may return null, indicating that no valid values can be obtained.
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * QUIC configuration item
 * @class
 */
class Quic extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable QUIC
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeDomains request structure.
 * @class
 */
class DescribeDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit on paginated queries. Default value: 100. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query condition filter, complex type.
         * @type {Array.<DomainFilter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * Whether to enable offline cache
 * @class
 */
class OfflineCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable offline cache. Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * URL redirect rule configuration
 * @class
 */
class UrlRedirectRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Redirect status code. Valid values: 301, 302
         * @type {number || null}
         */
        this.RedirectStatusCode = null;

        /**
         * URL to be matched. Only URLs are supported, while parameters are not. The exact match is used by default. In regex match, up to 5 wildcards `*` are supported. The URL can contain up to 1,024 characters.
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * Target URL, starting with `/` and excluding parameters. The path can contain up to 1,024 characters. The wildcards in the matching path can be respectively captured using `$1`, `$2`, `$3`, `$4`, and `$5`. Up to 10 values can be captured.
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * Target host. It should be a standard domain name starting with `http://` or `https://`. If it is left empty, “http://[current domain name]” will be used by default.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RedirectHost = null;

        /**
         * Whether to use full-path matching or arbitrary matching
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.FullMatch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.RedirectHost = 'RedirectHost' in params ? params.RedirectHost : null;
        this.FullMatch = 'FullMatch' in params ? params.FullMatch : null;

    }
}

/**
 * IP blocklist/allowlist path-based configuration
 * @class
 */
class IpFilterPathRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP blocklist/allowlist type
`whitelist`: allowlist IPs
`blacklist`: blocklist IPs
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * IP blocklist/allowlist list
Supports IPs in X.X.X.X format, or /8, /16, /24 format IP ranges.
Up to 50 allowlists or blocklists can be entered.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.Filters = null;

        /**
         * Rule types:
`all`: effective for all files
`file`: effective for specified file suffixes
`directory`: effective for specified paths
`path`: effective for specified absolute paths
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Content for each RuleType:
For `all`, enter an asterisk (*).
For `file`, enter the suffix, such as jpg, txt.
For `directory`, enter the path, such as /xxx/test/.
For `path`, enter the corresponding absolute path, such as /xxx/test.html.
Note: this field may return `null`, indicating that no valid value is obtained.
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Filters = 'Filters' in params ? params.Filters : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

module.exports = {
    DescribeCdnDomainLogsResponse: DescribeCdnDomainLogsResponse,
    AdvancedAuthentication: AdvancedAuthentication,
    AdvanceHttps: AdvanceHttps,
    Revalidate: Revalidate,
    ResourceData: ResourceData,
    UrlRecord: UrlRecord,
    DescribePushQuotaResponse: DescribePushQuotaResponse,
    DescribePurgeQuotaResponse: DescribePurgeQuotaResponse,
    ScdnSevenLayerRules: ScdnSevenLayerRules,
    Authentication: Authentication,
    ImageOptimization: ImageOptimization,
    Https: Https,
    RuleCache: RuleCache,
    DescribeCdnDomainLogsRequest: DescribeCdnDomainLogsRequest,
    CreateClsLogTopicResponse: CreateClsLogTopicResponse,
    RemoteAuthenticationRule: RemoteAuthenticationRule,
    Compression: Compression,
    PurgePathCacheResponse: PurgePathCacheResponse,
    DomainFilter: DomainFilter,
    DescribeCdnOriginIpResponse: DescribeCdnOriginIpResponse,
    SpecificConfig: SpecificConfig,
    FollowRedirect: FollowRedirect,
    RequestHeader: RequestHeader,
    DescribePurgeQuotaRequest: DescribePurgeQuotaRequest,
    Referer: Referer,
    PostSize: PostSize,
    DescribeCdnDataResponse: DescribeCdnDataResponse,
    EnableClsLogTopicRequest: EnableClsLogTopicRequest,
    CacheConfigNoCache: CacheConfigNoCache,
    OriginCombine: OriginCombine,
    DeleteCdnDomainRequest: DeleteCdnDomainRequest,
    DescribePayTypeResponse: DescribePayTypeResponse,
    PathRule: PathRule,
    ListTopDataRequest: ListTopDataRequest,
    ListClsTopicDomainsRequest: ListClsTopicDomainsRequest,
    DescribeDomainsResponse: DescribeDomainsResponse,
    DescribePayTypeRequest: DescribePayTypeRequest,
    AdvancedAuthenticationTypeD: AdvancedAuthenticationTypeD,
    CompressionRule: CompressionRule,
    GuetzliAdapter: GuetzliAdapter,
    UpdateScdnDomainResponse: UpdateScdnDomainResponse,
    Origin: Origin,
    DescribeDomainsConfigRequest: DescribeDomainsConfigRequest,
    TopData: TopData,
    EnableCachesRequest: EnableCachesRequest,
    Quota: Quota,
    HeaderKey: HeaderKey,
    DescribeBillingDataRequest: DescribeBillingDataRequest,
    SimpleCache: SimpleCache,
    DeleteClsLogTopicRequest: DeleteClsLogTopicRequest,
    UserAgentFilter: UserAgentFilter,
    DescribeCdnOriginIpRequest: DescribeCdnOriginIpRequest,
    UpdatePayTypeResponse: UpdatePayTypeResponse,
    TopicInfo: TopicInfo,
    AdvancedCCRules: AdvancedCCRules,
    DescribeDomainsConfigResponse: DescribeDomainsConfigResponse,
    BriefDomain: BriefDomain,
    TimestampData: TimestampData,
    TpgAdapter: TpgAdapter,
    CacheConfigCache: CacheConfigCache,
    DescribeReportDataResponse: DescribeReportDataResponse,
    DisableClsLogTopicRequest: DisableClsLogTopicRequest,
    RuleCacheConfig: RuleCacheConfig,
    ListClsTopicDomainsResponse: ListClsTopicDomainsResponse,
    BotCookie: BotCookie,
    DescribeCdnIpRequest: DescribeCdnIpRequest,
    Ipv6: Ipv6,
    WafSubRuleStatus: WafSubRuleStatus,
    StatusCodeCache: StatusCodeCache,
    DescribeIpVisitResponse: DescribeIpVisitResponse,
    EnableClsLogTopicResponse: EnableClsLogTopicResponse,
    ListClsLogTopicsResponse: ListClsLogTopicsResponse,
    OverseaConfig: OverseaConfig,
    AddCdnDomainRequest: AddCdnDomainRequest,
    UserAgentFilterRule: UserAgentFilterRule,
    UpdateDomainConfigRequest: UpdateDomainConfigRequest,
    Tag: Tag,
    CacheConfigFollowOrigin: CacheConfigFollowOrigin,
    MaxAgeRule: MaxAgeRule,
    AdvancedAuthenticationTypeE: AdvancedAuthenticationTypeE,
    DescribeCertDomainsRequest: DescribeCertDomainsRequest,
    AdvancedAuthenticationTypeF: AdvancedAuthenticationTypeF,
    AdvancedAuthenticationTypeA: AdvancedAuthenticationTypeA,
    AdvancedCache: AdvancedCache,
    AdvancedAuthenticationTypeC: AdvancedAuthenticationTypeC,
    AdvancedAuthenticationTypeB: AdvancedAuthenticationTypeB,
    WebpAdapter: WebpAdapter,
    StartCdnDomainRequest: StartCdnDomainRequest,
    WebSocket: WebSocket,
    MapInfo: MapInfo,
    DescribeCertDomainsResponse: DescribeCertDomainsResponse,
    ScdnBotConfig: ScdnBotConfig,
    AuthenticationTypeD: AuthenticationTypeD,
    AuthenticationTypeC: AuthenticationTypeC,
    AuthenticationTypeB: AuthenticationTypeB,
    AuthenticationTypeA: AuthenticationTypeA,
    OriginAuthenticationTypeA: OriginAuthenticationTypeA,
    DescribePushTasksResponse: DescribePushTasksResponse,
    ResourceOriginData: ResourceOriginData,
    IpStatus: IpStatus,
    AddCdnDomainResponse: AddCdnDomainResponse,
    DomainAreaConfig: DomainAreaConfig,
    ServerCert: ServerCert,
    AccessControlRule: AccessControlRule,
    HttpHeaderPathRule: HttpHeaderPathRule,
    DisableCachesRequest: DisableCachesRequest,
    ScdnAclRule: ScdnAclRule,
    SimpleCacheRule: SimpleCacheRule,
    DisableClsLogTopicResponse: DisableClsLogTopicResponse,
    Hsts: Hsts,
    DescribeIpStatusRequest: DescribeIpStatusRequest,
    DetailDomain: DetailDomain,
    RuleEngine: RuleEngine,
    GetDisableRecordsResponse: GetDisableRecordsResponse,
    Ipv6Access: Ipv6Access,
    ResponseHeader: ResponseHeader,
    CdnIpHistory: CdnIpHistory,
    SummarizedData: SummarizedData,
    UpdateScdnDomainRequest: UpdateScdnDomainRequest,
    UpdatePayTypeRequest: UpdatePayTypeRequest,
    ManageClsTopicDomainsRequest: ManageClsTopicDomainsRequest,
    ScdnWafConfig: ScdnWafConfig,
    CreateScdnFailedLogTaskRequest: CreateScdnFailedLogTaskRequest,
    Cache: Cache,
    ForceRedirect: ForceRedirect,
    DescribeOriginDataRequest: DescribeOriginDataRequest,
    RangeOriginPull: RangeOriginPull,
    ViolationUrl: ViolationUrl,
    SearchClsLogResponse: SearchClsLogResponse,
    PathBasedOriginRule: PathBasedOriginRule,
    PushUrlsCacheRequest: PushUrlsCacheRequest,
    MainlandConfig: MainlandConfig,
    DescribeReportDataRequest: DescribeReportDataRequest,
    DescribePushTasksRequest: DescribePushTasksRequest,
    DescribeUrlViolationsRequest: DescribeUrlViolationsRequest,
    RefererRule: RefererRule,
    ScdnCCRules: ScdnCCRules,
    IpFreqLimit: IpFreqLimit,
    CreateClsLogTopicRequest: CreateClsLogTopicRequest,
    CacheOptResult: CacheOptResult,
    StopCdnDomainRequest: StopCdnDomainRequest,
    DescribeMapInfoResponse: DescribeMapInfoResponse,
    DescribeMapInfoRequest: DescribeMapInfoRequest,
    EnableCachesResponse: EnableCachesResponse,
    RuleQueryString: RuleQueryString,
    AdvancedScdnAclRule: AdvancedScdnAclRule,
    DescribeIpVisitRequest: DescribeIpVisitRequest,
    HttpHeaderRule: HttpHeaderRule,
    StatusCodeCacheRule: StatusCodeCacheRule,
    ClientCert: ClientCert,
    ScdnConfig: ScdnConfig,
    DomainLog: DomainLog,
    GetDisableRecordsRequest: GetDisableRecordsRequest,
    PurgeUrlsCacheResponse: PurgeUrlsCacheResponse,
    BotJavaScript: BotJavaScript,
    DeleteClsLogTopicResponse: DeleteClsLogTopicResponse,
    DescribeBillingDataResponse: DescribeBillingDataResponse,
    DisableCachesResponse: DisableCachesResponse,
    SchemeKey: SchemeKey,
    RangeOriginPullRule: RangeOriginPullRule,
    DescribeCdnIpResponse: DescribeCdnIpResponse,
    AdvanceCacheRule: AdvanceCacheRule,
    DescribeIpStatusResponse: DescribeIpStatusResponse,
    AccessControl: AccessControl,
    ScdnErrorPage: ScdnErrorPage,
    CacheKey: CacheKey,
    UrlRedirect: UrlRedirect,
    DownstreamCapping: DownstreamCapping,
    CookieKey: CookieKey,
    RemoteAuthentication: RemoteAuthentication,
    KeyRule: KeyRule,
    CappingRule: CappingRule,
    ShareCname: ShareCname,
    ListClsLogTopicsRequest: ListClsLogTopicsRequest,
    Seo: Seo,
    BandwidthAlert: BandwidthAlert,
    ClsLogObject: ClsLogObject,
    RegionMapRelation: RegionMapRelation,
    PurgePathCacheRequest: PurgePathCacheRequest,
    CreateScdnFailedLogTaskResponse: CreateScdnFailedLogTaskResponse,
    CdnData: CdnData,
    PurgeUrlsCacheRequest: PurgeUrlsCacheRequest,
    OriginPullOptimization: OriginPullOptimization,
    ErrorPage: ErrorPage,
    PushTask: PushTask,
    ReportData: ReportData,
    StartCdnDomainResponse: StartCdnDomainResponse,
    DescribePushQuotaRequest: DescribePushQuotaRequest,
    TopDetailData: TopDetailData,
    ResponseHeaderCache: ResponseHeaderCache,
    ResourceBillingData: ResourceBillingData,
    Sort: Sort,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    PushUrlsCacheResponse: PushUrlsCacheResponse,
    StopCdnDomainResponse: StopCdnDomainResponse,
    QueryStringKey: QueryStringKey,
    ListTopDataResponse: ListTopDataResponse,
    MaxAge: MaxAge,
    UpdateDomainConfigResponse: UpdateDomainConfigResponse,
    OssPrivateAccess: OssPrivateAccess,
    LogSetInfo: LogSetInfo,
    SecurityConfig: SecurityConfig,
    SearchClsLogRequest: SearchClsLogRequest,
    AdvanceConfig: AdvanceConfig,
    AwsPrivateAccess: AwsPrivateAccess,
    AdvancedScdnAclGroup: AdvancedScdnAclGroup,
    VideoSeek: VideoSeek,
    Compatibility: Compatibility,
    ManageClsTopicDomainsResponse: ManageClsTopicDomainsResponse,
    ScdnAclGroup: ScdnAclGroup,
    ScdnWafRule: ScdnWafRule,
    ClsSearchLogs: ClsSearchLogs,
    DescribeUrlViolationsResponse: DescribeUrlViolationsResponse,
    IpFilter: IpFilter,
    ScdnAclConfig: ScdnAclConfig,
    ScdnDdosConfig: ScdnDdosConfig,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    OriginAuthentication: OriginAuthentication,
    ErrorPageRule: ErrorPageRule,
    DescribeOriginDataResponse: DescribeOriginDataResponse,
    PurgeTask: PurgeTask,
    OriginPullTimeout: OriginPullTimeout,
    DeleteCdnDomainResponse: DeleteCdnDomainResponse,
    OriginIp: OriginIp,
    CdnIp: CdnIp,
    DescribeCdnDataRequest: DescribeCdnDataRequest,
    ExtraLogset: ExtraLogset,
    CacheTagKey: CacheTagKey,
    Quic: Quic,
    DescribeDomainsRequest: DescribeDomainsRequest,
    OfflineCache: OfflineCache,
    UrlRedirectRule: UrlRedirectRule,
    IpFilterPathRule: IpFilterPathRule,

}
