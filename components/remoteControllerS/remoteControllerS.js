Component({
  options: {
    addGlobalClass: true,
  },
  properties: {

  },

  data: {
    remoteControFlag: false,
  },

  methods: {
    change() {
      this.setData({
        remoteControFlag: !this.data.remoteControFlag
      })
    },
    goRemoteController(){
      wx.switchTab({
        url: '../../pages/remoteControl/remoteControl'　　// 遥控器页面
      })
    }
  
  }
})