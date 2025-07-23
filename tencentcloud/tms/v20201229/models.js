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
 * 
 * @class
 */
class SentimentAnalysis extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 
         * @type {SentimentDetail || null}
         */
        this.Detail = null;

        /**
         * 
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 
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
        this.Label = 'Label' in params ? params.Label : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Detail) {
            let obj = new SentimentDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Account risk detection results
 * @class
 */
class RiskDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field returns the risk categories after account information detection. Valid values: **RiskAccount** (the account is at risk), **RiskIP** (the IP address is at risk), and **RiskIMEI** (the mobile device identifier is at risk).
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field returns the risk levels after account information detection. Valid values: **1** (suspected to be at risk) and **2** (malicious risk).
         * @type {number || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * TextModeration request structure.
 * @class
 */
class TextModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field indicates the text content of the object to be moderated. The text needs to be encoded in utf-8 format and encrypted with Base64. It can contain up to 10,000 characters, calculated by unicode encoding.
         * @type {string || null}
         */
        this.Content = null;

        /**
         * This field indicates the specific policy number, which is used for the API call and can be configured in the CMS console. If it's not entered (left empty), the default moderation policy is adopted. If it's entered, the moderation policies are specified for business scenarios. <br>Note: Biztype contains 3 to 32 characters, including numbers, letters and underscores only. Different Biztypes are associated with different business scenarios and moderation policies. Ensure that you use the Biztype corresponding to the policy you want to apply.
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * This field indicates the data ID you assigned to the object to be moderated, which is convenient for you to identify and manage the file. <br>Value: this field can contain **up to 64 characters**, including uppercase and lowercase letters, numbers and four special symbols (_, -, @, #)
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * This field indicates the user information related with the object to be moderated, which can be used to identify violating users at risk.
         * @type {User || null}
         */
        this.User = null;

        /**
         * This field indicates the device information related with the object to be moderated, which can be used to identify violating devices at risk.
         * @type {Device || null}
         */
        this.Device = null;

        /**
         * This field Indicates the original language of the content.The enumeration values are ("en", "zh", ""), where en means English, zh means Chinese, and an empty string means the default language is Chinese. It is recommended to enter "en" only when the language of the content is clearly "English".
         * @type {string || null}
         */
        this.SourceLanguage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DataId = 'DataId' in params ? params.DataId : null;

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }
        this.SourceLanguage = 'SourceLanguage' in params ? params.SourceLanguage : null;

    }
}

/**
 * Details of results returned by text moderation
 * @class
 */
class DetailResults extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result of the moderation. <br>`Normal`: normal content; `Porn`: pornographic content; `Abuse`: abusive content; **Ad**: advertising content; `Custom`: custom violating content
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Recommended follow-up action. <br>`Block`: block it automatically; `Review`: review the content again in human; **Pass**: pass
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Returns the information of keywords hit in the text. When no value is returned and `Score` is not empty, it means the `Label` is determined by the semantic-based detection model.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * This field indicates the convincing level of the `Label`, ranging from `0` (lowest) to `100` (highest). 
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * It indicates the library type corresponding with the keyword. Valid values: `1` (blocklist/allowlist library) and `2` (custom keyword library). If no custom keyword library is configured, the default value is 1.
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {number || null}
         */
        this.LibType = null;

        /**
         * This field is **only valid when `Label` is `Custom`. It returns the custom library ID to facilitate the library management and configuration.
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * This field is **only valid when `Label` is `Custom` (custom keyword)`. It returns the custom library name to facilitate the library management and configuration.
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * The field returns the second-level labels under the current label.
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * Returns the keywords, label, sub-label and the score.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.LibType = 'LibType' in params ? params.LibType : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * Returns the keywords, label, sub-label and the score.
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Returns the hit keywords.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Returns the sub-tags.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * Returns the score for the sub-label
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * This field indicates the account-related information of the service subscriber
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field indicates the service subscriber ID. This ID can be used to optimize the moderation result judgment based on the account's violation records, which is helpful for auxiliary judgment when there is a risk of suspected violations.
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * This field indicates the account nickname information of the service subscriber.
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * This field indicates the account type corresponding to the service subscriber ID.<br>
Use this field and the account ID (UserId) together to determine a unique account.
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * This field indicates the gender information of the service subscriber's account.<br>
Values: **0** (default value, indicating the gender is unknown), **1** (male) and **2** (female).
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * This field indicates the age information of the service subscriber's account.<br>
Values: Integers between **0** (default value, indicating that the age is unknown) and the number of (**custom maximum age**).
         * @type {number || null}
         */
        this.Age = null;

        /**
         * This field indicates the level information of the service subscriber's account.<br>
Values: **0** (default value, indicating that the level is unknown), **1** (lower level), **2** (medium level) and **3** (higher level). Currently, **custom levels are not supported**.
         * @type {number || null}
         */
        this.Level = null;

        /**
         * This field indicates the mobile phone number information of the service subscriber's account. The mobile phone numbers in various regions of the world can be recorded.<br>
Note: Please keep the format of mobile phone number uniform. For example, uniformly use the area code format (086/+86), etc.
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * This field indicates the URL of the service subscriber's profile photos formatted with .png, .jpg, .jpeg, .bmp, .gif and .webp.
Note: Up to 5 MB is supported, and the minimum resolution is 256 x 256. When it takes more than 3 seconds to download, the "download timeout" is returned.
         * @type {string || null}
         */
        this.HeadUrl = null;

        /**
         * This field indicates the profile information of service subscribers. It can contain up to 5,000 characters, including Chinese characters, letters and special symbols.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Room ID of the group chat.
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * Receiver ID.
         * @type {string || null}
         */
        this.ReceiverId = null;

        /**
         * Generation time of the message, in ms.
         * @type {number || null}
         */
        this.SendTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.HeadUrl = 'HeadUrl' in params ? params.HeadUrl : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.ReceiverId = 'ReceiverId' in params ? params.ReceiverId : null;
        this.SendTime = 'SendTime' in params ? params.SendTime : null;

    }
}

/**
 * This field indicates the device information of the service subscriber
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field indicates the IP address of the device used by the service subscriber. <br>
Note: Currently, only IPv4 addresses can be recorded.
         * @type {string || null}
         */
        this.IP = null;

        /**
         * This field indicates the MAC address used by the service subscriber to facilitate device identification and management. Its format and value are consistent with those of the standard MAC address.
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * * In beta test. Available soon.*
         * @type {string || null}
         */
        this.TokenId = null;

        /**
         * * In beta test. Available soon.*
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * This field represents the **IMEI** (International Mobile Equipment Identity) number of the device used by the service subscriber. IMEI can be used to identify each independent mobile communication device, such as a mobile phone, which is convenient for device identification and management. <br>Note: IMEI is formatted with **15 to 17 numbers only**.
         * @type {string || null}
         */
        this.IMEI = null;

        /**
         * **Dedicated for iOS device**. This field indicates the **IDFA** (Identifier for Advertising) corresponding to the service subscriber. IDFA, a string of hexadecimal 32 characters including numbers and letters, is provided by Apple Inc. to identify the user.<br>
Note: Since the iOS14 update in 2021, Apple Inc. has allowed users to manually activate or deactivate IDFA, so the validity of the string identifier may be reduced.
         * @type {string || null}
         */
        this.IDFA = null;

        /**
         * **Dedicated for iOS device**. This field indicates the **IDFV** (Identifier for Vendor) corresponding to the service subscriber. IDFV, a string of hexadecimal 32 characters including numbers and letters, is provided by Apple Inc. to identify the vendor. IDFV can also be used as a unique device identifier.
         * @type {string || null}
         */
        this.IDFV = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.IMEI = 'IMEI' in params ? params.IMEI : null;
        this.IDFA = 'IDFA' in params ? params.IDFA : null;
        this.IDFV = 'IDFV' in params ? params.IDFV : null;

    }
}

/**
 * 
 * @class
 */
class SentimentDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 
         * @type {number || null}
         */
        this.Positive = null;

        /**
         * 
         * @type {number || null}
         */
        this.Negative = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Positive = 'Positive' in params ? params.Positive : null;
        this.Negative = 'Negative' in params ? params.Negative : null;

    }
}

/**
 * TextModeration response structure.
 * @class
 */
class TextModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * This field returns the BizType of the request parameters
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * This field returns the **negative label with the highest priority** in the moderation results (DetailResults), which indicates the moderation result recommended by the model. It is recommended that you handle different violations with the suggested values according to your business needs. <br>Returned values: **Normal**: normal content; **Porn**: pornographic content; **Abuse**: abusive content; **Ad**: advertising content; **Custom**: custom violating content, and others such as objectionable, insecure or inappropriate content.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * This field returns the follow-up moderation suggestions. The returned value indicates the recommended operation after obtaining the moderation result. It is recommended that you handle different violations with the suggested values according to your business needs. <br>Returned values: **Block**: block; **Review**: human moderation; **Pass**: pass
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * This field returns the keywords matched with the libraries in the moderated text under the current label to mark the specific violations (for example, *Friend me*). This parameter may have multiple returned values, indicating multiple keywords are matched. If the returned value is empty and the `Score` is not empty, it means that the negative label corresponding to the moderation result is a value returned from the semantic model judgment
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * This field returns the confidence level under the current label. Value range: 0 (**the lowest confidence level**) - 100 (**the highest confidence level**). The higher the value, the more likely the text is to belong to the category indicated by the current label. For example, *pornographic 99* indicates that the text is very likely to be pornographic, and *pornographic 0* indicates that the text is not pornographic
         * @type {number || null}
         */
        this.Score = null;

        /**
         * This field returns the moderation results based on the text libraries. For details, see `DetailResults` in the data structure
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {Array.<DetailResults> || null}
         */
        this.DetailResults = null;

        /**
         * This field returns the detection results of violating accounts at risk, mainly including violation categories and risk levels. For details, see `RiskDetails` in the data structure
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {Array.<RiskDetails> || null}
         */
        this.RiskDetails = null;

        /**
         * This field returns the extra information configured according to your needs. If it's not configured, the returned value is empty by default. <br>Note: the returned information varies based on different customers or Biztypes. If you need to configure this field, please submit a ticket or contact after-sales manager
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * This field returns the `DataId` in the request parameter corresponding to the moderated object
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * The field returns the second-level labels under the current label.
Note: This field may return `null`, indicating that no valid value can be found.
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * Returns the context text.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContextText = null;

        /**
         * 
         * @type {SentimentAnalysis || null}
         */
        this.SentimentAnalysis = null;

        /**
         * 
         * @type {string || null}
         */
        this.HitType = null;

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
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.DetailResults) {
            this.DetailResults = new Array();
            for (let z in params.DetailResults) {
                let obj = new DetailResults();
                obj.deserialize(params.DetailResults[z]);
                this.DetailResults.push(obj);
            }
        }

        if (params.RiskDetails) {
            this.RiskDetails = new Array();
            for (let z in params.RiskDetails) {
                let obj = new RiskDetails();
                obj.deserialize(params.RiskDetails[z]);
                this.RiskDetails.push(obj);
            }
        }
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.ContextText = 'ContextText' in params ? params.ContextText : null;

        if (params.SentimentAnalysis) {
            let obj = new SentimentAnalysis();
            obj.deserialize(params.SentimentAnalysis)
            this.SentimentAnalysis = obj;
        }
        this.HitType = 'HitType' in params ? params.HitType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SentimentAnalysis: SentimentAnalysis,
    RiskDetails: RiskDetails,
    TextModerationRequest: TextModerationRequest,
    DetailResults: DetailResults,
    Tag: Tag,
    User: User,
    Device: Device,
    SentimentDetail: SentimentDetail,
    TextModerationResponse: TextModerationResponse,

}
