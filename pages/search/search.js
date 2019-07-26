Page({

  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['视频', '频道'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    searchInput:'',
    searchRecord: [],
    hotSearchData:['火影忍者','航海王','33','44','55','66','77','88','99','00']
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  getSearchInput: function (e){
    this.setData({
      searchInput:e.detail.value
    })
  },

  openHistorySearch: function () {
    this.setData({
      searchRecord: wx.getStorageSync('searchRecord') || [],//若无储存则为空
    })
  },
  //点击搜索按钮提交表单跳转并储存历史记录  
  searchSubmitFn: function (e) {
    console.log(e)    
    var that = this    
    var searchInput = this.data.searchInput    
    var searchRecord = this.data.searchRecord    
    if (searchInput == '') {      //输入为空时的处理    
    }    
    else {
      let arrnum = searchRecord.indexOf(searchInput);
      //判断是否是重复的搜索记录
      if (arrnum==-1){   
        searchRecord.unshift(searchInput)    
        //将历史记录数组整体储存到缓存中    
      } 
      else{
        // 删除已存在后重新插入至数组
        searchRecord.splice(arrnum, 1)
        searchRecord.unshift(searchInput)
      }
      wx.setStorageSync('searchRecord', searchRecord)

    }
    this.setData({
      searchRecord: this.data.searchRecord
    })  
  },
  deleteHistory: function () {
    wx.clearStorageSync('searhRecord')
    this.setData({
      searchRecord: []
    })
  },
  turnSearch:function(e){
    console.log(this.data.searchRecord)
    console.log(e)
    this.setData({
      searchInput: e.currentTarget.dataset.name
    }) 
    this.searchSubmitFn()
  },
  returnLastPage:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad: function (options) {
    this.openHistorySearch();
  }

})