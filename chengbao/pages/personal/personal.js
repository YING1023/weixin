// mine.jsvar app = getApp()
Page({
  data: {
    "profile": {
      nickName: "hello world",
      'avatarUrl': '../../img/personal1.png'
      },
    myProfile: [
      { "desc": "捐赠图书", "url": "../mygive/mygive" }, 
      { "desc": "我的借阅", "url": "../borrow/borrow" }
      ]
  },

  
  onLoad: function () {
    console.log('onLoad')
  },
//获取用户头像
  getProfile(res) {
    console.log(res.detail.userInfo)
    this.setData({
      "profile": res.detail.userInfo
    })
  },
//管理员跳转
  touser:function(){
    wx.navigateTo({
      url: '../user/user'
    })
  },



  onShow: function () {
    console.info("show")
  },
  loadProfile: function (e) {
    console.log(e.target)
  }
})
