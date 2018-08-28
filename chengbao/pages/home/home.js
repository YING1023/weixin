//home/home.js
var fileData = require('../../utils/data.js')

Page({
  
  onLoad: function () {
  console.log('onLoad');
  console.log(this.data.alldata);
  },

  data: {
    inputShowed: false,
    inputVal: "",
    alldata: fileData.mtData().list
  },


//search的方法
 
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
  
    });
  },

  tosearch:function(){
    var search;
    var inupt = this.data.inputVal
    //设置链接传递参数
    wx.navigateTo({
      url: '../search/search?search=' + inupt
    })
  },
//local搜索
  localsearch:function(){
    var s = this.data.inputVal
    wx.getStorageInfo({
      success: function (res) {
        //调用data
        for (var i = 0; i < res.keys.length; i++) {
         
          if (res.keys[i]==s) {
            wx.navigateTo({
              url: '../search/search?search=' + s
            })
            console.log('我是本地搜索'+s);
          }

         }
      }
   })
    

  },


  
  onShow: function () {
    console.log("show")
  }
  
})
