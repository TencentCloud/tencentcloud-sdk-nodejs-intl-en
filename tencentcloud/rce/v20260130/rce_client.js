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
const TaskEvent = models.TaskEvent;
const DigitalOrder = models.DigitalOrder;
const Billing = models.Billing;
const Decision = models.Decision;
const Person = models.Person;
const Environment = models.Environment;
const Wallet = models.Wallet;
const Score = models.Score;
const ClaimRedPacketEvent = models.ClaimRedPacketEvent;
const PromotionCode = models.PromotionCode;
const ChargeBackEvent = models.ChargeBackEvent;
const ReportEventRequest = models.ReportEventRequest;
const WithdrawEvent = models.WithdrawEvent;
const Merchant = models.Merchant;
const Delivery = models.Delivery;
const Cust = models.Cust;
const AssessEnvironmentRiskRsp = models.AssessEnvironmentRiskRsp;
const AssessEnvironmentRiskResponse = models.AssessEnvironmentRiskResponse;
const PaymentMethod = models.PaymentMethod;
const LuckyDrawEvent = models.LuckyDrawEvent;
const AssessDeviceRiskPremiumProRequest = models.AssessDeviceRiskPremiumProRequest;
const Order = models.Order;
const AssessDeviceRiskProResponse = models.AssessDeviceRiskProResponse;
const User = models.User;
const Address = models.Address;
const Device = models.Device;
const CreateOrderEvent = models.CreateOrderEvent;
const Card = models.Card;
const Result = models.Result;
const ReportEventResponse = models.ReportEventResponse;
const RiskLabel = models.RiskLabel;
const CustEvent = models.CustEvent;
const IPLocation = models.IPLocation;
const DataScore = models.DataScore;
const BrowseEvent = models.BrowseEvent;
const AssessDeviceRiskPremiumProResponse = models.AssessDeviceRiskPremiumProResponse;
const AssessDeviceRiskProRequest = models.AssessDeviceRiskProRequest;
const CreditPoint = models.CreditPoint;
const Item = models.Item;
const Amount = models.Amount;
const SMSEvent = models.SMSEvent;
const AssessRiskResponse = models.AssessRiskResponse;
const AssessEnvironmentRiskRequest = models.AssessEnvironmentRiskRequest;
const AddPromotionEvent = models.AddPromotionEvent;
const Promotion = models.Promotion;
const ModifyAccountEvent = models.ModifyAccountEvent;
const Inviter = models.Inviter;
const LogoutEvent = models.LogoutEvent;
const Browser = models.Browser;
const PaymentResult = models.PaymentResult;
const TransactionEvent = models.TransactionEvent;
const AssessRiskRsp = models.AssessRiskRsp;
const ModifyPasswordEvent = models.ModifyPasswordEvent;
const AssessDeviceRiskRsp = models.AssessDeviceRiskRsp;
const Coupon = models.Coupon;
const RegisterEvent = models.RegisterEvent;
const App = models.App;
const LoginEvent = models.LoginEvent;
const EventDetail = models.EventDetail;
const IPNetwork = models.IPNetwork;
const SecurityVerificationEvent = models.SecurityVerificationEvent;
const AssessDeviceRiskPremiumRsp = models.AssessDeviceRiskPremiumRsp;
const RedeemEvent = models.RedeemEvent;
const InvitationEvent = models.InvitationEvent;
const AssessRiskRequest = models.AssessRiskRequest;
const ScanCodeEvent = models.ScanCodeEvent;


/**
 * rce client
 * @class
 */
class RceClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("rce.intl.tencentcloudapi.com", "2026-01-30", credential, region, profile);
    }
    
    /**
     * Device Risk Assessment - Basic
     * @param {AssessDeviceRiskProRequest} req
     * @param {function(string, AssessDeviceRiskProResponse):void} cb
     * @public
     */
    AssessDeviceRiskPro(req, cb) {
        let resp = new AssessDeviceRiskProResponse();
        this.request("AssessDeviceRiskPro", req, resp, cb);
    }

    /**
     * Device Risk assessment - Premium
     * @param {AssessDeviceRiskPremiumProRequest} req
     * @param {function(string, AssessDeviceRiskPremiumProResponse):void} cb
     * @public
     */
    AssessDeviceRiskPremiumPro(req, cb) {
        let resp = new AssessDeviceRiskPremiumProResponse();
        this.request("AssessDeviceRiskPremiumPro", req, resp, cb);
    }

    /**
     * Used to report events that do not require real-time decision-making in your business. Our engine will perform computations and apply machine learning to mine risk features from these events, which are then used to support real-time event risk assessment.
     * @param {ReportEventRequest} req
     * @param {function(string, ReportEventResponse):void} cb
     * @public
     */
    ReportEvent(req, cb) {
        let resp = new ReportEventResponse();
        this.request("ReportEvent", req, resp, cb);
    }

    /**
     * Environment Risk Assessment
     * @param {AssessEnvironmentRiskRequest} req
     * @param {function(string, AssessEnvironmentRiskResponse):void} cb
     * @public
     */
    AssessEnvironmentRisk(req, cb) {
        let resp = new AssessEnvironmentRiskResponse();
        this.request("AssessEnvironmentRisk", req, resp, cb);
    }

    /**
     * Used to obtain real-time risk information for events. It evaluates and returns risk decision results, risk scores, and risk tags based on device risk, environmental risk, account risk, behavioral risk, and historical reported event data for critical events in your business.
     * @param {AssessRiskRequest} req
     * @param {function(string, AssessRiskResponse):void} cb
     * @public
     */
    AssessRisk(req, cb) {
        let resp = new AssessRiskResponse();
        this.request("AssessRisk", req, resp, cb);
    }


}
module.exports = RceClient;
