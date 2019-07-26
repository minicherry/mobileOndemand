// pages/login/login.js
Page({

  data: {
    name:'',
    password:''
  },

  inputName:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  inputPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  submit:function(){
    var that=this;
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        'name':that.data.name,
        'password':that.data.password
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})