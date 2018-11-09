import http from '../../utils/require.js'
var sliderWidth = 96;
Page({
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    }, () => {
      this.getNavList();
    });
  },
  getNavList() {
    http.get(`/api/productList/:${this.data.activeIndex}`)
      .then(resp => {
        this.setData({
          navList: resp.data.data.productList
        })
      })
  },
  data: {
    menuList: [],
    navList: [],
    imgUrls: [
      'http://t2.hddhhn.com/uploads/tu/201611/103/2.jpg',
      'http://t2.hddhhn.com/uploads/tu/201710/77/2da2de9c4e.jpg',
      'http://t2.hddhhn.com/uploads/tu/201710/73/a52c093017.jpg'
    ],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    tabs: [{
      id:1,
      text: "热销"
    }, {
      id: 2,
      text: "推荐"
    }, {
      id: 3,
      text: "活动"
    }],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    http.get('/api/menu')
      .then(resp => {
        this.setData({
          menuList :resp.data.data.menuList
        })
      })
    this.getNavList();
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