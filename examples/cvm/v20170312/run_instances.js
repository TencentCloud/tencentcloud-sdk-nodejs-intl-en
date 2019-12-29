const tencentcloud = require("../../../../tencentcloud-sdk-nodejs-intl-en");

const CvmClient = tencentcloud.cvm.v20170312.Client;
const models = tencentcloud.cvm.v20170312.Models;

const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;

let cred = new Credential("secretId", "secretKey");

let httpProfile = new HttpProfile();
httpProfile.reqMethod = "POST";
httpProfile.reqTimeout = 30;
httpProfile.endpoint = "cvm.ap-shanghai.tencentcloudapi.com";

let clientProfile = new ClientProfile();
clientProfile.signMethod = "HmacSHA256";
clientProfile.httpProfile = httpProfile;

let client = new CvmClient(cred, "ap-shanghai", clientProfile);

let req = new models.RunInstancesRequest();

req.InternetAccessible = new models.InternetAccessible();
req.InternetAccessible.InternetChargeType = "TRAFFIC_POSTPAID_BY_HOUR";
req.InternetAccessible.InternetMaxBandwidthOut = 1;
req.InternetAccessible.PublicIpAssigned = true;

req.InstanceCount = 1;
req.Placement = new models.Placement();
req.Placement.Zone = "ap-shanghai-2";

req.SystemDisk = new models.SystemDisk();
req.SystemDisk.DiskType = "CLOUD_BASIC";
req.SystemDisk.DiskSize = 50;

req.LoginSettings = new models.LoginSettings();
req.LoginSettings.Password = "isd@cloud";

req.ImageId = "img-8toqc6s3";
req.InstanceChargeType = "POSTPAID_BY_HOUR";
req.EnhancedService = new models.EnhancedService();

req.InstanceName = "API-SDK-NODEJS";
req.InstanceType = "S2.SMALL1";

client.RunInstances(req, function(err, response) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(response.to_json_string());
});
