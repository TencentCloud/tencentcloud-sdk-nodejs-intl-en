# Overview
Welcome to Tencent Cloud Software Development Kit (SDK) 3.0, a companion tool for the TencentCloud API 3.0 platform.
Tencent Cloud SDK for Node.js helps Node.js developers debug and use TencentCloud APIs with ease. This document describes Tencent Cloud SDK for Node.js and how to quickly use it with code examaples provided.
# Dependent Environment
1. NODEJS 7.10.1 or higher
2. Activate your product in the Tencent Cloud Console
3. Get the `SecretID`, `SecretKey`, and endpoint. The general format of endpoint is `\*.tencentcloudapi.com`. For example, the endpoint of CVM is `cvm.tencentcloudapi.com`. For more information, please see the documentation of the specified product.

# Installation
Before installing Tencent Cloud SDK for Node.js and using TencentCloud API, apply for security credentials in the Tencent Cloud Console. Security credential consists of `SecretID` and `SecretKey`. `SecretID` is for identifying the API requester. `SecretKey` is a key used for signature string encryption and authentication by the server. Please keep your `SecretKey` private and do not disclose it to others.
## Installing via npm
Installing via npm is the recommended way to use the SDK for Node.js. npm is a  package manager for Node.js. For more information, please visit [npm's official website](https://www.npmjs.com/).
1. Execute the following installation command:
   
    > npm install tencentcloud-sdk-nodejs-intl-en --save
2. Import the corresponding module code in your code. For more information, please see the example.

## Installing via source package
1. Go to the [Github code hosting page](https://github.com/tencentcloud/tencentcloud-sdk-nodejs-intl-en) to download the source code package.
2. Decompress the source package to an appropriate location in your project.
3. Import the corresponding module code into your code. For more information, please see the example. 

# Example
```js
const tencentcloud = require("../../../../tencentcloud-sdk-nodejs-intl-en");

// Import the client models of the corresponding product module.
const CvmClient = tencentcloud.cvm.v20170312.Client;
const models = tencentcloud.cvm.v20170312.Models;

const Credential = tencentcloud.common.Credential;

// Instantiate an authentication object. The Tencent Cloud account `secretId` and `secretKey` need to be passed in as the input parameters
let cred = new Credential("secretId", "secretKey");

// Instantiate the client object of the requested product (with CVM as an example)
let client = new CvmClient(cred, "ap-shanghai");

// Instantiate a request object
let req = new models.DescribeInstancesRequest();

// Call the API you want to access through the client object. You need to pass in the request object and the response callback function
client.DescribeInstances(req, function(err, response) {
    // The request is returned exceptionally, and the exception information is printed
    if (err)
        console.log(err);
        return;
    }
    // The request is returned normally, and the response object is printed
    console.log(response.to_json_string());
});
```

## More examples

For more examples, please go to the `examples` directory.

# Relevant Configuration

## Proxy

If there is a proxy in your environment, you need to set the system environment variable `https_proxy`; otherwise, it may not be called normally, and a connection timeout exception will be thrown.

# Legacy SDK
We recommend using the new version of the SDK for NODE.js. If you have to use a legacy SDK, please go to the [GitHub repository](https://github.com/CFETeam/qcloudapi-sdk) to download it.
