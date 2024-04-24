const tencentcloud = require("../../tencentcloud-sdk-nodejs-intl-en");

const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;
const CommonClient = tencentcloud.common.CommonClient;

let cred = new Credential(process.env.TENCENTCLOUD_SECRET_ID, process.env.TENCENTCLOUD_SECRET_KEY);

let httpProfile = new HttpProfile();
httpProfile.endpoint = "cvm.tencentcloudapi.com";

let clientProfile = new ClientProfile();
clientProfile.httpProfile = httpProfile;

let client = new CommonClient('cvm.tencentcloudapi.com', '2017-03-12', cred, "ap-shanghai", clientProfile);

let params = {
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
}

client.request('DescribeInstances', params, function(err, response) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(response)
})
