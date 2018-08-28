// mine.jsvar app = getApp()
Page({
  data: {
    userval: '',
    passwordval: ''
  },



  onLoad: function () {
    console.log('onLoad')
  },

  onReady: function () {
    console.log('onReady')
  },

  //表单输出数据      
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log('[1]]为：', e.detail.value.password)
    console.log('[2]为：', e.detail.value.user)
    var u = e.detail.value.user
    var p = e.detail.value.password
    if(u=='user' && p=="123456"){
      wx.navigateTo({
        url: '../user_book/user_book'
      })     
    }
    else {
      wx.showToast({
        title: '请重新输入',
        icon: 'loading',
        duration: 1000
      })
    }
  
  },
 



  onShow: function () {
    console.info("show")
  },


})










