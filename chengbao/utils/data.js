module.exports = {
  mtData: mtData,
  searchmtdata: searchmtdata
}

var mt_data = mtData()

function searchmtdata(book) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.book ==book) {
      result = mt
    }
  }
  return result || {}
}

function mtData() {
  var arr = {
    list: [
      {
        book: '白夜行',
        author: '[日] 东野圭吾',
        prise: ' 29.80元',
        intro: '南海出版公司',
        isbn: '9787544242516',
        bookimg: '../../img/白夜行.jpg'
      }, {
        book: '兵经百字',
        author: '校注',
        prise: '15.00元',
        intro: '中州古籍',
        isbn: '9787534833410',
        bookimg: '../../img/兵经百字.jpg'
      }, {
        book: '明朝那些事儿',
        author: '当年明月',
        prise: '358.20元',
        intro: '中国海关出版社',
        isbn: '9787801656087',
        bookimg: '../../img/明朝那些事儿.jpg'
      }, {
        book: '枪炮、病菌与钢铁',
        author: '[美] 贾雷德·戴蒙德 ',
        prise: ' 45.00元',
        intro: '上海世纪出版集团',
        isbn: ' 9787532739233',
        bookimg: '../../img/枪炮、病菌与钢铁.jpg'
      }, {
        book: '情人',
        author: 'LAmant',
        prise: '20.00元',
        intro: '上海译文出版社',
        isbn: '9787532736874',
        bookimg: '../../img/情人.jpg'
      }, {
        book: '唐璜',
        author: '[英] 乔治·戈登·拜伦 / 校注 王佐良',
        prise: '34.75元',
        intro: '人民文学出版社',
        isbn: '9787020017607',
        bookimg: '../../img/唐璜.jpg'
      }, {
        book: '万历五十年',
        author: '[美] 黄仁宇',
        prise: '18.00元',
        intro: '生活·读书·新知三联书店',
        isbn: '9787108009821',
        bookimg: '../../img/万历五十年.jpg'
      }  , {
        book: '月亮与六便士',
        author: '[英] 威廉·萨默塞特·毛姆',
        prise: '15.00元',
        intro: '上海译文出版社',
        isbn: ' 9787532739547',
        bookimg: '../../img/月亮与六便士.jpg'
      }
    ]
  }
  return arr
}  

