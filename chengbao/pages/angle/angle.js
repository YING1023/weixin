// mine.jsvar app = getApp()
Page({
  data: {
    myProfile: [
      { "desc": "书名", "id": "book" }, 
      { "desc": "作者", "id": "author" }, 
      { "desc": "价格", "id": "prise" },
      { "desc": "出版社", "id": "intro" }
    ],

    myisbn:{
       name: "isbn",
       isbn: ""
     } ,

     myinpt:{
    book:"",
    author:"",
    prise:"",
    intro:"",
    isbn :""
     }
    
  
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
    console.log('form发生了submit事件，携带数据为：', e.detail.value.book)
    wx.setStorage({
      key: e.detail.value.book,
      data: e.detail.value
    })
  },
//用相机获取isbn
  d2camera :function(){
    //调用相机
    wx.scanCode({
      success: (res) => {
    
        console.log(res);
        console.log(res.result);
        var newisbn = 'aaa'  ;
        this.setData({ 'myisbn.isbn': res.result });
        console.log(this.data.myisbn);
      }
    })
    console.log(this.data.myisbn);
  },



  onShow: function () {
    console.info("show")
  },


})
