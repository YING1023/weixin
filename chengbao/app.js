App({


  onShow: function () {




    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    wx.getSetting({
      success(res) {
        console.log(res.authSetting)
        if (!res.authSetting['scope.camera']) {
          console.log('调用不了')
          wx.authorize({
            scope: 'scope.camera',
            success(res) {
              console.log( res.errMsg)
             
        
            }
          })
        }
      }
    }),

    console.log('App Show')

  },

 

  onHide: function () {
    console.log('App Hide')
  },


  onLaunch: function () {
    //清除本地储存
    try {
      //wx.clearStorageSync()
    } catch (e) { }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})