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
 * ModifyCaptchaInfoInternational request structure.
 * @class
 */
class ModifyCaptchaInfoInternationalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Captcha appid</p>
         * @type {string || null}
         */
        this.CaptchaAppId = null;

        /**
         * <p>Captcha name</p>
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * <p>Verification level</p><p>Enumeration values:</p><ul><li>1: Experience-oriented</li><li>2: Balanced</li><li>3: Security-focused</li></ul><p>Default value: 1</p>
         * @type {string || null}
         */
        this.VerifyRank = null;

        /**
         * <p>Verification method</p><p>Enumeration values:</p><ul><li>1: Invisible verification. UserSetCapType input 1, DisableInvisibleSwitch must</li><li>2: Slide verification</li><li>8: Graphical verification</li><li>9: Voice verification</li></ul>
         * @type {string || null}
         */
        this.UserSetCapType = null;

        /**
         * <p>Interception mode</p><p>Enumeration values:</p><ul><li>notify: perception mode</li><li>block: interception mode</li></ul>
         * @type {string || null}
         */
        this.DefendMode = null;

        /**
         * <p>Whether to enable captcha encryption. 0: Off. 1: On</p>
         * @type {number || null}
         */
        this.CheckAppidSwitch = null;

        /**
         * <p>Whether to enable Non-repeating IV</p><p>Enumeration values:</p><ul><li>0: Off</li><li>1: On</li></ul><p>Input 1 is allowed only when CheckAppidSwitch is 1</p>
         * @type {number || null}
         */
        this.CheckIvSwitch = null;

        /**
         * <p>Verification mechanism: '0' One-Click Verification, '1' Always verify, '2' Invisible verification</p><p>Enumeration values:</p><ul><li>0: One-Click Verification</li><li>1: Always verify</li><li>2: Invisible verification. DisableInvisibleSwitch input 2, UserSetCapType must be 1</li></ul>
         * @type {string || null}
         */
        this.DisableInvisibleSwitch = null;

        /**
         * <p>Web domain name</p><p>Only valid when ChannelInfo is web</p>
         * @type {string || null}
         */
        this.VerifyDomain = null;

        /**
         * <p>app BundleId</p><p>Valid only when ChannelInfo is ios</p>
         * @type {string || null}
         */
        this.VerifyBundleId = null;

        /**
         * <p>app package</p><p>Valid only when ChannelInfo is android</p>
         * @type {string || null}
         */
        this.VerifyPackage = null;

        /**
         * <p>Resource tag, key&amp;value format</p>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * <p>Checkbox display method. '0': minimalist mode, '1': full mode, '2': not set</p>
         * @type {string || null}
         */
        this.CheckBoxStyle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.VerifyRank = 'VerifyRank' in params ? params.VerifyRank : null;
        this.UserSetCapType = 'UserSetCapType' in params ? params.UserSetCapType : null;
        this.DefendMode = 'DefendMode' in params ? params.DefendMode : null;
        this.CheckAppidSwitch = 'CheckAppidSwitch' in params ? params.CheckAppidSwitch : null;
        this.CheckIvSwitch = 'CheckIvSwitch' in params ? params.CheckIvSwitch : null;
        this.DisableInvisibleSwitch = 'DisableInvisibleSwitch' in params ? params.DisableInvisibleSwitch : null;
        this.VerifyDomain = 'VerifyDomain' in params ? params.VerifyDomain : null;
        this.VerifyBundleId = 'VerifyBundleId' in params ? params.VerifyBundleId : null;
        this.VerifyPackage = 'VerifyPackage' in params ? params.VerifyPackage : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.CheckBoxStyle = 'CheckBoxStyle' in params ? params.CheckBoxStyle : null;

    }
}

/**
 * DeleteIpWhiteListInternational response structure.
 * @class
 */
class DeleteIpWhiteListInternationalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Result data</p>
         * @type {number || null}
         */
        this.Data = null;

        /**
         * <p>Captcha status code</p>
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * <p>Captcha info</p>
         * @type {string || null}
         */
        this.CaptchaMsg = null;

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
        this.Data = 'Data' in params ? params.Data : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Paging query data result obj international
 * @class
 */
class DescribeCaptchaConsoleDataInternational extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Paginated data array.</p>
         * @type {Array.<DescribeCaptchaConsoleSubDataInternational> || null}
         */
        this.DataList = null;

        /**
         * <p>Total pages</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * <p>Current page</p>
         * @type {number || null}
         */
        this.PageIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new DescribeCaptchaConsoleSubDataInternational();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;

    }
}

/**
 * RemoveCaptchaInfoInternational request structure.
 * @class
 */
class RemoveCaptchaInfoInternationalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Captcha AppId</p>
         * @type {string || null}
         */
        this.CaptchaAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;

    }
}

/**
 * CreateCaptchaInfoInternational response structure.
 * @class
 */
class CreateCaptchaInfoInternationalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Result data.</p>
         * @type {number || null}
         */
        this.Data = null;

        /**
         * <p>Captcha status code</p>
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * <p>Captcha information</p>
         * @type {string || null}
         */
        this.CaptchaMsg = null;

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
        this.Data = 'Data' in params ? params.Data : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIpWhiteListInternational response structure.
 * @class
 */
class ModifyIpWhiteListInternationalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Result data</p>
         * @type {number || null}
         */
        this.Data = null;

        /**
         * <p>Captcha status code</p>
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * <p>Captcha information</p>
         * @type {string || null}
         */
        this.CaptchaMsg = null;

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
        this.Data = 'Data' in params ? params.Data : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIpWhiteListInternational request structure.
 * @class
 */
class ModifyIpWhiteListInternationalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>ip allowlist name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Record number</p>
         * @type {number || null}
         */
        this.Id = null;

        /**
         * <p>Captcha appid</p>
         * @type {number || null}
         */
        this.CaptchaAppid = null;

        /**
         * <p>IP whitelist status</p><p>Enumeration values:</p><ul><li>0: enable</li><li>1: disable</li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * <p>Remark information.</p>
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.CaptchaAppid = 'CaptchaAppid' in params ? params.CaptchaAppid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * CreateIpWhiteListInternational request structure.
 * @class
 */
class CreateIpWhiteListInternationalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>ip allowlist name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Captcha appid</p>
         * @type {number || null}
         */
        this.CaptchaAppid = null;

        /**
         * <p>ip data</p>
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * <p>Remark information.</p>
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CaptchaAppid = 'CaptchaAppid' in params ? params.CaptchaAppid : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * DescribeIpWhiteListInternational request structure.
 * @class
 */
class DescribeIpWhiteListInternationalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * <p>Page length.</p>
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * <p>Captcha appid</p>
         * @type {number || null}
         */
        this.CaptchaAppid = null;

        /**
         * <p>Allowlist name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Ip address</p>
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * <p>IP Whitelist Configuration Status</p><p>Enumeration values:</p><ul><li>0: all</li><li>1: allowlisted</li><li>2: allowlisting canceled</li></ul><p>Default value: 0</p>
         * @type {number || null}
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
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.CaptchaAppid = 'CaptchaAppid' in params ? params.CaptchaAppid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyCaptchaInfoInternational response structure.
 * @class
 */
class ModifyCaptchaInfoInternationalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Result data</p>
         * @type {number || null}
         */
        this.Data = null;

        /**
         * <p>Captcha status code</p>
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * <p>Captcha information</p>
         * @type {string || null}
         */
        this.CaptchaMsg = null;

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
        this.Data = 'Data' in params ? params.Data : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Verification code console query API v2 international
 * @class
 */
class DescribeCaptchaConsoleSubDataInternational extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Verification code id</p>
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * <p>Verification name</p>
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * <p>Separate domain names with commas</p>
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * <p>Random key</p>
         * @type {string || null}
         */
        this.EncryptKey = null;

        /**
         * <p>Verification scenario</p><p>Enumeration values:</p><ul><li>1: Account</li><li>2: SMS</li><li>3: Promotion</li><li>4: Comment</li><li>5: Data protection</li><li>6: Other</li></ul>
         * @type {string || null}
         */
        this.SceneType = null;

        /**
         * <p>Validation type</p><p>Enumeration values:</p><ul><li>1: Invisible verification. UserSetCapType input 1, DisableInvisibleSwitch must be 2</li><li>2: Sliding puzzle</li><li>8: Graphical point selection</li><li>9: Voice verification</li></ul>
         * @type {number || null}
         */
        this.UserSetCapType = null;

        /**
         * <p>Intelligent verification-free</p><p>Enumeration values:</p><ul><li>0: disable</li><li>1: enable</li></ul>
         * @type {number || null}
         */
        this.NoVerifyRule = null;

        /**
         * <p>Language</p><p>Enumeration values:</p><ul><li>1: Self adaptive</li><li>2052: Simplified</li><li>1028: Traditional</li><li>1033: English</li></ul>
         * @type {string || null}
         */
        this.CaptchaLanguage = null;

        /**
         * <p>Verification level</p><p>Enumeration values:</p><ul><li>1: Experience-oriented</li><li>2: Balanced</li><li>3: Security-focused</li></ul><p>Default value: 1</p>
         * @type {number || null}
         */
        this.VerifyRank = null;

        /**
         * <p>Client type</p><p>Enumeration values:</p><ul><li>web: For web scenario usage</li><li>android: For Android client usage</li><li>ios: For iOS client usage</li></ul>
         * @type {string || null}
         */
        this.ChannelInfo = null;

        /**
         * <p>Interception mode</p><p>Enumeration values:</p><ul><li>block: interception mode</li><li>notify: perception mode</li></ul><p>Default value: notify</p>
         * @type {string || null}
         */
        this.DefendMode = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * <p>Whether to enable captchaAppid encryption</p><p>Enumeration values:</p><ul><li>0: Off</li><li>1: On</li></ul>
         * @type {number || null}
         */
        this.CheckAppidSwitch = null;

        /**
         * <p>Resource tag.</p>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * <p>Whether to enable non-repeating IV</p><p>Enumeration values:</p><ul><li>0: Disabled</li><li>1: Enabled</li></ul>
         * @type {number || null}
         */
        this.CheckIvSwitch = null;

        /**
         * <p>Verification mechanism</p><p>Enumeration values:</p><ul><li>0: One-Click Verification</li><li>1: Always verify</li><li>2: Invisible verification. DisableInvisibleSwitch input 2, UserSetCapType must be 1</li></ul>
         * @type {string || null}
         */
        this.DisableInvisibleSwitch = null;

        /**
         * <p>Web domain name</p><p>Valid only when ChannelInfo is web</p>
         * @type {string || null}
         */
        this.VerifyDomain = null;

        /**
         * <p>app BundleId</p><p>Valid only when ChannelInfo is ios</p>
         * @type {string || null}
         */
        this.VerifyBundleId = null;

        /**
         * <p>app package</p><p>Only valid when ChannelInfo is android</p>
         * @type {string || null}
         */
        this.VerifyPackage = null;

        /**
         * <p>Checkbox display method</p><p>Enumeration values:</p><ul><li>0: simplified version</li><li>1: basic version</li><li>2: invisible version</li></ul>
         * @type {string || null}
         */
        this.CheckBoxStyle = null;

        /**
         * <p>Customer type</p><p>Enumeration values:</p><ul><li>0: General user</li><li>1: waf</li><li>2: EO</li></ul>
         * @type {string || null}
         */
        this.CustomerType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.EncryptKey = 'EncryptKey' in params ? params.EncryptKey : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.UserSetCapType = 'UserSetCapType' in params ? params.UserSetCapType : null;
        this.NoVerifyRule = 'NoVerifyRule' in params ? params.NoVerifyRule : null;
        this.CaptchaLanguage = 'CaptchaLanguage' in params ? params.CaptchaLanguage : null;
        this.VerifyRank = 'VerifyRank' in params ? params.VerifyRank : null;
        this.ChannelInfo = 'ChannelInfo' in params ? params.ChannelInfo : null;
        this.DefendMode = 'DefendMode' in params ? params.DefendMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CheckAppidSwitch = 'CheckAppidSwitch' in params ? params.CheckAppidSwitch : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.CheckIvSwitch = 'CheckIvSwitch' in params ? params.CheckIvSwitch : null;
        this.DisableInvisibleSwitch = 'DisableInvisibleSwitch' in params ? params.DisableInvisibleSwitch : null;
        this.VerifyDomain = 'VerifyDomain' in params ? params.VerifyDomain : null;
        this.VerifyBundleId = 'VerifyBundleId' in params ? params.VerifyBundleId : null;
        this.VerifyPackage = 'VerifyPackage' in params ? params.VerifyPackage : null;
        this.CheckBoxStyle = 'CheckBoxStyle' in params ? params.CheckBoxStyle : null;
        this.CustomerType = 'CustomerType' in params ? params.CustomerType : null;

    }
}

/**
 * General international parameter used for front-end sorting and processing.
 * @class
 */
class OrderByInternational extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sort by creation time
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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeCaptchaInfoListInternational request structure.
 * @class
 */
class DescribeCaptchaInfoListInternationalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Pagination parameter - page number</p>
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * <p>Pagination parameters - number of records per page</p>
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * <p>Query parameter - Behavior verification type</p><p>Enumeration values:</p><ul><li>1: Invisible verification</li><li>2: Slide verification</li><li>8: Graphical verification</li><li>9: Voice verification</li></ul>
         * @type {Array.<string> || null}
         */
        this.UserSetCapTypeArr = null;

        /**
         * <p>Query parameter - risk control level</p><p>Enumeration values:</p><ul><li>1: Experience-oriented</li><li>2: Balanced</li><li>3: Security-focused</li></ul>
         * @type {Array.<string> || null}
         */
        this.VerifyRankArr = null;

        /**
         * <p>Query parameter - client multiple selection</p><p>Enumeration values:</p><ul><li>web:</li><li>ios </li><li>android</li></ul>
         * @type {Array.<string> || null}
         */
        this.ChannelInfoArr = null;

        /**
         * <p>Query parameter -Captcha appid</p>
         * @type {string || null}
         */
        this.CaptchaAppId = null;

        /**
         * <p>Query parameter - Captcha name</p>
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * <p>Sorting parameter</p><p>Input limits: desc: in descending order by creation time; asc: in ascending order by creation time</p>
         * @type {OrderByInternational || null}
         */
        this.OrderBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.UserSetCapTypeArr = 'UserSetCapTypeArr' in params ? params.UserSetCapTypeArr : null;
        this.VerifyRankArr = 'VerifyRankArr' in params ? params.VerifyRankArr : null;
        this.ChannelInfoArr = 'ChannelInfoArr' in params ? params.ChannelInfoArr : null;
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

        if (params.OrderBy) {
            let obj = new OrderByInternational();
            obj.deserialize(params.OrderBy)
            this.OrderBy = obj;
        }

    }
}

/**
 * ip whitelist data sub-item in the verification code console
 * @class
 */
class DescribeCaptchaWhiteListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>No.</p>
         * @type {number || null}
         */
        this.Id = null;

        /**
         * <p>Allowlist name</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Bind captcha</p>
         * @type {number || null}
         */
        this.CaptchaAppid = null;

        /**
         * <p>ip address</p>
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * <p>Status. 0: Ip allowlisted; 1: cancel allowlisting</p>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * <p>Creation time.</p>
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * <p>Update time.</p>
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * <p>Remarks.</p>
         * @type {string || null}
         */
        this.Comment = null;

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
        this.CaptchaAppid = 'CaptchaAppid' in params ? params.CaptchaAppid : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * DescribeIpWhiteListInternational response structure.
 * @class
 */
class DescribeIpWhiteListInternationalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Result data</p>
         * @type {DescribeCaptchaIpWhiteListDataNew || null}
         */
        this.Data = null;

        /**
         * <p>Captcha status code</p>
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * <p>Captcha information</p>
         * @type {string || null}
         */
        this.CaptchaMsg = null;

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
            let obj = new DescribeCaptchaIpWhiteListDataNew();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateIpWhiteListInternational response structure.
 * @class
 */
class CreateIpWhiteListInternationalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Result data</p>
         * @type {number || null}
         */
        this.Data = null;

        /**
         * <p>IP allowlist resource id</p>
         * @type {Array.<number> || null}
         */
        this.IdList = null;

        /**
         * <p>Captcha status code</p>
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * <p>Captcha information</p>
         * @type {string || null}
         */
        this.CaptchaMsg = null;

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
        this.Data = 'Data' in params ? params.Data : null;
        this.IdList = 'IdList' in params ? params.IdList : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ip allowlist paging query data result
 * @class
 */
class DescribeCaptchaIpWhiteListDataNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Data list.</p>
         * @type {Array.<DescribeCaptchaWhiteListItem> || null}
         */
        this.DataList = null;

        /**
         * <p>Total number of records</p>
         * @type {number || null}
         */
        this.Total = null;

        /**
         * <p>Page number.</p>
         * @type {number || null}
         */
        this.PageIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new DescribeCaptchaWhiteListItem();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;

    }
}

/**
 * CreateCaptchaInfoInternational request structure.
 * @class
 */
class CreateCaptchaInfoInternationalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Captcha name</p>
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * <p>Client type</p><p>Enumeration values:</p><ul><li>web: For web scenario</li><li>android: For Android client</li><li>ios: For iOS client</li></ul><p>Default value: web</p>
         * @type {string || null}
         */
        this.ChannelInfo = null;

        /**
         * <p>Verification level</p><p>Enumeration values:</p><ul><li>1: Experience-oriented</li><li>2: Balanced</li><li>3: Security-focused</li></ul><p>Default value: 1</p>
         * @type {string || null}
         */
        this.VerifyRank = null;

        /**
         * <p>Validation type</p><p>Enumeration values:</p><ul><li>1: Invisible verification. UserSetCapType input 1, DisableInvisibleSwitch must be 2</li><li>2: Slide</li><li>8: Graphical</li><li>9: Voice</li></ul>
         * @type {string || null}
         */
        this.UserSetCapType = null;

        /**
         * <p>Interception mode</p><p>Enumeration values:</p><ul><li>block: interception mode</li><li>notify: perception mode</li></ul><p>Default value: notify</p>
         * @type {string || null}
         */
        this.DefendMode = null;

        /**
         * <p>Resource tag, key&amp;value format</p>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * <p>Verification mechanism</p><p>Enumeration values:</p><ul><li>0: One-Click Verification</li><li>1: Always verify</li><li>2: Invisible verification. DisableInvisibleSwitch input 2, UserSetCapType must be 1</li></ul>
         * @type {string || null}
         */
        this.DisableInvisibleSwitch = null;

        /**
         * <p>web domain name</p><p>Only valid when ChannelInfo is web</p>
         * @type {string || null}
         */
        this.VerifyDomain = null;

        /**
         * <p>app BundleId</p><p>Only valid when ChannelInfo is ios</p>
         * @type {string || null}
         */
        this.VerifyBundleId = null;

        /**
         * <p>app package</p><p>Only valid when ChannelInfo is android</p>
         * @type {string || null}
         */
        this.VerifyPackage = null;

        /**
         * <p>Whether to enable captcha encryption. 0: Off. 1: On</p>
         * @type {number || null}
         */
        this.CheckAppidSwitch = null;

        /**
         * <p>Whether to enable non-repeating IV</p><p>Enumeration values:</p><ul><li>0: Off</li><li>1: On</li></ul><p>Input 1 is allowed only when CheckAppidSwitch is 1</p>
         * @type {number || null}
         */
        this.CheckIvSwitch = null;

        /**
         * <p>Checkbox display method</p><p>Enumeration values:</p><ul><li>0: simplified version</li><li>1: basic version</li><li>2: invisible version</li></ul>
         * @type {string || null}
         */
        this.CheckBoxStyle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ChannelInfo = 'ChannelInfo' in params ? params.ChannelInfo : null;
        this.VerifyRank = 'VerifyRank' in params ? params.VerifyRank : null;
        this.UserSetCapType = 'UserSetCapType' in params ? params.UserSetCapType : null;
        this.DefendMode = 'DefendMode' in params ? params.DefendMode : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.DisableInvisibleSwitch = 'DisableInvisibleSwitch' in params ? params.DisableInvisibleSwitch : null;
        this.VerifyDomain = 'VerifyDomain' in params ? params.VerifyDomain : null;
        this.VerifyBundleId = 'VerifyBundleId' in params ? params.VerifyBundleId : null;
        this.VerifyPackage = 'VerifyPackage' in params ? params.VerifyPackage : null;
        this.CheckAppidSwitch = 'CheckAppidSwitch' in params ? params.CheckAppidSwitch : null;
        this.CheckIvSwitch = 'CheckIvSwitch' in params ? params.CheckIvSwitch : null;
        this.CheckBoxStyle = 'CheckBoxStyle' in params ? params.CheckBoxStyle : null;

    }
}

/**
 * DescribeCaptchaResult request structure.
 * @class
 */
class DescribeCaptchaResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fill with fixed value: 9.
         * @type {number || null}
         */
        this.CaptchaType = null;

        /**
         * The user verification ticket returned by the frontend callback function.
         * @type {string || null}
         */
        this.Ticket = null;

        /**
         * The user public IP obtained from the customer backend server.
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * A random string returned by the frontend callback function
         * @type {string || null}
         */
        this.Randstr = null;

        /**
         * CAPTCHA's app ID. Log in to the [Captcha console](https://console.cloud.tencent.com/captcha/graphical) and you can view the CaptchaAppId in the "Key" column of the CAPTCHA list.
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * CAPTCHA's app key. Log in to the [Captcha console](https://console.cloud.tencent.com/captcha/graphical) and you can view the AppSecretKey in the "Key" column of the CAPTCHA list. AppSecretKey is the key for CAPTCHA ticket verification performed by the server. Please keep it confidential and do not disclose it to any third parties.
         * @type {string || null}
         */
        this.AppSecretKey = null;

        /**
         * Reserved field.
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * Reserved field.
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * MAC address or unique identifier of a device
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * Mobile equipment identity number
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * Indicates whether to return the time when the frontend obtains the CAPTCHA. Valid values: 1 (return the time) and others.
         * @type {number || null}
         */
        this.NeedGetCaptchaTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaType = 'CaptchaType' in params ? params.CaptchaType : null;
        this.Ticket = 'Ticket' in params ? params.Ticket : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Randstr = 'Randstr' in params ? params.Randstr : null;
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppSecretKey = 'AppSecretKey' in params ? params.AppSecretKey : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.NeedGetCaptchaTime = 'NeedGetCaptchaTime' in params ? params.NeedGetCaptchaTime : null;

    }
}

/**
 * DescribeCaptchaResult response structure.
 * @class
 */
class DescribeCaptchaResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * OK indicates verification passed.
7 captcha no match. the passed in Randstr is invalid. please check if the Randstr is consistent with the Randstr returned by the frontend.
The passed-in ticket has expired (the valid period of the ticket is 5 minutes). generate the ticket and Randstr again for validation.
The passed-in ticket is reused. generate the ticket and Randstr again for verification.
15 decrypt fail. the passed-in Ticket is invalid. please check if the Ticket is consistent with the Ticket returned by the frontend.
16 appid-ticket mismatch. the passed in CaptchaAppId is incorrect. please check if the CaptchaAppId is consistent with the CaptchaAppId passed in by the frontend, and ensure that the CaptchaAppId is obtained from the verification code console [verification management] -> [basic configuration].
21 diff invoice verification exception. possible reasons: (1) if the Ticket contains the trerror prefix, generally because the user has a poor network connection, resulting in the frontend's automatic disaster recovery and generation of a disaster recovery Ticket. the business side may skip or post-process as needed. (2) if the Ticket does not include the trerror prefix, it is because the security risk of the request was detected by the CAPTCHA-intl risk control system. the business side may intercept as needed.
100 appid-secretkey-ticket mismatch. parameter validation error. (1) please check whether the CaptchaAppId and AppSecretKey are correct. the CaptchaAppId and AppSecretKey need to be obtained from verification code console > verification management > basic configuration. (2) please check whether the passed-in ticket is generated by the passed-in CaptchaAppId.
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * Status description and verification error message.
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * In invisible verification mode, this parameter returns the verification result.
EvilLevel=0 indicates that the request is not malicious.
The parameter EvilLevel = 100 indicates that the request is malicious.
         * @type {number || null}
         */
        this.EvilLevel = null;

        /**
         * Frontend retrieval time of the captcha-intl, timestamp format.
         * @type {number || null}
         */
        this.GetCaptchaTime = null;

        /**
         * Blocking type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.EvilBitmap = null;

        /**
         * The time when the CAPTCHA is submitted.
         * @type {number || null}
         */
        this.SubmitCaptchaTime = null;

        /**
         * Device risk category.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeviceRiskCategory = null;

        /**
         * CAPTCHA-Intl score.
Note:The score ranges from 0 to 100 (e.g., 20, 70, 90).
A higher score indicates a greater probability that the interaction was initiated by a bot or represents a bot attack.
A lower score indicates a greater probability that the interaction was performed by a real human user.
         * @type {number || null}
         */
        this.Score = null;

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
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.EvilLevel = 'EvilLevel' in params ? params.EvilLevel : null;
        this.GetCaptchaTime = 'GetCaptchaTime' in params ? params.GetCaptchaTime : null;
        this.EvilBitmap = 'EvilBitmap' in params ? params.EvilBitmap : null;
        this.SubmitCaptchaTime = 'SubmitCaptchaTime' in params ? params.SubmitCaptchaTime : null;
        this.DeviceRiskCategory = 'DeviceRiskCategory' in params ? params.DeviceRiskCategory : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaInfoListInternational response structure.
 * @class
 */
class DescribeCaptchaInfoListInternationalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Data block after paging query.</p>
         * @type {DescribeCaptchaConsoleDataInternational || null}
         */
        this.Data = null;

        /**
         * <p>Captcha response code</p>
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * <p>Captcha information</p>
         * @type {string || null}
         */
        this.CaptchaMsg = null;

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
            let obj = new DescribeCaptchaConsoleDataInternational();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIpWhiteListInternational request structure.
 * @class
 */
class DeleteIpWhiteListInternationalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Captcha appid</p>
         * @type {number || null}
         */
        this.CaptchaAppid = null;

        /**
         * <p>Record number</p>
         * @type {number || null}
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
        this.CaptchaAppid = 'CaptchaAppid' in params ? params.CaptchaAppid : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * RemoveCaptchaInfoInternational response structure.
 * @class
 */
class RemoveCaptchaInfoInternationalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Result data</p>
         * @type {number || null}
         */
        this.Data = null;

        /**
         * <p>Captcha status code</p>
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * <p>Captcha information</p>
         * @type {string || null}
         */
        this.CaptchaMsg = null;

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
        this.Data = 'Data' in params ? params.Data : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ModifyCaptchaInfoInternationalRequest: ModifyCaptchaInfoInternationalRequest,
    DeleteIpWhiteListInternationalResponse: DeleteIpWhiteListInternationalResponse,
    DescribeCaptchaConsoleDataInternational: DescribeCaptchaConsoleDataInternational,
    RemoveCaptchaInfoInternationalRequest: RemoveCaptchaInfoInternationalRequest,
    CreateCaptchaInfoInternationalResponse: CreateCaptchaInfoInternationalResponse,
    ModifyIpWhiteListInternationalResponse: ModifyIpWhiteListInternationalResponse,
    ModifyIpWhiteListInternationalRequest: ModifyIpWhiteListInternationalRequest,
    CreateIpWhiteListInternationalRequest: CreateIpWhiteListInternationalRequest,
    DescribeIpWhiteListInternationalRequest: DescribeIpWhiteListInternationalRequest,
    ModifyCaptchaInfoInternationalResponse: ModifyCaptchaInfoInternationalResponse,
    DescribeCaptchaConsoleSubDataInternational: DescribeCaptchaConsoleSubDataInternational,
    OrderByInternational: OrderByInternational,
    DescribeCaptchaInfoListInternationalRequest: DescribeCaptchaInfoListInternationalRequest,
    DescribeCaptchaWhiteListItem: DescribeCaptchaWhiteListItem,
    DescribeIpWhiteListInternationalResponse: DescribeIpWhiteListInternationalResponse,
    CreateIpWhiteListInternationalResponse: CreateIpWhiteListInternationalResponse,
    DescribeCaptchaIpWhiteListDataNew: DescribeCaptchaIpWhiteListDataNew,
    CreateCaptchaInfoInternationalRequest: CreateCaptchaInfoInternationalRequest,
    DescribeCaptchaResultRequest: DescribeCaptchaResultRequest,
    DescribeCaptchaResultResponse: DescribeCaptchaResultResponse,
    DescribeCaptchaInfoListInternationalResponse: DescribeCaptchaInfoListInternationalResponse,
    DeleteIpWhiteListInternationalRequest: DeleteIpWhiteListInternationalRequest,
    RemoveCaptchaInfoInternationalResponse: RemoveCaptchaInfoInternationalResponse,

}
