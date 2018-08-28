// pages/user_book/user_book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mygivedata: {},
    alive: "待审核"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    var that = this;
    var b = [];
    wx.getStorageInfo({
      success: function (res) {
        //调用data
        for (var i = 0; i < res.keys.length; i++) {
          wx.getStorage({
            key: res.keys[i],
            success: function (des) {
              console.log(des.data);
              b.push(des.data)
              console.log("这是b" + b);
              that.setData({
                mygivedata: b
              });
            }
          })
        }
        console.log("这是res.keys" + res.keys);


      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
//审核不通过
    bookdelete: function (e) {
    console.log("我是点击时间" + e.currentTarget.dataset.select)
    wx.removeStorage({
      key: e.currentTarget.dataset.select,
      success: function (res) {
        console.log(res.data)
        wx.redirectTo({
          url: '../user_book/user_book'
        })
      }
    })
  },
//审核通过
  isok:function(){

    this.setData({
      alive: '审核通过'
    });

  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})