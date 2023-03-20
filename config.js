const config={
  alianceKey:"VxbZVcQqkICH4rh7",//后台分配的allianceKey
  dev:{//开发环境
    domain:"http://127.0.0.1:8000/api/wechat",//后台接口地址
    qiniuDomain:"https://image.qiuhuiyi.cn",//七牛地址
    
  },
  prod:{//生产环境
    domain: "https://love.qiuhuiyi.cn/api/wechat",
    qiniuDomain: "https://image.qiuhuiyi.cn",
    
  }
}

const domain = config.prod.domain;
//const domain = config.dev.domain;

const qiniuDomain = config.prod.qiniuDomain;
const bgImage = config.prod.qiniuDomain;
const alianceKey = config.alianceKey;
const region = 'SCN';


module.exports = {
  domain, qiniuDomain, bgImage, alianceKey, region
}