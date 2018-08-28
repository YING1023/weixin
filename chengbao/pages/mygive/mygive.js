Page({

  /**
   * 页面的初始数据
   */
  data: {
    mygivedata:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    
    var that = this;
    var b = [];

    //调用key

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
  

  
  onShow: function () {
    
  }
})