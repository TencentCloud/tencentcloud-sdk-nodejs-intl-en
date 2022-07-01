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
 * Smart compression
 * @class
 */
class Compression extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable Smart compression
`on`: Enable
`off`: Disable
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
 * Certificate configurations for domain names
 * @class
 */
class HostCertSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Server certificate configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<ServerCertInfo> || null}
         */
        this.CertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }

    }
}

/**
 * ModifyDefaultCertificate request structure.
 * @class
 */
class ModifyDefaultCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Certificate status
`deployed`: The certificate is deployed.
`disabled`: The certificate is disabled.
If the deployment fails, you can pass in `Status = deployed` again.
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeZoneDetails response structure.
 * @class
 */
class DescribeZoneDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of name servers used
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * List of name servers assigned to users by Tencent Cloud
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * Site status
- `active`: The name server is switched.
- `pending`: The name server is not switched.
- `moved`: The name server is moved.
- `deactivated`: The name server is blocked.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Specifies how the site is connected to EdgeOne.
- `full`: The site is connected via name server.
- `partial`: The site is connected via CNAME.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Indicates whether the site is disabled
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * Site creation date
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Site modification date
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * User-defined name server information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

        /**
         * User-defined name server IP information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<VanityNameServersIps> || null}
         */
        this.VanityNameServersIps = null;

        /**
         * Specifies whether to enable CNAME acceleration
- `enabled`: Enable
- `disabled`: Disable
         * @type {string || null}
         */
        this.CnameSpeedUp = null;

        /**
         * Ownership verification status of the site when it accesses via CNAME.
- `finished`: The site is verified.
- `pending`: The site is waiting for verification.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CnameStatus = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }

        if (params.VanityNameServersIps) {
            this.VanityNameServersIps = new Array();
            for (let z in params.VanityNameServersIps) {
                let obj = new VanityNameServersIps();
                obj.deserialize(params.VanityNameServersIps[z]);
                this.VanityNameServersIps.push(obj);
            }
        }
        this.CnameSpeedUp = 'CnameSpeedUp' in params ? params.CnameSpeedUp : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplicationProxy response structure.
 * @class
 */
class DeleteApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * HTTP2 configuration switch
`on`: Enable
`off`: Disable
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Http2 = null;

        /**
         * OCSP configuration switch
`on`: Enable
`off`: Disable
It is disabled by default.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OcspStapling = null;

        /**
         * TLS version settings. Valid values: `TLSv1`, `TLSV1.1`, `TLSV1.2`, and `TLSv1.3`. Only consecutive versions can be enabled at the same time.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.TlsVersion = null;

        /**
         * HSTS Configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Hsts || null}
         */
        this.Hsts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.TlsVersion = 'TlsVersion' in params ? params.TlsVersion : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }

    }
}

/**
 * ScanDnsRecords response structure.
 * @class
 */
class ScanDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scan status
- `doing`: Scanning
- `done`: Scanned
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Number of DNS records added after scanning
         * @type {number || null}
         */
        this.RecordsAdded = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RecordsAdded = 'RecordsAdded' in params ? params.RecordsAdded : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Site query filter
 * @class
 */
class ZoneFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters by the field name. Vaules:
- `name`: Site name.
- `status`: Site status.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filters by the field value
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Specifies whether to enable fuzzy query. It’s only available when filter name is `name`. If it’s enabled, the length of `Values` must be 1.
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * ModifyLoadBalancingStatus response structure.
 * @class
 */
class ModifyLoadBalancingStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrefetchTasks response structure.
 * @class
 */
class DescribePrefetchTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total entries that match the specified query condition
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of tasks returned
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplicationProxy request structure.
 * @class
 */
class DeleteApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * DescribeZoneSetting request structure.
 * @class
 */
class DescribeZoneSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * ModifyZoneStatus request structure.
 * @class
 */
class ModifyZoneStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site status.
- `false`: Enable the site.
- `true`: Disable the site.
         * @type {boolean || null}
         */
        this.Paused = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Paused = 'Paused' in params ? params.Paused : null;

    }
}

/**
 * ModifyDnsRecord request structure.
 * @class
 */
class ModifyDnsRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Proxy mode
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * CreateApplicationProxyRules request structure.
 * @class
 */
class CreateApplicationProxyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Rule list
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }

    }
}

/**
 * CLB information
 * @class
 */
class LoadBalancing extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name. You can use @ to represent the root domain.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Proxy mode. Valid values:
`dns_only`: Only DNS
`proxied`: Enable proxy
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Indicates DNS TTL time when `Type=dns_only`
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * ID of the origin group used
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * Information of the origin server used
         * @type {Array.<OriginGroup> || null}
         */
        this.Origin = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Schedules domain names
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.Origin) {
            this.Origin = new Array();
            for (let z in params.Origin) {
                let obj = new OriginGroup();
                obj.deserialize(params.Origin[z]);
                this.Origin.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;

    }
}

/**
 * ModifyDnssec request structure.
 * @class
 */
class ModifyDnssecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * DNSSEC status
- `enabled`: Enabled
- `disabled`: Disabled
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyZoneSetting request structure.
 * @class
 */
class ModifyZoneSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site to be modified
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Cache expiration time
         * @type {CacheConfig || null}
         */
        this.Cache = null;

        /**
         * Node cache key
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Browser cache configuration
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * Offline cache
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * QUIC access
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * Maximum size of files transferred over POST request
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * Smart compression configuration
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * HTTP2 origin-pull configuration
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * Force HTTPS redirect configuration
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * HTTPS acceleration configuration
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Origin server configuration
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Smart acceleration configuration
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * WebSocket configuration
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * Origin-pull client IP header configuration
         * @type {ClientIp || null}
         */
        this.ClientIpHeader = null;

        /**
         * 
         * @type {CachePrefresh || null}
         */
        this.CachePrefresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.Cache) {
            let obj = new CacheConfig();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
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

        if (params.PostMaxSize) {
            let obj = new PostMaxSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.UpstreamHttp2) {
            let obj = new UpstreamHttp2();
            obj.deserialize(params.UpstreamHttp2)
            this.UpstreamHttp2 = obj;
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

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.ClientIpHeader) {
            let obj = new ClientIp();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
        }

    }
}

/**
 * DescribeApplicationProxyDetail request structure.
 * @class
 */
class DescribeApplicationProxyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.ProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * CreateApplicationProxy response structure.
 * @class
 */
class CreateApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-4 application proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportDnsRecords request structure.
 * @class
 */
class ImportDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * File content
         * @type {string || null}
         */
        this.File = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.File = 'File' in params ? params.File : null;

    }
}

/**
 * Do not cache the configuration
 * @class
 */
class CacheConfigNoCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to cache the configuration
`on`: Do not cache
`off`: Cache
Note: This field may return `null`, indicating that no valid values can be obtained.
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
 * Origin server configuration
 * @class
 */
class Origin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin-pull protocol.
`http`: Switch HTTPS requests to HTTP
`follow`: Follow the protocol of the request.
`https`: Switch HTTP requests to HTTPS. This only supports port 443 on the origin server.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;

    }
}

/**
 * Content management task result
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Status of the task
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Resource
         * @type {string || null}
         */
        this.Target = null;

        /**
         * Task type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Task creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Task completion time
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Sorting conditions for query results.
 * @class
 */
class CertSort extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fields that can be sorted. Values:
`createTime`: Domain name creation time
`certExpireTime`: Certificate expiration time
`certDeployTime`: Certificate deployment time
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Sorting order. Valid values: `asc` and `desc` (default).
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
 * DescribeHostsSetting response structure.
 * @class
 */
class DescribeHostsSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of domain names
         * @type {Array.<DetailHost> || null}
         */
        this.Hosts = null;

        /**
         * Number of domain names
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

        if (params.Hosts) {
            this.Hosts = new Array();
            for (let z in params.Hosts) {
                let obj = new DetailHost();
                obj.deserialize(params.Hosts[z]);
                this.Hosts.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZone response structure.
 * @class
 */
class ModifyZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Name server used by the site
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * Site status.
- `pending`: The name server is not connected.
- `active`: The name server is connected.
- `moved`: The name server is moved.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Specifies how the site is connected to EdgeOne.
- `full`: Connect via the name server.
- `partial`: Connect via the CNAME.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * List of name servers assigned by Tencent Cloud
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * CNAME access status.
- `finished`: Ownership of the site is verified.
- `pending`: Verifying the ownership of the site.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CnameStatus = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZone request structure.
 * @class
 */
class ModifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID, which is used to identify the site.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Specifies how the site is connected to EdgeOne.
- `full`: Connect via the name server.
- `partial`: Connect via the CNAME.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Custom site information
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }

    }
}

/**
 * DeleteZone response structure.
 * @class
 */
class DeleteZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReclaimZone response structure.
 * @class
 */
class ReclaimZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePurgeTask response structure.
 * @class
 */
class CreatePurgeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * List of failed tasks and reasons
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<FailReason> || null}
         */
        this.FailedList = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new FailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplicationProxyRule response structure.
 * @class
 */
class DeleteApplicationProxyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIdentification request structure.
 * @class
 */
class DescribeIdentificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
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
 * CreateDnsRecord request structure.
 * @class
 */
class CreateDnsRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Proxy mode. Valid values: `dns_only`, `cdn_only`, and `secure_cdn`.
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * Layer-7 offline log details
 * @class
 */
class L7OfflineLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the log packaging
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * Site name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Log size, in bytes
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Download address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Log package name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.LogPacketName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LogPacketName = 'LogPacketName' in params ? params.LogPacketName : null;

    }
}

/**
 * Application proxy rule
 * @class
 */
class ApplicationProxyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol. Valid values: `TCP` and `UDP`.
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * Port. Valid values:
`80`: Port 80
`81-90`: Port range 81-90
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * Origin server type. Valid values:
`custom`: Specified origins
`origins`: An origin group
`load_balancing`: A load balancer
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server information.
When `OriginType=custom`, this field value indicates multiple origin servers in either of the following formats:
IP:Port
Domain name:Port
When `OriginType=origins`, it indicates the origin group ID.
 
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * Rule ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Status:
`online`: Enable
`offline`: Disable
`progress`: Deploying
`stopping`: Disabling
`fail`: Deployment/Disabling failed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Passes the client IP. When `Proto=TCP`, valid values:
`TOA`: Pass the client IP via TOA
`PPV1`: Pass the client IP via Proxy Protocol V1
`PPV2`: Pass the client IP via Proxy Protocol V2
`OFF`: Do not pass the client IP.
When `Proto=UDP`, valid values:
`PPV2`: Pass the client IP via Proxy Protocol V2
`OFF`: Do not pass the client IP.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * Specifies whether to enable session persistence
         * @type {boolean || null}
         */
        this.SessionPersist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

    }
}

/**
 * Smart acceleration configuration
 * @class
 */
class SmartRouting extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable smart acceleration
`on`: Enable
`off`: Disable
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
 * DescribeDnsData response structure.
 * @class
 */
class DescribeDnsDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS request data
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<DataItem> || null}
         */
        this.Data = null;

        /**
         * Interval
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Interval = null;

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
                let obj = new DataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Site information
 * @class
 */
class Zone extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * List of name servers used by the site
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * List of name servers assigned by Tencent Cloud
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * Site status
- `active`: The name server is switched.
- `pending`: The name server is not switched.
- `moved`: The name server is moved.
- `deactivated`: The name server is blocked.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * How the site is connected to EdgeOne.
- `full`: The site is connected via name server.
- `partial`: The site is connected via CNAME.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Indicates whether the site is disabled
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * Site creation date
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Site modification date
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * Ownership verification status of the site when it is connected to EdgeOne via CNAME.
- `finished`: The site is verified.
- `pending`: Verifying the ownership of the site.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CnameStatus = null;

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
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;

    }
}

/**
 * ModifyApplicationProxyStatus request structure.
 * @class
 */
class ModifyApplicationProxyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer-4 proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Status
`offline`: Disabled
`online`: Enabled
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Cache time settings
 * @class
 */
class CacheConfigCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache configuration switch
`on`: Enable
`off`: Disable
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Cache expiration time settings
Unit: second. The maximum value is 365 days.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.CacheTime = null;

        /**
         * Specifies whether to enable force cache
`on`: Enable
`off`: Disable
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

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
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;

    }
}

/**
 * Query filter to search for certificates
 * @class
 */
class CertFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters by the field name. Values:
 - `host`: Domain name
 - `certId`: Certificate ID
 - `certAlias`: Certificate alias
 - `certType: default`: Default certificate; `upload`: External certificate; `managed`: Tencent Cloud certificate.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filters by the field value
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Specifies whether to enable fuzzy query, which only supports the `host` field.
If it is enabled, the length of `Value` must be 1.
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * ModifyLoadBalancingStatus request structure.
 * @class
 */
class ModifyLoadBalancingStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * Status.
`online`: Enabled
`offline`: Disabled
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * DescribeCnameStatus response structure.
 * @class
 */
class DescribeCnameStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of CNAME statuses
         * @type {Array.<CnameStatus> || null}
         */
        this.Status = null;

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

        if (params.Status) {
            this.Status = new Array();
            for (let z in params.Status) {
                let obj = new CnameStatus();
                obj.deserialize(params.Status[z]);
                this.Status.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancing request structure.
 * @class
 */
class DescribeLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Ignore query string parameter
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Specifies whether the `Host` parameter supports fuzzy match
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * ModifyApplicationProxyRule request structure.
 * @class
 */
class ModifyApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Protocol. Valid values: `TCP` and `UDP`.
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * Port. Valid values:
`80`: Port 80
`81-90`: Port range 81-90
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * Origin server type. Valid values:
`custom`: Specified origins
`origins`: An origin group
`load_balancing`: A load balancer
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server information.
When `OriginType=custom`, this field value indicates multiple origin servers in either of the following formats:
IP:Port
Domain name: Port
When `OriginType=origins`, it indicates the origin group ID.
 
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * Passes the client IP. When `Proto=TCP`, valid values:
`TOA`: Pass the client IP via TOA.
`PPV1`: Pass the client IP via Proxy Protocol V1.
`PPV2`: Pass the client IP via Proxy Protocol V2.
`OFF`: Do not pass the client IP.
When `Proto=UDP`, valid values:
`PPV2`: Pass the client IP via Proxy Protocol V2.
`OFF`: Do not pass the client IP.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * Specifies whether to enable session persistence
         * @type {boolean || null}
         */
        this.SessionPersist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

    }
}

/**
 * CNAME status
 * @class
 */
class CnameStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * CNAME address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Status
`active`: Activated
`moved`: Not activated
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyZoneSetting response structure.
 * @class
 */
class ModifyZoneSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadL7Logs response structure.
 * @class
 */
class DownloadL7LogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-7 offline log data
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<L7OfflineLog> || null}
         */
        this.Data = null;

        /**
         * Page size
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Page number
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Total number of pages
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * Total number of entries
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.TotalSize = null;

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
                let obj = new L7OfflineLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDnsRecord response structure.
 * @class
 */
class CreateDnsRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Proxy mode
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Resolution status. Valid values:
`active`: Activated
`pending`: Not activated
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Whether the DNS record is locked
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * CNAME address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HTTPS server certificate configuration
 * @class
 */
class ServerCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server certificate ID, which is the ID of the default certificate. If you choose to upload an external certificate for SSL certificate management, a certificate ID will be generated.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Alias of the certificate
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Certificate type.
`default`: Default certificate
`upload`: External certificate
`managed`: Tencent Cloud managed certificate
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time when the certificate expires
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Certificate deployment time
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * Certificate deployment status.
`processing`: Deploying
`deployed`: Deployed
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeZones request structure.
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination parameter, which specifies the offset.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter, which specifies the number of sites returned in each page.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Query condition filter, which supports complex type.
         * @type {Array.<ZoneFilter> || null}
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
                let obj = new ZoneFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * Origin group record
 * @class
 */
class OriginRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record value
         * @type {string || null}
         */
        this.Record = null;

        /**
         * Region of the origin group. It’s available when the origin group `Type` is `area`. 
If it’s left empty, it means to use the default region.
         * @type {Array.<string> || null}
         */
        this.Area = null;

        /**
         * The weight of the origin group. It’s available when the `Type` is `weight`.
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * Port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Record ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * Specifies whether to run private origin authentication.
It is valid only when `OriginType=third_part`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.Private = null;

        /**
         * Private origin parameter.
It is valid only when `Private=true`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<OriginRecordPrivateParameter> || null}
         */
        this.PrivateParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Record = 'Record' in params ? params.Record : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Private = 'Private' in params ? params.Private : null;

        if (params.PrivateParameter) {
            this.PrivateParameter = new Array();
            for (let z in params.PrivateParameter) {
                let obj = new OriginRecordPrivateParameter();
                obj.deserialize(params.PrivateParameter[z]);
                this.PrivateParameter.push(obj);
            }
        }

    }
}

/**
 * CreatePrefetchTask request structure.
 * @class
 */
class CreatePrefetchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of resources to be pre-warmed, for example:
http://www.example.com/example.txt
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * Specifies whether to encode the URL
Note that if it’s enabled, the purging is based on the converted URLs.
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

        /**
         * HTTP header information
         * @type {Array.<Header> || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Targets = 'Targets' in params ? params.Targets : null;
        this.EncodeUrl = 'EncodeUrl' in params ? params.EncodeUrl : null;

        if (params.Headers) {
            this.Headers = new Array();
            for (let z in params.Headers) {
                let obj = new Header();
                obj.deserialize(params.Headers[z]);
                this.Headers.push(obj);
            }
        }

    }
}

/**
 * DeleteApplicationProxyRule request structure.
 * @class
 */
class DeleteApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * Follows the origin server configuration
 * @class
 */
class CacheConfigFollowOrigin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to follow the origin server configuration
`on`: Enable
`off`: Disable
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * Custom name servers
 * @class
 */
class VanityNameServers extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the custom name server
`on`: Enable
`off`: Disable
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * List of custom name servers
         * @type {Array.<string> || null}
         */
        this.Servers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Servers = 'Servers' in params ? params.Servers : null;

    }
}

/**
 * DescribeApplicationProxy response structure.
 * @class
 */
class DescribeApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of data
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<ApplicationProxy> || null}
         */
        this.Data = null;

        /**
         * Total number of records
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Indicates the number of instances that can be created by the site when `ZoneId` is specified
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Quota = null;

        /**
         * 
         * @type {number || null}
         */
        this.IpCount = null;

        /**
         * 
         * @type {number || null}
         */
        this.DomainCount = null;

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
                let obj = new ApplicationProxy();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Quota = 'Quota' in params ? params.Quota : null;
        this.IpCount = 'IpCount' in params ? params.IpCount : null;
        this.DomainCount = 'DomainCount' in params ? params.DomainCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLoadBalancing response structure.
 * @class
 */
class CreateLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IdentifyZone response structure.
 * @class
 */
class IdentifyZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Record value
         * @type {string || null}
         */
        this.RecordValue = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Whether to enable custom WebSocket timeout setting. When it’s `off`: it means to keep the default WebSocket connection timeout period, which is 15 seconds. To change the timeout period, please set it to `on`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Sets timeout period in seconds. Maximum value: 120
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
 * Data items in a DNS request curve
 * @class
 */
class DataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time
         * @type {string || null}
         */
        this.Time = null;

        /**
         * Value
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * ModifyLoadBalancing request structure.
 * @class
 */
class ModifyLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * Proxy mode.
`dns_only`: Only DNS
`proxied`: Enable proxy
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of the origin group used
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * Indicates DNS TTL time when `Type=dns_only`
         * @type {number || null}
         */
        this.TTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * CreateLoadBalancing request structure.
 * @class
 */
class CreateLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name. You can use @ to represent the root domain.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Proxy mode. Valid values:
`dns_only`: Only DNS
`proxied`: Enable proxy
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ID of the origin group used
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * Indicates DNS TTL time when `Type=dns_only` 
         * @type {number || null}
         */
        this.TTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * DescribeDnssec request structure.
 * @class
 */
class DescribeDnssecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
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
 * DescribeLoadBalancingDetail response structure.
 * @class
 */
class DescribeLoadBalancingDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Subdomain name. You can use @ to represent the root domain.
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Proxy mode. Valid values:
`dns_only`: Only DNS
`proxied`: Enable proxy
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Indicates DNS TTL time when `Type=dns_only`
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * ID of the origin group used
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * Information of the origin server used
         * @type {Array.<OriginGroup> || null}
         */
        this.Origin = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Status of the task
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Schedules domain names
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.Origin) {
            this.Origin = new Array();
            for (let z in params.Origin) {
                let obj = new OriginGroup();
                obj.deserialize(params.Origin[z]);
                this.Origin.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrefetchTasks request structure.
 * @class
 */
class DescribePrefetchTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Start time of the query
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Offset of the query
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of results returned
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Statuses of tasks to be queried. Values:
`processing`, `success`, `failed`, `timeout` and `invalid`
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names queried
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Resources queried
         * @type {string || null}
         */
        this.Target = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Target = 'Target' in params ? params.Target : null;

    }
}

/**
 * DNS record
 * @class
 */
class DnsRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Host record
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record value
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Proxy mode
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * TTL value
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * Domain name lock
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Resolution status
`active`: Activated
`pending`: Not activated
         * @type {string || null}
         */
        this.Status = null;

        /**
         * CNAME address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Specifies whether to enable load balancing, layer-4 proxy, or security protection for the domain name.
- `lb`: Load balancing.
- `security`: Security protection.
- `l4`: Layer-4 proxy.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.DomainStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;

    }
}

/**
 * DescribeApplicationProxyDetail response structure.
 * @class
 */
class DescribeApplicationProxyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Proxy mode. Valid values:
`ip`: Anycast IP
`domain`: CNAME
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * `0`: Disable security protection; `1`: Enable security protection.
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * `0`: Disable acceleration; `1`: Enable acceleration.
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * This field is moved to `Rule.ForwardClientIp`.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * This field is moved to `Rule.SessionPersist`.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * List of rules
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * Status. Valid values:
`online`: Enable
`offline`: Disable
`progress`: Deploying
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Scheduling information
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Session persistence time
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Specifies how a layer-4 proxy is created.
`hostname`: Subdomain name
`instance`: Instance
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * ID of the layer-7 domain name
         * @type {string || null}
         */
        this.HostId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.HostId = 'HostId' in params ? params.HostId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDnsRecords request structure.
 * @class
 */
class DescribeDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Query filter
         * @type {Array.<DnsRecordFilter> || null}
         */
        this.Filters = null;

        /**
         * Sorts the order
         * @type {string || null}
         */
        this.Order = null;

        /**
         * Valid values: `asc`, and `desc`.
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * Valid values: `all`, and `any`.
         * @type {string || null}
         */
        this.Match = null;

        /**
         * Limit on paginated queries. Default value: 100. Maximum value: 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset for paginated queries. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DnsRecordFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Match = 'Match' in params ? params.Match : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * CreatePrefetchTask response structure.
 * @class
 */
class CreatePrefetchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * List of failed tasks
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<FailReason> || null}
         */
        this.FailedList = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new FailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDefaultCertificates request structure.
 * @class
 */
class DescribeDefaultCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * ModifyApplicationProxyRule response structure.
 * @class
 */
class ModifyApplicationProxyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Failure reason
 * @class
 */
class FailReason extends  AbstractModel {
    constructor(){
        super();

        /**
         * Failure reason
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * List of resources failed to be processed. 
 
         * @type {Array.<string> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Targets = 'Targets' in params ? params.Targets : null;

    }
}

/**
 * CreateZone request structure.
 * @class
 */
class CreateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Access mode. Valid values:
- `full` (default): Access via NS
- `partial`: Access via CNAME
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Specifies whether to skip resolution record scanning
         * @type {boolean || null}
         */
        this.JumpStart = null;

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
        this.JumpStart = 'JumpStart' in params ? params.JumpStart : null;

    }
}

/**
 * Private origin authentication parameter
 * @class
 */
class OriginRecordPrivateParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the private origin authentication parameter.
`AccessKeyId`: Access key ID
`SecretAccessKey`: Secret access key
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Value of the private origin authentication parameter
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
 * CheckCertificate response structure.
 * @class
 */
class CheckCertificateResponse extends  AbstractModel {
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
 * DescribePurgeTasks response structure.
 * @class
 */
class DescribePurgeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total entries that match the specified query condition
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of tasks returned
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadL7Logs request structure.
 * @class
 */
class DownloadL7LogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time. It must conform to the RFC3339 standard.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time. It must conform to the RFC3339 standard.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Current page
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * List of sites
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * List of domain names
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

/**
 * DeleteLoadBalancing response structure.
 * @class
 */
class DeleteLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckCertificate request structure.
 * @class
 */
class CheckCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * Private key
         * @type {string || null}
         */
        this.PrivateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * CreateApplicationProxyRule request structure.
 * @class
 */
class CreateApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Protocol. Valid values: `TCP` and `UDP`.
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * Port. Valid values:
`80`: Port 80
`81-90`: Port range 81-90
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * Origin server type. Valid values:
`custom`: Specified origins
`origins`: An origin group
`load_balancing`: A load balancer
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Origin server information.
When `OriginType=custom`, this field value indicates multiple origin servers in either of the following formats:
IP:Port
Domain name:Port
When `OriginType=origins`, it indicates the origin group ID.
 
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * Passes the client IP. When `Proto=TCP`, valid values:
`TOA`: Pass the client IP via TOA
`PPV1`: Pass the client IP via Proxy Protocol V1
`PPV2`: Pass the client IP via Proxy Protocol V2
`OFF`: Do not pass the client IP.
When `Proto=UDP`, valid values:
`PPV2`: Pass the client IP via Proxy Protocol V2
`OFF`: Do not pass the client IP.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * Specifies whether to enable session persistence 
         * @type {boolean || null}
         */
        this.SessionPersist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

    }
}

/**
 * Force HTTPS redirect configuration
 * @class
 */
class ForceRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * Force redirect configuration switch
`on`: Enable
`off`: Disable
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Redirection status code
301
302
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.RedirectStatusCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;

    }
}

/**
 * ModifyApplicationProxy request structure.
 * @class
 */
class ModifyApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer-4 proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Layer-4 proxy name
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * This parameter is disused.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * This parameter is disused.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * Session persistence time. Value range: 30-3600 (in seconds).
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Specifies how a layer-4 proxy is created.
`hostname`: Subdomain name
`instance`: Instance
         * @type {string || null}
         */
        this.ProxyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

    }
}

/**
 * ModifyApplicationProxyStatus response structure.
 * @class
 */
class ModifyApplicationProxyStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-4 proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Domain name configuration information
 * @class
 */
class DetailHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tencent Cloud account ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Acceleration service status
`process`: Deploying
`online`: Enabled
`offline`: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * DescribeDnsRecords response structure.
 * @class
 */
class DescribeDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Used for paginated query by total count
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of DNS records
         * @type {Array.<DnsRecord> || null}
         */
        this.Records = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new DnsRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 
 * @class
 */
class CachePrefresh extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 
         * @type {number || null}
         */
        this.Percent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Percent = 'Percent' in params ? params.Percent : null;

    }
}

/**
 * ModifyZoneCnameSpeedUp request structure.
 * @class
 */
class ModifyZoneCnameSpeedUpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CNAME acceleration status.
- `enabled`: Enabled
- `disabled`: Disabled
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeHostsCertificate request structure.
 * @class
 */
class DescribeHostsCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

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
         * Query filter
         * @type {Array.<CertFilter> || null}
         */
        this.Filters = null;

        /**
         * Sorting order
         * @type {CertSort || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new CertFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sort) {
            let obj = new CertSort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * HSTS configuration
 * @class
 */
class Hsts extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to enable. Valid values: `on` and `off`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * `MaxAge` value.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.MaxAge = null;

        /**
         * Specifies whether to include subdomain names. Valid values: `on` and `off`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.IncludeSubDomains = null;

        /**
         * Specifies whether to preload. Valid values: `on` and `off`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Preload = null;

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
        this.Preload = 'Preload' in params ? params.Preload : null;

    }
}

/**
 * ModifyHostsCertificate response structure.
 * @class
 */
class ModifyHostsCertificateResponse extends  AbstractModel {
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
 * ModifyLoadBalancing response structure.
 * @class
 */
class ModifyLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApplicationProxyRule response structure.
 * @class
 */
class CreateApplicationProxyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDnsRecord response structure.
 * @class
 */
class ModifyDnsRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Record content
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * Priority
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * Proxy mode
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Resolution status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * CNAME address
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * Whether the DNS record is locked
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApplicationProxy request structure.
 * @class
 */
class CreateApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Layer-4 proxy name
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Scheduling mode. Values:
`ip`: Anycast IP
`domain`: CNAME
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * `0`: Disable security protection; `1`: Enable security protection.
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * `0`: Disable acceleration; `1`: Enable acceleration.
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * This field is moved to `Rule.ForwardClientIp`.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * This field is moved to `Rule.SessionPersist`.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * Rule details
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * Session persistence duration. Value range: 30-3600 (in seconds).
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Specifies how a layer-4 proxy is created.
`hostname`: Subdomain name
`instance`: Instance
         * @type {string || null}
         */
        this.ProxyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

    }
}

/**
 * Maximum size of the file uploaded for streaming via a POST request
 * @class
 */
class PostMaxSize extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to enable custom setting of the maximum file size. 
`off`: Disable. In this case, the max size defaults to 32 MB.
`on`: Enable. You can set a custom max size.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Maximum size. Value range: 1-500 MB.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * 
 * @class
 */
class OriginCheckOriginStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * DescribeCnameStatus request structure.
 * @class
 */
class DescribeCnameStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * DescribeDnssec response structure.
 * @class
 */
class DescribeDnssecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * DNSSEC status. Valid values:
- `enabled`: Enabled
- `disabled`: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 
         * @type {DnssecInfo || null}
         */
        this.Dnssec = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Dnssec) {
            let obj = new DnssecInfo();
            obj.deserialize(params.Dnssec)
            this.Dnssec = obj;
        }
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateZone response structure.
 * @class
 */
class CreateZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Specifies how the site is connected to EdgeOne.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Site status
- `pending`: The name server is not switched.
- `active`: The name server is switched to another assigned.
- `moved`: Move the NS out of Tencent Cloud
         * @type {string || null}
         */
        this.Status = null;

        /**
         * List of name servers
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * List of name servers assigned to users
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * Site creation date
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * Site update time
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ignore query string parameters for DNS data
 * @class
 */
class DnsDataFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name. Valid values:
`zone`: Site name
`host`: Domain name
`type`: DNS resolution type
`code`: DNS response code
`area`: Region of the resolution server
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter value
When `Name=area`, valid values:
`Asia`
`Europe`
`Africa`
`Oceania`
`Americas`

When `Name=code`, valid values:
`NoError`: Successful response.
`NXDomain`: Non-existent domain in the request. It is only valid when the response is from the authoritative name server.
`NotImp`: Request type not supported.
`Refused`: The name server refuses to perform the requested operation for policy reasons.
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Parameter value
When `Name=area`, valid values:
`Asia`
`Europe`
`Africa`
`Oceania`
`Americas`

When `Name=code`, valid values:
`NoError`: Successful response.
`NXDomain`: Non-existent domain in the request. It is only valid when the response is from the authoritative name server.
`NotImp`: Request type not supported.
`Refused`: The name server refuses to perform the requested operation for policy reasons.
         * @type {Array.<string> || null}
         */
        this.Values = null;

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
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DeleteLoadBalancing request structure.
 * @class
 */
class DeleteLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;

    }
}

/**
 * Application proxy instance
 * @class
 */
class ApplicationProxy extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * Scheduling mode:
`ip`: Anycast IP
`domain`: CNAME
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * `0`: Disable security protection; `1`: Enable security protection.
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * `0`: Disable acceleration; `1`: Enable acceleration.
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * This field is moved to `Rule.ForwardClientIp`.
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * This field is moved to `Rule.SessionPersist`.
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * Rule list
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * Status:
`online`: Enable
`offline`: Disable
`progress`: Deploying
`stopping`: Disabling
`fail`: Deployment/Disabling failed
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Scheduling information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * Update time
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Site ID
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Session persistence duration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Specifies how a layer-4 proxy is created.
`hostname`: Subdomain name
`instance`: Instance
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * ID of the layer-7 domain name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.HostId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

    }
}

/**
 * ModifyApplicationProxy response structure.
 * @class
 */
class ModifyApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Layer-4 proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cache key configuration
 * @class
 */
class CacheKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to enable full-path cache
`on`: Enable full-path cache (i.e., disable Ignore Query String)
`off`: Disable full-path cache (i.e., enable Ignore Query String)
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.FullUrlCache = null;

        /**
         * Specifies whether the cache key is case sensitive
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.IgnoreCase = null;

        /**
         * Request parameter contained in `CacheKey`
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {QueryString || null}
         */
        this.QueryString = null;

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
            let obj = new QueryString();
            obj.deserialize(params.QueryString)
            this.QueryString = obj;
        }

    }
}

/**
 * ModifyApplicationProxyRuleStatus response structure.
 * @class
 */
class ModifyApplicationProxyRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZones response structure.
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of sites that match the specified conditions
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Details of sites
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<Zone> || null}
         */
        this.Zones = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new Zone();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HTTP header, used as input for the CreatePrefetchTask API
 * @class
 */
class Header extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP header name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * HTTP header value
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
 * DescribeZoneDetails request structure.
 * @class
 */
class DescribeZoneDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
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
 * DescribeDefaultCertificates response structure.
 * @class
 */
class DescribeDefaultCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of certificates
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of default certificates
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<DefaultServerCertInfo> || null}
         */
        this.CertInfo = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new DefaultServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationProxy request structure.
 * @class
 */
class DescribeApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Pagination parameter
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Pagination parameter
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyApplicationProxyRuleStatus request structure.
 * @class
 */
class ModifyApplicationProxyRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Layer-4 proxy ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * Rule ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Status
`offline`: Disabled
`online`: Enabled
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Request parameter contained in `CacheKey`
 * @class
 */
class QueryString extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to use `QueryString` as part of `CacheKey`. Valid values: `on` and `off`.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * `includeCustom`: Include the specified query strings.
`excludeCustom`: Exclude the specified query strings.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Array of query strings used/excluded
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
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
 * ReclaimZone request structure.
 * @class
 */
class ReclaimZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
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
 * DeleteZone request structure.
 * @class
 */
class DeleteZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
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
 * ModifyDefaultCertificate response structure.
 * @class
 */
class ModifyDefaultCertificateResponse extends  AbstractModel {
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
 * Client IP header
 * @class
 */
class ClientIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies whether to enable client IP header
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Name of the origin-pull client IP request header
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.HeaderName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;

    }
}

/**
 * DescribeHostsCertificate response structure.
 * @class
 */
class DescribeHostsCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Used for paginated query by total count
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of certificate configurations for domain names
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<HostCertSetting> || null}
         */
        this.Hosts = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Hosts) {
            this.Hosts = new Array();
            for (let z in params.Hosts) {
                let obj = new HostCertSetting();
                obj.deserialize(params.Hosts[z]);
                this.Hosts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneSetting response structure.
 * @class
 */
class DescribeZoneSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache expiration time configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CacheConfig || null}
         */
        this.Cache = null;

        /**
         * Node cache key configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Browser cache configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * Offline cache
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * QUIC access
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * POST transport configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * Smart compression configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * HTTP2 origin-pull configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * Force HTTPS redirect configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * HTTPS acceleration configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * Origin server configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * Dynamic acceleration configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Domain name of the site
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * WebSocket configuration.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * Origin-pull client IP header configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {ClientIp || null}
         */
        this.ClientIpHeader = null;

        /**
         * 
         * @type {CachePrefresh || null}
         */
        this.CachePrefresh = null;

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

        if (params.Cache) {
            let obj = new CacheConfig();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
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

        if (params.PostMaxSize) {
            let obj = new PostMaxSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.UpstreamHttp2) {
            let obj = new UpstreamHttp2();
            obj.deserialize(params.UpstreamHttp2)
            this.UpstreamHttp2 = obj;
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

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.ClientIpHeader) {
            let obj = new ClientIp();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Task ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * Type of the purging task
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Start time of the query
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the query
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Offset of the query
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Maximum number of results returned
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Statuses of tasks to be queried. Values:
`processing`, `success`, `failed`, `timeout` and `invalid`
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * List of domain names queried
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * Queries content
         * @type {string || null}
         */
        this.Target = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Target = 'Target' in params ? params.Target : null;

    }
}

/**
 * IdentifyZone request structure.
 * @class
 */
class IdentifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
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
 * Cache rule configuration
 * @class
 */
class CacheConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cache configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CacheConfigCache || null}
         */
        this.Cache = null;

        /**
         * No-cache configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {CacheConfigNoCache || null}
         */
        this.NoCache = null;

        /**
         * Follows the origin server configuration
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * ModifyZoneCnameSpeedUp response structure.
 * @class
 */
class ModifyZoneCnameSpeedUpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * CNAME acceleration status.
- `enabled`: Enabled
- `disabled`: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Browser cache rule configuration. 
 * @class
 */
class MaxAge extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the max age of the cache (in seconds). The maximum value is 365 days.
Note: the value `0` means not to cache.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.MaxAgeTime = null;

        /**
         * Specifies whether to follow the max cache age of the origin server. Valid values: `on` and `off`. If it's on, `MaxAgeTime` is ignored.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.MaxAgeTime = 'MaxAgeTime' in params ? params.MaxAgeTime : null;
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;

    }
}

/**
 * DeleteDnsRecords request structure.
 * @class
 */
class DeleteDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Record ID
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * ModifyHostsCertificate request structure.
 * @class
 */
class ModifyHostsCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Domain name that the certificate will be attached to
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * Certificate information. Note that only `CertId` is required. If it is not specified, the default certificate will be used.
         * @type {Array.<ServerCertInfo> || null}
         */
        this.CertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }

    }
}

/**
 * ModifyZoneStatus response structure.
 * @class
 */
class ModifyZoneStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Site status.
- `false`: Enable the site.
- `true`: Disable the site.
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDnsData request structure.
 * @class
 */
class DescribeDnsDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Filter parameters
         * @type {Array.<DnsDataFilter> || null}
         */
        this.Filters = null;

        /**
         * Time granularity. The default value is `min`. The server can adapt to the time granularity specified.
Valid values:
`min`: 1 minute
`5min`: 5 minutes
`hour`: 1 hour
`day`: 1 day
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DnsDataFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * CreatePurgeTask request structure.
 * @class
 */
class CreatePurgeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the site
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Type of the purging task. Values:
- `purge_url`: Purge by the URL
- `purge_prefix`: Purge by the prefix
- `purge_host`: Purge by the Hostname
- `purge_all`: Purge all cached contents
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Target resource to be purged, which depends on the `Type` field.
1. When `Type = purge_host`:
Hostnames are purged, such as www.example.com and foo.bar.example.com.
2. When `Type = purge_prefix`:
Prefixes are purged, such as http://www.example.com/example.
3. When `Type = purge_url`:
URLs are purged, such as https://www.example.com/example.jpg.
4. When `Type = purge_all`: All types of resources are purged.
`Targets` is not a required field.
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * Specifies whether to transcode non-ASCII URLs according to RFC3986.
Note that if it’s enabled, the purging is based on the converted URLs.
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Targets = 'Targets' in params ? params.Targets : null;
        this.EncodeUrl = 'EncodeUrl' in params ? params.EncodeUrl : null;

    }
}

/**
 * DeleteDnsRecords response structure.
 * @class
 */
class DeleteDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {Array.<string> || null}
         */
        this.Ids = null;

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
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHostsSetting request structure.
 * @class
 */
class DescribeHostsSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

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
         * Specifies a domain name for the query
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

    }
}

/**
 * CreateApplicationProxyRules response structure.
 * @class
 */
class CreateApplicationProxyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of rule IDs
         * @type {Array.<string> || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIdentification response structure.
 * @class
 */
class DescribeIdentificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Verification status. Valid values:
- `pending`: Verifying
- `finished`: The site is verified.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * Record type
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * Record value
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * NS records of the domain name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Origin group information
 * @class
 */
class OriginGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin group ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * Origin group name
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * Origin server type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Record
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * Update time
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Origin server type
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * Whether the origin group is used for layer-4 proxy
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.ApplicationProxyUsed = null;

        /**
         * Whether the origin group is used for load balancing
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.LoadBalancingUsed = null;

        /**
         * 
         * @type {OriginCheckOriginStatus || null}
         */
        this.Status = null;

        /**
         * 
         * @type {string || null}
         */
        this.LoadBalancingUsedType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ApplicationProxyUsed = 'ApplicationProxyUsed' in params ? params.ApplicationProxyUsed : null;
        this.LoadBalancingUsed = 'LoadBalancingUsed' in params ? params.LoadBalancingUsed : null;

        if (params.Status) {
            let obj = new OriginCheckOriginStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.LoadBalancingUsedType = 'LoadBalancingUsedType' in params ? params.LoadBalancingUsedType : null;

    }
}

/**
 * DescribeLoadBalancing response structure.
 * @class
 */
class DescribeLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * CLB information
         * @type {Array.<LoadBalancing> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new LoadBalancing();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDnssec response structure.
 * @class
 */
class ModifyDnssecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Site name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * DNSSEC status.
- `enabled`: Enabled
- `disabled`: Disabled
         * @type {string || null}
         */
        this.Status = null;

        /**
         * DNSSEC information
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {DnssecInfo || null}
         */
        this.Dnssec = null;

        /**
         * Modification time
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Dnssec) {
            let obj = new DnssecInfo();
            obj.deserialize(params.Dnssec)
            this.Dnssec = obj;
        }
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanDnsRecords request structure.
 * @class
 */
class ScanDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * ImportDnsRecords response structure.
 * @class
 */
class ImportDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Record ID
         * @type {Array.<string> || null}
         */
        this.Ids = null;

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
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancingDetail request structure.
 * @class
 */
class DescribeLoadBalancingDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Site ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * CLB instance ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;

    }
}

/**
 * HTTPS server certificate configuration
 * @class
 */
class DefaultServerCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Server certificate ID, which is the ID of the default certificate. If you choose to upload an external certificate for SSL certificate management, a certificate ID will be generated.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * Certificate alias
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * Certificate type. Valid values:
`default`: Default certificate
`upload`: External certificate
`managed`: Tencent Cloud managed certificate
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Time when the certificate expires
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * Time when the certificate takes effect
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * Certificate common name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CommonName = null;

        /**
         * Domain names added to the SAN certificate
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * Certificate status. Valid values:
`applying`: Application in progress
`failed`: Application failed
`processing`: Deploying certificate
`deployed`: Certificate deployed
`disabled`: Certificate disabled
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Returns a message to display failure causes when `Status=failed`
Note: This field may return `null`, indicating that no valid value can be obtained.
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.CommonName = 'CommonName' in params ? params.CommonName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DNSSEC information
 * @class
 */
class DnssecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Flag
         * @type {number || null}
         */
        this.Flags = null;

        /**
         * Encryption algorithm
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * Encryption type
         * @type {string || null}
         */
        this.KeyType = null;

        /**
         * Digest type
         * @type {string || null}
         */
        this.DigestType = null;

        /**
         * Digest algorithm
         * @type {string || null}
         */
        this.DigestAlgorithm = null;

        /**
         * Digest message
         * @type {string || null}
         */
        this.Digest = null;

        /**
         * DS record value
         * @type {string || null}
         */
        this.DS = null;

        /**
         * Key tag
         * @type {number || null}
         */
        this.KeyTag = null;

        /**
         * Public key
         * @type {string || null}
         */
        this.PublicKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flags = 'Flags' in params ? params.Flags : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.KeyType = 'KeyType' in params ? params.KeyType : null;
        this.DigestType = 'DigestType' in params ? params.DigestType : null;
        this.DigestAlgorithm = 'DigestAlgorithm' in params ? params.DigestAlgorithm : null;
        this.Digest = 'Digest' in params ? params.Digest : null;
        this.DS = 'DS' in params ? params.DS : null;
        this.KeyTag = 'KeyTag' in params ? params.KeyTag : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;

    }
}

/**
 * Query filter to search for DNS records
 * @class
 */
class DnsRecordFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filters by the field name. Vaules:
- `name`: Site name.
- `status`: Site status.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Filters by the field value
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * Specifies whether to enable fuzzy query. It’s only available when the filter name is `name`. If it’s enabled, the length of `Values` must be 1.
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * HTTP2 origin-pull configuration
 * @class
 */
class UpstreamHttp2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable HTTP2 origin-pull
`on`: Enable
`off`: Disable
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
 * Configuration of offline cache
 * @class
 */
class OfflineCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable offline cache. Valid values: `on` and `off`.
Note: This field may return `null`, indicating that no valid value can be obtained.
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
 * IP of the custom name server
 * @class
 */
class VanityNameServersIps extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the custom name server
         * @type {string || null}
         */
        this.Name = null;

        /**
         * IPv4 address of the custom name server
         * @type {string || null}
         */
        this.IPv4 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IPv4 = 'IPv4' in params ? params.IPv4 : null;

    }
}

module.exports = {
    Compression: Compression,
    HostCertSetting: HostCertSetting,
    ModifyDefaultCertificateRequest: ModifyDefaultCertificateRequest,
    DescribeZoneDetailsResponse: DescribeZoneDetailsResponse,
    DeleteApplicationProxyResponse: DeleteApplicationProxyResponse,
    Https: Https,
    ScanDnsRecordsResponse: ScanDnsRecordsResponse,
    ZoneFilter: ZoneFilter,
    ModifyLoadBalancingStatusResponse: ModifyLoadBalancingStatusResponse,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    DeleteApplicationProxyRequest: DeleteApplicationProxyRequest,
    DescribeZoneSettingRequest: DescribeZoneSettingRequest,
    ModifyZoneStatusRequest: ModifyZoneStatusRequest,
    ModifyDnsRecordRequest: ModifyDnsRecordRequest,
    CreateApplicationProxyRulesRequest: CreateApplicationProxyRulesRequest,
    LoadBalancing: LoadBalancing,
    ModifyDnssecRequest: ModifyDnssecRequest,
    ModifyZoneSettingRequest: ModifyZoneSettingRequest,
    DescribeApplicationProxyDetailRequest: DescribeApplicationProxyDetailRequest,
    CreateApplicationProxyResponse: CreateApplicationProxyResponse,
    ImportDnsRecordsRequest: ImportDnsRecordsRequest,
    CacheConfigNoCache: CacheConfigNoCache,
    Origin: Origin,
    Task: Task,
    CertSort: CertSort,
    DescribeHostsSettingResponse: DescribeHostsSettingResponse,
    ModifyZoneResponse: ModifyZoneResponse,
    ModifyZoneRequest: ModifyZoneRequest,
    DeleteZoneResponse: DeleteZoneResponse,
    ReclaimZoneResponse: ReclaimZoneResponse,
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    DeleteApplicationProxyRuleResponse: DeleteApplicationProxyRuleResponse,
    DescribeIdentificationRequest: DescribeIdentificationRequest,
    CreateDnsRecordRequest: CreateDnsRecordRequest,
    L7OfflineLog: L7OfflineLog,
    ApplicationProxyRule: ApplicationProxyRule,
    SmartRouting: SmartRouting,
    DescribeDnsDataResponse: DescribeDnsDataResponse,
    Zone: Zone,
    ModifyApplicationProxyStatusRequest: ModifyApplicationProxyStatusRequest,
    CacheConfigCache: CacheConfigCache,
    CertFilter: CertFilter,
    ModifyLoadBalancingStatusRequest: ModifyLoadBalancingStatusRequest,
    Quic: Quic,
    DescribeCnameStatusResponse: DescribeCnameStatusResponse,
    DescribeLoadBalancingRequest: DescribeLoadBalancingRequest,
    ModifyApplicationProxyRuleRequest: ModifyApplicationProxyRuleRequest,
    CnameStatus: CnameStatus,
    ModifyZoneSettingResponse: ModifyZoneSettingResponse,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    CreateDnsRecordResponse: CreateDnsRecordResponse,
    ServerCertInfo: ServerCertInfo,
    DescribeZonesRequest: DescribeZonesRequest,
    OriginRecord: OriginRecord,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DeleteApplicationProxyRuleRequest: DeleteApplicationProxyRuleRequest,
    CacheConfigFollowOrigin: CacheConfigFollowOrigin,
    VanityNameServers: VanityNameServers,
    DescribeApplicationProxyResponse: DescribeApplicationProxyResponse,
    CreateLoadBalancingResponse: CreateLoadBalancingResponse,
    IdentifyZoneResponse: IdentifyZoneResponse,
    WebSocket: WebSocket,
    DataItem: DataItem,
    ModifyLoadBalancingRequest: ModifyLoadBalancingRequest,
    CreateLoadBalancingRequest: CreateLoadBalancingRequest,
    DescribeDnssecRequest: DescribeDnssecRequest,
    DescribeLoadBalancingDetailResponse: DescribeLoadBalancingDetailResponse,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    DnsRecord: DnsRecord,
    DescribeApplicationProxyDetailResponse: DescribeApplicationProxyDetailResponse,
    DescribeDnsRecordsRequest: DescribeDnsRecordsRequest,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    DescribeDefaultCertificatesRequest: DescribeDefaultCertificatesRequest,
    ModifyApplicationProxyRuleResponse: ModifyApplicationProxyRuleResponse,
    FailReason: FailReason,
    CreateZoneRequest: CreateZoneRequest,
    OriginRecordPrivateParameter: OriginRecordPrivateParameter,
    CheckCertificateResponse: CheckCertificateResponse,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    DeleteLoadBalancingResponse: DeleteLoadBalancingResponse,
    CheckCertificateRequest: CheckCertificateRequest,
    CreateApplicationProxyRuleRequest: CreateApplicationProxyRuleRequest,
    ForceRedirect: ForceRedirect,
    ModifyApplicationProxyRequest: ModifyApplicationProxyRequest,
    ModifyApplicationProxyStatusResponse: ModifyApplicationProxyStatusResponse,
    DetailHost: DetailHost,
    DescribeDnsRecordsResponse: DescribeDnsRecordsResponse,
    CachePrefresh: CachePrefresh,
    ModifyZoneCnameSpeedUpRequest: ModifyZoneCnameSpeedUpRequest,
    DescribeHostsCertificateRequest: DescribeHostsCertificateRequest,
    Hsts: Hsts,
    ModifyHostsCertificateResponse: ModifyHostsCertificateResponse,
    ModifyLoadBalancingResponse: ModifyLoadBalancingResponse,
    CreateApplicationProxyRuleResponse: CreateApplicationProxyRuleResponse,
    ModifyDnsRecordResponse: ModifyDnsRecordResponse,
    CreateApplicationProxyRequest: CreateApplicationProxyRequest,
    PostMaxSize: PostMaxSize,
    OriginCheckOriginStatus: OriginCheckOriginStatus,
    DescribeCnameStatusRequest: DescribeCnameStatusRequest,
    DescribeDnssecResponse: DescribeDnssecResponse,
    CreateZoneResponse: CreateZoneResponse,
    DnsDataFilter: DnsDataFilter,
    DeleteLoadBalancingRequest: DeleteLoadBalancingRequest,
    ApplicationProxy: ApplicationProxy,
    ModifyApplicationProxyResponse: ModifyApplicationProxyResponse,
    CacheKey: CacheKey,
    ModifyApplicationProxyRuleStatusResponse: ModifyApplicationProxyRuleStatusResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    Header: Header,
    DescribeZoneDetailsRequest: DescribeZoneDetailsRequest,
    DescribeDefaultCertificatesResponse: DescribeDefaultCertificatesResponse,
    DescribeApplicationProxyRequest: DescribeApplicationProxyRequest,
    ModifyApplicationProxyRuleStatusRequest: ModifyApplicationProxyRuleStatusRequest,
    QueryString: QueryString,
    ReclaimZoneRequest: ReclaimZoneRequest,
    DeleteZoneRequest: DeleteZoneRequest,
    ModifyDefaultCertificateResponse: ModifyDefaultCertificateResponse,
    ClientIp: ClientIp,
    DescribeHostsCertificateResponse: DescribeHostsCertificateResponse,
    DescribeZoneSettingResponse: DescribeZoneSettingResponse,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    IdentifyZoneRequest: IdentifyZoneRequest,
    CacheConfig: CacheConfig,
    ModifyZoneCnameSpeedUpResponse: ModifyZoneCnameSpeedUpResponse,
    MaxAge: MaxAge,
    DeleteDnsRecordsRequest: DeleteDnsRecordsRequest,
    ModifyHostsCertificateRequest: ModifyHostsCertificateRequest,
    ModifyZoneStatusResponse: ModifyZoneStatusResponse,
    DescribeDnsDataRequest: DescribeDnsDataRequest,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    DeleteDnsRecordsResponse: DeleteDnsRecordsResponse,
    DescribeHostsSettingRequest: DescribeHostsSettingRequest,
    CreateApplicationProxyRulesResponse: CreateApplicationProxyRulesResponse,
    DescribeIdentificationResponse: DescribeIdentificationResponse,
    OriginGroup: OriginGroup,
    DescribeLoadBalancingResponse: DescribeLoadBalancingResponse,
    ModifyDnssecResponse: ModifyDnssecResponse,
    ScanDnsRecordsRequest: ScanDnsRecordsRequest,
    ImportDnsRecordsResponse: ImportDnsRecordsResponse,
    DescribeLoadBalancingDetailRequest: DescribeLoadBalancingDetailRequest,
    DefaultServerCertInfo: DefaultServerCertInfo,
    DnssecInfo: DnssecInfo,
    DnsRecordFilter: DnsRecordFilter,
    UpstreamHttp2: UpstreamHttp2,
    OfflineCache: OfflineCache,
    VanityNameServersIps: VanityNameServersIps,

}
