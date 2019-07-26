Page({
  data: {
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
  onLoad: function () {
    this.movieList();

  }
})
