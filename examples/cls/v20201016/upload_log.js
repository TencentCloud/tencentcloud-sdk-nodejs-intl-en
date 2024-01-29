const tencentcloud = require("../../../../tencentcloud-sdk-nodejs-intl-en");
const protobuf = require("protobufjs")
const lz4 = require("lz4")
const path = require("path")

const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;
const CommonClient = tencentcloud.common.CommonClient

let cred = new Credential(process.env.TENCENTCLOUD_SECRET_ID, process.env.TENCENTCLOUD_SECRET_KEY);

let httpProfile = new HttpProfile();
httpProfile.endpoint = "cls.tencentcloudapi.com";
httpProfile.headers["X-CLS-TopicId"] = "c241abf2-7acd-470d-845a-fb1da6916c99"; // 替换为自己业务的 topic
httpProfile.headers["X-CLS-HashKey"] = ""; // 可选参数
httpProfile.headers["X-CLS-CompressType"] = "lz4"; // lz4压缩方式, 空字符串意味不压缩

let clientProfile = new ClientProfile();
clientProfile.signMethod = "TC3-HMAC-SHA256";
clientProfile.httpProfile = httpProfile;

let client = new CommonClient('cls.tencentcloudapi.com', '2020-10-16', cred, "ap-guangzhou", clientProfile);

let params = compress(getBodyInfo())

client.requestOctetStream('UploadLog', params, function(err, response) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(response)
})


function compress(input) {
  const output = Buffer.alloc(lz4.encodeBound(input.length))
  const compressedBlockSize = lz4.encodeBlock(input, output)
  return output.slice(0, compressedBlockSize)
}

function getBodyInfo() {
  const root = protobuf.loadSync(path.join(__dirname, "cls.proto"))
  const LogGroupList = root.lookupType("cls.LogGroupList")
  const payload = {
    logGroupList: [
      {
        logs: [
          {
            time: Date.now(),
            contents: [
              {
                key: "name",
                value: "张三",
              },
              {
                key: "age",
                value: "18",
              },
            ],
          },
        ],
      },
    ],
  }
  return LogGroupList.encode(payload).finish()
}
