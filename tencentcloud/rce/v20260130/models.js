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
 * Task event details
 * @class
 */
class TaskEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the promotion</p>
         * @type {string || null}
         */
        this.PromotionId = null;

        /**
         * <p>The name of the promotion</p>
         * @type {string || null}
         */
        this.PromotionName = null;

        /**
         * <p>The description of the promotion</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>The ID of the inviter</p>
         * @type {string || null}
         */
        this.InviterUserId = null;

        /**
         * <p>The ID of the task</p>
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * <p>The name of the task</p>
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * <p>Task type, such as daily check-in, ad viewing, or step accumulation</p>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * <p>Task completed duration</p><p>Measurement unit: ms</p>
         * @type {number || null}
         */
        this.TaskCostTime = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PromotionId = 'PromotionId' in params ? params.PromotionId : null;
        this.PromotionName = 'PromotionName' in params ? params.PromotionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InviterUserId = 'InviterUserId' in params ? params.InviterUserId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskCostTime = 'TaskCostTime' in params ? params.TaskCostTime : null;

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * The details of the digital order
 * @class
 */
class DigitalOrder extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The name of the asset</p>
         * @type {string || null}
         */
        this.DigitalAsset = null;

        /**
         * <p>The type of the asset</p><p>Enumeration value:</p><ul><li>coin</li><li>commodity</li><li>crypto</li><li>fiat</li><li>token</li><li>stock</li><li>bond</li></ul>
         * @type {string || null}
         */
        this.AssetType = null;

        /**
         * <p>The type of trade being made</p><p>Enumeration value:</p><ul><li>limit: Limit order</li><li>market: Market order</li><li>stop_limit: Stop-limit order</li><li>stop_loss: Stop-loss order</li><li>take_profit: Take-profit order</li><li>take_profit_limit: Take-profit limit order</li></ul>
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * <p>The quantity of the digital asset</p>
         * @type {number || null}
         */
        this.Volume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DigitalAsset = 'DigitalAsset' in params ? params.DigitalAsset : null;
        this.AssetType = 'AssetType' in params ? params.AssetType : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Volume = 'Volume' in params ? params.Volume : null;

    }
}

/**
 * Bill information
 * @class
 */
class Billing extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The billing address associated with this user</p>
         * @type {Address || null}
         */
        this.Address = null;

        /**
         * <p>The phone number associated with the bill</p><p>Parameter format: Complies with the E.164 standard, using the format with "+", region code, and number</p>
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * <p>The email associated with the bill</p>
         * @type {string || null}
         */
        this.Email = null;

        /**
         * <p>The name of the receiver associated with the bill</p>
         * @type {string || null}
         */
        this.Recipient = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Address) {
            let obj = new Address();
            obj.deserialize(params.Address)
            this.Address = obj;
        }
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Recipient = 'Recipient' in params ? params.Recipient : null;

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

        /**
         * <p>Decision action when a strategy is matched. Configurable in the console.</p>
         * @type {string || null}
         */
        this.Disposition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DecisionResult = 'DecisionResult' in params ? params.DecisionResult : null;
        this.Disposition = 'Disposition' in params ? params.Disposition : null;

    }
}

/**
 * Personal information
 * @class
 */
class Person extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The full name of the user if provided</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>The gender of the user if provided</p>
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * <p>The birthday of the user if provided</p><p>Parameter format: YYYY-MM-DD.</p>
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * <p>The degree of the user if provided</p>
         * @type {string || null}
         */
        this.Degree = null;

        /**
         * <p>The occupation of the user if provided</p>
         * @type {string || null}
         */
        this.Occupation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Degree = 'Degree' in params ? params.Degree : null;
        this.Occupation = 'Occupation' in params ? params.Occupation : null;

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
 * The details of the digital wallet
 * @class
 */
class Wallet extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Wallet type</p><p>Enumeration value:</p><ul><li>crypto: Crypto currency</li><li>digital: Digital currency</li><li>fiat: Fiat currency</li></ul>
         * @type {string || null}
         */
        this.WalletType = null;

        /**
         * <p>The address of the wallet.Usually it is the ID of the wallet.</p>
         * @type {string || null}
         */
        this.WalletAddress = null;

        /**
         * <p>The full name of the person who holds  the wallet</p>
         * @type {string || null}
         */
        this.WalletHolderName = null;

        /**
         * <p>The provider of the wallet, such as wechat, alipay, paypal</p>
         * @type {string || null}
         */
        this.WalletProvider = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WalletType = 'WalletType' in params ? params.WalletType : null;
        this.WalletAddress = 'WalletAddress' in params ? params.WalletAddress : null;
        this.WalletHolderName = 'WalletHolderName' in params ? params.WalletHolderName : null;
        this.WalletProvider = 'WalletProvider' in params ? params.WalletProvider : null;

    }
}

/**
 * ClaimRedPacket event details
 * @class
 */
class ClaimRedPacketEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the promotion</p>
         * @type {string || null}
         */
        this.PromotionId = null;

        /**
         * <p>The Name of the promotion</p>
         * @type {string || null}
         */
        this.PromotionName = null;

        /**
         * <p>The description of the promotion</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>The ID of the inviter</p>
         * @type {string || null}
         */
        this.InviterUserId = null;

        /**
         * <p>The ID of the red packet</p>
         * @type {string || null}
         */
        this.RedPacketId = null;

        /**
         * <p>The type of red packet, for example, random amount, passcode, standard</p>
         * @type {string || null}
         */
        this.RedPacketType = null;

        /**
         * <p>The amount  in the red packet</p>
         * @type {Amount || null}
         */
        this.RedPacketAmount = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PromotionId = 'PromotionId' in params ? params.PromotionId : null;
        this.PromotionName = 'PromotionName' in params ? params.PromotionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InviterUserId = 'InviterUserId' in params ? params.InviterUserId : null;
        this.RedPacketId = 'RedPacketId' in params ? params.RedPacketId : null;
        this.RedPacketType = 'RedPacketType' in params ? params.RedPacketType : null;

        if (params.RedPacketAmount) {
            let obj = new Amount();
            obj.deserialize(params.RedPacketAmount)
            this.RedPacketAmount = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * The details of the promotion code
 * @class
 */
class PromotionCode extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the promotion code</p>
         * @type {string || null}
         */
        this.Id = null;

        /**
         * <p>The type of the promotion code, for example: qrcode, barcode, miniprogram code</p>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>The url or hyperlink to the image</p>
         * @type {string || null}
         */
        this.ImageLink = null;

        /**
         * <p>The address where the promotion code worked</p>
         * @type {Address || null}
         */
        this.Address = null;

        /**
         * <p>The item(s) associated with the promotion code</p>
         * @type {Array.<Item> || null}
         */
        this.Items = null;

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
        this.ImageLink = 'ImageLink' in params ? params.ImageLink : null;

        if (params.Address) {
            let obj = new Address();
            obj.deserialize(params.Address)
            this.Address = obj;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * ChargeBack event details
 * @class
 */
class ChargeBackEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the transaction</p>
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * <p>The ID(s) of the order associated with the transaction</p>
         * @type {Array.<string> || null}
         */
        this.OrderId = null;

        /**
         * <p>The code of the chargeback defined by the card organization, for example: 10.1, 13.1, 4870, 4871</p>
         * @type {string || null}
         */
        this.ChargeBackCode = null;

        /**
         * <p>The reason of the chargeback defined by the card organization, for example: non-receipt of goods, fraud</p>
         * @type {string || null}
         */
        this.ChargeBackReason = null;

        /**
         * <p>The process of the chargeback defined by the card organization</p><p>Enumeration values:</p><ul><li>need_response: Merchant needs to respond</li><li>information_supplied: Merchant has provided information</li><li>chargeback_reversed: Chargeback has been canceled</li><li>chargeback_sustained: Chargeback has been established</li></ul>
         * @type {string || null}
         */
        this.ChargeBackProcess = null;

        /**
         * <p>The amount of the chargeback</p>
         * @type {Amount || null}
         */
        this.ChargeBackAmount = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.ChargeBackCode = 'ChargeBackCode' in params ? params.ChargeBackCode : null;
        this.ChargeBackReason = 'ChargeBackReason' in params ? params.ChargeBackReason : null;
        this.ChargeBackProcess = 'ChargeBackProcess' in params ? params.ChargeBackProcess : null;

        if (params.ChargeBackAmount) {
            let obj = new Amount();
            obj.deserialize(params.ChargeBackAmount)
            this.ChargeBackAmount = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * ReportEvent request structure.
 * @class
 */
class ReportEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Event code. Used to specify the scenario node for business access.</p><p> Standard events under the account protection product include:</p><ul><li> login: Log in<p></p></li> <li>register: Register </li><li>sms: SMS </li><li>logout: Log out </li><li>modify_account: Modify account </li><li>modify_password: Modify password </li><li>security_verification: Security verification</li></ul><p>Standard events under the payment protection product include:</p><ul><li>create_order: Create an order</li><li>transaction: Transaction</li><li>charge_back: Chargeback</li></ul><p>Standard events under the promotion protection product include:</p><ul><li>add_promotion: Participate in promotions </li><li>redeem: Redeem a prize </li><li>withdraw: Withdraw</li><li>cust_event: Custom event, cust_xxx </li><li>scan_code: Scan a code </li><li>lucky_draw: Lucky draw </li><li>task: Complete a task </li><li>invitation: Invitation </li><li>claim_red_packet: Receive a red packet </li><li>browse: Browse</li></ul><p>Custom events can be evaluated for risk based on an agreement with RCE</p>
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * <p>The time when the event occurred</p><p>Parameter format: Millisecond-level time with UTC time zone compliant with the ISO 8601 standard</p>
         * @type {string || null}
         */
        this.EventTime = null;

        /**
         * <p>The user's current session ID used to associate with the actions before and after logging in. If UserId is not passed, SessionId is required. If missing, an empty string can be filled.</p>
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * <p>The token provided by the SDK integrated in your web site or application</p>
         * @type {string || null}
         */
        this.DeviceToken = null;

        /**
         * <p>User client IP address (IPv4 or IPv6)</p>
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * <p>Event details, import corresponding event information based on the event code you input</p>
         * @type {EventDetail || null}
         */
        this.EventDetail = null;

        /**
         * <p>The user's account ID in your system</p>
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * <p>Email of the user</p>
         * @type {string || null}
         */
        this.UserEmail = null;

        /**
         * <p>Phone number of the user</p><p>Parameter format: Complies with the E.164 standard format, which includes "+", region code, and number</p>
         * @type {string || null}
         */
        this.UserPhone = null;

        /**
         * <p>The details of the browser. If you've already integrated our device SDK, this field is not required</p>
         * @type {Browser || null}
         */
        this.Browser = null;

        /**
         * <p>The details of the app, os and device.If you've already integrated our device SDK, this field is not required</p>
         * @type {App || null}
         */
        this.App = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;

        if (params.EventDetail) {
            let obj = new EventDetail();
            obj.deserialize(params.EventDetail)
            this.EventDetail = obj;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserEmail = 'UserEmail' in params ? params.UserEmail : null;
        this.UserPhone = 'UserPhone' in params ? params.UserPhone : null;

        if (params.Browser) {
            let obj = new Browser();
            obj.deserialize(params.Browser)
            this.Browser = obj;
        }

        if (params.App) {
            let obj = new App();
            obj.deserialize(params.App)
            this.App = obj;
        }

    }
}

/**
 * The details of the merchant
 * @class
 */
class Merchant extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the merchant</p>
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * <p>The name of the merchant</p>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * <p>Merchant registration time</p><p>Parameter format: Millisecond-level time with UTC time zone compliant with ISO 8601</p>
         * @type {string || null}
         */
        this.RegisterTime = null;

        /**
         * <p>Merchant category code</p><p>Parameter format: 4-digit No. compliant with ISO 18245</p>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * <p>The phone number of the merchant</p><p>parameter format: format with "+", region code, and number that complies with the E.164 standard</p>
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * <p>The email of the merchant</p>
         * @type {string || null}
         */
        this.Email = null;

        /**
         * <p>The url of the merchant shop on the website</p>
         * @type {string || null}
         */
        this.URL = null;

        /**
         * <p>The address of the merchant</p>
         * @type {Address || null}
         */
        this.Address = null;

        /**
         * <p>The level of the merchant</p>
         * @type {string || null}
         */
        this.Level = null;

        /**
         * <p>The type of the merchant</p><p>Enumeration value:</p><ul><li>person: Person</li><li>company: Company</li></ul>
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * <p>The volume of goods on sale of the merchant</p>
         * @type {number || null}
         */
        this.GoodsQuantity = null;

        /**
         * <p>The historical sales volume of the merchant</p>
         * @type {number || null}
         */
        this.HistoricSalesQuantity = null;

        /**
         * <p>The historical sales amount of the merchant</p>
         * @type {Amount || null}
         */
        this.HistoricSalesAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RegisterTime = 'RegisterTime' in params ? params.RegisterTime : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.URL = 'URL' in params ? params.URL : null;

        if (params.Address) {
            let obj = new Address();
            obj.deserialize(params.Address)
            this.Address = obj;
        }
        this.Level = 'Level' in params ? params.Level : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.GoodsQuantity = 'GoodsQuantity' in params ? params.GoodsQuantity : null;
        this.HistoricSalesQuantity = 'HistoricSalesQuantity' in params ? params.HistoricSalesQuantity : null;

        if (params.HistoricSalesAmount) {
            let obj = new Amount();
            obj.deserialize(params.HistoricSalesAmount)
            this.HistoricSalesAmount = obj;
        }

    }
}

/**
 * Delivery information
 * @class
 */
class Delivery extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The method of the delivery</p><ul><li>physical</li><li>electronic</li></ul>
         * @type {string || null}
         */
        this.DeliveryMethod = null;

        /**
         * <p>The fee of the delivery</p>
         * @type {Amount || null}
         */
        this.DeliveryAmount = null;

        /**
         * <p>The address of the delivery</p>
         * @type {Address || null}
         */
        this.DeliveryAddress = null;

        /**
         * <p>Phone number of the consignee</p><p>parameter format: format with "+", region code, and number that complies with the E.164 standard</p>
         * @type {string || null}
         */
        this.ConsigneePhone = null;

        /**
         * <p>Email of the consignee</p>
         * @type {string || null}
         */
        this.ConsigneeEmail = null;

        /**
         * <p>Full name of the consignee</p>
         * @type {string || null}
         */
        this.ConsigneeName = null;

        /**
         * <p> Whether is the delivery expedited</p>
         * @type {boolean || null}
         */
        this.Expedited = null;

        /**
         * <p>The carrier of the delivery, usually a logistics company</p>
         * @type {string || null}
         */
        this.DeliveryCarrier = null;

        /**
         * <p>The number(s) used to track the delivery</p>
         * @type {string || null}
         */
        this.DeliveryTracking = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeliveryMethod = 'DeliveryMethod' in params ? params.DeliveryMethod : null;

        if (params.DeliveryAmount) {
            let obj = new Amount();
            obj.deserialize(params.DeliveryAmount)
            this.DeliveryAmount = obj;
        }

        if (params.DeliveryAddress) {
            let obj = new Address();
            obj.deserialize(params.DeliveryAddress)
            this.DeliveryAddress = obj;
        }
        this.ConsigneePhone = 'ConsigneePhone' in params ? params.ConsigneePhone : null;
        this.ConsigneeEmail = 'ConsigneeEmail' in params ? params.ConsigneeEmail : null;
        this.ConsigneeName = 'ConsigneeName' in params ? params.ConsigneeName : null;
        this.Expedited = 'Expedited' in params ? params.Expedited : null;
        this.DeliveryCarrier = 'DeliveryCarrier' in params ? params.DeliveryCarrier : null;
        this.DeliveryTracking = 'DeliveryTracking' in params ? params.DeliveryTracking : null;

    }
}

/**
 * Customization parameters agreed with RCE, object array in K:V format
 * @class
 */
class Cust extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Key</p>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * <p>Value</p>
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
 * Payment method
 * @class
 */
class PaymentMethod extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Payment method</p><p>Enumeration value:</p><ul><li>cash</li><li>check</li><li>credit_card</li><li>debit_card</li><li>crypto_currency</li><li>digital_wallet</li><li>gift_card</li><li>points</li><li>in_app_purchase</li><li>electronic_fund_transfer</li><li>financing</li><li>invoice</li><li>prepaid_card</li><li>sepa_credit</li></ul>
         * @type {string || null}
         */
        this.PaymentType = null;

        /**
         * <p>The channel of the payment</p>
         * @type {string || null}
         */
        this.PaymentChannel = null;

        /**
         * <p>The details of the card.Required while PaymentMethod is "credit_card","debit_card"</p>
         * @type {Card || null}
         */
        this.Card = null;

        /**
         * <p>SEPA direct debit mandate</p><p>Enumeration value:</p><ul><li>true: Yes</li><li>false: No</li></ul>
         * @type {boolean || null}
         */
        this.SEPADirectDebitMandate = null;

        /**
         * <p>The details of the digital wallet when involved digital trade</p>
         * @type {Wallet || null}
         */
        this.DigitalWallet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PaymentType = 'PaymentType' in params ? params.PaymentType : null;
        this.PaymentChannel = 'PaymentChannel' in params ? params.PaymentChannel : null;

        if (params.Card) {
            let obj = new Card();
            obj.deserialize(params.Card)
            this.Card = obj;
        }
        this.SEPADirectDebitMandate = 'SEPADirectDebitMandate' in params ? params.SEPADirectDebitMandate : null;

        if (params.DigitalWallet) {
            let obj = new Wallet();
            obj.deserialize(params.DigitalWallet)
            this.DigitalWallet = obj;
        }

    }
}

/**
 * LuckyDraw event details
 * @class
 */
class LuckyDrawEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the promotion</p>
         * @type {string || null}
         */
        this.PromotionId = null;

        /**
         * <p>The name of the promotion</p>
         * @type {string || null}
         */
        this.PromotionName = null;

        /**
         * <p>The description of the promotion</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>The ID of the inviter</p>
         * @type {string || null}
         */
        this.InviterUserId = null;

        /**
         * <p>Number of lucky draw</p><p>Unit: count</p>
         * @type {number || null}
         */
        this.LuckyDrawCount = null;

        /**
         * <p>Type of lucky draw</p>
         * @type {string || null}
         */
        this.LuckyDrawType = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PromotionId = 'PromotionId' in params ? params.PromotionId : null;
        this.PromotionName = 'PromotionName' in params ? params.PromotionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InviterUserId = 'InviterUserId' in params ? params.InviterUserId : null;
        this.LuckyDrawCount = 'LuckyDrawCount' in params ? params.LuckyDrawCount : null;
        this.LuckyDrawType = 'LuckyDrawType' in params ? params.LuckyDrawType : null;

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

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
         * <p>User client IP address (IPv4 or IPv6)</p>
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
 * The details of the order
 * @class
 */
class Order extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the order</p>
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * <p>The amount of the order</p>
         * @type {Amount || null}
         */
        this.Amount = null;

        /**
         * <p>The detail information of the items in the order</p>
         * @type {Array.<Item> || null}
         */
        this.Items = null;

        /**
         * <p>The detail information of the delivery associated with the order</p>
         * @type {Delivery || null}
         */
        this.Delivery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

        if (params.Amount) {
            let obj = new Amount();
            obj.deserialize(params.Amount)
            this.Amount = obj;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

        if (params.Delivery) {
            let obj = new Delivery();
            obj.deserialize(params.Delivery)
            this.Delivery = obj;
        }

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
 * The detail information of the user
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The level of the user in your system</p>
         * @type {string || null}
         */
        this.UserLevel = null;

        /**
         * <p>The point of the user in your system</p>
         * @type {CreditPoint || null}
         */
        this.UserPoint = null;

        /**
         * <p>The type of the user in your system</p>
         * @type {string || null}
         */
        this.UserType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserLevel = 'UserLevel' in params ? params.UserLevel : null;

        if (params.UserPoint) {
            let obj = new CreditPoint();
            obj.deserialize(params.UserPoint)
            this.UserPoint = obj;
        }
        this.UserType = 'UserType' in params ? params.UserType : null;

    }
}

/**
 * Address
 * @class
 */
class Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Country</p><p>Parameter format: Compliant with the ISO 3166 standard</p>
         * @type {string || null}
         */
        this.Country = null;

        /**
         * <p>Province</p>
         * @type {string || null}
         */
        this.Region = null;

        /**
         * <p>City</p>
         * @type {string || null}
         */
        this.City = null;

        /**
         * <p>Region</p>
         * @type {string || null}
         */
        this.District = null;

        /**
         * <p>Detailed address</p>
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * <p>Postal code</p>
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
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.ZipCode = 'ZipCode' in params ? params.ZipCode : null;

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

        /**
         * <p>Signature verification token. Please contact us to enable signature verification</p>
         * @type {string || null}
         */
        this.SignToken = null;

        /**
         * <p>Token generation timestamp, in milliseconds</p>
         * @type {string || null}
         */
        this.TokenTime = null;

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
        this.SignToken = 'SignToken' in params ? params.SignToken : null;
        this.TokenTime = 'TokenTime' in params ? params.TokenTime : null;

    }
}

/**
 * CreateOrder event details
 * @class
 */
class CreateOrderEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the order</p>
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * <p>The amount of the order</p>
         * @type {Amount || null}
         */
        this.Amount = null;

        /**
         * <p>The detail information of the merchant associated with the order</p>
         * @type {Merchant || null}
         */
        this.Merchant = null;

        /**
         * <p>The detail information of the bill associated with the order</p>
         * @type {Billing || null}
         */
        this.Billing = null;

        /**
         * <p>The detail information of the items in the order</p>
         * @type {Array.<Item> || null}
         */
        this.Items = null;

        /**
         * <p>The detail information of the delivery associated with the order</p>
         * @type {Delivery || null}
         */
        this.Delivery = null;

        /**
         * <p>The promotion(s) associated with the order</p>
         * @type {Array.<Promotion> || null}
         */
        this.Promotions = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

        if (params.Amount) {
            let obj = new Amount();
            obj.deserialize(params.Amount)
            this.Amount = obj;
        }

        if (params.Merchant) {
            let obj = new Merchant();
            obj.deserialize(params.Merchant)
            this.Merchant = obj;
        }

        if (params.Billing) {
            let obj = new Billing();
            obj.deserialize(params.Billing)
            this.Billing = obj;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

        if (params.Delivery) {
            let obj = new Delivery();
            obj.deserialize(params.Delivery)
            this.Delivery = obj;
        }

        if (params.Promotions) {
            this.Promotions = new Array();
            for (let z in params.Promotions) {
                let obj = new Promotion();
                obj.deserialize(params.Promotions[z]);
                this.Promotions.push(obj);
            }
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * The details of the card
 * @class
 */
class Card extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Bank identification number.The first six or eight digits of the card number</p><p>Parameter format: Compliant with the ISO 13616-1 standard</p>
         * @type {string || null}
         */
        this.CardBin = null;

        /**
         * <p>The last four digits of the card number</p><p>Parameter format: Compliant with ISO 13616-1 standard</p>
         * @type {string || null}
         */
        this.LastFourDigits = null;

        /**
         * <p>The country where the card issued</p>
         * @type {string || null}
         */
        this.Country = null;

        /**
         * <p>The bank that issued card</p>
         * @type {string || null}
         */
        this.Bank = null;

        /**
         * <p>the type of the card</p><p>Enumeration value:</p><ul><li>credit: Credit card</li><li>debit: Debit card</li><li>charge: Charge card</li></ul>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * <p>The brand of the card</p>
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * <p>The level of the card that the bank defined</p>
         * @type {string || null}
         */
        this.Level = null;

        /**
         * <p>The full name of the person who hold the card</p>
         * @type {string || null}
         */
        this.HolderName = null;

        /**
         * <p>The expiration date of the card</p><p>Parameter format: YYYY-MM-DD.</p>
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CardBin = 'CardBin' in params ? params.CardBin : null;
        this.LastFourDigits = 'LastFourDigits' in params ? params.LastFourDigits : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Bank = 'Bank' in params ? params.Bank : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.HolderName = 'HolderName' in params ? params.HolderName : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * Event result
 * @class
 */
class Result extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Actual completion status</p><p>Enumeration values:</p><ul><li>success: Success,</li><li>failure: Failure.</li></ul>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>Failure reason</p>
         * @type {string || null}
         */
        this.FailureReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;

    }
}

/**
 * ReportEvent response structure.
 * @class
 */
class ReportEventResponse extends  AbstractModel {
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
 * Custom event
 * @class
 */
class CustEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
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

        /**
         * <p>Comprehensive risk score.</p><p>Value ranges from 1 to 1000.</p><p>The larger the value, the larger the risk.</p>
         * @type {number || null}
         */
        this.RiskScore = null;

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
        this.RiskScore = 'RiskScore' in params ? params.RiskScore : null;

    }
}

/**
 * Browse event details
 * @class
 */
class BrowseEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Current page type such as home page, search page</p>
         * @type {string || null}
         */
        this.PageType = null;

        /**
         * <p>Currently page URL</p>
         * @type {string || null}
         */
        this.PageUrl = null;

        /**
         * <p>Browsing duration</p><p>Measurement unit: ms</p>
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * <p>The type of the content in current page such as ad, video, article</p>
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * <p>The ID of the content in current page</p>
         * @type {string || null}
         */
        this.ContentId = null;

        /**
         * <p>Previous page type such as home page, search page</p>
         * @type {string || null}
         */
        this.ReferPageType = null;

        /**
         * <p>Previous page URL</p>
         * @type {string || null}
         */
        this.ReferPageUrl = null;

        /**
         * <p>The ID of the user as guest</p>
         * @type {string || null}
         */
        this.GuestId = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageType = 'PageType' in params ? params.PageType : null;
        this.PageUrl = 'PageUrl' in params ? params.PageUrl : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.ContentId = 'ContentId' in params ? params.ContentId : null;
        this.ReferPageType = 'ReferPageType' in params ? params.ReferPageType : null;
        this.ReferPageUrl = 'ReferPageUrl' in params ? params.ReferPageUrl : null;
        this.GuestId = 'GuestId' in params ? params.GuestId : null;

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

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
         * <p>User client IP address (IPv4 or IPv6)</p>
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
 * The details of the point
 * @class
 */
class CreditPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The value of the point</p>
         * @type {number || null}
         */
        this.Point = null;

        /**
         * <p>The type of the point</p>
         * @type {string || null}
         */
        this.PointType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Point = 'Point' in params ? params.Point : null;
        this.PointType = 'PointType' in params ? params.PointType : null;

    }
}

/**
 * The details of the item
 * @class
 */
class Item extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The unique ID of the item</p>
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * <p>The name of the item</p>
         * @type {string || null}
         */
        this.ItemName = null;

        /**
         * <p>The category of the item</p>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * <p>The price of the item</p>
         * @type {Amount || null}
         */
        this.Price = null;

        /**
         * <p>If the item has a UPC (Universal Product Code), please provide it here.</p>
         * @type {string || null}
         */
        this.UPC = null;

        /**
         * <p>If the item has an EAN (European Article Number), please provide it here.</p>
         * @type {string || null}
         */
        this.EAN = null;

        /**
         * <p>If the item has an SKU (Stock Keeping Unit), please provide it here.</p>
         * @type {string || null}
         */
        this.SKU = null;

        /**
         * <p>If the item has an ISBN (International Standard Book Number), please provide it here.</p>
         * @type {string || null}
         */
        this.ISBN = null;

        /**
         * <p>The brand of the item</p>
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * <p>The quantity of the item</p>
         * @type {number || null}
         */
        this.Quantity = null;

        /**
         * <p>The manufacture of the item</p>
         * @type {string || null}
         */
        this.Manufacturer = null;

        /**
         * <p>The tags of the item in your system</p>
         * @type {string || null}
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
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.ItemName = 'ItemName' in params ? params.ItemName : null;
        this.Category = 'Category' in params ? params.Category : null;

        if (params.Price) {
            let obj = new Amount();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.UPC = 'UPC' in params ? params.UPC : null;
        this.EAN = 'EAN' in params ? params.EAN : null;
        this.SKU = 'SKU' in params ? params.SKU : null;
        this.ISBN = 'ISBN' in params ? params.ISBN : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.Manufacturer = 'Manufacturer' in params ? params.Manufacturer : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * Amount
 * @class
 */
class Amount extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Currency code</p><p>Parameter format: Compliant with the ISO 4217 standard</p>
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * <p>Original amount in currency</p>
         * @type {number || null}
         */
        this.OriginalAmount = null;

        /**
         * <p>Current exchange rate of base currency converted to USD</p>
         * @type {number || null}
         */
        this.ExchangeRateUSD = null;

        /**
         * <p>Current exchange rate of base currency converted to CNY</p>
         * @type {number || null}
         */
        this.ExchangeRateCNY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.OriginalAmount = 'OriginalAmount' in params ? params.OriginalAmount : null;
        this.ExchangeRateUSD = 'ExchangeRateUSD' in params ? params.ExchangeRateUSD : null;
        this.ExchangeRateCNY = 'ExchangeRateCNY' in params ? params.ExchangeRateCNY : null;

    }
}

/**
 * SMS event details
 * @class
 */
class SMSEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The detail information of the user</p>
         * @type {User || null}
         */
        this.UserInfo = null;

        /**
         * <p>The unique ID of the sms</p>
         * @type {string || null}
         */
        this.SMSId = null;

        /**
         * <p>The time that the user received the sms</p><p>Parameter format: Millisecond-level time with UTC time zone compliant with ISO 8601 standard</p>
         * @type {string || null}
         */
        this.ReceivedTime = null;

        /**
         * <p>The action of the user after receiving the sms</p><ul><li>no_action: No action from the user</li><li>safe: User confirmation of the correct person's action</li><li>compromised: Feedback from real users indicates third-party action</li></ul>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * <p>The result of the sms</p>
         * @type {Result || null}
         */
        this.SMSResult = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserInfo) {
            let obj = new User();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.SMSId = 'SMSId' in params ? params.SMSId : null;
        this.ReceivedTime = 'ReceivedTime' in params ? params.ReceivedTime : null;
        this.Action = 'Action' in params ? params.Action : null;

        if (params.SMSResult) {
            let obj = new Result();
            obj.deserialize(params.SMSResult)
            this.SMSResult = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
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
 * AddPromotion event details
 * @class
 */
class AddPromotionEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the promotion</p>
         * @type {string || null}
         */
        this.PromotionId = null;

        /**
         * <p>The name of the promotion</p>
         * @type {string || null}
         */
        this.PromotionName = null;

        /**
         * <p>The description of the promotion</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>The ID of the inviter</p>
         * @type {string || null}
         */
        this.InviterUserId = null;

        /**
         * <p>The coupon associated with the promotion</p>
         * @type {Coupon || null}
         */
        this.Coupon = null;

        /**
         * <p>The point associated with the promotion</p>
         * @type {CreditPoint || null}
         */
        this.Point = null;

        /**
         * <p>The result of participating the promotion</p>
         * @type {Result || null}
         */
        this.Result = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131***85678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PromotionId = 'PromotionId' in params ? params.PromotionId : null;
        this.PromotionName = 'PromotionName' in params ? params.PromotionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InviterUserId = 'InviterUserId' in params ? params.InviterUserId : null;

        if (params.Coupon) {
            let obj = new Coupon();
            obj.deserialize(params.Coupon)
            this.Coupon = obj;
        }

        if (params.Point) {
            let obj = new CreditPoint();
            obj.deserialize(params.Point)
            this.Point = obj;
        }

        if (params.Result) {
            let obj = new Result();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * The details of the promotion
 * @class
 */
class Promotion extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the promotion</p>
         * @type {string || null}
         */
        this.PromotionId = null;

        /**
         * <p>The name of the promotion</p>
         * @type {string || null}
         */
        this.PromotionName = null;

        /**
         * <p>The description of the promotion</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>The ID of the inviter</p>
         * @type {string || null}
         */
        this.InviterUserId = null;

        /**
         * <p>The coupon(s) associated with the promotion</p>
         * @type {Coupon || null}
         */
        this.Coupon = null;

        /**
         * <p>The point(s) associated with the promotion</p>
         * @type {CreditPoint || null}
         */
        this.CreditPoint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PromotionId = 'PromotionId' in params ? params.PromotionId : null;
        this.PromotionName = 'PromotionName' in params ? params.PromotionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InviterUserId = 'InviterUserId' in params ? params.InviterUserId : null;

        if (params.Coupon) {
            let obj = new Coupon();
            obj.deserialize(params.Coupon)
            this.Coupon = obj;
        }

        if (params.CreditPoint) {
            let obj = new CreditPoint();
            obj.deserialize(params.CreditPoint)
            this.CreditPoint = obj;
        }

    }
}

/**
 * ModifyAccount event details
 * @class
 */
class ModifyAccountEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The detail information of the user</p>
         * @type {User || null}
         */
        this.UserInfo = null;

        /**
         * <p>The personal information of the account when registered</p>
         * @type {Person || null}
         */
        this.Person = null;

        /**
         * <p>The billing address the user provided when registered</p>
         * @type {Address || null}
         */
        this.BillingAddress = null;

        /**
         * <p>The delivery address the user provided when registered</p>
         * @type {Address || null}
         */
        this.DeliveryAddress = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserInfo) {
            let obj = new User();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }

        if (params.Person) {
            let obj = new Person();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.BillingAddress) {
            let obj = new Address();
            obj.deserialize(params.BillingAddress)
            this.BillingAddress = obj;
        }

        if (params.DeliveryAddress) {
            let obj = new Address();
            obj.deserialize(params.DeliveryAddress)
            this.DeliveryAddress = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * Inviter information
 * @class
 */
class Inviter extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the inviter</p>
         * @type {string || null}
         */
        this.InviterUserId = null;

        /**
         * <p>The phone number of the inviter</p><p>Parameter format: Complies with the E.164 standard format, which includes "+", region code, and number.</p>
         * @type {string || null}
         */
        this.InviterPhone = null;

        /**
         * <p>The code that the inviter sent to the user</p>
         * @type {string || null}
         */
        this.InviteCode = null;

        /**
         * <p>The channel that inviter used to invite the user</p>
         * @type {string || null}
         */
        this.InviteChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InviterUserId = 'InviterUserId' in params ? params.InviterUserId : null;
        this.InviterPhone = 'InviterPhone' in params ? params.InviterPhone : null;
        this.InviteCode = 'InviteCode' in params ? params.InviteCode : null;
        this.InviteChannel = 'InviteChannel' in params ? params.InviteChannel : null;

    }
}

/**
 * Logout event details
 * @class
 */
class LogoutEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The detail information of the user</p>
         * @type {User || null}
         */
        this.UserInfo = null;

        /**
         * <p>The user name entered when the user logged in</p>
         * @type {string || null}
         */
        this.UserLoginName = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserInfo) {
            let obj = new User();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.UserLoginName = 'UserLoginName' in params ? params.UserLoginName : null;

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * Browser information
 * @class
 */
class Browser extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The user agent of the browser that interacts with the website</p>
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * <p>The language(s) that the client prefers</p><p>Parameter format: Complies with the ISO 3166 standard</p>
         * @type {string || null}
         */
        this.AcceptLanguage = null;

        /**
         * <p>The language(s) intended for the audience</p><p>Parameter format: Compliant with ISO 3166 standard</p>
         * @type {string || null}
         */
        this.ContentLanguage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.AcceptLanguage = 'AcceptLanguage' in params ? params.AcceptLanguage : null;
        this.ContentLanguage = 'ContentLanguage' in params ? params.ContentLanguage : null;

    }
}

/**
 * Payment result
 * @class
 */
class PaymentResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The status of the payment</p><p>Enumeration values: </p><ul><li>success: Success, </li><li>failure: Failure.</li></ul>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * <p>The reason why the payment has been declined. e.g.card_declined</p>
         * @type {string || null}
         */
        this.FailureReason = null;

        /**
         * <p>Whether the 3DS has been used in the payment,  enumeration value:</p><ul><li>Yes: true</li><li>No: false</li></ul>
         * @type {boolean || null}
         */
        this.ThreeDomainSecure = null;

        /**
         * <p>The ECI code returned when 3DS used</p>
         * @type {string || null}
         */
        this.ECICode = null;

        /**
         * <p>Response code from the AVS used for address verification</p>
         * @type {string || null}
         */
        this.AVSCode = null;

        /**
         * <p>Response code from the CVC used for payment authenticity</p>
         * @type {string || null}
         */
        this.CVCCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.FailureReason = 'FailureReason' in params ? params.FailureReason : null;
        this.ThreeDomainSecure = 'ThreeDomainSecure' in params ? params.ThreeDomainSecure : null;
        this.ECICode = 'ECICode' in params ? params.ECICode : null;
        this.AVSCode = 'AVSCode' in params ? params.AVSCode : null;
        this.CVCCode = 'CVCCode' in params ? params.CVCCode : null;

    }
}

/**
 * Transaction event details
 * @class
 */
class TransactionEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The unique ID of the transaction</p>
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * <p>The ID(s) of the order associated with the transaction</p>
         * @type {Array.<string> || null}
         */
        this.OrderId = null;

        /**
         * <p>The amount of the transaction</p>
         * @type {Amount || null}
         */
        this.PaymentAmount = null;

        /**
         * <p>The detail information of the payment method associated with the transaction</p>
         * @type {PaymentMethod || null}
         */
        this.PaymentMethod = null;

        /**
         * <p>Transaction type</p><p>Enumeration value:</p><ul><li>sale: One-time authorization and deduction (most common)</li><li>authorize: Authorization only (frozen amount)</li><li>capture: Execute deduction (after authorization)</li><li>void: Cancel pending authorization or deduction</li><li>refund: Refund (part or all)</li><li>deposit: Deposit to account</li><li>withdrawal: Withdrawal from account</li><li>transfer: Fund transfer between accounts</li><li>buy: Purchase asset (for example, crypto currency)</li><li>sell: Sell asset</li><li>send: Send fund/asset (for example, cross-wallet transfer)</li><li>receive: Receive fund/asset</li></ul><p>Default value: sale</p>
         * @type {string || null}
         */
        this.TransactionType = null;

        /**
         * <p>Bill information</p>
         * @type {Billing || null}
         */
        this.Billing = null;

        /**
         * <p>Delivery information</p>
         * @type {Delivery || null}
         */
        this.Delivery = null;

        /**
         * <p>Merchant information</p>
         * @type {Merchant || null}
         */
        this.Merchant = null;

        /**
         * <p>Payment result</p>
         * @type {PaymentResult || null}
         */
        this.PaymentResult = null;

        /**
         * <p>The ID of the recipent in transfer transaction</p>
         * @type {string || null}
         */
        this.TransferRecipientUserId = null;

        /**
         * <p>The address of the sender in transfer transaction</p>
         * @type {Address || null}
         */
        this.TransferSentAddress = null;

        /**
         * <p>Physical address of the recipient, applicable to the transfer transaction type.</p>
         * @type {Address || null}
         */
        this.TransferReceivedAddress = null;

        /**
         * <p>The digital order(s) associated with the transaction</p>
         * @type {Array.<DigitalOrder> || null}
         */
        this.DigitalOrders = null;

        /**
         * <p>Wallet to receive crypto currency</p>
         * @type {Wallet || null}
         */
        this.ReceiverWallet = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

        if (params.PaymentAmount) {
            let obj = new Amount();
            obj.deserialize(params.PaymentAmount)
            this.PaymentAmount = obj;
        }

        if (params.PaymentMethod) {
            let obj = new PaymentMethod();
            obj.deserialize(params.PaymentMethod)
            this.PaymentMethod = obj;
        }
        this.TransactionType = 'TransactionType' in params ? params.TransactionType : null;

        if (params.Billing) {
            let obj = new Billing();
            obj.deserialize(params.Billing)
            this.Billing = obj;
        }

        if (params.Delivery) {
            let obj = new Delivery();
            obj.deserialize(params.Delivery)
            this.Delivery = obj;
        }

        if (params.Merchant) {
            let obj = new Merchant();
            obj.deserialize(params.Merchant)
            this.Merchant = obj;
        }

        if (params.PaymentResult) {
            let obj = new PaymentResult();
            obj.deserialize(params.PaymentResult)
            this.PaymentResult = obj;
        }
        this.TransferRecipientUserId = 'TransferRecipientUserId' in params ? params.TransferRecipientUserId : null;

        if (params.TransferSentAddress) {
            let obj = new Address();
            obj.deserialize(params.TransferSentAddress)
            this.TransferSentAddress = obj;
        }

        if (params.TransferReceivedAddress) {
            let obj = new Address();
            obj.deserialize(params.TransferReceivedAddress)
            this.TransferReceivedAddress = obj;
        }

        if (params.DigitalOrders) {
            this.DigitalOrders = new Array();
            for (let z in params.DigitalOrders) {
                let obj = new DigitalOrder();
                obj.deserialize(params.DigitalOrders[z]);
                this.DigitalOrders.push(obj);
            }
        }

        if (params.ReceiverWallet) {
            let obj = new Wallet();
            obj.deserialize(params.ReceiverWallet)
            this.ReceiverWallet = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * ModifyPassword event details
 * @class
 */
class ModifyPasswordEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The reason why the password was updated</p><p>Enumeration value:</p><ul><li>user_modify: User self-initiated modification</li><li>forgot_password: Forget password</li><li>forced_reset: System forcing reset</li></ul>
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
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

        /**
         * <p>Basic IP environment information</p>
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
 * The details of the coupon
 * @class
 */
class Coupon extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The unique ID of each coupon</p>
         * @type {string || null}
         */
        this.CouponId = null;

        /**
         * <p>The name of the coupon</p>
         * @type {string || null}
         */
        this.CouponName = null;

        /**
         * <p>The start time of the coupon</p><p>Parameter format: Millisecond-level time with UTC time zone compliant with ISO 8601.</p>
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * <p>The expiration time of the coupon</p><p>Parameter format: Millisecond-level time with UTC time zone compliant with ISO 8601 standard</p>
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * <p>The percentage rate of the coupon. If discount off is 10%,please send 0.1</p>
         * @type {number || null}
         */
        this.PercentageRate = null;

        /**
         * <p>The discount amount of the coupon</p>
         * @type {Amount || null}
         */
        this.DiscountAmount = null;

        /**
         * <p>The threshold amount of the coupon</p>
         * @type {number || null}
         */
        this.Threshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CouponId = 'CouponId' in params ? params.CouponId : null;
        this.CouponName = 'CouponName' in params ? params.CouponName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.PercentageRate = 'PercentageRate' in params ? params.PercentageRate : null;

        if (params.DiscountAmount) {
            let obj = new Amount();
            obj.deserialize(params.DiscountAmount)
            this.DiscountAmount = obj;
        }
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

    }
}

/**
 * Register event details
 * @class
 */
class RegisterEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The result of the register</p>
         * @type {Result || null}
         */
        this.RegisterResult = null;

        /**
         * <p>The detail information of the user</p>
         * @type {User || null}
         */
        this.UserInfo = null;

        /**
         * <p>The personal information of the account when registered</p>
         * @type {Person || null}
         */
        this.Person = null;

        /**
         * <p>The billing address the user provided when registered</p>
         * @type {Address || null}
         */
        this.BillingAddress = null;

        /**
         * <p>The delivery address the user provided when registered</p>
         * @type {Address || null}
         */
        this.DeliveryAddress = null;

        /**
         * <p>The detail information of the inviter who invited the user to your business</p>
         * @type {Inviter || null}
         */
        this.Inviter = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegisterResult) {
            let obj = new Result();
            obj.deserialize(params.RegisterResult)
            this.RegisterResult = obj;
        }

        if (params.UserInfo) {
            let obj = new User();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }

        if (params.Person) {
            let obj = new Person();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.BillingAddress) {
            let obj = new Address();
            obj.deserialize(params.BillingAddress)
            this.BillingAddress = obj;
        }

        if (params.DeliveryAddress) {
            let obj = new Address();
            obj.deserialize(params.DeliveryAddress)
            this.DeliveryAddress = obj;
        }

        if (params.Inviter) {
            let obj = new Inviter();
            obj.deserialize(params.Inviter)
            this.Inviter = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * The details of the app, os and device
 * @class
 */
class App extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The operating system your application is running on</p>
         * @type {string || null}
         */
        this.OS = null;

        /**
         * <p>The operating system version  your application is running on</p>
         * @type {string || null}
         */
        this.OSVersion = null;

        /**
         * <p>The manufacturer of  the device your application is running on</p>
         * @type {string || null}
         */
        this.DeviceManufacturer = null;

        /**
         * <p>The model of the device your application is running on</p>
         * @type {string || null}
         */
        this.DeviceModel = null;

        /**
         * <p>The ID of the device your application is running on</p>
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * <p>The name of your application</p>
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * <p>The version of your application</p>
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * <p>The language of your application</p>
         * @type {string || null}
         */
        this.ClientLanguage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OS = 'OS' in params ? params.OS : null;
        this.OSVersion = 'OSVersion' in params ? params.OSVersion : null;
        this.DeviceManufacturer = 'DeviceManufacturer' in params ? params.DeviceManufacturer : null;
        this.DeviceModel = 'DeviceModel' in params ? params.DeviceModel : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.ClientLanguage = 'ClientLanguage' in params ? params.ClientLanguage : null;

    }
}

/**
 * Login event detail
 * @class
 */
class LoginEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Basic user information</p>
         * @type {User || null}
         */
        this.UserInfo = null;

        /**
         * <p>The user name entered when the user logged in</p>
         * @type {string || null}
         */
        this.UserLoginName = null;

        /**
         * <p>Login result</p>
         * @type {Result || null}
         */
        this.LoginResult = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserInfo) {
            let obj = new User();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.UserLoginName = 'UserLoginName' in params ? params.UserLoginName : null;

        if (params.LoginResult) {
            let obj = new Result();
            obj.deserialize(params.LoginResult)
            this.LoginResult = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * Event details
 * @class
 */
class EventDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Login</p>
         * @type {LoginEvent || null}
         */
        this.Login = null;

        /**
         * <p>Registration</p>
         * @type {RegisterEvent || null}
         */
        this.Register = null;

        /**
         * <p>Create an order</p>
         * @type {CreateOrderEvent || null}
         */
        this.CreateOrder = null;

        /**
         * <p>Transaction</p>
         * @type {TransactionEvent || null}
         */
        this.Transaction = null;

        /**
         * <p>SMS</p>
         * @type {SMSEvent || null}
         */
        this.Sms = null;

        /**
         * <p>Chargeback</p>
         * @type {ChargeBackEvent || null}
         */
        this.ChargeBack = null;

        /**
         * <p>Logout</p>
         * @type {LogoutEvent || null}
         */
        this.Logout = null;

        /**
         * <p>Modify account</p>
         * @type {ModifyAccountEvent || null}
         */
        this.ModifyAccount = null;

        /**
         * <p>Modify password</p>
         * @type {ModifyPasswordEvent || null}
         */
        this.ModifyPassword = null;

        /**
         * <p>Security verification</p>
         * @type {SecurityVerificationEvent || null}
         */
        this.SecurityVerification = null;

        /**
         * <p>Participate in promotion activities</p>
         * @type {AddPromotionEvent || null}
         */
        this.AddPromotion = null;

        /**
         * <p>Redeem a prize</p>
         * @type {RedeemEvent || null}
         */
        this.Redeem = null;

        /**
         * <p>Withdrawal</p>
         * @type {WithdrawEvent || null}
         */
        this.Withdraw = null;

        /**
         * <p>Custom event</p>
         * @type {CustEvent || null}
         */
        this.CustEvent = null;

        /**
         * <p>Scan the QR code</p>
         * @type {ScanCodeEvent || null}
         */
        this.ScanCode = null;

        /**
         * <p>Lucky draw</p>
         * @type {LuckyDrawEvent || null}
         */
        this.LuckyDraw = null;

        /**
         * <p>Perform a task</p>
         * @type {TaskEvent || null}
         */
        this.Task = null;

        /**
         * <p>Invitation</p>
         * @type {InvitationEvent || null}
         */
        this.Invitation = null;

        /**
         * <p>Receive a red packet</p>
         * @type {ClaimRedPacketEvent || null}
         */
        this.ClaimRedPacket = null;

        /**
         * <p>Browse</p>
         * @type {BrowseEvent || null}
         */
        this.Browse = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Login) {
            let obj = new LoginEvent();
            obj.deserialize(params.Login)
            this.Login = obj;
        }

        if (params.Register) {
            let obj = new RegisterEvent();
            obj.deserialize(params.Register)
            this.Register = obj;
        }

        if (params.CreateOrder) {
            let obj = new CreateOrderEvent();
            obj.deserialize(params.CreateOrder)
            this.CreateOrder = obj;
        }

        if (params.Transaction) {
            let obj = new TransactionEvent();
            obj.deserialize(params.Transaction)
            this.Transaction = obj;
        }

        if (params.Sms) {
            let obj = new SMSEvent();
            obj.deserialize(params.Sms)
            this.Sms = obj;
        }

        if (params.ChargeBack) {
            let obj = new ChargeBackEvent();
            obj.deserialize(params.ChargeBack)
            this.ChargeBack = obj;
        }

        if (params.Logout) {
            let obj = new LogoutEvent();
            obj.deserialize(params.Logout)
            this.Logout = obj;
        }

        if (params.ModifyAccount) {
            let obj = new ModifyAccountEvent();
            obj.deserialize(params.ModifyAccount)
            this.ModifyAccount = obj;
        }

        if (params.ModifyPassword) {
            let obj = new ModifyPasswordEvent();
            obj.deserialize(params.ModifyPassword)
            this.ModifyPassword = obj;
        }

        if (params.SecurityVerification) {
            let obj = new SecurityVerificationEvent();
            obj.deserialize(params.SecurityVerification)
            this.SecurityVerification = obj;
        }

        if (params.AddPromotion) {
            let obj = new AddPromotionEvent();
            obj.deserialize(params.AddPromotion)
            this.AddPromotion = obj;
        }

        if (params.Redeem) {
            let obj = new RedeemEvent();
            obj.deserialize(params.Redeem)
            this.Redeem = obj;
        }

        if (params.Withdraw) {
            let obj = new WithdrawEvent();
            obj.deserialize(params.Withdraw)
            this.Withdraw = obj;
        }

        if (params.CustEvent) {
            let obj = new CustEvent();
            obj.deserialize(params.CustEvent)
            this.CustEvent = obj;
        }

        if (params.ScanCode) {
            let obj = new ScanCodeEvent();
            obj.deserialize(params.ScanCode)
            this.ScanCode = obj;
        }

        if (params.LuckyDraw) {
            let obj = new LuckyDrawEvent();
            obj.deserialize(params.LuckyDraw)
            this.LuckyDraw = obj;
        }

        if (params.Task) {
            let obj = new TaskEvent();
            obj.deserialize(params.Task)
            this.Task = obj;
        }

        if (params.Invitation) {
            let obj = new InvitationEvent();
            obj.deserialize(params.Invitation)
            this.Invitation = obj;
        }

        if (params.ClaimRedPacket) {
            let obj = new ClaimRedPacketEvent();
            obj.deserialize(params.ClaimRedPacket)
            this.ClaimRedPacket = obj;
        }

        if (params.Browse) {
            let obj = new BrowseEvent();
            obj.deserialize(params.Browse)
            this.Browse = obj;
        }

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
 * SecurityVerification event details
 * @class
 */
class SecurityVerificationEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The event type being verified</p><p>Enumeration values:</p><ul><li>register</li><li>login</li><li>modify_account</li><li>modify_password</li><li>create_order</li><li>transaction</li><li>modify_order</li><li>withdraw</li><li>add_promotion</li><li>redeem</li></ul>
         * @type {string || null}
         */
        this.VerificationEvent = null;

        /**
         * <p>The type of security verification: sms, phone call, email, captcha, shared knowledge, human face, fingerprint, etc</p>
         * @type {string || null}
         */
        this.VerificationType = null;

        /**
         * <p>The content of the security verifcation.This value should be passed when the verification type is set to sms, phone_call, email captcha or shared_knowledge</p>
         * @type {string || null}
         */
        this.VerificationContent = null;

        /**
         * <p>The result of security verification</p>
         * @type {Result || null}
         */
        this.VerificationResult = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VerificationEvent = 'VerificationEvent' in params ? params.VerificationEvent : null;
        this.VerificationType = 'VerificationType' in params ? params.VerificationType : null;
        this.VerificationContent = 'VerificationContent' in params ? params.VerificationContent : null;

        if (params.VerificationResult) {
            let obj = new Result();
            obj.deserialize(params.VerificationResult)
            this.VerificationResult = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

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
 * Redeem event details
 * @class
 */
class RedeemEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the promotion</p>
         * @type {string || null}
         */
        this.PromotionId = null;

        /**
         * <p>The name of the promotion</p>
         * @type {string || null}
         */
        this.PromotionName = null;

        /**
         * <p>The description of the promotion</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>The ID of the inviter</p>
         * @type {string || null}
         */
        this.InviterUserId = null;

        /**
         * <p>Order information associated with the redemption</p>
         * @type {Order || null}
         */
        this.Order = null;

        /**
         * <p>The result of redemption</p>
         * @type {Result || null}
         */
        this.Result = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PromotionId = 'PromotionId' in params ? params.PromotionId : null;
        this.PromotionName = 'PromotionName' in params ? params.PromotionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InviterUserId = 'InviterUserId' in params ? params.InviterUserId : null;

        if (params.Order) {
            let obj = new Order();
            obj.deserialize(params.Order)
            this.Order = obj;
        }

        if (params.Result) {
            let obj = new Result();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * Invitation event details
 * @class
 */
class InvitationEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The ID of the invitee</p>
         * @type {string || null}
         */
        this.InviteeUserId = null;

        /**
         * <p>The ID of the promotion</p>
         * @type {string || null}
         */
        this.PromotionId = null;

        /**
         * <p>The name of the promotion</p>
         * @type {string || null}
         */
        this.PromotionName = null;

        /**
         * <p>The description of the promotion</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>The phone number of the invitee</p><p>Parameter format: Complies with the E.164 standard format, which includes "+", region code, and number.</p>
         * @type {string || null}
         */
        this.InviteePhone = null;

        /**
         * <p>The code that the inviter sent to the user</p>
         * @type {string || null}
         */
        this.InvitationCode = null;

        /**
         * <p>The url that the inviter sent to the user</p>
         * @type {string || null}
         */
        this.InvitationUrl = null;

        /**
         * <p>The channel that inviter used to invite the user </p>
         * @type {string || null}
         */
        this.InvitationChannel = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InviteeUserId = 'InviteeUserId' in params ? params.InviteeUserId : null;
        this.PromotionId = 'PromotionId' in params ? params.PromotionId : null;
        this.PromotionName = 'PromotionName' in params ? params.PromotionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InviteePhone = 'InviteePhone' in params ? params.InviteePhone : null;
        this.InvitationCode = 'InvitationCode' in params ? params.InvitationCode : null;
        this.InvitationUrl = 'InvitationUrl' in params ? params.InvitationUrl : null;
        this.InvitationChannel = 'InvitationChannel' in params ? params.InvitationChannel : null;

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * Withdraw event details
 * @class
 */
class WithdrawEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>The amount of the withdraw</p>
         * @type {Amount || null}
         */
        this.Amount = null;

        /**
         * <p>The method of the withdraw</p><p>Enumeration value:</p><ul><li>card: bank card</li><li>wallet: digital wallet</li></ul>
         * @type {string || null}
         */
        this.Method = null;

        /**
         * <p>The detail information of the card withdrawn to.Required while the withdraw method is card</p>
         * @type {Card || null}
         */
        this.Card = null;

        /**
         * <p>The detail information of the wallet withdrawn to.Required while the withdraw method is wallet</p>
         * @type {Wallet || null}
         */
        this.Wallet = null;

        /**
         * <p>Withdraw result</p>
         * @type {Result || null}
         */
        this.Result = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Amount) {
            let obj = new Amount();
            obj.deserialize(params.Amount)
            this.Amount = obj;
        }
        this.Method = 'Method' in params ? params.Method : null;

        if (params.Card) {
            let obj = new Card();
            obj.deserialize(params.Card)
            this.Card = obj;
        }

        if (params.Wallet) {
            let obj = new Wallet();
            obj.deserialize(params.Wallet)
            this.Wallet = obj;
        }

        if (params.Result) {
            let obj = new Result();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

/**
 * ScanCode event details
 * @class
 */
class ScanCodeEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * <p>Promotion code information</p>
         * @type {PromotionCode || null}
         */
        this.PromotionCode = null;

        /**
         * <p>The ID of the promotion</p>
         * @type {string || null}
         */
        this.PromotionId = null;

        /**
         * <p>The name of the promotion</p>
         * @type {string || null}
         */
        this.PromotionName = null;

        /**
         * <p>The description of the promotion</p>
         * @type {string || null}
         */
        this.Description = null;

        /**
         * <p>The ID of the inviter</p>
         * @type {string || null}
         */
        this.InviterUserId = null;

        /**
         * <p>The custom parameters agreed with RCE. An array of objects in K:V format. e.g.[{"Key": "ApproverName", "Value": "bob"},{"Key":"ApproverPhone","Value": "+86131****5678"}]</p>
         * @type {Array.<Cust> || null}
         */
        this.Cust = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PromotionCode) {
            let obj = new PromotionCode();
            obj.deserialize(params.PromotionCode)
            this.PromotionCode = obj;
        }
        this.PromotionId = 'PromotionId' in params ? params.PromotionId : null;
        this.PromotionName = 'PromotionName' in params ? params.PromotionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InviterUserId = 'InviterUserId' in params ? params.InviterUserId : null;

        if (params.Cust) {
            this.Cust = new Array();
            for (let z in params.Cust) {
                let obj = new Cust();
                obj.deserialize(params.Cust[z]);
                this.Cust.push(obj);
            }
        }

    }
}

module.exports = {
    TaskEvent: TaskEvent,
    DigitalOrder: DigitalOrder,
    Billing: Billing,
    Decision: Decision,
    Person: Person,
    Environment: Environment,
    Wallet: Wallet,
    ClaimRedPacketEvent: ClaimRedPacketEvent,
    PromotionCode: PromotionCode,
    ChargeBackEvent: ChargeBackEvent,
    ReportEventRequest: ReportEventRequest,
    Merchant: Merchant,
    Delivery: Delivery,
    Cust: Cust,
    AssessEnvironmentRiskRsp: AssessEnvironmentRiskRsp,
    AssessEnvironmentRiskResponse: AssessEnvironmentRiskResponse,
    PaymentMethod: PaymentMethod,
    LuckyDrawEvent: LuckyDrawEvent,
    AssessDeviceRiskPremiumProRequest: AssessDeviceRiskPremiumProRequest,
    Order: Order,
    AssessDeviceRiskProResponse: AssessDeviceRiskProResponse,
    User: User,
    Address: Address,
    Device: Device,
    CreateOrderEvent: CreateOrderEvent,
    Card: Card,
    Result: Result,
    ReportEventResponse: ReportEventResponse,
    RiskLabel: RiskLabel,
    CustEvent: CustEvent,
    IPLocation: IPLocation,
    DataScore: DataScore,
    BrowseEvent: BrowseEvent,
    AssessDeviceRiskPremiumProResponse: AssessDeviceRiskPremiumProResponse,
    AssessDeviceRiskProRequest: AssessDeviceRiskProRequest,
    CreditPoint: CreditPoint,
    Item: Item,
    Amount: Amount,
    SMSEvent: SMSEvent,
    AssessEnvironmentRiskRequest: AssessEnvironmentRiskRequest,
    AddPromotionEvent: AddPromotionEvent,
    Promotion: Promotion,
    ModifyAccountEvent: ModifyAccountEvent,
    Inviter: Inviter,
    LogoutEvent: LogoutEvent,
    Browser: Browser,
    PaymentResult: PaymentResult,
    TransactionEvent: TransactionEvent,
    ModifyPasswordEvent: ModifyPasswordEvent,
    AssessDeviceRiskRsp: AssessDeviceRiskRsp,
    Coupon: Coupon,
    RegisterEvent: RegisterEvent,
    App: App,
    LoginEvent: LoginEvent,
    EventDetail: EventDetail,
    IPNetwork: IPNetwork,
    SecurityVerificationEvent: SecurityVerificationEvent,
    AssessDeviceRiskPremiumRsp: AssessDeviceRiskPremiumRsp,
    RedeemEvent: RedeemEvent,
    InvitationEvent: InvitationEvent,
    WithdrawEvent: WithdrawEvent,
    ScanCodeEvent: ScanCodeEvent,

}
