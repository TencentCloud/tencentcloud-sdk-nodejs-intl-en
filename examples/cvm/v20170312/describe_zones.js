const tencentcloud = require("../../../../tencentcloud-sdk-nodejs-intl-en");

const CvmClient = tencentcloud.cvm.v20170312.Client;
const models = tencentcloud.cvm.v20170312.Models;

const Credential = tencentcloud.common.Credential;

//let cred = new Credential("secretId", "secretKey");
let cred = new Credential(process.env.TENCENTCLOUD_SECRET_ID, process.env.TENCENTCLOUD_SECRET_KEY);
let client = new CvmClient(cred, "ap-shanghai");
let req = new models.DescribeZonesRequest();
client.DescribeZones(req, function(err, response) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(response.to_json_string());
});
