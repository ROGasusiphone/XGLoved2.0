const config = require("./config.js");

App({
  onLaunch: function () {

    this.globalData.apiUrl = config.domain;
   
    this.globalData.imageUrl = config.qiniuDomain+"/";
    this.globalData.bgIimage = config.bgImage;
    
    this.globalData.reloadSale = false;
    this.globalData.reloadHome = false;
    this.globalData.param = false;
    this.globalData.authStatus = false;
  },

  globalData: {
    appId:null,
    userInfo: null,
    apiUrl: null,
    color: '0aecc3',
    imageUrl:'',
    bgImage:'',
    changeSchoolPost:false,
    changeSchoolSale: false,
    changeSchoolMatch: false,
    postHelp:false,
    reloadSale:false,
    reloadHome:false,
    param:false,
    authStatus:false
  }
})