Page({
  data: {
    movies: [],   // 当前热映相关数据    
    progarmType:['电影','电视剧','综艺','动漫','纪录片'],
    region: ['全部地区','内地', '韩国', '内地', '韩国', '内地', '韩国', '内地', '韩国', '内地', '韩国', '内地', '韩国', '内地', '韩国', '内地', '韩国', '内地', '韩国', '内地', '韩国', '内地', '韩国'],
    genre: ['全部类型','爱情', '都市', '家庭', '爱情', '都市', '家庭', '爱情', '都市', '家庭', '爱情', '都市', '家庭', '爱情', '都市', '家庭', '爱情', '都市', '家庭', '爱情', '都市', '家庭', '爱情', '都市', '家庭'],
    years: ['全部年份','2018', '2017', '2016', '2018', '2017', '2016', '2018', '2017', '2016', '2018', '2017', '2016', '2018', '2017', '2016', '2018', '2017', '2016', '2018', '2017', '2016','更早'],
    progarmTypeId: 0,
    regionId:0,
    genreId:0,
    yearsId:0
  },
  gotoSearch: function(e) {
    wx.navigateTo({
      url: '../search/search',
    })
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
      success: function(res) {
        thisPage.setData({
          movies: res.data.subjects,
        })
        console.log(res.data.subjects)
        wx.hideLoading();

      },
    })
  },
  //选择节目分类
  goProgarmTypeIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      progarmTypeId: index
    })
  },
  goRegionIndex(e) {
    let index = e.currentTarget.dataset.index;
    console.log(e)
    this.setData({
      regionId: index
    })
  },
  goGenreIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      genreId: index
    })
  },
  goYearsIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      yearsId: index
    })
  },
  onLoad: function() {
    this.movieList();
  },

})