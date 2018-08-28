//home/home.js
var fileData = require('../../utils/data.js')
Page({

  data: {
    inputShowed: false,
    inputVal: "",
    searchdata:'',
    book:"",
    bookimg:"",
    author:'',
    intro:'',
    isbn:''
  },

  onLoad: function (e) {
    console.log('onLoad')
    console.log('这里是search页面'+e.search);
    var s = e.search;
     /*
    //管理员模式
    var that= this
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
    
    
   
    //用户模式
    var result = fileData.searchmtdata(s)
    console.log("这是result"+result.isbn)
  
    this.setData({
      book: result.book,
      bookimg: result.bookimg,
      author: result.author,
      intro: result.intro,
      isbn: result.isbn
      
    });
   
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
 



  //search结束

  onShow: function () {
    console.log("show")
  }

})
