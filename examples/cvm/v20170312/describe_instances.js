const tencentcloud = require("../../../../tencentcloud-sdk-nodejs-intl-en");

const CvmClient = tencentcloud.cvm.v20170312.Client;
const models = tencentcloud.cvm.v20170312.Models;

const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;

let cred = new Credential(process.env.TENCENTCLOUD_SECRET_ID, process.env.TENCENTCLOUD_SECRET_KEY);
let httpProfile = new HttpProfile();
httpProfile.reqMethod = "POST";
httpProfile.reqTimeout = 30;
httpProfile.endpoint = "cvm.ap-shanghai.tencentcloudapi.com";
let clientProfile = new ClientProfile();
clientProfile.signMethod = "HmacSHA256";
clientProfile.httpProfile = httpProfile;
let client = new CvmClient(cred, "ap-shanghai", clientProfile);
let req = new models.DescribeInstancesRequest();
let filters = {
	Filters: [
	    {
	        Name: "zone",
	        Values: ["ap-shanghai-1", "ap-shanghai-2"]
	    },
	    {
	        Name: "instance-charge-type",
	        Values: ["POSTPAID_BY_HOUR"]
	    }
	]
};
req.from_json_string(JSON.stringify(filters));
client.DescribeInstances(req, function(err, response) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(response.to_json_string());
});
