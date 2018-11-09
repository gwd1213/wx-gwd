const app = getApp()
Page({
  getUserInfo: function (e) {
    console.log("111")
    app.globalData.userInfo = e.detail.userInfo
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
})