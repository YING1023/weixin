var fileData = require('../../utils/data.js')
var util = require('../../utils/util.js')
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    borrowbook:{}
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (e) {
    
    console.log('borrowonload');
    console.log(e.borrow);
    //将e存储于缓存中
    var list={book:e.borrow,time:util.formatTime(new Date)}
    
    
    
    wx.setStorage({
      key: e.borrow,
      data: list
    })

    //调出缓存存于键值中
    var that = this;
    var b=[];
    
    //调用key
    
    wx.getStorageInfo({
      success: function (res) {
      //调用data
      for(var i=0;i<res.keys.length;i++){
        wx.getStorage({
          key:res.keys[i],
          success: function(des){
          console.log(des.data);
          b.push(des.data) 
          console.log("这是b" + b);
          that.setData({
            borrowbook: b
          });
          } 
        })
     }
        console.log("这是res.keys"+res.keys);
      
        
    }
  })
   
    },

  booklback:function(e){
    console.log("我是点击时间" + e.currentTarget.dataset.select)
    wx.removeStorage({
      key:e.currentTarget.dataset.select,
      success: function(res) {
        console.log(res.data)
        wx.redirectTo({
         url: '../borrow/borrow'
          })
        } 
      })
  },


      onShow:function () {
        console.log("show")
      }

})




