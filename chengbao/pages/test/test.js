//home/home.js
var fileData = require('../../utils/data.js')
Page({

  data: {
    book: "",
    bookimg: "",
    author: '',
    intro: '',
    isbn: '',
    prise:''
  },

  onLoad: function (e) {
    console.log('onLoad')
    console.log(e.book);
    var s = e.book;
/*
    //管理员模式
    var that = this
    wx.getStorage({
      key: s,
      success: function (des) {
        console.log('这里是search页面' + des.data.book);
        that.setData({
          book: des.data.book,
          bookimg: des.data.bookimg,
          author: des.data.author,
          intro: des.data.intro,
          isbn: des.data.isbn
        });
      }
    });
  */






    // 用户模式
    var result = fileData.searchmtdata(s)
    console.log("这是result" + result.book)
    //j接受链接传递的参数
    this.setData({
      book: result.book,
      bookimg: result.bookimg,
      author: result.author,
      intro: result.intro,
      isbn: result.isbn,
      prise: result.prise
    });
  
  },

  addbook:function() { 
    wx.redirectTo({
      url: '../borrow/borrow?borrow=' + this.data.book
    })

  },

  //search的方法
  //search结束

  onShow: function () {
    console.log("show")
  }

})
