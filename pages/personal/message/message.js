const util = require('./../../../utils/util.js');
const http = require("./../../../utils/http.js");
const app = getApp();

Page({
  data: {
image:'tmp/wx46d5674c81153f30.o6zAJs3oh85Zb1lJE8oWix57vny0.2b862a6493fd893b7fbc37bd8dfd424f.jpg',
    baseImageUrl: app.globalData.imageUrl,
    messageList:[],
    pageSize: 10,
    pageNumber: 1,
    initPageNumber: 1,
    showGeMoreLoadin: false,
    notDataTips: false,
    param: app.globalData.param,
  },
  onLoad: function (option) {
    let objType = option.type;
    let messageType = option.new_message;
    this.getInboxList(objType, messageType);
    this.setData({ param: app.globalData.param })
  },
  /**
   * 获取消息列表
   */
  getInboxList: function (type, messageType){
    let _this = this;
    let message_type = messageType;
    http.get(`/user/${type}/inbox/${message_type}?page_size=${this.data.pageSize}&page_number=${this.data.pageNumber}`,{}, function (res){
       _this.setData({
         showGeMoreLoadin: false
       });
      let inboxs = res.data.data.page_data;
      let messageList = _this.data.messageList;
      if (inboxs.length == 0){
        _this.setData({
          notDataTips: true
        });
      }
      inboxs.map(item=>{
        messageList.push(item);
      });

      _this.setData({
        messageList: messageList,
        pageNumber: _this.data.pageNumber + 1,
      });
    });
  },
  /**
  * 上拉加载跟多
  */
  onReachBottom: function () {
    this.getInboxList();
    this.setData({
      showGeMoreLoadin: true
    });
  },
  /**
   * 打开详情
   */
  opendDetail:function(e){
    let objType = e.currentTarget.dataset.type;
    let objid = e.currentTarget.dataset.objid;
    let id = e.currentTarget.dataset.id;
    let parent = e.currentTarget.dataset.parent;
    let pobj = e.currentTarget.dataset.pobj;

    let chat = e.currentTarget.dataset.chat;
    let uid = e.currentTarget.dataset.uid;
    if (chat == 6) {
      wx.navigateTo({
        url: '/pages/personal/letter/letter?friend_id=' + uid
      })
    }

    if (parent == null){
      return;
    }

    if (chat == 7) {
      wx.navigateTo({
        url: `/pages/help/help_single/help_single?id=${objid}`
      })
      return false;
    }

    if (objType == 1){
        wx.navigateTo({
          url: `/pages/home/post_detail/post_detail?id=${id}`
        })
        return false;
    }

    if (objType == 2) {
      wx.navigateTo({
        url: `/pages/sale/comment_sale/comment_sale?id=${id}`
      })
      return false;
    }

    if (objType == 3) {
      wx.navigateTo({
        url: `/pages/match/match_detail/match_detail?id=${id}`
      })
      return false;
    }

    if (parent.obj_type == 5){
      wx.navigateTo({
        url: '/pages/home/topic_detail/topic_detail?id=' + pobj
      })
      return false;
    }
    
    if (objType == 4) {
      console.log('打开卖舍友');
        wx.navigateTo({
          url: `/pages/sale/comment_sale/comment_sale?id=${pobj}`
        })
        return false;
    }
  }
})
