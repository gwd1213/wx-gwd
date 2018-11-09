const app = getApp()
Page({
  data: {
    markers: [{
      iconPath: "/assets/imgs/location.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }]
  },
  onLoad() {
    this.setData({
      userInfo: app.globalData.userInfo,
    })
    wx.getLocation({
      success: (res) => {
        const {
          latitude,
          longitude
        } = res;
        this.setData({
          markers: this.data.markers.concat({
            iconPath: "/assets/imgs/location.png",
            id: 0,
            latitude,
            longitude,
            width: 50,
            height: 50
          }),
          latitude,
          longitude,
        })
      },
    })
  }
})