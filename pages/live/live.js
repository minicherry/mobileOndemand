var util=require('../../utils/util.js');
Page({
  data: {
    channelList:['本地频道','高清频道','卫视','央视'], 
    channelId:0,
    weekDayId:0,
    weekDateId:0,
    showDay :['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    date:util.formatDate(new Date()),     //当前日期
    weekDate: [],                         //一周的日期（今天和前六天）
    weekDays: [],                           //获得今天和前六天周几
    programList: [
      {
        "cName": "CCTV-5 体育", /*频道名称*/
        "pName": "午夜体育报道",/*节目名称*/
        "pUrl": "http://tv.cntv.cn/live/cctv5?date=2015-02-27&index=0",/*播放链接*/
        "time": "2015-02-27 00:00"/*播出时间*/
      },
      {
        "cName": "CCTV-5 体育",
        "pName": "赛事集锦-14/15赛季欧冠联赛1/8决赛首回合比赛集锦2",
        "pUrl": "http://tv.cntv.cn/live/cctv5?date=2015-02-27&index=1",
        "time": "2015-02-27 00:30"
      },
      {
        "cName": "CCTV-5 体育",
        "pName": "实况录像-14/15赛季欧洲冠军联赛1/8决赛第一回合:阿森纳—摩纳哥",
        "pUrl": "http://tv.cntv.cn/live/cctv5?date=2015-02-27&index=2",
        "time": "2015-02-27 01:00"
      },
      {
        "cName": "CCTV-5 体育",
        "pName": "实况录像-14/15赛季欧洲冠军联赛1/8决赛第一回合:勒沃库森—马德里竞技",
        "pUrl": "http://tv.cntv.cn/live/cctv5?date=2015-02-27&index=3",
        "time": "2015-02-27 02:30"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "动物世界",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=0",
        "time": "2015-03-12 00:35"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "人与自然",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=1",
        "time": "2015-03-12 01:07"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "寻宝",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=2",
        "time": "2015-03-12 01:36"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "生活早参考",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=3",
        "time": "2015-03-12 02:28"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "精彩一刻",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=4",
        "time": "2015-03-12 03:00"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "精彩一刻",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=5",
        "time": "2015-03-12 03:33"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "开讲啦",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=6",
        "time": "2015-03-12 03:46"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "今日说法",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=7",
        "time": "2015-03-12 04:31"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "新闻联播",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=8",
        "time": "2015-03-12 04:59"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "人与自然",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=9",
        "time": "2015-03-12 05:29"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "朝闻天下",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=10",
        "time": "2015-03-12 06:00"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "生活早参考",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=11",
        "time": "2015-03-12 08:35"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "天天饮食",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=12",
        "time": "2015-03-12 09:10"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "电视剧：我的故乡晋察冀5/40",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=13",
        "time": "2015-03-12 09:28"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "电视剧：我的故乡晋察冀6/40",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=14",
        "time": "2015-03-12 10:18"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "电视剧：我的故乡晋察冀7/40",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=15",
        "time": "2015-03-12 11:06"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "新闻30分",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=16",
        "time": "2015-03-12 12:00"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "今日说法",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=17",
        "time": "2015-03-12 12:34"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "电视剧：微笑妈妈41",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=18",
        "time": "2015-03-12 13:12"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "电视剧：微笑妈妈42",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=19",
        "time": "2015-03-12 14:00"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "电视剧：微笑妈妈43",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=20",
        "time": "2015-03-12 14:49"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "电视剧：微笑妈妈44",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=21",
        "time": "2015-03-12 15:37"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "生活提示",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=22",
        "time": "2015-03-12 16:27"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "第一动画乐园（下午版）",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=23",
        "time": "2015-03-12 16:37"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "第一动画乐园（下午版）",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=24",
        "time": "2015-03-12 17:13"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "第一动画乐园（下午版）",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=25",
        "time": "2015-03-12 17:59"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "新闻联播",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=26",
        "time": "2015-03-12 18:59"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "焦点访谈",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=27",
        "time": "2015-03-12 19:39"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "前情提要《别让我看见》7/37",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=28",
        "time": "2015-03-12 20:03"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "电视剧：别让我看见7/37",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=29",
        "time": "2015-03-12 20:07"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "前情提要《别让我看见》8/37",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=30",
        "time": "2015-03-12 20:58"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "电视剧：别让我看见8/37",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=31",
        "time": "2015-03-12 21:03"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "晚间新闻",
        "url": "http://tv.cntv.cn/live/cctv1?date=2015-03-12&index=32",
        "time": "2015-03-12 21:59"
      },
      {
        "cName": "CCTV-1 综合",
        "pName": "撒贝宁时间",
        "url": "http://tv.cntv.cn/live/cctv1",
        "time": "2015-03-12 22:37"
      }
    ],                                 //节目列表
    TVStationList:[
      {
        "channelName": "CCTV-1 综合",
        "rel": "cctv1",
        "url": "http://tv.cntv.cn/live/cctv1"
      },
      {
        "channelName": "CCTV-2 财经",
        "rel": "cctv2",
        "url": "http://tv.cntv.cn/live/cctv2"
      },
      {
        "channelName": "CCTV-3 综艺",
        "rel": "cctv3",
        "url": "http://tv.cntv.cn/live/cctv3"
      },
      {
        "channelName": "CCTV-4 (亚洲)",
        "rel": "cctv4",
        "url": "http://tv.cntv.cn/live/cctv4"
      },
      {
        "channelName": "CCTV-4 (欧洲)",
        "rel": "cctveurope",
        "url": "http://tv.cntv.cn/live/cctveurope"
      },
      {
        "channelName": "CCTV-4 (美洲)",
        "rel": "cctvamerica",
        "url": "http://tv.cntv.cn/live/cctvamerica"
      },
      {
        "channelName": "CCTV-5 体育",
        "rel": "cctv5",
        "url": "http://tv.cntv.cn/live/cctv5"
      },
      {
        "channelName": "CCTV-6 电影",
        "rel": "cctv6",
        "url": "http://tv.cntv.cn/live/cctv6"
      },
      {
        "channelName": "CCTV-7 军事农业",
        "rel": "cctv7",
        "url": "http://tv.cntv.cn/live/cctv7"
      },
      {
        "channelName": "CCTV-8 电视剧",
        "rel": "cctv8",
        "url": "http://tv.cntv.cn/live/cctv8"
      },
      {
        "channelName": "CCTV-9 纪录",
        "rel": "cctvjilu",
        "url": "http://tv.cntv.cn/live/cctvjilu"
      },
      {
        "channelName": "CCTV-9 纪录(英)",
        "rel": "cctvdoc",
        "url": "http://tv.cntv.cn/live/cctvdoc"
      },
      {
        "channelName": "CCTV-10 科教",
        "rel": "cctv10",
        "url": "http://tv.cntv.cn/live/cctv10"
      },
      {
        "channelName": "CCTV-11 戏曲",
        "rel": "cctv11",
        "url": "http://tv.cntv.cn/live/cctv11"
      },
      {
        "channelName": "CCTV-12 社会与法",
        "rel": "cctv12",
        "url": "http://tv.cntv.cn/live/cctv12"
      },
      {
        "channelName": "CCTV-13 新闻",
        "rel": "cctv13",
        "url": "http://tv.cntv.cn/live/cctv13"
      },
      {
        "channelName": "CCTV-14 少儿",
        "rel": "cctvchild",
        "url": "http://tv.cntv.cn/live/cctvchild"
      },
      {
        "channelName": "CCTV-15 音乐",
        "rel": "cctv15",
        "url": "http://tv.cntv.cn/live/cctv15"
      },
      {
        "channelName": "CCTV-NEWS",
        "rel": "cctv9",
        "url": "http://tv.cntv.cn/live/cctv9"
      },
      {
        "channelName": "CCTV-Français",
        "rel": "cctvfrench",
        "url": "http://tv.cntv.cn/live/cctvfrench"
      },
      {
        "channelName": "CCTV-Español",
        "rel": "cctvxiyu",
        "url": "http://tv.cntv.cn/live/cctvxiyu"
      },
      {
        "channelName": "CCTV-العربية",
        "rel": "cctvarabic",
        "url": "http://tv.cntv.cn/live/cctvarabic"
      },
      {
        "channelName": "CCTV-Русский",
        "rel": "cctvrussian",
        "url": "http://tv.cntv.cn/live/cctvrussian"
      },
      {
        "channelName": "CCTV体育赛事",
        "rel": "cctv5plus",
        "url": "http://tv.cntv.cn/live/cctv5plus"
      }
    ],                                         //电视频道列表
    TVStationId:0,
    TVStationName:''
  },
  gotoSearch: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  goChannelIndex(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      channelId: index
    })
  },
  goweekDateIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      weekDateId: index,
      weekDayId:index
    })
  },
  //一周的日期（今天和前六天）
  getWeekDate(){
    for(var i=0;i>=-6;i--){
      let  weekDateEach=util.getDateStr(this.data.date, i)
      this.data.weekDate.push(weekDateEach);
    }
    this.setData({
      weekDate: this.data.weekDate
    })
  },
  //获得今天和前六天周几
  getWeekDay(){
    let now = new Date();
    let nowDayOfWeek = now.getDay(); //今天是本周的第几天
    for (var i = 0; i <= 6; i++){     
      let weekDay=this.data.showDay[(nowDayOfWeek - i) < 0 ? (nowDayOfWeek - i + 7) : (nowDayOfWeek - i)]      
      this.data.weekDays.push(weekDay)
    }
    this.setData({
      weekDays: this.data.weekDays
    })
  },
  onLoad: function (options) {
    this.getWeekDate();
    this.getWeekDay();   
    this.setData({
      TVStationName: this.data.TVStationList[0].channelName
    })
  },

  goTVStationIndex(e) {
    let index = e.currentTarget.dataset.index;
    let name = e.currentTarget.dataset.name;
    console.log(e)
    this.setData({
      TVStationId: index,
      TVStationName: name
    })
  },
  
})