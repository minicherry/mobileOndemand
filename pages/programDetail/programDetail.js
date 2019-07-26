Page({

  data: {
    loading: true,
    movie:{},
  },

  onLoad: function (options) {
    let thisPage = this;
    console.log("传值：" + this.options.id)
    console.log("传值id：" + this.options.id)
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.id,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        thisPage.setData({
          loading: false,
          movie: res.data
        })
        console.log(res)
      },
    })
  }
})