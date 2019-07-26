//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
    movies: [],   // 当前热映相关数据    

  },
  // 加载当前热映电影目录
  movieList() {
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 5000

    })
    let thisPage = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        thisPage.setData({
          movies: res.data.subjects,
        })
        console.log(res.data.subjects)
        wx.hideLoading();

      },
    })
  },
  gotoSearch: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  gotoList: function () {
    wx.navigateTo({
      url: '../programList/programList',
    })
  },
  onLoad: function () {
    this.movieList();

  }
})
