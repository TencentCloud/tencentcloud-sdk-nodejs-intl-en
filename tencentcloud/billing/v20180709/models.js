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
 * CreateAllocationUnit request structure.
 * @class
 */
class CreateAllocationUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * New cost allocation unit parent node ID.
         * @type {number || null}
         */
        this.ParentId = null;

        /**
         * Specifies the name of a newly-added cost allocation unit.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Month, which is the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DeleteAllocationTag request structure.
 * @class
 */
class DeleteAllocationTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation tag key
         * @type {Array.<string> || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * DescribeCostSummaryByProduct request structure.
 * @class
 */
class DescribeCostSummaryByProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. The query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. The query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Data quantity per fetch. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which starts from 0 by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * UIN of the user querying the bill data
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Whether to return the record count. 0 for no, 1 for yes. Default is no.
         * @type {number || null}
         */
        this.NeedRecordNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;

    }
}

/**
 * DescribeCostExplorerSummary response structure.
 * @class
 */
class DescribeCostExplorerSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of data entries
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Header informationNote: This field may return null, indicating that no valid values can be obtained.
         * @type {AnalyseHeaderDetail || null}
         */
        this.Header = null;

        /**
         * Data detailsNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseDetail> || null}
         */
        this.Detail = null;

        /**
         * Data amountNote: This field may return null, indicating that no valid values can be obtained.
         * @type {AnalyseDetail || null}
         */
        this.TotalDetail = null;

        /**
         * Filter boxNote: This field may return null, indicating that no valid values can be obtained.
         * @type {AnalyseConditionDetail || null}
         */
        this.ConditionValue = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Header) {
            let obj = new AnalyseHeaderDetail();
            obj.deserialize(params.Header)
            this.Header = obj;
        }

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new AnalyseDetail();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

        if (params.TotalDetail) {
            let obj = new AnalyseDetail();
            obj.deserialize(params.TotalDetail)
            this.TotalDetail = obj;
        }

        if (params.ConditionValue) {
            let obj = new AnalyseConditionDetail();
            obj.deserialize(params.ConditionValue)
            this.ConditionValue = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Consumption details summarized by product
 * @class
 */
class ConsumptionBusinessSummaryDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name code
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Discounted total price
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cost trend
         * @type {ConsumptionSummaryTrend || null}
         */
        this.Trend = null;

        /**
         * Cash
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Bonus
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * VoucherNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Share revenueNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Region name (only shown in regional summary)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

        if (params.Trend) {
            let obj = new ConsumptionSummaryTrend();
            obj.deserialize(params.Trend)
            this.Trend = obj;
        }
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * ModifyAllocationRule request structure.
 * @class
 */
class ModifyAllocationRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The edited sharing rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Edited sharing rule name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Public sharing policy types, enumeration values are as follows: 1 - custom sharing proportion 2 - proportional allocation 3 - allocation by proportion.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Edited share rules expression.
         * @type {AllocationRuleExpression || null}
         */
        this.RuleDetail = null;

        /**
         * Edited sharing proportion expression.
         * @type {Array.<AllocationRationExpression> || null}
         */
        this.RatioDetail = null;

        /**
         * Month, which is the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.RuleDetail) {
            let obj = new AllocationRuleExpression();
            obj.deserialize(params.RuleDetail)
            this.RuleDetail = obj;
        }

        if (params.RatioDetail) {
            this.RatioDetail = new Array();
            for (let z in params.RatioDetail) {
                let obj = new AllocationRationExpression();
                obj.deserialize(params.RatioDetail[z]);
                this.RatioDetail.push(obj);
            }
        }
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DeleteAllocationRule request structure.
 * @class
 */
class DeleteAllocationRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The deleted sharing rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Month, which is the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * CreateAllocationRule response structure.
 * @class
 */
class CreateAllocationRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Add new sharing rule ID.
         * @type {number || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bill tag information.
 * @class
 */
class BillTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
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
 * Product filter criteria
 * @class
 */
class ConditionBusiness extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name code
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.BusinessCodeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;

    }
}

/**
 * Cost analysis transaction type complex type
 * @class
 */
class AnalyseActionTypeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transaction type codeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Transaction type nameNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionTypeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;

    }
}

/**
 * DescribeCostExplorerSummary request structure.
 * @class
 */
class DescribeCostExplorerSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start time of the period in the format of yyyy-mm-dd hh:ii:ss.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the period in the format of yyyy-mm-dd hh:ii:ss.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Bill type: 1-cost bill, 2-consumption bill
         * @type {string || null}
         */
        this.BillType = null;

        /**
         * Statistical period: day-day, month-month;
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * Classification dimension (data aggregation dimension). Query classification dimension. (Use classification dimension code input parameter.) Input parameter enumeration value:default = Total only
feeType = Fee typebillType = Bill typebusiness = Product
product = Sub-productregion=Region
zone = Availability zoneactionType = Transaction typepayMode = Billing modetags = Tagproject = ProjectpayerUin = Payer accountownerUin = User account
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * Fee type: cost-total cost, totalCost-original price cost
         * @type {string || null}
         */
        this.FeeType = null;

        /**
         * Quantity. The maximum value per page is 100.
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Starting page, where PageNo=1 indicates the first page, PageNo=2 indicates the second page, and so on.
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * Cost allocation tag value
         * @type {string || null}
         */
        this.TagKeyStr = null;

        /**
         * Whether the filter box is needed: 1- indicates it is needed, 0- indicates it is not needed. If it is not specified, it is not required by default.
         * @type {string || null}
         */
        this.NeedConditionValue = null;

        /**
         * Filter parameters
         * @type {AnalyseConditions || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.BillType = 'BillType' in params ? params.BillType : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.FeeType = 'FeeType' in params ? params.FeeType : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.TagKeyStr = 'TagKeyStr' in params ? params.TagKeyStr : null;
        this.NeedConditionValue = 'NeedConditionValue' in params ? params.NeedConditionValue : null;

        if (params.Conditions) {
            let obj = new AnalyseConditions();
            obj.deserialize(params.Conditions)
            this.Conditions = obj;
        }

    }
}

/**
 * DescribeCostSummaryByProduct response structure.
 * @class
 */
class DescribeCostSummaryByProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data readiness, 0 for not ready, 1 for ready
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Consumption details
         * @type {ConsumptionSummaryTotal || null}
         */
        this.Total = null;

        /**
         * Consumption details summarized by productNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumptionBusinessSummaryDataItem> || null}
         */
        this.Data = null;

        /**
         * Record count. The system returns null when NeedRecordNum is 0.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RecordNum = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total)
            this.Total = obj;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionBusinessSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAllocationTree response structure.
 * @class
 */
class DescribeAllocationTreeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation unit ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Specifies the name of a cost allocation unit.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Unique identifier of a cost allocation unit
         * @type {string || null}
         */
        this.TreeNodeUniqKey = null;

        /**
         * Specifies a subtree.
         * @type {Array.<AllocationTree> || null}
         */
        this.Children = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TreeNodeUniqKey = 'TreeNodeUniqKey' in params ? params.TreeNodeUniqKey : null;

        if (params.Children) {
            this.Children = new Array();
            for (let z in params.Children) {
                let obj = new AllocationTree();
                obj.deserialize(params.Children[z]);
                this.Children.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAllocationTag response structure.
 * @class
 */
class DeleteAllocationTagResponse extends  AbstractModel {
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
 * Cost allocation tree.
 * @class
 */
class AllocationTree extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a cost allocation unit.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Cost allocation unit name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Unique identifier of a cost allocation unit
         * @type {string || null}
         */
        this.TreeNodeUniqKey = null;

        /**
         * Subtree.
         * @type {Array.<AllocationTree> || null}
         */
        this.Children = null;

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
        this.TreeNodeUniqKey = 'TreeNodeUniqKey' in params ? params.TreeNodeUniqKey : null;

        if (params.Children) {
            this.Children = new Array();
            for (let z in params.Children) {
                let obj = new AllocationTree();
                obj.deserialize(params.Children[z]);
                this.Children.push(obj);
            }
        }

    }
}

/**
 * DescribeBillDetailForOrganization response structure.
 * @class
 */
class DescribeBillDetailForOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details list.
         * @type {Array.<DistributionBillDetail> || null}
         */
        this.DetailSet = null;

        /**
         * Total number of records, which is cached every 24 hours and may be less than the actual total number of records.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Context information of the current request, which can be used in the parameters of the next request to speed up the query.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Context = null;

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

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new DistributionBillDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bill details configuration descriptions
 * @class
 */
class BillDetailComponentConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Configuration description name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Configuration description value
Note: This field may return null, indicating that no valid values can be obtained.
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
 * DescribeCostSummaryByResource response structure.
 * @class
 */
class DescribeCostSummaryByResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data readiness, 0 for not ready, 1 for ready
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Consumption detailsNote: This field may return null, indicating that no valid values can be obtained.
         * @type {ConsumptionSummaryTotal || null}
         */
        this.Total = null;

        /**
         * Filter criteria
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ConsumptionResourceSummaryConditionValue || null}
         */
        this.ConditionValue = null;

        /**
         * Record countNote: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RecordNum = null;

        /**
         * Resource consumption detailsNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ConsumptionResourceSummaryDataItem> || null}
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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total)
            this.Total = obj;
        }

        if (params.ConditionValue) {
            let obj = new ConsumptionResourceSummaryConditionValue();
            obj.deserialize(params.ConditionValue)
            this.ConditionValue = obj;
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionResourceSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillSummaryByRegion request structure.
 * @class
 */
class DescribeBillSummaryByRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Queries bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * This API is used to view UIN exception adjustment details.
 * @class
 */
class AdjustInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Payer UIN, namely the account ID of the payer. The account ID is the user's unique account identifier on Tencent Cloud.
Note: This field may return null, indicating that no valid values can be obtained.
Example value: 909619400.
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Bill month. Format: yyyy-MM.
Note: This field may return null, indicating that no valid value can be obtained.
Example value: 2024-10.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Adjustment type.
Adjustment: manualAdjustment.
Supplementary settlement: supplementarySettlement.
Re-settlement: reSettlement.
Note: This field may return null, indicating that no valid value can be obtained.
Example value: manualAdjustment.
         * @type {string || null}
         */
        this.AdjustType = null;

        /**
         * Adjustment order number.
Note: This field may return null, indicating that no valid value can be obtained.
Example value: 2220726096135.
         * @type {string || null}
         */
        this.AdjustNum = null;

        /**
         * Completion time of exception adjustment. Format: yyyy-MM-dd HH:mm:ss.
Note: This field may return null, indicating that no valid value can be obtained.
Example value: 2022-12-02 12:39:04.
         * @type {string || null}
         */
        this.AdjustCompletionTime = null;

        /**
         * Adjustment amount.
Note: This field may return null, indicating that no valid value can be obtained.
Example value: 333.00000000.
         * @type {number || null}
         */
        this.AdjustAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.AdjustType = 'AdjustType' in params ? params.AdjustType : null;
        this.AdjustNum = 'AdjustNum' in params ? params.AdjustNum : null;
        this.AdjustCompletionTime = 'AdjustCompletionTime' in params ? params.AdjustCompletionTime : null;
        this.AdjustAmount = 'AdjustAmount' in params ? params.AdjustAmount : null;

    }
}

/**
 * CreateAllocationRule request structure.
 * @class
 */
class CreateAllocationRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of sharing rules.
         * @type {AllocationRulesSummary || null}
         */
        this.RuleList = null;

        /**
         * Month, the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleList) {
            let obj = new AllocationRulesSummary();
            obj.deserialize(params.RuleList)
            this.RuleList = obj;
        }
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * Consumption details summarized by region
 * @class
 */
class ConsumptionRegionSummaryDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Discounted total price
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Trend
         * @type {ConsumptionSummaryTrend || null}
         */
        this.Trend = null;

        /**
         * Product consumption details
         * @type {Array.<ConsumptionBusinessSummaryDataItem> || null}
         */
        this.Business = null;

        /**
         * Cash
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * VoucherNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Bonus
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Share revenueNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

        if (params.Trend) {
            let obj = new ConsumptionSummaryTrend();
            obj.deserialize(params.Trend)
            this.Trend = obj;
        }

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new ConsumptionBusinessSummaryDataItem();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

    }
}

/**
 * Detailed summary of products
 * @class
 */
class BusinessSummaryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product code
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Original cost in USD. This parameter became valid when Bill 3.0 took effect in May 2021. Before that, `-` was returned for this parameter. If a customer has applied for a contract price different from the prices listed on the official website, `-` will also be returned for this parameter. 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

    }
}

/**
 * DescribeBillSummary request structure.
 * @class
 */
class DescribeBillSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bill month in the format of "yyyy-mm"
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Bill dimension. Valid values: `business`, `project`, `region`, `payMode`, and `tag`
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Tag key, which is used when `GroupType` is `tag`.
         * @type {Array.<string> || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Month = 'Month' in params ? params.Month : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * DescribeBillResourceSummary response structure.
 * @class
 */
class DescribeBillResourceSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource summary list
         * @type {Array.<BillResourceSummary> || null}
         */
        this.ResourceSummarySet = null;

        /**
         * Total number of resource summary lists, which will not be returned when `NeedRecordNum` is `0`. This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.ResourceSummarySet) {
            this.ResourceSummarySet = new Array();
            for (let z in params.ResourceSummarySet) {
                let obj = new BillResourceSummary();
                obj.deserialize(params.ResourceSummarySet[z]);
                this.ResourceSummarySet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGatherRuleDetail request structure.
 * @class
 */
class DescribeGatherRuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the ID of the queried collection rule.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Month, the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * Objects of reseller bill details
 * @class
 */
class DistributionBillDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name: The subcategory of a Tencent Cloud product purchased by the user, such as CVM - Standard S1.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode: The billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project Name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region: The region of a resource, e.g. South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone: availability zone of a resource, e.g. Guangzhou Zone 3.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID: The object ID of a billed resource, such as a CVM instance ID. This object ID may vary due to various forms and contents of resources in different products.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance name: The resource name set by the user in the console. If it is not set, it will be empty by default.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, pay-as-you-go deduction, etc.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID: The ID of a monthly subscription order.
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Transaction ID: The ID of a settlement bill.
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * Deduction time: The settlement cost deduction time.
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Usage start time: The time at which product or service usage starts.
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Usage end time: The time at which product or service usage ends.
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * List of components.
         * @type {Array.<BillDetailComponent> || null}
         */
        this.ComponentSet = null;

        /**
         * Owner account ID: The account ID of the actual resource user.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator account ID: The account or role ID of the operator who purchases or activates a resource.
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Tag information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Product code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Transaction type code.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Region ID.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Price attribute: A set of attributes which will determine the price of a component, apart from unit price and usage duration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PriceInfo = null;

        /**
         * Associated transaction document ID: The ID of the document associated with a transaction, such as a write-off order, the original order showing a deduction error during first settlement, a restructured order, or the original purchase order corresponding to a refund order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BillDetailAssociatedOrder || null}
         */
        this.AssociatedOrder = null;

        /**
         * Calculation formula: The detailed calculation formula for a specific transaction type, such as refund or configuration change.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Formula = null;

        /**
         * Billing rules: Official website links for detailed billing rules of each product.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FormulaUrl = null;

        /**
         * Billing monthNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * Billing dayNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;

        if (params.ComponentSet) {
            this.ComponentSet = new Array();
            for (let z in params.ComponentSet) {
                let obj = new BillDetailComponent();
                obj.deserialize(params.ComponentSet[z]);
                this.ComponentSet.push(obj);
            }
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PriceInfo = 'PriceInfo' in params ? params.PriceInfo : null;

        if (params.AssociatedOrder) {
            let obj = new BillDetailAssociatedOrder();
            obj.deserialize(params.AssociatedOrder)
            this.AssociatedOrder = obj;
        }
        this.Formula = 'Formula' in params ? params.Formula : null;
        this.FormulaUrl = 'FormulaUrl' in params ? params.FormulaUrl : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.BillDay = 'BillDay' in params ? params.BillDay : null;

    }
}

/**
 * DescribeDosageCosDetailByDate request structure.
 * @class
 */
class DescribeDosageCosDetailByDateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The start date of the usage query, such as `2020-09-01`.
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * The end date of the usage query (end date must be in the same month as the start date), such as `2020-09-30`.
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * Bucket name. You can use `Get Service` to query the list of all buckets under a requester account. For details, see [GET Service (List Buckets)](https://www.tencentcloud.com/document/product/436/8291).
         * @type {string || null}
         */
        this.BucketName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;

    }
}

/**
 * DescribeBillAdjustInfo response structure.
 * @class
 */
class DescribeBillAdjustInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total amount of data.
Example value: 10.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Detailed data.
Example value: [].
         * @type {Array.<AdjustInfoDetail> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AdjustInfoDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAllocationRuleDetail request structure.
 * @class
 */
class DescribeAllocationRuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The queried sharing rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Month, which is the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DescribeAllocationUnitDetail response structure.
 * @class
 */
class DescribeAllocationUnitDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a cost allocation unit.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Associated UIN of the cost allocation unit.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Specifies the name of a cost allocation unit.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Cost allocation unit parent node ID.
         * @type {number || null}
         */
        this.ParentId = null;

        /**
         * Source organization name.
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * Source organization ID.
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * Specifies remark description.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Cost allocation unit identifier.
         * @type {string || null}
         */
        this.TreeNodeUniqKey = null;

        /**
         * If a cost allocation unit is set with an collection rule, return the collection rule ID. if no collection rule is set, do not return.
         * @type {number || null}
         */
        this.RuleId = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.SourceName = 'SourceName' in params ? params.SourceName : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TreeNodeUniqKey = 'TreeNodeUniqKey' in params ? params.TreeNodeUniqKey : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillSummaryByProduct request structure.
 * @class
 */
class DescribeBillSummaryByProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Queries bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * A bill type, which corresponds to a subtotal type of L0 bills.
This parameter has become valid since v3.0 bills took effect in May 2021.
Valid values:
`consume`: consumption
`refund`: refund
`adjustment`: bill adjustment
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.PayType = 'PayType' in params ? params.PayType : null;

    }
}

/**
 * Specifies the ID and name of a cost allocation unit.
 * @class
 */
class AllocationUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation unit ID.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Specifies the name of a cost allocation rule.
         * @type {string || null}
         */
        this.TreeNodeUniqKeyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.TreeNodeUniqKeyName = 'TreeNodeUniqKeyName' in params ? params.TreeNodeUniqKeyName : null;

    }
}

/**
 * Expression for sharing proportion.
 * @class
 */
class AllocationRationExpression extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation unit ID that the sharing rule belongs to.
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Sharing proportion occupied by allocation unit, pass 0 for allocation by proportion.
         * @type {number || null}
         */
        this.Ratio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;

    }
}

/**
 * DescribeVoucherUsageDetails response structure.
 * @class
 */
class DescribeVoucherUsageDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of vouchers.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The total amount used. The value of this parameter is the total amount used (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.TotalUsedAmount = null;

        /**
         * The usage details.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<UsageRecords> || null}
         */
        this.UsageRecords = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalUsedAmount = 'TotalUsedAmount' in params ? params.TotalUsedAmount : null;

        if (params.UsageRecords) {
            this.UsageRecords = new Array();
            for (let z in params.UsageRecords) {
                let obj = new UsageRecords();
                obj.deserialize(params.UsageRecords[z]);
                this.UsageRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Consumption summary details
 * @class
 */
class ConsumptionSummaryTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Discounted total price
         * @type {string || null}
         */
        this.RealTotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

    }
}

/**
 * Summary objects for a reseller bill
 * @class
 */
class BillDistributionResourceSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name: The subcategory of a Tencent Cloud product purchased by the user, such as CVM - Standard S1.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode: The billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project Name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region: The region of a resource, e.g. South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone: The availability zone of a resource, e.g. Guangzhou Zone 3.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID: The object ID of a billed resource, such as a CVM instance ID. This object ID may vary due to various forms and contents of resources in different products.	
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance name: The resource name set by the user in the console. If it is not set, it will be empty by default.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, pay-as-you-go deduction, etc.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID: The ID of a monthly subscription order.
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Deduction time: The settlement cost deduction time.
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Usage start time: The time at which product or service usage starts.
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Usage end time: The time at which product or service usage ends.
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Configuration description: The billable item names and usage of a resource, which are displayed on the resource bill only.
         * @type {string || null}
         */
        this.ConfigDesc = null;

        /**
         * Extended Field 1: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField1 = null;

        /**
         * Extended field 2: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField2 = null;

        /**
         * Original cost. The original cost of a component = Component price x Usage x Usage duration. If a customer has applied for a fixed preferential price or contract price or if a customer is in a refund scenario, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Discount multiplier: The discount multiplier that applies to the component. If a customer has applied for a fixed preferential price or contract price or if a customer is in a refund scenario, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * Offer type.
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * Total amount after discount.
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Voucher payment: The voucher deduction amount.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Cash credit payment: The amount paid through the user's cash account.
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit payment: The amount paid with the user's free credit.
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Commission credit payment: The amount paid with the user's commission credit.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Extended field 3: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField3 = null;

        /**
         * Extended field 4: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField4 = null;

        /**
         * Extended field 5: The extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField5 = null;

        /**
         * Tag information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Owner account ID: The account ID of the actual resource user.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator account ID: The account or role ID of the operator who purchases or activates a resource.
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Product code.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct code.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Region ID.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Instance type: The instance type of a product or service purchased, which can be resource package, RI, SP, or spot instance. Other instance types are not displayed by default.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * RI deduction (cost): The amount deducted from the original cost by RI.	
         * @type {string || null}
         */
        this.OriginalCostWithRI = null;

        /**
         * Savings plan deduction (disused).
         * @type {string || null}
         */
        this.SPDeduction = null;

        /**
         * SP deduction (cost): The amount of cost deducted by a savings plan based on the component's original cost. SP deduction (cost) = Cost deduction by SP / SP deduction rate	
         * @type {string || null}
         */
        this.OriginalCostWithSP = null;

        /**
         * Billing monthNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillMonth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;
        this.ConfigDesc = 'ConfigDesc' in params ? params.ConfigDesc : null;
        this.ExtendField1 = 'ExtendField1' in params ? params.ExtendField1 : null;
        this.ExtendField2 = 'ExtendField2' in params ? params.ExtendField2 : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.ExtendField3 = 'ExtendField3' in params ? params.ExtendField3 : null;
        this.ExtendField4 = 'ExtendField4' in params ? params.ExtendField4 : null;
        this.ExtendField5 = 'ExtendField5' in params ? params.ExtendField5 : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.OriginalCostWithRI = 'OriginalCostWithRI' in params ? params.OriginalCostWithRI : null;
        this.SPDeduction = 'SPDeduction' in params ? params.SPDeduction : null;
        this.OriginalCostWithSP = 'OriginalCostWithSP' in params ? params.OriginalCostWithSP : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;

    }
}

/**
 * DescribeCostDetail response structure.
 * @class
 */
class DescribeCostDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Consumption details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<CostDetail> || null}
         */
        this.DetailSet = null;

        /**
         * Record countNote: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new CostDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Voucher information.
 * @class
 */
class VoucherInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * The owner of the voucher.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * The status of the voucher: `unUsed`, `used`, `delivered`, `cancel`, `overdue`
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The value of the voucher. The value of this parameter is the voucher value (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.NominalValue = null;

        /**
         * The balance left. The value of this parameter is the balance left (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * The voucher ID.
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * `postPay`: pay-as-you-go; `prePay`: prepaid; `riPay`: reserved instance; empty or `*`: all.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * If `PayMode` is `postPay`, this parameter may be `spotpay` (spot instance) or `settle account` (regular pay-as-you-go). If `PayMode` is `prePay`, this parameter may be `purchase`, `renew`, or `modify` (downgrade/upgrade). If `PayMode` is `riPay`, this parameter may be `oneOffFee` (prepayment of reserved instance) or `hourlyFee` (hourly billing of reserved instance). `*` means to query vouchers that support all billing scenarios.
         * @type {string || null}
         */
        this.PayScene = null;

        /**
         * The start time of the validity period.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the validity period.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The products that are applicable.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {ApplicableProducts || null}
         */
        this.ApplicableProducts = null;

        /**
         * The products that are not applicable.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<ExcludedProducts> || null}
         */
        this.ExcludedProducts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NominalValue = 'NominalValue' in params ? params.NominalValue : null;
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayScene = 'PayScene' in params ? params.PayScene : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.ApplicableProducts) {
            let obj = new ApplicableProducts();
            obj.deserialize(params.ApplicableProducts)
            this.ApplicableProducts = obj;
        }

        if (params.ExcludedProducts) {
            this.ExcludedProducts = new Array();
            for (let z in params.ExcludedProducts) {
                let obj = new ExcludedProducts();
                obj.deserialize(params.ExcludedProducts[z]);
                this.ExcludedProducts.push(obj);
            }
        }

    }
}

/**
 * DescribeCostSummaryByProject response structure.
 * @class
 */
class DescribeCostSummaryByProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data readiness, 0 for not ready, 1 for ready
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Consumption details
         * @type {ConsumptionSummaryTotal || null}
         */
        this.Total = null;

        /**
         * Consumption details summarized by business
         * @type {Array.<ConsumptionProjectSummaryDataItem> || null}
         */
        this.Data = null;

        /**
         * Record count. The system returns null when NeedRecordNum is 0.
         * @type {number || null}
         */
        this.RecordNum = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total)
            this.Total = obj;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionProjectSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cost analysis project return complex type
 * @class
 */
class AnalyseProjectDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Default projectNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * Detailed summary of purchases by project
 * @class
 */
class ProjectSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Project name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Billing month, e.g. `2019-08`
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeBillSummaryByTag response structure.
 * @class
 */
class DescribeBillSummaryByTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Details about cost distribution over different tags
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<TagSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

        /**
         * Total cost
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {SummaryTotal || null}
         */
        this.SummaryTotal = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new TagSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }

        if (params.SummaryTotal) {
            let obj = new SummaryTotal();
            obj.deserialize(params.SummaryTotal)
            this.SummaryTotal = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGatherRule request structure.
 * @class
 */
class ModifyGatherRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Edit collection rule ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Rule detail of the edited collection rule.
         * @type {AllocationRuleExpression || null}
         */
        this.RuleDetail = null;

        /**
         * Month, which is the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.RuleDetail) {
            let obj = new AllocationRuleExpression();
            obj.deserialize(params.RuleDetail)
            this.RuleDetail = obj;
        }
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DescribeBillSummaryByPayMode response structure.
 * @class
 */
class DescribeBillSummaryByPayModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Detailed cost distribution for all billing modes
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<PayModeSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new PayModeSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillSummaryByTag request structure.
 * @class
 */
class DescribeBillSummaryByTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Cost allocation tag key, which can be customized.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Payer UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Resource tag value
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * Cost analysis data complex type
 * @class
 */
class AnalyseDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Time
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Amount
         * @type {string || null}
         */
        this.Total = null;

        /**
         * Date detailed amountNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseTimeDetail> || null}
         */
        this.TimeDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.TimeDetail) {
            this.TimeDetail = new Array();
            for (let z in params.TimeDetail) {
                let obj = new AnalyseTimeDetail();
                obj.deserialize(params.TimeDetail[z]);
                this.TimeDetail.push(obj);
            }
        }

    }
}

/**
 * DeleteGatherRule request structure.
 * @class
 */
class DeleteGatherRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The deleted collection rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Month, which is the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DescribeAllocationRuleSummary response structure.
 * @class
 */
class DescribeAllocationRuleSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sharing rule expression.
         * @type {Array.<AllocationRuleOverview> || null}
         */
        this.RuleList = null;

        /**
         * Total number of rules.
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new AllocationRuleOverview();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cost analysis amount return data model
 * @class
 */
class AnalyseAmountDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Fee typeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Whether to displayNote: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Display = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Display = 'Display' in params ? params.Display : null;

    }
}

/**
 * ModifyGatherRule response structure.
 * @class
 */
class ModifyGatherRuleResponse extends  AbstractModel {
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
 * CreateGatherRule request structure.
 * @class
 */
class CreateGatherRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation unit ID that the rule belongs to.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Collection rule details.
         * @type {GatherRuleSummary || null}
         */
        this.RuleList = null;

        /**
         * Month, which is the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.RuleList) {
            let obj = new GatherRuleSummary();
            obj.deserialize(params.RuleList)
            this.RuleList = obj;
        }
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DescribeBillResourceSummaryForOrganization request structure.
 * @class
 */
class DescribeBillResourceSummaryForOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset. If `Offset` is `0`, it indicates the first page. When `Limit` is `100`, if `Offset` is `100`, it indicates the second page; if `Offset` is `200`, it indicates the third page, and so on.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of entries returned at a time. The maximum value is `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Bill month in the format of "yyyy-mm". This value must be no earlier than the month when Bill 2.0 is activated.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Cycle type, which can be `byUsedTime` (by billing cycle) or `byPayTime` (by deduction time). This value must be the same as the billing period type in Billing Center for that particular month. You can check your billing cycle at the top of the [Bill Overview](https://console.cloud.tencent.com/expense/bill/overview) page.
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * Indicates whether the total number of records is required, used for pagination.
Valid values: `1` (required), `0` (not required).
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Transaction type. This parameter needs to be input using the `ActionTypeName` value. Valid values:
Monthly subscription purchase
Monthly subscription renewal
Monthly subscription upgrade/downgrade
Monthly subscription refund 
Pay-as-you-go deduction 
Offline project deduction 
Offline product deduction 
Adjustment deduction 
Adjustment compensation 
Hourly pay-as-you-go 
Daily pay-as-you-go 
Monthly pay-as-you-go 
Hourly spot instance 
Offline project adjustment compensation 
Offline product adjustment compensation 
Offer deduction 
Offer compensation 
Pay-as-you-go resource migration in 
Pay-as-you-go resource migration out 
Monthly subscription resource migration in 
Monthly subscription resource migration out 
Prepaid 
Hourly 
RI refund 
Pay-as-you-go reversal 
Monthly subscription to pay-as-you-go 
Minimum spend deduction 
Hourly savings plan fee
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * ID of the instance to be queried.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Billing mode. Valid values: `prePay`, `postPay`.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Product code
Note: To query the product codes (`BusinessCode`) used in the current month, call <a href="https://intl.cloud.tencent.com/document/product/555/35761?from_cn_redirect=1">DescribeBillSummaryByProduct</a>.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Cost allocation tag key, which can be customized. This parameter can be used for querying bills after January 2021.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Resource tag value. If it is left empty, there are no records with tag values set under this tag key.
This parameter can be used for querying bills after January 2021.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeCostSummaryByRegion request structure.
 * @class
 */
class DescribeCostSummaryByRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. The query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. The query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Data quantity per fetch. The maximum value is `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which starts from 0 by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * UIN of the user querying the bill data
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Whether to return the record count. 0 for no, 1 for yes. Default is no.
         * @type {number || null}
         */
        this.NeedRecordNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;

    }
}

/**
 * Consumption cost trend
 * @class
 */
class ConsumptionSummaryTrend extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trend type, upward for rising, downward for falling, none for no change
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Trend value. The value is null when Type is none.Note: This field may return null, indicating that no valid values can be obtained.
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeBillDownloadUrl request structure.
 * @class
 */
class DescribeBillDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bill type. Valid values:
`billOverview` (L0: PDF bills)
`billSummary` (L1: Bill summary)	
`billResource` (L2: Bill by instance)	
`billDetail` (L3: Bill details)	
`billPack` (Bill packs)
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * Bill month.
The earliest month that can be queried is January 2021.
L0 bills and bill packs cannot be downloaded for the current month. Please download the current month's bills after it is generated at 19:00 on the 1st day of the next month.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * List of account IDs for downloading the bill. By default, it queries the bill for the current account. If you are an admin account and need to download bills for member accounts with their own payment, input the member account's UIN for this parameter.
         * @type {Array.<string> || null}
         */
        this.ChildUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.ChildUin = 'ChildUin' in params ? params.ChildUin : null;

    }
}

/**
 * DescribeBillSummaryByPayMode request structure.
 * @class
 */
class DescribeBillSummaryByPayModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Query bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * DeleteGatherRule response structure.
 * @class
 */
class DeleteGatherRuleResponse extends  AbstractModel {
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
 * The products that are applicable.
 * @class
 */
class ApplicableProducts extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `all products` or names of the applicable products (string). Multiple names are separated by commas.
         * @type {string || null}
         */
        this.GoodsName = null;

        /**
         * Valid values: `postPay`: pay-as-you-go; `prePay`: prepaid; `riPay`: reserved instance; empty or `*`: all. If `GoodsName` contains multiple product names and `PayMode` is `*`, it indicates that the voucher can be used in all billing modes for each of the products.
         * @type {string || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsName = 'GoodsName' in params ? params.GoodsName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * Payment mode filter criteria
 * @class
 */
class ConditionPayMode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Payment mode
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Payment mode name
         * @type {string || null}
         */
        this.PayModeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;

    }
}

/**
 * DescribeCostSummaryByProject request structure.
 * @class
 */
class DescribeCostSummaryByProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. The query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. The query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Data quantity per fetch. The maximum value is `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which starts from 0 by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * UIN of the user querying the bill data
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Whether to return the record count. 0 for no, 1 for yes. Default is no.
         * @type {number || null}
         */
        this.NeedRecordNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;

    }
}

/**
 * Information of the document associated with bill details
 * @class
 */
class BillDetailAssociatedOrder extends  AbstractModel {
    constructor(){
        super();

        /**
         * Purchase order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrepayPurchase = null;

        /**
         * Renewal order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrepayRenew = null;

        /**
         * Upgrade order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PrepayModifyUp = null;

        /**
         * Write-off order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReverseOrder = null;

        /**
         * The order after discount.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NewOrder = null;

        /**
         * The original order before discount.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Original = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrepayPurchase = 'PrepayPurchase' in params ? params.PrepayPurchase : null;
        this.PrepayRenew = 'PrepayRenew' in params ? params.PrepayRenew : null;
        this.PrepayModifyUp = 'PrepayModifyUp' in params ? params.PrepayModifyUp : null;
        this.ReverseOrder = 'ReverseOrder' in params ? params.ReverseOrder : null;
        this.NewOrder = 'NewOrder' in params ? params.NewOrder : null;
        this.Original = 'Original' in params ? params.Original : null;

    }
}

/**
 * Bill details
 * @class
 */
class BillDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name: The subcategory of a Tencent Cloud product purchased by the user, such as CVM Standard S1.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region: The region to which a resource belongs, such as South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone: availability zone of a resource, e.g. Guangzhou Zone 3
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID: The object ID of a billed resource, such as a CVM instance ID. This object ID may vary due to various forms and contents of resources in different products.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance name: The resource name set by the user in the console. If it is not set, it will be empty by default.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, or pay-as-you-go deduction.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID: The order number for a monthly subscription purchase
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Transaction ID: The bill number for a deducted payment
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * Transaction time: The time at which a payment was deducted
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Usage start time: The time at which product or service usage starts
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Usage end time: The time at which product or service usage ends
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Component list
         * @type {Array.<BillDetailComponent> || null}
         */
        this.ComponentSet = null;

        /**
         * Payer account ID: The account ID of the payer, which is the unique identifier of a Tencent Cloud user.
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Owner account ID: The account ID of the actual resource user
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator account ID: The account or role ID of the operator who purchases or activates a resource
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Tag information. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Product code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Transaction type code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Region ID. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Price attribute: A set of attributes which will determine the price of a component, apart from unit price and usage duration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.PriceInfo = null;

        /**
         * Associated transaction document ID: The ID of the document associated with a transaction, such as a write-off order, the original order showing a deduction error during first settlement, a restructured order, or the original purchase order corresponding to a refund order.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {BillDetailAssociatedOrder || null}
         */
        this.AssociatedOrder = null;

        /**
         * Calculation formula: The detailed calculation formula for a specific transaction type, such as refund or configuration change.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Formula = null;

        /**
         * Billing rules: Official website links for detailed billing rules of each product.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FormulaUrl = null;

        /**
         * Billing dayNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillDay = null;

        /**
         * Billing monthNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * Billing record IDNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Domestic and international codesNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionType = null;

        /**
         * Domestic and International: The region type to which the resource belongs (domestic, international)Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionTypeName = null;

        /**
         * Note attributes (instance configuration): Other note information, such as the reserved instance, the reserved instance type, the transaction type, and the region information on both ends of the CCN product.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ReserveDetail = null;

        /**
         * the discount object for the current consumption item, such as official website discount, user discount, and event discount.
         * @type {string || null}
         */
        this.DiscountObject = null;

        /**
         * the discount type for the current consumption item, such as discount and contract price.

         * @type {string || null}
         */
        this.DiscountType = null;

        /**
         * supplementary description of the discount type, such as 0.2.
         * @type {string || null}
         */
        this.DiscountContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;

        if (params.ComponentSet) {
            this.ComponentSet = new Array();
            for (let z in params.ComponentSet) {
                let obj = new BillDetailComponent();
                obj.deserialize(params.ComponentSet[z]);
                this.ComponentSet.push(obj);
            }
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PriceInfo = 'PriceInfo' in params ? params.PriceInfo : null;

        if (params.AssociatedOrder) {
            let obj = new BillDetailAssociatedOrder();
            obj.deserialize(params.AssociatedOrder)
            this.AssociatedOrder = obj;
        }
        this.Formula = 'Formula' in params ? params.Formula : null;
        this.FormulaUrl = 'FormulaUrl' in params ? params.FormulaUrl : null;
        this.BillDay = 'BillDay' in params ? params.BillDay : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RegionType = 'RegionType' in params ? params.RegionType : null;
        this.RegionTypeName = 'RegionTypeName' in params ? params.RegionTypeName : null;
        this.ReserveDetail = 'ReserveDetail' in params ? params.ReserveDetail : null;
        this.DiscountObject = 'DiscountObject' in params ? params.DiscountObject : null;
        this.DiscountType = 'DiscountType' in params ? params.DiscountType : null;
        this.DiscountContent = 'DiscountContent' in params ? params.DiscountContent : null;

    }
}

/**
 * DescribeBillDetail response structure.
 * @class
 */
class DescribeBillDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Details list
         * @type {Array.<BillDetail> || null}
         */
        this.DetailSet = null;

        /**
         * 
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Context = null;

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

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new BillDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Order data object
 * @class
 */
class Deal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID.
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * The status of the order. 1: unpaid; 2: paid; 3: shipping; 4: shipped; 5: shipment failed; 6: refunded; 7: closed case; 8: order expired; 9: order invalidated; 10: product invalidated; 11: third-party payment refused; 12: payment in process
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Payer
         * @type {string || null}
         */
        this.Payer = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Creator
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * Actual payment amount (pent)
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * Voucher offset amount (pent)
         * @type {number || null}
         */
        this.VoucherDecline = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Product category ID
         * @type {number || null}
         */
        this.GoodsCategoryId = null;

        /**
         * Product details
         * @type {Array.<ProductInfo> || null}
         */
        this.ProductInfo = null;

        /**
         * Duration
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Time unit
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * Currency unit
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * Discount rate
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * Unit price (cents)
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Original price (cents)
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * Product code
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Subproduct code
         * @type {string || null}
         */
        this.SubProductCode = null;

        /**
         * Large order number.
         * @type {string || null}
         */
        this.BigDealId = null;

        /**
         * Refund formula.
         * @type {string || null}
         */
        this.Formula = null;

        /**
         * Refund involves order information.
         * @type {string || null}
         */
        this.RefReturnDeals = null;

        /**
         * Billing mode: `prePay` (prepaid), `postPay` (pay-as-you-go), `riPay` (reserved instance)
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Transaction type

Modify network mode adjust bandwidth mode.
Adjust bandwidth size.
`Refund`: refund.
downgrade.
upgrade configuration.
renew.
purchase.
preMoveOut monthly subscription resource migration out.
preMoveIn specifies the monthly subscription resources to migrate.
preToPost specifies the prepaid to postpaid conversion.
postMoveOut specifies the pay-as-you-go resources to be migrated out.
postMoveIn specifies the pay-as-you-go resources for inbound migration.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Product code chinese name.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * Sub-Product code chinese name.
         * @type {string || null}
         */
        this.SubProductName = null;

        /**
         * The resource ID corresponding to the order. If the query parameter `Limit` exceeds 200, null will be returned.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Payer = 'Payer' in params ? params.Payer : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherDecline = 'VoucherDecline' in params ? params.VoucherDecline : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GoodsCategoryId = 'GoodsCategoryId' in params ? params.GoodsCategoryId : null;

        if (params.ProductInfo) {
            this.ProductInfo = new Array();
            for (let z in params.ProductInfo) {
                let obj = new ProductInfo();
                obj.deserialize(params.ProductInfo[z]);
                this.ProductInfo.push(obj);
            }
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.SubProductCode = 'SubProductCode' in params ? params.SubProductCode : null;
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;
        this.Formula = 'Formula' in params ? params.Formula : null;
        this.RefReturnDeals = 'RefReturnDeals' in params ? params.RefReturnDeals : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.SubProductName = 'SubProductName' in params ? params.SubProductName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * DescribeDealsByCond response structure.
 * @class
 */
class DescribeDealsByCondResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order list
         * @type {Array.<Deal> || null}
         */
        this.Deals = null;

        /**
         * Total number of orders
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new Deal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillSummaryByProject request structure.
 * @class
 */
class DescribeBillSummaryByProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as `EndTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as `BeginTime`. Query period must start and end on the same month and the query result returned will be of the entire month. For example, if both `BeginTime` and `EndTime` are `2018-09`, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Queries bill data user's UIN
         * @type {string || null}
         */
        this.PayerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * DescribeBillSummaryByProject response structure.
 * @class
 */
class DescribeBillSummaryByProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Detailed cost distribution for all projects
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<ProjectSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new ProjectSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillAdjustInfo request structure.
 * @class
 */
class DescribeBillAdjustInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Format: yyyy-MM.
Billing month. Either Month or the combination of TimeFrom and TimeTo needs to be passed. If the TimeFrom and TimeTo are passed, the Month field is invalid.
Example: 2024-10.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Format: yyyy-MM-dd.
Start date. Either Month or the combination of TimeFrom and TimeTo needs to be passed. If TimeFrom and TimeTo are passed, the Month field is invalid. TimeFrom and TimeTo should represent the same month and be passed in together. Cross-month queries are not supported. The result will include the full month's data.
Example: 2024-10-01.
         * @type {string || null}
         */
        this.TimeFrom = null;

        /**
         * Format: yyyy-MM-dd.
End date. Either Month or the combination of TimeFrom and TimeTo needs to be passed. If TimeFrom and TimeTo are passed, the Month field is invalid. TimeFrom and TimeTo should represent the same month and be passed in together. Cross-month queries are not supported. The result will include the full month's data.
Example: 2024-10-02.
         * @type {string || null}
         */
        this.TimeTo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Month = 'Month' in params ? params.Month : null;
        this.TimeFrom = 'TimeFrom' in params ? params.TimeFrom : null;
        this.TimeTo = 'TimeTo' in params ? params.TimeTo : null;

    }
}

/**
 * DeleteAllocationRule response structure.
 * @class
 */
class DeleteAllocationRuleResponse extends  AbstractModel {
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
 * Tag information.
 * @class
 */
class TagDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation tag key.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag type. Valid values: `0` (general tags), `1` (cost allocation tags).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Time to set the cost allocation tag. It will not be returned if `Status` is `0`.
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
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Total cost
 * @class
 */
class SummaryTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total amount after discount. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * Summarize total cost by product
 * @class
 */
class BusinessSummaryTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total amount after discount

         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * Consumption component details
 * @class
 */
class CostComponentSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component type name
         * @type {string || null}
         */
        this.ComponentCodeName = null;

        /**
         * Component name
         * @type {string || null}
         */
        this.ItemCodeName = null;

        /**
         * List price
         * @type {string || null}
         */
        this.SinglePrice = null;

        /**
         * List price unit
         * @type {string || null}
         */
        this.PriceUnit = null;

        /**
         * Usage
         * @type {string || null}
         */
        this.UsedAmount = null;

        /**
         * Usage unit
         * @type {string || null}
         */
        this.UsedAmountUnit = null;

        /**
         * Original price
         * @type {string || null}
         */
        this.Cost = null;

        /**
         * Discount
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * Discounted price
         * @type {string || null}
         */
        this.RealCost = null;

        /**
         * Voucher payment amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Cash payment amount
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Bonus payment amount
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentCodeName = 'ComponentCodeName' in params ? params.ComponentCodeName : null;
        this.ItemCodeName = 'ItemCodeName' in params ? params.ItemCodeName : null;
        this.SinglePrice = 'SinglePrice' in params ? params.SinglePrice : null;
        this.PriceUnit = 'PriceUnit' in params ? params.PriceUnit : null;
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedAmountUnit = 'UsedAmountUnit' in params ? params.UsedAmountUnit : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;

    }
}

/**
 * Cost analysis header data complex type
 * @class
 */
class AnalyseHeaderDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Header dateNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseHeaderTimeDetail> || null}
         */
        this.HeadDetail = null;

        /**
         * TimeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * TotalNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HeadDetail) {
            this.HeadDetail = new Array();
            for (let z in params.HeadDetail) {
                let obj = new AnalyseHeaderTimeDetail();
                obj.deserialize(params.HeadDetail[z]);
                this.HeadDetail.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * Cost analysis payment method complex type
 * @class
 */
class AnalysePayModeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing mode codeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Billing mode nameNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayModeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;

    }
}

/**
 * DescribeBillSummary response structure.
 * @class
 */
class DescribeBillSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Detailed summary of costs by multiple dimensions
         * @type {Array.<SummaryDetail> || null}
         */
        this.SummaryDetail = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryDetail) {
            this.SummaryDetail = new Array();
            for (let z in params.SummaryDetail) {
                let obj = new SummaryDetail();
                obj.deserialize(params.SummaryDetail[z]);
                this.SummaryDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cost analysis user UIN complex type
 * @class
 */
class AnalyseOwnerUinDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * User UIN
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OwnerUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;

    }
}

/**
 * Billing filter criteria object
 * @class
 */
class Conditions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Only supports two values: 6 and 12.
         * @type {number || null}
         */
        this.TimeRange = null;

        /**
         * Product name code
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Payment mode. Options include prePay and postPay.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Resource keyword
         * @type {string || null}
         */
        this.ResourceKeyword = null;

        /**
         * Product name code
         * @type {Array.<string> || null}
         */
        this.BusinessCodes = null;

        /**
         * Subproduct name code
         * @type {Array.<string> || null}
         */
        this.ProductCodes = null;

        /**
         * Region ID
         * @type {Array.<number> || null}
         */
        this.RegionIds = null;

        /**
         * Project ID
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Payment mode. Options include prePay and postPay.
         * @type {Array.<string> || null}
         */
        this.PayModes = null;

        /**
         * Transaction type
         * @type {Array.<string> || null}
         */
        this.ActionTypes = null;

        /**
         * Whether to hide zero-amount transactions
         * @type {number || null}
         */
        this.HideFreeCost = null;

        /**
         * Sorting rule. Options include desc and asc.
         * @type {string || null}
         */
        this.OrderByCost = null;

        /**
         * Transaction ID
         * @type {Array.<string> || null}
         */
        this.BillIds = null;

        /**
         * Component code
         * @type {Array.<string> || null}
         */
        this.ComponentCodes = null;

        /**
         * File ID
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * File type
         * @type {Array.<string> || null}
         */
        this.FileTypes = null;

        /**
         * Status
         * @type {Array.<number> || null}
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
        this.TimeRange = 'TimeRange' in params ? params.TimeRange : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceKeyword = 'ResourceKeyword' in params ? params.ResourceKeyword : null;
        this.BusinessCodes = 'BusinessCodes' in params ? params.BusinessCodes : null;
        this.ProductCodes = 'ProductCodes' in params ? params.ProductCodes : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.PayModes = 'PayModes' in params ? params.PayModes : null;
        this.ActionTypes = 'ActionTypes' in params ? params.ActionTypes : null;
        this.HideFreeCost = 'HideFreeCost' in params ? params.HideFreeCost : null;
        this.OrderByCost = 'OrderByCost' in params ? params.OrderByCost : null;
        this.BillIds = 'BillIds' in params ? params.BillIds : null;
        this.ComponentCodes = 'ComponentCodes' in params ? params.ComponentCodes : null;
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.FileTypes = 'FileTypes' in params ? params.FileTypes : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Cost analysis return value complex type
 * @class
 */
class AnalyseTimeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * DateNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Time = null;

        /**
         * AmountNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Money = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Money = 'Money' in params ? params.Money : null;

    }
}

/**
 * Detailed summary of purchases by region
 * @class
 */
class RegionSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
Note: This field may return null, indicating that no valid value was found.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region: The region to which a resource belongs, such as South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Billing month, e.g. `2019-08`
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * Consumption details summarized by project
 * @class
 */
class ConsumptionProjectSummaryDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Project name
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Discounted total price
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Trend
         * @type {ConsumptionSummaryTrend || null}
         */
        this.Trend = null;

        /**
         * Product consumption details
         * @type {Array.<ConsumptionBusinessSummaryDataItem> || null}
         */
        this.Business = null;

        /**
         * Cash
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Bonus
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * VoucherNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Share revenueNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

        if (params.Trend) {
            let obj = new ConsumptionSummaryTrend();
            obj.deserialize(params.Trend)
            this.Trend = obj;
        }

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new ConsumptionBusinessSummaryDataItem();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

    }
}

/**
 * Cost analysis region return complex type
 * @class
 */
class AnalyseRegionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region nameNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * Product details
 * @class
 */
class ProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product detail name identifier
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Product details
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
 * DescribeAllocationUnitDetail request structure.
 * @class
 */
class DescribeAllocationUnitDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the queried cost allocation unit.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Month, the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DescribeBillSummaryForOrganization request structure.
 * @class
 */
class DescribeBillSummaryForOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bill month in the format of "yyyy-mm".
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Bill dimension. Valid values: `business`, `project`, `region`, `payMode`, and `tag`.
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Tag key. Pass in it when `GroupType` is `tag`.
         * @type {Array.<string> || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Month = 'Month' in params ? params.Month : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * Detailed summary of costs by transaction type
 * @class
 */
class ActionSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transaction type code
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, or pay-as-you-go deduction.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Billing month, e.g. `2019-08`
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * DescribeBillDetailForOrganization request structure.
 * @class
 */
class DescribeBillDetailForOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset. If `Offset` is `0`, it indicates the first page. When `Limit` is `100`, if `Offset` is `100`, it indicates the second page; if `Offset` is `200`, it indicates the third page, and so on.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of entries returned at a time. The maximum value is `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Cycle type, which can be `byUsedTime` (by billing cycle) or `byPayTime` (by deduction time). This value must be the same as the billing period type in Billing Center for that particular month. You can check your billing cycle at the top of the [Bill Overview](https://console.cloud.tencent.com/expense/bill/overview) page.
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * The month is in the format of yyyy-mm. Either Month or BeginTime&EndTime must be specified. If BeginTime&EndTime is specified, the Month field is invalid. Data within the last 18 months can be pulled at most.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * The start time of the period in the format of yyyy-mm-dd hh:ii:ss. Either Month or BeginTime&EndTime must be specified. If BeginTime&EndTime is specified, the Month field is invalid. BeginTime and EndTime must be specified together and must be in the same month. Cross-month queries are not supported and the query results are data for the entire month. Data within the last 18 months can be pulled at most.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the period in the format of yyyy-mm-dd hh:ii:ss. Either Month or BeginTime&EndTime must be specified. If BeginTime&EndTime is specified, the Month field is invalid. BeginTime and EndTime must be specified together and must be in the same month. Cross-month queries are not supported and the query results are data for the entire month. Data within the last 18 months can be pulled at most.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Indicates whether the total number of records is required, used for pagination.
Valid values: `1` (required), `0` (not required).
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Billing mode, which can be `prePay` (monthly subscription) or `postPay` (pay-as-you-go).
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * ID of the instance to be queried.
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Transaction type. This parameter needs to be input using the `ActionTypeName` value. Valid values:
Monthly subscription purchase
Monthly subscription renewal
Monthly subscription upgrade/downgrade
Monthly subscription refund 
Pay-as-you-go deduction 
Offline project deduction 
Offline product deduction 
Adjustment deduction 
Adjustment compensation 
Hourly pay-as-you-go 
Daily pay-as-you-go 
Monthly pay-as-you-go 
Hourly spot instance 
Offline project adjustment compensation 
Offline product adjustment compensation 
Offer deduction 
Offer compensation 
Pay-as-you-go resource migration in 
Pay-as-you-go resource migration out 
Monthly subscription resource migration in 
Monthly subscription resource migration out 
Prepaid 
Hourly 
RI refund 
Pay-as-you-go reversal 
Monthly subscription to pay-as-you-go 
Minimum spend deduction 
Hourly savings plan fee
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Project ID: The ID of the project to which the resource belongs.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Product code.
Note: To query the product codes used in the current month, call <a href="https://intl.cloud.tencent.com/document/product/555/35761?from_cn_redirect=1">DescribeBillSummaryByProduct</a>.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Context information returned by the last response. You can view multiple pages when querying for data after May 2023 to speed up the query. We recommend you use this query method if your data volume is above 100 thousand entries, which can improve query speed by 2-10 times.
         * @type {string || null}
         */
        this.Context = null;

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
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * DescribeVoucherUsageDetails request structure.
 * @class
 */
class DescribeVoucherUsageDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records per page. The default is 20, and the maximum is 1,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page number the records start from. The default is 1.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The voucher ID.
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * The operator. The default is the UIN of the current.
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeBillResourceSummary request structure.
 * @class
 */
class DescribeBillResourceSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pagination offset. If `Offset` is `0`, it indicates the first page. If `Limit` is `100`, "`Offset` = `100`" indicates the second page, then "`Offset` = `200`" indicates the third page, and so on.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity, maximum is 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Bill month in the format of "yyyy-mm". This value must be no earlier than March 2019, when Bill 2.0 was launched.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * The period type. byUsedTime
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * Indicates whether or not the total number of records of accessing the list is required, used for frontend pages.
1 = yes, 0 = no
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Hourly settlement
Daily settlement
Monthly settlement
Spot
New monthly subscription
Monthly subscription renewal
Monthly subscription specification adjustment
Monthly subscription refund
Adjustment - deduction
Adjustment - refund
Hourly RI fee
One-off RI Fee
Hourly Savings Plan fee
Offline project deduction
Offline product deduction
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * ID of the instance to be queried
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Billing mode: prePay/postPay
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Product code
Note: To query the product codes used in the current month, call <a href="https://intl.cloud.tencent.com/document/product/555/35761?from_cn_redirect=1">DescribeBillSummaryByProduct</a>.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * The account ID of the payer, which is the unique identifier of a Tencent Cloud user. This account is allowed to query its own bills by default. If an organization admin account needs to query the self-pay bills of members, this field should be specified as the member account ID.
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Cost allocation tag key, which can be customized. This parameter can be used for querying bills after January 2021.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Resource tag value. If it is left empty, there are no records with tag values set under this tag key.
This parameter can be used for querying bills after January 2021.
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * Information about components charged in the bill
 * @class
 */
class BillDetailComponent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Component type: The component type of a product or service purchased, such as CVM instance components including CPU and memory.
         * @type {string || null}
         */
        this.ComponentCodeName = null;

        /**
         * Component name: The specific component of a product or service purchased
         * @type {string || null}
         */
        this.ItemCodeName = null;

        /**
         * Component list price: The listed unit price of a component. If a customer has applied for a fixed preferential price or contract price, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.SinglePrice = null;

        /**
         * Specified price of a component. This parameter has been deprecated.
         * @type {string || null}
         */
        this.SpecifiedPrice = null;

        /**
         * Component price measurement unit: The unit of measurement for a component price, which is composed of USD, usage unit, and duration unit.
         * @type {string || null}
         */
        this.PriceUnit = null;

        /**
         * Component usage: The actually settled usage of a component, which is "Raw usage - Deducted usage (including packages)".
         * @type {string || null}
         */
        this.UsedAmount = null;

        /**
         * Component usage unit: The unit of measurement for component usage
         * @type {string || null}
         */
        this.UsedAmountUnit = null;

        /**
         * Raw usage/duration: The raw usage/duration of a component before deduction. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalMeasure = null;

        /**
         * Deducted usage/duration (including packages): The usage/duration deducted with a package. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DeductedMeasure = null;

        /**
         * Usage duration: The resource usage duration
         * @type {string || null}
         */
        this.TimeSpan = null;

        /**
         * Duration unit: The unit of measurement for usage duration
         * @type {string || null}
         */
        this.TimeUnitName = null;

        /**
         * Original cost: The original cost of a resource, which is "List price x Usage x Usage duration". If a customer has applied for a fixed preferential price or contract price or is in a refund scenario, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.Cost = null;

        /**
         * Discount multiplier: The discount multiplier applied to the cost of the resource. If a customer has applied for a fixed preferential price or contract price or is in a refund scenario, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * Offer type
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * Total amount after discount: Total amount after discount = (Original cost - RI deduction (cost) - SP deduction (cost)) x Discount multiplier
         * @type {string || null}
         */
        this.RealCost = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Cash credit: The amount paid from the user's cash account

         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user's free credit

         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Commission credit: The amount paid with the user's commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Component type code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ItemCode = null;

        /**
         * Component name code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentCode = null;

        /**
         * Component contracted price: The contracted unit price of a component, which is "List price x Discount". Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ContractPrice = null;

        /**
         * Instance type: The instance type of a product or service purchased, which can be resource package, RI, SP, or spot instance. Other instance types are not displayed by default. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * RI deduction (duration): The usage duration deducted by RI. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RiTimeSpan = null;

        /**
         * RI deduction (cost): The amount deducted from the original cost by RI. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCostWithRI = null;

        /**
         * Savings plan deduction rate: The discount multiplier that applies to the component based on the remaining commitment of the savings plan. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SPDeductionRate = null;

        /**
         * Cost deduction by SP. This parameter has been deprecated. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SPDeduction = null;

        /**
         * SP deduction (cost): SP deduction (cost) = Cost deduction by SP / SP deduction rate. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OriginalCostWithSP = null;

        /**
         * Blended discount multiplier: The final discount multiplier that is applied after combining multiple discount types, which is "Total amount after discount / Original cost". Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BlendedDiscount = null;

        /**
         * Configuration description: The specification configuration of an instance.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillDetailComponentConfig> || null}
         */
        this.ComponentConfig = null;

        /**
         * The tax rate.
         * @type {string || null}
         */
        this.TaxRate = null;

        /**
         * The tax amount.
         * @type {string || null}
         */
        this.TaxAmount = null;

        /**
         * The currency used for the settlement of a component.
         * @type {string || null}
         */
        this.Currency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentCodeName = 'ComponentCodeName' in params ? params.ComponentCodeName : null;
        this.ItemCodeName = 'ItemCodeName' in params ? params.ItemCodeName : null;
        this.SinglePrice = 'SinglePrice' in params ? params.SinglePrice : null;
        this.SpecifiedPrice = 'SpecifiedPrice' in params ? params.SpecifiedPrice : null;
        this.PriceUnit = 'PriceUnit' in params ? params.PriceUnit : null;
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedAmountUnit = 'UsedAmountUnit' in params ? params.UsedAmountUnit : null;
        this.RealTotalMeasure = 'RealTotalMeasure' in params ? params.RealTotalMeasure : null;
        this.DeductedMeasure = 'DeductedMeasure' in params ? params.DeductedMeasure : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnitName = 'TimeUnitName' in params ? params.TimeUnitName : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.ItemCode = 'ItemCode' in params ? params.ItemCode : null;
        this.ComponentCode = 'ComponentCode' in params ? params.ComponentCode : null;
        this.ContractPrice = 'ContractPrice' in params ? params.ContractPrice : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.RiTimeSpan = 'RiTimeSpan' in params ? params.RiTimeSpan : null;
        this.OriginalCostWithRI = 'OriginalCostWithRI' in params ? params.OriginalCostWithRI : null;
        this.SPDeductionRate = 'SPDeductionRate' in params ? params.SPDeductionRate : null;
        this.SPDeduction = 'SPDeduction' in params ? params.SPDeduction : null;
        this.OriginalCostWithSP = 'OriginalCostWithSP' in params ? params.OriginalCostWithSP : null;
        this.BlendedDiscount = 'BlendedDiscount' in params ? params.BlendedDiscount : null;

        if (params.ComponentConfig) {
            this.ComponentConfig = new Array();
            for (let z in params.ComponentConfig) {
                let obj = new BillDetailComponentConfig();
                obj.deserialize(params.ComponentConfig[z]);
                this.ComponentConfig.push(obj);
            }
        }
        this.TaxRate = 'TaxRate' in params ? params.TaxRate : null;
        this.TaxAmount = 'TaxAmount' in params ? params.TaxAmount : null;
        this.Currency = 'Currency' in params ? params.Currency : null;

    }
}

/**
 * Regional filter criteria
 * @class
 */
class ConditionRegion extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * Details about cost distribution over different tags.
 * @class
 */
class TagSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag value
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * Cost percentage rounded to two decimal places
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The amount deducted by using vouchers. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * Filter criteria of consumption details summarized by resource
 * @class
 */
class ConsumptionResourceSummaryConditionValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product list
         * @type {Array.<ConditionBusiness> || null}
         */
        this.Business = null;

        /**
         * Project list
         * @type {Array.<ConditionProject> || null}
         */
        this.Project = null;

        /**
         * Region list
         * @type {Array.<ConditionRegion> || null}
         */
        this.Region = null;

        /**
         * Payment mode list
         * @type {Array.<ConditionPayMode> || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new ConditionBusiness();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }

        if (params.Project) {
            this.Project = new Array();
            for (let z in params.Project) {
                let obj = new ConditionProject();
                obj.deserialize(params.Project[z]);
                this.Project.push(obj);
            }
        }

        if (params.Region) {
            this.Region = new Array();
            for (let z in params.Region) {
                let obj = new ConditionRegion();
                obj.deserialize(params.Region[z]);
                this.Region.push(obj);
            }
        }

        if (params.PayMode) {
            this.PayMode = new Array();
            for (let z in params.PayMode) {
                let obj = new ConditionPayMode();
                obj.deserialize(params.PayMode[z]);
                this.PayMode.push(obj);
            }
        }

    }
}

/**
 * DescribeCostSummaryByRegion response structure.
 * @class
 */
class DescribeCostSummaryByRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Data readiness, 0 for not ready, 1 for ready
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Consumption details
         * @type {ConsumptionSummaryTotal || null}
         */
        this.Total = null;

        /**
         * Consumption details summarized by region
         * @type {Array.<ConsumptionRegionSummaryDataItem> || null}
         */
        this.Data = null;

        /**
         * Record count. The system returns null when NeedRecordNum is 0.Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RecordNum = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total)
            this.Total = obj;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionRegionSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCostDetail request structure.
 * @class
 */
class DescribeCostDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of entries returned at a time. The maximum value is `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Cycle start time in the format of yyyy-mm-dd hh:ii:ss. Either Month or BeginTime&EndTime must be entered, and if this field is present, Month becomes invalid. BeginTime and EndTime must be entered together, and must be in the same month. Cross-month retrieval is not currently supported. Data retrievable is the data after cost analysis is activated and within the past 24 months.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * Cycle end time in the format of yyyy-mm-dd hh:ii:ss. Either Month or BeginTime&EndTime must be entered, and if this field is present, Month becomes invalid. BeginTime and EndTime must be entered together, and must be in the same month. Cross-month retrieval is not currently supported. Data retrievable is the data after cost analysis is activated and within the past 24 months.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Whether the total number of records in the list is needed, for frontend pagination1: needed, 0: not needed
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Month, in the format of yyyy-mm. Either Month or BeginTime&EndTime must be entered, and if BeginTime&EndTime is entered, Month becomes invalid. It cannot be earlier than the month when cost analysis is activated. Data of up to 24 months can be retrieved.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Used to query information of a specified product (currently not available)
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Payment mode. Options include prePay and postPay.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Used to query information of a specified resource
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * List of collection rules.
 * @class
 */
class GatherRuleSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation regular expression.
         * @type {AllocationRuleExpression || null}
         */
        this.RuleDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleDetail) {
            let obj = new AllocationRuleExpression();
            obj.deserialize(params.RuleDetail)
            this.RuleDetail = obj;
        }

    }
}

/**
 * DescribeTagList request structure.
 * @class
 */
class DescribeTagListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of entries returned at a time. The maximum value is `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset. If `Offset` is `0`, it indicates the first page. When `Limit` is `100`, if `Offset` is `100`, it indicates the second page; if `Offset` is `200`, it indicates the third page, and so on.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Cost allocation tag key, used for fuzzy search.
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag type, used for tag filtering. Valid values: `0` (general tags), `1` (cost allocation tags). If it is not specified, all tag keys will be queried.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Sorting order. Valid values: `asc` (ascending order), `desc` (descending order).
         * @type {string || null}
         */
        this.OrderType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;

    }
}

/**
 * DescribeBillResourceSummaryForOrganization response structure.
 * @class
 */
class DescribeBillResourceSummaryForOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource summary list.
         * @type {Array.<BillDistributionResourceSummary> || null}
         */
        this.ResourceSummarySet = null;

        /**
         * Total number of resource summary lists. It will not be returned if `NeedRecordNum` is `0`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.ResourceSummarySet) {
            this.ResourceSummarySet = new Array();
            for (let z in params.ResourceSummarySet) {
                let obj = new BillDistributionResourceSummary();
                obj.deserialize(params.ResourceSummarySet[z]);
                this.ResourceSummarySet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAllocationTree request structure.
 * @class
 */
class DescribeAllocationTreeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Month, the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DescribeCostSummaryByResource request structure.
 * @class
 */
class DescribeCostSummaryByResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The value must be of the same month as EndTime. The query period must start and end on the same month and the query result returned will be of the entire month. For example, if both BeginTime and EndTime are 2018-09, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The value must be of the same month as BeginTime. The query period must start and end on the same month and the query result returned will be of the entire month. For example, if both BeginTime and EndTime are 2018-09, the data returned will be for the entire month of September 2018.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Data quantity per fetch. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which starts from 0 by default
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * UIN of the user querying the bill data
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Whether to return the record count. 0 for no, 1 for yes. Default is no.
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Whether to return filter criteria. 0 for no, 1 for yes. Default is no.
         * @type {number || null}
         */
        this.NeedConditionValue = null;

        /**
         * Filter criteria. It only supports ResourceKeyword (resource keyword, which supports fuzzy query by resource ID or resource name), ProjectIds (project ID), RegionIds (region ID), PayModes (payment mode, prePay or postPay), HideFreeCost (whether to hide zero-amount transactions, 0 or 1), and OrderByCost (sorting rule by fees, desc or asc).
         * @type {Conditions || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.NeedConditionValue = 'NeedConditionValue' in params ? params.NeedConditionValue : null;

        if (params.Conditions) {
            let obj = new Conditions();
            obj.deserialize(params.Conditions)
            this.Conditions = obj;
        }

    }
}

/**
 * CreateAllocationTag request structure.
 * @class
 */
class CreateAllocationTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cost allocation tag key.
         * @type {Array.<string> || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * The products that are not applicable.
 * @class
 */
class ExcludedProducts extends  AbstractModel {
    constructor(){
        super();

        /**
         * The names of non-applicable products.
         * @type {string || null}
         */
        this.GoodsName = null;

        /**
         * `postPay`: pay-as-you-go; `prePay`: prepaid; `riPay`: reserved instance; empty or `*`: all.
         * @type {string || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsName = 'GoodsName' in params ? params.GoodsName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * Detailed summary of costs by billing mode
 * @class
 */
class PayModeSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Billing mode code
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash balance
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Detailed summary of costs by transaction type
         * @type {Array.<ActionSummaryOverviewItem> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new ActionSummaryOverviewItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

    }
}

/**
 * DescribeAllocationRuleDetail response structure.
 * @class
 */
class DescribeAllocationRuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sharing rule ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Sharing rule ownership UIN.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Sharing rule name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Specifies the public area policy type. the enumeration values are as follows:.
1 - custom sharing proportion. 
2 - proportional allocation. 
3 - allocation by proportion.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Public sharing rule expression.
         * @type {AllocationRuleExpression || null}
         */
        this.RuleDetail = null;

        /**
         * Sharing proportion expression. returns when Type is 1 or 2.
         * @type {Array.<AllocationRationExpression> || null}
         */
        this.RatioDetail = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.RuleDetail) {
            let obj = new AllocationRuleExpression();
            obj.deserialize(params.RuleDetail)
            this.RuleDetail = obj;
        }

        if (params.RatioDetail) {
            this.RatioDetail = new Array();
            for (let z in params.RatioDetail) {
                let obj = new AllocationRationExpression();
                obj.deserialize(params.RatioDetail[z]);
                this.RatioDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The product purchased.
 * @class
 */
class UsageDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the product.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 
         * @type {string || null}
         */
        this.SubProductName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.SubProductName = 'SubProductName' in params ? params.SubProductName : null;

    }
}

/**
 * Cost analysis product return complex type
 * @class
 */
class AnalyseBusinessDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product codeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product nameNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;

    }
}

/**
 * Cost analysis query conditions
 * @class
 */
class AnalyseConditions extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name codeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCodes = null;

        /**
         * Sub-product name codeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductCodes = null;

        /**
         * Component type codeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentCode = null;

        /**
         * Availability zone ID: The availability zone ID to which the resource belongsNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneIds = null;

        /**
         * Region ID: The region ID to which the resource belongsNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionIds = null;

        /**
         * Project ID: The project ID to which the resource belongsNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProjectIds = null;

        /**
         * Billing mode prePay (indicates monthly subscription)/postPay (indicates pay-as-you-go billing)Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayModes = null;

        /**
         * Transaction type. Query transaction type. (Use transaction type code input parameter.)Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionTypes = null;

        /**
         * Cost allocation tag keyNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Tags = null;

        /**
         * Fee type. Query fee type. (Use fee type code input parameter.) The input parameter enumeration is as follows:cashPayAmount: cash incentivePayAmount: free credits voucherPayAmount: coupons tax:taxes costBeforeTax: price before taxNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FeeType = null;

        /**
         * User UIN for querying cost analysis dataNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayerUins = null;

        /**
         * User UIN for using resourcesNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OwnerUins = null;

        /**
         * Consumption type. Query consumption type. (Use consumption type code input parameter.)Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ConsumptionTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodes = 'BusinessCodes' in params ? params.BusinessCodes : null;
        this.ProductCodes = 'ProductCodes' in params ? params.ProductCodes : null;
        this.ComponentCode = 'ComponentCode' in params ? params.ComponentCode : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.PayModes = 'PayModes' in params ? params.PayModes : null;
        this.ActionTypes = 'ActionTypes' in params ? params.ActionTypes : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.FeeType = 'FeeType' in params ? params.FeeType : null;
        this.PayerUins = 'PayerUins' in params ? params.PayerUins : null;
        this.OwnerUins = 'OwnerUins' in params ? params.OwnerUins : null;
        this.ConsumptionTypes = 'ConsumptionTypes' in params ? params.ConsumptionTypes : null;

    }
}

/**
 * Consumption details data type
 * @class
 */
class CostDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Payer UIN
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode name
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project name
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region Name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Zone name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Type nameNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Transaction ID
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * Start time of fees
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * End time of fees
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Component details
         * @type {Array.<CostComponentSet> || null}
         */
        this.ComponentSet = null;

        /**
         * Subproduct name code
         * @type {string || null}
         */
        this.ProductCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;

        if (params.ComponentSet) {
            this.ComponentSet = new Array();
            for (let z in params.ComponentSet) {
                let obj = new CostComponentSet();
                obj.deserialize(params.ComponentSet[z]);
                this.ComponentSet.push(obj);
            }
        }
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;

    }
}

/**
 * DescribeBillSummaryByProduct response structure.
 * @class
 */
class DescribeBillSummaryByProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Total cost details
Note: This field may return null, indicating that no valid value was found.
         * @type {BusinessSummaryTotal || null}
         */
        this.SummaryTotal = null;

        /**
         * Cost distribution of all products
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<BusinessSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryTotal) {
            let obj = new BusinessSummaryTotal();
            obj.deserialize(params.SummaryTotal)
            this.SummaryTotal = obj;
        }

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new BusinessSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBillSummaryByRegion response structure.
 * @class
 */
class DescribeBillSummaryByRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. `0`: Not ready. `1`: Ready. If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Detailed cost distribution for all regions
Note: This field may return null, indicating that no valid value was found.
         * @type {Array.<RegionSummaryOverviewItem> || null}
         */
        this.SummaryOverview = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new RegionSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAllocationTag response structure.
 * @class
 */
class CreateAllocationTagResponse extends  AbstractModel {
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
 * ModifyAllocationUnit request structure.
 * @class
 */
class ModifyAllocationUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the modified cost allocation unit.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Modified cost allocation unit name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Modified cost allocation unit source organization name.
         * @type {string || null}
         */
        this.SourceName = null;

        /**
         * Modified allocation unit source organization ID.
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * Cost allocation unit remark description.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Month, the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

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
        this.SourceName = 'SourceName' in params ? params.SourceName : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DescribeBillDownloadUrl response structure.
 * @class
 */
class DescribeBillDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the bill file is ready. Valid values: `0` (the file is being generated), `1` (the file has been generated).
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Billing file download link, valid for 1 day. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DownloadUrl = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Consumption details summarized by resource
 * @class
 */
class ConsumptionResourceSummaryDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Resource ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Resource name
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Discounted total price
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash expenditure
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Project ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Project name
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Payment mode
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Payment mode name
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Product name code
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product name
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Consumption type
         * @type {string || null}
         */
        this.ConsumptionTypeName = null;

        /**
         * Pre-discount priceNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RealCost = null;

        /**
         * Start time of feesNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * End time of feesNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Days
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DayDiff = null;

        /**
         * Daily consumptionNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.DailyTotalCost = null;

        /**
         * Order numberNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * VoucherNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Bonus
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Share revenueNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Payer UIN: the account ID of the payer, which is the unique identifier of a Tencent Cloud userNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * User UIN: the account ID of the actual resource userNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator UIN: the account ID or role ID of the operator who places orders for prepaid resources or activates postpaid resourcesNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Subproduct codeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Subproduct name: the subcategory of a product purchased by the user, such as CVM – Standard S1Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Region typeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionType = null;

        /**
         * Region type nameNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.RegionTypeName = null;

        /**
         * Extended field 1Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extend1 = null;

        /**
         * Extended field 2Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extend2 = null;

        /**
         * Extended field 3Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extend3 = null;

        /**
         * Extended field 4Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extend4 = null;

        /**
         * Extended field 5Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Extend5 = null;

        /**
         * Instance typeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Instance type nameNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceTypeName = null;

        /**
         * Deduction time: the time at which a payment is deductedNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Availability zone: availability zone of a resource, e.g. Guangzhou Zone 3Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Configuration descriptionNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ComponentConfig = null;

        /**
         * Tag information.Note: This field may return null, indicating that no valid values can be obtained.
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ConsumptionTypeName = 'ConsumptionTypeName' in params ? params.ConsumptionTypeName : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;
        this.DayDiff = 'DayDiff' in params ? params.DayDiff : null;
        this.DailyTotalCost = 'DailyTotalCost' in params ? params.DailyTotalCost : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.RegionType = 'RegionType' in params ? params.RegionType : null;
        this.RegionTypeName = 'RegionTypeName' in params ? params.RegionTypeName : null;
        this.Extend1 = 'Extend1' in params ? params.Extend1 : null;
        this.Extend2 = 'Extend2' in params ? params.Extend2 : null;
        this.Extend3 = 'Extend3' in params ? params.Extend3 : null;
        this.Extend4 = 'Extend4' in params ? params.Extend4 : null;
        this.Extend5 = 'Extend5' in params ? params.Extend5 : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceTypeName = 'InstanceTypeName' in params ? params.InstanceTypeName : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ComponentConfig = 'ComponentConfig' in params ? params.ComponentConfig : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * DescribeAccountBalance request structure.
 * @class
 */
class DescribeAccountBalanceRequest extends  AbstractModel {
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
 * DescribeBillDetail request structure.
 * @class
 */
class DescribeBillDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Quantity, maximum is 300
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The period type. byUsedTime: By usage period; byPayTime: By payment period. Must be the same as the period of the current monthly bill of the Billing Center. You can check your bill statistics period type at the top of the [Bill Overview](https://console.cloud.tencent.com/expense/bill/overview) page. 
         * @type {string || null}
         */
        this.PeriodType = null;

        /**
         * Month; format: yyyy-mm. You only have to enter either Month or BeginTime and EndTime. When you enter values for BeginTime and EndTime, Month becomes invalid. This value must be no earlier than the month when Bill 2.0 is activated; last 24 months data are available.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * The start time of the query range, which should be in the format Y-m-d H:i:s . The query range must be in the last 18 months and cannot be earlier than May 2018 (when Bill 2.0 was introduced). The start time and end time must be in the same month.

Example: tccli billing DescribeBillDetail --cli-unfold-argument --Offset 1 --Limit 100 --BeginTime '2023-04-01 12:05:15' --EndTime '2023-04-18 12:00:10' --ProjectId 1000000731  --version "2018-07-09"

Alternatively, you can use Month to query the billing details of a month.
Example:
ccli billing DescribeBillDetail --cli-unfold-argument --Offset 1 --Limit 100 --Month 2023-04  --version "2018-07-09" --ResourceId "disk-oj9okstm"
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time of the query range, which should be in the format `Y-m-d H:i:s `. The query range must be in the last 18 months and cannot be earlier than May 2018 (when Bill 2.0 was introduced). The start time and end time must be in the same month.

Example: tccli billing DescribeBillDetail --cli-unfold-argument --Offset 1 --Limit 100 --BeginTime '2023-04-01 12:05:15' --EndTime '2023-04-18 12:00:10' --ProjectId 1000000731  --version "2018-07-09"

Alternatively, you can use `Month` to query the billing details of a month. 
Example:
ccli billing DescribeBillDetail --cli-unfold-argument --Offset 1 --Limit 100 --Month 2023-04  --version "2018-07-09" --ResourceId "disk-oj9okstm"
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Indicates whether or not the total number of records of accessing the list is required, used for frontend pages.
1 = yes, 0 = no
         * @type {number || null}
         */
        this.NeedRecordNum = null;

        /**
         * Queries information on a specified product
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Billing mode: prePay/postPay
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Queries information on a specified resource
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Hourly settlement
Daily settlement
Monthly settlement
Spot
New monthly subscription
Monthly subscription renewal
Monthly subscription specification adjustment
Monthly subscription refund
Adjustment - deduction
Adjustment - refund
Hourly RI fee
One-off RI Fee
Hourly Savings Plan fee
Offline project deduction
Offline product deduction
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * Project ID: ID of the project to which the resource belongs
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Product code
Note: To query the product codes used in the current month, call <a href="https://intl.cloud.tencent.com/document/product/555/35761?from_cn_redirect=1">DescribeBillSummaryByProduct</a>.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Context information returned by the last request. You can set `Month` to `2023-05` or later to accelerate queries. We recommend users whose data volume is over 100 thousand entries use the paginated query feature, which can help greatly speed up your queries.
         * @type {string || null}
         */
        this.Context = null;

        /**
         * The account ID of the payer, which is the unique identifier of a Tencent Cloud user. This account is allowed to query its own bills by default. If an organization admin account needs to query the self-pay bills of members, this field should be specified as the member account ID.
         * @type {string || null}
         */
        this.PayerUin = null;

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
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;

    }
}

/**
 * Cost analysis availability zone complex type
 * @class
 */
class AnalyseZoneDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Availability zone IDNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Availability zone nameNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ZoneName = null;

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

    }
}

/**
 * DescribeVoucherInfo response structure.
 * @class
 */
class DescribeVoucherInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of vouchers.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The total voucher balance. The value of this parameter is the total balance (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.TotalBalance = null;

        /**
         * The voucher information.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<VoucherInfos> || null}
         */
        this.VoucherInfos = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalBalance = 'TotalBalance' in params ? params.TotalBalance : null;

        if (params.VoucherInfos) {
            this.VoucherInfos = new Array();
            for (let z in params.VoucherInfos) {
                let obj = new VoucherInfos();
                obj.deserialize(params.VoucherInfos[z]);
                this.VoucherInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * List of sharing rules.
 * @class
 */
class AllocationRulesSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Add new sharing rule name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Specifies the sharing rule policy type. the enumeration values are as follows:.
1 - custom sharing proportion. 
2 - proportional allocation.
3 - allocation by proportion.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Sharing rule expression.
         * @type {AllocationRuleExpression || null}
         */
        this.RuleDetail = null;

        /**
         * Sharing proportion expression, allocation by proportion not passed.
         * @type {Array.<AllocationRationExpression> || null}
         */
        this.RatioDetail = null;

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

        if (params.RuleDetail) {
            let obj = new AllocationRuleExpression();
            obj.deserialize(params.RuleDetail)
            this.RuleDetail = obj;
        }

        if (params.RatioDetail) {
            this.RatioDetail = new Array();
            for (let z in params.RatioDetail) {
                let obj = new AllocationRationExpression();
                obj.deserialize(params.RatioDetail[z]);
                this.RatioDetail.push(obj);
            }
        }

    }
}

/**
 * Detailed summary of costs by multiple dimensions
 * @class
 */
class SummaryDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bill dimension code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupKey = null;

        /**
         * Bill dimension value. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupValue = null;

        /**
         * Original cost in USD. This parameter has become valid since Bill 3.0 took effect in May 2021, and before that `-` was returned for this parameter. If a customer has applied for a contract price different from the prices listed on the official website, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Detailed summary of products. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BusinessSummaryInfo> || null}
         */
        this.Business = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupKey = 'GroupKey' in params ? params.GroupKey : null;
        this.GroupValue = 'GroupValue' in params ? params.GroupValue : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new BusinessSummaryInfo();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }

    }
}

/**
 * DescribeAccountBalance response structure.
 * @class
 */
class DescribeAccountBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Available account balance in cents, which takes the same calculation rules as `RealBalance`, `CreditBalance`, and `RealCreditBalance`.
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * The UIN to query.
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * Available account balance in cents, which takes the same calculation rules as `Balance`, `CreditBalance`, and `RealCreditBalance`.
         * @type {number || null}
         */
        this.RealBalance = null;

        /**
         * Cash account balance in cents. Currently, this field is not applied.
         * @type {number || null}
         */
        this.CashAccountBalance = null;

        /**
         * Income account balance in cents. Currently, this field is not applied.
         * @type {number || null}
         */
        this.IncomeIntoAccountBalance = null;

        /**
         * Present account balance in cents. Currently, this field is not applied.
         * @type {number || null}
         */
        this.PresentAccountBalance = null;

        /**
         * Frozen amount in cents.
         * @type {number || null}
         */
        this.FreezeAmount = null;

        /**
         * Overdue amount in cents, which is when the available credit balance is negative.
         * @type {number || null}
         */
        this.OweAmount = null;

        /**
         * Whether overdue payments are allowed. Currently, this field is not applied.
         * @type {boolean || null}
         */
        this.IsAllowArrears = null;

        /**
         * Whether you have a credit limit. Currently, this field is not applied.
         * @type {boolean || null}
         */
        this.IsCreditLimited = null;

        /**
         * Credit limit in cents. Credit limit－available credit balance = consumption amount
         * @type {number || null}
         */
        this.CreditAmount = null;

        /**
         * Available credit balance in cents, which takes the same calculation rules as `Balance`, `RealBalance`, and `RealCreditBalance`.
         * @type {number || null}
         */
        this.CreditBalance = null;

        /**
         * Available account balance in cents, which takes the same calculation rules as `Balance`, `RealBalance`, and `CreditBalance`.
         * @type {number || null}
         */
        this.RealCreditBalance = null;

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
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RealBalance = 'RealBalance' in params ? params.RealBalance : null;
        this.CashAccountBalance = 'CashAccountBalance' in params ? params.CashAccountBalance : null;
        this.IncomeIntoAccountBalance = 'IncomeIntoAccountBalance' in params ? params.IncomeIntoAccountBalance : null;
        this.PresentAccountBalance = 'PresentAccountBalance' in params ? params.PresentAccountBalance : null;
        this.FreezeAmount = 'FreezeAmount' in params ? params.FreezeAmount : null;
        this.OweAmount = 'OweAmount' in params ? params.OweAmount : null;
        this.IsAllowArrears = 'IsAllowArrears' in params ? params.IsAllowArrears : null;
        this.IsCreditLimited = 'IsCreditLimited' in params ? params.IsCreditLimited : null;
        this.CreditAmount = 'CreditAmount' in params ? params.CreditAmount : null;
        this.CreditBalance = 'CreditBalance' in params ? params.CreditBalance : null;
        this.RealCreditBalance = 'RealCreditBalance' in params ? params.RealCreditBalance : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Summarize product details by product
 * @class
 */
class BusinessSummaryOverviewItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product code. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Cost ratio, to two decimal points
         * @type {string || null}
         */
        this.RealTotalCostRatio = null;

        /**
         * Total amount after discount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Cash credit: The amount paid from the user’s cash account
         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user’s free credit
         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Commission credit: The amount paid with the user’s commission credit.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Billing month, e.g. `2019-08`
         * @type {string || null}
         */
        this.BillMonth = null;

        /**
         * The original cost in USD. This parameter has become valid since v3.0 bills took effect in May 2021, and before that `-` was returned for this parameter. If a customer uses a contract price different from the published price, `-` will also be returned for this parameter.
         * @type {string || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

/**
 * CreateGatherRule response structure.
 * @class
 */
class CreateGatherRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Collection  rule ID.
         * @type {number || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The usage records.
 * @class
 */
class UsageRecords extends  AbstractModel {
    constructor(){
        super();

        /**
         * The amount used. The value of this parameter is the amount used (USD, rounded to 8 decimal places) multiplied by 100,000,000.
         * @type {number || null}
         */
        this.UsedAmount = null;

        /**
         * The time when the voucher was used.
         * @type {string || null}
         */
        this.UsedTime = null;

        /**
         * The details of the product purchased.
Note: This field may return `null`, indicating that no valid value was found.
         * @type {Array.<UsageDetails> || null}
         */
        this.UsageDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedTime = 'UsedTime' in params ? params.UsedTime : null;

        if (params.UsageDetails) {
            this.UsageDetails = new Array();
            for (let z in params.UsageDetails) {
                let obj = new UsageDetails();
                obj.deserialize(params.UsageDetails[z]);
                this.UsageDetails.push(obj);
            }
        }

    }
}

/**
 * ModifyAllocationRule response structure.
 * @class
 */
class ModifyAllocationRuleResponse extends  AbstractModel {
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
 * DescribeVoucherInfo request structure.
 * @class
 */
class DescribeVoucherInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of records per page. The default is 20, and the maximum is 1,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page number the records start from. The default is 1.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The voucher status. Valid values: `unUsed`, `used`, `delivered`, `cancel`, `overdue`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The voucher ID.
         * @type {string || null}
         */
        this.VoucherId = null;

        /**
         * The voucher order ID.
         * @type {string || null}
         */
        this.CodeId = null;

        /**
         * The product code.
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * The campaign ID.
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * The voucher name.
         * @type {string || null}
         */
        this.VoucherName = null;

        /**
         * The start date of the voucher issuance, such as `2021-01-01`.
         * @type {string || null}
         */
        this.TimeFrom = null;

        /**
         * The end date of the voucher issuance, such as `2021-01-01`.
         * @type {string || null}
         */
        this.TimeTo = null;

        /**
         * The field used to sort the records. Valid values: BeginTime, EndTime, CreateTime.
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * Whether to sort the records in ascending or descending order. Valid values: desc, asc.
         * @type {string || null}
         */
        this.SortOrder = null;

        /**
         * The payment mode. Valid values: `postPay`: pay-as-you-go; `prePay`: prepaid; `riPay`: reserved instance; empty or `*`: all. If this parameter is empty or `*`, `productCode` and `subProductCode` must also be empty.
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * If `PayMode` is `postPay`, this parameter may be `spotpay` (spot instance) or `settle account` (regular pay-as-you-go). If `PayMode` is `prePay`, this parameter may be `purchase`, `renew`, or `modify` (downgrade/upgrade). If `PayMode` is `riPay`, this parameter may be `oneOffFee` (prepayment of reserved instance) or `hourlyFee` (hourly billing of reserved instance). `*` means to query vouchers that support all billing scenarios.
         * @type {string || null}
         */
        this.PayScene = null;

        /**
         * The operator. The default is the UIN of the current user.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * The primary types of vouchers are has_price and no_price, which represent the cash voucher with a price and the cash voucher without a price respectively.
         * @type {string || null}
         */
        this.VoucherMainType = null;

        /**
         * Voucher subtype: Discount is a discount voucher, and deduct is a deduction voucher.
         * @type {string || null}
         */
        this.VoucherSubType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VoucherId = 'VoucherId' in params ? params.VoucherId : null;
        this.CodeId = 'CodeId' in params ? params.CodeId : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.VoucherName = 'VoucherName' in params ? params.VoucherName : null;
        this.TimeFrom = 'TimeFrom' in params ? params.TimeFrom : null;
        this.TimeTo = 'TimeTo' in params ? params.TimeTo : null;
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayScene = 'PayScene' in params ? params.PayScene : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.VoucherMainType = 'VoucherMainType' in params ? params.VoucherMainType : null;
        this.VoucherSubType = 'VoucherSubType' in params ? params.VoucherSubType : null;

    }
}

/**
 * DescribeDealsByCond request structure.
 * @class
 */
class DescribeDealsByCondRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time 
Example :2016-01-01 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time 
Example:2016-02-01 00:00:00. 
It is recommended that the span does not exceed 3 months.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The number of records per page. The default is 20, and the maximum is 1,000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The page number the records start from, starting from 0. The default is 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Order status, default is 4 (successful order)
Status of the order
1: unpaid
2: paid 
3: shipment in progress
4: shipped
5`: Shipment Failed
6`: Refunded
7`: Ticket closed
8`: Order expired
9`: Order invalid
10: product invalidated
11: third-party payment refused
12: payment in process
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Sub-order number
Example: 202202021234567
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Large order number.
Example: 202202021234566
         * @type {string || null}
         */
        this.BigDealId = null;

        /**
         * Resource ID
Example:ins-a2bb34
         * @type {string || null}
         */
        this.ResourceId = null;

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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * CreateAllocationUnit response structure.
 * @class
 */
class CreateAllocationUnitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the ID of a newly-added cost allocation unit.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Unique identifier of a cost allocation unit
         * @type {string || null}
         */
        this.TreeNodeUniqKey = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.TreeNodeUniqKey = 'TreeNodeUniqKey' in params ? params.TreeNodeUniqKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDosageCosDetailByDate response structure.
 * @class
 */
class DescribeDosageCosDetailByDateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of usage
         * @type {Array.<CosDetailSets> || null}
         */
        this.DetailSets = null;

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

        if (params.DetailSets) {
            this.DetailSets = new Array();
            for (let z in params.DetailSets) {
                let obj = new CosDetailSets();
                obj.deserialize(params.DetailSets[z]);
                this.DetailSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cost analysis header data
 * @class
 */
class AnalyseHeaderTimeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * DateNote: This field may return null, indicating that no valid values can be obtained.
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
 * Cost allocation regular expression.
 * @class
 */
class AllocationRuleExpression extends  AbstractModel {
    constructor(){
        super();

        /**
         * RuleKey: cost allocation dimension.
Enumeration value.
ownerUin - user UIN.
Operator UIN.
businessCode - product-level code.
productCode - 2-tier product code.
itemCode - 4-tier product code.
projectId - specifies the project ID.
regionId.
resourceId - specifies the resource ID.
tag - tag key-value pair.
payMode - billing mode.
instanceType - instance type.
actionType - transaction type.
         * @type {string || null}
         */
        this.RuleKey = null;

        /**
         * Specifies the dimension rules for cost allocation.
Enumeration value.
in.
not in.
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * Cost allocation dimension value. for example, when RuleKey is businessCode, ["p_cbs","p_sqlserver"] indicates the cost of products at the "p_cbs","p_sqlserver" level.
         * @type {Array.<string> || null}
         */
        this.RuleValue = null;

        /**
         * Logical connection for cost allocation, enumeration values are as follows:.
Create and bind a policy query an instance reset the access password of an instance.
Create and bind a policy query an instance reset the access password of an instance.
         * @type {string || null}
         */
        this.Connectors = null;

        /**
         * Nested rule.
         * @type {Array.<AllocationRuleExpression> || null}
         */
        this.Children = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleKey = 'RuleKey' in params ? params.RuleKey : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.RuleValue = 'RuleValue' in params ? params.RuleValue : null;
        this.Connectors = 'Connectors' in params ? params.Connectors : null;

        if (params.Children) {
            this.Children = new Array();
            for (let z in params.Children) {
                let obj = new AllocationRuleExpression();
                obj.deserialize(params.Children[z]);
                this.Children.push(obj);
            }
        }

    }
}

/**
 * DescribeBillSummaryForOrganization response structure.
 * @class
 */
class DescribeBillSummaryForOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Indicates whether the data is ready. Valid values: `0` (not ready), `1` (ready). If `Ready` is `0`, it indicates that the current UIN is initializing billing for the first time. Wait for 5-10 minutes and try again.
         * @type {number || null}
         */
        this.Ready = null;

        /**
         * Bills summarized by multiple dimensions.
         * @type {Array.<SummaryDetail> || null}
         */
        this.SummaryDetail = null;

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
        this.Ready = 'Ready' in params ? params.Ready : null;

        if (params.SummaryDetail) {
            this.SummaryDetail = new Array();
            for (let z in params.SummaryDetail) {
                let obj = new SummaryDetail();
                obj.deserialize(params.SummaryDetail[z]);
                this.SummaryDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAllocationUnit response structure.
 * @class
 */
class DeleteAllocationUnitResponse extends  AbstractModel {
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
 * Project filter criteria
 * @class
 */
class ConditionProject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Project name
         * @type {string || null}
         */
        this.ProjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * DescribeTagList response structure.
 * @class
 */
class DescribeTagListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of records.
         * @type {number || null}
         */
        this.RecordNum = null;

        /**
         * Tag information.
         * @type {Array.<TagDataInfo> || null}
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
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TagDataInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information about the data structure of the returned COS usage details
 * @class
 */
class CosDetailSets extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bucket name
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * The start time of the usage
         * @type {string || null}
         */
        this.DosageBeginTime = null;

        /**
         * The end time of the usage
         * @type {string || null}
         */
        this.DosageEndTime = null;

        /**
         * Subproduct name
         * @type {string || null}
         */
        this.SubProductCodeName = null;

        /**
         * Billable item name
         * @type {string || null}
         */
        this.BillingItemCodeName = null;

        /**
         * Usage
         * @type {string || null}
         */
        this.DosageValue = null;

        /**
         * Unit of the billable item
         * @type {string || null}
         */
        this.Unit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.DosageBeginTime = 'DosageBeginTime' in params ? params.DosageBeginTime : null;
        this.DosageEndTime = 'DosageEndTime' in params ? params.DosageEndTime : null;
        this.SubProductCodeName = 'SubProductCodeName' in params ? params.SubProductCodeName : null;
        this.BillingItemCodeName = 'BillingItemCodeName' in params ? params.BillingItemCodeName : null;
        this.DosageValue = 'DosageValue' in params ? params.DosageValue : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * DescribeAllocationRuleSummary request structure.
 * @class
 */
class DescribeAllocationRuleSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the data quantity per fetch. the maximum value is 1000.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Month, which is the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

        /**
         * Public area policy type, for filtering.
Enumeration values are as follows:. 
1 - custom sharing proportion. 
2 - proportional allocation. 
3 - allocation by proportion.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Sharing rule name or cost allocation unit name, used for fuzzy filter criteria.
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ModifyAllocationUnit response structure.
 * @class
 */
class ModifyAllocationUnitResponse extends  AbstractModel {
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
 * Cost analysis filter box complex type
 * @class
 */
class AnalyseConditionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * ProductNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseBusinessDetail> || null}
         */
        this.Business = null;

        /**
         * ItemNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseProjectDetail> || null}
         */
        this.Project = null;

        /**
         * RegionNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseRegionDetail> || null}
         */
        this.Region = null;

        /**
         * Billing modeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalysePayModeDetail> || null}
         */
        this.PayMode = null;

        /**
         * Transaction typeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseActionTypeDetail> || null}
         */
        this.ActionType = null;

        /**
         * Availability zoneNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseZoneDetail> || null}
         */
        this.Zone = null;

        /**
         * Resource owner UINNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseOwnerUinDetail> || null}
         */
        this.OwnerUin = null;

        /**
         * Fee typeNote: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AnalyseAmountDetail> || null}
         */
        this.Amount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new AnalyseBusinessDetail();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }

        if (params.Project) {
            this.Project = new Array();
            for (let z in params.Project) {
                let obj = new AnalyseProjectDetail();
                obj.deserialize(params.Project[z]);
                this.Project.push(obj);
            }
        }

        if (params.Region) {
            this.Region = new Array();
            for (let z in params.Region) {
                let obj = new AnalyseRegionDetail();
                obj.deserialize(params.Region[z]);
                this.Region.push(obj);
            }
        }

        if (params.PayMode) {
            this.PayMode = new Array();
            for (let z in params.PayMode) {
                let obj = new AnalysePayModeDetail();
                obj.deserialize(params.PayMode[z]);
                this.PayMode.push(obj);
            }
        }

        if (params.ActionType) {
            this.ActionType = new Array();
            for (let z in params.ActionType) {
                let obj = new AnalyseActionTypeDetail();
                obj.deserialize(params.ActionType[z]);
                this.ActionType.push(obj);
            }
        }

        if (params.Zone) {
            this.Zone = new Array();
            for (let z in params.Zone) {
                let obj = new AnalyseZoneDetail();
                obj.deserialize(params.Zone[z]);
                this.Zone.push(obj);
            }
        }

        if (params.OwnerUin) {
            this.OwnerUin = new Array();
            for (let z in params.OwnerUin) {
                let obj = new AnalyseOwnerUinDetail();
                obj.deserialize(params.OwnerUin[z]);
                this.OwnerUin.push(obj);
            }
        }

        if (params.Amount) {
            this.Amount = new Array();
            for (let z in params.Amount) {
                let obj = new AnalyseAmountDetail();
                obj.deserialize(params.Amount[z]);
                this.Amount.push(obj);
            }
        }

    }
}

/**
 * Information about resources charged in the bill
 * @class
 */
class BillResourceSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product name: The name of a Tencent Cloud product purchased by the user, such as CVM.
         * @type {string || null}
         */
        this.BusinessCodeName = null;

        /**
         * Subproduct name: The subcategory of a Tencent Cloud product purchased by the user, such as CVM Computing C5t.
         * @type {string || null}
         */
        this.ProductCodeName = null;

        /**
         * Billing mode, which can be monthly subscription or pay-as-you-go.
         * @type {string || null}
         */
        this.PayModeName = null;

        /**
         * Project name: The project to which a resource belongs, which is user-designated. If a resource has not been assigned to a project, it will automatically belong to the default project.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Region: The region to which a resource belongs, such as South China (Guangzhou).
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Availability zone: The availability zone to which a resource belongs, such as Guangzhou Zone 3.
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Instance ID: The object ID of a billed resource, such as a CVM instance ID. This object ID may vary due to various forms and contents of resources in different products.	
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * Instance name: The resource name set by the user in the console. If it is not set, it will be empty by default.
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Transaction type, which can be monthly subscription purchase, monthly subscription renewal, or pay-as-you-go deduction.
         * @type {string || null}
         */
        this.ActionTypeName = null;

        /**
         * Order ID: The order number for a monthly subscription purchase
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Transaction time: The time at which a payment was deducted
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * Usage start time: The time at which product or service usage starts
         * @type {string || null}
         */
        this.FeeBeginTime = null;

        /**
         * Usage end time: The time at which product or service usage ends
         * @type {string || null}
         */
        this.FeeEndTime = null;

        /**
         * Configuration description: The billable item names and usage of a resource, which are displayed on the resource bill only.
         * @type {string || null}
         */
        this.ConfigDesc = null;

        /**
         * Extended field 1: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField1 = null;

        /**
         * Extended field 2: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField2 = null;

        /**
         * Original cost: The original cost of a resource, which is "List price x Usage x Usage duration". If a customer has applied for a fixed preferential price or contract price or applied for a refund, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.TotalCost = null;

        /**
         * Discount multiplier: The discount multiplier applied to the cost of the resource. If a customer has applied for a fixed preferential price or contract price or applied for a refund, this parameter will not be displayed by default.
         * @type {string || null}
         */
        this.Discount = null;

        /**
         * Offer type
         * @type {string || null}
         */
        this.ReduceType = null;

        /**
         * Total amount after discount (Including Tax):  = Total Amount After Discount (Excluding Tax) + TaxAmount
         * @type {string || null}
         */
        this.RealTotalCost = null;

        /**
         * Voucher payment: The voucher deduction amount
         * @type {string || null}
         */
        this.VoucherPayAmount = null;

        /**
         * Cash credit: The amount paid from the user's cash account

         * @type {string || null}
         */
        this.CashPayAmount = null;

        /**
         * Free credit: The amount paid with the user's free credit

         * @type {string || null}
         */
        this.IncentivePayAmount = null;

        /**
         * Commission credit: The amount paid with the user's commission credit. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TransferPayAmount = null;

        /**
         * Extended field 3: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField3 = null;

        /**
         * Extended field 4: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField4 = null;

        /**
         * Extended field 5: Extended attribute information of a product, which is displayed on the resource bill only.
         * @type {string || null}
         */
        this.ExtendField5 = null;

        /**
         * Tag information. Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BillTagInfo> || null}
         */
        this.Tags = null;

        /**
         * Payer account ID: The account ID of the payer, which is the unique identifier of a Tencent Cloud user.
         * @type {string || null}
         */
        this.PayerUin = null;

        /**
         * Owner account ID: The account ID of the actual resource user
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * Operator account ID: The account or role ID of the operator who purchases or activates a resource.
         * @type {string || null}
         */
        this.OperateUin = null;

        /**
         * Product code
         * @type {string || null}
         */
        this.BusinessCode = null;

        /**
         * Subproduct code
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Instance type: The instance type of a product or service purchased, which can be resource package, RI, SP, or spot instance. Other instance types are not displayed by default.
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * RI deduction (cost): The amount deducted from the original cost by RI	
         * @type {string || null}
         */
        this.OriginalCostWithRI = null;

        /**
         * Cost deduction by SP. This parameter has been deprecated.
         * @type {string || null}
         */
        this.SPDeduction = null;

        /**
         * SP deduction (cost): SP deduction (cost) = Cost deduction by SP / SP deduction rate	
         * @type {string || null}
         */
        this.OriginalCostWithSP = null;

        /**
         * Billing monthNote: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BillMonth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;
        this.ConfigDesc = 'ConfigDesc' in params ? params.ConfigDesc : null;
        this.ExtendField1 = 'ExtendField1' in params ? params.ExtendField1 : null;
        this.ExtendField2 = 'ExtendField2' in params ? params.ExtendField2 : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.TransferPayAmount = 'TransferPayAmount' in params ? params.TransferPayAmount : null;
        this.ExtendField3 = 'ExtendField3' in params ? params.ExtendField3 : null;
        this.ExtendField4 = 'ExtendField4' in params ? params.ExtendField4 : null;
        this.ExtendField5 = 'ExtendField5' in params ? params.ExtendField5 : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.OriginalCostWithRI = 'OriginalCostWithRI' in params ? params.OriginalCostWithRI : null;
        this.SPDeduction = 'SPDeduction' in params ? params.SPDeduction : null;
        this.OriginalCostWithSP = 'OriginalCostWithSP' in params ? params.OriginalCostWithSP : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;

    }
}

/**
 * DeleteAllocationUnit request structure.
 * @class
 */
class DeleteAllocationUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the deleted cost allocation unit ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Month, which is the current month by default if not provided.
         * @type {string || null}
         */
        this.Month = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Month = 'Month' in params ? params.Month : null;

    }
}

/**
 * DescribeGatherRuleDetail response structure.
 * @class
 */
class DescribeGatherRuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specifies the collection rule ID.
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Associated UIN of the collection rule.
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * Collection rule last update time.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Collection rule details.
         * @type {AllocationRuleExpression || null}
         */
        this.RuleDetail = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.RuleDetail) {
            let obj = new AllocationRuleExpression();
            obj.deserialize(params.RuleDetail)
            this.RuleDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Overview of sharing rules.
 * @class
 */
class AllocationRuleOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sharing rule ID.
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * Sharing rule name.
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Public area policy type.
Enumeration value.
1 - custom sharing proportion. 
2 - proportional allocation. 
3 - allocation by proportion.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Last update time of the sharing rules.
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Overview of cost allocation units.
         * @type {Array.<AllocationUnit> || null}
         */
        this.AllocationNode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.AllocationNode) {
            this.AllocationNode = new Array();
            for (let z in params.AllocationNode) {
                let obj = new AllocationUnit();
                obj.deserialize(params.AllocationNode[z]);
                this.AllocationNode.push(obj);
            }
        }

    }
}

module.exports = {
    CreateAllocationUnitRequest: CreateAllocationUnitRequest,
    DeleteAllocationTagRequest: DeleteAllocationTagRequest,
    DescribeCostSummaryByProductRequest: DescribeCostSummaryByProductRequest,
    DescribeCostExplorerSummaryResponse: DescribeCostExplorerSummaryResponse,
    ConsumptionBusinessSummaryDataItem: ConsumptionBusinessSummaryDataItem,
    ModifyAllocationRuleRequest: ModifyAllocationRuleRequest,
    DeleteAllocationRuleRequest: DeleteAllocationRuleRequest,
    CreateAllocationRuleResponse: CreateAllocationRuleResponse,
    BillTagInfo: BillTagInfo,
    ConditionBusiness: ConditionBusiness,
    AnalyseActionTypeDetail: AnalyseActionTypeDetail,
    DescribeCostExplorerSummaryRequest: DescribeCostExplorerSummaryRequest,
    DescribeCostSummaryByProductResponse: DescribeCostSummaryByProductResponse,
    DescribeAllocationTreeResponse: DescribeAllocationTreeResponse,
    DeleteAllocationTagResponse: DeleteAllocationTagResponse,
    AllocationTree: AllocationTree,
    DescribeBillDetailForOrganizationResponse: DescribeBillDetailForOrganizationResponse,
    BillDetailComponentConfig: BillDetailComponentConfig,
    DescribeCostSummaryByResourceResponse: DescribeCostSummaryByResourceResponse,
    DescribeBillSummaryByRegionRequest: DescribeBillSummaryByRegionRequest,
    AdjustInfoDetail: AdjustInfoDetail,
    CreateAllocationRuleRequest: CreateAllocationRuleRequest,
    ConsumptionRegionSummaryDataItem: ConsumptionRegionSummaryDataItem,
    BusinessSummaryInfo: BusinessSummaryInfo,
    DescribeBillSummaryRequest: DescribeBillSummaryRequest,
    DescribeBillResourceSummaryResponse: DescribeBillResourceSummaryResponse,
    DescribeGatherRuleDetailRequest: DescribeGatherRuleDetailRequest,
    DistributionBillDetail: DistributionBillDetail,
    DescribeDosageCosDetailByDateRequest: DescribeDosageCosDetailByDateRequest,
    DescribeBillAdjustInfoResponse: DescribeBillAdjustInfoResponse,
    DescribeAllocationRuleDetailRequest: DescribeAllocationRuleDetailRequest,
    DescribeAllocationUnitDetailResponse: DescribeAllocationUnitDetailResponse,
    DescribeBillSummaryByProductRequest: DescribeBillSummaryByProductRequest,
    AllocationUnit: AllocationUnit,
    AllocationRationExpression: AllocationRationExpression,
    DescribeVoucherUsageDetailsResponse: DescribeVoucherUsageDetailsResponse,
    ConsumptionSummaryTotal: ConsumptionSummaryTotal,
    BillDistributionResourceSummary: BillDistributionResourceSummary,
    DescribeCostDetailResponse: DescribeCostDetailResponse,
    VoucherInfos: VoucherInfos,
    DescribeCostSummaryByProjectResponse: DescribeCostSummaryByProjectResponse,
    AnalyseProjectDetail: AnalyseProjectDetail,
    ProjectSummaryOverviewItem: ProjectSummaryOverviewItem,
    DescribeBillSummaryByTagResponse: DescribeBillSummaryByTagResponse,
    ModifyGatherRuleRequest: ModifyGatherRuleRequest,
    DescribeBillSummaryByPayModeResponse: DescribeBillSummaryByPayModeResponse,
    DescribeBillSummaryByTagRequest: DescribeBillSummaryByTagRequest,
    AnalyseDetail: AnalyseDetail,
    DeleteGatherRuleRequest: DeleteGatherRuleRequest,
    DescribeAllocationRuleSummaryResponse: DescribeAllocationRuleSummaryResponse,
    AnalyseAmountDetail: AnalyseAmountDetail,
    ModifyGatherRuleResponse: ModifyGatherRuleResponse,
    CreateGatherRuleRequest: CreateGatherRuleRequest,
    DescribeBillResourceSummaryForOrganizationRequest: DescribeBillResourceSummaryForOrganizationRequest,
    DescribeCostSummaryByRegionRequest: DescribeCostSummaryByRegionRequest,
    ConsumptionSummaryTrend: ConsumptionSummaryTrend,
    DescribeBillDownloadUrlRequest: DescribeBillDownloadUrlRequest,
    DescribeBillSummaryByPayModeRequest: DescribeBillSummaryByPayModeRequest,
    DeleteGatherRuleResponse: DeleteGatherRuleResponse,
    ApplicableProducts: ApplicableProducts,
    ConditionPayMode: ConditionPayMode,
    DescribeCostSummaryByProjectRequest: DescribeCostSummaryByProjectRequest,
    BillDetailAssociatedOrder: BillDetailAssociatedOrder,
    BillDetail: BillDetail,
    DescribeBillDetailResponse: DescribeBillDetailResponse,
    Deal: Deal,
    DescribeDealsByCondResponse: DescribeDealsByCondResponse,
    DescribeBillSummaryByProjectRequest: DescribeBillSummaryByProjectRequest,
    DescribeBillSummaryByProjectResponse: DescribeBillSummaryByProjectResponse,
    DescribeBillAdjustInfoRequest: DescribeBillAdjustInfoRequest,
    DeleteAllocationRuleResponse: DeleteAllocationRuleResponse,
    TagDataInfo: TagDataInfo,
    SummaryTotal: SummaryTotal,
    BusinessSummaryTotal: BusinessSummaryTotal,
    CostComponentSet: CostComponentSet,
    AnalyseHeaderDetail: AnalyseHeaderDetail,
    AnalysePayModeDetail: AnalysePayModeDetail,
    DescribeBillSummaryResponse: DescribeBillSummaryResponse,
    AnalyseOwnerUinDetail: AnalyseOwnerUinDetail,
    Conditions: Conditions,
    AnalyseTimeDetail: AnalyseTimeDetail,
    RegionSummaryOverviewItem: RegionSummaryOverviewItem,
    ConsumptionProjectSummaryDataItem: ConsumptionProjectSummaryDataItem,
    AnalyseRegionDetail: AnalyseRegionDetail,
    ProductInfo: ProductInfo,
    DescribeAllocationUnitDetailRequest: DescribeAllocationUnitDetailRequest,
    DescribeBillSummaryForOrganizationRequest: DescribeBillSummaryForOrganizationRequest,
    ActionSummaryOverviewItem: ActionSummaryOverviewItem,
    DescribeBillDetailForOrganizationRequest: DescribeBillDetailForOrganizationRequest,
    DescribeVoucherUsageDetailsRequest: DescribeVoucherUsageDetailsRequest,
    DescribeBillResourceSummaryRequest: DescribeBillResourceSummaryRequest,
    BillDetailComponent: BillDetailComponent,
    ConditionRegion: ConditionRegion,
    TagSummaryOverviewItem: TagSummaryOverviewItem,
    ConsumptionResourceSummaryConditionValue: ConsumptionResourceSummaryConditionValue,
    DescribeCostSummaryByRegionResponse: DescribeCostSummaryByRegionResponse,
    DescribeCostDetailRequest: DescribeCostDetailRequest,
    GatherRuleSummary: GatherRuleSummary,
    DescribeTagListRequest: DescribeTagListRequest,
    DescribeBillResourceSummaryForOrganizationResponse: DescribeBillResourceSummaryForOrganizationResponse,
    DescribeAllocationTreeRequest: DescribeAllocationTreeRequest,
    DescribeCostSummaryByResourceRequest: DescribeCostSummaryByResourceRequest,
    CreateAllocationTagRequest: CreateAllocationTagRequest,
    ExcludedProducts: ExcludedProducts,
    PayModeSummaryOverviewItem: PayModeSummaryOverviewItem,
    DescribeAllocationRuleDetailResponse: DescribeAllocationRuleDetailResponse,
    UsageDetails: UsageDetails,
    AnalyseBusinessDetail: AnalyseBusinessDetail,
    AnalyseConditions: AnalyseConditions,
    CostDetail: CostDetail,
    DescribeBillSummaryByProductResponse: DescribeBillSummaryByProductResponse,
    DescribeBillSummaryByRegionResponse: DescribeBillSummaryByRegionResponse,
    CreateAllocationTagResponse: CreateAllocationTagResponse,
    ModifyAllocationUnitRequest: ModifyAllocationUnitRequest,
    DescribeBillDownloadUrlResponse: DescribeBillDownloadUrlResponse,
    ConsumptionResourceSummaryDataItem: ConsumptionResourceSummaryDataItem,
    DescribeAccountBalanceRequest: DescribeAccountBalanceRequest,
    DescribeBillDetailRequest: DescribeBillDetailRequest,
    AnalyseZoneDetail: AnalyseZoneDetail,
    DescribeVoucherInfoResponse: DescribeVoucherInfoResponse,
    AllocationRulesSummary: AllocationRulesSummary,
    SummaryDetail: SummaryDetail,
    DescribeAccountBalanceResponse: DescribeAccountBalanceResponse,
    BusinessSummaryOverviewItem: BusinessSummaryOverviewItem,
    CreateGatherRuleResponse: CreateGatherRuleResponse,
    UsageRecords: UsageRecords,
    ModifyAllocationRuleResponse: ModifyAllocationRuleResponse,
    DescribeVoucherInfoRequest: DescribeVoucherInfoRequest,
    DescribeDealsByCondRequest: DescribeDealsByCondRequest,
    CreateAllocationUnitResponse: CreateAllocationUnitResponse,
    DescribeDosageCosDetailByDateResponse: DescribeDosageCosDetailByDateResponse,
    AnalyseHeaderTimeDetail: AnalyseHeaderTimeDetail,
    AllocationRuleExpression: AllocationRuleExpression,
    DescribeBillSummaryForOrganizationResponse: DescribeBillSummaryForOrganizationResponse,
    DeleteAllocationUnitResponse: DeleteAllocationUnitResponse,
    ConditionProject: ConditionProject,
    DescribeTagListResponse: DescribeTagListResponse,
    CosDetailSets: CosDetailSets,
    DescribeAllocationRuleSummaryRequest: DescribeAllocationRuleSummaryRequest,
    ModifyAllocationUnitResponse: ModifyAllocationUnitResponse,
    AnalyseConditionDetail: AnalyseConditionDetail,
    BillResourceSummary: BillResourceSummary,
    DeleteAllocationUnitRequest: DeleteAllocationUnitRequest,
    DescribeGatherRuleDetailResponse: DescribeGatherRuleDetailResponse,
    AllocationRuleOverview: AllocationRuleOverview,

}
